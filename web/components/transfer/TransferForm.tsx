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
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      setSelectedToken(null);
      setTransferAmount("");
      setRecipientAddress("");
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to transfer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTokens = tokens;

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
      <div>
        <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-2">
          Select Token
        </label>
        <select
          id="token"
          value={selectedToken?.mint.toString() || ""}
          onChange={(e) => {
            const token = availableTokens.find(
              (t) => t.mint.toString() === e.target.value
            );
            setSelectedToken(token || null);
            setTransferAmount("");
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a token...</option>
          {availableTokens.map((token) => (
            <option key={token.mint.toString()} value={token.mint.toString()}>
              {token.metadata} ({token.amount.toString()} units)
            </option>
          ))}
        </select>
      </div>

      {selectedToken && (
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount to Transfer
          </label>
          <input
            id="amount"
            type="number"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="e.g., 100"
            min="1"
            max={selectedToken.amount.toString()}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Available: {selectedToken.amount.toString()} units
          </p>
        </div>
      )}

      <div>
        <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">
          Recipient Address
        </label>
        <input
          id="recipient"
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="e.g., 9B5X..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {recipientAddress && (
          <p className="text-xs text-gray-500 mt-1">
            Full: {recipientAddress}
          </p>
        )}
      </div>

      {selectedToken && transferAmount && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-900">
            <strong>Transfer Details:</strong>
          </p>
          <p className="text-sm text-blue-800 mt-1">
            Token: {selectedToken.metadata}
          </p>
          <p className="text-sm text-blue-800">
            Amount to Transfer: {transferAmount} units (of {selectedToken.amount.toString()} available)
          </p>
          <p className="text-sm text-blue-800">
            To: {formatAddress(recipientAddress)}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !selectedToken || !transferAmount || !recipientAddress}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
      >
        {isSubmitting ? "Initiating Transfer..." : "Initiate Transfer"}
      </button>
    </form>
  );
}
