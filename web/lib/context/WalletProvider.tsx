"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { RPC_ENDPOINT } from "@/lib/solana/constants";
import "@solana/wallet-adapter-react-ui/styles.css";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  //const endpoint = RPC_ENDPOINT || clusterApiUrl("devnet");
  const endpoint = RPC_ENDPOINT || "http://127.0.0.1:8899";

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}
