import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AGB - Bearshop',
  description: 'Allgemeine Geschäftsbedingungen von Bearshop.at',
};

export default function AGB() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 bg-candyWhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-nightBlue mb-12">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <div className="prose prose-lg text-nightBlue/80 space-y-8 text-justify">
              
              {/* § 1 Geltungsbereich */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 1 Geltungsbereich
                </h2>
                <p>
                  1.1. Die nachstehenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen 
                  zwischen uns, der Neticare GmbH, Marksteinergasse 11, 1210 Wien, und Ihnen als Kunden.
                </p>
                <p className="mt-4">
                  1.2. Bei den Produkten handelt es sich grundsätzlich um kundenindividuell gefertigte Produkte. 
                  Insbesondere sind darunter mit dem gewünschten Druck versehene Produkte, wie T-Shirts, Pullover, 
                  Jacken, Taschen oder sonstige Druckerzeugnisse zu verstehen. Auch die Auswahl aus verschiedenen 
                  Druckmotiven ist als kundenindividuell angefertigtes Produkt zu verstehen.
                </p>
                <p className="mt-4">
                  1.3. Es gilt die jeweils zum Zeitpunkt der Bestellung gültige Fassung der AGB.
                </p>
                <p className="mt-4">
                  1.4. Abweichende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung 
                  wird ausdrücklich schriftlich zugestimmt.
                </p>
              </section>

              {/* § 2 Vertragspartner */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 2 Vertragspartner
                </h2>
                <p>
                  Der Kaufvertrag kommt zustande mit der Neticare GmbH, Marksteinergasse 11, 1210 Wien, 
                  Firmenbuch-Gericht: Handelsgericht Wien, Firmenbuchnummer: 653344a, UID-Nummer: ATU82285359.
                </p>
              </section>

              {/* § 3 Vertragsschluss */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 3 Vertragsschluss
                </h2>
                <p>
                  3.1. Die Darstellung der Produkte im Online-Shop oder sonstigen Medien stellt kein rechtlich 
                  bindendes Angebot dar, sondern ist eine unverbindliche Aufforderung an den Kunden, Produkte 
                  zu bestellen.
                </p>
                <p className="mt-4">
                  3.2. Durch Anklicken des Buttons „Jetzt kaufen" geben Sie eine verbindliche Bestellung der 
                  im Warenkorb enthaltenen Waren ab.
                </p>
                <p className="mt-4">
                  3.3. Der Vertragsschluss erfolgt in deutscher Sprache.
                </p>
                <p className="mt-4">
                  3.4. Die Bestätigung des Eingangs Ihrer Bestellung erfolgt unmittelbar nach dem Absenden 
                  der Bestellung per E-Mail. Diese E-Mail stellt noch keine Annahme Ihrer Bestellung dar.
                </p>
                <p className="mt-4">
                  3.5. Ein Vertrag kommt erst zustande, wenn wir Ihre Bestellung durch eine Annahmeerklärung 
                  oder durch Zusendung der bestellten Ware annehmen.
                </p>
              </section>

              {/* § 4 Eigentumsvorbehalt */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 4 Eigentumsvorbehalt
                </h2>
                <p>
                  Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.
                </p>
              </section>

              {/* § 5 Preise und Versandkosten */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 5 Preise und Versandkosten
                </h2>
                <p>
                  5.1. Alle Preise sind Gesamtpreise und enthalten die gesetzliche Umsatzsteuer.
                </p>
                <p className="mt-4">
                  5.2. Der Kunde trägt die Versandkosten.
                </p>
                <p className="mt-4">
                  5.3. Die Ware wird auf dem Versandweg geliefert.
                </p>
                <p className="mt-4">
                  5.4. Die Lieferung erfolgt innerhalb von 15-21 Werktagen.
                </p>
              </section>

              {/* § 6 Zahlungsmodalitäten */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 6 Zahlungsmodalitäten
                </h2>
                <p>
                  6.1. Die Zahlung erfolgt wahlweise per Vorkasse, Paypal oder Kreditkarte.
                </p>
                <p className="mt-4">
                  6.2. Bei Auswahl der Zahlungsart „Vorkasse" nennen wir Ihnen unsere Bankverbindung in einer 
                  separaten E-Mail und liefern die Ware nach Zahlungseingang.
                </p>
              </section>

              {/* § 7 Gewährleistung */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 7 Gewährleistung
                </h2>
                <p>
                  Die Gewährleistung richtet sich nach den gesetzlichen Bestimmungen.
                </p>
              </section>

              {/* § 8 Haftung */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 8 Haftung
                </h2>
                <p>
                  8.1. Für eine Haftung auf Schadenersatz gelten unbeschadet der sonstigen gesetzlichen 
                  Anspruchsvoraussetzungen folgende Haftungsausschlüsse und -begrenzungen.
                </p>
                <p className="mt-4">
                  8.2. Wir haften unbeschränkt, soweit die Schadensursache auf einer vorsätzlichen oder grob 
                  fahrlässigen Pflichtverletzung durch uns oder eines gesetzlichen Vertreters oder 
                  Erfüllungsgehilfen von uns beruht.
                </p>
                <p className="mt-4">
                  8.3. Im Übrigen ist eine Haftung von uns ausgeschlossen.
                </p>
                <p className="mt-4">
                  8.4. Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies auch für die 
                  persönliche Haftung unserer Angestellten, Arbeitnehmer, Mitarbeiter, gesetzlichen Vertreter 
                  und Erfüllungsgehilfen.
                </p>
              </section>

              {/* § 9 Widerrufsrecht */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 9 Widerrufsrecht
                </h2>
                <p>
                  9.1. Wenn Sie Verbraucher sind (also eine natürliche Person, die die Bestellung zu einem Zweck 
                  abgibt, der weder Ihrer gewerblichen oder selbständigen beruflichen Tätigkeit zugerechnet 
                  werden kann), steht Ihnen nach Maßgabe der gesetzlichen Bestimmungen grundsätzlich ein 
                  Widerrufsrecht zu. Ein Verbraucher ist eine natürliche Person, die Rechtsgeschäfte zu Zwecken 
                  abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen 
                  Tätigkeit zugerechnet werden können.
                </p>
                <p className="mt-4">
                  9.2. Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung.
                </p>
                <p className="mt-4">
                  9.3. Das Widerrufsrecht besteht nicht oder erlischt bei Verträgen zur Lieferung von Waren, 
                  die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung 
                  durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des 
                  Verbrauchers zugeschnitten sind.
                </p>
              </section>

              {/* § 10 Widerrufsbelehrung */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 10 Widerrufsbelehrung
                </h2>
                <p className="font-semibold">Widerrufsrecht</p>
                <p className="mt-2">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angaben von Gründen diesen Vertrag zu widerrufen.
                </p>
                <p className="mt-4">
                  Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, 
                  der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
                </p>
                <p className="mt-4">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
                </p>
                <p className="mt-4 pl-4">
                  Neticare GmbH<br />
                  Marksteinergasse 11<br />
                  1210 Wien<br />
                  Tel.: +43 800 66 55 18<br />
                  E-Mail: office@neticare.at
                </p>
                <p className="mt-4">
                  mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) 
                  über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das 
                  beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
                <p className="mt-4">
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
                  Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>

                <p className="font-semibold mt-6">Folgen des Widerrufs</p>
                <p className="mt-2">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten 
                  haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus 
                  ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste 
                  Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag 
                  zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. 
                  Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen 
                  Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; 
                  in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                </p>
                <p className="mt-4">
                  Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie 
                  den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der 
                  frühere Zeitpunkt ist.
                </p>
                <p className="mt-4">
                  Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, 
                  an dem Sie uns über den Widerruf dieses Vertrages unterrichten, an uns zurückzusenden oder zu 
                  übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
                </p>
                <p className="mt-4">
                  Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
                </p>
                <p className="mt-4">
                  Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf 
                  einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen 
                  Umgang mit ihnen zurückzuführen ist.

                </p>
              </section>

              {/* § 11 Muster-Widerrufsformular */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 11 Muster-Widerrufsformular
                </h2>
                <p>
                  Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden 
                  Sie es zurück.
                </p>
                <div className="mt-4 p-6 bg-white/50 rounded-2xl border border-nightBlue/10">
                  <p>An:</p>
                  <p className="mt-2">
                    Neticare GmbH<br />
                    Marksteinergasse 11<br />
                    1210 Wien<br />
                    E-Mail: office@neticare.at
                  </p>
                  <p className="mt-4">
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf 
                    der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)
                  </p>
                  <p className="mt-4">
                    Bestellt am (*) / erhalten am (*): _________________
                  </p>
                  <p className="mt-2">
                    Name des/der Verbraucher(s): _________________
                  </p>
                  <p className="mt-2">
                    Anschrift des/der Verbraucher(s): _________________
                  </p>
                  <p className="mt-4">
                    Datum: _________________
                  </p>
                  <p className="mt-2">
                    Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _________________
                  </p>
                  <p className="mt-4 text-sm text-nightBlue/60">
                    (*) Unzutreffendes streichen
                  </p>
                </div>
              </section>

              {/* § 12 Schlussbestimmungen */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 12 Schlussbestimmungen
                </h2>
                <p>
                  12.1. Es gilt österreichisches Recht.
                </p>
                <p className="mt-4">
                  12.2. Ist der Kunde Unternehmer, juristische Person des öffentlichen Rechts oder 
                  öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten aus 
                  diesem Vertrag der Geschäftssitz von Neticare GmbH.
                </p>
                <p className="mt-4">
                  12.3. Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen 
                  übrigen Teilen verbindlich.
                </p>
              </section>

              {/* § 13 Streitbeilegung */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  § 13 Streitbeilegung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
                  die Sie hier finden:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:text-brandBlue transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-4">
                  Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
                  sind wir nicht verpflichtet und nicht bereit.
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