// const a = i(10), o = i(29);
import * as a from "./Selector.js"//a = i(10),
import * as o from "../emptyRecordValue.js"//o = i(29);
class SelectorText extends a.Selector {
    constructor(e) {
        super(), this.type = "SelectorText", this.selector = "", this.multiple = !1, this.delay = 0,
            this.regex = "", this.updateData(e);
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
        const t = await this.getDataElements(e);
        if(false === this.multiple && 0 === t.length )
            return  this.getEmptyRecord();
        let result =[];
        for (const e of t) {
            let t = await e.getText();
            if (void 0 !== this.regex && this.regex && this.regex.length) {
                const e = t.match(new RegExp(this.regex));
                t = null !== e ? e[0] : o.emptyRecordValue;
            }
            const i = {
                [this.id]: t
            };
            result.push(i) ;
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


export {SelectorText}