import * as pouchDB from "pouchdb-browser"//r = i(565),
import {default as o} from "../../log/log.js";//o = i(5),
import * as a from "../../common/Sitemap.js"//a = i(119),
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
        //这里是所有的sitemap的定义的地方
        this.sitemapDb = new PouchDB(await this.config.get("sitemapDb"), this.pouchDBConnectionConfig);
        this.dataDbName = await this.config.get("dataDb");
    }

    sanitizeSitemapDataDbName(e) {//sanitize  净化  为了支持中文，这里不做也应该没事的
        return "sitemap-data-" + e;// e.replace(/[^a-z0-9_\$\(\)\+\-/]/gi, "_");//输入"你好" 输出"__"
    }

    getSitemapDataDbLocation(originalDBName) {
        const dbName = this.sanitizeSitemapDataDbName(originalDBName);
        return this.dataDbName + dbName;
    }

    getSitemapDataDb(originalDBName) {
        const databaseName = this.getSitemapDataDbLocation(originalDBName);
        //这里是为一个sitemap创建database；   this.sitemapDb是放所有sitemap的地方，每个sitemap有一个sitemapDataDb
        return new PouchDB(databaseName, this.pouchDBConnectionConfig);
    }

    async initSitemapDataDb(databaseName, destroyOldDB = true) {//如果设置为false，会出现多次抓取的时候，有重复，应该有一种去重的检测;destroyOldDB可以用来断点续传
        if (destroyOldDB) {
            const dataDb = this.getSitemapDataDb(databaseName);
            await dataDb.destroy();
        }
        const sitemapDataDb = this.getSitemapDataDb(databaseName);
        return new s.StoreScrapeResultWriter(sitemapDataDb);
    }
    async deleteSitemapDataDb(sitemap_id,destroyOldDB)
    {
        if (destroyOldDB) {
            const dataDb = this.getSitemapDataDb(sitemap_id);
            await dataDb.destroy();
        }
        const sitemapDataDb = this.getSitemapDataDb(sitemap_id);
        return null;
    }
    async createSitemap(sitemap) {
        const doc = JSON.parse(JSON.stringify(sitemap));
        sitemap._id || o.info("cannot save sitemap without an id", {
            sitemap: JSON.stringify(sitemap)
        });
        const result = await this.sitemapDb.put(doc);
        sitemap._rev = result.rev;
        return  sitemap;
    }

    async deleteSitemap(sitemap_id) {
        const doc = await this.getSitemap(sitemap_id);
        const doc_ID = {
            _id: doc._id,
            _rev: doc._rev
        };
        await this.sitemapDb.remove(doc_ID);//销毁sitemap这个doc，然后删除对应的Data db
        const dataDb = this.getSitemapDataDb(doc._id);
        await dataDb.destroy();
    }

    async getSitemap(doc_id) {
        return await this.sitemapDb.get(doc_id);
    }

    async updateSitemap(newDoc) {
        const oldDoc = await this.getSitemap(newDoc._id);
        newDoc._rev = oldDoc._rev;
        return  this.sitemapDb.put(newDoc);
    }

    async getAllSitemaps() {
        const allDocs = await this.sitemapDb.allDocs({
            include_docs: true
        });
        const sitemaps = [];
        for (const rowsKey in allDocs.rows) {
            const doc = allDocs.rows[rowsKey].doc;
            const sitemap = new a.Sitemap(doc);
            sitemaps.push(sitemap);
        }
        return sitemaps;
    }

    async getAllSitemapMetadata() {
        const allDocs = await this.sitemapDb.allDocs({
            include_docs: true
        });
        const allSitemapMetadata = [];
        for (const rowsKey in allDocs.rows) {
            const doc = allDocs.rows[rowsKey].doc;
            const sitemap = new a.Sitemap(doc);
            const sitemapMetaData = {
                domain: sitemap.getFirstStartUrlDomain(),
                hashHistory: sitemap.hashHistory,
                name: sitemap._id,
                localStorage: true
            };
            allSitemapMetadata.push(sitemapMetaData);
        }
        return allSitemapMetadata;
    }

    async getSitemapData(dataDBName) {
        const dataDb = this.getSitemapDataDb(dataDBName);
        const allDocs = await dataDb.allDocs({
            include_docs: true
        });
        const result = [];
        for (const rowsKey in allDocs.rows) {
            const doc = allDocs.rows[rowsKey].doc;
            result.push(doc);
        }
        return result;
    }

    async getSitemapDataRange(dataDBName, start, size) {
        const dataDb = this.getSitemapDataDb(dataDBName);
        let allDocs;
        allDocs = start ? await dataDb.allDocs({
            include_docs: true,
            startkey: start,
            skip: 1,
            limit: size
        }) : await dataDb.allDocs({
            include_docs: true,
            limit: size
        });
        const rows = [];
        let lastKey = "";
        for (const row of allDocs.rows)
        {
            rows.push(row.doc);
            lastKey = row.key;
        }
        return {
            totalRows: allDocs.total_rows,
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
            const dataDb = this.getSitemapDataDb(id);
            number += (await dataDb.info()).doc_count;
        }
        return number;
    }
}

export {PouchDbStorage}