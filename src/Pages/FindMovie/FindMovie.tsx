import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Header, Logo, MovieSortFilter, MoviesList, Footer, SearchMovieForm,
} from '../../components';
import { RootState } from '../../redux/store';
import {
  setSearchType,
  setFieldValue,
  setMoviesSortFilter,
  fetchMovies,
  SearchType,
  Filters,
} from '../../redux/moviesSlice';

import style from '../styles.module.scss';

export const FindMovie: React.FC = () => {
  const dispatch = useDispatch();
  const {
    searchData, movies, moviesSortFilter, isLoading,
  } = useSelector((state: RootState) => state.movies);

  const onFieldChange = (value: string) => dispatch(setFieldValue(value));
  const onSelectType = (value: SearchType) => dispatch(setSearchType(value));
  const onSetMoviesSortFilter = (filter: Filters) => dispatch(setMoviesSortFilter(filter));
  const onSearch = () => dispatch(fetchMovies(searchData.fieldValue, searchData.searchType));

  return (
    <div>
      <div className={style.layout}>
        <Header>
          <Logo />
        </Header>
        <SearchMovieForm
          fieldValue={searchData.fieldValue}
          onFieldChange={onFieldChange}
          searchType={searchData.searchType}
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
