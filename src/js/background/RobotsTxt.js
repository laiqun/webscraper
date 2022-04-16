import {Str} from "../common/Str.js"//r = i(75),
import {Url} from "../devtools/Selector/Url.js"//a = i(19),
import {default as Log} from "../log/log.js";//o = i(5),
class RobotsTxt {
    async getRobotsTextContent(e) {
        const page_url = await e.getPageUrl();
        const url = Url.combine(page_url, "/robots.txt");
        try {
            return await e.downloadUrl(url);
        } catch (exception) {
            Log.notice("failed to download robots.txt", {
                error: exception.toString(),
                url: url
            });
            return  "";
        }
    }

    async getSitemapXmlLinksFromRobotsTxt(e) {
        const t = await this.getRobotsTextContent(e);
        const regx = /Sitemap:\s+(https?:\/\/[^\s]+)/g;
        const result = [];
        let a = regx.exec(t);
        for (; a;) {
            const e = Str.removeCDATA(a[1]);
            result.push(e);
            a = regx.exec(t);
        }
        return  result;
    }
}

export {RobotsTxt}