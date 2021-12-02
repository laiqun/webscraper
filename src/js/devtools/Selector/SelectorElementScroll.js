import * as o from "./Selector.js"    //const o = i(10);
class SelectorElementScroll extends o.Selector {
    constructor(e) {
        super(), this.type = "SelectorElementScroll", this.selector = "", this.multiple = !0,
            this.delay = 2e3, this.scrollElementSelector = "", this.updateData(e);
    }

    canReturnMultipleRecords() {
        return !0;
    }

    canHaveChildSelectors() {
        return !0;
    }

    canCreateNewJobs() {
        return !1;
    }

    willReturnElements() {
        return !0;
    }

    async scrollToBottom(e, t = !1) {
        const i = e.element;
        if (this.scrollElementSelector) {
            const n = await e.getElement(this.scrollElementSelector);
            if (!n) return;
            await e.scrollDownElement(i, this.selector, t, n.element);
        } else await e.scrollDownBody(i, this.selector, t);
    }

    async scrollToTop(e) {
        e.element;
        this.scrollElementSelector, await e.srcollBodyToTop();
    }

    async _getData(e) {
        await this.waitDelay(), await this.scrollToTop(e);
        const t = parseInt("" + this.delay, 10) || 0;
        let i = await this.getDataElements(e), n = i.length;
        for (; ;) {
            if (await this.scrollToBottom(e), await e.webPage.waitForPageLoadComplete(!1, t),
                i = await this.getDataElements(e), i.length === n && (await this.scrollToTop(e),
                await this.scrollToBottom(e, !0), await e.webPage.waitForPageLoadComplete(!1, t),
                i = await this.getDataElements(e), i.length === n)) {
                for (const e of i) await await e;
                return await void 0;
            }
            n = i.length;
        }
    }

    getDataColumns() {
        return [];
    }

    getFeatures() {
        return ["selector", "multiple", "delay", "scrollElementSelector"];
    }

    getExperimentalFeatures() {
        return ["scrollElementSelector"];
    }
}

export {SelectorElementScroll}