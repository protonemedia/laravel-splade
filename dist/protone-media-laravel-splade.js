import or from "axios";
import { ref as v, computed as b, watch as Se, openBlock as k, createBlock as ge, unref as Y, h as O, onMounted as A, createElementBlock as je, createElementVNode as fn, provide as q, inject as R, nextTick as ir, resolveDynamicComponent as dn, KeepAlive as pn, withCtx as hn, normalizeStyle as vn, createVNode as mn, Fragment as ct, renderList as gn, createCommentVNode as yn, cloneVNode as bn, watchEffect as N, defineComponent as P, onUnmounted as pe, Teleport as wn, reactive as Sn, withModifiers as _n, renderSlot as $n } from "vue";
function On(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Tn(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
      var l = i[e ? s : ++a];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var En = Tn();
const An = En;
function Pn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var xn = typeof global == "object" && global && global.Object === Object && global;
const sr = xn;
var Cn = typeof self == "object" && self && self.Object === Object && self, Dn = sr || Cn || Function("return this")();
const K = Dn;
var Fn = K.Symbol;
const Q = Fn;
var lr = Object.prototype, jn = lr.hasOwnProperty, Bn = lr.toString, ve = Q ? Q.toStringTag : void 0;
function Rn(e) {
  var t = jn.call(e, ve), r = e[ve];
  try {
    e[ve] = void 0;
    var n = !0;
  } catch {
  }
  var a = Bn.call(e);
  return n && (t ? e[ve] = r : delete e[ve]), a;
}
var In = Object.prototype, Ln = In.toString;
function Mn(e) {
  return Ln.call(e);
}
var qn = "[object Null]", Nn = "[object Undefined]", Ft = Q ? Q.toStringTag : void 0;
function ee(e) {
  return e == null ? e === void 0 ? Nn : qn : Ft && Ft in Object(e) ? Rn(e) : Mn(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var Hn = "[object Arguments]";
function jt(e) {
  return Z(e) && ee(e) == Hn;
}
var ur = Object.prototype, kn = ur.hasOwnProperty, Un = ur.propertyIsEnumerable, Gn = jt(function() {
  return arguments;
}()) ? jt : function(e) {
  return Z(e) && kn.call(e, "callee") && !Un.call(e, "callee");
};
const cr = Gn;
var Kn = Array.isArray;
const B = Kn;
function zn() {
  return !1;
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Bt = fr && typeof module == "object" && module && !module.nodeType && module, Wn = Bt && Bt.exports === fr, Rt = Wn ? K.Buffer : void 0, Jn = Rt ? Rt.isBuffer : void 0, Xn = Jn || zn;
const Je = Xn;
var Yn = 9007199254740991, Vn = /^(?:0|[1-9]\d*)$/;
function ft(e, t) {
  var r = typeof e;
  return t = t == null ? Yn : t, !!t && (r == "number" || r != "symbol" && Vn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Qn = 9007199254740991;
function dt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qn;
}
var Zn = "[object Arguments]", ea = "[object Array]", ta = "[object Boolean]", ra = "[object Date]", na = "[object Error]", aa = "[object Function]", oa = "[object Map]", ia = "[object Number]", sa = "[object Object]", la = "[object RegExp]", ua = "[object Set]", ca = "[object String]", fa = "[object WeakMap]", da = "[object ArrayBuffer]", pa = "[object DataView]", ha = "[object Float32Array]", va = "[object Float64Array]", ma = "[object Int8Array]", ga = "[object Int16Array]", ya = "[object Int32Array]", ba = "[object Uint8Array]", wa = "[object Uint8ClampedArray]", Sa = "[object Uint16Array]", _a = "[object Uint32Array]", y = {};
y[ha] = y[va] = y[ma] = y[ga] = y[ya] = y[ba] = y[wa] = y[Sa] = y[_a] = !0;
y[Zn] = y[ea] = y[da] = y[ta] = y[pa] = y[ra] = y[na] = y[aa] = y[oa] = y[ia] = y[sa] = y[la] = y[ua] = y[ca] = y[fa] = !1;
function $a(e) {
  return Z(e) && dt(e.length) && !!y[ee(e)];
}
function Oa(e) {
  return function(t) {
    return e(t);
  };
}
var dr = typeof exports == "object" && exports && !exports.nodeType && exports, ye = dr && typeof module == "object" && module && !module.nodeType && module, Ta = ye && ye.exports === dr, ke = Ta && sr.process, Ea = function() {
  try {
    var e = ye && ye.require && ye.require("util").types;
    return e || ke && ke.binding && ke.binding("util");
  } catch {
  }
}();
const It = Ea;
var Lt = It && It.isTypedArray, Aa = Lt ? Oa(Lt) : $a;
const pr = Aa;
var Pa = Object.prototype, xa = Pa.hasOwnProperty;
function Ca(e, t) {
  var r = B(e), n = !r && cr(e), a = !r && !n && Je(e), o = !r && !n && !a && pr(e), i = r || n || a || o, s = i ? Pn(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || xa.call(e, u)) && !(i && (u == "length" || a && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ft(u, l))) && s.push(u);
  return s;
}
var Da = Object.prototype;
function Fa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Da;
  return e === r;
}
function ja(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ba = ja(Object.keys, Object);
const Ra = Ba;
var Ia = Object.prototype, La = Ia.hasOwnProperty;
function Ma(e) {
  if (!Fa(e))
    return Ra(e);
  var t = [];
  for (var r in Object(e))
    La.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ce(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qa = "[object AsyncFunction]", Na = "[object Function]", Ha = "[object GeneratorFunction]", ka = "[object Proxy]";
function hr(e) {
  if (!ce(e))
    return !1;
  var t = ee(e);
  return t == Na || t == Ha || t == qa || t == ka;
}
function vr(e) {
  return e != null && dt(e.length) && !hr(e);
}
function pt(e) {
  return vr(e) ? Ca(e) : Ma(e);
}
function ht(e, t) {
  return e && An(e, t, pt);
}
function Ua(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!vr(r))
      return e(r, n);
    for (var a = r.length, o = t ? a : -1, i = Object(r); (t ? o-- : ++o < a) && n(i[o], o, i) !== !1; )
      ;
    return r;
  };
}
var Ga = Ua(ht);
const Ka = Ga;
function mr(e) {
  return e;
}
function gr(e) {
  return typeof e == "function" ? e : mr;
}
function za(e, t) {
  var r = B(e) ? On : Ka;
  return r(e, gr(t));
}
var Wa = Array.prototype, Ja = Wa.reverse;
function Xa(e) {
  return e == null ? e : Ja.call(e);
}
const Xe = v(1), fe = typeof window > "u";
function Ya(e, t) {
  fe || window.addEventListener("popstate", Va.bind(this)), mt(t), Le(t.head), gt(e);
  const r = fe ? "" : location.href, n = yr(
    r,
    t.head,
    e,
    {},
    Xe.value
  );
  Za(n);
}
function Va(e) {
  I.value = e.state, M.value = 0, Le(I.value.head), gt(I.value.html, I.value.rememberedState.scrollY);
}
function yr(e, t, r, n, a) {
  const o = {
    url: e,
    head: t,
    html: r,
    rememberedState: n,
    pageVisitId: a
  };
  return I.value = o, o;
}
function Qa(e) {
  fe || window.history.pushState(e, "", e.url);
}
function Za(e) {
  fe || window.history.replaceState(e, "", e.url);
}
const I = v({});
function eo(e) {
  const t = e.request.responseURL;
  if (e.data.splade.modal && M.value++, mt(e.data.splade), Le(e.data.splade.head), e.data.splade.modal)
    return fo(e.data.html, e.data.splade.modal);
  (t !== I.value.url || e.data.splade.refresh || M.value > 0) && (M.value = 0, Xe.value++, gt(e.data.html, 0));
  const r = yr(
    t,
    e.data.splade.head,
    e.data.html,
    I.value.rememberedState ? { ...I.value.rememberedState } : {},
    Xe.value
  );
  Qa(r);
}
const M = v(0);
function to() {
  M.value--, Le(no(M.value));
}
const br = v({}), wr = v({}), Sr = (e) => wr.value[e], ro = (e) => Object.keys(Sr.value[e]).length > 0, _r = v({}), no = (e) => _r.value[e], $r = v({}), ao = (e) => $r.value[e], de = v([]), oo = b(() => Xa(de.value));
function io(e) {
  de.value.push(e);
}
function so(e) {
  de.value[e].dismissed = !0, de.value[e].html = null;
}
const vt = v(null);
function lo(e, t, r, n) {
  let a, o;
  const i = new Promise((s, l) => {
    a = s, o = l;
  });
  return vt.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: a,
    rejectPromise: o
  }, i;
}
function uo() {
  vt.value = null;
}
function mt(e) {
  br.value = e.shared ? e.shared : {}, $r.value[M.value] = e.flash ? e.flash : {}, _r.value[M.value] = e.head ? e.head : {}, za(e.toasts ? e.toasts : [], (t) => {
    de.value.push(t);
  }), wr.value[M.value] = e.errors ? e.errors : {};
}
function co(e) {
  xr.value(e);
}
function Le(e) {
  Er.value(e);
}
function gt(e, t) {
  Ar.value(e, t);
}
function fo(e, t) {
  Pr.value(e, t);
}
const Or = v({});
function Tr(e, t, r) {
  Or.value[e] = t, r && po(e, t);
}
function po(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function ho(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Or.value[e];
}
function Te(e, t, r, n) {
  fe || Tr("scrollY", window.scrollY);
  const a = or({
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
    eo(o);
  }).catch((o) => {
    console.log(o);
    const i = o.response.data.splade;
    i && mt(i), o.response.status != 422 && co(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function vo(e) {
  Te(e, "GET", {}, {});
}
function mo(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "modal" });
}
function go(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "slideover" });
}
function yo() {
  Te(I.value.url, "GET", {}, { "X-Splade-Refresh": !0 });
}
const Er = v(() => {
}), Ar = v(() => {
}), Pr = v(() => {
}), xr = v(() => {
}), h = {
  init: Ya,
  visit: vo,
  modal: mo,
  slideover: go,
  refresh: yo,
  request: Te,
  setOnHead(e) {
    Er.value = e;
  },
  setOnHtml(e) {
    Ar.value = e;
  },
  setOnModal(e) {
    Pr.value = e;
  },
  setOnServerError(e) {
    xr.value = e;
  },
  hasValidationErrors: ro,
  validationErrors: Sr,
  sharedData: br,
  flashData: ao,
  toasts: de,
  toastsReversed: oo,
  confirmModal: vt,
  confirm: lo,
  clearConfirmModal: uo,
  pushToast: io,
  dismissToast: so,
  restore: ho,
  remember: Tr,
  popStack: to,
  currentStack: M,
  pageVisitId: b(() => I.value.pageVisitId),
  isSsr: fe
};
function Cr(e, t) {
  return e && ht(e, gr(t));
}
var bo = "[object String]";
function Ue(e) {
  return typeof e == "string" || !B(e) && Z(e) && ee(e) == bo;
}
const be = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = v(null);
    function n() {
      r.value = O({
        template: t.html
      });
    }
    return Se(() => t.html, n, { immediate: !0 }), (a, o) => (k(), ge(Y(r)));
  }
}, wo = {
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
      document.body.style.overflow = "visible", document.removeEventListener("keydown", i), t("close");
    }
    const a = v(null);
    function o() {
      const s = document.createElement("html");
      s.innerHTML = r.html, s.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = a.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(s.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", i);
    }
    function i(s) {
      s.keyCode === 27 && n();
    }
    return A(() => o()), (s, l) => (k(), je("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: n
    }, [
      fn("iframe", {
        ref_key: "iframeElement",
        ref: a,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, So = {
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
        if (!h.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!h.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!h.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    q("stack", 0);
    const r = v(), n = v([]), a = v(null), o = b(() => h.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function i() {
      a.value = null;
    }
    function s(c) {
      n[c] = null, h.popStack();
    }
    const l = R("$spladeOptions") || {};
    function u(c, f) {
      let p = document.querySelector(`meta[${c}="${f}"]`);
      return p || (p = document.createElement("meta"), p[c] = f, document.getElementsByTagName("head")[0].appendChild(p), p);
    }
    function d(c) {
      const f = c.name ? u("name", c.name) : u("property", c.property);
      Cr(c, (p, m) => {
        f[m] = p;
      });
    }
    return h.setOnHead((c) => {
      h.isSsr || (document.title = c.title, c.meta.forEach((f) => {
        d(f);
      }));
    }), h.setOnHtml((c, f) => {
      n.value = [], r.value = c, ir(() => {
        h.isSsr || window.scrollTo(0, f), l.transform_anchors && [...document.querySelectorAll("a")].forEach((p) => {
          p.href == "" || p.href.charAt(0) == "#" || p.__vnode.dynamicProps === null && (p.hasAttribute("download") || (p.onclick = function(m) {
            m.preventDefault(), h.visit(p.href);
          }));
        });
      });
    }), h.setOnModal(function(c, f) {
      n.value[h.currentStack.value] = { html: c, type: f };
    }), h.setOnServerError(function(c) {
      a.value = c;
    }), h.init(t.initialHtml, t.initialSpladeData), (c, f) => (k(), je("div", null, [
      (k(), ge(dn(Y(h).isSsr ? "div" : pn), {
        max: Y(l).max_keep_alive
      }, {
        default: hn(() => [
          (k(), ge(be, {
            key: `visit.${Y(h).pageVisitId.value}`,
            style: vn(Y(o)),
            html: r.value
          }, null, 8, ["style", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      mn(be, { html: e.components }, null, 8, ["html"]),
      (k(!0), je(ct, null, gn(Y(h).currentStack.value, (p) => (k(), ge(be, {
        key: `modal.${p}`,
        type: n.value[p].type,
        html: n.value[p].html,
        stack: p,
        "on-top-of-stack": Y(h).currentStack.value === p,
        onClose: (m) => s(p)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      a.value ? (k(), ge(wo, {
        key: 0,
        html: a.value,
        onClose: i
      }, null, 8, ["html"])) : yn("", !0)
    ]));
  }
};
function kl(e) {
  return () => O(So, e);
}
var _o = Object.prototype, $o = _o.hasOwnProperty;
function Oo(e, t) {
  return e != null && $o.call(e, t);
}
var To = "[object Symbol]";
function yt(e) {
  return typeof e == "symbol" || Z(e) && ee(e) == To;
}
var Eo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ao = /^\w*$/;
function bt(e, t) {
  if (B(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || yt(e) ? !0 : Ao.test(e) || !Eo.test(e) || t != null && e in Object(t);
}
var Po = K["__core-js_shared__"];
const Ge = Po;
var Mt = function() {
  var e = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xo(e) {
  return !!Mt && Mt in e;
}
var Co = Function.prototype, Do = Co.toString;
function ie(e) {
  if (e != null) {
    try {
      return Do.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fo = /[\\^$.*+?()[\]{}|]/g, jo = /^\[object .+?Constructor\]$/, Bo = Function.prototype, Ro = Object.prototype, Io = Bo.toString, Lo = Ro.hasOwnProperty, Mo = RegExp(
  "^" + Io.call(Lo).replace(Fo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qo(e) {
  if (!ce(e) || xo(e))
    return !1;
  var t = hr(e) ? Mo : jo;
  return t.test(ie(e));
}
function No(e, t) {
  return e == null ? void 0 : e[t];
}
function se(e, t) {
  var r = No(e, t);
  return qo(r) ? r : void 0;
}
var Ho = se(Object, "create");
const _e = Ho;
function ko() {
  this.__data__ = _e ? _e(null) : {}, this.size = 0;
}
function Uo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Go = "__lodash_hash_undefined__", Ko = Object.prototype, zo = Ko.hasOwnProperty;
function Wo(e) {
  var t = this.__data__;
  if (_e) {
    var r = t[e];
    return r === Go ? void 0 : r;
  }
  return zo.call(t, e) ? t[e] : void 0;
}
var Jo = Object.prototype, Xo = Jo.hasOwnProperty;
function Yo(e) {
  var t = this.__data__;
  return _e ? t[e] !== void 0 : Xo.call(t, e);
}
var Vo = "__lodash_hash_undefined__";
function Qo(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _e && t === void 0 ? Vo : t, this;
}
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ae.prototype.clear = ko;
ae.prototype.delete = Uo;
ae.prototype.get = Wo;
ae.prototype.has = Yo;
ae.prototype.set = Qo;
function Zo() {
  this.__data__ = [], this.size = 0;
}
function wt(e, t) {
  return e === t || e !== e && t !== t;
}
function Me(e, t) {
  for (var r = e.length; r--; )
    if (wt(e[r][0], t))
      return r;
  return -1;
}
var ei = Array.prototype, ti = ei.splice;
function ri(e) {
  var t = this.__data__, r = Me(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ti.call(t, r, 1), --this.size, !0;
}
function ni(e) {
  var t = this.__data__, r = Me(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ai(e) {
  return Me(this.__data__, e) > -1;
}
function oi(e, t) {
  var r = this.__data__, n = Me(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = Zo;
z.prototype.delete = ri;
z.prototype.get = ni;
z.prototype.has = ai;
z.prototype.set = oi;
var ii = se(K, "Map");
const $e = ii;
function si() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new ($e || z)(),
    string: new ae()
  };
}
function li(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qe(e, t) {
  var r = e.__data__;
  return li(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ui(e) {
  var t = qe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ci(e) {
  return qe(this, e).get(e);
}
function fi(e) {
  return qe(this, e).has(e);
}
function di(e, t) {
  var r = qe(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function W(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
W.prototype.clear = si;
W.prototype.delete = ui;
W.prototype.get = ci;
W.prototype.has = fi;
W.prototype.set = di;
var pi = "Expected a function";
function St(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pi);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var i = e.apply(this, n);
    return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new (St.Cache || W)(), r;
}
St.Cache = W;
var hi = 500;
function vi(e) {
  var t = St(e, function(n) {
    return r.size === hi && r.clear(), n;
  }), r = t.cache;
  return t;
}
var mi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gi = /\\(\\)?/g, yi = vi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(mi, function(r, n, a, o) {
    t.push(a ? o.replace(gi, "$1") : n || r);
  }), t;
});
const bi = yi;
function wi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Si = 1 / 0, qt = Q ? Q.prototype : void 0, Nt = qt ? qt.toString : void 0;
function Dr(e) {
  if (typeof e == "string")
    return e;
  if (B(e))
    return wi(e, Dr) + "";
  if (yt(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Si ? "-0" : t;
}
function _i(e) {
  return e == null ? "" : Dr(e);
}
function _t(e, t) {
  return B(e) ? e : bt(e, t) ? [e] : bi(_i(e));
}
var $i = 1 / 0;
function Ee(e) {
  if (typeof e == "string" || yt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -$i ? "-0" : t;
}
function Fr(e, t, r) {
  t = _t(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var i = Ee(t[n]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && dt(a) && ft(i, a) && (B(e) || cr(e)));
}
function L(e, t) {
  return e != null && Fr(e, t, Oo);
}
function j(e, t, ...r) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...r) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, j), n;
}
var Be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Be || {}), V = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(V || {});
function x({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...a }) {
  var o;
  let i = Oi(n, r), s = Object.assign(a, { props: i });
  if (e || t & 2 && i.static)
    return Ke(s);
  if (t & 1) {
    let l = (o = i.unmount) == null || o ? 0 : 1;
    return j(l, { [0]() {
      return null;
    }, [1]() {
      return Ke({ ...a, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ke(s);
}
function Ke({ props: e, attrs: t, slots: r, slot: n, name: a }) {
  var o;
  let { as: i, ...s } = Br(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (i === "template") {
    if (l = jr(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [d, ...c] = l != null ? l : [];
      if (!Ti(d) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((f, p) => f.localeCompare(p)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return bn(d, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return O(i, Object.assign({}, s, u), l);
}
function jr(e) {
  return e.flatMap((t) => t.type === ct ? jr(t.children) : [t]);
}
function Oi(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let a in n)
      a.startsWith("on") && typeof n[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(n[a])) : t[a] = n[a];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](a, ...o) {
      let i = r[n];
      for (let s of i) {
        if (a != null && a.defaultPrevented)
          return;
        s(a, ...o);
      }
    } });
  return t;
}
function Br(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Ti(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ei = 0;
function Ai() {
  return ++Ei;
}
function le() {
  return Ai();
}
var Rr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Rr || {});
function G(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ir = Symbol("Context");
var oe = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(oe || {});
function Pi() {
  return $t() !== null;
}
function $t() {
  return R(Ir, null);
}
function xi(e) {
  q(Ir, e);
}
function he(e) {
  if (typeof window > "u")
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = G(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Ye = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Oe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Oe || {}), Lr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lr || {}), Ci = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ci || {});
function Di(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ye));
}
var Mr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mr || {});
function Fi(e, t = 0) {
  var r;
  return e === ((r = he(e)) == null ? void 0 : r.body) ? !1 : j(t, { [0]() {
    return e.matches(Ye);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(Ye))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ji = ["textarea", "input"].join(",");
function Bi(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ji)) != null ? r : !1;
}
function Ri(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let a = t(r), o = t(n);
    if (a === null || o === null)
      return 0;
    let i = a.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ve(e, t, r = !0) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Ri(e) : e : Di(e), i = a.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(i)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(i)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, d = 0, c = o.length, f;
  do {
    if (d >= c || d + c <= 0)
      return 0;
    let p = l + d;
    if (t & 16)
      p = (p + c) % c;
    else {
      if (p < 0)
        return 3;
      if (p >= c)
        return 1;
    }
    f = o[p], f == null || f.focus(u), d += s;
  } while (f !== a.activeElement);
  return f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), t & 6 && Bi(f) && f.select(), 2;
}
function Qe(e, t, r) {
  typeof window < "u" && N((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Ii(e, t, r = b(() => !0)) {
  function n(a, o) {
    if (!r.value || a.defaultPrevented)
      return;
    let i = o(a);
    if (i === null || !i.ownerDocument.documentElement.contains(i))
      return;
    let s = function l(u) {
      return typeof u == "function" ? l(u()) : Array.isArray(u) || u instanceof Set ? u : [u];
    }(e);
    for (let l of s) {
      if (l === null)
        continue;
      let u = l instanceof HTMLElement ? l : G(l);
      if (u != null && u.contains(i))
        return;
    }
    return !Fi(i, Mr.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  Qe("click", (a) => n(a, (o) => o.target), !0), Qe("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Re = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Re || {});
let Ze = P({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...a } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return x({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var et = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(et || {});
function Li() {
  let e = v(0);
  return Qe("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function qr(e, t, r, n) {
  typeof window < "u" && N((a) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), a(() => e.removeEventListener(t, r, n));
  });
}
var Nr = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Nr || {});
let me = Object.assign(P({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: v(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = v(null);
  n({ el: a, $el: a });
  let o = b(() => he(a));
  Mi({ ownerDocument: o }, b(() => Boolean(e.features & 16)));
  let i = qi({ ownerDocument: o, container: a, initialFocus: b(() => e.initialFocus) }, b(() => Boolean(e.features & 2)));
  Ni({ ownerDocument: o, container: a, containers: e.containers, previousActiveElement: i }, b(() => Boolean(e.features & 8)));
  let s = Li();
  function l() {
    let u = G(a);
    !u || j(s.value, { [et.Forwards]: () => Ve(u, Oe.First), [et.Backwards]: () => Ve(u, Oe.Last) });
  }
  return () => {
    let u = {}, d = { ref: a }, { features: c, initialFocus: f, containers: p, ...m } = e;
    return O(ct, [Boolean(c & 4) && O(Ze, { as: "button", type: "button", onFocus: l, features: Re.Focusable }), x({ ourProps: d, theirProps: { ...t, ...m }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(c & 4) && O(Ze, { as: "button", type: "button", onFocus: l, features: Re.Focusable })]);
  };
} }), { features: Nr });
function Mi({ ownerDocument: e }, t) {
  let r = v(null), n = { value: !1 };
  A(() => {
    Se(t, (a, o) => {
      var i;
      a !== o && (!t.value || (n.value = !0, r.value || (r.value = (i = e.value) == null ? void 0 : i.activeElement)));
    }, { immediate: !0 }), Se(t, (a, o, i) => {
      a !== o && (!t.value || i(() => {
        n.value !== !1 && (n.value = !1, we(r.value), r.value = null);
      }));
    }, { immediate: !0 });
  });
}
function qi({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let a = v(null);
  return A(() => {
    Se([t, r, n], (o, i) => {
      if (o.every((l, u) => (i == null ? void 0 : i[u]) === l) || !n.value)
        return;
      let s = G(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let d = G(r), c = (l = e.value) == null ? void 0 : l.activeElement;
        if (d) {
          if (d === c) {
            a.value = c;
            return;
          }
        } else if (s.contains(c)) {
          a.value = c;
          return;
        }
        d ? we(d) : Ve(s, Oe.First | Oe.NoScroll) === Lr.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function Ni({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, a) {
  var o;
  qr((o = e.value) == null ? void 0 : o.defaultView, "focus", (i) => {
    if (!a.value)
      return;
    let s = new Set(r == null ? void 0 : r.value);
    s.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = i.target;
    u && u instanceof HTMLElement ? Hi(s, u) ? (n.value = u, we(u)) : (i.preventDefault(), i.stopPropagation(), we(l)) : we(n.value);
  }, !0);
}
function Hi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Ht = "body > *", ue = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Map();
function kt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Ut(e) {
  let t = X.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function ki(e, t = v(!0)) {
  N((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, a = he(n);
    if (a) {
      ue.add(n);
      for (let o of X.keys())
        o.contains(n) && (Ut(o), X.delete(o));
      a.querySelectorAll(Ht).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let i of ue)
            if (o.contains(i))
              return;
          ue.size === 1 && (X.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), kt(o));
        }
      }), r(() => {
        if (ue.delete(n), ue.size > 0)
          a.querySelectorAll(Ht).forEach((o) => {
            if (o instanceof HTMLElement && !X.has(o)) {
              for (let i of ue)
                if (o.contains(i))
                  return;
              X.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), kt(o);
            }
          });
        else
          for (let o of X.keys())
            Ut(o), X.delete(o);
      });
    }
  });
}
let Hr = Symbol("ForcePortalRootContext");
function Ui() {
  return R(Hr, !1);
}
let tt = P({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return q(Hr, e.force), () => {
    let { force: n, ...a } = e;
    return x({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Gi(e) {
  let t = he(e);
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
let kr = P({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = v(null), a = b(() => he(n)), o = Ui(), i = R(Ur, null), s = v(o === !0 || i == null ? Gi(n.value) : i.resolveTarget());
  return N(() => {
    o || i != null && (s.value = i.resolveTarget());
  }), pe(() => {
    var l, u;
    let d = (l = a.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !d || s.value === d && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return O(wn, { to: s.value }, x({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ur = Symbol("PortalGroupContext"), Ki = P({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = Sn({ resolveTarget() {
    return e.target;
  } });
  return q(Ur, n), () => {
    let { target: a, ...o } = e;
    return x({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Gr = Symbol("StackContext");
var rt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(rt || {});
function zi() {
  return R(Gr, () => {
  });
}
function Wi({ type: e, element: t, onUpdate: r }) {
  let n = zi();
  function a(...o) {
    r == null || r(...o), n(...o);
  }
  A(() => {
    a(0, e, t), pe(() => {
      a(1, e, t);
    });
  }), q(Gr, a);
}
let Kr = Symbol("DescriptionContext");
function Ji() {
  let e = R(Kr, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xi({ slot: e = v({}), name: t = "Description", props: r = {} } = {}) {
  let n = v([]);
  function a(o) {
    return n.value.push(o), () => {
      let i = n.value.indexOf(o);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return q(Kr, { register: a, slot: e, name: t, props: r }), b(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Ul = P({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ji(), a = `headlessui-description-${le()}`;
  return A(() => pe(n.register(a))), () => {
    let { name: o = "Description", slot: i = v({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((d, [c, f]) => Object.assign(d, { [c]: Y(f) }), {}), id: a };
    return x({ ourProps: u, theirProps: l, slot: i.value, attrs: t, slots: r, name: o });
  };
} });
var Yi = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yi || {});
let nt = Symbol("DialogContext");
function Ae(e) {
  let t = R(nt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ae), r;
  }
  return t;
}
let Ce = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", zr = P({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ce }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  var o;
  let i = v(!1);
  A(() => {
    i.value = !0;
  });
  let s = v(0), l = $t(), u = b(() => e.open === Ce && l !== null ? j(l.value, { [oe.Open]: !0, [oe.Closed]: !1 }) : e.open), d = v(/* @__PURE__ */ new Set()), c = v(null), f = v(null), p = b(() => he(c));
  if (a({ el: c, $el: c }), !(e.open !== Ce || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ce ? void 0 : e.open}`);
  let m = b(() => i.value && u.value ? 0 : 1), $ = b(() => m.value === 0), T = b(() => s.value > 1), C = R(nt, null) !== null, D = b(() => T.value ? "parent" : "leaf");
  ki(c, b(() => T.value ? $.value : !1)), Wi({ type: "Dialog", element: c, onUpdate: (S, w, _) => {
    if (w === "Dialog")
      return j(S, { [rt.Add]() {
        d.value.add(_), s.value += 1;
      }, [rt.Remove]() {
        d.value.delete(_), s.value -= 1;
      } });
  } });
  let te = Xi({ name: "DialogDescription", slot: b(() => ({ open: u.value })) }), J = `headlessui-dialog-${le()}`, F = v(null), H = { titleId: F, panelRef: v(null), dialogState: m, setTitleId(S) {
    F.value !== S && (F.value = S);
  }, close() {
    t("close", !1);
  } };
  return q(nt, H), Ii(() => {
    var S, w, _;
    return [...Array.from((w = (S = p.value) == null ? void 0 : S.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? w : []).filter((g) => !(!(g instanceof HTMLElement) || g.contains(G(f)) || H.panelRef.value && g.contains(H.panelRef.value))), (_ = H.panelRef.value) != null ? _ : c.value];
  }, (S, w) => {
    H.close(), ir(() => w == null ? void 0 : w.focus());
  }, b(() => m.value === 0 && !T.value)), qr((o = p.value) == null ? void 0 : o.defaultView, "keydown", (S) => {
    S.defaultPrevented || S.key === Rr.Escape && m.value === 0 && (T.value || (S.preventDefault(), S.stopPropagation(), H.close()));
  }), N((S) => {
    var w;
    if (m.value !== 0 || C)
      return;
    let _ = p.value;
    if (!_)
      return;
    let g = _ == null ? void 0 : _.documentElement, E = (w = _.defaultView) != null ? w : window, Pt = g.style.overflow, xt = g.style.paddingRight, He = E.innerWidth - g.clientWidth;
    if (g.style.overflow = "hidden", He > 0) {
      let Ct = g.clientWidth - g.offsetWidth, Dt = He - Ct;
      g.style.paddingRight = `${Dt}px`;
    }
    S(() => {
      g.style.overflow = Pt, g.style.paddingRight = xt;
    });
  }), N((S) => {
    if (m.value !== 0)
      return;
    let w = G(c);
    if (!w)
      return;
    let _ = new IntersectionObserver((g) => {
      for (let E of g)
        E.boundingClientRect.x === 0 && E.boundingClientRect.y === 0 && E.boundingClientRect.width === 0 && E.boundingClientRect.height === 0 && H.close();
    });
    _.observe(w), S(() => _.disconnect());
  }), () => {
    let S = { ...r, ref: c, id: J, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": F.value, "aria-describedby": te.value }, { open: w, initialFocus: _, ...g } = e, E = { open: m.value === 0 };
    return O(tt, { force: !0 }, () => [O(kr, () => O(Ki, { target: c.value }, () => O(tt, { force: !1 }, () => O(me, { initialFocus: _, containers: d, features: $.value ? j(D.value, { parent: me.features.RestoreFocus, leaf: me.features.All & ~me.features.FocusLock }) : me.features.None }, () => x({ ourProps: S, theirProps: g, slot: E, attrs: r, slots: n, visible: m.value === 0, features: Be.RenderStrategy | Be.Static, name: "Dialog" }))))), O(Ze, { features: Re.Hidden, ref: f })]);
  };
} });
P({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ae("DialogOverlay"), a = `headlessui-dialog-overlay-${le()}`;
  function o(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), n.close());
  }
  return () => x({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
P({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Ae("DialogBackdrop"), o = `headlessui-dialog-backdrop-${le()}`, i = v(null);
  return n({ el: i, $el: i }), A(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: i, "aria-hidden": !0 };
    return O(tt, { force: !0 }, () => O(kr, () => x({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Wr = P({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Ae("DialogPanel"), o = `headlessui-dialog-panel-${le()}`;
  n({ el: a.panelRef, $el: a.panelRef });
  function i(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: a.panelRef, onClick: i };
    return x({ ourProps: s, theirProps: e, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
P({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = Ae("DialogTitle"), a = `headlessui-dialog-title-${le()}`;
  return A(() => {
    n.setTitleId(a), pe(() => n.setTitleId(null));
  }), () => x({ ourProps: { id: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Vi(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Jr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, requestAnimationFrame(...n) {
    let a = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(a));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let a = setTimeout(...n);
    r.add(() => clearTimeout(a));
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
function ze(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function De(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var at = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(at || {});
function Qi(e, t) {
  let r = Jr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [o, i] = [n, a].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + i) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Gt(e, t, r, n, a, o) {
  let i = Jr(), s = o !== void 0 ? Vi(o) : () => {
  };
  return De(e, ...a), ze(e, ...t, ...r), i.nextFrame(() => {
    De(e, ...r), ze(e, ...n), i.add(Qi(e, (l) => (De(e, ...n, ...t), ze(e, ...a), s(l))));
  }), i.add(() => De(e, ...t, ...r, ...n, ...a)), i.add(() => s("cancelled")), i.dispose;
}
function re(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ot = Symbol("TransitionContext");
var Zi = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Zi || {});
function es() {
  return R(Ot, null) !== null;
}
function ts() {
  let e = R(Ot, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function rs() {
  let e = R(Tt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Tt = Symbol("NestingContext");
function Ne(e) {
  return "children" in e ? Ne(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Xr(e) {
  let t = v([]), r = v(!1);
  A(() => r.value = !0), pe(() => r.value = !1);
  function n(o, i = V.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === o);
    s !== -1 && (j(i, { [V.Unmount]() {
      t.value.splice(s, 1);
    }, [V.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Ne(t) && r.value && (e == null || e()));
  }
  function a(o) {
    let i = t.value.find(({ id: s }) => s === o);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: o, state: "visible" }), () => n(o, V.Unmount);
  }
  return { children: t, register: a, unregister: n };
}
let Yr = Be.RenderStrategy, Pe = P({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  if (!es() && Pi())
    return () => O(xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = v(null), i = v("visible"), s = b(() => e.unmount ? V.Unmount : V.Hidden);
  a({ el: o, $el: o });
  let { show: l, appear: u } = ts(), { register: d, unregister: c } = rs(), f = { value: !0 }, p = le(), m = { value: !1 }, $ = Xr(() => {
    m.value || (i.value = "hidden", c(p), t("afterLeave"));
  });
  A(() => {
    let w = d(p);
    pe(w);
  }), N(() => {
    if (s.value === V.Hidden && !!p) {
      if (l && i.value !== "visible") {
        i.value = "visible";
        return;
      }
      j(i.value, { hidden: () => c(p), visible: () => d(p) });
    }
  });
  let T = re(e.enter), C = re(e.enterFrom), D = re(e.enterTo), te = re(e.entered), J = re(e.leave), F = re(e.leaveFrom), H = re(e.leaveTo);
  A(() => {
    N(() => {
      if (i.value === "visible") {
        let w = G(o);
        if (w instanceof Comment && w.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(w) {
    let _ = f.value && !u.value, g = G(o);
    !g || !(g instanceof HTMLElement) || _ || (m.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), w(l.value ? Gt(g, T, C, D, te, (E) => {
      m.value = !1, E === at.Finished && t("afterEnter");
    }) : Gt(g, J, F, H, te, (E) => {
      m.value = !1, E === at.Finished && (Ne($) || (i.value = "hidden", c(p), t("afterLeave")));
    })));
  }
  return A(() => {
    Se([l], (w, _, g) => {
      S(g), f.value = !1;
    }, { immediate: !0 });
  }), q(Tt, $), xi(b(() => j(i.value, { visible: oe.Open, hidden: oe.Closed }))), () => {
    let { appear: w, show: _, enter: g, enterFrom: E, enterTo: Pt, entered: xt, leave: He, leaveFrom: Ct, leaveTo: Dt, ...cn } = e;
    return x({ theirProps: cn, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Yr, visible: i.value === "visible", name: "TransitionChild" });
  };
} }), ns = Pe, xe = P({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let a = $t(), o = b(() => e.show === null && a !== null ? j(a.value, { [oe.Open]: !0, [oe.Closed]: !1 }) : e.show);
  N(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = v(o.value ? "visible" : "hidden"), s = Xr(() => {
    i.value = "hidden";
  }), l = v(!0), u = { show: o, appear: b(() => e.appear || !l.value) };
  return A(() => {
    N(() => {
      l.value = !1, o.value ? i.value = "visible" : Ne(s) || (i.value = "hidden");
    });
  }), q(Tt, s), q(Ot, u), () => {
    let d = Br(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return x({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [O(ns, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...c, ...d }, n.default)] }, attrs: {}, features: Yr, visible: i.value === "visible", name: "Transition" });
  };
} });
const as = {
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
    hasConfirmModal: () => !!h.confirmModal.value,
    title: function() {
      var e;
      return (e = h.confirmModal.value) != null && e.title ? h.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = h.confirmModal.value) != null && e.text ? h.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = h.confirmModal.value) != null && e.confirmButton ? h.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = h.confirmModal.value) != null && e.cancelButton ? h.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      h.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      h.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      h.clearConfirmModal();
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
      Dialog: zr,
      DialogPanel: Wr,
      TransitionRoot: xe,
      TransitionChild: Pe
    });
  }
};
function Vr(e, t) {
  t = _t(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ee(t[r++])];
  return r && r == n ? e : void 0;
}
function Et(e, t, r) {
  var n = e == null ? void 0 : Vr(e, t);
  return n === void 0 ? r : n;
}
var os = function() {
  try {
    var e = se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Kt = os;
function Qr(e, t, r) {
  t == "__proto__" && Kt ? Kt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var is = Object.prototype, ss = is.hasOwnProperty;
function ls(e, t, r) {
  var n = e[t];
  (!(ss.call(e, t) && wt(n, r)) || r === void 0 && !(t in e)) && Qr(e, t, r);
}
function us(e, t, r, n) {
  if (!ce(e))
    return e;
  t = _t(t, e);
  for (var a = -1, o = t.length, i = o - 1, s = e; s != null && ++a < o; ) {
    var l = Ee(t[a]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != i) {
      var d = s[l];
      u = n ? n(d, l, s) : void 0, u === void 0 && (u = ce(d) ? d : ft(t[a + 1]) ? [] : {});
    }
    ls(s, l, u), s = s[l];
  }
  return e;
}
function Zr(e, t, r) {
  return e == null ? e : us(e, t, r);
}
const cs = {
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
      let e = h.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && h.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return Et(e.values, r);
        },
        set(t, r, n) {
          Zr(e.values, r, n);
        }
      })
    );
  }
}, fs = {
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
      Object.keys(this.request).length > 0 && (e.data = this.request), or(e).then((t) => {
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
function en(e) {
  return e && e.length ? e[0] : void 0;
}
const ds = {
  inject: ["stack"],
  computed: {
    values() {
      return h.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return L(e.values, t);
      },
      first(t) {
        return en(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, ps = {
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
        const n = "splade.redirect", a = "splade.refresh", o = "splade.toast";
        let i = null, s = !1, l = [];
        Cr(r, (u) => {
          !ce(u) || (n in u && (i = u[n]), a in u && (s = u[a]), o in u && l.push(u));
        }), i ? h.visit(i) : s ? h.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          h.pushToast(u);
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
}, hs = {
  inject: ["stack"],
  computed: {
    values() {
      return h.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return L(e.values, t);
      },
      ...this.values
    });
  }
};
function ot(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => ot(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => ot(t));
}
function tn(e) {
  e = e || {};
  let t = new FormData();
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && nn(t, rn(null, r), e[r]);
  return t;
}
function rn(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function nn(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => nn(e, rn(t, n.toString()), r[n]));
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
  tn(r);
}
var vs = "[object Boolean]";
function an(e) {
  return e === !0 || e === !1 || Z(e) && ee(e) == vs;
}
function ms() {
  this.__data__ = new z(), this.size = 0;
}
function gs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ys(e) {
  return this.__data__.get(e);
}
function bs(e) {
  return this.__data__.has(e);
}
var ws = 200;
function Ss(e, t) {
  var r = this.__data__;
  if (r instanceof z) {
    var n = r.__data__;
    if (!$e || n.length < ws - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new W(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function U(e) {
  var t = this.__data__ = new z(e);
  this.size = t.size;
}
U.prototype.clear = ms;
U.prototype.delete = gs;
U.prototype.get = ys;
U.prototype.has = bs;
U.prototype.set = Ss;
var _s = "__lodash_hash_undefined__";
function $s(e) {
  return this.__data__.set(e, _s), this;
}
function Os(e) {
  return this.__data__.has(e);
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new W(); ++t < r; )
    this.add(e[t]);
}
Ie.prototype.add = Ie.prototype.push = $s;
Ie.prototype.has = Os;
function Ts(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Es(e, t) {
  return e.has(t);
}
var As = 1, Ps = 2;
function on(e, t, r, n, a, o) {
  var i = r & As, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = o.get(e), d = o.get(t);
  if (u && d)
    return u == t && d == e;
  var c = -1, f = !0, p = r & Ps ? new Ie() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < s; ) {
    var m = e[c], $ = t[c];
    if (n)
      var T = i ? n($, m, c, t, e, o) : n(m, $, c, e, t, o);
    if (T !== void 0) {
      if (T)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Ts(t, function(C, D) {
        if (!Es(p, D) && (m === C || a(m, C, r, n, o)))
          return p.push(D);
      })) {
        f = !1;
        break;
      }
    } else if (!(m === $ || a(m, $, r, n, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), f;
}
var xs = K.Uint8Array;
const zt = xs;
function Cs(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function Ds(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Fs = 1, js = 2, Bs = "[object Boolean]", Rs = "[object Date]", Is = "[object Error]", Ls = "[object Map]", Ms = "[object Number]", qs = "[object RegExp]", Ns = "[object Set]", Hs = "[object String]", ks = "[object Symbol]", Us = "[object ArrayBuffer]", Gs = "[object DataView]", Wt = Q ? Q.prototype : void 0, We = Wt ? Wt.valueOf : void 0;
function Ks(e, t, r, n, a, o, i) {
  switch (r) {
    case Gs:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Us:
      return !(e.byteLength != t.byteLength || !o(new zt(e), new zt(t)));
    case Bs:
    case Rs:
    case Ms:
      return wt(+e, +t);
    case Is:
      return e.name == t.name && e.message == t.message;
    case qs:
    case Hs:
      return e == t + "";
    case Ls:
      var s = Cs;
    case Ns:
      var l = n & Fs;
      if (s || (s = Ds), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      n |= js, i.set(e, t);
      var d = on(s(e), s(t), n, a, o, i);
      return i.delete(e), d;
    case ks:
      if (We)
        return We.call(e) == We.call(t);
  }
  return !1;
}
function zs(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function Ws(e, t, r) {
  var n = t(e);
  return B(e) ? n : zs(n, r(e));
}
function Js(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (o[a++] = i);
  }
  return o;
}
function Xs() {
  return [];
}
var Ys = Object.prototype, Vs = Ys.propertyIsEnumerable, Jt = Object.getOwnPropertySymbols, Qs = Jt ? function(e) {
  return e == null ? [] : (e = Object(e), Js(Jt(e), function(t) {
    return Vs.call(e, t);
  }));
} : Xs;
const Zs = Qs;
function Xt(e) {
  return Ws(e, pt, Zs);
}
var el = 1, tl = Object.prototype, rl = tl.hasOwnProperty;
function nl(e, t, r, n, a, o) {
  var i = r & el, s = Xt(e), l = s.length, u = Xt(t), d = u.length;
  if (l != d && !i)
    return !1;
  for (var c = l; c--; ) {
    var f = s[c];
    if (!(i ? f in t : rl.call(t, f)))
      return !1;
  }
  var p = o.get(e), m = o.get(t);
  if (p && m)
    return p == t && m == e;
  var $ = !0;
  o.set(e, t), o.set(t, e);
  for (var T = i; ++c < l; ) {
    f = s[c];
    var C = e[f], D = t[f];
    if (n)
      var te = i ? n(D, C, f, t, e, o) : n(C, D, f, e, t, o);
    if (!(te === void 0 ? C === D || a(C, D, r, n, o) : te)) {
      $ = !1;
      break;
    }
    T || (T = f == "constructor");
  }
  if ($ && !T) {
    var J = e.constructor, F = t.constructor;
    J != F && "constructor" in e && "constructor" in t && !(typeof J == "function" && J instanceof J && typeof F == "function" && F instanceof F) && ($ = !1);
  }
  return o.delete(e), o.delete(t), $;
}
var al = se(K, "DataView");
const it = al;
var ol = se(K, "Promise");
const st = ol;
var il = se(K, "Set");
const lt = il;
var sl = se(K, "WeakMap");
const ut = sl;
var Yt = "[object Map]", ll = "[object Object]", Vt = "[object Promise]", Qt = "[object Set]", Zt = "[object WeakMap]", er = "[object DataView]", ul = ie(it), cl = ie($e), fl = ie(st), dl = ie(lt), pl = ie(ut), ne = ee;
(it && ne(new it(new ArrayBuffer(1))) != er || $e && ne(new $e()) != Yt || st && ne(st.resolve()) != Vt || lt && ne(new lt()) != Qt || ut && ne(new ut()) != Zt) && (ne = function(e) {
  var t = ee(e), r = t == ll ? e.constructor : void 0, n = r ? ie(r) : "";
  if (n)
    switch (n) {
      case ul:
        return er;
      case cl:
        return Yt;
      case fl:
        return Vt;
      case dl:
        return Qt;
      case pl:
        return Zt;
    }
  return t;
});
const tr = ne;
var hl = 1, rr = "[object Arguments]", nr = "[object Array]", Fe = "[object Object]", vl = Object.prototype, ar = vl.hasOwnProperty;
function ml(e, t, r, n, a, o) {
  var i = B(e), s = B(t), l = i ? nr : tr(e), u = s ? nr : tr(t);
  l = l == rr ? Fe : l, u = u == rr ? Fe : u;
  var d = l == Fe, c = u == Fe, f = l == u;
  if (f && Je(e)) {
    if (!Je(t))
      return !1;
    i = !0, d = !1;
  }
  if (f && !d)
    return o || (o = new U()), i || pr(e) ? on(e, t, r, n, a, o) : Ks(e, t, l, r, n, a, o);
  if (!(r & hl)) {
    var p = d && ar.call(e, "__wrapped__"), m = c && ar.call(t, "__wrapped__");
    if (p || m) {
      var $ = p ? e.value() : e, T = m ? t.value() : t;
      return o || (o = new U()), a($, T, r, n, o);
    }
  }
  return f ? (o || (o = new U()), nl(e, t, r, n, a, o)) : !1;
}
function At(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Z(e) && !Z(t) ? e !== e && t !== t : ml(e, t, r, n, At, a);
}
var gl = 1, yl = 2;
function bl(e, t, r, n) {
  var a = r.length, o = a, i = !n;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var s = r[a];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    s = r[a];
    var l = s[0], u = e[l], d = s[1];
    if (i && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var c = new U();
      if (n)
        var f = n(u, d, l, e, t, c);
      if (!(f === void 0 ? At(d, u, gl | yl, n, c) : f))
        return !1;
    }
  }
  return !0;
}
function sn(e) {
  return e === e && !ce(e);
}
function wl(e) {
  for (var t = pt(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, sn(a)];
  }
  return t;
}
function ln(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Sl(e) {
  var t = wl(e);
  return t.length == 1 && t[0][2] ? ln(t[0][0], t[0][1]) : function(r) {
    return r === e || bl(r, e, t);
  };
}
function _l(e, t) {
  return e != null && t in Object(e);
}
function $l(e, t) {
  return e != null && Fr(e, t, _l);
}
var Ol = 1, Tl = 2;
function El(e, t) {
  return bt(e) && sn(t) ? ln(Ee(e), t) : function(r) {
    var n = Et(r, e);
    return n === void 0 && n === t ? $l(r, e) : At(t, n, Ol | Tl);
  };
}
function Al(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Pl(e) {
  return function(t) {
    return Vr(t, e);
  };
}
function xl(e) {
  return bt(e) ? Al(Ee(e)) : Pl(e);
}
function Cl(e) {
  return typeof e == "function" ? e : e == null ? mr : typeof e == "object" ? B(e) ? El(e[0], e[1]) : Sl(e) : xl(e);
}
function un(e, t) {
  var r = {};
  return t = Cl(t), ht(e, function(n, a, o) {
    Qr(r, a, t(n, a, o));
  }), r;
}
const Dl = {
  inject: ["stack"],
  props: {
    action: {
      type: String,
      required: !1,
      default() {
        return h.isSsr ? "" : location.href;
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
      return h.validationErrors(this.stack);
    },
    errors() {
      return un(this.rawErrors, (e) => e.join(`
`));
    }
  },
  methods: {
    hasError(e) {
      return L(this.errors, e);
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
      h.confirm(
        an(this.confirm) ? "" : this.confirm,
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
      const e = this.forceFormData || ot(this.values) ? tn(this.values) : this.values;
      h.request(this.action, this.method.toUpperCase(), e, {
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
            ].includes(r) ? e[r] : Et(e.values, r);
          },
          set(t, r, n) {
            Zr(e.values, r, n);
          }
        }
      )
    );
  }
}, Fl = ["href", "onClick"], jl = {
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
      h.confirm(
        an(t.confirm) ? "" : t.confirm,
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
        return h.modal(t.href);
      if (t.slideover)
        return h.slideover(t.href);
      h.visit(t.href);
    }
    return (a, o) => (k(), je("a", {
      href: e.href,
      onClick: _n(r, ["prevent"])
    }, [
      $n(a.$slots, "default")
    ], 8, Fl));
  }
}, Bl = {
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
      Dialog: zr,
      DialogPanel: Wr,
      TransitionRoot: xe,
      TransitionChild: Pe
    });
  }
}, Rl = {
  inject: ["stack"],
  render() {
    const e = h.validationErrors(this.stack), t = h.flashData(this.stack), r = h.sharedData.value, n = un(e, (a) => a.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(a) {
        return L(e, a);
      },
      hasFlash(a) {
        return L(t, a);
      },
      hasShared(a) {
        return L(r, a);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
}, Il = {
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
      TransitionRoot: xe,
      TransitionChild: Pe
    });
  }
}, Ll = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Ml = {
  computed: {
    toasts: function() {
      return h.toastsReversed.value;
    },
    hasBackdrop: function() {
      return h.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      h.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Ll,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: be,
      TransitionRoot: xe,
      TransitionChild: Pe
    });
  }
}, ql = {
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
            if (n.length === 1 && en(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (a) => {
                  e.setToggle("default", a);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (a, o) => {
              e.setToggle(a, o);
            } : r === "toggle" ? (a) => {
              e.toggle(a);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Gl = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = L(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = L(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = L(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = L(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}Confirm`, as).component(`${r}Data`, cs).component(`${r}Defer`, fs).component(`${r}Errors`, ds).component(`${r}Event`, ps).component(`${r}Flash`, hs).component(`${r}Form`, Dl).component(`${r}Modal`, Bl).component(`${r}Render`, be).component(`${r}State`, Rl).component(`${r}Toast`, Il).component(`${r}Toasts`, Ml).component(`${r}Toggle`, ql).component(t.link_component, jl), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => h }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Kl(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((o) => {
    const i = o.replace(/^-+/, "").split("=");
    n[i[0]] = i.length === 2 ? i[1] : !0;
  });
  const a = n.port || 9e3;
  e(async (o, i) => {
    if (o.method == "POST") {
      let s = "";
      o.on("data", (l) => s += l), o.on("end", async () => {
        const l = JSON.parse(s), u = r({
          components: l.components,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), d = await t(u);
        i.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), i.write(JSON.stringify({ body: d })), i.end();
      });
    }
  }).listen(a, () => console.log(`Splade SSR server started on port ${a}.`));
}
export {
  h as Splade,
  So as SpladeApp,
  Gl as SpladePlugin,
  kl as renderSpladeApp,
  Kl as startServer
};
