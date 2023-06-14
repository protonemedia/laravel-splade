import ne from "axios";
import { ref as y, computed as I, watch as ut, openBlock as j, createBlock as G, unref as ee, createCommentVNode as Dr, h as V, nextTick as Ee, onMounted as U, createElementBlock as de, createElementVNode as wr, provide as fe, inject as W, KeepAlive as li, normalizeStyle as Bt, createVNode as qs, Fragment as jr, renderList as Cs, cloneVNode as Fs, watchEffect as le, defineComponent as Y, onUnmounted as ve, Teleport as ui, reactive as ks, shallowRef as Ls, normalizeClass as Rs, onBeforeUnmount as Ds, renderSlot as X, resolveComponent as Mr, withCtx as ci, withModifiers as js, withDirectives as Ms, resolveDynamicComponent as Bs, normalizeProps as Ns, guardReactiveProps as Vs, vShow as Us } from "vue";
function Hs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ws(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var zs = Ws();
const Gs = zs;
function Xs(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ks = typeof global == "object" && global && global.Object === Object && global;
const di = Ks;
var Js = typeof self == "object" && self && self.Object === Object && self, Ys = di || Js || Function("return this")();
const ge = Ys;
var Qs = ge.Symbol;
const Le = Qs;
var fi = Object.prototype, Zs = fi.hasOwnProperty, ea = fi.toString, ht = Le ? Le.toStringTag : void 0;
function ta(e) {
  var t = Zs.call(e, ht), r = e[ht];
  try {
    e[ht] = void 0;
    var n = !0;
  } catch {
  }
  var i = ea.call(e);
  return n && (t ? e[ht] = r : delete e[ht]), i;
}
var ra = Object.prototype, na = ra.toString;
function ia(e) {
  return na.call(e);
}
var sa = "[object Null]", aa = "[object Undefined]", En = Le ? Le.toStringTag : void 0;
function je(e) {
  return e == null ? e === void 0 ? aa : sa : En && En in Object(e) ? ta(e) : ia(e);
}
function Re(e) {
  return e != null && typeof e == "object";
}
var oa = "[object Arguments]";
function Tn(e) {
  return Re(e) && je(e) == oa;
}
var pi = Object.prototype, la = pi.hasOwnProperty, ua = pi.propertyIsEnumerable, ca = Tn(function() {
  return arguments;
}()) ? Tn : function(e) {
  return Re(e) && la.call(e, "callee") && !ua.call(e, "callee");
};
const hi = ca;
var da = Array.isArray;
const M = da;
function fa() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, xn = mi && typeof module == "object" && module && !module.nodeType && module, pa = xn && xn.exports === mi, _n = pa ? ge.Buffer : void 0, ha = _n ? _n.isBuffer : void 0, ma = ha || fa;
const Sr = ma;
var va = 9007199254740991, ga = /^(?:0|[1-9]\d*)$/;
function Br(e, t) {
  var r = typeof e;
  return t = t ?? va, !!t && (r == "number" || r != "symbol" && ga.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ya = 9007199254740991;
function Nr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ya;
}
var ba = "[object Arguments]", wa = "[object Array]", Sa = "[object Boolean]", Oa = "[object Date]", $a = "[object Error]", Ea = "[object Function]", Ta = "[object Map]", xa = "[object Number]", _a = "[object Object]", Ia = "[object RegExp]", Aa = "[object Set]", Pa = "[object String]", qa = "[object WeakMap]", Ca = "[object ArrayBuffer]", Fa = "[object DataView]", ka = "[object Float32Array]", La = "[object Float64Array]", Ra = "[object Int8Array]", Da = "[object Int16Array]", ja = "[object Int32Array]", Ma = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Na = "[object Uint16Array]", Va = "[object Uint32Array]", R = {};
R[ka] = R[La] = R[Ra] = R[Da] = R[ja] = R[Ma] = R[Ba] = R[Na] = R[Va] = !0;
R[ba] = R[wa] = R[Ca] = R[Sa] = R[Fa] = R[Oa] = R[$a] = R[Ea] = R[Ta] = R[xa] = R[_a] = R[Ia] = R[Aa] = R[Pa] = R[qa] = !1;
function Ua(e) {
  return Re(e) && Nr(e.length) && !!R[je(e)];
}
function Ha(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, bt = vi && typeof module == "object" && module && !module.nodeType && module, Wa = bt && bt.exports === vi, dr = Wa && di.process, za = function() {
  try {
    var e = bt && bt.require && bt.require("util").types;
    return e || dr && dr.binding && dr.binding("util");
  } catch {
  }
}();
const In = za;
var An = In && In.isTypedArray, Ga = An ? Ha(An) : Ua;
const gi = Ga;
var Xa = Object.prototype, Ka = Xa.hasOwnProperty;
function Ja(e, t) {
  var r = M(e), n = !r && hi(e), i = !r && !n && Sr(e), s = !r && !n && !i && gi(e), a = r || n || i || s, o = a ? Xs(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ka.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Br(u, l))) && o.push(u);
  return o;
}
var Ya = Object.prototype;
function Qa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ya;
  return e === r;
}
function Za(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var eo = Za(Object.keys, Object);
const to = eo;
var ro = Object.prototype, no = ro.hasOwnProperty;
function io(e) {
  if (!Qa(e))
    return to(e);
  var t = [];
  for (var r in Object(e))
    no.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function K(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var so = "[object AsyncFunction]", ao = "[object Function]", oo = "[object GeneratorFunction]", lo = "[object Proxy]";
function yi(e) {
  if (!K(e))
    return !1;
  var t = je(e);
  return t == ao || t == oo || t == so || t == lo;
}
function zt(e) {
  return e != null && Nr(e.length) && !yi(e);
}
function Gt(e) {
  return zt(e) ? Ja(e) : io(e);
}
function Vr(e, t) {
  return e && Gs(e, t, Gt);
}
function uo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!zt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var co = uo(Vr);
const Ur = co;
function bi(e) {
  return e;
}
function wi(e) {
  return typeof e == "function" ? e : bi;
}
function fo(e, t) {
  var r = M(e) ? Hs : Ur;
  return r(e, wi(t));
}
function te(e, t) {
  return e && Vr(e, wi(t));
}
var po = Array.prototype, ho = po.reverse;
function mo(e) {
  return e == null ? e : ho.call(e);
}
class Si {
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
const Nt = y(0), ie = y(1), D = y({}), ae = y(0), Xt = y({}), nt = {}, Te = typeof window > "u";
function vo(e, t, r) {
  Te || window.addEventListener("popstate", go.bind(this)), Object.keys(t).length > 0 && Nt.value++, nt[ie.value] = new Si(ie.value), Gr(r), Kt(r.head), Xr(e);
  const n = Te ? "" : location.href, i = Hr(
    n,
    r.head,
    e,
    t,
    {},
    ie.value,
    Nt.value,
    r.persistentLayout
  );
  Oi(i);
}
function go(e) {
  e.state && (D.value = e.state, ae.value = 0, Xt.value = {}, Kr.value = {}, Wr.value = D.value.persistentLayoutKey, Kt(D.value.head), Xr(D.value.html, D.value.rememberedState.scrollY), be("history:popped-state", D.value.url));
}
function Hr(e, t, r, n, i, s, a, o) {
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
function yo(e) {
  Te || (window.history.pushState(e, "", e.url), be("history:pushed-state", { url: e.url }));
}
function bo(e) {
  const t = Hr(
    e,
    JSON.parse(JSON.stringify(D.value.head)),
    D.value.html,
    JSON.parse(JSON.stringify(D.value.dynamics)),
    { ...D.value.rememberedState },
    D.value.pageVisitId,
    D.value.dynamicVisitId,
    D.value.persistentLayoutKey
  );
  Te || (window.history.replaceState(t, "", t.url), be("history:replaced-state", { url: t.url }));
}
function Oi(e) {
  Te || (window.history.replaceState(e, "", e.url), be("history:replaced-state", { url: e.url }));
}
const fr = y(0), Wr = y(null);
function wo(e) {
  const t = URL.createObjectURL(e.data), r = e.headers["content-disposition"].split("filename=")[1], n = document.createElement("a");
  n.href = t, n.download = r, document.body.appendChild(n), n.click(), setTimeout(() => {
    document.body.removeChild(n), URL.revokeObjectURL(t);
  }, 1);
}
function So(e, t, r) {
  var h;
  fr.value++;
  const n = e.request.responseURL + (r ? "#" + r : "");
  if (e.data instanceof Blob) {
    wo(e);
    return;
  }
  if (K((h = e.data) == null ? void 0 : h.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ae.value++;
  const i = Wr.value;
  if (Gr(e.data.splade), Kt(e.data.splade.head), n === D.value.url && (t = !0), e.data.splade.modal)
    return Ci(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ae.value = 0, Xt.value = {};
  let s = e.data.html, a = e.data.dynamics;
  const o = Object.keys(D.value.dynamics).length > 0, l = Object.keys(a).length > 0;
  t ? (l && te(a, (d, v) => {
    a[v] += `<!-- ${fr.value} -->`;
  }), (!l || !o) && (s += `<!-- ${fr.value} -->`)) : (l && Nt.value++, (!l || !o) && (ie.value++, nt[ie.value] = nt[ie.value] || new Si(ie.value)));
  let u = e.data.splade.persistentLayout && i === e.data.splade.persistentLayout, c = 0;
  !Te && t && e.data.splade.preserveScroll && (c = window.scrollY), Xr(
    u ? D.value.html : s,
    c
  );
  const p = Hr(
    n,
    e.data.splade.head,
    u ? D.value.html : s,
    a,
    D.value.rememberedState ? { ...D.value.rememberedState } : {},
    ie.value,
    Nt.value,
    e.data.splade.persistentLayout
  );
  t ? Oi(p) : yo(p);
}
function Oo() {
  ae.value--, Kt(Eo(ae.value));
}
const $i = y({}), Ei = (e) => $i.value[e], $o = (e) => Object.keys(Ei.value[e]).length > 0, Ti = y({}), Eo = (e) => Ti.value[e], xi = y({}), To = (e) => xi.value[e], it = y([]);
function xo(e) {
  it.value.push(e);
}
const _o = I(() => mo(it.value));
function Io(e) {
  it.value[e].dismissed = !0, it.value[e].html = null;
}
const zr = y(null);
function Ao(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, p) => {
    o = c, l = p;
  });
  return zr.value = {
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
function Po() {
  zr.value = null;
}
const _i = y({});
function Gr(e) {
  Wr.value = e.persistentLayout, _i.value = e.shared ? e.shared : {}, xi.value[ae.value] = e.flash ? e.flash : {}, Ti.value[ae.value] = e.head ? e.head : {}, fo(e.toasts ? e.toasts : [], (t) => {
    it.value.push(t);
  }), $i.value[ae.value] = e.errors ? e.errors : {};
}
const Ii = y(() => {
}), Ai = y(() => {
}), Pi = y(() => {
}), qi = y(() => {
});
function Kt(e) {
  Ii.value(e);
}
function Xr(e, t) {
  Ai.value(e, t);
}
function Ci(e, t) {
  Xt.value[ae.value] = !0, Pi.value(e, t);
}
function qo(e) {
  return Xt.value[e];
}
function Fi(e) {
  qi.value(e);
}
const ki = y({});
function Li(e, t, r) {
  ki.value[e] = t, r && Co(e, t);
}
function Co(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Fo(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ki.value[e];
}
function Ye(e, t, r, n, i, s) {
  if (Te || Li("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const o = new URLSearchParams(r).toString();
    o != "" && (e = `${e.split("?")[0]}?${o}`), r = {};
  }
  be("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
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
      r instanceof FormData && (o.percentage = Math.round(o.loaded / o.total * 100), be("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: o }));
    }
  });
  return a.then((o) => {
    const l = e.split("#")[1] || "";
    So(o, i, l), be("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch(async (o) => {
    if (be("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o }), !o.response)
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
    u && !u.lazy && !u.rehydrate && Gr(u), l.status != 422 && Fi(
      l.data.html ? l.data.html : l.data
    );
  }), a;
}
function Ri(e, t) {
  return typeof t > "u" && (t = {}), Ye(e, "GET", {}, t, !0);
}
function ko(e, t) {
  return typeof t > "u" && (t = {}), Ye(e, "GET", {}, t, !1);
}
function Lo(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Kr = y({});
function Ro(e) {
  const t = Kr.value[e];
  return t ? (ae.value++, Ci(t.html, t.type), !0) : !1;
}
function Do(e, t, r) {
  Kr.value[e] = { html: t, type: r };
}
function jo(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Mo(e, t) {
  return Ye(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Bo(e, t) {
  return Ye(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function No(e) {
  typeof e > "u" && (e = !1);
  const t = {
    "X-Splade-Refresh": !0
  };
  return e && (t["X-Splade-Preserve-Scroll"] = !0), Ri(D.value.url, t);
}
function Vo(e, t) {
  nt[ie.value].on(e, t);
}
function Uo(e, t) {
  nt[ie.value].off(e, t);
}
function be(e, t) {
  typeof t > "u" && (t = {}), nt[ie.value].emit(e, t), Te || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const m = {
  init: vo,
  replace: Ri,
  visit: ko,
  modal: Lo,
  slideover: jo,
  refresh: No,
  request: Ye,
  lazy: Mo,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: bo,
  htmlForDynamicComponent(e) {
    return D.value.dynamics[e];
  },
  setOnHead(e) {
    Ii.value = e;
  },
  setOnHtml(e) {
    Ai.value = e;
  },
  setOnModal(e) {
    Pi.value = e;
  },
  setOnServerError(e) {
    qi.value = e;
  },
  onServerError: Fi,
  hasValidationErrors: $o,
  validationErrors: Ei,
  sharedData: _i,
  // ref
  flashData: To,
  toasts: it,
  // ref
  toastsReversed: _o,
  // ref
  confirmModal: zr,
  // ref
  confirm: Ao,
  clearConfirmModal: Po,
  pushToast: xo,
  dismissToast: Io,
  restore: Fo,
  remember: Li,
  popStack: Oo,
  currentStack: ae,
  // ref
  stackType: qo,
  pageVisitId: I(() => D.value.pageVisitId),
  // ref
  dynamicVisitId: I(() => D.value.dynamicVisitId),
  // ref
  isSsr: Te,
  openPreloadedModal: Ro,
  registerPreloadedModal: Do,
  on: Vo,
  off: Uo,
  emit: be
};
var Ho = "[object String]";
function se(e) {
  return typeof e == "string" || !M(e) && Re(e) && je(e) == Ho;
}
const ce = {
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
      r.value = V({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      }), Ee(() => {
        m.emit("rendered");
      });
    }
    return ut(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (j(), G(ee(r), { key: 0 })) : Dr("", !0);
  }
}, Wo = {
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
    return U(() => i()), (o, l) => (j(), de("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      wr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, zo = {
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
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = se(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    fe("stack", 0);
    const r = y(), n = y([]), i = y(null), s = y(null), a = y(!0), o = W("$spladeOptions") || {}, l = I(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, m.popStack();
    }
    function p(d) {
      const v = document.createElement("meta");
      te(d, (f, g) => {
        v[g] = f;
      }), document.getElementsByTagName("head")[0].appendChild(v);
    }
    function h(d) {
      var f;
      let v = "meta";
      te(d, (g, w) => {
        v = `${v}[${w}="${g}"]`;
      });
      try {
        (f = document.querySelector(v)) == null || f.remove();
      } catch {
      }
    }
    return m.setOnHead((d) => {
      var v;
      if (!m.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((f) => {
          h(f);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((f) => {
          p(f);
        }), (v = document.querySelector('link[rel="canonical"]')) == null || v.remove(), d.canonical) {
          const f = document.createElement("link");
          f.rel = "canonical", f.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(f);
        }
      }
    }), m.setOnHtml((d, v) => {
      n.value = [], r.value = d, Ee(() => {
        if (!m.isSsr) {
          const f = window.location.hash;
          f && document.getElementById(f.substring(1)) ? window.location.hash = f : window.scrollTo(0, v);
        }
        o.transform_anchors && [...document.querySelectorAll("a")].forEach((f) => {
          f.href == "" || f.href.charAt(0) == "#" || f.__vnode.dynamicProps === null && (f.hasAttribute("download") || (f.onclick = function(g) {
            g.preventDefault(), m.visit(f.href);
          }));
        });
      });
    }), m.setOnModal(function(d, v) {
      n.value[m.currentStack.value] && (a.value = !1), n.value[m.currentStack.value] = { html: d, type: v }, Ee(() => {
        a.value = !0;
      });
    }), m.setOnServerError(function(d) {
      i.value = d;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), U(() => {
      if (m.isSsr)
        return;
      const d = se(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((v) => {
        delete d.dataset[v];
      });
    }), (d, v) => (j(), de("div", null, [
      ee(m).isSsr ? (j(), G(ce, {
        key: `visit.${ee(m).pageVisitId.value}`,
        style: Bt(l.value),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), G(li, {
        key: 0,
        max: ee(o).max_keep_alive
      }, [
        (j(), G(ce, {
          key: `visit.${ee(m).pageVisitId.value}`,
          style: Bt(l.value),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      qs(ce, { html: e.components }, null, 8, ["html"]),
      (j(!0), de(jr, null, Cs(ee(m).currentStack.value, (f) => (j(), G(ce, {
        key: `modal.${f}`,
        type: n.value[f].type,
        html: n.value[f].html,
        stack: f,
        "on-top-of-stack": ee(m).currentStack.value === f,
        animate: a.value,
        onClose: (g) => c(f)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (j(), G(Wo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Dr("", !0)
    ]));
  }
};
function jp(e) {
  return () => V(zo, e);
}
var Go = Object.prototype, Xo = Go.hasOwnProperty;
function Ko(e, t) {
  return e != null && Xo.call(e, t);
}
var Jo = "[object Symbol]";
function Jt(e) {
  return typeof e == "symbol" || Re(e) && je(e) == Jo;
}
var Yo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qo = /^\w*$/;
function Jr(e, t) {
  if (M(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Jt(e) ? !0 : Qo.test(e) || !Yo.test(e) || t != null && e in Object(t);
}
var Zo = ge["__core-js_shared__"];
const pr = Zo;
var Pn = function() {
  var e = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function el(e) {
  return !!Pn && Pn in e;
}
var tl = Function.prototype, rl = tl.toString;
function Qe(e) {
  if (e != null) {
    try {
      return rl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nl = /[\\^$.*+?()[\]{}|]/g, il = /^\[object .+?Constructor\]$/, sl = Function.prototype, al = Object.prototype, ol = sl.toString, ll = al.hasOwnProperty, ul = RegExp(
  "^" + ol.call(ll).replace(nl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cl(e) {
  if (!K(e) || el(e))
    return !1;
  var t = yi(e) ? ul : il;
  return t.test(Qe(e));
}
function dl(e, t) {
  return e == null ? void 0 : e[t];
}
function Ze(e, t) {
  var r = dl(e, t);
  return cl(r) ? r : void 0;
}
var fl = Ze(Object, "create");
const St = fl;
function pl() {
  this.__data__ = St ? St(null) : {}, this.size = 0;
}
function hl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ml = "__lodash_hash_undefined__", vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  if (St) {
    var r = t[e];
    return r === ml ? void 0 : r;
  }
  return gl.call(t, e) ? t[e] : void 0;
}
var bl = Object.prototype, wl = bl.hasOwnProperty;
function Sl(e) {
  var t = this.__data__;
  return St ? t[e] !== void 0 : wl.call(t, e);
}
var Ol = "__lodash_hash_undefined__";
function $l(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = St && t === void 0 ? Ol : t, this;
}
function Ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ke.prototype.clear = pl;
Ke.prototype.delete = hl;
Ke.prototype.get = yl;
Ke.prototype.has = Sl;
Ke.prototype.set = $l;
function El() {
  this.__data__ = [], this.size = 0;
}
function Yr(e, t) {
  return e === t || e !== e && t !== t;
}
function Yt(e, t) {
  for (var r = e.length; r--; )
    if (Yr(e[r][0], t))
      return r;
  return -1;
}
var Tl = Array.prototype, xl = Tl.splice;
function _l(e) {
  var t = this.__data__, r = Yt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : xl.call(t, r, 1), --this.size, !0;
}
function Il(e) {
  var t = this.__data__, r = Yt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Al(e) {
  return Yt(this.__data__, e) > -1;
}
function Pl(e, t) {
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
xe.prototype.clear = El;
xe.prototype.delete = _l;
xe.prototype.get = Il;
xe.prototype.has = Al;
xe.prototype.set = Pl;
var ql = Ze(ge, "Map");
const Ot = ql;
function Cl() {
  this.size = 0, this.__data__ = {
    hash: new Ke(),
    map: new (Ot || xe)(),
    string: new Ke()
  };
}
function Fl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qt(e, t) {
  var r = e.__data__;
  return Fl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function kl(e) {
  var t = Qt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ll(e) {
  return Qt(this, e).get(e);
}
function Rl(e) {
  return Qt(this, e).has(e);
}
function Dl(e, t) {
  var r = Qt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = Cl;
_e.prototype.delete = kl;
_e.prototype.get = Ll;
_e.prototype.has = Rl;
_e.prototype.set = Dl;
var jl = "Expected a function";
function Qr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(jl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Qr.Cache || _e)(), r;
}
Qr.Cache = _e;
var Ml = 500;
function Bl(e) {
  var t = Qr(e, function(n) {
    return r.size === Ml && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Nl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vl = /\\(\\)?/g, Ul = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Nl, function(r, n, i, s) {
    t.push(i ? s.replace(Vl, "$1") : n || r);
  }), t;
});
const Hl = Ul;
function Di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Wl = 1 / 0, qn = Le ? Le.prototype : void 0, Cn = qn ? qn.toString : void 0;
function Zt(e) {
  if (typeof e == "string")
    return e;
  if (M(e))
    return Di(e, Zt) + "";
  if (Jt(e))
    return Cn ? Cn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Wl ? "-0" : t;
}
function Zr(e) {
  return e == null ? "" : Zt(e);
}
function en(e, t) {
  return M(e) ? e : Jr(e, t) ? [e] : Hl(Zr(e));
}
var zl = 1 / 0;
function Tt(e) {
  if (typeof e == "string" || Jt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -zl ? "-0" : t;
}
function ji(e, t, r) {
  t = en(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Tt(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Nr(i) && Br(a, i) && (M(e) || hi(e)));
}
function Z(e, t) {
  return e != null && ji(e, t, Ko);
}
const Gl = {
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
function pe(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, pe), n;
}
var Vt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Vt || {}), ke = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ke || {});
function Q({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Bi(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return hr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return pe(l, { [0]() {
      return null;
    }, [1]() {
      return hr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return hr(o);
}
function hr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Ni(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let p = !1, h = [];
    for (let [d, v] of Object.entries(n))
      typeof v == "boolean" && (p = !0), v === !0 && h.push(d);
    p && (c["data-headlessui-state"] = h.join(" "));
  }
  if (o === "template") {
    if (u = Mi(u ?? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [p, ...h] = u ?? [];
      if (!Xl(p) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((f) => f.trim()).filter((f, g, w) => w.indexOf(f) === g).sort((f, g) => f.localeCompare(g)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let d = Bi((a = p.props) != null ? a : {}, l), v = Fs(p, d);
      for (let f in d)
        f.startsWith("on") && (v.props || (v.props = {}), v.props[f] = d[f]);
      return v;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return V(o, Object.assign({}, l, c), { default: () => u });
}
function Mi(e) {
  return e.flatMap((t) => t.type === jr ? Mi(t.children) : [t]);
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
function Ni(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Xl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Kl = 0;
function Jl() {
  return ++Kl;
}
function et() {
  return Jl();
}
var Vi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Vi || {});
function N(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ui = Symbol("Context");
var z = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(z || {});
function Yl() {
  return tn() !== null;
}
function tn() {
  return W(Ui, null);
}
function Ql(e) {
  fe(Ui, e);
}
var Zl = Object.defineProperty, eu = (e, t, r) => t in e ? Zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Fn = (e, t, r) => (eu(e, typeof t != "symbol" ? t + "" : t, r), r);
class tu {
  constructor() {
    Fn(this, "current", this.detect()), Fn(this, "currentId", 0);
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
let xt = new tu();
function _t(e) {
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
let Or = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Fe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Fe || {}), Hi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Hi || {}), ru = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ru || {});
function nu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Or)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Wi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Wi || {});
function iu(e, t = 0) {
  var r;
  return e === ((r = _t(e)) == null ? void 0 : r.body) ? !1 : pe(t, { [0]() {
    return e.matches(Or);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Or))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var su = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(su || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ge(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let au = ["textarea", "input"].join(",");
function ou(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, au)) != null ? r : !1;
}
function lu(e, t = (r) => r) {
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
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? lu(e) : e : nu(e);
  i.length > 0 && o.length > 1 && (o = o.filter((v) => !i.includes(v))), n = n ?? a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, p = 0, h = o.length, d;
  do {
    if (p >= h || p + h <= 0)
      return 0;
    let v = u + p;
    if (t & 16)
      v = (v + h) % h;
    else {
      if (v < 0)
        return 3;
      if (v >= h)
        return 1;
    }
    d = o[v], d == null || d.focus(c), p += l;
  } while (d !== a.activeElement);
  return t & 6 && ou(d) && d.select(), 2;
}
function mr(e, t, r) {
  xt.isServer || le((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function uu(e, t, r = I(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : N(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !iu(o, Wi.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = y(null);
  mr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), mr("click", (s) => {
    i.value && (n(s, () => i.value), i.value = null);
  }, !0), mr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ut = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ut || {});
let $r = Y({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return Q({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function cu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function du(e, t, r) {
  xt.isServer || le((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var yt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yt || {});
function fu() {
  let e = y(0);
  return du("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function zi(e, t, r, n) {
  xt.isServer || le((i) => {
    e = e ?? window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Gi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function pu(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function Xi(e) {
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
var Ki = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ki || {});
let mt = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let s = I(() => _t(i)), a = y(!1);
  U(() => a.value = !0), ve(() => a.value = !1), mu({ ownerDocument: s }, I(() => a.value && !!(e.features & 16)));
  let o = vu({ ownerDocument: s, container: i, initialFocus: I(() => e.initialFocus) }, I(() => a.value && !!(e.features & 2)));
  gu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: o }, I(() => a.value && !!(e.features & 8)));
  let l = fu();
  function u(d) {
    let v = N(i);
    v && ((f) => f())(() => {
      pe(l.value, { [yt.Forwards]: () => {
        Dt(v, Fe.First, { skipElements: [d.relatedTarget] });
      }, [yt.Backwards]: () => {
        Dt(v, Fe.Last, { skipElements: [d.relatedTarget] });
      } });
    });
  }
  let c = y(!1);
  function p(d) {
    d.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function h(d) {
    if (!a.value)
      return;
    let v = Xi(e.containers);
    N(i) instanceof HTMLElement && v.add(N(i));
    let f = d.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (Ji(v, f) || (c.value ? Dt(N(i), pe(l.value, { [yt.Forwards]: () => Fe.Next, [yt.Backwards]: () => Fe.Previous }) | Fe.WrapAround, { relativeTo: d.target }) : d.target instanceof HTMLElement && Ge(d.target)));
  }
  return () => {
    let d = {}, v = { ref: i, onKeydown: p, onFocusout: h }, { features: f, initialFocus: g, containers: w, ...$ } = e;
    return V(jr, [!!(f & 4) && V($r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ut.Focusable }), Q({ ourProps: v, theirProps: { ...t, ...$ }, slot: d, attrs: t, slots: r, name: "FocusTrap" }), !!(f & 4) && V($r, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ut.Focusable })]);
  };
} }), { features: Ki }), We = [];
pu(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && We[0] !== t.target && (We.unshift(t.target), We = We.filter((r) => r != null && r.isConnected), We.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function hu(e) {
  let t = y(We.slice());
  return ut([e], ([r], [n]) => {
    n === !0 && r === !1 ? Gi(() => {
      t.value.splice(0);
    }) : n === !1 && r === !0 && (t.value = We.slice());
  }, { flush: "post" }), () => {
    var r;
    return (r = t.value.find((n) => n != null && n.isConnected)) != null ? r : null;
  };
}
function mu({ ownerDocument: e }, t) {
  let r = hu(t);
  U(() => {
    le(() => {
      var n, i;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Ge(r());
    }, { flush: "post" });
  }), ve(() => {
    Ge(r());
  });
}
function vu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), s = y(!1);
  return U(() => s.value = !0), ve(() => s.value = !1), U(() => {
    ut([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = N(t);
      l && Gi(() => {
        var u, c;
        if (!s.value)
          return;
        let p = N(r), h = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === h) {
            i.value = h;
            return;
          }
        } else if (l.contains(h)) {
          i.value = h;
          return;
        }
        p ? Ge(p) : Dt(l, Fe.First | Fe.NoScroll) === Hi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function gu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  zi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = Xi(r);
    N(t) instanceof HTMLElement && o.add(N(t));
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Ji(o, u) ? (n.value = u, Ge(u)) : (a.preventDefault(), a.stopPropagation(), Ge(l)) : Ge(n.value);
  }, !0);
}
function Ji(e, t) {
  for (let r of e)
    if (r.contains(t))
      return !0;
  return !1;
}
let vr = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
function kn(e, t = y(!0)) {
  le((r) => {
    var n;
    if (!t.value)
      return;
    let i = N(e);
    if (!i)
      return;
    r(function() {
      var a;
      if (!i)
        return;
      let o = (a = vt.get(i)) != null ? a : 1;
      if (o === 1 ? vt.delete(i) : vt.set(i, o - 1), o !== 1)
        return;
      let l = vr.get(i);
      l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]), i.inert = l.inert, vr.delete(i));
    });
    let s = (n = vt.get(i)) != null ? n : 0;
    vt.set(i, s + 1), s === 0 && (vr.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), i.setAttribute("aria-hidden", "true"), i.inert = !0);
  });
}
let Yi = Symbol("ForcePortalRootContext");
function yu() {
  return W(Yi, !1);
}
let Er = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return fe(Yi, e.force), () => {
    let { force: n, ...i } = e;
    return Q({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function bu(e) {
  let t = _t(e);
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
let Qi = Y({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = I(() => _t(n)), s = yu(), a = W(Zi, null), o = y(s === !0 || a == null ? bu(n.value) : a.resolveTarget());
  return le(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), ve(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    c && o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return V(ui, { to: o.value }, Q({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Zi = Symbol("PortalGroupContext"), wu = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ks({ resolveTarget() {
    return e.target;
  } });
  return fe(Zi, n), () => {
    let { target: i, ...s } = e;
    return Q({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), es = Symbol("StackContext");
var Tr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Tr || {});
function Su() {
  return W(es, () => {
  });
}
function Ou({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Su();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  U(() => {
    ut(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), ve(() => {
    t.value && s(1, e, r);
  }), fe(es, s);
}
let ts = Symbol("DescriptionContext");
function $u() {
  let e = W(ts, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Eu({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return fe(ts, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = $u();
  return U(() => ve(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = y({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [p, h]) => Object.assign(c, { [p]: ee(h) }), {}), id: o };
    return Q({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function Tu(e) {
  let t = Ls(e.getSnapshot());
  return ve(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function er() {
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
    let n = er();
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
function xu(e, t) {
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
function _u() {
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
function Iu() {
  if (!cu())
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
function Au() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Pu(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let ze = xu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: er(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Pu(r) }, i = [Iu(), _u(), Au()];
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
function qu(e, t, r) {
  let n = Tu(ze), i = I(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return ut([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    ze.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (ze.dispatch("POP", o ?? s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var Cu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Cu || {});
let xr = Symbol("DialogContext");
function It(e) {
  let t = W(xr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }
  return t;
}
let Ft = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", rn = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ft }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${et()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = y(!1);
  U(() => {
    a.value = !0;
  });
  let o = y(0), l = tn(), u = I(() => e.open === Ft && l !== null ? (l.value & z.Open) === z.Open : e.open), c = y(null), p = y(null), h = I(() => _t(c));
  if (i({ el: c, $el: c }), !(e.open !== Ft || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ft ? void 0 : e.open}`);
  let d = I(() => a.value && u.value ? 0 : 1), v = I(() => d.value === 0), f = I(() => o.value > 1), g = W(xr, null) !== null, w = I(() => f.value ? "parent" : "leaf"), $ = I(() => l !== null ? (l.value & z.Closing) === z.Closing : !1), A = I(() => g || $.value ? !1 : v.value), S = I(() => {
    var E, T, q;
    return (q = Array.from((T = (E = h.value) == null ? void 0 : E.querySelectorAll("body > *")) != null ? T : []).find((F) => F.id === "headlessui-portal-root" ? !1 : F.contains(N(p)) && F instanceof HTMLElement)) != null ? q : null;
  });
  kn(S, A);
  let O = I(() => f.value ? !0 : v.value), b = I(() => {
    var E, T, q;
    return (q = Array.from((T = (E = h.value) == null ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) != null ? T : []).find((F) => F.contains(N(p)) && F instanceof HTMLElement)) != null ? q : null;
  });
  kn(b, O), Ou({ type: "Dialog", enabled: I(() => d.value === 0), element: c, onUpdate: (E, T) => {
    if (T === "Dialog")
      return pe(E, { [Tr.Add]: () => o.value += 1, [Tr.Remove]: () => o.value -= 1 });
  } });
  let x = Eu({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), P = y(null), _ = { titleId: P, panelRef: y(null), dialogState: d, setTitleId(E) {
    P.value !== E && (P.value = E);
  }, close() {
    t("close", !1);
  } };
  fe(xr, _);
  function k() {
    var E, T, q;
    return [...Array.from((T = (E = h.value) == null ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? T : []).filter((F) => !(F === document.body || F === document.head || !(F instanceof HTMLElement) || F.contains(N(p)) || _.panelRef.value && F.contains(_.panelRef.value))), (q = _.panelRef.value) != null ? q : c.value];
  }
  let C = I(() => !(!v.value || f.value));
  uu(() => k(), (E, T) => {
    _.close(), Ee(() => T == null ? void 0 : T.focus());
  }, C);
  let B = I(() => !(f.value || d.value !== 0));
  zi((s = h.value) == null ? void 0 : s.defaultView, "keydown", (E) => {
    B.value && (E.defaultPrevented || E.key === Vi.Escape && (E.preventDefault(), E.stopPropagation(), _.close()));
  });
  let L = I(() => !($.value || d.value !== 0 || g));
  return qu(h, L, (E) => {
    var T;
    return { containers: [...(T = E.containers) != null ? T : [], k] };
  }), le((E) => {
    if (d.value !== 0)
      return;
    let T = N(c);
    if (!T)
      return;
    let q = new ResizeObserver((F) => {
      for (let ye of F) {
        let H = ye.target.getBoundingClientRect();
        H.x === 0 && H.y === 0 && H.width === 0 && H.height === 0 && _.close();
      }
    });
    q.observe(T), E(() => q.disconnect());
  }), () => {
    let { id: E, open: T, initialFocus: q, ...F } = e, ye = { ...r, ref: c, id: E, role: "dialog", "aria-modal": d.value === 0 ? !0 : void 0, "aria-labelledby": P.value, "aria-describedby": x.value }, H = { open: d.value === 0 };
    return V(Er, { force: !0 }, () => [V(Qi, () => V(wu, { target: c.value }, () => V(Er, { force: !1 }, () => V(mt, { initialFocus: q, containers: k, features: v.value ? pe(w.value, { parent: mt.features.RestoreFocus, leaf: mt.features.All & ~mt.features.FocusLock }) : mt.features.None }, () => Q({ ourProps: ye, theirProps: F, slot: H, attrs: r, slots: n, visible: d.value === 0, features: Vt.RenderStrategy | Vt.Static, name: "Dialog" }))))), V($r, { features: Ut.Hidden, ref: p })]);
  };
} });
Y({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = It("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return Q({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
Y({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${et()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = It("DialogBackdrop"), s = y(null);
  return n({ el: s, $el: s }), U(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return V(Er, { force: !0 }, () => V(Qi, () => Q({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let nn = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${et()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = It("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return Q({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
Y({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${et()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = It("DialogTitle");
  return U(() => {
    n.setTitleId(e.id), ve(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return Q({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function Fu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function gr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function kt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var _r = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(_r || {});
function ku(e, t) {
  let r = er();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Ln(e, t, r, n, i, s) {
  let a = er(), o = s !== void 0 ? Fu(s) : () => {
  };
  return kt(e, ...i), gr(e, ...t, ...r), a.nextFrame(() => {
    kt(e, ...r), gr(e, ...n), a.add(ku(e, (l) => (kt(e, ...n, ...t), gr(e, ...i), o(l))));
  }), a.add(() => kt(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Ve(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let sn = Symbol("TransitionContext");
var Lu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Lu || {});
function Ru() {
  return W(sn, null) !== null;
}
function Du() {
  let e = W(sn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ju() {
  let e = W(an, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let an = Symbol("NestingContext");
function tr(e) {
  return "children" in e ? tr(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function rs(e) {
  let t = y([]), r = y(!1);
  U(() => r.value = !0), ve(() => r.value = !1);
  function n(s, a = ke.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (pe(a, { [ke.Unmount]() {
      t.value.splice(o, 1);
    }, [ke.Hidden]() {
      t.value[o].state = "hidden";
    } }), !tr(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, ke.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let ns = Vt.RenderStrategy, ct = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
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
  if (!Ru() && Yl())
    return () => V(dt, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = y(null), p = I(() => e.unmount ? ke.Unmount : ke.Hidden);
  i({ el: c, $el: c });
  let { show: h, appear: d } = Du(), { register: v, unregister: f } = ju(), g = y(h.value ? "visible" : "hidden"), w = { value: !0 }, $ = et(), A = { value: !1 }, S = rs(() => {
    !A.value && g.value !== "hidden" && (g.value = "hidden", f($), u());
  });
  U(() => {
    let L = v($);
    ve(L);
  }), le(() => {
    if (p.value === ke.Hidden && $) {
      if (h.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      pe(g.value, { hidden: () => f($), visible: () => v($) });
    }
  });
  let O = Ve(e.enter), b = Ve(e.enterFrom), x = Ve(e.enterTo), P = Ve(e.entered), _ = Ve(e.leave), k = Ve(e.leaveFrom), C = Ve(e.leaveTo);
  U(() => {
    le(() => {
      if (g.value === "visible") {
        let L = N(c);
        if (L instanceof Comment && L.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function B(L) {
    let E = w.value && !d.value, T = N(c);
    !T || !(T instanceof HTMLElement) || E || (A.value = !0, h.value && a(), h.value || l(), L(h.value ? Ln(T, O, b, x, P, (q) => {
      A.value = !1, q === _r.Finished && o();
    }) : Ln(T, _, k, C, P, (q) => {
      A.value = !1, q === _r.Finished && (tr(S) || (g.value = "hidden", f($), u()));
    })));
  }
  return U(() => {
    ut([h], (L, E, T) => {
      B(T), w.value = !1;
    }, { immediate: !0 });
  }), fe(an, S), Ql(I(() => pe(g.value, { visible: z.Open, hidden: z.Closed }) | s.value)), () => {
    let { appear: L, show: E, enter: T, enterFrom: q, enterTo: F, entered: ye, leave: H, leaveFrom: ft, leaveTo: Pt, ...Ae } = e, tt = { ref: c }, Pe = { ...Ae, ...d.value && h.value && xt.isServer ? { class: Rs([r.class, Ae.class, ...O, ...b]) } : {} };
    return Q({ theirProps: Pe, ourProps: tt, slot: {}, slots: n, attrs: r, features: ns, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Mu = ct, dt = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = tn(), s = I(() => e.show === null && i !== null ? (i.value & z.Open) === z.Open : e.show);
  le(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = y(s.value ? "visible" : "hidden"), o = rs(() => {
    a.value = "hidden";
  }), l = y(!0), u = { show: s, appear: I(() => e.appear || !l.value) };
  return U(() => {
    le(() => {
      l.value = !1, s.value ? a.value = "visible" : tr(o) || (a.value = "hidden");
    });
  }), fe(an, o), fe(sn, u), () => {
    let c = Ni(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return Q({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [V(Mu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: ns, visible: a.value === "visible", name: "Transition" });
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
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmPassword ? m.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmPasswordOnce ? m.confirmModal.value.confirmPasswordOnce : !1;
    },
    confirmDanger: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmDanger ? m.confirmModal.value.confirmDanger : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
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
      m.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ne.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), m.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), m.clearConfirmModal();
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
      Dialog: rn,
      DialogPanel: nn,
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
};
function is(e, t) {
  t = en(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Tt(t[r++])];
  return r && r == n ? e : void 0;
}
function we(e, t, r) {
  var n = e == null ? void 0 : is(e, t);
  return n === void 0 ? r : n;
}
var Nu = function() {
  try {
    var e = Ze(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Rn = Nu;
function ss(e, t, r) {
  t == "__proto__" && Rn ? Rn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Vu = Object.prototype, Uu = Vu.hasOwnProperty;
function Hu(e, t, r) {
  var n = e[t];
  (!(Uu.call(e, t) && Yr(n, r)) || r === void 0 && !(t in e)) && ss(e, t, r);
}
function Wu(e, t, r, n) {
  if (!K(e))
    return e;
  t = en(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Tt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = K(c) ? c : Br(t[i + 1]) ? [] : {});
    }
    Hu(o, l, u), o = o[l];
  }
  return e;
}
function $t(e, t, r) {
  return e == null ? e : Wu(e, t, r);
}
const zu = {
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
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return we(e.values, r);
        },
        set(t, r, n) {
          $t(e.values, r, n);
        }
      })
    ) : null;
  }
}, Gu = {
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
      let t = m.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      m.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
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
          return we(e.stores, r);
        },
        set(t, r, n) {
          $t(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Xu = function() {
  return ge.Date.now();
};
const yr = Xu;
var Ku = /\s/;
function Ju(e) {
  for (var t = e.length; t-- && Ku.test(e.charAt(t)); )
    ;
  return t;
}
var Yu = /^\s+/;
function Qu(e) {
  return e && e.slice(0, Ju(e) + 1).replace(Yu, "");
}
var Dn = 0 / 0, Zu = /^[-+]0x[0-9a-f]+$/i, ec = /^0b[01]+$/i, tc = /^0o[0-7]+$/i, rc = parseInt;
function Ir(e) {
  if (typeof e == "number")
    return e;
  if (Jt(e))
    return Dn;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qu(e);
  var r = ec.test(e);
  return r || tc.test(e) ? rc(e.slice(2), r ? 2 : 8) : Zu.test(e) ? Dn : +e;
}
var nc = "Expected a function", ic = Math.max, sc = Math.min;
function rr(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(nc);
  t = Ir(t) || 0, K(r) && (c = !!r.leading, p = "maxWait" in r, s = p ? ic(Ir(r.maxWait) || 0, t) : s, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var x = n, P = i;
    return n = i = void 0, u = b, a = e.apply(P, x), a;
  }
  function v(b) {
    return u = b, o = setTimeout(w, t), c ? d(b) : a;
  }
  function f(b) {
    var x = b - l, P = b - u, _ = t - x;
    return p ? sc(_, s - P) : _;
  }
  function g(b) {
    var x = b - l, P = b - u;
    return l === void 0 || x >= t || x < 0 || p && P >= s;
  }
  function w() {
    var b = yr();
    if (g(b))
      return $(b);
    o = setTimeout(w, f(b));
  }
  function $(b) {
    return o = void 0, h && n ? d(b) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : $(yr());
  }
  function O() {
    var b = yr(), x = g(b);
    if (n = arguments, i = this, l = b, x) {
      if (o === void 0)
        return v(l);
      if (p)
        return clearTimeout(o), o = setTimeout(w, t), d(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), a;
  }
  return O.cancel = A, O.flush = S, O;
}
const ac = {
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
    this.debounceFunction = rr(() => {
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
}, oc = {
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
      Dialog: rn,
      DialogPanel: nn,
      isActivated: this.isActivated
    });
  }
}, as = {
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
    }), Ds(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (j(), de("div", {
      ref_key: "root",
      ref: n
    }, [
      X(s.$slots, "default")
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
function Je(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function re(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function on(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Xe = Math.max, Ht = Math.min, st = Math.round;
function Ar() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function os() {
  return !/^((?!chrome|android).)*safari/i.test(Ar());
}
function at(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && re(e) && (i = e.offsetWidth > 0 && st(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && st(n.height) / e.offsetHeight || 1);
  var a = Je(e) ? J(e) : window, o = a.visualViewport, l = !os() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, p = n.width / i, h = n.height / s;
  return {
    width: p,
    height: h,
    top: c,
    right: u + p,
    bottom: c + h,
    left: u,
    x: u,
    y: c
  };
}
function ln(e) {
  var t = J(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function lc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function uc(e) {
  return e === J(e) || !re(e) ? ln(e) : lc(e);
}
function he(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Me(e) {
  return ((Je(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function un(e) {
  return at(Me(e)).left + ln(e).scrollLeft;
}
function ue(e) {
  return J(e).getComputedStyle(e);
}
function cn(e) {
  var t = ue(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function cc(e) {
  var t = e.getBoundingClientRect(), r = st(t.width) / e.offsetWidth || 1, n = st(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function dc(e, t, r) {
  r === void 0 && (r = !1);
  var n = re(t), i = re(t) && cc(t), s = Me(t), a = at(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((he(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  cn(s)) && (o = uc(t)), re(t) ? (l = at(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = un(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ls(e) {
  var t = at(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function nr(e) {
  return he(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (on(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Me(e)
  );
}
function us(e) {
  return ["html", "body", "#document"].indexOf(he(e)) >= 0 ? e.ownerDocument.body : re(e) && cn(e) ? e : us(nr(e));
}
function wt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = us(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(n), a = i ? [s].concat(s.visualViewport || [], cn(n) ? n : []) : n, o = t.concat(a);
  return i ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(wt(nr(a)))
  );
}
function fc(e) {
  return ["table", "td", "th"].indexOf(he(e)) >= 0;
}
function jn(e) {
  return !re(e) || // https://github.com/popperjs/popper-core/issues/837
  ue(e).position === "fixed" ? null : e.offsetParent;
}
function pc(e) {
  var t = /firefox/i.test(Ar()), r = /Trident/i.test(Ar());
  if (r && re(e)) {
    var n = ue(e);
    if (n.position === "fixed")
      return null;
  }
  var i = nr(e);
  for (on(i) && (i = i.host); re(i) && ["html", "body"].indexOf(he(i)) < 0; ) {
    var s = ue(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ir(e) {
  for (var t = J(e), r = jn(e); r && fc(r) && ue(r).position === "static"; )
    r = jn(r);
  return r && (he(r) === "html" || he(r) === "body" && ue(r).position === "static") ? t : r || pc(e) || t;
}
var oe = "top", me = "bottom", De = "right", Se = "left", sr = "auto", ar = [oe, me, De, Se], ot = "start", Et = "end", hc = "clippingParents", cs = "viewport", gt = "popper", mc = "reference", Mn = /* @__PURE__ */ ar.reduce(function(e, t) {
  return e.concat([t + "-" + ot, t + "-" + Et]);
}, []), vc = /* @__PURE__ */ [].concat(ar, [sr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ot, t + "-" + Et]);
}, []), gc = "beforeRead", yc = "read", bc = "afterRead", wc = "beforeMain", Sc = "main", Oc = "afterMain", $c = "beforeWrite", Ec = "write", Tc = "afterWrite", Pr = [gc, yc, bc, wc, Sc, Oc, $c, Ec, Tc];
function xc(e) {
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
function _c(e) {
  var t = xc(e);
  return Pr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ic(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ce(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Ue = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ac = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Bn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ce(Ue, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ce(Ue, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Pr.indexOf(t.phase) < 0 && console.error(Ce(Ue, t.name, '"phase"', "either " + Pr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ce(Ue, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ce(Ue, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ce(Ue, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ce(Ue, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Bn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ce(Ac, String(t.name), n, n));
      });
    });
  });
}
function qc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function Oe(e) {
  return e.split("-")[0];
}
function Cc(e) {
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
function Fc(e, t) {
  var r = J(e), n = Me(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = os();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + un(e),
    y: l
  };
}
function kc(e) {
  var t, r = Me(e), n = ln(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Xe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Xe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + un(e), l = -n.scrollTop;
  return ue(i || r).direction === "rtl" && (o += Xe(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Lc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && on(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function qr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Rc(e, t) {
  var r = at(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Nn(e, t, r) {
  return t === cs ? qr(Fc(e, r)) : Je(t) ? Rc(t, r) : qr(kc(Me(e)));
}
function Dc(e) {
  var t = wt(nr(e)), r = ["absolute", "fixed"].indexOf(ue(e).position) >= 0, n = r && re(e) ? ir(e) : e;
  return Je(n) ? t.filter(function(i) {
    return Je(i) && Lc(i, n) && he(i) !== "body";
  }) : [];
}
function jc(e, t, r, n) {
  var i = t === "clippingParents" ? Dc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Nn(e, u, n);
    return l.top = Xe(c.top, l.top), l.right = Ht(c.right, l.right), l.bottom = Ht(c.bottom, l.bottom), l.left = Xe(c.left, l.left), l;
  }, Nn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function lt(e) {
  return e.split("-")[1];
}
function ds(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fs(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? Oe(n) : null, s = n ? lt(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case oe:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case me:
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
    case Se:
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
  var u = i ? ds(i) : null;
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
function ps() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mc(e) {
  return Object.assign({}, ps(), e);
}
function Bc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function dn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? hc : o, u = r.rootBoundary, c = u === void 0 ? cs : u, p = r.elementContext, h = p === void 0 ? gt : p, d = r.altBoundary, v = d === void 0 ? !1 : d, f = r.padding, g = f === void 0 ? 0 : f, w = Mc(typeof g != "number" ? g : Bc(g, ar)), $ = h === gt ? mc : gt, A = e.rects.popper, S = e.elements[v ? $ : h], O = jc(Je(S) ? S : S.contextElement || Me(e.elements.popper), l, c, a), b = at(e.elements.reference), x = fs({
    reference: b,
    element: A,
    strategy: "absolute",
    placement: i
  }), P = qr(Object.assign({}, A, x)), _ = h === gt ? P : b, k = {
    top: O.top - _.top + w.top,
    bottom: _.bottom - O.bottom + w.bottom,
    left: O.left - _.left + w.left,
    right: _.right - O.right + w.right
  }, C = e.modifiersData.offset;
  if (h === gt && C) {
    var B = C[i];
    Object.keys(k).forEach(function(L) {
      var E = [De, me].indexOf(L) >= 0 ? 1 : -1, T = [oe, me].indexOf(L) >= 0 ? "y" : "x";
      k[L] += B[T] * E;
    });
  }
  return k;
}
var Vn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Nc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Un = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Hn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Vc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Un : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Un, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, d = {
      state: c,
      setOptions: function(w) {
        var $ = typeof w == "function" ? w(c.options) : w;
        f(), c.options = Object.assign({}, s, c.options, $), c.scrollParents = {
          reference: Je(o) ? wt(o) : o.contextElement ? wt(o.contextElement) : [],
          popper: wt(l)
        };
        var A = _c(Cc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = qc([].concat(A, c.options.modifiers), function(C) {
            var B = C.name;
            return B;
          });
          if (Pc(S), Oe(c.options.placement) === sr) {
            var O = c.orderedModifiers.find(function(C) {
              var B = C.name;
              return B === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = ue(l), x = b.marginTop, P = b.marginRight, _ = b.marginBottom, k = b.marginLeft;
          [x, P, _, k].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var w = c.elements, $ = w.reference, A = w.popper;
          if (!Hn($, A)) {
            process.env.NODE_ENV !== "production" && console.error(Vn);
            return;
          }
          c.rects = {
            reference: dc($, ir(A), c.options.strategy === "fixed"),
            popper: ls(A)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var S = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Nc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var b = c.orderedModifiers[O], x = b.fn, P = b.options, _ = P === void 0 ? {} : P, k = b.name;
            typeof x == "function" && (c = x({
              state: c,
              options: _,
              name: k,
              instance: d
            }) || c);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ic(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!Hn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Vn), d;
    d.setOptions(u).then(function(g) {
      !h && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function v() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, $ = g.options, A = $ === void 0 ? {} : $, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: c,
            name: w,
            instance: d,
            options: A
          }), b = function() {
          };
          p.push(O || b);
        }
      });
    }
    function f() {
      p.forEach(function(g) {
        return g();
      }), p = [];
    }
    return d;
  };
}
var Lt = {
  passive: !0
};
function Uc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = J(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Lt);
  }), o && l.addEventListener("resize", r.update, Lt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Lt);
    }), o && l.removeEventListener("resize", r.update, Lt);
  };
}
const Hc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Uc,
  data: {}
};
function Wc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = fs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const zc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wc,
  data: {}
};
var Gc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xc(e, t) {
  var r = e.x, n = e.y, i = t.devicePixelRatio || 1;
  return {
    x: st(r * i) / i || 0,
    y: st(n * i) / i || 0
  };
}
function Wn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, h = a.x, d = h === void 0 ? 0 : h, v = a.y, f = v === void 0 ? 0 : v, g = typeof c == "function" ? c({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  d = g.x, f = g.y;
  var w = a.hasOwnProperty("x"), $ = a.hasOwnProperty("y"), A = Se, S = oe, O = window;
  if (u) {
    var b = ir(r), x = "clientHeight", P = "clientWidth";
    if (b === J(r) && (b = Me(r), ue(b).position !== "static" && o === "absolute" && (x = "scrollHeight", P = "scrollWidth")), b = b, i === oe || (i === Se || i === De) && s === Et) {
      S = me;
      var _ = p && b === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[x]
      );
      f -= _ - n.height, f *= l ? 1 : -1;
    }
    if (i === Se || (i === oe || i === me) && s === Et) {
      A = De;
      var k = p && b === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[P]
      );
      d -= k - n.width, d *= l ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: o
  }, u && Gc), B = c === !0 ? Xc({
    x: d,
    y: f
  }, J(r)) : {
    x: d,
    y: f
  };
  if (d = B.x, f = B.y, l) {
    var L;
    return Object.assign({}, C, (L = {}, L[S] = $ ? "0" : "", L[A] = w ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", L));
  }
  return Object.assign({}, C, (t = {}, t[S] = $ ? f + "px" : "", t[A] = w ? d + "px" : "", t.transform = "", t));
}
function Kc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ue(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: Oe(t.placement),
    variation: lt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Jc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kc,
  data: {}
};
function Yc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !re(s) || !he(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function Qc(e) {
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
      !re(i) || !he(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Zc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Yc,
  effect: Qc,
  requires: ["computeStyles"]
};
var ed = [Hc, zc, Jc, Zc], td = /* @__PURE__ */ Vc({
  defaultModifiers: ed
});
function rd(e) {
  return e === "x" ? "y" : "x";
}
function jt(e, t, r) {
  return Xe(e, Ht(t, r));
}
function nd(e, t, r) {
  var n = jt(e, t, r);
  return n > r ? r : n;
}
function id(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, h = r.tether, d = h === void 0 ? !0 : h, v = r.tetherOffset, f = v === void 0 ? 0 : v, g = dn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), w = Oe(t.placement), $ = lt(t.placement), A = !$, S = ds(w), O = rd(S), b = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, k = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (b) {
    if (s) {
      var L, E = S === "y" ? oe : Se, T = S === "y" ? me : De, q = S === "y" ? "height" : "width", F = b[S], ye = F + g[E], H = F - g[T], ft = d ? -P[q] / 2 : 0, Pt = $ === ot ? x[q] : P[q], Ae = $ === ot ? -P[q] : -x[q], tt = t.elements.arrow, Pe = d && tt ? ls(tt) : {
        width: 0,
        height: 0
      }, qe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ps(), pt = qe[E], qt = qe[T], Be = jt(0, x[q], Pe[q]), lr = A ? x[q] / 2 - ft - Be - pt - k.mainAxis : Pt - Be - pt - k.mainAxis, Ts = A ? -x[q] / 2 + ft + Be + qt + k.mainAxis : Ae + Be + qt + k.mainAxis, ur = t.elements.arrow && ir(t.elements.arrow), xs = ur ? S === "y" ? ur.clientTop || 0 : ur.clientLeft || 0 : 0, mn = (L = C == null ? void 0 : C[S]) != null ? L : 0, _s = F + lr - mn - xs, Is = F + Ts - mn, vn = jt(d ? Ht(ye, _s) : ye, F, d ? Xe(H, Is) : H);
      b[S] = vn, B[S] = vn - F;
    }
    if (o) {
      var gn, As = S === "x" ? oe : Se, Ps = S === "x" ? me : De, Ne = b[O], Ct = O === "y" ? "height" : "width", yn = Ne + g[As], bn = Ne - g[Ps], cr = [oe, Se].indexOf(w) !== -1, wn = (gn = C == null ? void 0 : C[O]) != null ? gn : 0, Sn = cr ? yn : Ne - x[Ct] - P[Ct] - wn + k.altAxis, On = cr ? Ne + x[Ct] + P[Ct] - wn - k.altAxis : bn, $n = d && cr ? nd(Sn, Ne, On) : jt(d ? Sn : yn, Ne, d ? On : bn);
      b[O] = $n, B[O] = $n - Ne;
    }
    t.modifiersData[n] = B;
  }
}
const sd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: id,
  requiresIfExists: ["offset"]
};
var ad = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ad[t];
  });
}
var od = {
  start: "end",
  end: "start"
};
function zn(e) {
  return e.replace(/start|end/g, function(t) {
    return od[t];
  });
}
function ld(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? vc : l, c = lt(n), p = c ? o ? Mn : Mn.filter(function(v) {
    return lt(v) === c;
  }) : ar, h = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  h.length === 0 && (h = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = h.reduce(function(v, f) {
    return v[f] = dn(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Oe(f)], v;
  }, {});
  return Object.keys(d).sort(function(v, f) {
    return d[v] - d[f];
  });
}
function ud(e) {
  if (Oe(e) === sr)
    return [];
  var t = Mt(e);
  return [zn(e), t, zn(t)];
}
function cd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, h = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, f = r.allowedAutoPlacements, g = t.options.placement, w = Oe(g), $ = w === g, A = l || ($ || !v ? [Mt(g)] : ud(g)), S = [g].concat(A).reduce(function(Pe, qe) {
      return Pe.concat(Oe(qe) === sr ? ld(t, {
        placement: qe,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: f
      }) : qe);
    }, []), O = t.rects.reference, b = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, _ = S[0], k = 0; k < S.length; k++) {
      var C = S[k], B = Oe(C), L = lt(C) === ot, E = [oe, me].indexOf(B) >= 0, T = E ? "width" : "height", q = dn(t, {
        placement: C,
        boundary: c,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), F = E ? L ? De : Se : L ? me : oe;
      O[T] > b[T] && (F = Mt(F));
      var ye = Mt(F), H = [];
      if (s && H.push(q[B] <= 0), o && H.push(q[F] <= 0, q[ye] <= 0), H.every(function(Pe) {
        return Pe;
      })) {
        _ = C, P = !1;
        break;
      }
      x.set(C, H);
    }
    if (P)
      for (var ft = v ? 3 : 1, Pt = function(qe) {
        var pt = S.find(function(qt) {
          var Be = x.get(qt);
          if (Be)
            return Be.slice(0, qe).every(function(lr) {
              return lr;
            });
        });
        if (pt)
          return _ = pt, "break";
      }, Ae = ft; Ae > 0; Ae--) {
        var tt = Pt(Ae);
        if (tt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const dd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ie = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, fd = {
  components: {
    OnClickOutside: as
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
    this.popper = td(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [dd, sd],
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
}, pd = { ref: "tooltip" };
function hd(e, t, r, n, i, s) {
  const a = Mr("OnClickOutside");
  return j(), G(a, {
    style: Bt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: ci(() => [
      wr("div", {
        ref: "button",
        style: Bt(s.buttonStyle)
      }, [
        X(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      wr("div", pd, [
        X(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const md = /* @__PURE__ */ Ie(fd, [["render", hd]]), vd = {
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
    const t = W("$splade") || {}, r = W("$spladeOptions") || {};
    return (n, i) => ee(t).isSsr ? (j(), G(ce, {
      key: e.keepAliveKey,
      html: ee(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (j(), G(li, {
      key: 0,
      max: ee(r).max_keep_alive
    }, [
      (j(), G(ce, {
        key: e.keepAliveKey,
        html: ee(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function hs(e) {
  return e && e.length ? e[0] : void 0;
}
const gd = {
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
        return Z(e.values, t);
      },
      first(t) {
        return hs(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, yd = {
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
      return m.currentStack.value;
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
      this.pendingVisit && m.currentStack.value === this.stack && (m.visit(this.pendingVisit), this.pendingVisit = null);
    },
    handlePendingRefresh() {
      this.pendingRefresh && m.currentStack.value === this.stack && (m.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll), this.pendingRefresh = !1);
    },
    bindListeners() {
      this.subscription.on("pusher:subscription_succeeded", () => {
        this.subscribed = !0, this.$emit("subscribed");
      }), this.listeners.forEach((e) => {
        const t = this.subscription.listen(e, (r) => {
          this.$emit("event", { name: e, data: r });
          const n = "splade.preserveScroll", i = "splade.redirect", s = "splade.refresh", a = "splade.toast";
          let o = null, l = !1, u = !1, c = [];
          te(r, (p) => {
            K(p) && (i in p && (o = p[i]), n in p && (l = p[n]), s in p && (u = p[s]), a in p && c.push(p));
          }), o ? this.pendingVisit = o : u ? this.pendingRefresh = { preserveScroll: l } : this.events.push({ name: e, data: r }), c.length > 0 && c.forEach((p) => {
            m.pushToast(p);
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
function bd() {
  this.__data__ = new xe(), this.size = 0;
}
function wd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Sd(e) {
  return this.__data__.get(e);
}
function Od(e) {
  return this.__data__.has(e);
}
var $d = 200;
function Ed(e, t) {
  var r = this.__data__;
  if (r instanceof xe) {
    var n = r.__data__;
    if (!Ot || n.length < $d - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new _e(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function $e(e) {
  var t = this.__data__ = new xe(e);
  this.size = t.size;
}
$e.prototype.clear = bd;
$e.prototype.delete = wd;
$e.prototype.get = Sd;
$e.prototype.has = Od;
$e.prototype.set = Ed;
var Td = "__lodash_hash_undefined__";
function xd(e) {
  return this.__data__.set(e, Td), this;
}
function _d(e) {
  return this.__data__.has(e);
}
function Wt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new _e(); ++t < r; )
    this.add(e[t]);
}
Wt.prototype.add = Wt.prototype.push = xd;
Wt.prototype.has = _d;
function Id(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ad(e, t) {
  return e.has(t);
}
var Pd = 1, qd = 2;
function ms(e, t, r, n, i, s) {
  var a = r & Pd, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, h = !0, d = r & qd ? new Wt() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < o; ) {
    var v = e[p], f = t[p];
    if (n)
      var g = a ? n(f, v, p, t, e, s) : n(v, f, p, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!Id(t, function(w, $) {
        if (!Ad(d, $) && (v === w || i(v, w, r, n, s)))
          return d.push($);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === f || i(v, f, r, n, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
var Cd = ge.Uint8Array;
const Gn = Cd;
function Fd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function kd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ld = 1, Rd = 2, Dd = "[object Boolean]", jd = "[object Date]", Md = "[object Error]", Bd = "[object Map]", Nd = "[object Number]", Vd = "[object RegExp]", Ud = "[object Set]", Hd = "[object String]", Wd = "[object Symbol]", zd = "[object ArrayBuffer]", Gd = "[object DataView]", Xn = Le ? Le.prototype : void 0, br = Xn ? Xn.valueOf : void 0;
function Xd(e, t, r, n, i, s, a) {
  switch (r) {
    case Gd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case zd:
      return !(e.byteLength != t.byteLength || !s(new Gn(e), new Gn(t)));
    case Dd:
    case jd:
    case Nd:
      return Yr(+e, +t);
    case Md:
      return e.name == t.name && e.message == t.message;
    case Vd:
    case Hd:
      return e == t + "";
    case Bd:
      var o = Fd;
    case Ud:
      var l = n & Ld;
      if (o || (o = kd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Rd, a.set(e, t);
      var c = ms(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Wd:
      if (br)
        return br.call(e) == br.call(t);
  }
  return !1;
}
function Kd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Jd(e, t, r) {
  var n = t(e);
  return M(e) ? n : Kd(n, r(e));
}
function vs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Yd() {
  return [];
}
var Qd = Object.prototype, Zd = Qd.propertyIsEnumerable, Kn = Object.getOwnPropertySymbols, ef = Kn ? function(e) {
  return e == null ? [] : (e = Object(e), vs(Kn(e), function(t) {
    return Zd.call(e, t);
  }));
} : Yd;
const tf = ef;
function Jn(e) {
  return Jd(e, Gt, tf);
}
var rf = 1, nf = Object.prototype, sf = nf.hasOwnProperty;
function af(e, t, r, n, i, s) {
  var a = r & rf, o = Jn(e), l = o.length, u = Jn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var p = l; p--; ) {
    var h = o[p];
    if (!(a ? h in t : sf.call(t, h)))
      return !1;
  }
  var d = s.get(e), v = s.get(t);
  if (d && v)
    return d == t && v == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++p < l; ) {
    h = o[p];
    var w = e[h], $ = t[h];
    if (n)
      var A = a ? n($, w, h, t, e, s) : n(w, $, h, e, t, s);
    if (!(A === void 0 ? w === $ || i(w, $, r, n, s) : A)) {
      f = !1;
      break;
    }
    g || (g = h == "constructor");
  }
  if (f && !g) {
    var S = e.constructor, O = t.constructor;
    S != O && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var of = Ze(ge, "DataView");
const Cr = of;
var lf = Ze(ge, "Promise");
const Fr = lf;
var uf = Ze(ge, "Set");
const kr = uf;
var cf = Ze(ge, "WeakMap");
const Lr = cf;
var Yn = "[object Map]", df = "[object Object]", Qn = "[object Promise]", Zn = "[object Set]", ei = "[object WeakMap]", ti = "[object DataView]", ff = Qe(Cr), pf = Qe(Ot), hf = Qe(Fr), mf = Qe(kr), vf = Qe(Lr), He = je;
(Cr && He(new Cr(new ArrayBuffer(1))) != ti || Ot && He(new Ot()) != Yn || Fr && He(Fr.resolve()) != Qn || kr && He(new kr()) != Zn || Lr && He(new Lr()) != ei) && (He = function(e) {
  var t = je(e), r = t == df ? e.constructor : void 0, n = r ? Qe(r) : "";
  if (n)
    switch (n) {
      case ff:
        return ti;
      case pf:
        return Yn;
      case hf:
        return Qn;
      case mf:
        return Zn;
      case vf:
        return ei;
    }
  return t;
});
const ri = He;
var gf = 1, ni = "[object Arguments]", ii = "[object Array]", Rt = "[object Object]", yf = Object.prototype, si = yf.hasOwnProperty;
function bf(e, t, r, n, i, s) {
  var a = M(e), o = M(t), l = a ? ii : ri(e), u = o ? ii : ri(t);
  l = l == ni ? Rt : l, u = u == ni ? Rt : u;
  var c = l == Rt, p = u == Rt, h = l == u;
  if (h && Sr(e)) {
    if (!Sr(t))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return s || (s = new $e()), a || gi(e) ? ms(e, t, r, n, i, s) : Xd(e, t, l, r, n, i, s);
  if (!(r & gf)) {
    var d = c && si.call(e, "__wrapped__"), v = p && si.call(t, "__wrapped__");
    if (d || v) {
      var f = d ? e.value() : e, g = v ? t.value() : t;
      return s || (s = new $e()), i(f, g, r, n, s);
    }
  }
  return h ? (s || (s = new $e()), af(e, t, r, n, i, s)) : !1;
}
function or(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Re(e) && !Re(t) ? e !== e && t !== t : bf(e, t, r, n, or, i);
}
var wf = 1, Sf = 2;
function Of(e, t, r, n) {
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
      var p = new $e();
      if (n)
        var h = n(u, c, l, e, t, p);
      if (!(h === void 0 ? or(c, u, wf | Sf, n, p) : h))
        return !1;
    }
  }
  return !0;
}
function gs(e) {
  return e === e && !K(e);
}
function $f(e) {
  for (var t = Gt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, gs(i)];
  }
  return t;
}
function ys(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Ef(e) {
  var t = $f(e);
  return t.length == 1 && t[0][2] ? ys(t[0][0], t[0][1]) : function(r) {
    return r === e || Of(r, e, t);
  };
}
function Tf(e, t) {
  return e != null && t in Object(e);
}
function xf(e, t) {
  return e != null && ji(e, t, Tf);
}
var _f = 1, If = 2;
function Af(e, t) {
  return Jr(e) && gs(t) ? ys(Tt(e), t) : function(r) {
    var n = we(r, e);
    return n === void 0 && n === t ? xf(r, e) : or(t, n, _f | If);
  };
}
function Pf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function qf(e) {
  return function(t) {
    return is(t, e);
  };
}
function Cf(e) {
  return Jr(e) ? Pf(Tt(e)) : qf(e);
}
function At(e) {
  return typeof e == "function" ? e : e == null ? bi : typeof e == "object" ? M(e) ? Af(e[0], e[1]) : Ef(e) : Cf(e);
}
function Ff(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!zt(t)) {
      var s = At(r);
      t = Gt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function kf(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ai = 1 / 0, Lf = 17976931348623157e292;
function Rf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Ir(e), e === ai || e === -ai) {
    var t = e < 0 ? -1 : 1;
    return t * Lf;
  }
  return e === e ? e : 0;
}
function fn(e) {
  var t = Rf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Df = Math.max;
function jf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : fn(r);
  return i < 0 && (i = Df(n + i, 0)), kf(e, At(t), i);
}
var Mf = Ff(jf);
const pn = Mf, Bf = {
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
      return e ? se(e) ? e : M(e) ? e.map(this.extractMetadataFromExistingFile) : K(e) ? e.options.metadata.metadata : null : null;
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
              const h = ne.CancelToken.source();
              return ne({
                url: a.preview_url,
                method: "GET",
                cancelToken: h.token,
                responseType: "blob"
              }).then((d) => {
                const v = new File([d.data], a.name, { type: a.type });
                o(v);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  h.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, p, h) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const f = ne.CancelToken.source();
            ne({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: f.token,
              onUploadProgress: (g) => {
                p(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var w;
              axios.isCancel(g) ? h() : c((w = g.response) == null ? void 0 : w.statusText);
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
      this.server && (e = pn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
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
}, Nf = { ref: "file" };
function Vf(e, t, r, n, i, s) {
  return j(), de("div", Nf, [
    X(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Uf = /* @__PURE__ */ Ie(Bf, [["render", Vf]]), Hf = {
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
        return Z(e.values, t);
      },
      ...this.values
    });
  }
};
function hn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ws(t, bs(r, n), e[n]);
  return t;
}
function bs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ws(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ws(e, bs(t, n.toString()), r[n]));
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
  hn(r, e, t);
}
var Wf = "[object Boolean]";
function Ss(e) {
  return e === !0 || e === !1 || Re(e) && je(e) == Wf;
}
function Os(e, t) {
  var r = {};
  return t = At(t), Vr(e, function(n, i, s) {
    ss(r, i, t(n, i, s));
  }), r;
}
function $s(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function rt(e, t, r) {
  return e = Zr(e), r = r == null ? 0 : $s(fn(r), 0, e.length), t = Zt(t), e.slice(r, r + t.length) == t;
}
const zf = {
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
      return m.validationErrors(this.stack);
    },
    /*
     * Flattens the raw errors.
     */
    errors() {
      return Os(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = rr(() => {
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
      m.confirm(
        Ss(this.confirm) ? "" : this.confirm,
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
      const t = this.values instanceof FormData ? this.values : hn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0), this.stack > 0 && this.keepModal && (r["X-Splade-Modal"] = m.stackType(this.stack), r["X-Splade-Modal-Target"] = this.stack);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3), this.response = s.data;
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      m.request(this.action, n, t, { ...r, ...this.headers }, !1, this.blob).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = pn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
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
            return r === "$response" ? e.response : n.includes(r) || rt(r, "__v_") ? e[r] : (!e.isMounted && !Z(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), we(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Gf = {
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
}, Xf = { ref: "input" };
function Kf(e, t, r, n, i, s) {
  return j(), de("div", Xf, [
    X(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Jf = /* @__PURE__ */ Ie(Gf, [["render", Kf]]), Yf = {
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
}, Qf = { ref: "jodit" };
function Zf(e, t, r, n, i, s) {
  return j(), de("div", Qf, [
    X(e.$slots, "default")
  ], 512);
}
const ep = /* @__PURE__ */ Ie(Yf, [["render", Zf]]), tp = {
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
        return m.isSsr ? "" : window.location.href;
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
      this.html = null, m.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function rp(e, t, r, n, i, s) {
  const a = Mr("Render");
  return i.html ? (j(), G(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? X(e.$slots, "default", { key: 1 }) : Dr("", !0);
}
const np = /* @__PURE__ */ Ie(tp, [["render", rp]]), ip = ["href", "onClick"], sp = {
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
    const t = e, r = W("stack"), n = y(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      m.confirm(
        Ss(t.confirm) ? "" : t.confirm,
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
        return m.modal(t.href);
      if (t.slideover && !o)
        return m.slideover(t.href);
      if (rt(t.href, "#")) {
        if (m.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = m.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? m.replace(t.href, u) : m.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : hn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(se(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), m.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (j(), de("a", {
      href: e.href,
      onClick: js(i, ["prevent"])
    }, [
      X(a.$slots, "default")
    ], 8, ip));
  }
}, ap = {
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
      Dialog: rn,
      DialogPanel: nn,
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, op = {
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
    return m.registerPreloadedModal(t.name, t.html, t.type), t.opened && m.openPreloadedModal(t.name), () => {
    };
  }
}, lp = {
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
        return m.isSsr ? "" : window.location.href;
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
      this.loading = !0, m.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function up(e, t, r, n, i, s) {
  const a = Mr("Render");
  return i.html ? (j(), G(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? X(e.$slots, "placeholder", { key: 1 }) : X(e.$slots, "default", { key: 2 });
}
const cp = /* @__PURE__ */ Ie(lp, [["render", up]]), dp = {
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
function fp(e, t) {
  var r = -1, n = zt(e) ? Array(e.length) : [];
  return Ur(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function Es(e, t) {
  var r = M(e) ? Di : fp;
  return r(e, At(t));
}
const pp = {
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
        this.setOptionsFromRemote(this.remoteRoot ? we(e.data, this.remoteRoot) : e.data);
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
      if (!r && K(e))
        if (this.optionValue && this.optionLabel) {
          let n = we(e, this.optionValue);
          se(n) || (n = `${n}`), t.push({
            value: n,
            label: we(e, this.optionLabel)
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
      Array.isArray(e) && (e = Es(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    /*
     * Returns the internal Choices.js item that is currently selected.
     */
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return pn(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, hp = { ref: "select" };
function mp(e, t, r, n, i, s) {
  return j(), de("div", hp, [
    X(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const vp = /* @__PURE__ */ Ie(pp, [["render", mp]]), gp = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Os(e, (i) => i.join(`
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
        return Z(t, i);
      },
      hasShared(i) {
        return Z(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function yp(e, t, r) {
  e = Zr(e), t = Zt(t);
  var n = e.length;
  r = r === void 0 ? n : $s(fn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function bp(e, t) {
  var r = [];
  return Ur(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function wp(e, t) {
  var r = M(e) ? vs : bp;
  return r(e, At(t));
}
function oi(e, t) {
  return or(e, t);
}
const Sp = {
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
      return !oi(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = rr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    te(e, (r, n) => {
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
        return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    /**
     * Resets the table to its initial state.
     */
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, te(e, (t, r) => {
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
      const t = !this.columnIsVisible(e), r = wp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Es(r, (i) => i.key).sort();
      oi(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
        if (!yp(i, "]")) {
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
      i[e] = t, (rt(e, "perPage") || rt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
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
        u.length !== 0 && u.forEach((p, h) => {
          n[`${c}[${h}]`] = p;
        });
      });
      let i = "";
      te(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : m.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": m.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      m.replace(s, o).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Ee(() => {
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
          a = await m.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = se(s) && s ? s : "password";
        o[l] = a;
      }
      m.request(e, "POST", o, {}, !1).then((l) => {
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
}, Op = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ui
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
function $p(e, t, r, n, i, s) {
  return Ms((j(), G(Bs(i.isMounted ? i.Teleport : "div"), Ns(Vs(e.$attrs)), {
    default: ci(() => [
      X(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Us, i.isMounted]
  ]);
}
const Ep = /* @__PURE__ */ Ie(Op, [["render", $p]]), Tp = {
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
}, xp = { ref: "textarea" };
function _p(e, t, r, n, i, s) {
  return j(), de("div", xp, [
    X(e.$slots, "default")
  ], 512);
}
const Ip = /* @__PURE__ */ Ie(Tp, [["render", _p]]), Ap = {
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
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, Pp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], qp = {
  computed: {
    /*
     * Retrieves the toasts from the Splade instance.
     */
    toasts: function() {
      return m.toastsReversed.value;
    },
    /*
     * Determine whether a backdrop should be shown.
     */
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
      positions: Pp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ce,
      // These HeadlessUI exports will be removed in v1.0
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, Cp = {
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
            if (n.length === 1 && hs(n) === "default") {
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
}, Fp = {
  render() {
    return this.$slots.default({
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, kp = {
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
        get: (r, n) => we(e.values, n),
        set: (r, n, i) => {
          $t(e.values, n, i);
        }
      })
    };
    return this.methods.forEach((r) => {
      t[r] = async (...n) => {
        n.length === 1 && we(n, "0._vts") && (n = []);
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
          } });
        } catch (s) {
          m.onServerError(s.response.data);
          return;
        }
        return this.instance = i.data.instance, this.signature = i.data.signature, te(i.data.data, (s, a) => {
          $t(this.values, a, s);
        }), i.data.redirect ? m.visit(i.data.redirect) : (i.data.toasts.forEach((s) => {
          m.pushToast(s);
        }), i.data.result);
      };
    }), this.$slots.default(t);
  }
}, Lp = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && Ee(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", rr(i, 100)), i();
  }
}, Rr = {
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
    Rr.timeout = setTimeout(() => r.start(), t);
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
    clearTimeout(Rr.timeout), t.done(), t.remove();
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
}, Mp = {
  /**
   * Registers all Splade components and makes the configured
   * options and the Splade core globally available.
   */
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Z(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Z(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Z(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Z(t, "link_component") ? t.link_component : "Link", t.progress_bar = Z(t, "progress_bar") ? t.progress_bar : !1, t.components = Z(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Gl).component(`${r}Confirm`, Bu).component(`${r}DataStores`, Gu).component(`${r}Data`, zu).component(`${r}Defer`, ac).component(`${r}Dialog`, oc).component(`${r}Dropdown`, md).component(`${r}DynamicHtml`, vd).component(`${r}Errors`, gd).component(`${r}Event`, yd).component(`${r}File`, Uf).component(`${r}Flash`, Hf).component(`${r}Form`, zf).component(`${r}Input`, Jf).component(`${r}JoditEditor`, ep).component(`${r}VueBridge`, kp).component(`${r}Lazy`, np).component(`${r}Modal`, ap).component(`${r}OnClickOutside`, as).component(`${r}PreloadedModal`, op).component(`${r}Rehydrate`, cp).component(`${r}Render`, ce).component(`${r}Script`, dp).component(`${r}Select`, vp).component(`${r}State`, gp).component(`${r}Table`, Sp).component(`${r}Teleport`, Ep).component(`${r}Textarea`, Ip).component(`${r}Toast`, Ap).component(`${r}Toasts`, qp).component(`${r}Toggle`, Cp).component(`${r}Transition`, Fp).component(t.link_component, sp).directive(`${r}PreserveScroll`, Lp), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      K(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        Z(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Rr.init(t.progress_bar);
    }
    te(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Bp(e, t, r) {
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
  m as Splade,
  zo as SpladeApp,
  Mp as SpladePlugin,
  jp as renderSpladeApp,
  Bp as startServer
};
