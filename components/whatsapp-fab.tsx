import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { whatsappLink } from "@/lib/site"

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da Lis Crochê e gostaria de fazer uma encomenda.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden text-sm sm:inline">Fazer pedido</span>
    </a>
  )
}
