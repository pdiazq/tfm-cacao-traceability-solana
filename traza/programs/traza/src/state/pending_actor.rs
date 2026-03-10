use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug, PartialEq, Eq)]
pub enum ActorRole {
    Producer,
    Processor,
    Transporter,
    Exporter,
    Authority,
    Auditor,
}

#[account]
pub struct PendingActor {
    pub wallet: Pubkey,
    pub name: String,
    pub requested_role: ActorRole,
    pub location: String,
    pub created_at: i64,
    pub bump: u8,
}

impl PendingActor {
    pub const NAME_MAX_LEN: usize = 64;
    pub const LOCATION_MAX_LEN: usize = 128;

    pub const LEN: usize =
        32 +
        4 + Self::NAME_MAX_LEN +
        1 +
        4 + Self::LOCATION_MAX_LEN +
        8 +
        1;
}