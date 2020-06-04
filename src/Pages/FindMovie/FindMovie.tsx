import React from "react";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";
import MovieSortFilter from "../../components/MovieSortFilter/MovieSortFilter";
import MoviesList from "../../components/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";
import bgS from "../bgStyles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
	setSearchType,
	setFieldValue,
	setMoviesSortFilter,
	fetchMovies,
	SearchType,
	Filters
} from "../../redux/moviesSlice";

interface Props {

}

const FindMovie: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { searchData, movies, moviesSortFilter,isLoading } = useSelector((state: RootState) => state.movies);

	const onFieldChange = (v: string) => dispatch(setFieldValue(v));
	const onSelectType = (v: SearchType) => dispatch(setSearchType(v));
	const onSetMoviesSortFilter = (f: Filters) => dispatch(setMoviesSortFilter(f));
	const search = () => dispatch(fetchMovies(searchData.fieldValue,searchData.searchType));

	return (
		<div>
			<div className={bgS.bgContainer}>
				<Header>
					<MainTitle/>
				</Header>
				<SearchMovieForm fieldValue={searchData.fieldValue}
					onFieldChange={onFieldChange}
					searchType={searchData.searchType}
					onSelectType={onSelectType}
					search={search}/>
			</div>
			{isLoading && <p>loading</p>}
			{!isLoading &&
            <>
            	<MovieSortFilter movieCount={movies.data.length} onSetMoviesSortFilter={onSetMoviesSortFilter}
            		currentFilter={moviesSortFilter}/>
            	<MoviesList movies={movies.data} sortFilter={moviesSortFilter}/>
            </>
			}

			<Footer/>
		</div>
	);
};

export default FindMovie;