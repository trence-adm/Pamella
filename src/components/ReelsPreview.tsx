import { useEffect, useState } from 'react';

type Reel = { day: number; file: string };
type Carousel = { id: string; titulo: string; slides: string[] };

// Seção TEMPORÁRIA de pré-visualização (site em construção).
export default function ReelsPreview() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [cars, setCars] = useState<Carousel[]>([]);

  useEffect(() => {
    fetch('/reels.json?ts=' + Date.now())
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setReels(Array.isArray(d) ? d : []))
      .catch(() => {});
    fetch('/carousels.json?ts=' + Date.now())
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setCars(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  if (!reels.length && !cars.length) return null;

  const label: React.CSSProperties = {
    color: '#d9bd8b',
    fontSize: '.8rem',
    marginBottom: 6,
    letterSpacing: '.06em',
  };

  return (
    <section style={{ background: '#2f3a2a', padding: '28px 16px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <h2
          style={{
            color: '#fff',
            fontFamily: 'Fraunces, Georgia, serif',
            textAlign: 'center',
            margin: '0 0 18px',
          }}
        >
          Conteúdo (em teste)
        </h2>

        {reels.map((r) => (
          <div key={'r' + r.day} style={{ marginBottom: 20 }}>
            <div style={label}>REEL · DIA {r.day}</div>
            <video
              src={'/' + r.file}
              controls
              playsInline
              preload="metadata"
              style={{ width: '100%', borderRadius: 12, display: 'block', background: '#000' }}
            />
          </div>
        ))}

        {cars.map((c) => (
          <div key={c.id} style={{ marginBottom: 24 }}>
            <div style={label}>CARROSSEL</div>
            <div style={{ color: '#fff', margin: '0 0 8px', fontSize: '.95rem' }}>{c.titulo}</div>
            <div
              style={{
                display: 'flex',
                gap: 8,
                overflowX: 'auto',
                paddingBottom: 8,
                scrollSnapType: 'x mandatory',
              }}
            >
              {c.slides.map((s, i) => (
                <img
                  key={i}
                  src={'/' + s}
                  alt=""
                  loading="lazy"
                  style={{ height: 320, borderRadius: 10, flex: '0 0 auto', scrollSnapAlign: 'start' }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
