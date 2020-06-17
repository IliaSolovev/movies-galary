import React from 'react';

import { Button } from '..';
import {SortFilters} from "../../types";

import style from './movieSortFilter.module.scss';


interface Props {
    movieCount: number,
    onSetMoviesSortFilter: (filter: SortFilters) => void,
    currentFilter: SortFilters
}

export const MovieSortFilter: React.FC<Props> = ({ movieCount, onSetMoviesSortFilter, currentFilter }) => {
  const filterButtons = ['release date', 'rating'].map((filter: SortFilters, id) => (
    <Button
      key={id}
      active={currentFilter === filter}
      onClick={() => onSetMoviesSortFilter(filter)}
      type="sortFilter"
    >
      {filter}
    </Button>
  ));
  return (
    <div className={style.movieSortFilter}>
      <div>
        <div className={style.movieSortFilter__counter}>
          {movieCount}
          {' '}
          movies found
        </div>
        <div className={style.movieSortFilter__filters}>
          <div>Sort by</div>
          <div className={style.movieSortFilter__filterButton}>
            {filterButtons}
          </div>
        </div>
      </div>
    </div>
  );
};
