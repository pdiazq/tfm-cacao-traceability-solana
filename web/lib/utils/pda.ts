import BN from "bn.js";
import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID, PDA_SEEDS } from "@/lib/solana/constants";

/**
 * Convert a u64-compatible value to 8-byte little-endian buffer
 */
function u64ToBuffer(value: string | number | bigint): Buffer {
  return new BN(value.toString()).toArrayLike(Buffer, "le", 8);
}

/**
 * ProgramConfig PDA
 */
export function getProgramConfigPDA(): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(PDA_SEEDS.PROGRAM_CONFIG)],
    PROGRAM_ID
  );
}

/**
 * PendingActor PDA
 */
export function getPendingActorPDA(wallet: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(PDA_SEEDS.PENDING_ACTOR), wallet.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Actor PDA
 */
export function getActorPDA(wallet: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(PDA_SEEDS.ACTOR), wallet.toBuffer()],
    PROGRAM_ID
  );
}

/**
 * Batch PDA
 */
export function getBatchPDA(
  creator: PublicKey,
  batchId: string | number | bigint
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(PDA_SEEDS.BATCH), creator.toBuffer(), u64ToBuffer(batchId)],
    PROGRAM_ID
  );
}

/**
 * BatchEvent PDA
 */
export function getEventPDA(
  batchId: string | number | bigint,
  eventId: string | number | bigint
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(PDA_SEEDS.EVENT), u64ToBuffer(batchId), u64ToBuffer(eventId)],
    PROGRAM_ID
  );
}

/**
 * Certificate PDA
 */
export function getCertificatePDA(
  batchId: string | number | bigint,
  certificateId: string | number | bigint
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from(PDA_SEEDS.CERTIFICATE),
      u64ToBuffer(batchId),
      u64ToBuffer(certificateId),
    ],
    PROGRAM_ID
  );
}