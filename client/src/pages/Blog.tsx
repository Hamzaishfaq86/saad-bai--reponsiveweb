import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts, getAllCategories } from "@/data/blogPosts";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Ratgeber & Fachwissen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
              Expertenwissen rund um KFZ-Gutachten, Unfallschäden und Versicherungsansprüche. 
              Profitieren Sie von unserer langjährigen Erfahrung.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-4 sm:py-6 lg:py-8 bg-muted/30 border-b">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              Alle Artikel
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{new Date(post.date).toLocaleDateString('de-DE', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full text-sm sm:text-base group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Artikel lesen
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Keine Artikel in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-primary text-primary-foreground">
        <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Haben Sie Fragen?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
              Als erfahrener Sachverständiger berate ich Sie gerne persönlich zu allen Themen 
              rund um KFZ-Gutachten und Schadensregulierung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 font-bold shadow-lg hover:scale-105 transition-all duration-300 relative z-50">
                  Jetzt kontaktieren
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
