"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { initializeProgram } from "@/lib/solana/instructions";

export default function InitializeAuthorityPage() {
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInitialize = async () => {
    if (!publicKey || !program) return;

    setIsInitializing(true);
    setError(null);
    setSuccess(false);

    try {
      const tx = await initializeProgram(program, publicKey);
      setSuccess(true);
      console.log("Program initialized:", tx);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to initialize");
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Initialize Program</h1>
      <p className="text-gray-600 mb-8">
        Initialize the Solana Trazabilidad program. This can only be done once.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Authority Only</h2>
        <p className="text-blue-800">
          Only the program authority can initialize the program. Your wallet will be
          set as the authority.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
          Program initialized successfully!
        </div>
      )}

      <button
        onClick={handleInitialize}
        disabled={isInitializing || success}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        {isInitializing ? "Initializing..." : "Initialize Program"}
      </button>
    </div>
  );
}
