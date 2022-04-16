import {BaseWebNavigationEventListener} from "./BaseWebNavigationEventListener.js"//n = i(67),

class LockEventListener extends BaseWebNavigationEventListener {
    deInitListeners() {
    }

    initListeners() {
    }

    get isPageLoadComplete() {
        return !this.state.locked;
    }

    get pageLoadError() {
    }

    lock() {
        this.setState({
            locked: true
        }, {
            locked: false
        });
    }

    unlock() {
        this.setState({
            locked: false
        }, {
            locked: true
        });
    }

    resetState() {
        this.state = {
            locked: false
        };
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on MinDurationEventListener");
    }

    initTimeouts() {
    }

    isLocked() {
        return this.state.locked;
    }
}

export {LockEventListener}