import * as r from "./BaseMiddleware.js"//r = i(33)
class StatsMiddleware extends r.BaseMiddleware {
    constructor(stats) {
        super();
        this.stats = stats;
    }

    async handle(job, jobRuntimeInfo, callback) {
            this.stats && this.stats.incrementDailyStat("pagesScraped", 1);
            return await callback();
    }
}

export {StatsMiddleware}