import React from 'react';
import SearchMovieFiltersButton from './SearchMovieFiltersButton/SearchMovieFiltersButton';
import s from './searchMovieFilters.module.scss';

interface Props {
    searchType:string,
    onSelectType: (value: string) => void
}

const SearchMovieFilters: React.FC<Props> = ({ searchType, onSelectType }) => {
  const buttons = ['title', 'genre'].map((type, id) => (
    <SearchMovieFiltersButton
      text={type}
      key={id}
      isActive={searchType === type}
      onClick={onSelectType}
    />
  ));
  return (
    <div className={s.searchMovieFilters}>
      <div className={s.searchBy}>search by</div>
      <div className={s.buttons}>
        {buttons}
      </div>
    </div>
  );
};

export default SearchMovieFilters;
