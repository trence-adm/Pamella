import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Approach from './components/Approach';
import Consultorio from './components/Consultorio';
import Manifesto from './components/Manifesto';
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
        <Consultorio />
        <Manifesto />
        <ForWhom />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {/* /posts continua acessível só pela URL direta (sem botão no site) */}
      <WhatsAppFloat />
    </>
  );
}
