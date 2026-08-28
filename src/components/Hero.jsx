import { asset } from '../asset.js';

const GOLD = '#e8cf9a';

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0a4139', overflow: 'hidden' }}>
      <img
        className="hero-img"
        src={asset('/assets/hero-1280.webp')}
        srcSet={`${asset('/assets/hero-800.webp')} 800w, ${asset('/assets/hero-1280.webp')} 1280w, ${asset('/assets/hero-1920.webp')} 1920w`}
        sizes="100vw"
        width="1280"
        height="853"
        fetchpriority="high"
        decoding="async"
        alt="Nasmejana devojčica u stolici stomatološke ordinacije Pepermint, stomatolog u pozadini"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner" style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '200px 24px 88px', width: '100%' }}>
        <div style={{ maxWidth: 760 }}>
          <p className="eyebrow" style={{
            fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: GOLD, margin: '0 0 20px'
          }}>
            Stomatološka ordinacija · Beograd
          </p>

          <h1 id="hero-title" style={{
            fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2.6rem,6vw,4.4rem)',
            lineHeight: 1.04, letterSpacing: '-0.02em', margin: '0 0 24px', color: '#F5F1E8', textWrap: 'balance'
          }}>
            Kod nas se ne plašiš <span style={{ color: GOLD, fontStyle: 'italic' }}>zubara</span>.
          </h1>

          <p style={{ maxWidth: '56ch', fontSize: 20, color: '#EDE7DB', margin: '0 0 32px', textWrap: 'pretty' }}>
            Bez žurbe, bez pritiska i uz potpuno poverenje.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#usluge"
              className="pozovi-btn"
              style={{
                position: 'relative', overflow: 'hidden', display: 'inline-flex', alignItems: 'center', gap: 9,
                fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: '#fff',
                background: 'rgba(15,94,84,0.92)', padding: '15px 24px', borderRadius: 8,
                transition: 'transform .25s ease, background .25s ease'
              }}
            >
              <span>Pogledaj usluge</span>
            </a>
            <a
              href="#cenovnik"
              className="pozovi-btn"
              style={{
                position: 'relative', overflow: 'hidden', display: 'inline-flex', alignItems: 'center',
                fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: '#F5F1E8',
                background: 'rgba(24,32,34,0.35)', padding: '15px 24px', border: '1px solid rgba(245,241,232,0.7)', borderRadius: 8,
                transition: 'transform .25s ease, background .25s ease, border-color .25s ease'
              }}
            >
              <span>Pogledaj cenovnik</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
