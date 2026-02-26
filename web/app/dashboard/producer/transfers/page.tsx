"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTokenBalances } from "@/lib/hooks/useTokenBalances";
import { useTransfers } from "@/lib/hooks/useTransfers";
import { acceptTransfer } from "@/lib/solana/instructions";
import { TransferForm } from "@/components/transfer/TransferForm";
import { formatAddress, formatAmount } from "@/lib/utils/format";
import { formatDistance } from "date-fns";

export default function TransfersPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { balances, refetch: refetchBalances } = useTokenBalances(publicKey!);
  const { sentTransfers, receivedTransfers, refetch: refetchTransfers } = useTransfers(publicKey!);

  const [activeTab, setActiveTab] = useState<"sent" | "received">("sent");
  const [acceptingTransfer, setAcceptingTransfer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);
  const [enriching, setEnriching] = useState(false);

  const handleAcceptTransfer = async (tokenMint: string, sender: string) => {
    if (!program || !publicKey) return;

    setAcceptingTransfer(tokenMint);
    setError(null);

    try {
      const mint = new (require("@solana/web3.js")).PublicKey(tokenMint);
      const senderPK = new (require("@solana/web3.js")).PublicKey(sender);
      await acceptTransfer(program, publicKey, mint, senderPK);
      await refetchTransfers();
      await refetchBalances();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to accept transfer");
    } finally {
      setAcceptingTransfer(null);
    }
  };

  // Enrich balances with metadata from TraceToken
  useEffect(() => {
    const enrichTokens = async () => {
      if (!program || !program.account || balances.length === 0) {
        setTokens([]);
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
                    offset: 8,
                    bytes: balance.tokenMint.toBase58(),
                  },
                },
              ]);

              if (tokenAccounts.length === 0) {
                return {
                  mint: balance.tokenMint,
                  amount: balance.balance,
                  metadata: balance.tokenMint.toString(),
                  creator: publicKey!,
                  creatorRole: "producer",
                  currentOwner: publicKey!,
                  status: "created",
                  sourceTokens: [],
                  createdAt: balance.lastUpdated,
                  pda: balance.pda,
                };
              }

              const traceToken = await (program.account as any).traceToken.fetch(
                tokenAccounts[0].publicKey
              );
              return {
                mint: balance.tokenMint,
                amount: balance.balance,
                metadata: traceToken.metadata || balance.tokenMint.toString(),
                creator: publicKey!,
                creatorRole: "producer",
                currentOwner: publicKey!,
                status: "created",
                sourceTokens: [],
                createdAt: balance.lastUpdated,
                pda: balance.pda,
              };
            } catch {
              return {
                mint: balance.tokenMint,
                amount: balance.balance,
                metadata: balance.tokenMint.toString(),
                creator: publicKey!,
                creatorRole: "producer",
                currentOwner: publicKey!,
                status: "created",
                sourceTokens: [],
                createdAt: balance.lastUpdated,
                pda: balance.pda,
              };
            }
          })
        );
        setTokens(enriched);
      } finally {
        setEnriching(false);
      }
    };

    enrichTokens();
  }, [program, balances, publicKey]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">🔄</div>
          <h1 className="text-4xl font-black mb-2">Manage Transfers</h1>
          <p className="text-gray-300 font-medium">
            Initiate and track product token transfers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Initiate Transfer */}
          <div className="bg-white border-4 border-black rounded-lg p-8">
            <h2 className="text-2xl font-black text-black mb-6">
              📨 Send Token
            </h2>
            {program && publicKey ? (
              <TransferForm
                program={program}
                from={publicKey}
                tokens={tokens}
                onSuccess={() => {
                  refetchTransfers();
                }}
              />
            ) : (
              <div className="text-gray-600 font-semibold">Connect wallet to transfer tokens</div>
            )}
          </div>

          {/* Transfers List */}
          <div>
            <h2 className="text-2xl font-black text-black mb-6">📋 Transfer History</h2>
            <div className="flex gap-2 mb-6 border-b-4 border-black">
              <button
                onClick={() => setActiveTab("sent")}
                className={`px-6 py-3 text-base font-black transition ${
                  activeTab === "sent"
                    ? "border-b-4 border-black text-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📤 Sent ({sentTransfers.length})
              </button>
              <button
                onClick={() => setActiveTab("received")}
                className={`px-6 py-3 text-base font-black transition ${
                  activeTab === "received"
                    ? "border-b-4 border-black text-black"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📥 Received ({receivedTransfers.length})
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-4 font-semibold">
                ⚠️ {error}
              </div>
            )}

            <div className="space-y-4">
              {(activeTab === "sent" ? sentTransfers : receivedTransfers).length === 0 ? (
                <div className="bg-white border-4 border-black rounded-lg p-12 text-center">
                  <div className="text-4xl mb-3">📭</div>
                  <p className="text-gray-600 font-semibold">No {activeTab} transfers</p>
                </div>
              ) : (
                (activeTab === "sent" ? sentTransfers : receivedTransfers).map(
                  (transfer) => (
                    <div
                      key={transfer.pda.toString()}
                      className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-black text-gray-900 text-sm">
                            Token: {formatAddress(transfer.tokenMint.toString())}
                          </p>
                          <p className="text-lg font-black text-black mt-1">
                            🔢 {formatAmount(transfer.amount)} units
                          </p>
                        </div>
                        <span className="text-xs text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded">
                          {formatDistance(
                            new Date(transfer.initiatedAt * 1000),
                            new Date(),
                            { addSuffix: true }
                          )}
                        </span>
                      </div>

                      <div className="border-t-4 border-black pt-3 space-y-1 text-xs text-gray-600 font-semibold">
                        <p>👤 From: {formatAddress(transfer.from.toString())}</p>
                        <p>📍 To: {formatAddress(transfer.to.toString())}</p>
                      </div>

                      {activeTab === "received" && (
                        <button
                          onClick={() =>
                            handleAcceptTransfer(transfer.tokenMint.toString(), transfer.from.toString())
                          }
                          disabled={acceptingTransfer !== null}
                          className="mt-4 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-2"
                        >
                          {acceptingTransfer === transfer.tokenMint.toString()
                            ? "⏳ Accepting..."
                            : "✓ Accept Transfer"}
                        </button>
                      )}
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
