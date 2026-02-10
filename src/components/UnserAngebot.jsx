'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Wrench, Stethoscope, Dumbbell, Printer } from 'lucide-react';

/**
 * Unser Angebot - 5 Produktkategorien
 * Features:
 * - 5-Spalten Grid auf Desktop
 * - Horizontal Scroll auf Mobile/Tablet
 * - Hover-Effekte
 * - Fußzeile mit Zusatztext
 */
const UnserAngebot = () => {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Schulbekleidung',
      bgColor: '#D93742',
    },
    {
      icon: Dumbbell,
      title: 'Sportbekleidung',
      bgColor: '#78B833',
    },
    {
      icon: Wrench,
      title: 'Arbeitsbekleidung',
      bgColor: '#2E4185',
    },
    {
      icon: Stethoscope,
      title: 'Medizinbekleidung',
      bgColor: '#D0ECE7',
    },
    {
      icon: Printer,
      title: 'Druckprodukte',
      bgColor: '#78B833',
    },
  ];

  return (
    <section className="section bg-brandBeige">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Unser Angebot
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Maßgeschneiderte Textillösungen für jeden Bereich
          </p>
        </motion.div>

        {/* 5-Spalten Grid (Desktop) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:transform hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-4"
                  style={{ backgroundColor: category.bgColor }}
                >
                  <category.icon size={40} className={category.bgColor === '#D0ECE7' ? 'text-nightBlue' : 'text-white'} />
                </div>

                {/* Titel */}
                <h3 className="font-heading font-semibold text-lg text-nightBlue">
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fußzeile */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg font-sans text-nightBlue/80 max-w-3xl mx-auto leading-relaxed">
            Veredelt mit modernstem Textildruck und Stickverfahren wird jedes
            Kleidungsstück zu einem echten Markenbotschafter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UnserAngebot;