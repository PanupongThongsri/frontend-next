(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/CSSMotionList.js [app-client] (ecmascript) <export default as CSSMotionList>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSMotionList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/CSSMotionList.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useDebounce(value) {
    const [cacheValue, setCacheValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](value);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDebounce.useEffect": ()=>{
            const timeout = setTimeout({
                "useDebounce.useEffect.timeout": ()=>{
                    setCacheValue(value);
                }
            }["useDebounce.useEffect.timeout"], value.length ? 0 : 10);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(timeout);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value
    ]);
    return cacheValue;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/explain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const genFormValidateMotionStyle = (token)=>{
    const { componentCls } = token;
    const helpCls = "".concat(componentCls, "-show-help");
    const helpItemCls = "".concat(componentCls, "-show-help-item");
    return {
        [helpCls]: {
            // Explain holder
            transition: "opacity ".concat(token.motionDurationFast, " ").concat(token.motionEaseInOut),
            '&-appear, &-enter': {
                opacity: 0,
                '&-active': {
                    opacity: 1
                }
            },
            '&-leave': {
                opacity: 1,
                '&-active': {
                    opacity: 0
                }
            },
            // Explain
            [helpItemCls]: {
                overflow: 'hidden',
                transition: "height ".concat(token.motionDurationFast, " ").concat(token.motionEaseInOut, ",\n                     opacity ").concat(token.motionDurationFast, " ").concat(token.motionEaseInOut, ",\n                     transform ").concat(token.motionDurationFast, " ").concat(token.motionEaseInOut, " !important"),
                ["&".concat(helpItemCls, "-appear, &").concat(helpItemCls, "-enter")]: {
                    transform: "translateY(-5px)",
                    opacity: 0,
                    '&-active': {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                },
                ["&".concat(helpItemCls, "-leave-active")]: {
                    transform: "translateY(-5px)"
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = genFormValidateMotionStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken,
    "prepareToken",
    ()=>prepareToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/collapse.js [app-client] (ecmascript) <export default as genCollapseMotion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$explain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/explain.js [app-client] (ecmascript)");
;
;
;
;
;
const resetForm = (token)=>({
        legend: {
            display: 'block',
            width: '100%',
            marginBottom: token.marginLG,
            padding: 0,
            color: token.colorTextDescription,
            fontSize: token.fontSizeLG,
            lineHeight: 'inherit',
            border: 0,
            borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
        },
        'input[type="search"]': {
            boxSizing: 'border-box'
        },
        // Position radios and checkboxes better
        'input[type="radio"], input[type="checkbox"]': {
            lineHeight: 'normal'
        },
        'input[type="file"]': {
            display: 'block'
        },
        // Make range inputs behave like textual form controls
        'input[type="range"]': {
            display: 'block',
            width: '100%'
        },
        // Make multiple select elements height not fixed
        'select[multiple], select[size]': {
            height: 'auto'
        },
        // Focus for file, radio, and checkbox
        ["input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus"]: {
            outline: 0,
            boxShadow: "0 0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.controlOutlineWidth), " ").concat(token.controlOutline)
        },
        // Adjust output element
        output: {
            display: 'block',
            paddingTop: 15,
            color: token.colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight
        }
    });
const genFormSize = (token, height)=>{
    const { formItemCls } = token;
    return {
        [formItemCls]: {
            ["".concat(formItemCls, "-label > label")]: {
                height
            },
            ["".concat(formItemCls, "-control-input")]: {
                minHeight: height
            }
        }
    };
};
const genFormStyle = (token)=>{
    const { componentCls } = token;
    return {
        [token.componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...resetForm(token),
            ["".concat(componentCls, "-text")]: {
                display: 'inline-block',
                paddingInlineEnd: token.paddingSM
            },
            // ================================================================
            // =                             Size                             =
            // ================================================================
            '&-small': {
                ...genFormSize(token, token.controlHeightSM)
            },
            '&-large': {
                ...genFormSize(token, token.controlHeightLG)
            }
        }
    };
};
const genFormItemStyle = (token)=>{
    const { formItemCls, iconCls, rootPrefixCls, antCls, labelRequiredMarkColor, labelColor, labelFontSize, labelHeight, labelColonMarginInlineStart, labelColonMarginInlineEnd, itemMarginBottom } = token;
    return {
        [formItemCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            marginBottom: itemMarginBottom,
            verticalAlign: 'top',
            '&-with-help': {
                transition: 'none'
            },
            ["&-hidden,\n        &-hidden".concat(antCls, "-row")]: {
                // https://github.com/ant-design/ant-design/issues/26141
                display: 'none'
            },
            '&-has-warning': {
                ["".concat(formItemCls, "-split")]: {
                    color: token.colorError
                }
            },
            '&-has-error': {
                ["".concat(formItemCls, "-split")]: {
                    color: token.colorWarning
                }
            },
            // ==============================================================
            // =                            Label                           =
            // ==============================================================
            ["".concat(formItemCls, "-label")]: {
                flexGrow: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: 'end',
                verticalAlign: 'middle',
                '&-left': {
                    textAlign: 'start'
                },
                '&-wrap': {
                    overflow: 'unset',
                    lineHeight: token.lineHeight,
                    whiteSpace: 'unset',
                    '> label': {
                        verticalAlign: 'middle',
                        textWrap: 'balance'
                    }
                },
                '> label': {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                    height: labelHeight,
                    color: labelColor,
                    fontSize: labelFontSize,
                    ["> ".concat(iconCls)]: {
                        fontSize: token.fontSize,
                        verticalAlign: 'top'
                    },
                    ["&".concat(formItemCls, "-required")]: {
                        '&::before': {
                            display: 'inline-block',
                            marginInlineEnd: token.marginXXS,
                            color: labelRequiredMarkColor,
                            fontSize: token.fontSize,
                            fontFamily: 'SimSun, sans-serif',
                            lineHeight: 1,
                            content: '"*"'
                        },
                        ["&".concat(formItemCls, "-required-mark-hidden, &").concat(formItemCls, "-required-mark-optional")]: {
                            '&::before': {
                                display: 'none'
                            }
                        }
                    },
                    // Optional mark
                    ["".concat(formItemCls, "-optional")]: {
                        display: 'inline-block',
                        marginInlineStart: token.marginXXS,
                        color: token.colorTextDescription,
                        ["&".concat(formItemCls, "-required-mark-hidden")]: {
                            display: 'none'
                        }
                    },
                    // Optional mark
                    ["".concat(formItemCls, "-tooltip")]: {
                        color: token.colorTextDescription,
                        cursor: 'help',
                        writingMode: 'horizontal-tb',
                        marginInlineStart: token.marginXXS
                    },
                    '&::after': {
                        content: '":"',
                        position: 'relative',
                        marginBlock: 0,
                        marginInlineStart: labelColonMarginInlineStart,
                        marginInlineEnd: labelColonMarginInlineEnd
                    },
                    ["&".concat(formItemCls, "-no-colon::after")]: {
                        content: '"\\a0"'
                    }
                }
            },
            // ==============================================================
            // =                            Input                           =
            // ==============================================================
            ["".concat(formItemCls, "-control")]: {
                ['--ant-display']: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                ["&:first-child:not([class^=\"'".concat(rootPrefixCls, "-col-'\"]):not([class*=\"' ").concat(rootPrefixCls, "-col-'\"])")]: {
                    width: '100%'
                },
                '&-input': {
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: token.controlHeight,
                    '&-content': {
                        flex: 'auto',
                        maxWidth: '100%',
                        // Fix https://github.com/ant-design/ant-design/issues/54042
                        // Remove impact of whitespaces
                        ["&:has(> ".concat(antCls, "-switch:only-child, > ").concat(antCls, "-rate:only-child)")]: {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }
                }
            },
            // ==============================================================
            // =                           Explain                          =
            // ==============================================================
            [formItemCls]: {
                '&-additional': {
                    display: 'flex',
                    flexDirection: 'column'
                },
                '&-explain, &-extra': {
                    clear: 'both',
                    color: token.colorTextDescription,
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight
                },
                '&-explain-connected': {
                    width: '100%'
                },
                '&-extra': {
                    minHeight: token.controlHeightSM,
                    transition: "color ".concat(token.motionDurationMid, " ").concat(token.motionEaseOut) // sync input color transition
                },
                '&-explain': {
                    '&-error': {
                        color: token.colorError
                    },
                    '&-warning': {
                        color: token.colorWarning
                    }
                }
            },
            ["&-with-help ".concat(formItemCls, "-explain")]: {
                height: 'auto',
                opacity: 1
            },
            // ==============================================================
            // =                        Feedback Icon                       =
            // ==============================================================
            ["".concat(formItemCls, "-feedback-icon")]: {
                fontSize: token.fontSize,
                textAlign: 'center',
                visibility: 'visible',
                animationName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomIn"],
                animationDuration: token.motionDurationMid,
                animationTimingFunction: token.motionEaseOutBack,
                pointerEvents: 'none',
                '&-success': {
                    color: token.colorSuccess
                },
                '&-error': {
                    color: token.colorError
                },
                '&-warning': {
                    color: token.colorWarning
                },
                '&-validating': {
                    color: token.colorPrimary
                }
            }
        }
    };
};
const makeVerticalLayoutLabel = (token)=>({
        padding: token.verticalLabelPadding,
        margin: token.verticalLabelMargin,
        whiteSpace: 'initial',
        textAlign: 'start',
        '> label': {
            margin: 0,
            '&::after': {
                // https://github.com/ant-design/ant-design/issues/43538
                visibility: 'hidden'
            }
        }
    });
const genHorizontalStyle = (token)=>{
    const { antCls, formItemCls } = token;
    return {
        ["".concat(formItemCls, "-horizontal")]: {
            ["".concat(formItemCls, "-label")]: {
                flexGrow: 0
            },
            ["".concat(formItemCls, "-control")]: {
                flex: '1 1 0',
                // https://github.com/ant-design/ant-design/issues/32777
                // https://github.com/ant-design/ant-design/issues/33773
                minWidth: 0
            },
            // Do not change this to `ant-col-24`! `-24` match all the responsive rules
            // https://github.com/ant-design/ant-design/issues/32980
            // https://github.com/ant-design/ant-design/issues/34903
            // https://github.com/ant-design/ant-design/issues/44538
            ["".concat(formItemCls, "-label[class$='-24'], ").concat(formItemCls, "-label[class*='-24 ']")]: {
                ["& + ".concat(formItemCls, "-control")]: {
                    minWidth: 'unset'
                }
            },
            ["".concat(antCls, "-col-24").concat(formItemCls, "-label,\n        ").concat(antCls, "-col-xl-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
        }
    };
};
const genInlineStyle = (token)=>{
    const { componentCls, formItemCls, inlineItemMarginBottom } = token;
    return {
        ["".concat(componentCls, "-inline")]: {
            display: 'flex',
            flexWrap: 'wrap',
            ["".concat(formItemCls, "-inline")]: {
                flex: 'none',
                marginInlineEnd: token.margin,
                marginBottom: inlineItemMarginBottom,
                '&-row': {
                    flexWrap: 'nowrap'
                },
                ["> ".concat(formItemCls, "-label,\n        > ").concat(formItemCls, "-control")]: {
                    display: 'inline-block',
                    verticalAlign: 'top'
                },
                ["> ".concat(formItemCls, "-label")]: {
                    flex: 'none'
                },
                ["".concat(componentCls, "-text")]: {
                    display: 'inline-block'
                },
                ["".concat(formItemCls, "-has-feedback")]: {
                    display: 'inline-block'
                }
            }
        }
    };
};
const makeVerticalLayout = (token)=>{
    const { componentCls, formItemCls, rootPrefixCls } = token;
    return {
        ["".concat(formItemCls, " ").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token),
        // ref: https://github.com/ant-design/ant-design/issues/45122
        ["".concat(componentCls, ":not(").concat(componentCls, "-inline)")]: {
            [formItemCls]: {
                flexWrap: 'wrap',
                ["".concat(formItemCls, "-label, ").concat(formItemCls, "-control")]: {
                    // When developer pass `xs: { span }`,
                    // It should follow the `xs` screen config
                    // ref: https://github.com/ant-design/ant-design/issues/44386
                    ['&:not([class*=" '.concat(rootPrefixCls, '-col-xs"])')]: {
                        flex: '0 0 100%',
                        maxWidth: '100%'
                    }
                }
            }
        }
    };
};
const genVerticalStyle = (token)=>{
    const { componentCls, formItemCls, antCls } = token;
    return {
        ["".concat(formItemCls, "-vertical")]: {
            ["".concat(formItemCls, "-row")]: {
                flexDirection: 'column'
            },
            ["".concat(formItemCls, "-label > label")]: {
                height: 'auto'
            },
            ["".concat(formItemCls, "-control")]: {
                width: '100%'
            },
            ["".concat(formItemCls, "-label,\n        ").concat(antCls, "-col-24").concat(formItemCls, "-label,\n        ").concat(antCls, "-col-xl-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
        },
        ["@media (max-width: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenXSMax), ")")]: [
            makeVerticalLayout(token),
            {
                [componentCls]: {
                    ["".concat(formItemCls, ":not(").concat(formItemCls, "-horizontal)")]: {
                        ["".concat(antCls, "-col-xs-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
                    }
                }
            }
        ],
        ["@media (max-width: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenSMMax), ")")]: {
            [componentCls]: {
                ["".concat(formItemCls, ":not(").concat(formItemCls, "-horizontal)")]: {
                    ["".concat(antCls, "-col-sm-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
                }
            }
        },
        ["@media (max-width: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenMDMax), ")")]: {
            [componentCls]: {
                ["".concat(formItemCls, ":not(").concat(formItemCls, "-horizontal)")]: {
                    ["".concat(antCls, "-col-md-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
                }
            }
        },
        ["@media (max-width: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.screenLGMax), ")")]: {
            [componentCls]: {
                ["".concat(formItemCls, ":not(").concat(formItemCls, "-horizontal)")]: {
                    ["".concat(antCls, "-col-lg-24").concat(formItemCls, "-label")]: makeVerticalLayoutLabel(token)
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>({
        labelRequiredMarkColor: token.colorError,
        labelColor: token.colorTextHeading,
        labelFontSize: token.fontSize,
        labelHeight: token.controlHeight,
        labelColonMarginInlineStart: token.marginXXS / 2,
        labelColonMarginInlineEnd: token.marginXS,
        itemMarginBottom: token.marginLG,
        verticalLabelPadding: "0 0 ".concat(token.paddingXS, "px"),
        verticalLabelMargin: 0,
        inlineItemMarginBottom: 0
    });
const prepareToken = (token, rootPrefixCls)=>{
    const formToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        formItemCls: "".concat(token.componentCls, "-item"),
        rootPrefixCls
    });
    return formToken;
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Form', (token, param)=>{
    let { rootPrefixCls } = param;
    const formToken = prepareToken(token, rootPrefixCls);
    return [
        genFormStyle(formToken),
        genFormItemStyle(formToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$explain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(formToken),
        genHorizontalStyle(formToken),
        genInlineStyle(formToken),
        genVerticalStyle(formToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__genCollapseMotion$3e$__["genCollapseMotion"])(formToken),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomIn"]
    ];
}, prepareComponentToken, {
    // Let From style before the Grid
    // ref https://github.com/ant-design/ant-design/issues/44386
    order: -1000
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/CSSMotionList.js [app-client] (ecmascript) <export default as CSSMotionList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/isNonNullable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
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
const EMPTY_LIST = [];
function toErrorEntity(error, prefix, errorStatus) {
    let index = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    return {
        key: typeof error === 'string' ? error : "".concat(prefix, "-").concat(index),
        error,
        errorStatus
    };
}
const ErrorList = (param)=>{
    let { help, helpStatus, errors = EMPTY_LIST, warnings = EMPTY_LIST, className: rootClassName, fieldId, onVisibleChanged } = param;
    const { prefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"]);
    const baseClassName = "".concat(prefixCls, "-item-explain");
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const collapseMotion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[collapseMotion]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls)
    }["ErrorList.useMemo[collapseMotion]"], [
        prefixCls
    ]);
    // We have to debounce here again since somewhere use ErrorList directly still need no shaking
    // ref: https://github.com/ant-design/ant-design/issues/36336
    const debounceErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(errors);
    const debounceWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(warnings);
    const fullKeyList = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[fullKeyList]": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(help)) {
                return [
                    toErrorEntity(help, 'help', helpStatus)
                ];
            }
            return [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(debounceErrors.map({
                "ErrorList.useMemo[fullKeyList]": (error, index)=>toErrorEntity(error, 'error', 'error', index)
            }["ErrorList.useMemo[fullKeyList]"])), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(debounceWarnings.map({
                "ErrorList.useMemo[fullKeyList]": (warning, index)=>toErrorEntity(warning, 'warning', 'warning', index)
            }["ErrorList.useMemo[fullKeyList]"])));
        }
    }["ErrorList.useMemo[fullKeyList]"], [
        help,
        helpStatus,
        debounceErrors,
        debounceWarnings
    ]);
    const filledKeyFullKeyList = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ErrorList.useMemo[filledKeyFullKeyList]": ()=>{
            const keysCount = {};
            fullKeyList.forEach({
                "ErrorList.useMemo[filledKeyFullKeyList]": (param)=>{
                    let { key } = param;
                    keysCount[key] = (keysCount[key] || 0) + 1;
                }
            }["ErrorList.useMemo[filledKeyFullKeyList]"]);
            return fullKeyList.map({
                "ErrorList.useMemo[filledKeyFullKeyList]": (entity, index)=>({
                        ...entity,
                        key: keysCount[entity.key] > 1 ? "".concat(entity.key, "-fallback-").concat(index) : entity.key
                    })
            }["ErrorList.useMemo[filledKeyFullKeyList]"]);
        }
    }["ErrorList.useMemo[filledKeyFullKeyList]"], [
        fullKeyList
    ]);
    const helpProps = {};
    if (fieldId) {
        helpProps.id = "".concat(fieldId, "_help");
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        motionDeadline: collapseMotion.motionDeadline,
        motionName: "".concat(prefixCls, "-show-help"),
        visible: !!filledKeyFullKeyList.length,
        onVisibleChanged: onVisibleChanged
    }, (holderProps)=>{
        const { className: holderClassName, style: holderStyle } = holderProps;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            ...helpProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(baseClassName, holderClassName, cssVarCls, rootCls, rootClassName, hashId),
            style: holderStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$CSSMotionList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CSSMotionList$3e$__["CSSMotionList"], {
            keys: filledKeyFullKeyList,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls),
            motionName: "".concat(prefixCls, "-show-help-item"),
            component: false
        }, (itemProps)=>{
            const { key, error, errorStatus, className: itemClassName, style: itemStyle } = itemProps;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                key: key,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemClassName, {
                    ["".concat(baseClassName, "-").concat(errorStatus)]: errorStatus
                }),
                style: itemStyle
            }, error);
        }));
    });
};
const __TURBOPACK__default__export__ = ErrorList;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript) <export default as List>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useWatch.js [app-client] (ecmascript) <export default as useWatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useWatch.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useForm.js [app-client] (ecmascript) <export default as useForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useForm.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compute",
    ()=>r
]);
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, n = (t, n)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const o = getComputedStyle(t, null);
        return e(o.overflowY, n) || e(o.overflowX, n) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, o = (t, e, n, o, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
}, r = (e, r)=>{
    var i, s, d, h;
    if ("undefined" == typeof document) return [];
    const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
        if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: n } = e;
            B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Documents/admin-frontend-next/www/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)");
;
const o = (t)=>!1 === t ? {
        block: "end",
        inline: "nearest"
    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
        block: "start",
        inline: "nearest"
    };
function e(e, r) {
    if (!e.isConnected || !((t)=>{
        let o = t;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(e)) return;
    const n = ((t)=>{
        const o = window.getComputedStyle(t);
        return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
        };
    })(e);
    if (((t)=>"object" == typeof t && "function" == typeof t.behavior)(r)) return r.behavior((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, r));
    const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
    for (const { el: a, top: i, left: s } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, o(r))){
        const t = i - n.top + n.bottom, o = s - n.left + n.right;
        a.scroll({
            top: t,
            left: o,
            behavior: l
        });
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
__turbopack_context__.s([
    "getFieldId",
    ()=>getFieldId,
    "getStatus",
    ()=>getStatus,
    "toArray",
    ()=>toArray
]);
const formItemNameBlackList = [
    'parentNode'
];
// default form item id prefix.
const defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
    if (candidate === undefined || candidate === false) {
        return [];
    }
    return Array.isArray(candidate) ? candidate : [
        candidate
    ];
}
function getFieldId(namePath, formName) {
    if (!namePath.length) {
        return undefined;
    }
    const mergedId = namePath.join('_');
    if (formName) {
        return "".concat(formName, "_").concat(mergedId);
    }
    const isIllegalName = formItemNameBlackList.includes(mergedId);
    return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
}
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
    let status = defaultValidateStatus;
    if (validateStatus !== undefined) {
        status = validateStatus;
    } else if (meta.validating) {
        status = 'validating';
    } else if (errors.length) {
        status = 'error';
    } else if (warnings.length) {
        status = 'warning';
    } else if (meta.touched || hasFeedback && meta.validated) {
        // success feedback should display when pass hasFeedback prop and current value is valid value
        status = 'success';
    }
    return status;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useForm,
    "toNamePathStr",
    ()=>toNamePathStr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useForm.js [app-client] (ecmascript) <export default as useForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/findDOMNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
;
;
;
;
;
function toNamePathStr(name) {
    const namePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name);
    return namePath.join('_');
}
function getFieldDOMNode(name, wrapForm) {
    const field = wrapForm.getFieldInstance(name);
    const fieldDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDOM"])(field);
    if (fieldDom) {
        return fieldDom;
    }
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldId"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name), wrapForm.__INTERNAL__.name);
    if (fieldId) {
        return document.getElementById(fieldId);
    }
}
function useForm(form) {
    const [rcForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"])();
    const itemsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const wrapForm = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useForm.useMemo[wrapForm]": ()=>form !== null && form !== void 0 ? form : {
                ...rcForm,
                __INTERNAL__: {
                    itemRef: ({
                        "useForm.useMemo[wrapForm]": (name)=>({
                                "useForm.useMemo[wrapForm]": (node)=>{
                                    const namePathStr = toNamePathStr(name);
                                    if (node) {
                                        itemsRef.current[namePathStr] = node;
                                    } else {
                                        delete itemsRef.current[namePathStr];
                                    }
                                }
                            })["useForm.useMemo[wrapForm]"]
                    })["useForm.useMemo[wrapForm]"]
                },
                scrollToField: ({
                    "useForm.useMemo[wrapForm]": function(name) {
                        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        const { focus, ...restOpt } = options;
                        const node = getFieldDOMNode(name, wrapForm);
                        if (node) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, {
                                scrollMode: 'if-needed',
                                block: 'nearest',
                                ...restOpt
                            });
                            // Focus if scroll success
                            if (focus) {
                                wrapForm.focusField(name);
                            }
                        }
                    }
                })["useForm.useMemo[wrapForm]"],
                focusField: ({
                    "useForm.useMemo[wrapForm]": (name)=>{
                        const itemRef = wrapForm.getFieldInstance(name);
                        if (typeof (itemRef === null || itemRef === void 0 ? void 0 : itemRef.focus) === 'function') {
                            itemRef.focus();
                        } else {
                            var _getFieldDOMNode_focus, _getFieldDOMNode;
                            (_getFieldDOMNode = getFieldDOMNode(name, wrapForm)) === null || _getFieldDOMNode === void 0 ? void 0 : (_getFieldDOMNode_focus = _getFieldDOMNode.focus) === null || _getFieldDOMNode_focus === void 0 ? void 0 : _getFieldDOMNode_focus.call(_getFieldDOMNode);
                        }
                    }
                })["useForm.useMemo[wrapForm]"],
                getFieldInstance: ({
                    "useForm.useMemo[wrapForm]": (name)=>{
                        const namePathStr = toNamePathStr(name);
                        return itemsRef.current[namePathStr];
                    }
                })["useForm.useMemo[wrapForm]"]
            }
    }["useForm.useMemo[wrapForm]"], [
        form,
        rcForm
    ]);
    return [
        wrapForm
    ];
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormWarning.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFormWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
;
const names = {};
function useFormWarning(param) {
    let { name } = param;
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Form');
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFormWarning.useEffect": ()=>{
            if (name) {
                names[name] = (names[name] || 0) + 1;
                ("TURBOPACK compile-time truthy", 1) ? warning(names[name] <= 1, 'usage', 'There exist multiple Form with same `name`.') : "TURBOPACK unreachable";
                return ({
                    "useFormWarning.useEffect": ()=>{
                        names[name] -= 1;
                    }
                })["useFormWarning.useEffect"];
            }
        }
    }["useFormWarning.useEffect"], [
        name
    ]);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/validateMessagesContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/Form.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useWatch.js [app-client] (ecmascript) <export default as useWatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/SizeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormWarning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/validateMessagesContext.js [app-client] (ecmascript)");
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
const InternalForm = (props, ref)=>{
    const contextDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { getPrefixCls, direction, requiredMark: contextRequiredMark, colon: contextColon, scrollToFirstError: contextScrollToFirstError, className: contextClassName, style: contextStyle, styles: contextStyles, classNames: contextClassNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('form');
    const { prefixCls: customizePrefixCls, className, rootClassName, size, disabled = contextDisabled, form, colon, labelAlign, labelWrap, labelCol, wrapperCol, layout = 'horizontal', scrollToFirstError, requiredMark, onFinishFailed, name, style, feedbackIcons, variant, classNames, styles, ...restFormProps } = props;
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(size);
    const contextValidateMessages = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$validateMessagesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    /* eslint-disable react-hooks/rules-of-hooks */ if ("TURBOPACK compile-time truthy", 1) {
        // biome-ignore lint/correctness/useHookAtTopLevel: Development-only warning hook called conditionally
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormWarning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props);
    }
    /* eslint-enable */ const mergedRequiredMark = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalForm.useMemo[mergedRequiredMark]": ()=>{
            if (requiredMark !== undefined) {
                return requiredMark;
            }
            if (contextRequiredMark !== undefined) {
                return contextRequiredMark;
            }
            return true;
        }
    }["InternalForm.useMemo[mergedRequiredMark]"], [
        requiredMark,
        contextRequiredMark
    ]);
    const mergedColon = colon !== null && colon !== void 0 ? colon : contextColon;
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size: mergedSize,
        disabled,
        layout,
        colon: mergedColon,
        requiredMark: mergedRequiredMark
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
    const formClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-").concat(layout), {
        ["".concat(prefixCls, "-hide-required-mark")]: mergedRequiredMark === false,
        // todo: remove in next major version
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-").concat(mergedSize)]: mergedSize
    }, cssVarCls, rootCls, hashId, contextClassName, className, rootClassName, mergedClassNames.root);
    const [wrapForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(form);
    const { __INTERNAL__ } = wrapForm;
    __INTERNAL__.name = name;
    const formContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalForm.useMemo[formContextValue]": ()=>({
                name,
                labelAlign,
                labelCol,
                labelWrap,
                wrapperCol,
                layout,
                colon: mergedColon,
                requiredMark: mergedRequiredMark,
                itemRef: __INTERNAL__.itemRef,
                form: wrapForm,
                feedbackIcons,
                classNames: mergedClassNames,
                styles: mergedStyles
            })
    }["InternalForm.useMemo[formContextValue]"], [
        name,
        labelAlign,
        labelCol,
        wrapperCol,
        layout,
        mergedColon,
        mergedRequiredMark,
        wrapForm,
        feedbackIcons,
        mergedClassNames,
        mergedStyles
    ]);
    const nativeElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalForm.useImperativeHandle": ()=>{
            var _nativeElementRef_current;
            return {
                ...wrapForm,
                nativeElement: (_nativeElementRef_current = nativeElementRef.current) === null || _nativeElementRef_current === void 0 ? void 0 : _nativeElementRef_current.nativeElement
            };
        }
    }["InternalForm.useImperativeHandle"]);
    const scrollToField = (options, fieldName)=>{
        if (options) {
            let defaultScrollToFirstError = {
                block: 'nearest'
            };
            if (typeof options === 'object') {
                defaultScrollToFirstError = {
                    ...defaultScrollToFirstError,
                    ...options
                };
            }
            wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
        }
    };
    const onInternalFinishFailed = (errorInfo)=>{
        onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
        if (errorInfo.errorFields.length) {
            const fieldName = errorInfo.errorFields[0].name;
            if (scrollToFirstError !== undefined) {
                scrollToField(scrollToFirstError, fieldName);
                return;
            }
            if (contextScrollToFirstError !== undefined) {
                scrollToField(contextScrollToFirstError, fieldName);
            }
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantContext"].Provider, {
        value: variant
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledContextProvider"], {
        disabled: disabled
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$SizeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: mergedSize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"], {
        // This is not list in API, we pass with spread
        validateMessages: contextValidateMessages
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"].Provider, {
        value: formContextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoFormStyle"], {
        status: true
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: name,
        ...restFormProps,
        name: name,
        onFinishFailed: onInternalFinishFailed,
        form: wrapForm,
        ref: nativeElementRef,
        style: {
            ...mergedStyles === null || mergedStyles === void 0 ? void 0 : mergedStyles.root,
            ...contextStyle,
            ...style
        },
        className: formClassName
    })))))));
};
const Form = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](InternalForm);
if ("TURBOPACK compile-time truthy", 1) {
    Form.displayName = 'Form';
}
;
const __TURBOPACK__default__export__ = Form;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/Field.js [app-client] (ecmascript) <export default as Field>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/Field.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/FieldContext.js [app-client] (ecmascript) <export default as FieldContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/FieldContext.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/ListContext.js [app-client] (ecmascript) <export default as ListContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/ListContext.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useChildren.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
;
function useChildren(children) {
    if (typeof children === 'function') {
        return children;
    }
    const childList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
    return childList.length <= 1 ? childList[0] : childList;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormItemStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
const useFormItemStatus = ()=>{
    const { status, errors = [], warnings = [] } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Form.Item');
        ("TURBOPACK compile-time truthy", 1) ? warning(status !== undefined, 'usage', 'Form.Item.useStatus should be used under Form.Item component. For more information: https://u.ant.design/form-item-usestatus') : "TURBOPACK unreachable";
    }
    return {
        status,
        errors,
        warnings
    };
};
// Only used for compatible package. Not promise this will work on future version.
useFormItemStatus.Context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"];
const __TURBOPACK__default__export__ = useFormItemStatus;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFrameState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFrameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
;
;
function useFrameState(defaultValue) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultValue);
    const frameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const batchRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    const destroyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFrameState.useEffect": ()=>{
            destroyRef.current = false;
            return ({
                "useFrameState.useEffect": ()=>{
                    destroyRef.current = true;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(frameRef.current);
                    frameRef.current = null;
                }
            })["useFrameState.useEffect"];
        }
    }["useFrameState.useEffect"], []);
    function setFrameValue(updater) {
        if (destroyRef.current) {
            return;
        }
        if (frameRef.current === null) {
            batchRef.current = [];
            frameRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
                frameRef.current = null;
                setValue((prevValue)=>{
                    let current = prevValue;
                    batchRef.current.forEach((func)=>{
                        current = func(current);
                    });
                    return current;
                });
            });
        }
        batchRef.current.push(updater);
    }
    return [
        value,
        setFrameValue
    ];
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useItemRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useItemRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
function useItemRef() {
    const { itemRef } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const cacheRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    function getRef(name, children) {
        // Outer caller already check the `supportRef`
        const childrenRef = children && typeof children === 'object' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children);
        const nameStr = name.join('_');
        if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
            cacheRef.current.name = nameStr;
            cacheRef.current.originRef = childrenRef;
            cacheRef.current.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(itemRef(name), childrenRef);
        }
        return cacheRef.current.ref;
    }
    return getRef;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchScreen",
    ()=>matchScreen,
    "responsiveArray",
    ()=>responsiveArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/useToken.js [app-client] (ecmascript) <export default as useToken>");
;
;
const responsiveArray = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
];
const getResponsiveMap = (token)=>({
        xs: "(max-width: ".concat(token.screenXSMax, "px)"),
        sm: "(min-width: ".concat(token.screenSM, "px)"),
        md: "(min-width: ".concat(token.screenMD, "px)"),
        lg: "(min-width: ".concat(token.screenLG, "px)"),
        xl: "(min-width: ".concat(token.screenXL, "px)"),
        xxl: "(min-width: ".concat(token.screenXXL, "px)")
    });
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */ const validateBreakpoints = (token)=>{
    const indexableToken = token;
    const revBreakpoints = [].concat(responsiveArray).reverse();
    revBreakpoints.forEach((breakpoint, i)=>{
        const breakpointUpper = breakpoint.toUpperCase();
        const screenMin = "screen".concat(breakpointUpper, "Min");
        const screen = "screen".concat(breakpointUpper);
        if (!(indexableToken[screenMin] <= indexableToken[screen])) {
            throw new Error("".concat(screenMin, "<=").concat(screen, " fails : !(").concat(indexableToken[screenMin], "<=").concat(indexableToken[screen], ")"));
        }
        if (i < revBreakpoints.length - 1) {
            const screenMax = "screen".concat(breakpointUpper, "Max");
            if (!(indexableToken[screen] <= indexableToken[screenMax])) {
                throw new Error("".concat(screen, "<=").concat(screenMax, " fails : !(").concat(indexableToken[screen], "<=").concat(indexableToken[screenMax], ")"));
            }
            const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
            const nextScreenMin = "screen".concat(nextBreakpointUpperMin, "Min");
            if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
                throw new Error("".concat(screenMax, "<=").concat(nextScreenMin, " fails : !(").concat(indexableToken[screenMax], "<=").concat(indexableToken[nextScreenMin], ")"));
            }
        }
    });
    return token;
};
const matchScreen = (screens, screenSizes)=>{
    if (!screenSizes) {
        return;
    }
    for (const breakpoint of responsiveArray){
        if (screens[breakpoint] && (screenSizes === null || screenSizes === void 0 ? void 0 : screenSizes[breakpoint]) !== undefined) {
            return screenSizes[breakpoint];
        }
    }
};
const useResponsiveObserver = ()=>{
    const [, token] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$useToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useToken$3e$__["useToken"])();
    const responsiveMap = getResponsiveMap(validateBreakpoints(token));
    // To avoid repeat create instance, we add `useMemo` here.
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useResponsiveObserver.useMemo": ()=>{
            const subscribers = new Map();
            let subUid = -1;
            let screens = {};
            return {
                responsiveMap,
                matchHandlers: {},
                dispatch (pointMap) {
                    screens = pointMap;
                    subscribers.forEach({
                        "useResponsiveObserver.useMemo": (func)=>func(screens)
                    }["useResponsiveObserver.useMemo"]);
                    return subscribers.size >= 1;
                },
                subscribe (func) {
                    if (!subscribers.size) {
                        this.register();
                    }
                    subUid += 1;
                    subscribers.set(subUid, func);
                    func(screens);
                    return subUid;
                },
                unsubscribe (paramToken) {
                    subscribers.delete(paramToken);
                    if (!subscribers.size) {
                        this.unregister();
                    }
                },
                register () {
                    Object.entries(responsiveMap).forEach({
                        "useResponsiveObserver.useMemo": (param)=>{
                            let [screen, mediaQuery] = param;
                            const listener = {
                                "useResponsiveObserver.useMemo.listener": (param)=>{
                                    let { matches } = param;
                                    this.dispatch({
                                        ...screens,
                                        [screen]: matches
                                    });
                                }
                            }["useResponsiveObserver.useMemo.listener"];
                            const mql = window.matchMedia(mediaQuery);
                            if (typeof (mql === null || mql === void 0 ? void 0 : mql.addEventListener) === 'function') {
                                mql.addEventListener('change', listener);
                            }
                            this.matchHandlers[mediaQuery] = {
                                mql,
                                listener
                            };
                            listener(mql);
                        }
                    }["useResponsiveObserver.useMemo"]);
                },
                unregister () {
                    Object.values(responsiveMap).forEach({
                        "useResponsiveObserver.useMemo": (mediaQuery)=>{
                            var _handler_mql;
                            const handler = this.matchHandlers[mediaQuery];
                            if (typeof (handler === null || handler === void 0 ? void 0 : (_handler_mql = handler.mql) === null || _handler_mql === void 0 ? void 0 : _handler_mql.removeEventListener) === 'function') {
                                handler.mql.removeEventListener('change', handler === null || handler === void 0 ? void 0 : handler.listener);
                            }
                        }
                    }["useResponsiveObserver.useMemo"]);
                    subscribers.clear();
                }
            };
        }
    }["useResponsiveObserver.useMemo"], [
        responsiveMap
    ]);
};
const __TURBOPACK__default__export__ = useResponsiveObserver;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useForceUpdate",
    ()=>useForceUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useForceUpdate = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useReducer({
        "useForceUpdate.useReducer": (ori)=>ori + 1
    }["useForceUpdate.useReducer"], 0);
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useForceUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function useBreakpoint() {
    let refreshOnChange = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, defaultScreens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const screensRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(defaultScreens);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useForceUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForceUpdate"])();
    const responsiveObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useBreakpoint.useLayoutEffect": ()=>{
            const token = responsiveObserver.subscribe({
                "useBreakpoint.useLayoutEffect.token": (supportScreens)=>{
                    screensRef.current = supportScreens;
                    if (refreshOnChange) {
                        forceUpdate();
                    }
                }
            }["useBreakpoint.useLayoutEffect.token"]);
            return ({
                "useBreakpoint.useLayoutEffect": ()=>responsiveObserver.unsubscribe(token)
            })["useBreakpoint.useLayoutEffect"];
        }
    }["useBreakpoint.useLayoutEffect"], []);
    return screensRef.current;
}
const __TURBOPACK__default__export__ = useBreakpoint;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/hooks/useGutter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGutter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
;
function useGutter(gutter, screens) {
    const results = [
        undefined,
        undefined
    ];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [
        gutter,
        undefined
    ];
    // By default use as `xs`
    const mergedScreens = screens || {
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true
    };
    normalizedGutter.forEach((g, index)=>{
        if (typeof g === 'object' && g !== null) {
            for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
                const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"][i];
                if (mergedScreens[breakpoint] && g[breakpoint] !== undefined) {
                    results[index] = g[breakpoint];
                    break;
                }
            }
        } else {
            results[index] = g;
        }
    });
    return results;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const RowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const __TURBOPACK__default__export__ = RowContext;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaSize",
    ()=>getMediaSize,
    "prepareColComponentToken",
    ()=>prepareColComponentToken,
    "prepareRowComponentToken",
    ()=>prepareRowComponentToken,
    "useColStyle",
    ()=>useColStyle,
    "useRowStyle",
    ()=>useRowStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
