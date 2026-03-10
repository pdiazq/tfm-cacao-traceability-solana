use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug, PartialEq, Eq)]
pub enum CertificateStatus {
    Valid,
    Expired,
    Revoked,
}

#[account]
pub struct Certificate {
    pub id: u64,
    pub batch_id: u64,
    pub certificate_type: String,
    pub issuer: String,
    pub document_hash: String,
    pub issued_date: i64,
    pub expiry_date: i64,
    pub status: CertificateStatus,
    pub bump: u8,
}

impl Certificate {
    pub const CERTIFICATE_TYPE_MAX_LEN: usize = 64;
    pub const ISSUER_MAX_LEN: usize = 128;
    pub const DOCUMENT_HASH_MAX_LEN: usize = 128;

    pub const LEN: usize =
        8 +
        8 +
        4 + Self::CERTIFICATE_TYPE_MAX_LEN +
        4 + Self::ISSUER_MAX_LEN +
        4 + Self::DOCUMENT_HASH_MAX_LEN +
        8 +
        8 +
        1 +
        1;
}