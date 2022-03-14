! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.define_me = t() : e.define_me = t() }(this, (function() {
    return (() => {
        "use strict";
        var e = { d: (t, n) => { for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } },
            t = {};
        e.r(t), e.d(t, { containsThis: () => m, dashDDMMYYYY: () => u, dashYYYYMMDD: () => p, git: () => o, hhmm: () => r, hhmmss: () => d, hyphenDDMMYYYY: () => s, hyphenYYYYMMDD: () => a, knexDate: () => c, matchWords: () => y, node_modules: () => n, stringDate: () => f, yyyymmdd: () => i });
        var n = /^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/,
            o = /^(?:.*[\\\/])?.git(?:[\\\/].*)?$/,
            r = /^(2[0-3]|[01][0-9]):?([0-5][0-9])$/,
            d = /^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])$/,
            i = /((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/,
            a = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/,
            s = /^\d{1,2}\-\d{1,2}\-\d{4}$/,
            p = /^\d{4}\/\d{1,2}\/\d{1,2}$/,
            u = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
            f = /(\w{2,}) (\d{1,}),*\s*\d*/g,
            c = /(.{1,})T(.{1,})Z/g;

        function m(e, t) {
            return function(e) {
                var t = new RegExp(/^[A-Z]/),
                    n = new RegExp(/^[a-z]/),
                    o = t.test(e),
                    r = n.test(e);
                return o && r
            }(e) && (e = function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }(e)), new RegExp(t).test(e)
        }

        function y(e, t) { for (var n = /[(){[*+?.\\^$|]/g, o = 0; o < t.length; o++) t[o] = t[o].replace(n, "\\$&"); var r = new RegExp("\\b(?:" + t.join("|") + ")\\b", "gi"); return e.match(r) || [] }
        return t
    })()
}));