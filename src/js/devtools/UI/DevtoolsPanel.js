//看起来像是引用了一堆UI库
//function(e, t, i)  e 是exports t是export  i是导入其他模块
import * as b from "../../contentjs/decorate_jquery.js"
import * as d from "./EditSitemapSelectorView.js"//const d = i(690);
import * as CreateSitemapView from "./CreateSitemapView.js"//s = i(679)
import * as l from "./EditSitemapMetadataView.js"//l = i(683)
import * as c from "./EditSitemapSelectorGraph.js" //     c = i(684),
import * as u from "./EditSitemapSelectorsView.js"//u = i(687),
import * as react from "react"//n = i(0),
import * as react_router_dom from "react-router-dom"//r = i(16)
import * as a from "./DataPreviewModal.js" //a = i(677)
import * as Navigation from "./Navigation.js"  //o = i(678)
import * as p from "./ImportSitemapView.js"//p = i(713),
import * as h from "./SitemapBrowseView.js"//     h = i(714),
import * as f from "./SitemapExportDataView.js" //, f = i(720)
import * as m from "./SitemapExportView.js"//    , m = i(721)
import * as g from "./SitemapListView.js"//     g = i(722),
import * as y from "./SitemapScrapeView.js"//     y = i(727)
import "../../../css/devtools.css"
import "bootstrap"// i(734);
import "./bootstrapValidator.min.js"//i(747);
import * as v from "./WebSiteSetupView.js"//const v = i(748);
import * as w from "./BackgroundScriptErrorMessageAlert.js"//, w = i(749)
import * as S from "./UI/CloudAuthModal.js"//, S = i(750)
class DevtoolsPanel extends react.Component {
    /*
    * <div>
    *   <div class="visible-xs small-screen-info">
    *     <i></i>
    *     <div>
    *       <p>Move developer tools to the bottom of your browser to start using Web Scraper.</p>
    *       <img src="/images/dock-to-bottom.png">
    *     </div>
    *   </div>
    *   <div class="hidden-xs">
    *     <Navigation></Navigation>
    *     <div id="messages" />
    *     <div id="viewport">
    *       <switch>
    *         <route exact="xxx" path="/" component="yyy">
    *         <route>
    *         <route>
    *       </switch>
    *     </div>
    *     <DataPreviewModal />
    *     <CloudAuthModal />
    *   </div>
    * </div>
    *
    * */
    render() {
        return react.createElement("div", null,
                react.createElement("div", {
                    className: "visible-xs small-screen-info"
                    },
                    react.createElement("i", null),
                    react.createElement("div", null, react.createElement("p", null, "Move developer tools to the bottom of your browser to start using Web Scraper."), react.createElement("img", {
                        src: "./dock-to-bottom.png"
                    }))
                ),
                react.createElement("div", {
                    className: "hidden-xs"
                    }, react.createElement(Navigation.Navigation, null),
                       react.createElement("div", {
                            id: "messages"
                        }),
                       react.createElement("div", {
                            id: "viewport"
                        }, react.createElement(react_router_dom.Switch, null,
                            react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/",
                                component: g.SitemapListView
                            }),
                            react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/create-sitemap",
                                component: CreateSitemapView.CreateSitemapView
                            }),
                           react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/import-sitemap",
                                component: p.ImportSitemapView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/selectors",
                                component: u.EditSitemapSelectorsView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/edit_selector",
                                component: d.EditSitemapSelectorView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/selector-graph",
                                component: c.EditSitemapSelectorGraph
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/edit-metadata",
                                component: l.EditSitemapMetadataView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/scrape",
                                component: y.SitemapScrapeView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/browse",
                                component: h.SitemapBrowseView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/export",
                                component: m.SitemapExportView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/export-data",
                                component: f.SitemapExportDataView
                            }), react.createElement(react_router_dom.Route, {
                                exact: true,
                                path: "/sitemap/website-setup",
                                component: v.WebSiteSetupView
                            })
                           ),  //line 46
                           react.createElement(w.BackgroundScriptErrorMessageAlert, null)
                       ),// line 44
                        react.createElement(a.DataPreviewModal, null), react.createElement(S.CloudAuthModal, null)
                )//line 38
        );
    }
}

export {DevtoolsPanel};