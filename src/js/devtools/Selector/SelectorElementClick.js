//
import * as o from "./Selector.js"//o = i(10),
import * as s from "./UniqueElementList.js"//const  s = i(85);
//console.log("element click");
class SelectorElementClick extends o.Selector {
    constructor(e) {
        super();
        this.type = "SelectorElementClick";
        this.clickActionType = "auto";
        this.clickElementSelector = "";
        this.clickElementUniquenessType = "uniqueText";
        this.clickType = "clickOnce";
        this.delay = 2e3;
        this.discardInitialElements = "discard-when-click-element-exists";
        this.multiple = true;
        this.selector = "";
        if(true === e.discardInitialElements || "discard" === e.discardInitialElements )
            e.discardInitialElements = "discard" ;
        else if(false === e.discardInitialElements || "do-not-discard" === e.discardInitialElements )
            e.discardInitialElements = "do-not-discard";
        else if("discard-when-click-element-exists" === e.discardInitialElements)
            e.discardInitialElements = "discard-when-click-element-exists";
        else
            e.discardInitialElements = "do-not-discard";
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

    getClickActionType() {
        return undefined === this.clickActionType ? "auto" : this.clickActionType;
    }

    async getClickElements(e) {
        return await e.getElements(this.clickElementSelector);
    }

    getClickElementUniquenessType() {
        return undefined === this.clickElementUniquenessType ? "uniqueText" : this.clickElementUniquenessType;
    }

    async addInitialElements(e, uniqueElementList) {
        if ("discard" === this.discardInitialElements)
            return;
        if ("discard-when-click-element-exists" === this.discardInitialElements) {
            if ((await this.getClickElements(e)).length > 0)
                return;
        }
        const dataElements = await this.getDataElements(e);
        for (const dataElement of dataElements)
            await uniqueElementList.push(dataElement);
    }

    async _getData(e) {
        await this.waitDelay();
        const delayTime = parseInt("" + this.delay, 10) || 0;
        const uniqueElementList = new s.UniqueElementList("uniqueHTMLText");
        const  uniqueElementList1 = new s.UniqueElementList(this.getClickElementUniquenessType());
        const  a = this.getClickActionType();
        await this.addInitialElements(e, uniqueElementList);
        let result = [];
        for (const initialPageData of uniqueElementList.getElements())
            result.push(initialPageData);
        for (; ;) {
            const clickButton = await this.getClickButton(e, uniqueElementList1);
            if (false === clickButton)
                break;
            if("clickOnce" === this.clickType)
                await uniqueElementList1.push(clickButton);
            await clickButton.click(a);
            await e.webPage.waitForPageLoadComplete(false, delayTime);
            const dataElements = await this.getDataElements(e);
            const l = uniqueElementList.length;
            for (const dataElement of dataElements) {
                if(await uniqueElementList.push(dataElement))//if new data
                    result.push(dataElement);
            }
            const onlyOne = uniqueElementList.length - l;
            if("clickOnce" === this.clickType || "clickMore" === this.clickType && 0 === onlyOne)
                await uniqueElementList1.push(clickButton);
        }
        return result;
    }

    getDataColumns() {
        return [];
    }

    getFeatures() {
        return ["selector", "multiple", "delay", "clickElementSelector",
            "clickType", "discardInitialElements",
            "clickElementUniquenessType", "clickActionType"];
    }

    getExperimentalFeatures() {
        return ["clickActionType"];
    }

    async getClickButton(e, t) {
        const clickElements = await this.getClickElements(e);
        for (const clickElement of clickElements) {
            if (!(await t.isElementAdded(clickElement)))
                return clickElement;
        }
        return false;
    }
}


export {SelectorElementClick}