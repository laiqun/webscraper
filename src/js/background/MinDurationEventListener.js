import * as n from "./BaseWebNavigationEventListener.js"//n = i(67),
class MinDurationEventListener extends n.BaseWebNavigationEventListener {
    deInitListeners() {
    }

    initListeners() {
    }

    get isPageLoadComplete() {
        return this.state.minDurationCompleted;
    }

    get pageLoadError() {
    }

    resetState() {
        this.state = {
            minDurationCompleted: false
        };
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on MinDurationEventListener");
    }

    initTimeouts() {
        this.initDurationTimeout();
    }

    initDurationTimeout() {
        this.clearTimeout("durationTimeout");
        this.timeouts.durationTimeout = setTimeout(() => {
            this.clearTimeout("durationTimeout");
            this.setState({
                minDurationCompleted: true
            }, {
                minDurationCompleted: false
            });
        }, this.sharedState.minDuration);
    }
}

export {MinDurationEventListener}