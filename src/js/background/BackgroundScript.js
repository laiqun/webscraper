//540  //i(i.s = 540);
//const //Scraper

import {Config} from "./Config.js"//a = i(542),
import {Scraper} from "./Scraper.js"//u = i(561),
import {WebPageChromeTab} from "./chromeOpt/WebPageChromeTab.js"//    y = i(618),
import {default as Log} from "../log/log.js";//c = i(5),
import {Sitemap} from "../common/Sitemap.js"//d = i(119),
import {default as Msg} from "../common/Msg.js"//, C = i(17)
import {SchemaOrgExtractor} from "../devtools/Selector/SchemaOrgExtractor.js"//s = i(218),
import {PouchDbStorage} from "./database/PouchDbStorage.js"//    f = i(564),
import {FirstTimeInstall} from "./install_uninstall/FirstTimeInstall.js"//    S = i(626),
import {UninstallSurvey} from "./install_uninstall/UninstallSurvey.js"// b = i(621),
import {RobotsTxt} from "./RobotsTxt.js"//    v = i(622),
import {CloudAuthenticationService} from "./CloudAuthenticationService.js"//A = i(628),
import {Stats} from "./Stats.js"//    h = i(562),
import {jobDbStorage} from "./database/JobDbStorage.js"//    p = i(563),
import {DataExtractor2} from "./DataExtractor2.js"//    o = i(498),
import {ChromeTabMiddlewareHandler} from "./middleware/ChromeTabMiddlewareHandler.js"//    l = i(544),
import {SurveyClient} from "./install_uninstall/SurveyClient.js"//    m = i(573),
import {ChromeClient} from "./chromeOpt/ChromeClient.js"//g = i(595),
import {MessageManager} from "./IM/MessageManager.js"//    w = i(623),
import {CloudApiClient} from "./CloudApiClient.js"//  M = i(629);

class BackgroundScript {
    constructor() {
        this.experimentalFeaturesEnabled = false;
        this.messageManager = new MessageManager;
        this.firstTimeInstall = new FirstTimeInstall("https://www.webscraper.io/web-scraper-first-time-install");
        //console.log("background script constructor");
    }

