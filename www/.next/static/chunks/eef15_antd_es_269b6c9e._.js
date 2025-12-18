(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeStyles",
    ()=>mergeStyles,
    "resolveStyleOrClass",
    ()=>resolveStyleOrClass,
    "useMergeSemantic",
    ()=>useMergeSemantic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const mergeClassNames = function(schema) {
    for(var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        classNames[_key - 1] = arguments[_key];
    }
    const mergedSchema = schema || {};
    return classNames.filter(Boolean).reduce((acc, cur)=>{
        // Loop keys of the current classNames
        Object.keys(cur || {}).forEach((key)=>{
            const keySchema = mergedSchema[key];
            const curVal = cur[key];
            if (keySchema && typeof keySchema === 'object') {
                if (curVal && typeof curVal === 'object') {
                    // Loop fill
                    acc[key] = mergeClassNames(keySchema, acc[key], curVal);
                } else {
                    // Covert string to object structure
                    const { _default: defaultField } = keySchema;
                    if (defaultField) {
                        acc[key] = acc[key] || {};
                        acc[key][defaultField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(acc[key][defaultField], curVal);
                    }
                }
            } else {
                // Flatten fill
                acc[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(acc[key], curVal);
            }
        });
        return acc;
    }, {});
};
const useSemanticClassNames = function(schema) {
    for(var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        classNames[_key - 1] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSemanticClassNames.useMemo": ()=>mergeClassNames.apply(void 0, [
                schema
            ].concat(classNames))
    }["useSemanticClassNames.useMemo"], [
        schema
    ].concat(classNames));
};
const mergeStyles = function() {
    for(var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++){
        styles[_key] = arguments[_key];
    }
    return styles.filter(Boolean).reduce(function(acc) {
        let cur = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Object.keys(cur).forEach((key)=>{
            acc[key] = {
                ...acc[key],
                ...cur[key]
            };
        });
        return acc;
    }, {});
};
const useSemanticStyles = function() {
    for(var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++){
        styles[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useSemanticStyles.useMemo": ()=>mergeStyles.apply(void 0, styles)
    }["useSemanticStyles.useMemo"], [].concat(styles));
};
// =========================== Export ===========================
const fillObjectBySchema = (obj, schema)=>{
    const newObj = {
        ...obj
    };
    Object.keys(schema).forEach((key)=>{
        if (key !== '_default') {
            const nestSchema = schema[key];
            const nextValue = newObj[key] || {};
            newObj[key] = nestSchema ? fillObjectBySchema(nextValue, nestSchema) : nextValue;
        }
    });
    return newObj;
};
const resolveStyleOrClass = (value, info)=>{
    return typeof value === 'function' ? value(info) : value;
};
const useMergeSemantic = (classNamesList, stylesList, info, schema)=>{
    const resolvedClassNamesList = classNamesList.map((classNames)=>classNames ? resolveStyleOrClass(classNames, info) : undefined);
    const resolvedStylesList = stylesList.map((styles)=>styles ? resolveStyleOrClass(styles, info) : undefined);
    const mergedClassNames = useSemanticClassNames.apply(void 0, [
        schema
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolvedClassNamesList)));
    const mergedStyles = useSemanticStyles.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolvedStylesList));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useMergeSemantic.useMemo": ()=>{
            if (!schema) {
                return [
                    mergedClassNames,
                    mergedStyles
                ];
            }
            return [
                fillObjectBySchema(mergedClassNames, schema),
                fillObjectBySchema(mergedStyles, schema)
            ];
        }
    }["useMergeSemantic.useMemo"], [
        mergedClassNames,
        mergedStyles,
        schema
    ]);
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/isNonNullable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isNonNullable = (val)=>{
    return val !== undefined && val !== null;
};
const __TURBOPACK__default__export__ = isNonNullable;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WarningContext",
    ()=>WarningContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "devUseWarning",
    ()=>devUseWarning,
    "noop",
    ()=>noop,
    "resetWarned",
    ()=>resetWarned
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript) <export default as warning>");
;
;
function noop() {}
const { resetWarned: rcResetWarned } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"];
let deprecatedWarnList = null;
function resetWarned() {
    deprecatedWarnList = null;
    rcResetWarned();
}
let _warning = noop;
if ("TURBOPACK compile-time truthy", 1) {
    _warning = (valid, component, message)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(valid, "[antd: ".concat(component, "] ").concat(message));
        // StrictMode will inject console which will not throw warning in React 17.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
}
const warning = _warning;
const WarningContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const devUseWarning = ("TURBOPACK compile-time truthy", 1) ? (component)=>{
    const { strict } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](WarningContext);
    const typeWarning = (valid, type, message)=>{
        if (!valid) {
            if (strict === false && type === 'deprecated') {
                const existWarning = deprecatedWarnList;
                if (!deprecatedWarnList) {
                    deprecatedWarnList = {};
                }
                deprecatedWarnList[component] = deprecatedWarnList[component] || [];
                if (!deprecatedWarnList[component].includes(message || '')) {
                    deprecatedWarnList[component].push(message || '');
                }
                // Warning for the first time
                if (!existWarning) {
                    console.warn('[antd] There exists deprecated usage in your code:', deprecatedWarnList);
                }
            } else {
                ("TURBOPACK compile-time truthy", 1) ? warning(valid, component, message) : "TURBOPACK unreachable";
            }
        }
    };
    typeWarning.deprecated = function(valid, oldProp, newProp) {
        let message = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '';
        typeWarning(valid, 'deprecated', "`".concat(oldProp, "` is deprecated. Please use `").concat(newProp, "` instead.").concat(message ? " ".concat(message) : ''));
    };
    return typeWarning;
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = warning;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigConsumer",
    ()=>ConfigConsumer,
    "ConfigContext",
    ()=>ConfigContext,
    "Variants",
    ()=>Variants,
    "defaultIconPrefixCls",
    ()=>defaultIconPrefixCls,
    "defaultPrefixCls",
    ()=>defaultPrefixCls,
    "useComponentConfig",
    ()=>useComponentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const defaultPrefixCls = 'ant';
const defaultIconPrefixCls = 'anticon';
const Variants = [
    'outlined',
    'borderless',
    'filled',
    'underlined'
];
const defaultGetPrefixCls = (suffixCls, customizePrefixCls)=>{
    if (customizePrefixCls) {
        return customizePrefixCls;
    }
    return suffixCls ? "".concat(defaultPrefixCls, "-").concat(suffixCls) : defaultPrefixCls;
};
const ConfigContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
});
const { Consumer: ConfigConsumer } = ConfigContext;
const EMPTY_OBJECT = {};
function useComponentConfig(propName) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ConfigContext);
    const { getPrefixCls, direction, getPopupContainer, renderEmpty } = context;
    const propValue = context[propName];
    return {
        classNames: EMPTY_OBJECT,
        styles: EMPTY_OBJECT,
        ...propValue,
        getPrefixCls,
        direction,
        getPopupContainer,
        renderEmpty
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cloneElement",
    ()=>cloneElement,
    "isFragment",
    ()=>isFragment,
    "replaceElement",
    ()=>replaceElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function isFragment(child) {
    return child && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment;
}
const replaceElement = (element, replacement, props)=>{
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(element)) {
        return replacement;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blurMaskStyle",
    ()=>blurMaskStyle,
    "clearFix",
    ()=>clearFix,
    "genCommonStyle",
    ()=>genCommonStyle,
    "genFocusOutline",
    ()=>genFocusOutline,
    "genFocusStyle",
    ()=>genFocusStyle,
    "genIconStyle",
    ()=>genIconStyle,
    "genLinkStyle",
    ()=>genLinkStyle,
    "operationUnit",
    ()=>operationUnit,
    "resetComponent",
    ()=>resetComponent,
    "resetIcon",
    ()=>resetIcon,
    "textEllipsis",
    ()=>textEllipsis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
"use client";
;
const textEllipsis = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
};
const resetComponent = function(token) {
    let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: token.colorText,
        fontSize: token.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token.lineHeight,
        listStyle: 'none',
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
    };
};
const resetIcon = ()=>({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textAlign: 'center',
        textTransform: 'none',
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: '-0.125em',
        textRendering: 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '> *': {
            lineHeight: 1
        },
        svg: {
            display: 'inline-block'
        }
    });
const clearFix = ()=>({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        '&::before': {
            display: 'table',
            content: '""'
        },
        '&::after': {
            // https://github.com/ant-design/ant-design/issues/21864
            display: 'table',
            clear: 'both',
            content: '""'
        }
    });
const genLinkStyle = (token)=>({
        a: {
            color: token.colorLink,
            textDecoration: token.linkDecoration,
            backgroundColor: 'transparent',
            // remove the gray background on active links in IE 10.
            outline: 'none',
            cursor: 'pointer',
            transition: "color ".concat(token.motionDurationSlow),
            '-webkit-text-decoration-skip': 'objects',
            // remove gaps in links underline in iOS 8+ and Safari 8+.
            '&:hover': {
                color: token.colorLinkHover
            },
            '&:active': {
                color: token.colorLinkActive
            },
            '&:active, &:hover': {
                textDecoration: token.linkHoverDecoration,
                outline: 0
            },
            // https://github.com/ant-design/ant-design/issues/22503
            '&:focus': {
                textDecoration: token.linkFocusDecoration,
                outline: 0
            },
            '&[disabled]': {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            }
        }
    });
const genCommonStyle = (token, componentPrefixCls, rootCls, resetFont)=>{
    const prefixSelector = '[class^="'.concat(componentPrefixCls, '"], [class*=" ').concat(componentPrefixCls, '"]');
    const rootPrefixSelector = rootCls ? ".".concat(rootCls) : prefixSelector;
    const resetStyle = {
        boxSizing: 'border-box',
        '&::before, &::after': {
            boxSizing: 'border-box'
        }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
        resetFontStyle = {
            fontFamily: token.fontFamily,
            fontSize: token.fontSize
        };
    }
    return {
        [rootPrefixSelector]: {
            ...resetFontStyle,
            ...resetStyle,
            [prefixSelector]: resetStyle
        }
    };
};
const genFocusOutline = (token, offset)=>({
        outline: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidthFocus), " solid ").concat(token.colorPrimaryBorder),
        outlineOffset: offset !== null && offset !== void 0 ? offset : 1,
        transition: 'outline-offset 0s, outline 0s'
    });
const genFocusStyle = (token, offset)=>({
        '&:focus-visible': genFocusOutline(token, offset)
    });
const genIconStyle = (iconPrefixCls)=>({
        [".".concat(iconPrefixCls)]: {
            ...resetIcon(),
            [".".concat(iconPrefixCls, " .").concat(iconPrefixCls, "-icon")]: {
                display: 'block'
            }
        }
    });
const operationUnit = (token)=>({
        // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
        // And Typography use this to generate link style which should not do this.
        color: token.colorLink,
        textDecoration: token.linkDecoration,
        outline: 'none',
        cursor: 'pointer',
        transition: "all ".concat(token.motionDurationSlow),
        border: 0,
        padding: 0,
        background: 'none',
        userSelect: 'none',
        ...genFocusStyle(token),
        '&:hover': {
            color: token.colorLinkHover,
            textDecoration: token.linkHoverDecoration
        },
        '&:focus': {
            color: token.colorLinkHover,
            textDecoration: token.linkFocusDecoration
        },
        '&:active': {
            color: token.colorLinkActive,
            textDecoration: token.linkHoverDecoration
        }
    });
const blurMaskStyle = {
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/version/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '6.0.0';
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/version/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/version/version.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$version$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultPresetColors",
    ()=>defaultPresetColors
]);
const defaultPresetColors = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    /**
   * @deprecated Use magenta instead
   */ pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
};
const seedToken = {
    // preset color palettes
    ...defaultPresetColors,
    // Color
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    // Font
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: 'solid',
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1000,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
};
const __TURBOPACK__default__export__ = seedToken;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genColorMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
function genColorMapToken(seed, param) {
    let { generateColorPalettes, generateNeutralColorPalettes } = param;
    const { colorSuccess: colorSuccessBase, colorWarning: colorWarningBase, colorError: colorErrorBase, colorInfo: colorInfoBase, colorPrimary: colorPrimaryBase, colorBgBase, colorTextBase } = seed;
    const primaryColors = generateColorPalettes(colorPrimaryBase);
    const successColors = generateColorPalettes(colorSuccessBase);
    const warningColors = generateColorPalettes(colorWarningBase);
    const errorColors = generateColorPalettes(colorErrorBase);
    const infoColors = generateColorPalettes(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
    // Color Link
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes(colorLink);
    const colorErrorBgFilledHover = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[1]).mix(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](errorColors[3]), 50).toHexString();
    return {
        ...neutralColors,
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('#000').setA(0.45).toRgbString(),
        colorWhite: '#fff'
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genRadius.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genRadius = (radiusBase)=>{
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    // radiusLG
    if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
        radiusLG = 16;
    }
    // radiusSM
    if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
    } else if (radiusBase >= 16) {
        radiusSM = 8;
    }
    // radiusXS
    if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
    } else if (radiusBase >= 6) {
        radiusXS = 2;
    }
    // radiusOuter
    if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
    } else if (radiusBase >= 8) {
        radiusOuter = 6;
    }
    return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
    };
};
const __TURBOPACK__default__export__ = genRadius;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genCommonMapToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genRadius.js [app-client] (ecmascript)");
;
function genCommonMapToken(token) {
    const { motionUnit, motionBase, borderRadius, lineWidth } = token;
    return {
        // motion
        motionDurationFast: "".concat((motionBase + motionUnit).toFixed(1), "s"),
        motionDurationMid: "".concat((motionBase + motionUnit * 2).toFixed(1), "s"),
        motionDurationSlow: "".concat((motionBase + motionUnit * 3).toFixed(1), "s"),
        // line
        lineWidthBold: lineWidth + 1,
        // radius
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genRadius$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(borderRadius)
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genControlHeight = (token)=>{
    const { controlHeight } = token;
    return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
    };
};
const __TURBOPACK__default__export__ = genControlHeight;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFontSizes,
    "getLineHeight",
    ()=>getLineHeight
]);
function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
    const fontSizes = Array.from({
        length: 10
    }).map((_, index)=>{
        const i = index - 1;
        const baseSize = base * Math.E ** (i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        // Convert to even
        return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size)=>({
            size,
            lineHeight: getLineHeight(size)
        }));
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)");
;
const genFontMapToken = (fontSize)=>{
    const fontSizePairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fontSize);
    const fontSizes = fontSizePairs.map((pair)=>pair.size);
    const lineHeights = fontSizePairs.map((pair)=>pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
    };
};
const __TURBOPACK__default__export__ = genFontMapToken;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genSizeMapToken
]);
function genSizeMapToken(token) {
    const { sizeUnit, sizeStep } = token;
    return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3) // 4
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlphaColor",
    ()=>getAlphaColor,
    "getSolidColor",
    ()=>getSolidColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
const getAlphaColor = (baseColor, alpha)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor).setA(alpha).toRgbString();
const getSolidColor = (baseColor, brightness)=>{
    const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](baseColor);
    return instance.darken(brightness).toHexString();
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateColorPalettes",
    ()=>generateColorPalettes,
    "generateNeutralColorPalettes",
    ()=>generateNeutralColorPalettes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/colorAlgorithm.js [app-client] (ecmascript)");
;
;
const generateColorPalettes = (baseColor)=>{
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(baseColor);
    return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
    };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor)=>{
    const colorBgBase = bgBaseColor || '#fff';
    const colorTextBase = textBaseColor || '#000';
    return {
        colorBgBase,
        colorTextBase,
        colorText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.88),
        colorTextSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.65),
        colorTextTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.45),
        colorTextQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.25),
        colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.15),
        colorFillSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.06),
        colorFillTertiary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.04),
        colorFillQuaternary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.02),
        colorBgSolid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 1),
        colorBgSolidHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.75),
        colorBgSolidActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.95),
        colorBgLayout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 4),
        colorBgContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgElevated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 0),
        colorBgSpotlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlphaColor"])(colorTextBase, 0.85),
        colorBgBlur: 'transparent',
        colorBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderDisabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 15),
        colorBorderSecondary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colorAlgorithm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolidColor"])(colorBgBase, 6)
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>derivative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/colors/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/colors/es/generate.js [app-client] (ecmascript) <export default as generate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/colors/es/presets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genColorMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genCommonMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genControlHeight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genFontMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genSizeMapToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/colors.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function derivative(token) {
    // pink is deprecated name of magenta, keep this for backwards compatibility
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"].magenta;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"].pink = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"].magenta;
    const colorPalettes = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPresetColors"]).map((colorKey)=>{
        const colors = token[colorKey] === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPrimaryColors"][colorKey] ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$presets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetPalettes"][colorKey] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$colors$2f$es$2f$generate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__generate$3e$__["generate"])(token[colorKey]);
        return Array.from({
            length: 10
        }, ()=>1).reduce((prev, _, i)=>{
            prev["".concat(colorKey, "-").concat(i + 1)] = colors[i];
            prev["".concat(colorKey).concat(i + 1)] = colors[i];
            return prev;
        }, {});
    }).reduce((prev, cur)=>{
        prev = {
            ...prev,
            ...cur
        };
        return prev;
    }, {});
    return {
        ...token,
        ...colorPalettes,
        // Colors
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genColorMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, {
            generateColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColorPalettes"],
            generateNeutralColorPalettes: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNeutralColorPalettes"]
        }),
        // Font
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token.fontSize),
        // Size
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genSizeMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token),
        // Height
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genControlHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token),
        // Others
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genCommonMapToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token)
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/theme/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/index.js [app-client] (ecmascript)");
;
;
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$theme$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = defaultTheme;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript) <export default as defaultTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignTokenContext",
    ()=>DesignTokenContext,
    "defaultConfig",
    ()=>defaultConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
;
;
;
const defaultConfig = {
    token: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    override: {
        override: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    hashed: false
};
const DesignTokenContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(defaultConfig);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
;
function isStableColor(color) {
    return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
    const { r: fR, g: fG, b: fB, a: originAlpha } = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](frontColor).toRgb();
    if (originAlpha < 1) {
        return frontColor;
    }
    const { r: bR, g: bG, b: bB } = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](backgroundColor).toRgb();
    for(let fA = 0.01; fA <= 1; fA += 0.01){
        const r = Math.round((fR - bR * (1 - fA)) / fA);
        const g = Math.round((fG - bG * (1 - fA)) / fA);
        const b = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]({
                r,
                g,
                b,
                a: Math.round(fA * 100) / 100
            }).toRgbString();
        }
    }
    // fallback
    /* istanbul ignore next */ return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]({
        r: fR,
        g: fG,
        b: fB,
        a: 1
    }).toRgbString();
}
const __TURBOPACK__default__export__ = getAlphaColor;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/alias.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>formatToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)");
;
;
;
function formatToken(derivativeToken) {
    const { override, ...restToken } = derivativeToken;
    const overrideTokens = {
        ...override
    };
    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).forEach((token)=>{
        delete overrideTokens[token];
    });
    const mergedToken = {
        ...restToken,
        ...overrideTokens
    };
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    // Motion
    if (mergedToken.motion === false) {
        const fastDuration = '0s';
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
    }
    // Generate alias token
    const aliasToken = {
        ...mergedToken,
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: 'none',
        linkHoverDecoration: 'none',
        linkFocusDecoration: 'none',
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
        boxShadowCard: "\n      0 1px 2px -2px ".concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.16)').toRgbString(), ",\n      0 3px 6px 0 ").concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.12)').toRgbString(), ",\n      0 5px 12px 4px ").concat(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"]('rgba(0, 0, 0, 0.09)').toRgbString(), "\n    "),
        boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
        boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
        boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
        // Override AliasToken
        ...overrideTokens
    };
    return aliasToken;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useToken,
    "getComputedToken",
    ()=>getComputedToken,
    "ignore",
    ()=>ignore,
    "unitless",
    ()=>unitless
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js [app-client] (ecmascript) <export default as useCacheToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/version/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/default/theme.js [app-client] (ecmascript) <export default as defaultTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/context.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/seed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/alias.js [app-client] (ecmascript)");
;
;
;
;
;
;
const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
};
const ignore = {
    motionBase: true,
    motionUnit: true
};
const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme)=>{
    const derivativeToken = theme.getDerivativeToken(originToken);
    const { override, ...components } = overrideToken;
    // Merge with override
    let mergedDerivativeToken = {
        ...derivativeToken,
        override
    };
    // Format if needed
    mergedDerivativeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$alias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedDerivativeToken);
    if (components) {
        Object.entries(components).forEach((param)=>{
            let [key, value] = param;
            const { theme: componentTheme, ...componentTokens } = value;
            let mergedComponentToken = componentTokens;
            if (componentTheme) {
                mergedComponentToken = getComputedToken({
                    ...mergedDerivativeToken,
                    ...componentTokens
                }, {
                    override: componentTokens
                }, componentTheme);
            }
            mergedDerivativeToken[key] = mergedComponentToken;
        });
    }
    return mergedDerivativeToken;
};
function useToken() {
    const { token: rootDesignToken, hashed, theme, override, cssVar: ctxCssVar, zeroRuntime } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DesignTokenContext"]);
    const cssVar = {
        prefix: (ctxCssVar === null || ctxCssVar === void 0 ? void 0 : ctxCssVar.prefix) || 'ant',
        key: (ctxCssVar === null || ctxCssVar === void 0 ? void 0 : ctxCssVar.key) || 'css-var-root'
    };
    const salt = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$version$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], "-").concat(hashed || '');
    const mergedTheme = theme || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$default$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultTheme$3e$__["defaultTheme"];
    const [token, hashId, realToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$hooks$2f$useCacheToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCacheToken$3e$__["useCacheToken"])(mergedTheme, [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$seed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        rootDesignToken
    ], {
        salt,
        override,
        getComputedToken,
        cssVar: {
            ...cssVar,
            unitless,
            ignore,
            preserve
        }
    });
    return [
        mergedTheme,
        realToken,
        hashed ? hashId : '',
        token,
        cssVar,
        !!zeroRuntime
    ];
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genComponentStyleHook",
    ()=>genComponentStyleHook,
    "genCssVar",
    ()=>genCssVar,
    "genStyleHooks",
    ()=>genStyleHooks,
    "genSubStyleComponent",
    ()=>genSubStyleComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/genStyleUtils.js [app-client] (ecmascript) <export default as genStyleUtils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
