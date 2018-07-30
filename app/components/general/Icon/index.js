// @flow
import React from 'react';

type $Props = {
  icon: string,
  style?: Object,
};

const Icon = ({ icon, style }: $Props) => (
  <ion-icon
    name={icon}
    style={style}
  />
);

export default Icon;
