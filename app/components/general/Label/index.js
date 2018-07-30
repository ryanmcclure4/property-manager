// @flow
import React from 'react';
import { Base } from './styles';

type $Props = {
  label: string,
  style?: Object,
};

const Label = ({ label, style }: $Props) => (
  <Base style={style}>
    {label}
  </Base>
);

export default Label;
