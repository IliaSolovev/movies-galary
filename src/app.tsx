import React from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import 'normalize.css';
import Footer from "./components/Footer/Footer";
import MoviesState from "./context/Movies/MoviesState";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import MainTitle from "./components/MainTitle/MainTitle";
import MovieListFilter from "./components/MovieListFilter/MovieListFilter";
import s from "./app.module.scss";
import WhiteSearchButtonModule from "./components/MovieDescription/SearchButton/WhiteSearchButton";

const App: React.FC = (props) => {
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
      <div className={s.app}>
          <MoviesState>
              <div className={s.bgContainer}>
                  <Header>
                      <MainTitle/>
                      <WhiteSearchButtonModule/>
                  </Header>
                  {/*<SearchMovieForm/>*/}
                  <MovieDescription data={data}/>
              </div>
              <MovieListFilter movieCount={7}/>
              <MoviesList data={data}/>
              <Footer/>
          </MoviesState>
      </div>
  )
};

export default App
