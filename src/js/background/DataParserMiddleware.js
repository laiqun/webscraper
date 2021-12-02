let u = 0;
import * as r from "./Job.js"//const r = i(500);
import * as a from "./BaseMiddleware.js"//a = i(33),
import {default as o} from "../contentjs/log.js";//o = i(5),
import * as s from "../devtools/Selector/Url.js"//s = i(19),
import * as l from "../devtools/Obj.js"//, l = i(57)
import * as c from "./DataSizeLimitError.js"//,  c = i(499)
class DataParserMiddleware extends a.BaseMiddleware {
    constructor(e) {
        super();
        this.jobDataSizeLimit = 26214400;
        this.recordSizeLimit = 15728640;
        this.jobDataSizeLimitReached = false;
        this.sitemap = e;
    }

    recordCanHaveChildJobs(e, t) {
        if (void 0 === e._follow)
            return !1;
        const i = e._followSelectorId;
        return 0 !== t.getDirectChildSelectors(i).length;
    }

    async handle(e, t, i) {
        const tx = await i();
        this.dataSize = 0;
        this.jobDataSizeLimitReached = !1;
        const extractData1 = this.extractData(tx, e.baseData, e.url);
        e.data = extractData1;
        const newJobs = this.extractNewJobs(tx, e.baseData, e);
        e.newJobs = newJobs;
        if (0 === e.newJobs.length && 0 === e.data.length) {
            e.markAsEmpty();
            o.notice("Empty page", {
                url: e.url
            });
        }
        if (this.jobDataSizeLimitReached)
            o.notice("Job data size limit exceeded", {
                error: "DATA_SIZE_LIMIT_EXCEEDED",
                url: e.url,
                size: this.dataSize / 1024 / 1024
            });
        return tx;
    }

    extractData(e, t, i) {
        const now_time = Math.round(Date.now() / 1000);
        const sitemap = this.sitemap;
        const result = [];
        for (const o of e) {
            for (const e in t)
                if(undefined === o[e] )
                    o[e] = t[e];
            if(!this.recordCanHaveChildJobs(o, sitemap) )
            {
                delete o._follow;
                delete o._followSelectorId;
                delete o._deduplicateFirstPageData;
                o["web-scraper-order"] = `${now_time}-${++u}`;
                this.checkDataSize(o, i);
                result.push(o);
            }
        }
        return result;
    }

    extractNewJobs(e, t, i) {
        const n = this.sitemap;
        const result = [];
        for (const c of e) {
            for (const e in t)
                if(undefined === c[e])
                    c[e] = t[e];
            if (this.recordCanHaveChildJobs(c, n)) {
                const e = c._follow;
                const t = c._followSelectorId;
                const n = c._deduplicateFirstPageData;
                delete c._follow;
                delete c._followSelectorId;
                delete c._deduplicateFirstPageData;
                if (!e)
                    continue;
                if (!s.Url.isValidUrlOrUrlPart(e))
                    continue;
                const l = new r.Job({
                    url: e,
                    parentSelector: t,
                    parentJob: i,
                    baseData: c,
                    deduplicateFirstPageData: n
                });
                const protocol = new URL(l.url).protocol;
                if("http:" === protocol || "https:" === protocol )
                {
                    this.checkDataSize(c, i.url);
                    result.push(l);
                }
                else
                    o.notice("invalid New Job URL protocol", {
                        url: l.url,
                        hideInEsLogs: !0
                    });
            }
        }
        return result;
    }

    checkDataSize(e, t) {
        const i = l.Obj.getSize(e);
        if (i > this.recordSizeLimit)
            throw new c.DataSizeLimitError("Record data size limit reached", i / 1024 / 1024);
        this.dataSize += i;
        if(this.dataSize > this.jobDataSizeLimit && !this.jobDataSizeLimitReached )
        {
            o.notice("Job data size limit reached", {
                error: "DATA_SIZE_LIMIT_REACHED",
                url: t,
                size: this.dataSize / 1024 / 1024
            });
            this.jobDataSizeLimitReached = !0;
        }
    }
}

export {DataParserMiddleware}