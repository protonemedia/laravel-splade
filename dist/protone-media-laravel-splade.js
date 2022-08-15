import kn from "axios";
import { ref as S, computed as C, watch as it, openBlock as L, createBlock as qe, unref as he, h as B, onMounted as q, createElementBlock as me, createElementVNode as tr, provide as Z, inject as X, nextTick as ot, resolveDynamicComponent as io, KeepAlive as oo, withCtx as Hn, normalizeStyle as ao, createVNode as so, Fragment as Sr, renderList as lo, createCommentVNode as uo, onBeforeUnmount as co, renderSlot as Pe, resolveComponent as fo, withDirectives as po, vShow as ho, cloneVNode as vo, watchEffect as ee, defineComponent as k, onUnmounted as We, Teleport as mo, reactive as go, withModifiers as yo } from "vue";
function bo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function wo(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var Oo = wo();
const So = Oo;
function $o(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Eo = typeof global == "object" && global && global.Object === Object && global;
const Vn = Eo;
var _o = typeof self == "object" && self && self.Object === Object && self, To = Vn || _o || Function("return this")();
const ne = To;
var xo = ne.Symbol;
const ge = xo;
var Un = Object.prototype, Ao = Un.hasOwnProperty, Po = Un.toString, Qe = ge ? ge.toStringTag : void 0;
function Io(e) {
  var t = Ao.call(e, Qe), r = e[Qe];
  try {
    e[Qe] = void 0;
    var n = !0;
  } catch {
  }
  var i = Po.call(e);
  return n && (t ? e[Qe] = r : delete e[Qe]), i;
}
var Co = Object.prototype, Do = Co.toString;
function jo(e) {
  return Do.call(e);
}
var Bo = "[object Null]", Fo = "[object Undefined]", tn = ge ? ge.toStringTag : void 0;
function we(e) {
  return e == null ? e === void 0 ? Fo : Bo : tn && tn in Object(e) ? Io(e) : jo(e);
}
function ye(e) {
  return e != null && typeof e == "object";
}
var Ro = "[object Arguments]";
function rn(e) {
  return ye(e) && we(e) == Ro;
}
var Wn = Object.prototype, Lo = Wn.hasOwnProperty, Mo = Wn.propertyIsEnumerable, qo = rn(function() {
  return arguments;
}()) ? rn : function(e) {
  return ye(e) && Lo.call(e, "callee") && !Mo.call(e, "callee");
};
const Gn = qo;
var No = Array.isArray;
const R = No;
function ko() {
  return !1;
}
var zn = typeof exports == "object" && exports && !exports.nodeType && exports, nn = zn && typeof module == "object" && module && !module.nodeType && module, Ho = nn && nn.exports === zn, on = Ho ? ne.Buffer : void 0, Vo = on ? on.isBuffer : void 0, Uo = Vo || ko;
const rr = Uo;
var Wo = 9007199254740991, Go = /^(?:0|[1-9]\d*)$/;
function $r(e, t) {
  var r = typeof e;
  return t = t == null ? Wo : t, !!t && (r == "number" || r != "symbol" && Go.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var zo = 9007199254740991;
function Er(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zo;
}
var Ko = "[object Arguments]", Xo = "[object Array]", Qo = "[object Boolean]", Yo = "[object Date]", Jo = "[object Error]", Zo = "[object Function]", ea = "[object Map]", ta = "[object Number]", ra = "[object Object]", na = "[object RegExp]", ia = "[object Set]", oa = "[object String]", aa = "[object WeakMap]", sa = "[object ArrayBuffer]", la = "[object DataView]", ua = "[object Float32Array]", ca = "[object Float64Array]", fa = "[object Int8Array]", da = "[object Int16Array]", pa = "[object Int32Array]", ha = "[object Uint8Array]", va = "[object Uint8ClampedArray]", ma = "[object Uint16Array]", ga = "[object Uint32Array]", I = {};
I[ua] = I[ca] = I[fa] = I[da] = I[pa] = I[ha] = I[va] = I[ma] = I[ga] = !0;
I[Ko] = I[Xo] = I[sa] = I[Qo] = I[la] = I[Yo] = I[Jo] = I[Zo] = I[ea] = I[ta] = I[ra] = I[na] = I[ia] = I[oa] = I[aa] = !1;
function ya(e) {
  return ye(e) && Er(e.length) && !!I[we(e)];
}
function ba(e) {
  return function(t) {
    return e(t);
  };
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, Ze = Kn && typeof module == "object" && module && !module.nodeType && module, wa = Ze && Ze.exports === Kn, Kt = wa && Vn.process, Oa = function() {
  try {
    var e = Ze && Ze.require && Ze.require("util").types;
    return e || Kt && Kt.binding && Kt.binding("util");
  } catch {
  }
}();
const an = Oa;
var sn = an && an.isTypedArray, Sa = sn ? ba(sn) : ya;
const Xn = Sa;
var $a = Object.prototype, Ea = $a.hasOwnProperty;
function _a(e, t) {
  var r = R(e), n = !r && Gn(e), i = !r && !n && rr(e), o = !r && !n && !i && Xn(e), a = r || n || i || o, s = a ? $o(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Ea.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || $r(u, l))) && s.push(u);
  return s;
}
var Ta = Object.prototype;
function xa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ta;
  return e === r;
}
function Aa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Pa = Aa(Object.keys, Object);
const Ia = Pa;
var Ca = Object.prototype, Da = Ca.hasOwnProperty;
function ja(e) {
  if (!xa(e))
    return Ia(e);
  var t = [];
  for (var r in Object(e))
    Da.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function se(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ba = "[object AsyncFunction]", Fa = "[object Function]", Ra = "[object GeneratorFunction]", La = "[object Proxy]";
function Qn(e) {
  if (!se(e))
    return !1;
  var t = we(e);
  return t == Fa || t == Ra || t == Ba || t == La;
}
function It(e) {
  return e != null && Er(e.length) && !Qn(e);
}
function Ct(e) {
  return It(e) ? _a(e) : ja(e);
}
function _r(e, t) {
  return e && So(e, t, Ct);
}
function Ma(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!It(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var qa = Ma(_r);
const Tr = qa;
function Yn(e) {
  return e;
}
function Jn(e) {
  return typeof e == "function" ? e : Yn;
}
function Na(e, t) {
  var r = R(e) ? bo : Tr;
  return r(e, Jn(t));
}
var ka = Array.prototype, Ha = ka.reverse;
function Va(e) {
  return e == null ? e : Ha.call(e);
}
const nr = S(1), Ie = typeof window > "u";
function Ua(e, t) {
  Ie || window.addEventListener("popstate", Wa.bind(this)), Pr(t), Dt(t.head), Ir(e);
  const r = Ie ? "" : location.href, n = xr(
    r,
    t.head,
    e,
    {},
    nr.value
  );
  Zn(n);
}
function Wa(e) {
  M.value = e.state, J.value = 0, Dt(M.value.head), Ir(M.value.html, M.value.rememberedState.scrollY);
}
function xr(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return M.value = o, o;
}
function Ga(e) {
  Ie || window.history.pushState(e, "", e.url);
}
function za(e) {
  const t = xr(
    e,
    JSON.parse(JSON.stringify(M.value.head)),
    M.value.html,
    { ...M.value.rememberedState },
    M.value.pageVisitId
  );
  Ie || window.history.replaceState(t, "", t.url);
}
function Zn(e) {
  Ie || window.history.replaceState(e, "", e.url);
}
const M = S({});
function Ka(e, t) {
  const r = e.request.responseURL;
  if (e.data.splade.modal && J.value++, Pr(e.data.splade), Dt(e.data.splade.head), e.data.splade.modal)
    return os(e.data.html, e.data.splade.modal);
  (r !== M.value.url || e.data.splade.refresh || J.value > 0) && (J.value = 0, t || nr.value++, Ir(e.data.html, 0));
  const n = xr(
    r,
    e.data.splade.head,
    e.data.html,
    M.value.rememberedState ? { ...M.value.rememberedState } : {},
    nr.value
  );
  t ? Zn(n) : Ga(n);
}
const J = S(0);
function Xa() {
  J.value--, Dt(Ya(J.value));
}
const ei = S({}), ti = S({}), ri = (e) => ti.value[e], Qa = (e) => Object.keys(ri.value[e]).length > 0, ni = S({}), Ya = (e) => ni.value[e], ii = S({}), Ja = (e) => ii.value[e], Ne = S([]), Za = C(() => Va(Ne.value));
function es(e) {
  Ne.value.push(e);
}
function ts(e) {
  Ne.value[e].dismissed = !0, Ne.value[e].html = null;
}
const Ar = S(null);
function rs(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return Ar.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function ns() {
  Ar.value = null;
}
function Pr(e) {
  ei.value = e.shared ? e.shared : {}, ii.value[J.value] = e.flash ? e.flash : {}, ni.value[J.value] = e.head ? e.head : {}, Na(e.toasts ? e.toasts : [], (t) => {
    Ne.value.push(t);
  }), ti.value[J.value] = e.errors ? e.errors : {};
}
function is(e) {
  ci.value(e);
}
function Dt(e) {
  si.value(e);
}
function Ir(e, t) {
  li.value(e, t);
}
function os(e, t) {
  ui.value(e, t);
}
const oi = S({});
function ai(e, t, r) {
  oi.value[e] = t, r && as(e, t);
}
function as(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ss(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : oi.value[e];
}
function Ge(e, t, r, n, i) {
  Ie || ai("scrollY", window.scrollY);
  const o = kn({
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
  return o.then((a) => {
    Ka(a, i);
  }).catch((a) => {
    const s = a.response.data.splade;
    s && Pr(s), a.response.status != 422 && is(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
}
function ls(e) {
  return Ge(e, "GET", {}, {}, !0);
}
function us(e) {
  return Ge(e, "GET", {}, {}, !1);
}
function cs(e) {
  return Ge(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function fs(e) {
  return Ge(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function ds() {
  return Ge(M.value.url, "GET", {}, { "X-Splade-Refresh": !0 }, !1);
}
const si = S(() => {
}), li = S(() => {
}), ui = S(() => {
}), ci = S(() => {
}), m = {
  init: Ua,
  replace: ls,
  visit: us,
  modal: cs,
  slideover: fs,
  refresh: ds,
  request: Ge,
  replaceUrlOfCurrentPage: za,
  setOnHead(e) {
    si.value = e;
  },
  setOnHtml(e) {
    li.value = e;
  },
  setOnModal(e) {
    ui.value = e;
  },
  setOnServerError(e) {
    ci.value = e;
  },
  hasValidationErrors: Qa,
  validationErrors: ri,
  sharedData: ei,
  flashData: Ja,
  toasts: Ne,
  toastsReversed: Za,
  confirmModal: Ar,
  confirm: rs,
  clearConfirmModal: ns,
  pushToast: es,
  dismissToast: ts,
  restore: ss,
  remember: ai,
  popStack: Xa,
  currentStack: J,
  pageVisitId: C(() => M.value.pageVisitId),
  isSsr: Ie
};
function et(e, t) {
  return e && _r(e, Jn(t));
}
var ps = "[object String]";
function Xt(e) {
  return typeof e == "string" || !R(e) && ye(e) && we(e) == ps;
}
const tt = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = S(null);
    function n() {
      r.value = B({
        template: t.html
      });
    }
    return it(() => t.html, n, { immediate: !0 }), (i, o) => (L(), qe(he(r)));
  }
}, hs = {
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
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    const i = S(null);
    function o() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = i.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(s) {
      s.keyCode === 27 && n();
    }
    return q(() => o()), (s, l) => (L(), me("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      tr("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, vs = {
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
        if (!m.isSsr) {
          const t = Xt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Xt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Xt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Z("stack", 0);
    const r = S(), n = S([]), i = S(null), o = C(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function a() {
      i.value = null;
    }
    function s(f) {
      n[f] = null, m.popStack();
    }
    const l = X("$spladeOptions") || {};
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      et(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, ot(() => {
        m.isSsr || window.scrollTo(0, p), l.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(v) {
            v.preventDefault(), m.visit(d.href);
          }));
        });
      });
    }), m.setOnModal(function(f, p) {
      n.value[m.currentStack.value] = { html: f, type: p };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (L(), me("div", null, [
      (L(), qe(io(he(m).isSsr ? "div" : oo), {
        max: he(l).max_keep_alive
      }, {
        default: Hn(() => [
          (L(), qe(tt, {
            key: `visit.${he(m).pageVisitId.value}`,
            style: ao(he(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      so(tt, { html: e.components }, null, 8, ["html"]),
      (L(!0), me(Sr, null, lo(he(m).currentStack.value, (d) => (L(), qe(tt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": he(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (L(), qe(hs, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : uo("", !0)
    ]));
  }
};
function Pd(e) {
  return () => B(vs, e);
}
var ms = Object.prototype, gs = ms.hasOwnProperty;
function ys(e, t) {
  return e != null && gs.call(e, t);
}
var bs = "[object Symbol]";
function jt(e) {
  return typeof e == "symbol" || ye(e) && we(e) == bs;
}
var ws = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Os = /^\w*$/;
function Cr(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || jt(e) ? !0 : Os.test(e) || !ws.test(e) || t != null && e in Object(t);
}
var Ss = ne["__core-js_shared__"];
const Qt = Ss;
var ln = function() {
  var e = /[^.]+$/.exec(Qt && Qt.keys && Qt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $s(e) {
  return !!ln && ln in e;
}
var Es = Function.prototype, _s = Es.toString;
function Be(e) {
  if (e != null) {
    try {
      return _s.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ts = /[\\^$.*+?()[\]{}|]/g, xs = /^\[object .+?Constructor\]$/, As = Function.prototype, Ps = Object.prototype, Is = As.toString, Cs = Ps.hasOwnProperty, Ds = RegExp(
  "^" + Is.call(Cs).replace(Ts, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function js(e) {
  if (!se(e) || $s(e))
    return !1;
  var t = Qn(e) ? Ds : xs;
  return t.test(Be(e));
}
function Bs(e, t) {
  return e == null ? void 0 : e[t];
}
function Fe(e, t) {
  var r = Bs(e, t);
  return js(r) ? r : void 0;
}
var Fs = Fe(Object, "create");
const at = Fs;
function Rs() {
  this.__data__ = at ? at(null) : {}, this.size = 0;
}
function Ls(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ms = "__lodash_hash_undefined__", qs = Object.prototype, Ns = qs.hasOwnProperty;
function ks(e) {
  var t = this.__data__;
  if (at) {
    var r = t[e];
    return r === Ms ? void 0 : r;
  }
  return Ns.call(t, e) ? t[e] : void 0;
}
var Hs = Object.prototype, Vs = Hs.hasOwnProperty;
function Us(e) {
  var t = this.__data__;
  return at ? t[e] !== void 0 : Vs.call(t, e);
}
var Ws = "__lodash_hash_undefined__";
function Gs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = at && t === void 0 ? Ws : t, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Rs;
Ce.prototype.delete = Ls;
Ce.prototype.get = ks;
Ce.prototype.has = Us;
Ce.prototype.set = Gs;
function zs() {
  this.__data__ = [], this.size = 0;
}
function Dr(e, t) {
  return e === t || e !== e && t !== t;
}
function Bt(e, t) {
  for (var r = e.length; r--; )
    if (Dr(e[r][0], t))
      return r;
  return -1;
}
var Ks = Array.prototype, Xs = Ks.splice;
function Qs(e) {
  var t = this.__data__, r = Bt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Xs.call(t, r, 1), --this.size, !0;
}
function Ys(e) {
  var t = this.__data__, r = Bt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Js(e) {
  return Bt(this.__data__, e) > -1;
}
function Zs(e, t) {
  var r = this.__data__, n = Bt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ue.prototype.clear = zs;
ue.prototype.delete = Qs;
ue.prototype.get = Ys;
ue.prototype.has = Js;
ue.prototype.set = Zs;
var el = Fe(ne, "Map");
const st = el;
function tl() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (st || ue)(),
    string: new Ce()
  };
}
function rl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ft(e, t) {
  var r = e.__data__;
  return rl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function nl(e) {
  var t = Ft(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function il(e) {
  return Ft(this, e).get(e);
}
function ol(e) {
  return Ft(this, e).has(e);
}
function al(e, t) {
  var r = Ft(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = tl;
ce.prototype.delete = nl;
ce.prototype.get = il;
ce.prototype.has = ol;
ce.prototype.set = al;
var sl = "Expected a function";
function jr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(sl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (jr.Cache || ce)(), r;
}
jr.Cache = ce;
var ll = 500;
function ul(e) {
  var t = jr(e, function(n) {
    return r.size === ll && r.clear(), n;
  }), r = t.cache;
  return t;
}
var cl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fl = /\\(\\)?/g, dl = ul(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(cl, function(r, n, i, o) {
    t.push(i ? o.replace(fl, "$1") : n || r);
  }), t;
});
const pl = dl;
function fi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var hl = 1 / 0, un = ge ? ge.prototype : void 0, cn = un ? un.toString : void 0;
function Rt(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return fi(e, Rt) + "";
  if (jt(e))
    return cn ? cn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hl ? "-0" : t;
}
function Br(e) {
  return e == null ? "" : Rt(e);
}
function Fr(e, t) {
  return R(e) ? e : Cr(e, t) ? [e] : pl(Br(e));
}
var vl = 1 / 0;
function ct(e) {
  if (typeof e == "string" || jt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -vl ? "-0" : t;
}
function di(e, t, r) {
  t = Fr(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = ct(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Er(i) && $r(a, i) && (R(e) || Gn(e)));
}
function Y(e, t) {
  return e != null && di(e, t, ys);
}
const ml = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = S(null), n = S(null);
    return q(() => {
      r.value = (i) => {
        i.target === n.value || n.value.contains(i.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value);
    }), co(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, o) => (L(), me("div", {
      ref_key: "root",
      ref: n
    }, [
      Pe(i.$slots, "default")
    ], 512));
  }
};
function U(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function De(e) {
  var t = U(e).Element;
  return e instanceof t || e instanceof Element;
}
function V(e) {
  var t = U(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Rr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = U(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ae = Math.max, Tt = Math.min, ke = Math.round;
function ir() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pi() {
  return !/^((?!chrome|android).)*safari/i.test(ir());
}
function He(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && V(e) && (i = e.offsetWidth > 0 && ke(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ke(n.height) / e.offsetHeight || 1);
  var a = De(e) ? U(e) : window, s = a.visualViewport, l = !pi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, p = n.height / o;
  return {
    width: f,
    height: p,
    top: c,
    right: u + f,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Lr(e) {
  var t = U(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function gl(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yl(e) {
  return e === U(e) || !V(e) ? Lr(e) : gl(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Oe(e) {
  return ((De(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return He(Oe(e)).left + Lr(e).scrollLeft;
}
function K(e) {
  return U(e).getComputedStyle(e);
}
function qr(e) {
  var t = K(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function bl(e) {
  var t = e.getBoundingClientRect(), r = ke(t.width) / e.offsetWidth || 1, n = ke(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function wl(e, t, r) {
  r === void 0 && (r = !1);
  var n = V(t), i = V(t) && bl(t), o = Oe(t), a = He(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || qr(o)) && (s = yl(t)), V(t) ? (l = He(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Mr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function hi(e) {
  var t = He(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Lt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Rr(e) ? e.host : null) || Oe(e);
}
function vi(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : V(e) && qr(e) ? e : vi(Lt(e));
}
function rt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = U(n), a = i ? [o].concat(o.visualViewport || [], qr(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(rt(Lt(a)));
}
function Ol(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function fn(e) {
  return !V(e) || K(e).position === "fixed" ? null : e.offsetParent;
}
function Sl(e) {
  var t = /firefox/i.test(ir()), r = /Trident/i.test(ir());
  if (r && V(e)) {
    var n = K(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Lt(e);
  for (Rr(i) && (i = i.host); V(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var o = K(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Mt(e) {
  for (var t = U(e), r = fn(e); r && Ol(r) && K(r).position === "static"; )
    r = fn(r);
  return r && (te(r) === "html" || te(r) === "body" && K(r).position === "static") ? t : r || Sl(e) || t;
}
var G = "top", re = "bottom", be = "right", ie = "left", qt = "auto", Nt = [G, re, be, ie], Ve = "start", lt = "end", $l = "clippingParents", mi = "viewport", Ye = "popper", El = "reference", dn = /* @__PURE__ */ Nt.reduce(function(e, t) {
  return e.concat([t + "-" + Ve, t + "-" + lt]);
}, []), _l = /* @__PURE__ */ [].concat(Nt, [qt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ve, t + "-" + lt]);
}, []), Tl = "beforeRead", xl = "read", Al = "afterRead", Pl = "beforeMain", Il = "main", Cl = "afterMain", Dl = "beforeWrite", jl = "write", Bl = "afterWrite", or = [Tl, xl, Al, Pl, Il, Cl, Dl, jl, Bl];
function Fl(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function Rl(e) {
  var t = Fl(e);
  return or.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ll(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function de(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, e);
}
var _e = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ml = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', pn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ql(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), pn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(de(_e, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(de(_e, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          or.indexOf(t.phase) < 0 && console.error(de(_e, t.name, '"phase"', "either " + or.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(de(_e, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(de(_e, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(de(_e, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(de(_e, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + pn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(de(Ml, String(t.name), n, n));
      });
    });
  });
}
function Nl(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function oe(e) {
  return e.split("-")[0];
}
function kl(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function Hl(e, t) {
  var r = U(e), n = Oe(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = pi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Mr(e),
    y: l
  };
}
function Vl(e) {
  var t, r = Oe(e), n = Lr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ae(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ae(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Mr(e), l = -n.scrollTop;
  return K(i || r).direction === "rtl" && (s += Ae(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Ul(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Rr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ar(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Wl(e, t) {
  var r = He(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function hn(e, t, r) {
  return t === mi ? ar(Hl(e, r)) : De(t) ? Wl(t, r) : ar(Vl(Oe(e)));
}
function Gl(e) {
  var t = rt(Lt(e)), r = ["absolute", "fixed"].indexOf(K(e).position) >= 0, n = r && V(e) ? Mt(e) : e;
  return De(n) ? t.filter(function(i) {
    return De(i) && Ul(i, n) && te(i) !== "body";
  }) : [];
}
function zl(e, t, r, n) {
  var i = t === "clippingParents" ? Gl(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = hn(e, u, n);
    return l.top = Ae(c.top, l.top), l.right = Tt(c.right, l.right), l.bottom = Tt(c.bottom, l.bottom), l.left = Ae(c.left, l.left), l;
  }, hn(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ue(e) {
  return e.split("-")[1];
}
function gi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? oe(n) : null, o = n ? Ue(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case G:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case re:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case be:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ie:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? gi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case Ve:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case lt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function bi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Kl(e) {
  return Object.assign({}, bi(), e);
}
function Xl(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Nr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? $l : s, u = r.rootBoundary, c = u === void 0 ? mi : u, f = r.elementContext, p = f === void 0 ? Ye : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, x = Kl(typeof b != "number" ? b : Xl(b, Nt)), A = p === Ye ? El : Ye, P = e.rects.popper, E = e.elements[v ? A : p], $ = zl(De(E) ? E : E.contextElement || Oe(e.elements.popper), l, c, a), h = He(e.elements.reference), g = yi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = ar(Object.assign({}, P, g)), _ = p === Ye ? w : h, O = {
    top: $.top - _.top + x.top,
    bottom: _.bottom - $.bottom + x.bottom,
    left: $.left - _.left + x.left,
    right: _.right - $.right + x.right
  }, T = e.modifiersData.offset;
  if (p === Ye && T) {
    var D = T[i];
    Object.keys(O).forEach(function(j) {
      var W = [be, re].indexOf(j) >= 0 ? 1 : -1, Q = [G, re].indexOf(j) >= 0 ? "y" : "x";
      O[j] += D[Q] * W;
    });
  }
  return O;
}
var vn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ql = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", mn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Yl(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? mn : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mn, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: c,
      setOptions: function(x) {
        var A = typeof x == "function" ? x(c.options) : x;
        y(), c.options = Object.assign({}, o, c.options, A), c.scrollParents = {
          reference: De(s) ? rt(s) : s.contextElement ? rt(s.contextElement) : [],
          popper: rt(l)
        };
        var P = Rl(kl([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(T) {
          return T.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Nl([].concat(P, c.options.modifiers), function(T) {
            var D = T.name;
            return D;
          });
          if (ql(E), oe(c.options.placement) === qt) {
            var $ = c.orderedModifiers.find(function(T) {
              var D = T.name;
              return D === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = K(l), g = h.marginTop, w = h.marginRight, _ = h.marginBottom, O = h.marginLeft;
          [g, w, _, O].some(function(T) {
            return parseFloat(T);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var x = c.elements, A = x.reference, P = x.popper;
          if (!gn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(vn);
            return;
          }
          c.rects = {
            reference: wl(A, Mt(P), c.options.strategy === "fixed"),
            popper: hi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var E = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Ql);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var h = c.orderedModifiers[$], g = h.fn, w = h.options, _ = w === void 0 ? {} : w, O = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: O,
              instance: d
            }) || c);
          }
        }
      },
      update: Ll(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!gn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(vn), d;
    d.setOptions(u).then(function(b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function v() {
      c.orderedModifiers.forEach(function(b) {
        var x = b.name, A = b.options, P = A === void 0 ? {} : A, E = b.effect;
        if (typeof E == "function") {
          var $ = E({
            state: c,
            name: x,
            instance: d,
            options: P
          }), h = function() {
          };
          f.push($ || h);
        }
      });
    }
    function y() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return d;
  };
}
var wt = {
  passive: !0
};
function Jl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = U(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, wt);
  }), s && l.addEventListener("resize", r.update, wt), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, wt);
    }), s && l.removeEventListener("resize", r.update, wt);
  };
}
const Zl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jl,
  data: {}
};
function eu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = yi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const tu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eu,
  data: {}
};
var ru = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: ke(t * i) / i || 0,
    y: ke(r * i) / i || 0
  };
}
function yn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, v = a.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var x = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = ie, E = G, $ = window;
  if (u) {
    var h = Mt(r), g = "clientHeight", w = "clientWidth";
    if (h === U(r) && (h = Oe(r), K(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === G || (i === ie || i === be) && o === lt) {
      E = re;
      var _ = f && h === $ && $.visualViewport ? $.visualViewport.height : h[g];
      y -= _ - n.height, y *= l ? 1 : -1;
    }
    if (i === ie || (i === G || i === re) && o === lt) {
      P = be;
      var O = f && h === $ && $.visualViewport ? $.visualViewport.width : h[w];
      d -= O - n.width, d *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: s
  }, u && ru), D = c === !0 ? nu({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = D.x, y = D.y, l) {
    var j;
    return Object.assign({}, T, (j = {}, j[E] = A ? "0" : "", j[P] = x ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, T, (t = {}, t[E] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function iu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = K(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: oe(t.placement),
    variation: Ue(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ou = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iu,
  data: {}
};
function au(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !V(o) || !te(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function su(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], o = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !V(i) || !te(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const lu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: au,
  effect: su,
  requires: ["computeStyles"]
};
var uu = [Zl, tu, ou, lu], cu = /* @__PURE__ */ Yl({
  defaultModifiers: uu
});
function fu(e) {
  return e === "x" ? "y" : "x";
}
function Et(e, t, r) {
  return Ae(e, Tt(t, r));
}
function du(e, t, r) {
  var n = Et(e, t, r);
  return n > r ? r : n;
}
function pu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = Nr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = oe(t.placement), A = Ue(t.placement), P = !A, E = gi(x), $ = fu(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, _ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, O = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (o) {
      var j, W = E === "y" ? G : ie, Q = E === "y" ? re : be, F = E === "y" ? "height" : "width", N = h[E], vt = N + b[W], Se = N - b[Q], mt = d ? -w[F] / 2 : 0, Ut = A === Ve ? g[F] : w[F], Ke = A === Ve ? -w[F] : -g[F], gt = t.elements.arrow, Le = d && gt ? hi(gt) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bi(), Xe = fe[W], yt = fe[Q], $e = Et(0, g[F], Le[F]), Wt = P ? g[F] / 2 - mt - $e - Xe - O.mainAxis : Ut - $e - Xe - O.mainAxis, Ji = P ? -g[F] / 2 + mt + $e + yt + O.mainAxis : Ke + $e + yt + O.mainAxis, Gt = t.elements.arrow && Mt(t.elements.arrow), Zi = Gt ? E === "y" ? Gt.clientTop || 0 : Gt.clientLeft || 0 : 0, Gr = (j = T == null ? void 0 : T[E]) != null ? j : 0, eo = N + Wt - Gr - Zi, to = N + Ji - Gr, zr = Et(d ? Tt(vt, eo) : vt, N, d ? Ae(Se, to) : Se);
      h[E] = zr, D[E] = zr - N;
    }
    if (s) {
      var Kr, ro = E === "x" ? G : ie, no = E === "x" ? re : be, Ee = h[$], bt = $ === "y" ? "height" : "width", Xr = Ee + b[ro], Qr = Ee - b[no], zt = [G, ie].indexOf(x) !== -1, Yr = (Kr = T == null ? void 0 : T[$]) != null ? Kr : 0, Jr = zt ? Xr : Ee - g[bt] - w[bt] - Yr + O.altAxis, Zr = zt ? Ee + g[bt] + w[bt] - Yr - O.altAxis : Qr, en = d && zt ? du(Jr, Ee, Zr) : Et(d ? Jr : Xr, Ee, d ? Zr : Qr);
      h[$] = en, D[$] = en - Ee;
    }
    t.modifiersData[n] = D;
  }
}
const hu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: pu,
  requiresIfExists: ["offset"]
};
var vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _t(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vu[t];
  });
}
var mu = {
  start: "end",
  end: "start"
};
function bn(e) {
  return e.replace(/start|end/g, function(t) {
    return mu[t];
  });
}
function gu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? _l : l, c = Ue(n), f = c ? s ? dn : dn.filter(function(v) {
    return Ue(v) === c;
  }) : Nt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = Nr(e, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[oe(y)], v;
  }, {});
  return Object.keys(d).sort(function(v, y) {
    return d[v] - d[y];
  });
}
function yu(e) {
  if (oe(e) === qt)
    return [];
  var t = _t(e);
  return [bn(e), t, bn(t)];
}
function bu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, x = oe(b), A = x === b, P = l || (A || !v ? [_t(b)] : yu(b)), E = [b].concat(P).reduce(function(Le, fe) {
      return Le.concat(oe(fe) === qt ? gu(t, {
        placement: fe,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : fe);
    }, []), $ = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, _ = E[0], O = 0; O < E.length; O++) {
      var T = E[O], D = oe(T), j = Ue(T) === Ve, W = [G, re].indexOf(D) >= 0, Q = W ? "width" : "height", F = Nr(t, {
        placement: T,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = W ? j ? be : ie : j ? re : G;
      $[Q] > h[Q] && (N = _t(N));
      var vt = _t(N), Se = [];
      if (o && Se.push(F[D] <= 0), s && Se.push(F[N] <= 0, F[vt] <= 0), Se.every(function(Le) {
        return Le;
      })) {
        _ = T, w = !1;
        break;
      }
      g.set(T, Se);
    }
    if (w)
      for (var mt = v ? 3 : 1, Ut = function(fe) {
        var Xe = E.find(function(yt) {
          var $e = g.get(yt);
          if ($e)
            return $e.slice(0, fe).every(function(Wt) {
              return Wt;
            });
        });
        if (Xe)
          return _ = Xe, "break";
      }, Ke = mt; Ke > 0; Ke--) {
        var gt = Ut(Ke);
        if (gt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const wu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, kt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ou = {
  components: {
    OnClickOutside: ml
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    }
  },
  data() {
    return {
      opened: !1,
      popper: null
    };
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted() {
    this.popper = cu(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [wu, hu]
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = !1;
    }
  }
}, Su = { ref: "button" }, $u = { ref: "tooltip" };
function Eu(e, t, r, n, i, o) {
  const a = fo("OnClickOutside");
  return L(), qe(a, { do: o.hide }, {
    default: Hn(() => [
      tr("button", Su, [
        Pe(e.$slots, "button", { toggle: o.toggle })
      ], 512),
      po(tr("div", $u, [
        Pe(e.$slots, "default", { hide: o.hide })
      ], 512), [
        [ho, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const _u = /* @__PURE__ */ kt(Ou, [["render", Eu]]);
function z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, z), n;
}
var xt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(xt || {}), ve = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ve || {});
function H({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = Tu(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return Yt(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return z(l, { [0]() {
      return null;
    }, [1]() {
      return Yt({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Yt(s);
}
function Yt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = Oi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (a === "template") {
    if (l = wi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!xu(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return vo(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return B(a, Object.assign({}, s, u), l);
}
function wi(e) {
  return e.flatMap((t) => t.type === Sr ? wi(t.children) : [t]);
}
function Tu(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...o) {
      let a = r[n];
      for (let s of a) {
        if (i != null && i.defaultPrevented)
          return;
        s(i, ...o);
      }
    } });
  return t;
}
function Oi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function xu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Au = 0;
function Pu() {
  return ++Au;
}
function Re() {
  return Pu();
}
var Si = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Si || {});
function le(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $i = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Iu() {
  return kr() !== null;
}
function kr() {
  return X($i, null);
}
function Cu(e) {
  Z($i, e);
}
function ze(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = le(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let sr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ut = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ut || {}), Ei = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ei || {}), Du = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Du || {});
function ju(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(sr));
}
var _i = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_i || {});
function Bu(e, t = 0) {
  var r;
  return e === ((r = ze(e)) == null ? void 0 : r.body) ? !1 : z(t, { [0]() {
    return e.matches(sr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(sr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Fu = ["textarea", "input"].join(",");
function Ru(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fu)) != null ? r : !1;
}
function Lu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function lr(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Lu(e) : e : ju(e), a = i.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(a)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(a)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = o.length, p;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + f) % f;
    else {
      if (d < 0)
        return 3;
      if (d >= f)
        return 1;
    }
    p = o[d], p == null || p.focus(u), c += s;
  } while (p !== i.activeElement);
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Ru(p) && p.select(), 2;
}
function ur(e, t, r) {
  typeof window < "u" && ee((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Mu(e, t, r = C(() => !0)) {
  function n(i, o) {
    if (!r.value || i.defaultPrevented)
      return;
    let a = o(i);
    if (a === null || !a.ownerDocument.documentElement.contains(a))
      return;
    let s = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of s) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : le(l);
      if (u != null && u.contains(a))
        return;
    }
    return !Bu(a, _i.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  ur("click", (i) => n(i, (o) => o.target), !0), ur("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var At = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(At || {});
let cr = k({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fr || {});
function qu() {
  let e = S(0);
  return ur("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ti(e, t, r, n) {
  typeof window < "u" && ee((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var xi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(xi || {});
let Je = Object.assign(k({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = S(null);
  n({ el: i, $el: i });
  let o = C(() => ze(i));
  Nu({ ownerDocument: o }, C(() => Boolean(e.features & 16)));
  let a = ku({ ownerDocument: o, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Hu({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, C(() => Boolean(e.features & 8)));
  let s = qu();
  function l() {
    let u = le(i);
    !u || z(s.value, { [fr.Forwards]: () => lr(u, ut.First), [fr.Backwards]: () => lr(u, ut.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return B(Sr, [Boolean(f & 4) && B(cr, { as: "button", type: "button", onFocus: l, features: At.Focusable }), H({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && B(cr, { as: "button", type: "button", onFocus: l, features: At.Focusable })]);
  };
} }), { features: xi });
function Nu({ ownerDocument: e }, t) {
  let r = S(null), n = { value: !1 };
  q(() => {
    it(t, (i, o) => {
      var a;
      i !== o && (!t.value || (n.value = !0, r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement)));
    }, { immediate: !0 }), it(t, (i, o, a) => {
      i !== o && (!t.value || a(() => {
        n.value !== !1 && (n.value = !1, nt(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function ku({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = S(null);
  return q(() => {
    it([t, r, n], (o, a) => {
      if (o.every((l, u) => (a == null ? void 0 : a[u]) === l) || !n.value)
        return;
      let s = le(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = le(r), f = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (s.contains(f)) {
          i.value = f;
          return;
        }
        c ? nt(c) : lr(s, ut.First | ut.NoScroll) === Ei.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Hu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var o;
  Ti((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Vu(s, u) ? (n.value = u, nt(u)) : (a.preventDefault(), a.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function Vu(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let wn = "body > *", Me = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map();
function On(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Sn(e) {
  let t = pe.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Uu(e, t = S(!0)) {
  ee((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = ze(n);
    if (i) {
      Me.add(n);
      for (let o of pe.keys())
        o.contains(n) && (Sn(o), pe.delete(o));
      i.querySelectorAll(wn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of Me)
            if (o.contains(a))
              return;
          Me.size === 1 && (pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), On(o));
        }
      }), r(() => {
        if (Me.delete(n), Me.size > 0)
          i.querySelectorAll(wn).forEach((o) => {
            if (o instanceof HTMLElement && !pe.has(o)) {
              for (let a of Me)
                if (o.contains(a))
                  return;
              pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), On(o);
            }
          });
        else
          for (let o of pe.keys())
            Sn(o), pe.delete(o);
      });
    }
  });
}
let Ai = Symbol("ForcePortalRootContext");
function Wu() {
  return X(Ai, !1);
}
let dr = k({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Z(Ai, e.force), () => {
    let { force: n, ...i } = e;
    return H({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Gu(e) {
  let t = ze(e);
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
let Pi = k({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = S(null), i = C(() => ze(n)), o = Wu(), a = X(Ii, null), s = S(o === !0 || a == null ? Gu(n.value) : a.resolveTarget());
  return ee(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), We(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return B(mo, { to: s.value }, H({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ii = Symbol("PortalGroupContext"), zu = k({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = go({ resolveTarget() {
    return e.target;
  } });
  return Z(Ii, n), () => {
    let { target: i, ...o } = e;
    return H({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ci = Symbol("StackContext");
var pr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(pr || {});
function Ku() {
  return X(Ci, () => {
  });
}
function Xu({ type: e, element: t, onUpdate: r }) {
  let n = Ku();
  function i(...o) {
    r == null || r(...o), n(...o);
  }
  q(() => {
    i(0, e, t), We(() => {
      i(1, e, t);
    });
  }), Z(Ci, i);
}
let Di = Symbol("DescriptionContext");
function Qu() {
  let e = X(Di, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Yu({ slot: e = S({}), name: t = "Description", props: r = {} } = {}) {
  let n = S([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return Z(Di, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Id = k({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Qu(), i = `headlessui-description-${Re()}`;
  return q(() => We(n.register(i))), () => {
    let { name: o = "Description", slot: a = S({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: he(p) }), {}), id: i };
    return H({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
var Ju = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ju || {});
let hr = Symbol("DialogContext");
function ft(e) {
  let t = X(hr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ft), r;
  }
  return t;
}
let Ot = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ji = k({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ot }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = S(!1);
  q(() => {
    a.value = !0;
  });
  let s = S(0), l = kr(), u = C(() => e.open === Ot && l !== null ? z(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = S(/* @__PURE__ */ new Set()), f = S(null), p = S(null), d = C(() => ze(f));
  if (i({ el: f, $el: f }), !(e.open !== Ot || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ot ? void 0 : e.open}`);
  let v = C(() => a.value && u.value ? 0 : 1), y = C(() => v.value === 0), b = C(() => s.value > 1), x = X(hr, null) !== null, A = C(() => b.value ? "parent" : "leaf");
  Uu(f, C(() => b.value ? y.value : !1)), Xu({ type: "Dialog", element: f, onUpdate: (g, w, _) => {
    if (w === "Dialog")
      return z(g, { [pr.Add]() {
        c.value.add(_), s.value += 1;
      }, [pr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Yu({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), E = `headlessui-dialog-${Re()}`, $ = S(null), h = { titleId: $, panelRef: S(null), dialogState: v, setTitleId(g) {
    $.value !== g && ($.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(hr, h), Mu(() => {
    var g, w, _;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((O) => !(!(O instanceof HTMLElement) || O.contains(le(p)) || h.panelRef.value && O.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, w) => {
    h.close(), ot(() => w == null ? void 0 : w.focus());
  }, C(() => v.value === 0 && !b.value)), Ti((o = d.value) == null ? void 0 : o.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === Si.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), ee((g) => {
    var w;
    if (v.value !== 0 || x)
      return;
    let _ = d.value;
    if (!_)
      return;
    let O = _ == null ? void 0 : _.documentElement, T = (w = _.defaultView) != null ? w : window, D = O.style.overflow, j = O.style.paddingRight, W = T.innerWidth - O.clientWidth;
    if (O.style.overflow = "hidden", W > 0) {
      let Q = O.clientWidth - O.offsetWidth, F = W - Q;
      O.style.paddingRight = `${F}px`;
    }
    g(() => {
      O.style.overflow = D, O.style.paddingRight = j;
    });
  }), ee((g) => {
    if (v.value !== 0)
      return;
    let w = le(f);
    if (!w)
      return;
    let _ = new IntersectionObserver((O) => {
      for (let T of O)
        T.boundingClientRect.x === 0 && T.boundingClientRect.y === 0 && T.boundingClientRect.width === 0 && T.boundingClientRect.height === 0 && h.close();
    });
    _.observe(w), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: w, initialFocus: _, ...O } = e, T = { open: v.value === 0 };
    return B(dr, { force: !0 }, () => [B(Pi, () => B(zu, { target: f.value }, () => B(dr, { force: !1 }, () => B(Je, { initialFocus: _, containers: c, features: y.value ? z(A.value, { parent: Je.features.RestoreFocus, leaf: Je.features.All & ~Je.features.FocusLock }) : Je.features.None }, () => H({ ourProps: g, theirProps: O, slot: T, attrs: r, slots: n, visible: v.value === 0, features: xt.RenderStrategy | xt.Static, name: "Dialog" }))))), B(cr, { features: At.Hidden, ref: p })]);
  };
} });
k({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = ft("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => H({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
k({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ft("DialogBackdrop"), o = `headlessui-dialog-backdrop-${Re()}`, a = S(null);
  return n({ el: a, $el: a }), q(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return B(dr, { force: !0 }, () => B(Pi, () => H({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Bi = k({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ft("DialogPanel"), o = `headlessui-dialog-panel-${Re()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: i.panelRef, onClick: a };
    return H({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
k({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = ft("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return q(() => {
    n.setTitleId(i), We(() => n.setTitleId(null));
  }), () => H({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Zu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Fi() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, requestAnimationFrame(...n) {
    let i = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(i));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let i = setTimeout(...n);
    r.add(() => clearTimeout(i));
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
function Jt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function St(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var vr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(vr || {});
function ec(e, t) {
  let r = Fi();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function $n(e, t, r, n, i, o) {
  let a = Fi(), s = o !== void 0 ? Zu(o) : () => {
  };
  return St(e, ...i), Jt(e, ...t, ...r), a.nextFrame(() => {
    St(e, ...r), Jt(e, ...n), a.add(ec(e, (l) => (St(e, ...n, ...t), Jt(e, ...i), s(l))));
  }), a.add(() => St(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Te(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Hr = Symbol("TransitionContext");
var tc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(tc || {});
function rc() {
  return X(Hr, null) !== null;
}
function nc() {
  let e = X(Hr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ic() {
  let e = X(Vr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Vr = Symbol("NestingContext");
function Ht(e) {
  return "children" in e ? Ht(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ri(e) {
  let t = S([]), r = S(!1);
  q(() => r.value = !0), We(() => r.value = !1);
  function n(o, a = ve.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (z(a, { [ve.Unmount]() {
      t.value.splice(s, 1);
    }, [ve.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Ht(t) && r.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, ve.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Li = xt.RenderStrategy, dt = k({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!rc() && Iu())
    return () => B(pt, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = S(null), a = S("visible"), s = C(() => e.unmount ? ve.Unmount : ve.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = nc(), { register: c, unregister: f } = ic(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Ri(() => {
    v.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  q(() => {
    let w = c(d);
    We(w);
  }), ee(() => {
    if (s.value === ve.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      z(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = Te(e.enter), x = Te(e.enterFrom), A = Te(e.enterTo), P = Te(e.entered), E = Te(e.leave), $ = Te(e.leaveFrom), h = Te(e.leaveTo);
  q(() => {
    ee(() => {
      if (a.value === "visible") {
        let w = le(o);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let _ = p.value && !u.value, O = le(o);
    !O || !(O instanceof HTMLElement) || _ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? $n(O, b, x, A, P, (T) => {
      v.value = !1, T === vr.Finished && t("afterEnter");
    }) : $n(O, E, $, h, P, (T) => {
      v.value = !1, T === vr.Finished && (Ht(y) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return q(() => {
    it([l], (w, _, O) => {
      g(O), p.value = !1;
    }, { immediate: !0 });
  }), Z(Vr, y), Cu(C(() => z(a.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: w, show: _, enter: O, enterFrom: T, enterTo: D, entered: j, leave: W, leaveFrom: Q, leaveTo: F, ...N } = e;
    return H({ theirProps: N, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Li, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), oc = dt, pt = k({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = kr(), o = C(() => e.show === null && i !== null ? z(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  ee(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = S(o.value ? "visible" : "hidden"), s = Ri(() => {
    a.value = "hidden";
  }), l = S(!0), u = { show: o, appear: C(() => e.appear || !l.value) };
  return q(() => {
    ee(() => {
      l.value = !1, o.value ? a.value = "visible" : Ht(s) || (a.value = "hidden");
    });
  }), Z(Vr, s), Z(Hr, u), () => {
    let c = Oi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return H({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [B(oc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Li, visible: a.value === "visible", name: "Transition" });
  };
} });
const ac = {
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
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      m.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
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
      Dialog: ji,
      DialogPanel: Bi,
      TransitionRoot: pt,
      TransitionChild: dt
    });
  }
};
function Mi(e, t) {
  t = Fr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ct(t[r++])];
  return r && r == n ? e : void 0;
}
function Ur(e, t, r) {
  var n = e == null ? void 0 : Mi(e, t);
  return n === void 0 ? r : n;
}
var sc = function() {
  try {
    var e = Fe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const En = sc;
function qi(e, t, r) {
  t == "__proto__" && En ? En(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var lc = Object.prototype, uc = lc.hasOwnProperty;
function cc(e, t, r) {
  var n = e[t];
  (!(uc.call(e, t) && Dr(n, r)) || r === void 0 && !(t in e)) && qi(e, t, r);
}
function fc(e, t, r, n) {
  if (!se(e))
    return e;
  t = Fr(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = ct(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = se(c) ? c : $r(t[i + 1]) ? [] : {});
    }
    cc(s, l, u), s = s[l];
  }
  return e;
}
function Ni(e, t, r) {
  return e == null ? e : fc(e, t, r);
}
const dc = {
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
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return Ur(e.values, r);
        },
        set(t, r, n) {
          Ni(e.values, r, n);
        }
      })
    );
  }
}, pc = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), kn(e).then((t) => {
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
function ki(e) {
  return e && e.length ? e[0] : void 0;
}
const hc = {
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
        return Y(e.values, t);
      },
      first(t) {
        return ki(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, vc = {
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
        const n = "splade.redirect", i = "splade.refresh", o = "splade.toast";
        let a = null, s = !1, l = [];
        et(r, (u) => {
          !se(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
        }), a ? m.visit(a) : s ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
}, mc = {
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
        return Y(e.values, t);
      },
      ...this.values
    });
  }
};
function mr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => mr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => mr(t));
}
function Hi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Ui(t, Vi(null, r), e[r]);
  return t;
}
function Vi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ui(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Ui(e, Vi(t, n.toString()), r[n]));
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
  Hi(r);
}
var gc = "[object Boolean]";
function Wi(e) {
  return e === !0 || e === !1 || ye(e) && we(e) == gc;
}
function yc() {
  this.__data__ = new ue(), this.size = 0;
}
function bc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function wc(e) {
  return this.__data__.get(e);
}
function Oc(e) {
  return this.__data__.has(e);
}
var Sc = 200;
function $c(e, t) {
  var r = this.__data__;
  if (r instanceof ue) {
    var n = r.__data__;
    if (!st || n.length < Sc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ae(e) {
  var t = this.__data__ = new ue(e);
  this.size = t.size;
}
ae.prototype.clear = yc;
ae.prototype.delete = bc;
ae.prototype.get = wc;
ae.prototype.has = Oc;
ae.prototype.set = $c;
var Ec = "__lodash_hash_undefined__";
function _c(e) {
  return this.__data__.set(e, Ec), this;
}
function Tc(e) {
  return this.__data__.has(e);
}
function Pt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ce(); ++t < r; )
    this.add(e[t]);
}
Pt.prototype.add = Pt.prototype.push = _c;
Pt.prototype.has = Tc;
function xc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ac(e, t) {
  return e.has(t);
}
var Pc = 1, Ic = 2;
function Gi(e, t, r, n, i, o) {
  var a = r & Pc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Ic ? new Pt() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var v = e[f], y = t[f];
    if (n)
      var b = a ? n(y, v, f, t, e, o) : n(v, y, f, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!xc(t, function(x, A) {
        if (!Ac(d, A) && (v === x || i(v, x, r, n, o)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === y || i(v, y, r, n, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
var Cc = ne.Uint8Array;
const _n = Cc;
function Dc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function jc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Bc = 1, Fc = 2, Rc = "[object Boolean]", Lc = "[object Date]", Mc = "[object Error]", qc = "[object Map]", Nc = "[object Number]", kc = "[object RegExp]", Hc = "[object Set]", Vc = "[object String]", Uc = "[object Symbol]", Wc = "[object ArrayBuffer]", Gc = "[object DataView]", Tn = ge ? ge.prototype : void 0, Zt = Tn ? Tn.valueOf : void 0;
function zc(e, t, r, n, i, o, a) {
  switch (r) {
    case Gc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Wc:
      return !(e.byteLength != t.byteLength || !o(new _n(e), new _n(t)));
    case Rc:
    case Lc:
    case Nc:
      return Dr(+e, +t);
    case Mc:
      return e.name == t.name && e.message == t.message;
    case kc:
    case Vc:
      return e == t + "";
    case qc:
      var s = Dc;
    case Hc:
      var l = n & Bc;
      if (s || (s = jc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Fc, a.set(e, t);
      var c = Gi(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case Uc:
      if (Zt)
        return Zt.call(e) == Zt.call(t);
  }
  return !1;
}
function Kc(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Xc(e, t, r) {
  var n = t(e);
  return R(e) ? n : Kc(n, r(e));
}
function zi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function Qc() {
  return [];
}
var Yc = Object.prototype, Jc = Yc.propertyIsEnumerable, xn = Object.getOwnPropertySymbols, Zc = xn ? function(e) {
  return e == null ? [] : (e = Object(e), zi(xn(e), function(t) {
    return Jc.call(e, t);
  }));
} : Qc;
const ef = Zc;
function An(e) {
  return Xc(e, Ct, ef);
}
var tf = 1, rf = Object.prototype, nf = rf.hasOwnProperty;
function of(e, t, r, n, i, o) {
  var a = r & tf, s = An(e), l = s.length, u = An(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : nf.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var b = a; ++f < l; ) {
    p = s[f];
    var x = e[p], A = t[p];
    if (n)
      var P = a ? n(A, x, p, t, e, o) : n(x, A, p, e, t, o);
    if (!(P === void 0 ? x === A || i(x, A, r, n, o) : P)) {
      y = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (y && !b) {
    var E = e.constructor, $ = t.constructor;
    E != $ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof $ == "function" && $ instanceof $) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var af = Fe(ne, "DataView");
const gr = af;
var sf = Fe(ne, "Promise");
const yr = sf;
var lf = Fe(ne, "Set");
const br = lf;
var uf = Fe(ne, "WeakMap");
const wr = uf;
var Pn = "[object Map]", cf = "[object Object]", In = "[object Promise]", Cn = "[object Set]", Dn = "[object WeakMap]", jn = "[object DataView]", ff = Be(gr), df = Be(st), pf = Be(yr), hf = Be(br), vf = Be(wr), xe = we;
(gr && xe(new gr(new ArrayBuffer(1))) != jn || st && xe(new st()) != Pn || yr && xe(yr.resolve()) != In || br && xe(new br()) != Cn || wr && xe(new wr()) != Dn) && (xe = function(e) {
  var t = we(e), r = t == cf ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case ff:
        return jn;
      case df:
        return Pn;
      case pf:
        return In;
      case hf:
        return Cn;
      case vf:
        return Dn;
    }
  return t;
});
const Bn = xe;
var mf = 1, Fn = "[object Arguments]", Rn = "[object Array]", $t = "[object Object]", gf = Object.prototype, Ln = gf.hasOwnProperty;
function yf(e, t, r, n, i, o) {
  var a = R(e), s = R(t), l = a ? Rn : Bn(e), u = s ? Rn : Bn(t);
  l = l == Fn ? $t : l, u = u == Fn ? $t : u;
  var c = l == $t, f = u == $t, p = l == u;
  if (p && rr(e)) {
    if (!rr(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new ae()), a || Xn(e) ? Gi(e, t, r, n, i, o) : zc(e, t, l, r, n, i, o);
  if (!(r & mf)) {
    var d = c && Ln.call(e, "__wrapped__"), v = f && Ln.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return o || (o = new ae()), i(y, b, r, n, o);
    }
  }
  return p ? (o || (o = new ae()), of(e, t, r, n, i, o)) : !1;
}
function Vt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ye(e) && !ye(t) ? e !== e && t !== t : yf(e, t, r, n, Vt, i);
}
var bf = 1, wf = 2;
function Of(e, t, r, n) {
  var i = r.length, o = i, a = !n;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    s = r[i];
    var l = s[0], u = e[l], c = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new ae();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Vt(c, u, bf | wf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ki(e) {
  return e === e && !se(e);
}
function Sf(e) {
  for (var t = Ct(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Ki(i)];
  }
  return t;
}
function Xi(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function $f(e) {
  var t = Sf(e);
  return t.length == 1 && t[0][2] ? Xi(t[0][0], t[0][1]) : function(r) {
    return r === e || Of(r, e, t);
  };
}
function Ef(e, t) {
  return e != null && t in Object(e);
}
function _f(e, t) {
  return e != null && di(e, t, Ef);
}
var Tf = 1, xf = 2;
function Af(e, t) {
  return Cr(e) && Ki(t) ? Xi(ct(e), t) : function(r) {
    var n = Ur(r, e);
    return n === void 0 && n === t ? _f(r, e) : Vt(t, n, Tf | xf);
  };
}
function Pf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function If(e) {
  return function(t) {
    return Mi(t, e);
  };
}
function Cf(e) {
  return Cr(e) ? Pf(ct(e)) : If(e);
}
function ht(e) {
  return typeof e == "function" ? e : e == null ? Yn : typeof e == "object" ? R(e) ? Af(e[0], e[1]) : $f(e) : Cf(e);
}
function Qi(e, t) {
  var r = {};
  return t = ht(t), _r(e, function(n, i, o) {
    qi(r, i, t(n, i, o));
  }), r;
}
const Df = {
  inject: ["stack"],
  props: {
    action: {
      type: String,
      required: !1,
      default() {
        return m.isSsr ? "" : location.href;
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
      return Qi(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return Y(this.errors, e);
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
      m.confirm(
        Wi(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton
      ).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    request() {
      this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.forceFormData || mr(this.values) ? Hi(this.values) : this.values;
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
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$attrs",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) ? e[r] : Ur(e.values, r);
          },
          set(t, r, n) {
            Ni(e.values, r, n);
          }
        }
      )
    );
  }
}, jf = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    jsFlatpickrOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    modelValue: {
      type: [String, Array],
      required: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      element: null,
      flatpickrInstance: null
    };
  },
  watch: {
    model(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element);
  },
  beforeUnmount() {
    this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then(() => {
        this.flatpickrInstance = flatpickr(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (t, r, n) => {
              r != this.modelValue && this.$emit("update:modelValue", r);
            }
          })
        );
      });
    }
  },
  render() {
    return this.$slots.default({});
  }
}, Bf = { ref: "input" };
function Ff(e, t, r, n, i, o) {
  return L(), me("div", Bf, [
    Pe(e.$slots, "default")
  ], 512);
}
const Rf = /* @__PURE__ */ kt(jf, [["render", Ff]]), Lf = ["href", "onClick"], Mf = {
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
      m.confirm(
        Wi(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
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
    return (i, o) => (L(), me("a", {
      href: e.href,
      onClick: yo(r, ["prevent"])
    }, [
      Pe(i.$slots, "default")
    ], 8, Lf));
  }
}, qf = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: !1,
      default: !0
    },
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
      required: !1,
      default: !1
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
      closeButton: this.closeButton,
      Dialog: ji,
      DialogPanel: Bi,
      TransitionRoot: pt,
      TransitionChild: dt
    });
  }
};
function Nf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!It(t)) {
      var o = ht(r);
      t = Ct(t), r = function(s) {
        return o(i[s], s, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[o ? t[a] : a] : void 0;
  };
}
function kf(e, t, r, n) {
  for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Hf = /\s/;
function Vf(e) {
  for (var t = e.length; t-- && Hf.test(e.charAt(t)); )
    ;
  return t;
}
var Uf = /^\s+/;
function Wf(e) {
  return e && e.slice(0, Vf(e) + 1).replace(Uf, "");
}
var Mn = 0 / 0, Gf = /^[-+]0x[0-9a-f]+$/i, zf = /^0b[01]+$/i, Kf = /^0o[0-7]+$/i, Xf = parseInt;
function Or(e) {
  if (typeof e == "number")
    return e;
  if (jt(e))
    return Mn;
  if (se(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = se(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Wf(e);
  var r = zf.test(e);
  return r || Kf.test(e) ? Xf(e.slice(2), r ? 2 : 8) : Gf.test(e) ? Mn : +e;
}
var qn = 1 / 0, Qf = 17976931348623157e292;
function Yf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Or(e), e === qn || e === -qn) {
    var t = e < 0 ? -1 : 1;
    return t * Qf;
  }
  return e === e ? e : 0;
}
function Wr(e) {
  var t = Yf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Jf = Math.max;
function Zf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Wr(r);
  return i < 0 && (i = Jf(n + i, 0)), kf(e, ht(t), i);
}
var ed = Nf(Zf);
const td = ed, rd = {
  model: {
    get: function() {
      return this.modelValue;
    },
    set: function(e) {
      var t = this.choicesInstance ? this.choicesInstance.getValue(!0) : e;
      this.$emit("update:modelValue", t);
    }
  },
  props: {
    choices: {
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    jsChoicesOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: [String, Array],
      required: !1
    },
    placeholder: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.model) ? this.model.length > 0 : !1 : !(this.model === null || this.model === "");
    }
  },
  watch: {
    modelValue(e, t) {
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        Array.isArray(e) && this.choicesInstance.removeActiveItems(), e === null && (e = ""), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
      }
    }
  },
  mounted() {
    this.element = this.$refs.select.querySelector("select"), this.choices && this.initChoices(this.element);
  },
  beforeUnmount() {
    this.choices && this.choicesInstance && this.choicesInstance.destroy();
  },
  methods: {
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return td(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.placeholder)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input[placeholder]"
      );
      if (!e)
        return;
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText, e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      const t = Array.from(
        e.querySelectorAll("option:not([placeholder])")
      ).length, r = this;
      import("choices.js").then((n) => {
        const i = Object.assign({}, this.choices, this.jsChoicesOptions);
        r.choicesInstance = new n.default(e, i), this.choicesInstance.containerInner.element.setAttribute(
          "data-select-name",
          e.name
        ), this.updateHasSelectionAttribute(), e.addEventListener("change", function() {
          if (r.handlePlaceholderVisibility(), !r.multiple || t < 1)
            return;
          r.choicesInstance.getValue().length >= t && r.choicesInstance.hideDropdown();
        }), e.addEventListener("showDropdown", function() {
          if (r.multiple || !r.modelValue)
            return;
          const o = r.getItemOfCurrentModel(), a = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${o.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(a, 1), r.choicesInstance._highlightChoice(a);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  },
  render() {
    return this.$slots.default({});
  }
}, nd = { ref: "select" };
function id(e, t, r, n, i, o) {
  return L(), me("div", nd, [
    Pe(e.$slots, "default")
  ], 512);
}
const od = /* @__PURE__ */ kt(rd, [["render", id]]), ad = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Qi(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return Y(e, i);
      },
      hasFlash(i) {
        return Y(t, i);
      },
      hasShared(i) {
        return Y(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
var sd = function() {
  return ne.Date.now();
};
const er = sd;
var ld = "Expected a function", ud = Math.max, cd = Math.min;
function fd(e, t, r) {
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(ld);
  t = Or(t) || 0, se(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? ud(Or(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, a = e.apply(w, g), a;
  }
  function v(h) {
    return u = h, s = setTimeout(x, t), c ? d(h) : a;
  }
  function y(h) {
    var g = h - l, w = h - u, _ = t - g;
    return f ? cd(_, o - w) : _;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= o;
  }
  function x() {
    var h = er();
    if (b(h))
      return A(h);
    s = setTimeout(x, y(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : A(er());
  }
  function $() {
    var h = er(), g = b(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), d(l);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return $.cancel = P, $.flush = E, $;
}
function Yi(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function dd(e, t, r) {
  e = Br(e), t = Rt(t);
  var n = e.length;
  r = r === void 0 ? n : Yi(Wr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function pd(e, t) {
  var r = [];
  return Tr(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
  }), r;
}
function hd(e, t) {
  var r = R(e) ? zi : pd;
  return r(e, ht(t));
}
function Nn(e, t) {
  return Vt(e, t);
}
function vd(e, t) {
  var r = -1, n = It(e) ? Array(e.length) : [];
  return Tr(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function md(e, t) {
  var r = R(e) ? fi : vd;
  return r(e, ht(t));
}
function gd(e, t, r) {
  return e = Br(e), r = r == null ? 0 : Yi(Wr(r), 0, e.length), t = Rt(t), e.slice(r, r + t.length) == t;
}
const yd = {
  props: {
    striped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    columns: {
      type: Object,
      required: !0
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      visibleColumns: [],
      forcedVisibleSearchInputs: []
    };
  },
  computed: {
    columnsAreToggled() {
      return !Nn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const t = this.getCurrentQuery().columns || [];
    t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, et(e, (t, r) => {
        gd(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = hd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = md(r, (i) => i.key).sort();
      Nn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], ot(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: fd(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, 350),
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!dd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], R(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      et(e, (a, s) => {
        if (!R(a)) {
          n[s] = a;
          return;
        }
        a.length !== 0 && a.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      et(n, (a, s) => {
        a === "" || a === null || a === [] || (i && (i += "&"), i += `${s}=${a}`);
      }), i && (i = "?" + i);
      const o = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(o);
      m.replace(o).then(() => {
        typeof t < "u" && t && ot(() => {
          document.querySelector(`[name="${t.name}"]`).focus();
        });
      });
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: m.visit
    });
  }
}, bd = {
  props: {
    autosize: {
      type: Boolean,
      required: !1,
      default: !1
    },
    value: {
      type: String,
      required: !1
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    value() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        ot(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  },
  render() {
    return this.$slots.default({});
  }
}, wd = { ref: "textarea" };
function Od(e, t, r, n, i, o) {
  return L(), me("div", wd, [
    Pe(e.$slots, "default")
  ], 512);
}
const Sd = /* @__PURE__ */ kt(bd, [["render", Od]]), $d = {
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
      TransitionRoot: pt,
      TransitionChild: dt
    });
  }
}, Ed = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], _d = {
  computed: {
    toasts: function() {
      return m.toastsReversed.value;
    },
    hasBackdrop: function() {
      return m.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Ed,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: tt,
      TransitionRoot: pt,
      TransitionChild: dt
    });
  }
}, Td = {
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
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && ki(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, o) => {
              e.setToggle(i, o);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Cd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Y(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Y(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Y(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Y(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, _u).component(`${r}Confirm`, ac).component(`${r}Data`, dc).component(`${r}Defer`, pc).component(`${r}Errors`, hc).component(`${r}Event`, vc).component(`${r}Flash`, mc).component(`${r}Form`, Df).component(`${r}Input`, Rf).component(`${r}Modal`, qf).component(`${r}Render`, tt).component(`${r}Select`, od).component(`${r}State`, ad).component(`${r}Table`, yd).component(`${r}Textarea`, Sd).component(`${r}Toast`, $d).component(`${r}Toasts`, _d).component(`${r}Toggle`, Td).component(t.link_component, Mf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Dd(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((o) => {
    const a = o.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (o, a) => {
    if (o.method == "POST") {
      let s = "";
      o.on("data", (l) => s += l), o.on("end", async () => {
        const l = JSON.parse(s), u = r({
          components: l.components,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  m as Splade,
  vs as SpladeApp,
  Cd as SpladePlugin,
  Pd as renderSpladeApp,
  Dd as startServer
};
