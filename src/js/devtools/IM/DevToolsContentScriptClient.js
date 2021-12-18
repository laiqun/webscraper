//221
let DevToolsContentScriptClient = void 0;
//const  a = i(17);//, o = i(196);

import {default as r} from "../../contentjs/log.js"//r = i(5),
import * as s from "url-parse"//, s = i(48)
import * as o from "../../background/chromeOpt/ChromeTabs.js" //o = i(196);
import {default as a} from "../../contentjs/Msg.js"  //a = i(17)
DevToolsContentScriptClient = new class {
    constructor() {
        return this.asProxy();
    }

    async removeCurrentContentSelector() {
        try {
            await this.sendToContentScript("removeCurrentContentSelector");
        } catch (e) {
        }
    }

    asProxy() {
        return new Proxy(this, {
            //bind()方法会创建一个新的函数，称为绑定函数,fun方法在this环境下调用
            //
            // bind可传入多个参数，第一个参数作为this，第二个及以后的参数则作为函数的参数调用
            get: (target, property) => void 0 !== target[property] ? target[property] : target.sendToContentScript.bind(target, property)
        });
    }

    async sendToContentScript(func_name, ...args) {
        if (!(await this.canCommunicateWithContentScript()))
            return void r.notice("skipping communication with content script due to ignored page url protocol");
        const msg = {
            method: func_name,
            params: args
        };
        return new Promise((resolve, reject) => {
            const tabId = chrome.devtools.inspectedWindow.tabId;
            chrome.tabs.sendMessage(tabId, msg, res => {
                if (void 0 === res) {
                    const e = a.getMessage(chrome.runtime.lastError);
                    r.error("DevTools Content Script client missing response", {
                        error: e
                    });
                    reject(new Error(e));
                }
                else
                {
                    res.success ? resolve(res.response) : reject(res.error)
                }
            });
        });
    }

    async getInspectedWindowProtocol() {
        const e = await o.ChromeTabs.get(chrome.devtools.inspectedWindow.tabId);
        return s(e.url).protocol;
    }

    async canCommunicateWithContentScript() {
        console.log("canCommunicateWithContentScript");
        const e = await this.getInspectedWindowProtocol();
        return !["chrome-search:", "about:", "chrome:"].includes(e);
    }
};

export {DevToolsContentScriptClient}