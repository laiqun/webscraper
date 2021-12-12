import {default as r} from "../contentjs/log.js";//r = i(5),
import * as n from "./BaseWebNavigationEventListener.js"//const n = i(67);
class WebRequestEventListener extends n.BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.onBeforeRequestTimeout = 1000;
        this.webRequestCompleteTimeout = 10000;
        this.listeners = {
            wrOnCompleted: undefined,//5
            wrOnHeadersReceived: undefined,//2
            wrOnBeforeRedirect: undefined,//3
            wrOnResponseStarted: undefined,//4
            wrOnErrorOccurred: undefined,//随时可能发生
            wrOnBeforeRequest: undefined//1
        };
        this.listeners.wrOnBeforeRequest = this.wrOnBeforeRequest.bind(this);
        this.listeners.wrOnHeadersReceived = this.wrOnHeadersReceived.bind(this);
        this.listeners.wrOnBeforeRedirect = this.wrOnBeforeRedirect.bind(this);
        this.listeners.wrOnResponseStarted = this.wrOnResponseStarted.bind(this);
        this.listeners.wrOnCompleted = this.wrOnCompleted.bind(this);
        this.listeners.wrOnErrorOccurred = this.wrOnErrorOccurred.bind(this);
    }

    initListeners() {
        const filter = {
            urls: ["<all_urls>"],
            types: ["main_frame", "xmlhttprequest"]
        };
        chrome.webRequest.onBeforeRequest.addListener(this.listeners.wrOnBeforeRequest, filter, ["requestBody"]);
        chrome.webRequest.onHeadersReceived.addListener(this.listeners.wrOnHeadersReceived, filter, ["responseHeaders"]);
        chrome.webRequest.onBeforeRedirect.addListener(this.listeners.wrOnBeforeRedirect, filter, ["responseHeaders"]);
        chrome.webRequest.onResponseStarted.addListener(this.listeners.wrOnResponseStarted, filter, ["responseHeaders"]);
        chrome.webRequest.onCompleted.addListener(this.listeners.wrOnCompleted, filter, ["responseHeaders"]);
        chrome.webRequest.onErrorOccurred.addListener(this.listeners.wrOnErrorOccurred, filter);
    }

    deInitListeners() {
        if(this.listeners.wrOnBeforeRequest)
        {
            chrome.webRequest.onBeforeRequest.removeListener(this.listeners.wrOnBeforeRequest);
            this.listeners.wrOnBeforeRequest = undefined;
        }
        if(this.listeners.wrOnHeadersReceived )
        {
            chrome.webRequest.onHeadersReceived.removeListener(this.listeners.wrOnHeadersReceived);
            this.listeners.wrOnHeadersReceived = undefined;
        }
        if(this.listeners.wrOnResponseStarted )
        {
            chrome.webRequest.onResponseStarted.removeListener(this.listeners.wrOnResponseStarted);
            this.listeners.wrOnResponseStarted = undefined;
        }
        if(this.listeners.wrOnCompleted )
        {
            chrome.webRequest.onCompleted.removeListener(this.listeners.wrOnCompleted);
            this.listeners.wrOnCompleted = undefined;
        }
        if(this.listeners.wrOnErrorOccurred)
        {
            chrome.webRequest.onErrorOccurred.removeListener(this.listeners.wrOnErrorOccurred);
            this.listeners.wrOnErrorOccurred = undefined;
        }
    }

    get isPageLoadComplete() {
        if(!!this.sharedState.isHashTagChange)
            return true;
        return !!this.state.wrOnCompleted || !(!this.state.wrOnBeforeRequestTimeout && !this.state.wrOnCompletedTimeout);
    }

    get pageLoadError() {
        if (this.state.wrOnErrorOccurred)
            return "PAGE_REQUEST_ERROR";
    }

    resetState() {
        this.state = {
            headersContentType: "",
            headersStatusCode: 0,
            wrOnBeforeRequest: false,
            wrOnBeforeRequestTimeout: false,
            wrOnErrorOccurred: false,
            wrError: "",
            wrOnHeadersReceived: false,
            wrOnProxyAuthHeadersReceived: false,
            wrOnResponseStarted: false,
            wrOnCompleted: false,
            wrOnCompletedTimeout: false
        };
    }

    setAlreadyLoaded() {
        this.state = {
            headersContentType: "text/html",
            headersStatusCode: 200,
            wrOnBeforeRequest: true,
            wrOnBeforeRequestTimeout: false,
            wrOnErrorOccurred: false,
            wrError: "",
            wrOnHeadersReceived: true,
            wrOnProxyAuthHeadersReceived: false,
            wrOnResponseStarted: true,
            wrOnCompleted: true,
            wrOnCompletedTimeout: false
        };
    }

    initTimeouts() {
        this.sharedState.isHashTagChange ||
        this.state.wrOnBeforeRequest ||
        this.state.wrOnBeforeRequestTimeout ||
        this.initWrOnBeforeRequestTimeout();
    }

    initWrOnBeforeRequestTimeout() {
        if(!this.sharedState.isHashTagChange)  
        {
            this.clearTimeout("wrOnBeforeRequestTimeout");
            this.timeouts.wrOnBeforeRequestTimeout = setTimeout(() => {
                this.clearTimeout("wrOnBeforeRequestTimeout");
                r.notice("missed on before request event. maybe a service worker is loading this or page load is retried after web navigation error", {
                    url: this.sharedState.url,
                    event: "wrOnBeforeRequestTimeout"
                });
                this.setState({
                    wrOnBeforeRequestTimeout: true
                }, {
                    wrOnBeforeRequest: false,
                    wrOnHeadersReceived: false,
                    wrOnResponseStarted: false,
                    wrOnCompleted: false
                });
            }, this.onBeforeRequestTimeout)
        }
    }

    isRequestMonitored(event_t) {
        //如果没有tabid，则看URL是否为要检测的； 还有请求类型
        //如果有tabib，则看tabid  和请求类型  parentFrame ID不知道是干嘛的
        const t = -1 === event_t.tabId && "xmlhttprequest" === event_t.type && event_t.url === this.sharedState.url;
        const i = event_t.tabId === this.sharedState.tab.tabId && -1 === event_t.parentFrameId && "main_frame" === event_t.type;
        return !(!t && !i);  //t和i都是假，返回假； 有一个为真，则返回真
    }

    wrOnBeforeRequest(e) {
        if(this.isRequestMonitored(e) )
        {
            if(true === this.state.wrOnBeforeRequest)
            {
                r.info("JavaScript redirect detected", {
                    sourceUrl: this.sharedState.url,
                    toUrl: e.url,
                    wrOnCompleted: this.state.wrOnCompleted
                });
                this.onRedirect(e.url);
            }
            this.clearTimeout("wrOnBeforeRequestTimeout");
            this.setState({
                wrOnBeforeRequest: true
            }, {
                wrOnHeadersReceived: false,
                wrOnResponseStarted: false,
                wrOnCompleted: false,
                headersContentType: "",
                headersStatusCode: 0,
                wrOnCompletedTimeout: false
            });
            this.initWrOnCompletedTimeout()
        }
    }

    wrOnBeforeRedirect(e) {
        if (!this.isRequestMonitored(e))
            return;
        r.info("onBeforeRedirect received", {
            sourceUrl: this.sharedState.url,
            toUrl: e.url
        });
        const t = {
            wrOnBeforeRequest: true
        };
        if(!this.state.wrOnHeadersReceived && this.state.wrOnProxyAuthHeadersReceived)
            r.notice("missed wrOnHeadersReceived event but received wrOnBeforeRedirect. This is due to a proxy auth + miss headers bug in chrome", {
                url: e.url,
                event: "wrOnBeforeRedirect",
                hideInEsLogs: true
            });
        else
        {
            t.wrOnHeadersReceived = true;
            this.assertState("wrOnBeforeRedirect", t);
            this.onRedirect(e.url);
        }
    }

    wrOnHeadersReceived(e) {
        if (!this.isRequestMonitored(e))
            return;
        if (407 === e.statusCode)
        {
            this.setState({
                wrOnProxyAuthHeadersReceived: true
            }, {
                wrOnHeadersReceived: false
            });
            return undefined;
        }
        this.onPageLoadDelayShouldBeReset();
        const resHeader = this.extractContentTypeFromResponseHeaders(e.responseHeaders);
        if(!resHeader )
            if(![301, 302, 303, 307, 308, 503].includes(e.statusCode) )
                r.notice("missing Content Type even though headers received. " + JSON.stringify(e.responseHeaders), {
                    event: "wrOnHeadersReceived",
                    url: e.url,
                    hideInEsLogs: true
                });
        const settingStatus = {
            wrOnHeadersReceived: true,
            headersStatusCode: e.statusCode
        };
        resHeader && (settingStatus.headersContentType = resHeader);
        this.setState(settingStatus, {
            wrOnResponseStarted: false,
            wrOnCompleted: false
        });
    }

    extractContentTypeFromResponseHeaders(headers) {
        if (!headers)
            return "";
        for (const header of headers)
            if ("content-type" === header.name.toLowerCase())
                return header.value;
        return "";
    }

    wrOnResponseStarted(e) {
        if (!this.isRequestMonitored(e))
            return;
        if (this.state.wrOnProxyAuthHeadersReceived && !this.state.wrOnHeadersReceived) {
            r.notice("missed wrOnHeadersReceived event but received wrOnResponseStarted. This is due to a proxy auth + miss headers bug in chrome", {
                url: e.url,
                event: "wrOnResponseStarted",
                hideInEsLogs: true
            });
            const resHeader = this.extractContentTypeFromResponseHeaders(e.responseHeaders), i = {
                wrOnHeadersReceived: true,
                headersStatusCode: e.statusCode
            };
            resHeader && (i.headersContentType = resHeader);
            this.setState(i, {
                wrOnResponseStarted: false,
                wrOnCompleted: false
            });
            this.onPageLoadDelayShouldBeReset();
        }
        let assertStatus = {
            wrOnBeforeRequest: true,
            wrOnHeadersReceived: true,
            wrOnCompleted: false
        };
        this.isChromeExtensionUrl() && (assertStatus = {});
        this.setState({
            wrOnResponseStarted: true
        }, assertStatus);
    }

    wrOnCompleted(e) {
        if(this.isRequestMonitored(e) )
        {
            this.clearTimeout("wrOnCompletedTimeout");
            this.setState({
                wrOnCompleted: true
            }, {});
        }
    }

    wrOnErrorOccurred(e) {
        if(this.isRequestMonitored(e) )
        {
            r.notice("web request error occurred", {
                url: e.url,
                event: "wrOnErrorOccurred",
                error: e.error
            });
            this.clearTimeouts();
            this.setState({
                wrOnErrorOccurred: true,
                wrError: e.error
            }, {
                wrOnCompleted: false
            });
        }
    }

    initWrOnCompletedTimeout() {
        this.clearTimeout("wrOnCompletedTimeout");
        this.timeouts.wrOnCompletedTimeout = setTimeout(() => {
            this.clearTimeout("wrOnCompletedTimeout");
            this.setState({
                wrOnCompletedTimeout: true
            }, {
                wrOnCompleted: false
            });
        }, this.webRequestCompleteTimeout);
    }
}

export {WebRequestEventListener}