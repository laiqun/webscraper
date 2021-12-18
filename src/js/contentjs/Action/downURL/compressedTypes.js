import * as r from "../../../log/log.js"

class i {
    static isContentTypeUnknown(e) {
        if(!!e)
        {
            if(!(e = e.toLocaleLowerCase()).match(/^(text\/[^\n]*?|[^\n]*?(html|xml|json)[^\n]*?|application\/[^\n]*?(java|ecma|type)script[^\n]*?)$/))
            {
                r.default.notice("unknown content type loaded", {
                    contentType: e
                });
                return true;
            }
        }
        return false;
    }

    static isContentTypeForCompressedContent(e) {
        return i.compressedTypes.includes(e);
    }
}

i.compressedTypes = ["application/octet-stream",
    "binary/octet-stream",
    "application/x-gzip",
    "application/gzip",
    "application/gzip-compressed",
    "application/gzipped",
    "application/x-gunzip",
    "application/x-gzip-compressed",
    "gzip/document"];

export {i as default}