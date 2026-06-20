import { contato, hero } from '../data/content';
import { whatsappLink } from '../utils';
import { IconInstagram, IconWhatsApp } from './Icons';

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">{hero.selo}</span>
          <h1 className="hero__title">{hero.titulo}</h1>
          <p className="hero__subtitle">{hero.subtitulo}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp /> {hero.ctaPrimario}
            </a>
            <a className="btn btn--ghost" href="#especialidades">
              {hero.ctaSecundario}
            </a>
          </div>

          <a
            className="hero__insta"
            href={contato.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram /> @{contato.instagramUser}
          </a>
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <img
              className="hero__photo-img"
              src="/pamella-hero.jpg"
              alt="Pamella Martins, nutricionista em São Bernardo do Campo"
            />
          </div>
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
        </div>
      </div>
    </section>
  );
}