// ============================== Row-Shared ==============================
const genGridRowStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            display: 'flex',
            flexFlow: 'row wrap',
            minWidth: 0,
            '&::before, &::after': {
                display: 'flex'
            },
            '&-no-wrap': {
                flexWrap: 'nowrap'
            },
            // The origin of the X-axis
            '&-start': {
                justifyContent: 'flex-start'
            },
            // The center of the X-axis
            '&-center': {
                justifyContent: 'center'
            },
            // The opposite of the X-axis
            '&-end': {
                justifyContent: 'flex-end'
            },
            '&-space-between': {
                justifyContent: 'space-between'
            },
            '&-space-around': {
                justifyContent: 'space-around'
            },
            '&-space-evenly': {
                justifyContent: 'space-evenly'
            },
            // Align at the top
            '&-top': {
                alignItems: 'flex-start'
            },
            // Align at the center
            '&-middle': {
                alignItems: 'center'
            },
            '&-bottom': {
                alignItems: 'flex-end'
            }
        }
    };
};
// ============================== Col-Shared ==============================
const genGridColStyle = (token)=>{
    const { componentCls } = token;
    return {
        // Grid system
        [componentCls]: {
            position: 'relative',
            maxWidth: '100%',
            // Prevent columns from collapsing when empty
            minHeight: 1
        }
    };
};
const genLoopGridColumnsStyle = (token, sizeCls)=>{
    const { prefixCls, componentCls, gridColumns } = token;
    const gridColumnsStyle = {};
    for(let i = gridColumns; i >= 0; i--){
        if (i === 0) {
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-").concat(i)] = {
                display: 'none'
            };
            gridColumnsStyle["".concat(componentCls, "-push-").concat(i)] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle["".concat(componentCls, "-pull-").concat(i)] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-push-").concat(i)] = {
                insetInlineStart: 'auto'
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-pull-").concat(i)] = {
                insetInlineEnd: 'auto'
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-offset-").concat(i)] = {
                marginInlineStart: 0
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-order-").concat(i)] = {
                order: 0
            };
        } else {
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-").concat(i)] = [
                // https://github.com/ant-design/ant-design/issues/44456
                // Form set `display: flex` on Col which will override `display: block`.
                // Let's get it from css variable to support override.
                {
                    ['--ant-display']: 'block',
                    // Fallback to display if variable not support
                    display: 'block'
                },
                {
                    display: 'var(--ant-display)',
                    flex: "0 0 ".concat(i / gridColumns * 100, "%"),
                    maxWidth: "".concat(i / gridColumns * 100, "%")
                }
            ];
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-push-").concat(i)] = {
                insetInlineStart: "".concat(i / gridColumns * 100, "%")
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-pull-").concat(i)] = {
                insetInlineEnd: "".concat(i / gridColumns * 100, "%")
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-offset-").concat(i)] = {
                marginInlineStart: "".concat(i / gridColumns * 100, "%")
            };
            gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-order-").concat(i)] = {
                order: i
            };
        }
    }
    // Flex CSS Var
    gridColumnsStyle["".concat(componentCls).concat(sizeCls, "-flex")] = {
        flex: "var(--".concat(prefixCls).concat(sizeCls, "-flex)")
    };
    return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls)=>genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls)=>({
        ["@media (min-width: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(screenSize), ")")]: {
            ...genGridStyle(token, sizeCls)
        }
    });
const prepareRowComponentToken = ()=>({});
const prepareColComponentToken = ()=>({});
const useRowStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', genGridRowStyle, prepareRowComponentToken);
const getMediaSize = (token)=>{
    const mediaSizesMap = {
        xs: token.screenXSMin,
        sm: token.screenSMMin,
        md: token.screenMDMin,
        lg: token.screenLGMin,
        xl: token.screenXLMin,
        xxl: token.screenXXLMin
    };
    return mediaSizesMap;
};
const useColStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Grid', (token)=>{
    const gridToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        gridColumns: 24 // Row is divided into 24 parts in Grid
    });
    const gridMediaSizesMap = getMediaSize(gridToken);
    delete gridMediaSizesMap.xs;
    return [
        genGridColStyle(gridToken),
        genGridStyle(gridToken, ''),
        genGridStyle(gridToken, '-xs'),
        Object.keys(gridMediaSizesMap).map((key)=>genGridMediaStyle(gridToken, gridMediaSizesMap[key], "-".concat(key))).reduce((pre, cur)=>({
                ...pre,
                ...cur
            }), {})
    ];
}, prepareColComponentToken);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/row.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/responsiveObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/hooks/useBreakpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/hooks/useGutter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const _RowAligns = [
    'top',
    'middle',
    'bottom',
    'stretch'
];
const _RowJustify = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly'
];
function useMergedPropByScreen(oriProp, screen) {
    const [prop, setProp] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](typeof oriProp === 'string' ? oriProp : '');
    const calcMergedAlignOrJustify = ()=>{
        if (typeof oriProp === 'string') {
            setProp(oriProp);
        }
        if (typeof oriProp !== 'object') {
            return;
        }
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"].length; i++){
            const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$responsiveObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responsiveArray"][i];
            // if do not match, do nothing
            if (!screen || !screen[breakpoint]) {
                continue;
            }
            const curVal = oriProp[breakpoint];
            if (curVal !== undefined) {
                setProp(curVal);
                return;
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMergedPropByScreen.useEffect": ()=>{
            calcMergedAlignOrJustify();
        }
    }["useMergedPropByScreen.useEffect"], [
        JSON.stringify(oriProp),
        screen
    ]);
    return prop;
}
const Row = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, justify, align, className, style, children, gutter = 0, wrap, ...others } = props;
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const screens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(true, null);
    const mergedAlign = useMergedPropByScreen(align, screens);
    const mergedJustify = useMergedPropByScreen(justify, screens);
    const prefixCls = getPrefixCls('row', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRowStyle"])(prefixCls);
    const gutters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$hooks$2f$useGutter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(gutter, screens);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        ["".concat(prefixCls, "-no-wrap")]: wrap === false,
        ["".concat(prefixCls, "-").concat(mergedJustify)]: mergedJustify,
        ["".concat(prefixCls, "-").concat(mergedAlign)]: mergedAlign,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, className, hashId, cssVarCls);
    // Add gutter related style
    const rowStyle = {};
    if (gutters === null || gutters === void 0 ? void 0 : gutters[0]) {
        const horizontalGutter = typeof gutters[0] === 'number' ? "".concat(gutters[0] / -2, "px") : "calc(".concat(gutters[0], " / -2)");
        rowStyle.marginInline = horizontalGutter;
    }
    // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    const [gutterH, gutterV] = gutters;
    rowStyle.rowGap = gutterV;
    const rowContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Row.useMemo[rowContext]": ()=>({
                gutter: [
                    gutterH,
                    gutterV
                ],
                wrap
            })
    }["Row.useMemo[rowContext]"], [
        gutterH,
        gutterV,
        wrap
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: rowContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        className: classes,
        style: {
            ...rowStyle,
            ...style
        },
        ref: ref
    }, children));
});
if ("TURBOPACK compile-time truthy", 1) {
    Row.displayName = 'Row';
}
const __TURBOPACK__default__export__ = Row;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/row.js [app-client] (ecmascript) <export default as Row>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/row.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/get.js [app-client] (ecmascript) <export default as get>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/get.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/set.js [app-client] (ecmascript) <export default as set>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/set.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/col.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/RowContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function parseFlex(flex) {
    if (flex === 'auto') {
        return '1 1 auto';
    }
    if (typeof flex === 'number') {
        return "".concat(flex, " ").concat(flex, " auto");
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return "0 0 ".concat(flex);
    }
    return flex;
}
const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl'
];
const Col = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { gutter, wrap } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$RowContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const { prefixCls: customizePrefixCls, span, order, offset, push, pull, className, children, flex, style, ...others } = props;
    const prefixCls = getPrefixCls('col', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColStyle"])(prefixCls);
    // ===================== Size ======================
    const sizeStyle = {};
    let sizeClassObj = {};
    sizes.forEach((size)=>{
        let sizeProps = {};
        const propSize = props[size];
        if (typeof propSize === 'number') {
            sizeProps.span = propSize;
        } else if (typeof propSize === 'object') {
            sizeProps = propSize || {};
        }
        delete others[size];
        sizeClassObj = {
            ...sizeClassObj,
            ["".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span)]: sizeProps.span !== undefined,
            ["".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order)]: sizeProps.order || sizeProps.order === 0,
            ["".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset)]: sizeProps.offset || sizeProps.offset === 0,
            ["".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push)]: sizeProps.push || sizeProps.push === 0,
            ["".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull)]: sizeProps.pull || sizeProps.pull === 0,
            ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
        };
        // Responsive flex layout
        if (sizeProps.flex) {
            sizeClassObj["".concat(prefixCls, "-").concat(size, "-flex")] = true;
            sizeStyle["--".concat(prefixCls, "-").concat(size, "-flex")] = parseFlex(sizeProps.flex);
        }
    });
    // ==================== Normal =====================
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
        ["".concat(prefixCls, "-").concat(span)]: span !== undefined,
        ["".concat(prefixCls, "-order-").concat(order)]: order,
        ["".concat(prefixCls, "-offset-").concat(offset)]: offset,
        ["".concat(prefixCls, "-push-").concat(push)]: push,
        ["".concat(prefixCls, "-pull-").concat(pull)]: pull
    }, className, sizeClassObj, hashId, cssVarCls);
    const mergedStyle = {};
    // Horizontal gutter use padding
    if (gutter === null || gutter === void 0 ? void 0 : gutter[0]) {
        const horizontalGutter = typeof gutter[0] === 'number' ? "".concat(gutter[0] / 2, "px") : "calc(".concat(gutter[0], " / 2)");
        mergedStyle.paddingInline = horizontalGutter;
    }
    if (flex) {
        mergedStyle.flex = parseFlex(flex);
        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = 0;
        }
    }
    // ==================== Render =====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...others,
        style: {
            ...mergedStyle,
            ...style,
            ...sizeStyle
        },
        className: classes,
        ref: ref
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    Col.displayName = 'Col';
}
const __TURBOPACK__default__export__ = Col;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/fallbackCmp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fallback of IE.
 * Safe to remove.
 */ // Style as inline component
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
// ============================= Fallback =============================
const genFallbackStyle = (token)=>{
    const { formItemCls } = token;
    return {
        '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
            // Fallback for IE, safe to remove we not support it anymore
            ["".concat(formItemCls, "-control")]: {
                display: 'flex'
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genSubStyleComponent"])([
    'Form',
    'item-item'
], (token, param)=>{
    let { rootPrefixCls } = param;
    const formToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareToken"])(token, rootPrefixCls);
    return genFallbackStyle(formToken);
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItemInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/get.js [app-client] (ecmascript) <export default as get>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__set$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/utils/set.js [app-client] (ecmascript) <export default as set>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$fallbackCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/fallbackCmp.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const GRID_MAX = 24;
const FormItemInput = (props)=>{
    const { prefixCls, status, labelCol, wrapperCol, children, errors, warnings, _internalItemRender: formItemRender, extra, help, fieldId, marginBottom, onErrorVisibleChanged, label } = props;
    const baseClassName = "".concat(prefixCls, "-item");
    const formContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const { classNames: contextClassNames, styles: contextStyles } = formContext;
    const mergedWrapperCol = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[mergedWrapperCol]": ()=>{
            let mergedWrapper = {
                ...wrapperCol || formContext.wrapperCol || {}
            };
            if (label === null && !labelCol && !wrapperCol && formContext.labelCol) {
                const list = [
                    undefined,
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl',
                    'xxl'
                ];
                list.forEach({
                    "FormItemInput.useMemo[mergedWrapperCol]": (size)=>{
                        const _size = size ? [
                            size
                        ] : [];
                        const formLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__["get"])(formContext.labelCol, _size);
                        const formLabelObj = typeof formLabel === 'object' ? formLabel : {};
                        const wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__get$3e$__["get"])(mergedWrapper, _size);
                        const wrapperObj = typeof wrapper === 'object' ? wrapper : {};
                        if ('span' in formLabelObj && !('offset' in wrapperObj) && formLabelObj.span < GRID_MAX) {
                            mergedWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$utils$2f$set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__set$3e$__["set"])(mergedWrapper, [].concat(_size, [
                                'offset'
                            ]), formLabelObj.span);
                        }
                    }
                }["FormItemInput.useMemo[mergedWrapperCol]"]);
            }
            return mergedWrapper;
        }
    }["FormItemInput.useMemo[mergedWrapperCol]"], [
        wrapperCol,
        formContext.wrapperCol,
        formContext.labelCol,
        label,
        labelCol
    ]);
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(baseClassName, "-control"), mergedWrapperCol.className);
    // Pass to sub FormItem should not with col info
    const subFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[subFormContext]": ()=>{
            const { labelCol: _labelCol, wrapperCol: _wrapperCol, ...rest } = formContext;
            return rest;
        }
    }["FormItemInput.useMemo[subFormContext]"], [
        formContext
    ]);
    const extraRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [extraHeight, setExtraHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "FormItemInput.useLayoutEffect": ()=>{
            if (extra && extraRef.current) {
                setExtraHeight(extraRef.current.clientHeight);
            } else {
                setExtraHeight(0);
            }
        }
    }["FormItemInput.useLayoutEffect"], [
        extra
    ]);
    const inputDom = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(baseClassName, "-control-input")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(baseClassName, "-control-input-content"), contextClassNames === null || contextClassNames === void 0 ? void 0 : contextClassNames.content),
        style: contextStyles === null || contextStyles === void 0 ? void 0 : contextStyles.content
    }, children));
    const formItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormItemInput.useMemo[formItemContext]": ()=>({
                prefixCls,
                status
            })
    }["FormItemInput.useMemo[formItemContext]"], [
        prefixCls,
        status
    ]);
    const errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"].Provider, {
        value: formItemContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fieldId: fieldId,
        errors: errors,
        warnings: warnings,
        help: help,
        helpStatus: status,
        className: "".concat(baseClassName, "-explain-connected"),
        onVisibleChanged: onErrorVisibleChanged
    })) : null;
    const extraProps = {};
    if (fieldId) {
        extraProps.id = "".concat(fieldId, "_extra");
    }
    // If extra = 0, && will goes wrong
    // 0&&error -> 0
    const extraDom = extra ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...extraProps,
        className: "".concat(baseClassName, "-extra"),
        ref: extraRef
    }, extra) : null;
    const additionalDom = errorListDom || extraDom ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(baseClassName, "-additional"),
        style: marginBottom ? {
            minHeight: marginBottom + extraHeight
        } : {}
    }, errorListDom, extraDom) : null;
    const dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
        input: inputDom,
        errorList: errorListDom,
        extra: extraDom
    }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inputDom, additionalDom);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"].Provider, {
        value: subFormContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...mergedWrapperCol,
        className: className
    }, dom), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$fallbackCmp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls
    }));
};
const __TURBOPACK__default__export__ = FormItemInput;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var QuestionCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }
        ]
    },
    "name": "question-circle",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = QuestionCircleOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const QuestionCircleOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![question-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnoiIC8+PHBhdGggZD0iTTYyMy42IDMxNi43QzU5My42IDI5MC40IDU1NCAyNzYgNTEyIDI3NnMtODEuNiAxNC41LTExMS42IDQwLjdDMzY5LjIgMzQ0IDM1MiAzODAuNyAzNTIgNDIwdjcuNmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQyMGMwLTQ0LjEgNDMuMS04MCA5Ni04MHM5NiAzNS45IDk2IDgwYzAgMzEuMS0yMiA1OS42LTU2LjEgNzIuNy0yMS4yIDguMS0zOS4yIDIyLjMtNTIuMSA0MC45LTEzLjEgMTktMTkuOSA0MS44LTE5LjkgNjQuOVY2MjBjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOHYtMjIuN2E0OC4zIDQ4LjMgMCAwMTMwLjktNDQuOGM1OS0yMi43IDk3LjEtNzQuNyA5Ny4xLTEzMi41LjEtMzkuMy0xNy4xLTc2LTQ4LjMtMTAzLjN6TTQ3MiA3MzJhNDAgNDAgMCAxMDgwIDAgNDAgNDAgMCAxMC04MCAweiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](QuestionCircleOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'QuestionCircleOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/convertToTooltipProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function convertToTooltipProps(tooltip) {
    // isNil
    if (tooltip === undefined || tooltip === null) {
        return null;
    }
    if (typeof tooltip === 'object' && !/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(tooltip)) {
        return tooltip;
    }
    return {
        title: tooltip
    };
}
const __TURBOPACK__default__export__ = convertToTooltipProps;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItemLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$convertToTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/convertToTooltipProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/col.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/useLocale.js [app-client] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/locale/en_US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
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
const FormItemLabel = (param)=>{
    let { prefixCls, label, htmlFor, labelCol, labelAlign, colon, required, requiredMark, tooltip, vertical } = param;
    const [formLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])('Form');
    const { labelAlign: contextLabelAlign, labelCol: contextLabelCol, labelWrap, colon: contextColon, classNames: contextClassNames, styles: contextStyles } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    if (!label) {
        return null;
    }
    const mergedLabelCol = labelCol || contextLabelCol || {};
    const mergedLabelAlign = labelAlign || contextLabelAlign;
    const labelClsBasic = "".concat(prefixCls, "-item-label");
    const labelColClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, {
        ["".concat(labelClsBasic, "-wrap")]: !!labelWrap
    });
    let labelChildren = label;
    // Keep label is original where there should have no colon
    const computedColon = colon === true || contextColon !== false && colon !== false;
    const haveColon = computedColon && !vertical;
    // Remove duplicated user input colon
    if (haveColon && typeof label === 'string' && label.trim()) {
        labelChildren = label.replace(/[:|：]\s*$/, '');
    }
    // Tooltip
    const tooltipProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$convertToTooltipProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tooltip);
    if (tooltipProps) {
        const { icon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), ...restTooltipProps } = tooltipProps;
        const tooltipNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...restTooltipProps
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](icon, {
            className: "".concat(prefixCls, "-item-tooltip"),
            title: '',
            onClick: (e)=>{
                // Prevent label behavior in tooltip icon
                // https://github.com/ant-design/ant-design/issues/46154
                e.preventDefault();
            },
            tabIndex: null
        }));
        labelChildren = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, labelChildren, tooltipNode);
    }
    // Required Mark
    const isOptionalMark = requiredMark === 'optional';
    const isRenderMark = typeof requiredMark === 'function';
    const hideRequiredMark = requiredMark === false;
    if (isRenderMark) {
        labelChildren = requiredMark(labelChildren, {
            required: !!required
        });
    } else if (isOptionalMark && !required) {
        var _defaultLocale_Form;
        labelChildren = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, labelChildren, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-item-optional"),
            title: ""
        }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_defaultLocale_Form = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$locale$2f$en_US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Form) === null || _defaultLocale_Form === void 0 ? void 0 : _defaultLocale_Form.optional)));
    }
    // https://github.com/ant-design/ant-design/pull/52950#discussion_r1980880316
    let markType;
    if (hideRequiredMark) {
        markType = 'hidden';
    } else if (isOptionalMark || isRenderMark) {
        markType = 'optional';
    }
    const labelClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contextClassNames === null || contextClassNames === void 0 ? void 0 : contextClassNames.label, {
        ["".concat(prefixCls, "-item-required")]: required,
        ["".concat(prefixCls, "-item-required-mark-").concat(markType)]: markType,
        ["".concat(prefixCls, "-item-no-colon")]: !computedColon
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...mergedLabelCol,
        className: labelColClassName
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("label", {
        htmlFor: htmlFor,
        className: labelClassName,
        style: contextStyles === null || contextStyles === void 0 ? void 0 : contextStyles.label,
        title: typeof label === 'string' ? label : ''
    }, labelChildren));
};
const __TURBOPACK__default__export__ = FormItemLabel;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CheckCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                }
            }
        ]
    },
    "name": "check-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = CheckCircleFilled;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const CheckCircleFilled = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![check-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOCAxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6IiAvPjwvc3ZnPg==) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](CheckCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CheckCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CloseCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "fill-rule": "evenodd",
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
                }
            }
        ]
    },
    "name": "close-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = CloseCircleFilled;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const CloseCircleFilled = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![close-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTEyIDY0YzI0Ny40IDAgNDQ4IDIwMC42IDQ0OCA0NDhTNzU5LjQgOTYwIDUxMiA5NjAgNjQgNzU5LjQgNjQgNTEyIDI2NC42IDY0IDUxMiA2NHptMTI3Ljk4IDI3NC44MmgtLjA0bC0uMDguMDZMNTEyIDQ2Ni43NSAzODQuMTQgMzM4Ljg4Yy0uMDQtLjA1LS4wNi0uMDYtLjA4LS4wNmEuMTIuMTIgMCAwMC0uMDcgMGMtLjAzIDAtLjA1LjAxLS4wOS4wNWwtNDUuMDIgNDUuMDJhLjIuMiAwIDAwLS4wNS4wOS4xMi4xMiAwIDAwMCAuMDd2LjAyYS4yNy4yNyAwIDAwLjA2LjA2TDQ2Ni43NSA1MTIgMzM4Ljg4IDYzOS44NmMtLjA1LjA0LS4wNi4wNi0uMDYuMDhhLjEyLjEyIDAgMDAwIC4wN2MwIC4wMy4wMS4wNS4wNS4wOWw0NS4wMiA0NS4wMmEuMi4yIDAgMDAuMDkuMDUuMTIuMTIgMCAwMC4wNyAwYy4wMiAwIC4wNC0uMDEuMDgtLjA1TDUxMiA1NTcuMjVsMTI3Ljg2IDEyNy44N2MuMDQuMDQuMDYuMDUuMDguMDVhLjEyLjEyIDAgMDAuMDcgMGMuMDMgMCAuMDUtLjAxLjA5LS4wNWw0NS4wMi00NS4wMmEuMi4yIDAgMDAuMDUtLjA5LjEyLjEyIDAgMDAwLS4wN3YtLjAyYS4yNy4yNyAwIDAwLS4wNS0uMDZMNTU3LjI1IDUxMmwxMjcuODctMTI3Ljg2Yy4wNC0uMDQuMDUtLjA2LjA1LS4wOGEuMTIuMTIgMCAwMDAtLjA3YzAtLjAzLS4wMS0uMDUtLjA1LS4wOWwtNDUuMDItNDUuMDJhLjIuMiAwIDAwLS4wOS0uMDUuMTIuMTIgMCAwMC0uMDcgMHoiIC8+PC9zdmc+) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](CloseCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CloseCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var ExclamationCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }
        ]
    },
    "name": "exclamation-circle",
    "theme": "filled"
};
const __TURBOPACK__default__export__ = ExclamationCircleFilled;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const ExclamationCircleFilled = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![exclamation-circle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0tMzIgMjMyYzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDh2MjcyYzAgNC40LTMuNiA4LTggOGgtNDhjLTQuNCAwLTgtMy42LTgtOFYyOTZ6bTMyIDQ0MGE0OC4wMSA0OC4wMSAwIDAxMC05NiA0OC4wMSA0OC4wMSAwIDAxMCA5NnoiIC8+PC9zdmc+) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ExclamationCircleFilled);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'ExclamationCircleFilled';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const iconMap = {
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ExclamationCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    validating: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LoadingOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function StatusProvider(param) {
    let { children, errors, warnings, hasFeedback, validateStatus, prefixCls, meta, noStyle, name } = param;
    const itemPrefixCls = "".concat(prefixCls, "-item");
    const { feedbackIcons } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const mergedValidateStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatus"])(errors, warnings, meta, null, !!hasFeedback, validateStatus);
    const { isFormItemInput: parentIsFormItemInput, status: parentStatus, hasFeedback: parentHasFeedback, feedbackIcon: parentFeedbackIcon, name: parentName } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    // ====================== Context =======================
    const formItemStatusContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "StatusProvider.useMemo[formItemStatusContext]": ()=>{
            let feedbackIcon;
            if (hasFeedback) {
                var _customIcons;
                const customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
                const customIconNode = mergedValidateStatus && (customIcons === null || customIcons === void 0 ? void 0 : (_customIcons = customIcons({
                    status: mergedValidateStatus,
                    errors,
                    warnings
                })) === null || _customIcons === void 0 ? void 0 : _customIcons[mergedValidateStatus]);
                const IconNode = mergedValidateStatus ? iconMap[mergedValidateStatus] : null;
                feedbackIcon = customIconNode !== false && IconNode ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
                }, customIconNode || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](IconNode, null)) : null;
            }
            const context = {
                status: mergedValidateStatus || '',
                errors,
                warnings,
                hasFeedback: !!hasFeedback,
                feedbackIcon,
                isFormItemInput: true,
                name
            };
            // No style will follow parent context
            if (noStyle) {
                context.status = (mergedValidateStatus !== null && mergedValidateStatus !== void 0 ? mergedValidateStatus : parentStatus) || '';
                context.isFormItemInput = parentIsFormItemInput;
                context.hasFeedback = !!(hasFeedback !== null && hasFeedback !== void 0 ? hasFeedback : parentHasFeedback);
                context.feedbackIcon = hasFeedback !== undefined ? context.feedbackIcon : parentFeedbackIcon;
                context.name = name !== null && name !== void 0 ? name : parentName;
            }
            return context;
        }
    }["StatusProvider.useMemo[formItemStatusContext]"], [
        mergedValidateStatus,
        hasFeedback,
        noStyle,
        parentIsFormItemInput,
        parentStatus
    ]);
    // ======================= Render =======================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: formItemStatusContext
    }, children);
}
const __TURBOPACK__default__export__ = StatusProvider;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/ItemHolder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemHolder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/isVisible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/isNonNullable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/grid/row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItemInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItemLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useDebounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)");
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
function ItemHolder(props) {
    const { prefixCls, className, rootClassName, style, help, errors, warnings, validateStatus, meta, hasFeedback, hidden, children, fieldId, required, isRequired, onSubItemMetaChange, layout: propsLayout, name, ...restProps } = props;
    const itemPrefixCls = "".concat(prefixCls, "-item");
    const { requiredMark, layout: formLayout } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const layout = propsLayout || formLayout;
    const vertical = layout === 'vertical';
    // ======================== Margin ========================
    const itemRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const debounceErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(errors);
    const debounceWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(warnings);
    const hasHelp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(help);
    const hasError = !!(hasHelp || errors.length || warnings.length);
    const isOnScreen = !!itemRef.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$isVisible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(itemRef.current);
    const [marginBottom, setMarginBottom] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ItemHolder.useLayoutEffect": ()=>{
            if (hasError && itemRef.current) {
                // The element must be part of the DOMTree to use getComputedStyle
                // https://stackoverflow.com/questions/35360711/getcomputedstyle-returns-a-cssstyledeclaration-but-all-properties-are-empty-on-a
                const itemStyle = getComputedStyle(itemRef.current);
                setMarginBottom(Number.parseInt(itemStyle.marginBottom, 10));
            }
        }
    }["ItemHolder.useLayoutEffect"], [
        hasError,
        isOnScreen
    ]);
    const onErrorVisibleChanged = (nextVisible)=>{
        if (!nextVisible) {
            setMarginBottom(null);
        }
    };
    // ======================== Status ========================
    const getValidateState = function() {
        let isDebounce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const _errors = isDebounce ? debounceErrors : meta.errors;
        const _warnings = isDebounce ? debounceWarnings : meta.warnings;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatus"])(_errors, _warnings, meta, '', !!hasFeedback, validateStatus);
    };
    const mergedValidateStatus = getValidateState();
    // ======================== Render ========================
    const itemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(itemPrefixCls, className, rootClassName, {
        ["".concat(itemPrefixCls, "-with-help")]: hasHelp || debounceErrors.length || debounceWarnings.length,
        // Status
        ["".concat(itemPrefixCls, "-has-feedback")]: mergedValidateStatus && hasFeedback,
        ["".concat(itemPrefixCls, "-has-success")]: mergedValidateStatus === 'success',
        ["".concat(itemPrefixCls, "-has-warning")]: mergedValidateStatus === 'warning',
        ["".concat(itemPrefixCls, "-has-error")]: mergedValidateStatus === 'error',
        ["".concat(itemPrefixCls, "-is-validating")]: mergedValidateStatus === 'validating',
        ["".concat(itemPrefixCls, "-hidden")]: hidden,
        // Layout
        ["".concat(itemPrefixCls, "-").concat(layout)]: layout
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: itemClassName,
        style: style,
        ref: itemRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$grid$2f$row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
        className: "".concat(itemPrefixCls, "-row"),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
            '_internalItemRender',
            'colon',
            'dependencies',
            'extra',
            'fieldKey',
            'getValueFromEvent',
            'getValueProps',
            'htmlFor',
            'id',
            // It is deprecated because `htmlFor` is its replacement.
            'initialValue',
            'isListField',
            'label',
            'labelAlign',
            'labelCol',
            'labelWrap',
            'messageVariables',
            'name',
            'normalize',
            'noStyle',
            'preserve',
            'requiredMark',
            'rules',
            'shouldUpdate',
            'trigger',
            'tooltip',
            'validateFirst',
            'validateTrigger',
            'valuePropName',
            'wrapperCol',
            'validateDebounce'
        ])
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        htmlFor: fieldId,
        ...props,
        requiredMark: requiredMark,
        required: required !== null && required !== void 0 ? required : isRequired,
        prefixCls: prefixCls,
        vertical: vertical
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItemInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        ...meta,
        errors: debounceErrors,
        warnings: debounceWarnings,
        prefixCls: prefixCls,
        status: mergedValidateStatus,
        help: help,
        marginBottom: marginBottom,
        onErrorVisibleChanged: onErrorVisibleChanged
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoStyleItemContext"].Provider, {
        value: onSubItemMetaChange
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        meta: meta,
        errors: meta.errors,
        warnings: meta.warnings,
        hasFeedback: hasFeedback,
        // Already calculated
        validateStatus: mergedValidateStatus,
        name: name
    }, children)))), !!marginBottom && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(itemPrefixCls, "-margin-offset"),
        style: {
            marginBottom: -marginBottom
        }
    }));
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Field$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/Field.js [app-client] (ecmascript) <export default as Field>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldContext$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/FieldContext.js [app-client] (ecmascript) <export default as FieldContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListContext$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/ListContext.js [app-client] (ecmascript) <export default as ListContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useChildren.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormItemStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormItemStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFrameState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFrameState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useItemRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useItemRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$ItemHolder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/ItemHolder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/StatusProvider.js [app-client] (ecmascript)");
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
const NAME_SPLIT = '__SPLIT__';
const _ValidateStatuses = [
    'success',
    'warning',
    'error',
    'validating',
    ''
];
// https://github.com/ant-design/ant-design/issues/46417
// `getValueProps` may modify the value props name,
// we should check if the control is similar.
function isSimilarControl(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    return keysA.length === keysB.length && keysA.every((key)=>{
        const propValueA = a[key];
        const propValueB = b[key];
        return propValueA === propValueB || typeof propValueA === 'function' || typeof propValueB === 'function';
    });
}
const MemoInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"]((param)=>{
    let { children } = param;
    return children;
}, (prev, next)=>isSimilarControl(prev.control, next.control) && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every((value, index)=>value === next.childProps[index]));
function genEmptyMeta() {
    return {
        errors: [],
        warnings: [],
        touched: false,
        validating: false,
        name: [],
        validated: false
    };
}
function InternalFormItem(props) {
    const { name, noStyle, className, dependencies, prefixCls: customizePrefixCls, shouldUpdate, rules, children, required, label, messageVariables, trigger = 'onChange', validateTrigger, hidden, help, layout } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { name: formName } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    const mergedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(children);
    const isRenderProps = typeof mergedChildren === 'function';
    const notifyParentMetaChange = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoStyleItemContext"]);
    const { validateTrigger: contextValidateTrigger } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$FieldContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldContext$3e$__["FieldContext"]);
    const mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
    const hasName = !(name === undefined || name === null);
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    // ========================= Warn =========================
    const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Form.Item');
    if ("TURBOPACK compile-time truthy", 1) {
        ("TURBOPACK compile-time truthy", 1) ? warning(name !== null, 'usage', '`null` is passed as `name` property') : "TURBOPACK unreachable";
    }
    // ========================= MISC =========================
    // Get `noStyle` required info
    const listContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$ListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListContext$3e$__["ListContext"]);
    const fieldKeyPathRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // ======================== Errors ========================
    // >>>>> Collect sub field errors
    const [subFieldErrors, setSubFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFrameState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({});
    // >>>>> Current field errors
    const [meta, setMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "InternalFormItem.useState": ()=>genEmptyMeta()
    }["InternalFormItem.useState"]);
    const onMetaChange = (nextMeta)=>{
        // This keyInfo is not correct when field is removed
        // Since origin keyManager no longer keep the origin key anymore
        // Which means we need cache origin one and reuse when removed
        const keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name);
        // Destroy will reset all the meta
        setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
        // Bump to parent since noStyle
        if (noStyle && help !== false && notifyParentMetaChange) {
            let namePath = nextMeta.name;
            if (!nextMeta.destroy) {
                if (keyInfo !== undefined) {
                    const [fieldKey, restPath] = keyInfo;
                    namePath = [
                        fieldKey
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restPath));
                    fieldKeyPathRef.current = namePath;
                }
            } else {
                // Use origin cache data
                namePath = fieldKeyPathRef.current || namePath;
            }
            notifyParentMetaChange(nextMeta, namePath);
        }
    };
    // >>>>> Collect noStyle Field error to the top FormItem
    const onSubItemMetaChange = (subMeta, uniqueKeys)=>{
        // Only `noStyle` sub item will trigger
        setSubFieldErrors((prevSubFieldErrors)=>{
            const clone = {
                ...prevSubFieldErrors
            };
            // name: ['user', 1] + key: [4] = ['user', 4]
            const mergedNamePath = [].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subMeta.name.slice(0, -1)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uniqueKeys));
            const mergedNameKey = mergedNamePath.join(NAME_SPLIT);
            if (subMeta.destroy) {
                // Remove
                delete clone[mergedNameKey];
            } else {
                // Update
                clone[mergedNameKey] = subMeta;
            }
            return clone;
        });
    };
    // >>>>> Get merged errors
    const [mergedErrors, mergedWarnings] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalFormItem.useMemo": ()=>{
            const errorList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(meta.errors);
            const warningList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(meta.warnings);
            Object.values(subFieldErrors).forEach({
                "InternalFormItem.useMemo": (subFieldError)=>{
                    errorList.push.apply(errorList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subFieldError.errors || []));
                    warningList.push.apply(warningList, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subFieldError.warnings || []));
                }
            }["InternalFormItem.useMemo"]);
            return [
                errorList,
                warningList
            ];
        }
    }["InternalFormItem.useMemo"], [
        subFieldErrors,
        meta.errors,
        meta.warnings
    ]);
    // ===================== Children Ref =====================
    const getItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useItemRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // ======================== Render ========================
    function renderLayout(baseChildren, fieldId, isRequired) {
        if (noStyle && !hidden) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$StatusProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                prefixCls: prefixCls,
                hasFeedback: props.hasFeedback,
                validateStatus: props.validateStatus,
                meta: meta,
                errors: mergedErrors,
                warnings: mergedWarnings,
                noStyle: true,
                name: name
            }, baseChildren);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$ItemHolder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: "row",
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, cssVarCls, rootCls, hashId),
            prefixCls: prefixCls,
            fieldId: fieldId,
            isRequired: isRequired,
            errors: mergedErrors,
            warnings: mergedWarnings,
            meta: meta,
            onSubItemMetaChange: onSubItemMetaChange,
            layout: layout,
            name: name
        }, baseChildren);
    }
    if (!hasName && !isRenderProps && !dependencies) {
        return renderLayout(mergedChildren);
    }
    let variables = {};
    if (typeof label === 'string') {
        variables.label = label;
    } else if (name) {
        variables.label = String(name);
    }
    if (messageVariables) {
        variables = {
            ...variables,
            ...messageVariables
        };
    }
    // >>>>> With Field
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$Field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Field$3e$__["Field"], {
        ...props,
        messageVariables: variables,
        trigger: trigger,
        validateTrigger: mergedValidateTrigger,
        onMetaChange: onMetaChange
    }, (control, renderMeta, context)=>{
        const mergedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(name).length && renderMeta ? renderMeta.name : [];
        const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldId"])(mergedName, formName);
        const isRequired = required !== undefined ? required : !!(rules === null || rules === void 0 ? void 0 : rules.some((rule)=>{
            if (rule && typeof rule === 'object' && rule.required && !rule.warningOnly) {
                return true;
            }
            if (typeof rule === 'function') {
                const ruleEntity = rule(context);
                return (ruleEntity === null || ruleEntity === void 0 ? void 0 : ruleEntity.required) && !(ruleEntity === null || ruleEntity === void 0 ? void 0 : ruleEntity.warningOnly);
            }
            return false;
        }));
        // ======================= Children =======================
        const mergedControl = {
            ...control
        };
        let childNode = null;
        ("TURBOPACK compile-time truthy", 1) ? warning(!(shouldUpdate && dependencies), 'usage', "`shouldUpdate` and `dependencies` shouldn't be used together. See https://u.ant.design/form-deps.") : "TURBOPACK unreachable";
        if (Array.isArray(mergedChildren) && hasName) {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item.') : "TURBOPACK unreachable";
            childNode = mergedChildren;
        } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
            ("TURBOPACK compile-time truthy", 1) ? warning(!!(shouldUpdate || dependencies), 'usage', 'A `Form.Item` with a render function must have either `shouldUpdate` or `dependencies`.') : "TURBOPACK unreachable";
            ("TURBOPACK compile-time truthy", 1) ? warning(!hasName, 'usage', 'A `Form.Item` with a render function cannot be a field, and thus cannot have a `name` prop.') : "TURBOPACK unreachable";
        } else if (dependencies && !isRenderProps && !hasName) {
            ("TURBOPACK compile-time truthy", 1) ? warning(false, 'usage', 'Must set `name` or use a render function when `dependencies` is set.') : "TURBOPACK unreachable";
        } else if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](mergedChildren)) {
            ("TURBOPACK compile-time truthy", 1) ? warning(mergedChildren.props.defaultValue === undefined, 'usage', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.') : "TURBOPACK unreachable";
            const childProps = {
                ...mergedChildren.props,
                ...mergedControl
            };
            if (!childProps.id) {
                childProps.id = fieldId;
            }
            if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
                const describedbyArr = [];
                if (help || mergedErrors.length > 0) {
                    describedbyArr.push("".concat(fieldId, "_help"));
                }
                if (props.extra) {
                    describedbyArr.push("".concat(fieldId, "_extra"));
                }
                childProps['aria-describedby'] = describedbyArr.join(' ');
            }
            if (mergedErrors.length > 0) {
                childProps['aria-invalid'] = 'true';
            }
            if (isRequired) {
                childProps['aria-required'] = 'true';
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(mergedChildren)) {
                childProps.ref = getItemRef(mergedName, mergedChildren);
            }
            // We should keep user origin event handler
            const triggers = new Set([].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(trigger)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(mergedValidateTrigger))));
            triggers.forEach((eventName)=>{
                childProps[eventName] = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _mergedControl_eventName, _mergedChildren_props_eventName, _mergedChildren_props;
                    (_mergedControl_eventName = mergedControl[eventName]) === null || _mergedControl_eventName === void 0 ? void 0 : _mergedControl_eventName.call(mergedControl, ...args);
                    (_mergedChildren_props_eventName = (_mergedChildren_props = mergedChildren.props)[eventName]) === null || _mergedChildren_props_eventName === void 0 ? void 0 : _mergedChildren_props_eventName.call(_mergedChildren_props, ...args);
                };
            });
            // List of props that need to be watched for changes -> if changes are detected in MemoInput -> rerender
            const watchingChildProps = [
                childProps['aria-required'],
                childProps['aria-invalid'],
                childProps['aria-describedby']
            ];
            childNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](MemoInput, {
                control: mergedControl,
                update: mergedChildren,
                childProps: watchingChildProps
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(mergedChildren, childProps));
        } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
            childNode = mergedChildren(context);
        } else {
            ("TURBOPACK compile-time truthy", 1) ? warning(!mergedName.length || !!noStyle, 'usage', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.') : "TURBOPACK unreachable";
            childNode = mergedChildren;
        }
        return renderLayout(childNode, fieldId, isRequired);
    });
}
const FormItem = InternalFormItem;
FormItem.useStatus = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormItemStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = FormItem;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const FormList = (param)=>{
    let { prefixCls: customizePrefixCls, children, ...props } = param;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Form.List');
        ("TURBOPACK compile-time truthy", 1) ? warning(typeof props.name === 'number' || (Array.isArray(props.name) ? !!props.name.length : !!props.name), 'usage', 'Miss `name` prop.') : "TURBOPACK unreachable";
    }
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('form', customizePrefixCls);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FormList.useMemo[contextValue]": ()=>({
                prefixCls,
                status: 'error'
            })
    }["FormList.useMemo[contextValue]"], [
        prefixCls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
        ...props
    }, (fields, operation, meta)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemPrefixContext"].Provider, {
            value: contextValue
        }, children(fields.map((field)=>({
                ...field,
                fieldKey: field.key
            })), operation, {
            errors: meta.errors,
            warnings: meta.warnings
        })));
};
const __TURBOPACK__default__export__ = FormList;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useFormInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
function useFormInstance() {
    const { form } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormContext"]);
    return form;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/ErrorList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/Form.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/form/es/useWatch.js [app-client] (ecmascript) <export default as useWatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/FormList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useFormInstance.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Form.Item = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.List = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$FormList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.ErrorList = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$ErrorList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.useForm = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"];
Form.useFormInstance = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useFormInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Form.useWatch = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$form$2f$es$2f$useWatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useWatch$3e$__["useWatch"];
Form.Provider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const __TURBOPACK__default__export__ = Form;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/index.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/gapSize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPresetSize",
    ()=>isPresetSize,
    "isValidGapNumber",
    ()=>isValidGapNumber
]);
function isPresetSize(size) {
    return [
        'small',
        'middle',
        'large'
    ].includes(size);
}
function isValidGapNumber(size) {
    if (!size) {
        // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
        return false;
    }
    return typeof size === 'number' && !Number.isNaN(size);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMergedStatus",
    ()=>getMergedStatus,
    "getStatusClassNames",
    ()=>getStatusClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const _InputStatuses = [
    'warning',
    'error',
    '',
    'success',
    'validating'
];
const getStatusClassNames = (prefixCls, status, hasFeedback)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-status-success")]: status === 'success',
        ["".concat(prefixCls, "-status-warning")]: status === 'warning',
        ["".concat(prefixCls, "-status-error")]: status === 'error',
        ["".concat(prefixCls, "-status-validating")]: status === 'validating',
        ["".concat(prefixCls, "-has-feedback")]: hasFeedback
    });
};
const getMergedStatus = (contextStatus, customStatus)=>customStatus || contextStatus;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/addon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
;
const genSpaceAddonStyle = (token)=>{
    const { componentCls, borderRadius, paddingSM, colorBorder, paddingXS, fontSizeLG, fontSizeSM, borderRadiusLG, borderRadiusSM, colorBgContainerDisabled, lineWidth } = token;
    return {
        [componentCls]: [
            // ==========================================================
            // ==                         Base                         ==
            // ==========================================================
            {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0,
                paddingInline: paddingSM,
                margin: 0,
                borderWidth: lineWidth,
                borderStyle: 'solid',
                borderRadius,
                '&:hover': {
                    zIndex: 0
                },
                ["&".concat(componentCls, "-disabled")]: {
                    color: token.colorTextDisabled
                },
                '&-large': {
                    fontSize: fontSizeLG,
                    borderRadius: borderRadiusLG
                },
                '&-small': {
                    paddingInline: paddingXS,
                    borderRadius: borderRadiusSM,
                    fontSize: fontSizeSM
                },
                '&-compact-last-item': {
                    borderEndStartRadius: 0,
                    borderStartStartRadius: 0
                },
                '&-compact-first-item': {
                    borderEndEndRadius: 0,
                    borderStartEndRadius: 0
                },
                '&-compact-item:not(:first-child):not(:last-child)': {
                    borderRadius: 0
                },
                '&-compact-item:not(:last-child)': {
                    borderInlineEndWidth: 0
                },
                '&-compact-item:not(:first-child)': {
                    borderInlineStartWidth: 0
                }
            },
            // ==========================================================
            // ==                       Variants                       ==
            // ==========================================================
            {
                '--space-addon-border-color': colorBorder,
                '--space-addon-background': colorBgContainerDisabled,
                // Filled
                '--space-addon-border-color-outlined': colorBorder,
                '--space-addon-background-filled': colorBgContainerDisabled,
                borderColor: 'var(--space-addon-border-color)',
                background: 'var(--space-addon-background)',
                // ======================= Outlined =======================
                ["&-variant-outlined"]: {
                    '--space-addon-border-color': 'var(--space-addon-border-color-outlined)'
                },
                // ======================== Filled ========================
                ["&-variant-filled"]: {
                    '--space-addon-border-color': 'transparent',
                    '--space-addon-background': 'var(--space-addon-background-filled)',
                    // Disabled
                    ["&".concat(componentCls, "-disabled")]: {
                        '--space-addon-border-color': colorBorder,
                        '--space-addon-background': colorBgContainerDisabled
                    }
                },
                // ====================== Borderless ======================
                ["&-variant-borderless"]: {
                    border: 'none',
                    background: 'transparent'
                },
                // ====================== Underlined ======================
                ["&-variant-underlined"]: {
                    border: 'none',
                    background: 'transparent'
                }
            },
            // ==========================================================
            // ==                        Status                        ==
            // ==========================================================
            {
                '&-status-error': {
                    '--space-addon-border-color-outlined': token.colorError,
                    '--space-addon-background-filled': token.colorErrorBg,
                    color: token.colorError
                },
                '&-status-warning': {
                    '--space-addon-border-color-outlined': token.colorWarning,
                    '--space-addon-background-filled': token.colorWarningBg,
                    color: token.colorWarning
                }
            }
        ]
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Space',
    'Addon'
], (token)=>[
        genSpaceAddonStyle(token),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(token, {
            focus: false
        })
    ]);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Addon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/addon.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const SpaceAddon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { className, children, style, prefixCls: customizePrefixCls, variant = 'outlined', disabled, status, ...restProps } = props;
    const { getPrefixCls, direction: directionConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('space-addon', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { compactItemClassnames, compactSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, directionConfig);
    const statusCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, status);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, hashId, compactItemClassnames, cssVarCls, "".concat(prefixCls, "-variant-").concat(variant), statusCls, {
        ["".concat(prefixCls, "-").concat(compactSize)]: compactSize,
        ["".concat(prefixCls, "-disabled")]: disabled
    }, className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: ref,
        className: classes,
        style: style,
        ...restProps
    }, children);
});
const __TURBOPACK__default__export__ = SpaceAddon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceContext",
    ()=>SpaceContext,
    "SpaceContextProvider",
    ()=>SpaceContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SpaceContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Item.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const Item = (props)=>{
    const { className, prefix, index, children, separator, style, classNames, styles } = props;
    const { latestIndex } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaceContext"]);
    if (children === null || children === undefined) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: className,
        style: style
    }, children), index < latestIndex && separator && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefix, "-item-separator"), classNames.separator),
        style: styles.separator
    }, separator));
};
const __TURBOPACK__default__export__ = Item;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
const genSpaceStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            '&-rtl': {
                direction: 'rtl'
            },
            '&-vertical': {
                flexDirection: 'column'
            },
            '&-align': {
                flexDirection: 'column',
                '&-center': {
                    alignItems: 'center'
                },
                '&-start': {
                    alignItems: 'flex-start'
                },
                '&-end': {
                    alignItems: 'flex-end'
                },
                '&-baseline': {
                    alignItems: 'baseline'
                }
            },
            ["".concat(componentCls, "-item:empty")]: {
                display: 'none'
            },
            // https://github.com/ant-design/ant-design/issues/47875
            ["".concat(componentCls, "-item > ").concat(antCls, "-badge-not-a-wrapper:only-child")]: {
                display: 'block'
            }
        }
    };
};
const genSpaceGapStyle = (token)=>{
    const { componentCls } = token;
    return {
        [componentCls]: {
            '&-gap-row-small': {
                rowGap: token.spaceGapSmallSize
            },
            '&-gap-row-middle': {
                rowGap: token.spaceGapMiddleSize
            },
            '&-gap-row-large': {
                rowGap: token.spaceGapLargeSize
            },
            '&-gap-col-small': {
                columnGap: token.spaceGapSmallSize
            },
            '&-gap-col-middle': {
                columnGap: token.spaceGapMiddleSize
            },
            '&-gap-col-large': {
                columnGap: token.spaceGapLargeSize
            }
        }
    };
};
const prepareComponentToken = ()=>({});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Space', (token)=>{
    const spaceToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spaceGapSmallSize: token.paddingXS,
        spaceGapMiddleSize: token.padding,
        spaceGapLargeSize: token.paddingLG
    });
    return [
        genSpaceStyle(spaceToken),
        genSpaceGapStyle(spaceToken)
    ];
}, ()=>({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/gapSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useOrientation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/isNonNullable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Addon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/style/index.js [app-client] (ecmascript)");
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
const InternalSpace = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { getPrefixCls, direction: directionConfig, size: contextSize, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('space');
    const { size = contextSize !== null && contextSize !== void 0 ? contextSize : 'small', align, className, rootClassName, children, direction, orientation, prefixCls: customizePrefixCls, split, separator, style, vertical, wrap = false, classNames, styles, ...restProps } = props;
    const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [
        size,
        size
    ];
    const isPresetVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(verticalSize);
    const isPresetHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresetSize"])(horizontalSize);
    const isValidVerticalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(verticalSize);
    const isValidHorizontalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$gapSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidGapNumber"])(horizontalSize);
    const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children, {
        keepEmpty: true
    });
    const [mergedOrientation, mergedVertical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useOrientation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrientation"])(orientation, vertical, direction);
    const mergedAlign = align === undefined && !mergedVertical ? 'center' : align;
    const mergedSeparator = separator !== null && separator !== void 0 ? separator : split;
    const prefixCls = getPrefixCls('space', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size,
        orientation: mergedOrientation,
        align: mergedAlign
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
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, hashId, "".concat(prefixCls, "-").concat(mergedOrientation), {
        ["".concat(prefixCls, "-rtl")]: directionConfig === 'rtl',
        ["".concat(prefixCls, "-align-").concat(mergedAlign)]: mergedAlign,
        ["".concat(prefixCls, "-gap-row-").concat(verticalSize)]: isPresetVerticalSize,
        ["".concat(prefixCls, "-gap-col-").concat(horizontalSize)]: isPresetHorizontalSize
    }, className, rootClassName, cssVarCls, mergedClassNames.root);
    const itemClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-item"), mergedClassNames.item);
    // Calculate latest one
    const renderedItems = childNodes.map((child, i)=>{
        const key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(itemClassName, "-").concat(i);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            prefix: prefixCls,
            classNames: mergedClassNames,
            styles: mergedStyles,
            className: itemClassName,
            key: key,
            index: i,
            separator: mergedSeparator,
            style: mergedStyles.item
        }, child);
    });
    // ======================== Warning ==========================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Space');
        [
            [
                'direction',
                'orientation'
            ],
            [
                'split',
                'separator'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const memoizedSpaceContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalSpace.useMemo[memoizedSpaceContext]": ()=>{
            const calcLatestIndex = childNodes.reduce({
                "InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex": (latest, child, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$isNonNullable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child) ? i : latest
            }["InternalSpace.useMemo[memoizedSpaceContext].calcLatestIndex"], 0);
            return {
                latestIndex: calcLatestIndex
            };
        }
    }["InternalSpace.useMemo[memoizedSpaceContext]"], [
        childNodes
    ]);
    // =========================== Render ===========================
    if (childNodes.length === 0) {
        return null;
    }
    const gapStyle = {};
    if (wrap) {
        gapStyle.flexWrap = 'wrap';
    }
    if (!isPresetHorizontalSize && isValidHorizontalSize) {
        gapStyle.columnGap = horizontalSize;
    }
    if (!isPresetVerticalSize && isValidVerticalSize) {
        gapStyle.rowGap = verticalSize;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: ref,
        className: rootClassNames,
        style: {
            ...gapStyle,
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        ...restProps
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaceContextProvider"], {
        value: memoizedSpaceContext
    }, renderedItems));
});
const Space = InternalSpace;
Space.Compact = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Space.Addon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Addon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Space.displayName = 'Space';
}
const __TURBOPACK__default__export__ = Space;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initComponentToken",
    ()=>initComponentToken,
    "initInputToken",
    ()=>initInputToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
