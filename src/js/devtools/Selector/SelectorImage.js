import * as a from "./Selector.js"//const a = i(10);
class SelectorImage extends a.Selector {
    constructor(e) {
        super(), this.type = "SelectorImage", this.selector = "", this.multiple = !1, this.delay = 0,
            this.updateData(e);
    }

    canReturnMultipleRecords() {
        return !0;
    }

    canHaveChildSelectors() {
        return !1;
    }

    canCreateNewJobs() {
        return !1;
    }

    willReturnElements() {
        return !1;
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        !1 === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        for (const e of t) {
            let t = await n(e.getAttr("src"));
            t || (t = await n(e.getAttr("srcset"))),
                await await {
                    [this.id + "-src"]: t
                };
        }
    }

    getDataColumns() {
        return [this.id + "-src"];
    }

    getFeatures() {
        return ["selector", "multiple", "delay"];
    }

    getItemCSSSelector() {
        return "img";
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}

export {SelectorImage}