//670  module 522 appState
//appState = t.AppState = void 0;  //main
//const /**/ /*, mobx-react-router */ /*, , , */
//     y = i(524);
import * as mobx_react_router from "mobx-react-router/types" //s = i(680)
import * as errorState from "./errorState.js" // y = i(524);
import * as Sitemap from "../../common/Sitemap.js" //c = i(119)
import * as backgroundPageClient from "../IM/backgroundPageClient.js" //u = i(68)
import * as mobx from 'mobx/dist/mobx' //o = i(13),
import * as selectorFactory from "../SelectorOpt/selectorFactory.js" //d = i(94)
import * as RequestPermissions from "../RequestPermissions.js" //p = i(220),
import * as SitemapSync from "./SitemapSync.js" //h = i(681),
import * as DevToolsContentScriptClient from "../IM/DevToolsContentScriptClient.js" // f = i(221),
import {default as Msg} from "../../common/Msg.js" //m = i(17),
import * as AppHistory from "./AppHistory.js" //g = i(682),
// o是mobx
//s是 mobx-react-router
/*
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};
r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
*/

//Reflect metadata 的原理 https://jkchao.github.io/typescript-book-chinese/tips/metadata.html#%E5%9F%BA%E7%A1%80
class AppState {
    constructor(useHashHistory) {
        /*
        {length: 1, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
            action: "POP"
            block: ƒ ()
            createHref: ƒ (e)
            go: ƒ (e)
            goBack: ƒ ()
            goForward: ƒ ()
            length: 1
            listen: ƒ (e)
            location: {pathname: '/', search: '', hash: '', state: undefined}
            push: ƒ (e, t)
            replace: ƒ (e, t)
            subscribe: ƒ (i)
            unsubscribe: ƒ ()
        * */
        this.sitemaps = mobx.observable.array();
        this.selectorBreadcrumb = ["_root"];
        this.sitemap = void 0;
        this.originalSitemap = undefined;
        this.selector = undefined;  //l = i(10),
        this.originalSelector = undefined;
        this.dataPreviewData = undefined;
        this.experimentalFeaturesEnabled = false;
        this.sitemapSyncEnabled = false;
        this.backgroundScriptErrors = {};
        this.loading = false;
        this.authModalVisible = false;
        this.searchQuery = "";
        this.errorTimeouts = {};
        this.overrideLastHash = false;
        this.routingStore = new mobx_react_router.RouterStore;
        console.log("App state");
        if (useHashHistory) {
            //https://segmentfault.com/a/1190000018674629#comment-area createHashHistory是单页面的访问，会在url加个#号作为定位，这个对于要打包到后台作为页面时是很方便的。
            this.history = mobx_react_router.syncHistoryWithStore(useHashHistory, this.routingStore);
            /*
            returns an enhanced history object with the following additional methods:

            subscribe(listener)
                Subscribes to any changes in the store's location observable
                Returns an unsubscribe function which destroys the listener
            * */
            this.history.listen((location, action) => {//this.history.listen((e, t) => {
                this.locationChanged();
                errorState.errorState.urlChanged();
            });
        }
        mobx.makeObservable(this, {
            //visibleSelectors: mobx.computed,
            //filteredSitemaps: mobx.computed,
            sitemaps: mobx.observable,
            selectorBreadcrumb: mobx.observable,
            sitemap: mobx.observable,
            originalSitemap: mobx.observable,
            selector: mobx.observable,
            originalSelector: mobx.observable,
            dataPreviewData: mobx.observable,
            experimentalFeaturesEnabled: mobx.observable,
            sitemapSyncEnabled: mobx.observable,
            backgroundScriptErrors: mobx.observable,
            loading: mobx.observable,
            authModalVisible: mobx.observable,
            searchQuery: mobx.observable,
            goToEditSitemapSelectors: mobx.action,
            goToSitemapBrowseData: mobx.action,
            cancelSelectorEditing: mobx.action,
            saveSelector: mobx.action,
            deleteSelector: mobx.action,
            addSelector: mobx.action,
            dataPreview: mobx.action,
            allSelectorDataPreview: mobx.action,
            closeDataPreview: mobx.action,
            updateSitemap: mobx.action,
            updateSearchQuery: mobx.action,
            clearErrors: mobx.action,
            disconnectFromCloud: mobx.action,
            showAuthModal: mobx.action,
            hideAuthModal: mobx.action,
            loadExperimentalFeatureState: mobx.action
        });
    }

    get visibleSelectors() {
        if (!this.sitemap)
            return [];
        const breadcrumb_nav_lastest_selector = this.selectorBreadcrumb[this.selectorBreadcrumb.length - 1];
        return this.sitemap.getDirectChildSelectors(breadcrumb_nav_lastest_selector);
    }

