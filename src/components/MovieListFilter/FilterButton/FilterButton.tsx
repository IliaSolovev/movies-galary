import React from "react";
import s from './filterButton.module.scss';
interface Props {
    text: string,
    isActive: boolean
}

const FilterButton = ({text,isActive,...rest}: Props) => {
    return <button className={`${s.button} ${isActive? s.button_active: ""}`}>{text}</button>
}

export default FilterButton