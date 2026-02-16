'use client';

import { useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare, Palette, Truck } from 'lucide-react';

/**
 * ProcessTimeline - 3 Schritte zum Produkt
 * - Tailwind-safe Klassen (keine bg-${...})
 * - Staggered Cards (sichtbar nacheinander)
 * - Progressline in 3 Stufen (0 -> 33 -> 66 -> 100)
 * - Kein Häkchen-Overlay
 */

const STEPS = [
  {
    id: 'anfrage',
    icon: MessageSquare,
    title: 'Anfrage',
    description: 'Kontaktiere uns mit deiner Idee. Wir beraten dich kostenlos und unverbindlich.',
    color: 'gummyGreen',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design-Abstimmung',
    description: 'Gemeinsam entwickeln wir das perfekte Design für dein Produkt.',
    color: 'gummyBlue',
  },
  {
    id: 'produktion',
    icon: Truck,
    title: 'Produktion & Lieferung',
    description: 'Wir produzieren deine Bestellung und liefern sie direkt zu dir.',
    color: 'gummyGreen',
  },
];

const ICON_BG = {
  gummyGreen: 'bg-gummyGreen',
  gummyBlue: 'bg-gummyBlue',
};

const BADGE_BG = {
  gummyGreen: 'bg-brandGreen shadow-brandGreen/40',
  gummyBlue: 'bg-brandBlue shadow-brandBlue/40',
};

const ease = [0.22, 1, 0.36, 1];

const ProcessTimeline = () => {
  const controls = useAnimation();

  const timings = useMemo(
    () => ({
      // deine aktuellen Werte:
      stagger: 0.9,
      cardDuration: 0.95,
      progressTotal: 7,
    }),
    []
  );

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: timings.stagger,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: timings.cardDuration,
        ease,
      },
    },
  };

  // Progressline: 0% -> 33% -> 66% -> 100%
  const progressVariants = {
    hidden: { width: '0%' },
    show: {
      width: ['0%', '33%', '66%', '100%'],
      transition: {
        duration: timings.progressTotal,
        ease,
        times: [0, 0.34, 0.68, 1],
      },
    },
  };

  const connectorVariants = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: 48,
      opacity: 1,
      transition: { duration: 0.9, ease, delay: 0.2 },
    },
  };

  return (
    <section className="section bg-jelly-gradient-soft">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            In 3 Schritten zu deinem Produkt
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Einfach, schnell und unkompliziert
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gummyBlue/20">
            <motion.div
              className="h-full bg-gradient-to-r from-gummyGreen via-gummyBlue to-gummyGreen"
              variants={progressVariants}
              initial="hidden"
              animate={controls}
            />
          </div>

          {/* Steps: ein gemeinsamer Trigger startet alles synchron */}
          <motion.ol
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            onViewportEnter={() => controls.start('show')}
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const iconBg = ICON_BG[step.color] ?? 'bg-gummyGreen';
              const badgeBg = BADGE_BG[step.color] ?? 'bg-brandGreen shadow-brandGreen/40';

              return (
                <motion.li key={step.id} className="relative" variants={cardVariants}>
                  {/* Card */}
                  <div className="card-glass text-center relative z-10">
                    {/* Icon mit Number Badge */}
                    <div className="relative inline-block mb-6">
                      <div
                        className={`w-20 h-20 rounded-2xl ${iconBg} flex items-center justify-center shadow-xl`}
                      >
                        <Icon size={40} className="text-white" />
                      </div>

                      {/* Nummer Badge */}
                      <motion.div
                          className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${badgeBg} ring-2 ring-white/70`}
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={controls}
                          variants={{
                            hidden: { scale: 0.6, opacity: 0 },
                            show: {
                              scale: 1,
                              opacity: 1,
                              transition: {
                                // erst Card rein, dann Badge:
                                delay: timings.cardDuration + index * 0.45,
                                duration: 3,
                                ease,
                              },
                            },
                          }}
                          aria-label={`Schritt ${index + 1}`}
                        >
                          <span className="text-white font-heading font-bold text-sm">
                            {index + 1}
                          </span>
                      </motion.div>

                    </div>

                    {/* Titel */}
                    <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                      {step.title}
                    </h3>

                    {/* Beschreibung */}
                    <p className="font-sans text-nightBlue/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line - Mobile */}
                  {index < STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <motion.div
                        className="w-1 h-12 bg-gradient-to-b from-gummyGreen via-gummyBlue to-gummyGreen rounded-full"
                        variants={connectorVariants}
                      />
                    </div>
                  )}
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="btn-jelly bg-brandGreen text-white hover:bg-brandGreen/90 shadow-lg shadow-brandGreen/30 inline-flex"
          >
            Jetzt Projekt starten
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
