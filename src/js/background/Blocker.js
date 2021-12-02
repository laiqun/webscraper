import * as n from "./UrlBlocker2.js"//    const n = i(617);
class Blocker {
    constructor() {
        this.urlBlocker = new n.UrlBlocker2;
        this.handleWebRequest = this.handleWebRequest.bind(this);
    }

    setBlockedUrls(urls) {
        this.urlBlocker.setBlockList(urls);
    }

    init() {
        chrome.webRequest.onBeforeRequest.addListener(this.handleWebRequest, {
            urls: ["<all_urls>"]
        }, ["blocking"]);
    }

    deInit() {
        chrome.webRequest.onBeforeRequest.removeListener(this.handleWebRequest);
    }

    handleWebRequest(e) {
        if ("main_frame" !== e.type)
            return this.urlBlocker.isUrlBlocked(e.url) ? {
                cancel: true
            } : {
                cancel: false
            };
    }
}

export {Blocker}