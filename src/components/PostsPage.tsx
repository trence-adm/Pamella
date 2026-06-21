import ReelsPreview from './ReelsPreview';

// Página dedicada /posts (protótipo) — reels + carrosséis.
export default function PostsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#2f3a2a' }}>
      <header style={{ maxWidth: 480, margin: '0 auto', padding: '18px 16px 0' }}>
        <a href="/" style={{ color: '#c5d2bb', textDecoration: 'none', fontSize: '.9rem' }}>
          ← voltar ao site
        </a>
      </header>
      <ReelsPreview />
    </div>
  );
}
