import * as pouchDB from "pouchdb-browser"//r = i(565),
import {default as o} from "../contentjs/log.js";//o = i(5),
import * as a from "../devtools/Sitemap.js"//a = i(119),
import * as s from "./StoreScrapeResultWriter.js"//const   s = i(572);
let PouchDB;
PouchDB = undefined !== pouchDB.default ? pouchDB.default : pouchDB;

class PouchDbStorage {
    constructor(config, puchDBConnectionConfig = {}) {
        this.pouchDBConnectionConfig = {};
        this.config = config;
        this.pouchDBConnectionConfig = puchDBConnectionConfig;
    }

    async init() {
        this.sitemapDb = new PouchDB(await this.config.get("sitemapDb"), this.pouchDBConnectionConfig);
        this.dataDbName = await this.config.get("dataDb");
    }

    sanitizeSitemapDataDbName(e) {
        return "sitemap-data-" + e.replace(/[^a-z0-9_\$\(\)\+\-/]/gi, "_");
    }

    getSitemapDataDbLocation(e) {
        const t = this.sanitizeSitemapDataDbName(e);
        return this.dataDbName + t;
    }

    getSitemapDataDb(e) {
        const t = this.getSitemapDataDbLocation(e);
        return new PouchDB(t, this.pouchDBConnectionConfig);
    }

    async initSitemapDataDb(e, t = !0) {
        if (t) {
            const t = this.getSitemapDataDb(e);
            await t.destroy();
        }
        const i = this.getSitemapDataDb(e);
        return new s.StoreScrapeResultWriter(i);
    }

    async createSitemap(sitemap) {
        const t = JSON.parse(JSON.stringify(sitemap));
        sitemap._id || o.info("cannot save sitemap without an id", {
            sitemap: JSON.stringify(sitemap)
        });
        const i = await this.sitemapDb.put(t);
        sitemap._rev = i.rev;
        return  sitemap;
    }

    async deleteSitemap(sitemap) {
        const t = await this.getSitemap(sitemap), i = {
            _id: t._id,
            _rev: t._rev
        };
        await this.sitemapDb.remove(i);
        const n = this.getSitemapDataDb(t._id);
        await n.destroy();
    }

    async getSitemap(e) {
        return await this.sitemapDb.get(e);
    }

    async updateSitemap(e) {
        const t = await this.getSitemap(e._id);
        e._rev = t._rev;
        return  this.sitemapDb.put(e);
    }

    async getAllSitemaps() {
        const e = await this.sitemapDb.allDocs({
            include_docs: !0
        });
        const sitemaps = [];
        for (const rowsKey in e.rows) {
            const n = e.rows[rowsKey].doc;
            const r = new a.Sitemap(n);
            sitemaps.push(r);
        }
        return sitemaps;
    }

    async getAllSitemapMetadata() {
        const e = await this.sitemapDb.allDocs({
            include_docs: !0
        });
        const allSitemapMetadata = [];
        for (const i in e.rows) {
            const n = e.rows[i].doc;
            const sitemap = new a.Sitemap(n);
            const o = {
                domain: sitemap.getFirstStartUrlDomain(),
                hashHistory: sitemap.hashHistory,
                name: sitemap._id,
                localStorage: !0
            };
            allSitemapMetadata.push(o);
        }
        return allSitemapMetadata;
    }

    async getSitemapData(e) {
        const t = this.getSitemapDataDb(e);
        const i = await t.allDocs({
            include_docs: !0
        });
        const result = [];
        for (const e in i.rows) {
            const t = i.rows[e].doc;
            result.push(t);
        }
        return result;
    }

    async getSitemapDataRange(e, t, i) {
        const n = this.getSitemapDataDb(e);
        let r;
        r = t ? await n.allDocs({
            include_docs: !0,
            startkey: t,
            skip: 1,
            limit: i
        }) : await n.allDocs({
            include_docs: !0,
            limit: i
        });
        const rows = [];
        let lastKey = "";
        for (const e of r.rows)
        {
            rows.push(e.doc);
            lastKey = e.key;
        }
        return {
            totalRows: r.total_rows,
            rows: rows,
            lastKey: lastKey
        };
    }

    async sitemapExists(targetId) {
        const sitemaps = await this.getAllSitemaps();
        for (const sitemap of sitemaps)
            if (sitemap._id === targetId)
                return true;
        return false;
    }

    async getSitemapCount() {
        return (await this.getAllSitemaps()).length;
    }

    async getRecordCount() {
        let number = 0;
        const sitemaps = await this.getAllSitemaps();
        for (const sitemap of sitemaps) {
            const id = sitemap._id;
            const n = this.getSitemapDataDb(id);
            number += (await n.info()).doc_count;
        }
        return number;
    }
}

export {PouchDbStorage}