'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { products } from '../data/products';
import Image from 'next/image';

/**
 * ProductGrid - Produktübersicht mit Glassmorphism-Karten
 * Features:
 * - Responsive Grid (3/2/1 Spalten)
 * - Glassmorphism Effekt
 * - Hover Animations
 * - Dynamische Icons von Lucide React
 * - Produkt-Bild Placeholders
 */
const ProductGrid = () => {
  // Mapping von Produkt-IDs zu Bildern
  const productImages = {
    1: '/assets/T-shirt_900x1200px.png',           // T-Shirts
    2: '/assets/Hoodie_mainpic_900x1200px.png',    // Hoodies
    3: '/assets/Werbemittel_900 x1200 px.png',     // Werbemittel
    4: '/assets/Business_tools_900 x1200 px.png',  // Brand-Set
    6: '/assets/Plane_900 x1200 px.png',           // Außenwerbung
  };

  const hoverImage = '/assets/DeinLogo_DeinStil.jpg';

  return (
    <section id="products" className="section bg-brandBeige">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Unsere Produkte
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Von T-Shirts bis Taschen – wir bedrucken alles mit deinem individuellen Design
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = Icons[product.icon];
            const productImage = productImages[product.id];

            return (
              <motion.div
                key={product.id}
                className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:transform hover:-translate-y-2 transition-transform duration-500 flex flex-col min-h-[680px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Produkt-Bild / Placeholder */}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6 group">
                  {productImage ? (
                    // Echtes Produktbild mit Hover-Effekt
                    <>
                      <Image
                        src={productImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <Image
                        src={hoverImage}
                        alt="Dein Logo, Dein Stil"
                        fill
                        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </>
                  ) : (
                    // Gradient Placeholder mit Hover-Effekt
                    <>
                      <div
                        className="w-full h-full bg-gradient-to-br flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0"
                        style={{
                          background: `linear-gradient(135deg, #2f4b96 0%, #1a2f60 100%)`,
                          opacity: 0.8,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent size={80} className="text-brandGreen/80" />
                        )}
                      </div>
                      <Image
                        src={hoverImage}
                        alt="Dein Logo, Dein Stil"
                        fill
                        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </>
                  )}
                </div>

                {/* Icon + Produktname */}
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 bg-brandGreen"
                  >
                    {IconComponent && (
                      <IconComponent size={24} className="text-white" />
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-nightBlue">
                    {product.name}
                  </h3>
                </div>

                {/* Beschreibung */}
                <p className="font-sans text-nightBlue/70 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Link - MIT TARGET BLANK FÜR EXTERNE LINKS */}
                <motion.a
                  href={product.link}
                  target={product.link.startsWith('http') ? '_blank' : '_self'}
                  rel={product.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center gap-2 text-gummyRed font-medium hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Mehr erfahren</span>
                  <Icons.ArrowRight size={20} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;