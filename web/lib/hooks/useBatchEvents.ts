import { useEffect, useState } from "react";
import { useProgram } from "@/lib/context/ProgramProvider";

function normalizeValue(value: any): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const key = Object.keys(value)[0];
    return key || "";
  }
  return String(value);
}

export interface BatchEventItem {
  publicKey: string;
  id: string;
  batchId: string;
  eventType: string;
  actor: string;
  location: string;
  timestamp: string;
  rawTimestamp: number;
  metadata: string;
}

interface UseBatchEventsReturn {
  events: BatchEventItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useBatchEvents(batchId?: string | number | bigint): UseBatchEventsReturn {
  const { program } = useProgram();

  const [events, setEvents] = useState<BatchEventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    if (!program || batchId === undefined || batchId === null || batchId === "") {
      setEvents([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const targetBatchId = BigInt(batchId.toString());

      const allEvents = await program.account.batchEvent.all();

      const parsed: BatchEventItem[] = allEvents
        .map((item: any) => {
          const rawTimestamp = Number(item.account.timestamp ?? 0);

          return {
            publicKey: item.publicKey.toString(),
            id: item.account.id.toString(),
            batchId: item.account.batchId.toString(),
            eventType: normalizeValue(item.account.eventType),
            actor: item.account.actor.toString(),
            location: item.account.location ?? "",
            timestamp: rawTimestamp
              ? new Date(rawTimestamp * 1000).toLocaleString()
              : "Unknown date",
            rawTimestamp,
            metadata: item.account.metadata ?? "",
          };
        })
        .filter((event) => BigInt(event.batchId) === targetBatchId)
        .sort((a, b) => a.rawTimestamp - b.rawTimestamp);

      setEvents(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch batch events");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [program, batchId]);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
}