import { depoimentos } from '../data/content';

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Quem já cuidou da saúde comigo</span>
          <h2 className="section__title">Histórias de quem transformou a rotina</h2>
        </div>

        <div className="testimonials__grid">
          {depoimentos.map((d, i) => (
            <figure key={i} className="testimonial">
              <div className="testimonial__quote" aria-hidden="true">“</div>
              <blockquote>{d.texto}</blockquote>
              <figcaption>{d.nome}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
