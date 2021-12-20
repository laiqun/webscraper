import * as i from "react"
import * as react_dom from "react-dom"//o = i(11)
import css from "../css/frame.css"
import {Toolbar} from "./frame/Toolbar.js";

react_dom.render(i.createElement(Toolbar,null),document.getElementById("app"));