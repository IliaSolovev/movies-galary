import React, {useReducer} from 'react';
import {MoviesContext} from './MoviesContext';
import {moviesReducer} from "./moviesReducer";

interface Props {

}

const MoviesState: React.FC<Props> = (props) => {
    const [moviesState, dispatch] = useReducer(moviesReducer,{movies: []});

    return (
        <MoviesContext.Provider
            value={
               { movies: moviesState.movies}
            }
        >
            {props.children}
        </MoviesContext.Provider>
    );
};
export default MoviesState