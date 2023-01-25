import he from "axios";
import { ref as y, computed as q, watch as St, openBlock as D, createBlock as U, unref as V, createCommentVNode as Fr, h as M, onMounted as N, createElementBlock as ye, createElementVNode as mr, provide as ue, inject as H, nextTick as Ae, KeepAlive as ai, normalizeStyle as Dt, createVNode as Ts, Fragment as Cr, renderList as _s, cloneVNode as As, watchEffect as se, defineComponent as z, onUnmounted as Fe, Teleport as oi, reactive as Is, onBeforeUnmount as Ps, renderSlot as Q, resolveComponent as Lr, withCtx as li, withModifiers as qs, withDirectives as Fs, resolveDynamicComponent as Cs, normalizeProps as Ls, guardReactiveProps as ks, vShow as Ds } from "vue";
function Rs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function js(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Bs = js();
const Ms = Bs;
function Ns(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Vs = typeof global == "object" && global && global.Object === Object && global;
const ui = Vs;
var Hs = typeof self == "object" && self && self.Object === Object && self, Us = ui || Hs || Function("return this")();
const pe = Us;
var Ws = pe.Symbol;
const Ie = Ws;
var ci = Object.prototype, zs = ci.hasOwnProperty, Gs = ci.toString, ft = Ie ? Ie.toStringTag : void 0;
function Xs(e) {
  var t = zs.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = !0;
  } catch {
  }
  var i = Gs.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Ks = Object.prototype, Ys = Ks.toString;
function Qs(e) {
  return Ys.call(e);
}
var Js = "[object Null]", Zs = "[object Undefined]", Sn = Ie ? Ie.toStringTag : void 0;
function Ce(e) {
  return e == null ? e === void 0 ? Zs : Js : Sn && Sn in Object(e) ? Xs(e) : Qs(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var ea = "[object Arguments]";
function On(e) {
  return Pe(e) && Ce(e) == ea;
}
var di = Object.prototype, ta = di.hasOwnProperty, ra = di.propertyIsEnumerable, na = On(function() {
  return arguments;
}()) ? On : function(e) {
  return Pe(e) && ta.call(e, "callee") && !ra.call(e, "callee");
};
const fi = na;
var ia = Array.isArray;
const B = ia;
function sa() {
  return !1;
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, $n = pi && typeof module == "object" && module && !module.nodeType && module, aa = $n && $n.exports === pi, En = aa ? pe.Buffer : void 0, oa = En ? En.isBuffer : void 0, la = oa || sa;
const vr = la;
var ua = 9007199254740991, ca = /^(?:0|[1-9]\d*)$/;
function kr(e, t) {
  var r = typeof e;
  return t = t == null ? ua : t, !!t && (r == "number" || r != "symbol" && ca.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var da = 9007199254740991;
function Dr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= da;
}
var fa = "[object Arguments]", pa = "[object Array]", ha = "[object Boolean]", ma = "[object Date]", va = "[object Error]", ga = "[object Function]", ya = "[object Map]", ba = "[object Number]", wa = "[object Object]", Sa = "[object RegExp]", Oa = "[object Set]", $a = "[object String]", Ea = "[object WeakMap]", xa = "[object ArrayBuffer]", Ta = "[object DataView]", _a = "[object Float32Array]", Aa = "[object Float64Array]", Ia = "[object Int8Array]", Pa = "[object Int16Array]", qa = "[object Int32Array]", Fa = "[object Uint8Array]", Ca = "[object Uint8ClampedArray]", La = "[object Uint16Array]", ka = "[object Uint32Array]", F = {};
F[_a] = F[Aa] = F[Ia] = F[Pa] = F[qa] = F[Fa] = F[Ca] = F[La] = F[ka] = !0;
F[fa] = F[pa] = F[xa] = F[ha] = F[Ta] = F[ma] = F[va] = F[ga] = F[ya] = F[ba] = F[wa] = F[Sa] = F[Oa] = F[$a] = F[Ea] = !1;
function Da(e) {
  return Pe(e) && Dr(e.length) && !!F[Ce(e)];
}
function Ra(e) {
  return function(t) {
    return e(t);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, vt = hi && typeof module == "object" && module && !module.nodeType && module, ja = vt && vt.exports === hi, or = ja && ui.process, Ba = function() {
  try {
    var e = vt && vt.require && vt.require("util").types;
    return e || or && or.binding && or.binding("util");
  } catch {
  }
}();
const xn = Ba;
var Tn = xn && xn.isTypedArray, Ma = Tn ? Ra(Tn) : Da;
const mi = Ma;
var Na = Object.prototype, Va = Na.hasOwnProperty;
function Ha(e, t) {
  var r = B(e), n = !r && fi(e), i = !r && !n && vr(e), s = !r && !n && !i && mi(e), a = r || n || i || s, o = a ? Ns(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Va.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || kr(u, l))) && o.push(u);
  return o;
}
var Ua = Object.prototype;
function Wa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ua;
  return e === r;
}
function za(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ga = za(Object.keys, Object);
const Xa = Ga;
var Ka = Object.prototype, Ya = Ka.hasOwnProperty;
function Qa(e) {
  if (!Wa(e))
    return Xa(e);
  var t = [];
  for (var r in Object(e))
    Ya.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ja = "[object AsyncFunction]", Za = "[object Function]", eo = "[object GeneratorFunction]", to = "[object Proxy]";
function vi(e) {
  if (!W(e))
    return !1;
  var t = Ce(e);
  return t == Za || t == eo || t == Ja || t == to;
}
function Vt(e) {
  return e != null && Dr(e.length) && !vi(e);
}
function Ht(e) {
  return Vt(e) ? Ha(e) : Qa(e);
}
function Rr(e, t) {
  return e && Ms(e, t, Ht);
}
function ro(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Vt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var no = ro(Rr);
const jr = no;
function gi(e) {
  return e;
}
function yi(e) {
  return typeof e == "function" ? e : gi;
}
function io(e, t) {
  var r = B(e) ? Rs : jr;
  return r(e, yi(t));
}
function re(e, t) {
  return e && Rr(e, yi(t));
}
var so = Array.prototype, ao = so.reverse;
function oo(e) {
  return e == null ? e : ao.call(e);
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
const Rt = y(0), te = y(1), C = y({}), ne = y(0), Ut = y({}), tt = {}, be = typeof window > "u";
function lo(e, t, r) {
  be || window.addEventListener("popstate", uo.bind(this)), Object.keys(t).length > 0 && Rt.value++, tt[te.value] = new bi(te.value), Vr(r), Wt(r.head), Hr(e);
  const n = be ? "" : location.href, i = Br(
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
function uo(e) {
  !e.state || (C.value = e.state, ne.value = 0, Ut.value = {}, Ur.value = {}, Mr.value = C.value.persistentLayoutKey, Wt(C.value.head), Hr(C.value.html, C.value.rememberedState.scrollY));
}
function Br(e, t, r, n, i, s, a, o) {
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
function co(e) {
  be || window.history.pushState(e, "", e.url);
}
function fo(e) {
  const t = Br(
    e,
    JSON.parse(JSON.stringify(C.value.head)),
    C.value.html,
    JSON.parse(JSON.stringify(C.value.dynamics)),
    { ...C.value.rememberedState },
    C.value.pageVisitId,
    C.value.dynamicVisitId,
    C.value.persistentLayoutKey
  );
  be || window.history.replaceState(t, "", t.url);
}
function wi(e) {
  be || window.history.replaceState(e, "", e.url);
}
const lr = y(0), Mr = y(null);
function po(e, t) {
  var p;
  lr.value++;
  const r = e.request.responseURL;
  if (W((p = e.data) == null ? void 0 : p.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ne.value++;
  const n = Mr.value;
  if (Vr(e.data.splade), Wt(e.data.splade.head), r === C.value.url && (t = !0), e.data.splade.modal)
    return Pi(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ne.value = 0, Ut.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(C.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && re(s, (f, d) => {
    s[d] += `<!-- ${lr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${lr.value} -->`)) : (o && Rt.value++, (!o || !a) && (te.value++, tt[te.value] = tt[te.value] || new bi(te.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !be && t && e.data.splade.preserveScroll && (u = window.scrollY), Hr(
    l ? C.value.html : i,
    u
  );
  const c = Br(
    r,
    e.data.splade.head,
    l ? C.value.html : i,
    s,
    C.value.rememberedState ? { ...C.value.rememberedState } : {},
    te.value,
    Rt.value,
    e.data.splade.persistentLayout
  );
  t ? wi(c) : co(c);
}
function ho() {
  ne.value--, Wt(vo(ne.value));
}
const Si = y({}), Oi = (e) => Si.value[e], mo = (e) => Object.keys(Oi.value[e]).length > 0, $i = y({}), vo = (e) => $i.value[e], Ei = y({}), go = (e) => Ei.value[e], rt = y([]);
function yo(e) {
  rt.value.push(e);
}
const bo = q(() => oo(rt.value));
function wo(e) {
  rt.value[e].dismissed = !0, rt.value[e].html = null;
}
const Nr = y(null);
function So(e, t, r, n, i) {
  let s, a;
  typeof i > "u" && (i = !1);
  const o = new Promise((l, u) => {
    s = l, a = u;
  });
  return Nr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: s,
    rejectPromise: a,
    confirmPasswordPromise: i
  }, o;
}
function Oo() {
  Nr.value = null;
}
const xi = y({});
function Vr(e) {
  Mr.value = e.persistentLayout, xi.value = e.shared ? e.shared : {}, Ei.value[ne.value] = e.flash ? e.flash : {}, $i.value[ne.value] = e.head ? e.head : {}, io(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), Si.value[ne.value] = e.errors ? e.errors : {};
}
const Ti = y(() => {
}), _i = y(() => {
}), Ai = y(() => {
}), Ii = y(() => {
});
function Wt(e) {
  Ti.value(e);
}
function Hr(e, t) {
  _i.value(e, t);
}
function Pi(e, t) {
  Ut.value[ne.value] = !0, Ai.value(e, t);
}
function $o(e) {
  return Ut.value[e];
}
function Eo(e) {
  Ii.value(e);
}
const qi = y({});
function Fi(e, t, r) {
  qi.value[e] = t, r && xo(e, t);
}
function xo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function To(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : qi.value[e];
}
function At(e, t) {
  be || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function We(e, t, r, n, i) {
  if (be || Fi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  At("request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = he({
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
    po(a, i), At("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (At("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Vr(o), a.response.status != 422 && Eo(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Ci(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, !0);
}
function _o(e, t) {
  return typeof t > "u" && (t = {}), We(e, "GET", {}, t, !1);
}
function Ao(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Ur = y({});
function Io(e) {
  const t = Ur.value[e];
  return t ? (ne.value++, Pi(t.html, t.type), !0) : !1;
}
function Po(e, t, r) {
  Ur.value[e] = { html: t, type: r };
}
function qo(e) {
  return We(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Fo(e, t) {
  return We(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Co(e, t) {
  return We(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Lo() {
  return Ci(C.value.url);
}
function ko(e, t) {
  tt[te.value].on(e, t);
}
function Do(e, t) {
  tt[te.value].off(e, t);
}
function Ro(e, t) {
  typeof t > "u" && (t = {}), tt[te.value].emit(e, t);
}
const v = {
  init: lo,
  replace: Ci,
  visit: _o,
  modal: Ao,
  slideover: qo,
  refresh: Lo,
  request: We,
  lazy: Fo,
  rehydrate: Co,
  replaceUrlOfCurrentPage: fo,
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
    Ai.value = e;
  },
  setOnServerError(e) {
    Ii.value = e;
  },
  hasValidationErrors: mo,
  validationErrors: Oi,
  sharedData: xi,
  flashData: go,
  toasts: rt,
  toastsReversed: bo,
  confirmModal: Nr,
  confirm: So,
  clearConfirmModal: Oo,
  pushToast: yo,
  dismissToast: wo,
  restore: To,
  remember: Fi,
  popStack: ho,
  currentStack: ne,
  stackType: $o,
  pageVisitId: q(() => C.value.pageVisitId),
  dynamicVisitId: q(() => C.value.dynamicVisitId),
  isSsr: be,
  openPreloadedModal: Io,
  registerPreloadedModal: Po,
  on: ko,
  off: Do,
  emit: Ro
};
var jo = "[object String]";
function oe(e) {
  return typeof e == "string" || !B(e) && Pe(e) && Ce(e) == jo;
}
const le = {
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
    return St(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (D(), U(V(r), { key: 0 })) : Fr("", !0);
  }
}, Bo = {
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
    return N(() => i()), (o, l) => (D(), ye("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      mr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Mo = {
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
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = oe(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    ue("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = H("$spladeOptions") || {}, l = q(() => v.currentStack.value < 1 ? [] : {
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
    function p(d) {
      const h = document.createElement("meta");
      re(d, (m, g) => {
        h[g] = m;
      }), document.getElementsByTagName("head")[0].appendChild(h);
    }
    function f(d) {
      var m;
      let h = "meta";
      re(d, (g, x) => {
        h = `${h}[${x}="${g}"]`;
      });
      try {
        (m = document.querySelector(h)) == null || m.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var h;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((m) => {
          f(m);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((m) => {
          p(m);
        }), (h = document.querySelector('link[rel="canonical"]')) == null || h.remove(), d.canonical) {
          const m = document.createElement("link");
          m.rel = "canonical", m.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(m);
        }
      }
    }), v.setOnHtml((d, h) => {
      n.value = [], r.value = d, Ae(() => {
        v.isSsr || window.scrollTo(0, h), o.transform_anchors && [...document.querySelectorAll("a")].forEach((m) => {
          m.href == "" || m.href.charAt(0) == "#" || m.__vnode.dynamicProps === null && (m.hasAttribute("download") || (m.onclick = function(g) {
            g.preventDefault(), v.visit(m.href);
          }));
        });
      });
    }), v.setOnModal(function(d, h) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: d, type: h }, Ae(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), N(() => {
      if (v.isSsr)
        return;
      const d = oe(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((h) => {
        delete d.dataset[h];
      });
    }), (d, h) => (D(), ye("div", null, [
      V(v).isSsr ? (D(), U(le, {
        key: `visit.${V(v).pageVisitId.value}`,
        style: Dt(V(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (D(), U(ai, {
        key: 0,
        max: V(o).max_keep_alive
      }, [
        (D(), U(le, {
          key: `visit.${V(v).pageVisitId.value}`,
          style: Dt(V(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      Ts(le, { html: e.components }, null, 8, ["html"]),
      (D(!0), ye(Cr, null, _s(V(v).currentStack.value, (m) => (D(), U(le, {
        key: `modal.${m}`,
        type: n.value[m].type,
        html: n.value[m].html,
        stack: m,
        "on-top-of-stack": V(v).currentStack.value === m,
        animate: a.value,
        onClose: (g) => c(m)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (D(), U(Bo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Fr("", !0)
    ]));
  }
};
function mp(e) {
  return () => M(Mo, e);
}
var No = Object.prototype, Vo = No.hasOwnProperty;
function Ho(e, t) {
  return e != null && Vo.call(e, t);
}
var Uo = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || Pe(e) && Ce(e) == Uo;
}
var Wo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zo = /^\w*$/;
function Wr(e, t) {
  if (B(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || zt(e) ? !0 : zo.test(e) || !Wo.test(e) || t != null && e in Object(t);
}
var Go = pe["__core-js_shared__"];
const ur = Go;
var _n = function() {
  var e = /[^.]+$/.exec(ur && ur.keys && ur.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xo(e) {
  return !!_n && _n in e;
}
var Ko = Function.prototype, Yo = Ko.toString;
function ze(e) {
  if (e != null) {
    try {
      return Yo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qo = /[\\^$.*+?()[\]{}|]/g, Jo = /^\[object .+?Constructor\]$/, Zo = Function.prototype, el = Object.prototype, tl = Zo.toString, rl = el.hasOwnProperty, nl = RegExp(
  "^" + tl.call(rl).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function il(e) {
  if (!W(e) || Xo(e))
    return !1;
  var t = vi(e) ? nl : Jo;
  return t.test(ze(e));
}
function sl(e, t) {
  return e == null ? void 0 : e[t];
}
function Ge(e, t) {
  var r = sl(e, t);
  return il(r) ? r : void 0;
}
var al = Ge(Object, "create");
const yt = al;
function ol() {
  this.__data__ = yt ? yt(null) : {}, this.size = 0;
}
function ll(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ul = "__lodash_hash_undefined__", cl = Object.prototype, dl = cl.hasOwnProperty;
function fl(e) {
  var t = this.__data__;
  if (yt) {
    var r = t[e];
    return r === ul ? void 0 : r;
  }
  return dl.call(t, e) ? t[e] : void 0;
}
var pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  return yt ? t[e] !== void 0 : hl.call(t, e);
}
var vl = "__lodash_hash_undefined__";
function gl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = yt && t === void 0 ? vl : t, this;
}
function Ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ve.prototype.clear = ol;
Ve.prototype.delete = ll;
Ve.prototype.get = fl;
Ve.prototype.has = ml;
Ve.prototype.set = gl;
function yl() {
  this.__data__ = [], this.size = 0;
}
function zr(e, t) {
  return e === t || e !== e && t !== t;
}
function Gt(e, t) {
  for (var r = e.length; r--; )
    if (zr(e[r][0], t))
      return r;
  return -1;
}
var bl = Array.prototype, wl = bl.splice;
function Sl(e) {
  var t = this.__data__, r = Gt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : wl.call(t, r, 1), --this.size, !0;
}
function Ol(e) {
  var t = this.__data__, r = Gt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function $l(e) {
  return Gt(this.__data__, e) > -1;
}
function El(e, t) {
  var r = this.__data__, n = Gt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = yl;
we.prototype.delete = Sl;
we.prototype.get = Ol;
we.prototype.has = $l;
we.prototype.set = El;
var xl = Ge(pe, "Map");
const bt = xl;
function Tl() {
  this.size = 0, this.__data__ = {
    hash: new Ve(),
    map: new (bt || we)(),
    string: new Ve()
  };
}
function _l(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xt(e, t) {
  var r = e.__data__;
  return _l(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Al(e) {
  var t = Xt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Il(e) {
  return Xt(this, e).get(e);
}
function Pl(e) {
  return Xt(this, e).has(e);
}
function ql(e, t) {
  var r = Xt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = Tl;
Se.prototype.delete = Al;
Se.prototype.get = Il;
Se.prototype.has = Pl;
Se.prototype.set = ql;
var Fl = "Expected a function";
function Gr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Gr.Cache || Se)(), r;
}
Gr.Cache = Se;
var Cl = 500;
function Ll(e) {
  var t = Gr(e, function(n) {
    return r.size === Cl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var kl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dl = /\\(\\)?/g, Rl = Ll(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kl, function(r, n, i, s) {
    t.push(i ? s.replace(Dl, "$1") : n || r);
  }), t;
});
const jl = Rl;
function Li(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Bl = 1 / 0, An = Ie ? Ie.prototype : void 0, In = An ? An.toString : void 0;
function Kt(e) {
  if (typeof e == "string")
    return e;
  if (B(e))
    return Li(e, Kt) + "";
  if (zt(e))
    return In ? In.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Bl ? "-0" : t;
}
function Xr(e) {
  return e == null ? "" : Kt(e);
}
function Kr(e, t) {
  return B(e) ? e : Wr(e, t) ? [e] : jl(Xr(e));
}
var Ml = 1 / 0;
function Ot(e) {
  if (typeof e == "string" || zt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ml ? "-0" : t;
}
function ki(e, t, r) {
  t = Kr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Ot(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Dr(i) && kr(a, i) && (B(e) || fi(e)));
}
function X(e, t) {
  return e != null && ki(e, t, Ho);
}
function K(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, K), n;
}
var jt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(jt || {}), _e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_e || {});
function G({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Nl(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return cr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return K(l, { [0]() {
      return null;
    }, [1]() {
      return cr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return cr(o);
}
function cr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s;
  let { as: a, ...o } = Ri(e, ["unmount", "static"]), l = (s = r.default) == null ? void 0 : s.call(r, n), u = {};
  if (n) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (a === "template") {
    if (l = Di(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!Vl(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return As(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return M(a, Object.assign({}, o, u), { default: () => l });
}
function Di(e) {
  return e.flatMap((t) => t.type === Cr ? Di(t.children) : [t]);
}
function Nl(...e) {
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
function Vl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Hl = 0;
function Ul() {
  return ++Hl;
}
function Xe() {
  return Ul();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function ce(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Bi = Symbol("Context");
var He = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(He || {});
function Wl() {
  return Yr() !== null;
}
function Yr() {
  return H(Bi, null);
}
function zl(e) {
  ue(Bi, e);
}
const Yt = typeof window > "u" || typeof document > "u";
function ot(e) {
  if (Yt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ce(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let gr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Te || {}), Mi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Mi || {}), Gl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Gl || {});
function Xl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(gr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ni = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ni || {});
function Kl(e, t = 0) {
  var r;
  return e === ((r = ot(e)) == null ? void 0 : r.body) ? !1 : K(t, { [0]() {
    return e.matches(gr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(gr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Ze(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Yl = ["textarea", "input"].join(",");
function Ql(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Yl)) != null ? r : !1;
}
function Jl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ct(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? Jl(e) : e : Xl(e);
  i.length > 0 && (o = o.filter((h) => !i.includes(h))), n = n != null ? n : a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, p = 0, f = o.length, d;
  do {
    if (p >= f || p + f <= 0)
      return 0;
    let h = u + p;
    if (t & 16)
      h = (h + f) % f;
    else {
      if (h < 0)
        return 3;
      if (h >= f)
        return 1;
    }
    d = o[h], d == null || d.focus(c), p += l;
  } while (d !== a.activeElement);
  return t & 6 && Ql(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function dr(e, t, r) {
  Yt || se((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Zl(e, t, r = q(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : ce(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Kl(o, Ni.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  dr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), dr("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, !0), dr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Bt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Bt || {});
let yr = z({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return G({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function eu(e, t, r) {
  Yt || se((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var mt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mt || {});
function tu() {
  let e = y(0);
  return eu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Vi(e, t, r, n) {
  Yt || se((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function ru(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Hi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hi || {});
let pt = Object.assign(z({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = q(() => ot(i));
  nu({ ownerDocument: s }, q(() => Boolean(e.features & 16)));
  let a = iu({ ownerDocument: s, container: i, initialFocus: q(() => e.initialFocus) }, q(() => Boolean(e.features & 2)));
  su({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, q(() => Boolean(e.features & 8)));
  let o = tu();
  function l(f) {
    let d = ce(i);
    !d || ((h) => h())(() => {
      K(o.value, { [mt.Forwards]: () => Ct(d, Te.First, { skipElements: [f.relatedTarget] }), [mt.Backwards]: () => Ct(d, Te.Last, { skipElements: [f.relatedTarget] }) });
    });
  }
  let u = y(!1);
  function c(f) {
    f.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function p(f) {
    var d;
    let h = new Set((d = e.containers) == null ? void 0 : d.value);
    h.add(i);
    let m = f.relatedTarget;
    !m || m.dataset.headlessuiFocusGuard !== "true" && (Ui(h, m) || (u.value ? Ct(ce(i), K(o.value, { [mt.Forwards]: () => Te.Next, [mt.Backwards]: () => Te.Previous }) | Te.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && Ze(f.target)));
  }
  return () => {
    let f = {}, d = { ref: i, onKeydown: c, onFocusout: p }, { features: h, initialFocus: m, containers: g, ...x } = e;
    return M(Cr, [Boolean(h & 4) && M(yr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Bt.Focusable }), G({ ourProps: d, theirProps: { ...t, ...x }, slot: f, attrs: t, slots: r, name: "FocusTrap" }), Boolean(h & 4) && M(yr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Bt.Focusable })]);
  };
} }), { features: Hi });
function nu({ ownerDocument: e }, t) {
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
function iu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return N(() => s.value = !0), Fe(() => s.value = !1), N(() => {
    St([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = ce(t);
      !l || ru(() => {
        var u, c;
        if (!s.value)
          return;
        let p = ce(r), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        p ? Ze(p) : Ct(l, Te.First | Te.NoScroll) === Mi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function su({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Vi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Ui(o, u) ? (n.value = u, Ze(u)) : (a.preventDefault(), a.stopPropagation(), Ze(l)) : Ze(n.value);
  }, !0);
}
function Ui(e, t) {
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
function au(e, t = y(!0)) {
  se((r) => {
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
let Wi = Symbol("ForcePortalRootContext");
function ou() {
  return H(Wi, !1);
}
let br = z({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return ue(Wi, e.force), () => {
    let { force: n, ...i } = e;
    return G({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function lu(e) {
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
let zi = z({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = q(() => ot(n)), s = ou(), a = H(Gi, null), o = y(s === !0 || a == null ? lu(n.value) : a.resolveTarget());
  return se(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), Fe(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return M(oi, { to: o.value }, G({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Gi = Symbol("PortalGroupContext"), uu = z({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Is({ resolveTarget() {
    return e.target;
  } });
  return ue(Gi, n), () => {
    let { target: i, ...s } = e;
    return G({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Xi = Symbol("StackContext");
var wr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(wr || {});
function cu() {
  return H(Xi, () => {
  });
}
function du({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = cu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  N(() => {
    St(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Fe(() => {
    t.value && s(1, e, r);
  }), ue(Xi, s);
}
let Ki = Symbol("DescriptionContext");
function fu() {
  let e = H(Ki, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function pu({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return ue(Ki, { register: i, slot: e, name: t, props: r }), q(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let vp = z({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = fu();
  return N(() => Fe(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [p, f]) => Object.assign(c, { [p]: V(f) }), {}), id: o };
    return G({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Qr() {
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
function hu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var mu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(mu || {});
let Sr = Symbol("DialogContext");
function $t(e) {
  let t = H(Sr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, $t), r;
  }
  return t;
}
let It = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Jr = z({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: It }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Xe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  N(() => {
    a.value = !0;
  });
  let o = y(0), l = Yr(), u = q(() => e.open === It && l !== null ? K(l.value, { [He.Open]: !0, [He.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), p = y(null), f = y(null), d = q(() => ot(p));
  if (i({ el: p, $el: p }), !(e.open !== It || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === It ? void 0 : e.open}`);
  let h = q(() => a.value && u.value ? 0 : 1), m = q(() => h.value === 0), g = q(() => o.value > 1), x = H(Sr, null) !== null, A = q(() => g.value ? "parent" : "leaf");
  au(p, q(() => g.value ? m.value : !1)), du({ type: "Dialog", enabled: q(() => h.value === 0), element: p, onUpdate: (w, O, $) => {
    if (O === "Dialog")
      return K(w, { [wr.Add]() {
        c.value.add($), o.value += 1;
      }, [wr.Remove]() {
        c.value.delete($), o.value -= 1;
      } });
  } });
  let I = pu({ name: "DialogDescription", slot: q(() => ({ open: u.value })) }), E = y(null), S = { titleId: E, panelRef: y(null), dialogState: h, setTitleId(w) {
    E.value !== w && (E.value = w);
  }, close() {
    t("close", !1);
  } };
  ue(Sr, S);
  function b() {
    var w, O, $;
    return [...Array.from((O = (w = d.value) == null ? void 0 : w.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(ce(f)) || S.panelRef.value && T.contains(S.panelRef.value))), ($ = S.panelRef.value) != null ? $ : p.value];
  }
  return Zl(() => b(), (w, O) => {
    S.close(), Ae(() => O == null ? void 0 : O.focus());
  }, q(() => h.value === 0 && !g.value)), Vi((s = d.value) == null ? void 0 : s.defaultView, "keydown", (w) => {
    w.defaultPrevented || w.key === ji.Escape && h.value === 0 && (g.value || (w.preventDefault(), w.stopPropagation(), S.close()));
  }), se((w) => {
    var O;
    if (h.value !== 0 || x)
      return;
    let $ = d.value;
    if (!$)
      return;
    let T = Qr(), _ = window.pageYOffset;
    function L(R, P, j) {
      let Oe = R.style.getPropertyValue(P);
      return Object.assign(R.style, { [P]: j }), T.add(() => {
        Object.assign(R.style, { [P]: Oe });
      });
    }
    let k = $ == null ? void 0 : $.documentElement, Z = ((O = $.defaultView) != null ? O : window).innerWidth - k.clientWidth;
    if (L(k, "overflow", "hidden"), Z > 0) {
      let R = k.clientWidth - k.offsetWidth, P = Z - R;
      L(k, "paddingRight", `${P}px`);
    }
    if (hu()) {
      L($.body, "marginTop", `-${_}px`), window.scrollTo(0, 0);
      let R = null;
      T.addEventListener($, "click", (P) => {
        if (P.target instanceof HTMLElement)
          try {
            let j = P.target.closest("a");
            if (!j)
              return;
            let { hash: Oe } = new URL(j.href), ee = $.querySelector(Oe);
            ee && !b().some((Ke) => Ke.contains(ee)) && (R = ee);
          } catch {
          }
      }, !0), T.addEventListener($, "touchmove", (P) => {
        P.target instanceof HTMLElement && !b().some((j) => j.contains(P.target)) && P.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + _), R && R.isConnected && (R.scrollIntoView({ block: "nearest" }), R = null);
      });
    }
    w(T.dispose);
  }), se((w) => {
    if (h.value !== 0)
      return;
    let O = ce(p);
    if (!O)
      return;
    let $ = new IntersectionObserver((T) => {
      for (let _ of T)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && S.close();
    });
    $.observe(O), w(() => $.disconnect());
  }), () => {
    let { id: w, open: O, initialFocus: $, ...T } = e, _ = { ...r, ref: p, id: w, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": I.value }, L = { open: h.value === 0 };
    return M(br, { force: !0 }, () => [M(zi, () => M(uu, { target: p.value }, () => M(br, { force: !1 }, () => M(pt, { initialFocus: $, containers: c, features: m.value ? K(A.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => G({ ourProps: _, theirProps: T, slot: L, attrs: r, slots: n, visible: h.value === 0, features: jt.RenderStrategy | jt.Static, name: "Dialog" }))))), M(yr, { features: Bt.Hidden, ref: f })]);
  };
} });
z({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = $t("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return G({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
z({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Xe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = $t("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), N(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return M(br, { force: !0 }, () => M(zi, () => G({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Zr = z({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Xe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = $t("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return G({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
z({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Xe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = $t("DialogTitle");
  return N(() => {
    n.setTitleId(e.id), Fe(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return G({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function vu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function fr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Pt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Or = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Or || {});
function gu(e, t) {
  let r = Qr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Cn(e, t, r, n, i, s) {
  let a = Qr(), o = s !== void 0 ? vu(s) : () => {
  };
  return Pt(e, ...i), fr(e, ...t, ...r), a.nextFrame(() => {
    Pt(e, ...r), fr(e, ...n), a.add(gu(e, (l) => (Pt(e, ...n, ...t), fr(e, ...i), o(l))));
  }), a.add(() => Pt(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function je(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let en = Symbol("TransitionContext");
var yu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(yu || {});
function bu() {
  return H(en, null) !== null;
}
function wu() {
  let e = H(en, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Su() {
  let e = H(tn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let tn = Symbol("NestingContext");
function Qt(e) {
  return "children" in e ? Qt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Yi(e) {
  let t = y([]), r = y(!1);
  N(() => r.value = !0), Fe(() => r.value = !1);
  function n(s, a = _e.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (K(a, { [_e.Unmount]() {
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
let Qi = jt.RenderStrategy, lt = z({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!bu() && Wl())
    return () => M(ut, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let s = y(null), a = y("visible"), o = q(() => e.unmount ? _e.Unmount : _e.Hidden);
  i({ el: s, $el: s });
  let { show: l, appear: u } = wu(), { register: c, unregister: p } = Su(), f = { value: !0 }, d = Xe(), h = { value: !1 }, m = Yi(() => {
    h.value || (a.value = "hidden", p(d), t("afterLeave"));
  });
  N(() => {
    let O = c(d);
    Fe(O);
  }), se(() => {
    if (o.value === _e.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      K(a.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let g = je(e.enter), x = je(e.enterFrom), A = je(e.enterTo), I = je(e.entered), E = je(e.leave), S = je(e.leaveFrom), b = je(e.leaveTo);
  N(() => {
    se(() => {
      if (a.value === "visible") {
        let O = ce(s);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w(O) {
    let $ = f.value && !u.value, T = ce(s);
    !T || !(T instanceof HTMLElement) || $ || (h.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), O(l.value ? Cn(T, g, x, A, I, (_) => {
      h.value = !1, _ === Or.Finished && t("afterEnter");
    }) : Cn(T, E, S, b, I, (_) => {
      h.value = !1, _ === Or.Finished && (Qt(m) || (a.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return N(() => {
    St([l], (O, $, T) => {
      w(T), f.value = !1;
    }, { immediate: !0 });
  }), ue(tn, m), zl(q(() => K(a.value, { visible: He.Open, hidden: He.Closed }))), () => {
    let { appear: O, show: $, enter: T, enterFrom: _, enterTo: L, entered: k, leave: Z, leaveFrom: R, leaveTo: P, ...j } = e;
    return G({ theirProps: j, ourProps: { ref: s }, slot: {}, slots: n, attrs: r, features: Qi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), Ou = lt, ut = z({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Yr(), s = q(() => e.show === null && i !== null ? K(i.value, { [He.Open]: !0, [He.Closed]: !1 }) : e.show);
  se(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = Yi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: q(() => e.appear || !l.value) };
  return N(() => {
    se(() => {
      l.value = !1, s.value ? a.value = "visible" : Qt(o) || (a.value = "hidden");
    });
  }), ue(tn, o), ue(en, u), () => {
    let c = Ri(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return G({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [M(Ou, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: Qi, visible: a.value === "visible", name: "Transition" });
  };
} });
const $u = {
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
      return (e = v.confirmModal.value) != null && e.confirmPasswordPromise ? v.confirmModal.value.confirmPasswordPromise : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0, this.resetPassword());
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
        return this.handleSuccess();
      this.submitting = !0;
      let e = this.password;
      this.passwordError = "", he.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        v.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = !1;
      });
    },
    handleSuccess() {
      v.confirmModal.value.resolvePromise(), this.setIsOpen(!1), this.resetPassword();
    },
    setIsOpen(e) {
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
      Dialog: Jr,
      DialogPanel: Zr,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
};
function Ji(e, t) {
  t = Kr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ot(t[r++])];
  return r && r == n ? e : void 0;
}
function et(e, t, r) {
  var n = e == null ? void 0 : Ji(e, t);
  return n === void 0 ? r : n;
}
var Eu = function() {
  try {
    var e = Ge(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ln = Eu;
function Zi(e, t, r) {
  t == "__proto__" && Ln ? Ln(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var xu = Object.prototype, Tu = xu.hasOwnProperty;
function _u(e, t, r) {
  var n = e[t];
  (!(Tu.call(e, t) && zr(n, r)) || r === void 0 && !(t in e)) && Zi(e, t, r);
}
function Au(e, t, r, n) {
  if (!W(e))
    return e;
  t = Kr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Ot(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = W(c) ? c : kr(t[i + 1]) ? [] : {});
    }
    _u(o, l, u), o = o[l];
  }
  return e;
}
function es(e, t, r) {
  return e == null ? e : Au(e, t, r);
}
const Iu = {
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
          es(e.values, r, n);
        }
      })
    );
  }
};
var Pu = function() {
  return pe.Date.now();
};
const pr = Pu;
var qu = /\s/;
function Fu(e) {
  for (var t = e.length; t-- && qu.test(e.charAt(t)); )
    ;
  return t;
}
var Cu = /^\s+/;
function Lu(e) {
  return e && e.slice(0, Fu(e) + 1).replace(Cu, "");
}
var kn = 0 / 0, ku = /^[-+]0x[0-9a-f]+$/i, Du = /^0b[01]+$/i, Ru = /^0o[0-7]+$/i, ju = parseInt;
function $r(e) {
  if (typeof e == "number")
    return e;
  if (zt(e))
    return kn;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lu(e);
  var r = Du.test(e);
  return r || Ru.test(e) ? ju(e.slice(2), r ? 2 : 8) : ku.test(e) ? kn : +e;
}
var Bu = "Expected a function", Mu = Math.max, Nu = Math.min;
function rn(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Bu);
  t = $r(t) || 0, W(r) && (c = !!r.leading, p = "maxWait" in r, s = p ? Mu($r(r.maxWait) || 0, t) : s, f = "trailing" in r ? !!r.trailing : f);
  function d(b) {
    var w = n, O = i;
    return n = i = void 0, u = b, a = e.apply(O, w), a;
  }
  function h(b) {
    return u = b, o = setTimeout(x, t), c ? d(b) : a;
  }
  function m(b) {
    var w = b - l, O = b - u, $ = t - w;
    return p ? Nu($, s - O) : $;
  }
  function g(b) {
    var w = b - l, O = b - u;
    return l === void 0 || w >= t || w < 0 || p && O >= s;
  }
  function x() {
    var b = pr();
    if (g(b))
      return A(b);
    o = setTimeout(x, m(b));
  }
  function A(b) {
    return o = void 0, f && n ? d(b) : (n = i = void 0, a);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function E() {
    return o === void 0 ? a : A(pr());
  }
  function S() {
    var b = pr(), w = g(b);
    if (n = arguments, i = this, l = b, w) {
      if (o === void 0)
        return h(l);
      if (p)
        return clearTimeout(o), o = setTimeout(x, t), d(l);
    }
    return o === void 0 && (o = setTimeout(x, t)), a;
  }
  return S.cancel = I, S.flush = E, S;
}
const Vu = {
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
    this.debounceFunction = rn(() => {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), he(e).then((t) => {
        this.response = t.data, this.processing = !1, this.$emit("success");
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
}, Hu = {
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
      Dialog: Jr,
      DialogPanel: Zr,
      isActivated: this.isActivated
    });
  }
}, ts = {
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
    }), Ps(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (D(), ye("div", {
      ref_key: "root",
      ref: n
    }, [
      Q(s.$slots, "default")
    ], 512));
  }
};
function J(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ue(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function Y(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ne = Math.max, Mt = Math.min, nt = Math.round;
function Er() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function rs() {
  return !/^((?!chrome|android).)*safari/i.test(Er());
}
function it(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && Y(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = Ue(e) ? J(e) : window, o = a.visualViewport, l = !rs() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, p = n.width / i, f = n.height / s;
  return {
    width: p,
    height: f,
    top: c,
    right: u + p,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function sn(e) {
  var t = J(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Uu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Wu(e) {
  return e === J(e) || !Y(e) ? sn(e) : Uu(e);
}
function de(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Le(e) {
  return ((Ue(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function an(e) {
  return it(Le(e)).left + sn(e).scrollLeft;
}
function ae(e) {
  return J(e).getComputedStyle(e);
}
function on(e) {
  var t = ae(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function zu(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Gu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Y(t), i = Y(t) && zu(t), s = Le(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((de(t) !== "body" || on(s)) && (o = Wu(t)), Y(t) ? (l = it(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = an(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ns(e) {
  var t = it(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Jt(e) {
  return de(e) === "html" ? e : e.assignedSlot || e.parentNode || (nn(e) ? e.host : null) || Le(e);
}
function is(e) {
  return ["html", "body", "#document"].indexOf(de(e)) >= 0 ? e.ownerDocument.body : Y(e) && on(e) ? e : is(Jt(e));
}
function gt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = is(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(n), a = i ? [s].concat(s.visualViewport || [], on(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(gt(Jt(a)));
}
function Xu(e) {
  return ["table", "td", "th"].indexOf(de(e)) >= 0;
}
function Dn(e) {
  return !Y(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function Ku(e) {
  var t = /firefox/i.test(Er()), r = /Trident/i.test(Er());
  if (r && Y(e)) {
    var n = ae(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Jt(e);
  for (nn(i) && (i = i.host); Y(i) && ["html", "body"].indexOf(de(i)) < 0; ) {
    var s = ae(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Zt(e) {
  for (var t = J(e), r = Dn(e); r && Xu(r) && ae(r).position === "static"; )
    r = Dn(r);
  return r && (de(r) === "html" || de(r) === "body" && ae(r).position === "static") ? t : r || Ku(e) || t;
}
var ie = "top", fe = "bottom", qe = "right", me = "left", er = "auto", tr = [ie, fe, qe, me], st = "start", wt = "end", Yu = "clippingParents", ss = "viewport", ht = "popper", Qu = "reference", Rn = /* @__PURE__ */ tr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + wt]);
}, []), Ju = /* @__PURE__ */ [].concat(tr, [er]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + wt]);
}, []), Zu = "beforeRead", ec = "read", tc = "afterRead", rc = "beforeMain", nc = "main", ic = "afterMain", sc = "beforeWrite", ac = "write", oc = "afterWrite", xr = [Zu, ec, tc, rc, nc, ic, sc, ac, oc];
function lc(e) {
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
function uc(e) {
  var t = lc(e);
  return xr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function cc(e) {
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
var Be = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', dc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', jn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function fc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), jn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ee(Be, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ee(Be, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          xr.indexOf(t.phase) < 0 && console.error(Ee(Be, t.name, '"phase"', "either " + xr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ee(Be, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ee(Be, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ee(Be, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ee(Be, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + jn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ee(dc, String(t.name), n, n));
      });
    });
  });
}
function pc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ve(e) {
  return e.split("-")[0];
}
function hc(e) {
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
function mc(e, t) {
  var r = J(e), n = Le(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = rs();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + an(e),
    y: l
  };
}
function vc(e) {
  var t, r = Le(e), n = sn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ne(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ne(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + an(e), l = -n.scrollTop;
  return ae(i || r).direction === "rtl" && (o += Ne(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function gc(e, t) {
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
function Tr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yc(e, t) {
  var r = it(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Bn(e, t, r) {
  return t === ss ? Tr(mc(e, r)) : Ue(t) ? yc(t, r) : Tr(vc(Le(e)));
}
function bc(e) {
  var t = gt(Jt(e)), r = ["absolute", "fixed"].indexOf(ae(e).position) >= 0, n = r && Y(e) ? Zt(e) : e;
  return Ue(n) ? t.filter(function(i) {
    return Ue(i) && gc(i, n) && de(i) !== "body";
  }) : [];
}
function wc(e, t, r, n) {
  var i = t === "clippingParents" ? bc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Bn(e, u, n);
    return l.top = Ne(c.top, l.top), l.right = Mt(c.right, l.right), l.bottom = Mt(c.bottom, l.bottom), l.left = Ne(c.left, l.left), l;
  }, Bn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function at(e) {
  return e.split("-")[1];
}
function as(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function os(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ve(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ie:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case fe:
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
    case me:
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
  var u = i ? as(i) : null;
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
function ls() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sc(e) {
  return Object.assign({}, ls(), e);
}
function Oc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function ln(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? Yu : o, u = r.rootBoundary, c = u === void 0 ? ss : u, p = r.elementContext, f = p === void 0 ? ht : p, d = r.altBoundary, h = d === void 0 ? !1 : d, m = r.padding, g = m === void 0 ? 0 : m, x = Sc(typeof g != "number" ? g : Oc(g, tr)), A = f === ht ? Qu : ht, I = e.rects.popper, E = e.elements[h ? A : f], S = wc(Ue(E) ? E : E.contextElement || Le(e.elements.popper), l, c, a), b = it(e.elements.reference), w = os({
    reference: b,
    element: I,
    strategy: "absolute",
    placement: i
  }), O = Tr(Object.assign({}, I, w)), $ = f === ht ? O : b, T = {
    top: S.top - $.top + x.top,
    bottom: $.bottom - S.bottom + x.bottom,
    left: S.left - $.left + x.left,
    right: $.right - S.right + x.right
  }, _ = e.modifiersData.offset;
  if (f === ht && _) {
    var L = _[i];
    Object.keys(T).forEach(function(k) {
      var Z = [qe, fe].indexOf(k) >= 0 ? 1 : -1, R = [ie, fe].indexOf(k) >= 0 ? "y" : "x";
      T[k] += L[R] * Z;
    });
  }
  return T;
}
var Mn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", $c = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Nn = {
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
function Ec(e) {
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
    }, p = [], f = !1, d = {
      state: c,
      setOptions: function(x) {
        var A = typeof x == "function" ? x(c.options) : x;
        m(), c.options = Object.assign({}, s, c.options, A), c.scrollParents = {
          reference: Ue(o) ? gt(o) : o.contextElement ? gt(o.contextElement) : [],
          popper: gt(l)
        };
        var I = uc(hc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = pc([].concat(I, c.options.modifiers), function(_) {
            var L = _.name;
            return L;
          });
          if (fc(E), ve(c.options.placement) === er) {
            var S = c.orderedModifiers.find(function(_) {
              var L = _.name;
              return L === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ae(l), w = b.marginTop, O = b.marginRight, $ = b.marginBottom, T = b.marginLeft;
          [w, O, $, T].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var x = c.elements, A = x.reference, I = x.popper;
          if (!Vn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(Mn);
            return;
          }
          c.rects = {
            reference: Gu(A, Zt(I), c.options.strategy === "fixed"),
            popper: ns(I)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var E = 0, S = 0; S < c.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error($c);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, S = -1;
              continue;
            }
            var b = c.orderedModifiers[S], w = b.fn, O = b.options, $ = O === void 0 ? {} : O, T = b.name;
            typeof w == "function" && (c = w({
              state: c,
              options: $,
              name: T,
              instance: d
            }) || c);
          }
        }
      },
      update: cc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Vn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Mn), d;
    d.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var x = g.name, A = g.options, I = A === void 0 ? {} : A, E = g.effect;
        if (typeof E == "function") {
          var S = E({
            state: c,
            name: x,
            instance: d,
            options: I
          }), b = function() {
          };
          p.push(S || b);
        }
      });
    }
    function m() {
      p.forEach(function(g) {
        return g();
      }), p = [];
    }
    return d;
  };
}
var qt = {
  passive: !0
};
function xc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = J(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, qt);
  }), o && l.addEventListener("resize", r.update, qt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, qt);
    }), o && l.removeEventListener("resize", r.update, qt);
  };
}
const Tc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xc,
  data: {}
};
function _c(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = os({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ac = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _c,
  data: {}
};
var Ic = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Pc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: nt(t * i) / i || 0,
    y: nt(r * i) / i || 0
  };
}
function Hn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = a.x, d = f === void 0 ? 0 : f, h = a.y, m = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = g.x, m = g.y;
  var x = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), I = me, E = ie, S = window;
  if (u) {
    var b = Zt(r), w = "clientHeight", O = "clientWidth";
    if (b === J(r) && (b = Le(r), ae(b).position !== "static" && o === "absolute" && (w = "scrollHeight", O = "scrollWidth")), b = b, i === ie || (i === me || i === qe) && s === wt) {
      E = fe;
      var $ = p && b === S && S.visualViewport ? S.visualViewport.height : b[w];
      m -= $ - n.height, m *= l ? 1 : -1;
    }
    if (i === me || (i === ie || i === fe) && s === wt) {
      I = qe;
      var T = p && b === S && S.visualViewport ? S.visualViewport.width : b[O];
      d -= T - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: o
  }, u && Ic), L = c === !0 ? Pc({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  if (d = L.x, m = L.y, l) {
    var k;
    return Object.assign({}, _, (k = {}, k[E] = A ? "0" : "", k[I] = x ? "0" : "", k.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", k));
  }
  return Object.assign({}, _, (t = {}, t[E] = A ? m + "px" : "", t[I] = x ? d + "px" : "", t.transform = "", t));
}
function qc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ae(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ve(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Fc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qc,
  data: {}
};
function Cc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !Y(s) || !de(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Lc(e) {
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
      !Y(i) || !de(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const kc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cc,
  effect: Lc,
  requires: ["computeStyles"]
};
var Dc = [Tc, Ac, Fc, kc], Rc = /* @__PURE__ */ Ec({
  defaultModifiers: Dc
});
function jc(e) {
  return e === "x" ? "y" : "x";
}
function Lt(e, t, r) {
  return Ne(e, Mt(t, r));
}
function Bc(e, t, r) {
  var n = Lt(e, t, r);
  return n > r ? r : n;
}
function Mc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? !0 : f, h = r.tetherOffset, m = h === void 0 ? 0 : h, g = ln(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), x = ve(t.placement), A = at(t.placement), I = !A, E = as(x), S = jc(E), b = t.modifiersData.popperOffsets, w = t.rects.reference, O = t.rects.popper, $ = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var k, Z = E === "y" ? ie : me, R = E === "y" ? fe : qe, P = E === "y" ? "height" : "width", j = b[E], Oe = j + g[Z], ee = j - g[R], Ke = d ? -O[P] / 2 : 0, nr = A === st ? w[P] : O[P], ct = A === st ? -O[P] : -w[P], xt = t.elements.arrow, Ye = d && xt ? ns(xt) : {
        width: 0,
        height: 0
      }, $e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ls(), dt = $e[Z], Tt = $e[R], De = Lt(0, w[P], Ye[P]), ir = I ? w[P] / 2 - Ke - De - dt - T.mainAxis : nr - De - dt - T.mainAxis, ws = I ? -w[P] / 2 + Ke + De + Tt + T.mainAxis : ct + De + Tt + T.mainAxis, sr = t.elements.arrow && Zt(t.elements.arrow), Ss = sr ? E === "y" ? sr.clientTop || 0 : sr.clientLeft || 0 : 0, fn = (k = _ == null ? void 0 : _[E]) != null ? k : 0, Os = j + ir - fn - Ss, $s = j + ws - fn, pn = Lt(d ? Mt(Oe, Os) : Oe, j, d ? Ne(ee, $s) : ee);
      b[E] = pn, L[E] = pn - j;
    }
    if (o) {
      var hn, Es = E === "x" ? ie : me, xs = E === "x" ? fe : qe, Re = b[S], _t = S === "y" ? "height" : "width", mn = Re + g[Es], vn = Re - g[xs], ar = [ie, me].indexOf(x) !== -1, gn = (hn = _ == null ? void 0 : _[S]) != null ? hn : 0, yn = ar ? mn : Re - w[_t] - O[_t] - gn + T.altAxis, bn = ar ? Re + w[_t] + O[_t] - gn - T.altAxis : vn, wn = d && ar ? Bc(yn, Re, bn) : Lt(d ? yn : mn, Re, d ? bn : vn);
      b[S] = wn, L[S] = wn - Re;
    }
    t.modifiersData[n] = L;
  }
}
const Nc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Mc,
  requiresIfExists: ["offset"]
};
var Vc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vc[t];
  });
}
var Hc = {
  start: "end",
  end: "start"
};
function Un(e) {
  return e.replace(/start|end/g, function(t) {
    return Hc[t];
  });
}
function Uc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Ju : l, c = at(n), p = c ? o ? Rn : Rn.filter(function(h) {
    return at(h) === c;
  }) : tr, f = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h, m) {
    return h[m] = ln(e, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[ve(m)], h;
  }, {});
  return Object.keys(d).sort(function(h, m) {
    return d[h] - d[m];
  });
}
function Wc(e) {
  if (ve(e) === er)
    return [];
  var t = kt(e);
  return [Un(e), t, Un(t)];
}
function zc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, m = r.allowedAutoPlacements, g = t.options.placement, x = ve(g), A = x === g, I = l || (A || !h ? [kt(g)] : Wc(g)), E = [g].concat(I).reduce(function(Ye, $e) {
      return Ye.concat(ve($e) === er ? Uc(t, {
        placement: $e,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : $e);
    }, []), S = t.rects.reference, b = t.rects.popper, w = /* @__PURE__ */ new Map(), O = !0, $ = E[0], T = 0; T < E.length; T++) {
      var _ = E[T], L = ve(_), k = at(_) === st, Z = [ie, fe].indexOf(L) >= 0, R = Z ? "width" : "height", P = ln(t, {
        placement: _,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), j = Z ? k ? qe : me : k ? fe : ie;
      S[R] > b[R] && (j = kt(j));
      var Oe = kt(j), ee = [];
      if (s && ee.push(P[L] <= 0), o && ee.push(P[j] <= 0, P[Oe] <= 0), ee.every(function(Ye) {
        return Ye;
      })) {
        $ = _, O = !1;
        break;
      }
      w.set(_, ee);
    }
    if (O)
      for (var Ke = h ? 3 : 1, nr = function($e) {
        var dt = E.find(function(Tt) {
          var De = w.get(Tt);
          if (De)
            return De.slice(0, $e).every(function(ir) {
              return ir;
            });
        });
        if (dt)
          return $ = dt, "break";
      }, ct = Ke; ct > 0; ct--) {
        var xt = nr(ct);
        if (xt === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const Gc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: zc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ke = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Xc = {
  components: {
    OnClickOutside: ts
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
    this.teleport && await Ae();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Rc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Gc, Nc],
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
}, Kc = { ref: "tooltip" };
function Yc(e, t, r, n, i, s) {
  const a = Lr("OnClickOutside");
  return D(), U(a, {
    style: Dt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: li(() => [
      mr("div", {
        ref: "button",
        style: Dt(s.buttonStyle)
      }, [
        Q(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      mr("div", Kc, [
        Q(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Qc = /* @__PURE__ */ ke(Xc, [["render", Yc]]), Jc = {
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
    const t = H("$splade") || {}, r = H("$spladeOptions") || {};
    return (n, i) => V(t).isSsr ? (D(), U(le, {
      key: e.keepAliveKey,
      html: V(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (D(), U(ai, {
      key: 0,
      max: V(r).max_keep_alive
    }, [
      (D(), U(le, {
        key: e.keepAliveKey,
        html: V(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function us(e) {
  return e && e.length ? e[0] : void 0;
}
const Zc = {
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
        return X(e.values, t);
      },
      first(t) {
        return us(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, ed = {
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
        re(r, (u) => {
          !W(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
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
function td() {
  this.__data__ = new we(), this.size = 0;
}
function rd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function nd(e) {
  return this.__data__.get(e);
}
function id(e) {
  return this.__data__.has(e);
}
var sd = 200;
function ad(e, t) {
  var r = this.__data__;
  if (r instanceof we) {
    var n = r.__data__;
    if (!bt || n.length < sd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Se(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ge(e) {
  var t = this.__data__ = new we(e);
  this.size = t.size;
}
ge.prototype.clear = td;
ge.prototype.delete = rd;
ge.prototype.get = nd;
ge.prototype.has = id;
ge.prototype.set = ad;
var od = "__lodash_hash_undefined__";
function ld(e) {
  return this.__data__.set(e, od), this;
}
function ud(e) {
  return this.__data__.has(e);
}
function Nt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Se(); ++t < r; )
    this.add(e[t]);
}
Nt.prototype.add = Nt.prototype.push = ld;
Nt.prototype.has = ud;
function cd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function dd(e, t) {
  return e.has(t);
}
var fd = 1, pd = 2;
function cs(e, t, r, n, i, s) {
  var a = r & fd, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = !0, d = r & pd ? new Nt() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var h = e[p], m = t[p];
    if (n)
      var g = a ? n(m, h, p, t, e, s) : n(h, m, p, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!cd(t, function(x, A) {
        if (!dd(d, A) && (h === x || i(h, x, r, n, s)))
          return d.push(A);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === m || i(h, m, r, n, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var hd = pe.Uint8Array;
const Wn = hd;
function md(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function vd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var gd = 1, yd = 2, bd = "[object Boolean]", wd = "[object Date]", Sd = "[object Error]", Od = "[object Map]", $d = "[object Number]", Ed = "[object RegExp]", xd = "[object Set]", Td = "[object String]", _d = "[object Symbol]", Ad = "[object ArrayBuffer]", Id = "[object DataView]", zn = Ie ? Ie.prototype : void 0, hr = zn ? zn.valueOf : void 0;
function Pd(e, t, r, n, i, s, a) {
  switch (r) {
    case Id:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ad:
      return !(e.byteLength != t.byteLength || !s(new Wn(e), new Wn(t)));
    case bd:
    case wd:
    case $d:
      return zr(+e, +t);
    case Sd:
      return e.name == t.name && e.message == t.message;
    case Ed:
    case Td:
      return e == t + "";
    case Od:
      var o = md;
    case xd:
      var l = n & gd;
      if (o || (o = vd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= yd, a.set(e, t);
      var c = cs(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case _d:
      if (hr)
        return hr.call(e) == hr.call(t);
  }
  return !1;
}
function qd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Fd(e, t, r) {
  var n = t(e);
  return B(e) ? n : qd(n, r(e));
}
function ds(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Cd() {
  return [];
}
var Ld = Object.prototype, kd = Ld.propertyIsEnumerable, Gn = Object.getOwnPropertySymbols, Dd = Gn ? function(e) {
  return e == null ? [] : (e = Object(e), ds(Gn(e), function(t) {
    return kd.call(e, t);
  }));
} : Cd;
const Rd = Dd;
function Xn(e) {
  return Fd(e, Ht, Rd);
}
var jd = 1, Bd = Object.prototype, Md = Bd.hasOwnProperty;
function Nd(e, t, r, n, i, s) {
  var a = r & jd, o = Xn(e), l = o.length, u = Xn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(a ? f in t : Md.call(t, f)))
      return !1;
  }
  var d = s.get(e), h = s.get(t);
  if (d && h)
    return d == t && h == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++p < l; ) {
    f = o[p];
    var x = e[f], A = t[f];
    if (n)
      var I = a ? n(A, x, f, t, e, s) : n(x, A, f, e, t, s);
    if (!(I === void 0 ? x === A || i(x, A, r, n, s) : I)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var E = e.constructor, S = t.constructor;
    E != S && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof S == "function" && S instanceof S) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var Vd = Ge(pe, "DataView");
const _r = Vd;
var Hd = Ge(pe, "Promise");
const Ar = Hd;
var Ud = Ge(pe, "Set");
const Ir = Ud;
var Wd = Ge(pe, "WeakMap");
const Pr = Wd;
var Kn = "[object Map]", zd = "[object Object]", Yn = "[object Promise]", Qn = "[object Set]", Jn = "[object WeakMap]", Zn = "[object DataView]", Gd = ze(_r), Xd = ze(bt), Kd = ze(Ar), Yd = ze(Ir), Qd = ze(Pr), Me = Ce;
(_r && Me(new _r(new ArrayBuffer(1))) != Zn || bt && Me(new bt()) != Kn || Ar && Me(Ar.resolve()) != Yn || Ir && Me(new Ir()) != Qn || Pr && Me(new Pr()) != Jn) && (Me = function(e) {
  var t = Ce(e), r = t == zd ? e.constructor : void 0, n = r ? ze(r) : "";
  if (n)
    switch (n) {
      case Gd:
        return Zn;
      case Xd:
        return Kn;
      case Kd:
        return Yn;
      case Yd:
        return Qn;
      case Qd:
        return Jn;
    }
  return t;
});
const ei = Me;
var Jd = 1, ti = "[object Arguments]", ri = "[object Array]", Ft = "[object Object]", Zd = Object.prototype, ni = Zd.hasOwnProperty;
function ef(e, t, r, n, i, s) {
  var a = B(e), o = B(t), l = a ? ri : ei(e), u = o ? ri : ei(t);
  l = l == ti ? Ft : l, u = u == ti ? Ft : u;
  var c = l == Ft, p = u == Ft, f = l == u;
  if (f && vr(e)) {
    if (!vr(t))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return s || (s = new ge()), a || mi(e) ? cs(e, t, r, n, i, s) : Pd(e, t, l, r, n, i, s);
  if (!(r & Jd)) {
    var d = c && ni.call(e, "__wrapped__"), h = p && ni.call(t, "__wrapped__");
    if (d || h) {
      var m = d ? e.value() : e, g = h ? t.value() : t;
      return s || (s = new ge()), i(m, g, r, n, s);
    }
  }
  return f ? (s || (s = new ge()), Nd(e, t, r, n, i, s)) : !1;
}
function rr(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : ef(e, t, r, n, rr, i);
}
var tf = 1, rf = 2;
function nf(e, t, r, n) {
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
      var p = new ge();
      if (n)
        var f = n(u, c, l, e, t, p);
      if (!(f === void 0 ? rr(c, u, tf | rf, n, p) : f))
        return !1;
    }
  }
  return !0;
}
function fs(e) {
  return e === e && !W(e);
}
function sf(e) {
  for (var t = Ht(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, fs(i)];
  }
  return t;
}
function ps(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function af(e) {
  var t = sf(e);
  return t.length == 1 && t[0][2] ? ps(t[0][0], t[0][1]) : function(r) {
    return r === e || nf(r, e, t);
  };
}
function of(e, t) {
  return e != null && t in Object(e);
}
function lf(e, t) {
  return e != null && ki(e, t, of);
}
var uf = 1, cf = 2;
function df(e, t) {
  return Wr(e) && fs(t) ? ps(Ot(e), t) : function(r) {
    var n = et(r, e);
    return n === void 0 && n === t ? lf(r, e) : rr(t, n, uf | cf);
  };
}
function ff(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function pf(e) {
  return function(t) {
    return Ji(t, e);
  };
}
function hf(e) {
  return Wr(e) ? ff(Ot(e)) : pf(e);
}
function Et(e) {
  return typeof e == "function" ? e : e == null ? gi : typeof e == "object" ? B(e) ? df(e[0], e[1]) : af(e) : hf(e);
}
function mf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Vt(t)) {
      var s = Et(r);
      t = Ht(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function vf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ii = 1 / 0, gf = 17976931348623157e292;
function yf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = $r(e), e === ii || e === -ii) {
    var t = e < 0 ? -1 : 1;
    return t * gf;
  }
  return e === e ? e : 0;
}
function un(e) {
  var t = yf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var bf = Math.max;
function wf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : un(r);
  return i < 0 && (i = bf(n + i, 0)), vf(e, Et(t), i);
}
var Sf = mf(wf);
const cn = Sf, Of = {
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
      return e ? oe(e) ? e : B(e) ? e.map(this.extractMetadataFromExistingFile) : W(e) ? e.options.metadata.metadata : null : null;
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
      return this.preview && (e.push(import("filepond-plugin-image-preview")), e.push(import("filepond-plugin-image-exif-orientation"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status < 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
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
              const f = he.CancelToken.source();
              return he({
                url: a.preview_url,
                method: "GET",
                cancelToken: f.token,
                responseType: "blob"
              }).then((d) => {
                const h = new File([d.data], a.name, { type: a.type });
                o(h);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  f.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, p, f) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const m = he.CancelToken.source();
            he({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: m.token,
              onUploadProgress: (g) => {
                p(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var x;
              axios.isCancel(g) ? f() : c((x = g.response) == null ? void 0 : x.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            he({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), this.loadFilepondPlugins(i).then((a) => {
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
}, $f = { ref: "file" };
function Ef(e, t, r, n, i, s) {
  return D(), ye("div", $f, [
    Q(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const xf = /* @__PURE__ */ ke(Of, [["render", Ef]]), Tf = {
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
        return X(e.values, t);
      },
      ...this.values
    });
  }
};
function dn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ms(t, hs(r, n), e[n]);
  return t;
}
function hs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ms(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ms(e, hs(t, n.toString()), r[n]));
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
var _f = "[object Boolean]";
function vs(e) {
  return e === !0 || e === !1 || Pe(e) && Ce(e) == _f;
}
function gs(e, t) {
  var r = {};
  return t = Et(t), Rr(e, function(n, i, s) {
    Zi(r, i, t(n, i, s));
  }), r;
}
function ys(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Je(e, t, r) {
  return e = Xr(e), r = r == null ? 0 : ys(un(r), 0, e.length), t = Kt(t), e.slice(r, r + t.length) == t;
}
const Af = {
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
    requirePassword: {
      type: [Boolean, String],
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
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: !1,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {}
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
      return gs(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === !0 ? this.$watch("values", () => {
      this.$nextTick(() => this.request());
    }, { deep: !0 }) : B(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.$nextTick(() => this.request());
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
      return es(this.values, e, t);
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
          vs(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton,
          !!this.requirePassword
        ).then((t) => {
          if (!this.requirePassword) {
            this.request();
            return;
          }
          this.method.toUpperCase() !== "GET" && t && this.$put(
            oe(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
            t
          ), this.request();
        }).catch(() => {
        });
      }
    },
    async request() {
      if (this.$uploading)
        return;
      await this.$nextTick(), this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : dn(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (t["X-Splade-Preserve-Scroll"] = !0);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), v.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch(async (n) => {
        if (this.processing = !1, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = cn(Object.keys(this.errors), (s) => this.formElement.querySelector(`[data-validation-key="${s}"]`));
        i && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${i}"]`)
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
              "$processing",
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
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) || Je(r, "__v_") ? e[r] : (!e.isMounted && !X(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), et(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, If = {
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
}, Pf = { ref: "input" };
function qf(e, t, r, n, i, s) {
  return D(), ye("div", Pf, [
    Q(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Ff = /* @__PURE__ */ ke(If, [["render", qf]]), Cf = {
  components: { Render: le },
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
function Lf(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (D(), U(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? Q(e.$slots, "default", { key: 1 }) : Fr("", !0);
}
const kf = /* @__PURE__ */ ke(Cf, [["render", Lf]]), Df = ["href", "onClick"], Rf = {
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
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: !1
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
    const t = e, r = H("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        vs(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword
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
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(oe(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (D(), ye("a", {
      href: e.href,
      onClick: qs(i, ["prevent"])
    }, [
      Q(a.$slots, "default")
    ], 8, Df));
  }
}, jf = {
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
      Dialog: Jr,
      DialogPanel: Zr,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Bf = {
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
}, Mf = {
  components: { Render: le },
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
function Nf(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (D(), U(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : i.loading ? Q(e.$slots, "placeholder", { key: 1 }) : Q(e.$slots, "default", { key: 2 });
}
const Vf = /* @__PURE__ */ ke(Mf, [["render", Nf]]), Hf = {
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
function Uf(e, t) {
  var r = -1, n = Vt(e) ? Array(e.length) : [];
  return jr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function bs(e, t) {
  var r = B(e) ? Li : Uf;
  return r(e, Et(t));
}
const Wf = {
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
      if (!this.choicesInstance && this.multiple && B(e)) {
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
      !this.remoteUrl || (this.loading = !0, he({
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
        if (re(t, (s) => {
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
      const r = B(e);
      if (!r && W(e))
        if (this.optionValue && this.optionLabel) {
          let n = et(e, this.optionValue);
          oe(n) || (n = `${n}`), t.push({
            value: n,
            label: et(e, this.optionLabel)
          });
        } else
          re(e, (n, i) => {
            oe(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = bs(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
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
}, zf = { ref: "select" };
function Gf(e, t, r, n, i, s) {
  return D(), ye("div", zf, [
    Q(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const Xf = /* @__PURE__ */ ke(Wf, [["render", Gf]]), Kf = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = gs(e, (i) => i.join(`
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
        return X(t, i);
      },
      hasShared(i) {
        return X(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function Yf(e, t, r) {
  e = Xr(e), t = Kt(t);
  var n = e.length;
  r = r === void 0 ? n : ys(un(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Qf(e, t) {
  var r = [];
  return jr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function Jf(e, t) {
  var r = B(e) ? ds : Qf;
  return r(e, Et(t));
}
function si(e, t) {
  return rr(e, t);
}
const Zf = {
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
    this.debounceUpdateQuery = rn(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    re(e, (r, n) => {
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
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, re(e, (t, r) => {
        Je(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Jf(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = bs(r, (i) => i.key).sort();
      si(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Ae(() => {
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
        if (!Yf(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], B(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
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
      re(e, (u, c) => {
        if (!B(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((p, f) => {
          n[`${c}[${f}]`] = p;
        });
      });
      let i = "";
      re(n, (u, c) => {
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
        this.isLoading = !1, typeof t < "u" && t && Ae(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i) {
      if (t)
        try {
          await v.confirm(t === !0 ? "" : t, r, n, i);
        } catch {
          return !1;
        }
      this.isLoading = !0, v.request(e, "POST", { ids: this.selectedItems }, {}, !1).then((s) => {
        s.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = B(e) ? e : [];
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
}, ep = {
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
function tp(e, t, r, n, i, s) {
  return Fs((D(), U(Cs(i.isMounted ? i.Teleport : "div"), Ls(ks(e.$attrs)), {
    default: li(() => [
      Q(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ds, i.isMounted]
  ]);
}
const rp = /* @__PURE__ */ ke(ep, [["render", tp]]), np = {
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
        Ae(() => e.default.update(this.element));
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
}, ip = { ref: "textarea" };
function sp(e, t, r, n, i, s) {
  return D(), ye("div", ip, [
    Q(e.$slots, "default")
  ], 512);
}
const ap = /* @__PURE__ */ ke(np, [["render", sp]]), op = {
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
}, lp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], up = {
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
      positions: lp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: le,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, cp = {
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
            if (n.length === 1 && us(n) === "default") {
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
}, dp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, fp = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && Ae(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", rn(i, 100)), i();
  }
}, qr = {
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
    qr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(qr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, gp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = X(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = X(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = X(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = X(t, "link_component") ? t.link_component : "Link", t.progress_bar = X(t, "progress_bar") ? t.progress_bar : !1, t.components = X(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, $u).component(`${r}Data`, Iu).component(`${r}Defer`, Vu).component(`${r}Dialog`, Hu).component(`${r}Dropdown`, Qc).component(`${r}DynamicHtml`, Jc).component(`${r}Errors`, Zc).component(`${r}Event`, ed).component(`${r}File`, xf).component(`${r}Flash`, Tf).component(`${r}Form`, Af).component(`${r}Input`, Ff).component(`${r}Lazy`, kf).component(`${r}Modal`, jf).component(`${r}OnClickOutside`, ts).component(`${r}PreloadedModal`, Bf).component(`${r}Rehydrate`, Vf).component(`${r}Render`, le).component(`${r}Script`, Hf).component(`${r}Select`, Xf).component(`${r}State`, Kf).component(`${r}Table`, Zf).component(`${r}Teleport`, rp).component(`${r}Textarea`, ap).component(`${r}Toast`, op).component(`${r}Toasts`, up).component(`${r}Toggle`, cp).component(`${r}Transition`, dp).component(t.link_component, Rf).directive(`${r}PreserveScroll`, fp), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      W(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        X(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), qr.init(t.progress_bar);
    }
    re(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function yp(e, t, r) {
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
  Mo as SpladeApp,
  gp as SpladePlugin,
  mp as renderSpladeApp,
  yp as startServer
};
