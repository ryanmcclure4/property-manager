// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../../routes';
import { loadBusiness } from 'actions/data/business';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  componentDidMount = () => {
    this.props.store.dispatch(loadBusiness());
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
