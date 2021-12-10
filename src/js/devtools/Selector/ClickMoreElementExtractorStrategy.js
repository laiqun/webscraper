import * as a from "./UniqueElementList.js"//a = i(85),

import * as o from "./ClickActionTypes.js"//o = i(83),
import * as s from "./WebPageDriverType.js"//s = i(34),
import * as l from "./BaseClickPaginationStrategy.js"//const  l = i(195);
class ClickMoreElementExtractorStrategy extends l.BaseClickPaginationStrategy {
    async extract(e) {
        const {dataDeduplicator: t, selector: i} = e;
        if (e.parentElement.driver !== s.WebPageDriverType.chrometab)
            return await undefined;
        const r = e.parentElement, l = new a.UniqueElementList("uniqueText");
        for (; ;) {
            const e = await this.getClickButton(r, i, l);
            if (!e) break;
            await e.click(o.ClickActionTypes.realLikeEvents), await this.waitForPageToLoadAfterClick(r),
                await await r, t.lastBatchIsDuplicate() && (await l.push(e));
        }
    }
}

export {ClickMoreElementExtractorStrategy}