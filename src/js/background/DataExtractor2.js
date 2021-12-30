import * as u from "../common/Obj.js"//, u = i(57)
import * as l from "./DataSizeLimitError.js"//, l = i(499)
import * as a from "../devtools/SelectorOpt/SelectorList.js"//a = i(215),
import * as o from "../common/Sitemap.js"//o = i(119),
import * as s from "./IM/WebPageElement.js"// s = i(93),
import {DataDeduplicator} from "./DataDeduplicator.js"//const   c = i(543);
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
        this.deduplicateFirstPageData = e.deduplicateFirstPageData;//真正抓取才有这个参数

    }

    async getData() {
        const parentSelector = this.sitemap.getSelectorById(this.parentSelectorId);
        let deDuplicator;
        if (parentSelector && parentSelector.shouldDeduplicateChildSelectorData())
            deDuplicator = new DataDeduplicator(this.deduplicateFirstPageData);
        let childSeletorData = await this.getChildSelectorData(this.parentSelectorId, this.parentElement, true, deDuplicator);
        if(deDuplicator)
            childSeletorData = deDuplicator.deduplicateFirstPageData(childSeletorData);
        return childSeletorData;
    }

    async getChildSelectorData(parentSelectorId, parentElement, keepParentCircle = false, deDuplicator) {
        //Step1:  获取所有的子选择器
        const directChildSelectors = this.sitemap.getDirectChildSelectors(parentSelectorId);
        let notMultipleData = {}, notMultipleFlag = false, multipleData = [];
        //Step2: 对于每个子选择器
        //如果子选择器的id和父选择器相同，表明是个递归， 如果保持父元素的循环为假，则跳过这个子选择器，否则处理这个选择器
        //Step2.1:  获取子选择器的数据
        //Step2.2：
        for (const directChildSelector of directChildSelectors) {
            if (directChildSelector.id === parentSelectorId && !keepParentCircle)
                continue;
            const dataResults = await this.getSelectorData(parentSelectorId, directChildSelector, parentElement, deDuplicator);
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

    async getSelectorData(parentSelectorId, directChildSelector, parentElement, dataDedeuplicator) {
        let o, l;
        const result = [];
        let newDataDeduplicator;
        if(directChildSelector.shouldDeduplicateChildSelectorData() )
            newDataDeduplicator = new DataDeduplicator(this.deduplicateFirstPageData);
        try {
            let childSelectorData = await directChildSelector.getData(parentElement, newDataDeduplicator);
            for (let childSelectorDataItem of childSelectorData) {
                const childSelectorDataItemCloned = childSelectorDataItem;
                if(directChildSelector.shouldDeduplicateChildSelectorData() )
                    newDataDeduplicator.startNewDataBatch();
                if (childSelectorDataItemCloned instanceof s.WebPageElement) {
                    if (directChildSelector.id === this.parentSelectorId)
                        continue;
                    if (dataDedeuplicator && !(await dataDedeuplicator.isUniqueElement(childSelectorDataItemCloned)))
                        continue;
                    const childSeletorData = await this.getChildSelectorData(directChildSelector.id, childSelectorDataItemCloned, false, newDataDeduplicator);
                    if(directChildSelector.shouldDeduplicateChildSelectorData() && parentSelectorId !== directChildSelector.id )
                        newDataDeduplicator.setFirstPageDeduplicationDataHash(childSeletorData);
                    result.push(...childSeletorData);
                } else {
                    if (dataDedeuplicator && !dataDedeuplicator.isUniqueRecord(childSelectorDataItemCloned))
                        continue;
                    this.checkRawDataSize(childSelectorDataItemCloned);
                    result.push(childSelectorDataItemCloned);
                }
            }
        } catch (e) {
            o = {
                error: e
            };
        }
        if (directChildSelector.shouldDeduplicateChildSelectorData())
            for (const e of result)
                if (e._followSelectorId === directChildSelector.id) {
                    const hash = newDataDeduplicator.getFirstPageDeduplicationHash();
                    e._deduplicateFirstPageData = hash;
                }
        return result;
    }

    selectorWillReturnMultipleRecords(e) {
        if (e.willReturnMultipleRecords())
            return true;
        const t = this.sitemap.getDirectChildSelectors(e.id);
        for (const e of t) {
            if (e.willReturnMultipleRecords())
                return true;
            if (e.willReturnElements() && this.selectorWillReturnMultipleRecords(e))
                return true;
        }
        return false;
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