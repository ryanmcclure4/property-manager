/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MainView from './containers/MainView';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={MainView}>
      </Route>
    </Switch>
  </App>
);
