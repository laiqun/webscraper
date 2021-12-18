import * as n from "./BaseWebNavigationEventListener.js"//const n = i(67);
import {default as r} from "../../log/log.js";//r = i(5),
class GlobalTimeoutEventListener extends n.BaseWebNavigationEventListener {
    constructor() {
        super(...arguments);
        this.globalTimeout = 60000;
    }

    deInitListeners() {
    }

    initListeners() {
    }

    get isPageLoadComplete() {
        return true;
    }

    get pageLoadError() {
        if (this.state.globalTimeoutCompleted)
            return "PAGE_LOAD_TIMEOUT";
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on GlobalTimeoutEventListener");
    }

    resetState() {
        this.state = {
            globalTimeoutCompleted: false
        };
    }

    initTimeouts() {
        this.initGlobalTimeout();
    }

    initGlobalTimeout() {
        if (this.timeouts.globalTimeout)
            throw new Error("global timeout already initialized");
        this.timeouts.globalTimeout = setTimeout(() => {
            this.clearTimeout("globalTimeout");
            r.notice("Global timeout completed", {
                url: this.sharedState.url,
                state: JSON.stringify(this.state),
                event: "globalTimeout"
            });
            this.setState({
                globalTimeoutCompleted: true
            }, {});
        }, this.globalTimeout);
    }
}

export {GlobalTimeoutEventListener}