import {BaseMiddleware}from "./BaseMiddleware.js"//, a = i(33)
import {DataExtractor2} from "../DataExtractor2.js"//const r = i(498);
class DataExtractorMiddleware extends BaseMiddleware {
    constructor(webPage, sitemap) {
        super();
        this.webPage = webPage;
        this.sitemap = sitemap;
    }

    async handle(job, jobRuntimeInfo, callback) {
        if (job.page_load_failed_with_status_code_error)
            return [];
        const now = Date.now();
        const sitemap = this.sitemap;
        const parentSelector = job.parentSelector;
        const webPage = this.webPage;
        const rootElement = await webPage.getRootElement();
        const dataExtractor2 = new DataExtractor2({
            sitemap: sitemap,
            parentSelectorId: parentSelector,
            parentElement: rootElement,
            deduplicateFirstPageData: job.getDeduplicateFirstPageData()
        });
        const  result = await dataExtractor2.getData();
        jobRuntimeInfo.setDataExtractionDuration(Date.now() - now);
        return result;
    }
}

export {DataExtractorMiddleware}