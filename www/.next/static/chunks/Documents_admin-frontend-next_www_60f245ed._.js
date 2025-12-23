(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/admin-frontend-next/www/utils/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/api.ts
__turbopack_context__.s([
    "fetchNews",
    ()=>fetchNews
]);
const fetchNews = async ()=>{
    try {
        const res = await fetch("https://api.marketaux.com/v1/news/all?countries=us&filter_entities=true&limit=999&published_after=2025-12-18T07:21&api_token=VvkVpGSPNsRdmfJzfVFWqWXhK6lrnSrD6bC8XR5a");
        if (!res.ok) {
            throw new Error("Failed to fetch news");
        }
        const json = await res.json();
        return json.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [app-client] (ecmascript) <export default as ArrowLeftOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalOutlined$3e$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/GlobalOutlined.js [app-client] (ecmascript) <export default as GlobalOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/utils/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function NewsDetailPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsDetailPage.useEffect": ()=>{
            const findNews = {
                "NewsDetailPage.useEffect.findNews": async ()=>{
                    // 1. ลองหาใน LocalStorage ก่อน (เร็วสุด)
                    const storedNews = localStorage.getItem("latestNews");
                    if (storedNews) {
                        const parsedNews = JSON.parse(storedNews);
                        const found = parsedNews.find({
                            "NewsDetailPage.useEffect.findNews.found": (item)=>item.uuid === id
                        }["NewsDetailPage.useEffect.findNews.found"]);
                        if (found) {
                            setNews(found);
                            setLoading(false);
                            return;
                        }
                    }
                    // 2. ถ้าไม่มีใน Storage (เช่น User เข้าผ่านลิงก์โดยตรง) ให้ลอง Fetch ใหม่
                    const fetchedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNews"])();
                    const found = fetchedData.find({
                        "NewsDetailPage.useEffect.findNews.found": (item)=>item.uuid === id
                    }["NewsDetailPage.useEffect.findNews.found"]);
                    setNews(found || null);
                    setLoading(false);
                }
            }["NewsDetailPage.useEffect.findNews"];
            findNews();
        }
    }["NewsDetailPage.useEffect"], [
        id
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
            size: "large"
        }, void 0, false, {
            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
            lineNumber: 38,
            columnNumber: 82
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
        lineNumber: 38,
        columnNumber: 23
    }, this);
    if (!news) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800",
                    children: "News not found"
                }, void 0, false, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: ()=>router.push('/'),
                    className: "mt-4",
                    children: "Back to Home"
                }, void 0, false, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white pt-24 pb-20 px-4 md:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "text",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__["ArrowLeftOutlined"], {}, void 0, false, {
                        fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, void 0),
                    onClick: ()=>router.back(),
                    className: "mb-6 text-gray-600 hover:text-blue-600",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight",
                    children: news.title
                }, void 0, false, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4 mb-8 text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: new Date(news.published_at).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 66,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 67,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobalOutlined$3e$__["GlobalOutlined"], {}, void 0, false, {
                                fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 23
                            }, void 0),
                            color: "blue",
                            children: news.source
                        }, void 0, false, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 68,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg bg-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: news.image_url || "https://via.placeholder.com/800x500?text=No+Image",
                        alt: news.title,
                        className: "w-full h-full object-cover",
                        onError: (e)=>{
                            // ถ้าโหลดรูปไม่ได้ ให้เปลี่ยนเป็นรูป Default
                            e.target.src = "https://via.placeholder.com/800x500?text=Image+Error";
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg max-w-none text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-semibold mb-6",
                            children: news.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 leading-relaxed",
                            children: news.snippet
                        }, void 0, false, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-gray-800 mb-4",
                                    children: "Read full article at source:"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: news.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition",
                                    children: "Visit Website"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/admin-frontend-next/www/app/news/[id]/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(NewsDetailPage, "bDNOHjA8VnZYXuDPonNCH5WgVQ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NewsDetailPage;
var _c;
__turbopack_context__.k.register(_c, "NewsDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tag/index.js [app-client] (ecmascript) <export default as Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/tag/index.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/antd/es/spin/index.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/ArrowLeftOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var ArrowLeftOutlined = {
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
                    "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "arrow-left",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = ArrowLeftOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/ArrowLeftOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const ArrowLeftOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![arrow-left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg3MiA0NzRIMjg2LjlsMzUwLjItMzA0YzUuNi00LjkgMi4yLTE0LTUuMi0xNGgtODguNWMtMy45IDAtNy42IDEuNC0xMC41IDMuOUwxNTUgNDg3LjhhMzEuOTYgMzEuOTYgMCAwMDAgNDguM0w1MzUuMSA4NjZjMS41IDEuMyAzLjMgMiA1LjIgMmg5MS41YzcuNCAwIDEwLjgtOS4yIDUuMi0xNEwyODYuOSA1NTBIODcyYzQuNCAwIDgtMy42IDgtOHYtNjBjMC00LjQtMy42LTgtOC04eiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ArrowLeftOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'ArrowLeftOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [app-client] (ecmascript) <export default as ArrowLeftOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeftOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [app-client] (ecmascript)");
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/GlobalOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This icon file is generated automatically.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var GlobalOutlined = {
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
                    "d": "M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"
                }
            }
        ]
    },
    "name": "global",
    "theme": "outlined"
};
const __TURBOPACK__default__export__ = GlobalOutlined;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/GlobalOutlined.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons-svg/es/asn/GlobalOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/components/AntdIcon.js [app-client] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
;
;
;
const GlobalOutlined = (props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$components$2f$AntdIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], _extends({}, props, {
        ref: ref,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2d$svg$2f$es$2f$asn$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
/**![global](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC40IDgwMC45Yy4yLS4zLjUtLjYuNy0uOUM5MjAuNiA3MjIuMSA5NjAgNjIxLjcgOTYwIDUxMnMtMzkuNC0yMTAuMS0xMDQuOC0yODhjLS4yLS4zLS41LS41LS43LS44LTEuMS0xLjMtMi4xLTIuNS0zLjItMy43LS40LS41LS44LS45LTEuMi0xLjRsLTQuMS00LjctLjEtLjFjLTEuNS0xLjctMy4xLTMuNC00LjYtNS4xbC0uMS0uMWMtMy4yLTMuNC02LjQtNi44LTkuNy0xMC4xbC0uMS0uMS00LjgtNC44LS4zLS4zYy0xLjUtMS41LTMtMi45LTQuNS00LjMtLjUtLjUtMS0xLTEuNi0xLjUtMS0xLTItMS45LTMtMi44LS4zLS4zLS43LS42LTEtMUM3MzYuNCAxMDkuMiA2MjkuNSA2NCA1MTIgNjRzLTIyNC40IDQ1LjItMzA0LjMgMTE5LjJjLS4zLjMtLjcuNi0xIDEtMSAuOS0yIDEuOS0zIDIuOS0uNS41LTEgMS0xLjYgMS41LTEuNSAxLjQtMyAyLjktNC41IDQuM2wtLjMuMy00LjggNC44LS4xLjFjLTMuMyAzLjMtNi41IDYuNy05LjcgMTAuMWwtLjEuMWMtMS42IDEuNy0zLjEgMy40LTQuNiA1LjFsLS4xLjFjLTEuNCAxLjUtMi44IDMuMS00LjEgNC43LS40LjUtLjguOS0xLjIgMS40LTEuMSAxLjItMi4xIDIuNS0zLjIgMy43LS4yLjMtLjUuNS0uNy44QzEwMy40IDMwMS45IDY0IDQwMi4zIDY0IDUxMnMzOS40IDIxMC4xIDEwNC44IDI4OGMuMi4zLjUuNi43LjlsMy4xIDMuN2MuNC41LjguOSAxLjIgMS40bDQuMSA0LjdjMCAuMS4xLjEuMS4yIDEuNSAxLjcgMyAzLjQgNC42IDVsLjEuMWMzLjIgMy40IDYuNCA2LjggOS42IDEwLjFsLjEuMWMxLjYgMS42IDMuMSAzLjIgNC43IDQuN2wuMy4zYzMuMyAzLjMgNi43IDYuNSAxMC4xIDkuNiA4MC4xIDc0IDE4NyAxMTkuMiAzMDQuNSAxMTkuMnMyMjQuNC00NS4yIDMwNC4zLTExOS4yYTMwMCAzMDAgMCAwMDEwLTkuNmwuMy0uM2MxLjYtMS42IDMuMi0zLjEgNC43LTQuN2wuMS0uMWMzLjMtMy4zIDYuNS02LjcgOS42LTEwLjFsLjEtLjFjMS41LTEuNyAzLjEtMy4zIDQuNi01IDAtLjEuMS0uMS4xLS4yIDEuNC0xLjUgMi44LTMuMSA0LjEtNC43LjQtLjUuOC0uOSAxLjItMS40YTk5IDk5IDAgMDAzLjMtMy43em00LjEtMTQyLjZjLTEzLjggMzIuNi0zMiA2Mi44LTU0LjIgOTAuMmE0NDQuMDcgNDQ0LjA3IDAgMDAtODEuNS01NS45YzExLjYtNDYuOSAxOC44LTk4LjQgMjAuNy0xNTIuNkg4ODdjLTMgNDAuOS0xMi42IDgwLjYtMjguNSAxMTguM3pNODg3IDQ4NEg3NDMuNWMtMS45LTU0LjItOS4xLTEwNS43LTIwLjctMTUyLjYgMjkuMy0xNS42IDU2LjYtMzQuNCA4MS41LTU1LjlBMzczLjg2IDM3My44NiAwIDAxODg3IDQ4NHpNNjU4LjMgMTY1LjVjMzkuNyAxNi44IDc1LjggNDAgMTA3LjYgNjkuMmEzOTQuNzIgMzk0LjcyIDAgMDEtNTkuNCA0MS44Yy0xNS43LTQ1LTM1LjgtODQuMS01OS4yLTExNS40IDMuNyAxLjQgNy40IDIuOSAxMSA0LjR6bS05MC42IDcwMC42Yy05LjIgNy4yLTE4LjQgMTIuNy0yNy43IDE2LjRWNjk3YTM4OS4xIDM4OS4xIDAgMDExMTUuNyAyNi4yYy04LjMgMjQuNi0xNy45IDQ3LjMtMjkgNjcuOC0xNy40IDMyLjQtMzcuOCA1OC4zLTU5IDc1LjF6bTU5LTYzMy4xYzExIDIwLjYgMjAuNyA0My4zIDI5IDY3LjhBMzg5LjEgMzg5LjEgMCAwMTU0MCAzMjdWMTQxLjZjOS4yIDMuNyAxOC41IDkuMSAyNy43IDE2LjQgMjEuMiAxNi43IDQxLjYgNDIuNiA1OSA3NXpNNTQwIDY0MC45VjU0MGgxNDcuNWMtMS42IDQ0LjItNy4xIDg3LjEtMTYuMyAxMjcuOGwtLjMgMS4yQTQ0NS4wMiA0NDUuMDIgMCAwMDU0MCA2NDAuOXptMC0xNTYuOVYzODMuMWM0NS44LTIuOCA4OS44LTEyLjUgMTMwLjktMjguMWwuMyAxLjJjOS4yIDQwLjcgMTQuNyA4My41IDE2LjMgMTI3LjhINTQwem0tNTYgNTZ2MTAwLjljLTQ1LjggMi44LTg5LjggMTIuNS0xMzAuOSAyOC4xbC0uMy0xLjJjLTkuMi00MC43LTE0LjctODMuNS0xNi4zLTEyNy44SDQ4NHptLTE0Ny41LTU2YzEuNi00NC4yIDcuMS04Ny4xIDE2LjMtMTI3LjhsLjMtMS4yYzQxLjEgMTUuNiA4NSAyNS4zIDEzMC45IDI4LjFWNDg0SDMzNi41ek00ODQgNjk3djE4NS40Yy05LjItMy43LTE4LjUtOS4xLTI3LjctMTYuNC0yMS4yLTE2LjctNDEuNy00Mi43LTU5LjEtNzUuMS0xMS0yMC42LTIwLjctNDMuMy0yOS02Ny44IDM3LjItMTQuNiA3NS45LTIzLjMgMTE1LjgtMjYuMXptMC0zNzBhMzg5LjEgMzg5LjEgMCAwMS0xMTUuNy0yNi4yYzguMy0yNC42IDE3LjktNDcuMyAyOS02Ny44IDE3LjQtMzIuNCAzNy44LTU4LjQgNTkuMS03NS4xIDkuMi03LjIgMTguNC0xMi43IDI3LjctMTYuNFYzMjd6TTM2NS43IDE2NS41YzMuNy0xLjUgNy4zLTMgMTEtNC40LTIzLjQgMzEuMy00My41IDcwLjQtNTkuMiAxMTUuNC0yMS0xMi00MC45LTI2LTU5LjQtNDEuOCAzMS44LTI5LjIgNjcuOS01Mi40IDEwNy42LTY5LjJ6TTE2NS41IDM2NS43YzEzLjgtMzIuNiAzMi02Mi44IDU0LjItOTAuMiAyNC45IDIxLjUgNTIuMiA0MC4zIDgxLjUgNTUuOS0xMS42IDQ2LjktMTguOCA5OC40LTIwLjcgMTUyLjZIMTM3YzMtNDAuOSAxMi42LTgwLjYgMjguNS0xMTguM3pNMTM3IDU0MGgxNDMuNWMxLjkgNTQuMiA5LjEgMTA1LjcgMjAuNyAxNTIuNmE0NDQuMDcgNDQ0LjA3IDAgMDAtODEuNSA1NS45QTM3My44NiAzNzMuODYgMCAwMTEzNyA1NDB6bTIyOC43IDMxOC41Yy0zOS43LTE2LjgtNzUuOC00MC0xMDcuNi02OS4yIDE4LjUtMTUuOCAzOC40LTI5LjcgNTkuNC00MS44IDE1LjcgNDUgMzUuOCA4NC4xIDU5LjIgMTE1LjQtMy43LTEuNC03LjQtMi45LTExLTQuNHptMjkyLjYgMGMtMy43IDEuNS03LjMgMy0xMSA0LjQgMjMuNC0zMS4zIDQzLjUtNzAuNCA1OS4yLTExNS40IDIxIDEyIDQwLjkgMjYgNTkuNCA0MS44YTM3My44MSAzNzMuODEgMCAwMS0xMDcuNiA2OS4yeiIgLz48L3N2Zz4=) */ const RefIcon = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](GlobalOutlined);
if ("TURBOPACK compile-time truthy", 1) {
    RefIcon.displayName = 'GlobalOutlined';
}
const __TURBOPACK__default__export__ = RefIcon;
}),
"[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/GlobalOutlined.js [app-client] (ecmascript) <export default as GlobalOutlined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalOutlined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$admin$2d$frontend$2d$next$2f$www$2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$GlobalOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/admin-frontend-next/www/node_modules/@ant-design/icons/es/icons/GlobalOutlined.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_admin-frontend-next_www_60f245ed._.js.map