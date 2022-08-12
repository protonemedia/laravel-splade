import Mn from "axios";
import { ref as O, computed as D, watch as rt, openBlock as W, createBlock as Be, unref as he, h as j, onMounted as M, createElementBlock as nt, createElementVNode as Yt, provide as Y, inject as z, nextTick as Et, resolveDynamicComponent as to, KeepAlive as ro, withCtx as Nn, normalizeStyle as no, createVNode as io, Fragment as gr, renderList as oo, createCommentVNode as ao, onBeforeUnmount as so, renderSlot as $t, resolveComponent as lo, withDirectives as uo, vShow as co, cloneVNode as fo, watchEffect as J, defineComponent as q, onUnmounted as We, Teleport as po, reactive as ho, withModifiers as vo } from "vue";
function mo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function go(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var yo = go();
const bo = yo;
function wo(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Oo = typeof global == "object" && global && global.Object === Object && global;
const qn = Oo;
var So = typeof self == "object" && self && self.Object === Object && self, Eo = qn || So || Function("return this")();
const te = Eo;
var $o = te.Symbol;
const me = $o;
var kn = Object.prototype, To = kn.hasOwnProperty, _o = kn.toString, Ke = me ? me.toStringTag : void 0;
function xo(e) {
  var t = To.call(e, Ke), r = e[Ke];
  try {
    e[Ke] = void 0;
    var n = !0;
  } catch {
  }
  var i = _o.call(e);
  return n && (t ? e[Ke] = r : delete e[Ke]), i;
}
var Ao = Object.prototype, Po = Ao.toString;
function Co(e) {
  return Po.call(e);
}
var Do = "[object Null]", Io = "[object Undefined]", Jr = me ? me.toStringTag : void 0;
function be(e) {
  return e == null ? e === void 0 ? Io : Do : Jr && Jr in Object(e) ? xo(e) : Co(e);
}
function ge(e) {
  return e != null && typeof e == "object";
}
var jo = "[object Arguments]";
function Zr(e) {
  return ge(e) && be(e) == jo;
}
var Hn = Object.prototype, Fo = Hn.hasOwnProperty, Ro = Hn.propertyIsEnumerable, Bo = Zr(function() {
  return arguments;
}()) ? Zr : function(e) {
  return ge(e) && Fo.call(e, "callee") && !Ro.call(e, "callee");
};
const Wn = Bo;
var Lo = Array.isArray;
const B = Lo;
function Mo() {
  return !1;
}
var Un = typeof exports == "object" && exports && !exports.nodeType && exports, en = Un && typeof module == "object" && module && !module.nodeType && module, No = en && en.exports === Un, tn = No ? te.Buffer : void 0, qo = tn ? tn.isBuffer : void 0, ko = qo || Mo;
const Jt = ko;
var Ho = 9007199254740991, Wo = /^(?:0|[1-9]\d*)$/;
function yr(e, t) {
  var r = typeof e;
  return t = t == null ? Ho : t, !!t && (r == "number" || r != "symbol" && Wo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Uo = 9007199254740991;
function br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uo;
}
var Vo = "[object Arguments]", Go = "[object Array]", zo = "[object Boolean]", Ko = "[object Date]", Xo = "[object Error]", Qo = "[object Function]", Yo = "[object Map]", Jo = "[object Number]", Zo = "[object Object]", ea = "[object RegExp]", ta = "[object Set]", ra = "[object String]", na = "[object WeakMap]", ia = "[object ArrayBuffer]", oa = "[object DataView]", aa = "[object Float32Array]", sa = "[object Float64Array]", la = "[object Int8Array]", ua = "[object Int16Array]", ca = "[object Int32Array]", fa = "[object Uint8Array]", da = "[object Uint8ClampedArray]", pa = "[object Uint16Array]", ha = "[object Uint32Array]", C = {};
C[aa] = C[sa] = C[la] = C[ua] = C[ca] = C[fa] = C[da] = C[pa] = C[ha] = !0;
C[Vo] = C[Go] = C[ia] = C[zo] = C[oa] = C[Ko] = C[Xo] = C[Qo] = C[Yo] = C[Jo] = C[Zo] = C[ea] = C[ta] = C[ra] = C[na] = !1;
function va(e) {
  return ge(e) && br(e.length) && !!C[be(e)];
}
function ma(e) {
  return function(t) {
    return e(t);
  };
}
var Vn = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = Vn && typeof module == "object" && module && !module.nodeType && module, ga = Ye && Ye.exports === Vn, Ut = ga && qn.process, ya = function() {
  try {
    var e = Ye && Ye.require && Ye.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}();
const rn = ya;
var nn = rn && rn.isTypedArray, ba = nn ? ma(nn) : va;
const Gn = ba;
var wa = Object.prototype, Oa = wa.hasOwnProperty;
function Sa(e, t) {
  var r = B(e), n = !r && Wn(e), i = !r && !n && Jt(e), o = !r && !n && !i && Gn(e), a = r || n || i || o, s = a ? wo(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Oa.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || yr(u, l))) && s.push(u);
  return s;
}
var Ea = Object.prototype;
function $a(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ea;
  return e === r;
}
function Ta(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var _a = Ta(Object.keys, Object);
const xa = _a;
var Aa = Object.prototype, Pa = Aa.hasOwnProperty;
function Ca(e) {
  if (!$a(e))
    return xa(e);
  var t = [];
  for (var r in Object(e))
    Pa.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ae(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Da = "[object AsyncFunction]", Ia = "[object Function]", ja = "[object GeneratorFunction]", Fa = "[object Proxy]";
function zn(e) {
  if (!ae(e))
    return !1;
  var t = be(e);
  return t == Ia || t == ja || t == Da || t == Fa;
}
function wr(e) {
  return e != null && br(e.length) && !zn(e);
}
function Or(e) {
  return wr(e) ? Sa(e) : Ca(e);
}
function Sr(e, t) {
  return e && bo(e, t, Or);
}
function Ra(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!wr(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Ba = Ra(Sr);
const Er = Ba;
function Kn(e) {
  return e;
}
function Xn(e) {
  return typeof e == "function" ? e : Kn;
}
function La(e, t) {
  var r = B(e) ? mo : Er;
  return r(e, Xn(t));
}
var Ma = Array.prototype, Na = Ma.reverse;
function qa(e) {
  return e == null ? e : Na.call(e);
}
const Zt = O(1), Ae = typeof window > "u";
function ka(e, t) {
  Ae || window.addEventListener("popstate", Ha.bind(this)), _r(t), Pt(t.head), xr(e);
  const r = Ae ? "" : location.href, n = $r(
    r,
    t.head,
    e,
    {},
    Zt.value
  );
  Qn(n);
}
function Ha(e) {
  L.value = e.state, Q.value = 0, Pt(L.value.head), xr(L.value.html, L.value.rememberedState.scrollY);
}
function $r(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return L.value = o, o;
}
function Wa(e) {
  Ae || window.history.pushState(e, "", e.url);
}
function Ua(e) {
  const t = $r(
    e,
    JSON.parse(JSON.stringify(L.value.head)),
    L.value.html,
    { ...L.value.rememberedState },
    L.value.pageVisitId
  );
  Ae || window.history.replaceState(t, "", t.url);
}
function Qn(e) {
  Ae || window.history.replaceState(e, "", e.url);
}
const L = O({});
function Va(e, t) {
  const r = e.request.responseURL;
  if (e.data.splade.modal && Q.value++, _r(e.data.splade), Pt(e.data.splade.head), e.data.splade.modal)
    return rs(e.data.html, e.data.splade.modal);
  (r !== L.value.url || e.data.splade.refresh || Q.value > 0) && (Q.value = 0, t || Zt.value++, xr(e.data.html, 0));
  const n = $r(
    r,
    e.data.splade.head,
    e.data.html,
    L.value.rememberedState ? { ...L.value.rememberedState } : {},
    Zt.value
  );
  t ? Qn(n) : Wa(n);
}
const Q = O(0);
function Ga() {
  Q.value--, Pt(Ka(Q.value));
}
const Yn = O({}), Jn = O({}), Zn = (e) => Jn.value[e], za = (e) => Object.keys(Zn.value[e]).length > 0, ei = O({}), Ka = (e) => ei.value[e], ti = O({}), Xa = (e) => ti.value[e], Le = O([]), Qa = D(() => qa(Le.value));
function Ya(e) {
  Le.value.push(e);
}
function Ja(e) {
  Le.value[e].dismissed = !0, Le.value[e].html = null;
}
const Tr = O(null);
function Za(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return Tr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function es() {
  Tr.value = null;
}
function _r(e) {
  Yn.value = e.shared ? e.shared : {}, ti.value[Q.value] = e.flash ? e.flash : {}, ei.value[Q.value] = e.head ? e.head : {}, La(e.toasts ? e.toasts : [], (t) => {
    Le.value.push(t);
  }), Jn.value[Q.value] = e.errors ? e.errors : {};
}
function ts(e) {
  si.value(e);
}
function Pt(e) {
  ii.value(e);
}
function xr(e, t) {
  oi.value(e, t);
}
function rs(e, t) {
  ai.value(e, t);
}
const ri = O({});
function ni(e, t, r) {
  ri.value[e] = t, r && ns(e, t);
}
function ns(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function is(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ri.value[e];
}
function Ue(e, t, r, n, i) {
  Ae || ni("scrollY", window.scrollY);
  const o = Mn({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": !0,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    }
  });
  return o.then((a) => {
    Va(a, i);
  }).catch((a) => {
    const s = a.response.data.splade;
    s && _r(s), a.response.status != 422 && ts(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
}
function os(e) {
  return Ue(e, "GET", {}, {}, !0);
}
function as(e) {
  return Ue(e, "GET", {}, {}, !1);
}
function ss(e) {
  return Ue(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ls(e) {
  return Ue(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function us() {
  return Ue(L.value.url, "GET", {}, { "X-Splade-Refresh": !0 }, !1);
}
const ii = O(() => {
}), oi = O(() => {
}), ai = O(() => {
}), si = O(() => {
}), g = {
  init: ka,
  replace: os,
  visit: as,
  modal: ss,
  slideover: ls,
  refresh: us,
  request: Ue,
  replaceUrlOfCurrentPage: Ua,
  setOnHead(e) {
    ii.value = e;
  },
  setOnHtml(e) {
    oi.value = e;
  },
  setOnModal(e) {
    ai.value = e;
  },
  setOnServerError(e) {
    si.value = e;
  },
  hasValidationErrors: za,
  validationErrors: Zn,
  sharedData: Yn,
  flashData: Xa,
  toasts: Le,
  toastsReversed: Qa,
  confirmModal: Tr,
  confirm: Za,
  clearConfirmModal: es,
  pushToast: Ya,
  dismissToast: Ja,
  restore: is,
  remember: ni,
  popStack: Ga,
  currentStack: Q,
  pageVisitId: D(() => L.value.pageVisitId),
  isSsr: Ae
};
function Je(e, t) {
  return e && Sr(e, Xn(t));
}
var cs = "[object String]";
function Vt(e) {
  return typeof e == "string" || !B(e) && ge(e) && be(e) == cs;
}
const Ze = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = O(null);
    function n() {
      r.value = j({
        template: t.html
      });
    }
    return rt(() => t.html, n, { immediate: !0 }), (i, o) => (W(), Be(he(r)));
  }
}, fs = {
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
    const i = O(null);
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
    return M(() => o()), (s, l) => (W(), nt("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      Yt("iframe", {
        ref_key: "iframeElement",
        ref: i,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, ds = {
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
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!g.isSsr) {
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!g.isSsr) {
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Y("stack", 0);
    const r = O(), n = O([]), i = O(null), o = D(() => g.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function a() {
      i.value = null;
    }
    function s(f) {
      n[f] = null, g.popStack();
    }
    const l = z("$spladeOptions") || {};
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      Je(f, (d, h) => {
        p[h] = d;
      });
    }
    return g.setOnHead((f) => {
      g.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), g.setOnHtml((f, p) => {
      n.value = [], r.value = f, Et(() => {
        g.isSsr || window.scrollTo(0, p), l.transform_anchors && [...document.querySelectorAll("a")].forEach((d) => {
          d.href == "" || d.href.charAt(0) == "#" || d.__vnode.dynamicProps === null && (d.hasAttribute("download") || (d.onclick = function(h) {
            h.preventDefault(), g.visit(d.href);
          }));
        });
      });
    }), g.setOnModal(function(f, p) {
      n.value[g.currentStack.value] = { html: f, type: p };
    }), g.setOnServerError(function(f) {
      i.value = f;
    }), g.init(t.initialHtml, t.initialSpladeData), (f, p) => (W(), nt("div", null, [
      (W(), Be(to(he(g).isSsr ? "div" : ro), {
        max: he(l).max_keep_alive
      }, {
        default: Nn(() => [
          (W(), Be(Ze, {
            key: `visit.${he(g).pageVisitId.value}`,
            style: no(he(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      io(Ze, { html: e.components }, null, 8, ["html"]),
      (W(!0), nt(gr, null, oo(he(g).currentStack.value, (d) => (W(), Be(Ze, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": he(g).currentStack.value === d,
        onClose: (h) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (W(), Be(fs, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : ao("", !0)
    ]));
  }
};
function ud(e) {
  return () => j(ds, e);
}
var ps = Object.prototype, hs = ps.hasOwnProperty;
function vs(e, t) {
  return e != null && hs.call(e, t);
}
var ms = "[object Symbol]";
function Ct(e) {
  return typeof e == "symbol" || ge(e) && be(e) == ms;
}
var gs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ys = /^\w*$/;
function Ar(e, t) {
  if (B(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ct(e) ? !0 : ys.test(e) || !gs.test(e) || t != null && e in Object(t);
}
var bs = te["__core-js_shared__"];
const Gt = bs;
var on = function() {
  var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ws(e) {
  return !!on && on in e;
}
var Os = Function.prototype, Ss = Os.toString;
function De(e) {
  if (e != null) {
    try {
      return Ss.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Es = /[\\^$.*+?()[\]{}|]/g, $s = /^\[object .+?Constructor\]$/, Ts = Function.prototype, _s = Object.prototype, xs = Ts.toString, As = _s.hasOwnProperty, Ps = RegExp(
  "^" + xs.call(As).replace(Es, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cs(e) {
  if (!ae(e) || ws(e))
    return !1;
  var t = zn(e) ? Ps : $s;
  return t.test(De(e));
}
function Ds(e, t) {
  return e == null ? void 0 : e[t];
}
function Ie(e, t) {
  var r = Ds(e, t);
  return Cs(r) ? r : void 0;
}
var Is = Ie(Object, "create");
const it = Is;
function js() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
function Fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rs = "__lodash_hash_undefined__", Bs = Object.prototype, Ls = Bs.hasOwnProperty;
function Ms(e) {
  var t = this.__data__;
  if (it) {
    var r = t[e];
    return r === Rs ? void 0 : r;
  }
  return Ls.call(t, e) ? t[e] : void 0;
}
var Ns = Object.prototype, qs = Ns.hasOwnProperty;
function ks(e) {
  var t = this.__data__;
  return it ? t[e] !== void 0 : qs.call(t, e);
}
var Hs = "__lodash_hash_undefined__";
function Ws(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = it && t === void 0 ? Hs : t, this;
}
function Pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pe.prototype.clear = js;
Pe.prototype.delete = Fs;
Pe.prototype.get = Ms;
Pe.prototype.has = ks;
Pe.prototype.set = Ws;
function Us() {
  this.__data__ = [], this.size = 0;
}
function Pr(e, t) {
  return e === t || e !== e && t !== t;
}
function Dt(e, t) {
  for (var r = e.length; r--; )
    if (Pr(e[r][0], t))
      return r;
  return -1;
}
var Vs = Array.prototype, Gs = Vs.splice;
function zs(e) {
  var t = this.__data__, r = Dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Gs.call(t, r, 1), --this.size, !0;
}
function Ks(e) {
  var t = this.__data__, r = Dt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Xs(e) {
  return Dt(this.__data__, e) > -1;
}
function Qs(e, t) {
  var r = this.__data__, n = Dt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = Us;
le.prototype.delete = zs;
le.prototype.get = Ks;
le.prototype.has = Xs;
le.prototype.set = Qs;
var Ys = Ie(te, "Map");
const ot = Ys;
function Js() {
  this.size = 0, this.__data__ = {
    hash: new Pe(),
    map: new (ot || le)(),
    string: new Pe()
  };
}
function Zs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return Zs(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function el(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tl(e) {
  return It(this, e).get(e);
}
function rl(e) {
  return It(this, e).has(e);
}
function nl(e, t) {
  var r = It(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ue.prototype.clear = Js;
ue.prototype.delete = el;
ue.prototype.get = tl;
ue.prototype.has = rl;
ue.prototype.set = nl;
var il = "Expected a function";
function Cr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(il);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Cr.Cache || ue)(), r;
}
Cr.Cache = ue;
var ol = 500;
function al(e) {
  var t = Cr(e, function(n) {
    return r.size === ol && r.clear(), n;
  }), r = t.cache;
  return t;
}
var sl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ll = /\\(\\)?/g, ul = al(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sl, function(r, n, i, o) {
    t.push(i ? o.replace(ll, "$1") : n || r);
  }), t;
});
const cl = ul;
function li(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var fl = 1 / 0, an = me ? me.prototype : void 0, sn = an ? an.toString : void 0;
function jt(e) {
  if (typeof e == "string")
    return e;
  if (B(e))
    return li(e, jt) + "";
  if (Ct(e))
    return sn ? sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fl ? "-0" : t;
}
function Dr(e) {
  return e == null ? "" : jt(e);
}
function Ir(e, t) {
  return B(e) ? e : Ar(e, t) ? [e] : cl(Dr(e));
}
var dl = 1 / 0;
function lt(e) {
  if (typeof e == "string" || Ct(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -dl ? "-0" : t;
}
function ui(e, t, r) {
  t = Ir(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = lt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && br(i) && yr(a, i) && (B(e) || Wn(e)));
}
function X(e, t) {
  return e != null && ui(e, t, vs);
}
const pl = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = O(null), n = O(null);
    return M(() => {
      r.value = (i) => {
        i.target === n.value || n.value.contains(i.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value);
    }), so(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, o) => (W(), nt("div", {
      ref_key: "root",
      ref: n
    }, [
      $t(i.$slots, "default")
    ], 512));
  }
};
function K(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Me(e) {
  var t = K(e).Element;
  return e instanceof t || e instanceof Element;
}
function H(e) {
  var t = K(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = K(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var xe = Math.max, Tt = Math.min, Ne = Math.round;
function qe(e, t) {
  t === void 0 && (t = !1);
  var r = e.getBoundingClientRect(), n = 1, i = 1;
  if (H(e) && t) {
    var o = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (n = Ne(r.width) / a || 1), o > 0 && (i = Ne(r.height) / o || 1);
  }
  return {
    width: r.width / n,
    height: r.height / i,
    top: r.top / i,
    right: r.right / n,
    bottom: r.bottom / i,
    left: r.left / n,
    x: r.left / n,
    y: r.top / i
  };
}
function Fr(e) {
  var t = K(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function hl(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vl(e) {
  return e === K(e) || !H(e) ? Fr(e) : hl(e);
}
function Z(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function we(e) {
  return ((Me(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rr(e) {
  return qe(we(e)).left + Fr(e).scrollLeft;
}
function G(e) {
  return K(e).getComputedStyle(e);
}
function Br(e) {
  var t = G(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function ml(e) {
  var t = e.getBoundingClientRect(), r = Ne(t.width) / e.offsetWidth || 1, n = Ne(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function gl(e, t, r) {
  r === void 0 && (r = !1);
  var n = H(t), i = H(t) && ml(t), o = we(t), a = qe(e, i), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Z(t) !== "body" || Br(o)) && (s = vl(t)), H(t) ? (l = qe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Rr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ci(e) {
  var t = qe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ft(e) {
  return Z(e) === "html" ? e : e.assignedSlot || e.parentNode || (jr(e) ? e.host : null) || we(e);
}
function fi(e) {
  return ["html", "body", "#document"].indexOf(Z(e)) >= 0 ? e.ownerDocument.body : H(e) && Br(e) ? e : fi(Ft(e));
}
function et(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = fi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = K(n), a = i ? [o].concat(o.visualViewport || [], Br(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(et(Ft(a)));
}
function yl(e) {
  return ["table", "td", "th"].indexOf(Z(e)) >= 0;
}
function ln(e) {
  return !H(e) || G(e).position === "fixed" ? null : e.offsetParent;
}
function bl(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && H(e)) {
    var n = G(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Ft(e);
  for (jr(i) && (i = i.host); H(i) && ["html", "body"].indexOf(Z(i)) < 0; ) {
    var o = G(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Rt(e) {
  for (var t = K(e), r = ln(e); r && yl(r) && G(r).position === "static"; )
    r = ln(r);
  return r && (Z(r) === "html" || Z(r) === "body" && G(r).position === "static") ? t : r || bl(e) || t;
}
var U = "top", ee = "bottom", ye = "right", ne = "left", Bt = "auto", Lt = [U, ee, ye, ne], ke = "start", at = "end", wl = "clippingParents", di = "viewport", Xe = "popper", Ol = "reference", un = /* @__PURE__ */ Lt.reduce(function(e, t) {
  return e.concat([t + "-" + ke, t + "-" + at]);
}, []), Sl = /* @__PURE__ */ [].concat(Lt, [Bt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ke, t + "-" + at]);
}, []), El = "beforeRead", $l = "read", Tl = "afterRead", _l = "beforeMain", xl = "main", Al = "afterMain", Pl = "beforeWrite", Cl = "write", Dl = "afterWrite", er = [El, $l, Tl, _l, xl, Al, Pl, Cl, Dl];
function Il(e) {
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
function jl(e) {
  var t = Il(e);
  return er.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Fl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function de(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, o) {
    return i.replace(/%s/, o);
  }, e);
}
var $e = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Rl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', cn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Bl(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), cn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(de($e, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(de($e, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          er.indexOf(t.phase) < 0 && console.error(de($e, t.name, '"phase"', "either " + er.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(de($e, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(de($e, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(de($e, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(de($e, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + cn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(de(Rl, String(t.name), n, n));
      });
    });
  });
}
function Ll(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ie(e) {
  return e.split("-")[0];
}
function Ml(e) {
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
function Nl(e) {
  var t = K(e), r = we(e), n = t.visualViewport, i = r.clientWidth, o = r.clientHeight, a = 0, s = 0;
  return n && (i = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, s = n.offsetTop)), {
    width: i,
    height: o,
    x: a + Rr(e),
    y: s
  };
}
function ql(e) {
  var t, r = we(e), n = Fr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = xe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = xe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Rr(e), l = -n.scrollTop;
  return G(i || r).direction === "rtl" && (s += xe(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function kl(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && jr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function tr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Hl(e) {
  var t = qe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function fn(e, t) {
  return t === di ? tr(Nl(e)) : Me(t) ? Hl(t) : tr(ql(we(e)));
}
function Wl(e) {
  var t = et(Ft(e)), r = ["absolute", "fixed"].indexOf(G(e).position) >= 0, n = r && H(e) ? Rt(e) : e;
  return Me(n) ? t.filter(function(i) {
    return Me(i) && kl(i, n) && Z(i) !== "body";
  }) : [];
}
function Ul(e, t, r) {
  var n = t === "clippingParents" ? Wl(e) : [].concat(t), i = [].concat(n, [r]), o = i[0], a = i.reduce(function(s, l) {
    var u = fn(e, l);
    return s.top = xe(u.top, s.top), s.right = Tt(u.right, s.right), s.bottom = Tt(u.bottom, s.bottom), s.left = xe(u.left, s.left), s;
  }, fn(e, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function He(e) {
  return e.split("-")[1];
}
function pi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function hi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ie(n) : null, o = n ? He(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case U:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ee:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ye:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ne:
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
  var u = i ? pi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case ke:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case at:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function vi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vl(e) {
  return Object.assign({}, vi(), e);
}
function Gl(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Lr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.boundary, a = o === void 0 ? wl : o, s = r.rootBoundary, l = s === void 0 ? di : s, u = r.elementContext, c = u === void 0 ? Xe : u, f = r.altBoundary, p = f === void 0 ? !1 : f, d = r.padding, h = d === void 0 ? 0 : d, y = Vl(typeof h != "number" ? h : Gl(h, Lt)), w = c === Xe ? Ol : Xe, x = e.rects.popper, A = e.elements[p ? w : c], P = Ul(Me(A) ? A : A.contextElement || we(e.elements.popper), a, l), E = qe(e.elements.reference), $ = hi({
    reference: E,
    element: x,
    strategy: "absolute",
    placement: i
  }), v = tr(Object.assign({}, x, $)), m = c === Xe ? v : E, b = {
    top: P.top - m.top + y.top,
    bottom: m.bottom - P.bottom + y.bottom,
    left: P.left - m.left + y.left,
    right: m.right - P.right + y.right
  }, _ = e.modifiersData.offset;
  if (c === Xe && _) {
    var S = _[i];
    Object.keys(b).forEach(function(T) {
      var I = [ye, ee].indexOf(T) >= 0 ? 1 : -1, F = [U, ee].indexOf(T) >= 0 ? "y" : "x";
      b[T] += S[F] * I;
    });
  }
  return b;
}
var dn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", zl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", pn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Kl(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? pn : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, pn, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, d = {
      state: c,
      setOptions: function(x) {
        var A = typeof x == "function" ? x(c.options) : x;
        y(), c.options = Object.assign({}, o, c.options, A), c.scrollParents = {
          reference: Me(s) ? et(s) : s.contextElement ? et(s.contextElement) : [],
          popper: et(l)
        };
        var P = jl(Ml([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(T) {
          return T.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Ll([].concat(P, c.options.modifiers), function(T) {
            var I = T.name;
            return I;
          });
          if (Bl(E), ie(c.options.placement) === Bt) {
            var $ = c.orderedModifiers.find(function(T) {
              var I = T.name;
              return I === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var v = G(l), m = v.marginTop, b = v.marginRight, _ = v.marginBottom, S = v.marginLeft;
          [m, b, _, S].some(function(T) {
            return parseFloat(T);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var x = c.elements, A = x.reference, P = x.popper;
          if (!hn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(dn);
            return;
          }
          c.rects = {
            reference: gl(A, Rt(P), c.options.strategy === "fixed"),
            popper: ci(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var E = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(zl);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var v = c.orderedModifiers[$], m = v.fn, b = v.options, _ = b === void 0 ? {} : b, S = v.name;
            typeof m == "function" && (c = m({
              state: c,
              options: _,
              name: S,
              instance: d
            }) || c);
          }
        }
      },
      update: Fl(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!hn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(dn), d;
    d.setOptions(u).then(function(w) {
      !p && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h() {
      c.orderedModifiers.forEach(function(w) {
        var x = w.name, A = w.options, P = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var $ = E({
            state: c,
            name: x,
            instance: d,
            options: P
          }), v = function() {
          };
          f.push($ || v);
        }
      });
    }
    function y() {
      f.forEach(function(w) {
        return w();
      }), f = [];
    }
    return d;
  };
}
var gt = {
  passive: !0
};
function Xl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = K(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, gt);
  }), s && l.addEventListener("resize", r.update, gt), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, gt);
    }), s && l.removeEventListener("resize", r.update, gt);
  };
}
const Ql = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xl,
  data: {}
};
function Yl(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = hi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Jl = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yl,
  data: {}
};
var Zl = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function eu(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Ne(t * i) / i || 0,
    y: Ne(r * i) / i || 0
  };
}
function vn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, h = a.y, y = h === void 0 ? 0 : h, w = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = w.x, y = w.y;
  var x = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = ne, E = U, $ = window;
  if (u) {
    var v = Rt(r), m = "clientHeight", b = "clientWidth";
    if (v === K(r) && (v = we(r), G(v).position !== "static" && s === "absolute" && (m = "scrollHeight", b = "scrollWidth")), v = v, i === U || (i === ne || i === ye) && o === at) {
      E = ee;
      var _ = f && v === $ && $.visualViewport ? $.visualViewport.height : v[m];
      y -= _ - n.height, y *= l ? 1 : -1;
    }
    if (i === ne || (i === U || i === ee) && o === at) {
      P = ye;
      var S = f && v === $ && $.visualViewport ? $.visualViewport.width : v[b];
      d -= S - n.width, d *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: s
  }, u && Zl), I = c === !0 ? eu({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = I.x, y = I.y, l) {
    var F;
    return Object.assign({}, T, (F = {}, F[E] = A ? "0" : "", F[P] = x ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", F));
  }
  return Object.assign({}, T, (t = {}, t[E] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function tu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = G(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ie(t.placement),
    variation: He(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ru = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tu,
  data: {}
};
function nu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !H(o) || !Z(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function iu(e) {
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
      !H(i) || !Z(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const ou = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nu,
  effect: iu,
  requires: ["computeStyles"]
};
var au = [Ql, Jl, ru, ou], su = /* @__PURE__ */ Kl({
  defaultModifiers: au
});
function lu(e) {
  return e === "x" ? "y" : "x";
}
function Ot(e, t, r) {
  return xe(e, Tt(t, r));
}
function uu(e, t, r) {
  var n = Ot(e, t, r);
  return n > r ? r : n;
}
function cu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, h = r.tetherOffset, y = h === void 0 ? 0 : h, w = Lr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = ie(t.placement), A = He(t.placement), P = !A, E = pi(x), $ = lu(E), v = t.modifiersData.popperOffsets, m = t.rects.reference, b = t.rects.popper, _ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, S = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!v) {
    if (o) {
      var F, re = E === "y" ? U : ne, ce = E === "y" ? ee : ye, R = E === "y" ? "height" : "width", N = v[E], dt = N + w[re], Oe = N - w[ce], pt = d ? -b[R] / 2 : 0, qt = A === ke ? m[R] : b[R], Ge = A === ke ? -b[R] : -m[R], ht = t.elements.arrow, Fe = d && ht ? ci(ht) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vi(), ze = fe[re], vt = fe[ce], Se = Ot(0, m[R], Fe[R]), kt = P ? m[R] / 2 - pt - Se - ze - S.mainAxis : qt - Se - ze - S.mainAxis, Xi = P ? -m[R] / 2 + pt + Se + vt + S.mainAxis : Ge + Se + vt + S.mainAxis, Ht = t.elements.arrow && Rt(t.elements.arrow), Qi = Ht ? E === "y" ? Ht.clientTop || 0 : Ht.clientLeft || 0 : 0, Wr = (F = T == null ? void 0 : T[E]) != null ? F : 0, Yi = N + kt - Wr - Qi, Ji = N + Xi - Wr, Ur = Ot(d ? Tt(dt, Yi) : dt, N, d ? xe(Oe, Ji) : Oe);
      v[E] = Ur, I[E] = Ur - N;
    }
    if (s) {
      var Vr, Zi = E === "x" ? U : ne, eo = E === "x" ? ee : ye, Ee = v[$], mt = $ === "y" ? "height" : "width", Gr = Ee + w[Zi], zr = Ee - w[eo], Wt = [U, ne].indexOf(x) !== -1, Kr = (Vr = T == null ? void 0 : T[$]) != null ? Vr : 0, Xr = Wt ? Gr : Ee - m[mt] - b[mt] - Kr + S.altAxis, Qr = Wt ? Ee + m[mt] + b[mt] - Kr - S.altAxis : zr, Yr = d && Wt ? uu(Xr, Ee, Qr) : Ot(d ? Xr : Gr, Ee, d ? Qr : zr);
      v[$] = Yr, I[$] = Yr - Ee;
    }
    t.modifiersData[n] = I;
  }
}
const fu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cu,
  requiresIfExists: ["offset"]
};
var du = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return du[t];
  });
}
var pu = {
  start: "end",
  end: "start"
};
function mn(e) {
  return e.replace(/start|end/g, function(t) {
    return pu[t];
  });
}
function hu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Sl : l, c = He(n), f = c ? s ? un : un.filter(function(h) {
    return He(h) === c;
  }) : Lt, p = f.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(h, y) {
    return h[y] = Lr(e, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[ie(y)], h;
  }, {});
  return Object.keys(d).sort(function(h, y) {
    return d[h] - d[y];
  });
}
function vu(e) {
  if (ie(e) === Bt)
    return [];
  var t = St(e);
  return [mn(e), t, mn(t)];
}
function mu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, w = t.options.placement, x = ie(w), A = x === w, P = l || (A || !h ? [St(w)] : vu(w)), E = [w].concat(P).reduce(function(Fe, fe) {
      return Fe.concat(ie(fe) === Bt ? hu(t, {
        placement: fe,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : fe);
    }, []), $ = t.rects.reference, v = t.rects.popper, m = /* @__PURE__ */ new Map(), b = !0, _ = E[0], S = 0; S < E.length; S++) {
      var T = E[S], I = ie(T), F = He(T) === ke, re = [U, ee].indexOf(I) >= 0, ce = re ? "width" : "height", R = Lr(t, {
        placement: T,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = re ? F ? ye : ne : F ? ee : U;
      $[ce] > v[ce] && (N = St(N));
      var dt = St(N), Oe = [];
      if (o && Oe.push(R[I] <= 0), s && Oe.push(R[N] <= 0, R[dt] <= 0), Oe.every(function(Fe) {
        return Fe;
      })) {
        _ = T, b = !1;
        break;
      }
      m.set(T, Oe);
    }
    if (b)
      for (var pt = h ? 3 : 1, qt = function(fe) {
        var ze = E.find(function(vt) {
          var Se = m.get(vt);
          if (Se)
            return Se.slice(0, fe).every(function(kt) {
              return kt;
            });
        });
        if (ze)
          return _ = ze, "break";
      }, Ge = pt; Ge > 0; Ge--) {
        var ht = qt(Ge);
        if (ht === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const gu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, yu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, bu = {
  components: {
    OnClickOutside: pl
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start",
      required: !1
    },
    active: {
      type: Boolean,
      default: !1,
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
    this.popper = su(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [gu, fu]
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
}, wu = { ref: "button" }, Ou = { ref: "tooltip" };
function Su(e, t, r, n, i, o) {
  const a = lo("OnClickOutside");
  return W(), Be(a, { do: o.hide }, {
    default: Nn(() => [
      Yt("button", wu, [
        $t(e.$slots, "button", { toggle: o.toggle })
      ], 512),
      uo(Yt("div", Ou, [
        $t(e.$slots, "default", { hide: o.hide })
      ], 512), [
        [co, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const Eu = /* @__PURE__ */ yu(bu, [["render", Su]]);
function V(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, V), n;
}
var _t = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_t || {}), ve = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ve || {});
function k({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = $u(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return zt(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return V(l, { [0]() {
      return null;
    }, [1]() {
      return zt({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return zt(s);
}
function zt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = gi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (a === "template") {
    if (l = mi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!Tu(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return fo(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return j(a, Object.assign({}, s, u), l);
}
function mi(e) {
  return e.flatMap((t) => t.type === gr ? mi(t.children) : [t]);
}
function $u(...e) {
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
function gi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Tu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let _u = 0;
function xu() {
  return ++_u;
}
function je() {
  return xu();
}
var yi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(yi || {});
function se(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let bi = Symbol("Context");
var Ce = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ce || {});
function Au() {
  return Mr() !== null;
}
function Mr() {
  return z(bi, null);
}
function Pu(e) {
  Y(bi, e);
}
function Ve(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = se(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let rr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var st = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(st || {}), wi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(wi || {}), Cu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Cu || {});
function Du(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(rr));
}
var Oi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Oi || {});
function Iu(e, t = 0) {
  var r;
  return e === ((r = Ve(e)) == null ? void 0 : r.body) ? !1 : V(t, { [0]() {
    return e.matches(rr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(rr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function tt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ju = ["textarea", "input"].join(",");
function Fu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ju)) != null ? r : !1;
}
function Ru(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function nr(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Ru(e) : e : Du(e), a = i.activeElement, s = (() => {
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
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && Fu(p) && p.select(), 2;
}
function ir(e, t, r) {
  typeof window < "u" && J((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Bu(e, t, r = D(() => !0)) {
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
      let u = l instanceof HTMLElement ? l : se(l);
      if (u != null && u.contains(a))
        return;
    }
    return !Iu(a, Oi.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  ir("click", (i) => n(i, (o) => o.target), !0), ir("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xt || {});
let or = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return k({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var ar = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ar || {});
function Lu() {
  let e = O(0);
  return ir("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Si(e, t, r, n) {
  typeof window < "u" && J((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var Ei = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ei || {});
let Qe = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: O(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = O(null);
  n({ el: i, $el: i });
  let o = D(() => Ve(i));
  Mu({ ownerDocument: o }, D(() => Boolean(e.features & 16)));
  let a = Nu({ ownerDocument: o, container: i, initialFocus: D(() => e.initialFocus) }, D(() => Boolean(e.features & 2)));
  qu({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, D(() => Boolean(e.features & 8)));
  let s = Lu();
  function l() {
    let u = se(i);
    !u || V(s.value, { [ar.Forwards]: () => nr(u, st.First), [ar.Backwards]: () => nr(u, st.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...h } = e;
    return j(gr, [Boolean(f & 4) && j(or, { as: "button", type: "button", onFocus: l, features: xt.Focusable }), k({ ourProps: c, theirProps: { ...t, ...h }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && j(or, { as: "button", type: "button", onFocus: l, features: xt.Focusable })]);
  };
} }), { features: Ei });
function Mu({ ownerDocument: e }, t) {
  let r = O(null), n = { value: !1 };
  M(() => {
    rt(t, (i, o) => {
      var a;
      i !== o && (!t.value || (n.value = !0, r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement)));
    }, { immediate: !0 }), rt(t, (i, o, a) => {
      i !== o && (!t.value || a(() => {
        n.value !== !1 && (n.value = !1, tt(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function Nu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = O(null);
  return M(() => {
    rt([t, r, n], (o, a) => {
      if (o.every((l, u) => (a == null ? void 0 : a[u]) === l) || !n.value)
        return;
      let s = se(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = se(r), f = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (s.contains(f)) {
          i.value = f;
          return;
        }
        c ? tt(c) : nr(s, st.First | st.NoScroll) === wi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function qu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var o;
  Si((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? ku(s, u) ? (n.value = u, tt(u)) : (a.preventDefault(), a.stopPropagation(), tt(l)) : tt(n.value);
  }, !0);
}
function ku(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let gn = "body > *", Re = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map();
function yn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function bn(e) {
  let t = pe.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Hu(e, t = O(!0)) {
  J((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ve(n);
    if (i) {
      Re.add(n);
      for (let o of pe.keys())
        o.contains(n) && (bn(o), pe.delete(o));
      i.querySelectorAll(gn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of Re)
            if (o.contains(a))
              return;
          Re.size === 1 && (pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), yn(o));
        }
      }), r(() => {
        if (Re.delete(n), Re.size > 0)
          i.querySelectorAll(gn).forEach((o) => {
            if (o instanceof HTMLElement && !pe.has(o)) {
              for (let a of Re)
                if (o.contains(a))
                  return;
              pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), yn(o);
            }
          });
        else
          for (let o of pe.keys())
            bn(o), pe.delete(o);
      });
    }
  });
}
let $i = Symbol("ForcePortalRootContext");
function Wu() {
  return z($i, !1);
}
let sr = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Y($i, e.force), () => {
    let { force: n, ...i } = e;
    return k({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Uu(e) {
  let t = Ve(e);
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
let Ti = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = O(null), i = D(() => Ve(n)), o = Wu(), a = z(_i, null), s = O(o === !0 || a == null ? Uu(n.value) : a.resolveTarget());
  return J(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), We(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return j(po, { to: s.value }, k({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), _i = Symbol("PortalGroupContext"), Vu = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ho({ resolveTarget() {
    return e.target;
  } });
  return Y(_i, n), () => {
    let { target: i, ...o } = e;
    return k({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), xi = Symbol("StackContext");
var lr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lr || {});
function Gu() {
  return z(xi, () => {
  });
}
function zu({ type: e, element: t, onUpdate: r }) {
  let n = Gu();
  function i(...o) {
    r == null || r(...o), n(...o);
  }
  M(() => {
    i(0, e, t), We(() => {
      i(1, e, t);
    });
  }), Y(xi, i);
}
let Ai = Symbol("DescriptionContext");
function Ku() {
  let e = z(Ai, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xu({ slot: e = O({}), name: t = "Description", props: r = {} } = {}) {
  let n = O([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return Y(Ai, { register: i, slot: e, name: t, props: r }), D(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let cd = q({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ku(), i = `headlessui-description-${je()}`;
  return M(() => We(n.register(i))), () => {
    let { name: o = "Description", slot: a = O({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: he(p) }), {}), id: i };
    return k({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
var Qu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Qu || {});
let ur = Symbol("DialogContext");
function ut(e) {
  let t = z(ur, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ut), r;
  }
  return t;
}
let yt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Pi = q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: yt }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = O(!1);
  M(() => {
    a.value = !0;
  });
  let s = O(0), l = Mr(), u = D(() => e.open === yt && l !== null ? V(l.value, { [Ce.Open]: !0, [Ce.Closed]: !1 }) : e.open), c = O(/* @__PURE__ */ new Set()), f = O(null), p = O(null), d = D(() => Ve(f));
  if (i({ el: f, $el: f }), !(e.open !== yt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === yt ? void 0 : e.open}`);
  let h = D(() => a.value && u.value ? 0 : 1), y = D(() => h.value === 0), w = D(() => s.value > 1), x = z(ur, null) !== null, A = D(() => w.value ? "parent" : "leaf");
  Hu(f, D(() => w.value ? y.value : !1)), zu({ type: "Dialog", element: f, onUpdate: (m, b, _) => {
    if (b === "Dialog")
      return V(m, { [lr.Add]() {
        c.value.add(_), s.value += 1;
      }, [lr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Xu({ name: "DialogDescription", slot: D(() => ({ open: u.value })) }), E = `headlessui-dialog-${je()}`, $ = O(null), v = { titleId: $, panelRef: O(null), dialogState: h, setTitleId(m) {
    $.value !== m && ($.value = m);
  }, close() {
    t("close", !1);
  } };
  return Y(ur, v), Bu(() => {
    var m, b, _;
    return [...Array.from((b = (m = d.value) == null ? void 0 : m.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b : []).filter((S) => !(!(S instanceof HTMLElement) || S.contains(se(p)) || v.panelRef.value && S.contains(v.panelRef.value))), (_ = v.panelRef.value) != null ? _ : f.value];
  }, (m, b) => {
    v.close(), Et(() => b == null ? void 0 : b.focus());
  }, D(() => h.value === 0 && !w.value)), Si((o = d.value) == null ? void 0 : o.defaultView, "keydown", (m) => {
    m.defaultPrevented || m.key === yi.Escape && h.value === 0 && (w.value || (m.preventDefault(), m.stopPropagation(), v.close()));
  }), J((m) => {
    var b;
    if (h.value !== 0 || x)
      return;
    let _ = d.value;
    if (!_)
      return;
    let S = _ == null ? void 0 : _.documentElement, T = (b = _.defaultView) != null ? b : window, I = S.style.overflow, F = S.style.paddingRight, re = T.innerWidth - S.clientWidth;
    if (S.style.overflow = "hidden", re > 0) {
      let ce = S.clientWidth - S.offsetWidth, R = re - ce;
      S.style.paddingRight = `${R}px`;
    }
    m(() => {
      S.style.overflow = I, S.style.paddingRight = F;
    });
  }), J((m) => {
    if (h.value !== 0)
      return;
    let b = se(f);
    if (!b)
      return;
    let _ = new IntersectionObserver((S) => {
      for (let T of S)
        T.boundingClientRect.x === 0 && T.boundingClientRect.y === 0 && T.boundingClientRect.width === 0 && T.boundingClientRect.height === 0 && v.close();
    });
    _.observe(b), m(() => _.disconnect());
  }), () => {
    let m = { ...r, ref: f, id: E, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: b, initialFocus: _, ...S } = e, T = { open: h.value === 0 };
    return j(sr, { force: !0 }, () => [j(Ti, () => j(Vu, { target: f.value }, () => j(sr, { force: !1 }, () => j(Qe, { initialFocus: _, containers: c, features: y.value ? V(A.value, { parent: Qe.features.RestoreFocus, leaf: Qe.features.All & ~Qe.features.FocusLock }) : Qe.features.None }, () => k({ ourProps: m, theirProps: S, slot: T, attrs: r, slots: n, visible: h.value === 0, features: _t.RenderStrategy | _t.Static, name: "Dialog" }))))), j(or, { features: xt.Hidden, ref: p })]);
  };
} });
q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = ut("DialogOverlay"), i = `headlessui-dialog-overlay-${je()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => k({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ut("DialogBackdrop"), o = `headlessui-dialog-backdrop-${je()}`, a = O(null);
  return n({ el: a, $el: a }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return j(sr, { force: !0 }, () => j(Ti, () => k({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Ci = q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ut("DialogPanel"), o = `headlessui-dialog-panel-${je()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: i.panelRef, onClick: a };
    return k({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
q({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = ut("DialogTitle"), i = `headlessui-dialog-title-${je()}`;
  return M(() => {
    n.setTitleId(i), We(() => n.setTitleId(null));
  }), () => k({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Yu(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Di() {
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
function Kt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function bt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var cr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(cr || {});
function Ju(e, t) {
  let r = Di();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function wn(e, t, r, n, i, o) {
  let a = Di(), s = o !== void 0 ? Yu(o) : () => {
  };
  return bt(e, ...i), Kt(e, ...t, ...r), a.nextFrame(() => {
    bt(e, ...r), Kt(e, ...n), a.add(Ju(e, (l) => (bt(e, ...n, ...t), Kt(e, ...i), s(l))));
  }), a.add(() => bt(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Te(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Nr = Symbol("TransitionContext");
var Zu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Zu || {});
function ec() {
  return z(Nr, null) !== null;
}
function tc() {
  let e = z(Nr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function rc() {
  let e = z(qr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let qr = Symbol("NestingContext");
function Mt(e) {
  return "children" in e ? Mt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ii(e) {
  let t = O([]), r = O(!1);
  M(() => r.value = !0), We(() => r.value = !1);
  function n(o, a = ve.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (V(a, { [ve.Unmount]() {
      t.value.splice(s, 1);
    }, [ve.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Mt(t) && r.value && (e == null || e()));
  }
  function i(o) {
    let a = t.value.find(({ id: s }) => s === o);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, ve.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let ji = _t.RenderStrategy, ct = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!ec() && Au())
    return () => j(ft, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = O(null), a = O("visible"), s = D(() => e.unmount ? ve.Unmount : ve.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = tc(), { register: c, unregister: f } = rc(), p = { value: !0 }, d = je(), h = { value: !1 }, y = Ii(() => {
    h.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let b = c(d);
    We(b);
  }), J(() => {
    if (s.value === ve.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      V(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let w = Te(e.enter), x = Te(e.enterFrom), A = Te(e.enterTo), P = Te(e.entered), E = Te(e.leave), $ = Te(e.leaveFrom), v = Te(e.leaveTo);
  M(() => {
    J(() => {
      if (a.value === "visible") {
        let b = se(o);
        if (b instanceof Comment && b.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function m(b) {
    let _ = p.value && !u.value, S = se(o);
    !S || !(S instanceof HTMLElement) || _ || (h.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), b(l.value ? wn(S, w, x, A, P, (T) => {
      h.value = !1, T === cr.Finished && t("afterEnter");
    }) : wn(S, E, $, v, P, (T) => {
      h.value = !1, T === cr.Finished && (Mt(y) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    rt([l], (b, _, S) => {
      m(S), p.value = !1;
    }, { immediate: !0 });
  }), Y(qr, y), Pu(D(() => V(a.value, { visible: Ce.Open, hidden: Ce.Closed }))), () => {
    let { appear: b, show: _, enter: S, enterFrom: T, enterTo: I, entered: F, leave: re, leaveFrom: ce, leaveTo: R, ...N } = e;
    return k({ theirProps: N, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: ji, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), nc = ct, ft = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Mr(), o = D(() => e.show === null && i !== null ? V(i.value, { [Ce.Open]: !0, [Ce.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = O(o.value ? "visible" : "hidden"), s = Ii(() => {
    a.value = "hidden";
  }), l = O(!0), u = { show: o, appear: D(() => e.appear || !l.value) };
  return M(() => {
    J(() => {
      l.value = !1, o.value ? a.value = "visible" : Mt(s) || (a.value = "hidden");
    });
  }), Y(qr, s), Y(Nr, u), () => {
    let c = gi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return k({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [j(nc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: ji, visible: a.value === "visible", name: "Transition" });
  };
} });
const ic = {
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
    hasConfirmModal: () => !!g.confirmModal.value,
    title: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.title ? g.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.text ? g.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.confirmButton ? g.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = g.confirmModal.value) != null && e.cancelButton ? g.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      g.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      g.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      g.clearConfirmModal();
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
      Dialog: Pi,
      DialogPanel: Ci,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
};
function Fi(e, t) {
  t = Ir(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[lt(t[r++])];
  return r && r == n ? e : void 0;
}
function kr(e, t, r) {
  var n = e == null ? void 0 : Fi(e, t);
  return n === void 0 ? r : n;
}
var oc = function() {
  try {
    var e = Ie(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const On = oc;
function Ri(e, t, r) {
  t == "__proto__" && On ? On(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var ac = Object.prototype, sc = ac.hasOwnProperty;
function lc(e, t, r) {
  var n = e[t];
  (!(sc.call(e, t) && Pr(n, r)) || r === void 0 && !(t in e)) && Ri(e, t, r);
}
function uc(e, t, r, n) {
  if (!ae(e))
    return e;
  t = Ir(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = lt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ae(c) ? c : yr(t[i + 1]) ? [] : {});
    }
    lc(s, l, u), s = s[l];
  }
  return e;
}
function Bi(e, t, r) {
  return e == null ? e : uc(e, t, r);
}
const cc = {
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
      let e = g.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && g.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return kr(e.values, r);
        },
        set(t, r, n) {
          Bi(e.values, r, n);
        }
      })
    );
  }
}, fc = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Mn(e).then((t) => {
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
};
function Li(e) {
  return e && e.length ? e[0] : void 0;
}
const dc = {
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
        return Li(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, pc = {
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
        Je(r, (u) => {
          !ae(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
        }), a ? g.visit(a) : s ? g.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          g.pushToast(u);
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
}, hc = {
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
function fr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => fr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => fr(t));
}
function Mi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && qi(t, Ni(null, r), e[r]);
  return t;
}
function Ni(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function qi(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => qi(e, Ni(t, n.toString()), r[n]));
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
  Mi(r);
}
var vc = "[object Boolean]";
function ki(e) {
  return e === !0 || e === !1 || ge(e) && be(e) == vc;
}
function mc() {
  this.__data__ = new le(), this.size = 0;
}
function gc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function yc(e) {
  return this.__data__.get(e);
}
function bc(e) {
  return this.__data__.has(e);
}
var wc = 200;
function Oc(e, t) {
  var r = this.__data__;
  if (r instanceof le) {
    var n = r.__data__;
    if (!ot || n.length < wc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ue(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function oe(e) {
  var t = this.__data__ = new le(e);
  this.size = t.size;
}
oe.prototype.clear = mc;
oe.prototype.delete = gc;
oe.prototype.get = yc;
oe.prototype.has = bc;
oe.prototype.set = Oc;
var Sc = "__lodash_hash_undefined__";
function Ec(e) {
  return this.__data__.set(e, Sc), this;
}
function $c(e) {
  return this.__data__.has(e);
}
function At(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ue(); ++t < r; )
    this.add(e[t]);
}
At.prototype.add = At.prototype.push = Ec;
At.prototype.has = $c;
function Tc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function _c(e, t) {
  return e.has(t);
}
var xc = 1, Ac = 2;
function Hi(e, t, r, n, i, o) {
  var a = r & xc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Ac ? new At() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var h = e[f], y = t[f];
    if (n)
      var w = a ? n(y, h, f, t, e, o) : n(h, y, f, e, t, o);
    if (w !== void 0) {
      if (w)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!Tc(t, function(x, A) {
        if (!_c(d, A) && (h === x || i(h, x, r, n, o)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === y || i(h, y, r, n, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
var Pc = te.Uint8Array;
const Sn = Pc;
function Cc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Dc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ic = 1, jc = 2, Fc = "[object Boolean]", Rc = "[object Date]", Bc = "[object Error]", Lc = "[object Map]", Mc = "[object Number]", Nc = "[object RegExp]", qc = "[object Set]", kc = "[object String]", Hc = "[object Symbol]", Wc = "[object ArrayBuffer]", Uc = "[object DataView]", En = me ? me.prototype : void 0, Xt = En ? En.valueOf : void 0;
function Vc(e, t, r, n, i, o, a) {
  switch (r) {
    case Uc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Wc:
      return !(e.byteLength != t.byteLength || !o(new Sn(e), new Sn(t)));
    case Fc:
    case Rc:
    case Mc:
      return Pr(+e, +t);
    case Bc:
      return e.name == t.name && e.message == t.message;
    case Nc:
    case kc:
      return e == t + "";
    case Lc:
      var s = Cc;
    case qc:
      var l = n & Ic;
      if (s || (s = Dc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= jc, a.set(e, t);
      var c = Hi(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case Hc:
      if (Xt)
        return Xt.call(e) == Xt.call(t);
  }
  return !1;
}
function Gc(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function zc(e, t, r) {
  var n = t(e);
  return B(e) ? n : Gc(n, r(e));
}
function Wi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function Kc() {
  return [];
}
var Xc = Object.prototype, Qc = Xc.propertyIsEnumerable, $n = Object.getOwnPropertySymbols, Yc = $n ? function(e) {
  return e == null ? [] : (e = Object(e), Wi($n(e), function(t) {
    return Qc.call(e, t);
  }));
} : Kc;
const Jc = Yc;
function Tn(e) {
  return zc(e, Or, Jc);
}
var Zc = 1, ef = Object.prototype, tf = ef.hasOwnProperty;
function rf(e, t, r, n, i, o) {
  var a = r & Zc, s = Tn(e), l = s.length, u = Tn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : tf.call(t, p)))
      return !1;
  }
  var d = o.get(e), h = o.get(t);
  if (d && h)
    return d == t && h == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var w = a; ++f < l; ) {
    p = s[f];
    var x = e[p], A = t[p];
    if (n)
      var P = a ? n(A, x, p, t, e, o) : n(x, A, p, e, t, o);
    if (!(P === void 0 ? x === A || i(x, A, r, n, o) : P)) {
      y = !1;
      break;
    }
    w || (w = p == "constructor");
  }
  if (y && !w) {
    var E = e.constructor, $ = t.constructor;
    E != $ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof $ == "function" && $ instanceof $) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var nf = Ie(te, "DataView");
const dr = nf;
var of = Ie(te, "Promise");
const pr = of;
var af = Ie(te, "Set");
const hr = af;
var sf = Ie(te, "WeakMap");
const vr = sf;
var _n = "[object Map]", lf = "[object Object]", xn = "[object Promise]", An = "[object Set]", Pn = "[object WeakMap]", Cn = "[object DataView]", uf = De(dr), cf = De(ot), ff = De(pr), df = De(hr), pf = De(vr), _e = be;
(dr && _e(new dr(new ArrayBuffer(1))) != Cn || ot && _e(new ot()) != _n || pr && _e(pr.resolve()) != xn || hr && _e(new hr()) != An || vr && _e(new vr()) != Pn) && (_e = function(e) {
  var t = be(e), r = t == lf ? e.constructor : void 0, n = r ? De(r) : "";
  if (n)
    switch (n) {
      case uf:
        return Cn;
      case cf:
        return _n;
      case ff:
        return xn;
      case df:
        return An;
      case pf:
        return Pn;
    }
  return t;
});
const Dn = _e;
var hf = 1, In = "[object Arguments]", jn = "[object Array]", wt = "[object Object]", vf = Object.prototype, Fn = vf.hasOwnProperty;
function mf(e, t, r, n, i, o) {
  var a = B(e), s = B(t), l = a ? jn : Dn(e), u = s ? jn : Dn(t);
  l = l == In ? wt : l, u = u == In ? wt : u;
  var c = l == wt, f = u == wt, p = l == u;
  if (p && Jt(e)) {
    if (!Jt(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new oe()), a || Gn(e) ? Hi(e, t, r, n, i, o) : Vc(e, t, l, r, n, i, o);
  if (!(r & hf)) {
    var d = c && Fn.call(e, "__wrapped__"), h = f && Fn.call(t, "__wrapped__");
    if (d || h) {
      var y = d ? e.value() : e, w = h ? t.value() : t;
      return o || (o = new oe()), i(y, w, r, n, o);
    }
  }
  return p ? (o || (o = new oe()), rf(e, t, r, n, i, o)) : !1;
}
function Nt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ge(e) && !ge(t) ? e !== e && t !== t : mf(e, t, r, n, Nt, i);
}
var gf = 1, yf = 2;
function bf(e, t, r, n) {
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
      var f = new oe();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Nt(c, u, gf | yf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Ui(e) {
  return e === e && !ae(e);
}
function wf(e) {
  for (var t = Or(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Ui(i)];
  }
  return t;
}
function Vi(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Of(e) {
  var t = wf(e);
  return t.length == 1 && t[0][2] ? Vi(t[0][0], t[0][1]) : function(r) {
    return r === e || bf(r, e, t);
  };
}
function Sf(e, t) {
  return e != null && t in Object(e);
}
function Ef(e, t) {
  return e != null && ui(e, t, Sf);
}
var $f = 1, Tf = 2;
function _f(e, t) {
  return Ar(e) && Ui(t) ? Vi(lt(e), t) : function(r) {
    var n = kr(r, e);
    return n === void 0 && n === t ? Ef(r, e) : Nt(t, n, $f | Tf);
  };
}
function xf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Af(e) {
  return function(t) {
    return Fi(t, e);
  };
}
function Pf(e) {
  return Ar(e) ? xf(lt(e)) : Af(e);
}
function Hr(e) {
  return typeof e == "function" ? e : e == null ? Kn : typeof e == "object" ? B(e) ? _f(e[0], e[1]) : Of(e) : Pf(e);
}
function Gi(e, t) {
  var r = {};
  return t = Hr(t), Sr(e, function(n, i, o) {
    Ri(r, i, t(n, i, o));
  }), r;
}
const Cf = {
  inject: ["stack"],
  props: {
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
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null
    };
  },
  computed: {
    rawErrors() {
      return g.validationErrors(this.stack);
    },
    errors() {
      return Gi(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return X(this.errors, e);
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    submit() {
      if (!this.confirm)
        return this.request();
      g.confirm(
        ki(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || fr(this.values) ? Mi(this.values) : this.values;
      g.request(this.action, this.method.toUpperCase(), e, {
        Accept: "application/json"
      }).then((t) => {
        this.$emit("success", t), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      }).catch((t) => {
        this.processing = !1, this.$emit("error", t);
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
              "$attrs",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) ? e[r] : kr(e.values, r);
          },
          set(t, r, n) {
            Bi(e.values, r, n);
          }
        }
      )
    );
  }
}, Df = ["href", "onClick"], If = {
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
      g.confirm(
        ki(t.confirm) ? "" : t.confirm,
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
        return g.modal(t.href);
      if (t.slideover)
        return g.slideover(t.href);
      g.visit(t.href);
    }
    return (i, o) => (W(), nt("a", {
      href: e.href,
      onClick: vo(r, ["prevent"])
    }, [
      $t(i.$slots, "default")
    ], 8, Df));
  }
}, jf = {
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
      Dialog: Pi,
      DialogPanel: Ci,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
}, Ff = {
  inject: ["stack"],
  render() {
    const e = g.validationErrors(this.stack), t = g.flashData(this.stack), r = g.sharedData.value, n = Gi(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return X(e, i);
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
var Rf = function() {
  return te.Date.now();
};
const Qt = Rf;
var Bf = /\s/;
function Lf(e) {
  for (var t = e.length; t-- && Bf.test(e.charAt(t)); )
    ;
  return t;
}
var Mf = /^\s+/;
function Nf(e) {
  return e && e.slice(0, Lf(e) + 1).replace(Mf, "");
}
var Rn = 0 / 0, qf = /^[-+]0x[0-9a-f]+$/i, kf = /^0b[01]+$/i, Hf = /^0o[0-7]+$/i, Wf = parseInt;
function mr(e) {
  if (typeof e == "number")
    return e;
  if (Ct(e))
    return Rn;
  if (ae(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ae(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Nf(e);
  var r = kf.test(e);
  return r || Hf.test(e) ? Wf(e.slice(2), r ? 2 : 8) : qf.test(e) ? Rn : +e;
}
var Uf = "Expected a function", Vf = Math.max, Gf = Math.min;
function zf(e, t, r) {
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Uf);
  t = mr(t) || 0, ae(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? Vf(mr(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(v) {
    var m = n, b = i;
    return n = i = void 0, u = v, a = e.apply(b, m), a;
  }
  function h(v) {
    return u = v, s = setTimeout(x, t), c ? d(v) : a;
  }
  function y(v) {
    var m = v - l, b = v - u, _ = t - m;
    return f ? Gf(_, o - b) : _;
  }
  function w(v) {
    var m = v - l, b = v - u;
    return l === void 0 || m >= t || m < 0 || f && b >= o;
  }
  function x() {
    var v = Qt();
    if (w(v))
      return A(v);
    s = setTimeout(x, y(v));
  }
  function A(v) {
    return s = void 0, p && n ? d(v) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? a : A(Qt());
  }
  function $() {
    var v = Qt(), m = w(v);
    if (n = arguments, i = this, l = v, m) {
      if (s === void 0)
        return h(l);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), d(l);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return $.cancel = P, $.flush = E, $;
}
function zi(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
var Bn = 1 / 0, Kf = 17976931348623157e292;
function Xf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = mr(e), e === Bn || e === -Bn) {
    var t = e < 0 ? -1 : 1;
    return t * Kf;
  }
  return e === e ? e : 0;
}
function Ki(e) {
  var t = Xf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function Qf(e, t, r) {
  e = Dr(e), t = jt(t);
  var n = e.length;
  r = r === void 0 ? n : zi(Ki(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Yf(e, t) {
  var r = [];
  return Er(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
  }), r;
}
function Jf(e, t) {
  var r = B(e) ? Wi : Yf;
  return r(e, Hr(t));
}
function Ln(e, t) {
  return Nt(e, t);
}
function Zf(e, t) {
  var r = -1, n = wr(e) ? Array(e.length) : [];
  return Er(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function ed(e, t) {
  var r = B(e) ? li : Zf;
  return r(e, Hr(t));
}
function td(e, t, r) {
  return e = Dr(e), r = r == null ? 0 : zi(Ki(r), 0, e.length), t = jt(t), e.slice(r, r + t.length) == t;
}
const rd = {
  props: {
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
      return !Ln(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const t = this.getCurrentQuery().columns || [];
    t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, Je(e, (t, r) => {
        td(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = Jf(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = ed(r, (i) => i.key).sort();
      Ln(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], Et(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    debounceUpdateQuery: zf(function(e, t, r) {
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
        if (!Qf(i, "]")) {
          t[i] = n[1];
          return;
        }
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], B(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Je(e, (a, s) => {
        if (!B(a)) {
          n[s] = a;
          return;
        }
        a.length !== 0 && a.forEach((l, u) => {
          n[`${s}[${u}]`] = l;
        });
      });
      let i = "";
      Je(n, (a, s) => {
        a === "" || a === null || a === [] || (i && (i += "&"), i += `${s}=${a}`);
      }), i && (i = "?" + i);
      const o = window.location.pathname + i;
      if (!r)
        return g.replaceUrlOfCurrentPage(o);
      g.replace(o).then(() => {
        typeof t < "u" && t && Et(() => {
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
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: g.visit
    });
  }
}, nd = {
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
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
}, id = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], od = {
  computed: {
    toasts: function() {
      return g.toastsReversed.value;
    },
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
      positions: id,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: Ze,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
}, ad = {
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
            if (n.length === 1 && Li(n) === "default") {
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
}, fd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = X(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = X(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = X(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = X(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, Eu).component(`${r}Confirm`, ic).component(`${r}Data`, cc).component(`${r}Defer`, fc).component(`${r}Errors`, dc).component(`${r}Event`, pc).component(`${r}Flash`, hc).component(`${r}Form`, Cf).component(`${r}Modal`, jf).component(`${r}Render`, Ze).component(`${r}State`, Ff).component(`${r}Table`, rd).component(`${r}Toast`, nd).component(`${r}Toasts`, od).component(`${r}Toggle`, ad).component(t.link_component, If), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => g }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function dd(e, t, r) {
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
  g as Splade,
  ds as SpladeApp,
  fd as SpladePlugin,
  ud as renderSpladeApp,
  dd as startServer
};
