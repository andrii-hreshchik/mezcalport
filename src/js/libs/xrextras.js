!function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {enumerable: !0, get: r})
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(n, "__esModule", {value: !0})
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {enumerable: !0, value: n}), 2 & e && "string" != typeof n) for (var o in n) t.d(r, o, function (e) {
            return n[e]
        }.bind(null, o));
        return r
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 3)
}([function (n, e, t) {
    "use strict";
    n.exports = function (n) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var t = function (n, e) {
                    var t = n[1] || "", r = n[3];
                    if (!r) return t;
                    if (e && "function" == typeof btoa) {
                        var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map(function (n) {
                                return "/*# sourceURL=" + r.sourceRoot + n + " */"
                            });
                        return [t].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [t].join("\n")
                }(e, n);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }, e.i = function (n, t) {
            "string" == typeof n && (n = [[null, n, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (o = 0; o < n.length; o++) {
                var a = n[o];
                null != a[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a))
            }
        }, e
    }
}, function (n, e, t) {
    var r, o, i = {}, a = (r = function () {
        return window && document && document.all && !window.atob
    }, function () {
        return void 0 === o && (o = r.apply(this, arguments)), o
    }), s = function (n) {
        var e = {};
        return function (n, t) {
            if ("function" == typeof n) return n();
            if (void 0 === e[n]) {
                var r = function (n, e) {
                    return e ? e.querySelector(n) : document.querySelector(n)
                }.call(this, n, t);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                } catch (n) {
                    r = null
                }
                e[n] = r
            }
            return e[n]
        }
    }(), l = null, d = 0, c = [], p = t(8);

    function u(n, e) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t], o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(w(r.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(w(r.parts[a], e));
                i[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function m(n, e) {
        for (var t = [], r = {}, o = 0; o < n.length; o++) {
            var i = n[o], a = e.base ? i[0] + e.base : i[0], s = {css: i[1], media: i[2], sourceMap: i[3]};
            r[a] ? r[a].parts.push(s) : t.push(r[a] = {id: a, parts: [s]})
        }
        return t
    }

    function f(n, e) {
        var t = s(n.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === n.insertAt) r ? r.nextSibling ? t.insertBefore(e, r.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), c.push(e); else if ("bottom" === n.insertAt) t.appendChild(e); else {
            if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(n.insertAt.before, t);
            t.insertBefore(e, o)
        }
    }

    function h(n) {
        if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n);
        var e = c.indexOf(n);
        e >= 0 && c.splice(e, 1)
    }

    function g(n) {
        var e = document.createElement("style");
        if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) {
            var r = function () {
                0;
                return t.nc
            }();
            r && (n.attrs.nonce = r)
        }
        return v(e, n.attrs), f(n, e), e
    }

    function v(n, e) {
        Object.keys(e).forEach(function (t) {
            n.setAttribute(t, e[t])
        })
    }

    function w(n, e) {
        var t, r, o, i;
        if (e.transform && n.css) {
            if (!(i = "function" == typeof e.transform ? e.transform(n.css) : e.transform.default(n.css))) return function () {
            };
            n.css = i
        }
        if (e.singleton) {
            var a = d++;
            t = l || (l = g(e)), r = y.bind(null, t, a, !1), o = y.bind(null, t, a, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (n) {
            var e = document.createElement("link");
            return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", v(e, n.attrs), f(n, e), e
        }(e), r = function (n, e, t) {
            var r = t.css, o = t.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || i) && (r = p(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {type: "text/css"}), s = n.href;
            n.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, t, e), o = function () {
            h(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = g(e), r = function (n, e) {
            var t = e.css, r = e.media;
            r && n.setAttribute("media", r);
            if (n.styleSheet) n.styleSheet.cssText = t; else {
                for (; n.firstChild;) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(t))
            }
        }.bind(null, t), o = function () {
            h(t)
        });
        return r(n), function (e) {
            if (e) {
                if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                r(n = e)
            } else o()
        }
    }

    n.exports = function (n, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var t = m(n, e);
        return u(t, e), function (n) {
            for (var r = [], o = 0; o < t.length; o++) {
                var a = t[o];
                (s = i[a.id]).refs--, r.push(s)
            }
            n && u(m(n, e), e);
            for (o = 0; o < r.length; o++) {
                var s;
                if (0 === (s = r[o]).refs) {
                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                    delete i[s.id]
                }
            }
        }
    };
    var b, x = (b = [], function (n, e) {
        return b[n] = e, b.filter(Boolean).join("\n")
    });

    function y(n, e, t, r) {
        var o = t ? "" : r.css;
        if (n.styleSheet) n.styleSheet.cssText = x(e, o); else {
            var i = document.createTextNode(o), a = n.childNodes;
            a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(i, a[e]) : n.appendChild(i)
        }
    }
}, function (n, e, t) {
    var r = t(7);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(r, o);
    r.locals && (n.exports = r.locals)
}, function (n, e, t) {
    const r = t(4), o = () => {
        setTimeout(() => {
            window.dispatchEvent(new CustomEvent("xrandextrasloaded"))
        }, 1)
    };
    window.XRExtras = r.XRExtras, setTimeout(() => {
        window.dispatchEvent(new CustomEvent("xrextrasloaded"))
    }, 1), window.XR ? o() : window.addEventListener("xrloaded", o)
}, function (n, e, t) {
    const {AFrameFactory: r} = t(5), {AlmostThereFactory: o} = t(6), {DebugWebViewsFactory: i} = t(12), {FullWindowCanvasFactory: a} = t(13), {LoadingFactory: s} = t(14), {RuntimeErrorFactory: l} = t(18);
    n.exports = {XRExtras: {AFrame: r(), AlmostThere: o(), DebugWebViews: i(), FullWindowCanvas: a(), Loading: s(), RuntimeError: l()}}
}, function (n, e) {
    let t = null;
    const r = () => {
        XR.addCameraPipelineModule(XRExtras.Loading.pipelineModule())
    };
    const o = () => {
        const n = document.getElementsByTagName("a-scene")[0];
        if (!n) return;
        const e = n.attributes;
        Object.keys(e).forEach(n => {
            const t = e.item(n).name;
            if ("xrextras-almost-there" == t) {
                const t = new RegExp("url:([^;]*)").exec(e.item(n).value);
                t && window.XRExtras.AlmostThere.configure({url: t[1]}), window.XR ? window.XRExtras.AlmostThere.checkCompatibility() : window.addEventListener("xrloaded", window.XRExtras.AlmostThere.checkCompatibility)
            }
            "xrextras-loading" == t && window.XRExtras.Loading.showLoading({onxrloaded: r})
        })
    }, i = window.onload;
    window.onload = (() => {
        i && i(), window.XRExtras ? o() : window.addEventListener("xrextrasloaded", o)
    }), n.exports = {
        AFrameFactory: () => (t || (t = function () {
            let n = !1;
            const e = () => {
                !n && window.AFRAME && (n = !0, AFRAME.registerComponent("xrextras-almost-there", {
                    schema: {url: {default: ""}}, init: function () {
                        const n = () => {
                            this.data.url && XRExtras.AlmostThere.configure({url: this.data.url}), XR.addCameraPipelineModule(XRExtras.AlmostThere.pipelineModule())
                        };
                        window.XRExtras && window.XR ? n() : window.addEventListener("xrandextrasloaded", n)
                    }
                }), AFRAME.registerComponent("xrextras-loading", {
                    init: function () {
                        let n = !1;
                        this.el.addEventListener("loaded", () => {
                            n = !0
                        });
                        const e = () => n, t = () => {
                            XRExtras.Loading.setAppLoadedProvider(e), XRExtras.Loading.showLoading({onxrloaded: r})
                        };
                        window.XRExtras ? t() : window.addEventListener("xrextrasloaded", t)
                    }
                }), AFRAME.registerComponent("xrextras-runtime-error", {
                    init: function () {
                        const n = () => {
                            XR.addCameraPipelineModule(XRExtras.RuntimeError.pipelineModule())
                        };
                        window.XRExtras && window.XR ? n() : window.addEventListener("xrandextrasloaded", n)
                    }
                }), AFRAME.registerComponent("xrextras-tap-recenter", {
                    init: function () {
                        const n = this.el.sceneEl;
                        n.addEventListener("click", () => {
                            n.emit("recenter", {})
                        })
                    }
                }))
            };
            return e(), {registerXrExtrasComponents: e}
        }()), t)
    }
}, function (n, e, t) {
    t(2), t(9);
    const r = t(11);
    let o = null;
    n.exports = {
        AlmostThereFactory: () => (o || (o = function () {
            let n, e = !1;
            const t = n => {
                document.getElementById(n).classList.remove("hidden")
            }, o = () => !(e || !XR.XrDevice.isDeviceBrowserCompatible() && ((() => {
                const e = document.createElement("template");
                e.innerHTML = r.trim();
                const o = e.content.firstChild;
                document.getElementsByTagName("body")[0].appendChild(o);
                const i = n || window.location.href, a = o.querySelectorAll(".desktop-home-link");
                for (let n = 0; n < a.length; n++) a[n].textContent = i;
                const s = XR.XrDevice.incompatibleReasons(), l = XR.XrDevice.incompatibleReasonDetails(), d = XR.XrDevice.deviceEstimate();
                for (let n of s) switch (n) {
                    case XR.XrDevice.IncompatibilityReasons.UNSUPPORTED_BROWSER:
                        if ("iOS" == d.os) {
                            if ("Safari" == l.inAppBrowserType) return t("error_msg_open_in_safari"), void t("apple_open_safari_hint");
                            if ("Ellipsis" == l.inAppBrowserType) return t("error_msg_open_in_safari"), void t("apple_tap_to_open_safari_hint")
                        }
                }
                if ("iOS" == d.os) return void t("error_msg_apple_almost_there");
                if ("Android" == d.os) return void t("error_msg_android_almost_there");
                t("error_msg_device");
                const c = document.createElement("script");
                c.type = "text/javascript", c.src = "https://cdn.8thwall.com/web/share/qrcode8.js", c.onload = (() => {
                    document.getElementById("qrcode").innerHTML = qrcode8.generateQRHtml(i)
                }), document.getElementById("almostthereContainer").appendChild(c)
            })(), e = !0, XR.pause(), XR.stop(), 1));
            return {
                pipelineModule: () => ({
                    name: "almostthere", onCameraStatusChange: () => {
                        if (!o()) throw Error("Device or browser incompatible with XR.")
                    }, onException: () => {
                        o()
                    }
                }), checkCompatibility: o, configure: ({url: e}) => {
                    void 0 !== e && (n = e)
                }
            }
        }()), o)
    }
}, function (n, e, t) {
    (n.exports = t(0)(!1)).push([n.i, "@font-face {\n  font-family: 'Raleway-Regular';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Raleway-Bold';\n  src: url('//cdn.8thwall.com/web/fonts/raleway-bold.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/raleway-bold.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n\n@font-face {\n  font-family: 'Varela-Round';\n  src: url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.woff') format('woff'), /* Modern Browsers */\n       url('//cdn.8thwall.com/web/fonts/VarelaRound-Regular.ttf')  format('truetype') /* Safari, Android, iOS */\n}\n", ""])
}, function (n, e) {
    n.exports = function (n) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!n || "string" != typeof n) return n;
        var t = e.protocol + "//" + e.host, r = t + e.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (n, e) {
            var o, i = e.trim().replace(/^"(.*)"$/, function (n, e) {
                return e
            }).replace(/^'(.*)'$/, function (n, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? n : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? t + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function (n, e, t) {
    var r = t(10);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(r, o);
    r.locals && (n.exports = r.locals)
}, function (n, e, t) {
    (n.exports = t(0)(!1)).push([n.i, "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#almostthereContainer {\n  z-index: 820;\n  background-color: #FFFFFF;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.apple-safari-hint {\n  position: fixed;\n  bottom: 3%;\n  right: 8%;\n  height: 72px;\n}\n\n.desktop-home-link {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color:rgba(173, 80, 255, 0.2);\n  -webkit-user-select: all;  /* Chrome 49+ */\n  -moz-user-select: all;     /* Firefox 43+ */\n  -ms-user-select: all;      /* No support yet */\n  user-select: all;\n  pointer-events: auto;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-margin-top-20 {\n  margin-top: 20vh;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 90%;\n}\n\n.error-text-header {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 18pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-detail {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 14pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-hint {\n  font-family: 'Raleway-Regular', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n", ""])
}, function (n, e) {
    n.exports = '<div id="almostthereContainer" class="absolute-fill">\n  \x3c!--Not on mobile --\x3e\n  <div id="error_msg_device" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-20">\n        <div id="qrcode"></div>\n        <br/>\n        <div class="error-text-header">\n          <span style="font-size:24pt;line-height:20pt;">\n            Hey! Looks like you\'re on a desktop.\n          </span>\n        </div>\n        <div class="error-text-hint">\n          <span style="font-size:15pt;line-height:50pt;letter-spacing:-.21;color:#323232">\n            For the augmented reality experience, scan this code\n          </span>\n        </div>\n        <div class="error-text-hint">\n          <span style="font-size:15pt;line-height:20pt;letter-spacing:-.21;color:#323232">\n            or visit <span class="desktop-home-link"></span>\n            on a smartphone or tablet.\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, reachable from button press --\x3e\n  <div id="error_msg_open_in_safari" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your iPhone, please open in Safari.\n        </div>\n        <br/>\n        <img id="apple_open_safari_hint"\n          src="//cdn.8thwall.com/web/img/almostthere/v1/open-in-safari.png"\n          class="apple-safari-hint hidden"/>\n        <img id="apple_tap_to_open_safari_hint"\n          src="//cdn.8thwall.com/web/img/almostthere/v1/tap-to-open-in-safari.png"\n          class="apple-safari-hint hidden"/>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--iOS webview, requires copy/paste of link --\x3e\n  <div id="error_msg_apple_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img src="//cdn.8thwall.com/web/img/almostthere/v1/safari-icon.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your iPhone, please open in Safari.\n        </div>\n        <br/>\n        <p><span class="desktop-home-link"></span></p>\n        <div id="apple_copy_hint" class="error-text-hint">\n          Open your Safari browser and paste.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \x3c!--Android unsupported browser --\x3e\n  <div id="error_msg_android_almost_there" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="100px" src="//cdn.8thwall.com/web/img/almostthere/v1/google-chrome.png"></p>\n        <div class="error-text-header">You\'re almost there!</div>\n        <div class="error-text-detail">\n          To view this experience on your Android device, please open in Google Chrome or your\n          native browser.\n        </div>\n        <br/>\n        <p><span class="desktop-home-link"></span></p>\n        <div id="android_copy_hint" class="error-text-hint">Open your browser and paste.</div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}, function (n, e) {
    let t = null;
    n.exports = {
        DebugWebViewsFactory: () => (t || (t = function () {
            let n = "";
            const e = window.console.log;
            return {
                enableLogToScreen: () => {
                    const t = t => {
                        e(t), n = n + "* " + t + "<br>";
                        let r = document.getElementById("logdiv");
                        if (!r) {
                            const n = document.getElementsByTagName("body")[0];
                            if (!n) return;
                            r = document.createElement("div"), n.appendChild(r), r.style.zIndex = 850, r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.backgroundColor = "#FFFFFF", r.id = "logdiv"
                        }
                        r.innerHTML = "<pre>" + n + "</pre>"
                    };
                    window.console.log = t, window.console.error = (n => {
                        t(`<font color=red>${n}</font>`)
                    }), window.console.warn = (n => {
                        t(`<font color=orange>${n}</font>`)
                    })
                }
            }
        }()), t)
    }
}, function (n, e) {
    let t = null;
    n.exports = {
        FullWindowCanvasFactory: () => (null == t && (t = function () {
            let n = null;
            const e = ({orientation: t}) => {
                const r = window.innerWidth, o = window.innerHeight;
                (0 == t || 180 == t) && r > o || (90 == t || -90 == t) && o > r ? window.requestAnimationFrame(() => e({orientation: t})) : (n.width = r, n.height = o)
            }, t = ({canvas: t, orientation: r}) => {
                n = t;
                const o = document.getElementsByTagName("body")[0];
                o.style.margin = "0px", o.style.width = "100%", o.style.height = "100%", o.appendChild(n), e({orientation: r})
            }, r = ({orientation: n}) => {
                e({orientation: n})
            };
            return {pipelineModule: () => ({name: "fullwindowcanvas", onStart: t, onDeviceOrientationChange: r})}
        }()), t)
    }
}, function (n, e, t) {
    t(2), t(15);
    const r = t(17);
    let o = null;
    n.exports = {
        LoadingFactory: () => (o || (o = function () {
            let n, e, t, o, i, a, s, l = null, d = () => !0, c = 0, p = !1, u = !1;
            const m = navigator.userAgent;
            let f = !1;
            const h = () => {
                f = !0, window.removeEventListener("devicemotion", h)
            };
            window.addEventListener("devicemotion", h);
            const g = (e = !0) => {
                n.classList.add("hidden"), e && l.parentNode && l.parentNode.removeChild(l)
            }, v = (t = !0) => {
                e.classList.add("fade-out"), setTimeout(() => {
                    n.classList.add("fade-out"), n.style.pointerEvents = "none", setTimeout(() => g(t), 400)
                }, 400)
            }, w = () => {
                t.classList.add("fade-out")
            }, b = () => {
                if (d() && !p) return u && (document.cookie = "previouslyGotCameraPermission=true;max-age=31536000"), void v();
                requestAnimationFrame(() => {
                    b()
                })
            }, x = m.includes("Linux");
            u = x && !document.cookie.includes("previouslyGotCameraPermission=true");
            const y = x && !u, E = d => {
                if (l) return;
                const c = document.createElement("template");
                c.innerHTML = r.trim();
                const u = c.content.firstChild;
                document.getElementsByTagName("body")[0].appendChild(u), (r => {
                    n = (l = r).querySelector("#loadBackground"), e = l.querySelector("#loadImageContainer"), t = document.getElementById("requestingCameraPermissions"), o = document.getElementById("cameraPermissionsErrorAndroid"), i = document.getElementById("cameraPermissionsErrorApple"), a = document.getElementById("cameraPermissionsErrorSamsung"), s = document.getElementById("deviceMotionErrorApple")
                })(u), p = !0, d && d.onxrloaded && (window.XR ? d.onxrloaded() : window.addEventListener("xrloaded", d.onxrloaded))
            };
            return {
                pipelineModule: () => ({
                    name: "loading", onStart: () => {
                        !0 !== f && "iOS" === XR.XrDevice.deviceEstimate().os && (s.classList.remove("hidden"), v(!1), XR.pause(), XR.stop())
                    }, onUpdate: () => {
                        p && (c < 5 ? ++c : (p = !1, b()))
                    }, onCameraStatusChange: ({status: n}) => {
                        XR.XrDevice.isDeviceBrowserCompatible() && ("requesting" == n ? (E(), y || t.classList.remove("hidden")) : "hasStream" == n ? y || w() : "hasVideo" == n || "failed" == n && (() => {
                            if (t.classList.add("hidden"), m.includes("Linux")) {
                                let n;
                                const e = l.querySelectorAll(".domain-view");
                                for (let n = 0; n < e.length; n++) e[n].textContent = window.location.hostname;
                                n = navigator.userAgent.includes("SamsungBrowser") ? l.querySelectorAll(".samsung-instruction") : l.querySelectorAll(".chrome-instruction"), o.classList.remove("hidden");
                                for (let e = 0; e < n.length; e++) n[e].classList.remove("hidden")
                            } else i.classList.remove("hidden");
                            v(!1), XR.pause(), XR.stop()
                        })())
                    }, onException: () => {
                        l && (w(), g())
                    }
                }), showLoading: E, setAppLoadedProvider: n => {
                    d = n
                }
            }
        }()), o)
    }
}, function (n, e, t) {
    var r = t(16);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(r, o);
    r.locals && (n.exports = r.locals)
}, function (n, e, t) {
    (n.exports = t(0)(!1)).push([n.i, "#loadingContainer * {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#loadingContainer {\n  z-index: 800;\n  font-family: 'Varela-Round', sans-serif;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n#loadBackground {\n  z-index: 10;\n  background-color: white;\n  pointer-events: auto;\n}\n\n#requestingCameraPermissions {\n  z-index: 11;\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  text-align: center;\n  color: white;\n  font-size: 3.7vh;\n  background-color: #7611B7;\n  padding: 3vh 0;\n}\n\n#requestingCameraIcon {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n  height: 7vh;\n}\n\n#loadImage {\n  position: absolute;\n  margin-top: -2.5em;\n  margin-left: -2.5em;\n  top: 50%;\n  left: 50%;\n  height: 5em;\n  width: 5em;\n  transform: translate(-50%, -50%);\n}\n\n#cameraPermissionsErrorApple {\n  padding: 20vh 5vw;\n  font-size: 6.5vmin;\n  text-align: center;\n  background-color: white;\n}\n\n#cameraPermissionsErrorAppleArrow {\n  position: absolute;\n  right: 5vmin;\n  top: 15vmin;\n  width: 20vmin;\n  transform: rotate(130deg);\n}\n\n#cameraPermissionsErrorAppleReloadCamera {\n  display: block;\n  margin: 0 auto;\n  margin-top: 10vh;\n  max-width: 30vw;\n}\n\n#cameraPermissionsErrorAndroid {\n  padding: 2vh 0;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: white;\n}\n\n#deviceMotionErrorApple {\n  padding: 2vh 0;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n  justify-content: space-around;\n  align-items: center;\n  background-color: white;\n}\n\n#cameraPermissionsCameraIcon{\n  overflow: hidden;\n  flex: 0 0 auto;\n  margin-bottom: 2vh;\n}\n\n#cameraPermissionsCameraIcon img {\n  display: block;\n  margin: 0 auto;\n  height: 5vh;\n}\n\n.loading-error-header {\n  font-size: 3.5vh;\n  flex: 0 0 auto;\n}\n\n.loading-error-footer {\n  font-size: 3vh;\n  line-height: 5.5vh;\n  flex: 0 0 auto;\n  text-align: center;\n  width: 80vmin\n}\n\n.loading-error-footer img {\n  display: block;\n  height: 5vh;\n  margin: 0 auto;\n  margin-bottom: 2vh;\n}\n\n.loading-error-instructions {\n  font-family: 'Raleway-Regular', sans-serif;\n  font-size: 2.5vh;\n  list-style: none;\n  margin-left: 1em;\n  counter-reset: line;\n  flex: 0 0 auto;\n}\n\n.loading-error-instructions > li {\n  position: relative;\n  margin-bottom: 5vh;\n}\n\n.loading-error-instructions > li > img {\n  max-height: 3vh;\n  vertical-align: middle;\n  margin: 0 .5vh;\n}\n\n.loading-error-instructions > li:before {\n  font-family: 'Varela-Round', sans-serif;\n  position: absolute;\n  width: 6vh;\n  height: 6vh;\n  border-radius: 3vh;\n  color: #fff;\n  background-color: rgba(218, 209, 228, 128);\n  text-align:center;\n  left: -8vh;\n  top: -1vh;\n  font-size: 2.5vh;\n  line-height: 6.5vh;\n  counter-increment: line;\n  content: counter(line);\n}\n\n.highlight {\n  color: #7611B7;\n  font-family: 'Raleway-Bold', sans-serif;\n  font-weight: bold;\n}\n\n.camera-instruction-block {\n  display: inline-block;\n  background-color: #EBEBEB;\n  padding: 1vh;\n}\n\n.camera-instruction-button {\n  display: inline-block;\n  background-color: #EBEBEB;\n  padding: 1vh;\n  background-color: #359AFF;\n  color: white;\n  font-size: 2vh;\n  box-shadow: 0 .125vh .25vh rgba(0, 0, 0, 0.5);\n}\n\n.rotate-center {animation: rotate-center 1.1s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite both;}\n@keyframes rotate-center {\n  0% {transform: rotate(0);}\n  100% {transform: rotate(360deg);}\n}\n\n.fade-out { animation: fade-out 0.3s linear forwards; }\n@keyframes fade-out {\n  0% {opacity: 1;}\n  100% {opacity: 0;}\n}\n\n", ""])
}, function (n, e) {
    n.exports = '<div id="loadingContainer" class="absolute-fill">\n  \x3c!--Loading screen--\x3e\n  <div id="loadBackground" class="absolute-fill">\n    <div id="loadImageContainer" class="absolute-fill">\n      <img src="//cdn.8thwall.com/web/img/loading/v1/eight.png" id="loadImage" class="rotate-center" />\n    </div>\n  </div>\n\n  \x3c!--Camera Permissions--\x3e\n  <div id="requestingCameraPermissions" class="hidden" />\n    <img id="requestingCameraIcon" src="//cdn.8thwall.com/web/img/loading/v1/camera-purple.png" />\n    Tap "Allow" so we can<br>augment your reality.\n  </div>\n\n  \x3c!--Permission error, iOS--\x3e\n  <div id="cameraPermissionsErrorApple" class="absolute-fill hidden" />\n    Refresh the page to enable<br>your camera for AR\n    <img id="cameraPermissionsErrorAppleArrow" src="//cdn.8thwall.com/web/img/loading/v1/arrow.png" />\n    <img id="cameraPermissionsErrorAppleReloadCamera" src="//cdn.8thwall.com/web/img/loading/v1/reload-camera.png" />\n  </div>\n\n  \x3c!--Permission error, Android--\x3e\n  <div id="cameraPermissionsErrorAndroid" class="absolute-fill hidden">\n    <div id="cameraPermissionsCameraIcon">\n      <img src="//cdn.8thwall.com/web/img/loading/v1/camera-purple.png" />\n    </div>\n    <div class="loading-error-header">Let\'s enable your camera</div>\n    <ol class="loading-error-instructions">\n      <li>Tap the <img src="//cdn.8thwall.com/web/img/loading/v1/ellipsis.png"> in the top right</li>\n      <li>Tap <span class="highlight">Settings</li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Site settings</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Camera</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="highlight">Blocked</span>\n        <br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="chrome-instruction hidden">\n        <span class="camera-instruction-button">CLEAR & RESET</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Advanced</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight">Manage website data</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        Press and hold<br>\n        <span class="camera-instruction-block domain-view">apps.8thwall.com</span>\n      </li>\n      <li class="samsung-instruction hidden">\n        <span class="highlight" style="color: #1500ba">DELETE</span>\n      </li>\n    </ol>\n    <div class="loading-error-footer">\n      <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png" />\n      Then, reload the page to experience some AR magic!\n    </div>\n  </div>\n\n    \x3c!--iOS devicemotion sensor is disabled --\x3e\n  <div id="deviceMotionErrorApple" class="absolute-fill hidden">\n    <div class="loading-error-header">Let\'s enable your motion sensors</div>\n    <ol class="loading-error-instructions">\n      <li>Open <img src="https://cdn.8thwall.com/web/img/loading/v1/settings-icon-ios.png" style="max-height: 4vh"><b>Settings</b></li>\n      <li>Select <img src="https://cdn.8thwall.com/web/img/loading/v1/safari-icon.png" style="max-height: 4vh"><b>Safari</b></li>\n      <li>Enable <span class="highlight">Motion&nbsp;&amp;&nbsp;Orientation Access</span></li>\n      <li>Reload the page <img src="//cdn.8thwall.com/web/img/loading/v1/reload.png"></li>\n    </ol>\n    \x3c!-- Empty footer to take up space --\x3e\n    <div class="loading-error-footer"></div>\n  </div>\n</div>\n'
}, function (n, e, t) {
    t(2), t(19);
    const r = t(21);
    let o = null;
    const i = () => {
        let n = !1;
        return {
            pipelineModule: () => ({
                name: "error", onStart: () => {
                    n = !0
                }, onException: e => {
                    if (!n) return;
                    if (document.getElementById("error_msg_unknown")) return;
                    console.log("[RuntimeError] XR caught an error; stopping:"), console.log(e);
                    const t = document.createElement("template");
                    t.innerHTML = r.trim(), document.getElementsByTagName("body")[0].appendChild(t.content.firstChild), document.getElementById("error_msg_unknown").classList.remove("hidden"), XR.pause(), XR.stop()
                }
            })
        }
    };
    n.exports = {RuntimeErrorFactory: () => (o || (o = i()), o)}
}, function (n, e, t) {
    var r = t(20);
    "string" == typeof r && (r = [[n.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    t(1)(r, o);
    r.locals && (n.exports = r.locals)
}, function (n, e, t) {
    (n.exports = t(0)(!1)).push([n.i, "* {\n  font-family: inherit;\n  box-sizing: inherit;\n}\n\n#runtimeErrorContainer {\n  z-index: 800;\n  background-color: #FFFFFF;\n}\n\n.absolute-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.error-text-outer-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-margin-top-5 {\n  margin-top: 5vh;\n}\n\n.error-text-container {\n  flex: 0 0 auto;\n  text-align: center;\n  width: 90%;\n}\n\n.error-text-header {\n  font-family: 'Varela-Round', sans-serif;\n  font-size: 18pt;\n  color: #323232;\n  letter-spacing: .37;\n  line-height: 23pt;\n}\n\n.error-text-hint {\n  font-family: 'Raleway-Regular', sans-serif;\n  font-size: 14pt;\n  color: #A8A8BA;\n  letter-spacing: .37;\n}\n\n.floater {\n  -webkit-filter: drop-shadow(5px 5px 5px #222);\n}\n", ""])
}, function (n, e) {
    n.exports = '<div id="runtimeErrorContainer" class="absolute-fill">\n  <div id="error_msg_unknown" class="hidden">\n    <div class="error-text-outer-container">\n      <div class="error-text-container error-margin-top-5">\n        <p><img height="75px" src="//cdn.8thwall.com/web/img/runtimeerror/v1/computer-voxel.png" class="floater"></p>\n        <div class="error-text-header">Oops, something went wrong!</div>\n        <div class="error-text-hint">\n          <p id="error_unknown_detail" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
}]);