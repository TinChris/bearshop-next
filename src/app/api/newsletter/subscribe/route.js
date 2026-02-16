import { headers } from 'next/headers';
import prisma from '@/lib/db';
import { generateToken, hashIp, buildConfirmUrl, PRIVACY_POLICY_VERSION } from '@/lib/newsletter';
import { sendConfirmationEmail } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';

// Prevent Next.js from caching this route in production
export const dynamic = 'force-dynamic';

// Neutral response to prevent email enumeration
const NEUTRAL_RESPONSE = {
  ok: true,
  message: 'Falls die Adresse gültig ist, erhältst du eine Bestätigungsmail.',
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, consent, source, honeypot } = body;

    // Honeypot: if "company" field is filled, it's a bot
    if (honeypot) {

      return Response.json(NEUTRAL_RESPONSE);
    }

    // Validate consent
    if (consent !== true) {
      return Response.json(
        { ok: false, error: 'Bitte akzeptiere die Datenschutzerklärung.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const emailLog = normalizedEmail.substring(0, 3) + '***';

    // Get IP and User-Agent
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
      || headersList.get('x-real-ip')
      || 'unknown';
    const userAgent = headersList.get('user-agent') || null;
    const ipHashed = hashIp(ip);

    // Rate limit by IP
    const ipLimit = checkRateLimit(`ip:${ipHashed}`);
    if (!ipLimit.allowed) {
      // console.log(`[subscribe] Rate limit IP for ${emailLog}`);
      return Response.json(NEUTRAL_RESPONSE);
    }

    // Rate limit by email
    const emailLimit = checkRateLimit(`email:${normalizedEmail}`);
    if (!emailLimit.allowed) {
      // console.log(`[subscribe] Rate limit email for ${emailLog}`);
      return Response.json(NEUTRAL_RESPONSE);
    }

    // Check existing subscription
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      if (existing.status === 'CONFIRMED') {
        // console.log(`[subscribe] Already confirmed: ${emailLog}`);
        return Response.json(NEUTRAL_RESPONSE);
      }

      if (existing.status === 'UNSUBSCRIBED') {
        // console.log(`[subscribe] Unsubscribed: ${emailLog}`);
        return Response.json(NEUTRAL_RESPONSE);
      }

      // PENDING — check if we recently sent a mail
      if (existing.lastSentAt) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        if (existing.lastSentAt > tenMinutesAgo) {
          // console.log(`[subscribe] Cooldown active for ${emailLog}, last sent: ${existing.lastSentAt.toISOString()}`);
          return Response.json(NEUTRAL_RESPONSE);
        }
      }

      // PENDING and enough time passed — generate new token and resend
      // console.log(`[subscribe] Re-sending to existing PENDING: ${emailLog}`);
      const { token, tokenHash, tokenExpiresAt } = generateToken();
      const confirmUrl = buildConfirmUrl(token, normalizedEmail);

      // Send first, update DB only on success
      await sendConfirmationEmail(normalizedEmail, confirmUrl);

      await prisma.newsletterSubscription.update({
        where: { email: normalizedEmail },
        data: {
          tokenHash,
          tokenExpiresAt,
          lastSentAt: new Date(),
          ipHash: ipHashed,
          userAgent,
        },
      });

      // console.log(`[subscribe] Re-sent confirmation to ${emailLog}`);
      return Response.json(NEUTRAL_RESPONSE);
    }

    // New subscription
    // console.log(`[subscribe] New subscription: ${emailLog}`);
    const { token, tokenHash, tokenExpiresAt } = generateToken();
    const confirmUrl = buildConfirmUrl(token, normalizedEmail);

    // Send first, create DB record only on success
    await sendConfirmationEmail(normalizedEmail, confirmUrl);

    await prisma.newsletterSubscription.create({
      data: {
        email: normalizedEmail,
        status: 'PENDING',
        tokenHash,
        tokenExpiresAt,
        source: source || 'footer',
        privacyPolicyVersion: PRIVACY_POLICY_VERSION,
        userAgent,
        ipHash: ipHashed,
        lastSentAt: new Date(),
      },
    });

    // console.log(`[subscribe] Confirmation sent to ${emailLog}`);
    return Response.json(NEUTRAL_RESPONSE);
  } catch (error) {
    console.error('[subscribe] ERROR:', error);
    return Response.json(
      { ok: false, error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
