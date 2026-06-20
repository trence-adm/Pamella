import { useState } from 'react';
import { faq } from '../data/content';

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="duvidas" className="section faq">
      <div className="container faq__inner">
        <div className="section__head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="section__title">Perguntas que sempre me fazem</h2>
        </div>

        <div className="faq__list">
          {faq.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setAberto(isOpen ? null : i)}
                >
                  <span>{item.pergunta}</span>
                  <span className="faq__sign" aria-hidden="true">
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                <div className="faq__answer" hidden={!isOpen}>
                  <p>{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