;
;
;
;
;
const { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genStyleUtils$3e$__["genStyleUtils"])({
    usePrefix: ()=>{
        const { getPrefixCls, iconPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        const rootPrefixCls = getPrefixCls();
        return {
            rootPrefixCls,
            iconPrefixCls
        };
    },
    useToken: ()=>{
        const [theme, realToken, hashId, token, cssVar, zeroRuntime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        return {
            theme,
            realToken,
            hashId,
            token,
            cssVar,
            zeroRuntime
        };
    },
    useCSP: ()=>{
        const { csp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
        return csp !== null && csp !== void 0 ? csp : {};
    },
    getResetStyles: (token, config)=>{
        const linkStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genLinkStyle"])(token);
        var _config_prefix_iconPrefixCls;
        return [
            linkStyle,
            {
                '&': linkStyle
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genIconStyle"])((_config_prefix_iconPrefixCls = config === null || config === void 0 ? void 0 : config.prefix.iconPrefixCls) !== null && _config_prefix_iconPrefixCls !== void 0 ? _config_prefix_iconPrefixCls : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultIconPrefixCls"])
        ];
    },
    getCommonStyle: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCommonStyle"],
    getCompUnitless: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unitless"]
});
const genCssVar = (antCls, componentAbbr)=>{
    const cssPrefix = "--".concat(antCls.replace('.', ''), "-").concat(componentAbbr, "-");
    return function(name) {
        let withVar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const raw = "".concat(cssPrefix).concat(name);
        return withVar ? "var(".concat(raw, ")") : raw;
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
const genWaveStyle = (token)=>{
    const { componentCls, colorPrimary } = token;
    return {
        [componentCls]: {
            position: 'absolute',
            background: 'transparent',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            color: "var(--wave-color, ".concat(colorPrimary, ")"),
            boxShadow: "0 0 0 0 currentcolor",
            opacity: 0.2,
            // =================== Motion ===================
            '&.wave-motion-appear': {
                transition: [
                    "box-shadow 0.4s ".concat(token.motionEaseOutCirc),
                    "opacity 2s ".concat(token.motionEaseOutCirc)
                ].join(','),
                '&-active': {
                    boxShadow: "0 0 0 6px currentcolor",
                    opacity: 0
                },
                '&.wave-quick': {
                    transition: [
                        "box-shadow ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
                        "opacity ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
                    ].join(',')
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genComponentStyleHook"])('Wave', genWaveStyle);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TARGET_CLS",
    ()=>TARGET_CLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
;
const TARGET_CLS = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"], "-wave-target");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTargetWaveColor",
    ()=>getTargetWaveColor,
    "isValidWaveColor",
    ()=>isValidWaveColor
]);
function isValidWaveColor(color) {
    return color && typeof color === 'string' && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== 'transparent' && color !== 'canvastext';
}
function getTargetWaveColor(node) {
    let colorSource = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    const style = getComputedStyle(node);
    const { borderTopColor, borderColor, backgroundColor } = style;
    if (colorSource && isValidWaveColor(style[colorSource])) {
        return style[colorSource];
    }
    var _find;
    return (_find = [
        borderTopColor,
        borderColor,
        backgroundColor
    ].find(isValidWaveColor)) !== null && _find !== void 0 ? _find : null;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/WaveEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/React/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props)=>{
    const { className, target, component, colorSource } = props;
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ===================== Effect =====================
    const [color, setWaveColor] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [borderRadius, setBorderRadius] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [left, setLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [top, setTop] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [enabled, setEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const waveStyle = {
        left,
        top,
        width,
        height,
        borderRadius: borderRadius.map((radius)=>"".concat(radius, "px")).join(' ')
    };
    if (color) {
        waveStyle['--wave-color'] = color;
    }
    function syncPos() {
        const nodeStyle = getComputedStyle(target);
        // Get wave color from target
        setWaveColor((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTargetWaveColor"])(target, colorSource));
        const isStatic = nodeStyle.position === 'static';
        // Rect
        const { borderLeftWidth, borderTopWidth } = nodeStyle;
        setLeft(isStatic ? target.offsetLeft : validateNum(-Number.parseFloat(borderLeftWidth)));
        setTop(isStatic ? target.offsetTop : validateNum(-Number.parseFloat(borderTopWidth)));
        setWidth(target.offsetWidth);
        setHeight(target.offsetHeight);
        // Get border radius
        const { borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius } = nodeStyle;
        setBorderRadius([
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomRightRadius,
            borderBottomLeftRadius
        ].map((radius)=>validateNum(Number.parseFloat(radius))));
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "WaveEffect.useEffect": ()=>{
            if (target) {
                // We need delay to check position here
                // since UI may change after click
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    "WaveEffect.useEffect.id": ()=>{
                        syncPos();
                        setEnabled(true);
                    }
                }["WaveEffect.useEffect.id"]);
                // Add resize observer to follow size
                let resizeObserver;
                if (typeof ResizeObserver !== 'undefined') {
                    resizeObserver = new ResizeObserver(syncPos);
                    resizeObserver.observe(target);
                }
                return ({
                    "WaveEffect.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(id);
                        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
                    }
                })["WaveEffect.useEffect"];
            }
        }
    }["WaveEffect.useEffect"], [
        target
    ]);
    if (!enabled) {
        return null;
    }
    const isSmallComponent = (component === 'Checkbox' || component === 'Radio') && (target === null || target === void 0 ? void 0 : target.classList.contains(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_CLS"]));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionAppear: true,
        motionName: "wave-motion",
        motionDeadline: 5000,
        onAppearEnd: (_, event)=>{
            if (event.deadline || event.propertyName === 'opacity') {
                var _divRef_current;
                const holder = (_divRef_current = divRef.current) === null || _divRef_current === void 0 ? void 0 : _divRef_current.parentElement;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unmount"])(holder).then(()=>{
                    holder === null || holder === void 0 ? void 0 : holder.remove();
                });
            }
            return false;
        }
    }, (param, ref)=>{
        let { className: motionClassName } = param;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(divRef, ref),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, motionClassName, {
                'wave-quick': isSmallComponent
            }),
            style: waveStyle
        });
    });
};
const showWaveEffect = (target, info)=>{
    var _target_querySelector;
    const { component } = info;
    // Skip for unchecked checkbox
    if (component === 'Checkbox' && !((_target_querySelector = target.querySelector('input')) === null || _target_querySelector === void 0 ? void 0 : _target_querySelector.checked)) {
        return;
    }
    // Create holder
    const holder = document.createElement('div');
    holder.style.position = 'absolute';
    holder.style.left = '0px';
    holder.style.top = '0px';
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$React$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](WaveEffect, {
        ...info,
        target: target
    }), holder);
};
const __TURBOPACK__default__export__ = showWaveEffect;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/useWave.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/WaveEffect.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const useWave = (nodeRef, className, component, colorSource)=>{
    const { wave } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const [, token, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "useWave.useEvent[showWave]": (event)=>{
            const node = nodeRef.current;
            if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node) {
                return;
            }
            const targetNode = node.querySelector(".".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TARGET_CLS"])) || node;
            const { showEffect } = wave || {};
            // Customize wave effect
            (showEffect || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$WaveEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(targetNode, {
                className,
                token,
                component,
                event,
                hashId,
                colorSource
            });
        }
    }["useWave.useEvent[showWave]"]);
    const rafId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // Merge trigger event into one for each frame
    const showDebounceWave = (event)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(rafId.current);
        rafId.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
            showWave(event);
        });
    };
    return showDebounceWave;
};
const __TURBOPACK__default__export__ = useWave;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/isVisible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/useWave.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const Wave = (props)=>{
    const { children, disabled, component, colorSource } = props;
    const { getPrefixCls } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ============================== Style ===============================
    const prefixCls = getPrefixCls('wave');
    const [, hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // =============================== Wave ===============================
    const showWave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$useWave$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(containerRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId), component, colorSource);
    // ============================== Effect ==============================
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Wave.useEffect": ()=>{
            const node = containerRef.current;
            if (!node || node.nodeType !== window.Node.ELEMENT_NODE || disabled) {
                return;
            }
            // Click handler
            const onClick = {
                "Wave.useEffect.onClick": (e)=>{
                    // Fix radio button click twice
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.target) || // No need wave
                    !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') && !node.className.includes('disabled:') || node.getAttribute('aria-disabled') === 'true' || node.className.includes('-leave')) {
                        return;
                    }
                    showWave(e);
                }
            }["Wave.useEffect.onClick"];
            // Bind events
            node.addEventListener('click', onClick, true);
            return ({
                "Wave.useEffect": ()=>{
                    node.removeEventListener('click', onClick, true);
                }
            })["Wave.useEffect"];
        }
    }["Wave.useEffect"], [
        disabled
    ]);
    // ============================== Render ==============================
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children !== null && children !== void 0 ? children : null;
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children), containerRef) : containerRef;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        ref
    });
};
if ("TURBOPACK compile-time truthy", 1) {
    Wave.displayName = 'Wave';
}
const __TURBOPACK__default__export__ = Wave;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisabledContextProvider",
    ()=>DisabledContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const DisabledContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
const DisabledContextProvider = (param)=>{
    let { children, disabled } = param;
    const originDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DisabledContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DisabledContext.Provider, {
        value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
};
const __TURBOPACK__default__export__ = DisabledContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SizeContextProvider",
    ()=>SizeContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const SizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const SizeContextProvider = (param)=>{
    let { children, size } = param;
    const originSize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SizeContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SizeContext.Provider, {
        value: size || originSize
    }, children);
};
const __TURBOPACK__default__export__ = SizeContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
;
;
const useSize = (customSize)=>{
    const size = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedSize = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSize.useMemo[mergedSize]": ()=>{
            if (!customSize) {
                return size;
            }
            if (typeof customSize === 'string') {
                return customSize !== null && customSize !== void 0 ? customSize : size;
            }
            if (typeof customSize === 'function') {
                return customSize(size);
            }
            return size;
        }
    }["useSize.useMemo[mergedSize]"], [
        customSize,
        size
    ]);
    return mergedSize;
};
const __TURBOPACK__default__export__ = useSize;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrientation",
    ()=>useOrientation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const isValidOrientation = (orientation)=>{
    return orientation === 'horizontal' || orientation === 'vertical';
};
const useOrientation = (orientation, vertical, legacyDirection)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOrientation.useMemo": ()=>{
            const validOrientation = isValidOrientation(orientation);
            let mergedOrientation;
            if (validOrientation) {
                mergedOrientation = orientation;
            } else if (typeof vertical === 'boolean') {
                mergedOrientation = vertical ? 'vertical' : 'horizontal';
            } else {
                const validLegacyDirection = isValidOrientation(legacyDirection);
                mergedOrientation = validLegacyDirection ? legacyDirection : 'horizontal';
            }
            return [
                mergedOrientation,
                mergedOrientation === 'vertical'
            ];
        }
    }["useOrientation.useMemo"], [
        legacyDirection,
        orientation,
        vertical
    ]);
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
const genSpaceCompactStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-block': {
                display: 'flex',
                width: '100%'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-rtl': {
                direction: 'rtl'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Compact'
], (token)=>[
        genSpaceCompactStyle(token)
    ], ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoCompactStyle",
    ()=>NoCompactStyle,
    "SpaceCompactItemContext",
    ()=>SpaceCompactItemContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCompactItemContext",
    ()=>useCompactItemContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/compact.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SpaceCompactItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const useCompactItemContext = (prefixCls, direction)=>{
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const compactItemClassnames = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompactItemContext.useMemo[compactItemClassnames]": ()=>{
            if (!compactItemContext) {
                return '';
            }
            const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
            const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-compact").concat(separator, "item"), {
                ["".concat(prefixCls, "-compact").concat(separator, "first-item")]: isFirstItem,
                ["".concat(prefixCls, "-compact").concat(separator, "last-item")]: isLastItem,
                ["".concat(prefixCls, "-compact").concat(separator, "item-rtl")]: direction === 'rtl'
            });
        }
    }["useCompactItemContext.useMemo[compactItemClassnames]"], [
        prefixCls,
        direction,
        compactItemContext
    ]);
    return {
        compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
        compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
        compactItemClassnames
    };
};
const NoCompactStyle = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: null
    }, children);
};
const CompactItem = (props)=>{
    const { children, ...others } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SpaceCompactItemContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "CompactItem.useMemo": ()=>others
        }["CompactItem.useMemo"], [
            others
        ])
    }, children);
};
const Compact = (props)=>{
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { size, direction, orientation, block, prefixCls: customizePrefixCls, className, rootClassName, children, vertical, ...restProps } = props;
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Space.Compact');
        warning.deprecated(!direction, 'direction', 'orientation');
    }
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, direction);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Compact.useSize[mergedSize]": (ctx)=>size !== null && size !== void 0 ? size : ctx
    }["Compact.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
    const [hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const clx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, {
        ["".concat(prefixCls, "-rtl")]: directionConfig === 'rtl',
        ["".concat(prefixCls, "-block")]: block,
        ["".concat(prefixCls, "-vertical")]: mergedVertical
    }, className, rootClassName);
    const compactItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SpaceCompactItemContext);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    const nodes = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Compact.useMemo[nodes]": ()=>childNodes.map({
                "Compact.useMemo[nodes]": (child, i)=>{
                    const key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(prefixCls, "-item-").concat(i);
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CompactItem, {
                        key: key,
                        compactSize: mergedSize,
                        compactDirection: mergedOrientation,
                        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
                        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
                    }, child);
                }
            }["Compact.useMemo[nodes]"])
    }["Compact.useMemo[nodes]"], [
        childNodes,
        compactItemContext,
        mergedOrientation,
        mergedSize,
        prefixCls
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: clx,
        ...restProps
    }, nodes);
};
const __TURBOPACK__default__export__ = Compact;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/button-group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupSizeContext",
    ()=>GroupSizeContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
"use client";
;
;
;
;
;
const GroupSizeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const ButtonGroup = (props)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, size, className, ...others } = props;
    const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
    const [, , hashId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const sizeCls = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ButtonGroup.useMemo[sizeCls]": ()=>{
            switch(size){
                case 'large':
                    return 'lg';
                case 'small':
                    return 'sm';
                default:
                    return '';
            }
        }
    }["ButtonGroup.useMemo[sizeCls]"], [
        size
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button.Group');
        warning.deprecated(false, 'Button.Group', 'Space.Compact');
        ("TURBOPACK compile-time truthy", 1) ? warning(!size || [
            'large',
            'small',
            'middle'
        ].includes(size), 'usage', 'Invalid prop `size`.') : "TURBOPACK unreachable";
    }
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        ["".concat(prefixCls, "-").concat(sizeCls)]: sizeCls,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, className, hashId);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](GroupSizeContext.Provider, {
        value: size
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        className: classes
    }));
};
const __TURBOPACK__default__export__ = ButtonGroup;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetColors",
    ()=>PresetColors
]);
const PresetColors = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold'
];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_ButtonColorTypes",
    ()=>_ButtonColorTypes,
    "_ButtonVariantTypes",
    ()=>_ButtonVariantTypes,
    "convertLegacyProps",
    ()=>convertLegacyProps,
    "isString",
    ()=>isString,
    "isTwoCNChar",
    ()=>isTwoCNChar,
    "isUnBorderedButtonVariant",
    ()=>isUnBorderedButtonVariant,
    "spaceChildren",
    ()=>spaceChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type) {
    if (type === 'danger') {
        return {
            danger: true
        };
    }
    return {
        type
    };
}
function isString(str) {
    return typeof str === 'string';
}
function isUnBorderedButtonVariant(type) {
    return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted, style, className) {
    if (child === null || child === undefined || child === '') {
        return;
    }
    const SPACE = needInserted ? ' ' : '';
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, (oriProps)=>({
                ...oriProps,
                children: oriProps.children.split('').join(SPACE),
                className,
                style
            }));
    }
    if (isString(child)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: className,
            style: style
        }, isTwoCNChar(child) ? child.split('').join(SPACE) : child);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(child)) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: className,
            style: style
        }, child);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, (oriProps)=>({
            ...oriProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, className) || undefined,
            style: {
                ...oriProps.style,
                ...style
            }
        }));
}
function spaceChildren(children, needInserted, style, className) {
    let isPrevChildPure = false;
    const childList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, (child)=>{
        const type = typeof child;
        const isCurrentChildPure = type === 'string' || type === 'number';
        if (isPrevChildPure && isCurrentChildPure) {
            const lastIndex = childList.length - 1;
            const lastChild = childList[lastIndex];
            childList[lastIndex] = "".concat(lastChild).concat(child);
        } else {
            childList.push(child);
        }
        isPrevChildPure = isCurrentChildPure;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(childList, (child)=>splitCNCharsBySpace(child, needInserted, style, className));
}
const _ButtonTypes = [
    'default',
    'primary',
    'dashed',
    'link',
    'text'
];
const _ButtonShapes = [
    'default',
    'circle',
    'round',
    'square'
];
const _ButtonHTMLTypes = [
    'submit',
    'button',
    'reset'
];
const _ButtonVariantTypes = [
    'outlined',
    'dashed',
    'solid',
    'filled',
    'text',
    'link'
];
const _ButtonColorTypes = [
    'default',
    'primary',
    'danger'
].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"]));
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
const IconWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { className, style, children, prefixCls } = props;
    const iconWrapperCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-icon"), className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ref: ref,
        className: iconWrapperCls,
        style: style
    }, children);
});
const __TURBOPACK__default__export__ = IconWrapper;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/DefaultLoadingIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const InnerLoadingIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls, className, style, iconClassName } = props;
    const mergedIconCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-loading-icon"), className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        className: mergedIconCls,
        style: style,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: iconClassName
    }));
});
const getCollapsedWidth = ()=>({
        width: 0,
        opacity: 0,
        transform: 'scale(0)'
    });
const getRealWidth = (node)=>({
        width: node.scrollWidth,
        opacity: 1,
        transform: 'scale(1)'
    });
const DefaultLoadingIcon = (props)=>{
    const { prefixCls, loading, existIcon, className, style, mount } = props;
    const visible = !!loading;
    if (existIcon) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: className,
            style: style
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: visible,
        // Used for minus flex gap style only
        motionName: "".concat(prefixCls, "-loading-icon-motion"),
        motionAppear: !mount,
        motionEnter: !mount,
        motionLeave: !mount,
        removeOnLeave: true,
        onAppearStart: getCollapsedWidth,
        onAppearActive: getRealWidth,
        onEnterStart: getCollapsedWidth,
        onEnterActive: getRealWidth,
        onLeaveStart: getRealWidth,
        onLeaveActive: getCollapsedWidth
    }, (param, ref)=>{
        let { className: motionCls, style: motionStyle } = param;
        const mergedStyle = {
            ...style,
            ...motionStyle
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InnerLoadingIcon, {
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, motionCls),
            style: mergedStyle,
            ref: ref
        });
    });
};
const __TURBOPACK__default__export__ = DefaultLoadingIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genButtonBorderStyle = (buttonTypeCls, borderColor)=>({
        // Border
        ["> span, > ".concat(buttonTypeCls)]: {
            '&:not(:last-child)': {
                ["&, & > ".concat(buttonTypeCls)]: {
                    '&:not(:disabled)': {
                        borderInlineEndColor: borderColor
                    }
                }
            },
            '&:not(:first-child)': {
                ["&, & > ".concat(buttonTypeCls)]: {
                    '&:not(:disabled)': {
                        borderInlineStartColor: borderColor
                    }
                }
            }
        }
    });
const genGroupStyle = (token)=>{
    const { componentCls, fontSize, lineWidth, groupBorderColor, colorErrorHover } = token;
    return {
        ["".concat(componentCls, "-group")]: [
            {
                position: 'relative',
                display: 'inline-flex',
                // Border
                ["> span, > ".concat(componentCls)]: {
                    '&:not(:last-child)': {
                        ["&, & > ".concat(componentCls)]: {
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0
                        }
                    },
                    '&:not(:first-child)': {
                        marginInlineStart: token.calc(lineWidth).mul(-1).equal(),
                        ["&, & > ".concat(componentCls)]: {
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0
                        }
                    }
                },
                [componentCls]: {
                    position: 'relative',
                    zIndex: 1,
                    '&:hover, &:focus, &:active': {
                        zIndex: 2
                    },
                    '&[disabled]': {
                        zIndex: 0
                    }
                },
                ["".concat(componentCls, "-icon-only")]: {
                    fontSize
                }
            },
            // Border Color
            genButtonBorderStyle("".concat(componentCls, "-primary"), groupBorderColor),
            genButtonBorderStyle("".concat(componentCls, "-danger"), colorErrorHover)
        ]
    };
};
const __TURBOPACK__default__export__ = genGroupStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AggregationColor",
    ()=>AggregationColor,
    "getHex",
    ()=>getHex,
    "toHexFormat",
    ()=>toHexFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/createClass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
;
;
;
const toHexFormat = (value, alpha)=>(value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, '').slice(0, alpha ? 8 : 6)) || '';
const getHex = (value, alpha)=>value ? toHexFormat(value, alpha) : '';
let AggregationColor = /*#__PURE__*/ function() {
    function AggregationColor(color) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, AggregationColor);
        this.cleared = false;
        // Clone from another AggregationColor
        if (color instanceof AggregationColor) {
            var _color_colors;
            this.metaColor = color.metaColor.clone();
            this.colors = (_color_colors = color.colors) === null || _color_colors === void 0 ? void 0 : _color_colors.map((info)=>({
                    color: new AggregationColor(info.color),
                    percent: info.percent
                }));
            this.cleared = color.cleared;
            return;
        }
        const isArray = Array.isArray(color);
        if (isArray && color.length) {
            this.colors = color.map((param)=>{
                let { color: c, percent } = param;
                return {
                    color: new AggregationColor(c),
                    percent
                };
            });
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](this.colors[0].color.metaColor);
        } else {
            this.metaColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](isArray ? '' : color);
        }
        if (!color || isArray && !this.colors) {
            this.metaColor = this.metaColor.setA(0);
            this.cleared = true;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(AggregationColor, [
        {
            key: "toHsb",
            value: function toHsb() {
                return this.metaColor.toHsb();
            }
        },
        {
            key: "toHsbString",
            value: function toHsbString() {
                return this.metaColor.toHsbString();
            }
        },
        {
            key: "toHex",
            value: function toHex() {
                return getHex(this.toHexString(), this.metaColor.a < 1);
            }
        },
        {
            key: "toHexString",
            value: function toHexString() {
                return this.metaColor.toHexString();
            }
        },
        {
            key: "toRgb",
            value: function toRgb() {
                return this.metaColor.toRgb();
            }
        },
        {
            key: "toRgbString",
            value: function toRgbString() {
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "isGradient",
            value: function isGradient() {
                return !!this.colors && !this.cleared;
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return this.colors || [
                    {
                        color: this,
                        percent: 0
                    }
                ];
            }
        },
        {
            key: "toCssString",
            value: function toCssString() {
                const { colors } = this;
                // CSS line-gradient
                if (colors) {
                    const colorsStr = colors.map((c)=>"".concat(c.color.toRgbString(), " ").concat(c.percent, "%")).join(', ');
                    return "linear-gradient(90deg, ".concat(colorsStr, ")");
                }
                return this.metaColor.toRgbString();
            }
        },
        {
            key: "equals",
            value: function equals(color) {
                if (!color || this.isGradient() !== color.isGradient()) {
                    return false;
                }
                if (!this.isGradient()) {
                    return this.toHexString() === color.toHexString();
                }
                return this.colors.length === color.colors.length && this.colors.every((c, i)=>{
                    const target = color.colors[i];
                    return c.percent === target.percent && c.color.equals(target.color);
                });
            }
        }
    ]);
}();
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTransitionName",
    ()=>getTransitionName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
;
// ================== Collapse Motion ==================
const getCollapsedHeight = ()=>({
        height: 0,
        opacity: 0
    });
const getRealHeight = (node)=>{
    const { scrollHeight } = node;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
const getCurrentHeight = (node)=>({
        height: node ? node.offsetHeight : 0
    });
const skipOpacityTransition = (_, event)=>(event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function() {
    let rootCls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrefixCls"];
    return {
        motionName: "".concat(rootCls, "-motion-collapse"),
        onAppearStart: getCollapsedHeight,
        onEnterStart: getCollapsedHeight,
        onAppearActive: getRealHeight,
        onEnterActive: getRealHeight,
        onLeaveStart: getCurrentHeight,
        onLeaveActive: getCollapsedHeight,
        onAppearEnd: skipOpacityTransition,
        onEnterEnd: skipOpacityTransition,
        onLeaveEnd: skipOpacityTransition,
        motionDeadline: 500
    };
};
const _SelectPlacements = [
    'bottomLeft',
    'bottomRight',
    'topLeft',
    'topRight'
];
const getTransitionName = (rootPrefixCls, motion, transitionName)=>{
    if (transitionName !== undefined) {
        return transitionName;
    }
    return "".concat(rootPrefixCls, "-").concat(motion);
};
;
const __TURBOPACK__default__export__ = initCollapseMotion;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/CollapsePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/collapse/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const CollapsePanel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse.Panel');
        warning.deprecated(!('disabled' in props), 'disabled', 'collapsible="disabled"');
    }
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className, showArrow = true } = props;
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const collapsePanelClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-no-arrow")]: !showArrow
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Panel, {
        ref: ref,
        ...props,
        prefixCls: prefixCls,
        className: collapsePanelClassName
    });
});
const __TURBOPACK__default__export__ = CollapsePanel;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genCollapseMotion = (token)=>({
        [token.componentCls]: {
            // For common/openAnimation
            ["".concat(token.antCls, "-motion-collapse-legacy")]: {
                overflow: 'hidden',
                '&-active': {
                    transition: "height ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, ",\n        opacity ").concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, " !important")
                }
            },
            ["".concat(token.antCls, "-motion-collapse")]: {
                overflow: 'hidden',
                transition: "height ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, ",\n        opacity ").concat(token.motionDurationMid, " ").concat(token.motionEaseInOut, " !important")
            }
        }
    });
const __TURBOPACK__default__export__ = genCollapseMotion;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCollapseMotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genBaseStyle",
    ()=>genBaseStyle,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
