import * as a from "./Selector.js"//const a = i(10);
class SelectorImage extends a.Selector {
    constructor(e) {
        super();
        this.type = "SelectorImage";
        this.selector = "";
        this.multiple = false;
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
        if(false === this.multiple && 0 === elements.length )
            return  this.getEmptyRecord();
        let result =[];
        for (const element of elements) {
            let imageSrc = await element.getAttr("src");
            imageSrc || (imageSrc = await element.getAttr("srcset"));
            result.push( {
                [this.id + "-src"]: imageSrc
            });
        }
        return result;
    }

    getDataColumns() {
        return [this.id + "-src"];
    }

    getFeatures() {
        return ["selector", "multiple", "delay"];
    }

    getItemCSSSelector() {
        return "img";
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }
}

export {SelectorImage}