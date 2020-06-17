import React from 'react';

import { Button } from '../..';

import style from './searchMovieFilters.module.scss';
import { SearchType } from '../../../types';

interface Props {
    searchType: SearchType,
    onSelectType: (value: string) => void
}

export const SearchMovieFilters: React.FC<Props> = ({ searchType, onSelectType }) => {
  const buttons = ['title', 'genres'].map((type, id) => (
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
      <div className={style.searchMovieFilters__actions}>
        {buttons}
      </div>
    </div>
  );
};
