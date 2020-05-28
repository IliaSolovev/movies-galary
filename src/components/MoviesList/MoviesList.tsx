import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import s from './moviesList.module.scss';
import {SortFunctions} from "../../services/SortMoviesList";
import FilmsNotFound from "../FilmsNotFound/FilmsNotFound";
import {Link} from "react-router-dom";
import {Filters, Movie} from "../../redux/moviesSlice";

interface Props {
    movies: Movie[],
    sortFilter: Filters
}

const MoviesList: React.FC<Props> = ({movies= [], sortFilter}) => {
    const sortFn = sortFilter === "rating" ? SortFunctions.rating : SortFunctions.releaseDate;
    const moviesCard = [...movies].sort(sortFn)
        .map( movie => <Link to={`/movie/${movie.id}`} key={movie.id}><MovieCard data={movie} /></Link> );
    return (
        <>
            <div className={s.movieList}>
                {movies.length === 0 && <FilmsNotFound/>}
                {movies.length !== 0 && moviesCard}
            </div>
        </>
    )
};

export default MoviesList