import * as r from "./BaseMiddleware.js"//r = i(33)
class StatsMiddleware extends r.BaseMiddleware {
    constructor(e) {
        super();
        this.stats = e;
    }

    async handle(e, t, i) {
            this.stats && this.stats.incrementDailyStat("pagesScraped", 1);
            return await i();
    }
}

export {StatsMiddleware}