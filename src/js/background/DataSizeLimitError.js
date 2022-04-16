class DataSizeLimitError extends Error {
    constructor(e, size) {
        super(e);
        this.size = size;
    }
}

export {DataSizeLimitError}