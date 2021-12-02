var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};


import * as r from "mobx-react"//const r = i(21),
import {BaseComponent} from "./BaseComponent.js"//a = i(25),
import * as o from "react"//o = i(0)
import * as s from "./Obj.js"//, s = i(57);
let ValidationError = class extends BaseComponent {
    render() {
        const {validationErrors: e} = this.props.errorState;
        return !s.Obj.empty(e) && e[this.props.field] ? o.createElement("small", {
                                                        className: "help-block error-" + this.props.field
                                                        }, e[this.props.field]) : o.createElement(o.Fragment, null);
    }
};
ValidationError = n([r.inject("errorState"), r.observer], ValidationError);

export {ValidationError}