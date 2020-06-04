import React from 'react';

import { Movie } from '../../redux/moviesSlice';

import style from './movieDescription.module.scss';

interface Props {
    movie: Movie
}

export const MovieDescription: React.FC<Props> = ({ movie }) => (
  <div className={style.content}>
    { movie === null ? <p>Loading...</p>
      : (
        <>
          <div className={style.poster}>
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div className={style.description}>
            <h3 className={style.description__title}>
              {movie.title}
              {' '}
              <div className={style.description__rating}>{movie.vote_average}</div>
            </h3>
            <h4 className={style.description__subtitle}>{movie.tagline}</h4>
            <div className={style.description__durationRelease}>
              <div className={style.description__release}>{movie.release_date.split('-')[0]}</div>
              <div className={style.description__duration}>
                {movie.runtime}
                {' '}
                min
              </div>
            </div>
            <div className={style.description__overview}>{movie.overview}</div>
          </div>
        </>
      )}
  </div>
);
