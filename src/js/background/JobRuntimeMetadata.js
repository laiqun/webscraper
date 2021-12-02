class JobRuntimeMetadata {
    constructor() {
        this.proxyHasChanged = false;
    }

    hasProxyChanged() {
        return this.proxyHasChanged;
    }

    markProxyHasChanged() {
        this.proxyHasChanged = true;
    }

    removeProxyHasChanged() {
        this.proxyHasChanged = false;
    }

    setDataExtractionDuration(e) {
        this.dataExtractionDuration = e;
    }

    getDataExtractionDuration() {
        return this.dataExtractionDuration;
    }
}

export {JobRuntimeMetadata}