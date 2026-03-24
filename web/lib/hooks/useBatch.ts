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

export interface BatchDetailItem {
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

interface UseBatchReturn {
  batch: BatchDetailItem | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useBatch(batchId?: string | number | bigint): UseBatchReturn {
  const { program } = useProgram();

  const [batch, setBatch] = useState<BatchDetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBatch = async () => {
    if (!program || batchId === undefined || batchId === null || batchId === "") {
      setBatch(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const targetBatchId = BigInt(batchId.toString());

      const allBatches = await program.account.batch.all();

      const found = allBatches
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
        .find((item) => BigInt(item.id) === targetBatchId);

      if (!found) {
        setBatch(null);
        setError("Batch not found");
      } else {
        setBatch(found);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch batch");
      setBatch(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatch();
  }, [program, batchId]);

  return {
    batch,
    loading,
    error,
    refetch: fetchBatch,
  };
}