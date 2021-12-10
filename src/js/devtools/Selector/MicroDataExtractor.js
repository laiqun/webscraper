import * as r from "./BaseExtractor.js"//    const r = i(97);
class MicroDataExtractor extends r.BaseExtractor {
    extractData(e, t, i) {
    }

    async findRawData(e) {
        const t = [], i = await e.getElements("[itemscope][itemtype]:not([itemprop])");
        for (const e of i) {
            const i = await this.extractItemScopeData(e), n = this.getDataObjectSelectorsFromDataObjects([i]);
            t.push({
                dataObjectSelectors: n,
                data: [i]
            });
        }
        return t;
    }

    async extractItemScopeData(e) {
        const t = {}, i = (await e.getAttr("itemtype")).replace("http://schema.org/", "");
        t["@type"] = i;
        const n = await this.getDirectChildElements(e, "> [itemprop]:not([itemscope]), > * [itemprop]:not([itemscope])", "> [itemscope] [itemprop]:not([itemscope]), > * [itemscope] [itemprop]:not([itemscope])");
        for (const e of n) {
            const i = await e.getAttr("itemprop"), n = await this.getElementData(e, i);
            undefined === t[i] ? t[i] = n : (Array.isArray(t[i]) || (t[i] = [t[i]]), t[i].push(n));
        }
        const r = await this.getDirectChildElements(e, "> [itemscope], > * [itemscope]", "> [itemscope] [itemscope], > * [itemscope] [itemscope]");
        for (const e of r) {
            const i = await this.extractItemScopeData(e), n = await e.getAttr("itemprop");
            undefined === t[n] ? t[n] = i : (Array.isArray(t[n]) || (t[n] = [t[n]]), t[n].push(i));
        }
        return t;
    }

    async getElementData(e, t) {
        const i = await e.getAttr("content"), n = await e.getTagName();
        if (i)
            return i.trim();
        if ("image" === t) {
            const t = await e.getNativeAttr("src");
            if (t)
                return t.trim();
            const i = await e.getNativeAttr("href");
            return i ? i.trim() : "";
        }
        if ("a" === n || "link" === n) {
            const t = await e.getNativeAttr("href");
            return t ? t.trim() : "";
        }
        return (await e.getText()).trim();
    }

    async getDirectChildElements(e, t, i) {
        const n = await e.getElements(t), r = await e.getElements(i), a = [];
        for (const e of n) {
            let t = false;
            for (const i of r)
                if (e.element === i.element)
                {
                    t = true;
                    break;
                }
            t || a.push(e);
        }
        return a;
    }
}


export {MicroDataExtractor}