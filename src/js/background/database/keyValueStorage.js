import * as processBrowser from "process/browser"
import {MemoryKeyValueStorage} from "./MemoryKeyValueStorage.js"//, r = i(594);
import {IndexedDBKeyValueStorage} from "./IndexedDBKeyValueStorage.js"//const n = i(592)
let keyValueStorage = new class {
    constructor() {
       // console.log("oooooo");
       // console.log(e.version);
       // console.log("xxxxxx");
        processBrowser.version ? this.driver = new MemoryKeyValueStorage : this.driver = new IndexedDBKeyValueStorage;
    }

    get(e, t) {
        return this.driver.get(e, t);
    }

    set(e, t) {
        return this.driver.set(e, t);
    }

    reset() {
        return this.driver.reset();
    }
};

export {keyValueStorage}
