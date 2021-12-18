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

    setDataExtractionDuration(duration) {
        this.dataExtractionDuration = duration;
    }

    getDataExtractionDuration() {
        return this.dataExtractionDuration;
    }
}

export {JobRuntimeMetadata}