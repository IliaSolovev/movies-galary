import React, {useContext} from "react";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";
import MovieSortFilter from "../../components/MovieSortFilter/MovieSortFilter";
import MoviesList from "../../components/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";
import bgS from "../bgStyles.module.scss";
import {MoviesContext} from "../../context/Movies/MoviesContext";

interface Props {

}

const FindMovie: React.FC<Props> = (props) => {
    const context = useContext(MoviesContext);
    return (
        <div>
            <div className={bgS.bgContainer}>
                <Header>
                    <MainTitle/>
                </Header>
                <SearchMovieForm fieldValue={context.searchData.fieldValue}
                                 onFieldChange={context.setFieldValue}
                                 searchType={context.searchData.searchType}
                                 onSelectType={context.setSearchType}
                                 search={() => context.fetchMovies(context.searchData.fieldValue,context.searchData.searchType)}/>
            </div>
            <MovieSortFilter movieCount={context.movies.data.length} onSetMoviesSortFilter={context.setMoviesSortFilter} currentFilter={context.moviesSortFilter}/>
            <MoviesList movies={context.movies.data} sortFilter={context.moviesSortFilter}/>
            <Footer/>
        </div> 
    )
}

export default FindMovie