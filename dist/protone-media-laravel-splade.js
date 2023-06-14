import ae from "axios";
import { ref as y, computed as T, watch as ut, openBlock as L, createBlock as Y, unref as ne, createCommentVNode as Fr, h as D, nextTick as Ee, onMounted as U, createElementBlock as me, createElementVNode as vr, provide as de, inject as z, KeepAlive as ii, normalizeStyle as jt, createVNode as As, Fragment as kr, renderList as Is, cloneVNode as Ps, watchEffect as fe, defineComponent as K, onUnmounted as pe, Teleport as si, reactive as qs, shallowRef as Cs, normalizeClass as Fs, onBeforeUnmount as ks, renderSlot as Z, resolveComponent as Lr, withCtx as ai, withModifiers as Ls, withDirectives as Ms, resolveDynamicComponent as Bs, normalizeProps as js, guardReactiveProps as Rs, vShow as Ds } from "vue";
function Ns(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Vs(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), o = n(t), a = o.length; a--; ) {
      var l = o[e ? a : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Us = Vs();
const Hs = Us;
function Ws(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zs = typeof global == "object" && global && global.Object === Object && global;
const oi = zs;
var Gs = typeof self == "object" && self && self.Object === Object && self, Xs = oi || Gs || Function("return this")();
const be = Xs;
var Ks = be.Symbol;
const Me = Ks;
var li = Object.prototype, Js = li.hasOwnProperty, Qs = li.toString, ht = Me ? Me.toStringTag : void 0;
function Ys(e) {
  var t = Js.call(e, ht), r = e[ht];
  try {
    e[ht] = void 0;
    var n = !0;
  } catch {
  }
  var i = Qs.call(e);
  return n && (t ? e[ht] = r : delete e[ht]), i;
}
var Zs = Object.prototype, ea = Zs.toString;
function ta(e) {
  return ea.call(e);
}
var ra = "[object Null]", na = "[object Undefined]", Sn = Me ? Me.toStringTag : void 0;
function Re(e) {
  return e == null ? e === void 0 ? na : ra : Sn && Sn in Object(e) ? Ys(e) : ta(e);
}
function Be(e) {
  return e != null && typeof e == "object";
}
var ia = "[object Arguments]";
function On(e) {
  return Be(e) && Re(e) == ia;
}
var ui = Object.prototype, sa = ui.hasOwnProperty, aa = ui.propertyIsEnumerable, oa = On(function() {
  return arguments;
}()) ? On : function(e) {
  return Be(e) && sa.call(e, "callee") && !aa.call(e, "callee");
};
const ci = oa;
var la = Array.isArray;
const j = la;
function ua() {
  return !1;
}
var di = typeof exports == "object" && exports && !exports.nodeType && exports, $n = di && typeof module == "object" && module && !module.nodeType && module, ca = $n && $n.exports === di, En = ca ? be.Buffer : void 0, da = En ? En.isBuffer : void 0, fa = da || ua;
const gr = fa;
var pa = 9007199254740991, ha = /^(?:0|[1-9]\d*)$/;
function Mr(e, t) {
  var r = typeof e;
  return t = t ?? pa, !!t && (r == "number" || r != "symbol" && ha.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ma = 9007199254740991;
function Br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ma;
}
var va = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", Sa = "[object Function]", Oa = "[object Map]", $a = "[object Number]", Ea = "[object Object]", Ta = "[object RegExp]", xa = "[object Set]", _a = "[object String]", Aa = "[object WeakMap]", Ia = "[object ArrayBuffer]", Pa = "[object DataView]", qa = "[object Float32Array]", Ca = "[object Float64Array]", Fa = "[object Int8Array]", ka = "[object Int16Array]", La = "[object Int32Array]", Ma = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", ja = "[object Uint16Array]", Ra = "[object Uint32Array]", q = {};
q[qa] = q[Ca] = q[Fa] = q[ka] = q[La] = q[Ma] = q[Ba] = q[ja] = q[Ra] = !0;
q[va] = q[ga] = q[Ia] = q[ya] = q[Pa] = q[ba] = q[wa] = q[Sa] = q[Oa] = q[$a] = q[Ea] = q[Ta] = q[xa] = q[_a] = q[Aa] = !1;
function Da(e) {
  return Be(e) && Br(e.length) && !!q[Re(e)];
}
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, bt = fi && typeof module == "object" && module && !module.nodeType && module, Va = bt && bt.exports === fi, lr = Va && oi.process, Ua = function() {
  try {
    var e = bt && bt.require && bt.require("util").types;
    return e || lr && lr.binding && lr.binding("util");
  } catch {
  }
}();
const Tn = Ua;
var xn = Tn && Tn.isTypedArray, Ha = xn ? Na(xn) : Da;
const pi = Ha;
var Wa = Object.prototype, za = Wa.hasOwnProperty;
function Ga(e, t) {
  var r = j(e), n = !r && ci(e), i = !r && !n && gr(e), s = !r && !n && !i && pi(e), o = r || n || i || s, a = o ? Ws(e.length, String) : [], l = a.length;
  for (var u in e)
    (t || za.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Mr(u, l))) && a.push(u);
  return a;
}
var Xa = Object.prototype;
function Ka(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xa;
  return e === r;
}
function Ja(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Qa = Ja(Object.keys, Object);
const Ya = Qa;
var Za = Object.prototype, eo = Za.hasOwnProperty;
function to(e) {
  if (!Ka(e))
    return Ya(e);
  var t = [];
  for (var r in Object(e))
    eo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ro = "[object AsyncFunction]", no = "[object Function]", io = "[object GeneratorFunction]", so = "[object Proxy]";
function hi(e) {
  if (!ee(e))
    return !1;
  var t = Re(e);
  return t == no || t == io || t == ro || t == so;
}
function Ht(e) {
  return e != null && Br(e.length) && !hi(e);
}
function Wt(e) {
  return Ht(e) ? Ga(e) : to(e);
}
function jr(e, t) {
  return e && Hs(e, t, Wt);
}
function ao(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ht(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, o = Object(r); (t ? s-- : ++s < i) && n(o[s], s, o) !== !1; )
      ;
    return r;
  };
}
var oo = ao(jr);
const Rr = oo;
function mi(e) {
  return e;
}
function vi(e) {
  return typeof e == "function" ? e : mi;
}
function lo(e, t) {
  var r = j(e) ? Ns : Rr;
  return r(e, vi(t));
}
function ie(e, t) {
  return e && jr(e, vi(t));
}
var uo = Array.prototype, co = uo.reverse;
function fo(e) {
  return e == null ? e : co.call(e);
}
class gi {
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
const Rt = y(0), oe = y(1), C = y({}), ue = y(0), zt = y({}), nt = {}, Te = typeof window > "u";
function po(e, t, r) {
  Te || window.addEventListener("popstate", ho.bind(this)), Object.keys(t).length > 0 && Rt.value++, nt[oe.value] = new gi(oe.value), Ur(r), Gt(r.head), Hr(e);
  const n = Te ? "" : location.href, i = Dr(
    n,
    r.head,
    e,
    t,
    {},
    oe.value,
    Rt.value,
    r.persistentLayout
  );
  yi(i);
}
function ho(e) {
  e.state && (C.value = e.state, ue.value = 0, zt.value = {}, Wr.value = {}, Nr.value = C.value.persistentLayoutKey, Gt(C.value.head), Hr(C.value.html, C.value.rememberedState.scrollY), we("history:popped-state", C.value.url));
}
function Dr(e, t, r, n, i, s, o, a) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: o,
    persistentLayoutKey: a
  };
  return C.value = l, l;
}
function mo(e) {
  Te || (window.history.pushState(e, "", e.url), we("history:pushed-state", { url: e.url }));
}
function vo(e) {
  const t = Dr(
    e,
    JSON.parse(JSON.stringify(C.value.head)),
    C.value.html,
    JSON.parse(JSON.stringify(C.value.dynamics)),
    { ...C.value.rememberedState },
    C.value.pageVisitId,
    C.value.dynamicVisitId,
    C.value.persistentLayoutKey
  );
  Te || (window.history.replaceState(t, "", t.url), we("history:replaced-state", { url: t.url }));
}
function yi(e) {
  Te || (window.history.replaceState(e, "", e.url), we("history:replaced-state", { url: e.url }));
}
const ur = y(0), Nr = y(null);
function go(e) {
  const t = URL.createObjectURL(e.data), r = e.headers["content-disposition"].split("filename=")[1], n = document.createElement("a");
  n.href = t, n.download = r, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), URL.revokeObjectURL(t);
  }, 1);
}
function yo(e, t, r) {
  var h;
  ur.value++;
  const n = e.request.responseURL + (r ? "#" + r : "");
  if (e.data instanceof Blob) {
    go(e);
    return;
  }
  if (ee((h = e.data) == null ? void 0 : h.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ue.value++;
  const i = Nr.value;
  if (Ur(e.data.splade), Gt(e.data.splade.head), n === C.value.url && (t = !0), e.data.splade.modal)
    return Ai(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ue.value = 0, zt.value = {};
  let s = e.data.html, o = e.data.dynamics;
  const a = Object.keys(C.value.dynamics).length > 0, l = Object.keys(o).length > 0;
  t ? (l && ie(o, (m, p) => {
    o[p] += `<!-- ${ur.value} -->`;
  }), (!l || !a) && (s += `<!-- ${ur.value} -->`)) : (l && Rt.value++, (!l || !a) && (oe.value++, nt[oe.value] = nt[oe.value] || new gi(oe.value)));
  let u = e.data.splade.persistentLayout && i === e.data.splade.persistentLayout, c = 0;
  !Te && t && e.data.splade.preserveScroll && (c = window.scrollY), Hr(
    u ? C.value.html : s,
    c
  );
  const f = Dr(
    n,
    e.data.splade.head,
    u ? C.value.html : s,
    o,
    C.value.rememberedState ? { ...C.value.rememberedState } : {},
    oe.value,
    Rt.value,
    e.data.splade.persistentLayout
  );
  t ? yi(f) : mo(f);
}
function bo() {
  ue.value--, Gt(So(ue.value));
}
const bi = y({}), wi = (e) => bi.value[e], wo = (e) => Object.keys(wi.value[e]).length > 0, Si = y({}), So = (e) => Si.value[e], Oi = y({}), Oo = (e) => Oi.value[e], it = y([]);
function $o(e) {
  it.value.push(e);
}
const Eo = T(() => fo(it.value));
function To(e) {
  it.value[e].dismissed = !0, it.value[e].html = null;
}
const Vr = y(null);
function xo(e, t, r, n, i, s, o) {
  let a, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof o > "u" && (o = !1);
  const u = new Promise((c, f) => {
    a = c, l = f;
  });
  return Vr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: a,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: o
  }, u;
}
function _o() {
  Vr.value = null;
}
const $i = y({});
function Ur(e) {
  Nr.value = e.persistentLayout, $i.value = e.shared ? e.shared : {}, Oi.value[ue.value] = e.flash ? e.flash : {}, Si.value[ue.value] = e.head ? e.head : {}, lo(e.toasts ? e.toasts : [], (t) => {
    it.value.push(t);
  }), bi.value[ue.value] = e.errors ? e.errors : {};
}
const Ei = y(() => {
}), Ti = y(() => {
}), xi = y(() => {
}), _i = y(() => {
});
function Gt(e) {
  Ei.value(e);
}
function Hr(e, t) {
  Ti.value(e, t);
}
function Ai(e, t) {
  zt.value[ue.value] = !0, xi.value(e, t);
}
function Ao(e) {
  return zt.value[e];
}
function Ii(e) {
  _i.value(e);
}
const Pi = y({});
function qi(e, t, r) {
  Pi.value[e] = t, r && Io(e, t);
}
function Io(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Po(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Pi.value[e];
}
function Qe(e, t, r, n, i, s) {
  if (Te || qi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  we("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const o = ae({
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
    onUploadProgress: (a) => {
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), we("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return o.then((a) => {
    const l = e.split("#")[1] || "";
    yo(a, i, l), we("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch(async (a) => {
    if (we("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    const l = a.response;
    if (l.status == 409 && l.headers["x-splade-redirect-away"])
      return window.location = l.headers["x-splade-redirect-away"];
    let u = {};
    if (l.data instanceof Blob) {
      const c = await l.data.text();
      l.data.type === "application/json" && typeof c == "string" ? u = JSON.parse(c) || {} : l.data.html = c;
    } else
      u = l.data.splade;
    u && !u.lazy && !u.rehydrate && Ur(u), l.status != 422 && Ii(
      l.data.html ? l.data.html : l.data
    );
  }), o;
}
function Ci(e, t) {
  return typeof t > "u" && (t = {}), Qe(e, "GET", {}, t, !0);
}
function qo(e, t) {
  return typeof t > "u" && (t = {}), Qe(e, "GET", {}, t, !1);
}
function Co(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Wr = y({});
function Fo(e) {
  const t = Wr.value[e];
  return t ? (ue.value++, Ai(t.html, t.type), !0) : !1;
}
function ko(e, t, r) {
  Wr.value[e] = { html: t, type: r };
}
function Lo(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Mo(e, t) {
  return Qe(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Bo(e, t) {
  return Qe(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function jo(e) {
  typeof e > "u" && (e = !1);
  const t = {
    "X-Splade-Refresh": !0
  };
  return e && (t["X-Splade-Preserve-Scroll"] = !0), Ci(C.value.url, t);
}
function Ro(e, t) {
  nt[oe.value].on(e, t);
}
function Do(e, t) {
  nt[oe.value].off(e, t);
}
function we(e, t) {
  typeof t > "u" && (t = {}), nt[oe.value].emit(e, t), Te || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const g = {
  init: po,
  replace: Ci,
  visit: qo,
  modal: Co,
  slideover: Lo,
  refresh: jo,
  request: Qe,
  lazy: Mo,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: vo,
  htmlForDynamicComponent(e) {
    return C.value.dynamics[e];
  },
  setOnHead(e) {
    Ei.value = e;
  },
  setOnHtml(e) {
    Ti.value = e;
  },
  setOnModal(e) {
    xi.value = e;
  },
  setOnServerError(e) {
    _i.value = e;
  },
  onServerError: Ii,
  hasValidationErrors: wo,
  validationErrors: wi,
  sharedData: $i,
  // ref
  flashData: Oo,
  toasts: it,
  // ref
  toastsReversed: Eo,
  // ref
  confirmModal: Vr,
  // ref
  confirm: xo,
  clearConfirmModal: _o,
  pushToast: $o,
  dismissToast: To,
  restore: Po,
  remember: qi,
  popStack: bo,
  currentStack: ue,
  // ref
  stackType: Ao,
  pageVisitId: T(() => C.value.pageVisitId),
  // ref
  dynamicVisitId: T(() => C.value.dynamicVisitId),
  // ref
  isSsr: Te,
  openPreloadedModal: Fo,
  registerPreloadedModal: ko,
  on: Ro,
  off: Do,
  emit: we
};
var No = "[object String]";
function le(e) {
  return typeof e == "string" || !j(e) && Be(e) && Re(e) == No;
}
const he = {
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
      r.value = D({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      }), Ee(() => {
        g.emit("rendered");
      });
    }
    return ut(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (L(), Y(ne(r), { key: 0 })) : Fr("", !0);
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
      const a = document.createElement("html");
      a.innerHTML = r.html, a.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(a.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(a) {
      a.keyCode === 27 && o();
    }
    function o() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return U(() => i()), (a, l) => (L(), me("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: o
    }, [
      vr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Uo = {
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
        if (!g.isSsr) {
          const t = le(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!g.isSsr) {
          const t = le(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!g.isSsr) {
          const t = le(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!g.isSsr) {
          const t = le(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    de("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), o = y(!0), a = z("$spladeOptions") || {}, l = T(() => g.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(p) {
      n.value[p] = null, g.popStack();
    }
    function f(p) {
      const v = document.createElement("meta");
      ie(p, (d, b) => {
        v[b] = d;
      }), document.getElementsByTagName("head")[0].appendChild(v);
    }
    function h(p) {
      var d;
      let v = "meta";
      ie(p, (b, O) => {
        v = `${v}[${O}="${b}"]`;
      });
      try {
        (d = document.querySelector(v)) == null || d.remove();
      } catch {
      }
    }
    g.setOnHead((p) => {
      var v;
      if (!g.isSsr) {
        if (s.value === null) {
          s.value = p.meta;
          return;
        }
        if (s.value.forEach((d) => {
          h(d);
        }), s.value = p.meta, document.title = p.title, p.meta.forEach((d) => {
          f(d);
        }), (v = document.querySelector('link[rel="canonical"]')) == null || v.remove(), p.canonical) {
          const d = document.createElement("link");
          d.rel = "canonical", d.href = p.canonical, document.getElementsByTagName("head")[0].appendChild(d);
        }
      }
    });
    const m = (p, v) => {
      n.value = [], r.value = p, Ee(() => {
        if (!g.isSsr) {
          const d = window.location.hash;
          d && document.getElementById(d.substring(1)) ? window.location.hash = d : window.scrollTo(0, v);
        }
        a.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(b) {
            b.preventDefault(), g.visit(d.href);
          }));
        });
      });
    };
    return g.setOnHtml((p, v) => {
      if (g.isSsr || !document.startViewTransition || !a.view_transitions) {
        m(p, v);
        return;
      }
      document.startViewTransition(() => m(p, v));
    }), g.setOnModal(function(p, v) {
      n.value[g.currentStack.value] && (o.value = !1), n.value[g.currentStack.value] = { html: p, type: v }, Ee(() => {
        o.value = !0;
      });
    }), g.setOnServerError(function(p) {
      i.value = p;
    }), g.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), U(() => {
      if (g.isSsr)
        return;
      const p = le(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((v) => {
        delete p.dataset[v];
      });
    }), (p, v) => (L(), me("div", null, [
      ne(g).isSsr ? (L(), Y(he, {
        key: `visit.${ne(g).pageVisitId.value}`,
        style: jt(l.value),
        html: r.value
      }, null, 8, ["style", "html"])) : (L(), Y(ii, {
        key: 0,
        max: ne(a).max_keep_alive
      }, [
        (L(), Y(he, {
          key: `visit.${ne(g).pageVisitId.value}`,
          style: jt(l.value),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      As(he, { html: e.components }, null, 8, ["html"]),
      (L(!0), me(kr, null, Is(ne(g).currentStack.value, (d) => (L(), Y(he, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ne(g).currentStack.value === d,
        animate: o.value,
        onClose: (b) => c(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (L(), Y(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Fr("", !0)
    ]));
  }
};
function Fp(e) {
  return () => D(Uo, e);
}
var Ho = Object.prototype, Wo = Ho.hasOwnProperty;
function zo(e, t) {
  return e != null && Wo.call(e, t);
}
var Go = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Be(e) && Re(e) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function zr(e, t) {
  if (j(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? !0 : Ko.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Jo = be["__core-js_shared__"];
const cr = Jo;
var _n = function() {
  var e = /[^.]+$/.exec(cr && cr.keys && cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!_n && _n in e;
}
var Yo = Function.prototype, Zo = Yo.toString;
function Ye(e) {
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
  if (!ee(e) || Qo(e))
    return !1;
  var t = hi(e) ? al : tl;
  return t.test(Ye(e));
}
function ll(e, t) {
  return e == null ? void 0 : e[t];
}
function Ze(e, t) {
  var r = ll(e, t);
  return ol(r) ? r : void 0;
}
var ul = Ze(Object, "create");
const St = ul;
function cl() {
  this.__data__ = St ? St(null) : {}, this.size = 0;
}
function dl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  if (St) {
    var r = t[e];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e) ? t[e] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return St ? t[e] !== void 0 : gl.call(t, e);
}
var bl = "__lodash_hash_undefined__";
function wl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = St && t === void 0 ? bl : t, this;
}
function Ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ke.prototype.clear = cl;
Ke.prototype.delete = dl;
Ke.prototype.get = ml;
Ke.prototype.has = yl;
Ke.prototype.set = wl;
function Sl() {
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
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Sl;
_e.prototype.delete = El;
_e.prototype.get = Tl;
_e.prototype.has = xl;
_e.prototype.set = _l;
var Al = Ze(be, "Map");
const Ot = Al;
function Il() {
  this.size = 0, this.__data__ = {
    hash: new Ke(),
    map: new (Ot || _e)(),
    string: new Ke()
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
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = Il;
Ae.prototype.delete = ql;
Ae.prototype.get = Cl;
Ae.prototype.has = Fl;
Ae.prototype.set = kl;
var Ll = "Expected a function";
function Xr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ll);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var o = e.apply(this, n);
    return r.cache = s.set(i, o) || s, o;
  };
  return r.cache = new (Xr.Cache || Ae)(), r;
}
Xr.Cache = Ae;
var Ml = 500;
function Bl(e) {
  var t = Xr(e, function(n) {
    return r.size === Ml && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rl = /\\(\\)?/g, Dl = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(jl, function(r, n, i, s) {
    t.push(i ? s.replace(Rl, "$1") : n || r);
  }), t;
});
const Nl = Dl;
function Fi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Vl = 1 / 0, An = Me ? Me.prototype : void 0, In = An ? An.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (j(e))
    return Fi(e, Qt) + "";
  if (Xt(e))
    return In ? In.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Kr(e) {
  return e == null ? "" : Qt(e);
}
function Jr(e, t) {
  return j(e) ? e : zr(e, t) ? [e] : Nl(Kr(e));
}
var Ul = 1 / 0;
function Tt(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ul ? "-0" : t;
}
function ki(e, t, r) {
  t = Jr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var o = Tt(t[n]);
    if (!(s = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Br(i) && Mr(o, i) && (j(e) || ci(e)));
}
function X(e, t) {
  return e != null && ki(e, t, zo);
}
const Hl = {
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
function ve(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, ve), n;
}
var Dt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Dt || {}), ke = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ke || {});
function re({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let o = Mi(n, r), a = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return dr(a);
  if (t & 1) {
    let l = (s = o.unmount) == null || s ? 0 : 1;
    return ve(l, { [0]() {
      return null;
    }, [1]() {
      return dr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return dr(a);
}
function dr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, o;
  let { as: a, ...l } = Bi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let f = !1, h = [];
    for (let [m, p] of Object.entries(n))
      typeof p == "boolean" && (f = !0), p === !0 && h.push(m);
    f && (c["data-headlessui-state"] = h.join(" "));
  }
  if (a === "template") {
    if (u = Li(u ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...h] = u ?? [];
      if (!Wl(f) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((v) => v.trim()).filter((v, d, b) => b.indexOf(v) === d).sort((v, d) => v.localeCompare(d)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let m = Mi((o = f.props) != null ? o : {}, l), p = Ps(f, m);
      for (let v in m)
        v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = m[v]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return D(a, Object.assign({}, l, c), { default: () => u });
}
function Li(e) {
  return e.flatMap((t) => t.type === kr ? Li(t.children) : [t]);
}
function Mi(...e) {
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
      let o = r[n];
      for (let a of o) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        a(i, ...s);
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
function et() {
  return Gl();
}
var ji = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ji || {});
function N(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ri = Symbol("Context");
var Q = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Q || {});
function Xl() {
  return Qr() !== null;
}
function Qr() {
  return z(Ri, null);
}
function Kl(e) {
  de(Ri, e);
}
var Jl = Object.defineProperty, Ql = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pn = (e, t, r) => (Ql(e, typeof t != "symbol" ? t + "" : t, r), r);
class Yl {
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
let xt = new Yl();
function ct(e) {
  if (xt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = N(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let yr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Fe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Fe || {}), Di = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Di || {}), Zl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Zl || {});
function eu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(yr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ni = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ni || {});
function tu(e, t = 0) {
  var r;
  return e === ((r = ct(e)) == null ? void 0 : r.body) ? !1 : ve(t, { [0]() {
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
var ru = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ru || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ge(e) {
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
    let o = i.compareDocumentPosition(s);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Lt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let o = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, a = Array.isArray(e) ? r ? su(e) : e : eu(e);
  i.length > 0 && a.length > 1 && (a = a.filter((p) => !i.includes(p))), n = n ?? o.activeElement;
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
      return Math.max(0, a.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(n)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, h = a.length, m;
  do {
    if (f >= h || f + h <= 0)
      return 0;
    let p = u + f;
    if (t & 16)
      p = (p + h) % h;
    else {
      if (p < 0)
        return 3;
      if (p >= h)
        return 1;
    }
    m = a[p], m == null || m.focus(c), f += l;
  } while (m !== o.activeElement);
  return t & 6 && iu(m) && m.select(), 2;
}
function qn(e, t, r) {
  xt.isServer || fe((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Vi(e, t, r) {
  xt.isServer || fe((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function au(e, t, r = T(() => !0)) {
  function n(s, o) {
    if (!r.value || s.defaultPrevented)
      return;
    let a = o(s);
    if (a === null || !a.getRootNode().contains(a))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : N(u);
      if (c != null && c.contains(a) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !tu(a, Ni.Loose) && a.tabIndex !== -1 && s.preventDefault(), t(s, a);
  }
  let i = y(null);
  qn("mousedown", (s) => {
    var o, a;
    r.value && (i.value = ((a = (o = s.composedPath) == null ? void 0 : o.call(s)) == null ? void 0 : a[0]) || s.target);
  }, !0), qn("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, !0), Vi("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let br = K({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return re({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function ou() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
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
var yt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yt || {});
function lu() {
  let e = y(0);
  return Vi("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ui(e, t, r, n) {
  xt.isServer || fe((i) => {
    e = e ?? window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Hi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function uu(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Wi(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let r of e.value) {
    let n = N(r);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var zi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(zi || {});
let mt = Object.assign(K({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = T(() => ct(i)), o = y(!1);
  U(() => o.value = !0), pe(() => o.value = !1), du({ ownerDocument: s }, T(() => o.value && !!(e.features & 16)));
  let a = fu({ ownerDocument: s, container: i, initialFocus: T(() => e.initialFocus) }, T(() => o.value && !!(e.features & 2)));
  pu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, T(() => o.value && !!(e.features & 8)));
  let l = lu();
  function u(m) {
    let p = N(i);
    p && ((v) => v())(() => {
      ve(l.value, { [yt.Forwards]: () => {
        Lt(p, Fe.First, { skipElements: [m.relatedTarget] });
      }, [yt.Backwards]: () => {
        Lt(p, Fe.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let c = y(!1);
  function f(m) {
    m.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function h(m) {
    if (!o.value)
      return;
    let p = Wi(e.containers);
    N(i) instanceof HTMLElement && p.add(N(i));
    let v = m.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (Gi(p, v) || (c.value ? Lt(N(i), ve(l.value, { [yt.Forwards]: () => Fe.Next, [yt.Backwards]: () => Fe.Previous }) | Fe.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Ge(m.target)));
  }
  return () => {
    let m = {}, p = { ref: i, onKeydown: f, onFocusout: h }, { features: v, initialFocus: d, containers: b, ...O } = e;
    return D(kr, [!!(v & 4) && D(br, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable }), re({ ourProps: p, theirProps: { ...t, ...O }, slot: m, attrs: t, slots: r, name: "FocusTrap" }), !!(v & 4) && D(br, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Nt.Focusable })]);
  };
} }), { features: zi }), We = [];
uu(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && We[0] !== t.target && (We.unshift(t.target), We = We.filter((r) => r != null && r.isConnected), We.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function cu(e) {
  let t = y(We.slice());
  return ut([e], ([r], [n]) => {
    n === !0 && r === !1 ? Hi(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = We.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function du({ ownerDocument: e }, t) {
  let r = cu(t);
  U(() => {
    fe(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Ge(r());
    }, { flush: "post" });
  }), pe(() => {
    t.value && Ge(r());
  });
}
function fu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return U(() => s.value = !0), pe(() => s.value = !1), U(() => {
    ut([t, r, n], (o, a) => {
      if (o.every((u, c) => (a == null ? void 0 : a[c]) === u) || !n.value)
        return;
      let l = N(t);
      l && Hi(() => {
        var u, c;
        if (!s.value)
          return;
        let f = N(r), h = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === h) {
            i.value = h;
            return;
          }
        } else if (l.contains(h)) {
          i.value = h;
          return;
        }
        f ? Ge(f) : Lt(l, Fe.First | Fe.NoScroll) === Di.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function pu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Ui((s = e.value) == null ? void 0 : s.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let a = Wi(r);
    N(t) instanceof HTMLElement && a.add(N(t));
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Gi(a, u) ? (n.value = u, Ge(u)) : (o.preventDefault(), o.stopPropagation(), Ge(l)) : Ge(n.value);
  }, !0);
}
function Gi(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let fr = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
function Cn(e, t = y(!0)) {
  fe((r) => {
    var n;
    if (!t.value)
      return;
    let i = N(e);
    if (!i)
      return;
    r(function() {
      var o;
      if (!i)
        return;
      let a = (o = vt.get(i)) != null ? o : 1;
      if (a === 1 ? vt.delete(i) : vt.set(i, a - 1), a !== 1)
        return;
      let l = fr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, fr.delete(i));
    });
    let s = (n = vt.get(i)) != null ? n : 0;
    vt.set(i, s + 1), s === 0 && (fr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let Xi = Symbol("ForcePortalRootContext");
function hu() {
  return z(Xi, !1);
}
let wr = K({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return de(Xi, e.force), () => {
    let { force: n, ...i } = e;
    return re({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function mu(e) {
  let t = ct(e);
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
let Ki = K({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = T(() => ct(n)), s = hu(), o = z(Ji, null), a = y(s === !0 || o == null ? mu(n.value) : o.resolveTarget());
  fe(() => {
    s || o != null && (a.value = o.resolveTarget());
  });
  let l = z(Sr, null);
  return U(() => {
    let u = N(n);
    u && l && pe(l.register(u));
  }), pe(() => {
    var u, c;
    let f = (u = i.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    f && a.value === f && a.value.children.length <= 0 && ((c = a.value.parentElement) == null || c.removeChild(a.value));
  }), () => {
    if (a.value === null)
      return null;
    let u = { ref: n, "data-headlessui-portal": "" };
    return D(si, { to: a.value }, re({ ourProps: u, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Sr = Symbol("PortalParentContext");
function vu() {
  let e = z(Sr, null), t = y([]);
  function r(s) {
    return t.value.push(s), e && e.register(s), () => n(s);
  }
  function n(s) {
    let o = t.value.indexOf(s);
    o !== -1 && t.value.splice(o, 1), e && e.unregister(s);
  }
  let i = { register: r, unregister: n, portals: t };
  return [t, K({ name: "PortalWrapper", setup(s, { slots: o }) {
    return de(Sr, i), () => {
      var a;
      return (a = o.default) == null ? void 0 : a.call(o);
    };
  } })];
}
let Ji = Symbol("PortalGroupContext"), gu = K({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = qs({ resolveTarget() {
    return e.target;
  } });
  return de(Ji, n), () => {
    let { target: i, ...s } = e;
    return re({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Qi = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function yu() {
  return z(Qi, () => {
  });
}
function bu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = yu();
  function s(...o) {
    n == null || n(...o), i(...o);
  }
  U(() => {
    ut(t, (o, a) => {
      o ? s(0, e, r) : a === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), pe(() => {
    t.value && s(1, e, r);
  }), de(Qi, s);
}
let Yi = Symbol("DescriptionContext");
function wu() {
  let e = z(Yi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Su({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let o = n.value.indexOf(s);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return de(Yi, { register: i, slot: e, name: t, props: r }), T(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
K({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = wu();
  return U(() => pe(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: o = {} } = n, { id: a, ...l } = e, u = { ...Object.entries(o).reduce((c, [f, h]) => Object.assign(c, { [f]: ne(h) }), {}), id: a };
    return re({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Ou(e) {
  let t = Cs(e.getSnapshot());
  return pe(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function $u(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let o = t[i].call(r, ...s);
    o && (r = o, n.forEach((a) => a()));
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
    function i(o) {
      return n.containers.flatMap((a) => a()).some((a) => a.contains(o));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (o) => {
      if (o.target instanceof HTMLElement)
        try {
          let a = o.target.closest("a");
          if (!a)
            return;
          let { hash: l } = new URL(a.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (o) => {
      o.target instanceof HTMLElement && !i(o.target) && o.preventDefault();
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
let ze = $u(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
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
ze.subscribe(() => {
  let e = ze.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && ze.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && ze.dispatch("TEARDOWN", r);
  }
});
function Au(e, t, r) {
  let n = Ou(ze), i = T(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return ut([e, t], ([s, o], [a], l) => {
    if (!s || !o)
      return;
    ze.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (ze.dispatch("POP", a ?? s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
function Iu({ defaultContainers: e = [], portals: t } = {}) {
  let r = y(null), n = ct(r);
  function i() {
    var s;
    let o = [];
    for (let a of e)
      a !== null && (a instanceof HTMLElement ? o.push(a) : "value" in a && a.value instanceof HTMLElement && o.push(a.value));
    if (t != null && t.value)
      for (let a of t.value)
        o.push(a);
    for (let a of (s = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? s : [])
      a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (a.contains(N(r)) || o.some((l) => a.contains(l)) || o.push(a));
    return o;
  }
  return { resolveContainers: i, contains(s) {
    return i().some((o) => o.contains(s));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return D(br, { features: Nt.Hidden, ref: r });
  } };
}
var Pu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pu || {});
let $r = Symbol("DialogContext");
function _t(e) {
  let t = z($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, _t), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Yr = K({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${et()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let o = y(!1);
  U(() => {
    o.value = !0;
  });
  let a = y(0), l = Qr(), u = T(() => e.open === qt && l !== null ? (l.value & Q.Open) === Q.Open : e.open), c = y(null), f = T(() => ct(c));
  if (i({ el: c, $el: c }), !(e.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e.open}`);
  let h = T(() => o.value && u.value ? 0 : 1), m = T(() => h.value === 0), p = T(() => a.value > 1), v = z($r, null) !== null, [d, b] = vu(), { resolveContainers: O, mainTreeNodeRef: x, MainTreeNode: S } = Iu({ portals: d, defaultContainers: [T(() => {
    var E;
    return (E = A.panelRef.value) != null ? E : c.value;
  })] }), $ = T(() => p.value ? "parent" : "leaf"), w = T(() => l !== null ? (l.value & Q.Closing) === Q.Closing : !1), _ = T(() => v || w.value ? !1 : m.value), I = T(() => {
    var E, k, R;
    return (R = Array.from((k = (E = f.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? k : []).find((W) => W.id === "headlessui-portal-root" ? !1 : W.contains(N(x)) && W instanceof HTMLElement)) != null ? R : null;
  });
  Cn(I, _);
  let P = T(() => p.value ? !0 : m.value), F = T(() => {
    var E, k, R;
    return (R = Array.from((k = (E = f.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? k : []).find((W) => W.contains(N(x)) && W instanceof HTMLElement)) != null ? R : null;
  });
  Cn(F, P), bu({ type: "Dialog", enabled: T(() => h.value === 0), element: c, onUpdate: (E, k) => {
    if (k === "Dialog")
      return ve(E, { [Or.Add]: () => a.value += 1, [Or.Remove]: () => a.value -= 1 });
  } });
  let M = Su({ name: "DialogDescription", slot: T(() => ({ open: u.value })) }), V = y(null), A = { titleId: V, panelRef: y(null), dialogState: h, setTitleId(E) {
    V.value !== E && (V.value = E);
  }, close() {
    t("close", !1);
  } };
  de($r, A);
  let J = T(() => !(!m.value || p.value));
  au(O, (E, k) => {
    A.close(), Ee(() => k == null ? void 0 : k.focus());
  }, J);
  let H = T(() => !(p.value || h.value !== 0));
  Ui((s = f.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    H.value && (E.defaultPrevented || E.key === ji.Escape && (E.preventDefault(), E.stopPropagation(), A.close()));
  });
  let B = T(() => !(w.value || h.value !== 0 || v));
  return Au(f, B, (E) => {
    var k;
    return { containers: [...(k = E.containers) != null ? k : [], O] };
  }), fe((E) => {
    if (h.value !== 0)
      return;
    let k = N(c);
    if (!k)
      return;
    let R = new ResizeObserver((W) => {
      for (let Pe of W) {
        let G = Pe.target.getBoundingClientRect();
        G.x === 0 && G.y === 0 && G.width === 0 && G.height === 0 && A.close();
      }
    });
    R.observe(k), E(() => R.disconnect());
  }), () => {
    let { id: E, open: k, initialFocus: R, ...W } = e, Pe = { ...r, ref: c, id: E, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": V.value, "aria-describedby": M.value }, G = { open: h.value === 0 };
    return D(wr, { force: !0 }, () => [D(Ki, () => D(gu, { target: c.value }, () => D(wr, { force: !1 }, () => D(mt, { initialFocus: R, containers: O, features: m.value ? ve($.value, { parent: mt.features.RestoreFocus, leaf: mt.features.All & ~mt.features.FocusLock }) : mt.features.None }, () => D(b, {}, () => re({ ourProps: Pe, theirProps: { ...W, ...r }, slot: G, attrs: r, slots: n, visible: h.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" })))))), D(S)]);
  };
} });
K({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...o } = e;
    return re({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: o, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
K({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${et()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), U(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: o, ...a } = e, l = { id: o, ref: s, "aria-hidden": !0 };
    return D(wr, { force: !0 }, () => D(Ki, () => re({ ourProps: l, theirProps: { ...t, ...a }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Zr = K({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${et()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(o) {
    o.stopPropagation();
  }
  return () => {
    let { id: o, ...a } = e, l = { id: o, ref: i.panelRef, onClick: s };
    return re({ ourProps: l, theirProps: a, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
K({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogTitle");
  return U(() => {
    n.setTitleId(e.id), pe(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return re({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function qu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function pr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ct(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Er = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Er || {});
function Cu(e, t) {
  let r = Yt();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, o] = [n, i].map((a) => {
    let [l = 0] = a.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Fn(e, t, r, n, i, s) {
  let o = Yt(), a = s !== void 0 ? qu(s) : () => {
  };
  return Ct(e, ...i), pr(e, ...t, ...r), o.nextFrame(() => {
    Ct(e, ...r), pr(e, ...n), o.add(Cu(e, (l) => (Ct(e, ...n, ...t), pr(e, ...i), a(l))));
  }), o.add(() => Ct(e, ...t, ...r, ...n, ...i)), o.add(() => a("cancelled")), o.dispose;
}
function Ue(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let en = Symbol("TransitionContext");
var Fu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Fu || {});
function ku() {
  return z(en, null) !== null;
}
function Lu() {
  let e = z(en, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Mu() {
  let e = z(tn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let tn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zi(e) {
  let t = y([]), r = y(!1);
  U(() => r.value = !0), pe(() => r.value = !1);
  function n(s, o = ke.Hidden) {
    let a = t.value.findIndex(({ id: l }) => l === s);
    a !== -1 && (ve(o, { [ke.Unmount]() {
      t.value.splice(a, 1);
    }, [ke.Hidden]() {
      t.value[a].state = "hidden";
    } }), !Zt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let o = t.value.find(({ id: a }) => a === s);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, ke.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let es = Dt.RenderStrategy, dt = K({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = y(0);
  function o() {
    s.value |= Q.Opening, t("beforeEnter");
  }
  function a() {
    s.value &= ~Q.Opening, t("afterEnter");
  }
  function l() {
    s.value |= Q.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~Q.Closing, t("afterLeave");
  }
  if (!ku() && Xl())
    return () => D(ft, { ...e, onBeforeEnter: o, onAfterEnter: a, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), f = T(() => e.unmount ? ke.Unmount : ke.Hidden);
  i({ el: c, $el: c });
  let { show: h, appear: m } = Lu(), { register: p, unregister: v } = Mu(), d = y(h.value ? "visible" : "hidden"), b = { value: !0 }, O = et(), x = { value: !1 }, S = Zi(() => {
    !x.value && d.value !== "hidden" && (d.value = "hidden", v(O), u());
  });
  U(() => {
    let A = p(O);
    pe(A);
  }), fe(() => {
    if (f.value === ke.Hidden && O) {
      if (h.value && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      ve(d.value, { hidden: () => v(O), visible: () => p(O) });
    }
  });
  let $ = Ue(e.enter), w = Ue(e.enterFrom), _ = Ue(e.enterTo), I = Ue(e.entered), P = Ue(e.leave), F = Ue(e.leaveFrom), M = Ue(e.leaveTo);
  U(() => {
    fe(() => {
      if (d.value === "visible") {
        let A = N(c);
        if (A instanceof Comment && A.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function V(A) {
    let J = b.value && !m.value, H = N(c);
    !H || !(H instanceof HTMLElement) || J || (x.value = !0, h.value && o(), h.value || l(), A(h.value ? Fn(H, $, w, _, I, (B) => {
      x.value = !1, B === Er.Finished && a();
    }) : Fn(H, P, F, M, I, (B) => {
      x.value = !1, B === Er.Finished && (Zt(S) || (d.value = "hidden", v(O), u()));
    })));
  }
  return U(() => {
    ut([h], (A, J, H) => {
      V(H), b.value = !1;
    }, { immediate: !0 });
  }), de(tn, S), Kl(T(() => ve(d.value, { visible: Q.Open, hidden: Q.Closed }) | s.value)), () => {
    let { appear: A, show: J, enter: H, enterFrom: B, enterTo: E, entered: k, leave: R, leaveFrom: W, leaveTo: Pe, ...G } = e, tt = { ref: c }, qe = { ...G, ...m.value && h.value && xt.isServer ? { class: Fs([r.class, G.class, ...$, ...w]) } : {} };
    return re({ theirProps: qe, ourProps: tt, slot: {}, slots: n, attrs: r, features: es, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), Bu = dt, ft = K({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Qr(), s = T(() => e.show === null && i !== null ? (i.value & Q.Open) === Q.Open : e.show);
  fe(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = y(s.value ? "visible" : "hidden"), a = Zi(() => {
    o.value = "hidden";
  }), l = y(!0), u = { show: s, appear: T(() => e.appear || !l.value) };
  return U(() => {
    fe(() => {
      l.value = !1, s.value ? o.value = "visible" : Zt(a) || (o.value = "hidden");
    });
  }), de(tn, a), de(en, u), () => {
    let c = Bi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return re({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [D(Bu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: es, visible: o.value === "visible", name: "Transition" });
  };
} });
const ju = {
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
    hasConfirmModal: () => !!g.confirmModal.value,
    title: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.title ? g.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.text ? g.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.confirmButton ? g.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.cancelButton ? g.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.confirmPassword ? g.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.confirmPasswordOnce ? g.confirmModal.value.confirmPasswordOnce : !1;
    },
    confirmDanger: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.confirmDanger ? g.confirmModal.value.confirmDanger : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      g.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = !0;
      let e = this.password;
      this.passwordError = "", ae.post(this.confirmPasswordRoute, { password: e }, { headers: {
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
      g.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ae.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), g.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), g.clearConfirmModal();
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
      TransitionRoot: ft,
      TransitionChild: dt
    });
  }
};
function ts(e, t) {
  t = Jr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Tt(t[r++])];
  return r && r == n ? e : void 0;
}
function Se(e, t, r) {
  var n = e == null ? void 0 : ts(e, t);
  return n === void 0 ? r : n;
}
var Ru = function() {
  try {
    var e = Ze(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const kn = Ru;
function rs(e, t, r) {
  t == "__proto__" && kn ? kn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Du = Object.prototype, Nu = Du.hasOwnProperty;
function Vu(e, t, r) {
  var n = e[t];
  (!(Nu.call(e, t) && Gr(n, r)) || r === void 0 && !(t in e)) && rs(e, t, r);
}
function Uu(e, t, r, n) {
  if (!ee(e))
    return e;
  t = Jr(t, e);
  for (var i = -1, s = t.length, o = s - 1, a = e; a != null && ++i < s; ) {
    var l = Tt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = a[l];
      u = n ? n(c, l, a) : void 0, u === void 0 && (u = ee(c) ? c : Mr(t[i + 1]) ? [] : {});
    }
    Vu(a, l, u), a = a[l];
  }
  return e;
}
function $t(e, t, r) {
  return e == null ? e : Uu(e, t, r);
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
      let e = g.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && g.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return Se(e.values, r);
        },
        set(t, r, n) {
          $t(e.values, r, n);
        }
      })
    ) : null;
  }
}, Wu = {
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
      let t = g.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      g.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
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
          return Se(e.stores, r);
        },
        set(t, r, n) {
          $t(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var zu = function() {
  return be.Date.now();
};
const hr = zu;
var Gu = /\s/;
function Xu(e) {
  for (var t = e.length; t-- && Gu.test(e.charAt(t)); )
    ;
  return t;
}
var Ku = /^\s+/;
function Ju(e) {
  return e && e.slice(0, Xu(e) + 1).replace(Ku, "");
}
var Ln = 0 / 0, Qu = /^[-+]0x[0-9a-f]+$/i, Yu = /^0b[01]+$/i, Zu = /^0o[0-7]+$/i, ec = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Xt(e))
    return Ln;
  if (ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ju(e);
  var r = Yu.test(e);
  return r || Zu.test(e) ? ec(e.slice(2), r ? 2 : 8) : Qu.test(e) ? Ln : +e;
}
var tc = "Expected a function", rc = Math.max, nc = Math.min;
function er(e, t, r) {
  var n, i, s, o, a, l, u = 0, c = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(tc);
  t = Tr(t) || 0, ee(r) && (c = !!r.leading, f = "maxWait" in r, s = f ? rc(Tr(r.maxWait) || 0, t) : s, h = "trailing" in r ? !!r.trailing : h);
  function m(w) {
    var _ = n, I = i;
    return n = i = void 0, u = w, o = e.apply(I, _), o;
  }
  function p(w) {
    return u = w, a = setTimeout(b, t), c ? m(w) : o;
  }
  function v(w) {
    var _ = w - l, I = w - u, P = t - _;
    return f ? nc(P, s - I) : P;
  }
  function d(w) {
    var _ = w - l, I = w - u;
    return l === void 0 || _ >= t || _ < 0 || f && I >= s;
  }
  function b() {
    var w = hr();
    if (d(w))
      return O(w);
    a = setTimeout(b, v(w));
  }
  function O(w) {
    return a = void 0, h && n ? m(w) : (n = i = void 0, o);
  }
  function x() {
    a !== void 0 && clearTimeout(a), u = 0, n = l = i = a = void 0;
  }
  function S() {
    return a === void 0 ? o : O(hr());
  }
  function $() {
    var w = hr(), _ = d(w);
    if (n = arguments, i = this, l = w, _) {
      if (a === void 0)
        return p(l);
      if (f)
        return clearTimeout(a), a = setTimeout(b, t), m(l);
    }
    return a === void 0 && (a = setTimeout(b, t)), o;
  }
  return $.cancel = x, $.flush = S, $;
}
const ic = {
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
      Object.keys(this.request).length > 0 && (t.data = this.request), ae(t).then((r) => {
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
}, sc = {
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
}, ns = {
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
    return U(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), ks(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, o) => (L(), me("div", {
      ref_key: "root",
      ref: n
    }, [
      Z(s.$slots, "default")
    ], 512));
  }
};
function te(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Je(e) {
  var t = te(e).Element;
  return e instanceof t || e instanceof Element;
}
function se(e) {
  var t = te(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function rn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = te(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Xe = Math.max, Vt = Math.min, st = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function is() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function at(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && se(e) && (i = e.offsetWidth > 0 && st(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && st(n.height) / e.offsetHeight || 1);
  var o = Je(e) ? te(e) : window, a = o.visualViewport, l = !is() && r, u = (n.left + (l && a ? a.offsetLeft : 0)) / i, c = (n.top + (l && a ? a.offsetTop : 0)) / s, f = n.width / i, h = n.height / s;
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
function nn(e) {
  var t = te(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ac(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function oc(e) {
  return e === te(e) || !se(e) ? nn(e) : ac(e);
}
function ge(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function De(e) {
  return ((Je(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sn(e) {
  return at(De(e)).left + nn(e).scrollLeft;
}
function xe(e) {
  return te(e).getComputedStyle(e);
}
function an(e) {
  var t = xe(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function lc(e) {
  var t = e.getBoundingClientRect(), r = st(t.width) / e.offsetWidth || 1, n = st(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function uc(e, t, r) {
  r === void 0 && (r = !1);
  var n = se(t), i = se(t) && lc(t), s = De(t), o = at(e, i, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ge(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  an(s)) && (a = oc(t)), se(t) ? (l = at(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = sn(s))), {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ss(e) {
  var t = at(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function tr(e) {
  return ge(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (rn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    De(e)
  );
}
function as(e) {
  return ["html", "body", "#document"].indexOf(ge(e)) >= 0 ? e.ownerDocument.body : se(e) && an(e) ? e : as(tr(e));
}
function wt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = as(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = te(n), o = i ? [s].concat(s.visualViewport || [], an(n) ? n : []) : n, a = t.concat(o);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(wt(tr(o)))
  );
}
function cc(e) {
  return ["table", "td", "th"].indexOf(ge(e)) >= 0;
}
function Mn(e) {
  return !se(e) || // https://github.com/popperjs/popper-core/issues/837
  xe(e).position === "fixed" ? null : e.offsetParent;
}
function dc(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && se(e)) {
    var n = xe(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (rn(i) && (i = i.host); se(i) && ["html", "body"].indexOf(ge(i)) < 0; ) {
    var s = xe(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = te(e), r = Mn(e); r && cc(r) && xe(r).position === "static"; )
    r = Mn(r);
  return r && (ge(r) === "html" || ge(r) === "body" && xe(r).position === "static") ? t : r || dc(e) || t;
}
var ce = "top", ye = "bottom", je = "right", Oe = "left", on = "auto", nr = [ce, ye, je, Oe], ot = "start", Et = "end", fc = "clippingParents", os = "viewport", gt = "popper", pc = "reference", Bn = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + ot, t + "-" + Et]);
}, []), hc = /* @__PURE__ */ [].concat(nr, [on]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ot, t + "-" + Et]);
}, []), mc = "beforeRead", vc = "read", gc = "afterRead", yc = "beforeMain", bc = "main", wc = "afterMain", Sc = "beforeWrite", Oc = "write", $c = "afterWrite", Ec = [mc, vc, gc, yc, bc, wc, Sc, Oc, $c];
function Tc(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(a) {
      if (!r.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function xc(e) {
  var t = Tc(e);
  return Ec.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function _c(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ac(e) {
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
  var r = te(e), n = De(e), i = r.visualViewport, s = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    s = i.width, o = i.height;
    var u = is();
    (u || !u && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a + sn(e),
    y: l
  };
}
function Pc(e) {
  var t, r = De(e), n = nn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Xe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Xe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + sn(e), l = -n.scrollTop;
  return xe(i || r).direction === "rtl" && (a += Xe(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: a,
    y: l
  };
}
function qc(e, t) {
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
function Cc(e, t) {
  var r = at(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === os ? _r(Ic(e, r)) : Je(t) ? Cc(t, r) : _r(Pc(De(e)));
}
function Fc(e) {
  var t = wt(tr(e)), r = ["absolute", "fixed"].indexOf(xe(e).position) >= 0, n = r && se(e) ? rr(e) : e;
  return Je(n) ? t.filter(function(i) {
    return Je(i) && qc(i, n) && ge(i) !== "body";
  }) : [];
}
function kc(e, t, r, n) {
  var i = t === "clippingParents" ? Fc(e) : [].concat(t), s = [].concat(i, [r]), o = s[0], a = s.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = Xe(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = Xe(c.left, l.left), l;
  }, jn(e, o, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Le(e) {
  return e.split("-")[0];
}
function lt(e) {
  return e.split("-")[1];
}
function ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function us(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? Le(n) : null, s = n ? lt(n) : null, o = t.x + t.width / 2 - r.width / 2, a = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ce:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case ye:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case je:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Oe:
      l = {
        x: t.x - r.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? ls(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case ot:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Et:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function cs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Lc(e) {
  return Object.assign({}, cs(), e);
}
function Mc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function ln(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, o = s === void 0 ? e.strategy : s, a = r.boundary, l = a === void 0 ? fc : a, u = r.rootBoundary, c = u === void 0 ? os : u, f = r.elementContext, h = f === void 0 ? gt : f, m = r.altBoundary, p = m === void 0 ? !1 : m, v = r.padding, d = v === void 0 ? 0 : v, b = Lc(typeof d != "number" ? d : Mc(d, nr)), O = h === gt ? pc : gt, x = e.rects.popper, S = e.elements[p ? O : h], $ = kc(Je(S) ? S : S.contextElement || De(e.elements.popper), l, c, o), w = at(e.elements.reference), _ = us({
    reference: w,
    element: x,
    strategy: "absolute",
    placement: i
  }), I = _r(Object.assign({}, x, _)), P = h === gt ? I : w, F = {
    top: $.top - P.top + b.top,
    bottom: P.bottom - $.bottom + b.bottom,
    left: $.left - P.left + b.left,
    right: P.right - $.right + b.right
  }, M = e.modifiersData.offset;
  if (h === gt && M) {
    var V = M[i];
    Object.keys(F).forEach(function(A) {
      var J = [je, ye].indexOf(A) >= 0 ? 1 : -1, H = [ce, ye].indexOf(A) >= 0 ? "y" : "x";
      F[A] += V[H] * J;
    });
  }
  return F;
}
var Rn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Dn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Bc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Rn : i;
  return function(a, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Rn, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, m = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        v(), c.options = Object.assign({}, s, c.options, O), c.scrollParents = {
          reference: Je(a) ? wt(a) : a.contextElement ? wt(a.contextElement) : [],
          popper: wt(l)
        };
        var x = xc(Ac([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = x.filter(function(S) {
          return S.enabled;
        }), p(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var b = c.elements, O = b.reference, x = b.popper;
          if (Dn(O, x)) {
            c.rects = {
              reference: uc(O, rr(x), c.options.strategy === "fixed"),
              popper: ss(x)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(F) {
              return c.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var $ = c.orderedModifiers[S], w = $.fn, _ = $.options, I = _ === void 0 ? {} : _, P = $.name;
              typeof w == "function" && (c = w({
                state: c,
                options: I,
                name: P,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _c(function() {
        return new Promise(function(d) {
          m.forceUpdate(), d(c);
        });
      }),
      destroy: function() {
        v(), h = !0;
      }
    };
    if (!Dn(a, l))
      return m;
    m.setOptions(u).then(function(d) {
      !h && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function p() {
      c.orderedModifiers.forEach(function(d) {
        var b = d.name, O = d.options, x = O === void 0 ? {} : O, S = d.effect;
        if (typeof S == "function") {
          var $ = S({
            state: c,
            name: b,
            instance: m,
            options: x
          }), w = function() {
          };
          f.push($ || w);
        }
      });
    }
    function v() {
      f.forEach(function(d) {
        return d();
      }), f = [];
    }
    return m;
  };
}
var Ft = {
  passive: !0
};
function jc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, o = n.resize, a = o === void 0 ? !0 : o, l = te(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ft);
  }), a && l.addEventListener("resize", r.update, Ft), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ft);
    }), a && l.removeEventListener("resize", r.update, Ft);
  };
}
const Rc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jc,
  data: {}
};
function Dc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = us({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Nc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dc,
  data: {}
};
var Vc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Uc(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: st(r * i) / i || 0,
    y: st(n * i) / i || 0
  };
}
function Nn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, o = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, h = o.x, m = h === void 0 ? 0 : h, p = o.y, v = p === void 0 ? 0 : p, d = typeof c == "function" ? c({
    x: m,
    y: v
  }) : {
    x: m,
    y: v
  };
  m = d.x, v = d.y;
  var b = o.hasOwnProperty("x"), O = o.hasOwnProperty("y"), x = Oe, S = ce, $ = window;
  if (u) {
    var w = rr(r), _ = "clientHeight", I = "clientWidth";
    if (w === te(r) && (w = De(r), xe(w).position !== "static" && a === "absolute" && (_ = "scrollHeight", I = "scrollWidth")), w = w, i === ce || (i === Oe || i === je) && s === Et) {
      S = ye;
      var P = f && w === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      v -= P - n.height, v *= l ? 1 : -1;
    }
    if (i === Oe || (i === ce || i === ye) && s === Et) {
      x = je;
      var F = f && w === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[I]
      );
      m -= F - n.width, m *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: a
  }, u && Vc), V = c === !0 ? Uc({
    x: m,
    y: v
  }, te(r)) : {
    x: m,
    y: v
  };
  if (m = V.x, v = V.y, l) {
    var A;
    return Object.assign({}, M, (A = {}, A[S] = O ? "0" : "", A[x] = b ? "0" : "", A.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", A));
  }
  return Object.assign({}, M, (t = {}, t[S] = O ? v + "px" : "", t[x] = b ? m + "px" : "", t.transform = "", t));
}
function Hc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, o = s === void 0 ? !0 : s, a = r.roundOffsets, l = a === void 0 ? !0 : a, u = {
    placement: Le(t.placement),
    variation: lt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nn(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nn(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Wc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Hc,
  data: {}
};
function zc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !se(s) || !ge(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(o) {
      var a = i[o];
      a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
    }));
  });
}
function Gc(e) {
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
      var i = t.elements[n], s = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), a = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !se(i) || !ge(i) || (Object.assign(i.style, a), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Xc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: zc,
  effect: Gc,
  requires: ["computeStyles"]
};
var Kc = [Rc, Nc, Wc, Xc], Jc = /* @__PURE__ */ Bc({
  defaultModifiers: Kc
});
function Qc(e) {
  return e === "x" ? "y" : "x";
}
function Mt(e, t, r) {
  return Xe(e, Vt(t, r));
}
function Yc(e, t, r) {
  var n = Mt(e, t, r);
  return n > r ? r : n;
}
function Zc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, o = r.altAxis, a = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, h = r.tether, m = h === void 0 ? !0 : h, p = r.tetherOffset, v = p === void 0 ? 0 : p, d = ln(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), b = Le(t.placement), O = lt(t.placement), x = !O, S = ls(b), $ = Qc(S), w = t.modifiersData.popperOffsets, _ = t.rects.reference, I = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, F = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var A, J = S === "y" ? ce : Oe, H = S === "y" ? ye : je, B = S === "y" ? "height" : "width", E = w[S], k = E + d[J], R = E - d[H], W = m ? -I[B] / 2 : 0, Pe = O === ot ? _[B] : I[B], G = O === ot ? -I[B] : -_[B], tt = t.elements.arrow, qe = m && tt ? ss(tt) : {
        width: 0,
        height: 0
      }, Ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cs(), pt = Ce[J], It = Ce[H], Ne = Mt(0, _[B], qe[B]), sr = x ? _[B] / 2 - W - Ne - pt - F.mainAxis : Pe - Ne - pt - F.mainAxis, Os = x ? -_[B] / 2 + W + Ne + It + F.mainAxis : G + Ne + It + F.mainAxis, ar = t.elements.arrow && rr(t.elements.arrow), $s = ar ? S === "y" ? ar.clientTop || 0 : ar.clientLeft || 0 : 0, fn = (A = M == null ? void 0 : M[S]) != null ? A : 0, Es = E + sr - fn - $s, Ts = E + Os - fn, pn = Mt(m ? Vt(k, Es) : k, E, m ? Xe(R, Ts) : R);
      w[S] = pn, V[S] = pn - E;
    }
    if (a) {
      var hn, xs = S === "x" ? ce : Oe, _s = S === "x" ? ye : je, Ve = w[$], Pt = $ === "y" ? "height" : "width", mn = Ve + d[xs], vn = Ve - d[_s], or = [ce, Oe].indexOf(b) !== -1, gn = (hn = M == null ? void 0 : M[$]) != null ? hn : 0, yn = or ? mn : Ve - _[Pt] - I[Pt] - gn + F.altAxis, bn = or ? Ve + _[Pt] + I[Pt] - gn - F.altAxis : vn, wn = m && or ? Yc(yn, Ve, bn) : Mt(m ? yn : mn, Ve, m ? bn : vn);
      w[$] = wn, V[$] = wn - Ve;
    }
    t.modifiersData[n] = V;
  }
}
const ed = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Zc,
  requiresIfExists: ["offset"]
};
var td = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return td[t];
  });
}
var rd = {
  start: "end",
  end: "start"
};
function Vn(e) {
  return e.replace(/start|end/g, function(t) {
    return rd[t];
  });
}
function nd(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, o = r.padding, a = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? hc : l, c = lt(n), f = c ? a ? Bn : Bn.filter(function(p) {
    return lt(p) === c;
  }) : nr, h = f.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  h.length === 0 && (h = f);
  var m = h.reduce(function(p, v) {
    return p[v] = ln(e, {
      placement: v,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[Le(v)], p;
  }, {});
  return Object.keys(m).sort(function(p, v) {
    return m[p] - m[v];
  });
}
function id(e) {
  if (Le(e) === on)
    return [];
  var t = Bt(e);
  return [Vn(e), t, Vn(t)];
}
function sd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, o = r.altAxis, a = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, h = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, v = r.allowedAutoPlacements, d = t.options.placement, b = Le(d), O = b === d, x = l || (O || !p ? [Bt(d)] : id(d)), S = [d].concat(x).reduce(function(qe, Ce) {
      return qe.concat(Le(Ce) === on ? nd(t, {
        placement: Ce,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : Ce);
    }, []), $ = t.rects.reference, w = t.rects.popper, _ = /* @__PURE__ */ new Map(), I = !0, P = S[0], F = 0; F < S.length; F++) {
      var M = S[F], V = Le(M), A = lt(M) === ot, J = [ce, ye].indexOf(V) >= 0, H = J ? "width" : "height", B = ln(t, {
        placement: M,
        boundary: c,
        rootBoundary: f,
        altBoundary: h,
        padding: u
      }), E = J ? A ? je : Oe : A ? ye : ce;
      $[H] > w[H] && (E = Bt(E));
      var k = Bt(E), R = [];
      if (s && R.push(B[V] <= 0), a && R.push(B[E] <= 0, B[k] <= 0), R.every(function(qe) {
        return qe;
      })) {
        P = M, I = !1;
        break;
      }
      _.set(M, R);
    }
    if (I)
      for (var W = p ? 3 : 1, Pe = function(Ce) {
        var pt = S.find(function(It) {
          var Ne = _.get(It);
          if (Ne)
            return Ne.slice(0, Ce).every(function(sr) {
              return sr;
            });
        });
        if (pt)
          return P = pt, "break";
      }, G = W; G > 0; G--) {
        var tt = Pe(G);
        if (tt === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const ad = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ie = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, od = {
  components: {
    OnClickOutside: ns
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
    this.teleport && await Ee();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Jc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [ad, ed],
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
}, ld = { ref: "tooltip" };
function ud(e, t, r, n, i, s) {
  const o = Lr("OnClickOutside");
  return L(), Y(o, {
    style: jt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: ai(() => [
      vr("div", {
        ref: "button",
        style: jt(s.buttonStyle)
      }, [
        Z(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      vr("div", ld, [
        Z(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const cd = /* @__PURE__ */ Ie(od, [["render", ud]]), dd = {
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
    return (n, i) => ne(t).isSsr ? (L(), Y(he, {
      key: e.keepAliveKey,
      html: ne(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (L(), Y(ii, {
      key: 0,
      max: ne(r).max_keep_alive
    }, [
      (L(), Y(he, {
        key: e.keepAliveKey,
        html: ne(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function ds(e) {
  return e && e.length ? e[0] : void 0;
}
const fd = {
  inject: ["stack"],
  computed: {
    values() {
      return g.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return X(e.values, t);
      },
      first(t) {
        return ds(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, pd = {
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
      return g.currentStack.value;
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
      this.pendingVisit && g.currentStack.value === this.stack && (g.visit(this.pendingVisit), this.pendingVisit = null);
    },
    handlePendingRefresh() {
      this.pendingRefresh && g.currentStack.value === this.stack && (g.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll), this.pendingRefresh = !1);
    },
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.preserveScroll", i = "splade.redirect", s = "splade.refresh", o = "splade.toast";
          let a = null, l = !1, u = !1, c = [];
          ie(r, (f) => {
            ee(f) && (i in f && (a = f[i]), n in f && (l = f[n]), s in f && (u = f[s]), o in f && c.push(f));
          }), a ? this.pendingVisit = a : u ? this.pendingRefresh = { preserveScroll: l } : this.events.push({ name: e, data: r }), c.length > 0 && c.forEach((f) => {
            g.pushToast(f);
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
function hd() {
  this.__data__ = new _e(), this.size = 0;
}
function md(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function vd(e) {
  return this.__data__.get(e);
}
function gd(e) {
  return this.__data__.has(e);
}
var yd = 200;
function bd(e, t) {
  var r = this.__data__;
  if (r instanceof _e) {
    var n = r.__data__;
    if (!Ot || n.length < yd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ae(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function $e(e) {
  var t = this.__data__ = new _e(e);
  this.size = t.size;
}
$e.prototype.clear = hd;
$e.prototype.delete = md;
$e.prototype.get = vd;
$e.prototype.has = gd;
$e.prototype.set = bd;
var wd = "__lodash_hash_undefined__";
function Sd(e) {
  return this.__data__.set(e, wd), this;
}
function Od(e) {
  return this.__data__.has(e);
}
function Ut(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Ae(); ++t < r; )
    this.add(e[t]);
}
Ut.prototype.add = Ut.prototype.push = Sd;
Ut.prototype.has = Od;
function $d(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ed(e, t) {
  return e.has(t);
}
var Td = 1, xd = 2;
function fs(e, t, r, n, i, s) {
  var o = r & Td, a = e.length, l = t.length;
  if (a != l && !(o && l > a))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, h = !0, m = r & xd ? new Ut() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < a; ) {
    var p = e[f], v = t[f];
    if (n)
      var d = o ? n(v, p, f, t, e, s) : n(p, v, f, e, t, s);
    if (d !== void 0) {
      if (d)
        continue;
      h = !1;
      break;
    }
    if (m) {
      if (!$d(t, function(b, O) {
        if (!Ed(m, O) && (p === b || i(p, b, r, n, s)))
          return m.push(O);
      })) {
        h = !1;
        break;
      }
    } else if (!(p === v || i(p, v, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var _d = be.Uint8Array;
const Un = _d;
function Ad(e) {
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
var Pd = 1, qd = 2, Cd = "[object Boolean]", Fd = "[object Date]", kd = "[object Error]", Ld = "[object Map]", Md = "[object Number]", Bd = "[object RegExp]", jd = "[object Set]", Rd = "[object String]", Dd = "[object Symbol]", Nd = "[object ArrayBuffer]", Vd = "[object DataView]", Hn = Me ? Me.prototype : void 0, mr = Hn ? Hn.valueOf : void 0;
function Ud(e, t, r, n, i, s, o) {
  switch (r) {
    case Vd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Nd:
      return !(e.byteLength != t.byteLength || !s(new Un(e), new Un(t)));
    case Cd:
    case Fd:
    case Md:
      return Gr(+e, +t);
    case kd:
      return e.name == t.name && e.message == t.message;
    case Bd:
    case Rd:
      return e == t + "";
    case Ld:
      var a = Ad;
    case jd:
      var l = n & Pd;
      if (a || (a = Id), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= qd, o.set(e, t);
      var c = fs(a(e), a(t), n, i, s, o);
      return o.delete(e), c;
    case Dd:
      if (mr)
        return mr.call(e) == mr.call(t);
  }
  return !1;
}
function Hd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Wd(e, t, r) {
  var n = t(e);
  return j(e) ? n : Hd(n, r(e));
}
function ps(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
function zd() {
  return [];
}
var Gd = Object.prototype, Xd = Gd.propertyIsEnumerable, Wn = Object.getOwnPropertySymbols, Kd = Wn ? function(e) {
  return e == null ? [] : (e = Object(e), ps(Wn(e), function(t) {
    return Xd.call(e, t);
  }));
} : zd;
const Jd = Kd;
function zn(e) {
  return Wd(e, Wt, Jd);
}
var Qd = 1, Yd = Object.prototype, Zd = Yd.hasOwnProperty;
function ef(e, t, r, n, i, s) {
  var o = r & Qd, a = zn(e), l = a.length, u = zn(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var h = a[f];
    if (!(o ? h in t : Zd.call(t, h)))
      return !1;
  }
  var m = s.get(e), p = s.get(t);
  if (m && p)
    return m == t && p == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var d = o; ++f < l; ) {
    h = a[f];
    var b = e[h], O = t[h];
    if (n)
      var x = o ? n(O, b, h, t, e, s) : n(b, O, h, e, t, s);
    if (!(x === void 0 ? b === O || i(b, O, r, n, s) : x)) {
      v = !1;
      break;
    }
    d || (d = h == "constructor");
  }
  if (v && !d) {
    var S = e.constructor, $ = t.constructor;
    S != $ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof $ == "function" && $ instanceof $) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var tf = Ze(be, "DataView");
const Ar = tf;
var rf = Ze(be, "Promise");
const Ir = rf;
var nf = Ze(be, "Set");
const Pr = nf;
var sf = Ze(be, "WeakMap");
const qr = sf;
var Gn = "[object Map]", af = "[object Object]", Xn = "[object Promise]", Kn = "[object Set]", Jn = "[object WeakMap]", Qn = "[object DataView]", of = Ye(Ar), lf = Ye(Ot), uf = Ye(Ir), cf = Ye(Pr), df = Ye(qr), He = Re;
(Ar && He(new Ar(new ArrayBuffer(1))) != Qn || Ot && He(new Ot()) != Gn || Ir && He(Ir.resolve()) != Xn || Pr && He(new Pr()) != Kn || qr && He(new qr()) != Jn) && (He = function(e) {
  var t = Re(e), r = t == af ? e.constructor : void 0, n = r ? Ye(r) : "";
  if (n)
    switch (n) {
      case of:
        return Qn;
      case lf:
        return Gn;
      case uf:
        return Xn;
      case cf:
        return Kn;
      case df:
        return Jn;
    }
  return t;
});
const Yn = He;
var ff = 1, Zn = "[object Arguments]", ei = "[object Array]", kt = "[object Object]", pf = Object.prototype, ti = pf.hasOwnProperty;
function hf(e, t, r, n, i, s) {
  var o = j(e), a = j(t), l = o ? ei : Yn(e), u = a ? ei : Yn(t);
  l = l == Zn ? kt : l, u = u == Zn ? kt : u;
  var c = l == kt, f = u == kt, h = l == u;
  if (h && gr(e)) {
    if (!gr(t))
      return !1;
    o = !0, c = !1;
  }
  if (h && !c)
    return s || (s = new $e()), o || pi(e) ? fs(e, t, r, n, i, s) : Ud(e, t, l, r, n, i, s);
  if (!(r & ff)) {
    var m = c && ti.call(e, "__wrapped__"), p = f && ti.call(t, "__wrapped__");
    if (m || p) {
      var v = m ? e.value() : e, d = p ? t.value() : t;
      return s || (s = new $e()), i(v, d, r, n, s);
    }
  }
  return h ? (s || (s = new $e()), ef(e, t, r, n, i, s)) : !1;
}
function ir(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Be(e) && !Be(t) ? e !== e && t !== t : hf(e, t, r, n, ir, i);
}
var mf = 1, vf = 2;
function gf(e, t, r, n) {
  var i = r.length, s = i, o = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var a = r[i];
    if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    a = r[i];
    var l = a[0], u = e[l], c = a[1];
    if (o && a[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new $e();
      if (n)
        var h = n(u, c, l, e, t, f);
      if (!(h === void 0 ? ir(c, u, mf | vf, n, f) : h))
        return !1;
    }
  }
  return !0;
}
function hs(e) {
  return e === e && !ee(e);
}
function yf(e) {
  for (var t = Wt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, hs(i)];
  }
  return t;
}
function ms(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function bf(e) {
  var t = yf(e);
  return t.length == 1 && t[0][2] ? ms(t[0][0], t[0][1]) : function(r) {
    return r === e || gf(r, e, t);
  };
}
function wf(e, t) {
  return e != null && t in Object(e);
}
function Sf(e, t) {
  return e != null && ki(e, t, wf);
}
var Of = 1, $f = 2;
function Ef(e, t) {
  return zr(e) && hs(t) ? ms(Tt(e), t) : function(r) {
    var n = Se(r, e);
    return n === void 0 && n === t ? Sf(r, e) : ir(t, n, Of | $f);
  };
}
function Tf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function xf(e) {
  return function(t) {
    return ts(t, e);
  };
}
function _f(e) {
  return zr(e) ? Tf(Tt(e)) : xf(e);
}
function At(e) {
  return typeof e == "function" ? e : e == null ? mi : typeof e == "object" ? j(e) ? Ef(e[0], e[1]) : bf(e) : _f(e);
}
function Af(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ht(t)) {
      var s = At(r);
      t = Wt(t), r = function(a) {
        return s(i[a], a, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[s ? t[o] : o] : void 0;
  };
}
function If(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ri = 1 / 0, Pf = 17976931348623157e292;
function qf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ri || e === -ri) {
    var t = e < 0 ? -1 : 1;
    return t * Pf;
  }
  return e === e ? e : 0;
}
function un(e) {
  var t = qf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Cf = Math.max;
function Ff(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : un(r);
  return i < 0 && (i = Cf(n + i, 0)), If(e, At(t), i);
}
var kf = Af(Ff);
const cn = kf, Lf = {
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
      return e ? le(e) ? e : j(e) ? e.map(this.extractMetadataFromExistingFile) : ee(e) ? e.options.metadata.metadata : null : null;
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
              const o = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(o);
                else
                  return;
                r.setOrder();
                const a = r.filepondInstance.element.querySelector('input[type="file"]');
                a.hasAttribute("name") || a.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), a.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(o, a) {
              o || a.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [a.id]) : r.addFiles([a.file]), r.setOrder());
            },
            onremovefile(o, a) {
              o || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => a.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(a.file));
            },
            onprocessfile(o, a) {
              o || (r.uploadedFiles.push({
                file: a.file,
                id: a.serverId
              }), r.addFiles([a.serverId]), r.$emit("stop-uploading", [a.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            // This handles to loading of the file preview of existing files.
            load: (o, a, l, u, c) => {
              const h = ae.CancelToken.source();
              return ae({
                url: o.preview_url,
                method: "GET",
                cancelToken: h.token,
                responseType: "blob"
              }).then((m) => {
                const p = new File([m.data], o.name, { type: o.type });
                a(p);
              }).catch(function(m) {
                axios.isCancel(m) || l(m);
              }), {
                abort: () => {
                  h.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (o, a, l, u, c, f, h) => {
            const m = new FormData();
            m.append("file", a, a.name);
            const v = ae.CancelToken.source();
            ae({
              url: r.server,
              method: "POST",
              data: m,
              cancelToken: v.token,
              onUploadProgress: (d) => {
                f(d.lengthComputable, d.loaded, d.total);
              }
            }).then((d) => {
              d.status >= 200 && d.status < 300 ? u(d.data) : c(d.statusText);
            }).catch(function(d) {
              var b;
              axios.isCancel(d) ? h() : c((b = d.response) == null ? void 0 : b.statusText);
            });
          }, s.server.revert = (o, a, l) => {
            ae({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: o }
            }).then(() => {
              a();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = !1), this.loadFilepondPlugins(i).then((o) => {
            o.length > 0 && i.registerPlugin(...o.map((a) => a.default)), this.filepondInstance = i.create(this.inputElement, s);
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
}, Mf = { ref: "file" };
function Bf(e, t, r, n, i, s) {
  return L(), me("div", Mf, [
    Z(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const jf = /* @__PURE__ */ Ie(Lf, [["render", Bf]]), Rf = {
  inject: ["stack"],
  computed: {
    values() {
      return g.flashData(this.stack);
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
    Object.prototype.hasOwnProperty.call(e, n) && gs(t, vs(r, n), e[n]);
  return t;
}
function vs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function gs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => gs(e, vs(t, n.toString()), r[n]));
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
var Df = "[object Boolean]";
function ys(e) {
  return e === !0 || e === !1 || Be(e) && Re(e) == Df;
}
function bs(e, t) {
  var r = {};
  return t = At(t), jr(e, function(n, i, s) {
    rs(r, i, t(n, i, s));
  }), r;
}
function ws(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function rt(e, t, r) {
  return e = Kr(e), r = r == null ? 0 : ws(un(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
}
const Nf = {
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
        return g.isSsr ? "" : location.href;
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
      return g.validationErrors(this.stack);
    },
    /*
     * Flattens the raw errors.
     */
    errors() {
      return bs(this.rawErrors, (e) => e.join(`
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
      return $t(this.values, e, t);
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
      g.confirm(
        ys(this.confirm) ? "" : this.confirm,
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
          le(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
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
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0), this.stack > 0 && this.keepModal && (r["X-Splade-Modal"] = g.stackType(this.stack), r["X-Splade-Modal-Target"] = this.stack);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      g.request(this.action, n, t, { ...r, ...this.headers }, !1, this.blob).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const o = cn(Object.keys(this.errors), (a) => this.formElement.querySelector(`[data-validation-key="${a}"]`));
        o && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${o}"]`)
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
            return r === "$response" ? e.response : n.includes(r) || rt(r, "__v_") ? e[r] : (!e.isMounted && !X(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), Se(e.values, r));
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
}, Uf = { ref: "input" };
function Hf(e, t, r, n, i, s) {
  return L(), me("div", Uf, [
    Z(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Wf = /* @__PURE__ */ Ie(Vf, [["render", Hf]]), zf = {
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
}, Gf = { ref: "jodit" };
function Xf(e, t, r, n, i, s) {
  return L(), me("div", Gf, [
    Z(e.$slots, "default")
  ], 512);
}
const Kf = /* @__PURE__ */ Ie(zf, [["render", Xf]]), Jf = {
  components: { Render: he },
  props: {
    name: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return g.isSsr ? "" : window.location.href;
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
      this.html = null, g.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function Qf(e, t, r, n, i, s) {
  const o = Lr("Render");
  return i.html ? (L(), Y(o, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? Z(e.$slots, "default", { key: 1 }) : Fr("", !0);
}
const Yf = /* @__PURE__ */ Ie(Jf, [["render", Qf]]), Zf = ["href", "onClick"], ep = {
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
      g.confirm(
        ys(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
      ).then((o) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        o && (n.value = o), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const a = r > 0 && t.keepModal;
      if (t.modal && !a)
        return g.modal(t.href);
      if (t.slideover && !a)
        return g.slideover(t.href);
      if (rt(t.href, "#")) {
        if (g.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (a && (u["X-Splade-Modal"] = g.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? g.replace(t.href, u) : g.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : dn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(le(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), g.request(t.href, l, c, u, t.replace);
    }
    return (o, a) => (L(), me("a", {
      href: e.href,
      onClick: Ls(i, ["prevent"])
    }, [
      Z(o.$slots, "default")
    ], 8, Zf));
  }
}, tp = {
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
      TransitionRoot: ft,
      TransitionChild: dt
    });
  }
}, rp = {
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
    return g.registerPreloadedModal(t.name, t.html, t.type), t.opened && g.openPreloadedModal(t.name), () => {
    };
  }
}, np = {
  components: { Render: he },
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
        return g.isSsr ? "" : window.location.href;
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
      this.loading = !0, g.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function ip(e, t, r, n, i, s) {
  const o = Lr("Render");
  return i.html ? (L(), Y(o, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? Z(e.$slots, "placeholder", { key: 1 }) : Z(e.$slots, "default", { key: 2 });
}
const sp = /* @__PURE__ */ Ie(np, [["render", ip]]), ap = {
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
function op(e, t) {
  var r = -1, n = Ht(e) ? Array(e.length) : [];
  return Rr(e, function(i, s, o) {
    n[++r] = t(i, s, o);
  }), n;
}
function Ss(e, t) {
  var r = j(e) ? Fi : op;
  return r(e, At(t));
}
const lp = {
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
      if (ie(t, (s) => {
        var o = document.createElement("option");
        o.value = s.value, o.text = s.label, s.value === `${this.modelValue}` && s.value !== "" && (i = !0), s.disabled && (o.disabled = s.disabled), s.placeholder && (o.placeholder = s.placeholder), this.element.appendChild(o);
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
      this.remoteUrl && (this.loading = !0, ae({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.setOptionsFromRemote(this.remoteRoot ? Se(e.data, this.remoteRoot) : e.data);
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
      const r = j(e);
      if (!r && ee(e))
        if (this.optionValue && this.optionLabel) {
          let n = Se(e, this.optionValue);
          le(n) || (n = `${n}`), t.push({
            value: n,
            label: Se(e, this.optionLabel)
          });
        } else
          ie(e, (n, i) => {
            le(i) || (i = `${i}`), t.push({ label: n, value: i });
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
      Array.isArray(e) && (e = Ss(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
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
              const o = this;
              n.stack > 0 && (n.headlessListener = function(a) {
                if (!n.choicesInstance)
                  return;
                const l = n.choicesInstance.dropdown.isActive, u = n.choicesInstance.containerOuter.element.contains(a.target);
                !l && u ? n.choicesInstance.showDropdown() : l && !u && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: !0 })), o.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (o.containerInner.element.setAttribute("dusk", n.dusk), o.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let a = o.getValue(!0);
                if (a == null && (a = ""), n.$emit("update:modelValue", a), !n.multiple || r < 1)
                  return;
                o.getValue().length >= r && o.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), o.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                o.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const a = n.getItemOfCurrentModel(), l = o.dropdown.element.querySelector(
                  `.choices__item[data-id="${a.id}"]`
                );
                o.choiceList.scrollToChildElement(l, 1), o._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = o, n.setValueOnChoices(n.modelValue), t();
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
}, up = { ref: "select" };
function cp(e, t, r, n, i, s) {
  return L(), me("div", up, [
    Z(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const dp = /* @__PURE__ */ Ie(lp, [["render", cp]]), fp = {
  inject: ["stack"],
  render() {
    const e = g.validationErrors(this.stack), t = g.flashData(this.stack), r = g.sharedData.value, n = bs(e, (i) => i.join(`
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
function pp(e, t, r) {
  e = Kr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : ws(un(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function hp(e, t) {
  var r = [];
  return Rr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function mp(e, t) {
  var r = j(e) ? ps : hp;
  return r(e, At(t));
}
function ni(e, t) {
  return ir(e, t);
}
const vp = {
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
      return !ni(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    ie(e, (r, n) => {
      if (rt(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? g.modal(e) : t === "slideover" ? g.slideover(e) : g.visit(e);
    },
    /**
     * Resets the table to its initial state.
     */
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, ie(e, (t, r) => {
        rt(r, "filter[") && (e[r] = null);
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
      const t = !this.columnIsVisible(e), r = mp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Ss(r, (i) => i.key).sort();
      ni(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Ee(() => {
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
        if (!pp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), o = s[1].substring(0, s[1].length - 1);
        parseInt(o) == o ? (i = s[0], j(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    /*
     * Update the current query
     */
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (rt(e, "perPage") || rt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      ie(e, (u, c) => {
        if (!j(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((f, h) => {
          n[`${c}[${h}]`] = f;
        });
      });
      let i = "";
      ie(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : g.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let o = null;
      typeof t < "u" && t && (o = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const a = this.stack > 0 ? {
        "X-Splade-Modal": g.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      g.replace(s, a).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Ee(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), o && (u.value = o);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = !1);
      let o = null;
      if (t)
        try {
          o = await g.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const a = { ids: this.selectedItems };
      if (s) {
        const l = le(s) && s ? s : "password";
        a[l] = o;
      }
      g.request(e, "POST", a, {}, !1).then((l) => {
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
}, gp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: si
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
function yp(e, t, r, n, i, s) {
  return Ms((L(), Y(Bs(i.isMounted ? i.Teleport : "div"), js(Rs(e.$attrs)), {
    default: ai(() => [
      Z(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ds, i.isMounted]
  ]);
}
const bp = /* @__PURE__ */ Ie(gp, [["render", yp]]), wp = {
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
        Ee(() => e.default.update(this.element));
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
}, Sp = { ref: "textarea" };
function Op(e, t, r, n, i, s) {
  return L(), me("div", Sp, [
    Z(e.$slots, "default")
  ], 512);
}
const $p = /* @__PURE__ */ Ie(wp, [["render", Op]]), Ep = {
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
      TransitionRoot: ft,
      TransitionChild: dt
    });
  }
}, Tp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], xp = {
  computed: {
    /*
     * Retrieves the toasts from the Splade instance.
     */
    toasts: function() {
      return g.toastsReversed.value;
    },
    /*
     * Determine whether a backdrop should be shown.
     */
    hasBackdrop: function() {
      return g.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      g.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Tp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: he,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: ft,
      TransitionChild: dt
    });
  }
}, _p = {
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
            if (n.length === 1 && ds(n) === "default") {
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
}, Ap = {
  render() {
    return this.$slots.default({
      TransitionRoot: ft,
      TransitionChild: dt
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
        get: (r, n) => Se(e.values, n),
        set: (r, n, i) => {
          $t(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && Se(n, "0._vts") && (n = []);
        let i = null;
        try {
          i = await ae.post(this.backendRoute, {
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
          this.$emit("error", s.response.data), g.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, ie(i.data.data, (s, o) => {
          $t(this.values, o, s);
        }), i.data.redirect ? g.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          g.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Pp = {
  created: (e, t) => {
    if (g.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = g.restore(r);
    n && Ee(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      g.remember(r, {
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
}, kp = {
  /**
   * Registers all Splade components and makes the configured
   * options and the Splade core globally available.
   */
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = X(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = X(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = X(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = X(t, "link_component") ? t.link_component : "Link", t.progress_bar = X(t, "progress_bar") ? t.progress_bar : !1, t.components = X(t, "components") ? t.components : {}, t.view_transitions = X(t, "view_transitions") ? t.view_transitions : !1, t.surpress_compile_errors = X(t, "surpress_compile_errors") ? t.surpress_compile_errors : !1;
    const r = t.prefix;
    if (e.component(`${r}Button`, Hl).component(`${r}Confirm`, ju).component(`${r}DataStores`, Wu).component(`${r}Data`, Hu).component(`${r}Defer`, ic).component(`${r}Dialog`, sc).component(`${r}Dropdown`, cd).component(`${r}DynamicHtml`, dd).component(`${r}Errors`, fd).component(`${r}Event`, pd).component(`${r}File`, jf).component(`${r}Flash`, Rf).component(`${r}Form`, Nf).component(`${r}Input`, Wf).component(`${r}JoditEditor`, Kf).component(`${r}VueBridge`, Ip).component(`${r}Lazy`, Yf).component(`${r}Modal`, tp).component(`${r}OnClickOutside`, ns).component(`${r}PreloadedModal`, rp).component(`${r}Rehydrate`, sp).component(`${r}Render`, he).component(`${r}Script`, ap).component(`${r}Select`, dp).component(`${r}State`, fp).component(`${r}Table`, vp).component(`${r}Teleport`, bp).component(`${r}Textarea`, $p).component(`${r}Toast`, Ep).component(`${r}Toasts`, xp).component(`${r}Toggle`, _p).component(`${r}Transition`, Ap).component(t.link_component, ep).directive(`${r}PreserveScroll`, Pp), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => g }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ee(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        X(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Cr.init(t.progress_bar);
    }
    t.surpress_compile_errors && (e.config.compilerOptions.onError = (n) => {
      import("./CompilerErrorMessages-4a55bbec.js").then((i) => {
        console.error({
          message: i.default[n.code] || "Unknown compiler error",
          lineNumber: n.lineNumber,
          compileError: n
        });
      });
    }), ie(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Lp(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const o = s.replace(/^-+/, "").split("=");
    n[o[0]] = o.length === 2 ? o[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (s, o) => {
    if (s.method == "POST") {
      let a = "";
      s.on("data", (l) => a += l), s.on("end", async () => {
        const l = JSON.parse(a), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        o.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), o.write(JSON.stringify({ body: c })), o.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  g as Splade,
  Uo as SpladeApp,
  kp as SpladePlugin,
  Fp as renderSpladeApp,
  Lp as startServer
};
