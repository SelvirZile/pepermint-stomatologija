import { TEAM } from '../data/site.js';
import { asset } from '../asset.js';

const GOLD_DARK = '#8a6524';

export default function Team() {
  return (
    <section id="tim" aria-labelledby="tim-title" style={{ position: 'relative', overflow: 'hidden', paddingBottom: 0 }}>
      <img
        src={asset('/assets/tooth-mint.webp')}
        alt=""
        aria-hidden="true"
        width="257"
        height="360"
        loading="lazy"
        decoding="async"
        style={{ position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)', height: 360, width: 'auto', opacity: 0.14, pointerEvents: 'none', zIndex: 0 }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,10vw,112px) 24px clamp(40px,5vw,56px)' }}>
        <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD_DARK, margin: '0 0 16px', textAlign: 'center' }}>
          Naš tim
        </p>
        <h2 id="tim-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 auto 20px', textAlign: 'center' }}>
          Ko te dočeka
        </h2>
        <p style={{ width: 'fit-content', fontFamily: "'Newsreader',Georgia,serif", fontStyle: 'italic', fontSize: 20, color: '#5c6166', margin: '0 auto', textAlign: 'center', textWrap: 'pretty' }}>
          Uigrana ekipa koja je godinama tu za tebe.
        </p>

        <ul style={{ listStyle: 'none', margin: '66px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(24px,3vw,40px)' }}>
          {TEAM.map((m) => (
            <li key={m.name}>
              <div className="tim-card" style={{ position: 'relative', aspectRatio: '3 / 4', border: '1px solid #e6e7e9', borderRadius: 10, overflow: 'hidden', marginBottom: 18 }}>
                <img
                  src={asset(m.img560)}
                  srcSet={`${asset(m.img340)} 340w, ${asset(m.img560)} 560w`}
                  sizes="(max-width: 768px) 90vw, 340px"
                  width="560"
                  height="747"
                  loading="lazy"
                  decoding="async"
                  alt={`${m.name}, ${m.role.toLowerCase()} u ordinaciji Pepermint`}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="tim-reveal">
                  <p style={{ fontFamily: "'Newsreader',Georgia,serif", fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: '#F5F1E8', margin: 0, textWrap: 'pretty' }}>
                    {m.note}
                  </p>
                </div>
              </div>
              <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 500, fontSize: 20, margin: '0 0 4px' }}>{m.name}</h3>
              <p style={{ color: GOLD_DARK, margin: 0, fontSize: 16 }}>{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
