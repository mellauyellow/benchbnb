import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';

window.login = login;

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  let rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
