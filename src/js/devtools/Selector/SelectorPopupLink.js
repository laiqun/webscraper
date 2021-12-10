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
        const t = await this.getDataElements(e);
        false === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        let result = [];
        for (const e of t) {
            const t = await e.getText();
            const i = await this.getPopupURL(e);
            const n = {
                [this.id]: t,
                [this.id + "-href"]: i,
                _followSelectorId: this.id,
                _follow: i
            };
            result.push(n);
        }
        return result;
    }

    async getPopupURL(e) {
        let t = await e.getPopupURL();
        return t = o.Url.escapeWhiteSpace(t), t;
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