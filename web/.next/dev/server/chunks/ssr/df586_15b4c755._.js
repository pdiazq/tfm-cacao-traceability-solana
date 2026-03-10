module.exports = [
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found'; //# sourceMappingURL=segment.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    getStaticShellDisallowedDynamicReasons: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackDynamicHoleInRuntimeShell: null,
    trackDynamicHoleInStaticShell: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    getStaticShellDisallowedDynamicReasons: function() {
        return getStaticShellDisallowedDynamicReasons;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackDynamicHoleInRuntimeShell: function() {
        return trackDynamicHoleInRuntimeShell;
    },
    trackDynamicHoleInStaticShell: function() {
        return trackDynamicHoleInStaticShell;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        dynamicMetadata: null,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInRuntimeShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function trackDynamicHoleInStaticShell(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicMetadata = error;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    // TODO go back to owner stack here if available. This is temporarily using componentStack to get the right
    //
    error.stack = error.name + ': ' + message + (ownerStack || componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function getStaticShellDisallowedDynamicReasons(workStore, prelude, dynamicValidation) {
    if (dynamicValidation.hasSuspenseAboveBody) {
        // This route has opted into allowing fully dynamic rendering
        // by including a Suspense boundary above the body. In this case
        // a lack of a shell is not considered disallowed so we simply return
        return [];
    }
    if (prelude !== 0) {
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            return dynamicErrors;
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            return [
                Object.defineProperty(new _invarianterror.InvariantError(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
                    value: "E936",
                    enumerable: false,
                    configurable: true
                })
            ];
        }
    } else {
        // We have a prelude but we might still have dynamic metadata without any other dynamic access
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.dynamicErrors.length === 0 && dynamicValidation.dynamicMetadata) {
            return [
                dynamicValidation.dynamicMetadata
            ];
        }
    }
    // We had a non-empty prelude and there are no dynamic holes
    return [];
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/readonly-url-search-params.js [app-ssr] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // We need the same class that was used to instantiate the context value
    // Otherwise instanceof checks will fail in usercode
    ReadonlyURLSearchParams: function() {
        return _hooksclientcontextsharedruntime.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
const useDynamicSearchParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicSearchParams : "TURBOPACK unreachable";
function useSearchParams() {
    useDynamicSearchParams?.('useSearchParams()');
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _hooksclientcontextsharedruntime.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.searchParams);
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams?.('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    const pathname = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.pathname);
        }
    }
    return pathname;
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams?.('useParams()');
    const params = (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            return (0, _react.use)(navigationPromises.params);
        }
    }
    return params;
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && 'use' in _react.default) {
        const navigationPromises = (0, _react.use)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
        if (navigationPromises) {
            const promise = navigationPromises.selectedLayoutSegmentsPromises?.get(parallelRouteKey);
            if (promise) {
                // We should always have a promise here, but if we don't, it's not worth erroring over.
                // We just won't be able to instrument it, but can still provide the value.
                return (0, _react.use)(promise);
            }
        }
    }
    return (0, _segment.getSelectedLayoutSegmentPath)(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    useDynamicRouteParams?.('useSelectedLayoutSegment()');
    const navigationPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    // Instrument with Suspense DevTools (dev-only)
    if (("TURBOPACK compile-time value", "development") !== 'production' && navigationPromises && 'use' in _react.default) {
        const promise = navigationPromises.selectedLayoutSegmentPromises?.get(parallelRouteKey);
        if (promise) {
            // We should always have a promise here, but if we don't, it's not worth erroring over.
            // We just won't be able to instrument it, but can still provide the value.
            return (0, _react.use)(promise);
        }
    }
    return (0, _segment.computeSelectedLayoutSegment)(selectedLayoutSegments, parallelRouteKey);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "crypto",
    ()=>crypto
]);
/**
 * Internal webcrypto alias.
 * We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
 * Falls back to Node.js built-in crypto for Node.js <=v14.
 * See utils.ts for details.
 * @module
 */ // @ts-ignore
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const crypto = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'webcrypto' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__.webcrypto : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ === 'object' && 'randomBytes' in __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ : undefined; //# sourceMappingURL=cryptoNode.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hash",
    ()=>Hash,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "byteSwapIfBE",
    ()=>byteSwapIfBE,
    "bytesToHex",
    ()=>bytesToHex,
    "bytesToUtf8",
    ()=>bytesToUtf8,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "createHasher",
    ()=>createHasher,
    "createOptHasher",
    ()=>createOptHasher,
    "createView",
    ()=>createView,
    "createXOFer",
    ()=>createXOFer,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "toBytes",
    ()=>toBytes,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "wrapConstructor",
    ()=>wrapConstructor,
    "wrapConstructorWithOpts",
    ()=>wrapConstructorWithOpts,
    "wrapXOFConstructorWithOpts",
    ()=>wrapXOFConstructorWithOpts
]);
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/cryptoNode.js [app-ssr] (ecmascript)");
;
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n);
const byteSwapIfBE = swap8IfBE;
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // @ts-ignore
    if (hasHexBuiltin) return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
const nextTick = async ()=>{};
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
function kdfInputToBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
class Hash {
}
function createHasher(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function createOptHasher(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function createXOFer(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
const wrapConstructor = createHasher;
const wrapConstructorWithOpts = createOptHasher;
const wrapXOFConstructorWithOpts = createXOFer;
function randomBytes(bytesLength = 32) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"] && typeof __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].randomBytes === 'function') {
        return Uint8Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$cryptoNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crypto"].randomBytes(bytesLength));
    }
    throw new Error('crypto.getRandomValues must be defined');
} //# sourceMappingURL=utils.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chi",
    ()=>Chi,
    "HashMD",
    ()=>HashMD,
    "Maj",
    ()=>Maj,
    "SHA224_IV",
    ()=>SHA224_IV,
    "SHA256_IV",
    ()=>SHA256_IV,
    "SHA384_IV",
    ()=>SHA384_IV,
    "SHA512_IV",
    ()=>SHA512_IV,
    "setBigUint64",
    ()=>setBigUint64
]);
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer.subarray(pos));
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
const SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const SHA224_IV = /* @__PURE__ */ Uint32Array.from([
    0xc1059ed8,
    0x367cd507,
    0x3070dd17,
    0xf70e5939,
    0xffc00b31,
    0x68581511,
    0x64f98fa7,
    0xbefa4fa4
]);
const SHA384_IV = /* @__PURE__ */ Uint32Array.from([
    0xcbbb9d5d,
    0xc1059ed8,
    0x629a292a,
    0x367cd507,
    0x9159015a,
    0x3070dd17,
    0x152fecd8,
    0xf70e5939,
    0x67332667,
    0xffc00b31,
    0x8eb44a87,
    0x68581511,
    0xdb0c2e0d,
    0x64f98fa7,
    0x47b5481d,
    0xbefa4fa4
]);
const SHA512_IV = /* @__PURE__ */ Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]); //# sourceMappingURL=_md.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fromBig",
    ()=>fromBig,
    "rotlBH",
    ()=>rotlBH,
    "rotlBL",
    ()=>rotlBL,
    "rotlSH",
    ()=>rotlSH,
    "rotlSL",
    ()=>rotlSL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */ const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l)=>l;
