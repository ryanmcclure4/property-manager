// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import { ThemeContext, List } from 'general';
import PropertyItem from './PropertyItem';

type $Props = {
  properties: {
    name: string,
  }[],
};

const _ = ({ properties, setActiveProperty }: $Props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={css(styles(theme).base)}>
        <List
          items={properties}
          itemRenderer={property => <PropertyItem property={property} onClick={() => setActiveProperty(property._id)} />}
          baseStyle={styles(theme).list}
        />
      </div>
    )}
  </ThemeContext.Consumer>
);

export default _;
