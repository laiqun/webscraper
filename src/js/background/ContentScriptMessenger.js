import {default as o} from "../contentjs/Msg.js"//o = i(17),
import {default as r} from "../contentjs/log.js";//r = i(5),
import * as a from "./ChromeClientBase.js"//const  a = i(615);
class ContentScriptMessenger extends a.ChromeClientBase {
    sendMessage(method, args, disable_error_log, tabid) {
        undefined === args && (args = []);
        const request = {
            method: method,
            params: args
        };
        tabid = tabid || this.tab.tabId;
        return new Promise((resolve, reject) => {
            chrome.tabs.sendMessage(tabid, request, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    let error_str = lastError.toString();
                    if ("[object Object]" === error_str)
                        error_str = JSON.stringify(lastError);
                    if (!disable_error_log)
                        r.error("Failed to send message to chrome tab", {
                            error: error_str,
                            method: method,
                            request: JSON.stringify(request)
                        });
                    return void reject("FAILED_TO_CONNECT_TO_CHROME_TAB " + error_str);
                }
                if (res.success)
                    resolve(res.response);
                else {
                    if (!o.startsWithAnyOf(res.error, ["ACCESSING_UNDEFINED_ELEMENT", "SCRIPT_SELECTOR_ERROR", "ELEMENT_SELECTION_ERROR", "PAGE_STATUS_CODE_ERROR"]))
                        r.error("Content Script client error", {
                            error: res.error,
                            request: JSON.stringify(request)
                        });
                    reject(res.error)
                }
            });
        });
    }

    getElements(cssSelector, refIndex) {
        return this.sendMessage("getElements", [cssSelector, refIndex]);
    }

    getElement(cssSelector, refIndex) {
        return this.sendMessage("getElement", [cssSelector, refIndex]);
    }

    getText(e) {
        return this.sendMessage("getText", [e]);
    }

    getNativeAttr(e, t) {
        return this.sendMessage("getNativeAttr", [e, t]);
    }

    getAttr(e, t) {
        return this.sendMessage("getAttr", [e, t]);
    }

    getAllAttributes(e) {
        return this.sendMessage("getAllAttributes", [e]);
    }

    getHTML(e) {
        return this.sendMessage("getHTML", [e]);
    }

    getClone(e) {
        return this.sendMessage("getClone", [e]);
    }

    getWrappedHTML(e) {
        return this.sendMessage("getWrappedHTML", [e]);
    }

    getWrappedHTMLWithoutText(e) {
        return this.sendMessage("getWrappedHTMLWithoutText", [e]);
    }

    getCSSSelector(e) {
        return this.sendMessage("getCSSSelector", [e]);
    }

    getPopupURL(e) {
        return this.sendMessage("getPopupURL", [e]);
    }

    getInterceptableJavaScriptClickUrl(e) {
        return this.sendMessage("getInterceptableJavaScriptClickUrl", [e]);
    }

    scrollDownElement(e, t, i = !1, r) {
        return this.sendMessage("scrollDownElement", [e, t, i, r]);
    }

    click(e, t = "auto") {
        return this.sendMessage("click", [e, t]);
    }

    type(e, t) {
        return this.sendMessage("type", [e, t]);
    }

    waitForPageLoad() {
        return this.sendMessage("waitForPageLoad");
    }

    scrollDownBody(e, t, i = !1) {
        return this.sendMessage("scrollDownBody", [e, t, i]);
    }

    srcollBodyToTop() {
        return this.sendMessage("srcollBodyToTop");
    }

    ping() {
        return r.info("ping pong"), "pong";
    }

    getRootElement() {
        return this.sendMessage("getRootElement");
    }

    downloadUrl(e) {
        return this.sendMessage("downloadUrl", [e]);
    }

    getPageUrl() {
        return this.sendMessage("getPageUrl");
    }

    getTagName(e) {
        return this.sendMessage("getTagName", [e]);
    }

    getDataWithScript(e, t) {
        return this.sendMessage("getDataWithScript", [e, t]);
    }

    async checkContentScriptReachable() {
        try {
            await this.sendMessage("getRootElement", [], !0);
            return true;
        } catch (e) {
            if (e.toString().includes("Could not establish connection. Receiving end does not exist."))
                return false;
            r.error("unexpected error message when connecting to content script", {
                error: e.toString()
            });
            throw  e;
        }
    }
}

export {ContentScriptMessenger}