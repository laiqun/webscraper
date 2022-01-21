import * as processBrowser from "process/browser"
import {default as a} from "../log/log.js";//a = i(5),
import * as r from "../common/Async.js"//r = i(22),
import {default as o} from "../common/Msg.js"//o = i(17),
import * as s from "./UnrecoverablError.js"//const   s = i(501);

class Scraper {
    constructor(e) {
        this.stopSyncingStorageAfterFailedCount = 5;
        this.chromeCrashErrors = ["no such session",
            "chrome not reachable",
            "session deleted because of page crash",
            "REMOTE_CHROME_CLIENT_RECEIVED_REQUEST_WHILE_WAITING_FOR_PREVIOUS",
            s.UnrecoverablError.prefix];
        this.silentMiddlewareExecutionErrors = ["Too many failed or empty jobs"];
        this.storageSyncedBecauseOfFailedJobCount = 0;
        this.sitemap = e.sitemap;
        this.storage = e.storage;
        this.browser = e.browser;
        this.requestInterval = e.requestInterval;
        this.stats = e.stats;
    }

    async run(chromeTabMiddleware) {
        for (; ;) {
            const job = await this.storage.getJob();
            if (!job)
                return this.finishScraping();
            const dateNow = Date.now();
            try {
                await this.executeJob(chromeTabMiddleware, job);
            } catch (e) {
                this.logUnexpectedMiddlewareExecutionErrors(e);
                return  void (await this.finishScraping());
            }
            await this.sleepRequestInterval(dateNow);
        }
    }

    async executeJob(chromeTabMiddleware, job) {
        a.info("Job execution started", {
            url: job.url,
            parentSelector: job.parentSelector
        });
        await chromeTabMiddleware.handle(job);
        if(job.hasFailed() )
            await this.syncStorageBecauseOfFailedJob(job);
        await this.handleChromeCrashErrors(job);
    }

    async syncStorageBecauseOfFailedJob(job) {
        if(!(this.storageSyncedBecauseOfFailedJobCount >= this.stopSyncingStorageAfterFailedCount))
        {
            a.info("Syncing storage because a job failed", {
                url: job.url
            });
            await this.storage.syncExecutedJobs();
            this.storageSyncedBecauseOfFailedJobCount++;
        }
    }

    async handleChromeCrashErrors(job) {
        if (!0 === job.hasFailed() && job.error_message && o.includesAnyOf(job.error_message, this.chromeCrashErrors)) {
            try {
                await this.browser.close();
            } catch (e) {
                a.notice("an error occurred while closing browser during on-error tear down", {
                    error: e.toString()
                });
            }
            a.warning("exiting scraper process because chrome driver failed");
            if(!(processBrowser.browser === true))
            {
                processBrowser.exit();//If in nodejs
            }

        }
    }

    async finishScraping() {
        await this.storage.syncExecutedJobs(), a.info("Scraper execution is finished"),
            await this.browser.close();
    }

    async sleepRequestInterval(e) {
        const t = Date.now(), i = e + this.requestInterval;
        if (t < i) {
            const e = i - t;
            a.debug("sleeping for request interval");
            await r.Async.sleep(e);
        }
    }

    logUnexpectedMiddlewareExecutionErrors(e) {
        if(!o.includesAnyOf(e, this.silentMiddlewareExecutionErrors) )
        {
            a.error("job handler received an error", {
                error: e.toString(),
                stack:e.stack
            });
        }

    }
}

export {Scraper}