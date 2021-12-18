import {default as r} from "../../contentjs/log.js";//r = i(5),
import {default as o} from "../../contentjs/Msg.js"//o = i(17),
import * as s from "../../devtools/Async.js"//s = i(22),
import * as a from "../IM/TakesScreenShot.js"//const  a = i(613);
class WindowManager extends a.TakesScreenShot {
    constructor(e) {
        super(e);
        this.defaultChromeWindowConfiguration = {
            type: "popup",
            width: 1042,
            height: 768,
            left: undefined,
            top: undefined
        };
    }

    setWindowConfiguration(e) {
        this.defaultChromeWindowConfiguration = e;
        return  Promise.resolve();
    }

    async createWindow(url) {
        if (this.tab.windowId)
            throw r.error("trying to create window when it already exists"),
                "CHROME_WINDOW_CLOSED";
        await new Promise((resolve, reject) => {
            const windowSetting = this.defaultChromeWindowConfiguration;
            if(url )
                windowSetting.url = url;
            chrome.windows.create(windowSetting, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    r.error("Chrome window create error", {
                        error: o.getMessage(lastError)
                    });
                    return  void reject("Chrome window create error" + o.getMessage(lastError));
                }
                const tabId = res.tabs[0].id;
                const windowsId = res.id;
                this.tab.tabId = tabId;
                this.tab.windowId = res.id;
                this.lastTimeWindowRefreshed = Date.now();
                r.debug("new window created", {
                        windowId: windowsId,
                        tabId: tabId
                });
                resolve();
            });
        });
        if ( !url) {
            const e = new Promise((resolve, reject) => {
                const func = (tabId, changeInfo, tab) => {
                    if(tabId === this.tab.tabId && "complete" === changeInfo.status )
                    {
                        resolve();
                        chrome.tabs.onUpdated.removeListener(func);
                    }
                };
                chrome.tabs.onUpdated.addListener(func);
            });
            await s.Async.timeoutPromiseWithoutTimeoutError(e, 2000, "Empty page tab load timed out");
        }
    }

    async closeWindow() {
        if (undefined === this.tab.windowId)
            throw r.error("trying to destroy window when it doesn't exist"),
                "CHROME_WINDOW_CLOSED";
        if (!(await this.windowExists()))
        {
            this.tab.windowId = undefined;
            this.tab.tabId = undefined;
            throw "CHROME_WINDOW_CLOSED";
        }
        r.debug("removing window");
        await new Promise((resolve, reject) => {
            chrome.windows.remove(this.tab.windowId, () => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    r.error("Chrome window remove error", {
                        error: lastError.toString()
                    });
                    return  void reject("Chrome window remove error" + lastError.toString());
                }
                resolve();
            });
        });
        r.debug("window removed");
        this.tab.windowId = undefined;
        this.tab.tabId = undefined;
    }

    async windowExists() {
        if (!this.tab.windowId)
            return false;
        const curWindows = await new Promise((resolve, reject) => {
            chrome.windows.getAll(res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    r.error("Chrome get window list error", {
                        error: lastError.toString()
                    });
                    return  void reject("Chrome get window list error" + lastError.toString())
                }
                resolve(res);
            });
        });
        for (const curWindow of curWindows)
            if (curWindow.id === this.tab.windowId)
                return true;
        return false;
    }
}

export {WindowManager}