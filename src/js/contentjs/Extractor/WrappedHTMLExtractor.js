import * as ExtractorBase from "./ExtractorBase.js"

class WrappedHTMLExtractor extends ExtractorBase.ExtractorBase {
    extract(e) {
        let t = this.elementReferences.getElementByReference(e).outerHTML;
        t = t || "";
        t = t.trim();
        return t;
    }
}


export {WrappedHTMLExtractor}