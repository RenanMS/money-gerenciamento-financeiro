import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './assets/styles/global';
import { GlobalReset } from './assets/styles/reset';
import { mirageJS } from './services/miragejs';

mirageJS()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <GlobalReset />
    <GlobalStyle />
  </React.StrictMode>
);
