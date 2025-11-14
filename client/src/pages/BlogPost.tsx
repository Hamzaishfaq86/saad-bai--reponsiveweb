import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { Streamdown } from "streamdown";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getBlogPost(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container relative h-full flex items-end pb-12">
          <div className="max-w-4xl text-white">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Button>
            </Link>

            {/* Excerpt */}
            <div className="bg-accent p-6 rounded-lg mb-8 border-l-4 border-primary">
              <p className="text-lg font-medium text-foreground/90">
                {post.excerpt}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="text-sm font-semibold text-muted-foreground">Tags:</span>
              {post.tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm">
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* Article Content with Markdown */}
            <article className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-primary
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:text-muted-foreground
              prose-li:my-2
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            ">
              <Streamdown>{post.content}</Streamdown>
            </article>

            {/* Author Info */}
            <div className="mt-12 p-6 bg-accent rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Über den Autor</h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>{post.author}</strong> ist zertifizierter KFZ-Sachverständiger mit über 10 Jahren 
                    Erfahrung in der Fahrzeugbegutachtung. Als unabhängiger Experte berät er Fahrzeughalter 
                    bei Unfallschäden, Fahrzeugbewertungen und Versicherungsansprüchen.
                  </p>
                  <div className="flex gap-3">
                    <a href="tel:017640422990">
                      <Button size="sm" variant="outline">Kontakt aufnehmen</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Weitere Artikel</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-2">
                        {new Date(relatedPost.date).toLocaleDateString('de-DE')}
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benötigen Sie ein Gutachten?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Profitieren Sie von meiner Expertise. Kontaktieren Sie mich für eine 
            kostenlose Erstberatung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4917640422990" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
                WhatsApp Kontakt
              </Button>
            </a>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8 py-6">
                Kontaktformular
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
