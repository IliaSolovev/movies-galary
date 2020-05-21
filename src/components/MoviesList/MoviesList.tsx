import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import {Filters, Movie} from "../../context/Movies/moviesReducer";
import s from './moviesList.module.scss';
import {SortFunctions} from "../../services/SortMoviesList";
interface Props {
    movies: Movie[],
    sortFilter: Filters
}

const MoviesList: React.FC<Props> = ({movies,sortFilter}) => {
    const moviesCard = movies.sort(sortFilter === "rating"? SortFunctions.rating: SortFunctions.releaseDate).map( (movie, id) => <MovieCard data={movie} key={id}/>);
    return (
        <div className={s.movieList}>
            {movies.length === 0 && <h1>Films Not Found</h1>}
            {movies.length !== 0 && moviesCard}
        </div> 
    )
}

export default MoviesList