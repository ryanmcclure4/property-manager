// @flow
import React from 'react';
import { Base, Item, ActiveBarWrapper, ActiveBar } from './styles';

type $Props = {
  items: {
    label: string,
    value: string | number,
  }[],
  activeItem: string,
  onSelect: string => any,
};

const HorizontalNavigation = ({ items, activeItem, onSelect }: $Props) => {
  const selectedIndex = items.map(item => item.value).indexOf(activeItem);
  console.log('ITESMS', items.length);
  return (
    <Base>
      {items.map(item => (
        <Item
          isActive={activeItem === item.value}
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </Item>
      ))}
      <ActiveBarWrapper
        selectedIndex={selectedIndex}
        totalItems={items.length}
      >
        <ActiveBar />
      </ActiveBarWrapper>
    </Base>
  );
}

export default HorizontalNavigation;
