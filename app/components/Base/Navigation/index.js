import React, { Component } from 'react';
import { css } from 'aphrodite';
import style from './style';
import Category from './Category';

type $Props = {
};

class Navigation extends Component {
  props: $Props;

  render() {
    return (
      <div className={css(style.base)}>
        <div className={css(style.categories)}>
          <Category icon="ios-home" label="Properties" />
          <Category icon="ios-timer" label="Reminders" />
          <Category icon="ios-stats" label="Reports" />
        </div>
      </div>
    );
  }
}

export default Navigation;
