import { CONTACT } from '../data/site.js';
import { asset } from '../asset.js';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: '#30383A' }}>
      <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <g fill="none" stroke="#A7CEC4" strokeOpacity="0.10" strokeWidth="1.2">
          <circle cx="1030" cy="300" r="220" />
          <circle cx="1030" cy="300" r="150" />
          <circle cx="1030" cy="300" r="80" />
        </g>
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '22px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href="#top" aria-label="Pepermint, natrag na početak" style={{ display: 'block' }}>
          <picture>
            <source srcSet={asset('/assets/logo-light.webp')} type="image/webp" />
            <img src={asset('/assets/logo-light.png')} alt="Pepermint stomatološka ordinacija" width="117" height="54" loading="lazy" decoding="async" style={{ display: 'block', height: 54, width: 'auto' }} />
          </picture>
        </a>
        <p className="footer-contact" style={{ margin: 0, fontFamily: "'Manrope',sans-serif", fontSize: 15, color: '#D3D6D7' }}>
          <a href={`tel:${CONTACT.tel}`} style={{ color: '#D3D6D7' }}>{CONTACT.phone}</a> · {CONTACT.address}
        </p>
        <p style={{ margin: 0, fontFamily: "'Manrope',sans-serif", fontSize: 14, color: '#AEB5B9' }}>© 2026 Pepermint</p>
      </div>
    </footer>
  );
}
