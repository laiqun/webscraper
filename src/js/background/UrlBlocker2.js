import * as URLParse from "url-parse"//const n = i(48),
class UrlBlocker2 {
    constructor() {
        this.blockedDomains = [];
        this.blockedUrls = [];
    }

    setBlockList(urls) {
        this.blockedDomains = [];
        this.blockedUrls = [];
        for (const url of urls)
            url.match(/^https?:\/\//) ? this.blockedUrls.push(url) : this.blockedDomains.push(url);
    }

    isUrlBlocked(e) {
        e = e.toLowerCase();
        return  !!this.isBlockedByDomainFilter(e) || !!this.isBlockedByUrlFilter(e);
    }

    isBlockedByDomainFilter(e) {
        const t = URLParse(e);
        for (const blockedDomain of this.blockedDomains)
            if (t.hostname === blockedDomain)
                return true;
        return false;
    }

    isBlockedByUrlFilter(e) {
        for (const blockedUrl of this.blockedUrls)
            if (e.startsWith(blockedUrl))
                return true;
        return false;
    }
}

export {UrlBlocker2}