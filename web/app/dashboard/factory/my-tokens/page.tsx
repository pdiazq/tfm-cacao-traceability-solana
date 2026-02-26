"use client";

import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTokens, Token } from "@/lib/hooks/useTokens";
import { TokenCard } from "@/components/token/TokenCard";

export default function FactoryMyTokensPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { tokens, ownedTokens, loading, error } = useTokens(publicKey!);

  const handleTransfer = (token: Token) => {
    router.push(`/dashboard/factory/transfers?tokenMint=${token.mint.toString()}`);
  };

  const allTokens = [...tokens, ...ownedTokens];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Tokens</h1>
        <button
          onClick={() => router.push("/dashboard/factory/create-token")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          + Create Token
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-gray-600">Loading tokens...</div>
      ) : allTokens.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600">No tokens yet</p>
          <button
            onClick={() => router.push("/dashboard/factory/create-token")}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Create your first token
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {allTokens.map((token) => (
            <TokenCard
              key={token.mint.toString()}
              token={token}
              onTransfer={handleTransfer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
