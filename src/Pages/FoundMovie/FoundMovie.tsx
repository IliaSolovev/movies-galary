import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import {
  Header, Logo, MoviesList, Footer, MovieDescription, MovieListGenre, CatchError, Button,
} from '../../components';
import { Movie } from '../../types';
import { GET_MOVIES } from '../../queries';

import bgStyle from '../styles.module.scss';


export const FoundMovie: React.FC = () => {
  const { movieId } = useParams();

  const { loading, data } = useQuery<{ movie: Movie }>(GET_MOVIES, {
    variables: {
      id: movieId,
    },
  });

  useEffect(() => {
    // dispatch(fetchMovie(movieId));
  }, [movieId]);

  return (
    <div>

      <div className={bgStyle.layout}>
        <Header>
          <Logo />
          <Link to="/">
            <Button type="whiteSearch">search</Button>
          </Link>
        </Header>
        <MovieDescription movie={data.movie} />
      </div>
      <CatchError>
        <MovieListGenre movie={data.movie} />
      </CatchError>
      <MoviesList movies={[data.movie]} sortFilter="rating" />
      <Footer />
    </div>
  );
};
