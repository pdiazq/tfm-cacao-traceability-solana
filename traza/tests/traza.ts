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
  const transporterKeypair = Keypair.generate();
  const exporterKeypair = Keypair.generate();

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

  const batchId = new anchor.BN(1);
  const harvestEventId = new anchor.BN(1);
  const fermentationEventId = new anchor.BN(2);
  const transportEventId = new anchor.BN(3);
  const certificateId = new anchor.BN(1);

  async function airdrop(kp: Keypair, lamports = 2e9) {
    const sig = await provider.connection.requestAirdrop(kp.publicKey, lamports);
    await provider.connection.confirmTransaction(sig);
  }

  async function expectFailure(
    fn: () => Promise<unknown>,
    contains?: string
  ) {
    try {
      await fn();
      expect.fail("Expected transaction to fail");
    } catch (e: any) {
      const msg = e?.message || e?.toString?.() || "";
      if (contains) {
        expect(msg).to.include(contains);
      }
    }
  }

  before(async () => {
    await airdrop(producerKeypair);
    await airdrop(processorKeypair);
    await airdrop(transporterKeypair);
    await airdrop(exporterKeypair);
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

    const actor = await program.account.actor.fetch(actorPda(producerKeypair.publicKey));
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

    const actor = await program.account.actor.fetch(actorPda(processorKeypair.publicKey));
    expect(actor.isActive).to.equal(true);
    expect(actor.role.processor).to.not.equal(undefined);
  });

  it("Register and validate Transporter actor", async () => {
    await program.methods
      .registerActor("Logistica Pacífico", { transporter: {} }, "Buenaventura, Colombia")
      .accountsPartial({
        pendingActor: pendingActorPda(transporterKeypair.publicKey),
        actor: actorPda(transporterKeypair.publicKey),
        wallet: transporterKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([transporterKeypair])
      .rpc();

    await program.methods
      .validateActor()
      .accountsPartial({
        programConfig: configPda,
        pendingActor: pendingActorPda(transporterKeypair.publicKey),
        actor: actorPda(transporterKeypair.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const actor = await program.account.actor.fetch(actorPda(transporterKeypair.publicKey));
    expect(actor.isActive).to.equal(true);
    expect(actor.role.transporter).to.not.equal(undefined);
  });

  it("Register and validate Exporter actor", async () => {
    await program.methods
      .registerActor("Exportadora Cacao Sur", { exporter: {} }, "Cartagena, Colombia")
      .accountsPartial({
        pendingActor: pendingActorPda(exporterKeypair.publicKey),
        actor: actorPda(exporterKeypair.publicKey),
        wallet: exporterKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([exporterKeypair])
      .rpc();

    await program.methods
      .validateActor()
      .accountsPartial({
        programConfig: configPda,
        pendingActor: pendingActorPda(exporterKeypair.publicKey),
        actor: actorPda(exporterKeypair.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const actor = await program.account.actor.fetch(actorPda(exporterKeypair.publicKey));
    expect(actor.isActive).to.equal(true);
    expect(actor.role.exporter).to.not.equal(undefined);
  });

  it("Producer creates cacao batch", async () => {
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
    expect(batch.product).to.equal("Cacao fino de aroma");
    expect(batch.quantity.toNumber()).to.equal(1000);
    expect(batch.status.created).to.not.equal(undefined);
  });

  it("Producer can record Harvest event", async () => {
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
        batchEvent: eventPda(batchId, harvestEventId),
        actorWallet: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair])
      .rpc();

    const event = await program.account.batchEvent.fetch(
      eventPda(batchId, harvestEventId)
    );
    expect(event.eventType).to.equal("Harvest");
  });

  it("Processor cannot record Harvest event", async () => {
    await expectFailure(() =>
      program.methods
        .recordEvent(
          batchId,
          "Harvest",
          "Pasto, Colombia",
          '{"notes":"should fail"}'
        )
        .accountsPartial({
          programConfig: configPda,
          actor: actorPda(processorKeypair.publicKey),
          batch: batchPda(producerKeypair.publicKey, batchId),
          batchEvent: eventPda(batchId, new anchor.BN(99)),
          actorWallet: processorKeypair.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([processorKeypair])
        .rpc()
    );
  });

  it("Processor can record Fermentation event", async () => {
    await program.methods
      .recordEvent(
        batchId,
        "Fermentation",
        "Pasto, Colombia",
        '{"duration_hours":72,"notes":"controlled fermentation"}'
      )
      .accountsPartial({
        programConfig: configPda,
        actor: actorPda(processorKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        batchEvent: eventPda(batchId, fermentationEventId),
        actorWallet: processorKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([processorKeypair])
      .rpc();

    const event = await program.account.batchEvent.fetch(
      eventPda(batchId, fermentationEventId)
    );
    expect(event.eventType).to.equal("Fermentation");
  });

  it("Transporter can record Transport event", async () => {
    await program.methods
      .recordEvent(
        batchId,
        "Transport",
        "Ruta Tumaco-Buenaventura",
        '{"vehicle":"Truck-27","temperature":"24C"}'
      )
      .accountsPartial({
        programConfig: configPda,
        actor: actorPda(transporterKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        batchEvent: eventPda(batchId, transportEventId),
        actorWallet: transporterKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([transporterKeypair])
      .rpc();

    const event = await program.account.batchEvent.fetch(
      eventPda(batchId, transportEventId)
    );
    expect(event.eventType).to.equal("Transport");
  });

  it("Producer can move status Created -> Harvested", async () => {
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

  it("Transporter cannot move status Harvested -> Fermented", async () => {
    await expectFailure(
      () =>
        program.methods
          .updateBatchStatus(batchId, { fermented: {} })
          .accountsPartial({
            actor: actorPda(transporterKeypair.publicKey),
            batch: batchPda(producerKeypair.publicKey, batchId),
            actorWallet: transporterKeypair.publicKey,
          })
          .signers([transporterKeypair])
          .rpc()
    );
  });

  it("Processor can move status Harvested -> Fermented", async () => {
    await program.methods
      .updateBatchStatus(batchId, { fermented: {} })
      .accountsPartial({
        actor: actorPda(processorKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: processorKeypair.publicKey,
      })
      .signers([processorKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.fermented).to.not.equal(undefined);
  });

  it("Processor can move status Fermented -> Dried", async () => {
    await program.methods
      .updateBatchStatus(batchId, { dried: {} })
      .accountsPartial({
        actor: actorPda(processorKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: processorKeypair.publicKey,
      })
      .signers([processorKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.dried).to.not.equal(undefined);
  });

  it("Transporter can move status Dried -> InTransit", async () => {
    await program.methods
      .updateBatchStatus(batchId, { inTransit: {} })
      .accountsPartial({
        actor: actorPda(transporterKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: transporterKeypair.publicKey,
      })
      .signers([transporterKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.inTransit).to.not.equal(undefined);
  });

  it("Transporter can move status InTransit -> Stored", async () => {
    await program.methods
      .updateBatchStatus(batchId, { stored: {} })
      .accountsPartial({
        actor: actorPda(transporterKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: transporterKeypair.publicKey,
      })
      .signers([transporterKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.stored).to.not.equal(undefined);
  });

  it("Authority issues certificate", async () => {
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

    expect(certificate.certificateType).to.equal("Sanitary Certificate");
    expect(certificate.status.valid).to.not.equal(undefined);
  });

  it("Exporter cannot move status Stored -> Certified", async () => {
    await expectFailure(
      () =>
        program.methods
          .updateBatchStatus(batchId, { certified: {} })
          .accountsPartial({
            actor: actorPda(exporterKeypair.publicKey),
            batch: batchPda(producerKeypair.publicKey, batchId),
            actorWallet: exporterKeypair.publicKey,
          })
          .signers([exporterKeypair])
          .rpc()
    );
  });

  it("Register and validate Authority actor", async () => {
    await program.methods
      .registerActor("Autoridad Sanitaria", { authority: {} }, "Bogotá, Colombia")
      .accountsPartial({
        pendingActor: pendingActorPda(authority.publicKey),
        actor: actorPda(authority.publicKey),
        wallet: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    await program.methods
      .validateActor()
      .accountsPartial({
        programConfig: configPda,
        pendingActor: pendingActorPda(authority.publicKey),
        actor: actorPda(authority.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const actor = await program.account.actor.fetch(actorPda(authority.publicKey));
    expect(actor.role.authority).to.not.equal(undefined);
    expect(actor.isActive).to.equal(true);
  });  

  it("Authority can move status Stored -> Certified", async () => {
    await program.methods
      .updateBatchStatus(batchId, { certified: {} })
      .accountsPartial({
        actor: actorPda(authority.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: authority.publicKey,
      })
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.certified).to.not.equal(undefined);
  });

  it("Exporter can move status Certified -> Exported", async () => {
    await program.methods
      .updateBatchStatus(batchId, { exported: {} })
      .accountsPartial({
        actor: actorPda(exporterKeypair.publicKey),
        batch: batchPda(producerKeypair.publicKey, batchId),
        actorWallet: exporterKeypair.publicKey,
      })
      .signers([exporterKeypair])
      .rpc();

    const batch = await program.account.batch.fetch(
      batchPda(producerKeypair.publicKey, batchId)
    );
    expect(batch.status.exported).to.not.equal(undefined);
  });

  it("Authority revokes certificate", async () => {
    await program.methods
      .revokeCertificate(batchId, certificateId)
      .accountsPartial({
        programConfig: configPda,
        certificate: certificatePda(batchId, certificateId),
        authority: authority.publicKey,
      })
      .rpc();

    const certificate = await program.account.certificate.fetch(
      certificatePda(batchId, certificateId)
    );
    expect(certificate.status.revoked).to.not.equal(undefined);
  });
});