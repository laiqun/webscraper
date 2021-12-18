import * as a from "./Selector.js"//    const a = i(10)
import * as o from "./emptyRecordValue.js"//, o = i(29);
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
        const elements = await this.getDataElements(e);
        if(false === this.multiple && 0 === elements.length)
            return  this.getEmptyRecord();
        let result = [];
        for (const element of elements) {
            let htmlContent = await element.getHTML();
            const oneItem = {};
            if (undefined !== this.regex && this.regex && this.regex.length) {
                const matchedHtmlContent = htmlContent.match(new RegExp(this.regex));
                if(null !== matchedHtmlContent)
                    htmlContent = matchedHtmlContent[0];
                else
                    htmlContent = o.emptyRecordValue;
            }
            oneItem[this.id] = htmlContent;
            result.push(oneItem);
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