import * as r from "./idb-keyval-iife.min.js"//const r = i(593);
import {default as a} from "../../log/log.js";//a = i(5),

class IndexedDBKeyValueStorage {
    async get(e, t) {
        try {

            const i = await r.idbKeyval.get(e);
            return i || t;
        } catch (e) {
            a.error("an error occurred while fetching data from indexed db", {
                error: e.toString()
            });
            return  t;
        }
    }

    set(e, t) {
        try {
            return r.idbKeyval.set(e, t);
        } catch (e) {
            a.error("an error occurred while storing data", {
                error: e.toString()
            });
        }
    }

    reset() {
        return Promise.reject(new Error("reset not implemented"));
    }
}
export {IndexedDBKeyValueStorage}