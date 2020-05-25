import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';

ReactDom.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root'),
);
