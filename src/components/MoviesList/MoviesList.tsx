import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import {Filters, Movie} from "../../context/Movies/moviesReducer";
import s from './moviesList.module.scss';
import {SortFunctions} from "../../services/SortMoviesList";
import FilmsNotFound from "../FilmsNotFound/FilmsNotFound";
import {Link} from "react-router-dom";

interface Props {
    movies: Movie[],
    sortFilter: Filters
}

const MoviesList: React.FC<Props> = ({movies, sortFilter}) => {
    const moviesCard = movies.sort(sortFilter === "rating" ? SortFunctions.rating : SortFunctions.releaseDate)
        .map((movie, id) => <Link to={`/movie/${movie.id}`} key={movie.id}><MovieCard data={movie} /></Link> );
    return (
        <>
            <div className={s.movieList}>
                {movies.length === 0 && <FilmsNotFound/>}
                {movies.length !== 0 && moviesCard}
            </div>
        </>
    )
}

export default MoviesList