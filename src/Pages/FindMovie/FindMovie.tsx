import React from "react";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/MainTitle/MainTitle";
import MovieListFilter from "../../components/MovieListFilter/MovieListFilter";
import MoviesList from "../../components/MoviesList/MoviesList";
import Footer from "../../components/Footer/Footer";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";
import bgS from "../bgStyles.module.scss";

interface Props {

}

const FindMovie: React.FC<Props> = (props) => {
    const data = {
        id: 337167,
        title: "Fifty Shades Freed",
        tagline: "Don't miss the climax",
        vote_average: 6.1,
        vote_count: 1195,
        release_date: "2018-02-07",
        poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        budget: 55000000,
        revenue: 136906000,
        genres: [
            "Drama",
            "Romance"
        ],
        runtime: 106
    };
    return (
        <div>
            <div className={bgS.bgContainer}>
                <Header>
                    <MainTitle/>
                </Header>
                <SearchMovieForm/>
            </div>
            <MovieListFilter movieCount={7}/>
            <MoviesList data={data}/>
            <Footer/>
        </div> 
    )
}

export default FindMovie