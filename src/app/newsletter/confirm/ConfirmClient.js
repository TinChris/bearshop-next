'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewsletterConfirmPage() {
  const searchParams = useSearchParams();
  const [state, setState] = useState('loading'); // loading | success | error | expired
  const [message, setMessage] = useState('');
  const [resending, setResending] = useState(false);
  const [resendDone, setResendDone] = useState(false);

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (!token || !email) {
      setState('error');
      setMessage('Ungültiger Bestätigungslink.');
      return;
    }

    const confirm = async () => {
      try {
        const response = await fetch('/api/newsletter/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, email }),
        });

        const data = await response.json();

        if (response.ok) {
          setState('success');
          setMessage(data.message);
        } else if (response.status === 410 || data.error === 'expired') {
          setState('expired');
          setMessage(data.message || 'Der Link ist abgelaufen.');
        } else {
          setState('error');
          setMessage(data.error || 'Bestätigung fehlgeschlagen.');
        }
      } catch {
        setState('error');
        setMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      }
    };

    confirm();
  }, [token, email]);

  const handleResend = async () => {
    if (!email || resending) return;
    setResending(true);

    try {
      const response = await fetch('/api/newsletter/resend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setResendDone(true);
      setMessage(data.message || 'Eine neue Bestätigungsmail wurde gesendet.');
    } catch {
      setMessage('Fehler beim erneuten Senden.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center bg-candyWhite">
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center">

            {/* Loading */}
            {state === 'loading' && (
              <div className="card-glass p-12">
                <Loader2 size={48} className="text-brandGreen animate-spin mx-auto mb-4" />
                <h1 className="font-heading font-semibold text-nightBlue mb-2">
                  Wird bestätigt...
                </h1>
                <p className="font-sans text-nightBlue/70">
                  Bitte warte einen Moment.
                </p>
              </div>
            )}

            {/* Success */}
            {state === 'success' && (
              <div className="card-glass p-12">
                <div className="w-20 h-20 rounded-full bg-brandGreen flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h1 className="font-heading font-semibold text-nightBlue mb-4">
                  Bestätigt!
                </h1>
                <p className="font-sans text-nightBlue/70 mb-8">
                  {message}
                </p>
                <a href="/" className="btn-jelly btn-primary">
                  Zur Startseite
                </a>
              </div>
            )}

            {/* Error */}
            {state === 'error' && (
              <div className="card-glass p-12">
                <div className="w-20 h-20 rounded-full bg-brandRed flex items-center justify-center mx-auto mb-6">
                  <AlertCircle size={40} className="text-white" />
                </div>
                <h1 className="font-heading font-semibold text-nightBlue mb-4">
                  Fehler
                </h1>
                <p className="font-sans text-nightBlue/70 mb-8">
                  {message}
                </p>
                <a href="/" className="btn-jelly btn-secondary">
                  Zur Startseite
                </a>
              </div>
            )}

            {/* Expired */}
            {state === 'expired' && (
              <div className="card-glass p-12">
                <div className="w-20 h-20 rounded-full bg-brandGold flex items-center justify-center mx-auto mb-6">
                  <AlertCircle size={40} className="text-white" />
                </div>
                <h1 className="font-heading font-semibold text-nightBlue mb-4">
                  Link abgelaufen
                </h1>
                <p className="font-sans text-nightBlue/70 mb-8">
                  {message}
                </p>
                {!resendDone ? (
                  <button
                    onClick={handleResend}
                    disabled={resending}
                    className="btn-jelly btn-primary"
                  >
                    {resending ? (
                      <>
                        <span className="spinner-jelly mr-2" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <RefreshCw size={18} className="mr-2" />
                        Neuen Link anfordern
                      </>
                    )}
                  </button>
                ) : (
                  <p className="font-sans text-brandGreen font-semibold">
                    Neue Bestätigungsmail gesendet! Prüfe dein Postfach.
                  </p>
                )}
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
