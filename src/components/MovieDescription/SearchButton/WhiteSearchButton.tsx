import React from "react";
import s from './whiteSearchButton.module.scss';
interface Props {

}

const WhiteSearchButton = (props: Props) => {
    return <button className={s.button}>Search</button>
}

export default WhiteSearchButton