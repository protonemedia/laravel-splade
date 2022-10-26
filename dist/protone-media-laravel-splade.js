import Jn from "axios";
import { ref as b, computed as P, watch as dt, openBlock as q, createBlock as K, unref as H, createCommentVNode as Lt, h as k, onMounted as N, createElementBlock as pe, createElementVNode as ur, provide as te, inject as U, nextTick as Be, KeepAlive as Zn, normalizeStyle as Pt, createVNode as ya, Fragment as Ir, renderList as ba, cloneVNode as wa, watchEffect as Z, defineComponent as W, onUnmounted as _e, Teleport as ei, reactive as Sa, onBeforeUnmount as Oa, renderSlot as re, resolveComponent as ti, withCtx as $a, withModifiers as Ea, normalizeProps as _a, mergeProps as xa } from "vue";
function Ta(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Aa(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Ia = Aa();
const Pa = Ia;
function Ca(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Da = typeof global == "object" && global && global.Object === Object && global;
const ri = Da;
var qa = typeof self == "object" && self && self.Object === Object && self, ja = ri || qa || Function("return this")();
const se = ja;
var Ba = se.Symbol;
const Se = Ba;
var ni = Object.prototype, La = ni.hasOwnProperty, ka = ni.toString, rt = Se ? Se.toStringTag : void 0;
function Fa(e) {
  var t = La.call(e, rt), r = e[rt];
  try {
    e[rt] = void 0;
    var n = !0;
  } catch {
  }
  var i = ka.call(e);
  return n && (t ? e[rt] = r : delete e[rt]), i;
}
var Ra = Object.prototype, Ma = Ra.toString;
function Na(e) {
  return Ma.call(e);
}
var Va = "[object Null]", Ha = "[object Undefined]", pn = Se ? Se.toStringTag : void 0;
function xe(e) {
  return e == null ? e === void 0 ? Ha : Va : pn && pn in Object(e) ? Fa(e) : Na(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var Ua = "[object Arguments]";
function hn(e) {
  return Oe(e) && xe(e) == Ua;
}
var ii = Object.prototype, Wa = ii.hasOwnProperty, za = ii.propertyIsEnumerable, Ga = hn(function() {
  return arguments;
}()) ? hn : function(e) {
  return Oe(e) && Wa.call(e, "callee") && !za.call(e, "callee");
};
const ai = Ga;
var Ka = Array.isArray;
const F = Ka;
function Xa() {
  return !1;
}
var si = typeof exports == "object" && exports && !exports.nodeType && exports, mn = si && typeof module == "object" && module && !module.nodeType && module, Qa = mn && mn.exports === si, vn = Qa ? se.Buffer : void 0, Ya = vn ? vn.isBuffer : void 0, Ja = Ya || Xa;
const cr = Ja;
var Za = 9007199254740991, es = /^(?:0|[1-9]\d*)$/;
function Pr(e, t) {
  var r = typeof e;
  return t = t == null ? Za : t, !!t && (r == "number" || r != "symbol" && es.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ts = 9007199254740991;
function Cr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ts;
}
var rs = "[object Arguments]", ns = "[object Array]", is = "[object Boolean]", as = "[object Date]", ss = "[object Error]", os = "[object Function]", ls = "[object Map]", us = "[object Number]", cs = "[object Object]", fs = "[object RegExp]", ds = "[object Set]", ps = "[object String]", hs = "[object WeakMap]", ms = "[object ArrayBuffer]", vs = "[object DataView]", gs = "[object Float32Array]", ys = "[object Float64Array]", bs = "[object Int8Array]", ws = "[object Int16Array]", Ss = "[object Int32Array]", Os = "[object Uint8Array]", $s = "[object Uint8ClampedArray]", Es = "[object Uint16Array]", _s = "[object Uint32Array]", D = {};
D[gs] = D[ys] = D[bs] = D[ws] = D[Ss] = D[Os] = D[$s] = D[Es] = D[_s] = !0;
D[rs] = D[ns] = D[ms] = D[is] = D[vs] = D[as] = D[ss] = D[os] = D[ls] = D[us] = D[cs] = D[fs] = D[ds] = D[ps] = D[hs] = !1;
function xs(e) {
  return Oe(e) && Cr(e.length) && !!D[xe(e)];
}
function Ts(e) {
  return function(t) {
    return e(t);
  };
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, at = oi && typeof module == "object" && module && !module.nodeType && module, As = at && at.exports === oi, tr = As && ri.process, Is = function() {
  try {
    var e = at && at.require && at.require("util").types;
    return e || tr && tr.binding && tr.binding("util");
  } catch {
  }
}();
const gn = Is;
var yn = gn && gn.isTypedArray, Ps = yn ? Ts(yn) : xs;
const li = Ps;
var Cs = Object.prototype, Ds = Cs.hasOwnProperty;
function qs(e, t) {
  var r = F(e), n = !r && ai(e), i = !r && !n && cr(e), a = !r && !n && !i && li(e), s = r || n || i || a, o = s ? Ca(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ds.call(e, u)) && !(s && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Pr(u, l))) && o.push(u);
  return o;
}
var js = Object.prototype;
function Bs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || js;
  return e === r;
}
function Ls(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ks = Ls(Object.keys, Object);
const Fs = ks;
var Rs = Object.prototype, Ms = Rs.hasOwnProperty;
function Ns(e) {
  if (!Bs(e))
    return Fs(e);
  var t = [];
  for (var r in Object(e))
    Ms.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ne(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vs = "[object AsyncFunction]", Hs = "[object Function]", Us = "[object GeneratorFunction]", Ws = "[object Proxy]";
function ui(e) {
  if (!ne(e))
    return !1;
  var t = xe(e);
  return t == Hs || t == Us || t == Vs || t == Ws;
}
function kt(e) {
  return e != null && Cr(e.length) && !ui(e);
}
function Ft(e) {
  return kt(e) ? qs(e) : Ns(e);
}
function Dr(e, t) {
  return e && Pa(e, t, Ft);
}
function zs(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!kt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var Gs = zs(Dr);
const qr = Gs;
function ci(e) {
  return e;
}
function fi(e) {
  return typeof e == "function" ? e : ci;
}
function Ks(e, t) {
  var r = F(e) ? Ta : qr;
  return r(e, fi(t));
}
function oe(e, t) {
  return e && Dr(e, fi(t));
}
var Xs = Array.prototype, Qs = Xs.reverse;
function Ys(e) {
  return e == null ? e : Qs.call(e);
}
const Ct = b(0), fr = b(1), B = b({}), ue = b(0), $e = typeof window > "u";
function Js(e, t, r) {
  $e || window.addEventListener("popstate", Zs.bind(this)), Object.keys(t).length > 0 && Ct.value++, Lr(r), Rt(r.head), kr(e);
  const n = $e ? "" : location.href, i = jr(
    n,
    r.head,
    e,
    t,
    {},
    fr.value,
    Ct.value
  );
  di(i);
}
function Zs(e) {
  !e.state || (B.value = e.state, ue.value = 0, Rt(B.value.head), kr(B.value.html, B.value.rememberedState.scrollY));
}
function jr(e, t, r, n, i, a, s) {
  const o = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: s
  };
  return B.value = o, o;
}
function eo(e) {
  $e || window.history.pushState(e, "", e.url);
}
function to(e) {
  const t = jr(
    e,
    JSON.parse(JSON.stringify(B.value.head)),
    B.value.html,
    B.value.dynamics,
    { ...B.value.rememberedState },
    B.value.pageVisitId,
    B.value.dynamicVisitId
  );
  $e || window.history.replaceState(t, "", t.url);
}
function di(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const rr = b(0);
function ro(e, t) {
  rr.value++;
  const r = e.request.responseURL;
  if (e.data.splade.lazy)
    return;
  if (e.data.splade.modal && ue.value++, Lr(e.data.splade), Rt(e.data.splade.head), r === B.value.url && (t = !0), e.data.splade.modal)
    return po(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ue.value = 0;
  let n = e.data.html, i = e.data.dynamics;
  const a = Object.keys(B.value.dynamics).length > 0, s = Object.keys(i).length > 0;
  t ? (s && oe(i, (l, u) => {
    i[u] += `<!-- ${rr.value} -->`;
  }), (!s || !a) && (n += `<!-- ${rr.value} -->`)) : (s && Ct.value++, (!s || !a) && fr.value++), kr(n, 0);
  const o = jr(
    r,
    e.data.splade.head,
    n,
    i,
    B.value.rememberedState ? { ...B.value.rememberedState } : {},
    fr.value,
    Ct.value
  );
  t ? di(o) : eo(o);
}
function no() {
  ue.value--, Rt(ao(ue.value));
}
const pi = b({}), hi = (e) => pi.value[e], io = (e) => Object.keys(hi.value[e]).length > 0, mi = b({}), ao = (e) => mi.value[e], vi = b({}), so = (e) => vi.value[e], We = b([]);
function oo(e) {
  We.value.push(e);
}
const lo = P(() => Ys(We.value));
function uo(e) {
  We.value[e].dismissed = !0, We.value[e].html = null;
}
const Br = b(null);
function co(e, t, r, n) {
  let i, a;
  const s = new Promise((o, l) => {
    i = o, a = l;
  });
  return Br.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, s;
}
function fo() {
  Br.value = null;
}
const gi = b({});
function Lr(e) {
  gi.value = e.shared ? e.shared : {}, vi.value[ue.value] = e.flash ? e.flash : {}, mi.value[ue.value] = e.head ? e.head : {}, Ks(e.toasts ? e.toasts : [], (t) => {
    We.value.push(t);
  }), pi.value[ue.value] = e.errors ? e.errors : {};
}
const yi = b(() => {
}), bi = b(() => {
}), wi = b(() => {
}), Si = b(() => {
});
function Rt(e) {
  yi.value(e);
}
function kr(e, t) {
  bi.value(e, t);
}
function po(e, t) {
  wi.value(e, t);
}
function ho(e) {
  Si.value(e);
}
const Oi = b({});
function $i(e, t, r) {
  Oi.value[e] = t, r && mo(e, t);
}
function mo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function vo(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Oi.value[e];
}
function St(e, t) {
  $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Qe(e, t, r, n, i) {
  $e || $i("scrollY", window.scrollY), St("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = Jn({
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
      r instanceof FormData && (s.percentage = Math.round(s.loaded / s.total * 100), St("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: s }));
    }
  });
  return a.then((s) => {
    ro(s, i), St("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: s });
  }).catch((s) => {
    if (St("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: s }), s.response.status == 409 && s.response.headers["x-splade-redirect-away"])
      return window.location = s.response.headers["x-splade-redirect-away"];
    const o = s.response.data.splade;
    o && (o.lazy || Lr(o)), s.response.status != 422 && ho(
      s.response.data.html ? s.response.data.html : s.response.data
    );
  }), a;
}
function Ei(e) {
  return Qe(e, "GET", {}, {}, !0);
}
function go(e) {
  return Qe(e, "GET", {}, {}, !1);
}
function yo(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function bo(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function wo(e, t) {
  return Qe(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function So() {
  return Ei(B.value.url);
}
const m = {
  init: Js,
  replace: Ei,
  visit: go,
  modal: yo,
  slideover: bo,
  refresh: So,
  request: Qe,
  lazy: wo,
  replaceUrlOfCurrentPage: to,
  htmlForDynamicComponent(e) {
    return B.value.dynamics[e];
  },
  setOnHead(e) {
    yi.value = e;
  },
  setOnHtml(e) {
    bi.value = e;
  },
  setOnModal(e) {
    wi.value = e;
  },
  setOnServerError(e) {
    Si.value = e;
  },
  hasValidationErrors: io,
  validationErrors: hi,
  sharedData: gi,
  flashData: so,
  toasts: We,
  toastsReversed: lo,
  confirmModal: Br,
  confirm: co,
  clearConfirmModal: fo,
  pushToast: oo,
  dismissToast: uo,
  restore: vo,
  remember: $i,
  popStack: no,
  currentStack: ue,
  pageVisitId: P(() => B.value.pageVisitId),
  dynamicVisitId: P(() => B.value.dynamicVisitId),
  isSsr: $e
};
var Oo = "[object String]";
function Ot(e) {
  return typeof e == "string" || !F(e) && Oe(e) && xe(e) == Oo;
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
    const t = e, r = b(null);
    function n() {
      r.value = k({
        template: t.html
      });
    }
    return dt(() => t.html, n, { immediate: !0 }), (i, a) => e.html ? (q(), K(H(r), { key: 0 })) : Lt("", !0);
  }
}, $o = {
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
    return N(() => i()), (o, l) => (q(), pe("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: s
    }, [
      ur("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Eo = {
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
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Ot(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    te("stack", 0);
    const r = b(), n = b([]), i = b(null), a = b(null), s = U("$spladeOptions") || {}, o = P(() => m.currentStack.value < 1 ? [] : {
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
      oe(f, (h, g) => {
        d[g] = h;
      }), document.getElementsByTagName("head")[0].appendChild(d);
    }
    function p(f) {
      var h;
      let d = "meta";
      oe(f, (g, w) => {
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
      n.value = [], r.value = f, Be(() => {
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
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), (f, d) => (q(), pe("div", null, [
      H(m).isSsr ? (q(), K(le, {
        key: `visit.${H(m).pageVisitId.value}`,
        style: Pt(H(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (q(), K(Zn, {
        key: 0,
        max: H(s).max_keep_alive
      }, [
        (q(), K(le, {
          key: `visit.${H(m).pageVisitId.value}`,
          style: Pt(H(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      ya(le, { html: e.components }, null, 8, ["html"]),
      (q(!0), pe(Ir, null, ba(H(m).currentStack.value, (h) => (q(), K(le, {
        key: `modal.${h}`,
        type: n.value[h].type,
        html: n.value[h].html,
        stack: h,
        "on-top-of-stack": H(m).currentStack.value === h,
        onClose: (g) => u(h)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (q(), K($o, {
        key: 2,
        html: i.value,
        onClose: l
      }, null, 8, ["html"])) : Lt("", !0)
    ]));
  }
};
function Xd(e) {
  return () => k(Eo, e);
}
var _o = Object.prototype, xo = _o.hasOwnProperty;
function To(e, t) {
  return e != null && xo.call(e, t);
}
var Ao = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || Oe(e) && xe(e) == Ao;
}
var Io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Po = /^\w*$/;
function Fr(e, t) {
  if (F(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Mt(e) ? !0 : Po.test(e) || !Io.test(e) || t != null && e in Object(t);
}
var Co = se["__core-js_shared__"];
const nr = Co;
var bn = function() {
  var e = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Do(e) {
  return !!bn && bn in e;
}
var qo = Function.prototype, jo = qo.toString;
function Re(e) {
  if (e != null) {
    try {
      return jo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Bo = /[\\^$.*+?()[\]{}|]/g, Lo = /^\[object .+?Constructor\]$/, ko = Function.prototype, Fo = Object.prototype, Ro = ko.toString, Mo = Fo.hasOwnProperty, No = RegExp(
  "^" + Ro.call(Mo).replace(Bo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vo(e) {
  if (!ne(e) || Do(e))
    return !1;
  var t = ui(e) ? No : Lo;
  return t.test(Re(e));
}
function Ho(e, t) {
  return e == null ? void 0 : e[t];
}
function Me(e, t) {
  var r = Ho(e, t);
  return Vo(r) ? r : void 0;
}
var Uo = Me(Object, "create");
const lt = Uo;
function Wo() {
  this.__data__ = lt ? lt(null) : {}, this.size = 0;
}
function zo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Go = "__lodash_hash_undefined__", Ko = Object.prototype, Xo = Ko.hasOwnProperty;
function Qo(e) {
  var t = this.__data__;
  if (lt) {
    var r = t[e];
    return r === Go ? void 0 : r;
  }
  return Xo.call(t, e) ? t[e] : void 0;
}
var Yo = Object.prototype, Jo = Yo.hasOwnProperty;
function Zo(e) {
  var t = this.__data__;
  return lt ? t[e] !== void 0 : Jo.call(t, e);
}
var el = "__lodash_hash_undefined__";
function tl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lt && t === void 0 ? el : t, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Le.prototype.clear = Wo;
Le.prototype.delete = zo;
Le.prototype.get = Qo;
Le.prototype.has = Zo;
Le.prototype.set = tl;
function rl() {
  this.__data__ = [], this.size = 0;
}
function Rr(e, t) {
  return e === t || e !== e && t !== t;
}
function Nt(e, t) {
  for (var r = e.length; r--; )
    if (Rr(e[r][0], t))
      return r;
  return -1;
}
var nl = Array.prototype, il = nl.splice;
function al(e) {
  var t = this.__data__, r = Nt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : il.call(t, r, 1), --this.size, !0;
}
function sl(e) {
  var t = this.__data__, r = Nt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ol(e) {
  return Nt(this.__data__, e) > -1;
}
function ll(e, t) {
  var r = this.__data__, n = Nt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = rl;
me.prototype.delete = al;
me.prototype.get = sl;
me.prototype.has = ol;
me.prototype.set = ll;
var ul = Me(se, "Map");
const ut = ul;
function cl() {
  this.size = 0, this.__data__ = {
    hash: new Le(),
    map: new (ut || me)(),
    string: new Le()
  };
}
function fl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Vt(e, t) {
  var r = e.__data__;
  return fl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function dl(e) {
  var t = Vt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function pl(e) {
  return Vt(this, e).get(e);
}
function hl(e) {
  return Vt(this, e).has(e);
}
function ml(e, t) {
  var r = Vt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = cl;
ve.prototype.delete = dl;
ve.prototype.get = pl;
ve.prototype.has = hl;
ve.prototype.set = ml;
var vl = "Expected a function";
function Mr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (Mr.Cache || ve)(), r;
}
Mr.Cache = ve;
var gl = 500;
function yl(e) {
  var t = Mr(e, function(n) {
    return r.size === gl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var bl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wl = /\\(\\)?/g, Sl = yl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(bl, function(r, n, i, a) {
    t.push(i ? a.replace(wl, "$1") : n || r);
  }), t;
});
const Ol = Sl;
function _i(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var $l = 1 / 0, wn = Se ? Se.prototype : void 0, Sn = wn ? wn.toString : void 0;
function Ht(e) {
  if (typeof e == "string")
    return e;
  if (F(e))
    return _i(e, Ht) + "";
  if (Mt(e))
    return Sn ? Sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -$l ? "-0" : t;
}
function Nr(e) {
  return e == null ? "" : Ht(e);
}
function Vr(e, t) {
  return F(e) ? e : Fr(e, t) ? [e] : Ol(Nr(e));
}
var El = 1 / 0;
function pt(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -El ? "-0" : t;
}
function xi(e, t, r) {
  t = Vr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = pt(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Cr(i) && Pr(s, i) && (F(e) || ai(e)));
}
function G(e, t) {
  return e != null && xi(e, t, To);
}
function Y(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n;
}
var Dt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Dt || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let s = _l(n, r), o = Object.assign(i, { props: s });
  if (e || t & 2 && s.static)
    return ir(o);
  if (t & 1) {
    let l = (a = s.unmount) == null || a ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return ir({ ...i, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ir(o);
}
function ir({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: s, ...o } = Ai(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (s === "template") {
    if (l = Ti(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!xl(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return wa(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return k(s, Object.assign({}, o, u), l);
}
function Ti(e) {
  return e.flatMap((t) => t.type === Ir ? Ti(t.children) : [t]);
}
function _l(...e) {
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
function Ai(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function xl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Tl = 0;
function Al() {
  return ++Tl;
}
function Ne() {
  return Al();
}
var Ii = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ii || {});
function he(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pi = Symbol("Context");
var ke = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ke || {});
function Il() {
  return Hr() !== null;
}
function Hr() {
  return U(Pi, null);
}
function Pl(e) {
  te(Pi, e);
}
const Ut = typeof window > "u" || typeof document > "u";
function Ye(e) {
  if (Ut)
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
let dr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ct || {}), Ci = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ci || {}), Cl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cl || {});
function Dl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(dr));
}
var Di = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Di || {});
function ql(e, t = 0) {
  var r;
  return e === ((r = Ye(e)) == null ? void 0 : r.body) ? !1 : Y(t, { [0]() {
    return e.matches(dr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(dr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function st(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let jl = ["textarea", "input"].join(",");
function Bl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, jl)) != null ? r : !1;
}
function Ll(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pr(e, t, r = !0, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, s = Array.isArray(e) ? r ? Ll(e) : e : Dl(e);
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
  return t & 6 && Bl(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function ar(e, t, r) {
  Ut || Z((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function kl(e, t, r = P(() => !0)) {
  function n(a, s) {
    if (!r.value || a.defaultPrevented)
      return;
    let o = s(a);
    if (o === null || !o.ownerDocument.documentElement.contains(o))
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
    return !ql(o, Di.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  let i = b(null);
  ar("mousedown", (a) => {
    var s, o;
    r.value && (i.value = ((o = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : o[0]) || a.target);
  }, !0), ar("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), ar("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var qt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(qt || {});
let hr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Fl(e, t, r) {
  Ut || Z((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var mr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mr || {});
function Rl() {
  let e = b(0);
  return Fl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function qi(e, t, r, n) {
  Ut || Z((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Ml(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ji = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ji || {});
let nt = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: b(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = b(null);
  n({ el: i, $el: i });
  let a = P(() => Ye(i));
  Nl({ ownerDocument: a }, P(() => Boolean(e.features & 16)));
  let s = Vl({ ownerDocument: a, container: i, initialFocus: P(() => e.initialFocus) }, P(() => Boolean(e.features & 2)));
  Hl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, P(() => Boolean(e.features & 8)));
  let o = Rl();
  function l() {
    let u = he(i);
    !u || Y(o.value, { [mr.Forwards]: () => pr(u, ct.First), [mr.Backwards]: () => pr(u, ct.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: p, initialFocus: f, containers: d, ...h } = e;
    return k(Ir, [Boolean(p & 4) && k(hr, { as: "button", type: "button", onFocus: l, features: qt.Focusable }), z({ ourProps: c, theirProps: { ...t, ...h }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && k(hr, { as: "button", type: "button", onFocus: l, features: qt.Focusable })]);
  };
} }), { features: ji });
function Nl({ ownerDocument: e }, t) {
  let r = b(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (st(r.value), r.value = null);
  }
  N(() => {
    dt(t, (a, s) => {
      a !== s && (a ? n() : i());
    }, { immediate: !0 });
  }), _e(i);
}
function Vl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = b(null), a = b(!1);
  return N(() => a.value = !0), _e(() => a.value = !1), N(() => {
    dt([t, r, n], (s, o) => {
      if (s.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = he(t);
      !l || Ml(() => {
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
        p ? st(p) : pr(l, ct.First | ct.NoScroll) === Ci.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Hl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  qi((a = e.value) == null ? void 0 : a.defaultView, "focus", (s) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = s.target;
    u && u instanceof HTMLElement ? Ul(o, u) ? (n.value = u, st(u)) : (s.preventDefault(), s.stopPropagation(), st(l)) : st(n.value);
  }, !0);
}
function Ul(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let On = "body > *", Ue = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
function $n(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function En(e) {
  let t = be.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Wl(e, t = b(!0)) {
  Z((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ye(n);
    if (i) {
      Ue.add(n);
      for (let a of be.keys())
        a.contains(n) && (En(a), be.delete(a));
      i.querySelectorAll(On).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let s of Ue)
            if (a.contains(s))
              return;
          Ue.size === 1 && (be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), $n(a));
        }
      }), r(() => {
        if (Ue.delete(n), Ue.size > 0)
          i.querySelectorAll(On).forEach((a) => {
            if (a instanceof HTMLElement && !be.has(a)) {
              for (let s of Ue)
                if (a.contains(s))
                  return;
              be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), $n(a);
            }
          });
        else
          for (let a of be.keys())
            En(a), be.delete(a);
      });
    }
  });
}
let Bi = Symbol("ForcePortalRootContext");
function zl() {
  return U(Bi, !1);
}
let vr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return te(Bi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Gl(e) {
  let t = Ye(e);
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
let Li = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = b(null), i = P(() => Ye(n)), a = zl(), s = U(ki, null), o = b(a === !0 || s == null ? Gl(n.value) : s.resolveTarget());
  return Z(() => {
    a || s != null && (o.value = s.resolveTarget());
  }), _e(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return k(ei, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), ki = Symbol("PortalGroupContext"), Kl = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Sa({ resolveTarget() {
    return e.target;
  } });
  return te(ki, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Fi = Symbol("StackContext");
var gr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gr || {});
function Xl() {
  return U(Fi, () => {
  });
}
function Ql({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Xl();
  function a(...s) {
    n == null || n(...s), i(...s);
  }
  N(() => {
    dt(t, (s, o) => {
      s ? a(0, e, r) : o === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), _e(() => {
    t.value && a(1, e, r);
  }), te(Fi, a);
}
let Ri = Symbol("DescriptionContext");
function Yl() {
  let e = U(Ri, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Jl({ slot: e = b({}), name: t = "Description", props: r = {} } = {}) {
  let n = b([]);
  function i(a) {
    return n.value.push(a), () => {
      let s = n.value.indexOf(a);
      s !== -1 && n.value.splice(s, 1);
    };
  }
  return te(Ri, { register: i, slot: e, name: t, props: r }), P(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Qd = W({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Yl(), i = `headlessui-description-${Ne()}`;
  return N(() => _e(n.register(i))), () => {
    let { name: a = "Description", slot: s = b({}), props: o = {} } = n, l = e, u = { ...Object.entries(o).reduce((c, [p, f]) => Object.assign(c, { [p]: H(f) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: a });
  };
} });
function Ur() {
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
function Zl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var eu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(eu || {});
let yr = Symbol("DialogContext");
function ht(e) {
  let t = U(yr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ht), r;
  }
  return t;
}
let $t = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Wr = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: $t }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let s = b(!1);
  N(() => {
    s.value = !0;
  });
  let o = b(0), l = Hr(), u = P(() => e.open === $t && l !== null ? Y(l.value, { [ke.Open]: !0, [ke.Closed]: !1 }) : e.open), c = b(/* @__PURE__ */ new Set()), p = b(null), f = b(null), d = P(() => Ye(p));
  if (i({ el: p, $el: p }), !(e.open !== $t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === $t ? void 0 : e.open}`);
  let h = P(() => s.value && u.value ? 0 : 1), g = P(() => h.value === 0), w = P(() => o.value > 1), T = U(yr, null) !== null, A = P(() => w.value ? "parent" : "leaf");
  Wl(p, P(() => w.value ? g.value : !1)), Ql({ type: "Dialog", enabled: P(() => h.value === 0), element: p, onUpdate: (y, S, _) => {
    if (S === "Dialog")
      return Y(y, { [gr.Add]() {
        c.value.add(_), o.value += 1;
      }, [gr.Remove]() {
        c.value.delete(_), o.value -= 1;
      } });
  } });
  let I = Jl({ name: "DialogDescription", slot: P(() => ({ open: u.value })) }), E = `headlessui-dialog-${Ne()}`, O = b(null), v = { titleId: O, panelRef: b(null), dialogState: h, setTitleId(y) {
    O.value !== y && (O.value = y);
  }, close() {
    t("close", !1);
  } };
  return te(yr, v), kl(() => {
    var y, S, _;
    return [...Array.from((S = (y = d.value) == null ? void 0 : y.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(he(f)) || v.panelRef.value && x.contains(v.panelRef.value))), (_ = v.panelRef.value) != null ? _ : p.value];
  }, (y, S) => {
    v.close(), Be(() => S == null ? void 0 : S.focus());
  }, P(() => h.value === 0 && !w.value)), qi((a = d.value) == null ? void 0 : a.defaultView, "keydown", (y) => {
    y.defaultPrevented || y.key === Ii.Escape && h.value === 0 && (w.value || (y.preventDefault(), y.stopPropagation(), v.close()));
  }), Z((y) => {
    var S;
    if (h.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let x = Ur();
    function $(L, V, R) {
      let M = L.style.getPropertyValue(V);
      return Object.assign(L.style, { [V]: R }), x.add(() => {
        Object.assign(L.style, { [V]: M });
      });
    }
    let C = _ == null ? void 0 : _.documentElement, j = ((S = _.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), j > 0) {
      let L = C.clientWidth - C.offsetWidth, V = j - L;
      $(C, "paddingRight", `${V}px`);
    }
    if (Zl()) {
      let L = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${L}px`), $(C, "width", "100%"), x.add(() => window.scrollTo(0, L));
    }
    y(x.dispose);
  }), Z((y) => {
    if (h.value !== 0)
      return;
    let S = he(p);
    if (!S)
      return;
    let _ = new IntersectionObserver((x) => {
      for (let $ of x)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && v.close();
    });
    _.observe(S), y(() => _.disconnect());
  }), () => {
    let y = { ...r, ref: p, id: E, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": O.value, "aria-describedby": I.value }, { open: S, initialFocus: _, ...x } = e, $ = { open: h.value === 0 };
    return k(vr, { force: !0 }, () => [k(Li, () => k(Kl, { target: p.value }, () => k(vr, { force: !1 }, () => k(nt, { initialFocus: _, containers: c, features: g.value ? Y(A.value, { parent: nt.features.RestoreFocus, leaf: nt.features.All & ~nt.features.FocusLock }) : nt.features.None }, () => z({ ourProps: y, theirProps: x, slot: $, attrs: r, slots: n, visible: h.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), k(hr, { features: qt.Hidden, ref: f })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = ht("DialogOverlay"), i = `headlessui-dialog-overlay-${Ne()}`;
  function a(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => z({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ht("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Ne()}`, s = b(null);
  return n({ el: s, $el: s }), N(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let o = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return k(vr, { force: !0 }, () => k(Li, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let zr = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ht("DialogPanel"), a = `headlessui-dialog-panel-${Ne()}`;
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
  let n = ht("DialogTitle"), i = `headlessui-dialog-title-${Ne()}`;
  return N(() => {
    n.setTitleId(i), _e(() => n.setTitleId(null));
  }), () => z({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function tu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function sr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Et(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var br = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(br || {});
function ru(e, t) {
  let r = Ur();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, s] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + s) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function _n(e, t, r, n, i, a) {
  let s = Ur(), o = a !== void 0 ? tu(a) : () => {
  };
  return Et(e, ...i), sr(e, ...t, ...r), s.nextFrame(() => {
    Et(e, ...r), sr(e, ...n), s.add(ru(e, (l) => (Et(e, ...n, ...t), sr(e, ...i), o(l))));
  }), s.add(() => Et(e, ...t, ...r, ...n, ...i)), s.add(() => o("cancelled")), s.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Gr = Symbol("TransitionContext");
var nu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(nu || {});
function iu() {
  return U(Gr, null) !== null;
}
function au() {
  let e = U(Gr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function su() {
  let e = U(Kr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Kr = Symbol("NestingContext");
function Wt(e) {
  return "children" in e ? Wt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Mi(e) {
  let t = b([]), r = b(!1);
  N(() => r.value = !0), _e(() => r.value = !1);
  function n(a, s = we.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === a);
    o !== -1 && (Y(s, { [we.Unmount]() {
      t.value.splice(o, 1);
    }, [we.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Wt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let s = t.value.find(({ id: o }) => o === a);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Ni = Dt.RenderStrategy, Je = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!iu() && Il())
    return () => k(Ze, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = b(null), s = b("visible"), o = P(() => e.unmount ? we.Unmount : we.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = au(), { register: c, unregister: p } = su(), f = { value: !0 }, d = Ne(), h = { value: !1 }, g = Mi(() => {
    h.value || (s.value = "hidden", p(d), t("afterLeave"));
  });
  N(() => {
    let S = c(d);
    _e(S);
  }), Z(() => {
    if (o.value === we.Hidden && !!d) {
      if (l && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      Y(s.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let w = Ce(e.enter), T = Ce(e.enterFrom), A = Ce(e.enterTo), I = Ce(e.entered), E = Ce(e.leave), O = Ce(e.leaveFrom), v = Ce(e.leaveTo);
  N(() => {
    Z(() => {
      if (s.value === "visible") {
        let S = he(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function y(S) {
    let _ = f.value && !u.value, x = he(a);
    !x || !(x instanceof HTMLElement) || _ || (h.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? _n(x, w, T, A, I, ($) => {
      h.value = !1, $ === br.Finished && t("afterEnter");
    }) : _n(x, E, O, v, I, ($) => {
      h.value = !1, $ === br.Finished && (Wt(g) || (s.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return N(() => {
    dt([l], (S, _, x) => {
      y(x), f.value = !1;
    }, { immediate: !0 });
  }), te(Kr, g), Pl(P(() => Y(s.value, { visible: ke.Open, hidden: ke.Closed }))), () => {
    let { appear: S, show: _, enter: x, enterFrom: $, enterTo: C, entered: j, leave: L, leaveFrom: V, leaveTo: R, ...M } = e;
    return z({ theirProps: M, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Ni, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), ou = Je, Ze = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), a = P(() => e.show === null && i !== null ? Y(i.value, { [ke.Open]: !0, [ke.Closed]: !1 }) : e.show);
  Z(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = b(a.value ? "visible" : "hidden"), o = Mi(() => {
    s.value = "hidden";
  }), l = b(!0), u = { show: a, appear: P(() => e.appear || !l.value) };
  return N(() => {
    Z(() => {
      l.value = !1, a.value ? s.value = "visible" : Wt(o) || (s.value = "hidden");
    });
  }), te(Kr, o), te(Gr, u), () => {
    let c = Ai(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return z({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [k(ou, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: Ni, visible: s.value === "visible", name: "Transition" });
  };
} });
const lu = {
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
      Dialog: Wr,
      DialogPanel: zr,
      TransitionRoot: Ze,
      TransitionChild: Je
    });
  }
};
function Vi(e, t) {
  t = Vr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function Xr(e, t, r) {
  var n = e == null ? void 0 : Vi(e, t);
  return n === void 0 ? r : n;
}
var uu = function() {
  try {
    var e = Me(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const xn = uu;
function Hi(e, t, r) {
  t == "__proto__" && xn ? xn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var cu = Object.prototype, fu = cu.hasOwnProperty;
function du(e, t, r) {
  var n = e[t];
  (!(fu.call(e, t) && Rr(n, r)) || r === void 0 && !(t in e)) && Hi(e, t, r);
}
function pu(e, t, r, n) {
  if (!ne(e))
    return e;
  t = Vr(t, e);
  for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var l = pt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != s) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = ne(c) ? c : Pr(t[i + 1]) ? [] : {});
    }
    du(o, l, u), o = o[l];
  }
  return e;
}
function Ui(e, t, r) {
  return e == null ? e : pu(e, t, r);
}
const hu = {
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
          return Xr(e.values, r);
        },
        set(t, r, n) {
          Ui(e.values, r, n);
        }
      })
    );
  }
};
var mu = function() {
  return se.Date.now();
};
const or = mu;
var vu = /\s/;
function gu(e) {
  for (var t = e.length; t-- && vu.test(e.charAt(t)); )
    ;
  return t;
}
var yu = /^\s+/;
function bu(e) {
  return e && e.slice(0, gu(e) + 1).replace(yu, "");
}
var Tn = 0 / 0, wu = /^[-+]0x[0-9a-f]+$/i, Su = /^0b[01]+$/i, Ou = /^0o[0-7]+$/i, $u = parseInt;
function wr(e) {
  if (typeof e == "number")
    return e;
  if (Mt(e))
    return Tn;
  if (ne(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bu(e);
  var r = Su.test(e);
  return r || Ou.test(e) ? $u(e.slice(2), r ? 2 : 8) : wu.test(e) ? Tn : +e;
}
var Eu = "Expected a function", _u = Math.max, xu = Math.min;
function Qr(e, t, r) {
  var n, i, a, s, o, l, u = 0, c = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Eu);
  t = wr(t) || 0, ne(r) && (c = !!r.leading, p = "maxWait" in r, a = p ? _u(wr(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function d(v) {
    var y = n, S = i;
    return n = i = void 0, u = v, s = e.apply(S, y), s;
  }
  function h(v) {
    return u = v, o = setTimeout(T, t), c ? d(v) : s;
  }
  function g(v) {
    var y = v - l, S = v - u, _ = t - y;
    return p ? xu(_, a - S) : _;
  }
  function w(v) {
    var y = v - l, S = v - u;
    return l === void 0 || y >= t || y < 0 || p && S >= a;
  }
  function T() {
    var v = or();
    if (w(v))
      return A(v);
    o = setTimeout(T, g(v));
  }
  function A(v) {
    return o = void 0, f && n ? d(v) : (n = i = void 0, s);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function E() {
    return o === void 0 ? s : A(or());
  }
  function O() {
    var v = or(), y = w(v);
    if (n = arguments, i = this, l = v, y) {
      if (o === void 0)
        return h(l);
      if (p)
        return clearTimeout(o), o = setTimeout(T, t), d(l);
    }
    return o === void 0 && (o = setTimeout(T, t)), s;
  }
  return O.cancel = I, O.flush = E, O;
}
const Tu = {
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
    this.debounceFunction = Qr(() => {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Jn(e).then((t) => {
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
}, Au = {
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
      Dialog: Wr,
      DialogPanel: zr,
      isActivated: this.isActivated
    });
  }
}, Wi = {
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
    }), Oa(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, s) => (q(), pe("div", {
      ref_key: "root",
      ref: n
    }, [
      re(a.$slots, "default")
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
function Fe(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function X(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var je = Math.max, jt = Math.min, ze = Math.round;
function Sr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function zi() {
  return !/^((?!chrome|android).)*safari/i.test(Sr());
}
function Ge(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && X(e) && (i = e.offsetWidth > 0 && ze(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ze(n.height) / e.offsetHeight || 1);
  var s = Fe(e) ? Q(e) : window, o = s.visualViewport, l = !zi() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / a, p = n.width / i, f = n.height / a;
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
function Jr(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Iu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pu(e) {
  return e === Q(e) || !X(e) ? Jr(e) : Iu(e);
}
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Te(e) {
  return ((Fe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zr(e) {
  return Ge(Te(e)).left + Jr(e).scrollLeft;
}
function ee(e) {
  return Q(e).getComputedStyle(e);
}
function en(e) {
  var t = ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Cu(e) {
  var t = e.getBoundingClientRect(), r = ze(t.width) / e.offsetWidth || 1, n = ze(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Du(e, t, r) {
  r === void 0 && (r = !1);
  var n = X(t), i = X(t) && Cu(t), a = Te(t), s = Ge(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ie(t) !== "body" || en(a)) && (o = Pu(t)), X(t) ? (l = Ge(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Zr(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Gi(e) {
  var t = Ge(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function zt(e) {
  return ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (Yr(e) ? e.host : null) || Te(e);
}
function Ki(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : X(e) && en(e) ? e : Ki(zt(e));
}
function ot(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ki(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), s = i ? [a].concat(a.visualViewport || [], en(n) ? n : []) : n, o = t.concat(s);
  return i ? o : o.concat(ot(zt(s)));
}
function qu(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function An(e) {
  return !X(e) || ee(e).position === "fixed" ? null : e.offsetParent;
}
function ju(e) {
  var t = /firefox/i.test(Sr()), r = /Trident/i.test(Sr());
  if (r && X(e)) {
    var n = ee(e);
    if (n.position === "fixed")
      return null;
  }
  var i = zt(e);
  for (Yr(i) && (i = i.host); X(i) && ["html", "body"].indexOf(ie(i)) < 0; ) {
    var a = ee(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Gt(e) {
  for (var t = Q(e), r = An(e); r && qu(r) && ee(r).position === "static"; )
    r = An(r);
  return r && (ie(r) === "html" || ie(r) === "body" && ee(r).position === "static") ? t : r || ju(e) || t;
}
var J = "top", ae = "bottom", Ee = "right", ce = "left", Kt = "auto", Xt = [J, ae, Ee, ce], Ke = "start", ft = "end", Bu = "clippingParents", Xi = "viewport", it = "popper", Lu = "reference", In = /* @__PURE__ */ Xt.reduce(function(e, t) {
  return e.concat([t + "-" + Ke, t + "-" + ft]);
}, []), ku = /* @__PURE__ */ [].concat(Xt, [Kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ke, t + "-" + ft]);
}, []), Fu = "beforeRead", Ru = "read", Mu = "afterRead", Nu = "beforeMain", Vu = "main", Hu = "afterMain", Uu = "beforeWrite", Wu = "write", zu = "afterWrite", Or = [Fu, Ru, Mu, Nu, Vu, Hu, Uu, Wu, zu];
function Gu(e) {
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
function Ku(e) {
  var t = Gu(e);
  return Or.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Xu(e) {
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
var De = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Qu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Pn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Yu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Pn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ye(De, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ye(De, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Or.indexOf(t.phase) < 0 && console.error(ye(De, t.name, '"phase"', "either " + Or.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ye(De, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ye(De, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ye(De, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ye(De, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Pn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ye(Qu, String(t.name), n, n));
      });
    });
  });
}
function Ju(e, t) {
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
function Zu(e) {
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
function ec(e, t) {
  var r = Q(e), n = Te(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = zi();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + Zr(e),
    y: l
  };
}
function tc(e) {
  var t, r = Te(e), n = Jr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = je(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = je(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + Zr(e), l = -n.scrollTop;
  return ee(i || r).direction === "rtl" && (o += je(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function rc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Yr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function $r(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function nc(e, t) {
  var r = Ge(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Cn(e, t, r) {
  return t === Xi ? $r(ec(e, r)) : Fe(t) ? nc(t, r) : $r(tc(Te(e)));
}
function ic(e) {
  var t = ot(zt(e)), r = ["absolute", "fixed"].indexOf(ee(e).position) >= 0, n = r && X(e) ? Gt(e) : e;
  return Fe(n) ? t.filter(function(i) {
    return Fe(i) && rc(i, n) && ie(i) !== "body";
  }) : [];
}
function ac(e, t, r, n) {
  var i = t === "clippingParents" ? ic(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, u) {
    var c = Cn(e, u, n);
    return l.top = je(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = je(c.left, l.left), l;
  }, Cn(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Xe(e) {
  return e.split("-")[1];
}
function Qi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? fe(n) : null, a = n ? Xe(n) : null, s = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case J:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case ae:
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
  var u = i ? Qi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ke:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ft:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Ji() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sc(e) {
  return Object.assign({}, Ji(), e);
}
function oc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function tn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? Bu : o, u = r.rootBoundary, c = u === void 0 ? Xi : u, p = r.elementContext, f = p === void 0 ? it : p, d = r.altBoundary, h = d === void 0 ? !1 : d, g = r.padding, w = g === void 0 ? 0 : g, T = sc(typeof w != "number" ? w : oc(w, Xt)), A = f === it ? Lu : it, I = e.rects.popper, E = e.elements[h ? A : f], O = ac(Fe(E) ? E : E.contextElement || Te(e.elements.popper), l, c, s), v = Ge(e.elements.reference), y = Yi({
    reference: v,
    element: I,
    strategy: "absolute",
    placement: i
  }), S = $r(Object.assign({}, I, y)), _ = f === it ? S : v, x = {
    top: O.top - _.top + T.top,
    bottom: _.bottom - O.bottom + T.bottom,
    left: O.left - _.left + T.left,
    right: _.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (f === it && $) {
    var C = $[i];
    Object.keys(x).forEach(function(j) {
      var L = [Ee, ae].indexOf(j) >= 0 ? 1 : -1, V = [J, ae].indexOf(j) >= 0 ? "y" : "x";
      x[j] += C[V] * L;
    });
  }
  return x;
}
var Dn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", lc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", qn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function uc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? qn : i;
  return function(o, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qn, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        g(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: Fe(o) ? ot(o) : o.contextElement ? ot(o.contextElement) : [],
          popper: ot(l)
        };
        var I = Ku(Zu([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Ju([].concat(I, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (Yu(E), fe(c.options.placement) === Kt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var v = ee(l), y = v.marginTop, S = v.marginRight, _ = v.marginBottom, x = v.marginLeft;
          [y, S, _, x].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = c.elements, A = T.reference, I = T.popper;
          if (!jn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(Dn);
            return;
          }
          c.rects = {
            reference: Du(A, Gt(I), c.options.strategy === "fixed"),
            popper: Gi(I)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(lc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var v = c.orderedModifiers[O], y = v.fn, S = v.options, _ = S === void 0 ? {} : S, x = v.name;
            typeof y == "function" && (c = y({
              state: c,
              options: _,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Xu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!jn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Dn), d;
    d.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h() {
      c.orderedModifiers.forEach(function(w) {
        var T = w.name, A = w.options, I = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: T,
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
var _t = {
  passive: !0
};
function cc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, s = n.resize, o = s === void 0 ? !0 : s, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, _t);
  }), o && l.addEventListener("resize", r.update, _t), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, _t);
    }), o && l.removeEventListener("resize", r.update, _t);
  };
}
const fc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cc,
  data: {}
};
function dc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Yi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const pc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: dc,
  data: {}
};
var hc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: ze(t * i) / i || 0,
    y: ze(r * i) / i || 0
  };
}
function Bn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = s.x, d = f === void 0 ? 0 : f, h = s.y, g = h === void 0 ? 0 : h, w = typeof c == "function" ? c({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = w.x, g = w.y;
  var T = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), I = ce, E = J, O = window;
  if (u) {
    var v = Gt(r), y = "clientHeight", S = "clientWidth";
    if (v === Q(r) && (v = Te(r), ee(v).position !== "static" && o === "absolute" && (y = "scrollHeight", S = "scrollWidth")), v = v, i === J || (i === ce || i === Ee) && a === ft) {
      E = ae;
      var _ = p && v === O && O.visualViewport ? O.visualViewport.height : v[y];
      g -= _ - n.height, g *= l ? 1 : -1;
    }
    if (i === ce || (i === J || i === ae) && a === ft) {
      I = Ee;
      var x = p && v === O && O.visualViewport ? O.visualViewport.width : v[S];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: o
  }, u && hc), C = c === !0 ? mc({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  if (d = C.x, g = C.y, l) {
    var j;
    return Object.assign({}, $, (j = {}, j[E] = A ? "0" : "", j[I] = T ? "0" : "", j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", j));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? g + "px" : "", t[I] = T ? d + "px" : "", t.transform = "", t));
}
function vc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = ee(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: fe(t.placement),
    variation: Xe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const gc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vc,
  data: {}
};
function yc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !X(a) || !ie(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === !1 ? a.removeAttribute(s) : a.setAttribute(s, o === !0 ? "" : o);
    }));
  });
}
function bc(e) {
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
      !X(i) || !ie(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const wc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yc,
  effect: bc,
  requires: ["computeStyles"]
};
var Sc = [fc, pc, gc, wc], Oc = /* @__PURE__ */ uc({
  defaultModifiers: Sc
});
function $c(e) {
  return e === "x" ? "y" : "x";
}
function At(e, t, r) {
  return je(e, jt(t, r));
}
function Ec(e, t, r) {
  var n = At(e, t, r);
  return n > r ? r : n;
}
function _c(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? !0 : f, h = r.tetherOffset, g = h === void 0 ? 0 : h, w = tn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), T = fe(t.placement), A = Xe(t.placement), I = !A, E = Qi(T), O = $c(E), v = t.modifiersData.popperOffsets, y = t.rects.reference, S = t.rects.popper, _ = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, x = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!v) {
    if (a) {
      var j, L = E === "y" ? J : ce, V = E === "y" ? ae : Ee, R = E === "y" ? "height" : "width", M = v[E], vt = M + w[L], Ae = M - w[V], gt = d ? -S[R] / 2 : 0, Yt = A === Ke ? y[R] : S[R], et = A === Ke ? -S[R] : -y[R], yt = t.elements.arrow, He = d && yt ? Gi(yt) : {
        width: 0,
        height: 0
      }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ji(), tt = ge[L], bt = ge[V], Ie = At(0, y[R], He[R]), Jt = I ? y[R] / 2 - gt - Ie - tt - x.mainAxis : Yt - Ie - tt - x.mainAxis, da = I ? -y[R] / 2 + gt + Ie + bt + x.mainAxis : et + Ie + bt + x.mainAxis, Zt = t.elements.arrow && Gt(t.elements.arrow), pa = Zt ? E === "y" ? Zt.clientTop || 0 : Zt.clientLeft || 0 : 0, nn = (j = $ == null ? void 0 : $[E]) != null ? j : 0, ha = M + Jt - nn - pa, ma = M + da - nn, an = At(d ? jt(vt, ha) : vt, M, d ? je(Ae, ma) : Ae);
      v[E] = an, C[E] = an - M;
    }
    if (o) {
      var sn, va = E === "x" ? J : ce, ga = E === "x" ? ae : Ee, Pe = v[O], wt = O === "y" ? "height" : "width", on = Pe + w[va], ln = Pe - w[ga], er = [J, ce].indexOf(T) !== -1, un = (sn = $ == null ? void 0 : $[O]) != null ? sn : 0, cn = er ? on : Pe - y[wt] - S[wt] - un + x.altAxis, fn = er ? Pe + y[wt] + S[wt] - un - x.altAxis : ln, dn = d && er ? Ec(cn, Pe, fn) : At(d ? cn : on, Pe, d ? fn : ln);
      v[O] = dn, C[O] = dn - Pe;
    }
    t.modifiersData[n] = C;
  }
}
const xc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: _c,
  requiresIfExists: ["offset"]
};
var Tc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function It(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Tc[t];
  });
}
var Ac = {
  start: "end",
  end: "start"
};
function Ln(e) {
  return e.replace(/start|end/g, function(t) {
    return Ac[t];
  });
}
function Ic(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? ku : l, c = Xe(n), p = c ? o ? In : In.filter(function(h) {
    return Xe(h) === c;
  }) : Xt, f = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h, g) {
    return h[g] = tn(e, {
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
function Pc(e) {
  if (fe(e) === Kt)
    return [];
  var t = It(e);
  return [Ln(e), t, Ln(t)];
}
function Cc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, o = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, g = r.allowedAutoPlacements, w = t.options.placement, T = fe(w), A = T === w, I = l || (A || !h ? [It(w)] : Pc(w)), E = [w].concat(I).reduce(function(He, ge) {
      return He.concat(fe(ge) === Kt ? Ic(t, {
        placement: ge,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : ge);
    }, []), O = t.rects.reference, v = t.rects.popper, y = /* @__PURE__ */ new Map(), S = !0, _ = E[0], x = 0; x < E.length; x++) {
      var $ = E[x], C = fe($), j = Xe($) === Ke, L = [J, ae].indexOf(C) >= 0, V = L ? "width" : "height", R = tn(t, {
        placement: $,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), M = L ? j ? Ee : ce : j ? ae : J;
      O[V] > v[V] && (M = It(M));
      var vt = It(M), Ae = [];
      if (a && Ae.push(R[C] <= 0), o && Ae.push(R[M] <= 0, R[vt] <= 0), Ae.every(function(He) {
        return He;
      })) {
        _ = $, S = !1;
        break;
      }
      y.set($, Ae);
    }
    if (S)
      for (var gt = h ? 3 : 1, Yt = function(ge) {
        var tt = E.find(function(bt) {
          var Ie = y.get(bt);
          if (Ie)
            return Ie.slice(0, ge).every(function(Jt) {
              return Jt;
            });
        });
        if (tt)
          return _ = tt, "break";
      }, et = gt; et > 0; et--) {
        var yt = Yt(et);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const Dc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ve = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, qc = {
  components: {
    OnClickOutside: Wi
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
    this.teleport && await Be();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Oc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Dc, xc],
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
}, jc = { ref: "tooltip" };
function Bc(e, t, r, n, i, a) {
  const s = ti("OnClickOutside");
  return q(), K(s, {
    style: Pt(a.wrapperStyle),
    do: a.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: $a(() => [
      ur("div", {
        ref: "button",
        style: Pt(a.buttonStyle)
      }, [
        re(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 4),
      ur("div", jc, [
        re(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Lc = /* @__PURE__ */ Ve(qc, [["render", Bc]]), kc = {
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
    return (n, i) => H(t).isSsr ? (q(), K(le, {
      key: e.keepAliveKey,
      html: H(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (q(), K(Zn, {
      key: 0,
      max: H(r).max_keep_alive
    }, [
      (q(), K(le, {
        key: e.keepAliveKey,
        html: H(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function Zi(e) {
  return e && e.length ? e[0] : void 0;
}
const Fc = {
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
        return Zi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, Rc = {
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
        oe(r, (u) => {
          !ne(u) || (n in u && (s = u[n]), i in u && (o = u[i]), a in u && l.push(u));
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
}, Mc = {
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
    }
  },
  data() {
    return {
      filenames: []
    };
  },
  methods: {
    handleFileInput(e) {
      const t = Object.values(e.target.files);
      this.form.$put(this.field, this.multiple ? t : t[0]), this.filenames = [], t.forEach((r) => {
        this.filenames.push(r.name);
      });
    }
  }
}, Nc = { ref: "file" };
function Vc(e, t, r, n, i, a) {
  return q(), pe("div", Nc, [
    re(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Hc = /* @__PURE__ */ Ve(Mc, [["render", Vc]]), Uc = {
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
function ea(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ra(t, ta(r, n), e[n]);
  return t;
}
function ta(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ra(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ra(e, ta(t, n.toString()), r[n]));
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
  ea(r, e, t);
}
function Wc() {
  this.__data__ = new me(), this.size = 0;
}
function zc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Gc(e) {
  return this.__data__.get(e);
}
function Kc(e) {
  return this.__data__.has(e);
}
var Xc = 200;
function Qc(e, t) {
  var r = this.__data__;
  if (r instanceof me) {
    var n = r.__data__;
    if (!ut || n.length < Xc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function de(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
de.prototype.clear = Wc;
de.prototype.delete = zc;
de.prototype.get = Gc;
de.prototype.has = Kc;
de.prototype.set = Qc;
var Yc = "__lodash_hash_undefined__";
function Jc(e) {
  return this.__data__.set(e, Yc), this;
}
function Zc(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = Jc;
Bt.prototype.has = Zc;
function ef(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function tf(e, t) {
  return e.has(t);
}
var rf = 1, nf = 2;
function na(e, t, r, n, i, a) {
  var s = r & rf, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = !0, d = r & nf ? new Bt() : void 0;
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
      if (!ef(t, function(T, A) {
        if (!tf(d, A) && (h === T || i(h, T, r, n, a)))
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
var af = se.Uint8Array;
const kn = af;
function sf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function of(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var lf = 1, uf = 2, cf = "[object Boolean]", ff = "[object Date]", df = "[object Error]", pf = "[object Map]", hf = "[object Number]", mf = "[object RegExp]", vf = "[object Set]", gf = "[object String]", yf = "[object Symbol]", bf = "[object ArrayBuffer]", wf = "[object DataView]", Fn = Se ? Se.prototype : void 0, lr = Fn ? Fn.valueOf : void 0;
function Sf(e, t, r, n, i, a, s) {
  switch (r) {
    case wf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bf:
      return !(e.byteLength != t.byteLength || !a(new kn(e), new kn(t)));
    case cf:
    case ff:
    case hf:
      return Rr(+e, +t);
    case df:
      return e.name == t.name && e.message == t.message;
    case mf:
    case gf:
      return e == t + "";
    case pf:
      var o = sf;
    case vf:
      var l = n & lf;
      if (o || (o = of), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      n |= uf, s.set(e, t);
      var c = na(o(e), o(t), n, i, a, s);
      return s.delete(e), c;
    case yf:
      if (lr)
        return lr.call(e) == lr.call(t);
  }
  return !1;
}
function Of(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function $f(e, t, r) {
  var n = t(e);
  return F(e) ? n : Of(n, r(e));
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function Ef() {
  return [];
}
var _f = Object.prototype, xf = _f.propertyIsEnumerable, Rn = Object.getOwnPropertySymbols, Tf = Rn ? function(e) {
  return e == null ? [] : (e = Object(e), ia(Rn(e), function(t) {
    return xf.call(e, t);
  }));
} : Ef;
const Af = Tf;
function Mn(e) {
  return $f(e, Ft, Af);
}
var If = 1, Pf = Object.prototype, Cf = Pf.hasOwnProperty;
function Df(e, t, r, n, i, a) {
  var s = r & If, o = Mn(e), l = o.length, u = Mn(t), c = u.length;
  if (l != c && !s)
    return !1;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(s ? f in t : Cf.call(t, f)))
      return !1;
  }
  var d = a.get(e), h = a.get(t);
  if (d && h)
    return d == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var w = s; ++p < l; ) {
    f = o[p];
    var T = e[f], A = t[f];
    if (n)
      var I = s ? n(A, T, f, t, e, a) : n(T, A, f, e, t, a);
    if (!(I === void 0 ? T === A || i(T, A, r, n, a) : I)) {
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
var qf = Me(se, "DataView");
const Er = qf;
var jf = Me(se, "Promise");
const _r = jf;
var Bf = Me(se, "Set");
const xr = Bf;
var Lf = Me(se, "WeakMap");
const Tr = Lf;
var Nn = "[object Map]", kf = "[object Object]", Vn = "[object Promise]", Hn = "[object Set]", Un = "[object WeakMap]", Wn = "[object DataView]", Ff = Re(Er), Rf = Re(ut), Mf = Re(_r), Nf = Re(xr), Vf = Re(Tr), qe = xe;
(Er && qe(new Er(new ArrayBuffer(1))) != Wn || ut && qe(new ut()) != Nn || _r && qe(_r.resolve()) != Vn || xr && qe(new xr()) != Hn || Tr && qe(new Tr()) != Un) && (qe = function(e) {
  var t = xe(e), r = t == kf ? e.constructor : void 0, n = r ? Re(r) : "";
  if (n)
    switch (n) {
      case Ff:
        return Wn;
      case Rf:
        return Nn;
      case Mf:
        return Vn;
      case Nf:
        return Hn;
      case Vf:
        return Un;
    }
  return t;
});
const zn = qe;
var Hf = 1, Gn = "[object Arguments]", Kn = "[object Array]", xt = "[object Object]", Uf = Object.prototype, Xn = Uf.hasOwnProperty;
function Wf(e, t, r, n, i, a) {
  var s = F(e), o = F(t), l = s ? Kn : zn(e), u = o ? Kn : zn(t);
  l = l == Gn ? xt : l, u = u == Gn ? xt : u;
  var c = l == xt, p = u == xt, f = l == u;
  if (f && cr(e)) {
    if (!cr(t))
      return !1;
    s = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new de()), s || li(e) ? na(e, t, r, n, i, a) : Sf(e, t, l, r, n, i, a);
  if (!(r & Hf)) {
    var d = c && Xn.call(e, "__wrapped__"), h = p && Xn.call(t, "__wrapped__");
    if (d || h) {
      var g = d ? e.value() : e, w = h ? t.value() : t;
      return a || (a = new de()), i(g, w, r, n, a);
    }
  }
  return f ? (a || (a = new de()), Df(e, t, r, n, i, a)) : !1;
}
function Qt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : Wf(e, t, r, n, Qt, i);
}
var zf = 1, Gf = 2;
function Kf(e, t, r, n) {
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
      if (!(f === void 0 ? Qt(c, u, zf | Gf, n, p) : f))
        return !1;
    }
  }
  return !0;
}
function aa(e) {
  return e === e && !ne(e);
}
function Xf(e) {
  for (var t = Ft(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, aa(i)];
  }
  return t;
}
function sa(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Qf(e) {
  var t = Xf(e);
  return t.length == 1 && t[0][2] ? sa(t[0][0], t[0][1]) : function(r) {
    return r === e || Kf(r, e, t);
  };
}
function Yf(e, t) {
  return e != null && t in Object(e);
}
function Jf(e, t) {
  return e != null && xi(e, t, Yf);
}
var Zf = 1, ed = 2;
function td(e, t) {
  return Fr(e) && aa(t) ? sa(pt(e), t) : function(r) {
    var n = Xr(r, e);
    return n === void 0 && n === t ? Jf(r, e) : Qt(t, n, Zf | ed);
  };
}
function rd(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function nd(e) {
  return function(t) {
    return Vi(t, e);
  };
}
function id(e) {
  return Fr(e) ? rd(pt(e)) : nd(e);
}
function mt(e) {
  return typeof e == "function" ? e : e == null ? ci : typeof e == "object" ? F(e) ? td(e[0], e[1]) : Qf(e) : id(e);
}
function ad(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!kt(t)) {
      var a = mt(r);
      t = Ft(t), r = function(o) {
        return a(i[o], o, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
function sd(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Qn = 1 / 0, od = 17976931348623157e292;
function ld(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = wr(e), e === Qn || e === -Qn) {
    var t = e < 0 ? -1 : 1;
    return t * od;
  }
  return e === e ? e : 0;
}
function rn(e) {
  var t = ld(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ud = Math.max;
function cd(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : rn(r);
  return i < 0 && (i = ud(n + i, 0)), sd(e, mt(t), i);
}
var fd = ad(cd);
const oa = fd;
var dd = "[object Boolean]";
function la(e) {
  return e === !0 || e === !1 || Oe(e) && xe(e) == dd;
}
function ua(e, t) {
  var r = {};
  return t = mt(t), Dr(e, function(n, i, a) {
    Hi(r, i, t(n, i, a));
  }), r;
}
const pd = {
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
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null,
      formElement: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return ua(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((t) => {
      let r = "";
      const n = e.querySelector(`[name="${t}"]`);
      n ? r = n.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${t}[]"]`) ? r = [] : (e.querySelector(`[name^="${t}."]`) || e.querySelector(`[name^="${t}["]`)) && (r = {}), this.$put(t, r);
    }), this.missingAttributes = [], this.submitOnChange === !0 ? this.$watch("values", () => {
      this.$nextTick(() => this.request());
    }, { deep: !0 }) : F(this.submitOnChange) && this.submitOnChange.forEach((t) => {
      this.$watch(`values.${t}`, () => {
        this.$nextTick(() => this.request());
      }, { deep: !0 });
    });
  },
  methods: {
    hasError(e) {
      return e in this.errors;
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return Ui(this.values, e, t);
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
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        la(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton
      ).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    async request() {
      await this.$nextTick(), this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : ea(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), m.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch(async (n) => {
        if (this.processing = !1, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = oa(Object.keys(this.errors), (a) => this.formElement.querySelector(`[data-validation-key="${a}"]`));
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
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) ? e[r] : (G(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Xr(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, hd = {
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
}, md = { ref: "input" };
function vd(e, t, r, n, i, a) {
  return q(), pe("div", md, [
    re(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const gd = /* @__PURE__ */ Ve(hd, [["render", vd]]), yd = {
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
function bd(e, t, r, n, i, a) {
  const s = ti("Render");
  return i.html ? (q(), K(s, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? re(e.$slots, "default", { key: 1 }) : Lt("", !0);
}
const wd = /* @__PURE__ */ Ve(yd, [["render", bd]]), Sd = ["href", "onClick"], Od = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !0
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
        la(t.confirm) ? "" : t.confirm,
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
      t.replace ? m.replace(t.href) : m.visit(t.href);
    }
    return (i, a) => (q(), pe("a", {
      href: e.href,
      onClick: Ea(r, ["prevent"])
    }, [
      re(i.$slots, "default")
    ], 8, Sd));
  }
}, $d = {
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
      Dialog: Wr,
      DialogPanel: zr,
      TransitionRoot: Ze,
      TransitionChild: Je
    });
  }
};
function Ed(e, t) {
  var r = -1, n = kt(e) ? Array(e.length) : [];
  return qr(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
function ca(e, t) {
  var r = F(e) ? _i : Ed;
  return r(e, mt(t));
}
const _d = {
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
      headlessListener: null
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.model) ? this.model.length > 0 : !1 : !(this.model === null || this.model === "");
    }
  },
  watch: {
    modelValue(e, t) {
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    }
  },
  mounted() {
    this.element = this.$refs.select.querySelector("select"), this.choices && this.initChoices(this.element);
  },
  beforeUnmount() {
    var e;
    this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.choicesInstance.destroy());
  },
  methods: {
    setValueOnChoices(e) {
      Array.isArray(e) && (e = ca(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e === null && (e = ""), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return oa(this.choicesInstance._store.choices, (t) => t.value == e);
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
      const t = Array.from(
        e.querySelectorAll("option:not([placeholder])")
      ).length, r = this;
      import("choices.js").then((n) => {
        const i = Object.assign({}, this.choices, this.jsChoicesOptions);
        if (r.choicesInstance = new n.default(e, i), r.stack > 0 && (r.headlessListener = function(a) {
          a.target === e && r.choicesInstance.showDropdown();
        }, document.querySelector("#headlessui-portal-root").addEventListener("click", r.headlessListener, { capture: !0 })), this.choicesInstance.containerInner.element.setAttribute(
          "data-select-name",
          e.name
        ), e.hasAttribute("dusk")) {
          const a = e.getAttribute("dusk");
          e.removeAttribute("dusk"), this.choicesInstance.containerInner.element.setAttribute("dusk", a);
        }
        this.handlePlaceholderVisibility(), this.updateHasSelectionAttribute(), e.addEventListener("change", function() {
          if (r.$emit("update:modelValue", r.choicesInstance.getValue(!0)), !r.multiple || t < 1)
            return;
          r.choicesInstance.getValue().length >= t && r.choicesInstance.hideDropdown();
        }), this.choicesInstance.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
          r.choicesInstance.hideDropdown();
        }), e.addEventListener("showDropdown", function() {
          if (r.multiple || !r.modelValue)
            return;
          const a = r.getItemOfCurrentModel(), s = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${a.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(s, 1), r.choicesInstance._highlightChoice(s);
        }), this.setValueOnChoices(this.modelValue);
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, xd = { ref: "select" };
function Td(e, t, r, n, i, a) {
  return q(), pe("div", xd, [
    re(e.$slots, "default")
  ], 512);
}
const Ad = /* @__PURE__ */ Ve(_d, [["render", Td]]), Id = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = ua(e, (i) => i.join(`
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
function fa(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Pd(e, t, r) {
  e = Nr(e), t = Ht(t);
  var n = e.length;
  r = r === void 0 ? n : fa(rn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Cd(e, t) {
  var r = [];
  return qr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Dd(e, t) {
  var r = F(e) ? ia : Cd;
  return r(e, mt(t));
}
function Yn(e, t) {
  return Qt(e, t);
}
function Tt(e, t, r) {
  return e = Nr(e), r = r == null ? 0 : fa(rn(r), 0, e.length), t = Ht(t), e.slice(r, r + t.length) == t;
}
const qd = {
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
      return !Yn(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = Qr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    oe(e, (r, n) => {
      if (Tt(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t) {
      return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, oe(e, (t, r) => {
        Tt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Dd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ca(r, (i) => i.key).sort();
      Yn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Be(() => {
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
        if (!Pd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), s = a[1].substring(0, a[1].length - 1);
        parseInt(s) == s ? (i = a[0], F(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Tt(e, "perPage") || Tt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var o;
      typeof r > "u" && (r = !0);
      let n = {};
      oe(e, (l, u) => {
        if (!F(l)) {
          n[u] = l;
          return;
        }
        l.length !== 0 && l.forEach((c, p) => {
          n[`${u}[${p}]`] = c;
        });
      });
      let i = "";
      oe(n, (l, u) => {
        l === null || l === [] || (i && (i += "&"), i += `${u}=${l}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      this.isLoading = !0;
      let s = null;
      typeof t < "u" && t && (s = (o = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : o.value), m.replace(a).then(() => {
        this.isLoading = !1, typeof t < "u" && t && Be(() => {
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
      this.selectedItems = F(e) ? e : [];
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
}, jd = {
  data() {
    return {
      isMounted: !1
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function Bd(e, t, r, n, i, a) {
  return i.isMounted ? (q(), K(ei, _a(xa({ key: 0 }, e.$attrs)), [
    re(e.$slots, "default")
  ], 16)) : Lt("", !0);
}
const Ld = /* @__PURE__ */ Ve(jd, [["render", Bd]]), kd = {
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
        Be(() => e.default.update(this.element));
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
}, Fd = { ref: "textarea" };
function Rd(e, t, r, n, i, a) {
  return q(), pe("div", Fd, [
    re(e.$slots, "default")
  ], 512);
}
const Md = /* @__PURE__ */ Ve(kd, [["render", Rd]]), Nd = {
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
      TransitionRoot: Ze,
      TransitionChild: Je
    });
  }
}, Vd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Hd = {
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
      positions: Vd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: le,
      TransitionRoot: Ze,
      TransitionChild: Je
    });
  }
}, Ud = {
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
            if (n.length === 1 && Zi(n) === "default") {
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
}, Wd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Ze,
      TransitionChild: Je
    });
  }
}, zd = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && Be(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Qr(i, 100)), i();
  }
}, Ar = {
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
    Ar.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Ar.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Yd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : !1, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, lu).component(`${r}Data`, hu).component(`${r}Defer`, Tu).component(`${r}Dialog`, Au).component(`${r}Dropdown`, Lc).component(`${r}DynamicHtml`, kc).component(`${r}Errors`, Fc).component(`${r}Event`, Rc).component(`${r}File`, Hc).component(`${r}Flash`, Uc).component(`${r}Form`, pd).component(`${r}Input`, gd).component(`${r}Lazy`, wd).component(`${r}Modal`, $d).component(`${r}OnClickOutside`, Wi).component(`${r}Render`, le).component(`${r}Select`, Ad).component(`${r}State`, Id).component(`${r}Table`, qd).component(`${r}Teleport`, Ld).component(`${r}Textarea`, Md).component(`${r}Toast`, Nd).component(`${r}Toasts`, Hd).component(`${r}Toggle`, Ud).component(`${r}Transition`, Wd).component(t.link_component, Od).directive(`${r}PreserveScroll`, zd), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ne(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Ar.init(t.progress_bar);
    }
    oe(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Jd(e, t, r) {
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
  Eo as SpladeApp,
  Yd as SpladePlugin,
  Xd as renderSpladeApp,
  Jd as startServer
};
