import { paraQuem } from '../data/content';
import { whatsappLink } from '../utils';

export default function ForWhom() {
  return (
    <section className="section forwhom">
      <div className="container forwhom__inner">
        <div className="forwhom__content">
          <span className="eyebrow">É pra você?</span>
          <h2 className="section__title">{paraQuem.titulo}</h2>
          <ul className="forwhom__list">
            {paraQuem.itens.map((item) => (
              <li key={item}>
                <span className="forwhom__check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Quero começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
