import React from 'react';
import ReactDOM from 'react-dom/client';

import dayjs from 'dayjs';
import locale from 'dayjs/locale/pl';
import duration from 'dayjs/plugin/duration';

import { App } from './App.tsx';
import '@/global.css';

dayjs.locale(locale);
dayjs.extend(duration);

const rootElement = document.getElementById('root');
if (rootElement == null)
  throw new Error('The main element cannot be created! Element #root not found.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
