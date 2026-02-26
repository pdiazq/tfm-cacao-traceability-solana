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

  const getRoleEmoji = (role: string) => {
    const emojiMap: { [key: string]: string } = {
      producer: "🌱",
      factory: "🏭",
      retailer: "🏪",
      consumer: "👥",
    };
    return emojiMap[role] || "👤";
  };

  if (loading && pendingRoles.length === 0 && validatedRoles.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading roles...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-6xl mb-4">✓</div>
              <h1 className="text-5xl font-black mb-4">Validate Roles</h1>
              <p className="text-xl text-gray-300">
                Review and approve user role requests to grant network access
              </p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="bg-white text-black font-black py-3 px-6 rounded-lg hover:shadow-2xl transition transform hover:-translate-y-2 disabled:opacity-50"
            >
              {loading ? "Loading..." : "🔄 Refresh"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 font-semibold">
            Error: {error}
          </div>
        )}

        {validationError && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 font-semibold">
            Validation Error: {validationError}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8 border-b-4 border-black">
          <div className="flex gap-8">
            <button
              onClick={() => setTab("pending")}
              className={`px-6 py-4 font-black text-lg transition ${
                tab === "pending"
                  ? "border-b-4 border-black text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📋 Pending Requests ({pendingRoles.length})
            </button>
            <button
              onClick={() => setTab("validated")}
              className={`px-6 py-4 font-black text-lg transition ${
                tab === "validated"
                  ? "border-b-4 border-black text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ✅ Validated Roles ({validatedRoles.length})
            </button>
          </div>
        </div>

        {/* Pending Roles Tab */}
      {tab === "pending" && (
        <div>
          {pendingRoles.length === 0 ? (
            <div className="bg-white border-4 border-black rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-black text-black mb-2">All Caught Up!</h3>
              <p className="text-gray-600 font-medium">
                There are no pending role requests at the moment. All users have been validated.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingRoles.map((request) => (
                <div
                  key={request.pda}
                  className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{getRoleEmoji(request.requestedRole)}</div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1">Wallet Address</div>
                        <div className="font-black text-gray-900 text-lg">{request.wallet}</div>
                        <div className="text-xs text-gray-500 mt-2">{request.walletFull}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleValidate(request.walletFull)}
                      disabled={validatingWallet !== null}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-black py-3 px-6 rounded-lg transition transform hover:-translate-y-2"
                    >
                      {validatingWallet === request.walletFull ? "⏳ Validating..." : "✓ Approve"}
                    </button>
                  </div>
                  <div className="border-t-4 border-black pt-4">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Requesting Role:</p>
                    <p className="text-xl font-black text-black">
                      {getRoleEmoji(request.requestedRole)} {formatRole(request.requestedRole)}
                    </p>
                  </div>
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
            <div className="bg-white border-4 border-black rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-black text-black mb-2">No Validated Roles Yet</h3>
              <p className="text-gray-600 font-medium">
                Start by approving pending role requests above to validate users.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {validatedRoles.map((role) => (
                <div
                  key={role.pda}
                  className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{getRoleEmoji(role.role)}</div>
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1">Wallet Address</div>
                        <div className="font-black text-gray-900 text-lg">{role.wallet}</div>
                        <div className="text-xs text-gray-500 mt-2">{role.walletFull}</div>
                        <div className="text-xs text-gray-500 mt-1">PDA: {formatAddress(role.pda)}</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="px-4 py-2 bg-green-100 text-green-800 font-black rounded-lg border-2 border-green-800">
                        ✓
                      </div>
                      <p className="text-xs font-semibold text-gray-600 mt-2">Validated</p>
                    </div>
                  </div>
                  <div className="border-t-4 border-black mt-4 pt-4">
                    <p className="text-sm text-gray-600 font-semibold mb-1">Approved Role:</p>
                    <p className="text-xl font-black text-black">
                      {getRoleEmoji(role.role)} {formatRole(role.role)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
}
