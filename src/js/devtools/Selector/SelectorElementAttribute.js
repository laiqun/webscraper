import {Selector} from "./Selector.js";

class SelectorElementAttribute extends Selector {
    constructor(e) {
        super();
        this.type = "SelectorElementAttribute";
        this.selector = "";
        this.multiple = false;
        this.delay = 0;
        this.extractAttribute = "";
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
        const elements = await this.getDataElements(e);
        if(false === this.multiple && 0 === elements.length)
            return this.getEmptyRecord();
        let result =[];
        for (const element of elements) {
            const attr = await element.getAttr(this.extractAttribute);
            result.push( {[this.id]: attr});
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