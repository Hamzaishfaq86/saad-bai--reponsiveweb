import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Car, 
  Shield, 
  Clock, 
  Award, 
  Phone,
  CheckCircle,
  MapPin,
  Star,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, reports: 0, hours: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(10 * progress),
        reports: Math.floor(5000 * progress),
        hours: Math.floor(24 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ years: 10, reports: 5000, hours: 24 });
      }
    }, increment);
  };

  const services = [
    {
      icon: FileText,
      title: "Unfallgutachten",
      description: "Professionelle Schadensdokumentation nach Verkehrsunfällen für Ihre Versicherungsansprüche.",
      href: "/leistungen"
    },
    {
      icon: Car,
      title: "Fahrzeugbewertung",
      description: "Präzise Wertermittlung für Gebrauchtwagen, Oldtimer und Spezialfahrzeuge.",
      href: "/leistungen"
    },
    {
      icon: Shield,
      title: "Haftpflichtschaden",
      description: "Umfassende Begutachtung bei Schäden durch Dritte mit vollständiger Dokumentation.",
      href: "/leistungen"
    },
    {
      icon: Clock,
      title: "Kaskoschaden",
      description: "Schnelle und zuverlässige Schadensermittlung für Ihre Kaskoversicherung.",
      href: "/leistungen"
    }
  ];

  const benefits = [
    "Über 10 Jahre Erfahrung in der KFZ-Begutachtung",
    "Zertifizierter Sachverständiger",
    "Schnelle Terminvergabe innerhalb von 24 Stunden",
    "Kostenlose Erstberatung",
    "Direkte Abrechnung mit Versicherungen",
    "Umfassende Schadensdokumentation mit Fotos"
  ];

  const serviceAreas = [
    "Bad Harzburg",
    "Goslar",
    "Vienenburg",
    "Braunlage",
    "Wolfenbüttel"
  ];

  const testimonials = [
    {
      name: "Michael Schmidt",
      location: "Goslar",
      rating: 5,
      text: "Hervorragender Service! Herr Abali hat sich sehr viel Zeit genommen und alles genau dokumentiert. Die Abwicklung mit der Versicherung verlief reibungslos.",
      date: "Vor 2 Wochen"
    },
    {
      name: "Sarah Weber",
      location: "Bad Harzburg",
      rating: 5,
      text: "Sehr professionell und kompetent. Schnelle Terminvergabe und ausführliche Beratung. Kann ich nur weiterempfehlen!",
      date: "Vor 1 Monat"
    },
    {
      name: "Thomas Müller",
      location: "Wolfenbüttel",
      rating: 5,
      text: "Nach meinem Unfall war ich sehr gestresst, aber Herr Abali hat mir alles erklärt und sich um alles gekümmert. Top Service!",
      date: "Vor 3 Wochen"
    }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Kontaktaufnahme",
      description: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp"
    },
    {
      icon: Clock,
      title: "Terminvereinbarung",
      description: "Schnelle Terminvergabe innerhalb von 24 Stunden"
    },
    {
      icon: FileText,
      title: "Begutachtung",
      description: "Vor-Ort-Besichtigung und professionelle Dokumentation"
    },
    {
      icon: CheckCircle,
      title: "Gutachten",
      description: "Detailliertes Gutachten für Ihre Versicherung"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/4917640422990"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: "3s" }}
        aria-label="WhatsApp Kontakt"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[650px] sm:h-[700px] md:h-[800px] lg:h-[850px] xl:h-[900px] flex items-center overflow-visible py-12 sm:py-16 md:py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero-green-car-original.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40 lg:from-black/90 lg:via-black/60 lg:to-black/30 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-0"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-8 sm:pb-12 mt-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            <div className={`relative z-40 space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 flex-wrap relative z-50 mt-4 sm:mt-6 lg:mt-8">
                <a href="/presse" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 sm:gap-2.5 relative z-50 shadow-2xl border-2 border-yellow-300 backdrop-blur-sm">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  <span className="whitespace-nowrap">Featured on FOCUS</span>
                </a>
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm animate-pulse flex items-center gap-2 sm:gap-2.5 shadow-2xl relative z-50 border-2 border-red-500 backdrop-blur-sm">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">24/7 Erreichbar</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-2xl mb-3 sm:mb-4">
                KFZ Gutachter Timur Abali
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium drop-shadow-lg mb-3 sm:mb-4">
                Ihr vertrauenswürdiger Partner für professionelle KFZ-Gutachten
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl mb-4 sm:mb-6">
                Sachverständigenbüro in Bad Harzburg, Goslar, Vienenburg, Braunlage und Wolfenbüttel. 
                Mit langjähriger Erfahrung und herausragender Reputation bieten wir Ihnen professionelle 
                und akkurate Gutachten sowie umfassende Unterstützung bei Schadensfällen.
              </p>
              
              <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mb-4 sm:mb-6">
                <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4 flex items-center gap-2 flex-wrap">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-green-400 flex-shrink-0" />
                  <span>💯 Kostenlos bei Haftpflichtschäden!</span>
                </p>
                <p className="text-white/95 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Bei unverschuldeten Unfällen zahlt die gegnerische Versicherung alle Kosten. 
                  Sie haben das Recht, Ihren Gutachter frei zu wählen!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 lg:pt-6 relative z-50">
                <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="flex-1 relative z-50 touch-manipulation">
                  <Button size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-7 font-bold shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 relative z-50 border-2 border-yellow-300 touch-manipulation">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">Sofort-Gutachten anfordern</span>
                  </Button>
                </a>
                <a href="tel:017640422990" className="flex-1 relative z-50 touch-manipulation">
                  <Button size="lg" variant="outline" className="w-full bg-white/20 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-7 font-bold shadow-2xl hover:scale-105 transition-all duration-300 relative z-50 touch-manipulation">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">0176 40422990</span>
                  </Button>
                </a>
              </div>
            </div>
            {/* Right side - Car image visible in background */}
            <div className="hidden lg:block relative">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
                {/* Car image is visible through background */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-accent/50 to-accent/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center max-w-6xl mx-auto">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Über uns
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-accent-foreground">
                Vertrauen und Expertise
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 text-foreground/80 leading-relaxed">
                Unsere Mission ist es, Ihnen in Ihrer mobilen Welt Sicherheit und Klarheit zu verschaffen. 
                Egal, ob es um Unfallschäden, Fahrzeugbewertungen oder technische Fragen geht – wir stehen 
                Ihnen mit unserem Fachwissen zur Seite.
              </p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-foreground/80 leading-relaxed">
                Vertrauen Sie KFZ Gutachter Timur Abali, wenn es darum geht, den Wert Ihres Fahrzeugs zu 
                ermitteln oder bei Versicherungsansprüchen zu helfen. Vereinbaren Sie noch heute einen 
                Termin und lassen Sie uns Ihnen helfen, wieder auf die Straße zu kommen.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-2 sm:space-x-3 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/90 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-400 mt-8 md:mt-0 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl sm:rounded-2xl blur-2xl"></div>
              <img 
                src="/images/about-bg.jpg" 
                alt="Professioneller KFZ Gutachter bei der Arbeit" 
                className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary/10 rounded-full p-2 sm:p-3">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Jahre</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Was wir anbieten
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Unsere Leistungen</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Professionelle KFZ-Gutachten und Bewertungen für alle Ihre Bedürfnisse
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <Card 
                    className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 transform hover:-translate-y-2 h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8 relative overflow-hidden h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                      
                      <div className="bg-gradient-to-br from-primary to-primary/70 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-grow">{service.description}</p>
                      
                      <div className="flex items-center text-primary font-semibold text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/leistungen">
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg border-2">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              So einfach geht's
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Unser Ablauf</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              In nur 4 einfachen Schritten zu Ihrem professionellen Gutachten
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 xl:gap-12 relative max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
            
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`bg-gradient-to-br from-primary to-primary/70 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-2xl ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                        style={{ transitionDelay: `${index * 150}ms`, transition: 'all 0.5s ease-out' }}
                      >
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-secondary text-secondary-foreground w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Kundenmeinungen
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Was unsere Kunden sagen</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Überzeugen Sie sich von der Qualität unserer Arbeit
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-500 border-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground/80 mb-4 sm:mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 pt-3 sm:pt-4 border-t">
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Unsere Reichweite
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Unser Einzugsgebiet</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground px-4">
              Wir sind für Sie in der gesamten Region verfügbar
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-1.5 sm:space-x-2 bg-background px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg border-2 border-primary/20 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.5s ease-out' }}
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="font-medium text-sm sm:text-base">{area}</span>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-background to-muted/50 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12 border-2 border-primary/10" ref={statsRef}>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 text-center">
              <div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">{counters.years}+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-secondary mx-auto" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-secondary mb-1 sm:mb-2">{counters.reports}+</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Gutachten erstellt</div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-600 mx-auto" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{counters.hours}h</div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">Schnelle Terminvergabe</div>
              </div>
            </div>
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
              Jetzt handeln
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 px-4">
              Sie hatten einen Verkehrsunfall?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed px-4">
              Kontaktieren Sie uns noch heute! Bei uns erhalten Sie in besonderen Fällen 
              einen Rechtsanwalt kostenfrei dazu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-10 px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp öffnen
                </Button>
              </a>
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-xl hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Kontaktformular
                </Button>
              </Link>
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
