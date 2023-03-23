import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
);
