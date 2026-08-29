import fs from 'node:fs/promises';
import path from 'node:path';
import { render } from './dist/server/entry-server.js';

const root = process.cwd();
const dist = path.resolve(root, 'dist/client');

let html = await fs.readFile(path.join(dist, 'index.html'), 'utf-8');
const { html: app } = await render('/');
html = html.replace('<!--ssr-outlet-->', app);

/* 1. Inline the stylesheet.
   Vite emits one CSS file and links it with a render-blocking <link>. It is small
   enough to inline, which removes a whole round trip from the critical path. */
const cssLink = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+\.css)"[^>]*>/);
if (cssLink) {
  const rel = cssLink[1].replace(/^.*\/assets\//, 'assets/');
  const css = await fs.readFile(path.join(dist, rel), 'utf-8');
  html = html.replace(cssLink[0], `<style>${css}</style>`);
  console.log(`Inlined ${rel} (${Math.round(css.length / 1024)} kB)`);
}

/* 2. Take the Google Fonts stylesheet off the critical path completely.
   The media="print" swap still costs a blocking-parse slot in some engines;
   injecting it after first paint does not. */
html = html.replace(
  /<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com[^"]+)"[^>]*>/,
  (_m, href) =>
    `<script>addEventListener('load',function(){var l=document.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(href)};document.head.appendChild(l)})</script>`
);
html = html.replace(/<link rel="preload" as="style" href="https:\/\/fonts\.googleapis\.com[^"]+>/, '');

/* 3. Hydration can wait until the browser is idle - nothing above the fold needs JS. */
html = html.replace(
  /<script type="module" (crossorigin )?src="([^"]+)"><\/script>/,
  (_m, _c, src) =>
    `<script>(function(){var s=document.createElement('script');s.type='module';s.src=${JSON.stringify(src)};` +
    `('requestIdleCallback' in window?requestIdleCallback:setTimeout)(function(){document.head.appendChild(s)},1)})();</script>`
);

await fs.writeFile(path.join(dist, 'index.html'), html);
await fs.writeFile(path.join(dist, '404.html'), html);
console.log('Prerendered dist/client/index.html');
