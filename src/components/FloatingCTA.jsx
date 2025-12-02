'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

/**
 * FloatingCTA - Sticky Call-to-Action Buttons
 * Features:
 * - Fixed rechts unten
 * - 2 Buttons: Email & Telefon
 * - Hover zeigt Text
 * - Smooth Animations
 */
const FloatingCTA = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Email Button */}
      <motion.div
        className="relative"
        onMouseEnter={() => setHoveredButton('email')}
        onMouseLeave={() => setHoveredButton(null)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <AnimatePresence>
          {hoveredButton === 'email' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-brandGreen text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg font-sans text-sm font-medium"
            >
              Jetzt anfragen
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={handleContactClick}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-brandGreen to-brandGreen/80 text-white shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Kontaktformular öffnen"
        >
          <Mail size={24} />
        </motion.button>
      </motion.div>

      {/* Phone Button */}
      <motion.div
        className="relative"
        onMouseEnter={() => setHoveredButton('phone')}
        onMouseLeave={() => setHoveredButton(null)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        <AnimatePresence>
          {hoveredButton === 'phone' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-brandBlue text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg font-sans text-sm font-medium"
            >
              +43 800 66 55 18
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.a
          href="tel:+43800665518"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Anrufen"
        >
          <Phone size={24} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FloatingCTA;