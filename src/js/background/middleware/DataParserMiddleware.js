let order = 0;
import {Job} from "../Job.js"//const r = i(500);
import {BaseMiddleware} from "./BaseMiddleware.js"//a = i(33),
import {default as o} from "../../log/log.js";//o = i(5),
import * as s from "../../devtools/Selector/Url.js"//s = i(19),
import * as l from "../../common/Obj.js"//, l = i(57)
import * as c from "../DataSizeLimitError.js"//,  c = i(499)
class DataParserMiddleware extends BaseMiddleware {
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

    async handle(job, jobRuntimeInfo, callback) {
        const tx = await callback();
        this.dataSize = 0;
        this.jobDataSizeLimitReached = !1;
        const extractData1 = this.extractData(tx, job.baseData, job.url);
        job.data = extractData1;
        const newJobs = this.extractNewJobs(tx, job.baseData, job);
        job.newJobs = newJobs;
        if (0 === job.newJobs.length && 0 === job.data.length) {
            job.markAsEmpty();
            o.notice("Empty page", {
                url: job.url
            });
        }
        if (this.jobDataSizeLimitReached)
            o.notice("Job data size limit exceeded", {
                error: "DATA_SIZE_LIMIT_EXCEEDED",
                url: job.url,
                size: this.dataSize / 1024 / 1024
            });
        return tx;
    }

    extractData(nextCallbackData, jobBaseData, jobURL) {
        const now_time = Math.round(Date.now() / 1000);
        const sitemap = this.sitemap;
        const result = [];
        for (const nextCallbackItem of nextCallbackData) {
            for (const e in jobBaseData)
                if(undefined === nextCallbackItem[e] )
                    nextCallbackItem[e] = jobBaseData[e];
            if(!this.recordCanHaveChildJobs(nextCallbackItem, sitemap) )
            {
                delete nextCallbackItem._follow;
                delete nextCallbackItem._followSelectorId;
                delete nextCallbackItem._deduplicateFirstPageData;
                nextCallbackItem["web-scraper-order"] = `${now_time}-${++order}`;
                this.checkDataSize(nextCallbackItem, jobURL);
                result.push(nextCallbackItem);
            }
        }
        return result;
    }

    extractNewJobs(nextCallbackData, jobBaseData, job) {
        const n = this.sitemap;
        const result = [];
        for (const c of nextCallbackData) {
            for (const e in jobBaseData)
                if(undefined === c[e])
                    c[e] = jobBaseData[e];
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
                const job = new Job({
                    url: e,
                    parentSelector: t,
                    parentJob: job,
                    baseData: c,
                    deduplicateFirstPageData: n
                });
                const protocol = new URL(job.url).protocol;
                if("http:" === protocol || "https:" === protocol )
                {
                    this.checkDataSize(c, job.url);
                    result.push(job);
                }
                else
                    o.notice("invalid New Job URL protocol", {
                        url: job.url,
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