import React from 'react';

import FilterButton from './FilterButton/FilterButton';
import { Filters } from '../../redux/moviesSlice';

import style from './movieSortFilter.module.scss';

interface Props {
    movieCount: number,
    onSetMoviesSortFilter: (filter: Filters) => void,
    currentFilter: Filters
}

export const MovieSortFilter: React.FC<Props> = ({ movieCount, onSetMoviesSortFilter, currentFilter }) => {
  const filterButtons = ['release date', 'rating'].map((filter: Filters, id) => (
    <FilterButton
      text={filter}
      key={id}
      isActive={currentFilter === filter}
      onClick={() => onSetMoviesSortFilter(filter)}
    />
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
