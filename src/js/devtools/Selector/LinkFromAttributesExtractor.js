import * as r from "./Url.js"//   const r = i(19);
class LinkFromAttributesExtractor {
    constructor() {
        this.matcher = new RegExp(/^(https?:\/\/|\/)/), this.ignoredElements = ["address", "area", "audio", "base", "blockquote", "embed", "form", "img", "input", "link", "object", "script", "source", "style", "svg", "use", "track", "video"],
            this.ignoredAttributes = ["alt", "cite", "class", "formaction", "id", "placeholder", "src", "srcset"];
    }

    async execute(e) {
            const t = await e.getTagName();
            if (this.ignoredElements.includes(t)) return;
            const i = await e.getAllAttributes();
            for (const e in i) {
                if (this.ignoredAttributes.includes(e)) continue;
                const t = i[e];
                if (t.match(this.matcher)) return r.Url.escapeWhiteSpace(t);
            }
    }
}

export {LinkFromAttributesExtractor}