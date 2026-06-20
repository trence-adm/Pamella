import { comoFunciona } from '../data/content';

export default function Approach() {
  return (
    <section id="como-funciona" className="section approach">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Como funciona</span>
          <h2 className="section__title">Simples do começo ao fim</h2>
          <p className="section__lead">Quatro passos para começar a cuidar de você com leveza.</p>
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
