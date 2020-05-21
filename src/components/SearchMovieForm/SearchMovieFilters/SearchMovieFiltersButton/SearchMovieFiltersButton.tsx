import React from "react";
import s from './searchMovieFiltersButton.module.scss';
interface Props {
    text: string,
    isActive: boolean,
    onClick: (value: string) => void
}

const SearchMovieFiltersButton: React.FC<Props> = ({text,isActive,onClick,...rest}) => {
    return <button className={`${s.button}  ${isActive? s.button_active: ""}`} onClick={() => onClick(text)}>{text}</button>
};

export default SearchMovieFiltersButton;