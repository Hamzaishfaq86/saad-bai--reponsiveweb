import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, FileText, CheckCircle, Send, Clock } from "lucide-react";

export default function Ablauf() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Kontaktaufnahme",
      description: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Wir nehmen uns Zeit für Ihre Fragen und klären den ersten Bedarf.",
      duration: "5 Minuten",
      details: [
        "Telefonische Erstberatung",
        "Klärung der Schadensart",
        "Besprechung Ihrer Situation",
        "Kostenlose Beratung"
      ]
    },
    {
      icon: Calendar,
      number: "02",
      title: "Terminvereinbarung",
      description: "Wir vereinbaren einen Termin zur Begutachtung Ihres Fahrzeugs – in der Regel innerhalb von 24 Stunden.",
      duration: "Innerhalb 24h",
      details: [
        "Flexible Terminwahl",
        "Vor-Ort-Termin möglich",
        "Auch am Wochenende",
        "Schnelle Reaktionszeit"
      ]
    },
    {
      icon: FileText,
      number: "03",
      title: "Begutachtung vor Ort",
      description: "Wir kommen zu Ihnen oder Sie kommen zu uns. Die Begutachtung erfolgt gründlich und professionell mit modernster Technik.",
      duration: "30-60 Minuten",
      details: [
        "Vollständige Schadensdokumentation",
        "Professionelle Fotodokumentation",
        "Vermessung aller Schäden",
        "Technische Prüfung",
        "Lackdickenmessung bei Bedarf"
      ]
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Gutachtenerstellung",
      description: "Wir erstellen ein detailliertes, gerichtsfestes Gutachten mit allen relevanten Informationen für Ihre Versicherung.",
      duration: "2-3 Werktage",
      details: [
        "Detaillierte Schadensaufstellung",
        "Reparaturkostenberechnung",
        "Wertminderung",
        "Wiederbeschaffungswert",
        "Nutzungsausfall",
        "Gerichtsfeste Dokumentation"
      ]
    },
    {
      icon: Send,
      number: "05",
      title: "Übermittlung & Abrechnung",
      description: "Sie erhalten Ihr Gutachten digital und auf Wunsch auch in Papierform. Die Abrechnung erfolgt direkt mit der Versicherung.",
      duration: "Sofort",
      details: [
        "Digitales Gutachten per E-Mail",
        "Gedruckte Version auf Wunsch",
        "Direkte Versicherungsabrechnung",
        "Unterstützung bei Rückfragen",
        "Nachbetreuung inklusive"
      ]
    }
  ];

  const documents = [
    "Fahrzeugschein (Zulassungsbescheinigung Teil I)",
    "Fahrzeugbrief (Zulassungsbescheinigung Teil II) falls vorhanden",
    "Unfallbericht / Europäischer Unfallbericht",
    "Fotos vom Unfallort (falls vorhanden)",
    "Kontaktdaten des Unfallgegners",
    "Versicherungsdaten",
    "Polizeibericht (falls vorhanden)"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              So läuft eine Begutachtung ab
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Von der ersten Kontaktaufnahme bis zum fertigen Gutachten – 
              wir begleiten Sie Schritt für Schritt durch den gesamten Prozess.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Number Badge */}
                      <div className="md:col-span-2 bg-primary text-primary-foreground flex items-center justify-center p-4 sm:p-6 lg:p-8">
                        <div className="text-center">
                          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{step.number}</div>
                          <div className="flex items-center justify-center space-x-1 text-xs sm:text-sm">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-10 p-4 sm:p-6 lg:p-8">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="bg-accent p-2 sm:p-3 rounded-lg flex-shrink-0">
                            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        
                        <div className="ml-0 sm:ml-12 lg:ml-16">
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Details:</h4>
                          <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2 text-sm sm:text-base">✓</span>
                                <span className="text-xs sm:text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Diese Unterlagen benötigen Sie
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 text-center px-4">
              Für eine reibungslose Begutachtung bereiten Sie bitte folgende Dokumente vor:
            </p>
            
            <Card>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-foreground/90">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-accent rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong>Hinweis:</strong> Sollten Sie nicht alle Unterlagen zur Hand haben, 
                    ist das kein Problem. Wir können die Begutachtung trotzdem durchführen und 
                    fehlende Informationen nachträglich ergänzen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4">
              Gesamtdauer des Prozesses
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-base sm:text-lg font-semibold mb-2">Terminvergabe</div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Schnelle Reaktionszeit für Ihren Termin
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1h</div>
                  <div className="text-base sm:text-lg font-semibold mb-2">Begutachtung</div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Vor-Ort-Termin mit vollständiger Dokumentation
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2-3</div>
                  <div className="text-base sm:text-lg font-semibold mb-2">Werktage</div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Bis zum fertigen Gutachten
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
              Bereit für Ihr Gutachten?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
              Starten Sie jetzt den Prozess und erhalten Sie Ihr professionelles Gutachten 
              innerhalb weniger Tage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  Jetzt Termin vereinbaren
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
