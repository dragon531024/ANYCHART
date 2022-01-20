/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: exports, data-adapter
 * Version: 8.8.0.1931 (2020-05-22)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2020. All rights reserved.
 */
(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var wrapper = function (w) {
            if (!w.document) {
                throw Error('AnyChart requires a window with a document');
            }
            factory.call(w, w, w.document);
            try {
                w.acgraph.isNodeJS = Object.prototype.toString.call(global.process) == "[object process]";
            } catch (e) {};
            return w.anychart;
        };
        module.exports = global.document ? wrapper(global) : wrapper;
    } else {
        factory.call(global, window, document)
    }
})(typeof window !== 'undefined' ? window : this, function (window, document, opt_noGlobal) {
    var $, _, $_ = this.anychart;
    if ($_ && (_ = $_._)) {
        $ = $_.$
    } else {
        throw Error('anychart-base.min.js module should be included first. See modules explanation at https://docs.anychart.com/Quick_Start/Modules for details');
        $ = {};
        _ = {}
    }
    if (!_.exports) {
        _.exports = 1;
        (function ($) {
            var LW, Wfa, MW, OW, Xfa, QW, SW, TW, UW, VW, WW, XW, ZW, Zfa, $W, aX, aga, bga, bX, dga, cX, dX, eX, ega, fX, gX, hX, fga, gga, hga, iX, jX, kX, lX, iga, nX, oX, pX, rX, tX, lga, sX, uX, mga, xX, vX, wX, jga, zX, EX, oga, GX, BX, FX, HX, DX, IX, JX, LX, OX, PX, KX, QX, tga, wga, uga, VX, $X, ZX, UX, WX, XX, cY, eY, fY, gY, hY, jY, kY, lY, yga, nY, oY, pY, zga, rY, qY;
            LW = function (a, b, c) {
                $.n(c) || (c = "a4");
                c = KW[c];
                $.n(a) && $.n(b) ? $.z(a) && $.da(b) ? (a = a.toLowerCase(), (a = KW[a]) && (b ? c = {
                    width: a.height,
                    height: a.width
                } : c = a)) : (c.width = String(a), c.height = String(b)) : $.n(a) && (a = KW[String(a)]) && (c = a);
                $.gc(c.width, "px") || $.gc(c.width, "mm") || (c.width += "px");
                $.gc(c.height, "px") || $.gc(c.height, "mm") || (c.height += "px");
                return c
            };
            Wfa = function (a, b) {
                $.uj(a, null, b, void 0)
            };
            MW = function (a, b) {
                if (a) {
                    var c = $.Ne("STYLE");
                    c.type = "text/css";
                    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(window.document.createTextNode(String(a)));
                    $.We($.Be(window.document, "head", void 0, b)[0], c, 0)
                }
            };
            OW = function () {
                NW && (window.document.body.removeChild(NW), NW = null)
            };
            Xfa = function () {
                if (NW) {
                    var a = NW,
                        b = a.contentWindow;
                    $.vp ? (PW = $.fa.open(), PW.document.write(b.document.documentElement.innerHTML), OW(), PW.onafterprint = function () {
                        (0, window.setTimeout)(function () {
                            PW.close()
                        }, 0)
                    }, (0, window.setTimeout)(function () {
                        PW.focus();
                        PW.print()
                    }, 0)) : $.hd ? (0, window.setTimeout)(function () {
                        $.uf(a, "visibility", "");
                        b.onafterprint = OW;
                        b.focus();
                        b.print()
                    }, 0) : ($.zj(OW, 6), b.focus(), b.print())
                }
            };
            QW = function () {
                if (!NW) {
                    var a = window.document.createElement("iframe");
                    NW = a;
                    $.uf(a, {
                        visibility: "hidden",
                        position: "fixed",
                        right: 0,
                        bottom: 0
                    });
                    window.document.body.appendChild(a);
                    for (var b = $.dk(), c, d = 0, e = b.length; d < e; d++)
                        if (c = b[d], c.type == Yfa) {
                            var f = "";
                            c.cssText ? f = c.cssText : c.style && c.style.cssText && c.selectorText && (f = c.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), f = c.selectorText + " { " + f + " }");
                            MW(f, a.contentWindow.document)
                        } MW("body{padding:0;margin:0;height:100%;}@page {size: auto; margin: 0; padding:0}",
                        a.contentWindow.document)
                }
                return NW
            };
            SW = function (a) {
                if (RW[a]) return RW[a];
                a = String(a);
                if (!RW[a]) {
                    var b = /function ([^\(]+)/.exec(a);
                    RW[a] = b ? b[1] : "[Anonymous]"
                }
                return RW[a]
            };
            TW = function (a, b) {
                var c = [];
                if ($.Aa(b, a)) c.push("[...circular reference...]");
                else if (a && 50 > b.length) {
                    c.push(SW(a) + "(");
                    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                        0 < e && c.push(", ");
                        var f = d[e];
                        switch (typeof f) {
                            case "object":
                                f = f ? "object" : "null";
                                break;
                            case "string":
                                break;
                            case "number":
                                f = String(f);
                                break;
                            case "boolean":
                                f = f ? "true" : "false";
                                break;
                            case "function":
                                f = (f = SW(f)) ? f : "[fn]";
                                break;
                            default:
                                f = typeof f
                        }
                        40 < f.length && (f = f.substr(0, 40) + "...");
                        c.push(f)
                    }
                    b.push(a);
                    c.push(")\n");
                    try {
                        c.push(TW(a.caller, b))
                    } catch (h) {
                        c.push("[exception trying to get caller]\n")
                    }
                } else a ?
                    c.push("[...long stack...]") : c.push("[end]");
                return c.join("")
            };
            UW = function (a) {
                var b = Error();
                if (Error.captureStackTrace) Error.captureStackTrace(b, a || UW), b = String(b.stack);
                else {
                    try {
                        throw b;
                    } catch (c) {
                        b = c
                    }
                    b = (b = b.stack) ? String(b) : null
                }
                b || (b = TW(a || arguments.callee.caller, []));
                return b
            };
            VW = function (a) {
                return a instanceof $.ce && a.constructor === $.ce && a.f === $.be ? a.b : "type_error:Const"
            };
            WW = function () {
                var a = $.n($.fa.URL) && $.n($.fa.URL.createObjectURL) ? $.fa.URL : $.n($.fa.webkitURL) && $.n($.fa.webkitURL.createObjectURL) ? $.fa.webkitURL : $.n($.fa.createObjectURL) ? $.fa : null;
                if (null != a) return a;
                throw Error("This browser doesn't seem to support blob URLs");
            };
            XW = function (a) {
                return WW().createObjectURL(a)
            };
            ZW = function () {
                this.b = YW
            };
            Zfa = function (a) {
                if (a instanceof ZW && a.constructor === ZW && a.b === YW) return "";
                $.ka(a);
                return "type_error:TrustedResourceUrl"
            };
            $W = function (a) {
                if (a instanceof $.fe && a.constructor === $.fe && a.f === $.ee) return a.b;
                $.ka(a);
                return "type_error:SafeUrl"
            };
            aX = function (a) {
                if (a instanceof $.fe) return a;
                a = a.Rx ? a.Et() : String(a);
                $fa.test(a) || (a = "about:invalid#zClosurez");
                return $.ge(a)
            };
            aga = function (a) {
                if (a instanceof $.le && a.constructor === $.le && a.f === $.ke) return a.b;
                $.ka(a);
                return "type_error:SafeStyle"
            };
            bga = function (a) {
                return a.replace($.oD, function (a, c, d, e) {
                    var b = "";
                    d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                        b = c;
                        return d
                    });
                    a = aX(d).Et();
                    return c + b + a + b + e
                })
            };
            bX = function (a) {
                if (a instanceof $.fe) a = 'url("' + $W(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
                else if (a instanceof $.ce) a = VW(a);
                else {
                    a = String(a);
                    var b = a.replace($.oda, "$1").replace($.oD, "url");
                    if (b = cga.test(b)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c
                    }
                    a = b ? bga(a) : "zClosurez"
                }
                return a
            };
            dga = function (a) {
                var b = "",
                    c;
                for (c in a) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                    var d = a[c];
                    null != d && (d = $.A(d) ? (0, $.Wa)(d, bX).join(" ") : bX(d), b += c + ":" + d + ";")
                }
                return b ? $.me(b) : $.nda
            };
            cX = function (a) {
                if (a instanceof $.oe && a.constructor === $.oe && a.g === $.ne) return a.b;
                $.ka(a);
                return "type_error:SafeHtml"
            };
            dX = function (a) {
                if (a instanceof $.oe) return a;
                var b = null;
                a.BT && (b = a.Bx());
                a = $.pc(a.Rx ? a.Et() : String(a));
                return $.pe(a, b)
            };
            eX = function (a) {
                if (a instanceof $.oe) return a;
                a = dX(a);
                var b = cX(a);
                b = $.oc(b.replace(/  /g, " &#160;"), void 0);
                return $.pe(b, a.Bx())
            };
            ega = function (a) {
                if (!$.D(a)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
                a instanceof $.le || (a = dga(a));
                return aga(a)
            };
            fX = function (a) {
                function b(a) {
                    $.A(a) ? (0, $.Qe)(a, b) : (a = dX(a), d += cX(a), a = a.Bx(), 0 == c ? c = a : 0 != a && c != a && (c = null))
                }
                var c = 0,
                    d = "";
                (0, $.Qe)(arguments, b);
                return $.pe(d, c)
            };
            gX = function (a, b) {
                return (b || window.document).getElementsByTagName(String(a))
            };
            hX = function (a) {
                return a.contentDocument || a.contentWindow.document
            };
            fga = function (a, b, c) {
                $.vj(a, b, c, null) || $.cj($.qa(b, a))
            };
            gga = function (a) {
                return new $.kj(function (b, c) {
                    var d = a.length,
                        e = [];
                    if (d)
                        for (var f = function (a, c) {
                                d--;
                                e[a] = c;
                                0 == d && b(e)
                            }, h = function (a) {
                                c(a)
                            }, k = 0, l; k < a.length; k++) l = a[k], fga(l, $.qa(f, k), h);
                    else b(e)
                })
            };
            hga = function () {
                var a = new $.kj($.ia);
                $.hj(a, $.ij, void 0);
                return a
            };
            iX = function (a, b, c) {
                var d = {};
                b = "object" == $.ka(b) ? b : null;
                $.Dc(a, function (a, f) {
                    d[f] = b ? $.n(b[f]) ? b[f] : void 0 : a;
                    $.n(c) && (d[f] = $.n(d[f]) ? d[f] : c[f])
                });
                return d
            };
            jX = function (a) {
                if (a.Zr && "function" == typeof a.Zr) return a.Zr();
                if ($.z(a)) return a.split("");
                if ($.la(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
                }
                return $.Fc(a)
            };
            kX = function (a) {
                if (a.At && "function" == typeof a.At) return a.At();
                if (!a.Zr || "function" != typeof a.Zr) {
                    if ($.la(a) || $.z(a)) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return $.Gc(a)
                }
            };
            lX = function (a, b) {
                if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
                else if ($.la(a) || $.z(a))(0, $.Qe)(a, b, void 0);
                else
                    for (var c = kX(a), d = jX(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            };
            iga = function (a, b) {
                if (a)
                    for (var c = a.split("&"), d = 0; d < c.length; d++) {
                        var e = c[d].indexOf("="),
                            f = null;
                        if (0 <= e) {
                            var h = c[d].substring(0, e);
                            f = c[d].substring(e + 1)
                        } else h = c[d];
                        b(h, f ? (0, window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
                    }
            };
            $.mX = function (a) {
                this.D = this.O = this.j = "";
                this.N = null;
                this.G = this.b = "";
                this.f = !1;
                var b;
                a instanceof $.mX ? (this.f = $.n(void 0) ? void 0 : a.f, nX(this, a.j), this.O = a.O, this.D = a.D, oX(this, a.N), this.b = a.b, pX(this, a.g.clone()), this.G = a.G) : a && (b = String(a).match(qX)) ? (this.f = !1, nX(this, b[1] || "", !0), this.O = rX(b[2] || ""), this.D = rX(b[3] || "", !0), oX(this, b[4]), this.b = rX(b[5] || "", !0), pX(this, b[6] || "", !0), this.G = rX(b[7] || "")) : (this.f = !1, this.g = new sX(null, this.f))
            };
            nX = function (a, b, c) {
                a.j = c ? rX(b, !0) : b;
                a.j && (a.j = a.j.replace(/:$/, ""))
            };
            oX = function (a, b) {
                if (b) {
                    b = Number(b);
                    if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
                    a.N = b
                } else a.N = null
            };
            pX = function (a, b, c) {
                b instanceof sX ? (a.g = b, jga(a.g, a.f)) : (c || (b = tX(b, kga)), a.g = new sX(b, a.f))
            };
            rX = function (a, b) {
                return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
            };
            tX = function (a, b, c) {
                return $.z(a) ? (a = (0, window.encodeURI)(a).replace(b, lga), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            };
            lga = function (a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            };
            sX = function (a, b) {
                this.f = this.b = null;
                this.g = a || null;
                this.j = !!b
            };
            uX = function (a) {
                a.b || (a.b = new $.qB, a.f = 0, a.g && iga(a.g, function (b, c) {
                    a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
                }))
            };
            mga = function (a) {
                var b = kX(a);
                if ("undefined" == typeof b) throw Error("Keys are undefined");
                var c = new sX(null, void 0);
                a = jX(a);
                for (var d = 0; d < b.length; d++) {
                    var e = b[d],
                        f = a[d];
                    $.A(f) ? vX(c, e, f) : c.add(e, f)
                }
                return c
            };
            xX = function (a, b) {
                uX(a);
                b = wX(a, b);
                return $.rB(a.b.f, b)
            };
            vX = function (a, b, c) {
                a.remove(b);
                0 < c.length && (a.g = null, a.b.set(wX(a, b), $.Ha(c)), a.f += c.length)
            };
            wX = function (a, b) {
                var c = String(b);
                a.j && (c = c.toLowerCase());
                return c
            };
            jga = function (a, b) {
                b && !a.j && (uX(a), a.g = null, a.b.forEach(function (a, b) {
                    var c = b.toLowerCase();
                    b != c && (this.remove(b), vX(this, c, a))
                }, a));
                a.j = b
            };
            zX = function () {
                $.qf.call(this);
                this.er = "closure_frame" + nga++;
                this.f = [];
                yX[this.er] = this
            };
            EX = function (a, b) {
                var c = new zX;
                $.Id(c, "ready", c.cd, !1, c);
                if (c.zv) throw Error("[goog.net.IframeIo] Unable to send, already active.");
                var d = new $.mX(a);
                if (!AX) {
                    AX = $.Ne("FORM");
                    AX.acceptCharset = "utf-8";
                    var e = AX.style;
                    e.position = "absolute";
                    e.visibility = "hidden";
                    e.top = e.left = "-10px";
                    e.width = e.height = "10px";
                    e.overflow = "hidden";
                    window.document.body.appendChild(AX)
                }
                c.qk = AX;
                b && oga(c.qk, b);
                c.qk.action = d.toString();
                c.qk.method = "POST";
                c.zv = !0;
                c.bA = c.er + "_" + (c.Jga++).toString(36);
                c.cl = $.te(c.qk).oc("IFRAME", {
                    name: c.bA,
                    id: c.bA
                });
                $.hd && 7 > Number($.ad) && (c.cl.src = 'javascript:""');
                d = c.cl.style;
                d.visibility = "hidden";
                d.width = d.height = "10px";
                d.display = "none";
                $.vd ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
                if ($.hd && !$.bd("11")) {
                    c.qk.target = c.bA || "";
                    $.te(c.qk).b.body.appendChild(c.cl);
                    $.Id(c.cl, "readystatechange", c.cV, !1, c);
                    try {
                        c.b = !1, c.qk.submit()
                    } catch (Fb) {
                        $.Sd(c.cl, "readystatechange", c.cV, !1, c), BX(c)
                    }
                } else {
                    $.te(c.qk).b.body.appendChild(c.cl);
                    d = c.bA + "_inner";
                    e = hX(c.cl);
                    if (window.document.baseURI) {
                        var f =
                            $.pc(d);
                        $.de("Short HTML snippet, input escaped, safe URL, for performance");
                        f = '<head><base href="' + $.pc(window.document.baseURI) + '"></head><body><iframe id="' + f + '" name="' + f + '"></iframe>';
                        f = $.pe(f, null)
                    } else f = $.pc(d), $.de("Short HTML snippet, input escaped, for performance"), f = $.pe('<body><iframe id="' + f + '" name="' + f + '"></iframe>', null);
                    $.wf && !$.vd ? e.documentElement.innerHTML = cX(f) : e.write(cX(f));
                    $.Id(e.getElementById(d), "load", c.LM, !1, c);
                    var h = gX("TEXTAREA", c.qk);
                    f = 0;
                    for (var k = h.length; f < k; f++) {
                        var l =
                            h[f].value;
                        $.lf(h[f]) != l && ($.ef(h[f], l), h[f].value = l)
                    }
                    h = e.importNode(c.qk, !0);
                    h.target = d;
                    h.action = c.qk.action;
                    e.body.appendChild(h);
                    l = gX("SELECT", c.qk);
                    var m = gX("SELECT", h);
                    f = 0;
                    for (k = l.length; f < k; f++)
                        for (var p = gX("OPTION", l[f]), q = gX("OPTION", m[f]), r = 0, t = p.length; r < t; r++) q[r].selected = p[r].selected;
                    l = gX("INPUT", c.qk);
                    m = gX("INPUT", h);
                    f = 0;
                    for (k = l.length; f < k; f++)
                        if ("file" == l[f].type && l[f].value != m[f].value) {
                            c.qk.target = d;
                            h = c.qk;
                            break
                        } try {
                        c.b = !1, h.submit(), e.close(), $.gd && $.zj(c.z4, 250, c)
                    } catch (Fb) {
                        try {
                            var u =
                                $.ha("window.location.href");
                            if ($.z(Fb)) var v = {
                                message: Fb,
                                name: "Unknown error",
                                lineNumber: "Not available",
                                fileName: u,
                                stack: "Not available"
                            };
                            else {
                                f = !1;
                                try {
                                    var w = Fb.lineNumber || Fb.line || "Not available"
                                } catch (jc) {
                                    w = "Not available", f = !0
                                }
                                try {
                                    var x = Fb.fileName || Fb.filename || Fb.sourceURL || $.fa.$googDebugFname || u
                                } catch (jc) {
                                    x = "Not available", f = !0
                                }
                                v = !f && Fb.lineNumber && Fb.fileName && Fb.stack && Fb.message && Fb.name ? Fb : {
                                    message: Fb.message || "Not available",
                                    name: Fb.name || "UnknownError",
                                    lineNumber: w,
                                    fileName: x,
                                    stack: Fb.stack ||
                                        "Not available"
                                }
                            }
                            var y = v.fileName;
                            null != y || (y = "");
                            if (/^https?:\/\//i.test(y)) {
                                var B = aX(y);
                                $.de("view-source scheme plus HTTP/HTTPS URL");
                                var G = "view-source:" + $W(B);
                                var C = $.ge(G)
                            } else {
                                var I = $.de("sanitizedviewsrc");
                                C = $.ge(VW(I))
                            }
                            var P = eX("Message: " + v.message + "\nUrl: ");
                            u = {
                                href: C,
                                target: "_new"
                            };
                            var Q = v.fileName;
                            if (!CX.test("a")) throw Error("Invalid tag name <a>.");
                            if ("A" in pga) throw Error("Tag name <a> is not allowed for SafeHtml.");
                            w = null;
                            x = "";
                            if (u)
                                for (var S in u) {
                                    if (!CX.test(S)) throw Error('Invalid attribute name "' +
                                        S + '".');
                                    var ua = u[S];
                                    if (null != ua) {
                                        C = x;
                                        y = S;
                                        B = ua;
                                        if (B instanceof $.ce) B = VW(B);
                                        else if ("style" == y.toLowerCase()) B = ega(B);
                                        else {
                                            if (/^on/i.test(y)) throw Error('Attribute "' + y + '" requires goog.string.Const value, "' + B + '" given.');
                                            if (y.toLowerCase() in qga)
                                                if (B instanceof ZW) B = Zfa(B);
                                                else if (B instanceof $.fe) B = $W(B);
                                            else if ($.z(B)) B = aX(B).Et();
                                            else throw Error('Attribute "' + y + '" on tag "a" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + B + '" given.');
                                        }
                                        B.Rx && (B = B.Et());
                                        var xa = y + '="' + $.pc(String(B)) +
                                            '"';
                                        x = C + (" " + xa)
                                    }
                                }
                            var Qa = "<a" + x;
                            null != Q ? $.A(Q) || (Q = [Q]) : Q = [];
                            if (!0 === rga.a) Qa += ">";
                            else {
                                var ub = fX(Q);
                                Qa += ">" + cX(ub) + "</a>";
                                w = ub.Bx()
                            }
                            var nc = u && u.dir;
                            nc && (/^(ltr|rtl|auto)$/i.test(nc) ? w = 0 : w = null);
                            var ib = $.pe(Qa, w);
                            var Nb = fX(P, ib, eX("\nLine: " + v.lineNumber + "\n\nBrowser stack:\n" + v.stack + "-> [end]\n\nJS stack traversal:\n" + UW(void 0) + "-> "))
                        } catch (jc) {
                            Nb = eX("Exception trying to expose exception! You win, we lose. " + jc)
                        }
                        cX(Nb);
                        $.Sd(e.getElementById(d), "load", c.LM, !1, c);
                        e.close();
                        BX(c)
                    }
                }
                DX(c)
            };
            oga = function (a, b) {
                var c = $.te(a);
                lX(b, function (b, e) {
                    $.A(b) || (b = [b]);
                    (0, $.Qe)(b, function (b) {
                        b = c.oc("INPUT", {
                            type: "hidden",
                            name: e,
                            value: b
                        });
                        a.appendChild(b)
                    })
                })
            };
            GX = function (a, b) {
                a.zv = !1;
                var c, d;
                c || "function" != typeof a.g || (d = a.g(b)) && (c = 4);
                c ? BX(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), FX(a))
            };
            BX = function (a) {
                a.b || (a.zv = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), FX(a), a.b = !0)
            };
            FX = function (a) {
                HX(a);
                DX(a);
                a.qk = null;
                a.dispatchEvent("ready")
            };
            HX = function (a) {
                var b = a.cl;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.f.push(b));
                a.aA && ($.Aj(a.aA), a.aA = null);
                $.gd || $.wf && !$.vd ? a.aA = $.zj(a.p_, 2E3, a) : a.p_();
                a.cl = null;
                a.bA = null
            };
            DX = function (a) {
                a.qk && a.qk == AX && $.Ve(a.qk)
            };
            IX = function (a) {
                return a.cl ? $.hd && !$.bd("11") ? a.cl : hX(a.cl).getElementById(a.bA + "_inner") : null
            };
            JX = function () {};
            LX = function (a) {
                var b;
                (b = a.b) || (b = {}, KX(a) && (b[0] = !0, b[1] = !0), b = a.b = b);
                return b
            };
            OX = function () {};
            PX = function (a) {
                return (a = KX(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
            };
            KX = function (a) {
                if (!a.f && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        try {
                            return new window.ActiveXObject(d), a.f = d
                        } catch (e) {}
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                return a.f
            };
            QX = function (a) {
                $.qf.call(this);
                this.headers = new $.qB;
                this.ca = a || null;
                this.f = !1;
                this.U = this.b = null;
                this.ka = "";
                this.g = 0;
                this.D = "";
                this.j = this.ua = this.N = this.ga = !1;
                this.G = 0;
                this.O = null;
                this.Na = sga;
                this.Ga = this.Ja = !1
            };
            $.SX = function (a, b, c, d, e, f, h) {
                var k = new QX;
                RX.push(k);
                b && k.ra("complete", b);
                k.ve("ready", k.Sba);
                f && (k.G = Math.max(0, f));
                h && (k.Ja = h);
                tga(k, a, c, d, e)
            };
            tga = function (a, b, c, d, e) {
                if (a.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.ka + "; newUri=" + b);
                c = c ? c.toUpperCase() : "GET";
                a.ka = b;
                a.D = "";
                a.g = 0;
                a.ga = !1;
                a.f = !0;
                a.b = a.ca ? PX(a.ca) : PX(TX);
                a.U = a.ca ? LX(a.ca) : LX(TX);
                a.b.onreadystatechange = (0, $.pa)(a.B2, a);
                try {
                    a.ua = !0, a.b.open(c, String(b), !0), a.ua = !1
                } catch (h) {
                    a.jv(5, h);
                    return
                }
                b = d || "";
                var f = a.headers.clone();
                e && lX(e, function (a, b) {
                    f.set(b, a)
                });
                e = $.ya(f.At(), uga);
                d = $.fa.FormData && b instanceof $.fa.FormData;
                !$.Aa(vga, c) || e || d || f.set("Content-Type",
                    "application/x-www-form-urlencoded;charset=utf-8");
                f.forEach(function (a, b) {
                    this.b.setRequestHeader(b, a)
                }, a);
                a.Na && (a.b.responseType = a.Na);
                "withCredentials" in a.b && a.b.withCredentials !== a.Ja && (a.b.withCredentials = a.Ja);
                try {
                    UX(a), 0 < a.G && (a.Ga = wga(a.b), a.Ga ? (a.b.timeout = a.G, a.b.ontimeout = (0, $.pa)(a.G4, a)) : a.O = $.zj(a.G4, a.G, a)), a.N = !0, a.b.send(b), a.N = !1
                } catch (h) {
                    a.jv(5, h)
                }
            };
            wga = function (a) {
                return $.hd && $.bd(9) && $.ea(a.timeout) && $.n(a.ontimeout)
            };
            uga = function (a) {
                return "content-type" == a.toLowerCase()
            };
            VX = function (a) {
                a.ga || (a.ga = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
            };
            $X = function (a) {
                if (a.f && "undefined" != typeof $.eD && (!a.U[1] || 4 != WX(a) || 2 != XX(a)))
                    if (a.N && 4 == WX(a)) $.zj(a.B2, 0, a);
                    else if (a.dispatchEvent("readystatechange"), 4 == WX(a)) {
                    a.f = !1;
                    try {
                        if ($.YX(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
                        else {
                            a.g = 6;
                            try {
                                var b = 2 < WX(a) ? a.b.statusText : ""
                            } catch (c) {
                                b = ""
                            }
                            a.D = b + " [" + XX(a) + "]";
                            VX(a)
                        }
                    } finally {
                        ZX(a)
                    }
                }
            };
            ZX = function (a, b) {
                if (a.b) {
                    UX(a);
                    var c = a.b,
                        d = a.U[0] ? $.ia : null;
                    a.b = null;
                    a.U = null;
                    b || a.dispatchEvent("ready");
                    try {
                        c.onreadystatechange = d
                    } catch (e) {}
                }
            };
            UX = function (a) {
                a.b && a.Ga && (a.b.ontimeout = null);
                a.O && ($.Aj(a.O), a.O = null)
            };
            $.YX = function (a) {
                var b = XX(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                if (!c) {
                    if (b = 0 === b) a = String(a.ka).match(qX)[1] || null, !a && $.fa.self && $.fa.self.location && (a = $.fa.self.location.protocol, a = a.substr(0, a.length - 1)), b = !xga.test(a ? a.toLowerCase() : "");
                    c = b
                }
                return c
            };
            WX = function (a) {
                return a.b ? a.b.readyState : 0
            };
            XX = function (a) {
                try {
                    return 2 < WX(a) ? a.b.status : -1
                } catch (b) {
                    return -1
                }
            };
            $.aY = function (a) {
                if (a.b) return $.ao(a.b.responseText)
            };
            $.bY = function (a) {
                return $.z(a.D) ? a.D : String(a.D)
            };
            cY = function (a, b, c) {
                var d = a.width() / a.height();
                b = $.n(b) ? b : c ? Math.round(c * d) : a.width();
                c = $.n(c) ? c : b ? Math.round(b / d) : a.height();
                return {
                    width: b,
                    height: c
                }
            };
            eY = function (a, b, c, d, e, f) {
                c && (b.responseType = "base64");
                d && (b.save = !0);
                var h = f || $.ia,
                    k = d ? "url" : "result";
                b = mga(new $.qB(b));
                $.SX(dY + "/" + a, function (a) {
                    a = a.target;
                    $.YX(a) ? e($.aY(a)[k]) : h($.bY(a))
                }, "POST", b.toString())
            };
            fY = function (a, b, c, d, e, f) {
                c = cY(a, c, d);
                b.data = a.pq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["file-name"] = f)
            };
            gY = function (a, b, c, d, e, f, h) {
                c = cY(a, c, d);
                b.data = a.pq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["force-transparent-white"] = f);
                $.n(h) && (b["file-name"] = h)
            };
            hY = function (a, b, c, d, e) {
                b.data = a.pq(c, d);
                b.dataType = "svg";
                b.responseType = "file";
                $.n(e) && (b["file-name"] = e)
            };
            jY = function (a, b, c, d, e, f, h) {
                var k = null;
                $.n(c) ? $.ea(c) ? (b["pdf-width"] = c, b["pdf-height"] = $.ea(d) ? d : a.height()) : $.z(c) ? (b["pdf-size"] = c || "a4", b.landscape = !!d, k = iY[b["pdf-size"]], b.landscape && (k = {
                    width: k.height,
                    height: k.width
                })) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height()) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height());
                $.n(e) && (b["pdf-x"] = e);
                $.n(f) && (b["pdf-y"] = f);
                $.n(h) && (b["file-name"] = h);
                k ? (c = k.width, k = k.height, d = a.width(), h = a.height(), k = c < k ? [c, c / d * h] : c > k ? [k / h * d, k] : [c, k], k[0] -= e || 0,
                    k[1] -= f || 0, a = a.pq(k[0], k[1])) : a = a.pq(b["pdf-width"], b["pdf-height"]);
                b.data = a;
                b.dataType = "svg";
                b.responseType = "file"
            };
            kY = function (a) {
                var b = "";
                a && (b = (new window.XMLSerializer).serializeToString(a));
                return b
            };
            lY = function () {
                this.b = {};
                this.f = {};
                this.D = {};
                this.g = {};
                this.j = {};
                this.O = ["svg2pdf.min.js", "jspdf.min.js", "canvg.min.js"];
                this.WL = !1;
                this.G = {
                    path: "https://cdn.anychart.com/3rd/",
                    enabled: !0,
                    fallback: !0
                }
            };
            yga = function () {
                var a = mY,
                    b = $.fa.anychart.exports;
                b && b.WL && (a.WL = !0);
                if (a.WL) return hga();
                var c = a.O,
                    d = a.G.path;
                d += $.gc(d, "/") ? "" : "/";
                a = [];
                for (var e = 0; e < c.length; e++) b = new $.kj(function (a, b) {
                    var f = d + c[e],
                        h = $.Se(window.document, "script");
                    h.setAttribute("src", f);
                    h.onload = h.onreadystatechange = function () {
                        $.al("info", "Loaded external exporting script " + f);
                        a()
                    };
                    h.onerror = function () {
                        $.al("warn", "Failed tp load external script " + f);
                        b()
                    };
                    $.Ap.head.appendChild(h)
                }), a.push(b);
                return gga(a)
            };
            nY = function (a, b, c) {
                if ($.D(c)) {
                    var d = {};
                    $.Dc(c, function (a, b) {
                        $.n(a) && (d[b] = a)
                    });
                    $.Jc(d) || (a[b] = d)
                } else $.n(c) && (a[b] = c)
            };
            oY = function (a, b, c, d) {
                var e = c.paperSize,
                    f = c.landscape,
                    h = c.x || 0,
                    k = c.y || 0,
                    l = c.filename || "anychart";
                l += ".pdf";
                try {
                    if ($.n(e) || $.n(f)) {
                        var m = LW(e, f);
                        if ($.z(e)) {
                            var p = iY[e].width;
                            var q = iY[e].height;
                            if (f && q > p || !f && q < p) p = [q, q = p][0]
                        } else p = (0, window.parseFloat)(m.width), q = (0, window.parseFloat)(m.height);
                        var r = new $.fa.jsPDF(f ? "l" : "p", "pt", e || [p, q]);
                        $.z(b) ? r.addImage(b, "png", h, k, p, q) : $.fa.svg2pdf(b, r, {
                            xOffset: h,
                            yOffset: k,
                            scale: 1
                        })
                    } else {
                        var t = a.width(),
                            u = a.height();
                        r = new $.fa.jsPDF(t > u ? "l" : "p", "pt", [t, u]);
                        $.z(b) ?
                            r.addImage(b, "png", h, k, t, u) : $.fa.svg2pdf(b, r, {
                                xOffset: h,
                                yOffset: k,
                                scale: 1
                            })
                    }
                    r.save(l)
                } catch (v) {
                    d(c)
                }
            };
            pY = function (a, b, c, d, e, f, h) {
                switch (c) {
                    case "jpg":
                        var k = "image/jpeg";
                        break;
                    default:
                        c = "png", k = "image/png"
                }
                var l = $.Se(window.document, "canvas");
                l.width = d;
                l.height = e;
                $.uf(l, {
                    width: d,
                    height: e,
                    visibility: "hidden",
                    position: "fixed",
                    right: 0,
                    bottom: 0
                });
                $.Ap.body.appendChild(l);
                var m = l.getContext("2d"),
                    p = new window.Image,
                    q = b.quality || .92;
                a.setAttribute("width", d);
                a.setAttribute("height", e);
                var r = (new window.XMLSerializer).serializeToString(a),
                    t = XW(new window.Blob([r], {
                        type: "image/svg+xml"
                    }));
                p.onload = function () {
                    try {
                        if (l.msToBlob &&
                            m.drawSvg) {
                            m.drawSvg(r, 0, 0, d, e);
                            var a = l.toDataURL(k, q)
                        } else m.drawImage(p, 0, 0, d, e), a = l.toDataURL(k, q);
                        f(a);
                        $.Xe(l);
                        WW().revokeObjectURL(t)
                    } catch (v) {
                        h(b)
                    }
                };
                p.src = t
            };
            zga = function (a, b, c, d, e, f, h) {
                function k(a) {
                    qY(a, l)
                }
                var l = d.filename || "anychart",
                    m = a.P().Ha();
                a = 0 < b.getElementsByTagName("image").length;
                try {
                    switch (c) {
                        case "svg":
                            var p = (new window.XMLSerializer).serializeToString(b);
                            qY(new window.Blob([p], {
                                type: "image/svg+xml"
                            }), l);
                            break;
                        case "png":
                            pY(b, d, c, e, f, k, h);
                            break;
                        case "jpg":
                            pY(b, d, c, e, f, k, h);
                            break;
                        case "pdf":
                            a ? pY(b, d, c, e, f, function (a) {
                                oY(m, a, d, h)
                            }, h) : oY(m, b, d, h)
                    }
                } catch (q) {
                    h(d)
                }
            };
            rY = function (a, b, c, d) {
                Wfa(yga().then(function () {
                    function e(a) {
                        var b = a.getAttribute("href"),
                            c = new window.Image,
                            d = (0, window.parseFloat)(a.getAttribute("width")),
                            e = (0, window.parseFloat)(a.getAttribute("height"));
                        d = d || 1;
                        e = e || 1;
                        c.onload = function () {
                            var b = $.Se(window.document, "CANVAS");
                            $.Ap.body.appendChild(b);
                            var h = b.getContext("2d");
                            b.width = d;
                            b.height = e;
                            h.drawImage(c, 0, 0, d, e);
                            h = b.toDataURL();
                            a.setAttribute("href", h);
                            a.setAttribute("src", h);
                            u++;
                            u == v.length && f();
                            $.Xe(b)
                        };
                        c.crossOrigin = "anonymous";
                        c.src = b
                    }

                    function f() {
                        zga(a, t, b, c, m, p, d)
                    }
                    mY.WL = !0;
                    var h = a.P().Ha(),
                        k = c.paperSize,
                        l = c.landscape;
                    if ($.z(k)) {
                        var m = iY[k].width;
                        var p = iY[k].height
                    } else m = c.width || h.width(), p = c.height || h.height();
                    var q = h.width(),
                        r = h.height();
                    "pdf" == b && $.z(k) && (l && p > m || !l && p < m) && (m = [p, p = m][0]);
                    h.resize(m, p);
                    var t = h.fa().cloneNode(!0);
                    h.resize($.z(q) ? q : "100%", $.z(r) ? r : "100%");
                    t.setAttribute("width", m);
                    t.setAttribute("height", p);
                    var u = 0,
                        v = t.getElementsByTagName("image");
                    h = $.Aa(["png", "jpg", "pdf"], b);
                    try {
                        if (0 < v.length) {
                            if (($.Cc("Trident") ||
                                    $.Cc("MSIE")) && h) throw "Internet explorer can't export chart with images to pdf, jpg or png";
                            for (h = 0; h < v.length; h++) e(v[h])
                        } else f()
                    } catch (w) {
                        $.dl(1E3, null, [], !0), d()
                    }
                }), function () {
                    $.dl(1E3, null, [], !0);
                    d()
                })
            };
            qY = function (a, b) {
                var c = $.Se(window.document, "a");
                if ($.z(a)) {
                    var d = a;
                    var e = (0, window.atob)(d.split(",")[1]);
                    d = d.split(",")[0].split(":")[1].split(";")[0];
                    for (var f = new window.ArrayBuffer(e.length), h = new window.Uint8Array(f), k = 0; k < e.length; k++) h[k] = e.charCodeAt(k);
                    e = new window.Blob([f], {
                        type: d
                    })
                } else e = a;
                switch (e.type) {
                    case "image/svg+xml":
                        b += ".svg";
                        break;
                    case "image/png":
                        b += ".png";
                        break;
                    case "image/jpeg":
                        b += ".jpg";
                        break;
                    case "application/pdf":
                        b += ".pdf"
                }
                a = XW(e);
                $.n(c.download) ? ($.Ap.body.appendChild(c),
                    c.href = a, c.download = b || "", c.click(), $.Xe(c)) : $.n($.fa.navigator.msSaveOrOpenBlob) ? $.fa.navigator.msSaveOrOpenBlob(e, b) : $.Bp.open(a, b);
                c = a;
                WW().revokeObjectURL(c)
            };
            $.qB.prototype.Zr = $.ca(23, function () {
                $.sB(this);
                for (var a = [], b = 0; b < this.b.length; b++) a.push(this.f[this.b[b]]);
                return a
            });
            $.fe.prototype.Bx = $.ca(2, function () {
                return 1
            });
            $.oe.prototype.Bx = $.ca(1, function () {
                return this.f
            });
            var KW = {
                    "us-letter": {
                        width: "215.9mm",
                        height: "279.4mm"
                    },
                    a0: {
                        width: "841mm",
                        height: "1189mm"
                    },
                    a1: {
                        width: "594mm",
                        height: "841mm"
                    },
                    a2: {
                        width: "420mm",
                        height: "594mm"
                    },
                    a3: {
                        width: "297mm",
                        height: "420mm"
                    },
                    a4: {
                        width: "210mm",
                        height: "297mm"
                    },
                    a5: {
                        width: "148mm",
                        height: "210mm"
                    },
                    a6: {
                        width: "105mm",
                        height: "148mm"
                    }
                },
                NW = null,
                PW = null,
                Yfa = 5,
                RW = {},
                rga = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                },
                YW = {};
            ZW.prototype.Rx = !0;
            ZW.prototype.Et = function () {
                return ""
            };
            ZW.prototype.BT = !0;
            ZW.prototype.Bx = function () {
                return 1
            };
            var $fa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
                cga = /^[-,."'%_!# a-zA-Z0-9]+$/,
                CX = /^[a-zA-Z0-9-]+$/,
                qga = {
                    action: !0,
                    cite: !0,
                    data: !0,
                    formaction: !0,
                    href: !0,
                    manifest: !0,
                    poster: !0,
                    src: !0
                },
                pga = {
                    APPLET: !0,
                    BASE: !0,
                    EMBED: !0,
                    IFRAME: !0,
                    LINK: !0,
                    MATH: !0,
                    META: !0,
                    OBJECT: !0,
                    SCRIPT: !0,
                    STYLE: !0,
                    SVG: !0,
                    TEMPLATE: !0
                },
                iY = {
                    a0: {
                        width: 2384,
                        height: 3370
                    },
                    a1: {
                        width: 1684,
                        height: 2384
                    },
                    a2: {
                        width: 1191,
                        height: 1684
                    },
                    a3: {
                        width: 842,
                        height: 1191
                    },
                    a4: {
                        width: 595,
                        height: 842
                    },
                    a5: {
                        width: 420,
                        height: 595
                    },
                    a6: {
                        width: 297,
                        height: 420
                    },
                    a7: {
                        width: 210,
                        height: 297
                    },
                    a8: {
                        width: 48,
                        height: 210
                    },
                    a9: {
                        width: 105,
                        height: 148
                    },
                    b0: {
                        width: 2834,
                        height: 4008
                    },
                    b1: {
                        width: 2004,
                        height: 2834
                    },
                    b2: {
                        width: 1417,
                        height: 2004
                    },
                    b3: {
                        width: 1E3,
                        height: 1417
                    },
                    b4: {
                        width: 708,
                        height: 1E3
                    },
                    b5: {
                        width: 498,
                        height: 708
                    },
                    b6: {
                        width: 354,
                        height: 498
                    },
                    b7: {
                        width: 249,
                        height: 354
                    },
                    b8: {
                        width: 175,
                        height: 249
                    },
                    b9: {
                        width: 124,
                        height: 175
                    },
                    "arch-a": {
                        width: 648,
                        height: 864
                    },
                    "arch-b": {
                        width: 864,
                        height: 1296
                    },
                    "arch-c": {
                        width: 1296,
                        height: 1728
                    },
                    "arch-d": {
                        width: 1728,
                        height: 2592
                    },
                    "arch-e": {
                        width: 2592,
                        height: 3456
                    },
                    "crown-octavo": {
                        width: 348,
                        height: 527
                    },
                    "crown-quarto": {
                        width: 535,
                        height: 697
                    },
                    "demy-octavo": {
                        width: 391,
                        height: 612
                    },
                    "demy-quarto": {
                        width: 620,
                        height: 782
                    },
                    "royal-octavo": {
                        width: 442,
                        height: 663
                    },
                    "royal-quarto": {
                        width: 671,
                        height: 884
                    },
                    executive: {
                        width: 522,
                        height: 756
                    },
                    halfletter: {
                        width: 396,
                        height: 612
                    },
                    ledger: {
                        width: 1224,
                        height: 792
                    },
                    legal: {
                        width: 612,
                        height: 1008
                    },
                    letter: {
                        width: 612,
                        height: 792
                    },
                    tabloid: {
                        width: 792,
                        height: 1224
                    }
                };
            var qX = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            $.mX.prototype.toString = function () {
                var a = [],
                    b = this.j;
                b && a.push(tX(b, sY, !0), ":");
                var c = this.D;
                if (c || "file" == b) a.push("//"), (b = this.O) && a.push(tX(b, sY, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.N, null != c && a.push(":", String(c));
                if (c = this.b) this.D && "/" != c.charAt(0) && a.push("/"), a.push(tX(c, "/" == c.charAt(0) ? Aga : Bga, !0));
                (c = this.g.toString()) && a.push("?", c);
                (c = this.G) && a.push("#", tX(c, Cga));
                return a.join("")
            };
            $.mX.prototype.clone = function () {
                return new $.mX(this)
            };
            var sY = /[#\/\?@]/g,
                Bga = /[#\?:]/g,
                Aga = /[#\?]/g,
                kga = /[#\?@]/g,
                Cga = /#/g;
            $.g = sX.prototype;
            $.g.add = function (a, b) {
                uX(this);
                this.g = null;
                a = wX(this, a);
                var c = this.b.get(a);
                c || this.b.set(a, c = []);
                c.push(b);
                this.f += 1;
                return this
            };
            $.g.remove = function (a) {
                uX(this);
                a = wX(this, a);
                return $.rB(this.b.f, a) ? (this.g = null, this.f -= this.b.get(a).length, this.b.remove(a)) : !1
            };
            $.g.clear = function () {
                this.b = this.g = null;
                this.f = 0
            };
            $.g.yk = function () {
                uX(this);
                return 0 == this.f
            };
            $.g.forEach = function (a, b) {
                uX(this);
                this.b.forEach(function (c, d) {
                    (0, $.Qe)(c, function (c) {
                        a.call(b, c, d, this)
                    }, this)
                }, this)
            };
            $.g.At = function () {
                uX(this);
                for (var a = this.b.Zr(), b = this.b.At(), c = [], d = 0; d < b.length; d++)
                    for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
                return c
            };
            $.g.Zr = function (a) {
                uX(this);
                var b = [];
                if ($.z(a)) xX(this, a) && (b = $.Ga(b, this.b.get(wX(this, a))));
                else {
                    a = this.b.Zr();
                    for (var c = 0; c < a.length; c++) b = $.Ga(b, a[c])
                }
                return b
            };
            $.g.set = function (a, b) {
                uX(this);
                this.g = null;
                a = wX(this, a);
                xX(this, a) && (this.f -= this.b.get(a).length);
                this.b.set(a, [b]);
                this.f += 1;
                return this
            };
            $.g.get = function (a, b) {
                var c = a ? this.Zr(a) : [];
                return 0 < c.length ? String(c[0]) : b
            };
            $.g.toString = function () {
                if (this.g) return this.g;
                if (!this.b) return "";
                for (var a = [], b = this.b.At(), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = (0, window.encodeURIComponent)(String(d));
                    d = this.Zr(d);
                    for (var f = 0; f < d.length; f++) {
                        var h = e;
                        "" !== d[f] && (h += "=" + (0, window.encodeURIComponent)(String(d[f])));
                        a.push(h)
                    }
                }
                return this.g = a.join("&")
            };
            $.g.clone = function () {
                var a = new sX;
                a.g = this.g;
                this.b && (a.b = this.b.clone(), a.f = this.f);
                return a
            };
            var AX;
            $.H(zX, $.qf);
            var yX = {},
                nga = 0;
            $.g = zX.prototype;
            $.g.qk = null;
            $.g.cl = null;
            $.g.bA = null;
            $.g.Jga = 0;
            $.g.zv = !1;
            $.g.aA = null;
            $.g.abort = function () {
                this.zv && ($.Ud(IX(this)), this.zv = !1, this.dispatchEvent("abort"), FX(this))
            };
            $.g.R = function () {
                this.zv && this.abort();
                zX.B.R.call(this);
                this.cl && HX(this);
                DX(this);
                delete this.g;
                this.qk = null;
                delete yX[this.er]
            };
            $.g.Vp = function () {
                return this.zv
            };
            $.g.cV = function () {
                if ("complete" == this.cl.readyState) {
                    $.Sd(this.cl, "readystatechange", this.cV, !1, this);
                    try {
                        var a = hX(this.cl);
                        if ($.hd && "about:blank" == a.location && !window.navigator.onLine) {
                            BX(this);
                            return
                        }
                    } catch (b) {
                        BX(this);
                        return
                    }
                    GX(this, a)
                }
            };
            $.g.LM = function () {
                if (!$.wf || $.vd || "about:blank" != (this.cl ? hX(IX(this)) : null).location) {
                    $.Sd(IX(this), "load", this.LM, !1, this);
                    try {
                        GX(this, this.cl ? hX(IX(this)) : null)
                    } catch (a) {
                        BX(this)
                    }
                }
            };
            $.g.p_ = function () {
                this.aA && ($.Aj(this.aA), this.aA = null);
                for (; 0 != this.f.length;) {
                    var a = this.f.pop();
                    $.Xe(a)
                }
            };
            $.g.z4 = function () {
                if (this.zv) {
                    var a = this.cl ? hX(IX(this)) : null;
                    a && !$.Zc(a, "documentUri") ? ($.Sd(IX(this), "load", this.LM, !1, this), BX(this)) : $.zj(this.z4, 250, this)
                }
            };
            JX.prototype.b = null;
            var TX;
            $.H(OX, JX);
            TX = new OX;
            $.H(QX, $.qf);
            var sga = "",
                xga = /^https?$/i,
                vga = ["POST", "PUT"],
                RX = [];
            $.g = QX.prototype;
            $.g.Sba = function () {
                this.cd();
                $.Fa(RX, this)
            };
            $.g.G4 = function () {
                "undefined" != typeof $.eD && this.b && (this.D = "Timed out after " + this.G + "ms, aborting", this.g = 8, this.dispatchEvent("timeout"), this.abort(8))
            };
            $.g.jv = function (a, b) {
                this.f = !1;
                this.b && (this.j = !0, this.b.abort(), this.j = !1);
                this.D = b;
                this.g = a;
                VX(this);
                ZX(this)
            };
            $.g.abort = function (a) {
                this.b && this.f && (this.f = !1, this.j = !0, this.b.abort(), this.j = !1, this.g = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ZX(this))
            };
            $.g.R = function () {
                this.b && (this.f && (this.f = !1, this.j = !0, this.b.abort(), this.j = !1), ZX(this, !0));
                QX.B.R.call(this)
            };
            $.g.B2 = function () {
                this.gd || (this.ua || this.N || this.j ? $X(this) : this.tha())
            };
            $.g.tha = function () {
                $X(this)
            };
            $.g.Vp = function () {
                return !!this.b
            };
            var dY = "//export.anychart.com";
            $.g = $.Vj.prototype;
            $.g.iu = function (a, b, c, d, e, f, h) {
                if ("svg" == $.hk) {
                    var k = {};
                    fY(this, k, d, e, f, h);
                    eY("png", k, !!c, !0, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.QA = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.hk) {
                    var l = {};
                    gY(this, l, d, e, f, h, k);
                    eY("jpg", l, !!c, !0, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.SA = function (a, b, c, d, e, f) {
                if ("svg" == $.hk) {
                    var h = {};
                    hY(this, h, d, e, f);
                    eY("svg", h, !!c, !0, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.RA = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.hk) {
                    var l = {};
                    jY(this, l, d, e, f, h, k);
                    eY("pdf", l, !!c, !0, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Qz = function (a, b, c, d, e) {
                if ("svg" == $.hk) {
                    var f = {};
                    fY(this, f, c, d, e);
                    eY("png", f, !0, !1, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Oz = function (a, b, c, d, e, f) {
                if ("svg" == $.hk) {
                    var h = {};
                    gY(this, h, c, d, e, f);
                    eY("jpg", h, !0, !1, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Tz = function (a, b, c, d) {
                if ("svg" == $.hk) {
                    var e = {};
                    hY(this, e, c, d);
                    eY("svg", e, !0, !1, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Pz = function (a, b, c, d, e, f) {
                if ("svg" == $.hk) {
                    var h = {};
                    jY(this, h, c, d, e, f);
                    eY("pdf", h, !0, !1, a, b)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Is = function (a, b, c, d) {
                if ("svg" == $.hk) {
                    var e = {};
                    fY(this, e, a, b, c, d);
                    EX(dY + "/png", e)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Gs = function (a, b, c, d, e) {
                if ("svg" == $.hk) {
                    var f = {};
                    gY(this, f, a, b, c, d, e);
                    EX(dY + "/jpg", f)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Hs = function (a, b, c, d, e) {
                if ("svg" == $.hk) {
                    var f = {};
                    jY(this, f, a, b, c, d, e);
                    EX(dY + "/pdf", f)
                } else(0, window.alert)($.jd(15))
            };
            $.g.Js = function (a, b, c) {
                if ("svg" == $.hk) {
                    var d = {};
                    hY(this, d, a, b, c);
                    EX(dY + "/svg", d)
                } else(0, window.alert)($.jd(15))
            };
            $.g.print = function (a, b) {
                if ($.n(a) || $.n(b)) {
                    var c = LW(a, b, "us-letter"),
                        d = QW().contentWindow.document;
                    MW("html, body {height: 100%; overflow: hidden}", d);
                    var e = $.Ne("DIV");
                    $.uf(e, {
                        width: c.width,
                        height: c.height
                    });
                    d.body.appendChild(e);
                    c = this.width();
                    d = this.height();
                    var f = $.Wf(e);
                    this.resize(f.width, f.height);
                    f = this.fa();
                    "svg" == f.tagName && f.cloneNode ? (f = f.cloneNode(!0), e.appendChild(f)) : $.ik(e).data(this.data());
                    this.resize(c, d)
                } else e = QW().contentWindow.document, d = this.fa(), "svg" == d.tagName ? d.cloneNode ?
                    c = d.cloneNode(!0) : (d = $.ik(e.body), d.data(this.data()), c = d.fa()) : (d = $.ik(e.body), d.data(this.data())), d = $.kg(), f = c, d.fc(f, "width", "100%"), d.fc(f, "height", "100%"), d.fc(f, "viewBox", "0 0 " + this.width() + " " + this.height()), $.uf(f, "width", "100%"), $.uf(f, "height", ""), $.uf(f, "max-height", "100%"), e.body.appendChild(c);
                Xfa()
            };
            $.g.pq = function (a, b) {
                if ("svg" != $.hk) return "";
                if ($.n(a) || $.n(b)) {
                    var c = LW(a, b);
                    var d = $.cf(this.fa()),
                        e = $.xf(d, "width");
                    d = $.xf(d, "height");
                    this.resize(c.width, c.height);
                    c = kY(this.fa());
                    this.resize(e, d)
                } else $.kg().JN(this.fa(), this.width(), this.height()), c = kY(this.fa()), $.kg().JN(this.fa(), "100%", "100%");
                return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + c
            };
            $.F("acgraph.server", function (a) {
                $.n(a) && (dY = a);
                return dY
            });
            var tY = $.Vj.prototype;
            tY.saveAsPNG = tY.Is;
            tY.saveAsJPG = tY.Gs;
            tY.saveAsPDF = tY.Hs;
            tY.saveAsSVG = tY.Js;
            tY.saveAsPng = tY.Is;
            tY.saveAsJpg = tY.Gs;
            tY.saveAsPdf = tY.Hs;
            tY.saveAsSvg = tY.Js;
            tY.shareAsPng = tY.iu;
            tY.shareAsJpg = tY.QA;
            tY.shareAsPdf = tY.RA;
            tY.shareAsSvg = tY.SA;
            tY.getPngBase64String = tY.Qz;
            tY.getJpgBase64String = tY.Oz;
            tY.getSvgBase64String = tY.Tz;
            tY.getPdfBase64String = tY.Pz;
            tY.print = tY.print;
            tY.toSvg = tY.pq;
            $.g = lY.prototype;
            $.g.NZ = function (a) {
                return "object" == $.ka(a) ? ($.ra(this.G, a), this) : this.G
            };
            $.g.filename = function (a) {
                $.n(a) && (this.N = a);
                return this.N
            };
            $.g.Uj = function (a, b) {
                return this.b = iX({
                    width: a,
                    height: b
                }, a, this.b)
            };
            $.g.N_ = function (a, b, c, d, e, f, h) {
                return this.f = iX({
                    caption: a,
                    link: b,
                    name: c,
                    description: d,
                    width: e,
                    height: f,
                    appId: h
                }, a, this.f)
            };
            $.g.U4 = function (a, b, c) {
                return this.D = iX({
                    url: a,
                    width: b,
                    height: c
                }, a, this.D)
            };
            $.g.R1 = function (a, b, c, d) {
                return this.g = iX({
                    caption: a,
                    description: b,
                    width: c,
                    height: d
                }, a, this.g)
            };
            $.g.K2 = function (a, b, c, d) {
                return this.j = iX({
                    link: a,
                    description: b,
                    width: c,
                    height: d
                }, a, this.j)
            };
            $.g.DJ = function () {
                this.N = "anychart";
                this.b = {
                    width: void 0,
                    height: void 0
                };
                this.f = {
                    caption: $.el.location ? $.el.location.hostname : "",
                    link: void 0,
                    name: void 0,
                    description: void 0,
                    appId: 0x42607363aa4b7,
                    width: 1200,
                    height: 630
                };
                this.D = {
                    url: "https://export.anychart.com/sharing/twitter",
                    width: 1024,
                    height: 800
                };
                this.g = {
                    caption: "AnyChart",
                    description: void 0,
                    width: 1200,
                    height: 630
                };
                this.j = {
                    link: void 0,
                    description: void 0,
                    width: 1200,
                    height: 800
                }
            };
            $.g.F = function () {
                var a = {};
                nY(a, "filename", this.N);
                nY(a, "image", this.b);
                nY(a, "facebook", this.f);
                nY(a, "twitter", this.D);
                nY(a, "linkedin", this.g);
                nY(a, "pinterest", this.j);
                nY(a, "clientside", this.G);
                return a
            };
            $.g.X = function (a) {
                this.filename(a.filename);
                this.Uj(a.image);
                this.N_(a.facebook);
                this.U4(a.twitter);
                this.R1(a.linkedin);
                this.K2(a.pinterest);
                this.NZ(a.clientside)
            };
            var uY = lY.prototype;
            uY.filename = uY.filename;
            uY.image = uY.Uj;
            uY.facebook = uY.N_;
            uY.twitter = uY.U4;
            uY.linkedin = uY.R1;
            uY.pinterest = uY.K2;
            uY.clientside = uY.NZ;
            var mY = new lY;
            mY.DJ();
            mY.create = function () {
                return new lY
            };
            mY.uc = function (a, b) {
                var c = a.exports ? a.exports()[b]() : void 0,
                    d = $.fa.anychart.exports[b](),
                    e;
                "object" == $.ka(c) ? e = iX(d, c, d) : e = $.n(c) ? c : d;
                return e
            };
            mY.U = $.el.acgraph.server;
            mY.Is = function (a, b, c, d, e, f) {
                var h = b ? b.Ha() : null;
                if (h) {
                    b = mY.uc(a, "image");
                    c = iX({
                        width: c,
                        height: d,
                        quality: e,
                        filename: f
                    }, c, {
                        width: b.width,
                        height: b.height,
                        filename: mY.uc(a, "filename")
                    });
                    var k = mY.uc(a, "clientside");
                    d = function (a) {
                        k.fallback && h.Is(a.width, a.height, a.quality, a.filename)
                    };
                    k.enabled ? rY(a, "png", c, d) : h.Is(c.width, c.height, c.quality, c.filename)
                }
            };
            mY.Gs = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ha() : null;
                if (k) {
                    b = mY.uc(a, "image");
                    c = iX({
                        width: c,
                        height: d,
                        quality: e,
                        forceTransparentWhite: f,
                        filename: h
                    }, c, {
                        width: b.width,
                        height: b.height,
                        filename: mY.uc(a, "filename")
                    });
                    var l = mY.uc(a, "clientside");
                    d = function (a) {
                        l.fallback && k.Gs(a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                    };
                    l.enabled ? rY(a, "jpg", c, d) : k.Gs(c.width, c.height, c.quality, c.forceTransparentWhite, c.filename)
                }
            };
            mY.Hs = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ha() : null;
                if (k) {
                    b = mY.uc(a, "image");
                    c = iX({
                        paperSize: c,
                        width: c,
                        landscape: d,
                        height: d,
                        x: e,
                        y: f,
                        filename: h
                    }, c, {
                        width: b.width,
                        height: b.height,
                        filename: mY.uc(a, "filename")
                    });
                    var l = mY.uc(a, "clientside");
                    d = function (a) {
                        l.fallback && k.Hs(a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                    };
                    l.enabled ? rY(a, "pdf", c, d) : k.Hs(c.paperSize || c.width, c.landscape || c.height, c.x, c.y, c.filename)
                }
            };
            mY.Js = function (a, b, c, d, e) {
                var f = b ? b.Ha() : null;
                if (f) {
                    b = mY.uc(a, "image");
                    c = iX({
                        paperSize: c,
                        width: c,
                        landscape: d,
                        height: d,
                        filename: e
                    }, c, {
                        width: b.width,
                        height: b.height,
                        filename: mY.uc(a, "filename")
                    });
                    var h = mY.uc(a, "clientside");
                    d = function (a) {
                        h.fallback && f.Js(a.paperSize || a.width, a.landscape || a.height, a.filename)
                    };
                    h.enabled ? rY(a, "svg", c, d) : f.Js(c.paperSize || c.width, c.landscape || c.height, c.filename)
                }
            };
            mY.pq = function (a, b, c, d) {
                return (b = b ? b.Ha() : null) ? (a = mY.uc(a, "image"), c = iX({
                    paperSize: c,
                    width: c,
                    landscape: d,
                    height: d
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.pq(c.paperSize || c.width, c.landscape || c.height)) : ""
            };
            mY.wN = function (a, b, c) {
                var d = {};
                d["file-name"] = c || mY.uc(a, "filename");
                d.data = b;
                d.dataType = "xml";
                d.responseType = "file";
                EX(dY + "/xml", d)
            };
            mY.vN = function (a, b, c) {
                var d = {};
                d["file-name"] = c || mY.uc(a, "filename");
                d.data = b;
                d.dataType = "json";
                d.responseType = "file";
                EX(dY + "/json", d)
            };
            mY.xy = function (a, b, c) {
                var d = {};
                d["file-name"] = c || mY.uc(a, "filename");
                d.data = b;
                d.dataType = "csv";
                d.responseType = "file";
                EX(dY + "/csv", d)
            };
            mY.yy = function (a, b, c) {
                var d = {};
                d["file-name"] = c || mY.uc(a, "filename");
                d.data = b;
                d.dataType = "xlsx";
                d.responseType = "file";
                EX(dY + "/xlsx", d)
            };
            mY.iu = function (a, b, c, d, e, f, h, k, l) {
                if (b = b ? b.Ha() : null) {
                    var m = mY.uc(a, "image");
                    a = iX({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        width: f,
                        height: h,
                        quality: k,
                        filename: l
                    }, c, {
                        width: m.width,
                        height: m.height,
                        filename: mY.uc(a, "filename")
                    });
                    b.iu(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.filename)
                }
            };
            mY.QA = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ha() : null) {
                    var p = mY.uc(a, "image");
                    a = iX({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        width: f,
                        height: h,
                        quality: k,
                        forceTransparentWhite: l,
                        filename: m
                    }, c, {
                        width: p.width,
                        height: p.height,
                        filename: mY.uc(a, "filename")
                    });
                    b.QA(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                }
            };
            mY.SA = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ha() : null) {
                    var l = mY.uc(a, "image");
                    a = iX({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        paperSize: f,
                        width: f,
                        landscape: h,
                        height: h,
                        filename: k
                    }, c, {
                        width: l.width,
                        height: l.height,
                        filename: mY.uc(a, "filename")
                    });
                    b.SA(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.filename)
                }
            };
            mY.RA = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ha() : null) {
                    var p = mY.uc(a, "image");
                    a = iX({
                        onSuccess: c,
                        onError: d,
                        asBase64: e,
                        paperSize: f,
                        width: f,
                        landscape: h,
                        height: h,
                        x: k,
                        y: l,
                        filename: m
                    }, c, {
                        width: p.width,
                        height: p.height,
                        filename: mY.uc(a, "filename")
                    });
                    b.RA(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                }
            };
            mY.Qz = function (a, b, c, d, e, f, h) {
                if (b = b ? b.Ha() : null) a = mY.uc(a, "image"), c = iX({
                    onSuccess: c,
                    onError: d,
                    width: e,
                    height: f,
                    quality: h
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.Qz(c.onSuccess, c.onError, c.width, c.height, c.quality)
            };
            mY.Oz = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ha() : null) a = mY.uc(a, "image"), c = iX({
                    onSuccess: c,
                    onError: d,
                    width: e,
                    height: f,
                    quality: h,
                    forceTransparentWhite: k
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.Oz(c.onSuccess, c.onError, c.width, c.height, c.quality, c.forceTransparentWhite)
            };
            mY.Tz = function (a, b, c, d, e, f) {
                if (b = b ? b.Ha() : null) a = mY.uc(a, "image"), c = iX({
                    onSuccess: c,
                    onError: d,
                    paperSize: e,
                    width: e,
                    landscape: f,
                    height: f
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.Tz(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height)
            };
            mY.Pz = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ha() : null) a = mY.uc(a, "image"), c = iX({
                    onSuccess: c,
                    onError: d,
                    paperSize: e,
                    width: e,
                    landscape: f,
                    height: f,
                    x: h,
                    y: k
                }, c, {
                    width: a.width,
                    height: a.height
                }), b.Pz(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height, c.x, c.y)
            };
            mY.print = function (a, b, c, d) {
                if (a = b ? b.Ha() : null) c = iX({
                    paperSize: c,
                    landscape: d
                }, c), a.print(c.paperSize, c.landscape)
            };
            mY.PD = function (a, b, c, d, e, f) {
                var h = mY.uc(a, "facebook"),
                    k = iX({
                        caption: c,
                        link: d,
                        name: e,
                        description: f
                    }, c, h),
                    l = $.el.open("", "_blank", "scrollbars=yes, width=550, height=550, top=" + Number(window.screen.height / 2 - 275) + ", left=" + Number(window.screen.width / 2 - 275));
                mY.iu(a, b, function (a) {
                    a = {
                        app_id: h.appId,
                        display: "popup",
                        picture: a
                    };
                    a.caption = k.caption;
                    k.link && (a.link = k.link, k.name && (a.name = k.name), k.description && (a.description = k.description));
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    l.location.href = "https://www.facebook.com/dialog/feed?" +
                        b
                }, void 0, !1, h.width, h.height)
            };
            mY.SD = function (a, b) {
                var c = mY.uc(a, "twitter"),
                    d = Number(window.screen.width / 2 - 300),
                    e = Number(window.screen.height / 2 - 260);
                var f = $.Be(window.document, "INPUT", "ac-share-twitter-data-input", void 0);
                if (0 < f.length) {
                    var h = f[0];
                    f = $.Be(window.document, "FORM", "ac-share-twitter-form", void 0)[0]
                } else {
                    f = $.Se(window.document, "FORM");
                    $.Nj(f, "ac-share-twitter-form");
                    f.target = "Map";
                    f.method = "POST";
                    f.action = c.url;
                    h = $.Se(window.document, "INPUT");
                    $.Nj(h, "ac-share-twitter-data-input");
                    h.type = "hidden";
                    h.name = "data";
                    var k =
                        $.Se(window.document, "INPUT");
                    k.type = "hidden";
                    k.name = "dataType";
                    k.value = "svg";
                    f.appendChild(h);
                    f.appendChild(k);
                    gX("BODY")[0].appendChild(f)
                }
                $.n(f) && $.n(h) && (h.value = mY.pq(a, b, c.width, c.height), $.el.open("", "Map", "status=0,title=0,height=520,width=600,scrollbars=1, width=600, height=520, top=" + e + ", left=" + d) && f.submit())
            };
            mY.QD = function (a, b, c, d) {
                var e = mY.uc(a, "linkedin"),
                    f = iX({
                        caption: c,
                        description: d
                    }, c, e),
                    h = $.el.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                mY.iu(a, b, function (a) {
                    a = {
                        mini: "true",
                        url: a
                    };
                    a.title = f.caption;
                    f.description && (a.summary = f.description);
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://www.linkedin.com/shareArticle?" + b
                }, void 0, !1, e.width, e.height)
            };
            mY.RD = function (a, b, c, d) {
                var e = mY.uc(a, "pinterest"),
                    f = iX({
                        link: c,
                        description: d
                    }, c, e),
                    h = $.el.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                mY.iu(a, b, function (a) {
                    a = {
                        media: a
                    };
                    f.link && (a.url = f.link);
                    f.description && (a.description = f.description);
                    var b = "",
                        c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://pinterest.com/pin/create/link?" + b
                }, void 0, !1, e.width, e.height)
            };
            $.F("anychart.exports", mY);
            $.F("anychart.exports.server", mY.U);
        }).call(this, $)
    }
    if (!_.data_adapter) {
        _.data_adapter = 1;
        (function ($) {
            var vY = function (a) {
                    try {
                        return a.b ? a.b.responseText : ""
                    } catch (b) {
                        return ""
                    }
                },
                xY = function (a, b, c, d, e, f, h, k, l) {
                    var m = wY("fromXml", c, l);
                    m && (b = (0, $.pa)(xY.b, void 0, b, c, l, m), $.SX(a, b, d, e, f, h, k))
                },
                wY = function (a, b, c) {
                    var d = $.el.anychart;
                    if (!d) return b && b.call(c, 500, "AnyChart in not present on the page."), null;
                    d = d[a];
                    return d ? d : (b && b.call(c, 500, $.hc("anychart.%s is not available.", a)), null)
                },
                Dga = function (a) {
                    return [$.aY(a) || null]
                },
                Ega = function (a) {
                    try {
                        var b = a.b ? a.b.responseXML : null
                    } catch (c) {
                        b = null
                    }
                    return [$.el.anychart.utils.xml2json(b).data]
                },
                Fga = function (a) {
                    a = $.aY(a);
                    for (var b = a.feed.entry, c = {
                            title: a.feed.title.$t,
                            rows: []
                        }, d = 0, e = b.length; d < e; d++) {
                        var f = b[d],
                            h = f.gs$cell.$t,
                            k = f.gs$cell.col - 1;
                        f = f.gs$cell.row - 1;
                        c.rows[f] || (c.rows[f] = []);
                        c.rows[f][k] = h
                    }
                    c.header = c.rows.shift();
                    return [c, a]
                },
                Gga = function (a) {
                    return [vY(a)]
                },
                yY = function (a, b, c, d, e) {
                    e = e.target;
                    if ($.YX(e)) {
                        try {
                            var f = a(e)
                        } catch (h) {
                            c && c.call(d, 500, h)
                        }
                        b.apply(d, f)
                    } else c && c.call(d, e.g, $.bY(e))
                };
            $.el.anychart.exports || $.bl(4, null, ["Exporting"]);
            xY.b = function (a, b, c, d, e) {
                e = e.target;
                if ($.YX(e)) {
                    try {
                        var f = d(vY(e))
                    } catch (h) {
                        b && b.call(c, 500, h)
                    }
                    a ? $.z(a) ? (f.container(a), f.draw()) : $.E(a) && a.call(c, f) : f.container() && f.draw()
                } else b && b.call(c, e.g, $.bY(e))
            };
            $.F("anychart.fromXmlFile", xY);
            $.F("anychart.fromJsonFile", function (a, b, c, d, e, f, h, k, l) {
                var m = wY("fromJson", c, l);
                m && (b = (0, $.pa)(xY.b, void 0, b, c, l, m), $.SX(a, b, d, e, f, h, k))
            });
            $.F("anychart.data.parseHtmlTable", function (a, b, c, d, e, f) {
                var h = window.document.querySelector(a || "table");
                a = null;
                var k;
                if (h) {
                    d = d || "tr:first-child th";
                    c = c || "td, th";
                    b = b || "tr";
                    a = {};
                    (e = h.querySelector(e || "caption")) && (k = f ? f.call(void 0, e) : e.innerText);
                    k && (a.title = k);
                    var l = h.querySelectorAll(d),
                        m = [];
                    e = null;
                    d = 0;
                    for (k = l.length; d < k; d++) {
                        var p = l[d];
                        p && !e && (e = $.cf(p));
                        m.push(f ? f.call(void 0, p) : p.innerText)
                    }
                    m.length && (a.header = m);
                    if ((b = h.querySelectorAll(b)) && b.length) {
                        h = [];
                        d = 0;
                        for (k = b.length; d < k; d++)
                            if (m = b[d],
                                m != e) {
                                l = [];
                                if ((m = m.querySelectorAll(c)) && m.length) {
                                    p = 0;
                                    for (var q = m.length; p < q; p++) {
                                        var r = m[p];
                                        f ? l.push(f.call(void 0, r)) : l.push(r.innerText)
                                    }
                                }
                                l.length && h.push(l)
                            } a.rows = h
                    }
                }
                return a
            });
            $.F("anychart.data.loadJsonFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(yY, void 0, Dga, b, c, l);
                $.SX(a, b, d, e, f, h, k)
            });
            $.F("anychart.data.loadXmlFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(yY, void 0, Ega, b, c, l);
                $.SX(a, b, d, e, f, h, k)
            });
            $.F("anychart.data.loadCsvFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(yY, void 0, Gga, b, c, l);
                $.SX(a, b, d, e, f, h, k)
            });
            $.F("anychart.data.loadGoogleSpreadsheet", function (a, b, c, d, e) {
                b = (0, $.pa)(yY, void 0, Fga, b, c, e);
                $.z(a) ? (c = a, a = "od6") : (c = a.key, a = $.n(a.sheet) ? a.sheet : "od6");
                a = new $.mX("https://spreadsheets.google.com/feeds/cells/" + c + "/" + a + "/public/values");
                a.g.set("alt", "json");
                c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, $.En)()).toString(36);
                a.g.set("zx", c);
                $.SX(a.toString(), b, "GET", null, null, d)
            });
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});