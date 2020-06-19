import React from 'react';

import { SearchField } from './Field/SearchField';
import { SearchMovieFilters } from './SearchMovieFilters/SearchMovieFilters';
import { Button } from '..';

import style from './searchMovieForm.module.scss';
import { SearchType } from '../../types';

interface Props {
    fieldValue: string,
    onFieldChange: (value: string) => void,
    searchType: SearchType,
    onSelectType: (value: SearchType) => void,
    onSearch: () => void
}

export const SearchMovieForm: React.FC<Props> = ({
  fieldValue, onFieldChange, searchType, onSelectType, onSearch,
}) => (
  <div className={style.searchMovie}>
    <div className={style.searchMovie__title}>find your movie</div>
    <div>
      <SearchField value={fieldValue} onChange={onFieldChange} />
    </div>
    <div className={style.searchMovie__buttons}>
      <SearchMovieFilters searchType={searchType} onSelectType={onSelectType} />
      <Button onClick={onSearch} type="search">search</Button>
    </div>
  </div>
);
