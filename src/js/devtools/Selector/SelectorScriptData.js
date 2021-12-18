import * as a from "./Selector.js"//    const a = i(10)
import * as o from "./emptyRecordValue.js"//, o = i(29);
class SelectorScriptData extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorScriptData";
        this.script = "";
        this.scriptDataColumns = [{
            name: "",
            is_url: false
        }];
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
    }

    canHaveChildSelectors() {
        return this.canCreateNewJobs();
    }

    canCreateNewJobs() {
        for (const e of this.scriptDataColumns) 
            if (e.is_url) 
                return true;
        return false;
    }

    willReturnElements() {
        return false;
    }

    parseData(e) {
        const t = this.getUrlColumn(), i = this.getDataColumns();
        return e.map(e => {
            const n = {};
            for (const t of i) n[t] = e[t] || o.emptyRecordValue;
            return t && void 0 !== e[t] && null !== e[t] && (n._follow = e[t], n._followSelectorId = this.id),
                n;
        });
    }

    async _getData(e) {
        let dataWithScript = await e.getDataWithScript(this.script);
        dataWithScript = this.parseData(dataWithScript);
        if(false === this.multiple && 0 === dataWithScript.length )
            return this.getEmptyRecord();
        let result = [];
        for (const oneData of dataWithScript)
        {
            result.push(oneData);
            if ( false === this.multiple)
                break;
        }
        return result;
    }

    getDataColumns() {
        return this.scriptDataColumns.map(e => e.name);
    }

    getFeatures() {
        return ["multiple", "script", "dataColumns", "dataPreviewButton", "scriptDataColumns"];
    }

    getUrlColumn() {
        for (const e of this.scriptDataColumns)
            if (e.is_url)
                return e.name;
    }
}

export {SelectorScriptData}