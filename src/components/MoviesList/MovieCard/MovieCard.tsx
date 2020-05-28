import React from "react";
import s from "./movieCard.module.scss";
import {Movie} from "../../../redux/moviesSlice";

interface Props {
    data: Movie
}

const MovieCard: React.FC<Props> = ({data, ...rest}: Props) => {
    return (
        <div className={s.movieCard}>
                <div className={s.movieCard__poster}>
                    <img src={data.poster_path} alt={data.title}/>
                </div>

            <div className={s.movieCard__description}>
                <div className={s.description__titleAndGenre}>
                    <div className={s.description__title}>{data.title}</div>
                    <div className={s.description__genre}>{data.genres.join(' & ')}</div>
                </div>
                <div className={s.description__year}>{data.release_date.split('-')[0]}</div>
            </div>
        </div>
    )
};

export default MovieCard