import * as r from "./BaseMiddleware.js"//    const r = i(33);
class DataStorageMiddleware extends r.BaseMiddleware {
    constructor(e) {
        super();
        this.storage = e;
    }

    async handle(e, t, i) {
            const tx = await i();
            await this.storage.updateJob(e);
            return  tx;
    }
}

export {DataStorageMiddleware}
