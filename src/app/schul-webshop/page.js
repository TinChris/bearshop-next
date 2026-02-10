'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CalendarCheck, PackageSearch, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: CalendarCheck,
    title: 'Vereinbaren Sie einen Termin',
    description:
      'In einem kurzen Erstgespräch klären wir, was Sie brauchen: Für welche Schule (oder welchen Verein) ist der Shop gedacht, wer bestellt, und wie soll die Abwicklung laufen. Sie bekommen einen klaren Überblick über den Ablauf, die Möglichkeiten und die nächsten Schritte.',
    color: '#78B833',
  },
  {
    number: 2,
    icon: PackageSearch,
    title: 'Sortimentsbestimmung',
    description:
      'Gemeinsam definieren wir Ihr Sortiment: Welche Artikel sollen in den Shop (z.\u00A0B. T‑Shirts, Hoodies, Jacken, Sportbekleidung), welche Größen, Farben und Veredelungen (Logo/Schriftzug). Wir strukturieren die Produkte so, dass Eltern schnell finden, was sie brauchen – übersichtlich, logisch und ohne Rückfragen.',
    color: '#2E4185',
  },
  {
    number: 3,
    icon: Rocket,
    title: 'In 4–6 Wochen zu Ihrem Webshop',
    description:
      'Wir setzen Ihren Schul‑Webshop komplett auf: Design, Produktstruktur, Bestellprozess und alle notwendigen Einstellungen. Nach einer kurzen Abstimmung geht der Shop live – bereit für Bestellungen, einfach zu bedienen und professionell umgesetzt.',
    color: '#78B833',
  },
];

export default function SchulWebshop() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      <main className="pt-32 pb-20 bg-brandBeige">
        <div className="container-custom">
          {/* Hero-Bereich */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="font-heading font-bold text-nightBlue mb-6">
              Schul‑Webshop
            </h1>
            <p className="text-xl md:text-2xl text-nightBlue/70 font-sans max-w-3xl mx-auto leading-relaxed">
              In 3 Schritten zu Ihrem eigenen Shop
            </p>
          </motion.div>

          {/* 3 Schritte */}
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 md:p-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon + Nummer */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon size={36} className="text-white" />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/70"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-white font-heading font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="font-heading font-semibold text-nightBlue mb-3">
                      {step.title}
                    </h2>
                    <p className="font-sans text-nightBlue/70 leading-relaxed text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="text-xl md:text-2xl font-sans text-nightBlue/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Lust auf einen Schul‑Webshop ohne Zettelchaos? Vereinbaren Sie jetzt Ihren Termin – und wir bringen Ihren Shop in 4–6 Wochen online.
            </p>
            <a
              href="/#contact"
              className="btn-jelly bg-brandGreen text-white hover:bg-brandGreen/90 shadow-lg shadow-brandGreen/30 inline-flex"
            >
              Jetzt Termin vereinbaren
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
