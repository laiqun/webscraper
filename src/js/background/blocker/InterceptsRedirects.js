import {RedirectInterceptor} from "./RedirectInterceptor.js"//const r = i(609),
import {ImageBlocker} from "./ImageBlocker.js"// a = i(610);
class InterceptsRedirects extends ImageBlocker {
    constructor() {
        super(...arguments);
        this.redirectInterceptorStarted = false;
    }

    async clickAndWaitForRedirectUrl(e) {
        if (this.redirectInterceptorStarted)
            throw new Error("Redirect interceptor already started");
        this.redirectInterceptorStarted = true;
        const redirectInterceptor = new RedirectInterceptor({
            tab: this.tab,
            chromeClient: this
        });
        try {
            return await redirectInterceptor.clickAndWaitForRedirectUrl(e);
        } finally {
            this.redirectInterceptorStarted = false;
        }
    }
}

export {InterceptsRedirects}
