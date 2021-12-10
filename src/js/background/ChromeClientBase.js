import {default as r} from "../contentjs/log.js";//r = i(5),
class ChromeClientBase {
    constructor(e) {
        this.tab = {
            tabId: undefined,
            windowId: undefined
        };
        if(undefined !== e.tabId )
            this.tab.tabId = e.tabId;
    }

    async getTabInfo() {
        return await new Promise((resolve, reject) => {
            chrome.tabs.get(this.tab.tabId, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    r.error("Failed to get tab info", {
                        error: lastError.toString()
                    });
                    return reject("Failed to get tab info" + lastError.toString());
                }
                resolve(res);
            });
        });
    }
}

export {ChromeClientBase}