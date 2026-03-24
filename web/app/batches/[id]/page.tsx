"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useBatch } from "@/lib/hooks/useBatch";
import { useBatchEvents } from "@/lib/hooks/useBatchEvents";
import { useCertificates } from "@/lib/hooks/useCertificates";

export default function BatchDetailPage() {
  const params = useParams();
  const router = useRouter();

  const batchIdParam = params?.id;
  const batchId =
    typeof batchIdParam === "string"
      ? batchIdParam
      : Array.isArray(batchIdParam)
      ? batchIdParam[0]
      : "";

  const {
    batch,
    loading: batchLoading,
    error: batchError,
    refetch: refetchBatch,
  } = useBatch(batchId);

  const {
    events,
    loading: eventsLoading,
    error: eventsError,
    refetch: refetchEvents,
  } = useBatchEvents(batchId);

  const {
    certificates,
    loading: certificatesLoading,
    error: certificatesError,
    refetch: refetchCertificates,
  } = useCertificates(batchId);

  const latestEvent = events.length > 0 ? events[events.length - 1] : null;

  const loading = batchLoading || eventsLoading || certificatesLoading;
  const error = batchError || eventsError || certificatesError;

  const handleRefresh = async () => {
    await Promise.all([refetchBatch(), refetchEvents(), refetchCertificates()]);
  };

  if (!batchId) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-white border-4 border-black rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-black text-black mb-2">Invalid batch ID</h2>
          <p className="text-gray-700 font-medium">
            The requested batch route is not valid.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-lg text-gray-600">
            Loading batch traceability data...
          </p>
        </div>
      </div>
    );
  }

  if (error || !batch) {
    return (
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-4 border-black rounded-lg p-10 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h1 className="text-3xl font-black text-black mb-3">
              Batch not available
            </h1>
            <p className="text-gray-700 font-medium mb-6">
              {error || "We could not find this batch on-chain."}
            </p>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-black text-white font-black rounded-lg hover:bg-gray-800 transition"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-12 px-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-5xl mb-4">🍫</div>
              <h1 className="text-4xl font-black mb-2">Batch #{batch.id}</h1>
              <p className="text-gray-300 font-medium max-w-3xl">
                Complete traceability view for this cacao batch, including lifecycle
                status, timeline events, and issued certificates.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                className="px-5 py-3 bg-white text-black font-black rounded-lg hover:bg-gray-200 transition"
              >
                ↻ Refresh
              </button>
              <button
                onClick={() => router.back()}
                className="px-5 py-3 border-2 border-white text-white font-black rounded-lg hover:bg-white hover:text-black transition"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-3xl font-black text-black mb-6">Batch Overview</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border-4 border-black rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Product</p>
                  <p className="text-2xl font-black text-black">{batch.product}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-semibold mb-1">
                      Official Current Status
                    </p>
                    <span className="inline-block px-4 py-2 border-2 border-black rounded-full text-sm font-black capitalize">
                      {batch.status}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-semibold mb-1">
                      Latest Recorded Event
                    </p>
                    <span className="inline-block px-4 py-2 border-2 border-gray-400 rounded-full text-sm font-bold capitalize bg-gray-50 text-black">
                      {latestEvent ? latestEvent.eventType : "No events yet"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6 bg-gray-50 border-2 border-black rounded-lg p-4">
                <p className="text-sm text-black font-medium">
                  <span className="font-black">Note:</span> The official current status
                  shows the confirmed lifecycle stage of the batch. The latest
                  recorded event shows the most recent activity in the timeline and
                  may not always match the current status until the corresponding
                  status update is executed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Origin</p>
                  <p className="text-base font-medium text-black">{batch.origin}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Created At</p>
                  <p className="text-base font-medium text-black">
                    {batch.dateCreated}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Quantity</p>
                  <p className="text-base font-bold text-black">
                    {batch.quantity} {batch.unit}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">
                    Creator Wallet
                  </p>
                  <p className="text-sm font-mono break-all text-black">
                    {batch.creator}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-4 border-black rounded-lg p-6">
                <p className="text-sm text-gray-500 font-semibold mb-2">Events</p>
                <p className="text-4xl font-black text-black">{batch.eventCount}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Recorded lifecycle events
                </p>
              </div>

              <div className="bg-white border-4 border-black rounded-lg p-6">
                <p className="text-sm text-gray-500 font-semibold mb-2">
                  Certificates
                </p>
                <p className="text-4xl font-black text-black">
                  {batch.certificateCount}
                </p>
                <p className="text-xs text-gray-500 mt-2">Issued for this batch</p>
              </div>

              <div className="bg-white border-4 border-black rounded-lg p-6">
                <p className="text-sm text-gray-500 font-semibold mb-2">Batch PDA</p>
                <p className="text-xs font-mono break-all text-black">
                  {batch.publicKey}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-black text-black">Timeline</h2>
            <span className="text-sm font-semibold text-gray-600">
              {events.length} event{events.length === 1 ? "" : "s"}
            </span>
          </div>

          {events.length === 0 ? (
            <div className="bg-white border-4 border-black rounded-lg p-8 text-center">
              <div className="text-5xl mb-3">🕒</div>
              <p className="text-lg font-black text-black mb-2">No events yet</p>
              <p className="text-gray-600 font-medium">
                This batch does not have recorded timeline events yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={event.publicKey}
                  className="bg-white border-4 border-black rounded-lg p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Event #{index + 1}
                      </p>
                      <p className="text-2xl font-black text-black">
                        {event.eventType}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Timestamp
                      </p>
                      <p className="text-sm font-medium text-black">
                        {event.timestamp}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-base font-medium text-black">
                        {event.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Actor
                      </p>
                      <p className="text-sm font-mono break-all text-black">
                        {event.actor}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      Metadata
                    </p>
                    <pre className="whitespace-pre-wrap break-words bg-gray-50 border-2 border-black rounded-lg p-4 text-sm text-black overflow-x-auto">
                      {event.metadata || "{}"}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-black text-black">Certificates</h2>
            <span className="text-sm font-semibold text-gray-600">
              {certificates.length} certificate
              {certificates.length === 1 ? "" : "s"}
            </span>
          </div>

          {certificates.length === 0 ? (
            <div className="bg-white border-4 border-black rounded-lg p-8 text-center">
              <div className="text-5xl mb-3">📜</div>
              <p className="text-lg font-black text-black mb-2">
                No certificates yet
              </p>
              <p className="text-gray-600 font-medium">
                This batch does not have issued certificates yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certificates.map((certificate) => (
                <div
                  key={certificate.publicKey}
                  className="bg-white border-4 border-black rounded-lg p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Certificate #{certificate.id}
                      </p>
                      <p className="text-xl font-black text-black">
                        {certificate.certificateType}
                      </p>
                    </div>

                    <span className="px-3 py-1 border-2 border-black rounded-full text-sm font-black capitalize">
                      {certificate.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Issuer
                      </p>
                      <p className="text-base font-medium text-black">
                        {certificate.issuer}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Issued Date
                      </p>
                      <p className="text-base font-medium text-black">
                        {certificate.issuedDate}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Expiry Date
                      </p>
                      <p className="text-base font-medium text-black">
                        {certificate.expiryDate}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 font-semibold mb-1">
                        Document Hash
                      </p>
                      <p className="text-xs font-mono break-all text-black">
                        {certificate.documentHash}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="pb-8">
          <div className="bg-black text-white rounded-lg border-4 border-black p-8">
            <h2 className="text-2xl font-black mb-4">Traceability Navigation</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard/producer/my-batches"
                className="px-5 py-3 bg-white text-black font-black rounded-lg hover:bg-gray-200 transition"
              >
                Producer Batches
              </Link>
              <Link
                href="/dashboard"
                className="px-5 py-3 border-2 border-white text-white font-black rounded-lg hover:bg-white hover:text-black transition"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}