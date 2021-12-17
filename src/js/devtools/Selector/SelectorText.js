// const a = i(10), o = i(29);
import * as a from "./Selector.js"//a = i(10),
import * as o from "../emptyRecordValue.js"//o = i(29);
class SelectorText extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorText";
        this.selector = "";
        this.multiple = false;
        this.delay = 0;
        this.regex = "";
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
        if(false === this.multiple && 0 === elements.length )
            return  this.getEmptyRecord();
        let result =[];
        for (const element of elements) {
            let text = await element.getText();
            if (undefined !== this.regex && this.regex && this.regex.length) {
                const matchedText = text.match(new RegExp(this.regex));
                text = null !== matchedText ? matchedText[0] : o.emptyRecordValue;
            }
            const oneItem = {
                [this.id]: text
            };
            result.push(oneItem) ;
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