import * as r from "./idb-keyval-iife.min.js"//const r = i(593);
import {default as log} from "../../log/log.js";//a = i(5),

class IndexedDBKeyValueStorage {
    async get(key, defaultValue) {
        try {

            const value = await r.idbKeyval.get(key);
            return value || defaultValue;
        } catch (e) {
            log.error("an error occurred while fetching data from indexed db", {
                error: e.toString()
            });
            return  defaultValue;
        }
    }

    set(key, value) {
        try {
            return r.idbKeyval.set(key, value);
        } catch (e) {
            log.error("an error occurred while storing data", {
                error: e.toString()
            });
        }
    }

    reset() {
        return Promise.reject(new Error("reset not implemented"));
    }
}
export {IndexedDBKeyValueStorage}