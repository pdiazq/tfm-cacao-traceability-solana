use anchor_lang::prelude::*;

#[account]
pub struct BatchEvent {
    pub id: u64,
    pub batch_id: u64,
    pub event_type: String,
    pub actor: Pubkey,
    pub location: String,
    pub timestamp: i64,
    pub metadata: String,
    pub bump: u8,
}

impl BatchEvent {
    pub const EVENT_TYPE_MAX_LEN: usize = 64;
    pub const LOCATION_MAX_LEN: usize = 128;
    pub const METADATA_MAX_LEN: usize = 512;

    pub const LEN: usize =
        8 +
        8 +
        4 + Self::EVENT_TYPE_MAX_LEN +
        32 +
        4 + Self::LOCATION_MAX_LEN +
        8 +
        4 + Self::METADATA_MAX_LEN +
        1;
}