import React from 'react';
import { Link } from 'react-router-dom';

import { MovieCard } from './MovieCard/MovieCard';
import { SortFunctions } from '../../services/SortMoviesList';
import { FilmsNotFound } from '..';
import { Movie } from '../../redux';
import { Filters } from '../../redux/moviesReducer';

import style from './moviesList.module.scss';


interface Props {
    movies: Movie[],
    sortFilter: Filters
}

export const MoviesList: React.FC<Props> = ({ movies = [], sortFilter }) => {
  const sortFn = sortFilter === 'rating' ? SortFunctions.rating : SortFunctions.releaseDate;

  const moviesCard = [...movies].sort(sortFn)
    .map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id}><MovieCard movie={movie} /></Link>);

  return (
    <div className={style.movieList}>
      { movies.length === 0 ? <FilmsNotFound /> : moviesCard }
    </div>
  );
};
