import ze from "axios";
import { ref as y, computed as P, watch as vt, openBlock as L, createBlock as K, unref as H, createCommentVNode as kt, h as k, onMounted as M, createElementBlock as pe, createElementVNode as fr, provide as ie, inject as U, nextTick as Fe, KeepAlive as ni, normalizeStyle as qt, createVNode as Sa, Fragment as Cr, renderList as Oa, cloneVNode as $a, watchEffect as te, defineComponent as W, onUnmounted as xe, Teleport as ii, reactive as Ea, onBeforeUnmount as xa, renderSlot as ae, resolveComponent as ai, withCtx as Ta, withModifiers as _a, normalizeProps as Aa, mergeProps as Ia } from "vue";
function Pa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ca(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var qa = Ca();
const Da = qa;
function La(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Fa = typeof global == "object" && global && global.Object === Object && global;
const si = Fa;
var ja = typeof self == "object" && self && self.Object === Object && self, Ba = si || ja || Function("return this")();
const le = Ba;
var ka = le.Symbol;
const Se = ka;
var oi = Object.prototype, Ra = oi.hasOwnProperty, Ma = oi.toString, it = Se ? Se.toStringTag : void 0;
function Na(e) {
  var t = Ra.call(e, it), r = e[it];
  try {
    e[it] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ma.call(e);
  return n && (t ? e[it] = r : delete e[it]), i;
}
var Va = Object.prototype, Ha = Va.toString;
function Ua(e) {
  return Ha.call(e);
}
var Wa = "[object Null]", za = "[object Undefined]", yn = Se ? Se.toStringTag : void 0;
function Te(e) {
  return e == null ? e === void 0 ? za : Wa : yn && yn in Object(e) ? Na(e) : Ua(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var Ga = "[object Arguments]";
function bn(e) {
  return Oe(e) && Te(e) == Ga;
}
var li = Object.prototype, Ka = li.hasOwnProperty, Xa = li.propertyIsEnumerable, Qa = bn(function() {
  return arguments;
}()) ? bn : function(e) {
  return Oe(e) && Ka.call(e, "callee") && !Xa.call(e, "callee");
};
const ui = Qa;
var Ja = Array.isArray;
const j = Ja;
function Ya() {
  return !1;
}
var ci = typeof exports == "object" && exports && !exports.nodeType && exports, wn = ci && typeof module == "object" && module && !module.nodeType && module, Za = wn && wn.exports === ci, Sn = Za ? le.Buffer : void 0, es = Sn ? Sn.isBuffer : void 0, ts = es || Ya;
const dr = ts;
var rs = 9007199254740991, ns = /^(?:0|[1-9]\d*)$/;
function qr(e, t) {
  var r = typeof e;
  return t = t == null ? rs : t, !!t && (r == "number" || r != "symbol" && ns.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var is = 9007199254740991;
function Dr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= is;
}
var as = "[object Arguments]", ss = "[object Array]", os = "[object Boolean]", ls = "[object Date]", us = "[object Error]", cs = "[object Function]", fs = "[object Map]", ds = "[object Number]", ps = "[object Object]", hs = "[object RegExp]", ms = "[object Set]", vs = "[object String]", gs = "[object WeakMap]", ys = "[object ArrayBuffer]", bs = "[object DataView]", ws = "[object Float32Array]", Ss = "[object Float64Array]", Os = "[object Int8Array]", $s = "[object Int16Array]", Es = "[object Int32Array]", xs = "[object Uint8Array]", Ts = "[object Uint8ClampedArray]", _s = "[object Uint16Array]", As = "[object Uint32Array]", q = {};
q[ws] = q[Ss] = q[Os] = q[$s] = q[Es] = q[xs] = q[Ts] = q[_s] = q[As] = !0;
q[as] = q[ss] = q[ys] = q[os] = q[bs] = q[ls] = q[us] = q[cs] = q[fs] = q[ds] = q[ps] = q[hs] = q[ms] = q[vs] = q[gs] = !1;
function Is(e) {
  return Oe(e) && Dr(e.length) && !!q[Te(e)];
}
function Ps(e) {
  return function(t) {
    return e(t);
  };
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, lt = fi && typeof module == "object" && module && !module.nodeType && module, Cs = lt && lt.exports === fi, nr = Cs && si.process, qs = function() {
  try {
    var e = lt && lt.require && lt.require("util").types;
    return e || nr && nr.binding && nr.binding("util");
  } catch {
  }
}();
const On = qs;
var $n = On && On.isTypedArray, Ds = $n ? Ps($n) : Is;
const di = Ds;
var Ls = Object.prototype, Fs = Ls.hasOwnProperty;
function js(e, t) {
  var r = j(e), n = !r && ui(e), i = !r && !n && dr(e), a = !r && !n && !i && di(e), s = r || n || i || a, o = s ? La(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Fs.call(e, u)) && !(s && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || qr(u, l))) && o.push(u);
  return o;
}
var Bs = Object.prototype;
function ks(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Bs;
  return e === r;
}
function Rs(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ms = Rs(Object.keys, Object);
const Ns = Ms;
var Vs = Object.prototype, Hs = Vs.hasOwnProperty;
function Us(e) {
  if (!ks(e))
    return Ns(e);
  var t = [];
  for (var r in Object(e))
    Hs.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Q(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ws = "[object AsyncFunction]", zs = "[object Function]", Gs = "[object GeneratorFunction]", Ks = "[object Proxy]";
function pi(e) {
  if (!Q(e))
    return !1;
  var t = Te(e);
  return t == zs || t == Gs || t == Ws || t == Ks;
}
function Rt(e) {
  return e != null && Dr(e.length) && !pi(e);
}
function Mt(e) {
  return Rt(e) ? js(e) : Us(e);
}
function Lr(e, t) {
  return e && Da(e, t, Mt);
}
function Xs(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Rt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var Qs = Xs(Lr);
const Fr = Qs;
function hi(e) {
  return e;
}
function mi(e) {
  return typeof e == "function" ? e : hi;
}
function Js(e, t) {
  var r = j(e) ? Pa : Fr;
  return r(e, mi(t));
}
function Y(e, t) {
  return e && Lr(e, mi(t));
}
var Ys = Array.prototype, Zs = Ys.reverse;
function eo(e) {
  return e == null ? e : Zs.call(e);
}
const Dt = y(0), pr = y(1), D = y({}), ne = y(0), $e = typeof window > "u";
function to(e, t, r) {
  $e || window.addEventListener("popstate", ro.bind(this)), Object.keys(t).length > 0 && Dt.value++, Rr(r), Nt(r.head), Mr(e);
  const n = $e ? "" : location.href, i = jr(
    n,
    r.head,
    e,
    t,
    {},
    pr.value,
    Dt.value,
    r.persistentLayout
  );
  vi(i);
}
function ro(e) {
  !e.state || (D.value = e.state, ne.value = 0, Nr.value = {}, Br.value = D.value.persistentLayoutKey, Nt(D.value.head), Mr(D.value.html, D.value.rememberedState.scrollY));
}
function jr(e, t, r, n, i, a, s, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: s,
    persistentLayoutKey: o
  };
  return D.value = l, l;
}
function no(e) {
  $e || window.history.pushState(e, "", e.url);
}
function io(e) {
  const t = jr(
    e,
    JSON.parse(JSON.stringify(D.value.head)),
    D.value.html,
    D.value.dynamics,
    { ...D.value.rememberedState },
    D.value.pageVisitId,
    D.value.dynamicVisitId,
    D.value.persistentLayoutKey
  );
  $e || window.history.replaceState(t, "", t.url);
}
function vi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const ir = y(0), Br = y(null);
function ao(e, t) {
  var c;
  ir.value++;
  const r = e.request.responseURL;
  if (Q((c = e.data) == null ? void 0 : c.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy)
    return;
  e.data.splade.modal && ne.value++;
  const n = Br.value;
  if (Rr(e.data.splade), Nt(e.data.splade.head), r === D.value.url && (t = !0), e.data.splade.modal)
    return Ti(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ne.value = 0;
  let i = e.data.html, a = e.data.dynamics;
  const s = Object.keys(D.value.dynamics).length > 0, o = Object.keys(a).length > 0;
  t ? (o && Y(a, (p, f) => {
    a[f] += `<!-- ${ir.value} -->`;
  }), (!o || !s) && (i += `<!-- ${ir.value} -->`)) : (o && Dt.value++, (!o || !s) && pr.value++);
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout;
  Mr(l ? D.value.html : i, 0);
  const u = jr(
    r,
    e.data.splade.head,
    l ? D.value.html : i,
    a,
    D.value.rememberedState ? { ...D.value.rememberedState } : {},
    pr.value,
    Dt.value,
    e.data.splade.persistentLayout
  );
  t ? vi(u) : no(u);
}
function so() {
  ne.value--, Nt(lo(ne.value));
}
const gi = y({}), yi = (e) => gi.value[e], oo = (e) => Object.keys(yi.value[e]).length > 0, bi = y({}), lo = (e) => bi.value[e], wi = y({}), uo = (e) => wi.value[e], Ge = y([]);
function co(e) {
  Ge.value.push(e);
}
const fo = P(() => eo(Ge.value));
function po(e) {
  Ge.value[e].dismissed = !0, Ge.value[e].html = null;
}
const kr = y(null);
function ho(e, t, r, n) {
  let i, a;
  const s = new Promise((o, l) => {
    i = o, a = l;
  });
  return kr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, s;
}
function mo() {
  kr.value = null;
}
const Si = y({});
function Rr(e) {
  Br.value = e.persistentLayout, Si.value = e.shared ? e.shared : {}, wi.value[ne.value] = e.flash ? e.flash : {}, bi.value[ne.value] = e.head ? e.head : {}, Js(e.toasts ? e.toasts : [], (t) => {
    Ge.value.push(t);
  }), gi.value[ne.value] = e.errors ? e.errors : {};
}
const Oi = y(() => {
}), $i = y(() => {
}), Ei = y(() => {
}), xi = y(() => {
});
function Nt(e) {
  Oi.value(e);
}
function Mr(e, t) {
  $i.value(e, t);
}
function Ti(e, t) {
  Ei.value(e, t);
}
function vo(e) {
  xi.value(e);
}
const _i = y({});
function Ai(e, t, r) {
  _i.value[e] = t, r && go(e, t);
}
function go(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function yo(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : _i.value[e];
}
function xt(e, t) {
  $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Ye(e, t, r, n, i) {
  $e || Ai("scrollY", window.scrollY), xt("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = ze({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (s) => {
      r instanceof FormData && (s.percentage = Math.round(s.loaded / s.total * 100), xt("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: s }));
    }
  });
  return a.then((s) => {
    ao(s, i), xt("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: s });
  }).catch((s) => {
    if (xt("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: s }), !s.response)
      return;
    if (s.response.status == 409 && s.response.headers["x-splade-redirect-away"])
      return window.location = s.response.headers["x-splade-redirect-away"];
    const o = s.response.data.splade;
    o && (o.lazy || Rr(o)), s.response.status != 422 && vo(
      s.response.data.html ? s.response.data.html : s.response.data
    );
  }), a;
}
function Ii(e) {
  return Ye(e, "GET", {}, {}, !0);
}
function bo(e) {
  return Ye(e, "GET", {}, {}, !1);
}
function wo(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Nr = y({});
function So(e) {
  const t = Nr.value[e];
  return t ? (ne.value++, Ti(t.html, t.type), !0) : !1;
}
function Oo(e, t, r) {
  Nr.value[e] = { html: t, type: r };
}
function $o(e) {
  return Ye(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Eo(e, t) {
  return Ye(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function xo() {
  return Ii(D.value.url);
}
const m = {
  init: to,
  replace: Ii,
  visit: bo,
  modal: wo,
  slideover: $o,
  refresh: xo,
  request: Ye,
  lazy: Eo,
  replaceUrlOfCurrentPage: io,
  htmlForDynamicComponent(e) {
    return D.value.dynamics[e];
  },
  setOnHead(e) {
    Oi.value = e;
  },
  setOnHtml(e) {
    $i.value = e;
  },
  setOnModal(e) {
    Ei.value = e;
  },
  setOnServerError(e) {
    xi.value = e;
  },
  hasValidationErrors: oo,
  validationErrors: yi,
  sharedData: Si,
  flashData: uo,
  toasts: Ge,
  toastsReversed: fo,
  confirmModal: kr,
  confirm: ho,
  clearConfirmModal: mo,
  pushToast: co,
  dismissToast: po,
  restore: yo,
  remember: Ai,
  popStack: so,
  currentStack: ne,
  pageVisitId: P(() => D.value.pageVisitId),
  dynamicVisitId: P(() => D.value.dynamicVisitId),
  isSsr: $e,
  openPreloadedModal: So,
  registerPreloadedModal: Oo
};
var To = "[object String]";
function at(e) {
  return typeof e == "string" || !j(e) && Oe(e) && Te(e) == To;
}
const ue = {
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
      r.value = k({
        template: t.html
      });
    }
    return vt(() => t.html, n, { immediate: !0 }), (i, a) => e.html ? (L(), K(H(r), { key: 0 })) : kt("", !0);
  }
}, _o = {
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
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(o) {
      o.keyCode === 27 && s();
    }
    function s() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    return M(() => i()), (o, l) => (L(), pe("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: s
    }, [
      fr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Ao = {
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
          const t = at(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = at(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = at(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = at(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    ie("stack", 0);
    const r = y(), n = y([]), i = y(null), a = y(null), s = U("$spladeOptions") || {}, o = P(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function l() {
      i.value = null;
    }
    function u(f) {
      n[f] = null, m.popStack();
    }
    function c(f) {
      const d = document.createElement("meta");
      Y(f, (h, g) => {
        d[g] = h;
      }), document.getElementsByTagName("head")[0].appendChild(d);
    }
    function p(f) {
      var h;
      let d = "meta";
      Y(f, (g, w) => {
        d = `${d}[${w}="${g}"]`;
      });
      try {
        (h = document.querySelector(d)) == null || h.remove();
      } catch {
      }
    }
    return m.setOnHead((f) => {
      var d;
      if (!m.isSsr) {
        if (a.value === null) {
          a.value = f.meta;
          return;
        }
        if (a.value.forEach((h) => {
          p(h);
        }), a.value = f.meta, document.title = f.title, f.meta.forEach((h) => {
          c(h);
        }), (d = document.querySelector('link[rel="canonical"]')) == null || d.remove(), f.canonical) {
          const h = document.createElement("link");
          h.rel = "canonical", h.href = f.canonical, document.getElementsByTagName("head")[0].appendChild(h);
        }
      }
    }), m.setOnHtml((f, d) => {
      n.value = [], r.value = f, Fe(() => {
        m.isSsr || window.scrollTo(0, d), s.transform_anchors && [...document.querySelectorAll("a")].forEach((h) => {
          h.href == "" || h.href.charAt(0) == "#" || h.__vnode.dynamicProps === null && (h.hasAttribute("download") || (h.onclick = function(g) {
            g.preventDefault(), m.visit(h.href);
          }));
        });
      });
    }), m.setOnModal(function(f, d) {
      n.value[m.currentStack.value] = { html: f, type: d };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), M(() => {
      if (m.isSsr)
        return;
      const f = at(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((d) => {
        delete f.dataset[d];
      });
    }), (f, d) => (L(), pe("div", null, [
      H(m).isSsr ? (L(), K(ue, {
        key: `visit.${H(m).pageVisitId.value}`,
        style: qt(H(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (L(), K(ni, {
        key: 0,
        max: H(s).max_keep_alive
      }, [
        (L(), K(ue, {
          key: `visit.${H(m).pageVisitId.value}`,
          style: qt(H(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      Sa(ue, { html: e.components }, null, 8, ["html"]),
      (L(!0), pe(Cr, null, Oa(H(m).currentStack.value, (h) => (L(), K(ue, {
        key: `modal.${h}`,
        type: n.value[h].type,
        html: n.value[h].html,
        stack: h,
        "on-top-of-stack": H(m).currentStack.value === h,
        onClose: (g) => u(h)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (L(), K(_o, {
        key: 2,
        html: i.value,
        onClose: l
      }, null, 8, ["html"])) : kt("", !0)
    ]));
  }
};
function ep(e) {
  return () => k(Ao, e);
}
var Io = Object.prototype, Po = Io.hasOwnProperty;
function Co(e, t) {
  return e != null && Po.call(e, t);
}
var qo = "[object Symbol]";
function Vt(e) {
  return typeof e == "symbol" || Oe(e) && Te(e) == qo;
}
var Do = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lo = /^\w*$/;
function Vr(e, t) {
  if (j(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Vt(e) ? !0 : Lo.test(e) || !Do.test(e) || t != null && e in Object(t);
}
var Fo = le["__core-js_shared__"];
const ar = Fo;
var En = function() {
  var e = /[^.]+$/.exec(ar && ar.keys && ar.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jo(e) {
  return !!En && En in e;
}
var Bo = Function.prototype, ko = Bo.toString;
function Re(e) {
  if (e != null) {
    try {
      return ko.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ro = /[\\^$.*+?()[\]{}|]/g, Mo = /^\[object .+?Constructor\]$/, No = Function.prototype, Vo = Object.prototype, Ho = No.toString, Uo = Vo.hasOwnProperty, Wo = RegExp(
  "^" + Ho.call(Uo).replace(Ro, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zo(e) {
  if (!Q(e) || jo(e))
    return !1;
  var t = pi(e) ? Wo : Mo;
  return t.test(Re(e));
}
function Go(e, t) {
  return e == null ? void 0 : e[t];
}
function Me(e, t) {
  var r = Go(e, t);
  return zo(r) ? r : void 0;
}
var Ko = Me(Object, "create");
const ft = Ko;
function Xo() {
  this.__data__ = ft ? ft(null) : {}, this.size = 0;
}
function Qo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Jo = "__lodash_hash_undefined__", Yo = Object.prototype, Zo = Yo.hasOwnProperty;
function el(e) {
  var t = this.__data__;
  if (ft) {
    var r = t[e];
    return r === Jo ? void 0 : r;
  }
  return Zo.call(t, e) ? t[e] : void 0;
}
var tl = Object.prototype, rl = tl.hasOwnProperty;
function nl(e) {
  var t = this.__data__;
  return ft ? t[e] !== void 0 : rl.call(t, e);
}
var il = "__lodash_hash_undefined__";
function al(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ft && t === void 0 ? il : t, this;
}
function je(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
je.prototype.clear = Xo;
je.prototype.delete = Qo;
je.prototype.get = el;
je.prototype.has = nl;
je.prototype.set = al;
function sl() {
  this.__data__ = [], this.size = 0;
}
function Hr(e, t) {
  return e === t || e !== e && t !== t;
}
function Ht(e, t) {
  for (var r = e.length; r--; )
    if (Hr(e[r][0], t))
      return r;
  return -1;
}
var ol = Array.prototype, ll = ol.splice;
function ul(e) {
  var t = this.__data__, r = Ht(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ll.call(t, r, 1), --this.size, !0;
}
function cl(e) {
  var t = this.__data__, r = Ht(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function fl(e) {
  return Ht(this.__data__, e) > -1;
}
function dl(e, t) {
  var r = this.__data__, n = Ht(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = sl;
me.prototype.delete = ul;
me.prototype.get = cl;
me.prototype.has = fl;
me.prototype.set = dl;
var pl = Me(le, "Map");
const dt = pl;
function hl() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (dt || me)(),
    string: new je()
  };
}
function ml(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ut(e, t) {
  var r = e.__data__;
  return ml(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function vl(e) {
  var t = Ut(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gl(e) {
  return Ut(this, e).get(e);
}
function yl(e) {
  return Ut(this, e).has(e);
}
function bl(e, t) {
  var r = Ut(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = hl;
ve.prototype.delete = vl;
ve.prototype.get = gl;
ve.prototype.has = yl;
ve.prototype.set = bl;
var wl = "Expected a function";
function Ur(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (Ur.Cache || ve)(), r;
}
Ur.Cache = ve;
var Sl = 500;
function Ol(e) {
  var t = Ur(e, function(n) {
    return r.size === Sl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var $l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, El = /\\(\\)?/g, xl = Ol(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($l, function(r, n, i, a) {
    t.push(i ? a.replace(El, "$1") : n || r);
  }), t;
});
const Tl = xl;
function Pi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var _l = 1 / 0, xn = Se ? Se.prototype : void 0, Tn = xn ? xn.toString : void 0;
function Wt(e) {
  if (typeof e == "string")
    return e;
  if (j(e))
    return Pi(e, Wt) + "";
  if (Vt(e))
    return Tn ? Tn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -_l ? "-0" : t;
}
function Wr(e) {
  return e == null ? "" : Wt(e);
}
function zr(e, t) {
  return j(e) ? e : Vr(e, t) ? [e] : Tl(Wr(e));
}
var Al = 1 / 0;
function gt(e) {
  if (typeof e == "string" || Vt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Al ? "-0" : t;
}
function Ci(e, t, r) {
  t = zr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = gt(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Dr(i) && qr(s, i) && (j(e) || ui(e)));
}
function G(e, t) {
  return e != null && Ci(e, t, Co);
}
function Z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Z), n;
}
var Lt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Lt || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let s = Il(n, r), o = Object.assign(i, { props: s });
  if (e || t & 2 && s.static)
    return sr(o);
  if (t & 1) {
    let l = (a = s.unmount) == null || a ? 0 : 1;
    return Z(l, { [0]() {
      return null;
    }, [1]() {
      return sr({ ...i, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return sr(o);
}
function sr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: s, ...o } = Di(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (s === "template") {
    if (l = qi(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!Pl(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return $a(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return k(s, Object.assign({}, o, u), { default: () => l });
}
function qi(e) {
  return e.flatMap((t) => t.type === Cr ? qi(t.children) : [t]);
}
function Il(...e) {
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
    Object.assign(t, { [n](i, ...a) {
      let s = r[n];
      for (let o of s) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...a);
      }
    } });
  return t;
}
function Di(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Pl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Cl = 0;
function ql() {
  return ++Cl;
}
function Ne() {
  return ql();
}
var Li = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Li || {});
function he(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Fi = Symbol("Context");
var Be = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Be || {});
function Dl() {
  return Gr() !== null;
}
function Gr() {
  return U(Fi, null);
}
function Ll(e) {
  ie(Fi, e);
}
const zt = typeof window > "u" || typeof document > "u";
function Ze(e) {
  if (zt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = he(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let hr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var pt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(pt || {}), ji = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ji || {}), Fl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Fl || {});
function jl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(hr));
}
var Bi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Bi || {});
function Bl(e, t = 0) {
  var r;
  return e === ((r = Ze(e)) == null ? void 0 : r.body) ? !1 : Z(t, { [0]() {
    return e.matches(hr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(hr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function ut(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let kl = ["textarea", "input"].join(",");
function Rl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, kl)) != null ? r : !1;
}
function Ml(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function mr(e, t, r = !0, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, s = Array.isArray(e) ? r ? Ml(e) : e : jl(e);
  n = n != null ? n : a.activeElement;
  let o = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = s.length, f;
  do {
    if (c >= p || c + p <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + p) % p;
    else {
      if (d < 0)
        return 3;
      if (d >= p)
        return 1;
    }
    f = s[d], f == null || f.focus(u), c += o;
  } while (f !== a.activeElement);
  return t & 6 && Rl(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function or(e, t, r) {
  zt || te((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Nl(e, t, r = P(() => !0)) {
  function n(a, s) {
    if (!r.value || a.defaultPrevented)
      return;
    let o = s(a);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : he(u);
      if (c != null && c.contains(o))
        return;
    }
    return !Bl(o, Bi.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  let i = y(null);
  or("mousedown", (a) => {
    var s, o;
    r.value && (i.value = ((o = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : o[0]) || a.target);
  }, !0), or("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), or("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ft = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ft || {});
let vr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Vl(e, t, r) {
  zt || te((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var gr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(gr || {});
function Hl() {
  let e = y(0);
  return Vl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ki(e, t, r, n) {
  zt || te((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Ul(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Ri = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ri || {});
let st = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let a = P(() => Ze(i));
  Wl({ ownerDocument: a }, P(() => Boolean(e.features & 16)));
  let s = zl({ ownerDocument: a, container: i, initialFocus: P(() => e.initialFocus) }, P(() => Boolean(e.features & 2)));
  Gl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, P(() => Boolean(e.features & 8)));
  let o = Hl();
  function l() {
    let u = he(i);
    !u || Z(o.value, { [gr.Forwards]: () => mr(u, pt.First), [gr.Backwards]: () => mr(u, pt.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: p, initialFocus: f, containers: d, ...h } = e;
    return k(Cr, [Boolean(p & 4) && k(vr, { as: "button", type: "button", onFocus: l, features: Ft.Focusable }), z({ ourProps: c, theirProps: { ...t, ...h }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && k(vr, { as: "button", type: "button", onFocus: l, features: Ft.Focusable })]);
  };
} }), { features: Ri });
function Wl({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (ut(r.value), r.value = null);
  }
  M(() => {
    vt(t, (a, s) => {
      a !== s && (a ? n() : i());
    }, { immediate: !0 });
  }), xe(i);
}
function zl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), a = y(!1);
  return M(() => a.value = !0), xe(() => a.value = !1), M(() => {
    vt([t, r, n], (s, o) => {
      if (s.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = he(t);
      !l || Ul(() => {
        var u, c;
        if (!a.value)
          return;
        let p = he(r), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        p ? ut(p) : mr(l, pt.First | pt.NoScroll) === ji.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Gl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  ki((a = e.value) == null ? void 0 : a.defaultView, "focus", (s) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = s.target;
    u && u instanceof HTMLElement ? Kl(o, u) ? (n.value = u, ut(u)) : (s.preventDefault(), s.stopPropagation(), ut(l)) : ut(n.value);
  }, !0);
}
function Kl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let _n = "body > *", Ue = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
function An(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function In(e) {
  let t = be.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Xl(e, t = y(!0)) {
  te((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ze(n);
    if (i) {
      Ue.add(n);
      for (let a of be.keys())
        a.contains(n) && (In(a), be.delete(a));
      i.querySelectorAll(_n).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let s of Ue)
            if (a.contains(s))
              return;
          Ue.size === 1 && (be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), An(a));
        }
      }), r(() => {
        if (Ue.delete(n), Ue.size > 0)
          i.querySelectorAll(_n).forEach((a) => {
            if (a instanceof HTMLElement && !be.has(a)) {
              for (let s of Ue)
                if (a.contains(s))
                  return;
              be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), An(a);
            }
          });
        else
          for (let a of be.keys())
            In(a), be.delete(a);
      });
    }
  });
}
let Mi = Symbol("ForcePortalRootContext");
function Ql() {
  return U(Mi, !1);
}
let yr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return ie(Mi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Jl(e) {
  let t = Ze(e);
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
let Ni = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = P(() => Ze(n)), a = Ql(), s = U(Vi, null), o = y(a === !0 || s == null ? Jl(n.value) : s.resolveTarget());
  return te(() => {
    a || s != null && (o.value = s.resolveTarget());
  }), xe(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return k(ii, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Vi = Symbol("PortalGroupContext"), Yl = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Ea({ resolveTarget() {
    return e.target;
  } });
  return ie(Vi, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Hi = Symbol("StackContext");
var br = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(br || {});
function Zl() {
  return U(Hi, () => {
  });
}
function eu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Zl();
  function a(...s) {
    n == null || n(...s), i(...s);
  }
  M(() => {
    vt(t, (s, o) => {
      s ? a(0, e, r) : o === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), xe(() => {
    t.value && a(1, e, r);
  }), ie(Hi, a);
}
let Ui = Symbol("DescriptionContext");
function tu() {
  let e = U(Ui, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ru({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(a) {
    return n.value.push(a), () => {
      let s = n.value.indexOf(a);
      s !== -1 && n.value.splice(s, 1);
    };
  }
  return ie(Ui, { register: i, slot: e, name: t, props: r }), P(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let tp = W({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = tu(), i = `headlessui-description-${Ne()}`;
  return M(() => xe(n.register(i))), () => {
    let { name: a = "Description", slot: s = y({}), props: o = {} } = n, l = e, u = { ...Object.entries(o).reduce((c, [p, f]) => Object.assign(c, { [p]: H(f) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: a });
  };
} });
function Kr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, a, s) {
    return n.addEventListener(i, a, s), r.add(() => n.removeEventListener(i, a, s));
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
function nu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var iu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(iu || {});
let wr = Symbol("DialogContext");
function yt(e) {
  let t = U(wr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, yt), r;
  }
  return t;
}
let Tt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Xr = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Tt }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let s = y(!1);
  M(() => {
    s.value = !0;
  });
  let o = y(0), l = Gr(), u = P(() => e.open === Tt && l !== null ? Z(l.value, { [Be.Open]: !0, [Be.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), p = y(null), f = y(null), d = P(() => Ze(p));
  if (i({ el: p, $el: p }), !(e.open !== Tt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Tt ? void 0 : e.open}`);
  let h = P(() => s.value && u.value ? 0 : 1), g = P(() => h.value === 0), w = P(() => o.value > 1), _ = U(wr, null) !== null, A = P(() => w.value ? "parent" : "leaf");
  Xl(p, P(() => w.value ? g.value : !1)), eu({ type: "Dialog", enabled: P(() => h.value === 0), element: p, onUpdate: (b, S, x) => {
    if (S === "Dialog")
      return Z(b, { [br.Add]() {
        c.value.add(x), o.value += 1;
      }, [br.Remove]() {
        c.value.delete(x), o.value -= 1;
      } });
  } });
  let I = ru({ name: "DialogDescription", slot: P(() => ({ open: u.value })) }), E = `headlessui-dialog-${Ne()}`, O = y(null), v = { titleId: O, panelRef: y(null), dialogState: h, setTitleId(b) {
    O.value !== b && (O.value = b);
  }, close() {
    t("close", !1);
  } };
  return ie(wr, v), Nl(() => {
    var b, S, x;
    return [...Array.from((S = (b = d.value) == null ? void 0 : b.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(he(f)) || v.panelRef.value && T.contains(v.panelRef.value))), (x = v.panelRef.value) != null ? x : p.value];
  }, (b, S) => {
    v.close(), Fe(() => S == null ? void 0 : S.focus());
  }, P(() => h.value === 0 && !w.value)), ki((a = d.value) == null ? void 0 : a.defaultView, "keydown", (b) => {
    b.defaultPrevented || b.key === Li.Escape && h.value === 0 && (w.value || (b.preventDefault(), b.stopPropagation(), v.close()));
  }), te((b) => {
    var S;
    if (h.value !== 0 || _)
      return;
    let x = d.value;
    if (!x)
      return;
    let T = Kr();
    function $(B, V, R) {
      let N = B.style.getPropertyValue(V);
      return Object.assign(B.style, { [V]: R }), T.add(() => {
        Object.assign(B.style, { [V]: N });
      });
    }
    let C = x == null ? void 0 : x.documentElement, F = ((S = x.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), F > 0) {
      let B = C.clientWidth - C.offsetWidth, V = F - B;
      $(C, "paddingRight", `${V}px`);
    }
    if (nu()) {
      let B = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${B}px`), $(C, "width", "100%"), T.add(() => window.scrollTo(0, B));
    }
    b(T.dispose);
  }), te((b) => {
    if (h.value !== 0)
      return;
    let S = he(p);
    if (!S)
      return;
    let x = new IntersectionObserver((T) => {
      for (let $ of T)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && v.close();
    });
    x.observe(S), b(() => x.disconnect());
  }), () => {
    let b = { ...r, ref: p, id: E, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": O.value, "aria-describedby": I.value }, { open: S, initialFocus: x, ...T } = e, $ = { open: h.value === 0 };
    return k(yr, { force: !0 }, () => [k(Ni, () => k(Yl, { target: p.value }, () => k(yr, { force: !1 }, () => k(st, { initialFocus: x, containers: c, features: g.value ? Z(A.value, { parent: st.features.RestoreFocus, leaf: st.features.All & ~st.features.FocusLock }) : st.features.None }, () => z({ ourProps: b, theirProps: T, slot: $, attrs: r, slots: n, visible: h.value === 0, features: Lt.RenderStrategy | Lt.Static, name: "Dialog" }))))), k(vr, { features: Ft.Hidden, ref: f })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = yt("DialogOverlay"), i = `headlessui-dialog-overlay-${Ne()}`;
  function a(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => z({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = yt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Ne()}`, s = y(null);
  return n({ el: s, $el: s }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let o = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return k(yr, { force: !0 }, () => k(Ni, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Qr = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = yt("DialogPanel"), a = `headlessui-dialog-panel-${Ne()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function s(o) {
    o.stopPropagation();
  }
  return () => {
    let o = { id: a, ref: i.panelRef, onClick: s };
    return z({ ourProps: o, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = yt("DialogTitle"), i = `headlessui-dialog-title-${Ne()}`;
  return M(() => {
    n.setTitleId(i), xe(() => n.setTitleId(null));
  }), () => z({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function au(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function lr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Sr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Sr || {});
function su(e, t) {
  let r = Kr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, s] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + s) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Pn(e, t, r, n, i, a) {
  let s = Kr(), o = a !== void 0 ? au(a) : () => {
  };
  return _t(e, ...i), lr(e, ...t, ...r), s.nextFrame(() => {
    _t(e, ...r), lr(e, ...n), s.add(su(e, (l) => (_t(e, ...n, ...t), lr(e, ...i), o(l))));
  }), s.add(() => _t(e, ...t, ...r, ...n, ...i)), s.add(() => o("cancelled")), s.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Jr = Symbol("TransitionContext");
var ou = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ou || {});
function lu() {
  return U(Jr, null) !== null;
}
function uu() {
  let e = U(Jr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function cu() {
  let e = U(Yr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Yr = Symbol("NestingContext");
function Gt(e) {
  return "children" in e ? Gt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Wi(e) {
  let t = y([]), r = y(!1);
  M(() => r.value = !0), xe(() => r.value = !1);
  function n(a, s = we.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === a);
    o !== -1 && (Z(s, { [we.Unmount]() {
      t.value.splice(o, 1);
    }, [we.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Gt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let s = t.value.find(({ id: o }) => o === a);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let zi = Lt.RenderStrategy, et = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!lu() && Dl())
    return () => k(tt, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = y(null), s = y("visible"), o = P(() => e.unmount ? we.Unmount : we.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = uu(), { register: c, unregister: p } = cu(), f = { value: !0 }, d = Ne(), h = { value: !1 }, g = Wi(() => {
    h.value || (s.value = "hidden", p(d), t("afterLeave"));
  });
  M(() => {
    let S = c(d);
    xe(S);
  }), te(() => {
    if (o.value === we.Hidden && !!d) {
      if (l && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      Z(s.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let w = Ce(e.enter), _ = Ce(e.enterFrom), A = Ce(e.enterTo), I = Ce(e.entered), E = Ce(e.leave), O = Ce(e.leaveFrom), v = Ce(e.leaveTo);
  M(() => {
    te(() => {
      if (s.value === "visible") {
        let S = he(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function b(S) {
    let x = f.value && !u.value, T = he(a);
    !T || !(T instanceof HTMLElement) || x || (h.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? Pn(T, w, _, A, I, ($) => {
      h.value = !1, $ === Sr.Finished && t("afterEnter");
    }) : Pn(T, E, O, v, I, ($) => {
      h.value = !1, $ === Sr.Finished && (Gt(g) || (s.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return M(() => {
    vt([l], (S, x, T) => {
      b(T), f.value = !1;
    }, { immediate: !0 });
  }), ie(Yr, g), Ll(P(() => Z(s.value, { visible: Be.Open, hidden: Be.Closed }))), () => {
    let { appear: S, show: x, enter: T, enterFrom: $, enterTo: C, entered: F, leave: B, leaveFrom: V, leaveTo: R, ...N } = e;
    return z({ theirProps: N, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: zi, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), fu = et, tt = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Gr(), a = P(() => e.show === null && i !== null ? Z(i.value, { [Be.Open]: !0, [Be.Closed]: !1 }) : e.show);
  te(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = y(a.value ? "visible" : "hidden"), o = Wi(() => {
    s.value = "hidden";
  }), l = y(!0), u = { show: a, appear: P(() => e.appear || !l.value) };
  return M(() => {
    te(() => {
      l.value = !1, a.value ? s.value = "visible" : Gt(o) || (s.value = "hidden");
    });
  }), ie(Yr, o), ie(Jr, u), () => {
    let c = Di(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return z({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [k(fu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: zi, visible: s.value === "visible", name: "Transition" });
  };
} });
const du = {
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
      Dialog: Xr,
      DialogPanel: Qr,
      TransitionRoot: tt,
      TransitionChild: et
    });
  }
};
function Gi(e, t) {
  t = zr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[gt(t[r++])];
  return r && r == n ? e : void 0;
}
function ht(e, t, r) {
  var n = e == null ? void 0 : Gi(e, t);
  return n === void 0 ? r : n;
}
var pu = function() {
  try {
    var e = Me(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Cn = pu;
function Ki(e, t, r) {
  t == "__proto__" && Cn ? Cn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var hu = Object.prototype, mu = hu.hasOwnProperty;
function vu(e, t, r) {
  var n = e[t];
  (!(mu.call(e, t) && Hr(n, r)) || r === void 0 && !(t in e)) && Ki(e, t, r);
}
function gu(e, t, r, n) {
  if (!Q(e))
    return e;
  t = zr(t, e);
  for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var l = gt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != s) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = Q(c) ? c : qr(t[i + 1]) ? [] : {});
    }
    vu(o, l, u), o = o[l];
  }
  return e;
}
function Xi(e, t, r) {
  return e == null ? e : gu(e, t, r);
}
const yu = {
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
          return ht(e.values, r);
        },
        set(t, r, n) {
          Xi(e.values, r, n);
        }
      })
    );
  }
};
var bu = function() {
  return le.Date.now();
};
const ur = bu;
var wu = /\s/;
function Su(e) {
  for (var t = e.length; t-- && wu.test(e.charAt(t)); )
    ;
  return t;
}
var Ou = /^\s+/;
function $u(e) {
  return e && e.slice(0, Su(e) + 1).replace(Ou, "");
}
var qn = 0 / 0, Eu = /^[-+]0x[0-9a-f]+$/i, xu = /^0b[01]+$/i, Tu = /^0o[0-7]+$/i, _u = parseInt;
function Or(e) {
  if (typeof e == "number")
    return e;
  if (Vt(e))
    return qn;
  if (Q(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Q(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = $u(e);
  var r = xu.test(e);
  return r || Tu.test(e) ? _u(e.slice(2), r ? 2 : 8) : Eu.test(e) ? qn : +e;
}
var Au = "Expected a function", Iu = Math.max, Pu = Math.min;
function Zr(e, t, r) {
  var n, i, a, s, o, l, u = 0, c = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Au);
  t = Or(t) || 0, Q(r) && (c = !!r.leading, p = "maxWait" in r, a = p ? Iu(Or(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function d(v) {
    var b = n, S = i;
    return n = i = void 0, u = v, s = e.apply(S, b), s;
  }
  function h(v) {
    return u = v, o = setTimeout(_, t), c ? d(v) : s;
  }
  function g(v) {
    var b = v - l, S = v - u, x = t - b;
    return p ? Pu(x, a - S) : x;
  }
  function w(v) {
    var b = v - l, S = v - u;
    return l === void 0 || b >= t || b < 0 || p && S >= a;
  }
  function _() {
    var v = ur();
    if (w(v))
      return A(v);
    o = setTimeout(_, g(v));
  }
  function A(v) {
    return o = void 0, f && n ? d(v) : (n = i = void 0, s);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function E() {
    return o === void 0 ? s : A(ur());
  }
  function O() {
    var v = ur(), b = w(v);
    if (n = arguments, i = this, l = v, b) {
      if (o === void 0)
        return h(l);
      if (p)
        return clearTimeout(o), o = setTimeout(_, t), d(l);
    }
    return o === void 0 && (o = setTimeout(_, t)), s;
  }
  return O.cancel = I, O.flush = E, O;
}
const Cu = {
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
    this.debounceFunction = Zr(() => {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), ze(e).then((t) => {
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
}, qu = {
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
      Dialog: Xr,
      DialogPanel: Qr,
      isActivated: this.isActivated
    });
  }
}, Qi = {
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
    return M(() => {
      r.value = (a) => {
        n.value.children[0].contains(a.target) || t.ignoreInnerTargets && n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), xa(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, s) => (L(), pe("div", {
      ref_key: "root",
      ref: n
    }, [
      ae(a.$slots, "default")
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
function ke(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function X(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function en(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Le = Math.max, jt = Math.min, Ke = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ji() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function Xe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && X(e) && (i = e.offsetWidth > 0 && Ke(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ke(n.height) / e.offsetHeight || 1);
  var s = ke(e) ? J(e) : window, o = s.visualViewport, l = !Ji() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / a, p = n.width / i, f = n.height / a;
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
function tn(e) {
  var t = J(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Du(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Lu(e) {
  return e === J(e) || !X(e) ? tn(e) : Du(e);
}
function se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _e(e) {
  return ((ke(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rn(e) {
  return Xe(_e(e)).left + tn(e).scrollLeft;
}
function re(e) {
  return J(e).getComputedStyle(e);
}
function nn(e) {
  var t = re(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Fu(e) {
  var t = e.getBoundingClientRect(), r = Ke(t.width) / e.offsetWidth || 1, n = Ke(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ju(e, t, r) {
  r === void 0 && (r = !1);
  var n = X(t), i = X(t) && Fu(t), a = _e(t), s = Xe(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((se(t) !== "body" || nn(a)) && (o = Lu(t)), X(t) ? (l = Xe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = rn(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Yi(e) {
  var t = Xe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Kt(e) {
  return se(e) === "html" ? e : e.assignedSlot || e.parentNode || (en(e) ? e.host : null) || _e(e);
}
function Zi(e) {
  return ["html", "body", "#document"].indexOf(se(e)) >= 0 ? e.ownerDocument.body : X(e) && nn(e) ? e : Zi(Kt(e));
}
function ct(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Zi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = J(n), s = i ? [a].concat(a.visualViewport || [], nn(n) ? n : []) : n, o = t.concat(s);
  return i ? o : o.concat(ct(Kt(s)));
}
function Bu(e) {
  return ["table", "td", "th"].indexOf(se(e)) >= 0;
}
function Dn(e) {
  return !X(e) || re(e).position === "fixed" ? null : e.offsetParent;
}
function ku(e) {
  var t = /firefox/i.test($r()), r = /Trident/i.test($r());
  if (r && X(e)) {
    var n = re(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Kt(e);
  for (en(i) && (i = i.host); X(i) && ["html", "body"].indexOf(se(i)) < 0; ) {
    var a = re(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xt(e) {
  for (var t = J(e), r = Dn(e); r && Bu(r) && re(r).position === "static"; )
    r = Dn(r);
  return r && (se(r) === "html" || se(r) === "body" && re(r).position === "static") ? t : r || ku(e) || t;
}
var ee = "top", oe = "bottom", Ee = "right", ce = "left", Qt = "auto", Jt = [ee, oe, Ee, ce], Qe = "start", mt = "end", Ru = "clippingParents", ea = "viewport", ot = "popper", Mu = "reference", Ln = /* @__PURE__ */ Jt.reduce(function(e, t) {
  return e.concat([t + "-" + Qe, t + "-" + mt]);
}, []), Nu = /* @__PURE__ */ [].concat(Jt, [Qt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qe, t + "-" + mt]);
}, []), Vu = "beforeRead", Hu = "read", Uu = "afterRead", Wu = "beforeMain", zu = "main", Gu = "afterMain", Ku = "beforeWrite", Xu = "write", Qu = "afterWrite", Er = [Vu, Hu, Uu, Wu, zu, Gu, Ku, Xu, Qu];
function Ju(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function Yu(e) {
  var t = Ju(e);
  return Er.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Zu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ye(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var qe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ec = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Fn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function tc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Fn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ye(qe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ye(qe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Er.indexOf(t.phase) < 0 && console.error(ye(qe, t.name, '"phase"', "either " + Er.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ye(qe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ye(qe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ye(qe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ye(qe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Fn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ye(ec, String(t.name), n, n));
      });
    });
  });
}
function rc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function fe(e) {
  return e.split("-")[0];
}
function nc(e) {
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
function ic(e, t) {
  var r = J(e), n = _e(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Ji();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + rn(e),
    y: l
  };
}
function ac(e) {
  var t, r = _e(e), n = tn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Le(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Le(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + rn(e), l = -n.scrollTop;
  return re(i || r).direction === "rtl" && (o += Le(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function sc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && en(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function xr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function oc(e, t) {
  var r = Xe(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jn(e, t, r) {
  return t === ea ? xr(ic(e, r)) : ke(t) ? oc(t, r) : xr(ac(_e(e)));
}
function lc(e) {
  var t = ct(Kt(e)), r = ["absolute", "fixed"].indexOf(re(e).position) >= 0, n = r && X(e) ? Xt(e) : e;
  return ke(n) ? t.filter(function(i) {
    return ke(i) && sc(i, n) && se(i) !== "body";
  }) : [];
}
function uc(e, t, r, n) {
  var i = t === "clippingParents" ? lc(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, u) {
    var c = jn(e, u, n);
    return l.top = Le(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = Le(c.left, l.left), l;
  }, jn(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Je(e) {
  return e.split("-")[1];
}
function ta(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ra(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? fe(n) : null, a = n ? Je(n) : null, s = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ee:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case oe:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ee:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case ce:
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
  var u = i ? ta(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Qe:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case mt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function na() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cc(e) {
  return Object.assign({}, na(), e);
}
function fc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function an(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? Ru : o, u = r.rootBoundary, c = u === void 0 ? ea : u, p = r.elementContext, f = p === void 0 ? ot : p, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, w = g === void 0 ? 0 : g, _ = cc(typeof w != "number" ? w : fc(w, Jt)), A = f === ot ? Mu : ot, I = e.rects.popper, E = e.elements[h ? A : f], O = uc(ke(E) ? E : E.contextElement || _e(e.elements.popper), l, c, s), v = Xe(e.elements.reference), b = ra({
    reference: v,
    element: I,
    strategy: "absolute",
    placement: i
  }), S = xr(Object.assign({}, I, b)), x = f === ot ? S : v, T = {
    top: O.top - x.top + _.top,
    bottom: x.bottom - O.bottom + _.bottom,
    left: O.left - x.left + _.left,
    right: x.right - O.right + _.right
  }, $ = e.modifiersData.offset;
  if (f === ot && $) {
    var C = $[i];
    Object.keys(T).forEach(function(F) {
      var B = [Ee, oe].indexOf(F) >= 0 ? 1 : -1, V = [ee, oe].indexOf(F) >= 0 ? "y" : "x";
      T[F] += C[V] * B;
    });
  }
  return T;
}
var Bn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", dc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", kn = {
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
function pc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? kn : i;
  return function(o, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kn, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, d = {
      state: c,
      setOptions: function(_) {
        var A = typeof _ == "function" ? _(c.options) : _;
        g(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: ke(o) ? ct(o) : o.contextElement ? ct(o.contextElement) : [],
          popper: ct(l)
        };
        var I = Yu(nc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = rc([].concat(I, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (tc(E), fe(c.options.placement) === Qt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var v = re(l), b = v.marginTop, S = v.marginRight, x = v.marginBottom, T = v.marginLeft;
          [b, S, x, T].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var _ = c.elements, A = _.reference, I = _.popper;
          if (!Rn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(Bn);
            return;
          }
          c.rects = {
            reference: ju(A, Xt(I), c.options.strategy === "fixed"),
            popper: Yi(I)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(dc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var v = c.orderedModifiers[O], b = v.fn, S = v.options, x = S === void 0 ? {} : S, T = v.name;
            typeof b == "function" && (c = b({
              state: c,
              options: x,
              name: T,
              instance: d
            }) || c);
          }
        }
      },
      update: Zu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Rn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Bn), d;
    d.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h() {
      c.orderedModifiers.forEach(function(w) {
        var _ = w.name, A = w.options, I = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: _,
            instance: d,
            options: I
          }), v = function() {
          };
          p.push(O || v);
        }
      });
    }
    function g() {
      p.forEach(function(w) {
        return w();
      }), p = [];
    }
    return d;
  };
}
var At = {
  passive: !0
};
function hc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = J(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, At);
  }), o && l.addEventListener("resize", r.update, At), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, At);
    }), o && l.removeEventListener("resize", r.update, At);
  };
}
const mc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hc,
  data: {}
};
function vc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ra({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vc,
  data: {}
};
var yc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function bc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Ke(t * i) / i || 0,
    y: Ke(r * i) / i || 0
  };
}
function Mn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = s.x, d = f === void 0 ? 0 : f, h = s.y, g = h === void 0 ? 0 : h, w = typeof c == "function" ? c({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = w.x, g = w.y;
  var _ = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), I = ce, E = ee, O = window;
  if (u) {
    var v = Xt(r), b = "clientHeight", S = "clientWidth";
    if (v === J(r) && (v = _e(r), re(v).position !== "static" && o === "absolute" && (b = "scrollHeight", S = "scrollWidth")), v = v, i === ee || (i === ce || i === Ee) && a === mt) {
      E = oe;
      var x = p && v === O && O.visualViewport ? O.visualViewport.height : v[b];
      g -= x - n.height, g *= l ? 1 : -1;
    }
    if (i === ce || (i === ee || i === oe) && a === mt) {
      I = Ee;
      var T = p && v === O && O.visualViewport ? O.visualViewport.width : v[S];
      d -= T - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: o
  }, u && yc), C = c === !0 ? bc({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  if (d = C.x, g = C.y, l) {
    var F;
    return Object.assign({}, $, (F = {}, F[E] = A ? "0" : "", F[I] = _ ? "0" : "", F.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", F));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? g + "px" : "", t[I] = _ ? d + "px" : "", t.transform = "", t));
}
function wc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = re(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: fe(t.placement),
    variation: Je(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Mn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Mn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Sc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: wc,
  data: {}
};
function Oc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !X(a) || !se(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function $c(e) {
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
      var i = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !X(i) || !se(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ec = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oc,
  effect: $c,
  requires: ["computeStyles"]
};
var xc = [mc, gc, Sc, Ec], Tc = /* @__PURE__ */ pc({
  defaultModifiers: xc
});
function _c(e) {
  return e === "x" ? "y" : "x";
}
function Pt(e, t, r) {
  return Le(e, jt(t, r));
}
function Ac(e, t, r) {
  var n = Pt(e, t, r);
  return n > r ? r : n;
}
function Ic(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? !0 : f, h = r.tetherOffset, g = h === void 0 ? 0 : h, w = an(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), _ = fe(t.placement), A = Je(t.placement), I = !A, E = ta(_), O = _c(E), v = t.modifiersData.popperOffsets, b = t.rects.reference, S = t.rects.popper, x = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, T = typeof x == "number" ? {
    mainAxis: x,
    altAxis: x
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, x), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!v) {
    if (a) {
      var F, B = E === "y" ? ee : ce, V = E === "y" ? oe : Ee, R = E === "y" ? "height" : "width", N = v[E], wt = N + w[B], Ae = N - w[V], St = d ? -S[R] / 2 : 0, Zt = A === Qe ? b[R] : S[R], rt = A === Qe ? -S[R] : -b[R], Ot = t.elements.arrow, He = d && Ot ? Yi(Ot) : {
        width: 0,
        height: 0
      }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : na(), nt = ge[B], $t = ge[V], Ie = Pt(0, b[R], He[R]), er = I ? b[R] / 2 - St - Ie - nt - T.mainAxis : Zt - Ie - nt - T.mainAxis, ma = I ? -b[R] / 2 + St + Ie + $t + T.mainAxis : rt + Ie + $t + T.mainAxis, tr = t.elements.arrow && Xt(t.elements.arrow), va = tr ? E === "y" ? tr.clientTop || 0 : tr.clientLeft || 0 : 0, un = (F = $ == null ? void 0 : $[E]) != null ? F : 0, ga = N + er - un - va, ya = N + ma - un, cn = Pt(d ? jt(wt, ga) : wt, N, d ? Le(Ae, ya) : Ae);
      v[E] = cn, C[E] = cn - N;
    }
    if (o) {
      var fn, ba = E === "x" ? ee : ce, wa = E === "x" ? oe : Ee, Pe = v[O], Et = O === "y" ? "height" : "width", dn = Pe + w[ba], pn = Pe - w[wa], rr = [ee, ce].indexOf(_) !== -1, hn = (fn = $ == null ? void 0 : $[O]) != null ? fn : 0, mn = rr ? dn : Pe - b[Et] - S[Et] - hn + T.altAxis, vn = rr ? Pe + b[Et] + S[Et] - hn - T.altAxis : pn, gn = d && rr ? Ac(mn, Pe, vn) : Pt(d ? mn : dn, Pe, d ? vn : pn);
      v[O] = gn, C[O] = gn - Pe;
    }
    t.modifiersData[n] = C;
  }
}
const Pc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ic,
  requiresIfExists: ["offset"]
};
var Cc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ct(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Cc[t];
  });
}
var qc = {
  start: "end",
  end: "start"
};
function Nn(e) {
  return e.replace(/start|end/g, function(t) {
    return qc[t];
  });
}
function Dc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Nu : l, c = Je(n), p = c ? o ? Ln : Ln.filter(function(h) {
    return Je(h) === c;
  }) : Jt, f = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h, g) {
    return h[g] = an(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[fe(g)], h;
  }, {});
  return Object.keys(d).sort(function(h, g) {
    return d[h] - d[g];
  });
}
function Lc(e) {
  if (fe(e) === Qt)
    return [];
  var t = Ct(e);
  return [Nn(e), t, Nn(t)];
}
function Fc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, w = t.options.placement, _ = fe(w), A = _ === w, I = l || (A || !h ? [Ct(w)] : Lc(w)), E = [w].concat(I).reduce(function(He, ge) {
      return He.concat(fe(ge) === Qt ? Dc(t, {
        placement: ge,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : ge);
    }, []), O = t.rects.reference, v = t.rects.popper, b = /* @__PURE__ */ new Map(), S = !0, x = E[0], T = 0; T < E.length; T++) {
      var $ = E[T], C = fe($), F = Je($) === Qe, B = [ee, oe].indexOf(C) >= 0, V = B ? "width" : "height", R = an(t, {
        placement: $,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), N = B ? F ? Ee : ce : F ? oe : ee;
      O[V] > v[V] && (N = Ct(N));
      var wt = Ct(N), Ae = [];
      if (a && Ae.push(R[C] <= 0), o && Ae.push(R[N] <= 0, R[wt] <= 0), Ae.every(function(He) {
        return He;
      })) {
        x = $, S = !1;
        break;
      }
      b.set($, Ae);
    }
    if (S)
      for (var St = h ? 3 : 1, Zt = function(ge) {
        var nt = E.find(function($t) {
          var Ie = b.get($t);
          if (Ie)
            return Ie.slice(0, ge).every(function(er) {
              return er;
            });
        });
        if (nt)
          return x = nt, "break";
      }, rt = St; rt > 0; rt--) {
        var Ot = Zt(rt);
        if (Ot === "break")
          break;
      }
    t.placement !== x && (t.modifiersData[n]._skip = !0, t.placement = x, t.reset = !0);
  }
}
const jc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ve = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Bc = {
  components: {
    OnClickOutside: Qi
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
    this.popper = Tc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [jc, Pc],
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
}, kc = { ref: "tooltip" };
function Rc(e, t, r, n, i, a) {
  const s = ai("OnClickOutside");
  return L(), K(s, {
    style: qt(a.wrapperStyle),
    do: a.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: Ta(() => [
      fr("div", {
        ref: "button",
        style: qt(a.buttonStyle)
      }, [
        ae(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 4),
      fr("div", kc, [
        ae(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Mc = /* @__PURE__ */ Ve(Bc, [["render", Rc]]), Nc = {
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
    return (n, i) => H(t).isSsr ? (L(), K(ue, {
      key: e.keepAliveKey,
      html: H(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (L(), K(ni, {
      key: 0,
      max: H(r).max_keep_alive
    }, [
      (L(), K(ue, {
        key: e.keepAliveKey,
        html: H(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function ia(e) {
  return e && e.length ? e[0] : void 0;
}
const Vc = {
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
        return ia(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, Hc = {
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
        const n = "splade.redirect", i = "splade.refresh", a = "splade.toast";
        let s = null, o = !1, l = [];
        Y(r, (u) => {
          !Q(u) || (n in u && (s = u[n]), i in u && (o = u[i]), a in u && l.push(u));
        }), s ? m.visit(s) : o ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
};
function Uc() {
  this.__data__ = new me(), this.size = 0;
}
function Wc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function zc(e) {
  return this.__data__.get(e);
}
function Gc(e) {
  return this.__data__.has(e);
}
var Kc = 200;
function Xc(e, t) {
  var r = this.__data__;
  if (r instanceof me) {
    var n = r.__data__;
    if (!dt || n.length < Kc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function de(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
de.prototype.clear = Uc;
de.prototype.delete = Wc;
de.prototype.get = zc;
de.prototype.has = Gc;
de.prototype.set = Xc;
var Qc = "__lodash_hash_undefined__";
function Jc(e) {
  return this.__data__.set(e, Qc), this;
}
function Yc(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = Jc;
Bt.prototype.has = Yc;
function Zc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ef(e, t) {
  return e.has(t);
}
var tf = 1, rf = 2;
function aa(e, t, r, n, i, a) {
  var s = r & tf, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = !0, d = r & rf ? new Bt() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < o; ) {
    var h = e[p], g = t[p];
    if (n)
      var w = s ? n(g, h, p, t, e, a) : n(h, g, p, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!Zc(t, function(_, A) {
        if (!ef(d, A) && (h === _ || i(h, _, r, n, a)))
          return d.push(A);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === g || i(h, g, r, n, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var nf = le.Uint8Array;
const Vn = nf;
function af(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function sf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var of = 1, lf = 2, uf = "[object Boolean]", cf = "[object Date]", ff = "[object Error]", df = "[object Map]", pf = "[object Number]", hf = "[object RegExp]", mf = "[object Set]", vf = "[object String]", gf = "[object Symbol]", yf = "[object ArrayBuffer]", bf = "[object DataView]", Hn = Se ? Se.prototype : void 0, cr = Hn ? Hn.valueOf : void 0;
function wf(e, t, r, n, i, a, s) {
  switch (r) {
    case bf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yf:
      return !(e.byteLength != t.byteLength || !a(new Vn(e), new Vn(t)));
    case uf:
    case cf:
    case pf:
      return Hr(+e, +t);
    case ff:
      return e.name == t.name && e.message == t.message;
    case hf:
    case vf:
      return e == t + "";
    case df:
      var o = af;
    case mf:
      var l = n & of;
      if (o || (o = sf), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      n |= lf, s.set(e, t);
      var c = aa(o(e), o(t), n, i, a, s);
      return s.delete(e), c;
    case gf:
      if (cr)
        return cr.call(e) == cr.call(t);
  }
  return !1;
}
function Sf(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Of(e, t, r) {
  var n = t(e);
  return j(e) ? n : Sf(n, r(e));
}
function sa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function $f() {
  return [];
}
var Ef = Object.prototype, xf = Ef.propertyIsEnumerable, Un = Object.getOwnPropertySymbols, Tf = Un ? function(e) {
  return e == null ? [] : (e = Object(e), sa(Un(e), function(t) {
    return xf.call(e, t);
  }));
} : $f;
const _f = Tf;
function Wn(e) {
  return Of(e, Mt, _f);
}
var Af = 1, If = Object.prototype, Pf = If.hasOwnProperty;
function Cf(e, t, r, n, i, a) {
  var s = r & Af, o = Wn(e), l = o.length, u = Wn(t), c = u.length;
  if (l != c && !s)
    return !1;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(s ? f in t : Pf.call(t, f)))
      return !1;
  }
  var d = a.get(e), h = a.get(t);
  if (d && h)
    return d == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var w = s; ++p < l; ) {
    f = o[p];
    var _ = e[f], A = t[f];
    if (n)
      var I = s ? n(A, _, f, t, e, a) : n(_, A, f, e, t, a);
    if (!(I === void 0 ? _ === A || i(_, A, r, n, a) : I)) {
      g = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var E = e.constructor, O = t.constructor;
    E != O && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var qf = Me(le, "DataView");
const Tr = qf;
var Df = Me(le, "Promise");
const _r = Df;
var Lf = Me(le, "Set");
const Ar = Lf;
var Ff = Me(le, "WeakMap");
const Ir = Ff;
var zn = "[object Map]", jf = "[object Object]", Gn = "[object Promise]", Kn = "[object Set]", Xn = "[object WeakMap]", Qn = "[object DataView]", Bf = Re(Tr), kf = Re(dt), Rf = Re(_r), Mf = Re(Ar), Nf = Re(Ir), De = Te;
(Tr && De(new Tr(new ArrayBuffer(1))) != Qn || dt && De(new dt()) != zn || _r && De(_r.resolve()) != Gn || Ar && De(new Ar()) != Kn || Ir && De(new Ir()) != Xn) && (De = function(e) {
  var t = Te(e), r = t == jf ? e.constructor : void 0, n = r ? Re(r) : "";
  if (n)
    switch (n) {
      case Bf:
        return Qn;
      case kf:
        return zn;
      case Rf:
        return Gn;
      case Mf:
        return Kn;
      case Nf:
        return Xn;
    }
  return t;
});
const Jn = De;
var Vf = 1, Yn = "[object Arguments]", Zn = "[object Array]", It = "[object Object]", Hf = Object.prototype, ei = Hf.hasOwnProperty;
function Uf(e, t, r, n, i, a) {
  var s = j(e), o = j(t), l = s ? Zn : Jn(e), u = o ? Zn : Jn(t);
  l = l == Yn ? It : l, u = u == Yn ? It : u;
  var c = l == It, p = u == It, f = l == u;
  if (f && dr(e)) {
    if (!dr(t))
      return !1;
    s = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new de()), s || di(e) ? aa(e, t, r, n, i, a) : wf(e, t, l, r, n, i, a);
  if (!(r & Vf)) {
    var d = c && ei.call(e, "__wrapped__"), h = p && ei.call(t, "__wrapped__");
    if (d || h) {
      var g = d ? e.value() : e, w = h ? t.value() : t;
      return a || (a = new de()), i(g, w, r, n, a);
    }
  }
  return f ? (a || (a = new de()), Cf(e, t, r, n, i, a)) : !1;
}
function Yt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : Uf(e, t, r, n, Yt, i);
}
var Wf = 1, zf = 2;
function Gf(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var p = new de();
      if (n)
        var f = n(u, c, l, e, t, p);
      if (!(f === void 0 ? Yt(c, u, Wf | zf, n, p) : f))
        return !1;
    }
  }
  return !0;
}
function oa(e) {
  return e === e && !Q(e);
}
function Kf(e) {
  for (var t = Mt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, oa(i)];
  }
  return t;
}
function la(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Xf(e) {
  var t = Kf(e);
  return t.length == 1 && t[0][2] ? la(t[0][0], t[0][1]) : function(r) {
    return r === e || Gf(r, e, t);
  };
}
function Qf(e, t) {
  return e != null && t in Object(e);
}
function Jf(e, t) {
  return e != null && Ci(e, t, Qf);
}
var Yf = 1, Zf = 2;
function ed(e, t) {
  return Vr(e) && oa(t) ? la(gt(e), t) : function(r) {
    var n = ht(r, e);
    return n === void 0 && n === t ? Jf(r, e) : Yt(t, n, Yf | Zf);
  };
}
function td(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function rd(e) {
  return function(t) {
    return Gi(t, e);
  };
}
function nd(e) {
  return Vr(e) ? td(gt(e)) : rd(e);
}
function bt(e) {
  return typeof e == "function" ? e : e == null ? hi : typeof e == "object" ? j(e) ? ed(e[0], e[1]) : Xf(e) : nd(e);
}
function id(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Rt(t)) {
      var a = bt(r);
      t = Mt(t), r = function(o) {
        return a(i[o], o, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
function ad(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var ti = 1 / 0, sd = 17976931348623157e292;
function od(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Or(e), e === ti || e === -ti) {
    var t = e < 0 ? -1 : 1;
    return t * sd;
  }
  return e === e ? e : 0;
}
function sn(e) {
  var t = od(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ld = Math.max;
function ud(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : sn(r);
  return i < 0 && (i = ld(n + i, 0)), ad(e, bt(t), i);
}
var cd = id(ud);
const on = cd, fd = {
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
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: []
    };
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]'), this.form.$put(this.field, this.multiple ? [] : null), this.filepond && this.initFilepond();
  },
  methods: {
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-preview")), e.push(import("filepond-plugin-image-exif-orientation"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond() {
      const e = this;
      import("filepond").then((t) => {
        const r = Object.assign({}, e.filepond, e.jsFilepondOptions, {
          onaddfile(n, i) {
            n || (e.server ? e.$emit("start-uploading", [i.id]) : e.addFiles([i.file]));
          },
          onremovefile(n, i) {
            n || e.removeFile(i.file);
          },
          onprocessfile(n, i) {
            n || (e.uploadedFiles.push({
              file: i.file,
              id: i.serverId
            }), e.addFiles([i.serverId]), e.$emit("stop-uploading", [i.id]));
          }
        });
        this.accept.length > 0 && (r.acceptedFileTypes = this.accept), this.minFileSize && (r.minFileSize = this.minFileSize), this.maxFileSize && (r.maxFileSize = this.maxFileSize), this.minImageWidth && (r.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (r.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (r.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (r.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (r.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (r.imageValidateSizeMaxResolution = this.maxImageResolution), this.server && (r.server = {
          process: (n, i, a, s, o, l, u) => {
            const c = new FormData();
            c.append("file", i, i.name);
            const f = ze.CancelToken.source();
            ze({
              url: e.server,
              method: "POST",
              data: c,
              cancelToken: f.token,
              onUploadProgress: (d) => {
                l(d.lengthComputable, d.loaded, d.total);
              }
            }).then((d) => {
              d.status >= 200 && d.status < 300 ? s(d.data) : o(d.statusText);
            }).catch(function(d) {
              var h;
              axios.isCancel(d) ? u() : o((h = d.response) == null ? void 0 : h.statusText);
            });
          },
          revert: (n, i, a) => {
            ze({
              url: e.server,
              method: "POST",
              data: { _method: "DELETE", file: n }
            }).then(() => {
              i();
            }).catch(function(s) {
              var o;
              a((o = s.response) == null ? void 0 : o.statusText);
            });
          }
        }), this.loadFilepondPlugins(t).then((n) => {
          n.length > 0 && t.registerPlugin(...n.map((i) => i.default)), this.filepondInstance = t.create(this.inputElement, r);
        });
      });
    },
    removeFile(e) {
      this.server && (e = on(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]);
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
}, dd = { ref: "file" };
function pd(e, t, r, n, i, a) {
  return L(), pe("div", dd, [
    ae(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const hd = /* @__PURE__ */ Ve(fd, [["render", pd]]), md = {
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
function ln(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ca(t, ua(r, n), e[n]);
  return t;
}
function ua(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ca(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ca(e, ua(t, n.toString()), r[n]));
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
  ln(r, e, t);
}
var vd = "[object Boolean]";
function fa(e) {
  return e === !0 || e === !1 || Oe(e) && Te(e) == vd;
}
function da(e, t) {
  var r = {};
  return t = bt(t), Lr(e, function(n, i, a) {
    Ki(r, i, t(n, i, a));
  }), r;
}
function pa(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function We(e, t, r) {
  return e = Wr(e), r = r == null ? 0 : pa(sn(r), 0, e.length), t = Wt(t), e.slice(r, r + t.length) == t;
}
const gd = {
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
    }
  },
  emits: ["success", "error"],
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
      elementsUploading: []
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
      return m.validationErrors(this.stack);
    },
    errors() {
      return da(this.rawErrors, (e) => e.join(`
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
    }, { deep: !0 }) : j(this.submitOnChange) && this.submitOnChange.forEach((r) => {
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
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return Xi(this.values, e, t);
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
        m.confirm(
          fa(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton
        ).then(() => {
          this.request();
        }).catch(() => {
        });
      }
    },
    async request() {
      if (this.$uploading)
        return;
      await this.$nextTick(), this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : ln(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), m.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch(async (n) => {
        if (this.processing = !1, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = on(Object.keys(this.errors), (a) => this.formElement.querySelector(`[data-validation-key="${a}"]`));
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
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) || We(r, "__v_") ? e[r] : (!e.isMounted && !G(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), ht(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, yd = {
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
}, bd = { ref: "input" };
function wd(e, t, r, n, i, a) {
  return L(), pe("div", bd, [
    ae(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Sd = /* @__PURE__ */ Ve(yd, [["render", wd]]), Od = {
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
        return m.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
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
        this.html = e.data.html;
      });
    }
  }
};
function $d(e, t, r, n, i, a) {
  const s = ai("Render");
  return i.html ? (L(), K(s, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? ae(e.$slots, "default", { key: 1 }) : kt("", !0);
}
const Ed = /* @__PURE__ */ Ve(Od, [["render", $d]]), xd = ["href", "onClick"], Td = {
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
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(
        fa(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.away)
        return window.location = t.href;
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      if (We(t.href, "#")) {
        if (m.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let i = t.method.trim().toUpperCase();
      if (i === "GET")
        return t.replace ? m.replace(t.href) : m.visit(t.href);
      const a = t.data instanceof FormData ? t.data : ln(t.data);
      i !== "POST" && (a.append("_method", i), i = "POST"), m.request(t.href, i, a, t.headers, t.replace);
    }
    return (i, a) => (L(), pe("a", {
      href: e.href,
      onClick: _a(r, ["prevent"])
    }, [
      ae(i.$slots, "default")
    ], 8, xd));
  }
}, _d = {
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
    name: {
      type: String,
      required: !1,
      default: null
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
      Dialog: Xr,
      DialogPanel: Qr,
      TransitionRoot: tt,
      TransitionChild: et
    });
  }
}, Ad = {
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
    return m.registerPreloadedModal(t.name, t.html, t.type), () => {
    };
  }
};
function Id(e, t) {
  var r = -1, n = Rt(e) ? Array(e.length) : [];
  return Fr(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
function ha(e, t) {
  var r = j(e) ? Pi : Id;
  return r(e, bt(t));
}
const Pd = {
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
      !this.remoteUrl || (this.loading = !0, ze({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (Y(t, (a) => {
          var s = document.createElement("option");
          s.value = a.value, s.text = a.label, a.value === this.modelValue && (i = !0), a.disabled && (s.disabled = a.disabled), a.placeholder && (s.placeholder = a.placeholder), this.element.appendChild(s);
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
      return !r && Q(e) ? this.optionValue && this.optionLabel ? t.push({
        value: ht(e, this.optionValue),
        label: ht(e, this.optionLabel)
      }) : Y(e, (n, i) => {
        t.push({ label: n, value: i });
      }) : r && e.forEach((n) => {
        this.normalizeOptions(n, t);
      }), t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ha(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return on(this.choicesInstance._store.choices, (t) => t.value == e);
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
          const a = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const s = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: !0 })), s.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (s.containerInner.element.setAttribute("dusk", n.dusk), s.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = s.getValue(!0);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                s.getValue().length >= r && s.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), s.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                s.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = s.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                s.choiceList.scrollToChildElement(l, 1), s._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = s, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, a);
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
}, Cd = { ref: "select" };
function qd(e, t, r, n, i, a) {
  return L(), pe("div", Cd, [
    ae(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const Dd = /* @__PURE__ */ Ve(Pd, [["render", qd]]), Ld = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = da(e, (i) => i.join(`
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
function Fd(e, t, r) {
  e = Wr(e), t = Wt(t);
  var n = e.length;
  r = r === void 0 ? n : pa(sn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function jd(e, t) {
  var r = [];
  return Fr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Bd(e, t) {
  var r = j(e) ? sa : jd;
  return r(e, bt(t));
}
function ri(e, t) {
  return Yt(e, t);
}
const kd = {
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
      return !ri(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = Zr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Y(e, (r, n) => {
      if (We(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Y(e, (t, r) => {
        We(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Bd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ha(r, (i) => i.key).sort();
      ri(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
        if (!Fd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), s = a[1].substring(0, a[1].length - 1);
        parseInt(s) == s ? (i = a[0], j(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (We(e, "perPage") || We(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var o;
      typeof r > "u" && (r = !0);
      let n = {};
      Y(e, (l, u) => {
        if (!j(l)) {
          n[u] = l;
          return;
        }
        l.length !== 0 && l.forEach((c, p) => {
          n[`${u}[${p}]`] = c;
        });
      });
      let i = "";
      Y(n, (l, u) => {
        l === null || l === [] || (i && (i += "&"), i += `${u}=${l}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      this.isLoading = !0;
      let s = null;
      typeof t < "u" && t && (s = (o = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : o.value), m.replace(a).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Fe(() => {
          const l = document.querySelector(`[name="${t.name}"]`);
          l.focus(), s && (l.value = s);
        });
      });
    },
    async performBulkAction(e, t, r, n, i) {
      if (t)
        try {
          await m.confirm(t === !0 ? "" : t, r, n, i);
        } catch {
          return !1;
        }
      this.isLoading = !0, m.request(e, "POST", { ids: this.selectedItems }, {}, !1).then((a) => {
        a.data;
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
}, Rd = {
  data() {
    return {
      isMounted: !1
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function Md(e, t, r, n, i, a) {
  return i.isMounted ? (L(), K(ii, Aa(Ia({ key: 0 }, e.$attrs)), [
    ae(e.$slots, "default")
  ], 16)) : kt("", !0);
}
const Nd = /* @__PURE__ */ Ve(Rd, [["render", Md]]), Vd = {
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
}, Hd = { ref: "textarea" };
function Ud(e, t, r, n, i, a) {
  return L(), pe("div", Hd, [
    ae(e.$slots, "default")
  ], 512);
}
const Wd = /* @__PURE__ */ Ve(Vd, [["render", Ud]]), zd = {
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
      TransitionRoot: tt,
      TransitionChild: et
    });
  }
}, Gd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Kd = {
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
      positions: Gd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      TransitionRoot: tt,
      TransitionChild: et
    });
  }
}, Xd = {
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
            if (n.length === 1 && ia(n) === "default") {
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
            return r === "setToggle" ? (i, a) => {
              e.setToggle(i, a);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Qd = {
  render() {
    return this.$slots.default({
      TransitionRoot: tt,
      TransitionChild: et
    });
  }
}, Jd = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && Fe(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Zr(i, 100)), i();
  }
}, Pr = {
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
    Pr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Pr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, rp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : !1, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, du).component(`${r}Data`, yu).component(`${r}Defer`, Cu).component(`${r}Dialog`, qu).component(`${r}Dropdown`, Mc).component(`${r}DynamicHtml`, Nc).component(`${r}Errors`, Vc).component(`${r}Event`, Hc).component(`${r}File`, hd).component(`${r}Flash`, md).component(`${r}Form`, gd).component(`${r}Input`, Sd).component(`${r}Lazy`, Ed).component(`${r}Modal`, _d).component(`${r}OnClickOutside`, Qi).component(`${r}PreloadedModal`, Ad).component(`${r}Render`, ue).component(`${r}Select`, Dd).component(`${r}State`, Ld).component(`${r}Table`, kd).component(`${r}Teleport`, Nd).component(`${r}Textarea`, Wd).component(`${r}Toast`, zd).component(`${r}Toasts`, Kd).component(`${r}Toggle`, Xd).component(`${r}Transition`, Qd).component(t.link_component, Td).directive(`${r}PreserveScroll`, Jd), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      Q(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Pr.init(t.progress_bar);
    }
    Y(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function np(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((a) => {
    const s = a.replace(/^-+/, "").split("=");
    n[s[0]] = s.length === 2 ? s[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (a, s) => {
    if (a.method == "POST") {
      let o = "";
      a.on("data", (l) => o += l), a.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        s.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), s.write(JSON.stringify({ body: c })), s.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  m as Splade,
  Ao as SpladeApp,
  rp as SpladePlugin,
  ep as renderSpladeApp,
  np as startServer
};
