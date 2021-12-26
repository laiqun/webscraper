class UnrecoverablError extends Error {
    constructor(e) {
        super(e = `${UnrecoverablError.prefix} ${e}`);
    }
}

UnrecoverablError.prefix = "UNRECOVERABLE_ERROR";
export {UnrecoverablError}