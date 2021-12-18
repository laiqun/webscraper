import {default as a} from "../log/log.js";//a = i(5),
import * as r from "../common/lib/jquery.js"//r = i(65),
import * as o from "../common/Sitemap.js"//o = i(119),
let Interval_Handle;

class Stats {
    constructor(e) {
        this.isInitialized = false;
        this.isEnabled = false;
        this.onConfigUpdate = this.onConfigUpdate.bind(this);
        this.extensionIsBeingUsedCheckIntervalTime = e.checkInterval || 30;
        this.store = e.store; //store sitemaps
        this.config = e.config;
        this.config.addOnUpdateListener(this.onConfigUpdate);
        this.usageStartTimes = {};
        this.randomFirstReportInMs = e.randomFirstReportInMs || 172800000;
        this.reportInMs = e.reportInMs || 259200000;
        this.potentialSubmitIntervalMs = e.potentialSubmitIntervalMs || 300000;
    }

    getDate(arg_date) {
        let date = undefined === arg_date ? new Date : new Date(arg_date);
        const Month = ("0" + (date.getMonth() + 1)).substr(-2);
        const day = ("0" + date.getDate()).substr(-2);
        return `${date.getFullYear()}-${Month}-${day}`;
    }

    async initStats() {
        this.isEnabled = await this.config.get("enableDailyStats");//远程过程调用;而且是background内部的调用
        if (!this.isEnabled)
            return Promise.resolve({});
        await this.initIndexedDbConnection();
        this.lastTimeStatsReported = await this.getLastTimeStatsReported();
        this.statId = await this.getStatId();
        await this.initDailyStats();
        this.isInitialized = true;
    }

    initIndexedDbConnection() {
        if (!this.isEnabled)
            return Promise.resolve({});
        return new Promise((resolve, reject) => {
            const indexDB = window.indexedDB.open("WebScraperStats", 1);
            indexDB.onupgradeneeded = () => {
                indexDB.result.createObjectStore("Stats", {
                    keyPath: "id"
                });
            };
            indexDB.onerror = arg => {
                reject("Database error: " + arg.toString());
            };
            indexDB.onsuccess = function (arg) {
                this.indexedDb = arg.target.result;
                resolve();
            }.bind(this);
        });
    }

    indexedDbPut(e, t) {
        if (!this.isEnabled)
            return Promise.resolve({});
        return new Promise((resolve, reject) => {
            const indexDB = this.indexedDb.transaction("Stats", "readwrite").objectStore("Stats").put({
                id: e,
                data: t
            });
            indexDB.onerror = e => {
                reject("Database get error: " + e.toString());
            };
            indexDB.onsuccess = e => {
                resolve();
            };
        });
    }

    indexedDbGet(e) {
        if (this.isEnabled) {
            return new Promise((resolve, reject) => {
                const indexDB = this.indexedDb.transaction("Stats", "readwrite").objectStore("Stats").get(e);
                indexDB.onerror = e => {
                    reject("Database get error: " + e.toString());
                };
                indexDB.onsuccess = arg => {
                    const result = arg.target.result;
                    if(undefined !== result && undefined !== result.data )
                        resolve(result.data);
                    else
                        resolve({});
                };
            });
        } else {
            return Promise.resolve({});
        }

    }

    indexedDbDelete(e) {
        if (this.isEnabled)
            return new Promise((resolve, reject) => {
                const indexDB = this.indexedDb.transaction("Stats", "readwrite").objectStore("Stats").delete(e);
                indexDB.onerror = e => {
                    a.error("Database error: ", {
                        error: e.toString()
                    });
                    resolve();
                };
                indexDB.onsuccess = e => {
                    resolve();
                };
            });
    }

    async initDailyStats() {
        if (!this.isEnabled)
            return;
        this.dailyStats = await this.indexedDbGet("daily_stats");
        const date = this.getDate();
        const couchDbUsed = await this.config.get("storageType").then(e => "local" !== e);
        this.initDailyStatDate(date, couchDbUsed);
    }

    initDailyStatDate(date, couchDbUsed) {
        if (!this.isEnabled)
            return;
        const version = this.getExtensionVersion();
        if (undefined === this.dailyStats[date])
            this.dailyStats[date] = {
                statId: this.statId,
                date: date,
                extensionVersion: version,
                couchDbUsed: couchDbUsed,
                moppet: !!window.navigator.webdriver,
                scrapingJobsRun: 0,
                pagesScraped: 0,
                sitemapsCreated: 0,
                sitemapsDeleted: 0,
                sitemapsImported: 0,
                webScraperOpened: false,
                webScraperUsageMinutes: 0
            };
    }

    getDailyStats() {
        if (!this.isEnabled)
            return [];
        const date = this.getDate();
        const result = [];
        for (const mapName in this.dailyStats) {
            if (mapName.match(/\d+\-\d+\-\d+/)) // is date  2020-1-1
                if (mapName !== date)
                    result.push(this.dailyStats[mapName]);
        }
        return result;
    }

