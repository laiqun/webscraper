import * as r from "./LocationAssignmentOperatorMatcher.js"//r = i(406),
import * as a from "./LocationAssignmentMatcher.js"//a = i(407),
import * as o from "./LocationReplacementMatcher.js"//o = i(408),
import * as s from "./LocationHrefAssignmentMatcher.js"//const  s = i(409);

class LinkFromInlineScriptExtractor {
    async execute(e) {
        const t = await e.getNativeAttr("href"), i = await e.getNativeAttr("onclick");
        for (const e of [t, i]) {
            if (!e)
                continue;
            const t = [new r.LocationAssignmentOperatorMatcher,
                new s.LocationHrefAssignmentMatcher,
                new a.LocationAssignmentMatcher,
                new o.LocationReplacementMatcher];
            for (const i of t) {
                const t = i.match(e);
                if (t)
                    return t;
            }
        }
    }
}


export {LinkFromInlineScriptExtractor}