use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug, PartialEq, Eq)]
pub enum BatchStatus {
    Created,
    Harvested,
    Fermented,
    Dried,
    InTransit,
    Stored,
    Certified,
    Exported,
    Delivered,
}

#[account]
pub struct Batch {
    pub id: u64,
    pub creator: Pubkey,
    pub product: String,
    pub origin: String,
    pub quantity: u64,
    pub unit: String,
    pub harvest_date: i64,
    pub created_at: i64,
    pub status: BatchStatus,
    pub event_count: u32,
    pub certificate_count: u32,
    pub bump: u8,
}

impl Batch {
    pub const PRODUCT_MAX_LEN: usize = 64;
    pub const ORIGIN_MAX_LEN: usize = 128;
    pub const UNIT_MAX_LEN: usize = 16;

    pub const LEN: usize =
        8 +
        32 +
        4 + Self::PRODUCT_MAX_LEN +
        4 + Self::ORIGIN_MAX_LEN +
        8 +
        4 + Self::UNIT_MAX_LEN +
        8 +
        8 +
        1 +
        4 +
        4 +
        1;
}