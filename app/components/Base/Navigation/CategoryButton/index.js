// @flow
import React from 'react';
import { css } from 'aphrodite';
import style from './style';
import { ThemeContext } from '../../../general';

type $Props = {
  label: string,
  icon: string,
  isActive: boolean,
  // theme: Object,
  onClick: () => any,
};

const CategoryButton = ({ label, icon, isActive, onClick }: $Props) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <button
        className={css([style(theme).base, isActive && style(theme).active])}
        onClick={onClick}
      >
        <ion-icon name={icon} />
      </button>
    )}
  </ThemeContext.Consumer>
);

export default CategoryButton;
