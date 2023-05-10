import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App.js';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <App>
    <Provider store={store}></Provider>
  </App>,
  document.querySelector('#root')
);
