import * as a from "./Selector.js"//const a = i(10);

class SelectorGroup extends a.Selector {
    constructor(e) {
        super(), this.type = "SelectorGroup", this.selector = "", this.delay = 0, this.extractAttribute = "",
            this.updateData(e);
    }

    canReturnMultipleRecords() {
        return false;
    }

    canHaveChildSelectors() {
        return false;
    }

    canCreateNewJobs() {
        return false;
    }

    willReturnElements() {
        return false;
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        const result = [];
        for (const e of t) {
            const t = {}, r = await e.getText();
            if (t[this.id] = r, this.extractAttribute) {
                const i = await e.getAttr(this.extractAttribute);
                t[`${this.id}-${this.extractAttribute}`] = i;
            }
            result.push(t);
        }
        const r = {};
        r[this.id] = result;
        return r;
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