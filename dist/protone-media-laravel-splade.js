import ae from "axios";
import { ref as b, computed as P, watch as lt, openBlock as j, createBlock as z, unref as H, createCommentVNode as Lr, h as M, onMounted as N, createElementBlock as ye, createElementVNode as gr, provide as le, inject as U, nextTick as qe, KeepAlive as li, normalizeStyle as Rt, createVNode as Is, Fragment as kr, renderList as As, cloneVNode as Ps, watchEffect as ue, defineComponent as X, onUnmounted as we, Teleport as ui, reactive as qs, shallowRef as Cs, normalizeClass as Fs, onBeforeUnmount as Ls, renderSlot as J, resolveComponent as Dr, withCtx as ci, withModifiers as ks, withDirectives as Ds, resolveDynamicComponent as Bs, normalizeProps as js, guardReactiveProps as Rs, vShow as Ms } from "vue";
function Ns(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
function Vs(e) {
  return function(t, r, n) {
    for (var i = -1, s = Object(t), a = n(t), o = a.length; o--; ) {
      var l = a[e ? o : ++i];
      if (r(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Hs = Vs();
const Us = Hs;
function Ws(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var zs = typeof global == "object" && global && global.Object === Object && global;
const di = zs;
var Gs = typeof self == "object" && self && self.Object === Object && self, Xs = di || Gs || Function("return this")();
const he = Xs;
var Ks = he.Symbol;
const Ce = Ks;
var fi = Object.prototype, Ys = fi.hasOwnProperty, Qs = fi.toString, mt = Ce ? Ce.toStringTag : void 0;
function Js(e) {
  var t = Ys.call(e, mt), r = e[mt];
  try {
    e[mt] = void 0;
    var n = !0;
  } catch {
  }
  var i = Qs.call(e);
  return n && (t ? e[mt] = r : delete e[mt]), i;
}
var Zs = Object.prototype, ea = Zs.toString;
function ta(e) {
  return ea.call(e);
}
var ra = "[object Null]", na = "[object Undefined]", $n = Ce ? Ce.toStringTag : void 0;
function ke(e) {
  return e == null ? e === void 0 ? na : ra : $n && $n in Object(e) ? Js(e) : ta(e);
}
function Fe(e) {
  return e != null && typeof e == "object";
}
var ia = "[object Arguments]";
function En(e) {
  return Fe(e) && ke(e) == ia;
}
var pi = Object.prototype, sa = pi.hasOwnProperty, aa = pi.propertyIsEnumerable, oa = En(function() {
  return arguments;
}()) ? En : function(e) {
  return Fe(e) && sa.call(e, "callee") && !aa.call(e, "callee");
};
const hi = oa;
var la = Array.isArray;
const R = la;
function ua() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = mi && typeof module == "object" && module && !module.nodeType && module, ca = Tn && Tn.exports === mi, xn = ca ? he.Buffer : void 0, da = xn ? xn.isBuffer : void 0, fa = da || ua;
const yr = fa;
var pa = 9007199254740991, ha = /^(?:0|[1-9]\d*)$/;
function Br(e, t) {
  var r = typeof e;
  return t = t == null ? pa : t, !!t && (r == "number" || r != "symbol" && ha.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ma = 9007199254740991;
function jr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ma;
}
var va = "[object Arguments]", ga = "[object Array]", ya = "[object Boolean]", ba = "[object Date]", wa = "[object Error]", Sa = "[object Function]", Oa = "[object Map]", $a = "[object Number]", Ea = "[object Object]", Ta = "[object RegExp]", xa = "[object Set]", _a = "[object String]", Ia = "[object WeakMap]", Aa = "[object ArrayBuffer]", Pa = "[object DataView]", qa = "[object Float32Array]", Ca = "[object Float64Array]", Fa = "[object Int8Array]", La = "[object Int16Array]", ka = "[object Int32Array]", Da = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", ja = "[object Uint16Array]", Ra = "[object Uint32Array]", L = {};
L[qa] = L[Ca] = L[Fa] = L[La] = L[ka] = L[Da] = L[Ba] = L[ja] = L[Ra] = !0;
L[va] = L[ga] = L[Aa] = L[ya] = L[Pa] = L[ba] = L[wa] = L[Sa] = L[Oa] = L[$a] = L[Ea] = L[Ta] = L[xa] = L[_a] = L[Ia] = !1;
function Ma(e) {
  return Fe(e) && jr(e.length) && !!L[ke(e)];
}
function Na(e) {
  return function(t) {
    return e(t);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, wt = vi && typeof module == "object" && module && !module.nodeType && module, Va = wt && wt.exports === vi, ur = Va && di.process, Ha = function() {
  try {
    var e = wt && wt.require && wt.require("util").types;
    return e || ur && ur.binding && ur.binding("util");
  } catch {
  }
}();
const _n = Ha;
var In = _n && _n.isTypedArray, Ua = In ? Na(In) : Ma;
const gi = Ua;
var Wa = Object.prototype, za = Wa.hasOwnProperty;
function Ga(e, t) {
  var r = R(e), n = !r && hi(e), i = !r && !n && yr(e), s = !r && !n && !i && gi(e), a = r || n || i || s, o = a ? Ws(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || za.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Br(u, l))) && o.push(u);
  return o;
}
var Xa = Object.prototype;
function Ka(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xa;
  return e === r;
}
function Ya(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Qa = Ya(Object.keys, Object);
const Ja = Qa;
var Za = Object.prototype, eo = Za.hasOwnProperty;
function to(e) {
  if (!Ka(e))
    return Ja(e);
  var t = [];
  for (var r in Object(e))
    eo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function G(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ro = "[object AsyncFunction]", no = "[object Function]", io = "[object GeneratorFunction]", so = "[object Proxy]";
function yi(e) {
  if (!G(e))
    return !1;
  var t = ke(e);
  return t == no || t == io || t == ro || t == so;
}
function Wt(e) {
  return e != null && jr(e.length) && !yi(e);
}
function zt(e) {
  return Wt(e) ? Ga(e) : to(e);
}
function Rr(e, t) {
  return e && Us(e, t, zt);
}
function ao(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Wt(r))
      return e(r, n);
    for (var i = r.length, s = t ? i : -1, a = Object(r); (t ? s-- : ++s < i) && n(a[s], s, a) !== !1; )
      ;
    return r;
  };
}
var oo = ao(Rr);
const Mr = oo;
function bi(e) {
  return e;
}
function wi(e) {
  return typeof e == "function" ? e : bi;
}
function lo(e, t) {
  var r = R(e) ? Ns : Mr;
  return r(e, wi(t));
}
function re(e, t) {
  return e && Rr(e, wi(t));
}
var uo = Array.prototype, co = uo.reverse;
function fo(e) {
  return e == null ? e : co.call(e);
}
class Si {
  constructor(t) {
    this.id = t, this.events = {};
  }
  on(t, r) {
    this.events[t] || (this.events[t] = []), this.events[t].push(r);
  }
  off(t, r) {
    !this.events[t] || (this.events[t] = this.events[t].filter((n) => n !== r));
  }
  emit(t, r) {
    !this.events[t] || this.events[t].forEach((n) => {
      n(r);
    });
  }
}
const Mt = b(0), ee = b(1), D = b({}), ne = b(0), Gt = b({}), rt = {}, be = typeof window > "u";
function po(e, t, r) {
  be || window.addEventListener("popstate", ho.bind(this)), Object.keys(t).length > 0 && Mt.value++, rt[ee.value] = new Si(ee.value), Ur(r), Xt(r.head), Wr(e);
  const n = be ? "" : location.href, i = Nr(
    n,
    r.head,
    e,
    t,
    {},
    ee.value,
    Mt.value,
    r.persistentLayout
  );
  Oi(i);
}
function ho(e) {
  !e.state || (D.value = e.state, ne.value = 0, Gt.value = {}, zr.value = {}, Vr.value = D.value.persistentLayoutKey, Xt(D.value.head), Wr(D.value.html, D.value.rememberedState.scrollY));
}
function Nr(e, t, r, n, i, s, a, o) {
  const l = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: s,
    dynamicVisitId: a,
    persistentLayoutKey: o
  };
  return D.value = l, l;
}
function mo(e) {
  be || window.history.pushState(e, "", e.url);
}
function vo(e) {
  const t = Nr(
    e,
    JSON.parse(JSON.stringify(D.value.head)),
    D.value.html,
    JSON.parse(JSON.stringify(D.value.dynamics)),
    { ...D.value.rememberedState },
    D.value.pageVisitId,
    D.value.dynamicVisitId,
    D.value.persistentLayoutKey
  );
  be || window.history.replaceState(t, "", t.url);
}
function Oi(e) {
  be || window.history.replaceState(e, "", e.url);
}
const cr = b(0), Vr = b(null);
function go(e, t) {
  var f;
  cr.value++;
  const r = e.request.responseURL;
  if (G((f = e.data) == null ? void 0 : f.splade) || console.error("The response is not a Splade response. Did you use the Splade Middleware on this route?"), e.data.splade.lazy || e.data.splade.rehydrate)
    return;
  e.data.splade.modal && !e.data.splade.modalTarget && ne.value++;
  const n = Vr.value;
  if (Ur(e.data.splade), Xt(e.data.splade.head), r === D.value.url && (t = !0), e.data.splade.modal)
    return Ci(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ne.value = 0, Gt.value = {};
  let i = e.data.html, s = e.data.dynamics;
  const a = Object.keys(D.value.dynamics).length > 0, o = Object.keys(s).length > 0;
  t ? (o && re(s, (m, d) => {
    s[d] += `<!-- ${cr.value} -->`;
  }), (!o || !a) && (i += `<!-- ${cr.value} -->`)) : (o && Mt.value++, (!o || !a) && (ee.value++, rt[ee.value] = rt[ee.value] || new Si(ee.value)));
  let l = e.data.splade.persistentLayout && n === e.data.splade.persistentLayout, u = 0;
  !be && t && e.data.splade.preserveScroll && (u = window.scrollY), Wr(
    l ? D.value.html : i,
    u
  );
  const c = Nr(
    r,
    e.data.splade.head,
    l ? D.value.html : i,
    s,
    D.value.rememberedState ? { ...D.value.rememberedState } : {},
    ee.value,
    Mt.value,
    e.data.splade.persistentLayout
  );
  t ? Oi(c) : mo(c);
}
function yo() {
  ne.value--, Xt(wo(ne.value));
}
const $i = b({}), Ei = (e) => $i.value[e], bo = (e) => Object.keys(Ei.value[e]).length > 0, Ti = b({}), wo = (e) => Ti.value[e], xi = b({}), So = (e) => xi.value[e], nt = b([]);
function Oo(e) {
  nt.value.push(e);
}
const $o = P(() => fo(nt.value));
function Eo(e) {
  nt.value[e].dismissed = !0, nt.value[e].html = null;
}
const Hr = b(null);
function To(e, t, r, n, i, s, a) {
  let o, l;
  typeof i > "u" && (i = !1), typeof s > "u" && (s = !1), typeof a > "u" && (a = !1);
  const u = new Promise((c, f) => {
    o = c, l = f;
  });
  return Hr.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: o,
    rejectPromise: l,
    confirmPassword: i,
    confirmPasswordOnce: s,
    confirmDanger: a
  }, u;
}
function xo() {
  Hr.value = null;
}
const _i = b({});
function Ur(e) {
  Vr.value = e.persistentLayout, _i.value = e.shared ? e.shared : {}, xi.value[ne.value] = e.flash ? e.flash : {}, Ti.value[ne.value] = e.head ? e.head : {}, lo(e.toasts ? e.toasts : [], (t) => {
    nt.value.push(t);
  }), $i.value[ne.value] = e.errors ? e.errors : {};
}
const Ii = b(() => {
}), Ai = b(() => {
}), Pi = b(() => {
}), qi = b(() => {
});
function Xt(e) {
  Ii.value(e);
}
function Wr(e, t) {
  Ai.value(e, t);
}
function Ci(e, t) {
  Gt.value[ne.value] = !0, Pi.value(e, t);
}
function _o(e) {
  return Gt.value[e];
}
function Io(e) {
  qi.value(e);
}
const Fi = b({});
function Li(e, t, r) {
  Fi.value[e] = t, r && Ao(e, t);
}
function Ao(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function Po(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Fi.value[e];
}
function Xe(e, t, r, n, i) {
  if (be || Li("scrollY", window.scrollY), t.toUpperCase() === "GET") {
    const a = new URLSearchParams(r).toString();
    a != "" && (e = `${e.split("?")[0]}?${a}`), r = {};
  }
  yt("internal:request", { url: e, method: t, data: r, headers: n, replace: i });
  const s = ae({
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
      r instanceof FormData && (a.percentage = Math.round(a.loaded / a.total * 100), yt("internal:request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: a }));
    }
  });
  return s.then((a) => {
    go(a, i), yt("internal:request-response", { url: e, method: t, data: r, headers: n, replace: i, response: a });
  }).catch((a) => {
    if (yt("internal:request-error", { url: e, method: t, data: r, headers: n, replace: i, error: a }), !a.response)
      return;
    if (a.response.status == 409 && a.response.headers["x-splade-redirect-away"])
      return window.location = a.response.headers["x-splade-redirect-away"];
    const o = a.response.data.splade;
    o && !o.lazy && !o.rehydrate && Ur(o), a.response.status != 422 && Io(
      a.response.data.html ? a.response.data.html : a.response.data
    );
  }), s;
}
function ki(e, t) {
  return typeof t > "u" && (t = {}), Xe(e, "GET", {}, t, !0);
}
function qo(e, t) {
  return typeof t > "u" && (t = {}), Xe(e, "GET", {}, t, !1);
}
function Co(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "modal" }, !1);
}
const zr = b({});
function Fo(e) {
  const t = zr.value[e];
  return t ? (ne.value++, Ci(t.html, t.type), !0) : !1;
}
function Lo(e, t, r) {
  zr.value[e] = { html: t, type: r };
}
function ko(e) {
  return Xe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, !1);
}
function Do(e, t) {
  return Xe(e, "GET", {}, { "X-Splade-Lazy": t }, !1);
}
function Bo(e, t) {
  return Xe(e, "GET", {}, { "X-Splade-Rehydrate": t }, !1);
}
function jo() {
  return ki(D.value.url);
}
function Ro(e, t) {
  rt[ee.value].on(e, t);
}
function Mo(e, t) {
  rt[ee.value].off(e, t);
}
function yt(e, t) {
  typeof t > "u" && (t = {}), rt[ee.value].emit(e, t), be || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
const v = {
  init: po,
  replace: ki,
  visit: qo,
  modal: Co,
  slideover: ko,
  refresh: jo,
  request: Xe,
  lazy: Do,
  rehydrate: Bo,
  replaceUrlOfCurrentPage: vo,
  htmlForDynamicComponent(e) {
    return D.value.dynamics[e];
  },
  setOnHead(e) {
    Ii.value = e;
  },
  setOnHtml(e) {
    Ai.value = e;
  },
  setOnModal(e) {
    Pi.value = e;
  },
  setOnServerError(e) {
    qi.value = e;
  },
  hasValidationErrors: bo,
  validationErrors: Ei,
  sharedData: _i,
  flashData: So,
  toasts: nt,
  toastsReversed: $o,
  confirmModal: Hr,
  confirm: To,
  clearConfirmModal: xo,
  pushToast: Oo,
  dismissToast: Eo,
  restore: Po,
  remember: Li,
  popStack: yo,
  currentStack: ne,
  stackType: _o,
  pageVisitId: P(() => D.value.pageVisitId),
  dynamicVisitId: P(() => D.value.dynamicVisitId),
  isSsr: be,
  openPreloadedModal: Fo,
  registerPreloadedModal: Lo,
  on: Ro,
  off: Mo,
  emit: yt
};
var No = "[object String]";
function te(e) {
  return typeof e == "string" || !R(e) && Fe(e) && ke(e) == No;
}
const oe = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: !1,
      default: ""
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = e, r = b(null);
    function n() {
      r.value = M({
        template: t.html,
        data() {
          return { ...t.passthrough };
        }
      });
    }
    return lt(() => t.html, n, { immediate: !0 }), (i, s) => e.html ? (j(), z(H(r), { key: 0 })) : Lr("", !0);
  }
}, Vo = {
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
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", s);
    }
    function s(o) {
      o.keyCode === 27 && a();
    }
    function a() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", s), t("close");
    }
    return N(() => i()), (o, l) => (j(), ye("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: a
    }, [
      gr("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, Ho = {
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
        if (!v.isSsr) {
          const t = te(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = te(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = te(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: !1,
      default: (e) => {
        if (!v.isSsr) {
          const t = te(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    le("stack", 0);
    const r = b(), n = b([]), i = b(null), s = b(null), a = b(!0), o = U("$spladeOptions") || {}, l = P(() => v.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function u() {
      i.value = null;
    }
    function c(d) {
      n.value[d] = null, v.popStack();
    }
    function f(d) {
      const h = document.createElement("meta");
      re(d, (p, g) => {
        h[g] = p;
      }), document.getElementsByTagName("head")[0].appendChild(h);
    }
    function m(d) {
      var p;
      let h = "meta";
      re(d, (g, w) => {
        h = `${h}[${w}="${g}"]`;
      });
      try {
        (p = document.querySelector(h)) == null || p.remove();
      } catch {
      }
    }
    return v.setOnHead((d) => {
      var h;
      if (!v.isSsr) {
        if (s.value === null) {
          s.value = d.meta;
          return;
        }
        if (s.value.forEach((p) => {
          m(p);
        }), s.value = d.meta, document.title = d.title, d.meta.forEach((p) => {
          f(p);
        }), (h = document.querySelector('link[rel="canonical"]')) == null || h.remove(), d.canonical) {
          const p = document.createElement("link");
          p.rel = "canonical", p.href = d.canonical, document.getElementsByTagName("head")[0].appendChild(p);
        }
      }
    }), v.setOnHtml((d, h) => {
      n.value = [], r.value = d, qe(() => {
        v.isSsr || window.scrollTo(0, h), o.transform_anchors && [...document.querySelectorAll("a")].forEach((p) => {
          p.href == "" || p.href.charAt(0) == "#" || p.__vnode.dynamicProps === null && (p.hasAttribute("download") || (p.onclick = function(g) {
            g.preventDefault(), v.visit(p.href);
          }));
        });
      });
    }), v.setOnModal(function(d, h) {
      n.value[v.currentStack.value] && (a.value = !1), n.value[v.currentStack.value] = { html: d, type: h }, qe(() => {
        a.value = !0;
      });
    }), v.setOnServerError(function(d) {
      i.value = d;
    }), v.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), N(() => {
      if (v.isSsr)
        return;
      const d = te(t.el) ? document.getElementById(t.el) : t.el;
      ["components", "html", "dynamics", "splade"].forEach((h) => {
        delete d.dataset[h];
      });
    }), (d, h) => (j(), ye("div", null, [
      H(v).isSsr ? (j(), z(oe, {
        key: `visit.${H(v).pageVisitId.value}`,
        style: Rt(H(l)),
        html: r.value
      }, null, 8, ["style", "html"])) : (j(), z(li, {
        key: 0,
        max: H(o).max_keep_alive
      }, [
        (j(), z(oe, {
          key: `visit.${H(v).pageVisitId.value}`,
          style: Rt(H(l)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      Is(oe, { html: e.components }, null, 8, ["html"]),
      (j(!0), ye(kr, null, As(H(v).currentStack.value, (p) => (j(), z(oe, {
        key: `modal.${p}`,
        type: n.value[p].type,
        html: n.value[p].html,
        stack: p,
        "on-top-of-stack": H(v).currentStack.value === p,
        animate: a.value,
        onClose: (g) => c(p)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "animate", "onClose"]))), 128)),
      i.value ? (j(), z(Vo, {
        key: 2,
        html: i.value,
        onClose: u
      }, null, 8, ["html"])) : Lr("", !0)
    ]));
  }
};
function _p(e) {
  return () => M(Ho, e);
}
var Uo = Object.prototype, Wo = Uo.hasOwnProperty;
function zo(e, t) {
  return e != null && Wo.call(e, t);
}
var Go = "[object Symbol]";
function Kt(e) {
  return typeof e == "symbol" || Fe(e) && ke(e) == Go;
}
var Xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ko = /^\w*$/;
function Gr(e, t) {
  if (R(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Kt(e) ? !0 : Ko.test(e) || !Xo.test(e) || t != null && e in Object(t);
}
var Yo = he["__core-js_shared__"];
const dr = Yo;
var An = function() {
  var e = /[^.]+$/.exec(dr && dr.keys && dr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!An && An in e;
}
var Jo = Function.prototype, Zo = Jo.toString;
function Ke(e) {
  if (e != null) {
    try {
      return Zo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, tl = /^\[object .+?Constructor\]$/, rl = Function.prototype, nl = Object.prototype, il = rl.toString, sl = nl.hasOwnProperty, al = RegExp(
  "^" + il.call(sl).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ol(e) {
  if (!G(e) || Qo(e))
    return !1;
  var t = yi(e) ? al : tl;
  return t.test(Ke(e));
}
function ll(e, t) {
  return e == null ? void 0 : e[t];
}
function Ye(e, t) {
  var r = ll(e, t);
  return ol(r) ? r : void 0;
}
var ul = Ye(Object, "create");
const Ot = ul;
function cl() {
  this.__data__ = Ot ? Ot(null) : {}, this.size = 0;
}
function dl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fl = "__lodash_hash_undefined__", pl = Object.prototype, hl = pl.hasOwnProperty;
function ml(e) {
  var t = this.__data__;
  if (Ot) {
    var r = t[e];
    return r === fl ? void 0 : r;
  }
  return hl.call(t, e) ? t[e] : void 0;
}
var vl = Object.prototype, gl = vl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return Ot ? t[e] !== void 0 : gl.call(t, e);
}
var bl = "__lodash_hash_undefined__";
function wl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ot && t === void 0 ? bl : t, this;
}
function ze(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ze.prototype.clear = cl;
ze.prototype.delete = dl;
ze.prototype.get = ml;
ze.prototype.has = yl;
ze.prototype.set = wl;
function Sl() {
  this.__data__ = [], this.size = 0;
}
function Xr(e, t) {
  return e === t || e !== e && t !== t;
}
function Yt(e, t) {
  for (var r = e.length; r--; )
    if (Xr(e[r][0], t))
      return r;
  return -1;
}
var Ol = Array.prototype, $l = Ol.splice;
function El(e) {
  var t = this.__data__, r = Yt(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : $l.call(t, r, 1), --this.size, !0;
}
function Tl(e) {
  var t = this.__data__, r = Yt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xl(e) {
  return Yt(this.__data__, e) > -1;
}
function _l(e, t) {
  var r = this.__data__, n = Yt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = Sl;
Se.prototype.delete = El;
Se.prototype.get = Tl;
Se.prototype.has = xl;
Se.prototype.set = _l;
var Il = Ye(he, "Map");
const $t = Il;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new ze(),
    map: new ($t || Se)(),
    string: new ze()
  };
}
function Pl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qt(e, t) {
  var r = e.__data__;
  return Pl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ql(e) {
  var t = Qt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cl(e) {
  return Qt(this, e).get(e);
}
function Fl(e) {
  return Qt(this, e).has(e);
}
function Ll(e, t) {
  var r = Qt(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = Al;
Oe.prototype.delete = ql;
Oe.prototype.get = Cl;
Oe.prototype.has = Fl;
Oe.prototype.set = Ll;
var kl = "Expected a function";
function Kr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var a = e.apply(this, n);
    return r.cache = s.set(i, a) || s, a;
  };
  return r.cache = new (Kr.Cache || Oe)(), r;
}
Kr.Cache = Oe;
var Dl = 500;
function Bl(e) {
  var t = Kr(e, function(n) {
    return r.size === Dl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rl = /\\(\\)?/g, Ml = Bl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(jl, function(r, n, i, s) {
    t.push(i ? s.replace(Rl, "$1") : n || r);
  }), t;
});
const Nl = Ml;
function Di(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Vl = 1 / 0, Pn = Ce ? Ce.prototype : void 0, qn = Pn ? Pn.toString : void 0;
function Jt(e) {
  if (typeof e == "string")
    return e;
  if (R(e))
    return Di(e, Jt) + "";
  if (Kt(e))
    return qn ? qn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Vl ? "-0" : t;
}
function Yr(e) {
  return e == null ? "" : Jt(e);
}
function Qr(e, t) {
  return R(e) ? e : Gr(e, t) ? [e] : Nl(Yr(e));
}
var Hl = 1 / 0;
function Tt(e) {
  if (typeof e == "string" || Kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Hl ? "-0" : t;
}
function Bi(e, t, r) {
  t = Qr(t, e);
  for (var n = -1, i = t.length, s = !1; ++n < i; ) {
    var a = Tt(t[n]);
    if (!(s = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return s || ++n != i ? s : (i = e == null ? 0 : e.length, !!i && jr(i) && Br(a, i) && (R(e) || hi(e)));
}
function Y(e, t) {
  return e != null && Bi(e, t, zo);
}
const Ul = {
  props: {
    spinner: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  render() {
    return this.$slots.default({
      spinner: this.spinner
    });
  }
};
function ce(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, ce), n;
}
var Nt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nt || {}), Pe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Pe || {});
function K({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var s;
  let a = Ri(n, r), o = Object.assign(i, { props: a });
  if (e || t & 2 && a.static)
    return fr(o);
  if (t & 1) {
    let l = (s = a.unmount) == null || s ? 0 : 1;
    return ce(l, { [0]() {
      return null;
    }, [1]() {
      return fr({ ...i, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return fr(o);
}
function fr({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var s, a;
  let { as: o, ...l } = Mi(e, ["unmount", "static"]), u = (s = r.default) == null ? void 0 : s.call(r, n), c = {};
  if (n) {
    let f = !1, m = [];
    for (let [d, h] of Object.entries(n))
      typeof h == "boolean" && (f = !0), h === !0 && m.push(d);
    f && (c["data-headlessui-state"] = m.join(" "));
  }
  if (o === "template") {
    if (u = ji(u != null ? u : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = u != null ? u : [];
      if (!Wl(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p) => p.trim()).filter((p, g, w) => w.indexOf(p) === g).sort((p, g) => p.localeCompare(g)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      let d = Ri((a = f.props) != null ? a : {}, l), h = Ps(f, d);
      for (let p in d)
        p.startsWith("on") && (h.props || (h.props = {}), h.props[p] = d[p]);
      return h;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return M(o, Object.assign({}, l, c), { default: () => u });
}
function ji(e) {
  return e.flatMap((t) => t.type === kr ? ji(t.children) : [t]);
}
function Ri(...e) {
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
    Object.assign(t, { [n](i, ...s) {
      let a = r[n];
      for (let o of a) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...s);
      }
    } });
  return t;
}
function Mi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Wl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zl = 0;
function Gl() {
  return ++zl;
}
function Qe() {
  return Gl();
}
var Ni = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ni || {});
function de(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Vi = Symbol("Context");
var W = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(W || {});
function Xl() {
  return Jr() !== null;
}
function Jr() {
  return U(Vi, null);
}
function Kl(e) {
  le(Vi, e);
}
class Yl {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let xt = new Yl();
function ut(e) {
  if (xt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = de(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let br = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ae || {}), Hi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Hi || {}), Ql = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ql || {});
function Jl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(br)).sort((t, r) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ui = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ui || {});
function Zl(e, t = 0) {
  var r;
  return e === ((r = ut(e)) == null ? void 0 : r.body) ? !1 : ce(t, { [0]() {
    return e.matches(br);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(br))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function tt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let eu = ["textarea", "input"].join(",");
function tu(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, eu)) != null ? r : !1;
}
function ru(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), s = t(n);
    if (i === null || s === null)
      return 0;
    let a = i.compareDocumentPosition(s);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Dt(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: i = [] } = {}) {
  var s;
  let a = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, o = Array.isArray(e) ? r ? ru(e) : e : Jl(e);
  i.length > 0 && o.length > 1 && (o = o.filter((h) => !i.includes(h))), n = n != null ? n : a.activeElement;
  let l = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(n)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, m = o.length, d;
  do {
    if (f >= m || f + m <= 0)
      return 0;
    let h = u + f;
    if (t & 16)
      h = (h + m) % m;
    else {
      if (h < 0)
        return 3;
      if (h >= m)
        return 1;
    }
    d = o[h], d == null || d.focus(c), f += l;
  } while (d !== a.activeElement);
  return t & 6 && tu(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function pr(e, t, r) {
  xt.isServer || ue((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function nu(e, t, r = P(() => !0)) {
  function n(s, a) {
    if (!r.value || s.defaultPrevented)
      return;
    let o = a(s);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : de(u);
      if (c != null && c.contains(o) || s.composed && s.composedPath().includes(c))
        return;
    }
    return !Zl(o, Ui.Loose) && o.tabIndex !== -1 && s.preventDefault(), t(s, o);
  }
  let i = b(null);
  pr("mousedown", (s) => {
    var a, o;
    r.value && (i.value = ((o = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : o[0]) || s.target);
  }, !0), pr("click", (s) => {
    !i.value || (n(s, () => i.value), i.value = null);
  }, !0), pr("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Vt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Vt || {});
let wr = X({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return K({ ourProps: s, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function iu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function su(e, t, r) {
  xt.isServer || ue((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var bt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(bt || {});
function au() {
  let e = b(0);
  return su("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wi(e, t, r, n) {
  xt.isServer || ue((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function ou(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var zi = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(zi || {});
let vt = Object.assign(X({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: b(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = b(null);
  n({ el: i, $el: i });
  let s = P(() => ut(i));
  lu({ ownerDocument: s }, P(() => Boolean(e.features & 16)));
  let a = uu({ ownerDocument: s, container: i, initialFocus: P(() => e.initialFocus) }, P(() => Boolean(e.features & 2)));
  cu({ ownerDocument: s, container: i, containers: e.containers, previousActiveElement: a }, P(() => Boolean(e.features & 8)));
  let o = au();
  function l(m) {
    let d = de(i);
    !d || ((h) => h())(() => {
      ce(o.value, { [bt.Forwards]: () => {
        Dt(d, Ae.First, { skipElements: [m.relatedTarget] });
      }, [bt.Backwards]: () => {
        Dt(d, Ae.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let u = b(!1);
  function c(m) {
    m.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
      u.value = !1;
    }));
  }
  function f(m) {
    var d;
    let h = new Set((d = e.containers) == null ? void 0 : d.value);
    h.add(i);
    let p = m.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (Gi(h, p) || (u.value ? Dt(de(i), ce(o.value, { [bt.Forwards]: () => Ae.Next, [bt.Backwards]: () => Ae.Previous }) | Ae.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && tt(m.target)));
  }
  return () => {
    let m = {}, d = { ref: i, onKeydown: c, onFocusout: f }, { features: h, initialFocus: p, containers: g, ...w } = e;
    return M(kr, [Boolean(h & 4) && M(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Vt.Focusable }), K({ ourProps: d, theirProps: { ...t, ...w }, slot: m, attrs: t, slots: r, name: "FocusTrap" }), Boolean(h & 4) && M(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: l, features: Vt.Focusable })]);
  };
} }), { features: zi });
function lu({ ownerDocument: e }, t) {
  let r = b(null);
  function n() {
    var s;
    r.value || (r.value = (s = e.value) == null ? void 0 : s.activeElement);
  }
  function i() {
    !r.value || (tt(r.value), r.value = null);
  }
  N(() => {
    lt(t, (s, a) => {
      s !== a && (s ? n() : i());
    }, { immediate: !0 });
  }), we(i);
}
function uu({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = b(null), s = b(!1);
  return N(() => s.value = !0), we(() => s.value = !1), N(() => {
    lt([t, r, n], (a, o) => {
      if (a.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = de(t);
      !l || ou(() => {
        var u, c;
        if (!s.value)
          return;
        let f = de(r), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === m) {
            i.value = m;
            return;
          }
        } else if (l.contains(m)) {
          i.value = m;
          return;
        }
        f ? tt(f) : Dt(l, Ae.First | Ae.NoScroll) === Hi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), i;
}
function cu({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var s;
  Wi((s = e.value) == null ? void 0 : s.defaultView, "focus", (a) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Gi(o, u) ? (n.value = u, tt(u)) : (a.preventDefault(), a.stopPropagation(), tt(l)) : tt(n.value);
  }, !0);
}
function Gi(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return !0;
  return !1;
}
let Cn = "body > *", Ze = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Map();
function Fn(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Ln(e) {
  let t = Ie.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function du(e, t = b(!0)) {
  ue((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = ut(n);
    if (i) {
      Ze.add(n);
      for (let s of Ie.keys())
        s.contains(n) && (Ln(s), Ie.delete(s));
      i.querySelectorAll(Cn).forEach((s) => {
        if (s instanceof HTMLElement) {
          for (let a of Ze)
            if (s.contains(a))
              return;
          Ze.size === 1 && (Ie.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Fn(s));
        }
      }), r(() => {
        if (Ze.delete(n), Ze.size > 0)
          i.querySelectorAll(Cn).forEach((s) => {
            if (s instanceof HTMLElement && !Ie.has(s)) {
              for (let a of Ze)
                if (s.contains(a))
                  return;
              Ie.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), Fn(s);
            }
          });
        else
          for (let s of Ie.keys())
            Ln(s), Ie.delete(s);
      });
    }
  });
}
let Xi = Symbol("ForcePortalRootContext");
function fu() {
  return U(Xi, !1);
}
let Sr = X({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: r }) {
  return le(Xi, e.force), () => {
    let { force: n, ...i } = e;
    return K({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function pu(e) {
  let t = ut(e);
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
let Ki = X({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = b(null), i = P(() => ut(n)), s = fu(), a = U(Yi, null), o = b(s === !0 || a == null ? pu(n.value) : a.resolveTarget());
  return ue(() => {
    s || a != null && (o.value = a.resolveTarget());
  }), we(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return M(ui, { to: o.value }, K({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Yi = Symbol("PortalGroupContext"), hu = X({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = qs({ resolveTarget() {
    return e.target;
  } });
  return le(Yi, n), () => {
    let { target: i, ...s } = e;
    return K({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Qi = Symbol("StackContext");
var Or = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Or || {});
function mu() {
  return U(Qi, () => {
  });
}
function vu({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = mu();
  function s(...a) {
    n == null || n(...a), i(...a);
  }
  N(() => {
    lt(t, (a, o) => {
      a ? s(0, e, r) : o === !0 && s(1, e, r);
    }, { immediate: !0, flush: "sync" });
  }), we(() => {
    t.value && s(1, e, r);
  }), le(Qi, s);
}
let Ji = Symbol("DescriptionContext");
function gu() {
  let e = U(Ji, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function yu({ slot: e = b({}), name: t = "Description", props: r = {} } = {}) {
  let n = b([]);
  function i(s) {
    return n.value.push(s), () => {
      let a = n.value.indexOf(s);
      a !== -1 && n.value.splice(a, 1);
    };
  }
  return le(Ji, { register: i, slot: e, name: t, props: r }), P(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Ip = X({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = gu();
  return N(() => we(n.register(e.id))), () => {
    let { name: i = "Description", slot: s = b({}), props: a = {} } = n, { id: o, ...l } = e, u = { ...Object.entries(a).reduce((c, [f, m]) => Object.assign(c, { [f]: H(m) }), {}), id: o };
    return K({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: i });
  };
} });
function bu(e) {
  let t = Cs(e.getSnapshot());
  return we(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Zr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, s, a) {
    return n.addEventListener(i, s, a), r.add(() => n.removeEventListener(i, s, a));
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
  }, style(n, i, s) {
    let a = n.style.getPropertyValue(i);
    return Object.assign(n.style, { [i]: s }), this.add(() => {
      Object.assign(n.style, { [i]: a });
    });
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function wu(e, t) {
  let r = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return r;
  }, subscribe(i) {
    return n.add(i), () => n.delete(i);
  }, dispatch(i, ...s) {
    let a = t[i].call(r, ...s);
    a && (r = a, n.forEach((o) => o()));
  } };
}
function Su() {
  let e;
  return { before({ doc: t }) {
    var r;
    let n = t.documentElement;
    e = ((r = t.defaultView) != null ? r : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: r }) {
    let n = t.documentElement, i = n.clientWidth - n.offsetWidth, s = e - i;
    r.style(n, "paddingRight", `${s}px`);
  } };
}
function Ou() {
  if (!iu())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: r, meta: n }) {
    function i(a) {
      return n.containers.flatMap((o) => o()).some((o) => o.contains(a));
    }
    r.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    r.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let o = a.target.closest("a");
          if (!o)
            return;
          let { hash: l } = new URL(o.href), u = t.querySelector(l);
          u && !i(u) && (s = u);
        } catch {
        }
    }, !0), r.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !i(a.target) && a.preventDefault();
    }, { passive: !1 }), r.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function $u() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Eu(e) {
  let t = {};
  for (let r of e)
    Object.assign(t, r(t));
  return t;
}
let He = wu(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var r;
  let n = (r = this.get(e)) != null ? r : { doc: e, count: 0, d: Zr(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let r = this.get(e);
  return r && (r.count--, r.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
  let n = { doc: e, d: t, meta: Eu(r) }, i = [Ou(), Su(), $u()];
  i.forEach(({ before: s }) => s == null ? void 0 : s(n)), i.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
He.subscribe(() => {
  let e = He.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [r] of e)
    t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden", i = r.count !== 0;
    (i && !n || !i && n) && He.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), r.count === 0 && He.dispatch("TEARDOWN", r);
  }
});
function Tu(e, t, r) {
  let n = bu(He), i = P(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return lt([e, t], ([s, a], [o], l) => {
    if (!s || !a)
      return;
    He.dispatch("PUSH", s, r);
    let u = !1;
    l(() => {
      u || (He.dispatch("POP", o != null ? o : s, r), u = !0);
    });
  }, { immediate: !0 }), i;
}
var xu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xu || {});
let $r = Symbol("DialogContext");
function _t(e) {
  let t = U($r, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, _t), r;
  }
  return t;
}
let Ct = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", en = X({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ct }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Qe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var s;
  let a = b(!1);
  N(() => {
    a.value = !0;
  });
  let o = b(0), l = Jr(), u = P(() => e.open === Ct && l !== null ? (l.value & W.Open) === W.Open : e.open), c = b(/* @__PURE__ */ new Set()), f = b(null), m = b(null), d = P(() => ut(f));
  if (i({ el: f, $el: f }), !(e.open !== Ct || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ct ? void 0 : e.open}`);
  let h = P(() => a.value && u.value ? 0 : 1), p = P(() => h.value === 0), g = P(() => o.value > 1), w = U($r, null) !== null, T = P(() => g.value ? "parent" : "leaf"), _ = P(() => l !== null ? (l.value & W.Closing) === W.Closing : !1), S = P(() => !g.value || _.value ? !1 : p.value);
  du(f, S), vu({ type: "Dialog", enabled: P(() => h.value === 0), element: f, onUpdate: (x, E, B) => {
    if (E === "Dialog")
      return ce(x, { [Or.Add]() {
        c.value.add(B), o.value += 1;
      }, [Or.Remove]() {
        c.value.delete(B), o.value -= 1;
      } });
  } });
  let O = yu({ name: "DialogDescription", slot: P(() => ({ open: u.value })) }), y = b(null), $ = { titleId: y, panelRef: b(null), dialogState: h, setTitleId(x) {
    y.value !== x && (y.value = x);
  }, close() {
    t("close", !1);
  } };
  le($r, $);
  function A() {
    var x, E, B;
    return [...Array.from((E = (x = d.value) == null ? void 0 : x.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? E : []).filter((C) => !(C === document.body || C === document.head || !(C instanceof HTMLElement) || C.contains(de(m)) || $.panelRef.value && C.contains($.panelRef.value))), (B = $.panelRef.value) != null ? B : f.value];
  }
  let q = P(() => !(!p.value || g.value));
  nu(() => A(), (x, E) => {
    $.close(), qe(() => E == null ? void 0 : E.focus());
  }, q);
  let k = P(() => !(g.value || h.value !== 0));
  Wi((s = d.value) == null ? void 0 : s.defaultView, "keydown", (x) => {
    !k.value || x.defaultPrevented || x.key === Ni.Escape && (x.preventDefault(), x.stopPropagation(), $.close());
  });
  let I = P(() => !(_.value || h.value !== 0 || w));
  return Tu(d, I, (x) => {
    var E;
    return { containers: [...(E = x.containers) != null ? E : [], A] };
  }), ue((x) => {
    if (h.value !== 0)
      return;
    let E = de(f);
    if (!E)
      return;
    let B = new IntersectionObserver((C) => {
      for (let F of C)
        F.boundingClientRect.x === 0 && F.boundingClientRect.y === 0 && F.boundingClientRect.width === 0 && F.boundingClientRect.height === 0 && $.close();
    });
    B.observe(E), x(() => B.disconnect());
  }), () => {
    let { id: x, open: E, initialFocus: B, ...C } = e, F = { ...r, ref: f, id: x, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": y.value, "aria-describedby": O.value }, V = { open: h.value === 0 };
    return M(Sr, { force: !0 }, () => [M(Ki, () => M(hu, { target: f.value }, () => M(Sr, { force: !1 }, () => M(vt, { initialFocus: B, containers: c, features: p.value ? ce(T.value, { parent: vt.features.RestoreFocus, leaf: vt.features.All & ~vt.features.FocusLock }) : vt.features.None }, () => K({ ourProps: F, theirProps: C, slot: V, attrs: r, slots: n, visible: h.value === 0, features: Nt.RenderStrategy | Nt.Static, name: "Dialog" }))))), M(wr, { features: Vt.Hidden, ref: m })]);
  };
} });
X({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogOverlay");
  function i(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...a } = e;
    return K({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
  };
} });
X({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Qe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogBackdrop"), s = b(null);
  return n({ el: s, $el: s }), N(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...o } = e, l = { id: a, ref: s, "aria-hidden": !0 };
    return M(Sr, { force: !0 }, () => M(Ki, () => K({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let tn = X({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Qe()}` } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = _t("DialogPanel");
  n({ el: i.panelRef, $el: i.panelRef });
  function s(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...o } = e, l = { id: a, ref: i.panelRef, onClick: s };
    return K({ ourProps: l, theirProps: o, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
X({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let n = _t("DialogTitle");
  return N(() => {
    n.setTitleId(e.id), we(() => n.setTitleId(null));
  }), () => {
    let { id: i, ...s } = e;
    return K({ ourProps: { id: i }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
  };
} });
function _u(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function hr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ft(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Er = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Er || {});
function Iu(e, t) {
  let r = Zr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [s, a] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return s !== 0 ? r.setTimeout(() => t("finished"), s + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function kn(e, t, r, n, i, s) {
  let a = Zr(), o = s !== void 0 ? _u(s) : () => {
  };
  return Ft(e, ...i), hr(e, ...t, ...r), a.nextFrame(() => {
    Ft(e, ...r), hr(e, ...n), a.add(Iu(e, (l) => (Ft(e, ...n, ...t), hr(e, ...i), o(l))));
  }), a.add(() => Ft(e, ...t, ...r, ...n, ...i)), a.add(() => o("cancelled")), a.dispose;
}
function Me(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let rn = Symbol("TransitionContext");
var Au = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Au || {});
function Pu() {
  return U(rn, null) !== null;
}
function qu() {
  let e = U(rn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Cu() {
  let e = U(nn, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nn = Symbol("NestingContext");
function Zt(e) {
  return "children" in e ? Zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zi(e) {
  let t = b([]), r = b(!1);
  N(() => r.value = !0), we(() => r.value = !1);
  function n(s, a = Pe.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === s);
    o !== -1 && (ce(a, { [Pe.Unmount]() {
      t.value.splice(o, 1);
    }, [Pe.Hidden]() {
      t.value[o].state = "hidden";
    } }), !Zt(t) && r.value && (e == null || e()));
  }
  function i(s) {
    let a = t.value.find(({ id: o }) => o === s);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, Pe.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let es = Nt.RenderStrategy, ct = X({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  let s = b(0);
  function a() {
    s.value |= W.Opening, t("beforeEnter");
  }
  function o() {
    s.value &= ~W.Opening, t("afterEnter");
  }
  function l() {
    s.value |= W.Closing, t("beforeLeave");
  }
  function u() {
    s.value &= ~W.Closing, t("afterLeave");
  }
  if (!Pu() && Xl())
    return () => M(dt, { ...e, onBeforeEnter: a, onAfterEnter: o, onBeforeLeave: l, onAfterLeave: u }, n);
  let c = b(null), f = b("visible"), m = P(() => e.unmount ? Pe.Unmount : Pe.Hidden);
  i({ el: c, $el: c });
  let { show: d, appear: h } = qu(), { register: p, unregister: g } = Cu(), w = { value: !0 }, T = Qe(), _ = { value: !1 }, S = Zi(() => {
    !_.value && f.value !== "hidden" && (f.value = "hidden", g(T), u());
  });
  N(() => {
    let E = p(T);
    we(E);
  }), ue(() => {
    if (m.value === Pe.Hidden && !!T) {
      if (d && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      ce(f.value, { hidden: () => g(T), visible: () => p(T) });
    }
  });
  let O = Me(e.enter), y = Me(e.enterFrom), $ = Me(e.enterTo), A = Me(e.entered), q = Me(e.leave), k = Me(e.leaveFrom), I = Me(e.leaveTo);
  N(() => {
    ue(() => {
      if (f.value === "visible") {
        let E = de(c);
        if (E instanceof Comment && E.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function x(E) {
    let B = w.value && !h.value, C = de(c);
    !C || !(C instanceof HTMLElement) || B || (_.value = !0, d.value && a(), d.value || l(), E(d.value ? kn(C, O, y, $, A, (F) => {
      _.value = !1, F === Er.Finished && o();
    }) : kn(C, q, k, I, A, (F) => {
      _.value = !1, F === Er.Finished && (Zt(S) || (f.value = "hidden", g(T), u()));
    })));
  }
  return N(() => {
    lt([d], (E, B, C) => {
      x(C), w.value = !1;
    }, { immediate: !0 });
  }), le(nn, S), Kl(P(() => ce(f.value, { visible: W.Open, hidden: W.Closed }) | s.value)), () => {
    let { appear: E, show: B, enter: C, enterFrom: F, enterTo: V, entered: ft, leave: $e, leaveFrom: pt, leaveTo: At, ...Ee } = e, Je = { ref: c }, Te = { ...Ee, ...h && d && xt.isServer ? { class: Fs([Ee.class, ...O, ...y]) } : {} };
    return K({ theirProps: Te, ourProps: Je, slot: {}, slots: n, attrs: r, features: es, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), Fu = ct, dt = X({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = Jr(), s = P(() => e.show === null && i !== null ? (i.value & W.Open) === W.Open : e.show);
  ue(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = b(s.value ? "visible" : "hidden"), o = Zi(() => {
    a.value = "hidden";
  }), l = b(!0), u = { show: s, appear: P(() => e.appear || !l.value) };
  return N(() => {
    ue(() => {
      l.value = !1, s.value ? a.value = "visible" : Zt(o) || (a.value = "hidden");
    });
  }), le(nn, o), le(rn, u), () => {
    let c = Mi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return K({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [M(Fu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...f, ...c }, n.default)] }, attrs: {}, features: es, visible: a.value === "visible", name: "Transition" });
  };
} });
const Lu = {
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
    defaultPasswordText: {
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
    },
    confirmPasswordRoute: {
      type: String,
      required: !1,
      default: ""
    },
    confirmedPasswordStatusRoute: {
      type: String,
      required: !1,
      default: ""
    }
  },
  data() {
    return {
      isOpen: !1,
      password: "",
      passwordError: "",
      submitting: !1
    };
  },
  computed: {
    hasConfirmModal: () => !!v.confirmModal.value,
    title: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.title ? v.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.text ? v.confirmModal.value.text : this.confirmPassword ? this.defaultPasswordText : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmButton ? v.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.cancelButton ? v.confirmModal.value.cancelButton : this.defaultCancelButton;
    },
    confirmPassword: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPassword ? v.confirmModal.value.confirmPassword : !1;
    },
    confirmPasswordOnce: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmPasswordOnce ? v.confirmModal.value.confirmPasswordOnce : !1;
    },
    confirmDanger: function() {
      var e;
      return (e = v.confirmModal.value) != null && e.confirmDanger ? v.confirmModal.value.confirmDanger : !1;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.setIsOpen(!0), this.resetPassword());
    }
  },
  methods: {
    cancel() {
      v.confirmModal.value.rejectPromise(), this.setIsOpen(!1), this.resetPassword();
    },
    resetPassword() {
      this.password = "", this.passwordError = "";
    },
    confirm() {
      if (!this.confirmPassword)
        return this.handleSuccess(null);
      this.submitting = !0;
      let e = this.password;
      this.passwordError = "", ae.post(this.confirmPasswordRoute, { password: e }, { headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      } }).then(() => {
        this.handleSuccess(e);
      }).catch((t) => {
        t.response.status === 422 ? this.passwordError = t.response.data.errors.password[0] : this.passwordError = "An error occurred. Please try again.";
      }).finally(() => {
        this.submitting = !1;
      });
    },
    handleSuccess(e) {
      v.confirmModal.value.resolvePromise(e), this.setIsOpen(!1), this.resetPassword();
    },
    async setIsOpen(e) {
      if (e && this.confirmPassword && this.confirmPasswordOnce)
        try {
          if ((await ae.get(this.confirmedPasswordStatusRoute)).status === 200) {
            this.handleSuccess(null), v.clearConfirmModal();
            return;
          }
        } catch {
        }
      this.isOpen = e;
    },
    emitClose() {
      this.resetPassword(), v.clearConfirmModal();
    },
    setPassword(e) {
      this.password = e;
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      confirmPassword: this.confirmPassword,
      confirmDanger: this.confirmDanger,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      setPassword: this.setPassword,
      passwordError: this.passwordError,
      submitting: this.submitting,
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
};
function ts(e, t) {
  t = Qr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Tt(t[r++])];
  return r && r == n ? e : void 0;
}
function Ue(e, t, r) {
  var n = e == null ? void 0 : ts(e, t);
  return n === void 0 ? r : n;
}
var ku = function() {
  try {
    var e = Ye(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Dn = ku;
function rs(e, t, r) {
  t == "__proto__" && Dn ? Dn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Du = Object.prototype, Bu = Du.hasOwnProperty;
function ju(e, t, r) {
  var n = e[t];
  (!(Bu.call(e, t) && Xr(n, r)) || r === void 0 && !(t in e)) && rs(e, t, r);
}
function Ru(e, t, r, n) {
  if (!G(e))
    return e;
  t = Qr(t, e);
  for (var i = -1, s = t.length, a = s - 1, o = e; o != null && ++i < s; ) {
    var l = Tt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != a) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = G(c) ? c : Br(t[i + 1]) ? [] : {});
    }
    ju(o, l, u), o = o[l];
  }
  return e;
}
function sn(e, t, r) {
  return e == null ? e : Ru(e, t, r);
}
const Mu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: !1
    },
    remember: {
      type: [Boolean, String],
      default: !1,
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
      values: Object.assign({}, { ...this.default })
    };
  },
  beforeMount() {
    if (this.remember) {
      let e = v.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    }
  },
  updated() {
    this.remember && v.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return Ue(e.values, r);
        },
        set(t, r, n) {
          sn(e.values, r, n);
        }
      })
    ) : null;
  }
}, Nu = {
  props: {
    parsed: {
      type: Object,
      required: !0
    },
    raw: {
      type: Object,
      required: !0
    },
    remember: {
      type: Array,
      required: !0
    },
    localStorage: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      stores: Object.assign({}, { ...this.parsed, ...this.raw })
    };
  },
  beforeMount() {
    this.remember.forEach((e) => {
      let t = v.restore(e, this.localStorage.includes(e));
      this.stores[e] = { ...this.stores[e], ...t };
    });
  },
  updated() {
    this.remember.forEach((e) => {
      v.remember(e, { ...this.stores[e] }, this.localStorage.includes(e));
    });
  },
  render() {
    const e = this;
    return this.$slots.default ? this.$slots.default(
      new Proxy(this.stores, {
        ownKeys() {
          return Object.keys(e.stores);
        },
        get(t, r) {
          return Ue(e.stores, r);
        },
        set(t, r, n) {
          sn(e.stores, r, n);
        }
      })
    ) : null;
  }
};
var Vu = function() {
  return he.Date.now();
};
const mr = Vu;
var Hu = /\s/;
function Uu(e) {
  for (var t = e.length; t-- && Hu.test(e.charAt(t)); )
    ;
  return t;
}
var Wu = /^\s+/;
function zu(e) {
  return e && e.slice(0, Uu(e) + 1).replace(Wu, "");
}
var Bn = 0 / 0, Gu = /^[-+]0x[0-9a-f]+$/i, Xu = /^0b[01]+$/i, Ku = /^0o[0-7]+$/i, Yu = parseInt;
function Tr(e) {
  if (typeof e == "number")
    return e;
  if (Kt(e))
    return Bn;
  if (G(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = G(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zu(e);
  var r = Xu.test(e);
  return r || Ku.test(e) ? Yu(e.slice(2), r ? 2 : 8) : Gu.test(e) ? Bn : +e;
}
var Qu = "Expected a function", Ju = Math.max, Zu = Math.min;
function er(e, t, r) {
  var n, i, s, a, o, l, u = 0, c = !1, f = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Qu);
  t = Tr(t) || 0, G(r) && (c = !!r.leading, f = "maxWait" in r, s = f ? Ju(Tr(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
  function d(y) {
    var $ = n, A = i;
    return n = i = void 0, u = y, a = e.apply(A, $), a;
  }
  function h(y) {
    return u = y, o = setTimeout(w, t), c ? d(y) : a;
  }
  function p(y) {
    var $ = y - l, A = y - u, q = t - $;
    return f ? Zu(q, s - A) : q;
  }
  function g(y) {
    var $ = y - l, A = y - u;
    return l === void 0 || $ >= t || $ < 0 || f && A >= s;
  }
  function w() {
    var y = mr();
    if (g(y))
      return T(y);
    o = setTimeout(w, p(y));
  }
  function T(y) {
    return o = void 0, m && n ? d(y) : (n = i = void 0, a);
  }
  function _() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function S() {
    return o === void 0 ? a : T(mr());
  }
  function O() {
    var y = mr(), $ = g(y);
    if (n = arguments, i = this, l = y, $) {
      if (o === void 0)
        return h(l);
      if (f)
        return clearTimeout(o), o = setTimeout(w, t), d(l);
    }
    return o === void 0 && (o = setTimeout(w, t)), a;
  }
  return O.cancel = _, O.flush = S, O;
}
const ec = {
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
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
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
  emits: ["success", "error"],
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
    this.debounceFunction = er(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = !0;
      const e = {};
      this.acceptHeader && (e.Accept = this.acceptHeader);
      const t = {
        url: this.url,
        method: this.method,
        headers: { ...e, ...this.headers }
      };
      Object.keys(this.request).length > 0 && (t.data = this.request), ae(t).then((r) => {
        this.response = r.data, this.processing = !1, this.$emit("success", r.data);
      }).catch(() => {
        this.processing = !1, this.$emit("error");
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
}, tc = {
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
      Dialog: en,
      DialogPanel: tn,
      isActivated: this.isActivated
    });
  }
}, ns = {
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
      r.value = (s) => {
        n.value.children[0].contains(s.target) || t.ignoreInnerTargets && n.value.contains(s.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (s) => {
        t.opened && s.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), Ls(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (s, a) => (j(), ye("div", {
      ref_key: "root",
      ref: n
    }, [
      J(s.$slots, "default")
    ], 512));
  }
};
function Z(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ge(e) {
  var t = Z(e).Element;
  return e instanceof t || e instanceof Element;
}
function Q(e) {
  var t = Z(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function an(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var We = Math.max, Ht = Math.min, it = Math.round;
function xr() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function is() {
  return !/^((?!chrome|android).)*safari/i.test(xr());
}
function st(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), i = 1, s = 1;
  t && Q(e) && (i = e.offsetWidth > 0 && it(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && it(n.height) / e.offsetHeight || 1);
  var a = Ge(e) ? Z(e) : window, o = a.visualViewport, l = !is() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / s, f = n.width / i, m = n.height / s;
  return {
    width: f,
    height: m,
    top: c,
    right: u + f,
    bottom: c + m,
    left: u,
    x: u,
    y: c
  };
}
function on(e) {
  var t = Z(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function rc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nc(e) {
  return e === Z(e) || !Q(e) ? on(e) : rc(e);
}
function fe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function De(e) {
  return ((Ge(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ln(e) {
  return st(De(e)).left + on(e).scrollLeft;
}
function se(e) {
  return Z(e).getComputedStyle(e);
}
function un(e) {
  var t = se(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function ic(e) {
  var t = e.getBoundingClientRect(), r = it(t.width) / e.offsetWidth || 1, n = it(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function sc(e, t, r) {
  r === void 0 && (r = !1);
  var n = Q(t), i = Q(t) && ic(t), s = De(t), a = st(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((fe(t) !== "body" || un(s)) && (o = nc(t)), Q(t) ? (l = st(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = ln(s))), {
    x: a.left + o.scrollLeft - l.x,
    y: a.top + o.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ss(e) {
  var t = st(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function tr(e) {
  return fe(e) === "html" ? e : e.assignedSlot || e.parentNode || (an(e) ? e.host : null) || De(e);
}
function as(e) {
  return ["html", "body", "#document"].indexOf(fe(e)) >= 0 ? e.ownerDocument.body : Q(e) && un(e) ? e : as(tr(e));
}
function St(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = as(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Z(n), a = i ? [s].concat(s.visualViewport || [], un(n) ? n : []) : n, o = t.concat(a);
  return i ? o : o.concat(St(tr(a)));
}
function ac(e) {
  return ["table", "td", "th"].indexOf(fe(e)) >= 0;
}
function jn(e) {
  return !Q(e) || se(e).position === "fixed" ? null : e.offsetParent;
}
function oc(e) {
  var t = /firefox/i.test(xr()), r = /Trident/i.test(xr());
  if (r && Q(e)) {
    var n = se(e);
    if (n.position === "fixed")
      return null;
  }
  var i = tr(e);
  for (an(i) && (i = i.host); Q(i) && ["html", "body"].indexOf(fe(i)) < 0; ) {
    var s = se(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function rr(e) {
  for (var t = Z(e), r = jn(e); r && ac(r) && se(r).position === "static"; )
    r = jn(r);
  return r && (fe(r) === "html" || fe(r) === "body" && se(r).position === "static") ? t : r || oc(e) || t;
}
var ie = "top", pe = "bottom", Le = "right", me = "left", nr = "auto", ir = [ie, pe, Le, me], at = "start", Et = "end", lc = "clippingParents", os = "viewport", gt = "popper", uc = "reference", Rn = /* @__PURE__ */ ir.reduce(function(e, t) {
  return e.concat([t + "-" + at, t + "-" + Et]);
}, []), cc = /* @__PURE__ */ [].concat(ir, [nr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + at, t + "-" + Et]);
}, []), dc = "beforeRead", fc = "read", pc = "afterRead", hc = "beforeMain", mc = "main", vc = "afterMain", gc = "beforeWrite", yc = "write", bc = "afterWrite", _r = [dc, fc, pc, hc, mc, vc, gc, yc, bc];
function wc(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || i(s);
  }), n;
}
function Sc(e) {
  var t = wc(e);
  return _r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Oc(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function _e(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, s) {
    return i.replace(/%s/, s);
  }, e);
}
var Ne = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $c = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Mn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ec(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Mn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(_e(Ne, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(_e(Ne, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          _r.indexOf(t.phase) < 0 && console.error(_e(Ne, t.name, '"phase"', "either " + _r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(_e(Ne, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(_e(Ne, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(_e(Ne, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(_e(Ne, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Mn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(_e($c, String(t.name), n, n));
      });
    });
  });
}
function Tc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function ve(e) {
  return e.split("-")[0];
}
function xc(e) {
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
function _c(e, t) {
  var r = Z(e), n = De(e), i = r.visualViewport, s = n.clientWidth, a = n.clientHeight, o = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = is();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: o + ln(e),
    y: l
  };
}
function Ic(e) {
  var t, r = De(e), n = on(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = We(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = We(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + ln(e), l = -n.scrollTop;
  return se(i || r).direction === "rtl" && (o += We(r.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: o,
    y: l
  };
}
function Ac(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && an(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ir(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pc(e, t) {
  var r = st(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Nn(e, t, r) {
  return t === os ? Ir(_c(e, r)) : Ge(t) ? Pc(t, r) : Ir(Ic(De(e)));
}
function qc(e) {
  var t = St(tr(e)), r = ["absolute", "fixed"].indexOf(se(e).position) >= 0, n = r && Q(e) ? rr(e) : e;
  return Ge(n) ? t.filter(function(i) {
    return Ge(i) && Ac(i, n) && fe(i) !== "body";
  }) : [];
}
function Cc(e, t, r, n) {
  var i = t === "clippingParents" ? qc(e) : [].concat(t), s = [].concat(i, [r]), a = s[0], o = s.reduce(function(l, u) {
    var c = Nn(e, u, n);
    return l.top = We(c.top, l.top), l.right = Ht(c.right, l.right), l.bottom = Ht(c.bottom, l.bottom), l.left = We(c.left, l.left), l;
  }, Nn(e, a, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function ot(e) {
  return e.split("-")[1];
}
function ls(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function us(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? ve(n) : null, s = n ? ot(n) : null, a = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case ie:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case pe:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Le:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case me:
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
  var u = i ? ls(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (s) {
      case at:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case Et:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function cs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Fc(e) {
  return Object.assign({}, cs(), e);
}
function Lc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function cn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, s = r.strategy, a = s === void 0 ? e.strategy : s, o = r.boundary, l = o === void 0 ? lc : o, u = r.rootBoundary, c = u === void 0 ? os : u, f = r.elementContext, m = f === void 0 ? gt : f, d = r.altBoundary, h = d === void 0 ? !1 : d, p = r.padding, g = p === void 0 ? 0 : p, w = Fc(typeof g != "number" ? g : Lc(g, ir)), T = m === gt ? uc : gt, _ = e.rects.popper, S = e.elements[h ? T : m], O = Cc(Ge(S) ? S : S.contextElement || De(e.elements.popper), l, c, a), y = st(e.elements.reference), $ = us({
    reference: y,
    element: _,
    strategy: "absolute",
    placement: i
  }), A = Ir(Object.assign({}, _, $)), q = m === gt ? A : y, k = {
    top: O.top - q.top + w.top,
    bottom: q.bottom - O.bottom + w.bottom,
    left: O.left - q.left + w.left,
    right: q.right - O.right + w.right
  }, I = e.modifiersData.offset;
  if (m === gt && I) {
    var x = I[i];
    Object.keys(k).forEach(function(E) {
      var B = [Le, pe].indexOf(E) >= 0 ? 1 : -1, C = [ie, pe].indexOf(E) >= 0 ? "y" : "x";
      k[E] += x[C] * B;
    });
  }
  return k;
}
var Vn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", kc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Un() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, s = i === void 0 ? Hn : i;
  return function(o, l, u) {
    u === void 0 && (u = s);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hn, s),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], m = !1, d = {
      state: c,
      setOptions: function(w) {
        var T = typeof w == "function" ? w(c.options) : w;
        p(), c.options = Object.assign({}, s, c.options, T), c.scrollParents = {
          reference: Ge(o) ? St(o) : o.contextElement ? St(o.contextElement) : [],
          popper: St(l)
        };
        var _ = Sc(xc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = _.filter(function(I) {
          return I.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Tc([].concat(_, c.options.modifiers), function(I) {
            var x = I.name;
            return x;
          });
          if (Ec(S), ve(c.options.placement) === nr) {
            var O = c.orderedModifiers.find(function(I) {
              var x = I.name;
              return x === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var y = se(l), $ = y.marginTop, A = y.marginRight, q = y.marginBottom, k = y.marginLeft;
          [$, A, q, k].some(function(I) {
            return parseFloat(I);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), d.update();
      },
      forceUpdate: function() {
        if (!m) {
          var w = c.elements, T = w.reference, _ = w.popper;
          if (!Un(T, _)) {
            process.env.NODE_ENV !== "production" && console.error(Vn);
            return;
          }
          c.rects = {
            reference: sc(T, rr(_), c.options.strategy === "fixed"),
            popper: ss(_)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
            return c.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var S = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(kc);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var y = c.orderedModifiers[O], $ = y.fn, A = y.options, q = A === void 0 ? {} : A, k = y.name;
            typeof $ == "function" && (c = $({
              state: c,
              options: q,
              name: k,
              instance: d
            }) || c);
          }
        }
      },
      update: Oc(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        p(), m = !0;
      }
    };
    if (!Un(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Vn), d;
    d.setOptions(u).then(function(g) {
      !m && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      c.orderedModifiers.forEach(function(g) {
        var w = g.name, T = g.options, _ = T === void 0 ? {} : T, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: c,
            name: w,
            instance: d,
            options: _
          }), y = function() {
          };
          f.push(O || y);
        }
      });
    }
    function p() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return d;
  };
}
var Lt = {
  passive: !0
};
function Bc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, s = i === void 0 ? !0 : i, a = n.resize, o = a === void 0 ? !0 : a, l = Z(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Lt);
  }), o && l.addEventListener("resize", r.update, Lt), function() {
    s && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Lt);
    }), o && l.removeEventListener("resize", r.update, Lt);
  };
}
const jc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Bc,
  data: {}
};
function Rc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = us({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Rc,
  data: {}
};
var Nc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: it(t * i) / i || 0,
    y: it(r * i) / i || 0
  };
}
function Wn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, m = a.x, d = m === void 0 ? 0 : m, h = a.y, p = h === void 0 ? 0 : h, g = typeof c == "function" ? c({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  d = g.x, p = g.y;
  var w = a.hasOwnProperty("x"), T = a.hasOwnProperty("y"), _ = me, S = ie, O = window;
  if (u) {
    var y = rr(r), $ = "clientHeight", A = "clientWidth";
    if (y === Z(r) && (y = De(r), se(y).position !== "static" && o === "absolute" && ($ = "scrollHeight", A = "scrollWidth")), y = y, i === ie || (i === me || i === Le) && s === Et) {
      S = pe;
      var q = f && y === O && O.visualViewport ? O.visualViewport.height : y[$];
      p -= q - n.height, p *= l ? 1 : -1;
    }
    if (i === me || (i === ie || i === pe) && s === Et) {
      _ = Le;
      var k = f && y === O && O.visualViewport ? O.visualViewport.width : y[A];
      d -= k - n.width, d *= l ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: o
  }, u && Nc), x = c === !0 ? Vc({
    x: d,
    y: p
  }) : {
    x: d,
    y: p
  };
  if (d = x.x, p = x.y, l) {
    var E;
    return Object.assign({}, I, (E = {}, E[S] = T ? "0" : "", E[_] = w ? "0" : "", E.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", E));
  }
  return Object.assign({}, I, (t = {}, t[S] = T ? p + "px" : "", t[_] = w ? d + "px" : "", t.transform = "", t));
}
function Hc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, s = r.adaptive, a = s === void 0 ? !0 : s, o = r.roundOffsets, l = o === void 0 ? !0 : o;
  if (process.env.NODE_ENV !== "production") {
    var u = se(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ve(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Uc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Hc,
  data: {}
};
function Wc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, s = t.elements[r];
    !Q(s) || !fe(s) || (Object.assign(s.style, n), Object.keys(i).forEach(function(a) {
      var o = i[a];
      o === !1 ? s.removeAttribute(a) : s.setAttribute(a, o === !0 ? "" : o);
    }));
  });
}
function zc(e) {
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
      var i = t.elements[n], s = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Q(i) || !fe(i) || (Object.assign(i.style, o), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Gc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Wc,
  effect: zc,
  requires: ["computeStyles"]
};
var Xc = [jc, Mc, Uc, Gc], Kc = /* @__PURE__ */ Dc({
  defaultModifiers: Xc
});
function Yc(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e, t, r) {
  return We(e, Ht(t, r));
}
function Qc(e, t, r) {
  var n = Bt(e, t, r);
  return n > r ? r : n;
}
function Jc(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, f = r.padding, m = r.tether, d = m === void 0 ? !0 : m, h = r.tetherOffset, p = h === void 0 ? 0 : h, g = cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), w = ve(t.placement), T = ot(t.placement), _ = !T, S = ls(w), O = Yc(S), y = t.modifiersData.popperOffsets, $ = t.rects.reference, A = t.rects.popper, q = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, k = typeof q == "number" ? {
    mainAxis: q,
    altAxis: q
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, q), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = {
    x: 0,
    y: 0
  };
  if (!!y) {
    if (s) {
      var E, B = S === "y" ? ie : me, C = S === "y" ? pe : Le, F = S === "y" ? "height" : "width", V = y[S], ft = V + g[B], $e = V - g[C], pt = d ? -A[F] / 2 : 0, At = T === at ? $[F] : A[F], Ee = T === at ? -A[F] : -$[F], Je = t.elements.arrow, Te = d && Je ? ss(Je) : {
        width: 0,
        height: 0
      }, xe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cs(), ht = xe[B], Pt = xe[C], je = Bt(0, $[F], Te[F]), ar = _ ? $[F] / 2 - pt - je - ht - k.mainAxis : At - je - ht - k.mainAxis, Os = _ ? -$[F] / 2 + pt + je + Pt + k.mainAxis : Ee + je + Pt + k.mainAxis, or = t.elements.arrow && rr(t.elements.arrow), $s = or ? S === "y" ? or.clientTop || 0 : or.clientLeft || 0 : 0, hn = (E = I == null ? void 0 : I[S]) != null ? E : 0, Es = V + ar - hn - $s, Ts = V + Os - hn, mn = Bt(d ? Ht(ft, Es) : ft, V, d ? We($e, Ts) : $e);
      y[S] = mn, x[S] = mn - V;
    }
    if (o) {
      var vn, xs = S === "x" ? ie : me, _s = S === "x" ? pe : Le, Re = y[O], qt = O === "y" ? "height" : "width", gn = Re + g[xs], yn = Re - g[_s], lr = [ie, me].indexOf(w) !== -1, bn = (vn = I == null ? void 0 : I[O]) != null ? vn : 0, wn = lr ? gn : Re - $[qt] - A[qt] - bn + k.altAxis, Sn = lr ? Re + $[qt] + A[qt] - bn - k.altAxis : yn, On = d && lr ? Qc(wn, Re, Sn) : Bt(d ? wn : gn, Re, d ? Sn : yn);
      y[O] = On, x[O] = On - Re;
    }
    t.modifiersData[n] = x;
  }
}
const Zc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jc,
  requiresIfExists: ["offset"]
};
var ed = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ed[t];
  });
}
var td = {
  start: "end",
  end: "start"
};
function zn(e) {
  return e.replace(/start|end/g, function(t) {
    return td[t];
  });
}
function rd(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, s = r.rootBoundary, a = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? cc : l, c = ot(n), f = c ? o ? Rn : Rn.filter(function(h) {
    return ot(h) === c;
  }) : ir, m = f.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = m.reduce(function(h, p) {
    return h[p] = cn(e, {
      placement: p,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[ve(p)], h;
  }, {});
  return Object.keys(d).sort(function(h, p) {
    return d[h] - d[p];
  });
}
function nd(e) {
  if (ve(e) === nr)
    return [];
  var t = jt(e);
  return [zn(e), t, zn(t)];
}
function id(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, s = i === void 0 ? !0 : i, a = r.altAxis, o = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, m = r.altBoundary, d = r.flipVariations, h = d === void 0 ? !0 : d, p = r.allowedAutoPlacements, g = t.options.placement, w = ve(g), T = w === g, _ = l || (T || !h ? [jt(g)] : nd(g)), S = [g].concat(_).reduce(function(Te, xe) {
      return Te.concat(ve(xe) === nr ? rd(t, {
        placement: xe,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: p
      }) : xe);
    }, []), O = t.rects.reference, y = t.rects.popper, $ = /* @__PURE__ */ new Map(), A = !0, q = S[0], k = 0; k < S.length; k++) {
      var I = S[k], x = ve(I), E = ot(I) === at, B = [ie, pe].indexOf(x) >= 0, C = B ? "width" : "height", F = cn(t, {
        placement: I,
        boundary: c,
        rootBoundary: f,
        altBoundary: m,
        padding: u
      }), V = B ? E ? Le : me : E ? pe : ie;
      O[C] > y[C] && (V = jt(V));
      var ft = jt(V), $e = [];
      if (s && $e.push(F[x] <= 0), o && $e.push(F[V] <= 0, F[ft] <= 0), $e.every(function(Te) {
        return Te;
      })) {
        q = I, A = !1;
        break;
      }
      $.set(I, $e);
    }
    if (A)
      for (var pt = h ? 3 : 1, At = function(xe) {
        var ht = S.find(function(Pt) {
          var je = $.get(Pt);
          if (je)
            return je.slice(0, xe).every(function(ar) {
              return ar;
            });
        });
        if (ht)
          return q = ht, "break";
      }, Ee = pt; Ee > 0; Ee--) {
        var Je = At(Ee);
        if (Je === "break")
          break;
      }
    t.placement !== q && (t.modifiersData[n]._skip = !0, t.placement = q, t.reset = !0);
  }
}
const sd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: id,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}, Be = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ad = {
  components: {
    OnClickOutside: ns
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
    this.teleport && await qe();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = Kc(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [sd, Zc],
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
}, od = { ref: "tooltip" };
function ld(e, t, r, n, i, s) {
  const a = Dr("OnClickOutside");
  return j(), z(a, {
    style: Rt(s.wrapperStyle),
    do: s.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: ci(() => [
      gr("div", {
        ref: "button",
        style: Rt(s.buttonStyle)
      }, [
        J(e.$slots, "button", {
          toggle: s.toggle,
          disabled: r.disabled
        })
      ], 4),
      gr("div", od, [
        J(e.$slots, "default", {
          hide: s.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const ud = /* @__PURE__ */ Be(ad, [["render", ld]]), cd = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  setup(e) {
    const t = U("$splade") || {}, r = U("$spladeOptions") || {};
    return (n, i) => H(t).isSsr ? (j(), z(oe, {
      key: e.keepAliveKey,
      html: H(t).htmlForDynamicComponent(e.name),
      passthrough: e.passthrough
    }, null, 8, ["html", "passthrough"])) : (j(), z(li, {
      key: 0,
      max: H(r).max_keep_alive
    }, [
      (j(), z(oe, {
        key: e.keepAliveKey,
        html: H(t).htmlForDynamicComponent(e.name),
        passthrough: e.passthrough
      }, null, 8, ["html", "passthrough"]))
    ], 1032, ["max"]));
  }
};
function ds(e) {
  return e && e.length ? e[0] : void 0;
}
const dd = {
  inject: ["stack"],
  computed: {
    values() {
      return v.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return Y(e.values, t);
      },
      first(t) {
        return ds(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, fd = {
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
  emits: ["subscribed", "event"],
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
      this.subscribed = !0, this.$emit("subscribed");
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        this.$emit("event", { name: e, data: r });
        const n = "splade.redirect", i = "splade.refresh", s = "splade.toast";
        let a = null, o = !1, l = [];
        re(r, (u) => {
          !G(u) || (n in u && (a = u[n]), i in u && (o = u[i]), s in u && l.push(u));
        }), a ? v.visit(a) : o ? v.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          v.pushToast(u);
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
};
function pd() {
  this.__data__ = new Se(), this.size = 0;
}
function hd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function md(e) {
  return this.__data__.get(e);
}
function vd(e) {
  return this.__data__.has(e);
}
var gd = 200;
function yd(e, t) {
  var r = this.__data__;
  if (r instanceof Se) {
    var n = r.__data__;
    if (!$t || n.length < gd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ge(e) {
  var t = this.__data__ = new Se(e);
  this.size = t.size;
}
ge.prototype.clear = pd;
ge.prototype.delete = hd;
ge.prototype.get = md;
ge.prototype.has = vd;
ge.prototype.set = yd;
var bd = "__lodash_hash_undefined__";
function wd(e) {
  return this.__data__.set(e, bd), this;
}
function Sd(e) {
  return this.__data__.has(e);
}
function Ut(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Oe(); ++t < r; )
    this.add(e[t]);
}
Ut.prototype.add = Ut.prototype.push = wd;
Ut.prototype.has = Sd;
function Od(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function $d(e, t) {
  return e.has(t);
}
var Ed = 1, Td = 2;
function fs(e, t, r, n, i, s) {
  var a = r & Ed, o = e.length, l = t.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(e), c = s.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, m = !0, d = r & Td ? new Ut() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < o; ) {
    var h = e[f], p = t[f];
    if (n)
      var g = a ? n(p, h, f, t, e, s) : n(h, p, f, e, t, s);
    if (g !== void 0) {
      if (g)
        continue;
      m = !1;
      break;
    }
    if (d) {
      if (!Od(t, function(w, T) {
        if (!$d(d, T) && (h === w || i(h, w, r, n, s)))
          return d.push(T);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === p || i(h, p, r, n, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), m;
}
var xd = he.Uint8Array;
const Gn = xd;
function _d(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Id(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Ad = 1, Pd = 2, qd = "[object Boolean]", Cd = "[object Date]", Fd = "[object Error]", Ld = "[object Map]", kd = "[object Number]", Dd = "[object RegExp]", Bd = "[object Set]", jd = "[object String]", Rd = "[object Symbol]", Md = "[object ArrayBuffer]", Nd = "[object DataView]", Xn = Ce ? Ce.prototype : void 0, vr = Xn ? Xn.valueOf : void 0;
function Vd(e, t, r, n, i, s, a) {
  switch (r) {
    case Nd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Md:
      return !(e.byteLength != t.byteLength || !s(new Gn(e), new Gn(t)));
    case qd:
    case Cd:
    case kd:
      return Xr(+e, +t);
    case Fd:
      return e.name == t.name && e.message == t.message;
    case Dd:
    case jd:
      return e == t + "";
    case Ld:
      var o = _d;
    case Bd:
      var l = n & Ad;
      if (o || (o = Id), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      n |= Pd, a.set(e, t);
      var c = fs(o(e), o(t), n, i, s, a);
      return a.delete(e), c;
    case Rd:
      if (vr)
        return vr.call(e) == vr.call(t);
  }
  return !1;
}
function Hd(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function Ud(e, t, r) {
  var n = t(e);
  return R(e) ? n : Hd(n, r(e));
}
function ps(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[i++] = a);
  }
  return s;
}
function Wd() {
  return [];
}
var zd = Object.prototype, Gd = zd.propertyIsEnumerable, Kn = Object.getOwnPropertySymbols, Xd = Kn ? function(e) {
  return e == null ? [] : (e = Object(e), ps(Kn(e), function(t) {
    return Gd.call(e, t);
  }));
} : Wd;
const Kd = Xd;
function Yn(e) {
  return Ud(e, zt, Kd);
}
var Yd = 1, Qd = Object.prototype, Jd = Qd.hasOwnProperty;
function Zd(e, t, r, n, i, s) {
  var a = r & Yd, o = Yn(e), l = o.length, u = Yn(t), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var m = o[f];
    if (!(a ? m in t : Jd.call(t, m)))
      return !1;
  }
  var d = s.get(e), h = s.get(t);
  if (d && h)
    return d == t && h == e;
  var p = !0;
  s.set(e, t), s.set(t, e);
  for (var g = a; ++f < l; ) {
    m = o[f];
    var w = e[m], T = t[m];
    if (n)
      var _ = a ? n(T, w, m, t, e, s) : n(w, T, m, e, t, s);
    if (!(_ === void 0 ? w === T || i(w, T, r, n, s) : _)) {
      p = !1;
      break;
    }
    g || (g = m == "constructor");
  }
  if (p && !g) {
    var S = e.constructor, O = t.constructor;
    S != O && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof O == "function" && O instanceof O) && (p = !1);
  }
  return s.delete(e), s.delete(t), p;
}
var ef = Ye(he, "DataView");
const Ar = ef;
var tf = Ye(he, "Promise");
const Pr = tf;
var rf = Ye(he, "Set");
const qr = rf;
var nf = Ye(he, "WeakMap");
const Cr = nf;
var Qn = "[object Map]", sf = "[object Object]", Jn = "[object Promise]", Zn = "[object Set]", ei = "[object WeakMap]", ti = "[object DataView]", af = Ke(Ar), of = Ke($t), lf = Ke(Pr), uf = Ke(qr), cf = Ke(Cr), Ve = ke;
(Ar && Ve(new Ar(new ArrayBuffer(1))) != ti || $t && Ve(new $t()) != Qn || Pr && Ve(Pr.resolve()) != Jn || qr && Ve(new qr()) != Zn || Cr && Ve(new Cr()) != ei) && (Ve = function(e) {
  var t = ke(e), r = t == sf ? e.constructor : void 0, n = r ? Ke(r) : "";
  if (n)
    switch (n) {
      case af:
        return ti;
      case of:
        return Qn;
      case lf:
        return Jn;
      case uf:
        return Zn;
      case cf:
        return ei;
    }
  return t;
});
const ri = Ve;
var df = 1, ni = "[object Arguments]", ii = "[object Array]", kt = "[object Object]", ff = Object.prototype, si = ff.hasOwnProperty;
function pf(e, t, r, n, i, s) {
  var a = R(e), o = R(t), l = a ? ii : ri(e), u = o ? ii : ri(t);
  l = l == ni ? kt : l, u = u == ni ? kt : u;
  var c = l == kt, f = u == kt, m = l == u;
  if (m && yr(e)) {
    if (!yr(t))
      return !1;
    a = !0, c = !1;
  }
  if (m && !c)
    return s || (s = new ge()), a || gi(e) ? fs(e, t, r, n, i, s) : Vd(e, t, l, r, n, i, s);
  if (!(r & df)) {
    var d = c && si.call(e, "__wrapped__"), h = f && si.call(t, "__wrapped__");
    if (d || h) {
      var p = d ? e.value() : e, g = h ? t.value() : t;
      return s || (s = new ge()), i(p, g, r, n, s);
    }
  }
  return m ? (s || (s = new ge()), Zd(e, t, r, n, i, s)) : !1;
}
function sr(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Fe(e) && !Fe(t) ? e !== e && t !== t : pf(e, t, r, n, sr, i);
}
var hf = 1, mf = 2;
function vf(e, t, r, n) {
  var i = r.length, s = i, a = !n;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (a && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (a && o[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var f = new ge();
      if (n)
        var m = n(u, c, l, e, t, f);
      if (!(m === void 0 ? sr(c, u, hf | mf, n, f) : m))
        return !1;
    }
  }
  return !0;
}
function hs(e) {
  return e === e && !G(e);
}
function gf(e) {
  for (var t = zt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, hs(i)];
  }
  return t;
}
function ms(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function yf(e) {
  var t = gf(e);
  return t.length == 1 && t[0][2] ? ms(t[0][0], t[0][1]) : function(r) {
    return r === e || vf(r, e, t);
  };
}
function bf(e, t) {
  return e != null && t in Object(e);
}
function wf(e, t) {
  return e != null && Bi(e, t, bf);
}
var Sf = 1, Of = 2;
function $f(e, t) {
  return Gr(e) && hs(t) ? ms(Tt(e), t) : function(r) {
    var n = Ue(r, e);
    return n === void 0 && n === t ? wf(r, e) : sr(t, n, Sf | Of);
  };
}
function Ef(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Tf(e) {
  return function(t) {
    return ts(t, e);
  };
}
function xf(e) {
  return Gr(e) ? Ef(Tt(e)) : Tf(e);
}
function It(e) {
  return typeof e == "function" ? e : e == null ? bi : typeof e == "object" ? R(e) ? $f(e[0], e[1]) : yf(e) : xf(e);
}
function _f(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Wt(t)) {
      var s = It(r);
      t = zt(t), r = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = e(t, r, n);
    return a > -1 ? i[s ? t[a] : a] : void 0;
  };
}
function If(e, t, r, n) {
  for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var ai = 1 / 0, Af = 17976931348623157e292;
function Pf(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Tr(e), e === ai || e === -ai) {
    var t = e < 0 ? -1 : 1;
    return t * Af;
  }
  return e === e ? e : 0;
}
function dn(e) {
  var t = Pf(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var qf = Math.max;
function Cf(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : dn(r);
  return i < 0 && (i = qf(n + i, 0)), If(e, It(t), i);
}
var Ff = _f(Cf);
const fn = Ff, Lf = {
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
    },
    filepond: {
      type: [Boolean, Object],
      required: !1,
      default: !0
    },
    jsFilepondOptions: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    preview: {
      type: Boolean,
      required: !1,
      default: !1
    },
    server: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    accept: {
      type: Array,
      required: !1,
      default: () => []
    },
    minFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    maxFileSize: {
      type: [Boolean, Number, String],
      required: !1,
      default: !1
    },
    minImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageWidth: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageHeight: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    minImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    maxImageResolution: {
      type: [Boolean, Number],
      required: !1,
      default: !1
    },
    existingSuffix: {
      type: String,
      required: !1,
      default: "_existing"
    },
    orderSuffix: {
      type: String,
      required: !1,
      default: "_order"
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["start-uploading", "stop-uploading"],
  data() {
    return {
      inputElement: null,
      filepondInstance: null,
      filenames: [],
      uploadedFiles: [],
      hadExistingFiles: !1
    };
  },
  computed: {
    existingField() {
      return this.field + this.existingSuffix;
    },
    orderField() {
      return this.field + this.orderSuffix;
    },
    handlesExistingFiles() {
      return this.existingSuffix && this.hadExistingFiles;
    }
  },
  mounted() {
    this.inputElement = this.$refs.file.querySelector('input[type="file"]');
    const e = this.form[this.field];
    this.hadExistingFiles = this.multiple && e.length > 0 || !this.multiple && e, this.form.$put(this.field, this.multiple ? [] : null), this.filepond && (this.setExisting(e), this.initFilepond(e || []).then(() => {
      this.form.$registerFilepond(this.field, this.addFileToFilepond, this.addFilesToFilepond);
    }));
  },
  methods: {
    extractMetadataFromExistingFile(e) {
      return e ? te(e) ? e : R(e) ? e.map(this.extractMetadataFromExistingFile) : G(e) ? e.options.metadata.metadata : null : null;
    },
    setExisting(e) {
      !this.handlesExistingFiles || (this.form.$put(this.existingField, this.extractMetadataFromExistingFile(e)), this.setOrder());
    },
    setOrder() {
      if (!this.multiple || !this.handlesExistingFiles || !this.filepondInstance)
        return;
      const t = this.filepondInstance.getFiles().filter((n) => !n.getMetadata("identifier")), r = this.filepondInstance.getFiles().map((n) => {
        const i = n.getMetadata("identifier");
        return i ? "existing-file-" + i : "new-file-" + t.indexOf(n);
      });
      this.form.$put(this.orderField, r);
    },
    addFileToFilepond(e) {
      e && this.filepondInstance.addFile(e);
    },
    addFilesToFilepond(e) {
      e.forEach((t) => this.addFileToFilepond(t));
    },
    loadFilepondPlugins() {
      const e = [];
      return this.preview && (e.push(import("filepond-plugin-image-exif-orientation")), e.push(import("filepond-plugin-image-preview"))), this.accept.length > 0 && e.push(import("filepond-plugin-file-validate-type")), (this.minFileSize || this.maxFileSize) && e.push(import("filepond-plugin-file-validate-size")), (this.minImageWidth || this.maxImageWidth || this.minImageHeight || this.maxImageHeight || this.minImageResolution || this.maxImageResolution) && e.push(import("filepond-plugin-image-validate-size")), Promise.all(e);
    },
    initFilepond(e) {
      const t = this.inputElement.getAttribute("name"), r = this;
      return new Promise((n) => {
        import("filepond").then((i) => {
          const s = Object.assign({}, r.filepond, r.jsFilepondOptions, {
            oninit() {
              const a = setInterval(() => {
                if (r.filepondInstance.status <= 2)
                  clearInterval(a);
                else
                  return;
                r.setOrder();
                const o = r.filepondInstance.element.querySelector('input[type="file"]');
                o.hasAttribute("name") || o.setAttribute("name", t), r.dusk && r.filepondInstance.element.setAttribute("dusk", r.dusk), o.setAttribute("data-server", !!r.server), r.multiple && r.filepondInstance.element.addEventListener("moveFile", function(l) {
                  r.filepondInstance.moveFile(l.detail[0], l.detail[1]), r.setOrder();
                }), n();
              }, 15);
            },
            onaddfile(a, o) {
              a || o.origin !== i.FileOrigin.LOCAL && (r.server ? r.$emit("start-uploading", [o.id]) : r.addFiles([o.file]), r.setOrder());
            },
            onremovefile(a, o) {
              a || (r.handlesExistingFiles && (r.multiple ? r.setExisting(r.form[r.existingField].filter((l) => o.getMetadata("metadata") !== l)) : r.setExisting(null)), r.removeFile(o.file));
            },
            onprocessfile(a, o) {
              a || (r.uploadedFiles.push({
                file: o.file,
                id: o.serverId
              }), r.addFiles([o.serverId]), r.$emit("stop-uploading", [o.id]));
            },
            onreorderfiles() {
              r.setOrder();
            }
          });
          this.hadExistingFiles && (s.files = this.multiple ? e : [e]), this.accept.length > 0 && (s.acceptedFileTypes = this.accept), this.minFileSize && (s.minFileSize = this.minFileSize), this.maxFileSize && (s.maxFileSize = this.maxFileSize), this.minImageWidth && (s.imageValidateSizeMinWidth = this.minImageWidth), this.maxImageWidth && (s.imageValidateSizeMaxWidth = this.maxImageWidth), this.minImageHeight && (s.imageValidateSizeMinHeight = this.minImageHeight), this.maxImageHeight && (s.imageValidateSizeMaxHeight = this.maxImageHeight), this.minImageResolution && (s.imageValidateSizeMinResolution = this.minImageResolution), this.maxImageResolution && (s.imageValidateSizeMaxResolution = this.maxImageResolution), s.server = {
            load: (a, o, l, u, c) => {
              const m = ae.CancelToken.source();
              return ae({
                url: a.preview_url,
                method: "GET",
                cancelToken: m.token,
                responseType: "blob"
              }).then((d) => {
                const h = new File([d.data], a.name, { type: a.type });
                o(h);
              }).catch(function(d) {
                axios.isCancel(d) || l(d);
              }), {
                abort: () => {
                  m.cancel(), c();
                }
              };
            }
          }, this.server && (s.server.process = (a, o, l, u, c, f, m) => {
            const d = new FormData();
            d.append("file", o, o.name);
            const p = ae.CancelToken.source();
            ae({
              url: r.server,
              method: "POST",
              data: d,
              cancelToken: p.token,
              onUploadProgress: (g) => {
                f(g.lengthComputable, g.loaded, g.total);
              }
            }).then((g) => {
              g.status >= 200 && g.status < 300 ? u(g.data) : c(g.statusText);
            }).catch(function(g) {
              var w;
              axios.isCancel(g) ? m() : c((w = g.response) == null ? void 0 : w.statusText);
            });
          }, s.server.revert = (a, o, l) => {
            ae({
              url: r.server,
              method: "POST",
              data: { _method: "DELETE", file: a }
            }).then(() => {
              o();
            }).catch(function(u) {
              var c;
              l((c = u.response) == null ? void 0 : c.statusText);
            });
          }), (s.itemInsertLocation === "before" || s.itemInsertLocation === "after") && (s.itemInsertLocationFreedom = !1), this.loadFilepondPlugins(i).then((a) => {
            a.length > 0 && i.registerPlugin(...a.map((o) => o.default)), this.filepondInstance = i.create(this.inputElement, s);
          });
        });
      });
    },
    removeFile(e) {
      this.server && (e = fn(this.uploadedFiles, (t) => t.file === e).serverId), this.form.$put(this.field, this.multiple ? this.form[this.field].filter((t) => t !== e) : null);
    },
    addFiles(e) {
      if (this.multiple) {
        const t = this.form[this.field];
        e.forEach((r) => {
          t.push(r);
        }), this.form.$put(this.field, t);
      } else
        this.form.$put(this.field, e[0]), this.setExisting(null);
      this.filepond || this.updateFilenames();
    },
    updateFilenames() {
      this.filenames = [];
      const e = this.form[this.field];
      this.multiple ? e.forEach((t) => {
        this.filenames.push(t.name);
      }) : e && this.filenames.push(e.name);
    },
    handleFileInput(e) {
      this.form.$put(this.field, this.multiple ? [] : null);
      const t = Object.values(e.target.files);
      this.addFiles(t);
    }
  }
}, kf = { ref: "file" };
function Df(e, t, r, n, i, s) {
  return j(), ye("div", kf, [
    J(e.$slots, "default", {
      handleFileInput: s.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const Bf = /* @__PURE__ */ Be(Lf, [["render", Df]]), jf = {
  inject: ["stack"],
  computed: {
    values() {
      return v.flashData(this.stack);
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
function pn(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && gs(t, vs(r, n), e[n]);
  return t;
}
function vs(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function gs(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => gs(e, vs(t, n.toString()), r[n]));
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
  pn(r, e, t);
}
var Rf = "[object Boolean]";
function ys(e) {
  return e === !0 || e === !1 || Fe(e) && ke(e) == Rf;
}
function bs(e, t) {
  var r = {};
  return t = It(t), Rr(e, function(n, i, s) {
    rs(r, i, t(n, i, s));
  }), r;
}
function ws(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function et(e, t, r) {
  return e = Yr(e), r = r == null ? 0 : ws(dn(r), 0, e.length), t = Jt(t), e.slice(r, r + t.length) == t;
}
const Mf = {
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
        return v.isSsr ? "" : location.href;
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
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
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
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
    },
    background: {
      type: Boolean,
      required: !1,
      default: !1
    },
    stay: {
      type: Boolean,
      require: !1,
      default: !1
    },
    restoreOnSuccess: {
      type: Boolean,
      required: !1,
      default: !1
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
    },
    escapeValidationMessages: {
      type: Boolean,
      required: !1,
      default: !0
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    },
    debounce: {
      type: Number,
      required: !1,
      default: 0
    },
    acceptHeader: {
      type: String,
      required: !1,
      default: "application/json"
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  emits: ["success", "error", "reset", "restored"],
  data() {
    return {
      isMounted: !1,
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: !1,
      processingInBackground: !1,
      wasSuccessful: !1,
      recentlySuccessful: !1,
      recentlySuccessfulTimeoutId: null,
      wasUnsuccessful: !1,
      recentlyUnsuccessful: !1,
      recentlyUnsuccessfulTimeoutId: null,
      formElement: null,
      elementsUploading: [],
      fileponds: {},
      debounceFunction: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    $uploading() {
      return this.elementsUploading.length > 0;
    },
    rawErrors() {
      return v.validationErrors(this.stack);
    },
    errors() {
      return bs(this.rawErrors, (e) => e.join(`
`));
    }
  },
  created() {
    this.debounceFunction = er(() => {
      this.request(this.background);
    }, this.debounce);
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((r) => {
      let n = "";
      const i = e.querySelector(`[name="${r}"]`);
      i ? n = i.type === "checkbox" ? !1 : "" : e.querySelector(`[name="${r}[]"]`) ? n = [] : (e.querySelector(`[name^="${r}."]`) || e.querySelector(`[name^="${r}["]`)) && (n = {}), this.$put(r, n);
    }), this.missingAttributes = [], this.submitOnChange === !0 ? this.$watch("values", () => {
      this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
    }, { deep: !0 }) : R(this.submitOnChange) && this.submitOnChange.forEach((r) => {
      this.$watch(`values.${r}`, () => {
        this.background && (this.processingInBackground = !0), this.$nextTick(() => this.debounce ? this.debounceFunction() : this.request(this.background));
      }, { deep: !0 });
    }), this.isMounted = !0;
    const t = this.formElement.querySelector("[autofocus]");
    t && this.focusAndScrollToElement(t);
  },
  methods: {
    $startUploading(e) {
      this.elementsUploading.push(e[0]);
    },
    $stopUploading(e) {
      this.elementsUploading = this.elementsUploading.filter((t) => t != e[0]);
    },
    hasError(e) {
      return e in this.errors;
    },
    $registerFilepond(e, t, r) {
      this.fileponds[e] = {
        addFile: t,
        addFiles: r
      };
    },
    $addFile(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFile(t);
    },
    $addFiles(e, t) {
      if (!this.fileponds[e])
        return console.log("Filepond instance not found");
      this.fileponds[e].addFiles(t);
    },
    $fileAsUrl(e) {
      const t = this.values[e];
      if (!t)
        return "";
      var r = URL.createObjectURL(t), n = new XMLHttpRequest();
      n.open("GET", r, !1), n.overrideMimeType("text/plain; charset=x-user-defined"), n.send(), URL.revokeObjectURL(r);
      for (var i = "", s = 0; s < n.responseText.length; s++)
        i += String.fromCharCode(n.responseText.charCodeAt(s) & 255);
      return "data:" + t.type + ";base64," + btoa(i);
    },
    $errorAttributes(e) {
      return {
        [this.escapeValidationMessages ? "textContent" : "innerHTML"]: this.errors[e]
      };
    },
    reset() {
      this.values = {}, this.$emit("reset");
    },
    restore() {
      this.values = Object.assign({}, { ...this.default }), this.$emit("restored");
    },
    $put(e, t) {
      return sn(this.values, e, t);
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
      if (!this.$uploading) {
        if (e) {
          const t = e.submitter;
          t && t.name && this.$put(t.name, t.value);
        }
        if (!this.confirm)
          return this.request();
        v.confirm(
          ys(this.confirm) ? "" : this.confirm,
          this.confirmText,
          this.confirmButton,
          this.cancelButton,
          !!this.requirePassword,
          this.requirePasswordOnce,
          !!this.confirmDanger
        ).then((t) => {
          if (!this.requirePassword) {
            this.request();
            return;
          }
          this.method.toUpperCase() !== "GET" && t && this.$put(
            te(this.requirePassword) && this.requirePassword ? this.requirePassword : "password",
            t
          ), this.request();
        }).catch(() => {
        });
      }
    },
    async request(e) {
      if (typeof e > "u" && (e = !1), this.$uploading)
        return;
      await this.$nextTick(), this.background ? this.processingInBackground = !0 : this.processing = !0, this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(this.recentlySuccessfulTimeoutId), this.wasUnsuccessful = !1, this.recentlyUnsuccessful = !1, clearTimeout(this.recentlyUnsuccessfulTimeoutId);
      const t = this.values instanceof FormData ? this.values : pn(this.values), r = {};
      this.acceptHeader && (r.Accept = this.acceptHeader), (this.stay || e) && (r["X-Splade-Prevent-Refresh"] = !0), this.preserveScroll && (r["X-Splade-Preserve-Scroll"] = !0);
      let n = this.method.toUpperCase();
      n !== "GET" && n !== "POST" && (t.append("_method", n), n = "POST");
      const i = (s) => {
        this.$emit("success", s), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = !1, this.processingInBackground = !1, this.wasSuccessful = !0, this.recentlySuccessful = !0, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      };
      if (this.action === "#")
        return i(Object.fromEntries(t));
      v.request(this.action, n, t, { ...r, ...this.headers }).then(i).catch(async (s) => {
        if (this.processing = !1, this.processingInBackground = !1, this.wasUnsuccessful = !0, this.recentlyUnsuccessful = !0, this.recentlyUnsuccessfulTimeoutId = setTimeout(() => this.recentlyUnsuccessful = !1, 2e3), this.$emit("error", s), !this.scrollOnError)
          return;
        await this.$nextTick();
        const a = fn(Object.keys(this.errors), (o) => this.formElement.querySelector(`[data-validation-key="${o}"]`));
        a && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${a}"]`)
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
              "$startUploading",
              "$stopUploading",
              "$uploading",
              "$errorAttributes",
              "$registerFilepond",
              "$addFile",
              "$addFiles",
              "$fileAsUrl",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "processingInBackground",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful",
              "wasUnsuccessful",
              "recentlyUnsuccessful"
            ].includes(r) || et(r, "__v_") ? e[r] : (!e.isMounted && !Y(e.values, r) && (e.missingAttributes.push(r), e.$put(r, "")), Ue(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, Nf = {
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
}, Vf = { ref: "input" };
function Hf(e, t, r, n, i, s) {
  return j(), ye("div", Vf, [
    J(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const Uf = /* @__PURE__ */ Be(Nf, [["render", Hf]]), Wf = {
  components: { Render: oe },
  props: {
    name: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: !1,
      default: !0
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
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
      this.html = null, v.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html, this.$emit("loaded");
      });
    }
  }
};
function zf(e, t, r, n, i, s) {
  const a = Dr("Render");
  return i.html ? (j(), z(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : r.show ? J(e.$slots, "default", { key: 1 }) : Lr("", !0);
}
const Gf = /* @__PURE__ */ Be(Wf, [["render", zf]]), Xf = ["href", "onClick"], Kf = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: !1,
      default: "#"
    },
    method: {
      type: String,
      required: !1,
      default: "GET"
    },
    data: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    headers: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    replace: {
      type: Boolean,
      required: !1,
      default: !1
    },
    confirmDanger: {
      type: [Boolean, String],
      required: !1,
      default: !1
    },
    confirm: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.confirmDanger
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
    requirePasswordOnce: {
      type: Boolean,
      required: !1,
      default: !1
    },
    requirePassword: {
      type: [Boolean, String],
      required: !1,
      default: (e) => e.requirePasswordOnce
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
    },
    keepModal: {
      type: Boolean,
      required: !1,
      default: !1
    },
    preserveScroll: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = U("stack"), n = b(null);
    function i() {
      if (n.value = null, !t.confirm)
        return s();
      v.confirm(
        ys(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton,
        !!t.requirePassword,
        t.requirePasswordOnce,
        !!t.confirmDanger
      ).then((a) => {
        if (!t.requirePassword) {
          s();
          return;
        }
        a && (n.value = a), s();
      }).catch(() => {
      });
    }
    function s() {
      if (t.away)
        return window.location = t.href;
      const o = r > 0 && t.keepModal;
      if (t.modal && !o)
        return v.modal(t.href);
      if (t.slideover && !o)
        return v.slideover(t.href);
      if (et(t.href, "#")) {
        if (v.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      let l = t.method.trim().toUpperCase();
      const u = {
        ...t.headers
      };
      if (o && (u["X-Splade-Modal"] = v.stackType(r), u["X-Splade-Modal-Target"] = r), t.preserveScroll && (u["X-Splade-Preserve-Scroll"] = !0), l === "GET")
        return t.replace ? v.replace(t.href, u) : v.visit(t.href, u);
      const c = t.data instanceof FormData ? t.data : pn(t.data);
      l !== "POST" && (c.append("_method", l), l = "POST"), n.value && (c.append(te(t.requirePassword) && t.requirePassword ? t.requirePassword : "password", n.value), n.value = null), v.request(t.href, l, c, u, t.replace);
    }
    return (a, o) => (j(), ye("a", {
      href: e.href,
      onClick: ks(i, ["prevent"])
    }, [
      J(a.$slots, "default")
    ], 8, Xf));
  }
}, Yf = {
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
    },
    position: {
      type: String,
      required: !1,
      default: (e) => e.type === "modal" ? "center" : "right"
    },
    name: {
      type: String,
      required: !1,
      default: null
    },
    animate: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["close"],
  data() {
    return {
      staticAnimate: !0,
      isOpen: !1
    };
  },
  mounted() {
    this.staticAnimate = this.animate, this.setIsOpen(!0);
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
      animate: this.staticAnimate,
      position: this.position,
      Dialog: en,
      DialogPanel: tn,
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, Qf = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: !0
    },
    html: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !1,
      default: "modal"
    },
    opened: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return v.registerPreloadedModal(t.name, t.html, t.type), t.opened && v.openPreloadedModal(t.name), () => {
    };
  }
}, Jf = {
  components: { Render: oe },
  props: {
    name: {
      type: String,
      required: !0
    },
    on: {
      type: Array,
      required: !0
    },
    url: {
      type: String,
      required: !1,
      default() {
        return v.isSsr ? "" : window.location.href;
      }
    },
    poll: {
      type: Number,
      required: !1,
      default: null
    },
    passthrough: {
      type: Object,
      required: !1,
      default() {
        return {};
      }
    }
  },
  emits: ["loaded"],
  data() {
    return {
      html: null,
      loading: !1
    };
  },
  mounted() {
    this.on.forEach((e) => {
      this.$splade.on(e, this.request);
    }), this.poll && setTimeout(() => {
      this.request();
    }, this.poll);
  },
  methods: {
    async request() {
      this.loading = !0, v.rehydrate(this.url, this.name).then((e) => {
        this.html = e.data.html, this.loading = !1, this.$emit("loaded"), this.poll && setTimeout(() => {
          this.request();
        }, this.poll);
      });
    }
  }
};
function Zf(e, t, r, n, i, s) {
  const a = Dr("Render");
  return i.html ? (j(), z(a, {
    key: 0,
    html: i.html,
    passthrough: r.passthrough
  }, null, 8, ["html", "passthrough"])) : i.loading ? J(e.$slots, "placeholder", { key: 1 }) : J(e.$slots, "default", { key: 2 });
}
const ep = /* @__PURE__ */ Be(Jf, [["render", Zf]]), tp = {
  props: {
    script: {
      type: String,
      required: !0
    }
  },
  mounted() {
    var e = new Function("obj", "with (obj) { " + this.script + "}");
    e = e.bind(this, this), e(this.script);
  },
  render() {
    return "";
  }
};
function rp(e, t) {
  var r = -1, n = Wt(e) ? Array(e.length) : [];
  return Mr(e, function(i, s, a) {
    n[++r] = t(i, s, a);
  }), n;
}
function Ss(e, t) {
  var r = R(e) ? Di : rp;
  return r(e, It(t));
}
const np = {
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
      type: [Boolean, Object],
      required: !1,
      default: !1
    },
    dusk: {
      type: String,
      required: !1,
      default: null
    },
    remoteUrl: {
      type: String,
      required: !1,
      default: null
    },
    optionValue: {
      type: String,
      required: !1,
      default: null
    },
    optionLabel: {
      type: String,
      required: !1,
      default: null
    },
    remoteRoot: {
      type: String,
      required: !1,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: !1
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : !1 : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && R(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = !0, ae({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(this.remoteRoot ? Ue(e.data, this.remoteRoot) : e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = !1;
        if (re(t, (s) => {
          var a = document.createElement("option");
          a.value = s.value, a.text = s.label, s.value === `${this.modelValue}` && (i = !0), s.disabled && (a.disabled = s.disabled), s.placeholder && (a.placeholder = s.placeholder), this.element.appendChild(a);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = !1;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = !1;
      }).catch(() => {
        this.loading = !1;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = R(e);
      if (!r && G(e))
        if (this.optionValue && this.optionLabel) {
          let n = Ue(e, this.optionValue);
          te(n) || (n = `${n}`), t.push({
            value: n,
            label: Ue(e, this.optionLabel)
          });
        } else
          re(e, (n, i) => {
            te(i) || (i = `${i}`), t.push({ label: n, value: i });
          });
      else
        r && e.forEach((n) => {
          this.normalizeOptions(n, t);
        });
      return t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = Ss(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return fn(this.choicesInstance._store.choices, (t) => t.value == e);
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
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const s = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const a = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: !0 })), a.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (a.containerInner.element.setAttribute("dusk", n.dusk), a.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = a.getValue(!0);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                a.getValue().length >= r && a.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), a.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                a.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = a.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                a.choiceList.scrollToChildElement(l, 1), a._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = a, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, s);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, ip = { ref: "select" };
function sp(e, t, r, n, i, s) {
  return j(), ye("div", ip, [
    J(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const ap = /* @__PURE__ */ Be(np, [["render", sp]]), op = {
  inject: ["stack"],
  render() {
    const e = v.validationErrors(this.stack), t = v.flashData(this.stack), r = v.sharedData.value, n = bs(e, (i) => i.join(`
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
        return Y(t, i);
      },
      hasShared(i) {
        return Y(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function lp(e, t, r) {
  e = Yr(e), t = Jt(t);
  var n = e.length;
  r = r === void 0 ? n : ws(dn(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function up(e, t) {
  var r = [];
  return Mr(e, function(n, i, s) {
    t(n, i, s) && r.push(n);
  }), r;
}
function cp(e, t) {
  var r = R(e) ? ps : up;
  return r(e, It(t));
}
function oi(e, t) {
  return sr(e, t);
}
const dp = {
  inject: ["stack"],
  props: {
    baseUrl: {
      type: String,
      required: !1,
      default() {
        return window.location.pathname;
      }
    },
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
      return !oi(this.visibleColumns, this.defaultVisibleToggleableColumns);
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
    this.debounceUpdateQuery = er(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    re(e, (r, n) => {
      if (et(n, "filter[") && !r) {
        const i = n.split("["), s = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, s];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t, r) {
      var n, i;
      if (!(((n = r == null ? void 0 : r.target) == null ? void 0 : n.tagName) === "A" || ((i = r == null ? void 0 : r.target) == null ? void 0 : i.tagName) === "BUTTON"))
        return t === "modal" ? v.modal(e) : t === "slideover" ? v.slideover(e) : v.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, re(e, (t, r) => {
        et(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, !0);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = cp(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : !0);
      let n = Ss(r, (i) => i.key).sort();
      oi(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, !1);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], qe(() => {
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
        if (!lp(i, "]")) {
          t[i] = n[1];
          return;
        }
        const s = i.split("["), a = s[1].substring(0, s[1].length - 1);
        parseInt(a) == a ? (i = s[0], R(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = !0);
      let i = this.getCurrentQuery();
      i[e] = t, (et(e, "perPage") || et(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var l;
      typeof r > "u" && (r = !0);
      let n = {};
      re(e, (u, c) => {
        if (!R(u)) {
          n[c] = u;
          return;
        }
        u.length !== 0 && u.forEach((f, m) => {
          n[`${c}[${m}]`] = f;
        });
      });
      let i = "";
      re(n, (u, c) => {
        u === null || u === [] || (i && (i += "&"), i += `${c}=${u}`);
      }), i && (i = "?" + i);
      const s = this.baseUrl + i;
      if (!r)
        return this.stack > 0 ? void 0 : v.replaceUrlOfCurrentPage(s);
      this.isLoading = !0;
      let a = null;
      typeof t < "u" && t && (a = (l = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : l.value);
      const o = this.stack > 0 ? {
        "X-Splade-Modal": v.stackType(this.stack),
        "X-Splade-Modal-Target": this.stack
      } : {};
      v.replace(s, o).then(() => {
        this.isLoading = !1, typeof t < "u" && t && qe(() => {
          const u = document.querySelector(`[name="${t.name}"]`);
          u.focus(), a && (u.value = a);
        });
      });
    },
    async performBulkAction(e, t, r, n, i, s) {
      typeof s > "u" && (s = !1);
      let a = null;
      if (t)
        try {
          a = await v.confirm(t === !0 ? "" : t, r, n, i, !!s);
        } catch {
          return !1;
        }
      this.isLoading = !0;
      const o = { ids: this.selectedItems };
      if (s) {
        const l = te(s) && s ? s : "password";
        o[l] = a;
      }
      v.request(e, "POST", o, {}, !1).then((l) => {
        l.data;
      }).catch(() => {
        this.isLoading = !1;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = R(e) ? e : [];
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
}, fp = {
  inheritAttrs: !1,
  data() {
    return {
      isMounted: !1,
      Teleport: ui
    };
  },
  mounted() {
    this.isMounted = !0;
  }
};
function pp(e, t, r, n, i, s) {
  return Ds((j(), z(Bs(i.isMounted ? i.Teleport : "div"), js(Rs(e.$attrs)), {
    default: ci(() => [
      J(e.$slots, "default")
    ]),
    _: 3
  }, 16)), [
    [Ms, i.isMounted]
  ]);
}
const hp = /* @__PURE__ */ Be(fp, [["render", pp]]), mp = {
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
        qe(() => e.default.update(this.element));
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
}, vp = { ref: "textarea" };
function gp(e, t, r, n, i, s) {
  return j(), ye("div", vp, [
    J(e.$slots, "default")
  ], 512);
}
const yp = /* @__PURE__ */ Be(mp, [["render", gp]]), bp = {
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
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, wp = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Sp = {
  computed: {
    toasts: function() {
      return v.toastsReversed.value;
    },
    hasBackdrop: function() {
      return v.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      v.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: wp,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: oe,
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, Op = {
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
            if (n.length === 1 && ds(n) === "default") {
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
            return r === "setToggle" ? (i, s) => {
              e.setToggle(i, s);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, $p = {
  render() {
    return this.$slots.default({
      TransitionRoot: dt,
      TransitionChild: ct
    });
  }
}, Ep = {
  created: (e, t) => {
    if (v.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = v.restore(r);
    n && qe(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      v.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", er(i, 100)), i();
  }
}, Fr = {
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
    Fr.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Fr.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      let n = 0;
      document.addEventListener("splade:internal:request", (s) => {
        n++, n === 1 && t.start(s, e.delay, r.default);
      });
      const i = (s) => {
        n--, n === 0 ? t.stop(s, r.default) : n < 0 && (n = 0);
      };
      document.addEventListener("splade:internal:request-progress", (s) => t.progress(s, r.default)), document.addEventListener("splade:internal:request-response", (s) => i(s)), document.addEventListener("splade:internal:request-error", (s) => i(s)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, Ap = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = Y(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = Y(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = Y(t, "transform_anchors") ? t.transform_anchors : !1, t.link_component = Y(t, "link_component") ? t.link_component : "Link", t.progress_bar = Y(t, "progress_bar") ? t.progress_bar : !1, t.components = Y(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Button`, Ul).component(`${r}Confirm`, Lu).component(`${r}Data`, Mu).component(`${r}DataStores`, Nu).component(`${r}Defer`, ec).component(`${r}Dialog`, tc).component(`${r}Dropdown`, ud).component(`${r}DynamicHtml`, cd).component(`${r}Errors`, dd).component(`${r}Event`, fd).component(`${r}File`, Bf).component(`${r}Flash`, jf).component(`${r}Form`, Mf).component(`${r}Input`, Uf).component(`${r}Lazy`, Gf).component(`${r}Modal`, Yf).component(`${r}OnClickOutside`, ns).component(`${r}PreloadedModal`, Qf).component(`${r}Rehydrate`, ep).component(`${r}Render`, oe).component(`${r}Script`, tp).component(`${r}Select`, ap).component(`${r}State`, op).component(`${r}Table`, dp).component(`${r}Teleport`, hp).component(`${r}Textarea`, yp).component(`${r}Toast`, bp).component(`${r}Toasts`, Sp).component(`${r}Toggle`, Op).component(`${r}Transition`, $p).component(t.link_component, Kf).directive(`${r}PreserveScroll`, Ep), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => v }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: !0,
        spinner: !1
      };
      G(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        Y(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Fr.init(t.progress_bar);
    }
    re(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function Pp(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((s) => {
    const a = s.replace(/^-+/, "").split("=");
    n[a[0]] = a.length === 2 ? a[1] : !0;
  });
  const i = n.port || 9e3;
  e(async (s, a) => {
    if (s.method == "POST") {
      let o = "";
      s.on("data", (l) => o += l), s.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        a.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), a.write(JSON.stringify({ body: c })), a.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
export {
  v as Splade,
  Ho as SpladeApp,
  Ap as SpladePlugin,
  _p as renderSpladeApp,
  Pp as startServer
};
