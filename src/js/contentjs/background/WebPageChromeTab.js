import {WebPageDriverBase} from "../../devtools/Selector/WebPageDriverBase.js";
import {WebPageChromeTabElement} from "./WebPageChromeTabElement.js"
import {WebPageDriverType} from "../../devtools/Selector/WebPageDriverType.js";

class WebPageChromeTab extends WebPageDriverBase {
    constructor(e) {
        super();
        this.chromeClient = e.chromeClient;
    }

    async openPage(e) {
        await this.chromeClient.openPage(e);
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
        const e = await this.chromeClient.getRootElement();
        return new WebPageChromeTabElement(e, this);
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

    waitForPageLoadComplete(e = true, t) {
        return this.chromeClient.waitForPageLoadComplete(e, t);
    }

    openBlankPage(e, t = false) {
        return this.chromeClient.openBlankPage(e, t);
    }

    isReachable() {
        return this.chromeClient.checkContentScriptReachable();
    }
}

export {WebPageChromeTab}
