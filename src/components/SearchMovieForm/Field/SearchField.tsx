import React from "react";
import s from './searchField.module.scss'
interface Props {
    value: string,
    onChange: (e: React.FormEvent ) => void
}

const SearchField = (props: Props) => {
    // const {value,onChange} = props;
    return (
        <>
            <input type="text" className={s.input} />
        </>
    )

};

export default SearchField;