    async init() {
        //console.log("background script init");
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
        this.cloudApiClient = new CloudApiClient({
            authService: this.cloudAuthService  //cloudAuthService token
        });
        try {
            await this.initStats();
            const statId = this.stats.statId;
            const sitemap_count = await this.storage.getSitemapCount();
            const record_count = await this.storage.getRecordCount();
            this.surveyClient = new SurveyClient({
                statId: statId,
                userSitemapCount: sitemap_count,
                userRecordCount: record_count
            });
            const timeInstalled = await this.stats.getTimeInstalled();
            new UninstallSurvey({
                userSitemapCount: sitemap_count,
                userRecordCount: record_count,
                timeInstalled: timeInstalled
            }).init();
        } catch (exception) {
            Log.error("stat/survey client init error", {
                error: exception.toString(),
                stack: exception.stack
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
        return Promise.resolve();
    }

    async getExperimentalFeaturesEnabled() {
        return this.experimentalFeaturesEnabled;
    }

    async setExperimentalFeaturesEnabled(enable) {
        Log.info("experimental features changed", {
            enabled: enable
        });
        return this.experimentalFeaturesEnabled = enable;
    }

    async findSchemaOrgData(e) {
        const devtools_page = await this.getDevtoolsWebPage(e);
        const root_element = await devtools_page.getRootElement();
        const schemaOrgExtractor = new SchemaOrgExtractor;
        return await schemaOrgExtractor.findData(root_element);
    }

    async getSurvey() {
        return this.surveyClient.getSurvey();
    }

    async submitSurvey(e) {
        await this.surveyClient.submitSurvey(e);
    }

    initMessageListener() {//重点了，初始化完成后，就没有什么操作了，然后等着被调用
        Log.info("initializing Background Script message listener");
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
                    if (prev_async_func_out.stack)
                        reply_msg = {
                            success: false,
                            error: prev_async_func_out.toString() + ": " + prev_async_func_out.stack.toString()
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
        this.config = new Config;  //this.config.enpoint.port这个是客户端，服务端在MessageManager的backgroundPorts中保存
        //存放位置  this.config.fields //从chrome.storage.sync中拿信息 storageType sitemapDb dataDb enableDailyStats
        await this.config.loadConfiguration();
        Log.info("initial configuration", {
            config: JSON.stringify(this.config)
        });
    }

    initStorage() {
        this.storage = new PouchDbStorage(this.config);
        return this.storage.init();
    }

    initCloudAuthenticationService() {
        this.cloudAuthService = new CloudAuthenticationService;
        this.cloudAuthService.init();
    }

    async initStats() {
        try {
            this.stats = new Stats({
                store: this.storage,
                config: this.config
            });
            await this.stats.initStats();
            await this.stats.initReporter();
        } catch (exception) {
            Log.warning("indexed db initial connection error. ", {
                error: exception.toString()
            });
            try {
                await this.stats.initIndexedDbConnection();
                await this.stats.indexedDbDelete("daily_stats");
                await this.stats.indexedDbDelete("reporter");
                await this.stats.indexedDbDelete("statId");
                this.stats = new Stats({
                    store: this.storage,
                    config: this.config
                });
                await this.stats.initStats();
                await this.stats.initReporter();
            } catch (exception) {
                Log.warning("indexed db connection error. ", {
                    error: exception.toString()
                });
            }
        }
    }

    async getDevtoolsWebPage(tab_id) {
        const chromeClient = new ChromeClient({
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
        return new WebPageChromeTab({
            chromeClient: chromeClient
        });
    }

    async sitemapExists(e) {
        return this.storage.sitemapExists(e);
    }

    async createSitemap(e) {
        return this.storage.createSitemap(e);
    }

    async deleteSitemapDataDb(sitemap_id, destoryOldDB) {
        return this.storage.deleteSitemapDataDb(sitemap_id, destoryOldDB)
    }

    async deleteSitemap(sitemap_id) {
        return this.storage.deleteSitemap(sitemap_id);
    }

    async getSitemap(e) {
        if (!(await this.storage.sitemapExists(e)))
            if (await this.getSitemapSyncEnabled())
                await this.downloadSitemap(e);
        return await this.storage.getSitemap(e);
    }

    async updateSitemap(e) {
        return this.storage.updateSitemap(e);
    }

    async getDataPreviewSelectorData(tabid, selectorContext) {
        //console.log("getDataPreviewSelectorData");
        const sitemap = new Sitemap(selectorContext.sitemap);
        const devtoolsPage = await this.getDevtoolsWebPage(tabid);
        const devToolsElement = await devtoolsPage.getRootElement();
        const extractor2 = new DataExtractor2({
            sitemap: sitemap,
            parentSelectorId: undefined,
            parentElement: devToolsElement
        });
        const dataw = await extractor2.getSingleSelectorData(selectorContext.parentSelectorIds, selectorContext.selectorId);
        for (const data of dataw)
            delete data._deduplicateFirstPageData;
        await devtoolsPage.chromeClient.deInitMixins();
        Log.info("data extractor data", {
            data: JSON.stringify(dataw)
        });
        return dataw;
    }

    async getAllSelectorDataPreviewData(tabid, selectorContext) {
        const sitemap = new Sitemap(selectorContext.sitemap);
        const selectorPathElement = selectorContext.selectorPath[selectorContext.selectorPath.length - 1];
        const devToolsPage = await this.getDevtoolsWebPage(tabid);
        const rootElement = await devToolsPage.getRootElement();
        const parentElement = await rootElement.getParentElement(sitemap, selectorContext.selectorPath);
        const dataExtractor2 = new DataExtractor2({
            sitemap: sitemap,
            parentSelectorId: selectorPathElement,
            parentElement: parentElement
        });
        const AcquiredDataList = await dataExtractor2.getData();
        for (const data of AcquiredDataList)
            delete data._deduplicateFirstPageData;
        await devToolsPage.chromeClient.deInitMixins();
        return AcquiredDataList;
    }

    async performSelectorAction(e, t) {
        //var exception, a;
        const sitemap = new Sitemap(t.sitemap);
        const devToolsPage = await this.getDevtoolsWebPage(e);
        const rootElementOfDevToolsPage = await devToolsPage.getRootElement();
        const selectorById = sitemap.getSelectorById(t.selectorId);
        try {
            //var  u = await selectorById.getData(rootElementOfDevToolsPage);
            await selectorById.getData(rootElementOfDevToolsPage);

            /*
            for (var l, u = await c.getData(s); !(l = await u.next()).done;) {
                l.value;
            }*/
        } catch (exception) {
            throw exception;
        }/* finally {

            try {
                if(l && !l.done )
                    if(a = u.return)
                        await a.call(u);
            } finally {
                if (i)
                    throw i.error;
            }
        }*/
    }

    async getSitemapXmlLinksFromRobotsTxt(e) {
        const devToolsWebPage = await this.getDevtoolsWebPage(e);
        const root = await devToolsWebPage.getRootElement();
        const robotsTxt = new RobotsTxt;
        return await robotsTxt.getSitemapXmlLinksFromRobotsTxt(root);
    }

    async scrape(scrapeSetting) {
        const sitemap = new Sitemap(scrapeSetting.sitemap);
        const writer = await this.storage.initSitemapDataDb(sitemap._id, scrapeSetting.destroyOldDB);
        const jobdbStorage = new jobDbStorage({
            sitemap: sitemap,
            dataWriter: writer
        });
        const chromeClient = new ChromeClient({
            pageLoadDelay: scrapeSetting.pageLoadDelay,
            failOnErrorPages: true,
            blockImages: false,
            blockImagesWhitelistDomains: [],
            blockWebRTC: false,
            reloadPageBeforeHashTagChange: false
        });
        await chromeClient.init();
        const webPageChromeTab = new WebPageChromeTab({
            chromeClient: chromeClient
        });
        const scraper = new Scraper({
            storage: jobdbStorage,
            sitemap: sitemap,
            browser: webPageChromeTab,
            requestInterval: scrapeSetting.requestInterval,
            stats: this.stats
        });
        const chromeTabMiddleware = new ChromeTabMiddlewareHandler({
            storage: jobdbStorage,
            sitemap: sitemap,
            webPage: webPageChromeTab,
            stats: this.stats
        });
        try {
            await scraper.run(chromeTabMiddleware);
        } catch (e) {
            Log.error("Scraper error occurred", {
                error: Msg.getMessage(e),
                stack: e.stack
            });
        }
        chrome.notifications.create("scraping-finished", {
            type: "basic",
            iconUrl: "img/icon128.png",
            title: "Scraping finished!",
            message: "Finished scraping " + sitemap._id
        });
    }

    async getSitemapDataRange(sitemap_id, lastKey, count) {
        return await this.storage.getSitemapDataRange(sitemap_id, lastKey, count);
    }

    async getSitemapMetadata() {
        let meta_data = await this.storage.getAllSitemapMetadata();
        if (undefined !== (await this.cloudAuthService.apiToken)) {
            const sitemaps = await this.cloudApiClient.fetchSitemaps();
            meta_data = Array.prototype.concat(meta_data, sitemaps);
        }
        return meta_data;
    }

    async getSitemapSyncEnabled() {
        return !!(await this.cloudAuthService.apiToken);
    }

    async downloadSitemap(sitemap_name) {
        const info = await this.cloudApiClient.fetchSitemap(sitemap_name);
        const sitemap = new Sitemap(info);
        if (await this.storage.sitemapExists(sitemap_name))
            await this.storage.updateSitemap(sitemap);
        else
            await this.storage.createSitemap(sitemap);
    }

    async uploadSitemap(e) {
        const sitemap = await this.storage.getSitemap(e);
        delete sitemap._rev;
        await this.cloudApiClient.pushSitemap(sitemap);
    }

    async disconnectFromCloud() {
        await this.cloudAuthService.removeToken();
    }
}


export {BackgroundScript}