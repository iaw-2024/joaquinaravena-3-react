import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

window.addEventListener("DOMContentLoaded", function (e) {
  const main = document.querySelector('main');
  const appRoot = createRoot(main);
  appRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

