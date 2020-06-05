import React from 'react';

import style from './Button.module.scss';

interface Props {
    onClick?: () => void,
    type: string,
    active: boolean
}

export const Button: React.FC<Props> = ({ children, onClick, type }) => (
  <button
    className={`${style.button} ${style[`__${type}`]}`}
  >
    {children}
  </button>
);
