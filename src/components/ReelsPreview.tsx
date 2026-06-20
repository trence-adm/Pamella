import { useEffect, useState } from 'react';

type Reel = { day: number; file: string };

// Seção TEMPORÁRIA de pré-visualização dos reels (site em construção).
export default function ReelsPreview() {
  const [reels, setReels] = useState<Reel[]>([]);
  useEffect(() => {
    fetch('/reels.json?ts=' + Date.now())
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setReels(Array.isArray(d) ? d : []))
      .catch(() => setReels([]));
  }, []);

  if (!reels.length) return null;

  return (
    <section style={{ background: '#2f3a2a', padding: '28px 16px' }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <h2
          style={{
            color: '#fff',
            fontFamily: 'Fraunces, Georgia, serif',
            textAlign: 'center',
            margin: '0 0 4px',
          }}
        >
          Reels (em teste)
        </h2>
        <p style={{ color: '#c5d2bb', fontSize: '.85rem', textAlign: 'center', margin: '0 0 18px' }}>
          Pré-visualização temporária — {reels.length} pronto(s)
        </p>
        {reels.map((r) => (
          <div key={r.day} style={{ marginBottom: 18 }}>
            <div style={{ color: '#d9bd8b', fontSize: '.8rem', marginBottom: 6, letterSpacing: '.06em' }}>
              DIA {r.day}
            </div>
            <video
              src={'/' + r.file}
              controls
              playsInline
              preload="metadata"
              style={{ width: '100%', borderRadius: 12, display: 'block', background: '#000' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
