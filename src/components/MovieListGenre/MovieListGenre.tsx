import React from 'react';
import s from './movieListGenre.module.scss';
import { Movie } from '../../redux/moviesSlice';

interface Props {
    data: Movie
}

const MovieListGenre:React.FC<Props> = ({ data }) => (
  <div className={s.container}>
    {data === null && <p>Loading...</p>}
    {data !== null
            && (
            <div>
              Films by
              {' '}
              <span className={s.genre}>
                {data.genres[0]}
                {' '}
                genre
              </span>
            </div>
            )}

  </div>
);

export default MovieListGenre;
