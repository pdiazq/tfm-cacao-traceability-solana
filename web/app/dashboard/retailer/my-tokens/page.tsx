"use client";

import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useTokens, Token } from "@/lib/hooks/useTokens";
import { TokenCard } from "@/components/token/TokenCard";

export default function RetailerMyTokensPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { ownedTokens, loading, error } = useTokens(publicKey!);

  const handleTransfer = (token: Token) => {
    router.push(`/dashboard/retailer/transfers?tokenMint=${token.mint.toString()}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Tokens</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-gray-600">Loading tokens...</div>
      ) : ownedTokens.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600">No tokens received yet</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {ownedTokens.map((token) => (
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
