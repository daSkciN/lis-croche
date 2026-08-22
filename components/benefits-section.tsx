import { Hand, Sprout, Gift } from "lucide-react"

const BENEFITS = [
  {
    icon: Hand,
    title: "Feito à Mão",
    text: "Cada peça é única e tecida com carinho.",
  },
  {
    icon: Sprout,
    title: "Materiais Naturais",
    text: "Fios sustentáveis e de alta qualidade.",
  },
  {
    icon: Gift,
    title: "Exclusividade",
    text: "Edições limitadas e designs próprios.",
  },
]

export function BenefitsSection() {
  return (
    <section id="sobre" className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title} className="flex flex-col items-center text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-background text-primary">
              <benefit.icon className="size-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-primary">{benefit.title}</h3>
            <p className="mt-2 max-w-xs text-pretty leading-relaxed text-muted-foreground">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
