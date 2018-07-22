import React, { Component } from 'react';
import { css } from 'aphrodite';
import style from './style';
import Header from '../Header';

type $Props = {
  title: string,
  styles: Object[] | Object,
  children: React.Element<*>,
};

class View extends Component<$Props> {
  render() {
    const { title, children, styles } = this.props;
    return (
      <div className={css(style.base, styles)}>
        <Header title={title} />
        {children}
      </div>
    );
  }
}

export default View;
