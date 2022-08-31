import Vn from "axios";
import { ref as O, computed as C, watch as nt, openBlock as R, createBlock as Me, unref as ve, h as F, onMounted as M, createElementBlock as se, createElementVNode as rr, provide as J, inject as Q, nextTick as it, resolveDynamicComponent as sa, KeepAlive as la, withCtx as Un, normalizeStyle as ua, createVNode as ca, Fragment as $r, renderList as fa, createCommentVNode as da, onBeforeUnmount as pa, renderSlot as ge, resolveComponent as ha, withDirectives as va, vShow as ma, cloneVNode as ga, watchEffect as Z, defineComponent as k, onUnmounted as Ge, Teleport as ya, reactive as ba, withModifiers as wa } from "vue";
function Oa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Sa(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var $a = Sa();
const Ea = $a;
function _a(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ta = typeof global == "object" && global && global.Object === Object && global;
const Wn = Ta;
var xa = typeof self == "object" && self && self.Object === Object && self, Aa = Wn || xa || Function("return this")();
const re = Aa;
var Pa = re.Symbol;
const ye = Pa;
var Gn = Object.prototype, Ia = Gn.hasOwnProperty, Ca = Gn.toString, Qe = ye ? ye.toStringTag : void 0;
function Da(e) {
  var t = Ia.call(e, Qe), r = e[Qe];
  try {
    e[Qe] = void 0;
    var n = !0;
  } catch {
  }
  var i = Ca.call(e);
  return n && (t ? e[Qe] = r : delete e[Qe]), i;
}
var ja = Object.prototype, Fa = ja.toString;
function Ba(e) {
  return Fa.call(e);
}
var Ra = "[object Null]", La = "[object Undefined]", rn = ye ? ye.toStringTag : void 0;
function Oe(e) {
  return e == null ? e === void 0 ? La : Ra : rn && rn in Object(e) ? Da(e) : Ba(e);
}
function be(e) {
  return e != null && typeof e == "object";
}
var qa = "[object Arguments]";
function nn(e) {
  return be(e) && Oe(e) == qa;
}
var zn = Object.prototype, Ma = zn.hasOwnProperty, Na = zn.propertyIsEnumerable, ka = nn(function() {
  return arguments;
}()) ? nn : function(e) {
  return be(e) && Ma.call(e, "callee") && !Na.call(e, "callee");
};
const Kn = ka;
var Ha = Array.isArray;
const L = Ha;
function Va() {
  return !1;
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, an = Xn && typeof module == "object" && module && !module.nodeType && module, Ua = an && an.exports === Xn, on = Ua ? re.Buffer : void 0, Wa = on ? on.isBuffer : void 0, Ga = Wa || Va;
const nr = Ga;
var za = 9007199254740991, Ka = /^(?:0|[1-9]\d*)$/;
function Er(e, t) {
  var r = typeof e;
  return t = t == null ? za : t, !!t && (r == "number" || r != "symbol" && Ka.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Xa = 9007199254740991;
function _r(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xa;
}
var Qa = "[object Arguments]", Ya = "[object Array]", Ja = "[object Boolean]", Za = "[object Date]", eo = "[object Error]", to = "[object Function]", ro = "[object Map]", no = "[object Number]", io = "[object Object]", ao = "[object RegExp]", oo = "[object Set]", so = "[object String]", lo = "[object WeakMap]", uo = "[object ArrayBuffer]", co = "[object DataView]", fo = "[object Float32Array]", po = "[object Float64Array]", ho = "[object Int8Array]", vo = "[object Int16Array]", mo = "[object Int32Array]", go = "[object Uint8Array]", yo = "[object Uint8ClampedArray]", bo = "[object Uint16Array]", wo = "[object Uint32Array]", I = {};
I[fo] = I[po] = I[ho] = I[vo] = I[mo] = I[go] = I[yo] = I[bo] = I[wo] = !0;
I[Qa] = I[Ya] = I[uo] = I[Ja] = I[co] = I[Za] = I[eo] = I[to] = I[ro] = I[no] = I[io] = I[ao] = I[oo] = I[so] = I[lo] = !1;
function Oo(e) {
  return be(e) && _r(e.length) && !!I[Oe(e)];
}
function So(e) {
  return function(t) {
    return e(t);
  };
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, Ze = Qn && typeof module == "object" && module && !module.nodeType && module, $o = Ze && Ze.exports === Qn, Xt = $o && Wn.process, Eo = function() {
  try {
    var e = Ze && Ze.require && Ze.require("util").types;
    return e || Xt && Xt.binding && Xt.binding("util");
  } catch {
  }
}();
const sn = Eo;
var ln = sn && sn.isTypedArray, _o = ln ? So(ln) : Oo;
const Yn = _o;
var To = Object.prototype, xo = To.hasOwnProperty;
function Ao(e, t) {
  var r = L(e), n = !r && Kn(e), i = !r && !n && nr(e), a = !r && !n && !i && Yn(e), o = r || n || i || a, s = o ? _a(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || xo.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Er(u, l))) && s.push(u);
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
var Fo = Object.prototype, Bo = Fo.hasOwnProperty;
function Ro(e) {
  if (!Io(e))
    return jo(e);
  var t = [];
  for (var r in Object(e))
    Bo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function le(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Lo = "[object AsyncFunction]", qo = "[object Function]", Mo = "[object GeneratorFunction]", No = "[object Proxy]";
function Jn(e) {
  if (!le(e))
    return !1;
  var t = Oe(e);
  return t == qo || t == Mo || t == Lo || t == No;
}
function Dt(e) {
  return e != null && _r(e.length) && !Jn(e);
}
function jt(e) {
  return Dt(e) ? Ao(e) : Ro(e);
}
function Tr(e, t) {
  return e && Ea(e, t, jt);
}
function ko(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Dt(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var Ho = ko(Tr);
const xr = Ho;
function Zn(e) {
  return e;
}
function ei(e) {
  return typeof e == "function" ? e : Zn;
}
function Vo(e, t) {
  var r = L(e) ? Oa : xr;
  return r(e, ei(t));
}
var Uo = Array.prototype, Wo = Uo.reverse;
function Go(e) {
  return e == null ? e : Wo.call(e);
}
const ir = O(1), Ie = typeof window > "u";
function zo(e, t) {
  Ie || window.addEventListener("popstate", Ko.bind(this)), Ir(t), Ft(t.head), Cr(e);
  const r = Ie ? "" : location.href, n = Ar(
    r,
    t.head,
    e,
    {},
    ir.value
  );
  ti(n);
}
function Ko(e) {
  q.value = e.state, ne.value = 0, Ft(q.value.head), Cr(q.value.html, q.value.rememberedState.scrollY);
}
function Ar(e, t, r, n, i) {
  const a = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: i
  };
  return q.value = a, a;
}
function Xo(e) {
  Ie || window.history.pushState(e, "", e.url);
}
function Qo(e) {
  const t = Ar(
    e,
    JSON.parse(JSON.stringify(q.value.head)),
    q.value.html,
    { ...q.value.rememberedState },
    q.value.pageVisitId
  );
  Ie || window.history.replaceState(t, "", t.url);
}
function ti(e) {
  Ie || window.history.replaceState(e, "", e.url);
}
const q = O({}), un = O(0);
function Yo(e, t) {
  un.value++;
  const r = e.request.responseURL;
  e.data.splade.modal && ne.value++, Ir(e.data.splade), Ft(e.data.splade.head);
  const n = r === q.value.url;
  if (n && (t = !0), e.data.splade.modal)
    return ls(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh && n)
    return;
  ne.value = 0;
  let i = e.data.html;
  t ? i += `<!-- ${un.value} -->` : ir.value++, Cr(i, 0);
  const a = Ar(
    r,
    e.data.splade.head,
    i,
    q.value.rememberedState ? { ...q.value.rememberedState } : {},
    ir.value
  );
  t ? ti(a) : Xo(a);
}
const ne = O(0);
function Jo() {
  ne.value--, Ft(es(ne.value));
}
const ri = O({}), ni = O({}), ii = (e) => ni.value[e], Zo = (e) => Object.keys(ii.value[e]).length > 0, ai = O({}), es = (e) => ai.value[e], oi = O({}), ts = (e) => oi.value[e], ke = O([]), rs = C(() => Go(ke.value));
function ns(e) {
  ke.value.push(e);
}
function is(e) {
  ke.value[e].dismissed = !0, ke.value[e].html = null;
}
const Pr = O(null);
function as(e, t, r, n) {
  let i, a;
  const o = new Promise((s, l) => {
    i = s, a = l;
  });
  return Pr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, o;
}
function os() {
  Pr.value = null;
}
function Ir(e) {
  ri.value = e.shared ? e.shared : {}, oi.value[ne.value] = e.flash ? e.flash : {}, ai.value[ne.value] = e.head ? e.head : {}, Vo(e.toasts ? e.toasts : [], (t) => {
    ke.value.push(t);
  }), ni.value[ne.value] = e.errors ? e.errors : {};
}
function ss(e) {
  pi.value(e);
}
function Ft(e) {
  ci.value(e);
}
function Cr(e, t) {
  fi.value(e, t);
}
function ls(e, t) {
  di.value(e, t);
}
const si = O({});
function li(e, t, r) {
  si.value[e] = t, r && us(e, t);
}
function us(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function cs(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : si.value[e];
}
function ut(e, t, r, n, i) {
  Ie || li("scrollY", window.scrollY);
  const a = Vn({
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
  return a.then((o) => {
    Yo(o, i);
  }).catch((o) => {
    const s = o.response.data.splade;
    s && Ir(s), o.response.status != 422 && ss(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function ui(e) {
  return ut(e, "GET", {}, {}, !0);
}
function fs(e) {
  return ut(e, "GET", {}, {}, !1);
}
function ds(e) {
  return ut(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
function ps(e) {
  return ut(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function hs() {
  return ui(q.value.url);
}
const ci = O(() => {
}), fi = O(() => {
}), di = O(() => {
}), pi = O(() => {
}), m = {
  init: zo,
  replace: ui,
  visit: fs,
  modal: ds,
  slideover: ps,
  refresh: hs,
  request: ut,
  replaceUrlOfCurrentPage: Qo,
  setOnHead(e) {
    ci.value = e;
  },
  setOnHtml(e) {
    fi.value = e;
  },
  setOnModal(e) {
    di.value = e;
  },
  setOnServerError(e) {
    pi.value = e;
  },
  hasValidationErrors: Zo,
  validationErrors: ii,
  sharedData: ri,
  flashData: ts,
  toasts: ke,
  toastsReversed: rs,
  confirmModal: Pr,
  confirm: as,
  clearConfirmModal: os,
  pushToast: ns,
  dismissToast: is,
  restore: cs,
  remember: li,
  popStack: Jo,
  currentStack: ne,
  pageVisitId: C(() => q.value.pageVisitId),
  isSsr: Ie
};
function Ne(e, t) {
  return e && Tr(e, ei(t));
}
var vs = "[object String]";
function Qt(e) {
  return typeof e == "string" || !L(e) && be(e) && Oe(e) == vs;
}
const et = {
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
      r.value = F({
        template: t.html
      });
    }
    return nt(() => t.html, n, { immediate: !0 }), (i, a) => (R(), Me(ve(r)));
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
    const i = O(null);
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
    return M(() => a()), (s, l) => (R(), se("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      rr("iframe", {
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
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!m.isSsr) {
          const t = Qt(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    J("stack", 0);
    const r = O(), n = O([]), i = O(null), a = C(() => m.currentStack.value < 1 ? [] : {
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
    const l = Q("$spladeOptions") || {};
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
      n.value = [], r.value = f, it(() => {
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
    }), m.init(t.initialHtml, t.initialSpladeData), (f, p) => (R(), se("div", null, [
      (R(), Me(sa(ve(m).isSsr ? "div" : la), {
        max: ve(l).max_keep_alive
      }, {
        default: Un(() => [
          (R(), Me(et, {
            key: `visit.${ve(m).pageVisitId.value}`,
            style: ua(ve(a)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      ca(et, { html: e.components }, null, 8, ["html"]),
      (R(!0), se($r, null, fa(ve(m).currentStack.value, (d) => (R(), Me(et, {
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
        onClose: o
      }, null, 8, ["html"])) : da("", !0)
    ]));
  }
};
function Fd(e) {
  return () => F(gs, e);
}
var ys = Object.prototype, bs = ys.hasOwnProperty;
function ws(e, t) {
  return e != null && bs.call(e, t);
}
var Os = "[object Symbol]";
function Bt(e) {
  return typeof e == "symbol" || be(e) && Oe(e) == Os;
}
var Ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $s = /^\w*$/;
function Dr(e, t) {
  if (L(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Bt(e) ? !0 : $s.test(e) || !Ss.test(e) || t != null && e in Object(t);
}
var Es = re["__core-js_shared__"];
const Yt = Es;
var cn = function() {
  var e = /[^.]+$/.exec(Yt && Yt.keys && Yt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _s(e) {
  return !!cn && cn in e;
}
var Ts = Function.prototype, xs = Ts.toString;
function Fe(e) {
  if (e != null) {
    try {
      return xs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var As = /[\\^$.*+?()[\]{}|]/g, Ps = /^\[object .+?Constructor\]$/, Is = Function.prototype, Cs = Object.prototype, Ds = Is.toString, js = Cs.hasOwnProperty, Fs = RegExp(
  "^" + Ds.call(js).replace(As, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bs(e) {
  if (!le(e) || _s(e))
    return !1;
  var t = Jn(e) ? Fs : Ps;
  return t.test(Fe(e));
}
function Rs(e, t) {
  return e == null ? void 0 : e[t];
}
function Be(e, t) {
  var r = Rs(e, t);
  return Bs(r) ? r : void 0;
}
var Ls = Be(Object, "create");
const at = Ls;
function qs() {
  this.__data__ = at ? at(null) : {}, this.size = 0;
}
function Ms(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ns = "__lodash_hash_undefined__", ks = Object.prototype, Hs = ks.hasOwnProperty;
function Vs(e) {
  var t = this.__data__;
  if (at) {
    var r = t[e];
    return r === Ns ? void 0 : r;
  }
  return Hs.call(t, e) ? t[e] : void 0;
}
var Us = Object.prototype, Ws = Us.hasOwnProperty;
function Gs(e) {
  var t = this.__data__;
  return at ? t[e] !== void 0 : Ws.call(t, e);
}
var zs = "__lodash_hash_undefined__";
function Ks(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = at && t === void 0 ? zs : t, this;
}
function Ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ce.prototype.clear = qs;
Ce.prototype.delete = Ms;
Ce.prototype.get = Vs;
Ce.prototype.has = Gs;
Ce.prototype.set = Ks;
function Xs() {
  this.__data__ = [], this.size = 0;
}
function jr(e, t) {
  return e === t || e !== e && t !== t;
}
function Rt(e, t) {
  for (var r = e.length; r--; )
    if (jr(e[r][0], t))
      return r;
  return -1;
}
var Qs = Array.prototype, Ys = Qs.splice;
function Js(e) {
  var t = this.__data__, r = Rt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ys.call(t, r, 1), --this.size, !0;
}
function Zs(e) {
  var t = this.__data__, r = Rt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function el(e) {
  return Rt(this.__data__, e) > -1;
}
function tl(e, t) {
  var r = this.__data__, n = Rt(r, e);
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
var rl = Be(re, "Map");
const ot = rl;
function nl() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (ot || ce)(),
    string: new Ce()
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
function al(e) {
  var t = Lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ol(e) {
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
fe.prototype.delete = al;
fe.prototype.get = ol;
fe.prototype.has = sl;
fe.prototype.set = ll;
var ul = "Expected a function";
function Fr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ul);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Fr.Cache || fe)(), r;
}
Fr.Cache = fe;
var cl = 500;
function fl(e) {
  var t = Fr(e, function(n) {
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
function hi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ml = 1 / 0, fn = ye ? ye.prototype : void 0, dn = fn ? fn.toString : void 0;
function qt(e) {
  if (typeof e == "string")
    return e;
  if (L(e))
    return hi(e, qt) + "";
  if (Bt(e))
    return dn ? dn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ml ? "-0" : t;
}
function Br(e) {
  return e == null ? "" : qt(e);
}
function Rr(e, t) {
  return L(e) ? e : Dr(e, t) ? [e] : vl(Br(e));
}
var gl = 1 / 0;
function ct(e) {
  if (typeof e == "string" || Bt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gl ? "-0" : t;
}
function vi(e, t, r) {
  t = Rr(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = ct(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && _r(i) && Er(o, i) && (L(e) || Kn(e)));
}
function G(e, t) {
  return e != null && vi(e, t, ws);
}
const yl = {
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
    }), pa(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value);
    }), (i, a) => (R(), se("div", {
      ref_key: "root",
      ref: n
    }, [
      ge(i.$slots, "default")
    ], 512));
  }
};
function U(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function De(e) {
  var t = U(e).Element;
  return e instanceof t || e instanceof Element;
}
function V(e) {
  var t = U(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = U(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Pe = Math.max, At = Math.min, He = Math.round;
function ar() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mi() {
  return !/^((?!chrome|android).)*safari/i.test(ar());
}
function Ve(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && V(e) && (i = e.offsetWidth > 0 && He(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && He(n.height) / e.offsetHeight || 1);
  var o = De(e) ? U(e) : window, s = o.visualViewport, l = !mi() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / i, c = (n.top + (l && s ? s.offsetTop : 0)) / a, f = n.width / i, p = n.height / a;
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
function qr(e) {
  var t = U(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function bl(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wl(e) {
  return e === U(e) || !V(e) ? qr(e) : bl(e);
}
function ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Se(e) {
  return ((De(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return Ve(Se(e)).left + qr(e).scrollLeft;
}
function X(e) {
  return U(e).getComputedStyle(e);
}
function Nr(e) {
  var t = X(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Ol(e) {
  var t = e.getBoundingClientRect(), r = He(t.width) / e.offsetWidth || 1, n = He(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Sl(e, t, r) {
  r === void 0 && (r = !1);
  var n = V(t), i = V(t) && Ol(t), a = Se(t), o = Ve(e, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((ee(t) !== "body" || Nr(a)) && (s = wl(t)), V(t) ? (l = Ve(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Mr(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function gi(e) {
  var t = Ve(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Mt(e) {
  return ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (Lr(e) ? e.host : null) || Se(e);
}
function yi(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : V(e) && Nr(e) ? e : yi(Mt(e));
}
function tt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = yi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = U(n), o = i ? [a].concat(a.visualViewport || [], Nr(n) ? n : []) : n, s = t.concat(o);
  return i ? s : s.concat(tt(Mt(o)));
}
function $l(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function pn(e) {
  return !V(e) || X(e).position === "fixed" ? null : e.offsetParent;
}
function El(e) {
  var t = /firefox/i.test(ar()), r = /Trident/i.test(ar());
  if (r && V(e)) {
    var n = X(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Mt(e);
  for (Lr(i) && (i = i.host); V(i) && ["html", "body"].indexOf(ee(i)) < 0; ) {
    var a = X(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Nt(e) {
  for (var t = U(e), r = pn(e); r && $l(r) && X(r).position === "static"; )
    r = pn(r);
  return r && (ee(r) === "html" || ee(r) === "body" && X(r).position === "static") ? t : r || El(e) || t;
}
var z = "top", te = "bottom", we = "right", ie = "left", kt = "auto", Ht = [z, te, we, ie], Ue = "start", st = "end", _l = "clippingParents", bi = "viewport", Ye = "popper", Tl = "reference", hn = /* @__PURE__ */ Ht.reduce(function(e, t) {
  return e.concat([t + "-" + Ue, t + "-" + st]);
}, []), xl = /* @__PURE__ */ [].concat(Ht, [kt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ue, t + "-" + st]);
}, []), Al = "beforeRead", Pl = "read", Il = "afterRead", Cl = "beforeMain", Dl = "main", jl = "afterMain", Fl = "beforeWrite", Bl = "write", Rl = "afterWrite", or = [Al, Pl, Il, Cl, Dl, jl, Fl, Bl, Rl];
function Ll(e) {
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
function ql(e) {
  var t = Ll(e);
  return or.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Ml(e) {
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
var Te = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Nl = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', vn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function kl(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), vn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(pe(Te, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(pe(Te, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          or.indexOf(t.phase) < 0 && console.error(pe(Te, t.name, '"phase"', "either " + or.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(pe(Te, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(pe(Te, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(pe(Te, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(pe(Te, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + vn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(pe(Nl, String(t.name), n, n));
      });
    });
  });
}
function Hl(e, t) {
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
function Vl(e) {
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
function Ul(e, t) {
  var r = U(e), n = Se(e), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var u = mi();
    (u || !u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + Mr(e),
    y: l
  };
}
function Wl(e) {
  var t, r = Se(e), n = qr(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Pe(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Pe(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Mr(e), l = -n.scrollTop;
  return X(i || r).direction === "rtl" && (s += Pe(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function Gl(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Lr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function sr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zl(e, t) {
  var r = Ve(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function mn(e, t, r) {
  return t === bi ? sr(Ul(e, r)) : De(t) ? zl(t, r) : sr(Wl(Se(e)));
}
function Kl(e) {
  var t = tt(Mt(e)), r = ["absolute", "fixed"].indexOf(X(e).position) >= 0, n = r && V(e) ? Nt(e) : e;
  return De(n) ? t.filter(function(i) {
    return De(i) && Gl(i, n) && ee(i) !== "body";
  }) : [];
}
function Xl(e, t, r, n) {
  var i = t === "clippingParents" ? Kl(e) : [].concat(t), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, u) {
    var c = mn(e, u, n);
    return l.top = Pe(c.top, l.top), l.right = At(c.right, l.right), l.bottom = At(c.bottom, l.bottom), l.left = Pe(c.left, l.left), l;
  }, mn(e, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function We(e) {
  return e.split("-")[1];
}
function wi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Oi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ae(n) : null, a = n ? We(n) : null, o = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case z:
      l = {
        x: o,
        y: t.y - r.height
      };
      break;
    case te:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case we:
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
  var u = i ? wi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ue:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case st:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Si() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ql(e) {
  return Object.assign({}, Si(), e);
}
function Yl(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function kr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, o = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? _l : s, u = r.rootBoundary, c = u === void 0 ? bi : u, f = r.elementContext, p = f === void 0 ? Ye : f, d = r.altBoundary, v = d === void 0 ? !1 : d, y = r.padding, b = y === void 0 ? 0 : y, x = Ql(typeof b != "number" ? b : Yl(b, Ht)), A = p === Ye ? Tl : Ye, P = e.rects.popper, E = e.elements[v ? A : p], $ = Xl(De(E) ? E : E.contextElement || Se(e.elements.popper), l, c, o), h = Ve(e.elements.reference), g = Oi({
    reference: h,
    element: P,
    strategy: "absolute",
    placement: i
  }), w = sr(Object.assign({}, P, g)), _ = p === Ye ? w : h, S = {
    top: $.top - _.top + x.top,
    bottom: _.bottom - $.bottom + x.bottom,
    left: $.left - _.left + x.left,
    right: _.right - $.right + x.right
  }, T = e.modifiersData.offset;
  if (p === Ye && T) {
    var D = T[i];
    Object.keys(S).forEach(function(j) {
      var W = [we, te].indexOf(j) >= 0 ? 1 : -1, Y = [z, te].indexOf(j) >= 0 ? "y" : "x";
      S[j] += D[Y] * W;
    });
  }
  return S;
}
var gn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Jl = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", yn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Zl(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? yn : i;
  return function(s, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yn, a),
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
        y(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: De(s) ? tt(s) : s.contextElement ? tt(s.contextElement) : [],
          popper: tt(l)
        };
        var P = ql(Vl([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = P.filter(function(T) {
          return T.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = Hl([].concat(P, c.options.modifiers), function(T) {
            var D = T.name;
            return D;
          });
          if (kl(E), ae(c.options.placement) === kt) {
            var $ = c.orderedModifiers.find(function(T) {
              var D = T.name;
              return D === "flip";
            });
            $ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = X(l), g = h.marginTop, w = h.marginRight, _ = h.marginBottom, S = h.marginLeft;
          [g, w, _, S].some(function(T) {
            return parseFloat(T);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return v(), d.update();
      },
      forceUpdate: function() {
        if (!p) {
          var x = c.elements, A = x.reference, P = x.popper;
          if (!bn(A, P)) {
            process.env.NODE_ENV !== "production" && console.error(gn);
            return;
          }
          c.rects = {
            reference: Sl(A, Nt(P), c.options.strategy === "fixed"),
            popper: gi(P)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var E = 0, $ = 0; $ < c.orderedModifiers.length; $++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(Jl);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var h = c.orderedModifiers[$], g = h.fn, w = h.options, _ = w === void 0 ? {} : w, S = h.name;
            typeof g == "function" && (c = g({
              state: c,
              options: _,
              name: S,
              instance: d
            }) || c);
          }
        }
      },
      update: Ml(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!bn(s, l))
      return process.env.NODE_ENV !== "production" && console.error(gn), d;
    d.setOptions(u).then(function(b) {
      !p && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function v() {
      c.orderedModifiers.forEach(function(b) {
        var x = b.name, A = b.options, P = A === void 0 ? {} : A, E = b.effect;
        if (typeof E == "function") {
          var $ = E({
            state: c,
            name: x,
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
var Ot = {
  passive: !0
};
function eu(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = U(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Ot);
  }), s && l.addEventListener("resize", r.update, Ot), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Ot);
    }), s && l.removeEventListener("resize", r.update, Ot);
  };
}
const tu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eu,
  data: {}
};
function ru(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Oi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const nu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ru,
  data: {}
};
var iu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function au(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: He(t * i) / i || 0,
    y: He(r * i) / i || 0
  };
}
function wn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = o.x, d = p === void 0 ? 0 : p, v = o.y, y = v === void 0 ? 0 : v, b = typeof c == "function" ? c({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = b.x, y = b.y;
  var x = o.hasOwnProperty("x"), A = o.hasOwnProperty("y"), P = ie, E = z, $ = window;
  if (u) {
    var h = Nt(r), g = "clientHeight", w = "clientWidth";
    if (h === U(r) && (h = Se(r), X(h).position !== "static" && s === "absolute" && (g = "scrollHeight", w = "scrollWidth")), h = h, i === z || (i === ie || i === we) && a === st) {
      E = te;
      var _ = f && h === $ && $.visualViewport ? $.visualViewport.height : h[g];
      y -= _ - n.height, y *= l ? 1 : -1;
    }
    if (i === ie || (i === z || i === te) && a === st) {
      P = we;
      var S = f && h === $ && $.visualViewport ? $.visualViewport.width : h[w];
      d -= S - n.width, d *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: s
  }, u && iu), D = c === !0 ? au({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = D.x, y = D.y, l) {
    var j;
    return Object.assign({}, T, (j = {}, j[E] = A ? "0" : "", j[P] = x ? "0" : "", j.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, T, (t = {}, t[E] = A ? y + "px" : "", t[P] = x ? d + "px" : "", t.transform = "", t));
}
function ou(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if (process.env.NODE_ENV !== "production") {
    var u = X(t.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
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
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const su = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ou,
  data: {}
};
function lu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !V(a) || !ee(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function uu(e) {
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
      !V(i) || !ee(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const cu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: lu,
  effect: uu,
  requires: ["computeStyles"]
};
var fu = [tu, nu, su, cu], du = /* @__PURE__ */ Zl({
  defaultModifiers: fu
});
function pu(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e, t, r) {
  return Pe(e, At(t, r));
}
function hu(e, t, r) {
  var n = Tt(e, t, r);
  return n > r ? r : n;
}
function vu(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, p = r.tether, d = p === void 0 ? !0 : p, v = r.tetherOffset, y = v === void 0 ? 0 : v, b = kr(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), x = ae(t.placement), A = We(t.placement), P = !A, E = wi(x), $ = pu(E), h = t.modifiersData.popperOffsets, g = t.rects.reference, w = t.rects.popper, _ = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, S = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (!!h) {
    if (a) {
      var j, W = E === "y" ? z : ie, Y = E === "y" ? te : we, B = E === "y" ? "height" : "width", N = h[E], mt = N + b[W], $e = N - b[Y], gt = d ? -w[B] / 2 : 0, Wt = A === Ue ? g[B] : w[B], Ke = A === Ue ? -w[B] : -g[B], yt = t.elements.arrow, Le = d && yt ? gi(yt) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Si(), Xe = de[W], bt = de[Y], Ee = Tt(0, g[B], Le[B]), Gt = P ? g[B] / 2 - gt - Ee - Xe - S.mainAxis : Wt - Ee - Xe - S.mainAxis, ta = P ? -g[B] / 2 + gt + Ee + bt + S.mainAxis : Ke + Ee + bt + S.mainAxis, zt = t.elements.arrow && Nt(t.elements.arrow), ra = zt ? E === "y" ? zt.clientTop || 0 : zt.clientLeft || 0 : 0, zr = (j = T == null ? void 0 : T[E]) != null ? j : 0, na = N + Gt - zr - ra, ia = N + ta - zr, Kr = Tt(d ? At(mt, na) : mt, N, d ? Pe($e, ia) : $e);
      h[E] = Kr, D[E] = Kr - N;
    }
    if (s) {
      var Xr, aa = E === "x" ? z : ie, oa = E === "x" ? te : we, _e = h[$], wt = $ === "y" ? "height" : "width", Qr = _e + b[aa], Yr = _e - b[oa], Kt = [z, ie].indexOf(x) !== -1, Jr = (Xr = T == null ? void 0 : T[$]) != null ? Xr : 0, Zr = Kt ? Qr : _e - g[wt] - w[wt] - Jr + S.altAxis, en = Kt ? _e + g[wt] + w[wt] - Jr - S.altAxis : Yr, tn = d && Kt ? hu(Zr, _e, en) : Tt(d ? Zr : Qr, _e, d ? en : Yr);
      h[$] = tn, D[$] = tn - _e;
    }
    t.modifiersData[n] = D;
  }
}
const mu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vu,
  requiresIfExists: ["offset"]
};
var gu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gu[t];
  });
}
var yu = {
  start: "end",
  end: "start"
};
function On(e) {
  return e.replace(/start|end/g, function(t) {
    return yu[t];
  });
}
function bu(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? xl : l, c = We(n), f = c ? s ? hn : hn.filter(function(v) {
    return We(v) === c;
  }) : Ht, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = p.reduce(function(v, y) {
    return v[y] = kr(e, {
      placement: y,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[ae(y)], v;
  }, {});
  return Object.keys(d).sort(function(v, y) {
    return d[v] - d[y];
  });
}
function wu(e) {
  if (ae(e) === kt)
    return [];
  var t = xt(e);
  return [On(e), t, On(t)];
}
function Ou(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, v = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, b = t.options.placement, x = ae(b), A = x === b, P = l || (A || !v ? [xt(b)] : wu(b)), E = [b].concat(P).reduce(function(Le, de) {
      return Le.concat(ae(de) === kt ? bu(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: y
      }) : de);
    }, []), $ = t.rects.reference, h = t.rects.popper, g = /* @__PURE__ */ new Map(), w = !0, _ = E[0], S = 0; S < E.length; S++) {
      var T = E[S], D = ae(T), j = We(T) === Ue, W = [z, te].indexOf(D) >= 0, Y = W ? "width" : "height", B = kr(t, {
        placement: T,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), N = W ? j ? we : ie : j ? te : z;
      $[Y] > h[Y] && (N = xt(N));
      var mt = xt(N), $e = [];
      if (a && $e.push(B[D] <= 0), s && $e.push(B[N] <= 0, B[mt] <= 0), $e.every(function(Le) {
        return Le;
      })) {
        _ = T, w = !1;
        break;
      }
      g.set(T, $e);
    }
    if (w)
      for (var gt = v ? 3 : 1, Wt = function(de) {
        var Xe = E.find(function(bt) {
          var Ee = g.get(bt);
          if (Ee)
            return Ee.slice(0, de).every(function(Gt) {
              return Gt;
            });
        });
        if (Xe)
          return _ = Xe, "break";
      }, Ke = gt; Ke > 0; Ke--) {
        var yt = Wt(Ke);
        if (yt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const Su = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ou,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, $u = {
  components: {
    OnClickOutside: yl
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
    this.popper = du(this.$refs.button, this.$refs.tooltip.children[0], {
      placement: this.placement,
      modifiers: [Su, mu]
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
}, Eu = { ref: "button" }, _u = { ref: "tooltip" };
function Tu(e, t, r, n, i, a) {
  const o = ha("OnClickOutside");
  return R(), Me(o, { do: a.hide }, {
    default: Un(() => [
      rr("button", Eu, [
        ge(e.$slots, "button", { toggle: a.toggle })
      ], 512),
      va(rr("div", _u, [
        ge(e.$slots, "default", { hide: a.hide })
      ], 512), [
        [ma, i.opened]
      ])
    ]),
    _: 3
  }, 8, ["do"]);
}
const xu = /* @__PURE__ */ ft($u, [["render", Tu]]);
function K(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, K), n;
}
var Pt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pt || {}), me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});
function H({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let o = Au(n, r), s = Object.assign(i, { props: o });
  if (e || t & 2 && o.static)
    return Jt(s);
  if (t & 1) {
    let l = (a = o.unmount) == null || a ? 0 : 1;
    return K(l, { [0]() {
      return null;
    }, [1]() {
      return Jt({ ...i, props: { ...o, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Jt(s);
}
function Jt({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: o, ...s } = Ei(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (o === "template") {
    if (l = $i(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l != null ? l : [];
      if (!Pu(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((p, d) => p.localeCompare(d)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return ga(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return F(o, Object.assign({}, s, u), l);
}
function $i(e) {
  return e.flatMap((t) => t.type === $r ? $i(t.children) : [t]);
}
function Au(...e) {
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
        if (i != null && i.defaultPrevented)
          return;
        s(i, ...a);
      }
    } });
  return t;
}
function Ei(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Pu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Iu = 0;
function Cu() {
  return ++Iu;
}
function Re() {
  return Cu();
}
var _i = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_i || {});
function ue(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ti = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Du() {
  return Hr() !== null;
}
function Hr() {
  return Q(Ti, null);
}
function ju(e) {
  J(Ti, e);
}
function ze(e) {
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
let lr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var lt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(lt || {}), xi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(xi || {}), Fu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Fu || {});
function Bu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(lr));
}
var Ai = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ai || {});
function Ru(e, t = 0) {
  var r;
  return e === ((r = ze(e)) == null ? void 0 : r.body) ? !1 : K(t, { [0]() {
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
function rt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Lu = ["textarea", "input"].join(",");
function qu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Lu)) != null ? r : !1;
}
function Mu(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let o = i.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ur(e, t, r = !0) {
  var n;
  let i = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, a = Array.isArray(e) ? r ? Mu(e) : e : Bu(e), o = i.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(o)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = a.length, p;
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
    p = a[d], p == null || p.focus(u), c += s;
  } while (p !== i.activeElement);
  return p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), t & 6 && qu(p) && p.select(), 2;
}
function cr(e, t, r) {
  typeof window < "u" && Z((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Nu(e, t, r = C(() => !0)) {
  function n(i, a) {
    if (!r.value || i.defaultPrevented)
      return;
    let o = a(i);
    if (o === null || !o.ownerDocument.documentElement.contains(o))
      return;
    let s = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of s) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : ue(l);
      if (u != null && u.contains(o))
        return;
    }
    return !Ru(o, Ai.Loose) && o.tabIndex !== -1 && i.preventDefault(), t(i, o);
  }
  cr("click", (i) => n(i, (a) => a.target), !0), cr("blur", (i) => n(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var It = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(It || {});
let fr = k({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var dr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(dr || {});
function ku() {
  let e = O(0);
  return cr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Pi(e, t, r, n) {
  typeof window < "u" && Z((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
var Ii = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Ii || {});
let Je = Object.assign(k({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: O(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = O(null);
  n({ el: i, $el: i });
  let a = C(() => ze(i));
  Hu({ ownerDocument: a }, C(() => Boolean(e.features & 16)));
  let o = Vu({ ownerDocument: a, container: i, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  Uu({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: o }, C(() => Boolean(e.features & 8)));
  let s = ku();
  function l() {
    let u = ue(i);
    !u || K(s.value, { [dr.Forwards]: () => ur(u, lt.First), [dr.Backwards]: () => ur(u, lt.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: f, initialFocus: p, containers: d, ...v } = e;
    return F($r, [Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable }), H({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(f & 4) && F(fr, { as: "button", type: "button", onFocus: l, features: It.Focusable })]);
  };
} }), { features: Ii });
function Hu({ ownerDocument: e }, t) {
  let r = O(null), n = { value: !1 };
  M(() => {
    nt(t, (i, a) => {
      var o;
      i !== a && (!t.value || (n.value = !0, r.value || (r.value = (o = e.value) == null ? void 0 : o.activeElement)));
    }, { immediate: !0 }), nt(t, (i, a, o) => {
      i !== a && (!t.value || o(() => {
        n.value !== !1 && (n.value = !1, rt(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function Vu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = O(null);
  return M(() => {
    nt([t, r, n], (a, o) => {
      if (a.every((l, u) => (o == null ? void 0 : o[u]) === l) || !n.value)
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
        c ? rt(c) : ur(s, lt.First | lt.NoScroll) === xi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function Uu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  Pi((a = e.value) == null ? void 0 : a.defaultView, "focus", (o) => {
    if (!i.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = o.target;
    u && u instanceof HTMLElement ? Wu(s, u) ? (n.value = u, rt(u)) : (o.preventDefault(), o.stopPropagation(), rt(l)) : rt(n.value);
  }, !0);
}
function Wu(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Sn = "body > *", qe = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
function $n(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function En(e) {
  let t = he.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Gu(e, t = O(!0)) {
  Z((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = ze(n);
    if (i) {
      qe.add(n);
      for (let a of he.keys())
        a.contains(n) && (En(a), he.delete(a));
      i.querySelectorAll(Sn).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let o of qe)
            if (a.contains(o))
              return;
          qe.size === 1 && (he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), $n(a));
        }
      }), r(() => {
        if (qe.delete(n), qe.size > 0)
          i.querySelectorAll(Sn).forEach((a) => {
            if (a instanceof HTMLElement && !he.has(a)) {
              for (let o of qe)
                if (a.contains(o))
                  return;
              he.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), $n(a);
            }
          });
        else
          for (let a of he.keys())
            En(a), he.delete(a);
      });
    }
  });
}
let Ci = Symbol("ForcePortalRootContext");
function zu() {
  return Q(Ci, !1);
}
let pr = k({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return J(Ci, e.force), () => {
    let { force: n, ...i } = e;
    return H({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Ku(e) {
  let t = ze(e);
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
let Di = k({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = O(null), i = C(() => ze(n)), a = zu(), o = Q(ji, null), s = O(a === !0 || o == null ? Ku(n.value) : o.resolveTarget());
  return Z(() => {
    a || o != null && (s.value = o.resolveTarget());
  }), Ge(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return F(ya, { to: s.value }, H({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), ji = Symbol("PortalGroupContext"), Xu = k({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = ba({ resolveTarget() {
    return e.target;
  } });
  return J(ji, n), () => {
    let { target: i, ...a } = e;
    return H({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Fi = Symbol("StackContext");
var hr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(hr || {});
function Qu() {
  return Q(Fi, () => {
  });
}
function Yu({ type: e, element: t, onUpdate: r }) {
  let n = Qu();
  function i(...a) {
    r == null || r(...a), n(...a);
  }
  M(() => {
    i(0, e, t), Ge(() => {
      i(1, e, t);
    });
  }), J(Fi, i);
}
let Bi = Symbol("DescriptionContext");
function Ju() {
  let e = Q(Bi, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Zu({ slot: e = O({}), name: t = "Description", props: r = {} } = {}) {
  let n = O([]);
  function i(a) {
    return n.value.push(a), () => {
      let o = n.value.indexOf(a);
      o !== -1 && n.value.splice(o, 1);
    };
  }
  return J(Bi, { register: i, slot: e, name: t, props: r }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Bd = k({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ju(), i = `headlessui-description-${Re()}`;
  return M(() => Ge(n.register(i))), () => {
    let { name: a = "Description", slot: o = O({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [f, p]) => Object.assign(c, { [f]: ve(p) }), {}), id: i };
    return H({ ourProps: u, theirProps: l, slot: o.value, attrs: t, slots: r, name: a });
  };
} });
var ec = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ec || {});
let vr = Symbol("DialogContext");
function dt(e) {
  let t = Q(vr, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, dt), r;
  }
  return t;
}
let St = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ri = k({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: St }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let o = O(!1);
  M(() => {
    o.value = !0;
  });
  let s = O(0), l = Hr(), u = C(() => e.open === St && l !== null ? K(l.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.open), c = O(/* @__PURE__ */ new Set()), f = O(null), p = O(null), d = C(() => ze(f));
  if (i({ el: f, $el: f }), !(e.open !== St || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === St ? void 0 : e.open}`);
  let v = C(() => o.value && u.value ? 0 : 1), y = C(() => v.value === 0), b = C(() => s.value > 1), x = Q(vr, null) !== null, A = C(() => b.value ? "parent" : "leaf");
  Gu(f, C(() => b.value ? y.value : !1)), Yu({ type: "Dialog", element: f, onUpdate: (g, w, _) => {
    if (w === "Dialog")
      return K(g, { [hr.Add]() {
        c.value.add(_), s.value += 1;
      }, [hr.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let P = Zu({ name: "DialogDescription", slot: C(() => ({ open: u.value })) }), E = `headlessui-dialog-${Re()}`, $ = O(null), h = { titleId: $, panelRef: O(null), dialogState: v, setTitleId(g) {
    $.value !== g && ($.value = g);
  }, close() {
    t("close", !1);
  } };
  return J(vr, h), Nu(() => {
    var g, w, _;
    return [...Array.from((w = (g = d.value) == null ? void 0 : g.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((S) => !(!(S instanceof HTMLElement) || S.contains(ue(p)) || h.panelRef.value && S.contains(h.panelRef.value))), (_ = h.panelRef.value) != null ? _ : f.value];
  }, (g, w) => {
    h.close(), it(() => w == null ? void 0 : w.focus());
  }, C(() => v.value === 0 && !b.value)), Pi((a = d.value) == null ? void 0 : a.defaultView, "keydown", (g) => {
    g.defaultPrevented || g.key === _i.Escape && v.value === 0 && (b.value || (g.preventDefault(), g.stopPropagation(), h.close()));
  }), Z((g) => {
    var w;
    if (v.value !== 0 || x)
      return;
    let _ = d.value;
    if (!_)
      return;
    let S = _ == null ? void 0 : _.documentElement, T = (w = _.defaultView) != null ? w : window, D = S.style.overflow, j = S.style.paddingRight, W = T.innerWidth - S.clientWidth;
    if (S.style.overflow = "hidden", W > 0) {
      let Y = S.clientWidth - S.offsetWidth, B = W - Y;
      S.style.paddingRight = `${B}px`;
    }
    g(() => {
      S.style.overflow = D, S.style.paddingRight = j;
    });
  }), Z((g) => {
    if (v.value !== 0)
      return;
    let w = ue(f);
    if (!w)
      return;
    let _ = new IntersectionObserver((S) => {
      for (let T of S)
        T.boundingClientRect.x === 0 && T.boundingClientRect.y === 0 && T.boundingClientRect.width === 0 && T.boundingClientRect.height === 0 && h.close();
    });
    _.observe(w), g(() => _.disconnect());
  }), () => {
    let g = { ...r, ref: f, id: E, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": P.value }, { open: w, initialFocus: _, ...S } = e, T = { open: v.value === 0 };
    return F(pr, { force: !0 }, () => [F(Di, () => F(Xu, { target: f.value }, () => F(pr, { force: !1 }, () => F(Je, { initialFocus: _, containers: c, features: y.value ? K(A.value, { parent: Je.features.RestoreFocus, leaf: Je.features.All & ~Je.features.FocusLock }) : Je.features.None }, () => H({ ourProps: g, theirProps: S, slot: T, attrs: r, slots: n, visible: v.value === 0, features: Pt.RenderStrategy | Pt.Static, name: "Dialog" }))))), F(fr, { features: It.Hidden, ref: p })]);
  };
} });
k({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = dt("DialogOverlay"), i = `headlessui-dialog-overlay-${Re()}`;
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), n.close());
  }
  return () => H({ ourProps: { id: i, "aria-hidden": !0, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
k({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Re()}`, o = O(null);
  return n({ el: o, $el: o }), M(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: a, ref: o, "aria-hidden": !0 };
    return F(pr, { force: !0 }, () => F(Di, () => H({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Li = k({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = dt("DialogPanel"), a = `headlessui-dialog-panel-${Re()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: a, ref: i.panelRef, onClick: o };
    return H({ ourProps: s, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
k({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = dt("DialogTitle"), i = `headlessui-dialog-title-${Re()}`;
  return M(() => {
    n.setTitleId(i), Ge(() => n.setTitleId(null));
  }), () => H({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function tc(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function qi() {
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
function Zt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function $t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var mr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(mr || {});
function rc(e, t) {
  let r = qi();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, o] = [n, i].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + o) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function _n(e, t, r, n, i, a) {
  let o = qi(), s = a !== void 0 ? tc(a) : () => {
  };
  return $t(e, ...i), Zt(e, ...t, ...r), o.nextFrame(() => {
    $t(e, ...r), Zt(e, ...n), o.add(rc(e, (l) => ($t(e, ...n, ...t), Zt(e, ...i), s(l))));
  }), o.add(() => $t(e, ...t, ...r, ...n, ...i)), o.add(() => s("cancelled")), o.dispose;
}
function xe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Vr = Symbol("TransitionContext");
var nc = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(nc || {});
function ic() {
  return Q(Vr, null) !== null;
}
function ac() {
  let e = Q(Vr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function oc() {
  let e = Q(Ur, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Ur = Symbol("NestingContext");
function Vt(e) {
  return "children" in e ? Vt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Mi(e) {
  let t = O([]), r = O(!1);
  M(() => r.value = !0), Ge(() => r.value = !1);
  function n(a, o = me.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === a);
    s !== -1 && (K(o, { [me.Unmount]() {
      t.value.splice(s, 1);
    }, [me.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Vt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let o = t.value.find(({ id: s }) => s === a);
    return o ? o.state !== "visible" && (o.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, me.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Ni = Pt.RenderStrategy, pt = k({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!ic() && Du())
    return () => F(ht, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = O(null), o = O("visible"), s = C(() => e.unmount ? me.Unmount : me.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = ac(), { register: c, unregister: f } = oc(), p = { value: !0 }, d = Re(), v = { value: !1 }, y = Mi(() => {
    v.value || (o.value = "hidden", f(d), t("afterLeave"));
  });
  M(() => {
    let w = c(d);
    Ge(w);
  }), Z(() => {
    if (s.value === me.Hidden && !!d) {
      if (l && o.value !== "visible") {
        o.value = "visible";
        return;
      }
      K(o.value, { hidden: () => f(d), visible: () => c(d) });
    }
  });
  let b = xe(e.enter), x = xe(e.enterFrom), A = xe(e.enterTo), P = xe(e.entered), E = xe(e.leave), $ = xe(e.leaveFrom), h = xe(e.leaveTo);
  M(() => {
    Z(() => {
      if (o.value === "visible") {
        let w = ue(a);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function g(w) {
    let _ = p.value && !u.value, S = ue(a);
    !S || !(S instanceof HTMLElement) || _ || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? _n(S, b, x, A, P, (T) => {
      v.value = !1, T === mr.Finished && t("afterEnter");
    }) : _n(S, E, $, h, P, (T) => {
      v.value = !1, T === mr.Finished && (Vt(y) || (o.value = "hidden", f(d), t("afterLeave")));
    })));
  }
  return M(() => {
    nt([l], (w, _, S) => {
      g(S), p.value = !1;
    }, { immediate: !0 });
  }), J(Ur, y), ju(C(() => K(o.value, { visible: je.Open, hidden: je.Closed }))), () => {
    let { appear: w, show: _, enter: S, enterFrom: T, enterTo: D, entered: j, leave: W, leaveFrom: Y, leaveTo: B, ...N } = e;
    return H({ theirProps: N, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Ni, visible: o.value === "visible", name: "TransitionChild" });
  };
} }), sc = pt, ht = k({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Hr(), a = C(() => e.show === null && i !== null ? K(i.value, { [je.Open]: !0, [je.Closed]: !1 }) : e.show);
  Z(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let o = O(a.value ? "visible" : "hidden"), s = Mi(() => {
    o.value = "hidden";
  }), l = O(!0), u = { show: a, appear: C(() => e.appear || !l.value) };
  return M(() => {
    Z(() => {
      l.value = !1, a.value ? o.value = "visible" : Vt(s) || (o.value = "hidden");
    });
  }), J(Ur, s), J(Vr, u), () => {
    let c = Ei(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return H({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [F(sc, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: Ni, visible: o.value === "visible", name: "Transition" });
  };
} });
const lc = {
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
      Dialog: Ri,
      DialogPanel: Li,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
};
function ki(e, t) {
  t = Rr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ct(t[r++])];
  return r && r == n ? e : void 0;
}
function Wr(e, t, r) {
  var n = e == null ? void 0 : ki(e, t);
  return n === void 0 ? r : n;
}
var uc = function() {
  try {
    var e = Be(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Tn = uc;
function Hi(e, t, r) {
  t == "__proto__" && Tn ? Tn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var cc = Object.prototype, fc = cc.hasOwnProperty;
function dc(e, t, r) {
  var n = e[t];
  (!(fc.call(e, t) && jr(n, r)) || r === void 0 && !(t in e)) && Hi(e, t, r);
}
function pc(e, t, r, n) {
  if (!le(e))
    return e;
  t = Rr(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var l = ct(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != o) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = le(c) ? c : Er(t[i + 1]) ? [] : {});
    }
    dc(s, l, u), s = s[l];
  }
  return e;
}
function Vi(e, t, r) {
  return e == null ? e : pc(e, t, r);
}
const hc = {
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
          return Wr(e.values, r);
        },
        set(t, r, n) {
          Vi(e.values, r, n);
        }
      })
    );
  }
}, vc = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), Vn(e).then((t) => {
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
function Ui(e) {
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
        return G(e.values, t);
      },
      first(t) {
        return Ui(e.values[t] || []);
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
        const n = "splade.redirect", i = "splade.refresh", a = "splade.toast";
        let o = null, s = !1, l = [];
        Ne(r, (u) => {
          !le(u) || (n in u && (o = u[n]), i in u && (s = u[i]), a in u && l.push(u));
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
function wc(e, t, r, n, i, a) {
  return R(), se("div", bc, [
    ge(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Oc = /* @__PURE__ */ ft(yc, [["render", wc]]), Sc = {
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
function gr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => gr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => gr(t));
}
function Wi(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && zi(t, Gi(null, r), e[r]);
  return t;
}
function Gi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function zi(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => zi(e, Gi(t, n.toString()), r[n]));
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
  Wi(r);
}
var $c = "[object Boolean]";
function Ki(e) {
  return e === !0 || e === !1 || be(e) && Oe(e) == $c;
}
function Ec() {
  this.__data__ = new ce(), this.size = 0;
}
function _c(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Tc(e) {
  return this.__data__.get(e);
}
function xc(e) {
  return this.__data__.has(e);
}
var Ac = 200;
function Pc(e, t) {
  var r = this.__data__;
  if (r instanceof ce) {
    var n = r.__data__;
    if (!ot || n.length < Ac - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new fe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function oe(e) {
  var t = this.__data__ = new ce(e);
  this.size = t.size;
}
oe.prototype.clear = Ec;
oe.prototype.delete = _c;
oe.prototype.get = Tc;
oe.prototype.has = xc;
oe.prototype.set = Pc;
var Ic = "__lodash_hash_undefined__";
function Cc(e) {
  return this.__data__.set(e, Ic), this;
}
function Dc(e) {
  return this.__data__.has(e);
}
function Ct(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new fe(); ++t < r; )
    this.add(e[t]);
}
Ct.prototype.add = Ct.prototype.push = Cc;
Ct.prototype.has = Dc;
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
function Xi(e, t, r, n, i, a) {
  var o = r & Bc, s = e.length, l = t.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, p = !0, d = r & Rc ? new Ct() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var v = e[f], y = t[f];
    if (n)
      var b = o ? n(y, v, f, t, e, a) : n(v, y, f, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!jc(t, function(x, A) {
        if (!Fc(d, A) && (v === x || i(v, x, r, n, a)))
          return d.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === y || i(v, y, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Lc = re.Uint8Array;
const xn = Lc;
function qc(e) {
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
var Nc = 1, kc = 2, Hc = "[object Boolean]", Vc = "[object Date]", Uc = "[object Error]", Wc = "[object Map]", Gc = "[object Number]", zc = "[object RegExp]", Kc = "[object Set]", Xc = "[object String]", Qc = "[object Symbol]", Yc = "[object ArrayBuffer]", Jc = "[object DataView]", An = ye ? ye.prototype : void 0, er = An ? An.valueOf : void 0;
function Zc(e, t, r, n, i, a, o) {
  switch (r) {
    case Jc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Yc:
      return !(e.byteLength != t.byteLength || !a(new xn(e), new xn(t)));
    case Hc:
    case Vc:
    case Gc:
      return jr(+e, +t);
    case Uc:
      return e.name == t.name && e.message == t.message;
    case zc:
    case Xc:
      return e == t + "";
    case Wc:
      var s = qc;
    case Kc:
      var l = n & Nc;
      if (s || (s = Mc), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= kc, o.set(e, t);
      var c = Xi(s(e), s(t), n, i, a, o);
      return o.delete(e), c;
    case Qc:
      if (er)
        return er.call(e) == er.call(t);
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
  return L(e) ? n : ef(n, r(e));
}
function Qi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function rf() {
  return [];
}
var nf = Object.prototype, af = nf.propertyIsEnumerable, Pn = Object.getOwnPropertySymbols, of = Pn ? function(e) {
  return e == null ? [] : (e = Object(e), Qi(Pn(e), function(t) {
    return af.call(e, t);
  }));
} : rf;
const sf = of;
function In(e) {
  return tf(e, jt, sf);
}
var lf = 1, uf = Object.prototype, cf = uf.hasOwnProperty;
function ff(e, t, r, n, i, a) {
  var o = r & lf, s = In(e), l = s.length, u = In(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var f = l; f--; ) {
    var p = s[f];
    if (!(o ? p in t : cf.call(t, p)))
      return !1;
  }
  var d = a.get(e), v = a.get(t);
  if (d && v)
    return d == t && v == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var b = o; ++f < l; ) {
    p = s[f];
    var x = e[p], A = t[p];
    if (n)
      var P = o ? n(A, x, p, t, e, a) : n(x, A, p, e, t, a);
    if (!(P === void 0 ? x === A || i(x, A, r, n, a) : P)) {
      y = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (y && !b) {
    var E = e.constructor, $ = t.constructor;
    E != $ && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof $ == "function" && $ instanceof $) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var df = Be(re, "DataView");
const yr = df;
var pf = Be(re, "Promise");
const br = pf;
var hf = Be(re, "Set");
const wr = hf;
var vf = Be(re, "WeakMap");
const Or = vf;
var Cn = "[object Map]", mf = "[object Object]", Dn = "[object Promise]", jn = "[object Set]", Fn = "[object WeakMap]", Bn = "[object DataView]", gf = Fe(yr), yf = Fe(ot), bf = Fe(br), wf = Fe(wr), Of = Fe(Or), Ae = Oe;
(yr && Ae(new yr(new ArrayBuffer(1))) != Bn || ot && Ae(new ot()) != Cn || br && Ae(br.resolve()) != Dn || wr && Ae(new wr()) != jn || Or && Ae(new Or()) != Fn) && (Ae = function(e) {
  var t = Oe(e), r = t == mf ? e.constructor : void 0, n = r ? Fe(r) : "";
  if (n)
    switch (n) {
      case gf:
        return Bn;
      case yf:
        return Cn;
      case bf:
        return Dn;
      case wf:
        return jn;
      case Of:
        return Fn;
    }
  return t;
});
const Rn = Ae;
var Sf = 1, Ln = "[object Arguments]", qn = "[object Array]", Et = "[object Object]", $f = Object.prototype, Mn = $f.hasOwnProperty;
function Ef(e, t, r, n, i, a) {
  var o = L(e), s = L(t), l = o ? qn : Rn(e), u = s ? qn : Rn(t);
  l = l == Ln ? Et : l, u = u == Ln ? Et : u;
  var c = l == Et, f = u == Et, p = l == u;
  if (p && nr(e)) {
    if (!nr(t))
      return !1;
    o = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new oe()), o || Yn(e) ? Xi(e, t, r, n, i, a) : Zc(e, t, l, r, n, i, a);
  if (!(r & Sf)) {
    var d = c && Mn.call(e, "__wrapped__"), v = f && Mn.call(t, "__wrapped__");
    if (d || v) {
      var y = d ? e.value() : e, b = v ? t.value() : t;
      return a || (a = new oe()), i(y, b, r, n, a);
    }
  }
  return p ? (a || (a = new oe()), ff(e, t, r, n, i, a)) : !1;
}
function Ut(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !be(e) && !be(t) ? e !== e && t !== t : Ef(e, t, r, n, Ut, i);
}
var _f = 1, Tf = 2;
function xf(e, t, r, n) {
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
      var f = new oe();
      if (n)
        var p = n(u, c, l, e, t, f);
      if (!(p === void 0 ? Ut(c, u, _f | Tf, n, f) : p))
        return !1;
    }
  }
  return !0;
}
function Yi(e) {
  return e === e && !le(e);
}
function Af(e) {
  for (var t = jt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Yi(i)];
  }
  return t;
}
function Ji(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Pf(e) {
  var t = Af(e);
  return t.length == 1 && t[0][2] ? Ji(t[0][0], t[0][1]) : function(r) {
    return r === e || xf(r, e, t);
  };
}
function If(e, t) {
  return e != null && t in Object(e);
}
function Cf(e, t) {
  return e != null && vi(e, t, If);
}
var Df = 1, jf = 2;
function Ff(e, t) {
  return Dr(e) && Yi(t) ? Ji(ct(e), t) : function(r) {
    var n = Wr(r, e);
    return n === void 0 && n === t ? Cf(r, e) : Ut(t, n, Df | jf);
  };
}
function Bf(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Rf(e) {
  return function(t) {
    return ki(t, e);
  };
}
function Lf(e) {
  return Dr(e) ? Bf(ct(e)) : Rf(e);
}
function vt(e) {
  return typeof e == "function" ? e : e == null ? Zn : typeof e == "object" ? L(e) ? Ff(e[0], e[1]) : Pf(e) : Lf(e);
}
function Zi(e, t) {
  var r = {};
  return t = vt(t), Tr(e, function(n, i, a) {
    Hi(r, i, t(n, i, a));
  }), r;
}
const qf = {
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
      return Zi(this.rawErrors, (e) => e.join(`
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
      return G(this.errors, e);
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
      const t = e.submitter;
      if (t.name && this.$put(t.name, t.value), !this.confirm)
        return this.request();
      m.confirm(
        Ki(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || gr(this.values) ? Wi(this.values) : this.values, t = { Accept: "application/json" };
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
            ].includes(r) ? e[r] : (G(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), Wr(e.values, r));
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
}, Nf = { ref: "input" };
function kf(e, t, r, n, i, a) {
  return R(), se("div", Nf, [
    ge(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Hf = /* @__PURE__ */ ft(Mf, [["render", kf]]), Vf = ["href", "onClick"], Uf = {
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
        Ki(t.confirm) ? "" : t.confirm,
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
    return (i, a) => (R(), se("a", {
      href: e.href,
      onClick: wa(r, ["prevent"])
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
      Dialog: Ri,
      DialogPanel: Li,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
};
function Gf(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Dt(t)) {
      var a = vt(r);
      t = jt(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
function zf(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
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
var Nn = 0 / 0, Jf = /^[-+]0x[0-9a-f]+$/i, Zf = /^0b[01]+$/i, ed = /^0o[0-7]+$/i, td = parseInt;
function Sr(e) {
  if (typeof e == "number")
    return e;
  if (Bt(e))
    return Nn;
  if (le(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = le(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Yf(e);
  var r = Zf.test(e);
  return r || ed.test(e) ? td(e.slice(2), r ? 2 : 8) : Jf.test(e) ? Nn : +e;
}
var kn = 1 / 0, rd = 17976931348623157e292;
function nd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Sr(e), e === kn || e === -kn) {
    var t = e < 0 ? -1 : 1;
    return t * rd;
  }
  return e === e ? e : 0;
}
function Gr(e) {
  var t = nd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var id = Math.max;
function ad(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Gr(r);
  return i < 0 && (i = id(n + i, 0)), zf(e, vt(t), i);
}
var od = Gf(ad);
const sd = od, ld = {
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
}, ud = { ref: "select" };
function cd(e, t, r, n, i, a) {
  return R(), se("div", ud, [
    ge(e.$slots, "default")
  ], 512);
}
const fd = /* @__PURE__ */ ft(ld, [["render", cd]]), dd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = Zi(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return G(e, i);
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
var pd = function() {
  return re.Date.now();
};
const tr = pd;
var hd = "Expected a function", vd = Math.max, md = Math.min;
function gd(e, t, r) {
  var n, i, a, o, s, l, u = 0, c = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(hd);
  t = Sr(t) || 0, le(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? vd(Sr(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function d(h) {
    var g = n, w = i;
    return n = i = void 0, u = h, o = e.apply(w, g), o;
  }
  function v(h) {
    return u = h, s = setTimeout(x, t), c ? d(h) : o;
  }
  function y(h) {
    var g = h - l, w = h - u, _ = t - g;
    return f ? md(_, a - w) : _;
  }
  function b(h) {
    var g = h - l, w = h - u;
    return l === void 0 || g >= t || g < 0 || f && w >= a;
  }
  function x() {
    var h = tr();
    if (b(h))
      return A(h);
    s = setTimeout(x, y(h));
  }
  function A(h) {
    return s = void 0, p && n ? d(h) : (n = i = void 0, o);
  }
  function P() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function E() {
    return s === void 0 ? o : A(tr());
  }
  function $() {
    var h = tr(), g = b(h);
    if (n = arguments, i = this, l = h, g) {
      if (s === void 0)
        return v(l);
      if (f)
        return clearTimeout(s), s = setTimeout(x, t), d(l);
    }
    return s === void 0 && (s = setTimeout(x, t)), o;
  }
  return $.cancel = P, $.flush = E, $;
}
function ea(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function yd(e, t, r) {
  e = Br(e), t = qt(t);
  var n = e.length;
  r = r === void 0 ? n : ea(Gr(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function bd(e, t) {
  var r = [];
  return xr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function wd(e, t) {
  var r = L(e) ? Qi : bd;
  return r(e, vt(t));
}
function Hn(e, t) {
  return Ut(e, t);
}
function Od(e, t) {
  var r = -1, n = Dt(e) ? Array(e.length) : [];
  return xr(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
function Sd(e, t) {
  var r = L(e) ? hi : Od;
  return r(e, vt(t));
}
function _t(e, t, r) {
  return e = Br(e), r = r == null ? 0 : ea(Gr(r), 0, e.length), t = qt(t), e.slice(r, r + t.length) == t;
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
      return !Hn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    }
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    Ne(e, (r, n) => {
      if (_t(n, "filter[") && !r) {
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
        _t(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = wd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Sd(r, (i) => i.key).sort();
      Hn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], it(() => {
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
        const a = i.split("["), o = a[1].substring(0, a[1].length - 1);
        parseInt(o) == o ? (i = a[0], L(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (_t(e, "perPage") || _t(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      typeof r > "u" && (r = !0);
      let n = {};
      Ne(e, (o, s) => {
        if (!L(o)) {
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
        typeof t < "u" && t && it(() => {
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
        it(() => e.default.update(this.element));
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
function Td(e, t, r, n, i, a) {
  return R(), se("div", _d, [
    ge(e.$slots, "default")
  ], 512);
}
const xd = /* @__PURE__ */ ft(Ed, [["render", Td]]), Ad = {
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
      TransitionRoot: ht,
      TransitionChild: pt
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
], Id = {
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
      Render: et,
      TransitionRoot: ht,
      TransitionChild: pt
    });
  }
}, Cd = {
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
            if (n.length === 1 && Ui(n) === "default") {
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
}, Rd = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = G(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}ButtonWithDropdown`, xu).component(`${r}Confirm`, lc).component(`${r}Data`, hc).component(`${r}Defer`, vc).component(`${r}Errors`, mc).component(`${r}Event`, gc).component(`${r}File`, Oc).component(`${r}Flash`, Sc).component(`${r}Form`, qf).component(`${r}Input`, Hf).component(`${r}Modal`, Wf).component(`${r}Render`, et).component(`${r}Select`, fd).component(`${r}State`, dd).component(`${r}Table`, $d).component(`${r}Textarea`, xd).component(`${r}Toast`, Ad).component(`${r}Toasts`, Id).component(`${r}Toggle`, Cd).component(t.link_component, Uf), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Ld(e, t, r) {
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
  Rd as SpladePlugin,
  Fd as renderSpladeApp,
  Ld as startServer
};