function initInputToken(token) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        inputAffixPadding: token.paddingXXS
    });
}
const initComponentToken = (token)=>{
    const { controlHeight, fontSize, lineHeight, lineWidth, controlHeightSM, controlHeightLG, fontSizeLG, lineHeightLG, paddingSM, controlPaddingHorizontalSM, controlPaddingHorizontal, colorFillAlter, colorPrimaryHover, colorPrimary, controlOutlineWidth, controlOutline, colorErrorOutline, colorWarningOutline, colorBgContainer, inputFontSize, inputFontSizeLG, inputFontSizeSM } = token;
    const mergedFontSize = inputFontSize || fontSize;
    const mergedFontSizeSM = inputFontSizeSM || mergedFontSize;
    const mergedFontSizeLG = inputFontSizeLG || fontSizeLG;
    const paddingBlock = Math.round((controlHeight - mergedFontSize * lineHeight) / 2 * 10) / 10 - lineWidth;
    const paddingBlockSM = Math.round((controlHeightSM - mergedFontSizeSM * lineHeight) / 2 * 10) / 10 - lineWidth;
    const paddingBlockLG = Math.ceil((controlHeightLG - mergedFontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth;
    return {
        paddingBlock: Math.max(paddingBlock, 0),
        paddingBlockSM: Math.max(paddingBlockSM, 0),
        paddingBlockLG: Math.max(paddingBlockLG, 0),
        paddingInline: paddingSM - lineWidth,
        paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
        paddingInlineLG: controlPaddingHorizontal - lineWidth,
        addonBg: colorFillAlter,
        activeBorderColor: colorPrimary,
        hoverBorderColor: colorPrimaryHover,
        activeShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(controlOutline),
        errorActiveShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(colorErrorOutline),
        warningActiveShadow: "0 0 0 ".concat(controlOutlineWidth, "px ").concat(colorWarningOutline),
        hoverBg: colorBgContainer,
        activeBg: colorBgContainer,
        inputFontSize: mergedFontSize,
        inputFontSizeLG: mergedFontSizeLG,
        inputFontSizeSM: mergedFontSizeSM
    };
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/variants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genBaseOutlinedStyle",
    ()=>genBaseOutlinedStyle,
    "genBaseUnderlinedStyle",
    ()=>genBaseUnderlinedStyle,
    "genBorderlessStyle",
    ()=>genBorderlessStyle,
    "genDisabledStyle",
    ()=>genDisabledStyle,
    "genFilledGroupStyle",
    ()=>genFilledGroupStyle,
    "genFilledStyle",
    ()=>genFilledStyle,
    "genHoverStyle",
    ()=>genHoverStyle,
    "genOutlinedGroupStyle",
    ()=>genOutlinedGroupStyle,
    "genOutlinedStyle",
    ()=>genOutlinedStyle,
    "genUnderlinedStyle",
    ()=>genUnderlinedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
const genHoverStyle = (token)=>({
        borderColor: token.hoverBorderColor,
        backgroundColor: token.hoverBg
    });
const genDisabledStyle = (token)=>({
        color: token.colorTextDisabled,
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1,
        'input[disabled], textarea[disabled]': {
            cursor: 'not-allowed'
        },
        '&:hover:not([disabled])': {
            ...genHoverStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
                hoverBorderColor: token.colorBorder,
                hoverBg: token.colorBgContainerDisabled
            }))
        }
    });
const genBaseOutlinedStyle = (token, options)=>({
        background: token.colorBgContainer,
        borderWidth: token.lineWidth,
        borderStyle: token.lineType,
        borderColor: options.borderColor,
        '&:hover': {
            borderColor: options.hoverBorderColor,
            backgroundColor: token.hoverBg
        },
        '&:focus, &:focus-within': {
            borderColor: options.activeBorderColor,
            boxShadow: options.activeShadow,
            outline: 0,
            backgroundColor: token.activeBg
        }
    });
const genOutlinedStatusStyle = (token, options)=>({
        ["&".concat(token.componentCls, "-status-").concat(options.status, ":not(").concat(token.componentCls, "-disabled)")]: {
            ...genBaseOutlinedStyle(token, options),
            ["".concat(token.componentCls, "-prefix, ").concat(token.componentCls, "-suffix")]: {
                color: options.affixColor
            }
        },
        ["&".concat(token.componentCls, "-status-").concat(options.status).concat(token.componentCls, "-disabled")]: {
            borderColor: options.borderColor
        }
    });
const genOutlinedStyle = (token, extraStyles)=>({
        '&-outlined': {
            ...genBaseOutlinedStyle(token, {
                borderColor: token.colorBorder,
                hoverBorderColor: token.hoverBorderColor,
                activeBorderColor: token.activeBorderColor,
                activeShadow: token.activeShadow
            }),
            ["&".concat(token.componentCls, "-disabled, &[disabled]")]: {
                ...genDisabledStyle(token)
            },
            ...genOutlinedStatusStyle(token, {
                status: 'error',
                borderColor: token.colorError,
                hoverBorderColor: token.colorErrorBorderHover,
                activeBorderColor: token.colorError,
                activeShadow: token.errorActiveShadow,
                affixColor: token.colorError
            }),
            ...genOutlinedStatusStyle(token, {
                status: 'warning',
                borderColor: token.colorWarning,
                hoverBorderColor: token.colorWarningBorderHover,
                activeBorderColor: token.colorWarning,
                activeShadow: token.warningActiveShadow,
                affixColor: token.colorWarning
            }),
            ...extraStyles
        }
    });
const genOutlinedGroupStatusStyle = (token, options)=>({
        ["&".concat(token.componentCls, "-group-wrapper-status-").concat(options.status)]: {
            ["".concat(token.componentCls, "-group-addon")]: {
                borderColor: options.addonBorderColor,
                color: options.addonColor
            }
        }
    });
const genOutlinedGroupStyle = (token)=>({
        '&-outlined': {
            ["".concat(token.componentCls, "-group")]: {
                '&-addon': {
                    background: token.addonBg,
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
                },
                '&-addon:first-child': {
                    borderInlineEnd: 0
                },
                '&-addon:last-child': {
                    borderInlineStart: 0
                }
            },
            ...genOutlinedGroupStatusStyle(token, {
                status: 'error',
                addonBorderColor: token.colorError,
                addonColor: token.colorErrorText
            }),
            ...genOutlinedGroupStatusStyle(token, {
                status: 'warning',
                addonBorderColor: token.colorWarning,
                addonColor: token.colorWarningText
            }),
            ["&".concat(token.componentCls, "-group-wrapper-disabled")]: {
                ["".concat(token.componentCls, "-group-addon")]: {
                    ...genDisabledStyle(token)
                }
            }
        }
    });
const genBorderlessStyle = (token, extraStyles)=>{
    const { componentCls } = token;
    return {
        '&-borderless': {
            background: 'transparent',
            border: 'none',
            '&:focus, &:focus-within': {
                outline: 'none'
            },
            // >>>>> Disabled
            ["&".concat(componentCls, "-disabled, &[disabled]")]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            },
            // >>>>> Status
            ["&".concat(componentCls, "-status-error")]: {
                '&, & input, & textarea': {
                    color: token.colorError
                }
            },
            ["&".concat(componentCls, "-status-warning")]: {
                '&, & input, & textarea': {
                    color: token.colorWarning
                }
            },
            ...extraStyles
        }
    };
};
/* ============== Filled ============== */ const genBaseFilledStyle = (token, options)=>{
    var _options_inputColor;
    return {
        background: options.bg,
        borderWidth: token.lineWidth,
        borderStyle: token.lineType,
        borderColor: 'transparent',
        'input&, & input, textarea&, & textarea': {
            color: (_options_inputColor = options === null || options === void 0 ? void 0 : options.inputColor) !== null && _options_inputColor !== void 0 ? _options_inputColor : 'unset'
        },
        '&:hover': {
            background: options.hoverBg
        },
        '&:focus, &:focus-within': {
            outline: 0,
            borderColor: options.activeBorderColor,
            backgroundColor: token.activeBg
        }
    };
};
const genFilledStatusStyle = (token, options)=>({
        ["&".concat(token.componentCls, "-status-").concat(options.status, ":not(").concat(token.componentCls, "-disabled)")]: {
            ...genBaseFilledStyle(token, options),
            ["".concat(token.componentCls, "-prefix, ").concat(token.componentCls, "-suffix")]: {
                color: options.affixColor
            }
        }
    });
const genFilledStyle = (token, extraStyles)=>({
        '&-filled': {
            ...genBaseFilledStyle(token, {
                bg: token.colorFillTertiary,
                hoverBg: token.colorFillSecondary,
                activeBorderColor: token.activeBorderColor
            }),
            ["&".concat(token.componentCls, "-disabled, &[disabled]")]: {
                ...genDisabledStyle(token)
            },
            ...genFilledStatusStyle(token, {
                status: 'error',
                bg: token.colorErrorBg,
                hoverBg: token.colorErrorBgHover,
                activeBorderColor: token.colorError,
                inputColor: token.colorErrorText,
                affixColor: token.colorError
            }),
            ...genFilledStatusStyle(token, {
                status: 'warning',
                bg: token.colorWarningBg,
                hoverBg: token.colorWarningBgHover,
                activeBorderColor: token.colorWarning,
                inputColor: token.colorWarningText,
                affixColor: token.colorWarning
            }),
            ...extraStyles
        }
    });
const genFilledGroupStatusStyle = (token, options)=>({
        ["&".concat(token.componentCls, "-group-wrapper-status-").concat(options.status)]: {
            ["".concat(token.componentCls, "-group-addon")]: {
                background: options.addonBg,
                color: options.addonColor
            }
        }
    });
const genFilledGroupStyle = (token)=>({
        '&-filled': {
            ["".concat(token.componentCls, "-group-addon")]: {
                background: token.colorFillTertiary,
                '&:last-child': {
                    position: 'static'
                }
            },
            ...genFilledGroupStatusStyle(token, {
                status: 'error',
                addonBg: token.colorErrorBg,
                addonColor: token.colorErrorText
            }),
            ...genFilledGroupStatusStyle(token, {
                status: 'warning',
                addonBg: token.colorWarningBg,
                addonColor: token.colorWarningText
            }),
            ["&".concat(token.componentCls, "-group-wrapper-disabled")]: {
                ["".concat(token.componentCls, "-group")]: {
                    '&-addon': {
                        background: token.colorFillTertiary,
                        color: token.colorTextDisabled
                    },
                    '&-addon:first-child': {
                        borderInlineStart: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
                        borderTop: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
                        borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
                    },
                    '&-addon:last-child': {
                        borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
                        borderTop: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder),
                        borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
                    }
                }
            }
        }
    });
const genBaseUnderlinedStyle = (token, options)=>({
        background: token.colorBgContainer,
        borderWidth: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " 0"),
        borderStyle: "".concat(token.lineType, " none"),
        borderColor: "transparent transparent ".concat(options.borderColor, " transparent"),
        borderRadius: 0,
        '&:hover': {
            borderColor: "transparent transparent ".concat(options.hoverBorderColor, " transparent"),
            backgroundColor: token.hoverBg
        },
        '&:focus, &:focus-within': {
            borderColor: "transparent transparent ".concat(options.activeBorderColor, " transparent"),
            outline: 0,
            backgroundColor: token.activeBg
        }
    });
const genUnderlinedStatusStyle = (token, options)=>({
        ["&".concat(token.componentCls, "-status-").concat(options.status, ":not(").concat(token.componentCls, "-disabled)")]: {
            ...genBaseUnderlinedStyle(token, options),
            ["".concat(token.componentCls, "-prefix, ").concat(token.componentCls, "-suffix")]: {
                color: options.affixColor
            }
        },
        ["&".concat(token.componentCls, "-status-").concat(options.status).concat(token.componentCls, "-disabled")]: {
            borderColor: "transparent transparent ".concat(options.borderColor, " transparent")
        }
    });
const genUnderlinedStyle = (token, extraStyles)=>({
        '&-underlined': {
            ...genBaseUnderlinedStyle(token, {
                borderColor: token.colorBorder,
                hoverBorderColor: token.hoverBorderColor,
                activeBorderColor: token.activeBorderColor,
                activeShadow: token.activeShadow
            }),
            // >>>>> Disabled
            ["&".concat(token.componentCls, "-disabled, &[disabled]")]: {
                color: token.colorTextDisabled,
                boxShadow: 'none',
                cursor: 'not-allowed',
                '&:hover': {
                    borderColor: "transparent transparent ".concat(token.colorBorder, " transparent")
                }
            },
            'input[disabled], textarea[disabled]': {
                cursor: 'not-allowed'
            },
            ...genUnderlinedStatusStyle(token, {
                status: 'error',
                borderColor: token.colorError,
                hoverBorderColor: token.colorErrorBorderHover,
                activeBorderColor: token.colorError,
                activeShadow: token.errorActiveShadow,
                affixColor: token.colorError
            }),
            ...genUnderlinedStatusStyle(token, {
                status: 'warning',
                borderColor: token.colorWarning,
                hoverBorderColor: token.colorWarningBorderHover,
                activeBorderColor: token.colorWarning,
                activeShadow: token.warningActiveShadow,
                affixColor: token.colorWarning
            }),
            ...extraStyles
        }
    });
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "genActiveStyle",
    ()=>genActiveStyle,
    "genAffixStyle",
    ()=>genAffixStyle,
    "genBasicInputStyle",
    ()=>genBasicInputStyle,
    "genInputGroupStyle",
    ()=>genInputGroupStyle,
    "genInputSmallStyle",
    ()=>genInputSmallStyle,
    "genInputStyle",
    ()=>genInputStyle,
    "genPlaceholderStyle",
    ()=>genPlaceholderStyle,
    "useSharedStyle",
    ()=>useSharedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/compact-item.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/variants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const genPlaceholderStyle = (color)=>({
        // Firefox
        '&::-moz-placeholder': {
            opacity: 1
        },
        '&::placeholder': {
            color,
            userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
        },
        '&:placeholder-shown': {
            textOverflow: 'ellipsis'
        }
    });
const genActiveStyle = (token)=>({
        borderColor: token.activeBorderColor,
        boxShadow: token.activeShadow,
        outline: 0,
        backgroundColor: token.activeBg
    });
const genInputLargeStyle = (token)=>{
    const { paddingBlockLG, lineHeightLG, borderRadiusLG, paddingInlineLG } = token;
    return {
        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingBlockLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(paddingInlineLG)),
        fontSize: token.inputFontSizeLG,
        lineHeight: lineHeightLG,
        borderRadius: borderRadiusLG
    };
};
const genInputSmallStyle = (token)=>({
        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingBlockSM), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInlineSM)),
        fontSize: token.inputFontSizeSM,
        borderRadius: token.borderRadiusSM
    });
