"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { revokeCertificate } from "@/lib/solana/instructions";
import { useRole } from "@/lib/hooks/useRole";

export default function RevokeCertificatePage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { role, isAuthority, loading: roleLoading } = useRole();

  const [batchId, setBatchId] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successTx, setSuccessTx] = useState<string | null>(null);

  if (roleLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!publicKey) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🔗</div>
          <p className="text-lg text-gray-600">Please connect your wallet</p>
        </div>
      </div>
    );
  }

  if (!isAuthority && role !== "authority") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">⛔</div>
          <h2 className="text-2xl font-black text-black mb-2">Access denied</h2>
          <p className="text-gray-700 font-medium">
            Only the authority can revoke certificates.
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!program || !publicKey) return;

    setIsSubmitting(true);
    setError(null);
    setSuccessTx(null);

    try {
      if (!batchId.trim()) throw new Error("Batch ID is required");
      if (!certificateId.trim()) throw new Error("Certificate ID is required");

      const batchIdBig = BigInt(batchId);
      const certificateIdBig = BigInt(certificateId);

      if (batchIdBig <= 0n) {
        throw new Error("Batch ID must be greater than zero");
      }
      if (certificateIdBig <= 0n) {
        throw new Error("Certificate ID must be greater than zero");
      }

      const tx = await revokeCertificate(
        program,
        publicKey,
        batchIdBig,
        certificateIdBig
      );

      setSuccessTx(tx);

      setTimeout(() => {
        router.push("/dashboard/authority");
      }, 1800);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to revoke certificate"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">❌</div>
          <h1 className="text-4xl font-black mb-2">Revoke Certificate</h1>
          <p className="text-gray-300 font-medium">
            Revoke an issued certificate for a cacao batch from the authority account.
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
              placeholder="e.g. 1"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="certificateId"
              className="block text-sm font-black text-black mb-3"
            >
              📜 Certificate ID
            </label>
            <input
              id="certificateId"
              type="number"
              min="1"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder="e.g. 1"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg font-semibold">
              ⚠️ {error}
            </div>
          )}

          {successTx && (
            <div className="bg-green-50 border-4 border-green-200 text-green-800 px-6 py-4 rounded-lg font-semibold">
              ✅ Certificate revoked. Tx:{" "}
              <span className="font-mono text-sm break-all">{successTx}</span>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !batchId || !certificateId}
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-1"
            >
              {isSubmitting ? "⏳ Revoking..." : "✓ Revoke Certificate"}
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