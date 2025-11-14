import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Award, Clock, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative z-10">
        {/* Top CTA Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 lg:mb-12 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Benötigen Sie ein Gutachten?</h3>
              <p className="text-sm sm:text-base text-primary-foreground/90 mb-3 sm:mb-4 leading-relaxed">
                Kontaktieren Sie uns jetzt für eine kostenlose Erstberatung und schnelle Terminvergabe.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>24h Termin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Zertifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>10+ Jahre</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="flex-1 touch-manipulation">
                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 relative z-50 touch-manipulation cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
                </button>
              </a>
              <a href="tel:017640422990" className="flex-1 touch-manipulation">
                <button 
                  type="button"
                  className="w-full bg-white/20 backdrop-blur-sm text-white border-2 border-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 relative z-50 touch-manipulation cursor-pointer"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Anrufen
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-secondary rounded-full"></div>
              KFZ Gutachter Timur Abali
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/90 mb-4 sm:mb-6 leading-relaxed">
              Ihr vertrauenswürdiger Partner für professionelle KFZ-Gutachten in Bad Harzburg und Umgebung.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold">10+</div>
                <div className="text-xs text-primary-foreground/80">Jahre</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold">5000+</div>
                <div className="text-xs text-primary-foreground/80">Gutachten</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-secondary rounded-full"></div>
              Schnellzugriff
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "/leistungen", name: "Leistungen" },
                { href: "/ueber-uns", name: "Über uns" },
                { href: "/ablauf", name: "Ablauf" },
                { href: "/faq", name: "FAQ" },
                { href: "/blog", name: "Ratgeber" },
                { href: "/presse", name: "Presse" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm sm:text-base text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 group">
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-secondary rounded-full"></div>
              Leistungen
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-primary-foreground/90">
              {[
                "Unfallgutachten",
                "Fahrzeugbewertung",
                "Haftpflichtschaden",
                "Kaskoschaden",
                "Oldtimerbewertung",
                "Wertgutachten"
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <div className="w-1 h-5 sm:h-6 bg-secondary rounded-full"></div>
              Kontakt
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
                  Brunnenstr. 10<br />
                  38667 Bad Harzburg<br />
                  <span className="text-xs text-primary-foreground/70">
                    Servicebereich: Goslar, Vienenburg, Braunlage, Wolfenbüttel
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <a 
                  href="tel:017640422990" 
                  className="text-xs sm:text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300 font-medium"
                >
                  0176 40422990
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <a 
                  href="mailto:info@gutachter-abali.de" 
                  className="text-xs sm:text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300 break-all"
                >
                  info@gutachter-abali.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          <p className="text-xs sm:text-sm text-primary-foreground/80 text-center md:text-left">
            © {currentYear} KFZ Gutachter Timur Abali. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <Link href="/impressum">
              <a className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                Impressum
              </a>
            </Link>
            <Link href="/datenschutz">
              <a className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                Datenschutz
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