const genBasicInputStyle = function(token) {
    let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        minWidth: 0,
        padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingBlock), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInline)),
        color: token.colorText,
        fontSize: token.inputFontSize,
        lineHeight: token.lineHeight,
        borderRadius: token.borderRadius,
        transition: "all ".concat(token.motionDurationMid),
        ...genPlaceholderStyle(token.colorTextPlaceholder),
        // Size
        '&-lg': {
            ...genInputLargeStyle(token),
            ...option.largeStyle
        },
        '&-sm': {
            ...genInputSmallStyle(token),
            ...option.smallStyle
        },
        // RTL
        '&-rtl, &-textarea-rtl': {
            direction: 'rtl'
        }
    };
};
const genInputGroupStyle = (token)=>{
    const { componentCls, antCls } = token;
    return {
        position: 'relative',
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        // Undo padding and float of grid classes
        "&[class*='col-']": {
            paddingInlineEnd: token.paddingXS,
            '&:last-child': {
                paddingInlineEnd: 0
            }
        },
        // Sizing options
        ["&-lg ".concat(componentCls, ", &-lg > ").concat(componentCls, "-group-addon")]: {
            ...genInputLargeStyle(token)
        },
        ["&-sm ".concat(componentCls, ", &-sm > ").concat(componentCls, "-group-addon")]: {
            ...genInputSmallStyle(token)
        },
        // Fix https://github.com/ant-design/ant-design/issues/5754
        ["&-lg ".concat(antCls, "-select-single")]: {
            height: token.controlHeightLG
        },
        ["&-sm ".concat(antCls, "-select-single")]: {
            height: token.controlHeightSM
        },
        ["> ".concat(componentCls)]: {
            display: 'table-cell',
            '&:not(:first-child):not(:last-child)': {
                borderRadius: 0
            }
        },
        ["".concat(componentCls, "-group")]: {
            '&-addon, &-wrap': {
                display: 'table-cell',
                width: 1,
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
                '&:not(:first-child):not(:last-child)': {
                    borderRadius: 0
                }
            },
            '&-wrap > *': {
                display: 'block !important'
            },
            '&-addon': {
                position: 'relative',
                padding: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingInline)),
                color: token.colorText,
                fontWeight: 'normal',
                fontSize: token.inputFontSize,
                textAlign: 'center',
                borderRadius: token.borderRadius,
                transition: "all ".concat(token.motionDurationSlow),
                lineHeight: 1,
                // Reset Select's style in addon
                ["".concat(antCls, "-select")]: {
                    margin: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingBlock).add(1).mul(-1).equal()), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingInline).mul(-1).equal())),
                    ["&".concat(antCls, "-select-single:not(").concat(antCls, "-select-customize-input):not(").concat(antCls, "-pagination-size-changer)")]: {
                        backgroundColor: 'inherit',
                        border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " transparent"),
                        boxShadow: 'none'
                    }
                },
                // https://github.com/ant-design/ant-design/issues/31333
                ["".concat(antCls, "-cascader-picker")]: {
                    margin: "-9px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.paddingInline).mul(-1).equal())),
                    backgroundColor: 'transparent',
                    ["".concat(antCls, "-cascader-input")]: {
                        textAlign: 'start',
                        border: 0,
                        boxShadow: 'none'
                    }
                }
            }
        },
        [componentCls]: {
            width: '100%',
            marginBottom: 0,
            textAlign: 'inherit',
            '&:focus': {
                zIndex: 1,
                // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
                borderInlineEndWidth: 1
            },
            '&:hover': {
                zIndex: 1,
                borderInlineEndWidth: 1
            }
        },
        // Reset rounded corners
        ["> ".concat(componentCls, ":first-child, ").concat(componentCls, "-group-addon:first-child")]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            // Reset Select's style in addon
            ["".concat(antCls, "-select")]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        ["> ".concat(componentCls, "-affix-wrapper")]: {
            ["&:not(:first-child) ".concat(componentCls)]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            },
            ["&:not(:last-child) ".concat(componentCls)]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            }
        },
        ["> ".concat(componentCls, ":last-child, ").concat(componentCls, "-group-addon:last-child")]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            // Reset Select's style in addon
            ["".concat(antCls, "-select")]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        },
        ["".concat(componentCls, "-affix-wrapper")]: {
            '&:not(:last-child)': {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
            },
            ["&:not(:first-child)"]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
            }
        },
        ["&".concat(componentCls, "-group-compact")]: {
            display: 'block',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
            ["".concat(componentCls, "-group-addon, ").concat(componentCls, "-group-wrap, > ").concat(componentCls)]: {
                '&:not(:first-child):not(:last-child)': {
                    borderInlineEndWidth: token.lineWidth,
                    '&:hover, &:focus': {
                        zIndex: 1
                    }
                }
            },
            '& > *': {
                display: 'inline-flex',
                float: 'none',
                verticalAlign: 'top',
                // https://github.com/ant-design/ant-design-pro/issues/139
                borderRadius: 0
            },
            ["\n        & > ".concat(componentCls, "-affix-wrapper,\n        & > ").concat(componentCls, "-number-affix-wrapper,\n        & > ").concat(antCls, "-picker-range\n      ")]: {
                display: 'inline-flex'
            },
            '& > *:not(:last-child)': {
                marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
                borderInlineEndWidth: token.lineWidth
            },
            // Undo float for .ant-input-group .ant-input
            [componentCls]: {
                float: 'none'
            },
            // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
            ["& > ".concat(antCls, "-select,\n      & > ").concat(antCls, "-select-auto-complete ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker ").concat(componentCls, ",\n      & > ").concat(componentCls, "-group-wrapper ").concat(componentCls)]: {
                borderInlineEndWidth: token.lineWidth,
                borderRadius: 0,
                '&:hover, &:focus': {
                    zIndex: 1
                }
            },
            ["& > ".concat(antCls, "-select-focused")]: {
                zIndex: 1
            },
            // update z-index for arrow icon
            ["& > ".concat(antCls, "-select > ").concat(antCls, "-select-arrow")]: {
                zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
            },
            ["& > *:first-child,\n      & > ".concat(antCls, "-select:first-child,\n      & > ").concat(antCls, "-select-auto-complete:first-child ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker:first-child ").concat(componentCls)]: {
                borderStartStartRadius: token.borderRadius,
                borderEndStartRadius: token.borderRadius
            },
            ["& > *:last-child,\n      & > ".concat(antCls, "-select:last-child,\n      & > ").concat(antCls, "-cascader-picker:last-child ").concat(componentCls, ",\n      & > ").concat(antCls, "-cascader-picker-focused:last-child ").concat(componentCls)]: {
                borderInlineEndWidth: token.lineWidth,
                borderStartEndRadius: token.borderRadius,
                borderEndEndRadius: token.borderRadius
            },
            // https://github.com/ant-design/ant-design/issues/12493
            ["& > ".concat(antCls, "-select-auto-complete ").concat(componentCls)]: {
                verticalAlign: 'top'
            },
            ["".concat(componentCls, "-group-wrapper + ").concat(componentCls, "-group-wrapper")]: {
                marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
                ["".concat(componentCls, "-affix-wrapper")]: {
                }
            }
        }
    };
};
const genInputStyle = (token)=>{
    const { componentCls, controlHeightSM, lineWidth, calc } = token;
    const FIXED_CHROME_COLOR_HEIGHT = 16;
    const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...genBasicInputStyle(token),
            // Variants
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genOutlinedStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFilledStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genBorderlessStyle"])(token),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genUnderlinedStyle"])(token),
            '&[type="color"]': {
                height: token.controlHeight,
                ["&".concat(componentCls, "-lg")]: {
                    height: token.controlHeightLG
                },
                ["&".concat(componentCls, "-sm")]: {
                    height: controlHeightSM,
                    paddingTop: colorSmallPadding,
                    paddingBottom: colorSmallPadding
                }
            },
            '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
                appearance: 'none'
            }
        }
    };
};
const genAllowClearStyle = (token)=>{
    const { componentCls } = token;
    return {
        // ========================= Input =========================
        ["".concat(componentCls, "-clear-icon")]: {
            margin: 0,
            padding: 0,
            lineHeight: 0,
            color: token.colorTextQuaternary,
            fontSize: token.fontSizeIcon,
            verticalAlign: -1,
            // https://github.com/ant-design/ant-design/pull/18151
            // https://codesandbox.io/s/wizardly-sun-u10br
            cursor: 'pointer',
            transition: "color ".concat(token.motionDurationSlow),
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            '&:hover': {
                color: token.colorIcon
            },
            '&:active': {
                color: token.colorText
            },
            '&-hidden': {
                visibility: 'hidden'
            },
            '&-has-suffix': {
                margin: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.inputAffixPadding))
            }
        }
    };
};
const genAffixStyle = (token)=>{
    const { componentCls, inputAffixPadding, colorTextDescription, motionDurationSlow, colorIcon, colorIconHover, iconCls } = token;
    const affixCls = "".concat(componentCls, "-affix-wrapper");
    const affixClsDisabled = "".concat(componentCls, "-affix-wrapper-disabled");
    return {
        [affixCls]: {
            ...genBasicInputStyle(token),
            display: 'inline-flex',
            '&-focused, &:focus': {
                zIndex: 1
            },
            ["> input".concat(componentCls)]: {
                padding: 0
            },
            ["> input".concat(componentCls, ", > textarea").concat(componentCls)]: {
                fontSize: 'inherit',
                border: 'none',
                borderRadius: 0,
                outline: 'none',
                background: 'transparent',
                color: 'inherit',
                '&::-ms-reveal': {
                    display: 'none'
                },
                '&:focus': {
                    boxShadow: 'none !important'
                }
            },
            '&::before': {
                display: 'inline-block',
                width: 0,
                visibility: 'hidden',
                content: '"\\a0"'
            },
            [componentCls]: {
                '&-prefix, &-suffix': {
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    '> *:not(:last-child)': {
                        marginInlineEnd: token.paddingXS
                    }
                },
                '&-show-count-suffix': {
                    color: colorTextDescription,
                    direction: 'ltr'
                },
                '&-show-count-has-suffix': {
                    marginInlineEnd: token.paddingXXS
                },
                '&-prefix': {
                    marginInlineEnd: inputAffixPadding
                },
                '&-suffix': {
                    marginInlineStart: inputAffixPadding
                }
            },
            ...genAllowClearStyle(token),
            // password
            ["".concat(iconCls).concat(componentCls, "-password-icon")]: {
                color: colorIcon,
                cursor: 'pointer',
                transition: "all ".concat(motionDurationSlow),
                '&:hover': {
                    color: colorIconHover
                }
            }
        },
        // 覆盖 affix-wrapper borderRadius！
        ["".concat(componentCls, "-underlined")]: {
            borderRadius: 0
        },
        [affixClsDisabled]: {
            // password disabled
            ["".concat(iconCls).concat(componentCls, "-password-icon")]: {
                color: colorIcon,
                cursor: 'not-allowed',
                '&:hover': {
                    color: colorIcon
                }
            }
        }
    };
};
const genGroupStyle = (token)=>{
    const { componentCls, borderRadiusLG, borderRadiusSM } = token;
    return {
        ["".concat(componentCls, "-group")]: {
            // Style for input-group: input with label, with button or dropdown...
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            ...genInputGroupStyle(token),
            '&-rtl': {
                direction: 'rtl'
            },
            '&-wrapper': {
                display: 'inline-block',
                width: '100%',
                textAlign: 'start',
                verticalAlign: 'top',
                // https://github.com/ant-design/ant-design/issues/6403
                '&-rtl': {
                    direction: 'rtl'
                },
                // Size
                '&-lg': {
                    ["".concat(componentCls, "-group-addon")]: {
                        borderRadius: borderRadiusLG,
                        fontSize: token.inputFontSizeLG
                    }
                },
                '&-sm': {
                    ["".concat(componentCls, "-group-addon")]: {
                        borderRadius: borderRadiusSM
                    }
                },
                // Variants
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genOutlinedGroupStyle"])(token),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$variants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFilledGroupStyle"])(token),
                // '&-disabled': {
                //   [`${componentCls}-group-addon`]: {
                //     ...genDisabledStyle(token),
                //   },
                // },
                // Fix the issue of using icons in Space Compact mode
                // https://github.com/ant-design/ant-design/issues/42122
                ["&:not(".concat(componentCls, "-compact-first-item):not(").concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-item")]: {
                    ["".concat(componentCls, ", ").concat(componentCls, "-group-addon")]: {
                        borderRadius: 0
                    }
                },
                ["&:not(".concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-first-item")]: {
                    ["".concat(componentCls, ", ").concat(componentCls, "-group-addon")]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0
                    }
                },
                ["&:not(".concat(componentCls, "-compact-first-item)").concat(componentCls, "-compact-last-item")]: {
                    ["".concat(componentCls, ", ").concat(componentCls, "-group-addon")]: {
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0
                    }
                },
                // Fix the issue of input use show-count param in space compact mode
                // https://github.com/ant-design/ant-design/issues/46872
                ["&:not(".concat(componentCls, "-compact-last-item)").concat(componentCls, "-compact-item")]: {
                    ["".concat(componentCls, "-affix-wrapper")]: {
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 0
                    }
                },
                // Fix the issue of input use `addonAfter` param in space compact mode
                // https://github.com/ant-design/ant-design/issues/52483
                ["&:not(".concat(componentCls, "-compact-first-item)").concat(componentCls, "-compact-item")]: {
                    ["".concat(componentCls, "-affix-wrapper")]: {
                        borderStartStartRadius: 0,
                        borderEndStartRadius: 0
                    }
                }
            }
        }
    };
};
// ============================== Range ===============================
const genRangeStyle = (token)=>{
    const { componentCls } = token;
    return {
        ["".concat(componentCls, "-out-of-range")]: {
            ["&, & input, & textarea, ".concat(componentCls, "-show-count-suffix, ").concat(componentCls, "-data-count")]: {
                color: token.colorError
            }
        }
    };
};
const useSharedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Shared'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return [
        genInputStyle(inputToken),
        genAffixStyle(inputToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Component'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return [
        genGroupStyle(inputToken),
        genRangeStyle(inputToken),
        // =====================================================
        // ==             Space Compact                       ==
        // =====================================================
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$compact$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genCompactItemStyle"])(inputToken)
    ];
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
/** @deprecated Please use `Space.Compact` */ const Group = (props)=>{
    const { getPrefixCls, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const { prefixCls: customizePrefixCls, className } = props;
    const prefixCls = getPrefixCls('input-group', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input');
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(inputPrefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, cssVarCls, {
        ["".concat(prefixCls, "-lg")]: props.size === 'large',
        ["".concat(prefixCls, "-sm")]: props.size === 'small',
        ["".concat(prefixCls, "-compact")]: props.compact,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, hashId, className);
    const formItemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const groupFormItemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Group.useMemo[groupFormItemContext]": ()=>({
                ...formItemContext,
                isFormItemInput: false
            })
    }["Group.useMemo[groupFormItemContext]"], [
        formItemContext
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input.Group');
        warning.deprecated(false, 'Input.Group', 'Space.Compact');
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: groupFormItemContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Compact, {
        className: cls,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onFocus: props.onFocus,
        onBlur: props.onBlur
    }, props.children));
};
const __TURBOPACK__default__export__ = Group;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/utils/commonUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasAddon",
    ()=>hasAddon,
    "hasPrefixSuffix",
    ()=>hasPrefixSuffix,
    "resolveOnChange",
    ()=>resolveOnChange
]);
function hasAddon(props) {
    return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear);
}
// TODO: It's better to use `Proxy` replace the `element.value`. But we still need support IE11.
function cloneEvent(event, target, value) {
    // A bug report filed on WebKit's Bugzilla tracker, dating back to 2009, specifically addresses the issue of cloneNode() not copying files of <input type="file"> elements.
    // As of the last update, this bug was still marked as "NEW," indicating that it might not have been resolved yet​​.
    // https://bugs.webkit.org/show_bug.cgi?id=28123
    const currentTarget = target.cloneNode(true);
    // click clear icon
    const newEvent = Object.create(event, {
        target: {
            value: currentTarget
        },
        currentTarget: {
            value: currentTarget
        }
    });
    // Fill data
    currentTarget.value = value;
    // Fill selection. Some type like `email` not support selection
    // https://github.com/ant-design/ant-design/issues/47833
    if (typeof target.selectionStart === 'number' && typeof target.selectionEnd === 'number') {
        currentTarget.selectionStart = target.selectionStart;
        currentTarget.selectionEnd = target.selectionEnd;
    }
    currentTarget.setSelectionRange = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        target.setSelectionRange(...args);
    };
    return newEvent;
}
function resolveOnChange(target, e, onChange, targetValue) {
    if (!onChange) {
        return;
    }
    let event = e;
    if (e.type === 'click') {
        // Clone a new target for event.
        // Avoid the following usage, the setQuery method gets the original value.
        //
        // const [query, setQuery] = React.useState('');
        // <Input
        //   allowClear
        //   value={query}
        //   onChange={(e)=> {
        //     setQuery((prevStatus) => e.target.value);
        //   }}
        // />
        event = cloneEvent(e, target, '');
        onChange(event);
        return;
    }
    // Trigger by composition event, this means we need force change the input value
    // https://github.com/ant-design/ant-design/issues/45737
    // https://github.com/ant-design/ant-design/issues/46598
    if (target.type !== 'file' && targetValue !== undefined) {
        event = cloneEvent(e, target, targetValue);
        onChange(event);
        return;
    }
    onChange(event);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/utils/commonUtils.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const BaseInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    var _inputElement_props, _element_props, _element_props1;
    const { inputElement: inputEl, children, prefixCls, prefix, suffix, addonBefore, addonAfter, className, style, disabled, readOnly, focused, triggerFocus, allowClear, value, handleReset, hidden, classes, classNames, dataAttrs, styles, components, onClear } = props;
    const inputElement = children !== null && children !== void 0 ? children : inputEl;
    const AffixWrapperComponent = (components === null || components === void 0 ? void 0 : components.affixWrapper) || 'span';
    const GroupWrapperComponent = (components === null || components === void 0 ? void 0 : components.groupWrapper) || 'span';
    const WrapperComponent = (components === null || components === void 0 ? void 0 : components.wrapper) || 'span';
    const GroupAddonComponent = (components === null || components === void 0 ? void 0 : components.groupAddon) || 'span';
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onInputClick = (e)=>{
        var _containerRef_current;
        if ((_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.contains(e.target)) {
            triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
        }
    };
    const hasAffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrefixSuffix"])(props);
    let element = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(inputElement, {
        value,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])((_inputElement_props = inputElement.props) === null || _inputElement_props === void 0 ? void 0 : _inputElement_props.className, !hasAffix && (classNames === null || classNames === void 0 ? void 0 : classNames.variant)) || null
    });
    // ======================== Ref ======================== //
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "BaseInput.useImperativeHandle": ()=>({
                nativeElement: groupRef.current || containerRef.current
            })
    }["BaseInput.useImperativeHandle"]);
    // ================== Prefix & Suffix ================== //
    if (hasAffix) {
        // ================== Clear Icon ================== //
        let clearIcon = null;
        if (allowClear) {
            const needClear = !disabled && !readOnly && value;
            const clearIconCls = "".concat(prefixCls, "-clear-icon");
            const iconNode = typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon) ? allowClear.clearIcon : '✖';
            clearIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                type: "button",
                tabIndex: -1,
                onClick: (event)=>{
                    handleReset === null || handleReset === void 0 ? void 0 : handleReset(event);
                    onClear === null || onClear === void 0 ? void 0 : onClear();
                },
                onMouseDown: (e)=>e.preventDefault(),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(clearIconCls, {
                    ["".concat(clearIconCls, "-hidden")]: !needClear,
                    ["".concat(clearIconCls, "-has-suffix")]: !!suffix
                })
            }, iconNode);
        }
        const affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
        const affixWrapperCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(affixWrapperPrefixCls, {
            ["".concat(prefixCls, "-disabled")]: disabled,
            ["".concat(affixWrapperPrefixCls, "-disabled")]: disabled,
            // Not used, but keep it
            ["".concat(affixWrapperPrefixCls, "-focused")]: focused,
            // Not used, but keep it
            ["".concat(affixWrapperPrefixCls, "-readonly")]: readOnly,
            ["".concat(affixWrapperPrefixCls, "-input-with-clear-btn")]: suffix && allowClear && value
        }, classes === null || classes === void 0 ? void 0 : classes.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, classNames === null || classNames === void 0 ? void 0 : classNames.variant);
        const suffixNode = (suffix || allowClear) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-suffix"), classNames === null || classNames === void 0 ? void 0 : classNames.suffix),
            style: styles === null || styles === void 0 ? void 0 : styles.suffix
        }, clearIcon, suffix);
        element = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AffixWrapperComponent, _extends({
            className: affixWrapperCls,
            style: styles === null || styles === void 0 ? void 0 : styles.affixWrapper,
            onClick: onInputClick
        }, dataAttrs === null || dataAttrs === void 0 ? void 0 : dataAttrs.affixWrapper, {
            ref: containerRef
        }), prefix && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-prefix"), classNames === null || classNames === void 0 ? void 0 : classNames.prefix),
            style: styles === null || styles === void 0 ? void 0 : styles.prefix
        }, prefix), element, suffixNode);
    }
    // ================== Addon ================== //
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasAddon"])(props)) {
        const wrapperCls = "".concat(prefixCls, "-group");
        const addonCls = "".concat(wrapperCls, "-addon");
        const groupWrapperCls = "".concat(wrapperCls, "-wrapper");
        const mergedWrapperClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-wrapper"), wrapperCls, classes === null || classes === void 0 ? void 0 : classes.wrapper, classNames === null || classNames === void 0 ? void 0 : classNames.wrapper);
        const mergedGroupClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(groupWrapperCls, {
            ["".concat(groupWrapperCls, "-disabled")]: disabled
        }, classes === null || classes === void 0 ? void 0 : classes.group, classNames === null || classNames === void 0 ? void 0 : classNames.groupWrapper);
        // Need another wrapper for changing display:table to display:inline-block
        // and put style prop in wrapper
        element = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GroupWrapperComponent, {
            className: mergedGroupClassName,
            ref: groupRef
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WrapperComponent, {
            className: mergedWrapperClassName
        }, addonBefore && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GroupAddonComponent, {
            className: addonCls
        }, addonBefore), element, addonAfter && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(GroupAddonComponent, {
            className: addonCls
        }, addonAfter)));
    }
    // `className` and `style` are always on the root element
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])((_element_props = element.props) === null || _element_props === void 0 ? void 0 : _element_props.className, className) || null,
        style: {
            ...(_element_props1 = element.props) === null || _element_props1 === void 0 ? void 0 : _element_props1.style,
            ...style
        },
        hidden
    });
});
const __TURBOPACK__default__export__ = BaseInput;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/hooks/useCount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCount,
    "inCountRange",
    ()=>inCountRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function inCountRange(value, countConfig) {
    if (!countConfig.max) {
        return true;
    }
    const count = countConfig.strategy(value);
    return count <= countConfig.max;
}
function useCount(count, showCount) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCount.useMemo": ()=>{
            let mergedConfig = {};
            if (showCount) {
                mergedConfig.show = typeof showCount === 'object' && showCount.formatter ? showCount.formatter : !!showCount;
            }
            mergedConfig = {
                ...mergedConfig,
                ...count
            };
            const { show, ...rest } = mergedConfig;
            return {
                ...rest,
                show: !!show,
                showFormatter: typeof show === 'function' ? show : undefined,
                strategy: rest.strategy || ({
                    "useCount.useMemo": (value)=>value.length
                })["useCount.useMemo"]
            };
        }
    }["useCount.useMemo"], [
        count,
        showCount
    ]);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/hooks/useCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/utils/commonUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { autoComplete, onChange, onFocus, onBlur, onPressEnter, onKeyDown, onKeyUp, prefixCls = 'rc-input', disabled, htmlSize, className, maxLength, suffix, showCount, count, type = 'text', classes, classNames, styles, onCompositionStart, onCompositionEnd, ...rest } = props;
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const compositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const keyLockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const holderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const focus = (option)=>{
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerFocus"])(inputRef.current, option);
        }
    };
    // ====================== Value =======================
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.defaultValue, props.value);
    const formatValue = value === undefined || value === null ? '' : String(value);
    // =================== Select Range ===================
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ====================== Count =======================
    const countConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(count, showCount);
    const mergedMax = countConfig.max || maxLength;
    const valueLength = countConfig.strategy(formatValue);
    const isOutOfRange = !!mergedMax && valueLength > mergedMax;
    // ======================= Ref ========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Input.useImperativeHandle": ()=>{
            var _holderRef_current;
            return {
                focus,
                blur: ({
                    "Input.useImperativeHandle": ()=>{
                        var _inputRef_current;
                        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.blur();
                    }
                })["Input.useImperativeHandle"],
                setSelectionRange: ({
                    "Input.useImperativeHandle": (start, end, direction)=>{
                        var _inputRef_current;
                        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.setSelectionRange(start, end, direction);
                    }
                })["Input.useImperativeHandle"],
                select: ({
                    "Input.useImperativeHandle": ()=>{
                        var _inputRef_current;
                        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.select();
                    }
                })["Input.useImperativeHandle"],
                input: inputRef.current,
                nativeElement: ((_holderRef_current = holderRef.current) === null || _holderRef_current === void 0 ? void 0 : _holderRef_current.nativeElement) || inputRef.current
            };
        }
    }["Input.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Input.useEffect": ()=>{
            if (keyLockRef.current) {
                keyLockRef.current = false;
            }
            setFocused({
                "Input.useEffect": (prev)=>prev && disabled ? false : prev
            }["Input.useEffect"]);
        }
    }["Input.useEffect"], [
        disabled
    ]);
    const triggerChange = (e, currentValue, info)=>{
        let cutValue = currentValue;
        if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
            cutValue = countConfig.exceedFormatter(currentValue, {
                max: countConfig.max
            });
            if (currentValue !== cutValue) {
                var _inputRef_current, _inputRef_current1;
                setSelection([
                    ((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.selectionStart) || 0,
                    ((_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.selectionEnd) || 0
                ]);
            }
        } else if (info.source === 'compositionEnd') {
            // Avoid triggering twice
            // https://github.com/ant-design/ant-design/issues/46587
            return;
        }
        setValue(cutValue);
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOnChange"])(inputRef.current, e, onChange, cutValue);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Input.useEffect": ()=>{
            if (selection) {
                var _inputRef_current;
                (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.setSelectionRange(...selection);
            }
        }
    }["Input.useEffect"], [
        selection
    ]);
    const onInternalChange = (e)=>{
        triggerChange(e, e.target.value, {
            source: 'change'
        });
    };
    const onInternalCompositionEnd = (e)=>{
        compositionRef.current = false;
        triggerChange(e, e.currentTarget.value, {
            source: 'compositionEnd'
        });
        onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
    };
    const handleKeyDown = (e)=>{
        if (onPressEnter && e.key === 'Enter' && !keyLockRef.current && !e.nativeEvent.isComposing) {
            keyLockRef.current = true;
            onPressEnter(e);
        }
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    };
    const handleKeyUp = (e)=>{
        if (e.key === 'Enter') {
            keyLockRef.current = false;
        }
        onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(e);
    };
    const handleFocus = (e)=>{
        setFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleBlur = (e)=>{
        if (keyLockRef.current) {
            keyLockRef.current = false;
        }
        setFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    const handleReset = (e)=>{
        setValue('');
        focus();
        if (inputRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOnChange"])(inputRef.current, e, onChange);
        }
    };
    // ====================== Input =======================
    const outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
    const getInputElement = ()=>{
        // Fix https://fb.me/react-unknown-prop
        const otherProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props, [
            'prefixCls',
            'onPressEnter',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'allowClear',
            // Input elements must be either controlled or uncontrolled,
            // specify either the value prop, or the defaultValue prop, but not both.
            'defaultValue',
            'showCount',
            'count',
            'classes',
            'htmlSize',
            'styles',
            'classNames',
            'onClear'
        ]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", _extends({
            autoComplete: autoComplete
        }, otherProps, {
            onChange: onInternalChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
                ["".concat(prefixCls, "-disabled")]: disabled
            }, classNames === null || classNames === void 0 ? void 0 : classNames.input),
            style: styles === null || styles === void 0 ? void 0 : styles.input,
            ref: inputRef,
            size: htmlSize,
            type: type,
            onCompositionStart: (e)=>{
                compositionRef.current = true;
                onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
            },
            onCompositionEnd: onInternalCompositionEnd
        }));
    };
    const getSuffix = ()=>{
        // Max length value
        const hasMaxLength = Number(mergedMax) > 0;
        if (suffix || countConfig.show) {
            const dataCount = countConfig.showFormatter ? countConfig.showFormatter({
                value: formatValue,
                count: valueLength,
                maxLength: mergedMax
            }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : '');
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, countConfig.show && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-show-count-suffix"), {
                    ["".concat(prefixCls, "-show-count-has-suffix")]: !!suffix
                }, classNames === null || classNames === void 0 ? void 0 : classNames.count),
                style: {
                    ...styles === null || styles === void 0 ? void 0 : styles.count
                }
            }, dataCount), suffix);
        }
        return null;
    };
    // ====================== Render ======================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, rest, {
        prefixCls: prefixCls,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, outOfRangeCls),
        handleReset: handleReset,
        value: formatValue,
        focused: focused,
        triggerFocus: focus,
        suffix: getSuffix(),
        disabled: disabled,
        classes: classes,
        classNames: classNames,
        styles: styles,
        ref: holderRef
    }), getInputElement());
});
const __TURBOPACK__default__export__ = Input;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/Input.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/getAllowClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js [app-client] (ecmascript)");
"use client";
;
;
const getAllowClear = (allowClear)=>{
    let mergedAllowClear;
    if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
        mergedAllowClear = allowClear;
    } else if (allowClear) {
        mergedAllowClear = {
            clearIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseCircleFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)
        };
    }
    return mergedAllowClear;
};
const __TURBOPACK__default__export__ = getAllowClear;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
;
;
;
/**
 * Compatible for legacy `bordered` prop.
 */ const useVariant = (component, variant, legacyBordered)=>{
    const { variant: configVariant, [component]: componentConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const ctxVariant = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VariantContext"]);
    const configComponentVariant = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.variant;
    let mergedVariant;
    if (typeof variant !== 'undefined') {
        mergedVariant = variant;
    } else if (legacyBordered === false) {
        mergedVariant = 'borderless';
    } else {
        var _ref, _ref1;
        // form variant > component global variant > global variant
        mergedVariant = (_ref1 = (_ref = ctxVariant !== null && ctxVariant !== void 0 ? ctxVariant : configComponentVariant) !== null && _ref !== void 0 ? _ref : configVariant) !== null && _ref1 !== void 0 ? _ref1 : 'outlined';
    }
    const enableVariantCls = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Variants"].includes(mergedVariant);
    return [
        mergedVariant,
        enableVariantCls
    ];
};
const __TURBOPACK__default__export__ = useVariant;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useRemovePasswordTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
    const removePasswordTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const removePasswordTimeout = ()=>{
        removePasswordTimeoutRef.current.push(setTimeout(()=>{
            var _inputRef_current, _inputRef_current1, _inputRef_current2;
            if (((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.input) && ((_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.input.getAttribute('type')) === 'password' && ((_inputRef_current2 = inputRef.current) === null || _inputRef_current2 === void 0 ? void 0 : _inputRef_current2.input.hasAttribute('value'))) {
                var _inputRef_current3;
                (_inputRef_current3 = inputRef.current) === null || _inputRef_current3 === void 0 ? void 0 : _inputRef_current3.input.removeAttribute('value');
            }
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRemovePasswordTimeout.useEffect": ()=>{
            if (triggerOnMount) {
                removePasswordTimeout();
            }
            return ({
                "useRemovePasswordTimeout.useEffect": ()=>removePasswordTimeoutRef.current.forEach({
                        "useRemovePasswordTimeout.useEffect": (timer)=>{
                            if (timer) {
                                clearTimeout(timer);
                            }
                        }
                    }["useRemovePasswordTimeout.useEffect"])
            })["useRemovePasswordTimeout.useEffect"];
        }
    }["useRemovePasswordTimeout.useEffect"], []);
    return removePasswordTimeout;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPrefixSuffix",
    ()=>hasPrefixSuffix
]);
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/ContextIsolator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/getAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/utils.js [app-client] (ecmascript)");
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
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { prefixCls: customizePrefixCls, bordered = true, status: customStatus, size: customSize, disabled: customDisabled, onBlur, onFocus, suffix, allowClear, addonAfter, addonBefore, className, style, styles, rootClassName, onChange, classNames, variant: customVariant, ...rest } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const { deprecated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input');
        [
            [
                'bordered',
                'variant'
            ],
            [
                'addonAfter',
                'Space.Compact'
            ],
            [
                'addonBefore',
                'Space.Compact'
            ]
        ].forEach((param)=>{
            let [prop, newProp] = param;
            deprecated(!(prop in props), prop, newProp);
        });
    }
    const { getPrefixCls, direction, allowClear: contextAllowClear, autoComplete: contextAutoComplete, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('input');
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Style
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSharedStyle"])(prefixCls, rootClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(prefixCls, rootCls);
    // ===================== Compact Item =====================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    // ===================== Size =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Input.useSize[mergedSize]": (ctx)=>{
            var _ref;
            return (_ref = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _ref !== void 0 ? _ref : ctx;
        }
    }["Input.useSize[mergedSize]"]);
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size: mergedSize,
        disabled: mergedDisabled
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
    // ===================== Status =====================
    const { status: contextStatus, hasFeedback, feedbackIcon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    // ===================== Focus warning =====================
    const inputHasPrefixSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPrefixSuffix"])(props) || !!hasFeedback;
    const prevHasPrefixSuffix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(inputHasPrefixSuffix);
    /* eslint-disable react-hooks/rules-of-hooks */ if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input');
        // biome-ignore lint/correctness/useHookAtTopLevel: Development-only warning hook called conditionally
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Input.useEffect": ()=>{
                if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
                    var _inputRef_current;
                    ("TURBOPACK compile-time truthy", 1) ? warning(document.activeElement === ((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.input), 'usage', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ") : "TURBOPACK unreachable";
                }
                prevHasPrefixSuffix.current = inputHasPrefixSuffix;
            }
        }["Input.useEffect"], [
            inputHasPrefixSuffix
        ]);
    }
    /* eslint-enable */ // ===================== Remove Password value =====================
    const removePasswordTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef, true);
    const handleBlur = (e)=>{
        removePasswordTimeout();
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    const handleFocus = (e)=>{
        removePasswordTimeout();
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleChange = (e)=>{
        removePasswordTimeout();
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    const suffixNode = (hasFeedback || suffix) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, suffix, hasFeedback && feedbackIcon);
    const mergedAllowClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(allowClear !== null && allowClear !== void 0 ? allowClear : contextAllowClear);
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('input', customVariant, bordered);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, inputRef),
        prefixCls: prefixCls,
        autoComplete: contextAutoComplete,
        ...rest,
        disabled: mergedDisabled,
        onBlur: handleBlur,
        onFocus: handleFocus,
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        styles: mergedStyles,
        suffix: suffixNode,
        allowClear: mergedAllowClear,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, contextClassName, mergedClassNames.root),
        onChange: handleChange,
        addonBefore: addonBefore && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            form: true,
            space: true
        }, addonBefore),
        addonAfter: addonAfter && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$ContextIsolator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            form: true,
            space: true
        }, addonAfter),
        classNames: {
            ...mergedClassNames,
            input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-sm")]: mergedSize === 'small',
                ["".concat(prefixCls, "-lg")]: mergedSize === 'large',
                ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
            }, mergedClassNames.input, hashId),
            variant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-").concat(variant)]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus)),
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-affix-wrapper-sm")]: mergedSize === 'small',
                ["".concat(prefixCls, "-affix-wrapper-lg")]: mergedSize === 'large',
                ["".concat(prefixCls, "-affix-wrapper-rtl")]: direction === 'rtl'
            }, hashId),
            wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-group-rtl")]: direction === 'rtl'
            }, hashId),
            groupWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-group-wrapper-sm")]: mergedSize === 'small',
                ["".concat(prefixCls, "-group-wrapper-lg")]: mergedSize === 'large',
                ["".concat(prefixCls, "-group-wrapper-rtl")]: direction === 'rtl',
                ["".concat(prefixCls, "-group-wrapper-").concat(variant)]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback), hashId)
        }
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Input.displayName = 'Input';
}
const __TURBOPACK__default__export__ = Input;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/otp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
;
;
// =============================== OTP ================================
const genOTPStyle = (token)=>{
    const { componentCls, paddingXS } = token;
    return {
        [componentCls]: {
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            columnGap: paddingXS,
            ["".concat(componentCls, "-input-wrapper")]: {
                position: 'relative',
                ["".concat(componentCls, "-mask-icon")]: {
                    position: 'absolute',
                    zIndex: '1',
                    top: '50%',
                    right: '50%',
                    transform: 'translate(50%, -50%)',
                    pointerEvents: 'none'
                },
                ["".concat(componentCls, "-mask-input")]: {
                    color: 'transparent',
                    caretColor: token.colorText
                },
                ["".concat(componentCls, "-mask-input[type=number]::-webkit-inner-spin-button")]: {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                ["".concat(componentCls, "-mask-input[type=number]")]: {
                    '-moz-appearance': 'textfield'
                }
            },
            '&-rtl': {
                direction: 'rtl'
            },
            ["".concat(componentCls, "-input")]: {
                textAlign: 'center',
                paddingInline: token.paddingXXS
            },
            // ================= Size =================
            ["&".concat(componentCls, "-sm ").concat(componentCls, "-input")]: {
                paddingInline: token.calc(token.paddingXXS).div(2).equal()
            },
            ["&".concat(componentCls, "-lg ").concat(componentCls, "-input")]: {
                paddingInline: token.paddingXS
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'OTP'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return genOTPStyle(inputToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"]);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/OTP/OTPInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
"use client";
;
;
;
;
;
const OTPInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, value, onChange, onActiveChange, index, mask, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('otp');
    const maskValue = typeof mask === 'string' ? mask : value;
    // ========================== Ref ===========================
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "OTPInput.useImperativeHandle": ()=>inputRef.current
    }["OTPInput.useImperativeHandle"]);
    // ========================= Input ==========================
    const onInternalChange = (e)=>{
        onChange(index, e.target.value);
    };
    // ========================= Focus ==========================
    const syncSelection = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
            var _inputRef_current;
            const inputEle = (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.input;
            if (document.activeElement === inputEle && inputEle) {
                inputEle.select();
            }
        });
    };
    // ======================== Keyboard ========================
    const onInternalKeyDown = (event)=>{
        const { key, ctrlKey, metaKey } = event;
        if (key === 'ArrowLeft') {
            onActiveChange(index - 1);
        } else if (key === 'ArrowRight') {
            onActiveChange(index + 1);
        } else if (key === 'z' && (ctrlKey || metaKey)) {
            event.preventDefault();
        } else if (key === 'Backspace' && !value) {
            onActiveChange(index - 1);
        }
        syncSelection();
    };
    // ========================= Render =========================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-input-wrapper"),
        role: "presentation"
    }, mask && value !== '' && value !== undefined && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "".concat(prefixCls, "-mask-icon"),
        "aria-hidden": "true"
    }, maskValue), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        "aria-label": "OTP Input ".concat(index + 1),
        type: mask === true ? 'password' : 'text',
        ...restProps,
        ref: inputRef,
        value: value,
        onInput: onInternalChange,
        onFocus: syncSelection,
        onKeyDown: onInternalKeyDown,
        onMouseDown: syncSelection,
        onMouseUp: syncSelection,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, {
            ["".concat(prefixCls, "-mask-input")]: mask
        })
    }));
});
const __TURBOPACK__default__export__ = OTPInput;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/OTP/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$otp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/otp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$OTPInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/OTP/OTPInput.js [app-client] (ecmascript)");
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
function strToArr(str) {
    return (str || '').split('');
}
const Separator = (props)=>{
    const { index, prefixCls, separator, className: semanticClassName, style: semanticStyle } = props;
    const separatorNode = typeof separator === 'function' ? separator(index) : separator;
    if (!separatorNode) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-separator"), semanticClassName),
        style: semanticStyle
    }, separatorNode);
};
const OTP = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, length = 6, size: customSize, defaultValue, value, onChange, formatter, separator, variant, disabled, status: customStatus, autoFocus, mask, type, onInput, inputMode, classNames, styles, className, style, ...restProps } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Input.OTP');
        ("TURBOPACK compile-time truthy", 1) ? warning(!(typeof mask === 'string' && mask.length > 1), 'usage', '`mask` prop should be a single character.') : "TURBOPACK unreachable";
    }
    const { classNames: contextClassNames, styles: contextStyles, getPrefixCls, direction, style: contextStyle, className: contextClassName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('otp');
    const prefixCls = getPrefixCls('otp', customizePrefixCls);
    const mergedProps = {
        ...props,
        length
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
    const domAttrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restProps, {
        aria: true,
        data: true,
        attr: true
    });
    // ========================= Root =========================
    // Style
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$otp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    // ========================= Size =========================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "OTP.useSize[mergedSize]": (ctx)=>customSize !== null && customSize !== void 0 ? customSize : ctx
    }["OTP.useSize[mergedSize]"]);
    // ======================== Status ========================
    const formContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(formContext.status, customStatus);
    const proxyFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OTP.useMemo[proxyFormContext]": ()=>({
                ...formContext,
                status: mergedStatus,
                hasFeedback: false,
                feedbackIcon: null
            })
    }["OTP.useMemo[proxyFormContext]"], [
        formContext,
        mergedStatus
    ]);
    // ========================= Refs =========================
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "OTP.useImperativeHandle": ()=>({
                focus: ({
                    "OTP.useImperativeHandle": ()=>{
                        var _refs_current_;
                        (_refs_current_ = refs.current[0]) === null || _refs_current_ === void 0 ? void 0 : _refs_current_.focus();
                    }
                })["OTP.useImperativeHandle"],
                blur: ({
                    "OTP.useImperativeHandle": ()=>{
                        for(let i = 0; i < length; i += 1){
                            var _refs_current_i;
                            (_refs_current_i = refs.current[i]) === null || _refs_current_i === void 0 ? void 0 : _refs_current_i.blur();
                        }
                    }
                })["OTP.useImperativeHandle"],
                nativeElement: containerRef.current
            })
    }["OTP.useImperativeHandle"]);
    // ======================= Formatter ======================
    const internalFormatter = (txt)=>formatter ? formatter(txt) : txt;
    // ======================== Values ========================
    const [valueCells, setValueCells] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "OTP.useState": ()=>strToArr(internalFormatter(defaultValue || ''))
    }["OTP.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OTP.useEffect": ()=>{
            if (value !== undefined) {
                setValueCells(strToArr(value));
            }
        }
    }["OTP.useEffect"], [
        value
    ]);
    const triggerValueCellsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "OTP.useEvent[triggerValueCellsChange]": (nextValueCells)=>{
            setValueCells(nextValueCells);
            if (onInput) {
                onInput(nextValueCells);
            }
            // Trigger if all cells are filled
            if (onChange && nextValueCells.length === length && nextValueCells.every({
                "OTP.useEvent[triggerValueCellsChange]": (c)=>c
            }["OTP.useEvent[triggerValueCellsChange]"]) && nextValueCells.some({
                "OTP.useEvent[triggerValueCellsChange]": (c, index)=>valueCells[index] !== c
            }["OTP.useEvent[triggerValueCellsChange]"])) {
                onChange(nextValueCells.join(''));
            }
        }
    }["OTP.useEvent[triggerValueCellsChange]"]);
    const patchValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])({
        "OTP.useEvent[patchValue]": (index, txt)=>{
            let nextCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(valueCells);
            // Fill cells till index
            for(let i = 0; i < index; i += 1){
                if (!nextCells[i]) {
                    nextCells[i] = '';
                }
            }
            if (txt.length <= 1) {
                nextCells[index] = txt;
            } else {
                nextCells = nextCells.slice(0, index).concat(strToArr(txt));
            }
            nextCells = nextCells.slice(0, length);
            // Clean the last empty cell
            for(let i = nextCells.length - 1; i >= 0; i -= 1){
                if (nextCells[i]) {
                    break;
                }
                nextCells.pop();
            }
            // Format if needed
            const formattedValue = internalFormatter(nextCells.map({
                "OTP.useEvent[patchValue].formattedValue": (c)=>c || ' '
            }["OTP.useEvent[patchValue].formattedValue"]).join(''));
            nextCells = strToArr(formattedValue).map({
                "OTP.useEvent[patchValue]": (c, i)=>{
                    if (c === ' ' && !nextCells[i]) {
                        return nextCells[i];
                    }
                    return c;
                }
            }["OTP.useEvent[patchValue]"]);
            return nextCells;
        }
    }["OTP.useEvent[patchValue]"]);
    // ======================== Change ========================
    const onInputChange = (index, txt)=>{
        const nextCells = patchValue(index, txt);
        const nextIndex = Math.min(index + txt.length, length - 1);
        if (nextIndex !== index && nextCells[index] !== undefined) {
            var _refs_current_nextIndex;
            (_refs_current_nextIndex = refs.current[nextIndex]) === null || _refs_current_nextIndex === void 0 ? void 0 : _refs_current_nextIndex.focus();
        }
        triggerValueCellsChange(nextCells);
    };
    const onInputActiveChange = (nextIndex)=>{
        var _refs_current_nextIndex;
        (_refs_current_nextIndex = refs.current[nextIndex]) === null || _refs_current_nextIndex === void 0 ? void 0 : _refs_current_nextIndex.focus();
    };
    // ======================== Render ========================
    const inputSharedProps = {
        variant,
        disabled,
        status: mergedStatus,
        mask,
        type,
        inputMode
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...domAttrs,
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, prefixCls, {
            ["".concat(prefixCls, "-sm")]: mergedSize === 'small',
            ["".concat(prefixCls, "-lg")]: mergedSize === 'large',
            ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
        }, cssVarCls, hashId, contextClassName, mergedClassNames.root),
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        role: "group"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"].Provider, {
        value: proxyFormContext
    }, Array.from({
        length
    }).map((_, index)=>{
        const key = "otp-".concat(index);
        const singleValue = valueCells[index] || '';
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            key: key
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$OTPInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: (inputEle)=>{
                refs.current[index] = inputEle;
            },
            index: index,
            size: mergedSize,
            htmlSize: 1,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.input, "".concat(prefixCls, "-input")),
            style: mergedStyles.input,
            onChange: onInputChange,
            value: singleValue,
            onActiveChange: onInputActiveChange,
            autoFocus: index === 0 && autoFocus,
            ...inputSharedProps
        }), index < length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Separator, {
            separator: separator,
            index: index,
            prefixCls: prefixCls,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.separator),
            style: mergedStyles.separator
        }));
    })));
});
const __TURBOPACK__default__export__ = OTP;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/EyeInvisibleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EyeInvisibleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
                }
            }
        ]
    },
    "name": "eye-invisible",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EyeInvisibleOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/EyeInvisibleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const EyeInvisibleOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![eye-invisible](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yUTg4OS40NyAzNzUuMTEgODE2LjcgMzA1bC01MC44OCA1MC44OEM4MDcuMzEgMzk1LjUzIDg0My40NSA0NDcuNCA4NzQuNyA1MTIgNzkxLjUgNjg0LjIgNjczLjQgNzY2IDUxMiA3NjZxLTcyLjY3IDAtMTMzLjg3LTIyLjM4TDMyMyA3OTguNzVRNDA4IDgzOCA1MTIgODM4cTI4OC4zIDAgNDMwLjItMzAwLjNhNjAuMjkgNjAuMjkgMCAwMDAtNTEuNXptLTYzLjU3LTMyMC42NEw4MzYgMTIyLjg4YTggOCAwIDAwLTExLjMyIDBMNzE1LjMxIDIzMi4yUTYyNC44NiAxODYgNTEyIDE4NnEtMjg4LjMgMC00MzAuMiAzMDAuM2E2MC4zIDYwLjMgMCAwMDAgNTEuNXE1Ni42OSAxMTkuNCAxMzYuNSAxOTEuNDFMMTEyLjQ4IDgzNWE4IDggMCAwMDAgMTEuMzFMMTU1LjE3IDg4OWE4IDggMCAwMDExLjMxIDBsNzEyLjE1LTcxMi4xMmE4IDggMCAwMDAtMTEuMzJ6TTE0OS4zIDUxMkMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGM1NC41NCAwIDEwNC4xMyA5LjM2IDE0OS4xMiAyOC4zOWwtNzAuMyA3MC4zYTE3NiAxNzYgMCAwMC0yMzguMTMgMjM4LjEzbC04My40MiA4My40MkMyMjMuMSA2MzcuNDkgMTgzLjMgNTgyLjI4IDE0OS4zIDUxMnptMjQ2LjcgMGExMTIuMTEgMTEyLjExIDAgMDExNDYuMi0xMDYuNjlMNDAxLjMxIDU0Ni4yQTExMiAxMTIgMCAwMTM5NiA1MTJ6IiAvPjxwYXRoIGQ9Ik01MDggNjI0Yy0zLjQ2IDAtNi44Ny0uMTYtMTAuMjUtLjQ3bC01Mi44MiA1Mi44MmExNzYuMDkgMTc2LjA5IDAgMDAyMjcuNDItMjI3LjQybC01Mi44MiA1Mi44MmMuMzEgMy4zOC40NyA2Ljc5LjQ3IDEwLjI1YTExMS45NCAxMTEuOTQgMCAwMS0xMTIgMTEyeiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](EyeInvisibleOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EyeInvisibleOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var EyeOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                }
            }
        ]
    },
    "name": "eye",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = EyeOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const EyeOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![eye](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yQzg0Ny40IDI4Ni41IDcwNC4xIDE4NiA1MTIgMTg2Yy0xOTIuMiAwLTMzNS40IDEwMC41LTQzMC4yIDMwMC4zYTYwLjMgNjAuMyAwIDAwMCA1MS41QzE3Ni42IDczNy41IDMxOS45IDgzOCA1MTIgODM4YzE5Mi4yIDAgMzM1LjQtMTAwLjUgNDMwLjItMzAwLjMgNy43LTE2LjIgNy43LTM1IDAtNTEuNXpNNTEyIDc2NmMtMTYxLjMgMC0yNzkuNC04MS44LTM2Mi43LTI1NEMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGMxNjEuMyAwIDI3OS40IDgxLjggMzYyLjcgMjU0Qzc5MS41IDY4NC4yIDY3My40IDc2NiA1MTIgNzY2em0tNC00MzBjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em0wIDI4OGMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJzNTAuMS0xMTIgMTEyLTExMiAxMTIgNTAuMSAxMTIgMTEyLTUwLjEgMTEyLTExMiAxMTJ6IiAvPjwvc3ZnPg==) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](EyeOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'EyeOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Password.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript) <export default as omit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
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
const defaultIconRender = (visible)=>visible ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeInvisibleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const actionMap = {
    click: 'onClick',
    hover: 'onMouseOver'
};
const Password = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { disabled: customDisabled, action = 'click', visibilityToggle = true, iconRender = defaultIconRender, suffix } = props;
    // ===================== Disabled =====================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const visibilityControlled = typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Password.useState": ()=>visibilityControlled ? visibilityToggle.visible : false
    }["Password.useState"]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Password.useEffect": ()=>{
            if (visibilityControlled) {
                setVisible(visibilityToggle.visible);
            }
        }
    }["Password.useEffect"], [
        visibilityControlled,
        visibilityToggle
    ]);
    // Remove Password value
    const removePasswordTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$hooks$2f$useRemovePasswordTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(inputRef);
    const onVisibleChange = ()=>{
        if (mergedDisabled) {
            return;
        }
        if (visible) {
            removePasswordTimeout();
        }
        const nextVisible = !visible;
        setVisible(nextVisible);
        if (typeof visibilityToggle === 'object') {
            var _visibilityToggle_onVisibleChange;
            (_visibilityToggle_onVisibleChange = visibilityToggle.onVisibleChange) === null || _visibilityToggle_onVisibleChange === void 0 ? void 0 : _visibilityToggle_onVisibleChange.call(visibilityToggle, nextVisible);
        }
    };
    const getIcon = (prefixCls)=>{
        const iconTrigger = actionMap[action] || '';
        const icon = iconRender(visible);
        const iconProps = {
            [iconTrigger]: onVisibleChange,
            className: "".concat(prefixCls, "-icon"),
            key: 'passwordIcon',
            onMouseDown: (e)=>{
                // Prevent focused state lost
                // https://github.com/ant-design/ant-design/issues/15173
                e.preventDefault();
            },
            onMouseUp: (e)=>{
                // Prevent caret position change
                // https://github.com/ant-design/ant-design/issues/23524
                e.preventDefault();
            }
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](icon) ? icon : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, icon), iconProps);
    };
    const { className, prefixCls: customizePrefixCls, inputPrefixCls: customizeInputPrefixCls, size, ...restProps } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    const prefixCls = getPrefixCls('input-password', customizePrefixCls);
    const suffixIcon = visibilityToggle && getIcon(prefixCls);
    const inputClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, {
        ["".concat(prefixCls, "-").concat(size)]: !!size
    });
    const omittedProps = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(restProps, [
            'suffix',
            'iconRender',
            'visibilityToggle'
        ]),
        type: visible ? 'text' : 'password',
        className: inputClassName,
        prefixCls: inputPrefixCls,
        suffix: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, suffixIcon, suffix)
    };
    if (size) {
        omittedProps.size = size;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, inputRef),
        ...omittedProps
    });
});
if ("TURBOPACK compile-time truthy", 1) {
    Password.displayName = 'Input.Password';
}
const __TURBOPACK__default__export__ = Password;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var SearchOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                }
            }
        ]
    },
    "name": "search",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = SearchOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const SearchOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![search](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwOS42IDg1NC41TDY0OS45IDU5NC44QzY5MC4yIDU0Mi43IDcxMiA0NzkgNzEyIDQxMmMwLTgwLjItMzEuMy0xNTUuNC04Ny45LTIxMi4xLTU2LjYtNTYuNy0xMzItODcuOS0yMTIuMS04Ny45cy0xNTUuNSAzMS4zLTIxMi4xIDg3LjlDMTQzLjIgMjU2LjUgMTEyIDMzMS44IDExMiA0MTJjMCA4MC4xIDMxLjMgMTU1LjUgODcuOSAyMTIuMUMyNTYuNSA2ODAuOCAzMzEuOCA3MTIgNDEyIDcxMmM2NyAwIDEzMC42LTIxLjggMTgyLjctNjJsMjU5LjcgMjU5LjZhOC4yIDguMiAwIDAwMTEuNiAwbDQzLjYtNDMuNWE4LjIgOC4yIDAgMDAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiIC8+PC9zdmc+) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](SearchOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'SearchOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
;
const genSearchStyle = (token)=>{
    const { componentCls } = token;
    const btnCls = "".concat(componentCls, "-btn");
    return {
        [componentCls]: {
            width: '100%',
            // =========================== Button ===========================
            [btnCls]: {
                '&-filled': {
                    background: token.colorFillTertiary,
                    '&:not(:disabled)': {
                        '&:hover': {
                            background: token.colorFillSecondary
                        },
                        '&:active': {
                            background: token.colorFill
                        }
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'Search'
], (token)=>{
    return [
        genSearchStyle(token)
    ];
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/omit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/pickAttrs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/search.js [app-client] (ecmascript)");
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
const Search = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, inputPrefixCls: customizeInputPrefixCls, className, size: customizeSize, style, enterButton = false, addonAfter, loading, disabled, onSearch: customOnSearch, onChange: customOnChange, onCompositionStart, onCompositionEnd, variant, onPressEnter: customOnPressEnter, classNames, styles, hidden, ...restProps } = props;
    const { direction, getPrefixCls, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('inputSearch');
    const mergedProps = {
        ...props,
        enterButton
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
        button: {
            _default: 'root'
        }
    });
    const composedRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const prefixCls = getPrefixCls('input-search', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const { compactSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Search.useSize[size]": (ctx)=>{
            var _ref;
            return (_ref = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _ref !== void 0 ? _ref : ctx;
        }
    }["Search.useSize[size]"]);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const onChange = (e)=>{
        if ((e === null || e === void 0 ? void 0 : e.target) && e.type === 'click' && customOnSearch) {
            customOnSearch(e.target.value, e, {
                source: 'clear'
            });
        }
        customOnChange === null || customOnChange === void 0 ? void 0 : customOnChange(e);
    };
    const onMouseDown = (e)=>{
        var _inputRef_current;
        if (document.activeElement === ((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.input)) {
            e.preventDefault();
        }
    };
    const onSearch = (e)=>{
        if (customOnSearch) {
            var _inputRef_current_input, _inputRef_current;
            customOnSearch((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : (_inputRef_current_input = _inputRef_current.input) === null || _inputRef_current_input === void 0 ? void 0 : _inputRef_current_input.value, e, {
                source: 'input'
            });
        }
    };
    const onPressEnter = (e)=>{
        if (composedRef.current || loading) {
            return;
        }
        customOnPressEnter === null || customOnPressEnter === void 0 ? void 0 : customOnPressEnter(e);
        onSearch(e);
    };
    const searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : null;
    const btnPrefixCls = "".concat(prefixCls, "-btn");
    const btnClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(btnPrefixCls, {
        ["".concat(btnPrefixCls, "-").concat(variant)]: variant
    });
    let button;
    const enterButtonAsElement = enterButton || {};
    const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
    if (isAntdButton || enterButtonAsElement.type === 'button') {
        button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(enterButtonAsElement, {
            onMouseDown,
            onClick: (e)=>{
                var _enterButtonAsElement_props_onClick, _enterButtonAsElement_props;
                enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : (_enterButtonAsElement_props = enterButtonAsElement.props) === null || _enterButtonAsElement_props === void 0 ? void 0 : (_enterButtonAsElement_props_onClick = _enterButtonAsElement_props.onClick) === null || _enterButtonAsElement_props_onClick === void 0 ? void 0 : _enterButtonAsElement_props_onClick.call(_enterButtonAsElement_props, e);
                onSearch(e);
            },
            key: 'enterButton',
            ...isAntdButton ? {
                className: btnClassName,
                size
            } : {}
        });
    } else {
        button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            classNames: mergedClassNames.button,
            styles: mergedStyles.button,
            className: btnClassName,
            color: enterButton ? 'primary' : 'default',
            size: size,
            disabled: disabled,
            key: "enterButton",
            onMouseDown: onMouseDown,
            onClick: onSearch,
            loading: loading,
            icon: searchIcon,
            variant: variant === 'borderless' || variant === 'filled' || variant === 'underlined' ? 'text' : enterButton ? 'solid' : undefined
        }, enterButton);
    }
    if (addonAfter) {
        button = [
            button,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(addonAfter, {
                key: 'addonAfter'
            })
        ];
    }
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, cssVarCls, {
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
        ["".concat(prefixCls, "-").concat(size)]: !!size,
        ["".concat(prefixCls, "-with-button")]: !!enterButton
    }, className, hashId, mergedClassNames.root);
    const handleOnCompositionStart = (e)=>{
        composedRef.current = true;
        onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
    };
    const handleOnCompositionEnd = (e)=>{
        composedRef.current = false;
        onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
    };
    // ========================== Render ==========================
    // >>> Root Props
    const rootProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$pickAttrs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(restProps, {
        data: true
    });
    const inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...restProps,
        classNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedClassNames, [
            'button',
            'root'
        ]),
        styles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mergedStyles, [
            'button',
            'root'
        ]),
        prefixCls: inputPrefixCls,
        type: 'search',
        size,
        variant,
        onPressEnter,
        onCompositionStart: handleOnCompositionStart,
        onCompositionEnd: handleOnCompositionEnd,
        onChange,
        disabled
    }, Object.keys(rootProps));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: mergedClassName,
        style: {
            ...style,
            ...mergedStyles.root
        },
        ...rootProps,
        hidden: hidden
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(inputRef, ref),
        ...inputProps
    }), button);
});
if ("TURBOPACK compile-time truthy", 1) {
    Search.displayName = 'Search';
}
const __TURBOPACK__default__export__ = Search;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript) <export default as BaseInput>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/calculateNodeHeight.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */ __turbopack_context__.s([
    "calculateNodeStyling",
    ()=>calculateNodeStyling,
    "default",
    ()=>calculateAutoSizeStyle
]);
const HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
const SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space'
];
const computedStyleCache = {};
let hiddenTextarea;
function calculateNodeStyling(node) {
    let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    const style = window.getComputedStyle(node);
    const boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    const paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    const borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    const sizingStyle = SIZING_STYLE.map((name)=>"".concat(name, ":").concat(style.getPropertyValue(name))).join(';');
    const nodeInfo = {
        sizingStyle,
        paddingSize,
        borderSize,
        boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
    let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        hiddenTextarea.setAttribute('tab-index', '-1');
        hiddenTextarea.setAttribute('aria-hidden', 'true');
        // fix: A form field element should have an id or name attribute
        // A form field element has neither an id nor a name attribute. This might prevent the browser from correctly autofilling the form.
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
        hiddenTextarea.setAttribute('name', 'hiddenTextarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    const { paddingSize, borderSize, boxSizing, sizingStyle } = calculateNodeStyling(uiTextNode, useCache);
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    let minHeight = undefined;
    let maxHeight = undefined;
    let overflowY;
    let height = hiddenTextarea.scrollHeight;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height += borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height -= paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    const style = {
        height,
        overflowY,
        resize: 'none'
    };
    if (minHeight) {
        style.minHeight = minHeight;
    }
    if (maxHeight) {
        style.maxHeight = maxHeight;
    }
    return style;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/ResizableTextArea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$calculateNodeHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/calculateNodeHeight.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;
const ResizableTextArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, defaultValue, value, autoSize, onResize, className, style, disabled, onChange, // Test only
    onInternalAutoSize, ...restProps } = props;
    // =============================== Value ================================
    const [internalValue, setMergedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultValue, value);
    const mergedValue = internalValue !== null && internalValue !== void 0 ? internalValue : '';
    const onInternalChange = (event)=>{
        setMergedValue(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    // ================================ Ref =================================
    const textareaRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "ResizableTextArea.useImperativeHandle": ()=>({
                textArea: textareaRef.current
            })
    }["ResizableTextArea.useImperativeHandle"]);
    // ============================== AutoSize ==============================
    const [minRows, maxRows] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ResizableTextArea.useMemo": ()=>{
            if (autoSize && typeof autoSize === 'object') {
                return [
                    autoSize.minRows,
                    autoSize.maxRows
                ];
            }
            return [];
        }
    }["ResizableTextArea.useMemo"], [
        autoSize
    ]);
    const needAutoSize = !!autoSize;
    // =============================== Resize ===============================
    const [resizeState, setResizeState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](RESIZE_STABLE);
    const [autoSizeStyle, setAutoSizeStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const startResize = ()=>{
        setResizeState(RESIZE_START);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Change to trigger resize measure
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ResizableTextArea.useLayoutEffect": ()=>{
            if (needAutoSize) {
                startResize();
            }
        }
    }["ResizableTextArea.useLayoutEffect"], [
        value,
        minRows,
        maxRows,
        needAutoSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ResizableTextArea.useLayoutEffect": ()=>{
            if (resizeState === RESIZE_START) {
                setResizeState(RESIZE_MEASURING);
            } else if (resizeState === RESIZE_MEASURING) {
                const textareaStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$calculateNodeHeight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(textareaRef.current, false, minRows, maxRows);
                // Safari has bug that text will keep break line on text cut when it's prev is break line.
                // ZombieJ: This not often happen. So we just skip it.
                // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
                // const { value: tmpValue } = textareaRef.current;
                // textareaRef.current.value = '';
                // textareaRef.current.value = tmpValue;
                // if (document.activeElement === textareaRef.current) {
                //   textareaRef.current.scrollTop = scrollTop;
                //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
                // }
                setResizeState(RESIZE_STABLE);
                setAutoSizeStyle(textareaStyles);
            } else {
            // https://github.com/react-component/textarea/pull/23
            // Firefox has blink issue before but fixed in latest version.
            }
        }
    }["ResizableTextArea.useLayoutEffect"], [
        resizeState
    ]);
    // We lock resize trigger by raf to avoid Safari warning
    const resizeRafRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    const cleanRaf = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(resizeRafRef.current);
    };
    const onInternalResize = (size)=>{
        if (resizeState === RESIZE_STABLE) {
            onResize === null || onResize === void 0 ? void 0 : onResize(size);
            if (autoSize) {
                cleanRaf();
                resizeRafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>{
                    startResize();
                });
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ResizableTextArea.useEffect": ()=>cleanRaf
    }["ResizableTextArea.useEffect"], []);
    // =============================== Render ===============================
    const mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
    const mergedStyle = {
        ...style,
        ...mergedAutoSizeStyle
    };
    if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
        mergedStyle.overflowY = 'hidden';
        mergedStyle.overflowX = 'hidden';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onInternalResize,
        disabled: !(autoSize || onResize)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("textarea", _extends({}, restProps, {
        ref: textareaRef,
        style: mergedStyle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className, {
            ["".concat(prefixCls, "-disabled")]: disabled
        }),
        disabled: disabled,
        value: mergedValue,
        onChange: onInternalChange
    })));
});
const __TURBOPACK__default__export__ = ResizableTextArea;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/TextArea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseInput$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/BaseInput.js [app-client] (ecmascript) <export default as BaseInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/hooks/useCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/input/es/utils/commonUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/ResizableTextArea.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
const TextArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((param, ref)=>{
    let { defaultValue, value: customValue, onFocus, onBlur, onChange, allowClear, maxLength, onCompositionStart, onCompositionEnd, suffix, prefixCls = 'rc-textarea', showCount, count, className, style, disabled, hidden, classNames, styles, onResize, onClear, onPressEnter, readOnly, autoSize, onKeyDown, ...rest } = param;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultValue, customValue);
    const formatValue = value === undefined || value === null ? '' : String(value);
    const [focused, setFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const compositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const [textareaResized, setTextareaResized] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    // =============================== Ref ================================
    const holderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizableTextAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getTextArea = ()=>{
        var _resizableTextAreaRef_current;
        return (_resizableTextAreaRef_current = resizableTextAreaRef.current) === null || _resizableTextAreaRef_current === void 0 ? void 0 : _resizableTextAreaRef_current.textArea;
    };
    const focus = ()=>{
        getTextArea().focus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "TextArea.useImperativeHandle": ()=>{
            var _holderRef_current;
            return {
                resizableTextArea: resizableTextAreaRef.current,
                focus,
                blur: ({
                    "TextArea.useImperativeHandle": ()=>{
                        getTextArea().blur();
                    }
                })["TextArea.useImperativeHandle"],
                nativeElement: ((_holderRef_current = holderRef.current) === null || _holderRef_current === void 0 ? void 0 : _holderRef_current.nativeElement) || getTextArea()
            };
        }
    }["TextArea.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextArea.useEffect": ()=>{
            setFocused({
                "TextArea.useEffect": (prev)=>!disabled && prev
            }["TextArea.useEffect"]);
        }
    }["TextArea.useEffect"], [
        disabled
    ]);
    // =========================== Select Range ===========================
    const [selection, setSelection] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "TextArea.useEffect": ()=>{
            if (selection) {
                getTextArea().setSelectionRange(...selection);
            }
        }
    }["TextArea.useEffect"], [
        selection
    ]);
    // ============================== Count ===============================
    const countConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$hooks$2f$useCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(count, showCount);
    var _countConfig_max;
    const mergedMax = (_countConfig_max = countConfig.max) !== null && _countConfig_max !== void 0 ? _countConfig_max : maxLength;
    // Max length value
    const hasMaxLength = Number(mergedMax) > 0;
    const valueLength = countConfig.strategy(formatValue);
    const isOutOfRange = !!mergedMax && valueLength > mergedMax;
    // ============================== Change ==============================
    const triggerChange = (e, currentValue)=>{
        let cutValue = currentValue;
        if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
            cutValue = countConfig.exceedFormatter(currentValue, {
                max: countConfig.max
            });
            if (currentValue !== cutValue) {
                setSelection([
                    getTextArea().selectionStart || 0,
                    getTextArea().selectionEnd || 0
                ]);
            }
        }
        setValue(cutValue);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOnChange"])(e.currentTarget, e, onChange, cutValue);
    };
    // =========================== Value Update ===========================
    const onInternalCompositionStart = (e)=>{
        compositionRef.current = true;
        onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
    };
    const onInternalCompositionEnd = (e)=>{
        compositionRef.current = false;
        triggerChange(e, e.currentTarget.value);
        onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
    };
    const onInternalChange = (e)=>{
        triggerChange(e, e.target.value);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && onPressEnter && !e.nativeEvent.isComposing) {
            onPressEnter(e);
        }
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    };
    const handleFocus = (e)=>{
        setFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleBlur = (e)=>{
        setFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    // ============================== Reset ===============================
    const handleReset = (e)=>{
        setValue('');
        focus();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$utils$2f$commonUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOnChange"])(getTextArea(), e, onChange);
    };
    let suffixNode = suffix;
    let dataCount;
    if (countConfig.show) {
        if (countConfig.showFormatter) {
            dataCount = countConfig.showFormatter({
                value: formatValue,
                count: valueLength,
                maxLength: mergedMax
            });
        } else {
            dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : '');
        }
        suffixNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, suffixNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-data-count"), classNames === null || classNames === void 0 ? void 0 : classNames.count),
            style: styles === null || styles === void 0 ? void 0 : styles.count
        }, dataCount));
    }
    const handleResize = (size)=>{
        var _getTextArea;
        onResize === null || onResize === void 0 ? void 0 : onResize(size);
        if ((_getTextArea = getTextArea()) === null || _getTextArea === void 0 ? void 0 : _getTextArea.style.height) {
            setTextareaResized(true);
        }
    };
    const isPureTextArea = !autoSize && !showCount && !allowClear;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$input$2f$es$2f$BaseInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BaseInput$3e$__["BaseInput"], {
        ref: holderRef,
        value: formatValue,
        allowClear: allowClear,
        handleReset: handleReset,
        suffix: suffixNode,
        prefixCls: prefixCls,
        classNames: {
            ...classNames,
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames === null || classNames === void 0 ? void 0 : classNames.affixWrapper, {
                ["".concat(prefixCls, "-show-count")]: showCount,
                ["".concat(prefixCls, "-textarea-allow-clear")]: allowClear
            })
        },
        disabled: disabled,
        focused: focused,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(className, isOutOfRange && "".concat(prefixCls, "-out-of-range")),
        style: {
            ...style,
            ...textareaResized && !isPureTextArea ? {
                height: 'auto'
            } : {}
        },
        dataAttrs: {
            affixWrapper: {
                'data-count': typeof dataCount === 'string' ? dataCount : undefined
            }
        },
        hidden: hidden,
        readOnly: readOnly,
        onClear: onClear
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, rest, {
        autoSize: autoSize,
        maxLength: maxLength,
        onKeyDown: handleKeyDown,
        onChange: onInternalChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onCompositionStart: onInternalCompositionStart,
        onCompositionEnd: onInternalCompositionEnd,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames === null || classNames === void 0 ? void 0 : classNames.textarea),
        style: {
            resize: style === null || style === void 0 ? void 0 : style.resize,
            ...styles === null || styles === void 0 ? void 0 : styles.textarea
        },
        disabled: disabled,
        prefixCls: prefixCls,
        onResize: handleResize,
        ref: resizableTextAreaRef,
        readOnly: readOnly
    })));
});
const __TURBOPACK__default__export__ = TextArea;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/TextArea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$ResizableTextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/ResizableTextArea.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/textarea.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/token.js [app-client] (ecmascript)");
;
;
;
const genTextAreaStyle = (token)=>{
    const { componentCls, paddingLG } = token;
    const textareaPrefixCls = "".concat(componentCls, "-textarea");
    return {
        // Raw Textarea
        ["textarea".concat(componentCls)]: {
            maxWidth: '100%',
            // prevent textarea resize from coming out of its container
            height: 'auto',
            minHeight: token.controlHeight,
            lineHeight: token.lineHeight,
            verticalAlign: 'bottom',
            transition: "all ".concat(token.motionDurationSlow),
            resize: 'vertical',
            ["&".concat(componentCls, "-mouse-active")]: {
                transition: "all ".concat(token.motionDurationSlow, ", height 0s, width 0s")
            }
        },
        // Wrapper for resize
        ["".concat(componentCls, "-textarea-affix-wrapper-resize-dirty")]: {
            width: 'auto'
        },
        [textareaPrefixCls]: {
            position: 'relative',
            '&-show-count': {
                ["".concat(componentCls, "-data-count")]: {
                    position: 'absolute',
                    bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
                    insetInlineEnd: 0,
                    color: token.colorTextDescription,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none'
                }
            },
            ["\n        &-allow-clear > ".concat(componentCls, ",\n        &-affix-wrapper").concat(textareaPrefixCls, "-has-feedback ").concat(componentCls, "\n      ")]: {
                paddingInlineEnd: paddingLG
            },
            ["&-affix-wrapper".concat(componentCls, "-affix-wrapper")]: {
                padding: 0,
                ["> textarea".concat(componentCls)]: {
                    fontSize: 'inherit',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    minHeight: token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal(),
                    '&:focus': {
                        boxShadow: 'none !important'
                    }
                },
                ["".concat(componentCls, "-suffix")]: {
                    margin: 0,
                    '> *:not(:last-child)': {
                        marginInline: 0
                    },
                    // Clear Icon
                    ["".concat(componentCls, "-clear-icon")]: {
                        position: 'absolute',
                        insetInlineEnd: token.paddingInline,
                        insetBlockStart: token.paddingXS
                    },
                    // Feedback Icon
                    ["".concat(textareaPrefixCls, "-suffix")]: {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: token.paddingInline,
                        bottom: 0,
                        zIndex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        margin: 'auto',
                        pointerEvents: 'none'
                    }
                }
            },
            ["&-affix-wrapper".concat(componentCls, "-affix-wrapper-rtl")]: {
                ["".concat(componentCls, "-suffix")]: {
                    ["".concat(componentCls, "-data-count")]: {
                        direction: 'ltr',
                        insetInlineStart: 0
                    }
                }
            },
            ["&-affix-wrapper".concat(componentCls, "-affix-wrapper-sm")]: {
                ["".concat(componentCls, "-suffix")]: {
                    ["".concat(componentCls, "-clear-icon")]: {
                        insetInlineEnd: token.paddingInlineSM
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])([
    'Input',
    'TextArea'
], (token)=>{
    const inputToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInputToken"])(token));
    return genTextAreaStyle(inputToken);
}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$token$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initComponentToken"], {
    resetFont: false
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/textarea/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/getAllowClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/statusUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/DisabledContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/space/Compact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Dom/focus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/style/textarea.js [app-client] (ecmascript) <locals>");
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
const TextArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _props_count;
    const { prefixCls: customizePrefixCls, bordered = true, size: customizeSize, disabled: customDisabled, status: customStatus, allowClear, classNames, rootClassName, className, style, styles, variant: customVariant, showCount, onMouseDown, onResize, ...rest } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        const { deprecated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('TextArea');
        deprecated(!('bordered' in props), 'bordered', 'variant');
    }
    const { getPrefixCls, direction, allowClear: contextAllowClear, autoComplete: contextAutoComplete, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('textArea');
    // =================== Disabled ===================
    const disabled = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$DisabledContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    // ==================== Status ====================
    const { status: contextStatus, hasFeedback, feedbackIcon } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItemInputContext"]);
    const mergedStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedStatus"])(contextStatus, customStatus);
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        classNames
    ], [
        contextStyles,
        styles
    ], {
        props
    });
    // ===================== Ref ======================
    const innerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "TextArea.useImperativeHandle": ()=>{
            var _innerRef_current;
            return {
                resizableTextArea: (_innerRef_current = innerRef.current) === null || _innerRef_current === void 0 ? void 0 : _innerRef_current.resizableTextArea,
                focus: ({
                    "TextArea.useImperativeHandle": (option)=>{
                        var _innerRef_current_resizableTextArea, _innerRef_current;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Dom$2f$focus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerFocus"])((_innerRef_current = innerRef.current) === null || _innerRef_current === void 0 ? void 0 : (_innerRef_current_resizableTextArea = _innerRef_current.resizableTextArea) === null || _innerRef_current_resizableTextArea === void 0 ? void 0 : _innerRef_current_resizableTextArea.textArea, option);
                    }
                })["TextArea.useImperativeHandle"],
                blur: ({
                    "TextArea.useImperativeHandle": ()=>{
                        var _innerRef_current;
                        return (_innerRef_current = innerRef.current) === null || _innerRef_current === void 0 ? void 0 : _innerRef_current.blur();
                    }
                })["TextArea.useImperativeHandle"]
            };
        }
    }["TextArea.useImperativeHandle"]);
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    // ==================== Style =====================
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSharedStyle"])(prefixCls, rootClassName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$style$2f$textarea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(prefixCls, rootCls);
    // ================= Compact Item =================
    const { compactSize, compactItemClassnames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$space$2f$Compact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompactItemContext"])(prefixCls, direction);
    // ===================== Size =====================
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TextArea.useSize[mergedSize]": (ctx)=>{
            var _ref;
            return (_ref = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _ref !== void 0 ? _ref : ctx;
        }
    }["TextArea.useSize[mergedSize]"]);
    const [variant, enableVariantCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('textArea', customVariant, bordered);
    const mergedAllowClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$getAllowClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(allowClear !== null && allowClear !== void 0 ? allowClear : contextAllowClear);
    // ==================== Resize ====================
    // https://github.com/ant-design/ant-design/issues/51594
    const [isMouseDown, setIsMouseDown] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // When has wrapper, resize will make as dirty for `resize: both` style
    const [resizeDirty, setResizeDirty] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const onInternalMouseDown = (e)=>{
        setIsMouseDown(true);
        onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(e);
        const onMouseUp = ()=>{
            setIsMouseDown(false);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mouseup', onMouseUp);
    };
    const onInternalResize = (size)=>{
        onResize === null || onResize === void 0 ? void 0 : onResize(size);
        // Change to dirty since this maybe from the `resize: both` style
        if (isMouseDown && typeof getComputedStyle === 'function') {
            var _innerRef_current_nativeElement, _innerRef_current;
            const ele = (_innerRef_current = innerRef.current) === null || _innerRef_current === void 0 ? void 0 : (_innerRef_current_nativeElement = _innerRef_current.nativeElement) === null || _innerRef_current_nativeElement === void 0 ? void 0 : _innerRef_current_nativeElement.querySelector('textarea');
            if (ele && getComputedStyle(ele).resize === 'both') {
                setResizeDirty(true);
            }
        }
    };
    // ==================== Render ====================
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$textarea$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        autoComplete: contextAutoComplete,
        ...rest,
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        styles: mergedStyles,
        disabled: mergedDisabled,
        allowClear: mergedAllowClear,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(cssVarCls, rootCls, className, rootClassName, compactItemClassnames, contextClassName, mergedClassNames.root, // Only for wrapper
        {
            ["".concat(prefixCls, "-textarea-affix-wrapper-resize-dirty")]: resizeDirty
        }),
        classNames: {
            ...mergedClassNames,
            textarea: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-sm")]: mergedSize === 'small',
                ["".concat(prefixCls, "-lg")]: mergedSize === 'large'
            }, hashId, mergedClassNames.textarea, isMouseDown && "".concat(prefixCls, "-mouse-active")),
            variant: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
                ["".concat(prefixCls, "-").concat(variant)]: enableVariantCls
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$statusUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusClassNames"])(prefixCls, mergedStatus)),
            affixWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-textarea-affix-wrapper"), {
                ["".concat(prefixCls, "-affix-wrapper-rtl")]: direction === 'rtl',
                ["".concat(prefixCls, "-affix-wrapper-sm")]: mergedSize === 'small',
                ["".concat(prefixCls, "-affix-wrapper-lg")]: mergedSize === 'large',
                ["".concat(prefixCls, "-textarea-show-count")]: showCount || ((_props_count = props.count) === null || _props_count === void 0 ? void 0 : _props_count.show)
            }, hashId)
        },
        prefixCls: prefixCls,
        suffix: hasFeedback && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
            className: "".concat(prefixCls, "-textarea-suffix")
        }, feedbackIcon),
        showCount: showCount,
        ref: innerRef,
        onResize: onInternalResize,
        onMouseDown: onInternalMouseDown
    });
});
const __TURBOPACK__default__export__ = TextArea;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Input.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/OTP/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Password$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Password.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"];
Input.Group = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.Search = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.TextArea = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.Password = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$Password$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.OTP = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$OTP$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Input;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/input/index.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const Element = (props)=>{
    const { prefixCls, className, style, size, shape } = props;
    const sizeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-lg")]: size === 'large',
        ["".concat(prefixCls, "-sm")]: size === 'small'
    });
    const shapeCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
        ["".concat(prefixCls, "-circle")]: shape === 'circle',
        ["".concat(prefixCls, "-square")]: shape === 'square',
        ["".concat(prefixCls, "-round")]: shape === 'round'
    });
    const sizeStyle = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Element.useMemo[sizeStyle]": ()=>typeof size === 'number' ? {
                width: size,
                height: size,
                lineHeight: "".concat(size, "px")
            } : {}
    }["Element.useMemo[sizeStyle]"], [
        size
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, sizeCls, shapeCls, className),
        style: {
            ...sizeStyle,
            ...style
        }
    });
};
const __TURBOPACK__default__export__ = Element;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prepareComponentToken",
    ()=>prepareComponentToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs/es/util/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
