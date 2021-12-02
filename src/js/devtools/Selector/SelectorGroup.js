import * as a from "./Selector.js"//const a = i(10);

class SelectorGroup extends a.Selector {
    constructor(e) {
        super(), this.type = "SelectorGroup", this.selector = "", this.delay = 0, this.extractAttribute = "",
            this.updateData(e);
    }

    canReturnMultipleRecords() {
        return !1;
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
        const t = await this.getDataElements(e), i = [];
        for (const e of t) {
            const t = {}, r = await e.getText();
            if (t[this.id] = r, this.extractAttribute) {
                const i = await e.getAttr(this.extractAttribute);
                t[`${this.id}-${this.extractAttribute}`] = i;
            }
            i.push(t);
        }
        const r = {};
        r[this.id] = i, await await r;
    }

    getDataElements(e) {
        return e.getElements(this.selector);
    }

    getDataColumns() {
        return this.extractAttribute ? [this.id, `${this.id}-${this.extractAttribute}`] : [this.id];
    }

    getFeatures() {
        return ["selector", "delay", "extractAttribute"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}


export {SelectorGroup}