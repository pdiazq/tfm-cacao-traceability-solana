"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTransfers } from "@/lib/hooks/useTransfers";
import { acceptTransfer } from "@/lib/solana/instructions";
import { formatAddress, formatAmount } from "@/lib/utils/format";
import { formatDistance } from "date-fns";

export default function ConsumerTransfersPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { receivedTransfers, refetch } = useTransfers(publicKey!);

  const [acceptingTransfer, setAcceptingTransfer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAcceptTransfer = async (tokenMint: string, sender: string) => {
    if (!program || !publicKey) return;

    setAcceptingTransfer(tokenMint);
    setError(null);

    try {
      const { PublicKey } = require("@solana/web3.js");
      const mint = new PublicKey(tokenMint);
      const senderPK = new PublicKey(sender);
      await acceptTransfer(program, publicKey, mint, senderPK);
      await refetch();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to accept transfer");
    } finally {
      setAcceptingTransfer(null);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Incoming Transfers</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {receivedTransfers.length === 0 ? (
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <p className="text-gray-600">No incoming transfers</p>
        </div>
      ) : (
        <div className="space-y-4">
          {receivedTransfers.map((transfer) => (
            <div
              key={transfer.pda.toString()}
              className="bg-white border-2 border-black rounded-lg p-4"
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

              <button
                onClick={() => handleAcceptTransfer(transfer.tokenMint.toString(), transfer.from.toString())}
                disabled={acceptingTransfer !== null}
                className="mt-3 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition text-sm"
              >
                {acceptingTransfer === transfer.tokenMint.toString()
                  ? "Accepting..."
                  : "Accept Transfer"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
