import { CONTACT } from '../data/site.js';
import Icon from './Icon.jsx';

const GOLD_DARK = '#c9a25e';
const PIN = '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>';

export default function Contact() {
  return (
    <section id="kako" aria-labelledby="kako-title">
      <div data-reveal style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 24px clamp(64px,10vw,112px)' }}>
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

          <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', minHeight: 300, border: '1px solid #e6e7e9', borderRadius: 14, overflow: 'hidden', background: '#DCEEE9' }}>
            <iframe
              src={CONTACT.mapsEmbed}
              title="Lokacija ordinacije Pepermint na Google mapama"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
            />
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener"
              className="map-cta"
              style={{
                position: 'absolute', bottom: 16, left: 16, display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(250,249,245,0.96)', borderRadius: 999, padding: '10px 18px',
                fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 14, color: '#0f5e54',
                boxShadow: '0 4px 14px rgba(12,60,52,0.16)', textDecoration: 'none'
              }}
            >
              <Icon path={PIN} size={17} strokeWidth={1.7} />
              <span>Otvori u Google mapama</span>
            </a>
          </div>
        </div>
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
