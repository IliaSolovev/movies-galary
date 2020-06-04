import React from 'react';

import style from './header.module.scss';

export const Header:React.FC = (props) => (
  <header className={style.header}>
    {props.children}
  </header>
);
