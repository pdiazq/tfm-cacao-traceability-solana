use anchor_lang::prelude::*;
use crate::state::ProgramConfig;

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + ProgramConfig::LEN,
        seeds = [b"config"],
        bump
    )]
    pub program_config: Account<'info, ProgramConfig>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<Initialize>) -> Result<()> {
    let config = &mut ctx.accounts.program_config;
    let (_, bump) = Pubkey::find_program_address(&[b"config"], &ctx.program_id);
    config.authority = ctx.accounts.authority.key();
    config.bump = bump;
    config.initialized = true;
    msg!("Program initialized by: {:?}", config.authority);
    Ok(())
}
