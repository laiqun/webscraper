//540  //i(i.s = 540);
//const //Scraper

import * as a from "./Config.js"//a = i(542),
import * as u from "./Scraper.js"//u = i(561),
import * as y from "./chromeOpt/WebPageChromeTab.js"//    y = i(618),
import {default as c} from "../log/log.js";//c = i(5),
import * as d from "../common/Sitemap.js"//d = i(119),
import {default as C} from "../common/Msg.js"//, C = i(17)
import * as s from "../devtools/Selector/SchemaOrgExtractor.js"//s = i(218),
import * as f from "./database/PouchDbStorage.js"//    f = i(564),
import * as S from "./install_uninstall/FirstTimeInstall.js"//    S = i(626),
import * as b from "./install_uninstall/UninstallSurvey.js"// b = i(621),
import * as v from "./RobotsTxt.js"//    v = i(622),
import * as A from "./CloudAuthenticationService.js"//A = i(628),
import * as h from "./Stats.js"//    h = i(562),
import * as p from "./database/BrowserPouchDbStorage.js"//    p = i(563),
import * as o from "./DataExtractor2.js"//    o = i(498),
import * as l from "./middleware/ChromeTabMiddlewareHandler.js"//    l = i(544),
import * as m from "./install_uninstall/SurveyClient.js"//    m = i(573),
import * as g from "./chromeOpt/ChromeClient.js"//g = i(595),
import * as w from "./IM/MessageManager.js"//    w = i(623),
import * as M from "./CloudApiClient.js"//  M = i(629);
class BackgroundScript {
    constructor() {
        this.experimentalFeaturesEnabled = false;
        this.messageManager = new w.MessageManager;
        this.firstTimeInstall = new S.FirstTimeInstall("https://www.webscraper.io/web-scraper-first-time-install");
        console.log("background script constructor");
    }

    async init() {
        console.log("background script init");
        this.messageManager.init();//注册了3个事件监听 runtime.onConnect tabsRemove InternalRuntime.onConnect
        /* 创建config实例的时候，会调用applyControler，创建InComing，name参数为"config"
        //InCombing调用基类初始化函数，EndPointBase，其初始化函数会调用initPort
        //init判断当前如果是background，则调用InternalRuntime的connect函数
        //connect函数，会调用portFactory，得到client和server，返回client；
        // connect函数的，this.onConnect为BackgroundEvent ，本质是一个事件管理器，其中有个存放callback的数组
        // 里面的callback函数为handleBackgroundConnection；//在this.messageManager.init(); 中进行注册
        // this.internalRuntime.onConnect.addListener(this.handleBackgroundConnection);//添加callbacks，文件MessageManager.js
        */
        await this.initConfiguration();
        await this.initStorage();
        this.initMessageListener();//监听短消息  chrome.runtime.onMessage.addListener
        this.initCloudAuthenticationService();//cloudAuthService
        this.cloudApiClient = new M.CloudApiClient({
            authService: this.cloudAuthService  //cloudAuthService token
        });
        try {
            await this.initStats();
            const statId = this.stats.statId;
            const sitemap_count = await this.storage.getSitemapCount();
            const record_count = await this.storage.getRecordCount();
            this.surveyClient = new m.SurveyClient({
                statId: statId,
                userSitemapCount: sitemap_count,
                userRecordCount: record_count
            });
            const timeInstalled = await this.stats.getTimeInstalled();
            new b.UninstallSurvey({
                userSitemapCount: sitemap_count,
                userRecordCount: record_count,
                timeInstalled: timeInstalled
            }).init();
        } catch (exception) {
            c.error("stat/survey client init error", {
                error: exception.toString()
            });
        }
    }

    async ping(e) {
        return e + " pong";
    }
    /*
    this.stats.incrementDailyStat("pagesScraped", 1);
    this.incrementDailyStat("webScraperUsageMinutes", i)
    incrementDailyStat("sitemapsDeleted", 1);
    incrementDailyStat("sitemapsCreated", 1)
    incrementDailyStat("sitemapsImported", 1);
    incrementDailyStat("scrapingJobsRun", 1);
    * */
    async incrementDailyStat(key, number) {
        return this.stats.incrementDailyStat(key, number);
    }

    async setDailyStat(key, value) {
        /*  e可选的值
            statId: this.statId,
            date: e,
            extensionVersion: i,
            couchDbUsed: t,
            moppet: !!window.navigator.webdriver,
            scrapingJobsRun: 0,
            pagesScraped: 0,
            sitemapsCreated: 0,
            sitemapsDeleted: 0,
            sitemapsImported: 0,
            webScraperOpened: false,
            webScraperUsageMinutes: 0
        * */
        return this.stats.setDailyStat(key, value);
    }

    async updateExtensionIsBeingUsed() {
        this.stats.updateExtensionIsBeingUsed();
        return  Promise.resolve();
    }

    async getExperimentalFeaturesEnabled() {
        return this.experimentalFeaturesEnabled;
    }

