import or from "axios";
import { ref as h, computed as w, watch as Se, openBlock as k, createBlock as ge, unref as Y, h as O, onMounted as P, createElementBlock as je, createElementVNode as fn, provide as q, inject as B, nextTick as ir, resolveDynamicComponent as dn, withCtx as pn, normalizeClass as hn, createVNode as vn, Fragment as ct, renderList as mn, createCommentVNode as gn, cloneVNode as yn, watchEffect as N, defineComponent as A, onUnmounted as pe, Teleport as bn, reactive as wn, withModifiers as Sn, renderSlot as _n } from "vue";
function $n(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function On(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
      var l = i[e ? s : ++a];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var Tn = On();
const En = Tn;
function Pn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var An = typeof global == "object" && global && global.Object === Object && global;
const sr = An;
var xn = typeof self == "object" && self && self.Object === Object && self, Cn = sr || xn || Function("return this")();
const K = Cn;
var Dn = K.Symbol;
const Q = Dn;
var lr = Object.prototype, Fn = lr.hasOwnProperty, jn = lr.toString, ve = Q ? Q.toStringTag : void 0;
function Rn(e) {
  var t = Fn.call(e, ve), r = e[ve];
  try {
    e[ve] = void 0;
    var n = !0;
  } catch {
  }
  var a = jn.call(e);
  return n && (t ? e[ve] = r : delete e[ve]), a;
}
var Bn = Object.prototype, In = Bn.toString;
function Ln(e) {
  return In.call(e);
}
var Mn = "[object Null]", qn = "[object Undefined]", Ft = Q ? Q.toStringTag : void 0;
function ee(e) {
  return e == null ? e === void 0 ? qn : Mn : Ft && Ft in Object(e) ? Rn(e) : Ln(e);
}
function Z(e) {
  return e != null && typeof e == "object";
}
var Nn = "[object Arguments]";
function jt(e) {
  return Z(e) && ee(e) == Nn;
}
var ur = Object.prototype, Hn = ur.hasOwnProperty, kn = ur.propertyIsEnumerable, Un = jt(function() {
  return arguments;
}()) ? jt : function(e) {
  return Z(e) && Hn.call(e, "callee") && !kn.call(e, "callee");
};
const cr = Un;
var Gn = Array.isArray;
const R = Gn;
function Kn() {
  return !1;
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = fr && typeof module == "object" && module && !module.nodeType && module, zn = Rt && Rt.exports === fr, Bt = zn ? K.Buffer : void 0, Wn = Bt ? Bt.isBuffer : void 0, Jn = Wn || Kn;
const Je = Jn;
var Xn = 9007199254740991, Yn = /^(?:0|[1-9]\d*)$/;
function ft(e, t) {
  var r = typeof e;
  return t = t == null ? Xn : t, !!t && (r == "number" || r != "symbol" && Yn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Vn = 9007199254740991;
function dt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vn;
}
var Qn = "[object Arguments]", Zn = "[object Array]", ea = "[object Boolean]", ta = "[object Date]", ra = "[object Error]", na = "[object Function]", aa = "[object Map]", oa = "[object Number]", ia = "[object Object]", sa = "[object RegExp]", la = "[object Set]", ua = "[object String]", ca = "[object WeakMap]", fa = "[object ArrayBuffer]", da = "[object DataView]", pa = "[object Float32Array]", ha = "[object Float64Array]", va = "[object Int8Array]", ma = "[object Int16Array]", ga = "[object Int32Array]", ya = "[object Uint8Array]", ba = "[object Uint8ClampedArray]", wa = "[object Uint16Array]", Sa = "[object Uint32Array]", y = {};
y[pa] = y[ha] = y[va] = y[ma] = y[ga] = y[ya] = y[ba] = y[wa] = y[Sa] = !0;
y[Qn] = y[Zn] = y[fa] = y[ea] = y[da] = y[ta] = y[ra] = y[na] = y[aa] = y[oa] = y[ia] = y[sa] = y[la] = y[ua] = y[ca] = !1;
function _a(e) {
  return Z(e) && dt(e.length) && !!y[ee(e)];
}
function $a(e) {
  return function(t) {
    return e(t);
  };
}
var dr = typeof exports == "object" && exports && !exports.nodeType && exports, ye = dr && typeof module == "object" && module && !module.nodeType && module, Oa = ye && ye.exports === dr, ke = Oa && sr.process, Ta = function() {
  try {
    var e = ye && ye.require && ye.require("util").types;
    return e || ke && ke.binding && ke.binding("util");
  } catch {
  }
}();
const It = Ta;
var Lt = It && It.isTypedArray, Ea = Lt ? $a(Lt) : _a;
const pr = Ea;
var Pa = Object.prototype, Aa = Pa.hasOwnProperty;
function xa(e, t) {
  var r = R(e), n = !r && cr(e), a = !r && !n && Je(e), o = !r && !n && !a && pr(e), i = r || n || a || o, s = i ? Pn(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Aa.call(e, u)) && !(i && (u == "length" || a && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ft(u, l))) && s.push(u);
  return s;
}
var Ca = Object.prototype;
function Da(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ca;
  return e === r;
}
function Fa(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ja = Fa(Object.keys, Object);
const Ra = ja;
var Ba = Object.prototype, Ia = Ba.hasOwnProperty;
function La(e) {
  if (!Da(e))
    return Ra(e);
  var t = [];
  for (var r in Object(e))
    Ia.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ce(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ma = "[object AsyncFunction]", qa = "[object Function]", Na = "[object GeneratorFunction]", Ha = "[object Proxy]";
function hr(e) {
  if (!ce(e))
    return !1;
  var t = ee(e);
  return t == qa || t == Na || t == Ma || t == Ha;
}
function vr(e) {
  return e != null && dt(e.length) && !hr(e);
}
function pt(e) {
  return vr(e) ? xa(e) : La(e);
}
function ht(e, t) {
  return e && En(e, t, pt);
}
function ka(e, t) {
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
var Ua = ka(ht);
const Ga = Ua;
function mr(e) {
  return e;
}
function gr(e) {
  return typeof e == "function" ? e : mr;
}
function Ka(e, t) {
  var r = R(e) ? $n : Ga;
  return r(e, gr(t));
}
var za = Array.prototype, Wa = za.reverse;
function Ja(e) {
  return e == null ? e : Wa.call(e);
}
const Xe = h(1), fe = typeof window > "u";
function Xa(e, t) {
  fe || window.addEventListener("popstate", Ya.bind(this)), mt(t), Le(t.head), gt(e);
  const r = fe ? "" : location.href, n = yr(
    r,
    t.head,
    e,
    {},
    Xe.value
  );
  Qa(n);
}
function Ya(e) {
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
function Va(e) {
  fe || window.history.pushState(e, "", e.url);
}
function Qa(e) {
  fe || window.history.replaceState(e, "", e.url);
}
const I = h({});
function Za(e) {
  const t = e.request.responseURL;
  if (e.data.splade.modal && M.value++, mt(e.data.splade), Le(e.data.splade.head), e.data.splade.modal)
    return co(e.data.html, e.data.splade.modal);
  (t !== I.value.url || e.data.splade.refresh || M.value > 0) && (M.value = 0, Xe.value++, gt(e.data.html, 0));
  const r = yr(
    t,
    e.data.splade.head,
    e.data.html,
    I.value.rememberedState ? { ...I.value.rememberedState } : {},
    Xe.value
  );
  Va(r);
}
const M = h(0);
function eo() {
  M.value--, Le(ro(M.value));
}
const br = h({}), wr = h({}), Sr = (e) => wr.value[e], to = (e) => Object.keys(Sr.value[e]).length > 0, _r = h({}), ro = (e) => _r.value[e], $r = h({}), no = (e) => $r.value[e], de = h([]), ao = w(() => Ja(de.value));
function oo(e) {
  de.value.push(e);
}
function io(e) {
  de.value[e].dismissed = !0, de.value[e].html = null;
}
const vt = h(null);
function so(e, t, r, n) {
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
function lo() {
  vt.value = null;
}
function mt(e) {
  br.value = e.shared ? e.shared : {}, $r.value[M.value] = e.flash ? e.flash : {}, _r.value[M.value] = e.head ? e.head : {}, Ka(e.toasts ? e.toasts : [], (t) => {
    de.value.push(t);
  }), wr.value[M.value] = e.errors ? e.errors : {};
}
function uo(e) {
  xr.value(e);
}
function Le(e) {
  Er.value(e);
}
function gt(e, t) {
  Pr.value(e, t);
}
function co(e, t) {
  Ar.value(e, t);
}
const Or = h({});
function Tr(e, t, r) {
  Or.value[e] = t, r && fo(e, t);
}
function fo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function po(e, t) {
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
    Za(o);
  }).catch((o) => {
    console.log(o);
    const i = o.response.data.splade;
    i && mt(i), o.response.status != 422 && uo(
      o.response.data.html ? o.response.data.html : o.response.data
    );
  }), a;
}
function ho(e) {
  Te(e, "GET", {}, {});
}
function vo(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "modal" });
}
function mo(e) {
  Te(e, "GET", {}, { "X-Splade-Modal": "slideover" });
}
function go() {
  Te(I.value.url, "GET", {}, { "X-Splade-Refresh": !0 });
}
const Er = h(() => {
}), Pr = h(() => {
}), Ar = h(() => {
}), xr = h(() => {
}), p = {
  init: Xa,
  visit: ho,
  modal: vo,
  slideover: mo,
  refresh: go,
  request: Te,
  setOnHead(e) {
    Er.value = e;
  },
  setOnHtml(e) {
    Pr.value = e;
  },
  setOnModal(e) {
    Ar.value = e;
  },
  setOnServerError(e) {
    xr.value = e;
  },
  hasValidationErrors: to,
  validationErrors: Sr,
  sharedData: br,
  flashData: no,
  toasts: de,
  toastsReversed: ao,
  confirmModal: vt,
  confirm: so,
  clearConfirmModal: lo,
  pushToast: oo,
  dismissToast: io,
  restore: po,
  remember: Tr,
  popStack: eo,
  currentStack: M,
  pageVisitId: w(() => I.value.pageVisitId),
  isSsr: fe
};
function Cr(e, t) {
  return e && ht(e, gr(t));
}
var yo = "[object String]";
function Ue(e) {
  return typeof e == "string" || !R(e) && Z(e) && ee(e) == yo;
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
    const t = e, r = h(null);
    function n() {
      r.value = O({
        template: t.html
      });
    }
    return Se(() => t.html, n, { immediate: !0 }), (a, o) => (k(), ge(Y(r)));
  }
}, bo = {
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
    const a = h(null);
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
    return P(() => o()), (s, l) => (k(), je("div", {
      class: "w-screen h-screen fixed p-8 bg-black bg-opacity-75 inset-0 z-[200000] box-border",
      onClick: n
    }, [
      fn("iframe", {
        ref_key: "iframeElement",
        ref: a,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, wo = {
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
        if (!p.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!p.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!p.isSsr) {
          const t = Ue(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    q("stack", 0);
    const r = h(), n = h([]), a = h(null);
    function o() {
      a.value = null;
    }
    function i(c) {
      n[c] = null, p.popStack();
    }
    const s = B("$spladeOptions") || {};
    function l(c, d) {
      let f = document.querySelector(`meta[${c}="${d}"]`);
      return f || (f = document.createElement("meta"), f[c] = d, document.getElementsByTagName("head")[0].appendChild(f), f);
    }
    function u(c) {
      const d = c.name ? l("name", c.name) : l("property", c.property);
      Cr(c, (f, v) => {
        d[v] = f;
      });
    }
    return p.setOnHead((c) => {
      p.isSsr || (document.title = c.title, c.meta.forEach((d) => {
        u(d);
      }));
    }), p.setOnHtml((c, d) => {
      n.value = [], r.value = c, ir(() => {
        p.isSsr || window.scrollTo(0, d), s.transform_anchors && [...document.querySelectorAll("a")].forEach((f) => {
          f.href == "" || f.href.charAt(0) == "#" || f.__vnode.dynamicProps === null && (f.hasAttribute("download") || (f.onclick = function(v) {
            v.preventDefault(), p.visit(f.href);
          }));
        });
      });
    }), p.setOnModal(function(c, d) {
      n.value[p.currentStack.value] = { html: c, type: d };
    }), p.setOnServerError(function(c) {
      a.value = c;
    }), p.init(t.initialHtml, t.initialSpladeData), (c, d) => (k(), je("div", null, [
      (k(), ge(dn(Y(p).isSsr ? "div" : "keep-alive"), {
        max: Y(s).max_keep_alive
      }, {
        default: pn(() => [
          (k(), ge(be, {
            key: `visit.${Y(p).pageVisitId.value}`,
            class: hn({
              "transition ease-in-out blur-sm": Y(p).currentStack > 0
            }),
            html: r.value
          }, null, 8, ["class", "html"]))
        ]),
        _: 1
      }, 8, ["max"])),
      vn(be, { html: e.components }, null, 8, ["html"]),
      (k(!0), je(ct, null, mn(Y(p).currentStack.value, (f) => (k(), ge(be, {
        key: `modal.${f}`,
        type: n.value[f].type,
        html: n.value[f].html,
        stack: f,
        "on-top-of-stack": Y(p).currentStack.value === f,
        onClose: (v) => i(f)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      a.value ? (k(), ge(bo, {
        key: 0,
        html: a.value,
        onClose: o
      }, null, 8, ["html"])) : gn("", !0)
    ]));
  }
};
function Hl(e) {
  return () => O(wo, e);
}
var So = Object.prototype, _o = So.hasOwnProperty;
function $o(e, t) {
  return e != null && _o.call(e, t);
}
var Oo = "[object Symbol]";
function yt(e) {
  return typeof e == "symbol" || Z(e) && ee(e) == Oo;
}
var To = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eo = /^\w*$/;
function bt(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || yt(e) ? !0 : Eo.test(e) || !To.test(e) || t != null && e in Object(t);
}
var Po = K["__core-js_shared__"];
const Ge = Po;
var Mt = function() {
  var e = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ao(e) {
  return !!Mt && Mt in e;
}
var xo = Function.prototype, Co = xo.toString;
function ie(e) {
  if (e != null) {
    try {
      return Co.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Do = /[\\^$.*+?()[\]{}|]/g, Fo = /^\[object .+?Constructor\]$/, jo = Function.prototype, Ro = Object.prototype, Bo = jo.toString, Io = Ro.hasOwnProperty, Lo = RegExp(
  "^" + Bo.call(Io).replace(Do, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mo(e) {
  if (!ce(e) || Ao(e))
    return !1;
  var t = hr(e) ? Lo : Fo;
  return t.test(ie(e));
}
function qo(e, t) {
  return e == null ? void 0 : e[t];
}
function se(e, t) {
  var r = qo(e, t);
  return Mo(r) ? r : void 0;
}
var No = se(Object, "create");
const _e = No;
function Ho() {
  this.__data__ = _e ? _e(null) : {}, this.size = 0;
}
function ko(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Uo = "__lodash_hash_undefined__", Go = Object.prototype, Ko = Go.hasOwnProperty;
function zo(e) {
  var t = this.__data__;
  if (_e) {
    var r = t[e];
    return r === Uo ? void 0 : r;
  }
  return Ko.call(t, e) ? t[e] : void 0;
}
var Wo = Object.prototype, Jo = Wo.hasOwnProperty;
function Xo(e) {
  var t = this.__data__;
  return _e ? t[e] !== void 0 : Jo.call(t, e);
}
var Yo = "__lodash_hash_undefined__";
function Vo(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _e && t === void 0 ? Yo : t, this;
}
function ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ae.prototype.clear = Ho;
ae.prototype.delete = ko;
ae.prototype.get = zo;
ae.prototype.has = Xo;
ae.prototype.set = Vo;
function Qo() {
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
var Zo = Array.prototype, ei = Zo.splice;
function ti(e) {
  var t = this.__data__, r = Me(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ei.call(t, r, 1), --this.size, !0;
}
function ri(e) {
  var t = this.__data__, r = Me(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function ni(e) {
  return Me(this.__data__, e) > -1;
}
function ai(e, t) {
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
z.prototype.clear = Qo;
z.prototype.delete = ti;
z.prototype.get = ri;
z.prototype.has = ni;
z.prototype.set = ai;
var oi = se(K, "Map");
const $e = oi;
function ii() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new ($e || z)(),
    string: new ae()
  };
}
function si(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qe(e, t) {
  var r = e.__data__;
  return si(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function li(e) {
  var t = qe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ui(e) {
  return qe(this, e).get(e);
}
function ci(e) {
  return qe(this, e).has(e);
}
function fi(e, t) {
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
W.prototype.clear = ii;
W.prototype.delete = li;
W.prototype.get = ui;
W.prototype.has = ci;
W.prototype.set = fi;
var di = "Expected a function";
function St(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(di);
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
var pi = 500;
function hi(e) {
  var t = St(e, function(n) {
    return r.size === pi && r.clear(), n;
  }), r = t.cache;
  return t;
}
var vi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, mi = /\\(\\)?/g, gi = hi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(vi, function(r, n, a, o) {
    t.push(a ? o.replace(mi, "$1") : n || r);
  }), t;
});
const yi = gi;
function bi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var wi = 1 / 0, qt = Q ? Q.prototype : void 0, Nt = qt ? qt.toString : void 0;
function Dr(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return bi(e, Dr) + "";
  if (yt(e))
    return Nt ? Nt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -wi ? "-0" : t;
}
function Si(e) {
  return e == null ? "" : Dr(e);
}
function _t(e, t) {
  return R(e) ? e : bt(e, t) ? [e] : yi(Si(e));
}
var _i = 1 / 0;
function Ee(e) {
  if (typeof e == "string" || yt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -_i ? "-0" : t;
}
function Fr(e, t, r) {
  t = _t(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var i = Ee(t[n]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && dt(a) && ft(i, a) && (R(e) || cr(e)));
}
function L(e, t) {
  return e != null && Fr(e, t, $o);
}
function j(e, t, ...r) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...r) : a;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, j), n;
}
var Re = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Re || {}), V = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(V || {});
function x({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...a }) {
  var o;
  let i = $i(n, r), s = Object.assign(a, { props: i });
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
  let { as: i, ...s } = Rr(e, ["unmount", "static"]), l = (o = r.default) == null ? void 0 : o.call(r, n), u = {};
  if (i === "template") {
    if (l = jr(l), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...d] = l != null ? l : [];
      if (!Oi(c) || d.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((f, v) => f.localeCompare(v)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return yn(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return O(i, Object.assign({}, s, u), l);
}
function jr(e) {
  return e.flatMap((t) => t.type === ct ? jr(t.children) : [t]);
}
function $i(...e) {
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
function Rr(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Oi(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ti = 0;
function Ei() {
  return ++Ti;
}
function le() {
  return Ei();
}
var Br = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Br || {});
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
  return B(Ir, null);
}
function Ai(e) {
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
var Oe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Oe || {}), Lr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lr || {}), xi = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(xi || {});
function Ci(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ye));
}
var Mr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mr || {});
function Di(e, t = 0) {
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
let Fi = ["textarea", "input"].join(",");
function ji(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fi)) != null ? r : !1;
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
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, o = Array.isArray(e) ? r ? Ri(e) : e : Ci(e), i = a.activeElement, s = (() => {
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
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, d = o.length, f;
  do {
    if (c >= d || c + d <= 0)
      return 0;
    let v = l + c;
    if (t & 16)
      v = (v + d) % d;
    else {
      if (v < 0)
        return 3;
      if (v >= d)
        return 1;
    }
    f = o[v], f == null || f.focus(u), c += s;
  } while (f !== a.activeElement);
  return f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), t & 6 && ji(f) && f.select(), 2;
}
function Qe(e, t, r) {
  typeof window < "u" && N((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
function Bi(e, t, r = w(() => !0)) {
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
    return !Di(i, Mr.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  Qe("click", (a) => n(a, (o) => o.target), !0), Qe("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Be || {});
let Ze = A({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...a } = e, o = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return x({ ourProps: o, theirProps: a, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
var et = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(et || {});
function Ii() {
  let e = h(0);
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
let me = Object.assign(A({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: h(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = h(null);
  n({ el: a, $el: a });
  let o = w(() => he(a));
  Li({ ownerDocument: o }, w(() => Boolean(e.features & 16)));
  let i = Mi({ ownerDocument: o, container: a, initialFocus: w(() => e.initialFocus) }, w(() => Boolean(e.features & 2)));
  qi({ ownerDocument: o, container: a, containers: e.containers, previousActiveElement: i }, w(() => Boolean(e.features & 8)));
  let s = Ii();
  function l() {
    let u = G(a);
    !u || j(s.value, { [et.Forwards]: () => Ve(u, Oe.First), [et.Backwards]: () => Ve(u, Oe.Last) });
  }
  return () => {
    let u = {}, c = { ref: a }, { features: d, initialFocus: f, containers: v, ...m } = e;
    return O(ct, [Boolean(d & 4) && O(Ze, { as: "button", type: "button", onFocus: l, features: Be.Focusable }), x({ ourProps: c, theirProps: { ...t, ...m }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(d & 4) && O(Ze, { as: "button", type: "button", onFocus: l, features: Be.Focusable })]);
  };
} }), { features: Nr });
function Li({ ownerDocument: e }, t) {
  let r = h(null), n = { value: !1 };
  P(() => {
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
function Mi({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let a = h(null);
  return P(() => {
    Se([t, r, n], (o, i) => {
      if (o.every((l, u) => (i == null ? void 0 : i[u]) === l) || !n.value)
        return;
      let s = G(t);
      !s || requestAnimationFrame(() => {
        var l, u;
        let c = G(r), d = (l = e.value) == null ? void 0 : l.activeElement;
        if (c) {
          if (c === d) {
            a.value = d;
            return;
          }
        } else if (s.contains(d)) {
          a.value = d;
          return;
        }
        c ? we(c) : Ve(s, Oe.First | Oe.NoScroll) === Lr.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (u = e.value) == null ? void 0 : u.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function qi({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, a) {
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
    u && u instanceof HTMLElement ? Ni(s, u) ? (n.value = u, we(u)) : (i.preventDefault(), i.stopPropagation(), we(l)) : we(n.value);
  }, !0);
}
function Ni(e, t) {
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
function Hi(e, t = h(!0)) {
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
function ki() {
  return B(Hr, !1);
}
let tt = A({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return q(Hr, e.force), () => {
    let { force: n, ...a } = e;
    return x({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Ui(e) {
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
let kr = A({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = h(null), a = w(() => he(n)), o = ki(), i = B(Ur, null), s = h(o === !0 || i == null ? Ui(n.value) : i.resolveTarget());
  return N(() => {
    o || i != null && (s.value = i.resolveTarget());
  }), pe(() => {
    var l, u;
    let c = (l = a.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return O(bn, { to: s.value }, x({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ur = Symbol("PortalGroupContext"), Gi = A({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = wn({ resolveTarget() {
    return e.target;
  } });
  return q(Ur, n), () => {
    let { target: a, ...o } = e;
    return x({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Gr = Symbol("StackContext");
var rt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(rt || {});
function Ki() {
  return B(Gr, () => {
  });
}
function zi({ type: e, element: t, onUpdate: r }) {
  let n = Ki();
  function a(...o) {
    r == null || r(...o), n(...o);
  }
  P(() => {
    a(0, e, t), pe(() => {
      a(1, e, t);
    });
  }), q(Gr, a);
}
let Kr = Symbol("DescriptionContext");
function Wi() {
  let e = B(Kr, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ji({ slot: e = h({}), name: t = "Description", props: r = {} } = {}) {
  let n = h([]);
  function a(o) {
    return n.value.push(o), () => {
      let i = n.value.indexOf(o);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return q(Kr, { register: a, slot: e, name: t, props: r }), w(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let kl = A({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = Wi(), a = `headlessui-description-${le()}`;
  return P(() => pe(n.register(a))), () => {
    let { name: o = "Description", slot: i = h({}), props: s = {} } = n, l = e, u = { ...Object.entries(s).reduce((c, [d, f]) => Object.assign(c, { [d]: Y(f) }), {}), id: a };
    return x({ ourProps: u, theirProps: l, slot: i.value, attrs: t, slots: r, name: o });
  };
} });
var Xi = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Xi || {});
let nt = Symbol("DialogContext");
function Pe(e) {
  let t = B(nt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Pe), r;
  }
  return t;
}
let Ce = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", zr = A({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ce }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  var o;
  let i = h(!1);
  P(() => {
    i.value = !0;
  });
  let s = h(0), l = $t(), u = w(() => e.open === Ce && l !== null ? j(l.value, { [oe.Open]: !0, [oe.Closed]: !1 }) : e.open), c = h(/* @__PURE__ */ new Set()), d = h(null), f = h(null), v = w(() => he(d));
  if (a({ el: d, $el: d }), !(e.open !== Ce || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ce ? void 0 : e.open}`);
  let m = w(() => i.value && u.value ? 0 : 1), $ = w(() => m.value === 0), T = w(() => s.value > 1), C = B(nt, null) !== null, D = w(() => T.value ? "parent" : "leaf");
  Hi(d, w(() => T.value ? $.value : !1)), zi({ type: "Dialog", element: d, onUpdate: (S, b, _) => {
    if (b === "Dialog")
      return j(S, { [rt.Add]() {
        c.value.add(_), s.value += 1;
      }, [rt.Remove]() {
        c.value.delete(_), s.value -= 1;
      } });
  } });
  let te = Ji({ name: "DialogDescription", slot: w(() => ({ open: u.value })) }), J = `headlessui-dialog-${le()}`, F = h(null), H = { titleId: F, panelRef: h(null), dialogState: m, setTitleId(S) {
    F.value !== S && (F.value = S);
  }, close() {
    t("close", !1);
  } };
  return q(nt, H), Bi(() => {
    var S, b, _;
    return [...Array.from((b = (S = v.value) == null ? void 0 : S.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b : []).filter((g) => !(!(g instanceof HTMLElement) || g.contains(G(f)) || H.panelRef.value && g.contains(H.panelRef.value))), (_ = H.panelRef.value) != null ? _ : d.value];
  }, (S, b) => {
    H.close(), ir(() => b == null ? void 0 : b.focus());
  }, w(() => m.value === 0 && !T.value)), qr((o = v.value) == null ? void 0 : o.defaultView, "keydown", (S) => {
    S.defaultPrevented || S.key === Br.Escape && m.value === 0 && (T.value || (S.preventDefault(), S.stopPropagation(), H.close()));
  }), N((S) => {
    var b;
    if (m.value !== 0 || C)
      return;
    let _ = v.value;
    if (!_)
      return;
    let g = _ == null ? void 0 : _.documentElement, E = (b = _.defaultView) != null ? b : window, At = g.style.overflow, xt = g.style.paddingRight, He = E.innerWidth - g.clientWidth;
    if (g.style.overflow = "hidden", He > 0) {
      let Ct = g.clientWidth - g.offsetWidth, Dt = He - Ct;
      g.style.paddingRight = `${Dt}px`;
    }
    S(() => {
      g.style.overflow = At, g.style.paddingRight = xt;
    });
  }), N((S) => {
    if (m.value !== 0)
      return;
    let b = G(d);
    if (!b)
      return;
    let _ = new IntersectionObserver((g) => {
      for (let E of g)
        E.boundingClientRect.x === 0 && E.boundingClientRect.y === 0 && E.boundingClientRect.width === 0 && E.boundingClientRect.height === 0 && H.close();
    });
    _.observe(b), S(() => _.disconnect());
  }), () => {
    let S = { ...r, ref: d, id: J, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": F.value, "aria-describedby": te.value }, { open: b, initialFocus: _, ...g } = e, E = { open: m.value === 0 };
    return O(tt, { force: !0 }, () => [O(kr, () => O(Gi, { target: d.value }, () => O(tt, { force: !1 }, () => O(me, { initialFocus: _, containers: c, features: $.value ? j(D.value, { parent: me.features.RestoreFocus, leaf: me.features.All & ~me.features.FocusLock }) : me.features.None }, () => x({ ourProps: S, theirProps: g, slot: E, attrs: r, slots: n, visible: m.value === 0, features: Re.RenderStrategy | Re.Static, name: "Dialog" }))))), O(Ze, { features: Be.Hidden, ref: f })]);
  };
} });
A({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = Pe("DialogOverlay"), a = `headlessui-dialog-overlay-${le()}`;
  function o(i) {
    i.target === i.currentTarget && (i.preventDefault(), i.stopPropagation(), n.close());
  }
  return () => x({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
A({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Pe("DialogBackdrop"), o = `headlessui-dialog-backdrop-${le()}`, i = h(null);
  return n({ el: i, $el: i }), P(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: o, ref: i, "aria-hidden": !0 };
    return O(tt, { force: !0 }, () => O(kr, () => x({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Wr = A({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let a = Pe("DialogPanel"), o = `headlessui-dialog-panel-${le()}`;
  n({ el: a.panelRef, $el: a.panelRef });
  function i(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: o, ref: a.panelRef, onClick: i };
    return x({ ourProps: s, theirProps: e, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
A({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = Pe("DialogTitle"), a = `headlessui-dialog-title-${le()}`;
  return P(() => {
    n.setTitleId(a), pe(() => n.setTitleId(null));
  }), () => x({ ourProps: { id: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function Yi(e) {
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
function Vi(e, t) {
  let r = Jr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: a } = getComputedStyle(e), [o, i] = [n, a].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return o !== 0 ? r.setTimeout(() => t("finished"), o + i) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Gt(e, t, r, n, a, o) {
  let i = Jr(), s = o !== void 0 ? Yi(o) : () => {
  };
  return De(e, ...a), ze(e, ...t, ...r), i.nextFrame(() => {
    De(e, ...r), ze(e, ...n), i.add(Vi(e, (l) => (De(e, ...n, ...t), ze(e, ...a), s(l))));
  }), i.add(() => De(e, ...t, ...r, ...n, ...a)), i.add(() => s("cancelled")), i.dispose;
}
function re(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ot = Symbol("TransitionContext");
var Qi = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Qi || {});
function Zi() {
  return B(Ot, null) !== null;
}
function es() {
  let e = B(Ot, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ts() {
  let e = B(Tt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Tt = Symbol("NestingContext");
function Ne(e) {
  return "children" in e ? Ne(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Xr(e) {
  let t = h([]), r = h(!1);
  P(() => r.value = !0), pe(() => r.value = !1);
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
let Yr = Re.RenderStrategy, Ae = A({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: a }) {
  if (!Zi() && Pi())
    return () => O(xe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let o = h(null), i = h("visible"), s = w(() => e.unmount ? V.Unmount : V.Hidden);
  a({ el: o, $el: o });
  let { show: l, appear: u } = es(), { register: c, unregister: d } = ts(), f = { value: !0 }, v = le(), m = { value: !1 }, $ = Xr(() => {
    m.value || (i.value = "hidden", d(v), t("afterLeave"));
  });
  P(() => {
    let b = c(v);
    pe(b);
  }), N(() => {
    if (s.value === V.Hidden && !!v) {
      if (l && i.value !== "visible") {
        i.value = "visible";
        return;
      }
      j(i.value, { hidden: () => d(v), visible: () => c(v) });
    }
  });
  let T = re(e.enter), C = re(e.enterFrom), D = re(e.enterTo), te = re(e.entered), J = re(e.leave), F = re(e.leaveFrom), H = re(e.leaveTo);
  P(() => {
    N(() => {
      if (i.value === "visible") {
        let b = G(o);
        if (b instanceof Comment && b.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(b) {
    let _ = f.value && !u.value, g = G(o);
    !g || !(g instanceof HTMLElement) || _ || (m.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), b(l.value ? Gt(g, T, C, D, te, (E) => {
      m.value = !1, E === at.Finished && t("afterEnter");
    }) : Gt(g, J, F, H, te, (E) => {
      m.value = !1, E === at.Finished && (Ne($) || (i.value = "hidden", d(v), t("afterLeave")));
    })));
  }
  return P(() => {
    Se([l], (b, _, g) => {
      S(g), f.value = !1;
    }, { immediate: !0 });
  }), q(Tt, $), Ai(w(() => j(i.value, { visible: oe.Open, hidden: oe.Closed }))), () => {
    let { appear: b, show: _, enter: g, enterFrom: E, enterTo: At, entered: xt, leave: He, leaveFrom: Ct, leaveTo: Dt, ...cn } = e;
    return x({ theirProps: cn, ourProps: { ref: o }, slot: {}, slots: n, attrs: r, features: Yr, visible: i.value === "visible", name: "TransitionChild" });
  };
} }), rs = Ae, xe = A({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let a = $t(), o = w(() => e.show === null && a !== null ? j(a.value, { [oe.Open]: !0, [oe.Closed]: !1 }) : e.show);
  N(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = h(o.value ? "visible" : "hidden"), s = Xr(() => {
    i.value = "hidden";
  }), l = h(!0), u = { show: o, appear: w(() => e.appear || !l.value) };
  return P(() => {
    N(() => {
      l.value = !1, o.value ? i.value = "visible" : Ne(s) || (i.value = "hidden");
    });
  }), q(Tt, s), q(Ot, u), () => {
    let c = Rr(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return x({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [O(rs, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...d, ...c }, n.default)] }, attrs: {}, features: Yr, visible: i.value === "visible", name: "Transition" });
  };
} });
const ns = {
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
    hasConfirmModal: () => !!p.confirmModal.value,
    title: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.title ? p.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.text ? p.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.confirmButton ? p.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = p.confirmModal.value) != null && e.cancelButton ? p.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = !0);
    }
  },
  methods: {
    cancel() {
      p.confirmModal.value.rejectPromise(), this.setIsOpen(!1);
    },
    confirm() {
      p.confirmModal.value.resolvePromise(), this.setIsOpen(!1);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      p.clearConfirmModal();
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
      TransitionChild: Ae
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
var as = function() {
  try {
    var e = se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Kt = as;
function Qr(e, t, r) {
  t == "__proto__" && Kt ? Kt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var os = Object.prototype, is = os.hasOwnProperty;
function ss(e, t, r) {
  var n = e[t];
  (!(is.call(e, t) && wt(n, r)) || r === void 0 && !(t in e)) && Qr(e, t, r);
}
function ls(e, t, r, n) {
  if (!ce(e))
    return e;
  t = _t(t, e);
  for (var a = -1, o = t.length, i = o - 1, s = e; s != null && ++a < o; ) {
    var l = Ee(t[a]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (a != i) {
      var c = s[l];
      u = n ? n(c, l, s) : void 0, u === void 0 && (u = ce(c) ? c : ft(t[a + 1]) ? [] : {});
    }
    ss(s, l, u), s = s[l];
  }
  return e;
}
function Zr(e, t, r) {
  return e == null ? e : ls(e, t, r);
}
const us = {
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
      let e = p.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && p.remember(this.remember, { ...this.values }, this.localStorage);
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
}, cs = {
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
const fs = {
  inject: ["stack"],
  computed: {
    values() {
      return p.validationErrors(this.stack);
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
}, ds = {
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
        }), i ? p.visit(i) : s ? p.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          p.pushToast(u);
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
}, ps = {
  inject: ["stack"],
  computed: {
    values() {
      return p.flashData(this.stack);
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
var hs = "[object Boolean]";
function an(e) {
  return e === !0 || e === !1 || Z(e) && ee(e) == hs;
}
function vs() {
  this.__data__ = new z(), this.size = 0;
}
function ms(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function gs(e) {
  return this.__data__.get(e);
}
function ys(e) {
  return this.__data__.has(e);
}
var bs = 200;
function ws(e, t) {
  var r = this.__data__;
  if (r instanceof z) {
    var n = r.__data__;
    if (!$e || n.length < bs - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new W(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function U(e) {
  var t = this.__data__ = new z(e);
  this.size = t.size;
}
U.prototype.clear = vs;
U.prototype.delete = ms;
U.prototype.get = gs;
U.prototype.has = ys;
U.prototype.set = ws;
var Ss = "__lodash_hash_undefined__";
function _s(e) {
  return this.__data__.set(e, Ss), this;
}
function $s(e) {
  return this.__data__.has(e);
}
function Ie(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new W(); ++t < r; )
    this.add(e[t]);
}
Ie.prototype.add = Ie.prototype.push = _s;
Ie.prototype.has = $s;
function Os(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Ts(e, t) {
  return e.has(t);
}
var Es = 1, Ps = 2;
function on(e, t, r, n, a, o) {
  var i = r & Es, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var u = o.get(e), c = o.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, f = !0, v = r & Ps ? new Ie() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < s; ) {
    var m = e[d], $ = t[d];
    if (n)
      var T = i ? n($, m, d, t, e, o) : n(m, $, d, e, t, o);
    if (T !== void 0) {
      if (T)
        continue;
      f = !1;
      break;
    }
    if (v) {
      if (!Os(t, function(C, D) {
        if (!Ts(v, D) && (m === C || a(m, C, r, n, o)))
          return v.push(D);
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
var As = K.Uint8Array;
const zt = As;
function xs(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function Cs(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ds = 1, Fs = 2, js = "[object Boolean]", Rs = "[object Date]", Bs = "[object Error]", Is = "[object Map]", Ls = "[object Number]", Ms = "[object RegExp]", qs = "[object Set]", Ns = "[object String]", Hs = "[object Symbol]", ks = "[object ArrayBuffer]", Us = "[object DataView]", Wt = Q ? Q.prototype : void 0, We = Wt ? Wt.valueOf : void 0;
function Gs(e, t, r, n, a, o, i) {
  switch (r) {
    case Us:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ks:
      return !(e.byteLength != t.byteLength || !o(new zt(e), new zt(t)));
    case js:
    case Rs:
    case Ls:
      return wt(+e, +t);
    case Bs:
      return e.name == t.name && e.message == t.message;
    case Ms:
    case Ns:
      return e == t + "";
    case Is:
      var s = xs;
    case qs:
      var l = n & Ds;
      if (s || (s = Cs), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      n |= Fs, i.set(e, t);
      var c = on(s(e), s(t), n, a, o, i);
      return i.delete(e), c;
    case Hs:
      if (We)
        return We.call(e) == We.call(t);
  }
  return !1;
}
function Ks(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function zs(e, t, r) {
  var n = t(e);
  return R(e) ? n : Ks(n, r(e));
}
function Ws(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (o[a++] = i);
  }
  return o;
}
function Js() {
  return [];
}
var Xs = Object.prototype, Ys = Xs.propertyIsEnumerable, Jt = Object.getOwnPropertySymbols, Vs = Jt ? function(e) {
  return e == null ? [] : (e = Object(e), Ws(Jt(e), function(t) {
    return Ys.call(e, t);
  }));
} : Js;
const Qs = Vs;
function Xt(e) {
  return zs(e, pt, Qs);
}
var Zs = 1, el = Object.prototype, tl = el.hasOwnProperty;
function rl(e, t, r, n, a, o) {
  var i = r & Zs, s = Xt(e), l = s.length, u = Xt(t), c = u.length;
  if (l != c && !i)
    return !1;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(i ? f in t : tl.call(t, f)))
      return !1;
  }
  var v = o.get(e), m = o.get(t);
  if (v && m)
    return v == t && m == e;
  var $ = !0;
  o.set(e, t), o.set(t, e);
  for (var T = i; ++d < l; ) {
    f = s[d];
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
var nl = se(K, "DataView");
const it = nl;
var al = se(K, "Promise");
const st = al;
var ol = se(K, "Set");
const lt = ol;
var il = se(K, "WeakMap");
const ut = il;
var Yt = "[object Map]", sl = "[object Object]", Vt = "[object Promise]", Qt = "[object Set]", Zt = "[object WeakMap]", er = "[object DataView]", ll = ie(it), ul = ie($e), cl = ie(st), fl = ie(lt), dl = ie(ut), ne = ee;
(it && ne(new it(new ArrayBuffer(1))) != er || $e && ne(new $e()) != Yt || st && ne(st.resolve()) != Vt || lt && ne(new lt()) != Qt || ut && ne(new ut()) != Zt) && (ne = function(e) {
  var t = ee(e), r = t == sl ? e.constructor : void 0, n = r ? ie(r) : "";
  if (n)
    switch (n) {
      case ll:
        return er;
      case ul:
        return Yt;
      case cl:
        return Vt;
      case fl:
        return Qt;
      case dl:
        return Zt;
    }
  return t;
});
const tr = ne;
var pl = 1, rr = "[object Arguments]", nr = "[object Array]", Fe = "[object Object]", hl = Object.prototype, ar = hl.hasOwnProperty;
function vl(e, t, r, n, a, o) {
  var i = R(e), s = R(t), l = i ? nr : tr(e), u = s ? nr : tr(t);
  l = l == rr ? Fe : l, u = u == rr ? Fe : u;
  var c = l == Fe, d = u == Fe, f = l == u;
  if (f && Je(e)) {
    if (!Je(t))
      return !1;
    i = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new U()), i || pr(e) ? on(e, t, r, n, a, o) : Gs(e, t, l, r, n, a, o);
  if (!(r & pl)) {
    var v = c && ar.call(e, "__wrapped__"), m = d && ar.call(t, "__wrapped__");
    if (v || m) {
      var $ = v ? e.value() : e, T = m ? t.value() : t;
      return o || (o = new U()), a($, T, r, n, o);
    }
  }
  return f ? (o || (o = new U()), rl(e, t, r, n, a, o)) : !1;
}
function Pt(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Z(e) && !Z(t) ? e !== e && t !== t : vl(e, t, r, n, Pt, a);
}
var ml = 1, gl = 2;
function yl(e, t, r, n) {
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
    var l = s[0], u = e[l], c = s[1];
    if (i && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var d = new U();
      if (n)
        var f = n(u, c, l, e, t, d);
      if (!(f === void 0 ? Pt(c, u, ml | gl, n, d) : f))
        return !1;
    }
  }
  return !0;
}
function sn(e) {
  return e === e && !ce(e);
}
function bl(e) {
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
function wl(e) {
  var t = bl(e);
  return t.length == 1 && t[0][2] ? ln(t[0][0], t[0][1]) : function(r) {
    return r === e || yl(r, e, t);
  };
}
function Sl(e, t) {
  return e != null && t in Object(e);
}
function _l(e, t) {
  return e != null && Fr(e, t, Sl);
}
var $l = 1, Ol = 2;
function Tl(e, t) {
  return bt(e) && sn(t) ? ln(Ee(e), t) : function(r) {
    var n = Et(r, e);
    return n === void 0 && n === t ? _l(r, e) : Pt(t, n, $l | Ol);
  };
}
function El(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Pl(e) {
  return function(t) {
    return Vr(t, e);
  };
}
function Al(e) {
  return bt(e) ? El(Ee(e)) : Pl(e);
}
function xl(e) {
  return typeof e == "function" ? e : e == null ? mr : typeof e == "object" ? R(e) ? Tl(e[0], e[1]) : wl(e) : Al(e);
}
function un(e, t) {
  var r = {};
  return t = xl(t), ht(e, function(n, a, o) {
    Qr(r, a, t(n, a, o));
  }), r;
}
const Cl = {
  inject: ["stack"],
  props: {
    action: {
      type: String,
      required: !1,
      default() {
        return p.isSsr ? "" : location.href;
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
      return p.validationErrors(this.stack);
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
      p.confirm(
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
      p.request(this.action, this.method.toUpperCase(), e, {
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
}, Dl = ["href", "onClick"], Fl = {
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
      p.confirm(
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
        return p.modal(t.href);
      if (t.slideover)
        return p.slideover(t.href);
      p.visit(t.href);
    }
    return (a, o) => (k(), je("a", {
      href: e.href,
      onClick: Sn(r, ["prevent"])
    }, [
      _n(a.$slots, "default")
    ], 8, Dl));
  }
}, jl = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
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
      required: !0
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
      Dialog: zr,
      DialogPanel: Wr,
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
}, Rl = {
  inject: ["stack"],
  render() {
    const e = p.validationErrors(this.stack), t = p.flashData(this.stack), r = p.sharedData.value, n = un(e, (a) => a.join(`
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
}, Bl = {
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
      TransitionChild: Ae
    });
  }
}, Il = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Ll = {
  computed: {
    toasts: function() {
      return p.toastsReversed.value;
    },
    hasBackdrop: function() {
      return p.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      p.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: Il,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: be,
      TransitionRoot: xe,
      TransitionChild: Ae
    });
  }
}, Ml = {
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
}, Ul = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = L(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = L(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = L(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = L(t, "link_component") ? t.link_component : "Link";
    const r = t.prefix;
    e.component(`${r}Confirm`, ns).component(`${r}Data`, us).component(`${r}Defer`, cs).component(`${r}Errors`, fs).component(`${r}Event`, ds).component(`${r}Flash`, ps).component(`${r}Form`, Cl).component(`${r}Modal`, jl).component(`${r}Render`, be).component(`${r}State`, Rl).component(`${r}Toast`, Bl).component(`${r}Toasts`, Ll).component(`${r}Toggle`, Ml).component(t.link_component, Fl), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => p }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions);
  }
};
function Gl(e, t, r) {
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
        }), c = await t(u);
        i.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), i.write(JSON.stringify({ body: c })), i.end();
      });
    }
  }).listen(a, () => console.log(`Splade SSR server started on port ${a}.`));
}
export {
  p as Splade,
  wo as SpladeApp,
  Ul as SpladePlugin,
  Hl as renderSpladeApp,
  Gl as startServer
};
