import * as r from "./BaseWebNavigationEventListener.js"//r = i(67),
import {default as u} from "../../common/Msg.js"//u = i(17),
import {default as o} from "../../log/log.js";//o = i(5),
import * as a from "../../common/Async.js"//a = i(22),
import * as s from "../../devtools/Selector/Url.js"//s = i(19),
import * as c from "../chromeOpt/ChromeTabs.js"//c = i(196),
import * as l from "./ChromeTabStatus.js"//const     l = i(512);
class WaitForRootElementEventListener extends r.BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.waitId = 0;
        this.waitForRootTimeout = 30000;
        this.waitForListeners = e.waitForListeners;
    }

    onGlobalStateChanged() {
        if (s.Url.isExtensionUrl(this.sharedState.url))
            return;
        if (this.state.rootElementFound)
            return;
        const otherListenersCompleted = this.haveOtherListenersCompleted();
        if (otherListenersCompleted && !this.waitActive) {
            this.waitActive = true;
            this.launchRootElementWaiter();
        } else if (otherListenersCompleted === false)
            this.waitActive = false;
    }

    deInitListeners() {
    }

    initListeners() {
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on WaitForRootElementEventListener");
    }

    get pageLoadError() {
        return this.state.rootElementLookupTimedOut ? "WAIT_FOR_ROOT_ELEMENT_TIMEOUT" : this.state.tabStatusUnloaded ? "CHROME_TAB_CRASHED wait-for-root-element" : void 0;
    }

    initTimeouts() {
    }

    get isPageLoadComplete() {
        return !!s.Url.isExtensionUrl(this.sharedState.url) || this.state.rootElementFound;
    }

    resetState() {
        this.state = {
            rootElementFound: false,
            rootElementLookupTimedOut: false,
            tabStatusUnloaded: false
        };
        this.waitActive = false;
    }

    haveOtherListenersCompleted() {
        for (const listener of this.waitForListeners)
            if (undefined !== listener.pageLoadError || !listener.isPageLoadComplete)
                return false;
        return true;
    }

    async launchRootElementWaiter() {
        const now = Date.now();
        this.waitId++;
        const waitId = this.waitId;
        do {
            try {
                if ((await c.ChromeTabs.get(this.sharedState.tab.tabId)).status === l.ChromeTabStatus.unloaded) {
                    o.notice("WaitForRootElementEventListener detected that tab has crashed. Stop waiting");
                    this.setState({
                        tabStatusUnloaded: true
                    }, {
                        tabStatusUnloaded: false
                    });
                    return (this.waitActive = false);
                }
            } catch (exception) {
                o.notice("chrome tab fetch error", {
                    error: u.getMessage(exception)
                });
            }
            const raceResult = await a.Async.timeoutPromiseWithoutTimeoutError(this.checkContentScriptReachable(), 10000, "checkContentScriptReachable");
            if (!this.waitActive || waitId !== this.waitId)
                return void o.notice("wait for root element", {
                    waitActive: this.waitActive,
                    currentWaitId: this.waitId,
                    expectedWaitId: waitId
                });
            if (raceResult) {//如果raceResult是undefined，则说明是超时promise先完成了
                this.setState({
                    rootElementFound: true
                }, {});
                return void (this.waitActive = false);
            }
            await a.Async.sleep(50);
        } while (now + this.waitForRootTimeout > Date.now());
        this.setState({
            rootElementLookupTimedOut: true
        }, {});
        this.waitActive = false;
    }

    checkContentScriptReachable() {
        const message = {
            method: "getRootElement"
        };
        return new Promise((resolve, reject) => {
            chrome.tabs.sendMessage(this.sharedState.tab.tabId, message, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                    resolve(false);
                else if (res.success)
                    resolve(true)
                else
                    resolve(false);
            });
        });
    }
}

export {WaitForRootElementEventListener}