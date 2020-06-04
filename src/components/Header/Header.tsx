import React from 'react';
import s from './header.module.scss';

const Header:React.FC = (props) => (
  <header className={s.header}>
    {props.children}
  </header>
);

export default Header;