const rotr32L = (h, _l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
const __TURBOPACK__default__export__ = u64;
 //# sourceMappingURL=_u64.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/sha2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHA224",
    ()=>SHA224,
    "SHA256",
    ()=>SHA256,
    "SHA384",
    ()=>SHA384,
    "SHA512",
    ()=>SHA512,
    "SHA512_224",
    ()=>SHA512_224,
    "SHA512_256",
    ()=>SHA512_256,
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256,
    "sha384",
    ()=>sha384,
    "sha512",
    ()=>sha512,
    "sha512_224",
    ()=>sha512_224,
    "sha512_256",
    ()=>sha512_256
]);
/**
 * SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
 * SHA256 is the fastest hash implementable in JS, even faster than Blake3.
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Round constants:
 * First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
 */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Reusable temporary buffer. "W" comes straight from spec. */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen = 32){
        super(64, outputLen, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][0] | 0;
        this.B = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][1] | 0;
        this.C = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][2] | 0;
        this.D = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][3] | 0;
        this.E = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][4] | 0;
        this.F = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][5] | 0;
        this.G = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][6] | 0;
        this.H = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256_IV"][7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(SHA256_W);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
    }
}
class SHA224 extends SHA256 {
    constructor(){
        super(28);
        this.A = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][0] | 0;
        this.B = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][1] | 0;
        this.C = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][2] | 0;
        this.D = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][3] | 0;
        this.E = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][4] | 0;
        this.F = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][5] | 0;
        this.G = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][6] | 0;
        this.H = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224_IV"][7] | 0;
    }
}
// SHA2-512 is slower than sha256 in js because u64 operations are slow.
// Round contants
// First 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409
// prettier-ignore
const K512 = /* @__PURE__ */ (()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["split"]([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = /* @__PURE__ */ (()=>K512[0])();
const SHA512_Kl = /* @__PURE__ */ (()=>K512[1])();
// Reusable temporary buffers
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(outputLen = 64){
        super(128, outputLen, 16, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][0] | 0;
        this.Al = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][1] | 0;
        this.Bh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][2] | 0;
        this.Bl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][3] | 0;
        this.Ch = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][4] | 0;
        this.Cl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][5] | 0;
        this.Dh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][6] | 0;
        this.Dl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][7] | 0;
        this.Eh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][8] | 0;
        this.El = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][9] | 0;
        this.Fh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][10] | 0;
        this.Fl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][11] | 0;
        this.Gh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][12] | 0;
        this.Gl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][13] | 0;
        this.Hh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][14] | 0;
        this.Hl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512_IV"][15] | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSH"](W15h, W15l, 7);
            const s0l = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 1) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W15h, W15l, 8) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSL"](W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSH"](W2h, W2l, 6);
            const s1l = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](W2h, W2l, 19) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](W2h, W2l, 61) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shrSL"](W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add4L"](s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add4H"](SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Eh, El, 41);
            const sigma1l = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 14) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Eh, El, 18) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add5L"](Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add5H"](T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSH"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBH"](Ah, Al, 39);
            const sigma0l = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrSL"](Ah, Al, 28) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 34) ^ __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotrBL"](Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add3L"](T1l, sigma0l, MAJl);
            Ah = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add3H"](All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super(48);
        this.Ah = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][0] | 0;
        this.Al = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][1] | 0;
        this.Bh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][2] | 0;
        this.Bl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][3] | 0;
        this.Ch = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][4] | 0;
        this.Cl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][5] | 0;
        this.Dh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][6] | 0;
        this.Dl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][7] | 0;
        this.Eh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][8] | 0;
        this.El = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][9] | 0;
        this.Fh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][10] | 0;
        this.Fl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][11] | 0;
        this.Gh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][12] | 0;
        this.Gl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][13] | 0;
        this.Hh = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][14] | 0;
        this.Hl = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA384_IV"][15] | 0;
    }
}
/**
 * Truncated SHA512/256 and SHA512/224.
 * SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
 * Then t hashes string to produce result IV.
 * See `test/misc/sha2-gen-iv.js`.
 */ /** SHA512/224 IV */ const T224_IV = /* @__PURE__ */ Uint32Array.from([
    0x8c3d37c8,
    0x19544da2,
    0x73e19966,
    0x89dcd4d6,
    0x1dfab7ae,
    0x32ff9c82,
    0x679dd514,
    0x582f9fcf,
    0x0f6d2b69,
    0x7bd44da8,
    0x77e36f73,
    0x04c48942,
    0x3f9d85a8,
    0x6a1d36c8,
    0x1112e6ad,
    0x91d692a1
]);
/** SHA512/256 IV */ const T256_IV = /* @__PURE__ */ Uint32Array.from([
    0x22312194,
    0xfc2bf72c,
    0x9f555fa3,
    0xc84c64c2,
    0x2393b86b,
    0x6f53b151,
    0x96387719,
    0x5940eabd,
    0x96283ee2,
    0xa88effe3,
    0xbe5e1e25,
    0x53863992,
    0x2b0199fc,
    0x2c85b8aa,
    0x0eb72ddc,
    0x81c52ca2
]);
class SHA512_224 extends SHA512 {
    constructor(){
        super(28);
        this.Ah = T224_IV[0] | 0;
        this.Al = T224_IV[1] | 0;
        this.Bh = T224_IV[2] | 0;
        this.Bl = T224_IV[3] | 0;
        this.Ch = T224_IV[4] | 0;
        this.Cl = T224_IV[5] | 0;
        this.Dh = T224_IV[6] | 0;
        this.Dl = T224_IV[7] | 0;
        this.Eh = T224_IV[8] | 0;
        this.El = T224_IV[9] | 0;
        this.Fh = T224_IV[10] | 0;
        this.Fl = T224_IV[11] | 0;
        this.Gh = T224_IV[12] | 0;
        this.Gl = T224_IV[13] | 0;
        this.Hh = T224_IV[14] | 0;
        this.Hl = T224_IV[15] | 0;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super(32);
        this.Ah = T256_IV[0] | 0;
        this.Al = T256_IV[1] | 0;
        this.Bh = T256_IV[2] | 0;
        this.Bl = T256_IV[3] | 0;
        this.Ch = T256_IV[4] | 0;
        this.Cl = T256_IV[5] | 0;
        this.Dh = T256_IV[6] | 0;
        this.Dl = T256_IV[7] | 0;
        this.Eh = T256_IV[8] | 0;
        this.El = T256_IV[9] | 0;
        this.Fh = T256_IV[10] | 0;
        this.Fl = T256_IV[11] | 0;
        this.Gh = T256_IV[12] | 0;
        this.Gl = T256_IV[13] | 0;
        this.Hh = T256_IV[14] | 0;
        this.Hl = T256_IV[15] | 0;
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA256());
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA224());
const sha512 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512());
const sha384 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA384());
const sha512_256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512_256());
const sha512_224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new SHA512_224()); //# sourceMappingURL=sha2.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHA224",
    ()=>SHA224,
    "SHA256",
    ()=>SHA256,
    "sha224",
    ()=>sha224,
    "sha256",
    ()=>sha256
]);
/**
 * SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
 *
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 *
 * Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 * @deprecated
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/sha2.js [app-ssr] (ecmascript)");
;
const SHA256 = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256"];
const sha256 = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"];
const SHA224 = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA224"];
const sha224 = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha224"]; //# sourceMappingURL=sha256.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake256",
    ()=>shake256
]);
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
 * [Website](https://keccak.team/keccak.html),
 * [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/_u64.js [app-ssr] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = [];
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlBH"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlSH"])(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlBL"])(h, l, s) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_u64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotlSL"])(h, l, s);
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(B);
}
class Keccak extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anumber"])(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        // 0 < blockLen < 200
        if (!(0 < blockLen && blockLen < 200)) throw new Error('only keccak-f1600 function is supported');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { blockLen, state } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen));
const sha3_224 = /* @__PURE__ */ (()=>gen(0x06, 144, 224 / 8))();
const sha3_256 = /* @__PURE__ */ (()=>gen(0x06, 136, 256 / 8))();
const sha3_384 = /* @__PURE__ */ (()=>gen(0x06, 104, 384 / 8))();
const sha3_512 = /* @__PURE__ */ (()=>gen(0x06, 72, 512 / 8))();
const keccak_224 = /* @__PURE__ */ (()=>gen(0x01, 144, 224 / 8))();
const keccak_256 = /* @__PURE__ */ (()=>gen(0x01, 136, 256 / 8))();
const keccak_384 = /* @__PURE__ */ (()=>gen(0x01, 104, 384 / 8))();
const keccak_512 = /* @__PURE__ */ (()=>gen(0x01, 72, 512 / 8))();
const genShake = (suffix, blockLen, outputLen)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createXOFer"])((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
const shake128 = /* @__PURE__ */ (()=>genShake(0x1f, 168, 128 / 8))();
const shake256 = /* @__PURE__ */ (()=>genShake(0x1f, 136, 256 / 8))(); //# sourceMappingURL=sha3.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/hmac.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HMAC",
    ()=>HMAC,
    "hmac",
    ()=>hmac
]);
/**
 * HMAC: RFC2104 message authentication code.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
class HMAC extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ahash"])(hash);
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clean"])(pad);
    }
    update(buf) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abytes"])(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new HMAC(hash, key); //# sourceMappingURL=hmac.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/borsh/node_modules/base-x/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)").Buffer;
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) {
            source = _Buffer.from(source);
        }
        if (!_Buffer.isBuffer(source)) {
            throw new TypeError('Expected Buffer');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return _Buffer.alloc(0);
        }
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            var charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            var carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0x00, 0, zeroes);
        var j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/borsh/node_modules/bs58/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var basex = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/borsh/node_modules/base-x/src/index.js [app-ssr] (ecmascript)");
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
module.exports = basex(ALPHABET);
}),
"[project]/pfm-rust-solana-2026/web/node_modules/borsh/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __decorate = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
const bn_js_1 = __importDefault(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/borsh/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)"));
const bs58_1 = __importDefault(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/borsh/node_modules/bs58/index.js [app-ssr] (ecmascript)"));
// TODO: Make sure this polyfill not included when not required
const encoding = __importStar(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/text-encoding-utf-8/lib/encoding.lib.js [app-ssr] (ecmascript)"));
const ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
const textDecoder = new ResolvedTextDecoder("utf-8", {
    fatal: true
});
function baseEncode(value) {
    if (typeof value === "string") {
        value = Buffer.from(value, "utf8");
    }
    return bs58_1.default.encode(Buffer.from(value));
}
exports.baseEncode = baseEncode;
function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
}
exports.baseDecode = baseDecode;
const INITIAL_LENGTH = 1024;
class BorshError extends Error {
    constructor(message){
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        // NOTE: Modifying message directly as jest doesn't use .toString()
        this.message = this.originalMessage + ": " + this.fieldPath.join(".");
    }
}
exports.BorshError = BorshError;
/// Binary encoder.
class BinaryWriter {
    constructor(){
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
    }
    maybeResize() {
        if (this.buf.length < 16 + this.length) {
            this.buf = Buffer.concat([
                this.buf,
                Buffer.alloc(INITIAL_LENGTH)
            ]);
        }
    }
    writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
    }
    writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
    }
    writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
    }
    writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
    }
    writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
    }
    writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
    }
    writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
    }
    writeBuffer(buffer) {
        // Buffer.from is needed as this.buf.subarray can return plain Uint8Array in browser
        this.buf = Buffer.concat([
            Buffer.from(this.buf.subarray(0, this.length)),
            buffer,
            Buffer.alloc(INITIAL_LENGTH)
        ]);
        this.length += buffer.length;
    }
    writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, "utf8");
        this.writeU32(b.length);
        this.writeBuffer(b);
    }
    writeFixedArray(array) {
        this.writeBuffer(Buffer.from(array));
    }
    writeArray(array, fn) {
        this.maybeResize();
        this.writeU32(array.length);
        for (const elem of array){
            this.maybeResize();
            fn(elem);
        }
    }
    toArray() {
        return this.buf.subarray(0, this.length);
    }
}
exports.BinaryWriter = BinaryWriter;
function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function(...args) {
        try {
            return originalMethod.apply(this, args);
        } catch (e) {
            if (e instanceof RangeError) {
                const code = e.code;
                if ([
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    "ERR_OUT_OF_RANGE"
                ].indexOf(code) >= 0) {
                    throw new BorshError("Reached the end of buffer when deserializing");
                }
            }
            throw e;
        }
    };
}
class BinaryReader {
    constructor(buf){
        this.buf = buf;
        this.offset = 0;
    }
    readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, "le");
    }
    readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, "le");
    }
    readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, "le");
    }
    readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, "le");
    }
    readBuffer(len) {
        if (this.offset + len > this.buf.length) {
            throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        }
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
    }
    readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
            // NOTE: Using TextDecoder to fail on invalid UTF-8
            return textDecoder.decode(buf);
        } catch (e) {
            throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
    }
    readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
    }
    readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for(let i = 0; i < len; ++i){
            result.push(fn());
        }
        return result;
    }
}
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU8", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU16", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU32", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU64", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU128", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU256", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU512", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readString", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readFixedArray", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readArray", null);
exports.BinaryReader = BinaryReader;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
        // TODO: Handle missing values properly (make sure they never result in just skipped write)
        if (typeof fieldType === "string") {
            writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        } else if (fieldType instanceof Array) {
            if (typeof fieldType[0] === "number") {
                if (value.length !== fieldType[0]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                }
                writer.writeFixedArray(value);
            } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
                if (value.length !== fieldType[1]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                }
                for(let i = 0; i < fieldType[1]; i++){
                    serializeField(schema, null, value[i], fieldType[0], writer);
                }
            } else {
                writer.writeArray(value, (item)=>{
                    serializeField(schema, fieldName, item, fieldType[0], writer);
                });
            }
        } else if (fieldType.kind !== undefined) {
            switch(fieldType.kind){
                case "option":
                    {
                        if (value === null || value === undefined) {
                            writer.writeU8(0);
                        } else {
                            writer.writeU8(1);
                            serializeField(schema, fieldName, value, fieldType.type, writer);
                        }
                        break;
                    }
                case "map":
                    {
                        writer.writeU32(value.size);
                        value.forEach((val, key)=>{
                            serializeField(schema, fieldName, key, fieldType.key, writer);
                            serializeField(schema, fieldName, val, fieldType.value, writer);
                        });
                        break;
                    }
                default:
                    throw new BorshError(`FieldType ${fieldType} unrecognized`);
            }
        } else {
            serializeStruct(schema, value, writer);
        }
    } catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === "function") {
        obj.borshSerialize(writer);
        return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) {
        throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    }
    if (structSchema.kind === "struct") {
        structSchema.fields.map(([fieldName, fieldType])=>{
            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
        });
    } else if (structSchema.kind === "enum") {
        const name = obj[structSchema.field];
        for(let idx = 0; idx < structSchema.values.length; ++idx){
            const [fieldName, fieldType] = structSchema.values[idx];
            if (fieldName === name) {
                writer.writeU8(idx);
                serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                break;
            }
        }
    } else {
        throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
    }
}
/// Serialize given object using schema of the form:
/// { class_name -> [ [field_name, field_type], .. ], .. }
function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
}
exports.serialize = serialize;
function deserializeField(schema, fieldName, fieldType, reader) {
    try {
        if (typeof fieldType === "string") {
            return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        }
        if (fieldType instanceof Array) {
            if (typeof fieldType[0] === "number") {
                return reader.readFixedArray(fieldType[0]);
            } else if (typeof fieldType[1] === "number") {
                const arr = [];
                for(let i = 0; i < fieldType[1]; i++){
                    arr.push(deserializeField(schema, null, fieldType[0], reader));
                }
                return arr;
            } else {
                return reader.readArray(()=>deserializeField(schema, fieldName, fieldType[0], reader));
            }
        }
        if (fieldType.kind === "option") {
            const option = reader.readU8();
            if (option) {
                return deserializeField(schema, fieldName, fieldType.type, reader);
            }
            return undefined;
        }
        if (fieldType.kind === "map") {
            let map = new Map();
            const length = reader.readU32();
            for(let i = 0; i < length; i++){
                const key = deserializeField(schema, fieldName, fieldType.key, reader);
                const val = deserializeField(schema, fieldName, fieldType.value, reader);
                map.set(key, val);
            }
            return map;
        }
        return deserializeStruct(schema, fieldType, reader);
    } catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === "function") {
        return classType.borshDeserialize(reader);
    }
    const structSchema = schema.get(classType);
    if (!structSchema) {
        throw new BorshError(`Class ${classType.name} is missing in schema`);
    }
    if (structSchema.kind === "struct") {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields){
            result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        }
        return new classType(result);
    }
    if (structSchema.kind === "enum") {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) {
            throw new BorshError(`Enum index: ${idx} is out of range`);
        }
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({
            [fieldName]: fieldValue
        });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
}
/// Deserializes object from bytes using schema.
function deserialize(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer.length) {
        throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
    }
    return result;
}
exports.deserialize = deserialize;
/// Deserializes object from bytes using schema, without checking the length read
function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    return deserializeStruct(schema, classType, reader);
}
exports.deserializeUnchecked = deserializeUnchecked;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/node_modules/base-x/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/safe-buffer/index.js [app-ssr] (ecmascript)").Buffer;
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) {
            source = _Buffer.from(source);
        }
        if (!_Buffer.isBuffer(source)) {
            throw new TypeError('Expected Buffer');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return _Buffer.alloc(0);
        }
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            var charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            var carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0x00, 0, zeroes);
        var j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/node_modules/bs58/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var basex = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/node_modules/base-x/src/index.js [app-ssr] (ecmascript)");
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
module.exports = basex(ALPHABET);
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/borsh/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.struct = exports.f64 = exports.f32 = exports.i32 = exports.u32 = exports.i16 = exports.u16 = exports.i8 = exports.u8 = void 0;
exports.u64 = u64;
exports.i64 = i64;
exports.u128 = u128;
exports.i128 = i128;
exports.u256 = u256;
exports.i256 = i256;
exports.publicKey = publicKey;
exports.option = option;
exports.bool = bool;
exports.vec = vec;
exports.tagged = tagged;
exports.vecU8 = vecU8;
exports.str = str;
exports.rustEnum = rustEnum;
exports.array = array;
exports.map = map;
const buffer_layout_1 = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/buffer-layout/lib/Layout.js [app-ssr] (ecmascript)");
const web3_js_1 = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
const bn_js_1 = __importDefault(__turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/borsh/node_modules/bn.js/lib/bn.js [app-ssr] (ecmascript)"));
var buffer_layout_2 = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/buffer-layout/lib/Layout.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "u8", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.u8;
    }
});
Object.defineProperty(exports, "i8", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.s8;
    }
});
Object.defineProperty(exports, "u16", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.u16;
    }
});
Object.defineProperty(exports, "i16", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.s16;
    }
});
Object.defineProperty(exports, "u32", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.u32;
    }
});
Object.defineProperty(exports, "i32", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.s32;
    }
});
Object.defineProperty(exports, "f32", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.f32;
    }
});
Object.defineProperty(exports, "f64", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.f64;
    }
});
Object.defineProperty(exports, "struct", {
    enumerable: true,
    get: function() {
        return buffer_layout_2.struct;
    }
});
class BNLayout extends buffer_layout_1.Layout {
    constructor(span, signed, property){
        super(span, property);
        this.blob = (0, buffer_layout_1.blob)(span);
        this.signed = signed;
    }
    decode(b, offset = 0) {
        const num = new bn_js_1.default(this.blob.decode(b, offset), 10, "le");
        if (this.signed) {
            return num.fromTwos(this.span * 8).clone();
        }
        return num;
    }
    encode(src, b, offset = 0) {
        if (this.signed) {
            src = src.toTwos(this.span * 8);
        }
        return this.blob.encode(src.toArrayLike(Buffer, "le", this.span), b, offset);
    }
}
function u64(property) {
    return new BNLayout(8, false, property);
}
function i64(property) {
    return new BNLayout(8, true, property);
}
function u128(property) {
    return new BNLayout(16, false, property);
}
function i128(property) {
    return new BNLayout(16, true, property);
}
function u256(property) {
    return new BNLayout(32, false, property);
}
function i256(property) {
    return new BNLayout(32, true, property);
}
class WrappedLayout extends buffer_layout_1.Layout {
    constructor(layout, decoder, encoder, property){
        super(layout.span, property);
        this.layout = layout;
        this.decoder = decoder;
        this.encoder = encoder;
    }
    decode(b, offset) {
        return this.decoder(this.layout.decode(b, offset));
    }
    encode(src, b, offset) {
        return this.layout.encode(this.encoder(src), b, offset);
    }
    getSpan(b, offset) {
        return this.layout.getSpan(b, offset);
    }
}
function publicKey(property) {
    return new WrappedLayout((0, buffer_layout_1.blob)(32), (b)=>new web3_js_1.PublicKey(b), (key)=>key.toBuffer(), property);
}
class OptionLayout extends buffer_layout_1.Layout {
    constructor(layout, property){
        super(-1, property);
        this.layout = layout;
        this.discriminator = (0, buffer_layout_1.u8)();
    }
    encode(src, b, offset = 0) {
        if (src === null || src === undefined) {
            return this.discriminator.encode(0, b, offset);
        }
        this.discriminator.encode(1, b, offset);
        return this.layout.encode(src, b, offset + 1) + 1;
    }
    decode(b, offset = 0) {
        const discriminator = this.discriminator.decode(b, offset);
        if (discriminator === 0) {
            return null;
        } else if (discriminator === 1) {
            return this.layout.decode(b, offset + 1);
        }
        throw new Error("Invalid option " + this.property);
    }
    getSpan(b, offset = 0) {
        const discriminator = this.discriminator.decode(b, offset);
        if (discriminator === 0) {
            return 1;
        } else if (discriminator === 1) {
            return this.layout.getSpan(b, offset + 1) + 1;
        }
        throw new Error("Invalid option " + this.property);
    }
}
function option(layout, property) {
    return new OptionLayout(layout, property);
}
function bool(property) {
    return new WrappedLayout((0, buffer_layout_1.u8)(), decodeBool, encodeBool, property);
}
function decodeBool(value) {
    if (value === 0) {
        return false;
    } else if (value === 1) {
        return true;
    }
    throw new Error("Invalid bool: " + value);
}
function encodeBool(value) {
    return value ? 1 : 0;
}
function vec(elementLayout, property) {
    const length = (0, buffer_layout_1.u32)("length");
    const layout = (0, buffer_layout_1.struct)([
        length,
        (0, buffer_layout_1.seq)(elementLayout, (0, buffer_layout_1.offset)(length, -length.span), "values")
    ]);
    return new WrappedLayout(layout, ({ values })=>values, (values)=>({
            values
        }), property);
}
function tagged(tag, layout, property) {
    const wrappedLayout = (0, buffer_layout_1.struct)([
        u64("tag"),
        layout.replicate("data")
    ]);
    function decodeTag({ tag: receivedTag, data }) {
        if (!receivedTag.eq(tag)) {
            throw new Error("Invalid tag, expected: " + tag.toString("hex") + ", got: " + receivedTag.toString("hex"));
        }
        return data;
    }
    return new WrappedLayout(wrappedLayout, decodeTag, (data)=>({
            tag,
            data
        }), property);
}
function vecU8(property) {
    const length = (0, buffer_layout_1.u32)("length");
    const layout = (0, buffer_layout_1.struct)([
        length,
        (0, buffer_layout_1.blob)((0, buffer_layout_1.offset)(length, -length.span), "data")
    ]);
    return new WrappedLayout(layout, ({ data })=>data, (data)=>({
            data
        }), property);
}
function str(property) {
    return new WrappedLayout(vecU8(), (data)=>data.toString("utf-8"), (s)=>Buffer.from(s, "utf-8"), property);
}
function rustEnum(variants, property, discriminant) {
    const unionLayout = (0, buffer_layout_1.union)(discriminant !== null && discriminant !== void 0 ? discriminant : (0, buffer_layout_1.u8)(), property);
    variants.forEach((variant, index)=>unionLayout.addVariant(index, variant, variant.property));
    return unionLayout;
}
function array(elementLayout, length, property) {
    const layout = (0, buffer_layout_1.struct)([
        (0, buffer_layout_1.seq)(elementLayout, length, "values")
    ]);
    return new WrappedLayout(layout, ({ values })=>values, (values)=>({
            values
        }), property);
}
class MapEntryLayout extends buffer_layout_1.Layout {
    constructor(keyLayout, valueLayout, property){
        super(keyLayout.span + valueLayout.span, property);
        this.keyLayout = keyLayout;
        this.valueLayout = valueLayout;
    }
    decode(b, offset) {
        offset = offset || 0;
        const key = this.keyLayout.decode(b, offset);
        const value = this.valueLayout.decode(b, offset + this.keyLayout.getSpan(b, offset));
        return [
            key,
            value
        ];
    }
    encode(src, b, offset) {
        offset = offset || 0;
        const keyBytes = this.keyLayout.encode(src[0], b, offset);
        const valueBytes = this.valueLayout.encode(src[1], b, offset + keyBytes);
        return keyBytes + valueBytes;
    }
    getSpan(b, offset) {
        return this.keyLayout.getSpan(b, offset) + this.valueLayout.getSpan(b, offset);
    }
}
function map(keyLayout, valueLayout, property) {
    const length = (0, buffer_layout_1.u32)("length");
    const layout = (0, buffer_layout_1.struct)([
        length,
        (0, buffer_layout_1.seq)(new MapEntryLayout(keyLayout, valueLayout), (0, buffer_layout_1.offset)(length, -length.span), "values")
    ]);
    return new WrappedLayout(layout, ({ values })=>new Map(values), (values)=>({
            values: Array.from(values.entries())
        }), property);
} //# sourceMappingURL=index.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@coral-xyz/anchor-errors/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Instruction errors.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = exports.ANCHOR_ERROR__REQUIRE_VIOLATED = exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = exports.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = exports.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = exports.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = exports.ANCHOR_ERROR__CONSTRAINT_SPACE = exports.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = exports.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = exports.ANCHOR_ERROR__CONSTRAINT_ZERO = exports.ANCHOR_ERROR__CONSTRAINT_ADDRESS = exports.ANCHOR_ERROR__CONSTRAINT_CLOSE = exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = exports.ANCHOR_ERROR__CONSTRAINT_STATE = exports.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = exports.ANCHOR_ERROR__CONSTRAINT_SEEDS = exports.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = exports.ANCHOR_ERROR__CONSTRAINT_OWNER = exports.ANCHOR_ERROR__CONSTRAINT_RAW = exports.ANCHOR_ERROR__CONSTRAINT_SIGNER = exports.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = exports.ANCHOR_ERROR__CONSTRAINT_MUT = exports.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = exports.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = exports.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = exports.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = exports.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = exports.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = exports.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = exports.ANCHOR_ERROR__INSTRUCTION_MISSING = void 0;
exports.ANCHOR_ERROR__DEPRECATED = exports.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = exports.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = exports.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = exports.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = exports.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = exports.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = exports.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = exports.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = exports.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = exports.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = exports.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = exports.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = exports.ANCHOR_ERROR__INVALID_PROGRAM_ID = exports.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = exports.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = exports.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = exports.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = exports.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = exports.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = exports.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = exports.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = exports.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = exports.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = void 0;
/** 8 byte instruction identifier not provided. */ exports.ANCHOR_ERROR__INSTRUCTION_MISSING = 100;
/** Fallback functions are not supported. */ exports.ANCHOR_ERROR__INSTRUCTION_FALLBACK_NOT_FOUND = 101;
/** The program could not deserialize the given instruction. */ exports.ANCHOR_ERROR__INSTRUCTION_DID_NOT_DESERIALIZE = 102;
/** The program could not serialize the given instruction. */ exports.ANCHOR_ERROR__INSTRUCTION_DID_NOT_SERIALIZE = 103;
// IDL instruction errors.
/** The program was compiled without idl instructions. */ exports.ANCHOR_ERROR__IDL_INSTRUCTION_STUB = 1000;
/** The transaction was given an invalid program for the IDL instruction. */ exports.ANCHOR_ERROR__IDL_INSTRUCTION_INVALID_PROGRAM = 1001;
/** IDL account must be empty in order to resize, try closing first. */ exports.ANCHOR_ERROR__IDL_ACCOUNT_NOT_EMPTY = 1002;
// Event instructions.
/** The program was compiled without `event-cpi` feature. */ exports.ANCHOR_ERROR__EVENT_INSTRUCTION_STUB = 1500;
// Constraint errors.
/** A mut constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MUT = 2000;
/** A has one constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_HAS_ONE = 2001;
/** A signer constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_SIGNER = 2002;
/** A raw constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_RAW = 2003;
/** An owner constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_OWNER = 2004;
/** A rent exemption constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_RENT_EXEMPT = 2005;
/** A seeds constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_SEEDS = 2006;
/** An executable constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_EXECUTABLE = 2007;
/** Deprecated Error, feel free to replace with something else. */ exports.ANCHOR_ERROR__CONSTRAINT_STATE = 2008;
/** An associated constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED = 2009;
/** An associated init constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_INIT = 2010;
/** A close constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_CLOSE = 2011;
/** An address constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_ADDRESS = 2012;
/** Expected zero account discriminant. */ exports.ANCHOR_ERROR__CONSTRAINT_ZERO = 2013;
/** A token mint constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_MINT = 2014;
/** A token owner constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_OWNER = 2015;
/** A mint mint authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_MINT_AUTHORITY = 2016;
/** A mint freeze authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_FREEZE_AUTHORITY = 2017;
/** A mint decimals constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_DECIMALS = 2018;
/** A space constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_SPACE = 2019;
/** A required account for the constraint is None. */ exports.ANCHOR_ERROR__CONSTRAINT_ACCOUNT_IS_NONE = 2020;
/** A token account token program constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_TOKEN_TOKEN_PROGRAM = 2021;
/** A mint token program constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_TOKEN_PROGRAM = 2022;
/** An associated token account token program constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_ASSOCIATED_TOKEN_TOKEN_PROGRAM = 2023;
/** A group pointer extension constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION = 2024;
/** A group pointer extension authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_AUTHORITY = 2025;
/** A group pointer extension group address constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_POINTER_EXTENSION_GROUP_ADDRESS = 2026;
/** A group member pointer extension constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION = 2027;
/** A group member pointer extension authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_AUTHORITY = 2028;
/** A group member pointer extension group address constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_GROUP_MEMBER_POINTER_EXTENSION_MEMBER_ADDRESS = 2029;
/** A metadata pointer extension constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION = 2030;
/** A metadata pointer extension authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_AUTHORITY = 2031;
/** A metadata pointer extension metadata address constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_METADATA_POINTER_EXTENSION_METADATA_ADDRESS = 2032;
/** A close authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION = 2033;
/** A close authority extension authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_CLOSE_AUTHORITY_EXTENSION_AUTHORITY = 2034;
/** A permanent delegate extension constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION = 2035;
/** A permanent delegate extension delegate constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_PERMANENT_DELEGATE_EXTENSION_DELEGATE = 2036;
/** A transfer hook extension constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION = 2037;
/** A transfer hook extension authority constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_AUTHORITY = 2038;
/** A transfer hook extension transfer hook program id constraint was violated. */ exports.ANCHOR_ERROR__CONSTRAINT_MINT_TRANSFER_HOOK_EXTENSION_PROGRAM_ID = 2039;
// Require errors.
/** A require expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_VIOLATED = 2500;
/** A require_eq expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_EQ_VIOLATED = 2501;
/** A require_keys_eq expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_KEYS_EQ_VIOLATED = 2502;
/** A require_neq expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_NEQ_VIOLATED = 2503;
/** A require_keys_neq expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_KEYS_NEQ_VIOLATED = 2504;
/** A require_gt expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_GT_VIOLATED = 2505;
/** A require_gte expression was violated. */ exports.ANCHOR_ERROR__REQUIRE_GTE_VIOLATED = 2506;
// Account errors.
/** The account discriminator was already set on this account. */ exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_ALREADY_SET = 3000;
/** No 8 byte discriminator was found on the account. */ exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_NOT_FOUND = 3001;
/** 8 byte discriminator did not match what was expected. */ exports.ANCHOR_ERROR__ACCOUNT_DISCRIMINATOR_MISMATCH = 3002;
/** Failed to deserialize the account. */ exports.ANCHOR_ERROR__ACCOUNT_DID_NOT_DESERIALIZE = 3003;
/** Failed to serialize the account. */ exports.ANCHOR_ERROR__ACCOUNT_DID_NOT_SERIALIZE = 3004;
/** Not enough account keys given to the instruction. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_ENOUGH_KEYS = 3005;
/** The given account is not mutable. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_MUTABLE = 3006;
/** The given account is owned by a different program than expected. */ exports.ANCHOR_ERROR__ACCOUNT_OWNED_BY_WRONG_PROGRAM = 3007;
/** Program ID was not as expected. */ exports.ANCHOR_ERROR__INVALID_PROGRAM_ID = 3008;
/** Program account is not executable. */ exports.ANCHOR_ERROR__INVALID_PROGRAM_EXECUTABLE = 3009;
/** The given account did not sign. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_SIGNER = 3010;
/** The given account is not owned by the system program. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_SYSTEM_OWNED = 3011;
/** The program expected this account to be already initialized. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_INITIALIZED = 3012;
/** The given account is not a program data account. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_PROGRAM_DATA = 3013;
/** The given account is not the associated token account. */ exports.ANCHOR_ERROR__ACCOUNT_NOT_ASSOCIATED_TOKEN_ACCOUNT = 3014;
/** The given public key does not match the required sysvar. */ exports.ANCHOR_ERROR__ACCOUNT_SYSVAR_MISMATCH = 3015;
/** The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit. */ exports.ANCHOR_ERROR__ACCOUNT_REALLOC_EXCEEDS_LIMIT = 3016;
/** The account was duplicated for more than one reallocation. */ exports.ANCHOR_ERROR__ACCOUNT_DUPLICATE_REALLOCS = 3017;
// Miscellaneous errors.
/** The declared program id does not match the actual program id. */ exports.ANCHOR_ERROR__DECLARED_PROGRAM_ID_MISMATCH = 4100;
/** You cannot/should not initialize the payer account as a program account. */ exports.ANCHOR_ERROR__TRYING_TO_INIT_PAYER_AS_PROGRAM_ACCOUNT = 4101;
/** The program could not perform the numeric conversion, out of range integral type conversion attempted. */ exports.ANCHOR_ERROR__INVALID_NUMERIC_CONVERSION = 4102;
// Deprecated errors.
/** The API being used is deprecated and should no longer be used. */ exports.ANCHOR_ERROR__DEPRECATED = 5000; //# sourceMappingURL=index.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/pfm-rust-solana-2026/web/node_modules/text-encoding-utf-8/lib/encoding.lib.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.
//
// Utilities
//
/**
 * @param {number} a The number to test.
 * @param {number} min The minimum value in the range, inclusive.
 * @param {number} max The maximum value in the range, inclusive.
 * @return {boolean} True if a >= min and a <= max.
 */ function inRange(a, min, max) {
    return min <= a && a <= max;
}
/**
 * @param {*} o
 * @return {Object}
 */ function ToDictionary(o) {
    if (o === undefined) return {};
    if (o === Object(o)) return o;
    throw TypeError('Could not convert argument to dictionary');
}
/**
 * @param {string} string Input string of UTF-16 code units.
 * @return {!Array.<number>} Code points.
 */ function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode
    // 1. Let S be the DOMString value.
    var s = String(string);
    // 2. Let n be the length of S.
    var n = s.length;
    // 3. Initialize i to 0.
    var i = 0;
    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];
    // 5. While i < n:
    while(i < n){
        // 1. Let c be the code unit in S at index i.
        var c = s.charCodeAt(i);
        // 2. Depending on the value of c:
        // c < 0xD800 or c > 0xDFFF
        if (c < 0xD800 || c > 0xDFFF) {
            // Append to U the Unicode character with code point c.
            u.push(c);
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            // Append to U a U+FFFD REPLACEMENT CHARACTER.
            u.push(0xFFFD);
        } else if (0xD800 <= c && c <= 0xDBFF) {
            // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
            // CHARACTER.
            if (i === n - 1) {
                u.push(0xFFFD);
            } else {
                // 1. Let d be the code unit in S at index i+1.
                var d = string.charCodeAt(i + 1);
                // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
                if (0xDC00 <= d && d <= 0xDFFF) {
                    // 1. Let a be c & 0x3FF.
                    var a = c & 0x3FF;
                    // 2. Let b be d & 0x3FF.
                    var b = d & 0x3FF;
                    // 3. Append to U the Unicode character with code point
                    // 2^16+2^10*a+b.
                    u.push(0x10000 + (a << 10) + b);
                    // 4. Set i to i+1.
                    i += 1;
                } else {
                    u.push(0xFFFD);
                }
            }
        }
        // 3. Set i to i+1.
        i += 1;
    }
    // 6. Return U.
    return u;
}
/**
 * @param {!Array.<number>} code_points Array of code points.
 * @return {string} string String of UTF-16 code units.
 */ function codePointsToString(code_points) {
    var s = '';
    for(var i = 0; i < code_points.length; ++i){
        var cp = code_points[i];
        if (cp <= 0xFFFF) {
            s += String.fromCharCode(cp);
        } else {
            cp -= 0x10000;
            s += String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    }
    return s;
}
//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//
//
// 3. Terminology
//
/**
 * End-of-stream is a special token that signifies no more tokens
 * are in the stream.
 * @const
 */ var end_of_stream = -1;
/**
 * A stream represents an ordered sequence of tokens.
 *
 * @constructor
 * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide the
 * stream.
 */ function Stream(tokens) {
    /** @type {!Array.<number>} */ this.tokens = [].slice.call(tokens);
}
Stream.prototype = {
    /**
   * @return {boolean} True if end-of-stream has been hit.
   */ endOfStream: function() {
        return !this.tokens.length;
    },
    /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */ read: function() {
        if (!this.tokens.length) return end_of_stream;
        return this.tokens.shift();
    },
    /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */ prepend: function(token) {
        if (Array.isArray(token)) {
            var tokens = token;
            while(tokens.length)this.tokens.unshift(tokens.pop());
        } else {
            this.tokens.unshift(token);
        }
    },
    /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */ push: function(token) {
        if (Array.isArray(token)) {
            var tokens = token;
            while(tokens.length)this.tokens.push(tokens.shift());
        } else {
            this.tokens.push(token);
        }
    }
};
//
// 4. Encodings
//
// 4.1 Encoders and decoders
/** @const */ var finished = -1;
/**
 * @param {boolean} fatal If true, decoding errors raise an exception.
 * @param {number=} opt_code_point Override the standard fallback code point.
 * @return {number} The code point to insert on a decoding error.
 */ function decoderError(fatal, opt_code_point) {
    if (fatal) throw TypeError('Decoder error');
    return opt_code_point || 0xFFFD;
}
//
// 7. API
//
/** @const */ var DEFAULT_ENCODING = 'utf-8';
// 7.1 Interface TextDecoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextDecoder(encoding, options) {
    if (!(this instanceof TextDecoder)) {
        return new TextDecoder(encoding, options);
    }
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) {
        throw new Error('Encoding not supported. Only utf-8 is supported');
    }
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {boolean} */ this._BOMseen = false;
    /** @private @type {?Decoder} */ this._decoder = null;
    /** @private @type {boolean} */ this._fatal = Boolean(options['fatal']);
    /** @private @type {boolean} */ this._ignoreBOM = Boolean(options['ignoreBOM']);
    Object.defineProperty(this, 'encoding', {
        value: 'utf-8'
    });
    Object.defineProperty(this, 'fatal', {
        value: this._fatal
    });
    Object.defineProperty(this, 'ignoreBOM', {
        value: this._ignoreBOM
    });
}
TextDecoder.prototype = {
    /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */ decode: function decode(input, options) {
        var bytes;
        if (typeof input === 'object' && input instanceof ArrayBuffer) {
            bytes = new Uint8Array(input);
        } else if (typeof input === 'object' && 'buffer' in input && input.buffer instanceof ArrayBuffer) {
            bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        } else {
            bytes = new Uint8Array(0);
        }
        options = ToDictionary(options);
        if (!this._streaming) {
            this._decoder = new UTF8Decoder({
                fatal: this._fatal
            });
            this._BOMseen = false;
        }
        this._streaming = Boolean(options['stream']);
        var input_stream = new Stream(bytes);
        var code_points = [];
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._decoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (result === null) continue;
            if (Array.isArray(result)) code_points.push.apply(code_points, result);
            else code_points.push(result);
        }
        if (!this._streaming) {
            do {
                result = this._decoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (result === null) continue;
                if (Array.isArray(result)) code_points.push.apply(code_points, result);
                else code_points.push(result);
            }while (!input_stream.endOfStream())
            this._decoder = null;
        }
        if (code_points.length) {
            // If encoding is one of utf-8, utf-16be, and utf-16le, and
            // ignore BOM flag and BOM seen flag are unset, run these
            // subsubsteps:
            if ([
                'utf-8'
            ].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
                // If token is U+FEFF, set BOM seen flag.
                if (code_points[0] === 0xFEFF) {
                    this._BOMseen = true;
                    code_points.shift();
                } else {
                    // Otherwise, if token is not end-of-stream, set BOM seen
                    // flag and append token to output.
                    this._BOMseen = true;
                }
            }
        }
        return codePointsToString(code_points);
    }
};
// 7.2 Interface TextEncoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextEncoder(encoding, options) {
    if (!(this instanceof TextEncoder)) return new TextEncoder(encoding, options);
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) {
        throw new Error('Encoding not supported. Only utf-8 is supported');
    }
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {?Encoder} */ this._encoder = null;
    /** @private @type {{fatal: boolean}} */ this._options = {
        fatal: Boolean(options['fatal'])
    };
    Object.defineProperty(this, 'encoding', {
        value: 'utf-8'
    });
}
TextEncoder.prototype = {
    /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */ encode: function encode(opt_string, options) {
        opt_string = opt_string ? String(opt_string) : '';
        options = ToDictionary(options);
        // NOTE: This option is nonstandard. None of the encodings
        // permitted for encoding (i.e. UTF-8, UTF-16) are stateful,
        // so streaming is not necessary.
        if (!this._streaming) this._encoder = new UTF8Encoder(this._options);
        this._streaming = Boolean(options['stream']);
        var bytes = [];
        var input_stream = new Stream(stringToCodePoints(opt_string));
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._encoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (Array.isArray(result)) bytes.push.apply(bytes, result);
            else bytes.push(result);
        }
        if (!this._streaming) {
            while(true){
                result = this._encoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (Array.isArray(result)) bytes.push.apply(bytes, result);
                else bytes.push(result);
            }
            this._encoder = null;
        }
        return new Uint8Array(bytes);
    }
};
//
// 8. The encoding
//
// 8.1 utf-8
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Decoder(options) {
    var fatal = options.fatal;
    // utf-8's decoder's has an associated utf-8 code point, utf-8
    // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
    // lower boundary (initially 0x80), and a utf-8 upper boundary
    // (initially 0xBF).
    var /** @type {number} */ utf8_code_point = 0, /** @type {number} */ utf8_bytes_seen = 0, /** @type {number} */ utf8_bytes_needed = 0, /** @type {number} */ utf8_lower_boundary = 0x80, /** @type {number} */ utf8_upper_boundary = 0xBF;
    /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point.
   */ this.handler = function(stream, bite) {
        // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
        // set utf-8 bytes needed to 0 and return error.
        if (bite === end_of_stream && utf8_bytes_needed !== 0) {
            utf8_bytes_needed = 0;
            return decoderError(fatal);
        }
        // 2. If byte is end-of-stream, return finished.
        if (bite === end_of_stream) return finished;
        // 3. If utf-8 bytes needed is 0, based on byte:
        if (utf8_bytes_needed === 0) {
            // 0x00 to 0x7F
            if (inRange(bite, 0x00, 0x7F)) {
                // Return a code point whose value is byte.
                return bite;
            }
            // 0xC2 to 0xDF
            if (inRange(bite, 0xC2, 0xDF)) {
                // Set utf-8 bytes needed to 1 and utf-8 code point to byte
                // − 0xC0.
                utf8_bytes_needed = 1;
                utf8_code_point = bite - 0xC0;
            } else if (inRange(bite, 0xE0, 0xEF)) {
                // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
                if (bite === 0xE0) utf8_lower_boundary = 0xA0;
                // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
                if (bite === 0xED) utf8_upper_boundary = 0x9F;
                // 3. Set utf-8 bytes needed to 2 and utf-8 code point to
                // byte − 0xE0.
                utf8_bytes_needed = 2;
                utf8_code_point = bite - 0xE0;
            } else if (inRange(bite, 0xF0, 0xF4)) {
                // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
                if (bite === 0xF0) utf8_lower_boundary = 0x90;
                // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
                if (bite === 0xF4) utf8_upper_boundary = 0x8F;
                // 3. Set utf-8 bytes needed to 3 and utf-8 code point to
                // byte − 0xF0.
                utf8_bytes_needed = 3;
                utf8_code_point = bite - 0xF0;
            } else {
                // Return error.
                return decoderError(fatal);
            }
            // Then (byte is in the range 0xC2 to 0xF4) set utf-8 code
            // point to utf-8 code point << (6 × utf-8 bytes needed) and
            // return continue.
            utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
            return null;
        }
        // 4. If byte is not in the range utf-8 lower boundary to utf-8
        // upper boundary, run these substeps:
        if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
            // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
            // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
            // utf-8 upper boundary to 0xBF.
            utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
            utf8_lower_boundary = 0x80;
            utf8_upper_boundary = 0xBF;
            // 2. Prepend byte to stream.
            stream.prepend(bite);
            // 3. Return error.
            return decoderError(fatal);
        }
        // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
        // to 0xBF.
        utf8_lower_boundary = 0x80;
        utf8_upper_boundary = 0xBF;
        // 6. Increase utf-8 bytes seen by one and set utf-8 code point
        // to utf-8 code point + (byte − 0x80) << (6 × (utf-8 bytes
        // needed − utf-8 bytes seen)).
        utf8_bytes_seen += 1;
        utf8_code_point += bite - 0x80 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
        // 7. If utf-8 bytes seen is not equal to utf-8 bytes needed,
        // continue.
        if (utf8_bytes_seen !== utf8_bytes_needed) return null;
        // 8. Let code point be utf-8 code point.
        var code_point = utf8_code_point;
        // 9. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
        // seen to 0.
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        // 10. Return a code point whose value is code point.
        return code_point;
    };
}
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Encoder(options) {
    var fatal = options.fatal;
    /**
   * @param {Stream} stream Input stream.
   * @param {number} code_point Next code point read from the stream.
   * @return {(number|!Array.<number>)} Byte(s) to emit.
   */ this.handler = function(stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === end_of_stream) return finished;
        // 2. If code point is in the range U+0000 to U+007F, return a
        // byte whose value is code point.
        if (inRange(code_point, 0x0000, 0x007f)) return code_point;
        // 3. Set count and offset based on the range code point is in:
        var count, offset;
        // U+0080 to U+07FF:    1 and 0xC0
        if (inRange(code_point, 0x0080, 0x07FF)) {
            count = 1;
            offset = 0xC0;
        } else if (inRange(code_point, 0x0800, 0xFFFF)) {
            count = 2;
            offset = 0xE0;
        } else if (inRange(code_point, 0x10000, 0x10FFFF)) {
            count = 3;
            offset = 0xF0;
        }
        // 4.Let bytes be a byte sequence whose first byte is (code
        // point >> (6 × count)) + offset.
        var bytes = [
            (code_point >> 6 * count) + offset
        ];
        // 5. Run these substeps while count is greater than 0:
        while(count > 0){
            // 1. Set temp to code point >> (6 × (count − 1)).
            var temp = code_point >> 6 * (count - 1);
            // 2. Append to bytes 0x80 | (temp & 0x3F).
            bytes.push(0x80 | temp & 0x3F);
            // 3. Decrease count by one.
            count -= 1;
        }
        // 6. Return bytes bytes, in order.
        return bytes;
    };
}
exports.TextEncoder = TextEncoder;
exports.TextDecoder = TextDecoder;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/superstruct/lib/index.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Struct",
    ()=>Struct,
    "StructError",
    ()=>StructError,
    "any",
    ()=>any,
    "array",
    ()=>array,
    "assert",
    ()=>assert,
    "assign",
    ()=>assign,
    "bigint",
    ()=>bigint,
    "boolean",
    ()=>boolean,
    "coerce",
    ()=>coerce,
    "create",
    ()=>create,
    "date",
    ()=>date,
    "defaulted",
    ()=>defaulted,
    "define",
    ()=>define,
    "deprecated",
    ()=>deprecated,
    "dynamic",
    ()=>dynamic,
    "empty",
    ()=>empty,
    "enums",
    ()=>enums,
    "func",
    ()=>func,
    "instance",
    ()=>instance,
    "integer",
    ()=>integer,
    "intersection",
    ()=>intersection,
    "is",
    ()=>is,
    "lazy",
    ()=>lazy,
    "literal",
    ()=>literal,
    "map",
    ()=>map,
    "mask",
    ()=>mask,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "never",
    ()=>never,
    "nonempty",
    ()=>nonempty,
    "nullable",
    ()=>nullable,
    "number",
    ()=>number,
    "object",
    ()=>object,
    "omit",
    ()=>omit,
    "optional",
    ()=>optional,
    "partial",
    ()=>partial,
    "pattern",
    ()=>pattern,
    "pick",
    ()=>pick,
    "record",
    ()=>record,
    "refine",
    ()=>refine,
    "regexp",
    ()=>regexp,
    "set",
    ()=>set,
    "size",
    ()=>size,
    "string",
    ()=>string,
    "struct",
    ()=>struct,
    "trimmed",
    ()=>trimmed,
    "tuple",
    ()=>tuple,
    "type",
    ()=>type,
    "union",
    ()=>union,
    "unknown",
    ()=>unknown,
    "validate",
    ()=>validate
]);
/**
 * A `StructFailure` represents a single specific failure in validation.
 */ /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */ class StructError extends TypeError {
    constructor(failure, failures){
        let cached;
        const { message, ...rest } = failure;
        const { path } = failure;
        const msg = path.length === 0 ? message : "At path: " + path.join('.') + " -- " + message;
        super(msg);
        this.value = void 0;
        this.key = void 0;
        this.type = void 0;
        this.refinement = void 0;
        this.path = void 0;
        this.branch = void 0;
        this.failures = void 0;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = ()=>{
            var _cached;
            return (_cached = cached) != null ? _cached : cached = [
                failure,
                ...failures()
            ];
        };
    }
}
/**
 * Check if a value is an iterator.
 */ function isIterable(x) {
    return isObject(x) && typeof x[Symbol.iterator] === 'function';
}
/**
 * Check if a value is a plain object.
 */ function isObject(x) {
    return typeof x === 'object' && x != null;
}
/**
 * Check if a value is a plain object.
 */ function isPlainObject(x) {
    if (Object.prototype.toString.call(x) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(x);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Return a value as a printable string.
 */ function print(value) {
    return typeof value === 'string' ? JSON.stringify(value) : "" + value;
}
/**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */ function shiftIterator(input) {
    const { done, value } = input.next();
    return done ? undefined : value;
}
/**
 * Convert a single validation result to a failure.
 */ function toFailure(result, context, struct, value) {
    if (result === true) {
        return;
    } else if (result === false) {
        result = {};
    } else if (typeof result === 'string') {
        result = {
            message: result
        };
    }
    const { path, branch } = context;
    const { type } = struct;
    const { refinement, message = "Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : '') + ", but received: `" + print(value) + "`" } = result;
    return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
    };
}
/**
 * Convert a validation result to an iterable of failures.
 */ function* toFailures(result, context, struct, value) {
    if (!isIterable(result)) {
        result = [
            result
        ];
    }
    for (const r of result){
        const failure = toFailure(r, context, struct, value);
        if (failure) {
            yield failure;
        }
    }
}
/**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */ function* run(value, struct, options) {
    if (options === void 0) {
        options = {};
    }
    const { path = [], branch = [
        value
    ], coerce = false, mask = false } = options;
    const ctx = {
        path,
        branch
    };
    if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && struct.type !== 'type' && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) {
            for(const key in value){
                if (struct.schema[key] === undefined) {
                    delete value[key];
                }
            }
        }
    }
    let valid = true;
    for (const failure of struct.validator(value, ctx)){
        valid = false;
        yield [
            failure,
            undefined
        ];
    }
    for (let [k, v, s] of struct.entries(value, ctx)){
        const ts = run(v, s, {
            path: k === undefined ? path : [
                ...path,
                k
            ],
            branch: k === undefined ? branch : [
                ...branch,
                v
            ],
            coerce,
            mask
        });
        for (const t of ts){
            if (t[0]) {
                valid = false;
                yield [
                    t[0],
                    undefined
                ];
            } else if (coerce) {
                v = t[1];
                if (k === undefined) {
                    value = v;
                } else if (value instanceof Map) {
                    value.set(k, v);
                } else if (value instanceof Set) {
                    value.add(v);
                } else if (isObject(value)) {
                    value[k] = v;
                }
            }
        }
    }
    if (valid) {
        for (const failure of struct.refiner(value, ctx)){
            valid = false;
            yield [
                failure,
                undefined
            ];
        }
    }
    if (valid) {
        yield [
            undefined,
            value
        ];
    }
}
/**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */ class Struct {
    constructor(props){
        this.TYPE = void 0;
        this.type = void 0;
        this.schema = void 0;
        this.coercer = void 0;
        this.validator = void 0;
        this.refiner = void 0;
        this.entries = void 0;
        const { type, schema, validator, refiner, coercer = (value)=>value, entries = function*() {} } = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) {
            this.validator = (value, context)=>{
                const result = validator(value, context);
                return toFailures(result, context, this, value);
            };
        } else {
            this.validator = ()=>[];
        }
        if (refiner) {
            this.refiner = (value, context)=>{
                const result = refiner(value, context);
                return toFailures(result, context, this, value);
            };
        } else {
            this.refiner = ()=>[];
        }
    }
    /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */ assert(value) {
        return assert(value, this);
    }
    /**
   * Create a value with the struct's coercion logic, then validate it.
   */ create(value) {
        return create(value, this);
    }
    /**
   * Check if a value passes the struct's validation.
   */ is(value) {
        return is(value, this);
    }
    /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */ mask(value) {
        return mask(value, this);
    }
    /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */ validate(value, options) {
        if (options === void 0) {
            options = {};
        }
        return validate(value, this, options);
    }
}
/**
 * Assert that a value passes a struct, throwing if it doesn't.
 */ function assert(value, struct) {
    const result = validate(value, struct);
    if (result[0]) {
        throw result[0];
    }
}
/**
 * Create a value with the coercion logic of struct and validate it.
 */ function create(value, struct) {
    const result = validate(value, struct, {
        coerce: true
    });
    if (result[0]) {
        throw result[0];
    } else {
        return result[1];
    }
}
/**
 * Mask a value, returning only the subset of properties defined by a struct.
 */ function mask(value, struct) {
    const result = validate(value, struct, {
        coerce: true,
        mask: true
    });
    if (result[0]) {
        throw result[0];
    } else {
        return result[1];
    }
}
/**
 * Check if a value passes a struct.
 */ function is(value, struct) {
    const result = validate(value, struct);
    return !result[0];
}
/**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */ function validate(value, struct, options) {
    if (options === void 0) {
        options = {};
    }
    const tuples = run(value, struct, options);
    const tuple = shiftIterator(tuples);
    if (tuple[0]) {
        const error = new StructError(tuple[0], function*() {
            for (const t of tuples){
                if (t[0]) {
                    yield t[0];
                }
            }
        });
        return [
            error,
            undefined
        ];
    } else {
        const v = tuple[1];
        return [
            undefined,
            v
        ];
    }
}
function assign() {
    for(var _len = arguments.length, Structs = new Array(_len), _key = 0; _key < _len; _key++){
        Structs[_key] = arguments[_key];
    }
    const isType = Structs[0].type === 'type';
    const schemas = Structs.map((s)=>s.schema);
    const schema = Object.assign({}, ...schemas);
    return isType ? type(schema) : object(schema);
}
/**
 * Define a new struct type with a custom validation function.
 */ function define(name, validator) {
    return new Struct({
        type: name,
        schema: null,
        validator
    });
}
/**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */ function deprecated(struct, log) {
    return new Struct({
        ...struct,
        refiner: (value, ctx)=>value === undefined || struct.refiner(value, ctx),
        validator (value, ctx) {
            if (value === undefined) {
                return true;
            } else {
                log(value, ctx);
                return struct.validator(value, ctx);
            }
        }
    });
}
/**
 * Create a struct with dynamic validation logic.
 *
 * The callback will receive the value currently being validated, and must
 * return a struct object to validate it with. This can be useful to model
 * validation logic that changes based on its input.
 */ function dynamic(fn) {
    return new Struct({
        type: 'dynamic',
        schema: null,
        *entries (value, ctx) {
            const struct = fn(value, ctx);
            yield* struct.entries(value, ctx);
        },
        validator (value, ctx) {
            const struct = fn(value, ctx);
            return struct.validator(value, ctx);
        },
        coercer (value, ctx) {
            const struct = fn(value, ctx);
            return struct.coercer(value, ctx);
        },
        refiner (value, ctx) {
            const struct = fn(value, ctx);
            return struct.refiner(value, ctx);
        }
    });
}
/**
 * Create a struct with lazily evaluated validation logic.
 *
 * The first time validation is run with the struct, the callback will be called
 * and must return a struct object to use. This is useful for cases where you
 * want to have self-referential structs for nested data structures to avoid a
 * circular definition problem.
 */ function lazy(fn) {
    let struct;
    return new Struct({
        type: 'lazy',
        schema: null,
        *entries (value, ctx) {
            var _struct;
            (_struct = struct) != null ? _struct : struct = fn();
            yield* struct.entries(value, ctx);
        },
        validator (value, ctx) {
            var _struct2;
            (_struct2 = struct) != null ? _struct2 : struct = fn();
            return struct.validator(value, ctx);
        },
        coercer (value, ctx) {
            var _struct3;
            (_struct3 = struct) != null ? _struct3 : struct = fn();
            return struct.coercer(value, ctx);
        },
        refiner (value, ctx) {
            var _struct4;
            (_struct4 = struct) != null ? _struct4 : struct = fn();
            return struct.refiner(value, ctx);
        }
    });
}
/**
 * Create a new struct based on an existing object struct, but excluding
 * specific properties.
 *
 * Like TypeScript's `Omit` utility.
 */ function omit(struct, keys) {
    const { schema } = struct;
    const subschema = {
        ...schema
    };
    for (const key of keys){
        delete subschema[key];
    }
    switch(struct.type){
        case 'type':
            return type(subschema);
        default:
            return object(subschema);
    }
}
/**
 * Create a new struct based on an existing object struct, but with all of its
 * properties allowed to be `undefined`.
 *
 * Like TypeScript's `Partial` utility.
 */ function partial(struct) {
    const schema = struct instanceof Struct ? {
        ...struct.schema
    } : {
        ...struct
    };
    for(const key in schema){
        schema[key] = optional(schema[key]);
    }
    return object(schema);
}
/**
 * Create a new struct based on an existing object struct, but only including
 * specific properties.
 *
 * Like TypeScript's `Pick` utility.
 */ function pick(struct, keys) {
    const { schema } = struct;
    const subschema = {};
    for (const key of keys){
        subschema[key] = schema[key];
    }
    return object(subschema);
}
/**
 * Define a new struct type with a custom validation function.
 *
 * @deprecated This function has been renamed to `define`.
 */ function struct(name, validator) {
    console.warn('superstruct@0.11 - The `struct` helper has been renamed to `define`.');
    return define(name, validator);
}
/**
 * Ensure that any value passes validation.
 */ function any() {
    return define('any', ()=>true);
}
function array(Element) {
    return new Struct({
        type: 'array',
        schema: Element,
        *entries (value) {
            if (Element && Array.isArray(value)) {
                for (const [i, v] of value.entries()){
                    yield [
                        i,
                        v,
                        Element
                    ];
                }
            }
        },
        coercer (value) {
            return Array.isArray(value) ? value.slice() : value;
        },
        validator (value) {
            return Array.isArray(value) || "Expected an array value, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a bigint.
 */ function bigint() {
    return define('bigint', (value)=>{
        return typeof value === 'bigint';
    });
}
/**
 * Ensure that a value is a boolean.
 */ function boolean() {
    return define('boolean', (value)=>{
        return typeof value === 'boolean';
    });
}
/**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */ function date() {
    return define('date', (value)=>{
        return value instanceof Date && !isNaN(value.getTime()) || "Expected a valid `Date` object, but received: " + print(value);
    });
}
function enums(values) {
    const schema = {};
    const description = values.map((v)=>print(v)).join();
    for (const key of values){
        schema[key] = key;
    }
    return new Struct({
        type: 'enums',
        schema,
        validator (value) {
            return values.includes(value) || "Expected one of `" + description + "`, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a function.
 */ function func() {
    return define('func', (value)=>{
        return typeof value === 'function' || "Expected a function, but received: " + print(value);
    });
}
/**
 * Ensure that a value is an instance of a specific class.
 */ function instance(Class) {
    return define('instance', (value)=>{
        return value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value);
    });
}
/**
 * Ensure that a value is an integer.
 */ function integer() {
    return define('integer', (value)=>{
        return typeof value === 'number' && !isNaN(value) && Number.isInteger(value) || "Expected an integer, but received: " + print(value);
    });
}
/**
 * Ensure that a value matches all of a set of types.
 */ function intersection(Structs) {
    return new Struct({
        type: 'intersection',
        schema: null,
        *entries (value, ctx) {
            for (const S of Structs){
                yield* S.entries(value, ctx);
            }
        },
        *validator (value, ctx) {
            for (const S of Structs){
                yield* S.validator(value, ctx);
            }
        },
        *refiner (value, ctx) {
            for (const S of Structs){
                yield* S.refiner(value, ctx);
            }
        }
    });
}
function literal(constant) {
    const description = print(constant);
    const t = typeof constant;
    return new Struct({
        type: 'literal',
        schema: t === 'string' || t === 'number' || t === 'boolean' ? constant : null,
        validator (value) {
            return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
        }
    });
}
function map(Key, Value) {
    return new Struct({
        type: 'map',
        schema: null,
        *entries (value) {
            if (Key && Value && value instanceof Map) {
                for (const [k, v] of value.entries()){
                    yield [
                        k,
                        k,
                        Key
                    ];
                    yield [
                        k,
                        v,
                        Value
                    ];
                }
            }
        },
        coercer (value) {
            return value instanceof Map ? new Map(value) : value;
        },
        validator (value) {
            return value instanceof Map || "Expected a `Map` object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that no value ever passes validation.
 */ function never() {
    return define('never', ()=>false);
}
/**
 * Augment an existing struct to allow `null` values.
 */ function nullable(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx)=>value === null || struct.validator(value, ctx),
        refiner: (value, ctx)=>value === null || struct.refiner(value, ctx)
    });
}
/**
 * Ensure that a value is a number.
 */ function number() {
    return define('number', (value)=>{
        return typeof value === 'number' && !isNaN(value) || "Expected a number, but received: " + print(value);
    });
}
function object(schema) {
    const knowns = schema ? Object.keys(schema) : [];
    const Never = never();
    return new Struct({
        type: 'object',
        schema: schema ? schema : null,
        *entries (value) {
            if (schema && isObject(value)) {
                const unknowns = new Set(Object.keys(value));
                for (const key of knowns){
                    unknowns.delete(key);
                    yield [
                        key,
                        value[key],
                        schema[key]
                    ];
                }
                for (const key of unknowns){
                    yield [
                        key,
                        value[key],
                        Never
                    ];
                }
            }
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        },
        coercer (value) {
            return isObject(value) ? {
                ...value
            } : value;
        }
    });
}
/**
 * Augment a struct to allow `undefined` values.
 */ function optional(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx)=>value === undefined || struct.validator(value, ctx),
        refiner: (value, ctx)=>value === undefined || struct.refiner(value, ctx)
    });
}
/**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */ function record(Key, Value) {
    return new Struct({
        type: 'record',
        schema: null,
        *entries (value) {
            if (isObject(value)) {
                for(const k in value){
                    const v = value[k];
                    yield [
                        k,
                        k,
                        Key
                    ];
                    yield [
                        k,
                        v,
                        Value
                    ];
                }
            }
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */ function regexp() {
    return define('regexp', (value)=>{
        return value instanceof RegExp;
    });
}
function set(Element) {
    return new Struct({
        type: 'set',
        schema: null,
        *entries (value) {
            if (Element && value instanceof Set) {
                for (const v of value){
                    yield [
                        v,
                        v,
                        Element
                    ];
                }
            }
        },
        coercer (value) {
            return value instanceof Set ? new Set(value) : value;
        },
        validator (value) {
            return value instanceof Set || "Expected a `Set` object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a string.
 */ function string() {
    return define('string', (value)=>{
        return typeof value === 'string' || "Expected a string, but received: " + print(value);
    });
}
/**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */ function tuple(Structs) {
    const Never = never();
    return new Struct({
        type: 'tuple',
        schema: null,
        *entries (value) {
            if (Array.isArray(value)) {
                const length = Math.max(Structs.length, value.length);
                for(let i = 0; i < length; i++){
                    yield [
                        i,
                        value[i],
                        Structs[i] || Never
                    ];
                }
            }
        },
        validator (value) {
            return Array.isArray(value) || "Expected an array, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */ function type(schema) {
    const keys = Object.keys(schema);
    return new Struct({
        type: 'type',
        schema,
        *entries (value) {
            if (isObject(value)) {
                for (const k of keys){
                    yield [
                        k,
                        value[k],
                        schema[k]
                    ];
                }
            }
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value matches one of a set of types.
 */ function union(Structs) {
    const description = Structs.map((s)=>s.type).join(' | ');
    return new Struct({
        type: 'union',
        schema: null,
        coercer (value, ctx) {
            const firstMatch = Structs.find((s)=>{
                const [e] = s.validate(value, {
                    coerce: true
                });
                return !e;
            }) || unknown();
            return firstMatch.coercer(value, ctx);
        },
        validator (value, ctx) {
            const failures = [];
            for (const S of Structs){
                const [...tuples] = run(value, S, ctx);
                const [first] = tuples;
                if (!first[0]) {
                    return [];
                } else {
                    for (const [failure] of tuples){
                        if (failure) {
                            failures.push(failure);
                        }
                    }
                }
            }
            return [
                "Expected the value to satisfy a union of `" + description + "`, but received: " + print(value),
                ...failures
            ];
        }
    });
}
/**
 * Ensure that any value passes validation, without widening its type to `any`.
 */ function unknown() {
    return define('unknown', ()=>true);
}
/**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function coerce(struct, condition, coercer) {
    return new Struct({
        ...struct,
        coercer: (value, ctx)=>{
            return is(value, condition) ? struct.coercer(coercer(value, ctx), ctx) : struct.coercer(value, ctx);
        }
    });
}
/**
 * Augment a struct to replace `undefined` values with a default.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function defaulted(struct, fallback, options) {
    if (options === void 0) {
        options = {};
    }
    return coerce(struct, unknown(), (x)=>{
        const f = typeof fallback === 'function' ? fallback() : fallback;
        if (x === undefined) {
            return f;
        }
        if (!options.strict && isPlainObject(x) && isPlainObject(f)) {
            const ret = {
                ...x
            };
            let changed = false;
            for(const key in f){
                if (ret[key] === undefined) {
                    ret[key] = f[key];
                    changed = true;
                }
            }
            if (changed) {
                return ret;
            }
        }
        return x;
    });
}
/**
 * Augment a struct to trim string inputs.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function trimmed(struct) {
    return coerce(struct, string(), (x)=>x.trim());
}
/**
 * Ensure that a string, array, map, or set is empty.
 */ function empty(struct) {
    return refine(struct, 'empty', (value)=>{
        const size = getSize(value);
        return size === 0 || "Expected an empty " + struct.type + " but received one with a size of `" + size + "`";
    });
}
function getSize(value) {
    if (value instanceof Map || value instanceof Set) {
        return value.size;
    } else {
        return value.length;
    }
}
/**
 * Ensure that a number or date is below a threshold.
 */ function max(struct, threshold, options) {
    if (options === void 0) {
        options = {};
    }
    const { exclusive } = options;
    return refine(struct, 'max', (value)=>{
        return exclusive ? value < threshold : value <= threshold || "Expected a " + struct.type + " less than " + (exclusive ? '' : 'or equal to ') + threshold + " but received `" + value + "`";
    });
}
/**
 * Ensure that a number or date is above a threshold.
 */ function min(struct, threshold, options) {
    if (options === void 0) {
        options = {};
    }
    const { exclusive } = options;
    return refine(struct, 'min', (value)=>{
        return exclusive ? value > threshold : value >= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? '' : 'or equal to ') + threshold + " but received `" + value + "`";
    });
}
/**
 * Ensure that a string, array, map or set is not empty.
 */ function nonempty(struct) {
    return refine(struct, 'nonempty', (value)=>{
        const size = getSize(value);
        return size > 0 || "Expected a nonempty " + struct.type + " but received an empty one";
    });
}
/**
 * Ensure that a string matches a regular expression.
 */ function pattern(struct, regexp) {
    return refine(struct, 'pattern', (value)=>{
        return regexp.test(value) || "Expected a " + struct.type + " matching `/" + regexp.source + "/` but received \"" + value + "\"";
    });
}
/**
 * Ensure that a string, array, number, date, map, or set has a size (or length, or time) between `min` and `max`.
 */ function size(struct, min, max) {
    if (max === void 0) {
        max = min;
    }
    const expected = "Expected a " + struct.type;
    const of = min === max ? "of `" + min + "`" : "between `" + min + "` and `" + max + "`";
    return refine(struct, 'size', (value)=>{
        if (typeof value === 'number' || value instanceof Date) {
            return min <= value && value <= max || expected + " " + of + " but received `" + value + "`";
        } else if (value instanceof Map || value instanceof Set) {
            const { size } = value;
            return min <= size && size <= max || expected + " with a size " + of + " but received one with a size of `" + size + "`";
        } else {
            const { length } = value;
            return min <= length && length <= max || expected + " with a length " + of + " but received one with a length of `" + length + "`";
        }
    });
}
/**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */ function refine(struct, name, refiner) {
    return new Struct({
        ...struct,
        *refiner (value, ctx) {
            yield* struct.refiner(value, ctx);
            const result = refiner(value, ctx);
            const failures = toFailures(result, ctx, struct, value);
            for (const failure of failures){
                yield {
                    ...failure,
                    refinement: name
                };
            }
        }
    });
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(b);
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DNS",
    ()=>DNS,
    "URL",
    ()=>URL,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function __TURBOPACK__default__export__(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/md5.js [app-ssr] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
;
;
function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v35.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/sha1.js [app-ssr] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
}
const __TURBOPACK__default__export__ = version;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NIL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "stringify",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "v5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v4.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/v5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/nil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/parse.js [app-ssr] (ecmascript)");
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/validate.js [app-ssr] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/v1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "updateV1State",
    ()=>updateV1State
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/stringify.js [app-ssr] (ecmascript)");
;
;
const _state = {};
function v1(options, buf, offset) {
    let bytes;
    const isV6 = options?._v6 ?? false;
    if (options) {
        const optionsKeys = Object.keys(options);
        if (optionsKeys.length === 1 && optionsKeys[0] === '_v6') {
            options = undefined;
        }
    }
    if (options) {
        bytes = v1Bytes(options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(), options.msecs, options.nsecs, options.clockseq, options.node, buf, offset);
    } else {
        const now = Date.now();
        const rnds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        updateV1State(_state, now, rnds);
        bytes = v1Bytes(rnds, _state.msecs, _state.nsecs, isV6 ? undefined : _state.clockseq, isV6 ? undefined : _state.node, buf, offset);
    }
    return buf ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(bytes);
}
function updateV1State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.nsecs ??= 0;
    if (now === state.msecs) {
        state.nsecs++;
        if (state.nsecs >= 10000) {
            state.node = undefined;
            state.nsecs = 0;
        }
    } else if (now > state.msecs) {
        state.nsecs = 0;
    } else if (now < state.msecs) {
        state.node = undefined;
    }
    if (!state.node) {
        state.node = rnds.slice(10, 16);
        state.node[0] |= 0x01;
        state.clockseq = (rnds[8] << 8 | rnds[9]) & 0x3fff;
    }
    state.msecs = now;
    return state;
}
function v1Bytes(rnds, msecs, nsecs, clockseq, node, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    } else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    nsecs ??= 0;
    clockseq ??= (rnds[8] << 8 | rnds[9]) & 0x3fff;
    node ??= rnds.slice(10, 16);
    msecs += 12219292800000;
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    buf[offset++] = tl >>> 24 & 0xff;
    buf[offset++] = tl >>> 16 & 0xff;
    buf[offset++] = tl >>> 8 & 0xff;
    buf[offset++] = tl & 0xff;
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    buf[offset++] = tmh >>> 8 & 0xff;
    buf[offset++] = tmh & 0xff;
    buf[offset++] = tmh >>> 24 & 0xf | 0x10;
    buf[offset++] = tmh >>> 16 & 0xff;
    buf[offset++] = clockseq >>> 8 | 0x80;
    buf[offset++] = clockseq & 0xff;
    for(let n = 0; n < 6; ++n){
        buf[offset++] = node[n];
    }
    return buf;
}
const __TURBOPACK__default__export__ = v1;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/v1.js [app-ssr] (ecmascript) <export default as v1>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/v1.js [app-ssr] (ecmascript)");
}),
"[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Client",
    ()=>Client,
    "CommonClient",
    ()=>CommonClient,
    "DefaultDataPack",
    ()=>DefaultDataPack,
    "Server",
    ()=>Server,
    "WebSocket",
    ()=>WebSocket,
    "createError",
    ()=>createError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/ws/wrapper.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$ws$2f$lib$2f$websocket$2d$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WebSocketServer$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/ws/lib/websocket-server.js [app-ssr] (ecmascript) <export default as WebSocketServer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.js [app-ssr] (ecmascript) <export default as EventEmitter>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v1$3e$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/rpc-websockets/node_modules/uuid/dist/esm/v1.js [app-ssr] (ecmascript) <export default as v1>");
;
;
;
;
// src/lib/client/websocket.ts
function WebSocket(address, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](address, options);
}
// src/lib/utils.ts
var DefaultDataPack = class {
    encode(value) {
        return JSON.stringify(value);
    }
    decode(value) {
        return JSON.parse(value);
    }
};
// src/lib/client.ts
var CommonClient = class extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"] {
    address;
    rpc_id;
    queue;
    options;
    autoconnect;
    ready;
    reconnect;
    reconnect_timer_id;
    reconnect_interval;
    max_reconnects;
    rest_options;
    current_reconnects;
    generate_request_id;
    socket;
    webSocketFactory;
    dataPack;
    /**
  * Instantiate a Client class.
  * @constructor
  * @param {webSocketFactory} webSocketFactory - factory method for WebSocket
  * @param {String} address - url to a websocket server
  * @param {Object} options - ws options object with reconnect parameters
  * @param {Function} generate_request_id - custom generation request Id
  * @param {DataPack} dataPack - data pack contains encoder and decoder
  * @return {CommonClient}
  */ constructor(webSocketFactory, address = "ws://localhost:8080", { autoconnect = true, reconnect = true, reconnect_interval = 1e3, max_reconnects = 5, ...rest_options } = {}, generate_request_id, dataPack){
        super();
        this.webSocketFactory = webSocketFactory;
        this.queue = {};
        this.rpc_id = 0;
        this.address = address;
        this.autoconnect = autoconnect;
        this.ready = false;
        this.reconnect = reconnect;
        this.reconnect_timer_id = void 0;
        this.reconnect_interval = reconnect_interval;
        this.max_reconnects = max_reconnects;
        this.rest_options = rest_options;
        this.current_reconnects = 0;
        this.generate_request_id = generate_request_id || (()=>typeof this.rpc_id === "number" ? ++this.rpc_id : Number(this.rpc_id) + 1);
        if (!dataPack) this.dataPack = new DefaultDataPack();
        else this.dataPack = dataPack;
        if (this.autoconnect) this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        });
    }
    /**
  * Connects to a defined server if not connected already.
  * @method
  * @return {Undefined}
  */ connect() {
        if (this.socket) return;
        this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        });
    }
    /**
  * Calls a registered RPC method on server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object|Array} params - optional method parameters
  * @param {Number} timeout - RPC reply timeout value
  * @param {Object} ws_opts - options passed to ws
  * @return {Promise}
  */ call(method, params, timeout, ws_opts) {
        if (!ws_opts && "object" === typeof timeout) {
            ws_opts = timeout;
            timeout = null;
        }
        return new Promise((resolve, reject)=>{
            if (!this.ready) return reject(new Error("socket not ready"));
            const rpc_id = this.generate_request_id(method, params);
            const message = {
                jsonrpc: "2.0",
                method,
                params: params || void 0,
                id: rpc_id
            };
            this.socket.send(this.dataPack.encode(message), ws_opts, (error)=>{
                if (error) return reject(error);
                this.queue[rpc_id] = {
                    promise: [
                        resolve,
                        reject
                    ]
                };
                if (timeout) {
                    this.queue[rpc_id].timeout = setTimeout(()=>{
                        delete this.queue[rpc_id];
                        reject(new Error("reply timeout"));
                    }, timeout);
                }
            });
        });
    }
    /**
  * Logins with the other side of the connection.
  * @method
  * @param {Object} params - Login credentials object
  * @return {Promise}
  */ async login(params) {
        const resp = await this.call("rpc.login", params);
        if (!resp) throw new Error("authentication failed");
        return resp;
    }
    /**
  * Fetches a list of client's methods registered on server.
  * @method
  * @return {Array}
  */ async listMethods() {
        return await this.call("__listMethods");
    }
    /**
  * Sends a JSON-RPC 2.0 notification to server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object} params - optional method parameters
  * @return {Promise}
  */ notify(method, params) {
        return new Promise((resolve, reject)=>{
            if (!this.ready) return reject(new Error("socket not ready"));
            const message = {
                jsonrpc: "2.0",
                method,
                params
            };
            this.socket.send(this.dataPack.encode(message), (error)=>{
                if (error) return reject(error);
                resolve();
            });
        });
    }
    /**
  * Subscribes for a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */ async subscribe(event) {
        if (typeof event === "string") event = [
            event
        ];
        const result = await this.call("rpc.on", event);
        if (typeof event === "string" && result[event] !== "ok") throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);
        return result;
    }
    /**
  * Unsubscribes from a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */ async unsubscribe(event) {
        if (typeof event === "string") event = [
            event
        ];
        const result = await this.call("rpc.off", event);
        if (typeof event === "string" && result[event] !== "ok") throw new Error("Failed unsubscribing from an event with: " + result);
        return result;
    }
    /**
  * Closes a WebSocket connection gracefully.
  * @method
  * @param {Number} code - socket close code
  * @param {String} data - optional data to be sent before closing
  * @return {Undefined}
  */ close(code, data) {
        if (this.socket) this.socket.close(code || 1e3, data);
    }
    /**
  * Enable / disable automatic reconnection.
  * @method
  * @param {Boolean} reconnect - enable / disable reconnection
  * @return {Undefined}
  */ setAutoReconnect(reconnect) {
        this.reconnect = reconnect;
    }
    /**
  * Set the interval between reconnection attempts.
  * @method
  * @param {Number} interval - reconnection interval in milliseconds
  * @return {Undefined}
  */ setReconnectInterval(interval) {
        this.reconnect_interval = interval;
    }
    /**
  * Set the maximum number of reconnection attempts.
  * @method
  * @param {Number} max_reconnects - maximum reconnection attempts
  * @return {Undefined}
  */ setMaxReconnects(max_reconnects) {
        this.max_reconnects = max_reconnects;
    }
    /**
  * Get the current number of reconnection attempts made.
  * @method
  * @return {Number} current reconnection attempts
  */ getCurrentReconnects() {
        return this.current_reconnects;
    }
    /**
  * Get the maximum number of reconnection attempts.
  * @method
  * @return {Number} maximum reconnection attempts
  */ getMaxReconnects() {
        return this.max_reconnects;
    }
    /**
  * Check if the client is currently attempting to reconnect.
  * @method
  * @return {Boolean} true if reconnection is in progress
  */ isReconnecting() {
        return this.reconnect_timer_id !== void 0;
    }
    /**
  * Check if the client will attempt to reconnect on the next close event.
  * @method
  * @return {Boolean} true if reconnection will be attempted
  */ willReconnect() {
        return this.reconnect && (this.max_reconnects === 0 || this.current_reconnects < this.max_reconnects);
    }
    /**
  * Connection/Message handler.
  * @method
  * @private
  * @param {String} address - WebSocket API address
  * @param {Object} options - ws options object
  * @return {Undefined}
  */ _connect(address, options) {
        clearTimeout(this.reconnect_timer_id);
        this.socket = this.webSocketFactory(address, options);
        this.socket.addEventListener("open", ()=>{
            this.ready = true;
            this.emit("open");
            this.current_reconnects = 0;
        });
        this.socket.addEventListener("message", ({ data: message })=>{
            if (message instanceof ArrayBuffer) message = Buffer.from(message).toString();
            try {
                message = this.dataPack.decode(message);
            } catch (_error) {
                return;
            }
            if (message.notification && this.listeners(message.notification).length) {
                if (!Object.keys(message.params).length) return this.emit(message.notification);
                const args = [
                    message.notification
                ];
                if (message.params.constructor === Object) args.push(message.params);
                else for(let i = 0; i < message.params.length; i++)args.push(message.params[i]);
                return Promise.resolve().then(()=>{
                    this.emit.apply(this, args);
                });
            }
            if (!this.queue[message.id]) {
                if (message.method) {
                    return Promise.resolve().then(()=>{
                        this.emit(message.method, message?.params);
                    });
                }
                return;
            }
            if ("error" in message === "result" in message) this.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
            if (this.queue[message.id].timeout) clearTimeout(this.queue[message.id].timeout);
            if (message.error) this.queue[message.id].promise[1](message.error);
            else this.queue[message.id].promise[0](message.result);
            delete this.queue[message.id];
        });
        this.socket.addEventListener("error", (error)=>this.emit("error", error));
        this.socket.addEventListener("close", ({ code, reason })=>{
            if (this.ready) setTimeout(()=>this.emit("close", code, reason), 0);
            this.ready = false;
            this.socket = void 0;
            if (code === 1e3) return;
            this.current_reconnects++;
            if (this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0)) this.reconnect_timer_id = setTimeout(()=>this._connect(address, options), this.reconnect_interval);
            else if (this.reconnect && this.max_reconnects > 0 && this.current_reconnects >= this.max_reconnects) {
                setTimeout(()=>this.emit("max_reconnects_reached", code, reason), 1);
            }
        });
    }
};
var Server = class extends __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EventEmitter$3e$__["EventEmitter"] {
    namespaces;
    dataPack;
    wss;
    /**
  * Instantiate a Server class.
  * @constructor
  * @param {Object} options - ws constructor's parameters with rpc
  * @param {DataPack} dataPack - data pack contains encoder and decoder
  * @return {Server} - returns a new Server instance
  */ constructor(options, dataPack){
        super();
        this.namespaces = {};
        if (!dataPack) this.dataPack = new DefaultDataPack();
        else this.dataPack = dataPack;
        this.wss = new __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$ws$2f$lib$2f$websocket$2d$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WebSocketServer$3e$__["WebSocketServer"](options);
        this.wss.on("listening", ()=>this.emit("listening"));
        this.wss.on("connection", (socket, request)=>{
            const u = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse(request.url, true);
            const ns = u.pathname;
            if (u.query.socket_id) socket._id = u.query.socket_id;
            else socket._id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$rpc$2d$websockets$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v1$3e$__["v1"])();
            socket["_authenticated"] = false;
            socket.on("error", (error)=>this.emit("socket-error", socket, error));
            socket.on("close", ()=>{
                this.namespaces[ns].clients.delete(socket._id);
                for (const event of Object.keys(this.namespaces[ns].events)){
                    const index = this.namespaces[ns].events[event].sockets.indexOf(socket._id);
                    if (index >= 0) this.namespaces[ns].events[event].sockets.splice(index, 1);
                }
                this.emit("disconnection", socket);
            });
            if (!this.namespaces[ns]) this._generateNamespace(ns);
            this.namespaces[ns].clients.set(socket._id, socket);
            this.emit("connection", socket, request);
            return this._handleRPC(socket, ns);
        });
        this.wss.on("error", (error)=>this.emit("error", error));
    }
    /**
  * Registers an RPC method.
  * @method
  * @param {String} name - method name
  * @param {Function} fn - a callee function
  * @param {String} ns - namespace identifier
  * @throws {TypeError}
  * @return {Object} - returns an IMethod object
  */ register(name, fn, ns = "/") {
        if (!this.namespaces[ns]) this._generateNamespace(ns);
        this.namespaces[ns].rpc_methods[name] = {
            fn,
            protected: false
        };
        return {
            protected: ()=>this._makeProtectedMethod(name, ns),
            public: ()=>this._makePublicMethod(name, ns)
        };
    }
    /**
  * Sets an auth method.
  * @method
  * @param {Function} fn - an arbitrary auth method
  * @param {String} ns - namespace identifier
  * @throws {TypeError}
  * @return {Undefined}
  */ setAuth(fn, ns = "/") {
        this.register("rpc.login", fn, ns);
    }
    /**
  * Marks an RPC method as protected.
  * @method
  * @param {String} name - method name
  * @param {String} ns - namespace identifier
  * @return {Undefined}
  */ _makeProtectedMethod(name, ns = "/") {
        this.namespaces[ns].rpc_methods[name].protected = true;
    }
    /**
  * Marks an RPC method as public.
  * @method
  * @param {String} name - method name
  * @param {String} ns - namespace identifier
  * @return {Undefined}
  */ _makePublicMethod(name, ns = "/") {
        this.namespaces[ns].rpc_methods[name].protected = false;
    }
    /**
  * Marks an event as protected.
  * @method
  * @param {String} name - event name
  * @param {String} ns - namespace identifier
  * @return {Undefined}
  */ _makeProtectedEvent(name, ns = "/") {
        this.namespaces[ns].events[name].protected = true;
    }
    /**
  * Marks an event as public.
  * @method
  * @param {String} name - event name
  * @param {String} ns - namespace identifier
  * @return {Undefined}
  */ _makePublicEvent(name, ns = "/") {
        this.namespaces[ns].events[name].protected = false;
    }
    /**
  * Removes a namespace and closes all connections
  * @method
  * @param {String} ns - namespace identifier
  * @throws {TypeError}
  * @return {Undefined}
  */ closeNamespace(ns) {
        const namespace = this.namespaces[ns];
        if (namespace) {
            delete namespace.rpc_methods;
            delete namespace.events;
            for (const socket of namespace.clients.values())socket.close();
            delete this.namespaces[ns];
        }
    }
    /**
  * Creates a new event that can be emitted to clients.
  * @method
  * @param {String} name - event name
  * @param {String} ns - namespace identifier
  * @throws {TypeError}
  * @return {Object} - returns an IEvent object
  */ event(name, ns = "/") {
        if (!this.namespaces[ns]) this._generateNamespace(ns);
        else {
            const index = this.namespaces[ns].events[name];
            if (index !== void 0) throw new Error(`Already registered event ${ns}${name}`);
        }
        this.namespaces[ns].events[name] = {
            sockets: [],
            protected: false
        };
        this.on(name, (...params)=>{
            if (params.length === 1 && params[0] instanceof Object) params = params[0];
            for (const socket_id of this.namespaces[ns].events[name].sockets){
                const socket = this.namespaces[ns].clients.get(socket_id);
                if (!socket) continue;
                socket.send(this.dataPack.encode({
                    notification: name,
                    params
                }));
            }
        });
        return {
            protected: ()=>this._makeProtectedEvent(name, ns),
            public: ()=>this._makePublicEvent(name, ns)
        };
    }
    /**
  * Returns a requested namespace object
  * @method
  * @param {String} name - namespace identifier
  * @throws {TypeError}
  * @return {Object} - namespace object
  */ of(name) {
        if (!this.namespaces[name]) this._generateNamespace(name);
        const self = this;
        return {
            // self.register convenience method
            register (fn_name, fn) {
                if (arguments.length !== 2) throw new Error("must provide exactly two arguments");
                if (typeof fn_name !== "string") throw new Error("name must be a string");
                if (typeof fn !== "function") throw new Error("handler must be a function");
                return self.register(fn_name, fn, name);
            },
            // self.event convenience method
            event (ev_name) {
                if (arguments.length !== 1) throw new Error("must provide exactly one argument");
                if (typeof ev_name !== "string") throw new Error("name must be a string");
                return self.event(ev_name, name);
            },
            // self.eventList convenience method
            get eventList () {
                return Object.keys(self.namespaces[name].events);
            },
            /**
      * Emits a specified event to this namespace.
      * @inner
      * @method
      * @param {String} event - event name
      * @param {Array} params - event parameters
      * @return {Undefined}
      */ emit (event, ...params) {
                const nsEvent = self.namespaces[name].events[event];
                if (nsEvent) for (const socket_id of nsEvent.sockets){
                    const socket = self.namespaces[name].clients.get(socket_id);
                    if (!socket) continue;
                    socket.send(self.dataPack.encode({
                        notification: event,
                        params
                    }));
                }
            },
            /**
      * Returns a name of this namespace.
      * @inner
      * @method
      * @kind constant
      * @return {String}
      */ get name () {
                return name;
            },
            /**
      * Returns a hash of websocket objects connected to this namespace.
      * @inner
      * @method
      * @return {Object}
      */ connected () {
                const socket_ids = [
                    ...self.namespaces[name].clients.keys()
                ];
                return socket_ids.reduce((acc, curr)=>({
                        ...acc,
                        [curr]: self.namespaces[name].clients.get(curr)
                    }), {});
            },
            /**
      * Returns a list of client unique identifiers connected to this namespace.
      * @inner
      * @method
      * @return {Array}
      */ clients () {
                return self.namespaces[name];
            }
        };
    }
    /**
  * Lists all created events in a given namespace. Defaults to "/".
  * @method
  * @param {String} ns - namespaces identifier
  * @readonly
  * @return {Array} - returns a list of created events
  */ eventList(ns = "/") {
        if (!this.namespaces[ns]) return [];
        return Object.keys(this.namespaces[ns].events);
    }
    /**
  * Creates a JSON-RPC 2.0 compliant error
  * @method
  * @param {Number} code - indicates the error type that occurred
  * @param {String} message - provides a short description of the error
  * @param {String|Object} data - details containing additional information about the error
  * @return {Object}
  */ createError(code, message, data) {
        return {
            code,
            message,
            data: data || null
        };
    }
    /**
  * Closes the server and terminates all clients.
  * @method
  * @return {Promise}
  */ close() {
        return new Promise((resolve, reject)=>{
            try {
                this.wss.close();
                this.emit("close");
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
    /**
  * Handles all WebSocket JSON RPC 2.0 requests.
  * @private
  * @param {Object} socket - ws socket instance
  * @param {String} ns - namespaces identifier
  * @return {Undefined}
  */ _handleRPC(socket, ns = "/") {
        socket.on("message", async (data)=>{
            const msg_options = {};
            if (data instanceof ArrayBuffer) {
                msg_options.binary = true;
                data = Buffer.from(data).toString();
            }
            if (socket.readyState !== 1) return;
            let parsedData;
            try {
                parsedData = this.dataPack.decode(data);
            } catch (error) {
                return socket.send(this.dataPack.encode({
                    jsonrpc: "2.0",
                    error: createError(-32700, error.toString()),
                    id: null
                }), msg_options);
            }
            if (Array.isArray(parsedData)) {
                if (!parsedData.length) return socket.send(this.dataPack.encode({
                    jsonrpc: "2.0",
                    error: createError(-32600, "Invalid array"),
                    id: null
                }), msg_options);
                const responses = [];
                for (const message of parsedData){
                    const response2 = await this._runMethod(message, socket._id, ns);
                    if (!response2) continue;
                    responses.push(response2);
                }
                if (!responses.length) return;
                return socket.send(this.dataPack.encode(responses), msg_options);
            }
            const response = await this._runMethod(parsedData, socket._id, ns);
            if (!response) return;
            return socket.send(this.dataPack.encode(response), msg_options);
        });
    }
    /**
  * Runs a defined RPC method.
  * @private
  * @param {Object} message - a message received
  * @param {Object} socket_id - user's socket id
  * @param {String} ns - namespaces identifier
  * @return {Object|undefined}
  */ async _runMethod(message, socket_id, ns = "/") {
        if (typeof message !== "object" || message === null) return {
            jsonrpc: "2.0",
            error: createError(-32600),
            id: null
        };
        if (message.jsonrpc !== "2.0") return {
            jsonrpc: "2.0",
            error: createError(-32600, "Invalid JSON RPC version"),
            id: message.id || null
        };
        if (!message.method) return {
            jsonrpc: "2.0",
            error: createError(-32602, "Method not specified"),
            id: message.id || null
        };
        if (typeof message.method !== "string") return {
            jsonrpc: "2.0",
            error: createError(-32600, "Invalid method name"),
            id: message.id || null
        };
        if (message.params && typeof message.params === "string") return {
            jsonrpc: "2.0",
            error: createError(-32600),
            id: message.id || null
        };
        if (message.method === "rpc.on") {
            if (!message.params) return {
                jsonrpc: "2.0",
                error: createError(-32e3),
                id: message.id || null
            };
            const results = {};
            const event_names = Object.keys(this.namespaces[ns].events);
            for (const name of message.params){
                const index = event_names.indexOf(name);
                const namespace = this.namespaces[ns];
                if (index === -1) {
                    results[name] = "provided event invalid";
                    continue;
                }
                if (namespace.events[event_names[index]].protected === true && namespace.clients.get(socket_id)["_authenticated"] === false) {
                    return {
                        jsonrpc: "2.0",
                        error: createError(-32606),
                        id: message.id || null
                    };
                }
                const socket_index = namespace.events[event_names[index]].sockets.indexOf(socket_id);
                if (socket_index >= 0) {
                    results[name] = "socket has already been subscribed to event";
                    continue;
                }
                namespace.events[event_names[index]].sockets.push(socket_id);
                results[name] = "ok";
            }
            return {
                jsonrpc: "2.0",
                result: results,
                id: message.id || null
            };
        } else if (message.method === "rpc.off") {
            if (!message.params) return {
                jsonrpc: "2.0",
                error: createError(-32e3),
                id: message.id || null
            };
            const results = {};
            for (const name of message.params){
                if (!this.namespaces[ns].events[name]) {
                    results[name] = "provided event invalid";
                    continue;
                }
                const index = this.namespaces[ns].events[name].sockets.indexOf(socket_id);
                if (index === -1) {
                    results[name] = "not subscribed";
                    continue;
                }
                this.namespaces[ns].events[name].sockets.splice(index, 1);
                results[name] = "ok";
            }
            return {
                jsonrpc: "2.0",
                result: results,
                id: message.id || null
            };
        } else if (message.method === "rpc.login") {
            if (!message.params) return {
                jsonrpc: "2.0",
                error: createError(-32604),
                id: message.id || null
            };
        }
        if (!this.namespaces[ns].rpc_methods[message.method]) {
            return {
                jsonrpc: "2.0",
                error: createError(-32601),
                id: message.id || null
            };
        }
        let response = null;
        if (this.namespaces[ns].rpc_methods[message.method].protected === true && this.namespaces[ns].clients.get(socket_id)["_authenticated"] === false) {
            return {
                jsonrpc: "2.0",
                error: createError(-32605),
                id: message.id || null
            };
        }
        try {
            response = await this.namespaces[ns].rpc_methods[message.method].fn(message.params, socket_id);
        } catch (error) {
            if (!message.id) return;
            if (error instanceof Error) return {
                jsonrpc: "2.0",
                error: {
                    code: -32e3,
                    message: error.name,
                    data: error.message
                },
                id: message.id
            };
            return {
                jsonrpc: "2.0",
                error,
                id: message.id
            };
        }
        if (!message.id) return;
        if (message.method === "rpc.login" && response === true) {
            const s = this.namespaces[ns].clients.get(socket_id);
            s["_authenticated"] = true;
            this.namespaces[ns].clients.set(socket_id, s);
        }
        return {
            jsonrpc: "2.0",
            result: response,
            id: message.id
        };
    }
    /**
  * Generate a new namespace store.
  * Also preregister some special namespace methods.
  * @private
  * @param {String} name - namespaces identifier
  * @return {undefined}
  */ _generateNamespace(name) {
        this.namespaces[name] = {
            rpc_methods: {
                __listMethods: {
                    fn: ()=>Object.keys(this.namespaces[name].rpc_methods),
                    protected: false
                }
            },
            clients: /* @__PURE__ */ new Map(),
            events: {}
        };
    }
};
var RPC_ERRORS = /* @__PURE__ */ new Map([
    [
        -32e3,
        "Event not provided"
    ],
    [
        -32600,
        "Invalid Request"
    ],
    [
        -32601,
        "Method not found"
    ],
    [
        -32602,
        "Invalid params"
    ],
    [
        -32603,
        "Internal error"
    ],
    [
        -32604,
        "Params not found"
    ],
    [
        -32605,
        "Method forbidden"
    ],
    [
        -32606,
        "Event forbidden"
    ],
    [
        -32700,
        "Parse error"
    ]
]);
function createError(code, details) {
    const error = {
        code,
        message: RPC_ERRORS.get(code) || "Internal Server Error"
    };
    if (details) error["data"] = details;
    return error;
}
// src/index.ts
var Client = class extends CommonClient {
    constructor(address = "ws://localhost:8080", { autoconnect = true, reconnect = true, reconnect_interval = 1e3, max_reconnects = 5, ...rest_options } = {}, generate_request_id){
        super(WebSocket, address, {
            autoconnect,
            reconnect,
            reconnect_interval,
            max_reconnects,
            ...rest_options
        }, generate_request_id);
    }
};
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/jayson/lib/generateRequest.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const uuid = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)").v4;
/**
 *  Generates a JSON-RPC 1.0 or 2.0 request
 *  @param {String} method Name of method to call
 *  @param {Array|Object} params Array of parameters passed to the method as specified, or an object of parameter names and corresponding value
 *  @param {String|Number|null} [id] Request ID can be a string, number, null for explicit notification or left out for automatic generation
 *  @param {Object} [options]
 *  @param {Number} [options.version=2] JSON-RPC version to use (1 or 2)
 *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it
 *  @param {Function} [options.generator] Passed the request, and the options object and is expected to return a request ID
 *  @throws {TypeError} If any of the parameters are invalid
 *  @return {Object} A JSON-RPC 1.0 or 2.0 request
 *  @memberOf Utils
 */ const generateRequest = function(method, params, id, options) {
    if (typeof method !== 'string') {
        throw new TypeError(method + ' must be a string');
    }
    options = options || {};
    // check valid version provided
    const version = typeof options.version === 'number' ? options.version : 2;
    if (version !== 1 && version !== 2) {
        throw new TypeError(version + ' must be 1 or 2');
    }
    const request = {
        method: method
    };
    if (version === 2) {
        request.jsonrpc = '2.0';
    }
    if (params) {
        // params given, but invalid?
        if (typeof params !== 'object' && !Array.isArray(params)) {
            throw new TypeError(params + ' must be an object, array or omitted');
        }
        request.params = params;
    }
    // if id was left out, generate one (null means explicit notification)
    if (typeof id === 'undefined') {
        const generator = typeof options.generator === 'function' ? options.generator : function() {
            return uuid();
        };
        request.id = generator(request, options);
    } else if (version === 2 && id === null) {
        // we have a version 2 notification
        if (options.notificationIdNull) {
            request.id = null; // id will not be set at all unless option provided
        }
    } else {
        request.id = id;
    }
    return request;
};
module.exports = generateRequest;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/jayson/lib/client/browser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const uuid = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/uuid/dist/esm-node/index.js [app-ssr] (ecmascript)").v4;
const generateRequest = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/jayson/lib/generateRequest.js [app-ssr] (ecmascript)");
/**
 * Constructor for a Jayson Browser Client that does not depend any node.js core libraries
 * @class ClientBrowser
 * @param {Function} callServer Method that calls the server, receives the stringified request and a regular node-style callback
 * @param {Object} [options]
 * @param {Function} [options.reviver] Reviver function for JSON
 * @param {Function} [options.replacer] Replacer function for JSON
 * @param {Number} [options.version=2] JSON-RPC version to use (1|2)
 * @param {Function} [options.generator] Function to use for generating request IDs
 *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it
 * @return {ClientBrowser}
 */ const ClientBrowser = function(callServer, options) {
    if (!(this instanceof ClientBrowser)) {
        return new ClientBrowser(callServer, options);
    }
    if (!options) {
        options = {};
    }
    this.options = {
        reviver: typeof options.reviver !== 'undefined' ? options.reviver : null,
        replacer: typeof options.replacer !== 'undefined' ? options.replacer : null,
        generator: typeof options.generator !== 'undefined' ? options.generator : function() {
            return uuid();
        },
        version: typeof options.version !== 'undefined' ? options.version : 2,
        notificationIdNull: typeof options.notificationIdNull === 'boolean' ? options.notificationIdNull : false
    };
    this.callServer = callServer;
};
module.exports = ClientBrowser;
/**
 *  Creates a request and dispatches it if given a callback.
 *  @param {String|Array} method A batch request if passed an Array, or a method name if passed a String
 *  @param {Array|Object} [params] Parameters for the method
 *  @param {String|Number} [id] Optional id. If undefined an id will be generated. If null it creates a notification request
 *  @param {Function} [callback] Request callback. If specified, executes the request rather than only returning it.
 *  @throws {TypeError} Invalid parameters
 *  @return {Object} JSON-RPC 1.0 or 2.0 compatible request
 */ ClientBrowser.prototype.request = function(method, params, id, callback) {
    const self = this;
    let request = null;
    // is this a batch request?
    const isBatch = Array.isArray(method) && typeof params === 'function';
    if (this.options.version === 1 && isBatch) {
        throw new TypeError('JSON-RPC 1.0 does not support batching');
    }
    // is this a raw request?
    const isRaw = !isBatch && method && typeof method === 'object' && typeof params === 'function';
    if (isBatch || isRaw) {
        callback = params;
        request = method;
    } else {
        if (typeof id === 'function') {
            callback = id;
            // specifically undefined because "null" is a notification request
            id = undefined;
        }
        const hasCallback = typeof callback === 'function';
        try {
            request = generateRequest(method, params, id, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull
            });
        } catch (err) {
            if (hasCallback) {
                callback(err);
                return;
            }
            throw err;
        }
        // no callback means we should just return a raw request
        if (!hasCallback) {
            return request;
        }
    }
    let message;
    try {
        message = JSON.stringify(request, this.options.replacer);
    } catch (err) {
        callback(err);
        return;
    }
    this.callServer(message, function(err, response) {
        self._parseResponse(err, response, callback);
    });
    // always return the raw request
    return request;
};
/**
 * Parses a response from a server
 * @param {Object} err Error to pass on that is unrelated to the actual response
 * @param {String} responseText JSON-RPC 1.0 or 2.0 response
 * @param {Function} callback Callback that will receive different arguments depending on the amount of parameters
 * @private
 */ ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
    if (err) {
        callback(err);
        return;
    }
    if (!responseText) {
        // empty response text, assume that is correct because it could be a
        // notification which jayson does not give any body for
        callback();
        return;
    }
    let response;
    try {
        response = JSON.parse(responseText, this.options.reviver);
    } catch (err) {
        callback(err);
        return;
    }
    if (callback.length === 3) {
        // if callback length is 3, we split callback arguments on error and response
        // is batch response?
        if (Array.isArray(response)) {
            // necessary to split strictly on validity according to spec here
            const isError = function(res) {
                return typeof res.error !== 'undefined';
            };
            const isNotError = function(res) {
                return !isError(res);
            };
            callback(null, response.filter(isError), response.filter(isNotError));
            return;
        } else {
            // split regardless of validity
            callback(null, response.error, response.result);
            return;
        }
    }
    callback(null, response);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/tr46/index.js [app-ssr] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/public-api.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.URL = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)").parseURL;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/node-fetch/lib/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortError",
    ()=>AbortError,
    "FetchError",
    ()=>FetchError,
    "Headers",
    ()=>Headers,
    "Request",
    ()=>Request,
    "Response",
    ()=>Response,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/whatwg-url/lib/public-api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/zlib [external] (zlib, cjs)");
;
;
;
;
;
;
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
try {
    convert = (()=>{
        const e = new Error("Cannot find module 'encoding'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })().convert;
} catch (e) {}
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"])) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    if (typeof convert !== 'function') {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"] && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"].STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse;
const format_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["default"] : __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"]).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH,
                finishFlush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflate());
                    } else {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress === 'function') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
const __TURBOPACK__default__export__ = fetch;
;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
var vars = process.config && process.config.variables || {};
var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
var abi = process.versions.modules // TODO: support old node where this is undef
;
var runtime = isElectron() ? 'electron' : isNwjs() ? 'node-webkit' : 'node';
var arch = process.env.npm_config_arch || os.arch();
var platform = process.env.npm_config_platform || os.platform();
var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc');
var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || '';
var uv = (process.versions.uv || '').split('.')[0];
module.exports = load;
function load(dir) {
    return runtimeRequire(load.resolve(dir));
}
load.resolve = load.path = function(dir) {
    dir = path.resolve(dir || '.');
    try {
        var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
        if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
    } catch (err) {}
    if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
        if (release) return release;
        var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
        if (debug) return debug;
    }
    var prebuild = resolve(dir);
    if (prebuild) return prebuild;
    var nearby = resolve(path.dirname(process.execPath));
    if (nearby) return nearby;
    var target = [
        'platform=' + platform,
        'arch=' + arch,
        'runtime=' + runtime,
        'abi=' + abi,
        'uv=' + uv,
        armv ? 'armv=' + armv : '',
        'libc=' + libc,
        'node=' + process.versions.node,
        process.versions.electron ? 'electron=' + process.versions.electron : '',
        typeof __webpack_require__ === 'function' ? 'webpack=true' : '' // eslint-disable-line
    ].filter(Boolean).join(' ');
    throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n');
    function resolve(dir) {
        // Find matching "prebuilds/<platform>-<arch>" directory
        var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple) return;
        // Find most specific flavor first
        var prebuilds = path.join(dir, 'prebuilds', tuple.name);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner) return path.join(prebuilds, winner.file);
    }
};
function readdirSync(dir) {
    try {
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}
function getFirst(dir, filter) {
    var files = readdirSync(dir).filter(filter);
    return files[0] && path.join(dir, files[0]);
}
function matchBuild(name) {
    return /\.node$/.test(name);
}
function parseTuple(name) {
    // Example: darwin-x64+arm64
    var arr = name.split('-');
    if (arr.length !== 2) return;
    var platform = arr[0];
    var architectures = arr[1].split('+');
    if (!platform) return;
    if (!architectures.length) return;
    if (!architectures.every(Boolean)) return;
    return {
        name,
        platform,
        architectures
    };
}
function matchTuple(platform, arch) {
    return function(tuple) {
        if (tuple == null) return false;
        if (tuple.platform !== platform) return false;
        return tuple.architectures.includes(arch);
    };
}
function compareTuples(a, b) {
    // Prefer single-arch prebuilds over multi-arch
    return a.architectures.length - b.architectures.length;
}
function parseTags(file) {
    var arr = file.split('.');
    var extension = arr.pop();
    var tags = {
        file: file,
        specificity: 0
    };
    if (extension !== 'node') return;
    for(var i = 0; i < arr.length; i++){
        var tag = arr[i];
        if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
            tags.runtime = tag;
        } else if (tag === 'napi') {
            tags.napi = true;
        } else if (tag.slice(0, 3) === 'abi') {
            tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === 'uv') {
            tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === 'armv') {
            tags.armv = tag.slice(4);
        } else if (tag === 'glibc' || tag === 'musl') {
            tags.libc = tag;
        } else {
            continue;
        }
        tags.specificity++;
    }
    return tags;
}
function matchTags(runtime, abi) {
    return function(tags) {
        if (tags == null) return false;
        if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false;
        if (tags.abi && tags.abi !== abi && !tags.napi) return false;
        if (tags.uv && tags.uv !== uv) return false;
        if (tags.armv && tags.armv !== armv) return false;
        if (tags.libc && tags.libc !== libc) return false;
        return true;
    };
}
function runtimeAgnostic(tags) {
    return tags.runtime === 'node' && tags.napi;
}
function compareTags(runtime) {
    // Precedence: non-agnostic runtime, abi over napi, then by specificity.
    return function(a, b) {
        if (a.runtime !== b.runtime) {
            return a.runtime === runtime ? -1 : 1;
        } else if (a.abi !== b.abi) {
            return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
            return a.specificity > b.specificity ? -1 : 1;
        } else {
            return 0;
        }
    };
}
function isNwjs() {
    return !!(process.versions && process.versions.nw);
}
function isElectron() {
    if (process.versions && process.versions.electron) return true;
    if (process.env.ELECTRON_RUN_AS_NODE) return true;
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.process && window.process.type === 'renderer';
}
function isAlpine(platform) {
    return platform === 'linux' && fs.existsSync('/etc/alpine-release');
}
// Exposed for unit tests
// TODO: move to lib
load.parseTags = parseTags;
load.matchTags = matchTags;
load.compareTags = compareTags;
load.parseTuple = parseTuple;
load.matchTuple = matchTuple;
load.compareTuples = compareTuples;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t // eslint-disable-line
;
if (typeof runtimeRequire.addon === 'function') {
    module.exports = runtimeRequire.addon.bind(runtimeRequire);
} else {
    module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/node-gyp-build/node-gyp-build.js [app-ssr] (ecmascript)");
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */ const mask = (source, mask, output, offset, length)=>{
    for(var i = 0; i < length; i++){
        output[offset + i] = source[i] ^ mask[i & 3];
    }
};
/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */ const unmask = (buffer, mask)=>{
    // Required until https://github.com/nodejs/node/issues/9006 is resolved.
    const length = buffer.length;
    for(var i = 0; i < length; i++){
        buffer[i] ^= mask[i & 3];
    }
};
module.exports = {
    mask,
    unmask
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/bufferutil/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/pfm-rust-solana-2026/web/node_modules/bufferutil"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/bufferutil/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */ function isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while(i < len){
        if ((buf[i] & 0x80) === 0x00) {
            i++;
        } else if ((buf[i] & 0xe0) === 0xc0) {
            if (i + 1 === len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i] & 0xfe) === 0xc0 // overlong
            ) {
                return false;
            }
            i += 2;
        } else if ((buf[i] & 0xf0) === 0xe0) {
            if (i + 2 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80 || // overlong
            buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0 // surrogate (U+D800 - U+DFFF)
            ) {
                return false;
            }
            i += 3;
        } else if ((buf[i] & 0xf8) === 0xf0) {
            if (i + 3 >= len || (buf[i + 1] & 0xc0) !== 0x80 || (buf[i + 2] & 0xc0) !== 0x80 || (buf[i + 3] & 0xc0) !== 0x80 || buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80 || // overlong
            buf[i] === 0xf4 && buf[i + 1] > 0x8f || buf[i] > 0xf4 // > U+10FFFF
            ) {
                return false;
            }
            i += 4;
        } else {
            return false;
        }
    }
    return true;
}
module.exports = isValidUTF8;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/utf-8-validate/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

try {
    module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/node-gyp-build/index.js [app-ssr] (ecmascript)")(("TURBOPACK compile-time value", "/ROOT/pfm-rust-solana-2026/web/node_modules/utf-8-validate"));
} catch (e) {
    module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/utf-8-validate/fallback.js [app-ssr] (ecmascript)");
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events){
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++){
        ee[i] = handlers[i].fn;
    }
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++){
            args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++){
                        args[j - 1] = arguments[j];
                    }
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
        }
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++){
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
            }
        }
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
//
// Expose the module.
//
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = EventEmitter;
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.js [app-ssr] (ecmascript) <export default as EventEmitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventEmitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pfm$2d$rust$2d$solana$2d$2026$2f$web$2f$node_modules$2f$eventemitter3$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pfm-rust-solana-2026/web/node_modules/eventemitter3/index.js [app-ssr] (ecmascript)");
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') {
        throw new Error('"toSJISFunc" is not a valid function.');
    }
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/bit-buffer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++){
            this.putBit((num >>> length - i - 1 & 1) === 1);
        }
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }
        this.length++;
    }
};
module.exports = BitBuffer;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/bit-matrix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) {
        throw new Error('BitMatrix size must be defined and greater than 0');
    }
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/alignment-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++){
        positions[i] = positions[i - 1] - intervals;
    }
    positions.push(6); // First coord is always 6
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++){
        for(let j = 0; j < posLength; j++){
            // Skip if position is occupied by finder patterns
            if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) {
                continue;
            }
            coords.push([
                pos[i],
                pos[j]
            ]);
        }
    }
    return coords;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/finder-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const getSymbolSize = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mask-pattern.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) {
                sameCountCol++;
            } else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) {
                sameCountRow++;
            } else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++){
        for(let col = 0; col < size - 1; col++){
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0) points++;
        }
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++){
        for(let row = 0; row < size; row++){
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
        }
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const ECLevel = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/galois-field.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1; // multiply by 2
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) {
            x ^= 0x11D;
        }
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++){
        EXP_TABLE[i] = EXP_TABLE[i - 255];
    }
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/polynomial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const GF = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/galois-field.js [app-ssr] (ecmascript)");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++){
        for(let j = 0; j < p2.length; j++){
            coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
    }
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++){
            result[i] ^= GF.mul(divisor[i], coeff);
        }
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++){
        poly = exports.mul(poly, new Uint8Array([
            1,
            GF.exp(i)
        ]));
    }
    return poly;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Polynomial = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/polynomial.js [app-ssr] (ecmascript)");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) {
        throw new Error('Encoder not initialized');
    }
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const VersionCheck = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1 << 0,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 1 << 1,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 1 << 2,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 1 << 3,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid version: ' + version);
    }
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') {
        throw new Error('Param is not a string');
    }
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
        return value;
    }
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/version.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const VersionCheck = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/version-check.js [app-ssr] (ecmascript)");
// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
        }
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
        }
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
    }
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) {
        throw new Error('Invalid QR Code version');
    }
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
            return 1;
        }
        seg = data[0];
    } else {
        seg = data;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error('Invalid QR Code version');
    }
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0){
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    }
    return version << 12 | d;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/format-info.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0){
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    }
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/numeric-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/alphanumeric-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
    }
};
module.exports = AlphanumericData;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/byte-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === 'string') {
        this.data = new TextEncoder().encode(data);
    } else {
        this.data = new Uint8Array(data);
    }
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++){
        bitBuffer.put(this.data[i], 8);
    }
};
module.exports = ByteData;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/kanji-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) {
            // Subtract 0x8140 from Shift JIS value
            value -= 0x8140;
        // For characters with Shift JIS values from 0xE040 to 0xEBBF
        } else if (value >= 0xE040 && value <= 0xEBBF) {
            // Subtract 0xC140 from Shift JIS value
            value -= 0xC140;
        } else {
            throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        }
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/segments.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const NumericData = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/numeric-data.js [app-ssr] (ecmascript)");
const AlphanumericData = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/alphanumeric-data.js [app-ssr] (ecmascript)");
const ByteData = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/byte-data.js [app-ssr] (ecmascript)");
const KanjiData = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/kanji-data.js [app-ssr] (ecmascript)");
const Regex = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/regex.js [app-ssr] (ecmascript)");
const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const dijkstra = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/dijkstrajs/dijkstra.js [app-ssr] (ecmascript)");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null){
        segments.push({
            data: result[0],
            index: result.index,
            mode: mode,
            length: result[0].length
        });
    }
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        'start'
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++){
        graph[prevNodeIds[n]].end = 0;
    }
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    }
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
    }
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') {
            acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++){
        optimizedSegs.push(graph.table[path[i]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/utils.js [app-ssr] (ecmascript)");
const ECLevel = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-level.js [app-ssr] (ecmascript)");
const BitBuffer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/bit-buffer.js [app-ssr] (ecmascript)");
const BitMatrix = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/bit-matrix.js [app-ssr] (ecmascript)");
const AlignmentPattern = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/alignment-pattern.js [app-ssr] (ecmascript)");
const FinderPattern = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/finder-pattern.js [app-ssr] (ecmascript)");
const MaskPattern = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mask-pattern.js [app-ssr] (ecmascript)");
const ECCode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/error-correction-code.js [app-ssr] (ecmascript)");
const ReedSolomonEncoder = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/reed-solomon-encoder.js [app-ssr] (ecmascript)");
const Version = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/version.js [app-ssr] (ecmascript)");
const FormatInfo = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/format-info.js [app-ssr] (ecmascript)");
const Mode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/mode.js [app-ssr] (ecmascript)");
const Segments = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/segments.js [app-ssr] (ecmascript)");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++){
                if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                    matrix.set(row + r, col + c, true, true);
                } else {
                    matrix.set(row + r, col + c, false, true);
                }
            }
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) {
            matrix.set(i, 8, mod, true);
        } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
        } else {
            matrix.set(size - 15 + i, 8, mod, true);
        }
        // horizontal
        if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
            matrix.set(8, 15 - i - 1, mod, true);
        }
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++){
                if (!matrix.isReserved(row, col - c)) {
                    let dark = false;
                    if (byteIndex < data.length) {
                        dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                    }
                    matrix.set(row, col - c, dark);
                    bitIndex--;
                    if (bitIndex === -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
    }
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0){
        buffer.putBit(0);
    }
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++){
        buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    }
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            if (i < dcData[r].length) {
                data[index++] = dcData[r][i];
            }
        }
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++){
        for(r = 0; r < ecTotalBlocks; r++){
            data[index++] = ecData[r][i];
        }
    }
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
    } else if (typeof data === 'string') {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else {
        throw new Error('Invalid data');
    }
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) {
        throw new Error('The amount of data is too big to be stored in a QR Code');
    }
    // If not specified, use min version as default
    if (!version) {
        version = bestVersion;
    // Check if the specified version can contain the data
    } else if (version < bestVersion) {
        throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
    }
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) {
        setupVersionInfo(modules, version);
    }
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) {
        // Find best mask pattern
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    }
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') {
        throw new Error('No input text');
    }
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
        }
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

