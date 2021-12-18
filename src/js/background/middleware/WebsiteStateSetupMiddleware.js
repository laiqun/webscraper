import {BaseMiddleware} from "./BaseMiddleware.js"//r = i(33)
import {default as log} from "../../log/log.js";//a = i(5),
import {Async} from "../../common/Async.js"//const r = i(22);
class WebsiteStateSetupMiddleware extends BaseMiddleware {
    constructor(webPage, sitemap) {
        super();
        this.webPage = webPage;
        this.sitemap = sitemap;
    }

    async isStateAlreadyOk() {
        const e = this.sitemap;
        const t = await this.webPage.getRootElement();
        return 0 !== (await t.getElements(e.websiteStateSetup.performWhenNotFoundSelector)).length;
    }

    async setupState() {
        log.info("Setting up website state");
        const sitemap = this.sitemap;
        const webPage = this.webPage;
        const websiteStateSetup = sitemap.websiteStateSetup;
        for (const e of websiteStateSetup.actions)
            if ("openUrl" === e.type)
            {
                await webPage.openPage(e.url);
                await Async.sleep(2000);
            }
            else if ("input" === e.type) {
                const selector = e.selector;
                const webElement = await webPage.getElement(selector);
                if (null === webElement)
                    throw "STATE_SETUP_ERROR State setup couldn't find input field - " + selector;
                await webElement.type(e.value);
                await webElement.webPage.waitForPageLoadComplete(false, 2000);
            } else if ("click" === e.type) {
                const selector = e.selector;
                const webElement = await webPage.getElement(selector);
                if (null === webElement)
                    throw "STATE_SETUP_ERROR State setup couldn't find button - " + selector;
                await webElement.click();
                await webElement.webPage.waitForPageLoadComplete(false, 2000);
            } else
            {
                if("sleep" === e.type )
                    await Async.sleep(e.duration);
            }
    }

    async handle(job, jobRuntimeInfo, callback) {
        const txx = this.sitemap;
        if (void 0 !== txx.websiteStateSetup && txx.websiteStateSetup.enabled) {
            const statusOK = await this.isStateAlreadyOk();
            const haveRetriedTimes = undefined !== job.stateSetupRetries && job.stateSetupRetries >= 1;
            if (!statusOK && !haveRetriedTimes)
            {
                await this.setupState();
                await this.webPage.waitForPageLoadComplete();
                job.retry = true;
                if(undefined === job.stateSetupRetries )
                    job.stateSetupRetries = 0;
                job.stateSetupRetries++;
                return [];
            }
            if (!statusOK && haveRetriedTimes)
            {
                delete job.retry;
                throw  "STATE_SETUP_CHECK_FAILED_AFTER_STATE_SETUP";
            }
        }
        return await callback();
    }
}

export {WebsiteStateSetupMiddleware}