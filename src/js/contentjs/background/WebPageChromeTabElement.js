import {WebPageElement} from "../../devtools/Selector/WebPageElement.js";
import {WebPageDriverType} from "../../devtools/Selector/WebPageDriverType.js";

class WebPageChromeTabElement extends WebPageElement {
    constructor(e, t) {
        super(e);
        this.driver = WebPageDriverType.chrometab;
        this.contentScriptClient = t.chromeClient;
        this._webPage = t;
    }

    get webPage() {
        return this._webPage;
    }

    async getElementsWithDriver(e) {
        return (await this.contentScriptClient.getElements(e, this.element)).map(e => new o(e, this._webPage));
    }

    async getText() {
        return await this.contentScriptClient.getText(this.element);
    }

    getAllAttributes() {
        return this.contentScriptClient.getAllAttributes(this.element);
    }

    async getNativeAttr(e) {
        return await this.contentScriptClient.getNativeAttr(this.element, e);
    }

    async getAttr(e) {
        return await this.contentScriptClient.getAttr(this.element, e);
    }

    async getHTML() {
        return await this.contentScriptClient.getHTML(this.element);
    }

    async getClone() {
        const e = await this.contentScriptClient.getClone(this.element);
        return new WebPageChromeTabElement(e, this._webPage);
    }

    async getWrappedHTML() {
        return await this.contentScriptClient.getWrappedHTML(this.element);
    }

    async getWrappedHTMLWithoutText() {
        return await this.contentScriptClient.getWrappedHTMLWithoutText(this.element);
    }

    async getCSSSelector() {
        return await this.contentScriptClient.getCSSSelector(this.element);
    }

    async scrollDownElement(e, t, i = !1, r) {
        await this.contentScriptClient.scrollDownElement(e, t, i, r);
    }

    async scrollDownBody(e, t, i = !1) {
        await this.contentScriptClient.scrollDownBody(e, t, i);
    }

    async srcollBodyToTop() {
        await this.contentScriptClient.srcollBodyToTop();
    }

    async getPopupURL() {
        return await this.contentScriptClient.getPopupURL(this.element);
    }

    getInterceptableJavaScriptClickUrl() {
        return this.contentScriptClient.getInterceptableJavaScriptClickUrl(this.element);
    }

    async click(e = "auto") {
        await this.contentScriptClient.click(this.element, e);
    }

    async type(e) {
        await this.contentScriptClient.type(this.element, e);
    }

    async downloadUrl(e) {
        return await this.contentScriptClient.downloadUrl(e);
    }

    async getPageUrl() {
        return await this.contentScriptClient.getPageUrl();
    }

    async getTagName() {
        return await this.contentScriptClient.getTagName(this.element);
    }

    async getDataWithScript(e) {
        return await this.contentScriptClient.getDataWithScript(this.element, e);
    }

    clickAndWaitForRedirectUrl() {
        return this.contentScriptClient.clickAndWaitForRedirectUrl(this.element);
    }
}

export {WebPageChromeTabElement}