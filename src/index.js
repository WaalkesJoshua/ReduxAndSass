import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './styles/ThemeProvider';



const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);