const skeletonClsLoading = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]("ant-skeleton-loading", {
    '0%': {
        backgroundPosition: '100% 50%'
    },
    '100%': {
        backgroundPosition: '0 50%'
    }
});
const genSkeletonElementCommonSize = (size)=>({
        height: size,
        lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(size)
    });
const genSkeletonElementSize = (size)=>({
        width: size,
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonColor = (token)=>({
        background: token.skeletonLoadingBackground,
        backgroundSize: '400% 100%',
        animationName: skeletonClsLoading,
        animationDuration: token.skeletonLoadingMotionDuration,
        animationTimingFunction: 'ease',
        animationIterationCount: 'infinite'
    });
const genSkeletonElementInputSize = (size, calc)=>({
        width: calc(size).mul(5).equal(),
        minWidth: calc(size).mul(5).equal(),
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonElementAvatar = (token)=>{
    const { skeletonAvatarCls, gradientFromColor, controlHeight, controlHeightLG, controlHeightSM } = token;
    return {
        [skeletonAvatarCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            ...genSkeletonElementSize(controlHeight)
        },
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-circle")]: {
            borderRadius: '50%'
        },
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-lg")]: {
            ...genSkeletonElementSize(controlHeightLG)
        },
        ["".concat(skeletonAvatarCls).concat(skeletonAvatarCls, "-sm")]: {
            ...genSkeletonElementSize(controlHeightSM)
        }
    };
};
const genSkeletonElementInput = (token)=>{
    const { controlHeight, borderRadiusSM, skeletonInputCls, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return {
        [skeletonInputCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM,
            ...genSkeletonElementInputSize(controlHeight, calc)
        },
        ["".concat(skeletonInputCls, "-lg")]: {
            ...genSkeletonElementInputSize(controlHeightLG, calc)
        },
        ["".concat(skeletonInputCls, "-sm")]: {
            ...genSkeletonElementInputSize(controlHeightSM, calc)
        }
    };
};
const genSkeletonElementShape = (token)=>{
    const { gradientFromColor, borderRadiusSM, imageSizeBase, calc } = token;
    return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        background: gradientFromColor,
        borderRadius: borderRadiusSM,
        ...genSkeletonElementSize(calc(imageSizeBase).mul(2).equal())
    };
};
const genSkeletonElementNode = (token)=>{
    return {
        [token.skeletonNodeCls]: {
            ...genSkeletonElementShape(token)
        }
    };
};
const genSkeletonElementImage = (token)=>{
    const { skeletonImageCls, imageSizeBase, calc } = token;
    return {
        [skeletonImageCls]: {
            ...genSkeletonElementShape(token),
            ["".concat(skeletonImageCls, "-path")]: {
                fill: '#bfbfbf'
            },
            ["".concat(skeletonImageCls, "-svg")]: {
                ...genSkeletonElementSize(imageSizeBase),
                maxWidth: calc(imageSizeBase).mul(4).equal(),
                maxHeight: calc(imageSizeBase).mul(4).equal()
            },
            ["".concat(skeletonImageCls, "-svg").concat(skeletonImageCls, "-svg-circle")]: {
                borderRadius: '50%'
            }
        },
        ["".concat(skeletonImageCls).concat(skeletonImageCls, "-circle")]: {
            borderRadius: '50%'
        }
    };
};
const genSkeletonElementButtonShape = (token, size, buttonCls)=>{
    const { skeletonButtonCls } = token;
    return {
        ["".concat(buttonCls).concat(skeletonButtonCls, "-circle")]: {
            width: size,
            minWidth: size,
            borderRadius: '50%'
        },
        ["".concat(buttonCls).concat(skeletonButtonCls, "-round")]: {
            borderRadius: size
        }
    };
};
const genSkeletonElementButtonSize = (size, calc)=>({
        width: calc(size).mul(2).equal(),
        minWidth: calc(size).mul(2).equal(),
        ...genSkeletonElementCommonSize(size)
    });
const genSkeletonElementButton = (token)=>{
    const { borderRadiusSM, skeletonButtonCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, calc } = token;
    return {
        [skeletonButtonCls]: {
            display: 'inline-block',
            verticalAlign: 'top',
            background: gradientFromColor,
            borderRadius: borderRadiusSM,
            width: calc(controlHeight).mul(2).equal(),
            minWidth: calc(controlHeight).mul(2).equal(),
            ...genSkeletonElementButtonSize(controlHeight, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
        ["".concat(skeletonButtonCls, "-lg")]: {
            ...genSkeletonElementButtonSize(controlHeightLG, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeightLG, "".concat(skeletonButtonCls, "-lg")),
        ["".concat(skeletonButtonCls, "-sm")]: {
            ...genSkeletonElementButtonSize(controlHeightSM, calc)
        },
        ...genSkeletonElementButtonShape(token, controlHeightSM, "".concat(skeletonButtonCls, "-sm"))
    };
};
// =============================== Base ===============================
const genBaseStyle = (token)=>{
    const { componentCls, skeletonAvatarCls, skeletonTitleCls, skeletonParagraphCls, skeletonButtonCls, skeletonInputCls, skeletonNodeCls, skeletonImageCls, controlHeight, controlHeightLG, controlHeightSM, gradientFromColor, padding, marginSM, borderRadius, titleHeight, blockRadius, paragraphLiHeight, controlHeightXS, paragraphMarginTop } = token;
    return {
        [componentCls]: {
            display: 'table',
            width: '100%',
            ["".concat(componentCls, "-header")]: {
                display: 'table-cell',
                paddingInlineEnd: padding,
                verticalAlign: 'top',
                // Avatar
                [skeletonAvatarCls]: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: gradientFromColor,
                    ...genSkeletonElementSize(controlHeight)
                },
                ["".concat(skeletonAvatarCls, "-circle")]: {
                    borderRadius: '50%'
                },
                ["".concat(skeletonAvatarCls, "-lg")]: {
                    ...genSkeletonElementSize(controlHeightLG)
                },
                ["".concat(skeletonAvatarCls, "-sm")]: {
                    ...genSkeletonElementSize(controlHeightSM)
                }
            },
            ["".concat(componentCls, "-section")]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                // Title
                [skeletonTitleCls]: {
                    width: '100%',
                    height: titleHeight,
                    background: gradientFromColor,
                    borderRadius: blockRadius,
                    ["+ ".concat(skeletonParagraphCls)]: {
                        marginBlockStart: controlHeightSM
                    }
                },
                // paragraph
                [skeletonParagraphCls]: {
                    padding: 0,
                    '> li': {
                        width: '100%',
                        height: paragraphLiHeight,
                        listStyle: 'none',
                        background: gradientFromColor,
                        borderRadius: blockRadius,
                        '+ li': {
                            marginBlockStart: controlHeightXS
                        }
                    }
                },
                ["".concat(skeletonParagraphCls, "> li:last-child:not(:first-child):not(:nth-child(2))")]: {
                    width: '61%'
                }
            },
            ["&-round ".concat(componentCls, "-section")]: {
                ["".concat(skeletonTitleCls, ", ").concat(skeletonParagraphCls, " > li")]: {
                    borderRadius
                }
            }
        },
        ["".concat(componentCls, "-with-avatar ").concat(componentCls, "-section")]: {
            // Title
            [skeletonTitleCls]: {
                marginBlockStart: marginSM,
                ["+ ".concat(skeletonParagraphCls)]: {
                    marginBlockStart: paragraphMarginTop
                }
            }
        },
        // Skeleton with element
        ["".concat(componentCls).concat(componentCls, "-element")]: {
            display: 'inline-block',
            width: 'auto',
            ...genSkeletonElementButton(token),
            ...genSkeletonElementAvatar(token),
            ...genSkeletonElementInput(token),
            ...genSkeletonElementNode(token),
            ...genSkeletonElementImage(token)
        },
        // Skeleton Block Button, Input
        ["".concat(componentCls).concat(componentCls, "-block")]: {
            width: '100%',
            [skeletonButtonCls]: {
                width: '100%'
            },
            [skeletonInputCls]: {
                width: '100%'
            }
        },
        // With active animation
        ["".concat(componentCls).concat(componentCls, "-active")]: {
            ["\n        ".concat(skeletonTitleCls, ",\n        ").concat(skeletonParagraphCls, " > li,\n        ").concat(skeletonAvatarCls, ",\n        ").concat(skeletonButtonCls, ",\n        ").concat(skeletonInputCls, ",\n        ").concat(skeletonNodeCls, ",\n        ").concat(skeletonImageCls, "\n      ")]: {
                ...genSkeletonColor(token)
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { colorFillContent, colorFill } = token;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
        color: gradientFromColor,
        colorGradientEnd: gradientToColor,
        gradientFromColor,
        gradientToColor,
        titleHeight: token.controlHeight / 2,
        blockRadius: token.borderRadiusSM,
        paragraphMarginTop: token.marginLG + token.marginXXS,
        paragraphLiHeight: token.controlHeight / 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Skeleton', (token)=>{
    const { componentCls, calc } = token;
    const skeletonToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        skeletonAvatarCls: "".concat(componentCls, "-avatar"),
        skeletonTitleCls: "".concat(componentCls, "-title"),
        skeletonParagraphCls: "".concat(componentCls, "-paragraph"),
        skeletonButtonCls: "".concat(componentCls, "-button"),
        skeletonInputCls: "".concat(componentCls, "-input"),
        skeletonNodeCls: "".concat(componentCls, "-node"),
        skeletonImageCls: "".concat(componentCls, "-image"),
        imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
        borderRadius: 100,
        // Large number to make capsule shape
        skeletonLoadingBackground: "linear-gradient(90deg, ".concat(token.gradientFromColor, " 25%, ").concat(token.gradientToColor, " 37%, ").concat(token.gradientFromColor, " 63%)"),
        skeletonLoadingMotionDuration: '1.4s'
    });
    return genBaseStyle(skeletonToken);
}, prepareComponentToken, {
    deprecatedTokens: [
        [
            'color',
            'gradientFromColor'
        ],
        [
            'colorGradientEnd',
            'gradientToColor'
        ]
    ]
});
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SkeletonAvatar = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, active, style, styles, shape = 'circle', size = 'default', ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active
    }, classNames === null || classNames === void 0 ? void 0 : classNames.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles === null || styles === void 0 ? void 0 : styles.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: "".concat(prefixCls, "-avatar"),
        className: classNames === null || classNames === void 0 ? void 0 : classNames.content,
        style: {
            ...styles === null || styles === void 0 ? void 0 : styles.content,
            ...style
        },
        shape: shape,
        size: size,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonAvatar;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SkeletonButton = (props)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, classNames, active, style, styles, block = false, size = 'default', ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active,
        ["".concat(prefixCls, "-block")]: block
    }, classNames === null || classNames === void 0 ? void 0 : classNames.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles === null || styles === void 0 ? void 0 : styles.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: "".concat(prefixCls, "-button"),
        className: classNames === null || classNames === void 0 ? void 0 : classNames.content,
        style: {
            ...styles === null || styles === void 0 ? void 0 : styles.content,
            ...style
        },
        size: size,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonButton;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const SkeletonNode = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, internalClassName, style, styles, active, children } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active
    }, hashId, classNames === null || classNames === void 0 ? void 0 : classNames.root, className, rootClassName, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles === null || styles === void 0 ? void 0 : styles.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames === null || classNames === void 0 ? void 0 : classNames.content, internalClassName || "".concat(prefixCls, "-node")),
        style: {
            ...styles === null || styles === void 0 ? void 0 : styles.content,
            ...style
        }
    }, children));
};
const __TURBOPACK__default__export__ = SkeletonNode;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)");
"use client";
;
;
;
const path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
const SkeletonImage = (props)=>{
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', props.prefixCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        internalClassName: "".concat(prefixCls, "-image")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", {
        viewBox: "0 0 1098 1024",
        xmlns: "http://www.w3.org/2000/svg",
        className: "".concat(prefixCls, "-image-svg")
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", null, "Image placeholder"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        d: path,
        className: "".concat(prefixCls, "-image-path")
    })));
};
const __TURBOPACK__default__export__ = SkeletonImage;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const SkeletonInput = (props)=>{
    const { prefixCls: customizePrefixCls, className, classNames, rootClassName, active, block, style, styles, size = 'default', ...rest } = props;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-element"), {
        ["".concat(prefixCls, "-active")]: active,
        ["".concat(prefixCls, "-block")]: block
    }, classNames === null || classNames === void 0 ? void 0 : classNames.root, className, rootClassName, hashId, cssVarCls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: cls,
        style: styles === null || styles === void 0 ? void 0 : styles.root
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: "".concat(prefixCls, "-input"),
        className: classNames === null || classNames === void 0 ? void 0 : classNames.content,
        style: {
            ...styles === null || styles === void 0 ? void 0 : styles.content,
            ...style
        },
        size: size,
        ...rest
    }));
};
const __TURBOPACK__default__export__ = SkeletonInput;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Paragraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const getWidth = (index, props)=>{
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
        return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
        return width;
    }
    return undefined;
};
const Paragraph = (props)=>{
    const { prefixCls, className, style, rows = 0 } = props;
    const rowList = Array.from({
        length: rows
    }).map((_, index)=>/*#__PURE__*/ // eslint-disable-next-line react/no-array-index-key
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
            key: index,
            style: {
                width: getWidth(index, props)
            }
        }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className),
        style: style
    }, rowList);
};
const __TURBOPACK__default__export__ = Paragraph;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Title.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* eslint-disable jsx-a11y/heading-has-content */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
const Title = (param)=>{
    let { prefixCls, className, width, style } = param;
    return(/*#__PURE__*/ // biome-ignore lint/a11y/useHeadingContent: HOC here
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, className),
        style: {
            width,
            ...style
        }
    }));
};
const __TURBOPACK__default__export__ = Title;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Skeleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Paragraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Title.js [app-client] (ecmascript)");
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
function getComponentProps(prop) {
    if (prop && typeof prop === 'object') {
        return prop;
    }
    return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
        // Square avatar
        return {
            size: 'large',
            shape: 'square'
        };
    }
    return {
        size: 'large',
        shape: 'circle'
    };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
        return {
            width: '38%'
        };
    }
    if (hasAvatar && hasParagraph) {
        return {
            width: '50%'
        };
    }
    return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
    const basicProps = {};
    // Width
    if (!hasAvatar || !hasTitle) {
        basicProps.width = '61%';
    }
    // Rows
    if (!hasAvatar && hasTitle) {
        basicProps.rows = 3;
    } else {
        basicProps.rows = 2;
    }
    return basicProps;
}
// Tips: ctx.classNames.root < ctx.className < cpns.classNames.root < cpns.className < rootClassName
const Skeleton = (props)=>{
    const { prefixCls: customizePrefixCls, loading, className, rootClassName, classNames, style, styles, children, avatar = false, title = true, paragraph = true, active, round } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('skeleton');
    const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const mergedProps = {
        ...props,
        avatar,
        title,
        paragraph
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
    if (loading || !('loading' in props)) {
        const hasAvatar = !!avatar;
        const hasTitle = !!title;
        const hasParagraph = !!paragraph;
        // Avatar
        let avatarNode;
        if (hasAvatar) {
            const avatarProps = {
                className: mergedClassNames.avatar,
                prefixCls: "".concat(prefixCls, "-avatar"),
                ...getAvatarBasicProps(hasTitle, hasParagraph),
                ...getComponentProps(avatar),
                style: mergedStyles.avatar
            };
            // We direct use SkeletonElement as avatar in skeleton internal.
            avatarNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.header, "".concat(prefixCls, "-header")),
                style: mergedStyles.header
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...avatarProps
            }));
        }
        let contentNode;
        if (hasTitle || hasParagraph) {
            // Title
            let $title;
            if (hasTitle) {
                const titleProps = {
                    className: mergedClassNames.title,
                    prefixCls: "".concat(prefixCls, "-title"),
                    ...getTitleBasicProps(hasAvatar, hasParagraph),
                    ...getComponentProps(title),
                    style: mergedStyles.title
                };
                $title = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...titleProps
                });
            }
            // Paragraph
            let paragraphNode;
            if (hasParagraph) {
                const paragraphProps = {
                    className: mergedClassNames.paragraph,
                    prefixCls: "".concat(prefixCls, "-paragraph"),
                    ...getParagraphBasicProps(hasAvatar, hasTitle),
                    ...getComponentProps(paragraph),
                    style: mergedStyles.paragraph
                };
                paragraphNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Paragraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...paragraphProps
                });
            }
            contentNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(mergedClassNames.section, "".concat(prefixCls, "-section")),
                style: mergedStyles.section
            }, $title, paragraphNode);
        }
        const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, {
            ["".concat(prefixCls, "-with-avatar")]: hasAvatar,
            ["".concat(prefixCls, "-active")]: active,
            ["".concat(prefixCls, "-rtl")]: direction === 'rtl',
            ["".concat(prefixCls, "-round")]: round
        }, mergedClassNames.root, contextClassName, className, rootClassName, hashId, cssVarCls);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: cls,
            style: {
                ...mergedStyles.root,
                ...contextStyle,
                ...style
            }
        }, avatarNode, contentNode);
    }
    return children !== null && children !== void 0 ? children : null;
};
Skeleton.Button = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Input = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Image = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Skeleton.Node = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Skeleton.displayName = 'Skeleton';
}
const __TURBOPACK__default__export__ = Skeleton;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/Skeleton.js [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var CloseOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "fill-rule": "evenodd",
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                }
            }
        ]
    },
    "name": "close",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = CloseOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const CloseOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![close](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iNjQgNjQgODk2IDg5NiIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzk5Ljg2IDE2Ni4zMWMuMDIgMCAuMDQuMDIuMDguMDZsNTcuNjkgNTcuN2MuMDQuMDMuMDUuMDUuMDYuMDhhLjEyLjEyIDAgMDEwIC4wNmMwIC4wMy0uMDIuMDUtLjA2LjA5TDU2OS45MyA1MTJsMjg3LjcgMjg3LjdjLjA0LjA0LjA1LjA2LjA2LjA5YS4xMi4xMiAwIDAxMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMyAwLS4wNS0uMDItLjA5LS4wNkw1MTIgNTY5LjkzbC0yODcuNyAyODcuN2MtLjA0LjA0LS4wNi4wNS0uMDkuMDZhLjEyLjEyIDAgMDEtLjA3IDBjLS4wMiAwLS4wNC0uMDItLjA4LS4wNmwtNTcuNjktNTcuN2MtLjA0LS4wMy0uMDUtLjA1LS4wNi0uMDdhLjEyLjEyIDAgMDEwLS4wN2MwLS4wMy4wMi0uMDUuMDYtLjA5TDQ1NC4wNyA1MTJsLTI4Ny43LTI4Ny43Yy0uMDQtLjA0LS4wNS0uMDYtLjA2LS4wOWEuMTIuMTIgMCAwMTAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMDEuMDcgMGMuMDMgMCAuMDUuMDIuMDkuMDZMNTEyIDQ1NC4wN2wyODcuNy0yODcuN2MuMDQtLjA0LjA2LS4wNS4wOS0uMDZhLjEyLjEyIDAgMDEuMDcgMHoiIC8+PC9zdmc+) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](CloseOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'CloseOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var PlusOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"
                }
            }
        ]
    },
    "name": "plus",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = PlusOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const PlusOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![plus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ4MiAxNTJoNjBxOCAwIDggOHY3MDRxMCA4LTggOGgtNjBxLTggMC04LThWMTYwcTAtOCA4LTh6IiAvPjxwYXRoIGQ9Ik0xOTIgNDc0aDY3MnE4IDAgOCA4djYwcTAgOC04IDhIMTYwcS04IDAtOC04di02MHEwLTggOC04eiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](PlusOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'PlusOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/is-mobile/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = isMobile;
module.exports.isMobile = isMobile;
module.exports.default = isMobile;
const mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
const notMobileRE = /CrOS/;
const tabletRE = /android|ipad|playbook|silk/i;
function isMobile(opts) {
    if (!opts) opts = {};
    let ua = opts.ua;
    if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent;
    if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
        ua = ua.headers['user-agent'];
    }
    if (typeof ua !== 'string') return false;
    let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
    if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf('Macintosh') !== -1 && ua.indexOf('Safari') !== -1) {
        result = true;
    }
    return result;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/isMobile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$is$2d$mobile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/is-mobile/index.js [app-client] (ecmascript)");
