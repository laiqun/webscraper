import * as ExtractorBase from "./ExtractorBase.js"

class TextExtractor extends ExtractorBase.ExtractorBase {
    extract(e, t) { // t highlightDataElements
        const n = this.elementReferences.getElementByReference(e);
        t && n.classList.add("-sitemap-parent");
        const r = n.cloneNode(true);
        r.querySelectorAll("script, style, textarea, input, select").forEach(e => {
            e.remove();
        });
        r.querySelectorAll("br").forEach(e => {
            e.after("\n");
        });
        let i = r.textContent;
        return i = i || "", i = i.trim(), i;
    }
}

export {TextExtractor}