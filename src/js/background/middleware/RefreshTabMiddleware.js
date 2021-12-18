import {default as a} from "../../contentjs/Msg.js"//a = i(17),
import * as r from "./BaseMiddleware.js"//    const r = i(33)
class RefreshTabMiddleware extends r.BaseMiddleware {
    constructor(e) {
        super();
        this.openBlankPageInNextJob = false;
        this.webPage = e;
    }

    async handle(e, t, i, r) {
            if(this.openBlankPageInNextJob)
            {
                await this.webPage.openBlankPage(undefined, true);
                this.openBlankPageInNextJob = false;
            }
            try {
                return await i();
            } catch (e) {
                if(a.startsWithAnyOf(e, ["CHROME_TAB_CRASHED",
                    "FAILED_TO_CONNECT_TO_CHROME_TAB",
                    "WEB_NAVIGATION_ERROR net::ERR_ABORTED",
                    "PAGE_LOAD_TIMEOUT"]))
                    this.openBlankPageInNextJob = true;
                throw e;
            }
    }
}

export {RefreshTabMiddleware}