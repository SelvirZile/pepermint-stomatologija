import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import './styles.css';

export async function render() {
  const html = renderToString(<App />);
  return { html };
}
