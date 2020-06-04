import React from 'react';
import s from './searchButton.module.scss';

interface Props {
    onClick: () => void
}

const SearchButton: React.FC<Props> = ({ onClick }) => <button className={s.button} onClick={onClick}>search</button>;

export default SearchButton;
