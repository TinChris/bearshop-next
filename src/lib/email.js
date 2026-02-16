import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

/**
 * Send the double-opt-in confirmation email.
 */
export async function sendConfirmationEmail(email, confirmUrl) {
  const from = process.env.SMTP_FROM || 'newsletter@bearshop.at';

  const html = `
    <!DOCTYPE html>
    <html lang="de">
    <head><meta charset="utf-8"></head>
    <body style="font-family: 'Clear Sans', Arial, sans-serif; background-color: #FBF5EF; padding: 40px 20px;">
      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <h1 style="font-family: 'Century Gothic', sans-serif; color: #1E2A38; font-size: 24px; margin-bottom: 16px;">
          Newsletter bestätigen
        </h1>
        <p style="color: #1E2A38; line-height: 1.6; margin-bottom: 24px;">
          Hallo! Du hast dich für den Bearshop Newsletter angemeldet.
          Bitte bestätige deine E-Mail-Adresse mit dem Button unten.
        </p>
        <a href="${confirmUrl}" style="display: inline-block; background: #78B833; color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 16px;">
          Anmeldung bestätigen
        </a>
        <p style="color: #1E2A38; opacity: 0.5; font-size: 13px; margin-top: 24px; line-height: 1.5;">
          Dieser Link ist 24 Stunden gültig. Falls du dich nicht angemeldet hast, kannst du diese E-Mail ignorieren.
        </p>
      </div>
    </body>
    </html>
  `;

  const text = `Bearshop Newsletter bestätigen\n\nBitte bestätige deine Anmeldung: ${confirmUrl}\n\nDieser Link ist 24 Stunden gültig.`;

  await getTransporter().sendMail({
    from,
    to: email,
    subject: 'Bearshop Newsletter – Bitte bestätigen',
    html,
    text,
  });
}
