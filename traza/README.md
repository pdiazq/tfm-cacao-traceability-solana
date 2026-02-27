# Traza - Programa de Trazabilidad en Solana

Programa Anchor para trazabilidad de productos en la cadena de suministro, con roles validados y transferencias en escrow.

---

## Arquitectura del programa

El programa está escrito en **Rust** con el framework **Anchor** (v0.32.1). El código se organiza así:

```
programs/traza/src/
├── lib.rs          # Punto de entrada: módulo #[program], instrucciones y structs #[derive(Accounts)]
├── error.rs        # Errores personalizados (TrazaError)
└── state/          # Estructuras de datos de las cuentas
    ├── mod.rs
    ├── program_config.rs
    ├── role_registry.rs
    ├── pending_role.rs
    ├── trace_token.rs
    ├── pending_transfer.rs
    └── token_balance.rs
```

### Estructura de lib.rs

- **`#[program] pub mod traza`**: Define las 6 instrucciones (`initialize`, `register_role`, `validate_role`, `create_token`, `initiate_transfer`, `accept_transfer`) y su lógica de negocio.
- **`#[derive(Accounts)]`**: Una struct por instrucción (Initialize, RegisterRole, ValidateRole, CreateToken, InitiateTransfer, AcceptTransfer) que valida cuentas y seeds.
- Todo el flujo de instrucciones y validación está concentrado en `lib.rs`; el módulo `state` exporta los tipos de datos de las cuentas.

### Dependencias

- `anchor-lang` 0.32.1 (feature `init-if-needed` para `init_if_needed` en cuentas).
- Rust 1.89.0 (definido en `rust-toolchain.toml`).

### Program ID

```
27w7DWngggMpAEERYrin3rKKkcyaLFvV5VmvP2nEKFys
```

### Compilación

```bash
anchor build   # Genera el .so y el IDL en target/deploy/
```

---

## Roles

| Rol      | Descripción                              | Puede crear tokens | Puede transferir a |
|----------|------------------------------------------|--------------------|--------------------|
| Producer | Productor                                | Sí                 | Factory            |
| Factory  | Fábrica                                  | Sí (con source_tokens) | Retailer     |
| Retailer | Distribuidor                             | No                 | Consumer           |
| Consumer | Consumidor final                         | No                 | -                  |

La Factory debe referenciar tokens del Producer al crear un nuevo token (trazabilidad de origen).

---

## PDAs (Program Derived Addresses)

| PDA                 | Seeds                                   | Descripción                                           |
|---------------------|-----------------------------------------|-------------------------------------------------------|
| ProgramConfig       | `["config"]`                            | Configuración global (1 sola cuenta)                  |
| RoleRegistry        | `["role_registry", wallet]`             | Rol validado de cada wallet                           |
| PendingRoleRegistration | `["pending_role", wallet]`          | Solicitud de rol pendiente de validación              |
| TraceToken          | `["trace_token", mint]`                 | Token de trazabilidad (mint = keypair del creador)    |
| PendingTransfer     | `["pending_transfer", token_mint]`      | Transferencia en escrow (1 por token)                 |

### Cálculo en TypeScript

```typescript
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
```

### Creación del mint en TraceToken y PendingTransfer

**TraceToken**

El `mint` no es un SPL Token mint. Es un **Keypair generado por el cliente** que actúa como identificador único del token de trazabilidad. El cliente:

1. Genera un nuevo Keypair: `const mint = Keypair.generate()`
2. Usa `mint.publicKey` para derivar la PDA del TraceToken
3. Pasa `mint` como signer en `create_token` (el programa verifica que la PDA coincide con ese pubkey)

El PDA del TraceToken se deriva con `["trace_token", mint.publicKey]`. Así cada token tiene un mint distinto y una PDA única.

**PendingTransfer**

El `token_mint` en PendingTransfer **no se crea ahí**. Es el mismo `mint` del TraceToken que se está transfiriendo. El PDA de PendingTransfer usa ese mint como seed: `["pending_transfer", trace_token.mint]`, de modo que cada token solo pueda tener una transferencia pendiente a la vez.

