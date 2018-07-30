/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import { App, Base } from 'components';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Base}>
      </Route>
    </Switch>
  </App>
);
