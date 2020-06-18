import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import {
  Header, Logo, MoviesList, Footer, MovieDescription, MovieListGenre, CatchError, Button,
} from '../../components';
import {
  MovieCardQueryData,
  MovieCardQueryVars,
  MovieDescriptionQueryData,
  MovieDescriptionQueryVars,
} from '../../types';
import { GET_MOVIE, GET_MOVIES } from '../../queries';

import bgStyle from '../styles.module.scss';


export const FoundMovie: React.FC = () => {
  const { movieId } = useParams();

  const { loading: loadingSelectedMovie, data: selectedMovie } = useQuery<MovieDescriptionQueryData, MovieDescriptionQueryVars>(GET_MOVIE, {
    variables: {
      id: movieId,
    },
  });
  const { loading: loadingMovies, data: moviesData } = useQuery<MovieCardQueryData, MovieCardQueryVars>(GET_MOVIES, {
    variables: {
      searchType: 'genres',
      filter: 'release_date',
      searchValue: selectedMovie?.movie.genres[0] || '',
    },
  });

  if (loadingSelectedMovie || loadingMovies) {
    return <p>Loading...</p>;
  }
  return (
    <div>

      <div className={bgStyle.layout}>
        <Header>
          <Logo />
          <Link to="/">
            <Button type="whiteSearch">search</Button>
          </Link>
        </Header>
        <MovieDescription movie={selectedMovie.movie} />
      </div>
      <CatchError>
        <MovieListGenre movie={selectedMovie.movie} />
      </CatchError>
      <MoviesList movies={moviesData?.movies || []} sortFilter="rating" />
      <Footer />
    </div>
  );
};