function hex2rgba(hex) {
    if (typeof hex === 'number') {
        hex = hex.toString();
    }
    if (typeof hex !== 'string') {
        throw new Error('Color should be defined as hex string');
    }
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error('Invalid hex color: ' + hex);
    }
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
            return [
                c,
                c
            ];
        }));
    }
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++){
        for(let j = 0; j < symbolSize; j++){
            let posDst = (i * symbolSize + j) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
                const iSrc = Math.floor((i - scaledMargin) / scale);
                const jSrc = Math.floor((j - scaledMargin) / scale);
                pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
        }
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/canvas.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) {
        canvasEl = getCanvasElement();
    }
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else {
            moveBy++;
        }
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') {
        cb(null, svgTag);
    }
    return svgTag;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)");
const CanvasRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/canvas.js [app-ssr] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) {
        throw new Error('Callback required as last argument');
    }
    if (isLastArgCb) {
        if (argsNum < 2) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) {
            throw new Error('Too few arguments provided');
        }
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/png.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const PNG = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/png.js [app-ssr] (ecmascript)").PNG;
const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
exports.render = function render(qrData, options) {
    const opts = Utils.getOptions(options);
    const pngOpts = opts.rendererOpts;
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    pngOpts.width = size;
    pngOpts.height = size;
    const pngImage = new PNG(pngOpts);
    Utils.qrToImageData(pngImage.data, qrData, opts);
    return pngImage;
};
exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    exports.renderToBuffer(qrData, options, function(err, output) {
        if (err) cb(err);
        let url = 'data:image/png;base64,';
        url += output.toString('base64');
        cb(null, url);
    });
};
exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const png = exports.render(qrData, options);
    const buffer = [];
    png.on('error', cb);
    png.on('data', function(data) {
        buffer.push(data);
    });
    png.on('end', function() {
        cb(null, Buffer.concat(buffer));
    });
    png.pack();
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    let called = false;
    const done = (...args)=>{
        if (called) return;
        called = true;
        cb.apply(null, args);
    };
    const stream = fs.createWriteStream(path);
    stream.on('error', done);
    stream.on('close', done);
    exports.renderToFileStream(stream, qrData, options);
};
exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
    const png = exports.render(qrData, options);
    png.pack().pipe(stream);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utf8.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const Utils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utils.js [app-ssr] (ecmascript)");
