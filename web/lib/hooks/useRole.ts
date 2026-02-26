import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useProgram } from "@/lib/context/ProgramProvider";
import { getRoleRegistryPDA, getPendingRolePDA, getConfigPDA } from "@/lib/utils/pda";
import { Traza } from "@/types/traza";

type Role = Traza["types"][3]["type"]["variants"][number]["name"];

/**
 * Normalize role enum object to string
 */
function normalizeRole(role: any): string | null {
  if (!role) return null;
  if (typeof role === "string") return role;
  if (typeof role === "object") {
    const roleKey = Object.keys(role)[0];
    return roleKey || null;
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
      setError(null);

      // Fetch RoleRegistry to check if user has an approved role
      const [roleRegistryPDA] = getRoleRegistryPDA(publicKey);
      try {
        const roleRegistry = await program.account.roleRegistry.fetch(
          roleRegistryPDA
        );
        setRole(normalizeRole(roleRegistry.role));
      } catch {
        setRole(null);
      }

      // Fetch PendingRoleRegistration to check if user has a pending request
      const [pendingRolePDA] = getPendingRolePDA(publicKey);
      try {
        const pendingRoleReg = await program.account.pendingRoleRegistration.fetch(
          pendingRolePDA
        );
        setHasPendingRequest(true);
        setPendingRole(normalizeRole(pendingRoleReg.requestedRole));
      } catch {
        setHasPendingRequest(false);
        setPendingRole(null);
      }

      // Check if user is authority
      const [configPDA] = getConfigPDA();
      try {
        const config = await program.account.programConfig.fetch(configPDA);
        setIsAuthority(config.authority.equals(publicKey));
      } catch {
        setIsAuthority(false);
      }

      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch role");
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
