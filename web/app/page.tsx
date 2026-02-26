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
      <header className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-black">◆ Solana Trazabilidad</h1>
            <p className="text-sm text-gray-600 mt-1">Decentralized Supply Chain Traceability</p>
          </div>
          <WalletMultiButton />
        </div>
      </header>

      {/* Hero Section */}
      <main>
        {/* Hero */}
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 text-6xl">⛓️</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Track Products<br />Through the Supply Chain
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Solana Trazabilidad is a decentralized supply chain traceability system built on Solana blockchain. Track products from producer to consumer with complete transparency and blockchain security.
            </p>

            {publicKey ? (
              <Link
                href="/dashboard"
                className="inline-block bg-white text-black font-black py-4 px-12 rounded-lg border-4 border-white hover:bg-gray-100 transition transform hover:scale-105 text-lg"
              >
                📊 Go to Dashboard {role && `(${formatRole(role)})`}
              </Link>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">🔗 Connect your wallet to get started</p>
              </div>
            )}
          </div>
        </section>

        {/* Supply Chain Flow */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="max-w-full mx-auto">
            <h3 className="text-4xl font-black text-black mb-16 text-center">Supply Chain Journey</h3>
            <div className="flex gap-4 items-center justify-center min-w-max md:min-w-full px-4">
              {/* Producer */}
              <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0">
                <div className="text-5xl mb-3 text-center">🌱</div>
                <h4 className="text-xl font-black text-black mb-2 text-center">Producer</h4>
                <p className="text-gray-700 text-center font-medium text-sm">
                  Create tokens for your products
                </p>
                <div className="mt-4 pt-4 border-t-4 border-black space-y-1">
                  <p className="text-xs text-gray-600 font-semibold">✓ Create Tokens</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Set Metadata</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Initiate Transfers</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl font-black text-black flex-shrink-0">→</div>

              {/* Factory */}
              <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0">
                <div className="text-5xl mb-3 text-center">🏭</div>
                <h4 className="text-xl font-black text-black mb-2 text-center">Factory</h4>
                <p className="text-gray-700 text-center font-medium text-sm">
                  Process and combine products
                </p>
                <div className="mt-4 pt-4 border-t-4 border-black space-y-1">
                  <p className="text-xs text-gray-600 font-semibold">✓ Receive Tokens</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Combine Inputs</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Create New Tokens</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl font-black text-black flex-shrink-0">→</div>

              {/* Retailer */}
              <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0">
                <div className="text-5xl mb-3 text-center">🏪</div>
                <h4 className="text-xl font-black text-black mb-2 text-center">Retailer</h4>
                <p className="text-gray-700 text-center font-medium text-sm">
                  Distribute to consumers
                </p>
                <div className="mt-4 pt-4 border-t-4 border-black space-y-1">
                  <p className="text-xs text-gray-600 font-semibold">✓ Accept Transfers</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ View History</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Ship Products</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-3xl font-black text-black flex-shrink-0">→</div>

              {/* Consumer */}
              <div className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 w-64 flex-shrink-0">
                <div className="text-5xl mb-3 text-center">👥</div>
                <h4 className="text-xl font-black text-black mb-2 text-center">Consumer</h4>
                <p className="text-gray-700 text-center font-medium text-sm">
                  Verify authenticity
                </p>
                <div className="mt-4 pt-4 border-t-4 border-black space-y-1">
                  <p className="text-xs text-gray-600 font-semibold">✓ Track Products</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Verify Origin</p>
                  <p className="text-xs text-gray-600 font-semibold">✓ Full History</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-black mb-16 text-center">Why Solana Trazabilidad?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-black border-4 border-white rounded-lg p-8">
                <div className="text-5xl mb-4">🔐</div>
                <h4 className="text-2xl font-black mb-3">100% Transparent</h4>
                <p className="text-gray-700 font-medium">
                  Every product movement is recorded on the blockchain, creating an immutable record of the entire supply chain.
                </p>
              </div>

              <div className="bg-white text-black border-4 border-white rounded-lg p-8">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-2xl font-black mb-3">Lightning Fast</h4>
                <p className="text-gray-700 font-medium">
                  Built on Solana, transactions are processed in milliseconds with minimal fees and maximum efficiency.
                </p>
              </div>

              <div className="bg-white text-black border-4 border-white rounded-lg p-8">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-2xl font-black mb-3">Fully Secure</h4>
                <p className="text-gray-700 font-medium">
                  Cryptographic security ensures that only authorized participants can create or transfer tokens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works - Steps */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-black text-black mb-16 text-center">Getting Started in 4 Steps</h3>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black">
                    1
                  </div>
                </div>
                <div className="flex-grow bg-white border-4 border-black rounded-lg p-6">
                  <h4 className="text-2xl font-black text-black mb-2">Connect Your Wallet</h4>
                  <p className="text-gray-700 font-medium">
                    Click the wallet button in the top right corner and connect your Solana wallet. This is required to participate in the network.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black">
                    2
                  </div>
                </div>
                <div className="flex-grow bg-white border-4 border-black rounded-lg p-6">
                  <h4 className="text-2xl font-black text-black mb-2">Register Your Role</h4>
                  <p className="text-gray-700 font-medium">
                    Go to "Register Role" and select your position in the supply chain: Producer, Factory, Retailer, or Consumer. Each role has different capabilities.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black">
                    3
                  </div>
                </div>
                <div className="flex-grow bg-white border-4 border-black rounded-lg p-6">
                  <h4 className="text-2xl font-black text-black mb-2">Get Authority Approval</h4>
                  <p className="text-gray-700 font-medium">
                    Your role request will be reviewed by the system authority. Once approved, you'll have access to all the features for your role.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-black text-white border-4 border-black text-2xl font-black">
                    4
                  </div>
                </div>
                <div className="flex-grow bg-white border-4 border-black rounded-lg p-6">
                  <h4 className="text-2xl font-black text-black mb-2">Start the Supply Chain</h4>
                  <p className="text-gray-700 font-medium">
                    Create tokens if you're a producer, or accept transfers from suppliers. Your products are now tracked on the blockchain forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center border-4 border-white rounded-lg p-12">
            <h3 className="text-4xl font-black mb-6">Ready to Transform Your Supply Chain?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of producers, factories, retailers, and consumers already using Solana Trazabilidad to ensure product authenticity and transparency.
            </p>
            {!publicKey ? (
              <div className="flex justify-center">
                <WalletMultiButton />
              </div>
            ) : (
              <Link
                href="/dashboard"
                className="inline-block bg-white text-black font-black py-4 px-12 rounded-lg border-4 border-white hover:bg-gray-100 transition transform hover:scale-105 text-lg"
              >
                🚀 Access Dashboard
              </Link>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-semibold">
            © 2025 Solana Trazabilidad. Building transparency on the blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
}
