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
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">⚙️</div>
          <h1 className="text-4xl font-black mb-2">Create New Product</h1>
          <p className="text-gray-300 font-medium">
            Combine producer tokens to create a new processed product
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12">
        <form onSubmit={handleSubmit} className="bg-white border-4 border-black rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="metadata" className="block text-sm font-black text-black mb-3">
              📝 Product Metadata
            </label>
            <input
              id="metadata"
              type="text"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
              placeholder="e.g., Processed Coffee Beans"
              maxLength={256}
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
            <p className="text-xs text-gray-600 font-semibold mt-2">
              {metadata.length}/256 characters
            </p>
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-black text-black mb-3">
              🔢 Amount
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 500"
              min="1"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-black text-black mb-3">
              🌱 Source Tokens
              <span className="text-red-600"> *</span>
              <span className="font-normal text-xs text-gray-600"> (minimum 1, maximum 10)</span>
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto bg-gray-50 border-4 border-black rounded-lg p-4">
              {availableSourceTokens.length === 0 ? (
                <p className="text-sm text-gray-600 font-semibold p-4 text-center">
                  No available source tokens from producers
                </p>
              ) : (
                availableSourceTokens.map((token) => (
                  <label key={token.mint.toString()} className="flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSources.includes(token.mint.toString())}
                      onChange={() =>
                        handleSourceToggle(token.mint.toString())
                      }
                      className="rounded border-2 border-black w-4 h-4 accent-black"
                    />
                    <span className="ml-3 text-sm text-black font-medium">
                      {token.metadata} ({formatAddress(token.mint.toString())})
                    </span>
                  </label>
                ))
              )}
            </div>
            <p className="text-xs text-gray-600 font-semibold mt-2">
              Selected: {selectedSources.length}/10
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg font-semibold">
              ⚠️ {error}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !metadata ||
                !amount ||
                selectedSources.length === 0
              }
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-2"
            >
              {isSubmitting ? "⏳ Creating..." : "✓ Create Product"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition"
            >
              ← Cancel
            </button>
          </div>
      </form>
      </div>
    </div>
  );
}
