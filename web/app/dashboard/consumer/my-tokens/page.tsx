"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTokenBalances, TokenBalance } from "@/lib/hooks/useTokenBalances";
import { TokenBalanceCard } from "@/components/token/TokenBalanceCard";

interface TokenInfo {
  balance: TokenBalance;
  metadata: string;
  totalSupply: bigint;
}

export default function ConsumerMyTokensPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { balances, loading, error } = useTokenBalances(publicKey!);
  const [tokensInfo, setTokensInfo] = useState<TokenInfo[]>([]);
  const [enriching, setEnriching] = useState(false);

  // Enrich balances with TraceToken metadata and total_supply
  useEffect(() => {
    const enrichBalances = async () => {
      if (!program || balances.length === 0) {
        setTokensInfo([]);
        return;
      }

      setEnriching(true);
      try {
        const enriched = await Promise.all(
          balances.map(async (balance) => {
            try {
              const traceToken = await program.account.traceToken.fetch(
                (await program.account.traceToken.all([
                  {
                    memcmp: {
                      offset: 8, // discriminator
                      bytes: balance.tokenMint.toBase58(),
                    },
                  },
                ]))[0]?.publicKey
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

  const isLoading = loading || enriching;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Tokens</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="text-gray-600">Loading tokens...</div>
      ) : tokensInfo.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-600">No tokens received yet</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {tokensInfo.map((info) => (
            <TokenBalanceCard
              key={info.balance.tokenMint.toString()}
              balance={info.balance}
              totalSupply={info.totalSupply}
              metadata={info.metadata}
            />
          ))}
        </div>
      )}
    </div>
  );
}
