import * as a from "./Selector.js"//const a = i(10);

class SelectorGroup extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorGroup";
        this.selector = "";
        this.delay = 0;
        this.extractAttribute = "";
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
        const elements = await this.getDataElements(e);
        const result = [];
        for (const element of elements) {
            const oneItem = {};
            const text = await element.getText();
            oneItem[this.id] = text;
            if (this.extractAttribute) {
                const attr = await element.getAttr(this.extractAttribute);
                oneItem[`${this.id}-${this.extractAttribute}`] = attr;
            }
            result.push(oneItem);
        }
        const groupedResult = {};
        groupedResult[this.id] = result;
        return groupedResult;
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