use anchor_lang::prelude::*;
use super::Role;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum TokenStatus {
    Created,
    InTransfer,
    Accepted,
}

#[account]
pub struct TraceToken {
    pub mint: Pubkey,
    pub creator: Pubkey,
    pub creator_role: Role,
    pub total_supply: u64,
    pub status: TokenStatus,
    pub source_tokens: Vec<Pubkey>,
    pub metadata: String,
    pub created_at: i64,
    pub bump: u8,
}

impl TraceToken {
    pub const METADATA_MAX_LEN: usize = 256;
    pub const SOURCE_TOKENS_MAX: usize = 10;

    // discriminator(8) + mint(32) + creator(32) + creator_role(4) + total_supply(8)
    // + status(4) + source_tokens(4+32*10) + metadata(4+256) + created_at(8) + bump(1)
    pub const LEN: usize = 8 + 32 + 32 + 4 + 8 + 4 + (4 + 32 * Self::SOURCE_TOKENS_MAX) + 4 + Self::METADATA_MAX_LEN + 8 + 1;

}
