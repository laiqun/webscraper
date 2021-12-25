import {Obj}from "../common/Obj.js"//, a = i(57)
import {default as log} from "../log/log.js";//c = i(5),
import {UniqueElementList} from "../devtools/selector/UniqueElementList.js"

class DataDeduplicator {
    constructor(setFirstPageHash) {
        this._lastBatchIsDuplicate = false;
        this.recordHashes = new Set;
        this.uniqueElementList = new UniqueElementList("uniqueHTMLText");
        if(setFirstPageHash)
            this.firstPageDeduplicationHash = setFirstPageHash;
    }

    async isUniqueElement(e) {
        const isNewElement = await this.uniqueElementList.push(e);
        if(isNewElement)//如果是新的
            this._lastBatchIsDuplicate = false;
        return isNewElement;
    }

    isUniqueRecord(e) {
        const t = Obj.getHash(e);
        if (!this.recordHashes.has(t)) {//如果没有，表明是新的
            this.recordHashes.add(t);
            this._lastBatchIsDuplicate = false;
            return true;
        }
        else
            return false;
    }

    startNewDataBatch() {
        this._lastBatchIsDuplicate = true;
    }

    lastBatchIsDuplicate() {
        return this._lastBatchIsDuplicate;
    }

    setFirstPageDeduplicationDataHash(e) {
        e && (this.firstPageDeduplicationHash = this.makeFirstPageDeduplicationHash(e));
    }

    getFirstPageDeduplicationHash() {
        if(undefined === this.firstPageDeduplicationHash )
            log.warning("missing first page deduplication hash");
        return this.firstPageDeduplicationHash;
    }

    deduplicateFirstPageData(e) {
        const newHash = this.makeFirstPageDeduplicationHash(e);
        return this.firstPageDeduplicationHash !== newHash ? e : e.filter(item => undefined !== item._deduplicateFirstPageData);
    }

    makeFirstPageDeduplicationHash(e) {
        //拿到所有去重第一页数据属性为undefined的子元素
        e = (e = JSON.parse(JSON.stringify(e))).filter(item => undefined === item._deduplicateFirstPageData);
        return Obj.getHash(e);
    }
}

export {DataDeduplicator}