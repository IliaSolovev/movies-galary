import React from 'react';

import { MovieDescriptionData } from '../../types';

import style from './MovieDescription.module.scss';

interface Props {
    movie: MovieDescriptionData
}

export const MovieDescription: React.FC<Props> = ({ movie }) => (
  <div className={style.content}>
    { !movie ? <p>Loading...</p>
      : (
        <>
          <div className={style.poster}>
            <img src={movie?.poster_path} alt={movie?.title} />
          </div>
          <div className={style.description}>
            <h3 className={style.description__title}>
              {movie?.title}
              &nbsp;
              <div className={style.description__rating}>{movie?.rating}</div>
            </h3>
            <h4 className={style.description__subtitle}>{movie?.tagline}</h4>
            <div className={style.description__durationRelease}>
              <div className={style.description__release}>{movie?.release_date.split('-')[0]}</div>
              <div className={style.description__duration}>
                {movie?.runtime}
                &nbsp;
                min
              </div>
            </div>
            <div className={style.description__overview}>{movie?.overview}</div>
          </div>
        </>
      )}
  </div>
);
