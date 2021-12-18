import * as a from "./BaseMiddleware.js"//, a = i(33)
import * as r from "../DataExtractor2.js"//const r = i(498);
class DataExtractorMiddleware extends a.BaseMiddleware {
    constructor(e, t) {
        super();
        this.webPage = e;
        this.sitemap = t;
    }

    async handle(e, duration, i) {
        if (e.page_load_failed_with_status_code_error)
            return [];
        const now = Date.now();
        const sitemap = this.sitemap;
        const parentSelector = e.parentSelector;
        const webPage = this.webPage;
        const rootElement = await webPage.getRootElement();
        const c = new r.DataExtractor2({
            sitemap: sitemap,
            parentSelectorId: parentSelector,
            parentElement: rootElement,
            deduplicateFirstPageData: e.getDeduplicateFirstPageData()
        });
        const  result = await c.getData();
        duration.setDataExtractionDuration(Date.now() - now);
        return result;
    }
}

export {DataExtractorMiddleware}