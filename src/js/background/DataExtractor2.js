import * as u from "../common/Obj.js"//, u = i(57)
import * as l from "./DataSizeLimitError.js"//, l = i(499)
import * as a from "../devtools/SelectorOpt/SelectorList.js"//a = i(215),
import * as o from "../devtools/Sitemap.js"//o = i(119),
import * as s from "./IM/WebPageElement.js"// s = i(93),
import * as c from "./DataDeduplicator.js"//const   c = i(543);
class DataExtractor2 {
    constructor(e) {
        this.rawDataSize = 0;
        this.sizeLimit = 26214400;
        if (e.sitemap instanceof o.Sitemap)
            this.sitemap = e.sitemap;
        else {
            this.sitemap = new o.Sitemap(e.sitemap);
        }
        this.parentSelectorId = e.parentSelectorId;
        this.parentElement = e.parentElement;
        this.deduplicateFirstPageData = e.deduplicateFirstPageData;

    }

    async getData() {
        const parentSelector = this.sitemap.getSelectorById(this.parentSelectorId);
        let deDuplicator;
        if (parentSelector && parentSelector.shouldDeduplicateChildSelectorData())
            deDuplicator = new c.DataDeduplicator(this.deduplicateFirstPageData);
        let i = await this.getChildSelectorData(this.parentSelectorId, this.parentElement, true, deDuplicator);
        if(deDuplicator)
            i = deDuplicator.deduplicateFirstPageData(i);
        return i;
    }

    async getChildSelectorData(parentSelectorId, parentElement, keepParentCircle = false, r) {
        const directChildSelectors = this.sitemap.getDirectChildSelectors(parentSelectorId);
        let notMultipleData = {}, notMultipleFlag = false, multipleData = [];
        for (const directChildSelector of directChildSelectors) {
            if (directChildSelector.id === parentSelectorId && !keepParentCircle)
                continue;
            const dataResults = await this.getSelectorData(parentSelectorId, directChildSelector, parentElement, r);
            if (this.selectorWillReturnMultipleRecords(directChildSelector)) {
                multipleData = multipleData.concat(dataResults);
            } else {
                notMultipleData = Object.assign(Object.assign({}, notMultipleData), dataResults[0]);
                notMultipleFlag = true;
            }
        }
        this.checkJoinedDataSize(notMultipleData, multipleData);//如果有的是multiple，有的不是，那么非multiple的要复制N次（N为multiple选择器，数据最多的那个，有多少个）
        if (0 === multipleData.length)
            return notMultipleFlag ? [notMultipleData] : [];
        {
            const totalOutput = [];
            for (const item of multipleData)
                totalOutput.push(Object.assign(Object.assign({}, notMultipleData), item));
            return totalOutput;
        }
    }

    async getSelectorData(parentSelectorId, directChildSelector, parentElement, a) {
        let o, l;
        const n = [];
        let u;
        directChildSelector.shouldDeduplicateChildSelectorData() && (u = new c.DataDeduplicator(this.deduplicateFirstPageData));
        try {
            let childSelectorData = await directChildSelector.getData(parentElement, u);
            for (let childSelectorDatum of childSelectorData) {
                const i = childSelectorDatum;
                directChildSelector.shouldDeduplicateChildSelectorData() && u.startNewDataBatch();
                if (i instanceof s.WebPageElement) {
                    if (directChildSelector.id === this.parentSelectorId)
                        continue;
                    if (a && !(await a.isUniqueElement(i)))
                        continue;
                    const r = await this.getChildSelectorData(directChildSelector.id, i, !1, u);
                    directChildSelector.shouldDeduplicateChildSelectorData() && parentSelectorId !== directChildSelector.id && u.setFirstPageDeduplicationDataHash(r);
                    n.push(...r);
                } else {
                    if (a && !a.isUniqueRecord(i))
                        continue;
                    this.checkRawDataSize(i);
                    n.push(i);
                }
            }
        } catch (e) {
            o = {
                error: e
            };
        }
        if (directChildSelector.shouldDeduplicateChildSelectorData())
            for (const e of n)
                if (e._followSelectorId === directChildSelector.id) {
                    const t = u.getFirstPageDeduplicationHash();
                    e._deduplicateFirstPageData = t;
                }
        return n;
    }

    selectorWillReturnMultipleRecords(e) {
        if (e.willReturnMultipleRecords())
            return !0;
        const t = this.sitemap.getDirectChildSelectors(e.id);
        for (const e of t) {
            if (e.willReturnMultipleRecords())
                return !0;
            if (e.willReturnElements() && this.selectorWillReturnMultipleRecords(e))
                return !0;
        }
        return !1;
    }

    getSingleSelectorData(parentSelectorIds, selectorId) {
        const sitemap = this.sitemap;
        const n = sitemap.getSingleSelectorDataPreviewSelectors(parentSelectorIds, selectorId);
        let parentSelectorId;
        sitemap.selectors = new a.SelectorList(n);
        for (let index = parentSelectorIds.length - 1; index >= 0; index--) {
            const oneParent = parentSelectorIds[index];
            if ("_root" === oneParent) {
                parentSelectorId = oneParent;
                break;
            }
            if (!this.sitemap.selectors.getSelector(parentSelectorIds[index]).willReturnElements()) {//倒着找到第一个不会返回数据的节点
                parentSelectorId = oneParent;
                break;
            }
        }
        this.parentSelectorId = parentSelectorId;
        return this.getData();
    }

    checkRawDataSize(oneRow) {
        const size = u.Obj.getSize(oneRow);
        this.rawDataSize += size;
        if (this.rawDataSize > this.sizeLimit)
            throw new l.DataSizeLimitError("Extracted data size limit exceeded", this.rawDataSize / 1024 / 1024);
    }

    checkJoinedDataSize(e, list) {
        const baseSize = u.Obj.getSize(e);
        let total = 0;
        for (const listElement of list)
            total += baseSize + u.Obj.getSize(listElement);
        if (total > this.sizeLimit)
            throw new l.DataSizeLimitError("Extracted data size limit exceeded", total / 1024 / 1024);
    }
}

export {DataExtractor2}