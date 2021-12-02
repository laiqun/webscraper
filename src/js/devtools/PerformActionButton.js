import * as react from "react"    //const n = i(0),
import {ConditionalElementBase} from "./ConditionalElementBase.js" //r = i(26);
class PerformActionButton extends ConditionalElementBase {
    _render() {
        const {onClick: click_handler} = this.props;
        return react.createElement("button", {
            className: "btn btn-default",
            type: "button",
            onClick: click_handler
        }, "Perform Action");
    }
}
export {PerformActionButton}