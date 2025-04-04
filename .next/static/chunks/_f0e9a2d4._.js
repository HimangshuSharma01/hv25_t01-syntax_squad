(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f0e9a2d4._.js", {

"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$kinde$2d$oss$2f$kinde$2d$auth$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@kinde-oss/kinde-auth-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const { user, isAuthenticated, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$kinde$2d$oss$2f$kinde$2d$auth$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKindeAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!isAuthenticated) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/api/auth/login?post_login_redirect_url=/dashboard");
                return;
            }
            const email = user?.email || "";
            if (email === "sharmahimangshu17@gmail.com") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
            } else if (email === "ankanmukhopadhyay0512@gmail.com") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/dashboard2");
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/error");
            }
        }
    }["Home.useEffect"], [
        isAuthenticated,
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: logout,
            className: "bg-red-500 text-white px-4 py-2 rounded",
            children: "Logout"
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Home, "A6wjDmwvtJAV82Vp7chfeewv+Fw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$kinde$2d$oss$2f$kinde$2d$auth$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKindeAuth"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/@kinde-oss/kinde-auth-nextjs/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CreateOrgLink": (()=>C),
    "KindeProvider": (()=>L),
    "LoginLink": (()=>S),
    "LogoutLink": (()=>j),
    "RegisterLink": (()=>x),
    "useKindeAuth": (()=>_),
    "useKindeBrowserClient": (()=>U)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for(var r = 0, n = Array(t); r < t; r++)n[r] = e[r];
    return n;
}
function c(e, t, r, n, o, i, a) {
    try {
        var c = e[i](a), u = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(u) : Promise.resolve(u).then(n, o);
}
function u(e) {
    return function() {
        var t = this, r = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(t, r);
            function a(e) {
                c(i, n, o, a, u, "next", e);
            }
            function u(e) {
                c(i, n, o, a, u, "throw", e);
            }
            a(void 0);
        });
    };
}
function s(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t);
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (("TURBOPACK compile-time truthy", 1) ? String : ("TURBOPACK unreachable", undefined))(e);
        }(e, "string");
        return "symbol" == typeof t ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
