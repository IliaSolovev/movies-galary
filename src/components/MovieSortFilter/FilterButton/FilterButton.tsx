import React from 'react';
import s from './filterButton.module.scss';

interface Props {
    text: string,
    isActive: boolean,
    onClick: () => void
}

const FilterButton:React.FC<Props> = ({
  text, isActive, onClick, ...rest
}) => <button className={`${s.button} ${isActive ? s.button_active : ''}`} onClick={onClick}>{text}</button>;

export default FilterButton;