    get filteredSitemaps() {
        return this.sitemaps.filter(e => e.name.includes(this.searchQuery));
    }

    async createSitemap(sitemap_context) {
        const new_sitemap = new Sitemap.Sitemap(sitemap_context);
        new_sitemap.setHashHistory();
        this.overrideLastHash = true;
        await backgroundPageClient.backgroundPageClient.createSitemap(new_sitemap);
        this.push("/sitemap/selectors?sitemapId=" + new_sitemap._id);
    }

    async updateSitemapMetadata(sitemap_id, start_url) {
        const cloned_sitemap = this.sitemap.clone();
        cloned_sitemap.startUrl = start_url;
        cloned_sitemap._id = sitemap_id;
        if (this.sitemap._id !== cloned_sitemap._id) {//如果两个id不同，创建新的，然后删掉旧的
            await backgroundPageClient.backgroundPageClient.createSitemap(cloned_sitemap);
            await backgroundPageClient.backgroundPageClient.deleteSitemap(this.sitemap._id);
        }
        this.sitemap = cloned_sitemap;
        await this.updateSitemap();
        this.goToEditSitemapSelectors(cloned_sitemap._id);
    }

    push(route) {
        this.routingStore.push(route);
    }

    async loadSitemaps() {
        this.loading = true;
        try {
            this.sitemapSyncEnabled = await backgroundPageClient.backgroundPageClient.getSitemapSyncEnabled();
            const sitemap_metadata = await backgroundPageClient.backgroundPageClient.getSitemapMetadata();
            if (this.sitemapSyncEnabled) {
                mobx.runInAction(() => {
                    this.sitemaps = SitemapSync.SitemapSync.matchSitemaps(sitemap_metadata);
                });
            } else {
                mobx.runInAction(() => {
                    this.sitemaps = sitemap_metadata;
                });

            }
        } catch (except) {
            mobx.runInAction(() => {
                this.sitemaps = [];
            });
            if (Msg.includes(except.message, "Unauthorized"))
                await this.disconnectFromCloud();
        } finally {
            this.loading = false;
        }
    }

    async deleteSitemap(sitemap_id) {
        await backgroundPageClient.backgroundPageClient.deleteSitemap(sitemap_id);
        await backgroundPageClient.backgroundPageClient.incrementDailyStat("sitemapsDeleted", 1);
        await this.loadSitemaps();
    }

    async downloadSitemap(sitemap_id) {
        await backgroundPageClient.backgroundPageClient.downloadSitemap(sitemap_id);
    }

    async uploadSitemap(sitemap_id) {
        await backgroundPageClient.backgroundPageClient.uploadSitemap(sitemap_id);
    }

    async locationChanged() {
        console.log("location changed");
        function decodeURI(key, search_str) {//demo : key = "sitemapId", search_str = "?sitemapId=aaaaaaaaaaaa
            key = key.replace(/[\[\]]/g, "\\$&");//"sitemapId"
            const captured_str = new RegExp(`[?&]${key}(=([^&#]*)|&|#|$)`).exec(search_str);//["?sitemapId=aaaaaaaaaaaa", "=aaaaaaaaaaaa", "aaaaaaaaaaaa"]
            if (captured_str)
                return captured_str[2] ? decodeURIComponent(captured_str[2]) : "";
        }

        this.clearErrors();
        const search_str = this.routingStore.location.search;//?后面的部分  demo search_str = "?sitemapId=aaaaaaaaaaaa
        const sitemapID_URI = decodeURI("sitemapId", search_str);
        if (!sitemapID_URI || this.sitemap && this.sitemap._id === sitemapID_URI) {//search 的sitemap 对应的value为空； 当前有sitemap，并且sitemap的_id和search path相同
            if (!sitemapID_URI) {//search 的sitemap 对应的value为空或未定义；
                this.sitemap = undefined;
                this.overrideLastHash = false;
                this.selectorBreadcrumb = ["_root"];
            }
        } else {
            //demo {startUrl: Array(1), selectors: Array(0), hashHistory: Array(1), _id: "aaaaaaaaaaaa", _rev: "1-77bda7230c1d104679fbd3c203f48f7e"}
            const sitemap_init_data = await backgroundPageClient.backgroundPageClient.getSitemap(sitemapID_URI);
            this.sitemap = new Sitemap.Sitemap(sitemap_init_data);
        }
        //"/sitemap/edit_selector" //出现在selector editor页面， Element preview, Data preview ,Edit,Delete
        const selectorId_URI = decodeURI("selectorId", search_str);
        if (!selectorId_URI || this.selector && this.selector.id === selectorId_URI) {//如果selector为空; 或者 selector存在，并且id和URL中的相同
            if ("" === selectorId_URI && (!this.selector || this.selector.id !== selectorId_URI)) {//当前没有selector 或者 当前selector id 和URL中不一致
                this.originalSitemap = this.sitemap.clone();
                const newSelector = selectorFactory.selectorFactory({
                    type: "SelectorText",
                    parentSelectors: ["_root"]
                });
                this.originalSelector = newSelector;
                this.sitemap.selectors.push(newSelector);
                this.selector = newSelector;
            }
            //如果当前有selector，并且selector的id和search URL相同，那么什么也不做
        } else {
            const selector = this.sitemap.getSelectorById(selectorId_URI);
            this.selector = selector;
            this.originalSelector = selector;
            this.originalSitemap = this.sitemap;
        }
        this.updateSearchQuery("");
        if ("/" === this.routingStore.location.pathname ||undefined === this.routingStore.location.pathname)
            await this.loadSitemaps();
    }

