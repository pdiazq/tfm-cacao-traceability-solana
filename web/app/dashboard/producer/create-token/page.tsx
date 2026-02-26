"use client";

import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { createToken } from "@/lib/solana/instructions";

export default function CreateTokenPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [metadata, setMetadata] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!publicKey || !program || !metadata || !amount) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const mint = Keypair.generate();
      const amountBig = BigInt(amount);

      if (amountBig <= BigInt(0)) {
        throw new Error("Amount must be greater than zero");
      }

      if (metadata.length > 256) {
        throw new Error("Metadata exceeds maximum length of 256 characters");
      }

      await createToken(program, publicKey, mint, amountBig, metadata);
      router.push("/dashboard/producer/my-tokens");
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
          <div className="text-5xl mb-4">📦</div>
          <h1 className="text-4xl font-black mb-2">Create New Token</h1>
          <p className="text-gray-300 font-medium">
            Create a new product token to start tracking in the supply chain
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12">
        <form onSubmit={handleSubmit} className="bg-white border-4 border-black rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="metadata" className="block text-sm font-black text-black mb-3">
              📝 Token Metadata
            </label>
            <input
              id="metadata"
              type="text"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
              placeholder="e.g., Lote 001 - Organic Coffee"
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
              placeholder="e.g., 1000"
              min="1"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
            <p className="text-xs text-gray-600 font-semibold mt-2">
              Total units of this token
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
              disabled={isSubmitting || !metadata || !amount}
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-2"
            >
              {isSubmitting ? "⏳ Creating..." : "✓ Create Token"}
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
