import P from "react";
var ee = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function cr() {
  if (je) return W;
  je = 1;
  var b = P, d = Symbol.for("react.element"), g = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, _ = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(x, f, j) {
    var v, E = {}, k = null, F = null;
    j !== void 0 && (k = "" + j), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (F = f.ref);
    for (v in f) s.call(f, v) && !w.hasOwnProperty(v) && (E[v] = f[v]);
    if (x && x.defaultProps) for (v in f = x.defaultProps, f) E[v] === void 0 && (E[v] = f[v]);
    return { $$typeof: d, type: x, key: k, ref: F, props: E, _owner: _.current };
  }
  return W.Fragment = g, W.jsx = m, W.jsxs = m, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function fr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var b = P, d = Symbol.for("react.element"), g = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), x = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), L = Symbol.iterator, J = "@@iterator";
    function Te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[J];
      return typeof r == "function" ? r : null;
    }
    var D = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          a[t - 1] = arguments[t];
        Oe("error", e, a);
      }
    }
    function Oe(e, r, a) {
      {
        var t = D.ReactDebugCurrentFrame, i = t.getStackAddendum();
        i !== "" && (r += "%s", a = a.concat([i]));
        var l = a.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Se = !1, Pe = !1, Fe = !1, De = !1, Ae = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === w || Ae || e === _ || e === j || e === v || De || e === F || Se || Pe || Fe || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === E || e.$$typeof === m || e.$$typeof === x || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ie(e, r, a) {
      var t = e.displayName;
      if (t)
        return t;
      var i = r.displayName || r.name || "";
      return i !== "" ? a + "(" + i + ")" : a;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case g:
          return "Portal";
        case w:
          return "Profiler";
        case _:
          return "StrictMode";
        case j:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ae(r) + ".Consumer";
          case m:
            var a = e;
            return ae(a._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case E:
            var t = e.displayName || null;
            return t !== null ? t : T(e.type) || "Memo";
          case k: {
            var i = e, l = i._payload, o = i._init;
            try {
              return T(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, I = 0, te, ne, oe, ie, se, le, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function $e() {
      {
        if (I === 0) {
          te = console.log, ne = console.info, oe = console.warn, ie = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function We() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: te
            }),
            info: O({}, e, {
              value: ne
            }),
            warn: O({}, e, {
              value: oe
            }),
            error: O({}, e, {
              value: ie
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: ue
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = D.ReactCurrentDispatcher, q;
    function B(e, r, a) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            q = t && t[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, V;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ye();
    }
    function fe(e, r) {
      if (!e || z)
        return "";
      {
        var a = V.get(e);
        if (a !== void 0)
          return a;
      }
      var t;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = K.current, K.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              t = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              t = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            t = R;
          }
          e();
        }
      } catch (R) {
        if (R && t && typeof R.stack == "string") {
          for (var n = R.stack.split(`
`), h = t.stack.split(`
`), u = n.length - 1, c = h.length - 1; u >= 1 && c >= 0 && n[u] !== h[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (n[u] !== h[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || n[u] !== h[c]) {
                    var C = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, C), C;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = l, We(), Error.prepareStackTrace = i;
      }
      var N = e ? e.displayName || e.name : "", S = N ? B(N) : "";
      return typeof e == "function" && V.set(e, S), S;
    }
    function Le(e, r, a) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case j:
          return B("Suspense");
        case v:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Le(e.render);
          case E:
            return M(e.type, r, a);
          case k: {
            var t = e, i = t._payload, l = t._init;
            try {
              return M(l(i), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, de = {}, ve = D.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, a = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(a);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ve(e, r, a, t, i) {
      {
        var l = Function.call.bind($);
        for (var o in e)
          if (l(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((t || "React class") + ": " + a + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              n = e[o](r, o, t, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (U(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", a, o, typeof n), U(null)), n instanceof Error && !(n.message in de) && (de[n.message] = !0, U(i), y("Failed %s type: %s", a, n.message), U(null));
          }
      }
    }
    var Me = Array.isArray;
    function G(e) {
      return Me(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Je(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function pe(e) {
      if (Je(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ge(e);
    }
    var be = D.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, he;
    function qe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function He(e, r) {
      {
        var a = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var a = function() {
          he || (he = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, a, t, i, l, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function Qe(e, r, a, t, i) {
      {
        var l, o = {}, n = null, h = null;
        a !== void 0 && (pe(a), n = "" + a), ze(r) && (pe(r.key), n = "" + r.key), qe(r) && (h = r.ref, Ge(r, i));
        for (l in r)
          $.call(r, l) && !Ke.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (l in u)
            o[l] === void 0 && (o[l] = u[l]);
        }
        if (n || h) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && He(o, c), h && Xe(o, c);
        }
        return Ze(e, n, h, i, t, be.current, o);
      }
    }
    var H = D.ReactCurrentOwner, me = D.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, a = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(a);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function xe() {
      {
        if (H.current) {
          var e = T(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      return "";
    }
    var Re = {};
    function rr(e) {
      {
        var r = xe();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = rr(r);
        if (Re[a])
          return;
        Re[a] = !0;
        var t = "";
        e && e._owner && e._owner !== H.current && (t = " It was passed a child from " + T(e._owner.type) + "."), A(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, t), A(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var a = 0; a < e.length; a++) {
            var t = e[a];
            Z(t) && Ee(t, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              Z(o.value) && Ee(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          a = r.propTypes;
        else
          return;
        if (a) {
          var t = T(r);
          Ve(a, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = T(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var t = r[a];
          if (t !== "children" && t !== "key") {
            A(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var we = {};
    function Ce(e, r, a, t, i, l) {
      {
        var o = Ne(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = er();
          h ? n += h : n += xe();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === d ? (u = "<" + (T(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var c = Qe(e, r, a, i, l);
        if (c == null)
          return c;
        if (o) {
          var C = r.children;
          if (C !== void 0)
            if (t)
              if (G(C)) {
                for (var N = 0; N < C.length; N++)
                  _e(C[N], e);
                Object.freeze && Object.freeze(C);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(C, e);
        }
        if ($.call(r, "key")) {
          var S = T(e), R = Object.keys(r).filter(function(ur) {
            return ur !== "key";
          }), Q = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[S + Q]) {
            var lr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, S, lr, S), we[S + Q] = !0;
          }
        }
        return e === s ? tr(c) : ar(c), c;
      }
    }
    function nr(e, r, a) {
      return Ce(e, r, a, !0);
    }
    function or(e, r, a) {
      return Ce(e, r, a, !1);
    }
    var ir = or, sr = nr;
    Y.Fragment = s, Y.jsx = ir, Y.jsxs = sr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ee.exports = cr() : ee.exports = fr();
var p = ee.exports;
const dr = P.forwardRef(
  ({
    className: b,
    variant: d = "primary",
    size: g = "md",
    loading: s = !1,
    disabled: _,
    children: w,
    icon: m,
    iconPosition: x = "left",
    fullWidth: f = !1,
    ...j
  }, v) => {
    const E = [
      // Base button styles - mobile-first with 44px touch target
      "inline-flex items-center justify-center gap-2",
      "rounded-lg font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "active:scale-95 touch-manipulation",
      // iOS active state
      "min-h-[44px] min-w-[44px]",
      // iOS minimum touch target
      // Prevent text selection on buttons
      "select-none",
      // Ensure proper stacking
      "relative overflow-hidden"
    ], k = {
      primary: [
        "bg-blue-600 text-white shadow-sm",
        "hover:bg-blue-700 focus:ring-blue-500",
        "active:bg-blue-800"
      ],
      secondary: [
        "bg-gray-100 text-gray-900 shadow-sm",
        "hover:bg-gray-200 focus:ring-gray-500",
        "active:bg-gray-300",
        "dark:bg-gray-800 dark:text-gray-100",
        "dark:hover:bg-gray-700 dark:active:bg-gray-600"
      ],
      outline: [
        "border border-gray-300 bg-white text-gray-700 shadow-sm",
        "hover:bg-gray-50 focus:ring-gray-500",
        "active:bg-gray-100",
        "dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300",
        "dark:hover:bg-gray-800 dark:active:bg-gray-700"
      ],
      ghost: [
        "text-gray-700 hover:bg-gray-100",
        "focus:ring-gray-500 active:bg-gray-200",
        "dark:text-gray-300 dark:hover:bg-gray-800",
        "dark:active:bg-gray-700"
      ],
      destructive: [
        "bg-red-600 text-white shadow-sm",
        "hover:bg-red-700 focus:ring-red-500",
        "active:bg-red-800"
      ]
    }, F = {
      sm: "px-3 py-2 text-sm min-h-[36px]",
      // Slightly smaller but still touch-friendly
      md: "px-4 py-2.5 text-sm min-h-[44px]",
      // Default iOS touch target
      lg: "px-6 py-3 text-base min-h-[48px]",
      // Larger for primary actions
      xl: "px-8 py-4 text-lg min-h-[52px]"
      // XL for hero buttons
    }, L = f ? "w-full" : "", J = [
      ...E,
      ...k[d] || [],
      ...F[g] || [],
      L,
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p.jsxs(
      "button",
      {
        className: J,
        disabled: _ || s,
        ref: v,
        ...j,
        children: [
          s && /* @__PURE__ */ p.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-inherit rounded-lg", children: /* @__PURE__ */ p.jsx("div", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }) }),
          /* @__PURE__ */ p.jsxs("div", { className: `flex items-center gap-2 ${s ? "opacity-0" : ""}`, children: [
            m && x === "left" && /* @__PURE__ */ p.jsx("span", { className: "flex-shrink-0", children: m }),
            w,
            m && x === "right" && /* @__PURE__ */ p.jsx("span", { className: "flex-shrink-0", children: m })
          ] })
        ]
      }
    );
  }
);
dr.displayName = "Button";
const vr = P.forwardRef(
  ({
    className: b,
    variant: d = "default",
    padding: g = "md",
    interactive: s = !1,
    fullWidth: _ = !1,
    children: w,
    ...m
  }, x) => {
    const f = [
      "rounded-lg transition-all duration-200",
      // Touch-friendly for interactive cards
      s ? "cursor-pointer touch-manipulation" : "",
      s ? "active:scale-[0.98]" : "",
      // Width
      _ ? "w-full" : ""
    ], j = {
      default: [
        "bg-white border border-gray-200",
        "dark:bg-gray-900 dark:border-gray-700",
        s ? "hover:shadow-md hover:border-gray-300" : "",
        s ? "dark:hover:border-gray-600" : ""
      ],
      outlined: [
        "bg-white border-2 border-gray-300",
        "dark:bg-gray-900 dark:border-gray-600",
        s ? "hover:border-blue-500 hover:shadow-md" : "",
        s ? "dark:hover:border-blue-400" : ""
      ],
      elevated: [
        "bg-white shadow-lg border border-gray-100",
        "dark:bg-gray-900 dark:border-gray-800",
        s ? "hover:shadow-xl" : ""
      ],
      filled: [
        "bg-gray-50 border border-gray-200",
        "dark:bg-gray-800 dark:border-gray-700",
        s ? "hover:bg-gray-100 hover:shadow-md" : "",
        s ? "dark:hover:bg-gray-750" : ""
      ]
    }, v = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8"
    }, E = [
      ...f,
      ...j[d] || [],
      ...v[g] || [],
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        className: E,
        ref: x,
        ...m,
        children: w
      }
    );
  }
), gr = P.forwardRef(
  ({ className: b, title: d, subtitle: g, action: s, children: _, ...w }, m) => {
    const x = [
      "flex items-start justify-between space-y-1.5 pb-4",
      // Ensure proper spacing on mobile
      "flex-col space-y-2 sm:flex-row sm:space-y-0",
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: x,
        ref: m,
        ...w,
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 flex-1 min-w-0", children: [
            d && /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100", children: d }),
            g && /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: g }),
            _
          ] }),
          s && /* @__PURE__ */ p.jsx("div", { className: "flex-shrink-0 self-start", children: s })
        ]
      }
    );
  }
), pr = P.forwardRef(
  ({ className: b, ...d }, g) => {
    const s = [
      "text-sm text-gray-600 dark:text-gray-300",
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        className: s,
        ref: g,
        ...d
      }
    );
  }
), br = P.forwardRef(
  ({ className: b, ...d }, g) => {
    const s = [
      "flex items-center pt-4",
      // Mobile-friendly footer layout
      "flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2",
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p.jsx(
      "div",
      {
        className: s,
        ref: g,
        ...d
      }
    );
  }
);
vr.displayName = "Card";
gr.displayName = "CardHeader";
pr.displayName = "CardContent";
br.displayName = "CardFooter";
const hr = ({
  size: b = "md",
  color: d = "primary",
  className: g = ""
}) => {
  const s = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  }, _ = {
    primary: "border-blue-500",
    secondary: "border-gray-500",
    white: "border-white",
    gray: "border-gray-400"
  }, w = [
    "border-2 border-t-transparent rounded-full animate-spin",
    s[b],
    _[d],
    g
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: w,
      role: "status",
      "aria-label": "Loading",
      children: /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Loading..." })
    }
  );
};
export {
  dr as Button,
  vr as Card,
  pr as CardContent,
  br as CardFooter,
  gr as CardHeader,
  hr as LoadingSpinner
};
