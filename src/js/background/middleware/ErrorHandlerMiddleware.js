import * as a from "./BaseMiddleware.js"//a = i(33),
import {default as o} from "../../contentjs/Msg.js"//o = i(17),
import {default as r} from "../../contentjs/log.js";//r = i(5),
class ErrorHandlerMiddleware extends a.BaseMiddleware {
    constructor(webpage, sitemap) {
        super();
        this.reduceSeverityForStartsWith = ["PAGE_REQUEST_ERROR",
            "PAGE_STATUS_CODE_ERROR",
            "PAGE_UNKNOWN_CONTENT_TYPE_ERROR",
            "PAGE_HAS_CAPTCHA",
            "ACCESSING_UNDEFINED_ELEMENT",
            "SCRIPT_SELECTOR_ERROR",
            "wait for content script connection timed out",
            "Failed to send message to chrome tab",
            "PAGE_REDIRECTED_DURING_DATA_EXTRACTION_AFTER_RETRY",
            "ELEMENT_SELECTION_ERROR",
            "WEB_NAVIGATION_ERROR",
            "STATE_SETUP_CHECK_FAILED_AFTER_STATE_SETUP",
            "CDP_FETCH_CLIENT_ERROR", "CHROME_TAB_CRASHED",
            "FAILED_TO_CONNECT_TO_CHROME_TAB",
            "STATE_SETUP_ERROR",
            "WAIT_FOR_ROOT_ELEMENT_TIMEOUT"],
            this.reduceSeverityForIncludes = ["PAGE_LOAD_TIMEOUT",
                "tabStatusLoadedPromise",
                "tabNetworkStatusLoadedPromise",
                "checkContentScriptReachable",
                "connecting to content script timed out",
                "Cannot navigate to invalid URL",
                "Chrome tab update error Invalid url"];
            this.webPage = webpage;
            this.sitemap = sitemap;
    }

    async handle(e, t, i) {
            try {
                return await i();
            } catch (t) {
                if (o.startsWith(t, "CHROME_WINDOW_CLOSED"))
                    throw "CHROME_WINDOW_CLOSED";
                const sitemap = this.sitemap;
                const webPage = this.webPage;
                const message = o.getMessage(t);
                const s = {
                    url: e.url,
                    parentSelector: e.parentSelector,
                    sitemapName: sitemap._id,
                    driver: webPage.getDriverType(),
                    error: message,
                    stack: t.stack
                };
                if(!o.startsWithAnyOf(t, this.reduceSeverityForStartsWith) )
                    if(!o.includesAnyOf(t, this.reduceSeverityForIncludes) )
                    {
                        r.error("Job execution failed with unknown error", s);
                        e.markAsFailed(message);
                    }
            }
    }
}

export {ErrorHandlerMiddleware}