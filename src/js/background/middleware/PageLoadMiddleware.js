import * as r from "./BaseMiddleware.js"//r = i(33)
import {default as a} from "../../common/Msg.js"//a = i(17),
class PageLoadMiddleware extends r.BaseMiddleware {
    constructor(e) {
        super();
        this.webPage = e;
    }

    async handle(e, t, i) {
            const url = e.url;
            try {
                await this.webPage.openPage(url);
                return  await i();
            } catch (t) {
                if (a.startsWith(t, "PAGE_STATUS_CODE_ERROR")) {
                    e.page_load_failed_with_status_code_error = !0;
                    const n = await i();
                    if (e.retry || e.fingerprintCheckerDetected)
                        return n;
                    delete e.page_load_failed_with_status_code_error;
                    throw  t;
                }
                throw t;
            }
    }
}

export {PageLoadMiddleware}