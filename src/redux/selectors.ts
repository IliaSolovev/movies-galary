import { createSelector } from 'reselect';
import { MoviesReducer } from './moviesReducer';

const movies = (state: MoviesReducer) => state.get('movies');
const selectedMovie = (state: MoviesReducer) => state.get('selectedMovie');
const searchType = (state: MoviesReducer) => state.get('searchType');
const fieldValue = (state: MoviesReducer) => state.get('fieldValue');
const moviesSortFilter = (state: MoviesReducer) => state.get('moviesSortFilter');
const isLoading = (state: MoviesReducer) => state.get('isLoading');

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
