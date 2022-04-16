import {idbKeyval} from "./idb-keyval-iife.min.js"//const r = i(593);
import {default as Log} from "../../log/log.js";//a = i(5),

class IndexedDBKeyValueStorage {
    async get(key, defaultValue) {
        try {

            const value = await idbKeyval.get(key);
            return value || defaultValue;
        } catch (e) {
            Log.error("an error occurred while fetching data from indexed db", {
                error: e.toString(),
                stack:e.stack
            });
            return  defaultValue;
        }
    }

    set(key, value) {
        try {
            return idbKeyval.set(key, value);
        } catch (e) {
            Log.error("an error occurred while storing data", {
                error: e.toString(),
                stack:e.stack
            });
        }
    }

    reset() {
        return Promise.reject(new Error("reset not implemented"));
    }
}
export {IndexedDBKeyValueStorage}