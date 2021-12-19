var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};


import * as r from "mobx-react"//r = i(21),
import * as react from "react"//const  a = i(0),
import {BaseComponent} from "./BaseComponent.js"//o = i(25);
let SitemapExportView = class extends BaseComponent {
    render() {
        const {sitemap: e} = this.props.appState;
        return react.createElement("div", {
            className: "panel"
        }, react.createElement("div", {
            className: "panel-body"
        }, react.createElement("div", {
            className: "form-group"
        }, react.createElement("div", {
            className: "col-lg-12"
        }, react.createElement("textarea", {
            rows: 7,
            className: "form-control",
            defaultValue: e.toString()
        })))));
    }
};
SitemapExportView = n([r.inject("appState"), r.observer], SitemapExportView);

export {SitemapExportView}