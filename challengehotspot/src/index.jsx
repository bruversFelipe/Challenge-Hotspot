import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store';
import { GlobalContextProvider } from './GlobalContext';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Provider>,
  document.getElementById('root'),
);
