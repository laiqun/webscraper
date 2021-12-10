import * as a from "./Selector.js"//    const a = i(10)
import * as o from "../emptyRecordValue.js"//, o = i(29);
class SelectorHTML extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorHTML";
        this.selector = "";
        this.multiple = false;
        this.regex = "";
        this.delay = 0;
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
        const t = await n(this.getDataElements(e));
        false === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        let result = [];
        for (const e of t) {
            let t = await e.getHTML();
            const i = {};
            if (undefined !== this.regex && this.regex && this.regex.length) {
                const e = t.match(new RegExp(this.regex));
                t = null !== e ? e[0] : o.emptyRecordValue;
            }
            i[this.id] = t;
            result.push(i);
        }
        return result;
    }

    getDataColumns() {
        return [this.id];
    }

    getFeatures() {
        return ["selector", "multiple", "regex", "delay"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}


export {SelectorHTML}