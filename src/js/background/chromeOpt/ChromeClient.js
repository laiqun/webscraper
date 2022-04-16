import {default as Log} from "../../log/log.js";//a = i(5),
import {Async} from "../../common/Async.js"//r = i(22),
import {Url} from "../../devtools/Selector/Url.js"//c = i(19),
import {UnrecoverablError} from "../UnrecoverablError.js"//, h = i(501)
import {Blocker} from "../blocker/Blocker.js"//, d = i(616)
import {ChromeTabs} from "./ChromeTabs.js"//l = i(196),
import {TabNetworkStatusListener} from "../pageLoadDetect/TabNetworkStatusListener.js"//o = i(511),
import {WebRTCBlocker} from "../blocker/WebRTCBlocker.js"//s = i(607),
import {InterceptsRedirects} from "../blocker/InterceptsRedirects.js"//const   u = i(608);
//ChromeClient不直接使用，而是作为 WebPageChromeTab的参数，由它来调用
class ChromeClient extends InterceptsRedirects {
    constructor(clientSetting) {
        super(clientSetting);
        this.pageLoadDelay = clientSetting.pageLoadDelay;
        this.failOnErrorPages = clientSetting.failOnErrorPages;
        this.blockImages = clientSetting.blockImages;
        this.blockImagesWhitelistDomains = clientSetting.blockImagesWhitelistDomains;
        this.blockWebRTC = clientSetting.blockWebRTC;
        this.webRTCBlocker = new WebRTCBlocker(clientSetting.blockWebRTC);
        this.blocker = new Blocker;
        this.reloadPageBeforeHashTagChange = clientSetting.reloadPageBeforeHashTagChange;
        this.tabNetworkStatusListener = new TabNetworkStatusListener({
            webNavigationEnabled: "undefined" == typeof chrome || undefined !== chrome.webNavigation
        });
    }

    async initMixins() {
        await this.tabNetworkStatusListener.init();
        await this.initImageBlocker();
        await this.webRTCBlocker.init();
        await this.blocker.init();
    }

    async deInitMixins() {
        await this.tabNetworkStatusListener.deInit();
        await this.deInitProxy();
        this.webRTCBlocker.deInit();
        await this.blocker.deInit();
    }

    async close() {
        await this.deInitMixins();
        await this.closeWindow();
    }

    async init() {
        await this.initMixins();
    }

    async isHashTagOnlyChange(oldURL) {
        if (this.reloadPageBeforeHashTagChange)//在hash变换前重载页面，返回false
            return false;
        if (null === oldURL.match(/#/))//找不到#，则返回flase
            return false;
        const curURL = await new Promise((resolve, reject) => {
            chrome.tabs.get(this.tab.tabId, tabInfo => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    Log.error("Failed to get tab info", {
                        error: lastError.toString()
                    });
                    return void reject("Failed to get tab info" + lastError.toString());
                }
                const curURL = tabInfo.url;
                resolve(curURL);
            });
        });
        return Url.isHashTagChange(curURL, oldURL);
    }

    async openPage(url) {
        this.url = url;
        Log.info("opening page", {
            url: url
        });
        const windowExists = await this.windowExists();
        let isHashTagChange = false;
        if (windowExists)
            isHashTagChange = await this.isHashTagOnlyChange(url);
        this.tabNetworkStatusListener.reset({
            isHashTagChange: isHashTagChange,
            pageLoadDelay: this.pageLoadDelay,
            tab: this.tab,
            url: this.url,
            failOnErrorPages: this.failOnErrorPages
        });
        await Promise.all([this.tabNetworkStatusListener.waitForTabNetworkStatus({
            minDuration: 0,
            lock: false
        }), (async () => {
            if (windowExists)
                await this.loadPageInTab(url);
            else
                await this.createWindow(url);
        })()]);
        await this.waitForPageLoad();
    }

