import React from "react";
import s from './whiteSearchButton.module.scss';
import {Link} from "react-router-dom";
interface Props {

}

const WhiteSearchButton = (props: Props) => {
    return <button className={s.button}>search</button>
}

export default WhiteSearchButton