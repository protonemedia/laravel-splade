import Yn from "axios";
import { ref as y, computed as I, watch as dt, openBlock as j, createBlock as K, unref as H, createCommentVNode as Ft, h as R, onMounted as M, createElementBlock as de, createElementVNode as ur, provide as te, inject as U, nextTick as Ue, KeepAlive as Jn, normalizeStyle as It, createVNode as ga, Fragment as Pr, renderList as ya, cloneVNode as ba, watchEffect as Z, defineComponent as W, onUnmounted as _e, Teleport as Zn, reactive as wa, onBeforeUnmount as Sa, renderSlot as re, resolveComponent as ei, withCtx as Oa, withModifiers as $a, normalizeProps as Ea, mergeProps as _a } from "vue";
function xa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Ta(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Aa = Ta();
const Pa = Aa;
function Ia(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ca = typeof global == "object" && global && global.Object === Object && global;
const ti = Ca;
var Da = typeof self == "object" && self && self.Object === Object && self, ja = ti || Da || Function("return this")();
const oe = ja;
var qa = oe.Symbol;
const Se = qa;
var ri = Object.prototype, Ba = ri.hasOwnProperty, Fa = ri.toString, rt = Se ? Se.toStringTag : void 0;
function Ra(e) {
  var t = Ba.call(e, rt), r = e[rt];
  try {
    e[rt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Fa.call(e);
  return n && (t ? e[rt] = r : delete e[rt]), i;
}
var La = Object.prototype, ka = La.toString;
function Ma(e) {
  return ka.call(e);
}
var Na = "[object Null]", Va = "[object Undefined]", dn = Se ? Se.toStringTag : void 0;
function xe(e) {
  return e == null ? e === void 0 ? Va : Na : dn && dn in Object(e) ? Ra(e) : Ma(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var Ha = "[object Arguments]";
function pn(e) {
  return Oe(e) && xe(e) == Ha;
}
var ni = Object.prototype, Ua = ni.hasOwnProperty, Wa = ni.propertyIsEnumerable, za = pn(function() {
  return arguments;
}()) ? pn : function(e) {
  return Oe(e) && Ua.call(e, "callee") && !Wa.call(e, "callee");
};
const ii = za;
var Ga = Array.isArray;
const N = Ga;
function Ka() {
  return !1;
}
var ai = typeof exports == "object" && exports && !exports.nodeType && exports, hn = ai && typeof module == "object" && module && !module.nodeType && module, Xa = hn && hn.exports === ai, vn = Xa ? oe.Buffer : void 0, Qa = vn ? vn.isBuffer : void 0, Ya = Qa || Ka;
const cr = Ya;
var Ja = 9007199254740991, Za = /^(?:0|[1-9]\d*)$/;
function Ir(e, t) {
  var r = typeof e;
  return t = t == null ? Ja : t, !!t && (r == "number" || r != "symbol" && Za.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var eo = 9007199254740991;
function Cr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eo;
}
var to = "[object Arguments]", ro = "[object Array]", no = "[object Boolean]", io = "[object Date]", ao = "[object Error]", oo = "[object Function]", so = "[object Map]", lo = "[object Number]", uo = "[object Object]", co = "[object RegExp]", fo = "[object Set]", po = "[object String]", ho = "[object WeakMap]", vo = "[object ArrayBuffer]", mo = "[object DataView]", go = "[object Float32Array]", yo = "[object Float64Array]", bo = "[object Int8Array]", wo = "[object Int16Array]", So = "[object Int32Array]", Oo = "[object Uint8Array]", $o = "[object Uint8ClampedArray]", Eo = "[object Uint16Array]", _o = "[object Uint32Array]", D = {};
D[go] = D[yo] = D[bo] = D[wo] = D[So] = D[Oo] = D[$o] = D[Eo] = D[_o] = !0;
D[to] = D[ro] = D[vo] = D[no] = D[mo] = D[io] = D[ao] = D[oo] = D[so] = D[lo] = D[uo] = D[co] = D[fo] = D[po] = D[ho] = !1;
function xo(e) {
  return Oe(e) && Cr(e.length) && !!D[xe(e)];
}
function To(e) {
  return function(t) {
    return e(t);
  };
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, at = oi && typeof module == "object" && module && !module.nodeType && module, Ao = at && at.exports === oi, tr = Ao && ti.process, Po = function() {
  try {
    var e = at && at.require && at.require("util").types;
    return e || tr && tr.binding && tr.binding("util");
  } catch {
  }
}();
const mn = Po;
var gn = mn && mn.isTypedArray, Io = gn ? To(gn) : xo;
const si = Io;
var Co = Object.prototype, Do = Co.hasOwnProperty;
function jo(e, t) {
  var r = N(e), n = !r && ii(e), i = !r && !n && cr(e), a = !r && !n && !i && si(e), o = r || n || i || a, s = o ? Ia(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Do.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Ir(u, l))) && s.push(u);
  return s;
}
var qo = Object.prototype;
function Bo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qo;
  return e === r;
}
function Fo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ro = Fo(Object.keys, Object);
const Lo = Ro;
var ko = Object.prototype, Mo = ko.hasOwnProperty;
function No(e) {
  if (!Bo(e))
    return Lo(e);
  var t = [];
  for (var r in Object(e))
    Mo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ne(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vo = "[object AsyncFunction]", Ho = "[object Function]", Uo = "[object GeneratorFunction]", Wo = "[object Proxy]";
function li(e) {
  if (!ne(e))
    return !1;
  var t = xe(e);
  return t == Ho || t == Uo || t == Vo || t == Wo;
}
function Rt(e) {
  return e != null && Cr(e.length) && !li(e);
}
function Lt(e) {
  return Rt(e) ? jo(e) : No(e);
}
function Dr(e, t) {
  return e && Pa(e, t, Lt);
}
function zo(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Rt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var Go = zo(Dr);
const jr = Go;
function ui(e) {
  return e;
}
function ci(e) {
  return typeof e == "function" ? e : ui;
}
function Ko(e, t) {
  var r = N(e) ? xa : jr;
  return r(e, ci(t));
}
function be(e, t) {
  return e && Dr(e, ci(t));
}
var Xo = Array.prototype, Qo = Xo.reverse;
function Yo(e) {
  return e == null ? e : Qo.call(e);
}
const Ct = y(0), fr = y(1), B = y({}), le = y(0), $e = typeof window > "u";
function Jo(e, t, r) {
  $e || window.addEventListener("popstate", Zo.bind(this)), Object.keys(t).length > 0 && Ct.value++, Fr(r), kt(r.head), Rr(e);
  const n = $e ? "" : location.href, i = qr(
    n,
    r.head,
    e,
    t,
    {},
    fr.value,
    Ct.value
  );
  fi(i);
}
function Zo(e) {
  !e.state || (B.value = e.state, le.value = 0, kt(B.value.head), Rr(B.value.html, B.value.rememberedState.scrollY));
}
function qr(e, t, r, n, i, a, o) {
  const s = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: o
  };
  return B.value = s, s;
}
function es(e) {
  $e || window.history.pushState(e, "", e.url);
}
function ts(e) {
  const t = qr(
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
function fi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const rr = y(0);
function rs(e, t) {
  rr.value++;
  const r = e.request.responseURL;
  if (e.data.splade.lazy)
    return;
  e.data.splade.modal && le.value++, Fr(e.data.splade), kt(e.data.splade.head);
  const n = r === B.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return ds(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  le.value = 0;
  let i = e.data.html, a = e.data.dynamics;
  const o = Object.keys(B.value.dynamics).length > 0, s = Object.keys(a).length > 0;
  t ? (s && be(a, (u, c) => {
    a[c] += `<!-- ${rr.value} -->`;
  }), (!s || !o) && (i += `<!-- ${rr.value} -->`)) : (s && Ct.value++, (!s || !o) && fr.value++), Rr(i, 0);
  const l = qr(
    r,
    e.data.splade.head,
    i,
    a,
    B.value.rememberedState ? { ...B.value.rememberedState } : {},
    fr.value,
    Ct.value
  );
  t ? fi(l) : es(l);
}
function ns() {
  le.value--, kt(as(le.value));
}
const di = y({}), pi = (e) => di.value[e], is = (e) => Object.keys(pi.value[e]).length > 0, hi = y({}), as = (e) => hi.value[e], vi = y({}), os = (e) => vi.value[e], We = y([]);
function ss(e) {
  We.value.push(e);
}
const ls = I(() => Yo(We.value));
function us(e) {
  We.value[e].dismissed = !0, We.value[e].html = null;
}
const Br = y(null);
function cs(e, t, r, n) {
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
function fs() {
  Br.value = null;
}
const mi = y({});
function Fr(e) {
  mi.value = e.shared ? e.shared : {}, vi.value[le.value] = e.flash ? e.flash : {}, hi.value[le.value] = e.head ? e.head : {}, Ko(e.toasts ? e.toasts : [], (t) => {
    We.value.push(t);
  }), di.value[le.value] = e.errors ? e.errors : {};
}
const gi = y(() => {
}), yi = y(() => {
}), bi = y(() => {
}), wi = y(() => {
});
function kt(e) {
  gi.value(e);
}
function Rr(e, t) {
  yi.value(e, t);
}
function ds(e, t) {
  bi.value(e, t);
}
function ps(e) {
  wi.value(e);
}
const Si = y({});
function Oi(e, t, r) {
  Si.value[e] = t, r && hs(e, t);
}
function hs(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function vs(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Si.value[e];
}
function St(e, t) {
  $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Qe(e, t, r, n, i) {
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
    rs(o, i), St("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch((o) => {
    St("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o });
    const s = o.response.data.splade;
    s && (s.lazy || Fr(s)), o.response.status != 422 && ps(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function $i(e) {
  return Qe(e, "GET", {}, {}, !0);
}
function ms(e) {
  return Qe(e, "GET", {}, {}, !1);
}
function gs(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ys(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function bs(e, t) {
  return Qe(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function ws() {
  return $i(B.value.url);
}
const m = {
  init: Jo,
  replace: $i,
  visit: ms,
  modal: gs,
  slideover: ys,
  refresh: ws,
  request: Qe,
  lazy: bs,
  replaceUrlOfCurrentPage: ts,
  htmlForDynamicComponent(e) {
    return B.value.dynamics[e];
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
  hasValidationErrors: is,
  validationErrors: pi,
  sharedData: mi,
  flashData: os,
  toasts: We,
  toastsReversed: ls,
  confirmModal: Br,
  confirm: cs,
  clearConfirmModal: fs,
  pushToast: ss,
  dismissToast: us,
  restore: vs,
  remember: Oi,
  popStack: ns,
  currentStack: le,
  pageVisitId: I(() => B.value.pageVisitId),
  dynamicVisitId: I(() => B.value.dynamicVisitId),
  isSsr: $e
};
var Ss = "[object String]";
function Ot(e) {
  return typeof e == "string" || !N(e) && Oe(e) && xe(e) == Ss;
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
    return dt(() => t.html, n, { immediate: !0 }), (i, a) => e.html ? (j(), K(H(r), { key: 0 })) : Ft("", !0);
  }
}, Os = {
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
      ur("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, $s = {
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
      n.value = [], r.value = f, Ue(() => {
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
      H(m).isSsr ? (j(), K(se, {
        key: `visit.${H(m).pageVisitId.value}`,
        style: It(H(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), K(Jn, {
        key: 0,
        max: H(a).max_keep_alive
      }, [
        (j(), K(se, {
          key: `visit.${H(m).pageVisitId.value}`,
          style: It(H(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      ga(se, { html: e.components }, null, 8, ["html"]),
      (j(!0), de(Pr, null, ya(H(m).currentStack.value, (d) => (j(), K(se, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": H(m).currentStack.value === d,
        onClose: (v) => l(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (j(), K(Os, {
        key: 2,
        html: i.value,
        onClose: s
      }, null, 8, ["html"])) : Ft("", !0)
    ]));
  }
};
function Kd(e) {
  return () => R($s, e);
}
var Es = Object.prototype, _s = Es.hasOwnProperty;
function xs(e, t) {
  return e != null && _s.call(e, t);
}
var Ts = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || Oe(e) && xe(e) == Ts;
}
var As = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ps = /^\w*$/;
function Lr(e, t) {
  if (N(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Mt(e) ? !0 : Ps.test(e) || !As.test(e) || t != null && e in Object(t);
}
var Is = oe["__core-js_shared__"];
const nr = Is;
var yn = function() {
  var e = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cs(e) {
  return !!yn && yn in e;
}
var Ds = Function.prototype, js = Ds.toString;
function Le(e) {
  if (e != null) {
    try {
      return js.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qs = /[\\^$.*+?()[\]{}|]/g, Bs = /^\[object .+?Constructor\]$/, Fs = Function.prototype, Rs = Object.prototype, Ls = Fs.toString, ks = Rs.hasOwnProperty, Ms = RegExp(
  "^" + Ls.call(ks).replace(qs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ns(e) {
  if (!ne(e) || Cs(e))
    return !1;
  var t = li(e) ? Ms : Bs;
  return t.test(Le(e));
}
function Vs(e, t) {
  return e == null ? void 0 : e[t];
}
function ke(e, t) {
  var r = Vs(e, t);
  return Ns(r) ? r : void 0;
}
var Hs = ke(Object, "create");
const lt = Hs;
function Us() {
  this.__data__ = lt ? lt(null) : {}, this.size = 0;
}
function Ws(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zs = "__lodash_hash_undefined__", Gs = Object.prototype, Ks = Gs.hasOwnProperty;
function Xs(e) {
  var t = this.__data__;
  if (lt) {
    var r = t[e];
    return r === zs ? void 0 : r;
  }
  return Ks.call(t, e) ? t[e] : void 0;
}
var Qs = Object.prototype, Ys = Qs.hasOwnProperty;
function Js(e) {
  var t = this.__data__;
  return lt ? t[e] !== void 0 : Ys.call(t, e);
}
var Zs = "__lodash_hash_undefined__";
function el(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = lt && t === void 0 ? Zs : t, this;
}
function Be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Be.prototype.clear = Us;
Be.prototype.delete = Ws;
Be.prototype.get = Xs;
Be.prototype.has = Js;
Be.prototype.set = el;
function tl() {
  this.__data__ = [], this.size = 0;
}
function kr(e, t) {
  return e === t || e !== e && t !== t;
}
function Nt(e, t) {
  for (var r = e.length; r--; )
    if (kr(e[r][0], t))
      return r;
  return -1;
}
var rl = Array.prototype, nl = rl.splice;
function il(e) {
  var t = this.__data__, r = Nt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : nl.call(t, r, 1), --this.size, !0;
}
function al(e) {
  var t = this.__data__, r = Nt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ol(e) {
  return Nt(this.__data__, e) > -1;
}
function sl(e, t) {
  var r = this.__data__, n = Nt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function he(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
he.prototype.clear = tl;
he.prototype.delete = il;
he.prototype.get = al;
he.prototype.has = ol;
he.prototype.set = sl;
var ll = ke(oe, "Map");
const ut = ll;
function ul() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (ut || he)(),
    string: new Be()
  };
}
function cl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Vt(e, t) {
  var r = e.__data__;
  return cl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function fl(e) {
  var t = Vt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function dl(e) {
  return Vt(this, e).get(e);
}
function pl(e) {
  return Vt(this, e).has(e);
}
function hl(e, t) {
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
ve.prototype.clear = ul;
ve.prototype.delete = fl;
ve.prototype.get = dl;
ve.prototype.has = pl;
ve.prototype.set = hl;
var vl = "Expected a function";
function Mr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Mr.Cache || ve)(), r;
}
Mr.Cache = ve;
var ml = 500;
function gl(e) {
  var t = Mr(e, function(n) {
    return r.size === ml && r.clear(), n;
  }), r = t.cache;
  return t;
}
var yl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bl = /\\(\\)?/g, wl = gl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yl, function(r, n, i, a) {
    t.push(i ? a.replace(bl, "$1") : n || r);
  }), t;
});
const Sl = wl;
function Ei(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ol = 1 / 0, bn = Se ? Se.prototype : void 0, wn = bn ? bn.toString : void 0;
function Ht(e) {
  if (typeof e == "string")
    return e;
  if (N(e))
    return Ei(e, Ht) + "";
  if (Mt(e))
    return wn ? wn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ol ? "-0" : t;
}
function Nr(e) {
  return e == null ? "" : Ht(e);
}
function Vr(e, t) {
  return N(e) ? e : Lr(e, t) ? [e] : Sl(Nr(e));
}
var $l = 1 / 0;
function pt(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -$l ? "-0" : t;
}
function _i(e, t, r) {
  t = Vr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = pt(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Cr(i) && Ir(o, i) && (N(e) || ii(e)));
}
function G(e, t) {
  return e != null && _i(e, t, xs);
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
  let o = El(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return ir(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return ir({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ir(s);
}
function ir({ props: e, attrs: t, slots: r, slot: n, name: i }) {
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
      if (!_l(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return ba(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return R(o, Object.assign({}, s, u), l);
}
function xi(e) {
  return e.flatMap((t) => t.type === Pr ? xi(t.children) : [t]);
}
function El(...e) {
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
function _l(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let xl = 0;
function Tl() {
  return ++xl;
}
function Me() {
  return Tl();
}
var Ai = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ai || {});
function pe(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Pi = Symbol("Context");
var Fe = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Fe || {});
function Al() {
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
    let t = pe(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let dr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ct || {}), Ii = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ii || {}), Il = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Il || {});
function Cl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(dr));
}
var Ci = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ci || {});
function Dl(e, t = 0) {
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
function ot(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let jl = ["textarea", "input"].join(",");
function ql(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, jl)) != null ? r : !1;
}
function Bl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pr(e, t, r = !0, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, o = Array.isArray(e) ? r ? Bl(e) : e : Cl(e);
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
  return t & 6 && ql(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function ar(e, t, r) {
  Ut || Z((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Fl(e, t, r = I(() => !0)) {
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
    return !Dl(s, Ci.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s);
  }
  let i = y(null);
  ar("mousedown", (a) => {
    var o, s;
    r.value && (i.value = ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) == null ? void 0 : s[0]) || a.target);
  }, !0), ar("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), ar("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var jt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(jt || {});
let hr = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Rl(e, t, r) {
  Ut || Z((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vr || {});
function Ll() {
  let e = y(0);
  return Rl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Di(e, t, r, n) {
  Ut || Z((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function kl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ji = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ji || {});
let nt = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let a = I(() => Ye(i));
  Ml({ ownerDocument: a }, I(() => Boolean(e.features & 16)));
  let o = Nl({ ownerDocument: a, container: i, initialFocus: I(() => e.initialFocus) }, I(() => Boolean(e.features & 2)));
  Vl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, I(() => Boolean(e.features & 8)));
  let s = Ll();
  function l() {
    let u = pe(i);
    !u || Y(s.value, { [vr.Forwards]: () => pr(u, ct.First), [vr.Backwards]: () => pr(u, ct.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return R(Pr, [Boolean(f & 4) && R(hr, { as: "button", type: "button", onFocus: l, features: jt.Focusable }), z({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && R(hr, { as: "button", type: "button", onFocus: l, features: jt.Focusable })]);
  };
} }), { features: ji });
function Ml({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (ot(r.value), r.value = null);
  }
  M(() => {
    dt(t, (a, o) => {
      a !== o && (a ? n() : i());
    }, { immediate: !0 });
  }), _e(i);
}
function Nl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), a = y(!1);
  return M(() => a.value = !0), _e(() => a.value = !1), M(() => {
    dt([t, r, n], (o, s) => {
      if (o.every((u, c) => (s == null ? void 0 : s[c]) === u) || !n.value)
        return;
      let l = pe(t);
      !l || kl(() => {
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
        f ? ot(f) : pr(l, ct.First | ct.NoScroll) === Ii.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Vl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
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
    u && u instanceof HTMLElement ? Hl(s, u) ? (n.value = u, ot(u)) : (o.preventDefault(), o.stopPropagation(), ot(l)) : ot(n.value);
  }, !0);
}
function Hl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Sn = "body > *", He = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
function On(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function $n(e) {
  let t = ye.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Ul(e, t = y(!0)) {
  Z((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ye(n);
    if (i) {
      He.add(n);
      for (let a of ye.keys())
        a.contains(n) && ($n(a), ye.delete(a));
      i.querySelectorAll(Sn).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of He)
            if (a.contains(o))
              return;
          He.size === 1 && (ye.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), On(a));
        }
      }), r(() => {
        if (He.delete(n), He.size > 0)
          i.querySelectorAll(Sn).forEach((a) => {
            if (a instanceof HTMLElement && !ye.has(a)) {
              for (let o of He)
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
let qi = Symbol("ForcePortalRootContext");
function Wl() {
  return U(qi, !1);
}
let mr = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return te(qi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function zl(e) {
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
let Bi = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = I(() => Ye(n)), a = Wl(), o = U(Fi, null), s = y(a === !0 || o == null ? zl(n.value) : o.resolveTarget());
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
} }), Fi = Symbol("PortalGroupContext"), Gl = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = wa({ resolveTarget() {
    return e.target;
  } });
  return te(Fi, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ri = Symbol("StackContext");
var gr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gr || {});
function Kl() {
  return U(Ri, () => {
  });
}
function Xl({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Kl();
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
function Ql() {
  let e = U(Li, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Yl({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return te(Li, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Xd = W({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ql(), i = `headlessui-description-${Me()}`;
  return M(() => _e(n.register(i))), () => {
    let { name: a = "Description", slot: o = y({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: H(p) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
function Ur() {
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
function Jl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Zl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zl || {});
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
  let o = y(!1);
  M(() => {
    o.value = !0;
  });
  let s = y(0), l = Hr(), u = I(() => e.open === $t && l !== null ? Y(l.value, { [Fe.Open]: !0, [Fe.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), f = y(null), p = y(null), d = I(() => Ye(f));
  if (i({ el: f, $el: f }), !(e.open !== $t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === $t ? void 0 : e.open}`);
  let v = I(() => o.value && u.value ? 0 : 1), b = I(() => v.value === 0), w = I(() => s.value > 1), T = U(yr, null) !== null, A = I(() => w.value ? "parent" : "leaf");
  Ul(f, I(() => w.value ? b.value : !1)), Xl({ type: "Dialog", enabled: I(() => v.value === 0), element: f, onUpdate: (g, S, _) => {
    if (S === "Dialog")
      return Y(g, { [gr.Add]() {
        c.value.add(_), s.value += 1;
      }, [gr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Yl({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), E = `headlessui-dialog-${Me()}`, O = y(null), h = { titleId: O, panelRef: y(null), dialogState: v, setTitleId(g) {
    O.value !== g && (O.value = g);
  }, close() {
    t("close", !1);
  } };
  return te(yr, h), Fl(() => {
    var g, S, _;
    return [...Array.from((S = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(pe(p)) || h.panelRef.value && x.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, S) => {
    h.close(), Ue(() => S == null ? void 0 : S.focus());
  }, I(() => v.value === 0 && !w.value)), Di((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === Ai.Escape && v.value === 0 && (w.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Z((g) => {
    var S;
    if (v.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let x = Ur();
    function $(F, V, L) {
      let k = F.style.getPropertyValue(V);
      return Object.assign(F.style, { [V]: L }), x.add(() => {
        Object.assign(F.style, { [V]: k });
      });
    }
    let C = _ == null ? void 0 : _.documentElement, q = ((S = _.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), q > 0) {
      let F = C.clientWidth - C.offsetWidth, V = q - F;
      $(C, "paddingRight", `${V}px`);
    }
    if (Jl()) {
      let F = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${F}px`), $(C, "width", "100%"), x.add(() => window.scrollTo(0, F));
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
    return R(mr, { force: !0 }, () => [R(Bi, () => R(Gl, { target: f.value }, () => R(mr, { force: !1 }, () => R(nt, { initialFocus: _, containers: c, features: b.value ? Y(A.value, { parent: nt.features.RestoreFocus, leaf: nt.features.All & ~nt.features.FocusLock }) : nt.features.None }, () => z({ ourProps: g, theirProps: x, slot: $, attrs: r, slots: n, visible: v.value === 0, features: Dt.RenderStrategy | Dt.Static, name: "Dialog" }))))), R(hr, { features: jt.Hidden, ref: p })]);
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
    return R(mr, { force: !0 }, () => R(Bi, () => z({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let zr = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
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
function eu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function or(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Et(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var br = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(br || {});
function tu(e, t) {
  let r = Ur();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function En(e, t, r, n, i, a) {
  let o = Ur(), s = a !== void 0 ? eu(a) : () => {
  };
  return Et(e, ...i), or(e, ...t, ...r), o.nextFrame(() => {
    Et(e, ...r), or(e, ...n), o.add(tu(e, (l) => (Et(e, ...n, ...t), or(e, ...i), s(l))));
  }), o.add(() => Et(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Gr = Symbol("TransitionContext");
var ru = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ru || {});
function nu() {
  return U(Gr, null) !== null;
}
function iu() {
  let e = U(Gr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function au() {
  let e = U(Kr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Kr = Symbol("NestingContext");
function Wt(e) {
  return "children" in e ? Wt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
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
    } }), !Wt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Mi = Dt.RenderStrategy, Je = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!nu() && Al())
    return () => R(Ze, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = y(null), o = y("visible"), s = I(() => e.unmount ? we.Unmount : we.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = iu(), { register: c, unregister: f } = au(), p = { value: !0 }, d = Me(), v = { value: !1 }, b = ki(() => {
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
      v.value = !1, $ === br.Finished && t("afterEnter");
    }) : En(x, E, O, h, P, ($) => {
      v.value = !1, $ === br.Finished && (Wt(b) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    dt([l], (S, _, x) => {
      g(x), p.value = !1;
    }, { immediate: !0 });
  }), te(Kr, b), Pl(I(() => Y(o.value, { visible: Fe.Open, hidden: Fe.Closed }))), () => {
    let { appear: S, show: _, enter: x, enterFrom: $, enterTo: C, entered: q, leave: F, leaveFrom: V, leaveTo: L, ...k } = e;
    return z({ theirProps: k, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Mi, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), ou = Je, Ze = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), a = I(() => e.show === null && i !== null ? Y(i.value, { [Fe.Open]: !0, [Fe.Closed]: !1 }) : e.show);
  Z(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = y(a.value ? "visible" : "hidden"), s = ki(() => {
    o.value = "hidden";
  }), l = y(!0), u = { show: a, appear: I(() => e.appear || !l.value) };
  return M(() => {
    Z(() => {
      l.value = !1, a.value ? o.value = "visible" : Wt(s) || (o.value = "hidden");
    });
  }), te(Kr, s), te(Gr, u), () => {
    let c = Ti(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return z({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [R(ou, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Mi, visible: o.value === "visible", name: "Transition" });
  };
} });
const su = {
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
function Ni(e, t) {
  t = Vr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function Xr(e, t, r) {
  var n = e == null ? void 0 : Ni(e, t);
  return n === void 0 ? r : n;
}
var lu = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const _n = lu;
function Vi(e, t, r) {
  t == "__proto__" && _n ? _n(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var uu = Object.prototype, cu = uu.hasOwnProperty;
function fu(e, t, r) {
  var n = e[t];
  (!(cu.call(e, t) && kr(n, r)) || r === void 0 && !(t in e)) && Vi(e, t, r);
}
function du(e, t, r, n) {
  if (!ne(e))
    return e;
  t = Vr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = pt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ne(c) ? c : Ir(t[i + 1]) ? [] : {});
    }
    fu(s, l, u), s = s[l];
  }
  return e;
}
function Hi(e, t, r) {
  return e == null ? e : du(e, t, r);
}
const pu = {
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
          Hi(e.values, r, n);
        }
      })
    );
  }
};
var hu = function() {
  return oe.Date.now();
};
const sr = hu;
var vu = /\s/;
function mu(e) {
  for (var t = e.length; t-- && vu.test(e.charAt(t)); )
    ;
  return t;
}
var gu = /^\s+/;
function yu(e) {
  return e && e.slice(0, mu(e) + 1).replace(gu, "");
}
var xn = 0 / 0, bu = /^[-+]0x[0-9a-f]+$/i, wu = /^0b[01]+$/i, Su = /^0o[0-7]+$/i, Ou = parseInt;
function wr(e) {
  if (typeof e == "number")
    return e;
  if (Mt(e))
    return xn;
  if (ne(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = yu(e);
  var r = wu.test(e);
  return r || Su.test(e) ? Ou(e.slice(2), r ? 2 : 8) : bu.test(e) ? xn : +e;
}
var $u = "Expected a function", Eu = Math.max, _u = Math.min;
function Ui(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError($u);
  t = wr(t) || 0, ne(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? Eu(wr(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, S = i;
    return n = i = void 0, u = h, o = e.apply(S, g), o;
  }
  function v(h) {
    return u = h, s = setTimeout(T, t), c ? d(h) : o;
  }
  function b(h) {
    var g = h - l, S = h - u, _ = t - g;
    return f ? _u(_, a - S) : _;
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
const xu = {
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
    this.debounceFunction = Ui(() => {
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
}, Tu = {
  render() {
    return this.$slots.default({
      Dialog: Wr,
      DialogPanel: zr
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
    }), Sa(() => {
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
function Qr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var qe = Math.max, qt = Math.min, ze = Math.round;
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
  var o = Re(e) ? Q(e) : window, s = o.visualViewport, l = !zi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
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
function Yr(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Au(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pu(e) {
  return e === Q(e) || !X(e) ? Yr(e) : Au(e);
}
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Te(e) {
  return ((Re(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Jr(e) {
  return Ge(Te(e)).left + Yr(e).scrollLeft;
}
function ee(e) {
  return Q(e).getComputedStyle(e);
}
function Zr(e) {
  var t = ee(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Iu(e) {
  var t = e.getBoundingClientRect(), r = ze(t.width) / e.offsetWidth || 1, n = ze(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Cu(e, t, r) {
  r === void 0 && (r = !1);
  var n = X(t), i = X(t) && Iu(t), a = Te(t), o = Ge(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ie(t) !== "body" || Zr(a)) && (s = Pu(t)), X(t) ? (l = Ge(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Jr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
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
  return ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (Qr(e) ? e.host : null) || Te(e);
}
function Ki(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : X(e) && Zr(e) ? e : Ki(zt(e));
}
function st(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ki(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), o = i ? [a].concat(a.visualViewport || [], Zr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(st(zt(o)));
}
function Du(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function Tn(e) {
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
  for (Qr(i) && (i = i.host); X(i) && ["html", "body"].indexOf(ie(i)) < 0; ) {
    var a = ee(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Gt(e) {
  for (var t = Q(e), r = Tn(e); r && Du(r) && ee(r).position === "static"; )
    r = Tn(r);
  return r && (ie(r) === "html" || ie(r) === "body" && ee(r).position === "static") ? t : r || ju(e) || t;
}
var J = "top", ae = "bottom", Ee = "right", ue = "left", Kt = "auto", Xt = [J, ae, Ee, ue], Ke = "start", ft = "end", qu = "clippingParents", Xi = "viewport", it = "popper", Bu = "reference", An = /* @__PURE__ */ Xt.reduce(function(e, t) {
  return e.concat([t + "-" + Ke, t + "-" + ft]);
}, []), Fu = /* @__PURE__ */ [].concat(Xt, [Kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ke, t + "-" + ft]);
}, []), Ru = "beforeRead", Lu = "read", ku = "afterRead", Mu = "beforeMain", Nu = "main", Vu = "afterMain", Hu = "beforeWrite", Uu = "write", Wu = "afterWrite", Or = [Ru, Lu, ku, Mu, Nu, Vu, Hu, Uu, Wu];
function zu(e) {
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
function Gu(e) {
  var t = zu(e);
  return Or.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ku(e) {
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
var De = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Xu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Pn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Qu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Pn).filter(function(r, n, i) {
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
          Or.indexOf(t.phase) < 0 && console.error(ge(De, t.name, '"phase"', "either " + Or.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Pn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ge(Xu, String(t.name), n, n));
      });
    });
  });
}
function Yu(e, t) {
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
function Ju(e) {
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
function Zu(e, t) {
  var r = Q(e), n = Te(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = zi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Jr(e),
    y: l
  };
}
function ec(e) {
  var t, r = Te(e), n = Yr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = qe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = qe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Jr(e), l = -n.scrollTop;
  return ee(i || r).direction === "rtl" && (s += qe(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function tc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Qr(r)) {
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
function rc(e, t) {
  var r = Ge(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function In(e, t, r) {
  return t === Xi ? $r(Zu(e, r)) : Re(t) ? rc(t, r) : $r(ec(Te(e)));
}
function nc(e) {
  var t = st(zt(e)), r = ["absolute", "fixed"].indexOf(ee(e).position) >= 0, n = r && X(e) ? Gt(e) : e;
  return Re(n) ? t.filter(function(i) {
    return Re(i) && tc(i, n) && ie(i) !== "body";
  }) : [];
}
function ic(e, t, r, n) {
  var i = t === "clippingParents" ? nc(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = In(e, u, n);
    return l.top = qe(c.top, l.top), l.right = qt(c.right, l.right), l.bottom = qt(c.bottom, l.bottom), l.left = qe(c.left, l.left), l;
  }, In(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Xe(e) {
  return e.split("-")[1];
}
function Qi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ce(n) : null, a = n ? Xe(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
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
function ac(e) {
  return Object.assign({}, Ji(), e);
}
function oc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function en(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? qu : s, u = r.rootBoundary, c = u === void 0 ? Xi : u, f = r.elementContext, p = f === void 0 ? it : f, d = r.altBoundary, v = d === void 0 ? !1 : d, b = r.padding, w = b === void 0 ? 0 : b, T = ac(typeof w != "number" ? w : oc(w, Xt)), A = p === it ? Bu : it, P = e.rects.popper, E = e.elements[v ? A : p], O = ic(Re(E) ? E : E.contextElement || Te(e.elements.popper), l, c, o), h = Ge(e.elements.reference), g = Yi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), S = $r(Object.assign({}, P, g)), _ = p === it ? S : h, x = {
    top: O.top - _.top + T.top,
    bottom: _.bottom - O.bottom + T.bottom,
    left: O.left - _.left + T.left,
    right: _.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (p === it && $) {
    var C = $[i];
    Object.keys(x).forEach(function(q) {
      var F = [Ee, ae].indexOf(q) >= 0 ? 1 : -1, V = [J, ae].indexOf(q) >= 0 ? "y" : "x";
      x[q] += C[V] * F;
    });
  }
  return x;
}
var Cn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", sc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Dn = {
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
function lc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? Dn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dn, a),
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
          reference: Re(s) ? st(s) : s.contextElement ? st(s.contextElement) : [],
          popper: st(l)
        };
        var P = Gu(Ju([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Yu([].concat(P, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (Qu(E), ce(c.options.placement) === Kt) {
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
          if (!jn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(Cn);
            return;
          }
          c.rects = {
            reference: Cu(A, Gt(P), c.options.strategy === "fixed"),
            popper: Gi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(sc);
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
      update: Ku(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!jn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(Cn), d;
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
function uc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, _t);
  }), s && l.addEventListener("resize", r.update, _t), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, _t);
    }), s && l.removeEventListener("resize", r.update, _t);
  };
}
const cc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: uc,
  data: {}
};
function fc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Yi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const dc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fc,
  data: {}
};
var pc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: ze(t * i) / i || 0,
    y: ze(r * i) / i || 0
  };
}
function qn(e) {
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
    var h = Gt(r), g = "clientHeight", S = "clientWidth";
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
  }, u && pc), C = c === !0 ? hc({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  if (d = C.x, b = C.y, l) {
    var q;
    return Object.assign({}, $, (q = {}, q[E] = A ? "0" : "", q[P] = T ? "0" : "", q.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", q));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? b + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function vc(e) {
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
    variation: Xe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const mc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vc,
  data: {}
};
function gc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !X(a) || !ie(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function yc(e) {
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
const bc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gc,
  effect: yc,
  requires: ["computeStyles"]
};
var wc = [cc, dc, mc, bc], Sc = /* @__PURE__ */ lc({
  defaultModifiers: wc
});
function Oc(e) {
  return e === "x" ? "y" : "x";
}
function At(e, t, r) {
  return qe(e, qt(t, r));
}
function $c(e, t, r) {
  var n = At(e, t, r);
  return n > r ? r : n;
}
function Ec(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, b = v === void 0 ? 0 : v, w = en(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = ce(t.placement), A = Xe(t.placement), P = !A, E = Qi(T), O = Oc(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, S = t.rects.popper, _ = typeof b == "function" ? b(Object.assign({}, t.rects, {
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
      var q, F = E === "y" ? J : ue, V = E === "y" ? ae : Ee, L = E === "y" ? "height" : "width", k = h[E], mt = k + w[F], Ae = k - w[V], gt = d ? -S[L] / 2 : 0, Yt = A === Ke ? g[L] : S[L], et = A === Ke ? -S[L] : -g[L], yt = t.elements.arrow, Ve = d && yt ? Gi(yt) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ji(), tt = me[F], bt = me[V], Pe = At(0, g[L], Ve[L]), Jt = P ? g[L] / 2 - gt - Pe - tt - x.mainAxis : Yt - Pe - tt - x.mainAxis, fa = P ? -g[L] / 2 + gt + Pe + bt + x.mainAxis : et + Pe + bt + x.mainAxis, Zt = t.elements.arrow && Gt(t.elements.arrow), da = Zt ? E === "y" ? Zt.clientTop || 0 : Zt.clientLeft || 0 : 0, rn = (q = $ == null ? void 0 : $[E]) != null ? q : 0, pa = k + Jt - rn - da, ha = k + fa - rn, nn = At(d ? qt(mt, pa) : mt, k, d ? qe(Ae, ha) : Ae);
      h[E] = nn, C[E] = nn - k;
    }
    if (s) {
      var an, va = E === "x" ? J : ue, ma = E === "x" ? ae : Ee, Ie = h[O], wt = O === "y" ? "height" : "width", on = Ie + w[va], sn = Ie - w[ma], er = [J, ue].indexOf(T) !== -1, ln = (an = $ == null ? void 0 : $[O]) != null ? an : 0, un = er ? on : Ie - g[wt] - S[wt] - ln + x.altAxis, cn = er ? Ie + g[wt] + S[wt] - ln - x.altAxis : sn, fn = d && er ? $c(un, Ie, cn) : At(d ? un : on, Ie, d ? cn : sn);
      h[O] = fn, C[O] = fn - Ie;
    }
    t.modifiersData[n] = C;
  }
}
const _c = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ec,
  requiresIfExists: ["offset"]
};
var xc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xc[t];
  });
}
var Tc = {
  start: "end",
  end: "start"
};
function Bn(e) {
  return e.replace(/start|end/g, function(t) {
    return Tc[t];
  });
}
function Ac(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Fu : l, c = Xe(n), f = c ? s ? An : An.filter(function(v) {
    return Xe(v) === c;
  }) : Xt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, b) {
    return v[b] = en(e, {
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
function Pc(e) {
  if (ce(e) === Kt)
    return [];
  var t = Pt(e);
  return [Bn(e), t, Bn(t)];
}
function Ic(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, b = r.allowedAutoPlacements, w = t.options.placement, T = ce(w), A = T === w, P = l || (A || !v ? [Pt(w)] : Pc(w)), E = [w].concat(P).reduce(function(Ve, me) {
      return Ve.concat(ce(me) === Kt ? Ac(t, {
        placement: me,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : me);
    }, []), O = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), S = !0, _ = E[0], x = 0; x < E.length; x++) {
      var $ = E[x], C = ce($), q = Xe($) === Ke, F = [J, ae].indexOf(C) >= 0, V = F ? "width" : "height", L = en(t, {
        placement: $,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), k = F ? q ? Ee : ue : q ? ae : J;
      O[V] > h[V] && (k = Pt(k));
      var mt = Pt(k), Ae = [];
      if (a && Ae.push(L[C] <= 0), s && Ae.push(L[k] <= 0, L[mt] <= 0), Ae.every(function(Ve) {
        return Ve;
      })) {
        _ = $, S = !1;
        break;
      }
      g.set($, Ae);
    }
    if (S)
      for (var gt = v ? 3 : 1, Yt = function(me) {
        var tt = E.find(function(bt) {
          var Pe = g.get(bt);
          if (Pe)
            return Pe.slice(0, me).every(function(Jt) {
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
const Cc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ic,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Ne = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Dc = {
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
    this.teleport && await Ue();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Sc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [Cc, _c],
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
function qc(e, t, r, n, i, a) {
  const o = ei("OnClickOutside");
  return j(), K(o, {
    style: It(a.wrapperStyle),
    do: a.hide,
    opened: i.opened
  }, {
    default: Oa(() => [
      ur("div", {
        ref: "button",
        style: It(a.buttonStyle)
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
  }, 8, ["style", "do", "opened"]);
}
const Bc = /* @__PURE__ */ Ne(Dc, [["render", qc]]), Fc = {
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
    return (n, i) => H(t).isSsr ? (j(), K(se, {
      key: e.keepAliveKey,
      html: H(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (j(), K(Jn, {
      key: 0,
      max: H(r).max_keep_alive
    }, [
      (j(), K(se, {
        key: e.keepAliveKey,
        html: H(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function Zi(e) {
  return e && e.length ? e[0] : void 0;
}
const Rc = {
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
}, Lc = {
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
}, kc = {
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
}, Mc = { ref: "file" };
function Nc(e, t, r, n, i, a) {
  return j(), de("div", Mc, [
    re(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Vc = /* @__PURE__ */ Ne(kc, [["render", Nc]]), Hc = {
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
function Uc() {
  this.__data__ = new he(), this.size = 0;
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
  if (r instanceof he) {
    var n = r.__data__;
    if (!ut || n.length < Kc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function fe(e) {
  var t = this.__data__ = new he(e);
  this.size = t.size;
}
fe.prototype.clear = Uc;
fe.prototype.delete = Wc;
fe.prototype.get = zc;
fe.prototype.has = Gc;
fe.prototype.set = Xc;
var Qc = "__lodash_hash_undefined__";
function Yc(e) {
  return this.__data__.set(e, Qc), this;
}
function Jc(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = Yc;
Bt.prototype.has = Jc;
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
function na(e, t, r, n, i, a) {
  var o = r & tf, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & rf ? new Bt() : void 0;
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
      if (!Zc(t, function(T, A) {
        if (!ef(d, A) && (v === T || i(v, T, r, n, a)))
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
var nf = oe.Uint8Array;
const Fn = nf;
function af(e) {
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
var sf = 1, lf = 2, uf = "[object Boolean]", cf = "[object Date]", ff = "[object Error]", df = "[object Map]", pf = "[object Number]", hf = "[object RegExp]", vf = "[object Set]", mf = "[object String]", gf = "[object Symbol]", yf = "[object ArrayBuffer]", bf = "[object DataView]", Rn = Se ? Se.prototype : void 0, lr = Rn ? Rn.valueOf : void 0;
function wf(e, t, r, n, i, a, o) {
  switch (r) {
    case bf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yf:
      return !(e.byteLength != t.byteLength || !a(new Fn(e), new Fn(t)));
    case uf:
    case cf:
    case pf:
      return kr(+e, +t);
    case ff:
      return e.name == t.name && e.message == t.message;
    case hf:
    case mf:
      return e == t + "";
    case df:
      var s = af;
    case vf:
      var l = n & sf;
      if (s || (s = of), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= lf, o.set(e, t);
      var c = na(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case gf:
      if (lr)
        return lr.call(e) == lr.call(t);
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
  return N(e) ? n : Sf(n, r(e));
}
function ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function $f() {
  return [];
}
var Ef = Object.prototype, _f = Ef.propertyIsEnumerable, Ln = Object.getOwnPropertySymbols, xf = Ln ? function(e) {
  return e == null ? [] : (e = Object(e), ia(Ln(e), function(t) {
    return _f.call(e, t);
  }));
} : $f;
const Tf = xf;
function kn(e) {
  return Of(e, Lt, Tf);
}
var Af = 1, Pf = Object.prototype, If = Pf.hasOwnProperty;
function Cf(e, t, r, n, i, a) {
  var o = r & Af, s = kn(e), l = s.length, u = kn(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : If.call(t, p)))
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
var Df = ke(oe, "DataView");
const Er = Df;
var jf = ke(oe, "Promise");
const _r = jf;
var qf = ke(oe, "Set");
const xr = qf;
var Bf = ke(oe, "WeakMap");
const Tr = Bf;
var Mn = "[object Map]", Ff = "[object Object]", Nn = "[object Promise]", Vn = "[object Set]", Hn = "[object WeakMap]", Un = "[object DataView]", Rf = Le(Er), Lf = Le(ut), kf = Le(_r), Mf = Le(xr), Nf = Le(Tr), je = xe;
(Er && je(new Er(new ArrayBuffer(1))) != Un || ut && je(new ut()) != Mn || _r && je(_r.resolve()) != Nn || xr && je(new xr()) != Vn || Tr && je(new Tr()) != Hn) && (je = function(e) {
  var t = xe(e), r = t == Ff ? e.constructor : void 0, n = r ? Le(r) : "";
  if (n)
    switch (n) {
      case Rf:
        return Un;
      case Lf:
        return Mn;
      case kf:
        return Nn;
      case Mf:
        return Vn;
      case Nf:
        return Hn;
    }
  return t;
});
const Wn = je;
var Vf = 1, zn = "[object Arguments]", Gn = "[object Array]", xt = "[object Object]", Hf = Object.prototype, Kn = Hf.hasOwnProperty;
function Uf(e, t, r, n, i, a) {
  var o = N(e), s = N(t), l = o ? Gn : Wn(e), u = s ? Gn : Wn(t);
  l = l == zn ? xt : l, u = u == zn ? xt : u;
  var c = l == xt, f = u == xt, p = l == u;
  if (p && cr(e)) {
    if (!cr(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new fe()), o || si(e) ? na(e, t, r, n, i, a) : wf(e, t, l, r, n, i, a);
  if (!(r & Vf)) {
    var d = c && Kn.call(e, "__wrapped__"), v = f && Kn.call(t, "__wrapped__");
    if (d || v) {
      var b = d ? e.value() : e, w = v ? t.value() : t;
      return a || (a = new fe()), i(b, w, r, n, a);
    }
  }
  return p ? (a || (a = new fe()), Cf(e, t, r, n, i, a)) : !1;
}
function Qt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : Uf(e, t, r, n, Qt, i);
}
var Wf = 1, zf = 2;
function Gf(e, t, r, n) {
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
      if (!(p === void 0 ? Qt(c, u, Wf | zf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function aa(e) {
  return e === e && !ne(e);
}
function Kf(e) {
  for (var t = Lt(e), r = t.length; r--; ) {
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
function Xf(e) {
  var t = Kf(e);
  return t.length == 1 && t[0][2] ? oa(t[0][0], t[0][1]) : function(r) {
    return r === e || Gf(r, e, t);
  };
}
function Qf(e, t) {
  return e != null && t in Object(e);
}
function Yf(e, t) {
  return e != null && _i(e, t, Qf);
}
var Jf = 1, Zf = 2;
function ed(e, t) {
  return Lr(e) && aa(t) ? oa(pt(e), t) : function(r) {
    var n = Xr(r, e);
    return n === void 0 && n === t ? Yf(r, e) : Qt(t, n, Jf | Zf);
  };
}
function td(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function rd(e) {
  return function(t) {
    return Ni(t, e);
  };
}
function nd(e) {
  return Lr(e) ? td(pt(e)) : rd(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? ui : typeof e == "object" ? N(e) ? ed(e[0], e[1]) : Xf(e) : nd(e);
}
function id(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Rt(t)) {
      var a = vt(r);
      t = Lt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
function ad(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Xn = 1 / 0, od = 17976931348623157e292;
function sd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = wr(e), e === Xn || e === -Xn) {
    var t = e < 0 ? -1 : 1;
    return t * od;
  }
  return e === e ? e : 0;
}
function tn(e) {
  var t = sd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ld = Math.max;
function ud(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : tn(r);
  return i < 0 && (i = ld(n + i, 0)), ad(e, vt(t), i);
}
var cd = id(ud);
const sa = cd;
var fd = "[object Boolean]";
function la(e) {
  return e === !0 || e === !1 || Oe(e) && xe(e) == fd;
}
function ua(e, t) {
  var r = {};
  return t = vt(t), Dr(e, function(n, i, a) {
    Vi(r, i, t(n, i, a));
  }), r;
}
const dd = {
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
      return Hi(this.values, e, t);
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
      this.stay && (t["X-Splade-Prevent-Refresh"] = !0), m.request(this.action, this.method.toUpperCase(), e, t).then((r) => {
        this.$emit("success", r), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch(async (r) => {
        if (this.processing = !1, this.$emit("error", r), !this.scrollOnError)
          return;
        await this.$nextTick();
        const n = sa(Object.keys(this.errors), (i) => this.formElement.querySelector(`[data-validation-key="${i}"]`));
        n && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${n}"]`)
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
}, pd = {
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
}, hd = { ref: "input" };
function vd(e, t, r, n, i, a) {
  return j(), de("div", hd, [
    re(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const md = /* @__PURE__ */ Ne(pd, [["render", vd]]), gd = {
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
function yd(e, t, r, n, i, a) {
  const o = ei("Render");
  return i.html ? (j(), K(o, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? re(e.$slots, "default", { key: 1 }) : Ft("", !0);
}
const bd = /* @__PURE__ */ Ne(gd, [["render", yd]]), wd = ["href", "onClick"], Sd = {
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
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      t.replace ? m.replace(t.href) : m.visit(t.href);
    }
    return (i, a) => (j(), de("a", {
      href: e.href,
      onClick: $a(r, ["prevent"])
    }, [
      re(i.$slots, "default")
    ], 8, wd));
  }
}, Od = {
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
}, $d = {
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
      return sa(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, Ed = { ref: "select" };
function _d(e, t, r, n, i, a) {
  return j(), de("div", Ed, [
    re(e.$slots, "default")
  ], 512);
}
const xd = /* @__PURE__ */ Ne($d, [["render", _d]]), Td = {
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
function ca(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ad(e, t, r) {
  e = Nr(e), t = Ht(t);
  var n = e.length;
  r = r === void 0 ? n : ca(tn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Pd(e, t) {
  var r = [];
  return jr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function Id(e, t) {
  var r = N(e) ? ia : Pd;
  return r(e, vt(t));
}
function Qn(e, t) {
  return Qt(e, t);
}
function Cd(e, t) {
  var r = -1, n = Rt(e) ? Array(e.length) : [];
  return jr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function Dd(e, t) {
  var r = N(e) ? Ei : Cd;
  return r(e, vt(t));
}
function Tt(e, t, r) {
  return e = Nr(e), r = r == null ? 0 : ca(tn(r), 0, e.length), t = Ht(t), e.slice(r, r + t.length) == t;
}
const jd = {
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
    }
  },
  data() {
    return {
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null
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
  created() {
    this.debounceUpdateQuery = Ui(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
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
      const t = !this.columnIsVisible(e), r = Id(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Dd(r, (i) => i.key).sort();
      Qn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Ue(() => {
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
        if (!Ad(i, "]")) {
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
        typeof t < "u" && t && Ue(() => {
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
}, qd = {
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
  return i.isMounted ? (j(), K(Zn, Ea(_a({ key: 0 }, e.$attrs)), [
    re(e.$slots, "default")
  ], 16)) : Ft("", !0);
}
const Fd = /* @__PURE__ */ Ne(qd, [["render", Bd]]), Rd = {
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
        Ue(() => e.default.update(this.element));
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
}, Ld = { ref: "textarea" };
function kd(e, t, r, n, i, a) {
  return j(), de("div", Ld, [
    re(e.$slots, "default")
  ], 512);
}
const Md = /* @__PURE__ */ Ne(Rd, [["render", kd]]), Nd = {
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
      Render: se,
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
}, Qd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : !1, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, su).component(`${r}Data`, pu).component(`${r}Defer`, xu).component(`${r}Dialog`, Tu).component(`${r}Dropdown`, Bc).component(`${r}DynamicHtml`, Fc).component(`${r}Errors`, Rc).component(`${r}Event`, Lc).component(`${r}File`, Vc).component(`${r}Flash`, Hc).component(`${r}Form`, dd).component(`${r}Input`, md).component(`${r}Lazy`, bd).component(`${r}Modal`, Od).component(`${r}OnClickOutside`, Wi).component(`${r}Render`, se).component(`${r}Select`, xd).component(`${r}State`, Td).component(`${r}Table`, jd).component(`${r}Teleport`, Fd).component(`${r}Textarea`, Md).component(`${r}Toast`, Nd).component(`${r}Toasts`, Hd).component(`${r}Toggle`, Ud).component(`${r}Transition`, Wd).component(t.link_component, Sd), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
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
    be(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Yd(e, t, r) {
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
  $s as SpladeApp,
  Qd as SpladePlugin,
  Kd as renderSpladeApp,
  Yd as startServer
};
