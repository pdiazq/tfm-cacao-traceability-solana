"use client";

import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useProgram } from "@/lib/context/ProgramProvider";
import { useRole } from "@/lib/hooks/useRole";
import { validateActor } from "@/lib/solana/instructions";

interface PendingActorItem {
  publicKey: string;
  wallet: string;
  role: string;
  name: string;
  location: string;
  createdAt: string;
}

function normalizeEnum(value: any): string {
  if (!value) return "unknown";
  if (typeof value === "string") return value;
  if (typeof value === "object") return Object.keys(value)[0] || "unknown";
  return "unknown";
}

export default function ValidateActorsPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { program } = useProgram();
  const { role, isAuthority, loading: roleLoading } = useRole();

  const [items, setItems] = useState<PendingActorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [approvingWallet, setApprovingWallet] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPendingActors = async () => {
    if (!program) return;

    try {
      setLoading(true);
      setError(null);

      const pendingActors = await program.account.pendingActor.all();

      const parsed = pendingActors.map((item: any) => ({
        publicKey: item.publicKey.toString(),
        wallet: item.account.wallet.toString(),
        role: normalizeEnum(item.account.requestedRole),
        name: item.account.name ?? "Unnamed actor",
        location: item.account.location ?? "Unknown location",
        createdAt: item.account.createdAt
          ? new Date(Number(item.account.createdAt) * 1000).toLocaleString()
          : "Unknown date",
      }));

      setItems(parsed);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load pending actors"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!roleLoading && !isAuthority && role !== "authority") {
      router.push("/dashboard");
    }
  }, [role, isAuthority, roleLoading, router]);

  useEffect(() => {
    fetchPendingActors();
  }, [program]);

  const handleApprove = async (wallet: string) => {
    if (!program || !publicKey) return;

    try {
      setApprovingWallet(wallet);
      setError(null);

      await validateActor(program, publicKey, new PublicKey(wallet));
      await fetchPendingActors();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to validate actor"
      );
    } finally {
      setApprovingWallet(null);
    }
  };

  if (roleLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading pending actors...</p>
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
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-4xl font-black mb-2">Validate Actors</h1>
          <p className="text-gray-300 font-medium">
            Review and approve pending actor registrations in the cacao traceability network.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg font-semibold mb-8">
            ⚠️ {error}
          </div>
        )}

        {items.length === 0 ? (
          <div className="bg-white border-4 border-black rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-black text-black mb-2">
              No Pending Actors
            </h2>
            <p className="text-gray-600 font-medium">
              There are currently no actor registrations waiting for approval.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {items.map((item) => (
              <div
                key={item.publicKey}
                className="bg-white border-4 border-black rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-semibold">
                      Wallet
                    </p>
                    <p className="font-mono text-sm break-all text-black">
                      {item.wallet}
                    </p>

                    <p className="text-sm text-gray-500 font-semibold mt-4">
                      Name
                    </p>
                    <p className="text-lg font-black text-black">{item.name}</p>

                    <p className="text-sm text-gray-500 font-semibold mt-4">
                      Role
                    </p>
                    <p className="text-base font-semibold text-black capitalize">
                      {item.role}
                    </p>

                    <p className="text-sm text-gray-500 font-semibold mt-4">
                      Location
                    </p>
                    <p className="text-base font-medium text-black">
                      {item.location}
                    </p>

                    <p className="text-sm text-gray-500 font-semibold mt-4">
                      Requested At
                    </p>
                    <p className="text-sm font-medium text-black">
                      {item.createdAt}
                    </p>
                  </div>

                  <div className="min-w-[220px]">
                    <button
                      onClick={() => handleApprove(item.wallet)}
                      disabled={approvingWallet === item.wallet}
                      className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-black py-3 rounded-lg transition"
                    >
                      {approvingWallet === item.wallet
                        ? "⏳ Approving..."
                        : "✓ Approve Actor"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}