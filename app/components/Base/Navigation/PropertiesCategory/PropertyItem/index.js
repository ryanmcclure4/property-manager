// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import { ThemeContext } from 'general';

type $Props = {
  property: {
    name: string,
  },
};

const PropertyItem = ({ property, onClick }: $Props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <button className={css(styles(theme).base)} onClick={onClick}>
        {property.name} 
      </button>
    )}
  </ThemeContext.Consumer>
);

export default PropertyItem;
