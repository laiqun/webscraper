import * as o from "./BaseMiddleware.js"//o = i(33)
import {default as a} from "../../log/log.js";//a = i(5),
import * as r from "../../common/Async.js"//const r = i(22);
class StopOnCaptchaMiddleware extends o.BaseMiddleware {
    constructor(e) {
        super();
        this.webPage = e;
        this.captchaDetectionSelectors = ["iframe[src*='https://www.google.com/recaptcha/api2/']"];
    }

    async pageHasCaptcha() {
        if ("undefined" == typeof window)
            return false;
        if (!(true === window.stopOnCaptcha))
            return false;
        const e = this.webPage;
        for (const t of this.captchaDetectionSelectors) {
            if (null !== (await e.getElement(t)))
                return true;
        }
        return false;
    }

    async handle(e, t, i) {
        let exx = await this.pageHasCaptcha();
        if (exx) {
            a.info("Page has captcha. Waiting for user to resolve it");
            do {
                await r.Async.sleep(1000);
                exx = await this.pageHasCaptcha();
            } while (exx);
        }
        return await i();
    }
}


export {StopOnCaptchaMiddleware}