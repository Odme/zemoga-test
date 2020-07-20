import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose as reduxCompose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

let compose;
if (process.env.REACT_APP_NODE_ENV === 'dev') {
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;
} else {
  compose = reduxCompose;
}

const store = createStore(rootReducer, compose());

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