const genBaseStyle = (token)=>{
    const { componentCls, contentBg, padding, headerBg, headerPadding, collapseHeaderPaddingSM, collapseHeaderPaddingLG, collapsePanelBorderRadius, lineWidth, lineType, colorBorder, colorText, colorTextHeading, colorTextDisabled, fontSizeLG, lineHeight, lineHeightLG, marginSM, paddingSM, paddingLG, paddingXS, motionDurationSlow, fontSizeIcon, contentPadding, fontHeight, fontHeightLG } = token;
    const borderBase = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorBorder);
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            backgroundColor: headerBg,
            border: borderBase,
            borderRadius: collapsePanelBorderRadius,
            '&-rtl': {
                direction: 'rtl'
            },
            ["& > ".concat(componentCls, "-item")]: {
                borderBottom: borderBase,
                '&:first-child': {
                    ["\n            &,\n            & > ".concat(componentCls, "-header")]: {
                        borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " 0 0")
                    }
                },
                '&:last-child': {
                    ["\n            &,\n            & > ".concat(componentCls, "-header")]: {
                        borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius))
                    }
                },
                ["> ".concat(componentCls, "-header")]: {
                    position: 'relative',
                    // Compatible with old version of antd, should remove in next version
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    padding: headerPadding,
                    color: colorTextHeading,
                    lineHeight,
                    cursor: 'pointer',
                    transition: "all ".concat(motionDurationSlow, ", visibility 0s"),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                    ["> ".concat(componentCls, "-title")]: {
                        flex: 'auto'
                    },
                    // >>>>> Arrow
                    ["".concat(componentCls, "-expand-icon")]: {
                        height: fontHeight,
                        display: 'flex',
                        alignItems: 'center',
                        marginInlineEnd: marginSM
                    },
                    ["".concat(componentCls, "-arrow")]: {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetIcon"])(),
                        fontSize: fontSizeIcon,
                        // when `transform: rotate()` is applied to icon's root element
                        transition: "transform ".concat(motionDurationSlow),
                        // when `transform: rotate()` is applied to icon's child element
                        svg: {
                            transition: "transform ".concat(motionDurationSlow)
                        }
                    },
                    // >>>>> Text
                    ["".concat(componentCls, "-title")]: {
                        marginInlineEnd: 'auto'
                    }
                },
                ["".concat(componentCls, "-collapsible-header")]: {
                    cursor: 'default',
                    ["".concat(componentCls, "-title")]: {
                        flex: 'none',
                        cursor: 'pointer'
                    },
                    ["".concat(componentCls, "-expand-icon")]: {
                        cursor: 'pointer'
                    }
                },
                ["".concat(componentCls, "-collapsible-icon")]: {
                    cursor: 'unset',
                    ["".concat(componentCls, "-expand-icon")]: {
                        cursor: 'pointer'
                    }
                }
            },
            ["".concat(componentCls, "-panel")]: {
                color: colorText,
                backgroundColor: contentBg,
                borderTop: borderBase,
                ["& > ".concat(componentCls, "-body")]: {
                    padding: contentPadding
                },
                '&-hidden': {
                    display: 'none'
                }
            },
            '&-small': {
                ["> ".concat(componentCls, "-item")]: {
                    ["> ".concat(componentCls, "-header")]: {
                        padding: collapseHeaderPaddingSM,
                        paddingInlineStart: paddingXS,
                        ["> ".concat(componentCls, "-expand-icon")]: {
                            // Arrow offset
                            marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal()
                        }
                    },
                    ["> ".concat(componentCls, "-panel > ").concat(componentCls, "-body")]: {
                        padding: paddingSM
                    }
                }
            },
            '&-large': {
                ["> ".concat(componentCls, "-item")]: {
                    fontSize: fontSizeLG,
                    lineHeight: lineHeightLG,
                    ["> ".concat(componentCls, "-header")]: {
                        padding: collapseHeaderPaddingLG,
                        paddingInlineStart: padding,
                        ["> ".concat(componentCls, "-expand-icon")]: {
                            height: fontHeightLG,
                            // Arrow offset
                            marginInlineStart: token.calc(paddingLG).sub(padding).equal()
                        }
                    },
                    ["> ".concat(componentCls, "-panel > ").concat(componentCls, "-body")]: {
                        padding: paddingLG
                    }
                }
            },
            ["".concat(componentCls, "-item:last-child")]: {
                borderBottom: 0,
                ["> ".concat(componentCls, "-panel")]: {
                    borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(collapsePanelBorderRadius))
                }
            },
            ["& ".concat(componentCls, "-item-disabled > ").concat(componentCls, "-header")]: {
                ["\n          &,\n          & > .arrow\n        "]: {
                    color: colorTextDisabled,
                    cursor: 'not-allowed'
                }
            },
            // ========================== Icon Placement ==========================
            ["&".concat(componentCls, "-icon-placement-end")]: {
                ["& > ".concat(componentCls, "-item")]: {
                    ["> ".concat(componentCls, "-header")]: {
                        ["".concat(componentCls, "-expand-icon")]: {
                            order: 1,
                            marginInlineEnd: 0,
                            marginInlineStart: marginSM
                        }
                    }
                }
            }
        }
    };
};
const genArrowStyle = (token)=>{
    const { componentCls } = token;
    const fixedSelector = "> ".concat(componentCls, "-item > ").concat(componentCls, "-header ").concat(componentCls, "-arrow");
    return {
        ["".concat(componentCls, "-rtl")]: {
            [fixedSelector]: {
                transform: "rotate(180deg)"
            }
        }
    };
};
const genBorderlessStyle = (token)=>{
    const { componentCls, headerBg, borderlessContentPadding, borderlessContentBg, colorBorder } = token;
    return {
        ["".concat(componentCls, "-borderless")]: {
            backgroundColor: headerBg,
            border: 0,
            ["> ".concat(componentCls, "-item")]: {
                borderBottom: "1px solid ".concat(colorBorder)
            },
            ["\n        > ".concat(componentCls, "-item:last-child,\n        > ").concat(componentCls, "-item:last-child ").concat(componentCls, "-header\n      ")]: {
                borderRadius: 0
            },
            ["> ".concat(componentCls, "-item:last-child")]: {
                borderBottom: 0
            },
            ["> ".concat(componentCls, "-item > ").concat(componentCls, "-panel")]: {
                backgroundColor: borderlessContentBg,
                borderTop: 0
            },
            ["> ".concat(componentCls, "-item > ").concat(componentCls, "-panel > ").concat(componentCls, "-body")]: {
                padding: borderlessContentPadding
            }
        }
    };
};
const genGhostStyle = (token)=>{
    const { componentCls, paddingSM } = token;
    return {
        ["".concat(componentCls, "-ghost")]: {
            backgroundColor: 'transparent',
            border: 0,
            ["> ".concat(componentCls, "-item")]: {
                borderBottom: 0,
                ["> ".concat(componentCls, "-panel")]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    ["> ".concat(componentCls, "-body")]: {
                        paddingBlock: paddingSM
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        headerPadding: "".concat(token.paddingSM, "px ").concat(token.padding, "px"),
        headerBg: token.colorFillAlter,
        contentPadding: "".concat(token.padding, "px 16px"),
        // Fixed Value
        contentBg: token.colorBgContainer,
        borderlessContentPadding: "".concat(token.paddingXXS, "px 16px ").concat(token.padding, "px"),
        borderlessContentBg: 'transparent'
    });
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Collapse', (token)=>{
    const collapseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        collapseHeaderPaddingSM: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXS), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)),
        collapseHeaderPaddingLG: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingLG)),
        collapsePanelBorderRadius: token.borderRadiusLG
    });
    return [
        genBaseStyle(collapseToken),
        genBorderlessStyle(collapseToken),
        genGhostStyle(collapseToken),
        genArrowStyle(collapseToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(collapseToken)
    ];
}, prepareComponentToken);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/Collapse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/collapse/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/CollapsePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Collapse = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction, expandIcon: contextExpandIcon, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('collapse');
    const { prefixCls: customizePrefixCls, className, rootClassName, style, bordered = true, ghost, size: customizeSize, expandIconPlacement, expandIconPosition, children, destroyInactivePanel, destroyOnHidden, expandIcon, classNames, styles } = props;
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Collapse.useSize[mergedSize]": (ctx)=>{
            var _ref;
            return (_ref = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _ref !== void 0 ? _ref : 'middle';
        }
    }["Collapse.useSize[mergedSize]"]);
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    var _ref;
    const mergedPlacement = (_ref = expandIconPlacement !== null && expandIconPlacement !== void 0 ? expandIconPlacement : expandIconPosition) !== null && _ref !== void 0 ? _ref : 'start';
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size: mergedSize,
        bordered,
        expandIconPlacement: mergedPlacement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        styles
    ], {
        props: mergedProps
    });
    const mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : contextExpandIcon;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Collapse');
        [
            [
                'destroyInactivePanel',
                'destroyOnHidden'
            ],
            [
                'expandIconPosition',
                'expandIconPlacement'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const renderExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Collapse.useCallback[renderExpandIcon]": function() {
            let panelProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const icon = typeof mergedExpandIcon === 'function' ? mergedExpandIcon(panelProps) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                rotate: panelProps.isActive ? direction === 'rtl' ? -90 : 90 : undefined,
                "aria-label": panelProps.isActive ? 'expanded' : 'collapsed'
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
                "Collapse.useCallback[renderExpandIcon]": ()=>{
                    var _icon_props;
                    return {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(icon === null || icon === void 0 ? void 0 : (_icon_props = icon.props) === null || _icon_props === void 0 ? void 0 : _icon_props.className, "".concat(prefixCls, "-arrow"))
                    };
                }
            }["Collapse.useCallback[renderExpandIcon]"]);
        }
    }["Collapse.useCallback[renderExpandIcon]"], [
        mergedExpandIcon,
        prefixCls,
        direction
    ]);
    const collapseClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-icon-placement-").concat(mergedPlacement), {
        ["".concat(prefixCls, "-borderless")]: !bordered,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-ghost")]: !!ghost,
        ["".concat(prefixCls, "-").concat(mergedSize)]: mergedSize !== 'middle'
    }, contextClassName, className, rootClassName, hashId, cssVarCls, mergedClassNames.root);
    const openMotion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[openMotion]": ()=>({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls),
                motionAppear: false,
                leavedClassName: "".concat(prefixCls, "-panel-hidden")
            })
    }["Collapse.useMemo[openMotion]"], [
        rootPrefixCls,
        prefixCls
    ]);
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Collapse.useMemo[items]": ()=>{
            if (children) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map({
                    "Collapse.useMemo[items]": (child)=>child
                }["Collapse.useMemo[items]"]);
            }
            return null;
        }
    }["Collapse.useMemo[items]"], [
        children
    ]);
    return(/*#__PURE__*/ // @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$collapse$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        openMotion: openMotion,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
            'rootClassName'
        ]),
        expandIcon: renderExpandIcon,
        prefixCls: prefixCls,
        className: collapseClassName,
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        classNames: mergedClassNames,
        styles: mergedStyles,
        destroyOnHidden: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyInactivePanel
    }, items));
});
if ("TURBOPACK compile-time truthy", 1) {
    Collapse.displayName = 'Collapse';
}
const __TURBOPACK__default__export__ = Object.assign(Collapse, {
    Panel: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$CollapsePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/Collapse.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const __TURBOPACK__default__export__ = LocaleContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const locale = {
    placeholder: 'Select time',
    rangePlaceholder: [
        'Start time',
        'End time'
    ]
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/picker/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)");
;
;
// Merge into a locale object
const locale = {
    lang: {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: [
            'Start date',
            'End date'
        ],
        rangeYearPlaceholder: [
            'Start year',
            'End year'
        ],
        rangeQuarterPlaceholder: [
            'Start quarter',
            'End quarter'
        ],
        rangeMonthPlaceholder: [
            'Start month',
            'End month'
        ],
        rangeWeekPlaceholder: [
            'Start week',
            'End week'
        ],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$picker$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    timePickerLocale: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
};
const __TURBOPACK__default__export__ = locale;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/calendar/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/pagination/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/calendar/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/date-picker/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/time-picker/locale/en_US.js [app-client] (ecmascript)");
;
;
;
;
const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
    locale: 'en',
    Pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$pagination$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    DatePicker: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    TimePicker: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$time$2d$picker$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    Calendar: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$calendar$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    global: {
        placeholder: 'Please select',
        close: 'Close',
        sortable: 'sortable'
    },
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        filterEmptyText: 'No filters',
        filterCheckAll: 'Select all items',
        filterSearchPlaceholder: 'Search in filters',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
        selectNone: 'Clear all data',
        selectionAll: 'Select all data',
        sortTitle: 'Sort',
        expand: 'Expand row',
        collapse: 'Collapse row',
        triggerDesc: 'Click to sort descending',
        triggerAsc: 'Click to sort ascending',
        cancelSort: 'Click to cancel sorting'
    },
    Tour: {
        Next: 'Next',
        Previous: 'Previous',
        Finish: 'Finish'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: [
            '',
            ''
        ],
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
        remove: 'Remove',
        selectCurrent: 'Select current page',
        removeCurrent: 'Remove current page',
        selectAll: 'Select all data',
        deselectAll: 'Deselect all data',
        removeAll: 'Remove all data',
        selectInvert: 'Invert current page'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
        downloadFile: 'Download file'
    },
    Empty: {
        description: 'No data'
    },
    Icon: {
        icon: 'icon'
    },
    Text: {
        edit: 'Edit',
        copy: 'Copy',
        copied: 'Copied',
        expand: 'Expand',
        collapse: 'Collapse'
    },
    Form: {
        optional: '(optional)',
        defaultValidateMessages: {
            default: 'Field validation error for ${label}',
            required: 'Please enter ${label}',
            enum: '${label} must be one of [${enum}]',
            whitespace: '${label} cannot be a blank character',
            date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
            },
            number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
            },
            array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
            },
            pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
            }
        }
    },
    QRCode: {
        expired: 'QR code expired',
        refresh: 'Refresh',
        scanned: 'Scanned'
    },
    ColorPicker: {
        presetEmpty: 'Empty',
        transparent: 'Transparent',
        singleColor: 'Single',
        gradientColor: 'Gradient'
    }
};
const __TURBOPACK__default__export__ = localeValues;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
;
;
;
const useLocale = (componentName, defaultLocale)=>{
    const fullLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const getLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocale]": ()=>{
            const locale = defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][componentName];
            var _fullLocale_componentName;
            const localeFromContext = (_fullLocale_componentName = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _fullLocale_componentName !== void 0 ? _fullLocale_componentName : {};
            return {
                ...typeof locale === 'function' ? locale() : locale,
                ...localeFromContext || {}
            };
        }
    }["useLocale.useMemo[getLocale]"], [
        componentName,
        defaultLocale,
        fullLocale
    ]);
    const getLocaleCode = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLocale.useMemo[getLocaleCode]": ()=>{
            const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale;
            }
            return localeCode;
        }
    }["useLocale.useMemo[getLocaleCode]"], [
        fullLocale
    ]);
    return [
        getLocale,
        getLocaleCode
    ];
};
const __TURBOPACK__default__export__ = useLocale;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genAlphaColor",
    ()=>genAlphaColor,
    "generateColor",
    ()=>generateColor,
    "getColorAlpha",
    ()=>getColorAlpha,
    "getGradientPercentColor",
    ()=>getGradientPercentColor,
    "getRoundNumber",
    ()=>getRoundNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)");
;
;
;
const generateColor = (color)=>{
    if (color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"]) {
        return color;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"](color);
};
const getRoundNumber = (value)=>Math.round(Number(value || 0));
const getColorAlpha = (color)=>getRoundNumber(color.toHsb().a * 100);
const genAlphaColor = (color, alpha)=>{
    const rgba = color.toRgb();
    // Color from hsb input may get `rgb` is (0/0/0) when `hsb.b` is 0
    // So if rgb is empty, we should get from hsb
    if (!rgba.r && !rgba.g && !rgba.b) {
        const hsba = color.toHsb();
        hsba.a = alpha || 1;
        return generateColor(hsba);
    }
    rgba.a = alpha || 1;
    return generateColor(rgba);
};
const getGradientPercentColor = (colors, percent)=>{
    const filledColors = [
        {
            percent: 0,
            color: colors[0].color
        }
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(colors), [
        {
            percent: 100,
            color: colors[colors.length - 1].color
        }
    ]);
    for(let i = 0; i < filledColors.length - 1; i += 1){
        const startPtg = filledColors[i].percent;
        const endPtg = filledColors[i + 1].percent;
        const startColor = filledColors[i].color;
        const endColor = filledColors[i + 1].color;
        if (startPtg <= percent && percent <= endPtg) {
            const dist = endPtg - startPtg;
            if (dist === 0) {
                return startColor;
            }
            const ratio = (percent - startPtg) / dist * 100;
            const startRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](startColor);
            const endRcColor = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](endColor);
            return startRcColor.mix(endRcColor, ratio).toRgbString();
        }
    }
    // This will never reach
    /* istanbul ignore next */ return '';
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/components/ColorPresets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBright",
    ()=>isBright
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/components/ColorBlock.js [app-client] (ecmascript) <export default as ColorBlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/color-picker/es/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/collapse/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const genPresetColor = (list)=>list.map((value)=>{
        value.colors = value.colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"]);
        return value;
    });
