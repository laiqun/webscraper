var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};

import * as r from "mobx-react"//const r = i(21),
import * as a from "react"//a = i(0),
import * as o from "./BaseComponent.js"//o = i(25);
let SelectorBreadcrumbItem = class extends o.BaseComponent {
    render() {
        const {selectorId: e} = this.props;
        return a.createElement("li", {
            onClick: this.showChildSelectors.bind(this)
        }, a.createElement("a", null, e));
    }

    showChildSelectors() {
        const e = this.props.index, t = this.props.appState.selectorBreadcrumb.length - e - 1;
        this.props.appState.selectorBreadcrumb.splice(e + 1, t);
    }
};
SelectorBreadcrumbItem = n([r.inject("appState"), r.observer], SelectorBreadcrumbItem);
export {SelectorBreadcrumbItem}