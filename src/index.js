import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import { CssBaseline } from '@mui/material';
import './index.css';
import Providers from './app/providers';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
