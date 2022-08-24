import Hn from "axios";
import { ref as O, computed as C, watch as it, openBlock as R, createBlock as Me, unref as ve, h as F, onMounted as M, createElementBlock as se, createElementVNode as rr, provide as Z, inject as Q, nextTick as ot, resolveDynamicComponent as oo, KeepAlive as ao, withCtx as Vn, normalizeStyle as so, createVNode as lo, Fragment as $r, renderList as uo, createCommentVNode as co, onBeforeUnmount as fo, renderSlot as ge, resolveComponent as po, withDirectives as ho, vShow as vo, cloneVNode as mo, watchEffect as ee, defineComponent as k, onUnmounted as Ge, Teleport as go, reactive as yo, withModifiers as bo } from "vue";
function wo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function So(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var Oo = So();
const $o = Oo;
function Eo(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var _o = typeof global == "object" && global && global.Object === Object && global;
const Wn = _o;
var To = typeof self == "object" && self && self.Object === Object && self, xo = Wn || To || Function("return this")();
const ne = xo;
var Ao = ne.Symbol;
const ye = Ao;
var Un = Object.prototype, Po = Un.hasOwnProperty, Io = Un.toString, Ye = ye ? ye.toStringTag : void 0;
function Co(e) {
  var t = Po.call(e, Ye), r = e[Ye];
  try {
    e[Ye] = void 0;
    var n = !0;
  } catch {
  }
  var i = Io.call(e);
  return n && (t ? e[Ye] = r : delete e[Ye]), i;
}
var Do = Object.prototype, jo = Do.toString;
function Fo(e) {
  return jo.call(e);
}
var Bo = "[object Null]", Ro = "[object Undefined]", rn = ye ? ye.toStringTag : void 0;
function Se(e) {
  return e == null ? e === void 0 ? Ro : Bo : rn && rn in Object(e) ? Co(e) : Fo(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var Lo = "[object Arguments]";
function nn(e) {
  return be(e) && Se(e) == Lo;
}
var Gn = Object.prototype, qo = Gn.hasOwnProperty, Mo = Gn.propertyIsEnumerable, No = nn(function() {
  return arguments;
}()) ? nn : function(e) {
  return be(e) && qo.call(e, "callee") && !Mo.call(e, "callee");
};
const zn = No;
var ko = Array.isArray;
const L = ko;
function Ho() {
  return !1;
}
var Kn = typeof exports == "object" && exports && !exports.nodeType && exports, on = Kn && typeof module == "object" && module && !module.nodeType && module, Vo = on && on.exports === Kn, an = Vo ? ne.Buffer : void 0, Wo = an ? an.isBuffer : void 0, Uo = Wo || Ho;
const nr = Uo;
var Go = 9007199254740991, zo = /^(?:0|[1-9]\d*)$/;
function Er(e, t) {
  var r = typeof e;
  return t = t == null ? Go : t, !!t && (r == "number" || r != "symbol" && zo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ko = 9007199254740991;
function _r(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ko;
}
var Xo = "[object Arguments]", Qo = "[object Array]", Yo = "[object Boolean]", Jo = "[object Date]", Zo = "[object Error]", ea = "[object Function]", ta = "[object Map]", ra = "[object Number]", na = "[object Object]", ia = "[object RegExp]", oa = "[object Set]", aa = "[object String]", sa = "[object WeakMap]", la = "[object ArrayBuffer]", ua = "[object DataView]", ca = "[object Float32Array]", fa = "[object Float64Array]", da = "[object Int8Array]", pa = "[object Int16Array]", ha = "[object Int32Array]", va = "[object Uint8Array]", ma = "[object Uint8ClampedArray]", ga = "[object Uint16Array]", ya = "[object Uint32Array]", I = {};
I[ca] = I[fa] = I[da] = I[pa] = I[ha] = I[va] = I[ma] = I[ga] = I[ya] = !0;
I[Xo] = I[Qo] = I[la] = I[Yo] = I[ua] = I[Jo] = I[Zo] = I[ea] = I[ta] = I[ra] = I[na] = I[ia] = I[oa] = I[aa] = I[sa] = !1;
function ba(e) {
  return be(e) && _r(e.length) && !!I[Se(e)];
}
function wa(e) {
  return function(t) {
    return e(t);
  };
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, et = Xn && typeof module == "object" && module && !module.nodeType && module, Sa = et && et.exports === Xn, Xt = Sa && Wn.process, Oa = function() {
  try {
    var e = et && et.require && et.require("util").types;
    return e || Xt && Xt.binding && Xt.binding("util");
  } catch {
  }
}();
const sn = Oa;
var ln = sn && sn.isTypedArray, $a = ln ? wa(ln) : ba;
const Qn = $a;
var Ea = Object.prototype, _a = Ea.hasOwnProperty;
function Ta(e, t) {
  var r = L(e), n = !r && zn(e), i = !r && !n && nr(e), o = !r && !n && !i && Qn(e), a = r || n || i || o, s = a ? Eo(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || _a.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Er(u, l))) && s.push(u);
  return s;
}
var xa = Object.prototype;
function Aa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || xa;
  return e === r;
}
function Pa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ia = Pa(Object.keys, Object);
const Ca = Ia;
var Da = Object.prototype, ja = Da.hasOwnProperty;
function Fa(e) {
  if (!Aa(e))
    return Ca(e);
  var t = [];
  for (var r in Object(e))
    ja.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function le(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ba = "[object AsyncFunction]", Ra = "[object Function]", La = "[object GeneratorFunction]", qa = "[object Proxy]";
function Yn(e) {
  if (!le(e))
    return !1;
  var t = Se(e);
  return t == Ra || t == La || t == Ba || t == qa;
}
function Dt(e) {
  return e != null && _r(e.length) && !Yn(e);
}
function jt(e) {
  return Dt(e) ? Ta(e) : Fa(e);
}
function Tr(e, t) {
  return e && $o(e, t, jt);
}
function Ma(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Dt(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Na = Ma(Tr);
const xr = Na;
function Jn(e) {
  return e;
}
function Zn(e) {
  return typeof e == "function" ? e : Jn;
}
function ka(e, t) {
  var r = L(e) ? wo : xr;
  return r(e, Zn(t));
}
var Ha = Array.prototype, Va = Ha.reverse;
function Wa(e) {
  return e == null ? e : Va.call(e);
}
const ir = O(1), Ie = typeof window > "u";
function Ua(e, t) {
  Ie || window.addEventListener("popstate", Ga.bind(this)), Ir(t), Ft(t.head), Cr(e);
  const r = Ie ? "" : location.href, n = Ar(
    r,
    t.head,
    e,
    {},
    ir.value
  );
  ei(n);
}
function Ga(e) {
  q.value = e.state, J.value = 0, Ft(q.value.head), Cr(q.value.html, q.value.rememberedState.scrollY);
}
function Ar(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return q.value = o, o;
}
function za(e) {
  Ie || window.history.pushState(e, "", e.url);
}
function Ka(e) {
  const t = Ar(
    e,
    JSON.parse(JSON.stringify(q.value.head)),
    q.value.html,
    { ...q.value.rememberedState },
    q.value.pageVisitId
  );
  Ie || window.history.replaceState(t, "", t.url);
}
function ei(e) {
  Ie || window.history.replaceState(e, "", e.url);
}
const q = O({});
function Xa(e, t) {
  const r = e.request.responseURL;
  if (e.data.splade.modal && J.value++, Ir(e.data.splade), Ft(e.data.splade.head), e.data.splade.modal)
    return as(e.data.html, e.data.splade.modal);
  (r !== q.value.url || e.data.splade.refresh || J.value > 0) && (J.value = 0, t || ir.value++, Cr(e.data.html, 0));
  const n = Ar(
    r,
    e.data.splade.head,
    e.data.html,
    q.value.rememberedState ? { ...q.value.rememberedState } : {},
    ir.value
  );
  t ? ei(n) : za(n);
}
const J = O(0);
function Qa() {
  J.value--, Ft(Ja(J.value));
}
const ti = O({}), ri = O({}), ni = (e) => ri.value[e], Ya = (e) => Object.keys(ni.value[e]).length > 0, ii = O({}), Ja = (e) => ii.value[e], oi = O({}), Za = (e) => oi.value[e], ke = O([]), es = C(() => Wa(ke.value));
function ts(e) {
  ke.value.push(e);
}
function rs(e) {
  ke.value[e].dismissed = !0, ke.value[e].html = null;
}
const Pr = O(null);
function ns(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return Pr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function is() {
  Pr.value = null;
}
function Ir(e) {
  ti.value = e.shared ? e.shared : {}, oi.value[J.value] = e.flash ? e.flash : {}, ii.value[J.value] = e.head ? e.head : {}, ka(e.toasts ? e.toasts : [], (t) => {
    ke.value.push(t);
  }), ri.value[J.value] = e.errors ? e.errors : {};
}
function os(e) {
  fi.value(e);
}
function Ft(e) {
  li.value(e);
}
function Cr(e, t) {
  ui.value(e, t);
}
function as(e, t) {
  ci.value(e, t);
}
const ai = O({});
function si(e, t, r) {
  ai.value[e] = t, r && ss(e, t);
}
function ss(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ls(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ai.value[e];
}
function ze(e, t, r, n, i) {
  Ie || si("scrollY", window.scrollY);
  const o = Hn({
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
    Xa(a, i);
  }).catch((a) => {
    const s = a.response.data.splade;
    s && Ir(s), a.response.status != 422 && os(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
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
  return ze(q.value.url, "GET", {}, { "X-Splade-Refresh": !0 }, !1);
}
const li = O(() => {
}), ui = O(() => {
}), ci = O(() => {
}), fi = O(() => {
}), m = {
  init: Ua,
  replace: us,
  visit: cs,
  modal: fs,
  slideover: ds,
  refresh: ps,
  request: ze,
  replaceUrlOfCurrentPage: Ka,
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
  hasValidationErrors: Ya,
  validationErrors: ni,
  sharedData: ti,
  flashData: Za,
  toasts: ke,
  toastsReversed: es,
  confirmModal: Pr,
  confirm: ns,
  clearConfirmModal: is,
  pushToast: ts,
  dismissToast: rs,
  restore: ls,
  remember: si,
  popStack: Qa,
  currentStack: J,
  pageVisitId: C(() => q.value.pageVisitId),
  isSsr: Ie
};
function Ne(e, t) {
  return e && Tr(e, Zn(t));
}
var hs = "[object String]";
function Qt(e) {
  return typeof e == "string" || !L(e) && be(e) && Se(e) == hs;
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
    const t = e, r = O(null);
    function n() {
      r.value = F({
        template: t.html
      });
    }
    return it(() => t.html, n, { immediate: !0 }), (i, o) => (R(), Me(ve(r)));
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
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    const i = O(null);
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
    return M(() => o()), (s, l) => (R(), se("div", {
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
    const r = O(), n = O([]), i = O(null), o = C(() => m.currentStack.value < 1 ? [] : {
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
    const l = Q("$spladeOptions") || {};
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (R(), se("div", null, [
      (R(), Me(oo(ve(m).isSsr ? "div" : ao), {
        max: ve(l).max_keep_alive
      }, {
        default: Vn(() => [
          (R(), Me(tt, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: so(ve(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      lo(tt, { html: e.components }, null, 8, ["html"]),
      (R(!0), se($r, null, uo(ve(m).currentStack.value, (d) => (R(), Me(tt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ve(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (R(), Me(vs, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : co("", !0)
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
  return typeof e == "symbol" || be(e) && Se(e) == ws;
}
var Ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Os = /^\w*$/;
function Dr(e, t) {
  if (L(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Bt(e) ? !0 : Os.test(e) || !Ss.test(e) || t != null && e in Object(t);
}
var $s = ne["__core-js_shared__"];
const Yt = $s;
var un = function() {
  var e = /[^.]+$/.exec(Yt && Yt.keys && Yt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Es(e) {
  return !!un && un in e;
}
var _s = Function.prototype, Ts = _s.toString;
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
  if (!le(e) || Es(e))
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
const at = Rs;
function Ls() {
  this.__data__ = at ? at(null) : {}, this.size = 0;
}
function qs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ms = "__lodash_hash_undefined__", Ns = Object.prototype, ks = Ns.hasOwnProperty;
function Hs(e) {
  var t = this.__data__;
  if (at) {
    var r = t[e];
    return r === Ms ? void 0 : r;
  }
  return ks.call(t, e) ? t[e] : void 0;
}
var Vs = Object.prototype, Ws = Vs.hasOwnProperty;
function Us(e) {
  var t = this.__data__;
  return at ? t[e] !== void 0 : Ws.call(t, e);
}
var Gs = "__lodash_hash_undefined__";
function zs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = at && t === void 0 ? Gs : t, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = Ls;
Ce.prototype.delete = qs;
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
function ol(e) {
  return Lt(this, e).get(e);
}
function al(e) {
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
fe.prototype.get = ol;
fe.prototype.has = al;
fe.prototype.set = sl;
var ll = "Expected a function";
function Fr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ll);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
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
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fl, function(r, n, i, o) {
    t.push(i ? o.replace(dl, "$1") : n || r);
  }), t;
});
const hl = pl;
function di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var vl = 1 / 0, cn = ye ? ye.prototype : void 0, fn = cn ? cn.toString : void 0;
function qt(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return di(e, qt) + "";
  if (Bt(e))
    return fn ? fn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -vl ? "-0" : t;
}
function Br(e) {
  return e == null ? "" : qt(e);
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
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = ct(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && _r(i) && Er(a, i) && (L(e) || zn(e)));
}
function G(e, t) {
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
    const t = e, r = O(null), n = O(null);
    return M(() => {
      r.value = (i) => {
        i.target === n.value || n.value.contains(i.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value);
    }), fo(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, o) => (R(), se("div", {
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
function or() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hi() {
  return !/^((?!chrome|android).)*safari/i.test(or());
}
function Ve(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && V(e) && (i = e.offsetWidth > 0 && He(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && He(n.height) / e.offsetHeight || 1);
  var a = De(e) ? W(e) : window, s = a.visualViewport, l = !hi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, p = n.height / o;
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
function qr(e) {
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
  return e === W(e) || !V(e) ? qr(e) : yl(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Oe(e) {
  return ((De(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return Ve(Oe(e)).left + qr(e).scrollLeft;
}
function X(e) {
  return W(e).getComputedStyle(e);
}
function Nr(e) {
  var t = X(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function wl(e) {
  var t = e.getBoundingClientRect(), r = He(t.width) / e.offsetWidth || 1, n = He(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Sl(e, t, r) {
  r === void 0 && (r = !1);
  var n = V(t), i = V(t) && wl(t), o = Oe(t), a = Ve(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || Nr(o)) && (s = bl(t)), V(t) ? (l = Ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Mr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
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
function Mt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Lr(e) ? e.host : null) || Oe(e);
}
function mi(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : V(e) && Nr(e) ? e : mi(Mt(e));
}
function rt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = mi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = W(n), a = i ? [o].concat(o.visualViewport || [], Nr(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(rt(Mt(a)));
}
function Ol(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function dn(e) {
  return !V(e) || X(e).position === "fixed" ? null : e.offsetParent;
}
function $l(e) {
  var t = /firefox/i.test(or()), r = /Trident/i.test(or());
  if (r && V(e)) {
    var n = X(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Mt(e);
  for (Lr(i) && (i = i.host); V(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var o = X(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Nt(e) {
  for (var t = W(e), r = dn(e); r && Ol(r) && X(r).position === "static"; )
    r = dn(r);
  return r && (te(r) === "html" || te(r) === "body" && X(r).position === "static") ? t : r || $l(e) || t;
}
var z = "top", re = "bottom", we = "right", ie = "left", kt = "auto", Ht = [z, re, we, ie], We = "start", lt = "end", El = "clippingParents", gi = "viewport", Je = "popper", _l = "reference", pn = /* @__PURE__ */ Ht.reduce(function(e, t) {
  return e.concat([t + "-" + We, t + "-" + lt]);
}, []), Tl = /* @__PURE__ */ [].concat(Ht, [kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + We, t + "-" + lt]);
}, []), xl = "beforeRead", Al = "read", Pl = "afterRead", Il = "beforeMain", Cl = "main", Dl = "afterMain", jl = "beforeWrite", Fl = "write", Bl = "afterWrite", ar = [xl, Al, Pl, Il, Cl, Dl, jl, Fl, Bl];
function Rl(e) {
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
function Ll(e) {
  var t = Rl(e);
  return ar.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function ql(e) {
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
  return [].concat(r).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, e);
}
var Te = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ml = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', hn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
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
          ar.indexOf(t.phase) < 0 && console.error(pe(Te, t.name, '"phase"', "either " + ar.join(", "), '"' + String(t.phase) + '"'));
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
        }) == null && console.error(pe(Ml, String(t.name), n, n));
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
function oe(e) {
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
  var r = W(e), n = Oe(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = hi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Mr(e),
    y: l
  };
}
function Wl(e) {
  var t, r = Oe(e), n = qr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Pe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Pe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Mr(e), l = -n.scrollTop;
  return X(i || r).direction === "rtl" && (s += Pe(r.clientWidth, i ? i.clientWidth : 0) - o), {
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
  return t === gi ? sr(Vl(e, r)) : De(t) ? Gl(t, r) : sr(Wl(Oe(e)));
}
function zl(e) {
  var t = rt(Mt(e)), r = ["absolute", "fixed"].indexOf(X(e).position) >= 0, n = r && V(e) ? Nt(e) : e;
  return De(n) ? t.filter(function(i) {
    return De(i) && Ul(i, n) && te(i) !== "body";
  }) : [];
}
function Kl(e, t, r, n) {
  var i = t === "clippingParents" ? zl(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = vn(e, u, n);
    return l.top = Pe(c.top, l.top), l.right = At(c.right, l.right), l.bottom = At(c.bottom, l.bottom), l.left = Pe(c.left, l.left), l;
  }, vn(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ue(e) {
  return e.split("-")[1];
}
function yi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? oe(n) : null, o = n ? Ue(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case z:
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
    switch (o) {
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
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? El : s, u = r.rootBoundary, c = u === void 0 ? gi : u, f = r.elementContext, p = f === void 0 ? Je : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, x = Xl(typeof b != "number" ? b : Ql(b, Ht)), A = p === Je ? _l : Je, P = e.rects.popper, E = e.elements[v ? A : p], $ = Kl(De(E) ? E : E.contextElement || Oe(e.elements.popper), l, c, a), h = Ve(e.elements.reference), g = bi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = sr(Object.assign({}, P, g)), _ = p === Je ? w : h, S = {
    top: $.top - _.top + x.top,
    bottom: _.bottom - $.bottom + x.bottom,
    left: $.left - _.left + x.left,
    right: _.right - $.right + x.right
  }, T = e.modifiersData.offset;
  if (p === Je && T) {
    var D = T[i];
    Object.keys(S).forEach(function(j) {
      var U = [we, re].indexOf(j) >= 0 ? 1 : -1, Y = [z, re].indexOf(j) >= 0 ? "y" : "x";
      S[j] += D[Y] * U;
    });
  }
  return S;
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
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? gn : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gn, o),
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
        var P = Ll(Hl([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(T) {
          return T.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = kl([].concat(P, c.options.modifiers), function(T) {
            var D = T.name;
            return D;
          });
          if (Nl(E), oe(c.options.placement) === kt) {
            var $ = c.orderedModifiers.find(function(T) {
              var D = T.name;
              return D === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = X(l), g = h.marginTop, w = h.marginRight, _ = h.marginBottom, S = h.marginLeft;
          [g, w, _, S].some(function(T) {
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
            reference: Sl(A, Nt(P), c.options.strategy === "fixed"),
            popper: vi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var E = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Yl);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var h = c.orderedModifiers[$], g = h.fn, w = h.options, _ = w === void 0 ? {} : w, S = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: S,
              instance: d
            }) || c);
          }
        }
      },
      update: ql(function() {
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
var St = {
  passive: !0
};
function Zl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = W(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, St);
  }), s && l.addEventListener("resize", r.update, St), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, St);
    }), s && l.removeEventListener("resize", r.update, St);
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
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, v = a.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var x = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = ie, E = z, $ = window;
  if (u) {
    var h = Nt(r), g = "clientHeight", w = "clientWidth";
    if (h === W(r) && (h = Oe(r), X(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === z || (i === ie || i === we) && o === lt) {
      E = re;
      var _ = f && h === $ && $.visualViewport ? $.visualViewport.height : h[g];
      y -= _ - n.height, y *= l ? 1 : -1;
    }
    if (i === ie || (i === z || i === re) && o === lt) {
      P = we;
      var S = f && h === $ && $.visualViewport ? $.visualViewport.width : h[w];
      d -= S - n.width, d *= l ? 1 : -1;
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
    return Object.assign({}, T, (j = {}, j[E] = A ? "0" : "", j[P] = x ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, T, (t = {}, t[E] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function ou(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = X(t.elements.popper).transitionProperty || "";
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
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
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
const au = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ou,
  data: {}
};
function su(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !V(o) || !te(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
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
      var i = t.elements[n], o = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !V(i) || !te(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
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
var cu = [eu, ru, au, uu], fu = /* @__PURE__ */ Jl({
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
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = kr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = oe(t.placement), A = Ue(t.placement), P = !A, E = yi(x), $ = du(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, _ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, S = typeof _ == "number" ? {
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
      var j, U = E === "y" ? z : ie, Y = E === "y" ? re : we, B = E === "y" ? "height" : "width", N = h[E], mt = N + b[U], $e = N - b[Y], gt = d ? -w[B] / 2 : 0, Ut = A === We ? g[B] : w[B], Xe = A === We ? -w[B] : -g[B], yt = t.elements.arrow, Le = d && yt ? vi(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wi(), Qe = de[U], bt = de[Y], Ee = Tt(0, g[B], Le[B]), Gt = P ? g[B] / 2 - gt - Ee - Qe - S.mainAxis : Ut - Ee - Qe - S.mainAxis, Zi = P ? -g[B] / 2 + gt + Ee + bt + S.mainAxis : Xe + Ee + bt + S.mainAxis, zt = t.elements.arrow && Nt(t.elements.arrow), eo = zt ? E === "y" ? zt.clientTop || 0 : zt.clientLeft || 0 : 0, zr = (j = T == null ? void 0 : T[E]) != null ? j : 0, to = N + Gt - zr - eo, ro = N + Zi - zr, Kr = Tt(d ? At(mt, to) : mt, N, d ? Pe($e, ro) : $e);
      h[E] = Kr, D[E] = Kr - N;
    }
    if (s) {
      var Xr, no = E === "x" ? z : ie, io = E === "x" ? re : we, _e = h[$], wt = $ === "y" ? "height" : "width", Qr = _e + b[no], Yr = _e - b[io], Kt = [z, ie].indexOf(x) !== -1, Jr = (Xr = T == null ? void 0 : T[$]) != null ? Xr : 0, Zr = Kt ? Qr : _e - g[wt] - w[wt] - Jr + S.altAxis, en = Kt ? _e + g[wt] + w[wt] - Jr - S.altAxis : Yr, tn = d && Kt ? pu(Zr, _e, en) : Tt(d ? Zr : Qr, _e, d ? en : Yr);
      h[$] = tn, D[$] = tn - _e;
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
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Tl : l, c = Ue(n), f = c ? s ? pn : pn.filter(function(v) {
    return Ue(v) === c;
  }) : Ht, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = kr(e, {
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
function bu(e) {
  if (oe(e) === kt)
    return [];
  var t = xt(e);
  return [wn(e), t, wn(t)];
}
function wu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, x = oe(b), A = x === b, P = l || (A || !v ? [xt(b)] : bu(b)), E = [b].concat(P).reduce(function(Le, de) {
      return Le.concat(oe(de) === kt ? yu(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : de);
    }, []), $ = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, _ = E[0], S = 0; S < E.length; S++) {
      var T = E[S], D = oe(T), j = Ue(T) === We, U = [z, re].indexOf(D) >= 0, Y = U ? "width" : "height", B = kr(t, {
        placement: T,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = U ? j ? we : ie : j ? re : z;
      $[Y] > h[Y] && (N = xt(N));
      var mt = xt(N), $e = [];
      if (o && $e.push(B[D] <= 0), s && $e.push(B[N] <= 0, B[mt] <= 0), $e.every(function(Le) {
        return Le;
      })) {
        _ = T, w = !1;
        break;
      }
      g.set(T, $e);
    }
    if (w)
      for (var gt = v ? 3 : 1, Ut = function(de) {
        var Qe = E.find(function(bt) {
          var Ee = g.get(bt);
          if (Ee)
            return Ee.slice(0, de).every(function(Gt) {
              return Gt;
            });
        });
        if (Qe)
          return _ = Qe, "break";
      }, Xe = gt; Xe > 0; Xe--) {
        var yt = Ut(Xe);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const Su = {
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
}, Ou = {
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
      modifiers: [Su, vu]
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
}, $u = { ref: "button" }, Eu = { ref: "tooltip" };
function _u(e, t, r, n, i, o) {
  const a = po("OnClickOutside");
  return R(), Me(a, { do: o.hide }, {
    default: Vn(() => [
      rr("button", $u, [
        ge(e.$slots, "button", { toggle: o.toggle })
      ], 512),
      ho(rr("div", Eu, [
        ge(e.$slots, "default", { hide: o.hide })
      ], 512), [
        [vo, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const Tu = /* @__PURE__ */ ft(Ou, [["render", _u]]);
function K(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, K), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function H({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = xu(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return Jt(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return K(l, { [0]() {
      return null;
    }, [1]() {
      return Jt({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Jt(s);
}
function Jt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = Oi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (a === "template") {
    if (l = Si(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!Au(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return mo(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return F(a, Object.assign({}, s, u), l);
}
function Si(e) {
  return e.flatMap((t) => t.type === $r ? Si(t.children) : [t]);
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
let Ei = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Cu() {
  return Hr() !== null;
}
function Hr() {
  return Q(Ei, null);
}
function Du(e) {
  Z(Ei, e);
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
var ut = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ut || {}), _i = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(_i || {}), ju = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ju || {});
function Fu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lr));
}
var Ti = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ti || {});
function Bu(e, t = 0) {
  var r;
  return e === ((r = Ke(e)) == null ? void 0 : r.body) ? !1 : K(t, { [0]() {
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
function qu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ur(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? qu(e) : e : Fu(e), a = i.activeElement, s = (() => {
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
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Lu(p) && p.select(), 2;
}
function cr(e, t, r) {
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
      let u = l instanceof HTMLElement ? l : ue(l);
      if (u != null && u.contains(a))
        return;
    }
    return !Bu(a, Ti.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  cr("click", (i) => n(i, (o) => o.target), !0), cr("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var It = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(It || {});
let fr = k({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var dr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(dr || {});
function Nu() {
  let e = O(0);
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
let Ze = Object.assign(k({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: O(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = O(null);
  n({ el: i, $el: i });
  let o = C(() => Ke(i));
  ku({ ownerDocument: o }, C(() => Boolean(e.features & 16)));
  let a = Hu({ ownerDocument: o, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Vu({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, C(() => Boolean(e.features & 8)));
  let s = Nu();
  function l() {
    let u = ue(i);
    !u || K(s.value, { [dr.Forwards]: () => ur(u, ut.First), [dr.Backwards]: () => ur(u, ut.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return F($r, [Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable }), H({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable })]);
  };
} }), { features: Ai });
function ku({ ownerDocument: e }, t) {
  let r = O(null), n = { value: !1 };
  M(() => {
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
function Hu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = O(null);
  return M(() => {
    it([t, r, n], (o, a) => {
      if (o.every((l, u) => (a == null ? void 0 : a[u]) === l) || !n.value)
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
        c ? nt(c) : ur(s, ut.First | ut.NoScroll) === _i.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Vu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var o;
  xi((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Wu(s, u) ? (n.value = u, nt(u)) : (a.preventDefault(), a.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function Wu(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Sn = "body > *", qe = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function On(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function $n(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Uu(e, t = O(!0)) {
  ee((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ke(n);
    if (i) {
      qe.add(n);
      for (let o of he.keys())
        o.contains(n) && ($n(o), he.delete(o));
      i.querySelectorAll(Sn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of qe)
            if (o.contains(a))
              return;
          qe.size === 1 && (he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), On(o));
        }
      }), r(() => {
        if (qe.delete(n), qe.size > 0)
          i.querySelectorAll(Sn).forEach((o) => {
            if (o instanceof HTMLElement && !he.has(o)) {
              for (let a of qe)
                if (o.contains(a))
                  return;
              he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), On(o);
            }
          });
        else
          for (let o of he.keys())
            $n(o), he.delete(o);
      });
    }
  });
}
let Pi = Symbol("ForcePortalRootContext");
function Gu() {
  return Q(Pi, !1);
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
  let n = O(null), i = C(() => Ke(n)), o = Gu(), a = Q(Ci, null), s = O(o === !0 || a == null ? zu(n.value) : a.resolveTarget());
  return ee(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), Ge(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return F(go, { to: s.value }, H({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ci = Symbol("PortalGroupContext"), Ku = k({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = yo({ resolveTarget() {
    return e.target;
  } });
  return Z(Ci, n), () => {
    let { target: i, ...o } = e;
    return H({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Di = Symbol("StackContext");
var hr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(hr || {});
function Xu() {
  return Q(Di, () => {
  });
}
function Qu({ type: e, element: t, onUpdate: r }) {
  let n = Xu();
  function i(...o) {
    r == null || r(...o), n(...o);
  }
  M(() => {
    i(0, e, t), Ge(() => {
      i(1, e, t);
    });
  }), Z(Di, i);
}
let ji = Symbol("DescriptionContext");
function Yu() {
  let e = Q(ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ju({ slot: e = O({}), name: t = "Description", props: r = {} } = {}) {
  let n = O([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return Z(ji, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Fd = k({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Yu(), i = `headlessui-description-${Re()}`;
  return M(() => Ge(n.register(i))), () => {
    let { name: o = "Description", slot: a = O({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return H({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
var Zu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zu || {});
let vr = Symbol("DialogContext");
function dt(e) {
  let t = Q(vr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, dt), r;
  }
  return t;
}
let Ot = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Fi = k({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ot }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = O(!1);
  M(() => {
    a.value = !0;
  });
  let s = O(0), l = Hr(), u = C(() => e.open === Ot && l !== null ? K(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = O(/* @__PURE__ */ new Set()), f = O(null), p = O(null), d = C(() => Ke(f));
  if (i({ el: f, $el: f }), !(e.open !== Ot || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ot ? void 0 : e.open}`);
  let v = C(() => a.value && u.value ? 0 : 1), y = C(() => v.value === 0), b = C(() => s.value > 1), x = Q(vr, null) !== null, A = C(() => b.value ? "parent" : "leaf");
  Uu(f, C(() => b.value ? y.value : !1)), Qu({ type: "Dialog", element: f, onUpdate: (g, w, _) => {
    if (w === "Dialog")
      return K(g, { [hr.Add]() {
        c.value.add(_), s.value += 1;
      }, [hr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Ju({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), E = `headlessui-dialog-${Re()}`, $ = O(null), h = { titleId: $, panelRef: O(null), dialogState: v, setTitleId(g) {
    $.value !== g && ($.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(vr, h), Mu(() => {
    var g, w, _;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((S) => !(!(S instanceof HTMLElement) || S.contains(ue(p)) || h.panelRef.value && S.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, w) => {
    h.close(), ot(() => w == null ? void 0 : w.focus());
  }, C(() => v.value === 0 && !b.value)), xi((o = d.value) == null ? void 0 : o.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === $i.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), ee((g) => {
    var w;
    if (v.value !== 0 || x)
      return;
    let _ = d.value;
    if (!_)
      return;
    let S = _ == null ? void 0 : _.documentElement, T = (w = _.defaultView) != null ? w : window, D = S.style.overflow, j = S.style.paddingRight, U = T.innerWidth - S.clientWidth;
    if (S.style.overflow = "hidden", U > 0) {
      let Y = S.clientWidth - S.offsetWidth, B = U - Y;
      S.style.paddingRight = `${B}px`;
    }
    g(() => {
      S.style.overflow = D, S.style.paddingRight = j;
    });
  }), ee((g) => {
    if (v.value !== 0)
      return;
    let w = ue(f);
    if (!w)
      return;
    let _ = new IntersectionObserver((S) => {
      for (let T of S)
        T.boundingClientRect.x === 0 && T.boundingClientRect.y === 0 && T.boundingClientRect.width === 0 && T.boundingClientRect.height === 0 && h.close();
    });
    _.observe(w), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: w, initialFocus: _, ...S } = e, T = { open: v.value === 0 };
    return F(pr, { force: !0 }, () => [F(Ii, () => F(Ku, { target: f.value }, () => F(pr, { force: !1 }, () => F(Ze, { initialFocus: _, containers: c, features: y.value ? K(A.value, { parent: Ze.features.RestoreFocus, leaf: Ze.features.All & ~Ze.features.FocusLock }) : Ze.features.None }, () => H({ ourProps: g, theirProps: S, slot: T, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), F(fr, { features: It.Hidden, ref: p })]);
  };
} });
k({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = dt("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => H({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
k({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogBackdrop"), o = `headlessui-dialog-backdrop-${Re()}`, a = O(null);
  return n({ el: a, $el: a }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return F(pr, { force: !0 }, () => F(Ii, () => H({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Bi = k({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogPanel"), o = `headlessui-dialog-panel-${Re()}`;
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
  let n = dt("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return M(() => {
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
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function En(e, t, r, n, i, o) {
  let a = Ri(), s = o !== void 0 ? ec(o) : () => {
  };
  return $t(e, ...i), Zt(e, ...t, ...r), a.nextFrame(() => {
    $t(e, ...r), Zt(e, ...n), a.add(tc(e, (l) => ($t(e, ...n, ...t), Zt(e, ...i), s(l))));
  }), a.add(() => $t(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function xe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Vr = Symbol("TransitionContext");
var rc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(rc || {});
function nc() {
  return Q(Vr, null) !== null;
}
function ic() {
  let e = Q(Vr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function oc() {
  let e = Q(Wr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Wr = Symbol("NestingContext");
function Vt(e) {
  return "children" in e ? Vt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Li(e) {
  let t = O([]), r = O(!1);
  M(() => r.value = !0), Ge(() => r.value = !1);
  function n(o, a = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (K(a, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Vt(t) && r.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let qi = Pt.RenderStrategy, pt = k({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!nc() && Cu())
    return () => F(ht, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = O(null), a = O("visible"), s = C(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = ic(), { register: c, unregister: f } = oc(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Li(() => {
    v.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let w = c(d);
    Ge(w);
  }), ee(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      K(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = xe(e.enter), x = xe(e.enterFrom), A = xe(e.enterTo), P = xe(e.entered), E = xe(e.leave), $ = xe(e.leaveFrom), h = xe(e.leaveTo);
  M(() => {
    ee(() => {
      if (a.value === "visible") {
        let w = ue(o);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let _ = p.value && !u.value, S = ue(o);
    !S || !(S instanceof HTMLElement) || _ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? En(S, b, x, A, P, (T) => {
      v.value = !1, T === mr.Finished && t("afterEnter");
    }) : En(S, E, $, h, P, (T) => {
      v.value = !1, T === mr.Finished && (Vt(y) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    it([l], (w, _, S) => {
      g(S), p.value = !1;
    }, { immediate: !0 });
  }), Z(Wr, y), Du(C(() => K(a.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: w, show: _, enter: S, enterFrom: T, enterTo: D, entered: j, leave: U, leaveFrom: Y, leaveTo: B, ...N } = e;
    return H({ theirProps: N, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: qi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), ac = pt, ht = k({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), o = C(() => e.show === null && i !== null ? K(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  ee(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = O(o.value ? "visible" : "hidden"), s = Li(() => {
    a.value = "hidden";
  }), l = O(!0), u = { show: o, appear: C(() => e.appear || !l.value) };
  return M(() => {
    ee(() => {
      l.value = !1, o.value ? a.value = "visible" : Vt(s) || (a.value = "hidden");
    });
  }), Z(Wr, s), Z(Vr, u), () => {
    let c = Oi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return H({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [F(ac, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: qi, visible: a.value === "visible", name: "Transition" });
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
function Mi(e, t) {
  t = Rr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ct(t[r++])];
  return r && r == n ? e : void 0;
}
function Ur(e, t, r) {
  var n = e == null ? void 0 : Mi(e, t);
  return n === void 0 ? r : n;
}
var lc = function() {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const _n = lc;
function Ni(e, t, r) {
  t == "__proto__" && _n ? _n(e, t, {
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
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = ct(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = le(c) ? c : Er(t[i + 1]) ? [] : {});
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
        return G(e.values, t);
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
        const n = "splade.redirect", i = "splade.refresh", o = "splade.toast";
        let a = null, s = !1, l = [];
        Ne(r, (u) => {
          !le(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
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
function bc(e, t, r, n, i, o) {
  return R(), se("div", yc, [
    ge(e.$slots, "default", {
      handleFileInput: o.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const wc = /* @__PURE__ */ ft(gc, [["render", bc]]), Sc = {
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
        return G(e.values, t);
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
var Oc = "[object Boolean]";
function Gi(e) {
  return e === !0 || e === !1 || be(e) && Se(e) == Oc;
}
function $c() {
  this.__data__ = new ce(), this.size = 0;
}
function Ec(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function _c(e) {
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
function ae(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
ae.prototype.clear = $c;
ae.prototype.delete = Ec;
ae.prototype.get = _c;
ae.prototype.has = Tc;
ae.prototype.set = Ac;
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
function zi(e, t, r, n, i, o) {
  var a = r & Fc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Bc ? new Ct() : void 0;
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
      if (!Dc(t, function(x, A) {
        if (!jc(d, A) && (v === x || i(v, x, r, n, o)))
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
var Rc = ne.Uint8Array;
const Tn = Rc;
function Lc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function qc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Mc = 1, Nc = 2, kc = "[object Boolean]", Hc = "[object Date]", Vc = "[object Error]", Wc = "[object Map]", Uc = "[object Number]", Gc = "[object RegExp]", zc = "[object Set]", Kc = "[object String]", Xc = "[object Symbol]", Qc = "[object ArrayBuffer]", Yc = "[object DataView]", xn = ye ? ye.prototype : void 0, er = xn ? xn.valueOf : void 0;
function Jc(e, t, r, n, i, o, a) {
  switch (r) {
    case Yc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Qc:
      return !(e.byteLength != t.byteLength || !o(new Tn(e), new Tn(t)));
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
      var l = n & Mc;
      if (s || (s = qc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Nc, a.set(e, t);
      var c = zi(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
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
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function tf() {
  return [];
}
var rf = Object.prototype, nf = rf.propertyIsEnumerable, An = Object.getOwnPropertySymbols, of = An ? function(e) {
  return e == null ? [] : (e = Object(e), Ki(An(e), function(t) {
    return nf.call(e, t);
  }));
} : tf;
const af = of;
function Pn(e) {
  return ef(e, jt, af);
}
var sf = 1, lf = Object.prototype, uf = lf.hasOwnProperty;
function cf(e, t, r, n, i, o) {
  var a = r & sf, s = Pn(e), l = s.length, u = Pn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : uf.call(t, p)))
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
var ff = Be(ne, "DataView");
const yr = ff;
var df = Be(ne, "Promise");
const br = df;
var pf = Be(ne, "Set");
const wr = pf;
var hf = Be(ne, "WeakMap");
const Sr = hf;
var In = "[object Map]", vf = "[object Object]", Cn = "[object Promise]", Dn = "[object Set]", jn = "[object WeakMap]", Fn = "[object DataView]", mf = Fe(yr), gf = Fe(st), yf = Fe(br), bf = Fe(wr), wf = Fe(Sr), Ae = Se;
(yr && Ae(new yr(new ArrayBuffer(1))) != Fn || st && Ae(new st()) != In || br && Ae(br.resolve()) != Cn || wr && Ae(new wr()) != Dn || Sr && Ae(new Sr()) != jn) && (Ae = function(e) {
  var t = Se(e), r = t == vf ? e.constructor : void 0, n = r ? Fe(r) : "";
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
var Sf = 1, Rn = "[object Arguments]", Ln = "[object Array]", Et = "[object Object]", Of = Object.prototype, qn = Of.hasOwnProperty;
function $f(e, t, r, n, i, o) {
  var a = L(e), s = L(t), l = a ? Ln : Bn(e), u = s ? Ln : Bn(t);
  l = l == Rn ? Et : l, u = u == Rn ? Et : u;
  var c = l == Et, f = u == Et, p = l == u;
  if (p && nr(e)) {
    if (!nr(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new ae()), a || Qn(e) ? zi(e, t, r, n, i, o) : Jc(e, t, l, r, n, i, o);
  if (!(r & Sf)) {
    var d = c && qn.call(e, "__wrapped__"), v = f && qn.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return o || (o = new ae()), i(y, b, r, n, o);
    }
  }
  return p ? (o || (o = new ae()), cf(e, t, r, n, i, o)) : !1;
}
function Wt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : $f(e, t, r, n, Wt, i);
}
var Ef = 1, _f = 2;
function Tf(e, t, r, n) {
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
      if (!(p === void 0 ? Wt(c, u, Ef | _f, n, f) : p))
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
    return Mi(t, e);
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
  return t = vt(t), Tr(e, function(n, i, o) {
    Ni(r, i, t(n, i, o));
  }), r;
}
const Lf = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: !0,
      default: ""
    },
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
      missingAttributes: [],
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
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.missingAttributes.forEach((t) => {
      let r = {};
      e.querySelector(`[name="${t}"]`) ? r = "" : e.querySelector(`[name="${t}[]"]`) && (r = []), this.$put(t, r);
    }), this.missingAttributes = [];
  },
  methods: {
    hasError(e) {
      return G(this.errors, e);
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
            ].includes(r) ? e[r] : (G(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Ur(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, qf = {
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
}, Mf = { ref: "input" };
function Nf(e, t, r, n, i, o) {
  return R(), se("div", Mf, [
    ge(e.$slots, "default")
  ], 512);
}
const kf = /* @__PURE__ */ ft(qf, [["render", Nf]]), Hf = ["href", "onClick"], Vf = {
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
    return (i, o) => (R(), se("a", {
      href: e.href,
      onClick: bo(r, ["prevent"])
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
      var o = vt(r);
      t = jt(t), r = function(s) {
        return o(i[s], s, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[o ? t[a] : a] : void 0;
  };
}
function Gf(e, t, r, n) {
  for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
    if (t(e[o], o, e))
      return o;
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
var Mn = 0 / 0, Yf = /^[-+]0x[0-9a-f]+$/i, Jf = /^0b[01]+$/i, Zf = /^0o[0-7]+$/i, ed = parseInt;
function Or(e) {
  if (typeof e == "number")
    return e;
  if (Bt(e))
    return Mn;
  if (le(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = le(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qf(e);
  var r = Jf.test(e);
  return r || Zf.test(e) ? ed(e.slice(2), r ? 2 : 8) : Yf.test(e) ? Mn : +e;
}
var Nn = 1 / 0, td = 17976931348623157e292;
function rd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Or(e), e === Nn || e === -Nn) {
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
var od = Uf(id);
const ad = od, sd = {
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
      return ad(this.choicesInstance._store.choices, (t) => t.value == e);
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
  }
}, ld = { ref: "select" };
function ud(e, t, r, n, i, o) {
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
        return G(e, i);
      },
      hasFlash(i) {
        return G(t, i);
      },
      hasShared(i) {
        return G(r, i);
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
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(pd);
  t = Or(t) || 0, le(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? hd(Or(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, a = e.apply(w, g), a;
  }
  function v(h) {
    return u = h, s = setTimeout(x, t), c ? d(h) : a;
  }
  function y(h) {
    var g = h - l, w = h - u, _ = t - g;
    return f ? vd(_, o - w) : _;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= o;
  }
  function x() {
    var h = tr();
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
    return s === void 0 ? a : A(tr());
  }
  function $() {
    var h = tr(), g = b(h);
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
function Ji(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function gd(e, t, r) {
  e = Br(e), t = qt(t);
  var n = e.length;
  r = r === void 0 ? n : Ji(Gr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function yd(e, t) {
  var r = [];
  return xr(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
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
  return xr(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function Sd(e, t) {
  var r = L(e) ? di : wd;
  return r(e, vt(t));
}
function _t(e, t, r) {
  return e = Br(e), r = r == null ? 0 : Ji(Gr(r), 0, e.length), t = qt(t), e.slice(r, r + t.length) == t;
}
const Od = {
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
      if (_t(n, "filter[") && !r) {
        const i = n.split("["), o = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, o];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Ne(e, (t, r) => {
        _t(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = bd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Sd(r, (i) => i.key).sort();
      kn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (_t(e, "perPage") || _t(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Ne(e, (a, s) => {
        if (!L(a)) {
          n[s] = a;
          return;
        }
        a.length !== 0 && a.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      Ne(n, (a, s) => {
        a === null || a === [] || (i && (i += "&"), i += `${s}=${a}`);
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
  }
}, Ed = { ref: "textarea" };
function _d(e, t, r, n, i, o) {
  return R(), se("div", Ed, [
    ge(e.$slots, "default")
  ], 512);
}
const Td = /* @__PURE__ */ ft($d, [["render", _d]]), xd = {
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
}, Bd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, Tu).component(`${r}Confirm`, sc).component(`${r}Data`, pc).component(`${r}Defer`, hc).component(`${r}Errors`, vc).component(`${r}Event`, mc).component(`${r}File`, wc).component(`${r}Flash`, Sc).component(`${r}Form`, Lf).component(`${r}Input`, kf).component(`${r}Modal`, Wf).component(`${r}Render`, tt).component(`${r}Select`, cd).component(`${r}State`, fd).component(`${r}Table`, Od).component(`${r}Textarea`, Td).component(`${r}Toast`, xd).component(`${r}Toasts`, Pd).component(`${r}Toggle`, Id).component(t.link_component, Vf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Rd(e, t, r) {
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
  ms as SpladeApp,
  Bd as SpladePlugin,
  jd as renderSpladeApp,
  Rd as startServer
};
