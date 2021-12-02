import * as a from "../devtools/Selector/Url.js"//a = i(19),
import {default as n} from "../contentjs/log.js";//n = i(5),
import * as r from "./BaseWebNavigationEventListener.js"//const r = i(67);
class WebNavigationEventListener extends r.BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.listeners = {
            wnOnBeforeNavigate: undefined,
            wnOnCommitted: undefined,
            wnOnCompleted: undefined,
            wnOnErrorOccurred: undefined
        };
        this.webNavigationEnabled = e.webNavigationEnabled;
        this.listeners.wnOnBeforeNavigate = this.wnOnBeforeNavigate.bind(this);
        this.listeners.wnOnCommitted = this.wnOnCommitted.bind(this);
        this.listeners.wnOnCompleted = this.wnOnCompleted.bind(this);
        this.listeners.wnOnErrorOccurred = this.wnOnErrorOccurred.bind(this);
    }

    get isPageLoadComplete() {
        return !this.webNavigationEnabled || (!!this.sharedState.isHashTagChange || (!!a.Url.isExtensionUrl(this.sharedState.url) || this.state.wnOnCompleted));
    }

    get pageLoadError() {
        if (this.state.wnOnErrorOccurred)
            return "WEB_NAVIGATION_ERROR " + this.state.wnError;
    }

    initListeners() {
        if(!this.webNavigationEnabled)
            return;
        chrome.webNavigation.onBeforeNavigate.addListener(this.listeners.wnOnBeforeNavigate);
        chrome.webNavigation.onCommitted.addListener(this.listeners.wnOnCommitted);
        chrome.webNavigation.onCompleted.addListener(this.listeners.wnOnCompleted);
        chrome.webNavigation.onErrorOccurred.addListener(this.listeners.wnOnErrorOccurred);
    }

    deInitListeners() {
        if(!this.webNavigationEnabled)
            return ;
        if(this.listeners.wnOnBeforeNavigate)
        {
            chrome.webNavigation.onBeforeNavigate.removeListener(this.listeners.wnOnBeforeNavigate);
            this.listeners.wnOnBeforeNavigate = undefined;
        }
        if(this.listeners.wnOnCommitted )
        {
            chrome.webNavigation.onCommitted.removeListener(this.listeners.wnOnCommitted);
            this.listeners.wnOnCommitted = undefined;
        }
        if(this.listeners.wnOnCompleted )
        {
            chrome.webNavigation.onCompleted.removeListener(this.listeners.wnOnCompleted);
            this.listeners.wnOnCompleted = undefined;
        }
        if(this.listeners.wnOnErrorOccurred )
        {
            chrome.webNavigation.onErrorOccurred.removeListener(this.listeners.wnOnErrorOccurred);
            this.listeners.wnOnErrorOccurred = undefined;
        }
    }

    setAlreadyLoaded() {
        this.state = {
            wnOnBeforeNavigate: true,
            wnOnCommitted: true,
            wnOnCompleted: true,
            wnOnErrorOccurred: false,
            wnError: undefined
        };
    }

    resetState() {
        this.state = {
            wnOnBeforeNavigate: false,
            wnOnCommitted: false,
            wnOnCompleted: false,
            wnOnErrorOccurred: false,
            wnError: undefined
        };
    }

    initTimeouts() {
    }

    isWebNavigationMonitored(e) {
        if(0 === e.frameId)
            return (e.tabId === this.sharedState.tab.tabId || !this.sharedState.tab.tabId) && e.url === this.sharedState.url;
    }

    wnOnCommitted(e) {
        if(this.isWebNavigationMonitored(e) )
            this.setState({
                wnOnCommitted: true
            }, {
                wnOnCompleted: false
            });
    }

    wnOnBeforeNavigate(e) {
        if(this.isWebNavigationMonitored(e))
        {
            if(true === this.state.wnOnBeforeNavigate)
            {
                n.info("JavaScript redirect detected", {
                    sourceUrl: this.sharedState.url,
                    toUrl: e.url,
                    wnOnCompleted: this.state.wnOnCompleted
                });
                this.onRedirect(e.url);
            }
                this.setState({
                    wnOnBeforeNavigate: true
                }, {
                    wnOnCommitted: false,
                    wnOnCompleted: false
                })
        }
    }

    wnOnErrorOccurred(e) {
        if(this.isWebNavigationMonitored(e))
            this.setState({
                wnError: e.error,
                wnOnErrorOccurred: true
            }, {
                wnOnCompleted: false
            });
    }

    wnOnCompleted(e) {
        if(this.isWebNavigationMonitored(e) )
            this.setState({
                wnOnCompleted: true
            }, {});
    }
}

export {WebNavigationEventListener}