    async openBlankPage(url, createNewTab = !1) {
        if (undefined !== this.externalPageLoadPromise)
            throw new Error("Starting open blank page load while external load hasn't completed");
        const windowExists = await this.windowExists();
        if(!url) //如果没有URL，则拿一下URL
            url = chrome.extension.getURL("empty-page.html");
        const oldTabId = this.tab.tabId;
        if(createNewTab )
            this.tab.tabId = void 0;
        this.tabNetworkStatusListener.reset({
            isHashTagChange: false,
            pageLoadDelay: 50,
            tab: this.tab,
            url: url,
            failOnErrorPages: false
        });
        await Promise.all([this.tabNetworkStatusListener.waitForTabNetworkStatus({
            minDuration: 0,
            lock: false
        })(async () => {
            if (windowExists)
                if (createNewTab) {
                    Log.info("creating new blank page tab");
                    const t = await ChromeTabs.create({
                        windowId: this.tab.windowId,
                        url: url,
                        active: false
                    });
                    this.tab.tabId = t.id;
                } else
                    await this.loadPageInTab(url);
            else
                await this.createWindow(url);
        })()]);
        if(createNewTab)
        {
            Log.info("Removing old tab");
            await ChromeTabs.remove(oldTabId);
        }
        Log.info("blank page loaded");
    }

    getPupeteerPage() {
    }

    getPageLoadState() {
        const state = this.tabNetworkStatusListener.getState();
        return {
            contentType: state.headersContentType,
            redirectedAfterPageLoadComplete: state.redirectDetectedAfterMainPageLoad,
            statusCode: state.headersStatusCode
        };
    }

    async setNetworkListenerPageAlmostLoaded() {
        const tabInfo = await ChromeTabs.get(this.tab.tabId);
        this.tabNetworkStatusListener.setAlmostLoaded({
            isHashTagChange: false,
            pageLoadDelay: 100,
            tab: this.tab,
            url: tabInfo.url,
            failOnErrorPages: false
        });
    }

    async waitForPageLoadComplete(e, minDuration) {
        await this.tabNetworkStatusListener.waitForTabNetworkStatus({
            minDuration: minDuration,
            lock: false
        });
    }

    async initExternalPageLoad(url) {
        if (undefined !== this.externalPageLoadPromise)
            throw new UnrecoverablError("Starting external page load while previous hasn't completed");
        this.url = url;
        Log.info("opening page", {
            url: url
        });
        if (!(await this.windowExists()))
            throw new Error("cannot initiate external page load awaiter if window doesn't exist");
        const isHashTabOnlyChange = await this.isHashTagOnlyChange(url);
        this.tabNetworkStatusListener.reset({
            isHashTagChange: isHashTabOnlyChange,
            pageLoadDelay: this.pageLoadDelay,
            tab: this.tab,
            url: this.url,
            failOnErrorPages: this.failOnErrorPages
        });
        this.externalPageLoadPromise = this.tabNetworkStatusListener.waitForTabNetworkStatus({
            minDuration: 0,
            lock: true
        });
    }

    async awaitExternalPageLoad() {
        try {
            await Promise.all([this.externalPageLoadPromise, this.tabNetworkStatusListener.unlock()]);
            await this.waitForPageLoad();
        } finally {
            this.externalPageLoadPromise = undefined;
        }
    }

    setBlockedUrls(urls) {
        this.blocker.setBlockedUrls(urls);
        return Promise.resolve();
    }

    async loadPageInTab(url) {
        Log.debug("Loading url in tab", {
            url: url
        });
        const promise_item = ChromeTabs.update(this.tab.tabId, {
            url: url
        });
        await Async.timeoutPromise(promise_item, 60000, "tabUpdatePromise");
        const waitedURL = await ChromeTabs.waitForUrl(this.tab.tabId, url, 1000, false);
        if(waitedURL.url !== url && waitedURL.url.startsWith("chrome-extension") )
            Log.notice("chrome tab didn't start loading. Still empty page", {
                url: url,
                tabUrl: waitedURL.url,
                status: waitedURL.status
            }) ;
        else
            Log.debug("chrome tab check", {
                url: url,
                tabUrl: waitedURL.url,
                status: waitedURL.status
            });
    }
}


export {ChromeClient}