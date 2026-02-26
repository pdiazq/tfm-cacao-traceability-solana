import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID } from "@/lib/solana/constants";

/**
 * Get the ProgramConfig PDA
 */
export function getConfigPDA(): [PublicKey, number] {
  return PublicKey.findProgramAddressSync([Buffer.from("config")], PROGRAM_ID);
}

/**
 * Get the RoleRegistry PDA for a wallet
 */
export function getRoleRegistryPDA(wallet: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("role_registry"), wallet.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Get the PendingRoleRegistration PDA for a wallet
 */
export function getPendingRolePDA(wallet: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("pending_role"), wallet.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Get the TraceToken PDA for a mint
 */
export function getTraceTokenPDA(mint: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("trace_token"), mint.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Get the PendingTransfer PDA for a token mint
 */
export function getPendingTransferPDA(tokenMint: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("pending_transfer"), tokenMint.toBuffer()],
    PROGRAM_ID
  );
}
