import React from 'react';

import { SearchMovieFiltersButton } from './SearchMovieFiltersButton/SearchMovieFiltersButton';

import style from './searchMovieFilters.module.scss';

interface Props {
    searchType:string,
    onSelectType: (value: string) => void
}

export const SearchMovieFilters: React.FC<Props> = ({ searchType, onSelectType }) => {
  const buttons = ['title', 'genre'].map((type, id) => (
    <SearchMovieFiltersButton
      text={type}
      key={id}
      isActive={searchType === type}
      onClick={onSelectType}
    />
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
