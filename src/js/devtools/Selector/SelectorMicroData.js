import * as o from "./Selector.js"//, o = i(10);
import * as a from "./SchemaOrgExtractor.js"//  const a = i(218)
class SelectorMicroData extends o.Selector {
    constructor(e) {
        super(), this.type = "SelectorMicroData", this.multiple = !1, this.microDataSelectorType = "schema.org",
            this.dataObjectSelectors = [], this.updateData(e);
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
            const t = new a.SchemaOrgExtractor, i = this.schemaOrgType, r = this.dataObjectSelectors,
                datas = await t.extractData(e, r, i);
            !1 === this.multiple && 0 === datas.length && ( await this.getEmptyRecord());
            for (const data of datas)
            {
                await data;
                if ( !1 === this.multiple)
                    return  void 0;
            }
    }

    getDataColumns() {
        return this.dataObjectSelectors.map(e => e.key);
    }

    getFeatures() {
        return ["dataPreviewButton", "multiple", "microDataSelectorType", "schemaOrgType", "dataObjectSelectors"];
    }
}


export {SelectorMicroData}