//const r = i(48);
import * as URLParse from "url-parse"
//import * as n from "url"
//n.Url.URL
import {WebPageElement} from "./WebPageElement"

class Url {
    static combine(base, urlPath) {
        if ("undefined" != typeof window && undefined !== window.URL) {
            return new window.URL(urlPath, base).toString();
        }
        return new window.URL(urlPath, base).toString();
        // return new n.URL(t, e).toString();  node js
    }

    static isValidUrlOrUrlPart(urlPath) {
        try {
            Url.combine("http://example.com/", urlPath);
            return true;
        } catch (e) {
            return false;
        }
    }

    static escapeWhiteSpace(URL) {
        if (null == URL)
            return URL;
        else {
            URL = URL.trim();
            URL = URL.replace(/ /g, "%20");
            URL = URL.replace(/\xa0/g, "%C2%A0");
            URL = URL.replace(/\n/g, "%0A");
            URL = URL.replace(/\r/g, "%0D");
            URL = URL.replace(/\t/g, "%09");
            return URL;
        }
    }

    static isExtensionUrl(URL) {
        return !!URL && URL.startsWith("chrome-extension://");
    }

    static isHashTagChange(curURL, oldURL) {
        if (!curURL || !oldURL)
            return false;
        const curURLMatch = curURL.match(/^[^#]+#/);//curURL可能没有#
        const oldURLMatch = oldURL.match(/^[^#]+#/);
        if (curURLMatch && oldURLMatch) {
            if (oldURLMatch[0] === curURLMatch[0])//如果#前面的相同，则认为只是hash变换
                return true;
        } else if (oldURLMatch) {// old URL有#号
            //如果旧的有#，新的没有，但是加上#，和旧的相同；
            //说明curURL是没有#的，而旧版的有
            if (oldURLMatch[0] === curURL + "#")
                return true;
        }
        return false;
    }

    static getDomain(URL) {
        let hostname = URLParse(URL).hostname;
        if(hostname.startsWith("www.") )
            hostname = hostname.substr(4);
        return hostname;
    }

    static getTopLevelDomain(URL) {
        const parsedURL = URLParse(URL);
        const hostnamePartList = parsedURL.hostname.split(".");
        return hostnamePartList.slice(hostnamePartList.length - 2).join(".");//www.baidu.com；  表示从中间，到最后
    }

    static isRecognizedProtocol(URL) {
        const parsedURL = URLParse(URL);
        return URL && (!parsedURL.protocol || "http:" === parsedURL.protocol || "https:" === parsedURL.protocol);
    }
}

export {Url}