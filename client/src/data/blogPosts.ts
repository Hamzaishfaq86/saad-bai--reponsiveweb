export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "was-tun-nach-autounfall",
    title: "Was tun nach einem Autounfall? Der komplette Leitfaden",
    excerpt: "Ein Autounfall ist stressig und überfordernd. Erfahren Sie Schritt für Schritt, was Sie unmittelbar nach einem Unfall tun sollten, um Ihre Rechte zu wahren und Ihre Ansprüche zu sichern.",
    author: "Timur Abali",
    date: "2024-11-10",
    readTime: "8 Min.",
    category: "Ratgeber",
    tags: ["Unfall", "Versicherung", "Ratgeber"],
    image: "/images/hero-expert.jpg",
    content: `# Was tun nach einem Autounfall? Der komplette Leitfaden

Ein Autounfall passiert schneller als gedacht. Selbst bei größter Vorsicht kann es zu einer Kollision kommen. In dieser stressigen Situation ist es wichtig, einen kühlen Kopf zu bewahren und die richtigen Schritte zu unternehmen.

## Sofortmaßnahmen am Unfallort

### 1. Unfallstelle absichern

Ihre erste Priorität ist die Sicherheit aller Beteiligten. Schalten Sie sofort die Warnblinkanlage ein, ziehen Sie eine Warnweste an und stellen Sie das Warndreieck auf – auf Landstraßen mindestens 100 Meter, auf Autobahnen mindestens 200 Meter vor der Unfallstelle.

### 2. Verletzte Personen versorgen

Prüfen Sie, ob Personen verletzt sind. Leisten Sie Erste Hilfe und rufen Sie bei Verletzungen sofort den Notruf 112. Auch bei scheinbar leichten Verletzungen sollten Sie den Rettungsdienst informieren.

### 3. Polizei informieren

Bei Personenschäden ist die Polizei immer zu rufen. Auch bei größeren Sachschäden oder wenn der Unfallhergang unklar ist, sollten Sie die Polizei (110) verständigen.

## Dokumentation ist entscheidend

### Fotos anfertigen

Fotografieren Sie die Unfallstelle aus verschiedenen Perspektiven: Gesamtansicht, Fahrzeugpositionen, alle Schäden, Bremsspuren, Straßenverhältnisse und Kennzeichen.

### Daten austauschen

Tauschen Sie mit dem Unfallgegner Name, Anschrift, Versicherung, Versicherungsnummer und Kennzeichen aus. Nutzen Sie den Europäischen Unfallbericht.

### Zeugen sichern

Notieren Sie Namen und Kontaktdaten von Unfallzeugen.

## Nach dem Unfall

### Eigene Versicherung informieren

Melden Sie den Unfall innerhalb einer Woche Ihrer Versicherung.

### Unabhängigen Gutachter beauftragen

Bei einem unverschuldeten Unfall haben Sie das Recht, einen unabhängigen Gutachter Ihrer Wahl zu beauftragen. Die Kosten trägt die gegnerische Versicherung.

## Ihre Rechte

Als Geschädigter haben Sie Anspruch auf vollständige Schadensregulierung, merkantile Wertminderung, Nutzungsausfall, Mietwagenkosten und Gutachterkosten.

**Kontakt:** 0176 40422990 oder per WhatsApp`
  },
  {
    id: "2",
    slug: "kfz-gutachten-kosten-ablauf-rechte",
    title: "KFZ-Gutachten: Kosten, Ablauf und Ihre Rechte",
    excerpt: "Alles Wissenswerte über KFZ-Gutachten: Was kostet ein Gutachten, wie läuft die Begutachtung ab und welche Rechte haben Sie als Geschädigter?",
    author: "Timur Abali",
    date: "2024-11-08",
    readTime: "7 Min.",
    category: "Wissen",
    tags: ["Gutachten", "Kosten", "Rechte"],
    image: "/images/inspection.png",
    content: `# KFZ-Gutachten: Kosten, Ablauf und Ihre Rechte

Nach einem Autounfall stellen sich viele Fragen: Brauche ich ein Gutachten? Was kostet das? Wer zahlt?

## Was ist ein KFZ-Gutachten?

Ein KFZ-Gutachten ist eine professionelle, neutrale Bewertung Ihres Fahrzeugs oder der entstandenen Schäden. Es enthält detaillierte Schadensbeschreibung, Fotodokumentation, Reparaturkostenberechnung, Wiederbeschaffungswert, merkantile Wertminderung und Nutzungsausfallberechnung.

## Wann benötigen Sie ein Gutachten?

### Unbedingt erforderlich bei:

- Unfallschäden über 1.000 Euro
- Totalschaden
- Wertminderung geltend machen

## Was kostet ein KFZ-Gutachten?

Die Kosten richten sich nach Fahrzeugwert und Schadensumfang:

- Kleinwagen: 600-800 Euro
- Mittelklasse: 800-1.200 Euro
- Oberklasse/SUV: 1.200-1.800 Euro

**Wichtig:** Bei einem unverschuldeten Unfall zahlen Sie nichts! Die Kosten trägt die Haftpflichtversicherung des Unfallverursachers.

## Ablauf einer Gutachtenerstellung

1. Kontaktaufnahme (5 Minuten)
2. Terminvereinbarung (innerhalb 24h)
3. Begutachtung vor Ort (30-60 Minuten)
4. Gutachtenerstellung (2-3 Werktage)
5. Übermittlung

## Ihre Rechte als Geschädigter

Sie haben das Recht auf freie Gutachterwahl. Die Versicherung kann Ihnen keinen Gutachter vorschreiben.

**Kontakt:** 0176 40422990 oder per WhatsApp`
  },
  {
    id: "3",
    slug: "merkantile-wertminderung",
    title: "Merkantile Wertminderung: So sichern Sie Ihre Ansprüche",
    excerpt: "Nach einem Unfall verliert Ihr Fahrzeug an Wert – auch nach fachgerechter Reparatur. Erfahren Sie, wie Sie die merkantile Wertminderung berechnen und durchsetzen.",
    author: "Timur Abali",
    date: "2024-11-05",
    readTime: "6 Min.",
    category: "Schadensregulierung",
    tags: ["Wertminderung", "Ansprüche", "Versicherung"],
    image: "/images/car-inspection.jpg",
    content: `# Merkantile Wertminderung: So sichern Sie Ihre Ansprüche

Ein Unfallfahrzeug ist auf dem Gebrauchtwagenmarkt deutlich weniger wert – selbst wenn es fachgerecht repariert wurde. Dieser Wertverlust wird als merkantile Wertminderung bezeichnet und steht Ihnen als Schadensersatz zu.

## Was ist merkantile Wertminderung?

Die merkantile Wertminderung ist der Wertverlust, den ein Fahrzeug trotz fachgerechter Reparatur durch einen Unfall erleidet.

### Beispiel aus der Praxis

Ein 3 Jahre alter BMW 3er mit 40.000 km hat einen Marktwert von 28.000 Euro. Nach einem Unfall mit 8.000 Euro Reparaturkosten sinkt der Wert auf etwa 24.500 Euro. Die Wertminderung beträgt 3.500 Euro und steht Ihnen zu!

## Wann haben Sie Anspruch?

Voraussetzungen:

1. Sie sind nicht schuld am Unfall
2. Das Fahrzeug ist relativ neu (bis 5 Jahre)
3. Geringe Laufleistung (unter 100.000 km)
4. Erheblicher Schaden (mindestens 1.000-1.500 Euro)
5. Fachgerechte Reparatur

## Wie wird die Wertminderung berechnet?

Die Wertminderung beträgt etwa 10-25% der Reparaturkosten, maximal jedoch 25% des Fahrzeugwerts.

## Wie setzen Sie den Anspruch durch?

### Schritt 1: Sachverständigengutachten

Nur ein professionelles Gutachten kann die merkantile Wertminderung rechtssicher beziffern.

### Schritt 2: Geltendmachung

Die Wertminderung wird automatisch im Gutachten ausgewiesen und bei der Versicherung geltend gemacht.

## Fazit

Die merkantile Wertminderung ist ein wichtiger Bestandteil Ihrer Schadensersatzansprüche. Lassen Sie sich professionell beraten!

**Kontakt:** 0176 40422990 oder per WhatsApp`
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}
