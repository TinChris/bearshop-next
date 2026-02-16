import { headers } from 'next/headers';
import prisma from '@/lib/db';
import { generateToken, hashIp, buildConfirmUrl } from '@/lib/newsletter';
import { sendConfirmationEmail } from '@/lib/email';
import { checkRateLimit } from '@/lib/rate-limit';

export const dynamic = 'force-dynamic';

const NEUTRAL_RESPONSE = {
  ok: true,
  message: 'Falls nötig, senden wir dir eine neue Bestätigungsmail.',
};

// Debug: nur in Dev zusätzliche Infos ausgeben
const DEBUG = process.env.NODE_ENV !== 'production';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Rate limit (nur in Production aktivieren)
    const headersList = await headers();
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      headersList.get('x-real-ip') ||
      'unknown';
    const ipHashed = hashIp(ip);

    if (!DEBUG) {
      const limit = checkRateLimit(`resend:${ipHashed}`);
      if (!limit.allowed) {
        return Response.json(NEUTRAL_RESPONSE);
      }
    } else {
      // optional: in dev zeigen, wenn ip unknown ist (hilft beim Verständnis)
      // console.log('[newsletter/resend] DEV ip:', ip);
    }

    const subscription = await prisma.newsletterSubscription.findUnique({
      where: { email: normalizedEmail },
    });

    // Neutral response for non-existent, confirmed, or unsubscribed
    if (!subscription) {
      return Response.json(
        DEBUG ? { ...NEUTRAL_RESPONSE, debug: 'no_subscription' } : NEUTRAL_RESPONSE
      );
    }

    if (subscription.status !== 'PENDING') {
      return Response.json(
        DEBUG
          ? { ...NEUTRAL_RESPONSE, debug: `status_${subscription.status}` }
          : NEUTRAL_RESPONSE
      );
    }

    // Check last sent time (10 min cooldown)
    if (subscription.lastSentAt) {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      if (subscription.lastSentAt > tenMinutesAgo) {
        return Response.json(
          DEBUG ? { ...NEUTRAL_RESPONSE, debug: 'cooldown_10min' } : NEUTRAL_RESPONSE
        );
      }
    }

    // Generate new token
    const { token, tokenHash, tokenExpiresAt } = generateToken();

    // Build confirm URL
    const confirmUrl = buildConfirmUrl(token, normalizedEmail);

    // 1) Erst senden – wenn SMTP/Send fehlschlägt, soll das NICHT als 200 OK durchgehen
    await sendConfirmationEmail(normalizedEmail, confirmUrl);

    // 2) Erst nach erfolgreichem Send DB updaten (verhindert "cooldown gesetzt aber mail nie raus")
    await prisma.newsletterSubscription.update({
      where: { email: normalizedEmail },
      data: {
        tokenHash,
        tokenExpiresAt,
        lastSentAt: new Date(),
      },
    });

    return Response.json(DEBUG ? { ...NEUTRAL_RESPONSE, debug: 'sent' } : NEUTRAL_RESPONSE);
  } catch (error) {
    console.error('[newsletter/resend] Error:', error);
    return Response.json(
      { ok: false, error: 'Ein Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
