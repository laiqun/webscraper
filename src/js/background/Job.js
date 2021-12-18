class Job {
    constructor(e) {
        if(undefined !== e.parentJob )
            this.url = this.combineUrls(e.parentJob.url, e.url);
        else
        {
            this.url = e.url;
        }
        if(undefined !== e._id)
            this._id = e._id;
        if(undefined !== e._rev )
            this._rev = e._rev;
        this.parentSelector = e.parentSelector;
        this.baseData = e.baseData || {};
        this.executed = e.executed || false;
        if(e.failed_retries)
            this.failed_retries = e.failed_retries;
        if(e.empty_retries )
            this.empty_retries = e.empty_retries;
        if(e.timeAvailableAt)
            this.timeAvailableAt = e.timeAvailableAt;
        if(e.deduplicateFirstPageData )
            this.deduplicateFirstPageData = e.deduplicateFirstPageData;
    }

    combineUrls(e, t) {
        return new URL(t, e).toString();
    }

    recordCanHaveChildJobs(e, t) {
        if (undefined === e._follow)
            return false;
        const i = e._followSelectorId;
        return 0 !== t.getDirectChildSelectors(i).length;
    }

    getResults() {
        return this.data;
    }

    getTimeAvailableAt() {
        return this.timeAvailableAt ? 1000 * this.timeAvailableAt : Date.now();
    }

    hasFailed() {
        return !!this.failed;
    }

    markAsFailed(e) {
        delete this.empty;
        delete this.known_empty;
        this.timeFinished = Date.now();
        this.failed = true;
        this.error_message = e;
        this.executed = true;
        this.newJobs = [];
        this.data = [];
    }

    markKnownEmptyPage() {
        this.known_empty = true;
    }

    removeKnownEmptyPage() {
        delete this.known_empty;
    }

    markKnownFailedPage() {
        this.knownFailed = true;
    }

    removeKnownFailedPage() {
        delete this.knownFailed;
    }

    isEmpty() {
        return !!this.empty;
    }

    isKnownEmpty() {
        return !!this.known_empty;
    }

    markAsEmpty() {
        delete this.failed;
        delete this.knownFailed;
        this.empty = true;
    }

    getDeduplicateFirstPageData() {
        return this.deduplicateFirstPageData;
    }
}

export {Job}