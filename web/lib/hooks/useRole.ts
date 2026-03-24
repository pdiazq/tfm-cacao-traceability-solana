import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import {
  getActorPDA,
  getPendingActorPDA,
  getProgramConfigPDA,
} from "@/lib/utils/pda";

/**
 * Normalize Anchor enum object to string
 */
function normalizeEnum(value: any): string | null {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    const key = Object.keys(value)[0];
    return key || null;
  }
  return null;
}

interface UseRoleReturn {
  role: string | null;
  hasPendingRequest: boolean;
  pendingRole: string | null;
  isAuthority: boolean;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useRole(): UseRoleReturn {
  const { publicKey } = useWallet();
  const { program } = useProgram();

  const [role, setRole] = useState<string | null>(null);
  const [pendingRole, setPendingRole] = useState<string | null>(null);
  const [hasPendingRequest, setHasPendingRequest] = useState(false);
  const [isAuthority, setIsAuthority] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRole = async () => {
    if (!publicKey || !program) {
      setRole(null);
      setPendingRole(null);
      setHasPendingRequest(false);
      setIsAuthority(false);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      let validatedRole: string | null = null;
      let pendingRoleValue: string | null = null;
      let pending = false;

      // 1) Check validated actor
      const [actorPda] = getActorPDA(publicKey);
      try {
        const actor = await program.account.actor.fetch(actorPda);
        validatedRole = normalizeEnum(actor.role);
      } catch {
        validatedRole = null;
      }

      // 2) Check pending actor request
      const [pendingActorPda] = getPendingActorPDA(publicKey);
      try {
        const pendingActor = await program.account.pendingActor.fetch(
          pendingActorPda
        );
        pending = true;
        pendingRoleValue = normalizeEnum(pendingActor.requestedRole);
      } catch {
        pending = false;
        pendingRoleValue = null;
      }

      // 3) Check if connected wallet is program authority
      const [programConfigPda] = getProgramConfigPDA();
      try {
        const config = await program.account.programConfig.fetch(programConfigPda);
        setIsAuthority(config.authority.equals(publicKey));
      } catch {
        setIsAuthority(false);
      }

      setRole(validatedRole);
      setPendingRole(pendingRoleValue);
      setHasPendingRequest(pending);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch actor role");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRole();
  }, [publicKey, program]);

  return {
    role,
    hasPendingRequest,
    pendingRole,
    isAuthority,
    loading,
    error,
    refetch: fetchRole,
  };
}