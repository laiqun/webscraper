import * as l from "./Selector.js"//, l = i(10)
import {default as s} from "../../contentjs/log.js"//, s = i(5)
import * as o from "../Str.js"//const o = i(75);
class SelectorSitemapXmlLink extends l.Selector {
    constructor(e) {
        super(), this.type = "SelectorSitemapXmlLink", this.sitemapXmlMinimumPriority = .1,
            this.sitemapXmlUrlRegex = "", this.sitemapXmlUrls = [""], this.updateData(e);
    }

    get urlRegexp() {
        try {
            return new RegExp(this.sitemapXmlUrlRegex);
        } catch (e) {
            return new RegExp("");
        }
    }

    canReturnMultipleRecords() {
        return !0;
    }

    canHaveChildSelectors() {
        return !0;
    }

    canCreateNewJobs() {
        return !0;
    }

    willReturnElements() {
        return !1;
    }

    willReturnMultipleRecords() {
        return !0;
    }

    async getSitemapXmlUrls(e) {
        return this.sitemapXmlUrls;
    }

    extractDataFromSitemapXmlContents(e) {
        const t = /<url>([\s\S]+?)<\/url>/g, i = /<loc>[\s\n]*(.+?)[\s\n]*<\/loc>/, n = /<priority>(.+?)<\/priority>/,
            r = [], a = this.urlRegexp;
        for (; ;) {
            const s = t.exec(e);
            if (!s) break;
            const l = s[1], c = l.match(i);
            if (!c) continue;
            const u = o.Str.removeCDATA(c[1]);
            if (!u.match(a)) continue;
            const d = l.match(n);
            if (d) {
                if (Number(o.Str.removeCDATA(d[1])) < this.sitemapXmlMinimumPriority) continue;
            }
            const p = {
                _followSelectorId: this.id,
                _follow: u
            };
            p[this.id + "-href"] = u, r.push(p);
        }
        return r;
    }

    extractSitemapXmlUrlsFromSitemapXmlContents(e) {
        const t = /<sitemap>([\s\S]+?)<\/sitemap>/g, i = /<loc>[\s\n]*(.+?)[\s\n]*<\/loc>/, n = [];
        for (; ;) {
            const r = t.exec(e);
            if (!r) break;
            const a = r[1].match(i);
            if (!a) continue;
            const s = o.Str.removeCDATA(a[1]);
            n.push(s);
        }
        return n;
    }

    async extractUrlsFromSitemapXml(e, t, i) {
        if (i.includes(t)) return [];
        i.push(t), s.info("Downloading stemap.xml", {
            url: t
        });
        let n = [];
        try {
            const r = await e.downloadUrl(t);
            n = this.extractDataFromSitemapXmlContents(r);
            const a = this.extractSitemapXmlUrlsFromSitemapXmlContents(r);
            for (const t of a) {
                const r = await this.extractUrlsFromSitemapXml(e, t, i);
                n = n.concat(r);
            }
        } catch (e) {
            s.notice("failed to download sitemap.xml", {
                error: e.toString(),
                url: t
            });
        }
        return n;
    }

    async _getData(e) {
        const t = await this.getSitemapXmlUrls(e), i = [];
        for (const n of t) {
            const t = await this.extractUrlsFromSitemapXml(e, n, i);
            for (const e of t) await await r(e);
        }
    }

    getDataColumns() {
        return [this.id + "-href"];
    }

    getFeatures() {
        return ["dataPreviewButton", "sitemapXmlMinimumPriority", "sitemapXmlUrlRegex", "sitemapXmlUrls"];
    }

    isLinkSelector() {
        return !0;
    }
}

export {SelectorSitemapXmlLink}