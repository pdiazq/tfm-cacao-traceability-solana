"use client";

import dynamic from "next/dynamic";
import { useRole } from "@/lib/hooks/useRole";
import { formatRole } from "@/lib/utils/format";

// Dynamically import WalletMultiButton to prevent hydration issues
const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export function Header() {
  const { role, hasPendingRequest } = useRole();

  const getRoleColor = (r: any) => {
    // Normalizar rol a string
    let roleStr = r;
    if (typeof r === "object" && r) {
      roleStr = Object.keys(r)[0];
    }

    switch (roleStr) {
      case "producer":
        return "bg-green-100 text-green-800";
      case "factory":
        return "bg-gray-200 text-gray-800";
      case "retailer":
        return "bg-purple-100 text-purple-800";
      case "consumer":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Solana Trazabilidad</h1>
          {role && (
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRoleColor(role)}`}>
              {formatRole(role)}
            </span>
          )}
          {hasPendingRequest && (
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
              Pending Approval
            </span>
          )}
        </div>
        <WalletMultiButton />
      </div>
    </header>
  );
}
