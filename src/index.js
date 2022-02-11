import React from 'react';
import ReactDOM from 'react-dom';
//4
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { pokemonReducer } from './reducers/pokemonReducer';
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));

