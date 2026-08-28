import { PRICES, FEATURES } from '../data/site.js';
import Icon from './Icon.jsx';

const GOLD = '#e8cf9a';

export default function Pricing() {
  return (
    <section id="cenovnik" aria-labelledby="cenovnik-title" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(130% 90% at 50% -10%, #17756a, #0f5e54 45%, #0a4139)' }}>
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

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: 'clamp(64px,10vw,112px) 24px' }}>
        <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, margin: '0 0 16px', textAlign: 'center' }}>
          Cenovnik
        </p>
        <h2 id="cenovnik-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 auto 16px', textAlign: 'center', color: '#FAF9F5' }}>
          Cene stomatoloških usluga
        </h2>
        <p style={{ fontFamily: "'Newsreader',Georgia,serif", fontStyle: 'italic', fontSize: 20, color: '#c3ded7', margin: '0 auto clamp(44px,5vw,64px)', maxWidth: '52ch', textAlign: 'center', textWrap: 'pretty' }}>
          Cene su okvirne. Tačan iznos ti kažemo na pregledu, kad vidimo šta se stvarno radi.
        </p>

        <dl style={{ maxWidth: 640, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,206,196,0.22)', borderRadius: 16, padding: '8px 30px' }}>
          {PRICES.map(([label, price], idx) => (
            <div
              key={label}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '20px 0',
                borderBottom: idx === PRICES.length - 1 ? 'none' : '1px solid rgba(167,206,196,0.16)'
              }}
            >
              <dt style={{ fontSize: 18, color: '#eaf3f0' }}>{label}</dt>
              <dd style={{ margin: 0, fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 18, color: GOLD, whiteSpace: 'nowrap' }}>{price}</dd>
            </div>
          ))}
        </dl>

        <div
          className="marquee-mask"
          style={{
            marginTop: 'clamp(44px,5vw,64px)', overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
          }}
        >
          <ul className="marquee-track" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {FEATURES.concat(FEATURES).map((f, k) => (
              <li
                key={k}
                aria-hidden={k >= FEATURES.length ? 'true' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto', padding: '14px 24px', borderRadius: 999,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(167,206,196,0.26)', whiteSpace: 'nowrap'
                }}
              >
                <span style={{ display: 'inline-flex', color: GOLD, flexShrink: 0 }}>
                  <Icon path={f.icon} size={22} />
                </span>
                <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 500, fontSize: 16, color: '#eaf3f0' }}>{f.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
