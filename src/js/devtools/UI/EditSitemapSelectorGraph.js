import * as r from "mobx-react/dist/index"//r = i(21),
import * as a from "react"//a = i(0),
import * as s from "./BaseComponent.js"//, s = i(25)
import * as o from "../SelectorOpt/SelectorGraphv2.js" //    const  o = i(685);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

let EditSitemapSelectorGraph = class extends s.BaseComponent {
    componentDidMount() {
        const e = this.props.appState.sitemap;
        new o.SelectorGraphv2(e).draw(this.el, $(document).width(), 200);
    }

    render() {
        return a.createElement("div", {
            id: "selector-graph",
            ref: e => this.el = e
        });
    }
};
EditSitemapSelectorGraph = n([r.inject("appState"), r.observer], EditSitemapSelectorGraph);
export {EditSitemapSelectorGraph}