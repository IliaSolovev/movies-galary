import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import {
  Header, Logo, MovieSortFilter, MoviesList, Footer, SearchMovieForm,
} from '../../components';
import {
  getMovies,
  getSearchType,
  getFieldValue,
  getMoviesSortFilter,
  getIsLoading,
  setSearchType,
  setFieldValue,
  setMoviesSortFilter,
  fetchMovies,
} from '../../redux';
import {
  Filters, Movies, MoviesReducer, SearchType,
} from '../../redux/moviesReducer';

import style from '../styles.module.scss';
import {RootState} from "../../redux/store";

interface Props {
  searchType: SearchType,
  fieldValue: string,
  moviesSortFilter: Filters,
  isLoading: boolean,
  movies: Movies,
}
const FindMovie: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const {
    searchType, fieldValue, movies, moviesSortFilter, isLoading,
  } = props;
  const onFieldChange = (value: string) => dispatch(setFieldValue(value));
  const onSelectType = (value: SearchType) => dispatch(setSearchType(value));
  const onSetMoviesSortFilter = (filter: Filters) => dispatch(setMoviesSortFilter(filter));
  const onSearch = () => dispatch(fetchMovies(fieldValue, searchType));

  return (
    <div>
      <div className={style.layout}>
        <Header>
          <Logo />
        </Header>
        <SearchMovieForm
          fieldValue={fieldValue}
          onFieldChange={onFieldChange}
          searchType={searchType}
          onSelectType={onSelectType}
          onSearch={onSearch}
        />
      </div>
      {isLoading ? <p>loading</p>
        : (
          <>
            <MovieSortFilter
              movieCount={movies.data.length}
              onSetMoviesSortFilter={onSetMoviesSortFilter}
              currentFilter={moviesSortFilter}
            />
            <MoviesList movies={movies.data} sortFilter={moviesSortFilter} />
          </>
        )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  searchType: getSearchType(state),
  fieldValue: getFieldValue(state),
  movies: getMovies(state),
  moviesSortFilter: getMoviesSortFilter(state),
  isLoading: getIsLoading(state),
});

export const FindMovieContainer = connect(mapStateToProps, null)(FindMovie);