;
let cached;
const __TURBOPACK__default__export__ = ()=>{
    if (typeof cached === 'undefined') {
        cached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$is$2d$mobile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    }
    return cached;
};
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useIndicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const useIndicator = (options)=>{
    const { activeTabOffset, horizontal, rtl, indicator = {} } = options;
    const { size, align = 'center' } = indicator;
    const [inkStyle, setInkStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const inkBarRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const getLength = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useIndicator.useCallback[getLength]": (origin)=>{
            if (typeof size === 'function') {
                return size(origin);
            }
            if (typeof size === 'number') {
                return size;
            }
            return origin;
        }
    }["useIndicator.useCallback[getLength]"], [
        size
    ]);
    // Delay set ink style to avoid remove tab blink
    function cleanInkBarRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cancel(inkBarRafRef.current);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIndicator.useEffect": ()=>{
            const newInkStyle = {};
            if (activeTabOffset) {
                if (horizontal) {
                    newInkStyle.width = getLength(activeTabOffset.width);
                    const key = rtl ? 'right' : 'left';
                    if (align === 'start') {
                        newInkStyle[key] = activeTabOffset[key];
                    }
                    if (align === 'center') {
                        newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
                        newInkStyle.transform = rtl ? 'translateX(50%)' : 'translateX(-50%)';
                    }
                    if (align === 'end') {
                        newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
                        newInkStyle.transform = 'translateX(-100%)';
                    }
                } else {
                    newInkStyle.height = getLength(activeTabOffset.height);
                    if (align === 'start') {
                        newInkStyle.top = activeTabOffset.top;
                    }
                    if (align === 'center') {
                        newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
                        newInkStyle.transform = 'translateY(-50%)';
                    }
                    if (align === 'end') {
                        newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
                        newInkStyle.transform = 'translateY(-100%)';
                    }
                }
            }
            cleanInkBarRaf();
            inkBarRafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                "useIndicator.useEffect": ()=>{
                    // Avoid jitter caused by tiny numerical differences
                    // fix https://github.com/ant-design/ant-design/issues/53378
                    const isEqual = inkStyle && newInkStyle && Object.keys(newInkStyle).every({
                        "useIndicator.useEffect": (key)=>{
                            const newValue = newInkStyle[key];
                            const oldValue = inkStyle[key];
                            return typeof newValue === 'number' && typeof oldValue === 'number' ? Math.round(newValue) === Math.round(oldValue) : newValue === oldValue;
                        }
                    }["useIndicator.useEffect"]);
                    if (!isEqual) {
                        setInkStyle(newInkStyle);
                    }
                }
            }["useIndicator.useEffect"]);
            return cleanInkBarRaf;
        }
    }["useIndicator.useEffect"], [
        JSON.stringify(activeTabOffset),
        horizontal,
        rtl,
        align,
        getLength
    ]);
    return {
        style: inkStyle
    };
};
const __TURBOPACK__default__export__ = useIndicator;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useOffsets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const DEFAULT_SIZE = {
    width: 0,
    height: 0,
    left: 0,
    top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOffsets.useMemo": ()=>{
            var _tabs_;
            const map = new Map();
            const lastOffset = tabSizes.get((_tabs_ = tabs[0]) === null || _tabs_ === void 0 ? void 0 : _tabs_.key) || DEFAULT_SIZE;
            const rightOffset = lastOffset.left + lastOffset.width;
            for(let i = 0; i < tabs.length; i += 1){
                const { key } = tabs[i];
                let data = tabSizes.get(key);
                // Reuse last one when not exist yet
                if (!data) {
                    var _tabs_1;
                    data = tabSizes.get((_tabs_1 = tabs[i - 1]) === null || _tabs_1 === void 0 ? void 0 : _tabs_1.key) || DEFAULT_SIZE;
                }
                const entity = map.get(key) || {
                    ...data
                };
                // Right
                entity.right = rightOffset - entity.left - entity.width;
                // Update entity
                map.set(key, entity);
            }
            return map;
        }
    }["useOffsets.useMemo"], [
        tabs.map({
            "useOffsets.useMemo": (tab)=>tab.key
        }["useOffsets.useMemo"]).join('_'),
        tabSizes,
        holderScrollWidth
    ]);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useSyncState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useSyncState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useSyncState(defaultState, onChange) {
    const stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](defaultState);
    const [, forceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    function setState(updater) {
        const newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
        if (newValue !== stateRef.current) {
            onChange(newValue, stateRef.current);
        }
        stateRef.current = newValue;
        forceUpdate({});
    }
    return [
        stateRef.current,
        setState
    ];
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useTouchMove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTouchMove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = 0.995 ** REFRESH_INTERVAL;
function useTouchMove(ref, onOffset) {
    const [touchPosition, setTouchPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [lastTimestamp, setLastTimestamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastTimeDiff, setLastTimeDiff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastOffset, setLastOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const motionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // ========================= Events =========================
    // >>> Touch events
    function onTouchStart(e) {
        const { screenX, screenY } = e.touches[0];
        setTouchPosition({
            x: screenX,
            y: screenY
        });
        window.clearInterval(motionRef.current);
    }
    function onTouchMove(e) {
        if (!touchPosition) return;
        // e.preventDefault();
        const { screenX, screenY } = e.touches[0];
        setTouchPosition({
            x: screenX,
            y: screenY
        });
        const offsetX = screenX - touchPosition.x;
        const offsetY = screenY - touchPosition.y;
        onOffset(offsetX, offsetY);
        const now = Date.now();
        setLastTimestamp(now);
        setLastTimeDiff(now - lastTimestamp);
        setLastOffset({
            x: offsetX,
            y: offsetY
        });
    }
    function onTouchEnd() {
        if (!touchPosition) return;
        setTouchPosition(null);
        setLastOffset(null);
        // Swipe if needed
        if (lastOffset) {
            const distanceX = lastOffset.x / lastTimeDiff;
            const distanceY = lastOffset.y / lastTimeDiff;
            const absX = Math.abs(distanceX);
            const absY = Math.abs(distanceY);
            // Skip swipe if low distance
            if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
            let currentX = distanceX;
            let currentY = distanceY;
            motionRef.current = window.setInterval(()=>{
                if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                    window.clearInterval(motionRef.current);
                    return;
                }
                currentX *= SPEED_OFF_MULTIPLE;
                currentY *= SPEED_OFF_MULTIPLE;
                onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
            }, REFRESH_INTERVAL);
        }
    }
    // >>> Wheel event
    const lastWheelDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    function onWheel(e) {
        const { deltaX, deltaY } = e;
        // Convert both to x & y since wheel only happened on PC
        let mixed = 0;
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
        if (absX === absY) {
            mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
        } else if (absX > absY) {
            mixed = deltaX;
            lastWheelDirectionRef.current = 'x';
        } else {
            mixed = deltaY;
            lastWheelDirectionRef.current = 'y';
        }
        if (onOffset(-mixed, -mixed)) {
            e.preventDefault();
        }
    }
    // ========================= Effect =========================
    const touchEventsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    touchEventsRef.current = {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        onWheel
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useTouchMove.useEffect": ()=>{
            function onProxyTouchStart(e) {
                touchEventsRef.current.onTouchStart(e);
            }
            function onProxyTouchMove(e) {
                touchEventsRef.current.onTouchMove(e);
            }
            function onProxyTouchEnd(e) {
                touchEventsRef.current.onTouchEnd(e);
            }
            function onProxyWheel(e) {
                touchEventsRef.current.onWheel(e);
            }
            document.addEventListener('touchmove', onProxyTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', onProxyTouchEnd, {
                passive: true
            });
            // No need to clean up since element removed
            ref.current.addEventListener('touchstart', onProxyTouchStart, {
                passive: true
            });
            ref.current.addEventListener('wheel', onProxyWheel, {
                passive: false
            });
            return ({
                "useTouchMove.useEffect": ()=>{
                    document.removeEventListener('touchmove', onProxyTouchMove);
                    document.removeEventListener('touchend', onProxyTouchEnd);
                }
            })["useTouchMove.useEffect"];
        }
    }["useTouchMove.useEffect"], []);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useUpdate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useUpdate,
    "useUpdateState",
    ()=>useUpdateState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useUpdate(callback) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const effectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = callback;
    // Trigger on `useLayoutEffect`
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutUpdateEffect"])({
        "useUpdate.useLayoutUpdateEffect": ()=>{
            var _callbackRef_current;
            (_callbackRef_current = callbackRef.current) === null || _callbackRef_current === void 0 ? void 0 : _callbackRef_current.call(callbackRef);
        }
    }["useUpdate.useLayoutUpdateEffect"], [
        count
    ]);
    // Trigger to update count
    return ()=>{
        if (effectRef.current !== count) {
            return;
        }
        effectRef.current += 1;
        setCount(effectRef.current);
    };
}
function useUpdateState(defaultState) {
    const batchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
    const flushUpdate = useUpdate({
        "useUpdateState.useUpdate[flushUpdate]": ()=>{
            let current = state.current;
            batchRef.current.forEach({
                "useUpdateState.useUpdate[flushUpdate]": (callback)=>{
                    current = callback(current);
                }
            }["useUpdateState.useUpdate[flushUpdate]"]);
            batchRef.current = [];
            state.current = current;
            forceUpdate({});
        }
    }["useUpdateState.useUpdate[flushUpdate]"]);
    function updater(callback) {
        batchRef.current.push(callback);
        flushUpdate();
    }
    return [
        state.current,
        updater
    ];
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useVisibleRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useVisibleRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const DEFAULT_SIZE = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, param) {
    let { tabs, tabPosition, rtl } = param;
    let charUnit;
    let position;
    let transformSize;
    if ([
        'top',
        'bottom'
    ].includes(tabPosition)) {
        charUnit = 'width';
        position = rtl ? 'right' : 'left';
        transformSize = Math.abs(transform);
    } else {
        charUnit = 'height';
        position = 'top';
        transformSize = -transform;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useVisibleRange.useMemo": ()=>{
            if (!tabs.length) {
                return [
                    0,
                    0
                ];
            }
            const len = tabs.length;
            let endIndex = len;
            for(let i = 0; i < len; i += 1){
                const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
                if (Math.floor(offset[position] + offset[charUnit]) > Math.floor(transformSize + visibleTabContentValue)) {
                    endIndex = i - 1;
                    break;
                }
            }
            let startIndex = 0;
            for(let i = len - 1; i >= 0; i -= 1){
                const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
                if (offset[position] < transformSize) {
                    startIndex = i + 1;
                    break;
                }
            }
            return startIndex > endIndex ? [
                0,
                -1
            ] : [
                startIndex,
                endIndex
            ];
        }
    }["useVisibleRange.useMemo"], [
        tabOffsets,
        visibleTabContentValue,
        tabContentSizeValue,
        addNodeSizeValue,
        operationNodeSizeValue,
        transformSize,
        tabPosition,
        tabs.map({
            "useVisibleRange.useMemo": (tab)=>tab.key
        }["useVisibleRange.useMemo"]).join('_'),
        rtl
    ]);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */ __turbopack_context__.s([
    "genDataNodeKey",
    ()=>genDataNodeKey,
    "getRemovable",
    ()=>getRemovable,
    "stringify",
    ()=>stringify
]);
function stringify(obj) {
    let tgt;
    if (obj instanceof Map) {
        tgt = {};
        obj.forEach((v, k)=>{
            tgt[k] = v;
        });
    } else {
        tgt = obj;
    }
    return JSON.stringify(tgt);
}
const RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
    return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function getRemovable(closable, closeIcon, editable, disabled) {
    if (// Only editable tabs can be removed
    !editable || // Tabs cannot be removed when disabled
    disabled || // closable is false
    closable === false || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    closable === undefined && (closeIcon === false || closeIcon === null)) {
        return false;
    }
    return true;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AddButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, editable, locale, style } = props;
    if (!editable || editable.showAdd === false) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
        ref: ref,
        type: "button",
        className: "".concat(prefixCls, "-nav-add"),
        style: style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
        onClick: (event)=>{
            editable.onEdit('add', {
                event
            });
        }
    }, editable.addIcon || '+');
});
const __TURBOPACK__default__export__ = AddButton;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/ExtraContent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ExtraContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { position, prefixCls, extra } = props;
    if (!extra) {
        return null;
    }
    let content;
    // Parse extra
    let assertExtra = {};
    if (typeof extra === 'object' && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](extra)) {
        assertExtra = extra;
    } else {
        assertExtra.right = extra;
    }
    if (position === 'right') {
        content = assertExtra.right;
    }
    if (position === 'left') {
        content = assertExtra.left;
    }
    return content ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "".concat(prefixCls, "-extra-content"),
        ref: ref
    }, content) : null;
});
if ("TURBOPACK compile-time truthy", 1) {
    ExtraContent.displayName = 'ExtraContent';
}
const __TURBOPACK__default__export__ = ExtraContent;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/hooks/useAccessibility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAccessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/raf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const { ESC, TAB } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function useAccessibility(param) {
    let { visible, triggerRef, onVisibleChange, autoFocus, overlayRef } = param;
    const focusMenuRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleCloseMenuAndReturnFocus = ()=>{
        if (visible) {
            var _triggerRef_current_focus, _triggerRef_current;
            (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : (_triggerRef_current_focus = _triggerRef_current.focus) === null || _triggerRef_current_focus === void 0 ? void 0 : _triggerRef_current_focus.call(_triggerRef_current);
            onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(false);
        }
    };
    const focusMenu = ()=>{
        var _overlayRef_current;
        if ((_overlayRef_current = overlayRef.current) === null || _overlayRef_current === void 0 ? void 0 : _overlayRef_current.focus) {
            overlayRef.current.focus();
            focusMenuRef.current = true;
            return true;
        }
        return false;
    };
    const handleKeyDown = (event)=>{
        switch(event.keyCode){
            case ESC:
                handleCloseMenuAndReturnFocus();
                break;
            case TAB:
                {
                    let focusResult = false;
                    if (!focusMenuRef.current) {
                        focusResult = focusMenu();
                    }
                    if (focusResult) {
                        event.preventDefault();
                    } else {
                        handleCloseMenuAndReturnFocus();
                    }
                    break;
                }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useAccessibility.useEffect": ()=>{
            if (visible) {
                window.addEventListener('keydown', handleKeyDown);
                if (autoFocus) {
                    // FIXME: hack with raf
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$raf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(focusMenu, 3);
                }
                return ({
                    "useAccessibility.useEffect": ()=>{
                        window.removeEventListener('keydown', handleKeyDown);
                        focusMenuRef.current = false;
                    }
                })["useAccessibility.useEffect"];
            }
            return ({
                "useAccessibility.useEffect": ()=>{
                    focusMenuRef.current = false;
                }
            })["useAccessibility.useEffect"];
        }
    }["useAccessibility.useEffect"], [
        visible
    ]); // eslint-disable-line react-hooks/exhaustive-deps
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/Overlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Overlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { overlay, arrow, prefixCls } = props;
    const overlayNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Overlay.useMemo[overlayNode]": ()=>{
            let overlayElement;
            if (typeof overlay === 'function') {
                overlayElement = overlay();
            } else {
                overlayElement = overlay;
            }
            return overlayElement;
        }
    }["Overlay.useMemo[overlayNode]"], [
        overlay
    ]);
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(overlayNode));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, arrow && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "".concat(prefixCls, "-arrow")
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(overlayNode, {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(overlayNode) ? composedRef : undefined
    }));
});
const __TURBOPACK__default__export__ = Overlay;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/placements.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
const targetOffset = [
    0,
    0
];
const placements = {
    topLeft: {
        points: [
            'bl',
            'tl'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset
    },
    top: {
        points: [
            'bc',
            'tc'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset
    },
    topRight: {
        points: [
            'br',
            'tr'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset
    },
    bottomLeft: {
        points: [
            'tl',
            'bl'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset
    },
    bottom: {
        points: [
            'tc',
            'bc'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset
    },
    bottomRight: {
        points: [
            'tr',
            'br'
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset
    }
};
const __TURBOPACK__default__export__ = placements;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/Dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/trigger/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/hooks/useAccessibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/Overlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/placements.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
function Dropdown(props, ref) {
    var _children_props;
    const { arrow = false, prefixCls = 'rc-dropdown', transitionName, animation, align, placement = 'bottomLeft', placements = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$placements$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], getPopupContainer, showAction, hideAction, overlayClassName, overlayStyle, visible, trigger = [
        'hover'
    ], autoFocus, overlay, children, onVisibleChange, ...otherProps } = props;
    const [triggerVisible, setTriggerVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState();
    const mergedVisible = 'visible' in props ? visible : triggerVisible;
    const mergedMotionName = animation ? "".concat(prefixCls, "-").concat(animation) : transitionName;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const overlayRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const childRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "Dropdown.useImperativeHandle": ()=>triggerRef.current
    }["Dropdown.useImperativeHandle"]);
    const handleVisibleChange = (newVisible)=>{
        setTriggerVisible(newVisible);
        onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(newVisible);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$hooks$2f$useAccessibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        visible: mergedVisible,
        triggerRef: childRef,
        onVisibleChange: handleVisibleChange,
        autoFocus,
        overlayRef
    });
    const onClick = (e)=>{
        const { onOverlayClick } = props;
        setTriggerVisible(false);
        if (onOverlayClick) {
            onOverlayClick(e);
        }
    };
    const getMenuElement = ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$Overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref: overlayRef,
            overlay: overlay,
            prefixCls: prefixCls,
            arrow: arrow
        });
    const getMenuElementOrLambda = ()=>{
        if (typeof overlay === 'function') {
            return getMenuElement;
        }
        return getMenuElement();
    };
    const getMinOverlayWidthMatchTrigger = ()=>{
        const { minOverlayWidthMatchTrigger, alignPoint } = props;
        if ('minOverlayWidthMatchTrigger' in props) {
            return minOverlayWidthMatchTrigger;
        }
        return !alignPoint;
    };
    const getOpenClassName = ()=>{
        const { openClassName } = props;
        if (openClassName !== undefined) {
            return openClassName;
        }
        return "".concat(prefixCls, "-open");
    };
    const childrenNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((_children_props = children.props) === null || _children_props === void 0 ? void 0 : _children_props.className, mergedVisible && getOpenClassName()),
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportRef"])(children) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRef"])(childRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeRef"])(children)) : undefined
    });
    let triggerHideAction = hideAction;
    if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
        triggerHideAction = [
            'click'
        ];
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$trigger$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
        builtinPlacements: placements
    }, otherProps, {
        prefixCls: prefixCls,
        ref: triggerRef,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(overlayClassName, {
            ["".concat(prefixCls, "-show-arrow")]: arrow
        }),
        popupStyle: overlayStyle,
        action: trigger,
        showAction: showAction,
        hideAction: triggerHideAction,
        popupPlacement: placement,
        popupAlign: align,
        popupMotion: {
            motionName: mergedMotionName
        },
        popupVisible: mergedVisible,
        stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
        popup: getMenuElementOrLambda(),
        onPopupVisibleChange: handleVisibleChange,
        onPopupClick: onClick,
        getPopupContainer: getPopupContainer
    }), childrenNode);
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(Dropdown);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/Dropdown.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/OperationNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/dropdown/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/menu/es/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/KeyCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
const OperationNode = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, id, tabs, locale, mobile, more: moreProps = {}, style, className, editable, tabBarGutter, rtl, removeAriaLabel, onTabClick, getPopupContainer, popupClassName, popupStyle } = props;
    // ======================== Dropdown ========================
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedKey, setSelectedKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { icon: moreIcon = 'More' } = moreProps;
    const popupId = "".concat(id, "-more-popup");
    const dropdownPrefix = "".concat(prefixCls, "-dropdown");
    const selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
    const dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
    function onRemoveTab(event, key) {
        event.preventDefault();
        event.stopPropagation();
        editable.onEdit('remove', {
            key,
            event
        });
    }
    const menu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onClick: (param)=>{
            let { key, domEvent } = param;
            onTabClick(key, domEvent);
            setOpen(false);
        },
        prefixCls: "".concat(dropdownPrefix, "-menu"),
        id: popupId,
        tabIndex: -1,
        role: "listbox",
        "aria-activedescendant": selectedItemId,
        selectedKeys: [
            selectedKey
        ],
        "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
    }, tabs.map((tab)=>{
        const { closable, disabled, closeIcon, key, label } = tab;
        const removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovable"])(closable, closeIcon, editable, disabled);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$menu$2f$es$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            key: key,
            id: "".concat(popupId, "-").concat(key),
            role: "option",
            "aria-controls": id && "".concat(id, "-panel-").concat(key),
            disabled: disabled
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, label), removable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
            type: "button",
            "aria-label": removeAriaLabel || 'remove',
            tabIndex: 0,
            className: "".concat(dropdownPrefix, "-menu-item-remove"),
            onClick: (e)=>{
                e.stopPropagation();
                onRemoveTab(e, key);
            }
        }, closeIcon || editable.removeIcon || '×'));
    }));
    function selectOffset(offset) {
        const enabledTabs = tabs.filter((tab)=>!tab.disabled);
        let selectedIndex = enabledTabs.findIndex((tab)=>tab.key === selectedKey) || 0;
        const len = enabledTabs.length;
        for(let i = 0; i < len; i += 1){
            selectedIndex = (selectedIndex + offset + len) % len;
            const tab = enabledTabs[selectedIndex];
            if (!tab.disabled) {
                setSelectedKey(tab.key);
                return;
            }
        }
    }
    function onKeyDown(e) {
        const { which } = e;
        if (!open) {
            if ([
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SPACE,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER
            ].includes(which)) {
                setOpen(true);
                e.preventDefault();
            }
            return;
        }
        switch(which){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].UP:
                selectOffset(-1);
                e.preventDefault();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DOWN:
                selectOffset(1);
                e.preventDefault();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ESC:
                setOpen(false);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SPACE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$KeyCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ENTER:
                if (selectedKey !== null) {
                    onTabClick(selectedKey, e);
                }
                break;
        }
    }
    // ========================= Effect =========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OperationNode.useEffect": ()=>{
            // We use query element here to avoid React strict warning
            const ele = document.getElementById(selectedItemId);
            if (ele === null || ele === void 0 ? void 0 : ele.scrollIntoView) {
                ele.scrollIntoView(false);
            }
        }
    }["OperationNode.useEffect"], [
        selectedItemId,
        selectedKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OperationNode.useEffect": ()=>{
            if (!open) {
                setSelectedKey(null);
            }
        }
    }["OperationNode.useEffect"], [
        open
    ]);
    // ========================= Render =========================
    const moreStyle = {
        marginInlineStart: tabBarGutter
    };
    if (!tabs.length) {
        moreStyle.visibility = 'hidden';
        moreStyle.order = 1;
    }
    const overlayClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, {
        ["".concat(dropdownPrefix, "-rtl")]: rtl
    });
    const moreNode = mobile ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$dropdown$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({
        prefixCls: dropdownPrefix,
        overlay: menu,
        visible: tabs.length ? open : false,
        onVisibleChange: setOpen,
        overlayClassName: overlayClassName,
        overlayStyle: popupStyle,
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        getPopupContainer: getPopupContainer
    }, moreProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
        type: "button",
        className: "".concat(prefixCls, "-nav-more"),
        style: moreStyle,
        "aria-haspopup": "listbox",
        "aria-controls": popupId,
        id: "".concat(id, "-more"),
        "aria-expanded": open,
        onKeyDown: onKeyDown
    }, moreIcon));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-nav-operations"), className),
        style: style,
        ref: ref
    }, moreNode, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        locale: locale,
        editable: editable
    }));
});
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](OperationNode, (_, next)=>// https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/TabNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/util.js [app-client] (ecmascript)");
;
;
;
const TabNode = (props)=>{
    const { prefixCls, id, active, focus, tab: { key, label, disabled, closeIcon, icon }, closable, renderWrapper, removeAriaLabel, editable, onClick, onFocus, onBlur, onKeyDown, onMouseDown, onMouseUp, style, className, tabCount, currentPosition } = props;
    const tabPrefix = "".concat(prefixCls, "-tab");
    const removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovable"])(closable, closeIcon, editable, disabled);
    function onInternalClick(e) {
        if (disabled) {
            return;
        }
        onClick(e);
    }
    function onRemoveTab(event) {
        event.preventDefault();
        event.stopPropagation();
        editable.onEdit('remove', {
            key,
            event
        });
    }
    const labelNode = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "TabNode.useMemo[labelNode]": ()=>icon && typeof label === 'string' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, label) : label
    }["TabNode.useMemo[labelNode]"], [
        label,
        icon
    ]);
    const btnRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TabNode.useEffect": ()=>{
            if (focus && btnRef.current) {
                btnRef.current.focus();
            }
        }
    }["TabNode.useEffect"], [
        focus
    ]);
    const node = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        key: key,
        "data-node-key": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genDataNodeKey"])(key),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(tabPrefix, className, {
            ["".concat(tabPrefix, "-with-remove")]: removable,
            ["".concat(tabPrefix, "-active")]: active,
            ["".concat(tabPrefix, "-disabled")]: disabled,
            ["".concat(tabPrefix, "-focus")]: focus
        }),
        style: style,
        onClick: onInternalClick
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: btnRef,
        role: "tab",
        "aria-selected": active,
        id: id && "".concat(id, "-tab-").concat(key),
        className: "".concat(tabPrefix, "-btn"),
        "aria-controls": id && "".concat(id, "-panel-").concat(key),
        "aria-disabled": disabled,
        tabIndex: disabled ? null : active ? 0 : -1,
        onClick: (e)=>{
            e.stopPropagation();
            onInternalClick(e);
        },
        onKeyDown: onKeyDown,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        onFocus: onFocus,
        onBlur: onBlur
    }, focus && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "aria-live": "polite",
        style: {
            width: 0,
            height: 0,
            position: 'absolute',
            overflow: 'hidden',
            opacity: 0
        }
    }, "Tab ".concat(currentPosition, " of ").concat(tabCount)), icon && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: "".concat(tabPrefix, "-icon")
    }, icon), label && labelNode), removable && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("button", {
        type: "button",
        "aria-label": removeAriaLabel || 'remove',
        tabIndex: active ? 0 : -1,
        className: "".concat(tabPrefix, "-remove"),
        onClick: (e)=>{
            e.stopPropagation();
            onRemoveTab(e);
        }
    }, closeIcon || editable.removeIcon || '×'));
    return renderWrapper ? renderWrapper(node) : node;
};
const __TURBOPACK__default__export__ = TabNode;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/resize-observer/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/ref.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useSyncState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useTouchMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useTouchMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useVisibleRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useVisibleRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/AddButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/ExtraContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$OperationNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/OperationNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$TabNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/TabNode.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
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
const getTabSize = (tab, containerRect)=>{
    // tabListRef
    const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = tab;
    const { width, height, left, top } = tab.getBoundingClientRect();
    // Use getBoundingClientRect to avoid decimal inaccuracy
    if (Math.abs(width - offsetWidth) < 1) {
        return [
            width,
            height,
            left - containerRect.left,
            top - containerRect.top
        ];
    }
    return [
        offsetWidth,
        offsetHeight,
        offsetLeft,
        offsetTop
    ];
};
const getSize = (refObj)=>{
    const { offsetWidth = 0, offsetHeight = 0 } = refObj.current || {};
    // Use getBoundingClientRect to avoid decimal inaccuracy
    if (refObj.current) {
        const { width, height } = refObj.current.getBoundingClientRect();
        if (Math.abs(width - offsetWidth) < 1) {
            return [
                width,
                height
            ];
        }
    }
    return [
        offsetWidth,
        offsetHeight
    ];
};
/**
 * Convert `SizeInfo` to unit value. Such as [123, 456] with `top` position get `123`
 */ const getUnitValue = (size, tabPositionTopOrBottom)=>{
    return size[tabPositionTopOrBottom ? 0 : 1];
};
const TabNavList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { className, style, id, animated, activeKey, rtl, extra, editable, locale, tabPosition, tabBarGutter, children, onTabClick, onTabScroll, indicator, classNames: tabsClassNames, styles } = props;
    const { prefixCls, tabs } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extraLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extraRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabsWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const operationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerAddButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
    const [transformLeft, setTransformLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, {
        "TabNavList.useSyncState": (next, prev)=>{
            if (tabPositionTopOrBottom && onTabScroll) {
                onTabScroll({
                    direction: next > prev ? 'left' : 'right'
                });
            }
        }
    }["TabNavList.useSyncState"]);
    const [transformTop, setTransformTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useSyncState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, {
        "TabNavList.useSyncState": (next, prev)=>{
            if (!tabPositionTopOrBottom && onTabScroll) {
                onTabScroll({
                    direction: next > prev ? 'top' : 'bottom'
                });
            }
        }
    }["TabNavList.useSyncState"]);
    const [containerExcludeExtraSize, setContainerExcludeExtraSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    const [tabContentSize, setTabContentSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    const [addSize, setAddSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    const [operationSize, setOperationSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    const [tabSizes, setTabSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateState"])(new Map());
    const tabOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabs, tabSizes, tabContentSize[0]);
    // ========================== Unit =========================
    const containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
    const tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
    const addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
    const operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
    const needScroll = Math.floor(containerExcludeExtraSizeValue) < Math.floor(tabContentSizeValue + addSizeValue);
    const visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;
    // ========================== Util =========================
    const operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
    let transformMin = 0;
    let transformMax = 0;
    if (!tabPositionTopOrBottom) {
        transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
        transformMax = 0;
    } else if (rtl) {
        transformMin = 0;
        transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
    } else {
        transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
        transformMax = 0;
    }
    function alignInRange(value) {
        if (value < transformMin) {
            return transformMin;
        }
        if (value > transformMax) {
            return transformMax;
        }
        return value;
    }
    // ========================= Mobile ========================
    const touchMovingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [lockAnimation, setLockAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    function doLockAnimation() {
        setLockAnimation(Date.now());
    }
    function clearTouchMoving() {
        if (touchMovingRef.current) {
            clearTimeout(touchMovingRef.current);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useTouchMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabsWrapperRef, {
        "TabNavList.useTouchMove": (offsetX, offsetY)=>{
            function doMove(setState, offset) {
                setState({
                    "TabNavList.useTouchMove.doMove": (value)=>{
                        const newValue = alignInRange(value + offset);
                        return newValue;
                    }
                }["TabNavList.useTouchMove.doMove"]);
            }
            // Skip scroll if place is enough
            if (!needScroll) {
                return false;
            }
            if (tabPositionTopOrBottom) {
                doMove(setTransformLeft, offsetX);
            } else {
                doMove(setTransformTop, offsetY);
            }
            clearTouchMoving();
            doLockAnimation();
            return true;
        }
    }["TabNavList.useTouchMove"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabNavList.useEffect": ()=>{
            clearTouchMoving();
            if (lockAnimation) {
                touchMovingRef.current = setTimeout({
                    "TabNavList.useEffect": ()=>{
                        setLockAnimation(0);
                    }
                }["TabNavList.useEffect"], 100);
            }
            return clearTouchMoving;
        }
    }["TabNavList.useEffect"], [
        lockAnimation
    ]);
    // ===================== Visible Range =====================
    // Render tab node & collect tab offset
    const [visibleStart, visibleEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useVisibleRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabOffsets, // Container
    visibleTabContentValue, // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop, // Tabs
    tabContentSizeValue, // Add
    addSizeValue, // Operation
    operationSizeValue, {
        ...props,
        tabs
    });
    // ========================= Scroll ========================
    const scrollToTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TabNavList.useEvent[scrollToTab]": function() {
            let key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : activeKey;
            const tabOffset = tabOffsets.get(key) || {
                width: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0
            };
            if (tabPositionTopOrBottom) {
                // ============ Align with top & bottom ============
                let newTransform = transformLeft;
                // RTL
                if (rtl) {
                    if (tabOffset.right < transformLeft) {
                        newTransform = tabOffset.right;
                    } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
                        newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
                    }
                } else if (tabOffset.left < -transformLeft) {
                    newTransform = -tabOffset.left;
                } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
                    newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
                }
                setTransformTop(0);
                setTransformLeft(alignInRange(newTransform));
            } else {
                // ============ Align with left & right ============
                let newTransform = transformTop;
                if (tabOffset.top < -transformTop) {
                    newTransform = -tabOffset.top;
                } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
                    newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
                }
                setTransformLeft(0);
                setTransformTop(alignInRange(newTransform));
            }
        }
    }["TabNavList.useEvent[scrollToTab]"]);
    // ========================= Focus =========================
    const [focusKey, setFocusKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [isMouse, setIsMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const enabledTabs = tabs.filter((tab)=>!tab.disabled).map((tab)=>tab.key);
    const onOffset = (offset)=>{
        const currentIndex = enabledTabs.indexOf(focusKey || activeKey);
        const len = enabledTabs.length;
        const nextIndex = (currentIndex + offset + len) % len;
        const newKey = enabledTabs[nextIndex];
        setFocusKey(newKey);
    };
    const handleRemoveTab = (removalTabKey, e)=>{
        const removeIndex = enabledTabs.indexOf(removalTabKey);
        const removeTab = tabs.find((tab)=>tab.key === removalTabKey);
        const removable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemovable"])(removeTab === null || removeTab === void 0 ? void 0 : removeTab.closable, removeTab === null || removeTab === void 0 ? void 0 : removeTab.closeIcon, editable, removeTab === null || removeTab === void 0 ? void 0 : removeTab.disabled);
        if (removable) {
            e.preventDefault();
            e.stopPropagation();
            editable.onEdit('remove', {
                key: removalTabKey,
                event: e
            });
            // when remove last tab, focus previous tab
            if (removeIndex === enabledTabs.length - 1) {
                onOffset(-1);
            } else {
                onOffset(1);
            }
        }
    };
    const handleMouseDown = (key, e)=>{
        setIsMouse(true);
        // Middle mouse button
        if (e.button === 1) {
            handleRemoveTab(key, e);
        }
    };
    const handleKeyDown = (e)=>{
        const { code } = e;
        const isRTL = rtl && tabPositionTopOrBottom;
        const firstEnabledTab = enabledTabs[0];
        const lastEnabledTab = enabledTabs[enabledTabs.length - 1];
        switch(code){
            // LEFT
            case 'ArrowLeft':
                {
                    if (tabPositionTopOrBottom) {
                        onOffset(isRTL ? 1 : -1);
                    }
                    break;
                }
            // RIGHT
            case 'ArrowRight':
                {
                    if (tabPositionTopOrBottom) {
                        onOffset(isRTL ? -1 : 1);
                    }
                    break;
                }
            // UP
            case 'ArrowUp':
                {
                    e.preventDefault();
                    if (!tabPositionTopOrBottom) {
                        onOffset(-1);
                    }
                    break;
                }
            // DOWN
            case 'ArrowDown':
                {
                    e.preventDefault();
                    if (!tabPositionTopOrBottom) {
                        onOffset(1);
                    }
                    break;
                }
            // HOME
            case 'Home':
                {
                    e.preventDefault();
                    setFocusKey(firstEnabledTab);
                    break;
                }
            // END
            case 'End':
                {
                    e.preventDefault();
                    setFocusKey(lastEnabledTab);
                    break;
                }
            // Enter & Space
            case 'Enter':
            case 'Space':
                {
                    e.preventDefault();
                    onTabClick(focusKey !== null && focusKey !== void 0 ? focusKey : activeKey, e);
                    break;
                }
            // Backspace
            case 'Backspace':
            case 'Delete':
                {
                    handleRemoveTab(focusKey, e);
                    break;
                }
        }
    };
    // ========================== Tab ==========================
    const tabNodeStyle = {};
    if (tabPositionTopOrBottom) {
        tabNodeStyle.marginInlineStart = tabBarGutter;
    } else {
        tabNodeStyle.marginTop = tabBarGutter;
    }
    const tabNodes = tabs.map((tab, i)=>{
        const { key } = tab;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$TabNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            prefixCls: prefixCls,
            key: key,
            tab: tab,
            className: tabsClassNames === null || tabsClassNames === void 0 ? void 0 : tabsClassNames.item,
            style: i === 0 ? styles === null || styles === void 0 ? void 0 : styles.item : {
                ...tabNodeStyle,
                ...styles === null || styles === void 0 ? void 0 : styles.item
            },
            closable: tab.closable,
            editable: editable,
            active: key === activeKey,
            focus: key === focusKey,
            renderWrapper: children,
            removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
            tabCount: enabledTabs.length,
            currentPosition: i + 1,
            onClick: (e)=>{
                onTabClick(key, e);
            },
            onKeyDown: handleKeyDown,
            onFocus: ()=>{
                if (!isMouse) {
                    setFocusKey(key);
                }
                scrollToTab(key);
                doLockAnimation();
                if (!tabsWrapperRef.current) {
                    return;
                }
                // Focus element will make scrollLeft change which we should reset back
                if (!rtl) {
                    tabsWrapperRef.current.scrollLeft = 0;
                }
                tabsWrapperRef.current.scrollTop = 0;
            },
            onBlur: ()=>{
                setFocusKey(undefined);
            },
            onMouseDown: (e)=>handleMouseDown(key, e),
            onMouseUp: ()=>{
                setIsMouse(false);
            }
        });
    });
    // Update buttons records
    const updateTabSizes = ()=>setTabSizes(()=>{
            var _tabListRef_current;
            const newSizes = new Map();
            const listRect = (_tabListRef_current = tabListRef.current) === null || _tabListRef_current === void 0 ? void 0 : _tabListRef_current.getBoundingClientRect();
            tabs.forEach((param)=>{
                let { key } = param;
                var _tabListRef_current;
                const btnNode = (_tabListRef_current = tabListRef.current) === null || _tabListRef_current === void 0 ? void 0 : _tabListRef_current.querySelector('[data-node-key="'.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genDataNodeKey"])(key), '"]'));
                if (btnNode) {
                    const [width, height, left, top] = getTabSize(btnNode, listRect);
                    newSizes.set(key, {
                        width,
                        height,
                        left,
                        top
                    });
                }
            });
            return newSizes;
        });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabNavList.useEffect": ()=>{
            updateTabSizes();
        }
    }["TabNavList.useEffect"], [
        tabs.map({
            "TabNavList.useEffect": (tab)=>tab.key
        }["TabNavList.useEffect"]).join('_')
    ]);
    const onListHolderResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "TabNavList.useUpdate[onListHolderResize]": ()=>{
            // Update wrapper records
            const containerSize = getSize(containerRef);
            const extraLeftSize = getSize(extraLeftRef);
            const extraRightSize = getSize(extraRightRef);
            setContainerExcludeExtraSize([
                containerSize[0] - extraLeftSize[0] - extraRightSize[0],
                containerSize[1] - extraLeftSize[1] - extraRightSize[1]
            ]);
            const newAddSize = getSize(innerAddButtonRef);
            setAddSize(newAddSize);
            const newOperationSize = getSize(operationsRef);
            setOperationSize(newOperationSize);
            // Which includes add button size
            const tabContentFullSize = getSize(tabListRef);
            setTabContentSize([
                tabContentFullSize[0] - newAddSize[0],
                tabContentFullSize[1] - newAddSize[1]
            ]);
            // Update buttons records
            updateTabSizes();
        }
    }["TabNavList.useUpdate[onListHolderResize]"]);
    // ======================== Dropdown =======================
    const startHiddenTabs = tabs.slice(0, visibleStart);
    const endHiddenTabs = tabs.slice(visibleEnd + 1);
    const hiddenTabs = [
        ...startHiddenTabs,
        ...endHiddenTabs
    ];
    // =================== Link & Operations ===================
    const activeTabOffset = tabOffsets.get(activeKey);
    const { style: indicatorStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        activeTabOffset,
        horizontal: tabPositionTopOrBottom,
        indicator,
        rtl
    });
    // ========================= Effect ========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabNavList.useEffect": ()=>{
            scrollToTab();
        }
    }["TabNavList.useEffect"], [
        activeKey,
        transformMin,
        transformMax,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(activeTabOffset),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(tabOffsets),
        tabPositionTopOrBottom
    ]);
    // Should recalculate when rtl changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabNavList.useEffect": ()=>{
            onListHolderResize();
        // eslint-disable-next-line
        }
    }["TabNavList.useEffect"], [
        rtl
    ]);
    // ========================= Render ========================
    const hasDropdown = !!hiddenTabs.length;
    const wrapPrefix = "".concat(prefixCls, "-nav-wrap");
    let pingLeft;
    let pingRight;
    let pingTop;
    let pingBottom;
    if (tabPositionTopOrBottom) {
        if (rtl) {
            pingRight = transformLeft > 0;
            pingLeft = transformLeft !== transformMax;
        } else {
            pingLeft = transformLeft < 0;
            pingRight = transformLeft !== transformMin;
        }
    } else {
        pingTop = transformTop < 0;
        pingBottom = transformTop !== transformMin;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$ref$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposeRef"])(ref, containerRef),
        role: "tablist",
        "aria-orientation": tabPositionTopOrBottom ? 'horizontal' : 'vertical',
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-nav"), className, tabsClassNames === null || tabsClassNames === void 0 ? void 0 : tabsClassNames.header),
        style: {
            ...styles === null || styles === void 0 ? void 0 : styles.header,
            ...style
        },
        onKeyDown: ()=>{
            // No need animation when use keyboard
            doLockAnimation();
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: extraLeftRef,
        position: "left",
        extra: extra,
        prefixCls: prefixCls
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(wrapPrefix, {
            ["".concat(wrapPrefix, "-ping-left")]: pingLeft,
            ["".concat(wrapPrefix, "-ping-right")]: pingRight,
            ["".concat(wrapPrefix, "-ping-top")]: pingTop,
            ["".concat(wrapPrefix, "-ping-bottom")]: pingBottom
        }),
        ref: tabsWrapperRef
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onListHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: tabListRef,
        className: "".concat(prefixCls, "-nav-list"),
        style: {
            transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
            transition: lockAnimation ? 'none' : undefined
        }
    }, tabNodes, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$AddButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: innerAddButtonRef,
        prefixCls: prefixCls,
        locale: locale,
        editable: editable,
        style: {
            ...tabNodes.length === 0 ? undefined : tabNodeStyle,
            visibility: hasDropdown ? 'hidden' : null
        }
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-ink-bar"), tabsClassNames === null || tabsClassNames === void 0 ? void 0 : tabsClassNames.indicator, {
            ["".concat(prefixCls, "-ink-bar-animated")]: animated.inkBar
        }),
        style: {
            ...indicatorStyle,
            ...styles === null || styles === void 0 ? void 0 : styles.indicator
        }
    }))))), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$OperationNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        ref: operationsRef,
        prefixCls: prefixCls,
        tabs: hiddenTabs,
        className: !hasDropdown && operationsHiddenClassName,
        popupStyle: styles === null || styles === void 0 ? void 0 : styles.popup,
        tabMoving: !!lockAnimation
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$ExtraContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: extraRightRef,
        position: "right",
        extra: extra,
        prefixCls: prefixCls
    })));