const isBright = (value, bgColorToken)=>{
    const { r, g, b, a } = value.toRgb();
    const hsv = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
        // Adapted to dark mode
        return hsv.v > 0.5;
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 192;
};
const genCollapsePanelKey = (preset, index)=>{
    var _preset_key;
    const mergedKey = (_preset_key = preset.key) !== null && _preset_key !== void 0 ? _preset_key : index;
    return "panel-".concat(mergedKey);
};
const ColorPresets = (param)=>{
    let { prefixCls, presets, value: color, onChange } = param;
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('ColorPicker');
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const presetsValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ColorPresets.useMemo[presetsValue]": ()=>genPresetColor(presets)
    }["ColorPresets.useMemo[presetsValue]"], [
        presets
    ]);
    const colorPresetsPrefixCls = "".concat(prefixCls, "-presets");
    const activeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ColorPresets.useMemo[activeKeys]": ()=>presetsValue.reduce({
                "ColorPresets.useMemo[activeKeys]": (acc, preset, index)=>{
                    const { defaultOpen = true } = preset;
                    if (defaultOpen) {
                        acc.push(genCollapsePanelKey(preset, index));
                    }
                    return acc;
                }
            }["ColorPresets.useMemo[activeKeys]"], [])
    }["ColorPresets.useMemo[activeKeys]"], [
        presetsValue
    ]);
    const handleClick = (colorValue)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
    };
    const items = presetsValue.map((preset, index)=>{
        var _preset_colors;
        return {
            key: genCollapsePanelKey(preset, index),
            label: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "".concat(colorPresetsPrefixCls, "-label")
            }, preset === null || preset === void 0 ? void 0 : preset.label),
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "".concat(colorPresetsPrefixCls, "-items")
            }, Array.isArray(preset === null || preset === void 0 ? void 0 : preset.colors) && ((_preset_colors = preset.colors) === null || _preset_colors === void 0 ? void 0 : _preset_colors.length) > 0 ? preset.colors.map((presetColor, index)=>{
                const colorInst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(presetColor);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$color$2d$picker$2f$es$2f$components$2f$ColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ColorBlock$3e$__["ColorBlock"], {
                    // eslint-disable-next-line react/no-array-index-key
                    key: "preset-".concat(index, "-").concat(presetColor.toHexString()),
                    color: colorInst.toCssString(),
                    prefixCls: prefixCls,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(colorPresetsPrefixCls, "-color"), {
                        ["".concat(colorPresetsPrefixCls, "-color-checked")]: presetColor.toCssString() === (color === null || color === void 0 ? void 0 : color.toCssString()),
                        ["".concat(colorPresetsPrefixCls, "-color-bright")]: isBright(presetColor, token.colorBgElevated)
                    }),
                    onClick: ()=>handleClick(presetColor)
                });
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "".concat(colorPresetsPrefixCls, "-empty")
            }, locale.presetEmpty))
        };
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: colorPresetsPrefixCls
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$collapse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        defaultActiveKey: activeKeys,
        ghost: true,
        items: items
    }));
};
const __TURBOPACK__default__export__ = ColorPresets;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/components/ColorPresets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/themes/shared/genFontSizes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/getAlphaColor.js [app-client] (ecmascript)");
;
;
;
;
;
;
const prepareToken = (token)=>{
    const { paddingInline, onlyIconSize, borderColorDisabled } = token;
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        buttonPaddingHorizontal: paddingInline,
        buttonPaddingVertical: 0,
        buttonIconOnlyFontSize: onlyIconSize,
        colorBorderDisabled: borderColorDisabled
    });
    return buttonToken;
};
const prepareComponentToken = (token)=>{
    var _token_contentFontSize;
    const contentFontSize = (_token_contentFontSize = token.contentFontSize) !== null && _token_contentFontSize !== void 0 ? _token_contentFontSize : token.fontSize;
    var _token_contentFontSizeSM;
    const contentFontSizeSM = (_token_contentFontSizeSM = token.contentFontSizeSM) !== null && _token_contentFontSizeSM !== void 0 ? _token_contentFontSizeSM : token.fontSize;
    var _token_contentFontSizeLG;
    const contentFontSizeLG = (_token_contentFontSizeLG = token.contentFontSizeLG) !== null && _token_contentFontSizeLG !== void 0 ? _token_contentFontSizeLG : token.fontSizeLG;
    var _token_contentLineHeight;
    const contentLineHeight = (_token_contentLineHeight = token.contentLineHeight) !== null && _token_contentLineHeight !== void 0 ? _token_contentLineHeight : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSize);
    var _token_contentLineHeightSM;
    const contentLineHeightSM = (_token_contentLineHeightSM = token.contentLineHeightSM) !== null && _token_contentLineHeightSM !== void 0 ? _token_contentLineHeightSM : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeSM);
    var _token_contentLineHeightLG;
    const contentLineHeightLG = (_token_contentLineHeightLG = token.contentLineHeightLG) !== null && _token_contentLineHeightLG !== void 0 ? _token_contentLineHeightLG : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$themes$2f$shared$2f$genFontSizes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLineHeight"])(contentFontSizeLG);
    const solidTextColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$components$2f$ColorPresets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBright"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AggregationColor"](token.colorBgSolid), '#fff') ? '#000' : '#fff';
    const shadowColorTokens = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>({
            ...prev,
            ["".concat(colorKey, "ShadowColor")]: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth), " 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$getAlphaColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token["".concat(colorKey, "1")], token.colorBgContainer))
        }), {});
    const defaultBgDisabled = token.colorBgContainerDisabled;
    const dashedBgDisabled = token.colorBgContainerDisabled;
    return {
        ...shadowColorTokens,
        fontWeight: 400,
        iconGap: token.marginXS,
        defaultShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlTmpOutline),
        primaryShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlOutline),
        dangerShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.colorErrorOutline),
        primaryColor: token.colorTextLightSolid,
        dangerColor: token.colorTextLightSolid,
        borderColorDisabled: token.colorBorderDisabled,
        defaultGhostColor: token.colorBgContainer,
        ghostBg: 'transparent',
        defaultGhostBorderColor: token.colorBgContainer,
        paddingInline: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineLG: token.paddingContentHorizontal - token.lineWidth,
        paddingInlineSM: 8 - token.lineWidth,
        onlyIconSize: 'inherit',
        onlyIconSizeSM: 'inherit',
        onlyIconSizeLG: 'inherit',
        groupBorderColor: token.colorPrimaryHover,
        linkHoverBg: 'transparent',
        textTextColor: token.colorText,
        textTextHoverColor: token.colorText,
        textTextActiveColor: token.colorText,
        textHoverBg: token.colorFillTertiary,
        defaultColor: token.colorText,
        defaultBg: token.colorBgContainer,
        defaultBorderColor: token.colorBorder,
        defaultBorderColorDisabled: token.colorBorder,
        defaultHoverBg: token.colorBgContainer,
        defaultHoverColor: token.colorPrimaryHover,
        defaultHoverBorderColor: token.colorPrimaryHover,
        defaultActiveBg: token.colorBgContainer,
        defaultActiveColor: token.colorPrimaryActive,
        defaultActiveBorderColor: token.colorPrimaryActive,
        solidTextColor,
        contentFontSize,
        contentFontSizeSM,
        contentFontSizeLG,
        contentLineHeight,
        contentLineHeightSM,
        contentLineHeightLG,
        paddingBlock: Math.max((token.controlHeight - contentFontSize * contentLineHeight) / 2 - token.lineWidth, 0),
        paddingBlockSM: Math.max((token.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token.lineWidth, 0),
        paddingBlockLG: Math.max((token.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token.lineWidth, 0),
        defaultBgDisabled,
        dashedBgDisabled
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/variant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genVariantStyle = (token)=>{
    const { componentCls, antCls } = token;
    // Default: '--ant-btn-'
    const getCssVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCssVar"])(antCls, 'btn');
    return {
        [componentCls]: [
            // ==============================================================
            // ==                         Variable                         ==
            // ==============================================================
            {
                // Border
                [getCssVar('border-width')]: '1px',
                [getCssVar('border-color')]: '#000',
                [getCssVar('border-color-hover')]: "var(".concat(getCssVar('border-color'), ")"),
                [getCssVar('border-color-active')]: "var(".concat(getCssVar('border-color'), ")"),
                [getCssVar('border-color-disabled')]: "var(".concat(getCssVar('border-color'), ")"),
                [getCssVar('border-style')]: 'solid',
                // Text
                [getCssVar('text-color')]: '#000',
                [getCssVar('text-color-hover')]: "var(".concat(getCssVar('text-color'), ")"),
                [getCssVar('text-color-active')]: "var(".concat(getCssVar('text-color'), ")"),
                [getCssVar('text-color-disabled')]: "var(".concat(getCssVar('text-color'), ")"),
                // Background
                [getCssVar('bg-color')]: '#ddd',
                [getCssVar('bg-color-hover')]: "var(".concat(getCssVar('bg-color'), ")"),
                [getCssVar('bg-color-active')]: "var(".concat(getCssVar('bg-color'), ")"),
                [getCssVar('bg-color-disabled')]: token.colorBgContainerDisabled,
                [getCssVar('bg-color-container')]: token.colorBgContainer,
                // Shadow
                [getCssVar('shadow')]: 'none'
            },
            // ==============================================================
            // ==                         Template                         ==
            // ==============================================================
            {
                // Basic
                border: "var(".concat(getCssVar('border-width'), ") var(").concat(getCssVar('border-style'), ") var(").concat(getCssVar('border-color'), ")"),
                color: "var(".concat(getCssVar('text-color'), ")"),
                backgroundColor: "var(".concat(getCssVar('bg-color'), ")"),
                // Status
                ["&:not(:disabled):not(".concat(componentCls, "-disabled)")]: {
                    // Hover
                    '&:hover': {
                        border: "var(".concat(getCssVar('border-width'), ") var(").concat(getCssVar('border-style'), ") var(").concat(getCssVar('border-color-hover'), ")"),
                        color: "var(".concat(getCssVar('text-color-hover'), ")"),
                        backgroundColor: "var(".concat(getCssVar('bg-color-hover'), ")")
                    },
                    // Active
                    '&:active': {
                        border: "var(".concat(getCssVar('border-width'), ") var(").concat(getCssVar('border-style'), ") var(").concat(getCssVar('border-color-active'), ")"),
                        color: "var(".concat(getCssVar('text-color-active'), ")"),
                        backgroundColor: "var(".concat(getCssVar('bg-color-active'), ")")
                    }
                }
            },
            // ==============================================================
            // ==                         Variants                         ==
            // ==============================================================
            {
                // >>>>> Solid
                ["&".concat(componentCls, "-variant-solid")]: {
                    // Solid Variables
                    [getCssVar('solid-bg-color')]: "var(".concat(getCssVar('color-base'), ")"),
                    [getCssVar('solid-bg-color-hover')]: "var(".concat(getCssVar('color-hover'), ")"),
                    [getCssVar('solid-bg-color-active')]: "var(".concat(getCssVar('color-active'), ")"),
                    // Variables
                    [getCssVar('border-color')]: 'transparent',
                    [getCssVar('text-color')]: token.colorTextLightSolid,
                    [getCssVar('bg-color')]: "var(".concat(getCssVar('solid-bg-color'), ")"),
                    [getCssVar('bg-color-hover')]: "var(".concat(getCssVar('solid-bg-color-hover'), ")"),
                    [getCssVar('bg-color-active')]: "var(".concat(getCssVar('solid-bg-color-active'), ")"),
                    // Box Shadow
                    boxShadow: "var(".concat(getCssVar('shadow'), ")")
                },
                // >>>>> Outlined & Dashed
                ["&".concat(componentCls, "-variant-outlined, &").concat(componentCls, "-variant-dashed")]: {
                    [getCssVar('border-color')]: "var(".concat(getCssVar('color-base'), ")"),
                    [getCssVar('border-color-hover')]: "var(".concat(getCssVar('color-hover'), ")"),
                    [getCssVar('border-color-active')]: "var(".concat(getCssVar('color-active'), ")"),
                    [getCssVar('bg-color')]: "var(".concat(getCssVar('bg-color-container'), ")"),
                    [getCssVar('text-color')]: "var(".concat(getCssVar('color-base'), ")"),
                    [getCssVar('text-color-hover')]: "var(".concat(getCssVar('color-hover'), ")"),
                    [getCssVar('text-color-active')]: "var(".concat(getCssVar('color-active'), ")"),
                    // Box Shadow
                    boxShadow: "var(".concat(getCssVar('shadow'), ")")
                },
                // >>>>> Dashed
                ["&".concat(componentCls, "-variant-dashed")]: {
                    [getCssVar('border-style')]: 'dashed',
                    [getCssVar('bg-color-disabled')]: token.dashedBgDisabled
                },
                // >>>>> Filled
                ["&".concat(componentCls, "-variant-filled")]: {
                    [getCssVar('border-color')]: 'transparent',
                    [getCssVar('text-color')]: "var(".concat(getCssVar('color-base'), ")"),
                    [getCssVar('bg-color')]: "var(".concat(getCssVar('color-light'), ")"),
                    [getCssVar('bg-color-hover')]: "var(".concat(getCssVar('color-light-hover'), ")"),
                    [getCssVar('bg-color-active')]: "var(".concat(getCssVar('color-light-active'), ")")
                },
                // >>>>> Text & Link
                ["&".concat(componentCls, "-variant-text, &").concat(componentCls, "-variant-link")]: {
                    [getCssVar('border-color')]: 'transparent',
                    [getCssVar('text-color')]: "var(".concat(getCssVar('color-base'), ")"),
                    [getCssVar('text-color-hover')]: "var(".concat(getCssVar('color-hover'), ")"),
                    [getCssVar('text-color-active')]: "var(".concat(getCssVar('color-active'), ")"),
                    [getCssVar('bg-color')]: 'transparent',
                    [getCssVar('bg-color-hover')]: 'transparent',
                    [getCssVar('bg-color-active')]: 'transparent',
                    ["&:disabled, &".concat(token.componentCls, "-disabled")]: {
                        background: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                // >>>>> Text
                ["&".concat(componentCls, "-variant-text")]: {
                    [getCssVar('bg-color-hover')]: "var(".concat(getCssVar('color-light'), ")"),
                    [getCssVar('bg-color-active')]: "var(".concat(getCssVar('color-light-active'), ")")
                }
            },
            // ==============================================================
            // ==                          Colors                          ==
            // ==============================================================
            {
                // ======================== By Default ========================
                // >>>>> Link
                ["&".concat(componentCls, "-variant-link")]: {
                    [getCssVar('color-base')]: token.colorLink,
                    [getCssVar('color-hover')]: token.colorLinkHover,
                    [getCssVar('color-active')]: token.colorLinkActive
                },
                // ======================== Compatible ========================
                // >>>>> Primary
                ["&".concat(componentCls, "-color-primary")]: {
                    [getCssVar('color-base')]: token.colorPrimary,
                    [getCssVar('color-hover')]: token.colorPrimaryHover,
                    [getCssVar('color-active')]: token.colorPrimaryActive,
                    [getCssVar('color-light')]: token.colorPrimaryBg,
                    [getCssVar('color-light-hover')]: token.colorPrimaryBgHover,
                    [getCssVar('color-light-active')]: token.colorPrimaryBorder,
                    [getCssVar('shadow')]: token.primaryShadow
                },
                // >>>>> Danger
                ["&".concat(componentCls, "-color-dangerous")]: {
                    [getCssVar('color-base')]: token.colorError,
                    [getCssVar('color-hover')]: token.colorErrorHover,
                    [getCssVar('color-active')]: token.colorErrorActive,
                    [getCssVar('color-light')]: token.colorErrorBg,
                    [getCssVar('color-light-hover')]: token.colorErrorBgFilledHover,
                    [getCssVar('color-light-active')]: token.colorErrorBgActive,
                    [getCssVar('shadow')]: token.dangerShadow
                },
                // >>>>> Default
                ["&".concat(componentCls, "-color-default")]: {
                    [getCssVar('solid-bg-color')]: token.colorBgSolid,
                    [getCssVar('solid-bg-color-hover')]: token.colorBgSolidHover,
                    [getCssVar('solid-bg-color-active')]: token.colorBgSolidActive,
                    [getCssVar('color-base')]: token.defaultBorderColor,
                    [getCssVar('color-hover')]: token.defaultHoverBorderColor,
                    [getCssVar('color-active')]: token.defaultActiveBorderColor,
                    [getCssVar('color-light')]: token.colorFillTertiary,
                    [getCssVar('color-light-hover')]: token.colorFillSecondary,
                    [getCssVar('color-light-active')]: token.colorFill,
                    [getCssVar('text-color')]: token.colorText,
                    [getCssVar('text-color-hover')]: token.defaultHoverBorderColor,
                    [getCssVar('text-color-active')]: token.defaultActiveBorderColor,
                    [getCssVar('shadow')]: token.defaultShadow,
                    ["&".concat(componentCls, "-variant-solid")]: {
                        [getCssVar('text-color')]: token.solidTextColor
                    },
                    ["&".concat(componentCls, "-variant-filled, &").concat(componentCls, "-variant-text")]: {
                        [getCssVar('text-color-hover')]: "var(".concat(getCssVar('text-color'), ")"),
                        [getCssVar('text-color-active')]: "var(".concat(getCssVar('text-color'), ")")
                    },
                    ["&".concat(componentCls, "-background-ghost")]: {
                        ["&".concat(componentCls, "-variant-outlined, &").concat(componentCls, "-variant-dashed")]: {
                            [getCssVar('text-color')]: token.defaultGhostColor,
                            [getCssVar('border-color')]: token.defaultGhostBorderColor
                        }
                    }
                }
            },
            // >>>>> Preset Colors
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].map((colorKey)=>{
                const darkColor = token["".concat(colorKey, "6")];
                const lightColor = token["".concat(colorKey, "1")];
                const hoverColor = token["".concat(colorKey, "5")];
                const lightHoverColor = token["".concat(colorKey, "2")];
                const lightActiveColor = token["".concat(colorKey, "3")];
                const activeColor = token["".concat(colorKey, "7")];
                const shadowColor = token["".concat(colorKey, "ShadowColor")];
                return {
                    ["&".concat(componentCls, "-color-").concat(colorKey)]: {
                        [getCssVar('color-base')]: darkColor,
                        [getCssVar('color-hover')]: hoverColor,
                        [getCssVar('color-active')]: activeColor,
                        [getCssVar('color-light')]: lightColor,
                        [getCssVar('color-light-hover')]: lightHoverColor,
                        [getCssVar('color-light-active')]: lightActiveColor,
                        [getCssVar('shadow')]: shadowColor
                    }
                };
            }),
            // ==============================================================
            // ==                         Disabled                         ==
            // ==============================================================
            {
                // Disabled
                ["&:disabled, &".concat(token.componentCls, "-disabled")]: {
                    cursor: 'not-allowed',
                    borderColor: token.colorBorderDisabled,
                    background: "var(".concat(getCssVar('bg-color-disabled'), ")"),
                    color: token.colorTextDisabled,
                    boxShadow: 'none'
                }
            },
            // ==============================================================
            // ==                          Ghost                           ==
            // ==============================================================
            {
                // Ghost
                ["&".concat(componentCls, "-background-ghost")]: {
                    [getCssVar('bg-color')]: 'transparent',
                    [getCssVar('shadow')]: 'none'
                }
            }
        ]
    };
};
const __TURBOPACK__default__export__ = genVariantStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$variant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/variant.js [app-client] (ecmascript)");
;
;
;
;
;
;
// ============================== Shared ==============================
const genSharedButtonStyle = (token)=>{
    const { componentCls, iconCls, fontWeight, opacityLoading, motionDurationSlow, motionEaseInOut, iconGap, calc } = token;
    return {
        [componentCls]: {
            outline: 'none',
            position: 'relative',
            display: 'inline-flex',
            gap: iconGap,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            backgroundImage: 'none',
            cursor: 'pointer',
            transition: "all ".concat(token.motionDurationMid, " ").concat(token.motionEaseInOut),
            userSelect: 'none',
            touchAction: 'manipulation',
            '&:disabled > *': {
                pointerEvents: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/51380
            ["".concat(componentCls, "-icon > svg")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetIcon"])(),
            '> a': {
                color: 'currentColor'
            },
            '&:not(:disabled)': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
            ["&".concat(componentCls, "-two-chinese-chars::first-letter")]: {
                letterSpacing: '0.34em'
            },
            ["&".concat(componentCls, "-two-chinese-chars > *:not(").concat(iconCls, ")")]: {
                marginInlineEnd: '-0.34em',
                letterSpacing: '0.34em'
            },
            ["&".concat(componentCls, "-icon-only")]: {
                paddingInline: 0,
                // make `btn-icon-only` not too narrow
                ["&".concat(componentCls, "-compact-item")]: {
                    flex: 'none'
                }
            },
            // Loading
            ["&".concat(componentCls, "-loading")]: {
                opacity: opacityLoading,
                cursor: 'default'
            },
            ["".concat(componentCls, "-loading-icon")]: {
                transition: [
                    'width',
                    'opacity',
                    'margin'
                ].map((transition)=>"".concat(transition, " ").concat(motionDurationSlow, " ").concat(motionEaseInOut)).join(',')
            },
            // iconPlacement
            ["&:not(".concat(componentCls, "-icon-end)")]: {
                ["".concat(componentCls, "-loading-icon-motion")]: {
                    '&-appear-start, &-enter-start': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal()
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineEnd: 0
                    },
                    '&-leave-start': {
                        marginInlineEnd: 0
                    },
                    '&-leave-active': {
                        marginInlineEnd: calc(iconGap).mul(-1).equal()
                    }
                }
            },
            '&-icon-end': {
                flexDirection: 'row-reverse',
                ["".concat(componentCls, "-loading-icon-motion")]: {
                    '&-appear-start, &-enter-start': {
                        marginInlineStart: calc(iconGap).mul(-1).equal()
                    },
                    '&-appear-active, &-enter-active': {
                        marginInlineStart: 0
                    },
                    '&-leave-start': {
                        marginInlineStart: 0
                    },
                    '&-leave-active': {
                        marginInlineStart: calc(iconGap).mul(-1).equal()
                    }
                }
            }
        }
    };
};
// ============================== Shape ===============================
const genCircleButtonStyle = (token)=>({
        minWidth: token.controlHeight,
        paddingInline: 0,
        borderRadius: '50%'
    });
// =============================== Size ===============================
const genButtonStyle = function(token) {
    let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const { componentCls, controlHeight, fontSize, borderRadius, buttonPaddingHorizontal, iconCls, buttonPaddingVertical, buttonIconOnlyFontSize } = token;
    return [
        {
            [prefixCls]: {
                fontSize,
                height: controlHeight,
                padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingVertical), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(buttonPaddingHorizontal)),
                borderRadius,
                ["&".concat(componentCls, "-icon-only")]: {
                    width: controlHeight,
                    [iconCls]: {
                        fontSize: buttonIconOnlyFontSize
                    }
                }
            }
        },
        // Shape - patch prefixCls again to override solid border radius style
        {
            ["".concat(componentCls).concat(componentCls, "-circle").concat(prefixCls)]: genCircleButtonStyle(token)
        },
        {
            ["".concat(componentCls).concat(componentCls, "-round").concat(prefixCls)]: {
                borderRadius: token.controlHeight,
                ["&:not(".concat(componentCls, "-icon-only)")]: {
                    paddingInline: token.buttonPaddingHorizontal
                }
            }
        }
    ];
};
const genSizeBaseButtonStyle = (token)=>{
    const baseToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        fontSize: token.contentFontSize
    });
    return genButtonStyle(baseToken, token.componentCls);
};
const genSizeSmallButtonStyle = (token)=>{
    const smallToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightSM,
        fontSize: token.contentFontSizeSM,
        padding: token.paddingXS,
        buttonPaddingHorizontal: token.paddingInlineSM,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusSM,
        buttonIconOnlyFontSize: token.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, "".concat(token.componentCls, "-sm"));
};
const genSizeLargeButtonStyle = (token)=>{
    const largeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        controlHeight: token.controlHeightLG,
        fontSize: token.contentFontSizeLG,
        buttonPaddingHorizontal: token.paddingInlineLG,
        buttonPaddingVertical: 0,
        borderRadius: token.borderRadiusLG,
        buttonIconOnlyFontSize: token.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, "".concat(token.componentCls, "-lg"));
};
const genBlockButtonStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            ["&".concat(componentCls, "-block")]: {
                width: '100%'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Button', (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Shared
        genSharedButtonStyle(buttonToken),
        // Size
        genSizeBaseButtonStyle(buttonToken),
        genSizeSmallButtonStyle(buttonToken),
        genSizeLargeButtonStyle(buttonToken),
        // Block
        genBlockButtonStyle(buttonToken),
        // Variant
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$variant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonToken),
        // Button Group
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    unitless: {
        fontWeight: true,
        contentLineHeight: true,
        contentLineHeightSM: true,
        contentLineHeightLG: true
    }
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// handle border collapse
__turbopack_context__.s([
    "genCompactItemStyle",
    ()=>genCompactItemStyle
]);
function compactItemBorder(token, parentCls, options, prefixCls) {
    const { focusElCls, focus, borderElCls } = options;
    const childCombinator = borderElCls ? '> *' : '';
    const hoverEffects = [
        'hover',
        focus ? 'focus' : null,
        'active'
    ].filter(Boolean).map((n)=>"&:".concat(n, " ").concat(childCombinator)).join(',');
    return {
        ["&-item:not(".concat(parentCls, "-last-item)")]: {
            marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
        },
        ["&-item:not(".concat(prefixCls, "-status-success)")]: {
            zIndex: 2
        },
        '&-item': {
            [hoverEffects]: {
                zIndex: 3
            },
            ...focusElCls ? {
                ["&".concat(focusElCls)]: {
                    zIndex: 3
                }
            } : {},
            ["&[disabled] ".concat(childCombinator)]: {
                zIndex: 0
            }
        }
    };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
    const { borderElCls } = options;
    const childCombinator = borderElCls ? "> ".concat(borderElCls) : '';
    return {
        ["&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item) ").concat(childCombinator)]: {
            borderRadius: 0
        },
        ["&-item:not(".concat(parentCls, "-last-item)").concat(parentCls, "-first-item")]: {
            ["& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator)]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        ["&-item:not(".concat(parentCls, "-first-item)").concat(parentCls, "-last-item")]: {
            ["& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator)]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        }
    };
}
function genCompactItemStyle(token) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        focus: true
    };
    const { componentCls } = token;
    const { componentCls: customizePrefixCls } = options;
    const mergedComponentCls = customizePrefixCls || componentCls;
    const compactCls = "".concat(mergedComponentCls, "-compact");
    return {
        [compactCls]: {
            ...compactItemBorder(token, compactCls, options, mergedComponentCls),
            ...compactItemBorderRadius(mergedComponentCls, compactCls, options)
        }
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item-vertical.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genCompactItemVerticalStyle",
    ()=>genCompactItemVerticalStyle
]);
function compactItemVerticalBorder(token, parentCls, prefixCls) {
    return {
        // border collapse
        ["&-item:not(".concat(parentCls, "-last-item)")]: {
            marginBottom: token.calc(token.lineWidth).mul(-1).equal()
        },
        ["&-item:not(".concat(prefixCls, "-status-success)")]: {
            zIndex: 2
        },
        '&-item': {
            '&:hover,&:focus,&:active': {
                zIndex: 3
            },
            '&[disabled]': {
                zIndex: 0
            }
        }
    };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
        ["&-item:not(".concat(parentCls, "-first-item):not(").concat(parentCls, "-last-item)")]: {
            borderRadius: 0
        },
        ["&-item".concat(parentCls, "-first-item:not(").concat(parentCls, "-last-item)")]: {
            ["&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg")]: {
                borderEndEndRadius: 0,
                borderEndStartRadius: 0
            }
        },
        ["&-item".concat(parentCls, "-last-item:not(").concat(parentCls, "-first-item)")]: {
            ["&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg")]: {
                borderStartStartRadius: 0,
                borderStartEndRadius: 0
            }
        }
    };
}
function genCompactItemVerticalStyle(token) {
    const compactCls = "".concat(token.componentCls, "-compact-vertical");
    return {
        [compactCls]: {
            ...compactItemVerticalBorder(token, compactCls, token.componentCls),
            ...compactItemBorderVerticalRadius(token.componentCls, compactCls)
        }
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/compact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item-vertical.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/token.js [app-client] (ecmascript)");
;
;
;
;
const genButtonCompactStyle = (token)=>{
    const { componentCls, colorPrimaryHover, lineWidth, calc } = token;
    const insetOffset = calc(lineWidth).mul(-1).equal();
    const getCompactBorderStyle = (vertical)=>{
        const itemCls = "".concat(componentCls, "-compact").concat(vertical ? '-vertical' : '', "-item");
        const selector = "".concat(itemCls).concat(componentCls, "-primary:not([disabled])");
        return {
            // TODO: Border color transition should be not cover when has color.
            [itemCls]: {
                transition: "none"
            },
            ["".concat(selector, " + ").concat(selector, "::before")]: {
                position: 'absolute',
                top: vertical ? insetOffset : 0,
                insetInlineStart: vertical ? 0 : insetOffset,
                backgroundColor: colorPrimaryHover,
                content: '""',
                width: vertical ? '100%' : lineWidth,
                height: vertical ? lineWidth : '100%'
            }
        };
    };
    // Special styles for Primary Button
    return {
        ...getCompactBorderStyle(),
        ...getCompactBorderStyle(true)
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Button',
    'compact'
], (token)=>{
    const buttonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token);
    return [
        // Space Compact
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(buttonToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemVerticalStyle"])(buttonToken),
        genButtonCompactStyle(buttonToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"]);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/isNonNullable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/wave/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/button-group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/buttonHelpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/DefaultLoadingIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/IconWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/style/compact.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getLoadingConfig(loading) {
    if (typeof loading === 'object' && loading) {
        let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
        delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0;
        return {
            loading: delay <= 0,
            delay
        };
    }
    return {
        loading: !!loading,
        delay: 0
    };
}
const ButtonTypeMap = {
    default: [
        'default',
        'outlined'
    ],
    primary: [
        'primary',
        'solid'
    ],
    dashed: [
        'default',
        'dashed'
    ],
    // `link` is not a real color but we should compatible with it
    link: [
        'link',
        'link'
    ],
    text: [
        'default',
        'text'
    ]
};
const InternalCompoundedButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { _skipSemantic, loading = false, prefixCls: customizePrefixCls, color, variant, type, danger = false, shape: customizeShape, size: customizeSize, disabled: customDisabled, className, rootClassName, children, icon, iconPosition, iconPlacement, ghost = false, block = false, // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = 'button', classNames, styles, style, autoInsertSpace, autoFocus, ...rest } = props;
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    // https://github.com/ant-design/ant-design/issues/47605
    // Compatible with original `type` behavior
    const mergedType = type || 'default';
    const { button } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const shape = customizeShape || (button === null || button === void 0 ? void 0 : button.shape) || 'default';
    const [parsedColor, parsedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo": ()=>{
            // >>>>> Local
            // Color & Variant
            if (color && variant) {
                return [
                    color,
                    variant
                ];
            }
            // Sugar syntax
            if (type || danger) {
                const colorVariantPair = ButtonTypeMap[mergedType] || [];
                if (danger) {
                    return [
                        'danger',
                        colorVariantPair[1]
                    ];
                }
                return colorVariantPair;
            }
            // >>> Context fallback
            if ((button === null || button === void 0 ? void 0 : button.color) && (button === null || button === void 0 ? void 0 : button.variant)) {
                return [
                    button.color,
                    button.variant
                ];
            }
            return [
                'default',
                'outlined'
            ];
        }
    }["InternalCompoundedButton.useMemo"], [
        color,
        variant,
        type,
        danger,
        button === null || button === void 0 ? void 0 : button.color,
        button === null || button === void 0 ? void 0 : button.variant,
        mergedType
    ]);
    const [mergedColor, mergedVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo": ()=>{
            if (ghost && parsedVariant === 'solid') {
                return [
                    parsedColor,
                    'outlined'
                ];
            }
            return [
                parsedColor,
                parsedVariant
            ];
        }
    }["InternalCompoundedButton.useMemo"], [
        parsedColor,
        parsedVariant,
        ghost
    ]);
    const isDanger = mergedColor === 'danger';
    const mergedColorText = isDanger ? 'dangerous' : mergedColor;
    const { getPrefixCls, direction, autoInsertSpace: contextAutoInsertSpace, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('button');
    var _ref;
    const mergedInsertSpace = (_ref = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : contextAutoInsertSpace) !== null && _ref !== void 0 ? _ref : true;
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const disabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const groupSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupSizeContext"]);
    const loadingOrDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InternalCompoundedButton.useMemo[loadingOrDelay]": ()=>getLoadingConfig(loading)
    }["InternalCompoundedButton.useMemo[loadingOrDelay]"], [
        loading
    ]);
    const [innerLoading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, buttonRef);
    const needInserted = childNodes.length === 1 && !icon && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant);
    // ========================= Mount ==========================
    // Record for mount status.
    // This will help to no to show the animation of loading on the first mount.
    const isMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "InternalCompoundedButton.useEffect": ()=>{
            isMountRef.current = false;
            return ({
                "InternalCompoundedButton.useEffect": ()=>{
                    isMountRef.current = true;
                }
            })["InternalCompoundedButton.useEffect"];
        }
    }["InternalCompoundedButton.useEffect"], []);
    // ========================= Effect =========================
    // Loading. Should use `useLayoutEffect` to avoid low perf multiple click issue.
    // https://github.com/ant-design/ant-design/issues/51325
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalCompoundedButton.useLayoutEffect": ()=>{
            let delayTimer = null;
            if (loadingOrDelay.delay > 0) {
                delayTimer = setTimeout({
                    "InternalCompoundedButton.useLayoutEffect": ()=>{
                        delayTimer = null;
                        setLoading(true);
                    }
                }["InternalCompoundedButton.useLayoutEffect"], loadingOrDelay.delay);
            } else {
                setLoading(loadingOrDelay.loading);
            }
            function cleanupTimer() {
                if (delayTimer) {
                    clearTimeout(delayTimer);
                    delayTimer = null;
                }
            }
            return cleanupTimer;
        }
    }["InternalCompoundedButton.useLayoutEffect"], [
        loadingOrDelay.delay,
        loadingOrDelay.loading
    ]);
    // Two chinese characters check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            // FIXME: for HOC usage like <FormatMessage />
            if (!buttonRef.current || !mergedInsertSpace) {
                return;
            }
            const buttonText = buttonRef.current.textContent || '';
            if (needInserted && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTwoCNChar"])(buttonText)) {
                if (!hasTwoCNChar) {
                    setHasTwoCNChar(true);
                }
            } else if (hasTwoCNChar) {
                setHasTwoCNChar(false);
            }
        }
    }["InternalCompoundedButton.useEffect"]);
    // Auto focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InternalCompoundedButton.useEffect": ()=>{
            if (autoFocus && buttonRef.current) {
                buttonRef.current.focus();
            }
        }
    }["InternalCompoundedButton.useEffect"], []);
    // ========================= Events =========================
    const handleClick = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "InternalCompoundedButton.useCallback[handleClick]": (e)=>{
            var _props_onClick;
            // FIXME: https://github.com/ant-design/ant-design/issues/30207
            if (innerLoading || mergedDisabled) {
                e.preventDefault();
                return;
            }
            (_props_onClick = props.onClick) === null || _props_onClick === void 0 ? void 0 : _props_onClick.call(props, 'href' in props ? e : e);
        }
    }["InternalCompoundedButton.useCallback[handleClick]"], [
        props.onClick,
        innerLoading,
        mergedDisabled
    ]);
    // ========================== Warn ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Button');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof icon === 'string' && icon.length > 2), 'breaking', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(ghost && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)), 'usage', "`link` or `text` button can't be a `ghost` button.") : "TURBOPACK unreachable";
        warning.deprecated(!iconPosition, 'iconPosition', 'iconPlacement');
    }
    // ========================== Size ==========================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const sizeClassNameMap = {
        large: 'lg',
        small: 'sm',
        middle: undefined
    };
    const sizeFullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalCompoundedButton.useSize[sizeFullName]": (ctxSize)=>{
            var _ref, _ref1;
            return (_ref1 = (_ref = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _ref !== void 0 ? _ref : groupSize) !== null && _ref1 !== void 0 ? _ref1 : ctxSize;
        }
    }["InternalCompoundedButton.useSize[sizeFullName]"]);
    var _sizeClassNameMap_sizeFullName;
    const sizeCls = sizeFullName ? (_sizeClassNameMap_sizeFullName = sizeClassNameMap[sizeFullName]) !== null && _sizeClassNameMap_sizeFullName !== void 0 ? _sizeClassNameMap_sizeFullName : '' : '';
    const iconType = innerLoading ? 'loading' : icon;
    var _ref1;
    const mergedIconPlacement = (_ref1 = iconPlacement !== null && iconPlacement !== void 0 ? iconPlacement : iconPosition) !== null && _ref1 !== void 0 ? _ref1 : 'start';
    const linkButtonRestProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(rest, [
        'navigate'
    ]);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        type: mergedType,
        color: mergedColor,
        variant: mergedVariant,
        danger: isDanger,
        shape,
        size: sizeFullName,
        disabled: mergedDisabled,
        loading: innerLoading,
        iconPlacement: mergedIconPlacement
    };
    // ========================= Style ==========================
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        _skipSemantic ? undefined : contextClassNames,
        classNames
    ], [
        _skipSemantic ? undefined : contextStyles,
        styles
    ], {
        props: mergedProps
    });
    // ========================= Render =========================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, cssVarCls, {
        ["".concat(prefixCls, "-").concat(shape)]: shape !== 'default' && shape !== 'square' && shape,
        // Compatible with versions earlier than 5.21.0
        ["".concat(prefixCls, "-").concat(mergedType)]: mergedType,
        ["".concat(prefixCls, "-dangerous")]: danger,
        ["".concat(prefixCls, "-color-").concat(mergedColorText)]: mergedColorText,
        ["".concat(prefixCls, "-variant-").concat(mergedVariant)]: mergedVariant,
        ["".concat(prefixCls, "-").concat(sizeCls)]: sizeCls,
        ["".concat(prefixCls, "-icon-only")]: !children && children !== 0 && !!iconType,
        ["".concat(prefixCls, "-background-ghost")]: ghost && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant),
        ["".concat(prefixCls, "-loading")]: innerLoading,
        ["".concat(prefixCls, "-two-chinese-chars")]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
        ["".concat(prefixCls, "-block")]: block,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-icon-end")]: mergedIconPlacement === 'end'
    }, compactItemClassnames, className, rootClassName, contextClassName, mergedClassNames.root);
    const fullStyle = {
        ...mergedStyles.root,
        ...contextStyle,
        ...style
    };
    const iconSharedProps = {
        className: mergedClassNames.icon,
        style: mergedStyles.icon
    };
    /**
   * Extract icon node
   * If there is a custom icon and not in loading state: show custom icon
   */ const iconWrapperElement = (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$IconWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefixCls: prefixCls,
            ...iconSharedProps
        }, child);
    const defaultLoadingIconElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$DefaultLoadingIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        existIcon: !!icon,
        prefixCls: prefixCls,
        loading: innerLoading,
        mount: isMountRef.current,
        ...iconSharedProps
    });
    /**
   * Using if-else statements can improve code readability without affecting future expansion.
   */ let iconNode;
    if (icon && !innerLoading) {
        iconNode = iconWrapperElement(icon);
    } else if (loading && typeof loading === 'object' && loading.icon) {
        iconNode = iconWrapperElement(loading.icon);
    } else {
        iconNode = defaultLoadingIconElement;
    }
    const contentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceChildren"])(children, needInserted && mergedInsertSpace, mergedStyles.content, mergedClassNames.content) : null;
    if (linkButtonRestProps.href !== undefined) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
            ...linkButtonRestProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classes, {
                ["".concat(prefixCls, "-disabled")]: mergedDisabled
            }),
            href: mergedDisabled ? undefined : linkButtonRestProps.href,
            style: fullStyle,
            onClick: handleClick,
            ref: mergedRef,
            tabIndex: mergedDisabled ? -1 : 0,
            "aria-disabled": mergedDisabled
        }, iconNode, contentNode);
    }
    let buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...rest,
        type: htmlType,
        className: classes,
        style: fullStyle,
        onClick: handleClick,
        disabled: mergedDisabled,
        ref: mergedRef
    }, iconNode, contentNode, compactItemClassnames && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$style$2f$compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$buttonHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUnBorderedButtonVariant"])(mergedVariant)) {
        buttonNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$wave$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            component: "Button",
            disabled: innerLoading
        }, buttonNode);
    }
    return buttonNode;
});
const Button = InternalCompoundedButton;
Button.Group = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Button.__ANT_BUTTON = true;
if ("TURBOPACK compile-time truthy", 1) {
    Button.displayName = 'Button';
}
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/button.js [app-client] (ecmascript)");
"use client";
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutContext",
    ()=>LayoutContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const LayoutContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    siderHook: {
        addSider: ()=>null,
        removeSider: ()=>null
    }
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_TOKENS",
    ()=>DEPRECATED_TOKENS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genLayoutStyle = (token)=>{
    const { antCls, // .ant
    componentCls, // .ant-layout
    colorText, footerBg, headerHeight, headerPadding, headerColor, footerPadding, fontSize, bodyBg, headerBg } = token;
    return {
        [componentCls]: {
            display: 'flex',
            flex: 'auto',
            flexDirection: 'column',
            /* fix firefox can't set height smaller than content on flex item */ minHeight: 0,
            background: bodyBg,
            '&, *': {
                boxSizing: 'border-box'
            },
            ["&".concat(componentCls, "-has-sider")]: {
                flexDirection: 'row',
                ["> ".concat(componentCls, ", > ").concat(componentCls, "-content")]: {
                    // https://segmentfault.com/a/1190000019498300
                    width: 0
                }
            },
            ["".concat(componentCls, "-header, &").concat(componentCls, "-footer")]: {
                flex: '0 0 auto'
            },
            // RTL
            '&-rtl': {
                direction: 'rtl'
            }
        },
        // ==================== Header ====================
        ["".concat(componentCls, "-header")]: {
            height: headerHeight,
            padding: headerPadding,
            color: headerColor,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerHeight),
            background: headerBg,
            // Other components/menu/style/index.less line:686
            // Integration with header element so menu items have the same height
            ["".concat(antCls, "-menu")]: {
                lineHeight: 'inherit'
            }
        },
        // ==================== Footer ====================
        ["".concat(componentCls, "-footer")]: {
            padding: footerPadding,
            color: colorText,
            fontSize,
            background: footerBg
        },
        // =================== Content ====================
        ["".concat(componentCls, "-content")]: {
            flex: 'auto',
            color: colorText,
            // fix firefox can't set height smaller than content on flex item
            minHeight: 0
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorBgLayout, controlHeight, controlHeightLG, colorText, controlHeightSM, marginXXS, colorTextLightSolid, colorBgContainer } = token;
    const paddingInline = controlHeightLG * 1.25;
    return {
        // Deprecated
        colorBgHeader: '#001529',
        colorBgBody: colorBgLayout,
        colorBgTrigger: '#002140',
        bodyBg: colorBgLayout,
        headerBg: '#001529',
        headerHeight: controlHeight * 2,
        headerPadding: "0 ".concat(paddingInline, "px"),
        headerColor: colorText,
        footerPadding: "".concat(controlHeightSM, "px ").concat(paddingInline, "px"),
        footerBg: colorBgLayout,
        siderBg: '#001529',
        triggerHeight: controlHeightLG + marginXXS * 2,
        triggerBg: '#002140',
        triggerColor: colorTextLightSolid,
        zeroTriggerWidth: controlHeightLG,
        zeroTriggerHeight: controlHeightLG,
        lightSiderBg: colorBgContainer,
        lightTriggerBg: colorBgContainer,
        lightTriggerColor: colorText
    };
};
const DEPRECATED_TOKENS = [
    [
        'colorBgBody',
        'bodyBg'
    ],
    [
        'colorBgHeader',
        'headerBg'
    ],
    [
        'colorBgTrigger',
        'triggerBg'
    ]
];
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Layout', genLayoutStyle, prepareComponentToken, {
    deprecatedTokens: DEPRECATED_TOKENS
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/style/sider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
;
const genSiderStyle = (token)=>{
    const { componentCls, siderBg, motionDurationMid, motionDurationSlow, antCls, triggerHeight, triggerColor, triggerBg, headerHeight, zeroTriggerWidth, zeroTriggerHeight, borderRadiusLG, lightSiderBg, lightTriggerColor, lightTriggerBg, bodyBg } = token;
    return {
        [componentCls]: {
            position: 'relative',
            // fix firefox can't set width smaller than content on flex item
            minWidth: 0,
            background: siderBg,
            transition: "all ".concat(motionDurationMid, ", background 0s"),
            '&-has-trigger': {
                paddingBottom: triggerHeight
            },
            '&-right': {
                order: 1
            },
            ["".concat(componentCls, "-children")]: {
                height: '100%',
                // Hack for fixing margin collapse bug
                // https://github.com/ant-design/ant-design/issues/7967
                // solution from https://stackoverflow.com/a/33132624/3040605
                marginTop: -0.1,
                paddingTop: 0.1,
                ["".concat(antCls, "-menu").concat(antCls, "-menu-inline-collapsed")]: {
                    width: 'auto'
                }
            },
            ["&-zero-width ".concat(componentCls, "-children")]: {
                overflow: 'hidden'
            },
            ["".concat(componentCls, "-trigger")]: {
                position: 'fixed',
                bottom: 0,
                zIndex: 1,
                height: triggerHeight,
                color: triggerColor,
                lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(triggerHeight),
                textAlign: 'center',
                background: triggerBg,
                cursor: 'pointer',
                transition: "all ".concat(motionDurationMid)
            },
            ["".concat(componentCls, "-zero-width-trigger")]: {
                position: 'absolute',
                top: headerHeight,
                insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
                zIndex: 1,
                width: zeroTriggerWidth,
                height: zeroTriggerHeight,
                color: triggerColor,
                fontSize: token.fontSizeXL,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: siderBg,
                borderRadius: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " 0"),
                cursor: 'pointer',
                transition: "background ".concat(motionDurationSlow, " ease"),
                '&::after': {
                    position: 'absolute',
                    inset: 0,
                    background: 'transparent',
                    transition: "all ".concat(motionDurationSlow),
                    content: '""'
                },
                '&:hover::after': {
                    background: "rgba(255, 255, 255, 0.2)"
                },
                '&-right': {
                    insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
                    borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG), " 0 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusLG))
                }
            },
            // Light
            '&-light': {
                background: lightSiderBg,
                ["".concat(componentCls, "-trigger")]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg
                },
                ["".concat(componentCls, "-zero-width-trigger")]: {
                    color: lightTriggerColor,
                    background: lightTriggerBg,
                    border: "1px solid ".concat(bodyBg),
                    // Safe to modify to any other color
                    borderInlineStart: 0
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Layout',
    'Sider'
], genSiderStyle, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareComponentToken"], {
    deprecatedTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPRECATED_TOKENS"]
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiderContext",
    ()=>SiderContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/BarsOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/LeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/RightOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/style/sider.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px'
};
const isNumeric = (val)=>!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val));
const SiderContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const generateId = (()=>{
    let i = 0;
    return function() {
        let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        i += 1;
        return "".concat(prefix).concat(i);
    };
})();
const Sider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, trigger, children, defaultCollapsed = false, theme = 'dark', style = {}, collapsible = false, reverseArrow = false, width = 200, collapsedWidth = 80, zeroWidthTriggerStyle, breakpoint, onCollapse, onBreakpoint, ...otherProps } = props;
    const { siderHook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutContext"]);
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('collapsed' in props ? props.collapsed : defaultCollapsed);
    const [below, setBelow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            if ('collapsed' in props) {
                setCollapsed(props.collapsed);
            }
        }
    }["Sider.useEffect"], [
        props.collapsed
    ]);
    const handleSetCollapsed = (value, type)=>{
        if (!('collapsed' in props)) {
            setCollapsed(value);
        }
        onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
    };
    // =========================== Prefix ===========================
    const { getPrefixCls, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$style$2f$sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ========================= Responsive =========================
    const responsiveHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    responsiveHandlerRef.current = (mql)=>{
        setBelow(mql.matches);
        onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
        if (collapsed !== mql.matches) {
            handleSetCollapsed(mql.matches, 'responsive');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            var _window;
            function responsiveHandler(mql) {
                var _responsiveHandlerRef_current;
                return (_responsiveHandlerRef_current = responsiveHandlerRef.current) === null || _responsiveHandlerRef_current === void 0 ? void 0 : _responsiveHandlerRef_current.call(responsiveHandlerRef, mql);
            }
            let mql;
            if (typeof ((_window = window) === null || _window === void 0 ? void 0 : _window.matchMedia) !== 'undefined' && breakpoint && breakpoint in dimensionMaxMap) {
                mql = window.matchMedia("screen and (max-width: ".concat(dimensionMaxMap[breakpoint], ")"));
                if (typeof (mql === null || mql === void 0 ? void 0 : mql.addEventListener) === 'function') {
                    mql.addEventListener('change', responsiveHandler);
                }
                responsiveHandler(mql);
            }
            return ({
                "Sider.useEffect": ()=>{
                    if (typeof (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) === 'function') {
                        mql.removeEventListener('change', responsiveHandler);
                    }
                }
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], [
        breakpoint
    ]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sider.useEffect": ()=>{
            const uniqueId = generateId('ant-sider-');
            siderHook.addSider(uniqueId);
            return ({
                "Sider.useEffect": ()=>siderHook.removeSider(uniqueId)
            })["Sider.useEffect"];
        }
    }["Sider.useEffect"], []);
    const toggle = ()=>{
        handleSetCollapsed(!collapsed, 'clickTrigger');
    };
    const divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(otherProps, [
        'collapsed'
    ]);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = Number.parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        onClick: toggle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BarsOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)) : null;
    const reverseIcon = direction === 'rtl' === !reverseArrow;
    const iconObj = {
        expanded: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        collapsed: reverseIcon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$RightOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: toggle,
        style: {
            width: siderWidth
        }
    }, trigger || defaultTrigger) : null;
    const divStyle = {
        ...style,
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        // Fix width transition bug in IE11
        minWidth: siderWidth,
        // https://github.com/ant-design/ant-design/issues/6349
        width: siderWidth
    };
    const siderCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-").concat(theme), {
        ["".concat(prefixCls, "-collapsed")]: !!collapsed,
        ["".concat(prefixCls, "-has-trigger")]: collapsible && trigger !== null && !zeroWidthTrigger,
        ["".concat(prefixCls, "-below")]: !!below,
        ["".concat(prefixCls, "-zero-width")]: Number.parseFloat(siderWidth) === 0
    }, className, hashId, cssVarCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Sider.useMemo[contextValue]": ()=>({
                siderCollapsed: collapsed
            })
    }["Sider.useMemo[contextValue]"], [
        collapsed
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SiderContext.Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("aside", {
        className: siderCls,
        ...divProps,
        style: divStyle,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null));
});
if ("TURBOPACK compile-time truthy", 1) {
    Sider.displayName = 'Sider';
}
const __TURBOPACK__default__export__ = Sider;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const useCSSVarCls = (prefixCls)=>"".concat(prefixCls, "-css-var");
const __TURBOPACK__default__export__ = useCSSVarCls;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const MenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    prefixCls: '',
    firstLevel: true,
    inlineCollapsed: false,
    styles: null,
    classNames: null
});
const __TURBOPACK__default__export__ = MenuContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuDivider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const MenuDivider = (props)=>{
    const { prefixCls: customizePrefixCls, className, dashed, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('menu', customizePrefixCls);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-item-divider-dashed")]: !!dashed
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
        className: classString,
        ...restProps
    });
};
const __TURBOPACK__default__export__ = MenuDivider;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "FormItemInputContext",
    ()=>FormItemInputContext,
    "FormItemPrefixContext",
    ()=>FormItemPrefixContext,
    "FormProvider",
    ()=>FormProvider,
    "NoFormStyle",
    ()=>NoFormStyle,
    "NoStyleItemContext",
    ()=>NoStyleItemContext,
    "VariantContext",
    ()=>VariantContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
