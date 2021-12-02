import * as UIContainerStyle from "./UIContainerStyle.js"

class UIFrame {
    constructor() {
        this.element = document.createElement("iframe");
        this.element.tabIndex = -1;
        this.element.src = chrome.runtime.getURL("frame.html");
        this.element.style.cssText = UIContainerStyle.uiContainerStyles;
    }
}

export { UIFrame }