import zn from "axios";
import { ref as y, computed as C, watch as ct, openBlock as M, createBlock as ke, unref as ve, h as B, onMounted as k, createElementBlock as le, createElementVNode as ar, provide as Z, inject as J, nextTick as at, resolveDynamicComponent as ua, KeepAlive as ca, withCtx as Gn, normalizeStyle as fa, createVNode as da, Fragment as _r, renderList as pa, createCommentVNode as ha, cloneVNode as va, watchEffect as Q, defineComponent as U, onUnmounted as Oe, Teleport as ma, reactive as ga, onBeforeUnmount as ya, renderSlot as ge, resolveComponent as ba, withModifiers as wa } from "vue";
function Sa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Oa(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var $a = Oa();
const Ea = $a;
function _a(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var xa = typeof global == "object" && global && global.Object === Object && global;
const Kn = xa;
var Ta = typeof self == "object" && self && self.Object === Object && self, Aa = Kn || Ta || Function("return this")();
const ne = Aa;
var Pa = ne.Symbol;
const ye = Pa;
var Xn = Object.prototype, Ia = Xn.hasOwnProperty, Ca = Xn.toString, Je = ye ? ye.toStringTag : void 0;
function Da(e) {
  var t = Ia.call(e, Je), r = e[Je];
  try {
    e[Je] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ca.call(e);
  return n && (t ? e[Je] = r : delete e[Je]), i;
}
var ja = Object.prototype, Ba = ja.toString;
function Fa(e) {
  return Ba.call(e);
}
var Ra = "[object Null]", La = "[object Undefined]", on = ye ? ye.toStringTag : void 0;
function $e(e) {
  return e == null ? e === void 0 ? La : Ra : on && on in Object(e) ? Da(e) : Fa(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var qa = "[object Arguments]";
function sn(e) {
  return be(e) && $e(e) == qa;
}
var Qn = Object.prototype, Ma = Qn.hasOwnProperty, ka = Qn.propertyIsEnumerable, Na = sn(function() {
  return arguments;
}()) ? sn : function(e) {
  return be(e) && Ma.call(e, "callee") && !ka.call(e, "callee");
};
const Yn = Na;
var Ha = Array.isArray;
const N = Ha;
function Va() {
  return !1;
}
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports, ln = Jn && typeof module == "object" && module && !module.nodeType && module, Ua = ln && ln.exports === Jn, un = Ua ? ne.Buffer : void 0, Wa = un ? un.isBuffer : void 0, za = Wa || Va;
const or = za;
var Ga = 9007199254740991, Ka = /^(?:0|[1-9]\d*)$/;
function xr(e, t) {
  var r = typeof e;
  return t = t == null ? Ga : t, !!t && (r == "number" || r != "symbol" && Ka.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Xa = 9007199254740991;
function Tr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xa;
}
var Qa = "[object Arguments]", Ya = "[object Array]", Ja = "[object Boolean]", Za = "[object Date]", eo = "[object Error]", to = "[object Function]", ro = "[object Map]", no = "[object Number]", io = "[object Object]", ao = "[object RegExp]", oo = "[object Set]", so = "[object String]", lo = "[object WeakMap]", uo = "[object ArrayBuffer]", co = "[object DataView]", fo = "[object Float32Array]", po = "[object Float64Array]", ho = "[object Int8Array]", vo = "[object Int16Array]", mo = "[object Int32Array]", go = "[object Uint8Array]", yo = "[object Uint8ClampedArray]", bo = "[object Uint16Array]", wo = "[object Uint32Array]", I = {};
I[fo] = I[po] = I[ho] = I[vo] = I[mo] = I[go] = I[yo] = I[bo] = I[wo] = !0;
I[Qa] = I[Ya] = I[uo] = I[Ja] = I[co] = I[Za] = I[eo] = I[to] = I[ro] = I[no] = I[io] = I[ao] = I[oo] = I[so] = I[lo] = !1;
function So(e) {
  return be(e) && Tr(e.length) && !!I[$e(e)];
}
function Oo(e) {
  return function(t) {
    return e(t);
  };
}
var Zn = typeof exports == "object" && exports && !exports.nodeType && exports, tt = Zn && typeof module == "object" && module && !module.nodeType && module, $o = tt && tt.exports === Zn, Yt = $o && Kn.process, Eo = function() {
  try {
    var e = tt && tt.require && tt.require("util").types;
    return e || Yt && Yt.binding && Yt.binding("util");
  } catch {
  }
}();
const cn = Eo;
var fn = cn && cn.isTypedArray, _o = fn ? Oo(fn) : So;
const ei = _o;
var xo = Object.prototype, To = xo.hasOwnProperty;
function Ao(e, t) {
  var r = N(e), n = !r && Yn(e), i = !r && !n && or(e), a = !r && !n && !i && ei(e), o = r || n || i || a, s = o ? _a(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || To.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || xr(u, l))) && s.push(u);
  return s;
}
var Po = Object.prototype;
function Io(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Po;
  return e === r;
}
function Co(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Do = Co(Object.keys, Object);
const jo = Do;
var Bo = Object.prototype, Fo = Bo.hasOwnProperty;
function Ro(e) {
  if (!Io(e))
    return jo(e);
  var t = [];
  for (var r in Object(e))
    Fo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lo = "[object AsyncFunction]", qo = "[object Function]", Mo = "[object GeneratorFunction]", ko = "[object Proxy]";
function ti(e) {
  if (!ee(e))
    return !1;
  var t = $e(e);
  return t == qo || t == Mo || t == Lo || t == ko;
}
function jt(e) {
  return e != null && Tr(e.length) && !ti(e);
}
function Bt(e) {
  return jt(e) ? Ao(e) : Ro(e);
}
function Ar(e, t) {
  return e && Ea(e, t, Bt);
}
function No(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!jt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var Ho = No(Ar);
const Pr = Ho;
function ri(e) {
  return e;
}
function ni(e) {
  return typeof e == "function" ? e : ri;
}
function Vo(e, t) {
  var r = N(e) ? Sa : Pr;
  return r(e, ni(t));
}
var Uo = Array.prototype, Wo = Uo.reverse;
function zo(e) {
  return e == null ? e : Wo.call(e);
}
const sr = y(1), we = typeof window > "u";
function Go(e, t) {
  we || window.addEventListener("popstate", Ko.bind(this)), Dr(t), Ft(t.head), jr(e);
  const r = we ? "" : location.href, n = Ir(
    r,
    t.head,
    e,
    {},
    sr.value
  );
  ii(n);
}
function Ko(e) {
  !e.state || (H.value = e.state, ie.value = 0, Ft(H.value.head), jr(H.value.html, H.value.rememberedState.scrollY));
}
function Ir(e, t, r, n, i) {
  const a = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return H.value = a, a;
}
function Xo(e) {
  we || window.history.pushState(e, "", e.url);
}
function Qo(e) {
  const t = Ir(
    e,
    JSON.parse(JSON.stringify(H.value.head)),
    H.value.html,
    { ...H.value.rememberedState },
    H.value.pageVisitId
  );
  we || window.history.replaceState(t, "", t.url);
}
function ii(e) {
  we || window.history.replaceState(e, "", e.url);
}
const H = y({}), dn = y(0);
function Yo(e, t) {
  dn.value++;
  const r = e.request.responseURL;
  e.data.splade.modal && ie.value++, Dr(e.data.splade), Ft(e.data.splade.head);
  const n = r === H.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return ls(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  ie.value = 0;
  let i = e.data.html;
  t ? i += `<!-- ${dn.value} -->` : sr.value++, jr(i, 0);
  const a = Ir(
    r,
    e.data.splade.head,
    i,
    H.value.rememberedState ? { ...H.value.rememberedState } : {},
    sr.value
  );
  t ? ii(a) : Xo(a);
}
const ie = y(0);
function Jo() {
  ie.value--, Ft(es(ie.value));
}
const ai = y({}), oi = y({}), si = (e) => oi.value[e], Zo = (e) => Object.keys(si.value[e]).length > 0, li = y({}), es = (e) => li.value[e], ui = y({}), ts = (e) => ui.value[e], He = y([]), rs = C(() => zo(He.value));
function ns(e) {
  He.value.push(e);
}
function is(e) {
  He.value[e].dismissed = !0, He.value[e].html = null;
}
const Cr = y(null);
function as(e, t, r, n) {
  let i, a;
  const o = new Promise((s, l) => {
    i = s, a = l;
  });
  return Cr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, o;
}
function os() {
  Cr.value = null;
}
function Dr(e) {
  ai.value = e.shared ? e.shared : {}, ui.value[ie.value] = e.flash ? e.flash : {}, li.value[ie.value] = e.head ? e.head : {}, Vo(e.toasts ? e.toasts : [], (t) => {
    He.value.push(t);
  }), oi.value[ie.value] = e.errors ? e.errors : {};
}
function ss(e) {
  mi.value(e);
}
function Ft(e) {
  pi.value(e);
}
function jr(e, t) {
  hi.value(e, t);
}
function ls(e, t) {
  vi.value(e, t);
}
const ci = y({});
function fi(e, t, r) {
  ci.value[e] = t, r && us(e, t);
}
function us(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function cs(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ci.value[e];
}
function St(e, t) {
  we || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function ft(e, t, r, n, i) {
  we || fi("scrollY", window.scrollY), St("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = zn({
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
    Yo(o, i), St("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: o });
  }).catch((o) => {
    St("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: o });
    const s = o.response.data.splade;
    s && Dr(s), o.response.status != 422 && ss(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function di(e) {
  return ft(e, "GET", {}, {}, !0);
}
function fs(e) {
  return ft(e, "GET", {}, {}, !1);
}
function ds(e) {
  return ft(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ps(e) {
  return ft(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function hs() {
  return di(H.value.url);
}
const pi = y(() => {
}), hi = y(() => {
}), vi = y(() => {
}), mi = y(() => {
}), m = {
  init: Go,
  replace: di,
  visit: fs,
  modal: ds,
  slideover: ps,
  refresh: hs,
  request: ft,
  replaceUrlOfCurrentPage: Qo,
  setOnHead(e) {
    pi.value = e;
  },
  setOnHtml(e) {
    hi.value = e;
  },
  setOnModal(e) {
    vi.value = e;
  },
  setOnServerError(e) {
    mi.value = e;
  },
  hasValidationErrors: Zo,
  validationErrors: si,
  sharedData: ai,
  flashData: ts,
  toasts: He,
  toastsReversed: rs,
  confirmModal: Cr,
  confirm: as,
  clearConfirmModal: os,
  pushToast: ns,
  dismissToast: is,
  restore: cs,
  remember: fi,
  popStack: Jo,
  currentStack: ie,
  pageVisitId: C(() => H.value.pageVisitId),
  isSsr: we
};
function Ne(e, t) {
  return e && Ar(e, ni(t));
}
var vs = "[object String]";
function Jt(e) {
  return typeof e == "string" || !N(e) && be(e) && $e(e) == vs;
}
const rt = {
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
      r.value = B({
        template: t.html
      });
    }
    return ct(() => t.html, n, { immediate: !0 }), (i, a) => (M(), ke(ve(r)));
  }
}, ms = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e;
    function n() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", o), t("close");
    }
    const i = y(null);
    function a() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = i.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", o);
    }
    function o(s) {
      s.keyCode === 27 && n();
    }
    return k(() => a()), (s, l) => (M(), le("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      ar("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, gs = {
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
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Jt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Z("stack", 0);
    const r = y(), n = y([]), i = y(null), a = C(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function o() {
      i.value = null;
    }
    function s(f) {
      n[f] = null, m.popStack();
    }
    const l = J("$spladeOptions") || {};
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      Ne(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, at(() => {
        m.isSsr || window.scrollTo(0, p), l.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(v) {
            v.preventDefault(), m.visit(d.href);
          }));
        });
      });
    }), m.setOnModal(function(f, p) {
      n.value[m.currentStack.value] = { html: f, type: p };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (M(), le("div", null, [
      (M(), ke(ua(ve(m).isSsr ? "div" : ca), {
        max: ve(l).max_keep_alive
      }, {
        default: Gn(() => [
          (M(), ke(rt, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: fa(ve(a)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      da(rt, { html: e.components }, null, 8, ["html"]),
      (M(!0), le(_r, null, pa(ve(m).currentStack.value, (d) => (M(), ke(rt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ve(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (M(), ke(ms, {
        key: 0,
        html: i.value,
        onClose: o
      }, null, 8, ["html"])) : ha("", !0)
    ]));
  }
};
function qd(e) {
  return () => B(gs, e);
}
var ys = Object.prototype, bs = ys.hasOwnProperty;
function ws(e, t) {
  return e != null && bs.call(e, t);
}
var Ss = "[object Symbol]";
function Rt(e) {
  return typeof e == "symbol" || be(e) && $e(e) == Ss;
}
var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $s = /^\w*$/;
function Br(e, t) {
  if (N(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : $s.test(e) || !Os.test(e) || t != null && e in Object(t);
}
var Es = ne["__core-js_shared__"];
const Zt = Es;
var pn = function() {
  var e = /[^.]+$/.exec(Zt && Zt.keys && Zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _s(e) {
  return !!pn && pn in e;
}
var xs = Function.prototype, Ts = xs.toString;
function Fe(e) {
  if (e != null) {
    try {
      return Ts.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var As = /[\\^$.*+?()[\]{}|]/g, Ps = /^\[object .+?Constructor\]$/, Is = Function.prototype, Cs = Object.prototype, Ds = Is.toString, js = Cs.hasOwnProperty, Bs = RegExp(
  "^" + Ds.call(js).replace(As, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fs(e) {
  if (!ee(e) || _s(e))
    return !1;
  var t = ti(e) ? Bs : Ps;
  return t.test(Fe(e));
}
function Rs(e, t) {
  return e == null ? void 0 : e[t];
}
function Re(e, t) {
  var r = Rs(e, t);
  return Fs(r) ? r : void 0;
}
var Ls = Re(Object, "create");
const ot = Ls;
function qs() {
  this.__data__ = ot ? ot(null) : {}, this.size = 0;
}
function Ms(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ks = "__lodash_hash_undefined__", Ns = Object.prototype, Hs = Ns.hasOwnProperty;
function Vs(e) {
  var t = this.__data__;
  if (ot) {
    var r = t[e];
    return r === ks ? void 0 : r;
  }
  return Hs.call(t, e) ? t[e] : void 0;
}
var Us = Object.prototype, Ws = Us.hasOwnProperty;
function zs(e) {
  var t = this.__data__;
  return ot ? t[e] !== void 0 : Ws.call(t, e);
}
var Gs = "__lodash_hash_undefined__";
function Ks(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ot && t === void 0 ? Gs : t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
De.prototype.clear = qs;
De.prototype.delete = Ms;
De.prototype.get = Vs;
De.prototype.has = zs;
De.prototype.set = Ks;
function Xs() {
  this.__data__ = [], this.size = 0;
}
function Fr(e, t) {
  return e === t || e !== e && t !== t;
}
function Lt(e, t) {
  for (var r = e.length; r--; )
    if (Fr(e[r][0], t))
      return r;
  return -1;
}
var Qs = Array.prototype, Ys = Qs.splice;
function Js(e) {
  var t = this.__data__, r = Lt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
}
function Zs(e) {
  var t = this.__data__, r = Lt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function el(e) {
  return Lt(this.__data__, e) > -1;
}
function tl(e, t) {
  var r = this.__data__, n = Lt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Xs;
ce.prototype.delete = Js;
ce.prototype.get = Zs;
ce.prototype.has = el;
ce.prototype.set = tl;
var rl = Re(ne, "Map");
const st = rl;
function nl() {
  this.size = 0, this.__data__ = {
    hash: new De(),
    map: new (st || ce)(),
    string: new De()
  };
}
function il(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qt(e, t) {
  var r = e.__data__;
  return il(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function al(e) {
  var t = qt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ol(e) {
  return qt(this, e).get(e);
}
function sl(e) {
  return qt(this, e).has(e);
}
function ll(e, t) {
  var r = qt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function fe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fe.prototype.clear = nl;
fe.prototype.delete = al;
fe.prototype.get = ol;
fe.prototype.has = sl;
fe.prototype.set = ll;
var ul = "Expected a function";
function Rr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ul);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Rr.Cache || fe)(), r;
}
Rr.Cache = fe;
var cl = 500;
function fl(e) {
  var t = Rr(e, function(n) {
    return r.size === cl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var dl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pl = /\\(\\)?/g, hl = fl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(dl, function(r, n, i, a) {
    t.push(i ? a.replace(pl, "$1") : n || r);
  }), t;
});
const vl = hl;
function gi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ml = 1 / 0, hn = ye ? ye.prototype : void 0, vn = hn ? hn.toString : void 0;
function Mt(e) {
  if (typeof e == "string")
    return e;
  if (N(e))
    return gi(e, Mt) + "";
  if (Rt(e))
    return vn ? vn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ml ? "-0" : t;
}
function Lr(e) {
  return e == null ? "" : Mt(e);
}
function qr(e, t) {
  return N(e) ? e : Br(e, t) ? [e] : vl(Lr(e));
}
var gl = 1 / 0;
function dt(e) {
  if (typeof e == "string" || Rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gl ? "-0" : t;
}
function yi(e, t, r) {
  t = qr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = dt(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Tr(i) && xr(o, i) && (N(e) || Yn(e)));
}
function V(e, t) {
  return e != null && yi(e, t, ws);
}
function K(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, K), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function W({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = yl(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return er(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return K(l, { [0]() {
      return null;
    }, [1]() {
      return er({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return er(s);
}
function er({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: o, ...s } = wi(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = !1, f = [];
    for (let [p, d] of Object.entries(n))
      typeof d == "boolean" && (c = !0), d === !0 && f.push(p);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (o === "template") {
    if (l = bi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!bl(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return va(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return B(o, Object.assign({}, s, u), l);
}
function bi(e) {
  return e.flatMap((t) => t.type === _r ? bi(t.children) : [t]);
}
function yl(...e) {
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
function wi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function bl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let wl = 0;
function Sl() {
  return ++wl;
}
function Le() {
  return Sl();
}
var Si = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Si || {});
function ue(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Oi = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Ol() {
  return Mr() !== null;
}
function Mr() {
  return J(Oi, null);
}
function $l(e) {
  Z(Oi, e);
}
const kt = typeof window > "u" || typeof document > "u";
function Ge(e) {
  if (kt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ue(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let lr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var lt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(lt || {}), $i = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))($i || {}), El = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(El || {});
function _l(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lr));
}
var Ei = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ei || {});
function xl(e, t = 0) {
  var r;
  return e === ((r = Ge(e)) == null ? void 0 : r.body) ? !1 : K(t, { [0]() {
    return e.matches(lr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(lr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Tl = ["textarea", "input"].join(",");
function Al(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Tl)) != null ? r : !1;
}
function Pl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ur(e, t, r = !0, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, o = Array.isArray(e) ? r ? Pl(e) : e : _l(e);
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
  return t & 6 && Al(p) && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2;
}
function tr(e, t, r) {
  kt || Q((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Il(e, t, r = C(() => !0)) {
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
      let c = u instanceof HTMLElement ? u : ue(u);
      if (c != null && c.contains(s))
        return;
    }
    return !xl(s, Ei.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s);
  }
  let i = y(null);
  tr("mousedown", (a) => {
    r.value && (i.value = a.target);
  }, !0), tr("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, !0), tr("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var It = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(It || {});
let cr = U({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return W({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Cl(e, t, r) {
  kt || Q((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fr || {});
function Dl() {
  let e = y(0);
  return Cl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function _i(e, t, r, n) {
  kt || Q((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function jl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var xi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(xi || {});
let Ze = Object.assign(U({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: y(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = y(null);
  n({ el: i, $el: i });
  let a = C(() => Ge(i));
  Bl({ ownerDocument: a }, C(() => Boolean(e.features & 16)));
  let o = Fl({ ownerDocument: a, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Rl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, C(() => Boolean(e.features & 8)));
  let s = Dl();
  function l() {
    let u = ue(i);
    !u || K(s.value, { [fr.Forwards]: () => ur(u, lt.First), [fr.Backwards]: () => ur(u, lt.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return B(_r, [Boolean(f & 4) && B(cr, { as: "button", type: "button", onFocus: l, features: It.Focusable }), W({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && B(cr, { as: "button", type: "button", onFocus: l, features: It.Focusable })]);
  };
} }), { features: xi });
function Bl({ ownerDocument: e }, t) {
  let r = y(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (nt(r.value), r.value = null);
  }
  k(() => {
    ct(t, (a, o) => {
      a !== o && (a ? n() : i());
    }, { immediate: !0 });
  }), Oe(i);
}
function Fl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = y(null), a = y(!1);
  return k(() => a.value = !0), Oe(() => a.value = !1), k(() => {
    ct([t, r, n], (o, s) => {
      if (o.every((u, c) => (s == null ? void 0 : s[c]) === u) || !n.value)
        return;
      let l = ue(t);
      !l || jl(() => {
        var u, c;
        if (!a.value)
          return;
        let f = ue(r), p = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === p) {
            i.value = p;
            return;
          }
        } else if (l.contains(p)) {
          i.value = p;
          return;
        }
        f ? nt(f) : ur(l, lt.First | lt.NoScroll) === $i.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Rl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  _i((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Ll(s, u) ? (n.value = u, nt(u)) : (o.preventDefault(), o.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function Ll(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let mn = "body > *", Me = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function gn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function yn(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function ql(e, t = y(!0)) {
  Q((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ge(n);
    if (i) {
      Me.add(n);
      for (let a of he.keys())
        a.contains(n) && (yn(a), he.delete(a));
      i.querySelectorAll(mn).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of Me)
            if (a.contains(o))
              return;
          Me.size === 1 && (he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), gn(a));
        }
      }), r(() => {
        if (Me.delete(n), Me.size > 0)
          i.querySelectorAll(mn).forEach((a) => {
            if (a instanceof HTMLElement && !he.has(a)) {
              for (let o of Me)
                if (a.contains(o))
                  return;
              he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), gn(a);
            }
          });
        else
          for (let a of he.keys())
            yn(a), he.delete(a);
      });
    }
  });
}
let Ti = Symbol("ForcePortalRootContext");
function Ml() {
  return J(Ti, !1);
}
let dr = U({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Z(Ti, e.force), () => {
    let { force: n, ...i } = e;
    return W({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function kl(e) {
  let t = Ge(e);
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
let Ai = U({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = y(null), i = C(() => Ge(n)), a = Ml(), o = J(Pi, null), s = y(a === !0 || o == null ? kl(n.value) : o.resolveTarget());
  return Q(() => {
    a || o != null && (s.value = o.resolveTarget());
  }), Oe(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return B(ma, { to: s.value }, W({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Pi = Symbol("PortalGroupContext"), Nl = U({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ga({ resolveTarget() {
    return e.target;
  } });
  return Z(Pi, n), () => {
    let { target: i, ...a } = e;
    return W({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Ii = Symbol("StackContext");
var pr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(pr || {});
function Hl() {
  return J(Ii, () => {
  });
}
function Vl({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Hl();
  function a(...o) {
    n == null || n(...o), i(...o);
  }
  k(() => {
    ct(t, (o, s) => {
      o ? a(0, e, r) : s === !0 && a(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), Oe(() => {
    t.value && a(1, e, r);
  }), Z(Ii, a);
}
let Ci = Symbol("DescriptionContext");
function Ul() {
  let e = J(Ci, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Wl({ slot: e = y({}), name: t = "Description", props: r = {} } = {}) {
  let n = y([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return Z(Ci, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Md = U({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ul(), i = `headlessui-description-${Le()}`;
  return k(() => Oe(n.register(i))), () => {
    let { name: a = "Description", slot: o = y({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return W({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
function kr() {
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
function zl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Gl = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gl || {});
let hr = Symbol("DialogContext");
function pt(e) {
  let t = J(hr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pt), r;
  }
  return t;
}
let Ot = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Di = U({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ot }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = y(!1);
  k(() => {
    o.value = !0;
  });
  let s = y(0), l = Mr(), u = C(() => e.open === Ot && l !== null ? K(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = y(/* @__PURE__ */ new Set()), f = y(null), p = y(null), d = C(() => Ge(f));
  if (i({ el: f, $el: f }), !(e.open !== Ot || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ot ? void 0 : e.open}`);
  let v = C(() => o.value && u.value ? 0 : 1), b = C(() => v.value === 0), w = C(() => s.value > 1), T = J(hr, null) !== null, A = C(() => w.value ? "parent" : "leaf");
  ql(f, C(() => w.value ? b.value : !1)), Vl({ type: "Dialog", enabled: C(() => v.value === 0), element: f, onUpdate: (g, S, $) => {
    if (S === "Dialog")
      return K(g, { [pr.Add]() {
        c.value.add($), s.value += 1;
      }, [pr.Remove]() {
        c.value.delete($), s.value -= 1;
      } });
  } });
  let P = Wl({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), E = `headlessui-dialog-${Le()}`, O = y(null), h = { titleId: O, panelRef: y(null), dialogState: v, setTitleId(g) {
    O.value !== g && (O.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(hr, h), Il(() => {
    var g, S, $;
    return [...Array.from((S = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(ue(p)) || h.panelRef.value && x.contains(h.panelRef.value))), ($ = h.panelRef.value) != null ? $ : f.value];
  }, (g, S) => {
    h.close(), at(() => S == null ? void 0 : S.focus());
  }, C(() => v.value === 0 && !w.value)), _i((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === Si.Escape && v.value === 0 && (w.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Q((g) => {
    var S;
    if (v.value !== 0 || T)
      return;
    let $ = d.value;
    if (!$)
      return;
    let x = kr();
    function _(F, R, L) {
      let q = F.style.getPropertyValue(R);
      return Object.assign(F.style, { [R]: L }), x.add(() => {
        Object.assign(F.style, { [R]: q });
      });
    }
    let D = $ == null ? void 0 : $.documentElement, j = ((S = $.defaultView) != null ? S : window).innerWidth - D.clientWidth;
    if (_(D, "overflow", "hidden"), j > 0) {
      let F = D.clientWidth - D.offsetWidth, R = j - F;
      _(D, "paddingRight", `${R}px`);
    }
    if (zl()) {
      x.addEventListener($, "touchmove", (R) => {
        R.preventDefault();
      }, { passive: !1 });
      let F = window.pageYOffset;
      x.add(() => window.scrollTo(0, F));
    }
    g(x.dispose);
  }), Q((g) => {
    if (v.value !== 0)
      return;
    let S = ue(f);
    if (!S)
      return;
    let $ = new IntersectionObserver((x) => {
      for (let _ of x)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && h.close();
    });
    $.observe(S), g(() => $.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": O.value, "aria-describedby": P.value }, { open: S, initialFocus: $, ...x } = e, _ = { open: v.value === 0 };
    return B(dr, { force: !0 }, () => [B(Ai, () => B(Nl, { target: f.value }, () => B(dr, { force: !1 }, () => B(Ze, { initialFocus: $, containers: c, features: b.value ? K(A.value, { parent: Ze.features.RestoreFocus, leaf: Ze.features.All & ~Ze.features.FocusLock }) : Ze.features.None }, () => W({ ourProps: g, theirProps: x, slot: _, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), B(cr, { features: It.Hidden, ref: p })]);
  };
} });
U({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogOverlay"), i = `headlessui-dialog-overlay-${Le()}`;
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => W({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
U({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Le()}`, o = y(null);
  return n({ el: o, $el: o }), k(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: a, ref: o, "aria-hidden": !0 };
    return B(dr, { force: !0 }, () => B(Ai, () => W({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let ji = U({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogPanel"), a = `headlessui-dialog-panel-${Le()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: a, ref: i.panelRef, onClick: o };
    return W({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
U({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogTitle"), i = `headlessui-dialog-title-${Le()}`;
  return k(() => {
    n.setTitleId(i), Oe(() => n.setTitleId(null));
  }), () => W({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Kl(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function rr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var vr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(vr || {});
function Xl(e, t) {
  let r = kr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function bn(e, t, r, n, i, a) {
  let o = kr(), s = a !== void 0 ? Kl(a) : () => {
  };
  return $t(e, ...i), rr(e, ...t, ...r), o.nextFrame(() => {
    $t(e, ...r), rr(e, ...n), o.add(Xl(e, (l) => ($t(e, ...n, ...t), rr(e, ...i), s(l))));
  }), o.add(() => $t(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function Ae(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Nr = Symbol("TransitionContext");
var Ql = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ql || {});
function Yl() {
  return J(Nr, null) !== null;
}
function Jl() {
  let e = J(Nr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Zl() {
  let e = J(Hr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Hr = Symbol("NestingContext");
function Nt(e) {
  return "children" in e ? Nt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Bi(e) {
  let t = y([]), r = y(!1);
  k(() => r.value = !0), Oe(() => r.value = !1);
  function n(a, o = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (K(o, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Nt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Fi = Pt.RenderStrategy, Ke = U({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Yl() && Ol())
    return () => B(Xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = y(null), o = y("visible"), s = C(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = Jl(), { register: c, unregister: f } = Zl(), p = { value: !0 }, d = Le(), v = { value: !1 }, b = Bi(() => {
    v.value || (o.value = "hidden", f(d), t("afterLeave"));
  });
  k(() => {
    let S = c(d);
    Oe(S);
  }), Q(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      K(o.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let w = Ae(e.enter), T = Ae(e.enterFrom), A = Ae(e.enterTo), P = Ae(e.entered), E = Ae(e.leave), O = Ae(e.leaveFrom), h = Ae(e.leaveTo);
  k(() => {
    Q(() => {
      if (o.value === "visible") {
        let S = ue(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(S) {
    let $ = p.value && !u.value, x = ue(a);
    !x || !(x instanceof HTMLElement) || $ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? bn(x, w, T, A, P, (_) => {
      v.value = !1, _ === vr.Finished && t("afterEnter");
    }) : bn(x, E, O, h, P, (_) => {
      v.value = !1, _ === vr.Finished && (Nt(b) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return k(() => {
    ct([l], (S, $, x) => {
      g(x), p.value = !1;
    }, { immediate: !0 });
  }), Z(Hr, b), $l(C(() => K(o.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: S, show: $, enter: x, enterFrom: _, enterTo: D, entered: j, leave: F, leaveFrom: R, leaveTo: L, ...q } = e;
    return W({ theirProps: q, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Fi, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), eu = Ke, Xe = U({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Mr(), a = C(() => e.show === null && i !== null ? K(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  Q(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = y(a.value ? "visible" : "hidden"), s = Bi(() => {
    o.value = "hidden";
  }), l = y(!0), u = { show: a, appear: C(() => e.appear || !l.value) };
  return k(() => {
    Q(() => {
      l.value = !1, a.value ? o.value = "visible" : Nt(s) || (o.value = "hidden");
    });
  }), Z(Hr, s), Z(Nr, u), () => {
    let c = wi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return W({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [B(eu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Fi, visible: o.value === "visible", name: "Transition" });
  };
} });
const tu = {
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
      Dialog: Di,
      DialogPanel: ji,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function Ri(e, t) {
  t = qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[dt(t[r++])];
  return r && r == n ? e : void 0;
}
function Vr(e, t, r) {
  var n = e == null ? void 0 : Ri(e, t);
  return n === void 0 ? r : n;
}
var ru = function() {
  try {
    var e = Re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const wn = ru;
function Li(e, t, r) {
  t == "__proto__" && wn ? wn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var nu = Object.prototype, iu = nu.hasOwnProperty;
function au(e, t, r) {
  var n = e[t];
  (!(iu.call(e, t) && Fr(n, r)) || r === void 0 && !(t in e)) && Li(e, t, r);
}
function ou(e, t, r, n) {
  if (!ee(e))
    return e;
  t = qr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = dt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ee(c) ? c : xr(t[i + 1]) ? [] : {});
    }
    au(s, l, u), s = s[l];
  }
  return e;
}
function qi(e, t, r) {
  return e == null ? e : ou(e, t, r);
}
const su = {
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
          return Vr(e.values, r);
        },
        set(t, r, n) {
          qi(e.values, r, n);
        }
      })
    );
  }
}, lu = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), zn(e).then((t) => {
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
}, uu = {
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
    return k(() => {
      r.value = (a) => {
        a.target === n.value || n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), ya(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, o) => (M(), le("div", {
      ref_key: "root",
      ref: n
    }, [
      ge(a.$slots, "default")
    ], 512));
  }
};
function G(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Be(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function z(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ur(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ce = Math.max, Ct = Math.min, Ve = Math.round;
function mr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Mi() {
  return !/^((?!chrome|android).)*safari/i.test(mr());
}
function Ue(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && z(e) && (i = e.offsetWidth > 0 && Ve(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ve(n.height) / e.offsetHeight || 1);
  var o = Be(e) ? G(e) : window, s = o.visualViewport, l = !Mi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
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
function Wr(e) {
  var t = G(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function cu(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function fu(e) {
  return e === G(e) || !z(e) ? Wr(e) : cu(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ee(e) {
  return ((Be(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zr(e) {
  return Ue(Ee(e)).left + Wr(e).scrollLeft;
}
function Y(e) {
  return G(e).getComputedStyle(e);
}
function Gr(e) {
  var t = Y(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function du(e) {
  var t = e.getBoundingClientRect(), r = Ve(t.width) / e.offsetWidth || 1, n = Ve(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function pu(e, t, r) {
  r === void 0 && (r = !1);
  var n = z(t), i = z(t) && du(t), a = Ee(t), o = Ue(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || Gr(a)) && (s = fu(t)), z(t) ? (l = Ue(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = zr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ki(e) {
  var t = Ue(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ht(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ur(e) ? e.host : null) || Ee(e);
}
function Ni(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : z(e) && Gr(e) ? e : Ni(Ht(e));
}
function it(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ni(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = G(n), o = i ? [a].concat(a.visualViewport || [], Gr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(it(Ht(o)));
}
function hu(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function Sn(e) {
  return !z(e) || Y(e).position === "fixed" ? null : e.offsetParent;
}
function vu(e) {
  var t = /firefox/i.test(mr()), r = /Trident/i.test(mr());
  if (r && z(e)) {
    var n = Y(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Ht(e);
  for (Ur(i) && (i = i.host); z(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var a = Y(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Vt(e) {
  for (var t = G(e), r = Sn(e); r && hu(r) && Y(r).position === "static"; )
    r = Sn(r);
  return r && (te(r) === "html" || te(r) === "body" && Y(r).position === "static") ? t : r || vu(e) || t;
}
var X = "top", re = "bottom", Se = "right", ae = "left", Ut = "auto", Wt = [X, re, Se, ae], We = "start", ut = "end", mu = "clippingParents", Hi = "viewport", et = "popper", gu = "reference", On = /* @__PURE__ */ Wt.reduce(function(e, t) {
  return e.concat([t + "-" + We, t + "-" + ut]);
}, []), yu = /* @__PURE__ */ [].concat(Wt, [Ut]).reduce(function(e, t) {
  return e.concat([t, t + "-" + We, t + "-" + ut]);
}, []), bu = "beforeRead", wu = "read", Su = "afterRead", Ou = "beforeMain", $u = "main", Eu = "afterMain", _u = "beforeWrite", xu = "write", Tu = "afterWrite", gr = [bu, wu, Su, Ou, $u, Eu, _u, xu, Tu];
function Au(e) {
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
function Pu(e) {
  var t = Au(e);
  return gr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Iu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function pe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var Pe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Cu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', $n = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Du(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), $n).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(pe(Pe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Pe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          gr.indexOf(t.phase) < 0 && console.error(pe(Pe, t.name, '"phase"', "either " + gr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Pe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Pe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Pe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Pe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + $n.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(pe(Cu, String(t.name), n, n));
      });
    });
  });
}
function ju(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function oe(e) {
  return e.split("-")[0];
}
function Bu(e) {
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
function Fu(e, t) {
  var r = G(e), n = Ee(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = Mi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + zr(e),
    y: l
  };
}
function Ru(e) {
  var t, r = Ee(e), n = Wr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ce(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Ce(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + zr(e), l = -n.scrollTop;
  return Y(i || r).direction === "rtl" && (s += Ce(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Lu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ur(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function yr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function qu(e, t) {
  var r = Ue(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function En(e, t, r) {
  return t === Hi ? yr(Fu(e, r)) : Be(t) ? qu(t, r) : yr(Ru(Ee(e)));
}
function Mu(e) {
  var t = it(Ht(e)), r = ["absolute", "fixed"].indexOf(Y(e).position) >= 0, n = r && z(e) ? Vt(e) : e;
  return Be(n) ? t.filter(function(i) {
    return Be(i) && Lu(i, n) && te(i) !== "body";
  }) : [];
}
function ku(e, t, r, n) {
  var i = t === "clippingParents" ? Mu(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = En(e, u, n);
    return l.top = Ce(c.top, l.top), l.right = Ct(c.right, l.right), l.bottom = Ct(c.bottom, l.bottom), l.left = Ce(c.left, l.left), l;
  }, En(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ze(e) {
  return e.split("-")[1];
}
function Vi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ui(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? oe(n) : null, a = n ? ze(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case X:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case re:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Se:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ae:
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
  var u = i ? Vi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case We:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ut:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Wi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Nu(e) {
  return Object.assign({}, Wi(), e);
}
function Hu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Kr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? mu : s, u = r.rootBoundary, c = u === void 0 ? Hi : u, f = r.elementContext, p = f === void 0 ? et : f, d = r.altBoundary, v = d === void 0 ? !1 : d, b = r.padding, w = b === void 0 ? 0 : b, T = Nu(typeof w != "number" ? w : Hu(w, Wt)), A = p === et ? gu : et, P = e.rects.popper, E = e.elements[v ? A : p], O = ku(Be(E) ? E : E.contextElement || Ee(e.elements.popper), l, c, o), h = Ue(e.elements.reference), g = Ui({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), S = yr(Object.assign({}, P, g)), $ = p === et ? S : h, x = {
    top: O.top - $.top + T.top,
    bottom: $.bottom - O.bottom + T.bottom,
    left: O.left - $.left + T.left,
    right: $.right - O.right + T.right
  }, _ = e.modifiersData.offset;
  if (p === et && _) {
    var D = _[i];
    Object.keys(x).forEach(function(j) {
      var F = [Se, re].indexOf(j) >= 0 ? 1 : -1, R = [X, re].indexOf(j) >= 0 ? "y" : "x";
      x[j] += D[R] * F;
    });
  }
  return x;
}
var _n = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", xn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Tn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Uu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? xn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xn, a),
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
          reference: Be(s) ? it(s) : s.contextElement ? it(s.contextElement) : [],
          popper: it(l)
        };
        var P = Pu(Bu([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = ju([].concat(P, c.options.modifiers), function(_) {
            var D = _.name;
            return D;
          });
          if (Du(E), oe(c.options.placement) === Ut) {
            var O = c.orderedModifiers.find(function(_) {
              var D = _.name;
              return D === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = Y(l), g = h.marginTop, S = h.marginRight, $ = h.marginBottom, x = h.marginLeft;
          [g, S, $, x].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var T = c.elements, A = T.reference, P = T.popper;
          if (!Tn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(_n);
            return;
          }
          c.rects = {
            reference: pu(A, Vt(P), c.options.strategy === "fixed"),
            popper: ki(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Vu);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var h = c.orderedModifiers[O], g = h.fn, S = h.options, $ = S === void 0 ? {} : S, x = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: $,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Iu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        b(), p = !0;
      }
    };
    if (!Tn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(_n), d;
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
var Et = {
  passive: !0
};
function Wu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = G(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Et);
  }), s && l.addEventListener("resize", r.update, Et), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Et);
    }), s && l.removeEventListener("resize", r.update, Et);
  };
}
const zu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wu,
  data: {}
};
function Gu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ui({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ku = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gu,
  data: {}
};
var Xu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Qu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Ve(t * i) / i || 0,
    y: Ve(r * i) / i || 0
  };
}
function An(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = o.x, d = p === void 0 ? 0 : p, v = o.y, b = v === void 0 ? 0 : v, w = typeof c == "function" ? c({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = w.x, b = w.y;
  var T = o.hasOwnProperty("x"), A = o.hasOwnProperty("y"), P = ae, E = X, O = window;
  if (u) {
    var h = Vt(r), g = "clientHeight", S = "clientWidth";
    if (h === G(r) && (h = Ee(r), Y(h).position !== "static" && s === "absolute" && (g = "scrollHeight", S = "scrollWidth")), h = h, i === X || (i === ae || i === Se) && a === ut) {
      E = re;
      var $ = f && h === O && O.visualViewport ? O.visualViewport.height : h[g];
      b -= $ - n.height, b *= l ? 1 : -1;
    }
    if (i === ae || (i === X || i === re) && a === ut) {
      P = Se;
      var x = f && h === O && O.visualViewport ? O.visualViewport.width : h[S];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: s
  }, u && Xu), D = c === !0 ? Qu({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  if (d = D.x, b = D.y, l) {
    var j;
    return Object.assign({}, _, (j = {}, j[E] = A ? "0" : "", j[P] = T ? "0" : "", j.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, _, (t = {}, t[E] = A ? b + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function Yu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = Y(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: oe(t.placement),
    variation: ze(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, An(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, An(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ju = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Yu,
  data: {}
};
function Zu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !z(a) || !te(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function ec(e) {
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
      !z(i) || !te(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const tc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zu,
  effect: ec,
  requires: ["computeStyles"]
};
var rc = [zu, Ku, Ju, tc], nc = /* @__PURE__ */ Uu({
  defaultModifiers: rc
});
function ic(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e, t, r) {
  return Ce(e, Ct(t, r));
}
function ac(e, t, r) {
  var n = Tt(e, t, r);
  return n > r ? r : n;
}
function oc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, b = v === void 0 ? 0 : v, w = Kr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = oe(t.placement), A = ze(t.placement), P = !A, E = Vi(T), O = ic(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, S = t.rects.popper, $ = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, x = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (a) {
      var j, F = E === "y" ? X : ae, R = E === "y" ? re : Se, L = E === "y" ? "height" : "width", q = h[E], mt = q + w[F], _e = q - w[R], gt = d ? -S[L] / 2 : 0, Gt = A === We ? g[L] : S[L], Qe = A === We ? -S[L] : -g[L], yt = t.elements.arrow, qe = d && yt ? ki(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wi(), Ye = de[F], bt = de[R], xe = Tt(0, g[L], qe[L]), Kt = P ? g[L] / 2 - gt - xe - Ye - x.mainAxis : Gt - xe - Ye - x.mainAxis, na = P ? -g[L] / 2 + gt + xe + bt + x.mainAxis : Qe + xe + bt + x.mainAxis, Xt = t.elements.arrow && Vt(t.elements.arrow), ia = Xt ? E === "y" ? Xt.clientTop || 0 : Xt.clientLeft || 0 : 0, Qr = (j = _ == null ? void 0 : _[E]) != null ? j : 0, aa = q + Kt - Qr - ia, oa = q + na - Qr, Yr = Tt(d ? Ct(mt, aa) : mt, q, d ? Ce(_e, oa) : _e);
      h[E] = Yr, D[E] = Yr - q;
    }
    if (s) {
      var Jr, sa = E === "x" ? X : ae, la = E === "x" ? re : Se, Te = h[O], wt = O === "y" ? "height" : "width", Zr = Te + w[sa], en = Te - w[la], Qt = [X, ae].indexOf(T) !== -1, tn = (Jr = _ == null ? void 0 : _[O]) != null ? Jr : 0, rn = Qt ? Zr : Te - g[wt] - S[wt] - tn + x.altAxis, nn = Qt ? Te + g[wt] + S[wt] - tn - x.altAxis : en, an = d && Qt ? ac(rn, Te, nn) : Tt(d ? rn : Zr, Te, d ? nn : en);
      h[O] = an, D[O] = an - Te;
    }
    t.modifiersData[n] = D;
  }
}
const sc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: oc,
  requiresIfExists: ["offset"]
};
var lc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function At(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return lc[t];
  });
}
var uc = {
  start: "end",
  end: "start"
};
function Pn(e) {
  return e.replace(/start|end/g, function(t) {
    return uc[t];
  });
}
function cc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? yu : l, c = ze(n), f = c ? s ? On : On.filter(function(v) {
    return ze(v) === c;
  }) : Wt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, b) {
    return v[b] = Kr(e, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[oe(b)], v;
  }, {});
  return Object.keys(d).sort(function(v, b) {
    return d[v] - d[b];
  });
}
function fc(e) {
  if (oe(e) === Ut)
    return [];
  var t = At(e);
  return [Pn(e), t, Pn(t)];
}
function dc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, b = r.allowedAutoPlacements, w = t.options.placement, T = oe(w), A = T === w, P = l || (A || !v ? [At(w)] : fc(w)), E = [w].concat(P).reduce(function(qe, de) {
      return qe.concat(oe(de) === Ut ? cc(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : de);
    }, []), O = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), S = !0, $ = E[0], x = 0; x < E.length; x++) {
      var _ = E[x], D = oe(_), j = ze(_) === We, F = [X, re].indexOf(D) >= 0, R = F ? "width" : "height", L = Kr(t, {
        placement: _,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), q = F ? j ? Se : ae : j ? re : X;
      O[R] > h[R] && (q = At(q));
      var mt = At(q), _e = [];
      if (a && _e.push(L[D] <= 0), s && _e.push(L[q] <= 0, L[mt] <= 0), _e.every(function(qe) {
        return qe;
      })) {
        $ = _, S = !1;
        break;
      }
      g.set(_, _e);
    }
    if (S)
      for (var gt = v ? 3 : 1, Gt = function(de) {
        var Ye = E.find(function(bt) {
          var xe = g.get(bt);
          if (xe)
            return xe.slice(0, de).every(function(Kt) {
              return Kt;
            });
        });
        if (Ye)
          return $ = Ye, "break";
      }, Qe = gt; Qe > 0; Qe--) {
        var yt = Gt(Qe);
        if (yt === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const pc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: dc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ht = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, hc = {
  components: {
    OnClickOutside: uu
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
    this.popper = nc(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [pc, sc]
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
}, vc = { ref: "button" }, mc = { ref: "tooltip" };
function gc(e, t, r, n, i, a) {
  const o = ba("OnClickOutside");
  return M(), ke(o, {
    class: "relative",
    do: a.hide,
    opened: i.opened
  }, {
    default: Gn(() => [
      ar("div", vc, [
        ge(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 512),
      ar("div", mc, [
        ge(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["do", "opened"]);
}
const yc = /* @__PURE__ */ ht(hc, [["render", gc]]);
function zi(e) {
  return e && e.length ? e[0] : void 0;
}
const bc = {
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
        return V(e.values, t);
      },
      first(t) {
        return zi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, wc = {
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
        Ne(r, (u) => {
          !ee(u) || (n in u && (o = u[n]), i in u && (s = u[i]), a in u && l.push(u));
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
}, Sc = {
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
}, Oc = { ref: "file" };
function $c(e, t, r, n, i, a) {
  return M(), le("div", Oc, [
    ge(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Ec = /* @__PURE__ */ ht(Sc, [["render", $c]]), _c = {
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
        return V(e.values, t);
      },
      ...this.values
    });
  }
};
function Gi(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && Xi(t, Ki(r, n), e[n]);
  return t;
}
function Ki(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Xi(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Xi(e, Ki(t, n.toString()), r[n]));
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
  Gi(r, e, t);
}
var xc = "[object Boolean]";
function Qi(e) {
  return e === !0 || e === !1 || be(e) && $e(e) == xc;
}
function Tc() {
  this.__data__ = new ce(), this.size = 0;
}
function Ac(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Pc(e) {
  return this.__data__.get(e);
}
function Ic(e) {
  return this.__data__.has(e);
}
var Cc = 200;
function Dc(e, t) {
  var r = this.__data__;
  if (r instanceof ce) {
    var n = r.__data__;
    if (!st || n.length < Cc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function se(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
se.prototype.clear = Tc;
se.prototype.delete = Ac;
se.prototype.get = Pc;
se.prototype.has = Ic;
se.prototype.set = Dc;
var jc = "__lodash_hash_undefined__";
function Bc(e) {
  return this.__data__.set(e, jc), this;
}
function Fc(e) {
  return this.__data__.has(e);
}
function Dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < r; )
    this.add(e[t]);
}
Dt.prototype.add = Dt.prototype.push = Bc;
Dt.prototype.has = Fc;
function Rc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Lc(e, t) {
  return e.has(t);
}
var qc = 1, Mc = 2;
function Yi(e, t, r, n, i, a) {
  var o = r & qc, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Mc ? new Dt() : void 0;
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
      if (!Rc(t, function(T, A) {
        if (!Lc(d, A) && (v === T || i(v, T, r, n, a)))
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
var kc = ne.Uint8Array;
const In = kc;
function Nc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Hc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Vc = 1, Uc = 2, Wc = "[object Boolean]", zc = "[object Date]", Gc = "[object Error]", Kc = "[object Map]", Xc = "[object Number]", Qc = "[object RegExp]", Yc = "[object Set]", Jc = "[object String]", Zc = "[object Symbol]", ef = "[object ArrayBuffer]", tf = "[object DataView]", Cn = ye ? ye.prototype : void 0, nr = Cn ? Cn.valueOf : void 0;
function rf(e, t, r, n, i, a, o) {
  switch (r) {
    case tf:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ef:
      return !(e.byteLength != t.byteLength || !a(new In(e), new In(t)));
    case Wc:
    case zc:
    case Xc:
      return Fr(+e, +t);
    case Gc:
      return e.name == t.name && e.message == t.message;
    case Qc:
    case Jc:
      return e == t + "";
    case Kc:
      var s = Nc;
    case Yc:
      var l = n & Vc;
      if (s || (s = Hc), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= Uc, o.set(e, t);
      var c = Yi(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case Zc:
      if (nr)
        return nr.call(e) == nr.call(t);
  }
  return !1;
}
function nf(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function af(e, t, r) {
  var n = t(e);
  return N(e) ? n : nf(n, r(e));
}
function Ji(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function of() {
  return [];
}
var sf = Object.prototype, lf = sf.propertyIsEnumerable, Dn = Object.getOwnPropertySymbols, uf = Dn ? function(e) {
  return e == null ? [] : (e = Object(e), Ji(Dn(e), function(t) {
    return lf.call(e, t);
  }));
} : of;
const cf = uf;
function jn(e) {
  return af(e, Bt, cf);
}
var ff = 1, df = Object.prototype, pf = df.hasOwnProperty;
function hf(e, t, r, n, i, a) {
  var o = r & ff, s = jn(e), l = s.length, u = jn(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : pf.call(t, p)))
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
var vf = Re(ne, "DataView");
const br = vf;
var mf = Re(ne, "Promise");
const wr = mf;
var gf = Re(ne, "Set");
const Sr = gf;
var yf = Re(ne, "WeakMap");
const Or = yf;
var Bn = "[object Map]", bf = "[object Object]", Fn = "[object Promise]", Rn = "[object Set]", Ln = "[object WeakMap]", qn = "[object DataView]", wf = Fe(br), Sf = Fe(st), Of = Fe(wr), $f = Fe(Sr), Ef = Fe(Or), Ie = $e;
(br && Ie(new br(new ArrayBuffer(1))) != qn || st && Ie(new st()) != Bn || wr && Ie(wr.resolve()) != Fn || Sr && Ie(new Sr()) != Rn || Or && Ie(new Or()) != Ln) && (Ie = function(e) {
  var t = $e(e), r = t == bf ? e.constructor : void 0, n = r ? Fe(r) : "";
  if (n)
    switch (n) {
      case wf:
        return qn;
      case Sf:
        return Bn;
      case Of:
        return Fn;
      case $f:
        return Rn;
      case Ef:
        return Ln;
    }
  return t;
});
const Mn = Ie;
var _f = 1, kn = "[object Arguments]", Nn = "[object Array]", _t = "[object Object]", xf = Object.prototype, Hn = xf.hasOwnProperty;
function Tf(e, t, r, n, i, a) {
  var o = N(e), s = N(t), l = o ? Nn : Mn(e), u = s ? Nn : Mn(t);
  l = l == kn ? _t : l, u = u == kn ? _t : u;
  var c = l == _t, f = u == _t, p = l == u;
  if (p && or(e)) {
    if (!or(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new se()), o || ei(e) ? Yi(e, t, r, n, i, a) : rf(e, t, l, r, n, i, a);
  if (!(r & _f)) {
    var d = c && Hn.call(e, "__wrapped__"), v = f && Hn.call(t, "__wrapped__");
    if (d || v) {
      var b = d ? e.value() : e, w = v ? t.value() : t;
      return a || (a = new se()), i(b, w, r, n, a);
    }
  }
  return p ? (a || (a = new se()), hf(e, t, r, n, i, a)) : !1;
}
function zt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : Tf(e, t, r, n, zt, i);
}
var Af = 1, Pf = 2;
function If(e, t, r, n) {
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
      var f = new se();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? zt(c, u, Af | Pf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Zi(e) {
  return e === e && !ee(e);
}
function Cf(e) {
  for (var t = Bt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Zi(i)];
  }
  return t;
}
function ea(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Df(e) {
  var t = Cf(e);
  return t.length == 1 && t[0][2] ? ea(t[0][0], t[0][1]) : function(r) {
    return r === e || If(r, e, t);
  };
}
function jf(e, t) {
  return e != null && t in Object(e);
}
function Bf(e, t) {
  return e != null && yi(e, t, jf);
}
var Ff = 1, Rf = 2;
function Lf(e, t) {
  return Br(e) && Zi(t) ? ea(dt(e), t) : function(r) {
    var n = Vr(r, e);
    return n === void 0 && n === t ? Bf(r, e) : zt(t, n, Ff | Rf);
  };
}
function qf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Mf(e) {
  return function(t) {
    return Ri(t, e);
  };
}
function kf(e) {
  return Br(e) ? qf(dt(e)) : Mf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? ri : typeof e == "object" ? N(e) ? Lf(e[0], e[1]) : Df(e) : kf(e);
}
function ta(e, t) {
  var r = {};
  return t = vt(t), Ar(e, function(n, i, a) {
    Li(r, i, t(n, i, a));
  }), r;
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
      return ta(this.rawErrors, (e) => e.join(`
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
      return V(this.errors, e);
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return qi(this.values, e, t);
    },
    submit(e) {
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        Qi(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton
      ).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    request() {
      this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : Gi(this.values), t = { Accept: "application/json" };
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
            ].includes(r) ? e[r] : (V(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Vr(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Hf = {
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
}, Vf = { ref: "input" };
function Uf(e, t, r, n, i, a) {
  return M(), le("div", Vf, [
    ge(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Wf = /* @__PURE__ */ ht(Hf, [["render", Uf]]), zf = ["href", "onClick"], Gf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !0
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
        Qi(t.confirm) ? "" : t.confirm,
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
      m.visit(t.href);
    }
    return (i, a) => (M(), le("a", {
      href: e.href,
      onClick: wa(r, ["prevent"])
    }, [
      ge(i.$slots, "default")
    ], 8, zf));
  }
}, Kf = {
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
      Dialog: Di,
      DialogPanel: ji,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function Xf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!jt(t)) {
      var a = vt(r);
      t = Bt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
function Qf(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Yf = /\s/;
function Jf(e) {
  for (var t = e.length; t-- && Yf.test(e.charAt(t)); )
    ;
  return t;
}
var Zf = /^\s+/;
function ed(e) {
  return e && e.slice(0, Jf(e) + 1).replace(Zf, "");
}
var Vn = 0 / 0, td = /^[-+]0x[0-9a-f]+$/i, rd = /^0b[01]+$/i, nd = /^0o[0-7]+$/i, id = parseInt;
function $r(e) {
  if (typeof e == "number")
    return e;
  if (Rt(e))
    return Vn;
  if (ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ed(e);
  var r = rd.test(e);
  return r || nd.test(e) ? id(e.slice(2), r ? 2 : 8) : td.test(e) ? Vn : +e;
}
var Un = 1 / 0, ad = 17976931348623157e292;
function od(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = $r(e), e === Un || e === -Un) {
    var t = e < 0 ? -1 : 1;
    return t * ad;
  }
  return e === e ? e : 0;
}
function Xr(e) {
  var t = od(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var sd = Math.max;
function ld(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Xr(r);
  return i < 0 && (i = sd(n + i, 0)), Qf(e, vt(t), i);
}
var ud = Xf(ld);
const cd = ud, fd = {
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
      return cd(this.choicesInstance._store.choices, (t) => t.value == e);
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
}, dd = { ref: "select" };
function pd(e, t, r, n, i, a) {
  return M(), le("div", dd, [
    ge(e.$slots, "default")
  ], 512);
}
const hd = /* @__PURE__ */ ht(fd, [["render", pd]]), vd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = ta(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return V(e, i);
      },
      hasFlash(i) {
        return V(t, i);
      },
      hasShared(i) {
        return V(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
var md = function() {
  return ne.Date.now();
};
const ir = md;
var gd = "Expected a function", yd = Math.max, bd = Math.min;
function wd(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(gd);
  t = $r(t) || 0, ee(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? yd($r(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, S = i;
    return n = i = void 0, u = h, o = e.apply(S, g), o;
  }
  function v(h) {
    return u = h, s = setTimeout(T, t), c ? d(h) : o;
  }
  function b(h) {
    var g = h - l, S = h - u, $ = t - g;
    return f ? bd($, a - S) : $;
  }
  function w(h) {
    var g = h - l, S = h - u;
    return l === void 0 || g >= t || g < 0 || f && S >= a;
  }
  function T() {
    var h = ir();
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
    return s === void 0 ? o : A(ir());
  }
  function O() {
    var h = ir(), g = w(h);
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
function ra(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Sd(e, t, r) {
  e = Lr(e), t = Mt(t);
  var n = e.length;
  r = r === void 0 ? n : ra(Xr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Od(e, t) {
  var r = [];
  return Pr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function $d(e, t) {
  var r = N(e) ? Ji : Od;
  return r(e, vt(t));
}
function Wn(e, t) {
  return zt(e, t);
}
function Ed(e, t) {
  var r = -1, n = jt(e) ? Array(e.length) : [];
  return Pr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function _d(e, t) {
  var r = N(e) ? gi : Ed;
  return r(e, vt(t));
}
function xt(e, t, r) {
  return e = Lr(e), r = r == null ? 0 : ra(Xr(r), 0, e.length), t = Mt(t), e.slice(r, r + t.length) == t;
}
const xd = {
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
      return !Wn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Ne(e, (r, n) => {
      if (xt(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Ne(e, (t, r) => {
        xt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = $d(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = _d(r, (i) => i.key).sort();
      Wn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], at(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: wd(function(e, t, r) {
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
        if (!Sd(i, "]")) {
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
      i[e] = t, (xt(e, "perPage") || xt(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Ne(e, (o, s) => {
        if (!N(o)) {
          n[s] = o;
          return;
        }
        o.length !== 0 && o.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      Ne(n, (o, s) => {
        o === null || o === [] || (i && (i += "&"), i += `${s}=${o}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      m.replace(a).then(() => {
        typeof t < "u" && t && at(() => {
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
}, Td = {
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
        at(() => e.default.update(this.element));
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
}, Ad = { ref: "textarea" };
function Pd(e, t, r, n, i, a) {
  return M(), le("div", Ad, [
    ge(e.$slots, "default")
  ], 512);
}
const Id = /* @__PURE__ */ ht(Td, [["render", Pd]]), Cd = {
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
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, Dd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], jd = {
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
      positions: Dd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: rt,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, Bd = {
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
            if (n.length === 1 && zi(n) === "default") {
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
}, Fd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, Er = {
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
    Er.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Er.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, kd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = V(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = V(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = V(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = V(t, "link_component") ? t.link_component : "Link", t.progress_bar = V(t, "progress_bar") ? t.progress_bar : !1;
    const r = t.prefix;
    if (e.component(`${r}Confirm`, tu).component(`${r}Data`, su).component(`${r}Defer`, lu).component(`${r}Dropdown`, yc).component(`${r}Errors`, bc).component(`${r}Event`, wc).component(`${r}File`, Ec).component(`${r}Flash`, _c).component(`${r}Form`, Nf).component(`${r}Input`, Wf).component(`${r}Modal`, Kf).component(`${r}Render`, rt).component(`${r}Select`, hd).component(`${r}State`, vd).component(`${r}Table`, xd).component(`${r}Textarea`, Id).component(`${r}Toast`, Cd).component(`${r}Toasts`, jd).component(`${r}Toggle`, Bd).component(`${r}Transition`, Fd).component(t.link_component, Gf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ee(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        V(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Er.init(t.progress_bar);
    }
  }
};
function Nd(e, t, r) {
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
  gs as SpladeApp,
  kd as SpladePlugin,
  qd as renderSpladeApp,
  Nd as startServer
};
