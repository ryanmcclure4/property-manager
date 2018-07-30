import React, { Component } from 'react';
import Property from './Property';

const views = {
  property: Property,
};

class Main extends Component {
  render() {
    const { ui } = this.props;
    const View = views[ui.view];
    return (
      <View />
    );
  }
}

export default Main;
