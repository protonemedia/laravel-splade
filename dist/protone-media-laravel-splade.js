import ne from "axios";
import { ref as y, computed as x, watch as ot, openBlock as j, createBlock as X, unref as ee, createCommentVNode as Fr, h as N, nextTick as Oe, onMounted as V, createElementBlock as ce, createElementVNode as gr, provide as de, inject as z, KeepAlive as ni, normalizeStyle as Mt, createVNode as xs, Fragment as kr, renderList as _s, cloneVNode as As, watchEffect as le, defineComponent as Y, onUnmounted as me, Teleport as ii, reactive as Is, shallowRef as Ps, normalizeClass as qs, onBeforeUnmount as Cs, renderSlot as K, resolveComponent as Lr, withCtx as si, withModifiers as Fs, withDirectives as ks, resolveDynamicComponent as Ls, normalizeProps as Bs, guardReactiveProps as js, vShow as Ms } from "vue";
function Rs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ds(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Ns = Ds();
const Vs = Ns;
function Us(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Hs = typeof global == "object" && global && global.Object === Object && global;
const ai = Hs;
var Ws = typeof self == "object" && self && self.Object === Object && self, zs = ai || Ws || Function("return this")();
const ve = zs;
var Gs = ve.Symbol;
const ke = Gs;
var oi = Object.prototype, Xs = oi.hasOwnProperty, Ks = oi.toString, ft = ke ? ke.toStringTag : void 0;
function Js(e) {
  var t = Xs.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ks.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Qs = Object.prototype, Ys = Qs.toString;
function Zs(e) {
  return Ys.call(e);
}
var ea = "[object Null]", ta = "[object Undefined]", Sn = ke ? ke.toStringTag : void 0;
function je(e) {
  return e == null ? e === void 0 ? ta : ea : Sn && Sn in Object(e) ? Js(e) : Zs(e);
}
function Le(e) {
  return e != null && typeof e == "object";
}
var ra = "[object Arguments]";
function On(e) {
  return Le(e) && je(e) == ra;
}
var li = Object.prototype, na = li.hasOwnProperty, ia = li.propertyIsEnumerable, sa = On(function() {
  return arguments;
}()) ? On : function(e) {
  return Le(e) && na.call(e, "callee") && !ia.call(e, "callee");
};
const ui = sa;
var aa = Array.isArray;
const R = aa;
function oa() {
  return !1;
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, $n = ci && typeof module == "object" && module && !module.nodeType && module, la = $n && $n.exports === ci, En = la ? ve.Buffer : void 0, ua = En ? En.isBuffer : void 0, ca = ua || oa;
const yr = ca;
var da = 9007199254740991, fa = /^(?:0|[1-9]\d*)$/;
function Br(e, t) {
  var r = typeof e;
  return t = t ?? da, !!t && (r == "number" || r != "symbol" && fa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var pa = 9007199254740991;
function jr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pa;
}
var ha = "[object Arguments]", ma = "[object Array]", va = "[object Boolean]", ga = "[object Date]", ya = "[object Error]", ba = "[object Function]", wa = "[object Map]", Sa = "[object Number]", Oa = "[object Object]", $a = "[object RegExp]", Ea = "[object Set]", Ta = "[object String]", xa = "[object WeakMap]", _a = "[object ArrayBuffer]", Aa = "[object DataView]", Ia = "[object Float32Array]", Pa = "[object Float64Array]", qa = "[object Int8Array]", Ca = "[object Int16Array]", Fa = "[object Int32Array]", ka = "[object Uint8Array]", La = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", ja = "[object Uint32Array]", L = {};
L[Ia] = L[Pa] = L[qa] = L[Ca] = L[Fa] = L[ka] = L[La] = L[Ba] = L[ja] = !0;
L[ha] = L[ma] = L[_a] = L[va] = L[Aa] = L[ga] = L[ya] = L[ba] = L[wa] = L[Sa] = L[Oa] = L[$a] = L[Ea] = L[Ta] = L[xa] = !1;
function Ma(e) {
  return Le(e) && jr(e.length) && !!L[je(e)];
}
function Ra(e) {
  return function(t) {
    return e(t);
  };
}
var di = typeof exports == "object" && exports && !exports.nodeType && exports, gt = di && typeof module == "object" && module && !module.nodeType && module, Da = gt && gt.exports === di, lr = Da && ai.process, Na = function() {
  try {
    var e = gt && gt.require && gt.require("util").types;
    return e || lr && lr.binding && lr.binding("util");
  } catch {
  }
}();
const Tn = Na;
var xn = Tn && Tn.isTypedArray, Va = xn ? Ra(xn) : Ma;
const fi = Va;
var Ua = Object.prototype, Ha = Ua.hasOwnProperty;
function Wa(e, t) {
  var r = R(e), n = !r && ui(e), i = !r && !n && yr(e), s = !r && !n && !i && fi(e), a = r || n || i || s, o = a ? Us(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ha.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Br(u, l))) && o.push(u);
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
const Ja = Ka;
var Qa = Object.prototype, Ya = Qa.hasOwnProperty;
function Za(e) {
  if (!Ga(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    Ya.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function J(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var eo = "[object AsyncFunction]", to = "[object Function]", ro = "[object GeneratorFunction]", no = "[object Proxy]";
function pi(e) {
  if (!J(e))
    return !1;
  var t = je(e);
  return t == to || t == ro || t == eo || t == no;
}
function Ht(e) {
  return e != null && jr(e.length) && !pi(e);
}
function Wt(e) {
  return Ht(e) ? Wa(e) : Za(e);
}
function Mr(e, t) {
  return e && Vs(e, t, Wt);
}
function io(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ht(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var so = io(Mr);
const Rr = so;
function hi(e) {
  return e;
}
function mi(e) {
  return typeof e == "function" ? e : hi;
}
function ao(e, t) {
  var r = R(e) ? Rs : Rr;
  return r(e, mi(t));
}
function te(e, t) {
  return e && Mr(e, mi(t));
}
var oo = Array.prototype, lo = oo.reverse;
function uo(e) {
  return e == null ? e : lo.call(e);
}
class vi {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    this.events[t] && (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    this.events[t] && this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Rt = y(0), ie = y(1), B = y({}), ae = y(0), zt = y({}), tt = {}, $e = typeof window > "u";
function co(e, t, r) {
  $e || window.addEventListener("popstate", fo.bind(this)), Object.keys(t).length > 0 && Rt.value++, tt[ie.value] = new vi(ie.value), Ur(r), Gt(r.head), Hr(e);
  const n = $e ? "" : location.href, i = Dr(
    n,
    r.head,
    e,
    t,
    {},
    ie.value,
    Rt.value,
    r.persistentLayout
  );
  gi(i);
}
function fo(e) {
  e.state && (B.value = e.state, ae.value = 0, zt.value = {}, Wr.value = {}, Nr.value = B.value.persistentLayoutKey, Gt(B.value.head), Hr(B.value.html, B.value.rememberedState.scrollY), ye("history:popped-state", B.value.url));
}
function Dr(e, t, r, n, i, s, a, o) {
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
  return B.value = l, l;
}
function po(e) {
  $e || (window.history.pushState(e, "", e.url), ye("history:pushed-state", { url: e.url }));
}
function ho(e) {
  const t = Dr(
    e,
    JSON.parse(JSON.stringify(B.value.head)),
    B.value.html,
    JSON.parse(JSON.stringify(B.value.dynamics)),
    { ...B.value.rememberedState },
    B.value.pageVisitId,
    B.value.dynamicVisitId,
    B.value.persistentLayoutKey
  );
  $e || (window.history.replaceState(t, "", t.url), ye("history:replaced-state", { url: t.url }));
}
function gi(e) {
  $e || (window.history.replaceState(e, "", e.url), ye("history:replaced-state", { url: e.url }));
}
const ur = y(0), Nr = y(null);
function mo(e) {
  const t = URL.createObjectURL(e.data), r = e.headers["content-disposition"].split("filename=")[1], n = document.createElement("a");
  n.href = t, n.download = r, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), URL.revokeObjectURL(t);
  }, 1);
}
function vo(e, t, r) {
  var g;
  ur.value++;
  const n = e.request.responseURL + (r ? "#" + r : "");
  if (e.data instanceof Blob) {
    mo(e);
    return;
  }
  if (J((g = e.data) == null ? void 0 : g.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ae.value++;
  const i = Nr.value;
  if (Ur(e.data.splade), Gt(e.data.splade.head), n === B.value.url && (t = !0), e.data.splade.modal)
    return _i(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ae.value = 0, zt.value = {};
  let s = e.data.html, a = e.data.dynamics;
  const o = Object.keys(B.value.dynamics).length > 0, l = Object.keys(a).length > 0;
  t ? (l && te(a, (f, p) => {
    a[p] += `<!-- ${ur.value} -->`;
  }), (!l || !o) && (s += `<!-- ${ur.value} -->`)) : (l && Rt.value++, (!l || !o) && (ie.value++, tt[ie.value] = tt[ie.value] || new vi(ie.value)));
  let u = e.data.splade.persistentLayout && i === e.data.splade.persistentLayout, c = 0;
  !$e && t && e.data.splade.preserveScroll && (c = window.scrollY), Hr(
    u ? B.value.html : s,
    c
  );
  const m = Dr(
    n,
    e.data.splade.head,
    u ? B.value.html : s,
    a,
    B.value.rememberedState ? { ...B.value.rememberedState } : {},
    ie.value,
    Rt.value,
    e.data.splade.persistentLayout
  );
  t ? gi(m) : po(m);
}
function go() {
  ae.value--, Gt(bo(ae.value));
}
const yi = y({}), bi = (e) => yi.value[e], yo = (e) => Object.keys(bi.value[e]).length > 0, wi = y({}), bo = (e) => wi.value[e], Si = y({}), wo = (e) => Si.value[e], rt = y([]);
function So(e) {
  rt.value.push(e);
}
const Oo = x(() => uo(rt.value));
function $o(e) {
  rt.value[e].dismissed = !0, rt.value[e].html = null;
}
const Vr = y(null);
function Eo(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, m) => {
    o = c, l = m;
  });
  return Vr.value = {
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
function To() {
  Vr.value = null;
}
const Oi = y({});
function Ur(e) {
  Nr.value = e.persistentLayout, Oi.value = e.shared ? e.shared : {}, Si.value[ae.value] = e.flash ? e.flash : {}, wi.value[ae.value] = e.head ? e.head : {}, ao(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), yi.value[ae.value] = e.errors ? e.errors : {};
}
const $i = y(() => {
}), Ei = y(() => {
}), Ti = y(() => {
}), xi = y(() => {
});
function Gt(e) {
  $i.value(e);
}
function Hr(e, t) {
  Ei.value(e, t);
}
function _i(e, t) {
  zt.value[ae.value] = !0, Ti.value(e, t);
}
function xo(e) {
  return zt.value[e];
}
function Ai(e) {
  xi.value(e);
}
const Ii = y({});
function Pi(e, t, r) {
  Ii.value[e] = t, r && _o(e, t);
}
function _o(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Ao(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ii.value[e];
}
function Ke(e, t, r, n, i, s) {
  if ($e || Pi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const o = new URLSearchParams(r).toString();
    o != "" && (e = `${e.split("?")[0]}?${o}`), r = {};
  }
  ye("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = ne({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    responseType: s ? "blob" : "json",
    onUploadProgress: (o) => {
      r instanceof FormData && (o.percentage = Math.round(o.loaded / o.total * 100), ye("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: o }));
    }
  });
  return a.then((o) => {
    const l = e.split("#")[1] || "";
    vo(o, i, l), ye("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch(async (o) => {
    if (ye("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o }), !o.response)
      return;
    const l = o.response;
    if (l.status == 409 && l.headers["x-splade-redirect-away"])
      return window.location = l.headers["x-splade-redirect-away"];
    let u = {};
    if (l.data instanceof Blob) {
      const c = await l.data.text();
      l.data.type === "application/json" && typeof c == "string" ? u = JSON.parse(c) || {} : l.data.html = c;
    } else
      u = l.data.splade;
    u && !u.lazy && !u.rehydrate && Ur(u), l.status != 422 && Ai(
      l.data.html ? l.data.html : l.data
    );
  }), a;
}
function qi(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !0);
}
function Io(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !1);
}
function Po(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Wr = y({});
function qo(e) {
  const t = Wr.value[e];
  return t ? (ae.value++, _i(t.html, t.type), !0) : !1;
}
function Co(e, t, r) {
  Wr.value[e] = { html: t, type: r };
}
function Fo(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function ko(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Lo(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Bo(e) {
  typeof e > "u" && (e = !1);
  const t = {
    "X-Splade-Refresh": !0
  };
  return e && (t["X-Splade-Preserve-Scroll"] = !0), qi(B.value.url, t);
}
function jo(e, t) {
  tt[ie.value].on(e, t);
}
function Mo(e, t) {
  tt[ie.value].off(e, t);
}
function ye(e, t) {
  typeof t > "u" && (t = {}), tt[ie.value].emit(e, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: co,
  replace: qi,
  visit: Io,
  modal: Po,
  slideover: Fo,
  refresh: Bo,
  request: Ke,
  lazy: ko,
  rehydrate: Lo,
  replaceUrlOfCurrentPage: ho,
  htmlForDynamicComponent(e) {
    return B.value.dynamics[e];
  },
  setOnHead(e) {
    $i.value = e;
  },
  setOnHtml(e) {
    Ei.value = e;
  },
  setOnModal(e) {
    Ti.value = e;
  },
  setOnServerError(e) {
    xi.value = e;
  },
  onServerError: Ai,
  hasValidationErrors: yo,
  validationErrors: bi,
  sharedData: Oi,
  // ref
  flashData: wo,
  toasts: rt,
  // ref
  toastsReversed: Oo,
  // ref
  confirmModal: Vr,
  // ref
  confirm: Eo,
  clearConfirmModal: To,
  pushToast: So,
  dismissToast: $o,
  restore: Ao,
  remember: Pi,
  popStack: go,
  currentStack: ae,
  // ref
  stackType: xo,
  pageVisitId: x(() => B.value.pageVisitId),
  // ref
  dynamicVisitId: x(() => B.value.dynamicVisitId),
  // ref
  isSsr: $e,
  openPreloadedModal: qo,
  registerPreloadedModal: Co,
  on: jo,
  off: Mo,
  emit: ye
};
var Ro = "[object String]";
function se(e) {
  return typeof e == "string" || !R(e) && Le(e) && je(e) == Ro;
}
const ue = {
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
      }), Oe(() => {
        v.emit("rendered");
      });
    }
    return ot(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (j(), X(ee(r), { key: 0 })) : Fr("", !0);
  }
}, Do = {
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
    return V(() => i()), (o, l) => (j(), ce("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      gr("iframe", {
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
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    de("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = z("$spladeOptions") || {}, l = x(() => v.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(p) {
      n.value[p] = null, v.popStack();
    }
    function m(p) {
      const h = document.createElement("meta");
      te(p, (d, b) => {
        h[b] = d;
      }), document.getElementsByTagName("head")[0].appendChild(h);
    }
    function g(p) {
      var d;
      let h = "meta";
      te(p, (b, O) => {
        h = `${h}[${O}="${b}"]`;
      });
      try {
        (d = document.querySelector(h)) == null || d.remove();
      } catch {
      }
    }
    v.setOnHead((p) => {
      var h;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = p.meta;
          return;
        }
        if (s.value.forEach((d) => {
          g(d);
        }), s.value = p.meta, document.title = p.title, p.meta.forEach((d) => {
          m(d);
        }), (h = document.querySelector('link[rel="canonical"]')) == null || h.remove(), p.canonical) {
          const d = document.createElement("link");
          d.rel = "canonical", d.href = p.canonical, document.getElementsByTagName("head")[0].appendChild(d);
        }
      }
    });
    const f = (p, h) => {
      n.value = [], r.value = p, Oe(() => {
        if (!v.isSsr) {
          const d = window.location.hash;
          d && document.getElementById(d.substring(1)) ? window.location.hash = d : window.scrollTo(0, h);
        }
        o.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(b) {
            b.preventDefault(), v.visit(d.href);
          }));
        });
      });
    };
    return v.setOnHtml((p, h) => {
      if (v.isSsr || !document.startViewTransition || !o.view_transitions) {
        f(p, h);
        return;
      }
      document.startViewTransition(() => f(p, h));
    }), v.setOnModal(function(p, h) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: p, type: h }, Oe(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(p) {
      i.value = p;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), V(() => {
      if (v.isSsr)
        return;
      const p = se(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((h) => {
        delete p.dataset[h];
      });
    }), (p, h) => (j(), ce("div", null, [
      ee(v).isSsr ? (j(), X(ue, {
        key: `visit.${ee(v).pageVisitId.value}`,
        style: Mt(l.value),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), X(ni, {
        key: 0,
        max: ee(o).max_keep_alive
      }, [
        (j(), X(ue, {
          key: `visit.${ee(v).pageVisitId.value}`,
          style: Mt(l.value),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      xs(ue, { html: e.components }, null, 8, ["html"]),
      (j(!0), ce(kr, null, _s(ee(v).currentStack.value, (d) => (j(), X(ue, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ee(v).currentStack.value === d,
        animate: a.value,
        onClose: (b) => c(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (j(), X(Do, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Fr("", !0)
    ]));
  }
};
function Pp(e) {
  return () => N(No, e);
}
var Vo = Object.prototype, Uo = Vo.hasOwnProperty;
function Ho(e, t) {
  return e != null && Uo.call(e, t);
}
var Wo = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Le(e) && je(e) == Wo;
}
var zo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Go = /^\w*$/;
function zr(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? !0 : Go.test(e) || !zo.test(e) || t != null && e in Object(t);
}
var Xo = ve["__core-js_shared__"];
const cr = Xo;
var _n = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ko(e) {
  return !!_n && _n in e;
}
var Jo = Function.prototype, Qo = Jo.toString;
function Je(e) {
  if (e != null) {
    try {
      return Qo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yo = /[\\^$.*+?()[\]{}|]/g, Zo = /^\[object .+?Constructor\]$/, el = Function.prototype, tl = Object.prototype, rl = el.toString, nl = tl.hasOwnProperty, il = RegExp(
  "^" + rl.call(nl).replace(Yo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sl(e) {
  if (!J(e) || Ko(e))
    return !1;
  var t = pi(e) ? il : Zo;
  return t.test(Je(e));
}
function al(e, t) {
  return e == null ? void 0 : e[t];
}
function Qe(e, t) {
  var r = al(e, t);
  return sl(r) ? r : void 0;
}
var ol = Qe(Object, "create");
const bt = ol;
function ll() {
  this.__data__ = bt ? bt(null) : {}, this.size = 0;
}
function ul(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cl = "__lodash_hash_undefined__", dl = Object.prototype, fl = dl.hasOwnProperty;
function pl(e) {
  var t = this.__data__;
  if (bt) {
    var r = t[e];
    return r === cl ? void 0 : r;
  }
  return fl.call(t, e) ? t[e] : void 0;
}
var hl = Object.prototype, ml = hl.hasOwnProperty;
function vl(e) {
  var t = this.__data__;
  return bt ? t[e] !== void 0 : ml.call(t, e);
}
var gl = "__lodash_hash_undefined__";
function yl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bt && t === void 0 ? gl : t, this;
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
function Gr(e, t) {
  return e === t || e !== e && t !== t;
}
function Kt(e, t) {
  for (var r = e.length; r--; )
    if (Gr(e[r][0], t))
      return r;
  return -1;
}
var wl = Array.prototype, Sl = wl.splice;
function Ol(e) {
  var t = this.__data__, r = Kt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Sl.call(t, r, 1), --this.size, !0;
}
function $l(e) {
  var t = this.__data__, r = Kt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function El(e) {
  return Kt(this.__data__, e) > -1;
}
function Tl(e, t) {
  var r = this.__data__, n = Kt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Te.prototype.clear = bl;
Te.prototype.delete = Ol;
Te.prototype.get = $l;
Te.prototype.has = El;
Te.prototype.set = Tl;
var xl = Qe(ve, "Map");
const wt = xl;
function _l() {
  this.size = 0, this.__data__ = {
    hash: new Ge(),
    map: new (wt || Te)(),
    string: new Ge()
  };
}
function Al(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jt(e, t) {
  var r = e.__data__;
  return Al(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Il(e) {
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
function xe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xe.prototype.clear = _l;
xe.prototype.delete = Il;
xe.prototype.get = Pl;
xe.prototype.has = ql;
xe.prototype.set = Cl;
var Fl = "Expected a function";
function Xr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Xr.Cache || xe)(), r;
}
Xr.Cache = xe;
var kl = 500;
function Ll(e) {
  var t = Xr(e, function(n) {
    return r.size === kl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Bl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jl = /\\(\\)?/g, Ml = Ll(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bl, function(r, n, i, s) {
    t.push(i ? s.replace(jl, "$1") : n || r);
  }), t;
});
const Rl = Ml;
function Ci(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Dl = 1 / 0, An = ke ? ke.prototype : void 0, In = An ? An.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return Ci(e, Qt) + "";
  if (Xt(e))
    return In ? In.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Dl ? "-0" : t;
}
function Kr(e) {
  return e == null ? "" : Qt(e);
}
function Jr(e, t) {
  return R(e) ? e : zr(e, t) ? [e] : Rl(Kr(e));
}
var Nl = 1 / 0;
function $t(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Nl ? "-0" : t;
}
function Fi(e, t, r) {
  t = Jr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = $t(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && jr(i) && Br(a, i) && (R(e) || ui(e)));
}
function W(e, t) {
  return e != null && Fi(e, t, Ho);
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
function fe(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, fe), n;
}
var Dt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Dt || {}), Ce = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ce || {});
function Z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Li(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return dr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return fe(l, { [0]() {
      return null;
    }, [1]() {
      return dr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return dr(o);
}
function dr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Bi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let m = !1, g = [];
    for (let [f, p] of Object.entries(n))
      typeof p == "boolean" && (m = !0), p === !0 && g.push(f);
    m && (c["data-headlessui-state"] = g.join(" "));
  }
  if (o === "template") {
    if (u = ki(u ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [m, ...g] = u ?? [];
      if (!Ul(m) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((h) => h.trim()).filter((h, d, b) => b.indexOf(h) === d).sort((h, d) => h.localeCompare(d)).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
      let f = Li((a = m.props) != null ? a : {}, l), p = As(m, f);
      for (let h in f)
        h.startsWith("on") && (p.props || (p.props = {}), p.props[h] = f[h]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return N(o, Object.assign({}, l, c), { default: () => u });
}
function ki(e) {
  return e.flatMap((t) => t.type === kr ? ki(t.children) : [t]);
}
function Li(...e) {
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
function Bi(e, t = []) {
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
function Ye() {
  return Wl();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function D(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Mi = Symbol("Context");
var G = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(G || {});
function zl() {
  return Qr() !== null;
}
function Qr() {
  return z(Mi, null);
}
function Gl(e) {
  de(Mi, e);
}
var Xl = Object.defineProperty, Kl = (e, t, r) => t in e ? Xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pn = (e, t, r) => (Kl(e, typeof t != "symbol" ? t + "" : t, r), r);
class Jl {
  constructor() {
    Pn(this, "current", this.detect()), Pn(this, "currentId", 0);
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
let Et = new Jl();
function Tt(e) {
  if (Et.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = D(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let br = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), Ri = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ri || {}), Ql = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ql || {});
function Yl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Di = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Di || {});
function Zl(e, t = 0) {
  var r;
  return e === ((r = Tt(e)) == null ? void 0 : r.body) ? !1 : fe(t, { [0]() {
    return e.matches(br);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(br))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var eu = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(eu || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function We(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let tu = ["textarea", "input"].join(",");
function ru(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, tu)) != null ? r : !1;
}
function nu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Lt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? nu(e) : e : Yl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((p) => !i.includes(p))), n = n ?? a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, m = 0, g = o.length, f;
  do {
    if (m >= g || m + g <= 0)
      return 0;
    let p = u + m;
    if (t & 16)
      p = (p + g) % g;
    else {
      if (p < 0)
        return 3;
      if (p >= g)
        return 1;
    }
    f = o[p], f == null || f.focus(c), m += l;
  } while (f !== a.activeElement);
  return t & 6 && ru(f) && f.select(), 2;
}
function fr(e, t, r) {
  Et.isServer || le((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function iu(e, t, r = x(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : D(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Zl(o, Di.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  fr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), fr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, !0), fr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let wr = Y({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return Z({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function su() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function au(e, t, r) {
  Et.isServer || le((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var vt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vt || {});
function ou() {
  let e = y(0);
  return au("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ni(e, t, r, n) {
  Et.isServer || le((i) => {
    e = e ?? window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Vi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function lu(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Ui(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let n = D(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var Hi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hi || {});
let pt = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = x(() => Tt(i)), a = y(!1);
  V(() => a.value = !0), me(() => a.value = !1), cu({ ownerDocument: s }, x(() => a.value && !!(e.features & 16)));
  let o = du({ ownerDocument: s, container: i, initialFocus: x(() => e.initialFocus) }, x(() => a.value && !!(e.features & 2)));
  fu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: o }, x(() => a.value && !!(e.features & 8)));
  let l = ou();
  function u(f) {
    let p = D(i);
    p && ((h) => h())(() => {
      fe(l.value, { [vt.Forwards]: () => {
        Lt(p, qe.First, { skipElements: [f.relatedTarget] });
      }, [vt.Backwards]: () => {
        Lt(p, qe.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = y(!1);
  function m(f) {
    f.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function g(f) {
    if (!a.value)
      return;
    let p = Ui(e.containers);
    D(i) instanceof HTMLElement && p.add(D(i));
    let h = f.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (Wi(p, h) || (c.value ? Lt(D(i), fe(l.value, { [vt.Forwards]: () => qe.Next, [vt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && We(f.target)));
  }
  return () => {
    let f = {}, p = { ref: i, onKeydown: m, onFocusout: g }, { features: h, initialFocus: d, containers: b, ...O } = e;
    return N(kr, [!!(h & 4) && N(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable }), Z({ ourProps: p, theirProps: { ...t, ...O }, slot: f, attrs: t, slots: r, name: "FocusTrap" }), !!(h & 4) && N(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable })]);
  };
} }), { features: Hi }), Ue = [];
lu(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Ue[0] !== t.target && (Ue.unshift(t.target), Ue = Ue.filter((r) => r != null && r.isConnected), Ue.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function uu(e) {
  let t = y(Ue.slice());
  return ot([e], ([r], [n]) => {
    n === !0 && r === !1 ? Vi(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = Ue.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function cu({ ownerDocument: e }, t) {
  let r = uu(t);
  V(() => {
    le(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && We(r());
    }, { flush: "post" });
  }), me(() => {
    We(r());
  });
}
function du({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return V(() => s.value = !0), me(() => s.value = !1), V(() => {
    ot([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = D(t);
      l && Vi(() => {
        var u, c;
        if (!s.value)
          return;
        let m = D(r), g = (u = e.value) == null ? void 0 : u.activeElement;
        if (m) {
          if (m === g) {
            i.value = g;
            return;
          }
        } else if (l.contains(g)) {
          i.value = g;
          return;
        }
        m ? We(m) : Lt(l, qe.First | qe.NoScroll) === Ri.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function fu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Ni((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = Ui(r);
    D(t) instanceof HTMLElement && o.add(D(t));
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Wi(o, u) ? (n.value = u, We(u)) : (a.preventDefault(), a.stopPropagation(), We(l)) : We(n.value);
  }, !0);
}
function Wi(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let pr = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function qn(e, t = y(!0)) {
  le((r) => {
    var n;
    if (!t.value)
      return;
    let i = D(e);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = ht.get(i)) != null ? a : 1;
      if (o === 1 ? ht.delete(i) : ht.set(i, o - 1), o !== 1)
        return;
      let l = pr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, pr.delete(i));
    });
    let s = (n = ht.get(i)) != null ? n : 0;
    ht.set(i, s + 1), s === 0 && (pr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let zi = Symbol("ForcePortalRootContext");
function pu() {
  return z(zi, !1);
}
let Sr = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return de(zi, e.force), () => {
    let { force: n, ...i } = e;
    return Z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function hu(e) {
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
let Gi = Y({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = x(() => Tt(n)), s = pu(), a = z(Xi, null), o = y(s === !0 || a == null ? hu(n.value) : a.resolveTarget());
  return le(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), me(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return N(ii, { to: o.value }, Z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Xi = Symbol("PortalGroupContext"), mu = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Is({ resolveTarget() {
    return e.target;
  } });
  return de(Xi, n), () => {
    let { target: i, ...s } = e;
    return Z({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ki = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function vu() {
  return z(Ki, () => {
  });
}
function gu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = vu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  V(() => {
    ot(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), me(() => {
    t.value && s(1, e, r);
  }), de(Ki, s);
}
let Ji = Symbol("DescriptionContext");
function yu() {
  let e = z(Ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function bu({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return de(Ji, { register: i, slot: e, name: t, props: r }), x(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ye()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = yu();
  return V(() => me(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [m, g]) => Object.assign(c, { [m]: ee(g) }), {}), id: o };
    return Z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function wu(e) {
  let t = Ps(e.getSnapshot());
  return me(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Yt() {
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
  }, style(r, n, i) {
    let s = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: s });
    });
  }, group(r) {
    let n = Yt();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let i of e.splice(n, 1))
          i();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function Su(e, t) {
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
function Ou() {
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
function $u() {
  if (!su())
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
function Eu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Tu(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let He = Su(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Yt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Tu(r) }, i = [$u(), Ou(), Eu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
He.subscribe(() => {
  let e = He.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && He.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && He.dispatch("TEARDOWN", r);
  }
});
function xu(e, t, r) {
  let n = wu(He), i = x(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return ot([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    He.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (He.dispatch("POP", o ?? s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var _u = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_u || {});
let $r = Symbol("DialogContext");
function xt(e) {
  let t = z($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xt), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Yr = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ye()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  V(() => {
    a.value = !0;
  });
  let o = y(0), l = Qr(), u = x(() => e.open === qt && l !== null ? (l.value & G.Open) === G.Open : e.open), c = y(null), m = y(null), g = x(() => Tt(c));
  if (i({ el: c, $el: c }), !(e.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e.open}`);
  let f = x(() => a.value && u.value ? 0 : 1), p = x(() => f.value === 0), h = x(() => o.value > 1), d = z($r, null) !== null, b = x(() => h.value ? "parent" : "leaf"), O = x(() => l !== null ? (l.value & G.Closing) === G.Closing : !1), I = x(() => d || O.value ? !1 : p.value), S = x(() => {
    var E, T, A;
    return (A = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? T : []).find((C) => C.id === "headlessui-portal-root" ? !1 : C.contains(D(m)) && C instanceof HTMLElement)) != null ? A : null;
  });
  qn(S, I);
  let $ = x(() => h.value ? !0 : p.value), w = x(() => {
    var E, T, A;
    return (A = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? T : []).find((C) => C.contains(D(m)) && C instanceof HTMLElement)) != null ? A : null;
  });
  qn(w, $), gu({ type: "Dialog", enabled: x(() => f.value === 0), element: c, onUpdate: (E, T) => {
    if (T === "Dialog")
      return fe(E, { [Or.Add]: () => o.value += 1, [Or.Remove]: () => o.value -= 1 });
  } });
  let _ = bu({ name: "DialogDescription", slot: x(() => ({ open: u.value })) }), q = y(null), P = { titleId: q, panelRef: y(null), dialogState: f, setTitleId(E) {
    q.value !== E && (q.value = E);
  }, close() {
    t("close", !1);
  } };
  de($r, P);
  function k() {
    var E, T, A;
    return [...Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? T : []).filter((C) => !(C === document.body || C === document.head || !(C instanceof HTMLElement) || C.contains(D(m)) || P.panelRef.value && C.contains(P.panelRef.value))), (A = P.panelRef.value) != null ? A : c.value];
  }
  let M = x(() => !(!p.value || h.value));
  iu(() => k(), (E, T) => {
    P.close(), Oe(() => T == null ? void 0 : T.focus());
  }, M);
  let U = x(() => !(h.value || f.value !== 0));
  Ni((s = g.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    U.value && (E.defaultPrevented || E.key === ji.Escape && (E.preventDefault(), E.stopPropagation(), P.close()));
  });
  let F = x(() => !(O.value || f.value !== 0 || d));
  return xu(g, F, (E) => {
    var T;
    return { containers: [...(T = E.containers) != null ? T : [], k] };
  }), le((E) => {
    if (f.value !== 0)
      return;
    let T = D(c);
    if (!T)
      return;
    let A = new ResizeObserver((C) => {
      for (let ge of C) {
        let H = ge.target.getBoundingClientRect();
        H.x === 0 && H.y === 0 && H.width === 0 && H.height === 0 && P.close();
      }
    });
    A.observe(T), E(() => A.disconnect());
  }), () => {
    let { id: E, open: T, initialFocus: A, ...C } = e, ge = { ...r, ref: c, id: E, role: "dialog", "aria-modal": f.value === 0 ? !0 : void 0, "aria-labelledby": q.value, "aria-describedby": _.value }, H = { open: f.value === 0 };
    return N(Sr, { force: !0 }, () => [N(Gi, () => N(mu, { target: c.value }, () => N(Sr, { force: !1 }, () => N(pt, { initialFocus: A, containers: k, features: p.value ? fe(b.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => Z({ ourProps: ge, theirProps: C, slot: H, attrs: r, slots: n, visible: f.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), N(wr, { features: Nt.Hidden, ref: m })]);
  };
} });
Y({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Ye()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = xt("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return Z({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
Y({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Ye()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = xt("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), V(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return N(Sr, { force: !0 }, () => N(Gi, () => Z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Zr = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ye()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = xt("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return Z({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
Y({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Ye()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = xt("DialogTitle");
  return V(() => {
    n.setTitleId(e.id), me(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return Z({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Au(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function hr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ct(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Er = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Er || {});
function Iu(e, t) {
  let r = Yt();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Cn(e, t, r, n, i, s) {
  let a = Yt(), o = s !== void 0 ? Au(s) : () => {
  };
  return Ct(e, ...i), hr(e, ...t, ...r), a.nextFrame(() => {
    Ct(e, ...r), hr(e, ...n), a.add(Iu(e, (l) => (Ct(e, ...n, ...t), hr(e, ...i), o(l))));
  }), a.add(() => Ct(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ne(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let en = Symbol("TransitionContext");
var Pu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Pu || {});
function qu() {
  return z(en, null) !== null;
}
function Cu() {
  let e = z(en, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Fu() {
  let e = z(tn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let tn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Qi(e) {
  let t = y([]), r = y(!1);
  V(() => r.value = !0), me(() => r.value = !1);
  function n(s, a = Ce.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (fe(a, { [Ce.Unmount]() {
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
let Yi = Dt.RenderStrategy, lt = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = y(0);
  function a() {
    s.value |= G.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~G.Opening, t("afterEnter");
  }
  function l() {
    s.value |= G.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~G.Closing, t("afterLeave");
  }
  if (!qu() && zl())
    return () => N(ut, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), m = x(() => e.unmount ? Ce.Unmount : Ce.Hidden);
  i({ el: c, $el: c });
  let { show: g, appear: f } = Cu(), { register: p, unregister: h } = Fu(), d = y(g.value ? "visible" : "hidden"), b = { value: !0 }, O = Ye(), I = { value: !1 }, S = Qi(() => {
    !I.value && d.value !== "hidden" && (d.value = "hidden", h(O), u());
  });
  V(() => {
    let F = p(O);
    me(F);
  }), le(() => {
    if (m.value === Ce.Hidden && O) {
      if (g.value && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      fe(d.value, { hidden: () => h(O), visible: () => p(O) });
    }
  });
  let $ = Ne(e.enter), w = Ne(e.enterFrom), _ = Ne(e.enterTo), q = Ne(e.entered), P = Ne(e.leave), k = Ne(e.leaveFrom), M = Ne(e.leaveTo);
  V(() => {
    le(() => {
      if (d.value === "visible") {
        let F = D(c);
        if (F instanceof Comment && F.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function U(F) {
    let E = b.value && !f.value, T = D(c);
    !T || !(T instanceof HTMLElement) || E || (I.value = !0, g.value && a(), g.value || l(), F(g.value ? Cn(T, $, w, _, q, (A) => {
      I.value = !1, A === Er.Finished && o();
    }) : Cn(T, P, k, M, q, (A) => {
      I.value = !1, A === Er.Finished && (Zt(S) || (d.value = "hidden", h(O), u()));
    })));
  }
  return V(() => {
    ot([g], (F, E, T) => {
      U(T), b.value = !1;
    }, { immediate: !0 });
  }), de(tn, S), Gl(x(() => fe(d.value, { visible: G.Open, hidden: G.Closed }) | s.value)), () => {
    let { appear: F, show: E, enter: T, enterFrom: A, enterTo: C, entered: ge, leave: H, leaveFrom: ct, leaveTo: At, ...Ae } = e, Ze = { ref: c }, Ie = { ...Ae, ...f.value && g.value && Et.isServer ? { class: qs([r.class, Ae.class, ...$, ...w]) } : {} };
    return Z({ theirProps: Ie, ourProps: Ze, slot: {}, slots: n, attrs: r, features: Yi, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), ku = lt, ut = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Qr(), s = x(() => e.show === null && i !== null ? (i.value & G.Open) === G.Open : e.show);
  le(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = Qi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: x(() => e.appear || !l.value) };
  return V(() => {
    le(() => {
      l.value = !1, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), de(tn, o), de(en, u), () => {
    let c = Bi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return Z({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [N(ku, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...m, ...c }, n.default)] }, attrs: {}, features: Yi, visible: a.value === "visible", name: "Transition" });
  };
} });
const Lu = {
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
      this.passwordError = "", ne.post(this.confirmPasswordRoute, { password: e }, { headers: {
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
          if ((await ne.get(this.confirmedPasswordStatusRoute)).status === 200) {
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
      // These HeadlessUI exports will be removed in v1.0
      Dialog: Yr,
      DialogPanel: Zr,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
};
function Zi(e, t) {
  t = Jr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$t(t[r++])];
  return r && r == n ? e : void 0;
}
function be(e, t, r) {
  var n = e == null ? void 0 : Zi(e, t);
  return n === void 0 ? r : n;
}
var Bu = function() {
  try {
    var e = Qe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Fn = Bu;
function es(e, t, r) {
  t == "__proto__" && Fn ? Fn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ju = Object.prototype, Mu = ju.hasOwnProperty;
function Ru(e, t, r) {
  var n = e[t];
  (!(Mu.call(e, t) && Gr(n, r)) || r === void 0 && !(t in e)) && es(e, t, r);
}
function Du(e, t, r, n) {
  if (!J(e))
    return e;
  t = Jr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = $t(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = J(c) ? c : Br(t[i + 1]) ? [] : {});
    }
    Ru(o, l, u), o = o[l];
  }
  return e;
}
function St(e, t, r) {
  return e == null ? e : Du(e, t, r);
}
const Nu = {
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
          return be(e.values, r);
        },
        set(t, r, n) {
          St(e.values, r, n);
        }
      })
    ) : null;
  }
}, Vu = {
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
          return be(e.stores, r);
        },
        set(t, r, n) {
          St(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Uu = function() {
  return ve.Date.now();
};
const mr = Uu;
var Hu = /\s/;
function Wu(e) {
  for (var t = e.length; t-- && Hu.test(e.charAt(t)); )
    ;
  return t;
}
var zu = /^\s+/;
function Gu(e) {
  return e && e.slice(0, Wu(e) + 1).replace(zu, "");
}
var kn = 0 / 0, Xu = /^[-+]0x[0-9a-f]+$/i, Ku = /^0b[01]+$/i, Ju = /^0o[0-7]+$/i, Qu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Xt(e))
    return kn;
  if (J(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = J(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Gu(e);
  var r = Ku.test(e);
  return r || Ju.test(e) ? Qu(e.slice(2), r ? 2 : 8) : Xu.test(e) ? kn : +e;
}
var Yu = "Expected a function", Zu = Math.max, ec = Math.min;
function er(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, m = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Yu);
  t = Tr(t) || 0, J(r) && (c = !!r.leading, m = "maxWait" in r, s = m ? Zu(Tr(r.maxWait) || 0, t) : s, g = "trailing" in r ? !!r.trailing : g);
  function f(w) {
    var _ = n, q = i;
    return n = i = void 0, u = w, a = e.apply(q, _), a;
  }
  function p(w) {
    return u = w, o = setTimeout(b, t), c ? f(w) : a;
  }
  function h(w) {
    var _ = w - l, q = w - u, P = t - _;
    return m ? ec(P, s - q) : P;
  }
  function d(w) {
    var _ = w - l, q = w - u;
    return l === void 0 || _ >= t || _ < 0 || m && q >= s;
  }
  function b() {
    var w = mr();
    if (d(w))
      return O(w);
    o = setTimeout(b, h(w));
  }
  function O(w) {
    return o = void 0, g && n ? f(w) : (n = i = void 0, a);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : O(mr());
  }
  function $() {
    var w = mr(), _ = d(w);
    if (n = arguments, i = this, l = w, _) {
      if (o === void 0)
        return p(l);
      if (m)
        return clearTimeout(o), o = setTimeout(b, t), f(l);
    }
    return o === void 0 && (o = setTimeout(b, t)), a;
  }
  return $.cancel = I, $.flush = S, $;
}
const tc = {
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
      Object.keys(this.request).length > 0 && (t.data = this.request), ne(t).then((r) => {
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
}, rc = {
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
      Dialog: Yr,
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
    return V(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Cs(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (j(), ce("div", {
      ref_key: "root",
      ref: n
    }, [
      K(s.$slots, "default")
    ], 512));
  }
};
function Q(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xe(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function re(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function rn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var ze = Math.max, Vt = Math.min, nt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function rs() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && re(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = Xe(e) ? Q(e) : window, o = a.visualViewport, l = !rs() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, m = n.width / i, g = n.height / s;
  return {
    width: m,
    height: g,
    top: c,
    right: u + m,
    bottom: c + g,
    left: u,
    x: u,
    y: c
  };
}
function nn(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function nc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ic(e) {
  return e === Q(e) || !re(e) ? nn(e) : nc(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Me(e) {
  return ((Xe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sn(e) {
  return it(Me(e)).left + nn(e).scrollLeft;
}
function Ee(e) {
  return Q(e).getComputedStyle(e);
}
function an(e) {
  var t = Ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function sc(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ac(e, t, r) {
  r === void 0 && (r = !1);
  var n = re(t), i = re(t) && sc(t), s = Me(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  an(s)) && (o = ic(t)), re(t) ? (l = it(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = sn(s))), {
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
function tr(e) {
  return pe(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (rn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Me(e)
  );
}
function is(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : re(e) && an(e) ? e : is(tr(e));
}
function yt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = is(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Q(n), a = i ? [s].concat(s.visualViewport || [], an(n) ? n : []) : n, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(yt(tr(a)))
  );
}
function oc(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function Ln(e) {
  return !re(e) || // https://github.com/popperjs/popper-core/issues/837
  Ee(e).position === "fixed" ? null : e.offsetParent;
}
function lc(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && re(e)) {
    var n = Ee(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (rn(i) && (i = i.host); re(i) && ["html", "body"].indexOf(pe(i)) < 0; ) {
    var s = Ee(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = Q(e), r = Ln(e); r && oc(r) && Ee(r).position === "static"; )
    r = Ln(r);
  return r && (pe(r) === "html" || pe(r) === "body" && Ee(r).position === "static") ? t : r || lc(e) || t;
}
var oe = "top", he = "bottom", Be = "right", we = "left", on = "auto", nr = [oe, he, Be, we], st = "start", Ot = "end", uc = "clippingParents", ss = "viewport", mt = "popper", cc = "reference", Bn = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + Ot]);
}, []), dc = /* @__PURE__ */ [].concat(nr, [on]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + Ot]);
}, []), fc = "beforeRead", pc = "read", hc = "afterRead", mc = "beforeMain", vc = "main", gc = "afterMain", yc = "beforeWrite", bc = "write", wc = "afterWrite", Sc = [fc, pc, hc, mc, vc, gc, yc, bc, wc];
function Oc(e) {
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
function $c(e) {
  var t = Oc(e);
  return Sc.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ec(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Tc(e) {
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
function xc(e, t) {
  var r = Q(e), n = Me(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = rs();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + sn(e),
    y: l
  };
}
function _c(e) {
  var t, r = Me(e), n = nn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = ze(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ze(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + sn(e), l = -n.scrollTop;
  return Ee(i || r).direction === "rtl" && (o += ze(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Ac(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && rn(r)) {
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
function Ic(e, t) {
  var r = it(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === ss ? _r(xc(e, r)) : Xe(t) ? Ic(t, r) : _r(_c(Me(e)));
}
function Pc(e) {
  var t = yt(tr(e)), r = ["absolute", "fixed"].indexOf(Ee(e).position) >= 0, n = r && re(e) ? rr(e) : e;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Ac(i, n) && pe(i) !== "body";
  }) : [];
}
function qc(e, t, r, n) {
  var i = t === "clippingParents" ? Pc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = ze(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, jn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Fe(e) {
  return e.split("-")[0];
}
function at(e) {
  return e.split("-")[1];
}
function as(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function os(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? Fe(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case oe:
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
    case Be:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case we:
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
      case Ot:
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
function Cc(e) {
  return Object.assign({}, ls(), e);
}
function Fc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function ln(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? uc : o, u = r.rootBoundary, c = u === void 0 ? ss : u, m = r.elementContext, g = m === void 0 ? mt : m, f = r.altBoundary, p = f === void 0 ? !1 : f, h = r.padding, d = h === void 0 ? 0 : h, b = Cc(typeof d != "number" ? d : Fc(d, nr)), O = g === mt ? cc : mt, I = e.rects.popper, S = e.elements[p ? O : g], $ = qc(Xe(S) ? S : S.contextElement || Me(e.elements.popper), l, c, a), w = it(e.elements.reference), _ = os({
    reference: w,
    element: I,
    strategy: "absolute",
    placement: i
  }), q = _r(Object.assign({}, I, _)), P = g === mt ? q : w, k = {
    top: $.top - P.top + b.top,
    bottom: P.bottom - $.bottom + b.bottom,
    left: $.left - P.left + b.left,
    right: P.right - $.right + b.right
  }, M = e.modifiersData.offset;
  if (g === mt && M) {
    var U = M[i];
    Object.keys(k).forEach(function(F) {
      var E = [Be, he].indexOf(F) >= 0 ? 1 : -1, T = [oe, he].indexOf(F) >= 0 ? "y" : "x";
      k[F] += U[T] * E;
    });
  }
  return k;
}
var Mn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Rn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function kc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Mn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Mn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, f = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        h(), c.options = Object.assign({}, s, c.options, O), c.scrollParents = {
          reference: Xe(o) ? yt(o) : o.contextElement ? yt(o.contextElement) : [],
          popper: yt(l)
        };
        var I = $c(Tc([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = I.filter(function(S) {
          return S.enabled;
        }), p(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var b = c.elements, O = b.reference, I = b.popper;
          if (Rn(O, I)) {
            c.rects = {
              reference: ac(O, rr(I), c.options.strategy === "fixed"),
              popper: ns(I)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(k) {
              return c.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var $ = c.orderedModifiers[S], w = $.fn, _ = $.options, q = _ === void 0 ? {} : _, P = $.name;
              typeof w == "function" && (c = w({
                state: c,
                options: q,
                name: P,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ec(function() {
        return new Promise(function(d) {
          f.forceUpdate(), d(c);
        });
      }),
      destroy: function() {
        h(), g = !0;
      }
    };
    if (!Rn(o, l))
      return f;
    f.setOptions(u).then(function(d) {
      !g && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function p() {
      c.orderedModifiers.forEach(function(d) {
        var b = d.name, O = d.options, I = O === void 0 ? {} : O, S = d.effect;
        if (typeof S == "function") {
          var $ = S({
            state: c,
            name: b,
            instance: f,
            options: I
          }), w = function() {
          };
          m.push($ || w);
        }
      });
    }
    function h() {
      m.forEach(function(d) {
        return d();
      }), m = [];
    }
    return f;
  };
}
var Ft = {
  passive: !0
};
function Lc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), o && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), o && l.removeEventListener("resize", r.update, Ft);
  };
}
const Bc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Lc,
  data: {}
};
function jc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = os({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jc,
  data: {}
};
var Rc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Dc(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: nt(r * i) / i || 0,
    y: nt(n * i) / i || 0
  };
}
function Dn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, m = e.isFixed, g = a.x, f = g === void 0 ? 0 : g, p = a.y, h = p === void 0 ? 0 : p, d = typeof c == "function" ? c({
    x: f,
    y: h
  }) : {
    x: f,
    y: h
  };
  f = d.x, h = d.y;
  var b = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), I = we, S = oe, $ = window;
  if (u) {
    var w = rr(r), _ = "clientHeight", q = "clientWidth";
    if (w === Q(r) && (w = Me(r), Ee(w).position !== "static" && o === "absolute" && (_ = "scrollHeight", q = "scrollWidth")), w = w, i === oe || (i === we || i === Be) && s === Ot) {
      S = he;
      var P = m && w === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      h -= P - n.height, h *= l ? 1 : -1;
    }
    if (i === we || (i === oe || i === he) && s === Ot) {
      I = Be;
      var k = m && w === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[q]
      );
      f -= k - n.width, f *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: o
  }, u && Rc), U = c === !0 ? Dc({
    x: f,
    y: h
  }, Q(r)) : {
    x: f,
    y: h
  };
  if (f = U.x, h = U.y, l) {
    var F;
    return Object.assign({}, M, (F = {}, F[S] = O ? "0" : "", F[I] = b ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + h + "px)" : "translate3d(" + f + "px, " + h + "px, 0)", F));
  }
  return Object.assign({}, M, (t = {}, t[S] = O ? h + "px" : "", t[I] = b ? f + "px" : "", t.transform = "", t));
}
function Nc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o, u = {
    placement: Fe(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Vc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Nc,
  data: {}
};
function Uc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !pe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Hc(e) {
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
      !re(i) || !pe(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Wc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Uc,
  effect: Hc,
  requires: ["computeStyles"]
};
var zc = [Bc, Mc, Vc, Wc], Gc = /* @__PURE__ */ kc({
  defaultModifiers: zc
});
function Xc(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e, t, r) {
  return ze(e, Vt(t, r));
}
function Kc(e, t, r) {
  var n = Bt(e, t, r);
  return n > r ? r : n;
}
function Jc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, m = r.padding, g = r.tether, f = g === void 0 ? !0 : g, p = r.tetherOffset, h = p === void 0 ? 0 : p, d = ln(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: c
  }), b = Fe(t.placement), O = at(t.placement), I = !O, S = as(b), $ = Xc(S), w = t.modifiersData.popperOffsets, _ = t.rects.reference, q = t.rects.popper, P = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, k = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var F, E = S === "y" ? oe : we, T = S === "y" ? he : Be, A = S === "y" ? "height" : "width", C = w[S], ge = C + d[E], H = C - d[T], ct = f ? -q[A] / 2 : 0, At = O === st ? _[A] : q[A], Ae = O === st ? -q[A] : -_[A], Ze = t.elements.arrow, Ie = f && Ze ? ns(Ze) : {
        width: 0,
        height: 0
      }, Pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ls(), dt = Pe[E], It = Pe[T], Re = Bt(0, _[A], Ie[A]), sr = I ? _[A] / 2 - ct - Re - dt - k.mainAxis : At - Re - dt - k.mainAxis, ws = I ? -_[A] / 2 + ct + Re + It + k.mainAxis : Ae + Re + It + k.mainAxis, ar = t.elements.arrow && rr(t.elements.arrow), Ss = ar ? S === "y" ? ar.clientTop || 0 : ar.clientLeft || 0 : 0, fn = (F = M == null ? void 0 : M[S]) != null ? F : 0, Os = C + sr - fn - Ss, $s = C + ws - fn, pn = Bt(f ? Vt(ge, Os) : ge, C, f ? ze(H, $s) : H);
      w[S] = pn, U[S] = pn - C;
    }
    if (o) {
      var hn, Es = S === "x" ? oe : we, Ts = S === "x" ? he : Be, De = w[$], Pt = $ === "y" ? "height" : "width", mn = De + d[Es], vn = De - d[Ts], or = [oe, we].indexOf(b) !== -1, gn = (hn = M == null ? void 0 : M[$]) != null ? hn : 0, yn = or ? mn : De - _[Pt] - q[Pt] - gn + k.altAxis, bn = or ? De + _[Pt] + q[Pt] - gn - k.altAxis : vn, wn = f && or ? Kc(yn, De, bn) : Bt(f ? yn : mn, De, f ? bn : vn);
      w[$] = wn, U[$] = wn - De;
    }
    t.modifiersData[n] = U;
  }
}
const Qc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jc,
  requiresIfExists: ["offset"]
};
var Yc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Yc[t];
  });
}
var Zc = {
  start: "end",
  end: "start"
};
function Nn(e) {
  return e.replace(/start|end/g, function(t) {
    return Zc[t];
  });
}
function ed(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? dc : l, c = at(n), m = c ? o ? Bn : Bn.filter(function(p) {
    return at(p) === c;
  }) : nr, g = m.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  g.length === 0 && (g = m);
  var f = g.reduce(function(p, h) {
    return p[h] = ln(e, {
      placement: h,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Fe(h)], p;
  }, {});
  return Object.keys(f).sort(function(p, h) {
    return f[p] - f[h];
  });
}
function td(e) {
  if (Fe(e) === on)
    return [];
  var t = jt(e);
  return [Nn(e), t, Nn(t)];
}
function rd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, m = r.rootBoundary, g = r.altBoundary, f = r.flipVariations, p = f === void 0 ? !0 : f, h = r.allowedAutoPlacements, d = t.options.placement, b = Fe(d), O = b === d, I = l || (O || !p ? [jt(d)] : td(d)), S = [d].concat(I).reduce(function(Ie, Pe) {
      return Ie.concat(Fe(Pe) === on ? ed(t, {
        placement: Pe,
        boundary: c,
        rootBoundary: m,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: h
      }) : Pe);
    }, []), $ = t.rects.reference, w = t.rects.popper, _ = /* @__PURE__ */ new Map(), q = !0, P = S[0], k = 0; k < S.length; k++) {
      var M = S[k], U = Fe(M), F = at(M) === st, E = [oe, he].indexOf(U) >= 0, T = E ? "width" : "height", A = ln(t, {
        placement: M,
        boundary: c,
        rootBoundary: m,
        altBoundary: g,
        padding: u
      }), C = E ? F ? Be : we : F ? he : oe;
      $[T] > w[T] && (C = jt(C));
      var ge = jt(C), H = [];
      if (s && H.push(A[U] <= 0), o && H.push(A[C] <= 0, A[ge] <= 0), H.every(function(Ie) {
        return Ie;
      })) {
        P = M, q = !1;
        break;
      }
      _.set(M, H);
    }
    if (q)
      for (var ct = p ? 3 : 1, At = function(Pe) {
        var dt = S.find(function(It) {
          var Re = _.get(It);
          if (Re)
            return Re.slice(0, Pe).every(function(sr) {
              return sr;
            });
        });
        if (dt)
          return P = dt, "break";
      }, Ae = ct; Ae > 0; Ae--) {
        var Ze = At(Ae);
        if (Ze === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const nd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: rd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, _e = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, id = {
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
    this.teleport && await Oe();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Gc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [nd, Qc],
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
}, sd = { ref: "tooltip" };
function ad(e, t, r, n, i, s) {
  const a = Lr("OnClickOutside");
  return j(), X(a, {
    style: Mt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: si(() => [
      gr("div", {
        ref: "button",
        style: Mt(s.buttonStyle)
      }, [
        K(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      gr("div", sd, [
        K(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const od = /* @__PURE__ */ _e(id, [["render", ad]]), ld = {
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
    const t = z("$splade") || {}, r = z("$spladeOptions") || {};
    return (n, i) => ee(t).isSsr ? (j(), X(ue, {
      key: e.keepAliveKey,
      html: ee(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (j(), X(ni, {
      key: 0,
      max: ee(r).max_keep_alive
    }, [
      (j(), X(ue, {
        key: e.keepAliveKey,
        html: ee(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function us(e) {
  return e && e.length ? e[0] : void 0;
}
const ud = {
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
        return W(e.values, t);
      },
      first(t) {
        return us(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, cd = {
  inject: ["stack"],
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
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["subscribed", "event"],
  data() {
    return {
      subscribed: !1,
      subscription: null,
      subscriptions: [],
      events: [],
      pendingVisit: null,
      pendingRefresh: !1
    };
  },
  computed: {
    currentStack() {
      return v.currentStack.value;
    }
  },
  watch: {
    currentStack() {
      this.handlePendingVisit(), this.handlePendingRefresh();
    },
    pendingVisit() {
      this.handlePendingVisit();
    },
    pendingRefresh() {
      this.handlePendingRefresh();
    }
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription ? this.bindListeners() : console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
  },
  methods: {
    handlePendingVisit() {
      this.pendingVisit && v.currentStack.value === this.stack && (v.visit(this.pendingVisit), this.pendingVisit = null);
    },
    handlePendingRefresh() {
      this.pendingRefresh && v.currentStack.value === this.stack && (v.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll), this.pendingRefresh = !1);
    },
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.preserveScroll", i = "splade.redirect", s = "splade.refresh", a = "splade.toast";
          let o = null, l = !1, u = !1, c = [];
          te(r, (m) => {
            J(m) && (i in m && (o = m[i]), n in m && (l = m[n]), s in m && (u = m[s]), a in m && c.push(m));
          }), o ? this.pendingVisit = o : u ? this.pendingRefresh = { preserveScroll: l } : this.events.push({ name: e, data: r }), c.length > 0 && c.forEach((m) => {
            v.pushToast(m);
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
function dd() {
  this.__data__ = new Te(), this.size = 0;
}
function fd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function pd(e) {
  return this.__data__.get(e);
}
function hd(e) {
  return this.__data__.has(e);
}
var md = 200;
function vd(e, t) {
  var r = this.__data__;
  if (r instanceof Te) {
    var n = r.__data__;
    if (!wt || n.length < md - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new xe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Se(e) {
  var t = this.__data__ = new Te(e);
  this.size = t.size;
}
Se.prototype.clear = dd;
Se.prototype.delete = fd;
Se.prototype.get = pd;
Se.prototype.has = hd;
Se.prototype.set = vd;
var gd = "__lodash_hash_undefined__";
function yd(e) {
  return this.__data__.set(e, gd), this;
}
function bd(e) {
  return this.__data__.has(e);
}
function Ut(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new xe(); ++t < r; )
    this.add(e[t]);
}
Ut.prototype.add = Ut.prototype.push = yd;
Ut.prototype.has = bd;
function wd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Sd(e, t) {
  return e.has(t);
}
var Od = 1, $d = 2;
function cs(e, t, r, n, i, s) {
  var a = r & Od, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var m = -1, g = !0, f = r & $d ? new Ut() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < o; ) {
    var p = e[m], h = t[m];
    if (n)
      var d = a ? n(h, p, m, t, e, s) : n(p, h, m, e, t, s);
    if (d !== void 0) {
      if (d)
        continue;
      g = !1;
      break;
    }
    if (f) {
      if (!wd(t, function(b, O) {
        if (!Sd(f, O) && (p === b || i(p, b, r, n, s)))
          return f.push(O);
      })) {
        g = !1;
        break;
      }
    } else if (!(p === h || i(p, h, r, n, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
var Ed = ve.Uint8Array;
const Vn = Ed;
function Td(e) {
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
var _d = 1, Ad = 2, Id = "[object Boolean]", Pd = "[object Date]", qd = "[object Error]", Cd = "[object Map]", Fd = "[object Number]", kd = "[object RegExp]", Ld = "[object Set]", Bd = "[object String]", jd = "[object Symbol]", Md = "[object ArrayBuffer]", Rd = "[object DataView]", Un = ke ? ke.prototype : void 0, vr = Un ? Un.valueOf : void 0;
function Dd(e, t, r, n, i, s, a) {
  switch (r) {
    case Rd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Md:
      return !(e.byteLength != t.byteLength || !s(new Vn(e), new Vn(t)));
    case Id:
    case Pd:
    case Fd:
      return Gr(+e, +t);
    case qd:
      return e.name == t.name && e.message == t.message;
    case kd:
    case Bd:
      return e == t + "";
    case Cd:
      var o = Td;
    case Ld:
      var l = n & _d;
      if (o || (o = xd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Ad, a.set(e, t);
      var c = cs(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case jd:
      if (vr)
        return vr.call(e) == vr.call(t);
  }
  return !1;
}
function Nd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Vd(e, t, r) {
  var n = t(e);
  return R(e) ? n : Nd(n, r(e));
}
function ds(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Ud() {
  return [];
}
var Hd = Object.prototype, Wd = Hd.propertyIsEnumerable, Hn = Object.getOwnPropertySymbols, zd = Hn ? function(e) {
  return e == null ? [] : (e = Object(e), ds(Hn(e), function(t) {
    return Wd.call(e, t);
  }));
} : Ud;
const Gd = zd;
function Wn(e) {
  return Vd(e, Wt, Gd);
}
var Xd = 1, Kd = Object.prototype, Jd = Kd.hasOwnProperty;
function Qd(e, t, r, n, i, s) {
  var a = r & Xd, o = Wn(e), l = o.length, u = Wn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var m = l; m--; ) {
    var g = o[m];
    if (!(a ? g in t : Jd.call(t, g)))
      return !1;
  }
  var f = s.get(e), p = s.get(t);
  if (f && p)
    return f == t && p == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var d = a; ++m < l; ) {
    g = o[m];
    var b = e[g], O = t[g];
    if (n)
      var I = a ? n(O, b, g, t, e, s) : n(b, O, g, e, t, s);
    if (!(I === void 0 ? b === O || i(b, O, r, n, s) : I)) {
      h = !1;
      break;
    }
    d || (d = g == "constructor");
  }
  if (h && !d) {
    var S = e.constructor, $ = t.constructor;
    S != $ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof $ == "function" && $ instanceof $) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var Yd = Qe(ve, "DataView");
const Ar = Yd;
var Zd = Qe(ve, "Promise");
const Ir = Zd;
var ef = Qe(ve, "Set");
const Pr = ef;
var tf = Qe(ve, "WeakMap");
const qr = tf;
var zn = "[object Map]", rf = "[object Object]", Gn = "[object Promise]", Xn = "[object Set]", Kn = "[object WeakMap]", Jn = "[object DataView]", nf = Je(Ar), sf = Je(wt), af = Je(Ir), of = Je(Pr), lf = Je(qr), Ve = je;
(Ar && Ve(new Ar(new ArrayBuffer(1))) != Jn || wt && Ve(new wt()) != zn || Ir && Ve(Ir.resolve()) != Gn || Pr && Ve(new Pr()) != Xn || qr && Ve(new qr()) != Kn) && (Ve = function(e) {
  var t = je(e), r = t == rf ? e.constructor : void 0, n = r ? Je(r) : "";
  if (n)
    switch (n) {
      case nf:
        return Jn;
      case sf:
        return zn;
      case af:
        return Gn;
      case of:
        return Xn;
      case lf:
        return Kn;
    }
  return t;
});
const Qn = Ve;
var uf = 1, Yn = "[object Arguments]", Zn = "[object Array]", kt = "[object Object]", cf = Object.prototype, ei = cf.hasOwnProperty;
function df(e, t, r, n, i, s) {
  var a = R(e), o = R(t), l = a ? Zn : Qn(e), u = o ? Zn : Qn(t);
  l = l == Yn ? kt : l, u = u == Yn ? kt : u;
  var c = l == kt, m = u == kt, g = l == u;
  if (g && yr(e)) {
    if (!yr(t))
      return !1;
    a = !0, c = !1;
  }
  if (g && !c)
    return s || (s = new Se()), a || fi(e) ? cs(e, t, r, n, i, s) : Dd(e, t, l, r, n, i, s);
  if (!(r & uf)) {
    var f = c && ei.call(e, "__wrapped__"), p = m && ei.call(t, "__wrapped__");
    if (f || p) {
      var h = f ? e.value() : e, d = p ? t.value() : t;
      return s || (s = new Se()), i(h, d, r, n, s);
    }
  }
  return g ? (s || (s = new Se()), Qd(e, t, r, n, i, s)) : !1;
}
function ir(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Le(e) && !Le(t) ? e !== e && t !== t : df(e, t, r, n, ir, i);
}
var ff = 1, pf = 2;
function hf(e, t, r, n) {
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
      var m = new Se();
      if (n)
        var g = n(u, c, l, e, t, m);
      if (!(g === void 0 ? ir(c, u, ff | pf, n, m) : g))
        return !1;
    }
  }
  return !0;
}
function fs(e) {
  return e === e && !J(e);
}
function mf(e) {
  for (var t = Wt(e), r = t.length; r--; ) {
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
function vf(e) {
  var t = mf(e);
  return t.length == 1 && t[0][2] ? ps(t[0][0], t[0][1]) : function(r) {
    return r === e || hf(r, e, t);
  };
}
function gf(e, t) {
  return e != null && t in Object(e);
}
function yf(e, t) {
  return e != null && Fi(e, t, gf);
}
var bf = 1, wf = 2;
function Sf(e, t) {
  return zr(e) && fs(t) ? ps($t(e), t) : function(r) {
    var n = be(r, e);
    return n === void 0 && n === t ? yf(r, e) : ir(t, n, bf | wf);
  };
}
function Of(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function $f(e) {
  return function(t) {
    return Zi(t, e);
  };
}
function Ef(e) {
  return zr(e) ? Of($t(e)) : $f(e);
}
function _t(e) {
  return typeof e == "function" ? e : e == null ? hi : typeof e == "object" ? R(e) ? Sf(e[0], e[1]) : vf(e) : Ef(e);
}
function Tf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ht(t)) {
      var s = _t(r);
      t = Wt(t), r = function(o) {
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
var ti = 1 / 0, _f = 17976931348623157e292;
function Af(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ti || e === -ti) {
    var t = e < 0 ? -1 : 1;
    return t * _f;
  }
  return e === e ? e : 0;
}
function un(e) {
  var t = Af(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var If = Math.max;
function Pf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : un(r);
  return i < 0 && (i = If(n + i, 0)), xf(e, _t(t), i);
}
var qf = Tf(Pf);
const cn = qf, Cf = {
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
    /*
     * This extracts the encrypted string from the backend data.
     */
    extractMetadataFromExistingFile(e) {
      return e ? se(e) ? e : R(e) ? e.map(this.extractMetadataFromExistingFile) : J(e) ? e.options.metadata.metadata : null : null;
    },
    /**
     * This sets the existing files on the form.
     */
    setExisting(e) {
      this.handlesExistingFiles && (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    /**
     * This determines the order of all files, existing and new, and sets it on the form.
     */
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    /**
     * This is meant for external URLs.
     */
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
            // This handles to loading of the file preview of existing files.
            load: (a, o, l, u, c) => {
              const g = ne.CancelToken.source();
              return ne({
                url: a.preview_url,
                method: "GET",
                cancelToken: g.token,
                responseType: "blob"
              }).then((f) => {
                const p = new File([f.data], a.name, { type: a.type });
                o(p);
              }).catch(function(f) {
                axios.isCancel(f) || l(f);
              }), {
                abort: () => {
                  g.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, m, g) => {
            const f = new FormData();
            f.append("file", o, o.name);
            const h = ne.CancelToken.source();
            ne({
              url: r.server,
              method: "POST",
              data: f,
              cancelToken: h.token,
              onUploadProgress: (d) => {
                m(d.lengthComputable, d.loaded, d.total);
              }
            }).then((d) => {
              d.status >= 200 && d.status < 300 ? u(d.data) : c(d.statusText);
            }).catch(function(d) {
              var b;
              axios.isCancel(d) ? g() : c((b = d.response) == null ? void 0 : b.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ne({
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
}, Ff = { ref: "file" };
function kf(e, t, r, n, i, s) {
  return j(), ce("div", Ff, [
    K(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Lf = /* @__PURE__ */ _e(Cf, [["render", kf]]), Bf = {
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
        return W(e.values, t);
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
var jf = "[object Boolean]";
function vs(e) {
  return e === !0 || e === !1 || Le(e) && je(e) == jf;
}
function gs(e, t) {
  var r = {};
  return t = _t(t), Mr(e, function(n, i, s) {
    es(r, i, t(n, i, s));
  }), r;
}
function ys(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function et(e, t, r) {
  return e = Kr(e), r = r == null ? 0 : ys(un(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Mf = {
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
    keepModal: {
      type: Boolean,
      required: !1,
      default: !1
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
    },
    blob: {
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
      debounceFunction: null,
      response: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    /*
     * Fetches the raw validation errors from the Splade
     * instances based on the current stack.
     */
    rawErrors() {
      return v.validationErrors(this.stack);
    },
    /*
     * Flattens the raw errors.
     */
    errors() {
      return gs(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = er(() => {
      this.request(this.background);
    }, this.debounce);
  },
  /*
   * It loops through all missing attributes and tries to
   * find a sensible default for that attribute.
   */
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
      return St(this.values, e, t);
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
    /*
     * If a confirmation is needed, it first shows the
     * confirmation dialog and waits for the promise
     * before it performs the request.
     */
    submit(e) {
      if (this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
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
        !!this.requirePassword,
        this.requirePasswordOnce,
        !!this.confirmDanger
      ).then((t) => {
        if (!this.requirePassword) {
          this.request();
          return;
        }
        this.method.toUpperCase() !== "GET" && t && this.$put(
          se(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
          t
        ), this.request();
      }).catch(() => {
      });
    },
    /*
     * Maps the values into a FormData instance and then
     * performs an async request.
     */
    async request(e) {
      if (typeof e > "u" && (e = !1), this.$uploading) {
        console.log("Not submitting because there are still files uploading");
        return;
      }
      await this.$nextTick(), this.background ? this.processingInBackground = !0 : this.processing = !0, this.response = null, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = !1, this.recentlyUnsuccessful = !1, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : dn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0), this.stack > 0 && this.keepModal && (r["X-Splade-Modal"] = v.stackType(this.stack), r["X-Splade-Modal-Target"] = this.stack);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, { ...r, ...this.headers }, !1, this.blob).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
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
            const n = [
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
              "$response",
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
            ];
            return r === "$response" ? e.response : n.includes(r) || et(r, "__v_") ? e[r] : (!e.isMounted && !W(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), be(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Rf = {
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
  /*
   * Destroy the observer and Flatpickr instance to prevent memory leaks.
   */
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
}, Df = { ref: "input" };
function Nf(e, t, r, n, i, s) {
  return j(), ce("div", Df, [
    K(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Vf = /* @__PURE__ */ _e(Rf, [["render", Nf]]), Uf = {
  props: {
    options: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    },
    jsOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: !1
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    const e = this.$refs.jodit.querySelector("textarea");
    import("jodit").then((t) => {
      const r = Object.assign({ defaultMode: t.default.Jodit.MODE_WYSIWYG }, this.options, this.jsOptions);
      this.instance = t.default.Jodit.make(e, r), this.instance.value = this.modelValue, this.instance.events.on("change", (n) => this.$emit("update:modelValue", n)), this.dusk && this.instance.editor.setAttribute("dusk", this.dusk);
    });
  },
  beforeUnmount() {
    this.instance.destruct();
  }
}, Hf = { ref: "jodit" };
function Wf(e, t, r, n, i, s) {
  return j(), ce("div", Hf, [
    K(e.$slots, "default")
  ], 512);
}
const zf = /* @__PURE__ */ _e(Uf, [["render", Wf]]), Gf = {
  components: { Render: ue },
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
function Xf(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (j(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? K(e.$slots, "default", { key: 1 }) : Fr("", !0);
}
const Kf = /* @__PURE__ */ _e(Gf, [["render", Xf]]), Jf = ["href", "onClick"], Qf = {
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
    const t = e, r = z("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        vs(t.confirm) ? "" : t.confirm,
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
      const c = t.data instanceof FormData ? t.data : dn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(se(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (j(), ce("a", {
      href: e.href,
      onClick: Fs(i, ["prevent"])
    }, [
      K(a.$slots, "default")
    ], 8, Jf));
  }
}, Yf = {
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
      e || (this.staticAnimate = !0), this.isOpen = e;
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
      // These HeadlessUI exports will be removed in v1.0
      Dialog: Yr,
      DialogPanel: Zr,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Zf = {
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
}, ep = {
  components: { Render: ue },
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
function tp(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (j(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? K(e.$slots, "placeholder", { key: 1 }) : K(e.$slots, "default", { key: 2 });
}
const rp = /* @__PURE__ */ _e(ep, [["render", tp]]), np = {
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
function ip(e, t) {
  var r = -1, n = Ht(e) ? Array(e.length) : [];
  return Rr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function bs(e, t) {
  var r = R(e) ? Ci : ip;
  return r(e, _t(t));
}
const sp = {
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
    },
    selectFirstRemoteOption: {
      type: Boolean,
      required: !1,
      default: !1
    },
    resetOnNewRemoteUrl: {
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
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: !1
    };
  },
  computed: {
    /*
     * Returns a boolean whether a selection has been made.
     */
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : !1 : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    /*
     * When the model value changes, and it's a new
     * section, apply it to the Choices instance.
     */
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
    this.stack > 0 && this.element.addEventListener("change", () => {
      this.element.blur();
    }), this.loadRemoteOptions();
  },
  /*
   * Destroy the Choices.js instance to prevent memory leaks.
   */
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    async setOptionsFromRemote(e) {
      this.destroyChoicesInstance();
      let t = [];
      this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e, t);
      var r, n = this.element.options.length - 1;
      for (r = n; r >= 0; r--)
        this.element.remove(r);
      let i = !1;
      if (te(t, (s) => {
        var a = document.createElement("option");
        a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && s.value !== "" && (i = !0), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
      }), this.resetOnNewRemoteUrl && (i = !1), !i && this.selectFirstRemoteOption) {
        const s = this.placeholder ? t[1] : t[0];
        s && (this.$emit("update:modelValue", this.multiple ? [s.value] : s.value), await this.$nextTick(), i = !0);
      }
      if (i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
        return this.initChoices(this.element).then(() => {
          this.loading = !1;
        });
      i ? this.element.value = this.modelValue : this.$nextTick(() => {
        this.element.selectedIndex = 0;
      });
    },
    /*
     * Loads the options from a remote URL. It removes all current options from the select
     * element, and then adds the new options. If the components uses Choices.js,
     * it will first destroy the instance and then re-initialize it.
     */
    loadRemoteOptions() {
      this.remoteUrl && (this.loading = !0, ne({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.setOptionsFromRemote(this.remoteRoot ? be(e.data, this.remoteRoot) : e.data);
      }).catch(() => {
        this.setOptionsFromRemote([]);
      }).finally(() => {
        this.loading = !1;
      }));
    },
    /**
     * Removes the event listeners and then destroys the Choices.js instance.
     */
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener, { capture: !0 }), this.headlessListener = null), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    /**
     * Transforms the options from the remote URL into an array of objects.
     */
    normalizeOptions(e, t) {
      const r = R(e);
      if (!r && J(e))
        if (this.optionValue && this.optionLabel) {
          let n = be(e, this.optionValue);
          se(n) || (n = `${n}`), t.push({
            value: n,
            label: be(e, this.optionLabel)
          });
        } else
          te(e, (n, i) => {
            se(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    /*
     * Set the given value on the Choices.js instance.
     */
    setValueOnChoices(e) {
      Array.isArray(e) && (e = bs(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    /*
     * Returns the internal Choices.js item that is currently selected.
     */
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return cn(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    /*
     * This method handles the visibility of the placeholder
     * and applies some additional minor styling.
     */
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
    /*
     * Instantiate Choices.js with the combined PHP and JS options.
     */
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
                if (!n.choicesInstance)
                  return;
                const l = n.choicesInstance.dropdown.isActive, u = n.choicesInstance.containerOuter.element.contains(o.target);
                !l && u ? n.choicesInstance.showDropdown() : l && !u && n.choicesInstance.hideDropdown();
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
    /*
     * Update the 'data-has-selection' attribute based on the current selection.
     */
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, ap = { ref: "select" };
function op(e, t, r, n, i, s) {
  return j(), ce("div", ap, [
    K(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const lp = /* @__PURE__ */ _e(sp, [["render", op]]), up = {
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
        return W(t, i);
      },
      hasShared(i) {
        return W(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function cp(e, t, r) {
  e = Kr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : ys(un(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function dp(e, t) {
  var r = [];
  return Rr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function fp(e, t) {
  var r = R(e) ? ds : dp;
  return r(e, _t(t));
}
function ri(e, t) {
  return ir(e, t);
}
const pp = {
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
    /**
     * Returns a boolean whether the currently toggled columns
     * differ from the default set of visible columns.
     */
    columnsAreToggled() {
      return !ri(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    /*
     * Returns a boolean whether there are Search Inputs visible
     * that are not (yet) in the query string.
     */
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
    /**
     * Resets the table to its initial state.
     */
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, te(e, (t, r) => {
        et(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    /*
     * Returns a boolean whether the given key is visible.
     */
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    /*
     * Toggles the column key.
     */
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = fp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = bs(r, (i) => i.key).sort();
      ri(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    /**
     * Removes the key from being forcefully visible, and sets the value to null.
     */
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    /*
     * Forces the given Search Input key to be visible, and focuses the input element.
     */
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Oe(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    /*
     * Returns a boolean whether the key should be visible.
     */
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    /*
     * Parses the window's current query as an object.
     */
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!cp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], R(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    /*
     * Update the current query
     */
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
        u.length !== 0 && u.forEach((m, g) => {
          n[`${c}[${g}]`] = m;
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
        this.isLoading = !1, typeof t < "u" && t && Oe(() => {
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
        const l = se(s) && s ? s : "password";
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
}, hp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ii
    };
  },
  /*
   * Only render the Teleport component after this component is mounted.
   * Otherwise, the target won't be available in the DOM yet.
   */
  mounted() {
    this.isMounted = !0;
  }
};
function mp(e, t, r, n, i, s) {
  return ks((j(), X(Ls(i.isMounted ? i.Teleport : "div"), Bs(js(e.$attrs)), {
    default: si(() => [
      K(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ms, i.isMounted]
  ]);
}
const vp = /* @__PURE__ */ _e(hp, [["render", mp]]), gp = {
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
        Oe(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  /*
   * Destroy the Autsize instance to prevent memory leaks.
   */
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, yp = { ref: "textarea" };
function bp(e, t, r, n, i, s) {
  return j(), ce("div", yp, [
    K(e.$slots, "default")
  ], 512);
}
const wp = /* @__PURE__ */ _e(gp, [["render", bp]]), Sp = {
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
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Op = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], $p = {
  computed: {
    /*
     * Retrieves the toasts from the Splade instance.
     */
    toasts: function() {
      return v.toastsReversed.value;
    },
    /*
     * Determine whether a backdrop should be shown.
     */
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
      positions: Op,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Ep = {
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
      return this.toggles[e] ?? !1;
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
}, Tp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, xp = {
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
  emits: ["success", "error"],
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
        get: (r, n) => be(e.values, n),
        set: (r, n, i) => {
          St(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && be(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await ne.post(this.backendRoute, {
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
          } }), this.$emit("success", i.data);
        } catch (s) {
          this.$emit("error", s.response.data), v.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          St(this.values, a, s);
        }), i.data.redirect ? v.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          v.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, _p = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && Oe(() => {
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
}, Cr = {
  /**
   * Inject the default Progress Bar CSS into the HTML Head.
   */
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
  /**
   * Starts the progress bar with the configured timeout.
   */
  start(e, t, r) {
    Cr.timeout = setTimeout(() => r.start(), t);
  },
  /**
   * Updates the progress bar to the percentage from the event.
   */
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  /**
   * Clears the timeout and hides the bar.
   */
  stop(e, t) {
    clearTimeout(Cr.timeout), t.done(), t.remove();
  },
  /**
   * Initializes the progress bar and registers event listeners for Splade request events.
   */
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
}, qp = {
  /**
   * Registers all Splade components and makes the configured
   * options and the Splade core globally available.
   */
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = W(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = W(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = W(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = W(t, "link_component") ? t.link_component : "Link", t.progress_bar = W(t, "progress_bar") ? t.progress_bar : !1, t.components = W(t, "components") ? t.components : {}, t.view_transitions = W(t, "view_transitions") ? t.view_transitions : !1, t.suppress_compile_errors = W(t, "suppress_compile_errors") ? t.suppress_compile_errors : !1;
    const r = t.prefix;
    if (e.component(`${r}Button`, Vl).component(`${r}Confirm`, Lu).component(`${r}DataStores`, Vu).component(`${r}Data`, Nu).component(`${r}Defer`, tc).component(`${r}Dialog`, rc).component(`${r}Dropdown`, od).component(`${r}DynamicHtml`, ld).component(`${r}Errors`, ud).component(`${r}Event`, cd).component(`${r}File`, Lf).component(`${r}Flash`, Bf).component(`${r}Form`, Mf).component(`${r}Input`, Vf).component(`${r}JoditEditor`, zf).component(`${r}VueBridge`, xp).component(`${r}Lazy`, Kf).component(`${r}Modal`, Yf).component(`${r}OnClickOutside`, ts).component(`${r}PreloadedModal`, Zf).component(`${r}Rehydrate`, rp).component(`${r}Render`, ue).component(`${r}Script`, np).component(`${r}Select`, lp).component(`${r}State`, up).component(`${r}Table`, pp).component(`${r}Teleport`, vp).component(`${r}Textarea`, wp).component(`${r}Toast`, Sp).component(`${r}Toasts`, $p).component(`${r}Toggle`, Ep).component(`${r}Transition`, Tp).component(t.link_component, Qf).directive(`${r}PreserveScroll`, _p), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      J(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        W(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Cr.init(t.progress_bar);
    }
    t.suppress_compile_errors && (e.config.compilerOptions.onError = (n) => {
      import("./CompilerErrorMessages-4a55bbec.js").then((i) => {
        console.error({
          message: i.default[n.code] || "Unknown compiler error",
          lineNumber: n.lineNumber,
          compileError: n
        });
      });
    }), te(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Cp(e, t, r) {
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
  qp as SpladePlugin,
  Pp as renderSpladeApp,
  Cp as startServer
};
