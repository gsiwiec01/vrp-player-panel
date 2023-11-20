import React from 'react';
import ReactDOM from 'react-dom/client';
import { z } from 'zod';

import dayjs from 'dayjs';
import locale from 'dayjs/locale/pl';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import duration from 'dayjs/plugin/duration';

import { App } from './App.tsx';
import '@/global.css';
import { zodErrorMap } from '@/utils/zodErrorMap.ts';

dayjs.locale(locale);
dayjs.extend(localizedFormat);
dayjs.extend(duration);

z.setErrorMap(zodErrorMap);

const rootElement = document.getElementById('root');
if (rootElement == null)
  throw new Error('The main element cannot be created! Element #root not found.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
