var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};
var r = this && this.__metadata || function (e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
};
import * as o from "mobx-react"//const o = i(21),
import * as s from "react"// s = i(0),
import * as c from "./BaseComponent.js" //, c = i(25);
import * as l from "../IM/backgroundPageClient.js" //l = i(68)
import {File} from "../File.js";
import * as u from "./Loader.js"
let SitemapExportDataView = class extends c.BaseComponent {
    constructor(e) {
        super(e);
        /*
        this.state = {
            linkGenerated: !1
        };*/
        e.appState.stopLoader();
    }
    
    async downloadFile(filetype) {
        console.log("downloadFile");
        const {sitemap: sitemap} = this.props.appState;
        this.props.appState.startLoader();
        const i = await l.backgroundPageClient.getSitemapData(sitemap._id);
        let result;
        if("csv" === filetype )
        {
            result = sitemap.getDataExportCsvBlob(i);
        }
        else
        {
            result = await sitemap.getDataExportXlsxBlob(i);
        }
        File.blobDownload(result , `${sitemap._id}.${filetype}`);
        this.props.appState.stopLoader();
    }

    render() {
        return this.props.appState.loading ? s.createElement(u.Loader, {
            message: "Generating file"
        }) : s.createElement("div", {
            className: "download-button-block"
        }, s.createElement("div", {
            className: "download-as"
        }, "Download as:"), s.createElement("div", null, s.createElement("button", {
            type: "button",
            className: "download-button btn btn-primary btn-xs xlsx-file",
            onClick: this.downloadFile.bind(this, "xlsx")
        }, ".XLSX"), s.createElement("button", {
            type: "button",
            className: "download-button btn btn-primary btn-xs csv-file",
            onClick: this.downloadFile.bind(this, "csv")
        }, ".CSV")));
    }
};
SitemapExportDataView = n([o.inject("appState"), o.observer, r("design:paramtypes", [Object])], SitemapExportDataView);
export {SitemapExportDataView}