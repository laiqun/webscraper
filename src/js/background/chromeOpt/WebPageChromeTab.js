import {WebPageDriverType} from "../../devtools/Selector/WebPageDriverType.js"//, o = i(34)
import {WebPageDriverBase} from "../../devtools/Selector/WebPageDriverBase.js"//r = i(619),
import {WebPageChromeTabElement} from "../IM/WebPageChromeTabElement.js"//const  a = i(620);
class WebPageChromeTab extends WebPageDriverBase {
    constructor(e) {
        super();
        this.chromeClient = e.chromeClient;
    }

    async openPage(url) {
        await this.chromeClient.openPage(url);
    }

    login(e) {
    }

    async getElementsWithDriver(e) {
        return (await this.chromeClient.getElements(e)).map(e => new WebPageChromeTabElement(e, this));
    }

    async close() {
        await this.chromeClient.close();
    }

    async getRootElement() {
        const rootElement = await this.chromeClient.getRootElement();
        return new WebPageChromeTabElement(rootElement, this);
    }

    async setProxyConfiguration(e) {
        await this.chromeClient.setProxyConfiguration(e);
    }

    getDriverType() {
        return WebPageDriverType.chrometab;
    }

    setUserAgent(e) {
        return Promise.resolve();
    }

    async setBlockedUrls(e) {
        await this.chromeClient.setBlockedUrls(e);
    }

    getPupeteerPage() {
        return this.chromeClient.getPupeteerPage();
    }

    getPageLoadState() {
        return this.chromeClient.getPageLoadState();
    }

    waitForPageLoadComplete(e = !0, minDuration) {
        return this.chromeClient.waitForPageLoadComplete(e, minDuration);
    }

    openBlankPage(url, createNewTab = !1) {
        return this.chromeClient.openBlankPage(url, createNewTab);
    }

    isReachable() {
        return this.chromeClient.checkContentScriptReachable();
    }
}

export {WebPageChromeTab}