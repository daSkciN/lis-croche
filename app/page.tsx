import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CircularGallery } from "@/components/circular-gallery"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InstagramSection } from "@/components/instagram-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <section id="destaques" aria-labelledby="destaques-title" className="overflow-hidden py-4 md:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">Um pouco do nosso universo</span>
            <h2 id="destaques-title" className="mt-2 font-serif text-3xl font-semibold text-primary md:mt-3 md:text-4xl">Destaques</h2>
            <p className="mx-auto mt-2 max-w-lg text-pretty leading-relaxed text-muted-foreground md:mt-3">Cores, texturas e detalhes feitos à mão para deixar cada peça especial.</p>
          </div>
          <div className="mx-auto -mt-2 h-[340px] max-w-7xl px-5 md:mt-10 md:h-[520px] md:px-8">    
            <CircularGallery />
          </div>
        </section>
        <BenefitsSection />
        <InstagramSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  )
}
