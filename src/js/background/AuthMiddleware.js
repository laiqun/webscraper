import * as r from "../devtools/Async.js"//r = i(22),
import * as a from "./BaseMiddleware.js"//const a = i(33);
class AuthMiddleware extends a.BaseMiddleware {
    constructor(webPage, sitemap) {
        super();
        this.webPage = webPage;
        this.sitemap = sitemap;
    }

    async isLoggedIn() {
        const sitemap = this.sitemap;
        const rootElement = await this.webPage.getRootElement();
        return 0 !== (await rootElement.getElements(sitemap.auth.checkLoggedInSelector)).length;
    }

    async login() {
        const sitemap = this.sitemap;
        const webPage = this.webPage;
        const auth = sitemap.auth;
        await webPage.openPage(auth.url);
        await r.Async.sleep(5000);
        if (await this.isLoggedIn())
            return;
        for (const inputElement of auth.input) {
            const cssSelector = inputElement.CSSSelector;
            const value = inputElement.value;
            if ("click" === inputElement.action) {
                const _element = await webPage.getElement(cssSelector);
                if (null === _element)
                    throw "Auth couldn't find button - " + cssSelector;
                await _element.click();
                await _element.webPage.waitForPageLoadComplete(false, 2000);
            } else {
                const _element = await webPage.getElement(cssSelector);
                if (null === _element)
                    throw "Auth couldn't find input field - " + cssSelector;
                await _element.type(value);
                await _element.webPage.waitForPageLoadComplete(false, 2000);
            }
        }
        const clickButtonCSSSelector = auth.clickButtonCSSSelector;
        const clickButtonElement = await webPage.getElement(clickButtonCSSSelector);
        if (null === clickButtonElement)
            throw "Auth couldn't find button - " + clickButtonCSSSelector;
        await clickButtonElement.click();
        await clickButtonElement.webPage.waitForPageLoadComplete(false, 2000);
    }

    async handle(loggingTryInfoMap, t, callback) {
        const sitemap = this.sitemap;
        if (undefined !== sitemap.auth && sitemap.auth.checkLoggedInSelector) {
            const _isLoggedIn = await this.isLoggedIn();
            const haveTriedTimes = undefined !== loggingTryInfoMap.loginRetries && loggingTryInfoMap.loginRetries >= 1;
            if (!_isLoggedIn && !haveTriedTimes)//如果loginRetries为undefined，则haveTryTimes是false
            {
                await this.login();
                loggingTryInfoMap.retry = true;
                if(undefined === loggingTryInfoMap.loginRetries)
                    loggingTryInfoMap.loginRetries = 0;
                loggingTryInfoMap.loginRetries++;
                return  [];
            }
            if (!_isLoggedIn && haveTriedTimes)//已经试过登录了，但是没登录上
            {
                delete loggingTryInfoMap.retry;
                throw  "Login check failed after logging in";
            }
            if(_isLoggedIn)
                delete loggingTryInfoMap.page_load_failed_with_status_code_error;
        }
        return await callback();
    }

}

export {AuthMiddleware}