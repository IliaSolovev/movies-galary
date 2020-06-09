// import {
//   Action, createSlice, PayloadAction, ThunkAction,
// } from '@reduxjs/toolkit';
// import { movieApi } from '../services/Api';
// //
// // export interface Movie {
// //     id: number,
// //     title: string,
// //     tagline: string,
// //     vote_average: number,
// //     vote_count: number,
// //     release_date: string,
// //     poster_path: string,
// //     overview: string,
// //     budget: number,
// //     revenue: number,
// //     runtime: number,
// //     genres: string[]
// // }
// //
// // export interface Movies {
// //     data: Movie[],
// //     total: number,
// //     offset: number,
// //     limit: number,
// // }
// //
// // export type Filters = 'rating' | 'release date';
// // export type SearchType = 'genre' | 'title';
// //
// // export interface State {
// //     movies: Movies,
// //     moviesSortFilter: Filters,
// //     selectedMovie: Movie | null,
// //     searchData: {
// //         searchType: SearchType,
// //         fieldValue: string,
// //     },
// //     isLoading: boolean
// // }
// //
// // export const initialState: State = {
// //   movies: {
// //     data: [],
// //     total: 0,
// //     offset: 0,
// //     limit: 0,
// //   },
// //   selectedMovie: null,
// //   moviesSortFilter: 'rating',
// //   searchData: {
// //     searchType: 'genre',
// //     fieldValue: '',
// //   },
// //   isLoading: false,
// // };
//
// const moviesSlice = createSlice({
//   name: 'movie',
//   initialState,
//   reducers: {
//     addMovies(state, action: PayloadAction<Movies>) {
//       state.movies = action.payload;
//     },
//     setSearchType(state, action: PayloadAction<SearchType>) {
//       state.searchData.searchType = action.payload;
//     },
//     setFieldValue(state, action: PayloadAction<string>) {
//       state.searchData.fieldValue = action.payload;
//     },
//     setMoviesSortFilter(state, action: PayloadAction<Filters>) {
//       state.moviesSortFilter = action.payload;
//     },
//     selectMovie(state, action: PayloadAction<Movie>) {
//       state.selectedMovie = action.payload;
//     },
//     setIsLoading(state, action: PayloadAction<boolean>) {
//       state.isLoading = action.payload;
//     },
//   },
// });
//
//
// export type MovieThunk = ThunkAction<void, typeof moviesSlice, unknown, Action<string>>
// export const {
//   addMovies, setSearchType, setFieldValue, setMoviesSortFilter, selectMovie, setIsLoading,
// } = moviesSlice.actions;
//
// // export const fetchMovies = (fieldValue: string, searchType: SearchType): MovieThunk => async (dispatch): Promise<void> => {
// //   dispatch(setFieldValue(''));
// //   const params = `search=${fieldValue}&searchBy=${searchType}${searchType === 'genre' ? 's' : ''}`;
// //   const movies = await movieApi.fetchMovies(params);
// //
// //   dispatch(addMovies(movies));
// // };
// // export const fetchMovie = (movieId: number): MovieThunk => async (dispatch): Promise<void> => {
// //   dispatch(setIsLoading(true));
// //   movieApi.fetchMovie(movieId).then((movie: Movie) => {
// //     dispatch(selectMovie(movie));
// //     dispatch(fetchMovies(movie.genres[0], 'genre'));
// //     dispatch(setIsLoading(false));
// //   });
// // };
//
//
// export const moviesReducer = moviesSlice.reducer;
