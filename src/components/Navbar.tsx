import { useEffect, useState } from 'react';
import { contato } from '../data/content';
import { whatsappLink } from '../utils';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#especialidades', label: 'Como ajudo' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#topo" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-name">{contato.nome}</span>
          <span className="nav__brand-role">{contato.profissao}</span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn--small nav__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Agendar consulta
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
