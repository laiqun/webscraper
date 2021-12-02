class UnrecoverablError extends Error {
    constructor(e) {
        super(e = `${n.prefix} ${e}`);
    }
}

UnrecoverablError.prefix = "UNRECOVERABLE_ERROR";
export {UnrecoverablError}