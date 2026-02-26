"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { useTokenBalances } from "@/lib/hooks/useTokenBalances";

export default function ConsumerDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const { balances, loading: balancesLoading } = useTokenBalances(publicKey!);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "consumer") {
      router.push("/dashboard");
    }
  }, [role, roleLoading, router]);

  if (!isClient || roleLoading || balancesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!publicKey) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">🔗</div>
          <p className="text-lg text-gray-600">Please connect your wallet</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-6xl mb-4">👥</div>
          <h1 className="text-5xl font-black mb-4">Consumer Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Verify product authenticity and trace the complete journey from producer to your hands.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Verified Products */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Verified Products</p>
              <p className="text-4xl font-black text-black">{balances.length}</p>
              <p className="text-xs text-gray-500 mt-3">With full traceability</p>
            </div>

            {/* Trust Level */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Trust Score</p>
              <p className="text-4xl font-black text-black">100%</p>
              <p className="text-xs text-gray-500 mt-3">Fully transparent</p>
            </div>

            {/* Network Status */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Network Status</p>
              <p className="text-4xl font-black text-black">✓</p>
              <p className="text-xs text-gray-500 mt-3">Connected and verified</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* View Products */}
            <button
              onClick={() => router.push("/dashboard/consumer/my-tokens")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📦</div>
              <h3 className="text-2xl font-black text-black mb-3">My Products</h3>
              <p className="text-gray-700 font-medium mb-4">
                View all products you own with complete supply chain history.
              </p>
              <p className="text-sm font-semibold text-black">View Products ({balances.length}) →</p>
            </button>

            {/* Verify Product */}
            <button
              onClick={() => router.push("/dashboard/consumer/my-tokens")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">✅</div>
              <h3 className="text-2xl font-black text-black mb-3">Verify Authenticity</h3>
              <p className="text-gray-700 font-medium mb-4">
                Check the complete history and authenticity of any product.
              </p>
              <p className="text-sm font-semibold text-black">Verify Products →</p>
            </button>

            {/* Trace Journey */}
            <button
              onClick={() => router.push("/dashboard/consumer/my-tokens")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🗺️</div>
              <h3 className="text-2xl font-black text-black mb-3">Trace Journey</h3>
              <p className="text-gray-700 font-medium mb-4">
                Follow your product from producer through the entire supply chain.
              </p>
              <p className="text-sm font-semibold text-black">View History →</p>
            </button>

            {/* Learn More */}
            <button
              onClick={() => router.push("/")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📚</div>
              <h3 className="text-2xl font-black text-black mb-3">Learn More</h3>
              <p className="text-gray-700 font-medium mb-4">
                Understand product verification and supply chain transparency.
              </p>
              <p className="text-sm font-semibold text-black">Read Docs →</p>
            </button>
          </div>
        </div>

        {/* Welcome Guide */}
        <div className="bg-black text-white rounded-lg border-4 border-black p-12">
          <h2 className="text-3xl font-black mb-6">Getting Started Guide 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-black mb-2">View Your Products</h3>
              <p className="text-gray-300 font-medium text-sm">
                Browse all products in your possession with their metadata.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Verify Origin</h3>
              <p className="text-gray-300 font-medium text-sm">
                Verify the authenticity and confirm the producer of any item.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Track Entire Journey</h3>
              <p className="text-gray-300 font-medium text-sm">
                See the complete path from production to distribution to your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
