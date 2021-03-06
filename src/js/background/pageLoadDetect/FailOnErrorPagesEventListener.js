import {BaseWebNavigationEventListener} from "./BaseWebNavigationEventListener.js"
import {ContentTypeParser} from "./ContentTypeParser.js"//    const  r = i(416);
class FailOnErrorPagesEventListener extends BaseWebNavigationEventListener {
    constructor(e) {
        super(e);
        this.webNavigationEventListener = e.webNavigationEventListener;
        this.waitForListeners = e.waitForListeners;
        this.webRequestEventListener = e.webRequestEventListener;
    }

    deInitListeners() {
    }

    initListeners() {
    }

    get isPageLoadComplete() {
        return this.haveOtherListenersCompleted() && undefined === this.pageLoadError;
    }

    get pageLoadError() {
        if (this.haveOtherListenersCompleted())
            if("net::ERR_HTTP_RESPONSE_CODE_FAILURE" === this.webNavigationEventListener.state.wnError)
            return  "PAGE_STATUS_CODE_ERROR " + this.webRequestEventListener.state.headersStatusCode;
        else if(ContentTypeParser.isContentTypeUnknown(this.webRequestEventListener.state.headersContentType) )
            return "PAGE_UNKNOWN_CONTENT_TYPE_ERROR";
        else
            return undefined;
    }

    setAlreadyLoaded() {
        throw new Error("Currently not intended to call setAlreadyLoaded on FailOnErrorPagesEventListener");
    }

    initTimeouts() {
    }

    resetState() {
    }

    haveOtherListenersCompleted() {
        for (const listener of this.waitForListeners)
            if (undefined === listener.pageLoadError && !listener.isPageLoadComplete)//没有错误，并且状态是没完成
                return false;
            //如果所有监听状态都有error或者加载完成，返回true
        return true;
    }
}


export {FailOnErrorPagesEventListener}