import {default as r} from "../../log/log.js";//r = i(5),
import * as a from "./BaseMiddleware.js"//const a = i(33);
class ConfigureLogMiddleware extends a.BaseMiddleware {
    handle(e, t, i) {
        r.setUrl(e.url);
        return  i();
    }
}


export {ConfigureLogMiddleware}