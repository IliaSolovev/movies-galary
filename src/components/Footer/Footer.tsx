import React from 'react';

import { Logo } from '../Logo/Logo';

import s from './footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <Logo />
  </footer>
);
