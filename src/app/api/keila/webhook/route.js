import prisma from '@/lib/db';

/**
 * Keila Webhook Handler (Placeholder)
 *
 * Configure in Keila: Settings > Webhooks > Add Webhook
 * URL: https://yourdomain.at/api/keila/webhook
 * Events: contact.unsubscribed, contact.complaint
 *
 * TODO: Add webhook secret verification when Keila supports it.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { event, data } = body;

    if (!event || !data?.email) {
      return Response.json({ ok: false }, { status: 400 });
    }

    const normalizedEmail = data.email.trim().toLowerCase();

    switch (event) {
      case 'contact.unsubscribed':
      case 'contact.complaint': {
        const subscription = await prisma.newsletterSubscription.findUnique({
          where: { email: normalizedEmail },
        });

        if (subscription && subscription.status !== 'UNSUBSCRIBED') {
          await prisma.newsletterSubscription.update({
            where: { email: normalizedEmail },
            data: {
              status: 'UNSUBSCRIBED',
              unsubscribedAt: new Date(),
            },
          });
          // console.log(`[keila/webhook] Unsubscribed: ${normalizedEmail.substring(0, 3)}***`);
        }
        break;
      }

      default:
        // console.log(`[keila/webhook] Unknown event: ${event}`);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('[keila/webhook] Error:', error.message);
    return Response.json({ ok: false }, { status: 500 });
  }
}
