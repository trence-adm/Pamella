const fotos = [1, 2, 3, 4, 5, 6].map((n) => `/consultorio/${n}.jpg`);

// Carrossel das fotos do consultório (rolagem horizontal, ocupa pouco espaço).
export default function Consultorio() {
  return (
    <section id="consultorio" className="section consultorio">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Conheça o espaço</span>
          <h2 className="section__title">O consultório</h2>
          <p className="section__lead">
            Um ambiente acolhedor e preparado para cuidar de você, na R. Avaré — Baeta Neves, São
            Bernardo do Campo.
          </p>
        </div>

        <div className="consultorio__carousel">
          {fotos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Consultório da nutricionista Pamella Martins — foto ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
