import * as react from "react"
import * as react_dom from "react-dom"//o = i(11)
import css from "../css/frame.css"
import {Toolbar} from "./frameUI/Toolbar.js";

react_dom.render(react.createElement(Toolbar,null),document.getElementById("app"));