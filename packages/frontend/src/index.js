/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import rootSaga from './redux/sagas/rootSaga';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // eslint-disable-next-line no-mixed-operators
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-cmccovs2.us.auth0.com"
        clientId="Yq68gApSM1rSGBPHGDGSSnoxDy2aGVqS"
        redirectUri="https://fakebook100.netltimeline"
        useRefreshTokens
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

export default store;
