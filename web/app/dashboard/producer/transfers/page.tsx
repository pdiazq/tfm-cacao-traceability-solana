"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTokens } from "@/lib/hooks/useTokens";
import { useTransfers } from "@/lib/hooks/useTransfers";
import { acceptTransfer } from "@/lib/solana/instructions";
import { TransferForm } from "@/components/transfer/TransferForm";
import { formatAddress, formatAmount } from "@/lib/utils/format";
import { formatDistance } from "date-fns";

export default function TransfersPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { tokens, refetch: refetchTokens } = useTokens(publicKey!);
  const { sentTransfers, receivedTransfers, refetch: refetchTransfers } = useTransfers(publicKey!);

  const [activeTab, setActiveTab] = useState<"sent" | "received">("sent");
  const [acceptingTransfer, setAcceptingTransfer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAcceptTransfer = async (tokenMint: string, sender: string) => {
    if (!program || !publicKey) return;

    setAcceptingTransfer(tokenMint);
    setError(null);

    try {
      const mint = new (require("@solana/web3.js")).PublicKey(tokenMint);
      const senderPK = new (require("@solana/web3.js")).PublicKey(sender);
      await acceptTransfer(program, publicKey, mint, senderPK);
      await refetchTransfers();
      await refetchTokens();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to accept transfer");
    } finally {
      setAcceptingTransfer(null);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Transfers</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Initiate Transfer */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Initiate Transfer
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
            <div className="text-gray-600">Connect wallet to transfer tokens</div>
          )}
        </div>

        {/* Transfers List */}
        <div>
          <div className="flex gap-2 mb-4 border-b border-4 border-black">
            <button
              onClick={() => setActiveTab("sent")}
              className={`px-4 py-3 text-base font-medium ${
                activeTab === "sent"
                  ? "border-b-2 border-gray-800 text-gray-800"
                  : "text-gray-600"
              }`}
            >
              Sent ({sentTransfers.length})
            </button>
            <button
              onClick={() => setActiveTab("received")}
              className={`px-4 py-3 text-base font-medium ${
                activeTab === "received"
                  ? "border-b-2 border-gray-800 text-gray-800"
                  : "text-gray-600"
              }`}
            >
              Received ({receivedTransfers.length})
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {(activeTab === "sent" ? sentTransfers : receivedTransfers).length === 0 ? (
              <div className="bg-gray-50 border-4 border-black rounded-lg p-8 text-center">
                <p className="text-gray-600">No {activeTab} transfers</p>
              </div>
            ) : (
              (activeTab === "sent" ? sentTransfers : receivedTransfers).map(
                (transfer) => (
                  <div
                    key={transfer.pda.toString()}
                    className="bg-white border-4 border-black rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {formatAddress(transfer.tokenMint.toString())}
                        </p>
                        <p className="text-sm text-gray-600">
                          Amount: {formatAmount(transfer.amount)}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {formatDistance(
                          new Date(transfer.initiatedAt * 1000),
                          new Date(),
                          { addSuffix: true }
                        )}
                      </span>
                    </div>

                    <div className="text-xs text-gray-500 space-y-1">
                      <p>From: {formatAddress(transfer.from.toString())}</p>
                      <p>To: {formatAddress(transfer.to.toString())}</p>
                    </div>

                    {activeTab === "received" && (
                      <button
                        onClick={() =>
                          handleAcceptTransfer(transfer.tokenMint.toString(), transfer.from.toString())
                        }
                        disabled={acceptingTransfer !== null}
                        className="mt-3 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition text-sm"
                      >
                        {acceptingTransfer === transfer.tokenMint.toString()
                          ? "Accepting..."
                          : "Accept Transfer"}
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
  );
}
