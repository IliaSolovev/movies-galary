import React, {useContext, useEffect, useState} from "react";
import bgS from "../bgStyles.module.scss";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";
import MoviesList from "../../components/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import WhiteSearchButton from "../../components/MovieDescription/WhiteSearchButton/WhiteSearchButton";
import MovieDescription from "../../components/MovieDescription/MovieDescription";
import MovieListGenre from "../../components/MovieListGenre/MovieListGenre";
import {MoviesContext} from "../../context/Movies/MoviesContext";
import {Link, useParams} from "react-router-dom";
import {Movie} from "../../context/Movies/moviesReducer";
import {movieApi} from "../../services/Api";
import CatchError from "../../components/CatchError/CatchError";

interface Props {

}

const FoundMovie: React.FC<Props> = (props) => {
    const context = useContext(MoviesContext);
    let {movieId} = useParams();
    useEffect(() => {
        context.setIsLoading(true);
        movieApi.fetchMovie(movieId).then((movie: Movie) => {
            context.selectMovie(movie);
            context.fetchMovies(movie.genres[0], 'genres');
            context.setIsLoading(false);
        });
    }, [movieId]);
    return (
        <div>
            {context.isLoading && <p>Loading ...</p>}
            {!context.isLoading &&
            <>
              <div className={bgS.bgContainer}>
                <Header>
                  <MainTitle/>
                  <Link to='/'>
                  <WhiteSearchButton/>
                  </Link>
                </Header>
                <MovieDescription data={context.selectedMovie}/>
              </div>
                <CatchError>
                  <MovieListGenre data={context.selectedMovie}/>
                </CatchError>
              <MoviesList movies={context.movies.data} sortFilter={'rating'}/>
              <Footer/>
            </>}

        </div>
    )
}

export default  React.memo(FoundMovie);