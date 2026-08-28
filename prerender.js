import fs from 'node:fs/promises';
import path from 'node:path';
import { render } from './dist/server/entry-server.js';

const root = process.cwd();
const template = await fs.readFile(path.resolve(root, 'dist/client/index.html'), 'utf-8');
const { html } = await render('/');
await fs.writeFile(path.resolve(root, 'dist/client/index.html'), template.replace('<!--ssr-outlet-->', html));
console.log('Prerendered dist/client/index.html');
