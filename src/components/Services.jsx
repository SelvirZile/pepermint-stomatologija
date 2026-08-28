import { useState } from 'react';
import { asset } from '../asset.js';
import { SERVICES } from '../data/site.js';
import { useSwipe } from '../hooks.js';
import Icon from './Icon.jsx';

const GOLD_DARK = '#8a6524';
const EASE = 'cubic-bezier(.33,.7,.3,1)';
const RADIUS = 400;
const CARD_BG = 'radial-gradient(120% 70% at 30% 0%, #17756a, #0f5e54 45%, #0a4139)';

export default function Services({ onOpenService }) {
  const [i, setI] = useState(0);
  const n = SERVICES.length;
  const step = 360 / n;

  const next = () => setI((v) => (v + 1) % n);
  const prev = () => setI((v) => (v - 1 + n) % n);
  const swipe = useSwipe(next, prev);

  const offset = (idx) => {
    let d = idx - i;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <section id="usluge" aria-labelledby="usluge-title" style={{ position: 'relative', overflow: 'hidden' }}>
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

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: 'clamp(64px,10vw,112px) 24px' }}>
        <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD_DARK, margin: '0 0 16px', textAlign: 'center' }}>
          Usluge
        </p>
        <h2 id="usluge-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 auto 20px', maxWidth: '22ch', textAlign: 'center' }}>
          Stomatološke usluge
        </h2>
        <p style={{ width: 'fit-content', fontFamily: "'Newsreader',Georgia,serif", fontStyle: 'italic', fontSize: 20, color: '#5c6166', margin: '0 auto 6px', textAlign: 'center', textWrap: 'pretty' }}>
          Od redovne kontrole do implanta - sve na jednom mestu.
        </p>
        <p style={{ width: 'fit-content', fontFamily: "'Newsreader',Georgia,serif", fontStyle: 'italic', fontSize: 20, color: '#5c6166', margin: '0 auto clamp(40px,5vw,64px)', textAlign: 'center', textWrap: 'pretty' }}>
          Sve što je potrebno da tvoji zubi budu zdravi, funkcionalni i lepi.
        </p>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(2px,0.5vw,8px)' }}>
          <button type="button" onClick={prev} className="carousel-arrow" aria-label="Prethodna usluga" style={arrowStyle}>
            <Icon path='<path d="M15 6l-6 6 6 6"></path>' size={18} strokeWidth={1.9} />
          </button>

          <div
            {...swipe}
            role="group"
            aria-roledescription="karusel"
            aria-label="Usluge ordinacije"
            style={{ flex: '0 1 auto', position: 'relative', height: 400, maxWidth: 900, margin: '0 auto', perspective: '1600px', transformStyle: 'preserve-3d', width: '100%' }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '100%', transformStyle: 'preserve-3d',
              transform: `translateZ(-${RADIUS}px) rotateY(${-i * step}deg)`, transition: `transform .7s ${EASE}`
            }}>
              {SERVICES.map((s, idx) => {
                const d = offset(idx);
                const ad = Math.abs(d);
                const center = d === 0;
                const opacity = center ? 1 : ad === 1 ? 0.5 : 0;

                return (
                  <article
                    key={s.title}
                    className={center ? 'carousel-center' : 'carousel-side'}
                    aria-hidden={center ? undefined : 'true'}
                    style={{
                      position: 'absolute', left: 0, right: 0, margin: '0 auto',
                      top: center ? 10 : 45,
                      width: center ? 'clamp(280px,34vw,400px)' : 'clamp(220px,24vw,300px)',
                      height: center ? 400 : 330,
                      display: 'flex', flexDirection: 'column', justifyContent: 'center',
                      padding: center ? 'clamp(32px,4vw,44px)' : 28,
                      paddingBottom: center ? 104 : 76,
                      borderRadius: 18, boxSizing: 'border-box', background: CARD_BG,
                      border: '1px solid rgba(255,255,255,0.12)',
                      boxShadow: center ? '0 26px 60px rgba(12,60,52,0.36)' : '0 16px 40px rgba(10,50,44,0.28)',
                      transform: `rotateY(${idx * step}deg) translateZ(${RADIUS}px)`,
                      opacity, pointerEvents: 'none', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden',
                      transition: `opacity .7s ${EASE}, box-shadow .7s ${EASE}`
                    }}
                  >
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: center ? 64 : 56, height: center ? 64 : 56,
                      background: `rgba(220,238,233,${center ? 0.2 : 0.16})`,
                      border: `${center ? 1.5 : 1}px solid ${center ? '#A7CEC4' : 'rgba(167,206,196,0.7)'}`,
                      borderRadius: 14, color: '#bcdcd4', marginBottom: center ? 22 : 20
                    }}>
                      <Icon path={s.icon} size={center ? 34 : 26} />
                    </span>

                    <h3 style={center
                      ? { fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(1.5rem,3vw,2rem)', margin: '0 0 14px', color: '#FAF9F5' }
                      : { fontFamily: "'Manrope',sans-serif", fontWeight: 500, fontSize: 19, margin: '0 0 10px', color: '#DCEEE9' }}>
                      {s.title}
                    </h3>

                    <p style={center
                      ? { color: '#d5e8e3', margin: 0, fontSize: 18, lineHeight: 1.55 }
                      : { color: '#bcdcd4', margin: 0, fontSize: 16 }}>
                      {s.desc}
                    </p>

                    <span style={{
                      position: 'absolute', bottom: center ? 32 : 24, left: '50%', transform: 'translateX(-50%)',
                      display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
                      fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: center ? 15 : 13,
                      color: '#e8cf9a', background: 'rgba(10,65,57,0.55)', border: '1px solid rgba(232,207,154,0.6)',
                      borderRadius: 999, padding: center ? '9px 18px' : '7px 14px'
                    }}>
                      <span style={{ lineHeight: 1 }}>Saznaj više</span>
                      <Icon path='<path d="M5 12h14M13 6l6 6-6 6"></path>' size={15} strokeWidth={1.9} style={{ display: 'block', position: 'relative', top: 1 }} />
                    </span>
                  </article>
                );
              })}
            </div>

            {/* flat hit layer: always clickable, outside the 3D ring */}
            <button
              type="button"
              onClick={() => onOpenService(i)}
              style={{ position: 'absolute', bottom: 22, left: '50%', transform: 'translateX(-50%)', width: 'clamp(200px,26vw,300px)', height: 58, zIndex: 30, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, color: 'transparent' }}
            >
              <span className="visually-hidden">Saznaj više: {SERVICES[i].title}</span>
            </button>
          </div>

          <button type="button" onClick={next} className="carousel-arrow" aria-label="Sledeća usluga" style={arrowStyle}>
            <Icon path='<path d="M9 6l6 6-6 6"></path>' size={18} strokeWidth={1.9} />
          </button>
        </div>

        <div role="tablist" aria-label="Izbor usluge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 36 }}>
          {SERVICES.map((s, idx) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={s.title}
              onClick={() => setI(idx)}
              style={{
                width: idx === i ? 26 : 10, height: 10, padding: 0, border: 'none', cursor: 'pointer', borderRadius: 999,
                background: idx === i ? '#0f5e54' : '#9fb3ae', transition: 'width .3s ease, background .3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const arrowStyle = {
  flexShrink: 0, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
  border: '1px solid #4a8073', background: '#FAF9F5', color: '#3f7568', borderRadius: 999, cursor: 'pointer',
  transition: 'border-color .2s ease, color .2s ease'
};
