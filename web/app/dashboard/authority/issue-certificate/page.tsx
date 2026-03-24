"use client";

import { useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { issueCertificate } from "@/lib/solana/instructions";
import { useRole } from "@/lib/hooks/useRole";
import { getProgramConfigPDA } from "@/lib/utils/pda";

export default function IssueCertificatePage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { role, isAuthority, loading: roleLoading } = useRole();

  const [creatorWallet, setCreatorWallet] = useState("");
  const [batchId, setBatchId] = useState("");
  const [certificateType, setCertificateType] = useState("Sanitary Certificate");
  const [issuer, setIssuer] = useState("ICA Colombia");
  const [documentHash, setDocumentHash] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
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
            Only the authority can issue certificates.
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
      if (!creatorWallet.trim()) throw new Error("Creator wallet is required");
      if (!batchId.trim()) throw new Error("Batch ID is required");
      if (!certificateType.trim()) throw new Error("Certificate type is required");
      if (!issuer.trim()) throw new Error("Issuer is required");
      if (!documentHash.trim()) throw new Error("Document hash is required");
      if (!expiryDate) throw new Error("Expiry date is required");

      const creatorPublicKey = new PublicKey(creatorWallet.trim());

      const batchIdBig = BigInt(batchId);
      if (batchIdBig <= 0n) {
        throw new Error("Batch ID must be greater than zero");
      }

      const expiryTimestamp = Math.floor(new Date(expiryDate).getTime() / 1000);
      if (!Number.isFinite(expiryTimestamp) || expiryTimestamp <= 0) {
        throw new Error("Invalid expiry date");
      }

      const [programConfigPda] = getProgramConfigPDA();
      const config = await program.account.programConfig.fetch(programConfigPda);
      const certificateId = BigInt(config.nextCertificateId.toString());

      const tx = await issueCertificate(
        program,
        publicKey,
        creatorPublicKey,
        batchIdBig,
        certificateId,
        certificateType.trim(),
        issuer.trim(),
        documentHash.trim(),
        BigInt(expiryTimestamp)
      );

      setSuccessTx(tx);

      setTimeout(() => {
        router.push("/dashboard/authority");
      }, 1800);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to issue certificate"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">📜</div>
          <h1 className="text-4xl font-black mb-2">Issue Certificate</h1>
          <p className="text-gray-300 font-medium">
            Emit a certificate for a cacao batch from the authority account.
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
              htmlFor="creatorWallet"
              className="block text-sm font-black text-black mb-3"
            >
              👤 Creator Wallet
            </label>
            <input
              id="creatorWallet"
              type="text"
              value={creatorWallet}
              onChange={(e) => setCreatorWallet(e.target.value)}
              placeholder="Producer wallet that created the batch"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white font-mono text-sm"
              required
            />
          </div>

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
              htmlFor="certificateType"
              className="block text-sm font-black text-black mb-3"
            >
              🏷️ Certificate Type
            </label>
            <input
              id="certificateType"
              type="text"
              value={certificateType}
              onChange={(e) => setCertificateType(e.target.value)}
              placeholder="e.g. Sanitary Certificate"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="issuer"
              className="block text-sm font-black text-black mb-3"
            >
              🏛️ Issuer
            </label>
            <input
              id="issuer"
              type="text"
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              placeholder="e.g. ICA Colombia"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="documentHash"
              className="block text-sm font-black text-black mb-3"
            >
              🔐 Document Hash
            </label>
            <input
              id="documentHash"
              type="text"
              value={documentHash}
              onChange={(e) => setDocumentHash(e.target.value)}
              placeholder="e.g. Qm... or sha256 hash"
              className="w-full px-4 py-3 text-black bg-gray-50 border-4 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white font-mono text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-black text-black mb-3"
            >
              📅 Expiry Date
            </label>
            <input
              id="expiryDate"
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
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
              ✅ Certificate issued. Tx:{" "}
              <span className="font-mono text-sm break-all">{successTx}</span>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !creatorWallet ||
                !batchId ||
                !certificateType ||
                !issuer ||
                !documentHash ||
                !expiryDate
              }
              className="flex-1 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition transform hover:-translate-y-1"
            >
              {isSubmitting ? "⏳ Issuing..." : "✓ Issue Certificate"}
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