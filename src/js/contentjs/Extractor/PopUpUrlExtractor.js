import * as ExtractorBase from "./ExtractorBase.js"
class PopUpUrlExtractor extends ExtractorBase.ExtractorBase {
    constructor(e, t) {
        super(e);
        this.scriptRunner = t;
    }

    async extract(e) {
            let t = await this.elementReferences.getCSSSelector(e);
            t = t.replace(/"/g, '\\"');
            const n = `return (${this.extractPopUpLinkFunction.toString()})("${t}");`;
            return this.scriptRunner.extract(e, n);
    }

    get extractPopUpLinkFunction() {
        return e => {
            const t = document.querySelectorAll(e);
            if (0 === t.length) return Promise.resolve(null);
            const n = t[0], r = new Promise((e, t) => {
                const n = window.open;
                window.open = (...t) => {
                    const r = t[0];
                    window.open = n;
                    e(r);
                };
                setTimeout(() => {
                    e(null);
                }, 5e3);
            });
            n.click();
            return  r;
        };
    }
}

export { PopUpUrlExtractor }