import React, { Component } from 'react';
import {
  PropertyView,
} from '../main';
import Navigation from './Navigation';
import { css } from 'aphrodite';
import style from './style';

class Base extends Component {
  render() {
    const { properties, loading } = this.props;
    return (
      <div className={css(style.base)}>
        <Navigation />
        {loading ? 'LOADING...' :
        <PropertyView properties={properties} />
      }
      </div>
    );
  }
}

export default Base;
