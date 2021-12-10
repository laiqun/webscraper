//const r = i(85), a = i(57), o = i(5);
import * as a from "../devtools/Obj.js"//, a = i(57)
import {default as o} from "../contentjs/log.js";//c = i(5),
import * as r from "./UniqueElementList.js"

class DataDeduplicator {
    constructor(e) {
        this._lastBatchIsDuplicate = false;
        this.recordHashes = new Set;
        this.uniqueElementList = new r.UniqueElementList("uniqueHTMLText");
        e && (this.firstPageDeduplicationHash = e);
    }

    async isUniqueElement(e) {
        const t = await this.uniqueElementList.push(e);
        t && (this._lastBatchIsDuplicate = false);
        return t;
    }

    isUniqueRecord(e) {
        const t = a.Obj.getHash(e);
        if (!this.recordHashes.has(t)) {
            this.recordHashes.add(t);
            this._lastBatchIsDuplicate = false;
            return true;
        }
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
            o.warning("missing first page deduplication hash");
        return this.firstPageDeduplicationHash;
    }

    deduplicateFirstPageData(e) {
        const t = this.makeFirstPageDeduplicationHash(e);
        return this.firstPageDeduplicationHash !== t ? e : e.filter(e => undefined !== e._deduplicateFirstPageData);
    }

    makeFirstPageDeduplicationHash(e) {
        e = (e = JSON.parse(JSON.stringify(e))).filter(e => undefined === e._deduplicateFirstPageData);
        return a.Obj.getHash(e);
    }
}

export {DataDeduplicator}