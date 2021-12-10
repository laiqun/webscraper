var n = this && this.__decorate || function (e, t, i, n) {
    var r, a = arguments.length, o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (o = (a < 3 ? r(o) : a > 3 ? r(t, i, o) : r(t, i)) || o);
    return a > 3 && o && Object.defineProperty(t, i, o), o;
};
var r = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
import * as o from "mobx-react"//const o = i(21),
import * as s from "react"// s = i(0),
import * as c from "./BaseComponent.js" //, c = i(25);
import * as l from "./backgroundPageClient.js" //l = i(68)
let SitemapExportDataView = class extends c.BaseComponent {
    constructor(e) {
        super({});
        this.state = {
            linkGenerated: !1
        };
    }

    async componentWillMount() {
            const {sitemap: e} = this.props.appState;
            const t = await l.backgroundPageClient.getSitemapData(e._id);
            const i = e.getDataExportCsvBlob(t);
            this.downloadLink.href = window.URL.createObjectURL(i);
            this.setState({
                linkGenerated: true
            });
    }

    render() {
        const {sitemap: e} = this.props.appState;
        return s.createElement("div", {
            className: "panel"
        }, s.createElement("div", {
            className: "panel-body"
        }, s.createElement("p", null, "Loading ", e._id, " data from storage and generating a CSV file.", s.createElement("br", null), "Once the file has been generated a download link will appear here ", ">", s.createElement("span", {
            className: "download-button" + (this.state.linkGenerated ? "" : " hide")
        }, "\xa0", s.createElement("a", {
            download: e._id + ".csv",
            ref: e => this.downloadLink = e
        }, "Download now!")))));
    }
};
SitemapExportDataView = n([o.inject("appState"), o.observer, r("design:paramtypes", [Object])], SitemapExportDataView);
export {SitemapExportDataView}