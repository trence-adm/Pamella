import { sobre } from '../data/content';

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <div className="about__media">
          <div className="about__photo">
            <img
              className="about__photo-img"
              src="/pamella-sobre.webp"
              alt="Pamella Martins atendendo no consultório em São Bernardo do Campo"
            />
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">Sobre mim</span>
          <h2 className="section__title">{sobre.titulo}</h2>
          {sobre.paragrafos.map((p, i) => (
            <p key={i} className="about__text">
              {p}
            </p>
          ))}
          <ul className="about__creds">
            {sobre.credenciais.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
