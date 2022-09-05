import Wn from "axios";
import { ref as S, computed as I, watch as ot, openBlock as R, createBlock as Me, unref as ve, h as F, onMounted as M, createElementBlock as le, createElementVNode as nr, provide as J, inject as Q, nextTick as at, resolveDynamicComponent as uo, KeepAlive as co, withCtx as zn, normalizeStyle as fo, createVNode as po, Fragment as _r, renderList as ho, createCommentVNode as vo, cloneVNode as mo, watchEffect as Z, defineComponent as H, onUnmounted as ze, Teleport as go, reactive as yo, onBeforeUnmount as bo, renderSlot as ge, resolveComponent as wo, withModifiers as So } from "vue";
function Oo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function $o(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var Eo = $o();
const _o = Eo;
function xo(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var To = typeof global == "object" && global && global.Object === Object && global;
const Gn = To;
var Ao = typeof self == "object" && self && self.Object === Object && self, Po = Gn || Ao || Function("return this")();
const ne = Po;
var Co = ne.Symbol;
const ye = Co;
var Kn = Object.prototype, Io = Kn.hasOwnProperty, Do = Kn.toString, Je = ye ? ye.toStringTag : void 0;
function jo(e) {
  var t = Io.call(e, Je), r = e[Je];
  try {
    e[Je] = void 0;
    var n = !0;
  } catch {
  }
  var i = Do.call(e);
  return n && (t ? e[Je] = r : delete e[Je]), i;
}
var Fo = Object.prototype, Bo = Fo.toString;
function Ro(e) {
  return Bo.call(e);
}
var qo = "[object Null]", Lo = "[object Undefined]", on = ye ? ye.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? Lo : qo : on && on in Object(e) ? jo(e) : Ro(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var Mo = "[object Arguments]";
function an(e) {
  return be(e) && Oe(e) == Mo;
}
var Xn = Object.prototype, ko = Xn.hasOwnProperty, No = Xn.propertyIsEnumerable, Ho = an(function() {
  return arguments;
}()) ? an : function(e) {
  return be(e) && ko.call(e, "callee") && !No.call(e, "callee");
};
const Qn = Ho;
var Vo = Array.isArray;
const q = Vo;
function Uo() {
  return !1;
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, sn = Yn && typeof module == "object" && module && !module.nodeType && module, Wo = sn && sn.exports === Yn, ln = Wo ? ne.Buffer : void 0, zo = ln ? ln.isBuffer : void 0, Go = zo || Uo;
const ir = Go;
var Ko = 9007199254740991, Xo = /^(?:0|[1-9]\d*)$/;
function xr(e, t) {
  var r = typeof e;
  return t = t == null ? Ko : t, !!t && (r == "number" || r != "symbol" && Xo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Qo = 9007199254740991;
function Tr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qo;
}
var Yo = "[object Arguments]", Jo = "[object Array]", Zo = "[object Boolean]", ea = "[object Date]", ta = "[object Error]", ra = "[object Function]", na = "[object Map]", ia = "[object Number]", oa = "[object Object]", aa = "[object RegExp]", sa = "[object Set]", la = "[object String]", ua = "[object WeakMap]", ca = "[object ArrayBuffer]", fa = "[object DataView]", da = "[object Float32Array]", pa = "[object Float64Array]", ha = "[object Int8Array]", va = "[object Int16Array]", ma = "[object Int32Array]", ga = "[object Uint8Array]", ya = "[object Uint8ClampedArray]", ba = "[object Uint16Array]", wa = "[object Uint32Array]", C = {};
C[da] = C[pa] = C[ha] = C[va] = C[ma] = C[ga] = C[ya] = C[ba] = C[wa] = !0;
C[Yo] = C[Jo] = C[ca] = C[Zo] = C[fa] = C[ea] = C[ta] = C[ra] = C[na] = C[ia] = C[oa] = C[aa] = C[sa] = C[la] = C[ua] = !1;
function Sa(e) {
  return be(e) && Tr(e.length) && !!C[Oe(e)];
}
function Oa(e) {
  return function(t) {
    return e(t);
  };
}
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports, tt = Jn && typeof module == "object" && module && !module.nodeType && module, $a = tt && tt.exports === Jn, Qt = $a && Gn.process, Ea = function() {
  try {
    var e = tt && tt.require && tt.require("util").types;
    return e || Qt && Qt.binding && Qt.binding("util");
  } catch {
  }
}();
const un = Ea;
var cn = un && un.isTypedArray, _a = cn ? Oa(cn) : Sa;
const Zn = _a;
var xa = Object.prototype, Ta = xa.hasOwnProperty;
function Aa(e, t) {
  var r = q(e), n = !r && Qn(e), i = !r && !n && ir(e), o = !r && !n && !i && Zn(e), a = r || n || i || o, s = a ? xo(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Ta.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || xr(u, l))) && s.push(u);
  return s;
}
var Pa = Object.prototype;
function Ca(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Pa;
  return e === r;
}
function Ia(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Da = Ia(Object.keys, Object);
const ja = Da;
var Fa = Object.prototype, Ba = Fa.hasOwnProperty;
function Ra(e) {
  if (!Ca(e))
    return ja(e);
  var t = [];
  for (var r in Object(e))
    Ba.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qa = "[object AsyncFunction]", La = "[object Function]", Ma = "[object GeneratorFunction]", ka = "[object Proxy]";
function ei(e) {
  if (!ee(e))
    return !1;
  var t = Oe(e);
  return t == La || t == Ma || t == qa || t == ka;
}
function jt(e) {
  return e != null && Tr(e.length) && !ei(e);
}
function Ft(e) {
  return jt(e) ? Aa(e) : Ra(e);
}
function Ar(e, t) {
  return e && _o(e, t, Ft);
}
function Na(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!jt(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Ha = Na(Ar);
const Pr = Ha;
function ti(e) {
  return e;
}
function ri(e) {
  return typeof e == "function" ? e : ti;
}
function Va(e, t) {
  var r = q(e) ? Oo : Pr;
  return r(e, ri(t));
}
var Ua = Array.prototype, Wa = Ua.reverse;
function za(e) {
  return e == null ? e : Wa.call(e);
}
const or = S(1), we = typeof window > "u";
function Ga(e, t) {
  we || window.addEventListener("popstate", Ka.bind(this)), Dr(t), Bt(t.head), jr(e);
  const r = we ? "" : location.href, n = Cr(
    r,
    t.head,
    e,
    {},
    or.value
  );
  ni(n);
}
function Ka(e) {
  !e.state || (L.value = e.state, ie.value = 0, Bt(L.value.head), jr(L.value.html, L.value.rememberedState.scrollY));
}
function Cr(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return L.value = o, o;
}
function Xa(e) {
  we || window.history.pushState(e, "", e.url);
}
function Qa(e) {
  const t = Cr(
    e,
    JSON.parse(JSON.stringify(L.value.head)),
    L.value.html,
    { ...L.value.rememberedState },
    L.value.pageVisitId
  );
  we || window.history.replaceState(t, "", t.url);
}
function ni(e) {
  we || window.history.replaceState(e, "", e.url);
}
const L = S({}), fn = S(0);
function Ya(e, t) {
  fn.value++;
  const r = e.request.responseURL;
  e.data.splade.modal && ie.value++, Dr(e.data.splade), Bt(e.data.splade.head);
  const n = r === L.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return ls(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  ie.value = 0;
  let i = e.data.html;
  t ? i += `<!-- ${fn.value} -->` : or.value++, jr(i, 0);
  const o = Cr(
    r,
    e.data.splade.head,
    i,
    L.value.rememberedState ? { ...L.value.rememberedState } : {},
    or.value
  );
  t ? ni(o) : Xa(o);
}
const ie = S(0);
function Ja() {
  ie.value--, Bt(es(ie.value));
}
const ii = S({}), oi = S({}), ai = (e) => oi.value[e], Za = (e) => Object.keys(ai.value[e]).length > 0, si = S({}), es = (e) => si.value[e], li = S({}), ts = (e) => li.value[e], Ne = S([]), rs = I(() => za(Ne.value));
function ns(e) {
  Ne.value.push(e);
}
function is(e) {
  Ne.value[e].dismissed = !0, Ne.value[e].html = null;
}
const Ir = S(null);
function os(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return Ir.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function as() {
  Ir.value = null;
}
function Dr(e) {
  ii.value = e.shared ? e.shared : {}, li.value[ie.value] = e.flash ? e.flash : {}, si.value[ie.value] = e.head ? e.head : {}, Va(e.toasts ? e.toasts : [], (t) => {
    Ne.value.push(t);
  }), oi.value[ie.value] = e.errors ? e.errors : {};
}
function ss(e) {
  vi.value(e);
}
function Bt(e) {
  di.value(e);
}
function jr(e, t) {
  pi.value(e, t);
}
function ls(e, t) {
  hi.value(e, t);
}
const ui = S({});
function ci(e, t, r) {
  ui.value[e] = t, r && us(e, t);
}
function us(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function cs(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ui.value[e];
}
function St(e, t) {
  we || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function ft(e, t, r, n, i) {
  we || ci("scrollY", window.scrollY), St("request", { url: e, method: t, data: r, headers: n, replace: i });
  const o = Wn({
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
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), St("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return o.then((a) => {
    Ya(a, i), St("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    St("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a });
    const s = a.response.data.splade;
    s && Dr(s), a.response.status != 422 && ss(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
}
function fi(e) {
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
  return fi(L.value.url);
}
const di = S(() => {
}), pi = S(() => {
}), hi = S(() => {
}), vi = S(() => {
}), m = {
  init: Ga,
  replace: fi,
  visit: fs,
  modal: ds,
  slideover: ps,
  refresh: hs,
  request: ft,
  replaceUrlOfCurrentPage: Qa,
  setOnHead(e) {
    di.value = e;
  },
  setOnHtml(e) {
    pi.value = e;
  },
  setOnModal(e) {
    hi.value = e;
  },
  setOnServerError(e) {
    vi.value = e;
  },
  hasValidationErrors: Za,
  validationErrors: ai,
  sharedData: ii,
  flashData: ts,
  toasts: Ne,
  toastsReversed: rs,
  confirmModal: Ir,
  confirm: os,
  clearConfirmModal: as,
  pushToast: ns,
  dismissToast: is,
  restore: cs,
  remember: ci,
  popStack: Ja,
  currentStack: ie,
  pageVisitId: I(() => L.value.pageVisitId),
  isSsr: we
};
function ke(e, t) {
  return e && Ar(e, ri(t));
}
var vs = "[object String]";
function Yt(e) {
  return typeof e == "string" || !q(e) && be(e) && Oe(e) == vs;
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
    const t = e, r = S(null);
    function n() {
      r.value = F({
        template: t.html
      });
    }
    return ot(() => t.html, n, { immediate: !0 }), (i, o) => (R(), Me(ve(r)));
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
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    const i = S(null);
    function o() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = i.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(s) {
      s.keyCode === 27 && n();
    }
    return M(() => o()), (s, l) => (R(), le("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      nr("iframe", {
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
          const t = Yt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Yt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Yt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    J("stack", 0);
    const r = S(), n = S([]), i = S(null), o = I(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function a() {
      i.value = null;
    }
    function s(f) {
      n[f] = null, m.popStack();
    }
    const l = Q("$spladeOptions") || {};
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      ke(f, (d, v) => {
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (R(), le("div", null, [
      (R(), Me(uo(ve(m).isSsr ? "div" : co), {
        max: ve(l).max_keep_alive
      }, {
        default: zn(() => [
          (R(), Me(rt, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: fo(ve(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      po(rt, { html: e.components }, null, 8, ["html"]),
      (R(!0), le(_r, null, ho(ve(m).currentStack.value, (d) => (R(), Me(rt, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": ve(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (R(), Me(ms, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : vo("", !0)
    ]));
  }
};
function Bd(e) {
  return () => F(gs, e);
}
var ys = Object.prototype, bs = ys.hasOwnProperty;
function ws(e, t) {
  return e != null && bs.call(e, t);
}
var Ss = "[object Symbol]";
function Rt(e) {
  return typeof e == "symbol" || be(e) && Oe(e) == Ss;
}
var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $s = /^\w*$/;
function Fr(e, t) {
  if (q(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : $s.test(e) || !Os.test(e) || t != null && e in Object(t);
}
var Es = ne["__core-js_shared__"];
const Jt = Es;
var dn = function() {
  var e = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _s(e) {
  return !!dn && dn in e;
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
var As = /[\\^$.*+?()[\]{}|]/g, Ps = /^\[object .+?Constructor\]$/, Cs = Function.prototype, Is = Object.prototype, Ds = Cs.toString, js = Is.hasOwnProperty, Fs = RegExp(
  "^" + Ds.call(js).replace(As, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bs(e) {
  if (!ee(e) || _s(e))
    return !1;
  var t = ei(e) ? Fs : Ps;
  return t.test(Fe(e));
}
function Rs(e, t) {
  return e == null ? void 0 : e[t];
}
function Be(e, t) {
  var r = Rs(e, t);
  return Bs(r) ? r : void 0;
}
var qs = Be(Object, "create");
const st = qs;
function Ls() {
  this.__data__ = st ? st(null) : {}, this.size = 0;
}
function Ms(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ks = "__lodash_hash_undefined__", Ns = Object.prototype, Hs = Ns.hasOwnProperty;
function Vs(e) {
  var t = this.__data__;
  if (st) {
    var r = t[e];
    return r === ks ? void 0 : r;
  }
  return Hs.call(t, e) ? t[e] : void 0;
}
var Us = Object.prototype, Ws = Us.hasOwnProperty;
function zs(e) {
  var t = this.__data__;
  return st ? t[e] !== void 0 : Ws.call(t, e);
}
var Gs = "__lodash_hash_undefined__";
function Ks(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = st && t === void 0 ? Gs : t, this;
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ie.prototype.clear = Ls;
Ie.prototype.delete = Ms;
Ie.prototype.get = Vs;
Ie.prototype.has = zs;
Ie.prototype.set = Ks;
function Xs() {
  this.__data__ = [], this.size = 0;
}
function Br(e, t) {
  return e === t || e !== e && t !== t;
}
function qt(e, t) {
  for (var r = e.length; r--; )
    if (Br(e[r][0], t))
      return r;
  return -1;
}
var Qs = Array.prototype, Ys = Qs.splice;
function Js(e) {
  var t = this.__data__, r = qt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
}
function Zs(e) {
  var t = this.__data__, r = qt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function el(e) {
  return qt(this.__data__, e) > -1;
}
function tl(e, t) {
  var r = this.__data__, n = qt(r, e);
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
var rl = Be(ne, "Map");
const lt = rl;
function nl() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (lt || ce)(),
    string: new Ie()
  };
}
function il(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Lt(e, t) {
  var r = e.__data__;
  return il(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ol(e) {
  var t = Lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function al(e) {
  return Lt(this, e).get(e);
}
function sl(e) {
  return Lt(this, e).has(e);
}
function ll(e, t) {
  var r = Lt(this, e), n = r.size;
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
fe.prototype.delete = ol;
fe.prototype.get = al;
fe.prototype.has = sl;
fe.prototype.set = ll;
var ul = "Expected a function";
function Rr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ul);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
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
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(dl, function(r, n, i, o) {
    t.push(i ? o.replace(pl, "$1") : n || r);
  }), t;
});
const vl = hl;
function mi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ml = 1 / 0, pn = ye ? ye.prototype : void 0, hn = pn ? pn.toString : void 0;
function Mt(e) {
  if (typeof e == "string")
    return e;
  if (q(e))
    return mi(e, Mt) + "";
  if (Rt(e))
    return hn ? hn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ml ? "-0" : t;
}
function qr(e) {
  return e == null ? "" : Mt(e);
}
function Lr(e, t) {
  return q(e) ? e : Fr(e, t) ? [e] : vl(qr(e));
}
var gl = 1 / 0;
function dt(e) {
  if (typeof e == "string" || Rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gl ? "-0" : t;
}
function gi(e, t, r) {
  t = Lr(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = dt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Tr(i) && xr(a, i) && (q(e) || Qn(e)));
}
function N(e, t) {
  return e != null && gi(e, t, ws);
}
function G(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, G), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function V({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = yl(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return Zt(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return G(l, { [0]() {
      return null;
    }, [1]() {
      return Zt({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Zt(s);
}
function Zt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = bi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (a === "template") {
    if (l = yi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!bl(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return mo(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return F(a, Object.assign({}, s, u), l);
}
function yi(e) {
  return e.flatMap((t) => t.type === _r ? yi(t.children) : [t]);
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
    Object.assign(t, { [n](i, ...o) {
      let a = r[n];
      for (let s of a) {
        if (i != null && i.defaultPrevented)
          return;
        s(i, ...o);
      }
    } });
  return t;
}
function bi(e, t = []) {
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
function Re() {
  return Sl();
}
var wi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(wi || {});
function ue(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Si = Symbol("Context");
var De = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(De || {});
function Ol() {
  return Mr() !== null;
}
function Mr() {
  return Q(Si, null);
}
function $l(e) {
  J(Si, e);
}
function Ge(e) {
  if (typeof window > "u")
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
let ar = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ut = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ut || {}), Oi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Oi || {}), El = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(El || {});
function _l(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ar));
}
var $i = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($i || {});
function xl(e, t = 0) {
  var r;
  return e === ((r = Ge(e)) == null ? void 0 : r.body) ? !1 : G(t, { [0]() {
    return e.matches(ar);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(ar))
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
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function sr(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Pl(e) : e : _l(e), a = i.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(a)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(a)) + 1;
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
  } while (p !== i.activeElement);
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Al(p) && p.select(), 2;
}
function lr(e, t, r) {
  typeof window < "u" && Z((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Cl(e, t, r = I(() => !0)) {
  function n(i, o) {
    if (!r.value || i.defaultPrevented)
      return;
    let a = o(i);
    if (a === null || !a.ownerDocument.documentElement.contains(a))
      return;
    let s = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of s) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : ue(l);
      if (u != null && u.contains(a))
        return;
    }
    return !xl(a, $i.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  lr("click", (i) => n(i, (o) => o.target), !0), lr("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ct = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ct || {});
let ur = H({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return V({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var cr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(cr || {});
function Il() {
  let e = S(0);
  return lr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ei(e, t, r, n) {
  typeof window < "u" && Z((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var _i = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(_i || {});
let Ze = Object.assign(H({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = S(null);
  n({ el: i, $el: i });
  let o = I(() => Ge(i));
  Dl({ ownerDocument: o }, I(() => Boolean(e.features & 16)));
  let a = jl({ ownerDocument: o, container: i, initialFocus: I(() => e.initialFocus) }, I(() => Boolean(e.features & 2)));
  Fl({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, I(() => Boolean(e.features & 8)));
  let s = Il();
  function l() {
    let u = ue(i);
    !u || G(s.value, { [cr.Forwards]: () => sr(u, ut.First), [cr.Backwards]: () => sr(u, ut.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return F(_r, [Boolean(f & 4) && F(ur, { as: "button", type: "button", onFocus: l, features: Ct.Focusable }), V({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && F(ur, { as: "button", type: "button", onFocus: l, features: Ct.Focusable })]);
  };
} }), { features: _i });
function Dl({ ownerDocument: e }, t) {
  let r = S(null), n = { value: !1 };
  M(() => {
    ot(t, (i, o) => {
      var a;
      i !== o && (!t.value || (n.value = !0, r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement)));
    }, { immediate: !0 }), ot(t, (i, o, a) => {
      i !== o && (!t.value || a(() => {
        n.value !== !1 && (n.value = !1, nt(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function jl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = S(null);
  return M(() => {
    ot([t, r, n], (o, a) => {
      if (o.every((l, u) => (a == null ? void 0 : a[u]) === l) || !n.value)
        return;
      let s = ue(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = ue(r), f = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (s.contains(f)) {
          i.value = f;
          return;
        }
        c ? nt(c) : sr(s, ut.First | ut.NoScroll) === Oi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Fl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var o;
  Ei((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Bl(s, u) ? (n.value = u, nt(u)) : (a.preventDefault(), a.stopPropagation(), nt(l)) : nt(n.value);
  }, !0);
}
function Bl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let vn = "body > *", Le = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function mn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function gn(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Rl(e, t = S(!0)) {
  Z((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ge(n);
    if (i) {
      Le.add(n);
      for (let o of he.keys())
        o.contains(n) && (gn(o), he.delete(o));
      i.querySelectorAll(vn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of Le)
            if (o.contains(a))
              return;
          Le.size === 1 && (he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), mn(o));
        }
      }), r(() => {
        if (Le.delete(n), Le.size > 0)
          i.querySelectorAll(vn).forEach((o) => {
            if (o instanceof HTMLElement && !he.has(o)) {
              for (let a of Le)
                if (o.contains(a))
                  return;
              he.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), mn(o);
            }
          });
        else
          for (let o of he.keys())
            gn(o), he.delete(o);
      });
    }
  });
}
let xi = Symbol("ForcePortalRootContext");
function ql() {
  return Q(xi, !1);
}
let fr = H({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return J(xi, e.force), () => {
    let { force: n, ...i } = e;
    return V({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Ll(e) {
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
let Ti = H({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = S(null), i = I(() => Ge(n)), o = ql(), a = Q(Ai, null), s = S(o === !0 || a == null ? Ll(n.value) : a.resolveTarget());
  return Z(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), ze(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return F(go, { to: s.value }, V({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ai = Symbol("PortalGroupContext"), Ml = H({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = yo({ resolveTarget() {
    return e.target;
  } });
  return J(Ai, n), () => {
    let { target: i, ...o } = e;
    return V({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Pi = Symbol("StackContext");
var dr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(dr || {});
function kl() {
  return Q(Pi, () => {
  });
}
function Nl({ type: e, element: t, onUpdate: r }) {
  let n = kl();
  function i(...o) {
    r == null || r(...o), n(...o);
  }
  M(() => {
    i(0, e, t), ze(() => {
      i(1, e, t);
    });
  }), J(Pi, i);
}
let Ci = Symbol("DescriptionContext");
function Hl() {
  let e = Q(Ci, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Vl({ slot: e = S({}), name: t = "Description", props: r = {} } = {}) {
  let n = S([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return J(Ci, { register: i, slot: e, name: t, props: r }), I(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Rd = H({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Hl(), i = `headlessui-description-${Re()}`;
  return M(() => ze(n.register(i))), () => {
    let { name: o = "Description", slot: a = S({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return V({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
var Ul = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ul || {});
let pr = Symbol("DialogContext");
function pt(e) {
  let t = Q(pr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pt), r;
  }
  return t;
}
let Ot = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ii = H({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ot }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = S(!1);
  M(() => {
    a.value = !0;
  });
  let s = S(0), l = Mr(), u = I(() => e.open === Ot && l !== null ? G(l.value, { [De.Open]: !0, [De.Closed]: !1 }) : e.open), c = S(/* @__PURE__ */ new Set()), f = S(null), p = S(null), d = I(() => Ge(f));
  if (i({ el: f, $el: f }), !(e.open !== Ot || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ot ? void 0 : e.open}`);
  let v = I(() => a.value && u.value ? 0 : 1), y = I(() => v.value === 0), b = I(() => s.value > 1), T = Q(pr, null) !== null, A = I(() => b.value ? "parent" : "leaf");
  Rl(f, I(() => b.value ? y.value : !1)), Nl({ type: "Dialog", element: f, onUpdate: (g, w, _) => {
    if (w === "Dialog")
      return G(g, { [dr.Add]() {
        c.value.add(_), s.value += 1;
      }, [dr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Vl({ name: "DialogDescription", slot: I(() => ({ open: u.value })) }), E = `headlessui-dialog-${Re()}`, $ = S(null), h = { titleId: $, panelRef: S(null), dialogState: v, setTitleId(g) {
    $.value !== g && ($.value = g);
  }, close() {
    t("close", !1);
  } };
  return J(pr, h), Cl(() => {
    var g, w, _;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((O) => !(!(O instanceof HTMLElement) || O.contains(ue(p)) || h.panelRef.value && O.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, w) => {
    h.close(), at(() => w == null ? void 0 : w.focus());
  }, I(() => v.value === 0 && !b.value)), Ei((o = d.value) == null ? void 0 : o.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === wi.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Z((g) => {
    var w;
    if (v.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let O = _ == null ? void 0 : _.documentElement, x = (w = _.defaultView) != null ? w : window, D = O.style.overflow, j = O.style.paddingRight, z = x.innerWidth - O.clientWidth;
    if (O.style.overflow = "hidden", z > 0) {
      let Y = O.clientWidth - O.offsetWidth, B = z - Y;
      O.style.paddingRight = `${B}px`;
    }
    g(() => {
      O.style.overflow = D, O.style.paddingRight = j;
    });
  }), Z((g) => {
    if (v.value !== 0)
      return;
    let w = ue(f);
    if (!w)
      return;
    let _ = new IntersectionObserver((O) => {
      for (let x of O)
        x.boundingClientRect.x === 0 && x.boundingClientRect.y === 0 && x.boundingClientRect.width === 0 && x.boundingClientRect.height === 0 && h.close();
    });
    _.observe(w), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: w, initialFocus: _, ...O } = e, x = { open: v.value === 0 };
    return F(fr, { force: !0 }, () => [F(Ti, () => F(Ml, { target: f.value }, () => F(fr, { force: !1 }, () => F(Ze, { initialFocus: _, containers: c, features: y.value ? G(A.value, { parent: Ze.features.RestoreFocus, leaf: Ze.features.All & ~Ze.features.FocusLock }) : Ze.features.None }, () => V({ ourProps: g, theirProps: O, slot: x, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), F(ur, { features: Ct.Hidden, ref: p })]);
  };
} });
H({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => V({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
H({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogBackdrop"), o = `headlessui-dialog-backdrop-${Re()}`, a = S(null);
  return n({ el: a, $el: a }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return F(fr, { force: !0 }, () => F(Ti, () => V({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Di = H({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = pt("DialogPanel"), o = `headlessui-dialog-panel-${Re()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: i.panelRef, onClick: a };
    return V({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
H({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = pt("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return M(() => {
    n.setTitleId(i), ze(() => n.setTitleId(null));
  }), () => V({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Wl(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function ji() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
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
function er(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var hr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(hr || {});
function zl(e, t) {
  let r = ji();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function yn(e, t, r, n, i, o) {
  let a = ji(), s = o !== void 0 ? Wl(o) : () => {
  };
  return $t(e, ...i), er(e, ...t, ...r), a.nextFrame(() => {
    $t(e, ...r), er(e, ...n), a.add(zl(e, (l) => ($t(e, ...n, ...t), er(e, ...i), s(l))));
  }), a.add(() => $t(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Te(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let kr = Symbol("TransitionContext");
var Gl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Gl || {});
function Kl() {
  return Q(kr, null) !== null;
}
function Xl() {
  let e = Q(kr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ql() {
  let e = Q(Nr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Nr = Symbol("NestingContext");
function kt(e) {
  return "children" in e ? kt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Fi(e) {
  let t = S([]), r = S(!1);
  M(() => r.value = !0), ze(() => r.value = !1);
  function n(o, a = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (G(a, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !kt(t) && r.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Bi = Pt.RenderStrategy, Ke = H({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!Kl() && Ol())
    return () => F(Xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = S(null), a = S("visible"), s = I(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = Xl(), { register: c, unregister: f } = Ql(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Fi(() => {
    v.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let w = c(d);
    ze(w);
  }), Z(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      G(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = Te(e.enter), T = Te(e.enterFrom), A = Te(e.enterTo), P = Te(e.entered), E = Te(e.leave), $ = Te(e.leaveFrom), h = Te(e.leaveTo);
  M(() => {
    Z(() => {
      if (a.value === "visible") {
        let w = ue(o);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let _ = p.value && !u.value, O = ue(o);
    !O || !(O instanceof HTMLElement) || _ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? yn(O, b, T, A, P, (x) => {
      v.value = !1, x === hr.Finished && t("afterEnter");
    }) : yn(O, E, $, h, P, (x) => {
      v.value = !1, x === hr.Finished && (kt(y) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    ot([l], (w, _, O) => {
      g(O), p.value = !1;
    }, { immediate: !0 });
  }), J(Nr, y), $l(I(() => G(a.value, { visible: De.Open, hidden: De.Closed }))), () => {
    let { appear: w, show: _, enter: O, enterFrom: x, enterTo: D, entered: j, leave: z, leaveFrom: Y, leaveTo: B, ...k } = e;
    return V({ theirProps: k, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Bi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), Yl = Ke, Xe = H({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Mr(), o = I(() => e.show === null && i !== null ? G(i.value, { [De.Open]: !0, [De.Closed]: !1 }) : e.show);
  Z(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = S(o.value ? "visible" : "hidden"), s = Fi(() => {
    a.value = "hidden";
  }), l = S(!0), u = { show: o, appear: I(() => e.appear || !l.value) };
  return M(() => {
    Z(() => {
      l.value = !1, o.value ? a.value = "visible" : kt(s) || (a.value = "hidden");
    });
  }), J(Nr, s), J(kr, u), () => {
    let c = bi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return V({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [F(Yl, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Bi, visible: a.value === "visible", name: "Transition" });
  };
} });
const Jl = {
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
      Dialog: Ii,
      DialogPanel: Di,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function Ri(e, t) {
  t = Lr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[dt(t[r++])];
  return r && r == n ? e : void 0;
}
function Hr(e, t, r) {
  var n = e == null ? void 0 : Ri(e, t);
  return n === void 0 ? r : n;
}
var Zl = function() {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const bn = Zl;
function qi(e, t, r) {
  t == "__proto__" && bn ? bn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var eu = Object.prototype, tu = eu.hasOwnProperty;
function ru(e, t, r) {
  var n = e[t];
  (!(tu.call(e, t) && Br(n, r)) || r === void 0 && !(t in e)) && qi(e, t, r);
}
function nu(e, t, r, n) {
  if (!ee(e))
    return e;
  t = Lr(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = dt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ee(c) ? c : xr(t[i + 1]) ? [] : {});
    }
    ru(s, l, u), s = s[l];
  }
  return e;
}
function Li(e, t, r) {
  return e == null ? e : nu(e, t, r);
}
const iu = {
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
          return Hr(e.values, r);
        },
        set(t, r, n) {
          Li(e.values, r, n);
        }
      })
    );
  }
}, ou = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Wn(e).then((t) => {
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
}, au = {
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
    const t = e, r = S(null), n = S(null), i = S(null);
    return M(() => {
      r.value = (o) => {
        o.target === n.value || n.value.contains(o.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (o) => {
        t.opened && o.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), bo(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (o, a) => (R(), le("div", {
      ref_key: "root",
      ref: n
    }, [
      ge(o.$slots, "default")
    ], 512));
  }
};
function W(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function je(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function U(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ce = Math.max, It = Math.min, He = Math.round;
function vr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Mi() {
  return !/^((?!chrome|android).)*safari/i.test(vr());
}
function Ve(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && U(e) && (i = e.offsetWidth > 0 && He(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && He(n.height) / e.offsetHeight || 1);
  var a = je(e) ? W(e) : window, s = a.visualViewport, l = !Mi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, p = n.height / o;
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
function Ur(e) {
  var t = W(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function su(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lu(e) {
  return e === W(e) || !U(e) ? Ur(e) : su(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $e(e) {
  return ((je(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wr(e) {
  return Ve($e(e)).left + Ur(e).scrollLeft;
}
function X(e) {
  return W(e).getComputedStyle(e);
}
function zr(e) {
  var t = X(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function uu(e) {
  var t = e.getBoundingClientRect(), r = He(t.width) / e.offsetWidth || 1, n = He(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function cu(e, t, r) {
  r === void 0 && (r = !1);
  var n = U(t), i = U(t) && uu(t), o = $e(t), a = Ve(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || zr(o)) && (s = lu(t)), U(t) ? (l = Ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Wr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ki(e) {
  var t = Ve(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Nt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Vr(e) ? e.host : null) || $e(e);
}
function Ni(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : U(e) && zr(e) ? e : Ni(Nt(e));
}
function it(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Ni(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = W(n), a = i ? [o].concat(o.visualViewport || [], zr(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(it(Nt(a)));
}
function fu(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function wn(e) {
  return !U(e) || X(e).position === "fixed" ? null : e.offsetParent;
}
function du(e) {
  var t = /firefox/i.test(vr()), r = /Trident/i.test(vr());
  if (r && U(e)) {
    var n = X(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Nt(e);
  for (Vr(i) && (i = i.host); U(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var o = X(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ht(e) {
  for (var t = W(e), r = wn(e); r && fu(r) && X(r).position === "static"; )
    r = wn(r);
  return r && (te(r) === "html" || te(r) === "body" && X(r).position === "static") ? t : r || du(e) || t;
}
var K = "top", re = "bottom", Se = "right", oe = "left", Vt = "auto", Ut = [K, re, Se, oe], Ue = "start", ct = "end", pu = "clippingParents", Hi = "viewport", et = "popper", hu = "reference", Sn = /* @__PURE__ */ Ut.reduce(function(e, t) {
  return e.concat([t + "-" + Ue, t + "-" + ct]);
}, []), vu = /* @__PURE__ */ [].concat(Ut, [Vt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ue, t + "-" + ct]);
}, []), mu = "beforeRead", gu = "read", yu = "afterRead", bu = "beforeMain", wu = "main", Su = "afterMain", Ou = "beforeWrite", $u = "write", Eu = "afterWrite", mr = [mu, gu, yu, bu, wu, Su, Ou, $u, Eu];
function _u(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && i(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function xu(e) {
  var t = _u(e);
  return mr.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Tu(e) {
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
  return [].concat(r).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, e);
}
var Ae = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Au = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', On = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pu(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), On).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(pe(Ae, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Ae, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          mr.indexOf(t.phase) < 0 && console.error(pe(Ae, t.name, '"phase"', "either " + mr.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Ae, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Ae, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Ae, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Ae, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + On.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(pe(Au, String(t.name), n, n));
      });
    });
  });
}
function Cu(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ae(e) {
  return e.split("-")[0];
}
function Iu(e) {
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
function Du(e, t) {
  var r = W(e), n = $e(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = Mi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Wr(e),
    y: l
  };
}
function ju(e) {
  var t, r = $e(e), n = Ur(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ce(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ce(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Wr(e), l = -n.scrollTop;
  return X(i || r).direction === "rtl" && (s += Ce(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Fu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function gr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Bu(e, t) {
  var r = Ve(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function $n(e, t, r) {
  return t === Hi ? gr(Du(e, r)) : je(t) ? Bu(t, r) : gr(ju($e(e)));
}
function Ru(e) {
  var t = it(Nt(e)), r = ["absolute", "fixed"].indexOf(X(e).position) >= 0, n = r && U(e) ? Ht(e) : e;
  return je(n) ? t.filter(function(i) {
    return je(i) && Fu(i, n) && te(i) !== "body";
  }) : [];
}
function qu(e, t, r, n) {
  var i = t === "clippingParents" ? Ru(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = $n(e, u, n);
    return l.top = Ce(c.top, l.top), l.right = It(c.right, l.right), l.bottom = It(c.bottom, l.bottom), l.left = Ce(c.left, l.left), l;
  }, $n(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function We(e) {
  return e.split("-")[1];
}
function Vi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ui(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ae(n) : null, o = n ? We(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case K:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case re:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Se:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case oe:
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
    switch (o) {
      case Ue:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ct:
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
function Lu(e) {
  return Object.assign({}, Wi(), e);
}
function Mu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Gr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? pu : s, u = r.rootBoundary, c = u === void 0 ? Hi : u, f = r.elementContext, p = f === void 0 ? et : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, T = Lu(typeof b != "number" ? b : Mu(b, Ut)), A = p === et ? hu : et, P = e.rects.popper, E = e.elements[v ? A : p], $ = qu(je(E) ? E : E.contextElement || $e(e.elements.popper), l, c, a), h = Ve(e.elements.reference), g = Ui({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = gr(Object.assign({}, P, g)), _ = p === et ? w : h, O = {
    top: $.top - _.top + T.top,
    bottom: _.bottom - $.bottom + T.bottom,
    left: $.left - _.left + T.left,
    right: _.right - $.right + T.right
  }, x = e.modifiersData.offset;
  if (p === et && x) {
    var D = x[i];
    Object.keys(O).forEach(function(j) {
      var z = [Se, re].indexOf(j) >= 0 ? 1 : -1, Y = [K, re].indexOf(j) >= 0 ? "y" : "x";
      O[j] += D[Y] * z;
    });
  }
  return O;
}
var En = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ku = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", _n = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Nu(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? _n : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _n, o),
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
        y(), c.options = Object.assign({}, o, c.options, A), c.scrollParents = {
          reference: je(s) ? it(s) : s.contextElement ? it(s.contextElement) : [],
          popper: it(l)
        };
        var P = xu(Iu([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(x) {
          return x.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Cu([].concat(P, c.options.modifiers), function(x) {
            var D = x.name;
            return D;
          });
          if (Pu(E), ae(c.options.placement) === Vt) {
            var $ = c.orderedModifiers.find(function(x) {
              var D = x.name;
              return D === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = X(l), g = h.marginTop, w = h.marginRight, _ = h.marginBottom, O = h.marginLeft;
          [g, w, _, O].some(function(x) {
            return parseFloat(x);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var T = c.elements, A = T.reference, P = T.popper;
          if (!xn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(En);
            return;
          }
          c.rects = {
            reference: cu(A, Ht(P), c.options.strategy === "fixed"),
            popper: ki(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(x) {
            return c.modifiersData[x.name] = Object.assign({}, x.data);
          });
          for (var E = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(ku);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var h = c.orderedModifiers[$], g = h.fn, w = h.options, _ = w === void 0 ? {} : w, O = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: O,
              instance: d
            }) || c);
          }
        }
      },
      update: Tu(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!xn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(En), d;
    d.setOptions(u).then(function(b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function v() {
      c.orderedModifiers.forEach(function(b) {
        var T = b.name, A = b.options, P = A === void 0 ? {} : A, E = b.effect;
        if (typeof E == "function") {
          var $ = E({
            state: c,
            name: T,
            instance: d,
            options: P
          }), h = function() {
          };
          f.push($ || h);
        }
      });
    }
    function y() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return d;
  };
}
var Et = {
  passive: !0
};
function Hu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = W(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Et);
  }), s && l.addEventListener("resize", r.update, Et), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Et);
    }), s && l.removeEventListener("resize", r.update, Et);
  };
}
const Vu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hu,
  data: {}
};
function Uu(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ui({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Wu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Uu,
  data: {}
};
var zu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: He(t * i) / i || 0,
    y: He(r * i) / i || 0
  };
}
function Tn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, v = a.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var T = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = oe, E = K, $ = window;
  if (u) {
    var h = Ht(r), g = "clientHeight", w = "clientWidth";
    if (h === W(r) && (h = $e(r), X(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === K || (i === oe || i === Se) && o === ct) {
      E = re;
      var _ = f && h === $ && $.visualViewport ? $.visualViewport.height : h[g];
      y -= _ - n.height, y *= l ? 1 : -1;
    }
    if (i === oe || (i === K || i === re) && o === ct) {
      P = Se;
      var O = f && h === $ && $.visualViewport ? $.visualViewport.width : h[w];
      d -= O - n.width, d *= l ? 1 : -1;
    }
  }
  var x = Object.assign({
    position: s
  }, u && zu), D = c === !0 ? Gu({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = D.x, y = D.y, l) {
    var j;
    return Object.assign({}, x, (j = {}, j[E] = A ? "0" : "", j[P] = T ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, x, (t = {}, t[E] = A ? y + "px" : "", t[P] = T ? d + "px" : "", t.transform = "", t));
}
function Ku(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = X(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ae(t.placement),
    variation: We(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ku,
  data: {}
};
function Qu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !U(o) || !te(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Yu(e) {
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
      var i = t.elements[n], o = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !U(i) || !te(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ju = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qu,
  effect: Yu,
  requires: ["computeStyles"]
};
var Zu = [Vu, Wu, Xu, Ju], ec = /* @__PURE__ */ Nu({
  defaultModifiers: Zu
});
function tc(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e, t, r) {
  return Ce(e, It(t, r));
}
function rc(e, t, r) {
  var n = Tt(e, t, r);
  return n > r ? r : n;
}
function nc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = Gr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), T = ae(t.placement), A = We(t.placement), P = !A, E = Vi(T), $ = tc(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, _ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, O = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), x = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (o) {
      var j, z = E === "y" ? K : oe, Y = E === "y" ? re : Se, B = E === "y" ? "height" : "width", k = h[E], mt = k + b[z], Ee = k - b[Y], gt = d ? -w[B] / 2 : 0, zt = A === Ue ? g[B] : w[B], Qe = A === Ue ? -w[B] : -g[B], yt = t.elements.arrow, qe = d && yt ? ki(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wi(), Ye = de[z], bt = de[Y], _e = Tt(0, g[B], qe[B]), Gt = P ? g[B] / 2 - gt - _e - Ye - O.mainAxis : zt - _e - Ye - O.mainAxis, no = P ? -g[B] / 2 + gt + _e + bt + O.mainAxis : Qe + _e + bt + O.mainAxis, Kt = t.elements.arrow && Ht(t.elements.arrow), io = Kt ? E === "y" ? Kt.clientTop || 0 : Kt.clientLeft || 0 : 0, Xr = (j = x == null ? void 0 : x[E]) != null ? j : 0, oo = k + Gt - Xr - io, ao = k + no - Xr, Qr = Tt(d ? It(mt, oo) : mt, k, d ? Ce(Ee, ao) : Ee);
      h[E] = Qr, D[E] = Qr - k;
    }
    if (s) {
      var Yr, so = E === "x" ? K : oe, lo = E === "x" ? re : Se, xe = h[$], wt = $ === "y" ? "height" : "width", Jr = xe + b[so], Zr = xe - b[lo], Xt = [K, oe].indexOf(T) !== -1, en = (Yr = x == null ? void 0 : x[$]) != null ? Yr : 0, tn = Xt ? Jr : xe - g[wt] - w[wt] - en + O.altAxis, rn = Xt ? xe + g[wt] + w[wt] - en - O.altAxis : Zr, nn = d && Xt ? rc(tn, xe, rn) : Tt(d ? tn : Jr, xe, d ? rn : Zr);
      h[$] = nn, D[$] = nn - xe;
    }
    t.modifiersData[n] = D;
  }
}
const ic = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nc,
  requiresIfExists: ["offset"]
};
var oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function At(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return oc[t];
  });
}
var ac = {
  start: "end",
  end: "start"
};
function An(e) {
  return e.replace(/start|end/g, function(t) {
    return ac[t];
  });
}
function sc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? vu : l, c = We(n), f = c ? s ? Sn : Sn.filter(function(v) {
    return We(v) === c;
  }) : Ut, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = Gr(e, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[ae(y)], v;
  }, {});
  return Object.keys(d).sort(function(v, y) {
    return d[v] - d[y];
  });
}
function lc(e) {
  if (ae(e) === Vt)
    return [];
  var t = At(e);
  return [An(e), t, An(t)];
}
function uc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, T = ae(b), A = T === b, P = l || (A || !v ? [At(b)] : lc(b)), E = [b].concat(P).reduce(function(qe, de) {
      return qe.concat(ae(de) === Vt ? sc(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : de);
    }, []), $ = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, _ = E[0], O = 0; O < E.length; O++) {
      var x = E[O], D = ae(x), j = We(x) === Ue, z = [K, re].indexOf(D) >= 0, Y = z ? "width" : "height", B = Gr(t, {
        placement: x,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), k = z ? j ? Se : oe : j ? re : K;
      $[Y] > h[Y] && (k = At(k));
      var mt = At(k), Ee = [];
      if (o && Ee.push(B[D] <= 0), s && Ee.push(B[k] <= 0, B[mt] <= 0), Ee.every(function(qe) {
        return qe;
      })) {
        _ = x, w = !1;
        break;
      }
      g.set(x, Ee);
    }
    if (w)
      for (var gt = v ? 3 : 1, zt = function(de) {
        var Ye = E.find(function(bt) {
          var _e = g.get(bt);
          if (_e)
            return _e.slice(0, de).every(function(Gt) {
              return Gt;
            });
        });
        if (Ye)
          return _ = Ye, "break";
      }, Qe = gt; Qe > 0; Qe--) {
        var yt = zt(Qe);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const cc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: uc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ht = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, fc = {
  components: {
    OnClickOutside: au
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
    this.popper = ec(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [cc, ic]
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
}, dc = { ref: "button" }, pc = { ref: "tooltip" };
function hc(e, t, r, n, i, o) {
  const a = wo("OnClickOutside");
  return R(), Me(a, {
    class: "relative",
    do: o.hide,
    opened: i.opened
  }, {
    default: zn(() => [
      nr("div", dc, [
        ge(e.$slots, "button", {
          toggle: o.toggle,
          disabled: r.disabled
        })
      ], 512),
      nr("div", pc, [
        ge(e.$slots, "default", {
          hide: o.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["do", "opened"]);
}
const vc = /* @__PURE__ */ ht(fc, [["render", hc]]);
function zi(e) {
  return e && e.length ? e[0] : void 0;
}
const mc = {
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
        return N(e.values, t);
      },
      first(t) {
        return zi(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, gc = {
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
        const n = "splade.redirect", i = "splade.refresh", o = "splade.toast";
        let a = null, s = !1, l = [];
        ke(r, (u) => {
          !ee(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
        }), a ? m.visit(a) : s ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
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
}, yc = {
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
}, bc = { ref: "file" };
function wc(e, t, r, n, i, o) {
  return R(), le("div", bc, [
    ge(e.$slots, "default", {
      handleFileInput: o.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Sc = /* @__PURE__ */ ht(yc, [["render", wc]]), Oc = {
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
        return N(e.values, t);
      },
      ...this.values
    });
  }
};
function yr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => yr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => yr(t));
}
function Gi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Xi(t, Ki(null, r), e[r]);
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
  Gi(r);
}
var $c = "[object Boolean]";
function Qi(e) {
  return e === !0 || e === !1 || be(e) && Oe(e) == $c;
}
function Ec() {
  this.__data__ = new ce(), this.size = 0;
}
function _c(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function xc(e) {
  return this.__data__.get(e);
}
function Tc(e) {
  return this.__data__.has(e);
}
var Ac = 200;
function Pc(e, t) {
  var r = this.__data__;
  if (r instanceof ce) {
    var n = r.__data__;
    if (!lt || n.length < Ac - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function se(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
se.prototype.clear = Ec;
se.prototype.delete = _c;
se.prototype.get = xc;
se.prototype.has = Tc;
se.prototype.set = Pc;
var Cc = "__lodash_hash_undefined__";
function Ic(e) {
  return this.__data__.set(e, Cc), this;
}
function Dc(e) {
  return this.__data__.has(e);
}
function Dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < r; )
    this.add(e[t]);
}
Dt.prototype.add = Dt.prototype.push = Ic;
Dt.prototype.has = Dc;
function jc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Fc(e, t) {
  return e.has(t);
}
var Bc = 1, Rc = 2;
function Yi(e, t, r, n, i, o) {
  var a = r & Bc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Rc ? new Dt() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var v = e[f], y = t[f];
    if (n)
      var b = a ? n(y, v, f, t, e, o) : n(v, y, f, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!jc(t, function(T, A) {
        if (!Fc(d, A) && (v === T || i(v, T, r, n, o)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === y || i(v, y, r, n, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
var qc = ne.Uint8Array;
const Pn = qc;
function Lc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Mc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var kc = 1, Nc = 2, Hc = "[object Boolean]", Vc = "[object Date]", Uc = "[object Error]", Wc = "[object Map]", zc = "[object Number]", Gc = "[object RegExp]", Kc = "[object Set]", Xc = "[object String]", Qc = "[object Symbol]", Yc = "[object ArrayBuffer]", Jc = "[object DataView]", Cn = ye ? ye.prototype : void 0, tr = Cn ? Cn.valueOf : void 0;
function Zc(e, t, r, n, i, o, a) {
  switch (r) {
    case Jc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Yc:
      return !(e.byteLength != t.byteLength || !o(new Pn(e), new Pn(t)));
    case Hc:
    case Vc:
    case zc:
      return Br(+e, +t);
    case Uc:
      return e.name == t.name && e.message == t.message;
    case Gc:
    case Xc:
      return e == t + "";
    case Wc:
      var s = Lc;
    case Kc:
      var l = n & kc;
      if (s || (s = Mc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Nc, a.set(e, t);
      var c = Yi(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case Qc:
      if (tr)
        return tr.call(e) == tr.call(t);
  }
  return !1;
}
function ef(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function tf(e, t, r) {
  var n = t(e);
  return q(e) ? n : ef(n, r(e));
}
function Ji(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function rf() {
  return [];
}
var nf = Object.prototype, of = nf.propertyIsEnumerable, In = Object.getOwnPropertySymbols, af = In ? function(e) {
  return e == null ? [] : (e = Object(e), Ji(In(e), function(t) {
    return of.call(e, t);
  }));
} : rf;
const sf = af;
function Dn(e) {
  return tf(e, Ft, sf);
}
var lf = 1, uf = Object.prototype, cf = uf.hasOwnProperty;
function ff(e, t, r, n, i, o) {
  var a = r & lf, s = Dn(e), l = s.length, u = Dn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : cf.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var b = a; ++f < l; ) {
    p = s[f];
    var T = e[p], A = t[p];
    if (n)
      var P = a ? n(A, T, p, t, e, o) : n(T, A, p, e, t, o);
    if (!(P === void 0 ? T === A || i(T, A, r, n, o) : P)) {
      y = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (y && !b) {
    var E = e.constructor, $ = t.constructor;
    E != $ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof $ == "function" && $ instanceof $) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var df = Be(ne, "DataView");
const br = df;
var pf = Be(ne, "Promise");
const wr = pf;
var hf = Be(ne, "Set");
const Sr = hf;
var vf = Be(ne, "WeakMap");
const Or = vf;
var jn = "[object Map]", mf = "[object Object]", Fn = "[object Promise]", Bn = "[object Set]", Rn = "[object WeakMap]", qn = "[object DataView]", gf = Fe(br), yf = Fe(lt), bf = Fe(wr), wf = Fe(Sr), Sf = Fe(Or), Pe = Oe;
(br && Pe(new br(new ArrayBuffer(1))) != qn || lt && Pe(new lt()) != jn || wr && Pe(wr.resolve()) != Fn || Sr && Pe(new Sr()) != Bn || Or && Pe(new Or()) != Rn) && (Pe = function(e) {
  var t = Oe(e), r = t == mf ? e.constructor : void 0, n = r ? Fe(r) : "";
  if (n)
    switch (n) {
      case gf:
        return qn;
      case yf:
        return jn;
      case bf:
        return Fn;
      case wf:
        return Bn;
      case Sf:
        return Rn;
    }
  return t;
});
const Ln = Pe;
var Of = 1, Mn = "[object Arguments]", kn = "[object Array]", _t = "[object Object]", $f = Object.prototype, Nn = $f.hasOwnProperty;
function Ef(e, t, r, n, i, o) {
  var a = q(e), s = q(t), l = a ? kn : Ln(e), u = s ? kn : Ln(t);
  l = l == Mn ? _t : l, u = u == Mn ? _t : u;
  var c = l == _t, f = u == _t, p = l == u;
  if (p && ir(e)) {
    if (!ir(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new se()), a || Zn(e) ? Yi(e, t, r, n, i, o) : Zc(e, t, l, r, n, i, o);
  if (!(r & Of)) {
    var d = c && Nn.call(e, "__wrapped__"), v = f && Nn.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return o || (o = new se()), i(y, b, r, n, o);
    }
  }
  return p ? (o || (o = new se()), ff(e, t, r, n, i, o)) : !1;
}
function Wt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : Ef(e, t, r, n, Wt, i);
}
var _f = 1, xf = 2;
function Tf(e, t, r, n) {
  var i = r.length, o = i, a = !n;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    s = r[i];
    var l = s[0], u = e[l], c = s[1];
    if (a && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new se();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Wt(c, u, _f | xf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Zi(e) {
  return e === e && !ee(e);
}
function Af(e) {
  for (var t = Ft(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Zi(i)];
  }
  return t;
}
function eo(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Pf(e) {
  var t = Af(e);
  return t.length == 1 && t[0][2] ? eo(t[0][0], t[0][1]) : function(r) {
    return r === e || Tf(r, e, t);
  };
}
function Cf(e, t) {
  return e != null && t in Object(e);
}
function If(e, t) {
  return e != null && gi(e, t, Cf);
}
var Df = 1, jf = 2;
function Ff(e, t) {
  return Fr(e) && Zi(t) ? eo(dt(e), t) : function(r) {
    var n = Hr(r, e);
    return n === void 0 && n === t ? If(r, e) : Wt(t, n, Df | jf);
  };
}
function Bf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Rf(e) {
  return function(t) {
    return Ri(t, e);
  };
}
function qf(e) {
  return Fr(e) ? Bf(dt(e)) : Rf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? ti : typeof e == "object" ? q(e) ? Ff(e[0], e[1]) : Pf(e) : qf(e);
}
function to(e, t) {
  var r = {};
  return t = vt(t), Ar(e, function(n, i, o) {
    qi(r, i, t(n, i, o));
  }), r;
}
const Lf = {
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
    forceFormData: {
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
      return to(this.rawErrors, (e) => e.join(`
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
      return N(this.errors, e);
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return Li(this.values, e, t);
    },
    submit(e) {
      const t = e.submitter;
      if (t.name && this.$put(t.name, t.value), !this.confirm)
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
      const e = this.forceFormData || yr(this.values) ? Gi(this.values) : this.values, t = { Accept: "application/json" };
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
            ].includes(r) ? e[r] : (N(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Hr(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Mf = {
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
}, kf = { ref: "input" };
function Nf(e, t, r, n, i, o) {
  return R(), le("div", kf, [
    ge(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Hf = /* @__PURE__ */ ht(Mf, [["render", Nf]]), Vf = ["href", "onClick"], Uf = {
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
    return (i, o) => (R(), le("a", {
      href: e.href,
      onClick: So(r, ["prevent"])
    }, [
      ge(i.$slots, "default")
    ], 8, Vf));
  }
}, Wf = {
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
      Dialog: Ii,
      DialogPanel: Di,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
};
function zf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!jt(t)) {
      var o = vt(r);
      t = Ft(t), r = function(s) {
        return o(i[s], s, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[o ? t[a] : a] : void 0;
  };
}
function Gf(e, t, r, n) {
  for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Kf = /\s/;
function Xf(e) {
  for (var t = e.length; t-- && Kf.test(e.charAt(t)); )
    ;
  return t;
}
var Qf = /^\s+/;
function Yf(e) {
  return e && e.slice(0, Xf(e) + 1).replace(Qf, "");
}
var Hn = 0 / 0, Jf = /^[-+]0x[0-9a-f]+$/i, Zf = /^0b[01]+$/i, ed = /^0o[0-7]+$/i, td = parseInt;
function $r(e) {
  if (typeof e == "number")
    return e;
  if (Rt(e))
    return Hn;
  if (ee(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ee(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Yf(e);
  var r = Zf.test(e);
  return r || ed.test(e) ? td(e.slice(2), r ? 2 : 8) : Jf.test(e) ? Hn : +e;
}
var Vn = 1 / 0, rd = 17976931348623157e292;
function nd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = $r(e), e === Vn || e === -Vn) {
    var t = e < 0 ? -1 : 1;
    return t * rd;
  }
  return e === e ? e : 0;
}
function Kr(e) {
  var t = nd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var id = Math.max;
function od(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Kr(r);
  return i < 0 && (i = id(n + i, 0)), Gf(e, vt(t), i);
}
var ad = zf(od);
const sd = ad, ld = {
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
      return sd(this.choicesInstance._store.choices, (t) => t.value == e);
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
          const o = r.getItemOfCurrentModel(), a = r.choicesInstance.dropdown.element.querySelector(
            `.choices__item[data-id="${o.id}"]`
          );
          r.choicesInstance.choiceList.scrollToChildElement(a, 1), r.choicesInstance._highlightChoice(a);
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
}, ud = { ref: "select" };
function cd(e, t, r, n, i, o) {
  return R(), le("div", ud, [
    ge(e.$slots, "default")
  ], 512);
}
const fd = /* @__PURE__ */ ht(ld, [["render", cd]]), dd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = to(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return N(e, i);
      },
      hasFlash(i) {
        return N(t, i);
      },
      hasShared(i) {
        return N(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
var pd = function() {
  return ne.Date.now();
};
const rr = pd;
var hd = "Expected a function", vd = Math.max, md = Math.min;
function gd(e, t, r) {
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(hd);
  t = $r(t) || 0, ee(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? vd($r(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, a = e.apply(w, g), a;
  }
  function v(h) {
    return u = h, s = setTimeout(T, t), c ? d(h) : a;
  }
  function y(h) {
    var g = h - l, w = h - u, _ = t - g;
    return f ? md(_, o - w) : _;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= o;
  }
  function T() {
    var h = rr();
    if (b(h))
      return A(h);
    s = setTimeout(T, y(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : A(rr());
  }
  function $() {
    var h = rr(), g = b(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(T, t), d(l);
    }
    return s === void 0 && (s = setTimeout(T, t)), a;
  }
  return $.cancel = P, $.flush = E, $;
}
function ro(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function yd(e, t, r) {
  e = qr(e), t = Mt(t);
  var n = e.length;
  r = r === void 0 ? n : ro(Kr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function bd(e, t) {
  var r = [];
  return Pr(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
  }), r;
}
function wd(e, t) {
  var r = q(e) ? Ji : bd;
  return r(e, vt(t));
}
function Un(e, t) {
  return Wt(e, t);
}
function Sd(e, t) {
  var r = -1, n = jt(e) ? Array(e.length) : [];
  return Pr(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function Od(e, t) {
  var r = q(e) ? mi : Sd;
  return r(e, vt(t));
}
function xt(e, t, r) {
  return e = qr(e), r = r == null ? 0 : ro(Kr(r), 0, e.length), t = Mt(t), e.slice(r, r + t.length) == t;
}
const $d = {
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
      return !Un(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    ke(e, (r, n) => {
      if (xt(n, "filter[") && !r) {
        const i = n.split("["), o = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, o];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, ke(e, (t, r) => {
        xt(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = wd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Od(r, (i) => i.key).sort();
      Un(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
    debounceUpdateQuery: gd(function(e, t, r) {
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
        if (!yd(i, "]")) {
          t[i] = n[1];
          return;
        }
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], q(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
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
      ke(e, (a, s) => {
        if (!q(a)) {
          n[s] = a;
          return;
        }
        a.length !== 0 && a.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      ke(n, (a, s) => {
        a === null || a === [] || (i && (i += "&"), i += `${s}=${a}`);
      }), i && (i = "?" + i);
      const o = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(o);
      m.replace(o).then(() => {
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
}, Ed = {
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
}, _d = { ref: "textarea" };
function xd(e, t, r, n, i, o) {
  return R(), le("div", _d, [
    ge(e.$slots, "default")
  ], 512);
}
const Td = /* @__PURE__ */ ht(Ed, [["render", xd]]), Ad = {
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
}, Pd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Cd = {
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
      positions: Pd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: rt,
      TransitionRoot: Xe,
      TransitionChild: Ke
    });
  }
}, Id = {
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
            return r === "setToggle" ? (i, o) => {
              e.setToggle(i, o);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Dd = {
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
}, qd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = N(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = N(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = N(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = N(t, "link_component") ? t.link_component : "Link", t.progress_bar = N(t, "progress_bar") ? t.progress_bar : !1;
    const r = t.prefix;
    if (e.component(`${r}Confirm`, Jl).component(`${r}Data`, iu).component(`${r}Defer`, ou).component(`${r}Dropdown`, vc).component(`${r}Errors`, mc).component(`${r}Event`, gc).component(`${r}File`, Sc).component(`${r}Flash`, Oc).component(`${r}Form`, Lf).component(`${r}Input`, Hf).component(`${r}Modal`, Wf).component(`${r}Render`, rt).component(`${r}Select`, fd).component(`${r}State`, dd).component(`${r}Table`, $d).component(`${r}Textarea`, Td).component(`${r}Toast`, Ad).component(`${r}Toasts`, Cd).component(`${r}Toggle`, Id).component(`${r}Transition`, Dd).component(t.link_component, Uf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      ee(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        N(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Er.init(t.progress_bar);
    }
  }
};
function Ld(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((o) => {
    const a = o.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (o, a) => {
    if (o.method == "POST") {
      let s = "";
      o.on("data", (l) => s += l), o.on("end", async () => {
        const l = JSON.parse(s), u = r({
          components: l.components,
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
  gs as SpladeApp,
  qd as SpladePlugin,
  Bd as renderSpladeApp,
  Ld as startServer
};
