import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement == null)
  throw new Error('The main element cannot be created! Element #root not found.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
