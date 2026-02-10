import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung - Bearshop',
  description: 'Datenschutzerklärung von Bearshop.at - Informationen zum Schutz Ihrer Daten',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 bg-candyWhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-nightBlue mb-12">
              Datenschutzerklärung
            </h1>
            
            <div className="prose prose-lg text-nightBlue/80 space-y-8 text-justify">
              
              {/* Einleitung */}
              <section>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten 
                  Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). 
                  In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der 
                  Datenverarbeitung im Rahmen unserer Website.
                </p>
              </section>

              {/* Kontakt mit uns */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Kontakt mit uns
                </h2>
                <p>
                  Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden 
                  Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
                  sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Cookies
                </h2>
                <p>
                  Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, 
                  die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
                </p>
                <p className="mt-4">
                  Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben 
                  auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser 
                  beim nächsten Besuch wiederzuerkennen.
                </p>
                <p className="mt-4">
                  Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über 
                  das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.
                </p>
                <p className="mt-4">
                  Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
                </p>
              </section>

              {/* Web-Analyse */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Web-Analyse
                </h2>
                <p>
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. 
                  („Google"). Google Analytics verwendet sog. „Cookies", Textdateien, die auf Ihrem 
                  Computer gespeichert werden und die eine Analyse der Benutzung der Website durch 
                  Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung 
                  dieser Website werden in der Regel an einen Server von Google in den USA übertragen 
                  und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, 
                  wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen 
                  Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum 
                  zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google 
                  in den USA übertragen und dort gekürzt.
                </p>
                <p className="mt-4">
                  Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um 
                  Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten 
                  zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung 
                  verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen 
                  von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen 
                  Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine 
                  entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf 
                  hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website 
                  vollumfänglich werden nutzen können.
                </p>
                <p className="mt-4">
                  Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre 
                  Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die 
                  Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden 
                  Link verfügbare Browser-Plugin herunterladen und installieren:{' '}
                  <a 
                    href="http://tools.google.com/dlpage/gaoptout?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGreen hover:text-brandBlue transition-colors"
                  >
                    http://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                </p>
              </section>

              {/* Ihre Rechte */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Ihre Rechte
                </h2>
                <p>
                  Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf 
                  Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und 
                  Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das 
                  Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer 
                  Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. 
                  In Österreich ist dies die Datenschutzbehörde.
                </p>
              </section>

              {/* Kontaktdaten */}
              <section>
                <h2 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                  Sie erreichen uns unter folgenden Kontaktdaten
                </h2>
                <p>
                  <strong>Neticare GmbH</strong><br />
                  Marksteinergasse 11<br />
                  1210 Wien<br />
                  Österreich
                </p>
                <p className="mt-4">
                  <strong>Tel.:</strong>{' '}
                  <a href="tel:+43800665518" className="text-brandGreen hover:text-brandBlue transition-colors">
                    +43 800 66 55 18
                  </a><br />
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:office@neticare.at" className="text-brandGreen hover:text-brandBlue transition-colors">
                    office@neticare.at
                  </a>
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