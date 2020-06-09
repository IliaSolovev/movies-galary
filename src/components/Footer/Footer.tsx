import React from 'react';

import { Logo } from '..';

import style from './footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <Logo />
  </footer>
);
