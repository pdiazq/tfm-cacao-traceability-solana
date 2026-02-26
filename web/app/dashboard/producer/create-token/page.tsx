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
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Token</h1>
      <p className="text-gray-600 mb-8">
        Create a new trace token for your products
      </p>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="metadata" className="block text-sm font-medium text-gray-700 mb-2">
            Token Metadata
          </label>
          <input
            id="metadata"
            type="text"
            value={metadata}
            onChange={(e) => setMetadata(e.target.value)}
            placeholder="e.g., Lote 001 - Organic Coffee"
            maxLength={256}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {metadata.length}/256 characters
          </p>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 1000"
            min="1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Total units of this token
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
            disabled={isSubmitting || !metadata || !amount}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
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
