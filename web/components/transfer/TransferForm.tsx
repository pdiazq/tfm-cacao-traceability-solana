"use client";

import { useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { Token } from "@/lib/hooks/useTokens";
import { initiateTransfer } from "@/lib/solana/instructions";
import { Program } from "@coral-xyz/anchor";
import { Traza } from "@/types/traza";
import { formatAddress } from "@/lib/utils/format";

interface TransferFormProps {
  program: Program<Traza>;
  from: PublicKey;
  tokens: Token[];
  onSuccess?: () => void;
}

const VALID_PATHS: Record<string, string[]> = {
  producer: ["factory"],
  factory: ["retailer"],
  retailer: ["consumer"],
  consumer: [],
};

export function TransferForm({ program, from, tokens, onSuccess }: TransferFormProps) {
  const [selectedTokenMint, setSelectedTokenMint] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedToken = selectedTokenMint
    ? tokens.find(t => t.mint.toString() === selectedTokenMint)
    : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedToken || !recipientAddress || !transferAmount) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const recipient = new PublicKey(recipientAddress);

      // Validate address format
      if (!PublicKey.isOnCurve(recipient.toBytes())) {
        throw new Error("Invalid recipient address");
      }

      const amount = BigInt(transferAmount);

      if (amount <= BigInt(0)) {
        throw new Error("Amount must be greater than zero");
      }

      if (amount > selectedToken.amount) {
        throw new Error(`Amount exceeds available balance (${selectedToken.amount.toString()} units)`);
      }

      await initiateTransfer(
        program,
        from,
        recipient,
        selectedToken.mint,
        amount
      );

      setSelectedTokenMint("");
      setTransferAmount("");
      setRecipientAddress("");
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to transfer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="token" className="block text-sm font-black text-black mb-3">
          📦 Select Token
        </label>
        {tokens.length === 0 ? (
          <div className="w-full px-4 py-3 text-base text-gray-600 bg-gray-100 border-4 border-gray-300 rounded-lg">
            No tokens available to transfer
          </div>
        ) : (
          <select
            id="token"
            value={selectedTokenMint}
            onChange={(e) => {
              setSelectedTokenMint(e.target.value);
              setTransferAmount("");
            }}
            className="w-full px-4 py-3 text-base text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white cursor-pointer"
            required
          >
            <option value="">Select a token...</option>
            {tokens.map((token) => (
              <option key={token.mint.toString()} value={token.mint.toString()}>
                {token.metadata} ({token.amount.toString()} units)
              </option>
            ))}
          </select>
        )}
      </div>

      {selectedToken && (
        <div>
          <label htmlFor="amount" className="block text-sm font-black text-black mb-3">
            🔢 Amount to Transfer
          </label>
          <input
            id="amount"
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="e.g., 100"
            min="1"
            max={selectedToken.amount.toString()}
            className="w-full px-4 py-3 text-base text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
            required
          />
          <p className="text-xs text-gray-600 font-semibold mt-2">
            Available: {selectedToken.amount.toString()} units
          </p>
        </div>
      )}

      <div>
        <label htmlFor="recipient" className="block text-sm font-black text-black mb-3">
          👤 Recipient Address
        </label>
        <input
          id="recipient"
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="e.g., 9B5X..."
          className="w-full px-4 py-3 text-base text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
          required
        />
        {recipientAddress && (
          <p className="text-xs text-gray-600 font-semibold mt-2">
            Full: {recipientAddress}
          </p>
        )}
      </div>

      {selectedToken && transferAmount && (
        <div className="p-4 bg-gray-50 border-4 border-black rounded-lg">
          <p className="text-sm font-black text-black mb-3">
            ✓ Transfer Summary
          </p>
          <div className="space-y-2 text-sm text-gray-700 font-semibold">
            <p>📦 Token: {selectedToken.metadata}</p>
            <p>🔢 Amount: {transferAmount} units (of {selectedToken.amount.toString()} available)</p>
            <p>📍 To: {formatAddress(recipientAddress)}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg font-semibold">
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !selectedToken || !transferAmount || !recipientAddress}
        className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-2"
      >
        {isSubmitting ? "⏳ Initiating Transfer..." : "✓ Initiate Transfer"}
      </button>
    </form>
  );
}
