import {IsNotEmpty} from "./IsNotEmpty.js"//n = i(730),
import {IsNumeric} from "./IsNumeric.js"//r = i(731),
import {IsGreaterOrEqualThan} from "./IsGreaterOrEqualThan.js"//a = i(732),
import {BaseRules} from "./BaseRules.js"//const   o = i(733);

class SitemapScrapeViewRules extends BaseRules {
    constructor() {
        super(...arguments);
        this.rules = {
            requestInterval: [new IsNotEmpty, new IsNumeric, new IsGreaterOrEqualThan(2000)],
            pageLoadDelay: [new IsNotEmpty, new IsNumeric, new IsGreaterOrEqualThan(500)]
        };
    }
}

export {SitemapScrapeViewRules}