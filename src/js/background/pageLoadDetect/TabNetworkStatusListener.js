import {default as u} from "../../contentjs/Msg.js"//u = i(17),
import {default as r} from "../../log/log.js";//r = i(5),
import * as p from "../../devtools/Selector/Url.js"//p = i(19),
import * as a from "./WebRequestEventListener.js"//a = i(596),
import * as o from "./WebNavigationEventListener.js"//o = i(597),
import * as s from "./TabEventListener.js"//s = i(598),
import * as c from "./PageLoadDelayEventListener.js"//c = i(600),
import * as l from "./GlobalTimeoutEventListener.js"//l = i(601),
import * as h from "./FailOnErrorPagesEventListener.js"//h = i(603),
import * as f from "./AjaxEventListener.js"//f = i(604),
import * as m from "./MinDurationEventListener.js"//m = i(605),
import * as g from "./LockEventListener.js"//g = i(606);
import * as d from "./WaitForRootElementEventListener.js"//const d = i(602);
class TabNetworkStatusListener {
    constructor(setting) {
        this.sharedState = {
            url: undefined,
            waitForStatusActive: false,
            pageLoadDelay: undefined,
            tab: undefined,
            isHashTagChange: undefined,
            failOnErrorPages: undefined,
            minDuration: 0
        };
        this.callbacks = {
            error: undefined,
            success: undefined
        };
        this.eventListeners = {
            failOnErrorPagesEventListener: undefined,
            globalTimeoutEventListener: undefined,
            pageLoadDelayEventListener: undefined,
            tabEventListener: undefined,
            waitForRootElementEventListener: undefined,
            webNavigationEventListener: undefined,
            webRequestEventListener: undefined,
            ajaxEventListener: undefined,
            minDurationEventListener: undefined,
            lockEventListener: undefined
        };
        this.logEventListenerChanges = false;
        this.resetStateBeforeRedirect = this.resetStateBeforeRedirect.bind(this);
        this.onStateChanged = this.onStateChanged.bind(this);
        this.initPageLoadDelayCompletedTimeout = this.initPageLoadDelayCompletedTimeout.bind(this);
        this.webNavigationEnabled = setting.webNavigationEnabled;
        const listenerSetting = {
            sharedState: this.sharedState,
            onRedirect: this.resetStateBeforeRedirect,
            onStateChanged: this.onStateChanged,
            onPageLoadDelayShouldBeReset: this.initPageLoadDelayCompletedTimeout
        };
        this.eventListeners.lockEventListener = new g.LockEventListener(listenerSetting);
        this.eventListeners.minDurationEventListener = new m.MinDurationEventListener(listenerSetting);
        this.eventListeners.webRequestEventListener = new a.WebRequestEventListener(listenerSetting);
        this.eventListeners.tabEventListener = new s.TabEventListener(listenerSetting);
        this.eventListeners.pageLoadDelayEventListener = new c.PageLoadDelayEventListener(listenerSetting);
        this.eventListeners.globalTimeoutEventListener = new l.GlobalTimeoutEventListener(listenerSetting);
        this.eventListeners.ajaxEventListener = new f.AjaxEventListener(listenerSetting);
        this.eventListeners.webNavigationEventListener = new o.WebNavigationEventListener(Object.assign(Object.assign({}, listenerSetting), {
            webNavigationEnabled: setting.webNavigationEnabled
        }));
        this.eventListeners.failOnErrorPagesEventListener = new h.FailOnErrorPagesEventListener(Object.assign(Object.assign({}, listenerSetting), {
            webRequestEventListener: this.eventListeners.webRequestEventListener,
            webNavigationEventListener: this.eventListeners.webNavigationEventListener,
            waitForListeners: [this.eventListeners.webRequestEventListener,
                this.eventListeners.tabEventListener,
                this.eventListeners.pageLoadDelayEventListener,
                this.eventListeners.webNavigationEventListener]
        }));
        this.eventListeners.waitForRootElementEventListener = new d.WaitForRootElementEventListener(Object.assign(Object.assign({}, listenerSetting), {
            waitForListeners: [this.eventListeners.webRequestEventListener,
                this.eventListeners.tabEventListener,
                this.eventListeners.pageLoadDelayEventListener,
                this.eventListeners.webNavigationEventListener,
                this.eventListeners.failOnErrorPagesEventListener]
        }));
    }

    init() {
        for (const eventListenerIndex in this.eventListeners)
            this.eventListeners[eventListenerIndex].initListeners();
    }

