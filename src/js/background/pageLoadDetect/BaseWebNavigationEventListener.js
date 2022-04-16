import {default as Log} from "../../log/log.js";//n = i(5),
import {Obj} from "../../common/Obj.js"// r = i(57);
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
        if (!Obj.empty(Obj.diffWouldUpdate(this.state, t))) {
            Log.notice(`Unexpected state values. should be: ${JSON.stringify(t)} was: ${JSON.stringify(this.state)}`, {
                event: e
            });
        }
    }

    setState(needSetStatus, assertStatus) {
        if (!this.sharedState.waitForStatusActive)
            Log.notice("Received set state event after tab load complete " + JSON.stringify(needSetStatus));
        if (!Obj.empty(Obj.diffWouldNotUpdate(this.state, needSetStatus)))
            Log.notice(`unset state: ${JSON.stringify(Obj.diffWouldNotUpdate(this.state, needSetStatus))} current: ${JSON.stringify(this.state)}`, {});
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