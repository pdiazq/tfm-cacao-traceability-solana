use anchor_lang::prelude::*;
use crate::state::pending_actor::ActorRole;

#[account]
pub struct Actor {
    pub wallet: Pubkey,
    pub name: String,
    pub role: ActorRole,
    pub location: String,
    pub is_active: bool,
    pub created_at: i64,
    pub bump: u8,
}

impl Actor {
    pub const NAME_MAX_LEN: usize = 64;
    pub const LOCATION_MAX_LEN: usize = 128;

    pub const LEN: usize =
        32 +
        4 + Self::NAME_MAX_LEN +
        1 +
        4 + Self::LOCATION_MAX_LEN +
        1 +
        8 +
        1;
}