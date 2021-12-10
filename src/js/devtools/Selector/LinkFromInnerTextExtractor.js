import * as r from "./LinksFromTextExtractor.js"//const r = i(403);
class LinkFromInnerTextExtractor {
    async execute(e) {
        const t = await e.getText();
        if (!t) return;
        const i = (new r.LinksFromTextExtractor).extract(t);
        return i.length > 0 ? i[0] : void 0;
    }
}

export {LinkFromInnerTextExtractor}