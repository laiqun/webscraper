import * as processBrowser from "process/browser"
import {default as Log} from "../log/log.js";//a = i(5),
import {Async} from "../common/Async.js"//r = i(22),
import {default as Msg} from "../common/Msg.js"//o = i(17),
import {UnrecoverablError} from "./UnrecoverablError.js"//const   s = i(501);

class Scraper {
    constructor(e) {
        this.stopSyncingStorageAfterFailedCount = 5;
        this.chromeCrashErrors = ["no such session",
            "chrome not reachable",
            "session deleted because of page crash",
            "REMOTE_CHROME_CLIENT_RECEIVED_REQUEST_WHILE_WAITING_FOR_PREVIOUS",
            UnrecoverablError.prefix];
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
            } catch (exception) {
                this.logUnexpectedMiddlewareExecutionErrors(exception);
                return void (await this.finishScraping());
            }
            await this.sleepRequestInterval(dateNow);
        }
    }

    async executeJob(chromeTabMiddleware, job) {
        Log.info("Job execution started", {
            url: job.url,
            parentSelector: job.parentSelector
        });
        await chromeTabMiddleware.handle(job);
        if (job.hasFailed())
            await this.syncStorageBecauseOfFailedJob(job);
        await this.handleChromeCrashErrors(job);
    }

    async syncStorageBecauseOfFailedJob(job) {
        if (!(this.storageSyncedBecauseOfFailedJobCount >= this.stopSyncingStorageAfterFailedCount)) {
            Log.info("Syncing storage because a job failed", {
                url: job.url
            });
            await this.storage.syncExecutedJobs();
            this.storageSyncedBecauseOfFailedJobCount++;
        }
    }

    async handleChromeCrashErrors(job) {
        if (true === job.hasFailed() && job.error_message && Msg.includesAnyOf(job.error_message, this.chromeCrashErrors)) {
            try {
                await this.browser.close();
            } catch (exception) {
                Log.notice("an error occurred while closing browser during on-error tear down", {
                    error: exception.toString()
                });
            }
            Log.warning("exiting scraper process because chrome driver failed");
            if (!(processBrowser.browser === true))//If in nodejs
            {
                processBrowser.exit();
            }

        }
    }

    async finishScraping() {
        await this.storage.syncExecutedJobs();
        Log.info("Scraper execution is finished");
        await this.browser.close();
    }

    async sleepRequestInterval(startDate) {
        const currentDate = Date.now();
        const endDate = startDate + this.requestInterval;
        if (currentDate < endDate) {
            const duration = endDate - currentDate;
            Log.debug("sleeping for request interval");
            await Async.sleep(duration);
        }
    }

    logUnexpectedMiddlewareExecutionErrors(e) {
        if (!Msg.includesAnyOf(e, this.silentMiddlewareExecutionErrors)) {
            Log.error("job handler received an error", {
                error: e.toString(),
                stack: e.stack
            });
        }

    }
}

export {Scraper}