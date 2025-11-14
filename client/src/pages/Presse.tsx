import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Newspaper } from "lucide-react";

export default function Presse() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Presse & Auszeichnungen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Unser Sachverständigenbüro in den Medien und unsere professionelle Anerkennung
            </p>
          </div>
        </div>
      </section>

      {/* Featured in FOCUS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* FOCUS Badge */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-secondary/10 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                <span className="font-semibold text-sm sm:text-lg">Featured on FOCUS Online</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Veröffentlicht am 21. Februar 2025
              </p>
            </div>

            {/* Images */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <img 
                  src="/images/timur-abali-person.webp" 
                  alt="Timur Abali - KFZ Sachverständiger" 
                  className="rounded-lg shadow-xl mx-auto"
                />
                <p className="text-sm text-muted-foreground mt-3">Timur Abali - KFZ Sachverständiger</p>
              </div>
              <div className="text-center">
                <img 
                  src="/images/newspaper-ad-timur-abali.webp" 
                  alt="Zeitungsanzeige KFZ Gutachter Timur Abali" 
                  className="rounded-lg shadow-xl mx-auto"
                />
                <p className="text-sm text-muted-foreground mt-3">Zeitungsanzeige</p>
              </div>
            </div>

            {/* Article Card */}
            <Card className="mb-6 sm:mb-8">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Newspaper className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      KFZ-Sachverständiger in Bad Harzburg – Ihr Experte für Unfallgutachten und Schadensbewertung
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Ein Ratgeber mit Unterstützung von KFZ-Sachverständigenbüro Abali
                    </p>
                  </div>
                </div>

                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="lead text-base sm:text-lg mb-4 sm:mb-6">
                    <strong>Schadensbewertung</strong> – Als KFZ Gutachter aus Bad Harzburg bietet Timur Abali, 
                    vom KFZ-Sachverständigen Büro Abali, professionelle Unterstützung bei allen Fragen rund ums Auto, 
                    speziell bei Haftpflichtschäden, Unfallgutachten und Versicherungsansprüchen. Das Büro ist im 
                    Landkreis Goslar und Umgebung tätig und garantiert Ihnen kompetente Beratung, transparente 
                    Gutachten und schnellen Service – und das 24/7.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Warum sollte man einen KFZ Gutachter beauftragen?</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Ob Sie in einen Unfall verwickelt wurden oder ein Schadengutachten für Ihr Auto benötigen, ein 
                    unabhängiger KFZ Gutachter sorgt dafür, dass Sie Ihre Rechte optimal wahren. In Deutschland haben 
                    Sie das Recht, einen Gutachter Ihrer Wahl zu beauftragen – und das komplett kostenlos, wenn es um 
                    Haftpflichtschäden geht! Die gegnerische Versicherung übernimmt in diesen Fällen die Kosten für den 
                    Gutachter, sodass Sie keinerlei finanziellen Aufwand haben.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Bei Haftpflichtschäden: Gutachter frei wählen und kostenlos beauftragen</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Viele Autofahrer wissen nicht, dass bei einem Haftpflichtschaden der Gutachter frei gewählt werden kann. 
                    Das bedeutet, Sie sind nicht an die Gutachter der Versicherung des Unfallgegners gebunden. Sie haben die 
                    Möglichkeit, einen unabhängigen Gutachter zu beauftragen – und das ohne zusätzliche Kosten für Sie. In 
                    solchen Fällen übernimmt die gegnerische Versicherung alle anfallenden Gutachtergebühren.
                  </p>
                  <p className="mb-4">
                    Es ist entscheidend, einen neutralen Gutachter zu wählen, der objektiv und transparent arbeitet. Als 
                    KFZ-Sachverständiger mit langjähriger Erfahrung bin ich Ihr verlässlicher Partner, der sicherstellt, 
                    dass Ihre Interessen gewahrt bleiben.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Der Rechtsbeistand bei Haftpflichtschäden ist für Sie auch kostenlos</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Neben der Beauftragung eines Gutachters haben Sie in Fällen von Haftpflichtschäden auch das Recht auf 
                    kostenlosen Rechtsbeistand. Sollten Sie rechtliche Unterstützung benötigen, arbeitet das Team eng mit 
                    einer spezialisierten Kanzlei für Verkehrsrecht zusammen, die Ihnen hilft, Ihre Ansprüche gegenüber der 
                    gegnerischen Versicherung durchzusetzen.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Unsere Dienstleistungen</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Das KFZ-Sachverständigen Büro Abali bietet eine Vielzahl an Services, die Ihnen helfen, Ihre Ansprüche 
                    im Schadensfall schnell und effizient durchzusetzen:
                  </p>
                  <ul className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Unfallgutachten:</strong> Detaillierte Gutachten nach einem Unfall, die den Schaden an 
                      Ihrem Fahrzeug dokumentieren und die Grundlage für die Versicherungsregulierung bilden.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Schadengutachten:</strong> Bewertung aller Arten von Fahrzeugschäden mit präziser 
                      Einschätzung der Reparaturkosten und des Restwerts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Gebrauchtwagencheck:</strong> Fachkundige Prüfung vor dem Kauf, damit Sie keine bösen 
                      Überraschungen erleben.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Technische Beratung:</strong> Fundierte Beratung bei technischen Fragen und 
                      Unterstützung bei der Lösung technischer Probleme.</span>
                    </li>
                  </ul>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Oldtimer Wertgutachten – Professionell und zuverlässig</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Ein professionelles Wertgutachten ist oft unerlässlich, wenn ein Oldtimer besessen oder verkauft werden 
                    soll. Es liefert eine realistische Einschätzung des Fahrzeugwertes und ist besonders hilfreich bei 
                    Versicherungsfragen, Verkaufsverhandlungen oder Erbangelegenheiten.
                  </p>
                  <p className="mb-4">
                    Hochwertige Oldtimer Wertgutachten sind in Zusammenarbeit mit <strong>Classic Analytics</strong> erhältlich. 
                    Classic Analytics ist ein erfahrener Partner, spezialisiert auf die Bewertung klassischer Fahrzeuge. Durch 
                    fundierte Expertise und moderne Analysemethoden entstehen präzise und verlässliche Gutachten.
                  </p>

                  <div className="bg-accent/30 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
                    <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Vorteile eines Wertgutachtens mit Classic Analytics:</h4>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Fachkundige Bewertung durch erfahrene Experten</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Modernste Technik und innovative Analysetools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Individuelle Beratung und persönliche Betreuung</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Rechtssicherheit bei Versicherungen und Behörden</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Kundenzufriedenheit steht an erster Stelle</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Die Zufriedenheit der Kunden ist das oberste Ziel. Sie erhalten nicht nur ein Gutachten, sondern einen 
                    Service, der auf Vertrauen und Transparenz basiert. Das Team kümmert sich um Ihre Anliegen mit höchster 
                    Sorgfalt und bietet Ihnen eine kostenlose, unverbindliche Beratung an – jederzeit.
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">24/7 Erreichbarkeit</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Unfälle oder Schäden passieren oft unvorhersehbar. Deshalb ist das KFZ-Sachverständigen Büro rund um die 
                    Uhr erreichbar – 24 Stunden am Tag, 7 Tage die Woche.
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary rounded p-4 sm:p-6 my-6 sm:my-8">
                    <p className="font-semibold text-base sm:text-lg mb-2">
                      Egal, ob Sie ein Unfallgutachten, ein Schadengutachten oder eine technische Beratung benötigen – 
                      KFZ-Sachverständigen Büro Abali ist Ihr kompetenter Partner in Bad Harzburg und im Landkreis Goslar.
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                  <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontaktinformationen</h4>
                  <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p><strong>KFZ-Sachverständigenbüro Abali</strong></p>
                    <p>Brunnenstr. 10</p>
                    <p>38667 Bad Harzburg</p>
                    <p>Telefon: <a href="tel:+4917640422990" className="text-primary hover:underline">+49 176 40422990</a></p>
                    <p>E-Mail: <a href="mailto:info@gutachter-abali.de" className="text-primary hover:underline">info@gutachter-abali.de</a></p>
                    <p>Website: <a href="https://www.gutachter-abali.de" className="text-primary hover:underline">www.gutachter-abali.de</a></p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <a 
                    href="https://unternehmen.focus.de/kfz-sachverstaendiger-bad-harzburg.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                      <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Originalartikel auf FOCUS.de lesen
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Source Attribution */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Quelle: FOCUS Online Unternehmensverzeichnis<br />
                Veröffentlicht: 21. Februar 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Recognition Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Mediale Anerkennung
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 sm:mb-12 px-4">
              Unser Sachverständigenbüro wird von renommierten Medien und Fachportalen anerkannt
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Card>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="bg-secondary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">⭐</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">FOCUS Online</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    Gelistet im FOCUS Unternehmensverzeichnis als professioneller KFZ-Sachverständiger
                  </p>
                  <a 
                    href="https://unternehmen.focus.de/kfz-sachverstaendiger-bad-harzburg.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-xs sm:text-sm"
                  >
                    Zum Eintrag →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="bg-secondary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">🏛️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Classic Analytics</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    Partnerschaft für professionelle Oldtimer-Bewertungen mit modernsten Standards
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-primary text-primary-foreground">
        <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Benötigen Sie ein professionelles Gutachten?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
              Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir sind 24/7 für Sie erreichbar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  WhatsApp Kontakt
                </Button>
              </a>
              <a href="tel:017640422990" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
