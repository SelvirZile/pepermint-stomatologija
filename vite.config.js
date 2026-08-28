import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: sajt živi na https://<korisnik>.github.io/pepermint-stomatologija/
// Lokalni dev i korisnički sajt (korisnik.github.io) koriste '/'.
const base = process.env.BASE || (process.env.GITHUB_ACTIONS ? '/pepermint-stomatologija/' : '/');

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    reportCompressedSize: false
  },
  ssr: { noExternal: [] }
});
