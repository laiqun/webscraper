import * as a from "./UniqueElementList.js"//a = i(85),
import * as o from "./ClickActionTypes.js"//o = i(83),
import * as s from "./WebPageDriverType.js"//s = i(34),
import * as l from "./BaseClickPaginationStrategy.js"//    const   l = i(195);
class ClickOnceExtractorStrategy extends l.BaseClickPaginationStrategy {
    async extract(e) {
        const {selector: t} = e;
        if (e.parentElement.driver !== s.WebPageDriverType.chrometab)
            return await void 0;
        const parentElement = e.parentElement;
        const r = new a.UniqueElementList("uniqueText");
        for (; ;) {
            const e = await this.getClickButton(parentElement, t, r);
            if (!e)
                break;
            await e.click(o.ClickActionTypes.realLikeEvents);
            await this.waitForPageToLoadAfterClick(parentElement);
            await await parentElement;
            await r.push(e);
        }
        return r;
    }
}

export {ClickOnceExtractorStrategy};