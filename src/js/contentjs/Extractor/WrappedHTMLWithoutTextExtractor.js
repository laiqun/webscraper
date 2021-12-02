import * as ExtractorBase from "./ExtractorBase.js"

class WrappedHTMLWithoutTextExtractor extends ExtractorBase.ExtractorBase {
    constructor(e) {
        super(e);
        this.removeTextNodes = this.removeTextNodes.bind(this);
    }

    removeTextNodes(e) {
        3 === e.nodeType && e.remove();
        const t = e.childNodes;
        for (let e = t.length - 1; e >= 0; e--)
            this.removeTextNodes(t.item(e));
    }

    extract(e) {
        const t = this.elementReferences.getElementByReference(e).cloneNode(!0);
        this.removeTextNodes(t);
        let result = t.outerHTML;
        result = result || "";
        result = result.trim();
        return result;
    }


}

export {WrappedHTMLWithoutTextExtractor}