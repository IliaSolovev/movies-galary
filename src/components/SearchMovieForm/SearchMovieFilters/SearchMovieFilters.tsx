import React from 'react';

import { Button } from '../../Button/Button';

import style from './searchMovieFilters.module.scss';

interface Props {
    searchType:string,
    onSelectType: (value: string) => void
}

export const SearchMovieFilters: React.FC<Props> = ({ searchType, onSelectType }) => {
  const buttons = ['title', 'genre'].map((type, id) => (
    <Button
      key={id}
      active={searchType === type}
      onClick={() => onSelectType(type)}
      type="searchFilter"
    >
      {type}
    </Button>
  ));
  return (
    <div className={style.searchMovieFilters}>
      <div className={style.searchMovieFilters__searchBy}>search by</div>
      <div className={style.searchMovieFilters__buttons}>
        {buttons}
      </div>
    </div>
  );
};
