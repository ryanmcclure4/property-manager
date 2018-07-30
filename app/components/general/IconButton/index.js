// @flow
import React from 'react';
import { Button } from './style';
import { Icon } from 'general';

type $Props = {
  icon: string,
  style?: Object,
  onClick?: () => {},
};

const IconButton = ({ icon, onClick, style }: $Props) => (
  <Button
    style={style}
    onClick={onClick}
  >
    <Icon icon={icon} />
  </Button>
);

export default IconButton;
