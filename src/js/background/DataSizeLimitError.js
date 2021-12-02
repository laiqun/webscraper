class DataSizeLimitError extends Error {
    constructor(e, t) {
        super(e);
        this.size = t;
    }
}

export {DataSizeLimitError}