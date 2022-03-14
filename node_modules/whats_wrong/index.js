! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("make_legit")) : "function" == typeof define && define.amd ? define(["make_legit"], t) : "object" == typeof exports ? exports.whats_wrong = t(require("make_legit")) : e.whats_wrong = t(e.make_legit) }(this, (function(e) {
    return (() => {
        "use strict";
        var t = { 95: t => { t.exports = e } },
            r = {};

        function o(e) { var n = r[e]; if (void 0 !== n) return n.exports; var i = r[e] = { exports: {} }; return t[e](i, i.exports, o), i.exports }
        o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t }, o.d = (e, t) => { for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) };
        var n = {};
        return (() => {
            o.r(n), o.d(n, { upset: () => t });
            var e = o(95);

            function t(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    n = (0, e.format)(t, "string"),
                    i = { error: n, location: r, expected: o },
                    a = (0, e.format)(i, "string");
                return console.log("\n*** check ***\n" + a + "\n*** end ***\n"), i
            }
        })(), n
    })()
}));