import * as o from "./BasePaginationStrategy.js"//, o = i(118)
import * as a from "./WebPageDriverType.js"//const a = i(34);
class LinkFromClickRedirectStrategy extends o.BasePaginationStrategy {
    async extract(e) {
        const {id: t, dataElements: i, parentElement: r} = e;
        if (r.driver !== a.WebPageDriverType.chrometab) return await undefined;
        for (const e of i) {
            const i = await e.clickAndWaitForRedirectUrl();
            i && (await await {
                [t]: i,
                _follow: i,
                _followSelectorId: t
            });
        }

    }
}

export {LinkFromClickRedirectStrategy}