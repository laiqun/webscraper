import {default as Log} from "../../log/log.js";//r = i(5),
import {default as Msg} from "../../common/Msg.js"//o = i(17),
import {Async} from "../../common/Async.js"//a = i(22),
class ChromeTabs {
    static get(tabId) {
        return new Promise((resolve, reject) => {
            chrome.tabs.get(tabId, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    Log.error("Chrome tab get error", {
                        error: Msg.getMessage(lastError)
                    });
                    reject("Chrome tab get error " + Msg.getMessage(lastError))
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
                    const msg = Msg.getMessage(lastError);
                    if (!Msg.startsWithAnyOf(msg, ["Invalid url"]))
                        Log.error("Chrome tab update error", {
                            error: msg
                        });
                    reject("Chrome tab update error " + Msg.getMessage(lastError));
                } else
                    resolve(res);
            });
        });
    }

    static async waitForUrl(tabid, target_url, timeout, throwErrorWhenMissMatch) {
        let result;
        for (let count = 0; count <= timeout && (result = await ChromeTabs.get(tabid), target_url !== result.url); count += 50)
        {
            Log.debug("waiting for tab to get url", {
                url: target_url,
                tabUrl: result.url,
                status: result.status
            });
            await Async.sleep(50);
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
                    Log.error("Chrome tab duplicate error", {
                        error: Msg.getMessage(lastError)
                    });
                    reject("Chrome tab duplicate error: " + Msg.getMessage(lastError));
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
                    Log.error("Chrome tab create error", {
                        error: Msg.getMessage(lastError)
                    });
                    reject("Chrome tab create error: " + Msg.getMessage(lastError))
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
                    Log.error("Chrome tab remove error", {
                        error: Msg.getMessage(lastError)
                    });
                    reject("Chrome tab remove error " + Msg.getMessage(lastError))
                }
                resolve();
            });
        });
    }
}

export {ChromeTabs}