    async loadExperimentalFeatureState() { //https://www.jianshu.com/p/505d9d9fe36a 默认不允许在异步操作执行对observable数据的修改
        const enable_status = await backgroundPageClient.backgroundPageClient.getExperimentalFeaturesEnabled();
        mobx.runInAction(() => {
            this.experimentalFeaturesEnabled = enable_status;
        });
    }

    editSelector(selector) {
        this.selector = selector;
        this.originalSitemap = this.sitemap.clone();
        this.originalSelector = selectorFactory.selectorFactory(selector);
        this.push(`/sitemap/edit_selector?sitemapId=${this.sitemap._id}&selectorId=${selector.id}`);
    }

    goToEditSitemapSelectors(sitemap_id) {
        if (undefined === sitemap_id)
            sitemap_id = this.sitemap._id;
        const url = "/sitemap/selectors?sitemapId=" + sitemap_id;
        this.routingStore.push(url);
    }

    goToSitemapBrowseData(sitemap_id) {
        const url = "/sitemap/browse?sitemapId=" + sitemap_id;
        this.routingStore.push(url);
    }

    cancelSelectorEditing() {
        this.sitemap = this.originalSitemap;
        this.originalSitemap = undefined;
        this.selector = undefined;
        this.goToEditSitemapSelectors();
    }

    async saveSelector(e) {
        const originalSitemap = this.originalSitemap;
        const originalSelector = this.originalSelector;
        await DevToolsContentScriptClient.DevToolsContentScriptClient.removeCurrentContentSelector();
        originalSitemap.updateSelector(originalSelector, e);
        this.sitemap = originalSitemap;
        await this.updateSitemap();
        this.goToEditSitemapSelectors();
        this.originalSelector = undefined;
        this.originalSitemap = undefined;
    }

    async deleteSelector(selector) {
        const cloned_sitemap = this.sitemap.clone();
        cloned_sitemap.deleteSelector(selector);
        this.sitemap = cloned_sitemap;
        await this.updateSitemap();
    }

    addSelector() {
        this.originalSitemap = this.sitemap.clone();
        const parent_selector_id = this.selectorBreadcrumb[this.selectorBreadcrumb.length - 1];
        const new_selector = selectorFactory.selectorFactory({
            parentSelectors: [parent_selector_id],
            type: "SelectorText"
        });
        this.originalSelector = new_selector;
        this.selector = new_selector;
        this.push(`/sitemap/edit_selector?sitemapId=${this.sitemap._id}&selectorId=${new_selector.id}`);
    }

    async dataPreview(selector_id) {
        console.log("dataPreview");
        const parent_selector_id = this.selectorBreadcrumb;//面包碎屑
        await RequestPermissions.RequestPermissions.requestAdditionalPermissions();
        const selector_context = {
            sitemap: this.sitemap,
            parentSelectorIds: parent_selector_id,
            selectorId: selector_id
        };
        this.dataPreviewData = await backgroundPageClient.backgroundPageClient.getDataPreviewSelectorData(selector_context);
    }

    async allSelectorDataPreview() {
        await RequestPermissions.RequestPermissions.requestAdditionalPermissions();
        const selector_path_context = {
            sitemap: this.sitemap,
            selectorPath: this.selectorBreadcrumb
        };
        this.dataPreviewData = await backgroundPageClient.backgroundPageClient.getAllSelectorDataPreviewData(selector_path_context);
    }

