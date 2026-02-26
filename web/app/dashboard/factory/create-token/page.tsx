"use client";

import { useState, useMemo } from "react";
import { Keypair } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useTokensByRole } from "@/lib/hooks/useTokensByRole";
import { createToken } from "@/lib/solana/instructions";
import { formatAddress } from "@/lib/utils/format";

export default function CreateTokenFactoryPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { tokens: producerTokens } = useTokensByRole("producer");

  const [metadata, setMetadata] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableSourceTokens = useMemo(
    () =>
      producerTokens.filter(
        (t) => t.creatorRole === "producer" && t.status !== "inTransfer"
      ),
    [producerTokens]
  );

  const handleSourceToggle = (tokenMint: string) => {
    setSelectedSources((prev) =>
      prev.includes(tokenMint)
        ? prev.filter((m) => m !== tokenMint)
        : [...prev, tokenMint]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!publicKey || !program || !metadata || !amount || selectedSources.length === 0) return;

    setIsSubmitting(true);
    setError(null);

    try {
      if (selectedSources.length === 0) {
        throw new Error("Factory must provide at least one source token");
      }

      if (selectedSources.length > 10) {
        throw new Error("Maximum 10 source tokens allowed");
      }

      const mint = Keypair.generate();
      const amountBig = BigInt(amount);

      if (amountBig <= BigInt(0)) {
        throw new Error("Amount must be greater than zero");
      }

      if (metadata.length > 256) {
        throw new Error("Metadata exceeds maximum length of 256 characters");
      }

      // Convert selected source strings to PublicKey objects
      const { PublicKey } = require("@solana/web3.js");
      const sourceTokenMints = selectedSources.map((s) => new PublicKey(s));

      await createToken(
        program,
        publicKey,
        mint,
        amountBig,
        metadata,
        sourceTokenMints
      );
      router.push("/dashboard/factory/my-tokens");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create token");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Factory Token</h1>
      <p className="text-gray-600 mb-8">
        Create a new token by combining producer tokens
      </p>

      <form onSubmit={handleSubmit} className="bg-white border-4 border-black rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="metadata" className="block text-sm font-medium text-black mb-2">
            Token Metadata
          </label>
          <input
            id="metadata"
            type="text"
            value={metadata}
            onChange={(e) => setMetadata(e.target.value)}
            placeholder="e.g., Processed Coffee Beans"
            maxLength={256}
            className="w-full px-4 py-3 text-base border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {metadata.length}/256 characters
          </p>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-black mb-2">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 500"
            min="1"
            className="w-full px-4 py-3 text-base border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Source Tokens
            <span className="text-red-600">*</span> (minimum 1, maximum 10)
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto border-4 border-black rounded-lg p-3">
            {availableSourceTokens.length === 0 ? (
              <p className="text-sm text-gray-500">
                No available source tokens from producers
              </p>
            ) : (
              availableSourceTokens.map((token) => (
                <label key={token.mint.toString()} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(token.mint.toString())}
                    onChange={() =>
                      handleSourceToggle(token.mint.toString())
                    }
                    className="rounded border-gray-300 text-gray-800 focus:ring-gray-500"
                  />
                  <span className="ml-2 text-sm">
                    {token.metadata} ({formatAddress(token.mint.toString())})
                  </span>
                </label>
              ))
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Selected: {selectedSources.length}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={
              isSubmitting ||
              !metadata ||
              !amount ||
              selectedSources.length === 0
            }
            className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
          >
            {isSubmitting ? "Creating..." : "Create Token"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
