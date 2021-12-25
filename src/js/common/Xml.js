class Xml{
    static filterXmlEscapeCharacters(e) {
        return (e = void 0 === e ? "" : "string" != typeof e ? JSON.stringify(e) : e.trim()).replace(/[<>&'"]/g, e => {
            switch (e) {
                case "<":
                    return "&lt;";

                case ">":
                    return "&gt;";

                case "&":
                    return "&amp;";

                case "'":
                    return "&apos;";

                case '"':
                    return "&quot;";
            }
        });
    }
}

export {Xml}