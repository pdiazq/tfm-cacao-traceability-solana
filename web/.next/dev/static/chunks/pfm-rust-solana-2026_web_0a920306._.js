(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/pfm-rust-solana-2026/web/lib/hooks/useTokenBalances.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTokenBalances",
    ()=>useTokenBalances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useTokenBalances(userWallet) {
    _s();
    const { program } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"])();
    const [balances, setBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTokenBalances.useEffect": ()=>{
            fetchBalances();
        }
    }["useTokenBalances.useEffect"], [
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
_s(useTokenBalances, "lwqsaDPO+TT9KFSDlgM9HWPhBgQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenBalanceCard",
    ()=>TokenBalanceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/utils/format.ts [app-client] (ecmascript)");
"use client";
;
;
function TokenBalanceCard({ balance, totalSupply, metadata, onTransfer }) {
    const percentage = totalSupply > BigInt(0) ? Number(balance.balance) / Number(totalSupply) * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border-4 border-black rounded-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900",
                                children: metadata || (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAddress"])(balance.tokenMint.toString())
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "Mint: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAddress"])(balance.tokenMint.toString())
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-800",
                        children: "Owner"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Your Balance"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold text-gray-900",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(balance.balance)
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Total Supply"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold text-gray-900",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(totalSupply)
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Your Ownership"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-900",
                                children: [
                                    percentage.toFixed(2),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black h-2 rounded-full transition-all duration-300",
                            style: {
                                width: `${Math.min(percentage, 100)}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            balance.balance === BigInt(0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs px-3 py-2 rounded mb-4",
                children: "You no longer have a balance in this token"
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500",
                children: [
                    "Last updated:",
                    " ",
                    new Date(balance.lastUpdated * 1000).toLocaleDateString()
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            onTransfer && balance.balance > BigInt(0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onTransfer(balance),
                className: "mt-4 w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-lg transition",
                children: "Transfer"
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = TokenBalanceCard;
var _c;
__turbopack_context__.k.register(_c, "TokenBalanceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyTokensPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useTokenBalances$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useTokenBalances.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$token$2f$TokenBalanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/components/token/TokenBalanceCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MyTokensPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const { program } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"])();
    const { balances, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useTokenBalances$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalances"])(publicKey);
    const [tokensInfo, setTokensInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enriching, setEnriching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Enrich balances with TraceToken metadata and total_supply
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyTokensPage.useEffect": ()=>{
            const enrichBalances = {
                "MyTokensPage.useEffect.enrichBalances": async ()=>{
                    if (!program || !program.account || balances.length === 0) {
                        setTokensInfo([]);
                        return;
                    }
                    setEnriching(true);
                    try {
                        const enriched = await Promise.all(balances.map({
                            "MyTokensPage.useEffect.enrichBalances": async (balance)=>{
                                try {
                                    const tokenAccounts = await program.account.traceToken.all([
                                        {
                                            memcmp: {
                                                offset: 8,
                                                bytes: balance.tokenMint.toBase58()
                                            }
                                        }
                                    ]);
                                    if (tokenAccounts.length === 0) {
                                        return {
                                            balance,
                                            metadata: balance.tokenMint.toString(),
                                            totalSupply: balance.balance
                                        };
                                    }
                                    const traceToken = await program.account.traceToken.fetch(tokenAccounts[0].publicKey);
                                    return {
                                        balance,
                                        metadata: traceToken.metadata || balance.tokenMint.toString(),
                                        totalSupply: BigInt(traceToken.totalSupply.toString())
                                    };
                                } catch  {
                                    return {
                                        balance,
                                        metadata: balance.tokenMint.toString(),
                                        totalSupply: balance.balance
                                    };
                                }
                            }
                        }["MyTokensPage.useEffect.enrichBalances"]));
                        setTokensInfo(enriched);
                    } catch  {
                        // If enrichment fails, show basic info
                        setTokensInfo(balances.map({
                            "MyTokensPage.useEffect.enrichBalances": (balance)=>({
                                    balance,
                                    metadata: balance.tokenMint.toString(),
                                    totalSupply: balance.balance
                                })
                        }["MyTokensPage.useEffect.enrichBalances"]));
                    } finally{
                        setEnriching(false);
                    }
                }
            }["MyTokensPage.useEffect.enrichBalances"];
            enrichBalances();
        }
    }["MyTokensPage.useEffect"], [
        program,
        balances
    ]);
    const handleTransfer = (balance)=>{
        router.push(`/dashboard/producer/transfers?tokenMint=${balance.tokenMint.toString()}`);
    };
    const isLoading = loading || enriching;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black text-white py-12 px-4 border-b-4 border-black mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl mb-3",
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-black mb-2",
                                        children: "My Tokens"
                                    }, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 font-medium",
                                        children: "Manage all your created product tokens"
                                    }, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/dashboard/producer/create-token"),
                                className: "bg-white text-black font-black py-3 px-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex items-center gap-2 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    " Create Token"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 pb-12",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 font-semibold",
                        children: [
                            "Error: ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4",
                                children: "⏳"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600",
                                children: "Loading your tokens..."
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this) : tokensInfo.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-4 border-black rounded-lg p-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-6",
                                children: "🌾"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-black text-black mb-3",
                                children: "No Products Yet"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 font-medium mb-8 max-w-md mx-auto",
                                children: "You haven't created any product tokens yet. Start by creating your first token and begin your supply chain journey."
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/dashboard/producer/create-token"),
                                className: "bg-black hover:bg-gray-800 text-white font-black py-4 px-8 rounded-lg transition transform hover:-translate-y-2 inline-block",
                                children: "🚀 Create Your First Token"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-gray-600",
                                    children: [
                                        "You have ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black text-black text-2xl",
                                            children: tokensInfo.length
                                        }, void 0, false, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 26
                                        }, this),
                                        " token",
                                        tokensInfo.length !== 1 ? 's' : '',
                                        " created"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",
                                children: tokensInfo.map((info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$token$2f$TokenBalanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TokenBalanceCard"], {
                                        balance: info.balance,
                                        totalSupply: info.totalSupply,
                                        metadata: info.metadata,
                                        onTransfer: handleTransfer
                                    }, info.balance.tokenMint.toString(), false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/producer/my-tokens/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(MyTokensPage, "NMfDMytDGca9bAXQpGlichgMMqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useTokenBalances$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenBalances"]
    ];
});
_c = MyTokensPage;
var _c;
__turbopack_context__.k.register(_c, "MyTokensPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=pfm-rust-solana-2026_web_0a920306._.js.map