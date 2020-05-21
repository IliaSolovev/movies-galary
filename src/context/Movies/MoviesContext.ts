import React from "react";
import {Filters, initialState} from './moviesReducer'

export const MoviesContext = React.createContext({
    ...initialState,
    fetchMovies: () => {},
    setSearchType: (type: string) => {},
    setFieldValue: (value: string) => {},
    setMoviesSortFilter: (filter: Filters) => {},
});
