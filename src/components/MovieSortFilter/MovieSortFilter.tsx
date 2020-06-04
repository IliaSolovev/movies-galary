import React from 'react';
import s from './movieSortFilter.module.scss';
import FilterButton from './FilterButton/FilterButton';
import { Filters } from '../../redux/moviesSlice';

interface Props {
    movieCount: number,
    onSetMoviesSortFilter: (filter: Filters) => void,
    currentFilter: Filters
}

const MovieSortFilter: React.FC<Props> = ({
  movieCount, onSetMoviesSortFilter, currentFilter, ...rest
}) => {
  const filterButtons = ['release date', 'rating'].map((filter: Filters, id) => (
    <FilterButton
      text={filter}
      key={id}
      isActive={currentFilter === filter}
      onClick={() => onSetMoviesSortFilter(filter)}
    />
  ));
  return (
    <div className={s.container}>
      <div>
        <div className={s.movieCounter}>
          {movieCount}
          {' '}
          movies found
        </div>
        <div className={s.filters}>
          <div>Sort by</div>
          <div className={s.filter__buttons}>
            {filterButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSortFilter;
