"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

const PRODUCTS = [
  { name: "Bolsa Ana", price: "R$ 130,00", image: "/images/bolsaana1.jpeg", gallery: ["/images/bolsaana1.jpeg", "/images/bolsaana2.jpeg", "/images/bolsaana3.jpeg"] },
  { name: "Bolsa Aurora", price: "R$ 280,00", image: "/images/bolsaaurora1.jpeg", gallery: ["/images/bolsaaurora1.jpeg", "/images/bolsaaurora2.jpeg", "/images/bolsaaurora3.jpeg"] },
  { name: "Bolsa Diana", price: "R$ 185,00", image: "/images/bolsadiana1.jpeg", gallery: ["/images/bolsadiana1.jpeg", "/images/bolsadiana2.jpeg", "/images/bolsadiana3.jpeg", "/images/bolsadiana4.jpeg"] },
  { name: "Bolsa Lena", price: "R$ 140,00", image: "/images/bolsalena1.jpeg", gallery: ["/images/bolsalena1.jpeg", "/images/bolsalena2.jpeg", "/images/bolsalena3.jpeg", "/images/bolsalena4.jpeg"] },
  { name: "Bolsa Mini Lena", price: "R$ 125,00", image: "/images/bolsaminilena1.jpeg", gallery: ["/images/bolsaminilena1.jpeg", "/images/bolsaminilena2.jpeg"] },
  { name: "Bolsa Petra", price: "R$ 150,00", image: "/images/bolsapetra1.jpeg", gallery: ["/images/bolsapetra1.jpeg", "/images/bolsapetra2.jpeg", "/images/bolsapetra3.jpeg"] },
  { name: "Bolsa Safira", price: "R$ 310,00", image: "/images/bolsasafira1.jpeg", gallery: ["/images/bolsasafira1.jpeg", "/images/bolsasafira2.jpeg", "/images/bolsasafira3.jpeg", "/images/bolsasafira4.jpeg"] },
  { name: "Bolsa Kids", price: "R$ 80,00", image: "/images/bolsakids.jpeg", gallery: ["/images/bolsakids.jpeg"] },
]

type ProductGridProps = {
  catalogPage?: boolean
}

export function ProductGrid({ catalogPage = false }: ProductGridProps) {
  const [selected, setSelected] = useState<(typeof PRODUCTS)[number] | null>(null)
  const [activePhoto, setActivePhoto] = useState(0)

  const openProduct = (product: (typeof PRODUCTS)[number]) => {
    setSelected(product)
    setActivePhoto(0)
  }

  const changePhoto = (direction: 1 | -1) => {
    if (!selected) return
    setActivePhoto((current) => (current + direction + selected.gallery.length) % selected.gallery.length)
  }

  useEffect(() => {
    if (!selected) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null)
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.style.overflow = ""
    }
  }, [selected])

  return (
    <section id="produtos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-lilac">Feito à mão</span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">{catalogPage ? "Catálogo Lis Crochê" : "Nossos Destaques"}</h2>
        <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">{catalogPage ? "Escolha sua peça favorita e fale diretamente com a gente para fazer sua encomenda." : "Conheça algumas das nossas peças favoritas. Clique em uma delas para saber mais e fazer sua encomenda."}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {PRODUCTS.map((product) => (
          <button key={product.name} type="button" onClick={() => openProduct(product)} className="group cursor-pointer text-left">
            <div className="overflow-hidden rounded-2xl bg-card">
              <Image src={product.image} alt={product.name} width={600} height={600} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-medium text-primary">{product.name}</h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">{product.price}</p>
            <span className="mt-3 inline-block text-xs font-bold uppercase tracking-wide text-lilac underline-offset-4 group-hover:underline">Ver detalhes</span>
          </button>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href={whatsappLink("Olá! Gostaria de conhecer o catálogo completo da Lis Crochê.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
          <WhatsAppIcon className="size-4" /> Ver catálogo no WhatsApp
        </a>
      </div>

      {selected && (
        <div role="presentation" className="fixed inset-0 z-50 flex items-center justify-center bg-primary/45 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="product-dialog-title" className="relative grid max-h-[92vh] w-full max-w-3xl overflow-auto rounded-3xl bg-background shadow-2xl md:grid-cols-2">
            <button type="button" onClick={() => setSelected(null)} aria-label="Fechar detalhes" className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-2 text-primary shadow-sm transition-colors hover:bg-secondary"><X className="size-5" /></button>
            <div className="bg-secondary/30 p-4 md:p-6">
              <div className="relative overflow-hidden rounded-2xl">
                <Image src={selected.gallery[activePhoto]} alt={`${selected.name} — foto ${activePhoto + 1}`} width={700} height={700} className="aspect-square w-full object-cover" />
                <button type="button" onClick={() => changePhoto(-1)} aria-label="Foto anterior" className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-primary shadow-sm"><ChevronLeft className="size-5" /></button>
                <button type="button" onClick={() => changePhoto(1)} aria-label="Próxima foto" className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2 text-primary shadow-sm"><ChevronRight className="size-5" /></button>
              </div>
              <div className="mt-3 flex gap-2 overflow-x-auto" aria-label="Selecionar foto do produto">
                {selected.gallery.map((photo, index) => (
                  <button type="button" key={photo} onClick={() => setActivePhoto(index)} aria-label={`Ver foto ${index + 1}`} aria-current={activePhoto === index} className={`size-16 shrink-0 overflow-hidden rounded-lg border-2 ${activePhoto === index ? "border-primary" : "border-transparent"}`}>
                    <Image src={photo} alt="" width={64} height={64} className="size-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lilac">Peça artesanal</span>
              <h2 id="product-dialog-title" className="mt-3 font-serif text-3xl font-semibold text-primary">{selected.name}</h2>
              <p className="mt-3 text-xl font-bold text-primary">{selected.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Cada peça é produzida com carinho e pode ser conversada sob medida pelo WhatsApp.</p>
              <a href={whatsappLink(`Olá! Tenho interesse em encomendar a peça ${selected.name}, no valor de ${selected.price}.`)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"><WhatsAppIcon className="size-4" /> Encomendar pelo WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
