    function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, "BrowserRouter", (function() {
        return h;
    })), i.d(t, "HashRouter", (function() {
        return v;
    })), i.d(t, "Link", (function() {
        return M;
    })), i.d(t, "MemoryRouter", (function() {
        return c.MemoryRouter;
    })), i.d(t, "NavLink", (function() {
        return _;
    })), i.d(t, "Prompt", (function() {
        return c.Prompt;
    })), i.d(t, "Redirect", (function() {
        return c.Redirect;
    })), i.d(t, "Route", (function() {
        return c.Route;
    })), i.d(t, "Router", (function() {
        return c.Router;
    })), i.d(t, "StaticRouter", (function() {
        return c.StaticRouter;
    })), i.d(t, "Switch", (function() {
        return c.Switch;
    })), i.d(t, "matchPath", (function() {
        return c.matchPath;
    })), i.d(t, "withRouter", (function() {
        return c.withRouter;
    }));
    var n = i(0), r = i.n(n), a = i(2), o = i.n(a), s = i(531), l = i.n(s), c = i(16);
    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function d(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var p = function(e) {
        function t() {
            var i, n;
            u(this, t);
            for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return i = n = d(this, e.call.apply(e, [ this ].concat(a))), n.history = l()(n.props),
            d(n, i);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, e), t.prototype.render = function() {
            return r.a.createElement(c.Router, {
                history: this.history,
                children: this.props.children
            });
        }, t;
    }(r.a.Component);
    p.propTypes = {
        basename: o.a.string,
        forceRefresh: o.a.bool,
        getUserConfirmation: o.a.func,
        keyLength: o.a.number,
        children: o.a.node
    };
    var h = p, f = i(532), m = i.n(f);
    function g(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function y(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var b = function(e) {
        function t() {
            var i, n;
            g(this, t);
            for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return i = n = y(this, e.call.apply(e, [ this ].concat(a))), n.history = m()(n.props),
            y(n, i);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, e), t.prototype.render = function() {
            return r.a.createElement(c.Router, {
                history: this.history,
                children: this.props.children
            });
        }, t;
    }(r.a.Component);
    b.propTypes = {
        basename: o.a.string,
        getUserConfirmation: o.a.func,
        hashType: o.a.oneOf([ "hashbang", "noslash", "slash" ]),
        children: o.a.node
    };
    var v = b, w = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
    };
    function S(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function A(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var x = function(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
    }, C = function(e) {
        function t() {
            var i, n;
            S(this, t);
            for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            return i = n = A(this, e.call.apply(e, [ this ].concat(a))), n.handleClick = function(e) {
                if (n.props.onClick && n.props.onClick(e), !e.defaultPrevented && 0 === e.button && !n.props.target && !x(e)) {
                    e.preventDefault();
                    var t = n.context.router.history, i = n.props, r = i.replace, a = i.to;
                    r ? t.replace(a) : t.push(a);
                }
            }, A(n, i);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, e), t.prototype.render = function() {
            var e = this.props, t = (e.replace, e.to), i = function(e, t) {
                var i = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                return i;
            }(e, [ "replace", "to" ]), n = this.context.router.history.createHref("string" == typeof t ? {
                pathname: t
            } : t);
            return r.a.createElement("a", w({}, i, {
                onClick: this.handleClick,
                href: n
            }));
        }, t;
    }(r.a.Component);
    C.propTypes = {
        onClick: o.a.func,
        target: o.a.string,
        replace: o.a.bool,
        to: o.a.oneOfType([ o.a.string, o.a.object ]).isRequired
    }, C.defaultProps = {
        replace: !1
    }, C.contextTypes = {
        router: o.a.shape({
            history: o.a.shape({
                push: o.a.func.isRequired,
                replace: o.a.func.isRequired,
                createHref: o.a.func.isRequired
            }).isRequired
        }).isRequired
    };
    var M = C, E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
    }, O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var P = function(e) {
        var t = e.to, i = e.exact, n = e.strict, a = e.location, o = e.activeClassName, s = e.className, l = e.activeStyle, u = e.style, d = e.isActive, p = function(e, t) {
            var i = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
            return i;
        }(e, [ "to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive" ]);
        return r.a.createElement(c.Route, {
            path: "object" === (void 0 === t ? "undefined" : O(t)) ? t.pathname : t,
            exact: i,
            strict: n,
            location: a,
            children: function(e) {
                var i = e.location, n = e.match, a = !!(d ? d(n, i) : n);
                return r.a.createElement(M, E({
                    to: t,
                    className: a ? [ o, s ].filter((function(e) {
                        return e;
                    })).join(" ") : s,
                    style: a ? E({}, u, l) : u
                }, p));
            }
        });
    };
    P.propTypes = {
        to: M.propTypes.to,
        exact: o.a.bool,
        strict: o.a.bool,
        location: o.a.object,
        activeClassName: o.a.string,
        className: o.a.string,
        activeStyle: o.a.object,
        style: o.a.object,
        isActive: o.a.func
    }, P.defaultProps = {
        activeClassName: "active"
    };
    var _ = P;
},
