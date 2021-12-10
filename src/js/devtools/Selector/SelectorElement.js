import * as a from "./Selector.js"//const a = i(10);

class SelectorElement extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorElement";
        this.selector = "";
        this.multiple = true;
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
        return false;
    }

    willReturnElements() {
        return true;
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        let result =[];
        for (const e of t)
            result.push(e);
        return result;
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