"use client";

import { useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { usePendingRoles } from "@/lib/hooks/usePendingRoles";
import { useValidatedRoles } from "@/lib/hooks/useValidatedRoles";
import { validateRole } from "@/lib/solana/instructions";
import { formatAddress, formatRole } from "@/lib/utils/format";

export default function ValidateRolesPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { pendingRoles, loading: pendingLoading, error: pendingError, refetch: refetchPending } = usePendingRoles();
  const { validatedRoles, loading: validatedLoading, error: validatedError, refetch: refetchValidated } = useValidatedRoles();

  const [tab, setTab] = useState<"pending" | "validated">("pending");
  const [validatingWallet, setValidatingWallet] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleValidate = async (walletFullStr: string) => {
    if (!publicKey || !program) return;

    setValidatingWallet(walletFullStr);
    setValidationError(null);

    try {
      const targetWallet = new PublicKey(walletFullStr);
      await validateRole(program, publicKey, targetWallet);
      await refetchPending();
      await refetchValidated();
    } catch (err) {
      setValidationError(
        err instanceof Error ? err.message : "Failed to validate role"
      );
    } finally {
      setValidatingWallet(null);
    }
  };

  const handleRefresh = async () => {
    await refetchPending();
    await refetchValidated();
  };

  const loading = pendingLoading || validatedLoading;
  const error = pendingError || validatedError;

  if (loading && pendingRoles.length === 0 && validatedRoles.length === 0) {
    return <div className="text-lg text-gray-600">Loading roles...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Roles</h1>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {validationError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {validationError}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-2 border-black">
        <button
          onClick={() => setTab("pending")}
          className={`px-4 py-3 font-semibold transition ${
            tab === "pending"
              ? "border-b-2 border-gray-800 text-gray-800"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Pending Requests ({pendingRoles.length})
        </button>
        <button
          onClick={() => setTab("validated")}
          className={`px-4 py-3 font-semibold transition ${
            tab === "validated"
              ? "border-b-2 border-gray-800 text-gray-800"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Validated Roles ({validatedRoles.length})
        </button>
      </div>

      {/* Pending Roles Tab */}
      {tab === "pending" && (
        <div>
          {pendingRoles.length === 0 ? (
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
              <p className="text-gray-600">No pending role requests</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {pendingRoles.map((request) => (
                <div
                  key={request.pda}
                  className="bg-white border-2 border-black rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold text-gray-900">
                      {request.wallet}
                    </div>
                    <div className="text-sm text-gray-600">
                      Requesting: <span className="font-semibold">{formatRole(request.requestedRole)}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Full: {request.walletFull}
                    </div>
                    <div className="text-xs text-gray-500">
                      PDA: {formatAddress(request.pda)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleValidate(request.walletFull)}
                    disabled={validatingWallet !== null}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    {validatingWallet === request.walletFull ? "Validating..." : "Validate"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Validated Roles Tab */}
      {tab === "validated" && (
        <div>
          {validatedRoles.length === 0 ? (
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
              <p className="text-gray-600">No validated roles yet</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {validatedRoles.map((role) => (
                <div
                  key={role.pda}
                  className="bg-white border-2 border-black rounded-lg p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {role.wallet}
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        Role: <span className="font-semibold text-green-600">{formatRole(role.role)}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Full: {role.walletFull}
                      </div>
                      <div className="text-xs text-gray-500">
                        PDA: {formatAddress(role.pda)}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      ✓ Validated
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