const BLOCK_CHAR = {
    WW: ' ',
    WB: '▄',
    BB: '█',
    BW: '▀'
};
const INVERTED_BLOCK_CHAR = {
    BB: ' ',
    BW: '▄',
    WW: '█',
    WB: '▀'
};
function getBlockChar(top, bottom, blocks) {
    if (top && bottom) return blocks.BB;
    if (top && !bottom) return blocks.BW;
    if (!top && bottom) return blocks.WB;
    return blocks.WW;
}
exports.render = function(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    let blocks = BLOCK_CHAR;
    if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
        blocks = INVERTED_BLOCK_CHAR;
    }
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    let output = '';
    let hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
    hMargin = Array(opts.margin / 2 + 1).join(hMargin + '\n');
    const vMargin = Array(opts.margin + 1).join(blocks.WW);
    output += hMargin;
    for(let i = 0; i < size; i += 2){
        output += vMargin;
        for(let j = 0; j < size; j++){
            const topModule = data[i * size + j];
            const bottomModule = data[(i + 1) * size + j];
            output += getBlockChar(topModule, bottomModule, blocks);
        }
        output += vMargin + '\n';
    }
    output += hMargin.slice(0, -1);
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const utf8 = exports.render(qrData, options);
    fs.writeFile(path, utf8, cb);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// let Utils = require('./utils')
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    // let opts = Utils.getOptions(options)
    // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)
    const black = '\x1b[40m  \x1b[0m';
    const white = '\x1b[47m  \x1b[0m';
    let output = '';
    const hMargin = Array(size + 3).join(white);
    const vMargin = Array(2).join(white);
    output += hMargin + '\n';
    for(let i = 0; i < size; ++i){
        output += white;
        for(let j = 0; j < size; j++){
            // let topModule = data[i * size + j]
            // let bottomModule = data[(i + 1) * size + j]
            output += data[i * size + j] ? black : white; // getBlockChar(topModule, bottomModule)
        }
        // output += white+'\n'
        output += vMargin + '\n';
    }
    output += hMargin + '\n';
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
}; /*
exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  let fs = require('fs')
  let utf8 = exports.render(qrData, options)
  fs.writeFile(path, utf8, cb)
}
*/ 
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const backgroundWhite = '\x1b[47m';
const backgroundBlack = '\x1b[40m';
const foregroundWhite = '\x1b[37m';
const foregroundBlack = '\x1b[30m';
const reset = '\x1b[0m';
const lineSetupNormal = backgroundWhite + foregroundBlack // setup colors
;
const lineSetupInverse = backgroundBlack + foregroundWhite // setup colors
;
const createPalette = function(lineSetup, foregroundWhite, foregroundBlack) {
    return {
        // 1 ... white, 2 ... black, 0 ... transparent (default)
        '00': reset + ' ' + lineSetup,
        '01': reset + foregroundWhite + '▄' + lineSetup,
        '02': reset + foregroundBlack + '▄' + lineSetup,
        10: reset + foregroundWhite + '▀' + lineSetup,
        11: ' ',
        12: '▄',
        20: reset + foregroundBlack + '▀' + lineSetup,
        21: '▀',
        22: '█'
    };
};
/**
 * Returns code for QR pixel
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {'0' | '1' | '2'}
 */ const mkCodePixel = function(modules, size, x, y) {
    const sizePlus = size + 1;
    if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1) return '0';
    if (x >= size || y >= size || y < 0 || x < 0) return '1';
    const idx = y * size + x;
    return modules[idx] ? '2' : '1';
};
/**
 * Returns code for four QR pixels. Suitable as key in palette.
 * @param {boolean[][]} modules
 * @param {number} size
 * @param {number} x
 * @param {number} y
 * @return {keyof palette}
 */ const mkCode = function(modules, size, x, y) {
    return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
};
exports.render = function(qrData, options, cb) {
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const inverse = !!(options && options.inverse);
    const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
    const white = inverse ? foregroundBlack : foregroundWhite;
    const black = inverse ? foregroundWhite : foregroundBlack;
    const palette = createPalette(lineSetup, white, black);
    const newLine = reset + '\n' + lineSetup;
    let output = lineSetup // setup colors
    ;
    for(let y = -1; y < size + 1; y += 2){
        for(let x = -1; x < size; x++){
            output += palette[mkCode(data, size, x, y)];
        }
        output += palette[mkCode(data, size, size, y)] + newLine;
    }
    output += reset;
    if (typeof cb === 'function') {
        cb(null, output);
    }
    return output;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const big = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal/terminal.js [app-ssr] (ecmascript)");
const small = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal/terminal-small.js [app-ssr] (ecmascript)");
exports.render = function(qrData, options, cb) {
    if (options && options.small) {
        return small.render(qrData, options, cb);
    }
    return big.render(qrData, options, cb);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const svgTagRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/svg-tag.js [app-ssr] (ecmascript)");
exports.render = svgTagRenderer.render;
exports.renderToFile = function renderToFile(path, qrData, options, cb) {
    if (typeof cb === 'undefined') {
        cb = options;
        options = undefined;
    }
    const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
    const svgTag = exports.render(qrData, options);
    const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + svgTag;
    fs.writeFile(path, xmlStr, cb);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const canPromise = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/can-promise.js [app-ssr] (ecmascript)");
const QRCode = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/core/qrcode.js [app-ssr] (ecmascript)");
const PngRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/png.js [app-ssr] (ecmascript)");
const Utf8Renderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/utf8.js [app-ssr] (ecmascript)");
const TerminalRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/terminal.js [app-ssr] (ecmascript)");
const SvgRenderer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/renderer/svg.js [app-ssr] (ecmascript)");
function checkParams(text, opts, cb) {
    if (typeof text === 'undefined') {
        throw new Error('String required as first argument');
    }
    if (typeof cb === 'undefined') {
        cb = opts;
        opts = {};
    }
    if (typeof cb !== 'function') {
        if (!canPromise()) {
            throw new Error('Callback required as last argument');
        } else {
            opts = cb || {};
            cb = null;
        }
    }
    return {
        opts: opts,
        cb: cb
    };
}
function getTypeFromFilename(path) {
    return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
}
function getRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'txt':
        case 'utf8':
            return Utf8Renderer;
        case 'png':
        case 'image/png':
        default:
            return PngRenderer;
    }
}
function getStringRendererFromType(type) {
    switch(type){
        case 'svg':
            return SvgRenderer;
        case 'terminal':
            return TerminalRenderer;
        case 'utf8':
        default:
            return Utf8Renderer;
    }
}
function render(renderFunc, text, params) {
    if (!params.cb) {
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, params.opts);
                return renderFunc(data, params.opts, function(err, data) {
                    return err ? reject(err) : resolve(data);
                });
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, params.opts);
        return renderFunc(data, params.opts, params.cb);
    } catch (e) {
        params.cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/browser.js [app-ssr] (ecmascript)").toCanvas;
exports.toString = function toString(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const type = params.opts ? params.opts.type : undefined;
    const renderer = getStringRendererFromType(type);
    return render(renderer.render, text, params);
};
exports.toDataURL = function toDataURL(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToDataURL, text, params);
};
exports.toBuffer = function toBuffer(text, opts, cb) {
    const params = checkParams(text, opts, cb);
    const renderer = getRendererFromType(params.opts.type);
    return render(renderer.renderToBuffer, text, params);
};
exports.toFile = function toFile(path, text, opts, cb) {
    if (typeof path !== 'string' || !(typeof text === 'string' || typeof text === 'object')) {
        throw new Error('Invalid argument');
    }
    if (arguments.length < 3 && !canPromise()) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, cb);
    const type = params.opts.type || getTypeFromFilename(path);
    const renderer = getRendererFromType(type);
    const renderToFile = renderer.renderToFile.bind(null, path);
    return render(renderToFile, text, params);
};
exports.toFileStream = function toFileStream(stream, text, opts) {
    if (arguments.length < 2) {
        throw new Error('Too few arguments provided');
    }
    const params = checkParams(text, opts, stream.emit.bind(stream, 'error'));
    const renderer = getRendererFromType('png') // Only png support for now
    ;
    const renderToFileStream = renderer.renderToFileStream.bind(null, stream);
    render(renderToFileStream, text, params);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/ module.exports = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/qrcode/lib/server.js [app-ssr] (ecmascript)");
}),
"[project]/pfm-rust-solana-2026/web/node_modules/dijkstrajs/dijkstra.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes){
                if (adjacent_nodes.hasOwnProperty(v)) {
                    // Get the cost of the edge running from u to v.
                    cost_of_e = adjacent_nodes[v];
                    // Cost of s to u plus the cost of u to v across e--this is *a*
                    // cost from s to v that may or may not be less than the current
                    // known cost to v.
                    cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                    // If we haven't visited v yet OR if the current known cost from s to
                    // v is greater than the new cost we just found (cost of s to u plus
                    // cost of u to v across e), update v's cost in the cost list and
                    // update v's predecessor in the predecessor list (it's now u).
                    cost_of_s_to_v = costs[v];
                    first_visit = typeof costs[v] === 'undefined';
                    if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                        costs[v] = cost_of_s_to_u_plus_cost_of_e;
                        open.push(v, cost_of_s_to_u_plus_cost_of_e);
                        predecessors[v] = u;
                    }
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T){
                if (T.hasOwnProperty(key)) {
                    t[key] = T[key];
                }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
// node.js module exports
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = dijkstra;
}
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let ChunkStream = module.exports = function() {
    Stream.call(this);
    this._buffers = [];
    this._buffered = 0;
    this._reads = [];
    this._paused = false;
    this._encoding = "utf8";
    this.writable = true;
};
util.inherits(ChunkStream, Stream);
ChunkStream.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
    process.nextTick((function() {
        this._process();
        // its paused and there is not enought data then ask for more
        if (this._paused && this._reads && this._reads.length > 0) {
            this._paused = false;
            this.emit("drain");
        }
    }).bind(this));
};
ChunkStream.prototype.write = function(data, encoding) {
    if (!this.writable) {
        this.emit("error", new Error("Stream not writable"));
        return false;
    }
    let dataBuffer;
    if (Buffer.isBuffer(data)) {
        dataBuffer = data;
    } else {
        dataBuffer = Buffer.from(data, encoding || this._encoding);
    }
    this._buffers.push(dataBuffer);
    this._buffered += dataBuffer.length;
    this._process();
    // ok if there are no more read requests
    if (this._reads && this._reads.length === 0) {
        this._paused = true;
    }
    return this.writable && !this._paused;
};
ChunkStream.prototype.end = function(data, encoding) {
    if (data) {
        this.write(data, encoding);
    }
    this.writable = false;
    // already destroyed
    if (!this._buffers) {
        return;
    }
    // enqueue or handle end
    if (this._buffers.length === 0) {
        this._end();
    } else {
        this._buffers.push(null);
        this._process();
    }
};
ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;
ChunkStream.prototype._end = function() {
    if (this._reads.length > 0) {
        this.emit("error", new Error("Unexpected end of input"));
    }
    this.destroy();
};
ChunkStream.prototype.destroy = function() {
    if (!this._buffers) {
        return;
    }
    this.writable = false;
    this._reads = null;
    this._buffers = null;
    this.emit("close");
};
ChunkStream.prototype._processReadAllowingLess = function(read) {
    // ok there is any data so that we can satisfy this request
    this._reads.shift(); // == read
    // first we need to peek into first buffer
    let smallerBuf = this._buffers[0];
    // ok there is more data than we need
    if (smallerBuf.length > read.length) {
        this._buffered -= read.length;
        this._buffers[0] = smallerBuf.slice(read.length);
        read.func.call(this, smallerBuf.slice(0, read.length));
    } else {
        // ok this is less than maximum length so use it all
        this._buffered -= smallerBuf.length;
        this._buffers.shift(); // == smallerBuf
        read.func.call(this, smallerBuf);
    }
};
ChunkStream.prototype._processRead = function(read) {
    this._reads.shift(); // == read
    let pos = 0;
    let count = 0;
    let data = Buffer.alloc(read.length);
    // create buffer for all data
    while(pos < read.length){
        let buf = this._buffers[count++];
        let len = Math.min(buf.length, read.length - pos);
        buf.copy(data, pos, 0, len);
        pos += len;
        // last buffer wasn't used all so just slice it and leave
        if (len !== buf.length) {
            this._buffers[--count] = buf.slice(len);
        }
    }
    // remove all used buffers
    if (count > 0) {
        this._buffers.splice(0, count);
    }
    this._buffered -= read.length;
    read.func.call(this, data);
};
ChunkStream.prototype._process = function() {
    try {
        // as long as there is any data and read requests
        while(this._buffered > 0 && this._reads && this._reads.length > 0){
            let read = this._reads[0];
            // read any data (but no more than length)
            if (read.allowLess) {
                this._processReadAllowingLess(read);
            } else if (this._buffered >= read.length) {
                // ok we can meet some expectations
                this._processRead(read);
            } else {
                break;
            }
        }
        if (this._buffers && !this.writable) {
            this._end();
        }
    } catch (ex) {
        this.emit("error", ex);
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Adam 7
//   0 1 2 3 4 5 6 7
// 0 x 6 4 6 x 6 4 6
// 1 7 7 7 7 7 7 7 7
// 2 5 6 5 6 5 6 5 6
// 3 7 7 7 7 7 7 7 7
// 4 3 6 4 6 3 6 4 6
// 5 7 7 7 7 7 7 7 7
// 6 5 6 5 6 5 6 5 6
// 7 7 7 7 7 7 7 7 7
let imagePasses = [
    {
        // pass 1 - 1px
        x: [
            0
        ],
        y: [
            0
        ]
    },
    {
        // pass 2 - 1px
        x: [
            4
        ],
        y: [
            0
        ]
    },
    {
        // pass 3 - 2px
        x: [
            0,
            4
        ],
        y: [
            4
        ]
    },
    {
        // pass 4 - 4px
        x: [
            2,
            6
        ],
        y: [
            0,
            4
        ]
    },
    {
        // pass 5 - 8px
        x: [
            0,
            2,
            4,
            6
        ],
        y: [
            2,
            6
        ]
    },
    {
        // pass 6 - 16px
        x: [
            1,
            3,
            5,
            7
        ],
        y: [
            0,
            2,
            4,
            6
        ]
    },
    {
        // pass 7 - 32px
        x: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        y: [
            1,
            3,
            5,
            7
        ]
    }
];
exports.getImagePasses = function(width, height) {
    let images = [];
    let xLeftOver = width % 8;
    let yLeftOver = height % 8;
    let xRepeats = (width - xLeftOver) / 8;
    let yRepeats = (height - yLeftOver) / 8;
    for(let i = 0; i < imagePasses.length; i++){
        let pass = imagePasses[i];
        let passWidth = xRepeats * pass.x.length;
        let passHeight = yRepeats * pass.y.length;
        for(let j = 0; j < pass.x.length; j++){
            if (pass.x[j] < xLeftOver) {
                passWidth++;
            } else {
                break;
            }
        }
        for(let j = 0; j < pass.y.length; j++){
            if (pass.y[j] < yLeftOver) {
                passHeight++;
            } else {
                break;
            }
        }
        if (passWidth > 0 && passHeight > 0) {
            images.push({
                width: passWidth,
                height: passHeight,
                index: i
            });
        }
    }
    return images;
};
exports.getInterlaceIterator = function(width) {
    return function(x, y, pass) {
        let outerXLeftOver = x % imagePasses[pass].x.length;
        let outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
        let outerYLeftOver = y % imagePasses[pass].y.length;
        let outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
        return outerX * 4 + outerY * width * 4;
    };
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function paethPredictor(left, above, upLeft) {
    let paeth = left + above - upLeft;
    let pLeft = Math.abs(paeth - left);
    let pAbove = Math.abs(paeth - above);
    let pUpLeft = Math.abs(paeth - upLeft);
    if (pLeft <= pAbove && pLeft <= pUpLeft) {
        return left;
    }
    if (pAbove <= pUpLeft) {
        return above;
    }
    return upLeft;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)");
let paethPredictor = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)");
function getByteWidth(width, bpp, depth) {
    let byteWidth = width * bpp;
    if (depth !== 8) {
        byteWidth = Math.ceil(byteWidth / (8 / depth));
    }
    return byteWidth;
}
let Filter = module.exports = function(bitmapInfo, dependencies) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let interlace = bitmapInfo.interlace;
    let bpp = bitmapInfo.bpp;
    let depth = bitmapInfo.depth;
    this.read = dependencies.read;
    this.write = dependencies.write;
    this.complete = dependencies.complete;
    this._imageIndex = 0;
    this._images = [];
    if (interlace) {
        let passes = interlaceUtils.getImagePasses(width, height);
        for(let i = 0; i < passes.length; i++){
            this._images.push({
                byteWidth: getByteWidth(passes[i].width, bpp, depth),
                height: passes[i].height,
                lineIndex: 0
            });
        }
    } else {
        this._images.push({
            byteWidth: getByteWidth(width, bpp, depth),
            height: height,
            lineIndex: 0
        });
    }
    // when filtering the line we look at the pixel to the left
    // the spec also says it is done on a byte level regardless of the number of pixels
    // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
    // a pixel rather than just a different byte part. However if we are sub byte, we ignore.
    if (depth === 8) {
        this._xComparison = bpp;
    } else if (depth === 16) {
        this._xComparison = bpp * 2;
    } else {
        this._xComparison = 1;
    }
};
Filter.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
};
Filter.prototype._unFilterType1 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        unfilteredLine[x] = rawByte + f1Left;
    }
};
Filter.prototype._unFilterType2 = function(rawData, unfilteredLine, byteWidth) {
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f2Up = lastLine ? lastLine[x] : 0;
        unfilteredLine[x] = rawByte + f2Up;
    }
};
Filter.prototype._unFilterType3 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f3Up = lastLine ? lastLine[x] : 0;
        let f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f3Add = Math.floor((f3Left + f3Up) / 2);
        unfilteredLine[x] = rawByte + f3Add;
    }
};
Filter.prototype._unFilterType4 = function(rawData, unfilteredLine, byteWidth) {
    let xComparison = this._xComparison;
    let xBiggerThan = xComparison - 1;
    let lastLine = this._lastLine;
    for(let x = 0; x < byteWidth; x++){
        let rawByte = rawData[1 + x];
        let f4Up = lastLine ? lastLine[x] : 0;
        let f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
        let f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
        let f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
        unfilteredLine[x] = rawByte + f4Add;
    }
};
Filter.prototype._reverseFilterLine = function(rawData) {
    let filter = rawData[0];
    let unfilteredLine;
    let currentImage = this._images[this._imageIndex];
    let byteWidth = currentImage.byteWidth;
    if (filter === 0) {
        unfilteredLine = rawData.slice(1, byteWidth + 1);
    } else {
        unfilteredLine = Buffer.alloc(byteWidth);
        switch(filter){
            case 1:
                this._unFilterType1(rawData, unfilteredLine, byteWidth);
                break;
            case 2:
                this._unFilterType2(rawData, unfilteredLine, byteWidth);
                break;
            case 3:
                this._unFilterType3(rawData, unfilteredLine, byteWidth);
                break;
            case 4:
                this._unFilterType4(rawData, unfilteredLine, byteWidth);
                break;
            default:
                throw new Error("Unrecognised filter type - " + filter);
        }
    }
    this.write(unfilteredLine);
    currentImage.lineIndex++;
    if (currentImage.lineIndex >= currentImage.height) {
        this._lastLine = null;
        this._imageIndex++;
        currentImage = this._images[this._imageIndex];
    } else {
        this._lastLine = unfilteredLine;
    }
    if (currentImage) {
        // read, using the byte width that may be from the new current image
        this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
    } else {
        this._lastLine = null;
        this.complete();
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)");
let FilterAsync = module.exports = function(bitmapInfo) {
    ChunkStream.call(this);
    let buffers = [];
    let that = this;
    this._filter = new Filter(bitmapInfo, {
        read: this.read.bind(this),
        write: function(buffer) {
            buffers.push(buffer);
        },
        complete: function() {
            that.emit("complete", Buffer.concat(buffers));
        }
    });
    this._filter.start();
};
util.inherits(FilterAsync, ChunkStream);
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    PNG_SIGNATURE: [
        0x89,
        0x50,
        0x4e,
        0x47,
        0x0d,
        0x0a,
        0x1a,
        0x0a
    ],
    TYPE_IHDR: 0x49484452,
    TYPE_IEND: 0x49454e44,
    TYPE_IDAT: 0x49444154,
    TYPE_PLTE: 0x504c5445,
    TYPE_tRNS: 0x74524e53,
    TYPE_gAMA: 0x67414d41,
    // color-type bits
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    // color-type combinations
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
        0: 1,
        2: 3,
        3: 1,
        4: 2,
        6: 4
    },
    GAMMA_DIVISION: 100000
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let crcTable = [];
(function() {
    for(let i = 0; i < 256; i++){
        let currentCrc = i;
        for(let j = 0; j < 8; j++){
            if (currentCrc & 1) {
                currentCrc = 0xedb88320 ^ currentCrc >>> 1;
            } else {
                currentCrc = currentCrc >>> 1;
            }
        }
        crcTable[i] = currentCrc;
    }
})();
let CrcCalculator = module.exports = function() {
    this._crc = -1;
};
CrcCalculator.prototype.write = function(data) {
    for(let i = 0; i < data.length; i++){
        this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ this._crc >>> 8;
    }
    return true;
};
CrcCalculator.prototype.crc32 = function() {
    return this._crc ^ -1;
};
CrcCalculator.crc32 = function(buf) {
    let crc = -1;
    for(let i = 0; i < buf.length; i++){
        crc = crcTable[(crc ^ buf[i]) & 0xff] ^ crc >>> 8;
    }
    return crc ^ -1;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let CrcCalculator = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)");
