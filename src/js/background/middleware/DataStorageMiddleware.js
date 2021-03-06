import {BaseMiddleware} from "./BaseMiddleware.js"//    const r = i(33);
class DataStorageMiddleware extends BaseMiddleware {
    constructor(storage) {
        super();
        this.storage = storage;
    }

    async handle(job, jobRuntimeInfo, callback) {
            const tx = await callback();
            await this.storage.updateJob(job);
            return  tx;
    }
}

export {DataStorageMiddleware}
