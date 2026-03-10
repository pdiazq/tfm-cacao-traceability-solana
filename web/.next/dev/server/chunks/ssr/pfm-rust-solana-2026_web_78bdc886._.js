module.exports = [
"[project]/pfm-rust-solana-2026/web/lib/utils/pda.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConfigPDA",
    ()=>getConfigPDA,
    "getPendingRolePDA",
    ()=>getPendingRolePDA,
    "getPendingTransferPDA",
    ()=>getPendingTransferPDA,
    "getRoleRegistryPDA",
    ()=>getRoleRegistryPDA,
    "getTokenBalancePDA",
    ()=>getTokenBalancePDA,
    "getTraceTokenPDA",
    ()=>getTraceTokenPDA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/solana/constants.ts [app-ssr] (ecmascript)");
;
;
function getConfigPDA() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("config")
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getRoleRegistryPDA(wallet) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("role_registry"),
        wallet.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getPendingRolePDA(wallet) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("pending_role"),
        wallet.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getTraceTokenPDA(mint) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("trace_token"),
        mint.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getPendingTransferPDA(tokenMint, from, to) {
    if (from && to) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
            Buffer.from("pending_transfer"),
            tokenMint.toBuffer(),
            from.toBuffer(),
            to.toBuffer()
        ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
    }
    // Fallback for backwards compatibility (shouldn't be used)
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("pending_transfer"),
        tokenMint.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getTokenBalancePDA(tokenMint, owner) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from("token_balance"),
        tokenMint.toBuffer(),
        owner.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
}),
"[project]/pfm-rust-solana-2026/web/lib/hooks/useRole.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRole",
    ()=>useRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/utils/pda.ts [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Normalize role enum object to string
 */ function normalizeRole(role) {
    if (!role) return null;
    if (typeof role === "string") return role;
    if (typeof role === "object") {
        const roleKey = Object.keys(role)[0];
        return roleKey || null;
    }
    return null;
}
function useRole() {
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const { program } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$context$2f$ProgramProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgram"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingRole, setPendingRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasPendingRequest, setHasPendingRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthority, setIsAuthority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchRole = async ()=>{
        if (!publicKey || !program) {
            setRole(null);
            setPendingRole(null);
            setHasPendingRequest(false);
            setIsAuthority(false);
            setLoading(false);
            return;
        }
        try {
            setError(null);
            let roleValue = null;
            let hasPendingRequestValue = false;
            let pendingRoleValue = null;
            // Fetch RoleRegistry to check if user has an approved role
            const [roleRegistryPDA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoleRegistryPDA"])(publicKey);
            try {
                const roleRegistry = await program.account.roleRegistry.fetch(roleRegistryPDA);
                roleValue = normalizeRole(roleRegistry.role);
            } catch  {
                roleValue = null;
            }
            setRole(roleValue);
            // Fetch PendingRoleRegistration to check if user has a pending request
            const [pendingRolePDA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPendingRolePDA"])(publicKey);
            try {
                const pendingRoleReg = await program.account.pendingRoleRegistration.fetch(pendingRolePDA);
                hasPendingRequestValue = true;
                pendingRoleValue = normalizeRole(pendingRoleReg.requestedRole);
            } catch  {
                hasPendingRequestValue = false;
                pendingRoleValue = null;
            }
            setHasPendingRequest(hasPendingRequestValue);
            setPendingRole(pendingRoleValue);
            // Check if user is authority
            const [configPDA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConfigPDA"])();
            try {
                const config = await program.account.programConfig.fetch(configPDA);
                setIsAuthority(config.authority.equals(publicKey));
            } catch  {
                // If config doesn't exist, check if user has a validated role
                // If user has NO validated role and NO pending request, they could be the authority
                if (!roleValue && !hasPendingRequestValue) {
                    setIsAuthority(true); // Allow user to initialize program
                } else {
                    setIsAuthority(false);
                }
            }
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch role");
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchRole();
    }, [
        publicKey,
        program
    ]);
    return {
        role,
        hasPendingRequest,
        pendingRole,
        isAuthority,
        loading,
        error,
        refetch: fetchRole
    };
}
}),
"[project]/pfm-rust-solana-2026/web/lib/utils/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatAddress",
    ()=>formatAddress,
    "formatAmount",
    ()=>formatAmount,
    "formatDate",
    ()=>formatDate,
    "formatRole",
    ()=>formatRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/date-fns/formatDistance.js [app-ssr] (ecmascript)");
;
function formatAddress(address) {
    if (!address) return "";
    const addressStr = address.toString ? address.toString() : String(address);
    if (addressStr.length < 8) return addressStr;
    return `${addressStr.slice(0, 4)}...${addressStr.slice(-4)}`;
}
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$date$2d$fns$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"])(date, new Date(), {
        addSuffix: true
    });
}
function formatRole(role) {
    if (!role) return "";
    // Handle enum objects like { producer: {} }
    if (typeof role === "object") {
        const roleKey = Object.keys(role)[0];
        return roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
    }
    // Handle strings
    if (typeof role === "string") {
        return role.charAt(0).toUpperCase() + role.slice(1);
    }
    return "";
}
function formatAmount(amount) {
    if (!amount && amount !== 0) return "0";
    const str = amount.toString();
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}),
"[project]/pfm-rust-solana-2026/web/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useRole.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/utils/format.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
// Dynamically import WalletMultiButton to prevent hydration issues
const WalletMultiButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function Home() {
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const { role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRole"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b-4 border-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-black text-black",
                                    children: "◆ Solana Trazabilidad"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: "Decentralized Supply Chain Traceability"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-black text-white py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 text-6xl",
                                    children: "⛓️"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl font-black mb-6 leading-tight",
                                    children: [
                                        "Track Products",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 29
                                        }, this),
                                        "Through the Supply Chain"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed",
                                    children: "Solana Trazabilidad is a decentralized supply chain traceability system built on Solana blockchain. Track products from producer to consumer with complete transparency and blockchain security."
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                publicKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "inline-block bg-white text-black font-black py-4 px-12 rounded-lg border-4 border-white hover:bg-gray-100 transition transform hover:scale-105 text-lg",
                                    children: [
                                        "📊 Go to Dashboard ",
                                        role && `(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRole"])(role)})`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-lg",
                                        children: "🔗 Connect your wallet to get started"
                                    }, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-full mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-black text-black mb-16 text-center",
                                    children: "Supply Chain Journey"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center justify-center min-w-max md:min-w-full px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 text-center",
                                                    children: "🌱"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xl font-black text-black mb-2 text-center",
                                                    children: "Producer"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-center font-medium text-sm",
                                                    children: "Create tokens for your products"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t-4 border-black space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Create Tokens"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Set Metadata"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Initiate Transfers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-black text-black flex-shrink-0",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 text-center",
                                                    children: "🏭"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xl font-black text-black mb-2 text-center",
                                                    children: "Factory"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-center font-medium text-sm",
                                                    children: "Process and combine products"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t-4 border-black space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Receive Tokens"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Combine Inputs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Create New Tokens"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-black text-black flex-shrink-0",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 text-center",
                                                    children: "🏪"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xl font-black text-black mb-2 text-center",
                                                    children: "Retailer"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-center font-medium text-sm",
                                                    children: "Distribute to consumers"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t-4 border-black space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Accept Transfers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ View History"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Ship Products"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-black text-black flex-shrink-0",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-3 text-center",
                                                    children: "👥"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xl font-black text-black mb-2 text-center",
                                                    children: "Consumer"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-center font-medium text-sm",
                                                    children: "Verify authenticity"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t-4 border-black space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Track Products"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Verify Origin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 font-semibold",
                                                            children: "✓ Full History"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-black text-white py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-black mb-16 text-center",
                                    children: "Why Solana Trazabilidad?"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white text-black border-4 border-white rounded-lg p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-4",
                                                    children: "🔐"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-2xl font-black mb-3",
                                                    children: "100% Transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Every product movement is recorded on the blockchain, creating an immutable record of the entire supply chain."
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white text-black border-4 border-white rounded-lg p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-4",
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-2xl font-black mb-3",
                                                    children: "Lightning Fast"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Built on Solana, transactions are processed in milliseconds with minimal fees and maximum efficiency."
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white text-black border-4 border-white rounded-lg p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-4",
                                                    children: "🛡️"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-2xl font-black mb-3",
                                                    children: "Fully Secure"
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 font-medium",
                                                    children: "Cryptographic security ensures that only authorized participants can create or transfer tokens."
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-black text-black mb-16 text-center",
                                    children: "Getting Started in 4 Steps"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow bg-white border-4 border-black rounded-lg p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-black text-black mb-2",
                                                            children: "Connect Your Wallet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Click the wallet button in the top right corner and connect your Solana wallet. This is required to participate in the network."
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow bg-white border-4 border-black rounded-lg p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-black text-black mb-2",
                                                            children: "Register Your Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 font-medium",
                                                            children: 'Go to "Register Role" and select your position in the supply chain: Producer, Factory, Retailer, or Consumer. Each role has different capabilities.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow bg-white border-4 border-black rounded-lg p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-black text-black mb-2",
                                                            children: "Get Authority Approval"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Your role request will be reviewed by the system authority. Once approved, you'll have access to all the features for your role."
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-6 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black",
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow bg-white border-4 border-black rounded-lg p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-2xl font-black text-black mb-2",
                                                            children: "Start the Supply Chain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 font-medium",
                                                            children: "Create tokens if you're a producer, or accept transfers from suppliers. Your products are now tracked on the blockchain forever."
                                                        }, void 0, false, {
                                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-black text-white py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto text-center border-4 border-white rounded-lg p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-black mb-6",
                                    children: "Ready to Transform Your Supply Chain?"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-300 mb-8",
                                    children: "Join thousands of producers, factories, retailers, and consumers already using Solana Trazabilidad to ensure product authenticity and transparency."
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                !publicKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "inline-block bg-white text-black font-black py-4 px-12 rounded-lg border-4 border-white hover:bg-gray-100 transition transform hover:scale-105 text-lg",
                                    children: "🚀 Access Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white border-t-4 border-black py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 font-semibold",
                        children: "© 2025 Solana Trazabilidad. Building transparency on the blockchain."
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=pfm-rust-solana-2026_web_78bdc886._.js.map