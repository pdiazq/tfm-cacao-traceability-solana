"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTokenBalances, TokenBalance } from "@/lib/hooks/useTokenBalances";
import { TokenBalanceCard } from "@/components/token/TokenBalanceCard";

interface TokenInfo {
  balance: TokenBalance;
  metadata: string;
  totalSupply: bigint;
}

export default function RetailerMyTokensPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { balances, loading, error } = useTokenBalances(publicKey!);
  const [tokensInfo, setTokensInfo] = useState<TokenInfo[]>([]);
  const [enriching, setEnriching] = useState(false);

  // Retailer-specific view

  // Enrich balances with TraceToken metadata and total_supply
  useEffect(() => {
    const enrichBalances = async () => {
      if (!program || !program.account || balances.length === 0) {
        setTokensInfo([]);
        return;
      }

      setEnriching(true);
      try {
        const enriched = await Promise.all(
          balances.map(async (balance) => {
            try {
              const tokenAccounts = await (program.account as any).traceToken.all([
                {
                  memcmp: {
                    offset: 8, // discriminator
                    bytes: balance.tokenMint.toBase58(),
                  },
                },
              ]);

              if (tokenAccounts.length === 0) {
                return {
                  balance,
                  metadata: balance.tokenMint.toString(),
                  totalSupply: balance.balance,
                };
              }

              const traceToken = await (program.account as any).traceToken.fetch(
                tokenAccounts[0].publicKey
              );
              return {
                balance,
                metadata: traceToken.metadata || balance.tokenMint.toString(),
                totalSupply: BigInt(traceToken.totalSupply.toString()),
              };
            } catch {
              return {
                balance,
                metadata: balance.tokenMint.toString(),
                totalSupply: balance.balance, // fallback to balance if token not found
              };
            }
          })
        );
        setTokensInfo(enriched);
      } catch {
        // If enrichment fails, show basic info
        setTokensInfo(
          balances.map((balance) => ({
            balance,
            metadata: balance.tokenMint.toString(),
            totalSupply: balance.balance,
          }))
        );
      } finally {
        setEnriching(false);
      }
    };

    enrichBalances();
  }, [program, balances]);

  const handleTransfer = (balance: TokenBalance) => {
    router.push(
      `/dashboard/retailer/transfers?tokenMint=${balance.tokenMint.toString()}`
    );
  };

  const isLoading = loading || enriching;

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-5xl mb-3">🛍️</div>
            <h1 className="text-4xl font-black mb-2">My Inventory</h1>
            <p className="text-gray-300 font-medium">
              Products received from factories, ready to sell
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 font-semibold">
            Error: {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-lg text-gray-600">Loading your inventory...</p>
          </div>
        ) : tokensInfo.length === 0 ? (
          <div className="bg-white border-4 border-black rounded-lg p-16 text-center">
            <div className="text-6xl mb-6">📦</div>
            <h3 className="text-3xl font-black text-black mb-3">No Products Yet</h3>
            <p className="text-gray-700 font-medium mb-8 max-w-md mx-auto">
              You haven't received any products yet. Check your transfers to accept incoming shipments from factories.
            </p>
            <button
              onClick={() => router.push("/dashboard/retailer/transfers")}
              className="bg-black hover:bg-gray-800 text-white font-black py-4 px-8 rounded-lg transition transform hover:-translate-y-2 inline-block"
            >
              📨 Check Transfers
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <p className="text-lg font-semibold text-gray-600">
                You have <span className="font-black text-black text-2xl">{tokensInfo.length}</span> product{tokensInfo.length !== 1 ? 's' : ''} in stock
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {tokensInfo.map((info) => (
                <TokenBalanceCard
                  key={info.balance.tokenMint.toString()}
                  balance={info.balance}
                  totalSupply={info.totalSupply}
                  metadata={info.metadata}
                  onTransfer={handleTransfer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
