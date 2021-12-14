import * as i from "./ExtractorBase.js"

class AllAttributeExtractor extends i.ExtractorBase {
    extract(e) {
        const t = this.elementReferences.getElementByReference(e).attributes, n = {};
        for (const e of t)
            n[e.name] = e.value;
        return n;
    }
}
export {AllAttributeExtractor}