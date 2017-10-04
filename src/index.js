import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PageComponent from './PageComponent';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <PageComponent />
  </Router>,
  document.getElementById('frame')
);
