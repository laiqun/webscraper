import * as n from "react"//const n = i(0)
import * as r from "./BaseComponent.js"//, r = i(25);
class Loader extends r.BaseComponent {
    render() {
        return n.createElement("div", {
            className: "lds-ellipsis"
        }, n.createElement("div", null), n.createElement("div", null), n.createElement("div", null), n.createElement("div", null));
    }
}


export {Loader}