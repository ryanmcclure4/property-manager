// @flow
import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';
import { ThemeContext } from 'general';

type $Props = {

};

const _ = ({ }: $Props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={css(styles.base)}>
        
      </div>
    )}
  </ThemeContext.Consumer>
);

export default _;
