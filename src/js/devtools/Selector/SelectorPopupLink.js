import * as s from "./Selector.js"//, s = i(10)
import * as o from "./Url.js"//    const o = i(19);
class SelectorPopupLink extends s.Selector {
    constructor(e) {
        super(), this.type = "SelectorPopupLink", this.selector = "", this.multiple = !1,
            this.delay = 0, this.updateData(e);
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

    async _getData(e) {
        const t = await this.getDataElements(e);
        !1 === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        for (const e of t) {
            const t = await r(e.getText()), i = await this.getPopupURL(e), n = {
                [this.id]: t,
                [this.id + "-href"]: i,
                _followSelectorId: this.id,
                _follow: i
            };
            await await n;
        }
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
        return !0;
    }
}


export {SelectorPopupLink}