import reviews from '../data/reviews.json';
import Icon from './Icon.jsx';

const GOLD = '#e8cf9a';
const QUOTE = '<path d="M9 6c-3 1.4-4.5 4-4.5 7.2C4.5 16.3 6.2 18 8.4 18c1.9 0 3.3-1.3 3.3-3.1 0-1.8-1.3-3-3-3-.3 0-.6 0-.8.1.3-1.7 1.4-3.1 3.1-4L9 6zM19 6c-3 1.4-4.5 4-4.5 7.2 0 3.1 1.7 4.8 3.9 4.8 1.9 0 3.3-1.3 3.3-3.1 0-1.8-1.3-3-3-3-.3 0-.6 0-.8.1.3-1.7 1.4-3.1 3.1-4L19 6z"></path>';

export default function Reviews() {
  const loop = reviews.concat(reviews);

  return (
    <section id="iskustva" aria-labelledby="iskustva-title" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(130% 90% at 50% -10%, #17756a, #0f5e54 45%, #0a4139)' }}>
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <g fill="none" stroke="#A7CEC4" strokeOpacity="0.18" strokeWidth="1.2">
          <circle cx="140" cy="470" r="230" />
          <circle cx="140" cy="470" r="160" />
          <circle cx="140" cy="470" r="90" />
          <circle cx="1000" cy="120" r="220" />
          <circle cx="1000" cy="120" r="150" />
          <circle cx="1000" cy="120" r="80" />
        </g>
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 24px clamp(40px,5vw,56px)' }}>
        <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px' }}>
          Iskustva
        </p>
        <h2 id="iskustva-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 clamp(40px,5vw,64px)', color: '#FAF9F5' }}>
          Šta kažu pacijenti
        </h2>

        <div
          className="marquee-mask rev-mask"
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)'
          }}
        >
          <div className="marquee-track rev-track">
            {loop.map((r, k) => (
              <figure
                key={k}
                aria-hidden={k >= reviews.length ? 'true' : undefined}
                style={{
                  margin: 0, flex: '0 0 340px', background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(167,206,196,0.24)', borderRadius: 14, padding: 30,
                  display: 'flex', flexDirection: 'column'
                }}
              >
                <Icon path={QUOTE} size={26} color={GOLD} strokeWidth={1.4} style={{ marginBottom: 16, flexShrink: 0 }} />
                <blockquote style={{ margin: '0 0 22px', fontSize: 17, lineHeight: 1.55, color: '#eaf3f0', flex: 1, textWrap: 'pretty', whiteSpace: 'normal' }}>
                  {r.text}
                </blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(167,206,196,0.2)' }}>
                  <span aria-hidden="true" style={{
                    width: 36, height: 36, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 999, background: 'rgba(167,206,196,0.22)',
                    fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: '#cfe4de'
                  }}>
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span style={{ display: 'block', fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: GOLD }}>{r.name}</span>
                    <span style={{ display: 'block', fontFamily: "'Manrope',sans-serif", fontSize: 13, color: '#a9cdc5' }}>{r.when}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
