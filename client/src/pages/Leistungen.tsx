import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Car, 
  Shield, 
  Clock, 
  Camera,
  ClipboardCheck,
  TrendingUp,
  Gem,
  CheckCircle,
  Phone,
  MessageCircle,
  ArrowRight
} from "lucide-react";

export default function Leistungen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Unfallgutachten",
      description: "Nach einem Verkehrsunfall benötigen Sie ein professionelles Gutachten, um Ihre Ansprüche gegenüber der Versicherung geltend zu machen. Wir dokumentieren alle Schäden präzise und erstellen ein gerichtsfestes Gutachten.",
      details: [
        "Vollständige Schadensdokumentation mit Fotos",
        "Ermittlung der Reparaturkosten",
        "Wertminderung des Fahrzeugs",
        "Wiederbeschaffungswert bei Totalschaden",
        "Nutzungsausfall und Mietwagenkosten"
      ],
      badge: "Beliebt"
    },
    {
      icon: Shield,
      title: "Haftpflichtschaden",
      description: "Bei einem Schaden, den ein Dritter verursacht hat, übernehmen wir die komplette Begutachtung und Abwicklung mit der gegnerischen Versicherung. Sie zahlen nichts – die Kosten trägt die Versicherung des Unfallverursachers.",
      details: [
        "Kostenlose Begutachtung für Sie",
        "Direkte Abrechnung mit gegnerischer Versicherung",
        "Durchsetzung aller Ansprüche",
        "Merkantile Wertminderung",
        "Unterstützung bei Mietwagen"
      ],
      badge: "Kostenlos"
    },
    {
      icon: Clock,
      title: "Kaskoschaden",
      description: "Bei Schäden, die durch Ihre Kaskoversicherung abgedeckt sind, erstellen wir ein detailliertes Gutachten zur Schadenshöhe. Dies gilt für Teil- und Vollkaskoschäden.",
      details: [
        "Schadensbewertung für Versicherung",
        "Reparaturkostenermittlung",
        "Totalschadenberechnung",
        "Wiederbeschaffungswert",
        "Restwertermittlung"
      ]
    },
    {
      icon: Car,
      title: "Fahrzeugbewertung",
      description: "Professionelle Wertermittlung Ihres Fahrzeugs für Kauf, Verkauf oder Finanzierung. Wir erstellen ein marktgerechtes Gutachten basierend auf Zustand, Ausstattung und Marktlage.",
      details: [
        "Marktwertermittlung",
        "Zustandsbewertung",
        "Ausstattungsanalyse",
        "Vergleich mit Marktpreisen",
        "Schriftliches Wertgutachten"
      ]
    },
    {
      icon: TrendingUp,
      title: "Gebrauchtwagenbewertung",
      description: "Vor dem Kauf oder Verkauf eines Gebrauchtwagens sollten Sie den tatsächlichen Wert kennen. Wir prüfen den Zustand und erstellen eine faire Bewertung.",
      details: [
        "Technische Zustandsprüfung",
        "Lackdickenmessung",
        "Mängelfeststellung",
        "Marktpreisanalyse",
        "Kaufberatung"
      ]
    },
    {
      icon: Gem,
      title: "Oldtimerbewertung",
      description: "Klassische Fahrzeuge und Oldtimer benötigen eine besondere Expertise. In Zusammenarbeit mit Classic Analytics bewerten wir Ihren Oldtimer nach anerkannten Standards und erstellen ein professionelles Gutachten für Versicherung oder Verkauf.",
      details: [
        "Zustandsbewertung nach Notensystem",
        "Originalitätsprüfung",
        "Marktwertermittlung mit Classic Analytics",
        "Restaurierungsgrad",
        "Versicherungsgutachten",
        "Fachkundige Bewertung durch Experten"
      ],
      badge: "Premium"
    },
    {
      icon: ClipboardCheck,
      title: "Wertgutachten",
      description: "Für besondere Anlässe wie Erbschaft, Scheidung, Finanzierung oder Versicherung erstellen wir detaillierte Wertgutachten, die rechtlich anerkannt sind.",
      details: [
        "Gerichtsfeste Dokumentation",
        "Verkehrswertermittlung",
        "Wiederbeschaffungswert",
        "Zeitwertberechnung",
        "Rechtlich anerkannt"
      ]
    },
    {
      icon: Camera,
      title: "Beweissicherung",
      description: "Schnelle und umfassende Dokumentation von Unfallschäden zur Sicherung aller Beweise. Wichtig für spätere Ansprüche und Gerichtsverfahren.",
      details: [
        "Sofortige Schadensdokumentation",
        "Professionelle Fotodokumentation",
        "Unfallspurenanalyse",
        "Zeugenaussagen",
        "Gerichtsfeste Beweissicherung"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className={`max-w-3xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Unsere Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Unsere Leistungen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed">
              Professionelle KFZ-Gutachten und Bewertungen für alle Ihre Bedürfnisse. 
              Mit jahrelanger Erfahrung und modernster Technik stehen wir Ihnen zur Seite.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`overflow-hidden border-2 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="bg-gradient-to-br from-accent/50 to-accent/30 relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
                      <div className="bg-gradient-to-br from-primary to-primary/70 p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3">
                          <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                            {service.title}
                          </CardTitle>
                          {service.badge && (
                            <span className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                              service.badge === "Kostenlos" 
                                ? "bg-green-500/20 text-green-700 border border-green-500/30" 
                                : service.badge === "Premium"
                                ? "bg-yellow-500/20 text-yellow-700 border border-yellow-500/30"
                                : "bg-blue-500/20 text-blue-700 border border-blue-500/30"
                            }`}>
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
                    <h4 className="font-semibold mb-4 sm:mb-5 flex items-center gap-2 text-base sm:text-lg">
                      <div className="w-1 h-5 sm:h-6 bg-primary rounded-full"></div>
                      Leistungsumfang:
                    </h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {service.details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Ihre Vorteile
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Warum KFZ Gutachter Timur Abali?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Schnelle Terminvergabe",
                description: "Innerhalb von 24 Stunden erhalten Sie einen Termin bei uns. Wir wissen, dass Zeit nach einem Unfall wichtig ist."
              },
              {
                icon: Shield,
                title: "Kostenlos bei Haftpflicht",
                description: "Bei unverschuldeten Unfällen zahlt die gegnerische Versicherung alle Kosten. Sie haben keine Ausgaben."
              },
              {
                icon: CheckCircle,
                title: "Gerichtsfest & Anerkannt",
                description: "Unsere Gutachten sind bei allen Versicherungen anerkannt und vor Gericht verwertbar."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center border-2 transition-all duration-300"
                >
                  <CardContent className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary to-primary/70 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
        
        <div className="container text-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Jetzt Kontakt aufnehmen
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Benötigen Sie ein Gutachten?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed px-4">
              Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir beraten Sie gerne 
              und erstellen Ihnen ein individuelles Angebot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-10 px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 relative z-50">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp Kontakt
                </Button>
              </a>
              <a href="tel:017640422990" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-xl hover:scale-105 transition-all duration-300 relative z-50">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white/90 text-sm sm:text-base px-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>24h Terminvergabe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
