module.exports = [
"[project]/pfm-rust-solana-2026/web/lib/hooks/useTokenBalances.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTokenBalances",
    ()=>useTokenBalances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx [app-ssr] (ecmascript)");
;
;
function useTokenBalances(userWallet) {
    const { program } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgram"])();
    const [balances, setBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchBalances = async ()=>{
        if (!program || !userWallet) {
            setBalances([]);
            setLoading(false);
            return;
        }
        try {
            setError(null);
            // Fetch all TokenBalance accounts with memcmp filter for owner
            const allBalances = await program.account.tokenBalance.all([
                {
                    memcmp: {
                        // offset: discriminator(8) + token_mint(32)
                        offset: 40,
                        bytes: userWallet.toBase58()
                    }
                }
            ]);
            const formattedBalances = allBalances.map((account)=>({
                    tokenMint: account.account.tokenMint,
                    owner: account.account.owner,
                    balance: BigInt(account.account.balance.toString()),
                    pda: account.publicKey,
                    lastUpdated: account.account.lastUpdated.toNumber()
                }));
            setBalances(formattedBalances);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch balances");
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchBalances();
    }, [
        program,
        userWallet
    ]);
    const getBalance = (tokenMint)=>{
        const balance = balances.find((b)=>b.tokenMint.equals(tokenMint));
        return balance ? balance.balance : BigInt(0);
    };
    return {
        balances,
        loading,
        error,
        refetch: fetchBalances,
        getBalance
    };
}
}),
"[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProducerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useRole.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useTokenBalances$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useTokenBalances.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ProducerDashboard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const { role, loading: roleLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRole"])();
    const { balances, loading: balancesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useTokenBalances$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTokenBalances"])(publicKey);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roleLoading && role && role !== "producer") {
            router.push("/dashboard");
        }
    }, [
        role,
        roleLoading,
        router
    ]);
    if (!isClient || roleLoading || balancesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Loading your dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    if (!publicKey) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🔗"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: "Please connect your wallet"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black text-white py-16 px-4 border-b-4 border-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🌱"
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-black mb-4",
                            children: "Producer Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-300 max-w-2xl",
                            children: "Create and manage product tokens in the supply chain. Track your products from creation through distribution."
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-black mb-8",
                                children: "Quick Stats"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-600 mb-2",
                                                children: "Tokens Created"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl font-black text-black",
                                                children: balances.length
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-3",
                                                children: "Active product tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-600 mb-2",
                                                children: "Ready to Create"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl font-black text-black",
                                                children: "∞"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-3",
                                                children: "Unlimited product tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-600 mb-2",
                                                children: "Network Status"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl font-black text-black",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-3",
                                                children: "Connected and verified"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black text-black mb-8",
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/producer/create-token"),
                                        className: "bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4 group-hover:scale-110 transition",
                                                children: "📦"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black text-black mb-3",
                                                children: "Create Token"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium mb-4",
                                                children: "Create a new product token and initialize it in the supply chain."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-black",
                                                children: "Start Creating →"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/producer/my-tokens"),
                                        className: "bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4 group-hover:scale-110 transition",
                                                children: "📋"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black text-black mb-3",
                                                children: "My Tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium mb-4",
                                                children: "View all your created tokens and manage transfers."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-black",
                                                children: [
                                                    "View Tokens (",
                                                    balances.length,
                                                    ") →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/producer/transfers"),
                                        className: "bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4 group-hover:scale-110 transition",
                                                children: "🔄"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black text-black mb-3",
                                                children: "Manage Transfers"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium mb-4",
                                                children: "Initiate and track product transfers to factories."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-black",
                                                children: "View Transfers →"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/"),
                                        className: "bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4 group-hover:scale-110 transition",
                                                children: "📚"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black text-black mb-3",
                                                children: "Learn More"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-medium mb-4",
                                                children: "Understand the supply chain and how to use all features."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-black",
                                                children: "Read Docs →"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black text-white rounded-lg border-4 border-black p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-black mb-6",
                                children: "Getting Started Guide 🚀"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-3",
                                                children: "1️⃣"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-black mb-2",
                                                children: "Create Your First Token"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 font-medium text-sm",
                                                children: 'Click "Create Token" above to initialize your first product token with metadata.'
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-3",
                                                children: "2️⃣"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-black mb-2",
                                                children: "Initiate Transfers"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 font-medium text-sm",
                                                children: "Send your tokens to factories to begin the supply chain journey."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-3",
                                                children: "3️⃣"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-black mb-2",
                                                children: "Track Everything"
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 font-medium text-sm",
                                                children: "Monitor your tokens throughout the entire supply chain from farm to consumer."
                                            }, void 0, false, {
                                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=pfm-rust-solana-2026_web_37998cdc._.js.map