import React, { useEffect } from "react";
import bgS from "../bgStyles.module.scss";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";
import MoviesList from "../../components/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import WhiteSearchButton from "../../components/MovieDescription/WhiteSearchButton/WhiteSearchButton";
import MovieDescription from "../../components/MovieDescription/MovieDescription";
import MovieListGenre from "../../components/MovieListGenre/MovieListGenre";
import { Link, useParams } from "react-router-dom";
import { movieApi } from "../../services/Api";
import CatchError from "../../components/CatchError/CatchError";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchMovies, Movie, selectMovie, setIsLoading } from "../../redux/moviesSlice";

interface Props {

}

const FoundMovie: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { isLoading,selectedMovie,movies } = useSelector((state: RootState) => state.movies);
	const { movieId } = useParams();

	useEffect(() => {
		dispatch(setIsLoading(true));
		movieApi.fetchMovie(movieId).then((movie: Movie) => {
			dispatch(selectMovie(movie));
			dispatch(fetchMovies(movie.genres[0], "genre"));
			dispatch(setIsLoading(false));
		});
	}, [movieId]);

	return (
		<div>
			{isLoading && <p>Loading ...</p>}
			{!isLoading &&
            <>
            	<div className={bgS.bgContainer}>
            		<Header>
            			<MainTitle/>
            			<Link to='/'>
            				<WhiteSearchButton/>
            			</Link>
            		</Header>
            		<MovieDescription data={selectedMovie}/>
            	</div>
            	<CatchError>
            		<MovieListGenre data={selectedMovie}/>
            	</CatchError>
            	<MoviesList movies={movies.data} sortFilter={"rating"}/>
            	<Footer/>
            </>}

		</div>
	);
};

export default  React.memo(FoundMovie);