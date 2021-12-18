import * as n from "./AuthMiddleware.js"//n = i(545),
import * as r from "./DataExtractorMiddleware.js"//r = i(546),
import * as a from "./DataParserMiddleware.js"//a = i(547),
import * as o from "./DataStorageMiddleware.js"//o = i(548),
import * as s from "./ErrorHandlerMiddleware.js"//s = i(549),
import * as c from "./JobExecutionProfileMiddleware.js"//c = i(550),
import * as l from "./PageLoadMiddleware.js"//l = i(551),
import * as u from "./RetryMiddleware.js"// u = i(552),
import * as d from "./StatsMiddleware.js"// d = i(553),
import * as h from "./WebsiteStateSetupMiddleware.js"//h = i(554),
import * as p from "./MiddlewareHandler.js"//p = i(555),
import * as f from "./StopOnCaptchaMiddleware.js"//f = i(557),
import * as m from "./DetectRedirectAfterPageLoadMiddleware.js"//m = i(558),
import * as g from "./ConfigureLogMiddleware.js"//g = i(559),
import * as y from "./RefreshTabMiddleware.js"//  y = i(560);
class ChromeTabMiddlewareHandler extends p.MiddlewareHandler {
    constructor(e) {
        const webPage = e.webPage;
        const sitemap = e.sitemap;
        const storage = e.storage;
        const stats = e.stats;
        super([new g.ConfigureLogMiddleware,
            new d.StatsMiddleware(stats),
            new o.DataStorageMiddleware(storage),
            new c.JobExecutionProfileMiddleware(webPage, sitemap),
            new s.ErrorHandlerMiddleware(webPage, sitemap),
            new a.DataParserMiddleware(sitemap),
            new y.RefreshTabMiddleware(webPage),
            new u.RetryMiddleware,
            new l.PageLoadMiddleware(webPage),
            new f.StopOnCaptchaMiddleware(webPage),
            new n.AuthMiddleware(webPage, sitemap),
            new h.WebsiteStateSetupMiddleware(webPage, sitemap),
            new m.DetectRedirectAfterPageLoadMiddleware(webPage),
            new r.DataExtractorMiddleware(webPage, sitemap)]);
    }
}


export {ChromeTabMiddlewareHandler}