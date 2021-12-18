class StoreScrapeResultWriter{
    constructor(newPouchDB) {
        this.db = newPouchDB;
    }

    async writeDocs(docs) {
        if(0 !== docs.length )
            await this.db.bulkDocs(docs);
    }
}

export {StoreScrapeResultWriter}