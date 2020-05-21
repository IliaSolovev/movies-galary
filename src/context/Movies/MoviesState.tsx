import React, {useReducer} from 'react';
import {MoviesContext} from './MoviesContext';
import {
    addMovies, Filters,
    initialState,
    Movies,
    moviesReducer,
    setFieldValue,
    setMoviesSortFilter,
    setSearchType
} from "./moviesReducer";

interface Props {

}

const MoviesState: React.FC<Props> = (props) => {
    const [moviesState, dispatch] = useReducer(moviesReducer, initialState);

    const handleSetFieldValue = (value: string) => dispatch(setFieldValue(value));
    const handleSetSearchType = (type: string) => dispatch(setSearchType(type));
    const fetchMovies = async (): Promise<void> => {
        dispatch(setFieldValue(''));
        const params = `search=${moviesState.searchData.fieldValue}&searchBy=${moviesState.searchData.searchType}`;
        const movies = await fetch(`https://reactjs-cdp.herokuapp.com/movies?${params}`)
            .then( respones => respones.json());

        dispatch(addMovies(movies))
    };
    const handleSetMoviesSortFilter = (filter: Filters) => dispatch(setMoviesSortFilter(filter));

    return (
        <MoviesContext.Provider
            value={{
                movies: moviesState.movies,
                searchData: moviesState.searchData,
                moviesSortFilter: moviesState.moviesSortFilter,
                fetchMovies: fetchMovies,
                setSearchType: handleSetSearchType,
                setFieldValue: handleSetFieldValue,
                setMoviesSortFilter: handleSetMoviesSortFilter
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};
export default MoviesState