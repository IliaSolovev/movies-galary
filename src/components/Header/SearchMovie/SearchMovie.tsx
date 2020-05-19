import React from "react";
import SearchMovieField from "./SearchMovieField/SearchMovieField";
import SearchMovieFilters from "./SearchMovieFilters/SearchMovieFilters";
import SearchButton from "./SearchButton/SearchButton";
import s from './searchMovie.module.scss';

interface Props {

}

const SearchMovie = (props: Props) => {
    return (
        <div className={s.searchMovie}>

            <div className={s.searchMovie__title}>find your movie</div>

            <div>
                <SearchMovieField value={'asd'} onChange={() => {
                }}/>
            </div>
            <div className={s.searchMovie__buttons}>
                <SearchMovieFilters/>
                <SearchButton/>
            </div>
        </div>
    )
};

export default SearchMovie;