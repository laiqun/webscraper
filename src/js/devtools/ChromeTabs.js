import {default as logfunc} from "../contentjs/log.js"//r = i(5),
import * as a from "./Async.js"//a = i(22),
import {default as o} from "../contentjs/Msg.js"//const   o = i(17);
class ChromeTabs {
    static get(e) {
        return new Promise((t, i) => {
            chrome.tabs.get(e, e => {
                const n = chrome.runtime.lastError;
                null != n ? (logfunc.error("Chrome tab get error", {
                    error: o.getMessage(n)
                }), i("Chrome tab get error " + o.getMessage(n))) : e ? t(e) : i("Chrome tab get error missing tab.");
            });
        });
    }

    static update(e, t) {
        return new Promise((i, n) => {
            chrome.tabs.update(e, t, e => {
                const t = chrome.runtime.lastError;
                if (null != t) {
                    const e = o.getMessage(t);
                    o.startsWithAnyOf(e, ["Invalid url"]) || logfunc.error("Chrome tab update error", {
                        error: e
                    }), n("Chrome tab update error " + o.getMessage(t));
                } else i(e);
            });
        });
    }

    static async  waitForUrl(e, url_value, i, o) {
            let result;
            for (let index = 0; index <= i && (result = await s.get(e), url_value !== result.url); index += 50)
            {
                logfunc.debug("waiting for tab to get url", {
                    url: url_value,
                    tabUrl: result.url,
                    status: result.status
                });
                await a.Async.sleep(50);
            }
            if (url_value !== result.url && o)
                throw new Error("Tab didn't load expected URL");
            return result;
    }

    static duplicate(e) {
        return new Promise((t, i) => {
            chrome.tabs.duplicate(e, e => {
                const n = chrome.runtime.lastError;
                null != n ? (logfunc.error("Chrome tab duplicate error", {
                    error: o.getMessage(n)
                }), i("Chrome tab duplicate error: " + o.getMessage(n))) : e ? t(e) : i("Chrome tab duplicate error: missing tab.");
            });
        });
    }

    static create(e) {
        return new Promise((t, i) => {
            chrome.tabs.create(e, e => {
                const n = chrome.runtime.lastError;
                null != n ? (logfunc.error("Chrome tab create error", {
                    error: o.getMessage(n)
                }), i("Chrome tab create error: " + o.getMessage(n))) : e ? t(e) : i("Chrome tab create error: missing tab.");
            });
        });
    }

    static remove(e) {
        return new Promise((t, i) => {
            chrome.tabs.remove(e, () => {
                const e = chrome.runtime.lastError;
                null != e && (logfunc.error("Chrome tab remove error", {
                    error: o.getMessage(e)
                }), i("Chrome tab remove error " + o.getMessage(e))), t();
            });
        });
    }
}

export {ChromeTabs}