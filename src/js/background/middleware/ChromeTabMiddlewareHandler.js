import {AuthMiddleware} from "./AuthMiddleware.js"//n = i(545),
import {DataExtractorMiddleware} from "./DataExtractorMiddleware.js"//r = i(546),
import {DataParserMiddleware} from "./DataParserMiddleware.js"//a = i(547),
import {DataStorageMiddleware} from "./DataStorageMiddleware.js"//o = i(548),
import {ErrorHandlerMiddleware} from "./ErrorHandlerMiddleware.js"//s = i(549),
import {JobExecutionProfileMiddleware} from "./JobExecutionProfileMiddleware.js"//c = i(550),
import {PageLoadMiddleware} from "./PageLoadMiddleware.js"//l = i(551),
import {RetryMiddleware} from "./RetryMiddleware.js"// u = i(552),
import {StatsMiddleware} from "./StatsMiddleware.js"// d = i(553),
import {WebsiteStateSetupMiddleware} from "./WebsiteStateSetupMiddleware.js"//h = i(554),
import {MiddlewareHandler} from "./MiddlewareHandler.js"//p = i(555),
import {StopOnCaptchaMiddleware} from "./StopOnCaptchaMiddleware.js"//f = i(557),
import {DetectRedirectAfterPageLoadMiddleware} from "./DetectRedirectAfterPageLoadMiddleware.js"//m = i(558),
import {ConfigureLogMiddleware} from "./ConfigureLogMiddleware.js"//g = i(559),
import {RefreshTabMiddleware} from "./RefreshTabMiddleware.js"//  y = i(560);
class ChromeTabMiddlewareHandler extends MiddlewareHandler {
    constructor(e) {
        const webPage = e.webPage;
        const sitemap = e.sitemap;
        const storage = e.storage;
        const stats = e.stats;
        super([new ConfigureLogMiddleware,
            new StatsMiddleware(stats),
            new DataStorageMiddleware(storage),
            new JobExecutionProfileMiddleware(webPage, sitemap),
            new ErrorHandlerMiddleware(webPage, sitemap),
            new DataParserMiddleware(sitemap),
            new RefreshTabMiddleware(webPage),
            new RetryMiddleware,
            new PageLoadMiddleware(webPage),
            new StopOnCaptchaMiddleware(webPage),
            new AuthMiddleware(webPage, sitemap),
            new WebsiteStateSetupMiddleware(webPage, sitemap),
            new DetectRedirectAfterPageLoadMiddleware(webPage),
            new DataExtractorMiddleware(webPage, sitemap)]);
    }
}


export {ChromeTabMiddlewareHandler}