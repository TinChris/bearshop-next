import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, Package, Award, Shirt, Coffee, ShoppingBag, Sparkles, Zap, Users, PartyPopper } from 'lucide-react';

export const metadata = {
  title: 'Werbemittel & Give-Aways - Bearshop',
  description: 'Individuelle Werbeartikel mit Logo - Von Kugelschreibern bis Tragetaschen. Perfekt für Messen, Events und Kundengeschenke.',
};

export default function Werbemittel() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
<section className="relative pt-32 pb-20 bg-gradient-to-br from-candyWhite via-candyWhite to-brandGreen overflow-hidden">
        <div className="container-custom"></div>
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left - Text */}
      <div className="space-y-6">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-nightBlue">
          Werbemittel, die im Gedächtnis bleiben
        </h1>
        <p className="text-lg md:text-xl text-nightBlue/70 leading-relaxed">
          Von Kugelschreibern bis Tragetaschen – individuelle Werbeartikel mit Ihrem Logo. 
          Perfekt für Messen, Events und als Kundengeschenke.
        </p>
        
        {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="/#contact" className="btn-jelly btn-primary text-center">
                Jetzt anfragen
            </a>
            <a href="tel:+43800665518" className="btn-jelly btn-secondary text-center">
                Ich rufe an
            </a>
            </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-brandGreen">500+</div>
            <div className="text-sm text-nightBlue/60">Produkte</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-brandBlue">Ab 1 Stk</div>
            <div className="text-sm text-nightBlue/60">Bestellmenge</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl text-brandGreen">24h</div>
            <div className="text-sm text-nightBlue/60">Antwortzeit</div>
          </div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/Werbemittel_900 x1200 px.png"
          alt="Werbemittel & Give-Aways"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
</section>

      {/* Was wir anbieten */}
      <section className="section bg-candyWhite">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold text-4xl md:text-4xl text-nightBlue mb-4">
              Was wir anbieten
            </h2>
            <p className="text-lg text-nightBlue/70 max-w-2xl mx-auto">
              Eine große Auswahl an Werbeartikeln für jeden Anlass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produkt 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <Gift size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Klassische Werbeartikel
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                Kugelschreiber, Notizblöcke, USB-Sticks, Schlüsselanhänger, Feuerzeuge, 
                Lineale – die zeitlosen Klassiker für Ihre Markenbotschaft.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Große Auswahl an Farben</li>
                <li>✓ Verschiedene Drucktechniken</li>
                <li>✓ Schnelle Lieferung</li>
              </ul>
            </div>

            {/* Produkt 2 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Taschen & Tragetaschen
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                Stoffbeutel, Rucksäcke, Umhängetaschen, Laptoptaschen – praktische Begleiter 
                mit Ihrem Logo für lange Sichtbarkeit.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Nachhaltige Materialien</li>
                <li>✓ Verschiedene Größen & Formen</li>
                <li>✓ Ideal für Messen & Events</li>
              </ul>
            </div>

            {/* Produkt 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Lanyards & Badges
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                Schlüsselbänder für Events, Messen und Mitarbeiter-Ausweise. In verschiedenen 
                Breiten und mit diversen Verschlüssen erhältlich.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Ein- oder beidseitig bedruckt</li>
                <li>✓ Mit Sicherheitsverschluss</li>
                <li>✓ Auch aus Recyclingmaterial</li>
              </ul>
            </div>

            {/* Produkt 4 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <Coffee size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Trinkflaschen & Tassen
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                Wiederverwendbare Werbegeschenke mit Nachhaltigkeitsfaktor. Kaffeetassen, 
                Thermosflaschen, Wasserflaschen – täglich im Einsatz.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Verschiedene Materialien</li>
                <li>✓ Spülmaschinenfest</li>
                <li>✓ Großer Druckbereich</li>
              </ul>
            </div>

            {/* Produkt 5 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <Shirt size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Textilien & Bekleidung
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                T-Shirts, Poloshirts, Caps, Schürzen – perfekt für Events, Mitarbeiter 
                und als Premium-Werbegeschenk.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Hochwertige Qualität</li>
                <li>✓ Viele Farben & Größen</li>
                <li>✓ Stick oder Druck</li>
              </ul>
            </div>

            {/* Produkt 6 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mb-6">
                <Package size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-3">
                Und vieles mehr...
              </h3>
              <p className="text-nightBlue/70 leading-relaxed mb-4">
                Powerbanks, Regenschirme, Notizbücher, Kalender, Mousepads, Werkzeuge – 
                über 500 verschiedene Werbeartikel stehen zur Auswahl.
              </p>
              <ul className="space-y-2 text-sm text-nightBlue/60">
                <li>✓ Individuelle Beratung</li>
                <li>✓ Musterversand möglich</li>
                <li>✓ Flexible Lieferzeiten</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
<section className="section bg-gradient-to-br from-brandGreen/10 to-brandBlue/10">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="font-heading font-semibold text-3xl md:text-4xl text-nightBlue mb-4">
        Warum Werbemittel bei Bearshop?
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mx-auto mb-4">
          <Package size={32} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-nightBlue mb-2">
          Große Auswahl
        </h3>
        <p className="text-nightBlue/70">
          Über 500 verschiedene Werbeartikel – von klassisch bis außergewöhnlich
        </p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mx-auto mb-4">
          <Sparkles size={32} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-nightBlue mb-2">
          Individuelle Gestaltung
        </h3>
        <p className="text-nightBlue/70">
          Ihr Logo, Ihre Farben – wir setzen Ihre Corporate Identity perfekt um
        </p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mx-auto mb-4">
          <ShoppingBag size={32} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-nightBlue mb-2">
          Flexible Mengen
        </h3>
        <p className="text-nightBlue/70">
          Von Einzelstücken bis Großauflagen – wir produzieren nach Ihrem Bedarf
        </p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brandGreen to-brandBlue flex items-center justify-center mx-auto mb-4">
          <Zap size={32} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-nightBlue mb-2">
          Schnelle Produktion
        </h3>
        <p className="text-nightBlue/70">
          Kurze Lieferzeiten und persönliche Beratung für Ihr Projekt
        </p>
      </div>
    </div>
  </div>
</section>

{/* Anwendungsbereiche */}
<section className="section bg-candyWhite">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="font-heading font-semibold text-3xl md:text-4xl text-nightBlue mb-4">
        Perfekt für
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <PartyPopper size={24} className="text-brandGreen" />
          <h3 className="font-heading font-semibold text-xl text-nightBlue">
            Messen & Events
          </h3>
        </div>
        <p className="text-nightBlue/70 text-justify">
          Hinterlassen Sie bleibenden Eindruck bei Besuchern. Werbemittel sind die perfekten 
          Give-Aways für Ihren Messestand und sorgen dafür, dass Ihre Marke im Gedächtnis bleibt.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Gift size={24} className="text-brandGreen" />
          <h3 className="font-heading font-semibold text-xl text-nightBlue">
            Kundengeschenke
          </h3>
        </div>
        <p className="text-nightBlue/70 text-justify">
          Zeigen Sie Wertschätzung mit durchdachten Werbegeschenken. Ob zu Weihnachten, 
          Jubiläen oder als Dankeschön – individuelle Werbeartikel kommen immer gut an.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Users size={24} className="text-brandGreen" />
          <h3 className="font-heading font-semibold text-xl text-nightBlue">
            Mitarbeiter-Onboarding
          </h3>
        </div>
        <p className="text-nightBlue/70 text-justify">
          Begrüßen Sie neue Mitarbeiter mit einem gebrandeten Welcome-Paket. Von Notizbuch 
          über Trinkflasche bis zur Tragetasche – für einen gelungenen Start.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-nightBlue to-brandBlue text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Bereit für Ihr Werbemittel-Projekt?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Wir beraten Sie gerne kostenlos und unverbindlich. Kontaktieren Sie uns für ein 
            individuelles Angebot.
          </p>
          
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-semibold text-base bg-brandGreen text-white hover:bg-brandGreen/90 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Jetzt anfragen
                </a>
                <a href="tel:+43800665518" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-semibold text-base bg-white text-nightBlue hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Ich rufe an
                </a>
              </div>
            </div>
          </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}