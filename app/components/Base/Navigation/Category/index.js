import React from 'react';
import { css } from 'aphrodite';
import style from './style';

type $Props = {
  label: string,
  icon: string,
};

const Category = ({ label, icon }: $Props) => (
  <button className={css(style.base)}>
    <ion-icon name={icon} />
  </button>
);

export default Category;
