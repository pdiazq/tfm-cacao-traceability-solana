"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-5xl font-black mb-4">Initialize Program</h1>
          <p className="text-xl text-gray-300">
            Set up the Solana Trazabilidad program. This critical step can only be done once.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Authorization Card */}
        <div className="bg-white border-4 border-black rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h2 className="text-2xl font-black text-black mb-2">Authority Required</h2>
              <p className="text-gray-700 font-medium mb-4">
                Only the program authority can initialize the program. Your wallet will be registered as the program authority.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-semibold">✓ Full control over role validation</p>
                <p className="text-sm text-gray-600 font-semibold">✓ Ability to manage all users</p>
                <p className="text-sm text-gray-600 font-semibold">✓ Permanent authority status</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Gets Initialized */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-black mb-8">What Gets Initialized 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-xl font-black text-black mb-2">Program Authority</h3>
              <p className="text-gray-700 font-medium text-sm">
                Your wallet becomes the program authority with control over all operations.
              </p>
            </div>
            <div className="bg-white border-4 border-black rounded-lg p-6">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-xl font-black text-black mb-2">Role System</h3>
              <p className="text-gray-700 font-medium text-sm">
                The role management system is activated and ready to validate users.
              </p>
            </div>
            <div className="bg-white border-4 border-black rounded-lg p-6">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-xl font-black text-black mb-2">Token System</h3>
              <p className="text-gray-700 font-medium text-sm">
                The supply chain token traceability system is initialized and operational.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 font-semibold">
            Error: {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border-4 border-green-200 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-5xl">✨</div>
              <div>
                <h3 className="text-2xl font-black text-green-800 mb-2">
                  Program Initialized Successfully!
                </h3>
                <p className="text-green-700 font-medium mb-4">
                  The Solana Trazabilidad program is now ready to use. You can now validate user roles.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={handleInitialize}
            disabled={isInitializing || success}
            className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-4 px-8 rounded-lg transition transform hover:-translate-y-2 text-lg flex items-center gap-2"
          >
            {isInitializing ? (
              <>⏳ Initializing...</>
            ) : success ? (
              <>✓ Initialized</>
            ) : (
              <>🚀 Initialize Program</>
            )}
          </button>

          <Link
            href="/dashboard/authority/validate-roles"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-black py-4 px-8 rounded-lg transition transform hover:-translate-y-2 text-lg"
          >
            ✓ Validate Roles →
          </Link>
        </div>

        {/* Next Steps */}
        {success && (
          <div className="bg-black text-white rounded-lg border-4 border-black p-12 mt-12">
            <h2 className="text-3xl font-black mb-6">Next Steps 📋</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-black mb-3">1. Validate User Roles</h3>
                <p className="text-gray-300 font-medium">
                  Go to the Validate Roles page to approve users who have requested access to the network.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black mb-3">2. Monitor Activity</h3>
                <p className="text-gray-300 font-medium">
                  Keep track of all network activity and ensure compliance with supply chain standards.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
