import {default as Log} from "../../log/log.js";//r = i(5),
import {Async} from "../../common/Async.js"//o = i(22),
import {ContentScriptMessenger} from "./ContentScriptMessenger.js"//const  a = i(614);
class TakesScreenShot extends ContentScriptMessenger {
    getScreenShotBase64() {
        const promise_item = new Promise((resolve, reject) => {
            chrome.tabs.captureVisibleTab(this.tab.windowId, {
                quality: 50
            }, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    Log.notice("Chrome tab capture error", {
                        error: JSON.stringify(lastError)
                    });
                    return void resolve("");
                }
                if (undefined === res)
                    return void resolve("");
                const n = res.substr("data:image/jpeg;base64,".length);
                resolve(n);
            });
        });
        return Async.timeoutPromiseWithoutTimeoutError(promise_item, 10000, "getScreenShotBase64Browser");
    }
}

export {TakesScreenShot}