import * as r from "./BaseMiddleware.js"//r = i(33)
import {default as a} from "../../common/Msg.js"//a = i(17),
class PageLoadMiddleware extends r.BaseMiddleware {
    constructor(webPage) {
        super();
        this.webPage = webPage;
    }

    async handle(job, jobRuntimeInfo, callback) {
            const url = job.url;
            try {
                await this.webPage.openPage(url);
                return  await callback();
            } catch (t) {
                if (a.startsWith(t, "PAGE_STATUS_CODE_ERROR")) {
                    job.page_load_failed_with_status_code_error = !0;
                    const n = await callback();
                    if (job.retry || job.fingerprintCheckerDetected)
                        return n;
                    delete job.page_load_failed_with_status_code_error;
                    throw  t;
                }
                throw t;
            }
    }
}

export {PageLoadMiddleware}