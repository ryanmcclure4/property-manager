// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import { ThemeContext } from 'general';

type $Props = {
  items: any[],
  baseStyle?: Object,
  itemRenderer?: any => React.Element<*>,
};

const List = ({ items, itemRenderer, baseStyle }: $Props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={css([styles(theme).base, baseStyle])}>
        {items.map(item => itemRenderer(item))}
      </div>
    )}
  </ThemeContext.Consumer>
);

List.defaultProps = {
  itemRenderer: (item: string) => <div>{item}</div>,
  baseStyle: undefined,
};

export default List;