/* eslint-enable */ });
const __TURBOPACK__default__export__ = TabNavList;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/Wrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// zombieJ: To compatible with `renderTabBar` usage.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/index.js [app-client] (ecmascript)");
;
;
// We have to create a TabNavList components.
const TabNavListWrapper = (param)=>{
    let { renderTabBar, ...restProps } = param;
    if (renderTabBar) {
        return renderTabBar(restProps, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], restProps);
};
if ("TURBOPACK compile-time truthy", 1) {
    TabNavListWrapper.displayName = 'TabNavListWrapper';
}
const __TURBOPACK__default__export__ = TabNavListWrapper;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabPanelList/TabPane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const TabPane = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls, className, style, id, active, tabKey, children } = props;
    const hasContent = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 0;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        id: id && "".concat(id, "-panel-").concat(tabKey),
        role: "tabpanel",
        tabIndex: active && hasContent ? 0 : -1,
        "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
        "aria-hidden": !active,
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, active && "".concat(prefixCls, "-active"), className),
        ref: ref
    }, children);
});
if ("TURBOPACK compile-time truthy", 1) {
    TabPane.displayName = 'TabPane';
}
const __TURBOPACK__default__export__ = TabPane;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabPanelList/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/motion/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabPanelList/TabPane.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
const TabPanelList = (props)=>{
    const { id, activeKey, animated, tabPosition, destroyOnHidden, contentStyle, contentClassName } = props;
    const { prefixCls, tabs } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const tabPaneAnimated = animated.tabPane;
    const tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-content-holder"))
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), {
            ["".concat(prefixCls, "-content-animated")]: tabPaneAnimated
        })
    }, tabs.map((item)=>{
        const { key, forceRender, style: paneStyle, className: paneClassName, destroyOnHidden: itemDestroyOnHidden, ...restTabProps } = item;
        const active = key === activeKey;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$motion$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], _extends({
            key: key,
            visible: active,
            forceRender: forceRender,
            removeOnLeave: !!(destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : itemDestroyOnHidden),
            leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
        }, animated.tabPaneMotion), (param, ref)=>{
            let { style: motionStyle, className: motionClassName } = param;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabPanelList$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, restTabProps, {
                prefixCls: tabPanePrefixCls,
                id: id,
                tabKey: key,
                animated: tabPaneAnimated,
                active: active,
                style: {
                    ...contentStyle,
                    ...paneStyle,
                    ...motionStyle
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(contentClassName, paneClassName, motionClassName),
                ref: ref
            }));
        });
    })));
};
const __TURBOPACK__default__export__ = TabPanelList;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useAnimateConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAnimateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/warning.js [app-client] (ecmascript)");
;
function useAnimateConfig() {
    let animated = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        inkBar: true,
        tabPane: false
    };
    let mergedAnimated;
    if (animated === false) {
        mergedAnimated = {
            inkBar: false,
            tabPane: false
        };
    } else if (animated === true) {
        mergedAnimated = {
            inkBar: true,
            tabPane: false
        };
    } else {
        mergedAnimated = {
            inkBar: true,
            ...typeof animated === 'object' ? animated : {}
        };
    }
    // Enable tabPane animation if provide motion
    if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
        mergedAnimated.tabPane = true;
    }
    if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, '`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.');
        }
        mergedAnimated.tabPane = false;
    }
    return mergedAnimated;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/Tabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/hooks/useControlledState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/isMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$Wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabNavList/Wrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabPanelList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/TabPanelList/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/hooks/useAnimateConfig.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
