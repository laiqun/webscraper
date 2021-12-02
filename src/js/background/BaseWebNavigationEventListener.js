import {default as n} from "../contentjs/log.js";//n = i(5),
import * as r from "../devtools/Obj.js"// r = i(57);
class BaseWebNavigationEventListener {
    constructor(e) {
        this.sharedState = e.sharedState;
        this.onRedirect = e.onRedirect;
        this.onPageLoadDelayShouldBeReset = e.onPageLoadDelayShouldBeReset;
        this.onStateChanged = e.onStateChanged;
        this.timeouts = {};
    }

    reset() {
        this.resetState();
        this.clearTimeouts();
        this.initTimeouts();
    }

    clearTimeouts() {
        for (const timeoutsKey in this.timeouts) {
            window.clearTimeout(this.timeouts[timeoutsKey]);
            this.timeouts[timeoutsKey] = undefined;
        }
    }

    assertState(e, t) {
        if (!r.Obj.empty(r.Obj.diffWouldUpdate(this.state, t))) {
            n.notice(`Unexpected state values. should be: ${JSON.stringify(t)} was: ${JSON.stringify(this.state)}`, {
                event: e
            });
        }
    }

    setState(needSetStatus, assertStatus) {
        if (!this.sharedState.waitForStatusActive)
            n.notice("Received set state event after tab load complete " + JSON.stringify(needSetStatus));
        if (!r.Obj.empty(r.Obj.diffWouldNotUpdate(this.state, needSetStatus)))
            n.notice(`unset state: ${JSON.stringify(r.Obj.diffWouldNotUpdate(this.state, needSetStatus))} current: ${JSON.stringify(this.state)}`, {});
        this.assertState("setState", assertStatus);
        this.overrideState(needSetStatus);
        this.sharedState.waitForStatusActive && this.onStateChanged();
    }

    clearTimeout(timeoutsKey)
    {
        window.clearTimeout(this.timeouts[timeoutsKey]);
        this.timeouts[timeoutsKey] = undefined;
    }
    isChromeExtensionUrl() {
        return !!this.sharedState.url.match(/^chrome-extension:\/\//);
    }

    overrideState(e) {
        let temp = Object.assign({}, this.state);
        this.state = Object.assign(temp, e);
    }
}

export {BaseWebNavigationEventListener}