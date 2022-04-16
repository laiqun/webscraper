import {default as Log} from "../../log/log.js";//r = i(5),
import {default as Msg} from "../../common/Msg.js"//o = i(17),
import {Async} from "../../common/Async.js"//s = i(22),
import {TakesScreenShot} from "../IM/TakesScreenShot.js"//const  a = i(613);
class WindowManager extends TakesScreenShot {
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
        {
            Log.error("trying to create window when it already exists");
            throw "CHROME_WINDOW_CLOSED";
        }
        await new Promise((resolve, reject) => {
            const windowSetting = this.defaultChromeWindowConfiguration;
            if(url )
                windowSetting.url = url;
            chrome.windows.create(windowSetting, res => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    Log.error("Chrome window create error", {
                        error: Msg.getMessage(lastError)
                    });
                    return  void reject("Chrome window create error" + Msg.getMessage(lastError));
                }
                const tabId = res.tabs[0].id;
                const windowsId = res.id;
                this.tab.tabId = tabId;
                this.tab.windowId = res.id;
/*  about windowId define as The current window
Many functions in the extension system take an optional windowId parameter, which defaults to the current window.

The current window is the window that contains the code that is currently executing. It's important to realize that this can be different from the topmost or focused window.

For example, say an extension creates a few tabs or windows from a single HTML file, and that the HTML file contains a call to tabs.query. The current window is the window that contains the page that made the call, no matter what the topmost window is.

In the case of the event page, the value of the current window falls back to the last active window. Under some circumstances, there may be no current window for background pages.
* */
                this.lastTimeWindowRefreshed = Date.now();
                Log.debug("new window created", {
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
            await Async.timeoutPromiseWithoutTimeoutError(e, 2000, "Empty page tab load timed out");
        }
    }

    async closeWindow() {
        if (undefined === this.tab.windowId) {
            Log.error("trying to destroy window when it doesn't exist");
            throw  "CHROME_WINDOW_CLOSED";
        }
        if (!(await this.windowExists()))
        {
            this.tab.windowId = undefined;
            this.tab.tabId = undefined;
            throw "CHROME_WINDOW_CLOSED";
        }
        Log.debug("removing window");
        await new Promise((resolve, reject) => {
            chrome.windows.remove(this.tab.windowId, () => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError)
                {
                    Log.error("Chrome window remove error", {
                        error: lastError.toString()
                    });
                    return  void reject("Chrome window remove error" + lastError.toString());
                }
                resolve();
            });
        });
        Log.debug("window removed");
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
                    Log.error("Chrome get window list error", {
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