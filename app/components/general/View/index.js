import React, { Component } from 'react';
import { Base } from './style';
import Header from '../Header';

type $Props = {
  title?: string,
  subtitle?: string,
  style: Object[] | Object,
  children: React.Element<*>,
};

const View = ({ title, subtitle, children, style }: $Props) => (
  <Base style={style}>
    <Header title={title} subtitle={subtitle} />
    {children}
  </Base>
);

export default View;
