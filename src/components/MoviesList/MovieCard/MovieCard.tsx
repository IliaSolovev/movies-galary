import React from 'react';

import { Movie } from '../../../redux/moviesSlice';

import style from './MovieCard.module.scss';

interface Props {
    movie: Movie
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const {
    poster_path, title, genres, release_date,
  } = movie;
  return (
    <div className={style.movieCard}>

      <div className={style.movieCard__poster}>
        <img src={poster_path} alt={title} />
      </div>

      <div className={style.movieCard__description}>
        <div className={style.description__titleAndGenre}>
          <div className={style.description__title}>{title}</div>
          <div className={style.description__genre}>{genres.join(' & ')}</div>
        </div>
        <div className={style.description__year}>{release_date.split('-')[0]}</div>
      </div>

    </div>
  );
};
