import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Companies from './components/companies';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Companies} />
  </Route>
);