```typescript
// Ejemplo: crear token
const mint = Keypair.generate();
await program.methods.createToken(new BN(100), "Lote 001")
  .accounts({
    traceToken: traceTokenPda(mint.publicKey),  // PDA derivada del mint
    mint: mint.publicKey,
    // ...
  })
  .signers([creator, mint])  // mint debe firmar
  .rpc();

// initiate_transfer: PendingTransfer usa el mismo mint
await program.methods.initiateTransfer(new BN(100))
  .accounts({
    traceToken: traceTokenPda(mint.publicKey),
    pendingTransfer: pendingTransferPda(mint.publicKey),  // mismo mint
    // ...
  })
  .rpc();
```

---

## Cuentas

### ProgramConfig

Configuración global del programa.

| Campo       | Tipo    | Descripción                        |
|------------|---------|------------------------------------|
| authority  | Pubkey  | Creador del contrato (valida roles)|
| bump       | u8      | Bump del PDA                       |
| initialized| bool    | Si está inicializado               |

### RoleRegistry

Rol validado de una wallet.

| Campo       | Tipo  | Descripción            |
|------------|-------|------------------------|
| wallet     | Pubkey| Wallet del usuario     |
| role       | Role  | Producer, Factory, Retailer, Consumer |
| bump       | u8    | Bump del PDA           |
| validated_at | i64 | Timestamp de validación|

### PendingRoleRegistration

Solicitud de rol pendiente de aprobación por el authority.

| Campo          | Tipo  | Descripción     |
|----------------|-------|-----------------|
| wallet         | Pubkey| Solicitante     |
| requested_role | Role  | Rol solicitado  |
| bump           | u8    | Bump del PDA    |
| created_at     | i64   | Timestamp       |

### TraceToken

Token de trazabilidad (lote/producto).

| Campo         | Tipo        | Descripción                              |
|---------------|-------------|------------------------------------------|
| mint          | Pubkey      | Identificador único (keypair del creador)|
| creator       | Pubkey      | Creador                                  |
| creator_role  | Role        | Producer o Factory                       |
| current_owner | Pubkey      | Propietario actual                       |
| amount        | u64         | Cantidad                                 |
| status        | TokenStatus | Created, InTransfer, Accepted            |
| source_tokens | Vec<Pubkey> | Mints de tokens origen (solo Factory)    |
| metadata      | String      | Descripción (max 256 chars)              |
| created_at    | i64         | Timestamp                                |
| bump          | u8          | Bump del PDA                             |

### PendingTransfer

Transferencia pendiente de aceptación (escrow).

| Campo        | Tipo   | Descripción        |
|--------------|--------|--------------------|
| token_mint   | Pubkey | Token en escrow    |
| from         | Pubkey | Emisor             |
| to           | Pubkey | Receptor           |
| amount       | u64    | Cantidad           |
| bump         | u8     | Bump del PDA       |
| initiated_at | i64    | Timestamp          |

---

## Instrucciones

### initialize

Inicializa la configuración del programa. Solo se ejecuta una vez.

**Cuentas:**
- `program_config` (PDA, init) - Config
- `authority` (signer) - Creador del contrato
- `system_program`

---

### register_role

Solicita un rol. Crea `PendingRoleRegistration`. El usuario aún no tiene rol validado.

**Args:** `requested_role: Role`

**Cuentas:**
- `pending_role` (PDA, init)
- `role_registry` (PDA del wallet) - Debe estar vacía
- `wallet` (signer)
- `system_program`

---

### validate_role

El authority valida una solicitud de rol. Cierra `PendingRoleRegistration` y crea `RoleRegistry`.

**Cuentas:**
- `program_config` (PDA)
- `pending_role` (PDA, close)
- `role_registry` (PDA, init)
- `authority` (signer)
- `system_program`

---

### create_token

Crea un token de trazabilidad. Solo Producer o Factory con rol validado.

**Args:** `amount: u64`, `metadata: String`

**Cuentas:**
- `trace_token` (PDA, init)
- `mint` (signer) - Keypair único para este token
- `role_registry` (PDA del creator)
- `creator` (signer)
- `system_program`

**Remaining accounts (solo Factory):** Cuentas `TraceToken` de Producer usados como origen.

---

### initiate_transfer

