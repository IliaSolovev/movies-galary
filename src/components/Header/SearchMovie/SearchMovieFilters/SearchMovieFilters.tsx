import React from "react";
import Button from "./Button/Button";
import s from "./searchMovieFilters.module.scss"
interface Props {

}

const SearchMovieFilters = (props: Props) => {
    return (
        <div className={s.searchMovieFilters}>
            <div className={s.searchBy}>search by</div>
            <div className={s.buttons}>
                <Button text="title" isActive={true}/>
                <Button text="genre" isActive={false}/>
            </div>
        </div>
    )
};

export default SearchMovieFilters