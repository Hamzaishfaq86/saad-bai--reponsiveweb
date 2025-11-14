import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { APP_LOGO } from "@/const";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavigation = [
    { name: "Startseite", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const infoPages = [
    { name: "Ablauf", href: "/ablauf" },
    { name: "FAQ", href: "/faq" },
    { name: "Ratgeber", href: "/blog" },
    { name: "Presse", href: "/presse" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isInfoActive = () => {
    return infoPages.some(page => isActive(page.href));
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        }`}>
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer group">
              <div className="relative">
                <img 
                  src={APP_LOGO} 
                  alt="KFZ Gutachter Timur Abali" 
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"
                  } group-hover:scale-105`} 
                />
              </div>
              <div className="hidden md:block">
                <div className="text-base sm:text-lg font-bold text-primary group-hover:text-primary/80 transition-colors leading-tight">
                  KFZ Gutachter
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Timur Abali</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0 xl:space-x-0.5 flex-1 justify-center max-w-4xl mx-auto flex-nowrap">
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`inline-block px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group cursor-pointer whitespace-nowrap ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              </Link>
            ))}
            
            {/* Info Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group whitespace-nowrap ${
                    isInfoActive()
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                  }`}
                  aria-label="Informationen Menü"
                >
                  Informationen
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />
                  {isInfoActive() && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl z-50">
                {infoPages.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10 transition-colors text-sm py-2.5">
                      <a className="block w-full">{item.name}</a>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <a 
              href="tel:017640422990" 
              className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-all duration-300 hover:scale-105 px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg hover:bg-primary/5 whitespace-nowrap relative z-50"
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="hidden xl:inline text-sm">0176 40422990</span>
              <span className="xl:hidden text-sm">0176</span>
            </a>
            <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 relative z-50">
              <Button size="default" className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm px-4 xl:px-5 h-9 xl:h-10">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 relative z-50 touch-manipulation"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 space-y-1.5 sm:space-y-2 border-t border-border/50 animate-in slide-in-from-top duration-300 relative z-50 bg-background/95 backdrop-blur-xl">
            {mainNavigation.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform hover:translate-x-1 cursor-pointer ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-foreground/80 hover:bg-accent/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            
            {/* Info Pages in Mobile */}
            <div className="pt-2 pb-2">
              <div className="px-4 py-2 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Informationen
              </div>
              {infoPages.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform hover:translate-x-1 cursor-pointer ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-foreground/80 hover:bg-accent/50"
                    }`}
                    style={{ animationDelay: `${(mainNavigation.length + index) * 50}ms` }}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
              <a 
                href="tel:017640422990" 
                className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-3 text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>0176 40422990</span>
              </a>
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/50 py-5 sm:py-6 text-sm sm:text-base relative z-50">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  WhatsApp Kontakt
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
