import {default as Msg} from "../../common/Msg.js"//a = i(17),
import {default as Log} from "../../log/log.js";//o = i(5),
import {BaseMiddleware} from "./BaseMiddleware.js"//const r = i(33);
class DetectRedirectAfterPageLoadMiddleware extends BaseMiddleware {
    constructor(webPage) {
        super();
        this.webPage = webPage;
    }

    async handle(job, jobRuntimeInfo, callback) {
        for (let index = 1; index <= 2; index++)
            try {
                return await callback();
            } catch (t) {
                if (Msg.startsWith(t, "ACCESSING_UNDEFINED_ELEMENT") ||
                    Msg.startsWith(t, "FAILED_TO_CONNECT_TO_CHROME_TAB")) {
                    let t = await this.webPage.getPageLoadState();
                    if (t.redirectedAfterPageLoadComplete) {
                        await this.webPage.waitForPageLoadComplete();
                        jobRuntimeInfo = await this.webPage.getPageLoadState();
                        if (t.statusCode >= 400) {
                            Log.notice("FIXME - page was redirected during data extraction and loaded with error status code. Status code will be ignored and empty page returned. Status code parser override is ignored", {
                                statusCode: t.statusCode
                            });
                            return []
                        }

                        if (1 === index)
                            continue;
                        throw new Error("PAGE_REDIRECTED_DURING_DATA_EXTRACTION_AFTER_RETRY");
                    }
                }
                throw t;
            }
    }
}

export {DetectRedirectAfterPageLoadMiddleware}