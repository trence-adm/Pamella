import { contato } from '../data/content';
import { whatsappLink } from '../utils';
import { IconInstagram, IconWhatsApp } from './Icons';

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{contato.nome}</span>
          <span className="footer__role">
            {contato.profissao}
            {contato.crn ? ` · ${contato.crn}` : ''}
          </span>
        </div>

        <div className="footer__social">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconWhatsApp /> WhatsApp
          </a>
          <a href={contato.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IconInstagram /> @{contato.instagramUser}
          </a>
          {contato.email && (
            <a href={`mailto:${contato.email}`} aria-label="E-mail">
              ✉ {contato.email}
            </a>
          )}
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          © {ano} {contato.nome}. Todos os direitos reservados.
        </span>
        <span className="footer__disclaimer">
          As informações deste site têm caráter informativo e não substituem uma consulta.
        </span>
      </div>
    </footer>
  );
}
