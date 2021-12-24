import {default as r} from "../../log/log.js"
import * as a from "../state/AppState.js"
import * as Obj from "../../common/Obj.js"
import {default as msgProcess} from "../../common/Msg.js"

let backgroundPageClient = new class {
    constructor() {
        return this.asProxy();
    }

    asProxy() {
        return new Proxy(this, {
            get: function (target, property)
            {
                console.log(JSON.stringify(target));
                console.log(JSON.stringify(property));
                console.log(arguments);
                if(undefined!== target[property])
                {
                    return target[property];
                }
                else
                {
                    return target.callBackgroundPage.bind(target, property);
                }
            }
        });
    }

    async getDataPreviewSelectorData(selector_context) {
        const tabId = chrome.devtools.inspectedWindow.tabId;
        return await this.callBackgroundPage("getDataPreviewSelectorData", tabId, selector_context);

    }

    async getAllSelectorDataPreviewData(e) {
        const t = chrome.devtools.inspectedWindow.tabId;
        return await this.callBackgroundPage("getAllSelectorDataPreviewData", t, e);

    }

    async performSelectorAction(selector_context) {
        const tabId = chrome.devtools.inspectedWindow.tabId;
        await this.callBackgroundPage("performSelectorAction", tabId, selector_context);

    }

    async getSitemapData(sitemap_id) {
        let lastKey = "";
        const result = [];
        let totalRows;
        do {
            const queryRows = await this.callBackgroundPage("getSitemapDataRange", sitemap_id, lastKey, 50);
            for (const row of queryRows.rows)
                result.push(row);
            lastKey = queryRows.lastKey;
            totalRows = queryRows.totalRows;
        } while (result.length < totalRows);
        return result;
    }

    async deleteSitemapData(sitemap_id){
        await this.callBackgroundPage("deleteSitemapDataDb",sitemap_id,true);
    }

    async getSitemapXmlLinksFromRobotsTxt() {
        const e = chrome.devtools.inspectedWindow.tabId;
        return await this.callBackgroundPage("getSitemapXmlLinksFromRobotsTxt", e);

    }

    findSchemaOrgData() {
        const e = chrome.devtools.inspectedWindow.tabId;
        return this.callBackgroundPage("findSchemaOrgData", e);

    }

    callBackgroundPage(method, ...params) {
        return new Promise((accept, reject) => {
                const sendMsg = {
                    method: method,
                    params: Obj.Obj.convertToBasicObject(params)
                };

                chrome.runtime.sendMessage(sendMsg, replyMsg => {
                        if (undefined === replyMsg) {
                            const error = msgProcess.getMessage(chrome.runtime.lastError);
                            r.error("Background page client missing response", {
                                error: error
                            });
                            a.appState.setErrors(error, method);
                            reject(new Error(error));
                        } else if (replyMsg.success)
                            accept(replyMsg.response);
                        else {
                            a.appState.setErrors(replyMsg.error, method);
                            reject(replyMsg.error);
                        }
                    }
                );
            }
        );
    }
};


export {backgroundPageClient}