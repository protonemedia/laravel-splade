import $e from "axios";
import { ref as b, computed as F, watch as bt, openBlock as L, createBlock as K, unref as V, createCommentVNode as Fr, h as R, onMounted as N, createElementBlock as me, createElementVNode as pr, provide as ae, inject as H, nextTick as _e, KeepAlive as ii, normalizeStyle as Dt, createVNode as Ea, Fragment as Cr, renderList as xa, cloneVNode as Ta, watchEffect as ne, defineComponent as W, onUnmounted as Fe, Teleport as ai, reactive as _a, onBeforeUnmount as Aa, renderSlot as se, resolveComponent as si, withCtx as oi, withModifiers as Ia, withDirectives as Pa, resolveDynamicComponent as Fa, normalizeProps as Ca, guardReactiveProps as qa, vShow as Da } from "vue";
function ka(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function La(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Ba = La();
const ja = Ba;
function Ma(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ra = typeof global == "object" && global && global.Object === Object && global;
const li = Ra;
var Na = typeof self == "object" && self && self.Object === Object && self, Va = li || Na || Function("return this")();
const ce = Va;
var Ha = ce.Symbol;
const Ae = Ha;
var ui = Object.prototype, Ua = ui.hasOwnProperty, Wa = ui.toString, ct = Ae ? Ae.toStringTag : void 0;
function za(e) {
  var t = Ua.call(e, ct), r = e[ct];
  try {
    e[ct] = void 0;
    var n = !0;
  } catch {
  }
  var i = Wa.call(e);
  return n && (t ? e[ct] = r : delete e[ct]), i;
}
var Ga = Object.prototype, Ka = Ga.toString;
function Xa(e) {
  return Ka.call(e);
}
var Ya = "[object Null]", Qa = "[object Undefined]", bn = Ae ? Ae.toStringTag : void 0;
function Ce(e) {
  return e == null ? e === void 0 ? Qa : Ya : bn && bn in Object(e) ? za(e) : Xa(e);
}
function Ie(e) {
  return e != null && typeof e == "object";
}
var Ja = "[object Arguments]";
function wn(e) {
  return Ie(e) && Ce(e) == Ja;
}
var ci = Object.prototype, Za = ci.hasOwnProperty, es = ci.propertyIsEnumerable, ts = wn(function() {
  return arguments;
}()) ? wn : function(e) {
  return Ie(e) && Za.call(e, "callee") && !es.call(e, "callee");
};
const di = ts;
var rs = Array.isArray;
const M = rs;
function ns() {
  return !1;
}
var fi = typeof exports == "object" && exports && !exports.nodeType && exports, Sn = fi && typeof module == "object" && module && !module.nodeType && module, is = Sn && Sn.exports === fi, On = is ? ce.Buffer : void 0, as = On ? On.isBuffer : void 0, ss = as || ns;
const hr = ss;
var os = 9007199254740991, ls = /^(?:0|[1-9]\d*)$/;
function qr(e, t) {
  var r = typeof e;
  return t = t == null ? os : t, !!t && (r == "number" || r != "symbol" && ls.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var us = 9007199254740991;
function Dr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= us;
}
var cs = "[object Arguments]", ds = "[object Array]", fs = "[object Boolean]", ps = "[object Date]", hs = "[object Error]", ms = "[object Function]", vs = "[object Map]", gs = "[object Number]", ys = "[object Object]", bs = "[object RegExp]", ws = "[object Set]", Ss = "[object String]", Os = "[object WeakMap]", $s = "[object ArrayBuffer]", Es = "[object DataView]", xs = "[object Float32Array]", Ts = "[object Float64Array]", _s = "[object Int8Array]", As = "[object Int16Array]", Is = "[object Int32Array]", Ps = "[object Uint8Array]", Fs = "[object Uint8ClampedArray]", Cs = "[object Uint16Array]", qs = "[object Uint32Array]", C = {};
C[xs] = C[Ts] = C[_s] = C[As] = C[Is] = C[Ps] = C[Fs] = C[Cs] = C[qs] = !0;
C[cs] = C[ds] = C[$s] = C[fs] = C[Es] = C[ps] = C[hs] = C[ms] = C[vs] = C[gs] = C[ys] = C[bs] = C[ws] = C[Ss] = C[Os] = !1;
function Ds(e) {
  return Ie(e) && Dr(e.length) && !!C[Ce(e)];
}
function ks(e) {
  return function(t) {
    return e(t);
  };
}
var pi = typeof exports == "object" && exports && !exports.nodeType && exports, ht = pi && typeof module == "object" && module && !module.nodeType && module, Ls = ht && ht.exports === pi, ar = Ls && li.process, Bs = function() {
  try {
    var e = ht && ht.require && ht.require("util").types;
    return e || ar && ar.binding && ar.binding("util");
  } catch {
  }
}();
const $n = Bs;
var En = $n && $n.isTypedArray, js = En ? ks(En) : Ds;
const hi = js;
var Ms = Object.prototype, Rs = Ms.hasOwnProperty;
function Ns(e, t) {
  var r = M(e), n = !r && di(e), i = !r && !n && hr(e), a = !r && !n && !i && hi(e), s = r || n || i || a, o = s ? Ma(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Rs.call(e, u)) && !(s && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || qr(u, l))) && o.push(u);
  return o;
}
var Vs = Object.prototype;
function Hs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vs;
  return e === r;
}
function Us(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ws = Us(Object.keys, Object);
const zs = Ws;
var Gs = Object.prototype, Ks = Gs.hasOwnProperty;
function Xs(e) {
  if (!Hs(e))
    return zs(e);
  var t = [];
  for (var r in Object(e))
    Ks.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function U(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ys = "[object AsyncFunction]", Qs = "[object Function]", Js = "[object GeneratorFunction]", Zs = "[object Proxy]";
function mi(e) {
  if (!U(e))
    return !1;
  var t = Ce(e);
  return t == Qs || t == Js || t == Ys || t == Zs;
}
function Rt(e) {
  return e != null && Dr(e.length) && !mi(e);
}
function Nt(e) {
  return Rt(e) ? Ns(e) : Xs(e);
}
function kr(e, t) {
  return e && ja(e, t, Nt);
}
function eo(e, t) {
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
var to = eo(kr);
const Lr = to;
function vi(e) {
  return e;
}
function gi(e) {
  return typeof e == "function" ? e : vi;
}
function ro(e, t) {
  var r = M(e) ? ka : Lr;
  return r(e, gi(t));
}
function ee(e, t) {
  return e && kr(e, gi(t));
}
var no = Array.prototype, io = no.reverse;
function ao(e) {
  return e == null ? e : io.call(e);
}
const kt = b(0), mr = b(1), q = b({}), te = b(0), Vt = b({}), ve = typeof window > "u";
function so(e, t, r) {
  ve || window.addEventListener("popstate", oo.bind(this)), Object.keys(t).length > 0 && kt.value++, Rr(r), Ht(r.head), Nr(e);
  const n = ve ? "" : location.href, i = Br(
    n,
    r.head,
    e,
    t,
    {},
    mr.value,
    kt.value,
    r.persistentLayout
  );
  yi(i);
}
function oo(e) {
  !e.state || (q.value = e.state, te.value = 0, Vt.value = {}, Vr.value = {}, jr.value = q.value.persistentLayoutKey, Ht(q.value.head), Nr(q.value.html, q.value.rememberedState.scrollY));
}
function Br(e, t, r, n, i, a, s, o) {
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
  return q.value = l, l;
}
function lo(e) {
  ve || window.history.pushState(e, "", e.url);
}
function uo(e) {
  const t = Br(
    e,
    JSON.parse(JSON.stringify(q.value.head)),
    q.value.html,
    JSON.parse(JSON.stringify(q.value.dynamics)),
    { ...q.value.rememberedState },
    q.value.pageVisitId,
    q.value.dynamicVisitId,
    q.value.persistentLayoutKey
  );
  ve || window.history.replaceState(t, "", t.url);
}
function yi(e) {
  ve || window.history.replaceState(e, "", e.url);
}
const sr = b(0), jr = b(null);
function co(e, t) {
  var p;
  sr.value++;
  const r = e.request.responseURL;
  if (U((p = e.data) == null ? void 0 : p.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && te.value++;
  const n = jr.value;
  if (Rr(e.data.splade), Ht(e.data.splade.head), r === q.value.url && (t = !0), e.data.splade.modal)
    return Ai(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  te.value = 0, Vt.value = {};
  let i = e.data.html, a = e.data.dynamics;
  const s = Object.keys(q.value.dynamics).length > 0, o = Object.keys(a).length > 0;
  t ? (o && ee(a, (f, d) => {
    a[d] += `<!-- ${sr.value} -->`;
  }), (!o || !s) && (i += `<!-- ${sr.value} -->`)) : (o && kt.value++, (!o || !s) && mr.value++);
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !ve && t && e.data.splade.preserveScroll && (u = window.scrollY), Nr(
    l ? q.value.html : i,
    u
  );
  const c = Br(
    r,
    e.data.splade.head,
    l ? q.value.html : i,
    a,
    q.value.rememberedState ? { ...q.value.rememberedState } : {},
    mr.value,
    kt.value,
    e.data.splade.persistentLayout
  );
  t ? yi(c) : lo(c);
}
function fo() {
  te.value--, Ht(ho(te.value));
}
const bi = b({}), wi = (e) => bi.value[e], po = (e) => Object.keys(wi.value[e]).length > 0, Si = b({}), ho = (e) => Si.value[e], Oi = b({}), mo = (e) => Oi.value[e], Ze = b([]);
function vo(e) {
  Ze.value.push(e);
}
const go = F(() => ao(Ze.value));
function yo(e) {
  Ze.value[e].dismissed = !0, Ze.value[e].html = null;
}
const Mr = b(null);
function bo(e, t, r, n) {
  let i, a;
  const s = new Promise((o, l) => {
    i = o, a = l;
  });
  return Mr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, s;
}
function wo() {
  Mr.value = null;
}
const $i = b({});
function Rr(e) {
  jr.value = e.persistentLayout, $i.value = e.shared ? e.shared : {}, Oi.value[te.value] = e.flash ? e.flash : {}, Si.value[te.value] = e.head ? e.head : {}, ro(e.toasts ? e.toasts : [], (t) => {
    Ze.value.push(t);
  }), bi.value[te.value] = e.errors ? e.errors : {};
}
const Ei = b(() => {
}), xi = b(() => {
}), Ti = b(() => {
}), _i = b(() => {
});
function Ht(e) {
  Ei.value(e);
}
function Nr(e, t) {
  xi.value(e, t);
}
function Ai(e, t) {
  Vt.value[te.value] = !0, Ti.value(e, t);
}
function So(e) {
  return Vt.value[e];
}
function Oo(e) {
  _i.value(e);
}
const Ii = b({});
function Pi(e, t, r) {
  Ii.value[e] = t, r && $o(e, t);
}
function $o(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Eo(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ii.value[e];
}
function Tt(e, t) {
  ve || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function it(e, t, r, n, i) {
  if (ve || Pi("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const s = new URLSearchParams(r).toString();
    s != "" && (e = `${e.split("?")[0]}?${s}`), r = {};
  }
  Tt("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = $e({
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
      r instanceof FormData && (s.percentage = Math.round(s.loaded / s.total * 100), Tt("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: s }));
    }
  });
  return a.then((s) => {
    co(s, i), Tt("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: s });
  }).catch((s) => {
    if (Tt("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: s }), !s.response)
      return;
    if (s.response.status == 409 && s.response.headers["x-splade-redirect-away"])
      return window.location = s.response.headers["x-splade-redirect-away"];
    const o = s.response.data.splade;
    o && (o.lazy || Rr(o)), s.response.status != 422 && Oo(
      s.response.data.html ? s.response.data.html : s.response.data
    );
  }), a;
}
function Fi(e, t) {
  return typeof t > "u" && (t = {}), it(e, "GET", {}, t, !0);
}
function xo(e, t) {
  return typeof t > "u" && (t = {}), it(e, "GET", {}, t, !1);
}
function To(e) {
  return it(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const Vr = b({});
function _o(e) {
  const t = Vr.value[e];
  return t ? (te.value++, Ai(t.html, t.type), !0) : !1;
}
function Ao(e, t, r) {
  Vr.value[e] = { html: t, type: r };
}
function Io(e) {
  return it(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Po(e, t) {
  return it(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Fo() {
  return Fi(q.value.url);
}
const v = {
  init: so,
  replace: Fi,
  visit: xo,
  modal: To,
  slideover: Io,
  refresh: Fo,
  request: it,
  lazy: Po,
  replaceUrlOfCurrentPage: uo,
  htmlForDynamicComponent(e) {
    return q.value.dynamics[e];
  },
  setOnHead(e) {
    Ei.value = e;
  },
  setOnHtml(e) {
    xi.value = e;
  },
  setOnModal(e) {
    Ti.value = e;
  },
  setOnServerError(e) {
    _i.value = e;
  },
  hasValidationErrors: po,
  validationErrors: wi,
  sharedData: $i,
  flashData: mo,
  toasts: Ze,
  toastsReversed: go,
  confirmModal: Mr,
  confirm: bo,
  clearConfirmModal: wo,
  pushToast: vo,
  dismissToast: yo,
  restore: Eo,
  remember: Pi,
  popStack: fo,
  currentStack: te,
  stackType: So,
  pageVisitId: F(() => q.value.pageVisitId),
  dynamicVisitId: F(() => q.value.dynamicVisitId),
  isSsr: ve,
  openPreloadedModal: _o,
  registerPreloadedModal: Ao
};
var Co = "[object String]";
function Ee(e) {
  return typeof e == "string" || !M(e) && Ie(e) && Ce(e) == Co;
}
const de = {
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
      r.value = R({
        template: t.html
      });
    }
    return bt(() => t.html, n, { immediate: !0 }), (i, a) => e.html ? (L(), K(V(r), { key: 0 })) : Fr("", !0);
  }
}, qo = {
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
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(o) {
      o.keyCode === 27 && s();
    }
    function s() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    return N(() => i()), (o, l) => (L(), me("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: s
    }, [
      pr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Do = {
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
          const t = Ee(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Ee(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Ee(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = Ee(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    ae("stack", 0);
    const r = b(), n = b([]), i = b(null), a = b(null), s = b(!0), o = H("$spladeOptions") || {}, l = F(() => v.currentStack.value < 1 ? [] : {
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
      ee(d, (m, g) => {
        h[g] = m;
      }), document.getElementsByTagName("head")[0].appendChild(h);
    }
    function f(d) {
      var m;
      let h = "meta";
      ee(d, (g, x) => {
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
        if (a.value === null) {
          a.value = d.meta;
          return;
        }
        if (a.value.forEach((m) => {
          f(m);
        }), a.value = d.meta, document.title = d.title, d.meta.forEach((m) => {
          p(m);
        }), (h = document.querySelector('link[rel="canonical"]')) == null || h.remove(), d.canonical) {
          const m = document.createElement("link");
          m.rel = "canonical", m.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(m);
        }
      }
    }), v.setOnHtml((d, h) => {
      n.value = [], r.value = d, _e(() => {
        v.isSsr || window.scrollTo(0, h), o.transform_anchors && [...document.querySelectorAll("a")].forEach((m) => {
          m.href == "" || m.href.charAt(0) == "#" || m.__vnode.dynamicProps === null && (m.hasAttribute("download") || (m.onclick = function(g) {
            g.preventDefault(), v.visit(m.href);
          }));
        });
      });
    }), v.setOnModal(function(d, h) {
      n.value[v.currentStack.value] && (s.value = !1), n.value[v.currentStack.value] = { html: d, type: h }, _e(() => {
        s.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), N(() => {
      if (v.isSsr)
        return;
      const d = Ee(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((h) => {
        delete d.dataset[h];
      });
    }), (d, h) => (L(), me("div", null, [
      V(v).isSsr ? (L(), K(de, {
        key: `visit.${V(v).pageVisitId.value}`,
        style: Dt(V(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (L(), K(ii, {
        key: 0,
        max: V(o).max_keep_alive
      }, [
        (L(), K(de, {
          key: `visit.${V(v).pageVisitId.value}`,
          style: Dt(V(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      Ea(de, { html: e.components }, null, 8, ["html"]),
      (L(!0), me(Cr, null, xa(V(v).currentStack.value, (m) => (L(), K(de, {
        key: `modal.${m}`,
        type: n.value[m].type,
        html: n.value[m].html,
        stack: m,
        "on-top-of-stack": V(v).currentStack.value === m,
        animate: s.value,
        onClose: (g) => c(m)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (L(), K(qo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Fr("", !0)
    ]));
  }
};
function ap(e) {
  return () => R(Do, e);
}
var ko = Object.prototype, Lo = ko.hasOwnProperty;
function Bo(e, t) {
  return e != null && Lo.call(e, t);
}
var jo = "[object Symbol]";
function Ut(e) {
  return typeof e == "symbol" || Ie(e) && Ce(e) == jo;
}
var Mo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ro = /^\w*$/;
function Hr(e, t) {
  if (M(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ut(e) ? !0 : Ro.test(e) || !Mo.test(e) || t != null && e in Object(t);
}
var No = ce["__core-js_shared__"];
const or = No;
var xn = function() {
  var e = /[^.]+$/.exec(or && or.keys && or.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vo(e) {
  return !!xn && xn in e;
}
var Ho = Function.prototype, Uo = Ho.toString;
function He(e) {
  if (e != null) {
    try {
      return Uo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wo = /[\\^$.*+?()[\]{}|]/g, zo = /^\[object .+?Constructor\]$/, Go = Function.prototype, Ko = Object.prototype, Xo = Go.toString, Yo = Ko.hasOwnProperty, Qo = RegExp(
  "^" + Xo.call(Yo).replace(Wo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jo(e) {
  if (!U(e) || Vo(e))
    return !1;
  var t = mi(e) ? Qo : zo;
  return t.test(He(e));
}
function Zo(e, t) {
  return e == null ? void 0 : e[t];
}
function Ue(e, t) {
  var r = Zo(e, t);
  return Jo(r) ? r : void 0;
}
var el = Ue(Object, "create");
const vt = el;
function tl() {
  this.__data__ = vt ? vt(null) : {}, this.size = 0;
}
function rl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nl = "__lodash_hash_undefined__", il = Object.prototype, al = il.hasOwnProperty;
function sl(e) {
  var t = this.__data__;
  if (vt) {
    var r = t[e];
    return r === nl ? void 0 : r;
  }
  return al.call(t, e) ? t[e] : void 0;
}
var ol = Object.prototype, ll = ol.hasOwnProperty;
function ul(e) {
  var t = this.__data__;
  return vt ? t[e] !== void 0 : ll.call(t, e);
}
var cl = "__lodash_hash_undefined__";
function dl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = vt && t === void 0 ? cl : t, this;
}
function Re(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Re.prototype.clear = tl;
Re.prototype.delete = rl;
Re.prototype.get = sl;
Re.prototype.has = ul;
Re.prototype.set = dl;
function fl() {
  this.__data__ = [], this.size = 0;
}
function Ur(e, t) {
  return e === t || e !== e && t !== t;
}
function Wt(e, t) {
  for (var r = e.length; r--; )
    if (Ur(e[r][0], t))
      return r;
  return -1;
}
var pl = Array.prototype, hl = pl.splice;
function ml(e) {
  var t = this.__data__, r = Wt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : hl.call(t, r, 1), --this.size, !0;
}
function vl(e) {
  var t = this.__data__, r = Wt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function gl(e) {
  return Wt(this.__data__, e) > -1;
}
function yl(e, t) {
  var r = this.__data__, n = Wt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = fl;
ge.prototype.delete = ml;
ge.prototype.get = vl;
ge.prototype.has = gl;
ge.prototype.set = yl;
var bl = Ue(ce, "Map");
const gt = bl;
function wl() {
  this.size = 0, this.__data__ = {
    hash: new Re(),
    map: new (gt || ge)(),
    string: new Re()
  };
}
function Sl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function zt(e, t) {
  var r = e.__data__;
  return Sl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ol(e) {
  var t = zt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function $l(e) {
  return zt(this, e).get(e);
}
function El(e) {
  return zt(this, e).has(e);
}
function xl(e, t) {
  var r = zt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ye.prototype.clear = wl;
ye.prototype.delete = Ol;
ye.prototype.get = $l;
ye.prototype.has = El;
ye.prototype.set = xl;
var Tl = "Expected a function";
function Wr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Tl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (Wr.Cache || ye)(), r;
}
Wr.Cache = ye;
var _l = 500;
function Al(e) {
  var t = Wr(e, function(n) {
    return r.size === _l && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Il = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pl = /\\(\\)?/g, Fl = Al(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Il, function(r, n, i, a) {
    t.push(i ? a.replace(Pl, "$1") : n || r);
  }), t;
});
const Cl = Fl;
function Ci(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ql = 1 / 0, Tn = Ae ? Ae.prototype : void 0, _n = Tn ? Tn.toString : void 0;
function Gt(e) {
  if (typeof e == "string")
    return e;
  if (M(e))
    return Ci(e, Gt) + "";
  if (Ut(e))
    return _n ? _n.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ql ? "-0" : t;
}
function zr(e) {
  return e == null ? "" : Gt(e);
}
function Gr(e, t) {
  return M(e) ? e : Hr(e, t) ? [e] : Cl(zr(e));
}
var Dl = 1 / 0;
function wt(e) {
  if (typeof e == "string" || Ut(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Dl ? "-0" : t;
}
function qi(e, t, r) {
  t = Gr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = wt(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Dr(i) && qr(s, i) && (M(e) || di(e)));
}
function G(e, t) {
  return e != null && qi(e, t, Bo);
}
function X(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, X), n;
}
var Lt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Lt || {}), Te = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Te || {});
function z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let s = kl(n, r), o = Object.assign(i, { props: s });
  if (e || t & 2 && s.static)
    return lr(o);
  if (t & 1) {
    let l = (a = s.unmount) == null || a ? 0 : 1;
    return X(l, { [0]() {
      return null;
    }, [1]() {
      return lr({ ...i, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return lr(o);
}
function lr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: s, ...o } = ki(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (s === "template") {
    if (l = Di(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!Ll(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return Ta(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return R(s, Object.assign({}, o, u), { default: () => l });
}
function Di(e) {
  return e.flatMap((t) => t.type === Cr ? Di(t.children) : [t]);
}
function kl(...e) {
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
function ki(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Ll(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Bl = 0;
function jl() {
  return ++Bl;
}
function We() {
  return jl();
}
var Li = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Li || {});
function oe(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Bi = Symbol("Context");
var Ne = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ne || {});
function Ml() {
  return Kr() !== null;
}
function Kr() {
  return H(Bi, null);
}
function Rl(e) {
  ae(Bi, e);
}
const Kt = typeof window > "u" || typeof document > "u";
function at(e) {
  if (Kt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = oe(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let vr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var xe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(xe || {}), ji = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ji || {}), Nl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Nl || {});
function Vl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(vr)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Mi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mi || {});
function Hl(e, t = 0) {
  var r;
  return e === ((r = at(e)) == null ? void 0 : r.body) ? !1 : X(t, { [0]() {
    return e.matches(vr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(vr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Qe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ul = ["textarea", "input"].join(",");
function Wl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ul)) != null ? r : !1;
}
function zl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ft(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var a;
  let s = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, o = Array.isArray(e) ? r ? zl(e) : e : Vl(e);
  i.length > 0 && (o = o.filter((h) => !i.includes(h))), n = n != null ? n : s.activeElement;
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
  } while (d !== s.activeElement);
  return t & 6 && Wl(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function ur(e, t, r) {
  Kt || ne((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Gl(e, t, r = F(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : oe(u);
      if (c != null && c.contains(o) || a.composed && a.composedPath().includes(c))
        return;
    }
    return !Hl(o, Mi.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  let i = b(null);
  ur("mousedown", (a) => {
    var s, o;
    r.value && (i.value = ((o = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : o[0]) || a.target);
  }, !0), ur("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), ur("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Bt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Bt || {});
let gr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Kl(e, t, r) {
  Kt || ne((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var pt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(pt || {});
function Xl() {
  let e = b(0);
  return Kl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ri(e, t, r, n) {
  Kt || ne((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Yl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Ni = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ni || {});
let dt = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: b(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = b(null);
  n({ el: i, $el: i });
  let a = F(() => at(i));
  Ql({ ownerDocument: a }, F(() => Boolean(e.features & 16)));
  let s = Jl({ ownerDocument: a, container: i, initialFocus: F(() => e.initialFocus) }, F(() => Boolean(e.features & 2)));
  Zl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, F(() => Boolean(e.features & 8)));
  let o = Xl();
  function l(f) {
    let d = oe(i);
    !d || ((h) => h())(() => {
      X(o.value, { [pt.Forwards]: () => Ft(d, xe.First, { skipElements: [f.relatedTarget] }), [pt.Backwards]: () => Ft(d, xe.Last, { skipElements: [f.relatedTarget] }) });
    });
  }
  let u = b(!1);
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
    !m || m.dataset.headlessuiFocusGuard !== "true" && (Vi(h, m) || (u.value ? Ft(oe(i), X(o.value, { [pt.Forwards]: () => xe.Next, [pt.Backwards]: () => xe.Previous }) | xe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && Qe(f.target)));
  }
  return () => {
    let f = {}, d = { ref: i, onKeydown: c, onFocusout: p }, { features: h, initialFocus: m, containers: g, ...x } = e;
    return R(Cr, [Boolean(h & 4) && R(gr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Bt.Focusable }), z({ ourProps: d, theirProps: { ...t, ...x }, slot: f, attrs: t, slots: r, name: "FocusTrap" }), Boolean(h & 4) && R(gr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Bt.Focusable })]);
  };
} }), { features: Ni });
function Ql({ ownerDocument: e }, t) {
  let r = b(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (Qe(r.value), r.value = null);
  }
  N(() => {
    bt(t, (a, s) => {
      a !== s && (a ? n() : i());
    }, { immediate: !0 });
  }), Fe(i);
}
function Jl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = b(null), a = b(!1);
  return N(() => a.value = !0), Fe(() => a.value = !1), N(() => {
    bt([t, r, n], (s, o) => {
      if (s.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = oe(t);
      !l || Yl(() => {
        var u, c;
        if (!a.value)
          return;
        let p = oe(r), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        p ? Qe(p) : Ft(l, xe.First | xe.NoScroll) === ji.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Zl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  Ri((a = e.value) == null ? void 0 : a.defaultView, "focus", (s) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = s.target;
    u && u instanceof HTMLElement ? Vi(o, u) ? (n.value = u, Qe(u)) : (s.preventDefault(), s.stopPropagation(), Qe(l)) : Qe(n.value);
  }, !0);
}
function Vi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let An = "body > *", Xe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map();
function In(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Pn(e) {
  let t = Oe.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function eu(e, t = b(!0)) {
  ne((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = at(n);
    if (i) {
      Xe.add(n);
      for (let a of Oe.keys())
        a.contains(n) && (Pn(a), Oe.delete(a));
      i.querySelectorAll(An).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let s of Xe)
            if (a.contains(s))
              return;
          Xe.size === 1 && (Oe.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), In(a));
        }
      }), r(() => {
        if (Xe.delete(n), Xe.size > 0)
          i.querySelectorAll(An).forEach((a) => {
            if (a instanceof HTMLElement && !Oe.has(a)) {
              for (let s of Xe)
                if (a.contains(s))
                  return;
              Oe.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), In(a);
            }
          });
        else
          for (let a of Oe.keys())
            Pn(a), Oe.delete(a);
      });
    }
  });
}
let Hi = Symbol("ForcePortalRootContext");
function tu() {
  return H(Hi, !1);
}
let yr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return ae(Hi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function ru(e) {
  let t = at(e);
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
let Ui = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = b(null), i = F(() => at(n)), a = tu(), s = H(Wi, null), o = b(a === !0 || s == null ? ru(n.value) : s.resolveTarget());
  return ne(() => {
    a || s != null && (o.value = s.resolveTarget());
  }), Fe(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return R(ai, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Wi = Symbol("PortalGroupContext"), nu = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = _a({ resolveTarget() {
    return e.target;
  } });
  return ae(Wi, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), zi = Symbol("StackContext");
var br = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(br || {});
function iu() {
  return H(zi, () => {
  });
}
function au({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = iu();
  function a(...s) {
    n == null || n(...s), i(...s);
  }
  N(() => {
    bt(t, (s, o) => {
      s ? a(0, e, r) : o === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Fe(() => {
    t.value && a(1, e, r);
  }), ae(zi, a);
}
let Gi = Symbol("DescriptionContext");
function su() {
  let e = H(Gi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function ou({ slot: e = b({}), name: t = "Description", props: r = {} } = {}) {
  let n = b([]);
  function i(a) {
    return n.value.push(a), () => {
      let s = n.value.indexOf(a);
      s !== -1 && n.value.splice(s, 1);
    };
  }
  return ae(Gi, { register: i, slot: e, name: t, props: r }), F(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let sp = W({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${We()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = su();
  return N(() => Fe(n.register(e.id))), () => {
    let { name: i = "Description", slot: a = b({}), props: s = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(s).reduce((c, [p, f]) => Object.assign(c, { [p]: V(f) }), {}), id: o };
    return z({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: i });
  };
} });
function Xr() {
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
function lu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var uu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(uu || {});
let wr = Symbol("DialogContext");
function St(e) {
  let t = H(wr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, St), r;
  }
  return t;
}
let _t = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Yr = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: _t }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${We()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let s = b(!1);
  N(() => {
    s.value = !0;
  });
  let o = b(0), l = Kr(), u = F(() => e.open === _t && l !== null ? X(l.value, { [Ne.Open]: !0, [Ne.Closed]: !1 }) : e.open), c = b(/* @__PURE__ */ new Set()), p = b(null), f = b(null), d = F(() => at(p));
  if (i({ el: p, $el: p }), !(e.open !== _t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === _t ? void 0 : e.open}`);
  let h = F(() => s.value && u.value ? 0 : 1), m = F(() => h.value === 0), g = F(() => o.value > 1), x = H(wr, null) !== null, A = F(() => g.value ? "parent" : "leaf");
  eu(p, F(() => g.value ? m.value : !1)), au({ type: "Dialog", enabled: F(() => h.value === 0), element: p, onUpdate: (w, O, $) => {
    if (O === "Dialog")
      return X(w, { [br.Add]() {
        c.value.add($), o.value += 1;
      }, [br.Remove]() {
        c.value.delete($), o.value -= 1;
      } });
  } });
  let I = ou({ name: "DialogDescription", slot: F(() => ({ open: u.value })) }), E = b(null), S = { titleId: E, panelRef: b(null), dialogState: h, setTitleId(w) {
    E.value !== w && (E.value = w);
  }, close() {
    t("close", !1);
  } };
  ae(wr, S);
  function y() {
    var w, O, $;
    return [...Array.from((O = (w = d.value) == null ? void 0 : w.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(oe(f)) || S.panelRef.value && T.contains(S.panelRef.value))), ($ = S.panelRef.value) != null ? $ : p.value];
  }
  return Gl(() => y(), (w, O) => {
    S.close(), _e(() => O == null ? void 0 : O.focus());
  }, F(() => h.value === 0 && !g.value)), Ri((a = d.value) == null ? void 0 : a.defaultView, "keydown", (w) => {
    w.defaultPrevented || w.key === Li.Escape && h.value === 0 && (g.value || (w.preventDefault(), w.stopPropagation(), S.close()));
  }), ne((w) => {
    var O;
    if (h.value !== 0 || x)
      return;
    let $ = d.value;
    if (!$)
      return;
    let T = Xr(), _ = window.pageYOffset;
    function D(B, P, j) {
      let be = B.style.getPropertyValue(P);
      return Object.assign(B.style, { [P]: j }), T.add(() => {
        Object.assign(B.style, { [P]: be });
      });
    }
    let k = $ == null ? void 0 : $.documentElement, J = ((O = $.defaultView) != null ? O : window).innerWidth - k.clientWidth;
    if (D(k, "overflow", "hidden"), J > 0) {
      let B = k.clientWidth - k.offsetWidth, P = J - B;
      D(k, "paddingRight", `${P}px`);
    }
    if (lu()) {
      D($.body, "marginTop", `-${_}px`), window.scrollTo(0, 0);
      let B = null;
      T.addEventListener($, "click", (P) => {
        if (P.target instanceof HTMLElement)
          try {
            let j = P.target.closest("a");
            if (!j)
              return;
            let { hash: be } = new URL(j.href), Z = $.querySelector(be);
            Z && !y().some((Ge) => Ge.contains(Z)) && (B = Z);
          } catch {
          }
      }, !0), T.addEventListener($, "touchmove", (P) => {
        P.target instanceof HTMLElement && !y().some((j) => j.contains(P.target)) && P.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + _), B && B.isConnected && (B.scrollIntoView({ block: "nearest" }), B = null);
      });
    }
    w(T.dispose);
  }), ne((w) => {
    if (h.value !== 0)
      return;
    let O = oe(p);
    if (!O)
      return;
    let $ = new IntersectionObserver((T) => {
      for (let _ of T)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && S.close();
    });
    $.observe(O), w(() => $.disconnect());
  }), () => {
    let { id: w, open: O, initialFocus: $, ...T } = e, _ = { ...r, ref: p, id: w, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": I.value }, D = { open: h.value === 0 };
    return R(yr, { force: !0 }, () => [R(Ui, () => R(nu, { target: p.value }, () => R(yr, { force: !1 }, () => R(dt, { initialFocus: $, containers: c, features: m.value ? X(A.value, { parent: dt.features.RestoreFocus, leaf: dt.features.All & ~dt.features.FocusLock }) : dt.features.None }, () => z({ ourProps: _, theirProps: T, slot: D, attrs: r, slots: n, visible: h.value === 0, features: Lt.RenderStrategy | Lt.Static, name: "Dialog" }))))), R(gr, { features: Bt.Hidden, ref: f })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${We()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = St("DialogOverlay");
  function i(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...s } = e;
    return z({ ourProps: { id: a, "aria-hidden": !0, onClick: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${We()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = St("DialogBackdrop"), a = b(null);
  return n({ el: a, $el: a }), N(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...o } = e, l = { id: s, ref: a, "aria-hidden": !0 };
    return R(yr, { force: !0 }, () => R(Ui, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Qr = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${We()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = St("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...o } = e, l = { id: s, ref: i.panelRef, onClick: a };
    return z({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${We()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = St("DialogTitle");
  return N(() => {
    n.setTitleId(e.id), Fe(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...a } = e;
    return z({ ourProps: { id: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function cu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function cr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function At(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Sr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Sr || {});
function du(e, t) {
  let r = Xr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, s] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + s) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Fn(e, t, r, n, i, a) {
  let s = Xr(), o = a !== void 0 ? cu(a) : () => {
  };
  return At(e, ...i), cr(e, ...t, ...r), s.nextFrame(() => {
    At(e, ...r), cr(e, ...n), s.add(du(e, (l) => (At(e, ...n, ...t), cr(e, ...i), o(l))));
  }), s.add(() => At(e, ...t, ...r, ...n, ...i)), s.add(() => o("cancelled")), s.dispose;
}
function Le(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Jr = Symbol("TransitionContext");
var fu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(fu || {});
function pu() {
  return H(Jr, null) !== null;
}
function hu() {
  let e = H(Jr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function mu() {
  let e = H(Zr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Zr = Symbol("NestingContext");
function Xt(e) {
  return "children" in e ? Xt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ki(e) {
  let t = b([]), r = b(!1);
  N(() => r.value = !0), Fe(() => r.value = !1);
  function n(a, s = Te.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === a);
    o !== -1 && (X(s, { [Te.Unmount]() {
      t.value.splice(o, 1);
    }, [Te.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Xt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let s = t.value.find(({ id: o }) => o === a);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, Te.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Xi = Lt.RenderStrategy, st = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!pu() && Ml())
    return () => R(ot, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = b(null), s = b("visible"), o = F(() => e.unmount ? Te.Unmount : Te.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = hu(), { register: c, unregister: p } = mu(), f = { value: !0 }, d = We(), h = { value: !1 }, m = Ki(() => {
    h.value || (s.value = "hidden", p(d), t("afterLeave"));
  });
  N(() => {
    let O = c(d);
    Fe(O);
  }), ne(() => {
    if (o.value === Te.Hidden && !!d) {
      if (l && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      X(s.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let g = Le(e.enter), x = Le(e.enterFrom), A = Le(e.enterTo), I = Le(e.entered), E = Le(e.leave), S = Le(e.leaveFrom), y = Le(e.leaveTo);
  N(() => {
    ne(() => {
      if (s.value === "visible") {
        let O = oe(a);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function w(O) {
    let $ = f.value && !u.value, T = oe(a);
    !T || !(T instanceof HTMLElement) || $ || (h.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), O(l.value ? Fn(T, g, x, A, I, (_) => {
      h.value = !1, _ === Sr.Finished && t("afterEnter");
    }) : Fn(T, E, S, y, I, (_) => {
      h.value = !1, _ === Sr.Finished && (Xt(m) || (s.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return N(() => {
    bt([l], (O, $, T) => {
      w(T), f.value = !1;
    }, { immediate: !0 });
  }), ae(Zr, m), Rl(F(() => X(s.value, { visible: Ne.Open, hidden: Ne.Closed }))), () => {
    let { appear: O, show: $, enter: T, enterFrom: _, enterTo: D, entered: k, leave: J, leaveFrom: B, leaveTo: P, ...j } = e;
    return z({ theirProps: j, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Xi, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), vu = st, ot = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Kr(), a = F(() => e.show === null && i !== null ? X(i.value, { [Ne.Open]: !0, [Ne.Closed]: !1 }) : e.show);
  ne(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = b(a.value ? "visible" : "hidden"), o = Ki(() => {
    s.value = "hidden";
  }), l = b(!0), u = { show: a, appear: F(() => e.appear || !l.value) };
  return N(() => {
    ne(() => {
      l.value = !1, a.value ? s.value = "visible" : Xt(o) || (s.value = "hidden");
    });
  }), ae(Zr, o), ae(Jr, u), () => {
    let c = ki(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return z({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [R(vu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: Xi, visible: s.value === "visible", name: "Transition" });
  };
} });
const gu = {
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
    hasConfirmModal: () => !!v.confirmModal.value,
    title: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.title ? v.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.text ? v.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmButton ? v.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.cancelButton ? v.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      v.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      v.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      v.clearConfirmModal();
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
      Dialog: Yr,
      DialogPanel: Qr,
      TransitionRoot: ot,
      TransitionChild: st
    });
  }
};
function Yi(e, t) {
  t = Gr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[wt(t[r++])];
  return r && r == n ? e : void 0;
}
function Je(e, t, r) {
  var n = e == null ? void 0 : Yi(e, t);
  return n === void 0 ? r : n;
}
var yu = function() {
  try {
    var e = Ue(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Cn = yu;
function Qi(e, t, r) {
  t == "__proto__" && Cn ? Cn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var bu = Object.prototype, wu = bu.hasOwnProperty;
function Su(e, t, r) {
  var n = e[t];
  (!(wu.call(e, t) && Ur(n, r)) || r === void 0 && !(t in e)) && Qi(e, t, r);
}
function Ou(e, t, r, n) {
  if (!U(e))
    return e;
  t = Gr(t, e);
  for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var l = wt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != s) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = U(c) ? c : qr(t[i + 1]) ? [] : {});
    }
    Su(o, l, u), o = o[l];
  }
  return e;
}
function Ji(e, t, r) {
  return e == null ? e : Ou(e, t, r);
}
const $u = {
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
          return Je(e.values, r);
        },
        set(t, r, n) {
          Ji(e.values, r, n);
        }
      })
    );
  }
};
var Eu = function() {
  return ce.Date.now();
};
const dr = Eu;
var xu = /\s/;
function Tu(e) {
  for (var t = e.length; t-- && xu.test(e.charAt(t)); )
    ;
  return t;
}
var _u = /^\s+/;
function Au(e) {
  return e && e.slice(0, Tu(e) + 1).replace(_u, "");
}
var qn = 0 / 0, Iu = /^[-+]0x[0-9a-f]+$/i, Pu = /^0b[01]+$/i, Fu = /^0o[0-7]+$/i, Cu = parseInt;
function Or(e) {
  if (typeof e == "number")
    return e;
  if (Ut(e))
    return qn;
  if (U(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = U(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Au(e);
  var r = Pu.test(e);
  return r || Fu.test(e) ? Cu(e.slice(2), r ? 2 : 8) : Iu.test(e) ? qn : +e;
}
var qu = "Expected a function", Du = Math.max, ku = Math.min;
function en(e, t, r) {
  var n, i, a, s, o, l, u = 0, c = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(qu);
  t = Or(t) || 0, U(r) && (c = !!r.leading, p = "maxWait" in r, a = p ? Du(Or(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function d(y) {
    var w = n, O = i;
    return n = i = void 0, u = y, s = e.apply(O, w), s;
  }
  function h(y) {
    return u = y, o = setTimeout(x, t), c ? d(y) : s;
  }
  function m(y) {
    var w = y - l, O = y - u, $ = t - w;
    return p ? ku($, a - O) : $;
  }
  function g(y) {
    var w = y - l, O = y - u;
    return l === void 0 || w >= t || w < 0 || p && O >= a;
  }
  function x() {
    var y = dr();
    if (g(y))
      return A(y);
    o = setTimeout(x, m(y));
  }
  function A(y) {
    return o = void 0, f && n ? d(y) : (n = i = void 0, s);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function E() {
    return o === void 0 ? s : A(dr());
  }
  function S() {
    var y = dr(), w = g(y);
    if (n = arguments, i = this, l = y, w) {
      if (o === void 0)
        return h(l);
      if (p)
        return clearTimeout(o), o = setTimeout(x, t), d(l);
    }
    return o === void 0 && (o = setTimeout(x, t)), s;
  }
  return S.cancel = I, S.flush = E, S;
}
const Lu = {
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
    this.debounceFunction = en(() => {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), $e(e).then((t) => {
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
}, Bu = {
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
      DialogPanel: Qr,
      isActivated: this.isActivated
    });
  }
}, Zi = {
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
    return N(() => {
      r.value = (a) => {
        n.value.children[0].contains(a.target) || t.ignoreInnerTargets && n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Aa(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, s) => (L(), me("div", {
      ref_key: "root",
      ref: n
    }, [
      se(a.$slots, "default")
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
function Ve(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function Y(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function tn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Me = Math.max, jt = Math.min, et = Math.round;
function $r() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ea() {
  return !/^((?!chrome|android).)*safari/i.test($r());
}
function tt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && Y(e) && (i = e.offsetWidth > 0 && et(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && et(n.height) / e.offsetHeight || 1);
  var s = Ve(e) ? Q(e) : window, o = s.visualViewport, l = !ea() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / a, p = n.width / i, f = n.height / a;
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
function rn(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ju(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mu(e) {
  return e === Q(e) || !Y(e) ? rn(e) : ju(e);
}
function le(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  return ((Ve(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function nn(e) {
  return tt(qe(e)).left + rn(e).scrollLeft;
}
function ie(e) {
  return Q(e).getComputedStyle(e);
}
function an(e) {
  var t = ie(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Ru(e) {
  var t = e.getBoundingClientRect(), r = et(t.width) / e.offsetWidth || 1, n = et(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Nu(e, t, r) {
  r === void 0 && (r = !1);
  var n = Y(t), i = Y(t) && Ru(t), a = qe(t), s = tt(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((le(t) !== "body" || an(a)) && (o = Mu(t)), Y(t) ? (l = tt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = nn(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function ta(e) {
  var t = tt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Yt(e) {
  return le(e) === "html" ? e : e.assignedSlot || e.parentNode || (tn(e) ? e.host : null) || qe(e);
}
function ra(e) {
  return ["html", "body", "#document"].indexOf(le(e)) >= 0 ? e.ownerDocument.body : Y(e) && an(e) ? e : ra(Yt(e));
}
function mt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ra(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), s = i ? [a].concat(a.visualViewport || [], an(n) ? n : []) : n, o = t.concat(s);
  return i ? o : o.concat(mt(Yt(s)));
}
function Vu(e) {
  return ["table", "td", "th"].indexOf(le(e)) >= 0;
}
function Dn(e) {
  return !Y(e) || ie(e).position === "fixed" ? null : e.offsetParent;
}
function Hu(e) {
  var t = /firefox/i.test($r()), r = /Trident/i.test($r());
  if (r && Y(e)) {
    var n = ie(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Yt(e);
  for (tn(i) && (i = i.host); Y(i) && ["html", "body"].indexOf(le(i)) < 0; ) {
    var a = ie(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Qt(e) {
  for (var t = Q(e), r = Dn(e); r && Vu(r) && ie(r).position === "static"; )
    r = Dn(r);
  return r && (le(r) === "html" || le(r) === "body" && ie(r).position === "static") ? t : r || Hu(e) || t;
}
var re = "top", ue = "bottom", Pe = "right", fe = "left", Jt = "auto", Zt = [re, ue, Pe, fe], rt = "start", yt = "end", Uu = "clippingParents", na = "viewport", ft = "popper", Wu = "reference", kn = /* @__PURE__ */ Zt.reduce(function(e, t) {
  return e.concat([t + "-" + rt, t + "-" + yt]);
}, []), zu = /* @__PURE__ */ [].concat(Zt, [Jt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + rt, t + "-" + yt]);
}, []), Gu = "beforeRead", Ku = "read", Xu = "afterRead", Yu = "beforeMain", Qu = "main", Ju = "afterMain", Zu = "beforeWrite", ec = "write", tc = "afterWrite", Er = [Gu, Ku, Xu, Yu, Qu, Ju, Zu, ec, tc];
function rc(e) {
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
function nc(e) {
  var t = rc(e);
  return Er.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function ic(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Se(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Be = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ac = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ln = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function sc(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Ln).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Se(Be, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Se(Be, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Er.indexOf(t.phase) < 0 && console.error(Se(Be, t.name, '"phase"', "either " + Er.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Se(Be, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Se(Be, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Se(Be, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Se(Be, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ln.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(Se(ac, String(t.name), n, n));
      });
    });
  });
}
function oc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function pe(e) {
  return e.split("-")[0];
}
function lc(e) {
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
function uc(e, t) {
  var r = Q(e), n = qe(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = ea();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + nn(e),
    y: l
  };
}
function cc(e) {
  var t, r = qe(e), n = rn(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Me(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Me(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + nn(e), l = -n.scrollTop;
  return ie(i || r).direction === "rtl" && (o += Me(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function dc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && tn(r)) {
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
function fc(e, t) {
  var r = tt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Bn(e, t, r) {
  return t === na ? xr(uc(e, r)) : Ve(t) ? fc(t, r) : xr(cc(qe(e)));
}
function pc(e) {
  var t = mt(Yt(e)), r = ["absolute", "fixed"].indexOf(ie(e).position) >= 0, n = r && Y(e) ? Qt(e) : e;
  return Ve(n) ? t.filter(function(i) {
    return Ve(i) && dc(i, n) && le(i) !== "body";
  }) : [];
}
function hc(e, t, r, n) {
  var i = t === "clippingParents" ? pc(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, u) {
    var c = Bn(e, u, n);
    return l.top = Me(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = Me(c.left, l.left), l;
  }, Bn(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function nt(e) {
  return e.split("-")[1];
}
function ia(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function aa(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? pe(n) : null, a = n ? nt(n) : null, s = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case re:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case ue:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Pe:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case fe:
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
  var u = i ? ia(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case rt:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case yt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function sa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mc(e) {
  return Object.assign({}, sa(), e);
}
function vc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function sn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? Uu : o, u = r.rootBoundary, c = u === void 0 ? na : u, p = r.elementContext, f = p === void 0 ? ft : p, d = r.altBoundary, h = d === void 0 ? !1 : d, m = r.padding, g = m === void 0 ? 0 : m, x = mc(typeof g != "number" ? g : vc(g, Zt)), A = f === ft ? Wu : ft, I = e.rects.popper, E = e.elements[h ? A : f], S = hc(Ve(E) ? E : E.contextElement || qe(e.elements.popper), l, c, s), y = tt(e.elements.reference), w = aa({
    reference: y,
    element: I,
    strategy: "absolute",
    placement: i
  }), O = xr(Object.assign({}, I, w)), $ = f === ft ? O : y, T = {
    top: S.top - $.top + x.top,
    bottom: $.bottom - S.bottom + x.bottom,
    left: S.left - $.left + x.left,
    right: $.right - S.right + x.right
  }, _ = e.modifiersData.offset;
  if (f === ft && _) {
    var D = _[i];
    Object.keys(T).forEach(function(k) {
      var J = [Pe, ue].indexOf(k) >= 0 ? 1 : -1, B = [re, ue].indexOf(k) >= 0 ? "y" : "x";
      T[k] += D[B] * J;
    });
  }
  return T;
}
var jn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", gc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Mn = {
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
function yc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Mn : i;
  return function(o, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Mn, a),
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
        m(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: Ve(o) ? mt(o) : o.contextElement ? mt(o.contextElement) : [],
          popper: mt(l)
        };
        var I = nc(lc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = oc([].concat(I, c.options.modifiers), function(_) {
            var D = _.name;
            return D;
          });
          if (sc(E), pe(c.options.placement) === Jt) {
            var S = c.orderedModifiers.find(function(_) {
              var D = _.name;
              return D === "flip";
            });
            S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = ie(l), w = y.marginTop, O = y.marginRight, $ = y.marginBottom, T = y.marginLeft;
          [w, O, $, T].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var x = c.elements, A = x.reference, I = x.popper;
          if (!Rn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(jn);
            return;
          }
          c.rects = {
            reference: Nu(A, Qt(I), c.options.strategy === "fixed"),
            popper: ta(I)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var E = 0, S = 0; S < c.orderedModifiers.length; S++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(gc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, S = -1;
              continue;
            }
            var y = c.orderedModifiers[S], w = y.fn, O = y.options, $ = O === void 0 ? {} : O, T = y.name;
            typeof w == "function" && (c = w({
              state: c,
              options: $,
              name: T,
              instance: d
            }) || c);
          }
        }
      },
      update: ic(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Rn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(jn), d;
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
          }), y = function() {
          };
          p.push(S || y);
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
var It = {
  passive: !0
};
function bc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, It);
  }), o && l.addEventListener("resize", r.update, It), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, It);
    }), o && l.removeEventListener("resize", r.update, It);
  };
}
const wc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bc,
  data: {}
};
function Sc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = aa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Oc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sc,
  data: {}
};
var $c = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ec(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: et(t * i) / i || 0,
    y: et(r * i) / i || 0
  };
}
function Nn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = s.x, d = f === void 0 ? 0 : f, h = s.y, m = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = g.x, m = g.y;
  var x = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), I = fe, E = re, S = window;
  if (u) {
    var y = Qt(r), w = "clientHeight", O = "clientWidth";
    if (y === Q(r) && (y = qe(r), ie(y).position !== "static" && o === "absolute" && (w = "scrollHeight", O = "scrollWidth")), y = y, i === re || (i === fe || i === Pe) && a === yt) {
      E = ue;
      var $ = p && y === S && S.visualViewport ? S.visualViewport.height : y[w];
      m -= $ - n.height, m *= l ? 1 : -1;
    }
    if (i === fe || (i === re || i === ue) && a === yt) {
      I = Pe;
      var T = p && y === S && S.visualViewport ? S.visualViewport.width : y[O];
      d -= T - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: o
  }, u && $c), D = c === !0 ? Ec({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  if (d = D.x, m = D.y, l) {
    var k;
    return Object.assign({}, _, (k = {}, k[E] = A ? "0" : "", k[I] = x ? "0" : "", k.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", k));
  }
  return Object.assign({}, _, (t = {}, t[E] = A ? m + "px" : "", t[I] = x ? d + "px" : "", t.transform = "", t));
}
function xc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ie(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: pe(t.placement),
    variation: nt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Tc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: xc,
  data: {}
};
function _c(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !Y(a) || !le(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function Ac(e) {
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
      !Y(i) || !le(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ic = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _c,
  effect: Ac,
  requires: ["computeStyles"]
};
var Pc = [wc, Oc, Tc, Ic], Fc = /* @__PURE__ */ yc({
  defaultModifiers: Pc
});
function Cc(e) {
  return e === "x" ? "y" : "x";
}
function Ct(e, t, r) {
  return Me(e, jt(t, r));
}
function qc(e, t, r) {
  var n = Ct(e, t, r);
  return n > r ? r : n;
}
function Dc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? !0 : f, h = r.tetherOffset, m = h === void 0 ? 0 : h, g = sn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), x = pe(t.placement), A = nt(t.placement), I = !A, E = ia(x), S = Cc(E), y = t.modifiersData.popperOffsets, w = t.rects.reference, O = t.rects.popper, $ = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (a) {
      var k, J = E === "y" ? re : fe, B = E === "y" ? ue : Pe, P = E === "y" ? "height" : "width", j = y[E], be = j + g[J], Z = j - g[B], Ge = d ? -O[P] / 2 : 0, tr = A === rt ? w[P] : O[P], lt = A === rt ? -O[P] : -w[P], $t = t.elements.arrow, Ke = d && $t ? ta($t) : {
        width: 0,
        height: 0
      }, we = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sa(), ut = we[J], Et = we[B], De = Ct(0, w[P], Ke[P]), rr = I ? w[P] / 2 - Ge - De - ut - T.mainAxis : tr - De - ut - T.mainAxis, ya = I ? -w[P] / 2 + Ge + De + Et + T.mainAxis : lt + De + Et + T.mainAxis, nr = t.elements.arrow && Qt(t.elements.arrow), ba = nr ? E === "y" ? nr.clientTop || 0 : nr.clientLeft || 0 : 0, cn = (k = _ == null ? void 0 : _[E]) != null ? k : 0, wa = j + rr - cn - ba, Sa = j + ya - cn, dn = Ct(d ? jt(be, wa) : be, j, d ? Me(Z, Sa) : Z);
      y[E] = dn, D[E] = dn - j;
    }
    if (o) {
      var fn, Oa = E === "x" ? re : fe, $a = E === "x" ? ue : Pe, ke = y[S], xt = S === "y" ? "height" : "width", pn = ke + g[Oa], hn = ke - g[$a], ir = [re, fe].indexOf(x) !== -1, mn = (fn = _ == null ? void 0 : _[S]) != null ? fn : 0, vn = ir ? pn : ke - w[xt] - O[xt] - mn + T.altAxis, gn = ir ? ke + w[xt] + O[xt] - mn - T.altAxis : hn, yn = d && ir ? qc(vn, ke, gn) : Ct(d ? vn : pn, ke, d ? gn : hn);
      y[S] = yn, D[S] = yn - ke;
    }
    t.modifiersData[n] = D;
  }
}
const kc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Dc,
  requiresIfExists: ["offset"]
};
var Lc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Lc[t];
  });
}
var Bc = {
  start: "end",
  end: "start"
};
function Vn(e) {
  return e.replace(/start|end/g, function(t) {
    return Bc[t];
  });
}
function jc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? zu : l, c = nt(n), p = c ? o ? kn : kn.filter(function(h) {
    return nt(h) === c;
  }) : Zt, f = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h, m) {
    return h[m] = sn(e, {
      placement: m,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[pe(m)], h;
  }, {});
  return Object.keys(d).sort(function(h, m) {
    return d[h] - d[m];
  });
}
function Mc(e) {
  if (pe(e) === Jt)
    return [];
  var t = qt(e);
  return [Vn(e), t, Vn(t)];
}
function Rc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, m = r.allowedAutoPlacements, g = t.options.placement, x = pe(g), A = x === g, I = l || (A || !h ? [qt(g)] : Mc(g)), E = [g].concat(I).reduce(function(Ke, we) {
      return Ke.concat(pe(we) === Jt ? jc(t, {
        placement: we,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : we);
    }, []), S = t.rects.reference, y = t.rects.popper, w = /* @__PURE__ */ new Map(), O = !0, $ = E[0], T = 0; T < E.length; T++) {
      var _ = E[T], D = pe(_), k = nt(_) === rt, J = [re, ue].indexOf(D) >= 0, B = J ? "width" : "height", P = sn(t, {
        placement: _,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), j = J ? k ? Pe : fe : k ? ue : re;
      S[B] > y[B] && (j = qt(j));
      var be = qt(j), Z = [];
      if (a && Z.push(P[D] <= 0), o && Z.push(P[j] <= 0, P[be] <= 0), Z.every(function(Ke) {
        return Ke;
      })) {
        $ = _, O = !1;
        break;
      }
      w.set(_, Z);
    }
    if (O)
      for (var Ge = h ? 3 : 1, tr = function(we) {
        var ut = E.find(function(Et) {
          var De = w.get(Et);
          if (De)
            return De.slice(0, we).every(function(rr) {
              return rr;
            });
        });
        if (ut)
          return $ = ut, "break";
      }, lt = Ge; lt > 0; lt--) {
        var $t = tr(lt);
        if ($t === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const Nc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Rc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ze = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Vc = {
  components: {
    OnClickOutside: Zi
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
    this.teleport && await _e();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Fc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Nc, kc],
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
}, Hc = { ref: "tooltip" };
function Uc(e, t, r, n, i, a) {
  const s = si("OnClickOutside");
  return L(), K(s, {
    style: Dt(a.wrapperStyle),
    do: a.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: oi(() => [
      pr("div", {
        ref: "button",
        style: Dt(a.buttonStyle)
      }, [
        se(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 4),
      pr("div", Hc, [
        se(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Wc = /* @__PURE__ */ ze(Vc, [["render", Uc]]), zc = {
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
    return (n, i) => V(t).isSsr ? (L(), K(de, {
      key: e.keepAliveKey,
      html: V(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (L(), K(ii, {
      key: 0,
      max: V(r).max_keep_alive
    }, [
      (L(), K(de, {
        key: e.keepAliveKey,
        html: V(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function oa(e) {
  return e && e.length ? e[0] : void 0;
}
const Gc = {
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
        return oa(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, Kc = {
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
        ee(r, (u) => {
          !U(u) || (n in u && (s = u[n]), i in u && (o = u[i]), a in u && l.push(u));
        }), s ? v.visit(s) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
function Xc() {
  this.__data__ = new ge(), this.size = 0;
}
function Yc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Qc(e) {
  return this.__data__.get(e);
}
function Jc(e) {
  return this.__data__.has(e);
}
var Zc = 200;
function ed(e, t) {
  var r = this.__data__;
  if (r instanceof ge) {
    var n = r.__data__;
    if (!gt || n.length < Zc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ye(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function he(e) {
  var t = this.__data__ = new ge(e);
  this.size = t.size;
}
he.prototype.clear = Xc;
he.prototype.delete = Yc;
he.prototype.get = Qc;
he.prototype.has = Jc;
he.prototype.set = ed;
var td = "__lodash_hash_undefined__";
function rd(e) {
  return this.__data__.set(e, td), this;
}
function nd(e) {
  return this.__data__.has(e);
}
function Mt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ye(); ++t < r; )
    this.add(e[t]);
}
Mt.prototype.add = Mt.prototype.push = rd;
Mt.prototype.has = nd;
function id(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ad(e, t) {
  return e.has(t);
}
var sd = 1, od = 2;
function la(e, t, r, n, i, a) {
  var s = r & sd, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = !0, d = r & od ? new Mt() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < o; ) {
    var h = e[p], m = t[p];
    if (n)
      var g = s ? n(m, h, p, t, e, a) : n(h, m, p, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!id(t, function(x, A) {
        if (!ad(d, A) && (h === x || i(h, x, r, n, a)))
          return d.push(A);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === m || i(h, m, r, n, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var ld = ce.Uint8Array;
const Hn = ld;
function ud(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function cd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var dd = 1, fd = 2, pd = "[object Boolean]", hd = "[object Date]", md = "[object Error]", vd = "[object Map]", gd = "[object Number]", yd = "[object RegExp]", bd = "[object Set]", wd = "[object String]", Sd = "[object Symbol]", Od = "[object ArrayBuffer]", $d = "[object DataView]", Un = Ae ? Ae.prototype : void 0, fr = Un ? Un.valueOf : void 0;
function Ed(e, t, r, n, i, a, s) {
  switch (r) {
    case $d:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Od:
      return !(e.byteLength != t.byteLength || !a(new Hn(e), new Hn(t)));
    case pd:
    case hd:
    case gd:
      return Ur(+e, +t);
    case md:
      return e.name == t.name && e.message == t.message;
    case yd:
    case wd:
      return e == t + "";
    case vd:
      var o = ud;
    case bd:
      var l = n & dd;
      if (o || (o = cd), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      n |= fd, s.set(e, t);
      var c = la(o(e), o(t), n, i, a, s);
      return s.delete(e), c;
    case Sd:
      if (fr)
        return fr.call(e) == fr.call(t);
  }
  return !1;
}
function xd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Td(e, t, r) {
  var n = t(e);
  return M(e) ? n : xd(n, r(e));
}
function ua(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function _d() {
  return [];
}
var Ad = Object.prototype, Id = Ad.propertyIsEnumerable, Wn = Object.getOwnPropertySymbols, Pd = Wn ? function(e) {
  return e == null ? [] : (e = Object(e), ua(Wn(e), function(t) {
    return Id.call(e, t);
  }));
} : _d;
const Fd = Pd;
function zn(e) {
  return Td(e, Nt, Fd);
}
var Cd = 1, qd = Object.prototype, Dd = qd.hasOwnProperty;
function kd(e, t, r, n, i, a) {
  var s = r & Cd, o = zn(e), l = o.length, u = zn(t), c = u.length;
  if (l != c && !s)
    return !1;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(s ? f in t : Dd.call(t, f)))
      return !1;
  }
  var d = a.get(e), h = a.get(t);
  if (d && h)
    return d == t && h == e;
  var m = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++p < l; ) {
    f = o[p];
    var x = e[f], A = t[f];
    if (n)
      var I = s ? n(A, x, f, t, e, a) : n(x, A, f, e, t, a);
    if (!(I === void 0 ? x === A || i(x, A, r, n, a) : I)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var E = e.constructor, S = t.constructor;
    E != S && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof S == "function" && S instanceof S) && (m = !1);
  }
  return a.delete(e), a.delete(t), m;
}
var Ld = Ue(ce, "DataView");
const Tr = Ld;
var Bd = Ue(ce, "Promise");
const _r = Bd;
var jd = Ue(ce, "Set");
const Ar = jd;
var Md = Ue(ce, "WeakMap");
const Ir = Md;
var Gn = "[object Map]", Rd = "[object Object]", Kn = "[object Promise]", Xn = "[object Set]", Yn = "[object WeakMap]", Qn = "[object DataView]", Nd = He(Tr), Vd = He(gt), Hd = He(_r), Ud = He(Ar), Wd = He(Ir), je = Ce;
(Tr && je(new Tr(new ArrayBuffer(1))) != Qn || gt && je(new gt()) != Gn || _r && je(_r.resolve()) != Kn || Ar && je(new Ar()) != Xn || Ir && je(new Ir()) != Yn) && (je = function(e) {
  var t = Ce(e), r = t == Rd ? e.constructor : void 0, n = r ? He(r) : "";
  if (n)
    switch (n) {
      case Nd:
        return Qn;
      case Vd:
        return Gn;
      case Hd:
        return Kn;
      case Ud:
        return Xn;
      case Wd:
        return Yn;
    }
  return t;
});
const Jn = je;
var zd = 1, Zn = "[object Arguments]", ei = "[object Array]", Pt = "[object Object]", Gd = Object.prototype, ti = Gd.hasOwnProperty;
function Kd(e, t, r, n, i, a) {
  var s = M(e), o = M(t), l = s ? ei : Jn(e), u = o ? ei : Jn(t);
  l = l == Zn ? Pt : l, u = u == Zn ? Pt : u;
  var c = l == Pt, p = u == Pt, f = l == u;
  if (f && hr(e)) {
    if (!hr(t))
      return !1;
    s = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new he()), s || hi(e) ? la(e, t, r, n, i, a) : Ed(e, t, l, r, n, i, a);
  if (!(r & zd)) {
    var d = c && ti.call(e, "__wrapped__"), h = p && ti.call(t, "__wrapped__");
    if (d || h) {
      var m = d ? e.value() : e, g = h ? t.value() : t;
      return a || (a = new he()), i(m, g, r, n, a);
    }
  }
  return f ? (a || (a = new he()), kd(e, t, r, n, i, a)) : !1;
}
function er(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : Kd(e, t, r, n, er, i);
}
var Xd = 1, Yd = 2;
function Qd(e, t, r, n) {
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
      var p = new he();
      if (n)
        var f = n(u, c, l, e, t, p);
      if (!(f === void 0 ? er(c, u, Xd | Yd, n, p) : f))
        return !1;
    }
  }
  return !0;
}
function ca(e) {
  return e === e && !U(e);
}
function Jd(e) {
  for (var t = Nt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, ca(i)];
  }
  return t;
}
function da(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Zd(e) {
  var t = Jd(e);
  return t.length == 1 && t[0][2] ? da(t[0][0], t[0][1]) : function(r) {
    return r === e || Qd(r, e, t);
  };
}
function ef(e, t) {
  return e != null && t in Object(e);
}
function tf(e, t) {
  return e != null && qi(e, t, ef);
}
var rf = 1, nf = 2;
function af(e, t) {
  return Hr(e) && ca(t) ? da(wt(e), t) : function(r) {
    var n = Je(r, e);
    return n === void 0 && n === t ? tf(r, e) : er(t, n, rf | nf);
  };
}
function sf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function of(e) {
  return function(t) {
    return Yi(t, e);
  };
}
function lf(e) {
  return Hr(e) ? sf(wt(e)) : of(e);
}
function Ot(e) {
  return typeof e == "function" ? e : e == null ? vi : typeof e == "object" ? M(e) ? af(e[0], e[1]) : Zd(e) : lf(e);
}
function uf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Rt(t)) {
      var a = Ot(r);
      t = Nt(t), r = function(o) {
        return a(i[o], o, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
function cf(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var ri = 1 / 0, df = 17976931348623157e292;
function ff(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Or(e), e === ri || e === -ri) {
    var t = e < 0 ? -1 : 1;
    return t * df;
  }
  return e === e ? e : 0;
}
function on(e) {
  var t = ff(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var pf = Math.max;
function hf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : on(r);
  return i < 0 && (i = pf(n + i, 0)), cf(e, Ot(t), i);
}
var mf = uf(hf);
const ln = mf, vf = {
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
      return e ? Ee(e) ? e : M(e) ? e.map(this.extractMetadataFromExistingFile) : U(e) ? e.options.metadata.metadata : null : null;
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
          const a = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const s = setInterval(() => {
                if (r.filepondInstance.status < 2)
                  clearInterval(s);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(s, o) {
              s || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(s, o) {
              s || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(s, o) {
              s || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (a.files = this.multiple ? e : [e]), this.accept.length > 0 && (a.acceptedFileTypes = this.accept), this.minFileSize && (a.minFileSize = this.minFileSize), this.maxFileSize && (a.maxFileSize = this.maxFileSize), this.minImageWidth && (a.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (a.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (a.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (a.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (a.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (a.imageValidateSizeMaxResolution = this.maxImageResolution), a.server = {
            load: (s, o, l, u, c) => {
              const f = $e.CancelToken.source();
              return $e({
                url: s.preview_url,
                method: "GET",
                cancelToken: f.token,
                responseType: "blob"
              }).then((d) => {
                const h = new File([d.data], s.name, { type: s.type });
                o(h);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  f.cancel(), c();
                }
              };
            }
          }, this.server && (a.server.process = (s, o, l, u, c, p, f) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const m = $e.CancelToken.source();
            $e({
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
          }, a.server.revert = (s, o, l) => {
            $e({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: s }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), this.loadFilepondPlugins(i).then((s) => {
            s.length > 0 && i.registerPlugin(...s.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, a);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = ln(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
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
}, gf = { ref: "file" };
function yf(e, t, r, n, i, a) {
  return L(), me("div", gf, [
    se(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const bf = /* @__PURE__ */ ze(vf, [["render", yf]]), wf = {
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
function un(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && pa(t, fa(r, n), e[n]);
  return t;
}
function fa(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function pa(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => pa(e, fa(t, n.toString()), r[n]));
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
  un(r, e, t);
}
var Sf = "[object Boolean]";
function ha(e) {
  return e === !0 || e === !1 || Ie(e) && Ce(e) == Sf;
}
function ma(e, t) {
  var r = {};
  return t = Ot(t), kr(e, function(n, i, a) {
    Qi(r, i, t(n, i, a));
  }), r;
}
function va(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ye(e, t, r) {
  return e = zr(e), r = r == null ? 0 : va(on(r), 0, e.length), t = Gt(t), e.slice(r, r + t.length) == t;
}
const Of = {
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
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
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
      return ma(this.rawErrors, (e) => e.join(`
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
    }, { deep: !0 }) : M(this.submitOnChange) && this.submitOnChange.forEach((r) => {
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
      return Ji(this.values, e, t);
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
          ha(this.confirm) ? "" : this.confirm,
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
      const e = this.values instanceof FormData ? this.values : un(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (t["X-Splade-Preserve-Scroll"] = !0);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), v.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch(async (n) => {
        if (this.processing = !1, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = ln(Object.keys(this.errors), (a) => this.formElement.querySelector(`[data-validation-key="${a}"]`));
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
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) || Ye(r, "__v_") ? e[r] : (!e.isMounted && !G(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), Je(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, $f = {
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
}, Ef = { ref: "input" };
function xf(e, t, r, n, i, a) {
  return L(), me("div", Ef, [
    se(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Tf = /* @__PURE__ */ ze($f, [["render", xf]]), _f = {
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
      this.html = null, v.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html;
      });
    }
  }
};
function Af(e, t, r, n, i, a) {
  const s = si("Render");
  return i.html ? (L(), K(s, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? se(e.$slots, "default", { key: 1 }) : Fr("", !0);
}
const If = /* @__PURE__ */ ze(_f, [["render", Af]]), Pf = ["href", "onClick"], Ff = {
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
    const t = e, r = H("stack");
    function n() {
      if (!t.confirm)
        return i();
      v.confirm(
        ha(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        i();
      }).catch(() => {
      });
    }
    function i() {
      if (t.away)
        return window.location = t.href;
      const s = r > 0 && t.keepModal;
      if (t.modal && !s)
        return v.modal(t.href);
      if (t.slideover && !s)
        return v.slideover(t.href);
      if (Ye(t.href, "#")) {
        if (v.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let o = t.method.trim().toUpperCase();
      const l = {
        ...t.headers
      };
      if (s && (l["X-Splade-Modal"] = v.stackType(r), l["X-Splade-Modal-Target"] = r), t.preserveScroll && (l["X-Splade-Preserve-Scroll"] = !0), o === "GET")
        return t.replace ? v.replace(t.href, l) : v.visit(t.href, l);
      const u = t.data instanceof FormData ? t.data : un(t.data);
      o !== "POST" && (u.append("_method", o), o = "POST"), v.request(t.href, o, u, l, t.replace);
    }
    return (a, s) => (L(), me("a", {
      href: e.href,
      onClick: Ia(n, ["prevent"])
    }, [
      se(a.$slots, "default")
    ], 8, Pf));
  }
}, Cf = {
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
      default: "center"
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
      Dialog: Yr,
      DialogPanel: Qr,
      TransitionRoot: ot,
      TransitionChild: st
    });
  }
}, qf = {
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
};
function Df(e, t) {
  var r = -1, n = Rt(e) ? Array(e.length) : [];
  return Lr(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
function ga(e, t) {
  var r = M(e) ? Ci : Df;
  return r(e, Ot(t));
}
const kf = {
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
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = !0, $e({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? Je(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (ee(t, (a) => {
          var s = document.createElement("option");
          s.value = a.value, s.text = a.label, a.value === `${this.modelValue}` && (i = !0), a.disabled && (s.disabled = a.disabled), a.placeholder && (s.placeholder = a.placeholder), this.element.appendChild(s);
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
      const r = M(e);
      if (!r && U(e))
        if (this.optionValue && this.optionLabel) {
          let n = Je(e, this.optionValue);
          Ee(n) || (n = `${n}`), t.push({
            value: n,
            label: Je(e, this.optionLabel)
          });
        } else
          ee(e, (n, i) => {
            Ee(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ga(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return ln(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, Lf = { ref: "select" };
function Bf(e, t, r, n, i, a) {
  return L(), me("div", Lf, [
    se(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const jf = /* @__PURE__ */ ze(kf, [["render", Bf]]), Mf = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = ma(e, (i) => i.join(`
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
function Rf(e, t, r) {
  e = zr(e), t = Gt(t);
  var n = e.length;
  r = r === void 0 ? n : va(on(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Nf(e, t) {
  var r = [];
  return Lr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Vf(e, t) {
  var r = M(e) ? ua : Nf;
  return r(e, Ot(t));
}
function ni(e, t) {
  return er(e, t);
}
const Hf = {
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
      return !ni(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = en(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    ee(e, (r, n) => {
      if (Ye(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
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
        Ye(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Vf(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ga(r, (i) => i.key).sort();
      ni(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], _e(() => {
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
        if (!Rf(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), s = a[1].substring(0, a[1].length - 1);
        parseInt(s) == s ? (i = a[0], M(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Ye(e, "perPage") || Ye(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      ee(e, (u, c) => {
        if (!M(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((p, f) => {
          n[`${c}[${f}]`] = p;
        });
      });
      let i = "";
      ee(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const a = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : v.replaceUrlOfCurrentPage(a);
      this.isLoading = !0;
      let s = null;
      typeof t < "u" && t && (s = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": v.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      v.replace(a, o).then(() => {
        this.isLoading = !1, typeof t < "u" && t && _e(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), s && (u.value = s);
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
      this.isLoading = !0, v.request(e, "POST", { ids: this.selectedItems }, {}, !1).then((a) => {
        a.data;
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
}, Uf = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ai
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function Wf(e, t, r, n, i, a) {
  return Pa((L(), K(Fa(i.isMounted ? i.Teleport : "div"), Ca(qa(e.$attrs)), {
    default: oi(() => [
      se(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Da, i.isMounted]
  ]);
}
const zf = /* @__PURE__ */ ze(Uf, [["render", Wf]]), Gf = {
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
        _e(() => e.default.update(this.element));
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
}, Kf = { ref: "textarea" };
function Xf(e, t, r, n, i, a) {
  return L(), me("div", Kf, [
    se(e.$slots, "default")
  ], 512);
}
const Yf = /* @__PURE__ */ ze(Gf, [["render", Xf]]), Qf = {
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
      TransitionRoot: ot,
      TransitionChild: st
    });
  }
}, Jf = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Zf = {
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
      positions: Jf,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: de,
      TransitionRoot: ot,
      TransitionChild: st
    });
  }
}, ep = {
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
            if (n.length === 1 && oa(n) === "default") {
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
}, tp = {
  render() {
    return this.$slots.default({
      TransitionRoot: ot,
      TransitionChild: st
    });
  }
}, rp = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && _e(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", en(i, 100)), i();
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
}, op = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : !1, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, gu).component(`${r}Data`, $u).component(`${r}Defer`, Lu).component(`${r}Dialog`, Bu).component(`${r}Dropdown`, Wc).component(`${r}DynamicHtml`, zc).component(`${r}Errors`, Gc).component(`${r}Event`, Kc).component(`${r}File`, bf).component(`${r}Flash`, wf).component(`${r}Form`, Of).component(`${r}Input`, Tf).component(`${r}Lazy`, If).component(`${r}Modal`, Cf).component(`${r}OnClickOutside`, Zi).component(`${r}PreloadedModal`, qf).component(`${r}Render`, de).component(`${r}Select`, jf).component(`${r}State`, Mf).component(`${r}Table`, Hf).component(`${r}Teleport`, zf).component(`${r}Textarea`, Yf).component(`${r}Toast`, Qf).component(`${r}Toasts`, Zf).component(`${r}Toggle`, ep).component(`${r}Transition`, tp).component(t.link_component, Ff).directive(`${r}PreserveScroll`, rp), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      U(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Pr.init(t.progress_bar);
    }
    ee(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function lp(e, t, r) {
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
  v as Splade,
  Do as SpladeApp,
  op as SpladePlugin,
  ap as renderSpladeApp,
  lp as startServer
};
