import { contato } from '../data/content';
import { mapsLink, whatsappLink } from '../utils';
import { IconInstagram, IconWhatsApp } from './Icons';

export default function CTA() {
  return (
    <section id="contato" className="section cta">
      <div className="container cta__card">
        <h2 className="cta__title">Pronta para começar a cuidar de você?</h2>
        <p className="cta__text">
          Dê o primeiro passo hoje. Me chame no WhatsApp e vamos montar juntas o plano ideal para a
          sua saúde.
        </p>
        <div className="cta__actions">
          <a className="btn btn--primary btn--lg" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp /> Agendar pelo WhatsApp
          </a>
          <a className="btn btn--ghost btn--lg" href={contato.instagramUrl} target="_blank" rel="noopener noreferrer">
            <IconInstagram /> Seguir no Instagram
          </a>
        </div>
        <p className="cta__note">{contato.cidade}</p>

        {contato.enderecos && contato.enderecos.length > 0 && (
          <div className="cta__addresses">
            {contato.enderecos.map((e) => (
              <a
                key={e.rua}
                className="cta__address"
                href={mapsLink(`${e.rua}, ${e.bairro}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta__address-pin" aria-hidden="true">📍</span>
                <span>
                  <strong>{e.rua}</strong>
                  <br />
                  {e.bairro}
                  <span className="cta__address-cta">Ver no mapa →</span>
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
