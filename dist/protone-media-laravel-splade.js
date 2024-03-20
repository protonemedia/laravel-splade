import ne from "axios";
import { ref as y, computed as x, watch as ot, openBlock as B, createBlock as X, unref as ee, createCommentVNode as Fr, h as N, nextTick as Oe, onMounted as V, createElementBlock as ce, createElementVNode as gr, provide as de, inject as z, KeepAlive as si, normalizeStyle as jt, createVNode as _s, Fragment as kr, renderList as Is, cloneVNode as As, watchEffect as le, defineComponent as Y, onUnmounted as me, Teleport as ai, reactive as Ps, shallowRef as qs, normalizeClass as Cs, onBeforeUnmount as Fs, renderSlot as K, resolveComponent as Lr, withCtx as oi, withModifiers as ks, withDirectives as Ls, resolveDynamicComponent as Rs, normalizeProps as Bs, guardReactiveProps as js, vShow as Ms } from "vue";
function Ds(e, t) {
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
const Hs = Vs;
function Us(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ws = typeof global == "object" && global && global.Object === Object && global;
const li = Ws;
var zs = typeof self == "object" && self && self.Object === Object && self, Gs = li || zs || Function("return this")();
const ve = Gs;
var Xs = ve.Symbol;
const ke = Xs;
var ui = Object.prototype, Ks = ui.hasOwnProperty, Js = ui.toString, ft = ke ? ke.toStringTag : void 0;
function Qs(e) {
  var t = Ks.call(e, ft), r = e[ft];
  try {
    e[ft] = void 0;
    var n = !0;
  } catch {
  }
  var i = Js.call(e);
  return n && (t ? e[ft] = r : delete e[ft]), i;
}
var Ys = Object.prototype, Zs = Ys.toString;
function ea(e) {
  return Zs.call(e);
}
var ta = "[object Null]", ra = "[object Undefined]", $n = ke ? ke.toStringTag : void 0;
function Be(e) {
  return e == null ? e === void 0 ? ra : ta : $n && $n in Object(e) ? Qs(e) : ea(e);
}
function Le(e) {
  return e != null && typeof e == "object";
}
var na = "[object Arguments]";
function En(e) {
  return Le(e) && Be(e) == na;
}
var ci = Object.prototype, ia = ci.hasOwnProperty, sa = ci.propertyIsEnumerable, aa = En(function() {
  return arguments;
}()) ? En : function(e) {
  return Le(e) && ia.call(e, "callee") && !sa.call(e, "callee");
};
const di = aa;
var oa = Array.isArray;
const M = oa;
function la() {
  return !1;
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = fi && typeof module == "object" && module && !module.nodeType && module, ua = Tn && Tn.exports === fi, xn = ua ? ve.Buffer : void 0, ca = xn ? xn.isBuffer : void 0, da = ca || la;
const yr = da;
var fa = 9007199254740991, pa = /^(?:0|[1-9]\d*)$/;
function Rr(e, t) {
  var r = typeof e;
  return t = t ?? fa, !!t && (r == "number" || r != "symbol" && pa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ha = 9007199254740991;
function Br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ha;
}
var ma = "[object Arguments]", va = "[object Array]", ga = "[object Boolean]", ya = "[object Date]", ba = "[object Error]", wa = "[object Function]", Sa = "[object Map]", Oa = "[object Number]", $a = "[object Object]", Ea = "[object RegExp]", Ta = "[object Set]", xa = "[object String]", _a = "[object WeakMap]", Ia = "[object ArrayBuffer]", Aa = "[object DataView]", Pa = "[object Float32Array]", qa = "[object Float64Array]", Ca = "[object Int8Array]", Fa = "[object Int16Array]", ka = "[object Int32Array]", La = "[object Uint8Array]", Ra = "[object Uint8ClampedArray]", Ba = "[object Uint16Array]", ja = "[object Uint32Array]", L = {};
L[Pa] = L[qa] = L[Ca] = L[Fa] = L[ka] = L[La] = L[Ra] = L[Ba] = L[ja] = !0;
L[ma] = L[va] = L[Ia] = L[ga] = L[Aa] = L[ya] = L[ba] = L[wa] = L[Sa] = L[Oa] = L[$a] = L[Ea] = L[Ta] = L[xa] = L[_a] = !1;
function Ma(e) {
  return Le(e) && Br(e.length) && !!L[Be(e)];
}
function Da(e) {
  return function(t) {
    return e(t);
  };
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, gt = pi && typeof module == "object" && module && !module.nodeType && module, Na = gt && gt.exports === pi, lr = Na && li.process, Va = function() {
  try {
    var e = gt && gt.require && gt.require("util").types;
    return e || lr && lr.binding && lr.binding("util");
  } catch {
  }
}();
const _n = Va;
var In = _n && _n.isTypedArray, Ha = In ? Da(In) : Ma;
const hi = Ha;
var Ua = Object.prototype, Wa = Ua.hasOwnProperty;
function za(e, t) {
  var r = M(e), n = !r && di(e), i = !r && !n && yr(e), s = !r && !n && !i && hi(e), a = r || n || i || s, o = a ? Us(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Wa.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rr(u, l))) && o.push(u);
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
var Ja = Ka(Object.keys, Object);
const Qa = Ja;
var Ya = Object.prototype, Za = Ya.hasOwnProperty;
function eo(e) {
  if (!Xa(e))
    return Qa(e);
  var t = [];
  for (var r in Object(e))
    Za.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function J(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var to = "[object AsyncFunction]", ro = "[object Function]", no = "[object GeneratorFunction]", io = "[object Proxy]";
function mi(e) {
  if (!J(e))
    return !1;
  var t = Be(e);
  return t == ro || t == no || t == to || t == io;
}
function Ut(e) {
  return e != null && Br(e.length) && !mi(e);
}
function Wt(e) {
  return Ut(e) ? za(e) : eo(e);
}
function jr(e, t) {
  return e && Hs(e, t, Wt);
}
function so(e, t) {
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
var ao = so(jr);
const Mr = ao;
function vi(e) {
  return e;
}
function gi(e) {
  return typeof e == "function" ? e : vi;
}
function oo(e, t) {
  var r = M(e) ? Ds : Mr;
  return r(e, gi(t));
}
function te(e, t) {
  return e && jr(e, gi(t));
}
var lo = Array.prototype, uo = lo.reverse;
function co(e) {
  return e == null ? e : uo.call(e);
}
class yi {
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
const Mt = y(0), ie = y(1), R = y({}), ae = y(0), zt = y({}), tt = {}, $e = typeof window > "u";
function fo(e, t, r) {
  $e || window.addEventListener("popstate", po.bind(this)), Object.keys(t).length > 0 && Mt.value++, tt[ie.value] = new yi(ie.value), Hr(r), Gt(r.head), Ur(e);
  const n = $e ? "" : location.href, i = Dr(
    n,
    r.head,
    e,
    t,
    {},
    ie.value,
    Mt.value,
    r.persistentLayout
  );
  bi(i);
}
function po(e) {
  e.state && (R.value = e.state, ae.value = 0, zt.value = {}, Gr.value = {}, Nr.value = R.value.persistentLayoutKey, Gt(R.value.head), Ur(R.value.html, R.value.rememberedState.scrollY), ye("history:popped-state", R.value.url));
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
  return R.value = l, l;
}
function ho(e) {
  $e || (window.history.pushState(e, "", e.url), ye("history:pushed-state", { url: e.url }));
}
function mo(e) {
  const t = Dr(
    e,
    JSON.parse(JSON.stringify(R.value.head)),
    R.value.html,
    JSON.parse(JSON.stringify(R.value.dynamics)),
    { ...R.value.rememberedState },
    R.value.pageVisitId,
    R.value.dynamicVisitId,
    R.value.persistentLayoutKey
  );
  $e || (window.history.replaceState(t, "", t.url), ye("history:replaced-state", { url: t.url }));
}
function bi(e) {
  $e || (window.history.replaceState(e, "", e.url), ye("history:replaced-state", { url: e.url }));
}
const ur = y(0), Nr = y(null);
function vo(e) {
  const t = URL.createObjectURL(e.data), r = e.headers["content-disposition"].split("filename=")[1], n = document.createElement("a");
  n.href = t, n.download = r, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), URL.revokeObjectURL(t);
  }, 1);
}
function go(e, t, r) {
  var g;
  ur.value++;
  const n = e.request.responseURL + (r ? "#" + r : "");
  if (e.data instanceof Blob) {
    vo(e);
    return;
  }
  if (J((g = e.data) == null ? void 0 : g.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ae.value++;
  const i = Nr.value;
  if (Hr(e.data.splade), Gt(e.data.splade.head), n === R.value.url && (t = !0), e.data.splade.modal)
    return Ai(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ae.value = 0, zt.value = {};
  let s = e.data.html, a = e.data.dynamics;
  const o = Object.keys(R.value.dynamics).length > 0, l = Object.keys(a).length > 0;
  t ? (l && te(a, (f, h) => {
    a[h] += `<!-- ${ur.value} -->`;
  }), (!l || !o) && (s += `<!-- ${ur.value} -->`)) : (l && Mt.value++, (!l || !o) && (ie.value++, tt[ie.value] = tt[ie.value] || new yi(ie.value)));
  let u = e.data.splade.persistentLayout && i === e.data.splade.persistentLayout, c = 0;
  !$e && e.data.splade.preserveScroll && (c = window.scrollY), Ur(
    u ? R.value.html : s,
    c,
    !t && !e.data.splade.preventViewTransition
  );
  const v = Dr(
    n,
    e.data.splade.head,
    u ? R.value.html : s,
    a,
    R.value.rememberedState ? { ...R.value.rememberedState } : {},
    ie.value,
    Mt.value,
    e.data.splade.persistentLayout
  );
  t ? bi(v) : ho(v);
}
function yo() {
  ae.value--, Gt(wo(ae.value));
}
const wi = y({}), Si = (e) => wi.value[e], bo = (e) => Object.keys(Si.value[e]).length > 0, Oi = y({}), wo = (e) => Oi.value[e], $i = y({}), So = (e) => $i.value[e], rt = y([]);
function Oo(e) {
  rt.value.push(e);
}
const $o = x(() => co(rt.value));
function Eo(e) {
  rt.value[e].dismissed = !0, rt.value[e].html = null;
}
const Vr = y(null);
function To(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, v) => {
    o = c, l = v;
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
function xo() {
  Vr.value = null;
}
const Ei = y({});
function Hr(e) {
  Nr.value = e.persistentLayout, Ei.value = e.shared ? e.shared : {}, $i.value[ae.value] = e.flash ? e.flash : {}, Oi.value[ae.value] = e.head ? e.head : {}, oo(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), wi.value[ae.value] = e.errors ? e.errors : {};
}
const Ti = y(() => {
}), xi = y(() => {
}), _i = y(() => {
}), Ii = y(() => {
});
function Gt(e) {
  Ti.value(e);
}
function Ur(e, t, r) {
  xi.value(e, t, r === !0);
}
function Ai(e, t) {
  zt.value[ae.value] = !0, _i.value(e, t);
}
function _o(e) {
  return zt.value[e];
}
function Pi(e) {
  Ii.value(e);
}
const Wr = y({});
function qi(e, t, r) {
  Wr.value[e] = t, r && Io(e, t);
}
function zr() {
  return JSON.parse(localStorage.getItem("splade") || "{}") || {};
}
function Io(e, t) {
  let r = zr();
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Ao(e, t) {
  return t ? zr()[e] : Wr.value[e];
}
function Po(e, t) {
  if (t) {
    let r = zr();
    delete r[e], localStorage.setItem("splade", JSON.stringify(r));
  }
  delete Wr.value[e];
}
function Ke(e, t, r, n, i, s) {
  if ($e || qi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
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
    go(o, i, l), ye("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
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
    u && !u.lazy && !u.rehydrate && Hr(u), l.status != 422 && Pi(
      l.data.html ? l.data.html : l.data
    );
  }), a;
}
function Ci(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !0);
}
function qo(e, t) {
  return typeof t > "u" && (t = {}), Ke(e, "GET", {}, t, !1);
}
function Co(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Gr = y({});
function Fo(e) {
  const t = Gr.value[e];
  return t ? (ae.value++, Ai(t.html, t.type), !0) : !1;
}
function ko(e, t, r) {
  Gr.value[e] = { html: t, type: r };
}
function Lo(e) {
  return Ke(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Ro(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Bo(e, t) {
  return Ke(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function jo(e) {
  typeof e > "u" && (e = !1);
  const t = {
    "X-Splade-Refresh": !0
  };
  return e && (t["X-Splade-Preserve-Scroll"] = !0), Ci(R.value.url, t);
}
function Mo(e, t) {
  tt[ie.value].on(e, t);
}
function Do(e, t) {
  tt[ie.value].off(e, t);
}
function ye(e, t) {
  typeof t > "u" && (t = {}), tt[ie.value].emit(e, t), $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const p = {
  init: fo,
  replace: Ci,
  visit: qo,
  modal: Co,
  slideover: Lo,
  refresh: jo,
  request: Ke,
  lazy: Ro,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: mo,
  htmlForDynamicComponent(e) {
    return R.value.dynamics[e];
  },
  setOnHead(e) {
    Ti.value = e;
  },
  setOnHtml(e) {
    xi.value = e;
  },
  setOnModal(e) {
    _i.value = e;
  },
  setOnServerError(e) {
    Ii.value = e;
  },
  onServerError: Pi,
  hasValidationErrors: bo,
  validationErrors: Si,
  sharedData: Ei,
  // ref
  flashData: So,
  toasts: rt,
  // ref
  toastsReversed: $o,
  // ref
  confirmModal: Vr,
  // ref
  confirm: To,
  clearConfirmModal: xo,
  pushToast: Oo,
  dismissToast: Eo,
  restore: Ao,
  remember: qi,
  forget: Po,
  popStack: yo,
  currentStack: ae,
  // ref
  stackType: _o,
  pageVisitId: x(() => R.value.pageVisitId),
  // ref
  dynamicVisitId: x(() => R.value.dynamicVisitId),
  // ref
  isSsr: $e,
  openPreloadedModal: Fo,
  registerPreloadedModal: ko,
  on: Mo,
  off: Do,
  emit: ye
};
var No = "[object String]";
function se(e) {
  return typeof e == "string" || !M(e) && Le(e) && Be(e) == No;
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
        p.emit("rendered");
      });
    }
    return ot(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (B(), X(ee(r), { key: 0 })) : Fr("", !0);
  }
}, Vo = {
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
    return V(() => i()), (o, l) => (B(), ce("div", {
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
}, Ho = {
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
        if (!p.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!p.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!p.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!p.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    de("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = z("$spladeOptions") || {}, l = x(() => p.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(h) {
      n.value[h] = null, p.popStack();
    }
    function v(h) {
      const m = document.createElement("meta");
      te(h, (d, b) => {
        m[b] = d;
      }), document.getElementsByTagName("head")[0].appendChild(m);
    }
    function g(h) {
      var d;
      let m = "meta";
      te(h, (b, O) => {
        m = `${m}[${O}="${b}"]`;
      });
      try {
        (d = document.querySelector(m)) == null || d.remove();
      } catch {
      }
    }
    p.setOnHead((h) => {
      var m;
      if (!p.isSsr) {
        if (s.value === null) {
          s.value = h.meta;
          return;
        }
        if (s.value.forEach((d) => {
          g(d);
        }), s.value = h.meta, document.title = h.title, h.meta.forEach((d) => {
          v(d);
        }), (m = document.querySelector('link[rel="canonical"]')) == null || m.remove(), h.canonical) {
          const d = document.createElement("link");
          d.rel = "canonical", d.href = h.canonical, document.getElementsByTagName("head")[0].appendChild(d);
        }
      }
    });
    const f = (h, m) => {
      n.value = [], r.value = h, Oe(() => {
        if (!p.isSsr) {
          const d = window.location.hash;
          d && document.getElementById(d.substring(1)) ? window.location.hash = d : window.scrollTo(0, m);
        }
        o.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(b) {
            b.preventDefault(), p.visit(d.href);
          }));
        });
      });
    };
    return p.setOnHtml((h, m, d) => {
      if (!p.isSsr && document.startViewTransition && o.view_transitions && d)
        return document.startViewTransition(() => f(h, m));
      f(h, m);
    }), p.setOnModal(function(h, m) {
      n.value[p.currentStack.value] && (a.value = !1), n.value[p.currentStack.value] = { html: h, type: m }, Oe(() => {
        a.value = !0;
      });
    }), p.setOnServerError(function(h) {
      i.value = h;
    }), p.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), V(() => {
      if (p.isSsr)
        return;
      const h = se(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((m) => {
        delete h.dataset[m];
      });
    }), (h, m) => (B(), ce("div", null, [
      ee(p).isSsr ? (B(), X(ue, {
        key: `visit.${ee(p).pageVisitId.value}`,
        style: jt(l.value),
        html: r.value
      }, null, 8, ["style", "html"])) : (B(), X(si, {
        key: 0,
        max: ee(o).max_keep_alive
      }, [
        (B(), X(ue, {
          key: `visit.${ee(p).pageVisitId.value}`,
          style: jt(l.value),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      _s(ue, { html: e.components }, null, 8, ["html"]),
      (B(!0), ce(kr, null, Is(ee(p).currentStack.value, (d) => (B(), X(ue, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ee(p).currentStack.value === d,
        animate: a.value,
        onClose: (b) => c(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (B(), X(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Fr("", !0)
    ]));
  }
};
function Cp(e) {
  return () => N(Ho, e);
}
var Uo = Object.prototype, Wo = Uo.hasOwnProperty;
function zo(e, t) {
  return e != null && Wo.call(e, t);
}
var Go = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Le(e) && Be(e) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function Xr(e, t) {
  if (M(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? !0 : Ko.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Jo = ve["__core-js_shared__"];
const cr = Jo;
var An = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!An && An in e;
}
var Yo = Function.prototype, Zo = Yo.toString;
function Je(e) {
  if (e != null) {
    try {
      return Zo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, tl = /^\[object .+?Constructor\]$/, rl = Function.prototype, nl = Object.prototype, il = rl.toString, sl = nl.hasOwnProperty, al = RegExp(
  "^" + il.call(sl).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ol(e) {
  if (!J(e) || Qo(e))
    return !1;
  var t = mi(e) ? al : tl;
  return t.test(Je(e));
}
function ll(e, t) {
  return e == null ? void 0 : e[t];
}
function Qe(e, t) {
  var r = ll(e, t);
  return ol(r) ? r : void 0;
}
var ul = Qe(Object, "create");
const bt = ul;
function cl() {
  this.__data__ = bt ? bt(null) : {}, this.size = 0;
}
function dl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  if (bt) {
    var r = t[e];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e) ? t[e] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return bt ? t[e] !== void 0 : gl.call(t, e);
}
var bl = "__lodash_hash_undefined__";
function wl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bt && t === void 0 ? bl : t, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ge.prototype.clear = cl;
Ge.prototype.delete = dl;
Ge.prototype.get = ml;
Ge.prototype.has = yl;
Ge.prototype.set = wl;
function Sl() {
  this.__data__ = [], this.size = 0;
}
function Kr(e, t) {
  return e === t || e !== e && t !== t;
}
function Kt(e, t) {
  for (var r = e.length; r--; )
    if (Kr(e[r][0], t))
      return r;
  return -1;
}
var Ol = Array.prototype, $l = Ol.splice;
function El(e) {
  var t = this.__data__, r = Kt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : $l.call(t, r, 1), --this.size, !0;
}
function Tl(e) {
  var t = this.__data__, r = Kt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xl(e) {
  return Kt(this.__data__, e) > -1;
}
function _l(e, t) {
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
Te.prototype.clear = Sl;
Te.prototype.delete = El;
Te.prototype.get = Tl;
Te.prototype.has = xl;
Te.prototype.set = _l;
var Il = Qe(ve, "Map");
const wt = Il;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new Ge(),
    map: new (wt || Te)(),
    string: new Ge()
  };
}
function Pl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jt(e, t) {
  var r = e.__data__;
  return Pl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ql(e) {
  var t = Jt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cl(e) {
  return Jt(this, e).get(e);
}
function Fl(e) {
  return Jt(this, e).has(e);
}
function kl(e, t) {
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
xe.prototype.clear = Al;
xe.prototype.delete = ql;
xe.prototype.get = Cl;
xe.prototype.has = Fl;
xe.prototype.set = kl;
var Ll = "Expected a function";
function Jr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ll);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Jr.Cache || xe)(), r;
}
Jr.Cache = xe;
var Rl = 500;
function Bl(e) {
  var t = Jr(e, function(n) {
    return r.size === Rl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ml = /\\(\\)?/g, Dl = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(jl, function(r, n, i, s) {
    t.push(i ? s.replace(Ml, "$1") : n || r);
  }), t;
});
const Nl = Dl;
function Fi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Vl = 1 / 0, Pn = ke ? ke.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (M(e))
    return Fi(e, Qt) + "";
  if (Xt(e))
    return qn ? qn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Qr(e) {
  return e == null ? "" : Qt(e);
}
function Yr(e, t) {
  return M(e) ? e : Xr(e, t) ? [e] : Nl(Qr(e));
}
var Hl = 1 / 0;
function $t(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Hl ? "-0" : t;
}
function ki(e, t, r) {
  t = Yr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = $t(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Br(i) && Rr(a, i) && (M(e) || di(e)));
}
function W(e, t) {
  return e != null && ki(e, t, zo);
}
const Ul = {
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
  let a = Ri(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return dr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return fe(l, { 0() {
      return null;
    }, 1() {
      return dr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return dr(o);
}
function dr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Bi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let v = !1, g = [];
    for (let [f, h] of Object.entries(n))
      typeof h == "boolean" && (v = !0), h === !0 && g.push(f);
    v && (c["data-headlessui-state"] = g.join(" "));
  }
  if (o === "template") {
    if (u = Li(u ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [v, ...g] = u ?? [];
      if (!Wl(v) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((m) => m.trim()).filter((m, d, b) => b.indexOf(m) === d).sort((m, d) => m.localeCompare(d)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let f = Ri((a = v.props) != null ? a : {}, l), h = As(v, f);
      for (let m in f)
        m.startsWith("on") && (h.props || (h.props = {}), h.props[m] = f[m]);
      return h;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return N(o, Object.assign({}, l, c), { default: () => u });
}
function Li(e) {
  return e.flatMap((t) => t.type === kr ? Li(t.children) : [t]);
}
function Ri(...e) {
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
function Wl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zl = 0;
function Gl() {
  return ++zl;
}
function Ye() {
  return Gl();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function D(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Mi = Symbol("Context");
var G = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(G || {});
function Xl() {
  return Zr() !== null;
}
function Zr() {
  return z(Mi, null);
}
function Kl(e) {
  de(Mi, e);
}
var Jl = Object.defineProperty, Ql = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Cn = (e, t, r) => (Ql(e, typeof t != "symbol" ? t + "" : t, r), r);
class Yl {
  constructor() {
    Cn(this, "current", this.detect()), Cn(this, "currentId", 0);
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
let Et = new Yl();
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
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), Di = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Di || {}), Zl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Zl || {});
function eu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ni = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ni || {});
function tu(e, t = 0) {
  var r;
  return e === ((r = Tt(e)) == null ? void 0 : r.body) ? !1 : fe(t, { 0() {
    return e.matches(br);
  }, 1() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(br))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var ru = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ru || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function We(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let nu = ["textarea", "input"].join(",");
function iu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, nu)) != null ? r : !1;
}
function su(e, t = (r) => r) {
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
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? su(e) : e : eu(e);
  i.length > 0 && o.length > 1 && (o = o.filter((h) => !i.includes(h))), n = n ?? a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, v = 0, g = o.length, f;
  do {
    if (v >= g || v + g <= 0)
      return 0;
    let h = u + v;
    if (t & 16)
      h = (h + g) % g;
    else {
      if (h < 0)
        return 3;
      if (h >= g)
        return 1;
    }
    f = o[h], f == null || f.focus(c), v += l;
  } while (f !== a.activeElement);
  return t & 6 && iu(f) && f.select(), 2;
}
function fr(e, t, r) {
  Et.isServer || le((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function au(e, t, r = x(() => !0)) {
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
    return !tu(o, Ni.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
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
function ou() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function lu(e, t, r) {
  Et.isServer || le((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var vt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vt || {});
function uu() {
  let e = y(0);
  return lu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Vi(e, t, r, n) {
  Et.isServer || le((i) => {
    e = e ?? window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Hi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function cu(e) {
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
var Wi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Wi || {});
let pt = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = x(() => Tt(i)), a = y(!1);
  V(() => a.value = !0), me(() => a.value = !1), fu({ ownerDocument: s }, x(() => a.value && !!(e.features & 16)));
  let o = pu({ ownerDocument: s, container: i, initialFocus: x(() => e.initialFocus) }, x(() => a.value && !!(e.features & 2)));
  hu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: o }, x(() => a.value && !!(e.features & 8)));
  let l = uu();
  function u(f) {
    let h = D(i);
    h && ((m) => m())(() => {
      fe(l.value, { [vt.Forwards]: () => {
        Lt(h, qe.First, { skipElements: [f.relatedTarget] });
      }, [vt.Backwards]: () => {
        Lt(h, qe.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = y(!1);
  function v(f) {
    f.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function g(f) {
    if (!a.value)
      return;
    let h = Ui(e.containers);
    D(i) instanceof HTMLElement && h.add(D(i));
    let m = f.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (zi(h, m) || (c.value ? Lt(D(i), fe(l.value, { [vt.Forwards]: () => qe.Next, [vt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && We(f.target)));
  }
  return () => {
    let f = {}, h = { ref: i, onKeydown: v, onFocusout: g }, { features: m, initialFocus: d, containers: b, ...O } = e;
    return N(kr, [!!(m & 4) && N(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable }), Z({ ourProps: h, theirProps: { ...t, ...O }, slot: f, attrs: t, slots: r, name: "FocusTrap" }), !!(m & 4) && N(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable })]);
  };
} }), { features: Wi }), He = [];
cu(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && He[0] !== t.target && (He.unshift(t.target), He = He.filter((r) => r != null && r.isConnected), He.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function du(e) {
  let t = y(He.slice());
  return ot([e], ([r], [n]) => {
    n === !0 && r === !1 ? Hi(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = He.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function fu({ ownerDocument: e }, t) {
  let r = du(t);
  V(() => {
    le(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && We(r());
    }, { flush: "post" });
  }), me(() => {
    We(r());
  });
}
function pu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return V(() => s.value = !0), me(() => s.value = !1), V(() => {
    ot([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = D(t);
      l && Hi(() => {
        var u, c;
        if (!s.value)
          return;
        let v = D(r), g = (u = e.value) == null ? void 0 : u.activeElement;
        if (v) {
          if (v === g) {
            i.value = g;
            return;
          }
        } else if (l.contains(g)) {
          i.value = g;
          return;
        }
        v ? We(v) : Lt(l, qe.First | qe.NoScroll) === Di.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function hu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Vi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = Ui(r);
    D(t) instanceof HTMLElement && o.add(D(t));
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? zi(o, u) ? (n.value = u, We(u)) : (a.preventDefault(), a.stopPropagation(), We(l)) : We(n.value);
  }, !0);
}
function zi(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let pr = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
function Fn(e, t = y(!0)) {
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
let Gi = Symbol("ForcePortalRootContext");
function mu() {
  return z(Gi, !1);
}
let Sr = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return de(Gi, e.force), () => {
    let { force: n, ...i } = e;
    return Z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function vu(e) {
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
  let n = y(null), i = x(() => Tt(n)), s = mu(), a = z(Ki, null), o = y(s === !0 || a == null ? vu(n.value) : a.resolveTarget());
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
    return N(ai, { to: o.value }, Z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ki = Symbol("PortalGroupContext"), gu = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Ps({ resolveTarget() {
    return e.target;
  } });
  return de(Ki, n), () => {
    let { target: i, ...s } = e;
    return Z({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ji = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function yu() {
  return z(Ji, () => {
  });
}
function bu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = yu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  V(() => {
    ot(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), me(() => {
    t.value && s(1, e, r);
  }), de(Ji, s);
}
let Qi = Symbol("DescriptionContext");
function wu() {
  let e = z(Qi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Su({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return de(Qi, { register: i, slot: e, name: t, props: r }), x(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ye()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = wu();
  return V(() => me(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [v, g]) => Object.assign(c, { [v]: ee(g) }), {}), id: o };
    return Z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Ou(e) {
  let t = qs(e.getSnapshot());
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
function $u(e, t) {
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
function Eu() {
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
function Tu() {
  if (!ou())
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
function xu() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function _u(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let Ue = $u(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Yt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: _u(r) }, i = [Tu(), Eu(), xu()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ue.subscribe(() => {
  let e = Ue.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Ue.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Ue.dispatch("TEARDOWN", r);
  }
});
function Iu(e, t, r) {
  let n = Ou(Ue), i = x(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return ot([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    Ue.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (Ue.dispatch("POP", o ?? s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var Au = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Au || {});
let $r = Symbol("DialogContext");
function xt(e) {
  let t = z($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, xt), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", en = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ye()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  V(() => {
    a.value = !0;
  });
  let o = y(0), l = Zr(), u = x(() => e.open === qt && l !== null ? (l.value & G.Open) === G.Open : e.open), c = y(null), v = y(null), g = x(() => Tt(c));
  if (i({ el: c, $el: c }), !(e.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e.open}`);
  let f = x(() => a.value && u.value ? 0 : 1), h = x(() => f.value === 0), m = x(() => o.value > 1), d = z($r, null) !== null, b = x(() => m.value ? "parent" : "leaf"), O = x(() => l !== null ? (l.value & G.Closing) === G.Closing : !1), A = x(() => d || O.value ? !1 : h.value), S = x(() => {
    var E, T, I;
    return (I = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? T : []).find((C) => C.id === "headlessui-portal-root" ? !1 : C.contains(D(v)) && C instanceof HTMLElement)) != null ? I : null;
  });
  Fn(S, A);
  let $ = x(() => m.value ? !0 : h.value), w = x(() => {
    var E, T, I;
    return (I = Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? T : []).find((C) => C.contains(D(v)) && C instanceof HTMLElement)) != null ? I : null;
  });
  Fn(w, $), bu({ type: "Dialog", enabled: x(() => f.value === 0), element: c, onUpdate: (E, T) => {
    if (T === "Dialog")
      return fe(E, { [Or.Add]: () => o.value += 1, [Or.Remove]: () => o.value -= 1 });
  } });
  let _ = Su({ name: "DialogDescription", slot: x(() => ({ open: u.value })) }), q = y(null), P = { titleId: q, panelRef: y(null), dialogState: f, setTitleId(E) {
    q.value !== E && (q.value = E);
  }, close() {
    t("close", !1);
  } };
  de($r, P);
  function k() {
    var E, T, I;
    return [...Array.from((T = (E = g.value) == null ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? T : []).filter((C) => !(C === document.body || C === document.head || !(C instanceof HTMLElement) || C.contains(D(v)) || P.panelRef.value && C.contains(P.panelRef.value))), (I = P.panelRef.value) != null ? I : c.value];
  }
  let j = x(() => !(!h.value || m.value));
  au(() => k(), (E, T) => {
    P.close(), Oe(() => T == null ? void 0 : T.focus());
  }, j);
  let H = x(() => !(m.value || f.value !== 0));
  Vi((s = g.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    H.value && (E.defaultPrevented || E.key === ji.Escape && (E.preventDefault(), E.stopPropagation(), P.close()));
  });
  let F = x(() => !(O.value || f.value !== 0 || d));
  return Iu(g, F, (E) => {
    var T;
    return { containers: [...(T = E.containers) != null ? T : [], k] };
  }), le((E) => {
    if (f.value !== 0)
      return;
    let T = D(c);
    if (!T)
      return;
    let I = new ResizeObserver((C) => {
      for (let ge of C) {
        let U = ge.target.getBoundingClientRect();
        U.x === 0 && U.y === 0 && U.width === 0 && U.height === 0 && P.close();
      }
    });
    I.observe(T), E(() => I.disconnect());
  }), () => {
    let { id: E, open: T, initialFocus: I, ...C } = e, ge = { ...r, ref: c, id: E, role: "dialog", "aria-modal": f.value === 0 ? !0 : void 0, "aria-labelledby": q.value, "aria-describedby": _.value }, U = { open: f.value === 0 };
    return N(Sr, { force: !0 }, () => [N(Xi, () => N(gu, { target: c.value }, () => N(Sr, { force: !1 }, () => N(pt, { initialFocus: I, containers: k, features: h.value ? fe(b.value, { parent: pt.features.RestoreFocus, leaf: pt.features.All & ~pt.features.FocusLock }) : pt.features.None }, () => Z({ ourProps: ge, theirProps: C, slot: U, attrs: r, slots: n, visible: f.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), N(wr, { features: Nt.Hidden, ref: v })]);
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
    return N(Sr, { force: !0 }, () => N(Xi, () => Z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let tn = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ye()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
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
function Pu(e) {
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
function qu(e, t) {
  let r = Yt();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function kn(e, t, r, n, i, s) {
  let a = Yt(), o = s !== void 0 ? Pu(s) : () => {
  };
  return Ct(e, ...i), hr(e, ...t, ...r), a.nextFrame(() => {
    Ct(e, ...r), hr(e, ...n), a.add(qu(e, (l) => (Ct(e, ...n, ...t), hr(e, ...i), o(l))));
  }), a.add(() => Ct(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ne(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rn = Symbol("TransitionContext");
var Cu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cu || {});
function Fu() {
  return z(rn, null) !== null;
}
function ku() {
  let e = z(rn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Lu() {
  let e = z(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Yi(e) {
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
let Zi = Dt.RenderStrategy, lt = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
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
  if (!Fu() && Xl())
    return () => N(ut, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), v = x(() => e.unmount ? Ce.Unmount : Ce.Hidden);
  i({ el: c, $el: c });
  let { show: g, appear: f } = ku(), { register: h, unregister: m } = Lu(), d = y(g.value ? "visible" : "hidden"), b = { value: !0 }, O = Ye(), A = { value: !1 }, S = Yi(() => {
    !A.value && d.value !== "hidden" && (d.value = "hidden", m(O), u());
  });
  V(() => {
    let F = h(O);
    me(F);
  }), le(() => {
    if (v.value === Ce.Hidden && O) {
      if (g.value && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      fe(d.value, { hidden: () => m(O), visible: () => h(O) });
    }
  });
  let $ = Ne(e.enter), w = Ne(e.enterFrom), _ = Ne(e.enterTo), q = Ne(e.entered), P = Ne(e.leave), k = Ne(e.leaveFrom), j = Ne(e.leaveTo);
  V(() => {
    le(() => {
      if (d.value === "visible") {
        let F = D(c);
        if (F instanceof Comment && F.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(F) {
    let E = b.value && !f.value, T = D(c);
    !T || !(T instanceof HTMLElement) || E || (A.value = !0, g.value && a(), g.value || l(), F(g.value ? kn(T, $, w, _, q, (I) => {
      A.value = !1, I === Er.Finished && o();
    }) : kn(T, P, k, j, q, (I) => {
      A.value = !1, I === Er.Finished && (Zt(S) || (d.value = "hidden", m(O), u()));
    })));
  }
  return V(() => {
    ot([g], (F, E, T) => {
      H(T), b.value = !1;
    }, { immediate: !0 });
  }), de(nn, S), Kl(x(() => fe(d.value, { visible: G.Open, hidden: G.Closed }) | s.value)), () => {
    let { appear: F, show: E, enter: T, enterFrom: I, enterTo: C, entered: ge, leave: U, leaveFrom: ct, leaveTo: It, ...Ie } = e, Ze = { ref: c }, Ae = { ...Ie, ...f.value && g.value && Et.isServer ? { class: Cs([r.class, Ie.class, ...$, ...w]) } : {} };
    return Z({ theirProps: Ae, ourProps: Ze, slot: {}, slots: n, attrs: r, features: Zi, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), Ru = lt, ut = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Zr(), s = x(() => e.show === null && i !== null ? (i.value & G.Open) === G.Open : e.show);
  le(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = Yi(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: x(() => e.appear || !l.value) };
  return V(() => {
    le(() => {
      l.value = !1, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), de(nn, o), de(rn, u), () => {
    let c = Bi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return Z({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [N(Ru, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...v, ...c }, n.default)] }, attrs: {}, features: Zi, visible: a.value === "visible", name: "Transition" });
  };
} });
const Bu = {
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
    hasConfirmModal: () => !!p.confirmModal.value,
    title: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.title ? p.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.text ? p.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.confirmButton ? p.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.cancelButton ? p.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.confirmPassword ? p.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.confirmPasswordOnce ? p.confirmModal.value.confirmPasswordOnce : !1;
    },
    confirmDanger: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.confirmDanger ? p.confirmModal.value.confirmDanger : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      p.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
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
      p.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ne.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), p.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), p.clearConfirmModal();
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
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
};
function es(e, t) {
  t = Yr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$t(t[r++])];
  return r && r == n ? e : void 0;
}
function be(e, t, r) {
  var n = e == null ? void 0 : es(e, t);
  return n === void 0 ? r : n;
}
var ju = function() {
  try {
    var e = Qe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ln = ju;
function ts(e, t, r) {
  t == "__proto__" && Ln ? Ln(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Mu = Object.prototype, Du = Mu.hasOwnProperty;
function Nu(e, t, r) {
  var n = e[t];
  (!(Du.call(e, t) && Kr(n, r)) || r === void 0 && !(t in e)) && ts(e, t, r);
}
function Vu(e, t, r, n) {
  if (!J(e))
    return e;
  t = Yr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = $t(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = J(c) ? c : Rr(t[i + 1]) ? [] : {});
    }
    Nu(o, l, u), o = o[l];
  }
  return e;
}
function St(e, t, r) {
  return e == null ? e : Vu(e, t, r);
}
const Hu = {
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
      let e = p.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && p.remember(this.remember, { ...this.values }, this.localStorage);
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
}, Uu = {
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
      let t = p.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      p.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
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
var Wu = function() {
  return ve.Date.now();
};
const mr = Wu;
var zu = /\s/;
function Gu(e) {
  for (var t = e.length; t-- && zu.test(e.charAt(t)); )
    ;
  return t;
}
var Xu = /^\s+/;
function Ku(e) {
  return e && e.slice(0, Gu(e) + 1).replace(Xu, "");
}
var Rn = 0 / 0, Ju = /^[-+]0x[0-9a-f]+$/i, Qu = /^0b[01]+$/i, Yu = /^0o[0-7]+$/i, Zu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Xt(e))
    return Rn;
  if (J(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = J(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ku(e);
  var r = Qu.test(e);
  return r || Yu.test(e) ? Zu(e.slice(2), r ? 2 : 8) : Ju.test(e) ? Rn : +e;
}
var ec = "Expected a function", tc = Math.max, rc = Math.min;
function er(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, v = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ec);
  t = Tr(t) || 0, J(r) && (c = !!r.leading, v = "maxWait" in r, s = v ? tc(Tr(r.maxWait) || 0, t) : s, g = "trailing" in r ? !!r.trailing : g);
  function f(w) {
    var _ = n, q = i;
    return n = i = void 0, u = w, a = e.apply(q, _), a;
  }
  function h(w) {
    return u = w, o = setTimeout(b, t), c ? f(w) : a;
  }
  function m(w) {
    var _ = w - l, q = w - u, P = t - _;
    return v ? rc(P, s - q) : P;
  }
  function d(w) {
    var _ = w - l, q = w - u;
    return l === void 0 || _ >= t || _ < 0 || v && q >= s;
  }
  function b() {
    var w = mr();
    if (d(w))
      return O(w);
    o = setTimeout(b, m(w));
  }
  function O(w) {
    return o = void 0, g && n ? f(w) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : O(mr());
  }
  function $() {
    var w = mr(), _ = d(w);
    if (n = arguments, i = this, l = w, _) {
      if (o === void 0)
        return h(l);
      if (v)
        return clearTimeout(o), o = setTimeout(b, t), f(l);
    }
    return o === void 0 && (o = setTimeout(b, t)), a;
  }
  return $.cancel = A, $.flush = S, $;
}
const nc = {
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
}, ic = {
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
      Dialog: en,
      DialogPanel: tn,
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
    }), (s, a) => (B(), ce("div", {
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
function sn(e) {
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
function ns() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && re(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = Xe(e) ? Q(e) : window, o = a.visualViewport, l = !ns() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, v = n.width / i, g = n.height / s;
  return {
    width: v,
    height: g,
    top: c,
    right: u + v,
    bottom: c + g,
    left: u,
    x: u,
    y: c
  };
}
function an(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function sc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ac(e) {
  return e === Q(e) || !re(e) ? an(e) : sc(e);
}
function pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function je(e) {
  return ((Xe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function on(e) {
  return it(je(e)).left + an(e).scrollLeft;
}
function Ee(e) {
  return Q(e).getComputedStyle(e);
}
function ln(e) {
  var t = Ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function oc(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function lc(e, t, r) {
  r === void 0 && (r = !1);
  var n = re(t), i = re(t) && oc(t), s = je(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((pe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ln(s)) && (o = ac(t)), re(t) ? (l = it(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = on(s))), {
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
function tr(e) {
  return pe(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (sn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    je(e)
  );
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(pe(e)) >= 0 ? e.ownerDocument.body : re(e) && ln(e) ? e : ss(tr(e));
}
function yt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Q(n), a = i ? [s].concat(s.visualViewport || [], ln(n) ? n : []) : n, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(yt(tr(a)))
  );
}
function uc(e) {
  return ["table", "td", "th"].indexOf(pe(e)) >= 0;
}
function Bn(e) {
  return !re(e) || // https://github.com/popperjs/popper-core/issues/837
  Ee(e).position === "fixed" ? null : e.offsetParent;
}
function cc(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && re(e)) {
    var n = Ee(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (sn(i) && (i = i.host); re(i) && ["html", "body"].indexOf(pe(i)) < 0; ) {
    var s = Ee(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = Q(e), r = Bn(e); r && uc(r) && Ee(r).position === "static"; )
    r = Bn(r);
  return r && (pe(r) === "html" || pe(r) === "body" && Ee(r).position === "static") ? t : r || cc(e) || t;
}
var oe = "top", he = "bottom", Re = "right", we = "left", un = "auto", nr = [oe, he, Re, we], st = "start", Ot = "end", dc = "clippingParents", as = "viewport", mt = "popper", fc = "reference", jn = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + Ot]);
}, []), pc = /* @__PURE__ */ [].concat(nr, [un]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + Ot]);
}, []), hc = "beforeRead", mc = "read", vc = "afterRead", gc = "beforeMain", yc = "main", bc = "afterMain", wc = "beforeWrite", Sc = "write", Oc = "afterWrite", $c = [hc, mc, vc, gc, yc, bc, wc, Sc, Oc];
function Ec(e) {
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
function Tc(e) {
  var t = Ec(e);
  return $c.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function xc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function _c(e) {
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
function Ic(e, t) {
  var r = Q(e), n = je(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = ns();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + on(e),
    y: l
  };
}
function Ac(e) {
  var t, r = je(e), n = an(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = ze(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = ze(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + on(e), l = -n.scrollTop;
  return Ee(i || r).direction === "rtl" && (o += ze(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Pc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && sn(r)) {
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
function qc(e, t) {
  var r = it(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mn(e, t, r) {
  return t === as ? _r(Ic(e, r)) : Xe(t) ? qc(t, r) : _r(Ac(je(e)));
}
function Cc(e) {
  var t = yt(tr(e)), r = ["absolute", "fixed"].indexOf(Ee(e).position) >= 0, n = r && re(e) ? rr(e) : e;
  return Xe(n) ? t.filter(function(i) {
    return Xe(i) && Pc(i, n) && pe(i) !== "body";
  }) : [];
}
function Fc(e, t, r, n) {
  var i = t === "clippingParents" ? Cc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Mn(e, u, n);
    return l.top = ze(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = ze(c.left, l.left), l;
  }, Mn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Fe(e) {
  return e.split("-")[0];
}
function at(e) {
  return e.split("-")[1];
}
function os(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ls(e) {
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
    case Re:
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
  var u = i ? os(i) : null;
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
function us() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function kc(e) {
  return Object.assign({}, us(), e);
}
function Lc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function cn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? dc : o, u = r.rootBoundary, c = u === void 0 ? as : u, v = r.elementContext, g = v === void 0 ? mt : v, f = r.altBoundary, h = f === void 0 ? !1 : f, m = r.padding, d = m === void 0 ? 0 : m, b = kc(typeof d != "number" ? d : Lc(d, nr)), O = g === mt ? fc : mt, A = e.rects.popper, S = e.elements[h ? O : g], $ = Fc(Xe(S) ? S : S.contextElement || je(e.elements.popper), l, c, a), w = it(e.elements.reference), _ = ls({
    reference: w,
    element: A,
    strategy: "absolute",
    placement: i
  }), q = _r(Object.assign({}, A, _)), P = g === mt ? q : w, k = {
    top: $.top - P.top + b.top,
    bottom: P.bottom - $.bottom + b.bottom,
    left: $.left - P.left + b.left,
    right: P.right - $.right + b.right
  }, j = e.modifiersData.offset;
  if (g === mt && j) {
    var H = j[i];
    Object.keys(k).forEach(function(F) {
      var E = [Re, he].indexOf(F) >= 0 ? 1 : -1, T = [oe, he].indexOf(F) >= 0 ? "y" : "x";
      k[F] += H[T] * E;
    });
  }
  return k;
}
var Dn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Rc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Dn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, v = [], g = !1, f = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        m(), c.options = Object.assign({}, s, c.options, O), c.scrollParents = {
          reference: Xe(o) ? yt(o) : o.contextElement ? yt(o.contextElement) : [],
          popper: yt(l)
        };
        var A = Tc(_c([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = A.filter(function(S) {
          return S.enabled;
        }), h(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var b = c.elements, O = b.reference, A = b.popper;
          if (Nn(O, A)) {
            c.rects = {
              reference: lc(O, rr(A), c.options.strategy === "fixed"),
              popper: is(A)
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
      update: xc(function() {
        return new Promise(function(d) {
          f.forceUpdate(), d(c);
        });
      }),
      destroy: function() {
        m(), g = !0;
      }
    };
    if (!Nn(o, l))
      return f;
    f.setOptions(u).then(function(d) {
      !g && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function h() {
      c.orderedModifiers.forEach(function(d) {
        var b = d.name, O = d.options, A = O === void 0 ? {} : O, S = d.effect;
        if (typeof S == "function") {
          var $ = S({
            state: c,
            name: b,
            instance: f,
            options: A
          }), w = function() {
          };
          v.push($ || w);
        }
      });
    }
    function m() {
      v.forEach(function(d) {
        return d();
      }), v = [];
    }
    return f;
  };
}
var Ft = {
  passive: !0
};
function Bc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), o && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), o && l.removeEventListener("resize", r.update, Ft);
  };
}
const jc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bc,
  data: {}
};
function Mc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Dc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Mc,
  data: {}
};
var Nc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vc(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: nt(r * i) / i || 0,
    y: nt(n * i) / i || 0
  };
}
function Vn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, v = e.isFixed, g = a.x, f = g === void 0 ? 0 : g, h = a.y, m = h === void 0 ? 0 : h, d = typeof c == "function" ? c({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = d.x, m = d.y;
  var b = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), A = we, S = oe, $ = window;
  if (u) {
    var w = rr(r), _ = "clientHeight", q = "clientWidth";
    if (w === Q(r) && (w = je(r), Ee(w).position !== "static" && o === "absolute" && (_ = "scrollHeight", q = "scrollWidth")), w = w, i === oe || (i === we || i === Re) && s === Ot) {
      S = he;
      var P = v && w === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      m -= P - n.height, m *= l ? 1 : -1;
    }
    if (i === we || (i === oe || i === he) && s === Ot) {
      A = Re;
      var k = v && w === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[q]
      );
      f -= k - n.width, f *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: o
  }, u && Nc), H = c === !0 ? Vc({
    x: f,
    y: m
  }, Q(r)) : {
    x: f,
    y: m
  };
  if (f = H.x, m = H.y, l) {
    var F;
    return Object.assign({}, j, (F = {}, F[S] = O ? "0" : "", F[A] = b ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, j, (t = {}, t[S] = O ? m + "px" : "", t[A] = b ? f + "px" : "", t.transform = "", t));
}
function Hc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o, u = {
    placement: Fe(t.placement),
    variation: at(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Uc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Hc,
  data: {}
};
function Wc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !pe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function zc(e) {
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
const Gc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Wc,
  effect: zc,
  requires: ["computeStyles"]
};
var Xc = [jc, Dc, Uc, Gc], Kc = /* @__PURE__ */ Rc({
  defaultModifiers: Xc
});
function Jc(e) {
  return e === "x" ? "y" : "x";
}
function Rt(e, t, r) {
  return ze(e, Vt(t, r));
}
function Qc(e, t, r) {
  var n = Rt(e, t, r);
  return n > r ? r : n;
}
function Yc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, v = r.padding, g = r.tether, f = g === void 0 ? !0 : g, h = r.tetherOffset, m = h === void 0 ? 0 : h, d = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: v,
    altBoundary: c
  }), b = Fe(t.placement), O = at(t.placement), A = !O, S = os(b), $ = Jc(S), w = t.modifiersData.popperOffsets, _ = t.rects.reference, q = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, k = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var F, E = S === "y" ? oe : we, T = S === "y" ? he : Re, I = S === "y" ? "height" : "width", C = w[S], ge = C + d[E], U = C - d[T], ct = f ? -q[I] / 2 : 0, It = O === st ? _[I] : q[I], Ie = O === st ? -q[I] : -_[I], Ze = t.elements.arrow, Ae = f && Ze ? is(Ze) : {
        width: 0,
        height: 0
      }, Pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : us(), dt = Pe[E], At = Pe[T], Me = Rt(0, _[I], Ae[I]), sr = A ? _[I] / 2 - ct - Me - dt - k.mainAxis : It - Me - dt - k.mainAxis, Ss = A ? -_[I] / 2 + ct + Me + At + k.mainAxis : Ie + Me + At + k.mainAxis, ar = t.elements.arrow && rr(t.elements.arrow), Os = ar ? S === "y" ? ar.clientTop || 0 : ar.clientLeft || 0 : 0, hn = (F = j == null ? void 0 : j[S]) != null ? F : 0, $s = C + sr - hn - Os, Es = C + Ss - hn, mn = Rt(f ? Vt(ge, $s) : ge, C, f ? ze(U, Es) : U);
      w[S] = mn, H[S] = mn - C;
    }
    if (o) {
      var vn, Ts = S === "x" ? oe : we, xs = S === "x" ? he : Re, De = w[$], Pt = $ === "y" ? "height" : "width", gn = De + d[Ts], yn = De - d[xs], or = [oe, we].indexOf(b) !== -1, bn = (vn = j == null ? void 0 : j[$]) != null ? vn : 0, wn = or ? gn : De - _[Pt] - q[Pt] - bn + k.altAxis, Sn = or ? De + _[Pt] + q[Pt] - bn - k.altAxis : yn, On = f && or ? Qc(wn, De, Sn) : Rt(f ? wn : gn, De, f ? Sn : yn);
      w[$] = On, H[$] = On - De;
    }
    t.modifiersData[n] = H;
  }
}
const Zc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yc,
  requiresIfExists: ["offset"]
};
var ed = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ed[t];
  });
}
var td = {
  start: "end",
  end: "start"
};
function Hn(e) {
  return e.replace(/start|end/g, function(t) {
    return td[t];
  });
}
function rd(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? pc : l, c = at(n), v = c ? o ? jn : jn.filter(function(h) {
    return at(h) === c;
  }) : nr, g = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  g.length === 0 && (g = v);
  var f = g.reduce(function(h, m) {
    return h[m] = cn(e, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Fe(m)], h;
  }, {});
  return Object.keys(f).sort(function(h, m) {
    return f[h] - f[m];
  });
}
function nd(e) {
  if (Fe(e) === un)
    return [];
  var t = Bt(e);
  return [Hn(e), t, Hn(t)];
}
function id(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, v = r.rootBoundary, g = r.altBoundary, f = r.flipVariations, h = f === void 0 ? !0 : f, m = r.allowedAutoPlacements, d = t.options.placement, b = Fe(d), O = b === d, A = l || (O || !h ? [Bt(d)] : nd(d)), S = [d].concat(A).reduce(function(Ae, Pe) {
      return Ae.concat(Fe(Pe) === un ? rd(t, {
        placement: Pe,
        boundary: c,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : Pe);
    }, []), $ = t.rects.reference, w = t.rects.popper, _ = /* @__PURE__ */ new Map(), q = !0, P = S[0], k = 0; k < S.length; k++) {
      var j = S[k], H = Fe(j), F = at(j) === st, E = [oe, he].indexOf(H) >= 0, T = E ? "width" : "height", I = cn(t, {
        placement: j,
        boundary: c,
        rootBoundary: v,
        altBoundary: g,
        padding: u
      }), C = E ? F ? Re : we : F ? he : oe;
      $[T] > w[T] && (C = Bt(C));
      var ge = Bt(C), U = [];
      if (s && U.push(I[H] <= 0), o && U.push(I[C] <= 0, I[ge] <= 0), U.every(function(Ae) {
        return Ae;
      })) {
        P = j, q = !1;
        break;
      }
      _.set(j, U);
    }
    if (q)
      for (var ct = h ? 3 : 1, It = function(Pe) {
        var dt = S.find(function(At) {
          var Me = _.get(At);
          if (Me)
            return Me.slice(0, Pe).every(function(sr) {
              return sr;
            });
        });
        if (dt)
          return P = dt, "break";
      }, Ie = ct; Ie > 0; Ie--) {
        var Ze = It(Ie);
        if (Ze === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const sd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: id,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, _e = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ad = {
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
    this.teleport && await Oe();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Kc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [sd, Zc],
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
}, od = { ref: "tooltip" };
function ld(e, t, r, n, i, s) {
  const a = Lr("OnClickOutside");
  return B(), X(a, {
    style: jt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: oi(() => [
      gr("div", {
        ref: "button",
        style: jt(s.buttonStyle)
      }, [
        K(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      gr("div", od, [
        K(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ud = /* @__PURE__ */ _e(ad, [["render", ld]]), cd = {
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
    return (n, i) => ee(t).isSsr ? (B(), X(ue, {
      key: e.keepAliveKey,
      html: ee(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (B(), X(si, {
      key: 0,
      max: ee(r).max_keep_alive
    }, [
      (B(), X(ue, {
        key: e.keepAliveKey,
        html: ee(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function cs(e) {
  return e && e.length ? e[0] : void 0;
}
const dd = {
  inject: ["stack"],
  computed: {
    values() {
      return p.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return W(e.values, t);
      },
      first(t) {
        return cs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, fd = {
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
      return p.currentStack.value;
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
      this.pendingVisit && p.currentStack.value === this.stack && (p.visit(this.pendingVisit), this.pendingVisit = null);
    },
    handlePendingRefresh() {
      this.pendingRefresh && p.currentStack.value === this.stack && (p.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll), this.pendingRefresh = !1);
    },
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.preserveScroll", i = "splade.redirect", s = "splade.refresh", a = "splade.toast";
          let o = null, l = !1, u = !1, c = [];
          te(r, (v) => {
            J(v) && (i in v && (o = v[i]), n in v && (l = v[n]), s in v && (u = v[s]), a in v && c.push(v));
          }), o ? this.pendingVisit = o : u ? this.pendingRefresh = { preserveScroll: l } : this.events.push({ name: e, data: r }), c.length > 0 && c.forEach((v) => {
            p.pushToast(v);
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
function pd() {
  this.__data__ = new Te(), this.size = 0;
}
function hd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function md(e) {
  return this.__data__.get(e);
}
function vd(e) {
  return this.__data__.has(e);
}
var gd = 200;
function yd(e, t) {
  var r = this.__data__;
  if (r instanceof Te) {
    var n = r.__data__;
    if (!wt || n.length < gd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new xe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Se(e) {
  var t = this.__data__ = new Te(e);
  this.size = t.size;
}
Se.prototype.clear = pd;
Se.prototype.delete = hd;
Se.prototype.get = md;
Se.prototype.has = vd;
Se.prototype.set = yd;
var bd = "__lodash_hash_undefined__";
function wd(e) {
  return this.__data__.set(e, bd), this;
}
function Sd(e) {
  return this.__data__.has(e);
}
function Ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new xe(); ++t < r; )
    this.add(e[t]);
}
Ht.prototype.add = Ht.prototype.push = wd;
Ht.prototype.has = Sd;
function Od(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function $d(e, t) {
  return e.has(t);
}
var Ed = 1, Td = 2;
function ds(e, t, r, n, i, s) {
  var a = r & Ed, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, g = !0, f = r & Td ? new Ht() : void 0;
  for (s.set(e, t), s.set(t, e); ++v < o; ) {
    var h = e[v], m = t[v];
    if (n)
      var d = a ? n(m, h, v, t, e, s) : n(h, m, v, e, t, s);
    if (d !== void 0) {
      if (d)
        continue;
      g = !1;
      break;
    }
    if (f) {
      if (!Od(t, function(b, O) {
        if (!$d(f, O) && (h === b || i(h, b, r, n, s)))
          return f.push(O);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === m || i(h, m, r, n, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
var xd = ve.Uint8Array;
const Un = xd;
function _d(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Id(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ad = 1, Pd = 2, qd = "[object Boolean]", Cd = "[object Date]", Fd = "[object Error]", kd = "[object Map]", Ld = "[object Number]", Rd = "[object RegExp]", Bd = "[object Set]", jd = "[object String]", Md = "[object Symbol]", Dd = "[object ArrayBuffer]", Nd = "[object DataView]", Wn = ke ? ke.prototype : void 0, vr = Wn ? Wn.valueOf : void 0;
function Vd(e, t, r, n, i, s, a) {
  switch (r) {
    case Nd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Dd:
      return !(e.byteLength != t.byteLength || !s(new Un(e), new Un(t)));
    case qd:
    case Cd:
    case Ld:
      return Kr(+e, +t);
    case Fd:
      return e.name == t.name && e.message == t.message;
    case Rd:
    case jd:
      return e == t + "";
    case kd:
      var o = _d;
    case Bd:
      var l = n & Ad;
      if (o || (o = Id), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Pd, a.set(e, t);
      var c = ds(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Md:
      if (vr)
        return vr.call(e) == vr.call(t);
  }
  return !1;
}
function Hd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Ud(e, t, r) {
  var n = t(e);
  return M(e) ? n : Hd(n, r(e));
}
function fs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Wd() {
  return [];
}
var zd = Object.prototype, Gd = zd.propertyIsEnumerable, zn = Object.getOwnPropertySymbols, Xd = zn ? function(e) {
  return e == null ? [] : (e = Object(e), fs(zn(e), function(t) {
    return Gd.call(e, t);
  }));
} : Wd;
const Kd = Xd;
function Gn(e) {
  return Ud(e, Wt, Kd);
}
var Jd = 1, Qd = Object.prototype, Yd = Qd.hasOwnProperty;
function Zd(e, t, r, n, i, s) {
  var a = r & Jd, o = Gn(e), l = o.length, u = Gn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var v = l; v--; ) {
    var g = o[v];
    if (!(a ? g in t : Yd.call(t, g)))
      return !1;
  }
  var f = s.get(e), h = s.get(t);
  if (f && h)
    return f == t && h == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var d = a; ++v < l; ) {
    g = o[v];
    var b = e[g], O = t[g];
    if (n)
      var A = a ? n(O, b, g, t, e, s) : n(b, O, g, e, t, s);
    if (!(A === void 0 ? b === O || i(b, O, r, n, s) : A)) {
      m = !1;
      break;
    }
    d || (d = g == "constructor");
  }
  if (m && !d) {
    var S = e.constructor, $ = t.constructor;
    S != $ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof $ == "function" && $ instanceof $) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var ef = Qe(ve, "DataView");
const Ir = ef;
var tf = Qe(ve, "Promise");
const Ar = tf;
var rf = Qe(ve, "Set");
const Pr = rf;
var nf = Qe(ve, "WeakMap");
const qr = nf;
var Xn = "[object Map]", sf = "[object Object]", Kn = "[object Promise]", Jn = "[object Set]", Qn = "[object WeakMap]", Yn = "[object DataView]", af = Je(Ir), of = Je(wt), lf = Je(Ar), uf = Je(Pr), cf = Je(qr), Ve = Be;
(Ir && Ve(new Ir(new ArrayBuffer(1))) != Yn || wt && Ve(new wt()) != Xn || Ar && Ve(Ar.resolve()) != Kn || Pr && Ve(new Pr()) != Jn || qr && Ve(new qr()) != Qn) && (Ve = function(e) {
  var t = Be(e), r = t == sf ? e.constructor : void 0, n = r ? Je(r) : "";
  if (n)
    switch (n) {
      case af:
        return Yn;
      case of:
        return Xn;
      case lf:
        return Kn;
      case uf:
        return Jn;
      case cf:
        return Qn;
    }
  return t;
});
const Zn = Ve;
var df = 1, ei = "[object Arguments]", ti = "[object Array]", kt = "[object Object]", ff = Object.prototype, ri = ff.hasOwnProperty;
function pf(e, t, r, n, i, s) {
  var a = M(e), o = M(t), l = a ? ti : Zn(e), u = o ? ti : Zn(t);
  l = l == ei ? kt : l, u = u == ei ? kt : u;
  var c = l == kt, v = u == kt, g = l == u;
  if (g && yr(e)) {
    if (!yr(t))
      return !1;
    a = !0, c = !1;
  }
  if (g && !c)
    return s || (s = new Se()), a || hi(e) ? ds(e, t, r, n, i, s) : Vd(e, t, l, r, n, i, s);
  if (!(r & df)) {
    var f = c && ri.call(e, "__wrapped__"), h = v && ri.call(t, "__wrapped__");
    if (f || h) {
      var m = f ? e.value() : e, d = h ? t.value() : t;
      return s || (s = new Se()), i(m, d, r, n, s);
    }
  }
  return g ? (s || (s = new Se()), Zd(e, t, r, n, i, s)) : !1;
}
function ir(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Le(e) && !Le(t) ? e !== e && t !== t : pf(e, t, r, n, ir, i);
}
var hf = 1, mf = 2;
function vf(e, t, r, n) {
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
      var v = new Se();
      if (n)
        var g = n(u, c, l, e, t, v);
      if (!(g === void 0 ? ir(c, u, hf | mf, n, v) : g))
        return !1;
    }
  }
  return !0;
}
function ps(e) {
  return e === e && !J(e);
}
function gf(e) {
  for (var t = Wt(e), r = t.length; r--; ) {
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
function yf(e) {
  var t = gf(e);
  return t.length == 1 && t[0][2] ? hs(t[0][0], t[0][1]) : function(r) {
    return r === e || vf(r, e, t);
  };
}
function bf(e, t) {
  return e != null && t in Object(e);
}
function wf(e, t) {
  return e != null && ki(e, t, bf);
}
var Sf = 1, Of = 2;
function $f(e, t) {
  return Xr(e) && ps(t) ? hs($t(e), t) : function(r) {
    var n = be(r, e);
    return n === void 0 && n === t ? wf(r, e) : ir(t, n, Sf | Of);
  };
}
function Ef(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Tf(e) {
  return function(t) {
    return es(t, e);
  };
}
function xf(e) {
  return Xr(e) ? Ef($t(e)) : Tf(e);
}
function _t(e) {
  return typeof e == "function" ? e : e == null ? vi : typeof e == "object" ? M(e) ? $f(e[0], e[1]) : yf(e) : xf(e);
}
function _f(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ut(t)) {
      var s = _t(r);
      t = Wt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function If(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ni = 1 / 0, Af = 17976931348623157e292;
function Pf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ni || e === -ni) {
    var t = e < 0 ? -1 : 1;
    return t * Af;
  }
  return e === e ? e : 0;
}
function dn(e) {
  var t = Pf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var qf = Math.max;
function Cf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dn(r);
  return i < 0 && (i = qf(n + i, 0)), If(e, _t(t), i);
}
var Ff = _f(Cf);
const fn = Ff, kf = {
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
      return e ? se(e) ? e : M(e) ? e.map(this.extractMetadataFromExistingFile) : J(e) ? e.options.metadata.metadata : null : null;
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
                const h = new File([f.data], a.name, { type: a.type });
                o(h);
              }).catch(function(f) {
                axios.isCancel(f) || l(f);
              }), {
                abort: () => {
                  g.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, v, g) => {
            const f = new FormData();
            f.append("file", o, o.name);
            const m = ne.CancelToken.source();
            ne({
              url: r.server,
              method: "POST",
              data: f,
              cancelToken: m.token,
              onUploadProgress: (d) => {
                v(d.lengthComputable, d.loaded, d.total);
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
}, Lf = { ref: "file" };
function Rf(e, t, r, n, i, s) {
  return B(), ce("div", Lf, [
    K(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Bf = /* @__PURE__ */ _e(kf, [["render", Rf]]), jf = {
  inject: ["stack"],
  computed: {
    values() {
      return p.flashData(this.stack);
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
var Mf = "[object Boolean]";
function gs(e) {
  return e === !0 || e === !1 || Le(e) && Be(e) == Mf;
}
function ys(e, t) {
  var r = {};
  return t = _t(t), jr(e, function(n, i, s) {
    ts(r, i, t(n, i, s));
  }), r;
}
function bs(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function et(e, t, r) {
  return e = Qr(e), r = r == null ? 0 : bs(dn(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Df = {
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
        return p.isSsr ? "" : location.href;
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
      return p.validationErrors(this.stack);
    },
    /*
     * Flattens the raw errors.
     */
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
    }, { deep: !0 }) : M(this.submitOnChange) && this.submitOnChange.forEach((r) => {
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
      p.confirm(
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
      const t = this.values instanceof FormData ? this.values : pn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0), this.stack > 0 && this.keepModal && (r["X-Splade-Modal"] = p.stackType(this.stack), r["X-Splade-Modal-Target"] = this.stack);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      p.request(this.action, n, t, { ...r, ...this.headers }, !1, this.blob).then(i).catch(async (s) => {
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
}, Nf = {
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
}, Vf = { ref: "input" };
function Hf(e, t, r, n, i, s) {
  return B(), ce("div", Vf, [
    K(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Uf = /* @__PURE__ */ _e(Nf, [["render", Hf]]), Wf = {
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
}, zf = { ref: "jodit" };
function Gf(e, t, r, n, i, s) {
  return B(), ce("div", zf, [
    K(e.$slots, "default")
  ], 512);
}
const Xf = /* @__PURE__ */ _e(Wf, [["render", Gf]]), Kf = {
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
        return p.isSsr ? "" : window.location.href;
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
      this.html = null, p.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Jf(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (B(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? K(e.$slots, "default", { key: 1 }) : Fr("", !0);
}
const Qf = /* @__PURE__ */ _e(Kf, [["render", Jf]]), Yf = ["href", "onClick"], Zf = {
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
      p.confirm(
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
        return p.modal(t.href);
      if (t.slideover && !o)
        return p.slideover(t.href);
      if (et(t.href, "#")) {
        if (p.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = p.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? p.replace(t.href, u) : p.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : pn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(se(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), p.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (B(), ce("a", {
      href: e.href,
      onClick: ks(i, ["exact", "prevent"])
    }, [
      K(a.$slots, "default")
    ], 8, Yf));
  }
}, ep = {
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
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, tp = {
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
    return p.registerPreloadedModal(t.name, t.html, t.type), t.opened && p.openPreloadedModal(t.name), () => {
    };
  }
}, rp = {
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
        return p.isSsr ? "" : window.location.href;
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
      this.loading = !0, p.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function np(e, t, r, n, i, s) {
  const a = Lr("Render");
  return i.html ? (B(), X(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? K(e.$slots, "placeholder", { key: 1 }) : K(e.$slots, "default", { key: 2 });
}
const ip = /* @__PURE__ */ _e(rp, [["render", np]]), sp = {
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
function ap(e, t) {
  var r = -1, n = Ut(e) ? Array(e.length) : [];
  return Mr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function ws(e, t) {
  var r = M(e) ? Fi : ap;
  return r(e, _t(t));
}
const op = {
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
      if (!this.choicesInstance && this.multiple && M(e)) {
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
      const r = M(e);
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
      Array.isArray(e) && (e = ws(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    /*
     * Returns the internal Choices.js item that is currently selected.
     */
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return fn(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, lp = { ref: "select" };
function up(e, t, r, n, i, s) {
  return B(), ce("div", lp, [
    K(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const cp = /* @__PURE__ */ _e(op, [["render", up]]), dp = {
  inject: ["stack"],
  render() {
    const e = p.validationErrors(this.stack), t = p.flashData(this.stack), r = p.sharedData.value, n = ys(e, (i) => i.join(`
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
function fp(e, t, r) {
  e = Qr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : bs(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function pp(e, t) {
  var r = [];
  return Mr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function hp(e, t) {
  var r = M(e) ? fs : pp;
  return r(e, _t(t));
}
function ii(e, t) {
  return ir(e, t);
}
const mp = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: !0
    },
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
    },
    paginationScroll: {
      type: String,
      required: !1,
      default: "top"
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
      return !ii(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    },
    scrollToHeadRememberKey() {
      return `spladeTableScrollToHead-${this.spladeId}`;
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
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t, p.restore(this.scrollToHeadRememberKey) && this.$nextTick(() => {
      document.querySelector(`div[data-splade-id="${this.spladeId}"]`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }), p.forget(this.scrollToHeadRememberKey);
  },
  methods: {
    navigate(e, t) {
      const r = {
        "X-Splade-Modal": p.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack,
        "X-Splade-Prevent-View-Transition": !0
      };
      (this.paginationScroll !== "top" || !t) && (r["X-Splade-Preserve-Scroll"] = !0), p.request(e, "GET", {}, r, !1).then(() => {
        !p.isSsr && this.paginationScroll === "head" && t && p.remember(this.scrollToHeadRememberKey, !0);
      });
    },
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? p.modal(e) : t === "slideover" ? p.slideover(e) : p.visit(e);
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
      const t = !this.columnIsVisible(e), r = hp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ws(r, (i) => i.key).sort();
      ii(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
        if (!fp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], M(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
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
        if (!M(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((v, g) => {
          n[`${c}[${g}]`] = v;
        });
      });
      let i = "";
      te(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : p.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": p.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      p.replace(s, o).then(() => {
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
          a = await p.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = se(s) && s ? s : "password";
        o[l] = a;
      }
      p.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = M(e) ? e : [];
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
      navigate: this.navigate,
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
}, vp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ai
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
function gp(e, t, r, n, i, s) {
  return Ls((B(), X(Rs(i.isMounted ? i.Teleport : "div"), Bs(js(e.$attrs)), {
    default: oi(() => [
      K(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ms, i.isMounted]
  ]);
}
const yp = /* @__PURE__ */ _e(vp, [["render", gp]]), bp = {
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
}, wp = { ref: "textarea" };
function Sp(e, t, r, n, i, s) {
  return B(), ce("div", wp, [
    K(e.$slots, "default")
  ], 512);
}
const Op = /* @__PURE__ */ _e(bp, [["render", Sp]]), $p = {
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
}, Ep = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Tp = {
  computed: {
    /*
     * Retrieves the toasts from the Splade instance.
     */
    toasts: function() {
      return p.toastsReversed.value;
    },
    /*
     * Determine whether a backdrop should be shown.
     */
    hasBackdrop: function() {
      return p.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      p.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Ep,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, xp = {
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
}, _p = {
  render() {
    return this.$slots.default({
      TransitionRoot: ut,
      TransitionChild: lt
    });
  }
}, Ip = {
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
          this.$emit("error", s.response.data), p.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          St(this.values, a, s);
        }), i.data.redirect ? p.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          p.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Ap = {
  created: (e, t) => {
    if (p.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = p.restore(r);
    n && Oe(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      p.remember(r, {
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
}, Fp = {
  /**
   * Registers all Splade components and makes the configured
   * options and the Splade core globally available.
   */
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = W(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = W(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = W(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = W(t, "link_component") ? t.link_component : "Link", t.progress_bar = W(t, "progress_bar") ? t.progress_bar : !1, t.components = W(t, "components") ? t.components : {}, t.view_transitions = W(t, "view_transitions") ? t.view_transitions : !1, t.suppress_compile_errors = W(t, "suppress_compile_errors") ? t.suppress_compile_errors : !1;
    const r = t.prefix;
    if (e.component(`${r}Button`, Ul).component(`${r}Confirm`, Bu).component(`${r}DataStores`, Uu).component(`${r}Data`, Hu).component(`${r}Defer`, nc).component(`${r}Dialog`, ic).component(`${r}Dropdown`, ud).component(`${r}DynamicHtml`, cd).component(`${r}Errors`, dd).component(`${r}Event`, fd).component(`${r}File`, Bf).component(`${r}Flash`, jf).component(`${r}Form`, Df).component(`${r}Input`, Uf).component(`${r}JoditEditor`, Xf).component(`${r}VueBridge`, Ip).component(`${r}Lazy`, Qf).component(`${r}Modal`, ep).component(`${r}OnClickOutside`, rs).component(`${r}PreloadedModal`, tp).component(`${r}Rehydrate`, ip).component(`${r}Render`, ue).component(`${r}Script`, sp).component(`${r}Select`, cp).component(`${r}State`, dp).component(`${r}Table`, mp).component(`${r}Teleport`, yp).component(`${r}Textarea`, Op).component(`${r}Toast`, $p).component(`${r}Toasts`, Tp).component(`${r}Toggle`, xp).component(`${r}Transition`, _p).component(t.link_component, Zf).directive(`${r}PreserveScroll`, Ap), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => p }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
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
      import("./CompilerErrorMessages-6b34f14b.js").then((i) => {
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
function kp(e, t, r) {
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
  p as Splade,
  Ho as SpladeApp,
  Fp as SpladePlugin,
  Cp as renderSpladeApp,
  kp as startServer
};
