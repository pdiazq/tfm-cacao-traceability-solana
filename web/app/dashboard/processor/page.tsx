"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function ProcessorDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "processor") {
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
          <div className="text-6xl mb-4">🏭</div>
          <h1 className="text-5xl font-black mb-4">Processor Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Process cacao batches through fermentation and drying, and move them
            forward in the traceability lifecycle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Role</p>
              <p className="text-4xl font-black text-black">Processor</p>
              <p className="text-xs text-gray-500 mt-3">
                Fermentation and drying actor
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Processing Rights
              </p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">
                Fermentation and drying enabled
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
            Processor Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push("/dashboard/processor/my-batches")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📋
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                My Batches
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Review harvested, fermented, and dried cacao batches available in
                the processing workflow.
              </p>
              <p className="text-sm font-semibold text-black">
                View batches →
              </p>
            </button>

            <button
              onClick={() =>
                router.push("/dashboard/processor/record-fermentation")
              }
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🧪
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Fermentation
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register a fermentation event for a cacao batch in the processing
                stage.
              </p>
              <p className="text-sm font-semibold text-black">
                Register event →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/processor/record-drying")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                ☀️
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Record Drying
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Register a drying event after fermentation is complete.
              </p>
              <p className="text-sm font-semibold text-black">
                Register drying →
              </p>
            </button>

            <button
              onClick={() => router.push("/dashboard/processor/update-status")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                🔄
              </div>
              <h3 className="text-2xl font-black text-black mb-3">
                Update Status
              </h3>
              <p className="text-gray-700 font-medium mb-4">
                Move a batch from harvested to fermented, or from fermented to
                dried.
              </p>
              <p className="text-sm font-semibold text-black">
                Update status →
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
                Review the cacao processing flow and understand how traceability
                evolves after harvest.
              </p>
              <p className="text-sm font-semibold text-black">Read docs →</p>
            </button>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">
            Processor Workflow for Cacao 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">Receive Harvested Batch</h3>
              <p className="text-gray-300 font-medium text-sm">
                Start working with a batch once the producer has completed harvest
                registration and status update.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Ferment the Cacao</h3>
              <p className="text-gray-300 font-medium text-sm">
                Record fermentation details and move the batch into the fermented
                state.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Dry and Advance</h3>
              <p className="text-gray-300 font-medium text-sm">
                Register drying and update the batch so it can continue into
                logistics and certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}