    async performSelectorAction(selector_id) {
        const path = this.selectorBreadcrumb;//这是网页面包碎屑式导航
        const selector_context = {
            sitemap: this.sitemap,
            parentSelectorIds: path,
            selectorId: selector_id
        };
        await backgroundPageClient.backgroundPageClient.performSelectorAction(selector_context);
    }

    closeDataPreview() {
        this.dataPreviewData = undefined;
    }

    async updateSitemap() {
        console.log(JSON.stringify(this.sitemap));
        console.log("oooooooooooo");
        this.sitemap.setHashHistory(this.overrideLastHash);
        this.overrideLastHash = this.sitemap.deduplicateLastHashes();
        await backgroundPageClient.backgroundPageClient.updateSitemap(this.sitemap);
    }

    updateSearchQuery(searchQuery) {
        this.searchQuery = searchQuery;
    }

    setErrors(errors_str, method) {
        this.backgroundScriptErrors[method] = [];
        clearTimeout(this.errorTimeouts[method]);
        const errors_array = errors_str.replace(/^Error: /, "").split("||");//Error: / Error1||Error2||Error3
        for (let error of errors_array) {
            if ("Unauthorized." === error)
                error = "Unauthorized. Re-connect with Cloud.";
            this.backgroundScriptErrors[method].push(error);
        }
        this.errorTimeouts[method] = setTimeout(() => {
            delete this.backgroundScriptErrors[method];
        }, 30000);
    }

    clearErrors() {
        this.backgroundScriptErrors = {};
    }

    async disconnectFromCloud() {
        await backgroundPageClient.backgroundPageClient.disconnectFromCloud();
        await this.loadSitemaps();
    }

    showAuthModal() {
        this.authModalVisible = true;
    }

    hideAuthModal() {
        this.authModalVisible = false;
    }
}

//typescript相关，限制变量类型和函数的返回值类型
//https://github.com/danielearwicker/computed-async-mobx/issues/30
//https://blog.csdn.net/cqm1994617/article/details/53271494
/*
//n([o.computed, r("design:type", Array), r("design:paramtypes", [])], b.prototype, "visibleSelectors", null), //这里的prototype 说明修饰的是类的成员变量
//n([o.computed, r("design:type", Array), r("design:paramtypes", [])], b.prototype, "filteredSitemaps", null),
n([o.observable, r("design:type", Array)], b.prototype, "sitemaps", undefined),
    n([o.observable, r("design:type", Array)], b.prototype, "selectorBreadcrumb", undefined),
    n([o.observable, r("design:type", c.Sitemap)], b.prototype, "sitemap", undefined),
    n([o.observable, r("design:type", c.Sitemap)], b.prototype, "originalSitemap", undefined),
    n([o.observable, r("design:type", l.Selector)], b.prototype, "selector", undefined),
    n([o.observable, r("design:type", l.Selector)], b.prototype, "originalSelector", undefined),
    n([o.observable, r("design:type", Array)], b.prototype, "dataPreviewData", undefined),
    n([o.observable, r("design:type", Boolean)], b.prototype, "experimentalFeaturesEnabled", undefined),
    n([o.observable, r("design:type", Boolean)], b.prototype, "sitemapSyncEnabled", undefined),
    n([o.observable, r("design:type", Object)], b.prototype, "backgroundScriptErrors", undefined),
    n([o.observable, r("design:type", Boolean)], b.prototype, "loading", undefined),
    n([o.observable, r("design:type", Boolean)], b.prototype, "authModalVisible", undefined),
    n([o.observable, r("design:type", String)], b.prototype, "searchQuery", undefined),
    n([o.action, r("design:type", Function), r("design:paramtypes", [String]), r("design:returntype", undefined)], b.prototype, "goToEditSitemapSelectors", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", [String]), r("design:returntype", undefined)], b.prototype, "goToSitemapBrowseData", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "cancelSelectorEditing", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", [l.Selector]), r("design:returntype", Promise)], b.prototype, "saveSelector", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", [l.Selector]), r("design:returntype", Promise)], b.prototype, "deleteSelector", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "addSelector", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", [String]), r("design:returntype", Promise)], b.prototype, "dataPreview", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", Promise)], b.prototype, "allSelectorDataPreview", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "closeDataPreview", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", Promise)], b.prototype, "updateSitemap", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", [String]), r("design:returntype", undefined)], b.prototype, "updateSearchQuery", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "clearErrors", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", Promise)], b.prototype, "disconnectFromCloud", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "showAuthModal", null),
    n([o.action, r("design:type", Function), r("design:paramtypes", []), r("design:returntype", undefined)], b.prototype, "hideAuthModal", null);
*/
let appState = new AppState(AppHistory.AppHistory);
export {AppState, appState}
