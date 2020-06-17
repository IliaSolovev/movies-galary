import React from 'react';

import { Movie } from '../../types';

import style from './movieListGenre.module.scss';

interface Props {
    movie: Movie
}

export const MovieListGenre:React.FC<Props> = ({ movie }) => (
  <div className={style.movieListGenre}>
    {movie === null ? <p>Loading...</p> : (
      <div>
        Films by
        {' '}
        <span className={style.movieListGenre__genre}>
          {movie.genres[0]}
          {' '}
          genre
        </span>
      </div>
    )}

  </div>
);
