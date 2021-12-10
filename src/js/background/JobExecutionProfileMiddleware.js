import * as a from "./BaseMiddleware.js"//a = i(33),
import {default as r} from "../contentjs/log.js";//r = i(5),
    class JobExecutionProfileMiddleware extends a.BaseMiddleware {
        constructor(e, t) {
            super();
            this.webPage = e;
            this.sitemap = t;
        }
        async handle(e, t, i) {
                e.timeStarted = Date.now();
                const result = await i();
                e.timeFinished = (new Date).getTime();
                e.executed = true;
                const a = {
                    execution: e.timeFinished - e.timeStarted,
                    getData: t.getDataExtractionDuration(),
                    url: e.url,
                    parentSelector: e.parentSelector,
                    sitemapName: this.sitemap._id,
                    driver: this.webPage.getDriverType(),
                    logType: "JOB_STAT"
                };
                if(e.hasFailed() )
                    r.notice("Job failed", Object.assign(Object.assign({}, a), {
                        error: e.error_message
                    }));
                else if(e.isEmpty() && !e.isKnownEmpty() )
                    r.notice("Job is empty", a);
                else
                    r.info("Job OK", a);
                return result;
        }
    }

    export {JobExecutionProfileMiddleware}