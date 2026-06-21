import { comoFunciona } from '../data/content';

export default function Approach() {
  return (
    <section id="como-funciona" className="section approach">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Como funciona a consulta</span>
          <h2 className="section__title">O passo a passo do seu acompanhamento</h2>
          <p className="section__lead">Do primeiro &ldquo;oi&rdquo; no WhatsApp até a sua transformação, com leveza e cuidado em cada etapa.</p>
        </div>

        <ol className="steps">
          {comoFunciona.map((s) => (
            <li key={s.numero} className="step">
              <span className="step__num">{s.numero}</span>
              <h3 className="step__title">{s.titulo}</h3>
              <p className="step__text">{s.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