"use client";
;
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    labelAlign: 'right',
    layout: 'horizontal',
    itemRef: ()=>{}
});
const NoStyleItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const FormProvider = (props)=>{
    const providerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
        'prefixCls'
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...providerProps
    });
};
const FormItemPrefixContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
if ("TURBOPACK compile-time truthy", 1) {
    FormItemInputContext.displayName = 'FormItemInputContext';
}
const NoFormStyle = (param)=>{
    let { children, status, override } = param;
    const formItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormItemInputContext);
    const newFormItemInputContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "NoFormStyle.useMemo[newFormItemInputContext]": ()=>{
            const newContext = {
                ...formItemInputContext
            };
            if (override) {
                delete newContext.isFormItemInput;
            }
            if (status) {
                delete newContext.status;
                delete newContext.hasFeedback;
                delete newContext.feedbackIcon;
            }
            return newContext;
        }
    }["NoFormStyle.useMemo[newFormItemInputContext]"], [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};
const VariantContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
"use client";
;
;
;
const ContextIsolator = (props)=>{
    const { space, form, children } = props;
    if (children === undefined || children === null) {
        return null;
    }
    let result = children;
    if (form) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoFormStyle"], {
            override: true,
            status: true
        }, result);
    }
    if (space) {
        result = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoCompactStyle"], null, result);
    }
    return result;
};
const __TURBOPACK__default__export__ = ContextIsolator;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const zIndexContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
if ("TURBOPACK compile-time truthy", 1) {
    zIndexContext.displayName = 'zIndexContext';
}
const __TURBOPACK__default__export__ = zIndexContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTAINER_MAX_OFFSET",
    ()=>CONTAINER_MAX_OFFSET,
    "consumerBaseZIndexOffset",
    ()=>consumerBaseZIndexOffset,
    "containerBaseZIndexOffset",
    ()=>containerBaseZIndexOffset,
    "useZIndex",
    ()=>useZIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
;
;
;
;
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
/**
 * Static function will default be the `CONTAINER_MAX_OFFSET`.
 * But it still may have children component like Select, Dropdown.
 * So the warning zIndex should exceed the `CONTAINER_MAX_OFFSET`.
 */ const CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
};
const isContainerType = (type)=>{
    return type in containerBaseZIndexOffset;
};
const useZIndex = (componentType, customZIndex)=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const parentZIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== undefined) {
        result = [
            customZIndex,
            customZIndex
        ];
    } else {
        let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
        if (isContainer) {
            zIndex += // Use preset token zIndex by default but not stack when has parent container
            (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
            containerBaseZIndexOffset[componentType];
        } else {
            zIndex += consumerBaseZIndexOffset[componentType];
        }
        result = [
            parentZIndex === undefined ? customZIndex : zIndex,
            zIndex
        ];
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])(componentType);
        const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
        const currentZIndex = result[0] || 0;
        ("TURBOPACK compile-time truthy", 1) ? warning(customZIndex !== undefined || currentZIndex <= maxZIndex, 'usage', '`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.') : "TURBOPACK unreachable";
    }
    return result;
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genRoundedArrow",
    ()=>genRoundedArrow,
    "getArrowToken",
    ()=>getArrowToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
;
function getArrowToken(token) {
    const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = "polygon(".concat(polygonOffset, "px 100%, 50% ").concat(polygonOffset, "px, ").concat(2 * unitWidth - polygonOffset, "px 100%, ").concat(polygonOffset, "px 100%)");
    const arrowPath = "path('M ".concat(ax, " ").concat(ay, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(bx, " ").concat(by, " L ").concat(cx, " ").concat(cy, " A ").concat(borderRadiusXS, " ").concat(borderRadiusXS, " 0 0 1 ").concat(dx, " ").concat(dy, " L ").concat(ex, " ").concat(ey, " A ").concat(borderRadiusOuter, " ").concat(borderRadiusOuter, " 0 0 0 ").concat(fx, " ").concat(fy, " Z')");
    return {
        arrowShadowWidth: shadowWidth,
        arrowPath,
        arrowPolygon
    };
}
const genRoundedArrow = (token, bgColor, boxShadow)=>{
    const { sizePopupArrow, arrowPolygon, arrowPath, arrowShadowWidth, borderRadiusXS, calc } = token;
    return {
        pointerEvents: 'none',
        width: sizePopupArrow,
        height: sizePopupArrow,
        overflow: 'hidden',
        '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: sizePopupArrow,
            height: calc(sizePopupArrow).div(2).equal(),
            background: bgColor,
            clipPath: {
                _multi_value_: true,
                value: [
                    arrowPolygon,
                    arrowPath
                ]
            },
            content: '""'
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: arrowShadowWidth,
            height: arrowShadowWidth,
            bottom: 0,
            insetInline: 0,
            margin: 'auto',
            borderRadius: {
                _skip_check_: true,
                value: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(borderRadiusXS), " 0")
            },
            transform: 'translateY(50%) rotate(-135deg)',
            boxShadow,
            zIndex: 0,
            background: 'transparent'
        }
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_VERTICAL_CONTENT_RADIUS",
    ()=>MAX_VERTICAL_CONTENT_RADIUS,
    "default",
    ()=>getArrowStyle,
    "getArrowOffsetToken",
    ()=>getArrowOffsetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
;
;
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
    const { contentRadius, limitVerticalRadius } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
        arrowOffsetHorizontal: arrowOffset,
        arrowOffsetVertical
    };
}
function isInject(valid, code) {
    if (!valid) {
        return {};
    }
    return code;
}
function getArrowStyle(token, colorBg, options) {
    const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal } = token;
    const { arrowDistance = 0, arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
    } } = options || {};
    return {
        [componentCls]: {
            // ============================ Basic ============================
            ["".concat(componentCls, "-arrow")]: [
                {
                    position: 'absolute',
                    zIndex: 1,
                    // lift it up so the menu wouldn't cask shadow on it
                    display: 'block',
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genRoundedArrow"])(token, colorBg, boxShadowPopoverArrow),
                    '&:before': {
                        background: colorBg
                    }
                }
            ],
            // ========================== Placement ==========================
            // Here handle the arrow position and rotate stuff
            // >>>>> Top
            ...isInject(!!arrowPlacement.top, {
                [[
                    "&-placement-top > ".concat(componentCls, "-arrow"),
                    "&-placement-topLeft > ".concat(componentCls, "-arrow"),
                    "&-placement-topRight > ".concat(componentCls, "-arrow")
                ].join(',')]: {
                    bottom: arrowDistance,
                    transform: 'translateY(100%) rotate(180deg)'
                },
                ["&-placement-top > ".concat(componentCls, "-arrow")]: {
                    left: {
                        _skip_check_: true,
                        value: '50%'
                    },
                    transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
                },
                '&-placement-topLeft': {
                    '--arrow-offset-horizontal': arrowOffsetHorizontal,
                    ["> ".concat(componentCls, "-arrow")]: {
                        left: {
                            _skip_check_: true,
                            value: arrowOffsetHorizontal
                        }
                    }
                },
                '&-placement-topRight': {
                    '--arrow-offset-horizontal': "calc(100% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal), ")"),
                    ["> ".concat(componentCls, "-arrow")]: {
                        right: {
                            _skip_check_: true,
                            value: arrowOffsetHorizontal
                        }
                    }
                }
            }),
            // >>>>> Bottom
            ...isInject(!!arrowPlacement.bottom, {
                [[
                    "&-placement-bottom > ".concat(componentCls, "-arrow"),
                    "&-placement-bottomLeft > ".concat(componentCls, "-arrow"),
                    "&-placement-bottomRight > ".concat(componentCls, "-arrow")
                ].join(',')]: {
                    top: arrowDistance,
                    transform: "translateY(-100%)"
                },
                ["&-placement-bottom > ".concat(componentCls, "-arrow")]: {
                    left: {
                        _skip_check_: true,
                        value: '50%'
                    },
                    transform: "translateX(-50%) translateY(-100%)"
                },
                '&-placement-bottomLeft': {
                    '--arrow-offset-horizontal': arrowOffsetHorizontal,
                    ["> ".concat(componentCls, "-arrow")]: {
                        left: {
                            _skip_check_: true,
                            value: arrowOffsetHorizontal
                        }
                    }
                },
                '&-placement-bottomRight': {
                    '--arrow-offset-horizontal': "calc(100% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(arrowOffsetHorizontal), ")"),
                    ["> ".concat(componentCls, "-arrow")]: {
                        right: {
                            _skip_check_: true,
                            value: arrowOffsetHorizontal
                        }
                    }
                }
            }),
            // >>>>> Left
            ...isInject(!!arrowPlacement.left, {
                [[
                    "&-placement-left > ".concat(componentCls, "-arrow"),
                    "&-placement-leftTop > ".concat(componentCls, "-arrow"),
                    "&-placement-leftBottom > ".concat(componentCls, "-arrow")
                ].join(',')]: {
                    right: {
                        _skip_check_: true,
                        value: arrowDistance
                    },
                    transform: 'translateX(100%) rotate(90deg)'
                },
                ["&-placement-left > ".concat(componentCls, "-arrow")]: {
                    top: {
                        _skip_check_: true,
                        value: '50%'
                    },
                    transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
                },
                ["&-placement-leftTop > ".concat(componentCls, "-arrow")]: {
                    top: arrowOffsetVertical
                },
                ["&-placement-leftBottom > ".concat(componentCls, "-arrow")]: {
                    bottom: arrowOffsetVertical
                }
            }),
            // >>>>> Right
            ...isInject(!!arrowPlacement.right, {
                [[
                    "&-placement-right > ".concat(componentCls, "-arrow"),
                    "&-placement-rightTop > ".concat(componentCls, "-arrow"),
                    "&-placement-rightBottom > ".concat(componentCls, "-arrow")
                ].join(',')]: {
                    left: {
                        _skip_check_: true,
                        value: arrowDistance
                    },
                    transform: 'translateX(-100%) rotate(-90deg)'
                },
                ["&-placement-right > ".concat(componentCls, "-arrow")]: {
                    top: {
                        _skip_check_: true,
                        value: '50%'
                    },
                    transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
                },
                ["&-placement-rightTop > ".concat(componentCls, "-arrow")]: {
                    top: arrowOffsetVertical
                },
                ["&-placement-rightBottom > ".concat(componentCls, "-arrow")]: {
                    bottom: arrowOffsetVertical
                }
            })
        }
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/placements.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getPlacements,
    "getOverflowOptions",
    ()=>getOverflowOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
