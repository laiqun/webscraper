let order = 0;
import {Job} from "../Job.js"//const r = i(500);
import {BaseMiddleware} from "./BaseMiddleware.js"//a = i(33),
import {default as Log} from "../../log/log.js";//o = i(5),
import {Url} from "../../devtools/Selector/Url.js"//s = i(19),
import {Obj} from "../../common/Obj.js"//, l = i(57)
import {DataSizeLimitError} from "../DataSizeLimitError.js"//,  c = i(499)
class DataParserMiddleware extends BaseMiddleware {
    constructor(e) {
        super();
        this.jobDataSizeLimit = 26214400;
        this.recordSizeLimit = 15728640;
        this.jobDataSizeLimitReached = false;
        this.sitemap = e;
    }

    recordCanHaveChildJobs(e, t) {
        if (undefined === e._follow)
            return false;
        const followSelectorId = e._followSelectorId;
        return 0 !== t.getDirectChildSelectors(followSelectorId).length;
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
            Log.notice("Empty page", {
                url: job.url
            });
        }
        if (this.jobDataSizeLimitReached)
            Log.notice("Job data size limit exceeded", {
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

    extractNewJobs(nextCallbackData, jobBaseData, parentJob) {
        const sitemap = this.sitemap;
        const result = [];
        for (const nextCallbackDatum of nextCallbackData) {
            for (const e in jobBaseData)
                if(undefined === nextCallbackDatum[e])
                    nextCallbackDatum[e] = jobBaseData[e];
            if (this.recordCanHaveChildJobs(nextCallbackDatum, sitemap)) {
                const follow = nextCallbackDatum._follow;
                const followSelectorId = nextCallbackDatum._followSelectorId;
                const deduplicateFirstPageData = nextCallbackDatum._deduplicateFirstPageData;
                delete nextCallbackDatum._follow;
                delete nextCallbackDatum._followSelectorId;
                delete nextCallbackDatum._deduplicateFirstPageData;
                if (!follow)
                    continue;
                if (!Url.isValidUrlOrUrlPart(follow))
                    continue;
                const job = new Job({
                    url: follow,
                    parentSelector: followSelectorId,
                    parentJob: parentJob,
                    baseData: nextCallbackDatum,
                    deduplicateFirstPageData: deduplicateFirstPageData
                });
                const protocol = new URL(job.url).protocol;
                if("http:" === protocol || "https:" === protocol )
                {
                    this.checkDataSize(nextCallbackDatum, parentJob.url);
                    result.push(job);
                }
                else
                    Log.notice("invalid New Job URL protocol", {
                        url: job.url,
                        hideInEsLogs: !0
                    });
            }
        }
        return result;
    }

    checkDataSize(e, t) {
        const size = Obj.getSize(e);
        if (size > this.recordSizeLimit)
            throw new DataSizeLimitError("Record data size limit reached", size / 1024 / 1024);
        this.dataSize += size;
        if(this.dataSize > this.jobDataSizeLimit && !this.jobDataSizeLimitReached )
        {
            Log.notice("Job data size limit reached", {
                error: "DATA_SIZE_LIMIT_REACHED",
                url: t,
                size: this.dataSize / 1024 / 1024
            });
            this.jobDataSizeLimitReached = !0;
        }
    }
}

export {DataParserMiddleware}