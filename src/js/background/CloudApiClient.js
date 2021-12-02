import * as axios from "axios"//const r = i(502) ;
class CloudApiClient {
    constructor(e) {
        this.authService = e.authService;
        if(e.apiHost )
            this.apiHost = e.apiHost;
        else
            this.apiHost = "cloud.webscraper.io";
    }

    async fetchSitemaps() {
        const sitemaps = await this.callCloud("get-all");
        sitemaps.forEach(sitemap => sitemap.localStorage = false);
        return  sitemaps;
    }

    async fetchSitemap(e) {
        const t = await this.callCloud("get/" + e);
        return JSON.parse(t.sitemap);
    }

    async pushSitemap(e) {
        await this.callCloud("push", {
            sitemaps: [e]
        });
    }

    async callCloud(e, t = {}) {
        const api_token = await this.authService.apiToken;
        const url = new URL(`https://${this.apiHost}/extension-api/v1/sitemaps/${e}`);
        url.search = new URLSearchParams({ //URLSearchParams在native函数，用来支持给URL加查询字符串的
            extension_api_token: api_token
        }).toString();
        const request = {
            url: url.toString(),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            method: "POST",
            data: t
        };
        try {
            const axiosResponse = await axios.default(request);
            if(axiosResponse.data && axiosResponse.data.data)
                return axiosResponse.data.data;
            else
                return undefined;
        } catch (exception) {
            if(exception.response && exception.response.data )
            {
                if("object" == typeof exception.response.data.error)
                {
                   throw new Error(Object.values(exception.response.data.error).join("||"))
                }
                else {
                   throw new Error(exception.response.data.error)
                }
            }
            else
            {
                throw new Error("Something went wrong.");
            }
        }
    }
}

export {CloudApiClient}