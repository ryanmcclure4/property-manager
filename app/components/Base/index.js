import React, { Component } from 'react';
import {
  PropertyView,
} from '../main';
import Navigation from './Navigation';
import { css } from 'aphrodite';
import style from './style';
import { ThemeContext, theme } from '../general';


class Base extends Component {
  render() {
    const { business: { loading, properties, activeProperty }, setActiveProperty } = this.props;
    console.log('ACTIVe', activeProperty);
    return (
      <ThemeContext.Provider value={theme}>
        <div className={css(style.base)}>
          <Navigation properties={properties} setActiveProperty={setActiveProperty} />
          {loading ? 'LOADING...' :
          <PropertyView property={properties.find(property => property._id === activeProperty)} />
        }
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Base;
