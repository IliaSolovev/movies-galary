import React from "react";
import {Filters, initialState, Movie} from './moviesReducer'

export const MoviesContext = React.createContext({
    ...initialState,
    fetchMovies: (fieldValue:string,searchType:string) => {},
    setSearchType: (type: string) => {},
    setFieldValue: (value: string) => {},
    setMoviesSortFilter: (filter: Filters) => {},
    selectMovie: (movie: Movie) => {},
    setIsLoading: (isLoading: boolean) => {}
});
