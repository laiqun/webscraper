import * as s from "./Selector.js"//, s = i(10)
import * as o from "./Url.js"//    const o = i(19);
class SelectorPopupLink extends s.Selector {
    constructor(e) {
        super();
        this.type = "SelectorPopupLink";
        this.selector = "";
        this.multiple = false;
        this.delay = 0;
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
    }

    canHaveChildSelectors() {
        return true;
    }

    canCreateNewJobs() {
        return true;
    }

    willReturnElements() {
        return false;
    }

    async _getData(e) {
        const dataElements = await this.getDataElements(e);
        if(false === this.multiple && 0 === dataElements.length)
            return  this.getEmptyRecord();
        let result = [];
        for (const dataElement of dataElements) {
            const text = await dataElement.getText();
            const link = await this.getPopupURL(dataElement);
            const oneItem = {
                [this.id]: text,
                [this.id + "-href"]: link,
                _followSelectorId: this.id,
                _follow: link
            };
            result.push(oneItem);
        }
        return result;
    }

    async getPopupURL(e) {
        let t = await e.getPopupURL();
        t = o.Url.escapeWhiteSpace(t);
        return t;
    }

    getDataColumns() {
        return [this.id, this.id + "-href"];
    }

    getFeatures() {
        return ["selector", "multiple", "delay"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }

    getItemCSSSelector() {
        return "*";
    }

    isLinkSelector() {
        return true;
    }
}


export {SelectorPopupLink}