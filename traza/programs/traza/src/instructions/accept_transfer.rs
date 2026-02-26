use anchor_lang::prelude::*;
use crate::state::{TraceToken, PendingTransfer, RoleRegistry, TokenStatus};
use crate::error::TrazaError;

#[derive(Accounts)]
pub struct AcceptTransfer<'info> {
    #[account(
        mut,
        seeds = [b"trace_token", trace_token.mint.as_ref()],
        bump = trace_token.bump,
        constraint = trace_token.status == TokenStatus::InTransfer @ TrazaError::TokenNotInTransfer
    )]
    pub trace_token: Account<'info, TraceToken>,

    #[account(
        mut,
        close = to,
        seeds = [b"pending_transfer", trace_token.mint.as_ref()],
        bump = pending_transfer.bump,
        constraint = pending_transfer.to == to.key() @ TrazaError::InvalidTransferPath
    )]
    pub pending_transfer: Account<'info, PendingTransfer>,

    #[account(
        seeds = [b"role_registry", to.key().as_ref()],
        bump = role_registry.bump
    )]
    pub role_registry: Account<'info, RoleRegistry>,

    #[account(mut)]
    pub to: Signer<'info>,
}

pub fn handler(ctx: Context<AcceptTransfer>) -> Result<()> {
    let pending = &ctx.accounts.pending_transfer;
    let token = &mut ctx.accounts.trace_token;

    require!(
        pending.amount == token.amount,
        TrazaError::InvalidTransferPath
    );

    token.current_owner = ctx.accounts.to.key();
    token.status = TokenStatus::Accepted;

    msg!(
        "Transfer accepted: token={:?} new_owner={:?}",
        token.mint,
        token.current_owner
    );
    Ok(())
}
