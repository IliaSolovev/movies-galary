import React from "react";
import SearchField from "./Field/SearchField";
import SearchMovieFilters from "./SearchMovieFilters/SearchMovieFilters";
import SearchButton from "./SearchButton/SearchButton";
import s from './searchMovieForm.module.scss';

interface Props {

}

const SearchMovieForm = (props: Props) => {
    return (
        <div className={s.searchMovie}>

            <div className={s.searchMovie__title}>find your movie</div>

            <div>
                <SearchField value={'asd'} onChange={() => {
                }}/>
            </div>
            <div className={s.searchMovie__buttons}>
                <SearchMovieFilters/>
                <SearchButton/>
            </div>
        </div>
    )
};

export default SearchMovieForm;