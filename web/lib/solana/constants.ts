import { PublicKey } from "@solana/web3.js";

/**
 * Program ID deployed on Devnet
 */
export const PROGRAM_ID = new PublicKey(
  "H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX"
);

/**
 * Solana cluster configuration
 */
export const CLUSTER = "devnet";
export const RPC_ENDPOINT = "https://api.devnet.solana.com";

/**
 * System program
 */
export const SYSTEM_PROGRAM_ID = new PublicKey(
  "11111111111111111111111111111111"
);

/**
 * PDA seeds used by the program
 */
export const PDA_SEEDS = {
  PROGRAM_CONFIG: "config",
  ACTOR: "actor",
  PENDING_ACTOR: "pending_actor",
  BATCH: "batch",
  EVENT: "event",
  CERTIFICATE: "certificate",
};

/**
 * Actor roles used in the UI
 */
export const ACTOR_ROLES = [
  "producer",
  "processor",
  "transporter",
  "exporter",
  "authority",
] as const;

export type ActorRole = typeof ACTOR_ROLES[number];

/**
 * Batch lifecycle statuses
 */
export const BATCH_STATUSES = [
  "created",
  "harvested",
  "fermented",
  "dried",
  "inTransit",
  "stored",
  "certified",
  "exported",
  "delivered",
] as const;

export type BatchStatus = typeof BATCH_STATUSES[number];