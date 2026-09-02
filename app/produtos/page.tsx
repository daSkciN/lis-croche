import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ProductGrid } from "@/components/product-grid";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export const metadata: Metadata = {
  title: "Catálogo - Lis Crochê",
  description:
    "Conheça as peças artesanais da Lis Crochê e encomende pelo WhatsApp.",
};

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-7xl px-5 pb-4 pt-12 md:px-8 md:pt-16">
          <a
            href="/"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            ← Voltar para o início
          </a>
        </div>
        <ProductGrid catalogPage />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
