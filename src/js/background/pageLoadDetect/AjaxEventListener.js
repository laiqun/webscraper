import * as n from "./BaseWebNavigationEventListener.js"//n = i(67),
import * as r from "../../devtools/Selector/Url.js"//    const r = i(19);
class AjaxEventListener extends n.BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.singleAjaxTimeout = 10000;
        this.coolDownAjaxTimeout = 100;
        this.noAjaxTimeout = 20;
        this.globalTimeout = 10000;
        this.activeRequests = new Map;
        this.listeners = {
            onBeforeRequest: undefined,
            onCompleted: undefined,
            onErrorOccurred: undefined
        };
        this.listeners.onBeforeRequest = this.onBeforeRequest.bind(this);
        this.listeners.onCompleted = this.onCompleted.bind(this);
        this.listeners.onErrorOccurred = this.onErrorOccurred.bind(this);
    }

    deInitListeners() {
        if(this.listeners.onBeforeRequest)
        {
            chrome.webRequest.onBeforeRequest.removeListener(this.listeners.onBeforeRequest);
            this.listeners.onBeforeRequest = undefined;
        }
        if(this.listeners.onCompleted )
        {
            chrome.webRequest.onCompleted.removeListener(this.listeners.onCompleted);
            this.listeners.onCompleted = undefined;
        }
        if(this.listeners.onErrorOccurred )
        {
            chrome.webRequest.onErrorOccurred.removeListener(this.listeners.onErrorOccurred);
            this.listeners.onErrorOccurred = undefined;
        }
    }

    initListeners() {
        const filter = {
            urls: ["<all_urls>"],
            types: ["xmlhttprequest", "sub_frame"]
        };
        chrome.webRequest.onBeforeRequest.addListener(this.listeners.onBeforeRequest, filter, ["requestBody"]);
        chrome.webRequest.onCompleted.addListener(this.listeners.onCompleted, filter, ["responseHeaders"]);
        chrome.webRequest.onErrorOccurred.addListener(this.listeners.onErrorOccurred, filter);
    }

    initTimeouts() {
        this.timeouts.noAjaxTimeout = setTimeout(() => {
            this.setState({
                noAjaxTimeoutComplete: true
            }, {
                noAjaxTimeoutComplete: false,
                ajaxComplete: false
            });
        }, this.noAjaxTimeout);
    }

    get isPageLoadComplete() {
        return this.state.ajaxGlobalTimeoutComplete || this.state.ajaxComplete || this.state.noAjaxTimeoutComplete;
    }

    get pageLoadError() {
    }

    resetState() {
        this.state = {
            ajaxComplete: false,
            noAjaxTimeoutComplete: false,
            ajaxGlobalTimeoutComplete: false,
            ajaxGlobalTimeoutStart: Date.now()
        };
        this.activeRequests.clear();
    }

    setAlreadyLoaded() {
    }

    setState(settingStatus, assertStatus) {
        if(this.sharedState.waitForStatusActive)
            super.setState(settingStatus, assertStatus);
    }

    onBeforeRequest(e) {
        if (!this.isRequestMonitored(e))
            return;
        this.clearTimeout("noAjaxTimeout");
        if(this.state.noAjaxTimeoutComplete)
            this.setState({
                noAjaxTimeoutComplete: false
            }, {});
        if(this.state.ajaxComplete)
            this.setState({
                ajaxComplete: false
            }, {});
        const value = setTimeout(() => {
            this.completeAjaxRequest(e.requestId);
        }, this.singleAjaxTimeout);
        this.activeRequests.set(e.requestId, value);
    }

    onCompleted(e) {
        this.coolDownCompleteAjaxRequest(e.requestId);
    }

    onErrorOccurred(e) {
        this.coolDownCompleteAjaxRequest(e.requestId);
    }

    coolDownCompleteAjaxRequest(key) {
        if (!this.activeRequests.has(key))
            return;
        clearTimeout(this.activeRequests.get(key));
        const value = setTimeout(() => {
            this.completeAjaxRequest(key);
        }, this.coolDownAjaxTimeout);
        this.activeRequests.set(key, value);
    }

    completeAjaxRequest(key) {
        if (this.activeRequests.has(key)) {
            clearTimeout(this.activeRequests.get(key));
            this.activeRequests.delete(key);
            if(0 === this.activeRequests.size )
                this.setState({
                    ajaxComplete: true
                }, {});
            if(false === this.state.ajaxGlobalTimeoutComplete && this.state.ajaxGlobalTimeoutStart + this.globalTimeout < Date.now() )
                this.setState({
                    ajaxGlobalTimeoutComplete: true
                }, {
                    ajaxGlobalTimeoutComplete: false
                });
        }
    }

    isRequestMonitored(e) {
        if(r.Url.getTopLevelDomain(e.url) !== r.Url.getTopLevelDomain(this.sharedState.url))
            return false;
        return  e.tabId === this.sharedState.tab.tabId || -1 === e.tabId;
    }
}

export {AjaxEventListener}