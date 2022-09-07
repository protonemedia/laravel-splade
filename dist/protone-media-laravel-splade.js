import Gn from "axios";
import { ref as y, computed as C, watch as ct, openBlock as M, createBlock as ke, unref as ve, h as F, onMounted as k, createElementBlock as le, createElementVNode as or, provide as Z, inject as J, nextTick as ot, resolveDynamicComponent as co, KeepAlive as fo, withCtx as Kn, normalizeStyle as po, createVNode as ho, Fragment as xr, renderList as vo, createCommentVNode as mo, cloneVNode as go, watchEffect as Q, defineComponent as U, onUnmounted as Se, Teleport as yo, reactive as bo, onBeforeUnmount as wo, renderSlot as ge, resolveComponent as Oo, withModifiers as So } from "vue";
function $o(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Eo(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var _o = Eo();
const xo = _o;
function To(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ao = typeof global == "object" && global && global.Object === Object && global;
const Xn = Ao;
var Po = typeof self == "object" && self && self.Object === Object && self, Io = Xn || Po || Function("return this")();
const ne = Io;
var Co = ne.Symbol;
const ye = Co;
var Qn = Object.prototype, Do = Qn.hasOwnProperty, jo = Qn.toString, Je = ye ? ye.toStringTag : void 0;
function Fo(e) {
  var t = Do.call(e, Je), r = e[Je];
  try {
    e[Je] = void 0;
    var n = !0;
  } catch {
  }
  var i = jo.call(e);
  return n && (t ? e[Je] = r : delete e[Je]), i;
}
var Bo = Object.prototype, Ro = Bo.toString;
function Lo(e) {
  return Ro.call(e);
}
var qo = "[object Null]", Mo = "[object Undefined]", sn = ye ? ye.toStringTag : void 0;
function $e(e) {
  return e == null ? e === void 0 ? Mo : qo : sn && sn in Object(e) ? Fo(e) : Lo(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var ko = "[object Arguments]";
function ln(e) {
  return be(e) && $e(e) == ko;
}
var Yn = Object.prototype, No = Yn.hasOwnProperty, Ho = Yn.propertyIsEnumerable, Vo = ln(function() {
  return arguments;
}()) ? ln : function(e) {
  return be(e) && No.call(e, "callee") && !Ho.call(e, "callee");
};
const Jn = Vo;
var Uo = Array.isArray;
const N = Uo;
function Wo() {
  return !1;
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, un = Zn && typeof module == "object" && module && !module.nodeType && module, zo = un && un.exports === Zn, cn = zo ? ne.Buffer : void 0, Go = cn ? cn.isBuffer : void 0, Ko = Go || Wo;
const ar = Ko;
var Xo = 9007199254740991, Qo = /^(?:0|[1-9]\d*)$/;
function Tr(e, t) {
  var r = typeof e;
  return t = t == null ? Xo : t, !!t && (r == "number" || r != "symbol" && Qo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Yo = 9007199254740991;
function Ar(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yo;
}
var Jo = "[object Arguments]", Zo = "[object Array]", ea = "[object Boolean]", ta = "[object Date]", ra = "[object Error]", na = "[object Function]", ia = "[object Map]", oa = "[object Number]", aa = "[object Object]", sa = "[object RegExp]", la = "[object Set]", ua = "[object String]", ca = "[object WeakMap]", fa = "[object ArrayBuffer]", da = "[object DataView]", pa = "[object Float32Array]", ha = "[object Float64Array]", va = "[object Int8Array]", ma = "[object Int16Array]", ga = "[object Int32Array]", ya = "[object Uint8Array]", ba = "[object Uint8ClampedArray]", wa = "[object Uint16Array]", Oa = "[object Uint32Array]", I = {};
I[pa] = I[ha] = I[va] = I[ma] = I[ga] = I[ya] = I[ba] = I[wa] = I[Oa] = !0;
I[Jo] = I[Zo] = I[fa] = I[ea] = I[da] = I[ta] = I[ra] = I[na] = I[ia] = I[oa] = I[aa] = I[sa] = I[la] = I[ua] = I[ca] = !1;
function Sa(e) {
  return be(e) && Ar(e.length) && !!I[$e(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var ei = typeof exports == "object" && exports && !exports.nodeType && exports, tt = ei && typeof module == "object" && module && !module.nodeType && module, Ea = tt && tt.exports === ei, Yt = Ea && Xn.process, _a = function() {
  try {
    var e = tt && tt.require && tt.require("util").types;
    return e || Yt && Yt.binding && Yt.binding("util");
  } catch {
  }
}();
const fn = _a;
var dn = fn && fn.isTypedArray, xa = dn ? $a(dn) : Sa;
const ti = xa;
var Ta = Object.prototype, Aa = Ta.hasOwnProperty;
function Pa(e, t) {
  var r = N(e), n = !r && Jn(e), i = !r && !n && ar(e), o = !r && !n && !i && ti(e), a = r || n || i || o, s = a ? To(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Aa.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Tr(u, l))) && s.push(u);
  return s;
}
var Ia = Object.prototype;
function Ca(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ia;
  return e === r;
}
function Da(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ja = Da(Object.keys, Object);
const Fa = ja;
var Ba = Object.prototype, Ra = Ba.hasOwnProperty;
function La(e) {
  if (!Ca(e))
    return Fa(e);
  var t = [];
  for (var r in Object(e))
    Ra.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qa = "[object AsyncFunction]", Ma = "[object Function]", ka = "[object GeneratorFunction]", Na = "[object Proxy]";
function ri(e) {
  if (!ee(e))
    return !1;
  var t = $e(e);
  return t == Ma || t == ka || t == qa || t == Na;
}
function jt(e) {
  return e != null && Ar(e.length) && !ri(e);
}
function Ft(e) {
  return jt(e) ? Pa(e) : La(e);
}
function Pr(e, t) {
  return e && xo(e, t, Ft);
}
function Ha(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!jt(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Va = Ha(Pr);
const Ir = Va;
function ni(e) {
  return e;
}
function ii(e) {
  return typeof e == "function" ? e : ni;
}
function Ua(e, t) {
  var r = N(e) ? $o : Ir;
  return r(e, ii(t));
}
var Wa = Array.prototype, za = Wa.reverse;
function Ga(e) {
  return e == null ? e : za.call(e);
}
const sr = y(1), we = typeof window > "u";
function Ka(e, t) {
  we || window.addEventListener("popstate", Xa.bind(this)), jr(t), Bt(t.head), Fr(e);
  const r = we ? "" : location.href, n = Cr(
    r,
    t.head,
    e,
    {},
    sr.value
  );
  oi(n);
}
function Xa(e) {
  !e.state || (H.value = e.state, ie.value = 0, Bt(H.value.head), Fr(H.value.html, H.value.rememberedState.scrollY));
}
function Cr(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return H.value = o, o;
}
function Qa(e) {
  we || window.history.pushState(e, "", e.url);
}
function Ya(e) {
  const t = Cr(
    e,
    JSON.parse(JSON.stringify(H.value.head)),
    H.value.html,
    { ...H.value.rememberedState },
    H.value.pageVisitId
  );
  we || window.history.replaceState(t, "", t.url);
}
function oi(e) {
  we || window.history.replaceState(e, "", e.url);
}
const H = y({}), pn = y(0);
function Ja(e, t) {
  pn.value++;
  const r = e.request.responseURL;
  e.data.splade.modal && ie.value++, jr(e.data.splade), Bt(e.data.splade.head);
  const n = r === H.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return us(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  ie.value = 0;
  let i = e.data.html;
  t ? i += `<!-- ${pn.value} -->` : sr.value++, Fr(i, 0);
  const o = Cr(
    r,
    e.data.splade.head,
    i,
    H.value.rememberedState ? { ...H.value.rememberedState } : {},
    sr.value
  );
  t ? oi(o) : Qa(o);
}
const ie = y(0);
function Za() {
  ie.value--, Bt(ts(ie.value));
}
const ai = y({}), si = y({}), li = (e) => si.value[e], es = (e) => Object.keys(li.value[e]).length > 0, ui = y({}), ts = (e) => ui.value[e], ci = y({}), rs = (e) => ci.value[e], He = y([]), ns = C(() => Ga(He.value));
function is(e) {
  He.value.push(e);
}
function os(e) {
  He.value[e].dismissed = !0, He.value[e].html = null;
}
const Dr = y(null);
function as(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return Dr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function ss() {
  Dr.value = null;
}
function jr(e) {
  ai.value = e.shared ? e.shared : {}, ci.value[ie.value] = e.flash ? e.flash : {}, ui.value[ie.value] = e.head ? e.head : {}, Ua(e.toasts ? e.toasts : [], (t) => {
    He.value.push(t);
  }), si.value[ie.value] = e.errors ? e.errors : {};
}
function ls(e) {
  gi.value(e);
}
function Bt(e) {
  hi.value(e);
}
function Fr(e, t) {
  vi.value(e, t);
}
function us(e, t) {
  mi.value(e, t);
}
const fi = y({});
function di(e, t, r) {
  fi.value[e] = t, r && cs(e, t);
}
function cs(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function fs(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : fi.value[e];
}
function Ot(e, t) {
  we || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function ft(e, t, r, n, i) {
  we || di("scrollY", window.scrollY), Ot("request", { url: e, method: t, data: r, headers: n, replace: i });
  const o = Gn({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), Ot("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return o.then((a) => {
    Ja(a, i), Ot("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    Ot("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a });
    const s = a.response.data.splade;
    s && jr(s), a.response.status != 422 && ls(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
}
function pi(e) {
  return ft(e, "GET", {}, {}, !0);
}
function ds(e) {
  return ft(e, "GET", {}, {}, !1);
}
function ps(e) {
  return ft(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function hs(e) {
  return ft(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function vs() {
  return pi(H.value.url);
}
const hi = y(() => {
}), vi = y(() => {
}), mi = y(() => {
}), gi = y(() => {
}), m = {
  init: Ka,
  replace: pi,
  visit: ds,
  modal: ps,
  slideover: hs,
  refresh: vs,
  request: ft,
  replaceUrlOfCurrentPage: Ya,
  setOnHead(e) {
    hi.value = e;
  },
  setOnHtml(e) {
    vi.value = e;
  },
  setOnModal(e) {
    mi.value = e;
  },
  setOnServerError(e) {
    gi.value = e;
  },
  hasValidationErrors: es,
  validationErrors: li,
  sharedData: ai,
  flashData: rs,
  toasts: He,
  toastsReversed: ns,
  confirmModal: Dr,
  confirm: as,
  clearConfirmModal: ss,
  pushToast: is,
  dismissToast: os,
  restore: fs,
  remember: di,
  popStack: Za,
  currentStack: ie,
  pageVisitId: C(() => H.value.pageVisitId),
  isSsr: we
};
function Ne(e, t) {
  return e && Pr(e, ii(t));
}
var ms = "[object String]";
function Jt(e) {
  return typeof e == "string" || !N(e) && be(e) && $e(e) == ms;
}
const rt = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = y(null);
    function n() {
      r.value = F({
        template: t.html
      });
    }
    return ct(() => t.html, n, { immediate: !0 }), (i, o) => (M(), ke(ve(r)));
  }
}, gs = {
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
    const i = y(null);
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
    return k(() => o()), (s, l) => (M(), le("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      or("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, ys = {
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
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Z("stack", 0);
    const r = y(), n = y([]), i = y(null), o = C(() => m.currentStack.value < 1 ? [] : {
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
    const l = J("$spladeOptions") || {};
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (M(), le("div", null, [
      (M(), ke(co(ve(m).isSsr ? "div" : fo), {
        max: ve(l).max_keep_alive
      }, {
        default: Kn(() => [
          (M(), ke(rt, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: po(ve(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      ho(rt, { html: e.components }, null, 8, ["html"]),
      (M(!0), le(xr, null, vo(ve(m).currentStack.value, (d) => (M(), ke(rt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ve(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (M(), ke(gs, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : mo("", !0)
    ]));
  }
};
function Md(e) {
  return () => F(ys, e);
}
var bs = Object.prototype, ws = bs.hasOwnProperty;
function Os(e, t) {
  return e != null && ws.call(e, t);
}
var Ss = "[object Symbol]";
function Rt(e) {
  return typeof e == "symbol" || be(e) && $e(e) == Ss;
}
var $s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Es = /^\w*$/;
function Br(e, t) {
  if (N(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : Es.test(e) || !$s.test(e) || t != null && e in Object(t);
}
var _s = ne["__core-js_shared__"];
const Zt = _s;
var hn = function() {
  var e = /[^.]+$/.exec(Zt && Zt.keys && Zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xs(e) {
  return !!hn && hn in e;
}
var Ts = Function.prototype, As = Ts.toString;
function Be(e) {
  if (e != null) {
    try {
      return As.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ps = /[\\^$.*+?()[\]{}|]/g, Is = /^\[object .+?Constructor\]$/, Cs = Function.prototype, Ds = Object.prototype, js = Cs.toString, Fs = Ds.hasOwnProperty, Bs = RegExp(
  "^" + js.call(Fs).replace(Ps, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Rs(e) {
  if (!ee(e) || xs(e))
    return !1;
  var t = ri(e) ? Bs : Is;
  return t.test(Be(e));
}
function Ls(e, t) {
  return e == null ? void 0 : e[t];
}
function Re(e, t) {
  var r = Ls(e, t);
  return Rs(r) ? r : void 0;
}
var qs = Re(Object, "create");
const at = qs;
function Ms() {
  this.__data__ = at ? at(null) : {}, this.size = 0;
}
function ks(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ns = "__lodash_hash_undefined__", Hs = Object.prototype, Vs = Hs.hasOwnProperty;
function Us(e) {
  var t = this.__data__;
  if (at) {
    var r = t[e];
    return r === Ns ? void 0 : r;
  }
  return Vs.call(t, e) ? t[e] : void 0;
}
var Ws = Object.prototype, zs = Ws.hasOwnProperty;
function Gs(e) {
  var t = this.__data__;
  return at ? t[e] !== void 0 : zs.call(t, e);
}
var Ks = "__lodash_hash_undefined__";
function Xs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = at && t === void 0 ? Ks : t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = Ms;
De.prototype.delete = ks;
De.prototype.get = Us;
De.prototype.has = Gs;
De.prototype.set = Xs;
function Qs() {
  this.__data__ = [], this.size = 0;
}
function Rr(e, t) {
  return e === t || e !== e && t !== t;
}
function Lt(e, t) {
  for (var r = e.length; r--; )
    if (Rr(e[r][0], t))
      return r;
  return -1;
}
var Ys = Array.prototype, Js = Ys.splice;
function Zs(e) {
  var t = this.__data__, r = Lt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Js.call(t, r, 1), --this.size, !0;
}
function el(e) {
  var t = this.__data__, r = Lt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function tl(e) {
  return Lt(this.__data__, e) > -1;
}
function rl(e, t) {
  var r = this.__data__, n = Lt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Qs;
ce.prototype.delete = Zs;
ce.prototype.get = el;
ce.prototype.has = tl;
ce.prototype.set = rl;
var nl = Re(ne, "Map");
const st = nl;
function il() {
  this.size = 0, this.__data__ = {
    hash: new De(),
    map: new (st || ce)(),
    string: new De()
  };
}
function ol(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qt(e, t) {
  var r = e.__data__;
  return ol(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function al(e) {
  var t = qt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sl(e) {
  return qt(this, e).get(e);
}
function ll(e) {
  return qt(this, e).has(e);
}
function ul(e, t) {
  var r = qt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = il;
fe.prototype.delete = al;
fe.prototype.get = sl;
fe.prototype.has = ll;
fe.prototype.set = ul;
var cl = "Expected a function";
function Lr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(cl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Lr.Cache || fe)(), r;
}
Lr.Cache = fe;
var fl = 500;
function dl(e) {
  var t = Lr(e, function(n) {
    return r.size === fl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var pl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hl = /\\(\\)?/g, vl = dl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pl, function(r, n, i, o) {
    t.push(i ? o.replace(hl, "$1") : n || r);
  }), t;
});
const ml = vl;
function yi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var gl = 1 / 0, vn = ye ? ye.prototype : void 0, mn = vn ? vn.toString : void 0;
function Mt(e) {
  if (typeof e == "string")
    return e;
  if (N(e))
    return yi(e, Mt) + "";
  if (Rt(e))
    return mn ? mn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -gl ? "-0" : t;
}
function qr(e) {
  return e == null ? "" : Mt(e);
}
function Mr(e, t) {
  return N(e) ? e : Br(e, t) ? [e] : ml(qr(e));
}
var yl = 1 / 0;
function dt(e) {
  if (typeof e == "string" || Rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yl ? "-0" : t;
}
function bi(e, t, r) {
  t = Mr(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = dt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Ar(i) && Tr(a, i) && (N(e) || Jn(e)));
}
function V(e, t) {
  return e != null && bi(e, t, Os);
}
function K(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, K), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function W({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = bl(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return er(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return K(l, { [0]() {
      return null;
    }, [1]() {
      return er({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return er(s);
}
function er({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = Oi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (n) {
    let c = !1, f = [];
    for (let [p, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && f.push(p);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (a === "template") {
    if (l = wi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!wl(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return go(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return F(a, Object.assign({}, s, u), l);
}
function wi(e) {
  return e.flatMap((t) => t.type === xr ? wi(t.children) : [t]);
}
function bl(...e) {
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
        if (i instanceof Event && i.defaultPrevented)
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
function wl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ol = 0;
function Sl() {
  return ++Ol;
}
function Le() {
  return Sl();
}
var Si = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Si || {});
function ue(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $i = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function $l() {
  return kr() !== null;
}
function kr() {
  return J($i, null);
}
function El(e) {
  Z($i, e);
}
const kt = typeof window > "u" || typeof document > "u";
function Ge(e) {
  if (kt)
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
var lt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(lt || {}), Ei = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ei || {}), _l = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(_l || {});
function xl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lr));
}
var _i = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_i || {});
function Tl(e, t = 0) {
  var r;
  return e === ((r = Ge(e)) == null ? void 0 : r.body) ? !1 : K(t, { [0]() {
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
let Al = ["textarea", "input"].join(",");
function Pl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Al)) != null ? r : !1;
}
function Il(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ur(e, t, r = !0, n = null) {
  var i;
  let o = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, a = Array.isArray(e) ? r ? Il(e) : e : xl(e);
  n = n != null ? n : o.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(n)) + 1;
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
  } while (p !== o.activeElement);
  return t & 6 && Pl(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function tr(e, t, r) {
  kt || Q((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Cl(e, t, r = C(() => !0)) {
  function n(o, a) {
    if (!r.value || o.defaultPrevented)
      return;
    let s = a(o);
    if (s === null || !s.ownerDocument.documentElement.contains(s))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : ue(u);
      if (c != null && c.contains(s))
        return;
    }
    return !Tl(s, _i.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s);
  }
  let i = y(null);
  tr("mousedown", (o) => {
    r.value && (i.value = o.target);
  }, !0), tr("click", (o) => {
    !i.value || (n(o, () => i.value), i.value = null);
  }, !0), tr("blur", (o) => n(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var It = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(It || {});
let cr = U({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return W({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Dl(e, t, r) {
  kt || Q((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fr || {});
function jl() {
  let e = y(0);
  return Dl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function xi(e, t, r, n) {
  kt || Q((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Fl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Ti = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ti || {});
let Ze = Object.assign(U({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let o = C(() => Ge(i));
  Bl({ ownerDocument: o }, C(() => Boolean(e.features & 16)));
  let a = Rl({ ownerDocument: o, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Ll({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, C(() => Boolean(e.features & 8)));
  let s = jl();
  function l() {
    let u = ue(i);
    !u || K(s.value, { [fr.Forwards]: () => ur(u, lt.First), [fr.Backwards]: () => ur(u, lt.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return F(xr, [Boolean(f & 4) && F(cr, { as: "button", type: "button", onFocus: l, features: It.Focusable }), W({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && F(cr, { as: "button", type: "button", onFocus: l, features: It.Focusable })]);
  };
} }), { features: Ti });
function Bl({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var o;
    r.value || (r.value = (o = e.value) == null ? void 0 : o.activeElement);
  }
  function i() {
    !r.value || (nt(r.value), r.value = null);
  }
  k(() => {
    ct(t, (o, a) => {
      o !== a && (o ? n() : i());
    }, { immediate: !0 });
  }), Se(i);
}
function Rl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), o = y(!1);
  return k(() => o.value = !0), Se(() => o.value = !1), k(() => {
    ct([t, r, n], (a, s) => {
      if (a.every((u, c) => (s == null ? void 0 : s[c]) === u) || !n.value)
        return;
      let l = ue(t);
      !l || Fl(() => {
        var u, c;
        if (!o.value)
          return;
        let f = ue(r), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            i.value = p;
            return;
          }
        } else if (l.contains(p)) {
          i.value = p;
          return;
        }
        f ? nt(f) : ur(l, lt.First | lt.NoScroll) === Ei.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Ll({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
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
    u && u instanceof HTMLElement ? ql(s, u) ? (n.value = u, nt(u)) : (a.preventDefault(), a.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function ql(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let gn = "body > *", Me = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function yn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function bn(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Ml(e, t = y(!0)) {
  Q((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ge(n);
    if (i) {
      Me.add(n);
      for (let o of he.keys())
        o.contains(n) && (bn(o), he.delete(o));
      i.querySelectorAll(gn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of Me)
            if (o.contains(a))
              return;
          Me.size === 1 && (he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), yn(o));
        }
      }), r(() => {
        if (Me.delete(n), Me.size > 0)
          i.querySelectorAll(gn).forEach((o) => {
            if (o instanceof HTMLElement && !he.has(o)) {
              for (let a of Me)
                if (o.contains(a))
                  return;
              he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), yn(o);
            }
          });
        else
          for (let o of he.keys())
            bn(o), he.delete(o);
      });
    }
  });
}
let Ai = Symbol("ForcePortalRootContext");
function kl() {
  return J(Ai, !1);
}
let dr = U({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Z(Ai, e.force), () => {
    let { force: n, ...i } = e;
    return W({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Nl(e) {
  let t = Ge(e);
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
let Pi = U({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = C(() => Ge(n)), o = kl(), a = J(Ii, null), s = y(o === !0 || a == null ? Nl(n.value) : a.resolveTarget());
  return Q(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), Se(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return F(yo, { to: s.value }, W({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ii = Symbol("PortalGroupContext"), Hl = U({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = bo({ resolveTarget() {
    return e.target;
  } });
  return Z(Ii, n), () => {
    let { target: i, ...o } = e;
    return W({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ci = Symbol("StackContext");
var pr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(pr || {});
function Vl() {
  return J(Ci, () => {
  });
}
function Ul({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Vl();
  function o(...a) {
    n == null || n(...a), i(...a);
  }
  k(() => {
    ct(t, (a, s) => {
      a ? o(0, e, r) : s === !0 && o(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Se(() => {
    t.value && o(1, e, r);
  }), Z(Ci, o);
}
let Di = Symbol("DescriptionContext");
function Wl() {
  let e = J(Di, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function zl({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return Z(Di, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let kd = U({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Wl(), i = `headlessui-description-${Le()}`;
  return k(() => Se(n.register(i))), () => {
    let { name: o = "Description", slot: a = y({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return W({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
function Nr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, o, a) {
    return n.addEventListener(i, o, a), r.add(() => n.removeEventListener(i, o, a));
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
function Gl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Kl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kl || {});
let hr = Symbol("DialogContext");
function pt(e) {
  let t = J(hr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pt), r;
  }
  return t;
}
let St = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ji = U({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: St }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = y(!1);
  k(() => {
    a.value = !0;
  });
  let s = y(0), l = kr(), u = C(() => e.open === St && l !== null ? K(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), f = y(null), p = y(null), d = C(() => Ge(f));
  if (i({ el: f, $el: f }), !(e.open !== St || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === St ? void 0 : e.open}`);
  let v = C(() => a.value && u.value ? 0 : 1), b = C(() => v.value === 0), w = C(() => s.value > 1), T = J(hr, null) !== null, A = C(() => w.value ? "parent" : "leaf");
  Ml(f, C(() => w.value ? b.value : !1)), Ul({ type: "Dialog", enabled: C(() => v.value === 0), element: f, onUpdate: (g, O, $) => {
    if (O === "Dialog")
      return K(g, { [pr.Add]() {
        c.value.add($), s.value += 1;
      }, [pr.Remove]() {
        c.value.delete($), s.value -= 1;
      } });
  } });
  let P = zl({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), E = `headlessui-dialog-${Le()}`, S = y(null), h = { titleId: S, panelRef: y(null), dialogState: v, setTitleId(g) {
    S.value !== g && (S.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(hr, h), Cl(() => {
    var g, O, $;
    return [...Array.from((O = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? O : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(ue(p)) || h.panelRef.value && x.contains(h.panelRef.value))), ($ = h.panelRef.value) != null ? $ : f.value];
  }, (g, O) => {
    h.close(), ot(() => O == null ? void 0 : O.focus());
  }, C(() => v.value === 0 && !w.value)), xi((o = d.value) == null ? void 0 : o.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === Si.Escape && v.value === 0 && (w.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Q((g) => {
    var O;
    if (v.value !== 0 || T)
      return;
    let $ = d.value;
    if (!$)
      return;
    let x = Nr();
    function _(B, R, L) {
      let q = B.style.getPropertyValue(R);
      return Object.assign(B.style, { [R]: L }), x.add(() => {
        Object.assign(B.style, { [R]: q });
      });
    }
    let D = $ == null ? void 0 : $.documentElement, j = ((O = $.defaultView) != null ? O : window).innerWidth - D.clientWidth;
    if (_(D, "overflow", "hidden"), j > 0) {
      let B = D.clientWidth - D.offsetWidth, R = j - B;
      _(D, "paddingRight", `${R}px`);
    }
    if (Gl()) {
      x.addEventListener($, "touchmove", (R) => {
        R.preventDefault();
      }, { passive: !1 });
      let B = window.pageYOffset;
      x.add(() => window.scrollTo(0, B));
    }
    g(x.dispose);
  }), Q((g) => {
    if (v.value !== 0)
      return;
    let O = ue(f);
    if (!O)
      return;
    let $ = new IntersectionObserver((x) => {
      for (let _ of x)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && h.close();
    });
    $.observe(O), g(() => $.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": S.value, "aria-describedby": P.value }, { open: O, initialFocus: $, ...x } = e, _ = { open: v.value === 0 };
    return F(dr, { force: !0 }, () => [F(Pi, () => F(Hl, { target: f.value }, () => F(dr, { force: !1 }, () => F(Ze, { initialFocus: $, containers: c, features: b.value ? K(A.value, { parent: Ze.features.RestoreFocus, leaf: Ze.features.All & ~Ze.features.FocusLock }) : Ze.features.None }, () => W({ ourProps: g, theirProps: x, slot: _, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), F(cr, { features: It.Hidden, ref: p })]);
  };
} });
U({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogOverlay"), i = `headlessui-dialog-overlay-${Le()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => W({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
U({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogBackdrop"), o = `headlessui-dialog-backdrop-${Le()}`, a = y(null);
  return n({ el: a, $el: a }), k(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return F(dr, { force: !0 }, () => F(Pi, () => W({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Fi = U({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogPanel"), o = `headlessui-dialog-panel-${Le()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: i.panelRef, onClick: a };
    return W({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
U({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogTitle"), i = `headlessui-dialog-title-${Le()}`;
  return k(() => {
    n.setTitleId(i), Se(() => n.setTitleId(null));
  }), () => W({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Xl(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function rr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var vr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(vr || {});
function Ql(e, t) {
  let r = Nr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function wn(e, t, r, n, i, o) {
  let a = Nr(), s = o !== void 0 ? Xl(o) : () => {
  };
  return $t(e, ...i), rr(e, ...t, ...r), a.nextFrame(() => {
    $t(e, ...r), rr(e, ...n), a.add(Ql(e, (l) => ($t(e, ...n, ...t), rr(e, ...i), s(l))));
  }), a.add(() => $t(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Ae(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Hr = Symbol("TransitionContext");
var Yl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Yl || {});
function Jl() {
  return J(Hr, null) !== null;
}
function Zl() {
  let e = J(Hr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function eu() {
  let e = J(Vr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Vr = Symbol("NestingContext");
function Nt(e) {
  return "children" in e ? Nt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Bi(e) {
  let t = y([]), r = y(!1);
  k(() => r.value = !0), Se(() => r.value = !1);
  function n(o, a = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (K(a, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Nt(t) && r.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Ri = Pt.RenderStrategy, Ke = U({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Jl() && $l())
    return () => F(Xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = y(null), a = y("visible"), s = C(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = Zl(), { register: c, unregister: f } = eu(), p = { value: !0 }, d = Le(), v = { value: !1 }, b = Bi(() => {
    v.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  k(() => {
    let O = c(d);
    Se(O);
  }), Q(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      K(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let w = Ae(e.enter), T = Ae(e.enterFrom), A = Ae(e.enterTo), P = Ae(e.entered), E = Ae(e.leave), S = Ae(e.leaveFrom), h = Ae(e.leaveTo);
  k(() => {
    Q(() => {
      if (a.value === "visible") {
        let O = ue(o);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(O) {
    let $ = p.value && !u.value, x = ue(o);
    !x || !(x instanceof HTMLElement) || $ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), O(l.value ? wn(x, w, T, A, P, (_) => {
      v.value = !1, _ === vr.Finished && t("afterEnter");
    }) : wn(x, E, S, h, P, (_) => {
      v.value = !1, _ === vr.Finished && (Nt(b) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return k(() => {
    ct([l], (O, $, x) => {
      g(x), p.value = !1;
    }, { immediate: !0 });
  }), Z(Vr, b), El(C(() => K(a.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: O, show: $, enter: x, enterFrom: _, enterTo: D, entered: j, leave: B, leaveFrom: R, leaveTo: L, ...q } = e;
    return W({ theirProps: q, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Ri, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), tu = Ke, Xe = U({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = kr(), o = C(() => e.show === null && i !== null ? K(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  Q(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(o.value ? "visible" : "hidden"), s = Bi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: o, appear: C(() => e.appear || !l.value) };
  return k(() => {
    Q(() => {
      l.value = !1, o.value ? a.value = "visible" : Nt(s) || (a.value = "hidden");
    });
  }), Z(Vr, s), Z(Hr, u), () => {
    let c = Oi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return W({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [F(tu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Ri, visible: a.value === "visible", name: "Transition" });
  };
} });
const ru = {
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
      DialogPanel: Fi,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function Li(e, t) {
  t = Mr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[dt(t[r++])];
  return r && r == n ? e : void 0;
}
function Ur(e, t, r) {
  var n = e == null ? void 0 : Li(e, t);
  return n === void 0 ? r : n;
}
var nu = function() {
  try {
    var e = Re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const On = nu;
function qi(e, t, r) {
  t == "__proto__" && On ? On(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var iu = Object.prototype, ou = iu.hasOwnProperty;
function au(e, t, r) {
  var n = e[t];
  (!(ou.call(e, t) && Rr(n, r)) || r === void 0 && !(t in e)) && qi(e, t, r);
}
function su(e, t, r, n) {
  if (!ee(e))
    return e;
  t = Mr(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = dt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ee(c) ? c : Tr(t[i + 1]) ? [] : {});
    }
    au(s, l, u), s = s[l];
  }
  return e;
}
function Mi(e, t, r) {
  return e == null ? e : su(e, t, r);
}
const lu = {
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
          Mi(e.values, r, n);
        }
      })
    );
  }
}, uu = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Gn(e).then((t) => {
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
}, cu = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    },
    opened: {
      type: Boolean,
      required: !0
    },
    closeOnEscape: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  setup(e) {
    const t = e, r = y(null), n = y(null), i = y(null);
    return k(() => {
      r.value = (o) => {
        o.target === n.value || n.value.contains(o.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (o) => {
        t.opened && o.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), wo(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (o, a) => (M(), le("div", {
      ref_key: "root",
      ref: n
    }, [
      ge(o.$slots, "default")
    ], 512));
  }
};
function G(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fe(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function z(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ce = Math.max, Ct = Math.min, Ve = Math.round;
function mr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ki() {
  return !/^((?!chrome|android).)*safari/i.test(mr());
}
function Ue(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && z(e) && (i = e.offsetWidth > 0 && Ve(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ve(n.height) / e.offsetHeight || 1);
  var a = Fe(e) ? G(e) : window, s = a.visualViewport, l = !ki() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, p = n.height / o;
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
function zr(e) {
  var t = G(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function fu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function du(e) {
  return e === G(e) || !z(e) ? zr(e) : fu(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ee(e) {
  return ((Fe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Gr(e) {
  return Ue(Ee(e)).left + zr(e).scrollLeft;
}
function Y(e) {
  return G(e).getComputedStyle(e);
}
function Kr(e) {
  var t = Y(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function pu(e) {
  var t = e.getBoundingClientRect(), r = Ve(t.width) / e.offsetWidth || 1, n = Ve(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function hu(e, t, r) {
  r === void 0 && (r = !1);
  var n = z(t), i = z(t) && pu(t), o = Ee(t), a = Ue(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || Kr(o)) && (s = du(t)), z(t) ? (l = Ue(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Gr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Ni(e) {
  var t = Ue(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ht(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wr(e) ? e.host : null) || Ee(e);
}
function Hi(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : z(e) && Kr(e) ? e : Hi(Ht(e));
}
function it(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Hi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = G(n), a = i ? [o].concat(o.visualViewport || [], Kr(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(it(Ht(a)));
}
function vu(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function Sn(e) {
  return !z(e) || Y(e).position === "fixed" ? null : e.offsetParent;
}
function mu(e) {
  var t = /firefox/i.test(mr()), r = /Trident/i.test(mr());
  if (r && z(e)) {
    var n = Y(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Ht(e);
  for (Wr(i) && (i = i.host); z(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var o = Y(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Vt(e) {
  for (var t = G(e), r = Sn(e); r && vu(r) && Y(r).position === "static"; )
    r = Sn(r);
  return r && (te(r) === "html" || te(r) === "body" && Y(r).position === "static") ? t : r || mu(e) || t;
}
var X = "top", re = "bottom", Oe = "right", oe = "left", Ut = "auto", Wt = [X, re, Oe, oe], We = "start", ut = "end", gu = "clippingParents", Vi = "viewport", et = "popper", yu = "reference", $n = /* @__PURE__ */ Wt.reduce(function(e, t) {
  return e.concat([t + "-" + We, t + "-" + ut]);
}, []), bu = /* @__PURE__ */ [].concat(Wt, [Ut]).reduce(function(e, t) {
  return e.concat([t, t + "-" + We, t + "-" + ut]);
}, []), wu = "beforeRead", Ou = "read", Su = "afterRead", $u = "beforeMain", Eu = "main", _u = "afterMain", xu = "beforeWrite", Tu = "write", Au = "afterWrite", gr = [wu, Ou, Su, $u, Eu, _u, xu, Tu, Au];
function Pu(e) {
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
function Iu(e) {
  var t = Pu(e);
  return gr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Cu(e) {
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
var Pe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Du = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', En = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ju(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), En).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(pe(Pe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Pe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          gr.indexOf(t.phase) < 0 && console.error(pe(Pe, t.name, '"phase"', "either " + gr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Pe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Pe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Pe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Pe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + En.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(pe(Du, String(t.name), n, n));
      });
    });
  });
}
function Fu(e, t) {
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
function Bu(e) {
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
function Ru(e, t) {
  var r = G(e), n = Ee(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = ki();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Gr(e),
    y: l
  };
}
function Lu(e) {
  var t, r = Ee(e), n = zr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ce(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ce(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Gr(e), l = -n.scrollTop;
  return Y(i || r).direction === "rtl" && (s += Ce(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function qu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Wr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function yr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Mu(e, t) {
  var r = Ue(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function _n(e, t, r) {
  return t === Vi ? yr(Ru(e, r)) : Fe(t) ? Mu(t, r) : yr(Lu(Ee(e)));
}
function ku(e) {
  var t = it(Ht(e)), r = ["absolute", "fixed"].indexOf(Y(e).position) >= 0, n = r && z(e) ? Vt(e) : e;
  return Fe(n) ? t.filter(function(i) {
    return Fe(i) && qu(i, n) && te(i) !== "body";
  }) : [];
}
function Nu(e, t, r, n) {
  var i = t === "clippingParents" ? ku(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = _n(e, u, n);
    return l.top = Ce(c.top, l.top), l.right = Ct(c.right, l.right), l.bottom = Ct(c.bottom, l.bottom), l.left = Ce(c.left, l.left), l;
  }, _n(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ze(e) {
  return e.split("-")[1];
}
function Ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ae(n) : null, o = n ? ze(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case X:
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
    case Oe:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case oe:
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
  var u = i ? Ui(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case We:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ut:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function zi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hu(e) {
  return Object.assign({}, zi(), e);
}
function Vu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? gu : s, u = r.rootBoundary, c = u === void 0 ? Vi : u, f = r.elementContext, p = f === void 0 ? et : f, d = r.altBoundary, v = d === void 0 ? !1 : d, b = r.padding, w = b === void 0 ? 0 : b, T = Hu(typeof w != "number" ? w : Vu(w, Wt)), A = p === et ? yu : et, P = e.rects.popper, E = e.elements[v ? A : p], S = Nu(Fe(E) ? E : E.contextElement || Ee(e.elements.popper), l, c, a), h = Ue(e.elements.reference), g = Wi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), O = yr(Object.assign({}, P, g)), $ = p === et ? O : h, x = {
    top: S.top - $.top + T.top,
    bottom: $.bottom - S.bottom + T.bottom,
    left: S.left - $.left + T.left,
    right: $.right - S.right + T.right
  }, _ = e.modifiersData.offset;
  if (p === et && _) {
    var D = _[i];
    Object.keys(x).forEach(function(j) {
      var B = [Oe, re].indexOf(j) >= 0 ? 1 : -1, R = [X, re].indexOf(j) >= 0 ? "y" : "x";
      x[j] += D[R] * B;
    });
  }
  return x;
}
var xn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Uu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Tn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function An() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Wu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? Tn : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Tn, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        b(), c.options = Object.assign({}, o, c.options, A), c.scrollParents = {
          reference: Fe(s) ? it(s) : s.contextElement ? it(s.contextElement) : [],
          popper: it(l)
        };
        var P = Iu(Bu([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Fu([].concat(P, c.options.modifiers), function(_) {
            var D = _.name;
            return D;
          });
          if (ju(E), ae(c.options.placement) === Ut) {
            var S = c.orderedModifiers.find(function(_) {
              var D = _.name;
              return D === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = Y(l), g = h.marginTop, O = h.marginRight, $ = h.marginBottom, x = h.marginLeft;
          [g, O, $, x].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var T = c.elements, A = T.reference, P = T.popper;
          if (!An(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(xn);
            return;
          }
          c.rects = {
            reference: hu(A, Vt(P), c.options.strategy === "fixed"),
            popper: Ni(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var E = 0, S = 0; S < c.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Uu);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, S = -1;
              continue;
            }
            var h = c.orderedModifiers[S], g = h.fn, O = h.options, $ = O === void 0 ? {} : O, x = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: $,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Cu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!An(s, l))
      return process.env.NODE_ENV !== "production" && console.error(xn), d;
    d.setOptions(u).then(function(w) {
      !p && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function v() {
      c.orderedModifiers.forEach(function(w) {
        var T = w.name, A = w.options, P = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var S = E({
            state: c,
            name: T,
            instance: d,
            options: P
          }), h = function() {
          };
          f.push(S || h);
        }
      });
    }
    function b() {
      f.forEach(function(w) {
        return w();
      }), f = [];
    }
    return d;
  };
}
var Et = {
  passive: !0
};
function zu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = G(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Et);
  }), s && l.addEventListener("resize", r.update, Et), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Et);
    }), s && l.removeEventListener("resize", r.update, Et);
  };
}
const Gu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: zu,
  data: {}
};
function Ku(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Wi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Xu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ku,
  data: {}
};
var Qu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Yu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Ve(t * i) / i || 0,
    y: Ve(r * i) / i || 0
  };
}
function Pn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, v = a.y, b = v === void 0 ? 0 : v, w = typeof c == "function" ? c({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = w.x, b = w.y;
  var T = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = oe, E = X, S = window;
  if (u) {
    var h = Vt(r), g = "clientHeight", O = "clientWidth";
    if (h === G(r) && (h = Ee(r), Y(h).position !== "static" && s === "absolute" && (g = "scrollHeight", O = "scrollWidth")), h = h, i === X || (i === oe || i === Oe) && o === ut) {
      E = re;
      var $ = f && h === S && S.visualViewport ? S.visualViewport.height : h[g];
      b -= $ - n.height, b *= l ? 1 : -1;
    }
    if (i === oe || (i === X || i === re) && o === ut) {
      P = Oe;
      var x = f && h === S && S.visualViewport ? S.visualViewport.width : h[O];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: s
  }, u && Qu), D = c === !0 ? Yu({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  if (d = D.x, b = D.y, l) {
    var j;
    return Object.assign({}, _, (j = {}, j[E] = A ? "0" : "", j[P] = T ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, _, (t = {}, t[E] = A ? b + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function Ju(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = Y(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ae(t.placement),
    variation: ze(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Zu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ju,
  data: {}
};
function ec(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !z(o) || !te(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function tc(e) {
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
      !z(i) || !te(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const rc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ec,
  effect: tc,
  requires: ["computeStyles"]
};
var nc = [Gu, Xu, Zu, rc], ic = /* @__PURE__ */ Wu({
  defaultModifiers: nc
});
function oc(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e, t, r) {
  return Ce(e, Ct(t, r));
}
function ac(e, t, r) {
  var n = Tt(e, t, r);
  return n > r ? r : n;
}
function sc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, b = v === void 0 ? 0 : v, w = Xr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = ae(t.placement), A = ze(t.placement), P = !A, E = Ui(T), S = oc(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, O = t.rects.popper, $ = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, x = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (o) {
      var j, B = E === "y" ? X : oe, R = E === "y" ? re : Oe, L = E === "y" ? "height" : "width", q = h[E], mt = q + w[B], _e = q - w[R], gt = d ? -O[L] / 2 : 0, Gt = A === We ? g[L] : O[L], Qe = A === We ? -O[L] : -g[L], yt = t.elements.arrow, qe = d && yt ? Ni(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zi(), Ye = de[B], bt = de[R], xe = Tt(0, g[L], qe[L]), Kt = P ? g[L] / 2 - gt - xe - Ye - x.mainAxis : Gt - xe - Ye - x.mainAxis, io = P ? -g[L] / 2 + gt + xe + bt + x.mainAxis : Qe + xe + bt + x.mainAxis, Xt = t.elements.arrow && Vt(t.elements.arrow), oo = Xt ? E === "y" ? Xt.clientTop || 0 : Xt.clientLeft || 0 : 0, Yr = (j = _ == null ? void 0 : _[E]) != null ? j : 0, ao = q + Kt - Yr - oo, so = q + io - Yr, Jr = Tt(d ? Ct(mt, ao) : mt, q, d ? Ce(_e, so) : _e);
      h[E] = Jr, D[E] = Jr - q;
    }
    if (s) {
      var Zr, lo = E === "x" ? X : oe, uo = E === "x" ? re : Oe, Te = h[S], wt = S === "y" ? "height" : "width", en = Te + w[lo], tn = Te - w[uo], Qt = [X, oe].indexOf(T) !== -1, rn = (Zr = _ == null ? void 0 : _[S]) != null ? Zr : 0, nn = Qt ? en : Te - g[wt] - O[wt] - rn + x.altAxis, on = Qt ? Te + g[wt] + O[wt] - rn - x.altAxis : tn, an = d && Qt ? ac(nn, Te, on) : Tt(d ? nn : en, Te, d ? on : tn);
      h[S] = an, D[S] = an - Te;
    }
    t.modifiersData[n] = D;
  }
}
const lc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sc,
  requiresIfExists: ["offset"]
};
var uc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function At(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return uc[t];
  });
}
var cc = {
  start: "end",
  end: "start"
};
function In(e) {
  return e.replace(/start|end/g, function(t) {
    return cc[t];
  });
}
function fc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? bu : l, c = ze(n), f = c ? s ? $n : $n.filter(function(v) {
    return ze(v) === c;
  }) : Wt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, b) {
    return v[b] = Xr(e, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[ae(b)], v;
  }, {});
  return Object.keys(d).sort(function(v, b) {
    return d[v] - d[b];
  });
}
function dc(e) {
  if (ae(e) === Ut)
    return [];
  var t = At(e);
  return [In(e), t, In(t)];
}
function pc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, b = r.allowedAutoPlacements, w = t.options.placement, T = ae(w), A = T === w, P = l || (A || !v ? [At(w)] : dc(w)), E = [w].concat(P).reduce(function(qe, de) {
      return qe.concat(ae(de) === Ut ? fc(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : de);
    }, []), S = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), O = !0, $ = E[0], x = 0; x < E.length; x++) {
      var _ = E[x], D = ae(_), j = ze(_) === We, B = [X, re].indexOf(D) >= 0, R = B ? "width" : "height", L = Xr(t, {
        placement: _,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), q = B ? j ? Oe : oe : j ? re : X;
      S[R] > h[R] && (q = At(q));
      var mt = At(q), _e = [];
      if (o && _e.push(L[D] <= 0), s && _e.push(L[q] <= 0, L[mt] <= 0), _e.every(function(qe) {
        return qe;
      })) {
        $ = _, O = !1;
        break;
      }
      g.set(_, _e);
    }
    if (O)
      for (var gt = v ? 3 : 1, Gt = function(de) {
        var Ye = E.find(function(bt) {
          var xe = g.get(bt);
          if (xe)
            return xe.slice(0, de).every(function(Kt) {
              return Kt;
            });
        });
        if (Ye)
          return $ = Ye, "break";
      }, Qe = gt; Qe > 0; Qe--) {
        var yt = Gt(Qe);
        if (yt === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const hc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ht = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, vc = {
  components: {
    OnClickOutside: cu
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start",
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
    this.popper = ic(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [hc, lc]
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
}, mc = { ref: "button" }, gc = { ref: "tooltip" };
function yc(e, t, r, n, i, o) {
  const a = Oo("OnClickOutside");
  return M(), ke(a, {
    class: "relative",
    do: o.hide,
    opened: i.opened
  }, {
    default: Kn(() => [
      or("div", mc, [
        ge(e.$slots, "button", {
          toggle: o.toggle,
          disabled: r.disabled
        })
      ], 512),
      or("div", gc, [
        ge(e.$slots, "default", {
          hide: o.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["do", "opened"]);
}
const bc = /* @__PURE__ */ ht(vc, [["render", yc]]);
function Gi(e) {
  return e && e.length ? e[0] : void 0;
}
const wc = {
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
        return V(e.values, t);
      },
      first(t) {
        return Gi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, Oc = {
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
          !ee(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
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
}, Sc = {
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
}, $c = { ref: "file" };
function Ec(e, t, r, n, i, o) {
  return M(), le("div", $c, [
    ge(e.$slots, "default", {
      handleFileInput: o.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const _c = /* @__PURE__ */ ht(Sc, [["render", Ec]]), xc = {
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
        return V(e.values, t);
      },
      ...this.values
    });
  }
};
function br(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => br(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => br(t));
}
function Ki(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Qi(t, Xi(null, r), e[r]);
  return t;
}
function Xi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Qi(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Qi(e, Xi(t, n.toString()), r[n]));
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
  Ki(r);
}
var Tc = "[object Boolean]";
function Yi(e) {
  return e === !0 || e === !1 || be(e) && $e(e) == Tc;
}
function Ac() {
  this.__data__ = new ce(), this.size = 0;
}
function Pc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ic(e) {
  return this.__data__.get(e);
}
function Cc(e) {
  return this.__data__.has(e);
}
var Dc = 200;
function jc(e, t) {
  var r = this.__data__;
  if (r instanceof ce) {
    var n = r.__data__;
    if (!st || n.length < Dc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function se(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
se.prototype.clear = Ac;
se.prototype.delete = Pc;
se.prototype.get = Ic;
se.prototype.has = Cc;
se.prototype.set = jc;
var Fc = "__lodash_hash_undefined__";
function Bc(e) {
  return this.__data__.set(e, Fc), this;
}
function Rc(e) {
  return this.__data__.has(e);
}
function Dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < r; )
    this.add(e[t]);
}
Dt.prototype.add = Dt.prototype.push = Bc;
Dt.prototype.has = Rc;
function Lc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function qc(e, t) {
  return e.has(t);
}
var Mc = 1, kc = 2;
function Ji(e, t, r, n, i, o) {
  var a = r & Mc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & kc ? new Dt() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var v = e[f], b = t[f];
    if (n)
      var w = a ? n(b, v, f, t, e, o) : n(v, b, f, e, t, o);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Lc(t, function(T, A) {
        if (!qc(d, A) && (v === T || i(v, T, r, n, o)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === b || i(v, b, r, n, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
var Nc = ne.Uint8Array;
const Cn = Nc;
function Hc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Vc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Uc = 1, Wc = 2, zc = "[object Boolean]", Gc = "[object Date]", Kc = "[object Error]", Xc = "[object Map]", Qc = "[object Number]", Yc = "[object RegExp]", Jc = "[object Set]", Zc = "[object String]", ef = "[object Symbol]", tf = "[object ArrayBuffer]", rf = "[object DataView]", Dn = ye ? ye.prototype : void 0, nr = Dn ? Dn.valueOf : void 0;
function nf(e, t, r, n, i, o, a) {
  switch (r) {
    case rf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case tf:
      return !(e.byteLength != t.byteLength || !o(new Cn(e), new Cn(t)));
    case zc:
    case Gc:
    case Qc:
      return Rr(+e, +t);
    case Kc:
      return e.name == t.name && e.message == t.message;
    case Yc:
    case Zc:
      return e == t + "";
    case Xc:
      var s = Hc;
    case Jc:
      var l = n & Uc;
      if (s || (s = Vc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Wc, a.set(e, t);
      var c = Ji(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case ef:
      if (nr)
        return nr.call(e) == nr.call(t);
  }
  return !1;
}
function of(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function af(e, t, r) {
  var n = t(e);
  return N(e) ? n : of(n, r(e));
}
function Zi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function sf() {
  return [];
}
var lf = Object.prototype, uf = lf.propertyIsEnumerable, jn = Object.getOwnPropertySymbols, cf = jn ? function(e) {
  return e == null ? [] : (e = Object(e), Zi(jn(e), function(t) {
    return uf.call(e, t);
  }));
} : sf;
const ff = cf;
function Fn(e) {
  return af(e, Ft, ff);
}
var df = 1, pf = Object.prototype, hf = pf.hasOwnProperty;
function vf(e, t, r, n, i, o) {
  var a = r & df, s = Fn(e), l = s.length, u = Fn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : hf.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var b = !0;
  o.set(e, t), o.set(t, e);
  for (var w = a; ++f < l; ) {
    p = s[f];
    var T = e[p], A = t[p];
    if (n)
      var P = a ? n(A, T, p, t, e, o) : n(T, A, p, e, t, o);
    if (!(P === void 0 ? T === A || i(T, A, r, n, o) : P)) {
      b = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (b && !w) {
    var E = e.constructor, S = t.constructor;
    E != S && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof S == "function" && S instanceof S) && (b = !1);
  }
  return o.delete(e), o.delete(t), b;
}
var mf = Re(ne, "DataView");
const wr = mf;
var gf = Re(ne, "Promise");
const Or = gf;
var yf = Re(ne, "Set");
const Sr = yf;
var bf = Re(ne, "WeakMap");
const $r = bf;
var Bn = "[object Map]", wf = "[object Object]", Rn = "[object Promise]", Ln = "[object Set]", qn = "[object WeakMap]", Mn = "[object DataView]", Of = Be(wr), Sf = Be(st), $f = Be(Or), Ef = Be(Sr), _f = Be($r), Ie = $e;
(wr && Ie(new wr(new ArrayBuffer(1))) != Mn || st && Ie(new st()) != Bn || Or && Ie(Or.resolve()) != Rn || Sr && Ie(new Sr()) != Ln || $r && Ie(new $r()) != qn) && (Ie = function(e) {
  var t = $e(e), r = t == wf ? e.constructor : void 0, n = r ? Be(r) : "";
  if (n)
    switch (n) {
      case Of:
        return Mn;
      case Sf:
        return Bn;
      case $f:
        return Rn;
      case Ef:
        return Ln;
      case _f:
        return qn;
    }
  return t;
});
const kn = Ie;
var xf = 1, Nn = "[object Arguments]", Hn = "[object Array]", _t = "[object Object]", Tf = Object.prototype, Vn = Tf.hasOwnProperty;
function Af(e, t, r, n, i, o) {
  var a = N(e), s = N(t), l = a ? Hn : kn(e), u = s ? Hn : kn(t);
  l = l == Nn ? _t : l, u = u == Nn ? _t : u;
  var c = l == _t, f = u == _t, p = l == u;
  if (p && ar(e)) {
    if (!ar(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new se()), a || ti(e) ? Ji(e, t, r, n, i, o) : nf(e, t, l, r, n, i, o);
  if (!(r & xf)) {
    var d = c && Vn.call(e, "__wrapped__"), v = f && Vn.call(t, "__wrapped__");
    if (d || v) {
      var b = d ? e.value() : e, w = v ? t.value() : t;
      return o || (o = new se()), i(b, w, r, n, o);
    }
  }
  return p ? (o || (o = new se()), vf(e, t, r, n, i, o)) : !1;
}
function zt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : Af(e, t, r, n, zt, i);
}
var Pf = 1, If = 2;
function Cf(e, t, r, n) {
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
      var f = new se();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? zt(c, u, Pf | If, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function eo(e) {
  return e === e && !ee(e);
}
function Df(e) {
  for (var t = Ft(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, eo(i)];
  }
  return t;
}
function to(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function jf(e) {
  var t = Df(e);
  return t.length == 1 && t[0][2] ? to(t[0][0], t[0][1]) : function(r) {
    return r === e || Cf(r, e, t);
  };
}
function Ff(e, t) {
  return e != null && t in Object(e);
}
function Bf(e, t) {
  return e != null && bi(e, t, Ff);
}
var Rf = 1, Lf = 2;
function qf(e, t) {
  return Br(e) && eo(t) ? to(dt(e), t) : function(r) {
    var n = Ur(r, e);
    return n === void 0 && n === t ? Bf(r, e) : zt(t, n, Rf | Lf);
  };
}
function Mf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function kf(e) {
  return function(t) {
    return Li(t, e);
  };
}
function Nf(e) {
  return Br(e) ? Mf(dt(e)) : kf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? ni : typeof e == "object" ? N(e) ? qf(e[0], e[1]) : jf(e) : Nf(e);
}
function ro(e, t) {
  var r = {};
  return t = vt(t), Pr(e, function(n, i, o) {
    qi(r, i, t(n, i, o));
  }), r;
}
const Hf = {
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
    stay: {
      type: Boolean,
      require: !1,
      default: !1
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
      return ro(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.missingAttributes.forEach((t) => {
      let r = "";
      const n = e.querySelector(`[name="${t}"]`);
      n ? r = n.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${t}[]"]`) ? r = [] : (e.querySelector(`[name^="${t}."]`) || e.querySelector(`[name^="${t}["]`)) && (r = {}), this.$put(t, r);
    }), this.missingAttributes = [];
  },
  methods: {
    hasError(e) {
      return V(this.errors, e);
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return Mi(this.values, e, t);
    },
    submit(e) {
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        Yi(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || br(this.values) ? Ki(this.values) : this.values, t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0), m.request(this.action, this.method.toUpperCase(), e, t).then((r) => {
        this.$emit("success", r), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch((r) => {
        this.processing = !1, this.$emit("error", r);
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
            ].includes(r) ? e[r] : (V(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Ur(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Vf = {
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
      type: [String, Number],
      required: !1
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: !1,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: !0 });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
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
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Uf = { ref: "input" };
function Wf(e, t, r, n, i, o) {
  return M(), le("div", Uf, [
    ge(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const zf = /* @__PURE__ */ ht(Vf, [["render", Wf]]), Gf = ["href", "onClick"], Kf = {
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
        Yi(t.confirm) ? "" : t.confirm,
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
    return (i, o) => (M(), le("a", {
      href: e.href,
      onClick: So(r, ["prevent"])
    }, [
      ge(i.$slots, "default")
    ], 8, Gf));
  }
}, Xf = {
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
      DialogPanel: Fi,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function Qf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!jt(t)) {
      var o = vt(r);
      t = Ft(t), r = function(s) {
        return o(i[s], s, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[o ? t[a] : a] : void 0;
  };
}
function Yf(e, t, r, n) {
  for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Jf = /\s/;
function Zf(e) {
  for (var t = e.length; t-- && Jf.test(e.charAt(t)); )
    ;
  return t;
}
var ed = /^\s+/;
function td(e) {
  return e && e.slice(0, Zf(e) + 1).replace(ed, "");
}
var Un = 0 / 0, rd = /^[-+]0x[0-9a-f]+$/i, nd = /^0b[01]+$/i, id = /^0o[0-7]+$/i, od = parseInt;
function Er(e) {
  if (typeof e == "number")
    return e;
  if (Rt(e))
    return Un;
  if (ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = td(e);
  var r = nd.test(e);
  return r || id.test(e) ? od(e.slice(2), r ? 2 : 8) : rd.test(e) ? Un : +e;
}
var Wn = 1 / 0, ad = 17976931348623157e292;
function sd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Er(e), e === Wn || e === -Wn) {
    var t = e < 0 ? -1 : 1;
    return t * ad;
  }
  return e === e ? e : 0;
}
function Qr(e) {
  var t = sd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ld = Math.max;
function ud(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Qr(r);
  return i < 0 && (i = ld(n + i, 0)), Yf(e, vt(t), i);
}
var cd = Qf(ud);
const fd = cd, dd = {
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
      type: [String, Number, Array],
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
        this.setValueOnChoices(e);
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
    setValueOnChoices(e) {
      Array.isArray(e) && this.choicesInstance.removeActiveItems(), e === null && (e = ""), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return fd(this.choicesInstance._store.choices, (t) => t.value == e);
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
        }), this.setValueOnChoices(this.modelValue);
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, pd = { ref: "select" };
function hd(e, t, r, n, i, o) {
  return M(), le("div", pd, [
    ge(e.$slots, "default")
  ], 512);
}
const vd = /* @__PURE__ */ ht(dd, [["render", hd]]), md = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = ro(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return V(e, i);
      },
      hasFlash(i) {
        return V(t, i);
      },
      hasShared(i) {
        return V(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
var gd = function() {
  return ne.Date.now();
};
const ir = gd;
var yd = "Expected a function", bd = Math.max, wd = Math.min;
function Od(e, t, r) {
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(yd);
  t = Er(t) || 0, ee(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? bd(Er(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, O = i;
    return n = i = void 0, u = h, a = e.apply(O, g), a;
  }
  function v(h) {
    return u = h, s = setTimeout(T, t), c ? d(h) : a;
  }
  function b(h) {
    var g = h - l, O = h - u, $ = t - g;
    return f ? wd($, o - O) : $;
  }
  function w(h) {
    var g = h - l, O = h - u;
    return l === void 0 || g >= t || g < 0 || f && O >= o;
  }
  function T() {
    var h = ir();
    if (w(h))
      return A(h);
    s = setTimeout(T, b(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : A(ir());
  }
  function S() {
    var h = ir(), g = w(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(T, t), d(l);
    }
    return s === void 0 && (s = setTimeout(T, t)), a;
  }
  return S.cancel = P, S.flush = E, S;
}
function no(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Sd(e, t, r) {
  e = qr(e), t = Mt(t);
  var n = e.length;
  r = r === void 0 ? n : no(Qr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function $d(e, t) {
  var r = [];
  return Ir(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
  }), r;
}
function Ed(e, t) {
  var r = N(e) ? Zi : $d;
  return r(e, vt(t));
}
function zn(e, t) {
  return zt(e, t);
}
function _d(e, t) {
  var r = -1, n = jt(e) ? Array(e.length) : [];
  return Ir(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function xd(e, t) {
  var r = N(e) ? yi : _d;
  return r(e, vt(t));
}
function xt(e, t, r) {
  return e = qr(e), r = r == null ? 0 : no(Qr(r), 0, e.length), t = Mt(t), e.slice(r, r + t.length) == t;
}
const Td = {
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
      return !zn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Ne(e, (r, n) => {
      if (xt(n, "filter[") && !r) {
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
        xt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Ed(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = xd(r, (i) => i.key).sort();
      zn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
    debounceUpdateQuery: Od(function(e, t, r) {
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
        if (!Sd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], N(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (xt(e, "perPage") || xt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Ne(e, (a, s) => {
        if (!N(a)) {
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
}, Ad = {
  props: {
    autosize: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: [String, Number],
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
}, Pd = { ref: "textarea" };
function Id(e, t, r, n, i, o) {
  return M(), le("div", Pd, [
    ge(e.$slots, "default")
  ], 512);
}
const Cd = /* @__PURE__ */ ht(Ad, [["render", Id]]), Dd = {
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
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, jd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Fd = {
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
      positions: jd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: rt,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, Bd = {
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
            if (n.length === 1 && Gi(n) === "default") {
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
}, Rd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, _r = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    _r.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(_r.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Nd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = V(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = V(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = V(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = V(t, "link_component") ? t.link_component : "Link", t.progress_bar = V(t, "progress_bar") ? t.progress_bar : !1;
    const r = t.prefix;
    if (e.component(`${r}Confirm`, ru).component(`${r}Data`, lu).component(`${r}Defer`, uu).component(`${r}Dropdown`, bc).component(`${r}Errors`, wc).component(`${r}Event`, Oc).component(`${r}File`, _c).component(`${r}Flash`, xc).component(`${r}Form`, Hf).component(`${r}Input`, zf).component(`${r}Modal`, Xf).component(`${r}Render`, rt).component(`${r}Select`, vd).component(`${r}State`, md).component(`${r}Table`, Td).component(`${r}Textarea`, Cd).component(`${r}Toast`, Dd).component(`${r}Toasts`, Fd).component(`${r}Toggle`, Bd).component(`${r}Transition`, Rd).component(t.link_component, Kf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ee(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        V(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), _r.init(t.progress_bar);
    }
  }
};
function Hd(e, t, r) {
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
  ys as SpladeApp,
  Nd as SpladePlugin,
  Md as renderSpladeApp,
  Hd as startServer
};
