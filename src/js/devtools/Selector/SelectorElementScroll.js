import * as o from "./Selector.js"    //const o = i(10);
class SelectorElementScroll extends o.Selector {
    constructor(e) {
        super();
        this.type = "SelectorElementScroll";
        this.selector = "";
        this.multiple = true;
        this.delay = 2e3;
        this.scrollElementSelector = "";
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return true;
    }

    canHaveChildSelectors() {
        return true;
    }

    canCreateNewJobs() {
        return false;
    }

    willReturnElements() {
        return true;
    }

    async scrollToBottom(e, t = false) {
        const i = e.element;
        if (this.scrollElementSelector) {
            const n = await e.getElement(this.scrollElementSelector);
            if (!n)
                return;
            await e.scrollDownElement(i, this.selector, t, n.element);
        } else
            await e.scrollDownBody(i, this.selector, t);
    }

    async scrollToTop(e) {
        e.element;
        this.scrollElementSelector;
        await e.srcollBodyToTop();
    }

    async _getData(e) {
        console.log("SelectorElementScroll");
        await this.waitDelay();
        let result = [];
        await this.scrollToTop(e);
        const delayTime = parseInt("" + this.delay, 10) || 0;
        let dataElements = await this.getDataElements(e);
        let dataElementsLength = dataElements.length;
        for (; ;) {
            await this.scrollToBottom(e);
            await e.webPage.waitForPageLoadComplete(false, delayTime);
            dataElements = await this.getDataElements(e);
            if (dataElements.length === dataElementsLength) {
                await this.scrollToTop(e);
                await this.scrollToBottom(e, true);
                await e.webPage.waitForPageLoadComplete(false, delayTime);
                dataElements = await this.getDataElements(e);
                if (dataElements.length === dataElementsLength) {
                    for (const dataElement of dataElements)
                        result.push(dataElement);
                    return result;
                }
            }
            dataElementsLength = dataElements.length;
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