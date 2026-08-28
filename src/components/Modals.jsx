import { useEffect, useRef } from 'react';
import { CONTACT } from '../data/site.js';
import { useBodyLock } from '../hooks.js';
import Icon from './Icon.jsx';

const GOLD_DARK = '#8a6524';
const PHONE = '<path d="M6.5 3.5h3l1.2 4-2 1.4a11 11 0 0 0 4.9 4.9l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"></path>';

export function Modal({ onClose, children, titleId, maxWidth = 420 }) {
  const closeRef = useRef(null);
  useBodyLock(true);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(24,32,34,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'modalFade .25s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ position: 'relative', width: '100%', maxWidth, background: '#FAF9F5', borderRadius: 20, border: '1px solid #e6e7e9', padding: '36px 32px 32px', animation: 'modalPop .3s ease' }}
      >
        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          aria-label="Zatvori"
          style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', color: '#3f7568', borderRadius: 8 }}
        >
          <Icon path='<path d="M6 6l12 12M18 6L6 18"></path>' size={20} strokeWidth={1.9} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function ContactModal({ onClose }) {
  return (
    <Modal onClose={onClose} titleId="contact-modal-title">
      <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD_DARK, margin: '0 0 10px' }}>
        Pepermint
      </p>
      <h2 id="contact-modal-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: '1.9rem', lineHeight: 1.15, margin: '0 0 24px', color: '#30383A' }}>
        Zovi nas ili navrati
      </h2>

      <dl style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '0 0 28px' }}>
        <Line icon='<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>' label="Adresa" value={CONTACT.address} />
        <Line icon={PHONE} label="Telefon" value={CONTACT.phone} />
        <Line icon='<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path>' label="Radno vreme" value={CONTACT.hours} />
      </dl>

      <a
        href={`tel:${CONTACT.tel}`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 16, color: '#F5F1E8', background: '#0f5e54', padding: 15, borderRadius: 999 }}
      >
        <Icon path={PHONE} size={18} strokeWidth={1.9} />
        <span>Pozovi {CONTACT.phone}</span>
      </a>
    </Modal>
  );
}

export function ServiceModal({ service, onClose }) {
  return (
    <Modal onClose={onClose} titleId="service-modal-title" maxWidth={460}>
      <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD_DARK, margin: '0 0 10px' }}>
        Usluga
      </p>
      <h2 id="service-modal-title" style={{ fontFamily: "'Newsreader',Georgia,serif", fontWeight: 400, fontSize: '1.9rem', lineHeight: 1.15, margin: '0 0 22px', color: '#30383A' }}>
        {service.title}
      </h2>

      <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {service.points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: "'Manrope',sans-serif", fontSize: 16, color: '#30383A' }}>
            <Icon path='<path d="M20 6L9 17l-5-5"></path>' size={20} color="#0f5e54" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href="#kako"
        onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 16, color: '#F5F1E8', background: '#0f5e54', padding: 15, borderRadius: 999 }}
      >
        <span>Zakaži pregled</span>
      </a>
    </Modal>
  );
}

function Line({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <Icon path={icon} size={22} color="#3f7568" strokeWidth={1.7} style={{ flexShrink: 0, marginTop: 2 }} />
      <div>
        <dt style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13, color: '#3f7568', marginBottom: 2 }}>{label}</dt>
        <dd style={{ margin: 0, fontFamily: "'Manrope',sans-serif", fontSize: 17, color: '#30383A' }}>{value}</dd>
      </div>
    </div>
  );
}
