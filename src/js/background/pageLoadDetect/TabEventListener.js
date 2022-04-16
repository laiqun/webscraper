import {default as Log} from "../../log/log.js";//n = i(5),
import {BaseWebNavigationEventListener} from "./BaseWebNavigationEventListener.js"//const r = i(67);
import {TabEventListenerTabStatus} from "./TabEventListenerTabStatus.js"//a = i(599),
import {ChromeTabStatus} from "./ChromeTabStatus.js"//const   o = i(512);
class TabEventListener extends BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.listeners = {
            tabOnUpdated: undefined,
            tabOnRemoved: undefined
        };
        this.timeouts = {
            tabOnHalfLoadedConvertToLoadedTimeout: undefined
        };
        this.halfCompleteTimeout = 20000;
        this.listeners.tabOnUpdated = this.tabOnUpdated.bind(this);
        this.listeners.tabOnRemoved = this.tabOnRemoved.bind(this);
    }

    get isPageLoadComplete() {
        return this.state.tabOnCompleted;
    }

    get pageLoadError() {
        if(this.state.tabOnRemoved )
            return "CHROME_WINDOW_CLOSED";
        else if(this.state.tabOnUnloaded)
            return "CHROME_TAB_CRASHED";
        else
            return undefined;
    }

    initListeners() {
        chrome.tabs.onUpdated.addListener(this.listeners.tabOnUpdated);
        chrome.tabs.onRemoved.addListener(this.listeners.tabOnRemoved);
    }

    deInitListeners() {
        if(this.listeners.tabOnUpdated)
        {
            chrome.tabs.onUpdated.removeListener(this.listeners.tabOnUpdated);
            this.listeners.tabOnUpdated = undefined;
        }
        if(this.listeners.tabOnRemoved )
        {
            chrome.tabs.onRemoved.removeListener(this.listeners.tabOnRemoved);
            this.listeners.tabOnRemoved =undefined;
        }
    }

    setAlreadyLoaded() {
        this.state = {
            tabOnHalfCompleted: true,
            tabOnCompleted: true,
            tabStatus: TabEventListenerTabStatus.complete,
            tabOnRemoved: false,
            tabOnUnloaded: false
        };
    }

    resetState() {
        this.state = {
            tabOnHalfCompleted: false,
            tabOnCompleted: false,
            tabStatus: TabEventListenerTabStatus.preLoading,
            tabOnRemoved: false,
            tabOnUnloaded: false
        };
    }

    initTimeouts() {
    }

    tabOnUpdated(tabId, changeInfo, tab) {
        //console.log("tabOnUpdated");
        if (tabId === this.sharedState.tab.tabId) {
            if (changeInfo.status === ChromeTabStatus.complete)
                this.onTabLoadComplete();
            else if (this.state.tabOnCompleted && this.state.tabStatus === TabEventListenerTabStatus.complete && changeInfo.status === ChromeTabStatus.loading && changeInfo.url !== this.sharedState.url)
                this.onWindowHistoryPushStateUrlChange(changeInfo);
            else if (changeInfo.status === ChromeTabStatus.loading)
                this.onTabStatusLoading(changeInfo);
            else if (void 0 === changeInfo.status && tab.status === ChromeTabStatus.loading && void 0 !== changeInfo.title)
                this.onLoadingTabTitleSet();
            else if (changeInfo.status === ChromeTabStatus.unloaded) {
                Log.notice("tab unloaded", {
                    data: JSON.stringify(changeInfo),
                    event: "tabOnUpdated",
                    url: changeInfo.url
                });
                this.onTabUnloaded(changeInfo);
            } else if (this.couldIgnoreTabUpdateEvent(changeInfo) == false)
                Log.notice("unknown tab load half status event", {
                    data: JSON.stringify(changeInfo),
                    event: "tabOnUpdated",
                    url: changeInfo.url
                });
        }
    }

    couldIgnoreTabUpdateEvent(e) {
        if(  undefined !== e.favIconUrl )
            return true;
        if( undefined !== e.isArticle || undefined !== e.title && this.state.tabStatus === TabEventListenerTabStatus.complete)
            return true;
        return false;
    }

    onTabStatusLoading(e) {
        if(this.state.tabStatus === TabEventListenerTabStatus.preLoading )
            this.setState({
                tabStatus: TabEventListenerTabStatus.loading
            }, {
                tabOnCompleted: !1
            });
        else
            Log.info("Tab loading state is being set after it has already gone through loading state", {
                data: JSON.stringify(e),
                event: "tabOnUpdated",
                sourceUrl: this.sharedState.url,
                state: JSON.stringify(this.state),
                toUrl: e.url
            });
    }

    onTabUnloaded(e) {
        this.clearTimeout("tabOnHalfLoadedConvertToLoadedTimeout");
        this.setState({
            tabOnUnloaded: true
        }, {
            tabOnUnloaded: false
        });
    }

    onWindowHistoryPushStateUrlChange(e) {
        Log.notice("window.history.pushState detected", {
            data: JSON.stringify(e),
            event: "tabOnUpdated",
            sourceUrl: this.sharedState.url,
            toUrl: e.url,
            hideInEsLogs: true
        });
        if(e.url )
        {
            this.sharedState.url = e.url;
            this.setState({
                tabStatus: TabEventListenerTabStatus.loading,
                tabOnCompleted: false
            }, {});
        }
    }

    onLoadingTabTitleSet() {
        if (!this.state.tabOnHalfCompleted || this.state.tabStatus !== TabEventListenerTabStatus.halfComplete) {
            const settingStatus = {};
            if(!this.state.tabOnHalfCompleted )
                settingStatus.tabOnHalfCompleted = true;
            if(this.state.tabStatus !== TabEventListenerTabStatus.halfComplete)
                settingStatus.tabStatus = TabEventListenerTabStatus.halfComplete;
            this.setState(settingStatus, {
                tabOnCompleted: false
            });
        }
        this.initTabOnHalfLoadedConvertToLoadedTimeout();
    }

    onTabLoadComplete() {
        this.clearTimeout("tabOnHalfLoadedConvertToLoadedTimeout");
        this.setState({
            tabOnCompleted: true,
            tabStatus: TabEventListenerTabStatus.complete
        }, {});
    }

    tabOnRemoved(tabid, t) {
        if(tabid === this.sharedState.tab.tabId )
        {
            this.clearTimeout("tabOnHalfLoadedConvertToLoadedTimeout");
            this.setState({
                tabOnRemoved: true
            }, {});
        }
    }

    initTabOnHalfLoadedConvertToLoadedTimeout() {
        this.clearTimeout("tabOnHalfLoadedConvertToLoadedTimeout");
        this.timeouts.tabOnHalfLoadedConvertToLoadedTimeout = setTimeout(() => {
            Log.info("tab status half-complete timeout timed out. Setting status to complete");
            if(this.state.tabStatus === TabEventListenerTabStatus.halfComplete)
            {
                this.clearTimeout("tabOnHalfLoadedConvertToLoadedTimeout");
                this.setState({
                        tabOnCompleted: true,
                        tabStatus: TabEventListenerTabStatus.complete
                }, {});
            }
            else
                Log.warning("unexpected tab status. Should be half complete", {
                    url: this.sharedState.url,
                    status: this.state.tabStatus
                });
        }, this.halfCompleteTimeout);
    }
}

export {TabEventListener}