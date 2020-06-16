import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import {
  Button,
  CatchError,
  Footer,
  Header,
  Logo,
  MovieDescription,
  MovieListGenre,
  MoviesList,
} from '../../components';
import {
  fetchMovie, getIsLoading, getMovies, getSelectedMovie, Movie, Movies,
} from '../../redux';

import style from '../styles.module.scss';
import { RootState } from '../../redux/store';

interface Props {
  isLoading: boolean,
  selectedMovie: Movie | null,
  movies: Movies,
}

const FoundMovie: React.FC<Props> = ({ isLoading, selectedMovie, movies }) => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [movieId]);

  return (
    <div>
      {isLoading ? <p>Loading ...</p> : (
        <>
          <div className={style.layout}>
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

const mapStateToProps = (state: RootState) => ({
  isLoading: getIsLoading(state),
  selectedMovie: getSelectedMovie(state),
  movies: getMovies(state),
});

export const FoundMovieContainer = connect(mapStateToProps, {})(FoundMovie);
