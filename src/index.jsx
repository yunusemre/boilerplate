import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'app';

render(
  <Provider store={store}>
    <App id="app" />
  </Provider>,
  document.getElementById('app'),
);
