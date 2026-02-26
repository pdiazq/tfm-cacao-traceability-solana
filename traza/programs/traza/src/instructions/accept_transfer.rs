use anchor_lang::prelude::*;
use crate::state::{TraceToken, PendingTransfer, RoleRegistry, TokenStatus, TokenBalance};
use crate::error::TrazaError;

#[derive(Accounts)]
pub struct AcceptTransfer<'info> {
    #[account(
        mut,
        seeds = [b"trace_token", trace_token.mint.as_ref()],
        bump = trace_token.bump
    )]
    pub trace_token: Account<'info, TraceToken>,

    #[account(
        mut,
        close = to,
        seeds = [b"pending_transfer", trace_token.mint.as_ref(), pending_transfer.from.as_ref(), to.key().as_ref()],
        bump = pending_transfer.bump,
        constraint = pending_transfer.to == to.key() @ TrazaError::InvalidTransferPath
    )]
    pub pending_transfer: Account<'info, PendingTransfer>,

    #[account(
        mut,
        seeds = [b"token_balance", trace_token.mint.as_ref(), pending_transfer.from.as_ref()],
        bump = from_balance.bump
    )]
    pub from_balance: Account<'info, TokenBalance>,

    #[account(
        init_if_needed,
        payer = to,
        space = 8 + TokenBalance::LEN,
        seeds = [b"token_balance", trace_token.mint.as_ref(), to.key().as_ref()],
        bump,
        constraint = to_balance.token_mint == trace_token.mint || to_balance.owner == Pubkey::default()
    )]
    pub to_balance: Account<'info, TokenBalance>,

    #[account(
        seeds = [b"role_registry", to.key().as_ref()],
        bump = role_registry.bump
    )]
    pub role_registry: Account<'info, RoleRegistry>,

    #[account(mut)]
    pub to: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<AcceptTransfer>) -> Result<()> {
    let pending = &ctx.accounts.pending_transfer;
    let clock = Clock::get()?;
    let (_, to_bump) = Pubkey::find_program_address(
        &[b"token_balance", ctx.accounts.trace_token.mint.as_ref(), ctx.accounts.to.key().as_ref()],
        ctx.program_id,
    );

    // Transfer from sender's balance
    ctx.accounts.from_balance.balance = ctx.accounts.from_balance.balance
        .checked_sub(pending.amount)
        .ok_or(TrazaError::InsufficientBalance)?;
    ctx.accounts.from_balance.last_updated = clock.unix_timestamp;

    // Add to receiver's balance
    let to_balance = &mut ctx.accounts.to_balance;
    if to_balance.owner == Pubkey::default() {
        // Initialize new balance account
        to_balance.token_mint = ctx.accounts.trace_token.mint;
        to_balance.owner = ctx.accounts.to.key();
        to_balance.bump = to_bump;
    }
    to_balance.balance = to_balance.balance
        .checked_add(pending.amount)
        .ok_or(TrazaError::TransferAmountExceedsTokenAmount)?;
    to_balance.last_updated = clock.unix_timestamp;

    msg!(
        "Transfer accepted: token={:?} from={:?} to={:?} amount={}",
        pending.token_mint,
        pending.from,
        pending.to,
        pending.amount
    );
    Ok(())
}
