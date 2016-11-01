import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { fetchBenches } from './util/bench_api_util';
import { requestBenches, receiveBenches } from './actions/bench_actions';

window.requestBenches = requestBenches;
window.receiveBenches = receiveBenches;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  let rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
