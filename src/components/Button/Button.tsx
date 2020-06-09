import React from 'react';

import style from './Button.module.scss';

export type ButtonTypes = 'search' | 'whiteSearch' | 'searchFilter' | 'sortFilter';

interface Props {
  onClick?: () => void,
  type: ButtonTypes,
  active?: boolean
}

export const Button: React.FC<Props> = ({
  children, onClick, type, active,
}) => (
  <button
    className={`${style.button} ${style[`button_${type}`]} ${active ? style[`button_${type}-active`] : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);
