import React from "react";
import s from './SearchButton.module.scss';
interface Props {

}

const SearchButton = (props: Props) => {
    return <button className={s.button}>search</button>
};

export default SearchButton