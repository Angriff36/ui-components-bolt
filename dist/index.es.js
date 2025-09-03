import N from "react";
var te = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  if (Oe) return M;
  Oe = 1;
  var i = N, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, k) {
    var v, R = {}, E = null, S = null;
    k !== void 0 && (E = "" + k), g.key !== void 0 && (E = "" + g.key), g.ref !== void 0 && (S = g.ref);
    for (v in g) t.call(g, v) && !y.hasOwnProperty(v) && (R[v] = g[v]);
    if (m && m.defaultProps) for (v in g = m.defaultProps, g) R[v] === void 0 && (R[v] = g[v]);
    return { $$typeof: u, type: m, key: E, ref: S, props: R, _owner: s.current };
  }
  return M.Fragment = d, M.jsx = p, M.jsxs = p, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function gr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var i = N, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, $ = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = T && e[T] || e[$];
      return typeof r == "function" ? r : null;
    }
    var P = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          a[n - 1] = arguments[n];
        q("error", e, a);
      }
    }
    function q(e, r, a) {
      {
        var n = P.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", a = a.concat([f]));
        var b = a.map(function(l) {
          return String(l);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Ne = !1, Fe = !1, De = !1, Ae = !1, $e = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === y || $e || e === s || e === k || e === v || Ae || e === S || Ne || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === R || e.$$typeof === p || e.$$typeof === m || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, a) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? a + "(" + f + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case d:
          return "Portal";
        case y:
          return "Profiler";
        case s:
          return "StrictMode";
        case k:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return se(r) + ".Consumer";
          case p:
            var a = e;
            return se(a._context) + ".Provider";
          case g:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case E: {
            var f = e, b = f._payload, l = f._init;
            try {
              return F(l(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, oe, ie, le, ue, de, ce, fe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Le() {
      {
        if (W === 0) {
          oe = console.log, ie = console.info, le = console.warn, ue = console.error, de = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        W++;
      }
    }
    function We() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: oe
            }),
            info: D({}, e, {
              value: ie
            }),
            warn: D({}, e, {
              value: le
            }),
            error: D({}, e, {
              value: ue
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: ce
            }),
            groupEnd: D({}, e, {
              value: fe
            })
          });
        }
        W < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = P.ReactCurrentDispatcher, H;
    function B(e, r, a) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var X = !1, J;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ve();
    }
    function be(e, r) {
      if (!e || X)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var n;
      X = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = G.current, G.current = null, Le();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              n = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), _ = n.stack.split(`
`), h = o.length - 1, x = _.length - 1; h >= 1 && x >= 0 && o[h] !== _[x]; )
            x--;
          for (; h >= 1 && x >= 0; h--, x--)
            if (o[h] !== _[x]) {
              if (h !== 1 || x !== 1)
                do
                  if (h--, x--, x < 0 || o[h] !== _[x]) {
                    var j = `
` + o[h].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, j), j;
                  }
                while (h >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = b, We(), Error.prepareStackTrace = f;
      }
      var Y = e ? e.displayName || e.name : "", A = Y ? B(Y) : "";
      return typeof e == "function" && J.set(e, A), A;
    }
    function Me(e, r, a) {
      return be(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ue(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case k:
          return B("Suspense");
        case v:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Me(e.render);
          case R:
            return z(e.type, r, a);
          case E: {
            var n = e, f = n._payload, b = n._init;
            try {
              return z(b(f), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ve = {}, me = P.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(a);
      } else
        me.setExtraStackFrame(null);
    }
    function Be(e, r, a, n, f) {
      {
        var b = Function.call.bind(V);
        for (var l in e)
          if (b(e, l)) {
            var o = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((n || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[l](r, l, n, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              o = h;
            }
            o && !(o instanceof Error) && (K(f), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", a, l, typeof o), K(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, K(f), w("Failed %s type: %s", a, o.message), K(null));
          }
      }
    }
    var Je = Array.isArray;
    function Z(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ke(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ke(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ye(e);
    }
    var he = P.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Re;
    function Ge(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function Ze(e, r) {
      {
        var a = function() {
          xe || (xe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var a = function() {
          Re || (Re = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var er = function(e, r, a, n, f, b, l) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: l,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, a, n, f) {
      {
        var b, l = {}, o = null, _ = null;
        a !== void 0 && (pe(a), o = "" + a), He(r) && (pe(r.key), o = "" + r.key), Ge(r) && (_ = r.ref, Xe(r, f));
        for (b in r)
          V.call(r, b) && !qe.hasOwnProperty(b) && (l[b] = r[b]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (b in h)
            l[b] === void 0 && (l[b] = h[b]);
        }
        if (o || _) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(l, x), _ && Qe(l, x);
        }
        return er(e, o, _, f, n, he.current, l);
      }
    }
    var Q = P.ReactCurrentOwner, ke = P.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(a);
      } else
        ke.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function we() {
      {
        if (Q.current) {
          var e = F(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function tr(e) {
      {
        var r = we();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = tr(r);
        if (Ee[a])
          return;
        Ee[a] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + F(e._owner.type) + "."), I(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, n), I(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var a = 0; a < e.length; a++) {
            var n = e[a];
            re(n) && _e(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = L(e);
          if (typeof f == "function" && f !== e.entries)
            for (var b = f.call(e), l; !(l = b.next()).done; )
              re(l.value) && _e(l.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          a = r.propTypes;
        else
          return;
        if (a) {
          var n = F(r);
          Be(a, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = F(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var n = r[a];
          if (n !== "children" && n !== "key") {
            I(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var je = {};
    function Te(e, r, a, n, f, b) {
      {
        var l = Ie(e);
        if (!l) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar();
          _ ? o += _ : o += we();
          var h;
          e === null ? h = "null" : Z(e) ? h = "array" : e !== void 0 && e.$$typeof === u ? (h = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, o);
        }
        var x = rr(e, r, a, f, b);
        if (x == null)
          return x;
        if (l) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (Z(j)) {
                for (var Y = 0; Y < j.length; Y++)
                  Ce(j[Y], e);
                Object.freeze && Object.freeze(j);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(j, e);
        }
        if (V.call(r, "key")) {
          var A = F(e), C = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), ae = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[A + ae]) {
            var dr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, A, dr, A), je[A + ae] = !0;
          }
        }
        return e === t ? sr(x) : nr(x), x;
      }
    }
    function or(e, r, a) {
      return Te(e, r, a, !0);
    }
    function ir(e, r, a) {
      return Te(e, r, a, !1);
    }
    var lr = ir, ur = or;
    U.Fragment = t, U.jsx = lr, U.jsxs = ur;
  }()), U;
}
process.env.NODE_ENV === "production" ? te.exports = fr() : te.exports = gr();
var c = te.exports;
function Pe(i) {
  var u, d, t = "";
  if (typeof i == "string" || typeof i == "number") t += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var s = i.length;
    for (u = 0; u < s; u++) i[u] && (d = Pe(i[u])) && (t && (t += " "), t += d);
  } else for (d in i) i[d] && (t && (t += " "), t += d);
  return t;
}
function br() {
  for (var i, u, d = 0, t = "", s = arguments.length; d < s; d++) (i = arguments[d]) && (u = Pe(i)) && (t && (t += " "), t += u);
  return t;
}
function O(...i) {
  return br(i);
}
const vr = N.forwardRef(
  ({
    className: i,
    variant: u = "primary",
    size: d = "md",
    rounded: t = "lg",
    loading: s = !1,
    disabled: y,
    children: p,
    icon: m,
    iconPosition: g = "left",
    fullWidth: k = !1,
    ...v
  }, R) => {
    const E = [
      // Base button styles - mobile-first with 44px touch target
      "inline-flex items-center justify-center gap-2",
      "font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "active:scale-95 touch-manipulation",
      // iOS active state
      "min-h-[44px] min-w-[44px]",
      // iOS minimum touch target
      // Prevent text selection on buttons
      "select-none",
      // Ensure proper stacking
      "relative overflow-hidden",
      // Better focus styles
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    ], S = {
      primary: [
        "bg-emerald-600 text-white shadow-sm",
        "hover:bg-emerald-700 focus-visible:ring-emerald-500",
        "active:bg-emerald-800",
        "disabled:bg-emerald-300"
      ],
      secondary: [
        "bg-gray-100 text-gray-900 shadow-sm",
        "hover:bg-gray-200 focus-visible:ring-gray-500",
        "active:bg-gray-300",
        "dark:bg-gray-800 dark:text-gray-100",
        "dark:hover:bg-gray-700 dark:active:bg-gray-600"
      ],
      outline: [
        "border border-gray-300 bg-white text-gray-700 shadow-sm",
        "hover:bg-gray-50 focus-visible:ring-gray-500",
        "active:bg-gray-100",
        "dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300",
        "dark:hover:bg-gray-800 dark:active:bg-gray-700"
      ],
      ghost: [
        "text-gray-700 hover:bg-gray-100",
        "focus-visible:ring-gray-500 active:bg-gray-200",
        "dark:text-gray-300 dark:hover:bg-gray-800",
        "dark:active:bg-gray-700"
      ],
      destructive: [
        "bg-red-600 text-white shadow-sm",
        "hover:bg-red-700 focus-visible:ring-red-500",
        "active:bg-red-800",
        "disabled:bg-red-300"
      ]
    }, T = {
      sm: "px-3 py-2 text-sm min-h-[36px]",
      // Slightly smaller but still touch-friendly
      md: "px-4 py-2.5 text-sm min-h-[44px]",
      // Default iOS touch target
      lg: "px-6 py-3 text-base min-h-[48px]",
      // Larger for primary actions
      xl: "px-8 py-4 text-lg min-h-[52px]"
      // XL for hero buttons
    }, $ = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    }, L = k ? "w-full" : "", P = O([
      ...E,
      ...S[u] || [],
      ...T[d] || [],
      $[t],
      L,
      i
    ]);
    return /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: P,
        disabled: y || s,
        ref: R,
        "aria-disabled": y || s,
        ...v,
        children: [
          s && /* @__PURE__ */ c.jsx("div", { className: O("absolute inset-0 flex items-center justify-center bg-inherit", $[t]), children: /* @__PURE__ */ c.jsx("div", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: `flex items-center gap-2 ${s ? "opacity-0" : ""}`, children: [
            m && g === "left" && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: m }),
            p,
            m && g === "right" && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: m })
          ] })
        ]
      }
    );
  }
);
vr.displayName = "Button";
const mr = N.forwardRef(
  ({
    className: i,
    variant: u = "default",
    padding: d = "md",
    rounded: t = "lg",
    interactive: s = !1,
    fullWidth: y = !1,
    children: p,
    ...m
  }, g) => {
    const k = [
      "transition-all duration-200",
      // Touch-friendly for interactive cards
      s ? "cursor-pointer touch-manipulation" : "",
      s ? "active:scale-[0.98]" : "",
      // Width
      y ? "w-full" : "",
      // Better focus styles for interactive cards
      s ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500" : ""
    ], v = {
      default: [
        "bg-white border border-gray-200",
        "dark:bg-gray-900 dark:border-gray-700",
        s ? "hover:shadow-md hover:border-gray-300" : "",
        s ? "dark:hover:border-gray-600" : ""
      ],
      outlined: [
        "bg-white border-2 border-gray-300",
        "dark:bg-gray-900 dark:border-gray-600",
        s ? "hover:border-emerald-500 hover:shadow-md" : "",
        s ? "dark:hover:border-emerald-400" : ""
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
        s ? "dark:hover:bg-gray-700" : ""
      ]
    }, R = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8"
    }, E = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl"
    }, S = O([
      ...k,
      ...v[u] || [],
      ...R[d] || [],
      E[t],
      i
    ]);
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        className: S,
        ref: g,
        ...s && { tabIndex: 0, role: "button" },
        ...m,
        children: p
      }
    );
  }
), yr = N.forwardRef(
  ({ className: i, title: u, subtitle: d, action: t, border: s = !0, children: y, ...p }, m) => {
    const g = O([
      "flex items-start justify-between space-y-1.5 pb-4",
      // Ensure proper spacing on mobile
      "flex-col space-y-2 sm:flex-row sm:space-y-0",
      // Optional border
      s ? "border-b border-gray-200 dark:border-gray-700" : "",
      i
    ]);
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: g,
        ref: m,
        ...p,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "space-y-1 flex-1 min-w-0", children: [
            u && /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100", children: u }),
            d && /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: d }),
            y
          ] }),
          t && /* @__PURE__ */ c.jsx("div", { className: "flex-shrink-0 self-start", children: t })
        ]
      }
    );
  }
), pr = N.forwardRef(
  ({ className: i, ...u }, d) => {
    const t = O([
      "text-sm text-gray-600 dark:text-gray-300",
      i
    ]);
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        className: t,
        ref: d,
        ...u
      }
    );
  }
), hr = N.forwardRef(
  ({ className: i, border: u = !0, ...d }, t) => {
    const s = O([
      "flex items-center pt-4",
      // Mobile-friendly footer layout
      "flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2",
      // Optional border
      u ? "border-t border-gray-200 dark:border-gray-700" : "",
      i
    ]);
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        className: s,
        ref: t,
        ...d
      }
    );
  }
);
mr.displayName = "Card";
yr.displayName = "CardHeader";
pr.displayName = "CardContent";
hr.displayName = "CardFooter";
const wr = ({
  size: i = "md",
  color: u = "primary",
  thickness: d = "normal",
  text: t,
  centered: s = !1,
  className: y = ""
}) => {
  const p = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  }, m = {
    primary: "border-emerald-500",
    secondary: "border-gray-500",
    white: "border-white",
    gray: "border-gray-400"
  }, g = {
    thin: "border",
    normal: "border-2",
    thick: "border-4"
  }, k = O([
    "border-t-transparent rounded-full animate-spin",
    p[i],
    m[u],
    g[d]
  ]), v = O([
    s ? "flex flex-col items-center justify-center gap-2" : "inline-flex items-center gap-2",
    y
  ]), R = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: k,
        role: "status",
        "aria-label": t || "Loading"
      }
    ),
    t && /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: t }),
    /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: t || "Loading..." })
  ] });
  return t || s ? /* @__PURE__ */ c.jsx("div", { className: v, children: R }) : /* @__PURE__ */ c.jsx(
    "div",
    {
      className: k,
      role: "status",
      "aria-label": "Loading",
      children: /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Loading..." })
    }
  );
}, xr = N.forwardRef(
  ({
    className: i,
    type: u = "text",
    label: d,
    error: t,
    helperText: s,
    leftIcon: y,
    rightIcon: p,
    variant: m = "default",
    inputSize: g = "md",
    fullWidth: k = !1,
    disabled: v,
    id: R,
    ...E
  }, S) => {
    const T = R || `input-${N.useId()}`, $ = [
      "transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-0",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "placeholder:text-gray-400 dark:placeholder:text-gray-500"
    ], L = {
      default: [
        "border border-gray-300 bg-white text-gray-900",
        "focus:ring-emerald-500 focus:border-emerald-500",
        "dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100",
        "dark:focus:border-emerald-400",
        t ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
      ],
      filled: [
        "border border-transparent bg-gray-100 text-gray-900",
        "focus:ring-emerald-500 focus:bg-white focus:border-emerald-500",
        "dark:bg-gray-800 dark:text-gray-100",
        "dark:focus:bg-gray-900 dark:focus:border-emerald-400",
        t ? "bg-red-50 focus:bg-red-50 focus:border-red-500 focus:ring-red-500" : ""
      ],
      outlined: [
        "border-2 border-gray-300 bg-transparent text-gray-900",
        "focus:ring-emerald-500 focus:border-emerald-500",
        "dark:border-gray-600 dark:text-gray-100",
        "dark:focus:border-emerald-400",
        t ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
      ]
    }, P = {
      sm: "px-3 py-2 text-sm rounded-md",
      md: "px-4 py-2.5 text-sm rounded-lg",
      lg: "px-4 py-3 text-base rounded-lg"
    }, w = {
      sm: y ? "pl-10" : p ? "pr-10" : "",
      md: y ? "pl-11" : p ? "pr-11" : "",
      lg: y ? "pl-12" : p ? "pr-12" : ""
    }, q = O([
      ...$,
      ...L[m] || [],
      P[g],
      w[g],
      k ? "w-full" : "",
      i
    ]);
    return /* @__PURE__ */ c.jsxs("div", { className: O("space-y-2", k ? "w-full" : ""), children: [
      d && /* @__PURE__ */ c.jsx(
        "label",
        {
          htmlFor: T,
          className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
          children: d
        }
      ),
      /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
        y && /* @__PURE__ */ c.jsx("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: y }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: u,
            className: q,
            ref: S,
            id: T,
            disabled: v,
            "aria-invalid": t ? "true" : "false",
            "aria-describedby": t ? `${T}-error` : s ? `${T}-helper` : void 0,
            ...E
          }
        ),
        p && /* @__PURE__ */ c.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400", children: p })
      ] }),
      t && /* @__PURE__ */ c.jsx(
        "p",
        {
          id: `${T}-error`,
          className: "text-sm text-red-600 dark:text-red-400",
          role: "alert",
          children: t
        }
      ),
      s && !t && /* @__PURE__ */ c.jsx(
        "p",
        {
          id: `${T}-helper`,
          className: "text-sm text-gray-500 dark:text-gray-400",
          children: s
        }
      )
    ] });
  }
);
xr.displayName = "Input";
const Rr = N.forwardRef(
  ({
    className: i,
    variant: u = "default",
    size: d = "md",
    rounded: t = "full",
    dot: s = !1,
    children: y,
    ...p
  }, m) => {
    const g = [
      "inline-flex items-center justify-center font-medium",
      "transition-colors duration-200",
      s ? "w-2 h-2 p-0" : ""
    ], k = {
      default: [
        "bg-gray-100 text-gray-800",
        "dark:bg-gray-800 dark:text-gray-200"
      ],
      secondary: [
        "bg-gray-200 text-gray-700",
        "dark:bg-gray-700 dark:text-gray-300"
      ],
      success: [
        "bg-emerald-100 text-emerald-800",
        "dark:bg-emerald-900 dark:text-emerald-200"
      ],
      warning: [
        "bg-yellow-100 text-yellow-800",
        "dark:bg-yellow-900 dark:text-yellow-200"
      ],
      danger: [
        "bg-red-100 text-red-800",
        "dark:bg-red-900 dark:text-red-200"
      ],
      info: [
        "bg-blue-100 text-blue-800",
        "dark:bg-blue-900 dark:text-blue-200"
      ]
    }, v = s ? {} : {
      sm: "px-2 py-1 text-xs",
      md: "px-2.5 py-1.5 text-xs",
      lg: "px-3 py-2 text-sm"
    }, R = {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full"
    }, E = O([
      ...g,
      ...k[u] || [],
      ...s ? [] : v[d] || [],
      R[t],
      i
    ]);
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        className: E,
        ref: m,
        ...p,
        children: !s && y
      }
    );
  }
);
Rr.displayName = "Badge";
export {
  Rr as Badge,
  vr as Button,
  mr as Card,
  pr as CardContent,
  hr as CardFooter,
  yr as CardHeader,
  xr as Input,
  wr as LoadingSpinner,
  O as cn
};
//# sourceMappingURL=index.es.js.map
