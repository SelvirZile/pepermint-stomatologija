import { useState } from 'react';
import { SERVICES } from './data/site.js';
import { useScrollSpy } from './hooks.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Team from './components/Team.jsx';
import Reviews from './components/Reviews.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ContactModal, ServiceModal } from './components/Modals.jsx';

const SECTION_IDS = ['usluge', 'cenovnik', 'tim', 'kako'];

export default function App() {
  const { scrolled, active } = useScrollSpy(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [serviceIdx, setServiceIdx] = useState(null);

  const openContact = (e) => { e?.preventDefault?.(); setContactOpen(true); };

  return (
    <div style={{ fontFamily: "'Manrope',system-ui,sans-serif", color: '#30383A', background: '#FAF9F5', fontSize: 18, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
      <a className="skip-link" href="#main">Preskoči na sadržaj</a>

      <Navbar
        scrolled={scrolled}
        active={active}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
        onOpenContact={openContact}
      />

      <span id="top" />

      <main id="main">
        <Hero />
        <Services onOpenService={setServiceIdx} />
        <Pricing />
        <Team />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {serviceIdx !== null && <ServiceModal service={SERVICES[serviceIdx]} onClose={() => setServiceIdx(null)} />}
    </div>
  );
}
