import {default as a} from "../../common/Msg.js"//a = i(17),
import {default as r} from "../../log/log.js";//r = i(5),
class WebRTCBlocker {
    constructor(e) {
        this.blockingEnabled = e;
    }

    async init() {
        if (this.blockingEnabled)
            try {
                await this.blockWebRtcIpLeak();
            } catch (e) {
                r.error("Couldn't init WebRTCBlocker", {
                    error: a.getMessage(e),
                    stack:e.stack
            });
        }
    }

    deInit() {
    }

    blockWebRtcIpLeak() {
        return new Promise((resolve, reject) => {
            chrome.privacy.network.webRTCIPHandlingPolicy.set({
                value: "disable_non_proxied_udp"
            }, () => {
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
    }
}

export {WebRTCBlocker}