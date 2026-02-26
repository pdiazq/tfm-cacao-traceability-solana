"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { useTokenBalances } from "@/lib/hooks/useTokenBalances";

export default function ProducerDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const { balances, loading: balancesLoading } = useTokenBalances(publicKey!);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "producer") {
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
          <div className="text-6xl mb-4">🌱</div>
          <h1 className="text-5xl font-black mb-4">Producer Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Create and manage product tokens in the supply chain. Track your products from creation through distribution.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-black mb-8">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tokens Owned */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Tokens Created</p>
              <p className="text-4xl font-black text-black">{balances.length}</p>
              <p className="text-xs text-gray-500 mt-3">Active product tokens</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Ready to Create</p>
              <p className="text-4xl font-black text-black">∞</p>
              <p className="text-xs text-gray-500 mt-3">Unlimited product tokens</p>
            </div>

            {/* Total Supply */}
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
            {/* Create Token */}
            <button
              onClick={() => router.push("/dashboard/producer/create-token")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📦</div>
              <h3 className="text-2xl font-black text-black mb-3">Create Token</h3>
              <p className="text-gray-700 font-medium mb-4">
                Create a new product token and initialize it in the supply chain.
              </p>
              <p className="text-sm font-semibold text-black">Start Creating →</p>
            </button>

            {/* View Tokens */}
            <button
              onClick={() => router.push("/dashboard/producer/my-tokens")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📋</div>
              <h3 className="text-2xl font-black text-black mb-3">My Tokens</h3>
              <p className="text-gray-700 font-medium mb-4">
                View all your created tokens and manage transfers.
              </p>
              <p className="text-sm font-semibold text-black">View Tokens ({balances.length}) →</p>
            </button>

            {/* Transfers */}
            <button
              onClick={() => router.push("/dashboard/producer/transfers")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔄</div>
              <h3 className="text-2xl font-black text-black mb-3">Manage Transfers</h3>
              <p className="text-gray-700 font-medium mb-4">
                Initiate and track product transfers to factories.
              </p>
              <p className="text-sm font-semibold text-black">View Transfers →</p>
            </button>

            {/* Learn More */}
            <button
              onClick={() => router.push("/")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📚</div>
              <h3 className="text-2xl font-black text-black mb-3">Learn More</h3>
              <p className="text-gray-700 font-medium mb-4">
                Understand the supply chain and how to use all features.
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
              <h3 className="text-lg font-black mb-2">Create Your First Token</h3>
              <p className="text-gray-300 font-medium text-sm">
                Click "Create Token" above to initialize your first product token with metadata.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Initiate Transfers</h3>
              <p className="text-gray-300 font-medium text-sm">
                Send your tokens to factories to begin the supply chain journey.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Track Everything</h3>
              <p className="text-gray-300 font-medium text-sm">
                Monitor your tokens throughout the entire supply chain from farm to consumer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
