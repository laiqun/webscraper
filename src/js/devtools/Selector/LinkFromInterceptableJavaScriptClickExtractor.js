import * as r from "./WebPageDriverType.js" //const r = i(34),
import * as a from "./Url.js"  //a = i(19);
class LinkFromInterceptableJavaScriptClickExtractor {
    async execute(e) {
        if (e.driver !== r.WebPageDriverType.chrometab)
            return;
        const t = await e.getInterceptableJavaScriptClickUrl();
        return a.Url.isRecognizedProtocol(t) ? t : void 0;
    }
}


export {LinkFromInterceptableJavaScriptClickExtractor}