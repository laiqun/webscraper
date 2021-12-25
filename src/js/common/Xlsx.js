import * as jszip from "jszip"
import * as a from "./Xml.js"
class Xlsx {
    static async getXlsxBlob(e, t) {
        const zip = new jszip;
        const n = zip.folder("docProps");
        n.file("app.xml", this.getAppData());
        n.file("core.xml", this.getCoreData());
        zip.folder("_rels").file(".rels", this.getRelsData());
        zip.file("[Content_Types].xml", this.getContentTypesData());
        const a = zip.folder("xl");
        a.folder("_rels").file("workbook.xml.rels", this.getWorkbookXmlRelsData());
        a.file("sharedStrings.xml", this.getSharedStringsData());
        a.file("styles.xml", this.getStylesData());
        a.file("workbook.xml", this.getWorkbookData());
        a.folder("worksheets").file("sheet1.xml", this.generateSheetData(e, t))
        return "undefined" != typeof Blob ? zip.generateAsync({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }) : zip.generateAsync({
            type: "arraybuffer"
        });
    }

    static getAppData() {
        return '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Spout</Application><TotalTime>0</TotalTime></Properties>';
    }

    static getCoreData() {
        const e = new Date;
        return `<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dcterms:created xsi:type="dcterms:W3CDTF">${e.toISOString()}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${e.toISOString()}</dcterms:modified><cp:revision>0</cp:revision></cp:coreProperties>`;
    }

    static getRelsData() {
        return '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdWorkbook" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rIdCore" Type="http://schemas.openxmlformats.org/officedocument/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rIdApp" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>';
    }

    static getContentTypesData() {
        return '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="application/vnd.openxmlformats-package.core-properties+xml" PartName="/docProps/core.xml"/><Override ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" PartName="/docProps/app.xml"/></Types>';
    }

    static getWorkbookXmlRelsData() {
        return '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"/><Relationship Id="rIdSharedStrings" Target="sharedStrings.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"/><Relationship Id="rIdSheet1" Target="worksheets/sheet1.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/></Relationships>';
    }

    static getSharedStringsData() {
        return '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>';
    }

    static getStylesData() {
        return '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="@"/></numFmts><fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleLight16"/></styleSheet>';
    }

    static getWorkbookData() {
        return '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:jszip="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Sheet1" sheetId="1" jszip:id="rIdSheet1"/></sheets></workbook>';
    }

    static generateSheetData(e, t) {
        return `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">${this.getSheetData(e, t)}</sheetData></worksheet>`;
    }

    static getSheetData(e, t) {
        let i = "<sheetData>";
        let n = "";
        const r = t;
        const o = this.generateColumnLetters(t.length);
        i = `${i}<row r="1" spans="1:${r.length}">`;
        r.forEach((e, t) => {
            i = `${i}<c r="${o[t]}1" s="1" t="inlineStr"><is><t>${e}</t></is></c>`;
        });
        i += "</row>";
        for (let t = 0; t < e.length; t++) {
            const s = e[t];
            delete s._id;
            delete s._rev;
            const l = Object.keys(s).length;
            n = `<row r="${t + 2}" spans="1:${l}">`;
            r.forEach((e, i) => {
                const r = s[e] ? `<t>${a.Xml.filterXmlEscapeCharacters(s[e])}</t>` : "<t></t>";
                n += `<c r="${o[i]}${t + 2}" s="1" t="inlineStr"><is>${r}</is></c>`;
            });
            i = i + n + "</row>";
        }
        return i;
    }

    static generateColumnLetters(e) {
        const t = e => e.replace(/([^Z]?)(Z*)$/, (e, t, i) => {
            return (t ? String.fromCharCode(t.charCodeAt(0) + 1) : "A") + i.replace(/Z/g, "A");
        });
        const i = [];
        for (let n = 0, r = ""; n < e; n++)
        {
            r = t(r);
            i.push(r);
        }
        return i;
    }
}

export {Xlsx}