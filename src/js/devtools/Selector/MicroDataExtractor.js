import * as r from "./BaseExtractor.js"//    const r = i(97);
class MicroDataExtractor extends r.BaseExtractor {
    extractData(e, t, i) {
    }

    async findRawData(e) {
        const t = [], i = await e.getElements("[itemscope][itemtype]:not([itemprop])");
        for (const e of i) {
            const i = await this.extractItemScopeData(e);
            const n = this.getDataObjectSelectorsFromDataObjects([i]);
            t.push({
                dataObjectSelectors: n,
                data: [i]
            });
        }
        return t;
    }

    async extractItemScopeData(e) {
        const t = {};
        const i = (await e.getAttr("itemtype")).replace("http://schema.org/", "");
        t["@type"] = i;
        const n = await this.getDirectChildElements(e, "> [itemprop]:not([itemscope]), > * [itemprop]:not([itemscope])", "> [itemscope] [itemprop]:not([itemscope]), > * [itemscope] [itemprop]:not([itemscope])");
        for (const e of n) {
            const i = await e.getAttr("itemprop");
            const n = await this.getElementData(e, i);
            if(void 0 === t[i] )
                t[i] = n;
            else
            {
                if(!Array.isArray(t[i]))
                    t[i] = [t[i]];
                t[i].push(n);
            }
        }
        const r = await this.getDirectChildElements(e, "> [itemscope], > * [itemscope]", "> [itemscope] [itemscope], > * [itemscope] [itemscope]");
        for (const e of r) {
            const i = await this.extractItemScopeData(e);
            const n = await e.getAttr("itemprop");
            if(void 0 === t[n] )
                t[n] = i ;
            else
            {
                if(!Array.isArray(t[n]) )
                    t[n] = [t[n]];
                t[n].push(i);
            }
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
        const n = await e.getElements(t);
        const r = await e.getElements(i);
        const result = [];
        for (const e of n) {
            let t = !1;
            for (const i of r)
                if (e.element === i.element)
                {
                    t = !0;
                    break;
                }
            t || result.push(e);
        }
        return result;
    }
}


export {MicroDataExtractor}