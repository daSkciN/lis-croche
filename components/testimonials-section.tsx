import Image from "next/image"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Mariana Alves",
    role: "São Paulo, SP",
    image: "/images/cliente-1.png",
    text: "A qualidade é impecável! Dá pra sentir o carinho em cada ponto. Meu suéter virou minha peça favorita.",
  },
  {
    name: "Camila Ferreira",
    role: "Belo Horizonte, MG",
    image: "/images/cliente-2.png",
    text: "Comprei uma manta para minha sala e ficou linda. Chegou super bem embalada e ainda mais bonita pessoalmente.",
  },
  {
    name: "Renata Souza",
    role: "Curitiba, PR",
    image: "/images/cliente-3.png",
    text: "Atendimento maravilhoso e peça exclusiva de verdade. Recomendo a Lis Crochê de olhos fechados!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blush">Depoimentos</span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">
          Quem Leva, Ama
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl bg-card p-7">
            <div className="flex gap-1 text-sun" aria-label="Avaliação 5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/80">
              {`"${t.text}"`}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={t.image || "/placeholder.svg"}
                alt={`Foto de ${t.name}`}
                width={48}
                height={48}
                className="size-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