    async setDailyStat(key, value) {
        if (!this.isEnabled)
            return;
        const date = this.getDate();
        const couchDbUsed = await this.config.get("storageType").then(e => "local" !== e);
        this.initDailyStatDate(date, couchDbUsed);
        this.dailyStats[date][key] = value;
        return this.updateDailyStats();
    }

    async incrementDailyStat(key, num = 1) {
        if (!this.isEnabled)
            return;
        const date = this.getDate();
        const couchDbUsed = await this.config.get("storageType").then(e => "local" !== e);
        this.initDailyStatDate(date, couchDbUsed);
        if (!this.dailyStats[date][key])
            this.dailyStats[date][key] = 0;
        this.dailyStats[date][key] += num;
        return this.updateDailyStats();
    }

    updateExtensionIsBeingUsed() {
        if (!this.isEnabled)
            return;
        const date = this.getDate();
        const time_start = Math.round(Date.now() / 1000);
        if (undefined === this.usageStartTimes[date]) {
            this.usageStartTimes[date] = {
                timeStarted: time_start,
                lastUpdated: time_start,
                checkInterval: undefined
            };
            this.startExtensionIsBeingUsedCheckInterval(date);
        } else
            this.usageStartTimes[date].lastUpdated = time_start;
    }

    startExtensionIsBeingUsedCheckInterval(e) {
        if (!this.isEnabled)
            return;
        this.usageStartTimes[e].checkInterval = window.setInterval(async ()=> {
            const t = Math.round(Date.now() / 1000);
            if (this.usageStartTimes[e].lastUpdated + 65 < t) {
                const i = Math.round((t - this.usageStartTimes[e].timeStarted) / 60);
                await this.incrementDailyStat("webScraperUsageMinutes", i);
                clearInterval(this.usageStartTimes[e].checkInterval);
                delete this.usageStartTimes[e];
            }
        }, 1000 * this.extensionIsBeingUsedCheckIntervalTime);
    }

    updateDailyStats() {
        if (!this.isEnabled)
            return;
        return this.indexedDbPut("daily_stats", this.dailyStats);
    }

    getExtensionVersion() {
        if (!this.isEnabled)
            return "";
        return chrome.runtime.getManifest().version;
    }

    async getDatabaseStats() {
        if (!this.isEnabled)
            return Promise.resolve({});
        const store = this.store;
        const sitemaps = (await store.getAllSitemaps()).map(e => new o.Sitemap(e));
        const couchDbUsed = await this.config.get("storageType").then(e => "local" !== e);
        const version = this.getExtensionVersion();
        const result = {
            statId: this.statId,
            couchDBUsed: couchDbUsed,
            sitemapCount: 0,
            extensionVersion: version,
            selectorCountPerSitemap: {
                "1-1": 0,
                "2-5": 0,
                "6-10": 0,
                "11+": 0
            },
            startUrlCountPerSitemap: {
                "1-1": 0,
                "2-5": 0,
                "6-10": 0,
                "11-50": 0,
                "51-200": 0,
                "201-500": 0,
                "501-1000": 0,
                "1001-5000": 0,
                "5001+": 0
            },
            selectorUsageCount: {
                SelectorElement: 0,
                SelectorElementAttribute: 0,
                SelectorElementClick: 0,
                SelectorElementScroll: 0,
                SelectorGroup: 0,
                SelectorHTML: 0,
                SelectorImage: 0,
                SelectorLink: 0,
                SelectorPopupLink: 0,
                SelectorTable: 0,
                SelectorText: 0
            },
            datasetSizes: {
                "1-1": 0,
                "2-5": 0,
                "6-10": 0,
                "11-50": 0,
                "51-200": 0,
                "201-500": 0,
                "501-1000": 0,
                "1001-5000": 0,
                "5001-10000": 0,
                "10001+": 0
            }
        };

        function lookup(key, count) {//划分到区间段； 类似(优秀，良好，及格，不及格的划分)
            const stage_map = {
                selectorCountPerSitemap: {
                    "1-1": {
                        min: 1,
                        max: 1
                    },
                    "2-5": {
                        min: 2,
                        max: 5
                    },
                    "6-10": {
                        min: 6,
                        max: 10
                    },
                    "11+": {
                        min: 1,
                        max: 2147483647
                    }
                },
                startUrlCountPerSitemap: {
                    "1-1": {
                        min: 1,
                        max: 1
                    },
                    "2-5": {
                        min: 2,
                        max: 5
                    },
                    "6-10": {
                        min: 6,
                        max: 10
                    },
                    "11-50": {
                        min: 11,
                        max: 50
                    },
                    "51-200": {
                        min: 51,
                        max: 200
                    },
                    "201-500": {
                        min: 201,
                        max: 500
                    },
                    "501-1000": {
                        min: 501,
                        max: 1e3
                    },
                    "1001-5000": {
                        min: 1e3,
                        max: 5e3
                    },
                    "5001+": {
                        min: 5001,
                        max: 2147483647
                    }
                },
                datasetSizes: {
                    "1-1": {
                        min: 1,
                        max: 1
                    },
                    "2-5": {
                        min: 2,
                        max: 5
                    },
                    "6-10": {
                        min: 6,
                        max: 10
                    },
                    "11-50": {
                        min: 11,
                        max: 50
                    },
                    "51-200": {
                        min: 51,
                        max: 200
                    },
                    "201-500": {
                        min: 201,
                        max: 500
                    },
                    "501-1000": {
                        min: 501,
                        max: 1e3
                    },
                    "1001-5000": {
                        min: 1e3,
                        max: 5e3
                    },
                    "5001-10000": {
                        min: 5001,
                        max: 1e4
                    },
                    "10001+": {
                        min: 10001,
                        max: 2147483647
                    }
                }
            };
            for (const stageIndex in stage_map[key]) {
                const stage = stage_map[key][stageIndex];
                if (count >= stage.min && count <= stage.max) {
                    result[key][stageIndex]++;
                    break;
                }
            }
        }

        result.sitemapCount = sitemaps.length;
        for (const sitemap of sitemaps) {
            lookup("selectorCountPerSitemap", sitemap.selectors.length);
            sitemap.selectors.forEach(e => {
                result.selectorUsageCount[e.type]++;
            });
            lookup("startUrlCountPerSitemap", sitemap.getStartUrls().length);
            lookup("datasetSizes", (await store.getSitemapData(sitemap._id)).length);
        }
        return result;
    }

