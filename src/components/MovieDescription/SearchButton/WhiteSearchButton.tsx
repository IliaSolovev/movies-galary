import React from "react";
import s from './whiteSearchButton.module.scss';
import {Link} from "react-router-dom";
interface Props {

}

const WhiteSearchButton = (props: Props) => {
    return <Link to='/'><button className={s.button}>Search</button></Link>
}

export default WhiteSearchButton