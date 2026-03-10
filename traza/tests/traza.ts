import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { expect } from "chai";
import { Traza } from "../target/types/traza";

describe("traza - cacao traceability", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.traza as Program<Traza>;
  const authority = provider.wallet;

  const producerKeypair = Keypair.generate();
  const processorKeypair = Keypair.generate();

  const [configPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("config")],
    program.programId
  );

  const pendingActorPda = (wallet: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("pending_actor"), wallet.toBuffer()],
      program.programId
    )[0];

  const actorPda = (wallet: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("actor"), wallet.toBuffer()],
      program.programId
    )[0];

  const batchPda = (creator: PublicKey, batchId: anchor.BN) =>
    PublicKey.findProgramAddressSync(
      [
        Buffer.from("batch"),
        creator.toBuffer(),
        batchId.toArrayLike(Buffer, "le", 8),
      ],
      program.programId
    )[0];

  const eventPda = (batchId: anchor.BN, eventId: anchor.BN) =>
    PublicKey.findProgramAddressSync(
      [
        Buffer.from("event"),
        batchId.toArrayLike(Buffer, "le", 8),
        eventId.toArrayLike(Buffer, "le", 8),
      ],
      program.programId
    )[0];

  const certificatePda = (batchId: anchor.BN, certificateId: anchor.BN) =>
    PublicKey.findProgramAddressSync(
      [
        Buffer.from("certificate"),
        batchId.toArrayLike(Buffer, "le", 8),
        certificateId.toArrayLike(Buffer, "le", 8),
      ],
      program.programId
    )[0];

  before(async () => {
    for (const kp of [producerKeypair, processorKeypair]) {
      const sig = await provider.connection.requestAirdrop(kp.publicKey, 2e9);
      await provider.connection.confirmTransaction(sig);
    }
  });

  it("Initialize program", async () => {
    try {
      await program.methods
        .initialize()
        .accountsPartial({
          programConfig: configPda,
          authority: authority.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
    } catch (e: any) {
      // Si ya estaba inicializado en localnet, seguimos.
      const msg = e?.message || "";
      if (!msg.includes("already in use")) throw e;
    }

    const config = await program.account.programConfig.fetch(configPda);
    expect(config.authority.toString()).to.equal(authority.publicKey.toString());
    expect(config.initialized).to.equal(true);
  });

  it("Register and validate Producer actor", async () => {
    await program.methods
      .registerActor("Finca El Roble", { producer: {} }, "Tumaco, Colombia")
      .accountsPartial({
        pendingActor: pendingActorPda(producerKeypair.publicKey),
        actor: actorPda(producerKeypair.publicKey),
        wallet: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair])
      .rpc();

    await program.methods
      .validateActor()
      .accountsPartial({
        programConfig: configPda,
        pendingActor: pendingActorPda(producerKeypair.publicKey),
        actor: actorPda(producerKeypair.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const actor = await program.account.actor.fetch(
      actorPda(producerKeypair.publicKey)
    );

    expect(actor.wallet.toString()).to.equal(
      producerKeypair.publicKey.toString()
    );
    expect(actor.isActive).to.equal(true);
    expect(actor.role.producer).to.not.equal(undefined);
  });

  it("Register and validate Processor actor", async () => {
    await program.methods
      .registerActor("Procesadora Cacao Andino", { processor: {} }, "Pasto, Colombia")
      .accountsPartial({
        pendingActor: pendingActorPda(processorKeypair.publicKey),
        actor: actorPda(processorKeypair.publicKey),
        wallet: processorKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([processorKeypair])
      .rpc();

    await program.methods
      .validateActor()
      .accountsPartial({
        programConfig: configPda,
        pendingActor: pendingActorPda(processorKeypair.publicKey),
        actor: actorPda(processorKeypair.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const actor = await program.account.actor.fetch(
      actorPda(processorKeypair.publicKey)
    );

    expect(actor.wallet.toString()).to.equal(
      processorKeypair.publicKey.toString()
    );
    expect(actor.isActive).to.equal(true);
    expect(actor.role.processor).to.not.equal(undefined);
  });

  it("Producer creates cacao batch", async () => {
    const batchId = new anchor.BN(1);

    await program.methods
      .createBatch(
        "Cacao fino de aroma",
        "Finca El Roble, Tumaco",
        new anchor.BN(1000),
        "kg",
        new anchor.BN(Math.floor(Date.now() / 1000))
      )
      .accountsPartial({
        programConfig: configPda,
        actor: actorPda(producerKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        creator: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );

    expect(batch.id.toNumber()).to.equal(1);
    expect(batch.creator.toString()).to.equal(
      producerKeypair.publicKey.toString()
    );
    expect(batch.product).to.equal("Cacao fino de aroma");
    expect(batch.origin).to.equal("Finca El Roble, Tumaco");
    expect(batch.quantity.toNumber()).to.equal(1000);
    expect(batch.unit).to.equal("kg");
    expect(batch.status.created).to.not.equal(undefined);
  });

  it("Producer records harvest event", async () => {
    const batchId = new anchor.BN(1);
    const eventId = new anchor.BN(1);

    await program.methods
      .recordEvent(
        batchId,
        "Harvest",
        "Tumaco, Colombia",
        '{"temperature":"28C","humidity":"70%","notes":"Manual harvest"}'
      )
      .accountsPartial({
        programConfig: configPda,
        actor: actorPda(producerKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        batchEvent: eventPda(batchId, eventId),
        actorWallet: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair])
      .rpc();

    const event = await program.account.batchEvent.fetch(
      eventPda(batchId, eventId)
    );
    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );

    expect(event.id.toNumber()).to.equal(1);
    expect(event.batchId.toNumber()).to.equal(1);
    expect(event.eventType).to.equal("Harvest");
    expect(event.actor.toString()).to.equal(producerKeypair.publicKey.toString());
    expect(batch.eventCount).to.equal(1);
  });

  it("Update batch status: Created -> Harvested", async () => {
    const batchId = new anchor.BN(1);

    await program.methods
      .updateBatchStatus(batchId, { harvested: {} })
      .accountsPartial({
        actor: actorPda(producerKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: producerKeypair.publicKey,
      })
      .signers([producerKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );

    expect(batch.status.harvested).to.not.equal(undefined);
  });

  it("Authority issues certificate", async () => {
    const batchId = new anchor.BN(1);
    const certificateId = new anchor.BN(1);

    await program.methods
      .issueCertificate(
        batchId,
        "Sanitary Certificate",
        "ICA Colombia",
        "QmSanitaryHash123456789",
        new anchor.BN(Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60)
      )
      .accountsPartial({
        programConfig: configPda,
        batch: batchPda(producerKeypair.publicKey, batchId),
        certificate: certificatePda(batchId, certificateId),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const certificate = await program.account.certificate.fetch(
      certificatePda(batchId, certificateId)
    );
    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );

    expect(certificate.id.toNumber()).to.equal(1);
    expect(certificate.batchId.toNumber()).to.equal(1);
    expect(certificate.certificateType).to.equal("Sanitary Certificate");
    expect(certificate.issuer).to.equal("ICA Colombia");
    expect(certificate.status.valid).to.not.equal(undefined);
    expect(batch.certificateCount).to.equal(1);
  });
});