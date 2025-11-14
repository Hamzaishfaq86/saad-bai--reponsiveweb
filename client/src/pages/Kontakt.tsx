import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Kontakt() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Neue Kontaktanfrage von ${formData.name}%0A%0AE-Mail: ${formData.email}%0ATelefon: ${formData.phone}%0A%0ANachricht:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/4917640422990?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Ihre Nachricht wird an WhatsApp weitergeleitet");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "0176 40422990",
      link: "tel:017640422990"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@gutachter-abali.de",
      link: "mailto:info@gutachter-abali.de"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Brunnenstr. 10, 38667 Bad Harzburg",
      link: null
    },
    {
      icon: Clock,
      title: "Erreichbarkeit",
      content: "Mo-Fr: 8:00-20:00 Uhr, Sa: 9:00-18:00 Uhr",
      link: null
    }
  ];

  const serviceAreas = [
    { name: "Bad Harzburg", lat: 51.8797, lng: 10.5597 },
    { name: "Goslar", lat: 51.9059, lng: 10.4289 },
    { name: "Vienenburg", lat: 51.9506, lng: 10.5597 },
    { name: "Braunlage", lat: 51.7242, lng: 10.6097 },
    { name: "Wolfenbüttel", lat: 52.1642, lng: 10.5372 }
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
              Wir sind für Sie da
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              Kontaktieren Sie uns
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed">
              Haben Sie Fragen oder benötigen Sie ein Gutachten? Wir sind für Sie da! 
              Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Kontaktformular.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a 
                  href={info.link} 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-foreground/80 font-medium">{info.content}</span>
              );
              
              return (
                <Card 
                  key={index} 
                  className={`text-center border-2 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6">
                    <div className="bg-gradient-to-br from-primary to-primary/70 w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">{info.title}</h3>
                    <div className="text-sm sm:text-base">{content}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and WhatsApp Section */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2">
              <CardContent className="p-4 sm:p-6 lg:p-10">
                <h2 className="text-2xl font-bold mb-6">Kontaktformular</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0176 12345678"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Nachricht senden
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Pflichtfelder. Ihre Nachricht wird via WhatsApp versendet.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Direct Contact */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div className="bg-green-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-green-900 dark:text-green-100">
                    Schneller via WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-green-800 dark:text-green-200 mb-6 sm:mb-8 leading-relaxed">
                    Kontaktieren Sie uns direkt über WhatsApp für eine schnelle Antwort. 
                    Wir sind für Sie da!
                  </p>
                  <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50"
                    >
                      <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      WhatsApp öffnen
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl font-bold mb-6">Unsere Vorteile</h3>
                  <ul className="space-y-4">
                    {[
                      "Schnelle Antwort innerhalb von 24 Stunden",
                      "Kostenlose Erstberatung",
                      "Flexible Terminvereinbarung",
                      "Vor-Ort-Service möglich",
                      "Professionelle Beratung"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Unser Einzugsgebiet
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Wir sind in Ihrer Nähe</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Wir bieten unsere Dienstleistungen in der gesamten Region an
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 bg-background px-6 py-3 rounded-full shadow-lg border-2 border-primary/20 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.5s ease-out' }}
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{area.name}</span>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">
                    Brunnenstr. 10, 38667 Bad Harzburg
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Zentral gelegen im Herzen von Bad Harzburg
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
        
        <div className="container text-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Bereit für Ihr Gutachten?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 text-primary-foreground/95 leading-relaxed px-4">
              Kontaktieren Sie uns jetzt und vereinbaren Sie einen Termin. 
              Wir freuen uns darauf, Ihnen zu helfen!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="tel:017640422990" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-2xl hover:scale-105 transition-all duration-300 relative z-50">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Jetzt anrufen
                </Button>
              </a>
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 font-bold shadow-xl hover:scale-105 transition-all duration-300 relative z-50">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
