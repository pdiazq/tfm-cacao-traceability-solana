"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { createBatch } from "@/lib/solana/instructions";
import { getProgramConfigPDA } from "@/lib/utils/pda";

export default function CreateBatchPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [product, setProduct] = useState("Cacao fino de aroma");
  const [origin, setOrigin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [harvestDate, setHarvestDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!publicKey || !program) return;
    if (!product || !origin || !quantity || !unit || !harvestDate) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const quantityBig = BigInt(quantity);
      if (quantityBig <= 0n) {
        throw new Error("Quantity must be greater than zero");
      }

      const harvestTimestamp = Math.floor(new Date(harvestDate).getTime() / 1000);
      if (!Number.isFinite(harvestTimestamp) || harvestTimestamp <= 0) {
        throw new Error("Invalid harvest date");
      }

      const [programConfigPda] = getProgramConfigPDA();
      const config = await program.account.programConfig.fetch(programConfigPda);
      const batchId = BigInt(config.nextBatchId.toString());

      await createBatch(
        program,
        publicKey,
        batchId,
        product,
        origin,
        quantityBig,
        unit,
        BigInt(harvestTimestamp)
      );

      router.push("/dashboard/producer");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create batch");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">🍫</div>
          <h1 className="text-4xl font-black mb-2">Create New Cacao Batch</h1>
          <p className="text-gray-300 font-medium">
            Register a new cacao batch at origin and begin its blockchain traceability lifecycle.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-4 border-black rounded-lg p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-black text-black mb-3"
            >
              🍫 Product
            </label>
            <input
              id="product"
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="e.g., Cacao fino de aroma"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-black text-black mb-3"
            >
              📍 Origin
            </label>
            <input
              id="origin"
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="e.g., Finca El Roble, Tumaco, Colombia"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-black text-black mb-3"
            >
              🔢 Quantity
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g., 1000"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="unit"
              className="block text-sm font-black text-black mb-3"
            >
              ⚖️ Unit
            </label>
            <input
              id="unit"
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="e.g., kg"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="harvestDate"
              className="block text-sm font-black text-black mb-3"
            >
              📅 Harvest Date
            </label>
            <input
              id="harvestDate"
              type="date"
              value={harvestDate}
              onChange={(e) => setHarvestDate(e.target.value)}
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
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
                !product ||
                !origin ||
                !quantity ||
                !unit ||
                !harvestDate
              }
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-1"
            >
              {isSubmitting ? "⏳ Creating..." : "✓ Create Batch"}
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