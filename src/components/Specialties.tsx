import { especialidades } from '../data/content';
import { Icon, type IconName } from './Icons';

export default function Specialties() {
  return (
    <section id="especialidades" className="section specialties">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Como eu posso te ajudar</span>
          <h2 className="section__title">Cuidado completo, do seu jeito</h2>
          <p className="section__lead">
            Cada acompanhamento é individual. Veja as áreas em que vou caminhar ao seu lado.
          </p>
        </div>

        <div className="cards">
          {especialidades.map((e) => (
            <article key={e.titulo} className="card">
              <div className="card__icon">
                <Icon name={e.icone as IconName} />
              </div>
              <h3 className="card__title">{e.titulo}</h3>
              <p className="card__text">{e.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
