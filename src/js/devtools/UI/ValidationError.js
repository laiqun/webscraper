var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};


import * as mobxReact from "mobx-react"//const mobxReact = i(21),
import {BaseComponent} from "./BaseComponent.js"//a = i(25),
import * as react from "react"//react = i(0)
import {Obj} from "../../common/Obj.js"//, s = i(57);
let ValidationError = class extends BaseComponent {
    render() {
        const {validationErrors: e} = this.props.errorState;
        return !Obj.empty(e) && e[this.props.field] ? react.createElement("small", {
                                                        className: "help-block error-" + this.props.field
                                                        }, e[this.props.field]) : react.createElement(react.Fragment, null);
    }
};
ValidationError = n([mobxReact.inject("errorState"), mobxReact.observer], ValidationError);

export {ValidationError}