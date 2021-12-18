import * as r from "./Url.js"//   const r = i(19);
class LinkFromAttributesExtractor {
    constructor() {
        this.matcher = new RegExp(/^(https?:\/\/|\/)/);
        this.ignoredElements = ["address", "area", "audio",
            "base", "blockquote", "embed", "form", "img",
            "input", "link", "object", "script",
            "source", "style", "svg",
            "use", "track", "video"];
        this.ignoredAttributes = ["alt", "cite", "class", "formaction",
            "id", "placeholder", "src", "srcset"];
    }

    async execute(e) {
            const tagName = await e.getTagName();
            if (this.ignoredElements.includes(tagName))
                return;
            const attributes = await e.getAllAttributes();
            for (const attribute in attributes) {
                if (this.ignoredAttributes.includes(attribute))
                    continue;
                const t = attributes[attribute];
                if (t.match(this.matcher))
                    return r.Url.escapeWhiteSpace(t);
            }
    }
}

export {LinkFromAttributesExtractor}