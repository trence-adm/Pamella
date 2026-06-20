import { contato } from './data/content';

/** Monta o link de WhatsApp com a mensagem padrão pré-preenchida. */
export function whatsappLink(mensagem: string = contato.whatsappMensagem): string {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Monta o link que abre o endereço no Google Maps. */
export function mapsLink(endereco: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
}
