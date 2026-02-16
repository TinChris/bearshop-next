import { randomBytes, createHash, timingSafeEqual } from 'crypto';

const TOKEN_BYTES = 32;
const TOKEN_EXPIRY_HOURS = 24;
const IP_HASH_SALT = process.env.IP_HASH_SALT || 'bearshop-newsletter-salt';

/**
 * Generate a random token and its SHA-256 hash.
 * Only the hash is stored in the database.
 */
export function generateToken() {
  const token = randomBytes(TOKEN_BYTES).toString('hex');
  const tokenHash = hashToken(token);
  const tokenExpiresAt = new Date(Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

  return { token, tokenHash, tokenExpiresAt };
}

/**
 * SHA-256 hash of a token (for storage & comparison).
 */
export function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

/**
 * Constant-time comparison of two token hashes.
 * Prevents timing attacks.
 */
export function verifyTokenHash(candidateHash, storedHash) {
  if (!candidateHash || !storedHash) return false;

  try {
    const a = Buffer.from(candidateHash, 'hex');
    const b = Buffer.from(storedHash, 'hex');
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

/**
 * Check if a token has expired.
 */
export function isTokenExpired(expiresAt) {
  if (!expiresAt) return true;
  return new Date() > new Date(expiresAt);
}

/**
 * Hash an IP address with salt for DSGVO-compliant storage.
 */
export function hashIp(ip) {
  if (!ip) return null;
  return createHash('sha256').update(`${IP_HASH_SALT}:${ip}`).digest('hex');
}

/**
 * Build the confirmation URL.
 */
export function buildConfirmUrl(token, email) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const params = new URLSearchParams({ token, email });
  return `${baseUrl}/newsletter/confirm?${params.toString()}`;
}

/**
 * Current privacy policy version.
 */
export const PRIVACY_POLICY_VERSION = '2025-01';
