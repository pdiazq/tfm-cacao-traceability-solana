use anchor_lang::prelude::*;
use crate::state::{TraceToken, RoleRegistry, Role, TokenStatus};
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
    let (_, bump) = Pubkey::find_program_address(
        &[b"trace_token", ctx.accounts.mint.key().as_ref()],
        ctx.program_id,
    );

    let token = &mut ctx.accounts.trace_token;
    token.mint = ctx.accounts.mint.key();
    token.creator = ctx.accounts.creator.key();
    token.creator_role = ctx.accounts.role_registry.role.clone();
    token.current_owner = ctx.accounts.creator.key();
    token.amount = params.amount;
    token.status = TokenStatus::Created;
    token.source_tokens = vec![];
    token.metadata = params.metadata;
    token.created_at = clock.unix_timestamp;
    token.bump = bump;

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

    msg!("Token created: mint={:?}, amount={}, creator={:?}", token.mint, token.amount, token.creator);
    Ok(())
}
