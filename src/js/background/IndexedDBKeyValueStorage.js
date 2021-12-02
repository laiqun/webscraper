import * as r from "./idb-keyval-iife.min.js"//const r = i(593);
import {default as a} from "../contentjs/log.js";//a = i(5),
class IndexedDBKeyValueStorage {
    async get(e, t) {
        try {
            const i = await r.get(e);
            return i || t;
        } catch (e) {
            return a.error("an error occurred while fetching data from indexed db", {
                error: e.toString()
            }), t;
        }
    }

    set(e, t) {
        try {
            return r.set(e, t);
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