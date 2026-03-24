"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useRole } from "@/lib/hooks/useRole";
import { registerActor } from "@/lib/solana/instructions";

type ActorRole =
  | "producer"
  | "processor"
  | "transporter"
  | "exporter"
  | "authority";

interface RoleOption {
  value: ActorRole;
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
    description: "Creates cacao batches at the farm of origin.",
    capabilities: [
      "Create Batch",
      "Register Harvest",
      "Set Origin Information",
    ],
  },
  {
    value: "processor",
    label: "Processor",
    emoji: "🏭",
    description: "Processes cacao through fermentation and drying.",
    capabilities: [
      "Register Fermentation",
      "Register Drying",
      "Update Batch Status",
    ],
  },
  {
    value: "transporter",
    label: "Transporter",
    emoji: "🚚",
    description: "Moves cacao lots between locations.",
    capabilities: [
      "Register Transport",
      "Register Storage",
      "Update Logistics Status",
    ],
  },
  {
    value: "exporter",
    label: "Exporter",
    emoji: "📦",
    description: "Handles final export operations.",
    capabilities: [
      "Register Export",
      "Update Export Status",
      "Prepare Final Delivery",
    ],
  },
  {
    value: "authority",
    label: "Authority",
    emoji: "🛡️",
    description: "Validates actors and issues certificates.",
    capabilities: [
      "Approve Actors",
      "Issue Certificates",
      "Revoke Certificates",
    ],
  },
];

export default function RegisterRolePage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { hasPendingRequest, loading } = useRole();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedRole, setSelectedRole] = useState<ActorRole | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!publicKey || !program || !selectedRole) return;

    if (!name.trim() || !location.trim()) {
      setError("Please complete name and location before submitting.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await registerActor(
        program,
        publicKey,
        name.trim(),
        selectedRole,
        location.trim()
      );

      setSuccess(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to register actor"
      );
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
          <h2 className="text-2xl font-black text-black mb-2">
            Connect Your Wallet
          </h2>
          <p className="text-gray-700 font-medium">
            Please connect your Solana wallet to register as an actor in the cacao
            traceability network.
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
          <h2 className="text-2xl font-black text-black mb-2">
            Request Pending
          </h2>
          <p className="text-gray-700 font-medium mb-6">
            Your actor registration is pending approval. The authority will review
            and validate it soon.
          </p>
          <p className="text-sm text-gray-600">
            You will be able to access the dashboard once your actor role is
            approved.
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
          <h2 className="text-2xl font-black text-black mb-2">
            Registration Submitted!
          </h2>
          <p className="text-gray-700 font-medium mb-6">
            Your actor registration was submitted successfully. The authority will
            review and validate it shortly.
          </p>
          <p className="text-sm text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🍫</div>
          <h1 className="text-5xl font-black text-black mb-4">
            Register as a Cacao Supply Chain Actor
          </h1>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Join the cacao traceability network and choose your role in the chain,
            from farm to export.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto mb-10 bg-white border-4 border-black rounded-lg p-8">
          <h2 className="text-2xl font-black text-black mb-6">
            Actor Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-black text-black mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Example: Finca El Roble"
                className="w-full border-4 border-black rounded-lg px-4 py-3 text-black font-medium outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-black mb-2">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Example: Tumaco, Colombia"
                className="w-full border-4 border-black rounded-lg px-4 py-3 text-black font-medium outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {ROLES.map((role) => {
            const isSelected = selectedRole === role.value;

            return (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                disabled={isSubmitting}
                className={`bg-white border-4 rounded-lg p-6 transition transform text-left w-full ${
                  isSelected
                    ? "border-black shadow-2xl -translate-y-1"
                    : "border-gray-300 hover:border-black hover:shadow-xl hover:-translate-y-1"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="text-6xl mb-4">{role.emoji}</div>
                <h3 className="text-2xl font-black text-black mb-2">
                  {role.label}
                </h3>
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
              </button>
            );
          })}
        </div>

        <div className="max-w-md mx-auto mb-16">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedRole || !name.trim() || !location.trim()}
            className="w-full bg-black text-white border-4 border-black rounded-lg px-6 py-4 font-black text-lg hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Actor Registration"}
          </button>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6 text-center">
            What Happens Next? 🔄
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-3">1️⃣</div>
              <h3 className="text-xl font-black mb-2">Submit Registration</h3>
              <p className="text-gray-300 font-medium">
                You register as an actor in the cacao traceability network.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">2️⃣</div>
              <h3 className="text-xl font-black mb-2">Authority Review</h3>
              <p className="text-gray-300 font-medium">
                The authority validates your role and activates your account.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">3️⃣</div>
              <h3 className="text-xl font-black mb-2">Start Tracking Cacao</h3>
              <p className="text-gray-300 font-medium">
                Once approved, you can create, process, transport, certify, or
                export batches depending on your role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}