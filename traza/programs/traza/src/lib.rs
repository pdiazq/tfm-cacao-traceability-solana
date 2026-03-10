use anchor_lang::prelude::*;

pub mod error;
pub mod state;

use error::TrazaError;
use state::*;

declare_id!("H79yGB29eEZAf1Gi3oPDAUG2Xcv8eoMSULbfyXPR3sNX");

#[program]
pub mod traza {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let config = &mut ctx.accounts.program_config;

        config.authority = ctx.accounts.authority.key();
        config.next_batch_id = 1;
        config.next_event_id = 1;
        config.next_certificate_id = 1;
        config.initialized = true;
        config.bump = ctx.bumps.program_config;

        msg!("Food traceability program initialized");
        msg!("Authority: {}", config.authority);

        Ok(())
    }

    pub fn register_actor(
        ctx: Context<RegisterActor>,
        name: String,
        requested_role: ActorRole,
        location: String,
    ) -> Result<()> {
        require!(
            name.len() <= PendingActor::NAME_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            location.len() <= PendingActor::LOCATION_MAX_LEN,
            TrazaError::FieldTooLong
        );

        let pending_actor = &mut ctx.accounts.pending_actor;
        let clock = Clock::get()?;

        pending_actor.wallet = ctx.accounts.wallet.key();
        pending_actor.name = name;
        pending_actor.requested_role = requested_role;
        pending_actor.location = location;
        pending_actor.created_at = clock.unix_timestamp;
        pending_actor.bump = ctx.bumps.pending_actor;

        msg!("Pending actor registration created");
        msg!("Wallet: {}", pending_actor.wallet);

        Ok(())
    }

    pub fn validate_actor(ctx: Context<ValidateActor>) -> Result<()> {
        let config = &ctx.accounts.program_config;
        require!(
            config.authority == ctx.accounts.authority.key(),
            TrazaError::UnauthorizedAuthority
        );

        let pending = &ctx.accounts.pending_actor;
        let actor = &mut ctx.accounts.actor;

        actor.wallet = pending.wallet;
        actor.name = pending.name.clone();
        actor.role = pending.requested_role.clone();
        actor.location = pending.location.clone();
        actor.is_active = true;
        actor.created_at = Clock::get()?.unix_timestamp;
        actor.bump = ctx.bumps.actor;

        msg!("Actor validated");
        msg!("Actor wallet: {}", actor.wallet);

        Ok(())
    }

    pub fn create_batch(
        ctx: Context<CreateBatch>,
        product: String,
        origin: String,
        quantity: u64,
        unit: String,
        harvest_date: i64,
    ) -> Result<()> {
        require!(quantity > 0, TrazaError::InvalidQuantity);
        require!(
            product.len() <= Batch::PRODUCT_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            origin.len() <= Batch::ORIGIN_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            unit.len() <= Batch::UNIT_MAX_LEN,
            TrazaError::FieldTooLong
        );

        let actor = &ctx.accounts.actor;
        require!(actor.is_active, TrazaError::InactiveActor);
        require!(
            actor.role == ActorRole::Producer,
            TrazaError::InvalidBatchCreatorRole
        );

        let config = &mut ctx.accounts.program_config;
        let batch = &mut ctx.accounts.batch;
        let clock = Clock::get()?;

        let batch_id = config.next_batch_id;
        config.next_batch_id = config
            .next_batch_id
            .checked_add(1)
            .unwrap();

        batch.id = batch_id;
        batch.creator = ctx.accounts.creator.key();
        batch.product = product;
        batch.origin = origin;
        batch.quantity = quantity;
        batch.unit = unit;
        batch.harvest_date = harvest_date;
        batch.created_at = clock.unix_timestamp;
        batch.status = BatchStatus::Created;
        batch.event_count = 0;
        batch.certificate_count = 0;
        batch.bump = ctx.bumps.batch;

        msg!("Batch created");
        msg!("Batch ID: {}", batch.id);
        msg!("Product: {}", batch.product);

        Ok(())
    }
    pub fn record_event(
        ctx: Context<RecordEvent>,
        batch_id: u64,
        event_type: String,
        location: String,
        metadata: String,
    ) -> Result<()> {
        require!(
            event_type.len() <= BatchEvent::EVENT_TYPE_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            location.len() <= BatchEvent::LOCATION_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            metadata.len() <= BatchEvent::METADATA_MAX_LEN,
            TrazaError::FieldTooLong
        );

        let actor = &ctx.accounts.actor;
        require!(actor.is_active, TrazaError::InactiveActor);

        let batch = &mut ctx.accounts.batch;
        let event = &mut ctx.accounts.batch_event;
        let config = &mut ctx.accounts.program_config;
        let clock = Clock::get()?;

        let event_id = config.next_event_id;
        config.next_event_id = config
            .next_event_id
            .checked_add(1)
            .unwrap();

        event.id = event_id;
        event.batch_id = batch_id;
        event.event_type = event_type;
        event.actor = ctx.accounts.actor_wallet.key();
        event.location = location;
        event.timestamp = clock.unix_timestamp;
        event.metadata = metadata;
        event.bump = ctx.bumps.batch_event;

        batch.event_count = batch
            .event_count
            .checked_add(1)
            .unwrap();

        msg!("Batch event recorded");
        msg!("Batch ID: {}", batch_id);
        msg!("Event ID: {}", event.id);

        Ok(())
    }

    #[derive(Accounts)]
    #[instruction(batch_id: u64)]
    pub struct UpdateBatchStatus<'info> {
        #[account(
            seeds = [b"actor", actor_wallet.key().as_ref()],
            bump = actor.bump
        )]
        pub actor: Account<'info, Actor>,

        #[account(
            mut,
            seeds = [b"batch", batch.creator.as_ref(), &batch_id.to_le_bytes()],
            bump = batch.bump,
            constraint = batch.id == batch_id @ TrazaError::InvalidBatchAccount
        )]
        pub batch: Account<'info, Batch>,

        pub actor_wallet: Signer<'info>,
    }  
    
    #[derive(Accounts)]
    #[instruction(batch_id: u64)]
    pub struct IssueCertificate<'info> {
        #[account(
            mut,
            seeds = [b"config"],
            bump = program_config.bump
        )]
        pub program_config: Account<'info, ProgramConfig>,

        #[account(
            mut,
            seeds = [b"batch", batch.creator.as_ref(), &batch_id.to_le_bytes()],
            bump = batch.bump,
            constraint = batch.id == batch_id @ TrazaError::InvalidBatchAccount
        )]
        pub batch: Account<'info, Batch>,

        #[account(
            init,
            payer = authority,
            space = 8 + Certificate::LEN,
            seeds = [
                b"certificate",
                batch_id.to_le_bytes().as_ref(),
                program_config.next_certificate_id.to_le_bytes().as_ref()
            ],
            bump
        )]
        pub certificate: Account<'info, Certificate>,

        #[account(mut)]
        pub authority: Signer<'info>,

        pub system_program: Program<'info, System>,
    }    

    pub fn update_batch_status(
        ctx: Context<UpdateBatchStatus>,
        batch_id: u64,
        new_status: BatchStatus,
    ) -> Result<()> {
        let actor = &ctx.accounts.actor;
        require!(actor.is_active, TrazaError::InactiveActor);

        let batch = &mut ctx.accounts.batch;
        require!(batch.id == batch_id, TrazaError::InvalidBatchAccount);

        let current_status = batch.status.clone();

        let valid_transition = matches!(
            (&current_status, &new_status),
            (BatchStatus::Created, BatchStatus::Harvested)
                | (BatchStatus::Harvested, BatchStatus::Fermented)
                | (BatchStatus::Fermented, BatchStatus::Dried)
                | (BatchStatus::Dried, BatchStatus::InTransit)
                | (BatchStatus::InTransit, BatchStatus::Stored)
                | (BatchStatus::Stored, BatchStatus::Certified)
                | (BatchStatus::Certified, BatchStatus::Exported)
                | (BatchStatus::Exported, BatchStatus::Delivered)
        );

        require!(
            valid_transition,
            TrazaError::InvalidBatchStatusTransition
        );

        batch.status = new_status.clone();

        msg!("Batch status updated");
        msg!("Batch ID: {}", batch.id);
        msg!("New status: {:?}", new_status);

        Ok(())
    }

    pub fn issue_certificate(
        ctx: Context<IssueCertificate>,
        batch_id: u64,
        certificate_type: String,
        issuer: String,
        document_hash: String,
        expiry_date: i64,
    ) -> Result<()> {
        require!(
            certificate_type.len() <= Certificate::CERTIFICATE_TYPE_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            issuer.len() <= Certificate::ISSUER_MAX_LEN,
            TrazaError::FieldTooLong
        );
        require!(
            document_hash.len() <= Certificate::DOCUMENT_HASH_MAX_LEN,
            TrazaError::FieldTooLong
        );

        let config = &ctx.accounts.program_config;
        require!(
            config.authority == ctx.accounts.authority.key(),
            TrazaError::OnlyAuthorityCanIssueCertificates
        );

        let batch = &mut ctx.accounts.batch;
        require!(batch.id == batch_id, TrazaError::InvalidBatchAccount);

        let certificate = &mut ctx.accounts.certificate;
        let clock = Clock::get()?;
        let config = &mut ctx.accounts.program_config;

        let certificate_id = config.next_certificate_id;
        config.next_certificate_id = config
            .next_certificate_id
            .checked_add(1)
            .unwrap();

        certificate.id = certificate_id;
        certificate.batch_id = batch_id;
        certificate.certificate_type = certificate_type;
        certificate.issuer = issuer;
        certificate.document_hash = document_hash;
        certificate.issued_date = clock.unix_timestamp;
        certificate.expiry_date = expiry_date;
        certificate.status = CertificateStatus::Valid;
        certificate.bump = ctx.bumps.certificate;

        batch.certificate_count = batch
            .certificate_count
            .checked_add(1)
            .unwrap();

        msg!("Certificate issued");
        msg!("Certificate ID: {}", certificate.id);
        msg!("Batch ID: {}", batch_id);

        Ok(())
    }

}

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

