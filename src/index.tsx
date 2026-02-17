import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeProvider from './app/ThemeProvider';
import { GeoProvider } from './app/providers/GeoProvider';
import { GlobalStyle } from './styles/globalStyles';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');

const root = createRoot(container);
root.render(
  <GeoProvider defaultGeo="EN">
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </GeoProvider>
);