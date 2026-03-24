module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[project]/pfm-rust-solana-2026/web/lib/solana/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTOR_ROLES",
    ()=>ACTOR_ROLES,
    "BATCH_STATUSES",
    ()=>BATCH_STATUSES,
    "CLUSTER",
    ()=>CLUSTER,
    "PDA_SEEDS",
    ()=>PDA_SEEDS,
    "PROGRAM_ID",
    ()=>PROGRAM_ID,
    "RPC_ENDPOINT",
    ()=>RPC_ENDPOINT,
    "SYSTEM_PROGRAM_ID",
    ()=>SYSTEM_PROGRAM_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
;
const PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX");
const CLUSTER = "devnet";
const RPC_ENDPOINT = "https://api.devnet.solana.com";
const SYSTEM_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("11111111111111111111111111111111");
const PDA_SEEDS = {
    PROGRAM_CONFIG: "config",
    ACTOR: "actor",
    PENDING_ACTOR: "pending_actor",
    BATCH: "batch",
    EVENT: "event",
    CERTIFICATE: "certificate"
};
const ACTOR_ROLES = [
    "producer",
    "processor",
    "transporter",
    "exporter",
    "authority"
];
const BATCH_STATUSES = [
    "created",
    "harvested",
    "fermented",
    "dried",
    "inTransit",
    "stored",
    "certified",
    "exported",
    "delivered"
];
}),
"[project]/pfm-rust-solana-2026/web/lib/context/WalletProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/ConnectionProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/WalletProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletModalProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$phantom$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-phantom/lib/esm/adapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$solflare$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-solflare/lib/esm/adapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$backpack$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-backpack/lib/esm/adapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/lib/solana/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function WalletProvider({ children }) {
    const endpoint = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$lib$2f$solana$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RPC_ENDPOINT"];
    const wallets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$phantom$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhantomWalletAdapter"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$solflare$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolflareWalletAdapter"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$backpack$2f$lib$2f$esm$2f$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackpackWalletAdapter"]()
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$ConnectionProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionProvider"], {
        endpoint: endpoint,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$WalletProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletProvider"], {
            wallets: wallets,
            autoConnect: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2d$ui$2f$lib$2f$esm$2f$WalletModalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletModalProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/pfm-rust-solana-2026/web/lib/context/WalletProvider.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pfm-rust-solana-2026/web/lib/context/WalletProvider.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pfm-rust-solana-2026/web/lib/context/WalletProvider.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[project]/pfm-rust-solana-2026/web/types/traza.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"address\":\"H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX\",\"metadata\":{\"name\":\"traza\",\"version\":\"0.1.0\",\"spec\":\"0.1.0\",\"description\":\"Created with Anchor\"},\"instructions\":[{\"name\":\"create_batch\",\"discriminator\":[159,198,248,43,248,31,235,86],\"accounts\":[{\"name\":\"program_config\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"actor\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"creator\"}]}},{\"name\":\"batch\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[98,97,116,99,104]},{\"kind\":\"account\",\"path\":\"creator\"},{\"kind\":\"account\",\"path\":\"program_config.next_batch_id\",\"account\":\"ProgramConfig\"}]}},{\"name\":\"creator\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"product\",\"type\":\"string\"},{\"name\":\"origin\",\"type\":\"string\"},{\"name\":\"quantity\",\"type\":\"u64\"},{\"name\":\"unit\",\"type\":\"string\"},{\"name\":\"harvest_date\",\"type\":\"i64\"}]},{\"name\":\"initialize\",\"discriminator\":[175,175,109,31,13,152,155,237],\"accounts\":[{\"name\":\"program_config\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"authority\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[]},{\"name\":\"issue_certificate\",\"discriminator\":[61,197,55,28,159,18,132,128],\"accounts\":[{\"name\":\"program_config\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"batch\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[98,97,116,99,104]},{\"kind\":\"account\",\"path\":\"batch.creator\",\"account\":\"Batch\"},{\"kind\":\"arg\",\"path\":\"batch_id\"}]}},{\"name\":\"certificate\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,101,114,116,105,102,105,99,97,116,101]},{\"kind\":\"arg\",\"path\":\"batch_id\"},{\"kind\":\"account\",\"path\":\"program_config.next_certificate_id\",\"account\":\"ProgramConfig\"}]}},{\"name\":\"authority\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"certificate_type\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"document_hash\",\"type\":\"string\"},{\"name\":\"expiry_date\",\"type\":\"i64\"}]},{\"name\":\"record_event\",\"discriminator\":[32,2,109,205,6,116,72,229],\"accounts\":[{\"name\":\"program_config\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"actor\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"actor_wallet\"}]}},{\"name\":\"batch\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[98,97,116,99,104]},{\"kind\":\"account\",\"path\":\"batch.creator\",\"account\":\"Batch\"},{\"kind\":\"arg\",\"path\":\"batch_id\"}]}},{\"name\":\"batch_event\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[101,118,101,110,116]},{\"kind\":\"arg\",\"path\":\"batch_id\"},{\"kind\":\"account\",\"path\":\"program_config.next_event_id\",\"account\":\"ProgramConfig\"}]}},{\"name\":\"actor_wallet\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"event_type\",\"type\":\"string\"},{\"name\":\"location\",\"type\":\"string\"},{\"name\":\"metadata\",\"type\":\"string\"}]},{\"name\":\"register_actor\",\"discriminator\":[113,25,196,156,92,79,15,151],\"accounts\":[{\"name\":\"pending_actor\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[112,101,110,100,105,110,103,95,97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"wallet\"}]}},{\"name\":\"actor\"},{\"name\":\"wallet\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"requested_role\",\"type\":{\"defined\":{\"name\":\"ActorRole\"}}},{\"name\":\"location\",\"type\":\"string\"}]},{\"name\":\"revoke_certificate\",\"discriminator\":[236,5,130,119,9,164,130,122],\"accounts\":[{\"name\":\"program_config\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"certificate\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,101,114,116,105,102,105,99,97,116,101]},{\"kind\":\"arg\",\"path\":\"batch_id\"},{\"kind\":\"arg\",\"path\":\"certificate_id\"}]}},{\"name\":\"authority\",\"signer\":true}],\"args\":[{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"certificate_id\",\"type\":\"u64\"}]},{\"name\":\"update_batch_status\",\"discriminator\":[71,201,175,178,12,50,51,175],\"accounts\":[{\"name\":\"actor\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"actor_wallet\"}]}},{\"name\":\"batch\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[98,97,116,99,104]},{\"kind\":\"account\",\"path\":\"batch.creator\",\"account\":\"Batch\"},{\"kind\":\"arg\",\"path\":\"batch_id\"}]}},{\"name\":\"actor_wallet\",\"signer\":true}],\"args\":[{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"new_status\",\"type\":{\"defined\":{\"name\":\"BatchStatus\"}}}]},{\"name\":\"validate_actor\",\"discriminator\":[226,115,231,175,45,247,11,48],\"accounts\":[{\"name\":\"program_config\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,110,102,105,103]}]}},{\"name\":\"pending_actor\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[112,101,110,100,105,110,103,95,97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"pending_actor.wallet\",\"account\":\"PendingActor\"}]}},{\"name\":\"actor\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[97,99,116,111,114]},{\"kind\":\"account\",\"path\":\"pending_actor.wallet\",\"account\":\"PendingActor\"}]}},{\"name\":\"authority\",\"writable\":true,\"signer\":true},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[]}],\"accounts\":[{\"name\":\"Actor\",\"discriminator\":[46,77,47,204,204,54,34,88]},{\"name\":\"Batch\",\"discriminator\":[156,194,70,44,22,88,137,44]},{\"name\":\"BatchEvent\",\"discriminator\":[210,92,194,137,7,208,151,44]},{\"name\":\"Certificate\",\"discriminator\":[202,229,222,220,116,20,74,67]},{\"name\":\"PendingActor\",\"discriminator\":[28,137,16,210,29,216,123,138]},{\"name\":\"ProgramConfig\",\"discriminator\":[196,210,90,231,144,149,140,63]}],\"errors\":[{\"code\":6000,\"name\":\"UnauthorizedAuthority\",\"msg\":\"Only the program authority can perform this action\"},{\"code\":6001,\"name\":\"ActorAlreadyValidated\",\"msg\":\"Actor already has a validated role\"},{\"code\":6002,\"name\":\"PendingActorAlreadyExists\",\"msg\":\"Actor already has a pending registration\"},{\"code\":6003,\"name\":\"InvalidActorAccount\",\"msg\":\"Invalid actor account\"},{\"code\":6004,\"name\":\"InvalidBatchCreatorRole\",\"msg\":\"Only producers can create cacao batches\"},{\"code\":6005,\"name\":\"ActorNotAuthorized\",\"msg\":\"Only validated and active actors can perform this action\"},{\"code\":6006,\"name\":\"InvalidQuantity\",\"msg\":\"Batch quantity must be greater than zero\"},{\"code\":6007,\"name\":\"FieldTooLong\",\"msg\":\"String field exceeds maximum allowed length\"},{\"code\":6008,\"name\":\"InvalidBatchStatusTransition\",\"msg\":\"Invalid batch status transition\"},{\"code\":6009,\"name\":\"OnlyAuthorityCanIssueCertificates\",\"msg\":\"Only the authority can issue certificates\"},{\"code\":6010,\"name\":\"OnlyAuthorityCanRevokeCertificates\",\"msg\":\"Only the authority can revoke certificates\"},{\"code\":6011,\"name\":\"CertificateAlreadyRevoked\",\"msg\":\"Certificate is already revoked\"},{\"code\":6012,\"name\":\"CertificateAlreadyExpired\",\"msg\":\"Certificate is already expired\"},{\"code\":6013,\"name\":\"InvalidEventActorRole\",\"msg\":\"The actor role is not allowed to record this event\"},{\"code\":6014,\"name\":\"InvalidBatchAccount\",\"msg\":\"The batch does not exist or does not belong to the expected PDA\"},{\"code\":6015,\"name\":\"InactiveActor\",\"msg\":\"The actor is inactive\"},{\"code\":6016,\"name\":\"ProgramAlreadyInitialized\",\"msg\":\"The program has already been initialized\"}],\"types\":[{\"name\":\"Actor\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"wallet\",\"type\":\"pubkey\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"role\",\"type\":{\"defined\":{\"name\":\"ActorRole\"}}},{\"name\":\"location\",\"type\":\"string\"},{\"name\":\"is_active\",\"type\":\"bool\"},{\"name\":\"created_at\",\"type\":\"i64\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"ActorRole\",\"type\":{\"kind\":\"enum\",\"variants\":[{\"name\":\"Producer\"},{\"name\":\"Processor\"},{\"name\":\"Transporter\"},{\"name\":\"Exporter\"},{\"name\":\"Authority\"},{\"name\":\"Auditor\"}]}},{\"name\":\"Batch\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"id\",\"type\":\"u64\"},{\"name\":\"creator\",\"type\":\"pubkey\"},{\"name\":\"product\",\"type\":\"string\"},{\"name\":\"origin\",\"type\":\"string\"},{\"name\":\"quantity\",\"type\":\"u64\"},{\"name\":\"unit\",\"type\":\"string\"},{\"name\":\"harvest_date\",\"type\":\"i64\"},{\"name\":\"created_at\",\"type\":\"i64\"},{\"name\":\"status\",\"type\":{\"defined\":{\"name\":\"BatchStatus\"}}},{\"name\":\"event_count\",\"type\":\"u32\"},{\"name\":\"certificate_count\",\"type\":\"u32\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"BatchEvent\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"id\",\"type\":\"u64\"},{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"event_type\",\"type\":\"string\"},{\"name\":\"actor\",\"type\":\"pubkey\"},{\"name\":\"location\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"i64\"},{\"name\":\"metadata\",\"type\":\"string\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"BatchStatus\",\"type\":{\"kind\":\"enum\",\"variants\":[{\"name\":\"Created\"},{\"name\":\"Harvested\"},{\"name\":\"Fermented\"},{\"name\":\"Dried\"},{\"name\":\"InTransit\"},{\"name\":\"Stored\"},{\"name\":\"Certified\"},{\"name\":\"Exported\"},{\"name\":\"Delivered\"}]}},{\"name\":\"Certificate\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"id\",\"type\":\"u64\"},{\"name\":\"batch_id\",\"type\":\"u64\"},{\"name\":\"certificate_type\",\"type\":\"string\"},{\"name\":\"issuer\",\"type\":\"string\"},{\"name\":\"document_hash\",\"type\":\"string\"},{\"name\":\"issued_date\",\"type\":\"i64\"},{\"name\":\"expiry_date\",\"type\":\"i64\"},{\"name\":\"status\",\"type\":{\"defined\":{\"name\":\"CertificateStatus\"}}},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"CertificateStatus\",\"type\":{\"kind\":\"enum\",\"variants\":[{\"name\":\"Valid\"},{\"name\":\"Expired\"},{\"name\":\"Revoked\"}]}},{\"name\":\"PendingActor\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"wallet\",\"type\":\"pubkey\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"requested_role\",\"type\":{\"defined\":{\"name\":\"ActorRole\"}}},{\"name\":\"location\",\"type\":\"string\"},{\"name\":\"created_at\",\"type\":\"i64\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"ProgramConfig\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"authority\",\"type\":\"pubkey\"},{\"name\":\"next_batch_id\",\"type\":\"u64\"},{\"name\":\"next_event_id\",\"type\":\"u64\"},{\"name\":\"next_certificate_id\",\"type\":\"u64\"},{\"name\":\"initialized\",\"type\":\"bool\"},{\"name\":\"bump\",\"type\":\"u8\"}]}}]}"));}),
