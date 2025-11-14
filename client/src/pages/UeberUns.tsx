import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Shield, CheckCircle } from "lucide-react";

export default function UeberUns() {
  const qualifications = [
    "Zertifizierter KFZ-Sachverständiger",
    "Über 10 Jahre Branchenerfahrung",
    "Mitglied im Bundesverband der freiberuflichen und unabhängigen Sachverständigen",
    "Regelmäßige Fortbildungen und Schulungen",
    "Spezialisierung auf Unfallschäden und Fahrzeugbewertungen",
    "Gerichtlich anerkannter Sachverständiger"
  ];

  const values = [
    {
      icon: Shield,
      title: "Unabhängigkeit",
      description: "Als freier Sachverständiger arbeiten wir ausschließlich in Ihrem Interesse, ohne Bindung an Versicherungen oder Werkstätten."
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Standards bei der Gutachtenerstellung und Schadensdokumentation garantieren Ihnen rechtssichere Ergebnisse."
    },
    {
      icon: Users,
      title: "Kundennähe",
      description: "Persönliche Betreuung, schnelle Terminvergabe und direkte Ansprechbarkeit sind für uns selbstverständlich."
    },
    {
      icon: Target,
      title: "Präzision",
      description: "Detaillierte Analyse und exakte Bewertung sichern Ihre Ansprüche gegenüber Versicherungen und Unfallgegnern."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Über uns
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90">
              Ihr vertrauenswürdiger Partner für professionelle KFZ-Gutachten in der Region Bad Harzburg
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                KFZ Gutachter Timur Abali
              </h2>
              <p className="text-base sm:text-lg mb-4 text-muted-foreground leading-relaxed">
                Seit über einem Jahrzehnt bin ich als unabhängiger KFZ-Sachverständiger in der Region 
                Bad Harzburg, Goslar, Vienenburg, Braunlage und Wolfenbüttel tätig. Mit Leidenschaft 
                und Expertise unterstütze ich Fahrzeughalter bei der Durchsetzung ihrer Ansprüche nach 
                Verkehrsunfällen und bei der professionellen Bewertung ihrer Fahrzeuge.
              </p>
              <p className="text-base sm:text-lg mb-4 text-muted-foreground leading-relaxed">
                Meine Mission ist es, Ihnen in schwierigen Situationen Sicherheit und Klarheit zu 
                verschaffen. Egal ob Unfallschaden, Fahrzeugbewertung oder technische Fragen – ich 
                stehe Ihnen mit meinem Fachwissen kompetent zur Seite.
              </p>
              <p className="text-base sm:text-lg mb-6 text-muted-foreground leading-relaxed">
                Als freier Sachverständiger arbeite ich ausschließlich in Ihrem Interesse, unabhängig 
                von Versicherungen und Werkstätten. Diese Unabhängigkeit garantiert Ihnen eine objektive 
                und faire Begutachtung.
              </p>
            </div>
            
            <div className="relative mt-8 md:mt-0">
              <img 
                src="/images/timur-abali-person.webp" 
                alt="Timur Abali - KFZ Sachverständiger" 
                className="rounded-lg sm:rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-accent rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Qualifikationen & Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/90">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
              Unsere Werte
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Partnerships & Recognition */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
              Partnerschaften & Anerkennungen
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <a href="/presse">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="bg-secondary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-3xl sm:text-4xl">⭐</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Featured on FOCUS</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Gelistet im renommierten FOCUS Unternehmensverzeichnis als anerkannter KFZ-Sachverständiger
                    </p>
                    <p className="text-primary text-xs sm:text-sm mt-3 sm:mt-4 font-semibold">
                      Mehr erfahren →
                    </p>
                  </CardContent>
                </Card>
              </a>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏛️</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Classic Analytics</h4>
                  <p className="text-muted-foreground">
                    Partnerschaft für professionelle Oldtimer-Bewertungen mit modernsten Analysemethoden
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⚖️</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Rechtsberatung</h4>
                  <p className="text-muted-foreground">
                    Enge Zusammenarbeit mit spezialisierter Verkehrsrechtskanzlei für Ihre Ansprüche
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-12 max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
              Warum KFZ Gutachter Timur Abali?
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Jahre Erfahrung</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Langjährige Expertise in der KFZ-Begutachtung
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Gutachten erstellt</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Umfassende Erfahrung mit allen Fahrzeugtypen
                </p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-base sm:text-lg font-semibold mb-2">Schnelle Reaktion</div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Terminvergabe innerhalb von 24 Stunden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-primary text-primary-foreground">
        <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Lernen Sie uns kennen
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
              Vereinbaren Sie einen Termin für eine kostenlose Erstberatung. 
              Wir freuen uns darauf, Sie persönlich kennenzulernen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  Jetzt Kontakt aufnehmen
                </Button>
              </a>
              <a href="tel:017640422990" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  Anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
