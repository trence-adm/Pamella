import { whatsappLink } from '../utils';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
