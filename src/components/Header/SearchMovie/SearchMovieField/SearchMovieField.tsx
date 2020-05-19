import React from "react";
import s from './searchMovieField.module.scss'
interface Props {
    value: string,
    onChange: (e: React.FormEvent ) => void
}

const SearchMovieField = (props: Props) => {
    // const {value,onChange} = props;
    return (
        <>
            <input type="text" className={s.input} />
        </>
    )

};

export default SearchMovieField;