Inicia una transferencia. El token pasa a escrow (`status = InTransfer`). Solo se permite transferencia del monto total.

**Quién firma:** Firma el **emisor** (`from`), es decir, el propietario actual del token. Es quien inicia la transferencia y paga el coste de crear la cuenta PendingTransfer. El receptor (`to`) no firma ni paga nada en este paso.

**Args:** `amount: u64`

**Transiciones válidas:**
- Producer → Factory
- Factory → Retailer
- Retailer → Consumer

**Cuentas:**
- `trace_token` (PDA, mut)
- `pending_transfer` (PDA, init)
- `from_role_registry` (PDA de from)
- `to` - Receptor
- `to_role_registry` (PDA de to)
- `from` (signer)
- `system_program`

---

### accept_transfer

El receptor acepta la transferencia. El token sale del escrow y cambia de propietario. Se cierra `PendingTransfer`.

**Quién firma:** Firma el **receptor** (`to`). Es quien acepta recibir el token. Al cerrar PendingTransfer, los lamports de esa cuenta se transfieren al receptor (reembolso parcial del rent). El emisor no participa en esta instrucción.

**Cuentas:**
- `trace_token` (PDA, mut)
- `pending_transfer` (PDA, close)
- `role_registry` (PDA de to)
- `to` (signer)

---

## Consultas: cómo obtener los datos

### Peticiones de rol pendientes de validar (para el authority)

El authority debe ver todas las solicitudes de rol que esperan aprobación. Son cuentas `PendingRoleRegistration` del programa. Como cada wallet tiene como máximo una (PDA por wallet), se obtienen listando todas las cuentas de ese tipo:

```typescript
const pendientes = await program.account.pendingRoleRegistration.all();
// pendientes[].publicKey = PDA, pendientes[].account = { wallet, requestedRole, ... }
```

Si conoces la wallet del solicitante, puedes obtener directamente su PDA:

```typescript
const pending = await program.account.pendingRoleRegistration.fetch(
  pendingRolePda(solicitanteWallet)
);
```

### Tokens que he creado y su estado

Los tokens creados por una wallet tienen `creator == miWallet`. Se filtran con `getProgramAccounts`:

```typescript
// Offset del campo creator: 8 (discriminator) + 32 (mint) = 40
const misTokens = await program.account.traceToken.all([
  { memcmp: { offset: 40, bytes: miWallet.toBase58() } }
]);

// Cada token tiene: mint, creator, creatorRole, currentOwner, amount, status, metadata, ...
// status puede ser: { created: {} } | { inTransfer: {} } | { accepted: {} }
```

Estados posibles de `status`:

| Estado      | Significado                                      |
|-------------|--------------------------------------------------|
| `created`   | Token creado, en poder del owner                  |
| `inTransfer`| En escrow, transferencia pendiente de aceptar     |
| `accepted`  | Transferencia completada, ya en poder del receptor|

### Tokens transferidos a mí que tengo que aceptar

Son cuentas `PendingTransfer` donde `to == miWallet`. Se filtran por el campo `to`:

```typescript
// Offset del campo to: 8 (disc) + 32 (token_mint) + 32 (from) = 72
const transferenciasPendientes = await program.account.pendingTransfer.all([
  { memcmp: { offset: 72, bytes: miWallet.toBase58() } }
]);

// Cada una tiene: tokenMint, from, to, amount, initiatedAt
// Para aceptar, necesitas el tokenMint (y las cuentas TraceToken + PendingTransfer)
```

Resumen de filtros `memcmp`:

| Cuenta                  | Campo a filtrar | Offset |
|-------------------------|-----------------|--------|
| TraceToken              | creator         | 40     |
| TraceToken              | currentOwner    | 76     |
| PendingTransfer         | to              | 72     |
| PendingTransfer         | from            | 40     |

---

## Flujo de trazabilidad

```
Producer crea token (raw) 
    → Factory crea token (referenciando token Producer)
    → initiate_transfer(Factory → Retailer)
    → accept_transfer (Retailer acepta)
    → initiate_transfer(Retailer → Consumer)
    → accept_transfer (Consumer acepta)
```

## Build y tests

```bash
anchor build
anchor test
```
