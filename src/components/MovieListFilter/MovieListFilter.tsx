import React from "react";
import s from './movieListFilter.module.scss'
import FilterButton from "./FilterButton/FilterButton";
interface Props {
    movieCount: number
}

const MovieListFilter: React.FC<Props> = ({movieCount,...rest}) => {
    return (
        <div className={s.container}>
            <div>
                {rest.children}
                <div className={s.movieCounter}>{movieCount} movies found</div>
                <div className={s.filters}>
                    <div>Sort by</div>
                    <div className={s.filter__buttons}>
                        <FilterButton text="release date" isActive={false}/>
                        <FilterButton text="rating" isActive={true}/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default MovieListFilter