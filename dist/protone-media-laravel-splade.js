import ie from "axios";
import { ref as b, computed as P, watch as ot, openBlock as F, createBlock as H, unref as N, createCommentVNode as Lr, h as k, onMounted as R, createElementBlock as ve, createElementVNode as gr, provide as ae, inject as V, nextTick as Ie, KeepAlive as li, normalizeStyle as Rt, createVNode as Is, Fragment as kr, renderList as As, cloneVNode as Ps, watchEffect as oe, defineComponent as W, onUnmounted as ye, Teleport as ui, reactive as qs, shallowRef as Cs, normalizeClass as Fs, onBeforeUnmount as Ls, renderSlot as Y, resolveComponent as Dr, withCtx as ci, withModifiers as ks, withDirectives as Ds, resolveDynamicComponent as Bs, normalizeProps as Rs, guardReactiveProps as js, vShow as Ms } from "vue";
function Ns(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Vs(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Hs = Vs();
const Us = Hs;
function Ws(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zs = typeof global == "object" && global && global.Object === Object && global;
const di = zs;
var Gs = typeof self == "object" && self && self.Object === Object && self, Xs = di || Gs || Function("return this")();
const de = Xs;
var Ks = de.Symbol;
const Ae = Ks;
var fi = Object.prototype, Ys = fi.hasOwnProperty, Qs = fi.toString, pt = Ae ? Ae.toStringTag : void 0;
function Js(e) {
  var t = Ys.call(e, pt), r = e[pt];
  try {
    e[pt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Qs.call(e);
  return n && (t ? e[pt] = r : delete e[pt]), i;
}
var Zs = Object.prototype, ea = Zs.toString;
function ta(e) {
  return ea.call(e);
}
var ra = "[object Null]", na = "[object Undefined]", $n = Ae ? Ae.toStringTag : void 0;
function Ce(e) {
  return e == null ? e === void 0 ? na : ra : $n && $n in Object(e) ? Js(e) : ta(e);
}
function Pe(e) {
  return e != null && typeof e == "object";
}
var ia = "[object Arguments]";
function En(e) {
  return Pe(e) && Ce(e) == ia;
}
var pi = Object.prototype, sa = pi.hasOwnProperty, aa = pi.propertyIsEnumerable, oa = En(function() {
  return arguments;
}()) ? En : function(e) {
  return Pe(e) && sa.call(e, "callee") && !aa.call(e, "callee");
};
const hi = oa;
var la = Array.isArray;
const L = la;
function ua() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = mi && typeof module == "object" && module && !module.nodeType && module, ca = Tn && Tn.exports === mi, xn = ca ? de.Buffer : void 0, da = xn ? xn.isBuffer : void 0, fa = da || ua;
const yr = fa;
var pa = 9007199254740991, ha = /^(?:0|[1-9]\d*)$/;
function Br(e, t) {
  var r = typeof e;
  return t = t == null ? pa : t, !!t && (r == "number" || r != "symbol" && ha.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ma = 9007199254740991;
function Rr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ma;
}
var va = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", Sa = "[object Function]", Oa = "[object Map]", $a = "[object Number]", Ea = "[object Object]", Ta = "[object RegExp]", xa = "[object Set]", _a = "[object String]", Ia = "[object WeakMap]", Aa = "[object ArrayBuffer]", Pa = "[object DataView]", qa = "[object Float32Array]", Ca = "[object Float64Array]", Fa = "[object Int8Array]", La = "[object Int16Array]", ka = "[object Int32Array]", Da = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ra = "[object Uint16Array]", ja = "[object Uint32Array]", q = {};
q[qa] = q[Ca] = q[Fa] = q[La] = q[ka] = q[Da] = q[Ba] = q[Ra] = q[ja] = !0;
q[va] = q[ga] = q[Aa] = q[ya] = q[Pa] = q[ba] = q[wa] = q[Sa] = q[Oa] = q[$a] = q[Ea] = q[Ta] = q[xa] = q[_a] = q[Ia] = !1;
function Ma(e) {
  return Pe(e) && Rr(e.length) && !!q[Ce(e)];
}
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, yt = vi && typeof module == "object" && module && !module.nodeType && module, Va = yt && yt.exports === vi, ur = Va && di.process, Ha = function() {
  try {
    var e = yt && yt.require && yt.require("util").types;
    return e || ur && ur.binding && ur.binding("util");
  } catch {
  }
}();
const _n = Ha;
var In = _n && _n.isTypedArray, Ua = In ? Na(In) : Ma;
const gi = Ua;
var Wa = Object.prototype, za = Wa.hasOwnProperty;
function Ga(e, t) {
  var r = L(e), n = !r && hi(e), i = !r && !n && yr(e), s = !r && !n && !i && gi(e), a = r || n || i || s, o = a ? Ws(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || za.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Br(u, l))) && o.push(u);
  return o;
}
var Xa = Object.prototype;
function Ka(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xa;
  return e === r;
}
function Ya(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Qa = Ya(Object.keys, Object);
const Ja = Qa;
var Za = Object.prototype, eo = Za.hasOwnProperty;
function to(e) {
  if (!Ka(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    eo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function U(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ro = "[object AsyncFunction]", no = "[object Function]", io = "[object GeneratorFunction]", so = "[object Proxy]";
function yi(e) {
  if (!U(e))
    return !1;
  var t = Ce(e);
  return t == no || t == io || t == ro || t == so;
}
function Ut(e) {
  return e != null && Rr(e.length) && !yi(e);
}
function Wt(e) {
  return Ut(e) ? Ga(e) : to(e);
}
function jr(e, t) {
  return e && Us(e, t, Wt);
}
function ao(e, t) {
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
var oo = ao(jr);
const Mr = oo;
function bi(e) {
  return e;
}
function wi(e) {
  return typeof e == "function" ? e : bi;
}
function lo(e, t) {
  var r = L(e) ? Ns : Mr;
  return r(e, wi(t));
}
function ee(e, t) {
  return e && jr(e, wi(t));
}
var uo = Array.prototype, co = uo.reverse;
function fo(e) {
  return e == null ? e : co.call(e);
}
class Si {
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
const jt = b(0), J = b(1), C = b({}), te = b(0), zt = b({}), tt = {}, ge = typeof window > "u";
function po(e, t, r) {
  ge || window.addEventListener("popstate", ho.bind(this)), Object.keys(t).length > 0 && jt.value++, tt[J.value] = new Si(J.value), Ur(r), Gt(r.head), Wr(e);
  const n = ge ? "" : location.href, i = Nr(
    n,
    r.head,
    e,
    t,
    {},
    J.value,
    jt.value,
    r.persistentLayout
  );
  Oi(i);
}
function ho(e) {
  !e.state || (C.value = e.state, te.value = 0, zt.value = {}, zr.value = {}, Vr.value = C.value.persistentLayoutKey, Gt(C.value.head), Wr(C.value.html, C.value.rememberedState.scrollY));
}
function Nr(e, t, r, n, i, s, a, o) {
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
function mo(e) {
  ge || window.history.pushState(e, "", e.url);
}
function vo(e) {
  const t = Nr(
    e,
    JSON.parse(JSON.stringify(C.value.head)),
    C.value.html,
    JSON.parse(JSON.stringify(C.value.dynamics)),
    { ...C.value.rememberedState },
    C.value.pageVisitId,
    C.value.dynamicVisitId,
    C.value.persistentLayoutKey
  );
  ge || window.history.replaceState(t, "", t.url);
}
function Oi(e) {
  ge || window.history.replaceState(e, "", e.url);
}
const cr = b(0), Vr = b(null);
function go(e, t) {
  var h;
  cr.value++;
  const r = e.request.responseURL;
  if (U((h = e.data) == null ? void 0 : h.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && te.value++;
  const n = Vr.value;
  if (Ur(e.data.splade), Gt(e.data.splade.head), r === C.value.url && (t = !0), e.data.splade.modal)
    return Ci(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  te.value = 0, zt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(C.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && ee(s, (m, d) => {
    s[d] += `<!-- ${cr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${cr.value} -->`)) : (o && jt.value++, (!o || !a) && (J.value++, tt[J.value] = tt[J.value] || new Si(J.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !ge && t && e.data.splade.preserveScroll && (u = window.scrollY), Wr(
    l ? C.value.html : i,
    u
  );
  const c = Nr(
    r,
    e.data.splade.head,
    l ? C.value.html : i,
    s,
    C.value.rememberedState ? { ...C.value.rememberedState } : {},
    J.value,
    jt.value,
    e.data.splade.persistentLayout
  );
  t ? Oi(c) : mo(c);
}
function yo() {
  te.value--, Gt(wo(te.value));
}
const $i = b({}), Ei = (e) => $i.value[e], bo = (e) => Object.keys(Ei.value[e]).length > 0, Ti = b({}), wo = (e) => Ti.value[e], xi = b({}), So = (e) => xi.value[e], rt = b([]);
function Oo(e) {
  rt.value.push(e);
}
const $o = P(() => fo(rt.value));
function Eo(e) {
  rt.value[e].dismissed = !0, rt.value[e].html = null;
}
const Hr = b(null);
function To(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, h) => {
    o = c, l = h;
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
const _i = b({});
function Ur(e) {
  Vr.value = e.persistentLayout, _i.value = e.shared ? e.shared : {}, xi.value[te.value] = e.flash ? e.flash : {}, Ti.value[te.value] = e.head ? e.head : {}, lo(e.toasts ? e.toasts : [], (t) => {
    rt.value.push(t);
  }), $i.value[te.value] = e.errors ? e.errors : {};
}
const Ii = b(() => {
}), Ai = b(() => {
}), Pi = b(() => {
}), qi = b(() => {
});
function Gt(e) {
  Ii.value(e);
}
function Wr(e, t) {
  Ai.value(e, t);
}
function Ci(e, t) {
  zt.value[te.value] = !0, Pi.value(e, t);
}
function _o(e) {
  return zt.value[e];
}
function Io(e) {
  qi.value(e);
}
const Fi = b({});
function Li(e, t, r) {
  Fi.value[e] = t, r && Ao(e, t);
}
function Ao(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Po(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Fi.value[e];
}
function ze(e, t, r, n, i) {
  if (ge || Li("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  vt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = ie({
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
    go(a, i), vt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (vt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Ur(o), a.response.status != 422 && Io(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function ki(e, t) {
  return typeof t > "u" && (t = {}), ze(e, "GET", {}, t, !0);
}
function qo(e, t) {
  return typeof t > "u" && (t = {}), ze(e, "GET", {}, t, !1);
}
function Co(e) {
  return ze(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const zr = b({});
function Fo(e) {
  const t = zr.value[e];
  return t ? (te.value++, Ci(t.html, t.type), !0) : !1;
}
function Lo(e, t, r) {
  zr.value[e] = { html: t, type: r };
}
function ko(e) {
  return ze(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Do(e, t) {
  return ze(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Bo(e, t) {
  return ze(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function Ro() {
  return ki(C.value.url);
}
function jo(e, t) {
  tt[J.value].on(e, t);
}
function Mo(e, t) {
  tt[J.value].off(e, t);
}
function vt(e, t) {
  typeof t > "u" && (t = {}), tt[J.value].emit(e, t), ge || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: po,
  replace: ki,
  visit: qo,
  modal: Co,
  slideover: ko,
  refresh: Ro,
  request: ze,
  lazy: Do,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: vo,
  htmlForDynamicComponent(e) {
    return C.value.dynamics[e];
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
  hasValidationErrors: bo,
  validationErrors: Ei,
  sharedData: _i,
  flashData: So,
  toasts: rt,
  toastsReversed: $o,
  confirmModal: Hr,
  confirm: To,
  clearConfirmModal: xo,
  pushToast: Oo,
  dismissToast: Eo,
  restore: Po,
  remember: Li,
  popStack: yo,
  currentStack: te,
  stackType: _o,
  pageVisitId: P(() => C.value.pageVisitId),
  dynamicVisitId: P(() => C.value.dynamicVisitId),
  isSsr: ge,
  openPreloadedModal: Fo,
  registerPreloadedModal: Lo,
  on: jo,
  off: Mo,
  emit: vt
};
var No = "[object String]";
function Z(e) {
  return typeof e == "string" || !L(e) && Pe(e) && Ce(e) == No;
}
const se = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = b(null);
    function n() {
      r.value = k({
        template: t.html
      });
    }
    return ot(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (F(), H(N(r), { key: 0 })) : Lr("", !0);
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
    const r = e, n = b(null);
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
    return R(() => i()), (o, l) => (F(), ve("div", {
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
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Z(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    ae("stack", 0);
    const r = b(), n = b([]), i = b(null), s = b(null), a = b(!0), o = V("$spladeOptions") || {}, l = P(() => v.currentStack.value < 1 ? [] : {
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
    function h(d) {
      const p = document.createElement("meta");
      ee(d, (f, g) => {
        p[g] = f;
      }), document.getElementsByTagName("head")[0].appendChild(p);
    }
    function m(d) {
      var f;
      let p = "meta";
      ee(d, (g, S) => {
        p = `${p}[${S}="${g}"]`;
      });
      try {
        (f = document.querySelector(p)) == null || f.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var p;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((f) => {
          m(f);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((f) => {
          h(f);
        }), (p = document.querySelector('link[rel="canonical"]')) == null || p.remove(), d.canonical) {
          const f = document.createElement("link");
          f.rel = "canonical", f.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(f);
        }
      }
    }), v.setOnHtml((d, p) => {
      n.value = [], r.value = d, Ie(() => {
        v.isSsr || window.scrollTo(0, p), o.transform_anchors && [...document.querySelectorAll("a")].forEach((f) => {
          f.href == "" || f.href.charAt(0) == "#" || f.__vnode.dynamicProps === null && (f.hasAttribute("download") || (f.onclick = function(g) {
            g.preventDefault(), v.visit(f.href);
          }));
        });
      });
    }), v.setOnModal(function(d, p) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: d, type: p }, Ie(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), R(() => {
      if (v.isSsr)
        return;
      const d = Z(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((p) => {
        delete d.dataset[p];
      });
    }), (d, p) => (F(), ve("div", null, [
      N(v).isSsr ? (F(), H(se, {
        key: `visit.${N(v).pageVisitId.value}`,
        style: Rt(N(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (F(), H(li, {
        key: 0,
        max: N(o).max_keep_alive
      }, [
        (F(), H(se, {
          key: `visit.${N(v).pageVisitId.value}`,
          style: Rt(N(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      Is(se, { html: e.components }, null, 8, ["html"]),
      (F(!0), ve(kr, null, As(N(v).currentStack.value, (f) => (F(), H(se, {
        key: `modal.${f}`,
        type: n.value[f].type,
        html: n.value[f].html,
        stack: f,
        "on-top-of-stack": N(v).currentStack.value === f,
        animate: a.value,
        onClose: (g) => c(f)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (F(), H(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Lr("", !0)
    ]));
  }
};
function _p(e) {
  return () => k(Ho, e);
}
var Uo = Object.prototype, Wo = Uo.hasOwnProperty;
function zo(e, t) {
  return e != null && Wo.call(e, t);
}
var Go = "[object Symbol]";
function Xt(e) {
  return typeof e == "symbol" || Pe(e) && Ce(e) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function Gr(e, t) {
  if (L(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Xt(e) ? !0 : Ko.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Yo = de["__core-js_shared__"];
const dr = Yo;
var An = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!An && An in e;
}
var Jo = Function.prototype, Zo = Jo.toString;
function Ge(e) {
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
  if (!U(e) || Qo(e))
    return !1;
  var t = yi(e) ? al : tl;
  return t.test(Ge(e));
}
function ll(e, t) {
  return e == null ? void 0 : e[t];
}
function Xe(e, t) {
  var r = ll(e, t);
  return ol(r) ? r : void 0;
}
var ul = Xe(Object, "create");
const wt = ul;
function cl() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
function dl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  if (wt) {
    var r = t[e];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e) ? t[e] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return wt ? t[e] !== void 0 : gl.call(t, e);
}
var bl = "__lodash_hash_undefined__";
function wl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wt && t === void 0 ? bl : t, this;
}
function He(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
He.prototype.clear = cl;
He.prototype.delete = dl;
He.prototype.get = ml;
He.prototype.has = yl;
He.prototype.set = wl;
function Sl() {
  this.__data__ = [], this.size = 0;
}
function Xr(e, t) {
  return e === t || e !== e && t !== t;
}
function Kt(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
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
function be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = Sl;
be.prototype.delete = El;
be.prototype.get = Tl;
be.prototype.has = xl;
be.prototype.set = _l;
var Il = Xe(de, "Map");
const St = Il;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new He(),
    map: new (St || be)(),
    string: new He()
  };
}
function Pl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Yt(e, t) {
  var r = e.__data__;
  return Pl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ql(e) {
  var t = Yt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cl(e) {
  return Yt(this, e).get(e);
}
function Fl(e) {
  return Yt(this, e).has(e);
}
function Ll(e, t) {
  var r = Yt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = Al;
we.prototype.delete = ql;
we.prototype.get = Cl;
we.prototype.has = Fl;
we.prototype.set = Ll;
var kl = "Expected a function";
function Kr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Kr.Cache || we)(), r;
}
Kr.Cache = we;
var Dl = 500;
function Bl(e) {
  var t = Kr(e, function(n) {
    return r.size === Dl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Rl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jl = /\\(\\)?/g, Ml = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Rl, function(r, n, i, s) {
    t.push(i ? s.replace(jl, "$1") : n || r);
  }), t;
});
const Nl = Ml;
function Di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Vl = 1 / 0, Pn = Ae ? Ae.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Qt(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return Di(e, Qt) + "";
  if (Xt(e))
    return qn ? qn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Yr(e) {
  return e == null ? "" : Qt(e);
}
function Qr(e, t) {
  return L(e) ? e : Gr(e, t) ? [e] : Nl(Yr(e));
}
var Hl = 1 / 0;
function $t(e) {
  if (typeof e == "string" || Xt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Hl ? "-0" : t;
}
function Bi(e, t, r) {
  t = Qr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = $t(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && Rr(i) && Br(a, i) && (L(e) || hi(e)));
}
function G(e, t) {
  return e != null && Bi(e, t, zo);
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
function X(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, X), n;
}
var Mt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Mt || {}), _e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_e || {});
function z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = ji(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return fr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return X(l, { [0]() {
      return null;
    }, [1]() {
      return fr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return fr(o);
}
function fr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Mi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let h = !1, m = [];
    for (let [d, p] of Object.entries(n))
      typeof p == "boolean" && (h = !0), p === !0 && m.push(d);
    h && (c["data-headlessui-state"] = m.join(" "));
  }
  if (o === "template") {
    if (u = Ri(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [h, ...m] = u != null ? u : [];
      if (!Wl(h) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((f) => f.trim()).filter((f, g, S) => S.indexOf(f) === g).sort((f, g) => f.localeCompare(g)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let d = ji((a = h.props) != null ? a : {}, l), p = Ps(h, d);
      for (let f in d)
        f.startsWith("on") && (p.props || (p.props = {}), p.props[f] = d[f]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return k(o, Object.assign({}, l, c), { default: () => u });
}
function Ri(e) {
  return e.flatMap((t) => t.type === kr ? Ri(t.children) : [t]);
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
function Mi(e, t = []) {
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
function Ke() {
  return Gl();
}
var Ni = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ni || {});
function le(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Vi = Symbol("Context");
var Ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ue || {});
function Xl() {
  return Jr() !== null;
}
function Jr() {
  return V(Vi, null);
}
function Kl(e) {
  ae(Vi, e);
}
class Yl {
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
let Et = new Yl();
function lt(e) {
  if (Et.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = le(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let br = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(xe || {}), Hi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Hi || {}), Ql = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ql || {});
function Jl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ui = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ui || {});
function Zl(e, t = 0) {
  var r;
  return e === ((r = lt(e)) == null ? void 0 : r.body) ? !1 : X(t, { [0]() {
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
function et(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let eu = ["textarea", "input"].join(",");
function tu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, eu)) != null ? r : !1;
}
function ru(e, t = (r) => r) {
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
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? ru(e) : e : Jl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((p) => !i.includes(p))), n = n != null ? n : a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, h = 0, m = o.length, d;
  do {
    if (h >= m || h + m <= 0)
      return 0;
    let p = u + h;
    if (t & 16)
      p = (p + m) % m;
    else {
      if (p < 0)
        return 3;
      if (p >= m)
        return 1;
    }
    d = o[p], d == null || d.focus(c), h += l;
  } while (d !== a.activeElement);
  return t & 6 && tu(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function pr(e, t, r) {
  Et.isServer || oe((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function nu(e, t, r = P(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : le(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Zl(o, Ui.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = b(null);
  pr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), pr("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, !0), pr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let wr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function iu(e, t, r) {
  Et.isServer || oe((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var gt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gt || {});
function su() {
  let e = b(0);
  return iu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wi(e, t, r, n) {
  Et.isServer || oe((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function au(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var zi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(zi || {});
let ht = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: b(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = b(null);
  n({ el: i, $el: i });
  let s = P(() => lt(i));
  ou({ ownerDocument: s }, P(() => Boolean(e.features & 16)));
  let a = lu({ ownerDocument: s, container: i, initialFocus: P(() => e.initialFocus) }, P(() => Boolean(e.features & 2)));
  uu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, P(() => Boolean(e.features & 8)));
  let o = su();
  function l(m) {
    let d = le(i);
    !d || ((p) => p())(() => {
      X(o.value, { [gt.Forwards]: () => {
        kt(d, xe.First, { skipElements: [m.relatedTarget] });
      }, [gt.Backwards]: () => {
        kt(d, xe.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = b(!1);
  function c(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function h(m) {
    var d;
    let p = new Set((d = e.containers) == null ? void 0 : d.value);
    p.add(i);
    let f = m.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (Gi(p, f) || (u.value ? kt(le(i), X(o.value, { [gt.Forwards]: () => xe.Next, [gt.Backwards]: () => xe.Previous }) | xe.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && et(m.target)));
  }
  return () => {
    let m = {}, d = { ref: i, onKeydown: c, onFocusout: h }, { features: p, initialFocus: f, containers: g, ...S } = e;
    return k(kr, [Boolean(p & 4) && k(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Nt.Focusable }), z({ ourProps: d, theirProps: { ...t, ...S }, slot: m, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && k(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Nt.Focusable })]);
  };
} }), { features: zi });
function ou({ ownerDocument: e }, t) {
  let r = b(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    !r.value || (et(r.value), r.value = null);
  }
  R(() => {
    ot(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: !0 });
  }), ye(i);
}
function lu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = b(null), s = b(!1);
  return R(() => s.value = !0), ye(() => s.value = !1), R(() => {
    ot([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = le(t);
      !l || au(() => {
        var u, c;
        if (!s.value)
          return;
        let h = le(r), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (h) {
          if (h === m) {
            i.value = m;
            return;
          }
        } else if (l.contains(m)) {
          i.value = m;
          return;
        }
        h ? et(h) : kt(l, xe.First | xe.NoScroll) === Hi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function uu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Wi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Gi(o, u) ? (n.value = u, et(u)) : (a.preventDefault(), a.stopPropagation(), et(l)) : et(n.value);
  }, !0);
}
function Gi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Cn = "body > *", Je = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
function Fn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Ln(e) {
  let t = Te.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function cu(e, t = b(!0)) {
  oe((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = lt(n);
    if (i) {
      Je.add(n);
      for (let s of Te.keys())
        s.contains(n) && (Ln(s), Te.delete(s));
      i.querySelectorAll(Cn).forEach((s) => {
        if (s instanceof HTMLElement) {
          for (let a of Je)
            if (s.contains(a))
              return;
          Je.size === 1 && (Te.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Fn(s));
        }
      }), r(() => {
        if (Je.delete(n), Je.size > 0)
          i.querySelectorAll(Cn).forEach((s) => {
            if (s instanceof HTMLElement && !Te.has(s)) {
              for (let a of Je)
                if (s.contains(a))
                  return;
              Te.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Fn(s);
            }
          });
        else
          for (let s of Te.keys())
            Ln(s), Te.delete(s);
      });
    }
  });
}
let Xi = Symbol("ForcePortalRootContext");
function du() {
  return V(Xi, !1);
}
let Sr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return ae(Xi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function fu(e) {
  let t = lt(e);
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
let Ki = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = b(null), i = P(() => lt(n)), s = du(), a = V(Yi, null), o = b(s === !0 || a == null ? fu(n.value) : a.resolveTarget());
  return oe(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), ye(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return k(ui, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Yi = Symbol("PortalGroupContext"), pu = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = qs({ resolveTarget() {
    return e.target;
  } });
  return ae(Yi, n), () => {
    let { target: i, ...s } = e;
    return z({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Qi = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function hu() {
  return V(Qi, () => {
  });
}
function mu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = hu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  R(() => {
    ot(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), ye(() => {
    t.value && s(1, e, r);
  }), ae(Qi, s);
}
let Ji = Symbol("DescriptionContext");
function vu() {
  let e = V(Ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function gu({ slot: e = b({}), name: t = "Description", props: r = {} } = {}) {
  let n = b([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return ae(Ji, { register: i, slot: e, name: t, props: r }), P(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Ip = W({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Ke()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = vu();
  return R(() => ye(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = b({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [h, m]) => Object.assign(c, { [h]: N(m) }), {}), id: o };
    return z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function yu(e) {
  let t = Cs(e.getSnapshot());
  return ye(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Zr() {
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
  }, style(n, i, s) {
    let a = n.style.getPropertyValue(i);
    return Object.assign(n.style, { [i]: s }), this.add(() => {
      Object.assign(n.style, { [i]: a });
    });
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function bu(e, t) {
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
function wu() {
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
function Su() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ou() {
  if (!Su())
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
function $u() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Eu(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let Me = bu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Zr(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Eu(r) }, i = [Ou(), wu(), $u()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Me.subscribe(() => {
  let e = Me.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && Me.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && Me.dispatch("TEARDOWN", r);
  }
});
function Tu(e, t, r) {
  let n = yu(Me), i = P(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return ot([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    Me.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (Me.dispatch("POP", o != null ? o : s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var xu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xu || {});
let $r = Symbol("DialogContext");
function Tt(e) {
  let t = V($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Tt), r;
  }
  return t;
}
let qt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", en = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: qt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Ke()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = b(!1);
  R(() => {
    a.value = !0;
  });
  let o = b(0), l = Jr(), u = P(() => e.open === qt && l !== null ? X(l.value, { [Ue.Open]: !0, [Ue.Closed]: !1 }) : e.open), c = b(/* @__PURE__ */ new Set()), h = b(null), m = b(null), d = P(() => lt(h));
  if (i({ el: h, $el: h }), !(e.open !== qt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === qt ? void 0 : e.open}`);
  let p = P(() => a.value && u.value ? 0 : 1), f = P(() => p.value === 0), g = P(() => o.value > 1);
  V($r, null);
  let S = P(() => g.value ? "parent" : "leaf");
  cu(h, P(() => g.value ? f.value : !1)), mu({ type: "Dialog", enabled: P(() => p.value === 0), element: h, onUpdate: (y, O, $) => {
    if (O === "Dialog")
      return X(y, { [Or.Add]() {
        c.value.add($), o.value += 1;
      }, [Or.Remove]() {
        c.value.delete($), o.value -= 1;
      } });
  } });
  let I = gu({ name: "DialogDescription", slot: P(() => ({ open: u.value })) }), A = b(null), w = { titleId: A, panelRef: b(null), dialogState: p, setTitleId(y) {
    A.value !== y && (A.value = y);
  }, close() {
    t("close", !1);
  } };
  ae($r, w);
  function E() {
    var y, O, $;
    return [...Array.from((O = (y = d.value) == null ? void 0 : y.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(T === document.body || T === document.head || !(T instanceof HTMLElement) || T.contains(le(m)) || w.panelRef.value && T.contains(w.panelRef.value))), ($ = w.panelRef.value) != null ? $ : h.value];
  }
  return nu(() => E(), (y, O) => {
    w.close(), Ie(() => O == null ? void 0 : O.focus());
  }, P(() => p.value === 0 && !g.value)), Wi((s = d.value) == null ? void 0 : s.defaultView, "keydown", (y) => {
    y.defaultPrevented || y.key === Ni.Escape && p.value === 0 && (g.value || (y.preventDefault(), y.stopPropagation(), w.close()));
  }), Tu(d, f, (y) => {
    var O;
    return { containers: [...(O = y.containers) != null ? O : [], E] };
  }), oe((y) => {
    if (p.value !== 0)
      return;
    let O = le(h);
    if (!O)
      return;
    let $ = new IntersectionObserver((T) => {
      for (let x of T)
        x.boundingClientRect.x === 0 && x.boundingClientRect.y === 0 && x.boundingClientRect.width === 0 && x.boundingClientRect.height === 0 && w.close();
    });
    $.observe(O), y(() => $.disconnect());
  }), () => {
    let { id: y, open: O, initialFocus: $, ...T } = e, x = { ...r, ref: h, id: y, role: "dialog", "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": A.value, "aria-describedby": I.value }, _ = { open: p.value === 0 };
    return k(Sr, { force: !0 }, () => [k(Ki, () => k(pu, { target: h.value }, () => k(Sr, { force: !1 }, () => k(ht, { initialFocus: $, containers: c, features: f.value ? X(S.value, { parent: ht.features.RestoreFocus, leaf: ht.features.All & ~ht.features.FocusLock }) : ht.features.None }, () => z({ ourProps: x, theirProps: T, slot: _, attrs: r, slots: n, visible: p.value === 0, features: Mt.RenderStrategy | Mt.Static, name: "Dialog" }))))), k(wr, { features: Nt.Hidden, ref: m })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Ke()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Tt("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return z({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Ke()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Tt("DialogBackdrop"), s = b(null);
  return n({ el: s, $el: s }), R(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return k(Sr, { force: !0 }, () => k(Ki, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let tn = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Ke()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = Tt("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return z({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Ke()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = Tt("DialogTitle");
  return R(() => {
    n.setTitleId(e.id), ye(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return z({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function _u(e) {
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
  let r = Zr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function kn(e, t, r, n, i, s) {
  let a = Zr(), o = s !== void 0 ? _u(s) : () => {
  };
  return Ct(e, ...i), hr(e, ...t, ...r), a.nextFrame(() => {
    Ct(e, ...r), hr(e, ...n), a.add(Iu(e, (l) => (Ct(e, ...n, ...t), hr(e, ...i), o(l))));
  }), a.add(() => Ct(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rn = Symbol("TransitionContext");
var Au = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Au || {});
function Pu() {
  return V(rn, null) !== null;
}
function qu() {
  let e = V(rn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Cu() {
  let e = V(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nn = Symbol("NestingContext");
function Jt(e) {
  return "children" in e ? Jt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zi(e) {
  let t = b([]), r = b(!1);
  R(() => r.value = !0), ye(() => r.value = !1);
  function n(s, a = _e.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (X(a, { [_e.Unmount]() {
      t.value.splice(o, 1);
    }, [_e.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Jt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, _e.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let es = Mt.RenderStrategy, ut = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Pu() && Xl())
    return () => k(ct, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let s = b(null), a = b("visible"), o = P(() => e.unmount ? _e.Unmount : _e.Hidden);
  i({ el: s, $el: s });
  let { show: l, appear: u } = qu(), { register: c, unregister: h } = Cu(), m = { value: !0 }, d = Ke(), p = { value: !1 }, f = Zi(() => {
    p.value || (a.value = "hidden", h(d), t("afterLeave"));
  });
  R(() => {
    let $ = c(d);
    ye($);
  }), oe(() => {
    if (o.value === _e.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      X(a.value, { hidden: () => h(d), visible: () => c(d) });
    }
  });
  let g = Be(e.enter), S = Be(e.enterFrom), I = Be(e.enterTo), A = Be(e.entered), w = Be(e.leave), E = Be(e.leaveFrom), y = Be(e.leaveTo);
  R(() => {
    oe(() => {
      if (a.value === "visible") {
        let $ = le(s);
        if ($ instanceof Comment && $.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function O($) {
    let T = m.value && !u.value, x = le(s);
    !x || !(x instanceof HTMLElement) || T || (p.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), $(l.value ? kn(x, g, S, I, A, (_) => {
      p.value = !1, _ === Er.Finished && t("afterEnter");
    }) : kn(x, w, E, y, A, (_) => {
      p.value = !1, _ === Er.Finished && (Jt(f) || (a.value = "hidden", h(d), t("afterLeave")));
    })));
  }
  return R(() => {
    ot([l], ($, T, x) => {
      O(x), m.value = !1;
    }, { immediate: !0 });
  }), ae(nn, f), Kl(P(() => X(a.value, { visible: Ue.Open, hidden: Ue.Closed }))), () => {
    let { appear: $, show: T, enter: x, enterFrom: _, enterTo: D, entered: B, leave: Se, leaveFrom: Oe, leaveTo: j, ...M } = e, Ye = { ref: s }, fe = { ...M, ...u && l && Et.isServer ? { class: Fs([M.class, ...g, ...S]) } : {} };
    return z({ theirProps: fe, ourProps: Ye, slot: {}, slots: n, attrs: r, features: es, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), Fu = ut, ct = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Jr(), s = P(() => e.show === null && i !== null ? X(i.value, { [Ue.Open]: !0, [Ue.Closed]: !1 }) : e.show);
  oe(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = b(s.value ? "visible" : "hidden"), o = Zi(() => {
    a.value = "hidden";
  }), l = b(!0), u = { show: s, appear: P(() => e.appear || !l.value) };
  return R(() => {
    oe(() => {
      l.value = !1, s.value ? a.value = "visible" : Jt(o) || (a.value = "hidden");
    });
  }), ae(nn, o), ae(rn, u), () => {
    let c = Mi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return z({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [k(Fu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...h, ...c }, n.default)] }, attrs: {}, features: es, visible: a.value === "visible", name: "Transition" });
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
      this.passwordError = "", ie.post(this.confirmPasswordRoute, { password: e }, { headers: {
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
          if ((await ie.get(this.confirmedPasswordStatusRoute)).status === 200) {
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
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
};
function ts(e, t) {
  t = Qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$t(t[r++])];
  return r && r == n ? e : void 0;
}
function Ne(e, t, r) {
  var n = e == null ? void 0 : ts(e, t);
  return n === void 0 ? r : n;
}
var ku = function() {
  try {
    var e = Xe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Dn = ku;
function rs(e, t, r) {
  t == "__proto__" && Dn ? Dn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Du = Object.prototype, Bu = Du.hasOwnProperty;
function Ru(e, t, r) {
  var n = e[t];
  (!(Bu.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && rs(e, t, r);
}
function ju(e, t, r, n) {
  if (!U(e))
    return e;
  t = Qr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = $t(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = U(c) ? c : Br(t[i + 1]) ? [] : {});
    }
    Ru(o, l, u), o = o[l];
  }
  return e;
}
function sn(e, t, r) {
  return e == null ? e : ju(e, t, r);
}
const Mu = {
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
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return Ne(e.values, r);
        },
        set(t, r, n) {
          sn(e.values, r, n);
        }
      })
    ) : null;
  }
}, Nu = {
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
      stores: {}
    };
  },
  beforeMount() {
    this.stores = Object.assign({}, { ...this.parsed, ...this.raw }), this.remember.forEach((e) => {
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
          return Ne(e.stores, r);
        },
        set(t, r, n) {
          sn(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Vu = function() {
  return de.Date.now();
};
const mr = Vu;
var Hu = /\s/;
function Uu(e) {
  for (var t = e.length; t-- && Hu.test(e.charAt(t)); )
    ;
  return t;
}
var Wu = /^\s+/;
function zu(e) {
  return e && e.slice(0, Uu(e) + 1).replace(Wu, "");
}
var Bn = 0 / 0, Gu = /^[-+]0x[0-9a-f]+$/i, Xu = /^0b[01]+$/i, Ku = /^0o[0-7]+$/i, Yu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Xt(e))
    return Bn;
  if (U(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = U(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zu(e);
  var r = Xu.test(e);
  return r || Ku.test(e) ? Yu(e.slice(2), r ? 2 : 8) : Gu.test(e) ? Bn : +e;
}
var Qu = "Expected a function", Ju = Math.max, Zu = Math.min;
function Zt(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, h = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Qu);
  t = Tr(t) || 0, U(r) && (c = !!r.leading, h = "maxWait" in r, s = h ? Ju(Tr(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
  function d(y) {
    var O = n, $ = i;
    return n = i = void 0, u = y, a = e.apply($, O), a;
  }
  function p(y) {
    return u = y, o = setTimeout(S, t), c ? d(y) : a;
  }
  function f(y) {
    var O = y - l, $ = y - u, T = t - O;
    return h ? Zu(T, s - $) : T;
  }
  function g(y) {
    var O = y - l, $ = y - u;
    return l === void 0 || O >= t || O < 0 || h && $ >= s;
  }
  function S() {
    var y = mr();
    if (g(y))
      return I(y);
    o = setTimeout(S, f(y));
  }
  function I(y) {
    return o = void 0, m && n ? d(y) : (n = i = void 0, a);
  }
  function A() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function w() {
    return o === void 0 ? a : I(mr());
  }
  function E() {
    var y = mr(), O = g(y);
    if (n = arguments, i = this, l = y, O) {
      if (o === void 0)
        return p(l);
      if (h)
        return clearTimeout(o), o = setTimeout(S, t), d(l);
    }
    return o === void 0 && (o = setTimeout(S, t)), a;
  }
  return E.cancel = A, E.flush = w, E;
}
const ec = {
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
    this.debounceFunction = Zt(() => {
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
      Object.keys(this.request).length > 0 && (t.data = this.request), ie(t).then((r) => {
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
}, tc = {
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
    const t = e, r = b(null), n = b(null), i = b(null);
    return R(() => {
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Ls(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (F(), ve("div", {
      ref_key: "root",
      ref: n
    }, [
      Y(s.$slots, "default")
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
function We(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function K(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function an(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ve = Math.max, Vt = Math.min, nt = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function is() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function it(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && K(e) && (i = e.offsetWidth > 0 && nt(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && nt(n.height) / e.offsetHeight || 1);
  var a = We(e) ? Q(e) : window, o = a.visualViewport, l = !is() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, h = n.width / i, m = n.height / s;
  return {
    width: h,
    height: m,
    top: c,
    right: u + h,
    bottom: c + m,
    left: u,
    x: u,
    y: c
  };
}
function on(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function rc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nc(e) {
  return e === Q(e) || !K(e) ? on(e) : rc(e);
}
function ue(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fe(e) {
  return ((We(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ln(e) {
  return it(Fe(e)).left + on(e).scrollLeft;
}
function ne(e) {
  return Q(e).getComputedStyle(e);
}
function un(e) {
  var t = ne(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function ic(e) {
  var t = e.getBoundingClientRect(), r = nt(t.width) / e.offsetWidth || 1, n = nt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function sc(e, t, r) {
  r === void 0 && (r = !1);
  var n = K(t), i = K(t) && ic(t), s = Fe(t), a = it(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ue(t) !== "body" || un(s)) && (o = nc(t)), K(t) ? (l = it(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ln(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ss(e) {
  var t = it(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function er(e) {
  return ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (an(e) ? e.host : null) || Fe(e);
}
function as(e) {
  return ["html", "body", "#document"].indexOf(ue(e)) >= 0 ? e.ownerDocument.body : K(e) && un(e) ? e : as(er(e));
}
function bt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = as(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Q(n), a = i ? [s].concat(s.visualViewport || [], un(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(bt(er(a)));
}
function ac(e) {
  return ["table", "td", "th"].indexOf(ue(e)) >= 0;
}
function Rn(e) {
  return !K(e) || ne(e).position === "fixed" ? null : e.offsetParent;
}
function oc(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && K(e)) {
    var n = ne(e);
    if (n.position === "fixed")
      return null;
  }
  var i = er(e);
  for (an(i) && (i = i.host); K(i) && ["html", "body"].indexOf(ue(i)) < 0; ) {
    var s = ne(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tr(e) {
  for (var t = Q(e), r = Rn(e); r && ac(r) && ne(r).position === "static"; )
    r = Rn(r);
  return r && (ue(r) === "html" || ue(r) === "body" && ne(r).position === "static") ? t : r || oc(e) || t;
}
var re = "top", ce = "bottom", qe = "right", pe = "left", rr = "auto", nr = [re, ce, qe, pe], st = "start", Ot = "end", lc = "clippingParents", os = "viewport", mt = "popper", uc = "reference", jn = /* @__PURE__ */ nr.reduce(function(e, t) {
  return e.concat([t + "-" + st, t + "-" + Ot]);
}, []), cc = /* @__PURE__ */ [].concat(nr, [rr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + st, t + "-" + Ot]);
}, []), dc = "beforeRead", fc = "read", pc = "afterRead", hc = "beforeMain", mc = "main", vc = "afterMain", gc = "beforeWrite", yc = "write", bc = "afterWrite", _r = [dc, fc, pc, hc, mc, vc, gc, yc, bc];
function wc(e) {
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
function Sc(e) {
  var t = wc(e);
  return _r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Oc(e) {
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
var Re = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $c = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Mn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ec(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Mn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Ee(Re, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Ee(Re, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          _r.indexOf(t.phase) < 0 && console.error(Ee(Re, t.name, '"phase"', "either " + _r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Ee(Re, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Ee(Re, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Ee(Re, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Ee(Re, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Mn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Ee($c, String(t.name), n, n));
      });
    });
  });
}
function Tc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function he(e) {
  return e.split("-")[0];
}
function xc(e) {
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
function _c(e, t) {
  var r = Q(e), n = Fe(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = is();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + ln(e),
    y: l
  };
}
function Ic(e) {
  var t, r = Fe(e), n = on(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ve(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ve(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + ln(e), l = -n.scrollTop;
  return ne(i || r).direction === "rtl" && (o += Ve(r.clientWidth, i ? i.clientWidth : 0) - s), {
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
function Ir(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pc(e, t) {
  var r = it(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Nn(e, t, r) {
  return t === os ? Ir(_c(e, r)) : We(t) ? Pc(t, r) : Ir(Ic(Fe(e)));
}
function qc(e) {
  var t = bt(er(e)), r = ["absolute", "fixed"].indexOf(ne(e).position) >= 0, n = r && K(e) ? tr(e) : e;
  return We(n) ? t.filter(function(i) {
    return We(i) && Ac(i, n) && ue(i) !== "body";
  }) : [];
}
function Cc(e, t, r, n) {
  var i = t === "clippingParents" ? qc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Nn(e, u, n);
    return l.top = Ve(c.top, l.top), l.right = Vt(c.right, l.right), l.bottom = Vt(c.bottom, l.bottom), l.left = Ve(c.left, l.left), l;
  }, Nn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function at(e) {
  return e.split("-")[1];
}
function ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function us(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? he(n) : null, s = n ? at(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case re:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ce:
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
    case pe:
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
  var u = i ? ls(i) : null;
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
function cs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Fc(e) {
  return Object.assign({}, cs(), e);
}
function Lc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function cn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? lc : o, u = r.rootBoundary, c = u === void 0 ? os : u, h = r.elementContext, m = h === void 0 ? mt : h, d = r.altBoundary, p = d === void 0 ? !1 : d, f = r.padding, g = f === void 0 ? 0 : f, S = Fc(typeof g != "number" ? g : Lc(g, nr)), I = m === mt ? uc : mt, A = e.rects.popper, w = e.elements[p ? I : m], E = Cc(We(w) ? w : w.contextElement || Fe(e.elements.popper), l, c, a), y = it(e.elements.reference), O = us({
    reference: y,
    element: A,
    strategy: "absolute",
    placement: i
  }), $ = Ir(Object.assign({}, A, O)), T = m === mt ? $ : y, x = {
    top: E.top - T.top + S.top,
    bottom: T.bottom - E.bottom + S.bottom,
    left: E.left - T.left + S.left,
    right: T.right - E.right + S.right
  }, _ = e.modifiersData.offset;
  if (m === mt && _) {
    var D = _[i];
    Object.keys(x).forEach(function(B) {
      var Se = [qe, ce].indexOf(B) >= 0 ? 1 : -1, Oe = [re, ce].indexOf(B) >= 0 ? "y" : "x";
      x[B] += D[Oe] * Se;
    });
  }
  return x;
}
var Vn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", kc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Un() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Hn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], m = !1, d = {
      state: c,
      setOptions: function(S) {
        var I = typeof S == "function" ? S(c.options) : S;
        f(), c.options = Object.assign({}, s, c.options, I), c.scrollParents = {
          reference: We(o) ? bt(o) : o.contextElement ? bt(o.contextElement) : [],
          popper: bt(l)
        };
        var A = Sc(xc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var w = Tc([].concat(A, c.options.modifiers), function(_) {
            var D = _.name;
            return D;
          });
          if (Ec(w), he(c.options.placement) === rr) {
            var E = c.orderedModifiers.find(function(_) {
              var D = _.name;
              return D === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ne(l), O = y.marginTop, $ = y.marginRight, T = y.marginBottom, x = y.marginLeft;
          [O, $, T, x].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), d.update();
      },
      forceUpdate: function() {
        if (!m) {
          var S = c.elements, I = S.reference, A = S.popper;
          if (!Un(I, A)) {
            process.env.NODE_ENV !== "production" && console.error(Vn);
            return;
          }
          c.rects = {
            reference: sc(I, tr(A), c.options.strategy === "fixed"),
            popper: ss(A)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var w = 0, E = 0; E < c.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (w += 1, w > 100)) {
              console.error(kc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, E = -1;
              continue;
            }
            var y = c.orderedModifiers[E], O = y.fn, $ = y.options, T = $ === void 0 ? {} : $, x = y.name;
            typeof O == "function" && (c = O({
              state: c,
              options: T,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Oc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        f(), m = !0;
      }
    };
    if (!Un(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Vn), d;
    d.setOptions(u).then(function(g) {
      !m && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      c.orderedModifiers.forEach(function(g) {
        var S = g.name, I = g.options, A = I === void 0 ? {} : I, w = g.effect;
        if (typeof w == "function") {
          var E = w({
            state: c,
            name: S,
            instance: d,
            options: A
          }), y = function() {
          };
          h.push(E || y);
        }
      });
    }
    function f() {
      h.forEach(function(g) {
        return g();
      }), h = [];
    }
    return d;
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
const Rc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bc,
  data: {}
};
function jc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = us({
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
var Nc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: nt(t * i) / i || 0,
    y: nt(r * i) / i || 0
  };
}
function Wn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, h = e.isFixed, m = a.x, d = m === void 0 ? 0 : m, p = a.y, f = p === void 0 ? 0 : p, g = typeof c == "function" ? c({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  d = g.x, f = g.y;
  var S = a.hasOwnProperty("x"), I = a.hasOwnProperty("y"), A = pe, w = re, E = window;
  if (u) {
    var y = tr(r), O = "clientHeight", $ = "clientWidth";
    if (y === Q(r) && (y = Fe(r), ne(y).position !== "static" && o === "absolute" && (O = "scrollHeight", $ = "scrollWidth")), y = y, i === re || (i === pe || i === qe) && s === Ot) {
      w = ce;
      var T = h && y === E && E.visualViewport ? E.visualViewport.height : y[O];
      f -= T - n.height, f *= l ? 1 : -1;
    }
    if (i === pe || (i === re || i === ce) && s === Ot) {
      A = qe;
      var x = h && y === E && E.visualViewport ? E.visualViewport.width : y[$];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: o
  }, u && Nc), D = c === !0 ? Vc({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  if (d = D.x, f = D.y, l) {
    var B;
    return Object.assign({}, _, (B = {}, B[w] = I ? "0" : "", B[A] = S ? "0" : "", B.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", B));
  }
  return Object.assign({}, _, (t = {}, t[w] = I ? f + "px" : "", t[A] = S ? d + "px" : "", t.transform = "", t));
}
function Hc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ne(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(h) {
      return u.indexOf(h) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: he(t.placement),
    variation: at(t.placement),
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
    !K(s) || !ue(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
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
      !K(i) || !ue(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
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
var Xc = [Rc, Mc, Uc, Gc], Kc = /* @__PURE__ */ Dc({
  defaultModifiers: Xc
});
function Yc(e) {
  return e === "x" ? "y" : "x";
}
function Dt(e, t, r) {
  return Ve(e, Vt(t, r));
}
function Qc(e, t, r) {
  var n = Dt(e, t, r);
  return n > r ? r : n;
}
function Jc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, h = r.padding, m = r.tether, d = m === void 0 ? !0 : m, p = r.tetherOffset, f = p === void 0 ? 0 : p, g = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: c
  }), S = he(t.placement), I = at(t.placement), A = !I, w = ls(S), E = Yc(w), y = t.modifiersData.popperOffsets, O = t.rects.reference, $ = t.rects.popper, T = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, x = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (s) {
      var B, Se = w === "y" ? re : pe, Oe = w === "y" ? ce : qe, j = w === "y" ? "height" : "width", M = y[w], Ye = M + g[Se], fe = M - g[Oe], _t = d ? -$[j] / 2 : 0, sr = I === st ? O[j] : $[j], dt = I === st ? -$[j] : -O[j], It = t.elements.arrow, Qe = d && It ? ss(It) : {
        width: 0,
        height: 0
      }, $e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cs(), ft = $e[Se], At = $e[Oe], ke = Dt(0, O[j], Qe[j]), ar = A ? O[j] / 2 - _t - ke - ft - x.mainAxis : sr - ke - ft - x.mainAxis, Os = A ? -O[j] / 2 + _t + ke + At + x.mainAxis : dt + ke + At + x.mainAxis, or = t.elements.arrow && tr(t.elements.arrow), $s = or ? w === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, hn = (B = _ == null ? void 0 : _[w]) != null ? B : 0, Es = M + ar - hn - $s, Ts = M + Os - hn, mn = Dt(d ? Vt(Ye, Es) : Ye, M, d ? Ve(fe, Ts) : fe);
      y[w] = mn, D[w] = mn - M;
    }
    if (o) {
      var vn, xs = w === "x" ? re : pe, _s = w === "x" ? ce : qe, De = y[E], Pt = E === "y" ? "height" : "width", gn = De + g[xs], yn = De - g[_s], lr = [re, pe].indexOf(S) !== -1, bn = (vn = _ == null ? void 0 : _[E]) != null ? vn : 0, wn = lr ? gn : De - O[Pt] - $[Pt] - bn + x.altAxis, Sn = lr ? De + O[Pt] + $[Pt] - bn - x.altAxis : yn, On = d && lr ? Qc(wn, De, Sn) : Dt(d ? wn : gn, De, d ? Sn : yn);
      y[E] = On, D[E] = On - De;
    }
    t.modifiersData[n] = D;
  }
}
const Zc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jc,
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
function zn(e) {
  return e.replace(/start|end/g, function(t) {
    return td[t];
  });
}
function rd(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? cc : l, c = at(n), h = c ? o ? jn : jn.filter(function(p) {
    return at(p) === c;
  }) : nr, m = h.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  m.length === 0 && (m = h, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = m.reduce(function(p, f) {
    return p[f] = cn(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[he(f)], p;
  }, {});
  return Object.keys(d).sort(function(p, f) {
    return d[p] - d[f];
  });
}
function nd(e) {
  if (he(e) === rr)
    return [];
  var t = Bt(e);
  return [zn(e), t, zn(t)];
}
function id(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, h = r.rootBoundary, m = r.altBoundary, d = r.flipVariations, p = d === void 0 ? !0 : d, f = r.allowedAutoPlacements, g = t.options.placement, S = he(g), I = S === g, A = l || (I || !p ? [Bt(g)] : nd(g)), w = [g].concat(A).reduce(function(Qe, $e) {
      return Qe.concat(he($e) === rr ? rd(t, {
        placement: $e,
        boundary: c,
        rootBoundary: h,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: f
      }) : $e);
    }, []), E = t.rects.reference, y = t.rects.popper, O = /* @__PURE__ */ new Map(), $ = !0, T = w[0], x = 0; x < w.length; x++) {
      var _ = w[x], D = he(_), B = at(_) === st, Se = [re, ce].indexOf(D) >= 0, Oe = Se ? "width" : "height", j = cn(t, {
        placement: _,
        boundary: c,
        rootBoundary: h,
        altBoundary: m,
        padding: u
      }), M = Se ? B ? qe : pe : B ? ce : re;
      E[Oe] > y[Oe] && (M = Bt(M));
      var Ye = Bt(M), fe = [];
      if (s && fe.push(j[D] <= 0), o && fe.push(j[M] <= 0, j[Ye] <= 0), fe.every(function(Qe) {
        return Qe;
      })) {
        T = _, $ = !1;
        break;
      }
      O.set(_, fe);
    }
    if ($)
      for (var _t = p ? 3 : 1, sr = function($e) {
        var ft = w.find(function(At) {
          var ke = O.get(At);
          if (ke)
            return ke.slice(0, $e).every(function(ar) {
              return ar;
            });
        });
        if (ft)
          return T = ft, "break";
      }, dt = _t; dt > 0; dt--) {
        var It = sr(dt);
        if (It === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0);
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
}, Le = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ad = {
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
    this.teleport && await Ie();
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
  const a = Dr("OnClickOutside");
  return F(), H(a, {
    style: Rt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: ci(() => [
      gr("div", {
        ref: "button",
        style: Rt(s.buttonStyle)
      }, [
        Y(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      gr("div", od, [
        Y(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ud = /* @__PURE__ */ Le(ad, [["render", ld]]), cd = {
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
    const t = V("$splade") || {}, r = V("$spladeOptions") || {};
    return (n, i) => N(t).isSsr ? (F(), H(se, {
      key: e.keepAliveKey,
      html: N(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (F(), H(li, {
      key: 0,
      max: N(r).max_keep_alive
    }, [
      (F(), H(se, {
        key: e.keepAliveKey,
        html: N(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function ds(e) {
  return e && e.length ? e[0] : void 0;
}
const dd = {
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
        return G(e.values, t);
      },
      first(t) {
        return ds(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, fd = {
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
        ee(r, (u) => {
          !U(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
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
function pd() {
  this.__data__ = new be(), this.size = 0;
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
  if (r instanceof be) {
    var n = r.__data__;
    if (!St || n.length < gd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new we(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function me(e) {
  var t = this.__data__ = new be(e);
  this.size = t.size;
}
me.prototype.clear = pd;
me.prototype.delete = hd;
me.prototype.get = md;
me.prototype.has = vd;
me.prototype.set = yd;
var bd = "__lodash_hash_undefined__";
function wd(e) {
  return this.__data__.set(e, bd), this;
}
function Sd(e) {
  return this.__data__.has(e);
}
function Ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new we(); ++t < r; )
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
function fs(e, t, r, n, i, s) {
  var a = r & Ed, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var h = -1, m = !0, d = r & Td ? new Ht() : void 0;
  for (s.set(e, t), s.set(t, e); ++h < o; ) {
    var p = e[h], f = t[h];
    if (n)
      var g = a ? n(f, p, h, t, e, s) : n(p, f, h, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      m = !1;
      break;
    }
    if (d) {
      if (!Od(t, function(S, I) {
        if (!$d(d, I) && (p === S || i(p, S, r, n, s)))
          return d.push(I);
      })) {
        m = !1;
        break;
      }
    } else if (!(p === f || i(p, f, r, n, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
}
var xd = de.Uint8Array;
const Gn = xd;
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
var Ad = 1, Pd = 2, qd = "[object Boolean]", Cd = "[object Date]", Fd = "[object Error]", Ld = "[object Map]", kd = "[object Number]", Dd = "[object RegExp]", Bd = "[object Set]", Rd = "[object String]", jd = "[object Symbol]", Md = "[object ArrayBuffer]", Nd = "[object DataView]", Xn = Ae ? Ae.prototype : void 0, vr = Xn ? Xn.valueOf : void 0;
function Vd(e, t, r, n, i, s, a) {
  switch (r) {
    case Nd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Md:
      return !(e.byteLength != t.byteLength || !s(new Gn(e), new Gn(t)));
    case qd:
    case Cd:
    case kd:
      return Xr(+e, +t);
    case Fd:
      return e.name == t.name && e.message == t.message;
    case Dd:
    case Rd:
      return e == t + "";
    case Ld:
      var o = _d;
    case Bd:
      var l = n & Ad;
      if (o || (o = Id), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Pd, a.set(e, t);
      var c = fs(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case jd:
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
  return L(e) ? n : Hd(n, r(e));
}
function ps(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Wd() {
  return [];
}
var zd = Object.prototype, Gd = zd.propertyIsEnumerable, Kn = Object.getOwnPropertySymbols, Xd = Kn ? function(e) {
  return e == null ? [] : (e = Object(e), ps(Kn(e), function(t) {
    return Gd.call(e, t);
  }));
} : Wd;
const Kd = Xd;
function Yn(e) {
  return Ud(e, Wt, Kd);
}
var Yd = 1, Qd = Object.prototype, Jd = Qd.hasOwnProperty;
function Zd(e, t, r, n, i, s) {
  var a = r & Yd, o = Yn(e), l = o.length, u = Yn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var m = o[h];
    if (!(a ? m in t : Jd.call(t, m)))
      return !1;
  }
  var d = s.get(e), p = s.get(t);
  if (d && p)
    return d == t && p == e;
  var f = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++h < l; ) {
    m = o[h];
    var S = e[m], I = t[m];
    if (n)
      var A = a ? n(I, S, m, t, e, s) : n(S, I, m, e, t, s);
    if (!(A === void 0 ? S === I || i(S, I, r, n, s) : A)) {
      f = !1;
      break;
    }
    g || (g = m == "constructor");
  }
  if (f && !g) {
    var w = e.constructor, E = t.constructor;
    w != E && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (f = !1);
  }
  return s.delete(e), s.delete(t), f;
}
var ef = Xe(de, "DataView");
const Ar = ef;
var tf = Xe(de, "Promise");
const Pr = tf;
var rf = Xe(de, "Set");
const qr = rf;
var nf = Xe(de, "WeakMap");
const Cr = nf;
var Qn = "[object Map]", sf = "[object Object]", Jn = "[object Promise]", Zn = "[object Set]", ei = "[object WeakMap]", ti = "[object DataView]", af = Ge(Ar), of = Ge(St), lf = Ge(Pr), uf = Ge(qr), cf = Ge(Cr), je = Ce;
(Ar && je(new Ar(new ArrayBuffer(1))) != ti || St && je(new St()) != Qn || Pr && je(Pr.resolve()) != Jn || qr && je(new qr()) != Zn || Cr && je(new Cr()) != ei) && (je = function(e) {
  var t = Ce(e), r = t == sf ? e.constructor : void 0, n = r ? Ge(r) : "";
  if (n)
    switch (n) {
      case af:
        return ti;
      case of:
        return Qn;
      case lf:
        return Jn;
      case uf:
        return Zn;
      case cf:
        return ei;
    }
  return t;
});
const ri = je;
var df = 1, ni = "[object Arguments]", ii = "[object Array]", Lt = "[object Object]", ff = Object.prototype, si = ff.hasOwnProperty;
function pf(e, t, r, n, i, s) {
  var a = L(e), o = L(t), l = a ? ii : ri(e), u = o ? ii : ri(t);
  l = l == ni ? Lt : l, u = u == ni ? Lt : u;
  var c = l == Lt, h = u == Lt, m = l == u;
  if (m && yr(e)) {
    if (!yr(t))
      return !1;
    a = !0, c = !1;
  }
  if (m && !c)
    return s || (s = new me()), a || gi(e) ? fs(e, t, r, n, i, s) : Vd(e, t, l, r, n, i, s);
  if (!(r & df)) {
    var d = c && si.call(e, "__wrapped__"), p = h && si.call(t, "__wrapped__");
    if (d || p) {
      var f = d ? e.value() : e, g = p ? t.value() : t;
      return s || (s = new me()), i(f, g, r, n, s);
    }
  }
  return m ? (s || (s = new me()), Zd(e, t, r, n, i, s)) : !1;
}
function ir(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Pe(e) && !Pe(t) ? e !== e && t !== t : pf(e, t, r, n, ir, i);
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
      var h = new me();
      if (n)
        var m = n(u, c, l, e, t, h);
      if (!(m === void 0 ? ir(c, u, hf | mf, n, h) : m))
        return !1;
    }
  }
  return !0;
}
function hs(e) {
  return e === e && !U(e);
}
function gf(e) {
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
function yf(e) {
  var t = gf(e);
  return t.length == 1 && t[0][2] ? ms(t[0][0], t[0][1]) : function(r) {
    return r === e || vf(r, e, t);
  };
}
function bf(e, t) {
  return e != null && t in Object(e);
}
function wf(e, t) {
  return e != null && Bi(e, t, bf);
}
var Sf = 1, Of = 2;
function $f(e, t) {
  return Gr(e) && hs(t) ? ms($t(e), t) : function(r) {
    var n = Ne(r, e);
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
    return ts(t, e);
  };
}
function xf(e) {
  return Gr(e) ? Ef($t(e)) : Tf(e);
}
function xt(e) {
  return typeof e == "function" ? e : e == null ? bi : typeof e == "object" ? L(e) ? $f(e[0], e[1]) : yf(e) : xf(e);
}
function _f(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ut(t)) {
      var s = xt(r);
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
var ai = 1 / 0, Af = 17976931348623157e292;
function Pf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ai || e === -ai) {
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
  return i < 0 && (i = qf(n + i, 0)), If(e, xt(t), i);
}
var Ff = _f(Cf);
const fn = Ff, Lf = {
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
      return e ? Z(e) ? e : L(e) ? e.map(this.extractMetadataFromExistingFile) : U(e) ? e.options.metadata.metadata : null : null;
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
              const m = ie.CancelToken.source();
              return ie({
                url: a.preview_url,
                method: "GET",
                cancelToken: m.token,
                responseType: "blob"
              }).then((d) => {
                const p = new File([d.data], a.name, { type: a.type });
                o(p);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  m.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, h, m) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const f = ie.CancelToken.source();
            ie({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: f.token,
              onUploadProgress: (g) => {
                h(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var S;
              axios.isCancel(g) ? m() : c((S = g.response) == null ? void 0 : S.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ie({
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
}, kf = { ref: "file" };
function Df(e, t, r, n, i, s) {
  return F(), ve("div", kf, [
    Y(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Bf = /* @__PURE__ */ Le(Lf, [["render", Df]]), Rf = {
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
        return G(e.values, t);
      },
      ...this.values
    });
  }
};
function pn(e, t, r) {
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
  pn(r, e, t);
}
var jf = "[object Boolean]";
function ys(e) {
  return e === !0 || e === !1 || Pe(e) && Ce(e) == jf;
}
function bs(e, t) {
  var r = {};
  return t = xt(t), jr(e, function(n, i, s) {
    rs(r, i, t(n, i, s));
  }), r;
}
function ws(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ze(e, t, r) {
  return e = Yr(e), r = r == null ? 0 : ws(dn(r), 0, e.length), t = Qt(t), e.slice(r, r + t.length) == t;
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
      return bs(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = Zt(() => {
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
    }, { deep: !0 }) : L(this.submitOnChange) && this.submitOnChange.forEach((r) => {
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
      return sn(this.values, e, t);
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
            Z(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
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
            ].includes(r) || Ze(r, "__v_") ? e[r] : (!e.isMounted && !G(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), Ne(e.values, r));
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
  return F(), ve("div", Vf, [
    Y(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Uf = /* @__PURE__ */ Le(Nf, [["render", Hf]]), Wf = {
  components: { Render: se },
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
function zf(e, t, r, n, i, s) {
  const a = Dr("Render");
  return i.html ? (F(), H(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? Y(e.$slots, "default", { key: 1 }) : Lr("", !0);
}
const Gf = /* @__PURE__ */ Le(Wf, [["render", zf]]), Xf = ["href", "onClick"], Kf = {
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
    const t = e, r = V("stack"), n = b(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        ys(t.confirm) ? "" : t.confirm,
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
      if (Ze(t.href, "#")) {
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
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(Z(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (F(), ve("a", {
      href: e.href,
      onClick: ks(i, ["prevent"])
    }, [
      Y(a.$slots, "default")
    ], 8, Xf));
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
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Qf = {
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
}, Jf = {
  components: { Render: se },
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
function Zf(e, t, r, n, i, s) {
  const a = Dr("Render");
  return i.html ? (F(), H(a, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : i.loading ? Y(e.$slots, "placeholder", { key: 1 }) : Y(e.$slots, "default", { key: 2 });
}
const ep = /* @__PURE__ */ Le(Jf, [["render", Zf]]), tp = {
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
function rp(e, t) {
  var r = -1, n = Ut(e) ? Array(e.length) : [];
  return Mr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function Ss(e, t) {
  var r = L(e) ? Di : rp;
  return r(e, xt(t));
}
const np = {
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
      if (!this.choicesInstance && this.multiple && L(e)) {
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
      !this.remoteUrl || (this.loading = !0, ie({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? Ne(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (ee(t, (s) => {
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
      const r = L(e);
      if (!r && U(e))
        if (this.optionValue && this.optionLabel) {
          let n = Ne(e, this.optionValue);
          Z(n) || (n = `${n}`), t.push({
            value: n,
            label: Ne(e, this.optionLabel)
          });
        } else
          ee(e, (n, i) => {
            Z(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = Ss(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
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
}, ip = { ref: "select" };
function sp(e, t, r, n, i, s) {
  return F(), ve("div", ip, [
    Y(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const ap = /* @__PURE__ */ Le(np, [["render", sp]]), op = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = bs(e, (i) => i.join(`
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
        return G(t, i);
      },
      hasShared(i) {
        return G(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function lp(e, t, r) {
  e = Yr(e), t = Qt(t);
  var n = e.length;
  r = r === void 0 ? n : ws(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function up(e, t) {
  var r = [];
  return Mr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function cp(e, t) {
  var r = L(e) ? ps : up;
  return r(e, xt(t));
}
function oi(e, t) {
  return ir(e, t);
}
const dp = {
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
      return !oi(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = Zt(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    ee(e, (r, n) => {
      if (Ze(n, "filter[") && !r) {
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
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, ee(e, (t, r) => {
        Ze(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = cp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Ss(r, (i) => i.key).sort();
      oi(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
        if (!lp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Ze(e, "perPage") || Ze(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      ee(e, (u, c) => {
        if (!L(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((h, m) => {
          n[`${c}[${m}]`] = h;
        });
      });
      let i = "";
      ee(n, (u, c) => {
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
        const l = Z(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = L(e) ? e : [];
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
}, fp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ui
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function pp(e, t, r, n, i, s) {
  return Ds((F(), H(Bs(i.isMounted ? i.Teleport : "div"), Rs(js(e.$attrs)), {
    default: ci(() => [
      Y(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ms, i.isMounted]
  ]);
}
const hp = /* @__PURE__ */ Le(fp, [["render", pp]]), mp = {
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
}, vp = { ref: "textarea" };
function gp(e, t, r, n, i, s) {
  return F(), ve("div", vp, [
    Y(e.$slots, "default")
  ], 512);
}
const yp = /* @__PURE__ */ Le(mp, [["render", gp]]), bp = {
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
}, wp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Sp = {
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
      positions: wp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: se,
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Op = {
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
}, $p = {
  render() {
    return this.$slots.default({
      TransitionRoot: ct,
      TransitionChild: ut
    });
  }
}, Ep = {
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
    e.addEventListener("scroll", Zt(i, 100)), i();
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
}, Ap = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : !1, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Ul).component(`${r}Confirm`, Lu).component(`${r}Data`, Mu).component(`${r}DataStores`, Nu).component(`${r}Defer`, ec).component(`${r}Dialog`, tc).component(`${r}Dropdown`, ud).component(`${r}DynamicHtml`, cd).component(`${r}Errors`, dd).component(`${r}Event`, fd).component(`${r}File`, Bf).component(`${r}Flash`, Rf).component(`${r}Form`, Mf).component(`${r}Input`, Uf).component(`${r}Lazy`, Gf).component(`${r}Modal`, Yf).component(`${r}OnClickOutside`, ns).component(`${r}PreloadedModal`, Qf).component(`${r}Rehydrate`, ep).component(`${r}Render`, se).component(`${r}Script`, tp).component(`${r}Select`, ap).component(`${r}State`, op).component(`${r}Table`, dp).component(`${r}Teleport`, hp).component(`${r}Textarea`, yp).component(`${r}Toast`, bp).component(`${r}Toasts`, Sp).component(`${r}Toggle`, Op).component(`${r}Transition`, $p).component(t.link_component, Kf).directive(`${r}PreserveScroll`, Ep), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      U(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Fr.init(t.progress_bar);
    }
    ee(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Pp(e, t, r) {
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
  Ho as SpladeApp,
  Ap as SpladePlugin,
  _p as renderSpladeApp,
  Pp as startServer
};
