import * as i from "../Extractor/ExtractorBase.js"
import * as o from "./timeout_sleep.js"

class WaitForPageLoadAction extends i.ExtractorBase {
    async extract() {
        if ("complete" === document.readyState) return;
        const domLoadedPromise = new Promise((resolve, reject) => {
            document.addEventListener("DOMContentLoaded", t => {
                resolve(true);
            });
        });
        await o.default.timeoutPromiseWithoutTimeoutError(domLoadedPromise, 5000, "wait for page load timeout");
    }
}

export { WaitForPageLoadAction }