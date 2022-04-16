import {BaseWebNavigationEventListener} from "./BaseWebNavigationEventListener.js"//r = i(67),
import {default as Msg} from "../../common/Msg.js"//u = i(17),
import {default as Log} from "../../log/log.js";//o = i(5),
import {Async} from "../../common/Async.js"//a = i(22),
import {Url} from "../../devtools/Selector/Url.js"//s = i(19),
import {ChromeTabs} from "../chromeOpt/ChromeTabs.js"//c = i(196),
import {ChromeTabStatus} from "./ChromeTabStatus.js"//const     l = i(512);
class WaitForRootElementEventListener extends BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.waitId = 0;
        this.waitForRootTimeout = 30000;
        this.waitForListeners = e.waitForListeners;
    }

    onGlobalStateChanged() {
        if (Url.isExtensionUrl(this.sharedState.url))
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
        return !!Url.isExtensionUrl(this.sharedState.url) || this.state.rootElementFound;
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
                if ((await ChromeTabs.get(this.sharedState.tab.tabId)).status === ChromeTabStatus.unloaded) {
                    Log.notice("WaitForRootElementEventListener detected that tab has crashed. Stop waiting");
                    this.setState({
                        tabStatusUnloaded: true
                    }, {
                        tabStatusUnloaded: false
                    });
                    return (this.waitActive = false);
                }
            } catch (exception) {
                Log.notice("chrome tab fetch error", {
                    error: Msg.getMessage(exception)
                });
            }
            const raceResult = await Async.timeoutPromiseWithoutTimeoutError(this.checkContentScriptReachable(), 10000, "checkContentScriptReachable");
            if (!this.waitActive || waitId !== this.waitId)
                return void Log.notice("wait for root element", {
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
            await Async.sleep(50);
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