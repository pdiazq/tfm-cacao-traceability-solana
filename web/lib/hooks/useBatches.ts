import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";

function normalizeEnum(value: any): string {
  if (!value) return "unknown";
  if (typeof value === "string") return value;
  if (typeof value === "object") return Object.keys(value)[0] || "unknown";
  return "unknown";
}

export interface BatchItem {
  publicKey: string;
  id: string;
  creator: string;
  product: string;
  origin: string;
  quantity: string;
  unit: string;
  dateCreated: string;
  status: string;
  eventCount: number;
  certificateCount: number;
}

interface UseBatchesReturn {
  batches: BatchItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useBatches(): UseBatchesReturn {
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [batches, setBatches] = useState<BatchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBatches = async () => {
    if (!program || !publicKey) {
      setBatches([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const allBatches = await program.account.batch.all();

      const parsed: BatchItem[] = allBatches
        .map((item: any) => ({
          publicKey: item.publicKey.toString(),
          id: item.account.id.toString(),
          creator: item.account.creator.toString(),
          product: item.account.product,
          origin: item.account.origin,
          quantity: item.account.quantity.toString(),
          unit: item.account.unit,
          dateCreated: item.account.dateCreated
            ? new Date(Number(item.account.dateCreated) * 1000).toLocaleString()
            : "Unknown date",
          status: normalizeEnum(item.account.status),
          eventCount: Number(item.account.eventCount ?? 0),
          certificateCount: Number(item.account.certificateCount ?? 0),
        }))
        .filter((batch) => batch.creator === publicKey.toString())
        .sort((a, b) => Number(b.id) - Number(a.id));

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
  }, [program, publicKey]);

  return {
    batches,
    loading,
    error,
    refetch: fetchBatches,
  };
}