import CircularGallery from "@/components/circular-gallery"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

const PRODUCTS = [
  {
    name: "Suéter Aurora",
    price: "R$ 189,90",
    image: "/images/croche1.webp",
  },
  {
    name: "Cesto Boho Natural",
    price: "R$ 95,00",
    image: "/images/croche2.webp",
  },
  {
    name: "Manta Geométrica",
    price: "R$ 250,00",
    image: "/images/croche3.jpeg",
  },
  {
    name: "Biquíni Flor de Lis",
    price: "R$ 120,00",
    image: "/images/croche1.webp",
  },
]

const GALLERY_ITEMS = PRODUCTS.map((p) => ({ image: p.image, text: p.name }))

export function ProductGrid() {
  return (
    <section id="produtos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-lilac">Feito à mão</span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">
          Nossos Destaques
        </h2>
        <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Peças escolhidas a dedo, tecidas ponto a ponto para durar e encantar.
        </p>
      </div>

      <div className="relative h-[420px] w-full md:h-[520px]">
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={3}
          textColor="#2b4a2e"
          borderRadius={0.05}
          scrollEase={0.02}
          font="bold 28px Fraunces"
          fontUrl="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&display=swap"
        />
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Arraste para o lado para explorar as peças
      </p>

      <div className="mt-12 flex justify-center">
        <a
          href={whatsappLink("Olá! Gostaria de ver o catálogo completo de peças da Lis Crochê. 🌸")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <WhatsAppIcon className="size-4" />
          Ver catálogo completo no WhatsApp
        </a>
      </div>
    </section>
  )
}
