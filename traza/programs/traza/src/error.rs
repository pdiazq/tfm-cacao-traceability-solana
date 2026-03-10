use anchor_lang::prelude::*;

#[error_code]
pub enum TrazaError {
    #[msg("Only the program authority can perform this action")]
    UnauthorizedAuthority,

    #[msg("Actor already has a validated role")]
    ActorAlreadyValidated,

    #[msg("Actor already has a pending registration")]
    PendingActorAlreadyExists,

    #[msg("Invalid actor account")]
    InvalidActorAccount,

    #[msg("Only producers can create cacao batches")]
    InvalidBatchCreatorRole,

    #[msg("Only validated and active actors can perform this action")]
    ActorNotAuthorized,

    #[msg("Batch quantity must be greater than zero")]
    InvalidQuantity,

    #[msg("String field exceeds maximum allowed length")]
    FieldTooLong,

    #[msg("Invalid batch status transition")]
    InvalidBatchStatusTransition,

    #[msg("Only the authority can issue certificates")]
    OnlyAuthorityCanIssueCertificates,

    #[msg("Only the authority can revoke certificates")]
    OnlyAuthorityCanRevokeCertificates,

    #[msg("Certificate is already revoked")]
    CertificateAlreadyRevoked,

    #[msg("Certificate is already expired")]
    CertificateAlreadyExpired,

    #[msg("The actor role is not allowed to record this event")]
    InvalidEventActorRole,

    #[msg("The batch does not exist or does not belong to the expected PDA")]
    InvalidBatchAccount,

    #[msg("The actor is inactive")]
    InactiveActor,

    #[msg("The program has already been initialized")]
    ProgramAlreadyInitialized,
}