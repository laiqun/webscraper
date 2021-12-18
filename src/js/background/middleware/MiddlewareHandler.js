import * as r from "url-parse"//const r = i(48),
import * as a from "../JobRuntimeMetadata.js"//a = i(556);
class MiddlewareHandler {
    constructor(e) {
        this.currentDomain = "";
        this.middlewares = e;
    }

    async handle(e) {
        const jobRuntimeMetadata = new a.JobRuntimeMetadata;
        const func = async arg => {
            const middleware = this.middlewares[arg];
            const hostname = r(e.url).hostname;
            const s = this.currentDomain !== hostname;
            this.currentDomain = hostname;
            return await middleware.handle(e, jobRuntimeMetadata, func.bind(this, arg + 1), s);
        };
        return await func(0);
    }
}

export {MiddlewareHandler}