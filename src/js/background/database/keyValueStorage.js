import * as e from "process/browser"
import * as r from "./MemoryKeyValueStorage.js"//, r = i(594);
import * as n from "./IndexedDBKeyValueStorage.js"//const n = i(592)
let keyValueStorage = new class {
    constructor() {
        console.log("oooooo");
        console.log(e.version);
        console.log("xxxxxx");
        e.version ? this.driver = new r.MemoryKeyValueStorage : this.driver = new n.IndexedDBKeyValueStorage;
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
