import { useState } from 'react';
import { CONTACT } from '../data/site.js';
import Icon from './Icon.jsx';

const GOLD_DARK = '#8a6524';
const PIN = '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>';

export default function Contact() {
  // The Google Maps iframe is heavy; load it only on demand.
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="kako" aria-labelledby="kako-title">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 24px clamp(64px,10vw,112px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,56px)', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD_DARK, margin: '0 0 16px' }}>
              Kako do nas
            </p>
            <h2 id="kako-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 32px' }}>
              Dođi ili nas pozovi
            </h2>

            <dl style={{ margin: 0 }}>
              <Row label="Adresa" first>{CONTACT.address}</Row>
              <Row label="Radno vreme">{CONTACT.hours}</Row>
              <Row label="Telefon">
                <a href={`tel:${CONTACT.tel}`} style={{ fontSize: 19, color: '#1f5a50', fontWeight: 600 }}>{CONTACT.phone}</a>
              </Row>
            </dl>
          </div>

          {mapLoaded ? (
            <div style={{ position: 'relative', aspectRatio: '1 / 1', minHeight: 280, border: '1px solid #e6e7e9', borderRadius: 14, overflow: 'hidden' }}>
              <iframe
                src={CONTACT.mapsEmbed}
                title="Lokacija ordinacije Pepermint na Google mapama"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setMapLoaded(true)}
              className="map-facade"
              style={{
                display: 'block', position: 'relative', width: '100%', aspectRatio: '1 / 1', minHeight: 280, cursor: 'pointer',
                border: '1px solid #cfe0da', borderRadius: 14, overflow: 'hidden', padding: 0,
                background: 'radial-gradient(120% 90% at 30% 10%, #DCEEE9, #c6ded7)'
              }}
            >
              <svg viewBox="0 0 400 400" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <g stroke="#a9c9c0" strokeWidth="8" fill="none">
                  <path d="M-20 120 H420" /><path d="M-20 270 H420" />
                  <path d="M110 -20 V420" /><path d="M280 -20 V420" />
                </g>
                <circle cx="200" cy="180" r="46" fill="#ffffff" opacity="0.5" />
                <g transform="translate(176,150) scale(2)" fill="none" stroke="#0f5e54" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </g>
              </svg>
              <span
                className="map-cta"
                style={{
                  position: 'absolute', bottom: 16, left: 16, display: 'inline-flex', alignItems: 'center', gap: 9,
                  background: 'rgba(250,249,245,0.96)', borderRadius: 999, padding: '10px 18px',
                  fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 14, color: '#0f5e54',
                  boxShadow: '0 4px 14px rgba(12,60,52,0.16)'
                }}
              >
                <Icon path={PIN} size={17} strokeWidth={1.7} />
                <span>Prikaži mapu · {CONTACT.address}</span>
              </span>
            </button>
          )}
        </div>

        <p style={{ marginTop: 20, fontFamily: "'Manrope',sans-serif", fontSize: 15 }}>
          <a href={CONTACT.mapsUrl} target="_blank" rel="noopener" style={{ color: '#1f5a50', fontWeight: 600 }}>
            Otvori ordinaciju Pepermint u Google mapama
          </a>
        </p>
      </div>
    </section>
  );
}

function Row({ label, children, first }) {
  return (
    <div style={{ padding: '20px 0', borderTop: first ? '1px solid #e6e7e9' : 'none', borderBottom: '1px solid #e6e7e9' }}>
      <dt style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 14, color: '#3f7568', marginBottom: 4 }}>{label}</dt>
      <dd style={{ margin: 0, fontSize: 19 }}>{children}</dd>
    </div>
  );
}