let Parser = module.exports = function(options, dependencies) {
    this._options = options;
    options.checkCRC = options.checkCRC !== false;
    this._hasIHDR = false;
    this._hasIEND = false;
    this._emittedHeadersFinished = false;
    // input flags/metadata
    this._palette = [];
    this._colorType = 0;
    this._chunks = {};
    this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
    this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
    this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
    this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
    this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
    this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
    this.read = dependencies.read;
    this.error = dependencies.error;
    this.metadata = dependencies.metadata;
    this.gamma = dependencies.gamma;
    this.transColor = dependencies.transColor;
    this.palette = dependencies.palette;
    this.parsed = dependencies.parsed;
    this.inflateData = dependencies.inflateData;
    this.finished = dependencies.finished;
    this.simpleTransparency = dependencies.simpleTransparency;
    this.headersFinished = dependencies.headersFinished || function() {};
};
Parser.prototype.start = function() {
    this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
};
Parser.prototype._parseSignature = function(data) {
    let signature = constants.PNG_SIGNATURE;
    for(let i = 0; i < signature.length; i++){
        if (data[i] !== signature[i]) {
            this.error(new Error("Invalid file signature"));
            return;
        }
    }
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._parseChunkBegin = function(data) {
    // chunk content length
    let length = data.readUInt32BE(0);
    // chunk type
    let type = data.readUInt32BE(4);
    let name = "";
    for(let i = 4; i < 8; i++){
        name += String.fromCharCode(data[i]);
    }
    //console.log('chunk ', name, length);
    // chunk flags
    let ancillary = Boolean(data[4] & 0x20); // or critical
    //    priv = Boolean(data[5] & 0x20), // or public
    //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe
    if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
        this.error(new Error("Expected IHDR on beggining"));
        return;
    }
    this._crc = new CrcCalculator();
    this._crc.write(Buffer.from(name));
    if (this._chunks[type]) {
        return this._chunks[type](length);
    }
    if (!ancillary) {
        this.error(new Error("Unsupported critical chunk type " + name));
        return;
    }
    this.read(length + 4, this._skipChunk.bind(this));
};
Parser.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
};
Parser.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
};
Parser.prototype._parseChunkEnd = function(data) {
    let fileCrc = data.readInt32BE(0);
    let calcCrc = this._crc.crc32();
    // check CRC
    if (this._options.checkCRC && calcCrc !== fileCrc) {
        this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
        return;
    }
    if (!this._hasIEND) {
        this.read(8, this._parseChunkBegin.bind(this));
    }
};
Parser.prototype._handleIHDR = function(length) {
    this.read(length, this._parseIHDR.bind(this));
};
Parser.prototype._parseIHDR = function(data) {
    this._crc.write(data);
    let width = data.readUInt32BE(0);
    let height = data.readUInt32BE(4);
    let depth = data[8];
    let colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha
    let compr = data[10];
    let filter = data[11];
    let interlace = data[12];
    // console.log('    width', width, 'height', height,
    //     'depth', depth, 'colorType', colorType,
    //     'compr', compr, 'filter', filter, 'interlace', interlace
    // );
    if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
        this.error(new Error("Unsupported bit depth " + depth));
        return;
    }
    if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
        this.error(new Error("Unsupported color type"));
        return;
    }
    if (compr !== 0) {
        this.error(new Error("Unsupported compression method"));
        return;
    }
    if (filter !== 0) {
        this.error(new Error("Unsupported filter method"));
        return;
    }
    if (interlace !== 0 && interlace !== 1) {
        this.error(new Error("Unsupported interlace method"));
        return;
    }
    this._colorType = colorType;
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true;
    this.metadata({
        width: width,
        height: height,
        depth: depth,
        interlace: Boolean(interlace),
        palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
        color: Boolean(colorType & constants.COLORTYPE_COLOR),
        alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
        bpp: bpp,
        colorType: colorType
    });
    this._handleChunkEnd();
};
Parser.prototype._handlePLTE = function(length) {
    this.read(length, this._parsePLTE.bind(this));
};
Parser.prototype._parsePLTE = function(data) {
    this._crc.write(data);
    let entries = Math.floor(data.length / 3);
    // console.log('Palette:', entries);
    for(let i = 0; i < entries; i++){
        this._palette.push([
            data[i * 3],
            data[i * 3 + 1],
            data[i * 3 + 2],
            0xff
        ]);
    }
    this.palette(this._palette);
    this._handleChunkEnd();
};
Parser.prototype._handleTRNS = function(length) {
    this.simpleTransparency();
    this.read(length, this._parseTRNS.bind(this));
};
Parser.prototype._parseTRNS = function(data) {
    this._crc.write(data);
    // palette
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
        if (this._palette.length === 0) {
            this.error(new Error("Transparency chunk must be after palette"));
            return;
        }
        if (data.length > this._palette.length) {
            this.error(new Error("More transparent colors than palette size"));
            return;
        }
        for(let i = 0; i < data.length; i++){
            this._palette[i][3] = data[i];
        }
        this.palette(this._palette);
    }
    // for colorType 0 (grayscale) and 2 (rgb)
    // there might be one gray/color defined as transparent
    if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
        // grey, 2 bytes
        this.transColor([
            data.readUInt16BE(0)
        ]);
    }
    if (this._colorType === constants.COLORTYPE_COLOR) {
        this.transColor([
            data.readUInt16BE(0),
            data.readUInt16BE(2),
            data.readUInt16BE(4)
        ]);
    }
    this._handleChunkEnd();
};
Parser.prototype._handleGAMA = function(length) {
    this.read(length, this._parseGAMA.bind(this));
};
Parser.prototype._parseGAMA = function(data) {
    this._crc.write(data);
    this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);
    this._handleChunkEnd();
};
Parser.prototype._handleIDAT = function(length) {
    if (!this._emittedHeadersFinished) {
        this._emittedHeadersFinished = true;
        this.headersFinished();
    }
    this.read(-length, this._parseIDAT.bind(this, length));
};
Parser.prototype._parseIDAT = function(length, data) {
    this._crc.write(data);
    if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) {
        throw new Error("Expected palette not found");
    }
    this.inflateData(data);
    let leftOverLength = length - data.length;
    if (leftOverLength > 0) {
        this._handleIDAT(leftOverLength);
    } else {
        this._handleChunkEnd();
    }
};
Parser.prototype._handleIEND = function(length) {
    this.read(length, this._parseIEND.bind(this));
};
Parser.prototype._parseIEND = function(data) {
    this._crc.write(data);
    this._hasIEND = true;
    this._handleChunkEnd();
    if (this.finished) {
        this.finished();
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let interlaceUtils = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/interlace.js [app-ssr] (ecmascript)");
let pixelBppMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos === data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = 0xff;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 1 >= data.length) {
            throw new Error("Ran out of data");
        }
        let pixel = data[rawPos];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = data[rawPos + 1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 2 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = 0xff;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, data, pxPos, rawPos) {
        if (rawPos + 3 >= data.length) {
            throw new Error("Ran out of data");
        }
        pxData[pxPos] = data[rawPos];
        pxData[pxPos + 1] = data[rawPos + 1];
        pxData[pxPos + 2] = data[rawPos + 2];
        pxData[pxPos + 3] = data[rawPos + 3];
    }
];
let pixelBppCustomMapper = [
    // 0 - dummy entry
    function() {},
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = maxBit;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(pxData, pixelData, pxPos) {
        let pixel = pixelData[0];
        pxData[pxPos] = pixel;
        pxData[pxPos + 1] = pixel;
        pxData[pxPos + 2] = pixel;
        pxData[pxPos + 3] = pixelData[1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(pxData, pixelData, pxPos, maxBit) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = maxBit;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(pxData, pixelData, pxPos) {
        pxData[pxPos] = pixelData[0];
        pxData[pxPos + 1] = pixelData[1];
        pxData[pxPos + 2] = pixelData[2];
        pxData[pxPos + 3] = pixelData[3];
    }
];
function bitRetriever(data, depth) {
    let leftOver = [];
    let i = 0;
    function split() {
        if (i === data.length) {
            throw new Error("Ran out of data");
        }
        let byte = data[i];
        i++;
        let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
        switch(depth){
            default:
                throw new Error("unrecognised depth");
            case 16:
                byte2 = data[i];
                i++;
                leftOver.push((byte << 8) + byte2);
                break;
            case 4:
                byte2 = byte & 0x0f;
                byte1 = byte >> 4;
                leftOver.push(byte1, byte2);
                break;
            case 2:
                byte4 = byte & 3;
                byte3 = byte >> 2 & 3;
                byte2 = byte >> 4 & 3;
                byte1 = byte >> 6 & 3;
                leftOver.push(byte1, byte2, byte3, byte4);
                break;
            case 1:
                byte8 = byte & 1;
                byte7 = byte >> 1 & 1;
                byte6 = byte >> 2 & 1;
                byte5 = byte >> 3 & 1;
                byte4 = byte >> 4 & 1;
                byte3 = byte >> 5 & 1;
                byte2 = byte >> 6 & 1;
                byte1 = byte >> 7 & 1;
                leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
                break;
        }
    }
    return {
        get: function(count) {
            while(leftOver.length < count){
                split();
            }
            let returner = leftOver.slice(0, count);
            leftOver = leftOver.slice(count);
            return returner;
        },
        resetAfterLine: function() {
            leftOver.length = 0;
        },
        end: function() {
            if (i !== data.length) {
                throw new Error("extra data found");
            }
        }
    };
}
function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
            rawPos += bpp; //eslint-disable-line no-param-reassign
        }
    }
    return rawPos;
}
function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
    // eslint-disable-line max-params
    let imageWidth = image.width;
    let imageHeight = image.height;
    let imagePass = image.index;
    for(let y = 0; y < imageHeight; y++){
        for(let x = 0; x < imageWidth; x++){
            let pixelData = bits.get(bpp);
            let pxPos = getPxPos(x, y, imagePass);
            pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
        }
        bits.resetAfterLine();
    }
}
exports.dataToBitMap = function(data, bitmapInfo) {
    let width = bitmapInfo.width;
    let height = bitmapInfo.height;
    let depth = bitmapInfo.depth;
    let bpp = bitmapInfo.bpp;
    let interlace = bitmapInfo.interlace;
    let bits;
    if (depth !== 8) {
        bits = bitRetriever(data, depth);
    }
    let pxData;
    if (depth <= 8) {
        pxData = Buffer.alloc(width * height * 4);
    } else {
        pxData = new Uint16Array(width * height * 4);
    }
    let maxBit = Math.pow(2, depth) - 1;
    let rawPos = 0;
    let images;
    let getPxPos;
    if (interlace) {
        images = interlaceUtils.getImagePasses(width, height);
        getPxPos = interlaceUtils.getInterlaceIterator(width, height);
    } else {
        let nonInterlacedPxPos = 0;
        getPxPos = function() {
            let returner = nonInterlacedPxPos;
            nonInterlacedPxPos += 4;
            return returner;
        };
        images = [
            {
                width: width,
                height: height
            }
        ];
    }
    for(let imageIndex = 0; imageIndex < images.length; imageIndex++){
        if (depth === 8) {
            rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
        } else {
            mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
        }
    }
    if (depth === 8) {
        if (rawPos !== data.length) {
            throw new Error("extra data found");
        }
    } else {
        bits.end();
    }
    return pxData;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function dePalette(indata, outdata, width, height, palette) {
    let pxPos = 0;
    // use values from palette
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let color = palette[indata[pxPos]];
            if (!color) {
                throw new Error("index " + indata[pxPos] + " not in palette");
            }
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = color[i];
            }
            pxPos += 4;
        }
    }
}
function replaceTransparentColor(indata, outdata, width, height, transColor) {
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let makeTrans = false;
            if (transColor.length === 1) {
                if (transColor[0] === indata[pxPos]) {
                    makeTrans = true;
                }
            } else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) {
                makeTrans = true;
            }
            if (makeTrans) {
                for(let i = 0; i < 4; i++){
                    outdata[pxPos + i] = 0;
                }
            }
            pxPos += 4;
        }
    }
}
function scaleDepth(indata, outdata, width, height, depth) {
    let maxOutSample = 255;
    let maxInSample = Math.pow(2, depth) - 1;
    let pxPos = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            for(let i = 0; i < 4; i++){
                outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + 0.5);
            }
            pxPos += 4;
        }
    }
}
module.exports = function(indata, imageData) {
    let depth = imageData.depth;
    let width = imageData.width;
    let height = imageData.height;
    let colorType = imageData.colorType;
    let transColor = imageData.transColor;
    let palette = imageData.palette;
    let outdata = indata; // only different for 16 bits
    if (colorType === 3) {
        // paletted
        dePalette(indata, outdata, width, height, palette);
    } else {
        if (transColor) {
            replaceTransparentColor(indata, outdata, width, height, transColor);
        }
        // if it needs scaling
        if (depth !== 8) {
            // if we need to change the buffer size
            if (depth === 16) {
                outdata = Buffer.alloc(width * height * 4);
            }
            scaleDepth(indata, outdata, width, height, depth);
        }
    }
    return outdata;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let ChunkStream = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/chunkstream.js [app-ssr] (ecmascript)");
let FilterAsync = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse-async.js [app-ssr] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)");
let ParserAsync = module.exports = function(options) {
    ChunkStream.call(this);
    this._parser = new Parser(options, {
        read: this.read.bind(this),
        error: this._handleError.bind(this),
        metadata: this._handleMetaData.bind(this),
        gamma: this.emit.bind(this, "gamma"),
        palette: this._handlePalette.bind(this),
        transColor: this._handleTransColor.bind(this),
        finished: this._finished.bind(this),
        inflateData: this._inflateData.bind(this),
        simpleTransparency: this._simpleTransparency.bind(this),
        headersFinished: this._headersFinished.bind(this)
    });
    this._options = options;
    this.writable = true;
    this._parser.start();
};
util.inherits(ParserAsync, ChunkStream);
ParserAsync.prototype._handleError = function(err) {
    this.emit("error", err);
    this.writable = false;
    this.destroy();
    if (this._inflate && this._inflate.destroy) {
        this._inflate.destroy();
    }
    if (this._filter) {
        this._filter.destroy();
        // For backward compatibility with Node 7 and below.
        // Suppress errors due to _inflate calling write() even after
        // it's destroy()'ed.
        this._filter.on("error", function() {});
    }
    this.errord = true;
};
ParserAsync.prototype._inflateData = function(data) {
    if (!this._inflate) {
        if (this._bitmapInfo.interlace) {
            this._inflate = zlib.createInflate();
            this._inflate.on("error", this.emit.bind(this, "error"));
            this._filter.on("complete", this._complete.bind(this));
            this._inflate.pipe(this._filter);
        } else {
            let rowSize = (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1;
            let imageSize = rowSize * this._bitmapInfo.height;
            let chunkSize = Math.max(imageSize, zlib.Z_MIN_CHUNK);
            this._inflate = zlib.createInflate({
                chunkSize: chunkSize
            });
            let leftToInflate = imageSize;
            let emitError = this.emit.bind(this, "error");
            this._inflate.on("error", function(err) {
                if (!leftToInflate) {
                    return;
                }
                emitError(err);
            });
            this._filter.on("complete", this._complete.bind(this));
            let filterWrite = this._filter.write.bind(this._filter);
            this._inflate.on("data", function(chunk) {
                if (!leftToInflate) {
                    return;
                }
                if (chunk.length > leftToInflate) {
                    chunk = chunk.slice(0, leftToInflate);
                }
                leftToInflate -= chunk.length;
                filterWrite(chunk);
            });
            this._inflate.on("end", this._filter.end.bind(this._filter));
        }
    }
    this._inflate.write(data);
};
ParserAsync.prototype._handleMetaData = function(metaData) {
    this._metaData = metaData;
    this._bitmapInfo = Object.create(metaData);
    this._filter = new FilterAsync(this._bitmapInfo);
};
ParserAsync.prototype._handleTransColor = function(transColor) {
    this._bitmapInfo.transColor = transColor;
};
ParserAsync.prototype._handlePalette = function(palette) {
    this._bitmapInfo.palette = palette;
};
ParserAsync.prototype._simpleTransparency = function() {
    this._metaData.alpha = true;
};
ParserAsync.prototype._headersFinished = function() {
    // Up until this point, we don't know if we have a tRNS chunk (alpha)
    // so we can't emit metadata any earlier
    this.emit("metadata", this._metaData);
};
ParserAsync.prototype._finished = function() {
    if (this.errord) {
        return;
    }
    if (!this._inflate) {
        this.emit("error", "No Inflate block");
    } else {
        // no more data to inflate
        this._inflate.end();
    }
};
ParserAsync.prototype._complete = function(filteredData) {
    if (this.errord) {
        return;
    }
    let normalisedBitmapData;
    try {
        let bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
        normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
        bitmapData = null;
    } catch (ex) {
        this._handleError(ex);
        return;
    }
    this.emit("parsed", normalisedBitmapData);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/bitpacker.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
module.exports = function(dataIn, width, height, options) {
    let outHasAlpha = [
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) !== -1;
    if (options.colorType === options.inputColorType) {
        let bigEndian = function() {
            let buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] !== 256;
        }();
        // If no need to convert to grayscale and alpha is present/absent in both, take a fast route
        if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) {
            return dataIn;
        }
    }
    // map to a UInt16 array if data is 16bit, fix endianness below
    let data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
    let maxValue = 255;
    let inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];
    if (inBpp === 4 && !options.inputHasAlpha) {
        inBpp = 3;
    }
    let outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];
    if (options.bitDepth === 16) {
        maxValue = 65535;
        outBpp *= 2;
    }
    let outData = Buffer.alloc(width * height * outBpp);
    let inIndex = 0;
    let outIndex = 0;
    let bgColor = options.bgColor || {};
    if (bgColor.red === undefined) {
        bgColor.red = maxValue;
    }
    if (bgColor.green === undefined) {
        bgColor.green = maxValue;
    }
    if (bgColor.blue === undefined) {
        bgColor.blue = maxValue;
    }
    function getRGBA() {
        let red;
        let green;
        let blue;
        let alpha = maxValue;
        switch(options.inputColorType){
            case constants.COLORTYPE_COLOR_ALPHA:
                alpha = data[inIndex + 3];
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_COLOR:
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants.COLORTYPE_ALPHA:
                alpha = data[inIndex + 1];
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            case constants.COLORTYPE_GRAYSCALE:
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            default:
                throw new Error("input color type:" + options.inputColorType + " is not supported at present");
        }
        if (options.inputHasAlpha) {
            if (!outHasAlpha) {
                alpha /= maxValue;
                red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
                green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
                blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
            }
        }
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let rgba = getRGBA(data, inIndex);
            switch(options.colorType){
                case constants.COLORTYPE_COLOR_ALPHA:
                case constants.COLORTYPE_COLOR:
                    if (options.bitDepth === 8) {
                        outData[outIndex] = rgba.red;
                        outData[outIndex + 1] = rgba.green;
                        outData[outIndex + 2] = rgba.blue;
                        if (outHasAlpha) {
                            outData[outIndex + 3] = rgba.alpha;
                        }
                    } else {
                        outData.writeUInt16BE(rgba.red, outIndex);
                        outData.writeUInt16BE(rgba.green, outIndex + 2);
                        outData.writeUInt16BE(rgba.blue, outIndex + 4);
                        if (outHasAlpha) {
                            outData.writeUInt16BE(rgba.alpha, outIndex + 6);
                        }
                    }
                    break;
                case constants.COLORTYPE_ALPHA:
                case constants.COLORTYPE_GRAYSCALE:
                    {
                        // Convert to grayscale and alpha
                        let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
                        if (options.bitDepth === 8) {
                            outData[outIndex] = grayscale;
                            if (outHasAlpha) {
                                outData[outIndex + 1] = rgba.alpha;
                            }
                        } else {
                            outData.writeUInt16BE(grayscale, outIndex);
                            if (outHasAlpha) {
                                outData.writeUInt16BE(rgba.alpha, outIndex + 2);
                            }
                        }
                        break;
                    }
                default:
                    throw new Error("unrecognised color Type " + options.colorType);
            }
            inIndex += inBpp;
            outIndex += outBpp;
        }
    }
    return outData;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-pack.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let paethPredictor = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/paeth-predictor.js [app-ssr] (ecmascript)");
