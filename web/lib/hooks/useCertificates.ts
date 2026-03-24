import { useEffect, useState } from "react";
import { useProgram } from "@/lib/context/ProgramProvider";

function normalizeEnum(value: any): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const key = Object.keys(value)[0];
    return key || "";
  }
  return String(value);
}

export interface CertificateItem {
  publicKey: string;
  id: string;
  batchId: string;
  certificateType: string;
  issuer: string;
  documentHash: string;
  issuedDate: string;
  rawIssuedDate: number;
  expiryDate: string;
  rawExpiryDate: number;
  status: string;
}

interface UseCertificatesReturn {
  certificates: CertificateItem[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useCertificates(
  batchId?: string | number | bigint
): UseCertificatesReturn {
  const { program } = useProgram();

  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCertificates = async () => {
    if (!program || batchId === undefined || batchId === null || batchId === "") {
      setCertificates([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const targetBatchId = BigInt(batchId.toString());

      const allCertificates = await program.account.certificate.all();

      const parsed: CertificateItem[] = allCertificates
        .map((item: any) => {
          const rawIssuedDate = Number(item.account.issuedDate ?? 0);
          const rawExpiryDate = Number(item.account.expiryDate ?? 0);

          return {
            publicKey: item.publicKey.toString(),
            id: item.account.id.toString(),
            batchId: item.account.batchId.toString(),
            certificateType: item.account.certificateType ?? "",
            issuer: item.account.issuer ?? "",
            documentHash: item.account.documentHash ?? "",
            issuedDate: rawIssuedDate
              ? new Date(rawIssuedDate * 1000).toLocaleString()
              : "Unknown date",
            rawIssuedDate,
            expiryDate: rawExpiryDate
              ? new Date(rawExpiryDate * 1000).toLocaleDateString()
              : "No expiry",
            rawExpiryDate,
            status: normalizeEnum(item.account.status),
          };
        })
        .filter((certificate) => BigInt(certificate.batchId) === targetBatchId)
        .sort((a, b) => b.rawIssuedDate - a.rawIssuedDate);

      setCertificates(parsed);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch certificates"
      );
      setCertificates([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, [program, batchId]);

  return {
    certificates,
    loading,
    error,
    refetch: fetchCertificates,
  };
}