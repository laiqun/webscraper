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
        const t = await this.getDataElements(e);
        false === this.multiple && 0 === t.length && (await await this.getEmptyRecord());
        let result =[];
        for (const e of t) {
            let t = await e.getAttr("src");
            t || (t = await e.getAttr("srcset")),
                result.push( {
                    [this.id + "-src"]: t
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