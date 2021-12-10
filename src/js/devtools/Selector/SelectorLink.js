import {Selector} from "./Selector.js";
import {Url} from "./Url.js"
class SelectorLink extends Selector {
    constructor(e) {
        super();
        this.type = "SelectorLink";
        this.selector = "";
        this.multiple = !1;
        this.delay = 0;
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return !0;
    }

    canHaveChildSelectors() {
        return !0;
    }

    canCreateNewJobs() {
        return !0;
    }

    willReturnElements() {
        return !1;
    }

    getLinkType() {
        return void 0 === this.linkType ? "link" : this.linkType;
    }

    async getLink(e) {
        const t = this.getLinkType();
        if ("link" === t) {
            return await this.getLinkFromHrefAttribute(e);
        }
        if ("text" === t) {
            return await this.getLinkFromText(e);
        }
        throw "unknown link type." + t;
    }

    async getLinkFromHrefAttribute(e) {
        return await e.getNativeAttr("href");
    }

    async getLinkFromText(e) {
        return await e.getText();
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        if(false === this.multiple && 0 === t.length)
             this.getEmptyRecord();
        let result =[];
        for (const e of t) {
            const t = await e.getText();
            let i = await this.getLink(e);
            i = Url.escapeWhiteSpace(i);
            const n = {
                [this.id]: t,
                [this.id + "-href"]: i,
                _followSelectorId: this.id,
                _follow: i
            };
            result.push(n) ;
        }
        return result;
    }

    getDataColumns() {
        return [this.id, this.id + "-href"];
    }

    getFeatures() {
        return ["selector", "multiple", "delay", "linkType"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }

    getItemCSSSelector() {
        return "a";
    }

    isLinkSelector() {
        return !0;
    }
}

export {SelectorLink}

