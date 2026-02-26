import { PublicKey, SystemProgram, Keypair } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import BN from "bn.js";
import { Traza } from "@/types/traza";
import {
  getRoleRegistryPDA,
  getPendingRolePDA,
  getConfigPDA,
  getTraceTokenPDA,
  getPendingTransferPDA,
  getTokenBalancePDA,
} from "@/lib/utils/pda";

type Role = Traza["types"][3]["type"]["variants"][number]["name"];

/**
 * Register a role request
 */
export async function registerRole(
  program: Program<Traza>,
  wallet: PublicKey,
  role: Role
): Promise<string> {
  const [pendingRolePDA] = getPendingRolePDA(wallet);
  const [roleRegistryPDA] = getRoleRegistryPDA(wallet);

  // Create role enum variant
  const roleVariant: any = {};
  roleVariant[role] = {};

  console.log("Registering role:", { wallet: wallet.toString(), role, roleVariant });

  const tx = await program.methods
    .registerRole(roleVariant)
    .accounts({
      pendingRole: pendingRolePDA,
      roleRegistry: roleRegistryPDA,
      wallet: wallet,
      systemProgram: SystemProgram.programId,
    } as any)
    .rpc();

  console.log("Register role transaction:", tx);
  return tx;
}

/**
 * Validate a pending role registration (authority only)
 */
export async function validateRole(
  program: Program<Traza>,
  authority: PublicKey,
  targetWallet: PublicKey
): Promise<string> {
  const [configPDA] = getConfigPDA();
  const [pendingRolePDA] = getPendingRolePDA(targetWallet);
  const [roleRegistryPDA] = getRoleRegistryPDA(targetWallet);

  const tx = await program.methods
    .validateRole()
    .accounts({
      programConfig: configPDA,
      pendingRole: pendingRolePDA,
      roleRegistry: roleRegistryPDA,
      authority: authority,
      systemProgram: SystemProgram.programId,
    } as any)
    .rpc();

  return tx;
}

/**
 * Initialize the program (authority only)
 */
export async function initializeProgram(
  program: Program<Traza>,
  authority: PublicKey
): Promise<string> {
  const [configPDA] = getConfigPDA();

  const tx = await program.methods
    .initialize()
    .accounts({
      programConfig: configPDA,
      authority: authority,
      systemProgram: SystemProgram.programId,
    } as any)
    .rpc();

  return tx;
}

/**
 * Create a new token
 */
export async function createToken(
  program: Program<Traza>,
  creator: PublicKey,
  mint: Keypair,
  amount: bigint,
  metadata: string,
  sourceTokenMints?: PublicKey[]
): Promise<string> {
  const [traceTokenPDA] = getTraceTokenPDA(mint.publicKey);
  const [creatorBalancePDA] = getTokenBalancePDA(mint.publicKey, creator);
  const [roleRegistryPDA] = getRoleRegistryPDA(creator);

  const tx = await program.methods
    .createToken(new BN(amount.toString()), metadata)
    .accounts({
      traceToken: traceTokenPDA,
      creatorBalance: creatorBalancePDA,
      mint: mint.publicKey,
      roleRegistry: roleRegistryPDA,
      creator: creator,
      systemProgram: SystemProgram.programId,
    } as any)
    .signers([mint])
    .remainingAccounts(
      (sourceTokenMints || []).map((mintPk) => ({
        pubkey: getTraceTokenPDA(mintPk)[0],
        isSigner: false,
        isWritable: false,
      }))
    )
    .rpc();

  return tx;
}

/**
 * Initiate a token transfer
 */
export async function initiateTransfer(
  program: Program<Traza>,
  from: PublicKey,
  to: PublicKey,
  tokenMint: PublicKey,
  amount: bigint
): Promise<string> {
  const [traceTokenPDA] = getTraceTokenPDA(tokenMint);
  const [fromBalancePDA] = getTokenBalancePDA(tokenMint, from);
  const [pendingTransferPDA] = getPendingTransferPDA(tokenMint, from, to);
  const [fromRoleRegistryPDA] = getRoleRegistryPDA(from);
  const [toRoleRegistryPDA] = getRoleRegistryPDA(to);

  const tx = await program.methods
    .initiateTransfer(new BN(amount.toString()))
    .accounts({
      traceToken: traceTokenPDA,
      fromBalance: fromBalancePDA,
      pendingTransfer: pendingTransferPDA,
      fromRoleRegistry: fromRoleRegistryPDA,
      to: to,
      toRoleRegistry: toRoleRegistryPDA,
      from: from,
      systemProgram: SystemProgram.programId,
    } as any)
    .rpc();

  return tx;
}

/**
 * Accept a pending token transfer
 */
export async function acceptTransfer(
  program: Program<Traza>,
  receiver: PublicKey,
  tokenMint: PublicKey,
  sender: PublicKey
): Promise<string> {
  const [traceTokenPDA] = getTraceTokenPDA(tokenMint);
  const [fromBalancePDA] = getTokenBalancePDA(tokenMint, sender);
  const [toBalancePDA] = getTokenBalancePDA(tokenMint, receiver);
  const [pendingTransferPDA] = getPendingTransferPDA(tokenMint, sender, receiver);
  const [roleRegistryPDA] = getRoleRegistryPDA(receiver);

  const tx = await program.methods
    .acceptTransfer()
    .accounts({
      traceToken: traceTokenPDA,
      pendingTransfer: pendingTransferPDA,
      fromBalance: fromBalancePDA,
      toBalance: toBalancePDA,
      roleRegistry: roleRegistryPDA,
      to: receiver,
      systemProgram: SystemProgram.programId,
    } as any)
    .rpc();

  return tx;
}
