import * as n from "react"//const n = i(0);
class DataPreviewButton extends n.Component {
    render() {
        const {onClick: e, visible: t} = this.props;
        return n.createElement("button", {
            className: (t ? "" : "hidden") + " btn btn-default data-preview",
            type: "button",
            onClick: e
        }, "Data preview");
    }
}

export {DataPreviewButton}