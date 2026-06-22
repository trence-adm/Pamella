// Faixa de filosofia/manifesto com a foto P&B das esculturas (metáfora de transformação).
export default function Manifesto() {
  return (
    <section className="section manifesto">
      <div className="container manifesto__inner">
        <div className="manifesto__photo">
          <img
            src="/manifesto.jpg"
            alt="Esculturas esculpindo a própria forma — símbolo de transformação"
            loading="lazy"
          />
        </div>
        <div className="manifesto__text">
          <span className="eyebrow">Minha filosofia</span>
          <h2 className="manifesto__quote">Você é o seu melhor investimento.</h2>
          <p>
            Cada escolha esculpe a sua melhor versão. Meu papel é caminhar com você nessa
            transformação — com ciência, leveza e constância, no seu tempo.
          </p>
        </div>
      </div>
    </section>
  );
}
