use anchor_lang::prelude::*;
use crate::state::{TraceToken, RoleRegistry, PendingTransfer, Role, TokenBalance};
use crate::error::TrazaError;

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct InitiateTransferParams {
    pub amount: u64,
}

#[derive(Accounts)]
pub struct InitiateTransfer<'info> {
    #[account(
        mut,
        seeds = [b"trace_token", trace_token.mint.as_ref()],
        bump = trace_token.bump
    )]
    pub trace_token: Account<'info, TraceToken>,

    #[account(
        mut,
        seeds = [b"token_balance", trace_token.mint.as_ref(), from.key().as_ref()],
        bump = from_balance.bump,
        constraint = from_balance.balance >= params.amount @ TrazaError::InsufficientBalance
    )]
    pub from_balance: Account<'info, TokenBalance>,

    #[account(
        init,
        payer = from,
        space = 8 + PendingTransfer::LEN,
        seeds = [b"pending_transfer", trace_token.mint.as_ref(), from.key().as_ref(), ctx.accounts.to.key().as_ref()],
        bump
    )]
    pub pending_transfer: Account<'info, PendingTransfer>,

    #[account(
        seeds = [b"role_registry", from.key().as_ref()],
        bump = from_role_registry.bump
    )]
    pub from_role_registry: Account<'info, RoleRegistry>,

    /// CHECK: Receiver - role validated via to_role_registry
    pub to: UncheckedAccount<'info>,

    #[account(
        seeds = [b"role_registry", to.key().as_ref()],
        bump = to_role_registry.bump
    )]
    pub to_role_registry: Account<'info, RoleRegistry>,

    #[account(mut)]
    pub from: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<InitiateTransfer>, params: InitiateTransferParams) -> Result<()> {
    require!(params.amount > 0, TrazaError::InvalidAmount);
    require!(
        ctx.accounts.from.key() != ctx.accounts.to.key(),
        TrazaError::TransferToSelf
    );

    // Validate transfer path: Producer->Factory, Factory->Retailer, Retailer->Consumer
    let from_role = &ctx.accounts.from_role_registry.role;
    let to_role = &ctx.accounts.to_role_registry.role;

    let valid = matches!(
        (from_role, to_role),
        (Role::Producer, Role::Factory)
            | (Role::Factory, Role::Retailer)
            | (Role::Retailer, Role::Consumer)
    );
    require!(valid, TrazaError::InvalidTransferPath);

    let clock = Clock::get()?;
    let (_, bump) = Pubkey::find_program_address(
        &[b"pending_transfer", ctx.accounts.trace_token.mint.as_ref(), ctx.accounts.from.key().as_ref(), ctx.accounts.to.key().as_ref()],
        ctx.program_id,
    );

    let pending = &mut ctx.accounts.pending_transfer;
    pending.token_mint = ctx.accounts.trace_token.mint;
    pending.from = ctx.accounts.from.key();
    pending.to = ctx.accounts.to.key();
    pending.amount = params.amount;
    pending.bump = bump;
    pending.initiated_at = clock.unix_timestamp;

    msg!(
        "Transfer initiated: token={:?} from={:?} to={:?} amount={}",
        pending.token_mint,
        pending.from,
        pending.to,
        pending.amount
    );
    Ok(())
}
