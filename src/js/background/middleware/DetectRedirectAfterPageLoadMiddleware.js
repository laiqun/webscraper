import {default as a} from "../../contentjs/Msg.js"//a = i(17),
import {default as o} from "../../log/log.js";//o = i(5),
import * as r from "./BaseMiddleware.js"//const r = i(33);
class DetectRedirectAfterPageLoadMiddleware extends r.BaseMiddleware {
    constructor(e) {
        super();
        this.webPage = e;
    }

    async handle(e, t, i) {
        for (let index = 1; index <= 2; index++)
            try {
                return await i();
            } catch (t) {
                if (a.startsWith(t, "ACCESSING_UNDEFINED_ELEMENT") || a.startsWith(t, "FAILED_TO_CONNECT_TO_CHROME_TAB")) {
                    let t = await this.webPage.getPageLoadState();
                    if (t.redirectedAfterPageLoadComplete) {
                        await this.webPage.waitForPageLoadComplete();
                        t = await this.webPage.getPageLoadState();
                        if (t.statusCode >= 400) {
                            o.notice("FIXME - page was redirected during data extraction and loaded with error status code. Status code will be ignored and empty page returned. Status code parser override is ignored", {
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