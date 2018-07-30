// @flow
import React from 'react';
import { Base, Subtitle } from './style';

type $Props = {
  title: string,
  subtitle: string,
};

const Header = ({ title, subtitle}: $Props) => (
  <Base>
    {title}
    <Subtitle>
      {subtitle}
    </Subtitle>
  </Base>
);

export default Header;
