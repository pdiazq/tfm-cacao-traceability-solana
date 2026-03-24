"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function ProducerDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "producer") {
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
          <div className="text-6xl mb-4">🌱</div>
          <h1 className="text-5xl font-black mb-4">Producer Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Create cacao batches at origin, register harvest events, and start the
            traceability journey from farm to export.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Role
              </p>
              <p className="text-4xl font-black text-black">Producer</p>
              <p className="text-xs text-gray-500 mt-3">
                Farm / origin actor
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Batch Creation
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Allowed by your role
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
            Producer Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push("/dashboard/producer/create-batch")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🍫
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Create Batch
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Create a new cacao batch with origin, quantity, unit, and harvest
                date.
              </p>
              <p className="text-sm font-semibold text-black">
                Start a new batch →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/producer/record-harvest")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🌾
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Harvest
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register the harvest event for a cacao batch at the production
                stage.
              </p>
              <p className="text-sm font-semibold text-black">
                Register event →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/producer/update-status")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🔄
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Mark as Harvested
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Move a batch from created to harvested after registering the harvest event.
              </p>
              <p className="text-sm font-semibold text-black">
                Update status →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/producer/my-batches")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📋
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                My Batches
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                View the cacao batches you created and inspect their current
                lifecycle status.
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
                Review the cacao traceability flow and understand how events and
                certificates work on-chain.
              </p>
              <p className="text-sm font-semibold text-black">
                Read docs →
              </p>
            </button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">
            Producer Workflow for Cacao 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">Create Batch</h3>
              <p className="text-gray-300 font-medium text-sm">
                Create a cacao batch with farm origin, quantity, and harvest date.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Record Harvest</h3>
              <p className="text-gray-300 font-medium text-sm">
                Register the harvest event as the first on-chain milestone in the
                traceability timeline.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Mark as Harvested</h3>
              <p className="text-gray-300 font-medium text-sm">
                Update the batch status so it can move into the processing stage
                of the cacao supply chain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}