import * as r from "../Job.js"//const r = i(500);
class BrowserPouchDbStorage {
    constructor(e) {
        this.urlsAddedToQueue = {};
        this.jobQueue = [];
        this.dataWriter = e.dataWriter;
        this.loadStartUrls(e.sitemap);
    }

    canBeAdded(e) {
        return undefined === this.urlsAddedToQueue[e] && null === e.match(/\.(doc|docx|pdf|ppt|pptx|odt)$/i);
    }

    async updateJob(e) {
        await this.dataWriter.writeDocs(e.data);
        for (const job of e.newJobs)
            this.addJob(job);
    }

    getJob() {
        if (this.jobQueue.length > 0) {
            return this.jobQueue.pop();
        }
    }

    syncExecutedJobs() {
        return Promise.resolve();
    }

    loadStartUrls(e) {
        const startUrls = e.getStartUrls();
        for (const startUrl of startUrls)
            if (this.canBeAdded(startUrl)) {
            this.urlsAddedToQueue[startUrl] = true;
            const job = new r.Job({
                url: startUrl,
                baseData: {
                    "web-scraper-start-url": startUrl
                },
                parentSelector: "_root"
            });
            this.addJob(job);
            this.jobQueue.push(job);
        }
    }

    addJob(e) {
        if(this.canBeAdded(e.url))
        {
            this.urlsAddedToQueue[e.url] = true;
            this.jobQueue.push(e);
        }
    }
}

export {BrowserPouchDbStorage}