"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";

export default function DashboardPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, hasPendingRequest, isAuthority, loading } = useRole();

  useEffect(() => {
    if (loading) return;

    if (!publicKey) {
      router.push("/");
      return;
    }

    if (isAuthority || role === "authority") {
      router.push("/dashboard/authority");
      return;
    }

    if (role === "producer") {
      router.push("/dashboard/producer");
      return;
    }

    if (role === "processor") {
      router.push("/dashboard/processor");
      return;
    }

    if (role === "transporter") {
      router.push("/dashboard/transporter");
      return;
    }

    if (role === "exporter") {
      router.push("/dashboard/exporter");
      return;
    }

    if (hasPendingRequest) {
      router.push("/register-role");
      return;
    }

    router.push("/register-role");
  }, [publicKey, role, hasPendingRequest, isAuthority, loading, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-lg font-semibold text-gray-700">
        Loading dashboard...
      </div>
    </div>
  );
}