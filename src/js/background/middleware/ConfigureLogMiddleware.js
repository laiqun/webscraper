import {default as Log} from "../../log/log.js";//r = i(5),
import {BaseMiddleware} from "./BaseMiddleware.js"//const a = i(33);
class ConfigureLogMiddleware extends BaseMiddleware {
    handle(job, jobRuntimeMetadata, callback) {
        Log.setUrl(job.url);
        return  callback();
    }
}


export {ConfigureLogMiddleware}