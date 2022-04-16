import {default as Msg} from "../../common/Msg.js"//a = i(17),
import {default as Log} from "../../log/log.js";//r = i(5),
class WebRTCBlocker {
    constructor(e) {
        this.blockingEnabled = e;
    }

    async init() {
        if (this.blockingEnabled)
            try {
                await this.blockWebRtcIpLeak();
            } catch (exception) {
                Log.error("Couldn't init WebRTCBlocker", {
                    error: Msg.getMessage(exception),
                    stack:exception.stack
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