    deInit() {
        for (const eventListenerIndex in this.eventListeners)
            this.eventListeners[eventListenerIndex].deInitListeners();
    }

    async waitForTabNetworkStatus(e) {
        if (this.sharedState.waitForStatusActive)
            throw new Error("Previous tab load hasn't completed");
        this.sharedState.waitForStatusActive = true;
        this.sharedState.minDuration = e.minDuration;
        this.eventListeners.minDurationEventListener.reset();
        this.eventListeners.ajaxEventListener.reset();
        this.eventListeners.globalTimeoutEventListener.reset();
        this.eventListeners.lockEventListener.reset();
        e.lock && this.eventListeners.lockEventListener.lock();
        await new Promise((resolve, reject) => {
            this.callbacks.success = () => {
                r.info("tab status network OK", {
                    url: this.sharedState.url
                });
                this.clearCallbacksAndTimeouts();
                this.sharedState.waitForStatusActive = false;
                resolve();
            };
            this.callbacks.error = arg => {
                r.notice("tab status network ERROR", {
                    url: this.sharedState.url,
                    error: u.getMessage(arg)
                });
                this.clearCallbacksAndTimeouts();
                this.sharedState.waitForStatusActive = false;
                "string" == typeof arg && (arg = new Error(arg));
                reject(arg);
            };
        });
    }

    getState() {
        let temp = Object.assign({}, this.state);
        temp = Object.assign(temp, this.eventListeners.tabEventListener.state);
        temp = Object.assign(temp, this.eventListeners.globalTimeoutEventListener.state);
        temp = Object.assign(temp, this.eventListeners.pageLoadDelayEventListener.state);
        temp = Object.assign(temp, this.sharedState);
        temp = Object.assign(temp, this.eventListeners.webNavigationEventListener.state);
        temp = Object.assign(temp, this.eventListeners.webRequestEventListener.state);
        temp = Object.assign(temp, this.eventListeners.ajaxEventListener.state);
        temp = Object.assign(temp, this.eventListeners.minDurationEventListener.state);
        temp = Object.assign(temp, this.eventListeners.lockEventListener.state);
        return temp;
    }

    reset(newSharedStateSetting) {
        if (this.sharedState.waitForStatusActive)
            throw new Error("Previous tab load hasn't completed");
        this.sharedState.pageLoadDelay = newSharedStateSetting.pageLoadDelay;
        this.sharedState.tab = newSharedStateSetting.tab;
        this.sharedState.isHashTagChange = newSharedStateSetting.isHashTagChange;
        this.sharedState.url = newSharedStateSetting.url;
        this.sharedState.failOnErrorPages = newSharedStateSetting.failOnErrorPages;
        this.resetEventListenerStates();
        this.state = {
            mainPageLoadHasCompleted: false,
            redirectDetectedAfterMainPageLoad: false
        };
    }

    setAlmostLoaded(newSharedStateSetting) {
        this.reset(newSharedStateSetting);
        this.eventListeners.tabEventListener.setAlreadyLoaded();
        this.eventListeners.webNavigationEventListener.setAlreadyLoaded();
        this.eventListeners.webRequestEventListener.setAlreadyLoaded();
    }

    unlock() {
        if(!this.eventListeners.lockEventListener.isLocked())
            r.notice("lock event listener wasn't locked");
        this.eventListeners.lockEventListener.unlock();
    }

    logIfPageCompletedWithoutWebNavigationComplete() {
        if(this.webNavigationEnabled )
        {
            if(!this.eventListeners.webNavigationEventListener.state.wnOnCompleted )
                if(!p.Url.isExtensionUrl(this.sharedState.url) )
                    r.notice("Page loaded without web navigation completed", {
                        url: this.sharedState.url,
                        state: JSON.stringify(this.state)
                    });
        }
    }

