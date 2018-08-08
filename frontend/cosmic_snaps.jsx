import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup }from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  //TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
