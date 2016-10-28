import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions.js';
import configureStore from './store/store';

window.signup = signup;
window.login = login;
window.logout = logout;
const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  let rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, rootEl);
});
