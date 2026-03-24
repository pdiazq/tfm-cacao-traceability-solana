"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { recordEvent } from "@/lib/solana/instructions";
import { getProgramConfigPDA } from "@/lib/utils/pda";

export default function RecordHarvestPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [batchId, setBatchId] = useState("");
  const [location, setLocation] = useState("");
  const [metadata, setMetadata] = useState(
    '{"temperature":"28C","humidity":"70%","notes":"Manual harvest"}'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!publicKey || !program) return;
    if (!batchId || !location || !metadata) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const batchIdBig = BigInt(batchId);
      if (batchIdBig <= 0n) {
        throw new Error("Batch ID must be greater than zero");
      }

      const [programConfigPda] = getProgramConfigPDA();
      const config = await program.account.programConfig.fetch(programConfigPda);
      const eventId = BigInt(config.nextEventId.toString());

      await recordEvent(
        program,
        publicKey,
        publicKey,
        batchIdBig,
        eventId,
        "Harvest",
        location,
        metadata
      );

      router.push("/dashboard/producer");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to record harvest");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">🌾</div>
          <h1 className="text-4xl font-black mb-2">Record Harvest Event</h1>
          <p className="text-gray-300 font-medium">
            Register the harvest milestone for a cacao batch on-chain.
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
              htmlFor="batchId"
              className="block text-sm font-black text-black mb-3"
            >
              🆔 Batch ID
            </label>
            <input
              id="batchId"
              type="number"
              min="1"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              placeholder="e.g., 1"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-black text-black mb-3"
            >
              📍 Harvest Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Tumaco, Colombia"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="metadata"
              className="block text-sm font-black text-black mb-3"
            >
              📝 Metadata (JSON)
            </label>
            <textarea
              id="metadata"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
              rows={6}
              placeholder='{"temperature":"28C","humidity":"70%","notes":"Manual harvest"}'
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
            <p className="text-xs text-gray-600 font-semibold mt-2">
              Suggested fields: temperature, humidity, notes, weight, quality.
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
              disabled={isSubmitting || !batchId || !location || !metadata}
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-1"
            >
              {isSubmitting ? "⏳ Recording..." : "✓ Record Harvest"}
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