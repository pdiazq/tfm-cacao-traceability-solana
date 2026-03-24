"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function ExporterDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "exporter") {
      router.push("/dashboard");
    }
  }, [role, roleLoading, router]);

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
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-5xl font-black mb-4">Exporter Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Finalize the cacao lifecycle by registering export operations and
            moving certified batches toward external delivery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Role</p>
              <p className="text-4xl font-black text-black">Exporter</p>
              <p className="text-xs text-gray-500 mt-3">
                Final outbound actor
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Export Rights
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Export operations enabled
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Network Status
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Connected and validated
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">
            Exporter Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push("/dashboard/exporter/record-export")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🌍
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Export
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register export events for certified cacao batches.
              </p>
              <p className="text-sm font-semibold text-black">
                Register export →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/exporter/update-status")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🔄
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Update Batch Status
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Move certified batches to exported and final delivery states.
              </p>
              <p className="text-sm font-semibold text-black">
                Update status →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/exporter/my-batches")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📋
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Export Batches
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Inspect the cacao batches ready for export or already exported.
              </p>
              <p className="text-sm font-semibold text-black">
                View batches →
              </p>
            </button>

            <button
              onClick={() => router.push("/")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📚
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Learn More
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Review the final stages of cacao traceability and export compliance.
              </p>
              <p className="text-sm font-semibold text-black">
                Read docs →
              </p>
            </button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">
            Export Workflow for Cacao 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">Receive Certified Batch</h3>
              <p className="text-gray-300 font-medium text-sm">
                Work with batches that have completed logistics and certification.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Register Export</h3>
              <p className="text-gray-300 font-medium text-sm">
                Add export events and move the batch into its outbound phase.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Finalize Delivery</h3>
              <p className="text-gray-300 font-medium text-sm">
                Complete the final on-chain state transition for the cacao batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}