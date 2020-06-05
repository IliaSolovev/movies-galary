import React from 'react';

import style from './searchMovieFiltersButton.module.scss';

interface Props {
  text: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

export const SearchMovieFiltersButton: React.FC<Props> = ({ text, isActive, onClick }) => (
  <button
    className={`${style.button}  ${isActive ? style.button_active : ''}`}
    onClick={() => onClick(text)}
  >
    {text}
  </button>
);
