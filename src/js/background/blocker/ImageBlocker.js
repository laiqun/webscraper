import {default as Msg} from "../../common/Msg.js"//o = i(17),
import {default as Log} from "../../log/log.js";//a = i(5),
import {Proxy} from "./Proxy.js"//const r = i(611);
class ImageBlocker extends Proxy {
    async initImageBlocker() {
        if (this.blockImages) {
            await this.blockAllImagesByDefault();
            await this.enableImagesInAllowedHosts();
        }
    }

    async blockAllImagesByDefault() {
        await this.toggleImagesWithPattern("http://*/*", "block");
        await this.toggleImagesWithPattern("https://*/*", "block");
    }

    async enableImagesInAllowedHosts() {
        await this.toggleImagesInHost("www.google.dk", "allow");
        for (const e of this.blockImagesWhitelistDomains)
            await this.toggleImagesInHost(e, "allow");
    }

    async toggleImagesWithPattern(pattern, isBlock) {
        await new Promise((resolve, reject) => {
            chrome.contentSettings.images.set({
                primaryPattern: "<all_urls>",
                secondaryPattern: pattern,
                setting: isBlock
            }, () => {
                const lastError = chrome.runtime.lastError;
                if (null != lastError) {
                    const errorMsg = Msg.getMessage(lastError);
                    Log.error("couldn't toggle images", {
                        error: errorMsg,
                        pattern: pattern,
                        setting: isBlock
                    });
                    reject("couldn't toggle images");
                }
                else
                    resolve();
            });
        });
    }

    async toggleImagesInHost(pattern, isBlock) {
        const pattern_ = `*://${pattern}/*`;
        await this.toggleImagesWithPattern(pattern_, isBlock);
    }
}

export {ImageBlocker}