import * as r from "./Url.js"//const r = i(19);
class LinkFromHrefExtractor {
    async execute(e) {
        const t = await e.getNativeAttr("href");
        if (r.Url.isRecognizedProtocol(t)) return t.match(/^https?:\/\//) ? t : r.Url.combine(await e.getPageUrl(), t);
    }
}


export {LinkFromHrefExtractor}