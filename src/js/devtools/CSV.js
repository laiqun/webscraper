class CSV {
    static escapeString(e) {
        return e.replace(/"/g, '""');
    }

    static encodeValue(e) {
        let result = "";
        if(undefined === e) {
            result = "";
        }
        else if("object" == typeof e) {
            result = JSON.stringify(e);
        }
        else {
            result = ("" + e).trim();
        }
        result = this.escapeString(result);
        return  `"${result}"`;
    }

    static getCsvDataArray(e, t) {
        const result = ["\ufeff"];
        result.push(t.join(",") + "\r\n");
        for (const n of e) {
            const e = [];
            for (const i of t) {
                const t = this.encodeValue(n[i]);
                e.push(t);
            }
            result.push(e.join(",") + "\r\n");
        }
        return result;
    }

    static getCsvBlob(e, t) {
        const i = this.getCsvDataArray(e, t);
        return new Blob(i, {
            type: "text/csv"
        });
    }
}

export {CSV}