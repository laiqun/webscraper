class MemoryKeyValueStorage {
    constructor() {
        this.data = {};
    }

    get(key, defaultValue) {
        const value = this.data[key];
        return value || defaultValue;
    }

    set(key, value) {
        this.data[key] = value;
        return  Promise.resolve();
    }

    reset() {
        this.data = {};
        return  Promise.resolve();
    }
}

export {MemoryKeyValueStorage}