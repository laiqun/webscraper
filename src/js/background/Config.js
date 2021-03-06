import {default as Log} from "../log/log.js";//o = i(5),
import {Targets} from "../contentjs/HighlightOverly/Targets.js"//,  l = i(73);
import {storageTypes} from "./database/storageTypes.js"
import {applyController} from "../common/RPC/applyController";
//const s = i(246)
let Config = class {
    constructor() {
        this._defaults = {
            storageType: storageTypes.local,
            sitemapDb: "scraper-sitemaps",
            dataDb: "",
            enableDailyStats: true,
            loggingLevels: 4
        };
        this.mapItemsToFields = this.mapItemsToFields.bind(this);
        this.onUpdateCallbacks = [];
    }

    async loadConfiguration() {
        return new Promise(resolve => {
            chrome.storage.sync.get(Object.keys(this.defaults), args => {
                if (undefined === args) {
                    const lastError = chrome.runtime.lastError;
                    lastError && Log.notice(lastError.toString());
                    args = {};
                }
                this.mapItemsToFields(args);
                resolve();
            });
        });
    }

    addOnUpdateListener(e) {
        this.onUpdateCallbacks.push(e);
    }

    async get(e) {
        if (undefined === this.fields) {
            await this.loadConfiguration().catch(arg => {
                Log.error(arg);
                this.fields = this.defaults;
            });
        }
        return Promise.resolve(this.fields[e]);
    }

    async set(key, value) {
        Log.info(key.toString()+":"+value.toString());
        if(undefined === this.fields )
            await this.loadConfiguration();
        return  new Promise(resolve => {
            chrome.storage.sync.set({
                [key]: value
            }, () => {
                const lastError = chrome.runtime.lastError;
                if(lastError)
                    Log.error("Couldn't set config value", {
                        error: lastError.toString()
                    });
                this.fields[key] = value;
                this.onUpdate();
                resolve();
            });
        });
    }

    onUpdate() {
        for (const e of this.onUpdateCallbacks)
            e(this.fields);
    }

    mapItemsToFields(input_map) {
        const temp_fields = {};
        for (const key in this.defaults)
            if(undefined !== input_map[key] )
                temp_fields[key] = input_map[key]
            else
                temp_fields[key] = this.defaults[key];
        this.handleFieldSpecificCases(temp_fields);
        this.fields = temp_fields;
    }

    handleFieldSpecificCases(temp_fields) {
        if("local" === temp_fields.storageType )
        {
            temp_fields.sitemapDb = this.defaults.sitemapDb;
            temp_fields.dataDb = this.defaults.dataDb;
        }
    }

    get defaults() {
        return this._defaults;
    }
};

let extFunc = applyController(Targets.config);//popup???????????????????????????background????????????
let outputClass = extFunc(Config);
//Config = n([c.applyController(l.Targets.config), r("design:paramtypes", [])], Config);

export {outputClass as Config};