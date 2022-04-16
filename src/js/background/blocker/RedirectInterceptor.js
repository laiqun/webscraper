import {ChromeTabs} from "../chromeOpt/ChromeTabs.js"//a = i(196),
import {TabNetworkStatusListener} from "../pageLoadDetect/TabNetworkStatusListener.js"//o = i(511),
import {Async} from "../../common/Async.js"//s = i(22),
import {ClickActionTypes} from "../../contentjs/Action/ClickActionTypes.js"//r = i(83),
class RedirectInterceptor{
    constructor(e) {
        this.started = false;
        this.duration = 5000;
        this.tab = e.tab;
        this.chromeClient = e.chromeClient;
        this.onNetworkRequest = this.onNetworkRequest.bind(this);
    }

    async clickAndWaitForRedirectUrl(e) {
        if (this.started)
            throw new Error("clickAndWaitForRedirectUrl already running");
        this.started = true;
        try {
            await this.createTabDuplicate();
            this.initTimeout();
            this.initNetworkEventListener();
            const t = new Promise((resolve, reject) => {
                this.callbackAccept = resolve;
            });
            await this.clickInDuplicateTab(e);
            return  await t;
        } finally {
            await this.closeDuplicateTab();
            this.duplicateTabId = undefined;
        }
    }

    initNetworkEventListener() {
        const e = {
            urls: ["<all_urls>"],
            tabId: this.duplicateTabId,
            types: ["main_frame"]
        };
        chrome.webRequest.onBeforeRequest.addListener(this.onNetworkRequest, e, ["blocking"]);
    }

    onNetworkRequest(e) {
        this.callbackResultUrl(e.url);
        return  {
            cancel: true
        };
    }

    initTimeout() {
        this.timeout = setTimeout(() => {
            this.callbackResultUrl(void 0);
        }, this.duration);
    }

    callbackResultUrl(e) {
        const t = this.callbackAccept;
        this.started = false;
        this.callbackAccept = undefined;
        clearTimeout(this.timeout);
        chrome.webRequest.onBeforeRequest.removeListener(this.onNetworkRequest);
        t(e);
    }

    async createTabDuplicate() {
        const e = await ChromeTabs.duplicate(this.tab.tabId);
        const t = new TabNetworkStatusListener({
            webNavigationEnabled: "undefined" == typeof chrome || undefined !== chrome.webNavigation
        });
        t.setAlmostLoaded({
            isHashTagChange: false,
            pageLoadDelay: 100,
            tab: {
                tabId: e.id,
                windowId: e.windowId
            },
            url: e.url,
            failOnErrorPages: false
        });
        await t.waitForTabNetworkStatus({
            minDuration: 2000,
            lock: false
        });
        await t.deInit();
        this.duplicateTabId = e.id;
    }

    async clickInDuplicateTab(e) {
        const t = await this.chromeClient.getCSSSelector(e);
        const i = this.chromeClient.sendMessage.bind(this, "getElement", [t, 0], false, this.duplicateTabId);
        const n = await Async.waitForCallback(i, "Element reference in duplicate tab not found");
        await this.chromeClient.sendMessage("click", [n, ClickActionTypes.realLikeEvents], false, this.duplicateTabId);
    }

    async closeDuplicateTab() {
        if(this.duplicateTabId )
            await ChromeTabs.remove(this.duplicateTabId);
    }
}

export {RedirectInterceptor}