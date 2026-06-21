import { depoimentos, googleAvaliacoes } from '../data/content';

function Estrelas({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} de 5 estrelas`}>
      {'★★★★★'.slice(0, n)}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Quem já cuidou da saúde comigo</span>
          <h2 className="section__title">Histórias de quem transformou a rotina</h2>
          <a
            className="google-rating"
            href={googleAvaliacoes.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Estrelas n={5} />
            <strong>{googleAvaliacoes.nota}</strong>
            <span>· {googleAvaliacoes.total} avaliações no Google</span>
          </a>
        </div>

        <div className="testimonials__grid">
          {depoimentos.map((d, i) => (
            <figure key={i} className="testimonial">
              <Estrelas n={5} />
              <blockquote>{d.texto}</blockquote>
              <figcaption>
                {d.nome} <span className="testimonial__source">· via Google</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
