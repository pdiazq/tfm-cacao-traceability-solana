"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { formatRole } from "@/lib/utils/format";

// Dynamically import WalletMultiButton to prevent hydration issues
const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export default function Home() {
  const { publicKey } = useWallet();
  const { role } = useRole();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Solana Trazabilidad</h1>
          <WalletMultiButton />
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Track Products Through the Supply Chain
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Solana Trazabilidad is a decentralized supply chain traceability system
            built on Solana blockchain. Track products from producer to consumer with
            complete transparency.
          </p>

          {publicKey ? (
            <Link
              href="/dashboard"
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Go to Dashboard {role && `(${formatRole(role)})`}
            </Link>
          ) : (
            <div className="text-gray-600">
              <p className="mb-4">Connect your wallet to get started</p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">🌱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Producer</h3>
            <p className="text-gray-600 text-sm">
              Create tokens for your products and transfer them to factories
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">🏭</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Factory</h3>
            <p className="text-gray-600 text-sm">
              Process products from producers and create new tokens for retailers
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">🏪</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Retailer</h3>
            <p className="text-gray-600 text-sm">
              Receive products and transfer them to consumers
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumer</h3>
            <p className="text-gray-600 text-sm">
              View the complete history of products you receive
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-semibold mr-4 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">
                <strong>Connect Wallet:</strong> Connect your Solana wallet to register
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-semibold mr-4 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">
                <strong>Request Role:</strong> Select your role in the supply chain
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-semibold mr-4 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">
                <strong>Get Validated:</strong> Wait for authority approval of your role
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white font-semibold mr-4 flex-shrink-0">
                4
              </span>
              <span className="text-gray-700">
                <strong>Start Trading:</strong> Create tokens or receive them from others
              </span>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
