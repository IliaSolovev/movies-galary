import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import {Movie} from "../../context/Movies/MoviesContext";

interface Props {
    data: Movie
}

const MoviesList = (props: Props) => {

    return (
        <div> 
        <MovieCard data={props.data}/>
        </div> 
    )
}

export default MoviesList