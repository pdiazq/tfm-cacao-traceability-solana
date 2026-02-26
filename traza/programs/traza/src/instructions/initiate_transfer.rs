use anchor_lang::prelude::*;
use crate::state::{TraceToken, RoleRegistry, PendingTransfer, Role};
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
        bump = trace_token.bump,
        constraint = trace_token.current_owner == from.key() @ TrazaError::InvalidTransferPath,
        constraint = trace_token.status != crate::state::TokenStatus::InTransfer @ TrazaError::TokenAlreadyInTransfer
    )]
    pub trace_token: Account<'info, TraceToken>,

    #[account(
        init,
        payer = from,
        space = 8 + PendingTransfer::LEN,
        seeds = [b"pending_transfer", trace_token.mint.as_ref()],
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
        params.amount <= ctx.accounts.trace_token.amount,
        TrazaError::TransferAmountExceedsTokenAmount
    );

    // V1: Only full transfer supported
    require!(
        params.amount == ctx.accounts.trace_token.amount,
        TrazaError::PartialTransferNotSupported
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
        &[b"pending_transfer", ctx.accounts.trace_token.mint.as_ref()],
        ctx.program_id,
    );

    let pending = &mut ctx.accounts.pending_transfer;
    pending.token_mint = ctx.accounts.trace_token.mint;
    pending.from = ctx.accounts.from.key();
    pending.to = ctx.accounts.to.key();
    pending.amount = params.amount;
    pending.bump = bump;
    pending.initiated_at = clock.unix_timestamp;

    let token = &mut ctx.accounts.trace_token;
    token.status = crate::state::TokenStatus::InTransfer;

    msg!(
        "Transfer initiated: token={:?} from={:?} to={:?} amount={}",
        pending.token_mint,
        pending.from,
        pending.to,
        pending.amount
    );
    Ok(())
}
