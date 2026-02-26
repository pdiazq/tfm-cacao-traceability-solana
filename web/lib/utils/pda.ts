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
 * Get the PendingTransfer PDA for a token mint, from, and to
 */
export function getPendingTransferPDA(tokenMint: PublicKey, from?: PublicKey, to?: PublicKey): [PublicKey, number] {
  if (from && to) {
    return PublicKey.findProgramAddressSync(
      [Buffer.from("pending_transfer"), tokenMint.toBuffer(), from.toBuffer(), to.toBuffer()],
      PROGRAM_ID
    );
  }
  // Fallback for backwards compatibility (shouldn't be used)
  return PublicKey.findProgramAddressSync(
    [Buffer.from("pending_transfer"), tokenMint.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Get the TokenBalance PDA for a token and owner
 */
export function getTokenBalancePDA(tokenMint: PublicKey, owner: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("token_balance"), tokenMint.toBuffer(), owner.toBuffer()],
    PROGRAM_ID
  );
}
