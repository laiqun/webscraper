import * as buffer from "buffer"
import * as o from "pako"////const  o = gzip;

import * as i from "./downURL/compressedTypes.js"

 class DownloadUrlAction{
    extract(url) {
        return async function () {
            const response = await fetch(url);
            const content_type = response.headers.get("Content-Type");
            const typeUnknown = i.default.isContentTypeUnknown(content_type);
            const isCompressType = i.default.isContentTypeForCompressedContent(content_type);
            if (response.status >= 300)
                throw "PAGE_STATUS_CODE_ERROR " + response.status;
            if (!response.ok)
                throw "PAGE_REQUEST_ERROR " + response.statusText;
            if (typeUnknown) {
                if (isCompressType) {
                    try {
                        const arrayBuffer = await response.arrayBuffer();
                        const uint8Array = new Uint8Array(arrayBuffer);
                        const ungzip = o.ungzip(uint8Array);
                        return new buffer(ungzip).toString("utf8");
                    } catch (e) {
                        throw "PAGE_UNKNOWN_CONTENT_TYPE_ERROR";
                    }
                }
                throw "PAGE_UNKNOWN_CONTENT_TYPE_ERROR";
            }
            return await response.text();
        };
    }
}

export { DownloadUrlAction }