use anchor_lang::prelude::*;
use crate::state::{PendingRoleRegistration, Role};
use crate::error::TrazaError;

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct RegisterRoleParams {
    pub requested_role: Role,
}

#[derive(Accounts)]
pub struct RegisterRole<'info> {
    #[account(
        init,
        payer = wallet,
        space = 8 + PendingRoleRegistration::LEN,
        seeds = [b"pending_role", wallet.key().as_ref()],
        bump
    )]
    pub pending_role: Account<'info, PendingRoleRegistration>,

    /// CHECK: Pass RoleRegistry PDA - must be empty (user has no validated role)
    pub role_registry: UncheckedAccount<'info>,

    #[account(mut)]
    pub wallet: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<RegisterRole>, params: RegisterRoleParams) -> Result<()> {
    // Check user doesn't already have a validated role
    let (expected_pda, _) = Pubkey::find_program_address(
        &[b"role_registry", ctx.accounts.wallet.key().as_ref()],
        ctx.program_id,
    );
    require!(ctx.accounts.role_registry.key() == expected_pda, TrazaError::InvalidRoleRegistryAccount);
    require!(ctx.accounts.role_registry.data_is_empty(), TrazaError::RoleAlreadyValidated);

    let clock = Clock::get()?;
    let pending = &mut ctx.accounts.pending_role;
    let (_, bump) = Pubkey::find_program_address(
        &[b"pending_role", ctx.accounts.wallet.key().as_ref()],
        ctx.program_id,
    );

    pending.wallet = ctx.accounts.wallet.key();
    pending.requested_role = params.requested_role.clone();
    pending.bump = bump;
    pending.created_at = clock.unix_timestamp;

    msg!("Role registration requested: {:?} for {:?}", pending.requested_role, pending.wallet);
    Ok(())
}
