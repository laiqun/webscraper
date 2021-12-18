import * as r from "./BaseMiddleware.js"//r = i(33)
class RetryMiddleware extends r.BaseMiddleware {
    async handle(job, jobRuntimeInfo, callback) {
            let tx = await callback();
            if(job.retry)
            {
                delete job.page_load_failed_with_status_code_error;
                delete job.retry;
                tx = await callback();
            }
            return  tx;
    }
}

export {RetryMiddleware}