;
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
        return {
            adjustX: false,
            adjustY: false
        };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch(placement){
        case 'top':
        case 'bottom':
            baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
            baseOverflow.shiftY = true;
            baseOverflow.adjustY = true;
            break;
        case 'left':
        case 'right':
            baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
            baseOverflow.shiftX = true;
            baseOverflow.adjustX = true;
            break;
    }
    const mergedOverflow = {
        ...baseOverflow,
        ...overflow
    };
    // Support auto shift
    if (!mergedOverflow.shiftX) {
        mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
        mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
}
const PlacementAlignMap = {
    left: {
        points: [
            'cr',
            'cl'
        ]
    },
    right: {
        points: [
            'cl',
            'cr'
        ]
    },
    top: {
        points: [
            'bc',
            'tc'
        ]
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ]
    },
    topLeft: {
        points: [
            'bl',
            'tl'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'tl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tr'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'tr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'br'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'bl'
        ]
    }
};
const ArrowCenterPlacementAlignMap = {
    topLeft: {
        points: [
            'bl',
            'tc'
        ]
    },
    leftTop: {
        points: [
            'tr',
            'cl'
        ]
    },
    topRight: {
        points: [
            'br',
            'tc'
        ]
    },
    rightTop: {
        points: [
            'tl',
            'cr'
        ]
    },
    bottomRight: {
        points: [
            'tr',
            'bc'
        ]
    },
    rightBottom: {
        points: [
            'bl',
            'cr'
        ]
    },
    bottomLeft: {
        points: [
            'tl',
            'bc'
        ]
    },
    leftBottom: {
        points: [
            'br',
            'cl'
        ]
    }
};
const DisableAutoArrowList = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom'
]);
function getPlacements(config) {
    const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    // Dynamic offset
    const arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
        contentRadius: borderRadius,
        limitVerticalRadius: true
    });
    Object.keys(PlacementAlignMap).forEach((key)=>{
        const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
        const placementInfo = {
            ...template,
            offset: [
                0,
                0
            ],
            dynamicInset: true
        };
        placementMap[key] = placementInfo;
        // Disable autoArrow since design is fixed position
        if (DisableAutoArrowList.has(key)) {
            placementInfo.autoArrow = false;
        }
        // Static offset
        switch(key){
            case 'top':
            case 'topLeft':
            case 'topRight':
                placementInfo.offset[1] = -halfArrowWidth - offset;
                break;
            case 'bottom':
            case 'bottomLeft':
            case 'bottomRight':
                placementInfo.offset[1] = halfArrowWidth + offset;
                break;
            case 'left':
            case 'leftTop':
            case 'leftBottom':
                placementInfo.offset[0] = -halfArrowWidth - offset;
                break;
            case 'right':
            case 'rightTop':
            case 'rightBottom':
                placementInfo.offset[0] = halfArrowWidth + offset;
                break;
        }
        if (arrowPointAtCenter) {
            switch(key){
                case 'topLeft':
                case 'bottomLeft':
                    placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
                    break;
                case 'topRight':
                case 'bottomRight':
                    placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
                    break;
                case 'leftTop':
                case 'rightTop':
                    placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
                    break;
                case 'leftBottom':
                case 'rightBottom':
                    placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
                    break;
            }
        }
        // Overflow
        placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
        // VisibleFirst
        if (visibleFirst) {
            placementInfo.htmlRegion = 'visibleFirst';
        }
    });
    return placementMap;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useMergedArrow = (providedArrow, providedContextArrow)=>{
    const toConfig = (arrow)=>typeof arrow === 'boolean' ? {
            show: arrow
        } : arrow || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useMergedArrow.useMemo": ()=>{
            const arrowConfig = toConfig(providedArrow);
            const contextArrowConfig = toConfig(providedContextArrow);
            var _arrowConfig_show, _ref;
            return {
                ...contextArrowConfig,
                ...arrowConfig,
                show: (_ref = (_arrowConfig_show = arrowConfig.show) !== null && _arrowConfig_show !== void 0 ? _arrowConfig_show : contextArrowConfig.show) !== null && _ref !== void 0 ? _ref : true
            };
        }
    }["useMergedArrow.useMemo"], [
        providedArrow,
        providedContextArrow
    ]);
};
const __TURBOPACK__default__export__ = useMergedArrow;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initMotion",
    ()=>initMotion
]);
const initMotionCommon = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = (duration)=>({
        animationDuration: duration,
        animationFillMode: 'both'
    });
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? '&' : '';
    return {
        ["\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear\n    ")]: {
            ...initMotionCommon(duration),
            animationPlayState: 'paused'
        },
        ["".concat(sameLevelPrefix).concat(motionCls, "-leave")]: {
            ...initMotionCommonLeave(duration),
            animationPlayState: 'paused'
        },
        ["\n      ".concat(sameLevelPrefix).concat(motionCls, "-enter").concat(motionCls, "-enter-active,\n      ").concat(sameLevelPrefix).concat(motionCls, "-appear").concat(motionCls, "-appear-active\n    ")]: {
            animationName: inKeyframes,
            animationPlayState: 'running'
        },
        ["".concat(sameLevelPrefix).concat(motionCls, "-leave").concat(motionCls, "-leave-active")]: {
            animationName: outKeyframes,
            animationPlayState: 'running',
            pointerEvents: 'none'
        }
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fadeIn",
    ()=>fadeIn,
    "fadeOut",
    ()=>fadeOut,
    "initFadeMotion",
    ()=>initFadeMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const fadeIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeIn', {
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
});
const fadeOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antFadeOut', {
    '0%': {
        opacity: 1
    },
    '100%': {
        opacity: 0
    }
});
const initFadeMotion = function(token) {
    let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-fade");
    const sameLevelPrefix = sameLevel ? '&' : '';
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel),
        {
            ["\n        ".concat(sameLevelPrefix).concat(motionCls, "-enter,\n        ").concat(sameLevelPrefix).concat(motionCls, "-appear\n      ")]: {
                opacity: 0,
                animationTimingFunction: 'linear'
            },
            ["".concat(sameLevelPrefix).concat(motionCls, "-leave")]: {
                animationTimingFunction: 'linear'
            }
        }
    ];
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initZoomMotion",
    ()=>initZoomMotion,
    "zoomBigIn",
    ()=>zoomBigIn,
    "zoomBigOut",
    ()=>zoomBigOut,
    "zoomDownIn",
    ()=>zoomDownIn,
    "zoomDownOut",
    ()=>zoomDownOut,
    "zoomIn",
    ()=>zoomIn,
    "zoomLeftIn",
    ()=>zoomLeftIn,
    "zoomLeftOut",
    ()=>zoomLeftOut,
    "zoomOut",
    ()=>zoomOut,
    "zoomRightIn",
    ()=>zoomRightIn,
    "zoomRightOut",
    ()=>zoomRightOut,
    "zoomUpIn",
    ()=>zoomUpIn,
    "zoomUpOut",
    ()=>zoomUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const zoomIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomIn', {
    '0%': {
        transform: 'scale(0.2)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.2)',
        opacity: 0
    }
});
const zoomBigIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigIn', {
    '0%': {
        transform: 'scale(0.8)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
});
const zoomBigOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomBigOut', {
    '0%': {
        transform: 'scale(1)'
    },
    '100%': {
        transform: 'scale(0.8)',
        opacity: 0
    }
});
const zoomUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    }
});
const zoomUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomUpOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 0%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 0%',
        opacity: 0
    }
});
const zoomLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    }
});
const zoomLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomLeftOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '0% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '0% 50%',
        opacity: 0
    }
});
const zoomRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    }
});
const zoomRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomRightOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '100% 50%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '100% 50%',
        opacity: 0
    }
});
const zoomDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownIn', {
    '0%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    }
});
const zoomDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antZoomDownOut', {
    '0%': {
        transform: 'scale(1)',
        transformOrigin: '50% 100%'
    },
    '100%': {
        transform: 'scale(0.8)',
        transformOrigin: '50% 100%',
        opacity: 0
    }
});
const zoomMotion = {
    zoom: {
        inKeyframes: zoomIn,
        outKeyframes: zoomOut
    },
    'zoom-big': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-big-fast': {
        inKeyframes: zoomBigIn,
        outKeyframes: zoomBigOut
    },
    'zoom-left': {
        inKeyframes: zoomLeftIn,
        outKeyframes: zoomLeftOut
    },
    'zoom-right': {
        inKeyframes: zoomRightIn,
        outKeyframes: zoomRightOut
    },
    'zoom-up': {
        inKeyframes: zoomUpIn,
        outKeyframes: zoomUpOut
    },
    'zoom-down': {
        inKeyframes: zoomDownIn,
        outKeyframes: zoomDownOut
    }
};
const initZoomMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-").concat(motionName);
    const { inKeyframes, outKeyframes } = zoomMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid),
        {
            ["\n        ".concat(motionCls, "-enter,\n        ").concat(motionCls, "-appear\n      ")]: {
                transform: 'scale(0)',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutCirc,
                '&-prepare': {
                    transform: 'none'
                }
            },
            ["".concat(motionCls, "-leave")]: {
                animationTimingFunction: token.motionEaseInOutCirc
            }
        }
    ];
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>genPresetColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
function genPresetColor(token, genCss) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].reduce((prev, colorKey)=>{
        const lightColor = token["".concat(colorKey, "1")];
        const lightBorderColor = token["".concat(colorKey, "3")];
        const darkColor = token["".concat(colorKey, "6")];
        const textColor = token["".concat(colorKey, "7")];
        return {
            ...prev,
            ...genCss(colorKey, {
                lightColor,
                lightBorderColor,
                darkColor,
                textColor
            })
        };
    }, {});
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genPresetColor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/placementArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/roundedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genPresetColor.js [app-client] (ecmascript) <export default as genPresetColor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
;
;
;
const genTooltipStyle = (token)=>{
    const { calc, componentCls, // ant-tooltip
    tooltipMaxWidth, tooltipColor, tooltipBg, tooltipBorderRadius, zIndexPopup, controlHeight, boxShadowSecondary, paddingSM, paddingXS, arrowOffsetHorizontal, sizePopupArrow } = token;
    // arrowOffsetHorizontal + arrowWidth + borderRadius
    const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
    // borderRadius * 2 + arrowWidth
    const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
    const sharedBodyStyle = {
        minWidth: centerAlignMinWidth,
        minHeight: controlHeight,
        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(paddingSM).div(2).equal()), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingXS)),
        color: "var(--ant-tooltip-color, ".concat(tooltipColor, ")"),
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tooltipBg,
        borderRadius: tooltipBorderRadius,
        boxShadow: boxShadowSecondary,
        boxSizing: 'border-box'
    };
    const sharedTransformOrigin = {
        // When use `autoArrow`, origin will follow the arrow position
        '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
        transformOrigin: [
            "var(--valid-offset-x, 50%)",
            "var(--arrow-y, 50%)"
        ].join(' ')
    };
    return [
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                position: 'absolute',
                zIndex: zIndexPopup,
                display: 'block',
                width: 'max-content',
                maxWidth: tooltipMaxWidth,
                visibility: 'visible',
                ...sharedTransformOrigin,
                '&-hidden': {
                    display: 'none'
                },
                '--antd-arrow-background-color': tooltipBg,
                // Wrapper for the tooltip content
                ["".concat(componentCls, "-container")]: [
                    sharedBodyStyle,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initFadeMotion"])(token, true)
                ],
                ["&:has(~ ".concat(componentCls, "-unique-container)")]: {
                    ["".concat(componentCls, "-container")]: {
                        border: 'none',
                        background: 'transparent',
                        boxShadow: 'none'
                    }
                },
                // Align placement should have another min width
                [[
                    "&-placement-topLeft",
                    "&-placement-topRight",
                    "&-placement-bottomLeft",
                    "&-placement-bottomRight"
                ].join(',')]: {
                    minWidth: edgeAlignMinWidth
                },
                // Limit left and right placement radius
                [[
                    "&-placement-left",
                    "&-placement-leftTop",
                    "&-placement-leftBottom",
                    "&-placement-right",
                    "&-placement-rightTop",
                    "&-placement-rightBottom"
                ].join(',')]: {
                    ["".concat(componentCls, "-inner")]: {
                        borderRadius: token.min(tooltipBorderRadius, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_VERTICAL_CONTENT_RADIUS"])
                    }
                },
                ["".concat(componentCls, "-content")]: {
                    position: 'relative'
                },
                // generator for preset color
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genPresetColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genPresetColor$3e$__["genPresetColor"])(token, (colorKey, param)=>{
                    let { darkColor } = param;
                    return {
                        ["&".concat(componentCls, "-").concat(colorKey)]: {
                            ["".concat(componentCls, "-container")]: {
                                backgroundColor: darkColor
                            },
                            ["".concat(componentCls, "-arrow")]: {
                                '--antd-arrow-background-color': darkColor
                            }
                        }
                    };
                }),
                // RTL
                '&-rtl': {
                    direction: 'rtl'
                }
            }
        },
        // Arrow Style
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(token, 'var(--antd-arrow-background-color)'),
        // Pure Render
        {
            ["".concat(componentCls, "-pure")]: {
                position: 'relative',
                maxWidth: 'none',
                margin: token.sizePopupArrow
            }
        },
        // Unique Body
        {
            ["".concat(componentCls, "-unique-container")]: {
                ...sharedBodyStyle,
                ...sharedTransformOrigin,
                position: 'absolute',
                zIndex: calc(zIndexPopup).sub(1).equal(),
                '&-hidden': {
                    display: 'none'
                },
                '&-visible': {
                    transition: "all ".concat(token.motionDurationSlow)
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>({
        zIndexPopup: token.zIndexPopupBase + 70,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$placementArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffsetToken"])({
            contentRadius: token.borderRadius,
            limitVerticalRadius: true
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$roundedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowToken"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
        }))
    });
const __TURBOPACK__default__export__ = function(prefixCls, rootCls) {
    let injectStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tooltip', (token)=>{
        const { borderRadius, colorTextLightSolid, colorBgSpotlight } = token;
        const TooltipToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            // default variables
            tooltipMaxWidth: 250,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgSpotlight
        });
        return [
            genTooltipStyle(TooltipToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(token, 'zoom-big-fast')
        ];
    }, prepareComponentToken, {
        resetStyle: false,
        // Popover use Tooltip as internal component. We do not need to handle this.
        injectStyle
    });
    return useStyle(prefixCls, rootCls);
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetStatusColors",
    ()=>PresetStatusColors,
    "isPresetColor",
    ()=>isPresetColor,
    "isPresetStatusColor",
    ()=>isPresetStatusColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/interface/presetColors.js [app-client] (ecmascript)");
;
;
const inverseColors = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].map((color)=>"".concat(color, "-inverse"));
const PresetStatusColors = [
    'success',
    'processing',
    'error',
    'default',
    'warning'
];
function isPresetColor(color) {
    let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (includeInverse) {
        return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inverseColors), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"])).includes(color);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$interface$2f$presetColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetColors"].includes(color);
}
function isPresetStatusColor(color) {
    return PresetStatusColors.includes(color);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseColor",
    ()=>parseColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/color-picker/util.js [app-client] (ecmascript)");
;
;
;
function parseColor(prefixCls, color) {
    const isInternalColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetColor"])(color);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-").concat(color)]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    const rgb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$color$2d$picker$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(color).toRgb();
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    const textColor = luminance < 0.5 ? '#FFF' : '#000';
    if (color && !isInternalColor) {
        overlayStyle.background = color;
        overlayStyle['--ant-tooltip-color'] = textColor;
        // @ts-ignore
        arrowStyle['--antd-arrow-background-color'] = color;
    }
    return {
        className,
        overlayStyle,
        arrowStyle
    };
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/PurePanel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tooltip/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tooltip/es/Popup.js [app-client] (ecmascript) <export default as Popup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/** @private Internal Component. Do not use in your production. */ const PurePanel = (props)=>{
    const { prefixCls: customizePrefixCls, className, placement = 'top', title, color, overlayInnerStyle, classNames, styles } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseColor"])(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const innerStyles = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "PurePanel.useMemo[innerStyles]": ()=>{
            const mergedStyle = {
                ...overlayInnerStyle,
                ...colorInfo.overlayStyle
            };
            return {
                container: mergedStyle
            };
        }
    }["PurePanel.useMemo[innerStyles]"], [
        overlayInnerStyle,
        colorInfo.overlayStyle
    ]);
    const mergedProps = {
        ...props,
        placement
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        classNames
    ], [
        innerStyles,
        styles
    ], {
        props: mergedProps
    });
    const rootClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls, prefixCls, "".concat(prefixCls, "-pure"), "".concat(prefixCls, "-placement-").concat(placement), className, colorInfo.className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: rootClassName,
        style: arrowContentStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-arrow")
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popup$3e$__["Popup"], {
        ...props,
        className: hashId,
        prefixCls: prefixCls,
        classNames: mergedClassNames,
        styles: mergedStyles
    }, title));
};
const __TURBOPACK__default__export__ = PurePanel;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const MotionContent = (param)=>{
    let { children } = param;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const rootPrefixCls = getPrefixCls();
    // This will never reach since we will not render this when no children
    /* istanbul ignore next */ if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        return children;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        visible: true,
        motionName: "".concat(rootPrefixCls, "-fade"),
        motionAppear: true,
        motionEnter: true,
        motionLeave: false,
        removeOnLeave: false
    }, (param)=>{
        let { style: motionStyle, className: motionClassName } = param;
        const { className, style } = children.props;
        const mergedStyles = {
            ...style,
            ...motionStyle
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, motionClassName),
            style: mergedStyles
        });
    });
};
const __TURBOPACK__default__export__ = MotionContent;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/trigger/es/UniqueProvider/index.js [app-client] (ecmascript) <export default as UniqueProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/UniqueProvider/MotionContent.js [app-client] (ecmascript)");
"use client";
;
;
;
const cachedPlacements = [
    null,
    null
];
function uniqueBuiltinPlacements(ori) {
    if (cachedPlacements[0] !== ori) {
        const target = {};
        Object.keys(ori).forEach((placement)=>{
            target[placement] = {
                ...ori[placement],
                dynamicInset: false
            };
        });
        cachedPlacements[0] = ori;
        cachedPlacements[1] = target;
    }
    return cachedPlacements[1];
}
const UniqueProvider = (param)=>{
    let { children } = param;
    const renderPopup = (options)=>{
        const popupEle = typeof options.popup === 'function' ? options.popup() : options.popup;
        const { id, builtinPlacements } = options;
        const parsedPlacements = uniqueBuiltinPlacements(builtinPlacements);
        return {
            ...options,
            getPopupContainer: null,
            arrow: false,
            popup: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$MotionContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                key: id
            }, popupEle),
            builtinPlacements: parsedPlacements
        };
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UniqueProvider$3e$__["UniqueProvider"], {
        postTriggerProps: renderPopup
    }, children);
};
const __TURBOPACK__default__export__ = UniqueProvider;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tooltip/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript) <export default as useControlledState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/placements.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/zindexContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/hook/useMergedArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/PurePanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/UniqueProvider/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const InternalTooltip = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, openClassName, getTooltipContainer, color, children, afterOpenChange, arrow: tooltipArrow, destroyTooltipOnHide, destroyOnHidden, title, overlay, builtinPlacements, autoAdjustOverflow = true, motion, getPopupContainer, placement = 'top', mouseEnterDelay = 0.1, mouseLeaveDelay = 0.1, rootClassName, styles, classNames, onOpenChange, // Legacy
    overlayInnerStyle, overlayStyle, overlayClassName, ...restProps } = props;
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const { getPopupContainer: getContextPopupContainer, getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles, arrow: contextArrow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tooltip');
    const mergedArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$hook$2f$useMergedArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tooltipArrow, contextArrow);
    const mergedShowArrow = mergedArrow.show;
    // ============================== Ref ===============================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tooltip');
    const tooltipRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const forceAlign = ()=>{
        var _tooltipRef_current;
        (_tooltipRef_current = tooltipRef.current) === null || _tooltipRef_current === void 0 ? void 0 : _tooltipRef_current.forceAlign();
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalTooltip.useImperativeHandle": ()=>{
            var _tooltipRef_current, _tooltipRef_current1;
            return {
                forceAlign,
                nativeElement: (_tooltipRef_current = tooltipRef.current) === null || _tooltipRef_current === void 0 ? void 0 : _tooltipRef_current.nativeElement,
                popupElement: (_tooltipRef_current1 = tooltipRef.current) === null || _tooltipRef_current1 === void 0 ? void 0 : _tooltipRef_current1.popupElement
            };
        }
    }["InternalTooltip.useImperativeHandle"]);
    // ============================== Warn ==============================
    if ("TURBOPACK compile-time truthy", 1) {
        [
            [
                'overlayStyle',
                'styles.root'
            ],
            [
                'overlayInnerStyle',
                'styles.container'
            ],
            [
                'overlayClassName',
                'classNames.root'
            ],
            [
                'destroyTooltipOnHide',
                'destroyOnHidden'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === 'boolean', 'usage', '`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.') : "TURBOPACK unreachable";
    }
    var _props_defaultOpen;
    // ============================== Open ==============================
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useControlledState$3e$__["useControlledState"])((_props_defaultOpen = props.defaultOpen) !== null && _props_defaultOpen !== void 0 ? _props_defaultOpen : false, props.open);
    const noTitle = !title && !overlay && title !== 0; // overlay for old version compatibility
    const onInternalOpenChange = (vis)=>{
        setOpen(noTitle ? false : vis);
        if (!noTitle && onOpenChange) {
            onOpenChange(vis);
        }
    };
    const tooltipPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[tooltipPlacements]": ()=>{
            var _mergedArrow_pointAtCenter;
            return builtinPlacements || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                arrowPointAtCenter: (_mergedArrow_pointAtCenter = mergedArrow === null || mergedArrow === void 0 ? void 0 : mergedArrow.pointAtCenter) !== null && _mergedArrow_pointAtCenter !== void 0 ? _mergedArrow_pointAtCenter : false,
                autoAdjustOverflow,
                arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
                borderRadius: token.borderRadius,
                offset: token.marginXXS,
                visibleFirst: true
            });
        }
    }["InternalTooltip.useMemo[tooltipPlacements]"], [
        mergedArrow,
        builtinPlacements,
        token,
        mergedShowArrow,
        autoAdjustOverflow
    ]);
    const memoOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTooltip.useMemo[memoOverlay]": ()=>{
            if (title === 0) {
                return title;
            }
            return overlay || title || '';
        }
    }["InternalTooltip.useMemo[memoOverlay]"], [
        overlay,
        title
    ]);
    const memoOverlayWrapper = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        space: true
    }, typeof memoOverlay === 'function' ? memoOverlay() : memoOverlay);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        color,
        placement,
        builtinPlacements,
        openClassName,
        arrow: tooltipArrow,
        autoAdjustOverflow,
        getPopupContainer,
        children,
        destroyTooltipOnHide,
        destroyOnHidden
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        styles
    ], {
        props: mergedProps
    });
    const prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props['data-popover-inject'];
    let tempOpen = open;
    // Hide tooltip when there is no title
    if (!('open' in props) && noTitle) {
        tempOpen = false;
    }
    // ============================= Render =============================
    const child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFragment"])(children) ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(childProps.className, openClassName || "".concat(prefixCls, "-open")) : childProps.className;
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls, !injectFromPopover);
    // Color
    const colorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseColor"])(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const themeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootCls, hashId, cssVarCls);
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(overlayClassName, {
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
    // ============================ zIndex ============================
    const [zIndex, contextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Tooltip', restProps.zIndex);
    const containerStyle = {
        ...mergedStyles.container,
        ...overlayInnerStyle,
        ...colorInfo.overlayStyle
    };
    const content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tooltip$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        unique: true,
        ...restProps,
        zIndex: zIndex,
        showArrow: mergedShowArrow,
        placement: placement,
        mouseEnterDelay: mouseEnterDelay,
        mouseLeaveDelay: mouseLeaveDelay,
        prefixCls: prefixCls,
        classNames: {
            root: rootClassNames,
            container: mergedClassNames.container,
            arrow: mergedClassNames.arrow,
            uniqueContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(themeCls, mergedClassNames.container)
        },
        styles: {
            root: {
                ...arrowContentStyle,
                ...mergedStyles.root,
                ...contextStyle,
                ...overlayStyle
            },
            container: containerStyle,
            uniqueContainer: containerStyle,
            arrow: mergedStyles.arrow
        },
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: tooltipRef,
        builtinPlacements: tooltipPlacements,
        overlay: memoOverlayWrapper,
        visible: tempOpen,
        onVisibleChange: onInternalOpenChange,
        afterVisibleChange: afterOpenChange,
        arrowContent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-arrow-content")
        }),
        motion: {
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(rootPrefixCls, 'zoom-big-fast', typeof (motion === null || motion === void 0 ? void 0 : motion.motionName) === 'string' ? motion === null || motion === void 0 ? void 0 : motion.motionName : undefined),
            motionDeadline: 1000
        },
        destroyOnHidden: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : !!destroyTooltipOnHide
    }, tempOpen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        className: childCls
    }) : child);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$zindexContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextZIndex
    }, content);
});
const Tooltip = InternalTooltip;
if ("TURBOPACK compile-time truthy", 1) {
    Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$PurePanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Tooltip.UniqueProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$UniqueProvider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Tooltip;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Item$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript) <export default as Item>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const MenuItem = (props)=>{
    const { className, children, icon, title, danger, extra } = props;
    const { prefixCls, firstLevel, direction, disableMenuItemTitleTooltip, inlineCollapsed: isInlineCollapsed, styles, classNames } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const renderItemChildren = (inlineCollapsed)=>{
        const label = children === null || children === void 0 ? void 0 : children[0];
        const wrapNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-title-content"), firstLevel ? classNames.itemContent : classNames.subMenu.itemContent, {
                ["".concat(prefixCls, "-title-content-with-extra")]: !!extra || extra === 0
            }),
            style: firstLevel ? styles.itemContent : styles.subMenu.itemContent
        }, children);
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        if (!icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children) && children.type === 'span') {
            if (children && inlineCollapsed && firstLevel && typeof label === 'string') {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                    className: "".concat(prefixCls, "-inline-collapsed-noicon")
                }, label.charAt(0));
            }
        }
        return wrapNode;
    };
    const { siderCollapsed } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiderContext"]);
    let tooltipTitle = title;
    if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
    } else if (title === false) {
        tooltipTitle = '';
    }
    const tooltipProps = {
        title: tooltipTitle
    };
    if (!siderCollapsed && !isInlineCollapsed) {
        tooltipProps.title = null;
        // Reset `open` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742
        tooltipProps.open = false;
    }
    const childrenLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).length;
    let returnNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Item$3e$__["Item"], {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
            'title',
            'icon',
            'danger'
        ]),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(firstLevel ? classNames.item : classNames.subMenu.item, {
            ["".concat(prefixCls, "-item-danger")]: danger,
            ["".concat(prefixCls, "-item-only-child")]: (icon ? childrenLength + 1 : childrenLength) === 1
        }, className),
        style: firstLevel ? styles.item : styles.subMenu.item,
        title: typeof title === 'string' ? title : undefined
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, (oriProps)=>({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, "".concat(prefixCls, "-item-icon"), firstLevel ? classNames.itemIcon : classNames.subMenu.itemIcon),
            style: {
                ...oriProps.style,
                ...firstLevel ? styles.itemIcon : styles.subMenu.itemIcon
            }
        })), renderItemChildren(isInlineCollapsed));
    if (!disableMenuItemTitleTooltip) {
        returnNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...tooltipProps,
            placement: direction === 'rtl' ? 'left' : 'right',
            classNames: {
                root: "".concat(prefixCls, "-inline-collapsed-tooltip")
            }
        }, returnNode);
    }
    return returnNode;
};
const __TURBOPACK__default__export__ = MenuItem;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/OverrideContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverrideProvider",
    ()=>OverrideProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
