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
    `<script>(function(){var f=function(){var l=document.createElement('link');l.rel='stylesheet';l.href=${JSON.stringify(href)};document.head.appendChild(l)};` +
    `if(document.readyState==='complete')f();else addEventListener('load',f)})()</script>`
);
html = html.replace(/<link rel="preload" as="style" href="https:\/\/fonts\.googleapis\.com[^"]+>/, '');

/* 3. Hydration: the module script stays a real <script type="module"> tag.
   Modules are deferred by default, so it never blocks first paint. Do NOT swap it
   for a JS-injected script - that loses `crossorigin` and hydration silently dies. */

await fs.writeFile(path.join(dist, 'index.html'), html);
await fs.writeFile(path.join(dist, '404.html'), html);
console.log('Prerendered dist/client/index.html');
