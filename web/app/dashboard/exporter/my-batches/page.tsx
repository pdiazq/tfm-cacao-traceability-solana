"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { useBatches } from "@/lib/hooks/useBatches";

export default function ExporterMyBatchesPage() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { role, loading: roleLoading } = useRole();
  const { batches, loading, error, refetch } = useBatches();

  useEffect(() => {
    if (!roleLoading && role && role !== "exporter") {
      router.push("/dashboard");
    }
  }, [role, roleLoading, router]);

  if (roleLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">Loading export batches...</p>
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

  const exportReadyBatches = batches.filter(
    (batch) => batch.status === "certified" || batch.status === "exported"
  );

  return (
    <div>
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl mb-4">📦</div>
          <h1 className="text-4xl font-black mb-2">Export Batches</h1>
          <p className="text-gray-300 font-medium">
            Review cacao batches ready for export or already exported.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-black text-black">Exporter View</h2>
            <p className="text-gray-600 font-medium mt-1">
              {exportReadyBatches.length} batch
              {exportReadyBatches.length === 1 ? "" : "es"} available for export workflow.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={refetch}
              className="px-5 py-3 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-lg transition"
            >
              ↻ Refresh
            </button>
            <button
              onClick={() => router.push("/dashboard/exporter/record-export")}
              className="px-5 py-3 bg-black hover:bg-gray-800 text-white font-black rounded-lg transition"
            >
              + Record Export
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-4 border-red-200 text-red-800 px-6 py-4 rounded-lg font-semibold mb-8">
            ⚠️ {error}
          </div>
        )}

        {exportReadyBatches.length === 0 ? (
          <div className="bg-white border-4 border-black rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-black text-black mb-3">
              No export batches yet
            </h3>
            <p className="text-gray-600 font-medium mb-6">
              You will see certified or exported cacao batches here.
            </p>
            <button
              onClick={refetch}
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-black rounded-lg transition"
            >
              Refresh
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {exportReadyBatches.map((batch) => (
              <div
                key={batch.publicKey}
                className="bg-white border-4 border-black rounded-lg p-6 hover:shadow-2xl transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      Batch ID
                    </p>
                    <p className="text-2xl font-black text-black">#{batch.id}</p>
                  </div>

                  <span className="px-3 py-1 border-2 border-black rounded-full text-sm font-black capitalize">
                    {batch.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Product</p>
                    <p className="text-lg font-bold text-black">{batch.product}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Origin</p>
                    <p className="text-base font-medium text-black">{batch.origin}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Quantity</p>
                      <p className="text-base font-bold text-black">
                        {batch.quantity} {batch.unit}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 font-semibold">Created</p>
                      <p className="text-sm font-medium text-black">
                        {batch.dateCreated}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-gray-50 border-2 border-black rounded-lg p-3">
                      <p className="text-xs text-gray-500 font-semibold">Events</p>
                      <p className="text-xl font-black text-black">
                        {batch.eventCount}
                      </p>
                    </div>

                    <div className="bg-gray-50 border-2 border-black rounded-lg p-3">
                      <p className="text-xs text-gray-500 font-semibold">
                        Certificates
                      </p>
                      <p className="text-xl font-black text-black">
                        {batch.certificateCount}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <button
                    onClick={() => router.push(`/batches/${batch.id}`)}
                    className="flex-1 min-w-[150px] px-4 py-3 bg-black hover:bg-gray-800 text-white font-black rounded-lg transition"
                  >
                    View Detail
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/exporter/record-export")}
                    className="flex-1 min-w-[150px] px-4 py-3 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-lg transition"
                  >
                    Record Export
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/exporter/update-status")}
                    className="flex-1 min-w-[150px] px-4 py-3 bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-lg transition"
                  >
                    Mark Exported
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}