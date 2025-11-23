import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum - Bearshop',
  description: 'Impressum und rechtliche Informationen von Bearshop.at',
};

export default function Impressum() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 bg-candyWhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-nightBlue mb-12">
              Impressum
            </h1>
            
            <div className="prose prose-lg text-nightBlue/80 space-y-8">
              {/* Firmendaten */}
              <section>
                <p className="font-semibold text-nightBlue text-xl">Neticare GmbH</p>
                <p>(Gesellschaft mit beschränkter Haftung)</p>
                <p className="mt-4">
                  <strong>Anschrift:</strong> Marksteinergasse 11, 1210 Wien, Österreich<br />
                  <strong>Firmenbuch-Gericht:</strong> Handelsgericht Wien<br />
                  <strong>Firmenbuchnummer:</strong> 653344a<br />
                  <strong>UID-Nummer:</strong> ATU82285359<br />
                  <strong>Geschäftsführung:</strong> Sebastian Grätzer
                </p>
              </section>

              {/* Kontakt */}
              <section>
                <p>
                  <strong>Tel.:</strong> <a href="tel:+43800665518" className="text-brandGreen hover:text-brandBlue transition-colors">+43 800 66 55 18</a><br />
                  <strong>E-Mail:</strong> <a href="mailto:office@neticare.at" className="text-brandGreen hover:text-brandBlue transition-colors">office@neticare.at</a>
                </p>
              </section>

              {/* Bankverbindung */}
              <section>
                <p className="font-semibold text-nightBlue">Bankverbindung:</p>
                <p>
                  Raiffeisenbank Wienerwald eGen<br />
                  IBAN: AT93 3266 7000 0002 7763
                </p>
              </section>

              {/* Disclaimer */}
              <section className="text-justify">
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Disclaimer (Haftungsausschluss)
                </h2>
                <p>
                  Die vorliegende Website wurde mit höchster juristischer Sorgfalt erstellt. 
                  Dennoch übernimmt die Neticare GmbH keinerlei Haftung für die Richtigkeit, 
                  Vollständigkeit und/oder Aktualität der bereitgestellten Informationen. 
                  Jegliche Haftung für unmittelbare oder mittelbare Schäden, Schadenersatzforderungen 
                  oder Folgeschäden, unabhängig von der Art und dem Rechtsgrund, die durch den 
                  Zugriff oder die Verwendung der Website entstehen können, wird ausgeschlossen.
                </p>
                <p className="mt-4">
                  Die Website unterliegt österreichischem Recht. Sofern nicht anders ausgewiesen, 
                  steht das Urheberrecht an sämtlichen Inhalten der Neticare GmbH zu bzw. hat sie 
                  entsprechende Nutzungsrechte an fremden Inhalten. Jede Art der Verbreitung bedarf 
                  der vorherigen schriftlichen Zustimmung von Neticare, sofern das Urheberrecht 
                  nichts anderes vorsieht.
                </p>
                <p className="mt-4">
                  Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform 
                  der EU zu richten:{' '}
                  <a 
                    href="http://ec.europa.eu/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:text-brandBlue transition-colors"
                  >
                    http://ec.europa.eu/odr
                  </a>
                  . Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}