import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Traza } from "../target/types/traza";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { expect } from "chai";

describe("traza", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.traza as Program<Traza>;

  const authority = provider.wallet;
  const producerKeypair = Keypair.generate();
  const factoryKeypair = Keypair.generate();
  const retailerKeypair = Keypair.generate();
  const consumerKeypair = Keypair.generate();

  const [configPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("config")],
    program.programId
  );

  const roleRegistryPda = (wallet: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("role_registry"), wallet.toBuffer()],
      program.programId
    )[0];

  const pendingRolePda = (wallet: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("pending_role"), wallet.toBuffer()],
      program.programId
    )[0];

  const traceTokenPda = (mint: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("trace_token"), mint.toBuffer()],
      program.programId
    )[0];

  const pendingTransferPda = (mint: PublicKey) =>
    PublicKey.findProgramAddressSync(
      [Buffer.from("pending_transfer"), mint.toBuffer()],
      program.programId
    )[0];

  before(async () => {
    const sig = await provider.connection.requestAirdrop(
      producerKeypair.publicKey,
      1e9
    );
    await provider.connection.confirmTransaction(sig);
  });

  it("Initialize program", async () => {
    await program.methods
      .initialize()
      .accounts({
        programConfig: configPda,
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const config = await program.account.programConfig.fetch(configPda);
    expect(config.authority.toString()).to.equal(authority.publicKey.toString());
    expect(config.initialized).to.be.true;
  });

  it("Register and validate Producer role", async () => {
    await program.methods
      .registerRole({ producer: {} })
      .accounts({
        pendingRole: pendingRolePda(producerKeypair.publicKey),
        roleRegistry: roleRegistryPda(producerKeypair.publicKey),
        wallet: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair])
      .rpc();

    await program.methods
      .validateRole()
      .accounts({
        programConfig: configPda,
        pendingRole: pendingRolePda(producerKeypair.publicKey),
        roleRegistry: roleRegistryPda(producerKeypair.publicKey),
        authority: authority.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    const registry = await program.account.roleRegistry.fetch(
      roleRegistryPda(producerKeypair.publicKey)
    );
    expect(registry.role.producer).to.not.be.undefined;
  });

  it("Register and validate Factory, Retailer, Consumer roles", async () => {
    for (const [kp, role] of [
      [factoryKeypair, { factory: {} }],
      [retailerKeypair, { retailer: {} }],
      [consumerKeypair, { consumer: {} }],
    ] as [Keypair, object][]) {
      const sig = await provider.connection.requestAirdrop(kp.publicKey, 1e9);
      await provider.connection.confirmTransaction(sig);

      await program.methods
        .registerRole(role)
        .accounts({
          pendingRole: pendingRolePda(kp.publicKey),
          roleRegistry: roleRegistryPda(kp.publicKey),
          wallet: kp.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([kp])
        .rpc();

      await program.methods
        .validateRole()
        .accounts({
          programConfig: configPda,
          pendingRole: pendingRolePda(kp.publicKey),
          roleRegistry: roleRegistryPda(kp.publicKey),
          authority: authority.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();
    }
  });

  it("Producer creates token", async () => {
    const mint = Keypair.generate();
    await program.methods
      .createToken(new anchor.BN(100), "Coffee batch 001")
      .accounts({
        traceToken: traceTokenPda(mint.publicKey),
        mint: mint.publicKey,
        roleRegistry: roleRegistryPda(producerKeypair.publicKey),
        creator: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair, mint])
      .rpc();

    const token = await program.account.traceToken.fetch(
      traceTokenPda(mint.publicKey)
    );
    expect(token.amount.toNumber()).to.equal(100);
    expect(token.creator.toString()).to.equal(
      producerKeypair.publicKey.toString()
    );
    expect(token.currentOwner.toString()).to.equal(
      producerKeypair.publicKey.toString()
    );
  });

  it("Full flow: Producer -> Factory -> Retailer -> Consumer", async () => {
    const producerMint = Keypair.generate();
    const factoryMint = Keypair.generate();

    await program.methods
      .createToken(new anchor.BN(50), "Raw beans")
      .accounts({
        traceToken: traceTokenPda(producerMint.publicKey),
        mint: producerMint.publicKey,
        roleRegistry: roleRegistryPda(producerKeypair.publicKey),
        creator: producerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([producerKeypair, producerMint])
      .rpc();

    await program.methods
      .createToken(new anchor.BN(50), "Roasted coffee")
      .remainingAccounts([
        {
          pubkey: traceTokenPda(producerMint.publicKey),
          isSigner: false,
          isWritable: false,
        },
      ])
      .accounts({
        traceToken: traceTokenPda(factoryMint.publicKey),
        mint: factoryMint.publicKey,
        roleRegistry: roleRegistryPda(factoryKeypair.publicKey),
        creator: factoryKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([factoryKeypair, factoryMint])
      .rpc();

    await program.methods
      .initiateTransfer(new anchor.BN(50))
      .accounts({
        traceToken: traceTokenPda(factoryMint.publicKey),
        pendingTransfer: pendingTransferPda(factoryMint.publicKey),
        fromRoleRegistry: roleRegistryPda(factoryKeypair.publicKey),
        to: retailerKeypair.publicKey,
        toRoleRegistry: roleRegistryPda(retailerKeypair.publicKey),
        from: factoryKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([factoryKeypair])
      .rpc();

    await program.methods
      .acceptTransfer()
      .accounts({
        traceToken: traceTokenPda(factoryMint.publicKey),
        pendingTransfer: pendingTransferPda(factoryMint.publicKey),
        roleRegistry: roleRegistryPda(retailerKeypair.publicKey),
        to: retailerKeypair.publicKey,
      })
      .signers([retailerKeypair])
      .rpc();

    let token = await program.account.traceToken.fetch(
      traceTokenPda(factoryMint.publicKey)
    );
    expect(token.currentOwner.toString()).to.equal(
      retailerKeypair.publicKey.toString()
    );

    await program.methods
      .initiateTransfer(new anchor.BN(50))
      .accounts({
        traceToken: traceTokenPda(factoryMint.publicKey),
        pendingTransfer: pendingTransferPda(factoryMint.publicKey),
        fromRoleRegistry: roleRegistryPda(retailerKeypair.publicKey),
        to: consumerKeypair.publicKey,
        toRoleRegistry: roleRegistryPda(consumerKeypair.publicKey),
        from: retailerKeypair.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([retailerKeypair])
      .rpc();

    await program.methods
      .acceptTransfer()
      .accounts({
        traceToken: traceTokenPda(factoryMint.publicKey),
        pendingTransfer: pendingTransferPda(factoryMint.publicKey),
        roleRegistry: roleRegistryPda(consumerKeypair.publicKey),
        to: consumerKeypair.publicKey,
      })
      .signers([consumerKeypair])
      .rpc();

    token = await program.account.traceToken.fetch(
      traceTokenPda(factoryMint.publicKey)
    );
    expect(token.currentOwner.toString()).to.equal(
      consumerKeypair.publicKey.toString()
    );
  });
});