    async setExperimentalFeaturesEnabled(enable) {
        c.info("experimental features changed", {
            enabled: enable
        });
        return  this.experimentalFeaturesEnabled = enable;
    }

    async findSchemaOrgData(e) {
        const devtools_page = await this.getDevtoolsWebPage(e);
        const root_element = await devtools_page.getRootElement();
        const schemaOrgExtractor = new s.SchemaOrgExtractor;
        return await schemaOrgExtractor.findData(root_element);
    }

    async getSurvey() {
        return this.surveyClient.getSurvey();
    }

    async submitSurvey(e) {
        await this.surveyClient.submitSurvey(e);
    }

    initMessageListener() {//重点了，初始化完成后，就没有什么操作了，然后等着被调用
        c.info("initializing Background Script message listener");
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            let reply_msg;
            try {
                this[message.method].apply(this, message.params).then(prev_async_func_out => {
                    reply_msg = {
                        success: true,
                        response: prev_async_func_out
                    };
                    sendResponse(reply_msg);
                }).catch(prev_async_func_out => {
                    if(prev_async_func_out.stack)
                        reply_msg = {
                            success: false,
                            error: prev_async_func_out.toString()+": "+prev_async_func_out.stack.toString()
                        };
                    else
                        reply_msg = {
                            success: false,
                            error: prev_async_func_out.toString()
                        };
                    sendResponse(reply_msg);
                });
            } catch (exception) {
                reply_msg = {
                    success: false,
                    error: exception.toString()
                };
                sendResponse(reply_msg);
            }
            return true;
        });
    }
