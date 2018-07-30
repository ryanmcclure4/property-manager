// @flow
import React from 'react';
import { ListStyle } from './styles';
import { ThemeContext, List } from 'general';
import PropertyItem from './PropertyItem';

type $Props = {
  properties: string[],
  propertiesById: {
    [string]: {
      _id: string,
      name: string,
    },
  },
  setActiveProperty: (string) => {},
};

const PropertiesCategory = ({ properties, propertiesById, setActiveProperty }: $Props) => (
  <div>
    <List
      items={properties}
      itemRenderer={propertyId => {
        const property = propertiesById[propertyId];
        return (
          <PropertyItem
            key={`property-item-${propertyId}`}
            property={property}
            onClick={() => setActiveProperty(property._id)}
          />
        )
      }}
      style={ListStyle}
    />
  </div>
);

export default PropertiesCategory;
