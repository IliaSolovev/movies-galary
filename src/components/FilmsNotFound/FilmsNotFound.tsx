import React from "react";
import s from './filmsNotFound.module.scss';
interface Props {

}

const FilmsNotFound: React.FC<Props> = (props) => {
    return (
        <h2 className={s.title}>
        Films Not Found
        </h2>
    )
};

export default FilmsNotFound