import * as r from "react"//r = i(0),
import * as a from "./BaseComponent.js"//a = i(25)
import * as o from "mobx-react"//const , o = i(21),
import * as s from "../../common/Obj.js"//s = i(57);
var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};


let BackgroundScriptErrorMessageAlert = class extends a.BaseComponent {
    render() {
        const {backgroundScriptErrors: errors} = this.props.appState;
        if (s.Obj.empty(errors))
            return r.createElement(r.Fragment, null);
        else
        {
            const li_array = [];
            for (const error in errors)
                errors[error].map(e => {
                    li_array.push(r.createElement("li", null, e));
                });
            return r.createElement("div", {
                className: "alert alert-danger error-alert",
                role: "alert"
            }, r.createElement("span", null, "Error:"), r.createElement("ul", null, li_array), r.createElement("button", {
                type: "button",
                className: "close close-error-alert",
                onClick: this.dismissErrors.bind(this)
            }, r.createElement("span", {
                "aria-hidden": "true"
            }, "\xd7")));
        }
    }

    dismissErrors() {
        this.props.appState.clearErrors();
    }
};
BackgroundScriptErrorMessageAlert = n([o.inject("appState"), o.observer], BackgroundScriptErrorMessageAlert);
export {BackgroundScriptErrorMessageAlert}