function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        rawData[rawPos + x] = pxData[pxPos + x];
    }
}
function filterSumNone(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let i = pxPos; i < length; i++){
        sum += Math.abs(pxData[i]);
    }
    return sum;
}
function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        rawData[rawPos + x] = val;
    }
}
function filterSumSub(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let val = pxData[pxPos + x] - left;
        sum += Math.abs(val);
    }
    return sum;
}
function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
    for(let x = 0; x < byteWidth; x++){
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - up;
        rawData[rawPos + x] = val;
    }
}
function filterSumUp(pxData, pxPos, byteWidth) {
    let sum = 0;
    let length = pxPos + byteWidth;
    for(let x = pxPos; x < length; x++){
        let up = pxPos > 0 ? pxData[x - byteWidth] : 0;
        let val = pxData[x] - up;
        sum += Math.abs(val);
    }
    return sum;
}
function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        rawData[rawPos + x] = val;
    }
}
function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let val = pxData[pxPos + x] - (left + up >> 1);
        sum += Math.abs(val);
    }
    return sum;
}
function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        rawData[rawPos + x] = val;
    }
}
function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
    let sum = 0;
    for(let x = 0; x < byteWidth; x++){
        let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
        let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
        let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
        let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
        sum += Math.abs(val);
    }
    return sum;
}
let filters = {
    0: filterNone,
    1: filterSub,
    2: filterUp,
    3: filterAvg,
    4: filterPaeth
};
let filterSums = {
    0: filterSumNone,
    1: filterSumSub,
    2: filterSumUp,
    3: filterSumAvg,
    4: filterSumPaeth
};
module.exports = function(pxData, width, height, options, bpp) {
    let filterTypes;
    if (!("filterType" in options) || options.filterType === -1) {
        filterTypes = [
            0,
            1,
            2,
            3,
            4
        ];
    } else if (typeof options.filterType === "number") {
        filterTypes = [
            options.filterType
        ];
    } else {
        throw new Error("unrecognised filter types");
    }
    if (options.bitDepth === 16) {
        bpp *= 2;
    }
    let byteWidth = width * bpp;
    let rawPos = 0;
    let pxPos = 0;
    let rawData = Buffer.alloc((byteWidth + 1) * height);
    let sel = filterTypes[0];
    for(let y = 0; y < height; y++){
        if (filterTypes.length > 1) {
            // find best filter for this line (with lowest sum of values)
            let min = Infinity;
            for(let i = 0; i < filterTypes.length; i++){
                let sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
                if (sum < min) {
                    sel = filterTypes[i];
                    min = sum;
                }
            }
        }
        rawData[rawPos] = sel;
        rawPos++;
        filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
        rawPos += byteWidth;
        pxPos += byteWidth;
    }
    return rawData;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let constants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let CrcStream = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/crc.js [app-ssr] (ecmascript)");
let bitPacker = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/bitpacker.js [app-ssr] (ecmascript)");
let filter = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-pack.js [app-ssr] (ecmascript)");
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let Packer = module.exports = function(options) {
    this._options = options;
    options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
    options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
    options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
    options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
    options.deflateFactory = options.deflateFactory || zlib.createDeflate;
    options.bitDepth = options.bitDepth || 8;
    // This is outputColorType
    options.colorType = typeof options.colorType === "number" ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
    options.inputColorType = typeof options.inputColorType === "number" ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.colorType) === -1) {
        throw new Error("option color type:" + options.colorType + " is not supported at present");
    }
    if ([
        constants.COLORTYPE_GRAYSCALE,
        constants.COLORTYPE_COLOR,
        constants.COLORTYPE_COLOR_ALPHA,
        constants.COLORTYPE_ALPHA
    ].indexOf(options.inputColorType) === -1) {
        throw new Error("option input color type:" + options.inputColorType + " is not supported at present");
    }
    if (options.bitDepth !== 8 && options.bitDepth !== 16) {
        throw new Error("option bit depth:" + options.bitDepth + " is not supported at present");
    }
};
Packer.prototype.getDeflateOptions = function() {
    return {
        chunkSize: this._options.deflateChunkSize,
        level: this._options.deflateLevel,
        strategy: this._options.deflateStrategy
    };
};
Packer.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
};
Packer.prototype.filterData = function(data, width, height) {
    // convert to correct format for filtering (e.g. right bpp and bit depth)
    let packedData = bitPacker(data, width, height, this._options);
    // filter pixel data
    let bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    let filteredData = filter(packedData, width, height, this._options, bpp);
    return filteredData;
};
Packer.prototype._packChunk = function(type, data) {
    let len = data ? data.length : 0;
    let buf = Buffer.alloc(len + 12);
    buf.writeUInt32BE(len, 0);
    buf.writeUInt32BE(type, 4);
    if (data) {
        data.copy(buf, 8);
    }
    buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
    return buf;
};
Packer.prototype.packGAMA = function(gamma) {
    let buf = Buffer.alloc(4);
    buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
    return this._packChunk(constants.TYPE_gAMA, buf);
};
Packer.prototype.packIHDR = function(width, height) {
    let buf = Buffer.alloc(13);
    buf.writeUInt32BE(width, 0);
    buf.writeUInt32BE(height, 4);
    buf[8] = this._options.bitDepth; // Bit depth
    buf[9] = this._options.colorType; // colorType
    buf[10] = 0; // compression
    buf[11] = 0; // filter
    buf[12] = 0; // interlace
    return this._packChunk(constants.TYPE_IHDR, buf);
};
Packer.prototype.packIDAT = function(data) {
    return this._packChunk(constants.TYPE_IDAT, data);
};
Packer.prototype.packIEND = function() {
    return this._packChunk(constants.TYPE_IEND, null);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer-async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let constants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)");
let PackerAsync = module.exports = function(opt) {
    Stream.call(this);
    let options = opt || {};
    this._packer = new Packer(options);
    this._deflate = this._packer.createDeflate();
    this.readable = true;
};
util.inherits(PackerAsync, Stream);
PackerAsync.prototype.pack = function(data, width, height, gamma) {
    // Signature
    this.emit("data", Buffer.from(constants.PNG_SIGNATURE));
    this.emit("data", this._packer.packIHDR(width, height));
    if (gamma) {
        this.emit("data", this._packer.packGAMA(gamma));
    }
    let filteredData = this._packer.filterData(data, width, height);
    // compress it
    this._deflate.on("error", this.emit.bind(this, "error"));
    this._deflate.on("data", (function(compressedData) {
        this.emit("data", this._packer.packIDAT(compressedData));
    }).bind(this));
    this._deflate.on("end", (function() {
        this.emit("data", this._packer.packIEND());
        this.emit("end");
    }).bind(this));
    this._deflate.end(filteredData);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/sync-inflate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)").ok;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let kMaxLength = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").kMaxLength;
