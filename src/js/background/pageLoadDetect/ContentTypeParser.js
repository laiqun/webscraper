import {default as n} from "../../log/log.js";//n = i(5),
class ContentTypeParser {
    static isContentTypeUnknown(e) {
        if (!!e) {
            if (!(e = e.toLocaleLowerCase()).match(/^(text\/[^\n]*?|[^\n]*?(html|xml|json)[^\n]*?|application\/[^\n]*?(java|ecma|type)script[^\n]*?)$/)) {
                n.Log.notice("unknown content type loaded", {
                    contentType: e
                });
                return true;
            } else
                return false;
        } else
            return false;

    }

    static isContentTypeForCompressedContent(e) {
        return ContentTypeParser.compressedTypes.includes(e);
    }
}

ContentTypeParser.compressedTypes = ["application/octet-stream",
    "binary/octet-stream", "application/x-gzip", "application/gzip",
    "application/gzip-compressed", "application/gzipped", "application/x-gunzip",
    "application/x-gzip-compressed", "gzip/document"];

export {ContentTypeParser}