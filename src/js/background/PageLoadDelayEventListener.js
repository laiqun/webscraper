import * as n from "./BaseWebNavigationEventListener.js"//const n = i(67);
class PageLoadDelayEventListener extends n.BaseWebNavigationEventListener {
    deInitListeners() {
    }

    initListeners() {
    }

    get isPageLoadComplete() {
        return this.state.pageLoadDelayCompleted;
    }

    get pageLoadError() {
    }

    resetState() {
        this.state = {
            pageLoadDelayCompleted: false
        };
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on PageLoadDelayEventListener");
    }

    initTimeouts() {
        this.initPageLoadDelayCompletedTimeout();
    }

    initPageLoadDelayCompletedTimeout() {
        this.clearTimeout("pageLoadDelayTimeout");
        this.state.pageLoadDelayCompleted = false;
        this.timeouts.pageLoadDelayTimeout = setTimeout(() => {
            this.clearTimeout("pageLoadDelayTimeout");
            this.setState({
                pageLoadDelayCompleted: true
            }, {
                pageLoadDelayCompleted: false
            });
        }, this.sharedState.pageLoadDelay);
    }
}

export {PageLoadDelayEventListener}