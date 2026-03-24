"use client";

import React, { useMemo, ReactNode } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Traza } from "@/types/traza";
import TrazaIDL from "@/types/traza.json";

interface ProgramContextType {
  program: Program<Traza> | null;
  provider: AnchorProvider | null;
  isReady: boolean;
}

const ProgramContext = React.createContext<ProgramContextType>({
  program: null,
  provider: null,
  isReady: false,
});

export function ProgramProvider({ children }: { children: ReactNode }) {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const { program, provider, isReady } = useMemo(() => {
    if (!anchorWallet) {
      return { program: null, provider: null, isReady: false };
    }

    try {
      const newProvider = new AnchorProvider(connection, anchorWallet, {
        commitment: "confirmed",
      });

      const newProgram = new Program<Traza>(
        TrazaIDL as any,
        newProvider
      );

      return { program: newProgram, provider: newProvider, isReady: true };
    } catch (error) {
      console.error("Failed to initialize program:", error);
      return { program: null, provider: null, isReady: false };
    }
  }, [connection, anchorWallet]);

  return (
    <ProgramContext.Provider value={{ program, provider, isReady }}>
      {children}
    </ProgramContext.Provider>
  );
}

export function useProgram() {
  return React.useContext(ProgramContext);
}