"use client";
;
;
;
const OverrideContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const OverrideProvider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { children, ...restProps } = props;
    const override = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](OverrideContext);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OverrideProvider.useMemo[context]": ()=>({
                ...override,
                ...restProps
            })
    }["OverrideProvider.useMemo[context]"], [
        override,
        restProps.prefixCls,
        // restProps.expandIcon, Not mark as deps since this is a ReactNode
        restProps.mode,
        restProps.selectable,
        restProps.rootClassName
    ]);
    const canRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportNodeRef"])(children);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, canRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children) : null);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](OverrideContext.Provider, {
        value: context
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        space: true
    }, canRef ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
        ref: mergedRef
    }) : children));
});
const __TURBOPACK__default__export__ = OverrideContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initSlideMotion",
    ()=>initSlideMotion,
    "slideDownIn",
    ()=>slideDownIn,
    "slideDownOut",
    ()=>slideDownOut,
    "slideLeftIn",
    ()=>slideLeftIn,
    "slideLeftOut",
    ()=>slideLeftOut,
    "slideRightIn",
    ()=>slideRightIn,
    "slideRightOut",
    ()=>slideRightOut,
    "slideUpIn",
    ()=>slideUpIn,
    "slideUpOut",
    ()=>slideUpOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/motion.js [app-client] (ecmascript)");
