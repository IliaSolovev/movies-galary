import React from "react";
import s from "./movieDescription.module.scss"
import {Movie} from "../../context/Movies/moviesReducer";
interface Props {
    data: Movie
}

const MovieDescription = ({data, ...rest}: Props) => {
    return (
        <div className={s.content}>
            <div className={s.poster}>
                <img src={data.poster_path} alt={data.title}/>
            </div>
            <div className={s.description}>
                <h3 className={s.description__title}>{data.title} <div className={s.description__rating}>{data.vote_average}</div></h3>
                <h4 className={s.description__subtitle}>{data.tagline}</h4>
                <div className={s.description__durationRelease}>
                    <div className={s.description__release}>{data.release_date.split('-')[0]}</div>
                    <div className={s.description__duration}>{data.runtime} min</div>
                </div>
                <div className={s.description__overview}>{data.overview}</div>
            </div>
        </div> 
    )
}

export default MovieDescription