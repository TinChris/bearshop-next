'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Check } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', message: 'Bitte gib eine gültige E-Mail-Adresse ein.' });
      return;
    }

    if (!consent) {
      setStatus({ type: 'error', message: 'Bitte akzeptiere die Datenschutzerklärung.' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true, source: 'footer' }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setEmail('');
        setConsent(false);
      } else {
        setStatus({ type: 'error', message: data.error || 'Anmeldung fehlgeschlagen.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Ein Fehler ist aufgetreten.' });
    } finally {
      setLoading(false);
    }
  };

  const navigationLinks = [
    { label: 'Start', href: '/#home' },
    { label: 'Produkte', href: '/#products' },
    { label: 'Warum wir', href: '/#why' },
    { label: 'Schul-Webshop', href: '/schul-webshop' },
    { label: 'Kontakt', href: '/#contact' },
  ];

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/bearshop.at', icon: Instagram },
    { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  ];

  return (
    <footer className="bg-nightBlue text-candyWhite">
      <div className="container-custom py-16">
        {/* 4-Spalten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Spalte 1 - Logo + Claim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <div className="mb-2">
              <Image
                src="/logos/bearshop_white_500_125.svg"
                alt="Bearshop.at"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="font-sans text-sm text-candyWhite/70 leading-relaxed">
              Hochwertiger Textildruck & Merchandise für Schulen, Vereine und Unternehmen.
            </p>
          </motion.div>

          {/* Spalte 2 - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.15, ease: "easeOut" }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-candyWhite/70 hover:text-gummyYellow transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 3 - Rechtliches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-candyWhite/70 hover:text-gummyYellow transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 4 - Newsletter + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.45, ease: "easeOut" }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
            <p className="font-sans text-sm text-candyWhite/70 mb-3">
              Bleib auf dem Laufenden über neue Produkte und Aktionen!
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletter} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail"
                  disabled={loading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-candyWhite/10 border border-candyWhite/20 text-candyWhite placeholder-candyWhite/40 text-sm focus:outline-none focus:border-brandGreen focus:ring-1 focus:ring-brandGreen/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2.5 rounded-xl bg-brandGreen hover:bg-brandGreen/90 text-white transition-all duration-300 flex-shrink-0"
                >
                  {loading ? (
                    <span className="spinner-jelly" />
                  ) : (
                    <Mail size={18} />
                  )}
                </button>
              </div>

              {/* DSGVO Consent Checkbox */}
              <label className="flex items-start gap-2 mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-candyWhite/30 bg-candyWhite/10 text-brandGreen focus:ring-brandGreen/30 accent-brandGreen flex-shrink-0"
                />
                <span className="text-xs text-candyWhite/60 leading-relaxed">
                  Ich möchte den Newsletter erhalten und akzeptiere die{' '}
                  <a href="/datenschutz" className="text-brandGreen hover:text-brandGreen/80 underline transition-colors">
                    Datenschutzerklärung
                  </a>.
                </span>
              </label>

              {status.message && (
                <div className={`mt-2 flex items-center gap-1.5 text-xs ${
                  status.type === 'success' ? 'text-brandGreen' : 'text-brandRed'
                }`}>
                  {status.type === 'success' && <Check size={14} />}
                  <span>{status.message}</span>
                </div>
              )}
            </form>

            {/* Social Media */}
            <h4 className="font-heading font-semibold text-lg mb-4">Folge uns</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-candyWhite/10 hover:bg-gummyRed flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} className="text-candyWhite" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-candyWhite/10 mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
        >
          <p className="font-sans text-sm text-candyWhite/50">
            © {currentYear} Bearshop. Alle Rechte vorbehalten. Made with{' '}
            <span className="text-red-500">❤</span> in Austria
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
