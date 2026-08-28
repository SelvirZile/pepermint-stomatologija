import fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';

const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const root = process.cwd();

const app = express();
app.disable('x-powered-by');

let vite;
if (!isProd) {
  const { createServer } = await import('vite');
  vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom' });
  app.use(vite.middlewares);
} else {
  app.use(compression());

  // hashed build output: cache forever
  app.use(
    '/assets',
    sirv(path.resolve(root, 'dist/client/assets'), {
      gzip: true,
      brotli: true,
      immutable: true,
      maxAge: 31536000,
      setHeaders: (res) => res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    })
  );

  app.use(sirv(path.resolve(root, 'dist/client'), { gzip: true, brotli: true, maxAge: 86400 }));
}

app.use('*', async (req, res) => {
  const url = req.originalUrl;
  try {
    let template, render;

    if (!isProd) {
      template = await fs.readFile(path.resolve(root, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
    } else {
      template = await fs.readFile(path.resolve(root, 'dist/client/index.html'), 'utf-8');
      render = (await import('./dist/server/entry-server.js')).render;
    }

    const { html } = await render(url);
    res
      .status(200)
      .set({ 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=0, must-revalidate' })
      .end(template.replace('<!--ssr-outlet-->', html));
  } catch (e) {
    if (!isProd) vite.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
