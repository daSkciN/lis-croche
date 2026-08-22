// Número da loja no formato internacional, apenas dígitos (55 + DDD + número).
// Ajuste para o número real da Lis Crochê.
export const WHATSAPP_NUMBER = "5579999007197"

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
