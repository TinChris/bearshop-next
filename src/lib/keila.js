const KEILA_URL = process.env.KEILA_URL || 'http://www.ncnewsletter.at:3000';
const KEILA_API_KEY = process.env.KEILA_API_KEY || '';

/**
 * Subscribe a confirmed contact to Keila.
 * This is called ONLY after double-opt-in confirmation.
 *
 * @param {string} email - The confirmed email address
 * @param {string[]} [tags] - Optional tags for segmentation
 */
export async function keilaSubscribe(email, tags = ['confirmed', 'website']) {
  const response = await fetch(`${KEILA_URL}/api/v1/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KEILA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        email,
        data: { tags, source: 'website-double-optin' },
      },
    }),
  });

  if (!response.ok) {
    const status = response.status;

    // 422/409 = already exists, which is fine
    if (status === 422 || status === 409) {
      // console.log(`[keila] Contact already exists: ${email.substring(0, 3)}***`);
      return { ok: true, existing: true };
    }

    const errorText = await response.text().catch(() => 'unknown');
    console.error(`[keila] Subscribe failed (${status}): ${errorText}`);
    throw new Error(`Keila API error: ${status}`);
  }

  // console.log(`[keila] Contact subscribed: ${email.substring(0, 3)}***`);
  return { ok: true, existing: false };
}
