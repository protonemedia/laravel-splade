import se from "axios";
import { ref as y, computed as I, watch as lt, openBlock as j, createBlock as G, unref as U, createCommentVNode as kr, h as N, onMounted as V, createElementBlock as Oe, createElementVNode as yr, provide as fe, inject as H, nextTick as Fe, KeepAlive as ai, normalizeStyle as Rt, createVNode as _s, Fragment as Dr, renderList as Is, cloneVNode as As, watchEffect as pe, defineComponent as Y, onUnmounted as Ee, Teleport as oi, reactive as Ps, shallowRef as qs, normalizeClass as Cs, onBeforeUnmount as Fs, renderSlot as ne, resolveComponent as Br, withCtx as li, withModifiers as Ls, withDirectives as ks, resolveDynamicComponent as Ds, normalizeProps as Bs, guardReactiveProps as js, vShow as Rs } from "vue";
function Ms(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ns(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Vs = Ns();
const Us = Vs;
function Hs(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ws = typeof global == "object" && global && global.Object === Object && global;
const ui = Ws;
var zs = typeof self == "object" && self && self.Object === Object && self, Gs = ui || zs || Function("return this")();
const ge = Gs;
var Xs = ge.Symbol;
const Le = Xs;
var ci = Object.prototype, Ks = ci.hasOwnProperty, Ys = ci.toString, ft = Le ? Le.toStringTag : void 0;
function Js(e) {
  var t = Ks.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ys.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Qs = Object.prototype, Zs = Qs.toString;
function ea(e) {
  return Zs.call(e);
}
var ta = "[object Null]", ra = "[object Undefined]", $n = Le ? Le.toStringTag : void 0;
function Be(e) {
  return e == null ? e === void 0 ? ra : ta : $n && $n in Object(e) ? Js(e) : ea(e);
}
function ke(e) {
  return e != null && typeof e == "object";
}
var na = "[object Arguments]";
function En(e) {
  return ke(e) && Be(e) == na;
}
var di = Object.prototype, ia = di.hasOwnProperty, sa = di.propertyIsEnumerable, aa = En(function() {
  return arguments;
}()) ? En : function(e) {
  return ke(e) && ia.call(e, "callee") && !sa.call(e, "callee");
};
const fi = aa;
var oa = Array.isArray;
const R = oa;
function la() {
  return !1;
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, xn = pi && typeof module == "object" && module && !module.nodeType && module, ua = xn && xn.exports === pi, Tn = ua ? ge.Buffer : void 0, ca = Tn ? Tn.isBuffer : void 0, da = ca || la;
const br = da;
var fa = 9007199254740991, pa = /^(?:0|[1-9]\d*)$/;
function jr(e, t) {
  var r = typeof e;
  return t = t == null ? fa : t, !!t && (r == "number" || r != "symbol" && pa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ha = 9007199254740991;
function Rr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ha;
}
var ma = "[object Arguments]", va = "[object Array]", ga = "[object Boolean]", ya = "[object Date]", ba = "[object Error]", wa = "[object Function]", Sa = "[object Map]", Oa = "[object Number]", $a = "[object Object]", Ea = "[object RegExp]", xa = "[object Set]", Ta = "[object String]", _a = "[object WeakMap]", Ia = "[object ArrayBuffer]", Aa = "[object DataView]", Pa = "[object Float32Array]", qa = "[object Float64Array]", Ca = "[object Int8Array]", Fa = "[object Int16Array]", La = "[object Int32Array]", ka = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", ja = "[object Uint32Array]", k = {};
k[Pa] = k[qa] = k[Ca] = k[Fa] = k[La] = k[ka] = k[Da] = k[Ba] = k[ja] = !0;
k[ma] = k[va] = k[Ia] = k[ga] = k[Aa] = k[ya] = k[ba] = k[wa] = k[Sa] = k[Oa] = k[$a] = k[Ea] = k[xa] = k[Ta] = k[_a] = !1;
function Ra(e) {
  return ke(e) && Rr(e.length) && !!k[Be(e)];
}
function Ma(e) {
  return function(t) {
    return e(t);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, yt = hi && typeof module == "object" && module && !module.nodeType && module, Na = yt && yt.exports === hi, ur = Na && ui.process, Va = function() {
  try {
    var e = yt && yt.require && yt.require("util").types;
    return e || ur && ur.binding && ur.binding("util");
  } catch {
  }
}();
const _n = Va;
var In = _n && _n.isTypedArray, Ua = In ? Ma(In) : Ra;
const mi = Ua;
var Ha = Object.prototype, Wa = Ha.hasOwnProperty;
function za(e, t) {
  var r = R(e), n = !r && fi(e), i = !r && !n && br(e), s = !r && !n && !i && mi(e), a = r || n || i || s, o = a ? Hs(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Wa.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || jr(u, l))) && o.push(u);
  return o;
}
var Ga = Object.prototype;
function Xa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ga;
  return e === r;
}
function Ka(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ya = Ka(Object.keys, Object);
const Ja = Ya;
var Qa = Object.prototype, Za = Qa.hasOwnProperty;
function eo(e) {
  if (!Xa(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    Za.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var to = "[object AsyncFunction]", ro = "[object Function]", no = "[object GeneratorFunction]", io = "[object Proxy]";
function vi(e) {
  if (!K(e))
    return !1;
  var t = Be(e);
  return t == ro || t == no || t == to || t == io;
}
function Wt(e) {
  return e != null && Rr(e.length) && !vi(e);
}
function zt(e) {
  return Wt(e) ? za(e) : eo(e);
}
function Mr(e, t) {
  return e && Us(e, t, zt);
}
function so(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Wt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var ao = so(Mr);
const Nr = ao;
function gi(e) {
  return e;
}
function yi(e) {
  return typeof e == "function" ? e : gi;
}
function oo(e, t) {
  var r = R(e) ? Ms : Nr;
  return r(e, yi(t));
}
function te(e, t) {
  return e && Mr(e, yi(t));
}
var lo = Array.prototype, uo = lo.reverse;
function co(e) {
  return e == null ? e : uo.call(e);
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
const Mt = y(0), ae = y(1), D = y({}), le = y(0), Gt = y({}), rt = {}, $e = typeof window > "u";
function fo(e, t, r) {
  $e || window.addEventListener("popstate", po.bind(this)), Object.keys(t).length > 0 && Mt.value++, rt[ae.value] = new bi(ae.value), Wr(r), Xt(r.head), zr(e);
  const n = $e ? "" : location.href, i = Vr(
    n,
    r.head,
    e,
    t,
    {},
    ae.value,
    Mt.value,
    r.persistentLayout
  );
  wi(i);
}
function po(e) {
  !e.state || (D.value = e.state, le.value = 0, Gt.value = {}, Gr.value = {}, Ur.value = D.value.persistentLayoutKey, Xt(D.value.head), zr(D.value.html, D.value.rememberedState.scrollY));
}
function Vr(e, t, r, n, i, s, a, o) {
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
  return D.value = l, l;
}
function ho(e) {
  $e || window.history.pushState(e, "", e.url);
}
function mo(e) {
  const t = Vr(
    e,
    JSON.parse(JSON.stringify(D.value.head)),
    D.value.html,
    JSON.parse(JSON.stringify(D.value.dynamics)),
    { ...D.value.rememberedState },
    D.value.pageVisitId,
    D.value.dynamicVisitId,
    D.value.persistentLayoutKey
  );
  $e || window.history.replaceState(t, "", t.url);
}
function wi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const cr = y(0), Ur = y(null);
function vo(e, t) {
  var f;
  cr.value++;
  const r = e.request.responseURL;
  if (K((f = e.data) == null ? void 0 : f.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && le.value++;
  const n = Ur.value;
  if (Wr(e.data.splade), Xt(e.data.splade.head), r === D.value.url && (t = !0), e.data.splade.modal)
    return Pi(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  le.value = 0, Gt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(D.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && te(s, (h, d) => {
    s[d] += `<!-- ${cr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${cr.value} -->`)) : (o && Mt.value++, (!o || !a) && (ae.value++, rt[ae.value] = rt[ae.value] || new bi(ae.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !$e && t && e.data.splade.preserveScroll && (u = window.scrollY), zr(
    l ? D.value.html : i,
    u
  );
  const c = Vr(
    r,
    e.data.splade.head,
    l ? D.value.html : i,
    s,
    D.value.rememberedState ? { ...D.value.rememberedState } : {},
    ae.value,
    Mt.value,
    e.data.splade.persistentLayout
  );
  t ? wi(c) : ho(c);
}
function go() {
  le.value--, Xt(bo(le.value));
}
const Si = y({}), Oi = (e) => Si.value[e], yo = (e) => Object.keys(Oi.value[e]).length > 0, $i = y({}), bo = (e) => $i.value[e], Ei = y({}), wo = (e) => Ei.value[e], nt = y([]);
function So(e) {
  nt.value.push(e);
}
const Oo = I(() => co(nt.value));
function $o(e) {
  nt.value[e].dismissed = !0, nt.value[e].html = null;
}
const Hr = y(null);
function Eo(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, f) => {
    o = c, l = f;
  });
  return Hr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function xo() {
  Hr.value = null;
}
const xi = y({});
function Wr(e) {
  Ur.value = e.persistentLayout, xi.value = e.shared ? e.shared : {}, Ei.value[le.value] = e.flash ? e.flash : {}, $i.value[le.value] = e.head ? e.head : {}, oo(e.toasts ? e.toasts : [], (t) => {
    nt.value.push(t);
  }), Si.value[le.value] = e.errors ? e.errors : {};
}
const Ti = y(() => {
}), _i = y(() => {
}), Ii = y(() => {
}), Ai = y(() => {
});
function Xt(e) {
  Ti.value(e);
}
function zr(e, t) {
  _i.value(e, t);
}
function Pi(e, t) {
  Gt.value[le.value] = !0, Ii.value(e, t);
}
function To(e) {
  return Gt.value[e];
}
function qi(e) {
  Ai.value(e);
}
const Ci = y({});
function Fi(e, t, r) {
  Ci.value[e] = t, r && _o(e, t);
}
function _o(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Io(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ci.value[e];
}
function Ke(e, t, r, n, i) {
  if ($e || Fi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  vt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = se({
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
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), vt("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    vo(a, i), vt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (vt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Wr(o), a.response.status != 422 && qi(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function Li(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !0);
}
function Ao(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !1);
}
function Po(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Gr = y({});
function qo(e) {
  const t = Gr.value[e];
  return t ? (le.value++, Pi(t.html, t.type), !0) : !1;
}
function Co(e, t, r) {
  Gr.value[e] = { html: t, type: r };
}
function Fo(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Lo(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function ko(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Do() {
  return Li(D.value.url);
}
function Bo(e, t) {
  rt[ae.value].on(e, t);
}
function jo(e, t) {
  rt[ae.value].off(e, t);
}
function vt(e, t) {
  typeof t > "u" && (t = {}), rt[ae.value].emit(e, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: fo,
  replace: Li,
  visit: Ao,
  modal: Po,
  slideover: Fo,
  refresh: Do,
  request: Ke,
  lazy: Lo,
  rehydrate: ko,
  replaceUrlOfCurrentPage: mo,
  htmlForDynamicComponent(e) {
    return D.value.dynamics[e];
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
  onServerError: qi,
  hasValidationErrors: yo,
  validationErrors: Oi,
  sharedData: xi,
  flashData: wo,
  toasts: nt,
  toastsReversed: Oo,
  confirmModal: Hr,
  confirm: Eo,
  clearConfirmModal: xo,
  pushToast: So,
  dismissToast: $o,
  restore: Io,
  remember: Fi,
  popStack: go,
  currentStack: le,
  stackType: To,
  pageVisitId: I(() => D.value.pageVisitId),
  dynamicVisitId: I(() => D.value.dynamicVisitId),
  isSsr: $e,
  openPreloadedModal: qo,
  registerPreloadedModal: Co,
  on: Bo,
  off: jo,
  emit: vt
};
var Ro = "[object String]";
function oe(e) {
  return typeof e == "string" || !R(e) && ke(e) && Be(e) == Ro;
}
const de = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = e, r = y(null);
    function n() {
      r.value = N({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      });
    }
    return lt(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (j(), G(U(r), { key: 0 })) : kr("", !0);
  }
}, Mo = {
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
    return V(() => i()), (o, l) => (j(), Oe("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      yr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, No = {
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
    fe("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = H("$spladeOptions") || {}, l = I(() => v.currentStack.value < 1 ? [] : {
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
    function f(d) {
      const m = document.createElement("meta");
      te(d, (p, g) => {
        m[g] = p;
      }), document.getElementsByTagName("head")[0].appendChild(m);
    }
    function h(d) {
      var p;
      let m = "meta";
      te(d, (g, w) => {
        m = `${m}[${w}="${g}"]`;
      });
      try {
        (p = document.querySelector(m)) == null || p.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var m;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((p) => {
          h(p);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((p) => {
          f(p);
        }), (m = document.querySelector('link[rel="canonical"]')) == null || m.remove(), d.canonical) {
          const p = document.createElement("link");
          p.rel = "canonical", p.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(p);
        }
      }
    }), v.setOnHtml((d, m) => {
      n.value = [], r.value = d, Fe(() => {
        v.isSsr || window.scrollTo(0, m), o.transform_anchors && [...document.querySelectorAll("a")].forEach((p) => {
          p.href == "" || p.href.charAt(0) == "#" || p.__vnode.dynamicProps === null && (p.hasAttribute("download") || (p.onclick = function(g) {
            g.preventDefault(), v.visit(p.href);
          }));
        });
      });
    }), v.setOnModal(function(d, m) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: d, type: m }, Fe(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), V(() => {
      if (v.isSsr)
        return;
      const d = oe(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((m) => {
        delete d.dataset[m];
      });
    }), (d, m) => (j(), Oe("div", null, [
      U(v).isSsr ? (j(), G(de, {
        key: `visit.${U(v).pageVisitId.value}`,
        style: Rt(U(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), G(ai, {
        key: 0,
        max: U(o).max_keep_alive
      }, [
        (j(), G(de, {
          key: `visit.${U(v).pageVisitId.value}`,
          style: Rt(U(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      _s(de, { html: e.components }, null, 8, ["html"]),
      (j(!0), Oe(Dr, null, Is(U(v).currentStack.value, (p) => (j(), G(de, {
        key: `modal.${p}`,
        type: n.value[p].type,
        html: n.value[p].html,
        stack: p,
        "on-top-of-stack": U(v).currentStack.value === p,
        animate: a.value,
        onClose: (g) => c(p)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (j(), G(Mo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : kr("", !0)
    ]));
  }
};
function xp(e) {
  return () => N(No, e);
}
var Vo = Object.prototype, Uo = Vo.hasOwnProperty;
function Ho(e, t) {
  return e != null && Uo.call(e, t);
}
var Wo = "[object Symbol]";
function Kt(e) {
  return typeof e == "symbol" || ke(e) && Be(e) == Wo;
}
var zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Go = /^\w*$/;
function Xr(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Kt(e) ? !0 : Go.test(e) || !zo.test(e) || t != null && e in Object(t);
}
var Xo = ge["__core-js_shared__"];
const dr = Xo;
var An = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ko(e) {
  return !!An && An in e;
}
var Yo = Function.prototype, Jo = Yo.toString;
function Ye(e) {
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
var Qo = /[\\^$.*+?()[\]{}|]/g, Zo = /^\[object .+?Constructor\]$/, el = Function.prototype, tl = Object.prototype, rl = el.toString, nl = tl.hasOwnProperty, il = RegExp(
  "^" + rl.call(nl).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sl(e) {
  if (!K(e) || Ko(e))
    return !1;
  var t = vi(e) ? il : Zo;
  return t.test(Ye(e));
}
function al(e, t) {
  return e == null ? void 0 : e[t];
}
function Je(e, t) {
  var r = al(e, t);
  return sl(r) ? r : void 0;
}
var ol = Je(Object, "create");
const wt = ol;
function ll() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function ul(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cl = "__lodash_hash_undefined__", dl = Object.prototype, fl = dl.hasOwnProperty;
function pl(e) {
  var t = this.__data__;
  if (wt) {
    var r = t[e];
    return r === cl ? void 0 : r;
  }
  return fl.call(t, e) ? t[e] : void 0;
}
var hl = Object.prototype, ml = hl.hasOwnProperty;
function vl(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : ml.call(t, e);
}
var gl = "__lodash_hash_undefined__";
function yl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wt && t === void 0 ? gl : t, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ge.prototype.clear = ll;
Ge.prototype.delete = ul;
Ge.prototype.get = pl;
Ge.prototype.has = vl;
Ge.prototype.set = yl;
function bl() {
  this.__data__ = [], this.size = 0;
}
function Kr(e, t) {
  return e === t || e !== e && t !== t;
}
function Yt(e, t) {
  for (var r = e.length; r--; )
    if (Kr(e[r][0], t))
      return r;
  return -1;
}
var wl = Array.prototype, Sl = wl.splice;
function Ol(e) {
  var t = this.__data__, r = Yt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Sl.call(t, r, 1), --this.size, !0;
}
function $l(e) {
  var t = this.__data__, r = Yt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function El(e) {
  return Yt(this.__data__, e) > -1;
}
function xl(e, t) {
  var r = this.__data__, n = Yt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = bl;
xe.prototype.delete = Ol;
xe.prototype.get = $l;
xe.prototype.has = El;
xe.prototype.set = xl;
var Tl = Je(ge, "Map");
const St = Tl;
function _l() {
  this.size = 0, this.__data__ = {
    hash: new Ge(),
    map: new (St || xe)(),
    string: new Ge()
  };
}
function Il(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jt(e, t) {
  var r = e.__data__;
  return Il(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Al(e) {
  var t = Jt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pl(e) {
  return Jt(this, e).get(e);
}
function ql(e) {
  return Jt(this, e).has(e);
}
function Cl(e, t) {
  var r = Jt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = _l;
Te.prototype.delete = Al;
Te.prototype.get = Pl;
Te.prototype.has = ql;
Te.prototype.set = Cl;
var Fl = "Expected a function";
function Yr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Yr.Cache || Te)(), r;
}
Yr.Cache = Te;
var Ll = 500;
function kl(e) {
  var t = Yr(e, function(n) {
    return r.size === Ll && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Dl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bl = /\\(\\)?/g, jl = kl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Dl, function(r, n, i, s) {
    t.push(i ? s.replace(Bl, "$1") : n || r);
  }), t;
});
const Rl = jl;
function ki(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ml = 1 / 0, Pn = Le ? Le.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return ki(e, Qt) + "";
  if (Kt(e))
    return qn ? qn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ml ? "-0" : t;
}
function Jr(e) {
  return e == null ? "" : Qt(e);
}
function Qr(e, t) {
  return R(e) ? e : Xr(e, t) ? [e] : Rl(Jr(e));
}
var Nl = 1 / 0;
function Et(e) {
  if (typeof e == "string" || Kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Nl ? "-0" : t;
}
function Di(e, t, r) {
  t = Qr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Et(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rr(i) && jr(a, i) && (R(e) || fi(e)));
}
function ee(e, t) {
  return e != null && Di(e, t, Ho);
}
const Vl = {
  props: {
    spinner: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function he(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, he), n;
}
var Nt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nt || {}), Ce = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ce || {});
function J({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = ji(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return fr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return he(l, { [0]() {
      return null;
    }, [1]() {
      return fr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return fr(o);
}
function fr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Ri(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let f = !1, h = [];
    for (let [d, m] of Object.entries(n))
      typeof m == "boolean" && (f = !0), m === !0 && h.push(d);
    f && (c["data-headlessui-state"] = h.join(" "));
  }
  if (o === "template") {
    if (u = Bi(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h] = u != null ? u : [];
      if (!Ul(f) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, g, w) => w.indexOf(p) === g).sort((p, g) => p.localeCompare(g)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let d = ji((a = f.props) != null ? a : {}, l), m = As(f, d);
      for (let p in d)
        p.startsWith("on") && (m.props || (m.props = {}), m.props[p] = d[p]);
      return m;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return N(o, Object.assign({}, l, c), { default: () => u });
}
function Bi(e) {
  return e.flatMap((t) => t.type === Dr ? Bi(t.children) : [t]);
}
function ji(...e) {
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
function Qe() {
  return Wl();
}
var Mi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Mi || {});
function X(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ni = Symbol("Context");
var z = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(z || {});
function zl() {
  return Zr() !== null;
}
function Zr() {
  return H(Ni, null);
}
function Gl(e) {
  fe(Ni, e);
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
let xt = new Xl();
function Tt(e) {
  if (xt.isServer)
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
let wr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), Vi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vi || {}), Kl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Kl || {});
function Yl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(wr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ui = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ui || {});
function Jl(e, t = 0) {
  var r;
  return e === ((r = Tt(e)) == null ? void 0 : r.body) ? !1 : he(t, { [0]() {
    return e.matches(wr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(wr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function tt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ql = ["textarea", "input"].join(",");
function Zl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ql)) != null ? r : !1;
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
function Dt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? eu(e) : e : Yl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((m) => !i.includes(m))), n = n != null ? n : a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, h = o.length, d;
  do {
    if (f >= h || f + h <= 0)
      return 0;
    let m = u + f;
    if (t & 16)
      m = (m + h) % h;
    else {
      if (m < 0)
        return 3;
      if (m >= h)
        return 1;
    }
    d = o[m], d == null || d.focus(c), f += l;
  } while (d !== a.activeElement);
  return t & 6 && Zl(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function pr(e, t, r) {
  xt.isServer || pe((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function tu(e, t, r = I(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : X(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Jl(o, Ui.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  pr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), pr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, !0), pr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Vt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Vt || {});
let Sr = Y({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return J({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function ru() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function nu(e, t, r) {
  xt.isServer || pe((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var gt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gt || {});
function iu() {
  let e = y(0);
  return nu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Hi(e, t, r, n) {
  xt.isServer || pe((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function su(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Wi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wi || {});
let pt = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = I(() => Tt(i));
  au({ ownerDocument: s }, I(() => Boolean(e.features & 16)));
  let a = ou({ ownerDocument: s, container: i, initialFocus: I(() => e.initialFocus) }, I(() => Boolean(e.features & 2)));
  lu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, I(() => Boolean(e.features & 8)));
  let o = iu();
  function l(h) {
    let d = X(i);
    !d || ((m) => m())(() => {
      he(o.value, { [gt.Forwards]: () => {
        Dt(d, qe.First, { skipElements: [h.relatedTarget] });
      }, [gt.Backwards]: () => {
        Dt(d, qe.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let u = y(!1);
  function c(h) {
    h.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(h) {
    var d;
    let m = new Set((d = e.containers) == null ? void 0 : d.value);
    m.add(i);
    let p = h.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (zi(m, p) || (u.value ? Dt(X(i), he(o.value, { [gt.Forwards]: () => qe.Next, [gt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && tt(h.target)));
  }
  return () => {
    let h = {}, d = { ref: i, onKeydown: c, onFocusout: f }, { features: m, initialFocus: p, containers: g, ...w } = e;
    return N(Dr, [Boolean(m & 4) && N(Sr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Vt.Focusable }), J({ ourProps: d, theirProps: { ...t, ...w }, slot: h, attrs: t, slots: r, name: "FocusTrap" }), Boolean(m & 4) && N(Sr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Vt.Focusable })]);
  };
} }), { features: Wi });
function au({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    r.value && (tt(r.value), r.value = null);
  }
  V(() => {
    lt(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: !0 });
  }), Ee(i);
}
function ou({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return V(() => s.value = !0), Ee(() => s.value = !1), V(() => {
    lt([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = X(t);
      l && su(() => {
        var u, c;
        if (!s.value)
          return;
        let f = X(r), h = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === h) {
            i.value = h;
            return;
          }
        } else if (l.contains(h)) {
          i.value = h;
          return;
        }
        f ? tt(f) : Dt(l, qe.First | qe.NoScroll) === Vi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function lu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Hi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? zi(o, u) ? (n.value = u, tt(u)) : (a.preventDefault(), a.stopPropagation(), tt(l)) : tt(n.value);
  }, !0);
}
function zi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let hr = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function Cn(e, t = y(!0)) {
  pe((r) => {
    var n;
    if (!t.value)
      return;
    let i = X(e);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = ht.get(i)) != null ? a : 1;
      if (o === 1 ? ht.delete(i) : ht.set(i, o - 1), o !== 1)
        return;
      let l = hr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, hr.delete(i));
    });
    let s = (n = ht.get(i)) != null ? n : 0;
    ht.set(i, s + 1), s === 0 && (hr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let Gi = Symbol("ForcePortalRootContext");
function uu() {
  return H(Gi, !1);
}
let Or = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return fe(Gi, e.force), () => {
    let { force: n, ...i } = e;
    return J({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function cu(e) {
  let t = Tt(e);
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
let Xi = Y({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = I(() => Tt(n)), s = uu(), a = H(Ki, null), o = y(s === !0 || a == null ? cu(n.value) : a.resolveTarget());
  return pe(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), Ee(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return N(oi, { to: o.value }, J({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ki = Symbol("PortalGroupContext"), du = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Ps({ resolveTarget() {
    return e.target;
  } });
  return fe(Ki, n), () => {
    let { target: i, ...s } = e;
    return J({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Yi = Symbol("StackContext");
var $r = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))($r || {});
function fu() {
  return H(Yi, () => {
  });
}
function pu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = fu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  V(() => {
    lt(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Ee(() => {
    t.value && s(1, e, r);
  }), fe(Yi, s);
}
let Ji = Symbol("DescriptionContext");
function hu() {
  let e = H(Ji, null);
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
  return fe(Ji, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Tp = Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = hu();
  return V(() => Ee(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [f, h]) => Object.assign(c, { [f]: U(h) }), {}), id: o };
    return J({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function vu(e) {
  let t = qs(e.getSnapshot());
  return Ee(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function en() {
  let e = [], t = { addEventListener(r, n, i, s) {
    return r.addEventListener(n, i, s), t.add(() => r.removeEventListener(n, i, s));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    t.add(() => clearTimeout(n));
  }, add(r) {
    e.push(r);
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function gu(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function yu() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function bu() {
  if (!ru())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: !1 }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function wu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Su(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let We = gu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: en(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Su(r) }, i = [bu(), yu(), wu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
We.subscribe(() => {
  let e = We.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && We.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && We.dispatch("TEARDOWN", r);
  }
});
function Ou(e, t, r) {
  let n = vu(We), i = I(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return lt([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    We.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (We.dispatch("POP", o != null ? o : s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var $u = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($u || {});
let Er = Symbol("DialogContext");
function _t(e) {
  let t = H(Er, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, _t), r;
  }
  return t;
}
let Ct = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", tn = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ct }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Qe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  V(() => {
    a.value = !0;
  });
  let o = y(0), l = Zr(), u = I(() => e.open === Ct && l !== null ? (l.value & z.Open) === z.Open : e.open), c = y(/* @__PURE__ */ new Set()), f = y(null), h = y(null), d = I(() => Tt(f));
  if (i({ el: f, $el: f }), !(e.open !== Ct || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ct ? void 0 : e.open}`);
  let m = I(() => a.value && u.value ? 0 : 1), p = I(() => m.value === 0), g = I(() => o.value > 1), w = H(Er, null) !== null, x = I(() => g.value ? "parent" : "leaf"), _ = I(() => l !== null ? (l.value & z.Closing) === z.Closing : !1), S = I(() => w || _.value ? !1 : p.value), O = I(() => {
    var $, E, F;
    return (F = Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("body > *")) != null ? E : []).find((B) => B.id === "headlessui-portal-root" ? !1 : B.contains(X(h)) && B instanceof HTMLElement)) != null ? F : null;
  });
  Cn(O, S);
  let b = I(() => g.value ? !0 : p.value), T = I(() => {
    var $, E, F;
    return (F = Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("[data-headlessui-portal]")) != null ? E : []).find((B) => B.contains(X(h)) && B instanceof HTMLElement)) != null ? F : null;
  });
  Cn(T, b), pu({ type: "Dialog", enabled: I(() => m.value === 0), element: f, onUpdate: ($, E, F) => {
    if (E === "Dialog")
      return he($, { [$r.Add]() {
        c.value.add(F), o.value += 1;
      }, [$r.Remove]() {
        c.value.delete(F), o.value -= 1;
      } });
  } });
  let C = mu({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), P = y(null), q = { titleId: P, panelRef: y(null), dialogState: m, setTitleId($) {
    P.value !== $ && (P.value = $);
  }, close() {
    t("close", !1);
  } };
  fe(Er, q);
  function A() {
    var $, E, F;
    return [...Array.from((E = ($ = d.value) == null ? void 0 : $.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? E : []).filter((B) => !(B === document.body || B === document.head || !(B instanceof HTMLElement) || B.contains(X(h)) || q.panelRef.value && B.contains(q.panelRef.value))), (F = q.panelRef.value) != null ? F : f.value];
  }
  let M = I(() => !(!p.value || g.value));
  tu(() => A(), ($, E) => {
    q.close(), Fe(() => E == null ? void 0 : E.focus());
  }, M);
  let L = I(() => !(g.value || m.value !== 0));
  Hi((s = d.value) == null ? void 0 : s.defaultView, "keydown", ($) => {
    L.value && ($.defaultPrevented || $.key === Mi.Escape && ($.preventDefault(), $.stopPropagation(), q.close()));
  });
  let W = I(() => !(_.value || m.value !== 0 || w));
  return Ou(d, W, ($) => {
    var E;
    return { containers: [...(E = $.containers) != null ? E : [], A] };
  }), pe(($) => {
    if (m.value !== 0)
      return;
    let E = X(f);
    if (!E)
      return;
    let F = new ResizeObserver((B) => {
      for (let Q of B) {
        let Z = Q.target.getBoundingClientRect();
        Z.x === 0 && Z.y === 0 && Z.width === 0 && Z.height === 0 && q.close();
      }
    });
    F.observe(E), $(() => F.disconnect());
  }), () => {
    let { id: $, open: E, initialFocus: F, ...B } = e, Q = { ...r, ref: f, id: $, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": P.value, "aria-describedby": C.value }, Z = { open: m.value === 0 };
    return N(Or, { force: !0 }, () => [N(Xi, () => N(du, { target: f.value }, () => N(Or, { force: !1 }, () => N(pt, { initialFocus: F, containers: c, features: p.value ? he(x.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => J({ ourProps: Q, theirProps: B, slot: Z, attrs: r, slots: n, visible: m.value === 0, features: Nt.RenderStrategy | Nt.Static, name: "Dialog" }))))), N(Sr, { features: Vt.Hidden, ref: h })]);
  };
} });
Y({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return J({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
Y({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Qe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), V(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return N(Or, { force: !0 }, () => N(Xi, () => J({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let rn = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Qe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return J({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
Y({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogTitle");
  return V(() => {
    n.setTitleId(e.id), Ee(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return J({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Eu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function mr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ft(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var xr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(xr || {});
function xu(e, t) {
  let r = en();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Fn(e, t, r, n, i, s) {
  let a = en(), o = s !== void 0 ? Eu(s) : () => {
  };
  return Ft(e, ...i), mr(e, ...t, ...r), a.nextFrame(() => {
    Ft(e, ...r), mr(e, ...n), a.add(xu(e, (l) => (Ft(e, ...n, ...t), mr(e, ...i), o(l))));
  }), a.add(() => Ft(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ve(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let nn = Symbol("TransitionContext");
var Tu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Tu || {});
function _u() {
  return H(nn, null) !== null;
}
function Iu() {
  let e = H(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Au() {
  let e = H(sn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let sn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Qi(e) {
  let t = y([]), r = y(!1);
  V(() => r.value = !0), Ee(() => r.value = !1);
  function n(s, a = Ce.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (he(a, { [Ce.Unmount]() {
      t.value.splice(o, 1);
    }, [Ce.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Zt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, Ce.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Zi = Nt.RenderStrategy, ut = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = y(0);
  function a() {
    s.value |= z.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~z.Opening, t("afterEnter");
  }
  function l() {
    s.value |= z.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~z.Closing, t("afterLeave");
  }
  if (!_u() && zl())
    return () => N(ct, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), f = y("visible"), h = I(() => e.unmount ? Ce.Unmount : Ce.Hidden);
  i({ el: c, $el: c });
  let { show: d, appear: m } = Iu(), { register: p, unregister: g } = Au(), w = { value: !0 }, x = Qe(), _ = { value: !1 }, S = Qi(() => {
    !_.value && f.value !== "hidden" && (f.value = "hidden", g(x), u());
  });
  V(() => {
    let L = p(x);
    Ee(L);
  }), pe(() => {
    if (h.value === Ce.Hidden && x) {
      if (d && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      he(f.value, { hidden: () => g(x), visible: () => p(x) });
    }
  });
  let O = Ve(e.enter), b = Ve(e.enterFrom), T = Ve(e.enterTo), C = Ve(e.entered), P = Ve(e.leave), q = Ve(e.leaveFrom), A = Ve(e.leaveTo);
  V(() => {
    pe(() => {
      if (f.value === "visible") {
        let L = X(c);
        if (L instanceof Comment && L.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function M(L) {
    let W = w.value && !m.value, $ = X(c);
    !$ || !($ instanceof HTMLElement) || W || (_.value = !0, d.value && a(), d.value || l(), L(d.value ? Fn($, O, b, T, C, (E) => {
      _.value = !1, E === xr.Finished && o();
    }) : Fn($, P, q, A, C, (E) => {
      _.value = !1, E === xr.Finished && (Zt(S) || (f.value = "hidden", g(x), u()));
    })));
  }
  return V(() => {
    lt([d], (L, W, $) => {
      M($), w.value = !1;
    }, { immediate: !0 });
  }), fe(sn, S), Gl(I(() => he(f.value, { visible: z.Open, hidden: z.Closed }) | s.value)), () => {
    let { appear: L, show: W, enter: $, enterFrom: E, enterTo: F, entered: B, leave: Q, leaveFrom: Z, leaveTo: At, ..._e } = e, Ze = { ref: c }, Ie = { ..._e, ...m && d && xt.isServer ? { class: Cs([_e.class, ...O, ...b]) } : {} };
    return J({ theirProps: Ie, ourProps: Ze, slot: {}, slots: n, attrs: r, features: Zi, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), Pu = ut, ct = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Zr(), s = I(() => e.show === null && i !== null ? (i.value & z.Open) === z.Open : e.show);
  pe(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = Qi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: I(() => e.appear || !l.value) };
  return V(() => {
    pe(() => {
      l.value = !1, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), fe(sn, o), fe(nn, u), () => {
    let c = Ri(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return J({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [N(Pu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Zi, visible: a.value === "visible", name: "Transition" });
  };
} });
const qu = {
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
    },
    confirmDanger: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmDanger ? v.confirmModal.value.confirmDanger : !1;
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
      this.passwordError = "", se.post(this.confirmPasswordRoute, { password: e }, { headers: {
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
          if ((await se.get(this.confirmedPasswordStatusRoute)).status === 200) {
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
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: tn,
      DialogPanel: rn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
};
function es(e, t) {
  t = Qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Et(t[r++])];
  return r && r == n ? e : void 0;
}
function ye(e, t, r) {
  var n = e == null ? void 0 : es(e, t);
  return n === void 0 ? r : n;
}
var Cu = function() {
  try {
    var e = Je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ln = Cu;
function ts(e, t, r) {
  t == "__proto__" && Ln ? Ln(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Fu = Object.prototype, Lu = Fu.hasOwnProperty;
function ku(e, t, r) {
  var n = e[t];
  (!(Lu.call(e, t) && Kr(n, r)) || r === void 0 && !(t in e)) && ts(e, t, r);
}
function Du(e, t, r, n) {
  if (!K(e))
    return e;
  t = Qr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Et(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = K(c) ? c : jr(t[i + 1]) ? [] : {});
    }
    ku(o, l, u), o = o[l];
  }
  return e;
}
function Ot(e, t, r) {
  return e == null ? e : Du(e, t, r);
}
const Bu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    remember: {
      type: [Boolean, String],
      default: !1,
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
      values: Object.assign({}, { ...this.default })
    };
  },
  beforeMount() {
    if (this.remember) {
      let e = v.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && v.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return ye(e.values, r);
        },
        set(t, r, n) {
          Ot(e.values, r, n);
        }
      })
    ) : null;
  }
}, ju = {
  props: {
    parsed: {
      type: Object,
      required: !0
    },
    raw: {
      type: Object,
      required: !0
    },
    remember: {
      type: Array,
      required: !0
    },
    localStorage: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      stores: Object.assign({}, { ...this.parsed, ...this.raw })
    };
  },
  beforeMount() {
    this.remember.forEach((e) => {
      let t = v.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      v.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
    });
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.stores, {
        ownKeys() {
          return Object.keys(e.stores);
        },
        get(t, r) {
          return ye(e.stores, r);
        },
        set(t, r, n) {
          Ot(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Ru = function() {
  return ge.Date.now();
};
const vr = Ru;
var Mu = /\s/;
function Nu(e) {
  for (var t = e.length; t-- && Mu.test(e.charAt(t)); )
    ;
  return t;
}
var Vu = /^\s+/;
function Uu(e) {
  return e && e.slice(0, Nu(e) + 1).replace(Vu, "");
}
var kn = 0 / 0, Hu = /^[-+]0x[0-9a-f]+$/i, Wu = /^0b[01]+$/i, zu = /^0o[0-7]+$/i, Gu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Kt(e))
    return kn;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Uu(e);
  var r = Wu.test(e);
  return r || zu.test(e) ? Gu(e.slice(2), r ? 2 : 8) : Hu.test(e) ? kn : +e;
}
var Xu = "Expected a function", Ku = Math.max, Yu = Math.min;
function er(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Xu);
  t = Tr(t) || 0, K(r) && (c = !!r.leading, f = "maxWait" in r, s = f ? Ku(Tr(r.maxWait) || 0, t) : s, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var T = n, C = i;
    return n = i = void 0, u = b, a = e.apply(C, T), a;
  }
  function m(b) {
    return u = b, o = setTimeout(w, t), c ? d(b) : a;
  }
  function p(b) {
    var T = b - l, C = b - u, P = t - T;
    return f ? Yu(P, s - C) : P;
  }
  function g(b) {
    var T = b - l, C = b - u;
    return l === void 0 || T >= t || T < 0 || f && C >= s;
  }
  function w() {
    var b = vr();
    if (g(b))
      return x(b);
    o = setTimeout(w, p(b));
  }
  function x(b) {
    return o = void 0, h && n ? d(b) : (n = i = void 0, a);
  }
  function _() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : x(vr());
  }
  function O() {
    var b = vr(), T = g(b);
    if (n = arguments, i = this, l = b, T) {
      if (o === void 0)
        return m(l);
      if (f)
        return clearTimeout(o), o = setTimeout(w, t), d(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), a;
  }
  return O.cancel = _, O.flush = S, O;
}
const Ju = {
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
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
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
    this.debounceFunction = er(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = !0;
      const e = {};
      this.acceptHeader && (e.Accept = this.acceptHeader);
      const t = {
        url: this.url,
        method: this.method,
        headers: { ...e, ...this.headers }
      };
      Object.keys(this.request).length > 0 && (t.data = this.request), se(t).then((r) => {
        this.response = r.data, this.processing = !1, this.$emit("success", r.data);
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
}, Qu = {
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
      Dialog: tn,
      DialogPanel: rn,
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
    return V(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Fs(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (j(), Oe("div", {
      ref_key: "root",
      ref: n
    }, [
      ne(s.$slots, "default")
    ], 512));
  }
};
function ie(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xe(e) {
  var t = ie(e).Element;
  return e instanceof t || e instanceof Element;
}
function re(e) {
  var t = ie(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function an(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ie(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ze = Math.max, Ut = Math.min, it = Math.round;
function _r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(_r());
}
function st(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && re(e) && (i = e.offsetWidth > 0 && it(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && it(n.height) / e.offsetHeight || 1);
  var a = Xe(e) ? ie(e) : window, o = a.visualViewport, l = !ns() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, f = n.width / i, h = n.height / s;
  return {
    width: f,
    height: h,
    top: c,
    right: u + f,
    bottom: c + h,
    left: u,
    x: u,
    y: c
  };
}
function on(e) {
  var t = ie(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Zu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ec(e) {
  return e === ie(e) || !re(e) ? on(e) : Zu(e);
}
function me(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function je(e) {
  return ((Xe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ln(e) {
  return st(je(e)).left + on(e).scrollLeft;
}
function ce(e) {
  return ie(e).getComputedStyle(e);
}
function un(e) {
  var t = ce(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function tc(e) {
  var t = e.getBoundingClientRect(), r = it(t.width) / e.offsetWidth || 1, n = it(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function rc(e, t, r) {
  r === void 0 && (r = !1);
  var n = re(t), i = re(t) && tc(t), s = je(t), a = st(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((me(t) !== "body" || un(s)) && (o = ec(t)), re(t) ? (l = st(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ln(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function is(e) {
  var t = st(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function tr(e) {
  return me(e) === "html" ? e : e.assignedSlot || e.parentNode || (an(e) ? e.host : null) || je(e);
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(me(e)) >= 0 ? e.ownerDocument.body : re(e) && un(e) ? e : ss(tr(e));
}
function bt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ie(n), a = i ? [s].concat(s.visualViewport || [], un(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(bt(tr(a)));
}
function nc(e) {
  return ["table", "td", "th"].indexOf(me(e)) >= 0;
}
function Dn(e) {
  return !re(e) || ce(e).position === "fixed" ? null : e.offsetParent;
}
function ic(e) {
  var t = /firefox/i.test(_r()), r = /Trident/i.test(_r());
  if (r && re(e)) {
    var n = ce(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (an(i) && (i = i.host); re(i) && ["html", "body"].indexOf(me(i)) < 0; ) {
    var s = ce(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = ie(e), r = Dn(e); r && nc(r) && ce(r).position === "static"; )
    r = Dn(r);
  return r && (me(r) === "html" || me(r) === "body" && ce(r).position === "static") ? t : r || ic(e) || t;
}
var ue = "top", ve = "bottom", De = "right", be = "left", nr = "auto", ir = [ue, ve, De, be], at = "start", $t = "end", sc = "clippingParents", as = "viewport", mt = "popper", ac = "reference", Bn = /* @__PURE__ */ ir.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + $t]);
}, []), oc = /* @__PURE__ */ [].concat(ir, [nr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + $t]);
}, []), lc = "beforeRead", uc = "read", cc = "afterRead", dc = "beforeMain", fc = "main", pc = "afterMain", hc = "beforeWrite", mc = "write", vc = "afterWrite", Ir = [lc, uc, cc, dc, fc, pc, hc, mc, vc];
function gc(e) {
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
function yc(e) {
  var t = gc(e);
  return Ir.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function bc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Pe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Ue = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', wc = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', jn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Sc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), jn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Pe(Ue, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Pe(Ue, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Ir.indexOf(t.phase) < 0 && console.error(Pe(Ue, t.name, '"phase"', "either " + Ir.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Pe(Ue, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Pe(Ue, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Pe(Ue, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Pe(Ue, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
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
        }) == null && console.error(Pe(wc, String(t.name), n, n));
      });
    });
  });
}
function Oc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function we(e) {
  return e.split("-")[0];
}
function $c(e) {
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
function Ec(e, t) {
  var r = ie(e), n = je(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ns();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + ln(e),
    y: l
  };
}
function xc(e) {
  var t, r = je(e), n = on(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = ze(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ze(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + ln(e), l = -n.scrollTop;
  return ce(i || r).direction === "rtl" && (o += ze(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Tc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && an(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ar(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _c(e, t) {
  var r = st(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Rn(e, t, r) {
  return t === as ? Ar(Ec(e, r)) : Xe(t) ? _c(t, r) : Ar(xc(je(e)));
}
function Ic(e) {
  var t = bt(tr(e)), r = ["absolute", "fixed"].indexOf(ce(e).position) >= 0, n = r && re(e) ? rr(e) : e;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Tc(i, n) && me(i) !== "body";
  }) : [];
}
function Ac(e, t, r, n) {
  var i = t === "clippingParents" ? Ic(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Rn(e, u, n);
    return l.top = ze(c.top, l.top), l.right = Ut(c.right, l.right), l.bottom = Ut(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, Rn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function ot(e) {
  return e.split("-")[1];
}
function os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ls(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? we(n) : null, s = n ? ot(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ue:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ve:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case De:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case be:
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
      case at:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case $t:
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
function Pc(e) {
  return Object.assign({}, us(), e);
}
function qc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function cn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? sc : o, u = r.rootBoundary, c = u === void 0 ? as : u, f = r.elementContext, h = f === void 0 ? mt : f, d = r.altBoundary, m = d === void 0 ? !1 : d, p = r.padding, g = p === void 0 ? 0 : p, w = Pc(typeof g != "number" ? g : qc(g, ir)), x = h === mt ? ac : mt, _ = e.rects.popper, S = e.elements[m ? x : h], O = Ac(Xe(S) ? S : S.contextElement || je(e.elements.popper), l, c, a), b = st(e.elements.reference), T = ls({
    reference: b,
    element: _,
    strategy: "absolute",
    placement: i
  }), C = Ar(Object.assign({}, _, T)), P = h === mt ? C : b, q = {
    top: O.top - P.top + w.top,
    bottom: P.bottom - O.bottom + w.bottom,
    left: O.left - P.left + w.left,
    right: P.right - O.right + w.right
  }, A = e.modifiersData.offset;
  if (h === mt && A) {
    var M = A[i];
    Object.keys(q).forEach(function(L) {
      var W = [De, ve].indexOf(L) >= 0 ? 1 : -1, $ = [ue, ve].indexOf(L) >= 0 ? "y" : "x";
      q[L] += M[$] * W;
    });
  }
  return q;
}
var Mn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Nn = {
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
function Fc(e) {
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
    }, f = [], h = !1, d = {
      state: c,
      setOptions: function(w) {
        var x = typeof w == "function" ? w(c.options) : w;
        p(), c.options = Object.assign({}, s, c.options, x), c.scrollParents = {
          reference: Xe(o) ? bt(o) : o.contextElement ? bt(o.contextElement) : [],
          popper: bt(l)
        };
        var _ = yc($c([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = _.filter(function(A) {
          return A.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Oc([].concat(_, c.options.modifiers), function(A) {
            var M = A.name;
            return M;
          });
          if (Sc(S), we(c.options.placement) === nr) {
            var O = c.orderedModifiers.find(function(A) {
              var M = A.name;
              return M === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ce(l), T = b.marginTop, C = b.marginRight, P = b.marginBottom, q = b.marginLeft;
          [T, C, P, q].some(function(A) {
            return parseFloat(A);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return m(), d.update();
      },
      forceUpdate: function() {
        if (!h) {
          var w = c.elements, x = w.reference, _ = w.popper;
          if (!Vn(x, _)) {
            process.env.NODE_ENV !== "production" && console.error(Mn);
            return;
          }
          c.rects = {
            reference: rc(x, rr(_), c.options.strategy === "fixed"),
            popper: is(_)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
            return c.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var S = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Cc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var b = c.orderedModifiers[O], T = b.fn, C = b.options, P = C === void 0 ? {} : C, q = b.name;
            typeof T == "function" && (c = T({
              state: c,
              options: P,
              name: q,
              instance: d
            }) || c);
          }
        }
      },
      update: bc(function() {
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
    function m() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, x = g.options, _ = x === void 0 ? {} : x, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: c,
            name: w,
            instance: d,
            options: _
          }), b = function() {
          };
          f.push(O || b);
        }
      });
    }
    function p() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return d;
  };
}
var Lt = {
  passive: !0
};
function Lc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = ie(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Lt);
  }), o && l.addEventListener("resize", r.update, Lt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Lt);
    }), o && l.removeEventListener("resize", r.update, Lt);
  };
}
const kc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Lc,
  data: {}
};
function Dc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Bc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dc,
  data: {}
};
var jc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: it(t * i) / i || 0,
    y: it(r * i) / i || 0
  };
}
function Un(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, h = a.x, d = h === void 0 ? 0 : h, m = a.y, p = m === void 0 ? 0 : m, g = typeof c == "function" ? c({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  d = g.x, p = g.y;
  var w = a.hasOwnProperty("x"), x = a.hasOwnProperty("y"), _ = be, S = ue, O = window;
  if (u) {
    var b = rr(r), T = "clientHeight", C = "clientWidth";
    if (b === ie(r) && (b = je(r), ce(b).position !== "static" && o === "absolute" && (T = "scrollHeight", C = "scrollWidth")), b = b, i === ue || (i === be || i === De) && s === $t) {
      S = ve;
      var P = f && b === O && O.visualViewport ? O.visualViewport.height : b[T];
      p -= P - n.height, p *= l ? 1 : -1;
    }
    if (i === be || (i === ue || i === ve) && s === $t) {
      _ = De;
      var q = f && b === O && O.visualViewport ? O.visualViewport.width : b[C];
      d -= q - n.width, d *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: o
  }, u && jc), M = c === !0 ? Rc({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  if (d = M.x, p = M.y, l) {
    var L;
    return Object.assign({}, A, (L = {}, L[S] = x ? "0" : "", L[_] = w ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", L));
  }
  return Object.assign({}, A, (t = {}, t[S] = x ? p + "px" : "", t[_] = w ? d + "px" : "", t.transform = "", t));
}
function Mc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ce(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: we(t.placement),
    variation: ot(t.placement),
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
const Nc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mc,
  data: {}
};
function Vc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !me(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Uc(e) {
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
      !re(i) || !me(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Hc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vc,
  effect: Uc,
  requires: ["computeStyles"]
};
var Wc = [kc, Bc, Nc, Hc], zc = /* @__PURE__ */ Fc({
  defaultModifiers: Wc
});
function Gc(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e, t, r) {
  return ze(e, Ut(t, r));
}
function Xc(e, t, r) {
  var n = Bt(e, t, r);
  return n > r ? r : n;
}
function Kc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, h = r.tether, d = h === void 0 ? !0 : h, m = r.tetherOffset, p = m === void 0 ? 0 : m, g = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), w = we(t.placement), x = ot(t.placement), _ = !x, S = os(w), O = Gc(S), b = t.modifiersData.popperOffsets, T = t.rects.reference, C = t.rects.popper, P = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, q = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (s) {
      var L, W = S === "y" ? ue : be, $ = S === "y" ? ve : De, E = S === "y" ? "height" : "width", F = b[S], B = F + g[W], Q = F - g[$], Z = d ? -C[E] / 2 : 0, At = x === at ? T[E] : C[E], _e = x === at ? -C[E] : -T[E], Ze = t.elements.arrow, Ie = d && Ze ? is(Ze) : {
        width: 0,
        height: 0
      }, Ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : us(), dt = Ae[W], Pt = Ae[$], Me = Bt(0, T[E], Ie[E]), ar = _ ? T[E] / 2 - Z - Me - dt - q.mainAxis : At - Me - dt - q.mainAxis, Ss = _ ? -T[E] / 2 + Z + Me + Pt + q.mainAxis : _e + Me + Pt + q.mainAxis, or = t.elements.arrow && rr(t.elements.arrow), Os = or ? S === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, hn = (L = A == null ? void 0 : A[S]) != null ? L : 0, $s = F + ar - hn - Os, Es = F + Ss - hn, mn = Bt(d ? Ut(B, $s) : B, F, d ? ze(Q, Es) : Q);
      b[S] = mn, M[S] = mn - F;
    }
    if (o) {
      var vn, xs = S === "x" ? ue : be, Ts = S === "x" ? ve : De, Ne = b[O], qt = O === "y" ? "height" : "width", gn = Ne + g[xs], yn = Ne - g[Ts], lr = [ue, be].indexOf(w) !== -1, bn = (vn = A == null ? void 0 : A[O]) != null ? vn : 0, wn = lr ? gn : Ne - T[qt] - C[qt] - bn + q.altAxis, Sn = lr ? Ne + T[qt] + C[qt] - bn - q.altAxis : yn, On = d && lr ? Xc(wn, Ne, Sn) : Bt(d ? wn : gn, Ne, d ? Sn : yn);
      b[O] = On, M[O] = On - Ne;
    }
    t.modifiersData[n] = M;
  }
}
const Yc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kc,
  requiresIfExists: ["offset"]
};
var Jc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jc[t];
  });
}
var Qc = {
  start: "end",
  end: "start"
};
function Hn(e) {
  return e.replace(/start|end/g, function(t) {
    return Qc[t];
  });
}
function Zc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? oc : l, c = ot(n), f = c ? o ? Bn : Bn.filter(function(m) {
    return ot(m) === c;
  }) : ir, h = f.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  h.length === 0 && (h = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = h.reduce(function(m, p) {
    return m[p] = cn(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[we(p)], m;
  }, {});
  return Object.keys(d).sort(function(m, p) {
    return d[m] - d[p];
  });
}
function ed(e) {
  if (we(e) === nr)
    return [];
  var t = jt(e);
  return [Hn(e), t, Hn(t)];
}
function td(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, h = r.altBoundary, d = r.flipVariations, m = d === void 0 ? !0 : d, p = r.allowedAutoPlacements, g = t.options.placement, w = we(g), x = w === g, _ = l || (x || !m ? [jt(g)] : ed(g)), S = [g].concat(_).reduce(function(Ie, Ae) {
      return Ie.concat(we(Ae) === nr ? Zc(t, {
        placement: Ae,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: m,
        allowedAutoPlacements: p
      }) : Ae);
    }, []), O = t.rects.reference, b = t.rects.popper, T = /* @__PURE__ */ new Map(), C = !0, P = S[0], q = 0; q < S.length; q++) {
      var A = S[q], M = we(A), L = ot(A) === at, W = [ue, ve].indexOf(M) >= 0, $ = W ? "width" : "height", E = cn(t, {
        placement: A,
        boundary: c,
        rootBoundary: f,
        altBoundary: h,
        padding: u
      }), F = W ? L ? De : be : L ? ve : ue;
      O[$] > b[$] && (F = jt(F));
      var B = jt(F), Q = [];
      if (s && Q.push(E[M] <= 0), o && Q.push(E[F] <= 0, E[B] <= 0), Q.every(function(Ie) {
        return Ie;
      })) {
        P = A, C = !1;
        break;
      }
      T.set(A, Q);
    }
    if (C)
      for (var Z = m ? 3 : 1, At = function(Ae) {
        var dt = S.find(function(Pt) {
          var Me = T.get(Pt);
          if (Me)
            return Me.slice(0, Ae).every(function(ar) {
              return ar;
            });
        });
        if (dt)
          return P = dt, "break";
      }, _e = Z; _e > 0; _e--) {
        var Ze = At(_e);
        if (Ze === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const rd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: td,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Re = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, nd = {
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
    this.teleport && await Fe();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = zc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [rd, Yc],
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
}, id = { ref: "tooltip" };
function sd(e, t, r, n, i, s) {
  const a = Br("OnClickOutside");
  return j(), G(a, {
    style: Rt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: li(() => [
      yr("div", {
        ref: "button",
        style: Rt(s.buttonStyle)
      }, [
        ne(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      yr("div", id, [
        ne(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ad = /* @__PURE__ */ Re(nd, [["render", sd]]), od = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = H("$splade") || {}, r = H("$spladeOptions") || {};
    return (n, i) => U(t).isSsr ? (j(), G(de, {
      key: e.keepAliveKey,
      html: U(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (j(), G(ai, {
      key: 0,
      max: U(r).max_keep_alive
    }, [
      (j(), G(de, {
        key: e.keepAliveKey,
        html: U(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function cs(e) {
  return e && e.length ? e[0] : void 0;
}
const ld = {
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
        return ee(e.values, t);
      },
      first(t) {
        return cs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, ud = {
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
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription ? this.bindListeners() : console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
  },
  methods: {
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
          let a = null, o = !1, l = [];
          te(r, (u) => {
            !K(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
          }), a ? v.visit(a) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
            v.pushToast(u);
          }), this.$root.$emit(`event.${e}`, r);
        });
        this.subscriptions.push(t);
      });
    },
    unsubscribe() {
      this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
    }
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
};
function cd() {
  this.__data__ = new xe(), this.size = 0;
}
function dd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function fd(e) {
  return this.__data__.get(e);
}
function pd(e) {
  return this.__data__.has(e);
}
var hd = 200;
function md(e, t) {
  var r = this.__data__;
  if (r instanceof xe) {
    var n = r.__data__;
    if (!St || n.length < hd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Te(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Se(e) {
  var t = this.__data__ = new xe(e);
  this.size = t.size;
}
Se.prototype.clear = cd;
Se.prototype.delete = dd;
Se.prototype.get = fd;
Se.prototype.has = pd;
Se.prototype.set = md;
var vd = "__lodash_hash_undefined__";
function gd(e) {
  return this.__data__.set(e, vd), this;
}
function yd(e) {
  return this.__data__.has(e);
}
function Ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Te(); ++t < r; )
    this.add(e[t]);
}
Ht.prototype.add = Ht.prototype.push = gd;
Ht.prototype.has = yd;
function bd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function wd(e, t) {
  return e.has(t);
}
var Sd = 1, Od = 2;
function ds(e, t, r, n, i, s) {
  var a = r & Sd, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, h = !0, d = r & Od ? new Ht() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < o; ) {
    var m = e[f], p = t[f];
    if (n)
      var g = a ? n(p, m, f, t, e, s) : n(m, p, f, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!bd(t, function(w, x) {
        if (!wd(d, x) && (m === w || i(m, w, r, n, s)))
          return d.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === p || i(m, p, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var $d = ge.Uint8Array;
const Wn = $d;
function Ed(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function xd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Td = 1, _d = 2, Id = "[object Boolean]", Ad = "[object Date]", Pd = "[object Error]", qd = "[object Map]", Cd = "[object Number]", Fd = "[object RegExp]", Ld = "[object Set]", kd = "[object String]", Dd = "[object Symbol]", Bd = "[object ArrayBuffer]", jd = "[object DataView]", zn = Le ? Le.prototype : void 0, gr = zn ? zn.valueOf : void 0;
function Rd(e, t, r, n, i, s, a) {
  switch (r) {
    case jd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Bd:
      return !(e.byteLength != t.byteLength || !s(new Wn(e), new Wn(t)));
    case Id:
    case Ad:
    case Cd:
      return Kr(+e, +t);
    case Pd:
      return e.name == t.name && e.message == t.message;
    case Fd:
    case kd:
      return e == t + "";
    case qd:
      var o = Ed;
    case Ld:
      var l = n & Td;
      if (o || (o = xd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= _d, a.set(e, t);
      var c = ds(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Dd:
      if (gr)
        return gr.call(e) == gr.call(t);
  }
  return !1;
}
function Md(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Nd(e, t, r) {
  var n = t(e);
  return R(e) ? n : Md(n, r(e));
}
function fs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Vd() {
  return [];
}
var Ud = Object.prototype, Hd = Ud.propertyIsEnumerable, Gn = Object.getOwnPropertySymbols, Wd = Gn ? function(e) {
  return e == null ? [] : (e = Object(e), fs(Gn(e), function(t) {
    return Hd.call(e, t);
  }));
} : Vd;
const zd = Wd;
function Xn(e) {
  return Nd(e, zt, zd);
}
var Gd = 1, Xd = Object.prototype, Kd = Xd.hasOwnProperty;
function Yd(e, t, r, n, i, s) {
  var a = r & Gd, o = Xn(e), l = o.length, u = Xn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var h = o[f];
    if (!(a ? h in t : Kd.call(t, h)))
      return !1;
  }
  var d = s.get(e), m = s.get(t);
  if (d && m)
    return d == t && m == e;
  var p = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++f < l; ) {
    h = o[f];
    var w = e[h], x = t[h];
    if (n)
      var _ = a ? n(x, w, h, t, e, s) : n(w, x, h, e, t, s);
    if (!(_ === void 0 ? w === x || i(w, x, r, n, s) : _)) {
      p = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (p && !g) {
    var S = e.constructor, O = t.constructor;
    S != O && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (p = !1);
  }
  return s.delete(e), s.delete(t), p;
}
var Jd = Je(ge, "DataView");
const Pr = Jd;
var Qd = Je(ge, "Promise");
const qr = Qd;
var Zd = Je(ge, "Set");
const Cr = Zd;
var ef = Je(ge, "WeakMap");
const Fr = ef;
var Kn = "[object Map]", tf = "[object Object]", Yn = "[object Promise]", Jn = "[object Set]", Qn = "[object WeakMap]", Zn = "[object DataView]", rf = Ye(Pr), nf = Ye(St), sf = Ye(qr), af = Ye(Cr), of = Ye(Fr), He = Be;
(Pr && He(new Pr(new ArrayBuffer(1))) != Zn || St && He(new St()) != Kn || qr && He(qr.resolve()) != Yn || Cr && He(new Cr()) != Jn || Fr && He(new Fr()) != Qn) && (He = function(e) {
  var t = Be(e), r = t == tf ? e.constructor : void 0, n = r ? Ye(r) : "";
  if (n)
    switch (n) {
      case rf:
        return Zn;
      case nf:
        return Kn;
      case sf:
        return Yn;
      case af:
        return Jn;
      case of:
        return Qn;
    }
  return t;
});
const ei = He;
var lf = 1, ti = "[object Arguments]", ri = "[object Array]", kt = "[object Object]", uf = Object.prototype, ni = uf.hasOwnProperty;
function cf(e, t, r, n, i, s) {
  var a = R(e), o = R(t), l = a ? ri : ei(e), u = o ? ri : ei(t);
  l = l == ti ? kt : l, u = u == ti ? kt : u;
  var c = l == kt, f = u == kt, h = l == u;
  if (h && br(e)) {
    if (!br(t))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return s || (s = new Se()), a || mi(e) ? ds(e, t, r, n, i, s) : Rd(e, t, l, r, n, i, s);
  if (!(r & lf)) {
    var d = c && ni.call(e, "__wrapped__"), m = f && ni.call(t, "__wrapped__");
    if (d || m) {
      var p = d ? e.value() : e, g = m ? t.value() : t;
      return s || (s = new Se()), i(p, g, r, n, s);
    }
  }
  return h ? (s || (s = new Se()), Yd(e, t, r, n, i, s)) : !1;
}
function sr(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ke(e) && !ke(t) ? e !== e && t !== t : cf(e, t, r, n, sr, i);
}
var df = 1, ff = 2;
function pf(e, t, r, n) {
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
      var f = new Se();
      if (n)
        var h = n(u, c, l, e, t, f);
      if (!(h === void 0 ? sr(c, u, df | ff, n, f) : h))
        return !1;
    }
  }
  return !0;
}
function ps(e) {
  return e === e && !K(e);
}
function hf(e) {
  for (var t = zt(e), r = t.length; r--; ) {
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
function mf(e) {
  var t = hf(e);
  return t.length == 1 && t[0][2] ? hs(t[0][0], t[0][1]) : function(r) {
    return r === e || pf(r, e, t);
  };
}
function vf(e, t) {
  return e != null && t in Object(e);
}
function gf(e, t) {
  return e != null && Di(e, t, vf);
}
var yf = 1, bf = 2;
function wf(e, t) {
  return Xr(e) && ps(t) ? hs(Et(e), t) : function(r) {
    var n = ye(r, e);
    return n === void 0 && n === t ? gf(r, e) : sr(t, n, yf | bf);
  };
}
function Sf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Of(e) {
  return function(t) {
    return es(t, e);
  };
}
function $f(e) {
  return Xr(e) ? Sf(Et(e)) : Of(e);
}
function It(e) {
  return typeof e == "function" ? e : e == null ? gi : typeof e == "object" ? R(e) ? wf(e[0], e[1]) : mf(e) : $f(e);
}
function Ef(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Wt(t)) {
      var s = It(r);
      t = zt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function xf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ii = 1 / 0, Tf = 17976931348623157e292;
function _f(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ii || e === -ii) {
    var t = e < 0 ? -1 : 1;
    return t * Tf;
  }
  return e === e ? e : 0;
}
function dn(e) {
  var t = _f(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var If = Math.max;
function Af(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dn(r);
  return i < 0 && (i = If(n + i, 0)), xf(e, It(t), i);
}
var Pf = Ef(Af);
const fn = Pf, qf = {
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
      return e ? oe(e) ? e : R(e) ? e.map(this.extractMetadataFromExistingFile) : K(e) ? e.options.metadata.metadata : null : null;
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
              const h = se.CancelToken.source();
              return se({
                url: a.preview_url,
                method: "GET",
                cancelToken: h.token,
                responseType: "blob"
              }).then((d) => {
                const m = new File([d.data], a.name, { type: a.type });
                o(m);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  h.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, f, h) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const p = se.CancelToken.source();
            se({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: p.token,
              onUploadProgress: (g) => {
                f(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var w;
              axios.isCancel(g) ? h() : c((w = g.response) == null ? void 0 : w.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            se({
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
      this.server && (e = fn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
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
}, Cf = { ref: "file" };
function Ff(e, t, r, n, i, s) {
  return j(), Oe("div", Cf, [
    ne(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Lf = /* @__PURE__ */ Re(qf, [["render", Ff]]), kf = {
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
        return ee(e.values, t);
      },
      ...this.values
    });
  }
};
function pn(e, t, r) {
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
  pn(r, e, t);
}
var Df = "[object Boolean]";
function gs(e) {
  return e === !0 || e === !1 || ke(e) && Be(e) == Df;
}
function ys(e, t) {
  var r = {};
  return t = It(t), Mr(e, function(n, i, s) {
    ts(r, i, t(n, i, s));
  }), r;
}
function bs(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function et(e, t, r) {
  return e = Jr(e), r = r == null ? 0 : bs(dn(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Bf = {
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
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
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
    },
    acceptHeader: {
      type: String,
      required: !1,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
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
    this.debounceFunction = er(() => {
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
    }, { deep: !0 }) : R(this.submitOnChange) && this.submitOnChange.forEach((r) => {
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
      return Ot(this.values, e, t);
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
          this.requirePasswordOnce,
          !!this.confirmDanger
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
    async request(e) {
      if (typeof e > "u" && (e = !1), this.$uploading)
        return;
      await this.$nextTick(), this.background ? this.processingInBackground = !0 : this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = !1, this.recentlyUnsuccessful = !1, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : pn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, { ...r, ...this.headers }).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = fn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
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
            ].includes(r) || et(r, "__v_") ? e[r] : (!e.isMounted && !ee(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), ye(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
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
}, Rf = { ref: "input" };
function Mf(e, t, r, n, i, s) {
  return j(), Oe("div", Rf, [
    ne(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Nf = /* @__PURE__ */ Re(jf, [["render", Mf]]), Vf = {
  components: { Render: de },
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
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
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
function Uf(e, t, r, n, i, s) {
  const a = Br("Render");
  return i.html ? (j(), G(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? ne(e.$slots, "default", { key: 1 }) : kr("", !0);
}
const Hf = /* @__PURE__ */ Re(Vf, [["render", Uf]]), Wf = ["href", "onClick"], zf = {
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
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: !1,
      default: !1
    },
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
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
    const t = e, r = H("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        gs(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
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
      if (et(t.href, "#")) {
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
      const c = t.data instanceof FormData ? t.data : pn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(oe(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (j(), Oe("a", {
      href: e.href,
      onClick: Ls(i, ["prevent"])
    }, [
      ne(a.$slots, "default")
    ], 8, Wf));
  }
}, Gf = {
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
      Dialog: tn,
      DialogPanel: rn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Xf = {
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
    },
    opened: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return v.registerPreloadedModal(t.name, t.html, t.type), t.opened && v.openPreloadedModal(t.name), () => {
    };
  }
}, Kf = {
  components: { Render: de },
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
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
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
function Yf(e, t, r, n, i, s) {
  const a = Br("Render");
  return i.html ? (j(), G(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? ne(e.$slots, "placeholder", { key: 1 }) : ne(e.$slots, "default", { key: 2 });
}
const Jf = /* @__PURE__ */ Re(Kf, [["render", Yf]]), Qf = {
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
function Zf(e, t) {
  var r = -1, n = Wt(e) ? Array(e.length) : [];
  return Nr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ws(e, t) {
  var r = R(e) ? ki : Zf;
  return r(e, It(t));
}
const ep = {
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
      if (!this.choicesInstance && this.multiple && R(e)) {
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
      !this.remoteUrl || (this.loading = !0, se({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? ye(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (te(t, (s) => {
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
      const r = R(e);
      if (!r && K(e))
        if (this.optionValue && this.optionLabel) {
          let n = ye(e, this.optionValue);
          oe(n) || (n = `${n}`), t.push({
            value: n,
            label: ye(e, this.optionLabel)
          });
        } else
          te(e, (n, i) => {
            oe(i) || (i = `${i}`), t.push({ label: n, value: i });
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
      return fn(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, tp = { ref: "select" };
function rp(e, t, r, n, i, s) {
  return j(), Oe("div", tp, [
    ne(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const np = /* @__PURE__ */ Re(ep, [["render", rp]]), ip = {
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
        return ee(t, i);
      },
      hasShared(i) {
        return ee(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function sp(e, t, r) {
  e = Jr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : bs(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function ap(e, t) {
  var r = [];
  return Nr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function op(e, t) {
  var r = R(e) ? fs : ap;
  return r(e, It(t));
}
function si(e, t) {
  return sr(e, t);
}
const lp = {
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
    this.debounceUpdateQuery = er(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    te(e, (r, n) => {
      if (et(n, "filter[") && !r) {
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
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, te(e, (t, r) => {
        et(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = op(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ws(r, (i) => i.key).sort();
      si(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Fe(() => {
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
        if (!sp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], R(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (et(e, "perPage") || et(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      te(e, (u, c) => {
        if (!R(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((f, h) => {
          n[`${c}[${h}]`] = f;
        });
      });
      let i = "";
      te(n, (u, c) => {
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
        this.isLoading = !1, typeof t < "u" && t && Fe(() => {
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
        const l = oe(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = R(e) ? e : [];
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
}, up = {
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
function cp(e, t, r, n, i, s) {
  return ks((j(), G(Ds(i.isMounted ? i.Teleport : "div"), Bs(js(e.$attrs)), {
    default: li(() => [
      ne(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Rs, i.isMounted]
  ]);
}
const dp = /* @__PURE__ */ Re(up, [["render", cp]]), fp = {
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
        Fe(() => e.default.update(this.element));
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
}, pp = { ref: "textarea" };
function hp(e, t, r, n, i, s) {
  return j(), Oe("div", pp, [
    ne(e.$slots, "default")
  ], 512);
}
const mp = /* @__PURE__ */ Re(fp, [["render", hp]]), vp = {
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
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, gp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], yp = {
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
      positions: gp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: de,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, bp = {
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
}, wp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Sp = {
  props: {
    backendRoute: {
      type: String,
      required: !0
    },
    default: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    initialInstance: {
      type: String,
      required: !0
    },
    initialSignature: {
      type: String,
      required: !0
    },
    methods: {
      type: Array,
      required: !0
    },
    originalUrl: {
      type: String,
      required: !0
    },
    verb: {
      type: String,
      required: !0
    }
  },
  data() {
    return {
      instance: this.initialInstance,
      signature: this.initialSignature,
      values: Object.assign({}, this.default)
    };
  },
  render() {
    const e = this, t = {
      props: new Proxy(this.values, {
        ownKeys: function() {
          return Object.keys(e.values);
        },
        get: (r, n) => ye(e.values, n),
        set: (r, n, i) => {
          Ot(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && ye(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await se.post(this.backendRoute, {
            instance: this.instance,
            signature: this.signature,
            url: this.originalUrl,
            verb: this.verb,
            props: this.values,
            method: r,
            data: n
          }, { headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "text/html, application/xhtml+xml"
          } });
        } catch (s) {
          v.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          Ot(this.values, a, s);
        }), i.data.redirect ? v.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          v.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Op = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && Fe(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", er(i, 100)), i();
  }
}, Lr = {
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
    Lr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Lr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, _p = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = ee(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = ee(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = ee(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = ee(t, "link_component") ? t.link_component : "Link", t.progress_bar = ee(t, "progress_bar") ? t.progress_bar : !1, t.components = ee(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Vl).component(`${r}Confirm`, qu).component(`${r}DataStores`, ju).component(`${r}Data`, Bu).component(`${r}Defer`, Ju).component(`${r}Dialog`, Qu).component(`${r}Dropdown`, ad).component(`${r}DynamicHtml`, od).component(`${r}Errors`, ld).component(`${r}Event`, ud).component(`${r}File`, Lf).component(`${r}Flash`, kf).component(`${r}Form`, Bf).component(`${r}Input`, Nf).component(`${r}VueBridge`, Sp).component(`${r}Lazy`, Hf).component(`${r}Modal`, Gf).component(`${r}OnClickOutside`, rs).component(`${r}PreloadedModal`, Xf).component(`${r}Rehydrate`, Jf).component(`${r}Render`, de).component(`${r}Script`, Qf).component(`${r}Select`, np).component(`${r}State`, ip).component(`${r}Table`, lp).component(`${r}Teleport`, dp).component(`${r}Textarea`, mp).component(`${r}Toast`, vp).component(`${r}Toasts`, yp).component(`${r}Toggle`, bp).component(`${r}Transition`, wp).component(t.link_component, zf).directive(`${r}PreserveScroll`, Op), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      K(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        ee(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Lr.init(t.progress_bar);
    }
    te(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Ip(e, t, r) {
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
  No as SpladeApp,
  _p as SpladePlugin,
  xp as renderSpladeApp,
  Ip as startServer
};
