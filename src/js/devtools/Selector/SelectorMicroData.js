import * as o from "./Selector.js"//, o = i(10);
import * as a from "./SchemaOrgExtractor.js"//  const a = i(218)
class SelectorMicroData extends o.Selector {
    constructor(e) {
        super();
        this.type = "SelectorMicroData";
        this.multiple = false;
        this.microDataSelectorType = "schema.org";
        this.dataObjectSelectors = [];
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
        const t = new a.SchemaOrgExtractor;
        const i = this.schemaOrgType;
        const r = this.dataObjectSelectors;
        const datas = await t.extractData(e, r, i);
        if (false === this.multiple && 0 === datas.length)
            return this.getEmptyRecord();
        let result = [];
        for (const data of datas) {
            result.push(data);
            if (false === this.multiple)
                break;
        }
        return result;
    }

    getDataColumns() {
        return this.dataObjectSelectors.map(e => e.key);
    }

    getFeatures() {
        return ["dataPreviewButton", "multiple", "microDataSelectorType", "schemaOrgType", "dataObjectSelectors"];
    }
}


export {SelectorMicroData}