// @flow
import React from 'react';
import { Button } from './styles';
import { Icon } from 'general';

type $Props = {
  icon: string,
  isActive: boolean,
  onClick: () => any,
};

const CategoryButton = ({ icon, isActive, onClick }: $Props) => (
  <Button
    isActive={isActive}
    onClick={onClick}
  >
    <Icon icon={icon} />
  </Button>
);

export default CategoryButton;
