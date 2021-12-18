import * as r from "./BaseMiddleware.js"//r = i(33)
class RetryMiddleware extends r.BaseMiddleware {
    async handle(e, t, i) {
            let tx = await i();
            if(e.retry)
            {
                delete e.page_load_failed_with_status_code_error;
                delete e.retry;
                tx = await i();
            }
            return  tx;
    }
}

export {RetryMiddleware}