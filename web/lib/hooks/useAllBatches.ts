import { useEffect, useState } from "react";
import { useProgram } from "@/lib/context/ProgramProvider";

function normalizeEnum(value: any): string {
  if (!value) return "unknown";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const key = Object.keys(value)[0];
    return key || "unknown";
  }
  return String(value);
}

export interface BatchListItem {
  publicKey: string;
  id: string;
  creator: string;
  product: string;
  origin: string;
  quantity: string;
  unit: string;
  dateCreated: string;
  rawDateCreated: number;
  status: string;
  eventCount: number;
  certificateCount: number;
}

interface UseAllBatchesReturn {
  batches: BatchListItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useAllBatches(): UseAllBatchesReturn {
  const { program } = useProgram();

  const [batches, setBatches] = useState<BatchListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBatches = async () => {
    if (!program) {
      setBatches([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const allBatches = await program.account.batch.all();

      const parsed: BatchListItem[] = allBatches
        .map((item: any) => {
          const rawDateCreated = Number(item.account.dateCreated ?? 0);

          return {
            publicKey: item.publicKey.toString(),
            id: item.account.id.toString(),
            creator: item.account.creator.toString(),
            product: item.account.product ?? "",
            origin: item.account.origin ?? "",
            quantity: item.account.quantity.toString(),
            unit: item.account.unit ?? "",
            dateCreated: rawDateCreated
              ? new Date(rawDateCreated * 1000).toLocaleString()
              : "Unknown date",
            rawDateCreated,
            status: normalizeEnum(item.account.status),
            eventCount: Number(item.account.eventCount ?? 0),
            certificateCount: Number(item.account.certificateCount ?? 0),
          };
        })
        .sort((a, b) => b.rawDateCreated - a.rawDateCreated);

      setBatches(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch batches");
      setBatches([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, [program]);

  return {
    batches,
    loading,
    error,
    refetch: fetchBatches,
  };
}