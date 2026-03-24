"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function TransporterDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "transporter") {
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
          <div className="text-6xl mb-4">🚚</div>
          <h1 className="text-5xl font-black mb-4">Transporter Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Manage cacao logistics by recording transport and storage events,
            and updating batch movement through the supply chain.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Role</p>
              <p className="text-4xl font-black text-black">Transporter</p>
              <p className="text-xs text-gray-500 mt-3">
                Logistics and storage actor
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Logistics Rights
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Transport and storage enabled
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
            Transporter Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push("/dashboard/transporter/record-transport")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🚚
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Transport
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register the movement of cacao batches between locations.
              </p>
              <p className="text-sm font-semibold text-black">
                Register transport →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/transporter/record-storage")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🏬
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Storage
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register storage milestones for cacao batches in transit.
              </p>
              <p className="text-sm font-semibold text-black">
                Register storage →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/transporter/update-status")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🔄
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Update Batch Status
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Move batches from dried to in-transit and from in-transit to stored.
              </p>
              <p className="text-sm font-semibold text-black">
                Update status →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/transporter/my-batches")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📋
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Managed Batches
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Inspect the batches currently under your logistics stage.
              </p>
              <p className="text-sm font-semibold text-black">
                View batches →
              </p>
            </button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">
            Logistics Workflow for Cacao 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">Receive Processed Batch</h3>
              <p className="text-gray-300 font-medium text-sm">
                Continue the lifecycle of dried cacao batches prepared for movement.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Move and Store</h3>
              <p className="text-gray-300 font-medium text-sm">
                Record transport and storage events in the blockchain timeline.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Prepare for Certification</h3>
              <p className="text-gray-300 font-medium text-sm">
                Once stored, the batch is ready for authority certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}