    async getStats() {
        if (!this.isEnabled)
            return Promise.resolve({});
        return {
            databaseStats: await this.getDatabaseStats(),
            dailyStats: await this.getDailyStats()
        };
    }

    async getLastTimeStatsReported() {
        if (!this.isEnabled)
            return Promise.resolve(0);
        const reporterDB = await this.indexedDbGet("reporter");
        if (undefined !== reporterDB.timeLastReported)
            return reporterDB.timeLastReported;
        const date_now = Date.now();
        const timeLastReported = Math.round(date_now - Math.random() * this.randomFirstReportInMs);//相当于往前推了2天
        await this.setLastTimeStatsReported(timeLastReported);
        return date_now;
    }

    setLastTimeStatsReported(timeLastReported) {
        if (!this.isEnabled)
            return;
        this.lastTimeStatsReported = timeLastReported;
        const pkg = {
            timeLastReported: timeLastReported
        };
        return this.indexedDbPut("reporter", pkg);
    }

    async getStatId() {
        console.log("getStatId");
        if (!this.isEnabled)
            return "";
        else {
            return new Promise(resolve => {
                chrome.storage.sync.get(["statId"], async arg => {
                    if (undefined !== arg && undefined !== arg.statId)
                        resolve(arg.statId);
                    else {
                        if (undefined=== arg) {
                            const have_error = chrome.runtime.lastError;
                            if(have_error)
                                a.notice(have_error.toString());
                        }
                        let {statId: stat_id} = await this.indexedDbGet("statId");
                        if(!stat_id)
                            stat_id = this.generateStatId();
                        chrome.storage.sync.set({
                            statId: stat_id
                        }, () => {
                            const have_error = chrome.runtime.lastError;
                            if(have_error)
                                a.notice(have_error.toString());
                        });
                        resolve(stat_id);
                    }
                });
            })
        }
    }

    async getTimeInstalled() {
        if (!this.isEnabled)
            return 0;
        const e = await this.indexedDbGet("timeInstalled");
        if (undefined !== e.timeInstalled)
            return e.timeInstalled;
        const timestamp_mins = Math.floor(Date.now() / 1000);
        const pkg = {
            timeInstalled: timestamp_mins
        };
        await this.indexedDbPut("timeInstalled", pkg);
        return timestamp_mins;
    }

    async initReporter() {
        if(this.isEnabled)
            return ;
        this.stopReporter();
        Interval_Handle = setInterval(async () => {
            const date_time_now = Date.now();
            if (this.lastTimeStatsReported + this.reportInMs >= date_time_now)
                return;
            await this.reportStats();
            const date_now = Date.now();
            await this.setLastTimeStatsReported(date_now);
            await this.resetDailyStats();
        }, this.potentialSubmitIntervalMs);
    }

    stopReporter() {
        if(this.isEnabled)
            clearInterval(Interval_Handle);
    }

    resetDailyStats() {
        if (!this.isEnabled) return;
        const date = this.getDate();
        for (const map_name in this.dailyStats)
            if (map_name.match(/\d+\-\d+\-\d+/) && map_name !== date)
                delete this.dailyStats[map_name];
        return this.updateDailyStats();
    }

    async reportStats() {
        if (!this.isEnabled)
            return;
        const stats = await this.getStats();
        return new Promise((resolve, reject) => {
            r.ajax({
                type: "POST",
                url: "https://stats.webscraper.io/post-stats",
                data: JSON.stringify({
                    data: stats
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: arg => {
                    resolve(arg);
                },
                error: arg => {
                    reject("failed to report stats " + arg.toString());
                }
            });
        });
    }

    onConfigUpdate(e) {
        this.isEnabled = e.enableDailyStats;
    }

    generateStatId() {
        let result = "";
        const char_pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let index = 1; index <= 60; index++)
            result += char_pool.charAt(Math.floor(Math.random() * char_pool.length));
        return result;
    }
}

export {Stats}