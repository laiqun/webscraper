import * as contentSelector from "../contentjs/content_selector.js";
import * as blockerEventFunc from "../contentjs/blockerFunction.js";
import * as ElementReferences from "./ElementReferences.js";
import * as ScriptRunner from "../contentjs/Extractor/ScriptRunner.js";
import * as TextExtractor from "../contentjs/Extractor/TextExtractor.js";
import * as AttributeExtractor from "../contentjs/Extractor/AttributeExtractor.js";
import * as InnerHTMLExtractor from "../contentjs/Extractor/InnerHTMLExtractor.js";
import * as WrappedHTMLExtractor from "../contentjs/Extractor/WrappedHTMLExtractor.js";
import * as WrappedHTMLWithoutTextExtractor from "../contentjs/Extractor/WrappedHTMLWithoutTextExtractor.js";
import * as PopUpUrlExtractor from "../contentjs/Extractor/PopUpUrlExtractor.js";
import * as TypeAction from "../contentjs/Action/TypeAction.js";
import * as ClickAction from "../contentjs/Action/ClickAction.js";
import * as WaitForPageLoadAction from "../contentjs/Action/WaitForPageLoadAction.js";
import * as DownloadUrlAction from "../contentjs/Action/DownloadUrlAction.js";
import * as ClickActionTypes from "../contentjs/Action/ClickActionTypes.js"
import * as scrool from "../contentjs/Action/scrool.js"
import * as jquery from "./jquery.js";

/*
* 这个文件有3个功能
* 1. 可视化选择元素
* 2. Element preview 可视化已经选择的元素
* 3. 抓取数据
* */
class main {
    constructor() {
        this.contentSelector = null;
        this.highlightDataElements = false;
        this.elementReferences = new ElementReferences.ElementReferences;
        this.scriptRunner = new ScriptRunner.ScriptRunner(this.elementReferences);

        this.textExtractor = new TextExtractor.TextExtractor(this.elementReferences);
        this.attributeExtractor = new AttributeExtractor.AttributeExtractor(this.elementReferences);
        this.htmlExtractor = new InnerHTMLExtractor.InnerHTMLExtractor(this.elementReferences);
        this.wrappedHtmlExtractor = new WrappedHTMLExtractor.WrappedHTMLExtractor(this.elementReferences);
        this.wrappedHtmlWithoutTextExtractor = new WrappedHTMLWithoutTextExtractor.WrappedHTMLWithoutTextExtractor(this.elementReferences);
        this.popupUrlExtractor = new PopUpUrlExtractor.PopUpUrlExtractor(this.elementReferences, this.scriptRunner);

        this.typeAction = new TypeAction.TypeAction(this.elementReferences);//打字  type
        this.clickAction = new ClickAction.ClickAction(this.elementReferences);
        this.waitForPageLoadAction = new WaitForPageLoadAction.WaitForPageLoadAction(this.elementReferences);
        this.downloadUrlAction = new DownloadUrlAction.DownloadUrlAction;
    }

    init() {
        this.initMessageListener();//监听dev tool页面发送的消息  chrome.tabs.sendMessage  文件  DevToolsContentScriptClient.js
    }

    async getCSSSelector(e) {
        return this.elementReferences.getCSSSelector(e);
    }

    getElementReference(e) {
        return this.elementReferences.getElementReference(e);
    }

    getElementByReference(e) {
        return this.elementReferences.getElementByReference(e);
    }

    async getDataWithScript(e, t) {
        return this.scriptRunner.extract(e, t);
    }

    async getText(e) {
        return this.textExtractor.extract(e, this.highlightDataElements);
    }

    async getAttr(e, t) {
        return this.attributeExtractor.extract(e, t, this.highlightDataElements);
    }

    async getHTML(e) {
        return this.htmlExtractor.extract(e);
    }

    async getWrappedHTML(e) {
        return this.wrappedHtmlExtractor.extract(e);
    }

    async getWrappedHTMLWithoutText(e) {
        return this.wrappedHtmlWithoutTextExtractor.extract(e);
    }

    async getPopupURL(e) {
        return this.popupUrlExtractor.extract(e);
    }

    async click(e, t = ClickActionTypes.ClickActionTypes.auto) {
        return this.clickAction.extract(e, t);
    }

    async waitForPageLoad() {
        return this.waitForPageLoadAction.extract();
    }

    async downloadUrl(e) {
        return this.downloadUrlAction.extract(e);
    }

    async type(e, t) {
        return this.typeAction.extract(e, t);
    }

    //功能1:可视化选择元素
    //  {parentCSSSelector: "", allowedElements: "*"}  {parentCSSSelector: "", allowedElements: "a"}
        //{parentCSSSelector: "div.video-card:nth-of-type(3) div.video-card__info ", allowedElements: "*"}
    // 只有在上层元素为Element的时候才生效 ； 其值就是dev tool page 里面显示的内容
    //{parentCSSSelector: "div#u1 a[name='tj_trnews'] ", allowedElements: "*"}  两级  div#u1  第二级a[name='tj_trnews']
//{parentCSSSelector: "", allowedElements: "img"}
    async selectSelector(selectorLimiter) {
        this.removeCurrentContentSelector();
        this.contentSelector = new contentSelector.ContentSelector(selectorLimiter);
        await blockerEventFunc.blockerFunction();//屏蔽默认事件，这样选择元素的时候，点击不跳转，可以安心选择元素
        const CSSSelector = await this.contentSelector.getCSSSelector();
        await this.removeCurrentContentSelector();
        return CSSSelector;
    }

