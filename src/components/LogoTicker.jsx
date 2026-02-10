'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { customers } from '../data/customers';

/**
 * LogoTicker - Infinite scrollende Kunden-Logos
 * Features:
 * - Zwei Reihen mit unterschiedlichen Scroll-Richtungen
 * - Farbige Logos
 * - Seamless Infinite Animation
 */
const LogoTicker = () => {
  // Logos verdreifachen für seamless Loop
  const row1Logos = [...customers, ...customers, ...customers];
  const row2Logos = [...customers.slice().reverse(), ...customers.slice().reverse(), ...customers.slice().reverse()];

  return (
    <section className="section bg-brandBeige py-16">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-3">
            Uns vertrauen bereits
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans">
            über 3500 zufriedene Kunden österreichweit
          </p>
        </motion.div>

        {/* Logo Ticker - Reihe 1 (nach links) */}
        <div className="overflow-hidden mb-8">
          <div 
            className="flex gap-12"
            style={{
              animation: 'scroll-left 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {row1Logos.map((customer, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center group"
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-nightBlue/10 transition-all duration-500 hover:scale-110 hover:shadow-xl bg-white p-2">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Ticker - Reihe 2 (nach rechts) */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-12"
            style={{
              animation: 'scroll-right 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {row2Logos.map((customer, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center group"
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-nightBlue/10 transition-all duration-500 hover:scale-110 hover:shadow-xl bg-white p-2">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;