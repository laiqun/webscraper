import * as r from "../devtools/Selector/WebPageBase.js"//const r = i(216);
class WebPageElement extends r.WebPageBase {
    constructor(e) {
        super();
        this.element = e;
    }

    async getParentElement(e, t) {
        const i = t.pop();
        if ("_root" === i)
            return this;
        const selectorById = e.getSelectorById(i);
        if (selectorById.willReturnElements()) {
            return (await this.getParentElement(e, t)).getElement(selectorById.selector);
        }
        return this;
    }
}

export {WebPageElement}