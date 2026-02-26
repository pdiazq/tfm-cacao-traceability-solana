use anchor_lang::prelude::*;
use crate::state::{TraceToken, RoleRegistry, Role, TokenStatus, TokenBalance};
use crate::error::TrazaError;

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct CreateTokenParams {
    pub amount: u64,
    pub metadata: String,
}

#[derive(Accounts)]
pub struct CreateToken<'info> {
    #[account(
        init,
        payer = creator,
        space = 8 + TraceToken::LEN,
        seeds = [b"trace_token", mint.key().as_ref()],
        bump
    )]
    pub trace_token: Account<'info, TraceToken>,

    #[account(
        init,
        payer = creator,
        space = 8 + TokenBalance::LEN,
        seeds = [b"token_balance", mint.key().as_ref(), creator.key().as_ref()],
        bump
    )]
    pub creator_balance: Account<'info, TokenBalance>,

    pub mint: Signer<'info>,

    #[account(
        seeds = [b"role_registry", creator.key().as_ref()],
        bump = role_registry.bump,
        constraint = role_registry.role == Role::Producer || role_registry.role == Role::Factory @ TrazaError::InvalidCreatorRole
    )]
    pub role_registry: Account<'info, RoleRegistry>,

    #[account(mut)]
    pub creator: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<CreateToken>, params: CreateTokenParams) -> Result<()> {
    require!(params.amount > 0, TrazaError::InvalidAmount);
    require!(
        params.metadata.len() <= TraceToken::METADATA_MAX_LEN,
        TrazaError::MetadataTooLong
    );

    let clock = Clock::get()?;
    let (_, token_bump) = Pubkey::find_program_address(
        &[b"trace_token", ctx.accounts.mint.key().as_ref()],
        ctx.program_id,
    );
    let (_, balance_bump) = Pubkey::find_program_address(
        &[b"token_balance", ctx.accounts.mint.key().as_ref(), ctx.accounts.creator.key().as_ref()],
        ctx.program_id,
    );

    let token = &mut ctx.accounts.trace_token;
    token.mint = ctx.accounts.mint.key();
    token.creator = ctx.accounts.creator.key();
    token.creator_role = ctx.accounts.role_registry.role.clone();
    token.total_supply = params.amount;
    token.status = TokenStatus::Created;
    token.source_tokens = vec![];
    token.metadata = params.metadata;
    token.created_at = clock.unix_timestamp;
    token.bump = token_bump;

    let balance = &mut ctx.accounts.creator_balance;
    balance.token_mint = ctx.accounts.mint.key();
    balance.owner = ctx.accounts.creator.key();
    balance.balance = params.amount;
    balance.bump = balance_bump;
    balance.last_updated = clock.unix_timestamp;

    // Factory must provide source tokens via remaining_accounts
    if token.creator_role == Role::Factory {
        let remaining = ctx.remaining_accounts;
        require!(remaining.len() > 0, TrazaError::FactoryRequiresSourceTokens);
        require!(
            remaining.len() <= TraceToken::SOURCE_TOKENS_MAX,
            TrazaError::FactoryRequiresSourceTokens
        );

        for acc in remaining.iter() {
            let data = acc.try_borrow_data()?;
            require!(data.len() >= 8 + 32 + 32 + 4, TrazaError::InvalidSourceTokenCreator);
            let mut offset = 8; // skip discriminator
            let mint = Pubkey::try_from_slice(&data[offset..offset + 32])?;
            offset += 32;
            let _creator = Pubkey::try_from_slice(&data[offset..offset + 32])?;
            offset += 32;
            let creator_role_byte = data[offset]; // Role enum: Producer=0, Factory=1, Retailer=2, Consumer=3
            require!(
                creator_role_byte == 0,
                TrazaError::InvalidSourceTokenCreator
            );
            token.source_tokens.push(mint);
        }
    }

    msg!("Token created: mint={:?}, total_supply={}, creator={:?}", token.mint, token.total_supply, token.creator);
    Ok(())
}
