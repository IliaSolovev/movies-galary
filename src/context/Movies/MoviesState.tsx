import React, {useReducer} from 'react';
import {MoviesContext} from './MoviesContext';
import {
    addMovies, Filters,
    initialState, Movie,
    Movies,
    moviesReducer, selectMovie,
    setFieldValue, setIsLoading,
    setMoviesSortFilter,
    setSearchType
} from "./moviesReducer";
import {movieApi} from "../../services/Api";

interface Props {

}

const MoviesState: React.FC<Props> = (props) => {
    const [moviesState, dispatch] = useReducer(moviesReducer, initialState);

    const handleSetFieldValue = (value: string) => dispatch(setFieldValue(value));
    const handleSetSearchType = (type: string) => dispatch(setSearchType(type));
    const fetchMovies = async (fieldValue: string, searchType: string): Promise<void> => {
        dispatch(setFieldValue(''));
        let params;
        if (searchType === "genre") {
            params = `search=${fieldValue}&searchBy=${searchType}s`;
        } else {
            params = `search=${fieldValue}&searchBy=${searchType}`;
        }
        const movies = await movieApi.fetchMovies(params);

        dispatch(addMovies(movies))
    };
    const handleSetMoviesSortFilter = (filter: Filters) => dispatch(setMoviesSortFilter(filter));
    const handleSelectMovie = (movie: Movie) => dispatch(selectMovie(movie));
    const handleSetIsLoading = (isLoading: boolean) => dispatch(setIsLoading(isLoading));

    return (
        <MoviesContext.Provider
            value={{
                movies: moviesState.movies,
                searchData: moviesState.searchData,
                moviesSortFilter: moviesState.moviesSortFilter,
                selectedMovie: moviesState.selectedMovie,
                isLoading: moviesState.isLoading,
                fetchMovies: fetchMovies,
                setSearchType: handleSetSearchType,
                setFieldValue: handleSetFieldValue,
                setMoviesSortFilter: handleSetMoviesSortFilter,
                selectMovie: handleSelectMovie,
                setIsLoading: handleSetIsLoading
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};
export default MoviesState