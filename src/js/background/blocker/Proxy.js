import * as a from "../chromeOpt/WindowManager.js"//const  a = i(612);
import {default as r} from "../../log/log.js";//r = i(5),
class Proxy extends a.WindowManager {
    constructor() {
        super(...arguments);
        this.proxyAuthCallbacks = [];
        this.proxySignedIn = false;
    }

    async setProxyConfiguration(e) {
        this.proxySignedIn = false;
        await this.clearSessionData();
        this.proxyConf = e;
        const t = {
            mode: "fixed_servers",
            rules: {
                singleProxy: {
                    scheme: e.scheme,
                    host: e.host,
                    port: e.port
                },
                bypassList: ["chrome-extension://*", "<local>"]
            }
        };
        await this.configureProxy(t);
        await this.initProxyAuth();
        await this.loginToProxy();
    }

    async deInitProxy() {
        for (const callback of this.proxyAuthCallbacks)
            chrome.webRequest.onAuthRequired.removeListener(callback);
        if (this.proxyAuthCallbacks = [], this.proxyConf) {
            const e = {
                mode: "direct"
            };
            await this.configureProxy(e);
        }
    }

    async configureProxy(e) {
        await new Promise((resolve, reject) => {
            r.info("setting proxy settings");
            chrome.proxy.settings.set({
                value: e,
                scope: "regular"
            }, () => {
                let lastError = chrome.runtime.lastError;
                if (lastError)
                    reject(lastError);
                else {
                    r.info("proxy set up");
                    resolve();
                }
            });
        });
    }

    async clearSessionData() {
        await new Promise((resolve, reject) => {
            chrome.browsingData.remove({}, {
                appcache: true,
                cache: false,
                cookies: true,
                downloads: true,
                fileSystems: true,
                formData: true,
                history: true,
                indexedDB: true,
                localStorage: true,
                serverBoundCertificates: true,
                pluginData: true,
                passwords: true,
                serviceWorkers: true,
                webSQL: true
            }, () => {
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
        await new Promise((resolve, reject) => {
            chrome.browsingData.remove({
                originTypes: {
                    protectedWeb: true
                }
            }, {
                appcache: true,
                cache: false,
                cookies: true,
                downloads: true,
                fileSystems: true,
                formData: true,
                history: true,
                indexedDB: true,
                localStorage: true,
                serverBoundCertificates: true,
                pluginData: true,
                passwords: true,
                serviceWorkers: true,
                webSQL: true
            }, () => {
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
        await new Promise((resolve, reject) => {
            chrome.webRequest.handlerBehaviorChanged(() => {
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
    }

    proxyAuthCallback(e) {
        if (!e.isProxy) //is false ,return false
            return false;
        if (!(e.challenger.host.toLowerCase() === this.proxyConf.host.toLowerCase()))
            return false;
        if (!(e.challenger.port === this.proxyConf.port))
            return false;
        if (false === this.proxySignedIn) {
            this.proxySignedIn = true;
            return {
                authCredentials: {
                    username: this.proxyConf.username,
                    password: this.proxyConf.password
                }
            };
        } else {
            r.notice("Received auth request when already authenticated. Wrong login or IP blacklisted", {
                details: JSON.stringify(e)
            });
            return {cancel: true};
        }
    }

    initProxyAuth() {
        if (!this.proxyConf.username && !this.proxyConf.password)
            return;
        if (0 !== this.proxyAuthCallbacks.length)
            return;
        const proxyAuthCallbackBinded = this.proxyAuthCallback.bind(this);
        this.proxyAuthCallbacks.push(proxyAuthCallbackBinded);
        chrome.webRequest.onAuthRequired.addListener(proxyAuthCallbackBinded, {
            urls: ["<all_urls>"]
        }, ["blocking"]);
    }

    loginToProxy() {
    }
}

export {Proxy}