;
;
;
;
;
;
/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */ // Used for accessibility
let uuid = 0;
const Tabs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    var _tabs_;
    const { id, prefixCls = 'rc-tabs', className, items, direction, activeKey, defaultActiveKey, editable, animated, tabPosition = 'top', tabBarGutter, tabBarStyle, tabBarExtraContent, locale, more, destroyOnHidden, renderTabBar, onChange, onTabClick, onTabScroll, getPopupContainer, popupClassName, indicator, classNames: tabsClassNames, styles, ...restProps } = props;
    const tabs = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Tabs.useMemo[tabs]": ()=>(items || []).filter({
                "Tabs.useMemo[tabs]": (item)=>item && typeof item === 'object' && 'key' in item
            }["Tabs.useMemo[tabs]"])
    }["Tabs.useMemo[tabs]"], [
        items
    ]);
    const rtl = direction === 'rtl';
    const mergedAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(animated);
    // ======================== Mobile ========================
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            // Only update on the client side
            setMobile((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
        }
    }["Tabs.useEffect"], []);
    // ====================== Active Key ======================
    const [mergedActiveKey, setMergedActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultActiveKey !== null && defaultActiveKey !== void 0 ? defaultActiveKey : (_tabs_ = tabs[0]) === null || _tabs_ === void 0 ? void 0 : _tabs_.key, activeKey);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Tabs.useState": ()=>tabs.findIndex({
                "Tabs.useState": (tab)=>tab.key === mergedActiveKey
            }["Tabs.useState"])
    }["Tabs.useState"]);
    // Reset active key if not exist anymore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            let newActiveIndex = tabs.findIndex({
                "Tabs.useEffect.newActiveIndex": (tab)=>tab.key === mergedActiveKey
            }["Tabs.useEffect.newActiveIndex"]);
            if (newActiveIndex === -1) {
                var _tabs_newActiveIndex;
                newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
                setMergedActiveKey((_tabs_newActiveIndex = tabs[newActiveIndex]) === null || _tabs_newActiveIndex === void 0 ? void 0 : _tabs_newActiveIndex.key);
            }
            setActiveIndex(newActiveIndex);
        }
    }["Tabs.useEffect"], [
        tabs.map({
            "Tabs.useEffect": (tab)=>tab.key
        }["Tabs.useEffect"]).join('_'),
        mergedActiveKey,
        activeIndex
    ]);
    // ===================== Accessibility ====================
    const [mergedId, setMergedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$hooks$2f$useControlledState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null, id);
    // Async generate id to avoid ssr mapping failed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabs.useEffect": ()=>{
            if (!id) {
                setMergedId("rc-tabs-".concat(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : uuid));
                uuid += 1;
            }
        }
    }["Tabs.useEffect"], []);
    // ======================== Events ========================
    function onInternalTabClick(key, e) {
        onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
        const isActiveChanged = key !== mergedActiveKey;
        setMergedActiveKey(key);
        if (isActiveChanged) {
            onChange === null || onChange === void 0 ? void 0 : onChange(key);
        }
    }
    // ======================== Render ========================
    const sharedProps = {
        id: mergedId,
        activeKey: mergedActiveKey,
        animated: mergedAnimated,
        tabPosition,
        rtl,
        mobile
    };
    const tabNavBarProps = {
        ...sharedProps,
        editable,
        locale,
        more,
        tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll,
        extra: tabBarExtraContent,
        style: tabBarStyle,
        getPopupContainer,
        popupClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, tabsClassNames === null || tabsClassNames === void 0 ? void 0 : tabsClassNames.popup),
        indicator,
        styles,
        classNames: tabsClassNames
    };
    const memoizedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Tabs.useMemo[memoizedValue]": ()=>{
            return {
                tabs,
                prefixCls
            };
        }
    }["Tabs.useMemo[memoizedValue]"], [
        tabs,
        prefixCls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: memoizedValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", _extends({
        ref: ref,
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), {
            ["".concat(prefixCls, "-mobile")]: mobile,
            ["".concat(prefixCls, "-editable")]: editable,
            ["".concat(prefixCls, "-rtl")]: rtl
        }, className)
    }, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabNavList$2f$Wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, tabNavBarProps, {
        renderTabBar: renderTabBar
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$TabPanelList$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({
        destroyOnHidden: destroyOnHidden
    }, sharedProps, {
        contentStyle: styles === null || styles === void 0 ? void 0 : styles.content,
        contentClassName: tabsClassNames === null || tabsClassNames === void 0 ? void 0 : tabsClassNames.content,
        animated: mergedAnimated
    }))));
});
if ("TURBOPACK compile-time truthy", 1) {
    Tabs.displayName = 'Tabs';
}
const __TURBOPACK__default__export__ = Tabs;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/Tabs.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/hooks/useAnimateConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAnimateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/motion.js [app-client] (ecmascript)");
;
const motion = {
    motionAppear: false,
    motionEnter: true,
    motionLeave: true
};
function useAnimateConfig(prefixCls) {
    let animated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        inkBar: true,
        tabPane: false
    };
    let mergedAnimated;
    if (animated === false) {
        mergedAnimated = {
            inkBar: false,
            tabPane: false
        };
    } else if (animated === true) {
        mergedAnimated = {
            inkBar: true,
            tabPane: true
        };
    } else {
        mergedAnimated = {
            inkBar: true,
            ...typeof animated === 'object' ? animated : {}
        };
    }
    if (mergedAnimated.tabPane) {
        mergedAnimated.tabPaneMotion = {
            ...motion,
            motionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionName"])(prefixCls, 'switch')
        };
    }
    return mergedAnimated;
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/hooks/useLegacyItems.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/util/es/Children/toArray.js [app-client] (ecmascript) <export default as toArray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
;
;
;
function filter(items) {
    return items.filter((item)=>item);
}
function useLegacyItems(items, children) {
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tabs');
        warning.deprecated(!children, 'Tabs.TabPane', 'items');
    }
    if (items) {
        return items.map((item)=>{
            var _item_destroyOnHidden;
            return {
                ...item,
                destroyOnHidden: (_item_destroyOnHidden = item.destroyOnHidden) !== null && _item_destroyOnHidden !== void 0 ? _item_destroyOnHidden : item.destroyInactiveTabPane
            };
        });
    }
    const childrenItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children).map((node)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](node)) {
            const { key, props } = node;
            const { tab, ...restProps } = props || {};
            const item = {
                key: String(key),
                ...restProps,
                label: tab
            };
            return item;
        }
        return null;
    });
    return filter(childrenItems);
}
const __TURBOPACK__default__export__ = useLegacyItems;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/style/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/style/motion/slide.js [app-client] (ecmascript)");
;
const genMotionStyle = (token)=>{
    const { componentCls, motionDurationSlow } = token;
    return [
        {
            [componentCls]: {
                ["".concat(componentCls, "-switch")]: {
                    '&-appear, &-enter': {
                        transition: 'none',
                        '&-start': {
                            opacity: 0
                        },
                        '&-active': {
                            opacity: 1,
                            transition: "opacity ".concat(motionDurationSlow)
                        }
                    },
                    '&-leave': {
                        position: 'absolute',
                        transition: 'none',
                        inset: 0,
                        '&-start': {
                            opacity: 1
                        },
                        '&-active': {
                            opacity: 0,
                            transition: "opacity ".concat(motionDurationSlow)
                        }
                    }
                }
            }
        },
        // Follow code may reuse in other components
        [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-up'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$motion$2f$slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initSlideMotion"])(token, 'slide-down')
        ]
    ];
};
const __TURBOPACK__default__export__ = genMotionStyle;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/style/motion.js [app-client] (ecmascript)");
;
;
;
;
const genCardStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardBg, cardGutter, colorBorderSecondary, itemSelectedColor } = token;
    return {
        ["".concat(componentCls, "-card")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                ["".concat(componentCls, "-tab")]: {
                    margin: 0,
                    padding: tabsCardPadding,
                    background: cardBg,
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
                    transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
                },
                ["".concat(componentCls, "-tab-active")]: {
                    color: itemSelectedColor,
                    background: token.colorBgContainer
                },
                ["".concat(componentCls, "-tab-focus:has(").concat(componentCls, "-tab-btn:focus-visible)")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token, -3),
                ["& ".concat(componentCls, "-tab").concat(componentCls, "-tab-focus ").concat(componentCls, "-tab-btn:focus-visible")]: {
                    outline: 'none'
                },
                ["".concat(componentCls, "-ink-bar")]: {
                    visibility: 'hidden'
                }
            },
            // ========================== Top & Bottom ==========================
            ["&".concat(componentCls, "-top, &").concat(componentCls, "-bottom")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab + ").concat(componentCls, "-tab")]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(cardGutter)
                        }
                    }
                }
            },
            ["&".concat(componentCls, "-top")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0")
                    },
                    ["".concat(componentCls, "-tab-active")]: {
                        borderBottomColor: token.colorBgContainer
                    }
                }
            },
            ["&".concat(componentCls, "-bottom")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG))
                    },
                    ["".concat(componentCls, "-tab-active")]: {
                        borderTopColor: token.colorBgContainer
                    }
                }
            },
            // ========================== Left & Right ==========================
            ["&".concat(componentCls, "-left, &").concat(componentCls, "-right")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab + ").concat(componentCls, "-tab")]: {
                        marginTop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(cardGutter)
                    }
                }
            },
            ["&".concat(componentCls, "-left")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG))
                        }
                    },
                    ["".concat(componentCls, "-tab-active")]: {
                        borderRightColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            },
            ["&".concat(componentCls, "-right")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0")
                        }
                    },
                    ["".concat(componentCls, "-tab-active")]: {
                        borderLeftColor: {
                            _skip_check_: true,
                            value: token.colorBgContainer
                        }
                    }
                }
            }
        }
    };
};
const genDropdownStyle = (token)=>{
    const { componentCls, itemHoverColor, dropdownEdgeChildVerticalPadding } = token;
    return {
        ["".concat(componentCls, "-dropdown")]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'absolute',
            top: -9999,
            left: {
                _skip_check_: true,
                value: -9999
            },
            zIndex: token.zIndexPopup,
            display: 'block',
            '&-hidden': {
                display: 'none'
            },
            ["".concat(componentCls, "-dropdown-menu")]: {
                maxHeight: token.tabsDropdownHeight,
                margin: 0,
                padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(dropdownEdgeChildVerticalPadding), " 0"),
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: {
                    _skip_check_: true,
                    value: 'left'
                },
                listStyleType: 'none',
                backgroundColor: token.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: token.borderRadiusLG,
                outline: 'none',
                boxShadow: token.boxShadowSecondary,
                '&-item': {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
                    display: 'flex',
                    alignItems: 'center',
                    minWidth: token.tabsDropdownWidth,
                    margin: 0,
                    padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingXXS), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.paddingSM)),
                    color: token.colorText,
                    fontWeight: 'normal',
                    fontSize: token.fontSize,
                    lineHeight: token.lineHeight,
                    cursor: 'pointer',
                    transition: "all ".concat(token.motionDurationSlow),
                    '> span': {
                        flex: 1,
                        whiteSpace: 'nowrap'
                    },
                    '&-remove': {
                        flex: 'none',
                        marginLeft: {
                            _skip_check_: true,
                            value: token.marginSM
                        },
                        color: token.colorIcon,
                        fontSize: token.fontSizeSM,
                        background: 'transparent',
                        border: 0,
                        cursor: 'pointer',
                        '&:hover': {
                            color: itemHoverColor
                        }
                    },
                    '&:hover': {
                        background: token.controlItemBgHover
                    },
                    '&-disabled': {
                        '&, &:hover': {
                            color: token.colorTextDisabled,
                            background: 'transparent',
                            cursor: 'not-allowed'
                        }
                    }
                }
            }
        }
    };
};
const genPositionStyle = (token)=>{
    const { componentCls, margin, colorBorderSecondary, horizontalMargin, verticalItemPadding, verticalItemMargin, calc } = token;
    return {
        // ========================== Top & Bottom ==========================
        ["".concat(componentCls, "-top, ").concat(componentCls, "-bottom")]: {
            flexDirection: 'column',
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                margin: horizontalMargin,
                '&::before': {
                    position: 'absolute',
                    right: {
                        _skip_check_: true,
                        value: 0
                    },
                    left: {
                        _skip_check_: true,
                        value: 0
                    },
                    borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
                    content: "''"
                },
                ["".concat(componentCls, "-ink-bar")]: {
                    height: token.lineWidthBold,
                    '&-animated': {
                        transition: "width ".concat(token.motionDurationSlow, ", left ").concat(token.motionDurationSlow, ",\n            right ").concat(token.motionDurationSlow)
                    }
                },
                ["".concat(componentCls, "-nav-wrap")]: {
                    '&::before, &::after': {
                        top: 0,
                        bottom: 0,
                        width: token.controlHeight
                    },
                    '&::before': {
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowLeft
                    },
                    '&::after': {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        boxShadow: token.boxShadowTabsOverflowRight
                    },
                    ["&".concat(componentCls, "-nav-wrap-ping-left::before")]: {
                        opacity: 1
                    },
                    ["&".concat(componentCls, "-nav-wrap-ping-right::after")]: {
                        opacity: 1
                    }
                }
            }
        },
        ["".concat(componentCls, "-top")]: {
            ["> ".concat(componentCls, "-nav,\n        > div > ").concat(componentCls, "-nav")]: {
                '&::before': {
                    bottom: 0
                },
                ["".concat(componentCls, "-ink-bar")]: {
                    bottom: 0
                }
            }
        },
        ["".concat(componentCls, "-bottom")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                order: 1,
                marginTop: margin,
                marginBottom: 0,
                '&::before': {
                    top: 0
                },
                ["".concat(componentCls, "-ink-bar")]: {
                    top: 0
                }
            },
            ["> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder")]: {
                order: 0
            }
        },
        // ========================== Left & Right ==========================
        ["".concat(componentCls, "-left, ").concat(componentCls, "-right")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                flexDirection: 'column',
                minWidth: calc(token.controlHeight).mul(1.25).equal(),
                // >>>>>>>>>>> Tab
                ["".concat(componentCls, "-tab")]: {
                    padding: verticalItemPadding,
                    textAlign: 'center'
                },
                ["".concat(componentCls, "-tab + ").concat(componentCls, "-tab")]: {
                    margin: verticalItemMargin
                },
                // >>>>>>>>>>> Nav
                ["".concat(componentCls, "-nav-wrap")]: {
                    flexDirection: 'column',
                    '&::before, &::after': {
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.controlHeight
                    },
                    '&::before': {
                        top: 0,
                        boxShadow: token.boxShadowTabsOverflowTop
                    },
                    '&::after': {
                        bottom: 0,
                        boxShadow: token.boxShadowTabsOverflowBottom
                    },
                    ["&".concat(componentCls, "-nav-wrap-ping-top::before")]: {
                        opacity: 1
                    },
                    ["&".concat(componentCls, "-nav-wrap-ping-bottom::after")]: {
                        opacity: 1
                    }
                },
                // >>>>>>>>>>> Ink Bar
                ["".concat(componentCls, "-ink-bar")]: {
                    width: token.lineWidthBold,
                    '&-animated': {
                        transition: "height ".concat(token.motionDurationSlow, ", top ").concat(token.motionDurationSlow)
                    }
                },
                ["".concat(componentCls, "-nav-list, ").concat(componentCls, "-nav-operations")]: {
                    flex: '1 0 auto',
                    // fix safari scroll problem
                    flexDirection: 'column'
                }
            }
        },
        ["".concat(componentCls, "-left")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                ["".concat(componentCls, "-ink-bar")]: {
                    right: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            ["> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder")]: {
                marginLeft: {
                    _skip_check_: true,
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.lineWidth).mul(-1).equal())
                },
                borderLeft: {
                    _skip_check_: true,
                    value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
                },
                ["> ".concat(componentCls, "-content > ").concat(componentCls, "-tabpane")]: {
                    paddingLeft: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        },
        ["".concat(componentCls, "-right")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                order: 1,
                ["".concat(componentCls, "-ink-bar")]: {
                    left: {
                        _skip_check_: true,
                        value: 0
                    }
                }
            },
            ["> ".concat(componentCls, "-content-holder, > div > ").concat(componentCls, "-content-holder")]: {
                order: 0,
                marginRight: {
                    _skip_check_: true,
                    value: calc(token.lineWidth).mul(-1).equal()
                },
                borderRight: {
                    _skip_check_: true,
                    value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorder)
                },
                ["> ".concat(componentCls, "-content > ").concat(componentCls, "-tabpane")]: {
                    paddingRight: {
                        _skip_check_: true,
                        value: token.paddingLG
                    }
                }
            }
        }
    };
};
const genSizeStyle = (token)=>{
    const { componentCls, cardPaddingSM, cardPaddingLG, cardHeightSM, cardHeightLG, horizontalItemPaddingSM, horizontalItemPaddingLG } = token;
    return {
        // >>>>> shared
        [componentCls]: {
            '&-small': {
                ["> ".concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        padding: horizontalItemPaddingSM,
                        fontSize: token.titleFontSizeSM
                    }
                }
            },
            '&-large': {
                ["> ".concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        padding: horizontalItemPaddingLG,
                        fontSize: token.titleFontSizeLG,
                        lineHeight: token.lineHeightLG
                    }
                }
            }
        },
        // >>>>> card
        ["".concat(componentCls, "-card")]: {
            // Small
            ["&".concat(componentCls, "-small")]: {
                ["> ".concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        padding: cardPaddingSM
                    },
                    ["".concat(componentCls, "-nav-add")]: {
                        minWidth: cardHeightSM,
                        minHeight: cardHeightSM
                    }
                },
                ["&".concat(componentCls, "-bottom")]: {
                    ["> ".concat(componentCls, "-nav ").concat(componentCls, "-tab")]: {
                        borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius))
                    }
                },
                ["&".concat(componentCls, "-top")]: {
                    ["> ".concat(componentCls, "-nav ").concat(componentCls, "-tab")]: {
                        borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " 0 0")
                    }
                },
                ["&".concat(componentCls, "-right")]: {
                    ["> ".concat(componentCls, "-nav ").concat(componentCls, "-tab")]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " 0")
                        }
                    }
                },
                ["&".concat(componentCls, "-left")]: {
                    ["> ".concat(componentCls, "-nav ").concat(componentCls, "-tab")]: {
                        borderRadius: {
                            _skip_check_: true,
                            value: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius), " 0 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadius))
                        }
                    }
                }
            },
            // Large
            ["&".concat(componentCls, "-large")]: {
                ["> ".concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab")]: {
                        padding: cardPaddingLG
                    },
                    ["".concat(componentCls, "-nav-add")]: {
                        minWidth: cardHeightLG,
                        minHeight: cardHeightLG
                    }
                }
            }
        }
    };
};
const genTabStyle = (token)=>{
    const { componentCls, itemActiveColor, itemHoverColor, iconCls, tabsHorizontalItemMargin, horizontalItemPadding, itemSelectedColor, itemColor } = token;
    const tabCls = "".concat(componentCls, "-tab");
    return {
        [tabCls]: {
            position: 'relative',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            padding: horizontalItemPadding,
            fontSize: token.titleFontSize,
            background: 'transparent',
            border: 0,
            outline: 'none',
            cursor: 'pointer',
            color: itemColor,
            '&-btn, &-remove': {
                '&:focus:not(:focus-visible), &:active': {
                    color: itemActiveColor
                }
            },
            '&-btn': {
                outline: 'none',
                transition: "all ".concat(token.motionDurationSlow),
                ["".concat(tabCls, "-icon:not(:last-child)")]: {
                    marginInlineEnd: token.marginSM
                }
            },
            '&-remove': {
                flex: 'none',
                lineHeight: 1,
                marginRight: {
                    _skip_check_: true,
                    value: token.calc(token.marginXXS).mul(-1).equal()
                },
                marginLeft: {
                    _skip_check_: true,
                    value: token.marginXS
                },
                color: token.colorIcon,
                fontSize: token.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: "all ".concat(token.motionDurationSlow),
                '&:hover': {
                    color: token.colorTextHeading
                },
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token)
            },
            '&:hover': {
                color: itemHoverColor
            },
            ["&".concat(tabCls, "-active ").concat(tabCls, "-btn")]: {
                color: itemSelectedColor
            },
            ["&".concat(tabCls, "-focus ").concat(tabCls, "-btn:focus-visible")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusOutline"])(token),
            ["&".concat(tabCls, "-disabled")]: {
                color: token.colorTextDisabled,
                cursor: 'not-allowed'
            },
            ["&".concat(tabCls, "-disabled ").concat(tabCls, "-btn, &").concat(tabCls, "-disabled ").concat(componentCls, "-remove")]: {
                '&:focus, &:active': {
                    color: token.colorTextDisabled
                }
            },
            ["& ".concat(tabCls, "-remove ").concat(iconCls)]: {
                margin: 0,
                verticalAlign: 'middle'
            },
            ["".concat(iconCls, ":not(:last-child)")]: {
                marginRight: {
                    _skip_check_: true,
                    value: token.marginSM
                }
            }
        },
        ["".concat(tabCls, " + ").concat(tabCls)]: {
            margin: {
                _skip_check_: true,
                value: tabsHorizontalItemMargin
            }
        }
    };
};
const genRtlStyle = (token)=>{
    const { componentCls, tabsHorizontalItemMarginRTL, iconCls, cardGutter, calc } = token;
    const rtlCls = "".concat(componentCls, "-rtl");
    return {
        [rtlCls]: {
            direction: 'rtl',
            ["".concat(componentCls, "-nav")]: {
                ["".concat(componentCls, "-tab")]: {
                    margin: {
                        _skip_check_: true,
                        value: tabsHorizontalItemMarginRTL
                    },
                    ["".concat(componentCls, "-tab:last-of-type")]: {
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    },
                    [iconCls]: {
                        marginRight: {
                            _skip_check_: true,
                            value: 0
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginSM)
                        }
                    },
                    ["".concat(componentCls, "-tab-remove")]: {
                        marginRight: {
                            _skip_check_: true,
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.marginXS)
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(calc(token.marginXXS).mul(-1).equal())
                        },
                        [iconCls]: {
                            margin: 0
                        }
                    }
                }
            },
            ["&".concat(componentCls, "-left")]: {
                ["> ".concat(componentCls, "-nav")]: {
                    order: 1
                },
                ["> ".concat(componentCls, "-content-holder")]: {
                    order: 0
                }
            },
            ["&".concat(componentCls, "-right")]: {
                ["> ".concat(componentCls, "-nav")]: {
                    order: 0
                },
                ["> ".concat(componentCls, "-content-holder")]: {
                    order: 1
                }
            },
            // ====================== Card ======================
            ["&".concat(componentCls, "-card").concat(componentCls, "-top, &").concat(componentCls, "-card").concat(componentCls, "-bottom")]: {
                ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                    ["".concat(componentCls, "-tab + ").concat(componentCls, "-tab")]: {
                        marginRight: {
                            _skip_check_: true,
                            value: cardGutter
                        },
                        marginLeft: {
                            _skip_check_: true,
                            value: 0
                        }
                    }
                }
            }
        },
        ["".concat(componentCls, "-dropdown-rtl")]: {
            direction: 'rtl'
        },
        ["".concat(componentCls, "-menu-item")]: {
            ["".concat(componentCls, "-dropdown-rtl")]: {
                textAlign: {
                    _skip_check_: true,
                    value: 'right'
                }
            }
        }
    };
};
const genTabsStyle = (token)=>{
    const { componentCls, tabsCardPadding, cardHeight, cardGutter, itemHoverColor, itemActiveColor, colorBorderSecondary } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            display: 'flex',
            // ========================== Navigation ==========================
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                position: 'relative',
                display: 'flex',
                flex: 'none',
                alignItems: 'center',
                ["".concat(componentCls, "-nav-wrap")]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'auto',
                    alignSelf: 'stretch',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transform: 'translate(0)',
                    // Fix chrome render bug
                    // >>>>> Ping shadow
                    '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: "opacity ".concat(token.motionDurationSlow),
                        content: "''",
                        pointerEvents: 'none'
                    }
                },
                ["".concat(componentCls, "-nav-list")]: {
                    position: 'relative',
                    display: 'flex',
                    transition: "opacity ".concat(token.motionDurationSlow)
                },
                // >>>>>>>> Operations
                ["".concat(componentCls, "-nav-operations")]: {
                    display: 'flex',
                    alignSelf: 'stretch'
                },
                ["".concat(componentCls, "-nav-operations-hidden")]: {
                    position: 'absolute',
                    visibility: 'hidden',
                    pointerEvents: 'none'
                },
                ["".concat(componentCls, "-nav-more")]: {
                    position: 'relative',
                    padding: tabsCardPadding,
                    background: 'transparent',
                    border: 0,
                    color: token.colorText,
                    '&::after': {
                        position: 'absolute',
                        right: {
                            _skip_check_: true,
                            value: 0
                        },
                        bottom: 0,
                        left: {
                            _skip_check_: true,
                            value: 0
                        },
                        height: token.calc(token.controlHeightLG).div(8).equal(),
                        transform: 'translateY(100%)',
                        content: "''"
                    }
                },
                ["".concat(componentCls, "-nav-add")]: {
                    minWidth: cardHeight,
                    minHeight: cardHeight,
                    marginLeft: {
                        _skip_check_: true,
                        value: cardGutter
                    },
                    background: 'transparent',
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
                    borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0"),
                    outline: 'none',
                    cursor: 'pointer',
                    color: token.colorText,
                    transition: "all ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut),
                    '&:hover': {
                        color: itemHoverColor
                    },
                    '&:active, &:focus:not(:focus-visible)': {
                        color: itemActiveColor
                    },
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token, -3)
                }
            },
            ["".concat(componentCls, "-extra-content")]: {
                flex: 'none'
            },
            // ============================ InkBar ============================
            ["".concat(componentCls, "-ink-bar")]: {
                position: 'absolute',
                background: token.inkBarColor,
                pointerEvents: 'none'
            },
            // ============================= Tabs =============================
            ...genTabStyle(token),
            // =========================== TabPanes ===========================
            ["".concat(componentCls, "-content")]: {
                position: 'relative',
                width: '100%'
            },
            ["".concat(componentCls, "-content-holder")]: {
                flex: 'auto',
                minWidth: 0,
                minHeight: 0
            },
            ["".concat(componentCls, "-tabpane")]: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genFocusStyle"])(token),
                '&-hidden': {
                    display: 'none'
                }
            }
        },
        ["".concat(componentCls, "-centered")]: {
            ["> ".concat(componentCls, "-nav, > div > ").concat(componentCls, "-nav")]: {
                ["".concat(componentCls, "-nav-wrap")]: {
                    ["&:not([class*='".concat(componentCls, "-nav-wrap-ping']) > ").concat(componentCls, "-nav-list")]: {
                        margin: 'auto'
                    }
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    const { cardHeight, cardHeightSM, cardHeightLG, controlHeight, controlHeightLG } = token;
    const mergedCardHeight = cardHeight || controlHeightLG;
    const mergedCardHeightSM = cardHeightSM || controlHeight;
    // `controlHeight` missing XL variable, so we directly write it here:
    const mergedCardHeightLG = cardHeightLG || controlHeightLG + 8;
    return {
        zIndexPopup: token.zIndexPopupBase + 50,
        cardBg: token.colorFillAlter,
        // We can not pass this as valid value,
        // Since `cardHeight` will lock nav add button height.
        cardHeight: mergedCardHeight,
        cardHeightSM: mergedCardHeightSM,
        cardHeightLG: mergedCardHeightLG,
        // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
        cardPadding: "".concat((mergedCardHeight - token.fontHeight) / 2 - token.lineWidth, "px ").concat(token.padding, "px"),
        cardPaddingSM: "".concat((mergedCardHeightSM - token.fontHeight) / 2 - token.lineWidth, "px ").concat(token.paddingXS, "px"),
        cardPaddingLG: "".concat((mergedCardHeightLG - token.fontHeightLG) / 2 - token.lineWidth, "px ").concat(token.padding, "px"),
        titleFontSize: token.fontSize,
        titleFontSizeLG: token.fontSizeLG,
        titleFontSizeSM: token.fontSize,
        inkBarColor: token.colorPrimary,
        horizontalMargin: "0 0 ".concat(token.margin, "px 0"),
        horizontalItemGutter: 32,
        // Fixed Value
        // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
        horizontalItemMargin: "",
        horizontalItemMarginRTL: "",
        horizontalItemPadding: "".concat(token.paddingSM, "px 0"),
        horizontalItemPaddingSM: "".concat(token.paddingXS, "px 0"),
        horizontalItemPaddingLG: "".concat(token.padding, "px 0"),
        verticalItemPadding: "".concat(token.paddingXS, "px ").concat(token.paddingLG, "px"),
        verticalItemMargin: "".concat(token.margin, "px 0 0 0"),
        itemColor: token.colorText,
        itemSelectedColor: token.colorPrimary,
        itemHoverColor: token.colorPrimaryHover,
        itemActiveColor: token.colorPrimaryActive,
        cardGutter: token.marginXXS / 2
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Tabs', (token)=>{
    const tabsToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
        tabsCardPadding: token.cardPadding,
        dropdownEdgeChildVerticalPadding: token.paddingXXS,
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: "0 0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.horizontalItemGutter)),
        tabsHorizontalItemMarginRTL: "0 0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.horizontalItemGutter))
    });
    return [
        genSizeStyle(tabsToken),
        genRtlStyle(tabsToken),
        genPositionStyle(tabsToken),
        genDropdownStyle(tabsToken),
        genCardStyle(tabsToken),
        genTabsStyle(tabsToken),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(tabsToken)
    ];
}, prepareComponentToken);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/TabPane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TabPane = ()=>null;
if ("TURBOPACK compile-time truthy", 1) {
    TabPane.displayName = 'DeprecatedTabPane';
}
const __TURBOPACK__default__export__ = TabPane;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/CloseOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@rc-component/tabs/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/hooks/useAnimateConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useLegacyItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/hooks/useLegacyItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/TabPane.js [app-client] (ecmascript)");
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
const InternalTabs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    var _tabs_indicator, _tabs_indicator1, _mergedClassNames_popup, _tabs_more;
    const { type, className, rootClassName, size: customSize, onEdit, hideAdd, centered, addIcon, removeIcon, moreIcon, more, popupClassName, children, items, animated, style, indicatorSize, indicator, classNames, styles, destroyInactiveTabPane, destroyOnHidden, tabPlacement, tabPosition, ...restProps } = props;
    const { prefixCls: customizePrefixCls } = restProps;
    const { getPrefixCls, direction, getPopupContainer, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('tabs');
    const { tabs } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefixCls = getPrefixCls('tabs', customizePrefixCls);
    const rootCls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useCSSVarCls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, rootCls);
    const tabsRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "InternalTabs.useImperativeHandle": ()=>({
                nativeElement: tabsRef.current
            })
    }["InternalTabs.useImperativeHandle"]);
    let editable;
    if (type === 'editable-card') {
        var _ref;
        editable = {
            onEdit: (editType, param)=>{
                let { key, event } = param;
                onEdit === null || onEdit === void 0 ? void 0 : onEdit(editType === 'add' ? event : key, editType);
            },
            removeIcon: (_ref = removeIcon !== null && removeIcon !== void 0 ? removeIcon : tabs === null || tabs === void 0 ? void 0 : tabs.removeIcon) !== null && _ref !== void 0 ? _ref : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CloseOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            addIcon: (addIcon !== null && addIcon !== void 0 ? addIcon : tabs === null || tabs === void 0 ? void 0 : tabs.addIcon) || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            showAdd: hideAdd !== true
        };
    }
    const rootPrefixCls = getPrefixCls();
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Tabs');
        [
            [
                'popupClassName',
                'classNames.popup'
            ],
            [
                'tabPosition',
                'tabPlacement'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
        ("TURBOPACK compile-time truthy", 1) ? warning(!('onPrevClick' in props) && !('onNextClick' in props), 'breaking', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.') : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? warning(!(indicatorSize || (tabs === null || tabs === void 0 ? void 0 : tabs.indicatorSize)), 'deprecated', '`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.') : "TURBOPACK unreachable";
        warning.deprecated(!('destroyInactiveTabPane' in props || (items === null || items === void 0 ? void 0 : items.some((item)=>'destroyInactiveTabPane' in item))), 'destroyInactiveTabPane', 'destroyOnHidden');
    }
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customSize);
    const mergedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useLegacyItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(items, children);
    const mergedAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$hooks$2f$useAnimateConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, animated);
    var _indicator_align, _indicator_size, _ref1, _ref2;
    const mergedIndicator = {
        align: (_indicator_align = indicator === null || indicator === void 0 ? void 0 : indicator.align) !== null && _indicator_align !== void 0 ? _indicator_align : tabs === null || tabs === void 0 ? void 0 : (_tabs_indicator = tabs.indicator) === null || _tabs_indicator === void 0 ? void 0 : _tabs_indicator.align,
        size: (_ref2 = (_ref1 = (_indicator_size = indicator === null || indicator === void 0 ? void 0 : indicator.size) !== null && _indicator_size !== void 0 ? _indicator_size : indicatorSize) !== null && _ref1 !== void 0 ? _ref1 : tabs === null || tabs === void 0 ? void 0 : (_tabs_indicator1 = tabs.indicator) === null || _tabs_indicator1 === void 0 ? void 0 : _tabs_indicator1.size) !== null && _ref2 !== void 0 ? _ref2 : tabs === null || tabs === void 0 ? void 0 : tabs.indicatorSize
    };
    const mergedPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InternalTabs.useMemo[mergedPlacement]": ()=>{
            var _ref;
            const placement = (_ref = tabPlacement !== null && tabPlacement !== void 0 ? tabPlacement : tabPosition) !== null && _ref !== void 0 ? _ref : undefined;
            const isRTL = direction === 'rtl';
            switch(placement){
                case 'start':
                    return isRTL ? 'right' : 'left';
                case 'end':
                    return isRTL ? 'left' : 'right';
                default:
                    return placement;
            }
        }
    }["InternalTabs.useMemo[mergedPlacement]"], [
        tabPlacement,
        tabPosition,
        direction
    ]);
    // =========== Merged Props for Semantic ===========
    const mergedProps = {
        ...props,
        size,
        tabPlacement: mergedPlacement,
        items: mergedItems
    };
    // ========================= Style ==========================
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
        }
    });
    var _tabs_more_icon, _ref3, _ref4;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$tabs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: tabsRef,
        direction: direction,
        getPopupContainer: getPopupContainer,
        ...restProps,
        items: mergedItems,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            ["".concat(prefixCls, "-").concat(size)]: size,
            ["".concat(prefixCls, "-card")]: [
                'card',
                'editable-card'
            ].includes(type),
            ["".concat(prefixCls, "-editable-card")]: type === 'editable-card',
            ["".concat(prefixCls, "-centered")]: centered
        }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls, rootCls),
        classNames: {
            ...mergedClassNames,
            popup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(popupClassName, hashId, cssVarCls, rootCls, (_mergedClassNames_popup = mergedClassNames.popup) === null || _mergedClassNames_popup === void 0 ? void 0 : _mergedClassNames_popup.root)
        },
        styles: mergedStyles,
        style: {
            ...mergedStyles.root,
            ...contextStyle,
            ...style
        },
        editable: editable,
        more: {
            icon: (_ref4 = (_ref3 = (_tabs_more_icon = tabs === null || tabs === void 0 ? void 0 : (_tabs_more = tabs.more) === null || _tabs_more === void 0 ? void 0 : _tabs_more.icon) !== null && _tabs_more_icon !== void 0 ? _tabs_more_icon : tabs === null || tabs === void 0 ? void 0 : tabs.moreIcon) !== null && _ref3 !== void 0 ? _ref3 : moreIcon) !== null && _ref4 !== void 0 ? _ref4 : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EllipsisOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
            transitionName: "".concat(rootPrefixCls, "-slide-up"),
            ...more
        },
        prefixCls: prefixCls,
        animated: mergedAnimated,
        indicator: mergedIndicator,
        destroyOnHidden: destroyOnHidden !== null && destroyOnHidden !== void 0 ? destroyOnHidden : destroyInactiveTabPane,
        tabPosition: mergedPlacement
    });
});
const Tabs = InternalTabs;
Tabs.TabPane = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$TabPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Tabs.displayName = 'Tabs';
}
const __TURBOPACK__default__export__ = Tabs;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Grid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
const Grid = (param)=>{
    let { prefixCls, className, hoverable = true, ...props } = param;
    const { getPrefixCls } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigContext"]);
    const prefix = getPrefixCls('card', prefixCls);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefix, "-grid"), className, {
        ["".concat(prefix, "-grid-hoverable")]: hoverable
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...props,
        className: classString
    });
};
const __TURBOPACK__default__export__ = Grid;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/style/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
// ============================== Styles ==============================
// ============================== Head ==============================
const genCardHeadStyle = (token)=>{
    const { antCls, componentCls, headerHeight, headerPadding, tabsMarginBottom } = token;
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: headerHeight,
        marginBottom: -1,
        // Fix card grid overflow bug: https://gw.alipayobjects.com/zos/rmsportal/XonYxBikwpgbqIQBeuhk.png
        padding: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPadding)),
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: token.headerFontSize,
        background: token.headerBg,
        borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorderSecondary),
        borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0"),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '&-wrapper': {
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        '&-title': {
            display: 'inline-block',
            flex: 1,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"],
            ["\n          > ".concat(componentCls, "-typography,\n          > ").concat(componentCls, "-typography-edit-content\n        ")]: {
                insetInlineStart: 0,
                marginTop: 0,
                marginBottom: 0
            }
        },
        ["".concat(antCls, "-tabs-top")]: {
            clear: 'both',
            marginBottom: tabsMarginBottom,
            color: token.colorText,
            fontWeight: 'normal',
            fontSize: token.fontSize,
            '&-bar': {
                borderBottom: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(token.colorBorderSecondary)
            }
        }
    };
};
// ============================== Grid ==============================
const genCardGridStyle = (token)=>{
    const { cardPaddingBase, colorBorderSecondary, cardShadow, lineWidth } = token;
    return {
        width: '33.33%',
        padding: cardPaddingBase,
        border: 0,
        borderRadius: 0,
        boxShadow: "\n      ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " 0 0 0 ").concat(colorBorderSecondary, ",\n      0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " 0 0 ").concat(colorBorderSecondary, ",\n      ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " 0 0 ").concat(colorBorderSecondary, ",\n      ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " 0 0 0 ").concat(colorBorderSecondary, " inset,\n      0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(lineWidth), " 0 0 ").concat(colorBorderSecondary, " inset;\n    "),
        transition: "all ".concat(token.motionDurationMid),
        '&-hoverable:hover': {
            position: 'relative',
            zIndex: 1,
            boxShadow: cardShadow
        }
    };
};
// ============================== Actions ==============================
const genCardActionsStyle = (token)=>{
    const { componentCls, iconCls, actionsLiMargin, cardActionsIconSize, colorBorderSecondary, actionsBg } = token;
    return {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        background: actionsBg,
        borderTop: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
        display: 'flex',
        borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG)),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '& > li': {
            margin: actionsLiMargin,
            color: token.colorTextDescription,
            textAlign: 'center',
            '> span': {
                position: 'relative',
                display: 'block',
                minWidth: token.calc(token.cardActionsIconSize).mul(2).equal(),
                fontSize: token.fontSize,
                lineHeight: token.lineHeight,
                cursor: 'pointer',
                '&:hover': {
                    color: token.colorPrimary,
                    transition: "color ".concat(token.motionDurationMid)
                },
                ["a:not(".concat(componentCls, "-btn), > ").concat(iconCls)]: {
                    display: 'inline-block',
                    width: '100%',
                    color: token.colorIcon,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.fontHeight),
                    transition: "color ".concat(token.motionDurationMid),
                    '&:hover': {
                        color: token.colorPrimary
                    }
                },
                ["> ".concat(iconCls)]: {
                    fontSize: cardActionsIconSize,
                    lineHeight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(cardActionsIconSize).mul(token.lineHeight).equal())
                }
            },
            '&:not(:last-child)': {
                borderInlineEnd: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary)
            }
        }
    };
};
// ============================== Meta ==============================
const genCardMetaStyle = (token)=>({
        margin: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.calc(token.marginXXS).mul(-1).equal()), " 0"),
        display: 'flex',
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearFix"])(),
        '&-avatar': {
            paddingInlineEnd: token.padding
        },
        '&-section': {
            overflow: 'hidden',
            flex: 1,
            '> div:not(:last-child)': {
                marginBottom: token.marginXS
            }
        },
        '&-title': {
            color: token.colorTextHeading,
            fontWeight: token.fontWeightStrong,
            fontSize: token.fontSizeLG,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEllipsis"]
        },
        '&-description': {
            color: token.colorTextDescription
        }
    });
// ============================== Inner ==============================
const genCardTypeInnerStyle = (token)=>{
    const { componentCls, colorFillAlter, headerPadding, bodyPadding } = token;
    return {
        ["".concat(componentCls, "-head")]: {
            padding: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPadding)),
            background: colorFillAlter,
            '&-title': {
                fontSize: token.fontSize
            }
        },
        ["".concat(componentCls, "-body")]: {
            padding: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.padding), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(bodyPadding))
        }
    };
};
// ============================== Loading ==============================
const genCardLoadingStyle = (token)=>{
    const { componentCls } = token;
    return {
        overflow: 'hidden',
        ["".concat(componentCls, "-body")]: {
            userSelect: 'none'
        }
    };
};
// ============================== Basic ==============================
const genCardStyle = (token)=>{
    const { componentCls, cardShadow, cardHeadPadding, colorBorderSecondary, boxShadowTertiary, bodyPadding, extraColor } = token;
    return {
        [componentCls]: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token),
            position: 'relative',
            background: token.colorBgContainer,
            borderRadius: token.borderRadiusLG,
            ["&:not(".concat(componentCls, "-bordered)")]: {
                boxShadow: boxShadowTertiary
            },
            ["".concat(componentCls, "-head")]: genCardHeadStyle(token),
            ["".concat(componentCls, "-extra")]: {
                // https://stackoverflow.com/a/22429853/3040605
                marginInlineStart: 'auto',
                color: extraColor,
                fontWeight: 'normal',
                fontSize: token.fontSize
            },
            ["".concat(componentCls, "-body")]: {
                padding: bodyPadding,
                borderRadius: "0 0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG))
            },
            ["".concat(componentCls, "-grid")]: genCardGridStyle(token),
            ["".concat(componentCls, "-cover")]: {
                '> *': {
                    display: 'block',
                    width: '100%',
                    borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0")
                }
            },
            ["".concat(componentCls, "-actions")]: genCardActionsStyle(token),
            ["".concat(componentCls, "-meta")]: genCardMetaStyle(token)
        },
        ["".concat(componentCls, "-bordered")]: {
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.lineWidth), " ").concat(token.lineType, " ").concat(colorBorderSecondary),
            ["".concat(componentCls, "-cover")]: {
                marginTop: -1,
                marginInlineStart: -1,
                marginInlineEnd: -1
            }
        },
        ["".concat(componentCls, "-hoverable")]: {
            cursor: 'pointer',
            transition: "box-shadow ".concat(token.motionDurationMid, ", border-color ").concat(token.motionDurationMid),
            '&:hover': {
                borderColor: 'transparent',
                boxShadow: cardShadow
            }
        },
        ["".concat(componentCls, "-contain-grid")]: {
            borderRadius: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(token.borderRadiusLG), " 0 0 "),
            ["".concat(componentCls, "-body")]: {
                display: 'flex',
                flexWrap: 'wrap'
            },
            ["&:not(".concat(componentCls, "-loading) ").concat(componentCls, "-body")]: {
                marginBlockStart: token.calc(token.lineWidth).mul(-1).equal(),
                marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
                padding: 0
            }
        },
        ["".concat(componentCls, "-contain-tabs")]: {
            ["> div".concat(componentCls, "-head")]: {
                minHeight: 0,
                ["".concat(componentCls, "-head-title, ").concat(componentCls, "-extra")]: {
                    paddingTop: cardHeadPadding
                }
            }
        },
        ["".concat(componentCls, "-type-inner")]: genCardTypeInnerStyle(token),
        ["".concat(componentCls, "-loading")]: genCardLoadingStyle(token),
        ["".concat(componentCls, "-rtl")]: {
            direction: 'rtl'
        }
    };
};
// ============================== Size ==============================
const genCardSizeStyle = (token)=>{
    const { componentCls, bodyPaddingSM, headerPaddingSM, headerHeightSM, headerFontSizeSM } = token;
    return {
        ["".concat(componentCls, "-small")]: {
            ["> ".concat(componentCls, "-head")]: {
                minHeight: headerHeightSM,
                padding: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$util$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unit"])(headerPaddingSM)),
                fontSize: headerFontSizeSM,
                ["> ".concat(componentCls, "-head-wrapper")]: {
                    ["> ".concat(componentCls, "-extra")]: {
                        fontSize: token.fontSize
                    }
                }
            },
            ["> ".concat(componentCls, "-body")]: {
                padding: bodyPaddingSM
            }
        },
        ["".concat(componentCls, "-small").concat(componentCls, "-contain-tabs")]: {
            ["> ".concat(componentCls, "-head")]: {
                ["".concat(componentCls, "-head-title, ").concat(componentCls, "-extra")]: {
                    paddingTop: 0,
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        }
    };
};
const prepareComponentToken = (token)=>{
    var _token_bodyPadding, _token_headerPadding;
    return {
        headerBg: 'transparent',
        headerFontSize: token.fontSizeLG,
        headerFontSizeSM: token.fontSize,
        headerHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
        headerHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
        actionsBg: token.colorBgContainer,
        actionsLiMargin: "".concat(token.paddingSM, "px 0"),
        tabsMarginBottom: -token.padding - token.lineWidth,
        extraColor: token.colorText,
        bodyPaddingSM: 12,
        // Fixed padding.
        headerPaddingSM: 12,
        bodyPadding: (_token_bodyPadding = token.bodyPadding) !== null && _token_bodyPadding !== void 0 ? _token_bodyPadding : token.paddingLG,
        headerPadding: (_token_headerPadding = token.headerPadding) !== null && _token_headerPadding !== void 0 ? _token_headerPadding : token.paddingLG
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Card', (token)=>{
    const cardToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        cardShadow: token.boxShadowCard,
        cardHeadPadding: token.padding,
        cardPaddingBase: token.paddingLG,
        cardActionsIconSize: token.fontSize
    });
    return [
        // Style
        genCardStyle(cardToken),
        // Size
        genCardSizeStyle(cardToken)
    ];
}, prepareComponentToken);
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/hooks/useSize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/form/hooks/useVariants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tabs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/style/index.js [app-client] (ecmascript)");
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
const ActionNode = (props)=>{
    const { actionClasses, actions = [], actionStyle } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", {
        className: actionClasses,
        style: actionStyle
    }, actions.map((action, index)=>{
        // Move this out since eslint not allow index key
        // And eslint-disable makes conflict with rollup
        // ref https://github.com/ant-design/ant-design/issues/46022
        const key = "action-".concat(index);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
            style: {
                width: "".concat(100 / actions.length, "%")
            },
            key: key
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null, action));
    }));
};
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    const { prefixCls: customizePrefixCls, className, rootClassName, style, extra, headStyle = {}, bodyStyle = {}, title, loading, bordered, variant: customVariant, size: customizeSize, type, cover, actions, tabList, children, activeTabKey, defaultActiveTabKey, tabBarExtraContent, hoverable, tabProps = {}, classNames, styles, ...rest } = props;
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('card');
    const [variant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useVariants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('card', customVariant, bordered);
    const mergedSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$hooks$2f$useSize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(customizeSize);
    // =========== Merged Props for Semantic ==========
    const mergedProps = {
        ...props,
        size: mergedSize,
        variant: variant,
        loading
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
    // =================Warning===================
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Card');
        [
            [
                'headStyle',
                'styles.header'
            ],
            [
                'bodyStyle',
                'styles.body'
            ],
            [
                'bordered',
                'variant'
            ]
        ].forEach((param)=>{
            let [deprecatedName, newName] = param;
            warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
        });
    }
    const onTabChange = (key)=>{
        var _props_onTabChange;
        (_props_onTabChange = props.onTabChange) === null || _props_onTabChange === void 0 ? void 0 : _props_onTabChange.call(props, key);
    };
    const isContainGrid = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Card.useMemo[isContainGrid]": ()=>{
            const childNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$Children$2f$toArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toArray$3e$__["toArray"])(children);
            return childNodes.some({
                "Card.useMemo[isContainGrid]": (child)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }["Card.useMemo[isContainGrid]"]);
        }
    }["Card.useMemo[isContainGrid]"], [
        children
    ]);
    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const [hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const loadingBlock = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        loading: true,
        active: true,
        paragraph: {
            rows: 4
        },
        title: false
    }, children);
    const hasActiveTabKey = activeTabKey !== undefined;
    const extraProps = {
        ...tabProps,
        [hasActiveTabKey ? 'activeKey' : 'defaultActiveKey']: hasActiveTabKey ? activeTabKey : defaultActiveTabKey,
        tabBarExtraContent
    };
    let head;
    const tabSize = !mergedSize || mergedSize === 'default' ? 'large' : mergedSize;
    const tabs = tabList ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tabs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        size: tabSize,
        ...extraProps,
        className: "".concat(prefixCls, "-head-tabs"),
        onChange: onTabChange,
        items: tabList.map((param)=>{
            let { tab, ...item } = param;
            return {
                label: tab,
                ...item
            };
        })
    }) : null;
    if (title || extra || tabs) {
        const headClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-head"), mergedClassNames.header);
        const titleClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-head-title"), mergedClassNames.title);
        const extraClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-extra"), mergedClassNames.extra);
        const mergedHeadStyle = {
            ...headStyle,
            ...mergedStyles.header
        };
        head = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: headClasses,
            style: mergedHeadStyle
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: "".concat(prefixCls, "-head-wrapper")
        }, title && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: titleClasses,
            style: mergedStyles.title
        }, title), extra && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: extraClasses,
            style: mergedStyles.extra
        }, extra)), tabs);
    }
    const coverClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-cover"), mergedClassNames.cover);
    const coverDom = cover ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: coverClasses,
        style: mergedStyles.cover
    }, cover) : null;
    const bodyClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-body"), mergedClassNames.body);
    const mergedBodyStyle = {
        ...bodyStyle,
        ...mergedStyles.body
    };
    const body = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: bodyClasses,
        style: mergedBodyStyle
    }, loading ? loadingBlock : children);
    const actionClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(prefixCls, "-actions"), mergedClassNames.actions);
    const actionDom = (actions === null || actions === void 0 ? void 0 : actions.length) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ActionNode, {
        actionClasses: actionClasses,
        actionStyle: mergedStyles.actions,
        actions: actions
    }) : null;
    const divProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$rc$2d$component$2f$util$2f$es$2f$omit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__omit$3e$__["omit"])(rest, [
        'onTabChange'
    ]);
    const classString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(prefixCls, contextClassName, {
        ["".concat(prefixCls, "-loading")]: loading,
        ["".concat(prefixCls, "-bordered")]: variant !== 'borderless',
        ["".concat(prefixCls, "-hoverable")]: hoverable,
        ["".concat(prefixCls, "-contain-grid")]: isContainGrid,
        ["".concat(prefixCls, "-contain-tabs")]: tabList === null || tabList === void 0 ? void 0 : tabList.length,
        ["".concat(prefixCls, "-").concat(mergedSize)]: mergedSize,
        ["".concat(prefixCls, "-type-").concat(type)]: !!type,
        ["".concat(prefixCls, "-rtl")]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls, mergedClassNames.root);
    const mergedStyle = {
        ...mergedStyles.root,
        ...contextStyle,
        ...style
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ref: ref,
        ...divProps,
        className: classString,
        style: mergedStyle
    }, head, coverDom, body, actionDom);
});
const __TURBOPACK__default__export__ = Card;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Meta.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/_util/hooks/useMergeSemantic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Meta = (props)=>{
    const { prefixCls: customizePrefixCls, className, avatar, title, description, style, classNames: cardMetaClassNames, styles, ...restProps } = props;
    const { getPrefixCls, className: contextClassName, style: contextStyle, classNames: contextClassNames, styles: contextStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('cardMeta');
    const prefixCls = getPrefixCls('card', customizePrefixCls);
    const metaPrefixCls = "".concat(prefixCls, "-meta");
    const [mergedClassNames, mergedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$_util$2f$hooks$2f$useMergeSemantic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeSemantic"])([
        contextClassNames,
        cardMetaClassNames
    ], [
        contextStyles,
        styles
    ], {
        props
    });
    const rootClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(metaPrefixCls, className, contextClassName, mergedClassNames.root);
    const rootStyles = {
        ...contextStyle,
        ...mergedStyles.root,
        ...style
    };
    const avatarClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(metaPrefixCls, "-avatar"), mergedClassNames.avatar);
    const titleClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(metaPrefixCls, "-title"), mergedClassNames.title);
    const descriptionClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(metaPrefixCls, "-description"), mergedClassNames.description);
    const sectionClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("".concat(metaPrefixCls, "-section"), mergedClassNames.section);
    const avatarDom = avatar ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: avatarClassNames,
        style: mergedStyles.avatar
    }, avatar) : null;
    const titleDom = title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: titleClassNames,
        style: mergedStyles.title
    }, title) : null;
    const descriptionDom = description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: descriptionClassNames,
        style: mergedStyles.description
    }, description) : null;
    const MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: sectionClassNames,
        style: mergedStyles.section
    }, titleDom, descriptionDom) : null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...restProps,
        className: rootClassNames,
        style: rootStyles
    }, avatarDom, MetaDetail);
};
const __TURBOPACK__default__export__ = Meta;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Meta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/Meta.js [app-client] (ecmascript)");
"use client";
;
;
;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Card.Grid = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Card.Meta = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$Meta$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if ("TURBOPACK compile-time truthy", 1) {
    Card.displayName = 'Card';
}
const __TURBOPACK__default__export__ = Card;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/index.js [app-client] (ecmascript) <export default as Card>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/card/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=eef15_752dc1b3._.js.map