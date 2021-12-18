import * as r from "./RedirectInterceptor.js"//const r = i(609),
import * as a from "./ImageBlocker.js"// a = i(610);
class InterceptsRedirects extends a.ImageBlocker {
    constructor() {
        super(...arguments);
        this.redirectInterceptorStarted = false;
    }

    async clickAndWaitForRedirectUrl(e) {
        if (this.redirectInterceptorStarted)
            throw new Error("Redirect interceptor already started");
        this.redirectInterceptorStarted = true;
        const redirectInterceptor = new r.RedirectInterceptor({
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
