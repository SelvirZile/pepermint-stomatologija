/** Putanja do fajla u /public, ispravna i kad sajt živi u podfolderu (GitHub Pages). */
const BASE = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');

export const asset = (path) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
