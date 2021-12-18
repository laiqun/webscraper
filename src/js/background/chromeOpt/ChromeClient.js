import {default as a} from "../../log/log.js";//a = i(5),
import * as r from "../../common/Async.js"//r = i(22),
import * as c from "../../devtools/Selector/Url.js"//c = i(19),
import * as h from "../UnrecoverablError.js"//, h = i(501)
import * as d from "../blocker/Blocker.js"//, d = i(616)
import * as l from "./ChromeTabs.js"//l = i(196),
import * as o from "../pageLoadDetect/TabNetworkStatusListener.js"//o = i(511),
import * as s from "../blocker/WebRTCBlocker.js"//s = i(607),
import * as u from "../blocker/InterceptsRedirects.js"//const   u = i(608);
//ChromeClient不直接使用，而是作为 WebPageChromeTab的参数，由它来调用
class ChromeClient extends u.InterceptsRedirects {
    constructor(clientSetting) {
        super(clientSetting);
        this.pageLoadDelay = clientSetting.pageLoadDelay;
        this.failOnErrorPages = clientSetting.failOnErrorPages;
        this.blockImages = clientSetting.blockImages;
        this.blockImagesWhitelistDomains = clientSetting.blockImagesWhitelistDomains;
        this.blockWebRTC = clientSetting.blockWebRTC;
        this.webRTCBlocker = new s.WebRTCBlocker(clientSetting.blockWebRTC);
        this.blocker = new d.Blocker;
        this.reloadPageBeforeHashTagChange = clientSetting.reloadPageBeforeHashTagChange;
        this.tabNetworkStatusListener = new o.TabNetworkStatusListener({
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
                    a.error("Failed to get tab info", {
                        error: lastError.toString()
                    });
                    return void reject("Failed to get tab info" + lastError.toString());
                }
                const curURL = tabInfo.url;
                resolve(curURL);
            });
        });
        return c.Url.isHashTagChange(curURL, oldURL);
    }

    async openPage(url) {
        this.url = url;
        a.info("opening page", {
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
                    a.info("creating new blank page tab");
                    const t = await l.ChromeTabs.create({
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
            a.info("Removing old tab");
            await l.ChromeTabs.remove(oldTabId);
        }
        a.info("blank page loaded");
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
        const tabInfo = await l.ChromeTabs.get(this.tab.tabId);
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
            throw new h.UnrecoverablError("Starting external page load while previous hasn't completed");
        this.url = url;
        a.info("opening page", {
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
        a.debug("Loading url in tab", {
            url: url
        });
        const promise_item = l.ChromeTabs.update(this.tab.tabId, {
            url: url
        });
        await r.Async.timeoutPromise(promise_item, 60000, "tabUpdatePromise");
        const waitedURL = await l.ChromeTabs.waitForUrl(this.tab.tabId, url, 1000, false);
        if(waitedURL.url !== url && waitedURL.url.startsWith("chrome-extension") )
            a.notice("chrome tab didn't start loading. Still empty page", {
                url: url,
                tabUrl: waitedURL.url,
                status: waitedURL.status
            }) ;
        else
            a.debug("chrome tab check", {
                url: url,
                tabUrl: waitedURL.url,
                status: waitedURL.status
            });
    }
}


export {ChromeClient}