import ue from "axios";
import { ref as y, computed as q, watch as St, openBlock as D, createBlock as W, unref as V, createCommentVNode as Cr, h as M, onMounted as N, createElementBlock as be, createElementVNode as vr, provide as de, inject as U, nextTick as Ie, KeepAlive as ai, normalizeStyle as Bt, createVNode as _s, Fragment as kr, renderList as Is, cloneVNode as As, watchEffect as ae, defineComponent as G, onUnmounted as Fe, Teleport as oi, reactive as Ps, normalizeClass as qs, onBeforeUnmount as Fs, renderSlot as J, resolveComponent as Lr, withCtx as li, withModifiers as Cs, withDirectives as ks, resolveDynamicComponent as Ls, normalizeProps as Ds, guardReactiveProps as Bs, vShow as Rs } from "vue";
function js(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ms(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Ns = Ms();
const Vs = Ns;
function Us(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Hs = typeof global == "object" && global && global.Object === Object && global;
const ui = Hs;
var Ws = typeof self == "object" && self && self.Object === Object && self, zs = ui || Ws || Function("return this")();
const me = zs;
var Gs = me.Symbol;
const Ae = Gs;
var ci = Object.prototype, Xs = ci.hasOwnProperty, Ks = ci.toString, ft = Ae ? Ae.toStringTag : void 0;
function Ys(e) {
  var t = Xs.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ks.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Qs = Object.prototype, Js = Qs.toString;
function Zs(e) {
  return Js.call(e);
}
var ea = "[object Null]", ta = "[object Undefined]", Sn = Ae ? Ae.toStringTag : void 0;
function Ce(e) {
  return e == null ? e === void 0 ? ta : ea : Sn && Sn in Object(e) ? Ys(e) : Zs(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var ra = "[object Arguments]";
function On(e) {
  return Pe(e) && Ce(e) == ra;
}
var di = Object.prototype, na = di.hasOwnProperty, ia = di.propertyIsEnumerable, sa = On(function() {
  return arguments;
}()) ? On : function(e) {
  return Pe(e) && na.call(e, "callee") && !ia.call(e, "callee");
};
const fi = sa;
var aa = Array.isArray;
const j = aa;
function oa() {
  return !1;
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, $n = pi && typeof module == "object" && module && !module.nodeType && module, la = $n && $n.exports === pi, En = la ? me.Buffer : void 0, ua = En ? En.isBuffer : void 0, ca = ua || oa;
const gr = ca;
var da = 9007199254740991, fa = /^(?:0|[1-9]\d*)$/;
function Dr(e, t) {
  var r = typeof e;
  return t = t == null ? da : t, !!t && (r == "number" || r != "symbol" && fa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var pa = 9007199254740991;
function Br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pa;
}
var ha = "[object Arguments]", ma = "[object Array]", va = "[object Boolean]", ga = "[object Date]", ya = "[object Error]", ba = "[object Function]", wa = "[object Map]", Sa = "[object Number]", Oa = "[object Object]", $a = "[object RegExp]", Ea = "[object Set]", xa = "[object String]", Ta = "[object WeakMap]", _a = "[object ArrayBuffer]", Ia = "[object DataView]", Aa = "[object Float32Array]", Pa = "[object Float64Array]", qa = "[object Int8Array]", Fa = "[object Int16Array]", Ca = "[object Int32Array]", ka = "[object Uint8Array]", La = "[object Uint8ClampedArray]", Da = "[object Uint16Array]", Ba = "[object Uint32Array]", F = {};
F[Aa] = F[Pa] = F[qa] = F[Fa] = F[Ca] = F[ka] = F[La] = F[Da] = F[Ba] = !0;
F[ha] = F[ma] = F[_a] = F[va] = F[Ia] = F[ga] = F[ya] = F[ba] = F[wa] = F[Sa] = F[Oa] = F[$a] = F[Ea] = F[xa] = F[Ta] = !1;
function Ra(e) {
  return Pe(e) && Br(e.length) && !!F[Ce(e)];
}
function ja(e) {
  return function(t) {
    return e(t);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, vt = hi && typeof module == "object" && module && !module.nodeType && module, Ma = vt && vt.exports === hi, lr = Ma && ui.process, Na = function() {
  try {
    var e = vt && vt.require && vt.require("util").types;
    return e || lr && lr.binding && lr.binding("util");
  } catch {
  }
}();
const xn = Na;
var Tn = xn && xn.isTypedArray, Va = Tn ? ja(Tn) : Ra;
const mi = Va;
var Ua = Object.prototype, Ha = Ua.hasOwnProperty;
function Wa(e, t) {
  var r = j(e), n = !r && fi(e), i = !r && !n && gr(e), s = !r && !n && !i && mi(e), a = r || n || i || s, o = a ? Us(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ha.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Dr(u, l))) && o.push(u);
  return o;
}
var za = Object.prototype;
function Ga(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || za;
  return e === r;
}
function Xa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ka = Xa(Object.keys, Object);
const Ya = Ka;
var Qa = Object.prototype, Ja = Qa.hasOwnProperty;
function Za(e) {
  if (!Ga(e))
    return Ya(e);
  var t = [];
  for (var r in Object(e))
    Ja.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function z(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var eo = "[object AsyncFunction]", to = "[object Function]", ro = "[object GeneratorFunction]", no = "[object Proxy]";
function vi(e) {
  if (!z(e))
    return !1;
  var t = Ce(e);
  return t == to || t == ro || t == eo || t == no;
}
function Ut(e) {
  return e != null && Br(e.length) && !vi(e);
}
function Ht(e) {
  return Ut(e) ? Wa(e) : Za(e);
}
function Rr(e, t) {
  return e && Vs(e, t, Ht);
}
function io(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ut(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var so = io(Rr);
const jr = so;
function gi(e) {
  return e;
}
function yi(e) {
  return typeof e == "function" ? e : gi;
}
function ao(e, t) {
  var r = j(e) ? js : jr;
  return r(e, yi(t));
}
function ne(e, t) {
  return e && Rr(e, yi(t));
}
var oo = Array.prototype, lo = oo.reverse;
function uo(e) {
  return e == null ? e : lo.call(e);
}
class bi {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    !this.events[t] || (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    !this.events[t] || this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Rt = y(0), te = y(1), C = y({}), ie = y(0), Wt = y({}), tt = {}, we = typeof window > "u";
function co(e, t, r) {
  we || window.addEventListener("popstate", fo.bind(this)), Object.keys(t).length > 0 && Rt.value++, tt[te.value] = new bi(te.value), Ur(r), zt(r.head), Hr(e);
  const n = we ? "" : location.href, i = Mr(
    n,
    r.head,
    e,
    t,
    {},
    te.value,
    Rt.value,
    r.persistentLayout
  );
  wi(i);
}
function fo(e) {
  !e.state || (C.value = e.state, ie.value = 0, Wt.value = {}, Wr.value = {}, Nr.value = C.value.persistentLayoutKey, zt(C.value.head), Hr(C.value.html, C.value.rememberedState.scrollY));
}
function Mr(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return C.value = l, l;
}
function po(e) {
  we || window.history.pushState(e, "", e.url);
}
function ho(e) {
  const t = Mr(
    e,
    JSON.parse(JSON.stringify(C.value.head)),
    C.value.html,
    JSON.parse(JSON.stringify(C.value.dynamics)),
    { ...C.value.rememberedState },
    C.value.pageVisitId,
    C.value.dynamicVisitId,
    C.value.persistentLayoutKey
  );
  we || window.history.replaceState(t, "", t.url);
}
function wi(e) {
  we || window.history.replaceState(e, "", e.url);
}
const ur = y(0), Nr = y(null);
function mo(e, t) {
  var m;
  ur.value++;
  const r = e.request.responseURL;
  if (z((m = e.data) == null ? void 0 : m.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ie.value++;
  const n = Nr.value;
  if (Ur(e.data.splade), zt(e.data.splade.head), r === C.value.url && (t = !0), e.data.splade.modal)
    return Pi(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ie.value = 0, Wt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(C.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && ne(s, (h, d) => {
    s[d] += `<!-- ${ur.value} -->`;
  }), (!o || !a) && (i += `<!-- ${ur.value} -->`)) : (o && Rt.value++, (!o || !a) && (te.value++, tt[te.value] = tt[te.value] || new bi(te.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !we && t && e.data.splade.preserveScroll && (u = window.scrollY), Hr(
    l ? C.value.html : i,
    u
  );
  const c = Mr(
    r,
    e.data.splade.head,
    l ? C.value.html : i,
    s,
    C.value.rememberedState ? { ...C.value.rememberedState } : {},
    te.value,
    Rt.value,
    e.data.splade.persistentLayout
  );
  t ? wi(c) : po(c);
}
function vo() {
  ie.value--, zt(yo(ie.value));
}
const Si = y({}), Oi = (e) => Si.value[e], go = (e) => Object.keys(Oi.value[e]).length > 0, $i = y({}), yo = (e) => $i.value[e], Ei = y({}), bo = (e) => Ei.value[e], rt = y([]);
function wo(e) {
  rt.value.push(e);
}
const So = q(() => uo(rt.value));
function Oo(e) {
  rt.value[e].dismissed = !0, rt.value[e].html = null;
}
const Vr = y(null);
function $o(e, t, r, n, i, s) {
  let a, o;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1);
  const l = new Promise((u, c) => {
    a = u, o = c;
  });
  return Vr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: a,
    rejectPromise: o,
    confirmPassword: i,
    confirmPasswordOnce: s
  }, l;
}
function Eo() {
  Vr.value = null;
}
const xi = y({});
function Ur(e) {
  Nr.value = e.persistentLayout, xi.value = e.shared ? e.shared : {}, Ei.value[ie.value] = e.flash ? e.flash : {}, $i.value[ie.value] = e.head ? e.head : {}, ao(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), Si.value[ie.value] = e.errors ? e.errors : {};
}
const Ti = y(() => {
}), _i = y(() => {
}), Ii = y(() => {
}), Ai = y(() => {
});
function zt(e) {
  Ti.value(e);
}
function Hr(e, t) {
  _i.value(e, t);
}
function Pi(e, t) {
  Wt.value[ie.value] = !0, Ii.value(e, t);
}
function xo(e) {
  return Wt.value[e];
}
function To(e) {
  Ai.value(e);
}
const qi = y({});
function Fi(e, t, r) {
  qi.value[e] = t, r && _o(e, t);
}
function _o(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Io(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : qi.value[e];
}
function At(e, t) {
  we || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function We(e, t, r, n, i) {
  if (we || Fi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  At("request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = ue({
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
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), At("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    mo(a, i), At("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (At("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Ur(o), a.response.status != 422 && To(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Ci(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, !0);
}
function Ao(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, !1);
}
function Po(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Wr = y({});
function qo(e) {
  const t = Wr.value[e];
  return t ? (ie.value++, Pi(t.html, t.type), !0) : !1;
}
function Fo(e, t, r) {
  Wr.value[e] = { html: t, type: r };
}
function Co(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function ko(e, t) {
  return We(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Lo(e, t) {
  return We(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Do() {
  return Ci(C.value.url);
}
function Bo(e, t) {
  tt[te.value].on(e, t);
}
function Ro(e, t) {
  tt[te.value].off(e, t);
}
function jo(e, t) {
  typeof t > "u" && (t = {}), tt[te.value].emit(e, t);
}
const v = {
  init: co,
  replace: Ci,
  visit: Ao,
  modal: Po,
  slideover: Co,
  refresh: Do,
  request: We,
  lazy: ko,
  rehydrate: Lo,
  replaceUrlOfCurrentPage: ho,
  htmlForDynamicComponent(e) {
    return C.value.dynamics[e];
  },
  setOnHead(e) {
    Ti.value = e;
  },
  setOnHtml(e) {
    _i.value = e;
  },
  setOnModal(e) {
    Ii.value = e;
  },
  setOnServerError(e) {
    Ai.value = e;
  },
  hasValidationErrors: go,
  validationErrors: Oi,
  sharedData: xi,
  flashData: bo,
  toasts: rt,
  toastsReversed: So,
  confirmModal: Vr,
  confirm: $o,
  clearConfirmModal: Eo,
  pushToast: wo,
  dismissToast: Oo,
  restore: Io,
  remember: Fi,
  popStack: vo,
  currentStack: ie,
  stackType: xo,
  pageVisitId: q(() => C.value.pageVisitId),
  dynamicVisitId: q(() => C.value.dynamicVisitId),
  isSsr: we,
  openPreloadedModal: qo,
  registerPreloadedModal: Fo,
  on: Bo,
  off: Ro,
  emit: jo
};
var Mo = "[object String]";
function re(e) {
  return typeof e == "string" || !j(e) && Pe(e) && Ce(e) == Mo;
}
const ce = {
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
      r.value = M({
        template: t.html
      });
    }
    return St(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (D(), W(V(r), { key: 0 })) : Cr("", !0);
  }
}, No = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = y(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return N(() => i()), (o, l) => (D(), be("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      vr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Vo = {
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
        if (!v.isSsr) {
          const t = re(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = re(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = re(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = re(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    de("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = U("$spladeOptions") || {}, l = q(() => v.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, v.popStack();
    }
    function m(d) {
      const f = document.createElement("meta");
      ne(d, (p, g) => {
        f[g] = p;
      }), document.getElementsByTagName("head")[0].appendChild(f);
    }
    function h(d) {
      var p;
      let f = "meta";
      ne(d, (g, S) => {
        f = `${f}[${S}="${g}"]`;
      });
      try {
        (p = document.querySelector(f)) == null || p.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var f;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((p) => {
          h(p);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((p) => {
          m(p);
        }), (f = document.querySelector('link[rel="canonical"]')) == null || f.remove(), d.canonical) {
          const p = document.createElement("link");
          p.rel = "canonical", p.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(p);
        }
      }
    }), v.setOnHtml((d, f) => {
      n.value = [], r.value = d, Ie(() => {
        v.isSsr || window.scrollTo(0, f), o.transform_anchors && [...document.querySelectorAll("a")].forEach((p) => {
          p.href == "" || p.href.charAt(0) == "#" || p.__vnode.dynamicProps === null && (p.hasAttribute("download") || (p.onclick = function(g) {
            g.preventDefault(), v.visit(p.href);
          }));
        });
      });
    }), v.setOnModal(function(d, f) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: d, type: f }, Ie(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), N(() => {
      if (v.isSsr)
        return;
      const d = re(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((f) => {
        delete d.dataset[f];
      });
    }), (d, f) => (D(), be("div", null, [
      V(v).isSsr ? (D(), W(ce, {
        key: `visit.${V(v).pageVisitId.value}`,
        style: Bt(V(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (D(), W(ai, {
        key: 0,
        max: V(o).max_keep_alive
      }, [
        (D(), W(ce, {
          key: `visit.${V(v).pageVisitId.value}`,
          style: Bt(V(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      _s(ce, { html: e.components }, null, 8, ["html"]),
      (D(!0), be(kr, null, Is(V(v).currentStack.value, (p) => (D(), W(ce, {
        key: `modal.${p}`,
        type: n.value[p].type,
        html: n.value[p].html,
        stack: p,
        "on-top-of-stack": V(v).currentStack.value === p,
        animate: a.value,
        onClose: (g) => c(p)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (D(), W(No, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Cr("", !0)
    ]));
  }
};
function gp(e) {
  return () => M(Vo, e);
}
var Uo = Object.prototype, Ho = Uo.hasOwnProperty;
function Wo(e, t) {
  return e != null && Ho.call(e, t);
}
var zo = "[object Symbol]";
function Gt(e) {
  return typeof e == "symbol" || Pe(e) && Ce(e) == zo;
}
var Go = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xo = /^\w*$/;
function zr(e, t) {
  if (j(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Gt(e) ? !0 : Xo.test(e) || !Go.test(e) || t != null && e in Object(t);
}
var Ko = me["__core-js_shared__"];
const cr = Ko;
var _n = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yo(e) {
  return !!_n && _n in e;
}
var Qo = Function.prototype, Jo = Qo.toString;
function ze(e) {
  if (e != null) {
    try {
      return Jo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zo = /[\\^$.*+?()[\]{}|]/g, el = /^\[object .+?Constructor\]$/, tl = Function.prototype, rl = Object.prototype, nl = tl.toString, il = rl.hasOwnProperty, sl = RegExp(
  "^" + nl.call(il).replace(Zo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function al(e) {
  if (!z(e) || Yo(e))
    return !1;
  var t = vi(e) ? sl : el;
  return t.test(ze(e));
}
function ol(e, t) {
  return e == null ? void 0 : e[t];
}
function Ge(e, t) {
  var r = ol(e, t);
  return al(r) ? r : void 0;
}
var ll = Ge(Object, "create");
const yt = ll;
function ul() {
  this.__data__ = yt ? yt(null) : {}, this.size = 0;
}
function cl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var dl = "__lodash_hash_undefined__", fl = Object.prototype, pl = fl.hasOwnProperty;
function hl(e) {
  var t = this.__data__;
  if (yt) {
    var r = t[e];
    return r === dl ? void 0 : r;
  }
  return pl.call(t, e) ? t[e] : void 0;
}
var ml = Object.prototype, vl = ml.hasOwnProperty;
function gl(e) {
  var t = this.__data__;
  return yt ? t[e] !== void 0 : vl.call(t, e);
}
var yl = "__lodash_hash_undefined__";
function bl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = yt && t === void 0 ? yl : t, this;
}
function Ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ve.prototype.clear = ul;
Ve.prototype.delete = cl;
Ve.prototype.get = hl;
Ve.prototype.has = gl;
Ve.prototype.set = bl;
function wl() {
  this.__data__ = [], this.size = 0;
}
function Gr(e, t) {
  return e === t || e !== e && t !== t;
}
function Xt(e, t) {
  for (var r = e.length; r--; )
    if (Gr(e[r][0], t))
      return r;
  return -1;
}
var Sl = Array.prototype, Ol = Sl.splice;
function $l(e) {
  var t = this.__data__, r = Xt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ol.call(t, r, 1), --this.size, !0;
}
function El(e) {
  var t = this.__data__, r = Xt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xl(e) {
  return Xt(this.__data__, e) > -1;
}
function Tl(e, t) {
  var r = this.__data__, n = Xt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = wl;
Se.prototype.delete = $l;
Se.prototype.get = El;
Se.prototype.has = xl;
Se.prototype.set = Tl;
var _l = Ge(me, "Map");
const bt = _l;
function Il() {
  this.size = 0, this.__data__ = {
    hash: new Ve(),
    map: new (bt || Se)(),
    string: new Ve()
  };
}
function Al(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Kt(e, t) {
  var r = e.__data__;
  return Al(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Pl(e) {
  var t = Kt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ql(e) {
  return Kt(this, e).get(e);
}
function Fl(e) {
  return Kt(this, e).has(e);
}
function Cl(e, t) {
  var r = Kt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = Il;
Oe.prototype.delete = Pl;
Oe.prototype.get = ql;
Oe.prototype.has = Fl;
Oe.prototype.set = Cl;
var kl = "Expected a function";
function Xr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Xr.Cache || Oe)(), r;
}
Xr.Cache = Oe;
var Ll = 500;
function Dl(e) {
  var t = Xr(e, function(n) {
    return r.size === Ll && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Bl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rl = /\\(\\)?/g, jl = Dl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bl, function(r, n, i, s) {
    t.push(i ? s.replace(Rl, "$1") : n || r);
  }), t;
});
const Ml = jl;
function ki(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Nl = 1 / 0, In = Ae ? Ae.prototype : void 0, An = In ? In.toString : void 0;
function Yt(e) {
  if (typeof e == "string")
    return e;
  if (j(e))
    return ki(e, Yt) + "";
  if (Gt(e))
    return An ? An.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nl ? "-0" : t;
}
function Kr(e) {
  return e == null ? "" : Yt(e);
}
function Yr(e, t) {
  return j(e) ? e : zr(e, t) ? [e] : Ml(Kr(e));
}
var Vl = 1 / 0;
function Ot(e) {
  if (typeof e == "string" || Gt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Li(e, t, r) {
  t = Yr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Ot(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Br(i) && Dr(a, i) && (j(e) || fi(e)));
}
function K(e, t) {
  return e != null && Li(e, t, Wo);
}
function Y(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n;
}
var jt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(jt || {}), _e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_e || {});
function X({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Bi(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return dr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return dr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return dr(o);
}
function dr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Ri(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let m = !1, h = [];
    for (let [d, f] of Object.entries(n))
      typeof f == "boolean" && (m = !0), f === !0 && h.push(d);
    m && (c["data-headlessui-state"] = h.join(" "));
  }
  if (o === "template") {
    if (u = Di(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [m, ...h] = u != null ? u : [];
      if (!Ul(m) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, g, S) => S.indexOf(p) === g).sort((p, g) => p.localeCompare(g)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let d = Bi((a = m.props) != null ? a : {}, l), f = As(m, d);
      for (let p in d)
        p.startsWith("on") && (f.props || (f.props = {}), f.props[p] = d[p]);
      return f;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return M(o, Object.assign({}, l, c), { default: () => u });
}
function Di(e) {
  return e.flatMap((t) => t.type === kr ? Di(t.children) : [t]);
}
function Bi(...e) {
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
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Ri(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Ul(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Hl = 0;
function Wl() {
  return ++Hl;
}
function Xe() {
  return Wl();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function fe(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Mi = Symbol("Context");
var Ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ue || {});
function zl() {
  return Qr() !== null;
}
function Qr() {
  return U(Mi, null);
}
function Gl(e) {
  de(Mi, e);
}
class Xl {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let $t = new Xl();
function ot(e) {
  if ($t.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = fe(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let yr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Te || {}), Ni = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ni || {}), Kl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Kl || {});
function Yl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(yr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Vi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Vi || {});
function Ql(e, t = 0) {
  var r;
  return e === ((r = ot(e)) == null ? void 0 : r.body) ? !1 : Y(t, { [0]() {
    return e.matches(yr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(yr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Ze(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Jl = ["textarea", "input"].join(",");
function Zl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Jl)) != null ? r : !1;
}
function eu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function kt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? eu(e) : e : Yl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((f) => !i.includes(f))), n = n != null ? n : a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, m = 0, h = o.length, d;
  do {
    if (m >= h || m + h <= 0)
      return 0;
    let f = u + m;
    if (t & 16)
      f = (f + h) % h;
    else {
      if (f < 0)
        return 3;
      if (f >= h)
        return 1;
    }
    d = o[f], d == null || d.focus(c), m += l;
  } while (d !== a.activeElement);
  return t & 6 && Zl(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function fr(e, t, r) {
  $t.isServer || ae((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function tu(e, t, r = q(() => !0)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : fe(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Ql(o, Vi.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  fr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), fr("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, !0), fr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Mt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Mt || {});
let br = G({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return X({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function ru(e, t, r) {
  $t.isServer || ae((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var mt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mt || {});
function nu() {
  let e = y(0);
  return ru("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ui(e, t, r, n) {
  $t.isServer || ae((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function iu(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Hi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hi || {});
let pt = Object.assign(G({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = q(() => ot(i));
  su({ ownerDocument: s }, q(() => Boolean(e.features & 16)));
  let a = au({ ownerDocument: s, container: i, initialFocus: q(() => e.initialFocus) }, q(() => Boolean(e.features & 2)));
  ou({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, q(() => Boolean(e.features & 8)));
  let o = nu();
  function l(h) {
    let d = fe(i);
    !d || ((f) => f())(() => {
      Y(o.value, { [mt.Forwards]: () => {
        kt(d, Te.First, { skipElements: [h.relatedTarget] });
      }, [mt.Backwards]: () => {
        kt(d, Te.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let u = y(!1);
  function c(h) {
    h.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function m(h) {
    var d;
    let f = new Set((d = e.containers) == null ? void 0 : d.value);
    f.add(i);
    let p = h.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (Wi(f, p) || (u.value ? kt(fe(i), Y(o.value, { [mt.Forwards]: () => Te.Next, [mt.Backwards]: () => Te.Previous }) | Te.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && Ze(h.target)));
  }
  return () => {
    let h = {}, d = { ref: i, onKeydown: c, onFocusout: m }, { features: f, initialFocus: p, containers: g, ...S } = e;
    return M(kr, [Boolean(f & 4) && M(br, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Mt.Focusable }), X({ ourProps: d, theirProps: { ...t, ...S }, slot: h, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && M(br, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Mt.Focusable })]);
  };
} }), { features: Hi });
function su({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    !r.value || (Ze(r.value), r.value = null);
  }
  N(() => {
    St(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: !0 });
  }), Fe(i);
}
function au({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return N(() => s.value = !0), Fe(() => s.value = !1), N(() => {
    St([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = fe(t);
      !l || iu(() => {
        var u, c;
        if (!s.value)
          return;
        let m = fe(r), h = (u = e.value) == null ? void 0 : u.activeElement;
        if (m) {
          if (m === h) {
            i.value = h;
            return;
          }
        } else if (l.contains(h)) {
          i.value = h;
          return;
        }
        m ? Ze(m) : kt(l, Te.First | Te.NoScroll) === Ni.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function ou({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Ui((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Wi(o, u) ? (n.value = u, Ze(u)) : (a.preventDefault(), a.stopPropagation(), Ze(l)) : Ze(n.value);
  }, !0);
}
function Wi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Pn = "body > *", Qe = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map();
function qn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Fn(e) {
  let t = xe.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function lu(e, t = y(!0)) {
  ae((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = ot(n);
    if (i) {
      Qe.add(n);
      for (let s of xe.keys())
        s.contains(n) && (Fn(s), xe.delete(s));
      i.querySelectorAll(Pn).forEach((s) => {
        if (s instanceof HTMLElement) {
          for (let a of Qe)
            if (s.contains(a))
              return;
          Qe.size === 1 && (xe.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), qn(s));
        }
      }), r(() => {
        if (Qe.delete(n), Qe.size > 0)
          i.querySelectorAll(Pn).forEach((s) => {
            if (s instanceof HTMLElement && !xe.has(s)) {
              for (let a of Qe)
                if (s.contains(a))
                  return;
              xe.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), qn(s);
            }
          });
        else
          for (let s of xe.keys())
            Fn(s), xe.delete(s);
      });
    }
  });
}
let zi = Symbol("ForcePortalRootContext");
function uu() {
  return U(zi, !1);
}
let wr = G({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return de(zi, e.force), () => {
    let { force: n, ...i } = e;
    return X({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function cu(e) {
  let t = ot(e);
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
let Gi = G({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = q(() => ot(n)), s = uu(), a = U(Xi, null), o = y(s === !0 || a == null ? cu(n.value) : a.resolveTarget());
  return ae(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), Fe(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return M(oi, { to: o.value }, X({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Xi = Symbol("PortalGroupContext"), du = G({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Ps({ resolveTarget() {
    return e.target;
  } });
  return de(Xi, n), () => {
    let { target: i, ...s } = e;
    return X({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ki = Symbol("StackContext");
var Sr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Sr || {});
function fu() {
  return U(Ki, () => {
  });
}
function pu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = fu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  N(() => {
    St(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Fe(() => {
    t.value && s(1, e, r);
  }), de(Ki, s);
}
let Yi = Symbol("DescriptionContext");
function hu() {
  let e = U(Yi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function mu({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return de(Yi, { register: i, slot: e, name: t, props: r }), q(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let yp = G({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = hu();
  return N(() => Fe(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [m, h]) => Object.assign(c, { [m]: V(h) }), {}), id: o };
    return X({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Jr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, s, a) {
    return n.addEventListener(i, s, a), r.add(() => n.removeEventListener(i, s, a));
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
function vu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var gu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(gu || {});
let Or = Symbol("DialogContext");
function Et(e) {
  let t = U(Or, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Et), r;
  }
  return t;
}
let Pt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Zr = G({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Pt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Xe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  N(() => {
    a.value = !0;
  });
  let o = y(0), l = Qr(), u = q(() => e.open === Pt && l !== null ? Y(l.value, { [Ue.Open]: !0, [Ue.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), m = y(null), h = y(null), d = q(() => ot(m));
  if (i({ el: m, $el: m }), !(e.open !== Pt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Pt ? void 0 : e.open}`);
  let f = q(() => a.value && u.value ? 0 : 1), p = q(() => f.value === 0), g = q(() => o.value > 1), S = U(Or, null) !== null, I = q(() => g.value ? "parent" : "leaf");
  lu(m, q(() => g.value ? p.value : !1)), pu({ type: "Dialog", enabled: q(() => f.value === 0), element: m, onUpdate: (w, $, E) => {
    if ($ === "Dialog")
      return Y(w, { [Sr.Add]() {
        c.value.add(E), o.value += 1;
      }, [Sr.Remove]() {
        c.value.delete(E), o.value -= 1;
      } });
  } });
  let A = mu({ name: "DialogDescription", slot: q(() => ({ open: u.value })) }), x = y(null), O = { titleId: x, panelRef: y(null), dialogState: f, setTitleId(w) {
    x.value !== w && (x.value = w);
  }, close() {
    t("close", !1);
  } };
  de(Or, O);
  function b() {
    var w, $, E;
    return [...Array.from(($ = (w = d.value) == null ? void 0 : w.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? $ : []).filter((T) => !(T === document.body || T === document.head || !(T instanceof HTMLElement) || T.contains(fe(h)) || O.panelRef.value && T.contains(O.panelRef.value))), (E = O.panelRef.value) != null ? E : m.value];
  }
  return tu(() => b(), (w, $) => {
    O.close(), Ie(() => $ == null ? void 0 : $.focus());
  }, q(() => f.value === 0 && !g.value)), Ui((s = d.value) == null ? void 0 : s.defaultView, "keydown", (w) => {
    w.defaultPrevented || w.key === ji.Escape && f.value === 0 && (g.value || (w.preventDefault(), w.stopPropagation(), O.close()));
  }), ae((w) => {
    var $;
    if (f.value !== 0 || S)
      return;
    let E = d.value;
    if (!E)
      return;
    let T = Jr(), _ = window.pageYOffset;
    function k(R, P, B) {
      let le = R.style.getPropertyValue(P);
      return Object.assign(R.style, { [P]: B }), T.add(() => {
        Object.assign(R.style, { [P]: le });
      });
    }
    let L = E == null ? void 0 : E.documentElement, ee = (($ = E.defaultView) != null ? $ : window).innerWidth - L.clientWidth;
    if (k(L, "overflow", "hidden"), ee > 0) {
      let R = L.clientWidth - L.offsetWidth, P = ee - R;
      k(L, "paddingRight", `${P}px`);
    }
    if (vu()) {
      k(E.body, "marginTop", `-${_}px`), window.scrollTo(0, 0);
      let R = null;
      T.addEventListener(E, "click", (P) => {
        if (P.target instanceof HTMLElement)
          try {
            let B = P.target.closest("a");
            if (!B)
              return;
            let { hash: le } = new URL(B.href), H = E.querySelector(le);
            H && !b().some((Ke) => Ke.contains(H)) && (R = H);
          } catch {
          }
      }, !0), T.addEventListener(E, "touchmove", (P) => {
        P.target instanceof HTMLElement && !b().some((B) => B.contains(P.target)) && P.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + _), R && R.isConnected && (R.scrollIntoView({ block: "nearest" }), R = null);
      });
    }
    w(T.dispose);
  }), ae((w) => {
    if (f.value !== 0)
      return;
    let $ = fe(m);
    if (!$)
      return;
    let E = new IntersectionObserver((T) => {
      for (let _ of T)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && O.close();
    });
    E.observe($), w(() => E.disconnect());
  }), () => {
    let { id: w, open: $, initialFocus: E, ...T } = e, _ = { ...r, ref: m, id: w, role: "dialog", "aria-modal": f.value === 0 ? !0 : void 0, "aria-labelledby": x.value, "aria-describedby": A.value }, k = { open: f.value === 0 };
    return M(wr, { force: !0 }, () => [M(Gi, () => M(du, { target: m.value }, () => M(wr, { force: !1 }, () => M(pt, { initialFocus: E, containers: c, features: p.value ? Y(I.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => X({ ourProps: _, theirProps: T, slot: k, attrs: r, slots: n, visible: f.value === 0, features: jt.RenderStrategy | jt.Static, name: "Dialog" }))))), M(br, { features: Mt.Hidden, ref: h })]);
  };
} });
G({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Et("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return X({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
G({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Xe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Et("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), N(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return M(wr, { force: !0 }, () => M(Gi, () => X({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let en = G({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Xe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Et("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return X({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
G({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Et("DialogTitle");
  return N(() => {
    n.setTitleId(e.id), Fe(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return X({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function yu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function pr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var $r = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))($r || {});
function bu(e, t) {
  let r = Jr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Cn(e, t, r, n, i, s) {
  let a = Jr(), o = s !== void 0 ? yu(s) : () => {
  };
  return qt(e, ...i), pr(e, ...t, ...r), a.nextFrame(() => {
    qt(e, ...r), pr(e, ...n), a.add(bu(e, (l) => (qt(e, ...n, ...t), pr(e, ...i), o(l))));
  }), a.add(() => qt(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Re(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let tn = Symbol("TransitionContext");
var wu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wu || {});
function Su() {
  return U(tn, null) !== null;
}
function Ou() {
  let e = U(tn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function $u() {
  let e = U(rn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let rn = Symbol("NestingContext");
function Qt(e) {
  return "children" in e ? Qt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Qi(e) {
  let t = y([]), r = y(!1);
  N(() => r.value = !0), Fe(() => r.value = !1);
  function n(s, a = _e.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (Y(a, { [_e.Unmount]() {
      t.value.splice(o, 1);
    }, [_e.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Qt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, _e.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Ji = jt.RenderStrategy, lt = G({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Su() && zl())
    return () => M(ut, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let s = y(null), a = y("visible"), o = q(() => e.unmount ? _e.Unmount : _e.Hidden);
  i({ el: s, $el: s });
  let { show: l, appear: u } = Ou(), { register: c, unregister: m } = $u(), h = { value: !0 }, d = Xe(), f = { value: !1 }, p = Qi(() => {
    f.value || (a.value = "hidden", m(d), t("afterLeave"));
  });
  N(() => {
    let $ = c(d);
    Fe($);
  }), ae(() => {
    if (o.value === _e.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      Y(a.value, { hidden: () => m(d), visible: () => c(d) });
    }
  });
  let g = Re(e.enter), S = Re(e.enterFrom), I = Re(e.enterTo), A = Re(e.entered), x = Re(e.leave), O = Re(e.leaveFrom), b = Re(e.leaveTo);
  N(() => {
    ae(() => {
      if (a.value === "visible") {
        let $ = fe(s);
        if ($ instanceof Comment && $.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w($) {
    let E = h.value && !u.value, T = fe(s);
    !T || !(T instanceof HTMLElement) || E || (f.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), $(l.value ? Cn(T, g, S, I, A, (_) => {
      f.value = !1, _ === $r.Finished && t("afterEnter");
    }) : Cn(T, x, O, b, A, (_) => {
      f.value = !1, _ === $r.Finished && (Qt(p) || (a.value = "hidden", m(d), t("afterLeave")));
    })));
  }
  return N(() => {
    St([l], ($, E, T) => {
      w(T), h.value = !1;
    }, { immediate: !0 });
  }), de(rn, p), Gl(q(() => Y(a.value, { visible: Ue.Open, hidden: Ue.Closed }))), () => {
    let { appear: $, show: E, enter: T, enterFrom: _, enterTo: k, entered: L, leave: ee, leaveFrom: R, leaveTo: P, ...B } = e, le = { ref: s }, H = { ...B, ...u && l && $t.isServer ? { class: qs([B.class, ...g, ...S]) } : {} };
    return X({ theirProps: H, ourProps: le, slot: {}, slots: n, attrs: r, features: Ji, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), Eu = lt, ut = G({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Qr(), s = q(() => e.show === null && i !== null ? Y(i.value, { [Ue.Open]: !0, [Ue.Closed]: !1 }) : e.show);
  ae(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = Qi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: q(() => e.appear || !l.value) };
  return N(() => {
    ae(() => {
      l.value = !1, s.value ? a.value = "visible" : Qt(o) || (a.value = "hidden");
    });
  }), de(rn, o), de(tn, u), () => {
    let c = Ri(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return X({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [M(Eu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...m, ...c }, n.default)] }, attrs: {}, features: Ji, visible: a.value === "visible", name: "Transition" });
  };
} });
const xu = {
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
    defaultPasswordText: {
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
    },
    confirmPasswordRoute: {
      type: String,
      required: !1,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: !1,
      default: ""
    }
  },
  data() {
    return {
      isOpen: !1,
      password: "",
      passwordError: "",
      submitting: !1
    };
  },
  computed: {
    hasConfirmModal: () => !!v.confirmModal.value,
    title: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.title ? v.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.text ? v.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmButton ? v.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.cancelButton ? v.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPassword ? v.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPasswordOnce ? v.confirmModal.value.confirmPasswordOnce : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      v.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = !0;
      let e = this.password;
      this.passwordError = "", ue.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = !1;
      });
    },
    handleSuccess(e) {
      v.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ue.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), v.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), v.clearConfirmModal();
    },
    setPassword(e) {
      this.password = e;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: Zr,
      DialogPanel: en,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
};
function Zi(e, t) {
  t = Yr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ot(t[r++])];
  return r && r == n ? e : void 0;
}
function et(e, t, r) {
  var n = e == null ? void 0 : Zi(e, t);
  return n === void 0 ? r : n;
}
var Tu = function() {
  try {
    var e = Ge(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const kn = Tu;
function es(e, t, r) {
  t == "__proto__" && kn ? kn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var _u = Object.prototype, Iu = _u.hasOwnProperty;
function Au(e, t, r) {
  var n = e[t];
  (!(Iu.call(e, t) && Gr(n, r)) || r === void 0 && !(t in e)) && es(e, t, r);
}
function Pu(e, t, r, n) {
  if (!z(e))
    return e;
  t = Yr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Ot(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = z(c) ? c : Dr(t[i + 1]) ? [] : {});
    }
    Au(o, l, u), o = o[l];
  }
  return e;
}
function ts(e, t, r) {
  return e == null ? e : Pu(e, t, r);
}
const qu = {
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
  beforeMount() {
    if (this.remember) {
      let e = v.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && v.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return et(e.values, r);
        },
        set(t, r, n) {
          ts(e.values, r, n);
        }
      })
    );
  }
};
var Fu = function() {
  return me.Date.now();
};
const hr = Fu;
var Cu = /\s/;
function ku(e) {
  for (var t = e.length; t-- && Cu.test(e.charAt(t)); )
    ;
  return t;
}
var Lu = /^\s+/;
function Du(e) {
  return e && e.slice(0, ku(e) + 1).replace(Lu, "");
}
var Ln = 0 / 0, Bu = /^[-+]0x[0-9a-f]+$/i, Ru = /^0b[01]+$/i, ju = /^0o[0-7]+$/i, Mu = parseInt;
function Er(e) {
  if (typeof e == "number")
    return e;
  if (Gt(e))
    return Ln;
  if (z(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = z(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Du(e);
  var r = Ru.test(e);
  return r || ju.test(e) ? Mu(e.slice(2), r ? 2 : 8) : Bu.test(e) ? Ln : +e;
}
var Nu = "Expected a function", Vu = Math.max, Uu = Math.min;
function Jt(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, m = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Nu);
  t = Er(t) || 0, z(r) && (c = !!r.leading, m = "maxWait" in r, s = m ? Vu(Er(r.maxWait) || 0, t) : s, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var w = n, $ = i;
    return n = i = void 0, u = b, a = e.apply($, w), a;
  }
  function f(b) {
    return u = b, o = setTimeout(S, t), c ? d(b) : a;
  }
  function p(b) {
    var w = b - l, $ = b - u, E = t - w;
    return m ? Uu(E, s - $) : E;
  }
  function g(b) {
    var w = b - l, $ = b - u;
    return l === void 0 || w >= t || w < 0 || m && $ >= s;
  }
  function S() {
    var b = hr();
    if (g(b))
      return I(b);
    o = setTimeout(S, p(b));
  }
  function I(b) {
    return o = void 0, h && n ? d(b) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function x() {
    return o === void 0 ? a : I(hr());
  }
  function O() {
    var b = hr(), w = g(b);
    if (n = arguments, i = this, l = b, w) {
      if (o === void 0)
        return f(l);
      if (m)
        return clearTimeout(o), o = setTimeout(S, t), d(l);
    }
    return o === void 0 && (o = setTimeout(S, t)), a;
  }
  return O.cancel = A, O.flush = x, O;
}
const Hu = {
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
    },
    manual: {
      type: Boolean,
      required: !1,
      default: !1
    },
    watchDebounce: {
      type: Number,
      required: !1,
      default: 0
    },
    watchValue: {
      validator() {
        return !0;
      },
      required: !1,
      default: null
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: !1,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: !0,
      handler() {
        this.processing = !0, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = Jt(() => {
      this.performRequest();
    }, this.watchDebounce);
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
      Object.keys(this.request).length > 0 && (e.data = this.request), ue(e).then((t) => {
        this.response = t.data, this.processing = !1, this.$emit("success", t.data);
      }).catch(() => {
        this.processing = !1, this.$emit("error");
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
}, Wu = {
  data() {
    return {
      isActivated: !0
    };
  },
  deactivated() {
    this.isActivated = !1;
  },
  activated() {
    this.isActivated = !0;
  },
  render() {
    return this.$slots.default({
      Dialog: Zr,
      DialogPanel: en,
      isActivated: this.isActivated
    });
  }
}, rs = {
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
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = y(null), n = y(null), i = y(null);
    return N(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Fs(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (D(), be("div", {
      ref_key: "root",
      ref: n
    }, [
      J(s.$slots, "default")
    ], 512));
  }
};
function Z(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function He(e) {
  var t = Z(e).Element;
  return e instanceof t || e instanceof Element;
}
function Q(e) {
  var t = Z(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ne = Math.max, Nt = Math.min, nt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && Q(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = He(e) ? Z(e) : window, o = a.visualViewport, l = !ns() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, m = n.width / i, h = n.height / s;
  return {
    width: m,
    height: h,
    top: c,
    right: u + m,
    bottom: c + h,
    left: u,
    x: u,
    y: c
  };
}
function sn(e) {
  var t = Z(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function zu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Gu(e) {
  return e === Z(e) || !Q(e) ? sn(e) : zu(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ke(e) {
  return ((He(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function an(e) {
  return it(ke(e)).left + sn(e).scrollLeft;
}
function oe(e) {
  return Z(e).getComputedStyle(e);
}
function on(e) {
  var t = oe(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Xu(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ku(e, t, r) {
  r === void 0 && (r = !1);
  var n = Q(t), i = Q(t) && Xu(t), s = ke(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pe(t) !== "body" || on(s)) && (o = Gu(t)), Q(t) ? (l = it(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = an(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function is(e) {
  var t = it(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Zt(e) {
  return pe(e) === "html" ? e : e.assignedSlot || e.parentNode || (nn(e) ? e.host : null) || ke(e);
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : Q(e) && on(e) ? e : ss(Zt(e));
}
function gt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Z(n), a = i ? [s].concat(s.visualViewport || [], on(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(gt(Zt(a)));
}
function Yu(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function Dn(e) {
  return !Q(e) || oe(e).position === "fixed" ? null : e.offsetParent;
}
function Qu(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && Q(e)) {
    var n = oe(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Zt(e);
  for (nn(i) && (i = i.host); Q(i) && ["html", "body"].indexOf(pe(i)) < 0; ) {
    var s = oe(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function er(e) {
  for (var t = Z(e), r = Dn(e); r && Yu(r) && oe(r).position === "static"; )
    r = Dn(r);
  return r && (pe(r) === "html" || pe(r) === "body" && oe(r).position === "static") ? t : r || Qu(e) || t;
}
var se = "top", he = "bottom", qe = "right", ve = "left", tr = "auto", rr = [se, he, qe, ve], st = "start", wt = "end", Ju = "clippingParents", as = "viewport", ht = "popper", Zu = "reference", Bn = /* @__PURE__ */ rr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + wt]);
}, []), ec = /* @__PURE__ */ [].concat(rr, [tr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + wt]);
}, []), tc = "beforeRead", rc = "read", nc = "afterRead", ic = "beforeMain", sc = "main", ac = "afterMain", oc = "beforeWrite", lc = "write", uc = "afterWrite", Tr = [tc, rc, nc, ic, sc, ac, oc, lc, uc];
function cc(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function dc(e) {
  var t = cc(e);
  return Tr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function fc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ee(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var je = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', pc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Rn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function hc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Rn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ee(je, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ee(je, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Tr.indexOf(t.phase) < 0 && console.error(Ee(je, t.name, '"phase"', "either " + Tr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ee(je, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ee(je, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ee(je, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ee(je, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Rn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ee(pc, String(t.name), n, n));
      });
    });
  });
}
function mc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ge(e) {
  return e.split("-")[0];
}
function vc(e) {
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
function gc(e, t) {
  var r = Z(e), n = ke(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ns();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + an(e),
    y: l
  };
}
function yc(e) {
  var t, r = ke(e), n = sn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ne(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ne(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + an(e), l = -n.scrollTop;
  return oe(i || r).direction === "rtl" && (o += Ne(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function bc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && nn(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function _r(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function wc(e, t) {
  var r = it(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === as ? _r(gc(e, r)) : He(t) ? wc(t, r) : _r(yc(ke(e)));
}
function Sc(e) {
  var t = gt(Zt(e)), r = ["absolute", "fixed"].indexOf(oe(e).position) >= 0, n = r && Q(e) ? er(e) : e;
  return He(n) ? t.filter(function(i) {
    return He(i) && bc(i, n) && pe(i) !== "body";
  }) : [];
}
function Oc(e, t, r, n) {
  var i = t === "clippingParents" ? Sc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = Ne(c.top, l.top), l.right = Nt(c.right, l.right), l.bottom = Nt(c.bottom, l.bottom), l.left = Ne(c.left, l.left), l;
  }, jn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function at(e) {
  return e.split("-")[1];
}
function os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ls(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ge(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case se:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case he:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case qe:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case ve:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? os(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case st:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case wt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function us() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $c(e) {
  return Object.assign({}, us(), e);
}
function Ec(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function ln(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? Ju : o, u = r.rootBoundary, c = u === void 0 ? as : u, m = r.elementContext, h = m === void 0 ? ht : m, d = r.altBoundary, f = d === void 0 ? !1 : d, p = r.padding, g = p === void 0 ? 0 : p, S = $c(typeof g != "number" ? g : Ec(g, rr)), I = h === ht ? Zu : ht, A = e.rects.popper, x = e.elements[f ? I : h], O = Oc(He(x) ? x : x.contextElement || ke(e.elements.popper), l, c, a), b = it(e.elements.reference), w = ls({
    reference: b,
    element: A,
    strategy: "absolute",
    placement: i
  }), $ = _r(Object.assign({}, A, w)), E = h === ht ? $ : b, T = {
    top: O.top - E.top + S.top,
    bottom: E.bottom - O.bottom + S.bottom,
    left: O.left - E.left + S.left,
    right: E.right - O.right + S.right
  }, _ = e.modifiersData.offset;
  if (h === ht && _) {
    var k = _[i];
    Object.keys(T).forEach(function(L) {
      var ee = [qe, he].indexOf(L) >= 0 ? 1 : -1, R = [se, he].indexOf(L) >= 0 ? "y" : "x";
      T[L] += k[R] * ee;
    });
  }
  return T;
}
var Mn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", xc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Nn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Tc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Nn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, d = {
      state: c,
      setOptions: function(S) {
        var I = typeof S == "function" ? S(c.options) : S;
        p(), c.options = Object.assign({}, s, c.options, I), c.scrollParents = {
          reference: He(o) ? gt(o) : o.contextElement ? gt(o.contextElement) : [],
          popper: gt(l)
        };
        var A = dc(vc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var x = mc([].concat(A, c.options.modifiers), function(_) {
            var k = _.name;
            return k;
          });
          if (hc(x), ge(c.options.placement) === tr) {
            var O = c.orderedModifiers.find(function(_) {
              var k = _.name;
              return k === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = oe(l), w = b.marginTop, $ = b.marginRight, E = b.marginBottom, T = b.marginLeft;
          [w, $, E, T].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return f(), d.update();
      },
      forceUpdate: function() {
        if (!h) {
          var S = c.elements, I = S.reference, A = S.popper;
          if (!Vn(I, A)) {
            process.env.NODE_ENV !== "production" && console.error(Mn);
            return;
          }
          c.rects = {
            reference: Ku(I, er(A), c.options.strategy === "fixed"),
            popper: is(A)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var x = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (x += 1, x > 100)) {
              console.error(xc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var b = c.orderedModifiers[O], w = b.fn, $ = b.options, E = $ === void 0 ? {} : $, T = b.name;
            typeof w == "function" && (c = w({
              state: c,
              options: E,
              name: T,
              instance: d
            }) || c);
          }
        }
      },
      update: fc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        p(), h = !0;
      }
    };
    if (!Vn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Mn), d;
    d.setOptions(u).then(function(g) {
      !h && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function f() {
      c.orderedModifiers.forEach(function(g) {
        var S = g.name, I = g.options, A = I === void 0 ? {} : I, x = g.effect;
        if (typeof x == "function") {
          var O = x({
            state: c,
            name: S,
            instance: d,
            options: A
          }), b = function() {
          };
          m.push(O || b);
        }
      });
    }
    function p() {
      m.forEach(function(g) {
        return g();
      }), m = [];
    }
    return d;
  };
}
var Ft = {
  passive: !0
};
function _c(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = Z(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), o && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), o && l.removeEventListener("resize", r.update, Ft);
  };
}
const Ic = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _c,
  data: {}
};
function Ac(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ac,
  data: {}
};
var qc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Fc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: nt(t * i) / i || 0,
    y: nt(r * i) / i || 0
  };
}
function Un(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, m = e.isFixed, h = a.x, d = h === void 0 ? 0 : h, f = a.y, p = f === void 0 ? 0 : f, g = typeof c == "function" ? c({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  d = g.x, p = g.y;
  var S = a.hasOwnProperty("x"), I = a.hasOwnProperty("y"), A = ve, x = se, O = window;
  if (u) {
    var b = er(r), w = "clientHeight", $ = "clientWidth";
    if (b === Z(r) && (b = ke(r), oe(b).position !== "static" && o === "absolute" && (w = "scrollHeight", $ = "scrollWidth")), b = b, i === se || (i === ve || i === qe) && s === wt) {
      x = he;
      var E = m && b === O && O.visualViewport ? O.visualViewport.height : b[w];
      p -= E - n.height, p *= l ? 1 : -1;
    }
    if (i === ve || (i === se || i === he) && s === wt) {
      A = qe;
      var T = m && b === O && O.visualViewport ? O.visualViewport.width : b[$];
      d -= T - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: o
  }, u && qc), k = c === !0 ? Fc({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  if (d = k.x, p = k.y, l) {
    var L;
    return Object.assign({}, _, (L = {}, L[x] = I ? "0" : "", L[A] = S ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, _, (t = {}, t[x] = I ? p + "px" : "", t[A] = S ? d + "px" : "", t.transform = "", t));
}
function Cc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = oe(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(m) {
      return u.indexOf(m) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ge(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Un(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Un(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const kc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cc,
  data: {}
};
function Lc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !Q(s) || !pe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Dc(e) {
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
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Q(i) || !pe(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Bc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lc,
  effect: Dc,
  requires: ["computeStyles"]
};
var Rc = [Ic, Pc, kc, Bc], jc = /* @__PURE__ */ Tc({
  defaultModifiers: Rc
});
function Mc(e) {
  return e === "x" ? "y" : "x";
}
function Lt(e, t, r) {
  return Ne(e, Nt(t, r));
}
function Nc(e, t, r) {
  var n = Lt(e, t, r);
  return n > r ? r : n;
}
function Vc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, m = r.padding, h = r.tether, d = h === void 0 ? !0 : h, f = r.tetherOffset, p = f === void 0 ? 0 : f, g = ln(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: c
  }), S = ge(t.placement), I = at(t.placement), A = !I, x = os(S), O = Mc(x), b = t.modifiersData.popperOffsets, w = t.rects.reference, $ = t.rects.popper, E = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, T = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, k = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var L, ee = x === "y" ? se : ve, R = x === "y" ? he : qe, P = x === "y" ? "height" : "width", B = b[x], le = B + g[ee], H = B - g[R], Ke = d ? -$[P] / 2 : 0, ir = I === st ? w[P] : $[P], ct = I === st ? -$[P] : -w[P], Tt = t.elements.arrow, Ye = d && Tt ? is(Tt) : {
        width: 0,
        height: 0
      }, $e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : us(), dt = $e[ee], _t = $e[R], De = Lt(0, w[P], Ye[P]), sr = A ? w[P] / 2 - Ke - De - dt - T.mainAxis : ir - De - dt - T.mainAxis, Ss = A ? -w[P] / 2 + Ke + De + _t + T.mainAxis : ct + De + _t + T.mainAxis, ar = t.elements.arrow && er(t.elements.arrow), Os = ar ? x === "y" ? ar.clientTop || 0 : ar.clientLeft || 0 : 0, fn = (L = _ == null ? void 0 : _[x]) != null ? L : 0, $s = B + sr - fn - Os, Es = B + Ss - fn, pn = Lt(d ? Nt(le, $s) : le, B, d ? Ne(H, Es) : H);
      b[x] = pn, k[x] = pn - B;
    }
    if (o) {
      var hn, xs = x === "x" ? se : ve, Ts = x === "x" ? he : qe, Be = b[O], It = O === "y" ? "height" : "width", mn = Be + g[xs], vn = Be - g[Ts], or = [se, ve].indexOf(S) !== -1, gn = (hn = _ == null ? void 0 : _[O]) != null ? hn : 0, yn = or ? mn : Be - w[It] - $[It] - gn + T.altAxis, bn = or ? Be + w[It] + $[It] - gn - T.altAxis : vn, wn = d && or ? Nc(yn, Be, bn) : Lt(d ? yn : mn, Be, d ? bn : vn);
      b[O] = wn, k[O] = wn - Be;
    }
    t.modifiersData[n] = k;
  }
}
const Uc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vc,
  requiresIfExists: ["offset"]
};
var Hc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Hc[t];
  });
}
var Wc = {
  start: "end",
  end: "start"
};
function Hn(e) {
  return e.replace(/start|end/g, function(t) {
    return Wc[t];
  });
}
function zc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? ec : l, c = at(n), m = c ? o ? Bn : Bn.filter(function(f) {
    return at(f) === c;
  }) : rr, h = m.filter(function(f) {
    return u.indexOf(f) >= 0;
  });
  h.length === 0 && (h = m, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = h.reduce(function(f, p) {
    return f[p] = ln(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[ge(p)], f;
  }, {});
  return Object.keys(d).sort(function(f, p) {
    return d[f] - d[p];
  });
}
function Gc(e) {
  if (ge(e) === tr)
    return [];
  var t = Dt(e);
  return [Hn(e), t, Hn(t)];
}
function Xc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, m = r.rootBoundary, h = r.altBoundary, d = r.flipVariations, f = d === void 0 ? !0 : d, p = r.allowedAutoPlacements, g = t.options.placement, S = ge(g), I = S === g, A = l || (I || !f ? [Dt(g)] : Gc(g)), x = [g].concat(A).reduce(function(Ye, $e) {
      return Ye.concat(ge($e) === tr ? zc(t, {
        placement: $e,
        boundary: c,
        rootBoundary: m,
        padding: u,
        flipVariations: f,
        allowedAutoPlacements: p
      }) : $e);
    }, []), O = t.rects.reference, b = t.rects.popper, w = /* @__PURE__ */ new Map(), $ = !0, E = x[0], T = 0; T < x.length; T++) {
      var _ = x[T], k = ge(_), L = at(_) === st, ee = [se, he].indexOf(k) >= 0, R = ee ? "width" : "height", P = ln(t, {
        placement: _,
        boundary: c,
        rootBoundary: m,
        altBoundary: h,
        padding: u
      }), B = ee ? L ? qe : ve : L ? he : se;
      O[R] > b[R] && (B = Dt(B));
      var le = Dt(B), H = [];
      if (s && H.push(P[k] <= 0), o && H.push(P[B] <= 0, P[le] <= 0), H.every(function(Ye) {
        return Ye;
      })) {
        E = _, $ = !1;
        break;
      }
      w.set(_, H);
    }
    if ($)
      for (var Ke = f ? 3 : 1, ir = function($e) {
        var dt = x.find(function(_t) {
          var De = w.get(_t);
          if (De)
            return De.slice(0, $e).every(function(sr) {
              return sr;
            });
        });
        if (dt)
          return E = dt, "break";
      }, ct = Ke; ct > 0; ct--) {
        var Tt = ir(ct);
        if (Tt === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[n]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const Kc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Xc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Le = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Yc = {
  components: {
    OnClickOutside: rs
  },
  props: {
    spladeId: {
      type: String,
      required: !0
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    strategy: {
      type: String,
      default: "absolute",
      required: !1
    },
    inline: {
      type: Boolean,
      default: !1,
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1,
      required: !1
    },
    teleport: {
      type: Boolean,
      default: !1,
      required: !1
    },
    closeOnClick: {
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
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await Ie();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = jc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Kc, Uc],
      strategy: this.strategy
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
}, Qc = { ref: "tooltip" };
function Jc(e, t, r, n, i, s) {
  const a = Lr("OnClickOutside");
  return D(), W(a, {
    style: Bt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: li(() => [
      vr("div", {
        ref: "button",
        style: Bt(s.buttonStyle)
      }, [
        J(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      vr("div", Qc, [
        J(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Zc = /* @__PURE__ */ Le(Yc, [["render", Jc]]), ed = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = U("$splade") || {}, r = U("$spladeOptions") || {};
    return (n, i) => V(t).isSsr ? (D(), W(ce, {
      key: e.keepAliveKey,
      html: V(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (D(), W(ai, {
      key: 0,
      max: V(r).max_keep_alive
    }, [
      (D(), W(ce, {
        key: e.keepAliveKey,
        html: V(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function cs(e) {
  return e && e.length ? e[0] : void 0;
}
const td = {
  inject: ["stack"],
  computed: {
    values() {
      return v.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return K(e.values, t);
      },
      first(t) {
        return cs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, rd = {
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
  emits: ["subscribed", "event"],
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
      this.subscribed = !0, this.$emit("subscribed");
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        this.$emit("event", { name: e, data: r });
        const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
        let a = null, o = !1, l = [];
        ne(r, (u) => {
          !z(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
        }), a ? v.visit(a) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          v.pushToast(u);
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
};
function nd() {
  this.__data__ = new Se(), this.size = 0;
}
function id(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function sd(e) {
  return this.__data__.get(e);
}
function ad(e) {
  return this.__data__.has(e);
}
var od = 200;
function ld(e, t) {
  var r = this.__data__;
  if (r instanceof Se) {
    var n = r.__data__;
    if (!bt || n.length < od - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ye(e) {
  var t = this.__data__ = new Se(e);
  this.size = t.size;
}
ye.prototype.clear = nd;
ye.prototype.delete = id;
ye.prototype.get = sd;
ye.prototype.has = ad;
ye.prototype.set = ld;
var ud = "__lodash_hash_undefined__";
function cd(e) {
  return this.__data__.set(e, ud), this;
}
function dd(e) {
  return this.__data__.has(e);
}
function Vt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Oe(); ++t < r; )
    this.add(e[t]);
}
Vt.prototype.add = Vt.prototype.push = cd;
Vt.prototype.has = dd;
function fd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function pd(e, t) {
  return e.has(t);
}
var hd = 1, md = 2;
function ds(e, t, r, n, i, s) {
  var a = r & hd, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var m = -1, h = !0, d = r & md ? new Vt() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < o; ) {
    var f = e[m], p = t[m];
    if (n)
      var g = a ? n(p, f, m, t, e, s) : n(f, p, m, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!fd(t, function(S, I) {
        if (!pd(d, I) && (f === S || i(f, S, r, n, s)))
          return d.push(I);
      })) {
        h = !1;
        break;
      }
    } else if (!(f === p || i(f, p, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var vd = me.Uint8Array;
const Wn = vd;
function gd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function yd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var bd = 1, wd = 2, Sd = "[object Boolean]", Od = "[object Date]", $d = "[object Error]", Ed = "[object Map]", xd = "[object Number]", Td = "[object RegExp]", _d = "[object Set]", Id = "[object String]", Ad = "[object Symbol]", Pd = "[object ArrayBuffer]", qd = "[object DataView]", zn = Ae ? Ae.prototype : void 0, mr = zn ? zn.valueOf : void 0;
function Fd(e, t, r, n, i, s, a) {
  switch (r) {
    case qd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Pd:
      return !(e.byteLength != t.byteLength || !s(new Wn(e), new Wn(t)));
    case Sd:
    case Od:
    case xd:
      return Gr(+e, +t);
    case $d:
      return e.name == t.name && e.message == t.message;
    case Td:
    case Id:
      return e == t + "";
    case Ed:
      var o = gd;
    case _d:
      var l = n & bd;
      if (o || (o = yd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= wd, a.set(e, t);
      var c = ds(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Ad:
      if (mr)
        return mr.call(e) == mr.call(t);
  }
  return !1;
}
function Cd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function kd(e, t, r) {
  var n = t(e);
  return j(e) ? n : Cd(n, r(e));
}
function fs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Ld() {
  return [];
}
var Dd = Object.prototype, Bd = Dd.propertyIsEnumerable, Gn = Object.getOwnPropertySymbols, Rd = Gn ? function(e) {
  return e == null ? [] : (e = Object(e), fs(Gn(e), function(t) {
    return Bd.call(e, t);
  }));
} : Ld;
const jd = Rd;
function Xn(e) {
  return kd(e, Ht, jd);
}
var Md = 1, Nd = Object.prototype, Vd = Nd.hasOwnProperty;
function Ud(e, t, r, n, i, s) {
  var a = r & Md, o = Xn(e), l = o.length, u = Xn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var m = l; m--; ) {
    var h = o[m];
    if (!(a ? h in t : Vd.call(t, h)))
      return !1;
  }
  var d = s.get(e), f = s.get(t);
  if (d && f)
    return d == t && f == e;
  var p = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++m < l; ) {
    h = o[m];
    var S = e[h], I = t[h];
    if (n)
      var A = a ? n(I, S, h, t, e, s) : n(S, I, h, e, t, s);
    if (!(A === void 0 ? S === I || i(S, I, r, n, s) : A)) {
      p = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (p && !g) {
    var x = e.constructor, O = t.constructor;
    x != O && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof O == "function" && O instanceof O) && (p = !1);
  }
  return s.delete(e), s.delete(t), p;
}
var Hd = Ge(me, "DataView");
const Ir = Hd;
var Wd = Ge(me, "Promise");
const Ar = Wd;
var zd = Ge(me, "Set");
const Pr = zd;
var Gd = Ge(me, "WeakMap");
const qr = Gd;
var Kn = "[object Map]", Xd = "[object Object]", Yn = "[object Promise]", Qn = "[object Set]", Jn = "[object WeakMap]", Zn = "[object DataView]", Kd = ze(Ir), Yd = ze(bt), Qd = ze(Ar), Jd = ze(Pr), Zd = ze(qr), Me = Ce;
(Ir && Me(new Ir(new ArrayBuffer(1))) != Zn || bt && Me(new bt()) != Kn || Ar && Me(Ar.resolve()) != Yn || Pr && Me(new Pr()) != Qn || qr && Me(new qr()) != Jn) && (Me = function(e) {
  var t = Ce(e), r = t == Xd ? e.constructor : void 0, n = r ? ze(r) : "";
  if (n)
    switch (n) {
      case Kd:
        return Zn;
      case Yd:
        return Kn;
      case Qd:
        return Yn;
      case Jd:
        return Qn;
      case Zd:
        return Jn;
    }
  return t;
});
const ei = Me;
var ef = 1, ti = "[object Arguments]", ri = "[object Array]", Ct = "[object Object]", tf = Object.prototype, ni = tf.hasOwnProperty;
function rf(e, t, r, n, i, s) {
  var a = j(e), o = j(t), l = a ? ri : ei(e), u = o ? ri : ei(t);
  l = l == ti ? Ct : l, u = u == ti ? Ct : u;
  var c = l == Ct, m = u == Ct, h = l == u;
  if (h && gr(e)) {
    if (!gr(t))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return s || (s = new ye()), a || mi(e) ? ds(e, t, r, n, i, s) : Fd(e, t, l, r, n, i, s);
  if (!(r & ef)) {
    var d = c && ni.call(e, "__wrapped__"), f = m && ni.call(t, "__wrapped__");
    if (d || f) {
      var p = d ? e.value() : e, g = f ? t.value() : t;
      return s || (s = new ye()), i(p, g, r, n, s);
    }
  }
  return h ? (s || (s = new ye()), Ud(e, t, r, n, i, s)) : !1;
}
function nr(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : rf(e, t, r, n, nr, i);
}
var nf = 1, sf = 2;
function af(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var m = new ye();
      if (n)
        var h = n(u, c, l, e, t, m);
      if (!(h === void 0 ? nr(c, u, nf | sf, n, m) : h))
        return !1;
    }
  }
  return !0;
}
function ps(e) {
  return e === e && !z(e);
}
function of(e) {
  for (var t = Ht(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, ps(i)];
  }
  return t;
}
function hs(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function lf(e) {
  var t = of(e);
  return t.length == 1 && t[0][2] ? hs(t[0][0], t[0][1]) : function(r) {
    return r === e || af(r, e, t);
  };
}
function uf(e, t) {
  return e != null && t in Object(e);
}
function cf(e, t) {
  return e != null && Li(e, t, uf);
}
var df = 1, ff = 2;
function pf(e, t) {
  return zr(e) && ps(t) ? hs(Ot(e), t) : function(r) {
    var n = et(r, e);
    return n === void 0 && n === t ? cf(r, e) : nr(t, n, df | ff);
  };
}
function hf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function mf(e) {
  return function(t) {
    return Zi(t, e);
  };
}
function vf(e) {
  return zr(e) ? hf(Ot(e)) : mf(e);
}
function xt(e) {
  return typeof e == "function" ? e : e == null ? gi : typeof e == "object" ? j(e) ? pf(e[0], e[1]) : lf(e) : vf(e);
}
function gf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ut(t)) {
      var s = xt(r);
      t = Ht(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function yf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ii = 1 / 0, bf = 17976931348623157e292;
function wf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Er(e), e === ii || e === -ii) {
    var t = e < 0 ? -1 : 1;
    return t * bf;
  }
  return e === e ? e : 0;
}
function un(e) {
  var t = wf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Sf = Math.max;
function Of(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : un(r);
  return i < 0 && (i = Sf(n + i, 0)), yf(e, xt(t), i);
}
var $f = gf(Of);
const cn = $f, Ef = {
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
    },
    filepond: {
      type: [Boolean, Object],
      required: !1,
      default: !0
    },
    jsFilepondOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    preview: {
      type: Boolean,
      required: !1,
      default: !1
    },
    server: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    accept: {
      type: Array,
      required: !1,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    existingSuffix: {
      type: String,
      required: !1,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: !1,
      default: "_order"
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: !1
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? re(e) ? e : j(e) ? e.map(this.extractMetadataFromExistingFile) : z(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-exif-orientation")), e.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const h = ue.CancelToken.source();
              return ue({
                url: a.preview_url,
                method: "GET",
                cancelToken: h.token,
                responseType: "blob"
              }).then((d) => {
                const f = new File([d.data], a.name, { type: a.type });
                o(f);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  h.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, m, h) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const p = ue.CancelToken.source();
            ue({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: p.token,
              onUploadProgress: (g) => {
                m(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var S;
              axios.isCancel(g) ? h() : c((S = g.response) == null ? void 0 : S.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ue({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = !1), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = cn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, xf = { ref: "file" };
function Tf(e, t, r, n, i, s) {
  return D(), be("div", xf, [
    J(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const _f = /* @__PURE__ */ Le(Ef, [["render", Tf]]), If = {
  inject: ["stack"],
  computed: {
    values() {
      return v.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return K(e.values, t);
      },
      ...this.values
    });
  }
};
function dn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && vs(t, ms(r, n), e[n]);
  return t;
}
function ms(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function vs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => vs(e, ms(t, n.toString()), r[n]));
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
  dn(r, e, t);
}
var Af = "[object Boolean]";
function gs(e) {
  return e === !0 || e === !1 || Pe(e) && Ce(e) == Af;
}
function ys(e, t) {
  var r = {};
  return t = xt(t), Rr(e, function(n, i, s) {
    es(r, i, t(n, i, s));
  }), r;
}
function bs(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Je(e, t, r) {
  return e = Kr(e), r = r == null ? 0 : bs(un(r), 0, e.length), t = Yt(t), e.slice(r, r + t.length) == t;
}
const Pf = {
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
        return v.isSsr ? "" : location.href;
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
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: !1,
      default: !1
    },
    stay: {
      type: Boolean,
      require: !1,
      default: !1
    },
    restoreOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
    },
    resetOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
    },
    scrollOnError: {
      type: Boolean,
      required: !1,
      default: !0
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: !1,
      default: !1
    },
    escapeValidationMessages: {
      type: Boolean,
      required: !1,
      default: !0
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    },
    debounce: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: !1,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      processingInBackground: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: !1,
      recentlyUnsuccessful: !1,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return v.validationErrors(this.stack);
    },
    errors() {
      return ys(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = Jt(() => {
      this.request(this.background);
    }, this.debounce);
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === !0 ? this.$watch("values", () => {
      this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: !0 }) : j(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: !0 });
    }), this.isMounted = !0;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $fileAsUrl(e) {
      const t = this.values[e];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, !1), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e, t) {
      return ts(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = !0;
      if (e._flatpickr && (t = !1), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = !1), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (!this.$uploading) {
        if (e) {
          const t = e.submitter;
          t && t.name && this.$put(t.name, t.value);
        }
        if (!this.confirm)
          return this.request();
        v.confirm(
          gs(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton,
          !!this.requirePassword,
          this.requirePasswordOnce
        ).then((t) => {
          if (!this.requirePassword) {
            this.request();
            return;
          }
          this.method.toUpperCase() !== "GET" && t && this.$put(
            re(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
            t
          ), this.request();
        }).catch(() => {
        });
      }
    },
    async request(e) {
      if (typeof e > "u" && (e = !1), this.$uploading)
        return;
      await this.$nextTick(), this.background ? this.processingInBackground = !0 : this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId), clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : dn(this.values), r = { Accept: "application/json" };
      (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !1, this.recentlyUnsuccessful = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, r).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !1, this.recentlySuccessful = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = cn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
        );
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
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ].includes(r) || Je(r, "__v_") ? e[r] : (!e.isMounted && !K(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), et(e.values, r));
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
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Ff = { ref: "input" };
function Cf(e, t, r, n, i, s) {
  return D(), be("div", Ff, [
    J(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const kf = /* @__PURE__ */ Le(qf, [["render", Cf]]), Lf = {
  components: { Render: ce },
  props: {
    name: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, v.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Df(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (D(), W(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? J(e.$slots, "default", { key: 1 }) : Cr("", !0);
}
const Bf = /* @__PURE__ */ Le(Lf, [["render", Df]]), Rf = ["href", "onClick"], jf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !1,
      default: "#"
    },
    method: {
      type: String,
      required: !1,
      default: "GET"
    },
    data: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({ Accept: "application/json" })
    },
    replace: {
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
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
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
    },
    away: {
      type: Boolean,
      required: !1,
      default: !1
    },
    keepModal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = U("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        gs(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce
      ).then((a) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        a && (n.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const o = r > 0 && t.keepModal;
      if (t.modal && !o)
        return v.modal(t.href);
      if (t.slideover && !o)
        return v.slideover(t.href);
      if (Je(t.href, "#")) {
        if (v.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = v.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? v.replace(t.href, u) : v.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : dn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(re(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (D(), be("a", {
      href: e.href,
      onClick: Cs(i, ["prevent"])
    }, [
      J(a.$slots, "default")
    ], 8, Rf));
  }
}, Mf = {
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
    },
    position: {
      type: String,
      required: !1,
      default: (e) => e.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: !1,
      default: null
    },
    animate: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: !0,
      isOpen: !1
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(!0);
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
      animate: this.staticAnimate,
      position: this.position,
      Dialog: Zr,
      DialogPanel: en,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Nf = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: !0
    },
    html: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !1,
      default: "modal"
    }
  },
  setup(e) {
    const t = e;
    return v.registerPreloadedModal(t.name, t.html, t.type), () => {
    };
  }
}, Vf = {
  components: { Render: ce },
  props: {
    name: {
      type: String,
      required: !0
    },
    on: {
      type: Array,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: !1,
      default: null
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: !1
    };
  },
  mounted() {
    this.on.forEach((e) => {
      this.$splade.on(e, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = !0, v.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function Uf(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (D(), W(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : i.loading ? J(e.$slots, "placeholder", { key: 1 }) : J(e.$slots, "default", { key: 2 });
}
const Hf = /* @__PURE__ */ Le(Vf, [["render", Uf]]), Wf = {
  props: {
    script: {
      type: String,
      required: !0
    }
  },
  mounted() {
    var e = new Function("obj", "with (obj) { " + this.script + "}");
    e = e.bind(this, this), e(this.script);
  },
  render() {
    return "";
  }
};
function zf(e, t) {
  var r = -1, n = Ut(e) ? Array(e.length) : [];
  return jr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ws(e, t) {
  var r = j(e) ? ki : zf;
  return r(e, xt(t));
}
const Gf = {
  inject: ["stack"],
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
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    },
    remoteUrl: {
      type: String,
      required: !1,
      default: null
    },
    optionValue: {
      type: String,
      required: !1,
      default: null
    },
    optionLabel: {
      type: String,
      required: !1,
      default: null
    },
    remoteRoot: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: !1
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : !1 : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && j(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = !0, ue({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? et(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (ne(t, (s) => {
          var a = document.createElement("option");
          a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && (i = !0), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = !1;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = !1;
      }).catch(() => {
        this.loading = !1;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = j(e);
      if (!r && z(e))
        if (this.optionValue && this.optionLabel) {
          let n = et(e, this.optionValue);
          re(n) || (n = `${n}`), t.push({
            value: n,
            label: et(e, this.optionLabel)
          });
        } else
          ne(e, (n, i) => {
            re(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ws(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return cn(this.choicesInstance._store.choices, (t) => t.value == e);
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
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: !0 })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(!0);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
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
}, Xf = { ref: "select" };
function Kf(e, t, r, n, i, s) {
  return D(), be("div", Xf, [
    J(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const Yf = /* @__PURE__ */ Le(Gf, [["render", Kf]]), Qf = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = ys(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return K(t, i);
      },
      hasShared(i) {
        return K(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function Jf(e, t, r) {
  e = Kr(e), t = Yt(t);
  var n = e.length;
  r = r === void 0 ? n : bs(un(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Zf(e, t) {
  var r = [];
  return jr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function ep(e, t) {
  var r = j(e) ? fs : Zf;
  return r(e, xt(t));
}
function si(e, t) {
  return nr(e, t);
}
const tp = {
  inject: ["stack"],
  props: {
    baseUrl: {
      type: String,
      required: !1,
      default() {
        return window.location.pathname;
      }
    },
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
    },
    searchDebounce: {
      type: Number,
      required: !1,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: !1,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: !1,
      processingAction: !1
    };
  },
  computed: {
    columnsAreToggled() {
      return !si(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = Jt(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    ne(e, (r, n) => {
      if (Je(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? v.modal(e) : t === "slideover" ? v.slideover(e) : v.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, ne(e, (t, r) => {
        Je(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = ep(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ws(r, (i) => i.key).sort();
      si(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Ie(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!Jf(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], j(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Je(e, "perPage") || Je(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      ne(e, (u, c) => {
        if (!j(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((m, h) => {
          n[`${c}[${h}]`] = m;
        });
      });
      let i = "";
      ne(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : v.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": v.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      v.replace(s, o).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Ie(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = !1);
      let a = null;
      if (t)
        try {
          a = await v.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = re(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = j(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? !0 : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
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
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, rp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: oi
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function np(e, t, r, n, i, s) {
  return ks((D(), W(Ls(i.isMounted ? i.Teleport : "div"), Ds(Bs(e.$attrs)), {
    default: li(() => [
      J(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Rs, i.isMounted]
  ]);
}
const ip = /* @__PURE__ */ Le(rp, [["render", np]]), sp = {
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
        Ie(() => e.default.update(this.element));
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
}, ap = { ref: "textarea" };
function op(e, t, r, n, i, s) {
  return D(), be("div", ap, [
    J(e.$slots, "default")
  ], 512);
}
const lp = /* @__PURE__ */ Le(sp, [["render", op]]), up = {
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
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, cp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], dp = {
  computed: {
    toasts: function() {
      return v.toastsReversed.value;
    },
    hasBackdrop: function() {
      return v.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      v.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: cp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ce,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, fp = {
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
            if (n.length === 1 && cs(n) === "default") {
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
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, pp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, hp = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && Ie(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Jt(i, 100)), i();
  }
}, Fr = {
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
    Fr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Fr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, bp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = K(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = K(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = K(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = K(t, "link_component") ? t.link_component : "Link", t.progress_bar = K(t, "progress_bar") ? t.progress_bar : !1, t.components = K(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, xu).component(`${r}Data`, qu).component(`${r}Defer`, Hu).component(`${r}Dialog`, Wu).component(`${r}Dropdown`, Zc).component(`${r}DynamicHtml`, ed).component(`${r}Errors`, td).component(`${r}Event`, rd).component(`${r}File`, _f).component(`${r}Flash`, If).component(`${r}Form`, Pf).component(`${r}Input`, kf).component(`${r}Lazy`, Bf).component(`${r}Modal`, Mf).component(`${r}OnClickOutside`, rs).component(`${r}PreloadedModal`, Nf).component(`${r}Rehydrate`, Hf).component(`${r}Render`, ce).component(`${r}Script`, Wf).component(`${r}Select`, Yf).component(`${r}State`, Qf).component(`${r}Table`, tp).component(`${r}Teleport`, ip).component(`${r}Textarea`, lp).component(`${r}Toast`, up).component(`${r}Toasts`, dp).component(`${r}Toggle`, fp).component(`${r}Transition`, pp).component(t.link_component, jf).directive(`${r}PreserveScroll`, hp), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      z(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        K(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Fr.init(t.progress_bar);
    }
    ne(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function wp(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  v as Splade,
  Vo as SpladeApp,
  bp as SpladePlugin,
  gp as renderSpladeApp,
  wp as startServer
};
