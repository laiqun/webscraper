import * as ExtractorBase from "./ExtractorBase.js"

class InnerHTMLExtractor extends ExtractorBase.ExtractorBase {
    extract(e) {
        let t = this.elementReferences.getElementByReference(e).innerHTML;
        t = t || "";
        t = t.trim();
        return  t;
    }
}

export {InnerHTMLExtractor}
