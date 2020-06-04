import React from 'react';
import { Link } from 'react-router-dom';
import s from './whiteSearchButton.module.scss';

interface Props {

}

const WhiteSearchButton = (props: Props) => <button className={s.button}>search</button>;

export default WhiteSearchButton;
