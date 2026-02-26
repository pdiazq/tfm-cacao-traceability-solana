"use client";

import { TokenBalance } from "@/lib/hooks/useTokenBalances";
import { formatAddress, formatAmount } from "@/lib/utils/format";

interface TokenBalanceCardProps {
  balance: TokenBalance;
  totalSupply: bigint;
  metadata?: string;
  onTransfer?: (balance: TokenBalance) => void;
}

export function TokenBalanceCard({
  balance,
  totalSupply,
  metadata,
  onTransfer,
}: TokenBalanceCardProps) {
  const percentage =
    totalSupply > BigInt(0) ? (Number(balance.balance) / Number(totalSupply)) * 100 : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {metadata || formatAddress(balance.tokenMint.toString())}
          </h3>
          <p className="text-sm text-gray-500">
            Mint: {formatAddress(balance.tokenMint.toString())}
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
          Owner
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500">Your Balance</p>
          <p className="text-lg font-bold text-gray-900">
            {formatAmount(balance.balance)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Total Supply</p>
          <p className="text-lg font-bold text-gray-900">
            {formatAmount(totalSupply)}
          </p>
        </div>
      </div>

      {/* Ownership percentage bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-500">Your Ownership</p>
          <p className="text-sm font-semibold text-gray-900">
            {percentage.toFixed(2)}%
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>

      {balance.balance === BigInt(0) && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs px-3 py-2 rounded mb-4">
          You no longer have a balance in this token
        </div>
      )}

      <div className="text-xs text-gray-500">
        Last updated:{" "}
        {new Date(balance.lastUpdated * 1000).toLocaleDateString()}
      </div>

      {onTransfer && balance.balance > BigInt(0) && (
        <button
          onClick={() => onTransfer(balance)}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Transfer
        </button>
      )}
    </div>
  );
}
