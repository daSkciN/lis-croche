"use client"

import Image from "next/image";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/site";
import { usePathname } from "next/dist/client/components/navigation";

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

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const LINK_GROUPS = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Destaques", href: "#destaques" },
      { label: "Catálogo", href: "/produtos" },
    ],
  },
  {
    title: "A Marca",
    links: [
      { label: "Feito com amor", href: "#sobre" },
      { label: "Feito à mão", href: "#sobre" },
      { label: "Instagram", href: "#instagram" },
      { label: "Peças sob encomenda", href: "#produtos" },
    ],
  },
];

// Pinterest icon (não incluído no lucide-react)
function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.017 2C6.484 2 2 6.484 2 12.017c0 4.236 2.636 7.855 6.356 9.312-.088-.79-.166-2.003.034-2.866.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.265.641 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.481 1.807 1.777 0 3.144-1.874 3.144-4.579 0-2.394-1.72-4.068-4.177-4.068-2.845 0-4.515 2.134-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 0 1 .069.288c-.076.315-.245.995-.278 1.134-.043.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.472 6.165 5.775 0 3.446-2.173 6.22-5.189 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.533 0 10.017-4.484 10.017-10.017C22.034 6.484 17.55 2 12.017 2z" />
    </svg>
  );
}

export function SiteFooter() {
  const pathname = usePathname()
  const sectionHref = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href)
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image
              src="/images/lis-croche-logo.png"
              alt="Lis Crochê"
              width={200}
              height={200}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Peças de crochê exclusivas, tecidas à mão com amor para você.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.instagram.com/liscroche__/"
                aria-label="Instagram"
                className="rounded-full border border-border p-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-bold text-primary">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={sectionHref(link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary/70 p-7 md:p-9">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">
                Vamos criar algo especial juntas?
              </h3>
              <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                Fale com a gente no WhatsApp e faça sua encomenda personalizada.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Olá! Gostaria de conversar sobre uma encomenda personalizada da Lis Crochê. 🌸",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <WhatsAppIcon className="size-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © 2026 Lis Crochê. Todos os direitos reservados. Feito com Amor. Feito
          à Mão.
        </p>
      </div>
    </footer>
  );
}
