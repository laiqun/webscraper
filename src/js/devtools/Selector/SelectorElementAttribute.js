import {Selector} from "./Selector.js";

class SelectorElementAttribute extends Selector {
    constructor(e) {
        super(),
            this.type = "SelectorElementAttribute",
            this.selector = "",
            this.multiple = false,
            this.delay = 0,
            this.extractAttribute = "",
            this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
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
        false === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        let result =[];
        for (const e of t) {
            const t = await e.getAttr(this.extractAttribute);
            result.push( {[this.id]: t});
        }
        return result;
    }

    getDataColumns() {
        return [this.id];
    }

    getFeatures() {
        return ["selector", "multiple", "extractAttribute", "delay"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}

export {SelectorElementAttribute}