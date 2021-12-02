//const r = n(35), i = n(3);
import * as r from "../Extractor/ExtractorBase.js"
import * as i from "../log.js"

class TypeAction extends r.ExtractorBase { //输入的以上
    extract(refIndex, value) {
        const element = this.elementReferences.getElementByReference(refIndex);
        if (element) {
            element.dispatchEvent(new Event("focus", {
                bubbles: true
            }));
            element.value = value;
            element.dispatchEvent(new Event("blur", {
                bubbles: true
            }));
            element.dispatchEvent(new Event("change", {
                bubbles: true
            }));
            element.dispatchEvent(new Event("input", {
                bubbles: true
            }))
        } else
            i.default.warning("couldn't find element for typing");
    }
}


export {TypeAction}