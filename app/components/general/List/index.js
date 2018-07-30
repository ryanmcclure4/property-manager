// @flow
import React from 'react';
import { Base } from './styles';

type $Props = {
  items: any[],
  style?: Object,
  itemRenderer?: any => React.Element<*>,
};

const List = ({ items, itemRenderer, style }: $Props) => (
  <Base style={style}>
    {items.map(item => itemRenderer(item))}
  </Base>
);

List.defaultProps = {
  itemRenderer: (item: string) => <div>{item}</div>,
  baseStyle: undefined,
};

export default List;
