import * as browser from "process/browser"
import {default as a} from "../log/log.js";//a = i(5),
import * as r from "../common/Async.js"//r = i(22),
import {default as o} from "../contentjs/Msg.js"//o = i(17),
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

    async run(e) {
        for (; ;) {
            const t = await this.storage.getJob();
            if (!t) return this.finishScraping();
            const i = Date.now();
            try {
                await this.executeJob(e, t);
            } catch (e) {
                this.logUnexpectedMiddlewareExecutionErrors(e);
                return  void (await this.finishScraping());
            }
            await this.sleepRequestInterval(i);
        }
    }

    async executeJob(e, t) {
        a.info("Job execution started", {
            url: t.url,
            parentSelector: t.parentSelector
        });
        await e.handle(t);
        if(t.hasFailed() )
            await this.syncStorageBecauseOfFailedJob(t);
        await this.handleChromeCrashErrors(t);
    }

    async syncStorageBecauseOfFailedJob(e) {
        if(!(this.storageSyncedBecauseOfFailedJobCount >= this.stopSyncingStorageAfterFailedCount))
        {
            a.info("Syncing storage because a job failed", {
                url: e.url
            });
            await this.storage.syncExecutedJobs();
            this.storageSyncedBecauseOfFailedJobCount++;
        }
    }

    async handleChromeCrashErrors(t) {
        if (!0 === t.hasFailed() && t.error_message && o.includesAnyOf(t.error_message, this.chromeCrashErrors)) {
            try {
                await this.browser.close();
            } catch (e) {
                a.notice("an error occurred while closing browser during on-error tear down", {
                    error: e.toString()
                });
            }
            a.warning("exiting scraper process because chrome driver failed");
            browser.exit();
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
            a.error("job handler received an error", {
                error: e.toString()
            });
    }
}

export {Scraper}