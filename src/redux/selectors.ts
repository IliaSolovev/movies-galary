import { createSelector } from 'reselect';
import { RootState } from './store';

const movies = (state: RootState) => state.movies.get('movies');
const selectedMovie = (state: RootState) => state.movies.get('selectedMovie');
const searchType = (state: RootState) => state.movies.get('searchType');
const fieldValue = (state: RootState) => state.movies.get('fieldValue');
const moviesSortFilter = (state: RootState) => state.movies.get('moviesSortFilter');
const isLoading = (state: RootState) => state.movies.get('isLoading');

export const getMovies = createSelector(
  movies,
  (movies) => movies,
);
export const getSelectedMovie = createSelector(
  selectedMovie,
  (movie) => movie,
);
export const getSearchType = createSelector(
  searchType,
  (type) => type,
);
export const getFieldValue = createSelector(
  fieldValue,
  (value) => value,
);
export const getMoviesSortFilter = createSelector(
  moviesSortFilter,
  (filter) => filter,
);
export const getIsLoading = createSelector(
  isLoading,
  (isLoading) => isLoading,
);