#[derive(Accounts)]
pub struct RegisterActor<'info> {
    #[account(
        init,
        payer = wallet,
        space = 8 + PendingActor::LEN,
        seeds = [b"pending_actor", wallet.key().as_ref()],
        bump
    )]
    pub pending_actor: Account<'info, PendingActor>,

    /// CHECK: This PDA is expected to be empty before validation.
    pub actor: UncheckedAccount<'info>,

    #[account(mut)]
    pub wallet: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ValidateActor<'info> {
    #[account(
        seeds = [b"config"],
        bump = program_config.bump
    )]
    pub program_config: Account<'info, ProgramConfig>,

    #[account(
        mut,
        close = authority,
        seeds = [b"pending_actor", pending_actor.wallet.as_ref()],
        bump = pending_actor.bump
    )]
    pub pending_actor: Account<'info, PendingActor>,

    #[account(
        init,
        payer = authority,
        space = 8 + Actor::LEN,
        seeds = [b"actor", pending_actor.wallet.as_ref()],
        bump
    )]
    pub actor: Account<'info, Actor>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateBatch<'info> {
    #[account(
        mut,
        seeds = [b"config"],
        bump = program_config.bump
    )]
    pub program_config: Account<'info, ProgramConfig>,

    #[account(
        seeds = [b"actor", creator.key().as_ref()],
        bump = actor.bump
    )]
    pub actor: Account<'info, Actor>,

    #[account(
        init,
        payer = creator,
        space = 8 + Batch::LEN,
        seeds = [b"batch", creator.key().as_ref(), &program_config.next_batch_id.to_le_bytes()],
        bump
    )]
    pub batch: Account<'info, Batch>,

    #[account(mut)]
    pub creator: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(batch_id: u64)]
pub struct RecordEvent<'info> {
    #[account(
        mut,
        seeds = [b"config"],
        bump = program_config.bump
    )]
    pub program_config: Account<'info, ProgramConfig>,

    #[account(
        seeds = [b"actor", actor_wallet.key().as_ref()],
        bump = actor.bump
    )]
    pub actor: Account<'info, Actor>,

    #[account(
        mut,
        seeds = [b"batch", batch.creator.as_ref(), &batch_id.to_le_bytes()],
        bump = batch.bump,
        constraint = batch.id == batch_id @ TrazaError::InvalidBatchAccount
    )]
    pub batch: Account<'info, Batch>,

    #[account(
        init,
        payer = actor_wallet,
        space = 8 + BatchEvent::LEN,
        seeds = [
            b"event",
            batch_id.to_le_bytes().as_ref(),
            program_config.next_event_id.to_le_bytes().as_ref()
        ],
        bump
    )]
    pub batch_event: Account<'info, BatchEvent>,

    #[account(mut)]
    pub actor_wallet: Signer<'info>,

    pub system_program: Program<'info, System>,
}
