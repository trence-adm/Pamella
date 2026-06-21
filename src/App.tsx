import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Approach from './components/Approach';
import ForWhom from './components/ForWhom';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PostsPage from './components/PostsPage';

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : '';
  if (path === '/posts') return <PostsPage />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Approach />
        <ForWhom />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <section style={{ background: '#f7f4ec', textAlign: 'center', padding: '26px 16px 44px' }}>
        <a
          href="/posts"
          style={{
            display: 'inline-block',
            background: '#5a6f52',
            color: '#fff',
            padding: '13px 32px',
            borderRadius: 999,
            textDecoration: 'none',
            fontWeight: 600,
            letterSpacing: '.04em',
          }}
        >
          POSTS →
        </a>
        <div style={{ color: '#5e6359', fontSize: '.8rem', marginTop: 10 }}>
          conteúdo em teste (protótipo)
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}
