//75
import * as n from "buffer"

class Str {
    static slugify(e) {
        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    }

    static removeCDATA(e) {
        return e.startsWith("<![CDATA[") && e.endsWith("]]>") && (e = e.substr(9, e.length - 12)),
            e;
    }

    static getSize(t) {
        return "undefined" != typeof Blob ? new Blob([t]).size : n.Buffer.byteLength(t, "utf-8");
    }
    //splitCamelCase("pageLoadDelay")
    //"page Load Delay"
    static splitCamelCase(e) {
        return e.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
    }
}
export {Str}