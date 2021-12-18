import * as a from "./BaseMiddleware.js"//a = i(33),
import {default as r} from "../../log/log.js";//r = i(5),
    class JobExecutionProfileMiddleware extends a.BaseMiddleware {
        constructor(webPage, sitemap) {
            super();
            this.webPage = webPage;
            this.sitemap = sitemap;
        }
        async handle(job, jobRuntimeInfo, callback) {
                job.timeStarted = Date.now();
                const result = await callback();
                job.timeFinished = (new Date).getTime();
                job.executed = !0;
                const a = {
                    execution: job.timeFinished - job.timeStarted,
                    getData: jobRuntimeInfo.getDataExtractionDuration(),
                    url: job.url,
                    parentSelector: job.parentSelector,
                    sitemapName: this.sitemap._id,
                    driver: this.webPage.getDriverType(),
                    logType: "JOB_STAT"
                };
                if(job.hasFailed() )
                    r.notice("Job failed", Object.assign(Object.assign({}, a), {
                        error: job.error_message
                    }));
                else if(job.isEmpty() && !job.isKnownEmpty() )
                    r.notice("Job is empty", a);
                else
                    r.info("Job OK", a);
                return result;
        }
    }

    export {JobExecutionProfileMiddleware}