import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../components/Header/Header';
import { Logo } from '../../components/Logo/Logo';
import MovieSortFilter from '../../components/MovieSortFilter/MovieSortFilter';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Footer } from '../../components/Footer/Footer';
import SearchMovieForm from '../../components/SearchMovieForm/SearchMovieForm';
import { RootState } from '../../redux/store';
import {
  setSearchType,
  setFieldValue,
  setMoviesSortFilter,
  fetchMovies,
  SearchType,
  Filters,
} from '../../redux/moviesSlice';

import bgStyle from '../bgStyles.module.scss';

export const FindMovie: React.FC = () => {
  const dispatch = useDispatch();
  const {
    searchData, movies, moviesSortFilter, isLoading,
  } = useSelector((state: RootState) => state.movies);

  const onFieldChange = (value: string) => dispatch(setFieldValue(value));
  const onSelectType = (value: SearchType) => dispatch(setSearchType(value));
  const onSetMoviesSortFilter = (filter: Filters) => dispatch(setMoviesSortFilter(filter));
  const search = () => dispatch(fetchMovies(searchData.fieldValue, searchData.searchType));

  return (
    <div>
      <div className={bgStyle.bgContainer}>
        <Header>
          <Logo />
        </Header>
        <SearchMovieForm
          fieldValue={searchData.fieldValue}
          onFieldChange={onFieldChange}
          searchType={searchData.searchType}
          onSelectType={onSelectType}
          search={search}
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
