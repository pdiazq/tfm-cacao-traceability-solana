"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function AuthorityDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, isAuthority, loading: roleLoading } = useRole();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && !isAuthority && role !== "authority") {
      router.push("/dashboard");
    }
  }, [role, isAuthority, roleLoading, router]);

  if (!isClient || roleLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading your dashboard...</p>
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

  return (
    <div>
      <div className="bg-black text-white py-16 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-5xl font-black mb-4">Authority Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Manage the cacao traceability network by validating actors, issuing
            certificates, revoking certificates, and supervising the integrity of
            the supply chain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Role</p>
              <p className="text-4xl font-black text-black">Authority</p>
              <p className="text-xs text-gray-500 mt-3">
                Network governance actor
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Validation Rights
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Actor and certificate management enabled
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Network Status
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Connected and authorized
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">
            Authority Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push("/dashboard/authority/validate-actors")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                ✅
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Validate Actors
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Review and approve pending actor registrations for producers,
                processors, transporters, exporters, and authorities.
              </p>
              <p className="text-sm font-semibold text-black">
                Review registrations →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/authority/issue-certificate")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📜
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Issue Certificate
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Issue sanitary, origin, quality, or sustainability certificates
                for cacao batches.
              </p>
              <p className="text-sm font-semibold text-black">
                Issue certificate →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/authority/revoke-certificate")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                ❌
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Revoke Certificate
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Revoke certificates that are invalid, expired, or no longer
                compliant.
              </p>
              <p className="text-sm font-semibold text-black">
                Revoke certificate →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/authority/certify-batches")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🏷️
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Certify Batch Status
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Move stored cacao batches into certified status when requirements
                are satisfied.
              </p>
              <p className="text-sm font-semibold text-black">
                Certify batches →
              </p>
            </button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">
            Authority Workflow for Cacao 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">Validate Actors</h3>
              <p className="text-gray-300 font-medium text-sm">
                Review actor registrations and activate approved participants in
                the network.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Issue Certificates</h3>
              <p className="text-gray-300 font-medium text-sm">
                Grant official certificates that support authenticity, compliance,
                and export readiness.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Protect Integrity</h3>
              <p className="text-gray-300 font-medium text-sm">
                Revoke invalid certifications and supervise the integrity of the
                traceability lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}