function Inflate(opts) {
    if (!(this instanceof Inflate)) {
        return new Inflate(opts);
    }
    if (opts && opts.chunkSize < zlib.Z_MIN_CHUNK) {
        opts.chunkSize = zlib.Z_MIN_CHUNK;
    }
    zlib.Inflate.call(this, opts);
    // Node 8 --> 9 compatibility check
    this._offset = this._offset === undefined ? this._outOffset : this._offset;
    this._buffer = this._buffer || this._outBuffer;
    if (opts && opts.maxLength != null) {
        this._maxLength = opts.maxLength;
    }
}
function createInflate(opts) {
    return new Inflate(opts);
}
function _close(engine, callback) {
    if (callback) {
        process.nextTick(callback);
    }
    // Caller may invoke .close after a zlib error (which will null _handle).
    if (!engine._handle) {
        return;
    }
    engine._handle.close();
    engine._handle = null;
}
Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
    if (typeof asyncCb === "function") {
        return zlib.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
    }
    let self = this;
    let availInBefore = chunk && chunk.length;
    let availOutBefore = this._chunkSize - this._offset;
    let leftToInflate = this._maxLength;
    let inOff = 0;
    let buffers = [];
    let nread = 0;
    let error;
    this.on("error", function(err) {
        error = err;
    });
    function handleChunk(availInAfter, availOutAfter) {
        if (self._hadError) {
            return;
        }
        let have = availOutBefore - availOutAfter;
        assert(have >= 0, "have should not go down");
        if (have > 0) {
            let out = self._buffer.slice(self._offset, self._offset + have);
            self._offset += have;
            if (out.length > leftToInflate) {
                out = out.slice(0, leftToInflate);
            }
            buffers.push(out);
            nread += out.length;
            leftToInflate -= out.length;
            if (leftToInflate === 0) {
                return false;
            }
        }
        if (availOutAfter === 0 || self._offset >= self._chunkSize) {
            availOutBefore = self._chunkSize;
            self._offset = 0;
            self._buffer = Buffer.allocUnsafe(self._chunkSize);
        }
        if (availOutAfter === 0) {
            inOff += availInBefore - availInAfter;
            availInBefore = availInAfter;
            return true;
        }
        return false;
    }
    assert(this._handle, "zlib binding closed");
    let res;
    do {
        res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore); // out_len
        // Node 8 --> 9 compatibility check
        res = res || this._writeState;
    }while (!this._hadError && handleChunk(res[0], res[1]))
    if (this._hadError) {
        throw error;
    }
    if (nread >= kMaxLength) {
        _close(this);
        throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
    }
    let buf = Buffer.concat(buffers, nread);
    _close(this);
    return buf;
};
util.inherits(Inflate, zlib.Inflate);
function zlibBufferSync(engine, buffer) {
    if (typeof buffer === "string") {
        buffer = Buffer.from(buffer);
    }
    if (!(buffer instanceof Buffer)) {
        throw new TypeError("Not a string or buffer");
    }
    let flushFlag = engine._finishFlushFlag;
    if (flushFlag == null) {
        flushFlag = zlib.Z_FINISH;
    }
    return engine._processChunk(buffer, flushFlag);
}
function inflateSync(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
}
module.exports = exports = inflateSync;
exports.Inflate = Inflate;
exports.createInflate = createInflate;
exports.inflateSync = inflateSync;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = module.exports = function(buffer) {
    this._buffer = buffer;
    this._reads = [];
};
SyncReader.prototype.read = function(length, callback) {
    this._reads.push({
        length: Math.abs(length),
        allowLess: length < 0,
        func: callback
    });
};
SyncReader.prototype.process = function() {
    // as long as there is any data and read requests
    while(this._reads.length > 0 && this._buffer.length){
        let read = this._reads[0];
        if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
            // ok there is any data so that we can satisfy this request
            this._reads.shift(); // == read
            let buf = this._buffer;
            this._buffer = buf.slice(read.length);
            read.func.call(this, buf.slice(0, read.length));
        } else {
            break;
        }
    }
    if (this._reads.length > 0) {
        return new Error("There are some read requests waitng on finished stream");
    }
    if (this._buffer.length > 0) {
        return new Error("unrecognised content at end of stream");
    }
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let SyncReader = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)");
let Filter = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse.js [app-ssr] (ecmascript)");
exports.process = function(inBuffer, bitmapInfo) {
    let outBuffers = [];
    let reader = new SyncReader(inBuffer);
    let filter = new Filter(bitmapInfo, {
        read: reader.read.bind(reader),
        write: function(bufferPart) {
            outBuffers.push(bufferPart);
        },
        complete: function() {}
    });
    filter.start();
    reader.process();
    return Buffer.concat(outBuffers);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
let inflateSync = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/sync-inflate.js [app-ssr] (ecmascript)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let SyncReader = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/sync-reader.js [app-ssr] (ecmascript)");
let FilterSync = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/filter-parse-sync.js [app-ssr] (ecmascript)");
let Parser = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser.js [app-ssr] (ecmascript)");
let bitmapper = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/bitmapper.js [app-ssr] (ecmascript)");
let formatNormaliser = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/format-normaliser.js [app-ssr] (ecmascript)");
module.exports = function(buffer, options) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let err;
    function handleError(_err_) {
        err = _err_;
    }
    let metaData;
    function handleMetaData(_metaData_) {
        metaData = _metaData_;
    }
    function handleTransColor(transColor) {
        metaData.transColor = transColor;
    }
    function handlePalette(palette) {
        metaData.palette = palette;
    }
    function handleSimpleTransparency() {
        metaData.alpha = true;
    }
    let gamma;
    function handleGamma(_gamma_) {
        gamma = _gamma_;
    }
    let inflateDataList = [];
    function handleInflateData(inflatedData) {
        inflateDataList.push(inflatedData);
    }
    let reader = new SyncReader(buffer);
    let parser = new Parser(options, {
        read: reader.read.bind(reader),
        error: handleError,
        metadata: handleMetaData,
        gamma: handleGamma,
        palette: handlePalette,
        transColor: handleTransColor,
        inflateData: handleInflateData,
        simpleTransparency: handleSimpleTransparency
    });
    parser.start();
    reader.process();
    if (err) {
        throw err;
    }
    //join together the inflate datas
    let inflateData = Buffer.concat(inflateDataList);
    inflateDataList.length = 0;
    let inflatedData;
    if (metaData.interlace) {
        inflatedData = zlib.inflateSync(inflateData);
    } else {
        let rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
        let imageSize = rowSize * metaData.height;
        inflatedData = inflateSync(inflateData, {
            chunkSize: imageSize,
            maxLength: imageSize
        });
    }
    inflateData = null;
    if (!inflatedData || !inflatedData.length) {
        throw new Error("bad png - invalid inflate data response");
    }
    let unfilteredData = FilterSync.process(inflatedData, metaData);
    inflateData = null;
    let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
    unfilteredData = null;
    let normalisedBitmapData = formatNormaliser(bitmapData, metaData);
    metaData.data = normalisedBitmapData;
    metaData.gamma = gamma || 0;
    return metaData;
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let hasSyncZlib = true;
let zlib = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
if (!zlib.deflateSync) {
    hasSyncZlib = false;
}
let constants = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/constants.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer.js [app-ssr] (ecmascript)");
module.exports = function(metaData, opt) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let options = opt || {};
    let packer = new Packer(options);
    let chunks = [];
    // Signature
    chunks.push(Buffer.from(constants.PNG_SIGNATURE));
    // Header
    chunks.push(packer.packIHDR(metaData.width, metaData.height));
    if (metaData.gamma) {
        chunks.push(packer.packGAMA(metaData.gamma));
    }
    let filteredData = packer.filterData(metaData.data, metaData.width, metaData.height);
    // compress it
    let compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
    filteredData = null;
    if (!compressedData || !compressedData.length) {
        throw new Error("bad png - invalid compressed data response");
    }
    chunks.push(packer.packIDAT(compressedData));
    // End
    chunks.push(packer.packIEND());
    return Buffer.concat(chunks);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/png-sync.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let parse = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser-sync.js [app-ssr] (ecmascript)");
let pack = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer-sync.js [app-ssr] (ecmascript)");
exports.read = function(buffer, options) {
    return parse(buffer, options || {});
};
exports.write = function(png, options) {
    return pack(png, options);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/png.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

let util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
let Parser = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/parser-async.js [app-ssr] (ecmascript)");
let Packer = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/packer-async.js [app-ssr] (ecmascript)");
let PNGSync = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/pngjs/lib/png-sync.js [app-ssr] (ecmascript)");
let PNG = exports.PNG = function(options) {
    Stream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    this.width = options.width | 0;
    this.height = options.height | 0;
    this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null;
    if (options.fill && this.data) {
        this.data.fill(0);
    }
    this.gamma = 0;
    this.readable = this.writable = true;
    this._parser = new Parser(options);
    this._parser.on("error", this.emit.bind(this, "error"));
    this._parser.on("close", this._handleClose.bind(this));
    this._parser.on("metadata", this._metadata.bind(this));
    this._parser.on("gamma", this._gamma.bind(this));
    this._parser.on("parsed", (function(data) {
        this.data = data;
        this.emit("parsed", data);
    }).bind(this));
    this._packer = new Packer(options);
    this._packer.on("data", this.emit.bind(this, "data"));
    this._packer.on("end", this.emit.bind(this, "end"));
    this._parser.on("close", this._handleClose.bind(this));
    this._packer.on("error", this.emit.bind(this, "error"));
};
util.inherits(PNG, Stream);
PNG.sync = PNGSync;
PNG.prototype.pack = function() {
    if (!this.data || !this.data.length) {
        this.emit("error", "No data provided");
        return this;
    }
    process.nextTick((function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
    }).bind(this));
    return this;
};
PNG.prototype.parse = function(data, callback) {
    if (callback) {
        let onParsed, onError;
        onParsed = (function(parsedData) {
            this.removeListener("error", onError);
            this.data = parsedData;
            callback(null, this);
        }).bind(this);
        onError = (function(err) {
            this.removeListener("parsed", onParsed);
            callback(err, null);
        }).bind(this);
        this.once("parsed", onParsed);
        this.once("error", onError);
    }
    this.end(data);
    return this;
};
PNG.prototype.write = function(data) {
    this._parser.write(data);
    return true;
};
PNG.prototype.end = function(data) {
    this._parser.end(data);
};
PNG.prototype._metadata = function(metadata) {
    this.width = metadata.width;
    this.height = metadata.height;
    this.emit("metadata", metadata);
};
PNG.prototype._gamma = function(gamma) {
    this.gamma = gamma;
};
PNG.prototype._handleClose = function() {
    if (!this._parser.writable && !this._packer.readable) {
        this.emit("close");
    }
};
PNG.bitblt = function(src, dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    // coerce pixel dimensions to integers (also coerces undefined -> 0):
    /* eslint-disable no-param-reassign */ srcX |= 0;
    srcY |= 0;
    width |= 0;
    height |= 0;
    deltaX |= 0;
    deltaY |= 0;
    /* eslint-enable no-param-reassign */ if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) {
        throw new Error("bitblt reading outside image");
    }
    if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) {
        throw new Error("bitblt writing outside image");
    }
    for(let y = 0; y < height; y++){
        src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
    }
};
PNG.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
    // eslint-disable-line max-params
    PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
    return this;
};
PNG.adjustGamma = function(src) {
    if (src.gamma) {
        for(let y = 0; y < src.height; y++){
            for(let x = 0; x < src.width; x++){
                let idx = src.width * y + x << 2;
                for(let i = 0; i < 3; i++){
                    let sample = src.data[idx + i] / 255;
                    sample = Math.pow(sample, 1 / 2.2 / src.gamma);
                    src.data[idx + i] = Math.round(sample * 255);
                }
            }
        }
        src.gamma = 0;
    }
};
PNG.prototype.adjustGamma = function() {
    PNG.adjustGamma(this);
};
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/features/lib/esm/connect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Connect",
    ()=>Connect,
    "StandardConnect",
    ()=>StandardConnect
]);
const StandardConnect = 'standard:connect';
const Connect = StandardConnect; //# sourceMappingURL=connect.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/features/lib/esm/disconnect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Disconnect",
    ()=>Disconnect,
    "StandardDisconnect",
    ()=>StandardDisconnect
]);
const StandardDisconnect = 'standard:disconnect';
const Disconnect = StandardDisconnect; //# sourceMappingURL=disconnect.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/features/lib/esm/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Name of the feature. */ __turbopack_context__.s([
    "Events",
    ()=>Events,
    "StandardEvents",
    ()=>StandardEvents
]);
const StandardEvents = 'standard:events';
const Events = StandardEvents; //# sourceMappingURL=events.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/wallet/lib/esm/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadonlyWalletAccount",
    ()=>ReadonlyWalletAccount,
    "arraysEqual",
    ()=>arraysEqual,
    "bytesEqual",
    ()=>bytesEqual,
    "concatBytes",
    ()=>concatBytes,
    "guard",
    ()=>guard,
    "pick",
    ()=>pick
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _ReadonlyWalletAccount_address, _ReadonlyWalletAccount_publicKey, _ReadonlyWalletAccount_chains, _ReadonlyWalletAccount_features, _ReadonlyWalletAccount_label, _ReadonlyWalletAccount_icon;
class ReadonlyWalletAccount {
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.address | WalletAccount::address} */ get address() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_address, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.publicKey | WalletAccount::publicKey} */ get publicKey() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_publicKey, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.chains | WalletAccount::chains} */ get chains() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_chains, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.features | WalletAccount::features} */ get features() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_features, "f").slice();
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.label | WalletAccount::label} */ get label() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_label, "f");
    }
    /** Implementation of {@link "@wallet-standard/base".WalletAccount.icon | WalletAccount::icon} */ get icon() {
        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_icon, "f");
    }
    /**
     * Create and freeze a read-only account.
     *
     * @param account Account to copy properties from.
     */ constructor(account){
        _ReadonlyWalletAccount_address.set(this, void 0);
        _ReadonlyWalletAccount_publicKey.set(this, void 0);
        _ReadonlyWalletAccount_chains.set(this, void 0);
        _ReadonlyWalletAccount_features.set(this, void 0);
        _ReadonlyWalletAccount_label.set(this, void 0);
        _ReadonlyWalletAccount_icon.set(this, void 0);
        if (new.target === ReadonlyWalletAccount) {
            Object.freeze(this);
        }
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_address, account.address, "f");
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_label, account.label, "f");
        __classPrivateFieldSet(this, _ReadonlyWalletAccount_icon, account.icon, "f");
    }
}
_ReadonlyWalletAccount_address = new WeakMap(), _ReadonlyWalletAccount_publicKey = new WeakMap(), _ReadonlyWalletAccount_chains = new WeakMap(), _ReadonlyWalletAccount_features = new WeakMap(), _ReadonlyWalletAccount_label = new WeakMap(), _ReadonlyWalletAccount_icon = new WeakMap();
function arraysEqual(a, b) {
    if (a === b) return true;
    const length = a.length;
    if (length !== b.length) return false;
    for(let i = 0; i < length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function bytesEqual(a, b) {
    return arraysEqual(a, b);
}
function concatBytes(first, ...others) {
    const length = others.reduce((length, bytes)=>length + bytes.length, first.length);
    const bytes = new Uint8Array(length);
    bytes.set(first, 0);
    for (const other of others){
        bytes.set(other, bytes.length);
    }
    return bytes;
}
function pick(source, ...keys) {
    const picked = {};
    for (const key of keys){
        picked[key] = source[key];
    }
    return picked;
}
function guard(callback) {
    try {
        callback();
    } catch (error) {
        console.error(error);
    }
} //# sourceMappingURL=util.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/wallet/lib/esm/register.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_registerWallet",
    ()=>DEPRECATED_registerWallet,
    "registerWallet",
    ()=>registerWallet
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _RegisterWalletEvent_detail;
function registerWallet(wallet) {
    const callback = ({ register })=>register(wallet);
    try {
        window.dispatchEvent(new RegisterWalletEvent(callback));
    } catch (error) {
        console.error('wallet-standard:register-wallet event could not be dispatched\n', error);
    }
    try {
        window.addEventListener('wallet-standard:app-ready', ({ detail: api })=>callback(api));
    } catch (error) {
        console.error('wallet-standard:app-ready event listener could not be added\n', error);
    }
}
class RegisterWalletEvent extends Event {
    get detail() {
        return __classPrivateFieldGet(this, _RegisterWalletEvent_detail, "f");
    }
    get type() {
        return 'wallet-standard:register-wallet';
    }
    constructor(callback){
        super('wallet-standard:register-wallet', {
            bubbles: false,
            cancelable: false,
            composed: false
        });
        _RegisterWalletEvent_detail.set(this, void 0);
        __classPrivateFieldSet(this, _RegisterWalletEvent_detail, callback, "f");
    }
    /** @deprecated */ preventDefault() {
        throw new Error('preventDefault cannot be called');
    }
    /** @deprecated */ stopImmediatePropagation() {
        throw new Error('stopImmediatePropagation cannot be called');
    }
    /** @deprecated */ stopPropagation() {
        throw new Error('stopPropagation cannot be called');
    }
}
_RegisterWalletEvent_detail = new WeakMap();
function DEPRECATED_registerWallet(wallet) {
    var _a;
    registerWallet(wallet);
    try {
        ((_a = window.navigator).wallets || (_a.wallets = [])).push(({ register })=>register(wallet));
    } catch (error) {
        console.error('window.navigator.wallets could not be pushed\n', error);
    }
} //# sourceMappingURL=register.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@wallet-standard/app/lib/esm/wallets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEPRECATED_getWallets",
    ()=>DEPRECATED_getWallets,
    "getWallets",
    ()=>getWallets
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AppReadyEvent_detail;
let wallets = undefined;
const registeredWalletsSet = new Set();
function addRegisteredWallet(wallet) {
    cachedWalletsArray = undefined;
    registeredWalletsSet.add(wallet);
}
function removeRegisteredWallet(wallet) {
    cachedWalletsArray = undefined;
    registeredWalletsSet.delete(wallet);
}
const listeners = {};
function getWallets() {
    if (wallets) return wallets;
    wallets = Object.freeze({
        register,
        get,
        on
    });
    if ("TURBOPACK compile-time truthy", 1) return wallets;
    //TURBOPACK unreachable
    ;
    const api = undefined;
}
function register(...wallets) {
    // Filter out wallets that have already been registered.
    // This prevents the same wallet from being registered twice, but it also prevents wallets from being
    // unregistered by reusing a reference to the wallet to obtain the unregister function for it.
    wallets = wallets.filter((wallet)=>!registeredWalletsSet.has(wallet));
    // If there are no new wallets to register, just return a no-op unregister function.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!wallets.length) return ()=>{};
    wallets.forEach((wallet)=>addRegisteredWallet(wallet));
    listeners['register']?.forEach((listener)=>guard(()=>listener(...wallets)));
    // Return a function that unregisters the registered wallets.
    return function unregister() {
        wallets.forEach((wallet)=>removeRegisteredWallet(wallet));
        listeners['unregister']?.forEach((listener)=>guard(()=>listener(...wallets)));
    };
}
let cachedWalletsArray;
function get() {
    if (!cachedWalletsArray) {
        cachedWalletsArray = [
            ...registeredWalletsSet
        ];
    }
    return cachedWalletsArray;
}
function on(event, listener) {
    listeners[event]?.push(listener) || (listeners[event] = [
        listener
    ]);
    // Return a function that removes the event listener.
    return function off() {
        listeners[event] = listeners[event]?.filter((existingListener)=>listener !== existingListener);
    };
}
function guard(callback) {
    try {
        callback();
    } catch (error) {
        console.error(error);
    }
}
class AppReadyEvent extends Event {
    get detail() {
        return __classPrivateFieldGet(this, _AppReadyEvent_detail, "f");
    }
    get type() {
        return 'wallet-standard:app-ready';
    }
    constructor(api){
        super('wallet-standard:app-ready', {
            bubbles: false,
            cancelable: false,
            composed: false
        });
        _AppReadyEvent_detail.set(this, void 0);
        __classPrivateFieldSet(this, _AppReadyEvent_detail, api, "f");
    }
    /** @deprecated */ preventDefault() {
        throw new Error('preventDefault cannot be called');
    }
    /** @deprecated */ stopImmediatePropagation() {
        throw new Error('stopImmediatePropagation cannot be called');
    }
    /** @deprecated */ stopPropagation() {
        throw new Error('stopPropagation cannot be called');
    }
}
_AppReadyEvent_detail = new WeakMap();
function DEPRECATED_getWallets() {
    if (wallets) return wallets;
    wallets = getWallets();
    if ("TURBOPACK compile-time truthy", 1) return wallets;
    //TURBOPACK unreachable
    ;
    const callbacks = undefined;
    const register = undefined;
    const push = undefined;
} //# sourceMappingURL=wallets.js.map
}),
"[project]/pfm-rust-solana-2026/web/node_modules/camelcase/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');
const preserveCamelCase = (string, toLowerCase, toUpperCase)=>{
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    for(let i = 0; i < string.length; i++){
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
            string = string.slice(0, i) + '-' + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
            string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
    }
    return string;
};
const preserveConsecutiveUppercase = (input, toLowerCase)=>{
    LEADING_CAPITAL.lastIndex = 0;
    return input.replace(LEADING_CAPITAL, (m1)=>toLowerCase(m1));
};
const postProcess = (input, toUpperCase)=>{
    SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
    NUMBERS_AND_IDENTIFIER.lastIndex = 0;
    return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier)=>toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m)=>toUpperCase(m));
};
const camelCase = (input, options)=>{
    if (!(typeof input === 'string' || Array.isArray(input))) {
        throw new TypeError('Expected the input to be `string | string[]`');
    }
    options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
    };
    if (Array.isArray(input)) {
        input = input.map((x)=>x.trim()).filter((x)=>x.length).join('-');
    } else {
        input = input.trim();
    }
    if (input.length === 0) {
        return '';
    }
    const toLowerCase = options.locale === false ? (string)=>string.toLowerCase() : (string)=>string.toLocaleLowerCase(options.locale);
    const toUpperCase = options.locale === false ? (string)=>string.toUpperCase() : (string)=>string.toLocaleUpperCase(options.locale);
    if (input.length === 1) {
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
    }
    const hasUpperCase = input !== toLowerCase(input);
    if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
    }
    input = input.replace(LEADING_SEPARATORS, '');
    if (options.preserveConsecutiveUppercase) {
        input = preserveConsecutiveUppercase(input, toLowerCase);
    } else {
        input = toLowerCase(input);
    }
    if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
    }
    return postProcess(input, toUpperCase);
};
module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports.default = camelCase;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/buffer-layout/lib/Layout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* The MIT License (MIT)
 *
 * Copyright 2015-2018 Peter A. Bigot
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * Support for translating between Buffer instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */ /**
 * Base class for layout objects.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * Layout#encode|encode} or {@link Layout#decode|decode} functions.
 *
 * @param {Number} span - Initializer for {@link Layout#span|span}.  The
 * parameter must be an integer; a negative value signifies that the
 * span is {@link Layout#getSpan|value-specific}.
 *
 * @param {string} [property] - Initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 */ class Layout {
    constructor(span, property){
        if (!Number.isInteger(span)) {
            throw new TypeError('span must be an integer');
        }
        /** The span of the layout in bytes.
     *
     * Positive values are generally expected.
     *
     * Zero will only appear in {@link Constant}s and in {@link
     * Sequence}s where the {@link Sequence#count|count} is zero.
     *
     * A negative value indicates that the span is value-specific, and
     * must be obtained using {@link Layout#getSpan|getSpan}. */ this.span = span;
        /** The property name used when this layout is represented in an
     * Object.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances.  If left undefined the span of the unnamed layout will
     * be treated as padding: it will not be mutated by {@link
     * Layout#encode|encode} nor represented as a property in the
     * decoded Object. */ this.property = property;
    }
    /** Function to create an Object into which decoded properties will
   * be written.
   *
   * Used only for layouts that {@link Layout#decode|decode} to Object
   * instances, which means:
   * * {@link Structure}
   * * {@link Union}
   * * {@link VariantLayout}
   * * {@link BitStructure}
   *
   * If left undefined the JavaScript representation of these layouts
   * will be Object instances.
   *
   * See {@link bindConstructorLayout}.
   */ makeDestinationObject() {
        return {};
    }
    /**
   * Decode from a Buffer into an JavaScript value.
   *
   * @param {Buffer} b - the buffer from which encoded data is read.
   *
   * @param {Number} [offset] - the offset at which the encoded data
   * starts.  If absent a zero offset is inferred.
   *
   * @returns {(Number|Array|Object)} - the value of the decoded data.
   *
   * @abstract
   */ decode(b, offset) {
        throw new Error('Layout is abstract');
    }
    /**
   * Encode a JavaScript value into a Buffer.
   *
   * @param {(Number|Array|Object)} src - the value to be encoded into
   * the buffer.  The type accepted depends on the (sub-)type of {@link
   * Layout}.
   *
   * @param {Buffer} b - the buffer into which encoded data will be
   * written.
   *
   * @param {Number} [offset] - the offset at which the encoded data
   * starts.  If absent a zero offset is inferred.
   *
   * @returns {Number} - the number of bytes encoded, including the
   * space skipped for internal padding, but excluding data such as
   * {@link Sequence#count|lengths} when stored {@link
   * ExternalLayout|externally}.  This is the adjustment to `offset`
   * producing the offset where data for the next layout would be
   * written.
   *
   * @abstract
   */ encode(src, b, offset) {
        throw new Error('Layout is abstract');
    }
    /**
   * Calculate the span of a specific instance of a layout.
   *
   * @param {Buffer} b - the buffer that contains an encoded instance.
   *
   * @param {Number} [offset] - the offset at which the encoded instance
   * starts.  If absent a zero offset is inferred.
   *
   * @return {Number} - the number of bytes covered by the layout
   * instance.  If this method is not overridden in a subclass the
   * definition-time constant {@link Layout#span|span} will be
   * returned.
   *
   * @throws {RangeError} - if the length of the value cannot be
   * determined.
   */ getSpan(b, offset) {
        if (0 > this.span) {
            throw new RangeError('indeterminate span');
        }
        return this.span;
    }
    /**
   * Replicate the layout using a new property.
   *
   * This function must be used to get a structurally-equivalent layout
   * with a different name since all {@link Layout} instances are
   * immutable.
   *
   * **NOTE** This is a shallow copy.  All fields except {@link
   * Layout#property|property} are strictly equal to the origin layout.
   *
   * @param {String} property - the value for {@link
   * Layout#property|property} in the replica.
   *
   * @returns {Layout} - the copy with {@link Layout#property|property}
   * set to `property`.
   */ replicate(property) {
        const rv = Object.create(this.constructor.prototype);
        Object.assign(rv, this);
        rv.property = property;
        return rv;
    }
    /**
   * Create an object from layout properties and an array of values.
   *
   * **NOTE** This function returns `undefined` if invoked on a layout
   * that does not return its value as an Object.  Objects are
   * returned for things that are a {@link Structure}, which includes
   * {@link VariantLayout|variant layouts} if they are structures, and
   * excludes {@link Union}s.  If you want this feature for a union
   * you must use {@link Union.getVariant|getVariant} to select the
   * desired layout.
   *
   * @param {Array} values - an array of values that correspond to the
   * default order for properties.  As with {@link Layout#decode|decode}
   * layout elements that have no property name are skipped when
   * iterating over the array values.  Only the top-level properties are
   * assigned; arguments are not assigned to properties of contained
   * layouts.  Any unused values are ignored.
   *
   * @return {(Object|undefined)}
   */ fromArray(values) {
        return undefined;
    }
}
exports.Layout = Layout;
/* Provide text that carries a name (such as for a function that will
 * be throwing an error) annotated with the property of a given layout
 * (such as one for which the value was unacceptable).
 *
 * @ignore */ function nameWithProperty(name, lo) {
    if (lo.property) {
        return name + '[' + lo.property + ']';
    }
    return name;
}
exports.nameWithProperty = nameWithProperty;
/**
 * Augment a class so that instances can be encoded/decoded using a
 * given layout.
 *
 * Calling this function couples `Class` with `layout` in several ways:
 *
 * * `Class.layout_` becomes a static member property equal to `layout`;
 * * `layout.boundConstructor_` becomes a static member property equal
 *    to `Class`;
 * * The {@link Layout#makeDestinationObject|makeDestinationObject()}
 *   property of `layout` is set to a function that returns a `new
 *   Class()`;
 * * `Class.decode(b, offset)` becomes a static member function that
 *   delegates to {@link Layout#decode|layout.decode}.  The
 *   synthesized function may be captured and extended.
 * * `Class.prototype.encode(b, offset)` provides an instance member
 *   function that delegates to {@link Layout#encode|layout.encode}
 *   with `src` set to `this`.  The synthesized function may be
 *   captured and extended, but when the extension is invoked `this`
 *   must be explicitly bound to the instance.
 *
 * @param {class} Class - a JavaScript class with a nullary
 * constructor.
 *
 * @param {Layout} layout - the {@link Layout} instance used to encode
 * instances of `Class`.
 */ function bindConstructorLayout(Class, layout) {
    if ('function' !== typeof Class) {
        throw new TypeError('Class must be constructor');
    }
    if (Class.hasOwnProperty('layout_')) {
        throw new Error('Class is already bound to a layout');
    }
    if (!(layout && layout instanceof Layout)) {
        throw new TypeError('layout must be a Layout');
    }
    if (layout.hasOwnProperty('boundConstructor_')) {
        throw new Error('layout is already bound to a constructor');
    }
    Class.layout_ = layout;
    layout.boundConstructor_ = Class;
    layout.makeDestinationObject = ()=>new Class();
    Object.defineProperty(Class.prototype, 'encode', {
        value: function(b, offset) {
            return layout.encode(this, b, offset);
        },
        writable: true
    });
    Object.defineProperty(Class, 'decode', {
        value: function(b, offset) {
            return layout.decode(b, offset);
        },
        writable: true
    });
}
exports.bindConstructorLayout = bindConstructorLayout;
/**
 * An object that behaves like a layout but does not consume space
 * within its containing layout.
 *
 * This is primarily used to obtain metadata about a member, such as a
 * {@link OffsetLayout} that can provide data about a {@link
 * Layout#getSpan|value-specific span}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support {@link
 * ExternalLayout#isCount|isCount} or other {@link Layout} functions.
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 * @augments {Layout}
 */ class ExternalLayout extends Layout {
    /**
   * Return `true` iff the external layout decodes to an unsigned
   * integer layout.
   *
   * In that case it can be used as the source of {@link
   * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
   * or as {@link UnionLayoutDiscriminator#layout|external union
   * discriminators}.
   *
   * @abstract
   */ isCount() {
        throw new Error('ExternalLayout is abstract');
    }
}
/**
 * An {@link ExternalLayout} that determines its {@link
 * Layout#decode|value} based on offset into and length of the buffer
 * on which it is invoked.
 *
 * *Factory*: {@link module:Layout.greedy|greedy}
 *
 * @param {Number} [elementSpan] - initializer for {@link
 * GreedyCount#elementSpan|elementSpan}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {ExternalLayout}
 */ class GreedyCount extends ExternalLayout {
    constructor(elementSpan, property){
        if (undefined === elementSpan) {
            elementSpan = 1;
        }
        if (!Number.isInteger(elementSpan) || 0 >= elementSpan) {
            throw new TypeError('elementSpan must be a (positive) integer');
        }
        super(-1, property);
        /** The layout for individual elements of the sequence.  The value
     * must be a positive integer.  If not provided, the value will be
     * 1. */ this.elementSpan = elementSpan;
    }
    /** @override */ isCount() {
        return true;
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const rem = b.length - offset;
        return Math.floor(rem / this.elementSpan);
    }
    /** @override */ encode(src, b, offset) {
        return 0;
    }
}
/**
 * An {@link ExternalLayout} that supports accessing a {@link Layout}
 * at a fixed offset from the start of another Layout.  The offset may
 * be before, within, or after the base layout.
 *
 * *Factory*: {@link module:Layout.offset|offset}
 *
 * @param {Layout} layout - initializer for {@link
 * OffsetLayout#layout|layout}, modulo `property`.
 *
 * @param {Number} [offset] - Initializes {@link
 * OffsetLayout#offset|offset}.  Defaults to zero.
 *
 * @param {string} [property] - Optional new property name for a
 * {@link Layout#replicate| replica} of `layout` to be used as {@link
 * OffsetLayout#layout|layout}.  If not provided the `layout` is used
 * unchanged.
 *
 * @augments {Layout}
 */ class OffsetLayout extends ExternalLayout {
    constructor(layout, offset, property){
        if (!(layout instanceof Layout)) {
            throw new TypeError('layout must be a Layout');
        }
        if (undefined === offset) {
            offset = 0;
        } else if (!Number.isInteger(offset)) {
            throw new TypeError('offset must be integer or undefined');
        }
        super(layout.span, property || layout.property);
        /** The subordinated layout. */ this.layout = layout;
        /** The location of {@link OffsetLayout#layout} relative to the
     * start of another layout.
     *
     * The value may be positive or negative, but an error will thrown
     * if at the point of use it goes outside the span of the Buffer
     * being accessed.  */ this.offset = offset;
    }
    /** @override */ isCount() {
        return this.layout instanceof UInt || this.layout instanceof UIntBE;
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return this.layout.decode(b, offset + this.offset);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return this.layout.encode(src, b, offset + this.offset);
    }
}
/**
 * Represent an unsigned integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.u8|u8}, {@link
 *  module:Layout.u16|u16}, {@link module:Layout.u24|u24}, {@link
 *  module:Layout.u32|u32}, {@link module:Layout.u40|u40}, {@link
 *  module:Layout.u48|u48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UInt extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readUIntLE(offset, this.span);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeUIntLE(src, offset, this.span);
        return this.span;
    }
}
/**
 * Represent an unsigned integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.u8be|u8be}, {@link
 * module:Layout.u16be|u16be}, {@link module:Layout.u24be|u24be},
 * {@link module:Layout.u32be|u32be}, {@link
 * module:Layout.u40be|u40be}, {@link module:Layout.u48be|u48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UIntBE extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readUIntBE(offset, this.span);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeUIntBE(src, offset, this.span);
        return this.span;
    }
}
/**
 * Represent a signed integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.s8|s8}, {@link
 *  module:Layout.s16|s16}, {@link module:Layout.s24|s24}, {@link
 *  module:Layout.s32|s32}, {@link module:Layout.s40|s40}, {@link
 *  module:Layout.s48|s48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Int extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readIntLE(offset, this.span);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeIntLE(src, offset, this.span);
        return this.span;
    }
}
/**
 * Represent a signed integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.s8be|s8be}, {@link
 * module:Layout.s16be|s16be}, {@link module:Layout.s24be|s24be},
 * {@link module:Layout.s32be|s32be}, {@link
 * module:Layout.s40be|s40be}, {@link module:Layout.s48be|s48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class IntBE extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readIntBE(offset, this.span);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeIntBE(src, offset, this.span);
        return this.span;
    }
}
const V2E32 = Math.pow(2, 32);
/* True modulus high and low 32-bit words, where low word is always
 * non-negative. */ function divmodInt64(src) {
    const hi32 = Math.floor(src / V2E32);
    const lo32 = src - hi32 * V2E32;
    return {
        hi32,
        lo32
    };
}
/* Reconstruct Number from quotient and non-negative remainder */ function roundedInt64(hi32, lo32) {
    return hi32 * V2E32 + lo32;
}
/**
 * Represent an unsigned 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64|nu64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearUInt64 extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const lo32 = b.readUInt32LE(offset);
        const hi32 = b.readUInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const split = divmodInt64(src);
        b.writeUInt32LE(split.lo32, offset);
        b.writeUInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
/**
 * Represent an unsigned 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64be|nu64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearUInt64BE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const hi32 = b.readUInt32BE(offset);
        const lo32 = b.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const split = divmodInt64(src);
        b.writeUInt32BE(split.hi32, offset);
        b.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
/**
 * Represent a signed 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64|ns64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearInt64 extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const lo32 = b.readUInt32LE(offset);
        const hi32 = b.readInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const split = divmodInt64(src);
        b.writeUInt32LE(split.lo32, offset);
        b.writeInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
/**
 * Represent a signed 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64be|ns64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearInt64BE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const hi32 = b.readInt32BE(offset);
        const lo32 = b.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const split = divmodInt64(src);
        b.writeInt32BE(split.hi32, offset);
        b.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
/**
 * Represent a 32-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f32|f32}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Float extends Layout {
    constructor(property){
        super(4, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readFloatLE(offset);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeFloatLE(src, offset);
        return 4;
    }
}
/**
 * Represent a 32-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f32be|f32be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class FloatBE extends Layout {
    constructor(property){
        super(4, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readFloatBE(offset);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeFloatBE(src, offset);
        return 4;
    }
}
/**
 * Represent a 64-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f64|f64}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Double extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readDoubleLE(offset);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeDoubleLE(src, offset);
        return 8;
    }
}
/**
 * Represent a 64-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f64be|f64be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class DoubleBE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        return b.readDoubleBE(offset);
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        b.writeDoubleBE(src, offset);
        return 8;
    }
}
/**
 * Represent a contiguous sequence of a specific layout as an Array.
 *
 * *Factory*: {@link module:Layout.seq|seq}
 *
 * @param {Layout} elementLayout - initializer for {@link
 * Sequence#elementLayout|elementLayout}.
 *
 * @param {(Number|ExternalLayout)} count - initializer for {@link
 * Sequence#count|count}.  The parameter must be either a positive
 * integer or an instance of {@link ExternalLayout}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Sequence extends Layout {
    constructor(elementLayout, count, property){
        if (!(elementLayout instanceof Layout)) {
            throw new TypeError('elementLayout must be a Layout');
        }
        if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) {
            throw new TypeError('count must be non-negative integer ' + 'or an unsigned integer ExternalLayout');
        }
        let span = -1;
        if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) {
            span = count * elementLayout.span;
        }
        super(span, property);
        /** The layout for individual elements of the sequence. */ this.elementLayout = elementLayout;
        /** The number of elements in the sequence.
     *
     * This will be either a non-negative integer or an instance of
     * {@link ExternalLayout} for which {@link
     * ExternalLayout#isCount|isCount()} is `true`. */ this.count = count;
    }
    /** @override */ getSpan(b, offset) {
        if (0 <= this.span) {
            return this.span;
        }
        if (undefined === offset) {
            offset = 0;
        }
        let span = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
            count = count.decode(b, offset);
        }
        if (0 < this.elementLayout.span) {
            span = count * this.elementLayout.span;
        } else {
            let idx = 0;
            while(idx < count){
                span += this.elementLayout.getSpan(b, offset + span);
                ++idx;
            }
        }
        return span;
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const rv = [];
        let i = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
            count = count.decode(b, offset);
        }
        while(i < count){
            rv.push(this.elementLayout.decode(b, offset));
            offset += this.elementLayout.getSpan(b, offset);
            i += 1;
        }
        return rv;
    }
    /** Implement {@link Layout#encode|encode} for {@link Sequence}.
   *
   * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
   * the unused space in the buffer is left unchanged.  If `src` is
   * longer than {@link Sequence#count|count} the unneeded elements are
   * ignored.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const elo = this.elementLayout;
        const span = src.reduce((span, v)=>{
            return span + elo.encode(v, b, offset + span);
        }, 0);
        if (this.count instanceof ExternalLayout) {
            this.count.encode(src.length, b, offset);
        }
        return span;
    }
}
/**
 * Represent a contiguous sequence of arbitrary layout elements as an
 * Object.
 *
 * *Factory*: {@link module:Layout.struct|struct}
 *
 * **NOTE** The {@link Layout#span|span} of the structure is variable
 * if any layout in {@link Structure#fields|fields} has a variable
 * span.  When {@link Layout#encode|encoding} we must have a value for
 * all variable-length fields, or we wouldn't be able to figure out
 * how much space to use for storage.  We can only identify the value
 * for a field when it has a {@link Layout#property|property}.  As
 * such, although a structure may contain both unnamed fields and
 * variable-length fields, it cannot contain an unnamed
 * variable-length field.
 *
 * @param {Layout[]} fields - initializer for {@link
 * Structure#fields|fields}.  An error is raised if this contains a
 * variable-length field for which a {@link Layout#property|property}
 * is not defined.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @param {Boolean} [decodePrefixes] - initializer for {@link
 * Structure#decodePrefixes|property}.
 *
 * @throws {Error} - if `fields` contains an unnamed variable-length
 * layout.
 *
 * @augments {Layout}
 */ class Structure extends Layout {
    constructor(fields, property, decodePrefixes){
        if (!(Array.isArray(fields) && fields.reduce((acc, v)=>acc && v instanceof Layout, true))) {
            throw new TypeError('fields must be array of Layout instances');
        }
        if ('boolean' === typeof property && undefined === decodePrefixes) {
            decodePrefixes = property;
            property = undefined;
        }
        /* Verify absence of unnamed variable-length fields. */ for (const fd of fields){
            if (0 > fd.span && undefined === fd.property) {
                throw new Error('fields cannot contain unnamed variable-length layout');
            }
        }
        let span = -1;
        try {
            span = fields.reduce((span, fd)=>span + fd.getSpan(), 0);
        } catch (e) {}
        super(span, property);
        /** The sequence of {@link Layout} values that comprise the
     * structure.
     *
     * The individual elements need not be the same type, and may be
     * either scalar or aggregate layouts.  If a member layout leaves
     * its {@link Layout#property|property} undefined the
     * corresponding region of the buffer associated with the element
     * will not be mutated.
     *
     * @type {Layout[]} */ this.fields = fields;
        /** Control behavior of {@link Layout#decode|decode()} given short
     * buffers.
     *
     * In some situations a structure many be extended with additional
     * fields over time, with older installations providing only a
     * prefix of the full structure.  If this property is `true`
     * decoding will accept those buffers and leave subsequent fields
     * undefined, as long as the buffer ends at a field boundary.
     * Defaults to `false`. */ this.decodePrefixes = !!decodePrefixes;
    }
    /** @override */ getSpan(b, offset) {
        if (0 <= this.span) {
            return this.span;
        }
        if (undefined === offset) {
            offset = 0;
        }
        let span = 0;
        try {
            span = this.fields.reduce((span, fd)=>{
                const fsp = fd.getSpan(b, offset);
                offset += fsp;
                return span + fsp;
            }, 0);
        } catch (e) {
            throw new RangeError('indeterminate span');
        }
        return span;
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const dest = this.makeDestinationObject();
        for (const fd of this.fields){
            if (undefined !== fd.property) {
                dest[fd.property] = fd.decode(b, offset);
            }
            offset += fd.getSpan(b, offset);
            if (this.decodePrefixes && b.length === offset) {
                break;
            }
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the buffer is
   * left unmodified. */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const firstOffset = offset;
        let lastOffset = 0;
        let lastWrote = 0;
        for (const fd of this.fields){
            let span = fd.span;
            lastWrote = 0 < span ? span : 0;
            if (undefined !== fd.property) {
                const fv = src[fd.property];
                if (undefined !== fv) {
                    lastWrote = fd.encode(fv, b, offset);
                    if (0 > span) {
                        /* Read the as-encoded span, which is not necessarily the
             * same as what we wrote. */ span = fd.getSpan(b, offset);
                    }
                }
            }
            lastOffset = offset;
            offset += span;
        }
        /* Use (lastOffset + lastWrote) instead of offset because the last
     * item may have had a dynamic length and we don't want to include
     * the padding between it and the end of the space reserved for
     * it. */ return lastOffset + lastWrote - firstOffset;
    }
    /** @override */ fromArray(values) {
        const dest = this.makeDestinationObject();
        for (const fd of this.fields){
            if (undefined !== fd.property && 0 < values.length) {
                dest[fd.property] = values.shift();
            }
        }
        return dest;
    }
    /**
   * Get access to the layout of a given property.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Layout} - the layout associated with `property`, or
   * undefined if there is no such property.
   */ layoutFor(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        for (const fd of this.fields){
            if (fd.property === property) {
                return fd;
            }
        }
    }
    /**
   * Get the offset of a structure member.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Number} - the offset in bytes to the start of `property`
   * within the structure, or undefined if `property` is not a field
   * within the structure.  If the property is a member but follows a
   * variable-length structure member a negative number will be
   * returned.
   */ offsetOf(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        let offset = 0;
        for (const fd of this.fields){
            if (fd.property === property) {
                return offset;
            }
            if (0 > fd.span) {
                offset = -1;
            } else if (0 <= offset) {
                offset += fd.span;
            }
        }
    }
}
/**
 * An object that can provide a {@link
 * Union#discriminator|discriminator} API for {@link Union}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * UnionDiscriminator#encode|encode} or {@link
 * UnionDiscriminator#decode|decode} functions.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}.
 *
 * @abstract
 */ class UnionDiscriminator {
    constructor(property){
        /** The {@link Layout#property|property} to be used when the
     * discriminator is referenced in isolation (generally when {@link
     * Union#decode|Union decode} cannot delegate to a specific
     * variant). */ this.property = property;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
   *
   * The implementation of this method need not reference the buffer if
   * variant information is available through other means. */ decode() {
        throw new Error('UnionDiscriminator is abstract');
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
   *
   * The implementation of this method need not store the value if
   * variant information is maintained through other means. */ encode() {
        throw new Error('UnionDiscriminator is abstract');
    }
}
/**
 * An object that can provide a {@link
 * UnionDiscriminator|discriminator API} for {@link Union} using an
 * unsigned integral {@link Layout} instance located either inside or
 * outside the union.
 *
 * @param {ExternalLayout} layout - initializes {@link
 * UnionLayoutDiscriminator#layout|layout}.  Must satisfy {@link
 * ExternalLayout#isCount|isCount()}.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}, superseding the property
 * from `layout`, but defaulting to `variant` if neither `property`
 * nor layout provide a property name.
 *
 * @augments {UnionDiscriminator}
 */ class UnionLayoutDiscriminator extends UnionDiscriminator {
    constructor(layout, property){
        if (!(layout instanceof ExternalLayout && layout.isCount())) {
            throw new TypeError('layout must be an unsigned integer ExternalLayout');
        }
        super(property || layout.property || 'variant');
        /** The {@link ExternalLayout} used to access the discriminator
     * value. */ this.layout = layout;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */ decode(b, offset) {
        return this.layout.decode(b, offset);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */ encode(src, b, offset) {
        return this.layout.encode(src, b, offset);
    }
}
/**
 * Represent any number of span-compatible layouts.
 *
 * *Factory*: {@link module:Layout.union|union}
 *
 * If the union has a {@link Union#defaultLayout|default layout} that
 * layout must have a non-negative {@link Layout#span|span}.  The span
 * of a fixed-span union includes its {@link
 * Union#discriminator|discriminator} if the variant is a {@link
 * Union#usesPrefixDiscriminator|prefix of the union}, plus the span
 * of its {@link Union#defaultLayout|default layout}.
 *
 * If the union does not have a default layout then the encoded span
 * of the union depends on the encoded span of its variant (which may
 * be fixed or variable).
 *
 * {@link VariantLayout#layout|Variant layout}s are added through
 * {@link Union#addVariant|addVariant}.  If the union has a default
 * layout, the span of the {@link VariantLayout#layout|layout
 * contained by the variant} must not exceed the span of the {@link
 * Union#defaultLayout|default layout} (minus the span of a {@link
 * Union#usesPrefixDiscriminator|prefix disriminator}, if used).  The
 * span of the variant will equal the span of the union itself.
 *
 * The variant for a buffer can only be identified from the {@link
 * Union#discriminator|discriminator} {@link
 * UnionDiscriminator#property|property} (in the case of the {@link
 * Union#defaultLayout|default layout}), or by using {@link
 * Union#getVariant|getVariant} and examining the resulting {@link
 * VariantLayout} instance.
 *
 * A variant compatible with a JavaScript object can be identified
 * using {@link Union#getSourceVariant|getSourceVariant}.
 *
 * @param {(UnionDiscriminator|ExternalLayout|Layout)} discr - How to
 * identify the layout used to interpret the union contents.  The
 * parameter must be an instance of {@link UnionDiscriminator}, an
 * {@link ExternalLayout} that satisfies {@link
 * ExternalLayout#isCount|isCount()}, or {@link UInt} (or {@link
 * UIntBE}).  When a non-external layout element is passed the layout
 * appears at the start of the union.  In all cases the (synthesized)
 * {@link UnionDiscriminator} instance is recorded as {@link
 * Union#discriminator|discriminator}.
 *
 * @param {(Layout|null)} defaultLayout - initializer for {@link
 * Union#defaultLayout|defaultLayout}.  If absent defaults to `null`.
 * If `null` there is no default layout: the union has data-dependent
 * length and attempts to decode or encode unrecognized variants will
 * throw an exception.  A {@link Layout} instance must have a
 * non-negative {@link Layout#span|span}, and if it lacks a {@link
 * Layout#property|property} the {@link
 * Union#defaultLayout|defaultLayout} will be a {@link
 * Layout#replicate|replica} with property `content`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Union extends Layout {
    constructor(discr, defaultLayout, property){
        const upv = discr instanceof UInt || discr instanceof UIntBE;
        if (upv) {
            discr = new UnionLayoutDiscriminator(new OffsetLayout(discr));
        } else if (discr instanceof ExternalLayout && discr.isCount()) {
            discr = new UnionLayoutDiscriminator(discr);
        } else if (!(discr instanceof UnionDiscriminator)) {
            throw new TypeError('discr must be a UnionDiscriminator ' + 'or an unsigned integer layout');
        }
        if (undefined === defaultLayout) {
            defaultLayout = null;
        }
        if (!(null === defaultLayout || defaultLayout instanceof Layout)) {
            throw new TypeError('defaultLayout must be null or a Layout');
        }
        if (null !== defaultLayout) {
            if (0 > defaultLayout.span) {
                throw new Error('defaultLayout must have constant span');
            }
            if (undefined === defaultLayout.property) {
                defaultLayout = defaultLayout.replicate('content');
            }
        }
        /* The union span can be estimated only if there's a default
     * layout.  The union spans its default layout, plus any prefix
     * variant layout.  By construction both layouts, if present, have
     * non-negative span. */ let span = -1;
        if (defaultLayout) {
            span = defaultLayout.span;
            if (0 <= span && upv) {
                span += discr.layout.span;
            }
        }
        super(span, property);
        /** The interface for the discriminator value in isolation.
     *
     * This a {@link UnionDiscriminator} either passed to the
     * constructor or synthesized from the `discr` constructor
     * argument.  {@link
     * Union#usesPrefixDiscriminator|usesPrefixDiscriminator} will be
     * `true` iff the `discr` parameter was a non-offset {@link
     * Layout} instance. */ this.discriminator = discr;
        /** `true` if the {@link Union#discriminator|discriminator} is the
     * first field in the union.
     *
     * If `false` the discriminator is obtained from somewhere
     * else. */ this.usesPrefixDiscriminator = upv;
        /** The layout for non-discriminator content when the value of the
     * discriminator is not recognized.
     *
     * This is the value passed to the constructor.  It is
     * structurally equivalent to the second component of {@link
     * Union#layout|layout} but may have a different property
     * name. */ this.defaultLayout = defaultLayout;
        /** A registry of allowed variants.
     *
     * The keys are unsigned integers which should be compatible with
     * {@link Union.discriminator|discriminator}.  The property value
     * is the corresponding {@link VariantLayout} instances assigned
     * to this union by {@link Union#addVariant|addVariant}.
     *
     * **NOTE** The registry remains mutable so that variants can be
     * {@link Union#addVariant|added} at any time.  Users should not
     * manipulate the content of this property. */ this.registry = {};
        /* Private variable used when invoking getSourceVariant */ let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
        /** Function to infer the variant selected by a source object.
     *
     * Defaults to {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant} but may
     * be overridden using {@link
     * Union#configGetSourceVariant|configGetSourceVariant}.
     *
     * @param {Object} src - as with {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
     *
     * @returns {(undefined|VariantLayout)} The default variant
     * (`undefined`) or first registered variant that uses a property
     * available in `src`. */ this.getSourceVariant = function(src) {
            return boundGetSourceVariant(src);
        };
        /** Function to override the implementation of {@link
     * Union#getSourceVariant|getSourceVariant}.
     *
     * Use this if the desired variant cannot be identified using the
     * algorithm of {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
     *
     * **NOTE** The provided function will be invoked bound to this
     * Union instance, providing local access to {@link
     * Union#registry|registry}.
     *
     * @param {Function} gsv - a function that follows the API of
     * {@link Union#defaultGetSourceVariant|defaultGetSourceVariant}. */ this.configGetSourceVariant = function(gsv) {
            boundGetSourceVariant = gsv.bind(this);
        };
    }
    /** @override */ getSpan(b, offset) {
        if (0 <= this.span) {
            return this.span;
        }
        if (undefined === offset) {
            offset = 0;
        }
        /* Default layouts always have non-negative span, so we don't have
     * one and we have to recognize the variant which will in turn
     * determine the span. */ const vlo = this.getVariant(b, offset);
        if (!vlo) {
            throw new Error('unable to determine span for unrecognized variant');
        }
        return vlo.getSpan(b, offset);
    }
    /**
   * Method to infer a registered Union variant compatible with `src`.
   *
   * The first satisified rule in the following sequence defines the
   * return value:
   * * If `src` has properties matching the Union discriminator and
   *   the default layout, `undefined` is returned regardless of the
   *   value of the discriminator property (this ensures the default
   *   layout will be used);
   * * If `src` has a property matching the Union discriminator, the
   *   value of the discriminator identifies a registered variant, and
   *   either (a) the variant has no layout, or (b) `src` has the
   *   variant's property, then the variant is returned (because the
   *   source satisfies the constraints of the variant it identifies);
   * * If `src` does not have a property matching the Union
   *   discriminator, but does have a property matching a registered
   *   variant, then the variant is returned (because the source
   *   matches a variant without an explicit conflict);
   * * An error is thrown (because we either can't identify a variant,
   *   or we were explicitly told the variant but can't satisfy it).
   *
   * @param {Object} src - an object presumed to be compatible with
   * the content of the Union.
   *
   * @return {(undefined|VariantLayout)} - as described above.
   *
   * @throws {Error} - if `src` cannot be associated with a default or
   * registered variant.
   */ defaultGetSourceVariant(src) {
        if (src.hasOwnProperty(this.discriminator.property)) {
            if (this.defaultLayout && src.hasOwnProperty(this.defaultLayout.property)) {
                return undefined;
            }
            const vlo = this.registry[src[this.discriminator.property]];
            if (vlo && (!vlo.layout || src.hasOwnProperty(vlo.property))) {
                return vlo;
            }
        } else {
            for(const tag in this.registry){
                const vlo = this.registry[tag];
                if (src.hasOwnProperty(vlo.property)) {
                    return vlo;
                }
            }
        }
        throw new Error('unable to infer src variant');
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
   *
   * If the variant is {@link Union#addVariant|registered} the return
   * value is an instance of that variant, with no explicit
   * discriminator.  Otherwise the {@link Union#defaultLayout|default
   * layout} is used to decode the content. */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        let dest;
        const dlo = this.discriminator;
        const discr = dlo.decode(b, offset);
        let clo = this.registry[discr];
        if (undefined === clo) {
            let contentOffset = 0;
            clo = this.defaultLayout;
            if (this.usesPrefixDiscriminator) {
                contentOffset = dlo.layout.span;
            }
            dest = this.makeDestinationObject();
            dest[dlo.property] = discr;
            dest[clo.property] = this.defaultLayout.decode(b, offset + contentOffset);
        } else {
            dest = clo.decode(b, offset);
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
   *
   * This API assumes the `src` object is consistent with the union's
   * {@link Union#defaultLayout|default layout}.  To encode variants
   * use the appropriate variant-specific {@link VariantLayout#encode}
   * method. */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const vlo = this.getSourceVariant(src);
        if (undefined === vlo) {
            const dlo = this.discriminator;
            const clo = this.defaultLayout;
            let contentOffset = 0;
            if (this.usesPrefixDiscriminator) {
                contentOffset = dlo.layout.span;
            }
            dlo.encode(src[dlo.property], b, offset);
            return contentOffset + clo.encode(src[clo.property], b, offset + contentOffset);
        }
        return vlo.encode(src, b, offset);
    }
    /** Register a new variant structure within a union.  The newly
   * created variant is returned.
   *
   * @param {Number} variant - initializer for {@link
   * VariantLayout#variant|variant}.
   *
   * @param {Layout} layout - initializer for {@link
   * VariantLayout#layout|layout}.
   *
   * @param {String} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {VariantLayout} */ addVariant(variant, layout, property) {
        const rv = new VariantLayout(this, variant, layout, property);
        this.registry[variant] = rv;
        return rv;
    }
    /**
   * Get the layout associated with a registered variant.
   *
   * If `vb` does not produce a registered variant the function returns
   * `undefined`.
   *
   * @param {(Number|Buffer)} vb - either the variant number, or a
   * buffer from which the discriminator is to be read.
   *
   * @param {Number} offset - offset into `vb` for the start of the
   * union.  Used only when `vb` is an instance of {Buffer}.
   *
   * @return {({VariantLayout}|undefined)}
   */ getVariant(vb, offset) {
        let variant = vb;
        if (Buffer.isBuffer(vb)) {
            if (undefined === offset) {
                offset = 0;
            }
            variant = this.discriminator.decode(vb, offset);
        }
        return this.registry[variant];
    }
}
/**
 * Represent a specific variant within a containing union.
 *
 * **NOTE** The {@link Layout#span|span} of the variant may include
 * the span of the {@link Union#discriminator|discriminator} used to
 * identify it, but values read and written using the variant strictly
 * conform to the content of {@link VariantLayout#layout|layout}.
 *
 * **NOTE** User code should not invoke this constructor directly.  Use
 * the union {@link Union#addVariant|addVariant} helper method.
 *
 * @param {Union} union - initializer for {@link
 * VariantLayout#union|union}.
 *
 * @param {Number} variant - initializer for {@link
 * VariantLayout#variant|variant}.
 *
 * @param {Layout} [layout] - initializer for {@link
 * VariantLayout#layout|layout}.  If absent the variant carries no
 * data.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.  Unlike many other layouts, variant
 * layouts normally include a property name so they can be identified
 * within their containing {@link Union}.  The property identifier may
 * be absent only if `layout` is is absent.
 *
 * @augments {Layout}
 */ class VariantLayout extends Layout {
    constructor(union, variant, layout, property){
        if (!(union instanceof Union)) {
            throw new TypeError('union must be a Union');
        }
        if (!Number.isInteger(variant) || 0 > variant) {
            throw new TypeError('variant must be a (non-negative) integer');
        }
        if ('string' === typeof layout && undefined === property) {
            property = layout;
            layout = null;
        }
        if (layout) {
            if (!(layout instanceof Layout)) {
                throw new TypeError('layout must be a Layout');
            }
            if (null !== union.defaultLayout && 0 <= layout.span && layout.span > union.defaultLayout.span) {
                throw new Error('variant span exceeds span of containing union');
            }
            if ('string' !== typeof property) {
                throw new TypeError('variant must have a String property');
            }
        }
        let span = union.span;
        if (0 > union.span) {
            span = layout ? layout.span : 0;
            if (0 <= span && union.usesPrefixDiscriminator) {
                span += union.discriminator.layout.span;
            }
        }
        super(span, property);
        /** The {@link Union} to which this variant belongs. */ this.union = union;
        /** The unsigned integral value identifying this variant within
     * the {@link Union#discriminator|discriminator} of the containing
     * union. */ this.variant = variant;
        /** The {@link Layout} to be used when reading/writing the
     * non-discriminator part of the {@link
     * VariantLayout#union|union}.  If `null` the variant carries no
     * data. */ this.layout = layout || null;
    }
    /** @override */ getSpan(b, offset) {
        if (0 <= this.span) {
            /* Will be equal to the containing union span if that is not
       * variable. */ return this.span;
        }
        if (undefined === offset) {
            offset = 0;
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        /* Span is defined solely by the variant (and prefix discriminator) */ return contentOffset + this.layout.getSpan(b, offset + contentOffset);
    }
    /** @override */ decode(b, offset) {
        const dest = this.makeDestinationObject();
        if (undefined === offset) {
            offset = 0;
        }
        if (this !== this.union.getVariant(b, offset)) {
            throw new Error('variant mismatch');
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout) {
            dest[this.property] = this.layout.decode(b, offset + contentOffset);
        } else if (this.property) {
            dest[this.property] = true;
        } else if (this.union.usesPrefixDiscriminator) {
            dest[this.union.discriminator.property] = this.variant;
        }
        return dest;
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout && !src.hasOwnProperty(this.property)) {
            throw new TypeError('variant lacks property ' + this.property);
        }
        this.union.discriminator.encode(this.variant, b, offset);
        let span = contentOffset;
        if (this.layout) {
            this.layout.encode(src[this.property], b, offset + contentOffset);
            span += this.layout.getSpan(b, offset + contentOffset);
            if (0 <= this.union.span && span > this.union.span) {
                throw new Error('encoded variant overruns containing union');
            }
        }
        return span;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
   * VariantLayout#layout|layout}. */ fromArray(values) {
        if (this.layout) {
            return this.layout.fromArray(values);
        }
    }
}
/** JavaScript chose to define bitwise operations as operating on
 * signed 32-bit values in 2's complement form, meaning any integer
 * with bit 31 set is going to look negative.  For right shifts that's
 * not a problem, because `>>>` is a logical shift, but for every
 * other bitwise operator we have to compensate for possible negative
 * results. */ function fixBitwiseResult(v) {
    if (0 > v) {
        v += 0x100000000;
    }
    return v;
}
/**
 * Contain a sequence of bit fields as an unsigned integer.
 *
 * *Factory*: {@link module:Layout.bits|bits}
 *
 * This is a container element; within it there are {@link BitField}
 * instances that provide the extracted properties.  The container
 * simply defines the aggregate representation and its bit ordering.
 * The representation is an object containing properties with numeric
 * or {@link Boolean} values.
 *
 * {@link BitField}s are added with the {@link
 * BitStructure#addField|addField} and {@link
 * BitStructure#addBoolean|addBoolean} methods.

 * @param {Layout} word - initializer for {@link
 * BitStructure#word|word}.  The parameter must be an instance of
 * {@link UInt} (or {@link UIntBE}) that is no more than 4 bytes wide.
 *
 * @param {bool} [msb] - `true` if the bit numbering starts at the
 * most significant bit of the containing word; `false` (default) if
 * it starts at the least significant bit of the containing word.  If
 * the parameter at this position is a string and `property` is
 * `undefined` the value of this argument will instead be used as the
 * value of `property`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class BitStructure extends Layout {
    constructor(word, msb, property){
        if (!(word instanceof UInt || word instanceof UIntBE)) {
            throw new TypeError('word must be a UInt or UIntBE layout');
        }
        if ('string' === typeof msb && undefined === property) {
            property = msb;
            msb = undefined;
        }
        if (4 < word.span) {
            throw new RangeError('word cannot exceed 32 bits');
        }
        super(word.span, property);
        /** The layout used for the packed value.  {@link BitField}
     * instances are packed sequentially depending on {@link
     * BitStructure#msb|msb}. */ this.word = word;
        /** Whether the bit sequences are packed starting at the most
     * significant bit growing down (`true`), or the least significant
     * bit growing up (`false`).
     *
     * **NOTE** Regardless of this value, the least significant bit of
     * any {@link BitField} value is the least significant bit of the
     * corresponding section of the packed value. */ this.msb = !!msb;
        /** The sequence of {@link BitField} layouts that comprise the
     * packed structure.
     *
     * **NOTE** The array remains mutable to allow fields to be {@link
     * BitStructure#addField|added} after construction.  Users should
     * not manipulate the content of this property.*/ this.fields = [];
        /* Storage for the value.  Capture a variable instead of using an
     * instance property because we don't want anything to change the
     * value without going through the mutator. */ let value = 0;
        this._packedSetValue = function(v) {
            value = fixBitwiseResult(v);
            return this;
        };
        this._packedGetValue = function() {
            return value;
        };
    }
    /** @override */ decode(b, offset) {
        const dest = this.makeDestinationObject();
        if (undefined === offset) {
            offset = 0;
        }
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields){
            if (undefined !== fd.property) {
                dest[fd.property] = fd.decode(value);
            }
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the packed
   * value is left unmodified.  Unused bits are also left unmodified. */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields){
            if (undefined !== fd.property) {
                const fv = src[fd.property];
                if (undefined !== fv) {
                    fd.encode(fv);
                }
            }
        }
        return this.word.encode(this._packedGetValue(), b, offset);
    }
    /** Register a new bitfield with a containing bit structure.  The
   * resulting bitfield is returned.
   *
   * @param {Number} bits - initializer for {@link BitField#bits|bits}.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {BitField} */ addField(bits, property) {
        const bf = new BitField(this, bits, property);
        this.fields.push(bf);
        return bf;
    }
    /** As with {@link BitStructure#addField|addField} for single-bit
   * fields with `boolean` value representation.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {Boolean} */ addBoolean(property) {
        // This is my Boolean, not the Javascript one.
        // eslint-disable-next-line no-new-wrappers
        const bf = new Boolean(this, property);
        this.fields.push(bf);
        return bf;
    }
    /**
   * Get access to the bit field for a given property.
   *
   * @param {String} property - the bit field of interest.
   *
   * @return {BitField} - the field associated with `property`, or
   * undefined if there is no such property.
   */ fieldFor(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        for (const fd of this.fields){
            if (fd.property === property) {
                return fd;
            }
        }
    }
}
/**
 * Represent a sequence of bits within a {@link BitStructure}.
 *
 * All bit field values are represented as unsigned integers.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addField|addField} helper
 * method.
 *
 * **NOTE** BitField instances are not instances of {@link Layout}
 * since {@link Layout#span|span} measures 8-bit units.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {Number} bits - initializer for {@link BitField#bits|bits}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 */ class BitField {
    constructor(container, bits, property){
        if (!(container instanceof BitStructure)) {
            throw new TypeError('container must be a BitStructure');
        }
        if (!Number.isInteger(bits) || 0 >= bits) {
            throw new TypeError('bits must be positive integer');
        }
        const totalBits = 8 * container.span;
        const usedBits = container.fields.reduce((sum, fd)=>sum + fd.bits, 0);
        if (bits + usedBits > totalBits) {
            throw new Error('bits too long for span remainder (' + (totalBits - usedBits) + ' of ' + totalBits + ' remain)');
        }
        /** The {@link BitStructure} instance to which this bit field
     * belongs. */ this.container = container;
        /** The span of this value in bits. */ this.bits = bits;
        /** A mask of {@link BitField#bits|bits} bits isolating value bits
     * that fit within the field.
     *
     * That is, it masks a value that has not yet been shifted into
     * position within its containing packed integer. */ this.valueMask = (1 << bits) - 1;
        if (32 === bits) {
            this.valueMask = 0xFFFFFFFF;
        }
        /** The offset of the value within the containing packed unsigned
     * integer.  The least significant bit of the packed value is at
     * offset zero, regardless of bit ordering used. */ this.start = usedBits;
        if (this.container.msb) {
            this.start = totalBits - usedBits - bits;
        }
        /** A mask of {@link BitField#bits|bits} isolating the field value
     * within the containing packed unsigned integer. */ this.wordMask = fixBitwiseResult(this.valueMask << this.start);
        /** The property name used when this bitfield is represented in an
     * Object.
     *
     * Intended to be functionally equivalent to {@link
     * Layout#property}.
     *
     * If left undefined the corresponding span of bits will be
     * treated as padding: it will not be mutated by {@link
     * Layout#encode|encode} nor represented as a property in the
     * decoded Object. */ this.property = property;
    }
    /** Store a value into the corresponding subsequence of the containing
   * bit field. */ decode() {
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(word & this.wordMask);
        const value = wordValue >>> this.start;
        return value;
    }
    /** Store a value into the corresponding subsequence of the containing
   * bit field.
   *
   * **NOTE** This is not a specialization of {@link
   * Layout#encode|Layout.encode} and there is no return value. */ encode(value) {
        if (!Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) {
            throw new TypeError(nameWithProperty('BitField.encode', this) + ' value must be integer not exceeding ' + this.valueMask);
        }
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(value << this.start);
        this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
    }
}
/**
 * Represent a single bit within a {@link BitStructure} as a
 * JavaScript boolean.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addBoolean|addBoolean} helper
 * method.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {BitField}
 */ /* eslint-disable no-extend-native */ class Boolean extends BitField {
    constructor(container, property){
        super(container, 1, property);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
   *
   * @returns {boolean} */ decode(b, offset) {
        return !!BitField.prototype.decode.call(this, b, offset);
    }
    /** @override */ encode(value) {
        if ('boolean' === typeof value) {
            // BitField requires integer values
            value = +value;
        }
        return BitField.prototype.encode.call(this, value);
    }
}
/* eslint-enable no-extend-native */ /**
 * Contain a fixed-length block of arbitrary data, represented as a
 * Buffer.
 *
 * *Factory*: {@link module:Layout.blob|blob}
 *
 * @param {(Number|ExternalLayout)} length - initializes {@link
 * Blob#length|length}.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Blob extends Layout {
    constructor(length, property){
        if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) {
            throw new TypeError('length must be positive integer ' + 'or an unsigned integer ExternalLayout');
        }
        let span = -1;
        if (!(length instanceof ExternalLayout)) {
            span = length;
        }
        super(span, property);
        /** The number of bytes in the blob.
     *
     * This may be a non-negative integer, or an instance of {@link
     * ExternalLayout} that satisfies {@link
     * ExternalLayout#isCount|isCount()}. */ this.length = length;
    }
    /** @override */ getSpan(b, offset) {
        let span = this.span;
        if (0 > span) {
            span = this.length.decode(b, offset);
        }
        return span;
    }
    /** @override */ decode(b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        let span = this.span;
        if (0 > span) {
            span = this.length.decode(b, offset);
        }
        return b.slice(offset, offset + span);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */ encode(src, b, offset) {
        let span = this.length;
        if (this.length instanceof ExternalLayout) {
            span = src.length;
        }
        if (!(Buffer.isBuffer(src) && span === src.length)) {
            throw new TypeError(nameWithProperty('Blob.encode', this) + ' requires (length ' + span + ') Buffer as src');
        }
        if (offset + span > b.length) {
            throw new RangeError('encoding overruns Buffer');
        }
        b.write(src.toString('hex'), offset, span, 'hex');
        if (this.length instanceof ExternalLayout) {
            this.length.encode(span, b, offset);
        }
        return span;
    }
}
/**
 * Contain a `NUL`-terminated UTF8 string.
 *
 * *Factory*: {@link module:Layout.cstr|cstr}
 *
 * **NOTE** Any UTF8 string that incorporates a zero-valued byte will
 * not be correctly decoded by this layout.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class CString extends Layout {
    constructor(property){
        super(-1, property);
    }
    /** @override */ getSpan(b, offset) {
        if (!Buffer.isBuffer(b)) {
            throw new TypeError('b must be a Buffer');
        }
        if (undefined === offset) {
            offset = 0;
        }
        let idx = offset;
        while(idx < b.length && 0 !== b[idx]){
            idx += 1;
        }
        return 1 + idx - offset;
    }
    /** @override */ decode(b, offset, dest) {
        if (undefined === offset) {
            offset = 0;
        }
        let span = this.getSpan(b, offset);
        return b.slice(offset, offset + span - 1).toString('utf-8');
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        /* Must force this to a string, lest it be a number and the
     * "utf8-encoding" below actually allocate a buffer of length
     * src */ if ('string' !== typeof src) {
            src = src.toString();
        }
        const srcb = new Buffer(src, 'utf8');
        const span = srcb.length;
        if (offset + span > b.length) {
            throw new RangeError('encoding overruns Buffer');
        }
        srcb.copy(b, offset);
        b[offset + span] = 0;
        return span + 1;
    }
}
/**
 * Contain a UTF8 string with implicit length.
 *
 * *Factory*: {@link module:Layout.utf8|utf8}
 *
 * **NOTE** Because the length is implicit in the size of the buffer
 * this layout should be used only in isolation, or in a situation
 * where the length can be expressed by operating on a slice of the
 * containing buffer.
 *
 * @param {Number} [maxSpan] - the maximum length allowed for encoded
 * string content.  If not provided there is no bound on the allowed
 * content.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UTF8 extends Layout {
    constructor(maxSpan, property){
        if ('string' === typeof maxSpan && undefined === property) {
            property = maxSpan;
            maxSpan = undefined;
        }
        if (undefined === maxSpan) {
            maxSpan = -1;
        } else if (!Number.isInteger(maxSpan)) {
            throw new TypeError('maxSpan must be an integer');
        }
        super(-1, property);
        /** The maximum span of the layout in bytes.
     *
     * Positive values are generally expected.  Zero is abnormal.
     * Attempts to encode or decode a value that exceeds this length
     * will throw a `RangeError`.
     *
     * A negative value indicates that there is no bound on the length
     * of the content. */ this.maxSpan = maxSpan;
    }
    /** @override */ getSpan(b, offset) {
        if (!Buffer.isBuffer(b)) {
            throw new TypeError('b must be a Buffer');
        }
        if (undefined === offset) {
            offset = 0;
        }
        return b.length - offset;
    }
    /** @override */ decode(b, offset, dest) {
        if (undefined === offset) {
            offset = 0;
        }
        let span = this.getSpan(b, offset);
        if (0 <= this.maxSpan && this.maxSpan < span) {
            throw new RangeError('text length exceeds maxSpan');
        }
        return b.slice(offset, offset + span).toString('utf-8');
    }
    /** @override */ encode(src, b, offset) {
        if (undefined === offset) {
            offset = 0;
        }
        /* Must force this to a string, lest it be a number and the
     * "utf8-encoding" below actually allocate a buffer of length
     * src */ if ('string' !== typeof src) {
            src = src.toString();
        }
        const srcb = new Buffer(src, 'utf8');
        const span = srcb.length;
        if (0 <= this.maxSpan && this.maxSpan < span) {
            throw new RangeError('text length exceeds maxSpan');
        }
        if (offset + span > b.length) {
            throw new RangeError('encoding overruns Buffer');
        }
        srcb.copy(b, offset);
        return span;
    }
}
/**
 * Contain a constant value.
 *
 * This layout may be used in cases where a JavaScript value can be
 * inferred without an expression in the binary encoding.  An example
 * would be a {@link VariantLayout|variant layout} where the content
 * is implied by the union {@link Union#discriminator|discriminator}.
 *
 * @param {Object|Number|String} value - initializer for {@link
 * Constant#value|value}.  If the value is an object (or array) and
 * the application intends the object to remain unchanged regardless
 * of what is done to values decoded by this layout, the value should
 * be frozen prior passing it to this constructor.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Constant extends Layout {
    constructor(value, property){
        super(0, property);
        /** The value produced by this constant when the layout is {@link
     * Constant#decode|decoded}.
     *
     * Any JavaScript value including `null` and `undefined` is
     * permitted.
     *
     * **WARNING** If `value` passed in the constructor was not
     * frozen, it is possible for users of decoded values to change
     * the content of the value. */ this.value = value;
    }
    /** @override */ decode(b, offset, dest) {
        return this.value;
    }
    /** @override */ encode(src, b, offset) {
        /* Constants take no space */ return 0;
    }
}
exports.ExternalLayout = ExternalLayout;
exports.GreedyCount = GreedyCount;
exports.OffsetLayout = OffsetLayout;
exports.UInt = UInt;
exports.UIntBE = UIntBE;
exports.Int = Int;
exports.IntBE = IntBE;
exports.Float = Float;
exports.FloatBE = FloatBE;
exports.Double = Double;
exports.DoubleBE = DoubleBE;
exports.Sequence = Sequence;
exports.Structure = Structure;
exports.UnionDiscriminator = UnionDiscriminator;
exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
exports.Union = Union;
exports.VariantLayout = VariantLayout;
exports.BitStructure = BitStructure;
exports.BitField = BitField;
exports.Boolean = Boolean;
exports.Blob = Blob;
exports.CString = CString;
exports.UTF8 = UTF8;
exports.Constant = Constant;
/** Factory for {@link GreedyCount}. */ exports.greedy = (elementSpan, property)=>new GreedyCount(elementSpan, property);
/** Factory for {@link OffsetLayout}. */ exports.offset = (layout, offset, property)=>new OffsetLayout(layout, offset, property);
/** Factory for {@link UInt|unsigned int layouts} spanning one
 * byte. */ exports.u8 = (property)=>new UInt(1, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning two bytes. */ exports.u16 = (property)=>new UInt(2, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning three bytes. */ exports.u24 = (property)=>new UInt(3, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning four bytes. */ exports.u32 = (property)=>new UInt(4, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning five bytes. */ exports.u40 = (property)=>new UInt(5, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning six bytes. */ exports.u48 = (property)=>new UInt(6, property);
/** Factory for {@link NearUInt64|little-endian unsigned int
 * layouts} interpreted as Numbers. */ exports.nu64 = (property)=>new NearUInt64(property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning two bytes. */ exports.u16be = (property)=>new UIntBE(2, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning three bytes. */ exports.u24be = (property)=>new UIntBE(3, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning four bytes. */ exports.u32be = (property)=>new UIntBE(4, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning five bytes. */ exports.u40be = (property)=>new UIntBE(5, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning six bytes. */ exports.u48be = (property)=>new UIntBE(6, property);
/** Factory for {@link NearUInt64BE|big-endian unsigned int
 * layouts} interpreted as Numbers. */ exports.nu64be = (property)=>new NearUInt64BE(property);
/** Factory for {@link Int|signed int layouts} spanning one
 * byte. */ exports.s8 = (property)=>new Int(1, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning two bytes. */ exports.s16 = (property)=>new Int(2, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning three bytes. */ exports.s24 = (property)=>new Int(3, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning four bytes. */ exports.s32 = (property)=>new Int(4, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning five bytes. */ exports.s40 = (property)=>new Int(5, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning six bytes. */ exports.s48 = (property)=>new Int(6, property);
/** Factory for {@link NearInt64|little-endian signed int layouts}
 * interpreted as Numbers. */ exports.ns64 = (property)=>new NearInt64(property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning two bytes. */ exports.s16be = (property)=>new IntBE(2, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning three bytes. */ exports.s24be = (property)=>new IntBE(3, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning four bytes. */ exports.s32be = (property)=>new IntBE(4, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning five bytes. */ exports.s40be = (property)=>new IntBE(5, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning six bytes. */ exports.s48be = (property)=>new IntBE(6, property);
/** Factory for {@link NearInt64BE|big-endian signed int layouts}
 * interpreted as Numbers. */ exports.ns64be = (property)=>new NearInt64BE(property);
/** Factory for {@link Float|little-endian 32-bit floating point} values. */ exports.f32 = (property)=>new Float(property);
/** Factory for {@link FloatBE|big-endian 32-bit floating point} values. */ exports.f32be = (property)=>new FloatBE(property);
/** Factory for {@link Double|little-endian 64-bit floating point} values. */ exports.f64 = (property)=>new Double(property);
/** Factory for {@link DoubleBE|big-endian 64-bit floating point} values. */ exports.f64be = (property)=>new DoubleBE(property);
/** Factory for {@link Structure} values. */ exports.struct = (fields, property, decodePrefixes)=>new Structure(fields, property, decodePrefixes);
/** Factory for {@link BitStructure} values. */ exports.bits = (word, msb, property)=>new BitStructure(word, msb, property);
/** Factory for {@link Sequence} values. */ exports.seq = (elementLayout, count, property)=>new Sequence(elementLayout, count, property);
/** Factory for {@link Union} values. */ exports.union = (discr, defaultLayout, property)=>new Union(discr, defaultLayout, property);
/** Factory for {@link UnionLayoutDiscriminator} values. */ exports.unionLayoutDiscriminator = (layout, property)=>new UnionLayoutDiscriminator(layout, property);
/** Factory for {@link Blob} values. */ exports.blob = (length, property)=>new Blob(length, property);
/** Factory for {@link CString} values. */ exports.cstr = (property)=>new CString(property);
/** Factory for {@link UTF8} values. */ exports.utf8 = (maxSpan, property)=>new UTF8(maxSpan, property);
/** Factory for {@link Constant} values. */ exports.const = (value, property)=>new Constant(value, property);
}),
"[project]/pfm-rust-solana-2026/web/node_modules/cross-fetch/dist/node-ponyfill.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const nodeFetch = __turbopack_context__.r("[project]/pfm-rust-solana-2026/web/node_modules/node-fetch/lib/index.mjs [app-ssr] (ecmascript)");
const realFetch = nodeFetch.default || nodeFetch;
const fetch = function(url, options) {
    // Support schemaless URIs on the server for parity with the browser.
    // Ex: //github.com/ -> https://github.com/
    if (/^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return realFetch.call(this, url, options);
};
fetch.ponyfill = true;
module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = nodeFetch.Headers;
exports.Request = nodeFetch.Request;
exports.Response = nodeFetch.Response;
// Needed for TypeScript consumers without esModuleInterop.
exports.default = fetch;
}),
"[project]/pfm-rust-solana-2026/web/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
];

//# sourceMappingURL=df586_15b4c755._.js.map