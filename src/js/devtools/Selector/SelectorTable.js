import * as o from "../../contentjs/cssSelector.js"//o = i(123),
import * as s from "./Selector.js"//const  s = i(10);
import * as l from "../emptyRecordValue.js"//, l = i(29)
class SelectorTable extends s.Selector {
    constructor(e) {
        super();
        this.type = "SelectorTable";
        this.delay = 0;
        this.multiple = !0;
        this.selector = "";
        this.tableDataRowSelector = "";
        this.tableHeaderRowSelector = "";
        this.columns = [];
        this.updateData(e);
    }

    canReturnMultipleRecords() {
        return !0;
    }

    canHaveChildSelectors() {
        return !1;
    }

    canCreateNewJobs() {
        return !1;
    }

    willReturnElements() {
        return !1;
    }

    async getTableHeaderColumns(e) {
        const t = this.getTableHeaderRowSelector();
        const i = await e.getElements(t);
        if (i.length < 1)
            return {};
        {
            const e = i[0], t = await e.getElements("td,th"), n = [];
            for (const e of t) {
                const t = await e.getText();
                n.push(t.replace("\n", " "));
            }
            let r = 1;
            const a = {};
            return n.forEach(e => {
                a[e] = {
                    index: r
                }, r++;
            }), a;
        }
    }

    async extractTableData(e) {
        const t = await this.getTableHeaderColumns(e);
        const i = this.getTableDataRowSelector();
        const n = await e.getElements(i);
        const r = [];
        for (const e of n) {
            const i = await this.extractRowData(e, t);
            r.push(i);
        }
        return r;
    }

    async extractRowData(e, t) {
        const i = {};
        for (const n of this.columns) if (!0 === n.extract) if (void 0 === t[n.header]) i[n.name] = l.emptyRecordValue; else {
            const r = `td:nth-child(${t[n.header].index}),th:nth-child(${t[n.header].index})`,
                a = await e.getElements(r);
            if (0 === a.length) i[n.name] = l.emptyRecordValue; else {
                const e = await a[0].getText();
                i[n.name] = e;
            }
        }
        return i;
    }

    async _getData(e) {
        const t = await this.getDataElements(e);
        let i = 0;
        let result =[];
        for (const e of t) {
            const t = await this.extractTableData(e);
            for (const e of t)
            {
                result.push( e);
                i++;
            }
            if (false === this.multiple)
                return await void 0;
        }
        if(0 === i && false === this.multiple )
            return  this.getEmptyRecord();
        return result;
    }

    getDataColumns() {
        const e = [];
        return this.columns.forEach(t => {
            true === t.extract && e.push(t.name);
        }), e;
    }

    getFeatures() {
        return ["selector", "multiple", "columns", "delay", "tableDataRowSelector", "tableHeaderRowSelector"];
    }

    getDeprecatedFeatures() {
        return ["delay"];
    }

    getItemCSSSelector() {
        return "table";
    }

    getTableHeaderRowSelectorFromTableHTML(e, t) {
        const i = t(e),
            n = ["> thead > tr:has(td:not(:empty))", "> thead > tr:has(th:not(:empty))", "> tbody > tr:has(td:not(:empty))", "> tbody > tr:has(th:not(:empty))"].join(", "),
            r = i.find(n);
        if (r.length) {
            return new o.default({
                parent: i[0],
                query: e => t(i[0]).find(e)
            }).getCssSelector([r[0]]);
        }
        return "";
    }

    getTableDataRowSelectorFromTableHTML(e, t) {
        const i = t(e);
        let n;
        if (i.find("> thead > tr:has(td:not(:empty)), > thead > tr:has(th:not(:empty))").length) n = i.find("> tbody > tr"); else if (i.find("> tbody > tr > td:not(:empty), > tbody > tr > th:not(:empty)").length) {
            const e = i.find("> tbody > tr"),
                t = `> tbody > tr:nth-of-type(n+${e.index(e.filter(":has(td:not(:empty)),:has(th:not(:empty))")[0]) + 2})`;
            n = i.find(t);
        }
        if (n && n.length) {
            let e = new o.default({
                parent: i[0],
                query: e => t(i[0]).find(e)
            }).getCssSelector(n.get());
            return 1 === n.length && e.match(/nth\-of\-type\((\d+)\)/) && (e = e.replace(/nth\-of\-type\((\d+)\)/, "nth-of-type(n+$1)")),
                e;
        }
        return "";
    }

    getTableHeaderRowSelector() {
        return void 0 === this.tableHeaderRowSelector ? "thead tr" : this.tableHeaderRowSelector;
    }

    getTableDataRowSelector() {
        return void 0 === this.tableDataRowSelector ? "tbody tr" : this.tableDataRowSelector;
    }

    getTableHeaderColumnsFromHTML(e, t, i) {
        const n = i(t).find(e).find("td,th");
        const result = [];
        n.each((e, t) => {
            i(t).find("br").length && i(t).find("br").html(" ");
            const n = i(t).text().trim(), a = n;
            0 !== n.length && result.push({
                header: n,
                name: a,
                extract: !0
            });
        });
        return  result;
    }
}

export {SelectorTable}