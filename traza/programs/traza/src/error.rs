use anchor_lang::prelude::*;

#[error_code]
pub enum TrazaError {
    #[msg("Only the program authority can validate roles")]
    UnauthorizedAuthority,

    #[msg("User already has a validated role")]
    RoleAlreadyValidated,

    #[msg("Invalid role registry account")]
    InvalidRoleRegistryAccount,

    #[msg("User already has a pending role registration")]
    PendingRoleAlreadyExists,

    #[msg("Invalid role: only Producer or Factory can create tokens")]
    InvalidCreatorRole,

    #[msg("Factory must provide at least one source token from a Producer")]
    FactoryRequiresSourceTokens,

    #[msg("Source token must be created by a Producer")]
    InvalidSourceTokenCreator,

    #[msg("Amount must be greater than zero")]
    InvalidAmount,

    #[msg("Transfer amount exceeds token amount")]
    TransferAmountExceedsTokenAmount,

    #[msg("Invalid transfer: only Producer->Factory, Factory->Retailer, Retailer->Consumer allowed")]
    InvalidTransferPath,

    #[msg("Token is already in transfer")]
    TokenAlreadyInTransfer,

    #[msg("Token is not in transfer status")]
    TokenNotInTransfer,

    #[msg("Only full amount transfer supported in v1")]
    PartialTransferNotSupported,

    #[msg("Metadata exceeds maximum length")]
    MetadataTooLong,
}
