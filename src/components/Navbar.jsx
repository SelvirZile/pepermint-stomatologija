import { NAV, CONTACT } from '../data/site.js';
import { asset } from '../asset.js';
import Icon from './Icon.jsx';

const GOLD = '#e8cf9a';

export default function Navbar({ scrolled, active, menuOpen, onToggleMenu, onCloseMenu, onOpenContact }) {
  const headerStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'transparent' : 'linear-gradient(rgba(24,32,34,0.72), rgba(24,32,34,0))',
    transition: 'background .3s ease'
  };

  const barBase = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'nowrap', margin: '0 auto', position: 'relative',
    transition: 'background .4s ease, border-radius .4s ease, margin .4s ease, padding .4s ease, border-color .4s ease, box-shadow .4s ease, max-width .4s ease, gap .4s ease'
  };

  const barStyle = scrolled
    ? {
        ...barBase, gap: 14, maxWidth: 'min(847px, calc(100% - 48px))', margin: '12px auto', padding: '10px 18px',
        background: 'linear-gradient(90deg, rgba(15,94,84,0.97), rgba(11,66,58,0.97), rgba(15,94,84,0.97))',
        borderRadius: 30, border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 6px 22px rgba(12,60,52,0.28)'
      }
    : { ...barBase, gap: 20, maxWidth: 1100, padding: '16px 24px', background: 'transparent', borderRadius: 0, border: '1px solid transparent', boxShadow: 'none' };

  const linkColor = (id) => (active === id ? GOLD : '#FAF9F5');
  const logo = (h) => (
    <picture>
      <source srcSet={asset('/assets/logo-light.webp')} type="image/webp" />
      <img className="nav-logo" src={asset('/assets/logo-light.png')} alt="Pepermint stomatološka ordinacija" width="117" height={h} decoding="async" style={{ display: 'block', height: h, width: 'auto' }} />
    </picture>
  );

  return (
    <header style={headerStyle}>
      <div className="nav-bar" style={barStyle}>
        <a href="#top" aria-label="Pepermint, početak stranice" style={{ display: 'flex', alignItems: 'center' }}>
          {logo(54)}
        </a>

        <nav
          className="site-nav"
          aria-label="Glavna navigacija"
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', alignItems: 'center', gap: scrolled ? 16 : 24,
            flexWrap: 'nowrap', whiteSpace: 'nowrap',
            fontFamily: "'Manrope',sans-serif", fontSize: 15, fontWeight: 500, transition: 'gap .4s ease'
          }}
        >
          {NAV.map(([href, label, id]) => (
            <a
              key={id}
              href={href}
              className="nav-link"
              aria-current={active === id ? 'true' : undefined}
              style={{ color: linkColor(id) }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${CONTACT.tel}`}
          onClick={onOpenContact}
          className="contact-auto nav-cta"
          style={{
            position: 'relative', overflow: 'hidden', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            gap: 8, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: '#fff',
            background: 'rgba(15,94,84,0.92)', padding: '10px 16px', border: '1px solid #BFC2C3', borderRadius: 999,
            whiteSpace: 'nowrap', transition: 'transform .25s ease, background .25s ease'
          }}
        >
          <span>Kontaktirajte nas</span>
        </a>

        <button
          type="button"
          onClick={onToggleMenu}
          className="burger-btn"
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{
            width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'rgba(24,32,34,0.35)',
            border: '1px solid rgba(224,228,229,0.85)', borderRadius: 999, cursor: 'pointer', color: '#F5F1E8', flexShrink: 0, padding: 0
          }}
        >
          <Icon
            path={menuOpen ? '<path d="M6 6l12 12M18 6L6 18"></path>' : '<path d="M4 7h16M4 12h16M4 17h16"></path>'}
            size={20}
            strokeWidth={1.9}
            style={{ display: 'block' }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="menu-wrap" style={{ maxWidth: 1100, margin: '8px auto 0', padding: '0 12px' }}>
          <nav
            id="mobile-menu"
            aria-label="Mobilna navigacija"
            style={{
              background: 'rgba(10,65,57,0.82)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(167,206,196,0.28)', borderRadius: 24, padding: '26px 22px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, animation: 'modalPop .28s ease'
            }}
          >
            {NAV.map(([href, label, id]) => (
              <a
                key={id}
                href={href}
                onClick={onCloseMenu}
                aria-current={active === id ? 'true' : undefined}
                style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 500, fontSize: 18, color: linkColor(id) }}
              >
                {label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.tel}`}
              onClick={(e) => { onCloseMenu(); onOpenContact(e); }}
              className="contact-auto"
              style={{
                position: 'relative', overflow: 'hidden', marginTop: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15, color: '#fff',
                background: 'rgba(15,94,84,0.92)', padding: '10px 16px', border: '1px solid #BFC2C3', borderRadius: 999,
                whiteSpace: 'nowrap', cursor: 'pointer'
              }}
            >
              <span>Kontaktirajte nas</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
