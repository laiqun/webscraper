import {BaseMiddleware} from "./BaseMiddleware.js"//a = i(33),
import {default as Log} from "../../log/log.js";//r = i(5),
    class JobExecutionProfileMiddleware extends BaseMiddleware {
        constructor(webPage, sitemap) {
            super();
            this.webPage = webPage;
            this.sitemap = sitemap;
        }
        async handle(job, jobRuntimeInfo, callback) {
                job.timeStarted = Date.now();
                const result = await callback();
                job.timeFinished = (new Date).getTime();
                job.executed = true;
                const jobInfo = {
                    execution: job.timeFinished - job.timeStarted,
                    getData: jobRuntimeInfo.getDataExtractionDuration(),
                    url: job.url,
                    parentSelector: job.parentSelector,
                    sitemapName: this.sitemap._id,
                    driver: this.webPage.getDriverType(),
                    logType: "JOB_STAT"
                };
                if(job.hasFailed() )
                    Log.notice("Job failed", Object.assign(Object.assign({}, jobInfo), {
                        error: job.error_message
                    }));
                else if(job.isEmpty() && !job.isKnownEmpty() )
                    Log.notice("Job is empty", jobInfo);
                else
                    Log.info("Job OK", jobInfo);
                return result;
        }
    }

    export {JobExecutionProfileMiddleware}