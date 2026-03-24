import { PublicKey, SystemProgram } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import BN from "bn.js";
import { Traza } from "@/types/traza";
import {
  getActorPDA,
  getBatchPDA,
  getCertificatePDA,
  getEventPDA,
  getPendingActorPDA,
  getProgramConfigPDA,
} from "@/lib/utils/pda";

type ActorRole = "producer" | "processor" | "transporter" | "exporter" | "authority";
type BatchStatus =
  | "created"
  | "harvested"
  | "fermented"
  | "dried"
  | "inTransit"
  | "stored"
  | "certified"
  | "exported"
  | "delivered";

function toRoleVariant(role: ActorRole): any {
  return { [role]: {} };
}

function toStatusVariant(status: BatchStatus): any {
  return { [status]: {} };
}

/**
 * Initialize the program (authority only)
 */
export async function initializeProgram(
  program: Program<Traza>,
  authority: PublicKey
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();

  return await program.methods
    .initialize()
    .accountsPartial({
      programConfig: programConfigPda,
      authority,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Register a new actor request
 */
export async function registerActor(
  program: Program<Traza>,
  wallet: PublicKey,
  name: string,
  role: ActorRole,
  location: string
): Promise<string> {
  const [pendingActorPda] = getPendingActorPDA(wallet);
  const [actorPda] = getActorPDA(wallet);

  return await program.methods
    .registerActor(name, toRoleVariant(role), location)
    .accountsPartial({
      pendingActor: pendingActorPda,
      actor: actorPda,
      wallet,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Validate a pending actor registration (authority only)
 */
export async function validateActor(
  program: Program<Traza>,
  authority: PublicKey,
  targetWallet: PublicKey
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();
  const [pendingActorPda] = getPendingActorPDA(targetWallet);
  const [actorPda] = getActorPDA(targetWallet);

  return await program.methods
    .validateActor()
    .accountsPartial({
      programConfig: programConfigPda,
      pendingActor: pendingActorPda,
      actor: actorPda,
      authority,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Create a new cacao batch
 */
export async function createBatch(
  program: Program<Traza>,
  creator: PublicKey,
  batchId: bigint,
  product: string,
  origin: string,
  quantity: bigint,
  unit: string,
  harvestDate: bigint
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();
  const [actorPda] = getActorPDA(creator);
  const [batchPda] = getBatchPDA(creator, batchId);

  return await program.methods
    .createBatch(
      product,
      origin,
      new BN(quantity.toString()),
      unit,
      new BN(harvestDate.toString())
    )
    .accountsPartial({
      programConfig: programConfigPda,
      actor: actorPda,
      batch: batchPda,
      creator,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Record an event for a cacao batch
 */
export async function recordEvent(
  program: Program<Traza>,
  actorWallet: PublicKey,
  creator: PublicKey,
  batchId: bigint,
  eventId: bigint,
  eventType: string,
  location: string,
  metadata: string
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();
  const [actorPda] = getActorPDA(actorWallet);
  const [batchPda] = getBatchPDA(creator, batchId);
  const [batchEventPda] = getEventPDA(batchId, eventId);

  return await program.methods
    .recordEvent(
      new BN(batchId.toString()),
      eventType,
      location,
      metadata
    )
    .accountsPartial({
      programConfig: programConfigPda,
      actor: actorPda,
      batch: batchPda,
      batchEvent: batchEventPda,
      actorWallet,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Update batch lifecycle status
 */
export async function updateBatchStatus(
  program: Program<Traza>,
  actorWallet: PublicKey,
  creator: PublicKey,
  batchId: bigint,
  newStatus: BatchStatus
): Promise<string> {
  const [actorPda] = getActorPDA(actorWallet);
  const [batchPda] = getBatchPDA(creator, batchId);

  return await program.methods
    .updateBatchStatus(new BN(batchId.toString()), toStatusVariant(newStatus))
    .accountsPartial({
      actor: actorPda,
      batch: batchPda,
      actorWallet,
    })
    .rpc();
}

/**
 * Issue a certificate for a batch (authority only)
 */
export async function issueCertificate(
  program: Program<Traza>,
  authority: PublicKey,
  creator: PublicKey,
  batchId: bigint,
  certificateId: bigint,
  certificateType: string,
  issuer: string,
  documentHash: string,
  expiryDate: bigint
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();
  const [batchPda] = getBatchPDA(creator, batchId);
  const [certificatePda] = getCertificatePDA(batchId, certificateId);

  return await program.methods
    .issueCertificate(
      new BN(batchId.toString()),
      certificateType,
      issuer,
      documentHash,
      new BN(expiryDate.toString())
    )
    .accountsPartial({
      programConfig: programConfigPda,
      batch: batchPda,
      certificate: certificatePda,
      authority,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

/**
 * Revoke a certificate (authority only)
 */
export async function revokeCertificate(
  program: Program<Traza>,
  authority: PublicKey,
  batchId: bigint,
  certificateId: bigint
): Promise<string> {
  const [programConfigPda] = getProgramConfigPDA();
  const [certificatePda] = getCertificatePDA(batchId, certificateId);

  return await program.methods
    .revokeCertificate(
      new BN(batchId.toString()),
      new BN(certificateId.toString())
    )
    .accountsPartial({
      programConfig: programConfigPda,
      certificate: certificatePda,
      authority,
    })
    .rpc();
}