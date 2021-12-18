import {default as r} from "../../log/log.js";//r = i(5),
import {default as o} from "../../common/Msg.js"//o = i(17),
import * as a from "../../common/Async.js"//a = i(22),
class ChromeTabs {
    static get(tabId) {
        return new Promise((resolve, reject) => {
            chrome.tabs.get(tabId, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    r.error("Chrome tab get error", {
                        error: o.getMessage(lastError)
                    });
                    reject("Chrome tab get error " + o.getMessage(lastError))
                } else if (res)
                    resolve(res);
                else
                    reject("Chrome tab get error missing tab.");
            });
        });
    }

    static update(tabId, updateProperties) {
        return new Promise((resolve, reject) => {
            chrome.tabs.update(tabId, updateProperties, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    const msg = o.getMessage(lastError);
                    if (!o.startsWithAnyOf(msg, ["Invalid url"]))
                        r.error("Chrome tab update error", {
                            error: msg
                        });
                    reject("Chrome tab update error " + o.getMessage(lastError));
                } else
                    resolve(res);
            });
        });
    }

    static async waitForUrl(tabid, target_url, timeout, throwErrorWhenMissMatch) {
        let result;
        for (let count = 0; count <= timeout && (result = await ChromeTabs.get(tabid), target_url !== result.url); count += 50)
        {
            r.debug("waiting for tab to get url", {
                url: target_url,
                tabUrl: result.url,
                status: result.status
            });
            await a.Async.sleep(50);
        }
        if (target_url !== result.url && throwErrorWhenMissMatch)
            throw new Error("Tab didn't load expected URL");
        return result;
    }

    static duplicate(tabId) {
        return new Promise((resolve, reject) => {
            chrome.tabs.duplicate(tabId, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    r.error("Chrome tab duplicate error", {
                        error: o.getMessage(lastError)
                    });
                    reject("Chrome tab duplicate error: " + o.getMessage(lastError));
                } else if (res)
                    resolve(res);
                else
                    reject("Chrome tab duplicate error: missing tab.");
            });
        });
    }

    static create(createProperties) {
        return new Promise((resolve, reject) => {
            chrome.tabs.create(createProperties, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    r.error("Chrome tab create error", {
                        error: o.getMessage(lastError)
                    });
                    reject("Chrome tab create error: " + o.getMessage(lastError))
                } else if (res)
                    resolve(res);
                else
                    reject("Chrome tab create error: missing tab.");
            });
        });
    }

    static remove(tabIds) {
        return new Promise((resolve, reject) => {
            chrome.tabs.remove(tabIds, () => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    r.error("Chrome tab remove error", {
                        error: o.getMessage(lastError)
                    });
                    reject("Chrome tab remove error " + o.getMessage(lastError))
                }
                resolve();
            });
        });
    }
}

export {ChromeTabs}