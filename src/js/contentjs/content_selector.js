import * as HighlightOverlay from "../contentjs/HighlightOverly.js"
import * as ElementQuery2 from "../contentjs/ElementQuery2.js"
import * as CssSelector from "../contentjs/cssSelector.js"
import * as ModesSetting from "../contentjs/ModesSetting.js"
import * as Selection from "../contentjs/Selection.js" //自动选择和点击的元素相似的元素集合

class ContentSelector {
    constructor(selectorLimiter) {
        this.config = selectorLimiter;
        this.uiMounted = false;
        this.initConfig(selectorLimiter);

        this.cssSelector = new CssSelector.default({
            enableSmartTableSelector: true,
            parent: this.config.parent,
            allowMultipleSelectors: false,
            ignoredClasses: ["-ws-data-preview-element"],
            query: cssSelector => ElementQuery2.ElementQuery2.find(cssSelector, this.config.parent)
        });

        const {parent: selectorLimiterParent, allowedElements: selectorLimiterAllowedElements} = this.config;

        this.selection = new Selection.Selection(selectorLimiterParent, this.cssSelector, selectorLimiterAllowedElements);
        this.highlightOverlay = new HighlightOverlay.HighlightOverlay({
            parent: selectorLimiterParent,
            allowedElements: selectorLimiterAllowedElements
        }, this.selection);
    }
    //Set config allowedElements,parentCSSSelector,parent
    initConfig(selectorLimiter) {
        this.config.allowedElements = selectorLimiter.allowedElements || "";
        this.config.parentCSSSelector = selectorLimiter.parentCSSSelector.trim(); //parentCSSSelector 可能的多级的,多个parent selector层级关系
        if (selectorLimiter.parentCSSSelector) {
            this.config.parent = ElementQuery2.ElementQuery2.find(selectorLimiter.parentCSSSelector, document)[0];
            if (!this.config.parent) {
                window.alert("Parent element not found!");
                throw  new Error("parent selector not found");
            }
        } else
            this.config.parent = document.body;
    }
    elementPreview(e) {
        this.highlightOverlay.mode = ModesSetting.Modes.preview;
        this.highlightOverlay.enable();
        this.highlightOverlay.selector = e;
    }
    mountGUI() {
        this.highlightOverlay.mode = ModesSetting.Modes.select;
        this.highlightOverlay.enable();
    }
    removeGUI() {
        this.highlightOverlay.disable();
    }
    async getCSSSelector() {
        this.mountGUI();
        const cssSelector = await this.selection.getLockedSelector();
        return Promise.resolve({
            CSSSelector: cssSelector
        });
    }
}

export { ContentSelector }