import Nn from "axios";
import { ref as S, computed as D, watch as rt, openBlock as V, createBlock as Le, unref as he, h as R, onMounted as M, createElementBlock as nt, createElementVNode as Yt, provide as Z, inject as X, nextTick as Et, resolveDynamicComponent as no, KeepAlive as io, withCtx as qn, normalizeStyle as oo, createVNode as ao, Fragment as yr, renderList as so, createCommentVNode as lo, onBeforeUnmount as uo, renderSlot as $t, resolveComponent as co, withDirectives as fo, vShow as po, cloneVNode as ho, watchEffect as ee, defineComponent as q, onUnmounted as We, Teleport as vo, reactive as mo, withModifiers as go } from "vue";
function yo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function bo(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var l = a[e ? s : ++i];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var wo = bo();
const Oo = wo;
function So(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Eo = typeof global == "object" && global && global.Object === Object && global;
const kn = Eo;
var $o = typeof self == "object" && self && self.Object === Object && self, To = kn || $o || Function("return this")();
const ne = To;
var _o = ne.Symbol;
const me = _o;
var Hn = Object.prototype, xo = Hn.hasOwnProperty, Ao = Hn.toString, Ke = me ? me.toStringTag : void 0;
function Po(e) {
  var t = xo.call(e, Ke), r = e[Ke];
  try {
    e[Ke] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ao.call(e);
  return n && (t ? e[Ke] = r : delete e[Ke]), i;
}
var Co = Object.prototype, Do = Co.toString;
function Io(e) {
  return Do.call(e);
}
var jo = "[object Null]", Ro = "[object Undefined]", Zr = me ? me.toStringTag : void 0;
function be(e) {
  return e == null ? e === void 0 ? Ro : jo : Zr && Zr in Object(e) ? Po(e) : Io(e);
}
function ge(e) {
  return e != null && typeof e == "object";
}
var Bo = "[object Arguments]";
function en(e) {
  return ge(e) && be(e) == Bo;
}
var Wn = Object.prototype, Fo = Wn.hasOwnProperty, Lo = Wn.propertyIsEnumerable, Mo = en(function() {
  return arguments;
}()) ? en : function(e) {
  return ge(e) && Fo.call(e, "callee") && !Lo.call(e, "callee");
};
const Un = Mo;
var No = Array.isArray;
const F = No;
function qo() {
  return !1;
}
var Vn = typeof exports == "object" && exports && !exports.nodeType && exports, tn = Vn && typeof module == "object" && module && !module.nodeType && module, ko = tn && tn.exports === Vn, rn = ko ? ne.Buffer : void 0, Ho = rn ? rn.isBuffer : void 0, Wo = Ho || qo;
const Jt = Wo;
var Uo = 9007199254740991, Vo = /^(?:0|[1-9]\d*)$/;
function br(e, t) {
  var r = typeof e;
  return t = t == null ? Uo : t, !!t && (r == "number" || r != "symbol" && Vo.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Go = 9007199254740991;
function wr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Go;
}
var zo = "[object Arguments]", Ko = "[object Array]", Xo = "[object Boolean]", Qo = "[object Date]", Yo = "[object Error]", Jo = "[object Function]", Zo = "[object Map]", ea = "[object Number]", ta = "[object Object]", ra = "[object RegExp]", na = "[object Set]", ia = "[object String]", oa = "[object WeakMap]", aa = "[object ArrayBuffer]", sa = "[object DataView]", la = "[object Float32Array]", ua = "[object Float64Array]", ca = "[object Int8Array]", fa = "[object Int16Array]", da = "[object Int32Array]", pa = "[object Uint8Array]", ha = "[object Uint8ClampedArray]", va = "[object Uint16Array]", ma = "[object Uint32Array]", C = {};
C[la] = C[ua] = C[ca] = C[fa] = C[da] = C[pa] = C[ha] = C[va] = C[ma] = !0;
C[zo] = C[Ko] = C[aa] = C[Xo] = C[sa] = C[Qo] = C[Yo] = C[Jo] = C[Zo] = C[ea] = C[ta] = C[ra] = C[na] = C[ia] = C[oa] = !1;
function ga(e) {
  return ge(e) && wr(e.length) && !!C[be(e)];
}
function ya(e) {
  return function(t) {
    return e(t);
  };
}
var Gn = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = Gn && typeof module == "object" && module && !module.nodeType && module, ba = Ye && Ye.exports === Gn, Ut = ba && kn.process, wa = function() {
  try {
    var e = Ye && Ye.require && Ye.require("util").types;
    return e || Ut && Ut.binding && Ut.binding("util");
  } catch {
  }
}();
const nn = wa;
var on = nn && nn.isTypedArray, Oa = on ? ya(on) : ga;
const zn = Oa;
var Sa = Object.prototype, Ea = Sa.hasOwnProperty;
function $a(e, t) {
  var r = F(e), n = !r && Un(e), i = !r && !n && Jt(e), o = !r && !n && !i && zn(e), a = r || n || i || o, s = a ? So(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Ea.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || br(u, l))) && s.push(u);
  return s;
}
var Ta = Object.prototype;
function _a(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ta;
  return e === r;
}
function xa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Aa = xa(Object.keys, Object);
const Pa = Aa;
var Ca = Object.prototype, Da = Ca.hasOwnProperty;
function Ia(e) {
  if (!_a(e))
    return Pa(e);
  var t = [];
  for (var r in Object(e))
    Da.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function se(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ja = "[object AsyncFunction]", Ra = "[object Function]", Ba = "[object GeneratorFunction]", Fa = "[object Proxy]";
function Kn(e) {
  if (!se(e))
    return !1;
  var t = be(e);
  return t == Ra || t == Ba || t == ja || t == Fa;
}
function Or(e) {
  return e != null && wr(e.length) && !Kn(e);
}
function Sr(e) {
  return Or(e) ? $a(e) : Ia(e);
}
function Er(e, t) {
  return e && Oo(e, t, Sr);
}
function La(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Or(r))
      return e(r, n);
    for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Ma = La(Er);
const $r = Ma;
function Xn(e) {
  return e;
}
function Qn(e) {
  return typeof e == "function" ? e : Xn;
}
function Na(e, t) {
  var r = F(e) ? yo : $r;
  return r(e, Qn(t));
}
var qa = Array.prototype, ka = qa.reverse;
function Ha(e) {
  return e == null ? e : ka.call(e);
}
const Zt = S(1), Ae = typeof window > "u";
function Wa(e, t) {
  Ae || window.addEventListener("popstate", Ua.bind(this)), xr(t), Pt(t.head), Ar(e);
  const r = Ae ? "" : location.href, n = Tr(
    r,
    t.head,
    e,
    {},
    Zt.value
  );
  Yn(n);
}
function Ua(e) {
  L.value = e.state, J.value = 0, Pt(L.value.head), Ar(L.value.html, L.value.rememberedState.scrollY);
}
function Tr(e, t, r, n, i) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return L.value = o, o;
}
function Va(e) {
  Ae || window.history.pushState(e, "", e.url);
}
function Ga(e) {
  const t = Tr(
    e,
    JSON.parse(JSON.stringify(L.value.head)),
    L.value.html,
    { ...L.value.rememberedState },
    L.value.pageVisitId
  );
  Ae || window.history.replaceState(t, "", t.url);
}
function Yn(e) {
  Ae || window.history.replaceState(e, "", e.url);
}
const L = S({});
function za(e, t) {
  const r = e.request.responseURL;
  if (e.data.splade.modal && J.value++, xr(e.data.splade), Pt(e.data.splade.head), e.data.splade.modal)
    return is(e.data.html, e.data.splade.modal);
  (r !== L.value.url || e.data.splade.refresh || J.value > 0) && (J.value = 0, t || Zt.value++, Ar(e.data.html, 0));
  const n = Tr(
    r,
    e.data.splade.head,
    e.data.html,
    L.value.rememberedState ? { ...L.value.rememberedState } : {},
    Zt.value
  );
  t ? Yn(n) : Va(n);
}
const J = S(0);
function Ka() {
  J.value--, Pt(Qa(J.value));
}
const Jn = S({}), Zn = S({}), ei = (e) => Zn.value[e], Xa = (e) => Object.keys(ei.value[e]).length > 0, ti = S({}), Qa = (e) => ti.value[e], ri = S({}), Ya = (e) => ri.value[e], Me = S([]), Ja = D(() => Ha(Me.value));
function Za(e) {
  Me.value.push(e);
}
function es(e) {
  Me.value[e].dismissed = !0, Me.value[e].html = null;
}
const _r = S(null);
function ts(e, t, r, n) {
  let i, o;
  const a = new Promise((s, l) => {
    i = s, o = l;
  });
  return _r.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: o
  }, a;
}
function rs() {
  _r.value = null;
}
function xr(e) {
  Jn.value = e.shared ? e.shared : {}, ri.value[J.value] = e.flash ? e.flash : {}, ti.value[J.value] = e.head ? e.head : {}, Na(e.toasts ? e.toasts : [], (t) => {
    Me.value.push(t);
  }), Zn.value[J.value] = e.errors ? e.errors : {};
}
function ns(e) {
  li.value(e);
}
function Pt(e) {
  oi.value(e);
}
function Ar(e, t) {
  ai.value(e, t);
}
function is(e, t) {
  si.value(e, t);
}
const ni = S({});
function ii(e, t, r) {
  ni.value[e] = t, r && os(e, t);
}
function os(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function as(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : ni.value[e];
}
function Ue(e, t, r, n, i) {
  Ae || ii("scrollY", window.scrollY);
  const o = Nn({
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
    za(a, i);
  }).catch((a) => {
    const s = a.response.data.splade;
    s && xr(s), a.response.status != 422 && ns(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), o;
}
function ss(e) {
  return Ue(e, "GET", {}, {}, !0);
}
function ls(e) {
  return Ue(e, "GET", {}, {}, !1);
}
function us(e) {
  return Ue(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function cs(e) {
  return Ue(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function fs() {
  return Ue(L.value.url, "GET", {}, { "X-Splade-Refresh": !0 }, !1);
}
const oi = S(() => {
}), ai = S(() => {
}), si = S(() => {
}), li = S(() => {
}), m = {
  init: Wa,
  replace: ss,
  visit: ls,
  modal: us,
  slideover: cs,
  refresh: fs,
  request: Ue,
  replaceUrlOfCurrentPage: Ga,
  setOnHead(e) {
    oi.value = e;
  },
  setOnHtml(e) {
    ai.value = e;
  },
  setOnModal(e) {
    si.value = e;
  },
  setOnServerError(e) {
    li.value = e;
  },
  hasValidationErrors: Xa,
  validationErrors: ei,
  sharedData: Jn,
  flashData: Ya,
  toasts: Me,
  toastsReversed: Ja,
  confirmModal: _r,
  confirm: ts,
  clearConfirmModal: rs,
  pushToast: Za,
  dismissToast: es,
  restore: as,
  remember: ii,
  popStack: Ka,
  currentStack: J,
  pageVisitId: D(() => L.value.pageVisitId),
  isSsr: Ae
};
function Je(e, t) {
  return e && Er(e, Qn(t));
}
var ds = "[object String]";
function Vt(e) {
  return typeof e == "string" || !F(e) && ge(e) && be(e) == ds;
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
    const t = e, r = S(null);
    function n() {
      r.value = R({
        template: t.html
      });
    }
    return rt(() => t.html, n, { immediate: !0 }), (i, o) => (V(), Le(he(r)));
  }
}, ps = {
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
    return M(() => o()), (s, l) => (V(), nt("div", {
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
}, hs = {
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
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Vt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    Z("stack", 0);
    const r = S(), n = S([]), i = S(null), o = D(() => m.currentStack.value < 1 ? [] : {
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
    const l = X("$spladeOptions") || {};
    function u(f, p) {
      let d = document.querySelector(`meta[${f}="${p}"]`);
      return d || (d = document.createElement("meta"), d[f] = p, document.getElementsByTagName("head")[0].appendChild(d), d);
    }
    function c(f) {
      const p = f.name ? u("name", f.name) : u("property", f.property);
      Je(f, (d, v) => {
        p[v] = d;
      });
    }
    return m.setOnHead((f) => {
      m.isSsr || (document.title = f.title, f.meta.forEach((p) => {
        c(p);
      }));
    }), m.setOnHtml((f, p) => {
      n.value = [], r.value = f, Et(() => {
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (V(), nt("div", null, [
      (V(), Le(no(he(m).isSsr ? "div" : io), {
        max: he(l).max_keep_alive
      }, {
        default: qn(() => [
          (V(), Le(Ze, {
            key: `visit.${he(m).pageVisitId.value}`,
            style: oo(he(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      ao(Ze, { html: e.components }, null, 8, ["html"]),
      (V(!0), nt(yr, null, so(he(m).currentStack.value, (d) => (V(), Le(Ze, {
        key: `modal.${d}`,
        type: n.value[d].type,
        html: n.value[d].html,
        stack: d,
        "on-top-of-stack": he(m).currentStack.value === d,
        onClose: (v) => s(d)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (V(), Le(ps, {
        key: 0,
        html: i.value,
        onClose: a
      }, null, 8, ["html"])) : lo("", !0)
    ]));
  }
};
function fd(e) {
  return () => R(hs, e);
}
var vs = Object.prototype, ms = vs.hasOwnProperty;
function gs(e, t) {
  return e != null && ms.call(e, t);
}
var ys = "[object Symbol]";
function Ct(e) {
  return typeof e == "symbol" || ge(e) && be(e) == ys;
}
var bs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ws = /^\w*$/;
function Pr(e, t) {
  if (F(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ct(e) ? !0 : ws.test(e) || !bs.test(e) || t != null && e in Object(t);
}
var Os = ne["__core-js_shared__"];
const Gt = Os;
var an = function() {
  var e = /[^.]+$/.exec(Gt && Gt.keys && Gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ss(e) {
  return !!an && an in e;
}
var Es = Function.prototype, $s = Es.toString;
function Ie(e) {
  if (e != null) {
    try {
      return $s.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ts = /[\\^$.*+?()[\]{}|]/g, _s = /^\[object .+?Constructor\]$/, xs = Function.prototype, As = Object.prototype, Ps = xs.toString, Cs = As.hasOwnProperty, Ds = RegExp(
  "^" + Ps.call(Cs).replace(Ts, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Is(e) {
  if (!se(e) || Ss(e))
    return !1;
  var t = Kn(e) ? Ds : _s;
  return t.test(Ie(e));
}
function js(e, t) {
  return e == null ? void 0 : e[t];
}
function je(e, t) {
  var r = js(e, t);
  return Is(r) ? r : void 0;
}
var Rs = je(Object, "create");
const it = Rs;
function Bs() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
function Fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ls = "__lodash_hash_undefined__", Ms = Object.prototype, Ns = Ms.hasOwnProperty;
function qs(e) {
  var t = this.__data__;
  if (it) {
    var r = t[e];
    return r === Ls ? void 0 : r;
  }
  return Ns.call(t, e) ? t[e] : void 0;
}
var ks = Object.prototype, Hs = ks.hasOwnProperty;
function Ws(e) {
  var t = this.__data__;
  return it ? t[e] !== void 0 : Hs.call(t, e);
}
var Us = "__lodash_hash_undefined__";
function Vs(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = it && t === void 0 ? Us : t, this;
}
function Pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pe.prototype.clear = Bs;
Pe.prototype.delete = Fs;
Pe.prototype.get = qs;
Pe.prototype.has = Ws;
Pe.prototype.set = Vs;
function Gs() {
  this.__data__ = [], this.size = 0;
}
function Cr(e, t) {
  return e === t || e !== e && t !== t;
}
function Dt(e, t) {
  for (var r = e.length; r--; )
    if (Cr(e[r][0], t))
      return r;
  return -1;
}
var zs = Array.prototype, Ks = zs.splice;
function Xs(e) {
  var t = this.__data__, r = Dt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ks.call(t, r, 1), --this.size, !0;
}
function Qs(e) {
  var t = this.__data__, r = Dt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ys(e) {
  return Dt(this.__data__, e) > -1;
}
function Js(e, t) {
  var r = this.__data__, n = Dt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ue.prototype.clear = Gs;
ue.prototype.delete = Xs;
ue.prototype.get = Qs;
ue.prototype.has = Ys;
ue.prototype.set = Js;
var Zs = je(ne, "Map");
const ot = Zs;
function el() {
  this.size = 0, this.__data__ = {
    hash: new Pe(),
    map: new (ot || ue)(),
    string: new Pe()
  };
}
function tl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function It(e, t) {
  var r = e.__data__;
  return tl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function rl(e) {
  var t = It(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nl(e) {
  return It(this, e).get(e);
}
function il(e) {
  return It(this, e).has(e);
}
function ol(e, t) {
  var r = It(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = el;
ce.prototype.delete = rl;
ce.prototype.get = nl;
ce.prototype.has = il;
ce.prototype.set = ol;
var al = "Expected a function";
function Dr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(al);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (Dr.Cache || ce)(), r;
}
Dr.Cache = ce;
var sl = 500;
function ll(e) {
  var t = Dr(e, function(n) {
    return r.size === sl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var ul = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cl = /\\(\\)?/g, fl = ll(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ul, function(r, n, i, o) {
    t.push(i ? o.replace(cl, "$1") : n || r);
  }), t;
});
const dl = fl;
function ui(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var pl = 1 / 0, sn = me ? me.prototype : void 0, ln = sn ? sn.toString : void 0;
function jt(e) {
  if (typeof e == "string")
    return e;
  if (F(e))
    return ui(e, jt) + "";
  if (Ct(e))
    return ln ? ln.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -pl ? "-0" : t;
}
function Ir(e) {
  return e == null ? "" : jt(e);
}
function jr(e, t) {
  return F(e) ? e : Pr(e, t) ? [e] : dl(Ir(e));
}
var hl = 1 / 0;
function lt(e) {
  if (typeof e == "string" || Ct(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hl ? "-0" : t;
}
function ci(e, t, r) {
  t = jr(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = lt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && wr(i) && br(a, i) && (F(e) || Un(e)));
}
function Y(e, t) {
  return e != null && ci(e, t, gs);
}
const vl = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, r = S(null), n = S(null);
    return M(() => {
      r.value = (i) => {
        i.target === n.value || n.value.contains(i.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value);
    }), uo(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, o) => (V(), nt("div", {
      ref_key: "root",
      ref: n
    }, [
      $t(i.$slots, "default")
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
function Ce(e) {
  var t = W(e).Element;
  return e instanceof t || e instanceof Element;
}
function H(e) {
  var t = W(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Rr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = W(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var xe = Math.max, Tt = Math.min, Ne = Math.round;
function er() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fi() {
  return !/^((?!chrome|android).)*safari/i.test(er());
}
function qe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, o = 1;
  t && H(e) && (i = e.offsetWidth > 0 && Ne(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ne(n.height) / e.offsetHeight || 1);
  var a = Ce(e) ? W(e) : window, s = a.visualViewport, l = !fi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / o, f = n.width / i, p = n.height / o;
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
function Br(e) {
  var t = W(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ml(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gl(e) {
  return e === W(e) || !H(e) ? Br(e) : ml(e);
}
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function we(e) {
  return ((Ce(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Fr(e) {
  return qe(we(e)).left + Br(e).scrollLeft;
}
function K(e) {
  return W(e).getComputedStyle(e);
}
function Lr(e) {
  var t = K(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function yl(e) {
  var t = e.getBoundingClientRect(), r = Ne(t.width) / e.offsetWidth || 1, n = Ne(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function bl(e, t, r) {
  r === void 0 && (r = !1);
  var n = H(t), i = H(t) && yl(t), o = we(t), a = qe(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((te(t) !== "body" || Lr(o)) && (s = gl(t)), H(t) ? (l = qe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Fr(o))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function di(e) {
  var t = qe(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Rt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Rr(e) ? e.host : null) || we(e);
}
function pi(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : H(e) && Lr(e) ? e : pi(Rt(e));
}
function et(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = pi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = W(n), a = i ? [o].concat(o.visualViewport || [], Lr(n) ? n : []) : n, s = t.concat(a);
  return i ? s : s.concat(et(Rt(a)));
}
function wl(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function un(e) {
  return !H(e) || K(e).position === "fixed" ? null : e.offsetParent;
}
function Ol(e) {
  var t = /firefox/i.test(er()), r = /Trident/i.test(er());
  if (r && H(e)) {
    var n = K(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Rt(e);
  for (Rr(i) && (i = i.host); H(i) && ["html", "body"].indexOf(te(i)) < 0; ) {
    var o = K(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Bt(e) {
  for (var t = W(e), r = un(e); r && wl(r) && K(r).position === "static"; )
    r = un(r);
  return r && (te(r) === "html" || te(r) === "body" && K(r).position === "static") ? t : r || Ol(e) || t;
}
var G = "top", re = "bottom", ye = "right", ie = "left", Ft = "auto", Lt = [G, re, ye, ie], ke = "start", at = "end", Sl = "clippingParents", hi = "viewport", Xe = "popper", El = "reference", cn = /* @__PURE__ */ Lt.reduce(function(e, t) {
  return e.concat([t + "-" + ke, t + "-" + at]);
}, []), $l = /* @__PURE__ */ [].concat(Lt, [Ft]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ke, t + "-" + at]);
}, []), Tl = "beforeRead", _l = "read", xl = "afterRead", Al = "beforeMain", Pl = "main", Cl = "afterMain", Dl = "beforeWrite", Il = "write", jl = "afterWrite", tr = [Tl, _l, xl, Al, Pl, Cl, Dl, Il, jl];
function Rl(e) {
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
function Bl(e) {
  var t = Rl(e);
  return tr.reduce(function(r, n) {
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
var $e = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ll = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', fn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ml(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), fn).filter(function(r, n, i) {
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
          tr.indexOf(t.phase) < 0 && console.error(de($e, t.name, '"phase"', "either " + tr.join(", "), '"' + String(t.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + fn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(de(Ll, String(t.name), n, n));
      });
    });
  });
}
function Nl(e, t) {
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
function ql(e) {
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
function kl(e, t) {
  var r = W(e), n = we(e), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    var u = fi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Fr(e),
    y: l
  };
}
function Hl(e) {
  var t, r = we(e), n = Br(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = xe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = xe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Fr(e), l = -n.scrollTop;
  return K(i || r).direction === "rtl" && (s += xe(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Wl(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Rr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function rr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ul(e, t) {
  var r = qe(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function dn(e, t, r) {
  return t === hi ? rr(kl(e, r)) : Ce(t) ? Ul(t, r) : rr(Hl(we(e)));
}
function Vl(e) {
  var t = et(Rt(e)), r = ["absolute", "fixed"].indexOf(K(e).position) >= 0, n = r && H(e) ? Bt(e) : e;
  return Ce(n) ? t.filter(function(i) {
    return Ce(i) && Wl(i, n) && te(i) !== "body";
  }) : [];
}
function Gl(e, t, r, n) {
  var i = t === "clippingParents" ? Vl(e) : [].concat(t), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(l, u) {
    var c = dn(e, u, n);
    return l.top = xe(c.top, l.top), l.right = Tt(c.right, l.right), l.bottom = Tt(c.bottom, l.bottom), l.left = xe(c.left, l.left), l;
  }, dn(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function He(e) {
  return e.split("-")[1];
}
function vi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? oe(n) : null, o = n ? He(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case G:
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
    case ye:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ie:
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
  var u = i ? vi(i) : null;
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
function gi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function zl(e) {
  return Object.assign({}, gi(), e);
}
function Kl(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function Mr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, o = r.strategy, a = o === void 0 ? e.strategy : o, s = r.boundary, l = s === void 0 ? Sl : s, u = r.rootBoundary, c = u === void 0 ? hi : u, f = r.elementContext, p = f === void 0 ? Xe : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, x = zl(typeof b != "number" ? b : Kl(b, Lt)), A = p === Xe ? El : Xe, P = e.rects.popper, $ = e.elements[v ? A : p], E = Gl(Ce($) ? $ : $.contextElement || we(e.elements.popper), l, c, a), h = qe(e.elements.reference), g = mi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = rr(Object.assign({}, P, g)), T = p === Xe ? w : h, O = {
    top: E.top - T.top + x.top,
    bottom: T.bottom - E.bottom + x.bottom,
    left: E.left - T.left + x.left,
    right: T.right - E.right + x.right
  }, _ = e.modifiersData.offset;
  if (p === Xe && _) {
    var I = _[i];
    Object.keys(O).forEach(function(j) {
      var U = [ye, re].indexOf(j) >= 0 ? 1 : -1, Q = [G, re].indexOf(j) >= 0 ? "y" : "x";
      O[j] += I[Q] * U;
    });
  }
  return O;
}
var pn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Xl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", hn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ql(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? hn : i;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hn, o),
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
          reference: Ce(s) ? et(s) : s.contextElement ? et(s.contextElement) : [],
          popper: et(l)
        };
        var P = Bl(ql([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(_) {
          return _.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Nl([].concat(P, c.options.modifiers), function(_) {
            var I = _.name;
            return I;
          });
          if (Ml($), oe(c.options.placement) === Ft) {
            var E = c.orderedModifiers.find(function(_) {
              var I = _.name;
              return I === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = K(l), g = h.marginTop, w = h.marginRight, T = h.marginBottom, O = h.marginLeft;
          [g, w, T, O].some(function(_) {
            return parseFloat(_);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var x = c.elements, A = x.reference, P = x.popper;
          if (!vn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(pn);
            return;
          }
          c.rects = {
            reference: bl(A, Bt(P), c.options.strategy === "fixed"),
            popper: di(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
            return c.modifiersData[_.name] = Object.assign({}, _.data);
          });
          for (var $ = 0, E = 0; E < c.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Xl);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, E = -1;
              continue;
            }
            var h = c.orderedModifiers[E], g = h.fn, w = h.options, T = w === void 0 ? {} : w, O = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: T,
              name: O,
              instance: d
            }) || c);
          }
        }
      },
      update: Fl(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!vn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(pn), d;
    d.setOptions(u).then(function(b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function v() {
      c.orderedModifiers.forEach(function(b) {
        var x = b.name, A = b.options, P = A === void 0 ? {} : A, $ = b.effect;
        if (typeof $ == "function") {
          var E = $({
            state: c,
            name: x,
            instance: d,
            options: P
          }), h = function() {
          };
          f.push(E || h);
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
var gt = {
  passive: !0
};
function Yl(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, l = W(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, gt);
  }), s && l.addEventListener("resize", r.update, gt), function() {
    o && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, gt);
    }), s && l.removeEventListener("resize", r.update, gt);
  };
}
const Jl = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Yl,
  data: {}
};
function Zl(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = mi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const eu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zl,
  data: {}
};
var tu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ru(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: Ne(t * i) / i || 0,
    y: Ne(r * i) / i || 0
  };
}
function mn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, d = p === void 0 ? 0 : p, v = a.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var x = a.hasOwnProperty("x"), A = a.hasOwnProperty("y"), P = ie, $ = G, E = window;
  if (u) {
    var h = Bt(r), g = "clientHeight", w = "clientWidth";
    if (h === W(r) && (h = we(r), K(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === G || (i === ie || i === ye) && o === at) {
      $ = re;
      var T = f && h === E && E.visualViewport ? E.visualViewport.height : h[g];
      y -= T - n.height, y *= l ? 1 : -1;
    }
    if (i === ie || (i === G || i === re) && o === at) {
      P = ye;
      var O = f && h === E && E.visualViewport ? E.visualViewport.width : h[w];
      d -= O - n.width, d *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: s
  }, u && tu), I = c === !0 ? ru({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = I.x, y = I.y, l) {
    var j;
    return Object.assign({}, _, (j = {}, j[$] = A ? "0" : "", j[P] = x ? "0" : "", j.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, _, (t = {}, t[$] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function nu(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = K(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: oe(t.placement),
    variation: He(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const iu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nu,
  data: {}
};
function ou(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !H(o) || !te(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function au(e) {
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
      !H(i) || !te(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const su = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ou,
  effect: au,
  requires: ["computeStyles"]
};
var lu = [Jl, eu, iu, su], uu = /* @__PURE__ */ Ql({
  defaultModifiers: lu
});
function cu(e) {
  return e === "x" ? "y" : "x";
}
function Ot(e, t, r) {
  return xe(e, Tt(t, r));
}
function fu(e, t, r) {
  var n = Ot(e, t, r);
  return n > r ? r : n;
}
function du(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = Mr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = oe(t.placement), A = He(t.placement), P = !A, $ = vi(x), E = cu($), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, T = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, O = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (o) {
      var j, U = $ === "y" ? G : ie, Q = $ === "y" ? re : ye, B = $ === "y" ? "height" : "width", N = h[$], dt = N + b[U], Oe = N - b[Q], pt = d ? -w[B] / 2 : 0, qt = A === ke ? g[B] : w[B], Ge = A === ke ? -w[B] : -g[B], ht = t.elements.arrow, Be = d && ht ? di(ht) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gi(), ze = fe[U], vt = fe[Q], Se = Ot(0, g[B], Be[B]), kt = P ? g[B] / 2 - pt - Se - ze - O.mainAxis : qt - Se - ze - O.mainAxis, Yi = P ? -g[B] / 2 + pt + Se + vt + O.mainAxis : Ge + Se + vt + O.mainAxis, Ht = t.elements.arrow && Bt(t.elements.arrow), Ji = Ht ? $ === "y" ? Ht.clientTop || 0 : Ht.clientLeft || 0 : 0, Ur = (j = _ == null ? void 0 : _[$]) != null ? j : 0, Zi = N + kt - Ur - Ji, eo = N + Yi - Ur, Vr = Ot(d ? Tt(dt, Zi) : dt, N, d ? xe(Oe, eo) : Oe);
      h[$] = Vr, I[$] = Vr - N;
    }
    if (s) {
      var Gr, to = $ === "x" ? G : ie, ro = $ === "x" ? re : ye, Ee = h[E], mt = E === "y" ? "height" : "width", zr = Ee + b[to], Kr = Ee - b[ro], Wt = [G, ie].indexOf(x) !== -1, Xr = (Gr = _ == null ? void 0 : _[E]) != null ? Gr : 0, Qr = Wt ? zr : Ee - g[mt] - w[mt] - Xr + O.altAxis, Yr = Wt ? Ee + g[mt] + w[mt] - Xr - O.altAxis : Kr, Jr = d && Wt ? fu(Qr, Ee, Yr) : Ot(d ? Qr : zr, Ee, d ? Yr : Kr);
      h[E] = Jr, I[E] = Jr - Ee;
    }
    t.modifiersData[n] = I;
  }
}
const pu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: du,
  requiresIfExists: ["offset"]
};
var hu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return hu[t];
  });
}
var vu = {
  start: "end",
  end: "start"
};
function gn(e) {
  return e.replace(/start|end/g, function(t) {
    return vu[t];
  });
}
function mu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? $l : l, c = He(n), f = c ? s ? cn : cn.filter(function(v) {
    return He(v) === c;
  }) : Lt, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = Mr(e, {
      placement: y,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[oe(y)], v;
  }, {});
  return Object.keys(d).sort(function(v, y) {
    return d[v] - d[y];
  });
}
function gu(e) {
  if (oe(e) === Ft)
    return [];
  var t = St(e);
  return [gn(e), t, gn(t)];
}
function yu(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, x = oe(b), A = x === b, P = l || (A || !v ? [St(b)] : gu(b)), $ = [b].concat(P).reduce(function(Be, fe) {
      return Be.concat(oe(fe) === Ft ? mu(t, {
        placement: fe,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : fe);
    }, []), E = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, T = $[0], O = 0; O < $.length; O++) {
      var _ = $[O], I = oe(_), j = He(_) === ke, U = [G, re].indexOf(I) >= 0, Q = U ? "width" : "height", B = Mr(t, {
        placement: _,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = U ? j ? ye : ie : j ? re : G;
      E[Q] > h[Q] && (N = St(N));
      var dt = St(N), Oe = [];
      if (o && Oe.push(B[I] <= 0), s && Oe.push(B[N] <= 0, B[dt] <= 0), Oe.every(function(Be) {
        return Be;
      })) {
        T = _, w = !1;
        break;
      }
      g.set(_, Oe);
    }
    if (w)
      for (var pt = v ? 3 : 1, qt = function(fe) {
        var ze = $.find(function(vt) {
          var Se = g.get(vt);
          if (Se)
            return Se.slice(0, fe).every(function(kt) {
              return kt;
            });
        });
        if (ze)
          return T = ze, "break";
      }, Ge = pt; Ge > 0; Ge--) {
        var ht = qt(Ge);
        if (ht === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0);
  }
}
const bu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, wu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ou = {
  components: {
    OnClickOutside: vl
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
    this.popper = uu(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [bu, pu]
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
}, Su = { ref: "button" }, Eu = { ref: "tooltip" };
function $u(e, t, r, n, i, o) {
  const a = co("OnClickOutside");
  return V(), Le(a, { do: o.hide }, {
    default: qn(() => [
      Yt("button", Su, [
        $t(e.$slots, "button", { toggle: o.toggle })
      ], 512),
      fo(Yt("div", Eu, [
        $t(e.$slots, "default", { hide: o.hide })
      ], 512), [
        [po, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const Tu = /* @__PURE__ */ wu(Ou, [["render", $u]]);
function z(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, z), n;
}
var _t = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_t || {}), ve = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ve || {});
function k({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var o;
  let a = _u(n, r), s = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return zt(s);
  if (t & 1) {
    let l = (o = a.unmount) == null || o ? 0 : 1;
    return z(l, { [0]() {
      return null;
    }, [1]() {
      return zt({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return zt(s);
}
function zt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var o;
  let { as: a, ...s } = bi(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (a === "template") {
    if (l = yi(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!xu(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return ho(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return R(a, Object.assign({}, s, u), l);
}
function yi(e) {
  return e.flatMap((t) => t.type === yr ? yi(t.children) : [t]);
}
function _u(...e) {
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
function xu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Au = 0;
function Pu() {
  return ++Au;
}
function Re() {
  return Pu();
}
var wi = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(wi || {});
function le(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Oi = Symbol("Context");
var De = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(De || {});
function Cu() {
  return Nr() !== null;
}
function Nr() {
  return X(Oi, null);
}
function Du(e) {
  Z(Oi, e);
}
function Ve(e) {
  if (typeof window > "u")
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
let nr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var st = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(st || {}), Si = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Si || {}), Iu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Iu || {});
function ju(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(nr));
}
var Ei = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ei || {});
function Ru(e, t = 0) {
  var r;
  return e === ((r = Ve(e)) == null ? void 0 : r.body) ? !1 : z(t, { [0]() {
    return e.matches(nr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(nr))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function tt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Bu = ["textarea", "input"].join(",");
function Fu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Bu)) != null ? r : !1;
}
function Lu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), o = t(n);
    if (i === null || o === null)
      return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ir(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Lu(e) : e : ju(e), a = i.activeElement, s = (() => {
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
function or(e, t, r) {
  typeof window < "u" && ee((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Mu(e, t, r = D(() => !0)) {
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
      let u = l instanceof HTMLElement ? l : le(l);
      if (u != null && u.contains(a))
        return;
    }
    return !Ru(a, Ei.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  or("click", (i) => n(i, (o) => o.target), !0), or("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xt || {});
let ar = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return k({ ourProps: o, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var sr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(sr || {});
function Nu() {
  let e = S(0);
  return or("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function $i(e, t, r, n) {
  typeof window < "u" && ee((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var Ti = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ti || {});
let Qe = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = S(null);
  n({ el: i, $el: i });
  let o = D(() => Ve(i));
  qu({ ownerDocument: o }, D(() => Boolean(e.features & 16)));
  let a = ku({ ownerDocument: o, container: i, initialFocus: D(() => e.initialFocus) }, D(() => Boolean(e.features & 2)));
  Hu({ ownerDocument: o, container: i, containers: e.containers, previousActiveElement: a }, D(() => Boolean(e.features & 8)));
  let s = Nu();
  function l() {
    let u = le(i);
    !u || z(s.value, { [sr.Forwards]: () => ir(u, st.First), [sr.Backwards]: () => ir(u, st.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return R(yr, [Boolean(f & 4) && R(ar, { as: "button", type: "button", onFocus: l, features: xt.Focusable }), k({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && R(ar, { as: "button", type: "button", onFocus: l, features: xt.Focusable })]);
  };
} }), { features: Ti });
function qu({ ownerDocument: e }, t) {
  let r = S(null), n = { value: !1 };
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
function ku({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = S(null);
  return M(() => {
    rt([t, r, n], (o, a) => {
      if (o.every((l, u) => (a == null ? void 0 : a[u]) === l) || !n.value)
        return;
      let s = le(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = le(r), f = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === f) {
            i.value = f;
            return;
          }
        } else if (s.contains(f)) {
          i.value = f;
          return;
        }
        c ? tt(c) : ir(s, st.First | st.NoScroll) === Si.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Hu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var o;
  $i((o = e.value) == null ? void 0 : o.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Wu(s, u) ? (n.value = u, tt(u)) : (a.preventDefault(), a.stopPropagation(), tt(l)) : tt(n.value);
  }, !0);
}
function Wu(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let yn = "body > *", Fe = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map();
function bn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function wn(e) {
  let t = pe.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Uu(e, t = S(!0)) {
  ee((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Ve(n);
    if (i) {
      Fe.add(n);
      for (let o of pe.keys())
        o.contains(n) && (wn(o), pe.delete(o));
      i.querySelectorAll(yn).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let a of Fe)
            if (o.contains(a))
              return;
          Fe.size === 1 && (pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), bn(o));
        }
      }), r(() => {
        if (Fe.delete(n), Fe.size > 0)
          i.querySelectorAll(yn).forEach((o) => {
            if (o instanceof HTMLElement && !pe.has(o)) {
              for (let a of Fe)
                if (o.contains(a))
                  return;
              pe.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), bn(o);
            }
          });
        else
          for (let o of pe.keys())
            wn(o), pe.delete(o);
      });
    }
  });
}
let _i = Symbol("ForcePortalRootContext");
function Vu() {
  return X(_i, !1);
}
let lr = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return Z(_i, e.force), () => {
    let { force: n, ...i } = e;
    return k({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Gu(e) {
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
let xi = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = S(null), i = D(() => Ve(n)), o = Vu(), a = X(Ai, null), s = S(o === !0 || a == null ? Gu(n.value) : a.resolveTarget());
  return ee(() => {
    o || a != null && (s.value = a.resolveTarget());
  }), We(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return R(vo, { to: s.value }, k({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ai = Symbol("PortalGroupContext"), zu = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = mo({ resolveTarget() {
    return e.target;
  } });
  return Z(Ai, n), () => {
    let { target: i, ...o } = e;
    return k({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Pi = Symbol("StackContext");
var ur = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ur || {});
function Ku() {
  return X(Pi, () => {
  });
}
function Xu({ type: e, element: t, onUpdate: r }) {
  let n = Ku();
  function i(...o) {
    r == null || r(...o), n(...o);
  }
  M(() => {
    i(0, e, t), We(() => {
      i(1, e, t);
    });
  }), Z(Pi, i);
}
let Ci = Symbol("DescriptionContext");
function Qu() {
  let e = X(Ci, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Yu({ slot: e = S({}), name: t = "Description", props: r = {} } = {}) {
  let n = S([]);
  function i(o) {
    return n.value.push(o), () => {
      let a = n.value.indexOf(o);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return Z(Ci, { register: i, slot: e, name: t, props: r }), D(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let dd = q({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Qu(), i = `headlessui-description-${Re()}`;
  return M(() => We(n.register(i))), () => {
    let { name: o = "Description", slot: a = S({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: he(p) }), {}), id: i };
    return k({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: r, name: o });
  };
} });
var Ju = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ju || {});
let cr = Symbol("DialogContext");
function ut(e) {
  let t = X(cr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ut), r;
  }
  return t;
}
let yt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Di = q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: yt }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var o;
  let a = S(!1);
  M(() => {
    a.value = !0;
  });
  let s = S(0), l = Nr(), u = D(() => e.open === yt && l !== null ? z(l.value, { [De.Open]: !0, [De.Closed]: !1 }) : e.open), c = S(/* @__PURE__ */ new Set()), f = S(null), p = S(null), d = D(() => Ve(f));
  if (i({ el: f, $el: f }), !(e.open !== yt || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === yt ? void 0 : e.open}`);
  let v = D(() => a.value && u.value ? 0 : 1), y = D(() => v.value === 0), b = D(() => s.value > 1), x = X(cr, null) !== null, A = D(() => b.value ? "parent" : "leaf");
  Uu(f, D(() => b.value ? y.value : !1)), Xu({ type: "Dialog", element: f, onUpdate: (g, w, T) => {
    if (w === "Dialog")
      return z(g, { [ur.Add]() {
        c.value.add(T), s.value += 1;
      }, [ur.Remove]() {
        c.value.delete(T), s.value -= 1;
      } });
  } });
  let P = Yu({ name: "DialogDescription", slot: D(() => ({ open: u.value })) }), $ = `headlessui-dialog-${Re()}`, E = S(null), h = { titleId: E, panelRef: S(null), dialogState: v, setTitleId(g) {
    E.value !== g && (E.value = g);
  }, close() {
    t("close", !1);
  } };
  return Z(cr, h), Mu(() => {
    var g, w, T;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((O) => !(!(O instanceof HTMLElement) || O.contains(le(p)) || h.panelRef.value && O.contains(h.panelRef.value))), (T = h.panelRef.value) != null ? T : f.value];
  }, (g, w) => {
    h.close(), Et(() => w == null ? void 0 : w.focus());
  }, D(() => v.value === 0 && !b.value)), $i((o = d.value) == null ? void 0 : o.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === wi.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), ee((g) => {
    var w;
    if (v.value !== 0 || x)
      return;
    let T = d.value;
    if (!T)
      return;
    let O = T == null ? void 0 : T.documentElement, _ = (w = T.defaultView) != null ? w : window, I = O.style.overflow, j = O.style.paddingRight, U = _.innerWidth - O.clientWidth;
    if (O.style.overflow = "hidden", U > 0) {
      let Q = O.clientWidth - O.offsetWidth, B = U - Q;
      O.style.paddingRight = `${B}px`;
    }
    g(() => {
      O.style.overflow = I, O.style.paddingRight = j;
    });
  }), ee((g) => {
    if (v.value !== 0)
      return;
    let w = le(f);
    if (!w)
      return;
    let T = new IntersectionObserver((O) => {
      for (let _ of O)
        _.boundingClientRect.x === 0 && _.boundingClientRect.y === 0 && _.boundingClientRect.width === 0 && _.boundingClientRect.height === 0 && h.close();
    });
    T.observe(w), g(() => T.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: $, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": E.value, "aria-describedby": P.value }, { open: w, initialFocus: T, ...O } = e, _ = { open: v.value === 0 };
    return R(lr, { force: !0 }, () => [R(xi, () => R(zu, { target: f.value }, () => R(lr, { force: !1 }, () => R(Qe, { initialFocus: T, containers: c, features: y.value ? z(A.value, { parent: Qe.features.RestoreFocus, leaf: Qe.features.All & ~Qe.features.FocusLock }) : Qe.features.None }, () => k({ ourProps: g, theirProps: O, slot: _, attrs: r, slots: n, visible: v.value === 0, features: _t.RenderStrategy | _t.Static, name: "Dialog" }))))), R(ar, { features: xt.Hidden, ref: p })]);
  };
} });
q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = ut("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => k({ ourProps: { id: i, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ut("DialogBackdrop"), o = `headlessui-dialog-backdrop-${Re()}`, a = S(null);
  return n({ el: a, $el: a }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: a, "aria-hidden": !0 };
    return R(lr, { force: !0 }, () => R(xi, () => k({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Ii = q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ut("DialogPanel"), o = `headlessui-dialog-panel-${Re()}`;
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
  let n = ut("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return M(() => {
    n.setTitleId(i), We(() => n.setTitleId(null));
  }), () => k({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Zu(e) {
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
function Kt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function bt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var fr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(fr || {});
function ec(e, t) {
  let r = ji();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [o, a] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function On(e, t, r, n, i, o) {
  let a = ji(), s = o !== void 0 ? Zu(o) : () => {
  };
  return bt(e, ...i), Kt(e, ...t, ...r), a.nextFrame(() => {
    bt(e, ...r), Kt(e, ...n), a.add(ec(e, (l) => (bt(e, ...n, ...t), Kt(e, ...i), s(l))));
  }), a.add(() => bt(e, ...t, ...r, ...n, ...i)), a.add(() => s("cancelled")), a.dispose;
}
function Te(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let qr = Symbol("TransitionContext");
var tc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(tc || {});
function rc() {
  return X(qr, null) !== null;
}
function nc() {
  let e = X(qr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ic() {
  let e = X(kr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let kr = Symbol("NestingContext");
function Mt(e) {
  return "children" in e ? Mt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ri(e) {
  let t = S([]), r = S(!1);
  M(() => r.value = !0), We(() => r.value = !1);
  function n(o, a = ve.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (z(a, { [ve.Unmount]() {
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
let Bi = _t.RenderStrategy, ct = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!rc() && Cu())
    return () => R(ft, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = S(null), a = S("visible"), s = D(() => e.unmount ? ve.Unmount : ve.Hidden);
  i({ el: o, $el: o });
  let { show: l, appear: u } = nc(), { register: c, unregister: f } = ic(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Ri(() => {
    v.value || (a.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let w = c(d);
    We(w);
  }), ee(() => {
    if (s.value === ve.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      z(a.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = Te(e.enter), x = Te(e.enterFrom), A = Te(e.enterTo), P = Te(e.entered), $ = Te(e.leave), E = Te(e.leaveFrom), h = Te(e.leaveTo);
  M(() => {
    ee(() => {
      if (a.value === "visible") {
        let w = le(o);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let T = p.value && !u.value, O = le(o);
    !O || !(O instanceof HTMLElement) || T || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? On(O, b, x, A, P, (_) => {
      v.value = !1, _ === fr.Finished && t("afterEnter");
    }) : On(O, $, E, h, P, (_) => {
      v.value = !1, _ === fr.Finished && (Mt(y) || (a.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    rt([l], (w, T, O) => {
      g(O), p.value = !1;
    }, { immediate: !0 });
  }), Z(kr, y), Du(D(() => z(a.value, { visible: De.Open, hidden: De.Closed }))), () => {
    let { appear: w, show: T, enter: O, enterFrom: _, enterTo: I, entered: j, leave: U, leaveFrom: Q, leaveTo: B, ...N } = e;
    return k({ theirProps: N, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Bi, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), oc = ct, ft = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Nr(), o = D(() => e.show === null && i !== null ? z(i.value, { [De.Open]: !0, [De.Closed]: !1 }) : e.show);
  ee(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = S(o.value ? "visible" : "hidden"), s = Ri(() => {
    a.value = "hidden";
  }), l = S(!0), u = { show: o, appear: D(() => e.appear || !l.value) };
  return M(() => {
    ee(() => {
      l.value = !1, o.value ? a.value = "visible" : Mt(s) || (a.value = "hidden");
    });
  }), Z(kr, s), Z(qr, u), () => {
    let c = bi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return k({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [R(oc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Bi, visible: a.value === "visible", name: "Transition" });
  };
} });
const ac = {
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
      DialogPanel: Ii,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
};
function Fi(e, t) {
  t = jr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[lt(t[r++])];
  return r && r == n ? e : void 0;
}
function Hr(e, t, r) {
  var n = e == null ? void 0 : Fi(e, t);
  return n === void 0 ? r : n;
}
var sc = function() {
  try {
    var e = je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Sn = sc;
function Li(e, t, r) {
  t == "__proto__" && Sn ? Sn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var lc = Object.prototype, uc = lc.hasOwnProperty;
function cc(e, t, r) {
  var n = e[t];
  (!(uc.call(e, t) && Cr(n, r)) || r === void 0 && !(t in e)) && Li(e, t, r);
}
function fc(e, t, r, n) {
  if (!se(e))
    return e;
  t = jr(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var l = lt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = se(c) ? c : br(t[i + 1]) ? [] : {});
    }
    cc(s, l, u), s = s[l];
  }
  return e;
}
function Mi(e, t, r) {
  return e == null ? e : fc(e, t, r);
}
const dc = {
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
          Mi(e.values, r, n);
        }
      })
    );
  }
}, pc = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Nn(e).then((t) => {
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
function Ni(e) {
  return e && e.length ? e[0] : void 0;
}
const hc = {
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
        return Y(e.values, t);
      },
      first(t) {
        return Ni(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, vc = {
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
          !se(u) || (n in u && (a = u[n]), i in u && (s = u[i]), o in u && l.push(u));
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
}, mc = {
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
        return Y(e.values, t);
      },
      ...this.values
    });
  }
};
function dr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => dr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => dr(t));
}
function qi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && Hi(t, ki(null, r), e[r]);
  return t;
}
function ki(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Hi(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Hi(e, ki(t, n.toString()), r[n]));
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
  qi(r);
}
var gc = "[object Boolean]";
function Wi(e) {
  return e === !0 || e === !1 || ge(e) && be(e) == gc;
}
function yc() {
  this.__data__ = new ue(), this.size = 0;
}
function bc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function wc(e) {
  return this.__data__.get(e);
}
function Oc(e) {
  return this.__data__.has(e);
}
var Sc = 200;
function Ec(e, t) {
  var r = this.__data__;
  if (r instanceof ue) {
    var n = r.__data__;
    if (!ot || n.length < Sc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ce(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ae(e) {
  var t = this.__data__ = new ue(e);
  this.size = t.size;
}
ae.prototype.clear = yc;
ae.prototype.delete = bc;
ae.prototype.get = wc;
ae.prototype.has = Oc;
ae.prototype.set = Ec;
var $c = "__lodash_hash_undefined__";
function Tc(e) {
  return this.__data__.set(e, $c), this;
}
function _c(e) {
  return this.__data__.has(e);
}
function At(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ce(); ++t < r; )
    this.add(e[t]);
}
At.prototype.add = At.prototype.push = Tc;
At.prototype.has = _c;
function xc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ac(e, t) {
  return e.has(t);
}
var Pc = 1, Cc = 2;
function Ui(e, t, r, n, i, o) {
  var a = r & Pc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Cc ? new At() : void 0;
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
      if (!xc(t, function(x, A) {
        if (!Ac(d, A) && (v === x || i(v, x, r, n, o)))
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
var Dc = ne.Uint8Array;
const En = Dc;
function Ic(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function jc(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Rc = 1, Bc = 2, Fc = "[object Boolean]", Lc = "[object Date]", Mc = "[object Error]", Nc = "[object Map]", qc = "[object Number]", kc = "[object RegExp]", Hc = "[object Set]", Wc = "[object String]", Uc = "[object Symbol]", Vc = "[object ArrayBuffer]", Gc = "[object DataView]", $n = me ? me.prototype : void 0, Xt = $n ? $n.valueOf : void 0;
function zc(e, t, r, n, i, o, a) {
  switch (r) {
    case Gc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Vc:
      return !(e.byteLength != t.byteLength || !o(new En(e), new En(t)));
    case Fc:
    case Lc:
    case qc:
      return Cr(+e, +t);
    case Mc:
      return e.name == t.name && e.message == t.message;
    case kc:
    case Wc:
      return e == t + "";
    case Nc:
      var s = Ic;
    case Hc:
      var l = n & Rc;
      if (s || (s = jc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Bc, a.set(e, t);
      var c = Ui(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case Uc:
      if (Xt)
        return Xt.call(e) == Xt.call(t);
  }
  return !1;
}
function Kc(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Xc(e, t, r) {
  var n = t(e);
  return F(e) ? n : Kc(n, r(e));
}
function Vi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function Qc() {
  return [];
}
var Yc = Object.prototype, Jc = Yc.propertyIsEnumerable, Tn = Object.getOwnPropertySymbols, Zc = Tn ? function(e) {
  return e == null ? [] : (e = Object(e), Vi(Tn(e), function(t) {
    return Jc.call(e, t);
  }));
} : Qc;
const ef = Zc;
function _n(e) {
  return Xc(e, Sr, ef);
}
var tf = 1, rf = Object.prototype, nf = rf.hasOwnProperty;
function of(e, t, r, n, i, o) {
  var a = r & tf, s = _n(e), l = s.length, u = _n(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(a ? p in t : nf.call(t, p)))
      return !1;
  }
  var d = o.get(e), v = o.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var b = a; ++f < l; ) {
    p = s[f];
    var x = e[p], A = t[p];
    if (n)
      var P = a ? n(A, x, p, t, e, o) : n(x, A, p, e, t, o);
    if (!(P === void 0 ? x === A || i(x, A, r, n, o) : P)) {
      y = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (y && !b) {
    var $ = e.constructor, E = t.constructor;
    $ != E && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof E == "function" && E instanceof E) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var af = je(ne, "DataView");
const pr = af;
var sf = je(ne, "Promise");
const hr = sf;
var lf = je(ne, "Set");
const vr = lf;
var uf = je(ne, "WeakMap");
const mr = uf;
var xn = "[object Map]", cf = "[object Object]", An = "[object Promise]", Pn = "[object Set]", Cn = "[object WeakMap]", Dn = "[object DataView]", ff = Ie(pr), df = Ie(ot), pf = Ie(hr), hf = Ie(vr), vf = Ie(mr), _e = be;
(pr && _e(new pr(new ArrayBuffer(1))) != Dn || ot && _e(new ot()) != xn || hr && _e(hr.resolve()) != An || vr && _e(new vr()) != Pn || mr && _e(new mr()) != Cn) && (_e = function(e) {
  var t = be(e), r = t == cf ? e.constructor : void 0, n = r ? Ie(r) : "";
  if (n)
    switch (n) {
      case ff:
        return Dn;
      case df:
        return xn;
      case pf:
        return An;
      case hf:
        return Pn;
      case vf:
        return Cn;
    }
  return t;
});
const In = _e;
var mf = 1, jn = "[object Arguments]", Rn = "[object Array]", wt = "[object Object]", gf = Object.prototype, Bn = gf.hasOwnProperty;
function yf(e, t, r, n, i, o) {
  var a = F(e), s = F(t), l = a ? Rn : In(e), u = s ? Rn : In(t);
  l = l == jn ? wt : l, u = u == jn ? wt : u;
  var c = l == wt, f = u == wt, p = l == u;
  if (p && Jt(e)) {
    if (!Jt(t))
      return !1;
    a = !0, c = !1;
  }
  if (p && !c)
    return o || (o = new ae()), a || zn(e) ? Ui(e, t, r, n, i, o) : zc(e, t, l, r, n, i, o);
  if (!(r & mf)) {
    var d = c && Bn.call(e, "__wrapped__"), v = f && Bn.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return o || (o = new ae()), i(y, b, r, n, o);
    }
  }
  return p ? (o || (o = new ae()), of(e, t, r, n, i, o)) : !1;
}
function Nt(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !ge(e) && !ge(t) ? e !== e && t !== t : yf(e, t, r, n, Nt, i);
}
var bf = 1, wf = 2;
function Of(e, t, r, n) {
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
      var f = new ae();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Nt(c, u, bf | wf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Gi(e) {
  return e === e && !se(e);
}
function Sf(e) {
  for (var t = Sr(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Gi(i)];
  }
  return t;
}
function zi(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Ef(e) {
  var t = Sf(e);
  return t.length == 1 && t[0][2] ? zi(t[0][0], t[0][1]) : function(r) {
    return r === e || Of(r, e, t);
  };
}
function $f(e, t) {
  return e != null && t in Object(e);
}
function Tf(e, t) {
  return e != null && ci(e, t, $f);
}
var _f = 1, xf = 2;
function Af(e, t) {
  return Pr(e) && Gi(t) ? zi(lt(e), t) : function(r) {
    var n = Hr(r, e);
    return n === void 0 && n === t ? Tf(r, e) : Nt(t, n, _f | xf);
  };
}
function Pf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Cf(e) {
  return function(t) {
    return Fi(t, e);
  };
}
function Df(e) {
  return Pr(e) ? Pf(lt(e)) : Cf(e);
}
function Wr(e) {
  return typeof e == "function" ? e : e == null ? Xn : typeof e == "object" ? F(e) ? Af(e[0], e[1]) : Ef(e) : Df(e);
}
function Ki(e, t) {
  var r = {};
  return t = Wr(t), Er(e, function(n, i, o) {
    Li(r, i, t(n, i, o));
  }), r;
}
const If = {
  inject: ["stack"],
  props: {
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
      return m.validationErrors(this.stack);
    },
    errors() {
      return Ki(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return Y(this.errors, e);
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
      m.confirm(
        Wi(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || dr(this.values) ? qi(this.values) : this.values;
      m.request(this.action, this.method.toUpperCase(), e, {
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
            ].includes(r) ? e[r] : Hr(e.values, r);
          },
          set(t, r, n) {
            Mi(e.values, r, n);
          }
        }
      )
    );
  }
}, jf = ["href", "onClick"], Rf = {
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
        Wi(t.confirm) ? "" : t.confirm,
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
    return (i, o) => (V(), nt("a", {
      href: e.href,
      onClick: go(r, ["prevent"])
    }, [
      $t(i.$slots, "default")
    ], 8, jf));
  }
}, Bf = {
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
      DialogPanel: Ii,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
}, Ff = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Ki(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return Y(e, i);
      },
      hasFlash(i) {
        return Y(t, i);
      },
      hasShared(i) {
        return Y(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
var Lf = function() {
  return ne.Date.now();
};
const Qt = Lf;
var Mf = /\s/;
function Nf(e) {
  for (var t = e.length; t-- && Mf.test(e.charAt(t)); )
    ;
  return t;
}
var qf = /^\s+/;
function kf(e) {
  return e && e.slice(0, Nf(e) + 1).replace(qf, "");
}
var Fn = 0 / 0, Hf = /^[-+]0x[0-9a-f]+$/i, Wf = /^0b[01]+$/i, Uf = /^0o[0-7]+$/i, Vf = parseInt;
function gr(e) {
  if (typeof e == "number")
    return e;
  if (Ct(e))
    return Fn;
  if (se(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = se(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = kf(e);
  var r = Wf.test(e);
  return r || Uf.test(e) ? Vf(e.slice(2), r ? 2 : 8) : Hf.test(e) ? Fn : +e;
}
var Gf = "Expected a function", zf = Math.max, Kf = Math.min;
function Xf(e, t, r) {
  var n, i, o, a, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Gf);
  t = gr(t) || 0, se(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? zf(gr(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, a = e.apply(w, g), a;
  }
  function v(h) {
    return u = h, s = setTimeout(x, t), c ? d(h) : a;
  }
  function y(h) {
    var g = h - l, w = h - u, T = t - g;
    return f ? Kf(T, o - w) : T;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= o;
  }
  function x() {
    var h = Qt();
    if (b(h))
      return A(h);
    s = setTimeout(x, y(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function $() {
    return s === void 0 ? a : A(Qt());
  }
  function E() {
    var h = Qt(), g = b(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), d(l);
    }
    return s === void 0 && (s = setTimeout(x, t)), a;
  }
  return E.cancel = P, E.flush = $, E;
}
function Xi(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
var Ln = 1 / 0, Qf = 17976931348623157e292;
function Yf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = gr(e), e === Ln || e === -Ln) {
    var t = e < 0 ? -1 : 1;
    return t * Qf;
  }
  return e === e ? e : 0;
}
function Qi(e) {
  var t = Yf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
function Jf(e, t, r) {
  e = Ir(e), t = jt(t);
  var n = e.length;
  r = r === void 0 ? n : Xi(Qi(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function Zf(e, t) {
  var r = [];
  return $r(e, function(n, i, o) {
    t(n, i, o) && r.push(n);
  }), r;
}
function ed(e, t) {
  var r = F(e) ? Vi : Zf;
  return r(e, Wr(t));
}
function Mn(e, t) {
  return Nt(e, t);
}
function td(e, t) {
  var r = -1, n = Or(e) ? Array(e.length) : [];
  return $r(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function rd(e, t) {
  var r = F(e) ? ui : td;
  return r(e, Wr(t));
}
function nd(e, t, r) {
  return e = Ir(e), r = r == null ? 0 : Xi(Qi(r), 0, e.length), t = jt(t), e.slice(r, r + t.length) == t;
}
const id = {
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
      return !Mn(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
        nd(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = ed(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = rd(r, (i) => i.key).sort();
      Mn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
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
    debounceUpdateQuery: Xf(function(e, t, r) {
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
        if (!Jf(i, "]")) {
          t[i] = n[1];
          return;
        }
        const o = i.split("["), a = o[1].substring(0, o[1].length - 1);
        parseInt(a) == a ? (i = o[0], F(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
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
        if (!F(a)) {
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
        return m.replaceUrlOfCurrentPage(o);
      m.replace(o).then(() => {
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
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: m.visit
    });
  }
}, od = {
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
}, ad = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], sd = {
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
      positions: ad,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: Ze,
      TransitionRoot: ft,
      TransitionChild: ct
    });
  }
}, ld = {
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
            if (n.length === 1 && Ni(n) === "default") {
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
}, pd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Y(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Y(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Y(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Y(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, Tu).component(`${r}Confirm`, ac).component(`${r}Data`, dc).component(`${r}Defer`, pc).component(`${r}Errors`, hc).component(`${r}Event`, vc).component(`${r}Flash`, mc).component(`${r}Form`, If).component(`${r}Modal`, Bf).component(`${r}Render`, Ze).component(`${r}State`, Ff).component(`${r}Table`, id).component(`${r}Toast`, od).component(`${r}Toasts`, sd).component(`${r}Toggle`, ld).component(t.link_component, Rf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function hd(e, t, r) {
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
  hs as SpladeApp,
  pd as SpladePlugin,
  fd as renderSpladeApp,
  hd as startServer
};
