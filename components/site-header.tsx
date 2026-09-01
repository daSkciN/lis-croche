"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"
import { usePathname } from "next/dist/client/components/navigation"

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Destaques", href: "#destaques" },
  { label: "Catálogo", href: "/produtos" },
  //{ label: "Depoimentos", href: "#depoimentos" },
  { label: "Instagram", href: "#instagram" },
]

const WHATS_HREF = whatsappLink("Olá! Vim pelo site da Lis Crochê e gostaria de fazer uma encomenda.")

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const sectionHref = (href: string) => (href.startsWith("#") && pathname !== "/" ? `/${href}` : href)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href={sectionHref("#inicio")} className="flex items-center" aria-label="Lis Crochê - página inicial">
          <Image
            src="/images/lis-croche-logo.png"
            alt="Lis Crochê - Feito com Amor, Feito à Mão"
            width={200}
            height={200}
            priority
            className="h-14 w-auto md:h-20"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={sectionHref(link.href)}
              className="text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={WHATS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Fazer pedido
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2.5 text-foreground/80 transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden" aria-label="Navegação mobile">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={sectionHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2.5">
              <a
                href={WHATS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                <WhatsAppIcon className="size-4" />
                Fazer pedido no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
