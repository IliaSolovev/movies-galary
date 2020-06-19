import React from 'react';
import { Link } from 'react-router-dom';

import { MovieCard } from './MovieCard/MovieCard';
import { FilmsNotFound } from '..';
import { SortFilters, MovieCardData } from '../../types';

import style from './moviesList.module.scss';


interface Props {
    movies: MovieCardData[],
    sortFilter: SortFilters,
    onSelectMovie?: (genre: string) => void
}

export const MoviesList: React.FC<Props> = ({ movies = [], onSelectMovie = () => {}, sortFilter }) => {
  const moviesCard = movies
    .map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id} onClick={() => onSelectMovie(movie.genres[0])}><MovieCard movie={movie} /></Link>);

  return (
    <div className={style.movieList}>
      { movies.length === 0 ? <FilmsNotFound /> : moviesCard }
    </div>
  );
};
