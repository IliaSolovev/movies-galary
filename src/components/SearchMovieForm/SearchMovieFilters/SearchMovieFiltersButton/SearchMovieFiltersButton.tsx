import React from "react";
import s from './searchMovieFiltersButton.module.scss';
interface Props {
    text: string,
    isActive: boolean
}

const SearchMovieFiltersButton: React.FC<Props> = ({text,isActive,...rest}) => {
    return <button className={`${s.button}  ${isActive? s.button_active: ""}`}>{text}</button>
};

export default SearchMovieFiltersButton;