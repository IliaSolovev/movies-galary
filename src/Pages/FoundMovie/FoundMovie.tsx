import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Header, Logo, MoviesList, Footer, MovieDescription, MovieListGenre, CatchError, Button,
} from '../../components';
import { RootState } from '../../redux/store';
import { fetchMovie } from '../../redux/moviesSlice';

import bgStyle from '../bgStyles.module.scss';

export const FoundMovie: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, selectedMovie, movies } = useSelector((state: RootState) => state.movies);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [movieId]);

  return (
    <div>
      {isLoading ? <p>Loading ...</p> : (
        <>
          <div className={bgStyle.bgContainer}>
            <Header>
              <Logo />
              <Link to="/">
                <Button type="whiteSearch">search</Button>
              </Link>
            </Header>
            <MovieDescription movie={selectedMovie} />
          </div>
          <CatchError>
            <MovieListGenre movie={selectedMovie} />
          </CatchError>
          <MoviesList movies={movies.data} sortFilter="rating" />
          <Footer />
        </>
      )}
    </div>
  );
};
