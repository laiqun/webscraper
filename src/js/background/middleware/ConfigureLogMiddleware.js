import {default as log} from "../../log/log.js";//r = i(5),
import * as a from "./BaseMiddleware.js"//const a = i(33);
class ConfigureLogMiddleware extends a.BaseMiddleware {
    handle(job, jobRuntimeMetadata, callback) {
        log.setUrl(job.url);
        return  callback();
    }
}


export {ConfigureLogMiddleware}