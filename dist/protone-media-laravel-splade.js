import ar from "axios";
import { ref as h, computed as w, watch as Se, openBlock as N, createBlock as ge, unref as X, h as $, onMounted as P, createElementBlock as je, createElementVNode as sn, provide as L, inject as B, nextTick as ir, resolveDynamicComponent as ln, withCtx as un, normalizeClass as cn, createVNode as fn, Fragment as ut, renderList as dn, createCommentVNode as pn, cloneVNode as hn, watchEffect as M, defineComponent as A, onUnmounted as pe, Teleport as vn, reactive as mn, withModifiers as gn, renderSlot as yn } from "vue";
function bn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function wn(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var s = o[e ? l : ++a];
      if (r(i[s], s, i) === !1)
        break;
    }
    return t;
  };
}
var Sn = wn();
const _n = Sn;
function On(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var $n = typeof global == "object" && global && global.Object === Object && global;
const or = $n;
var Tn = typeof self == "object" && self && self.Object === Object && self, En = or || Tn || Function("return this")();
const G = En;
var Pn = G.Symbol;
const Q = Pn;
var sr = Object.prototype, An = sr.hasOwnProperty, xn = sr.toString, ve = Q ? Q.toStringTag : void 0;
function Dn(e) {
  var t = An.call(e, ve), r = e[ve];
  try {
    e[ve] = void 0;
    var n = !0;
  } catch {
  }
  var a = xn.call(e);
  return n && (t ? e[ve] = r : delete e[ve]), a;
}
var Cn = Object.prototype, Fn = Cn.toString;
function jn(e) {
  return Fn.call(e);
}
var Rn = "[object Null]", Bn = "[object Undefined]", Ct = Q ? Q.toStringTag : void 0;
function ee(e) {
  return e == null ? e === void 0 ? Bn : Rn : Ct && Ct in Object(e) ? Dn(e) : jn(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var In = "[object Arguments]";
function Ft(e) {
  return Z(e) && ee(e) == In;
}
var lr = Object.prototype, Ln = lr.hasOwnProperty, Mn = lr.propertyIsEnumerable, qn = Ft(function() {
  return arguments;
}()) ? Ft : function(e) {
  return Z(e) && Ln.call(e, "callee") && !Mn.call(e, "callee");
};
const ur = qn;
var Nn = Array.isArray;
const R = Nn;
function Hn() {
  return !1;
}
var cr = typeof exports == "object" && exports && !exports.nodeType && exports, jt = cr && typeof module == "object" && module && !module.nodeType && module, kn = jt && jt.exports === cr, Rt = kn ? G.Buffer : void 0, Un = Rt ? Rt.isBuffer : void 0, Gn = Un || Hn;
const We = Gn;
var Kn = 9007199254740991, zn = /^(?:0|[1-9]\d*)$/;
function ct(e, t) {
  var r = typeof e;
  return t = t == null ? Kn : t, !!t && (r == "number" || r != "symbol" && zn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Wn = 9007199254740991;
function ft(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wn;
}
var Jn = "[object Arguments]", Xn = "[object Array]", Yn = "[object Boolean]", Vn = "[object Date]", Qn = "[object Error]", Zn = "[object Function]", ea = "[object Map]", ta = "[object Number]", ra = "[object Object]", na = "[object RegExp]", aa = "[object Set]", ia = "[object String]", oa = "[object WeakMap]", sa = "[object ArrayBuffer]", la = "[object DataView]", ua = "[object Float32Array]", ca = "[object Float64Array]", fa = "[object Int8Array]", da = "[object Int16Array]", pa = "[object Int32Array]", ha = "[object Uint8Array]", va = "[object Uint8ClampedArray]", ma = "[object Uint16Array]", ga = "[object Uint32Array]", y = {};
y[ua] = y[ca] = y[fa] = y[da] = y[pa] = y[ha] = y[va] = y[ma] = y[ga] = !0;
y[Jn] = y[Xn] = y[sa] = y[Yn] = y[la] = y[Vn] = y[Qn] = y[Zn] = y[ea] = y[ta] = y[ra] = y[na] = y[aa] = y[ia] = y[oa] = !1;
function ya(e) {
  return Z(e) && ft(e.length) && !!y[ee(e)];
}
function ba(e) {
  return function(t) {
    return e(t);
  };
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, ye = fr && typeof module == "object" && module && !module.nodeType && module, wa = ye && ye.exports === fr, He = wa && or.process, Sa = function() {
  try {
    var e = ye && ye.require && ye.require("util").types;
    return e || He && He.binding && He.binding("util");
  } catch {
  }
}();
const Bt = Sa;
var It = Bt && Bt.isTypedArray, _a = It ? ba(It) : ya;
const dr = _a;
var Oa = Object.prototype, $a = Oa.hasOwnProperty;
function Ta(e, t) {
  var r = R(e), n = !r && ur(e), a = !r && !n && We(e), i = !r && !n && !a && dr(e), o = r || n || a || i, l = o ? On(e.length, String) : [], s = l.length;
  for (var u in e)
    (t || $a.call(e, u)) && !(o && (u == "length" || a && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ct(u, s))) && l.push(u);
  return l;
}
var Ea = Object.prototype;
function Pa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ea;
  return e === r;
}
function Aa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var xa = Aa(Object.keys, Object);
const Da = xa;
var Ca = Object.prototype, Fa = Ca.hasOwnProperty;
function ja(e) {
  if (!Pa(e))
    return Da(e);
  var t = [];
  for (var r in Object(e))
    Fa.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ce(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ra = "[object AsyncFunction]", Ba = "[object Function]", Ia = "[object GeneratorFunction]", La = "[object Proxy]";
function pr(e) {
  if (!ce(e))
    return !1;
  var t = ee(e);
  return t == Ba || t == Ia || t == Ra || t == La;
}
function hr(e) {
  return e != null && ft(e.length) && !pr(e);
}
function dt(e) {
  return hr(e) ? Ta(e) : ja(e);
}
function pt(e, t) {
  return e && _n(e, t, dt);
}
function Ma(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!hr(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var qa = Ma(pt);
const Na = qa;
function vr(e) {
  return e;
}
function mr(e) {
  return typeof e == "function" ? e : vr;
}
function Ha(e, t) {
  var r = R(e) ? bn : Na;
  return r(e, mr(t));
}
var ka = Array.prototype, Ua = ka.reverse;
function Ga(e) {
  return e == null ? e : Ua.call(e);
}
const Je = h(1), fe = typeof window > "u";
function Ka(e, t) {
  fe || window.addEventListener("popstate", za.bind(this)), vt(t), mt(e);
  const r = fe ? "" : location.href, n = gr(r, e, {}, Je.value);
  Ja(n);
}
function za(e) {
  H.value = e.state, V.value = 0, mt(H.value.html, H.value.rememberedState.scrollY);
}
function gr(e, t, r, n) {
  const a = {
    url: e,
    html: t,
    rememberedState: r,
    pageVisitId: n
  };
  return H.value = a, a;
}
function Wa(e) {
  fe || window.history.pushState(e, "", e.url);
}
function Ja(e) {
  fe || window.history.replaceState(e, "", e.url);
}
const H = h({});
function Xa(e) {
  const t = e.request.responseURL;
  if (e.data.splade.modal && V.value++, vt(e.data.splade), e.data.splade.modal)
    return ii(e.data.html, e.data.splade.modal);
  (t !== H.value.url || e.data.splade.refresh || V.value > 0) && (V.value = 0, Je.value++, mt(e.data.html, 0));
  const r = gr(t, e.data.html, H.value.rememberedState ? { ...H.value.rememberedState } : {}, Je.value);
  Wa(r);
}
const V = h(0);
function Ya() {
  V.value--;
}
const yr = h({}), br = h({}), wr = (e) => br.value[e], Va = (e) => Object.keys(wr.value[e]).length > 0, Sr = h({}), Qa = (e) => Sr.value[e], de = h([]), Za = w(() => Ga(de.value));
function ei(e) {
  de.value.push(e);
}
function ti(e) {
  de.value[e].dismissed = !0, de.value[e].html = null;
}
const ht = h(null);
function ri(e, t, r, n) {
  let a, i;
  const o = new Promise((l, s) => {
    a = l, i = s;
  });
  return ht.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: a,
    rejectPromise: i
  }, o;
}
function ni() {
  ht.value = null;
}
function vt(e) {
  yr.value = e.shared ? e.shared : {}, Sr.value[V.value] = e.flash ? e.flash : {}, Ha(e.toasts ? e.toasts : [], (t) => {
    de.value.push(t);
  }), br.value[V.value] = e.errors ? e.errors : {};
}
function ai(e) {
  Er.value(e);
}
function mt(e, t) {
  $r.value(e, t);
}
function ii(e, t) {
  Tr.value(e, t);
}
const _r = h({});
function Or(e, t, r) {
  _r.value[e] = t, r && oi(e, t);
}
function oi(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function si(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : _r.value[e];
}
function Te(e, t, r, n) {
  fe || Or("scrollY", window.scrollY);
  const a = ar({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    }
  });
  return a.then((i) => {
    Xa(i);
  }).catch((i) => {
    console.log(i);
    const o = i.response.data.splade;
    o && vt(o), i.response.status != 422 && ai(i.response.data.html ? i.response.data.html : i.response.data);
  }), a;
}
function li(e) {
  Te(e, "GET", {}, {});
}
function ui(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "modal" });
}
function ci(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "slideover" });
}
function fi() {
  Te(H.value.url, "GET", {}, { "X-Splade-Refresh": !0 });
}
const $r = h(() => {
}), Tr = h(() => {
}), Er = h(() => {
}), d = {
  init: Ka,
  visit: li,
  modal: ui,
  slideover: ci,
  refresh: fi,
  request: Te,
  setOnHtml(e) {
    $r.value = e;
  },
  setOnModal(e) {
    Tr.value = e;
  },
  setOnServerError(e) {
    Er.value = e;
  },
  hasValidationErrors: Va,
  validationErrors: wr,
  sharedData: yr,
  flashData: Qa,
  toasts: de,
  toastsReversed: Za,
  confirmModal: ht,
  confirm: ri,
  clearConfirmModal: ni,
  pushToast: ei,
  dismissToast: ti,
  restore: si,
  remember: Or,
  popStack: Ya,
  currentStack: V,
  pageVisitId: w(() => H.value.pageVisitId),
  isSsr: fe
};
var di = "[object String]";
function ke(e) {
  return typeof e == "string" || !R(e) && Z(e) && ee(e) == di;
}
const be = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = h(null);
    function n() {
      r.value = $({
        template: t.html
      });
    }
    return Se(() => t.html, n, { immediate: !0 }), (a, i) => (N(), ge(X(r)));
  }
}, pi = {
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
      document.body.style.overflow = "visible", document.removeEventListener("keydown", o), t("close");
    }
    const a = h(null);
    function i() {
      const l = document.createElement("html");
      l.innerHTML = r.html, l.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const s = a.value;
      if (!s.contentWindow)
        throw new Error("iframe not yet ready.");
      s.contentWindow.document.open(), s.contentWindow.document.write(l.outerHTML), s.contentWindow.document.close(), document.addEventListener("keydown", o);
    }
    function o(l) {
      l.keyCode === 27 && n();
    }
    return P(() => i()), (l, s) => (N(), je("div", {
      class: "w-screen h-screen fixed p-8 bg-black bg-opacity-75 inset-0 z-[200000] box-border",
      onClick: n
    }, [
      sn("iframe", {
        ref_key: "iframeElement",
        ref: a,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, hi = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: !1,
      default: ""
    },
    components: {
      type: String,
      required: !1,
      default: (e) => {
        if (!d.isSsr) {
          const t = ke(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!d.isSsr) {
          const t = ke(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!d.isSsr) {
          const t = ke(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    L("stack", 0);
    const r = h(), n = h([]), a = h(null);
    function i() {
      a.value = null;
    }
    function o(s) {
      n[s] = null, d.popStack();
    }
    const l = B("$spladeOptions") || {};
    return d.setOnHtml((s, u) => {
      n.value = [], r.value = s, ir(() => {
        d.isSsr || window.scrollTo(0, u), l.transform_anchors && [...document.querySelectorAll("a")].forEach((c) => {
          c.href == "" || c.href.charAt(0) == "#" || c.__vnode.dynamicProps === null && (c.hasAttribute("download") || (c.onclick = function(f) {
            f.preventDefault(), d.visit(c.href);
          }));
        });
      });
    }), d.setOnModal(function(s, u) {
      n.value[d.currentStack.value] = { html: s, type: u };
    }), d.setOnServerError(function(s) {
      a.value = s;
    }), d.init(t.initialHtml, t.initialSpladeData), (s, u) => (N(), je("div", null, [
      (N(), ge(ln(X(d).isSsr ? "div" : "keep-alive"), {
        max: X(l).max_keep_alive
      }, {
        default: un(() => [
          (N(), ge(be, {
            key: `visit.${X(d).pageVisitId.value}`,
            class: cn({
              "transition ease-in-out blur-sm": X(d).currentStack > 0
            }),
            html: r.value
          }, null, 8, ["class", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      fn(be, { html: e.components }, null, 8, ["html"]),
      (N(!0), je(ut, null, dn(X(d).currentStack.value, (c) => (N(), ge(be, {
        key: `modal.${c}`,
        type: n.value[c].type,
        html: n.value[c].html,
        stack: c,
        "on-top-of-stack": X(d).currentStack.value === c,
        onClose: (f) => o(c)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      a.value ? (N(), ge(pi, {
        key: 0,
        html: a.value,
        onClose: i
      }, null, 8, ["html"])) : pn("", !0)
    ]));
  }
};
function Ll(e) {
  return () => $(hi, e);
}
var vi = Object.prototype, mi = vi.hasOwnProperty;
function gi(e, t) {
  return e != null && mi.call(e, t);
}
var yi = "[object Symbol]";
function gt(e) {
  return typeof e == "symbol" || Z(e) && ee(e) == yi;
}
var bi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wi = /^\w*$/;
function yt(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gt(e) ? !0 : wi.test(e) || !bi.test(e) || t != null && e in Object(t);
}
var Si = G["__core-js_shared__"];
const Ue = Si;
var Lt = function() {
  var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _i(e) {
  return !!Lt && Lt in e;
}
var Oi = Function.prototype, $i = Oi.toString;
function oe(e) {
  if (e != null) {
    try {
      return $i.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ti = /[\\^$.*+?()[\]{}|]/g, Ei = /^\[object .+?Constructor\]$/, Pi = Function.prototype, Ai = Object.prototype, xi = Pi.toString, Di = Ai.hasOwnProperty, Ci = RegExp("^" + xi.call(Di).replace(Ti, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Fi(e) {
  if (!ce(e) || _i(e))
    return !1;
  var t = pr(e) ? Ci : Ei;
  return t.test(oe(e));
}
function ji(e, t) {
  return e == null ? void 0 : e[t];
}
function se(e, t) {
  var r = ji(e, t);
  return Fi(r) ? r : void 0;
}
var Ri = se(Object, "create");
const _e = Ri;
function Bi() {
  this.__data__ = _e ? _e(null) : {}, this.size = 0;
}
function Ii(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Li = "__lodash_hash_undefined__", Mi = Object.prototype, qi = Mi.hasOwnProperty;
function Ni(e) {
  var t = this.__data__;
  if (_e) {
    var r = t[e];
    return r === Li ? void 0 : r;
  }
  return qi.call(t, e) ? t[e] : void 0;
}
var Hi = Object.prototype, ki = Hi.hasOwnProperty;
function Ui(e) {
  var t = this.__data__;
  return _e ? t[e] !== void 0 : ki.call(t, e);
}
var Gi = "__lodash_hash_undefined__";
function Ki(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _e && t === void 0 ? Gi : t, this;
}
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ae.prototype.clear = Bi;
ae.prototype.delete = Ii;
ae.prototype.get = Ni;
ae.prototype.has = Ui;
ae.prototype.set = Ki;
function zi() {
  this.__data__ = [], this.size = 0;
}
function bt(e, t) {
  return e === t || e !== e && t !== t;
}
function Le(e, t) {
  for (var r = e.length; r--; )
    if (bt(e[r][0], t))
      return r;
  return -1;
}
var Wi = Array.prototype, Ji = Wi.splice;
function Xi(e) {
  var t = this.__data__, r = Le(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ji.call(t, r, 1), --this.size, !0;
}
function Yi(e) {
  var t = this.__data__, r = Le(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Vi(e) {
  return Le(this.__data__, e) > -1;
}
function Qi(e, t) {
  var r = this.__data__, n = Le(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function K(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
K.prototype.clear = zi;
K.prototype.delete = Xi;
K.prototype.get = Yi;
K.prototype.has = Vi;
K.prototype.set = Qi;
var Zi = se(G, "Map");
const Oe = Zi;
function eo() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new (Oe || K)(),
    string: new ae()
  };
}
function to(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Me(e, t) {
  var r = e.__data__;
  return to(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ro(e) {
  var t = Me(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function no(e) {
  return Me(this, e).get(e);
}
function ao(e) {
  return Me(this, e).has(e);
}
function io(e, t) {
  var r = Me(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = eo;
z.prototype.delete = ro;
z.prototype.get = no;
z.prototype.has = ao;
z.prototype.set = io;
var oo = "Expected a function";
function wt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(oo);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (wt.Cache || z)(), r;
}
wt.Cache = z;
var so = 500;
function lo(e) {
  var t = wt(e, function(n) {
    return r.size === so && r.clear(), n;
  }), r = t.cache;
  return t;
}
var uo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, co = /\\(\\)?/g, fo = lo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(uo, function(r, n, a, i) {
    t.push(a ? i.replace(co, "$1") : n || r);
  }), t;
});
const po = fo;
function ho(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var vo = 1 / 0, Mt = Q ? Q.prototype : void 0, qt = Mt ? Mt.toString : void 0;
function Pr(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return ho(e, Pr) + "";
  if (gt(e))
    return qt ? qt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -vo ? "-0" : t;
}
function mo(e) {
  return e == null ? "" : Pr(e);
}
function St(e, t) {
  return R(e) ? e : yt(e, t) ? [e] : po(mo(e));
}
var go = 1 / 0;
function Ee(e) {
  if (typeof e == "string" || gt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -go ? "-0" : t;
}
function Ar(e, t, r) {
  t = St(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = Ee(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && ft(a) && ct(o, a) && (R(e) || ur(e)));
}
function I(e, t) {
  return e != null && Ar(e, t, gi);
}
function j(e, t, ...r) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...r) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, j), n;
}
var Re = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Re || {}), Y = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Y || {});
function x({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...a }) {
  var i;
  let o = yo(n, r), l = Object.assign(a, { props: o });
  if (e || t & 2 && o.static)
    return Ge(l);
  if (t & 1) {
    let s = (i = o.unmount) == null || i ? 0 : 1;
    return j(s, { [0]() {
      return null;
    }, [1]() {
      return Ge({ ...a, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ge(l);
}
function Ge({ props: e, attrs: t, slots: r, slot: n, name: a }) {
  var i;
  let { as: o, ...l } = Dr(e, ["unmount", "static"]), s = (i = r.default) == null ? void 0 : i.call(r, n), u = {};
  if (o === "template") {
    if (s = xr(s), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = s != null ? s : [];
      if (!bo(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).sort((p, v) => p.localeCompare(v)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return hn(c, Object.assign({}, l, u));
    }
    return Array.isArray(s) && s.length === 1 ? s[0] : s;
  }
  return $(o, Object.assign({}, l, u), s);
}
function xr(e) {
  return e.flatMap((t) => t.type === ut ? xr(t.children) : [t]);
}
function yo(...e) {
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
    Object.assign(t, { [n](a, ...i) {
      let o = r[n];
      for (let l of o) {
        if (a != null && a.defaultPrevented)
          return;
        l(a, ...i);
      }
    } });
  return t;
}
function Dr(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function bo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let wo = 0;
function So() {
  return ++wo;
}
function le() {
  return So();
}
var Cr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Cr || {});
function U(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Fr = Symbol("Context");
var ie = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ie || {});
function _o() {
  return _t() !== null;
}
function _t() {
  return B(Fr, null);
}
function Oo(e) {
  L(Fr, e);
}
function he(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = U(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Xe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var $e = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))($e || {}), jr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(jr || {}), $o = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))($o || {});
function To(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Xe));
}
var Rr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rr || {});
function Eo(e, t = 0) {
  var r;
  return e === ((r = he(e)) == null ? void 0 : r.body) ? !1 : j(t, { [0]() {
    return e.matches(Xe);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Xe))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Po = ["textarea", "input"].join(",");
function Ao(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Po)) != null ? r : !1;
}
function xo(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let a = t(r), i = t(n);
    if (a === null || i === null)
      return 0;
    let o = a.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ye(e, t, r = !0) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? r ? xo(e) : e : To(e), o = a.activeElement, l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = i.length, p;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let v = s + c;
    if (t & 16)
      v = (v + f) % f;
    else {
      if (v < 0)
        return 3;
      if (v >= f)
        return 1;
    }
    p = i[v], p == null || p.focus(u), c += l;
  } while (p !== a.activeElement);
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Ao(p) && p.select(), 2;
}
function Ve(e, t, r) {
  typeof window < "u" && M((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Do(e, t, r = w(() => !0)) {
  function n(a, i) {
    if (!r.value || a.defaultPrevented)
      return;
    let o = i(a);
    if (o === null || !o.ownerDocument.documentElement.contains(o))
      return;
    let l = function s(u) {
      return typeof u == "function" ? s(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let s of l) {
      if (s === null)
        continue;
      let u = s instanceof HTMLElement ? s : U(s);
      if (u != null && u.contains(o))
        return;
    }
    return !Eo(o, Rr.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  Ve("click", (a) => n(a, (i) => i.target), !0), Ve("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Be || {});
let Qe = A({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...a } = e, i = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return x({ ourProps: i, theirProps: a, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var Ze = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ze || {});
function Co() {
  let e = h(0);
  return Ve("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Br(e, t, r, n) {
  typeof window < "u" && M((a) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), a(() => e.removeEventListener(t, r, n));
  });
}
var Ir = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ir || {});
let me = Object.assign(A({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: h(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = h(null);
  n({ el: a, $el: a });
  let i = w(() => he(a));
  Fo({ ownerDocument: i }, w(() => Boolean(e.features & 16)));
  let o = jo({ ownerDocument: i, container: a, initialFocus: w(() => e.initialFocus) }, w(() => Boolean(e.features & 2)));
  Ro({ ownerDocument: i, container: a, containers: e.containers, previousActiveElement: o }, w(() => Boolean(e.features & 8)));
  let l = Co();
  function s() {
    let u = U(a);
    !u || j(l.value, { [Ze.Forwards]: () => Ye(u, $e.First), [Ze.Backwards]: () => Ye(u, $e.Last) });
  }
  return () => {
    let u = {}, c = { ref: a }, { features: f, initialFocus: p, containers: v, ...m } = e;
    return $(ut, [Boolean(f & 4) && $(Qe, { as: "button", type: "button", onFocus: s, features: Be.Focusable }), x({ ourProps: c, theirProps: { ...t, ...m }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && $(Qe, { as: "button", type: "button", onFocus: s, features: Be.Focusable })]);
  };
} }), { features: Ir });
function Fo({ ownerDocument: e }, t) {
  let r = h(null), n = { value: !1 };
  P(() => {
    Se(t, (a, i) => {
      var o;
      a !== i && (!t.value || (n.value = !0, r.value || (r.value = (o = e.value) == null ? void 0 : o.activeElement)));
    }, { immediate: !0 }), Se(t, (a, i, o) => {
      a !== i && (!t.value || o(() => {
        n.value !== !1 && (n.value = !1, we(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function jo({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let a = h(null);
  return P(() => {
    Se([t, r, n], (i, o) => {
      if (i.every((s, u) => (o == null ? void 0 : o[u]) === s) || !n.value)
        return;
      let l = U(t);
      !l || requestAnimationFrame(() => {
        var s, u;
        let c = U(r), f = (s = e.value) == null ? void 0 : s.activeElement;
        if (c) {
          if (c === f) {
            a.value = f;
            return;
          }
        } else if (l.contains(f)) {
          a.value = f;
          return;
        }
        c ? we(c) : Ye(l, $e.First | $e.NoScroll) === jr.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function Ro({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, a) {
  var i;
  Br((i = e.value) == null ? void 0 : i.defaultView, "focus", (o) => {
    if (!a.value)
      return;
    let l = new Set(r == null ? void 0 : r.value);
    l.add(t);
    let s = n.value;
    if (!s)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Bo(l, u) ? (n.value = u, we(u)) : (o.preventDefault(), o.stopPropagation(), we(s)) : we(n.value);
  }, !0);
}
function Bo(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Nt = "body > *", ue = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map();
function Ht(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function kt(e) {
  let t = J.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Io(e, t = h(!0)) {
  M((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, a = he(n);
    if (a) {
      ue.add(n);
      for (let i of J.keys())
        i.contains(n) && (kt(i), J.delete(i));
      a.querySelectorAll(Nt).forEach((i) => {
        if (i instanceof HTMLElement) {
          for (let o of ue)
            if (i.contains(o))
              return;
          ue.size === 1 && (J.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), Ht(i));
        }
      }), r(() => {
        if (ue.delete(n), ue.size > 0)
          a.querySelectorAll(Nt).forEach((i) => {
            if (i instanceof HTMLElement && !J.has(i)) {
              for (let o of ue)
                if (i.contains(o))
                  return;
              J.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), Ht(i);
            }
          });
        else
          for (let i of J.keys())
            kt(i), J.delete(i);
      });
    }
  });
}
let Lr = Symbol("ForcePortalRootContext");
function Lo() {
  return B(Lr, !1);
}
let et = A({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return L(Lr, e.force), () => {
    let { force: n, ...a } = e;
    return x({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Mo(e) {
  let t = he(e);
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
let Mr = A({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = h(null), a = w(() => he(n)), i = Lo(), o = B(qr, null), l = h(i === !0 || o == null ? Mo(n.value) : o.resolveTarget());
  return M(() => {
    i || o != null && (l.value = o.resolveTarget());
  }), pe(() => {
    var s, u;
    let c = (s = a.value) == null ? void 0 : s.getElementById("headlessui-portal-root");
    !c || l.value === c && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let s = { ref: n, "data-headlessui-portal": "" };
    return $(vn, { to: l.value }, x({ ourProps: s, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), qr = Symbol("PortalGroupContext"), qo = A({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = mn({ resolveTarget() {
    return e.target;
  } });
  return L(qr, n), () => {
    let { target: a, ...i } = e;
    return x({ theirProps: i, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Nr = Symbol("StackContext");
var tt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(tt || {});
function No() {
  return B(Nr, () => {
  });
}
function Ho({ type: e, element: t, onUpdate: r }) {
  let n = No();
  function a(...i) {
    r == null || r(...i), n(...i);
  }
  P(() => {
    a(0, e, t), pe(() => {
      a(1, e, t);
    });
  }), L(Nr, a);
}
let Hr = Symbol("DescriptionContext");
function ko() {
  let e = B(Hr, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Uo({ slot: e = h({}), name: t = "Description", props: r = {} } = {}) {
  let n = h([]);
  function a(i) {
    return n.value.push(i), () => {
      let o = n.value.indexOf(i);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return L(Hr, { register: a, slot: e, name: t, props: r }), w(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Ml = A({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = ko(), a = `headlessui-description-${le()}`;
  return P(() => pe(n.register(a))), () => {
    let { name: i = "Description", slot: o = h({}), props: l = {} } = n, s = e, u = { ...Object.entries(l).reduce((c, [f, p]) => Object.assign(c, { [f]: X(p) }), {}), id: a };
    return x({ ourProps: u, theirProps: s, slot: o.value, attrs: t, slots: r, name: i });
  };
} });
var Go = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Go || {});
let rt = Symbol("DialogContext");
function Pe(e) {
  let t = B(rt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Pe), r;
  }
  return t;
}
let De = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", kr = A({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: De }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  var i;
  let o = h(!1);
  P(() => {
    o.value = !0;
  });
  let l = h(0), s = _t(), u = w(() => e.open === De && s !== null ? j(s.value, { [ie.Open]: !0, [ie.Closed]: !1 }) : e.open), c = h(/* @__PURE__ */ new Set()), f = h(null), p = h(null), v = w(() => he(f));
  if (a({ el: f, $el: f }), !(e.open !== De || s !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === De ? void 0 : e.open}`);
  let m = w(() => o.value && u.value ? 0 : 1), O = w(() => m.value === 0), T = w(() => l.value > 1), D = B(rt, null) !== null, C = w(() => T.value ? "parent" : "leaf");
  Io(f, w(() => T.value ? O.value : !1)), Ho({ type: "Dialog", element: f, onUpdate: (S, b, _) => {
    if (b === "Dialog")
      return j(S, { [tt.Add]() {
        c.value.add(_), l.value += 1;
      }, [tt.Remove]() {
        c.value.delete(_), l.value -= 1;
      } });
  } });
  let te = Uo({ name: "DialogDescription", slot: w(() => ({ open: u.value })) }), W = `headlessui-dialog-${le()}`, F = h(null), q = { titleId: F, panelRef: h(null), dialogState: m, setTitleId(S) {
    F.value !== S && (F.value = S);
  }, close() {
    t("close", !1);
  } };
  return L(rt, q), Do(() => {
    var S, b, _;
    return [...Array.from((b = (S = v.value) == null ? void 0 : S.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b : []).filter((g) => !(!(g instanceof HTMLElement) || g.contains(U(p)) || q.panelRef.value && g.contains(q.panelRef.value))), (_ = q.panelRef.value) != null ? _ : f.value];
  }, (S, b) => {
    q.close(), ir(() => b == null ? void 0 : b.focus());
  }, w(() => m.value === 0 && !T.value)), Br((i = v.value) == null ? void 0 : i.defaultView, "keydown", (S) => {
    S.defaultPrevented || S.key === Cr.Escape && m.value === 0 && (T.value || (S.preventDefault(), S.stopPropagation(), q.close()));
  }), M((S) => {
    var b;
    if (m.value !== 0 || D)
      return;
    let _ = v.value;
    if (!_)
      return;
    let g = _ == null ? void 0 : _.documentElement, E = (b = _.defaultView) != null ? b : window, Pt = g.style.overflow, At = g.style.paddingRight, Ne = E.innerWidth - g.clientWidth;
    if (g.style.overflow = "hidden", Ne > 0) {
      let xt = g.clientWidth - g.offsetWidth, Dt = Ne - xt;
      g.style.paddingRight = `${Dt}px`;
    }
    S(() => {
      g.style.overflow = Pt, g.style.paddingRight = At;
    });
  }), M((S) => {
    if (m.value !== 0)
      return;
    let b = U(f);
    if (!b)
      return;
    let _ = new IntersectionObserver((g) => {
      for (let E of g)
        E.boundingClientRect.x === 0 && E.boundingClientRect.y === 0 && E.boundingClientRect.width === 0 && E.boundingClientRect.height === 0 && q.close();
    });
    _.observe(b), S(() => _.disconnect());
  }), () => {
    let S = { ...r, ref: f, id: W, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": F.value, "aria-describedby": te.value }, { open: b, initialFocus: _, ...g } = e, E = { open: m.value === 0 };
    return $(et, { force: !0 }, () => [$(Mr, () => $(qo, { target: f.value }, () => $(et, { force: !1 }, () => $(me, { initialFocus: _, containers: c, features: O.value ? j(C.value, { parent: me.features.RestoreFocus, leaf: me.features.All & ~me.features.FocusLock }) : me.features.None }, () => x({ ourProps: S, theirProps: g, slot: E, attrs: r, slots: n, visible: m.value === 0, features: Re.RenderStrategy | Re.Static, name: "Dialog" }))))), $(Qe, { features: Be.Hidden, ref: p })]);
  };
} });
A({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = Pe("DialogOverlay"), a = `headlessui-dialog-overlay-${le()}`;
  function i(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => x({ ourProps: { id: a, "aria-hidden": !0, onClick: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
A({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Pe("DialogBackdrop"), i = `headlessui-dialog-backdrop-${le()}`, o = h(null);
  return n({ el: o, $el: o }), P(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let l = e, s = { id: i, ref: o, "aria-hidden": !0 };
    return $(et, { force: !0 }, () => $(Mr, () => x({ ourProps: s, theirProps: { ...t, ...l }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Ur = A({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Pe("DialogPanel"), i = `headlessui-dialog-panel-${le()}`;
  n({ el: a.panelRef, $el: a.panelRef });
  function o(l) {
    l.stopPropagation();
  }
  return () => {
    let l = { id: i, ref: a.panelRef, onClick: o };
    return x({ ourProps: l, theirProps: e, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
A({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = Pe("DialogTitle"), a = `headlessui-dialog-title-${le()}`;
  return P(() => {
    n.setTitleId(a), pe(() => n.setTitleId(null));
  }), () => x({ ourProps: { id: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Ko(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Gr() {
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
function Ke(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ce(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var nt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(nt || {});
function zo(e, t) {
  let r = Gr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [i, o] = [n, a].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return i !== 0 ? r.setTimeout(() => t("finished"), i + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Ut(e, t, r, n, a, i) {
  let o = Gr(), l = i !== void 0 ? Ko(i) : () => {
  };
  return Ce(e, ...a), Ke(e, ...t, ...r), o.nextFrame(() => {
    Ce(e, ...r), Ke(e, ...n), o.add(zo(e, (s) => (Ce(e, ...n, ...t), Ke(e, ...a), l(s))));
  }), o.add(() => Ce(e, ...t, ...r, ...n, ...a)), o.add(() => l("cancelled")), o.dispose;
}
function re(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ot = Symbol("TransitionContext");
var Wo = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Wo || {});
function Jo() {
  return B(Ot, null) !== null;
}
function Xo() {
  let e = B(Ot, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Yo() {
  let e = B($t, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let $t = Symbol("NestingContext");
function qe(e) {
  return "children" in e ? qe(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Kr(e) {
  let t = h([]), r = h(!1);
  P(() => r.value = !0), pe(() => r.value = !1);
  function n(i, o = Y.Hidden) {
    let l = t.value.findIndex(({ id: s }) => s === i);
    l !== -1 && (j(o, { [Y.Unmount]() {
      t.value.splice(l, 1);
    }, [Y.Hidden]() {
      t.value[l].state = "hidden";
    } }), !qe(t) && r.value && (e == null || e()));
  }
  function a(i) {
    let o = t.value.find(({ id: l }) => l === i);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: i, state: "visible" }), () => n(i, Y.Unmount);
  }
  return { children: t, register: a, unregister: n };
}
let zr = Re.RenderStrategy, Ae = A({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  if (!Jo() && _o())
    return () => $(xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let i = h(null), o = h("visible"), l = w(() => e.unmount ? Y.Unmount : Y.Hidden);
  a({ el: i, $el: i });
  let { show: s, appear: u } = Xo(), { register: c, unregister: f } = Yo(), p = { value: !0 }, v = le(), m = { value: !1 }, O = Kr(() => {
    m.value || (o.value = "hidden", f(v), t("afterLeave"));
  });
  P(() => {
    let b = c(v);
    pe(b);
  }), M(() => {
    if (l.value === Y.Hidden && !!v) {
      if (s && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      j(o.value, { hidden: () => f(v), visible: () => c(v) });
    }
  });
  let T = re(e.enter), D = re(e.enterFrom), C = re(e.enterTo), te = re(e.entered), W = re(e.leave), F = re(e.leaveFrom), q = re(e.leaveTo);
  P(() => {
    M(() => {
      if (o.value === "visible") {
        let b = U(i);
        if (b instanceof Comment && b.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(b) {
    let _ = p.value && !u.value, g = U(i);
    !g || !(g instanceof HTMLElement) || _ || (m.value = !0, s.value && t("beforeEnter"), s.value || t("beforeLeave"), b(s.value ? Ut(g, T, D, C, te, (E) => {
      m.value = !1, E === nt.Finished && t("afterEnter");
    }) : Ut(g, W, F, q, te, (E) => {
      m.value = !1, E === nt.Finished && (qe(O) || (o.value = "hidden", f(v), t("afterLeave")));
    })));
  }
  return P(() => {
    Se([s], (b, _, g) => {
      S(g), p.value = !1;
    }, { immediate: !0 });
  }), L($t, O), Oo(w(() => j(o.value, { visible: ie.Open, hidden: ie.Closed }))), () => {
    let { appear: b, show: _, enter: g, enterFrom: E, enterTo: Pt, entered: At, leave: Ne, leaveFrom: xt, leaveTo: Dt, ...on } = e;
    return x({ theirProps: on, ourProps: { ref: i }, slot: {}, slots: n, attrs: r, features: zr, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), Vo = Ae, xe = A({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let a = _t(), i = w(() => e.show === null && a !== null ? j(a.value, { [ie.Open]: !0, [ie.Closed]: !1 }) : e.show);
  M(() => {
    if (![!0, !1].includes(i.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = h(i.value ? "visible" : "hidden"), l = Kr(() => {
    o.value = "hidden";
  }), s = h(!0), u = { show: i, appear: w(() => e.appear || !s.value) };
  return P(() => {
    M(() => {
      s.value = !1, i.value ? o.value = "visible" : qe(l) || (o.value = "hidden");
    });
  }), L($t, l), L(Ot, u), () => {
    let c = Dr(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return x({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [$(Vo, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: zr, visible: o.value === "visible", name: "Transition" });
  };
} });
const Qo = {
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
    hasConfirmModal: () => !!d.confirmModal.value,
    title: function() {
      var e;
      return (e = d.confirmModal.value) != null && e.title ? d.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = d.confirmModal.value) != null && e.text ? d.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = d.confirmModal.value) != null && e.confirmButton ? d.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = d.confirmModal.value) != null && e.cancelButton ? d.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      d.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      d.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      d.clearConfirmModal();
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
      Dialog: kr,
      DialogPanel: Ur,
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
};
function Wr(e, t) {
  t = St(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ee(t[r++])];
  return r && r == n ? e : void 0;
}
function Tt(e, t, r) {
  var n = e == null ? void 0 : Wr(e, t);
  return n === void 0 ? r : n;
}
var Zo = function() {
  try {
    var e = se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Gt = Zo;
function Jr(e, t, r) {
  t == "__proto__" && Gt ? Gt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var es = Object.prototype, ts = es.hasOwnProperty;
function rs(e, t, r) {
  var n = e[t];
  (!(ts.call(e, t) && bt(n, r)) || r === void 0 && !(t in e)) && Jr(e, t, r);
}
function ns(e, t, r, n) {
  if (!ce(e))
    return e;
  t = St(t, e);
  for (var a = -1, i = t.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var s = Ee(t[a]), u = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (a != o) {
      var c = l[s];
      u = n ? n(c, s, l) : void 0, u === void 0 && (u = ce(c) ? c : ct(t[a + 1]) ? [] : {});
    }
    rs(l, s, u), l = l[s];
  }
  return e;
}
function Xr(e, t, r) {
  return e == null ? e : ns(e, t, r);
}
const as = {
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
      let e = d.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && d.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(new Proxy(this.values, {
      ownKeys() {
        return Object.keys(e.values);
      },
      get(t, r) {
        return Tt(e.values, r);
      },
      set(t, r, n) {
        Xr(e.values, r, n);
      }
    }));
  }
}, is = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), ar(e).then((t) => {
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
function Yr(e) {
  return e && e.length ? e[0] : void 0;
}
const os = {
  inject: ["stack"],
  computed: {
    values() {
      return d.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return I(e.values, t);
      },
      first(t) {
        return Yr(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
};
function ss(e, t) {
  return e && pt(e, mr(t));
}
const ls = {
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
        const n = "splade.redirect", a = "splade.refresh", i = "splade.toast";
        let o = null, l = !1, s = [];
        ss(r, (u) => {
          !ce(u) || (n in u && (o = u[n]), a in u && (l = u[a]), i in u && s.push(u));
        }), o ? d.visit(o) : l ? d.refresh() : this.events.push({ name: e, data: r }), s.length > 0 && s.forEach((u) => {
          d.pushToast(u);
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
}, us = {
  inject: ["stack"],
  computed: {
    values() {
      return d.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return I(e.values, t);
      },
      ...this.values
    });
  }
};
function at(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => at(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => at(t));
}
function Vr(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Zr(t, Qr(null, r), e[r]);
  return t;
}
function Qr(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Zr(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Zr(e, Qr(t, n.toString()), r[n]));
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
  Vr(r);
}
var cs = "[object Boolean]";
function en(e) {
  return e === !0 || e === !1 || Z(e) && ee(e) == cs;
}
function fs() {
  this.__data__ = new K(), this.size = 0;
}
function ds(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ps(e) {
  return this.__data__.get(e);
}
function hs(e) {
  return this.__data__.has(e);
}
var vs = 200;
function ms(e, t) {
  var r = this.__data__;
  if (r instanceof K) {
    var n = r.__data__;
    if (!Oe || n.length < vs - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new z(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function k(e) {
  var t = this.__data__ = new K(e);
  this.size = t.size;
}
k.prototype.clear = fs;
k.prototype.delete = ds;
k.prototype.get = ps;
k.prototype.has = hs;
k.prototype.set = ms;
var gs = "__lodash_hash_undefined__";
function ys(e) {
  return this.__data__.set(e, gs), this;
}
function bs(e) {
  return this.__data__.has(e);
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new z(); ++t < r; )
    this.add(e[t]);
}
Ie.prototype.add = Ie.prototype.push = ys;
Ie.prototype.has = bs;
function ws(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ss(e, t) {
  return e.has(t);
}
var _s = 1, Os = 2;
function tn(e, t, r, n, a, i) {
  var o = r & _s, l = e.length, s = t.length;
  if (l != s && !(o && s > l))
    return !1;
  var u = i.get(e), c = i.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, v = r & Os ? new Ie() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var m = e[f], O = t[f];
    if (n)
      var T = o ? n(O, m, f, t, e, i) : n(m, O, f, e, t, i);
    if (T !== void 0) {
      if (T)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!ws(t, function(D, C) {
        if (!Ss(v, C) && (m === D || a(m, D, r, n, i)))
          return v.push(C);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === O || a(m, O, r, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var $s = G.Uint8Array;
const Kt = $s;
function Ts(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function Es(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ps = 1, As = 2, xs = "[object Boolean]", Ds = "[object Date]", Cs = "[object Error]", Fs = "[object Map]", js = "[object Number]", Rs = "[object RegExp]", Bs = "[object Set]", Is = "[object String]", Ls = "[object Symbol]", Ms = "[object ArrayBuffer]", qs = "[object DataView]", zt = Q ? Q.prototype : void 0, ze = zt ? zt.valueOf : void 0;
function Ns(e, t, r, n, a, i, o) {
  switch (r) {
    case qs:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ms:
      return !(e.byteLength != t.byteLength || !i(new Kt(e), new Kt(t)));
    case xs:
    case Ds:
    case js:
      return bt(+e, +t);
    case Cs:
      return e.name == t.name && e.message == t.message;
    case Rs:
    case Is:
      return e == t + "";
    case Fs:
      var l = Ts;
    case Bs:
      var s = n & Ps;
      if (l || (l = Es), e.size != t.size && !s)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= As, o.set(e, t);
      var c = tn(l(e), l(t), n, a, i, o);
      return o.delete(e), c;
    case Ls:
      if (ze)
        return ze.call(e) == ze.call(t);
  }
  return !1;
}
function Hs(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function ks(e, t, r) {
  var n = t(e);
  return R(e) ? n : Hs(n, r(e));
}
function Us(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
function Gs() {
  return [];
}
var Ks = Object.prototype, zs = Ks.propertyIsEnumerable, Wt = Object.getOwnPropertySymbols, Ws = Wt ? function(e) {
  return e == null ? [] : (e = Object(e), Us(Wt(e), function(t) {
    return zs.call(e, t);
  }));
} : Gs;
const Js = Ws;
function Jt(e) {
  return ks(e, dt, Js);
}
var Xs = 1, Ys = Object.prototype, Vs = Ys.hasOwnProperty;
function Qs(e, t, r, n, a, i) {
  var o = r & Xs, l = Jt(e), s = l.length, u = Jt(t), c = u.length;
  if (s != c && !o)
    return !1;
  for (var f = s; f--; ) {
    var p = l[f];
    if (!(o ? p in t : Vs.call(t, p)))
      return !1;
  }
  var v = i.get(e), m = i.get(t);
  if (v && m)
    return v == t && m == e;
  var O = !0;
  i.set(e, t), i.set(t, e);
  for (var T = o; ++f < s; ) {
    p = l[f];
    var D = e[p], C = t[p];
    if (n)
      var te = o ? n(C, D, p, t, e, i) : n(D, C, p, e, t, i);
    if (!(te === void 0 ? D === C || a(D, C, r, n, i) : te)) {
      O = !1;
      break;
    }
    T || (T = p == "constructor");
  }
  if (O && !T) {
    var W = e.constructor, F = t.constructor;
    W != F && "constructor" in e && "constructor" in t && !(typeof W == "function" && W instanceof W && typeof F == "function" && F instanceof F) && (O = !1);
  }
  return i.delete(e), i.delete(t), O;
}
var Zs = se(G, "DataView");
const it = Zs;
var el = se(G, "Promise");
const ot = el;
var tl = se(G, "Set");
const st = tl;
var rl = se(G, "WeakMap");
const lt = rl;
var Xt = "[object Map]", nl = "[object Object]", Yt = "[object Promise]", Vt = "[object Set]", Qt = "[object WeakMap]", Zt = "[object DataView]", al = oe(it), il = oe(Oe), ol = oe(ot), sl = oe(st), ll = oe(lt), ne = ee;
(it && ne(new it(new ArrayBuffer(1))) != Zt || Oe && ne(new Oe()) != Xt || ot && ne(ot.resolve()) != Yt || st && ne(new st()) != Vt || lt && ne(new lt()) != Qt) && (ne = function(e) {
  var t = ee(e), r = t == nl ? e.constructor : void 0, n = r ? oe(r) : "";
  if (n)
    switch (n) {
      case al:
        return Zt;
      case il:
        return Xt;
      case ol:
        return Yt;
      case sl:
        return Vt;
      case ll:
        return Qt;
    }
  return t;
});
const er = ne;
var ul = 1, tr = "[object Arguments]", rr = "[object Array]", Fe = "[object Object]", cl = Object.prototype, nr = cl.hasOwnProperty;
function fl(e, t, r, n, a, i) {
  var o = R(e), l = R(t), s = o ? rr : er(e), u = l ? rr : er(t);
  s = s == tr ? Fe : s, u = u == tr ? Fe : u;
  var c = s == Fe, f = u == Fe, p = s == u;
  if (p && We(e)) {
    if (!We(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return i || (i = new k()), o || dr(e) ? tn(e, t, r, n, a, i) : Ns(e, t, s, r, n, a, i);
  if (!(r & ul)) {
    var v = c && nr.call(e, "__wrapped__"), m = f && nr.call(t, "__wrapped__");
    if (v || m) {
      var O = v ? e.value() : e, T = m ? t.value() : t;
      return i || (i = new k()), a(O, T, r, n, i);
    }
  }
  return p ? (i || (i = new k()), Qs(e, t, r, n, a, i)) : !1;
}
function Et(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Z(e) && !Z(t) ? e !== e && t !== t : fl(e, t, r, n, Et, a);
}
var dl = 1, pl = 2;
function hl(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    l = r[a];
    var s = l[0], u = e[s], c = l[1];
    if (o && l[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var f = new k();
      if (n)
        var p = n(u, c, s, e, t, f);
      if (!(p === void 0 ? Et(c, u, dl | pl, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function rn(e) {
  return e === e && !ce(e);
}
function vl(e) {
  for (var t = dt(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, rn(a)];
  }
  return t;
}
function nn(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function ml(e) {
  var t = vl(e);
  return t.length == 1 && t[0][2] ? nn(t[0][0], t[0][1]) : function(r) {
    return r === e || hl(r, e, t);
  };
}
function gl(e, t) {
  return e != null && t in Object(e);
}
function yl(e, t) {
  return e != null && Ar(e, t, gl);
}
var bl = 1, wl = 2;
function Sl(e, t) {
  return yt(e) && rn(t) ? nn(Ee(e), t) : function(r) {
    var n = Tt(r, e);
    return n === void 0 && n === t ? yl(r, e) : Et(t, n, bl | wl);
  };
}
function _l(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ol(e) {
  return function(t) {
    return Wr(t, e);
  };
}
function $l(e) {
  return yt(e) ? _l(Ee(e)) : Ol(e);
}
function Tl(e) {
  return typeof e == "function" ? e : e == null ? vr : typeof e == "object" ? R(e) ? Sl(e[0], e[1]) : ml(e) : $l(e);
}
function an(e, t) {
  var r = {};
  return t = Tl(t), pt(e, function(n, a, i) {
    Jr(r, a, t(n, a, i));
  }), r;
}
const El = {
  inject: ["stack"],
  props: {
    action: {
      type: String,
      required: !1,
      default() {
        return d.isSsr ? "" : location.href;
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
      return d.validationErrors(this.stack);
    },
    errors() {
      return an(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return I(this.errors, e);
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
      d.confirm(en(this.confirm) ? "" : this.confirm, this.confirmText, this.confirmButton, this.cancelButton).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    request() {
      this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.forceFormData || at(this.values) ? Vr(this.values) : this.values;
      d.request(this.action, this.method.toUpperCase(), e, {
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
        ].includes(r) ? e[r] : Tt(e.values, r);
      },
      set(t, r, n) {
        Xr(e.values, r, n);
      }
    }));
  }
}, Pl = ["href", "onClick"], Al = {
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
      d.confirm(en(t.confirm) ? "" : t.confirm, t.confirmText, t.confirmButton, t.cancelButton).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.modal)
        return d.modal(t.href);
      if (t.slideover)
        return d.slideover(t.href);
      d.visit(t.href);
    }
    return (a, i) => (N(), je("a", {
      href: e.href,
      onClick: gn(r, ["prevent"])
    }, [
      yn(a.$slots, "default")
    ], 8, Pl));
  }
}, xl = {
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
      Dialog: kr,
      DialogPanel: Ur,
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
}, Dl = {
  inject: ["stack"],
  render() {
    const e = d.validationErrors(this.stack), t = d.flashData(this.stack), r = d.sharedData.value, n = an(e, (a) => a.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(a) {
        return I(e, a);
      },
      hasFlash(a) {
        return I(t, a);
      },
      hasShared(a) {
        return I(r, a);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
}, Cl = {
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
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
}, Fl = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], jl = {
  computed: {
    toasts: function() {
      return d.toastsReversed.value;
    },
    hasBackdrop: function() {
      return d.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      d.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Fl,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: be,
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
}, Rl = {
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
        if (n.length === 1 && Yr(n) === "default") {
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
        return r === "setToggle" ? (a, i) => {
          e.setToggle(a, i);
        } : r === "toggle" ? (a) => {
          e.toggle(a);
        } : e.toggled(r);
      }
    }));
  }
}, ql = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = I(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = I(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = I(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = I(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}Confirm`, Qo).component(`${r}Data`, as).component(`${r}Defer`, is).component(`${r}Errors`, os).component(`${r}Event`, ls).component(`${r}Flash`, us).component(`${r}Form`, El).component(`${r}Modal`, xl).component(`${r}Render`, be).component(`${r}State`, Dl).component(`${r}Toast`, Cl).component(`${r}Toasts`, jl).component(`${r}Toggle`, Rl).component(t.link_component, Al), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => d }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Nl(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((i) => {
    const o = i.replace(/^-+/, "").split("=");
    n[o[0]] = o.length === 2 ? o[1] : !0;
  });
  const a = n.port || 9e3;
  e(async (i, o) => {
    if (i.method == "POST") {
      let l = "";
      i.on("data", (s) => l += s), i.on("end", async () => {
        const s = JSON.parse(l), u = r({
          components: s.components,
          initialHtml: s.html,
          initialSpladeData: s.splade
        }), c = await t(u);
        o.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), o.write(JSON.stringify({ body: c })), o.end();
      });
    }
  }).listen(a, () => console.log(`Splade SSR server started on port ${a}.`));
}
export {
  d as Splade,
  hi as SpladeApp,
  ql as SpladePlugin,
  Ll as renderSpladeApp,
  Nl as startServer
};
