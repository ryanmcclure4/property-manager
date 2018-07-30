// @flow
import React from 'react';
import { itemStyle } from './styles';
import { RemovableItem } from 'general';

type $Props = {
  property: {
    name: string,
  },
  onClick: () => {},
};

const PropertyItem = ({ property, onClick }: $Props) => (
  <RemovableItem
    onClick={onClick}
    label={property.name}
    style={itemStyle}
  />
);

export default PropertyItem;
