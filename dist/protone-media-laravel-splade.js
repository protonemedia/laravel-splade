import Hn from "axios";
import { ref as S, computed as C, watch as it, openBlock as R, createBlock as qe, unref as ve, h as F, onMounted as q, createElementBlock as se, createElementVNode as rr, provide as Z, inject as X, nextTick as at, resolveDynamicComponent as aa, KeepAlive as oa, withCtx as Vn, normalizeStyle as sa, createVNode as la, Fragment as $r, renderList as ua, createCommentVNode as ca, onBeforeUnmount as fa, renderSlot as ge, resolveComponent as da, withDirectives as pa, vShow as ha, cloneVNode as va, watchEffect as ee, defineComponent as k, onUnmounted as Ge, Teleport as ma, reactive as ga, withModifiers as ya } from "vue";
function ba(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function wa(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Oa = wa();
const Sa = Oa;
function $a(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var _a = typeof global == "object" && global && global.Object === Object && global;
const Wn = _a;
var Ea = typeof self == "object" && self && self.Object === Object && self, Ta = Wn || Ea || Function("return this")();
const ne = Ta;
var xa = ne.Symbol;
const ye = xa;
var Un = Object.prototype, Aa = Un.hasOwnProperty, Pa = Un.toString, Ye = ye ? ye.toStringTag : void 0;
function Ia(e) {
  var t = Aa.call(e, Ye), r = e[Ye];
  try {
    e[Ye] = void 0;
    var n = !0;
  } catch {
  }
  var i = Pa.call(e);
  return n && (t ? e[Ye] = r : delete e[Ye]), i;
}
var Ca = Object.prototype, Da = Ca.toString;
function ja(e) {
  return Da.call(e);
}
var Fa = "[object Null]", Ba = "[object Undefined]", rn = ye ? ye.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? Ba : Fa : rn && rn in Object(e) ? Ia(e) : ja(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var Ra = "[object Arguments]";
function nn(e) {
  return be(e) && Oe(e) == Ra;
}
var Gn = Object.prototype, La = Gn.hasOwnProperty, Ma = Gn.propertyIsEnumerable, qa = nn(function() {
  return arguments;
}()) ? nn : function(e) {
  return be(e) && La.call(e, "callee") && !Ma.call(e, "callee");
};
const zn = qa;
var Na = Array.isArray;
const L = Na;
function ka() {
  return !1;
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, an = Kn && typeof module == "object" && module && !module.nodeType && module, Ha = an && an.exports === Kn, on = Ha ? ne.Buffer : void 0, Va = on ? on.isBuffer : void 0, Wa = Va || ka;
const nr = Wa;
var Ua = 9007199254740991, Ga = /^(?:0|[1-9]\d*)$/;
function _r(e, t) {
  var r = typeof e;
  return t = t == null ? Ua : t, !!t && (r == "number" || r != "symbol" && Ga.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var za = 9007199254740991;
function Er(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= za;
}
var Ka = "[object Arguments]", Xa = "[object Array]", Qa = "[object Boolean]", Ya = "[object Date]", Ja = "[object Error]", Za = "[object Function]", eo = "[object Map]", to = "[object Number]", ro = "[object Object]", no = "[object RegExp]", io = "[object Set]", ao = "[object String]", oo = "[object WeakMap]", so = "[object ArrayBuffer]", lo = "[object DataView]", uo = "[object Float32Array]", co = "[object Float64Array]", fo = "[object Int8Array]", po = "[object Int16Array]", ho = "[object Int32Array]", vo = "[object Uint8Array]", mo = "[object Uint8ClampedArray]", go = "[object Uint16Array]", yo = "[object Uint32Array]", I = {};
I[uo] = I[co] = I[fo] = I[po] = I[ho] = I[vo] = I[mo] = I[go] = I[yo] = !0;
I[Ka] = I[Xa] = I[so] = I[Qa] = I[lo] = I[Ya] = I[Ja] = I[Za] = I[eo] = I[to] = I[ro] = I[no] = I[io] = I[ao] = I[oo] = !1;
function bo(e) {
  return be(e) && Er(e.length) && !!I[Oe(e)];
}
function wo(e) {
  return function(t) {
    return e(t);
  };
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, et = Xn && typeof module == "object" && module && !module.nodeType && module, Oo = et && et.exports === Xn, Xt = Oo && Wn.process, So = function() {
  try {
    var e = et && et.require && et.require("util").types;
    return e || Xt && Xt.binding && Xt.binding("util");
  } catch {
  }
}();
const sn = So;
var ln = sn && sn.isTypedArray, $o = ln ? wo(ln) : bo;
const Qn = $o;
var _o = Object.prototype, Eo = _o.hasOwnProperty;
function To(e, t) {
  var r = L(e), n = !r && zn(e), i = !r && !n && nr(e), a = !r && !n && !i && Qn(e), o = r || n || i || a, s = o ? $a(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Eo.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || _r(u, l))) && s.push(u);
  return s;
}
var xo = Object.prototype;
function Ao(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || xo;
  return e === r;
}
function Po(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Io = Po(Object.keys, Object);
const Co = Io;
var Do = Object.prototype, jo = Do.hasOwnProperty;
function Fo(e) {
  if (!Ao(e))
    return Co(e);
  var t = [];
  for (var r in Object(e))
    jo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function le(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bo = "[object AsyncFunction]", Ro = "[object Function]", Lo = "[object GeneratorFunction]", Mo = "[object Proxy]";
function Yn(e) {
  if (!le(e))
    return !1;
  var t = Oe(e);
  return t == Ro || t == Lo || t == Bo || t == Mo;
}
function Dt(e) {
  return e != null && Er(e.length) && !Yn(e);
}
function jt(e) {
  return Dt(e) ? To(e) : Fo(e);
}
function Tr(e, t) {
  return e && Sa(e, t, jt);
}
function qo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Dt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var No = qo(Tr);
const xr = No;
function Jn(e) {
  return e;
}
function Zn(e) {
  return typeof e == "function" ? e : Jn;
}
function ko(e, t) {
  var r = L(e) ? ba : xr;
  return r(e, Zn(t));
}
var Ho = Array.prototype, Vo = Ho.reverse;
function Wo(e) {
  return e == null ? e : Vo.call(e);
}
const ir = S(1), Ie = typeof window > "u";
function Uo(e, t) {
  Ie || window.addEventListener("popstate", Go.bind(this)), Ir(t), Ft(t.head), Cr(e);
  const r = Ie ? "" : location.href, n = Ar(
    r,
    t.head,
    e,
    {},
    ir.value
  );
  ei(n);
}
function Go(e) {
  M.value = e.state, J.value = 0, Ft(M.value.head), Cr(M.value.html, M.value.rememberedState.scrollY);
}
function Ar(e, t, r, n, i) {
  const a = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return M.value = a, a;
}
function zo(e) {
  Ie || window.history.pushState(e, "", e.url);
}
function Ko(e) {
  const t = Ar(
    e,
    JSON.parse(JSON.stringify(M.value.head)),
    M.value.html,
    { ...M.value.rememberedState },
    M.value.pageVisitId
  );
  Ie || window.history.replaceState(t, "", t.url);
}
function ei(e) {
  Ie || window.history.replaceState(e, "", e.url);
}
const M = S({});
function Xo(e, t) {
  const r = e.request.responseURL;
  if (e.data.splade.modal && J.value++, Ir(e.data.splade), Ft(e.data.splade.head), e.data.splade.modal)
    return os(e.data.html, e.data.splade.modal);
  (r !== M.value.url || e.data.splade.refresh || J.value > 0) && (J.value = 0, t || ir.value++, Cr(e.data.html, 0));
  const n = Ar(
    r,
    e.data.splade.head,
    e.data.html,
    M.value.rememberedState ? { ...M.value.rememberedState } : {},
    ir.value
  );
  t ? ei(n) : zo(n);
}
const J = S(0);
function Qo() {
  J.value--, Ft(Jo(J.value));
}
const ti = S({}), ri = S({}), ni = (e) => ri.value[e], Yo = (e) => Object.keys(ni.value[e]).length > 0, ii = S({}), Jo = (e) => ii.value[e], ai = S({}), Zo = (e) => ai.value[e], ke = S([]), es = C(() => Wo(ke.value));
function ts(e) {
  ke.value.push(e);
}
function rs(e) {
  ke.value[e].dismissed = !0, ke.value[e].html = null;
}
const Pr = S(null);
function ns(e, t, r, n) {
  let i, a;
  const o = new Promise((s, l) => {
    i = s, a = l;
  });
  return Pr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, o;
}
function is() {
  Pr.value = null;
}
function Ir(e) {
  ti.value = e.shared ? e.shared : {}, ai.value[J.value] = e.flash ? e.flash : {}, ii.value[J.value] = e.head ? e.head : {}, ko(e.toasts ? e.toasts : [], (t) => {
    ke.value.push(t);
  }), ri.value[J.value] = e.errors ? e.errors : {};
}
function as(e) {
  fi.value(e);
}
function Ft(e) {
  li.value(e);
}
function Cr(e, t) {
  ui.value(e, t);
}
function os(e, t) {
  ci.value(e, t);
}
const oi = S({});
function si(e, t, r) {
  oi.value[e] = t, r && ss(e, t);
}
function ss(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ls(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : oi.value[e];
}
function ze(e, t, r, n, i) {
  Ie || si("scrollY", window.scrollY);
  const a = Hn({
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
  return a.then((o) => {
    Xo(o, i);
  }).catch((o) => {
    const s = o.response.data.splade;
    s && Ir(s), o.response.status != 422 && as(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function us(e) {
  return ze(e, "GET", {}, {}, !0);
}
function cs(e) {
  return ze(e, "GET", {}, {}, !1);
}
function fs(e) {
  return ze(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ds(e) {
  return ze(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function ps() {
  return ze(M.value.url, "GET", {}, { "X-Splade-Refresh": !0 }, !1);
}
const li = S(() => {
}), ui = S(() => {
}), ci = S(() => {
}), fi = S(() => {
}), m = {
  init: Uo,
  replace: us,
  visit: cs,
  modal: fs,
  slideover: ds,
  refresh: ps,
  request: ze,
  replaceUrlOfCurrentPage: Ko,
  setOnHead(e) {
    li.value = e;
  },
  setOnHtml(e) {
    ui.value = e;
  },
  setOnModal(e) {
    ci.value = e;
  },
  setOnServerError(e) {
    fi.value = e;
  },
  hasValidationErrors: Yo,
  validationErrors: ni,
  sharedData: ti,
  flashData: Zo,
  toasts: ke,
  toastsReversed: es,
  confirmModal: Pr,
  confirm: ns,
  clearConfirmModal: is,
  pushToast: ts,
  dismissToast: rs,
  restore: ls,
  remember: si,
  popStack: Qo,
  currentStack: J,
  pageVisitId: C(() => M.value.pageVisitId),
  isSsr: Ie
};
function Ne(e, t) {
  return e && Tr(e, Zn(t));
}
var hs = "[object String]";
function Qt(e) {
  return typeof e == "string" || !L(e) && be(e) && Oe(e) == hs;
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
      r.value = F({
        template: t.html
      });
    }
    return it(() => t.html, n, { immediate: !0 }), (i, a) => (R(), qe(ve(r)));
  }
}, vs = {
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
    const i = S(null);
    function a() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = i.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", o);
    }
    function o(s) {
      s.keyCode === 27 && n();
    }
    return q(() => a()), (s, l) => (R(), se("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      rr("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, ms = {
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
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Z("stack", 0);
    const r = S(), n = S([]), i = S(null), a = C(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function o() {
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
      Ne(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, at(() => {
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (R(), se("div", null, [
      (R(), qe(aa(ve(m).isSsr ? "div" : oa), {
        max: ve(l).max_keep_alive
      }, {
        default: Vn(() => [
          (R(), qe(tt, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: sa(ve(a)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      la(tt, { html: e.components }, null, 8, ["html"]),
      (R(!0), se($r, null, ua(ve(m).currentStack.value, (d) => (R(), qe(tt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ve(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (R(), qe(vs, {
        key: 0,
        html: i.value,
        onClose: o
      }, null, 8, ["html"])) : ca("", !0)
    ]));
  }
};
function jd(e) {
  return () => F(ms, e);
}
var gs = Object.prototype, ys = gs.hasOwnProperty;
function bs(e, t) {
  return e != null && ys.call(e, t);
}
var ws = "[object Symbol]";
function Bt(e) {
  return typeof e == "symbol" || be(e) && Oe(e) == ws;
}
var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ss = /^\w*$/;
function Dr(e, t) {
  if (L(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Bt(e) ? !0 : Ss.test(e) || !Os.test(e) || t != null && e in Object(t);
}
var $s = ne["__core-js_shared__"];
const Yt = $s;
var un = function() {
  var e = /[^.]+$/.exec(Yt && Yt.keys && Yt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _s(e) {
  return !!un && un in e;
}
var Es = Function.prototype, Ts = Es.toString;
function Fe(e) {
  if (e != null) {
    try {
      return Ts.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xs = /[\\^$.*+?()[\]{}|]/g, As = /^\[object .+?Constructor\]$/, Ps = Function.prototype, Is = Object.prototype, Cs = Ps.toString, Ds = Is.hasOwnProperty, js = RegExp(
  "^" + Cs.call(Ds).replace(xs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fs(e) {
  if (!le(e) || _s(e))
    return !1;
  var t = Yn(e) ? js : As;
  return t.test(Fe(e));
}
function Bs(e, t) {
  return e == null ? void 0 : e[t];
}
function Be(e, t) {
  var r = Bs(e, t);
  return Fs(r) ? r : void 0;
}
var Rs = Be(Object, "create");
const ot = Rs;
function Ls() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function Ms(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qs = "__lodash_hash_undefined__", Ns = Object.prototype, ks = Ns.hasOwnProperty;
function Hs(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === qs ? void 0 : r;
  }
  return ks.call(t, e) ? t[e] : void 0;
}
var Vs = Object.prototype, Ws = Vs.hasOwnProperty;
function Us(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Ws.call(t, e);
}
var Gs = "__lodash_hash_undefined__";
function zs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Gs : t, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Ls;
Ce.prototype.delete = Ms;
Ce.prototype.get = Hs;
Ce.prototype.has = Us;
Ce.prototype.set = zs;
function Ks() {
  this.__data__ = [], this.size = 0;
}
function jr(e, t) {
  return e === t || e !== e && t !== t;
}
function Rt(e, t) {
  for (var r = e.length; r--; )
    if (jr(e[r][0], t))
      return r;
  return -1;
}
var Xs = Array.prototype, Qs = Xs.splice;
function Ys(e) {
  var t = this.__data__, r = Rt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Qs.call(t, r, 1), --this.size, !0;
}
function Js(e) {
  var t = this.__data__, r = Rt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zs(e) {
  return Rt(this.__data__, e) > -1;
}
function el(e, t) {
  var r = this.__data__, n = Rt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Ks;
ce.prototype.delete = Ys;
ce.prototype.get = Js;
ce.prototype.has = Zs;
ce.prototype.set = el;
var tl = Be(ne, "Map");
const st = tl;
function rl() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (st || ce)(),
    string: new Ce()
  };
}
function nl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Lt(e, t) {
  var r = e.__data__;
  return nl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function il(e) {
  var t = Lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function al(e) {
  return Lt(this, e).get(e);
}
function ol(e) {
  return Lt(this, e).has(e);
}
function sl(e, t) {
  var r = Lt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = rl;
fe.prototype.delete = il;
fe.prototype.get = al;
fe.prototype.has = ol;
fe.prototype.set = sl;
var ll = "Expected a function";
function Fr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ll);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Fr.Cache || fe)(), r;
}
Fr.Cache = fe;
var ul = 500;
function cl(e) {
  var t = Fr(e, function(n) {
    return r.size === ul && r.clear(), n;
  }), r = t.cache;
  return t;
}
var fl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dl = /\\(\\)?/g, pl = cl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fl, function(r, n, i, a) {
    t.push(i ? a.replace(dl, "$1") : n || r);
  }), t;
});
const hl = pl;
function di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var vl = 1 / 0, cn = ye ? ye.prototype : void 0, fn = cn ? cn.toString : void 0;
function Mt(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return di(e, Mt) + "";
  if (Bt(e))
    return fn ? fn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -vl ? "-0" : t;
}
function Br(e) {
  return e == null ? "" : Mt(e);
}
function Rr(e, t) {
  return L(e) ? e : Dr(e, t) ? [e] : hl(Br(e));
}
var ml = 1 / 0;
function ct(e) {
  if (typeof e == "string" || Bt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ml ? "-0" : t;
}
function pi(e, t, r) {
  t = Rr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = ct(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Er(i) && _r(o, i) && (L(e) || zn(e)));
}
function Y(e, t) {
  return e != null && pi(e, t, bs);
}
const gl = {
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
    }), fa(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, a) => (R(), se("div", {
      ref_key: "root",
      ref: n
    }, [
      ge(i.$slots, "default")
    ], 512));
  }
};
function W(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function De(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function V(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Pe = Math.max, At = Math.min, He = Math.round;
function ar() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hi() {
  return !/^((?!chrome|android).)*safari/i.test(ar());
}
function Ve(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && V(e) && (i = e.offsetWidth > 0 && He(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && He(n.height) / e.offsetHeight || 1);
  var o = De(e) ? W(e) : window, s = o.visualViewport, l = !hi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
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
function Mr(e) {
  var t = W(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function yl(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bl(e) {
  return e === W(e) || !V(e) ? Mr(e) : yl(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Se(e) {
  return ((De(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function qr(e) {
  return Ve(Se(e)).left + Mr(e).scrollLeft;
}
function K(e) {
  return W(e).getComputedStyle(e);
}
function Nr(e) {
  var t = K(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function wl(e) {
  var t = e.getBoundingClientRect(), r = He(t.width) / e.offsetWidth || 1, n = He(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ol(e, t, r) {
  r === void 0 && (r = !1);
  var n = V(t), i = V(t) && wl(t), a = Se(t), o = Ve(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || Nr(a)) && (s = bl(t)), V(t) ? (l = Ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = qr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function vi(e) {
  var t = Ve(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function qt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Lr(e) ? e.host : null) || Se(e);
}
function mi(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : V(e) && Nr(e) ? e : mi(qt(e));
}
function rt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = mi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = W(n), o = i ? [a].concat(a.visualViewport || [], Nr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(rt(qt(o)));
}
function Sl(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function dn(e) {
  return !V(e) || K(e).position === "fixed" ? null : e.offsetParent;
}
function $l(e) {
  var t = /firefox/i.test(ar()), r = /Trident/i.test(ar());
  if (r && V(e)) {
    var n = K(e);
    if (n.position === "fixed")
      return null;
  }
  var i = qt(e);
  for (Lr(i) && (i = i.host); V(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var a = K(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Nt(e) {
  for (var t = W(e), r = dn(e); r && Sl(r) && K(r).position === "static"; )
    r = dn(r);
  return r && (te(r) === "html" || te(r) === "body" && K(r).position === "static") ? t : r || $l(e) || t;
}
var G = "top", re = "bottom", we = "right", ie = "left", kt = "auto", Ht = [G, re, we, ie], We = "start", lt = "end", _l = "clippingParents", gi = "viewport", Je = "popper", El = "reference", pn = /* @__PURE__ */ Ht.reduce(function(e, t) {
  return e.concat([t + "-" + We, t + "-" + lt]);
}, []), Tl = /* @__PURE__ */ [].concat(Ht, [kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + We, t + "-" + lt]);
}, []), xl = "beforeRead", Al = "read", Pl = "afterRead", Il = "beforeMain", Cl = "main", Dl = "afterMain", jl = "beforeWrite", Fl = "write", Bl = "afterWrite", or = [xl, Al, Pl, Il, Cl, Dl, jl, Fl, Bl];
function Rl(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function Ll(e) {
  var t = Rl(e);
  return or.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ml(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function pe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Te = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ql = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', hn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Nl(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), hn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(pe(Te, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Te, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          or.indexOf(t.phase) < 0 && console.error(pe(Te, t.name, '"phase"', "either " + or.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Te, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Te, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Te, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Te, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + hn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(pe(ql, String(t.name), n, n));
      });
    });
  });
}
function kl(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ae(e) {
  return e.split("-")[0];
}
function Hl(e) {
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
function Vl(e, t) {
  var r = W(e), n = Se(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = hi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + qr(e),
    y: l
  };
}
function Wl(e) {
  var t, r = Se(e), n = Mr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Pe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Pe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + qr(e), l = -n.scrollTop;
  return K(i || r).direction === "rtl" && (s += Pe(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Ul(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Lr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function sr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Gl(e, t) {
  var r = Ve(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function vn(e, t, r) {
  return t === gi ? sr(Vl(e, r)) : De(t) ? Gl(t, r) : sr(Wl(Se(e)));
}
function zl(e) {
  var t = rt(qt(e)), r = ["absolute", "fixed"].indexOf(K(e).position) >= 0, n = r && V(e) ? Nt(e) : e;
  return De(n) ? t.filter(function(i) {
    return De(i) && Ul(i, n) && te(i) !== "body";
  }) : [];
}
function Kl(e, t, r, n) {
  var i = t === "clippingParents" ? zl(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = vn(e, u, n);
    return l.top = Pe(c.top, l.top), l.right = At(c.right, l.right), l.bottom = At(c.bottom, l.bottom), l.left = Pe(c.left, l.left), l;
  }, vn(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ue(e) {
  return e.split("-")[1];
}
function yi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ae(n) : null, a = n ? Ue(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case G:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case re:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case we:
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
  var u = i ? yi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case We:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case lt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function wi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Xl(e) {
  return Object.assign({}, wi(), e);
}
function Ql(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function kr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? _l : s, u = r.rootBoundary, c = u === void 0 ? gi : u, f = r.elementContext, p = f === void 0 ? Je : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, x = Xl(typeof b != "number" ? b : Ql(b, Ht)), A = p === Je ? El : Je, P = e.rects.popper, _ = e.elements[v ? A : p], $ = Kl(De(_) ? _ : _.contextElement || Se(e.elements.popper), l, c, o), h = Ve(e.elements.reference), g = bi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = sr(Object.assign({}, P, g)), E = p === Je ? w : h, O = {
    top: $.top - E.top + x.top,
    bottom: E.bottom - $.bottom + x.bottom,
    left: $.left - E.left + x.left,
    right: E.right - $.right + x.right
  }, T = e.modifiersData.offset;
  if (p === Je && T) {
    var D = T[i];
    Object.keys(O).forEach(function(j) {
      var U = [we, re].indexOf(j) >= 0 ? 1 : -1, Q = [G, re].indexOf(j) >= 0 ? "y" : "x";
      O[j] += D[Q] * U;
    });
  }
  return O;
}
var mn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Yl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", gn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Jl(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? gn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gn, a),
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
        y(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: De(s) ? rt(s) : s.contextElement ? rt(s.contextElement) : [],
          popper: rt(l)
        };
        var P = Ll(Hl([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(T) {
          return T.enabled;
        }), process.env.NODE_ENV !== "production") {
          var _ = kl([].concat(P, c.options.modifiers), function(T) {
            var D = T.name;
            return D;
          });
          if (Nl(_), ae(c.options.placement) === kt) {
            var $ = c.orderedModifiers.find(function(T) {
              var D = T.name;
              return D === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = K(l), g = h.marginTop, w = h.marginRight, E = h.marginBottom, O = h.marginLeft;
          [g, w, E, O].some(function(T) {
            return parseFloat(T);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var x = c.elements, A = x.reference, P = x.popper;
          if (!yn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(mn);
            return;
          }
          c.rects = {
            reference: Ol(A, Nt(P), c.options.strategy === "fixed"),
            popper: vi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var _ = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (_ += 1, _ > 100)) {
              console.error(Yl);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var h = c.orderedModifiers[$], g = h.fn, w = h.options, E = w === void 0 ? {} : w, O = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: E,
              name: O,
              instance: d
            }) || c);
          }
        }
      },
      update: Ml(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!yn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(mn), d;
    d.setOptions(u).then(function(b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function v() {
      c.orderedModifiers.forEach(function(b) {
        var x = b.name, A = b.options, P = A === void 0 ? {} : A, _ = b.effect;
        if (typeof _ == "function") {
          var $ = _({
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
var Ot = {
  passive: !0
};
function Zl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = W(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ot);
  }), s && l.addEventListener("resize", r.update, Ot), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ot);
    }), s && l.removeEventListener("resize", r.update, Ot);
  };
}
const eu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zl,
  data: {}
};
function tu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = bi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ru = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tu,
  data: {}
};
var nu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function iu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: He(t * i) / i || 0,
    y: He(r * i) / i || 0
  };
}
function bn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = o.x, d = p === void 0 ? 0 : p, v = o.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var x = o.hasOwnProperty("x"), A = o.hasOwnProperty("y"), P = ie, _ = G, $ = window;
  if (u) {
    var h = Nt(r), g = "clientHeight", w = "clientWidth";
    if (h === W(r) && (h = Se(r), K(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === G || (i === ie || i === we) && a === lt) {
      _ = re;
      var E = f && h === $ && $.visualViewport ? $.visualViewport.height : h[g];
      y -= E - n.height, y *= l ? 1 : -1;
    }
    if (i === ie || (i === G || i === re) && a === lt) {
      P = we;
      var O = f && h === $ && $.visualViewport ? $.visualViewport.width : h[w];
      d -= O - n.width, d *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: s
  }, u && nu), D = c === !0 ? iu({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = D.x, y = D.y, l) {
    var j;
    return Object.assign({}, T, (j = {}, j[_] = A ? "0" : "", j[P] = x ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, T, (t = {}, t[_] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function au(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = K(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ae(t.placement),
    variation: Ue(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bn(Object.assign({}, c, {
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
  fn: au,
  data: {}
};
function su(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !V(a) || !te(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function lu(e) {
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
      var i = t.elements[n], a = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !V(i) || !te(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const uu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: su,
  effect: lu,
  requires: ["computeStyles"]
};
var cu = [eu, ru, ou, uu], fu = /* @__PURE__ */ Jl({
  defaultModifiers: cu
});
function du(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e, t, r) {
  return Pe(e, At(t, r));
}
function pu(e, t, r) {
  var n = Tt(e, t, r);
  return n > r ? r : n;
}
function hu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = kr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = ae(t.placement), A = Ue(t.placement), P = !A, _ = yi(x), $ = du(_), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, E = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, O = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (a) {
      var j, U = _ === "y" ? G : ie, Q = _ === "y" ? re : we, B = _ === "y" ? "height" : "width", N = h[_], mt = N + b[U], $e = N - b[Q], gt = d ? -w[B] / 2 : 0, Ut = A === We ? g[B] : w[B], Xe = A === We ? -w[B] : -g[B], yt = t.elements.arrow, Le = d && yt ? vi(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wi(), Qe = de[U], bt = de[Q], _e = Tt(0, g[B], Le[B]), Gt = P ? g[B] / 2 - gt - _e - Qe - O.mainAxis : Ut - _e - Qe - O.mainAxis, Zi = P ? -g[B] / 2 + gt + _e + bt + O.mainAxis : Xe + _e + bt + O.mainAxis, zt = t.elements.arrow && Nt(t.elements.arrow), ea = zt ? _ === "y" ? zt.clientTop || 0 : zt.clientLeft || 0 : 0, zr = (j = T == null ? void 0 : T[_]) != null ? j : 0, ta = N + Gt - zr - ea, ra = N + Zi - zr, Kr = Tt(d ? At(mt, ta) : mt, N, d ? Pe($e, ra) : $e);
      h[_] = Kr, D[_] = Kr - N;
    }
    if (s) {
      var Xr, na = _ === "x" ? G : ie, ia = _ === "x" ? re : we, Ee = h[$], wt = $ === "y" ? "height" : "width", Qr = Ee + b[na], Yr = Ee - b[ia], Kt = [G, ie].indexOf(x) !== -1, Jr = (Xr = T == null ? void 0 : T[$]) != null ? Xr : 0, Zr = Kt ? Qr : Ee - g[wt] - w[wt] - Jr + O.altAxis, en = Kt ? Ee + g[wt] + w[wt] - Jr - O.altAxis : Yr, tn = d && Kt ? pu(Zr, Ee, en) : Tt(d ? Zr : Qr, Ee, d ? en : Yr);
      h[$] = tn, D[$] = tn - Ee;
    }
    t.modifiersData[n] = D;
  }
}
const vu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: hu,
  requiresIfExists: ["offset"]
};
var mu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return mu[t];
  });
}
var gu = {
  start: "end",
  end: "start"
};
function wn(e) {
  return e.replace(/start|end/g, function(t) {
    return gu[t];
  });
}
function yu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Tl : l, c = Ue(n), f = c ? s ? pn : pn.filter(function(v) {
    return Ue(v) === c;
  }) : Ht, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = kr(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[ae(y)], v;
  }, {});
  return Object.keys(d).sort(function(v, y) {
    return d[v] - d[y];
  });
}
function bu(e) {
  if (ae(e) === kt)
    return [];
  var t = xt(e);
  return [wn(e), t, wn(t)];
}
function wu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, x = ae(b), A = x === b, P = l || (A || !v ? [xt(b)] : bu(b)), _ = [b].concat(P).reduce(function(Le, de) {
      return Le.concat(ae(de) === kt ? yu(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : de);
    }, []), $ = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, E = _[0], O = 0; O < _.length; O++) {
      var T = _[O], D = ae(T), j = Ue(T) === We, U = [G, re].indexOf(D) >= 0, Q = U ? "width" : "height", B = kr(t, {
        placement: T,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = U ? j ? we : ie : j ? re : G;
      $[Q] > h[Q] && (N = xt(N));
      var mt = xt(N), $e = [];
      if (a && $e.push(B[D] <= 0), s && $e.push(B[N] <= 0, B[mt] <= 0), $e.every(function(Le) {
        return Le;
      })) {
        E = T, w = !1;
        break;
      }
      g.set(T, $e);
    }
    if (w)
      for (var gt = v ? 3 : 1, Ut = function(de) {
        var Qe = _.find(function(bt) {
          var _e = g.get(bt);
          if (_e)
            return _e.slice(0, de).every(function(Gt) {
              return Gt;
            });
        });
        if (Qe)
          return E = Qe, "break";
      }, Xe = gt; Xe > 0; Xe--) {
        var yt = Ut(Xe);
        if (yt === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[n]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const Ou = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Su = {
  components: {
    OnClickOutside: gl
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
    this.popper = fu(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [Ou, vu]
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
}, $u = { ref: "button" }, _u = { ref: "tooltip" };
function Eu(e, t, r, n, i, a) {
  const o = da("OnClickOutside");
  return R(), qe(o, { do: a.hide }, {
    default: Vn(() => [
      rr("button", $u, [
        ge(e.$slots, "button", { toggle: a.toggle })
      ], 512),
      pa(rr("div", _u, [
        ge(e.$slots, "default", { hide: a.hide })
      ], 512), [
        [ha, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const Tu = /* @__PURE__ */ ft(Su, [["render", Eu]]);
function z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, z), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function H({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = xu(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return Jt(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return z(l, { [0]() {
      return null;
    }, [1]() {
      return Jt({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Jt(s);
}
function Jt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: o, ...s } = Si(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (o === "template") {
    if (l = Oi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!Au(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return va(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return F(o, Object.assign({}, s, u), l);
}
function Oi(e) {
  return e.flatMap((t) => t.type === $r ? Oi(t.children) : [t]);
}
function xu(...e) {
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
    Object.assign(t, { [n](i, ...a) {
      let o = r[n];
      for (let s of o) {
        if (i != null && i.defaultPrevented)
          return;
        s(i, ...a);
      }
    } });
  return t;
}
function Si(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Au(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Pu = 0;
function Iu() {
  return ++Pu;
}
function Re() {
  return Iu();
}
var $i = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($i || {});
function ue(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let _i = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Cu() {
  return Hr() !== null;
}
function Hr() {
  return X(_i, null);
}
function Du(e) {
  Z(_i, e);
}
function Ke(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ue(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let lr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ut = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ut || {}), Ei = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ei || {}), ju = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ju || {});
function Fu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lr));
}
var Ti = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ti || {});
function Bu(e, t = 0) {
  var r;
  return e === ((r = Ke(e)) == null ? void 0 : r.body) ? !1 : z(t, { [0]() {
    return e.matches(lr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(lr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ru = ["textarea", "input"].join(",");
function Lu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ru)) != null ? r : !1;
}
function Mu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ur(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, a = Array.isArray(e) ? r ? Mu(e) : e : Fu(e), o = i.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(o)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = a.length, p;
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
    p = a[d], p == null || p.focus(u), c += s;
  } while (p !== i.activeElement);
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Lu(p) && p.select(), 2;
}
function cr(e, t, r) {
  typeof window < "u" && ee((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function qu(e, t, r = C(() => !0)) {
  function n(i, a) {
    if (!r.value || i.defaultPrevented)
      return;
    let o = a(i);
    if (o === null || !o.ownerDocument.documentElement.contains(o))
      return;
    let s = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of s) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : ue(l);
      if (u != null && u.contains(o))
        return;
    }
    return !Bu(o, Ti.Loose) && o.tabIndex !== -1 && i.preventDefault(), t(i, o);
  }
  cr("click", (i) => n(i, (a) => a.target), !0), cr("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var It = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(It || {});
let fr = k({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var dr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(dr || {});
function Nu() {
  let e = S(0);
  return cr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function xi(e, t, r, n) {
  typeof window < "u" && ee((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var Ai = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ai || {});
let Ze = Object.assign(k({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = S(null);
  n({ el: i, $el: i });
  let a = C(() => Ke(i));
  ku({ ownerDocument: a }, C(() => Boolean(e.features & 16)));
  let o = Hu({ ownerDocument: a, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Vu({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, C(() => Boolean(e.features & 8)));
  let s = Nu();
  function l() {
    let u = ue(i);
    !u || z(s.value, { [dr.Forwards]: () => ur(u, ut.First), [dr.Backwards]: () => ur(u, ut.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return F($r, [Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable }), H({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable })]);
  };
} }), { features: Ai });
function ku({ ownerDocument: e }, t) {
  let r = S(null), n = { value: !1 };
  q(() => {
    it(t, (i, a) => {
      var o;
      i !== a && (!t.value || (n.value = !0, r.value || (r.value = (o = e.value) == null ? void 0 : o.activeElement)));
    }, { immediate: !0 }), it(t, (i, a, o) => {
      i !== a && (!t.value || o(() => {
        n.value !== !1 && (n.value = !1, nt(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function Hu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = S(null);
  return q(() => {
    it([t, r, n], (a, o) => {
      if (a.every((l, u) => (o == null ? void 0 : o[u]) === l) || !n.value)
        return;
      let s = ue(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = ue(r), f = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (s.contains(f)) {
          i.value = f;
          return;
        }
        c ? nt(c) : ur(s, ut.First | ut.NoScroll) === Ei.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Vu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  xi((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Wu(s, u) ? (n.value = u, nt(u)) : (o.preventDefault(), o.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function Wu(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let On = "body > *", Me = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function Sn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function $n(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Uu(e, t = S(!0)) {
  ee((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ke(n);
    if (i) {
      Me.add(n);
      for (let a of he.keys())
        a.contains(n) && ($n(a), he.delete(a));
      i.querySelectorAll(On).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of Me)
            if (a.contains(o))
              return;
          Me.size === 1 && (he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Sn(a));
        }
      }), r(() => {
        if (Me.delete(n), Me.size > 0)
          i.querySelectorAll(On).forEach((a) => {
            if (a instanceof HTMLElement && !he.has(a)) {
              for (let o of Me)
                if (a.contains(o))
                  return;
              he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Sn(a);
            }
          });
        else
          for (let a of he.keys())
            $n(a), he.delete(a);
      });
    }
  });
}
let Pi = Symbol("ForcePortalRootContext");
function Gu() {
  return X(Pi, !1);
}
let pr = k({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Z(Pi, e.force), () => {
    let { force: n, ...i } = e;
    return H({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function zu(e) {
  let t = Ke(e);
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
let Ii = k({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = S(null), i = C(() => Ke(n)), a = Gu(), o = X(Ci, null), s = S(a === !0 || o == null ? zu(n.value) : o.resolveTarget());
  return ee(() => {
    a || o != null && (s.value = o.resolveTarget());
  }), Ge(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return F(ma, { to: s.value }, H({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ci = Symbol("PortalGroupContext"), Ku = k({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ga({ resolveTarget() {
    return e.target;
  } });
  return Z(Ci, n), () => {
    let { target: i, ...a } = e;
    return H({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Di = Symbol("StackContext");
var hr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(hr || {});
function Xu() {
  return X(Di, () => {
  });
}
function Qu({ type: e, element: t, onUpdate: r }) {
  let n = Xu();
  function i(...a) {
    r == null || r(...a), n(...a);
  }
  q(() => {
    i(0, e, t), Ge(() => {
      i(1, e, t);
    });
  }), Z(Di, i);
}
let ji = Symbol("DescriptionContext");
function Yu() {
  let e = X(ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ju({ slot: e = S({}), name: t = "Description", props: r = {} } = {}) {
  let n = S([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return Z(ji, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Fd = k({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Yu(), i = `headlessui-description-${Re()}`;
  return q(() => Ge(n.register(i))), () => {
    let { name: a = "Description", slot: o = S({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return H({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
var Zu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zu || {});
let vr = Symbol("DialogContext");
function dt(e) {
  let t = X(vr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, dt), r;
  }
  return t;
}
let St = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Fi = k({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: St }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = S(!1);
  q(() => {
    o.value = !0;
  });
  let s = S(0), l = Hr(), u = C(() => e.open === St && l !== null ? z(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = S(/* @__PURE__ */ new Set()), f = S(null), p = S(null), d = C(() => Ke(f));
  if (i({ el: f, $el: f }), !(e.open !== St || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === St ? void 0 : e.open}`);
  let v = C(() => o.value && u.value ? 0 : 1), y = C(() => v.value === 0), b = C(() => s.value > 1), x = X(vr, null) !== null, A = C(() => b.value ? "parent" : "leaf");
  Uu(f, C(() => b.value ? y.value : !1)), Qu({ type: "Dialog", element: f, onUpdate: (g, w, E) => {
    if (w === "Dialog")
      return z(g, { [hr.Add]() {
        c.value.add(E), s.value += 1;
      }, [hr.Remove]() {
        c.value.delete(E), s.value -= 1;
      } });
  } });
  let P = Ju({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), _ = `headlessui-dialog-${Re()}`, $ = S(null), h = { titleId: $, panelRef: S(null), dialogState: v, setTitleId(g) {
    $.value !== g && ($.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(vr, h), qu(() => {
    var g, w, E;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((O) => !(!(O instanceof HTMLElement) || O.contains(ue(p)) || h.panelRef.value && O.contains(h.panelRef.value))), (E = h.panelRef.value) != null ? E : f.value];
  }, (g, w) => {
    h.close(), at(() => w == null ? void 0 : w.focus());
  }, C(() => v.value === 0 && !b.value)), xi((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === $i.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), ee((g) => {
    var w;
    if (v.value !== 0 || x)
      return;
    let E = d.value;
    if (!E)
      return;
    let O = E == null ? void 0 : E.documentElement, T = (w = E.defaultView) != null ? w : window, D = O.style.overflow, j = O.style.paddingRight, U = T.innerWidth - O.clientWidth;
    if (O.style.overflow = "hidden", U > 0) {
      let Q = O.clientWidth - O.offsetWidth, B = U - Q;
      O.style.paddingRight = `${B}px`;
    }
    g(() => {
      O.style.overflow = D, O.style.paddingRight = j;
    });
  }), ee((g) => {
    if (v.value !== 0)
      return;
    let w = ue(f);
    if (!w)
      return;
    let E = new IntersectionObserver((O) => {
      for (let T of O)
        T.boundingClientRect.x === 0 && T.boundingClientRect.y === 0 && T.boundingClientRect.width === 0 && T.boundingClientRect.height === 0 && h.close();
    });
    E.observe(w), g(() => E.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: _, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: w, initialFocus: E, ...O } = e, T = { open: v.value === 0 };
    return F(pr, { force: !0 }, () => [F(Ii, () => F(Ku, { target: f.value }, () => F(pr, { force: !1 }, () => F(Ze, { initialFocus: E, containers: c, features: y.value ? z(A.value, { parent: Ze.features.RestoreFocus, leaf: Ze.features.All & ~Ze.features.FocusLock }) : Ze.features.None }, () => H({ ourProps: g, theirProps: O, slot: T, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), F(fr, { features: It.Hidden, ref: p })]);
  };
} });
k({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = dt("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => H({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
k({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Re()}`, o = S(null);
  return n({ el: o, $el: o }), q(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: a, ref: o, "aria-hidden": !0 };
    return F(pr, { force: !0 }, () => F(Ii, () => H({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Bi = k({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogPanel"), a = `headlessui-dialog-panel-${Re()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: a, ref: i.panelRef, onClick: o };
    return H({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
k({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = dt("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return q(() => {
    n.setTitleId(i), Ge(() => n.setTitleId(null));
  }), () => H({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function ec(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Ri() {
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
function Zt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var mr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(mr || {});
function tc(e, t) {
  let r = Ri();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function _n(e, t, r, n, i, a) {
  let o = Ri(), s = a !== void 0 ? ec(a) : () => {
  };
  return $t(e, ...i), Zt(e, ...t, ...r), o.nextFrame(() => {
    $t(e, ...r), Zt(e, ...n), o.add(tc(e, (l) => ($t(e, ...n, ...t), Zt(e, ...i), s(l))));
  }), o.add(() => $t(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function xe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Vr = Symbol("TransitionContext");
var rc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rc || {});
function nc() {
  return X(Vr, null) !== null;
}
function ic() {
  let e = X(Vr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ac() {
  let e = X(Wr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Wr = Symbol("NestingContext");
function Vt(e) {
  return "children" in e ? Vt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Li(e) {
  let t = S([]), r = S(!1);
  q(() => r.value = !0), Ge(() => r.value = !1);
  function n(a, o = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (z(o, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Vt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Mi = Pt.RenderStrategy, pt = k({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!nc() && Cu())
    return () => F(ht, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = S(null), o = S("visible"), s = C(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = ic(), { register: c, unregister: f } = ac(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Li(() => {
    v.value || (o.value = "hidden", f(d), t("afterLeave"));
  });
  q(() => {
    let w = c(d);
    Ge(w);
  }), ee(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      z(o.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = xe(e.enter), x = xe(e.enterFrom), A = xe(e.enterTo), P = xe(e.entered), _ = xe(e.leave), $ = xe(e.leaveFrom), h = xe(e.leaveTo);
  q(() => {
    ee(() => {
      if (o.value === "visible") {
        let w = ue(a);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let E = p.value && !u.value, O = ue(a);
    !O || !(O instanceof HTMLElement) || E || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? _n(O, b, x, A, P, (T) => {
      v.value = !1, T === mr.Finished && t("afterEnter");
    }) : _n(O, _, $, h, P, (T) => {
      v.value = !1, T === mr.Finished && (Vt(y) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return q(() => {
    it([l], (w, E, O) => {
      g(O), p.value = !1;
    }, { immediate: !0 });
  }), Z(Wr, y), Du(C(() => z(o.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: w, show: E, enter: O, enterFrom: T, enterTo: D, entered: j, leave: U, leaveFrom: Q, leaveTo: B, ...N } = e;
    return H({ theirProps: N, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Mi, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), oc = pt, ht = k({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), a = C(() => e.show === null && i !== null ? z(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  ee(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = S(a.value ? "visible" : "hidden"), s = Li(() => {
    o.value = "hidden";
  }), l = S(!0), u = { show: a, appear: C(() => e.appear || !l.value) };
  return q(() => {
    ee(() => {
      l.value = !1, a.value ? o.value = "visible" : Vt(s) || (o.value = "hidden");
    });
  }), Z(Wr, s), Z(Vr, u), () => {
    let c = Si(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return H({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [F(oc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Mi, visible: o.value === "visible", name: "Transition" });
  };
} });
const sc = {
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
      Dialog: Fi,
      DialogPanel: Bi,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
};
function qi(e, t) {
  t = Rr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ct(t[r++])];
  return r && r == n ? e : void 0;
}
function Ur(e, t, r) {
  var n = e == null ? void 0 : qi(e, t);
  return n === void 0 ? r : n;
}
var lc = function() {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const En = lc;
function Ni(e, t, r) {
  t == "__proto__" && En ? En(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var uc = Object.prototype, cc = uc.hasOwnProperty;
function fc(e, t, r) {
  var n = e[t];
  (!(cc.call(e, t) && jr(n, r)) || r === void 0 && !(t in e)) && Ni(e, t, r);
}
function dc(e, t, r, n) {
  if (!le(e))
    return e;
  t = Rr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = ct(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = le(c) ? c : _r(t[i + 1]) ? [] : {});
    }
    fc(s, l, u), s = s[l];
  }
  return e;
}
function ki(e, t, r) {
  return e == null ? e : dc(e, t, r);
}
const pc = {
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
          ki(e.values, r, n);
        }
      })
    );
  }
}, hc = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Hn(e).then((t) => {
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
function Hi(e) {
  return e && e.length ? e[0] : void 0;
}
const vc = {
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
        return Hi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, mc = {
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
        const n = "splade.redirect", i = "splade.refresh", a = "splade.toast";
        let o = null, s = !1, l = [];
        Ne(r, (u) => {
          !le(u) || (n in u && (o = u[n]), i in u && (s = u[i]), a in u && l.push(u));
        }), o ? m.visit(o) : s ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
}, gc = {
  props: {
    form: {
      type: Object,
      required: !0
    },
    field: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      required: !0
    }
  },
  data() {
    return {
      filenames: []
    };
  },
  methods: {
    handleFileInput(e) {
      const t = Object.values(e.target.files);
      this.form.$put(this.field, this.multiple ? t : t[0]), this.filenames = [], t.forEach((r) => {
        this.filenames.push(r.name);
      });
    }
  }
}, yc = { ref: "file" };
function bc(e, t, r, n, i, a) {
  return R(), se("div", yc, [
    ge(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const wc = /* @__PURE__ */ ft(gc, [["render", bc]]), Oc = {
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
function gr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => gr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => gr(t));
}
function Vi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Ui(t, Wi(null, r), e[r]);
  return t;
}
function Wi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ui(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Ui(e, Wi(t, n.toString()), r[n]));
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
  Vi(r);
}
var Sc = "[object Boolean]";
function Gi(e) {
  return e === !0 || e === !1 || be(e) && Oe(e) == Sc;
}
function $c() {
  this.__data__ = new ce(), this.size = 0;
}
function _c(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ec(e) {
  return this.__data__.get(e);
}
function Tc(e) {
  return this.__data__.has(e);
}
var xc = 200;
function Ac(e, t) {
  var r = this.__data__;
  if (r instanceof ce) {
    var n = r.__data__;
    if (!st || n.length < xc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function oe(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
oe.prototype.clear = $c;
oe.prototype.delete = _c;
oe.prototype.get = Ec;
oe.prototype.has = Tc;
oe.prototype.set = Ac;
var Pc = "__lodash_hash_undefined__";
function Ic(e) {
  return this.__data__.set(e, Pc), this;
}
function Cc(e) {
  return this.__data__.has(e);
}
function Ct(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < r; )
    this.add(e[t]);
}
Ct.prototype.add = Ct.prototype.push = Ic;
Ct.prototype.has = Cc;
function Dc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function jc(e, t) {
  return e.has(t);
}
var Fc = 1, Bc = 2;
function zi(e, t, r, n, i, a) {
  var o = r & Fc, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Bc ? new Ct() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var v = e[f], y = t[f];
    if (n)
      var b = o ? n(y, v, f, t, e, a) : n(v, y, f, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Dc(t, function(x, A) {
        if (!jc(d, A) && (v === x || i(v, x, r, n, a)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === y || i(v, y, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Rc = ne.Uint8Array;
const Tn = Rc;
function Lc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Mc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var qc = 1, Nc = 2, kc = "[object Boolean]", Hc = "[object Date]", Vc = "[object Error]", Wc = "[object Map]", Uc = "[object Number]", Gc = "[object RegExp]", zc = "[object Set]", Kc = "[object String]", Xc = "[object Symbol]", Qc = "[object ArrayBuffer]", Yc = "[object DataView]", xn = ye ? ye.prototype : void 0, er = xn ? xn.valueOf : void 0;
function Jc(e, t, r, n, i, a, o) {
  switch (r) {
    case Yc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Qc:
      return !(e.byteLength != t.byteLength || !a(new Tn(e), new Tn(t)));
    case kc:
    case Hc:
    case Uc:
      return jr(+e, +t);
    case Vc:
      return e.name == t.name && e.message == t.message;
    case Gc:
    case Kc:
      return e == t + "";
    case Wc:
      var s = Lc;
    case zc:
      var l = n & qc;
      if (s || (s = Mc), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Nc, o.set(e, t);
      var c = zi(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case Xc:
      if (er)
        return er.call(e) == er.call(t);
  }
  return !1;
}
function Zc(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function ef(e, t, r) {
  var n = t(e);
  return L(e) ? n : Zc(n, r(e));
}
function Ki(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function tf() {
  return [];
}
var rf = Object.prototype, nf = rf.propertyIsEnumerable, An = Object.getOwnPropertySymbols, af = An ? function(e) {
  return e == null ? [] : (e = Object(e), Ki(An(e), function(t) {
    return nf.call(e, t);
  }));
} : tf;
const of = af;
function Pn(e) {
  return ef(e, jt, of);
}
var sf = 1, lf = Object.prototype, uf = lf.hasOwnProperty;
function cf(e, t, r, n, i, a) {
  var o = r & sf, s = Pn(e), l = s.length, u = Pn(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : uf.call(t, p)))
      return !1;
  }
  var d = a.get(e), v = a.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var b = o; ++f < l; ) {
    p = s[f];
    var x = e[p], A = t[p];
    if (n)
      var P = o ? n(A, x, p, t, e, a) : n(x, A, p, e, t, a);
    if (!(P === void 0 ? x === A || i(x, A, r, n, a) : P)) {
      y = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (y && !b) {
    var _ = e.constructor, $ = t.constructor;
    _ != $ && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof $ == "function" && $ instanceof $) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var ff = Be(ne, "DataView");
const yr = ff;
var df = Be(ne, "Promise");
const br = df;
var pf = Be(ne, "Set");
const wr = pf;
var hf = Be(ne, "WeakMap");
const Or = hf;
var In = "[object Map]", vf = "[object Object]", Cn = "[object Promise]", Dn = "[object Set]", jn = "[object WeakMap]", Fn = "[object DataView]", mf = Fe(yr), gf = Fe(st), yf = Fe(br), bf = Fe(wr), wf = Fe(Or), Ae = Oe;
(yr && Ae(new yr(new ArrayBuffer(1))) != Fn || st && Ae(new st()) != In || br && Ae(br.resolve()) != Cn || wr && Ae(new wr()) != Dn || Or && Ae(new Or()) != jn) && (Ae = function(e) {
  var t = Oe(e), r = t == vf ? e.constructor : void 0, n = r ? Fe(r) : "";
  if (n)
    switch (n) {
      case mf:
        return Fn;
      case gf:
        return In;
      case yf:
        return Cn;
      case bf:
        return Dn;
      case wf:
        return jn;
    }
  return t;
});
const Bn = Ae;
var Of = 1, Rn = "[object Arguments]", Ln = "[object Array]", _t = "[object Object]", Sf = Object.prototype, Mn = Sf.hasOwnProperty;
function $f(e, t, r, n, i, a) {
  var o = L(e), s = L(t), l = o ? Ln : Bn(e), u = s ? Ln : Bn(t);
  l = l == Rn ? _t : l, u = u == Rn ? _t : u;
  var c = l == _t, f = u == _t, p = l == u;
  if (p && nr(e)) {
    if (!nr(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new oe()), o || Qn(e) ? zi(e, t, r, n, i, a) : Jc(e, t, l, r, n, i, a);
  if (!(r & Of)) {
    var d = c && Mn.call(e, "__wrapped__"), v = f && Mn.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return a || (a = new oe()), i(y, b, r, n, a);
    }
  }
  return p ? (a || (a = new oe()), cf(e, t, r, n, i, a)) : !1;
}
function Wt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : $f(e, t, r, n, Wt, i);
}
var _f = 1, Ef = 2;
function Tf(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], u = e[l], c = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new oe();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Wt(c, u, _f | Ef, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Xi(e) {
  return e === e && !le(e);
}
function xf(e) {
  for (var t = jt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Xi(i)];
  }
  return t;
}
function Qi(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Af(e) {
  var t = xf(e);
  return t.length == 1 && t[0][2] ? Qi(t[0][0], t[0][1]) : function(r) {
    return r === e || Tf(r, e, t);
  };
}
function Pf(e, t) {
  return e != null && t in Object(e);
}
function If(e, t) {
  return e != null && pi(e, t, Pf);
}
var Cf = 1, Df = 2;
function jf(e, t) {
  return Dr(e) && Xi(t) ? Qi(ct(e), t) : function(r) {
    var n = Ur(r, e);
    return n === void 0 && n === t ? If(r, e) : Wt(t, n, Cf | Df);
  };
}
function Ff(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Bf(e) {
  return function(t) {
    return qi(t, e);
  };
}
function Rf(e) {
  return Dr(e) ? Ff(ct(e)) : Bf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? Jn : typeof e == "object" ? L(e) ? jf(e[0], e[1]) : Af(e) : Rf(e);
}
function Yi(e, t) {
  var r = {};
  return t = vt(t), Tr(e, function(n, i, a) {
    Ni(r, i, t(n, i, a));
  }), r;
}
const Lf = {
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
    $all() {
      return this.values;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return Yi(this.rawErrors, (e) => e.join(`
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
    $put(e, t) {
      return ki(this.values, e, t);
    },
    submit() {
      if (!this.confirm)
        return this.request();
      m.confirm(
        Gi(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || gr(this.values) ? Vi(this.values) : this.values;
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
              "$all",
              "$attrs",
              "$put",
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
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Mf = {
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
      type: String,
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
    modelValue(e) {
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
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        );
      });
    }
  }
}, qf = { ref: "input" };
function Nf(e, t, r, n, i, a) {
  return R(), se("div", qf, [
    ge(e.$slots, "default")
  ], 512);
}
const kf = /* @__PURE__ */ ft(Mf, [["render", Nf]]), Hf = ["href", "onClick"], Vf = {
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
        Gi(t.confirm) ? "" : t.confirm,
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
    return (i, a) => (R(), se("a", {
      href: e.href,
      onClick: ya(r, ["prevent"])
    }, [
      ge(i.$slots, "default")
    ], 8, Hf));
  }
}, Wf = {
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
      Dialog: Fi,
      DialogPanel: Bi,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
};
function Uf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Dt(t)) {
      var a = vt(r);
      t = jt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
function Gf(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var zf = /\s/;
function Kf(e) {
  for (var t = e.length; t-- && zf.test(e.charAt(t)); )
    ;
  return t;
}
var Xf = /^\s+/;
function Qf(e) {
  return e && e.slice(0, Kf(e) + 1).replace(Xf, "");
}
var qn = 0 / 0, Yf = /^[-+]0x[0-9a-f]+$/i, Jf = /^0b[01]+$/i, Zf = /^0o[0-7]+$/i, ed = parseInt;
function Sr(e) {
  if (typeof e == "number")
    return e;
  if (Bt(e))
    return qn;
  if (le(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = le(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qf(e);
  var r = Jf.test(e);
  return r || Zf.test(e) ? ed(e.slice(2), r ? 2 : 8) : Yf.test(e) ? qn : +e;
}
var Nn = 1 / 0, td = 17976931348623157e292;
function rd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Sr(e), e === Nn || e === -Nn) {
    var t = e < 0 ? -1 : 1;
    return t * td;
  }
  return e === e ? e : 0;
}
function Gr(e) {
  var t = rd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var nd = Math.max;
function id(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Gr(r);
  return i < 0 && (i = nd(n + i, 0)), Gf(e, vt(t), i);
}
var ad = Uf(id);
const od = ad, sd = {
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
      return od(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
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
        ), this.handlePlaceholderVisibility(), this.updateHasSelectionAttribute(), e.addEventListener("change", function() {
          if (r.$emit("update:modelValue", r.choicesInstance.getValue(!0)), !r.multiple || t < 1)
            return;
          r.choicesInstance.getValue().length >= t && r.choicesInstance.hideDropdown();
        }), e.addEventListener("showDropdown", function() {
          if (r.multiple || !r.modelValue)
            return;
          const a = r.getItemOfCurrentModel(), o = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${a.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(o, 1), r.choicesInstance._highlightChoice(o);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, ld = { ref: "select" };
function ud(e, t, r, n, i, a) {
  return R(), se("div", ld, [
    ge(e.$slots, "default")
  ], 512);
}
const cd = /* @__PURE__ */ ft(sd, [["render", ud]]), fd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Yi(e, (i) => i.join(`
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
var dd = function() {
  return ne.Date.now();
};
const tr = dd;
var pd = "Expected a function", hd = Math.max, vd = Math.min;
function md(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(pd);
  t = Sr(t) || 0, le(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? hd(Sr(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, o = e.apply(w, g), o;
  }
  function v(h) {
    return u = h, s = setTimeout(x, t), c ? d(h) : o;
  }
  function y(h) {
    var g = h - l, w = h - u, E = t - g;
    return f ? vd(E, a - w) : E;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= a;
  }
  function x() {
    var h = tr();
    if (b(h))
      return A(h);
    s = setTimeout(x, y(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, o);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function _() {
    return s === void 0 ? o : A(tr());
  }
  function $() {
    var h = tr(), g = b(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), d(l);
    }
    return s === void 0 && (s = setTimeout(x, t)), o;
  }
  return $.cancel = P, $.flush = _, $;
}
function Ji(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function gd(e, t, r) {
  e = Br(e), t = Mt(t);
  var n = e.length;
  r = r === void 0 ? n : Ji(Gr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function yd(e, t) {
  var r = [];
  return xr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function bd(e, t) {
  var r = L(e) ? Ki : yd;
  return r(e, vt(t));
}
function kn(e, t) {
  return Wt(e, t);
}
function wd(e, t) {
  var r = -1, n = Dt(e) ? Array(e.length) : [];
  return xr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function Od(e, t) {
  var r = L(e) ? di : wd;
  return r(e, vt(t));
}
function Et(e, t, r) {
  return e = Br(e), r = r == null ? 0 : Ji(Gr(r), 0, e.length), t = Mt(t), e.slice(r, r + t.length) == t;
}
const Sd = {
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
      return !kn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Ne(e, (r, n) => {
      if (Et(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Ne(e, (t, r) => {
        Et(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = bd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Od(r, (i) => i.key).sort();
      kn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], at(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: md(function(e, t, r) {
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
        if (!gd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), o = a[1].substring(0, a[1].length - 1);
        parseInt(o) == o ? (i = a[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Et(e, "perPage") || Et(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Ne(e, (o, s) => {
        if (!L(o)) {
          n[s] = o;
          return;
        }
        o.length !== 0 && o.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      Ne(n, (o, s) => {
        o === null || o === [] || (i && (i += "&"), i += `${s}=${o}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      m.replace(a).then(() => {
        typeof t < "u" && t && at(() => {
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
}, $d = {
  props: {
    autosize: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
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
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        at(() => e.default.update(this.element));
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
  }
}, _d = { ref: "textarea" };
function Ed(e, t, r, n, i, a) {
  return R(), se("div", _d, [
    ge(e.$slots, "default")
  ], 512);
}
const Td = /* @__PURE__ */ ft($d, [["render", Ed]]), xd = {
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
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
}, Ad = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Pd = {
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
      positions: Ad,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: tt,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
}, Id = {
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
            if (n.length === 1 && Hi(n) === "default") {
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
            return r === "setToggle" ? (i, a) => {
              e.setToggle(i, a);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Bd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Y(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Y(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Y(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Y(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, Tu).component(`${r}Confirm`, sc).component(`${r}Data`, pc).component(`${r}Defer`, hc).component(`${r}Errors`, vc).component(`${r}Event`, mc).component(`${r}File`, wc).component(`${r}Flash`, Oc).component(`${r}Form`, Lf).component(`${r}Input`, kf).component(`${r}Modal`, Wf).component(`${r}Render`, tt).component(`${r}Select`, cd).component(`${r}State`, fd).component(`${r}Table`, Sd).component(`${r}Textarea`, Td).component(`${r}Toast`, xd).component(`${r}Toasts`, Pd).component(`${r}Toggle`, Id).component(t.link_component, Vf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Rd(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((a) => {
    const o = a.replace(/^-+/, "").split("=");
    n[o[0]] = o.length === 2 ? o[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (a, o) => {
    if (a.method == "POST") {
      let s = "";
      a.on("data", (l) => s += l), a.on("end", async () => {
        const l = JSON.parse(s), u = r({
          components: l.components,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        o.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), o.write(JSON.stringify({ body: c })), o.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  m as Splade,
  ms as SpladeApp,
  Bd as SpladePlugin,
  jd as renderSpladeApp,
  Rd as startServer
};
