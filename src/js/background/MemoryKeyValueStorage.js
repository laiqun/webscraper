class MemoryKeyValueStorage {
    constructor() {
        this.data = {};
    }

    get(e, defaultValue) {
        const value = this.data[e];
        return value || defaultValue;
    }

    set(e, t) {
        this.data[e] = t;
        return  Promise.resolve();
    }

    reset() {
        this.data = {};
        return  Promise.resolve();
    }
}

export {MemoryKeyValueStorage}