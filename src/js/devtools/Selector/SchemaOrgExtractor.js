import * as a from "./schemaOrg.js"//a = i(283),
import * as o from "./BaseExtractor.js"//o = i(97),
import * as r from "./DataObject.js"//r = i(135),
import * as s from "./JsonLdExtractor.js"//s = i(285),
import * as l from "./MicroDataExtractor.js"//const    l = i(393);
//https://stackoverflow.com/questions/58510177/uncaught-syntaxerror-unexpected-token-reactjs-mainchunk-js
class SchemaOrgExtractor extends o.BaseExtractor {
    async findRawData(e) {
        const jsonLdExtractor = new s.JsonLdExtractor;
        const raw_data = await jsonLdExtractor.findRawData(e);
        const microDataExtractor = new l.MicroDataExtractor;
        const raw_data2 = await microDataExtractor.findRawData(e);
        const raw_data_sum = [].concat(raw_data, raw_data2);
        const mapdata = {};
        const result = [];
        for (const e of raw_data_sum)
            for (const oneData of e.data) {
                const schemaOrgType = a.schemaOrg.getTypeFromDataObject(oneData);
                if (schemaOrgType)
                    if (undefined !== mapdata[schemaOrgType])
                        mapdata[schemaOrgType].data.push(oneData);
                    else {
                        const dataObjectSelectors = a.schemaOrg.getSelectorsFromDataObject(oneData);
                        mapdata[schemaOrgType] = {
                            dataObjectSelectors: dataObjectSelectors,
                            schemaOrgType: schemaOrgType,
                            data: [oneData]
                        };
                        result.push(mapdata[schemaOrgType]);
                    }
            }
        return result;
    }

    async extractData(e, t, i) {
        const rcdata = await this.findRawData(e);
        let result = [];
        for (const e of rcdata) {
            if (e.schemaOrgType !== i)
                continue;
            const n = r.DataObject.extractData(e.data, t);
            result = result.concat(n);
        }
        return result;
    }
}

export {SchemaOrgExtractor}