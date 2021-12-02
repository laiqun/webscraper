import * as ExtractorBase from "./ExtractorBase.js"

class AttributeExtractor extends ExtractorBase.ExtractorBase {
    extract(e, t, n) {
        const r = this.elementReferences.getElementByReference(e);
        n && r.classList.add("-sitemap-parent")
        return r.getAttribute(t);
    }
}

export {AttributeExtractor}