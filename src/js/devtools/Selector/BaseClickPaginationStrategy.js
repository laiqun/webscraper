import * as r from "./BasePaginationStrategy.js"//const r = i(118);
class BaseClickPaginationStrategy extends r.BasePaginationStrategy {
    async getClickButton(e, t, i) {
        const n = await e.getElements(t);
        for (const e of n) {
            if (!(await i.isElementAdded(e))) return e;
        }
    }

    async waitForPageToLoadAfterClick(e) {
        await e.webPage.waitForPageLoadComplete(true, 2e3);
    }
}

export {BaseClickPaginationStrategy}