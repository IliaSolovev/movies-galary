import { ThunkAction } from 'redux-thunk';
import { Map } from 'immutable';
import { Action } from 'redux';
import { movieApi } from '../services/Api';

const ADD_MOVIES = 'movies/ADD_MOVIES';
const SET_SEARCH_TYPE = 'movies/SET_SEARCH_TYPE';
const SET_FIELD_VALUE = 'movies/SET_FIELD_VALUE';
const SET_MOVIES_SORT_FILER = 'movies/SET_MOVIES_SORT_FILER';
const SELECT_MOVIE = 'movies/SELECT_MOVIE';
const SET_IS_LOADING = 'movies/SET_IS_LOADING';

export interface Movie {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  runtime: number,
  genres: string[]
}

export interface Movies {
  data: Movie[],
  total: number,
  offset: number,
  limit: number,
}

export type Filters = 'rating' | 'release date';
export type SearchType = 'genre' | 'title';

export interface State {
  movies: Movies,
  selectedMovie: Movie | null,
  searchType: SearchType,
  fieldValue: string,
  moviesSortFilter: Filters,
  isLoading: boolean
}

export const initialState: State = {
  movies: {
    data: [],
    total: 0,
    offset: 0,
    limit: 0,
  },
  selectedMovie: null,
  searchType: 'genre',
  fieldValue: '',
  moviesSortFilter: 'rating',
  isLoading: false,
};

export const addMovies = (movies: Movies) => ({ type: ADD_MOVIES, payload: movies } as const);
export const setSearchType = (type: SearchType) => ({ type: SET_SEARCH_TYPE, payload: type } as const);
export const setFieldValue = (value: string) => ({ type: SET_FIELD_VALUE, payload: value } as const);
export const setMoviesSortFilter = (filter: Filters) => ({ type: SET_MOVIES_SORT_FILER, payload: filter } as const);
export const selectMovie = (movie: Movie) => ({ type: SELECT_MOVIE, payload: movie } as const);
export const setIsLoading = (isLoading: boolean) => ({ type: SET_IS_LOADING, payload: isLoading } as const);

export type Actions = ReturnType<typeof addMovies>
  | ReturnType<typeof setSearchType>
  | ReturnType<typeof setFieldValue>
  | ReturnType<typeof setMoviesSortFilter>
  | ReturnType<typeof selectMovie>
  | ReturnType<typeof setIsLoading>;

export const moviesReducer = (state = Map(initialState), action: Actions) => {
  switch (action.type) {
    case ADD_MOVIES:
      return state.update('movies', () => action.payload);
    case SET_SEARCH_TYPE:
      return state.update('searchType', () => action.payload);
    case SET_FIELD_VALUE:
      return state.update('fieldValue', () => action.payload);
    case SET_MOVIES_SORT_FILER:
      return state.update('moviesSortFilter', () => action.payload);
    case SELECT_MOVIE:
      return state.update('selectedMovie', () => action.payload);
    case SET_IS_LOADING:
      return state.update('isLoading', () => action.payload);
    default:
      return state;
  }
};
export type MoviesReducer = ReturnType<typeof moviesReducer>;

export type MovieThunk = ThunkAction<void, typeof moviesReducer, unknown, Action<string>>

export const fetchMovies = (fieldValue: string, searchType: SearchType): MovieThunk => async (dispatch): Promise<void> => {
  dispatch(setFieldValue(''));
  const params = `search=${fieldValue}&searchBy=${searchType}${searchType === 'genre' ? 's' : ''}`;
  const movies = await movieApi.fetchMovies(params);

  dispatch(addMovies(movies));
};
export const fetchMovie = (movieId: number): MovieThunk => async (dispatch): Promise<void> => {
  dispatch(setIsLoading(true));
  movieApi.fetchMovie(movieId).then((movie: Movie) => {
    dispatch(selectMovie(movie));
    dispatch(fetchMovies(movie.genres[0], 'genre'));
    dispatch(setIsLoading(false));
  });
};
