import * as a from "./Selector.js"//const a = i(10);

class SelectorElement extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorElement";
        this.selector = "";
        this.multiple = !0;
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
        return !1;
    }

    willReturnElements() {
        return !0;
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        for (const e of t)
            await await e;
    }

    getDataColumns() {
        return [];
    }

    getFeatures() {
        return ["selector", "multiple", "delay"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}

export {SelectorElement}