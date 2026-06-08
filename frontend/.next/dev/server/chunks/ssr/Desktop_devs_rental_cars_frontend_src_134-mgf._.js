module.exports = [
"[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarCard",
    ()=>CarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const CarCard = ({ car, onSelectCar })=>{
    /**
   * Formatea un valor numérico a formato de moneda local (MXN).
   */ const formatPrice = (price)=>{
        return new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
            maximumFractionDigits: 0
        }).format(price);
    };
    /**
   * Determina la ruta final de la imagen resolviendo el prefijo para GitHub Pages
   * en caso de ser un recurso local.
   */ const getFinalImageSrc = (url)=>{
        if (!url) return "";
        return url.startsWith("/") ? `/Rental-Cars${url}` : url;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-56 bg-gray-100 relative overflow-hidden",
                children: [
                    car.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: getFinalImageSrc(car.image_url),
                        alt: `${car.brand} ${car.model}`,
                        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center text-gray-400 text-xs uppercase tracking-wider",
                        children: "Sin Foto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-md ${car.is_available ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"}`,
                        children: car.is_available ? "Disponible" : "Rentado"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 flex flex-col grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-950 uppercase tracking-tight mb-4",
                        children: [
                            car.brand,
                            " ",
                            car.model
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-extrabold text-black",
                                children: formatPrice(car.price_per_day)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-sm font-medium tracking-wide",
                                children: [
                                    " ",
                                    "/ día"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold uppercase tracking-wider text-gray-600 border-t border-gray-50 pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: car.car_type
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: car.transmission
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "4 Personas"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: car.fuel_type
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "180 CV (Potencia)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-4 border-t border-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelectCar(car),
                            type: "button",
                            disabled: !car.is_available,
                            className: "w-full bg-black hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded transition-colors cursor-pointer",
                            children: "Reservar Vehículo"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Desktop/devs/rental_cars/frontend/src/app/cars/data/carsData.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_CARS",
    ()=>MOCK_CARS
]);
const MOCK_CARS = [
    // --- SEDANES ---
    {
        id: 1,
        brand: "BMW",
        model: "330i M Sport",
        year: 2024,
        price_per_day: 1850,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        brand: "Honda",
        model: "Civic Touring",
        year: 2024,
        price_per_day: 950,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "/img/civic.avif"
    },
    {
        id: 3,
        brand: "Mazda",
        model: "Mazda 3 Sedán",
        year: 2023,
        price_per_day: 850,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "/img/mazda_3.avif"
    },
    {
        id: 4,
        brand: "Kia",
        model: "K4 Pack",
        year: 2025,
        price_per_day: 800,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "/img/kia_k4.avif"
    },
    {
        id: 11,
        brand: "Honda",
        model: "City Prime",
        year: 2024,
        price_per_day: 800,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "/img/honda_city.avif"
    },
    {
        id: 12,
        brand: "Volkswagen",
        model: "Jetta Sportline",
        year: 2024,
        price_per_day: 900,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "sedan",
        is_available: true,
        image_url: "/img/jetta.avif"
    },
    // --- SUVS / MINI SUVS ---
    {
        id: 5,
        brand: "Audi",
        model: "Q5 S-Line",
        year: 2025,
        price_per_day: 2400,
        transmission: "Automatico",
        fuel_type: "Híbrido",
        car_type: "suv",
        is_available: true,
        image_url: "/img/audi_q5_sline.avif"
    },
    {
        id: 6,
        brand: "Mazda",
        model: "CX-5 S Grand Touring",
        year: 2024,
        price_per_day: 1100,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "suv",
        is_available: true,
        image_url: "/img/mazda_cx_5.avif"
    },
    {
        id: 7,
        brand: "Kia",
        model: "Sportage SXL",
        year: 2024,
        price_per_day: 1050,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "suv",
        is_available: true,
        image_url: "/img/kia_sportage.avif"
    },
    {
        id: 8,
        brand: "Toyota",
        model: "RAV4 Limited",
        year: 2024,
        price_per_day: 1200,
        transmission: "Automatico",
        fuel_type: "Híbrido",
        car_type: "suv",
        is_available: true,
        image_url: "/img/toyota_rav4.avif"
    },
    // --- COMPACTOS / HATCHBACKS ---
    {
        id: 9,
        brand: "Mini Cooper",
        model: "S Classic",
        year: 2024,
        price_per_day: 1400,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "hatchback",
        is_available: true,
        image_url: "/img/minicooper.avif"
    },
    // --- TODOTERRENO / AVENTURA ---
    {
        id: 10,
        brand: "Jeep",
        model: "Wrangler Sahara",
        year: 2024,
        price_per_day: 2600,
        transmission: "Automatico",
        fuel_type: "Gasolina",
        car_type: "offroad",
        is_available: true,
        image_url: "/img/jeep.avif"
    }
];
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/reservationsData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_RESERVATIONS",
    ()=>MOCK_RESERVATIONS,
    "cancelReservation",
    ()=>cancelReservation,
    "getAllReservations",
    ()=>getAllReservations,
    "getAvailableCars",
    ()=>getAvailableCars,
    "getDisabledDatesForCar",
    ()=>getDisabledDatesForCar,
    "saveReservation",
    ()=>saveReservation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/app/cars/data/carsData.tsx [app-ssr] (ecmascript)");
;
const MOCK_RESERVATIONS = [
    {
        id: 1,
        car_id: 2,
        start_date: "2026-06-01",
        end_date: "2026-06-05",
        status: "Confirmed",
        customer_name: "Juan Pablo Jiménez",
        customer_email: "juan.pablo@gmail.com",
        customer_phone: "331-456-7890"
    },
    {
        id: 2,
        car_id: 2,
        start_date: "2026-06-15",
        end_date: "2026-06-20",
        status: "Confirmed",
        customer_name: "Sofía Rodríguez",
        customer_email: "sofia.rod@outlook.com",
        customer_phone: "552-987-6543"
    },
    {
        id: 3,
        car_id: 5,
        start_date: "2026-05-28",
        end_date: "2026-06-02",
        status: "Confirmed",
        customer_name: "Carlos Mendoza",
        customer_email: "carlos.m@empresa.com",
        customer_phone: "811-321-7654"
    },
    {
        id: 4,
        car_id: 3,
        start_date: "2026-06-10",
        end_date: "2026-06-12",
        status: "Confirmed",
        customer_name: "Alejandra Gómez",
        customer_email: "ale.gomez@live.com.mx",
        customer_phone: "449-765-4321"
    }
];
function getAllReservations() {
    if ("TURBOPACK compile-time truthy", 1) return MOCK_RESERVATIONS;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    const userReservations = undefined;
    const rawAllReservations = undefined;
}
function saveReservation(newRes) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    const existingUserReservations = undefined;
    const fullReservation = undefined;
    const updated = undefined;
}
function getAvailableCars(startStr, endStr) {
    if (!startStr || !endStr) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CARS"];
    const searchStart = new Date(startStr);
    const searchEnd = new Date(endStr);
    const allReservations = getAllReservations();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CARS"].filter((car)=>{
        const hasConflict = allReservations.some((res)=>{
            if (res.car_id !== car.id) return false;
            const resStart = new Date(res.start_date);
            const resEnd = new Date(res.end_date);
            return searchStart <= resEnd && searchEnd >= resStart;
        });
        return !hasConflict;
    });
}
function getDisabledDatesForCar(carId) {
    const allReservations = getAllReservations();
    return allReservations.filter((res)=>res.car_id === carId).map((res)=>({
            start: res.start_date,
            end: res.end_date
        }));
}
function cancelReservation(reservationId) {
    if ("TURBOPACK compile-time truthy", 1) return {
        penalty: 0,
        isPenaltyApplied: false
    };
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    let userReservations;
    const reservationToCancel = undefined;
    // --- LÓGICA DE LAS 24 HORAS ---
    const now = undefined;
    const startDate = undefined;
    const diffTime = undefined;
    const diffHours = undefined;
    let penalty;
    let isPenaltyApplied;
    const updatedReservations = undefined;
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useStepper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStepper",
    ()=>useStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useStepper(initialStep = 1, totalSteps = 3) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const nextStep = ()=>{
        if (step < totalSteps) {
            setDirection(1);
            setStep((prev)=>prev + 1);
        }
    };
    const prevStep = ()=>{
        if (step > 1) {
            setDirection(-1);
            setStep((prev)=>prev - 1);
        }
    };
    const resetStepper = ()=>{
        setStep(initialStep);
        setDirection(1);
    };
    return {
        step,
        setStep,
        direction,
        setDirection,
        nextStep,
        prevStep,
        resetStepper
    };
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useBookingForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookingForm",
    ()=>useBookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const INITIAL_CUSTOMER_DATA = {
    fullName: "",
    email: "",
    phone: "",
    license: ""
};
function useBookingForm(isOpen) {
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("10:00");
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("10:00");
    const [selectedCoverage, setSelectedCoverage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ligero");
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_CUSTOMER_DATA);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_CUSTOMER_DATA);
    const handleCustomerDataChange = (key, value)=>{
        setCustomerData((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    // Limpieza centralizada y segura al abrir/cerrar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setStartDate("");
            setEndDate("");
            setStartTime("10:00");
            setEndTime("10:00");
            setSelectedCoverage("ligero");
            setCurrentMonth(new Date());
            setShowSuccess(false);
            setError("");
            setCustomerData(INITIAL_CUSTOMER_DATA);
            setFormErrors(INITIAL_CUSTOMER_DATA);
        }
    }, [
        isOpen
    ]);
    return {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        selectedCoverage,
        setSelectedCoverage,
        currentMonth,
        setCurrentMonth,
        showSuccess,
        setShowSuccess,
        error,
        setError,
        customerData,
        handleCustomerDataChange,
        formErrors,
        setFormErrors
    };
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/BookingModal.constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COVERAGES",
    ()=>COVERAGES,
    "HOURS",
    ()=>HOURS
]);
const HOURS = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00"
];
const COVERAGES = [
    {
        id: "ligero",
        name: "Viaja Ligero",
        stars: "★☆☆",
        tag: "Con Cobertura",
        price_per_day: 624.93,
        deposit: 10000,
        features: [
            {
                text: "Protección parcial contra daños por colisión con deducible del 10%",
                included: true
            },
            {
                text: "Cobertura contra Robo Total con 20% de Deducible",
                included: true
            },
            {
                text: "Cobertura en llantas y cristales",
                included: false
            },
            {
                text: "Asistencia en el camino",
                included: false
            },
            {
                text: "Gastos médicos para pasajeros",
                included: false
            }
        ]
    },
    {
        id: "seguro",
        name: "Maneja Seguro",
        stars: "★★☆",
        tag: "Cobertura Complementaria",
        price_per_day: 925.97,
        deposit: 10000,
        features: [
            {
                text: "Protección parcial contra daños por colisión con deducible del 10%",
                included: true
            },
            {
                text: "Cobertura contra Robo Total con 20% de Deducible",
                included: true
            },
            {
                text: "Cobertura en llantas y cristales",
                included: true
            },
            {
                text: "Asistencia en el camino",
                included: true
            },
            {
                text: "Gastos médicos para pasajeros",
                included: true
            }
        ]
    },
    {
        id: "maximo",
        name: "Disfruta al máximo",
        stars: "★★★",
        tag: "Protección Total",
        price_per_day: 1478.34,
        deposit: 1600,
        features: [
            {
                text: "Cobertura contra Daños al Vehículo con 0% de Deducible",
                included: true
            },
            {
                text: "Cobertura contra Robo Total del vehículo con 0% de Deducible",
                included: true
            },
            {
                text: "Cobertura en llantas y cristales",
                included: true
            },
            {
                text: "Daños a terceros ampliados hasta por $3,000,000.00 MXN",
                included: true
            },
            {
                text: "Asistencia en el camino",
                included: true
            },
            {
                text: "Gastos médicos para pasajeros",
                included: true
            }
        ]
    }
];
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useBooking.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBooking",
    ()=>useBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useStepper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useStepper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useBookingForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useBookingForm.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/reservationsData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/BookingModal.constants.ts [app-ssr] (ecmascript)");
;
;
;
;
function useBooking(car, isOpen, onClose) {
    // Instanciamos los submódulos de lógica
    const stepper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useStepper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStepper"])(1, 3);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useBookingForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingForm"])(isOpen);
    // Reiniciar el stepper de navegación de forma síncrona con el ciclo del formulario
    if (!isOpen && stepper.step !== 1) {
        stepper.resetStepper();
    }
    // Carga de fechas bloqueadas
    const disabledRanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisabledDatesForCar"])(car.id);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Lógica de negocio abstracta: Cálculo de días ponderados
    const totalDays = (()=>{
        if (!form.startDate || !form.endDate) return 0;
        const startD = new Date(form.startDate.split("-").map(Number)[0], form.startDate.split("-").map(Number)[1] - 1, form.startDate.split("-").map(Number)[2]);
        const endD = new Date(form.endDate.split("-").map(Number)[0], form.endDate.split("-").map(Number)[1] - 1, form.endDate.split("-").map(Number)[2]);
        let diff = Math.ceil((endD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24));
        if (diff === 0) diff = 1;
        const [sH] = form.startTime.split(":").map(Number);
        const [eH] = form.endTime.split(":").map(Number);
        if (eH > sH + 2) diff += 1;
        return diff;
    })();
    // Operaciones financieras
    const carTotalPrice = totalDays * car.price_per_day;
    const activeCoverage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVERAGES"].find((c)=>c.id === form.selectedCoverage);
    const totalCoveragePrice = totalDays * (activeCoverage?.price_per_day || 0);
    const finalGrandTotal = carTotalPrice + totalCoveragePrice;
    const changeMonth = (offset)=>form.setCurrentMonth(new Date(form.currentMonth.getFullYear(), form.currentMonth.getMonth() + offset, 1));
    // Validación nativa del flujo del cliente
    const validateForm = ()=>{
        const errors = {
            fullName: "",
            email: "",
            phone: "",
            license: ""
        };
        let isValid = true;
        if (!form.customerData.fullName.trim()) {
            errors.fullName = "El nombre completo es requerido.";
            isValid = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(form.customerData.fullName)) {
            errors.fullName = "El nombre no debe contener números ni símbolos.";
            isValid = false;
        }
        if (!form.customerData.email.trim()) {
            errors.email = "El correo electrónico es requerido.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.customerData.email)) {
            errors.email = "Por favor, ingresa un correo electrónico válido.";
            isValid = false;
        }
        if (!form.customerData.phone.trim()) {
            errors.phone = "El número de teléfono es requerido.";
            isValid = false;
        } else if (!/^\d{10}$/.test(form.customerData.phone)) {
            errors.phone = "El teléfono debe contener exactamente 10 dígitos numéricos.";
            isValid = false;
        }
        if (!form.customerData.license.trim()) {
            errors.license = "El número de licencia es requerido.";
            isValid = false;
        } else if (form.customerData.license.trim().length < 5) {
            errors.license = "La licencia debe tener al menos 5 caracteres.";
            isValid = false;
        }
        form.setFormErrors(errors);
        return isValid;
    };
    const handleFinalPayment = ()=>{
        if (validateForm()) {
            form.setShowSuccess(true);
        }
    };
    // Exponemos una API unificada para que no tengas que modificar tus componentes visuales (StepCalendar, StepCoverages, etc.)
    return {
        ...stepper,
        ...form,
        disabledRanges,
        today,
        totalDays,
        finalGrandTotal,
        changeMonth,
        handleFinalPayment
    };
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepCalendar",
    ()=>StepCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/BookingModal.constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function StepCalendar({ booking, variants }) {
    /**
   * Generación y renderizado dinámico de la matriz de días del mes.
   */ const renderCalendarDays = ()=>{
        const year = booking.currentMonth.getFullYear();
        const month = booking.currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const totalDaysMonth = new Date(year, month + 1, 0).getDate();
        const cells = [];
        // Celdas vacías del desfase de días de la semana
        for(let i = 0; i < firstDay; i++){
            cells.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2"
            }, `empty-${i}`, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 28,
                columnNumber: 18
            }, this));
        }
        // Inyección de botones por cada día disponible del mes
        for(let day = 1; day <= totalDaysMonth; day++){
            const date = new Date(year, month, day);
            const dStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isPast = date < booking.today;
            const isBlocked = booking.disabledRanges.some((r)=>date >= new Date(r.start) && date <= new Date(r.end));
            const isStart = booking.startDate === dStr;
            const isEnd = booking.endDate === dStr;
            const isInRange = booking.startDate && booking.endDate && date > new Date(booking.startDate) && date < new Date(booking.endDate);
            // Asignación de clases condicionales según el estado de la fecha
            let classes = "text-black hover:bg-gray-100 font-medium rounded-md text-center p-2 text-xs transition-all cursor-pointer";
            if (isPast || isBlocked) classes = "text-gray-300 cursor-not-allowed line-through p-2 text-xs text-center";
            if (isStart || isEnd) classes = "bg-black text-white font-bold rounded-lg p-2 text-xs text-center cursor-pointer";
            else if (isInRange) classes = "bg-zinc-100 text-black font-medium p-2 text-xs text-center cursor-pointer";
            cells.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    if (isPast || isBlocked) return;
                    if (!booking.startDate || booking.startDate && booking.endDate) {
                        booking.setStartDate(dStr);
                        booking.setEndDate("");
                    } else {
                        if (new Date(dStr) < new Date(booking.startDate)) {
                            booking.setStartDate(dStr);
                            booking.setEndDate("");
                        } else {
                            booking.setEndDate(dStr);
                        }
                    }
                },
                className: classes,
                children: day
            }, `day-${day}`, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this));
        }
        return cells;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: booking.direction,
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            x: {
                type: "tween",
                duration: 0.5
            },
            opacity: {
                duration: 0.5
            }
        },
        className: "space-y-4 text-black w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center bg-gray-50 p-2 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>booking.changeMonth(-1),
                        className: "text-[11px] font-bold px-2 cursor-pointer text-black",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-black uppercase text-black",
                        children: booking.currentMonth.toLocaleString("es-MX", {
                            month: "long",
                            year: "numeric"
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>booking.changeMonth(1),
                        className: "text-[11px] font-bold px-2 cursor-pointer text-black",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-2 text-[10px] text-gray-400 font-bold text-center uppercase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Do"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Lu"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Ma"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Mi"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Ju"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Vi"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Sá"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-7 gap-1 mb-2",
                children: renderCalendarDays()
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[9px] font-black text-gray-400 uppercase mb-1",
                                children: "Recogida"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: booking.startTime,
                                onChange: (e)=>booking.setStartTime(e.target.value),
                                className: "text-xs font-bold bg-gray-50 p-2 rounded-lg text-black border border-transparent focus:outline-none focus:border-black cursor-pointer",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOURS"].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: h,
                                        children: [
                                            h,
                                            " hrs"
                                        ]
                                    }, h, true, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-[9px] font-black text-gray-400 uppercase mb-1",
                                children: "Entrega"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: booking.endTime,
                                onChange: (e)=>booking.setEndTime(e.target.value),
                                className: "text-xs font-bold bg-gray-50 p-2 rounded-lg text-black border border-transparent focus:outline-none focus:border-black cursor-pointer",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOURS"].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: h,
                                        children: [
                                            h,
                                            " hrs"
                                        ]
                                    }, h, true, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: !booking.startDate || !booking.endDate,
                onClick: ()=>{
                    booking.setDirection(1);
                    booking.setStep(2);
                },
                className: "w-full py-3 bg-black text-white rounded-lg text-xs font-bold uppercase disabled:opacity-50 cursor-pointer transition-opacity",
                children: "Siguiente →"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, "step1", true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepCoverages",
    ()=>StepCoverages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/BookingModal.constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function StepCoverages({ booking, variants }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: booking.direction,
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            x: {
                type: "tween",
                duration: 0.5
            },
            opacity: {
                duration: 0.5
            }
        },
        className: "space-y-4 pr-1 text-black w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$BookingModal$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COVERAGES"].map((cov)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>booking.setSelectedCoverage(cov.id),
                        className: `rounded-2xl border-2 p-4 cursor-pointer transition-all ${booking.selectedCoverage === cov.id ? "border-black bg-zinc-50/50" : "border-gray-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-black uppercase text-black",
                                        children: cov.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black text-black",
                                        children: [
                                            "$",
                                            cov.price_per_day,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                className: "text-[8px] text-gray-400 uppercase",
                                                children: "/ día"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            booking.selectedCoverage === cov.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                className: "mt-3 pt-3 border-t border-gray-100 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-[10px] flex items-center gap-2 text-gray-700 font-black",
                                            children: [
                                                "Depósito: $",
                                                cov.deposit
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        cov.features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `text-[10px] font-medium flex items-center gap-2 ${f.included ? "text-gray-700" : "text-gray-300 line-through"}`,
                                                children: [
                                                    f.included ? "✓" : "✕",
                                                    " ",
                                                    f.text
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cov.id, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 text-white p-5 rounded-2xl flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[9px] font-black text-zinc-400 uppercase tracking-widest",
                                children: "Total Est."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl text-green-400 font-bold",
                                children: [
                                    "$",
                                    booking.finalGrandTotal.toLocaleString("es-MX")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            booking.setDirection(1);
                            booking.setStep(3);
                        },
                        className: "bg-white text-black px-6 py-3 rounded-xl text-xs font-black uppercase cursor-pointer hover:bg-gray-100 transition-colors",
                        children: "Siguiente →"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    booking.setDirection(-1);
                    booking.setStep(1);
                },
                className: "w-full py-2.5 bg-gray-100 text-gray-500 rounded-xl text-xs font-bold uppercase cursor-pointer hover:bg-gray-200 transition-colors",
                children: "← Regresar"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, "step2", true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepCustomerDetails",
    ()=>StepCustomerDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function StepCustomerDetails({ booking, variants }) {
    const isFormEmpty = !booking.customerData.fullName.trim() || !booking.customerData.email.trim() || !booking.customerData.phone.trim() || !booking.customerData.license.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: booking.direction,
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            x: {
                type: "tween",
                duration: 0.5
            },
            opacity: {
                duration: 0.5
            }
        },
        className: "space-y-4 text-black w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-black text-black uppercase mb-1",
                                children: "Nombre Completo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Juan Pérez",
                                value: booking.customerData.fullName,
                                onChange: (e)=>booking.handleCustomerDataChange("fullName", e.target.value),
                                className: `w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${booking.formErrors.fullName ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-black"}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            booking.formErrors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-red-500 font-bold mt-1 block",
                                children: booking.formErrors.fullName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-black text-black uppercase mb-1",
                                children: "Correo Electrónico"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "juan@correo.com",
                                value: booking.customerData.email,
                                onChange: (e)=>booking.handleCustomerDataChange("email", e.target.value),
                                className: `w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${booking.formErrors.email ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-black"}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            booking.formErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-red-500 font-bold mt-1 block",
                                children: booking.formErrors.email
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-black text-black uppercase mb-1",
                                        children: "Teléfono"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        placeholder: "3333333333",
                                        value: booking.customerData.phone,
                                        onChange: (e)=>booking.handleCustomerDataChange("phone", e.target.value),
                                        className: `w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${booking.formErrors.phone ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-black"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    booking.formErrors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-red-500 font-bold mt-1 block",
                                        children: booking.formErrors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-black text-black uppercase mb-1",
                                        children: "No. Licencia"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "ABC12345",
                                        value: booking.customerData.license,
                                        onChange: (e)=>booking.handleCustomerDataChange("license", e.target.value),
                                        className: `w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${booking.formErrors.license ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-black"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    booking.formErrors.license && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-red-500 font-bold mt-1 block",
                                        children: booking.formErrors.license
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 text-white p-5 rounded-2xl space-y-4 mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[9px] font-black text-zinc-400 uppercase tracking-widest",
                                    children: "Total a Pagar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl text-green-400 font-bold",
                                    children: [
                                        "$",
                                        booking.finalGrandTotal.toLocaleString("es-MX")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: isFormEmpty,
                            onClick: booking.handleFinalPayment,
                            className: "bg-white text-black px-6 py-3 rounded-xl text-xs font-black uppercase cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: "Pagar"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    booking.setDirection(-1);
                    booking.setStep(2);
                },
                className: "w-full py-2.5 bg-gray-100 text-gray-500 rounded-xl text-xs font-bold uppercase cursor-pointer hover:bg-gray-200 transition-colors",
                children: "← Regresar"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, "step3", true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuccessView",
    ()=>SuccessView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function SuccessView({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.3
        },
        className: "py-4 text-center space-y-5 flex flex-col items-center text-black w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-zinc-900 text-green-400 rounded-full flex items-center justify-center text-3xl font-bold",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-xl font-black uppercase text-black tracking-tight",
                children: "¡Reserva Confirmada!"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClose,
                className: "w-full py-3 bg-black text-white rounded-xl text-xs font-black uppercase shadow-md cursor-pointer hover:bg-zinc-800 transition-colors",
                children: "Finalizar"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, "success", true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useBooking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/hooks/useBooking.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCalendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCalendar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCoverages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCoverages.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCustomerDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/StepCustomerDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$SuccessView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/steps/SuccessView.tsx [app-ssr] (ecmascript)");
// 1. Importamos la función de persistencia que creamos
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/reservationsData.ts [app-ssr] (ecmascript)");
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
const stepVariants = {
    enter: (direction)=>({
            x: direction > 0 ? 150 : -150,
            opacity: 0
        }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction)=>({
            x: direction < 0 ? 150 : -150,
            opacity: 0
        })
};
function BookingModal({ car, isOpen, onClose }) {
    const booking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$hooks$2f$useBooking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBooking"])(car, isOpen, onClose);
    // 2. Efecto para escuchar cuándo la reserva fue exitosa y guardarla en LocalStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (booking.showSuccess) {
            const startStr = booking.startDate || new Date().toISOString().split('T')[0];
            const endStr = booking.endDate || new Date().toISOString().split('T')[0];
            const start = new Date(startStr);
            const end = new Date(endStr);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
            const totalPrice = car.price_per_day * totalDays;
            //  Agregamos las propiedades del cliente que te estaba pidiendo TypeScript
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveReservation"])({
                car_id: car.id,
                car_name: `${car.brand} ${car.model}`,
                car_image: car.image_url,
                start_date: startStr,
                end_date: endStr,
                total_price: totalPrice,
                // 👇 REVISA AQUÍ: Ajusta estos nombres según cómo se llamen los estados dentro de tu hook "booking"
                customer_name: booking.customerData.fullName || "Cliente Demo",
                customer_email: booking.customerData.email || "demo@correo.com",
                customer_phone: booking.customerData.phone || "333-123-4567"
            });
        }
    }, [
        booking.showSuccess,
        car,
        booking.startDate,
        booking.endDate,
        booking.customerData.fullName,
        booking.customerData.email,
        booking.customerData.phone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto relative flex flex-col text-black z-10",
                    children: [
                        !booking.showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] bg-zinc-100 text-zinc-600 font-bold px-2 py-0.5 rounded uppercase tracking-wider",
                                            children: [
                                                "Paso ",
                                                booking.step,
                                                " de 3"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-black uppercase text-black tracking-tight mt-1",
                                            children: [
                                                booking.step === 1 && `Reservar ${car.brand}`,
                                                booking.step === 2 && "Elige tu Cobertura",
                                                booking.step === 3 && "Datos del Conductor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs font-medium",
                                            children: [
                                                car.model,
                                                " • $",
                                                car.price_per_day,
                                                "/día"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "text-gray-400 hover:text-black text-sm font-bold cursor-pointer transition-colors",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1 flex flex-col justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                custom: booking.direction,
                                children: booking.showSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$SuccessView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuccessView"], {
                                    onClose: onClose
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 19
                                }, this) : booking.step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCalendar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepCalendar"], {
                                    booking: booking,
                                    variants: stepVariants
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 19
                                }, this) : booking.step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCoverages$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepCoverages"], {
                                    booking: booking,
                                    variants: stepVariants
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$steps$2f$StepCustomerDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepCustomerDetails"], {
                                    booking: booking,
                                    variants: stepVariants
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-black border-t border-gray-900 py-8 px-4 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold",
        children: [
            "© ",
            new Date().getFullYear(),
            " RentalCars. Todos los derechos reservados."
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Modal({ isOpen, onClose, children, maxWidth = "md" }) {
    // Cerramos el modal si el usuario presiona la tecla Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (e)=>{
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
        window.addEventListener("keydown", handleEscape);
        return ()=>{
            document.body.style.overflow = "unset"; // Libera el scroll al cerrar
            window.removeEventListener("keydown", handleEscape);
        };
    }, [
        isOpen,
        onClose
    ]);
    // Mapa de anchos de Tailwind para hacerlo dinámico
    const maxWithClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "3xl": "max-w-3xl",
        full: "max-w-full m-4"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 20
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: `w-full ${maxWithClasses[maxWidth]} bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 flex flex-col`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute right-4 top-4 text-gray-400 hover:text-black text-sm uppercase font-black tracking-widest transition-colors cursor-pointer z-50 mix-blend-difference",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full text-black",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
            lineNumber: 42,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromoSection",
    ()=>PromoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/components/ui/Modal.tsx [app-ssr] (ecmascript)"); // Ajustado según tu árbol de carpetas
"use client";
;
;
;
const PROMOS = [
    {
        tag: "Ahorro Prepago",
        title: "Pre-paga en línea y ahorra hasta un 20%",
        desc: "Asegura tu auto reservando hoy mismo. Tarifa congelada sin cargos ocultos en mostrador.",
        action: "Ver Oferta",
        details: "Aplica en todas las categorías de autos reservando con un mínimo de 48 horas de anticipación. El descuento del 20% ya se encuentra reflejado en las tarifas marcadas como 'Prepago'. No acumulable con otras promociones o cupones de descuento."
    },
    {
        tag: "Fin de Semana",
        title: "Roadtrip de Fin de Semana Largo",
        desc: "Renta de jueves a lunes y obtén un día completamente gratis en categorías sedán.",
        action: "Reservar Ahora",
        details: "Promoción válida rentando un mínimo de 4 días que incluyan el día sábado y domingo en mostrador. Aplica exclusivamente para categorías Sedán Económico, Compacto y Mediano. Sujeto a disponibilidad de unidades."
    },
    {
        tag: "Beneficio Ejecutivo",
        title: "Conductores adicionales sin costo",
        desc: "Ideal para viajes de negocios. Registra a tu compañero de ruta sin pagar tarifas extra.",
        action: "Saber Más",
        details: "El conductor adicional deberá cumplir con los mismos requisitos obligatorios en mostrador (licencia de conducir vigente e identificación oficial). Límite de un conductor adicional sin costo por contrato de arrendamiento."
    }
];
function PromoSection() {
    // Estado para guardar el objeto de la promo seleccionada (null = cerrado)
    const [selectedPromo, setSelectedPromo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-black uppercase tracking-tight text-black text-center",
                children: "Promociones Exclusivas"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs uppercase tracking-wider mt-2 mb-12 text-center",
                children: "Aprovecha las tarifas especiales diseñadas para cada tipo de viaje."
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: PROMOS.map((promo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-200 rounded-xl p-6 flex flex-col justify-between items-start bg-white hover:border-black transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded",
                                        children: promo.tag
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold uppercase tracking-wider text-black leading-snug",
                                        children: promo.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-xs leading-relaxed",
                                        children: promo.desc
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPromo(promo),
                                className: "mt-6 text-[10px] font-black uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors cursor-pointer",
                                children: [
                                    promo.action,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: !!selectedPromo,
                onClose: ()=>setSelectedPromo(null),
                maxWidth: "md",
                children: selectedPromo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded",
                                    children: selectedPromo.tag
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black uppercase tracking-tight text-black leading-tight",
                                    children: selectedPromo.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "border-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                                    children: "Términos y Condiciones"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-xs leading-relaxed font-medium",
                                    children: selectedPromo.details
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-[10px] uppercase tracking-wider leading-relaxed pt-2",
                            children: "* Precios en MXN. No incluye coberturas adicionales ni deducibles no especificados. Válido en sucursales participantes de la República Mexicana."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPromo(null),
                                className: "w-full bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-colors cursor-pointer text-center",
                                children: "Entendido"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepsSection",
    ()=>StepsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const STEPS = [
    {
        title: "Selecciona Fechas",
        desc: "Elige entrega y devolución."
    },
    {
        title: "Escoge tu Auto",
        desc: "Filtra por tipo y presupuesto."
    },
    {
        title: "Elige Coberturas",
        desc: "Viaja seguro sin deducibles."
    },
    {
        title: "Recoge y Conduce",
        desc: "Pasa a mostrador por tus llaves."
    }
];
function StepsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-black uppercase tracking-tight text-black",
                children: "¿Cómo funciona?"
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs uppercase tracking-wider mt-2 mb-16",
                children: "Cuatro pasos sencillos para tomar el control de tu camino."
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative",
                children: STEPS.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm uppercase tracking-wider mb-4 group-hover:scale-105 transition-transform",
                                children: idx + 1
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-black mb-1.5",
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-[11px] font-medium max-w-[200px]",
                                children: step.desc
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessSection",
    ()=>BusinessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function BusinessSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-black py-24 px-4 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-10 filter grayscale pointer-events-none",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black uppercase tracking-widest text-gray-400",
                        children: "Soluciones Corporativas"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none",
                        children: [
                            "¿Buscas movilidad para tu negocio ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                                lineNumber: 21,
                                columnNumber: 45
                            }, this),
                            "o rentas de largo plazo?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-xs max-w-xl mx-auto leading-relaxed",
                        children: "Optimiza los costos de tu empresa con nuestros planes de gestión de flotas, esquemas de renta mensual deducibles de impuestos y atención prioritaria 24/7."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white text-black hover:bg-gray-100 text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-lg transition-colors cursor-pointer",
                            children: "Contactar un Ejecutivo B2B"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/node_modules/.pnpm/next@16.2.6_@babel+core@7.29.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$cars$2f$components$2f$CarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/cars/components/CarCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/app/cars/data/carsData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/data/reservationsData.ts [app-ssr] (ecmascript)");
// Importación del Modal Único
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$BookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/reservations/components/BookingModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$PromoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/PromoSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$StepsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/StepsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$BusinessSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/devs/rental_cars/frontend/src/features/home/components/BusinessSection.tsx [app-ssr] (ecmascript)");
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
const CATEGORIES = [
    {
        id: "all",
        name: "Todos"
    },
    {
        id: "sedan",
        name: "Sedanes"
    },
    {
        id: "suv",
        name: "SUVs"
    },
    {
        id: "hatchback",
        name: "Compactos"
    },
    {
        id: "offroad",
        name: "Todoterreno"
    }
];
// 1. Toda tu lógica y diseño original se quedan en este componente interno
function CarsContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [filteredCars, setFilteredCars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CARS"]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedCar, setSelectedCar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const startDate = searchParams.get("start") || "";
    const endDate = searchParams.get("end") || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let baseCars = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$app$2f$cars$2f$data$2f$carsData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CARS"];
        if (startDate && endDate) {
            baseCars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$data$2f$reservationsData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvailableCars"])(startDate, endDate);
        }
        if (selectedCategory !== "all") {
            baseCars = baseCars.filter((car)=>car.car_type === selectedCategory);
        }
        setFilteredCars(baseCars);
    }, [
        startDate,
        endDate,
        selectedCategory
    ]);
    return(// Forzamos un contenedor Flex vertical de pantalla completa para estructurar el Footer hasta abajo
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col justify-between pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-400 uppercase tracking-widest",
                                children: "Nuestra Flota"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-black text-black uppercase tracking-tight mt-1",
                                children: "Explora los vehículos"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            startDate && endDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-600 text-xs font-bold uppercase tracking-wider mt-2",
                                children: [
                                    "📅 Mostrando autos disponibles del ",
                                    startDate,
                                    " al ",
                                    endDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mt-2",
                                children: "Selecciona el auto ideal para tu próxima experience."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-5",
                        children: CATEGORIES.map((category)=>{
                            const isActive = selectedCategory === category.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(category.id),
                                className: `px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${isActive ? "bg-black text-white shadow-md shadow-gray-900/10" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
                                children: category.name
                            }, category.id, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    filteredCars.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: filteredCars.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$cars$2f$components$2f$CarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarCard"], {
                                car: car,
                                onSelectCar: (chosenCar)=>setSelectedCar(chosenCar)
                            }, car.id, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 font-medium",
                                children: "No hay vehículos disponibles en la categoría seleccionada."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            selectedCategory !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory("all"),
                                className: "mt-4 inline-block text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 cursor-pointer",
                                children: "Ver todos los vehículos"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            selectedCar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$reservations$2f$components$2f$BookingModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: selectedCar !== null,
                onClose: ()=>setSelectedCar(null),
                car: selectedCar
            }, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$PromoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PromoSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$StepsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepsSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$BusinessSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BusinessSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$src$2f$features$2f$home$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this));
}
function CarsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-xs font-bold uppercase tracking-widest",
                        children: "Cargando flota..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
                lineNumber: 148,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
            lineNumber: 147,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$devs$2f$rental_cars$2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarsContent, {}, void 0, false, {
            fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/devs/rental_cars/frontend/src/app/cars/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_devs_rental_cars_frontend_src_134-mgf._.js.map