import React from 'react';
import s from './footer.module.scss';
import MainTitle from '../MainTitle/MainTitle';

interface Props {

}

const Footer = (props: Props) => (
  <footer className={s.footer}>
    <MainTitle />
  </footer>
);

export default Footer;
