import {Job} from "../Job.js"//const r = i(500);
class jobDbStorage {
    constructor(e) {
        this.urlsAddedToQueue = {};
        this.jobQueue = [];
        this.dataWriter = e.dataWriter;
        this.loadStartUrls(e.sitemap);
    }

    canBeAdded(url) {
        return undefined === this.urlsAddedToQueue[url] && null === url.match(/\.(doc|docx|pdf|ppt|pptx|odt)$/i);
    }

    async updateJob(job) {
        await this.dataWriter.writeDocs(job.data);
        for (const oneNewJob of job.newJobs)
            this.addJob(oneNewJob);
    }

    async getJob() {
        if (this.jobQueue.length > 0) {
            return this.jobQueue.pop();
        }
    }

    syncExecutedJobs() {
        return Promise.resolve();
    }

    loadStartUrls(sitemap) {
        const startUrls = sitemap.getStartUrls();
        for (const startUrl of startUrls)
            if (this.canBeAdded(startUrl)) {
                this.urlsAddedToQueue[startUrl] = true;
                const job = new Job({
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

    addJob(job) {
        if (this.canBeAdded(job.url)) {
            this.urlsAddedToQueue[job.url] = true;
            this.jobQueue.push(job);
        }
    }
}

export {jobDbStorage}