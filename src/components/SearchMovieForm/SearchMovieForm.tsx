import React from 'react';
import SearchField from './Field/SearchField';
import SearchMovieFilters from './SearchMovieFilters/SearchMovieFilters';
import SearchButton from './SearchButton/SearchButton';
import s from './searchMovieForm.module.scss';
import { SearchType } from '../../redux/moviesSlice';

interface Props {
    fieldValue: string,
    onFieldChange: (value: string) => void
    searchType: string,
    onSelectType: (value: SearchType) => void
    search: () => void
}

const SearchMovieForm: React.FC<Props> = ({
  fieldValue, onFieldChange, searchType, onSelectType, search,
}) => (
  <div className={s.searchMovie}>
    <div className={s.searchMovie__title}>find your movie</div>

    <div>
      <SearchField value={fieldValue} onChange={onFieldChange} />
    </div>
    <div className={s.searchMovie__buttons}>
      <SearchMovieFilters searchType={searchType} onSelectType={onSelectType} />
      <SearchButton onClick={search} />
    </div>
  </div>
);

export default SearchMovieForm;
