import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { Traza } from "../target/types/traza";

async function main() {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.traza as anchor.Program<Traza>;

  const walletToApprove = new PublicKey(
    "9Z8k4vTn1y2grpmkLQ4Xw5to19bxWbMioTCeHQfeHjkG"
  );

  const [configPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("config")],
    program.programId
  );

  const [pendingRolePda] = PublicKey.findProgramAddressSync(
    [Buffer.from("pending_role"), walletToApprove.toBuffer()],
    program.programId
  );

  const [roleRegistryPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("role_registry"), walletToApprove.toBuffer()],
    program.programId
  );

  const tx = await program.methods
    .validateRole()
    .accountsPartial({
      programConfig: configPda,
      pendingRole: pendingRolePda,
      roleRegistry: roleRegistryPda,
      authority: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  console.log("Rol aprobado. Tx:", tx);
  console.log("Wallet aprobada:", walletToApprove.toBase58());
}

main().catch((err) => {
  console.error("Error aprobando rol:", err);
  process.exit(1);
});