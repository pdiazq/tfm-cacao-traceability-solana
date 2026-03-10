use anchor_lang::prelude::*;

#[account]
pub struct ProgramConfig {
    pub authority: Pubkey,
    pub next_batch_id: u64,
    pub next_event_id: u64,
    pub next_certificate_id: u64,
    pub initialized: bool,
    pub bump: u8,
}

impl ProgramConfig {
    pub const LEN: usize =
        32 + // authority
        8 +  // next_batch_id
        8 +  // next_event_id
        8 +  // next_certificate_id
        1 +  // initialized
        1;   // bump
}