import * as n from "url-parse"//const n = i(48),
import * as r from "./Url.js" //r = i(19);
class LinksFromTextExtractor {
    constructor() {
        this.pattern = new RegExp(/https?:\/\/[^\s]+/, "gi");
    }

    extract(e) {
        if (!e)
            return [];
        const t = e.match(this.pattern);
        if (!t)
            return [];
        const result = [];
        for (const e of t) {
            const t = n(e);
            if (t && t.protocol && t.hostname) {
                const t = r.Url.escapeWhiteSpace(e);
                result.push(t);
            }
        }
        return result;
    }
}

export {LinksFromTextExtractor}