"[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgramProvider",
    ()=>ProgramProvider,
    "useProgram",
    ()=>useProgram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$types$2f$traza$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/types/traza.json (json)");
"use client";
;
;
;
;
;
const ProgramContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({
    program: null,
    provider: null,
    isReady: false
});
function ProgramProvider({ children }) {
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const anchorWallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorWallet"])();
    const { program, provider, isReady } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!anchorWallet) {
            return {
                program: null,
                provider: null,
                isReady: false
            };
        }
        try {
            const newProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, anchorWallet, {
                commitment: "confirmed"
            });
            const newProgram = new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$types$2f$traza$2e$json__$28$json$29$__["default"], newProvider);
            return {
                program: newProgram,
                provider: newProvider,
                isReady: true
            };
        } catch (error) {
            console.error("Failed to initialize program:", error);
            return {
                program: null,
                provider: null,
                isReady: false
            };
        }
    }, [
        connection,
        anchorWallet
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgramContext.Provider, {
        value: {
            program,
            provider,
            isReady
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pfm-rust-solana-2026/web/lib/context/ProgramProvider.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function useProgram() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(ProgramContext);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/pfm-rust-solana-2026/web/components/WalletChangeDetector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletChangeDetector",
    ()=>WalletChangeDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function WalletChangeDetector() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { publicKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const previousPublicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentPublicKey = publicKey?.toString() ?? null;
        // If publicKey changed (not just initialization)
        if (previousPublicKey.current !== null && previousPublicKey.current !== currentPublicKey) {
            // Wallet changed, redirect to home
            router.push("/");
        }
        previousPublicKey.current = currentPublicKey;
    }, [
        publicKey,
        router
    ]);
    return null; // This component doesn't render anything
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba4351b9._.js.map