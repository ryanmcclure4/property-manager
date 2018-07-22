import React, { Component } from 'react';
import { css } from 'aphrodite';
import style from './style';

type $Props = {
  title: string,
};

class Header extends Component {
  props: $Props;

  render() {
    const { title } = this.props;

    return (
      <div className={css(style.base)}>
        {title}
      </div>
    );
  }
}

export default Header;
