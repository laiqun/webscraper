import {default as Log} from "../log/log.js";//r = i(5),
class CloudAuthenticationService {
    constructor() {
        this.handleExternalMessage = this.handleExternalMessage.bind(this);
    }

    get apiToken() {
        return undefined !== this._apiToken ? Promise.resolve(this._apiToken) : new Promise(resolve => {
            chrome.storage.local.get(({extensionAPIToken: t}) => {
                this._apiToken = t;
                resolve(t);
            });
        });
    }

    init() {
        chrome.runtime.onMessageExternal.addListener(this.handleExternalMessage);
    }

    async removeToken() {
        await new Promise((resolve, reject) => {
            chrome.storage.local.remove("extensionAPIToken", () => {
                undefined !== chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
        this._apiToken = undefined;
    }

    async handleExternalMessage(e, t, callback) {
        try {
            switch (e.type) {
                case "wsAuthToken":
                    await this.addToken(e.data);
                    break;

                case "wsAuthRemove":
                    await this.removeToken();
                    break;

                default:
                    throw new Error("Unknown auth message type");
            }
        } catch (exception) {
            Log.error(exception.message,{stack:exception.stack});
            return  void callback({
                success: false,
                error: exception.message
            });
        }
        callback({
            success: true
        });
    }

    async addToken(e) {
        await new Promise((resolve, reject) => {
            chrome.storage.local.set({
                extensionAPIToken: e.wsAuthToken
            }, () => {
                undefined !== chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
        this._apiToken = e.wsAuthToken;
    }
}

export {CloudAuthenticationService}