   async removeCurrentContentSelector() {
        if (this.contentSelector) {
            this.contentSelector.removeGUI();
            this.contentSelector = null;
        }
        blockerEventFunc.triggerRemoval();
    }

    //功能2:已选择元素的preview
//{parentCSSSelector: "", elementCSSSelector: "span#blognamespan"}
    async elementPreview(selectorLimiter) {//开启灰色背景蒙板，然后红色背景高亮指定selector的元素
        this.removeCurrentContentSelector();
        this.contentSelector = new contentSelector.ContentSelector({
            parentCSSSelector: selectorLimiter.parentCSSSelector
        });
        this.contentSelector.elementPreview(selectorLimiter.elementCSSSelector);
    }

//{method: "getElements", params: Array(2)}
// method: "getElements"
// params: (2) ["a.dropdown-toggle.nav-link, h1", 0]
    async getElements(cssSelector, refIndex) {
        return this.elementReferences.getElements(cssSelector, refIndex);
    }

//"a.nav-link[target]"  t=0
    async getElement(cssSelector, refIndex) {
        return this.elementReferences.getElement(cssSelector, refIndex);
    }

    async getNativeAttr(refIndex, attribute_name) {
        let attr_value = this.elementReferences.getElementByReference(refIndex)[attribute_name];
        attr_value = attr_value || "";
        return attr_value;
    }

    async getClone(refIndex) {
        return this.elementReferences.getClone(refIndex);
    }

    async getCssSelectorHTML(cssSelector) {
        return jquery(cssSelector).clone().wrap("<p>").parent().html();
    }

    waitAjax(func) {
        setTimeout(func, 1);
    }

    nativeClick(cssSelector) {
        const elements = jquery(cssSelector);
        if(elements.length > 0)
            elements[0].click();
        else
            console.log("couldn't find click element");
    }

    async scrollDownElement(ref_index, selector, notHaveStartElement = false, targetRefIndex) {
        const targetElement = this.elementReferences.getElementByReference(targetRefIndex);
        if (true !== notHaveStartElement) {  //如果到达指定Y坐标为false，那么直接滑动到底
            const context = this.elementReferences.getElementByReference(ref_index);
            await scrool.default.scrollToBottomElement(context, selector, targetElement);
        } else {
            const start_offset = scrool.default.getWrapperElementScrollBottomPosition(targetElement);//实际高度-可视高度，从这个位置为起点
            await scrool.default.scrollToY(start_offset, targetElement);
        }
    }

    async scrollElementToTop(refIndex) {
        const targetElement = this.elementReferences.getElementByReference(refIndex);
        await scrool.default.scrollElementToTop(targetElement);
    }

    async srcollBodyToTop() {
        await scrool.default.scrollElementToTop(window);
    }

    async scrollDownBody(refIndex, selector, notHaveStartElement = false) {
        if (true !== notHaveStartElement) {
            const context = this.elementReferences.getElementByReference(refIndex);
            await scrool.default.scrollToBottomElement(context, selector, window);
        } else {
            const start_offset = scrool.default.getWrapperElementScrollBottomPosition(window);
            await scrool.default.scrollToY(start_offset, window);
        }
    }

    async getRootElement() {  //进行data preview的时候，首先执行这个，作为第一步 ，设置elementRef，然后执行第二步getElements，第三步 getText
        return this.elementReferences.getRootElement();//将document加入refences
    }

    async getPageUrl() {
        return window.location.href;
    }

    async getTagName(refIndex) {
        return this.elementReferences.getElementByReference(refIndex).tagName.toLowerCase();
    }

    highLightElement(e) {
        if (this.highlightDataElements)
            e.classList.add("-sitemap-parent");
    }
// 这里也是RPC，HighLightOverly 和 Selection用的是长连接
    initMessageListener() {
        console.log("content initMessageListener");
        //request, sender, sendResponse
        //request demo
        //{method: "selectSelector", params: Array(1)}
        // method: "selectSelector"
        // params: Array(1)
        // 0: {parentCSSSelector: "", allowedElements: "*"}
        // length: 1
        //sender {id: "jnhgnonknehpejjnehehllkliplmbmhn", origin: "null"}
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {  //第一个放着要调用的函数,和参数  第二个sender,第三个sendResponse
            try {
                this[request.method].apply(this, request.params).then(prev_func_out => {
                    sendResponse({
                        success: true,
                        response: prev_func_out
                    });
                }).catch(error => {
                   let resMsg = {
                        success: false,
                        error: error.toString(),
                        stack: error.stack
                    };
                    sendResponse(resMsg);
                });
            } catch (exception) {  //try {
                let resMsg = {
                    success: false,
                    error: exception.toString(),
                    stack: exception.stack
                };
                sendResponse(resMsg);
            }
            return true;
        });
    }
}

export {main}