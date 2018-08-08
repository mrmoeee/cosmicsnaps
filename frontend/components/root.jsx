/* Functional component, accept store as a prop,
  render routes wrapped by provider */

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => {
  //Router goes here !
  /* App will be rendered for all routes, routes will be defined
  in here */
  return (
    <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
