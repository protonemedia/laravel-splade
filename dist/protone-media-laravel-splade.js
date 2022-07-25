import or from "axios";
import { ref as v, computed as O, createApp as rn, watch as Ee, openBlock as z, createBlock as Se, unref as ee, h as x, compile as nn, onMounted as R, createElementBlock as He, createElementVNode as an, provide as U, inject as q, nextTick as ir, Fragment as ke, KeepAlive as on, normalizeClass as sn, createVNode as ln, renderList as un, createCommentVNode as cn, cloneVNode as fn, watchEffect as G, defineComponent as B, onUnmounted as ve, Teleport as dn, reactive as pn, withModifiers as hn, renderSlot as mn } from "vue";
function vn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function gn(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), l = i.length; l--; ) {
      var s = i[e ? l : ++a];
      if (r(o[s], s, o) === !1)
        break;
    }
    return t;
  };
}
var yn = gn();
const bn = yn;
function wn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var _n = typeof global == "object" && global && global.Object === Object && global;
const sr = _n;
var Sn = typeof self == "object" && self && self.Object === Object && self, $n = sr || Sn || Function("return this")();
const J = $n;
var On = J.Symbol;
const re = On;
var lr = Object.prototype, Tn = lr.hasOwnProperty, En = lr.toString, we = re ? re.toStringTag : void 0;
function An(e) {
  var t = Tn.call(e, we), r = e[we];
  try {
    e[we] = void 0;
    var n = !0;
  } catch {
  }
  var a = En.call(e);
  return n && (t ? e[we] = r : delete e[we]), a;
}
var Pn = Object.prototype, xn = Pn.toString;
function Dn(e) {
  return xn.call(e);
}
var Fn = "[object Null]", Cn = "[object Undefined]", Ct = re ? re.toStringTag : void 0;
function ae(e) {
  return e == null ? e === void 0 ? Cn : Fn : Ct && Ct in Object(e) ? An(e) : Dn(e);
}
function ne(e) {
  return e != null && typeof e == "object";
}
var jn = "[object Arguments]";
function jt(e) {
  return ne(e) && ae(e) == jn;
}
var ur = Object.prototype, Rn = ur.hasOwnProperty, Bn = ur.propertyIsEnumerable, Ln = jt(function() {
  return arguments;
}()) ? jt : function(e) {
  return ne(e) && Rn.call(e, "callee") && !Bn.call(e, "callee");
};
const cr = Ln;
var In = Array.isArray;
const M = In;
function Mn() {
  return !1;
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = fr && typeof module == "object" && module && !module.nodeType && module, qn = Rt && Rt.exports === fr, Bt = qn ? J.Buffer : void 0, Nn = Bt ? Bt.isBuffer : void 0, Hn = Nn || Mn;
const et = Hn;
var kn = 9007199254740991, Un = /^(?:0|[1-9]\d*)$/;
function mt(e, t) {
  var r = typeof e;
  return t = t == null ? kn : t, !!t && (r == "number" || r != "symbol" && Un.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Gn = 9007199254740991;
function vt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gn;
}
var Kn = "[object Arguments]", zn = "[object Array]", Wn = "[object Boolean]", Xn = "[object Date]", Jn = "[object Error]", Yn = "[object Function]", Vn = "[object Map]", Qn = "[object Number]", Zn = "[object Object]", ea = "[object RegExp]", ta = "[object Set]", ra = "[object String]", na = "[object WeakMap]", aa = "[object ArrayBuffer]", oa = "[object DataView]", ia = "[object Float32Array]", sa = "[object Float64Array]", la = "[object Int8Array]", ua = "[object Int16Array]", ca = "[object Int32Array]", fa = "[object Uint8Array]", da = "[object Uint8ClampedArray]", pa = "[object Uint16Array]", ha = "[object Uint32Array]", w = {};
w[ia] = w[sa] = w[la] = w[ua] = w[ca] = w[fa] = w[da] = w[pa] = w[ha] = !0;
w[Kn] = w[zn] = w[aa] = w[Wn] = w[oa] = w[Xn] = w[Jn] = w[Yn] = w[Vn] = w[Qn] = w[Zn] = w[ea] = w[ta] = w[ra] = w[na] = !1;
function ma(e) {
  return ne(e) && vt(e.length) && !!w[ae(e)];
}
function va(e) {
  return function(t) {
    return e(t);
  };
}
var dr = typeof exports == "object" && exports && !exports.nodeType && exports, $e = dr && typeof module == "object" && module && !module.nodeType && module, ga = $e && $e.exports === dr, Je = ga && sr.process, ya = function() {
  try {
    var e = $e && $e.require && $e.require("util").types;
    return e || Je && Je.binding && Je.binding("util");
  } catch {
  }
}();
const Lt = ya;
var It = Lt && Lt.isTypedArray, ba = It ? va(It) : ma;
const pr = ba;
var wa = Object.prototype, _a = wa.hasOwnProperty;
function Sa(e, t) {
  var r = M(e), n = !r && cr(e), a = !r && !n && et(e), o = !r && !n && !a && pr(e), i = r || n || a || o, l = i ? wn(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || _a.call(e, u)) && !(i && (u == "length" || a && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || mt(u, s))) && l.push(u);
  return l;
}
var $a = Object.prototype;
function Oa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || $a;
  return e === r;
}
function Ta(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ea = Ta(Object.keys, Object);
const Aa = Ea;
var Pa = Object.prototype, xa = Pa.hasOwnProperty;
function Da(e) {
  if (!Oa(e))
    return Aa(e);
  var t = [];
  for (var r in Object(e))
    xa.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function me(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Fa = "[object AsyncFunction]", Ca = "[object Function]", ja = "[object GeneratorFunction]", Ra = "[object Proxy]";
function hr(e) {
  if (!me(e))
    return !1;
  var t = ae(e);
  return t == Ca || t == ja || t == Fa || t == Ra;
}
function mr(e) {
  return e != null && vt(e.length) && !hr(e);
}
function gt(e) {
  return mr(e) ? Sa(e) : Da(e);
}
function yt(e, t) {
  return e && bn(e, t, gt);
}
function Ba(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!mr(r))
      return e(r, n);
    for (var a = r.length, o = t ? a : -1, i = Object(r); (t ? o-- : ++o < a) && n(i[o], o, i) !== !1; )
      ;
    return r;
  };
}
var La = Ba(yt);
const Ia = La;
function vr(e) {
  return e;
}
function gr(e) {
  return typeof e == "function" ? e : vr;
}
function Ma(e, t) {
  var r = M(e) ? vn : Ia;
  return r(e, gr(t));
}
var qa = Array.prototype, Na = qa.reverse;
function Ha(e) {
  return e == null ? e : Na.call(e);
}
const ka = {
  __name: "SpladeCore",
  setup(e, { expose: t }) {
    const r = v(1);
    function n(c, $) {
      window.addEventListener("popstate", a.bind(this)), S($), P(c);
      const D = o(location.href, c, {}, r.value);
      l(D);
    }
    function a(c) {
      s.value = c.state, f.value = 0, P(s.value.html, s.value.rememberedState.scrollY);
    }
    function o(c, $, D, be) {
      const Q = {
        url: c,
        html: $,
        rememberedState: D,
        pageVisitId: be
      };
      return s.value = Q, Q;
    }
    function i(c) {
      window.history.pushState(c, "", c.url);
    }
    function l(c) {
      window.history.replaceState(c, "", c.url);
    }
    const s = v({});
    function u(c) {
      const $ = c.request.responseURL;
      if (c.data.splade.modal && f.value++, S(c.data.splade), c.data.splade.modal)
        return Re(c.data.html, c.data.splade.modal);
      ($ !== s.value.url || c.data.splade.refresh || f.value > 0) && (f.value = 0, r.value++, P(c.data.html, 0));
      const D = o($, c.data.html, s.value.rememberedState ? { ...s.value.rememberedState } : {}, r.value);
      i(D);
    }
    const f = v(0);
    function p() {
      f.value--;
    }
    const d = v({}), g = v({}), h = (c) => g.value[c], T = (c) => Object.keys(h.value[c]).length > 0, E = v({}), F = (c) => E.value[c], A = v([]), K = O(() => Ha(A.value));
    function N(c) {
      A.value.push(c);
    }
    function C(c) {
      A.value[c].dismissed = !0, A.value[c].html = null;
    }
    const j = v(null);
    function _(c, $, D, be) {
      let Q, H;
      const Ie = new Promise((en, tn) => {
        Q = en, H = tn;
      });
      return j.value = {
        title: c,
        text: $,
        confirmButton: D,
        cancelButton: be,
        resolvePromise: Q,
        rejectPromise: H
      }, Ie;
    }
    function b() {
      j.value = null;
    }
    function S(c) {
      d.value = c.shared ? c.shared : {}, E.value[f.value] = c.flash ? c.flash : {}, Ma(c.toasts ? c.toasts : [], ($) => {
        A.value.push($);
      }), g.value[f.value] = c.errors ? c.errors : {};
    }
    function y(c) {
      Ft.value(c);
    }
    function P(c, $) {
      xt.value(c, $);
    }
    function Re(c, $) {
      Dt.value(c, $);
    }
    const ye = v({});
    function pe(c, $, D) {
      ye.value[c] = $, D && Be(c, $);
    }
    function Be(c, $) {
      let D = JSON.parse(localStorage.getItem("splade") || "{}") || {};
      D[c] = $, localStorage.setItem("splade", JSON.stringify(D));
    }
    function Le(c, $) {
      return $ ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[c] : ye.value[c];
    }
    function oe(c, $, D, be) {
      pe("scrollY", window.scrollY);
      const Q = or({
        method: $,
        url: c,
        data: D,
        headers: {
          "X-Splade": !0,
          "X-Requested-With": "XMLHttpRequest",
          Accept: "text/html, application/xhtml+xml",
          ...be
        }
      });
      return Q.then((H) => {
        u(H);
      }).catch((H) => {
        const Ie = H.response.data.splade;
        Ie && S(Ie), H.response.status != 422 && y(H.response.data.html ? H.response.data.html : H.response.data);
      }), Q;
    }
    function Yr(c) {
      oe(c, "GET", {}, {});
    }
    function Vr(c) {
      oe(c, "GET", {}, { "X-Splade-Modal": "modal" });
    }
    function Qr(c) {
      oe(c, "GET", {}, { "X-Splade-Modal": "slideover" });
    }
    function Zr() {
      oe(s.value.url, "GET", {}, { "X-Splade-Refresh": !0 });
    }
    const xt = v(() => {
    }), Dt = v(() => {
    }), Ft = v(() => {
    });
    return t({
      init: n,
      visit: Yr,
      modal: Vr,
      slideover: Qr,
      refresh: Zr,
      request: oe,
      setOnHtml(c) {
        xt.value = c;
      },
      setOnModal(c) {
        Dt.value = c;
      },
      setOnServerError(c) {
        Ft.value = c;
      },
      hasValidationErrors: T,
      validationErrors: h,
      sharedData: d,
      flashData: F,
      toasts: A,
      toastsReversed: K,
      confirmModal: j,
      confirm: _,
      clearConfirmModal: b,
      pushToast: N,
      dismissToast: C,
      restore: Le,
      remember: pe,
      popStack: p,
      currentStack: f,
      pageVisitId: O(() => s.value.pageVisitId)
    }), () => {
    };
  }
}, Ua = document.createElement("div"), m = rn(ka).mount(Ua);
var Ga = "[object String]";
function Ka(e) {
  return typeof e == "string" || !M(e) && ne(e) && ae(e) == Ga;
}
const Oe = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = v(null);
    function n() {
      r.value = x({
        render: nn(t.html)
      });
    }
    return Ee(() => t.html, n, { immediate: !0 }), (a, o) => (z(), Se(ee(r)));
  }
}, za = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e;
    function n() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", i), t("close");
    }
    const a = v(null);
    function o() {
      const l = document.createElement("html");
      l.innerHTML = r.html, l.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const s = a.value;
      if (!s.contentWindow)
        throw new Error("iframe not yet ready.");
      s.contentWindow.document.open(), s.contentWindow.document.write(l.outerHTML), s.contentWindow.document.close(), document.addEventListener("keydown", i);
    }
    function i(l) {
      l.keyCode === 27 && n();
    }
    return R(() => o()), (l, s) => (z(), He("div", {
      class: "w-screen h-screen fixed p-8 bg-black bg-opacity-75 inset-0 z-[200000] box-border",
      onClick: n
    }, [
      an("iframe", {
        ref_key: "iframeElement",
        ref: a,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Wa = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: !0
    }
  },
  setup(e) {
    const t = e, r = Ka(t.el) ? document.getElementById(t.el) : t.el, n = JSON.parse(r.dataset.components), a = JSON.parse(r.dataset.html), o = JSON.parse(r.dataset.splade);
    U("stack", 0);
    const i = v(), l = v([]), s = v(null);
    function u() {
      s.value = null;
    }
    function f(d) {
      l[d] = null, m.popStack();
    }
    const p = q("$spladeOptions");
    return m.setOnHtml((d, g) => {
      l.value = [], i.value = d, ir(() => {
        window.scrollTo(0, g), p.transform_anchors && [...document.querySelectorAll("a")].forEach((h) => {
          h.href == "" || h.href.charAt(0) == "#" || h.__vnode.dynamicProps === null && (h.hasAttribute("download") || (h.onclick = function(T) {
            T.preventDefault(), m.visit(h.href);
          }));
        });
      });
    }), m.setOnModal(function(d, g) {
      l.value[m.currentStack] = { html: d, type: g };
    }), m.setOnServerError(function(d) {
      s.value = d;
    }), m.init(a, o), (d, g) => (z(), He(ke, null, [
      (z(), Se(on, {
        max: ee(p).max_keep_alive
      }, [
        (z(), Se(Oe, {
          key: `visit.${ee(m).pageVisitId}`,
          class: sn({
            "transition ease-in-out blur-sm": ee(m).currentStack > 0
          }),
          html: i.value
        }, null, 8, ["class", "html"]))
      ], 1032, ["max"])),
      ln(Oe, { html: ee(n) }, null, 8, ["html"]),
      (z(!0), He(ke, null, un(ee(m).currentStack, (h) => (z(), Se(Oe, {
        key: `modal.${h}`,
        type: l.value[h].type,
        html: l.value[h].html,
        stack: h,
        "on-top-of-stack": ee(m).currentStack === h,
        onClose: (T) => f(h)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      s.value ? (z(), Se(za, {
        key: 0,
        html: s.value,
        onClose: u
      }, null, 8, ["html"])) : cn("", !0)
    ], 64));
  }
};
function vl(e) {
  return () => x(Wa, e);
}
var Xa = Object.prototype, Ja = Xa.hasOwnProperty;
function Ya(e, t) {
  return e != null && Ja.call(e, t);
}
var Va = "[object Symbol]";
function bt(e) {
  return typeof e == "symbol" || ne(e) && ae(e) == Va;
}
var Qa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Za = /^\w*$/;
function wt(e, t) {
  if (M(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || bt(e) ? !0 : Za.test(e) || !Qa.test(e) || t != null && e in Object(t);
}
var eo = J["__core-js_shared__"];
const Ye = eo;
var Mt = function() {
  var e = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function to(e) {
  return !!Mt && Mt in e;
}
var ro = Function.prototype, no = ro.toString;
function ce(e) {
  if (e != null) {
    try {
      return no.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ao = /[\\^$.*+?()[\]{}|]/g, oo = /^\[object .+?Constructor\]$/, io = Function.prototype, so = Object.prototype, lo = io.toString, uo = so.hasOwnProperty, co = RegExp("^" + lo.call(uo).replace(ao, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function fo(e) {
  if (!me(e) || to(e))
    return !1;
  var t = hr(e) ? co : oo;
  return t.test(ce(e));
}
function po(e, t) {
  return e == null ? void 0 : e[t];
}
function fe(e, t) {
  var r = po(e, t);
  return fo(r) ? r : void 0;
}
var ho = fe(Object, "create");
const Ae = ho;
function mo() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function vo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var go = "__lodash_hash_undefined__", yo = Object.prototype, bo = yo.hasOwnProperty;
function wo(e) {
  var t = this.__data__;
  if (Ae) {
    var r = t[e];
    return r === go ? void 0 : r;
  }
  return bo.call(t, e) ? t[e] : void 0;
}
var _o = Object.prototype, So = _o.hasOwnProperty;
function $o(e) {
  var t = this.__data__;
  return Ae ? t[e] !== void 0 : So.call(t, e);
}
var Oo = "__lodash_hash_undefined__";
function To(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ae && t === void 0 ? Oo : t, this;
}
function le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = mo;
le.prototype.delete = vo;
le.prototype.get = wo;
le.prototype.has = $o;
le.prototype.set = To;
function Eo() {
  this.__data__ = [], this.size = 0;
}
function _t(e, t) {
  return e === t || e !== e && t !== t;
}
function ze(e, t) {
  for (var r = e.length; r--; )
    if (_t(e[r][0], t))
      return r;
  return -1;
}
var Ao = Array.prototype, Po = Ao.splice;
function xo(e) {
  var t = this.__data__, r = ze(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Po.call(t, r, 1), --this.size, !0;
}
function Do(e) {
  var t = this.__data__, r = ze(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Fo(e) {
  return ze(this.__data__, e) > -1;
}
function Co(e, t) {
  var r = this.__data__, n = ze(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Y.prototype.clear = Eo;
Y.prototype.delete = xo;
Y.prototype.get = Do;
Y.prototype.has = Fo;
Y.prototype.set = Co;
var jo = fe(J, "Map");
const Pe = jo;
function Ro() {
  this.size = 0, this.__data__ = {
    hash: new le(),
    map: new (Pe || Y)(),
    string: new le()
  };
}
function Bo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function We(e, t) {
  var r = e.__data__;
  return Bo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Lo(e) {
  var t = We(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Io(e) {
  return We(this, e).get(e);
}
function Mo(e) {
  return We(this, e).has(e);
}
function qo(e, t) {
  var r = We(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function V(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
V.prototype.clear = Ro;
V.prototype.delete = Lo;
V.prototype.get = Io;
V.prototype.has = Mo;
V.prototype.set = qo;
var No = "Expected a function";
function St(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(No);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var i = e.apply(this, n);
    return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new (St.Cache || V)(), r;
}
St.Cache = V;
var Ho = 500;
function ko(e) {
  var t = St(e, function(n) {
    return r.size === Ho && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Uo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Go = /\\(\\)?/g, Ko = ko(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uo, function(r, n, a, o) {
    t.push(a ? o.replace(Go, "$1") : n || r);
  }), t;
});
const zo = Ko;
function Wo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Xo = 1 / 0, qt = re ? re.prototype : void 0, Nt = qt ? qt.toString : void 0;
function yr(e) {
  if (typeof e == "string")
    return e;
  if (M(e))
    return Wo(e, yr) + "";
  if (bt(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Xo ? "-0" : t;
}
function Jo(e) {
  return e == null ? "" : yr(e);
}
function $t(e, t) {
  return M(e) ? e : wt(e, t) ? [e] : zo(Jo(e));
}
var Yo = 1 / 0;
function De(e) {
  if (typeof e == "string" || bt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Yo ? "-0" : t;
}
function br(e, t, r) {
  t = $t(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var i = De(t[n]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && vt(a) && mt(i, a) && (M(e) || cr(e)));
}
function k(e, t) {
  return e != null && br(e, t, Ya);
}
function I(e, t, ...r) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...r) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, I), n;
}
var Ue = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ue || {}), te = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(te || {});
function L({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...a }) {
  var o;
  let i = Vo(n, r), l = Object.assign(a, { props: i });
  if (e || t & 2 && i.static)
    return Ve(l);
  if (t & 1) {
    let s = (o = i.unmount) == null || o ? 0 : 1;
    return I(s, { [0]() {
      return null;
    }, [1]() {
      return Ve({ ...a, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ve(l);
}
function Ve({ props: e, attrs: t, slots: r, slot: n, name: a }) {
  var o;
  let { as: i, ...l } = _r(e, ["unmount", "static"]), s = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (i === "template") {
    if (s = wr(s), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...p] = s != null ? s : [];
      if (!Qo(f) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).sort((d, g) => d.localeCompare(g)).map((d) => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)].join(`
`));
      return fn(f, Object.assign({}, l, u));
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return x(i, Object.assign({}, l, u), s);
}
function wr(e) {
  return e.flatMap((t) => t.type === ke ? wr(t.children) : [t]);
}
function Vo(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let a in n)
      a.startsWith("on") && typeof n[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(n[a])) : t[a] = n[a];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](a, ...o) {
      let i = r[n];
      for (let l of i) {
        if (a != null && a.defaultPrevented)
          return;
        l(a, ...o);
      }
    } });
  return t;
}
function _r(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Qo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Zo = 0;
function ei() {
  return ++Zo;
}
function de() {
  return ei();
}
var Sr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Sr || {});
function X(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $r = Symbol("Context");
var ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ue || {});
function ti() {
  return Ot() !== null;
}
function Ot() {
  return q($r, null);
}
function ri(e) {
  U($r, e);
}
function ge(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = X(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let tt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(xe || {}), Or = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Or || {}), ni = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ni || {});
function ai(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(tt));
}
var Tr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Tr || {});
function oi(e, t = 0) {
  var r;
  return e === ((r = ge(e)) == null ? void 0 : r.body) ? !1 : I(t, { [0]() {
    return e.matches(tt);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(tt))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Te(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ii = ["textarea", "input"].join(",");
function si(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ii)) != null ? r : !1;
}
function li(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let a = t(r), o = t(n);
    if (a === null || o === null)
      return 0;
    let i = a.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function rt(e, t, r = !0) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? li(e) : e : ai(e), i = a.activeElement, l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(i)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(i)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, f = 0, p = o.length, d;
  do {
    if (f >= p || f + p <= 0)
      return 0;
    let g = s + f;
    if (t & 16)
      g = (g + p) % p;
    else {
      if (g < 0)
        return 3;
      if (g >= p)
        return 1;
    }
    d = o[g], d == null || d.focus(u), f += l;
  } while (d !== a.activeElement);
  return d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), t & 6 && si(d) && d.select(), 2;
}
function nt(e, t, r) {
  typeof window < "u" && G((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function ui(e, t, r = O(() => !0)) {
  function n(a, o) {
    if (!r.value || a.defaultPrevented)
      return;
    let i = o(a);
    if (i === null || !i.ownerDocument.documentElement.contains(i))
      return;
    let l = function s(u) {
      return typeof u == "function" ? s(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let s of l) {
      if (s === null)
        continue;
      let u = s instanceof HTMLElement ? s : X(s);
      if (u != null && u.contains(i))
        return;
    }
    return !oi(i, Tr.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  nt("click", (a) => n(a, (o) => o.target), !0), nt("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ge = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ge || {});
let at = B({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...a } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return L({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var ot = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ot || {});
function ci() {
  let e = v(0);
  return nt("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Er(e, t, r, n) {
  typeof window < "u" && G((a) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), a(() => e.removeEventListener(t, r, n));
  });
}
var Ar = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ar || {});
let _e = Object.assign(B({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: v(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = v(null);
  n({ el: a, $el: a });
  let o = O(() => ge(a));
  fi({ ownerDocument: o }, O(() => Boolean(e.features & 16)));
  let i = di({ ownerDocument: o, container: a, initialFocus: O(() => e.initialFocus) }, O(() => Boolean(e.features & 2)));
  pi({ ownerDocument: o, container: a, containers: e.containers, previousActiveElement: i }, O(() => Boolean(e.features & 8)));
  let l = ci();
  function s() {
    let u = X(a);
    !u || I(l.value, { [ot.Forwards]: () => rt(u, xe.First), [ot.Backwards]: () => rt(u, xe.Last) });
  }
  return () => {
    let u = {}, f = { ref: a }, { features: p, initialFocus: d, containers: g, ...h } = e;
    return x(ke, [Boolean(p & 4) && x(at, { as: "button", type: "button", onFocus: s, features: Ge.Focusable }), L({ ourProps: f, theirProps: { ...t, ...h }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && x(at, { as: "button", type: "button", onFocus: s, features: Ge.Focusable })]);
  };
} }), { features: Ar });
function fi({ ownerDocument: e }, t) {
  let r = v(null), n = { value: !1 };
  R(() => {
    Ee(t, (a, o) => {
      var i;
      a !== o && (!t.value || (n.value = !0, r.value || (r.value = (i = e.value) == null ? void 0 : i.activeElement)));
    }, { immediate: !0 }), Ee(t, (a, o, i) => {
      a !== o && (!t.value || i(() => {
        n.value !== !1 && (n.value = !1, Te(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function di({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let a = v(null);
  return R(() => {
    Ee([t, r, n], (o, i) => {
      if (o.every((s, u) => (i == null ? void 0 : i[u]) === s) || !n.value)
        return;
      let l = X(t);
      !l || requestAnimationFrame(() => {
        var s, u;
        let f = X(r), p = (s = e.value) == null ? void 0 : s.activeElement;
        if (f) {
          if (f === p) {
            a.value = p;
            return;
          }
        } else if (l.contains(p)) {
          a.value = p;
          return;
        }
        f ? Te(f) : rt(l, xe.First | xe.NoScroll) === Or.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function pi({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, a) {
  var o;
  Er((o = e.value) == null ? void 0 : o.defaultView, "focus", (i) => {
    if (!a.value)
      return;
    let l = new Set(r == null ? void 0 : r.value);
    l.add(t);
    let s = n.value;
    if (!s)
      return;
    let u = i.target;
    u && u instanceof HTMLElement ? hi(l, u) ? (n.value = u, Te(u)) : (i.preventDefault(), i.stopPropagation(), Te(s)) : Te(n.value);
  }, !0);
}
function hi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Ht = "body > *", he = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map();
function kt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Ut(e) {
  let t = Z.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function mi(e, t = v(!0)) {
  G((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, a = ge(n);
    if (a) {
      he.add(n);
      for (let o of Z.keys())
        o.contains(n) && (Ut(o), Z.delete(o));
      a.querySelectorAll(Ht).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let i of he)
            if (o.contains(i))
              return;
          he.size === 1 && (Z.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), kt(o));
        }
      }), r(() => {
        if (he.delete(n), he.size > 0)
          a.querySelectorAll(Ht).forEach((o) => {
            if (o instanceof HTMLElement && !Z.has(o)) {
              for (let i of he)
                if (o.contains(i))
                  return;
              Z.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), kt(o);
            }
          });
        else
          for (let o of Z.keys())
            Ut(o), Z.delete(o);
      });
    }
  });
}
let Pr = Symbol("ForcePortalRootContext");
function vi() {
  return q(Pr, !1);
}
let it = B({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return U(Pr, e.force), () => {
    let { force: n, ...a } = e;
    return L({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function gi(e) {
  let t = ge(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let xr = B({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = v(null), a = O(() => ge(n)), o = vi(), i = q(Dr, null), l = v(o === !0 || i == null ? gi(n.value) : i.resolveTarget());
  return G(() => {
    o || i != null && (l.value = i.resolveTarget());
  }), ve(() => {
    var s, u;
    let f = (s = a.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    !f || l.value === f && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let s = { ref: n, "data-headlessui-portal": "" };
    return x(dn, { to: l.value }, L({ ourProps: s, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Dr = Symbol("PortalGroupContext"), yi = B({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = pn({ resolveTarget() {
    return e.target;
  } });
  return U(Dr, n), () => {
    let { target: a, ...o } = e;
    return L({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Fr = Symbol("StackContext");
var st = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(st || {});
function bi() {
  return q(Fr, () => {
  });
}
function wi({ type: e, element: t, onUpdate: r }) {
  let n = bi();
  function a(...o) {
    r == null || r(...o), n(...o);
  }
  R(() => {
    a(0, e, t), ve(() => {
      a(1, e, t);
    });
  }), U(Fr, a);
}
let Cr = Symbol("DescriptionContext");
function _i() {
  let e = q(Cr, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Si({ slot: e = v({}), name: t = "Description", props: r = {} } = {}) {
  let n = v([]);
  function a(o) {
    return n.value.push(o), () => {
      let i = n.value.indexOf(o);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return U(Cr, { register: a, slot: e, name: t, props: r }), O(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let gl = B({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = _i(), a = `headlessui-description-${de()}`;
  return R(() => ve(n.register(a))), () => {
    let { name: o = "Description", slot: i = v({}), props: l = {} } = n, s = e, u = { ...Object.entries(l).reduce((f, [p, d]) => Object.assign(f, { [p]: ee(d) }), {}), id: a };
    return L({ ourProps: u, theirProps: s, slot: i.value, attrs: t, slots: r, name: o });
  };
} });
var $i = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($i || {});
let lt = Symbol("DialogContext");
function Fe(e) {
  let t = q(lt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Fe), r;
  }
  return t;
}
let Me = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", jr = B({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Me }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  var o;
  let i = v(!1);
  R(() => {
    i.value = !0;
  });
  let l = v(0), s = Ot(), u = O(() => e.open === Me && s !== null ? I(s.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.open), f = v(/* @__PURE__ */ new Set()), p = v(null), d = v(null), g = O(() => ge(p));
  if (a({ el: p, $el: p }), !(e.open !== Me || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Me ? void 0 : e.open}`);
  let h = O(() => i.value && u.value ? 0 : 1), T = O(() => h.value === 0), E = O(() => l.value > 1), F = q(lt, null) !== null, A = O(() => E.value ? "parent" : "leaf");
  mi(p, O(() => E.value ? T.value : !1)), wi({ type: "Dialog", element: p, onUpdate: (_, b, S) => {
    if (b === "Dialog")
      return I(_, { [st.Add]() {
        f.value.add(S), l.value += 1;
      }, [st.Remove]() {
        f.value.delete(S), l.value -= 1;
      } });
  } });
  let K = Si({ name: "DialogDescription", slot: O(() => ({ open: u.value })) }), N = `headlessui-dialog-${de()}`, C = v(null), j = { titleId: C, panelRef: v(null), dialogState: h, setTitleId(_) {
    C.value !== _ && (C.value = _);
  }, close() {
    t("close", !1);
  } };
  return U(lt, j), ui(() => {
    var _, b, S;
    return [...Array.from((b = (_ = g.value) == null ? void 0 : _.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b : []).filter((y) => !(!(y instanceof HTMLElement) || y.contains(X(d)) || j.panelRef.value && y.contains(j.panelRef.value))), (S = j.panelRef.value) != null ? S : p.value];
  }, (_, b) => {
    j.close(), ir(() => b == null ? void 0 : b.focus());
  }, O(() => h.value === 0 && !E.value)), Er((o = g.value) == null ? void 0 : o.defaultView, "keydown", (_) => {
    _.defaultPrevented || _.key === Sr.Escape && h.value === 0 && (E.value || (_.preventDefault(), _.stopPropagation(), j.close()));
  }), G((_) => {
    var b;
    if (h.value !== 0 || F)
      return;
    let S = g.value;
    if (!S)
      return;
    let y = S == null ? void 0 : S.documentElement, P = (b = S.defaultView) != null ? b : window, Re = y.style.overflow, ye = y.style.paddingRight, pe = P.innerWidth - y.clientWidth;
    if (y.style.overflow = "hidden", pe > 0) {
      let Be = y.clientWidth - y.offsetWidth, Le = pe - Be;
      y.style.paddingRight = `${Le}px`;
    }
    _(() => {
      y.style.overflow = Re, y.style.paddingRight = ye;
    });
  }), G((_) => {
    if (h.value !== 0)
      return;
    let b = X(p);
    if (!b)
      return;
    let S = new IntersectionObserver((y) => {
      for (let P of y)
        P.boundingClientRect.x === 0 && P.boundingClientRect.y === 0 && P.boundingClientRect.width === 0 && P.boundingClientRect.height === 0 && j.close();
    });
    S.observe(b), _(() => S.disconnect());
  }), () => {
    let _ = { ...r, ref: p, id: N, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": C.value, "aria-describedby": K.value }, { open: b, initialFocus: S, ...y } = e, P = { open: h.value === 0 };
    return x(it, { force: !0 }, () => [x(xr, () => x(yi, { target: p.value }, () => x(it, { force: !1 }, () => x(_e, { initialFocus: S, containers: f, features: T.value ? I(A.value, { parent: _e.features.RestoreFocus, leaf: _e.features.All & ~_e.features.FocusLock }) : _e.features.None }, () => L({ ourProps: _, theirProps: y, slot: P, attrs: r, slots: n, visible: h.value === 0, features: Ue.RenderStrategy | Ue.Static, name: "Dialog" }))))), x(at, { features: Ge.Hidden, ref: d })]);
  };
} });
B({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = Fe("DialogOverlay"), a = `headlessui-dialog-overlay-${de()}`;
  function o(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), n.close());
  }
  return () => L({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
B({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Fe("DialogBackdrop"), o = `headlessui-dialog-backdrop-${de()}`, i = v(null);
  return n({ el: i, $el: i }), R(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let l = e, s = { id: o, ref: i, "aria-hidden": !0 };
    return x(it, { force: !0 }, () => x(xr, () => L({ ourProps: s, theirProps: { ...t, ...l }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Rr = B({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Fe("DialogPanel"), o = `headlessui-dialog-panel-${de()}`;
  n({ el: a.panelRef, $el: a.panelRef });
  function i(l) {
    l.stopPropagation();
  }
  return () => {
    let l = { id: o, ref: a.panelRef, onClick: i };
    return L({ ourProps: l, theirProps: e, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
B({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = Fe("DialogTitle"), a = `headlessui-dialog-title-${de()}`;
  return R(() => {
    n.setTitleId(a), ve(() => n.setTitleId(null));
  }), () => L({ ourProps: { id: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Oi(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Br() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, requestAnimationFrame(...n) {
    let a = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(a));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let a = setTimeout(...n);
    r.add(() => clearTimeout(a));
  }, add(n) {
    e.push(n);
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function Qe(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ut = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ut || {});
function Ti(e, t) {
  let r = Br();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [o, i] = [n, a].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, f) => f - u);
    return s;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + i) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Gt(e, t, r, n, a, o) {
  let i = Br(), l = o !== void 0 ? Oi(o) : () => {
  };
  return qe(e, ...a), Qe(e, ...t, ...r), i.nextFrame(() => {
    qe(e, ...r), Qe(e, ...n), i.add(Ti(e, (s) => (qe(e, ...n, ...t), Qe(e, ...a), l(s))));
  }), i.add(() => qe(e, ...t, ...r, ...n, ...a)), i.add(() => l("cancelled")), i.dispose;
}
function ie(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Tt = Symbol("TransitionContext");
var Ei = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ei || {});
function Ai() {
  return q(Tt, null) !== null;
}
function Pi() {
  let e = q(Tt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function xi() {
  let e = q(Et, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Et = Symbol("NestingContext");
function Xe(e) {
  return "children" in e ? Xe(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Lr(e) {
  let t = v([]), r = v(!1);
  R(() => r.value = !0), ve(() => r.value = !1);
  function n(o, i = te.Hidden) {
    let l = t.value.findIndex(({ id: s }) => s === o);
    l !== -1 && (I(i, { [te.Unmount]() {
      t.value.splice(l, 1);
    }, [te.Hidden]() {
      t.value[l].state = "hidden";
    } }), !Xe(t) && r.value && (e == null || e()));
  }
  function a(o) {
    let i = t.value.find(({ id: l }) => l === o);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, te.Unmount);
  }
  return { children: t, register: a, unregister: n };
}
let Ir = Ue.RenderStrategy, Ce = B({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  if (!Ai() && ti())
    return () => x(je, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = v(null), i = v("visible"), l = O(() => e.unmount ? te.Unmount : te.Hidden);
  a({ el: o, $el: o });
  let { show: s, appear: u } = Pi(), { register: f, unregister: p } = xi(), d = { value: !0 }, g = de(), h = { value: !1 }, T = Lr(() => {
    h.value || (i.value = "hidden", p(g), t("afterLeave"));
  });
  R(() => {
    let b = f(g);
    ve(b);
  }), G(() => {
    if (l.value === te.Hidden && !!g) {
      if (s && i.value !== "visible") {
        i.value = "visible";
        return;
      }
      I(i.value, { hidden: () => p(g), visible: () => f(g) });
    }
  });
  let E = ie(e.enter), F = ie(e.enterFrom), A = ie(e.enterTo), K = ie(e.entered), N = ie(e.leave), C = ie(e.leaveFrom), j = ie(e.leaveTo);
  R(() => {
    G(() => {
      if (i.value === "visible") {
        let b = X(o);
        if (b instanceof Comment && b.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function _(b) {
    let S = d.value && !u.value, y = X(o);
    !y || !(y instanceof HTMLElement) || S || (h.value = !0, s.value && t("beforeEnter"), s.value || t("beforeLeave"), b(s.value ? Gt(y, E, F, A, K, (P) => {
      h.value = !1, P === ut.Finished && t("afterEnter");
    }) : Gt(y, N, C, j, K, (P) => {
      h.value = !1, P === ut.Finished && (Xe(T) || (i.value = "hidden", p(g), t("afterLeave")));
    })));
  }
  return R(() => {
    Ee([s], (b, S, y) => {
      _(y), d.value = !1;
    }, { immediate: !0 });
  }), U(Et, T), ri(O(() => I(i.value, { visible: ue.Open, hidden: ue.Closed }))), () => {
    let { appear: b, show: S, enter: y, enterFrom: P, enterTo: Re, entered: ye, leave: pe, leaveFrom: Be, leaveTo: Le, ...oe } = e;
    return L({ theirProps: oe, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Ir, visible: i.value === "visible", name: "TransitionChild" });
  };
} }), Di = Ce, je = B({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let a = Ot(), o = O(() => e.show === null && a !== null ? I(a.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.show);
  G(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = v(o.value ? "visible" : "hidden"), l = Lr(() => {
    i.value = "hidden";
  }), s = v(!0), u = { show: o, appear: O(() => e.appear || !s.value) };
  return R(() => {
    G(() => {
      s.value = !1, o.value ? i.value = "visible" : Xe(l) || (i.value = "hidden");
    });
  }), U(Et, l), U(Tt, u), () => {
    let f = _r(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return L({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [x(Di, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...f }, n.default)] }, attrs: {}, features: Ir, visible: i.value === "visible", name: "Transition" });
  };
} });
const Fi = {
  props: {
    defaultTitle: {
      type: String,
      required: !1,
      default: ""
    },
    defaultText: {
      type: String,
      required: !1,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: !1,
      default: ""
    }
  },
  data() {
    return {
      isOpen: !1
    };
  },
  computed: {
    hasConfirmModal: () => !!m.confirmModal,
    title: function() {
      var e;
      return (e = m.confirmModal) != null && e.title ? m.confirmModal.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal) != null && e.text ? m.confirmModal.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal) != null && e.confirmButton ? m.confirmModal.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal) != null && e.cancelButton ? m.confirmModal.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      m.confirmModal.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      m.confirmModal.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      m.clearConfirmModal();
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      Dialog: jr,
      DialogPanel: Rr,
      TransitionRoot: je,
      TransitionChild: Ce
    });
  }
};
function Mr(e, t) {
  t = $t(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[De(t[r++])];
  return r && r == n ? e : void 0;
}
function At(e, t, r) {
  var n = e == null ? void 0 : Mr(e, t);
  return n === void 0 ? r : n;
}
var Ci = function() {
  try {
    var e = fe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Kt = Ci;
function qr(e, t, r) {
  t == "__proto__" && Kt ? Kt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ji = Object.prototype, Ri = ji.hasOwnProperty;
function Bi(e, t, r) {
  var n = e[t];
  (!(Ri.call(e, t) && _t(n, r)) || r === void 0 && !(t in e)) && qr(e, t, r);
}
function Li(e, t, r, n) {
  if (!me(e))
    return e;
  t = $t(t, e);
  for (var a = -1, o = t.length, i = o - 1, l = e; l != null && ++a < o; ) {
    var s = De(t[a]), u = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (a != i) {
      var f = l[s];
      u = n ? n(f, s, l) : void 0, u === void 0 && (u = me(f) ? f : mt(t[a + 1]) ? [] : {});
    }
    Bi(l, s, u), l = l[s];
  }
  return e;
}
function Nr(e, t, r) {
  return e == null ? e : Li(e, t, r);
}
const Ii = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    remember: {
      type: String,
      default: null,
      required: !1
    },
    localStorage: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  data() {
    return {
      values: {}
    };
  },
  mounted() {
    if (this.remember) {
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(new Proxy(this.values, {
      ownKeys() {
        return Object.keys(e.values);
      },
      get(t, r) {
        return At(e.values, r);
      },
      set(t, r, n) {
        Nr(e.values, r, n);
      }
    }));
  }
}, Mi = {
  props: {
    url: {
      type: String,
      required: !0
    },
    method: {
      type: String,
      required: !1,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: !1,
      default: "application/json"
    },
    poll: {
      type: Number,
      required: !1,
      default: null
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    request: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: !1
    };
  },
  mounted() {
    this.$nextTick(this.performRequest);
  },
  methods: {
    performRequest() {
      this.processing = !0;
      const e = {
        url: this.url,
        method: this.method,
        headers: {
          Accept: this.acceptHeader
        }
      };
      Object.keys(this.request).length > 0 && (e.data = this.request), or(e).then((t) => {
        this.response = t.data, this.processing = !1;
      }).catch(() => {
        this.processing = !1;
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
};
function Hr(e) {
  return e && e.length ? e[0] : void 0;
}
const qi = {
  inject: ["stack"],
  computed: {
    values() {
      return m.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return k(e.values, t);
      },
      first(t) {
        return Hr(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
};
function Ni(e, t) {
  return e && yt(e, gr(t));
}
const Hi = {
  props: {
    private: {
      type: Boolean,
      required: !1,
      default: !1
    },
    channel: {
      type: String,
      required: !0
    },
    listeners: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      subscribed: !1,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription.on("pusher:subscription_succeeded", () => {
      this.subscribed = !0;
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        const n = "splade.redirect", a = "splade.refresh", o = "splade.toast";
        let i = null, l = !1, s = [];
        Ni(r, (u) => {
          !me(u) || (n in u && (i = u[n]), a in u && (l = u[a]), o in u && s.push(u));
        }), i ? m.visit(i) : l ? m.refresh() : this.events.push({ name: e, data: r }), s.length > 0 && s.forEach((u) => {
          m.pushToast(u);
        }), this.$root.$emit(`event.${e}`, r);
      });
      this.subscriptions.push(t);
    });
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
}, ki = {
  inject: ["stack"],
  computed: {
    values() {
      return m.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return k(e.values, t);
      },
      ...this.values
    });
  }
};
function ct(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => ct(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => ct(t));
}
function kr(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Gr(t, Ur(null, r), e[r]);
  return t;
}
function Ur(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Gr(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Gr(e, Ur(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  kr(r);
}
var Ui = "[object Boolean]";
function Kr(e) {
  return e === !0 || e === !1 || ne(e) && ae(e) == Ui;
}
function Gi() {
  this.__data__ = new Y(), this.size = 0;
}
function Ki(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function zi(e) {
  return this.__data__.get(e);
}
function Wi(e) {
  return this.__data__.has(e);
}
var Xi = 200;
function Ji(e, t) {
  var r = this.__data__;
  if (r instanceof Y) {
    var n = r.__data__;
    if (!Pe || n.length < Xi - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new V(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function W(e) {
  var t = this.__data__ = new Y(e);
  this.size = t.size;
}
W.prototype.clear = Gi;
W.prototype.delete = Ki;
W.prototype.get = zi;
W.prototype.has = Wi;
W.prototype.set = Ji;
var Yi = "__lodash_hash_undefined__";
function Vi(e) {
  return this.__data__.set(e, Yi), this;
}
function Qi(e) {
  return this.__data__.has(e);
}
function Ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new V(); ++t < r; )
    this.add(e[t]);
}
Ke.prototype.add = Ke.prototype.push = Vi;
Ke.prototype.has = Qi;
function Zi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function es(e, t) {
  return e.has(t);
}
var ts = 1, rs = 2;
function zr(e, t, r, n, a, o) {
  var i = r & ts, l = e.length, s = t.length;
  if (l != s && !(i && s > l))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, d = !0, g = r & rs ? new Ke() : void 0;
  for (o.set(e, t), o.set(t, e); ++p < l; ) {
    var h = e[p], T = t[p];
    if (n)
      var E = i ? n(T, h, p, t, e, o) : n(h, T, p, e, t, o);
    if (E !== void 0) {
      if (E)
        continue;
      d = !1;
      break;
    }
    if (g) {
      if (!Zi(t, function(F, A) {
        if (!es(g, A) && (h === F || a(h, F, r, n, o)))
          return g.push(A);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === T || a(h, T, r, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
var ns = J.Uint8Array;
const zt = ns;
function as(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function os(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var is = 1, ss = 2, ls = "[object Boolean]", us = "[object Date]", cs = "[object Error]", fs = "[object Map]", ds = "[object Number]", ps = "[object RegExp]", hs = "[object Set]", ms = "[object String]", vs = "[object Symbol]", gs = "[object ArrayBuffer]", ys = "[object DataView]", Wt = re ? re.prototype : void 0, Ze = Wt ? Wt.valueOf : void 0;
function bs(e, t, r, n, a, o, i) {
  switch (r) {
    case ys:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case gs:
      return !(e.byteLength != t.byteLength || !o(new zt(e), new zt(t)));
    case ls:
    case us:
    case ds:
      return _t(+e, +t);
    case cs:
      return e.name == t.name && e.message == t.message;
    case ps:
    case ms:
      return e == t + "";
    case fs:
      var l = as;
    case hs:
      var s = n & is;
      if (l || (l = os), e.size != t.size && !s)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      n |= ss, i.set(e, t);
      var f = zr(l(e), l(t), n, a, o, i);
      return i.delete(e), f;
    case vs:
      if (Ze)
        return Ze.call(e) == Ze.call(t);
  }
  return !1;
}
function ws(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function _s(e, t, r) {
  var n = t(e);
  return M(e) ? n : ws(n, r(e));
}
function Ss(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (o[a++] = i);
  }
  return o;
}
function $s() {
  return [];
}
var Os = Object.prototype, Ts = Os.propertyIsEnumerable, Xt = Object.getOwnPropertySymbols, Es = Xt ? function(e) {
  return e == null ? [] : (e = Object(e), Ss(Xt(e), function(t) {
    return Ts.call(e, t);
  }));
} : $s;
const As = Es;
function Jt(e) {
  return _s(e, gt, As);
}
var Ps = 1, xs = Object.prototype, Ds = xs.hasOwnProperty;
function Fs(e, t, r, n, a, o) {
  var i = r & Ps, l = Jt(e), s = l.length, u = Jt(t), f = u.length;
  if (s != f && !i)
    return !1;
  for (var p = s; p--; ) {
    var d = l[p];
    if (!(i ? d in t : Ds.call(t, d)))
      return !1;
  }
  var g = o.get(e), h = o.get(t);
  if (g && h)
    return g == t && h == e;
  var T = !0;
  o.set(e, t), o.set(t, e);
  for (var E = i; ++p < s; ) {
    d = l[p];
    var F = e[d], A = t[d];
    if (n)
      var K = i ? n(A, F, d, t, e, o) : n(F, A, d, e, t, o);
    if (!(K === void 0 ? F === A || a(F, A, r, n, o) : K)) {
      T = !1;
      break;
    }
    E || (E = d == "constructor");
  }
  if (T && !E) {
    var N = e.constructor, C = t.constructor;
    N != C && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof C == "function" && C instanceof C) && (T = !1);
  }
  return o.delete(e), o.delete(t), T;
}
var Cs = fe(J, "DataView");
const ft = Cs;
var js = fe(J, "Promise");
const dt = js;
var Rs = fe(J, "Set");
const pt = Rs;
var Bs = fe(J, "WeakMap");
const ht = Bs;
var Yt = "[object Map]", Ls = "[object Object]", Vt = "[object Promise]", Qt = "[object Set]", Zt = "[object WeakMap]", er = "[object DataView]", Is = ce(ft), Ms = ce(Pe), qs = ce(dt), Ns = ce(pt), Hs = ce(ht), se = ae;
(ft && se(new ft(new ArrayBuffer(1))) != er || Pe && se(new Pe()) != Yt || dt && se(dt.resolve()) != Vt || pt && se(new pt()) != Qt || ht && se(new ht()) != Zt) && (se = function(e) {
  var t = ae(e), r = t == Ls ? e.constructor : void 0, n = r ? ce(r) : "";
  if (n)
    switch (n) {
      case Is:
        return er;
      case Ms:
        return Yt;
      case qs:
        return Vt;
      case Ns:
        return Qt;
      case Hs:
        return Zt;
    }
  return t;
});
const tr = se;
var ks = 1, rr = "[object Arguments]", nr = "[object Array]", Ne = "[object Object]", Us = Object.prototype, ar = Us.hasOwnProperty;
function Gs(e, t, r, n, a, o) {
  var i = M(e), l = M(t), s = i ? nr : tr(e), u = l ? nr : tr(t);
  s = s == rr ? Ne : s, u = u == rr ? Ne : u;
  var f = s == Ne, p = u == Ne, d = s == u;
  if (d && et(e)) {
    if (!et(t))
      return !1;
    i = !0, f = !1;
  }
  if (d && !f)
    return o || (o = new W()), i || pr(e) ? zr(e, t, r, n, a, o) : bs(e, t, s, r, n, a, o);
  if (!(r & ks)) {
    var g = f && ar.call(e, "__wrapped__"), h = p && ar.call(t, "__wrapped__");
    if (g || h) {
      var T = g ? e.value() : e, E = h ? t.value() : t;
      return o || (o = new W()), a(T, E, r, n, o);
    }
  }
  return d ? (o || (o = new W()), Fs(e, t, r, n, a, o)) : !1;
}
function Pt(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !ne(e) && !ne(t) ? e !== e && t !== t : Gs(e, t, r, n, Pt, a);
}
var Ks = 1, zs = 2;
function Ws(e, t, r, n) {
  var a = r.length, o = a, i = !n;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    l = r[a];
    var s = l[0], u = e[s], f = l[1];
    if (i && l[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var p = new W();
      if (n)
        var d = n(u, f, s, e, t, p);
      if (!(d === void 0 ? Pt(f, u, Ks | zs, n, p) : d))
        return !1;
    }
  }
  return !0;
}
function Wr(e) {
  return e === e && !me(e);
}
function Xs(e) {
  for (var t = gt(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Wr(a)];
  }
  return t;
}
function Xr(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Js(e) {
  var t = Xs(e);
  return t.length == 1 && t[0][2] ? Xr(t[0][0], t[0][1]) : function(r) {
    return r === e || Ws(r, e, t);
  };
}
function Ys(e, t) {
  return e != null && t in Object(e);
}
function Vs(e, t) {
  return e != null && br(e, t, Ys);
}
var Qs = 1, Zs = 2;
function el(e, t) {
  return wt(e) && Wr(t) ? Xr(De(e), t) : function(r) {
    var n = At(r, e);
    return n === void 0 && n === t ? Vs(r, e) : Pt(t, n, Qs | Zs);
  };
}
function tl(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function rl(e) {
  return function(t) {
    return Mr(t, e);
  };
}
function nl(e) {
  return wt(e) ? tl(De(e)) : rl(e);
}
function al(e) {
  return typeof e == "function" ? e : e == null ? vr : typeof e == "object" ? M(e) ? el(e[0], e[1]) : Js(e) : nl(e);
}
function Jr(e, t) {
  var r = {};
  return t = al(t), yt(e, function(n, a, o) {
    qr(r, a, t(n, a, o));
  }), r;
}
const ol = {
  inject: ["stack"],
  props: {
    action: {
      type: String,
      required: !1,
      default() {
        return location ? location.href : "";
      }
    },
    method: {
      type: String,
      required: !1,
      default: "POST"
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    forceFormData: {
      type: Boolean,
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirmText: {
      type: String,
      required: !1,
      default: ""
    },
    confirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    cancelButton: {
      type: String,
      required: !1,
      default: ""
    },
    restoreOnSuccess: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null
    };
  },
  computed: {
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return Jr(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return k(this.errors, e);
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    submit() {
      if (!this.confirm)
        return this.request();
      m.confirm(Kr(this.confirm) ? "" : this.confirm, this.confirmText, this.confirmButton, this.cancelButton).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    request() {
      this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.forceFormData || ct(this.values) ? kr(this.values) : this.values;
      m.request(this.action, this.method.toUpperCase(), e, {
        Accept: "application/json"
      }).then((t) => {
        this.$emit("success", t), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch((t) => {
        this.processing = !1, this.$emit("error", t);
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(new Proxy({}, {
      ownKeys() {
        return Object.keys(e.values);
      },
      get(t, r) {
        return [
          "errors",
          "restore",
          "reset",
          "hasError",
          "processing",
          "rawErrors",
          "submit",
          "wasSuccessful",
          "recentlySuccessful"
        ].includes(r) ? e[r] : At(e.values, r);
      },
      set(t, r, n) {
        Nr(e.values, r, n);
      }
    }));
  }
}, il = ["href", "onClick"], sl = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !0
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirmText: {
      type: String,
      required: !1,
      default: ""
    },
    confirmButton: {
      type: String,
      required: !1,
      default: ""
    },
    cancelButton: {
      type: String,
      required: !1,
      default: ""
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    slideover: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(Kr(t.confirm) ? "" : t.confirm, t.confirmText, t.confirmButton, t.cancelButton).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      m.visit(t.href);
    }
    return (a, o) => (z(), He("a", {
      href: e.href,
      onClick: hn(r, ["prevent"])
    }, [
      mn(a.$slots, "default")
    ], 8, il));
  }
}, ll = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    type: {
      type: String,
      required: !0
    },
    stack: {
      type: Number,
      required: !0
    },
    onTopOfStack: {
      type: Boolean,
      required: !0
    },
    maxWidth: {
      type: String,
      required: !1,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    }
  },
  emits: ["close"],
  data() {
    return {
      isOpen: !1
    };
  },
  mounted() {
    this.setIsOpen(!0);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      Dialog: jr,
      DialogPanel: Rr,
      TransitionRoot: je,
      TransitionChild: Ce
    });
  }
}, ul = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData, n = Jr(e, (a) => a.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(a) {
        return k(e, a);
      },
      hasFlash(a) {
        return k(t, a);
      },
      hasShared(a) {
        return k(r, a);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
}, cl = {
  props: {
    toastKey: {
      type: Number,
      required: !0
    },
    autoDismiss: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: !0
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(!1);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: je,
      TransitionChild: Ce
    });
  }
}, fl = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], dl = {
  computed: {
    toasts: function() {
      return m.toastsReversed;
    },
    hasBackdrop: function() {
      return m.toasts.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: fl,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: Oe,
      TransitionRoot: je,
      TransitionChild: Ce
    });
  }
}, pl = {
  props: {
    default: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : !1;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(new Proxy({}, {
      ownKeys() {
        return Object.keys(e.toggles);
      },
      get(t, r) {
        const n = Object.keys(e.toggles);
        if (n.length === 1 && Hr(n) === "default") {
          if (r === "toggled")
            return e.toggled("default");
          if (r === "setToggle")
            return (a) => {
              e.setToggle("default", a);
            };
          if (r === "toggle")
            return () => {
              e.toggle("default");
            };
        }
        return r === "setToggle" ? (a, o) => {
          e.setToggle(a, o);
        } : r === "toggle" ? (a) => {
          e.toggle(a);
        } : e.toggled(r);
      }
    }));
  }
}, yl = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = k(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = k(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = k(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = k(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}Confirm`, Fi).component(`${r}Data`, Ii).component(`${r}Defer`, Mi).component(`${r}Errors`, qi).component(`${r}Event`, Hi).component(`${r}Flash`, ki).component(`${r}Form`, ol).component(`${r}Modal`, ll).component(`${r}Render`, Oe).component(`${r}State`, ul).component(`${r}Toast`, cl).component(`${r}Toasts`, dl).component(`${r}Toggle`, pl).component(t.link_component, sl), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
export {
  m as Splade,
  yl as SpladePlugin,
  vl as renderSpladeApp
};