    onStateChanged() {
        console.log("TabNetworkStatusListener onStateChanged");
        if(this.logEventListenerChanges)
            r.info("page load status", {
                pageLoadDelayCompleted: this.eventListeners.pageLoadDelayEventListener.isPageLoadComplete,
                tabEventListenerCompleted: this.eventListeners.tabEventListener.isPageLoadComplete,
                webNavigationCompleted: this.eventListeners.webNavigationEventListener.isPageLoadComplete,
                webRequestCompleted: this.eventListeners.webRequestEventListener.isPageLoadComplete,
                waitForRootCompleted: this.eventListeners.waitForRootElementEventListener.isPageLoadComplete,
                failOnErrorPagesCompleted: this.eventListeners.failOnErrorPagesEventListener.isPageLoadComplete,
                globalTimeoutCompletedWithError: this.eventListeners.globalTimeoutEventListener.pageLoadError,
                tabEventListenerCompletedWithError: this.eventListeners.tabEventListener.pageLoadError,
                webNavigationCompletedWithError: this.eventListeners.webNavigationEventListener.pageLoadError,
                webRequestCompletedWithError: this.eventListeners.webRequestEventListener.pageLoadError,
                waitForRootCompletedWithError: this.eventListeners.waitForRootElementEventListener.pageLoadError,
                failOnErrorPagesCompletedWithError: this.eventListeners.failOnErrorPagesEventListener.pageLoadError
            });
        this.eventListeners.waitForRootElementEventListener.onGlobalStateChanged();
        this.isPageCompleted() && this.handlePageCompleted();
    }

    initPageLoadDelayCompletedTimeout() {
        this.eventListeners.pageLoadDelayEventListener.reset();
    }

    isPageLoadCompletedWithError() {
        if (!this.eventListeners.lockEventListener.isPageLoadComplete)
            return false;
        if (!this.eventListeners.pageLoadDelayEventListener.isPageLoadComplete)
            return false;
        if (this.eventListeners.globalTimeoutEventListener.pageLoadError)
            return true;
        const failOnErrorPagesEventListener = this.eventListeners.failOnErrorPagesEventListener;
        if (!failOnErrorPagesEventListener.pageLoadError && !failOnErrorPagesEventListener.isPageLoadComplete)
            return false;
        for (const eventListener in this.eventListeners) {
            if (undefined !== this.eventListeners[eventListener].pageLoadError)
                return true;
        }
        return false;
    }

    getPageLoadCompletedErrorMessage() {
        if (false === this.isPageLoadCompletedWithError())
            throw new Error("trying to get page load error message when no error has occurred");
        for (const eventListeners in this.eventListeners) {
            if (undefined !== this.eventListeners[eventListeners].pageLoadError)
                return this.eventListeners[eventListeners].pageLoadError;
        }
        throw new Error("could not get page load error message");
    }

    isPageCompletedWithSuccess() {
        for (const eventListener in this.eventListeners) {
            if (!this.eventListeners[eventListener].isPageLoadComplete)
                return false;
        }
        return true;
    }

    handlePageCompleted() {
        const loadError = this.isPageLoadCompletedWithError();
        const loadSuccess = this.isPageCompletedWithSuccess();
        if (!loadError && !loadSuccess)
            throw new Error("Page completion handler called even when page hasn't completed");
        this.state.mainPageLoadHasCompleted = true;
        if (loadError) {
            const e = this.getPageLoadCompletedErrorMessage();
            this.callbacks.error(e);
        } else if (this.isPageCompletedWithSuccess()) {
            if (!this.sharedState.isHashTagChange) {
                if(!this.eventListeners.webRequestEventListener.state.wrOnCompleted )
                    r.notice("Page loaded without web request completed", {
                        url: this.sharedState.url,
                        state: JSON.stringify(this.state)
                    });
                if(!this.eventListeners.webRequestEventListener.state.headersContentType )
                    if(!p.Url.isExtensionUrl(this.sharedState.url) )
                        r.notice("Page loaded without content type", {
                            url: this.sharedState.url,
                            state: JSON.stringify(this.state),
                            hideInEsLogs: true
                        });
                this.logIfPageCompletedWithoutWebNavigationComplete()
            }
            return  this.callbacks.success();
        }
    }

    isPageCompleted() {
        return !(!this.isPageCompletedWithSuccess() && !this.isPageLoadCompletedWithError());
    }

    clearCallbacksAndTimeouts() {
        this.callbacks.success = undefined;
        this.callbacks.error = undefined;
        for (const eventListener in this.eventListeners)
            this.eventListeners[eventListener].clearTimeouts();
    }

    resetStateBeforeRedirect(url) {
        this.sharedState.url = url;
        this.resetEventListenerStates();
        if(this.state.mainPageLoadHasCompleted)
            this.state.redirectDetectedAfterMainPageLoad = true;
    }

    resetEventListenerStates() {
        for (const eventListener in this.eventListeners)
            if(! ["globalTimeoutEventListener", "lockEventListener"].includes(eventListener) )
                this.eventListeners[eventListener].reset();
    }
}

export {TabNetworkStatusListener}