;
;
const slideUpIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideUpOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideUpOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideDownIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownIn', {
    '0%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    }
});
const slideDownOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideDownOut', {
    '0%': {
        transform: 'scaleY(1)',
        transformOrigin: '100% 100%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleY(0.8)',
        transformOrigin: '100% 100%',
        opacity: 0
    }
});
const slideLeftIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    }
});
const slideLeftOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideLeftOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '0% 0%',
        opacity: 0
    }
});
const slideRightIn = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightIn', {
    '0%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    },
    '100%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    }
});
const slideRightOut = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSlideRightOut', {
    '0%': {
        transform: 'scaleX(1)',
        transformOrigin: '100% 0%',
        opacity: 1
    },
    '100%': {
        transform: 'scaleX(0.8)',
        transformOrigin: '100% 0%',
        opacity: 0
    }
});
const slideMotion = {
    'slide-up': {
        inKeyframes: slideUpIn,
        outKeyframes: slideUpOut
    },
    'slide-down': {
        inKeyframes: slideDownIn,
        outKeyframes: slideDownOut
    },
    'slide-left': {
        inKeyframes: slideLeftIn,
        outKeyframes: slideLeftOut
    },
    'slide-right': {
        inKeyframes: slideRightIn,
        outKeyframes: slideRightOut
    }
};
const initSlideMotion = (token, motionName)=>{
    const { antCls } = token;
    const motionCls = "".concat(antCls, "-").concat(motionName);
    const { inKeyframes, outKeyframes } = slideMotion[motionName];
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initMotion"])(motionCls, inKeyframes, outKeyframes, token.motionDurationMid),
        {
            ["\n      ".concat(motionCls, "-enter,\n      ").concat(motionCls, "-appear\n    ")]: {
                transform: 'scale(0)',
                transformOrigin: '0% 0%',
                opacity: 0,
                animationTimingFunction: token.motionEaseOutQuint,
                '&-prepare': {
                    transform: 'scale(1)'
                }
            },
            ["".concat(motionCls, "-leave")]: {
                animationTimingFunction: token.motionEaseInQuint
            }
        }
    ];
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/horizontal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
;
const getHorizontalStyle = (token)=>{
    const { componentCls, motionDurationSlow, horizontalLineHeight, colorSplit, lineWidth, lineType, itemPaddingInline } = token;
    return {
        ["".concat(componentCls, "-horizontal")]: {
            lineHeight: horizontalLineHeight,
            border: 0,
            borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat(lineType, " ").concat(colorSplit),
            boxShadow: 'none',
            '&::after': {
                display: 'block',
                clear: 'both',
                height: 0,
                content: '"\\20"'
            },
            // ======================= Item =======================
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu")]: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'bottom',
                paddingInline: itemPaddingInline
            },
            ["> ".concat(componentCls, "-item:hover,\n        > ").concat(componentCls, "-item-active,\n        > ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title:hover")]: {
                backgroundColor: 'transparent'
            },
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                transition: [
                    "border-color ".concat(motionDurationSlow),
                    "background ".concat(motionDurationSlow)
                ].join(',')
            },
            // ===================== Sub Menu =====================
            ["".concat(componentCls, "-submenu-arrow")]: {
                display: 'none'
            }
        }
    };
};
const __TURBOPACK__default__export__ = getHorizontalStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/rtl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
;
const getRTLStyle = (param)=>{
    let { componentCls, menuArrowOffset, calc } = param;
    return {
        ["".concat(componentCls, "-rtl")]: {
            direction: 'rtl'
        },
        ["".concat(componentCls, "-submenu-rtl")]: {
            transformOrigin: '100% 0'
        },
        // Vertical Arrow
        ["".concat(componentCls, "-rtl").concat(componentCls, "-vertical,\n    ").concat(componentCls, "-submenu-rtl ").concat(componentCls, "-vertical")]: {
            ["".concat(componentCls, "-submenu-arrow")]: {
                '&::before': {
                    transform: "rotate(-45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(menuArrowOffset).mul(-1).equal()), ")")
                },
                '&::after': {
                    transform: "rotate(45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = getRTLStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
;
;
const accessibilityFocus = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token);
const getThemeStyle = (token, themeSuffix)=>{
    const { componentCls, itemColor, itemSelectedColor, subMenuItemSelectedColor, groupTitleColor, itemBg, subMenuItemBg, itemSelectedBg, activeBarHeight, activeBarWidth, activeBarBorderWidth, motionDurationSlow, motionEaseInOut, motionEaseOut, itemPaddingInline, motionDurationMid, itemHoverColor, lineType, colorSplit, // Disabled
    itemDisabledColor, // Danger
    dangerItemColor, dangerItemHoverColor, dangerItemSelectedColor, dangerItemActiveBg, dangerItemSelectedBg, // Bg
    popupBg, itemHoverBg, itemActiveBg, menuSubMenuBg, // Horizontal
    horizontalItemSelectedColor, horizontalItemSelectedBg, horizontalItemBorderRadius, horizontalItemHoverBg } = token;
    return {
        ["".concat(componentCls, "-").concat(themeSuffix, ", ").concat(componentCls, "-").concat(themeSuffix, " > ").concat(componentCls)]: {
            color: itemColor,
            background: itemBg,
            ["&".concat(componentCls, "-root:focus-visible")]: {
                ...accessibilityFocus(token)
            },
            // ======================== Item ========================
            ["".concat(componentCls, "-item")]: {
                '&-group-title, &-extra': {
                    color: groupTitleColor
                }
            },
            ["".concat(componentCls, "-submenu-selected > ").concat(componentCls, "-submenu-title")]: {
                color: subMenuItemSelectedColor
            },
            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                color: itemColor,
                ["&:not(".concat(componentCls, "-item-disabled):focus-visible")]: {
                    ...accessibilityFocus(token)
                }
            },
            // Disabled
            ["".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled")]: {
                color: "".concat(itemDisabledColor, " !important")
            },
            // Hover
            ["".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)")]: {
                ["&:hover, > ".concat(componentCls, "-submenu-title:hover")]: {
                    color: itemHoverColor
                }
            },
            ["&:not(".concat(componentCls, "-horizontal)")]: {
                ["".concat(componentCls, "-item:not(").concat(componentCls, "-item-selected)")]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                },
                ["".concat(componentCls, "-submenu-title")]: {
                    '&:hover': {
                        backgroundColor: itemHoverBg
                    },
                    '&:active': {
                        backgroundColor: itemActiveBg
                    }
                }
            },
            // Danger - only Item has
            ["".concat(componentCls, "-item-danger")]: {
                color: dangerItemColor,
                ["&".concat(componentCls, "-item:hover")]: {
                    ["&:not(".concat(componentCls, "-item-selected):not(").concat(componentCls, "-submenu-selected)")]: {
                        color: dangerItemHoverColor
                    }
                },
                ["&".concat(componentCls, "-item:active")]: {
                    background: dangerItemActiveBg
                }
            },
            ["".concat(componentCls, "-item a")]: {
                '&, &:hover': {
                    color: 'inherit'
                }
            },
            ["".concat(componentCls, "-item-selected")]: {
                color: itemSelectedColor,
                // Danger
                ["&".concat(componentCls, "-item-danger")]: {
                    color: dangerItemSelectedColor
                },
                'a, a:hover': {
                    color: 'inherit'
                }
            },
            ["& ".concat(componentCls, "-item-selected")]: {
                backgroundColor: itemSelectedBg,
                // Danger
                ["&".concat(componentCls, "-item-danger")]: {
                    backgroundColor: dangerItemSelectedBg
                }
            },
            ["&".concat(componentCls, "-submenu > ").concat(componentCls)]: {
                backgroundColor: menuSubMenuBg
            },
            // ===== 设置浮层的颜色 =======
            // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
            ["&".concat(componentCls, "-popup > ").concat(componentCls)]: {
                backgroundColor: popupBg
            },
            ["&".concat(componentCls, "-submenu-popup > ").concat(componentCls)]: {
                backgroundColor: popupBg
            },
            // ===== 设置浮层的颜色 end =======
            // ====================== Horizontal ======================
            ["&".concat(componentCls, "-horizontal")]: {
                ...themeSuffix === 'dark' ? {
                    borderBottom: 0
                } : {},
                ["> ".concat(componentCls, "-item, > ").concat(componentCls, "-submenu")]: {
                    top: activeBarBorderWidth,
                    marginTop: token.calc(activeBarBorderWidth).mul(-1).equal(),
                    marginBottom: 0,
                    borderRadius: horizontalItemBorderRadius,
                    '&::after': {
                        position: 'absolute',
                        insetInline: itemPaddingInline,
                        bottom: 0,
                        borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(activeBarHeight), " solid transparent"),
                        transition: "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        content: '""'
                    },
                    '&:hover, &-active, &-open': {
                        background: horizontalItemHoverBg,
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    },
                    '&-selected': {
                        color: horizontalItemSelectedColor,
                        backgroundColor: horizontalItemSelectedBg,
                        '&:hover': {
                            backgroundColor: horizontalItemSelectedBg
                        },
                        '&::after': {
                            borderBottomWidth: activeBarHeight,
                            borderBottomColor: horizontalItemSelectedColor
                        }
                    }
                }
            },
            // ================== Inline & Vertical ===================
            //
            ["&".concat(componentCls, "-root")]: {
                ["&".concat(componentCls, "-inline, &").concat(componentCls, "-vertical")]: {
                    borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(activeBarBorderWidth), " ").concat(lineType, " ").concat(colorSplit)
                }
            },
            // ======================== Inline ========================
            ["&".concat(componentCls, "-inline")]: {
                // Sub
                ["".concat(componentCls, "-sub").concat(componentCls, "-inline")]: {
                    background: subMenuItemBg
                },
                ["".concat(componentCls, "-item")]: {
                    position: 'relative',
                    '&::after': {
                        position: 'absolute',
                        insetBlock: 0,
                        insetInlineEnd: 0,
                        borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(activeBarWidth), " solid ").concat(itemSelectedColor),
                        transform: 'scaleY(0.0001)',
                        opacity: 0,
                        transition: [
                            "transform ".concat(motionDurationMid, " ").concat(motionEaseOut),
                            "opacity ".concat(motionDurationMid, " ").concat(motionEaseOut)
                        ].join(','),
                        content: '""'
                    },
                    // Danger
                    ["&".concat(componentCls, "-item-danger")]: {
                        '&::after': {
                            borderInlineEndColor: dangerItemSelectedColor
                        }
                    }
                },
                ["".concat(componentCls, "-selected, ").concat(componentCls, "-item-selected")]: {
                    '&::after': {
                        transform: 'scaleY(1)',
                        opacity: 1,
                        transition: [
                            "transform ".concat(motionDurationMid, " ").concat(motionEaseInOut),
                            "opacity ".concat(motionDurationMid, " ").concat(motionEaseInOut)
                        ].join(',')
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = getThemeStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/vertical.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
;
;
const getVerticalInlineStyle = (token)=>{
    const { componentCls, itemHeight, itemMarginInline, padding, menuArrowSize, marginXS, itemMarginBlock, itemWidth, itemPaddingInline } = token;
    const paddingWithArrow = token.calc(menuArrowSize).add(padding).add(marginXS).equal();
    return {
        ["".concat(componentCls, "-item")]: {
            position: 'relative',
            overflow: 'hidden'
        },
        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
            height: itemHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
            paddingInline: itemPaddingInline,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginInline: itemMarginInline,
            marginBlock: itemMarginBlock,
            width: itemWidth
        },
        ["> ".concat(componentCls, "-item,\n            > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
            height: itemHeight,
            lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight)
        },
        ["".concat(componentCls, "-item-group-list ").concat(componentCls, "-submenu-title,\n            ").concat(componentCls, "-submenu-title")]: {
            paddingInlineEnd: paddingWithArrow
        }
    };
};
const getVerticalStyle = (token)=>{
    const { componentCls, iconCls, itemHeight, colorTextLightSolid, dropdownWidth, controlHeightLG, motionEaseOut, paddingXL, itemMarginInline, fontSizeLG, motionDurationFast, motionDurationSlow, paddingXS, boxShadowSecondary, collapsedWidth, collapsedIconSize } = token;
    const inlineItemStyle = {
        height: itemHeight,
        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
        listStylePosition: 'inside',
        listStyleType: 'disc'
    };
    return [
        {
            [componentCls]: {
                '&-inline, &-vertical': {
                    ["&".concat(componentCls, "-root")]: {
                        boxShadow: 'none'
                    },
                    ...getVerticalInlineStyle(token)
                }
            },
            ["".concat(componentCls, "-submenu-popup")]: {
                ["".concat(componentCls, "-vertical")]: {
                    ...getVerticalInlineStyle(token),
                    boxShadow: boxShadowSecondary
                }
            }
        },
        // Vertical only
        {
            ["".concat(componentCls, "-submenu-popup ").concat(componentCls, "-vertical").concat(componentCls, "-sub")]: {
                minWidth: dropdownWidth,
                maxHeight: "calc(100vh - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(controlHeightLG).mul(2.5).equal()), ")"),
                padding: '0',
                overflow: 'hidden',
                borderInlineEnd: 0,
                // https://github.com/ant-design/ant-design/issues/22244
                // https://github.com/ant-design/ant-design/issues/26812
                "&:not([class*='-active'])": {
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }
            }
        },
        // Inline Only
        {
            ["".concat(componentCls, "-inline")]: {
                width: '100%',
                // Motion enhance for first level
                ["&".concat(componentCls, "-root")]: {
                    ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                        display: 'flex',
                        alignItems: 'center',
                        transition: [
                            "border-color ".concat(motionDurationSlow),
                            "background ".concat(motionDurationSlow),
                            "padding ".concat(motionDurationFast, " ").concat(motionEaseOut)
                        ].join(','),
                        ["> ".concat(componentCls, "-title-content")]: {
                            flex: 'auto',
                            minWidth: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        },
                        '> *': {
                            flex: 'none'
                        }
                    }
                },
                // >>>>> Sub
                ["".concat(componentCls, "-sub").concat(componentCls, "-inline")]: {
                    padding: 0,
                    border: 0,
                    borderRadius: 0,
                    boxShadow: 'none',
                    ["& > ".concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: inlineItemStyle,
                    ["& ".concat(componentCls, "-item-group-title")]: {
                        paddingInlineStart: paddingXL
                    }
                },
                // >>>>> Item
                ["".concat(componentCls, "-item")]: inlineItemStyle
            }
        },
        // Inline Collapse Only
        {
            ["".concat(componentCls, "-inline-collapsed")]: {
                width: collapsedWidth,
                ["&".concat(componentCls, "-root")]: {
                    ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu ").concat(componentCls, "-submenu-title")]: {
                        ["> ".concat(componentCls, "-inline-collapsed-noicon")]: {
                            fontSize: fontSizeLG,
                            textAlign: 'center'
                        }
                    }
                },
                ["> ".concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-item,\n          > ").concat(componentCls, "-item-group > ").concat(componentCls, "-item-group-list > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title,\n          > ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
                    insetInlineStart: 0,
                    paddingInline: "calc(50% - ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(collapsedIconSize).div(2).equal()), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(itemMarginInline), ")"),
                    textOverflow: 'clip',
                    ["\n            ".concat(componentCls, "-submenu-arrow,\n            ").concat(componentCls, "-submenu-expand-icon\n          ")]: {
                        opacity: 0
                    },
                    ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                        margin: 0,
                        fontSize: collapsedIconSize,
                        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(itemHeight),
                        '+ span': {
                            display: 'inline-block',
                            opacity: 0
                        }
                    }
                },
                ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                    display: 'inline-block'
                },
                '&-tooltip': {
                    pointerEvents: 'none',
                    ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                        display: 'none'
                    },
                    'a, a:hover': {
                        color: colorTextLightSolid
                    }
                },
                ["".concat(componentCls, "-item-group-title")]: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
                    paddingInline: paddingXS
                }
            }
        }
    ];
};
const __TURBOPACK__default__export__ = getVerticalStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/fast-color/es/FastColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/horizontal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/rtl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/vertical.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const genMenuItemStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionDurationMid, motionEaseInOut, motionEaseOut, iconCls, iconSize, iconMarginInlineEnd } = token;
    return {
        // >>>>> Item
        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
            position: 'relative',
            display: 'block',
            margin: 0,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: [
                "border-color ".concat(motionDurationSlow),
                "background ".concat(motionDurationSlow),
                "padding calc(".concat(motionDurationSlow, " + 0.1s) ").concat(motionEaseInOut)
            ].join(','),
            ["".concat(componentCls, "-item-icon, ").concat(iconCls)]: {
                minWidth: iconSize,
                fontSize: iconSize,
                transition: [
                    "font-size ".concat(motionDurationMid, " ").concat(motionEaseOut),
                    "margin ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                    "color ".concat(motionDurationSlow)
                ].join(','),
                '+ span': {
                    marginInlineStart: iconMarginInlineEnd,
                    opacity: 1,
                    transition: [
                        "opacity ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "margin ".concat(motionDurationSlow),
                        "color ".concat(motionDurationSlow)
                    ].join(',')
                }
            },
            ["".concat(componentCls, "-item-icon")]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetIcon"])()
            },
            ["&".concat(componentCls, "-item-only-child")]: {
                ["> ".concat(iconCls, ", > ").concat(componentCls, "-item-icon")]: {
                    marginInlineEnd: 0
                }
            }
        },
        // Disabled state sets text to gray and nukes hover/tab effects
        ["".concat(componentCls, "-item-disabled, ").concat(componentCls, "-submenu-disabled")]: {
            background: 'none !important',
            cursor: 'not-allowed',
            '&::after': {
                borderColor: 'transparent !important'
            },
            a: {
                color: 'inherit !important',
                cursor: 'not-allowed',
                pointerEvents: 'none'
            },
            ["> ".concat(componentCls, "-submenu-title")]: {
                color: 'inherit !important',
                cursor: 'not-allowed'
            }
        }
    };
};
const genSubMenuArrowStyle = (token)=>{
    const { componentCls, motionDurationSlow, motionEaseInOut, borderRadius, menuArrowSize, menuArrowOffset } = token;
    return {
        ["".concat(componentCls, "-submenu")]: {
            '&-expand-icon, &-arrow': {
                position: 'absolute',
                top: '50%',
                insetInlineEnd: token.margin,
                width: menuArrowSize,
                color: 'currentcolor',
                transform: 'translateY(-50%)',
                transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut, ", opacity ").concat(motionDurationSlow)
            },
            '&-arrow': {
                // →
                '&::before, &::after': {
                    position: 'absolute',
                    width: token.calc(menuArrowSize).mul(0.6).equal(),
                    height: token.calc(menuArrowSize).mul(0.15).equal(),
                    backgroundColor: 'currentcolor',
                    borderRadius,
                    transition: [
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "top ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "color ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(','),
                    content: '""'
                },
                '&::before': {
                    transform: "rotate(45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                },
                '&::after': {
                    transform: "rotate(-45deg) translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                }
            }
        }
    };
};
// =============================== Base ===============================
const getBaseStyle = (token)=>{
    const { antCls, componentCls, fontSize, motionDurationSlow, motionDurationMid, motionEaseInOut, paddingXS, padding, colorSplit, lineWidth, zIndexPopup, borderRadiusLG, subMenuItemBorderRadius, menuArrowSize, menuArrowOffset, lineType, groupTitleLineHeight, groupTitleFontSize } = token;
    return [
        // Misc
        {
            '': {
                [componentCls]: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
                    // Hidden
                    '&-hidden': {
                        display: 'none'
                    }
                }
            },
            ["".concat(componentCls, "-submenu-hidden")]: {
                display: 'none'
            }
        },
        {
            [componentCls]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
                marginBottom: 0,
                paddingInlineStart: 0,
                // Override default ul/ol
                fontSize,
                lineHeight: 0,
                // Fix display inline-block gap
                listStyle: 'none',
                outline: 'none',
                // Magic cubic here but smooth transition
                transition: "width ".concat(motionDurationSlow, " cubic-bezier(0.2, 0, 0, 1) 0s"),
                'ul, ol': {
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                // Overflow ellipsis
                '&-overflow': {
                    display: 'flex',
                    ["".concat(componentCls, "-item")]: {
                        flex: 'none'
                    }
                },
                ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-title")]: {
                    borderRadius: token.itemBorderRadius
                },
                ["".concat(componentCls, "-item-group-title")]: {
                    padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingXS), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(padding)),
                    fontSize: groupTitleFontSize,
                    lineHeight: groupTitleLineHeight,
                    transition: "all ".concat(motionDurationSlow)
                },
                ["&-horizontal ".concat(componentCls, "-submenu")]: {
                    transition: [
                        "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-submenu, ").concat(componentCls, "-submenu-inline")]: {
                    transition: [
                        "border-color ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "padding ".concat(motionDurationMid, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-submenu ").concat(componentCls, "-sub")]: {
                    cursor: 'initial',
                    transition: [
                        "background ".concat(motionDurationSlow, " ").concat(motionEaseInOut),
                        "padding ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                    ].join(',')
                },
                ["".concat(componentCls, "-title-content")]: {
                    transition: "color ".concat(motionDurationSlow),
                    '&-with-extra': {
                        display: 'inline-flex',
                        alignItems: 'center',
                        width: '100%'
                    },
                    // https://github.com/ant-design/ant-design/issues/41143
                    ["> ".concat(antCls, "-typography-ellipsis-single-line")]: {
                        display: 'inline',
                        verticalAlign: 'unset'
                    },
                    ["".concat(componentCls, "-item-extra")]: {
                        marginInlineStart: 'auto',
                        paddingInlineStart: token.padding
                    }
                },
                ["".concat(componentCls, "-item a")]: {
                    '&::before': {
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'transparent',
                        content: '""'
                    }
                },
                // Removed a Badge related style seems it's safe
                // https://github.com/ant-design/ant-design/issues/19809
                // >>>>> Divider
                ["".concat(componentCls, "-item-divider")]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: colorSplit,
                    borderStyle: lineType,
                    borderWidth: 0,
                    borderTopWidth: lineWidth,
                    marginBlock: lineWidth,
                    padding: 0,
                    '&-dashed': {
                        borderStyle: 'dashed'
                    }
                },
                // Item
                ...genMenuItemStyle(token),
                ["".concat(componentCls, "-item-group")]: {
                    ["".concat(componentCls, "-item-group-list")]: {
                        margin: 0,
                        padding: 0,
                        ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu-title")]: {
                            paddingInline: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(fontSize).mul(2).equal()), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(padding))
                        }
                    }
                },
                // ======================= Sub Menu =======================
                '&-submenu': {
                    '&-popup': {
                        position: 'absolute',
                        zIndex: zIndexPopup,
                        borderRadius: borderRadiusLG,
                        boxShadow: 'none',
                        transformOrigin: '0 0',
                        ["&".concat(componentCls, "-submenu")]: {
                            background: 'transparent'
                        },
                        // https://github.com/ant-design/ant-design/issues/13955
                        '&::before': {
                            position: 'absolute',
                            inset: 0,
                            zIndex: -1,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            content: '""'
                        },
                        ["> ".concat(componentCls)]: {
                            borderRadius: borderRadiusLG,
                            ...genMenuItemStyle(token),
                            ...genSubMenuArrowStyle(token),
                            ["".concat(componentCls, "-item, ").concat(componentCls, "-submenu > ").concat(componentCls, "-submenu-title")]: {
                                borderRadius: subMenuItemBorderRadius
                            },
                            ["".concat(componentCls, "-submenu-title::after")]: {
                                transition: "transform ".concat(motionDurationSlow, " ").concat(motionEaseInOut)
                            }
                        }
                    },
                    ["\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          "]: {
                        transformOrigin: '100% 0'
                    },
                    ["\n          &-placement-leftBottom,\n          &-placement-topRight,\n          "]: {
                        transformOrigin: '100% 100%'
                    },
                    ["\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          "]: {
                        transformOrigin: '0 100%'
                    },
                    ["\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          "]: {
                        transformOrigin: '0 0'
                    },
                    ["\n          &-placement-leftTop,\n          &-placement-leftBottom\n          "]: {
                        paddingInlineEnd: token.paddingXS
                    },
                    ["\n          &-placement-rightTop,\n          &-placement-rightBottom\n          "]: {
                        paddingInlineStart: token.paddingXS
                    },
                    ["\n          &-placement-topRight,\n          &-placement-topLeft\n          "]: {
                        paddingBottom: token.paddingXS
                    },
                    ["\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          "]: {
                        paddingTop: token.paddingXS
                    }
                },
                ...genSubMenuArrowStyle(token),
                ["&-inline-collapsed ".concat(componentCls, "-submenu-arrow,\n        &-inline ").concat(componentCls, "-submenu-arrow")]: {
                    // ↓
                    '&::before': {
                        transform: "rotate(-45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                    },
                    '&::after': {
                        transform: "rotate(45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                    }
                },
                ["".concat(componentCls, "-submenu-open").concat(componentCls, "-submenu-inline > ").concat(componentCls, "-submenu-title > ").concat(componentCls, "-submenu-arrow")]: {
                    // ↑
                    transform: "translateY(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowSize).mul(0.2).mul(-1).equal()), ")"),
                    '&::after': {
                        transform: "rotate(-45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(menuArrowOffset).mul(-1).equal()), ")")
                    },
                    '&::before': {
                        transform: "rotate(45deg) translateX(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(menuArrowOffset), ")")
                    }
                }
            }
        },
        // Integration with header element so menu items have the same height
        {
            ["".concat(antCls, "-layout-header")]: {
                [componentCls]: {
                    lineHeight: 'inherit'
                }
            }
        }
    ];
};
const prepareComponentToken = (token)=>{
    const { colorPrimary, colorError, colorTextDisabled, colorErrorBg, colorText, colorTextDescription, colorBgContainer, colorFillAlter, colorFillContent, lineWidth, lineWidthBold, controlItemBgActive, colorBgTextHover, controlHeightLG, lineHeight, colorBgElevated, marginXXS, padding, fontSize, controlHeightSM, fontSizeLG, colorTextLightSolid, colorErrorHover } = token;
    var _token_activeBarWidth;
    const activeBarWidth = (_token_activeBarWidth = token.activeBarWidth) !== null && _token_activeBarWidth !== void 0 ? _token_activeBarWidth : 0;
    var _token_activeBarBorderWidth;
    const activeBarBorderWidth = (_token_activeBarBorderWidth = token.activeBarBorderWidth) !== null && _token_activeBarBorderWidth !== void 0 ? _token_activeBarBorderWidth : lineWidth;
    var _token_itemMarginInline;
    const itemMarginInline = (_token_itemMarginInline = token.itemMarginInline) !== null && _token_itemMarginInline !== void 0 ? _token_itemMarginInline : token.marginXXS;
    const colorTextDark = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](colorTextLightSolid).setA(0.65).toRgbString();
    return {
        dropdownWidth: 160,
        zIndexPopup: token.zIndexPopupBase + 50,
        radiusItem: token.borderRadiusLG,
        itemBorderRadius: token.borderRadiusLG,
        radiusSubMenuItem: token.borderRadiusSM,
        subMenuItemBorderRadius: token.borderRadiusSM,
        colorItemText: colorText,
        itemColor: colorText,
        colorItemTextHover: colorText,
        itemHoverColor: colorText,
        colorItemTextHoverHorizontal: colorPrimary,
        horizontalItemHoverColor: colorPrimary,
        colorGroupTitle: colorTextDescription,
        groupTitleColor: colorTextDescription,
        colorItemTextSelected: colorPrimary,
        itemSelectedColor: colorPrimary,
        subMenuItemSelectedColor: colorPrimary,
        colorItemTextSelectedHorizontal: colorPrimary,
        horizontalItemSelectedColor: colorPrimary,
        colorItemBg: colorBgContainer,
        itemBg: colorBgContainer,
        colorItemBgHover: colorBgTextHover,
        itemHoverBg: colorBgTextHover,
        colorItemBgActive: colorFillContent,
        itemActiveBg: controlItemBgActive,
        colorSubItemBg: colorFillAlter,
        subMenuItemBg: colorFillAlter,
        colorItemBgSelected: controlItemBgActive,
        itemSelectedBg: controlItemBgActive,
        colorItemBgSelectedHorizontal: 'transparent',
        horizontalItemSelectedBg: 'transparent',
        colorActiveBarWidth: 0,
        activeBarWidth,
        colorActiveBarHeight: lineWidthBold,
        activeBarHeight: lineWidthBold,
        colorActiveBarBorderSize: lineWidth,
        activeBarBorderWidth,
        // Disabled
        colorItemTextDisabled: colorTextDisabled,
        itemDisabledColor: colorTextDisabled,
        // Danger
        colorDangerItemText: colorError,
        dangerItemColor: colorError,
        colorDangerItemTextHover: colorError,
        dangerItemHoverColor: colorError,
        colorDangerItemTextSelected: colorError,
        dangerItemSelectedColor: colorError,
        colorDangerItemBgActive: colorErrorBg,
        dangerItemActiveBg: colorErrorBg,
        colorDangerItemBgSelected: colorErrorBg,
        dangerItemSelectedBg: colorErrorBg,
        itemMarginInline,
        horizontalItemBorderRadius: 0,
        horizontalItemHoverBg: 'transparent',
        itemHeight: controlHeightLG,
        groupTitleLineHeight: lineHeight,
        collapsedWidth: controlHeightLG * 2,
        popupBg: colorBgElevated,
        itemMarginBlock: marginXXS,
        itemPaddingInline: padding,
        horizontalLineHeight: "".concat(controlHeightLG * 1.15, "px"),
        iconSize: fontSize,
        iconMarginInlineEnd: controlHeightSM - fontSize,
        collapsedIconSize: fontSizeLG,
        groupTitleFontSize: fontSize,
        // Disabled
        darkItemDisabledColor: new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$fast$2d$color$2f$es$2f$FastColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FastColor"](colorTextLightSolid).setA(0.25).toRgbString(),
        // Dark
        darkItemColor: colorTextDark,
        darkDangerItemColor: colorError,
        darkItemBg: '#001529',
        darkPopupBg: '#001529',
        darkSubMenuItemBg: '#000c17',
        darkItemSelectedColor: colorTextLightSolid,
        darkItemSelectedBg: colorPrimary,
        darkDangerItemSelectedBg: colorError,
        darkItemHoverBg: 'transparent',
        darkGroupTitleColor: colorTextDark,
        darkItemHoverColor: colorTextLightSolid,
        darkDangerItemHoverColor: colorErrorHover,
        darkDangerItemSelectedColor: colorTextLightSolid,
        darkDangerItemActiveBg: colorError,
        // internal
        itemWidth: activeBarWidth ? "calc(100% + ".concat(activeBarBorderWidth, "px)") : "calc(100% - ".concat(itemMarginInline * 2, "px)")
    };
};
const __TURBOPACK__default__export__ = function(prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls, injectStyle = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Menu', (token)=>{
        const { colorBgElevated, controlHeightLG, fontSize, darkItemColor, darkDangerItemColor, darkItemBg, darkSubMenuItemBg, darkItemSelectedColor, darkItemSelectedBg, darkDangerItemSelectedBg, darkItemHoverBg, darkGroupTitleColor, darkItemHoverColor, darkItemDisabledColor, darkDangerItemHoverColor, darkDangerItemSelectedColor, darkDangerItemActiveBg, popupBg, darkPopupBg } = token;
        const menuArrowSize = token.calc(fontSize).div(7).mul(5).equal();
        // Menu Token
        const menuToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
            menuArrowSize,
            menuHorizontalHeight: token.calc(controlHeightLG).mul(1.15).equal(),
            menuArrowOffset: token.calc(menuArrowSize).mul(0.25).equal(),
            menuSubMenuBg: colorBgElevated,
            calc: token.calc,
            popupBg
        });
        const menuDarkToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(menuToken, {
            itemColor: darkItemColor,
            itemHoverColor: darkItemHoverColor,
            groupTitleColor: darkGroupTitleColor,
            itemSelectedColor: darkItemSelectedColor,
            subMenuItemSelectedColor: darkItemSelectedColor,
            itemBg: darkItemBg,
            popupBg: darkPopupBg,
            subMenuItemBg: darkSubMenuItemBg,
            itemActiveBg: 'transparent',
            itemSelectedBg: darkItemSelectedBg,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: darkItemHoverBg,
            // Disabled
            itemDisabledColor: darkItemDisabledColor,
            // Danger
            dangerItemColor: darkDangerItemColor,
            dangerItemHoverColor: darkDangerItemHoverColor,
            dangerItemSelectedColor: darkDangerItemSelectedColor,
            dangerItemActiveBg: darkDangerItemActiveBg,
            dangerItemSelectedBg: darkDangerItemSelectedBg,
            menuSubMenuBg: darkSubMenuItemBg,
            // Horizontal
            horizontalItemSelectedColor: darkItemSelectedColor,
            horizontalItemSelectedBg: darkItemSelectedBg
        });
        return [
            // Basic
            getBaseStyle(menuToken),
            // Horizontal
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Hard code for some light style
            // Vertical
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Hard code for some light style
            // Theme
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuToken, 'light'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuDarkToken, 'dark'),
            // RTL
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(menuToken),
            // Motion
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(menuToken),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(menuToken, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(menuToken, 'slide-down'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initZoomMotion"])(menuToken, 'zoom-big')
        ];
    }, prepareComponentToken, {
        deprecatedTokens: [
            [
                'colorGroupTitle',
                'groupTitleColor'
            ],
            [
                'radiusItem',
                'itemBorderRadius'
            ],
            [
                'radiusSubMenuItem',
                'subMenuItemBorderRadius'
            ],
            [
                'colorItemText',
                'itemColor'
            ],
            [
                'colorItemTextHover',
                'itemHoverColor'
            ],
            [
                'colorItemTextHoverHorizontal',
                'horizontalItemHoverColor'
            ],
            [
                'colorItemTextSelected',
                'itemSelectedColor'
            ],
            [
                'colorItemTextSelectedHorizontal',
                'horizontalItemSelectedColor'
            ],
            [
                'colorItemTextDisabled',
                'itemDisabledColor'
            ],
            [
                'colorDangerItemText',
                'dangerItemColor'
            ],
            [
                'colorDangerItemTextHover',
                'dangerItemHoverColor'
            ],
            [
                'colorDangerItemTextSelected',
                'dangerItemSelectedColor'
            ],
            [
                'colorDangerItemBgActive',
                'dangerItemActiveBg'
            ],
            [
                'colorDangerItemBgSelected',
                'dangerItemSelectedBg'
            ],
            [
                'colorItemBg',
                'itemBg'
            ],
            [
                'colorItemBgHover',
                'itemHoverBg'
            ],
            [
                'colorSubItemBg',
                'subMenuItemBg'
            ],
            [
                'colorItemBgActive',
                'itemActiveBg'
            ],
            [
                'colorItemBgSelectedHorizontal',
                'horizontalItemSelectedBg'
            ],
            [
                'colorActiveBarWidth',
                'activeBarWidth'
            ],
            [
                'colorActiveBarHeight',
                'activeBarHeight'
            ],
            [
                'colorActiveBarBorderSize',
                'activeBarBorderWidth'
            ],
            [
                'colorItemBgSelected',
                'itemSelectedBg'
            ]
        ],
        // Dropdown will handle menu style self. We do not need to handle this.
        injectStyle,
        unitless: {
            groupTitleLineHeight: true
        }
    });
    return useStyle(prefixCls, rootCls);
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/SubMenu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/SubMenu/index.js [app-client] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/context/PathContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useZIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const SubMenu = (props)=>{
    const { popupClassName, icon, title, theme: customTheme } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { prefixCls, inlineCollapsed, theme: contextTheme, classNames, styles } = context;
    const parentPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$context$2f$PathContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFullPath"])();
    let titleNode;
    if (!icon) {
        titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
        }, title.charAt(0)) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-title-content")
        }, title);
    } else {
        // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456
        const titleIsSpan = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](title) && title.type === 'span';
        titleNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(icon, (oriProps)=>({
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(oriProps.className, "".concat(prefixCls, "-item-icon"), classNames.itemIcon),
                style: {
                    ...oriProps.style,
                    ...styles.itemIcon
                }
            })), titleIsSpan ? title : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-title-content")
        }, title));
    }
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SubMenu.useMemo[contextValue]": ()=>({
                ...context,
                firstLevel: false
            })
    }["SubMenu.useMemo[contextValue]"], [
        context
    ]);
    // ============================ zIndex ============================
    const [zIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useZIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZIndex"])('Menu');
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$SubMenu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(props, [
            'icon'
        ]),
        title: titleNode,
        classNames: {
            list: classNames.subMenu.list,
            listTitle: classNames.subMenu.itemTitle
        },
        styles: {
            list: styles.subMenu.list,
            listTitle: styles.subMenu.itemTitle
        },
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, popupClassName, classNames.popup.root, "".concat(prefixCls, "-").concat(customTheme || contextTheme)),
        popupStyle: {
            zIndex,
            // fix: https://github.com/ant-design/ant-design/issues/47826#issuecomment-2360737237
            ...props.popupStyle,
            ...styles.popup.root
        }
    }));
};
const __TURBOPACK__default__export__ = SubMenu;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuDivider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/OverrideContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/SubMenu.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function isEmptyIcon(icon) {
    return icon === null || icon === false;
}
const MENU_COMPONENTS = {
    item: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    submenu: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    divider: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const InternalMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _overrideObj_validator;
    const override = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const overrideObj = override || {};
    const { prefixCls: customizePrefixCls, className, style, theme = 'light', expandIcon, _internalDisableMenuItemTitleTooltip, inlineCollapsed, siderCollapsed, rootClassName, mode, selectable, onClick, overflowedIndicatorPopupClassName, classNames, styles, ...restProps } = props;
    const { menu } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { getPrefixCls, getPopupContainer, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('menu');
    const rootPrefixCls = getPrefixCls();
    const passedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
        'collapsedWidth'
    ]);
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Menu');
        ("TURBOPACK compile-time truthy", 1) ? warning(!('inlineCollapsed' in props && mode !== 'inline'), 'usage', '`inlineCollapsed` should only be used when `mode` is inline.') : "TURBOPACK unreachable";
        warning.deprecated('items' in props && !props.children, 'children', 'items');
    }
    (_overrideObj_validator = overrideObj.validator) === null || _overrideObj_validator === void 0 ? void 0 : _overrideObj_validator.call(overrideObj, {
        mode
    });
    // ========================== Click ==========================
    // Tell dropdown that item clicked
    const onItemClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "InternalMenu.useEvent[onItemClick]": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _overrideObj_onClick;
            onClick === null || onClick === void 0 ? void 0 : onClick(...args);
            (_overrideObj_onClick = overrideObj.onClick) === null || _overrideObj_onClick === void 0 ? void 0 : _overrideObj_onClick.call(overrideObj);
        }
    }["InternalMenu.useEvent[onItemClick]"]);
    // ========================== Mode ===========================
    const mergedMode = overrideObj.mode || mode;
    // ======================= Selectable ========================
    const mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
    // ======================== Collapsed ========================
    // Inline Collapsed
    const mergedInlineCollapsed = inlineCollapsed !== null && inlineCollapsed !== void 0 ? inlineCollapsed : siderCollapsed;
    // ================ Merged Props for Semantic ================
    const mergedProps = {
        ...props,
        mode: mergedMode,
        inlineCollapsed: mergedInlineCollapsed,
        selectable: mergedSelectable,
        theme
    };
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        styles
    ], {
        props: mergedProps
    }, {
        popup: {
            _default: 'root'
        },
        subMenu: {
            _default: 'item'
        }
    });
    const defaultMotions = {
        horizontal: {
            motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(rootPrefixCls),
        other: {
            motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
    };
    const prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls, !override);
    const menuClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-").concat(theme), contextClassName, className);
    // ====================== ExpandIcon ========================
    const mergedExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalMenu.useMemo[mergedExpandIcon]": ()=>{
            var _mergedIcon_props;
            if (typeof expandIcon === 'function' || isEmptyIcon(expandIcon)) {
                return expandIcon || null;
            }
            if (typeof overrideObj.expandIcon === 'function' || isEmptyIcon(overrideObj.expandIcon)) {
                return overrideObj.expandIcon || null;
            }
            if (typeof (menu === null || menu === void 0 ? void 0 : menu.expandIcon) === 'function' || isEmptyIcon(menu === null || menu === void 0 ? void 0 : menu.expandIcon)) {
                return (menu === null || menu === void 0 ? void 0 : menu.expandIcon) || null;
            }
            var _ref;
            const mergedIcon = (_ref = expandIcon !== null && expandIcon !== void 0 ? expandIcon : overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon) !== null && _ref !== void 0 ? _ref : menu === null || menu === void 0 ? void 0 : menu.expandIcon;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(mergedIcon, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-submenu-expand-icon"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](mergedIcon) ? (_mergedIcon_props = mergedIcon.props) === null || _mergedIcon_props === void 0 ? void 0 : _mergedIcon_props.className : undefined)
            });
        }
    }["InternalMenu.useMemo[mergedExpandIcon]"], [
        expandIcon,
        overrideObj === null || overrideObj === void 0 ? void 0 : overrideObj.expandIcon,
        menu === null || menu === void 0 ? void 0 : menu.expandIcon,
        prefixCls
    ]);
    // ======================== Context ==========================
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalMenu.useMemo[contextValue]": ()=>({
                prefixCls,
                inlineCollapsed: mergedInlineCollapsed || false,
                direction,
                firstLevel: true,
                theme,
                mode: mergedMode,
                disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip,
                classNames: mergedClassNames,
                styles: mergedStyles
            })
    }["InternalMenu.useMemo[contextValue]"], [
        prefixCls,
        mergedInlineCollapsed,
        direction,
        _internalDisableMenuItemTitleTooltip,
        theme,
        mergedMode,
        mergedClassNames,
        mergedStyles
    ]);
    // ========================= Render ==========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$OverrideContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: null
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        overflowedIndicatorPopupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-").concat(theme), overflowedIndicatorPopupClassName),
        classNames: {
            list: mergedClassNames.list,
            listTitle: mergedClassNames.itemTitle
        },
        styles: {
            list: mergedStyles.list,
            listTitle: mergedStyles.itemTitle
        },
        mode: mergedMode,
        selectable: mergedSelectable,
        onClick: onItemClick,
        ...passedProps,
        inlineCollapsed: mergedInlineCollapsed,
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: mergedExpandIcon,
        ref: ref,
        rootClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(rootClassName, hashId, overrideObj.rootClassName, cssVarCls, rootCls, mergedClassNames.root),
        _internalComponents: MENU_COMPONENTS
    })));
});
const __TURBOPACK__default__export__ = InternalMenu;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ItemGroup$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/MenuItemGroup.js [app-client] (ecmascript) <export default as ItemGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/layout/Sider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuDivider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/SubMenu.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Menu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$layout$2f$Sider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiderContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Menu.useImperativeHandle": ()=>({
                menu: menuRef.current,
                focus: ({
                    "Menu.useImperativeHandle": (options)=>{
                        var _menuRef_current;
                        (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.focus(options);
                    }
                })["Menu.useImperativeHandle"]
            })
    }["Menu.useImperativeHandle"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: menuRef,
        ...props,
        ...context
    });
});
Menu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Menu.SubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$SubMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Menu.Divider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$MenuDivider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Menu.ItemGroup = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItemGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ItemGroup$3e$__["ItemGroup"];
if ("TURBOPACK compile-time truthy", 1) {
    Menu.displayName = 'Menu';
}
const __TURBOPACK__default__export__ = Menu;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/index.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/menu/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=eef15_antd_es_269b6c9e._.js.map