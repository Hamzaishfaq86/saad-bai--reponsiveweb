import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Allgemeine Fragen",
      questions: [
        {
          question: "Was ist ein KFZ-Gutachten und warum benötige ich es?",
          answer: "Ein KFZ-Gutachten ist eine professionelle Bewertung Ihres Fahrzeugs oder der entstandenen Schäden nach einem Unfall. Es dient als Nachweis gegenüber Versicherungen und dokumentiert den Zustand, den Wert oder die Schadenshöhe Ihres Fahrzeugs. Nach einem Unfall benötigen Sie ein Gutachten, um Ihre Ansprüche auf Schadensersatz geltend zu machen. Bei Fahrzeugkäufen oder -verkäufen hilft es, den fairen Marktwert zu ermitteln."
        },
        {
          question: "Kann ich einen KFZ-Gutachter meiner Wahl auswählen?",
          answer: "Ja, Sie haben das Recht, einen KFZ-Gutachter Ihrer Wahl zu beauftragen. Die Versicherung des Unfallverursachers kann Ihnen keinen bestimmten Gutachter vorschreiben. Als Geschädigter können Sie frei entscheiden, welchen Sachverständigen Sie beauftragen möchten. Dies ist gesetzlich verankert und ein wichtiges Recht für Sie."
        },
        {
          question: "Wie lange dauert es, bis ein KFZ-Gutachten erstellt ist?",
          answer: "In der Regel erhalten Sie Ihr fertiges Gutachten innerhalb von 2-3 Werktagen nach der Begutachtung. In dringenden Fällen können wir auch eine Express-Erstellung anbieten. Die Begutachtung selbst dauert etwa 30-60 Minuten, je nach Umfang der Schäden. Wir legen großen Wert auf Schnelligkeit, ohne dabei die Qualität zu vernachlässigen."
        },
        {
          question: "Welche Informationen benötigt der Gutachter von mir?",
          answer: "Für die Begutachtung benötigen wir folgende Unterlagen: Fahrzeugschein und Fahrzeugbrief, Unfallbericht (Europäischer Unfallbericht), Kontaktdaten und Versicherungsdaten des Unfallgegners, sowie eventuell vorhandene Fotos vom Unfallort. Falls Sie nicht alle Unterlagen zur Hand haben, ist das kein Problem – wir können fehlende Informationen nachträglich ergänzen."
        }
      ]
    },
    {
      category: "Kosten & Bezahlung",
      questions: [
        {
          question: "Muss ich das Gutachten selbst bezahlen?",
          answer: "Nein, in den meisten Fällen nicht. Bei einem Haftpflichtschaden (wenn Sie nicht der Unfallverursacher sind) trägt die Versicherung des Unfallgegners die Kosten für das Gutachten. Sie zahlen nichts. Bei einem Kaskoschaden kann es je nach Versicherungsvertrag unterschiedlich geregelt sein. Wir klären dies gerne im Vorfeld mit Ihnen und Ihrer Versicherung."
        },
        {
          question: "Was kostet ein KFZ-Gutachten?",
          answer: "Die Kosten für ein Gutachten richten sich nach dem Umfang der Schäden und dem Fahrzeugwert. Bei Haftpflichtschäden entstehen Ihnen keine Kosten, da die gegnerische Versicherung zahlt. Für Wertgutachten oder Kaufberatungen erstellen wir Ihnen gerne ein individuelles Angebot. Kontaktieren Sie uns für eine kostenlose Erstberatung."
        },
        {
          question: "Wer bezahlt den Gutachter nach einem Unfall?",
          answer: "Wenn Sie unverschuldet in einen Unfall verwickelt wurden, zahlt die Haftpflichtversicherung des Unfallverursachers das Gutachten. Dies ist Teil Ihres Schadensersatzanspruchs. Sie müssen nicht in Vorleistung gehen – wir rechnen direkt mit der Versicherung ab. Bei selbstverschuldeten Unfällen müssten Sie oder Ihre Kaskoversicherung die Kosten tragen."
        }
      ]
    },
    {
      category: "Ablauf & Termin",
      questions: [
        {
          question: "Wie schnell kann ich einen Termin bekommen?",
          answer: "Wir bieten Ihnen in der Regel innerhalb von 24 Stunden einen Termin an. Bei Notfällen können wir oft noch am selben Tag zu Ihnen kommen. Wir wissen, dass nach einem Unfall schnelles Handeln wichtig ist, daher legen wir großen Wert auf kurze Reaktionszeiten."
        },
        {
          question: "Muss ich mit meinem Fahrzeug zu Ihnen kommen?",
          answer: "Nein, das ist nicht notwendig. Wir kommen gerne zu Ihnen – egal ob nach Hause, zur Arbeit oder zur Werkstatt. Dieser Service ist für Sie kostenlos. Alternativ können Sie auch gerne zu uns kommen, wenn Ihnen das lieber ist. Wir richten uns ganz nach Ihren Wünschen und Möglichkeiten."
        },
        {
          question: "Was passiert bei der Begutachtung?",
          answer: "Bei der Begutachtung dokumentieren wir alle Schäden an Ihrem Fahrzeug mit professionellen Fotos und Messungen. Wir prüfen die Technik, messen Lackdicken, erfassen alle sichtbaren und versteckten Schäden und erstellen eine detaillierte Aufstellung. Der gesamte Prozess dauert etwa 30-60 Minuten. Sie können gerne dabei sein und Fragen stellen."
        }
      ]
    },
    {
      category: "Versicherung & Ansprüche",
      questions: [
        {
          question: "Welche Ansprüche habe ich nach einem Unfall?",
          answer: "Nach einem unverschuldeten Unfall haben Sie Anspruch auf: Reparaturkosten oder Wiederbeschaffungswert, merkantile Wertminderung, Nutzungsausfall oder Mietwagenkosten, Gutachterkosten, sowie eventuell Schmerzensgeld bei Personenschäden. Wir helfen Ihnen, alle Ansprüche korrekt zu dokumentieren und durchzusetzen."
        },
        {
          question: "Was ist eine merkantile Wertminderung?",
          answer: "Die merkantile Wertminderung ist der Wertverlust, den Ihr Fahrzeug trotz fachgerechter Reparatur erleidet. Ein Unfallfahrzeug ist auf dem Gebrauchtwagenmarkt weniger wert als ein unfallfreies Fahrzeug. Dieser Wertverlust steht Ihnen als Schadensersatz zu und wird im Gutachten berechnet. Die Höhe hängt von Faktoren wie Fahrzeugalter, Laufleistung und Schadenshöhe ab."
        },
        {
          question: "Muss ich das Fahrzeug reparieren lassen?",
          answer: "Nein, Sie sind nicht verpflichtet, das Fahrzeug reparieren zu lassen. Sie können sich die Reparaturkosten auch auszahlen lassen (fiktive Abrechnung). Allerdings zahlt die Versicherung dann meist nur die Nettobeträge ohne Mehrwertsteuer. Wir beraten Sie gerne, welche Option für Sie am vorteilhaftesten ist."
        },
        {
          question: "Was ist der Unterschied zwischen Haftpflicht- und Kaskoschaden?",
          answer: "Bei einem Haftpflichtschaden ist ein Dritter schuld am Unfall, und dessen Versicherung zahlt. Bei einem Kaskoschaden zahlt Ihre eigene Versicherung – entweder bei selbstverschuldeten Unfällen (Vollkasko) oder bei Schäden durch Diebstahl, Wildunfall, Hagel etc. (Teilkasko). Die Abwicklung und Ihre Rechte unterscheiden sich je nach Schadensart."
        }
      ]
    },
    {
      category: "Spezielle Gutachten",
      questions: [
        {
          question: "Erstellen Sie auch Gutachten für Oldtimer?",
          answer: "Ja, wir sind spezialisiert auf Oldtimerbewertungen. Oldtimer benötigen eine besondere Expertise und Bewertung nach anerkannten Standards. Wir erstellen Gutachten für Versicherungen, Käufe/Verkäufe oder zur Wertermittlung. Dabei berücksichtigen wir Originalität, Restaurierungsgrad, Seltenheit und Zustand nach dem Notensystem."
        },
        {
          question: "Bieten Sie auch Kaufberatung an?",
          answer: "Ja, wir bieten professionelle Kaufberatung für Gebrauchtwagen an. Vor dem Kauf prüfen wir das Fahrzeug auf Herz und Nieren: technischer Zustand, Unfallfreiheit (Lackdickenmessung), versteckte Mängel und faire Preisbewertung. So schützen Sie sich vor Fehlkäufen und können sicher sein, ein gutes Fahrzeug zum fairen Preis zu erwerben."
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionCounter = 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Gut zu wissen! Hier finden Sie Antworten auf die wichtigsten Fragen rund um KFZ-Gutachten.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const currentIndex = questionCounter++;
                    const isOpen = openIndex === currentIndex;
                    
                    return (
                      <div
                        key={qIndex}
                        className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleQuestion(currentIndex)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left bg-background hover:bg-accent/50 transition-colors"
                        >
                          <span className="font-semibold text-sm sm:text-base lg:text-lg pr-3 sm:pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-accent/30 border-t border-border">
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-muted/30">
        <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Kontaktieren Sie uns gerne direkt. Wir beantworten alle Ihre Fragen 
              persönlich und beraten Sie kostenlos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  WhatsApp Kontakt
                </Button>
              </a>
              <a href="tel:017640422990" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
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
