"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { useTokenBalances } from "@/lib/hooks/useTokenBalances";

export default function FactoryDashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const { balances, loading: balancesLoading } = useTokenBalances(publicKey!);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!roleLoading && role && role !== "factory") {
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
          <div className="text-6xl mb-4">🏭</div>
          <h1 className="text-5xl font-black mb-4">Factory Dashboard</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Process and combine products from producers, then distribute to retailers. Manage your production workflow.
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
              <p className="text-sm font-semibold text-gray-600 mb-2">Tokens Processed</p>
              <p className="text-4xl font-black text-black">{balances.length}</p>
              <p className="text-xs text-gray-500 mt-3">Combined and created</p>
            </div>

            {/* Input Tokens */}
            <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition">
              <p className="text-sm font-semibold text-gray-600 mb-2">Production Capacity</p>
              <p className="text-4xl font-black text-black">∞</p>
              <p className="text-xs text-gray-500 mt-3">Unlimited processing</p>
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
            {/* Receive Tokens */}
            <button
              onClick={() => router.push("/dashboard/factory/transfers")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📨</div>
              <h3 className="text-2xl font-black text-black mb-3">Receive Products</h3>
              <p className="text-gray-700 font-medium mb-4">
                Accept incoming product tokens from producers.
              </p>
              <p className="text-sm font-semibold text-black">View Transfers →</p>
            </button>

            {/* Create Token */}
            <button
              onClick={() => router.push("/dashboard/factory/create-token")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">⚙️</div>
              <h3 className="text-2xl font-black text-black mb-3">Create New Product</h3>
              <p className="text-gray-700 font-medium mb-4">
                Combine inputs and create new processed product tokens.
              </p>
              <p className="text-sm font-semibold text-black">Start Production →</p>
            </button>

            {/* My Inventory */}
            <button
              onClick={() => router.push("/dashboard/factory/my-tokens")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📦</div>
              <h3 className="text-2xl font-black text-black mb-3">My Inventory</h3>
              <p className="text-gray-700 font-medium mb-4">
                View all your processed products and send to retailers.
              </p>
              <p className="text-sm font-semibold text-black">View Inventory ({balances.length}) →</p>
            </button>

            {/* Learn More */}
            <button
              onClick={() => router.push("/")}
              className="bg-white border-4 border-black rounded-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-left w-full group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📚</div>
              <h3 className="text-2xl font-black text-black mb-3">Learn More</h3>
              <p className="text-gray-700 font-medium mb-4">
                Understand factory operations and best practices.
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
              <h3 className="text-lg font-black mb-2">Receive Products</h3>
              <p className="text-gray-300 font-medium text-sm">
                Accept token transfers from producers of raw materials you need.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-black mb-2">Combine & Process</h3>
              <p className="text-gray-300 font-medium text-sm">
                Create new tokens representing your processed products.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-black mb-2">Ship to Retailers</h3>
              <p className="text-gray-300 font-medium text-sm">
                Transfer your finished products to retailers for distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
