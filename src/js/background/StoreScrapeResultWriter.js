class StoreScrapeResultWriter{
    constructor(e) {
        this.db = e;
    }

    async writeDocs(e) {
        if(0 !== e.length )
            await this.db.bulkDocs(e);
    }
}

export {StoreScrapeResultWriter}