/*
enpoint://这个是通过包装函数得到的
    callbacks: {}
    messageIdIncrement: 0
    name: "config"
    pendingMessages: {}
    port: {name: "config", onMessage: {…}}
fields:
    dataDb: ""
    enableDailyStats: true
    sitemapDb: "scraper-sitemaps"
    storageType: "local"

onUpdateCallbacks: Array(0)

_defaults:
    dataDb: ""
    enableDailyStats: true
    sitemapDb: "scraper-sitemaps"
    storageType: "local"


* */
    async initConfiguration() {
        this.config = new a.Config;  //this.config.enpoint.port这个是客户端，服务端在MessageManager的backgroundPorts中保存
        //存放位置  this.config.fields //从chrome.storage.sync中拿信息 storageType sitemapDb dataDb enableDailyStats
        await this.config.loadConfiguration();
        c.info("initial configuration", {
            config: JSON.stringify(this.config)
        });
    }

    initStorage() {
        this.storage = new f.PouchDbStorage(this.config);
        return  this.storage.init();
    }

    initCloudAuthenticationService() {
        this.cloudAuthService = new A.CloudAuthenticationService;
        this.cloudAuthService.init();
    }

    async initStats() {
        try {
            this.stats = new h.Stats({
                store: this.storage,
                config: this.config
            });
            await this.stats.initStats();
            await this.stats.initReporter();
        } catch (exception) {
            c.warning("indexed db initial connection error. ", {
                error: exception.toString()
            });
            try {
                await this.stats.initIndexedDbConnection();
                await this.stats.indexedDbDelete("daily_stats");
                await this.stats.indexedDbDelete("reporter");
                await this.stats.indexedDbDelete("statId");
                this.stats = new h.Stats({
                    store: this.storage,
                    config: this.config
                });
                await this.stats.initStats();
                await this.stats.initReporter();
            } catch (exception) {
                c.warning("indexed db connection error. ", {
                    error: exception.toString()
                });
            }
        }
    }

    async getDevtoolsWebPage(tab_id) {
        const chromeClient = new g.ChromeClient({
            tabId: tab_id,
            pageLoadDelay: 2000,
            blockImages: false,
            blockImagesWhitelistDomains: [],
            blockWebRTC: false,
            failOnErrorPages: true,
            reloadPageBeforeHashTagChange: false
        });
        await chromeClient.init();
        await chromeClient.setNetworkListenerPageAlmostLoaded();
        return new y.WebPageChromeTab({
            chromeClient: chromeClient
        });
    }

    async sitemapExists(e) {
        return this.storage.sitemapExists(e);
    }

    async createSitemap(e) {
        return this.storage.createSitemap(e);
    }

    async deleteSitemap(e) {
        return this.storage.deleteSitemap(e);
    }

    async getSitemap(e) {
        if(!(await this.storage.sitemapExists(e)) )
            if(await this.getSitemapSyncEnabled() )
                await this.downloadSitemap(e);
        return await this.storage.getSitemap(e);
    }

    async updateSitemap(e) {
        return this.storage.updateSitemap(e);
    }

    async getDataPreviewSelectorData(tabid, selectorContext) {
        console.log("getDataPreviewSelectorData");
        const sitemap = new d.Sitemap(selectorContext.sitemap);
        const devtoolsPage = await this.getDevtoolsWebPage(tabid);
        const devToolsElement = await devtoolsPage.getRootElement();
        const extractor2 = new o.DataExtractor2({
                sitemap: sitemap,
                parentSelectorId: undefined,
                parentElement: devToolsElement
            });
        const dataw = await extractor2.getSingleSelectorData(selectorContext.parentSelectorIds, selectorContext.selectorId);
        for (const data of dataw)
            delete data._deduplicateFirstPageData;
        await devtoolsPage.chromeClient.deInitMixins();
        c.info("data extractor data", {
            data: JSON.stringify(dataw)
        });
        return dataw;
    }

    async getAllSelectorDataPreviewData(tabid, selectorContext) {
        const sitemap = new d.Sitemap(selectorContext.sitemap);
        const selectorPathElement = selectorContext.selectorPath[selectorContext.selectorPath.length - 1];
        const devToolsPage = await this.getDevtoolsWebPage(tabid);
        const rootElement = await devToolsPage.getRootElement();
        const parentElement = await rootElement.getParentElement(sitemap, selectorContext.selectorPath);
        const dataExtractor2 = new o.DataExtractor2({
                sitemap: sitemap,
                parentSelectorId: selectorPathElement,
                parentElement: parentElement
            });
        const datas = await dataExtractor2.getData();
        for (const data of datas)
            delete data._deduplicateFirstPageData;
        await devToolsPage.chromeClient.deInitMixins();
        return datas;
    }

    async performSelectorAction(e, t) {
        var i, a;
        const n = new d.Sitemap(t.sitemap);
        const o = await this.getDevtoolsWebPage(e);
        const s = await o.getRootElement();
        const c = n.getSelectorById(t.selectorId);
        try {
            var  u = await c.getData(s);

            /*
            for (var l, u = await c.getData(s); !(l = await u.next()).done;) {
                l.value;
            }*/
        } catch (e) {
            i = {
                error: e
            };
        } finally {
            /*
            try {
                if(l && !l.done )
                    if(a = u.return)
                        await a.call(u);
            } finally {
                if (i)
                    throw i.error;
            }*/
        }
    }

    async getSitemapXmlLinksFromRobotsTxt(e) {
        const t = await this.getDevtoolsWebPage(e);
        const root = await t.getRootElement();
        const n = new v.RobotsTxt;
        return await n.getSitemapXmlLinksFromRobotsTxt(root);
    }

    async scrape(e) {
        const sitemap = new d.Sitemap(e.sitemap);
        const writer = await this.storage.initSitemapDataDb(sitemap._id);
        const dbStorage = new p.BrowserPouchDbStorage({
                sitemap: sitemap,
                dataWriter: writer
            });
        const chromeClient = new g.ChromeClient({
                pageLoadDelay: e.pageLoadDelay,
                failOnErrorPages: true,
                blockImages: false,
                blockImagesWhitelistDomains: [],
                blockWebRTC: false,
                reloadPageBeforeHashTagChange: false
            });
        await chromeClient.init();
        const a = new y.WebPageChromeTab({
            chromeClient: chromeClient
        });
        const scraper = new u.Scraper({
            storage: dbStorage,
            sitemap: sitemap,
            browser: a,
            requestInterval: e.requestInterval,
            stats: this.stats
        });
        const chromeTabMiddleware = new l.ChromeTabMiddlewareHandler({
            storage: dbStorage,
            sitemap: sitemap,
            webPage: a,
            stats: this.stats
        });
        try {
            await scraper.run(chromeTabMiddleware);
        } catch (e) {
            c.error("Scraper error occurred", {
                error: C.getMessage(e)
            });
        }
        chrome.notifications.create("scraping-finished", {
            type: "basic",
            iconUrl: "img/icon128.png",
            title: "Scraping finished!",
            message: "Finished scraping " + sitemap._id
        });
    }

    async getSitemapDataRange(e, t, i) {
        this.storage;
        return await this.storage.getSitemapDataRange(e, t, i);
    }

    async getSitemapMetadata() {
        let meta_data = await this.storage.getAllSitemapMetadata();
        if (undefined !== (await this.cloudAuthService.apiToken)) {
            const t = await this.cloudApiClient.fetchSitemaps();
            meta_data = Array.prototype.concat(meta_data, t);
        }
        return meta_data;
    }

    async getSitemapSyncEnabled() {
        return !!(await this.cloudAuthService.apiToken);
    }

    async downloadSitemap(sitemap_name) {
        const info = await this.cloudApiClient.fetchSitemap(sitemap_name);
        const sitemap = new d.Sitemap(info);
        if(await this.storage.sitemapExists(sitemap_name))
            await this.storage.updateSitemap(sitemap);
        else
            await this.storage.createSitemap(sitemap);
    }

    async uploadSitemap(e) {
        const t = await this.storage.getSitemap(e);
        delete t._rev;
        await this.cloudApiClient.pushSitemap(t);
    }

    async disconnectFromCloud() {
        await this.cloudAuthService.removeToken();
    }
}


export {BackgroundScript}