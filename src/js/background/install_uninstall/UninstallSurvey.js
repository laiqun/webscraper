import {default as n} from "../../log/log.js";//c = i(5),//const n = i(5);
class UninstallSurvey {
    constructor(e) {
        this.userSitemapCount = e.userSitemapCount;
        this.userRecordCount = e.userRecordCount;
        this.timeInstalled = e.timeInstalled;
    }

//设置卸载时的URL,获取用户的sitemap的数量record的数量,还有安装时间
    init() {
        const timeInstalled = this.timeInstalled;
        const t = `https://www.webscraper.io/surveys/extension-uninstall?s=${this.userSitemapCount}&r=${this.userRecordCount}&t=${timeInstalled}`;
        chrome.runtime.setUninstallURL(t, () => {
            const lastError = chrome.runtime.lastError;
            if (lastError)
                n.error("Couldn't set uninstall url", {
                    error: lastError.toString()
                });
        });
    }
}

export {UninstallSurvey}