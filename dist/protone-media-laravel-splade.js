import Yn from "axios";
import { ref as y, computed as I, watch as dt, openBlock as j, createBlock as K, unref as V, createCommentVNode as Ft, h as R, onMounted as M, createElementBlock as de, createElementVNode as lr, provide as te, inject as U, nextTick as st, KeepAlive as Jn, normalizeStyle as fn, createVNode as va, Fragment as Ar, renderList as ma, cloneVNode as ga, watchEffect as Z, defineComponent as W, onUnmounted as _e, Teleport as Zn, reactive as ya, onBeforeUnmount as ba, renderSlot as re, resolveComponent as ei, withCtx as wa, withModifiers as Sa, normalizeProps as Oa, mergeProps as $a } from "vue";
function Ea(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function _a(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var xa = _a();
const Ta = xa;
function Aa(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Pa = typeof global == "object" && global && global.Object === Object && global;
const ti = Pa;
var Ia = typeof self == "object" && self && self.Object === Object && self, Ca = ti || Ia || Function("return this")();
const oe = Ca;
var Da = oe.Symbol;
const Se = Da;
var ri = Object.prototype, ja = ri.hasOwnProperty, Ba = ri.toString, tt = Se ? Se.toStringTag : void 0;
function Fa(e) {
  var t = ja.call(e, tt), r = e[tt];
  try {
    e[tt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ba.call(e);
  return n && (t ? e[tt] = r : delete e[tt]), i;
}
var qa = Object.prototype, Ra = qa.toString;
function La(e) {
  return Ra.call(e);
}
var ka = "[object Null]", Ma = "[object Undefined]", dn = Se ? Se.toStringTag : void 0;
function xe(e) {
  return e == null ? e === void 0 ? Ma : ka : dn && dn in Object(e) ? Fa(e) : La(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var Na = "[object Arguments]";
function pn(e) {
  return Oe(e) && xe(e) == Na;
}
var ni = Object.prototype, Ha = ni.hasOwnProperty, Va = ni.propertyIsEnumerable, Ua = pn(function() {
  return arguments;
}()) ? pn : function(e) {
  return Oe(e) && Ha.call(e, "callee") && !Va.call(e, "callee");
};
const ii = Ua;
var Wa = Array.isArray;
const N = Wa;
function za() {
  return !1;
}
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, hn = ai && typeof module == "object" && module && !module.nodeType && module, Ga = hn && hn.exports === ai, vn = Ga ? oe.Buffer : void 0, Ka = vn ? vn.isBuffer : void 0, Xa = Ka || za;
const ur = Xa;
var Qa = 9007199254740991, Ya = /^(?:0|[1-9]\d*)$/;
function Pr(e, t) {
  var r = typeof e;
  return t = t == null ? Qa : t, !!t && (r == "number" || r != "symbol" && Ya.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ja = 9007199254740991;
function Ir(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ja;
}
var Za = "[object Arguments]", eo = "[object Array]", to = "[object Boolean]", ro = "[object Date]", no = "[object Error]", io = "[object Function]", ao = "[object Map]", oo = "[object Number]", so = "[object Object]", lo = "[object RegExp]", uo = "[object Set]", co = "[object String]", fo = "[object WeakMap]", po = "[object ArrayBuffer]", ho = "[object DataView]", vo = "[object Float32Array]", mo = "[object Float64Array]", go = "[object Int8Array]", yo = "[object Int16Array]", bo = "[object Int32Array]", wo = "[object Uint8Array]", So = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", $o = "[object Uint32Array]", D = {};
D[vo] = D[mo] = D[go] = D[yo] = D[bo] = D[wo] = D[So] = D[Oo] = D[$o] = !0;
D[Za] = D[eo] = D[po] = D[to] = D[ho] = D[ro] = D[no] = D[io] = D[ao] = D[oo] = D[so] = D[lo] = D[uo] = D[co] = D[fo] = !1;
function Eo(e) {
  return Oe(e) && Ir(e.length) && !!D[xe(e)];
}
function _o(e) {
  return function(t) {
    return e(t);
  };
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, it = oi && typeof module == "object" && module && !module.nodeType && module, xo = it && it.exports === oi, er = xo && ti.process, To = function() {
  try {
    var e = it && it.require && it.require("util").types;
    return e || er && er.binding && er.binding("util");
  } catch {
  }
}();
const mn = To;
var gn = mn && mn.isTypedArray, Ao = gn ? _o(gn) : Eo;
const si = Ao;
var Po = Object.prototype, Io = Po.hasOwnProperty;
function Co(e, t) {
  var r = N(e), n = !r && ii(e), i = !r && !n && ur(e), a = !r && !n && !i && si(e), o = r || n || i || a, s = o ? Aa(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Io.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Pr(u, l))) && s.push(u);
  return s;
}
var Do = Object.prototype;
function jo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Do;
  return e === r;
}
function Bo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Fo = Bo(Object.keys, Object);
const qo = Fo;
var Ro = Object.prototype, Lo = Ro.hasOwnProperty;
function ko(e) {
  if (!jo(e))
    return qo(e);
  var t = [];
  for (var r in Object(e))
    Lo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ne(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mo = "[object AsyncFunction]", No = "[object Function]", Ho = "[object GeneratorFunction]", Vo = "[object Proxy]";
function li(e) {
  if (!ne(e))
    return !1;
  var t = xe(e);
  return t == No || t == Ho || t == Mo || t == Vo;
}
function qt(e) {
  return e != null && Ir(e.length) && !li(e);
}
function Rt(e) {
  return qt(e) ? Co(e) : ko(e);
}
function Cr(e, t) {
  return e && Ta(e, t, Rt);
}
function Uo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!qt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var Wo = Uo(Cr);
const Dr = Wo;
function ui(e) {
  return e;
}
function ci(e) {
  return typeof e == "function" ? e : ui;
}
function zo(e, t) {
  var r = N(e) ? Ea : Dr;
  return r(e, ci(t));
}
function be(e, t) {
  return e && Cr(e, ci(t));
}
var Go = Array.prototype, Ko = Go.reverse;
function Xo(e) {
  return e == null ? e : Ko.call(e);
}
const It = y(0), cr = y(1), F = y({}), le = y(0), $e = typeof window > "u";
function Qo(e, t, r) {
  $e || window.addEventListener("popstate", Yo.bind(this)), Object.keys(t).length > 0 && It.value++, Fr(r), Lt(r.head), qr(e);
  const n = $e ? "" : location.href, i = jr(
    n,
    r.head,
    e,
    t,
    {},
    cr.value,
    It.value
  );
  fi(i);
}
function Yo(e) {
  !e.state || (F.value = e.state, le.value = 0, Lt(F.value.head), qr(F.value.html, F.value.rememberedState.scrollY));
}
function jr(e, t, r, n, i, a, o) {
  const s = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: o
  };
  return F.value = s, s;
}
function Jo(e) {
  $e || window.history.pushState(e, "", e.url);
}
function Zo(e) {
  const t = jr(
    e,
    JSON.parse(JSON.stringify(F.value.head)),
    F.value.html,
    F.value.dynamics,
    { ...F.value.rememberedState },
    F.value.pageVisitId,
    F.value.dynamicVisitId
  );
  $e || window.history.replaceState(t, "", t.url);
}
function fi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const tr = y(0);
function es(e, t) {
  tr.value++;
  const r = e.request.responseURL;
  if (e.data.splade.lazy)
    return;
  e.data.splade.modal && le.value++, Fr(e.data.splade), Lt(e.data.splade.head);
  const n = r === F.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return cs(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  le.value = 0;
  let i = e.data.html, a = e.data.dynamics;
  const o = Object.keys(F.value.dynamics).length > 0, s = Object.keys(a).length > 0;
  t ? (s && be(a, (u, c) => {
    a[c] += `<!-- ${tr.value} -->`;
  }), (!s || !o) && (i += `<!-- ${tr.value} -->`)) : (s && It.value++, (!s || !o) && cr.value++), qr(i, 0);
  const l = jr(
    r,
    e.data.splade.head,
    i,
    a,
    F.value.rememberedState ? { ...F.value.rememberedState } : {},
    cr.value,
    It.value
  );
  t ? fi(l) : Jo(l);
}
function ts() {
  le.value--, Lt(ns(le.value));
}
const di = y({}), pi = (e) => di.value[e], rs = (e) => Object.keys(pi.value[e]).length > 0, hi = y({}), ns = (e) => hi.value[e], vi = y({}), is = (e) => vi.value[e], Ue = y([]);
function as(e) {
  Ue.value.push(e);
}
const os = I(() => Xo(Ue.value));
function ss(e) {
  Ue.value[e].dismissed = !0, Ue.value[e].html = null;
}
const Br = y(null);
function ls(e, t, r, n) {
  let i, a;
  const o = new Promise((s, l) => {
    i = s, a = l;
  });
  return Br.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, o;
}
function us() {
  Br.value = null;
}
const mi = y({});
function Fr(e) {
  mi.value = e.shared ? e.shared : {}, vi.value[le.value] = e.flash ? e.flash : {}, hi.value[le.value] = e.head ? e.head : {}, zo(e.toasts ? e.toasts : [], (t) => {
    Ue.value.push(t);
  }), di.value[le.value] = e.errors ? e.errors : {};
}
const gi = y(() => {
}), yi = y(() => {
}), bi = y(() => {
}), wi = y(() => {
});
function Lt(e) {
  gi.value(e);
}
function qr(e, t) {
  yi.value(e, t);
}
function cs(e, t) {
  bi.value(e, t);
}
function fs(e) {
  wi.value(e);
}
const Si = y({});
function Oi(e, t, r) {
  Si.value[e] = t, r && ds(e, t);
}
function ds(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ps(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Si.value[e];
}
function St(e, t) {
  $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Xe(e, t, r, n, i) {
  $e || Oi("scrollY", window.scrollY), St("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = Yn({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (o) => {
      r instanceof FormData && (o.percentage = Math.round(o.loaded / o.total * 100), St("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: o }));
    }
  });
  return a.then((o) => {
    es(o, i), St("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch((o) => {
    St("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o });
    const s = o.response.data.splade;
    s && (s.lazy || Fr(s)), o.response.status != 422 && fs(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function $i(e) {
  return Xe(e, "GET", {}, {}, !0);
}
function hs(e) {
  return Xe(e, "GET", {}, {}, !1);
}
function vs(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ms(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function gs(e, t) {
  return Xe(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function ys() {
  return $i(F.value.url);
}
const m = {
  init: Qo,
  replace: $i,
  visit: hs,
  modal: vs,
  slideover: ms,
  refresh: ys,
  request: Xe,
  lazy: gs,
  replaceUrlOfCurrentPage: Zo,
  htmlForDynamicComponent(e) {
    return F.value.dynamics[e];
  },
  setOnHead(e) {
    gi.value = e;
  },
  setOnHtml(e) {
    yi.value = e;
  },
  setOnModal(e) {
    bi.value = e;
  },
  setOnServerError(e) {
    wi.value = e;
  },
  hasValidationErrors: rs,
  validationErrors: pi,
  sharedData: mi,
  flashData: is,
  toasts: Ue,
  toastsReversed: os,
  confirmModal: Br,
  confirm: ls,
  clearConfirmModal: us,
  pushToast: as,
  dismissToast: ss,
  restore: ps,
  remember: Oi,
  popStack: ts,
  currentStack: le,
  pageVisitId: I(() => F.value.pageVisitId),
  dynamicVisitId: I(() => F.value.dynamicVisitId),
  isSsr: $e
};
var bs = "[object String]";
function Ot(e) {
  return typeof e == "string" || !N(e) && Oe(e) && xe(e) == bs;
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
    const t = e, r = y(null);
    function n() {
      r.value = R({
        template: t.html
      });
    }
    return dt(() => t.html, n, { immediate: !0 }), (i, a) => e.html ? (j(), K(V(r), { key: 0 })) : Ft("", !0);
  }
}, ws = {
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
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(s) {
      s.keyCode === 27 && o();
    }
    function o() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    return M(() => i()), (s, l) => (j(), de("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: o
    }, [
      lr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Ss = {
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
    const r = y(), n = y([]), i = y(null), a = U("$spladeOptions") || {}, o = I(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function s() {
      i.value = null;
    }
    function l(f) {
      n[f] = null, m.popStack();
    }
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      be(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, st(() => {
        m.isSsr || window.scrollTo(0, p), a.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(v) {
            v.preventDefault(), m.visit(d.href);
          }));
        });
      });
    }), m.setOnModal(function(f, p) {
      n.value[m.currentStack.value] = { html: f, type: p };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), (f, p) => (j(), de("div", null, [
      V(m).isSsr ? (j(), K(se, {
        key: `visit.${V(m).pageVisitId.value}`,
        style: fn(V(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), K(Jn, {
        key: 0,
        max: V(a).max_keep_alive
      }, [
        (j(), K(se, {
          key: `visit.${V(m).pageVisitId.value}`,
          style: fn(V(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      va(se, { html: e.components }, null, 8, ["html"]),
      (j(!0), de(Ar, null, ma(V(m).currentStack.value, (d) => (j(), K(se, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": V(m).currentStack.value === d,
        onClose: (v) => l(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (j(), K(ws, {
        key: 2,
        html: i.value,
        onClose: s
      }, null, 8, ["html"])) : Ft("", !0)
    ]));
  }
};
function Xd(e) {
  return () => R(Ss, e);
}
var Os = Object.prototype, $s = Os.hasOwnProperty;
function Es(e, t) {
  return e != null && $s.call(e, t);
}
var _s = "[object Symbol]";
function kt(e) {
  return typeof e == "symbol" || Oe(e) && xe(e) == _s;
}
var xs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ts = /^\w*$/;
function Rr(e, t) {
  if (N(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || kt(e) ? !0 : Ts.test(e) || !xs.test(e) || t != null && e in Object(t);
}
var As = oe["__core-js_shared__"];
const rr = As;
var yn = function() {
  var e = /[^.]+$/.exec(rr && rr.keys && rr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ps(e) {
  return !!yn && yn in e;
}
var Is = Function.prototype, Cs = Is.toString;
function Le(e) {
  if (e != null) {
    try {
      return Cs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ds = /[\\^$.*+?()[\]{}|]/g, js = /^\[object .+?Constructor\]$/, Bs = Function.prototype, Fs = Object.prototype, qs = Bs.toString, Rs = Fs.hasOwnProperty, Ls = RegExp(
  "^" + qs.call(Rs).replace(Ds, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ks(e) {
  if (!ne(e) || Ps(e))
    return !1;
  var t = li(e) ? Ls : js;
  return t.test(Le(e));
}
function Ms(e, t) {
  return e == null ? void 0 : e[t];
}
function ke(e, t) {
  var r = Ms(e, t);
  return ks(r) ? r : void 0;
}
var Ns = ke(Object, "create");
const lt = Ns;
function Hs() {
  this.__data__ = lt ? lt(null) : {}, this.size = 0;
}
function Vs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Us = "__lodash_hash_undefined__", Ws = Object.prototype, zs = Ws.hasOwnProperty;
function Gs(e) {
  var t = this.__data__;
  if (lt) {
    var r = t[e];
    return r === Us ? void 0 : r;
  }
  return zs.call(t, e) ? t[e] : void 0;
}
var Ks = Object.prototype, Xs = Ks.hasOwnProperty;
function Qs(e) {
  var t = this.__data__;
  return lt ? t[e] !== void 0 : Xs.call(t, e);
}
var Ys = "__lodash_hash_undefined__";
function Js(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lt && t === void 0 ? Ys : t, this;
}
function Fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fe.prototype.clear = Hs;
Fe.prototype.delete = Vs;
Fe.prototype.get = Gs;
Fe.prototype.has = Qs;
Fe.prototype.set = Js;
function Zs() {
  this.__data__ = [], this.size = 0;
}
function Lr(e, t) {
  return e === t || e !== e && t !== t;
}
function Mt(e, t) {
  for (var r = e.length; r--; )
    if (Lr(e[r][0], t))
      return r;
  return -1;
}
var el = Array.prototype, tl = el.splice;
function rl(e) {
  var t = this.__data__, r = Mt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : tl.call(t, r, 1), --this.size, !0;
}
function nl(e) {
  var t = this.__data__, r = Mt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function il(e) {
  return Mt(this.__data__, e) > -1;
}
function al(e, t) {
  var r = this.__data__, n = Mt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function he(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
he.prototype.clear = Zs;
he.prototype.delete = rl;
he.prototype.get = nl;
he.prototype.has = il;
he.prototype.set = al;
var ol = ke(oe, "Map");
const ut = ol;
function sl() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (ut || he)(),
    string: new Fe()
  };
}
function ll(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Nt(e, t) {
  var r = e.__data__;
  return ll(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ul(e) {
  var t = Nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function cl(e) {
  return Nt(this, e).get(e);
}
function fl(e) {
  return Nt(this, e).has(e);
}
function dl(e, t) {
  var r = Nt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = sl;
ve.prototype.delete = ul;
ve.prototype.get = cl;
ve.prototype.has = fl;
ve.prototype.set = dl;
var pl = "Expected a function";
function kr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (kr.Cache || ve)(), r;
}
kr.Cache = ve;
var hl = 500;
function vl(e) {
  var t = kr(e, function(n) {
    return r.size === hl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var ml = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gl = /\\(\\)?/g, yl = vl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ml, function(r, n, i, a) {
    t.push(i ? a.replace(gl, "$1") : n || r);
  }), t;
});
const bl = yl;
function Ei(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var wl = 1 / 0, bn = Se ? Se.prototype : void 0, wn = bn ? bn.toString : void 0;
function Ht(e) {
  if (typeof e == "string")
    return e;
  if (N(e))
    return Ei(e, Ht) + "";
  if (kt(e))
    return wn ? wn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -wl ? "-0" : t;
}
function Mr(e) {
  return e == null ? "" : Ht(e);
}
function Nr(e, t) {
  return N(e) ? e : Rr(e, t) ? [e] : bl(Mr(e));
}
var Sl = 1 / 0;
function pt(e) {
  if (typeof e == "string" || kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Sl ? "-0" : t;
}
function _i(e, t, r) {
  t = Nr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = pt(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Ir(i) && Pr(o, i) && (N(e) || ii(e)));
}
function G(e, t) {
  return e != null && _i(e, t, Es);
}
function Y(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n;
}
var Ct = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ct || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function z({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = Ol(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return nr(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return nr({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return nr(s);
}
function nr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: o, ...s } = Ti(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = !1, f = [];
    for (let [p, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && f.push(p);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (o === "template") {
    if (l = xi(l != null ? l : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!$l(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return ga(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return R(o, Object.assign({}, s, u), l);
}
function xi(e) {
  return e.flatMap((t) => t.type === Ar ? xi(t.children) : [t]);
}
function Ol(...e) {
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
      let o = r[n];
      for (let s of o) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        s(i, ...a);
      }
    } });
  return t;
}
function Ti(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function $l(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let El = 0;
function _l() {
  return ++El;
}
function Me() {
  return _l();
}
var Ai = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ai || {});
function pe(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pi = Symbol("Context");
var qe = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qe || {});
function xl() {
  return Hr() !== null;
}
function Hr() {
  return U(Pi, null);
}
function Tl(e) {
  te(Pi, e);
}
const Vt = typeof window > "u" || typeof document > "u";
function Qe(e) {
  if (Vt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = pe(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let fr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ct || {}), Ii = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ii || {}), Al = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Al || {});
function Pl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(fr));
}
var Ci = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ci || {});
function Il(e, t = 0) {
  var r;
  return e === ((r = Qe(e)) == null ? void 0 : r.body) ? !1 : Y(t, { [0]() {
    return e.matches(fr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(fr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function at(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Cl = ["textarea", "input"].join(",");
function Dl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Cl)) != null ? r : !1;
}
function jl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function dr(e, t, r = !0, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, o = Array.isArray(e) ? r ? jl(e) : e : Pl(e);
  n = n != null ? n : a.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = o.length, p;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + f) % f;
    else {
      if (d < 0)
        return 3;
      if (d >= f)
        return 1;
    }
    p = o[d], p == null || p.focus(u), c += s;
  } while (p !== a.activeElement);
  return t & 6 && Dl(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function ir(e, t, r) {
  Vt || Z((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Bl(e, t, r = I(() => !0)) {
  function n(a, o) {
    if (!r.value || a.defaultPrevented)
      return;
    let s = o(a);
    if (s === null || !s.ownerDocument.documentElement.contains(s))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : pe(u);
      if (c != null && c.contains(s))
        return;
    }
    return !Il(s, Ci.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s);
  }
  let i = y(null);
  ir("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), ir("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), ir("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Dt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Dt || {});
let pr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Fl(e, t, r) {
  Vt || Z((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var hr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(hr || {});
function ql() {
  let e = y(0);
  return Fl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Di(e, t, r, n) {
  Vt || Z((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Rl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ji = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ji || {});
let rt = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let a = I(() => Qe(i));
  Ll({ ownerDocument: a }, I(() => Boolean(e.features & 16)));
  let o = kl({ ownerDocument: a, container: i, initialFocus: I(() => e.initialFocus) }, I(() => Boolean(e.features & 2)));
  Ml({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, I(() => Boolean(e.features & 8)));
  let s = ql();
  function l() {
    let u = pe(i);
    !u || Y(s.value, { [hr.Forwards]: () => dr(u, ct.First), [hr.Backwards]: () => dr(u, ct.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return R(Ar, [Boolean(f & 4) && R(pr, { as: "button", type: "button", onFocus: l, features: Dt.Focusable }), z({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && R(pr, { as: "button", type: "button", onFocus: l, features: Dt.Focusable })]);
  };
} }), { features: ji });
function Ll({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (at(r.value), r.value = null);
  }
  M(() => {
    dt(t, (a, o) => {
      a !== o && (a ? n() : i());
    }, { immediate: !0 });
  }), _e(i);
}
function kl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), a = y(!1);
  return M(() => a.value = !0), _e(() => a.value = !1), M(() => {
    dt([t, r, n], (o, s) => {
      if (o.every((u, c) => (s == null ? void 0 : s[c]) === u) || !n.value)
        return;
      let l = pe(t);
      !l || Rl(() => {
        var u, c;
        if (!a.value)
          return;
        let f = pe(r), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            i.value = p;
            return;
          }
        } else if (l.contains(p)) {
          i.value = p;
          return;
        }
        f ? at(f) : dr(l, ct.First | ct.NoScroll) === Ii.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Ml({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  Di((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Nl(s, u) ? (n.value = u, at(u)) : (o.preventDefault(), o.stopPropagation(), at(l)) : at(n.value);
  }, !0);
}
function Nl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Sn = "body > *", Ve = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
function On(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function $n(e) {
  let t = ye.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Hl(e, t = y(!0)) {
  Z((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Qe(n);
    if (i) {
      Ve.add(n);
      for (let a of ye.keys())
        a.contains(n) && ($n(a), ye.delete(a));
      i.querySelectorAll(Sn).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of Ve)
            if (a.contains(o))
              return;
          Ve.size === 1 && (ye.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), On(a));
        }
      }), r(() => {
        if (Ve.delete(n), Ve.size > 0)
          i.querySelectorAll(Sn).forEach((a) => {
            if (a instanceof HTMLElement && !ye.has(a)) {
              for (let o of Ve)
                if (a.contains(o))
                  return;
              ye.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), On(a);
            }
          });
        else
          for (let a of ye.keys())
            $n(a), ye.delete(a);
      });
    }
  });
}
let Bi = Symbol("ForcePortalRootContext");
function Vl() {
  return U(Bi, !1);
}
let vr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return te(Bi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Ul(e) {
  let t = Qe(e);
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
let Fi = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = I(() => Qe(n)), a = Vl(), o = U(qi, null), s = y(a === !0 || o == null ? Ul(n.value) : o.resolveTarget());
  return Z(() => {
    a || o != null && (s.value = o.resolveTarget());
  }), _e(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return R(Zn, { to: s.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), qi = Symbol("PortalGroupContext"), Wl = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ya({ resolveTarget() {
    return e.target;
  } });
  return te(qi, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ri = Symbol("StackContext");
var mr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(mr || {});
function zl() {
  return U(Ri, () => {
  });
}
function Gl({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = zl();
  function a(...o) {
    n == null || n(...o), i(...o);
  }
  M(() => {
    dt(t, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), _e(() => {
    t.value && a(1, e, r);
  }), te(Ri, a);
}
let Li = Symbol("DescriptionContext");
function Kl() {
  let e = U(Li, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xl({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return te(Li, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Qd = W({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Kl(), i = `headlessui-description-${Me()}`;
  return M(() => _e(n.register(i))), () => {
    let { name: a = "Description", slot: o = y({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: V(p) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
function Vr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, a, o) {
    return n.addEventListener(i, a, o), r.add(() => n.removeEventListener(i, a, o));
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
function Ql() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Yl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yl || {});
let gr = Symbol("DialogContext");
function ht(e) {
  let t = U(gr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ht), r;
  }
  return t;
}
let $t = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ur = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: $t }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = y(!1);
  M(() => {
    o.value = !0;
  });
  let s = y(0), l = Hr(), u = I(() => e.open === $t && l !== null ? Y(l.value, { [qe.Open]: !0, [qe.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), f = y(null), p = y(null), d = I(() => Qe(f));
  if (i({ el: f, $el: f }), !(e.open !== $t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === $t ? void 0 : e.open}`);
  let v = I(() => o.value && u.value ? 0 : 1), b = I(() => v.value === 0), w = I(() => s.value > 1), T = U(gr, null) !== null, A = I(() => w.value ? "parent" : "leaf");
  Hl(f, I(() => w.value ? b.value : !1)), Gl({ type: "Dialog", enabled: I(() => v.value === 0), element: f, onUpdate: (g, S, _) => {
    if (S === "Dialog")
      return Y(g, { [mr.Add]() {
        c.value.add(_), s.value += 1;
      }, [mr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Xl({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), E = `headlessui-dialog-${Me()}`, O = y(null), h = { titleId: O, panelRef: y(null), dialogState: v, setTitleId(g) {
    O.value !== g && (O.value = g);
  }, close() {
    t("close", !1);
  } };
  return te(gr, h), Bl(() => {
    var g, S, _;
    return [...Array.from((S = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(pe(p)) || h.panelRef.value && x.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, S) => {
    h.close(), st(() => S == null ? void 0 : S.focus());
  }, I(() => v.value === 0 && !w.value)), Di((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === Ai.Escape && v.value === 0 && (w.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Z((g) => {
    var S;
    if (v.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let x = Vr();
    function $(q, H, L) {
      let k = q.style.getPropertyValue(H);
      return Object.assign(q.style, { [H]: L }), x.add(() => {
        Object.assign(q.style, { [H]: k });
      });
    }
    let C = _ == null ? void 0 : _.documentElement, B = ((S = _.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), B > 0) {
      let q = C.clientWidth - C.offsetWidth, H = B - q;
      $(C, "paddingRight", `${H}px`);
    }
    if (Ql()) {
      let q = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${q}px`), $(C, "width", "100%"), x.add(() => window.scrollTo(0, q));
    }
    g(x.dispose);
  }), Z((g) => {
    if (v.value !== 0)
      return;
    let S = pe(f);
    if (!S)
      return;
    let _ = new IntersectionObserver((x) => {
      for (let $ of x)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && h.close();
    });
    _.observe(S), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": O.value, "aria-describedby": P.value }, { open: S, initialFocus: _, ...x } = e, $ = { open: v.value === 0 };
    return R(vr, { force: !0 }, () => [R(Fi, () => R(Wl, { target: f.value }, () => R(vr, { force: !1 }, () => R(rt, { initialFocus: _, containers: c, features: b.value ? Y(A.value, { parent: rt.features.RestoreFocus, leaf: rt.features.All & ~rt.features.FocusLock }) : rt.features.None }, () => z({ ourProps: g, theirProps: x, slot: $, attrs: r, slots: n, visible: v.value === 0, features: Ct.RenderStrategy | Ct.Static, name: "Dialog" }))))), R(pr, { features: Dt.Hidden, ref: p })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = ht("DialogOverlay"), i = `headlessui-dialog-overlay-${Me()}`;
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => z({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ht("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Me()}`, o = y(null);
  return n({ el: o, $el: o }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: a, ref: o, "aria-hidden": !0 };
    return R(vr, { force: !0 }, () => R(Fi, () => z({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Wr = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ht("DialogPanel"), a = `headlessui-dialog-panel-${Me()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: a, ref: i.panelRef, onClick: o };
    return z({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = ht("DialogTitle"), i = `headlessui-dialog-title-${Me()}`;
  return M(() => {
    n.setTitleId(i), _e(() => n.setTitleId(null));
  }), () => z({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Jl(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function ar(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Et(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var yr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(yr || {});
function Zl(e, t) {
  let r = Vr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function En(e, t, r, n, i, a) {
  let o = Vr(), s = a !== void 0 ? Jl(a) : () => {
  };
  return Et(e, ...i), ar(e, ...t, ...r), o.nextFrame(() => {
    Et(e, ...r), ar(e, ...n), o.add(Zl(e, (l) => (Et(e, ...n, ...t), ar(e, ...i), s(l))));
  }), o.add(() => Et(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let zr = Symbol("TransitionContext");
var eu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(eu || {});
function tu() {
  return U(zr, null) !== null;
}
function ru() {
  let e = U(zr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function nu() {
  let e = U(Gr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Gr = Symbol("NestingContext");
function Ut(e) {
  return "children" in e ? Ut(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ki(e) {
  let t = y([]), r = y(!1);
  M(() => r.value = !0), _e(() => r.value = !1);
  function n(a, o = we.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (Y(o, { [we.Unmount]() {
      t.value.splice(s, 1);
    }, [we.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Ut(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Mi = Ct.RenderStrategy, Ye = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!tu() && xl())
    return () => R(Je, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = y(null), o = y("visible"), s = I(() => e.unmount ? we.Unmount : we.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = ru(), { register: c, unregister: f } = nu(), p = { value: !0 }, d = Me(), v = { value: !1 }, b = ki(() => {
    v.value || (o.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let S = c(d);
    _e(S);
  }), Z(() => {
    if (s.value === we.Hidden && !!d) {
      if (l && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      Y(o.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let w = Ce(e.enter), T = Ce(e.enterFrom), A = Ce(e.enterTo), P = Ce(e.entered), E = Ce(e.leave), O = Ce(e.leaveFrom), h = Ce(e.leaveTo);
  M(() => {
    Z(() => {
      if (o.value === "visible") {
        let S = pe(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(S) {
    let _ = p.value && !u.value, x = pe(a);
    !x || !(x instanceof HTMLElement) || _ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? En(x, w, T, A, P, ($) => {
      v.value = !1, $ === yr.Finished && t("afterEnter");
    }) : En(x, E, O, h, P, ($) => {
      v.value = !1, $ === yr.Finished && (Ut(b) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    dt([l], (S, _, x) => {
      g(x), p.value = !1;
    }, { immediate: !0 });
  }), te(Gr, b), Tl(I(() => Y(o.value, { visible: qe.Open, hidden: qe.Closed }))), () => {
    let { appear: S, show: _, enter: x, enterFrom: $, enterTo: C, entered: B, leave: q, leaveFrom: H, leaveTo: L, ...k } = e;
    return z({ theirProps: k, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Mi, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), iu = Ye, Je = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), a = I(() => e.show === null && i !== null ? Y(i.value, { [qe.Open]: !0, [qe.Closed]: !1 }) : e.show);
  Z(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = y(a.value ? "visible" : "hidden"), s = ki(() => {
    o.value = "hidden";
  }), l = y(!0), u = { show: a, appear: I(() => e.appear || !l.value) };
  return M(() => {
    Z(() => {
      l.value = !1, a.value ? o.value = "visible" : Ut(s) || (o.value = "hidden");
    });
  }), te(Gr, s), te(zr, u), () => {
    let c = Ti(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return z({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [R(iu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Mi, visible: o.value === "visible", name: "Transition" });
  };
} });
const au = {
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
      Dialog: Ur,
      DialogPanel: Wr,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
};
function Ni(e, t) {
  t = Nr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function Kr(e, t, r) {
  var n = e == null ? void 0 : Ni(e, t);
  return n === void 0 ? r : n;
}
var ou = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const _n = ou;
function Hi(e, t, r) {
  t == "__proto__" && _n ? _n(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var su = Object.prototype, lu = su.hasOwnProperty;
function uu(e, t, r) {
  var n = e[t];
  (!(lu.call(e, t) && Lr(n, r)) || r === void 0 && !(t in e)) && Hi(e, t, r);
}
function cu(e, t, r, n) {
  if (!ne(e))
    return e;
  t = Nr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = pt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ne(c) ? c : Pr(t[i + 1]) ? [] : {});
    }
    uu(s, l, u), s = s[l];
  }
  return e;
}
function Vi(e, t, r) {
  return e == null ? e : cu(e, t, r);
}
const fu = {
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
          return Kr(e.values, r);
        },
        set(t, r, n) {
          Vi(e.values, r, n);
        }
      })
    );
  }
}, du = {
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
    }
  },
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: !1
    };
  },
  mounted() {
    this.$nextTick(this.performRequest);
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Yn(e).then((t) => {
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
}, pu = {
  render() {
    return this.$slots.default({
      Dialog: Ur,
      DialogPanel: Wr
    });
  }
}, Ui = {
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
    }
  },
  setup(e) {
    const t = e, r = y(null), n = y(null), i = y(null);
    return M(() => {
      r.value = (a) => {
        a.target === n.value || n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), ba(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, o) => (j(), de("div", {
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
function Re(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function X(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Xr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Be = Math.max, jt = Math.min, We = Math.round;
function br() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Wi() {
  return !/^((?!chrome|android).)*safari/i.test(br());
}
function ze(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && X(e) && (i = e.offsetWidth > 0 && We(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && We(n.height) / e.offsetHeight || 1);
  var o = Re(e) ? Q(e) : window, s = o.visualViewport, l = !Wi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
  return {
    width: f,
    height: p,
    top: c,
    right: u + f,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Qr(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function hu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vu(e) {
  return e === Q(e) || !X(e) ? Qr(e) : hu(e);
}
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Te(e) {
  return ((Re(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yr(e) {
  return ze(Te(e)).left + Qr(e).scrollLeft;
}
function ee(e) {
  return Q(e).getComputedStyle(e);
}
function Jr(e) {
  var t = ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function mu(e) {
  var t = e.getBoundingClientRect(), r = We(t.width) / e.offsetWidth || 1, n = We(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function gu(e, t, r) {
  r === void 0 && (r = !1);
  var n = X(t), i = X(t) && mu(t), a = Te(t), o = ze(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ie(t) !== "body" || Jr(a)) && (s = vu(t)), X(t) ? (l = ze(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Yr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function zi(e) {
  var t = ze(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Wt(e) {
  return ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (Xr(e) ? e.host : null) || Te(e);
}
function Gi(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : X(e) && Jr(e) ? e : Gi(Wt(e));
}
function ot(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Gi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), o = i ? [a].concat(a.visualViewport || [], Jr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(ot(Wt(o)));
}
function yu(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function xn(e) {
  return !X(e) || ee(e).position === "fixed" ? null : e.offsetParent;
}
function bu(e) {
  var t = /firefox/i.test(br()), r = /Trident/i.test(br());
  if (r && X(e)) {
    var n = ee(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Wt(e);
  for (Xr(i) && (i = i.host); X(i) && ["html", "body"].indexOf(ie(i)) < 0; ) {
    var a = ee(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function zt(e) {
  for (var t = Q(e), r = xn(e); r && yu(r) && ee(r).position === "static"; )
    r = xn(r);
  return r && (ie(r) === "html" || ie(r) === "body" && ee(r).position === "static") ? t : r || bu(e) || t;
}
var J = "top", ae = "bottom", Ee = "right", ue = "left", Gt = "auto", Kt = [J, ae, Ee, ue], Ge = "start", ft = "end", wu = "clippingParents", Ki = "viewport", nt = "popper", Su = "reference", Tn = /* @__PURE__ */ Kt.reduce(function(e, t) {
  return e.concat([t + "-" + Ge, t + "-" + ft]);
}, []), Ou = /* @__PURE__ */ [].concat(Kt, [Gt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ge, t + "-" + ft]);
}, []), $u = "beforeRead", Eu = "read", _u = "afterRead", xu = "beforeMain", Tu = "main", Au = "afterMain", Pu = "beforeWrite", Iu = "write", Cu = "afterWrite", wr = [$u, Eu, _u, xu, Tu, Au, Pu, Iu, Cu];
function Du(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function ju(e) {
  var t = Du(e);
  return wr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Bu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ge(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var De = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Fu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', An = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function qu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), An).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ge(De, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ge(De, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          wr.indexOf(t.phase) < 0 && console.error(ge(De, t.name, '"phase"', "either " + wr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ge(De, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ge(De, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ge(De, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ge(De, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + An.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ge(Fu, String(t.name), n, n));
      });
    });
  });
}
function Ru(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ce(e) {
  return e.split("-")[0];
}
function Lu(e) {
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
function ku(e, t) {
  var r = Q(e), n = Te(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = Wi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Yr(e),
    y: l
  };
}
function Mu(e) {
  var t, r = Te(e), n = Qr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Be(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Be(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Yr(e), l = -n.scrollTop;
  return ee(i || r).direction === "rtl" && (s += Be(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Nu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Xr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Sr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Hu(e, t) {
  var r = ze(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Pn(e, t, r) {
  return t === Ki ? Sr(ku(e, r)) : Re(t) ? Hu(t, r) : Sr(Mu(Te(e)));
}
function Vu(e) {
  var t = ot(Wt(e)), r = ["absolute", "fixed"].indexOf(ee(e).position) >= 0, n = r && X(e) ? zt(e) : e;
  return Re(n) ? t.filter(function(i) {
    return Re(i) && Nu(i, n) && ie(i) !== "body";
  }) : [];
}
function Uu(e, t, r, n) {
  var i = t === "clippingParents" ? Vu(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = Pn(e, u, n);
    return l.top = Be(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = Be(c.left, l.left), l;
  }, Pn(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ke(e) {
  return e.split("-")[1];
}
function Xi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ce(n) : null, a = n ? Ke(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case J:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case ae:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Ee:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ue:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Xi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ge:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ft:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Yi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Wu(e) {
  return Object.assign({}, Yi(), e);
}
function zu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Zr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? wu : s, u = r.rootBoundary, c = u === void 0 ? Ki : u, f = r.elementContext, p = f === void 0 ? nt : f, d = r.altBoundary, v = d === void 0 ? !1 : d, b = r.padding, w = b === void 0 ? 0 : b, T = Wu(typeof w != "number" ? w : zu(w, Kt)), A = p === nt ? Su : nt, P = e.rects.popper, E = e.elements[v ? A : p], O = Uu(Re(E) ? E : E.contextElement || Te(e.elements.popper), l, c, o), h = ze(e.elements.reference), g = Qi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), S = Sr(Object.assign({}, P, g)), _ = p === nt ? S : h, x = {
    top: O.top - _.top + T.top,
    bottom: _.bottom - O.bottom + T.bottom,
    left: O.left - _.left + T.left,
    right: _.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (p === nt && $) {
    var C = $[i];
    Object.keys(x).forEach(function(B) {
      var q = [Ee, ae].indexOf(B) >= 0 ? 1 : -1, H = [J, ae].indexOf(B) >= 0 ? "y" : "x";
      x[B] += C[H] * q;
    });
  }
  return x;
}
var In = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Cn = {
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
function Ku(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Cn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cn, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        b(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: Re(s) ? ot(s) : s.contextElement ? ot(s.contextElement) : [],
          popper: ot(l)
        };
        var P = ju(Lu([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Ru([].concat(P, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (qu(E), ce(c.options.placement) === Gt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = ee(l), g = h.marginTop, S = h.marginRight, _ = h.marginBottom, x = h.marginLeft;
          [g, S, _, x].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var T = c.elements, A = T.reference, P = T.popper;
          if (!Dn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(In);
            return;
          }
          c.rects = {
            reference: gu(A, zt(P), c.options.strategy === "fixed"),
            popper: zi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Gu);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var h = c.orderedModifiers[O], g = h.fn, S = h.options, _ = S === void 0 ? {} : S, x = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Bu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!Dn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(In), d;
    d.setOptions(u).then(function(w) {
      !p && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function v() {
      c.orderedModifiers.forEach(function(w) {
        var T = w.name, A = w.options, P = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: T,
            instance: d,
            options: P
          }), h = function() {
          };
          f.push(O || h);
        }
      });
    }
    function b() {
      f.forEach(function(w) {
        return w();
      }), f = [];
    }
    return d;
  };
}
var _t = {
  passive: !0
};
function Xu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, _t);
  }), s && l.addEventListener("resize", r.update, _t), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, _t);
    }), s && l.removeEventListener("resize", r.update, _t);
  };
}
const Qu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xu,
  data: {}
};
function Yu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Qi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ju = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yu,
  data: {}
};
var Zu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ec(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: We(t * i) / i || 0,
    y: We(r * i) / i || 0
  };
}
function jn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = o.x, d = p === void 0 ? 0 : p, v = o.y, b = v === void 0 ? 0 : v, w = typeof c == "function" ? c({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = w.x, b = w.y;
  var T = o.hasOwnProperty("x"), A = o.hasOwnProperty("y"), P = ue, E = J, O = window;
  if (u) {
    var h = zt(r), g = "clientHeight", S = "clientWidth";
    if (h === Q(r) && (h = Te(r), ee(h).position !== "static" && s === "absolute" && (g = "scrollHeight", S = "scrollWidth")), h = h, i === J || (i === ue || i === Ee) && a === ft) {
      E = ae;
      var _ = f && h === O && O.visualViewport ? O.visualViewport.height : h[g];
      b -= _ - n.height, b *= l ? 1 : -1;
    }
    if (i === ue || (i === J || i === ae) && a === ft) {
      P = Ee;
      var x = f && h === O && O.visualViewport ? O.visualViewport.width : h[S];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: s
  }, u && Zu), C = c === !0 ? ec({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  if (d = C.x, b = C.y, l) {
    var B;
    return Object.assign({}, $, (B = {}, B[E] = A ? "0" : "", B[P] = T ? "0" : "", B.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", B));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? b + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function tc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = ee(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ce(t.placement),
    variation: Ke(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, jn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, jn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const rc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tc,
  data: {}
};
function nc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !X(a) || !ie(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function ic(e) {
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
      var i = t.elements[n], a = t.attributes[n] || {}, o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !X(i) || !ie(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const ac = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nc,
  effect: ic,
  requires: ["computeStyles"]
};
var oc = [Qu, Ju, rc, ac], sc = /* @__PURE__ */ Ku({
  defaultModifiers: oc
});
function lc(e) {
  return e === "x" ? "y" : "x";
}
function At(e, t, r) {
  return Be(e, jt(t, r));
}
function uc(e, t, r) {
  var n = At(e, t, r);
  return n > r ? r : n;
}
function cc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, b = v === void 0 ? 0 : v, w = Zr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = ce(t.placement), A = Ke(t.placement), P = !A, E = Xi(T), O = lc(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, S = t.rects.popper, _ = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, x = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (a) {
      var B, q = E === "y" ? J : ue, H = E === "y" ? ae : Ee, L = E === "y" ? "height" : "width", k = h[E], mt = k + w[q], Ae = k - w[H], gt = d ? -S[L] / 2 : 0, Qt = A === Ge ? g[L] : S[L], Ze = A === Ge ? -S[L] : -g[L], yt = t.elements.arrow, He = d && yt ? zi(yt) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Yi(), et = me[q], bt = me[H], Pe = At(0, g[L], He[L]), Yt = P ? g[L] / 2 - gt - Pe - et - x.mainAxis : Qt - Pe - et - x.mainAxis, ua = P ? -g[L] / 2 + gt + Pe + bt + x.mainAxis : Ze + Pe + bt + x.mainAxis, Jt = t.elements.arrow && zt(t.elements.arrow), ca = Jt ? E === "y" ? Jt.clientTop || 0 : Jt.clientLeft || 0 : 0, tn = (B = $ == null ? void 0 : $[E]) != null ? B : 0, fa = k + Yt - tn - ca, da = k + ua - tn, rn = At(d ? jt(mt, fa) : mt, k, d ? Be(Ae, da) : Ae);
      h[E] = rn, C[E] = rn - k;
    }
    if (s) {
      var nn, pa = E === "x" ? J : ue, ha = E === "x" ? ae : Ee, Ie = h[O], wt = O === "y" ? "height" : "width", an = Ie + w[pa], on = Ie - w[ha], Zt = [J, ue].indexOf(T) !== -1, sn = (nn = $ == null ? void 0 : $[O]) != null ? nn : 0, ln = Zt ? an : Ie - g[wt] - S[wt] - sn + x.altAxis, un = Zt ? Ie + g[wt] + S[wt] - sn - x.altAxis : on, cn = d && Zt ? uc(ln, Ie, un) : At(d ? ln : an, Ie, d ? un : on);
      h[O] = cn, C[O] = cn - Ie;
    }
    t.modifiersData[n] = C;
  }
}
const fc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cc,
  requiresIfExists: ["offset"]
};
var dc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return dc[t];
  });
}
var pc = {
  start: "end",
  end: "start"
};
function Bn(e) {
  return e.replace(/start|end/g, function(t) {
    return pc[t];
  });
}
function hc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Ou : l, c = Ke(n), f = c ? s ? Tn : Tn.filter(function(v) {
    return Ke(v) === c;
  }) : Kt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, b) {
    return v[b] = Zr(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[ce(b)], v;
  }, {});
  return Object.keys(d).sort(function(v, b) {
    return d[v] - d[b];
  });
}
function vc(e) {
  if (ce(e) === Gt)
    return [];
  var t = Pt(e);
  return [Bn(e), t, Bn(t)];
}
function mc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, b = r.allowedAutoPlacements, w = t.options.placement, T = ce(w), A = T === w, P = l || (A || !v ? [Pt(w)] : vc(w)), E = [w].concat(P).reduce(function(He, me) {
      return He.concat(ce(me) === Gt ? hc(t, {
        placement: me,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : me);
    }, []), O = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), S = !0, _ = E[0], x = 0; x < E.length; x++) {
      var $ = E[x], C = ce($), B = Ke($) === Ge, q = [J, ae].indexOf(C) >= 0, H = q ? "width" : "height", L = Zr(t, {
        placement: $,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), k = q ? B ? Ee : ue : B ? ae : J;
      O[H] > h[H] && (k = Pt(k));
      var mt = Pt(k), Ae = [];
      if (a && Ae.push(L[C] <= 0), s && Ae.push(L[k] <= 0, L[mt] <= 0), Ae.every(function(He) {
        return He;
      })) {
        _ = $, S = !1;
        break;
      }
      g.set($, Ae);
    }
    if (S)
      for (var gt = v ? 3 : 1, Qt = function(me) {
        var et = E.find(function(bt) {
          var Pe = g.get(bt);
          if (Pe)
            return Pe.slice(0, me).every(function(Yt) {
              return Yt;
            });
        });
        if (et)
          return _ = et, "break";
      }, Ze = gt; Ze > 0; Ze--) {
        var yt = Qt(Ze);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const gc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ne = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, yc = {
  components: {
    OnClickOutside: Ui
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    disabled: {
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
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted() {
    this.popper = sc(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [gc, fc]
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
}, bc = { ref: "button" }, wc = { ref: "tooltip" };
function Sc(e, t, r, n, i, a) {
  const o = ei("OnClickOutside");
  return j(), K(o, {
    class: "relative",
    do: a.hide,
    opened: i.opened
  }, {
    default: wa(() => [
      lr("div", bc, [
        re(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 512),
      lr("div", wc, [
        re(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["do", "opened"]);
}
const Oc = /* @__PURE__ */ Ne(yc, [["render", Sc]]), $c = {
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
    return (n, i) => V(t).isSsr ? (j(), K(se, {
      key: e.keepAliveKey,
      html: V(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (j(), K(Jn, {
      key: 0,
      max: V(r).max_keep_alive
    }, [
      (j(), K(se, {
        key: e.keepAliveKey,
        html: V(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function Ji(e) {
  return e && e.length ? e[0] : void 0;
}
const Ec = {
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
        return Ji(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, _c = {
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
        let o = null, s = !1, l = [];
        be(r, (u) => {
          !ne(u) || (n in u && (o = u[n]), i in u && (s = u[i]), a in u && l.push(u));
        }), o ? m.visit(o) : s ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
}, xc = {
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
}, Tc = { ref: "file" };
function Ac(e, t, r, n, i, a) {
  return j(), de("div", Tc, [
    re(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Pc = /* @__PURE__ */ Ne(xc, [["render", Ac]]), Ic = {
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
function Zi(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ta(t, ea(r, n), e[n]);
  return t;
}
function ea(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ta(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ta(e, ea(t, n.toString()), r[n]));
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
  Zi(r, e, t);
}
var Cc = "[object Boolean]";
function ra(e) {
  return e === !0 || e === !1 || Oe(e) && xe(e) == Cc;
}
function Dc() {
  this.__data__ = new he(), this.size = 0;
}
function jc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Bc(e) {
  return this.__data__.get(e);
}
function Fc(e) {
  return this.__data__.has(e);
}
var qc = 200;
function Rc(e, t) {
  var r = this.__data__;
  if (r instanceof he) {
    var n = r.__data__;
    if (!ut || n.length < qc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function fe(e) {
  var t = this.__data__ = new he(e);
  this.size = t.size;
}
fe.prototype.clear = Dc;
fe.prototype.delete = jc;
fe.prototype.get = Bc;
fe.prototype.has = Fc;
fe.prototype.set = Rc;
var Lc = "__lodash_hash_undefined__";
function kc(e) {
  return this.__data__.set(e, Lc), this;
}
function Mc(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = kc;
Bt.prototype.has = Mc;
function Nc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Hc(e, t) {
  return e.has(t);
}
var Vc = 1, Uc = 2;
function na(e, t, r, n, i, a) {
  var o = r & Vc, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Uc ? new Bt() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var v = e[f], b = t[f];
    if (n)
      var w = o ? n(b, v, f, t, e, a) : n(v, b, f, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Nc(t, function(T, A) {
        if (!Hc(d, A) && (v === T || i(v, T, r, n, a)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === b || i(v, b, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Wc = oe.Uint8Array;
const Fn = Wc;
function zc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Gc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Kc = 1, Xc = 2, Qc = "[object Boolean]", Yc = "[object Date]", Jc = "[object Error]", Zc = "[object Map]", ef = "[object Number]", tf = "[object RegExp]", rf = "[object Set]", nf = "[object String]", af = "[object Symbol]", of = "[object ArrayBuffer]", sf = "[object DataView]", qn = Se ? Se.prototype : void 0, or = qn ? qn.valueOf : void 0;
function lf(e, t, r, n, i, a, o) {
  switch (r) {
    case sf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case of:
      return !(e.byteLength != t.byteLength || !a(new Fn(e), new Fn(t)));
    case Qc:
    case Yc:
    case ef:
      return Lr(+e, +t);
    case Jc:
      return e.name == t.name && e.message == t.message;
    case tf:
    case nf:
      return e == t + "";
    case Zc:
      var s = zc;
    case rf:
      var l = n & Kc;
      if (s || (s = Gc), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Xc, o.set(e, t);
      var c = na(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case af:
      if (or)
        return or.call(e) == or.call(t);
  }
  return !1;
}
function uf(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function cf(e, t, r) {
  var n = t(e);
  return N(e) ? n : uf(n, r(e));
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function ff() {
  return [];
}
var df = Object.prototype, pf = df.propertyIsEnumerable, Rn = Object.getOwnPropertySymbols, hf = Rn ? function(e) {
  return e == null ? [] : (e = Object(e), ia(Rn(e), function(t) {
    return pf.call(e, t);
  }));
} : ff;
const vf = hf;
function Ln(e) {
  return cf(e, Rt, vf);
}
var mf = 1, gf = Object.prototype, yf = gf.hasOwnProperty;
function bf(e, t, r, n, i, a) {
  var o = r & mf, s = Ln(e), l = s.length, u = Ln(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : yf.call(t, p)))
      return !1;
  }
  var d = a.get(e), v = a.get(t);
  if (d && v)
    return d == t && v == e;
  var b = !0;
  a.set(e, t), a.set(t, e);
  for (var w = o; ++f < l; ) {
    p = s[f];
    var T = e[p], A = t[p];
    if (n)
      var P = o ? n(A, T, p, t, e, a) : n(T, A, p, e, t, a);
    if (!(P === void 0 ? T === A || i(T, A, r, n, a) : P)) {
      b = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (b && !w) {
    var E = e.constructor, O = t.constructor;
    E != O && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof O == "function" && O instanceof O) && (b = !1);
  }
  return a.delete(e), a.delete(t), b;
}
var wf = ke(oe, "DataView");
const Or = wf;
var Sf = ke(oe, "Promise");
const $r = Sf;
var Of = ke(oe, "Set");
const Er = Of;
var $f = ke(oe, "WeakMap");
const _r = $f;
var kn = "[object Map]", Ef = "[object Object]", Mn = "[object Promise]", Nn = "[object Set]", Hn = "[object WeakMap]", Vn = "[object DataView]", _f = Le(Or), xf = Le(ut), Tf = Le($r), Af = Le(Er), Pf = Le(_r), je = xe;
(Or && je(new Or(new ArrayBuffer(1))) != Vn || ut && je(new ut()) != kn || $r && je($r.resolve()) != Mn || Er && je(new Er()) != Nn || _r && je(new _r()) != Hn) && (je = function(e) {
  var t = xe(e), r = t == Ef ? e.constructor : void 0, n = r ? Le(r) : "";
  if (n)
    switch (n) {
      case _f:
        return Vn;
      case xf:
        return kn;
      case Tf:
        return Mn;
      case Af:
        return Nn;
      case Pf:
        return Hn;
    }
  return t;
});
const Un = je;
var If = 1, Wn = "[object Arguments]", zn = "[object Array]", xt = "[object Object]", Cf = Object.prototype, Gn = Cf.hasOwnProperty;
function Df(e, t, r, n, i, a) {
  var o = N(e), s = N(t), l = o ? zn : Un(e), u = s ? zn : Un(t);
  l = l == Wn ? xt : l, u = u == Wn ? xt : u;
  var c = l == xt, f = u == xt, p = l == u;
  if (p && ur(e)) {
    if (!ur(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new fe()), o || si(e) ? na(e, t, r, n, i, a) : lf(e, t, l, r, n, i, a);
  if (!(r & If)) {
    var d = c && Gn.call(e, "__wrapped__"), v = f && Gn.call(t, "__wrapped__");
    if (d || v) {
      var b = d ? e.value() : e, w = v ? t.value() : t;
      return a || (a = new fe()), i(b, w, r, n, a);
    }
  }
  return p ? (a || (a = new fe()), bf(e, t, r, n, i, a)) : !1;
}
function Xt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : Df(e, t, r, n, Xt, i);
}
var jf = 1, Bf = 2;
function Ff(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], u = e[l], c = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new fe();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Xt(c, u, jf | Bf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function aa(e) {
  return e === e && !ne(e);
}
function qf(e) {
  for (var t = Rt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, aa(i)];
  }
  return t;
}
function oa(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Rf(e) {
  var t = qf(e);
  return t.length == 1 && t[0][2] ? oa(t[0][0], t[0][1]) : function(r) {
    return r === e || Ff(r, e, t);
  };
}
function Lf(e, t) {
  return e != null && t in Object(e);
}
function kf(e, t) {
  return e != null && _i(e, t, Lf);
}
var Mf = 1, Nf = 2;
function Hf(e, t) {
  return Rr(e) && aa(t) ? oa(pt(e), t) : function(r) {
    var n = Kr(r, e);
    return n === void 0 && n === t ? kf(r, e) : Xt(t, n, Mf | Nf);
  };
}
function Vf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Uf(e) {
  return function(t) {
    return Ni(t, e);
  };
}
function Wf(e) {
  return Rr(e) ? Vf(pt(e)) : Uf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? ui : typeof e == "object" ? N(e) ? Hf(e[0], e[1]) : Rf(e) : Wf(e);
}
function sa(e, t) {
  var r = {};
  return t = vt(t), Cr(e, function(n, i, a) {
    Hi(r, i, t(n, i, a));
  }), r;
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
      recentlySuccessfulTimeoutId: null
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
      return sa(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.missingAttributes.forEach((t) => {
      let r = "";
      const n = e.querySelector(`[name="${t}"]`);
      n ? r = n.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${t}[]"]`) ? r = [] : (e.querySelector(`[name^="${t}."]`) || e.querySelector(`[name^="${t}["]`)) && (r = {}), this.$put(t, r);
    }), this.missingAttributes = [];
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
      return Vi(this.values, e, t);
    },
    submit(e) {
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        ra(this.confirm) ? "" : this.confirm,
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
      const e = this.values instanceof FormData ? this.values : Zi(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0), m.request(this.action, this.method.toUpperCase(), e, t).then((r) => {
        this.$emit("success", r), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch((r) => {
        this.processing = !1, this.$emit("error", r);
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
            ].includes(r) ? e[r] : (G(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Kr(e.values, r));
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
              n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, Kf = { ref: "input" };
function Xf(e, t, r, n, i, a) {
  return j(), de("div", Kf, [
    re(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Qf = /* @__PURE__ */ Ne(Gf, [["render", Xf]]), Yf = {
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
function Jf(e, t, r, n, i, a) {
  const o = ei("Render");
  return i.html ? (j(), K(o, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? re(e.$slots, "default", { key: 1 }) : Ft("", !0);
}
const Zf = /* @__PURE__ */ Ne(Yf, [["render", Jf]]), ed = ["href", "onClick"], td = {
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
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(
        ra(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      t.replace ? m.replace(t.href) : m.visit(t.href);
    }
    return (i, a) => (j(), de("a", {
      href: e.href,
      onClick: Sa(r, ["prevent"])
    }, [
      re(i.$slots, "default")
    ], 8, ed));
  }
}, rd = {
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
      Dialog: Ur,
      DialogPanel: Wr,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
};
function nd(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!qt(t)) {
      var a = vt(r);
      t = Rt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
function id(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var ad = /\s/;
function od(e) {
  for (var t = e.length; t-- && ad.test(e.charAt(t)); )
    ;
  return t;
}
var sd = /^\s+/;
function ld(e) {
  return e && e.slice(0, od(e) + 1).replace(sd, "");
}
var Kn = 0 / 0, ud = /^[-+]0x[0-9a-f]+$/i, cd = /^0b[01]+$/i, fd = /^0o[0-7]+$/i, dd = parseInt;
function xr(e) {
  if (typeof e == "number")
    return e;
  if (kt(e))
    return Kn;
  if (ne(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ld(e);
  var r = cd.test(e);
  return r || fd.test(e) ? dd(e.slice(2), r ? 2 : 8) : ud.test(e) ? Kn : +e;
}
var Xn = 1 / 0, pd = 17976931348623157e292;
function hd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = xr(e), e === Xn || e === -Xn) {
    var t = e < 0 ? -1 : 1;
    return t * pd;
  }
  return e === e ? e : 0;
}
function en(e) {
  var t = hd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var vd = Math.max;
function md(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : en(r);
  return i < 0 && (i = vd(n + i, 0)), id(e, vt(t), i);
}
var gd = nd(md);
const yd = gd, bd = {
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
      placeholderText: null
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
    this.choices && this.choicesInstance && this.choicesInstance.destroy();
  },
  methods: {
    setValueOnChoices(e) {
      Array.isArray(e) && this.choicesInstance.removeActiveItems(), e === null && (e = ""), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return yd(this.choicesInstance._store.choices, (t) => t.value == e);
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
        r.choicesInstance = new n.default(e, i), this.choicesInstance.containerInner.element.setAttribute(
          "data-select-name",
          e.name
        ), this.handlePlaceholderVisibility(), this.updateHasSelectionAttribute(), e.addEventListener("change", function() {
          if (r.$emit("update:modelValue", r.choicesInstance.getValue(!0)), !r.multiple || t < 1)
            return;
          r.choicesInstance.getValue().length >= t && r.choicesInstance.hideDropdown();
        }), e.addEventListener("showDropdown", function() {
          if (r.multiple || !r.modelValue)
            return;
          const a = r.getItemOfCurrentModel(), o = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${a.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(o, 1), r.choicesInstance._highlightChoice(o);
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
}, wd = { ref: "select" };
function Sd(e, t, r, n, i, a) {
  return j(), de("div", wd, [
    re(e.$slots, "default")
  ], 512);
}
const Od = /* @__PURE__ */ Ne(bd, [["render", Sd]]), $d = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = sa(e, (i) => i.join(`
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
var Ed = function() {
  return oe.Date.now();
};
const sr = Ed;
var _d = "Expected a function", xd = Math.max, Td = Math.min;
function Ad(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(_d);
  t = xr(t) || 0, ne(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? xd(xr(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, S = i;
    return n = i = void 0, u = h, o = e.apply(S, g), o;
  }
  function v(h) {
    return u = h, s = setTimeout(T, t), c ? d(h) : o;
  }
  function b(h) {
    var g = h - l, S = h - u, _ = t - g;
    return f ? Td(_, a - S) : _;
  }
  function w(h) {
    var g = h - l, S = h - u;
    return l === void 0 || g >= t || g < 0 || f && S >= a;
  }
  function T() {
    var h = sr();
    if (w(h))
      return A(h);
    s = setTimeout(T, b(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, o);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? o : A(sr());
  }
  function O() {
    var h = sr(), g = w(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(T, t), d(l);
    }
    return s === void 0 && (s = setTimeout(T, t)), o;
  }
  return O.cancel = P, O.flush = E, O;
}
function la(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Pd(e, t, r) {
  e = Mr(e), t = Ht(t);
  var n = e.length;
  r = r === void 0 ? n : la(en(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Id(e, t) {
  var r = [];
  return Dr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Cd(e, t) {
  var r = N(e) ? ia : Id;
  return r(e, vt(t));
}
function Qn(e, t) {
  return Xt(e, t);
}
function Dd(e, t) {
  var r = -1, n = qt(e) ? Array(e.length) : [];
  return Dr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function jd(e, t) {
  var r = N(e) ? Ei : Dd;
  return r(e, vt(t));
}
function Tt(e, t, r) {
  return e = Mr(e), r = r == null ? 0 : la(en(r), 0, e.length), t = Ht(t), e.slice(r, r + t.length) == t;
}
const Bd = {
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
    }
  },
  data() {
    return {
      visibleColumns: [],
      forcedVisibleSearchInputs: []
    };
  },
  computed: {
    columnsAreToggled() {
      return !Qn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    be(e, (r, n) => {
      if (Tt(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, be(e, (t, r) => {
        Tt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Cd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = jd(r, (i) => i.key).sort();
      Qn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], st(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: Ad(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, 350),
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
        const a = i.split("["), o = a[1].substring(0, a[1].length - 1);
        parseInt(o) == o ? (i = a[0], N(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (Tt(e, "perPage") || Tt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      be(e, (o, s) => {
        if (!N(o)) {
          n[s] = o;
          return;
        }
        o.length !== 0 && o.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      be(n, (o, s) => {
        o === null || o === [] || (i && (i += "&"), i += `${s}=${o}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      m.replace(a).then(() => {
        typeof t < "u" && t && st(() => {
          document.querySelector(`[name="${t.name}"]`).focus();
        });
      });
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
      visit: m.visit
    });
  }
}, Fd = {
  data() {
    return {
      isMounted: !1
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function qd(e, t, r, n, i, a) {
  return i.isMounted ? (j(), K(Zn, Oa($a({ key: 0 }, e.$attrs)), [
    re(e.$slots, "default")
  ], 16)) : Ft("", !0);
}
const Rd = /* @__PURE__ */ Ne(Fd, [["render", qd]]), Ld = {
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
        st(() => e.default.update(this.element));
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
}, kd = { ref: "textarea" };
function Md(e, t, r, n, i, a) {
  return j(), de("div", kd, [
    re(e.$slots, "default")
  ], 512);
}
const Nd = /* @__PURE__ */ Ne(Ld, [["render", Md]]), Hd = {
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
      TransitionRoot: Je,
      TransitionChild: Ye
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
], Ud = {
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
      Render: se,
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Wd = {
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
            if (n.length === 1 && Ji(n) === "default") {
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
}, zd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Je,
      TransitionChild: Ye
    });
  }
}, Tr = {
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
    Tr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Tr.timeout), t.done(), t.remove();
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
    if (e.component(`${r}Confirm`, au).component(`${r}Data`, fu).component(`${r}Defer`, du).component(`${r}Dialog`, pu).component(`${r}Dropdown`, Oc).component(`${r}DynamicHtml`, $c).component(`${r}Errors`, Ec).component(`${r}Event`, _c).component(`${r}File`, Pc).component(`${r}Flash`, Ic).component(`${r}Form`, zf).component(`${r}Input`, Qf).component(`${r}Lazy`, Zf).component(`${r}Modal`, rd).component(`${r}OnClickOutside`, Ui).component(`${r}Render`, se).component(`${r}Select`, Od).component(`${r}State`, $d).component(`${r}Table`, Bd).component(`${r}Teleport`, Rd).component(`${r}Textarea`, Nd).component(`${r}Toast`, Hd).component(`${r}Toasts`, Ud).component(`${r}Toggle`, Wd).component(`${r}Transition`, zd).component(t.link_component, td), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ne(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Tr.init(t.progress_bar);
    }
    be(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Jd(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((a) => {
    const o = a.replace(/^-+/, "").split("=");
    n[o[0]] = o.length === 2 ? o[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (a, o) => {
    if (a.method == "POST") {
      let s = "";
      a.on("data", (l) => s += l), a.on("end", async () => {
        const l = JSON.parse(s), u = r({
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
  m as Splade,
  Ss as SpladeApp,
  Yd as SpladePlugin,
  Xd as renderSpladeApp,
  Jd as startServer
};
