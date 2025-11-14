export default function Impressum() {
  return (
    <div className="min-h-screen">
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <strong>KFZ Gutachter Timur Abali</strong><br />
                  Sachverständigenbüro für Kraftfahrzeuge<br />
                  Bad Harzburg, Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Kontakt</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Telefon: <a href="tel:017640422990" className="text-primary hover:underline">0176 40422990</a><br />
                  E-Mail: <a href="mailto:info@gutachter-abali.de" className="text-primary hover:underline">info@gutachter-abali.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Berufsbezeichnung</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Freiberuflicher KFZ-Sachverständiger<br />
                  Zertifizierter Kraftfahrzeugsachverständiger
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Zuständige Kammer</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Bundesverband der freiberuflichen und unabhängigen Sachverständigen für das Kraftfahrzeugwesen e.V.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">EU-Streitschlichtung</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Haftung für Inhalte</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Urheberrecht</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
