import Navbar from './components/Navbar';
import ReelsPreview from './components/ReelsPreview';
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ReelsPreview />
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
      <WhatsAppFloat />
    </>
  );
}
