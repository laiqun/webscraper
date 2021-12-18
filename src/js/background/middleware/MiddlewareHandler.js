import * as URLParse from "url-parse"//const r = i(48),
import * as a from "./JobRuntimeMetadata.js"//a = i(556);
class MiddlewareHandler {
    constructor(meddlers) {
        this.currentDomain = "";
        this.middlewares = meddlers;
    }

    async handle(jobs) {
        const jobRuntimeMetadata = new a.JobRuntimeMetadata;
        const func = async middlewareIndex => {
            const middleware = this.middlewares[middlewareIndex];
            const hostname = URLParse(jobs.url).hostname;
            const s = this.currentDomain !== hostname;
            this.currentDomain = hostname;
            return await middleware.handle(jobs, jobRuntimeMetadata, func.bind(this, middlewareIndex + 1), s);
        };
        return await func(0);
    }
}

export {MiddlewareHandler}