import {BaseMiddleware} from "./BaseMiddleware.js"//o = i(33)
import {default as log} from "../../log/log.js";//a = i(5),
import {Async} from "../../common/Async.js"//const r = i(22);
class StopOnCaptchaMiddleware extends BaseMiddleware {
    constructor(webPage) {
        super();
        this.webPage = webPage;
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

    async handle(job, jobRuntimeInfo, callback) {
        let exx = await this.pageHasCaptcha();
        if (exx) {
            log.info("Page has captcha. Waiting for user to resolve it");
            do {
                await Async.sleep(1000);
                exx = await this.pageHasCaptcha();
            } while (exx);
        }
        return await callback();
    }
}


export {StopOnCaptchaMiddleware}