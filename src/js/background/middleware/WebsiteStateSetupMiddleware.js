import * as o from "./BaseMiddleware.js"//r = i(33)
import {default as a} from "../../contentjs/log.js";//a = i(5),
import * as r from "../../devtools/Async.js"//const r = i(22);
class WebsiteStateSetupMiddleware extends o.BaseMiddleware {
    constructor(e, t) {
        super();
        this.webPage = e;
        this.sitemap = t;
    }

    async isStateAlreadyOk() {
        const e = this.sitemap;
        const t = await this.webPage.getRootElement();
        return 0 !== (await t.getElements(e.websiteStateSetup.performWhenNotFoundSelector)).length;
    }

    async setupState() {
        a.Log.info("Setting up website state");
        const sitemap = this.sitemap;
        const webPage = this.webPage;
        const websiteStateSetup = sitemap.websiteStateSetup;
        for (const e of websiteStateSetup.actions)
            if ("openUrl" === e.type)
            {
                await webPage.openPage(e.url);
                await r.Async.sleep(2000);
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
                    await r.Async.sleep(e.duration);
            }
    }

    async handle(e, t, i) {
        const txx = this.sitemap;
        if (void 0 !== txx.websiteStateSetup && txx.websiteStateSetup.enabled) {
            const statusOK = await this.isStateAlreadyOk();
            const haveRetriedTimes = undefined !== e.stateSetupRetries && e.stateSetupRetries >= 1;
            if (!statusOK && !haveRetriedTimes)
            {
                await this.setupState();
                await this.webPage.waitForPageLoadComplete();
                e.retry = true;
                if(undefined === e.stateSetupRetries )
                    e.stateSetupRetries = 0;
                e.stateSetupRetries++;
                return [];
            }
            if (!statusOK && haveRetriedTimes)
            {
                delete e.retry;
                throw  "STATE_SETUP_CHECK_FAILED_AFTER_STATE_SETUP";
            }
        }
        return await i();
    }
}

export {WebsiteStateSetupMiddleware}