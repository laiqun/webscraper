import {default as r} from "../contentjs/log.js";//r = i(5),
import * as o from "../devtools/Async.js"//o = i(22),
import * as a from "./IM/ContentScriptMessenger.js"//const  a = i(614);
class TakesScreenShot extends a.ContentScriptMessenger {
    getScreenShotBase64() {
        const promise_item = new Promise((resolve, reject) => {
            chrome.tabs.captureVisibleTab(this.tab.windowId, {
                quality: 50
            }, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    r.notice("Chrome tab capture error", {
                        error: JSON.stringify(lastError)
                    });
                    return void resolve("");
                }
                if (void 0 === res)
                    return void resolve("");
                const n = res.substr("data:image/jpeg;base64,".length);
                resolve(n);
            });
        });
        return o.Async.timeoutPromiseWithoutTimeoutError(promise_item, 10000, "getScreenShotBase64Browser");
    }
}

export {TakesScreenShot}