function l() {
    return l = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), l.apply(null, arguments);
}
function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}
function g(e) {
    for(var t = 1; t < arguments.length; t++){
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? f(Object(r), !0).forEach(function(t) {
            s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
        if (null == e) return {};
        var r = {};
        for(var n in e)if (({}).hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n)) continue;
            r[n] = e[n];
        }
        return r;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for(n = 0; n < i.length; n++)r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
function h() {
    h = function() {
        return t;
    };
    var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
        e[t] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function s(e, t, r) {
        return Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t];
    }
    try {
        s({}, "");
    } catch (e) {
        s = function(e, t, r) {
            return e[t] = r;
        };
    }
    function l(e, t, r, n) {
        var i = t && t.prototype instanceof m ? t : m, a = Object.create(i.prototype), c = new D(n || []);
        return o(a, "_invoke", {
            value: I(e, r, c)
        }), a;
    }
    function f(e, t, r) {
        try {
            return {
                type: "normal",
                arg: e.call(t, r)
            };
        } catch (e) {
            return {
                type: "throw",
                arg: e
            };
        }
    }
    t.wrap = l;
    var g = "suspendedStart", p = "suspendedYield", d = "executing", v = "completed", y = {};
    function m() {}
    function b() {}
    function w() {}
    var E = {};
    s(E, a, function() {
        return this;
    });
    var T = Object.getPrototypeOf, O = T && T(T(x([])));
    O && O !== r && n.call(O, a) && (E = O);
    var _ = w.prototype = m.prototype = Object.create(E);
    function k(e) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(t) {
            s(e, t, function(e) {
                return this._invoke(t, e);
            });
        });
    }
    function L(e, t) {
        function r(o, i, a, c) {
            var u = f(e[o], e, i);
            if ("throw" !== u.type) {
                var s = u.arg, l = s.value;
                return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                    r("next", e, a, c);
                }, function(e) {
                    r("throw", e, a, c);
                }) : t.resolve(l).then(function(e) {
                    s.value = e, a(s);
                }, function(e) {
                    return r("throw", e, a, c);
                });
            }
            c(u.arg);
        }
        var i;
        o(this, "_invoke", {
            value: function(e, n) {
                function o() {
                    return new t(function(t, o) {
                        r(e, n, t, o);
                    });
                }
                return i = i ? i.then(o, o) : o();
            }
        });
    }
    function I(t, r, n) {
        var o = g;
        return function(i, a) {
            if (o === d) throw Error("Generator is already running");
            if (o === v) {
                if ("throw" === i) throw a;
                return {
                    value: e,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = P(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === g) throw o = v, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = d;
                var s = f(t, r, n);
                if ("normal" === s.type) {
                    if (o = n.done ? v : p, s.arg === y) continue;
                    return {
                        value: s.arg,
                        done: n.done
                    };
                }
                "throw" === s.type && (o = v, n.method = "throw", n.arg = s.arg);
            }
        };
    }
    function P(t, r) {
        var n = r.method, o = t.iterator[n];
        if (o === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, P(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = f(o, t.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function R(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }
    function U(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
    }
    function D(e) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], e.forEach(R, this), this.reset(!0);
    }
    function x(t) {
        if (t || "" === t) {
            var r = t[a];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var o = -1, i = function r() {
                    for(; ++o < t.length;)if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                    return r.value = e, r.done = !0, r;
                };
                return i.next = i;
            }
        }
        throw new TypeError(typeof t + " is not iterable");
    }
    return b.prototype = w, o(_, "constructor", {
        value: w,
        configurable: !0
    }), o(w, "constructor", {
        value: b,
        configurable: !0
    }), b.displayName = s(w, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
    }, t.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, s(e, u, "GeneratorFunction")), e.prototype = Object.create(_), e;
    }, t.awrap = function(e) {
        return {
            __await: e
        };
    }, k(L.prototype), s(L.prototype, c, function() {
        return this;
    }), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new L(l(e, r, n, o), i);
        return t.isGeneratorFunction(r) ? a : a.next().then(function(e) {
            return e.done ? e.value : a.next();
        });
    }, k(_), s(_, u, "Generator"), s(_, a, function() {
        return this;
    }), s(_, "toString", function() {
        return "[object Generator]";
    }), t.keys = function(e) {
        var t = Object(e), r = [];
        for(var n in t)r.push(n);
        return r.reverse(), function e() {
            for(; r.length;){
                var n = r.pop();
                if (n in t) return e.value = n, e.done = !1, e;
            }
            return e.done = !0, e;
        };
    }, t.values = x, D.prototype = {
        constructor: D,
        reset: function(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(U), !t) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
        },
        dispatchException: function(t) {
            if (this.done) throw t;
            var r = this;
            function o(n, o) {
                return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var a = this.tryEntries[i], c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"), s = n.call(a, "finallyLoc");
                    if (u && s) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                        if (!s) throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
        },
        finish: function(e) {
            for(var t = this.tryEntries.length - 1; t >= 0; --t){
                var r = this.tryEntries[t];
                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), U(r), y;
            }
        },
        catch: function(e) {
            for(var t = this.tryEntries.length - 1; t >= 0; --t){
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        U(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function(t, r, n) {
            return this.delegate = {
                iterator: x(t),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = e), y;
        }
    }, t;
}
function d(e, t) {
    return function(e) {
        if (Array.isArray(e)) return e;
    }(e) || function(e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [], u = !0, s = !1;
            try {
                if (i = (r = r.call(e)).next, 0 === t) ;
                else for(; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
            } catch (e) {
                s = !0, o = e;
            } finally{
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return;
                } finally{
                    if (s) throw o;
                }
            }
            return c;
        }
    }(e, t) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return a(e, t);
            var r = ({}).toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0;
        }
    }(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
function v(e) {
    if (null != e) return (e = e.trim()).endsWith("/") && (e = e.slice(0, -1)), e;
}
v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_SITE_URL), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_POST_LOGIN_ALLOWED_URL_REGEX;
var y = v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_KINDE_AUTH_API_PATH) || v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_API_PATH) || "/api/auth";
v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_POST_LOGIN_REDIRECT_URL) || v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_POST_LOGIN_URL_REDIRECT_URL), v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_POST_LOGOUT_REDIRECT_URL), v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_ISSUER_URL), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_CLIENT_ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_CLIENT_SECRET;
var m = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUDIENCE;
v(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_COOKIE_DOMAIN), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_SCOPE;
var b = {
    isDebugMode: "true" === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_DEBUG_MODE,
    apiPath: y,
    initialState: {
        accessToken: null,
        idToken: null,
        isAuthenticated: !1,
        isLoading: !0,
        organization: null,
        permissions: [],
        user: null,
        userOrganizations: [],
        getAccessToken: function() {
            return null;
        },
        getBooleanFlag: function() {
            return null;
        },
        getClaim: function() {
            return null;
        },
        getFlag: function() {
            return null;
        },
        getIdToken: function() {
            return null;
        },
        getIntegerFlag: function() {
            return null;
        },
        getOrganization: function() {
            return null;
        },
        getPermission: function() {
            return null;
        },
        getPermissions: function() {
            return [];
        },
        getStringFlag: function() {
            return null;
        },
        getToken: function() {
            return null;
        },
        getUser: function() {
            return null;
        },
        getUserOrganizations: function() {
            return null;
        },
        refreshData: function() {
            return null;
        }
    },
    audience: m ? m.split(" ") : "",
    clientOptions: {
        audience: m ? m.split(" ") : ""
    }
}, w = function(e) {
    return e && /^[a-zA-Z0-9_-]+$/.test(e) ? e : null;
}, E = {
    login: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_LOGIN_ROUTE) || "login",
    logout: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_LOGOUT_ROUTE) || "logout",
    register: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_REGISTER_ROUTE) || "register",
    createOrg: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_CREATEORG_ROUTE) || "create_org",
    health: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_HEALTH_ROUTE) || "health",
    setup: w(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_SETUP_ROUTE) || "setup"
}, T = {
    s: "string",
    i: "integer",
    b: "boolean"
}, O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(g({}, b.initialState)), _ = function() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(O);
}, k = function() {
    var e = u(h().mark(function e(t) {
        var r;
        return h().wrap(function(e) {
            for(;;)switch(e.prev = e.next){
                case 0:
                    return e.prev = 0, e.next = 3, fetch(t);
                case 3:
                    r = e.sent, e.next = 9;
                    break;
                case 6:
                    throw e.prev = 6, e.t0 = e.catch(0), new Error("Failed to fetch token");
                case 9:
                    if (!r.ok) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 12, r.json();
                case 12:
                    return e.abrupt("return", e.sent);
                case 15:
                    if (401 !== r.status) {
                        e.next = 17;
                        break;
                    }
                    throw new Error("Failed to fetch token");
                case 17:
                case "end":
                    return e.stop();
            }
        }, e, null, [
            [
                0,
                6
            ]
        ]);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
}(), L = function(t) {
    var i = t.children, a = "".concat(b.apiPath, "/").concat(E.setup), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        s();
    }, [
        "checkSession"
    ]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(u(h().mark(function e() {
        var t, r, n, o, i, u, s, l, f, d, v, y, m, w, E, O, _, L, P, R, U, D, x, A, S;
        return h().wrap(function(e) {
            for(;;)switch(e.prev = e.next){
                case 0:
                    return e.prev = 0, e.next = 3, k(a);
                case 3:
                    if (null != (t = e.sent)) {
                        e.next = 6;
                        break;
                    }
                    return e.abrupt("return");
                case 6:
                    r = t.accessToken, n = t.accessTokenEncoded, o = t.featureFlags, i = t.idToken, u = t.organization, s = t.permissions, l = t.user, f = t.userOrganizations, d = function() {
                        return r;
                    }, v = function() {
                        return n;
                    }, y = function() {
                        return n;
                    }, m = function() {
                        return n;
                    }, w = function() {
                        return i;
                    }, E = function() {
                        return I;
                    }, O = function() {
                        return s;
                    }, _ = function() {
                        return u;
                    }, L = function() {
                        return l;
                    }, P = function() {
                        return f;
                    }, R = function(e) {
                        var r = "access_token" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "access_token") ? t.accessToken : t.idToken;
                        return r ? {
                            name: e,
                            value: r[e]
                        } : null;
                    }, U = function(e, t, r) {
                        var n = o, i = n && n[e] ? n[e] : {};
                        if (0 === Object.keys(i).length && null == t) throw Error("Flag ".concat(e, " was not found, and no default value has been provided"));
                        if (r && i.t && r !== i.t) throw Error("Flag ".concat(e, " is of type ").concat(T[i.t], " - requested type ").concat(T[r]));
                        return {
                            code: e,
                            type: T[i.t || r],
                            value: null == i.v ? t : i.v,
                            is_default: null == i.v,
                            defaultValue: t
                        };
                    }, D = function(e, t) {
                        try {
                            return U(e, t, "b").value;
                        } catch (e) {
                            b.isDebugMode && console.error(e);
                        }
                    }, x = function(e, t) {
                        try {
                            return U(e, t, "s").value;
                        } catch (e) {
                            b.isDebugMode && console.error(e);
                        }
                    }, A = function(e, t) {
                        try {
                            return U(e, t, "i").value;
                        } catch (e) {
                            b.isDebugMode && console.error(e);
                        }
                    }, S = function(e) {
                        return {
                            isGranted: s.permissions.some(function(t) {
                                return t === e;
                            }),
                            orgCode: u.orgCode
                        };
                    }, p(function(e) {
                        return g(g({}, e), {}, {
                            accessToken: r,
                            accessTokenEncoded: n,
                            accessTokenRaw: n,
                            idToken: i,
                            idTokenRaw: I,
                            idTokenEncoded: I,
                            isLoading: !1,
                            organization: u,
                            permissions: s,
                            user: l,
                            userOrganizations: f,
                            getAccessToken: d,
                            getAccessTokenRaw: v,
                            getAccessTokenEncoded: y,
                            getBooleanFlag: D,
                            getClaim: R,
                            getFlag: U,
                            getIdToken: w,
                            getIdTokenRaw: E,
                            getIntegerFlag: A,
                            getOrganization: _,
                            getPermission: S,
                            getPermissions: O,
                            getStringFlag: x,
                            getToken: m,
                            getUser: L,
                            getUserOrganizations: P,
                            refreshData: c
                        });
                    }), e.next = 30;
                    break;
                case 26:
                    e.prev = 26, e.t0 = e.catch(0), b.isDebugMode && console.error(e.t0), p(function(t) {
                        return g(g({}, t), {}, {
                            isLoading: !1,
                            error: e.t0
                        });
                    });
                case 30:
                case "end":
                    return e.stop();
            }
        }, e, null, [
            [
                0,
                26
            ]
        ]);
    })), [
        a
    ]), l = d((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(g({}, b.initialState)), 2), f = l[0], p = l[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = function() {
            var e = u(h().mark(function e() {
                return h().wrap(function(e) {
                    for(;;)switch(e.prev = e.next){
                        case 0:
                            return e.next = 2, s();
                        case 2:
                            p(function(e) {
                                return g(g({}, e), {}, {
                                    isLoading: !1
                                });
                            });
                        case 3:
                        case "end":
                            return e.stop();
                    }
                }, e);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }();
        f.user || e();
    }, [
        f.user
    ]);
    var v = f.user, y = f.accessToken, m = f.accessTokenRaw, w = f.accessTokenEncoded, _ = f.idToken, L = f.idTokenEncoded, I = f.idTokenRaw, P = f.getAccessToken, R = f.getAccessTokenRaw, U = f.getIdTokenRaw, D = f.getToken, x = f.getClaim, A = f.getFlag, S = f.getIdToken, N = f.getBooleanFlag, j = f.getStringFlag, F = f.getIntegerFlag, C = f.getOrganization, z = f.getPermission, K = f.getPermissions, G = f.getUser, H = f.getUserOrganizations, M = f.permissions, B = f.organization, W = f.userOrganizations, X = f.error, q = f.isLoading;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(O.Provider, {
        value: {
            user: v,
            error: X,
            accessToken: y,
            idToken: _,
            accessTokenEncoded: w,
            accessTokenRaw: m,
            idTokenEncoded: L,
            idTokenRaw: I,
            getAccessToken: P,
            getAccessTokenRaw: R,
            getToken: D,
            getClaim: x,
            getFlag: A,
            getIdToken: S,
            getIdTokenRaw: U,
            getBooleanFlag: N,
            getStringFlag: j,
            getIntegerFlag: F,
            getOrganization: C,
            getPermission: z,
            getPermissions: K,
            getUser: G,
            getUserOrganizations: H,
            permissions: M,
            organization: B,
            userOrganizations: W,
            isLoading: q,
            isAuthenticated: !!v,
            refreshData: c
        }
    }, i);
}, I = function() {
    return I = Object.assign || function(e) {
        for(var t, r = 1, n = arguments.length; r < n; r++)for(var o in t = arguments[r])Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
    }, I.apply(this, arguments);
};
function P(e, t, r, n) {
    return new (r || (r = Promise))(function(o, i) {
        function a(e) {
            try {
                u(n.next(e));
            } catch (e) {
                i(e);
            }
        }
        function c(e) {
            try {
                u(n.throw(e));
            } catch (e) {
                i(e);
            }
        }
        function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                e(t);
            })).then(a, c);
        }
        u((n = n.apply(e, t || [])).next());
    });
}
function R(e, t) {
    var r, n, o, i = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = c(0), a.throw = c(1), a.return = c(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
    "TURBOPACK unreachable";
    function c(c) {
        return function(u) {
            return function(c) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; a && (a = 0, c[0] && (i = 0)), i;)try {
                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                    switch(n = 0, o && (c = [
                        2 & c[0],
                        o.value
                    ]), c[0]){
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return i.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = c[1], c = [
                                0
                            ];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                i = 0;
                                continue;
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                i.label = c[1];
                                break;
                            }
                            if (6 === c[0] && i.label < o[1]) {
                                i.label = o[1], o = c;
                                break;
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(c);
                                break;
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue;
                    }
                    c = t.call(e, i);
                } catch (e) {
                    c = [
                        6,
                        e
                    ], n = 0;
                } finally{
                    r = o = 0;
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                };
            }([
                c,
                u
            ]);
        };
    }
}
"function" == typeof SuppressedError && SuppressedError;
var U = function(e) {
    void 0 === e && (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_KINDE_AUTH_API_PATH || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_AUTH_API_PATH || "/api/auth");
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        accessToken: null,
        accessTokenRaw: null,
        error: null,
        featureFlags: [],
        idToken: null,
        idTokenRaw: null,
        isAuthenticated: !1,
        isLoading: !0,
        organization: null,
        permissions: [],
        user: null,
        userOrganizations: null
    }), r = t[0], i = t[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        a();
    }, []);
    var a = function() {
        return P(void 0, void 0, void 0, function() {
            var t, r, n, o, a, c;
            return R(this, function(u) {
                switch(u.label){
                    case 0:
                        return t = "".concat(e, "/").concat(E.setup), [
                            4,
                            fetch(t)
                        ];
                    case 1:
                        return [
                            4,
                            (r = u.sent()).json()
                        ];
                    case 2:
                        if (n = u.sent(), o = n.message, a = n.error, c = function(e, t) {
                            var r = {};
                            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for(n = Object.getOwnPropertySymbols(e); o < n.length; o++)t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                            }
                            return r;
                        }(n, [
                            "message",
                            "error"
                        ]), !r.ok) return i(function(e) {
                            return I(I({}, e), {
                                isLoading: !1,
                                error: "".concat(o, ": ").concat(a || "An error occurred")
                            });
                        }), [
                            2
                        ];
                        switch(o){
                            case "OK":
                                i(I(I({}, c), {
                                    isLoading: !1
                                }));
                                break;
                            case "NOT_LOGGED_IN":
                                i(function(e) {
                                    return I(I({}, e), {
                                        isLoading: !1
                                    });
                                });
                                break;
                            default:
                                i(function(e) {
                                    return I(I({}, e), {
                                        isLoading: !1,
                                        error: "".concat(o, ": ").concat(a || "An error occurred")
                                    });
                                });
                        }
                        return [
                            2
                        ];
                }
            });
        });
    }, c = function(e, t, n) {
        var o = r.featureFlags || [], i = o && o[e] ? o[e] : null;
        if (!i && null == t) throw Error("Flag ".concat(e, " was not found, and no default value has been provided"));
        if (n && i.t && n !== i.t) throw Error("Flag ".concat(e, " is of type ").concat(T[i.t], " - requested type ").concat(T[n]));
        return {
            code: e,
            type: T[i.t || n],
            value: null == i.v ? t : i.v,
            is_default: null == i.v,
            defaultValue: t
        };
    };
    return I(I({}, r), {
        isAuthenticated: !!r.user,
        getUser: function() {
            return r.user;
        },
        getIdTokenRaw: function() {
            return r.idTokenRaw;
        },
        getPermission: function(e) {
            var t, n;
            return r.permissions ? {
                isGranted: null === (t = r.permissions.permissions) || void 0 === t ? void 0 : t.some(function(t) {
                    return t === e;
                }),
                orgCode: null === (n = r.organization) || void 0 === n ? void 0 : n.orgCode
            } : {
                isGranted: !1,
                orgCode: null
            };
        },
        getBooleanFlag: function(e, t) {
            try {
                return c(e, t, "b").value;
            } catch (e) {
                b.isDebugMode && console.error(e);
            }
        },
        getIntegerFlag: function(e, t) {
            try {
                return c(e, t, "i").value;
            } catch (e) {
                b.isDebugMode && console.error(e);
            }
        },
        getFlag: c,
        getStringFlag: function(e, t) {
            try {
                return c(e, t, "s").value;
            } catch (e) {
                b.isDebugMode && console.error(e);
            }
        },
        getClaim: function(e, t) {
            void 0 === t && (t = "access_token");
            var n = "access_token" === t ? r.accessToken : r.idToken;
            return n ? {
                name: e,
                value: n[e]
            } : null;
        },
        getAccessToken: function() {
            return r.accessToken;
        },
        getToken: function() {
            return r.accessTokenEncoded;
        },
        getAccessTokenRaw: function() {
            return r.accessTokenEncoded;
        },
        getIdToken: function() {
            return r.idToken;
        },
        getOrganization: function() {
            return r.organization;
        },
        getPermissions: function() {
            return r.permissions;
        },
        getUserOrganizations: function() {
            return r.userOrganizations;
        },
        refreshData: a
    });
}, D = [
    "children",
    "orgCode",
    "postLoginRedirectURL",
    "authUrlParams"
];
function x(t) {
    var r = t.children, n = t.orgCode, o = t.postLoginRedirectURL, i = t.authUrlParams, a = p(t, D), c = new URLSearchParams, u = {};
    for(var s in null != n && (u.org_code = n), null != o && (u.post_login_redirect_url = o), u = g(g({}, i), u))c.append(s, u[s]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", l({
        href: "".concat(b.apiPath, "/").concat(E.register).concat(c ? "?".concat(c.toString()) : "")
    }, a), r);
}
var A = [
    "children",
    "postLoginRedirectURL",
    "orgCode",
    "authUrlParams"
];
function S(t) {
    var r = t.children, n = t.postLoginRedirectURL, o = t.orgCode, i = t.authUrlParams, a = p(t, A), c = new URLSearchParams, u = {};
    if (null != o && (u.org_code = o), null != n) {
        var s;
        if (null !== (s = n) && void 0 !== s && s.startsWith("/")) {
            var f = "undefined" != typeof window ? window.location.origin : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.KINDE_SITE_URL;
            n = "".concat(f).concat(n);
        }
        u.post_login_redirect_url = n;
    }
    for(var h in u = g(g({}, i), u))c.append(h, u[h]);
    var d = "".concat(b.apiPath, "/").concat(E.login).concat(c ? "?".concat(c.toString()) : "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", l({
        href: d
    }, a), r);
}
var N = [
    "children",
    "postLogoutRedirectURL"
];
function j(t) {
    var r = t.children, n = t.postLogoutRedirectURL, o = p(t, N);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", l({
        href: "".concat(b.apiPath, "/").concat(E.logout).concat(n ? "?post_logout_redirect_url=".concat(n) : "")
    }, o), r);
}
var F = [
    "children",
    "orgName"
];
function C(t) {
    var r = t.children, n = t.orgName, o = p(t, F);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", l({
        href: "".concat(b.apiPath, "/").concat(E.createOrg).concat(n ? "?org_name=".concat(n) : "")
    }, o), r);
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_f0e9a2d4._.js.map