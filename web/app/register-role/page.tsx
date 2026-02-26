"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useRole } from "@/lib/hooks/useRole";
import { registerRole } from "@/lib/solana/instructions";
import { Traza } from "@/types/traza";

type Role = Traza["types"][3]["type"]["variants"][number]["name"];

interface RoleOption {
  value: Role;
  label: string;
  emoji: string;
  description: string;
  capabilities: string[];
}

const ROLES: RoleOption[] = [
  {
    value: "producer",
    label: "Producer",
    emoji: "🌱",
    description: "Create and initiate product tokens",
    capabilities: ["Create Tokens", "Set Metadata", "Initiate Transfers"],
  },
  {
    value: "factory",
    label: "Factory",
    emoji: "🏭",
    description: "Process and combine products",
    capabilities: ["Receive Tokens", "Combine Inputs", "Create New Tokens"],
  },
  {
    value: "retailer",
    label: "Retailer",
    emoji: "🏪",
    description: "Distribute products to consumers",
    capabilities: ["Accept Transfers", "View History", "Ship Products"],
  },
  {
    value: "consumer",
    label: "Consumer",
    emoji: "👥",
    description: "Verify product authenticity",
    capabilities: ["Track Products", "Verify Origin", "Full History"],
  },
];

export default function RegisterRolePage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { hasPendingRequest, loading } = useRole();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (role: Role) => {
    if (!publicKey || !program) return;
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await registerRole(program, publicKey, role);
      setSuccess(true);
      // Stay on page after submission to show success state
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register role");
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!publicKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🔗</div>
          <h2 className="text-2xl font-black text-black mb-2">Connect Your Wallet</h2>
          <p className="text-gray-700 font-medium">
            Please connect your Solana wallet to register for a role.
          </p>
        </div>
      </div>
    );
  }

  if (hasPendingRequest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-black text-black mb-2">Request Pending</h2>
          <p className="text-gray-700 font-medium mb-6">
            Your role request is pending approval. The authority will review and validate your request soon.
          </p>
          <p className="text-sm text-gray-600">
            You'll be able to access the dashboard once your role is approved.
          </p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">✨</div>
          <h2 className="text-2xl font-black text-black mb-2">Request Submitted!</h2>
          <p className="text-gray-700 font-medium mb-6">
            Your role request has been submitted successfully. The authority will review and validate it shortly.
          </p>
          <p className="text-sm text-gray-600">
            Redirecting to dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-5xl font-black text-black mb-4">Choose Your Role</h1>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Select your position in the supply chain. Each role has unique capabilities and responsibilities.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {/* Role Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ROLES.map((role) => (
            <button
              key={role.value}
              onClick={() => handleSubmit(role.value)}
              disabled={isSubmitting}
              className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed text-left w-full"
            >
              <div className="text-6xl mb-4">{role.emoji}</div>
              <h3 className="text-2xl font-black text-black mb-2">{role.label}</h3>
              <p className="text-gray-700 font-semibold mb-4 text-sm">
                {role.description}
              </p>
              <div className="border-t-4 border-black pt-4 space-y-1">
                {role.capabilities.map((cap, idx) => (
                  <p key={idx} className="text-xs text-gray-600 font-semibold">
                    ✓ {cap}
                  </p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t-4 border-black">
                <p className="text-sm font-black text-black">
                  {isSubmitting ? "Submitting..." : "Select Role"}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* What Happens Next Section */}
        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6 text-center">What Happens Next? 🔄</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">1️⃣</div>
              <h3 className="text-xl font-black mb-2">Submit Request</h3>
              <p className="text-gray-300 font-medium">
                You'll submit a request to join the network in your chosen role.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">2️⃣</div>
              <h3 className="text-xl font-black mb-2">Authority Review</h3>
              <p className="text-gray-300 font-medium">
                The network authority will review and validate your request.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">3️⃣</div>
              <h3 className="text-xl font-black mb-2">Get Started</h3>
              <p className="text-gray-300 font-medium">
                Once approved, you'll have full access to your role's features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
