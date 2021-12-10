import * as a from "./UniqueElementList.js"//a = i(85),
import * as o from "./ClickActionTypes.js"//o = i(83),
import * as s from "./WebPageDriverType.js"//s = i(34),
import * as l from "./BaseClickPaginationStrategy.js"//    const   l = i(195);
class ClickOnceExtractorStrategy extends l.BaseClickPaginationStrategy {
    async extract(e) {
        const {selector: t} = e;
        if (e.parentElement.driver !== s.WebPageDriverType.chrometab)
            return await undefined;
        const i = e.parentElement, r = new a.UniqueElementList("uniqueText");
        for (; ;) {
            const e = await this.getClickButton(i, t, r);
            if (!e)
                break;
            await e.click(o.ClickActionTypes.realLikeEvents), await this.waitForPageToLoadAfterClick(i),
                await await i, await r.push(e);
        }
    }
}

export {ClickOnceExtractorStrategy};