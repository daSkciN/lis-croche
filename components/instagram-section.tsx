import Image from "next/image";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const FEED = [
  {
    image: "/images/bolsadiana1.jpeg",
    alt: "Cliente usando top de crochê verde musgo ao ar livre",
  },
  {
    image: "/images/bolsaminilena1.jpeg",
    alt: "Novelos de fio coloridos e agulha de crochê de madeira",
  },
  {
    image: "/images/bolsapetra2.jpeg",
    alt: "Porta-copos de flor de crochê sobre a mesa com café",
  },
  {
    image: "/images/bolsalena1.jpeg",
    alt: "Cantinho da casa com almofadas e manta de crochê",
  },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <a
            href="https://www.instagram.com/liscroche__/"
            className="inline-flex items-center gap-2 text-lilac transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-5" />
            <span className="text-sm font-bold uppercase tracking-[0.15em]">
              #LisCroche
            </span>
          </a>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary md:text-4xl">
            Siga a Gente no Instagram
          </h2>
          <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Inspire-se com nossas criações e compartilhe suas peças usando a
            hashtag #LisCroche.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {FEED.map((item, i) => (
            <a
              key={i}
              href="https://www.instagram.com/liscroche__/"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-primary/0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:bg-primary/40 group-hover:opacity-100">
                <InstagramIcon className="size-7" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
