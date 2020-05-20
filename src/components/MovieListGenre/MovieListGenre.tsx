import React from "react";
import s from './movieListGenre.module.scss';
interface Props {
    genre: string
}

const MovieListGenre:React.FC<Props> = (props) => {
    console.log(props.genre)
    return (
        <div className={s.container}>
            <div>
                Films by <span className={s.genre}>{props.genre} genre</span>
            </div>
        </div> 
    )
}

export default MovieListGenre
