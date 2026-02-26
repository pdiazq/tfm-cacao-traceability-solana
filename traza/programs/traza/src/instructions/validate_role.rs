use anchor_lang::prelude::*;
use crate::state::{ProgramConfig, PendingRoleRegistration, RoleRegistry};

#[derive(Accounts)]
pub struct ValidateRole<'info> {
    #[account(
        seeds = [b"config"],
        bump = program_config.bump,
        constraint = program_config.authority == authority.key() @ crate::error::TrazaError::UnauthorizedAuthority
    )]
    pub program_config: Account<'info, ProgramConfig>,

    #[account(
        mut,
        close = authority,
        seeds = [b"pending_role", pending_role.wallet.as_ref()],
        bump = pending_role.bump
    )]
    pub pending_role: Account<'info, PendingRoleRegistration>,

    #[account(
        init,
        payer = authority,
        space = 8 + RoleRegistry::LEN,
        seeds = [b"role_registry", pending_role.wallet.as_ref()],
        bump
    )]
    pub role_registry: Account<'info, RoleRegistry>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<ValidateRole>) -> Result<()> {
    let pending = &ctx.accounts.pending_role;
    let clock = Clock::get()?;
    let (_, bump) = Pubkey::find_program_address(
        &[b"role_registry", pending.wallet.as_ref()],
        ctx.program_id,
    );

    let registry = &mut ctx.accounts.role_registry;
    registry.wallet = pending.wallet;
    registry.role = pending.requested_role.clone();
    registry.bump = bump;
    registry.validated_at = clock.unix_timestamp;

    msg!("Role validated: {:?} for {:?}", registry.role, registry.wallet);
    Ok(())
}
