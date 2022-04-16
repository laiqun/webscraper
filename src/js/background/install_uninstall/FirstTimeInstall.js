import {OnInstalledReasons} from "./OnInstalledReasons.js"//const n = i(627);
class FirstTimeInstall {
    constructor(target) {
        this.handleInstall = this.handleInstall.bind(this);
        this.target = target;
        chrome.runtime.onInstalled.addListener(this.handleInstall);
    }

    handleInstall({reason: reason_x}) {
        //browser-automation:一个库,用于寻找使用Cypress.io和Puppeteer进行浏览器自动化
        if (reason_x === OnInstalledReasons.install && "browser-automation" !== window.navigator.userAgent)
            chrome.tabs.create({
                url: this.target
            });
    }
}

export {FirstTimeInstall}