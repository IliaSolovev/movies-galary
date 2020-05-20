import React from "react";
import SearchMovieFiltersButton from "./SearchMovieFiltersButton/SearchMovieFiltersButton";
import s from "./searchMovieFilters.module.scss"
interface Props {

}

const SearchMovieFilters = (props: Props) => {
    return (
        <div className={s.searchMovieFilters}>
            <div className={s.searchBy}>search by</div>
            <div className={s.buttons}>
                <SearchMovieFiltersButton text="title" isActive={true}/>
                <SearchMovieFiltersButton text="genre" isActive={false}/>
            </div>
        </div>
    )
};

export default SearchMovieFilters