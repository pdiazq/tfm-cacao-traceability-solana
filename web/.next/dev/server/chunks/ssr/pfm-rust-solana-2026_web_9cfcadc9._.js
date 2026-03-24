module.exports = [
"[project]/pfm-rust-solana-2026/web/lib/utils/pda.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActorPDA",
    ()=>getActorPDA,
    "getBatchPDA",
    ()=>getBatchPDA,
    "getCertificatePDA",
    ()=>getCertificatePDA,
    "getEventPDA",
    ()=>getEventPDA,
    "getPendingActorPDA",
    ()=>getPendingActorPDA,
    "getProgramConfigPDA",
    ()=>getProgramConfigPDA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/solana/constants.ts [app-ssr] (ecmascript)");
;
;
;
/**
 * Convert a u64-compatible value to 8-byte little-endian buffer
 */ function u64ToBuffer(value) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$bn$2e$js$2f$lib$2f$bn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](value.toString()).toArrayLike(Buffer, "le", 8);
}
function getProgramConfigPDA() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].PROGRAM_CONFIG)
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getPendingActorPDA(wallet) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].PENDING_ACTOR),
        wallet.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getActorPDA(wallet) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].ACTOR),
        wallet.toBuffer()
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getBatchPDA(creator, batchId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].BATCH),
        creator.toBuffer(),
        u64ToBuffer(batchId)
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getEventPDA(batchId, eventId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].EVENT),
        u64ToBuffer(batchId),
        u64ToBuffer(eventId)
    ], __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROGRAM_ID"]);
}
function getCertificatePDA(batchId, certificateId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
        Buffer.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PDA_SEEDS"].CERTIFICATE),
        u64ToBuffer(batchId),
        u64ToBuffer(certificateId)
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
 * Normalize Anchor enum object to string
 */ function normalizeEnum(value) {
    if (!value) return null;
    if (typeof value === "string") return value;
    if (typeof value === "object") {
        const key = Object.keys(value)[0];
        return key || null;
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
            setLoading(true);
            setError(null);
            let validatedRole = null;
            let pendingRoleValue = null;
            let pending = false;
            // 1) Check validated actor
            const [actorPda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActorPDA"])(publicKey);
            try {
                const actor = await program.account.actor.fetch(actorPda);
                validatedRole = normalizeEnum(actor.role);
            } catch  {
                validatedRole = null;
            }
            // 2) Check pending actor request
            const [pendingActorPda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPendingActorPDA"])(publicKey);
            try {
                const pendingActor = await program.account.pendingActor.fetch(pendingActorPda);
                pending = true;
                pendingRoleValue = normalizeEnum(pendingActor.requestedRole);
            } catch  {
                pending = false;
                pendingRoleValue = null;
            }
            // 3) Check if connected wallet is program authority
            const [programConfigPda] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$pda$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgramConfigPDA"])();
            try {
                const config = await program.account.programConfig.fetch(programConfigPda);
                setIsAuthority(config.authority.equals(publicKey));
            } catch  {
                setIsAuthority(false);
            }
            setRole(validatedRole);
            setPendingRole(pendingRoleValue);
            setHasPendingRequest(pending);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch actor role");
        } finally{
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
"[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useRole.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/utils/format.ts [app-ssr] (ecmascript)");
;
"use client";
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
function Header() {
    const { role, hasPendingRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRole"])();
    const getRoleColor = (r)=>{
        // Normalizar rol a string
        let roleStr = r;
        if (typeof r === "object" && r) {
            roleStr = Object.keys(r)[0];
        }
        switch(roleStr){
            case "producer":
                return "bg-green-100 text-green-800";
            case "factory":
                return "bg-gray-200 text-gray-800";
            case "retailer":
                return "bg-purple-100 text-purple-800";
            case "consumer":
                return "bg-orange-100 text-orange-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white shadow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Trazabilidad Cacao con Solana"
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-sm font-semibold ${getRoleColor(role)}`,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$utils$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRole"])(role)
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        hasPendingRequest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800",
                            children: "Pending Approval"
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMultiButton, {}, void 0, false, {
                    fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/hooks/useRole.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { role, hasPendingRequest, isAuthority, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$hooks$2f$useRole$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRole"])();
    const getRoleEmoji = (role)=>{
        if (isAuthority || role === "authority") return "🛡️";
        if (!role) return hasPendingRequest ? "📋" : "👤";
        const emojiMap = {
            producer: "🌱",
            processor: "🏭",
            transporter: "🚚",
            exporter: "📦",
            authority: "🛡️"
        };
        return emojiMap[role] || "👤";
    };
    const getRoleLabel = (role)=>{
        if (isAuthority || role === "authority") return "Authority";
        if (!role) return "No Role";
        const labelMap = {
            producer: "Producer",
            processor: "Processor",
            transporter: "Transporter",
            exporter: "Exporter",
            authority: "Authority"
        };
        return labelMap[role] || role;
    };
    let navItems = [];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-64 bg-white border-r border-4 border-black min-h-screen flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b-4 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-2",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 font-semibold",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    if (!role && hasPendingRequest) {
        navItems = [
            {
                label: "Pending Registration",
                href: "/register-role",
                badge: "pending",
                emoji: "⏱️"
            }
        ];
    } else if (!role && !isAuthority) {
        navItems = [
            {
                label: "Register Actor",
                href: "/register-role",
                emoji: "📝"
            }
        ];
    } else if (isAuthority || role === "authority") {
        navItems = [
            {
                label: "Authority Dashboard",
                href: "/dashboard/authority",
                emoji: "🛡️"
            },
            {
                label: "Register Actor",
                href: "/register-role",
                emoji: "📝"
            }
        ];
    } else if (role === "producer") {
        navItems = [
            {
                label: "Producer Dashboard",
                href: "/dashboard/producer",
                emoji: "🌱"
            },
            {
                label: "Create Batch",
                href: "/dashboard/producer/create-batch",
                emoji: "🍫"
            },
            {
                label: "Record Harvest",
                href: "/dashboard/producer/record-harvest",
                emoji: "🌾"
            },
            {
                label: "My Batches",
                href: "/dashboard/producer/my-batches",
                emoji: "📋"
            }
        ];
    } else if (role === "processor") {
        navItems = [
            {
                label: "Processor Dashboard",
                href: "/dashboard/processor",
                emoji: "🏭"
            },
            {
                label: "Fermentation",
                href: "/dashboard/processor/record-fermentation",
                emoji: "🧪"
            },
            {
                label: "Drying",
                href: "/dashboard/processor/record-drying",
                emoji: "☀️"
            },
            {
                label: "Update Status",
                href: "/dashboard/processor/update-status",
                emoji: "🔄"
            }
        ];
    } else if (role === "transporter") {
        navItems = [
            {
                label: "Transporter Dashboard",
                href: "/dashboard/transporter",
                emoji: "🚚"
            },
            {
                label: "Record Transport",
                href: "/dashboard/transporter/record-transport",
                emoji: "🚚"
            },
            {
                label: "Record Storage",
                href: "/dashboard/transporter/record-storage",
                emoji: "🏬"
            },
            {
                label: "Update Status",
                href: "/dashboard/transporter/update-status",
                emoji: "🔄"
            }
        ];
    } else if (role === "exporter") {
        navItems = [
            {
                label: "Exporter Dashboard",
                href: "/dashboard/exporter",
                emoji: "📦"
            },
            {
                label: "Record Export",
                href: "/dashboard/exporter/record-export",
                emoji: "🌍"
            },
            {
                label: "Update Status",
                href: "/dashboard/exporter/update-status",
                emoji: "🔄"
            },
            {
                label: "My Batches",
                href: "/dashboard/exporter/my-batches",
                emoji: "📋"
            }
        ];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 bg-white border-r border-4 border-black min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b-4 border-black bg-black text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl mb-3",
                        children: getRoleEmoji(role)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-black mb-1",
                        children: getRoleLabel(role)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-300 font-semibold",
                        children: "Cacao Traceability"
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 p-4 space-y-2",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition transform text-sm", pathname === item.href ? "bg-black text-white shadow-lg border-2 border-black" : "text-black hover:bg-gray-100 hover:shadow-md hover:-translate-y-1"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: item.emoji
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            item.badge === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-black rounded-full",
                                children: "⏱️"
                            }, void 0, false, {
                                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.href, true, {
                        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            (role || isAuthority) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t-4 border-black bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-600 font-semibold text-center",
                    children: "v2.0 • Cacao Supply Chain"
                }, void 0, false, {
                    fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
}),
"[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/components/layout/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/components/layout/Sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pfm-rust-solana-2026/web/app/dashboard/layout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=pfm-rust-solana-2026_web_9cfcadc9._.js.map