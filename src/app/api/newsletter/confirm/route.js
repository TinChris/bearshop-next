import prisma from '@/lib/db';
import { hashToken, verifyTokenHash, isTokenExpired } from '@/lib/newsletter';
import { keilaSubscribe } from '@/lib/keila';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { token, email } = await request.json();

    if (!token || !email) {
      return Response.json(
        { ok: false, error: 'Ungültige Anfrage.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const subscription = await prisma.newsletterSubscription.findUnique({
      where: { email: normalizedEmail },
    });

    if (!subscription || subscription.status === 'CONFIRMED') {
      return Response.json(
        { ok: false, error: 'Dieser Link ist ungültig oder wurde bereits verwendet.' },
        { status: 400 }
      );
    }

    if (subscription.status === 'UNSUBSCRIBED') {
      return Response.json(
        { ok: false, error: 'Diese E-Mail wurde abgemeldet. Bitte melde dich erneut an.' },
        { status: 400 }
      );
    }

    // Verify token hash (constant-time)
    const candidateHash = hashToken(token);
    if (!verifyTokenHash(candidateHash, subscription.tokenHash)) {
      return Response.json(
        { ok: false, error: 'Ungültiger Bestätigungslink.' },
        { status: 400 }
      );
    }

    // Check expiry
    if (isTokenExpired(subscription.tokenExpiresAt)) {
      return Response.json(
        { ok: false, error: 'expired', message: 'Der Link ist abgelaufen. Fordere einen neuen an.' },
        { status: 410 }
      );
    }

    // Confirm subscription
    await prisma.newsletterSubscription.update({
      where: { email: normalizedEmail },
      data: {
        status: 'CONFIRMED',
        confirmedAt: new Date(),
        tokenHash: null,
        tokenExpiresAt: null,
      },
    });

    // Subscribe in Keila (only now!)
    try {
      await keilaSubscribe(normalizedEmail, ['confirmed', 'website']);
    } catch (keilaError) {
      // Log but don't fail the confirmation — user is confirmed locally
      console.error('[newsletter/confirm] Keila subscribe failed:', keilaError.message);
    }

    return Response.json({
      ok: true,
      message: 'Deine Anmeldung wurde bestätigt! Willkommen beim Bearshop Newsletter.',
    });
  } catch (error) {
    console.error('[newsletter/confirm] Error:', error.message);
    return Response.json(
      { ok: false, error: 'Ein Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
