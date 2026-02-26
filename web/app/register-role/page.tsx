"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useRole } from "@/lib/hooks/useRole";
import { registerRole } from "@/lib/solana/instructions";
import { Traza } from "@/types/traza";

type Role = Traza["types"][3]["type"]["variants"][number]["name"];

const ROLES: Array<{ value: Role; label: string }> = [
  { value: "producer", label: "Producer" },
  { value: "factory", label: "Factory" },
  { value: "retailer", label: "Retailer" },
  { value: "consumer", label: "Consumer" },
];

export default function RegisterRolePage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { hasPendingRequest, loading } = useRole();

  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!publicKey || !program || !selectedRole) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await registerRole(program, publicKey, selectedRole);
      // Redirect to dashboard after successful registration
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to register role");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!publicKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Please connect your wallet</div>
      </div>
    );
  }

  if (hasPendingRequest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md">
          <h2 className="text-lg font-semibold text-yellow-900 mb-2">
            Pending Role Request
          </h2>
          <p className="text-yellow-800">
            Your role request is pending approval. Please wait for the authority to
            validate your request.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Role</h1>
        <p className="text-gray-600 mb-8">
          Select the role you want to register as
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Role
            </label>
            <select
              value={selectedRole || ""}
              onChange={(e) => setSelectedRole(e.target.value as Role)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role...</option>
              {ROLES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!selectedRole || isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
          >
            {isSubmitting ? "Submitting..." : "Request Role"}
          </button>
        </form>
      </div>
    </div>
  );
}
